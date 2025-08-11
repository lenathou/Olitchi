/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Star, Heart, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useIsMobile } from '@/lib/hooks';

interface CTASectionProps {
  className?: string;
}

const ctaOptions = [
  {
    icon: MapPin,
    title: 'Nous trouver',
    description: 'Découvrez notre planning et venez nous rendre visite',
    action: 'Voir la localisation',
    href: '/localisation',
    variant: 'primary' as const,
    highlight: true
  },
  {
    icon: Phone,
    title: 'Événement privé',
    description: 'Organisez votre événement avec nos saveurs authentiques',
    action: 'Demander un devis',
    href: '/contact',
    variant: 'secondary' as const,
    highlight: false
  },
  {
    icon: Star,
    title: 'Suivez-nous',
    description: 'Restez informés de nos actualités et nouveautés',
    action: 'Réseaux sociaux',
    href: '#',
    variant: 'outline' as const,
    highlight: false
  }
];

export function CTASection({ className = '' }: CTASectionProps) {
  const isMobile = useIsMobile();

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-orange-50/50 to-red-50/30 ${className}`}>
      <div className="container mx-auto px-4">
        {/* CTA principal */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 mr-2" />
            <span className="font-medium">Rejoignez l'aventure</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Prêt à découvrir
            <span className="block text-primary">nos saveurs ?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Rejoignez les centaines de clients qui ont déjà succombé à nos spécialités 
            afro-antillaises. Une expérience culinaire authentique vous attend !
          </p>

          {/* CTA principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="/localisation">
                <MapPin className="w-5 h-5 mr-2" />
                Nous trouver maintenant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/menu">
                Découvrir le menu
              </Link>
            </Button>
          </div>
        </div>

        {/* Options d'action */}
        <div className={`grid gap-6 mb-12 ${
          isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'
        }`}>
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${
                  option.highlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                }`}
              >
                {option.highlight && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    Recommandé
                  </Badge>
                )}
                
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 ${
                    option.highlight ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      option.highlight ? 'text-primary' : 'text-primary'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <Button 
                    variant={option.variant}
                    className={`w-full group-hover:shadow-md transition-all duration-300 ${
                      option.variant === 'primary' ? 'bg-primary hover:bg-primary/90 text-white' : ''
                    }`}
                    asChild
                  >
                    <Link href={option.href}>
                      {option.action}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Témoignage/Citation finale */}
        <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-4xl lg:text-6xl text-primary/30 mb-6">"</div>
              
              <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                Chaque bouchée raconte une histoire, chaque plat porte l'âme de nos traditions. 
                Venez vivre une expérience culinaire unique qui éveillera tous vos sens.
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.8/5 - Plus de 1000 avis clients</span>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">L'équipe O'Litchi</div>
                  <div className="text-sm text-muted-foreground">Passionnés de cuisine authentique</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Urgence/Scarcité douce */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 text-sm font-medium">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Planning de la semaine disponible - Places limitées sur certains créneaux</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;