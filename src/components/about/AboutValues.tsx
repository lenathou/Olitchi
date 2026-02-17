'use client';

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion, useReducedMotion } from 'framer-motion';
import { headerStagger, fadeUp, gridStagger, cardReveal, scrollRevealConfig } from '@/lib/animations/a-propos/about-animations';

const values = [
    {
        title: 'Authenticité',
        description: 'Recettes traditionnelles et ingrédients authentiques pour préserver le goût véritable des Antilles.',
        icon: '/images/icons/satisfied.webp'
    },
    {
        title: 'Convivialité',
        description: 'Un accueil chaleureux et une ambiance familiale pour partager ensemble l\'amour de la cuisine antillaise.',
        icon: '/images/icons/convivial.webp'
    },
    {
        title: 'Qualité',
        description: 'Produits frais sélectionnés avec soin et préparation artisanale pour une qualité irréprochable.',
        icon: '/images/icons/quality.webp'
    }
];

export function AboutValues() {
    const shouldReduceMotion = useReducedMotion();
    const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    variants={shouldReduceMotion ? undefined : headerStagger}
                    {...revealProps}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
                        variants={shouldReduceMotion ? undefined : fadeUp}
                    >
                        Nos Valeurs
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        variants={shouldReduceMotion ? undefined : fadeUp}
                    >
                        Ce qui nous guide au quotidien dans notre passion culinaire
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8 lg:gap-12"
                    variants={shouldReduceMotion ? undefined : gridStagger}
                    {...revealProps}
                >
                    {values.map((item, index) => (
                        <motion.div key={index} variants={shouldReduceMotion ? undefined : cardReveal}>
                            <Card
                                variant="product"
                                className="text-center hover:-translate-y-2 transition-transform duration-300 p-8 flex flex-col items-center bg-card shadow-sm border-none"
                            >
                                <div className="relative w-20 h-20 mb-6 drop-shadow-md">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
