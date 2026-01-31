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
      <div className="relative w-full h-screen flex flex-col md:hidden overflow-hidden">

        {/* Mobile Background */}
        <div className="absolute inset-0 z-0">


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
        </div>

        {/* Mobile Content Container */}
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col pt-20">

          {/* Texte & Titre */}
          <div className="flex flex-col space-y-4 text-left items-start z-20 w-[75%]">
            <h1 className="text-4xl font-extrabold leading-tight text-foreground font-serif">
              Savourez la <span className="text-primary">Street Food</span> Afro-Antillaise
            </h1>
            <p className="text-lg text-muted-foreground max-w-xs leading-relaxed">
              Découvrez des saveurs uniques et gourmandes inspirées des îles.
            </p>
            <div className="flex flex-row gap-3 pt-4 z-40">
              <Button asChild size="lg">
                <Link href="/menu">
                  Voir le menu
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/commander">Commander</Link>
              </Button>
            </div>
          </div>

          {/* Atiéké Image (Positionné à droite hors-champ) */}
          <div className="absolute top-[30%] right-[-40%] w-[100%] aspect-[4/3] z-10 pointer-events-none">
            <Image
              src="/images/atieke-test.webp"
              alt="Plat Atiéké Poisson Braisé"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>



          {/* Bottom Images Row (Mobile) */}
          <div className="absolute bottom-25 left-0 w-full h-[25vh] pb-2 z-30 pointer-events-none">
            <div className="relative w-full h-full flex items-end justify-center px-4 mb-2">
              {/* Bokit (Left) - Premier plan */}
              <div className="relative w-[30%] h-32 z-10 -mr-0 mb-[1px]">
                <Image
                  src="/images/bokit-hero1.webp"
                  alt="Burger Complet"
                  fill
                  className="object-contain drop-shadow-xl scale-110 origin-bottom-left"
                  sizes="(max-width: 768px) 150px"
                  priority
                />
              </div>

              {/* Accras (Center) - Arrière plan */}
              <div className="relative w-[40%] h-24 z-30 mb-0">
                <Image
                  src="/images/accras-hero1.webp"
                  alt="Accras de morue"
                  fill
                  className="object-contain drop-shadow-lg scale-100"
                  sizes="(max-width: 768px) 120px"
                  priority
                />
              </div>

              {/* Brochettes (Right) - Premier plan */}
              <div className="relative w-[34%] h-28 z-20 -ml-4 mb-2">
                <Image
                  src="/images/brochettes-hero1.webp"
                  alt="Brochettes"
                  fill
                  className="object-contain drop-shadow-xl scale-110 origin-bottom-right"
                  sizes="(max-width: 768px) 140px"
                  priority
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