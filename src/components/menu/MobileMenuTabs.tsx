'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface Category {
  id: string;
  label: string;
  emoji: string;
}

type MenuCategory = 'bokits' | 'grillades' | 'autres' | 'petitesFaims' | 'boissons';

// Fonction pour mapper les catégories aux noms d'icônes
function getIconName(categoryId: string): string {
  const iconMap: Record<string, string> = {
    'bokits': 'bokit-icon.webp',
    'grillades': 'grillades-icon.webp',
    'autres': 'manioc-icon.webp',
    'petitesFaims': 'fries-icon.webp',
    'boissons': 'drinks-icon.webp'
  };
  return iconMap[categoryId] || 'bokit-icon.webp';
}

interface MobileMenuTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: MenuCategory) => void;
}

export function MobileMenuTabs({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: MobileMenuTabsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active category
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(
        `[data-category="${activeCategory}"]`
      ) as HTMLElement;
      
      if (activeElement) {
        const container = scrollContainerRef.current;
        const containerWidth = container.offsetWidth;
        const elementLeft = activeElement.offsetLeft;
        const elementWidth = activeElement.offsetWidth;
        
        const scrollLeft = elementLeft - (containerWidth / 2) + (elementWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory]);

  return (
    <div className="py-4">
      {/* Scrollable tabs */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        } as React.CSSProperties}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              data-category={category.id}
              onClick={() => onCategoryChange(category.id as MenuCategory)}
              className={`
                flex-shrink-0 flex flex-col items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300
                ${isActive 
                  ? 'bg-orange-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }
              `}
            >
              <div className="w-8 h-8 relative">
                <Image
                  src={`/images/nav/${getIconName(category.id)}`}
                  alt={category.label}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-medium whitespace-nowrap">
                {category.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {categories.map((category) => (
          <button
            key={`dot-${category.id}`}
            onClick={() => onCategoryChange(category.id as MenuCategory)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${activeCategory === category.id 
                ? 'bg-orange-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
              }
            `}
            aria-label={`Aller à ${category.label}`}
          />
        ))}
      </div>
    </div>
  );
}