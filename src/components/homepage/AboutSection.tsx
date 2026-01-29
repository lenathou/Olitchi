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
    icon: ChefHat,
    title: 'Savoir-faire Authentique',
    description: 'Nos recettes traditionnelles afro-antillaises transmises de génération en génération'
  },
  {
    icon: Heart,
    title: 'Ingrédients Frais',
    description: 'Sélection rigoureuse de produits locaux et de saison pour une qualité optimale'
  },
  {
    icon: Truck,
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
        <div className="text-center mb-12 lg:mb-16">
          <SectionBadge icon={Heart} label="Notre Histoire" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Passion & Authenticité
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis 2020, O'Litchi parcourt l'Essonne pour partager les saveurs authentiques
            de la cuisine afro-antillaise avec passion et générosité.
          </p>
        </div>

        {/* Contenu principal */}
        <div className={`grid gap-12 lg:gap-16 items-center ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
          }`}>
          {/* Texte et valeurs */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Notre aventure a commencé avec une simple envie : faire découvrir les saveurs
                uniques de la cuisine afro-antillaise à travers un concept de food truck moderne
                et authentique.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Chaque bokit, chaque grillade, chaque plat est préparé avec des ingrédients
                soigneusement sélectionnés et des recettes traditionnelles qui racontent
                l'histoire de nos origines.
              </p>
            </div>

            {/* Nos valeurs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Nos Valeurs</h3>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors duration-300">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/a-propos">
                  En savoir plus sur nous
                </Link>
              </Button>
            </div>
          </div>

          {/* Image et statistiques */}
          <div className="space-y-8">
            {/* Image principale */}
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/truck.webp"
                  alt="Food truck O'Litchi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Badge flottant */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-white px-3 py-2 text-sm font-semibold">
                    🚚 Food Truck Authentique
                  </Badge>
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-2'
              }`}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-sm lg:text-base mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs lg:text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Citation ou témoignage */}
        <div className="mt-16 lg:mt-20">
          <Card className="bg-primary/5 border-primary/20 p-8 lg:p-12 text-center">
            <CardContent className="p-0">
              <div className="text-4xl lg:text-6xl text-primary/30 mb-4">"</div>
              <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                Chaque plat que nous servons porte en lui l'âme de nos traditions
                et la passion de notre savoir-faire culinaire.
              </blockquote>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">L'équipe O'Litchi</div>
                  <div className="text-sm text-muted-foreground">Passionnés de cuisine</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;