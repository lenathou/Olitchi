'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/lib/hooks';

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = '' }: HeroSectionProps) {
  const isMobile = useIsMobile();

  return (
    <section className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${className}`}>
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-meal.webp"
          alt="Plats afro-antillais O'Litchi"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 container mx-auto px-4 text-white mt-20 md:mt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de présentation */}
          <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-medium">🚚 Food Truck Authentique</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Saveurs
            <span className="block text-primary">Afro-Antillaises</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 mt-2">
              Authentiques
            </span>
          </h1>

          {/* Description */}
          <p className="hidden md:block text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez les saveurs uniques de notre cuisine afro-antillaise préparée avec passion. 
            Des bokits croustillants aux grillades savoureuses, chaque plat raconte une histoire.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#menu">
                <span className="mr-2">🍽️</span>
                Découvrir le Menu
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 backdrop-blur-md px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300"
            >
              <Link href="#location">
                <MapPin className="w-5 h-5 mr-2" />
                Nous Trouver
              </Link>
            </Button>
          </div>

          {/* Informations rapides */}
          <div className="max-w-4xl mx-auto">
            {/* Version mobile avec image du truck */}
            <div className="md:hidden flex flex-col items-center gap-6">
              {/* Image du food truck sur mobile */}
              <div className="relative">
                <Image
                  src="/images/truck.webp"
                  alt="Camion O'Litchi"
                  width={280}
                  height={84}
                  quality={95}
                  className="object-contain opacity-90"
                />
              </div>
              
              {/* Les 3 atouts en colonne sur mobile */}
              <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                <div className="flex items-center justify-start space-x-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Les Ulis & Essonne</p>
                    <p className="text-sm text-white/70">Nous nous déplaçons</p>
                  </div>
                </div>

                <div className="flex items-center justify-start space-x-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-full">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">11h30 - 22h00</p>
                    <p className="text-sm text-white/70">Lun-Ven</p>
                  </div>
                </div>

                <div className="flex items-center justify-start space-x-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-full">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Commande directe</p>
                    <p className="text-sm text-white/70">Sur place</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Version desktop (inchangée) */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              <div className="flex items-center justify-center md:justify-start space-x-3 text-white/90">
                <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Les Ulis & Essonne</p>
                  <p className="text-sm text-white/70">Nous nous déplaçons</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3 text-white/90">
                <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-full">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">11h30 - 22h00</p>
                  <p className="text-sm text-white/70">Lun-Ven</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3 text-white/90">
                <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Commande directe</p>
                  <p className="text-sm text-white/70">Sur place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camion en bas (desktop uniquement) */}
      {!isMobile && (
        <div className="absolute bottom-0 left-0 z-10 opacity-80">
          <Image
            src="/images/truck.webp"
            alt="Camion O'Litchi"
            width={400}
            height={120}
            quality={95}
            className="object-contain"
          />
        </div>
      )}

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;