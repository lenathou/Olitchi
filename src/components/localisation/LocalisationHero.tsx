'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { headerStagger, fadeUp } from '@/lib/animations/localisation/localisation-animations';

export function LocalisationHero() {
    const shouldReduceMotion = useReducedMotion();
    const motionProps = shouldReduceMotion
        ? {}
        : { initial: 'hidden' as const, animate: 'visible' as const };

    return (
        <motion.section
            className="py-12 md:py-16 text-center px-4"
            variants={shouldReduceMotion ? undefined : headerStagger}
            {...motionProps}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-serif font-bold mb-4"
                variants={shouldReduceMotion ? undefined : fadeUp}
            >
                Où nous trouver ?
            </motion.h1>
            <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                variants={shouldReduceMotion ? undefined : fadeUp}
            >
                Le food truck <span className="text-primary font-bold">O'Litchi</span> sillonne les routes de l'Essonne pour vous apporter le soleil des Antilles.
            </motion.p>
        </motion.section>
    );
}
