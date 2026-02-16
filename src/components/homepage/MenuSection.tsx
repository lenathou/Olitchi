/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ChefHat, Flame, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { plats } from '@/data/plats';
import { useIsMobile } from '@/lib/hooks';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  headerStagger,
  fadeUp,
  gridStagger,
  cardReveal,
  cardHover,
  ctaReveal,
  arrowHover,
  slideActive,
  slideInactive,
  slideDragging,
  dotActive,
  dotInactive,
} from '@/lib/animations/menu-animations';

interface MenuSectionProps {
  className?: string;
}

interface MenuItem {
  id: string;
  nom: string;
  description: string;
  prix: number;
  image?: string;
  popular?: boolean;
  spicy?: boolean;
}

export function MenuSection({ className = '' }: MenuSectionProps) {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);

    // Drag feedback
    const onPointerDown = () => setIsDragging(true);
    const onPointerUp = () => setIsDragging(false);
    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
    };
  }, [emblaApi, onSelect]);

  // Sélection des plats populaires
  const platsPopolaires: MenuItem[] = [
    {
      id: plats.bokits[1]?.id ?? '',
      nom: plats.bokits[1]?.nom ?? '',
      description: plats.bokits[1]?.description ?? '',
      prix: plats.bokits[1]?.prix ?? 0,
      image: plats.bokits[1]?.image,
      popular: true,
      spicy: true
    },
    {
      id: plats.bokits[3]?.id ?? '',
      nom: plats.bokits[3]?.nom ?? '',
      description: plats.bokits[3]?.description ?? '',
      prix: plats.bokits[3]?.prix ?? 0,
      image: plats.bokits[3]?.image,
      popular: true
    },
    {
      id: plats.grillades[0]?.id ?? '',
      nom: plats.grillades[0]?.nom ?? '',
      description: plats.grillades[0]?.description ?? '',
      prix: plats.grillades[0]?.prix ?? 0,
      image: plats.grillades[0]?.image,
      popular: true
    },
    {
      id: plats.autres[0]?.id ?? '',
      nom: plats.autres[0]?.nom ?? '',
      description: plats.autres[0]?.description ?? '',
      prix: plats.autres[0]?.prix ?? 0,
      image: plats.autres[0]?.image,
      popular: true
    }
  ].filter(item => item.id !== '');

  // ── Desktop Card ──────────────────────────────
  const renderMenuItem = (item: MenuItem) => (
    <motion.div key={item.id} variants={cardReveal}>
      <motion.div
        whileHover={shouldReduceMotion ? undefined : cardHover}
      >
        <Card
          className="group flex flex-col relative overflow-hidden border-white border-2 bg-primary/10 shadow-sm rounded-3xl"
        >
          {/* Badges */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            {item.popular && (
              <Badge className="bg-primary hover:bg-primary/90 text-white border-none shadow-sm px-3 py-1 text-xs font-bold rounded-full">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Populaire
              </Badge>
            )}
            {item.spicy && (
              <Badge variant="destructive" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground border-none shadow-sm px-3 py-1 text-xs font-bold rounded-full">
                <Flame className="w-3 h-3 mr-1 fill-current" />
                Épicé
              </Badge>
            )}
          </div>

          {/* Image du plat */}
          {item.image && (
            <div className="relative h-48 w-full overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.nom}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500 relative z-0 drop-shadow-product"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          {/* Contenu */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-foreground leading-tight">
                {item.nom}
              </h3>
              {item.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="text-xl font-bold text-foreground font-serif">
                {item.prix.toFixed(2).replace('.', ',')}€
              </span>
              <Button
                variant="cream"
                className="px-5 h-9"
                asChild
              >
                <Link href="/menu">
                  Commander
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );

  // ── Mobile Card (avec emphase active) ─────────
  const renderMobileMenuItem = (item: MenuItem, index: number) => {
    const isActive = index === selectedIndex;

    return (
      <div key={item.id} className="embla__slide flex-[0_0_92vw] min-w-0 px-2">
        <motion.div
          className="relative w-full pt-4 pb-2"
          animate={
            shouldReduceMotion
              ? undefined
              : isDragging && isActive
                ? slideDragging
                : isActive
                  ? slideActive
                  : slideInactive
          }
        >
          {/* Container de texte - pleine largeur, positionné en bas */}
          <Card className="relative bg-white/30 shadow-md border-1 border-white rounded-[2rem] mt-12 z-0 overflow-visible h-48">
            <CardContent className="p-0 h-full relative">
              {/* Titre - Top Right */}
              <div className="absolute top-6 right-5 left-40 text-right">
                <h3 className="text-lg font-serif font-bold text-foreground leading-tight">
                  {item.nom}
                </h3>
              </div>

              {/* Actions - Bottom Left (sous l'image) */}
              <div className="absolute bottom-0 left-5 flex items-center gap-3 ">
                <div className="text-lg font-bold text-foreground font-serif">
                  {item.prix.toFixed(2).replace('.', ',')}€
                </div>
                <Button
                  variant="cream"
                  className="px-5 h-9"
                  asChild
                >
                  <Link href="/menu">
                    Commander
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Container d'image - positionné au dessus à gauche */}
          {item.image && (
            <div className="absolute left-0 top-0 w-40 h-44 z-10">
              <div className="relative w-full h-full bg-secondary rounded-[2rem] shadow-xl overflow-hidden transform -rotate-1 border-1 border-white p-2">
                {item.popular && (
                  <Badge className="absolute top-3 left-3 z-20 bg-primary hover:bg-primary/90 text-white border-none shadow-md px-2.5 py-1 text-xs font-bold rounded-full">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Populaire
                  </Badge>
                )}
                <div className="relative w-full h-full p-2">
                  <Image
                    src={item.image}
                    alt={item.nom}
                    fill
                    className="object-contain drop-shadow-product scale-110"
                    sizes="(max-width: 768px) 160px"
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    );
  };

  // Viewport options pour le scroll reveal
  const scrollRevealProps = shouldReduceMotion
    ? {}
    : {
      initial: 'hidden' as const,
      whileInView: 'visible' as const,
      viewport: { once: true, amount: 0.3 },
    };

  return (
    <section id="menu" className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">

        {/* ── Header : Badge + H2 + paragraphe (scroll reveal) ── */}
        <motion.div
          className="text-center mb-10"
          variants={headerStagger}
          {...scrollRevealProps}
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center bg-gradient-premium-orange rounded-full p-[2px] pr-6 shadow-md mb-6 hover:shadow-lg transition-all transform hover:scale-105">
              <div className="bg-card rounded-full p-2">
                <ChefHat className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold tracking-wide text-white ml-3 text-base">Notre Carte</span>
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
            variants={fadeUp}
          >
            Saveurs <span className="text-primary">Authentiques</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
            variants={fadeUp}
          >
            Une fusion gourmande entre la Guadeloupe et la Côte d'Ivoire, préparée avec passion.
          </motion.p>
        </motion.div>

        {/* ── Plats populaires ───────────────────────── */}
        <div className="mb-12">

          {/* Mobile: Carousel avec emphase active */}
          {isMobile ? (
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-0">
                  {platsPopolaires.map((item, index) => renderMobileMenuItem(item, index))}
                </div>
              </div>

              {/* Dot Navigation animés */}
              <div className="flex justify-center gap-2 mt-6">
                {platsPopolaires.map((_, index) => (
                  <motion.button
                    key={index}
                    className="h-2 rounded-full bg-primary"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : index === selectedIndex
                          ? dotActive
                          : dotInactive
                    }
                    onClick={() => emblaApi?.scrollTo(index)}
                    aria-label={`Aller au produit ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop: Grid avec scroll reveal + stagger */
            <motion.div
              className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              variants={gridStagger}
              {...scrollRevealProps}
            >
              {platsPopolaires.map((item) => renderMenuItem(item))}
            </motion.div>
          )}
        </div>

        {/* ── CTA "Explorer tout le Menu" (scroll reveal + hover flèche) ── */}
        <motion.div
          className="text-center mt-12"
          variants={ctaReveal}
          {...scrollRevealProps}
        >
          <motion.div
            className="inline-block"
            whileHover={shouldReduceMotion ? undefined : 'hover'}
          >
            <Button
              size="lg"
              variant="tertiary"
              className="px-10 py-7 text-xl font-bold rounded-full shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/menu">
                Explorer tout le Menu
                <motion.span
                  className="inline-block ml-2"
                  variants={{ hover: arrowHover }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default MenuSection;