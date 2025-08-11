'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ChefHat, Flame } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { plats } from '@/data/plats';
import { petitesFaims } from '@/data/petitesFaims';
import { boissons } from '@/data/boissons';
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
  ].filter(item => item.id !== ''); // Filtrer les éléments vides

  const renderMenuItem = (item: MenuItem) => (
    <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {/* Badges */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        {item.popular && (
          <Badge className="bg-red-500 hover:bg-red-600 shadow-lg">
            <Star className="w-3 h-3 mr-1" />
            Populaire
          </Badge>
        )}
        {item.spicy && (
          <Badge variant="destructive" className="bg-orange-500 hover:bg-orange-600">
            <Flame className="w-3 h-3 mr-1" />
            Épicé
          </Badge>
        )}
      </div>

      {/* Image du plat */}
      {item.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.nom}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <CardHeader className="pb-3">
        <CardTitle className="flex justify-between items-start gap-2">
          <span className="text-lg font-bold leading-tight">{item.nom}</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary font-bold text-lg px-3 py-1 shrink-0">
            {item.prix}€
          </Badge>
        </CardTitle>
        {item.description && (
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300 group-hover:shadow-md"
          asChild
        >
          <Link href="/menu">
            Voir les détails
          </Link>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="menu" className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <ChefHat className="w-4 h-4 mr-2" />
            <span className="font-medium">Notre Menu</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Saveurs Authentiques
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez nos spécialités afro-antillaises préparées avec des ingrédients frais et des recettes traditionnelles
          </p>
        </div>

        {/* Plats populaires en vedette */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Nos Spécialités
          </h3>
          <div className={`grid gap-6 ${
            isMobile 
              ? 'grid-cols-1' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {platsPopolaires.map((item) => renderMenuItem(item))}
          </div>
        </div>

        {/* Menu complet par catégories */}
        <Tabs defaultValue="bokits" className="w-full">
          <TabsList className={`grid w-full mb-8 ${
            isMobile 
              ? 'grid-cols-2 h-auto' 
              : 'grid-cols-4'
          }`}>
            <TabsTrigger value="bokits" className="text-sm md:text-base font-medium">
              Bokits
            </TabsTrigger>
            <TabsTrigger value="grillades" className="text-sm md:text-base font-medium">
              Grillades
            </TabsTrigger>
            <TabsTrigger value="petites-faims" className="text-sm md:text-base font-medium">
              {isMobile ? 'Snacks' : 'Petites Faims'}
            </TabsTrigger>
            <TabsTrigger value="boissons" className="text-sm md:text-base font-medium">
              Boissons
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bokits" className="mt-8">
            <div className={`grid gap-6 ${
              isMobile 
                ? 'grid-cols-1' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {plats.bokits.map((item) => renderMenuItem(item))}
            </div>
          </TabsContent>

          <TabsContent value="grillades" className="mt-8">
            <div className={`grid gap-6 ${
              isMobile 
                ? 'grid-cols-1' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {plats.grillades.map((item) => renderMenuItem(item))}
            </div>
          </TabsContent>

          <TabsContent value="petites-faims" className="mt-8">
            <div className={`grid gap-6 ${
              isMobile 
                ? 'grid-cols-1 sm:grid-cols-2' 
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}>
              {petitesFaims.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg">{item.nom}</CardTitle>
                    {item.description && (
                      <CardDescription className="text-sm">
                        {item.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-primary mb-4">
                      {item.prix}€
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/menu">
                        Voir les détails
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="boissons" className="mt-8">
            <div className={`grid gap-6 ${
              isMobile 
                ? 'grid-cols-2' 
                : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6'
            }`}>
              {boissons.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-base">{item.nom}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-xl font-bold text-primary mb-3">
                      {item.prix}€
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/menu">
                        +
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to action */}
        <div className="text-center mt-12 lg:mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold" asChild>
            <Link href="/menu">
              Voir le Menu Complet
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;