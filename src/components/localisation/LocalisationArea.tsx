'use client';

import { MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { scaleReveal, scrollRevealConfig } from '@/lib/animations/localisation/localisation-animations';

export function LocalisationArea() {
    const shouldReduceMotion = useReducedMotion();
    const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

    return (
        <motion.section
            className="px-4 mb-20 text-center"
            variants={shouldReduceMotion ? undefined : scaleReveal}
            {...revealProps}
        >
            <div className="container mx-auto max-w-3xl">
                <div className="bg-secondary/20 rounded-[2.5rem] p-8 md:p-12 border border-secondary/30">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-6 text-primary">
                        <MapPin className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Zone de déplacement</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Nous sommes présents principalement en <span className="font-bold text-foreground">Essonne (91)</span>.
                        <br className="hidden md:block" />
                        Retrouvez-nous régulièrement aux <span className="font-bold text-foreground">Ulis, à Évry, Corbeil-Essonnes</span> et sur les marchés locaux de la région.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}
