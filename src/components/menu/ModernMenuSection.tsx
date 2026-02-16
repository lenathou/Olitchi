'use client';

import { useState } from 'react';
import { useIsMobile } from '@/lib/hooks/useMediaQuery';
import { plats, petitesFaims, boissons } from '@/data/menu-data';
import { ModernProductCard } from './ModernProductCard';
import { MobileMenuTabs } from './MobileMenuTabs';
import { DesktopMenuTabs } from './DesktopMenuTabs';
import { SectionBadge } from '@/components/ui/section-badge';
import { ChefHat } from 'lucide-react';
import Image from 'next/image';

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
    <div className="min-h-screen">
      {/* Header Premium */}
      <div className="pt-12 pb-8 lg:pt-16 lg:pb-12 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionBadge icon={ChefHat} label="La Carte" />

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif mb-6 text-foreground">
            Notre <span className="text-primary italic">Menu</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez nos spécialités afro-antillaises préparées avec passion.
            Des saveurs authentiques pour un voyage culinaire unique.
          </p>
        </div>
      </div>

      {/* Navigation Sticky */}
      <div >
        <div className="container mx-auto px-4 py-4">
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
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Category Info Pill */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full pl-2 pr-6 py-2 shadow-sm border border-primary/10">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
              {categories.find(cat => cat.id === activeCategory)?.emoji}
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-foreground leading-tight">
                {categories.find(cat => cat.id === activeCategory)?.label}
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                {currentItems.length} produit{currentItems.length > 1 ? 's' : ''} disponibles
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`
          grid gap-6 lg:gap-8
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
          <div className="text-center py-24 bg-secondary/5 rounded-[3rem] border border-dashed border-primary/20">
            <div className="text-6xl mb-6 opacity-80 grayscale">🍽️</div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Aucun produit dans cette catégorie
            </h3>
            <p className="text-muted-foreground">
              Revenez bientôt pour découvrir nos nouveautés !
            </p>
          </div>
        )}
      </div>
    </div>
  );
}