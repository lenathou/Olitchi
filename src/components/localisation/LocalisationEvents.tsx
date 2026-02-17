'use client';

import { PartyPopper, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { headerStagger, fadeUp, gridStagger, cardReveal, scaleReveal, scrollRevealConfig } from '@/lib/animations/localisation/localisation-animations';

export function LocalisationEvents() {
    const shouldReduceMotion = useReducedMotion();
    const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

    return (
        <section className="px-4 pb-20">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.h2
                    className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center justify-center gap-3"
                    variants={shouldReduceMotion ? undefined : fadeUp}
                    {...revealProps}
                >
                    <PartyPopper className="w-8 h-8 text-primary" />
                    Vous organisez un événement ?
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-6 mb-10"
                    variants={shouldReduceMotion ? undefined : gridStagger}
                    {...revealProps}
                >
                    <motion.div variants={shouldReduceMotion ? undefined : cardReveal}>
                        <Card className="p-6 border-none shadow-sm bg-card/50 hover:bg-card transition-colors">
                            <h3 className="font-bold text-lg mb-2">Privé</h3>
                            <p className="text-muted-foreground text-sm">Mariages, Baptêmes, Anniversaires...</p>
                        </Card>
                    </motion.div>
                    <motion.div variants={shouldReduceMotion ? undefined : cardReveal}>
                        <Card className="p-6 border-none shadow-sm bg-card/50 hover:bg-card transition-colors">
                            <h3 className="font-bold text-lg mb-2">Professionnel</h3>
                            <p className="text-muted-foreground text-sm">Repas d'entreprise, Festivals, Marchés...</p>
                        </Card>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="bg-primary/5 rounded-2xl p-8"
                    variants={shouldReduceMotion ? undefined : scaleReveal}
                    {...revealProps}
                >
                    <p className="text-xl font-serif font-bold text-foreground mb-6">
                        Privatisez le food truck O'Litchi !
                    </p>
                    <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold px-8">
                        <Link href="/contact">
                            Nous contacter / Devis
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
