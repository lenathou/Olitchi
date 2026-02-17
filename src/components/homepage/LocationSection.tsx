/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Info } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useIsMobile } from '@/lib/hooks';
import { SectionBadge } from '@/components/ui/section-badge';
import { motion, useReducedMotion } from 'framer-motion';
import {
  sectionHeaderStagger,
  gridStagger,
  listStagger,
  fadeUp,
  cardReveal,
  fadeLeft,
  fadeRight,
  cardHover,
  scrollRevealConfig,
} from '@/lib/animations/homepage/shared-animations';

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
    icon: '/images/icons/local.webp',
    title: 'Zone de service',
    description: 'Essonne (91)',
    details: 'Les Ulis, Évry, Corbeil et environs'
  },
  {
    icon: '/images/icons/contact.webp',
    title: 'Commandes',
    description: 'Sur place uniquement',
    details: 'Paiement CB et espèces acceptés'
  },
  {
    icon: '/images/icons/calendar.webp',
    title: 'Événements privés',
    description: 'Sur demande',
    details: 'Mariages, entreprises, festivités'
  }
];

export function LocationSection({ className = '' }: LocationSectionProps) {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

  return (
    <section id="location" className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* ── Header (scroll reveal stagger) ── */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          variants={sectionHeaderStagger}
          {...revealProps}
        >
          <motion.div variants={fadeUp}>
            <SectionBadge icon={MapPin} label="Localisation" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            variants={fadeUp}
          >
            Où nous trouver
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            Notre food truck se déplace dans toute l'Essonne pour vous apporter
            nos saveurs authentiques au plus près de chez vous.
          </motion.p>
        </motion.div>

        {/* ── 2 Colonnes (scroll reveal) ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch"
          variants={gridStagger}
          {...revealProps}
        >

          {/* COLONNE GAUCHE : PLANNING */}
          <motion.div variants={fadeLeft}>
            <Card className="relative h-full bg-primary/5 border-primary/20 pt-14 pb-8 px-6 lg:px-8 rounded-3xl flex flex-col shadow-none">
              {/* En-tête Flottant "Pill" */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-premium-orange text-white px-8 py-4 rounded-full shadow-[0_4px_10px_rgba(240,122,42,0.4)] flex items-center gap-3 whitespace-nowrap z-10 border-2 border-[var(--premium-tertiary-start)]">
                <Image
                  src="/images/icons/calendar.webp"
                  alt="Planning"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
                <h3 className="text-lg font-bold font-serif tracking-wide">Planning de la semaine</h3>
              </div>

              <motion.div
                className="space-y-4 flex-1"
                variants={listStagger}
                {...(shouldReduceMotion ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } })}
              >
                {schedule.map((item, index) => (
                  <motion.div key={index} variants={cardReveal}>
                    <Card
                      variant="bubble"
                      className={`relative group p-5 rounded-3xl transition-all duration-300 border-2 ${item.isToday ? 'border-primary ring-1 ring-primary/20 bg-primary/10' : ''
                        }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 mt-1">
                          <Image
                            src="/images/icons/local.webp"
                            alt="Localisation"
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-serif font-bold text-xl text-foreground mb-2">
                            <span className="block mb-1">{item.day}</span>
                            <span className="block text-base font-sans font-medium text-muted-foreground/90">{item.location}</span>
                          </div>
                          <div className="text-base font-semibold text-foreground/80 bg-primary/10 inline-block px-4 py-1.5 rounded-full">
                            {item.hours}
                          </div>
                        </div>
                      </div>

                      {/* Bouton Itinéraire */}
                      {index === 3 && (
                        <div className="absolute bottom-5 right-5">
                          <Button size="sm" className="bg-gradient-premium-orange rounded-full text-xs h-9 px-5 shadow-md hover:scale-105 transition-transform" asChild>
                            <Link href="/localisation">Itinéraire &gt;</Link>
                          </Button>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Note importante */}
              <motion.div
                className="mt-8 bg-background/50 rounded-2xl p-5 border border-primary/10 flex gap-4 items-start shrink-0"
                variants={fadeUp}
              >
                <div className=" p-1.5 shrink-0 mt-0.5">
                  <Image
                    src="/images/icons/warning.webp"
                    alt="Important"
                    width={20}
                    height={20}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">Planning susceptible de modifications</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Suivez-nous sur nos réseaux sociaux pour connaître notre position en temps réel.
                  </p>
                </div>
              </motion.div>
            </Card>
          </motion.div>


          {/* COLONNE DROITE : INFOS & CARTE */}
          <motion.div variants={fadeRight}>
            <Card className="relative h-full bg-primary/5 border-primary/20 pt-14 pb-8 px-6 lg:px-8 rounded-3xl flex flex-col shadow-none">
              {/* En-tête Flottant "Pill" */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-premium-orange text-white px-8 py-4 rounded-full shadow-[0_4px_10px_rgba(240,122,42,0.4)] flex items-center gap-3 whitespace-nowrap z-10 border-2 border-[var(--premium-tertiary-start)]">
                <Image
                  src="/images/icons/info.webp"
                  alt="Infos"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
                <h3 className="text-lg font-bold font-serif tracking-wide">Informations pratiques</h3>
              </div>

              {/* Liste Infos */}
              <motion.div
                className="space-y-8 mb-10 flex-1"
                variants={listStagger}
                {...(shouldReduceMotion ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } })}
              >
                {quickInfo.map((info, index) => (
                  <motion.div key={index} className="flex items-center gap-4 group" variants={fadeUp}>
                    <div className="shrink-0 p-3 rounded-full bg-background/50 border border-primary/10 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={info.icon}
                        alt={info.title}
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-2xl text-foreground mb-1">{info.title}</h4>
                      <p className="font-medium text-lg text-foreground/90">{info.description}</p>
                      <p className="text-base text-muted-foreground">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Carte Illustrée */}
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/50 shadow-sm group shrink-0 mt-auto hover:shadow-md transition-all duration-300">
                {/* Background Decor/Map */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute -left-10 -top-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
                </div>

                <div className="relative p-8 h-64 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 relative">
                    <MapPin className="w-12 h-12 text-primary drop-shadow-lg animate-bounce" />
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/10 rounded-full blur-xs"></div>
                  </div>

                  <h4 className="font-serif font-bold text-2xl text-foreground mb-1">Essonne</h4>
                  <p className="text-muted-foreground text-sm mb-6 max-w-[200px]">Les Ulis, Évry, Corbeil et environs.</p>

                  <Button size="lg" className="bg-gradient-premium-orange hover:shadow-xl rounded-full text-white font-bold px-8 shadow-lg transition-all hover:-translate-y-0.5" asChild>
                    <Link href="/localisation">Voir la carte détaillée &gt;</Link>
                  </Button>
                </div>

                {/* Leaf Decor */}
                <div className="absolute bottom-0 left-0 w-16 h-16 text-primary/10 rotate-12 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C8.58,15.06 10.13,10.5 18.88,11.63V11.63C20.4,8.19 18.33,4.91 16.12,3.12C14.7,1.96 11,1.1 11,1.1C11,1.1 11.5,4 11.5,5C12,6.5 13.5,6.5 13.5,6.5C13.5,6.5 11.23,7.18 10.15,9.45C9.07,11.71 10.13,13.78 10.13,13.78C10.13,13.78 13.75,8.22 17,8Z" /></svg>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default LocationSection;