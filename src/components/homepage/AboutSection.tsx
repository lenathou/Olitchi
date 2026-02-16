/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChefHat, Heart, Star, Users, Award, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/lib/hooks';
import { SectionBadge } from '@/components/ui/section-badge';
import { motion, useReducedMotion } from 'framer-motion';
import {
  sectionHeaderStagger,
  gridStagger,
  fadeUp,
  cardReveal,
  fadeLeft,
  fadeRight,
  scaleReveal,
  cardHover,
  imageHover,
  scrollRevealConfig,
} from '@/lib/animations/shared-animations';

interface AboutSectionProps {
  className?: string;
}

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Clients satisfaits',
    description: 'Chaque jour'
  },
  {
    icon: Award,
    value: '15',
    label: 'Années d\'expérience',
    description: 'En cuisine'
  },
  {
    icon: Star,
    value: '4.8/5',
    label: 'Note moyenne',
    description: 'Avis clients'
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Fait maison',
    description: 'Recettes authentiques'
  }
];

const values = [
  {
    image: '/images/icons/toque.webp',
    title: 'Savoir-faire Authentique',
    description: 'Nos recettes traditionnelles afro-antillaises transmises de génération en génération'
  },
  {
    image: '/images/icons/coeur.webp',
    title: 'Ingrédients Frais',
    description: 'Sélection rigoureuse de produits locaux et de saison pour une qualité optimale'
  },
  {
    image: '/images/food-truck.webp',
    title: 'Proximité & Mobilité',
    description: 'Nous venons à votre rencontre dans toute l\'Essonne avec notre food truck'
  }
];

export function AboutSection({ className = '' }: AboutSectionProps) {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

  return (
    <section id="about" className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* ── Header (scroll reveal stagger) ── */}
        <motion.div
          className="text-center mb-10"
          variants={sectionHeaderStagger}
          {...revealProps}
        >
          <motion.div className="flex justify-center mb-6" variants={fadeUp}>
            <div className="inline-flex items-center bg-gradient-premium-orange rounded-full p-[2px] pr-6 shadow-md hover:shadow-lg transition-all transform hover:scale-105">
              <div className="bg-card rounded-full p-2">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold tracking-wide text-white ml-3 text-base">Notre Histoire</span>
            </div>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground relative inline-block"
            variants={fadeUp}
          >
            <span className="hidden md:inline-block absolute top-1/2 right-full mr-4 w-12 h-[1px] bg-primary/40"></span>
            Passion & <span className="text-primary">Authenticité</span>
            <span className="hidden md:inline-block absolute top-1/2 left-full ml-4 w-12 h-[1px] bg-primary/40"></span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            Depuis 2020, O'Litchi parcourt l'Essonne pour partager les saveurs authentiques
            de la cuisine afro-antillaise avec passion et générosité.
          </motion.p>
        </motion.div>

        {/* ── Content Block: Text & Image (scroll reveal) ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
          variants={sectionHeaderStagger}
          {...revealProps}
        >
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1 space-y-6 text-center lg:text-left"
            variants={fadeLeft}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notre aventure a commencé avec une simple envie : faire découvrir les saveurs
              uniques de la cuisine afro-antillaise à travers un concept de food truck moderne
              et authentique.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chaque bokit, chaque grillade, chaque plat est préparé avec des ingrédients
              soigneusement sélectionnés et des recettes traditionnelles qui racontent
              l'histoire de nos origines.
            </p>
          </motion.div>

          {/* Food Truck Image */}
          <motion.div className="order-1 lg:order-2 relative" variants={fadeRight}>
            <motion.div
              className="relative h-64 lg:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500"
              whileHover={shouldReduceMotion ? undefined : imageHover}
            >
              <Image
                src="/images/truck.webp"
                alt="Food truck O'Litchi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute -bottom-5 right-4 z-20">
              <Badge className="bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm font-bold shadow-lg rounded-full">
                <Truck className="w-4 h-4 mr-2" />
                Food Truck Authentique
              </Badge>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Values Header (scroll reveal) ── */}
        <motion.div
          className="text-center mb-10 flex items-center justify-center gap-4"
          variants={fadeUp}
          {...revealProps}
        >
          <span className="h-[1px] w-12 bg-primary/30 hidden md:block"></span>
          <span className="w-2 h-2 rounded-full bg-primary/20 hidden md:block"></span>
          <h3 className="text-3xl font-serif font-bold text-foreground">Nos Valeurs</h3>
          <span className="w-2 h-2 rounded-full bg-primary/20 hidden md:block"></span>
          <span className="h-[1px] w-12 bg-primary/30 hidden md:block"></span>
        </motion.div>

        {/* ── Values Grid (scroll reveal + stagger) ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20 mb-16"
          variants={gridStagger}
          {...revealProps}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={cardReveal}>
              <motion.div whileHover={shouldReduceMotion ? undefined : cardHover}>
                <Card variant="bubble" className="p-8 rounded-2xl flex flex-col gap-5 transition-all duration-300 max-w-sm md:max-w-none mx-auto text-left">
                  <div className="flex flex-row items-center gap-4">
                    <div className="relative w-14 h-14 shrink-0">
                      <Image
                        src={value.image}
                        alt={value.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-serif font-bold text-2xl leading-tight">{value.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Quote Block (scroll reveal + scale) ── */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-16 px-4"
          variants={scaleReveal}
          {...revealProps}
        >
          <div className="relative bg-[#FBF7F1] rounded-3xl p-8 lg:p-12 text-center border border-[#E6D6C6] shadow-sm overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 text-primary/20">
              <span className="text-2xl">✦</span>
            </div>
            <div className="absolute bottom-6 right-6 text-primary/20 opacity-50">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-[#2F6B4F]/20">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C8.58,15.06 10.13,10.5 18.88,11.63V11.63C20.4,8.19 18.33,4.91 16.12,3.12C14.7,1.96 11,1.1 11,1.1C11,1.1 11.5,4 11.5,5C12,6.5 13.5,6.5 13.5,6.5C13.5,6.5 11.23,7.18 10.15,9.45C9.07,11.71 10.13,13.78 10.13,13.78C10.13,13.78 13.75,8.22 17,8Z" />
              </svg>
            </div>

            <span className="block text-6xl text-primary/20 font-serif leading-none mb-4 font-bold">"</span>
            <blockquote className="text-xl lg:text-2xl font-serif font-medium text-foreground/90 italic mb-8 leading-relaxed relative z-10">
              Chaque plat que nous servons porte en lui l'âme de nos traditions
              et la passion de notre savoir-faire culinaire.
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-2 relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src="/images/icons/toque.webp"
                    alt="Toque de chef"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground">L'équipe O'Litchi</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Passionnés de cuisine</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20">
            <Button
              size="lg"
              variant="default"
              className="px-10 py-7 text-xl font-bold rounded-full shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/a-propos">
                En savoir plus sur nous
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;