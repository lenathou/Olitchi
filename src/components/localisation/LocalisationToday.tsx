'use client';

import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { SCHEDULE, TODAY_DATA } from '@/data/schedule';
import { motion, useReducedMotion } from 'framer-motion';
import { scaleReveal, scrollRevealConfig } from '@/lib/animations/localisation/localisation-animations';

export function LocalisationToday() {
    const shouldReduceMotion = useReducedMotion();
    const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

    const currentDayIndex = new Date().getDay();
    const scheduleIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

    const realToday = SCHEDULE[scheduleIndex] ?? SCHEDULE[0] ?? { location: 'Fermé', hours: '-', isOpen: false, day: 'Unknown' };
    const isTodayOpen = realToday?.isOpen;

    return (
        <motion.section
            id="today"
            className="px-4 mb-16"
            variants={shouldReduceMotion ? undefined : scaleReveal}
            {...revealProps}
        >
            <div className="container mx-auto max-w-3xl">
                <Card variant="product" className="relative overflow-hidden border-2 border-primary/20 bg-card p-8 md:p-10 shadow-lg text-center">

                    {/* Badge "Aujourd'hui" */}
                    <div className="absolute top-4 right-4 animate-pulse">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 uppercase tracking-wide">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            En direct
                        </span>
                    </div>

                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                        Aujourd'hui
                    </h2>
                    <p className="text-md text-muted-foreground mb-6 capitalize font-medium">
                        {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </p>

                    {isTodayOpen ? (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                                    {realToday.location}
                                </h3>
                                <div className="flex items-center justify-center text-muted-foreground gap-2 text-lg">
                                    <Clock className="w-5 h-5" />
                                    <span>{realToday.hours}</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                                    <a href={TODAY_DATA.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        Ouvrir dans Google Maps
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="py-6">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-muted-foreground mb-4">
                                Pas de service aujourd'hui
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Nous sommes fermés aujourd'hui. Retrouvez-nous dès demain !
                            </p>
                            <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary/5">
                                <Link href="#schedule">
                                    Voir le planning de la semaine
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    )}
                </Card>
            </div>
        </motion.section>
    );
}
