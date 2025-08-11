'use client';

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

interface DesktopMenuTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: MenuCategory) => void;
}

export function DesktopMenuTabs({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: DesktopMenuTabsProps) {
  return (
    <div className="py-6">
      <div className="flex justify-center">
        <div className="inline-flex bg-gray-100 rounded-2xl p-2 gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id as MenuCategory)}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 font-medium
                  ${isActive 
                    ? 'bg-white text-orange-600 shadow-md scale-105' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }
                `}
              >
                <div className="w-6 h-6 relative">
                  <Image
                    src={`/images/nav/${getIconName(category.id)}`}
                    alt={category.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="whitespace-nowrap">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active indicator line */}
      <div className="relative mt-4">
        <div className="h-px bg-gray-200 w-full" />
        <div 
          className="absolute top-0 h-px bg-orange-600 transition-all duration-300 ease-out"
          style={{
            width: `${100 / categories.length}%`,
            left: `${(categories.findIndex(cat => cat.id === activeCategory) * 100) / categories.length}%`
          }}
        />
      </div>
    </div>
  );
}