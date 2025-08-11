'use client';

import { useState } from 'react';
import { useIsMobile } from '@/lib/hooks/useMediaQuery';
import { plats, petitesFaims, boissons } from '@/data/menu-data';
import { ModernProductCard } from './ModernProductCard';
import { MobileMenuTabs } from './MobileMenuTabs';
import { DesktopMenuTabs } from './DesktopMenuTabs';

type MenuCategory = 'bokits' | 'grillades' | 'autres' | 'petitesFaims' | 'boissons';

interface MenuData {
  [key: string]: readonly {
    id: string;
    nom: string;
    description?: string;
    prix: number;
    image?: string;
  }[];
}

const menuData: MenuData = {
  bokits: plats.bokits,
  grillades: plats.grillades,
  autres: plats.autres,
  petitesFaims,
  boissons,
};

const categories = [
  { id: 'bokits', label: 'Bokits', emoji: '🥪' },
  { id: 'grillades', label: 'Grillades', emoji: '🔥' },
  { id: 'autres', label: 'Autres', emoji: '🍽️' },
  { id: 'petitesFaims', label: 'Petites Faims', emoji: '🍟' },
  { id: 'boissons', label: 'Boissons', emoji: '🥤' },
];

export function ModernMenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('bokits');
  const isMobile = useIsMobile();

  const currentItems = menuData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <div className="pt-16 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            Notre Menu
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez nos spécialités afro-antillaises préparées avec passion
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          {isMobile ? (
            <MobileMenuTabs 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          ) : (
            <DesktopMenuTabs 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Category Info */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border">
            <span className="text-2xl">
              {categories.find(cat => cat.id === activeCategory)?.emoji}
            </span>
            <span className="font-medium text-gray-700">
              {categories.find(cat => cat.id === activeCategory)?.label}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 rounded-full px-3 py-1">
              {currentItems.length} produit{currentItems.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`
          grid gap-6
          ${isMobile 
            ? 'grid-cols-1' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }
        `}>
          {currentItems.map((item, index) => (
            <ModernProductCard 
              key={item.id}
              {...item}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Empty State */}
        {currentItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              Aucun produit dans cette catégorie
            </h3>
            <p className="text-gray-500">
              Revenez bientôt pour découvrir nos nouveautés !
            </p>
          </div>
        )}
      </div>
    </div>
  );
}