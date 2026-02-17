'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion, useReducedMotion } from 'framer-motion';
import { headerStagger, fadeUp, gridStagger, cardReveal, scrollRevealConfig } from '@/lib/animations/a-propos/about-animations';

const specialties = [
    {
        title: 'Bokits',
        description: 'Pain frit traditionnel garni selon vos envies',
        label: 'Spécialité',
        icon: '/images/icons/menu.webp',
        color: 'bg-orange-100 text-orange-600'
    },
    {
        title: 'Grillades',
        description: 'Poulet boucané et grillades marinées aux épices créoles',
        label: 'Populaire',
        icon: '/images/icons/toque.webp',
        color: 'bg-green-100 text-green-600'
    },
    {
        title: 'Accompagnements',
        description: 'Manioc, plantain, riz créole et légumes pays',
        label: 'Traditionnel',
        icon: '/images/icons/local.webp',
        color: 'bg-yellow-100 text-yellow-600'
    },
    {
        title: 'Boissons',
        description: 'Jus de fruits tropicaux et boissons rafraîchissantes',
        label: 'Rafraîchissant',
        icon: '/images/icons/local-2.webp',
        color: 'bg-blue-100 text-blue-600'
    }
];

export function AboutSpecialties() {
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
                        Nos Spécialités
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        variants={shouldReduceMotion ? undefined : fadeUp}
                    >
                        Découvrez les saveurs authentiques qui font notre réputation
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={shouldReduceMotion ? undefined : gridStagger}
                    {...revealProps}
                >
                    {specialties.map((spec, index) => (
                        <motion.div
                            key={index}
                            variants={shouldReduceMotion ? undefined : cardReveal}
                        >
                            <div
                                className="bg-card rounded-[2rem] p-8 text-center shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="relative w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Image src={spec.icon} alt={spec.title} fill className="object-contain" />
                                </div>

                                <h3 className="font-serif font-bold text-xl mb-3 text-foreground">{spec.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {spec.description}
                                </p>
                                <Badge className={`mt-auto ${spec.color} border-none`}>{spec.label}</Badge>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
