'use client';

import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { headerStagger, fadeUp, scaleReveal, scrollRevealConfig } from '@/lib/animations/contact/contact-animations';

export function ContactCTA() {
    const shouldReduceMotion = useReducedMotion();
    const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

    return (
        <section className="py-20 lg:py-24">
            <motion.div
                className="container mx-auto px-4 text-center"
                variants={shouldReduceMotion ? undefined : headerStagger}
                {...revealProps}
            >
                <motion.h2
                    className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground"
                    variants={shouldReduceMotion ? undefined : fadeUp}
                >
                    Une envie soudaine de nos spécialités ?
                </motion.h2>
                <motion.p
                    className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium"
                    variants={shouldReduceMotion ? undefined : fadeUp}
                >
                    Appelez-nous pour connaître notre emplacement du jour !
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    variants={shouldReduceMotion ? undefined : scaleReveal}
                >
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <a href="tel:+33123456789">
                            <Phone className="w-5 h-5 mr-2" />
                            01 23 45 67 89
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-2 border-primary/20 text-primary hover:bg-primary/5 bg-transparent rounded-full px-8 h-12 text-lg font-bold">
                        <Link href="/localisation">
                            <MapPin className="w-5 h-5 mr-2" />
                            Voir nos emplacements
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
