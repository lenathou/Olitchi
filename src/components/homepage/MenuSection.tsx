/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ChefHat, Flame, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { plats } from '@/data/plats';
import { useIsMobile } from '@/lib/hooks';

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

  const renderMenuItem = (item: MenuItem) => (
    <Card
      key={item.id}
      className="group relative overflow-hidden border-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-3xl"
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
          <Badge variant="destructive" className="bg-orange-500 hover:bg-orange-600 text-white border-none shadow-sm px-3 py-1 text-xs font-bold rounded-full">
            <Flame className="w-3 h-3 mr-1 fill-current" />
            Épicé
          </Badge>
        )}
      </div>

      {/* Image du plat */}
      {item.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.nom}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Contenu */}
      <CardHeader className="pt-5 pb-2 px-5 text-left">
        <CardTitle className="text-xl font-serif font-bold text-gray-900 leading-tight">
          {item.nom}
        </CardTitle>
        {item.description && (
          <CardDescription className="text-sm text-gray-500 line-clamp-2 mt-1">
            {item.description}
          </CardDescription>
        )}
      </CardHeader>

      {/* Footer: Bouton & Prix */}
      <CardContent className="px-5 pb-5 pt-2 flex items-center justify-between">
        <Button
          variant="secondary"
          className="bg-[#F3E2CF] hover:bg-[#ebd5c1] text-[#3a2b1f] font-semibold rounded-full px-5 h-9 text-sm"
          asChild
        >
          <Link href="/menu">
            Commander
          </Link>
        </Button>
        <div className="text-xl font-bold text-gray-900 font-serif">
          {item.prix.toFixed(2).replace('.', ',')}€
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="menu" className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">

        {/* En-tête "Notre Carte" Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-gradient-premium-orange rounded-full p-[2px] pr-6 shadow-md mb-6 hover:shadow-lg transition-all transform hover:scale-105">
            <div className="bg-white rounded-full p-2">
              <ChefHat className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold tracking-wide text-white ml-3 text-base">Notre Carte</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Saveurs <span className="text-primary">Authentiques</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Une fusion gourmande entre la Guadeloupe et la Côte d'Ivoire, préparée avec passion.
          </p>
        </div>

        {/* Plats populaires Grid - ONLY 4 ITEMS */}
        <div className="mb-12">
          <div className="flex justify-end mb-4 px-2">
            <Link href="/menu" className="hidden md:flex items-center text-primary font-semibold hover:underline bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
              Tout le menu <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
            {platsPopolaires.map((item) => renderMenuItem(item))}
          </div>
        </div>

        {/* Call to action (Mobile primarily, or extra desktop) */}
        <div className="text-center md:hidden">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold rounded-full shadow-lg"
            asChild
          >
            <Link href="/menu">
              Explorer tout le Menu
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

export default MenuSection;