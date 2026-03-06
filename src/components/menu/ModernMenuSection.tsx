'use client';

import { useState } from 'react';
import { useIsMobile } from '@/lib/hooks/useMediaQuery';
import { ModernProductCard } from './ModernProductCard';
import { MobileMenuTabs } from './MobileMenuTabs';
import { DesktopMenuTabs } from './DesktopMenuTabs';
import { SectionBadge } from '@/components/ui/section-badge';
import { ChefHat } from 'lucide-react';
import Image from 'next/image';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  headerStagger,
  fadeUp,
  pillReveal,
  gridStagger,
  cardReveal,
} from '@/lib/animations/menu/menu-animations';

interface ProductItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  sortOrder: number;
  isAvailable: boolean;
}

interface ModernMenuSectionProps {
  menuData: Record<string, ProductItem[]>;
  categories: { id: string; label: string; emoji: string }[];
}

export function ModernMenuSection({ menuData, categories }: ModernMenuSectionProps) {
  const categoryIds = categories.map(c => c.id);
  const [activeCategory, setActiveCategory] = useState(categoryIds[0] || '');
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const currentItems = menuData[activeCategory] || [];

  const motionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, animate: 'visible' as const };

  const scrollRevealProps = shouldReduceMotion
    ? {}
    : {
      initial: 'hidden' as const,
      whileInView: 'visible' as const,
      viewport: { once: true, amount: 0.3 },
    };

  return (
    <div className="min-h-screen">
      {/* Header Premium */}
      <motion.div
        className="pt-12 pb-8 lg:pt-16 lg:pb-12 relative"
        variants={shouldReduceMotion ? undefined : headerStagger}
        {...motionProps}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div variants={shouldReduceMotion ? undefined : fadeUp}>
            <SectionBadge icon={ChefHat} label="La Carte" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif mb-6 text-foreground"
            variants={shouldReduceMotion ? undefined : fadeUp}
          >
            Notre <span className="text-primary italic">Menu</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={shouldReduceMotion ? undefined : fadeUp}
          >
            Découvrez nos spécialités afro-antillaises préparées avec passion.
            Des saveurs authentiques pour un voyage culinaire unique.
          </motion.p>
        </div>
      </motion.div>

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

        {/* Products Grid — stagger reveal on category change */}
        <motion.div
          className={`
            grid gap-6 lg:gap-8
            ${isMobile
              ? 'grid-cols-1'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }
          `}
          key={activeCategory + '-grid'}
          variants={shouldReduceMotion ? undefined : gridStagger}
          {...motionProps}
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={shouldReduceMotion ? undefined : cardReveal}
            >
              <ModernProductCard
                id={item.id}
                nom={item.name}
                description={item.description || undefined}
                prix={item.price}
                image={item.imagePath || undefined}
                index={index}
                isMobile={isMobile}
              />
            </motion.div>
          ))}
        </motion.div>

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