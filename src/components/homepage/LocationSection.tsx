/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Phone, Navigation, Calendar, Info } from 'lucide-react';
import Link from 'next/link';
import { useIsMobile } from '@/lib/hooks';
import { SectionBadge } from '@/components/ui/section-badge';

interface LocationSectionProps {
  className?: string;
}

const schedule = [
  {
    day: 'Lundi - Mercredi',
    location: 'Évry-Courcouronnes',
    hours: '11h30 - 14h30 & 18h00 - 22h00',
    isToday: false
  },
  {
    day: 'Jeudi - Vendredi',
    location: 'Corbeil-Essonnes',
    hours: '11h30 - 14h30 & 18h00 - 22h00',
    isToday: false
  },
  {
    day: 'Samedi',
    location: 'Marchés locaux',
    hours: '12h00 - 23h00',
    isToday: false
  },
  {
    day: 'Dimanche',
    location: 'Les Ulis & environs',
    hours: '12h00 - 21h00',
    isToday: false
  }
];

const quickInfo = [
  {
    icon: MapPin,
    title: 'Zone de service',
    description: 'Essonne (91)',
    details: 'Les Ulis, Évry, Corbeil et environs'
  },
  {
    icon: Phone,
    title: 'Commandes',
    description: 'Sur place uniquement',
    details: 'Paiement CB et espèces acceptés'
  },
  {
    icon: Calendar,
    title: 'Événements privés',
    description: 'Sur demande',
    details: 'Mariages, entreprises, festivités'
  }
];

export function LocationSection({ className = '' }: LocationSectionProps) {
  const isMobile = useIsMobile();

  return (
    <section id="location" className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-12 lg:mb-16">
          <SectionBadge icon={MapPin} label="Localisation" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Où nous trouver
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre food truck se déplace dans toute l'Essonne pour vous apporter
            nos saveurs authentiques au plus près de chez vous.
          </p>
        </div>

        {/* Contenu principal */}
        <div className={`grid gap-8 lg:gap-12 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
          }`}>
          {/* Planning de la semaine */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Planning de la semaine</h3>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <Card key={index} className={`transition-all duration-300 hover:shadow-lg ${item.isToday ? 'ring-2 ring-primary bg-primary/5' : 'hover:-translate-y-1'
                  }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg">{item.day}</h4>
                          {item.isToday && (
                            <Badge className="bg-primary text-white text-xs">
                              Aujourd'hui
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{item.hours}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/localisation">
                          <Navigation className="w-4 h-4 mr-1" />
                          Itinéraire
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Note importante */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Planning susceptible de modifications</p>
                    <p>Suivez-nous sur nos réseaux sociaux pour connaître notre position en temps réel et les éventuels changements d'horaires.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Informations pratiques */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Informations pratiques</h3>
            </div>

            <div className="space-y-4">
              {quickInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-lg">{info.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="font-medium text-foreground mb-2">{info.description}</p>
                      <p className="text-sm text-muted-foreground">{info.details}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Carte interactive (placeholder) */}
            <Card className="overflow-hidden rounded-3xl border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Notre zone de service</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  {/* Simulation d'une carte */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
                    <div className="absolute top-12 right-8 w-6 h-6 bg-orange-400 rounded-full animate-pulse delay-300" />
                    <div className="absolute bottom-8 left-12 w-7 h-7 bg-red-400 rounded-full animate-pulse delay-700" />
                    <div className="absolute bottom-4 right-4 w-5 h-5 bg-blue-400 rounded-full animate-pulse delay-1000" />
                  </div>

                  <div className="text-center z-10">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="text-lg font-semibold text-foreground mb-2">Essonne (91)</p>
                    <p className="text-sm text-muted-foreground mb-4">Les Ulis, Évry, Corbeil et environs</p>
                    <Button variant="outline" asChild>
                      <Link href="/localisation">
                        Voir la carte détaillée
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact rapide */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-3">Une question sur notre localisation ?</h4>
                <p className="text-muted-foreground mb-4">
                  Contactez-nous pour connaître notre position exacte ou pour organiser un événement privé.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;