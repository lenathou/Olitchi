/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Star, Heart, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useIsMobile } from '@/lib/hooks';
import { SectionBadge } from '@/components/ui/section-badge';

interface CTASectionProps {
  className?: string;
}

const ctaOptions = [
  {
    iconSrc: '/images/icons/local.webp',
    title: 'Nous trouver',
    description: 'Découvrez notre planning et venez nous rendre visite',
    action: 'Voir la localisation',
    href: '/localisation',
    variant: 'default' as const,
    highlight: true
  },
  {
    iconSrc: '/images/icons/calendar.webp',
    title: 'Événement privé',
    description: 'Organisez votre événement avec nos saveurs authentiques',
    action: 'Demander un devis',
    href: '/contact',
    variant: 'secondary' as const,
    highlight: false
  },
  {
    iconSrc: '/images/icons/contact.webp',
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
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* CTA principal */}
        <div className="text-center mb-12 lg:mb-16">
          <SectionBadge icon={Heart} label="Rejoignez l'aventure" />

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight font-serif">
            Prêt à découvrir <span className="text-primary italic">nos saveurs ?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Rejoignez les centaines de clients qui ont déjà succombé à nos spécialités
            afro-antillaises. Une expérience culinaire authentique vous attend !
          </p>

          {/* Boutons d'action principaux */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-premium-orange text-white px-8 py-6 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link href="/localisation">
                Nous trouver maintenant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/20 text-primary hover:bg-primary/5 px-8 py-6 rounded-full text-lg font-bold transition-all duration-300"
              asChild
            >
              <Link href="/menu">
                Découvrir le menu
              </Link>
            </Button>
          </div>
        </div>

        {/* Options d'action Grid */}
        <div className={`grid gap-8 mb-16 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
          {ctaOptions.map((option, index) => (
            <Card
              key={index}
              variant="bubble"
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden rounded-[2rem] border-2 ${option.highlight ? 'border-primary/20 bg-primary/5' : ''
                }`}
            >
              {option.highlight && (
                <Badge className="absolute top-4 right-4 bg-gradient-premium-orange text-white border-none shadow-sm">
                  Recommandé
                </Badge>
              )}

              <CardContent className="p-8 text-center flex flex-col items-center h-full">
                <Image
                  src={option.iconSrc}
                  alt={option.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain mb-6 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                />

                <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">{option.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed flex-1">
                  {option.description}
                </p>

                <Button
                  variant={option.variant === 'secondary' ? 'secondary' : 'default'}
                  className={`w-full rounded-full font-bold group-hover:shadow-md transition-all duration-300 ${option.variant === 'default'
                      ? 'bg-gradient-premium-orange text-white hover:opacity-90'
                      : 'bg-white border-2 border-primary/10 hover:border-primary/30'
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
          ))}
        </div>

        {/* Témoignage/Citation finale - Style Premium */}
        <Card className="bg-secondary/10 backdrop-blur-sm border-none shadow-sm rounded-[2.5rem] overflow-hidden relative">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <CardContent className="p-8 lg:p-16 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-primary/20 font-serif mb-6 leading-none">"</div>

              <blockquote className="text-2xl lg:text-3xl font-serif font-medium text-foreground mb-10 leading-relaxed italic">
                Chaque bouchée raconte une histoire, chaque plat porte l'âme de nos traditions.
                Venez vivre une expérience culinaire unique qui éveillera tous vos sens.
              </blockquote>


              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full p-3 shadow-md border border-primary/10 flex items-center justify-center">
                  <Image
                    src="/images/icons/toque.webp"
                    alt="Chef"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="font-serif font-bold text-xl text-foreground">L'équipe O'Litchi</div>
                  <div className="text-sm text-primary font-medium uppercase tracking-wider">Passionnés de goût</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Urgence/Scarcité douce - Style Pill */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white border border-primary/20 rounded-full px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-all">
            <Image
              src="/images/icons/calendar.webp"
              alt="Agenda"
              width={20}
              height={20}
              className="w-5 h-5 mr-3 object-contain"
            />
            <span className="text-foreground/80">Planning de la semaine disponible — <span className="text-primary font-bold">Places limitées</span> sur certains créneaux</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;