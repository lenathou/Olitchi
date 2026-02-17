'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  containerDesktop,
  containerMobile,
  decorFadeIn,
  fadeSlideUp,
  wordContainer,
  wordReveal,
  popIn,
  buttonSpring,
  buttonHover,
  buttonTap,
} from '@/lib/animations/homepage/hero-animations';

interface HeroSectionProps {
  className?: string;
}

// ────────────────────────────────────────────────────
// Composant utilitaire : Titre mot par mot (Desktop)
// ────────────────────────────────────────────────────
function AnimatedTitle() {
  const line1 = ['Savourez', 'la'];
  const highlight = ['Street', 'Food'];
  const line2 = ['Afro-Antillaise'];

  return (
    <motion.h1
      className="text-5xl font-extrabold leading-tight text-foreground font-serif"
      variants={wordContainer}
    >
      {line1.map((word) => (
        <motion.span key={word} variants={wordReveal} className="inline-block mr-[0.3em]">
          {word}
        </motion.span>
      ))}
      {highlight.map((word) => (
        <motion.span key={word} variants={wordReveal} className="inline-block mr-[0.3em] text-primary">
          {word}
        </motion.span>
      ))}
      {line2.map((word) => (
        <motion.span key={word} variants={wordReveal} className="inline-block mr-[0.3em]">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export function HeroSection({ className = '' }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Si reduced motion → pas d'animations
  const animationProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, animate: 'visible' as const };

  return (
    <section className={`relative h-screen w-full flex flex-col justify-center overflow-hidden ${className}`}>

      {/* =========================================
          VERSION MOBILE (< md)
          ========================================= */}
      <motion.div
        className="relative w-full h-screen flex flex-col md:hidden overflow-hidden"
        variants={containerMobile}
        {...animationProps}
      >

        {/* Mobile Background */}
        <motion.div className="absolute inset-0 z-0" variants={decorFadeIn}>
          {/* Couche 2: Décoration (Overlay) */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/no-bgmobile.webp"
              alt="Décoration Mobile"
              fill
              className="object-contain"
              quality={95}
              priority
            />
          </div>
        </motion.div>

        {/* Mobile Content Container */}
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col pt-20">

          {/* Texte & Titre */}
          <motion.div
            className="flex flex-col space-y-4 text-left items-start z-20 w-[75%]"
            variants={fadeSlideUp}
          >
            {/* Mobile : titre en un bloc (pas de split mot par mot) */}
            <motion.h1
              className="text-4xl font-extrabold leading-tight text-foreground font-serif"
              variants={fadeSlideUp}
            >
              Savourez la <span className="text-primary">Street Food</span> Afro-Antillaise
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-xs leading-relaxed"
              variants={fadeSlideUp}
            >
              Découvrez des saveurs uniques et gourmandes inspirées des îles.
            </motion.p>
            <motion.div className="flex flex-row gap-3 pt-4 z-40" variants={buttonSpring}>
              <Button asChild size="lg">
                <Link href="/menu">
                  Voir le menu
                </Link>
              </Button>
              <motion.div variants={buttonSpring}>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/commander">Commander</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Atiéké Image — entry popIn uniquement */}
          <motion.div
            className="absolute top-[30%] right-[-40%] w-[100%] aspect-[4/3] z-10 pointer-events-none"
            variants={popIn}
          >
            <Image
              src="/images/atieke-test.webp"
              alt="Plat Atiéké Poisson Braisé"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Bottom Images Row (Mobile) */}
          <div className="absolute bottom-25 left-0 w-full h-[25vh] pb-2 z-30 pointer-events-none">
            <div className="relative w-full h-full flex items-end justify-center px-4 mb-2">
              {/* Bokit (Left) */}
              <motion.div
                className="relative w-[30%] h-32 z-10 -mr-0 mb-[1px]"
                variants={popIn}
              >
                <Image
                  src="/images/bokit-hero1.webp"
                  alt="Burger Complet"
                  fill
                  className="object-contain drop-shadow-xl scale-110 origin-bottom-left"
                  sizes="(max-width: 768px) 150px"
                />
              </motion.div>

              {/* Accras (Center) */}
              <motion.div
                className="relative w-[40%] h-24 z-30 mb-0"
                variants={popIn}
              >
                <Image
                  src="/images/accras-hero1.webp"
                  alt="Accras de morue"
                  fill
                  className="object-contain drop-shadow-lg scale-100"
                  sizes="(max-width: 768px) 120px"
                />
              </motion.div>

              {/* Brochettes (Right) */}
              <motion.div
                className="relative w-[34%] h-28 z-20 -ml-4 mb-2"
                variants={popIn}
              >
                <Image
                  src="/images/brochettes-hero1.webp"
                  alt="Brochettes"
                  fill
                  className="object-contain drop-shadow-xl scale-110 origin-bottom-right"
                  sizes="(max-width: 768px) 140px"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>


      {/* =========================================
          VERSION DESKTOP (>= md)
          ========================================= */}
      <motion.div
        className="hidden md:flex relative w-full h-full flex-col justify-center"
        variants={containerDesktop}
        {...animationProps}
      >

        {/* Desktop Background Overlay (Decoration Only) — seule image priority */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none" variants={decorFadeIn}>
          <Image
            src="/images/hero-pics.webp"
            alt="Décoration O'Litchi (Palmiers, Soleil)"
            fill
            quality={95}
            priority
          />
        </motion.div>

        {/* Desktop Main Content */}
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col mt-20">

          <div className="grid grid-cols-2 gap-8 items-center w-full">

            {/* Colonne Gauche: Texte */}
            <motion.div className="flex flex-col space-y-6 z-20 w-[80%] text-left items-start">
              {/* Titre mot par mot */}
              <AnimatedTitle />

              <motion.p
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                variants={fadeSlideUp}
              >
                Découvrez des saveurs uniques et gourmandes inspirées des îles.
                Commandez maintenant et laissez-vous emporter par notre cuisine créole.
              </motion.p>

              <motion.div className="flex flex-row gap-6 mt-6 ml-25" variants={buttonSpring}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : buttonHover}
                  whileTap={shouldReduceMotion ? {} : buttonTap}
                >
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="px-10 py-7 text-xl font-bold"
                  >
                    <Link href="/menu">
                      Voir le menu
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonSpring}
                  whileHover={shouldReduceMotion ? {} : buttonHover}
                  whileTap={shouldReduceMotion ? {} : buttonTap}
                >
                  <Button
                    asChild
                    size="lg"
                    className="px-10 py-7 text-xl font-bold"
                  >
                    <Link href="/localisation-horaires">
                      <MapPin className="w-4 h-4 mr-2" />
                      Nous Trouver
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Colonne Droite: Atieke Image — entry popIn uniquement */}
            <div className="relative z-20 h-full w-full pointer-events-none">
              <motion.div
                className="absolute top-70 right-[-5%] -translate-y-1/2 w-[700px] aspect-[4/3]"
                variants={popIn}
              >
                <Image
                  src="/images/atieke-test.webp"
                  alt="Plat Atiéké Poisson Braisé"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Desktop Bottom Images — entry popIn uniquement */}
        <div className="absolute bottom-0 left-0 w-full h-[35vh] z-30 pointer-events-none">
          <div className="container mx-auto relative h-full">
            {/* Bokit */}
            <motion.div
              className="absolute - left-[15%] w-[250px] aspect-square z-30"
              variants={popIn}
            >
              <Image
                src="/images/bokit-hero1.webp"
                alt="Burger Complet"
                fill
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
            {/* Accras */}
            <motion.div
              className="absolute -bottom-4 left-[35%] w-[250px] aspect-square z-20"
              variants={popIn}
            >
              <Image
                src="/images/accras-hero1.webp"
                alt="Accras de morue"
                fill
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
            {/* Brochettes */}
            <motion.div
              className="absolute bottom-4 left-[47%] w-[240px] aspect-square z-10"
              variants={popIn}
            >
              <Image
                src="/images/brochettes-hero1.webp"
                alt="Brochettes"
                fill
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>

      </motion.div>

    </section>
  );
}

export default HeroSection;