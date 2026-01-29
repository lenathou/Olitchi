'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = '' }: HeroSectionProps) {

  return (
    <section className={`relative h-screen w-full flex flex-col justify-center overflow-hidden ${className}`}>

      {/* =========================================
          VERSION MOBILE (< md)
          ========================================= */}
      <div className="relative w-full h-full flex flex-col md:hidden">

        {/* Mobile Background */}
        <div className="absolute inset-0 z-0">
          {/* Couche 1: Texture de fond */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-test.webp"
              alt="Fond texture"
              fill
              className="object-cover"
              quality={95}
              priority
            />
          </div>

          {/* Couche 2: Décoration (Overlay) */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/no-bgmobile.webp"
              alt="Décoration Mobile"
              fill
              className="object-cover"
              quality={95}
              priority
            />
          </div>
        </div>

        {/* Mobile Content Container */}
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col pt-20">

          {/* Texte & Titre */}
          <div className="flex flex-col space-y-4 text-left items-start z-20">
            <h1 className="text-4xl font-extrabold leading-tight text-foreground font-serif">
              Savourez la <span className="text-primary">Street Food</span> Afro-Antillaise
            </h1>
            <p className="text-lg text-muted-foreground max-w-xs leading-relaxed">
              Découvrez des saveurs uniques et gourmandes inspirées des îles.
              Commandez maintenant et laissez-vous emporter par notre cuisine créole.
            </p>
          </div>

          {/* Atiéké Image (Positionné à droite hors-champ) */}
          <div className="absolute top-[25%] right-[-25%] w-[85%] aspect-[4/3] z-10 pointer-events-none">
            <Image
              src="/images/atieke-test.webp"
              alt="Plat Atiéké Poisson Braisé"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Boutons Mobile */}
          <div className="absolute bottom-[28vh] left-0 right-0 px-4 flex flex-row gap-3 z-40 justify-center">
            <Button asChild size="lg">
              <Link href="/menu">
                Voir le menu
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/commander">Commander</Link>
            </Button>
          </div>

          {/* Bottom Images Row (Mobile) */}
          <div className="absolute bottom-0 left-0 w-full h-[25vh] pb-4 z-30 pointer-events-none">
            <div className="relative w-full h-full flex items-end justify-center px-2">
              {/* Bokit (Left) */}
              <div className="relative w-1/3 h-full max-h-[160px] z-30 transform -translate-x-2">
                <Image
                  src="/images/bokit-hero1.webp"
                  alt="Burger Complet"
                  fill
                  className="object-contain drop-shadow-lg scale-125 origin-bottom"
                />
              </div>
              {/* Accras (Center) */}
              <div className="relative w-1/3 h-full max-h-[140px] z-20">
                <Image
                  src="/images/accras-hero1.webp"
                  alt="Accras de morue"
                  fill
                  className="object-contain drop-shadow-lg scale-110 origin-bottom"
                />
              </div>
              {/* Brochettes (Right) */}
              <div className="relative w-1/3 h-full max-h-[140px] z-10 transform translate-x-2">
                <Image
                  src="/images/brochettes-hero1.webp"
                  alt="Brochettes"
                  fill
                  className="object-contain drop-shadow-lg scale-110 origin-bottom"
                />
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* =========================================
          VERSION DESKTOP (>= md)
          ========================================= */}
      <div className="hidden md:flex relative w-full h-full flex-col justify-center">

        {/* Desktop Background Overlay (Decoration Only) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-pics.webp"
            alt="Décoration O'Litchi (Palmiers, Soleil)"
            fill
            quality={95}
            priority
          />
        </div>

        {/* Desktop Main Content */}
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col mt-20">

          <div className="grid grid-cols-2 gap-8 items-center w-full">

            {/* Colonne Gauche: Texte */}
            <div className="flex flex-col space-y-6 z-20 w-[80%] text-left items-start">
              <h1 className="text-5xl font-extrabold leading-tight text-foreground font-serif">
                Savourez la <span className="text-primary">Street Food</span> Afro-Antillaise
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Découvrez des saveurs uniques et gourmandes inspirées des îles.
                Commandez maintenant et laissez-vous emporter par notre cuisine créole.
              </p>

              <div className="flex flex-row gap-6 mt-6 ml-25">
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
              </div>
            </div>

            {/* Colonne Droite: Atieke Image */}
            <div className="relative z-20 h-full w-full pointer-events-none">
              <div className="absolute top-70 right-[-5%] -translate-y-1/2 w-[700px] aspect-[4/3]">
                <Image
                  src="/images/atieke-test.webp"
                  alt="Plat Atiéké Poisson Braisé"
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* Desktop Bottom Images */}
        <div className="absolute bottom-0 left-0 w-full h-[35vh] z-30 pointer-events-none">
          <div className="container mx-auto relative h-full">
            {/* Bokit */}
            <div className="absolute - left-[15%] w-[250px] aspect-square transform hover:scale-105 transition-transform duration-500 z-30">
              <Image
                src="/images/bokit-hero1.webp"
                alt="Burger Complet"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
            {/* Accras */}
            <div className="absolute -bottom-4 left-[35%] w-[250px] aspect-square transform hover:scale-105 transition-transform duration-500 z-20">
              <Image
                src="/images/accras-hero1.webp"
                alt="Accras de morue"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
            {/* Brochettes */}
            <div className="absolute bottom-4 left-[47%] w-[240px] aspect-square transform hover:scale-105 transition-transform duration-500 z-10">
              <Image
                src="/images/brochettes-hero1.webp"
                alt="Brochettes"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default HeroSection;