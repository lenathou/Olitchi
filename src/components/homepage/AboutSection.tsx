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
    image: '/images/toque.webp',
    title: 'Savoir-faire Authentique',
    description: 'Nos recettes traditionnelles afro-antillaises transmises de génération en génération'
  },
  {
    image: '/images/coeur.webp',
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

  return (
    <section id="about" className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center bg-gradient-premium-orange rounded-full p-[2px] pr-6 shadow-md hover:shadow-lg transition-all transform hover:scale-105">
              <div className="bg-card rounded-full p-2">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold tracking-wide text-white ml-3 text-base">Notre Histoire</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground relative inline-block">
            <span className="hidden md:inline-block absolute top-1/2 right-full mr-4 w-12 h-[1px] bg-primary/40"></span>
            Passion & <span className="text-primary">Authenticité</span>
            <span className="hidden md:inline-block absolute top-1/2 left-full ml-4 w-12 h-[1px] bg-primary/40"></span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis 2020, O'Litchi parcourt l'Essonne pour partager les saveurs authentiques
            de la cuisine afro-antillaise avec passion et générosité.
          </p>
        </div>

        {/* Content Block: Text & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
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
          </div>

          {/* Food Truck Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-64 lg:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/truck.webp"
                alt="Food truck O'Litchi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 right-4 z-20">
              <Badge className="bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm font-bold shadow-lg rounded-full">
                <Truck className="w-4 h-4 mr-2" />
                Food Truck Authentique
              </Badge>
            </div>
          </div>
        </div>


        {/* Values Section Header */}
        <div className="text-center mb-10 flex items-center justify-center gap-4">
          <span className="h-[1px] w-12 bg-primary/30 hidden md:block"></span>
          <span className="w-2 h-2 rounded-full bg-primary/20 hidden md:block"></span>
          <h3 className="text-3xl font-serif font-bold text-foreground">Nos Valeurs</h3>
          <span className="w-2 h-2 rounded-full bg-primary/20 hidden md:block"></span>
          <span className="h-[1px] w-12 bg-primary/30 hidden md:block"></span>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20 mb-16">
          {values.map((value, index) => {
            return (
              <Card key={index} variant="bubble" className="p-8 rounded-2xl flex flex-col gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-sm md:max-w-none mx-auto text-left">
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
            );
          })}
        </div>

        {/* Quote Block */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Decorative background/border for quote */}
          <div className="absolute inset-0 bg-gradient-premium-tertiary rounded-3xl transform rotate-1 opacity-80 z-0 border border-[var(--premium-tertiary-border)] shadow-sm"></div>
          <div className="relative z-10 p-8 lg:p-12 text-center">
            <span className="block text-6xl text-primary/20 font-serif leading-none mb-4">“</span>
            <blockquote className="text-xl lg:text-2xl font-serif font-medium text-foreground/90 italic mb-8 leading-relaxed">
              Chaque plat que nous servons porte en lui l'âme de nos traditions
              et la passion de notre savoir-faire culinaire.
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <ChefHat className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground">L'équipe O'Litchi</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Passionnés de cuisine</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex justify-center">
          <Button
            size="lg"
            variant="tertiary"
            className="px-10 py-7 text-xl font-bold rounded-full shadow-lg hover:shadow-xl"
            asChild
          >
            <Link href="/a-propos">
              En savoir plus sur nous
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;