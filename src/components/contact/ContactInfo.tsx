'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { gridStagger, cardReveal, scrollRevealConfig } from '@/lib/animations/contact/contact-animations';

const contactCards = [
    {
        icon: Phone,
        title: 'Téléphone',
        description: 'Appelez-nous directement',
        action: { type: 'link' as const, href: 'tel:+33123456789', label: '01 23 45 67 89' },
        iconImage: '/images/icons/local.webp',
    },
    {
        icon: Mail,
        title: 'Email',
        description: 'Écrivez-nous',
        action: { type: 'link' as const, href: 'mailto:contact@olitchi.fr', label: 'contact@olitchi.fr' },
        iconImage: '/images/icons/about.webp',
    },
    {
        icon: MapPin,
        title: 'Localisation',
        description: 'Principalement aux Ulis',
        action: { type: 'button' as const, href: '/localisation', label: 'Voir nos emplacements' },
        iconImage: '/images/icons/local-2.webp',
    },
    {
        icon: Clock,
        title: 'Horaires',
        description: null,
        hours: [
            { label: 'Lun-Ven', value: '11h30-22h' },
            { label: 'Samedi', value: '12h-23h' },
            { label: 'Dimanche', value: 'Fermé' },
        ],
        iconImage: '/images/icons/calendar.webp',
    },
];

export function ContactInfo() {
    const shouldReduceMotion = useReducedMotion();
    const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={shouldReduceMotion ? undefined : gridStagger}
                    {...revealProps}
                >
                    {contactCards.map((card) => (
                        <motion.div key={card.title} variants={shouldReduceMotion ? undefined : cardReveal}>
                            <Card variant="product" className="text-center p-8 bg-card border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-center">
                                <div className="relative w-16 h-16 mb-5 drop-shadow-md">
                                    <Image
                                        src={card.iconImage}
                                        alt={card.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="font-serif font-bold text-xl mb-2 text-foreground">{card.title}</h3>

                                {card.description && (
                                    <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                                )}

                                {card.hours && (
                                    <div className="text-sm space-y-1 mb-4 text-muted-foreground">
                                        {card.hours.map((h) => (
                                            <p key={h.label}>
                                                <strong className="text-foreground">{h.label}:</strong> {h.value}
                                            </p>
                                        ))}
                                    </div>
                                )}

                                {card.action?.type === 'link' && (
                                    <a href={card.action.href} className="text-primary font-bold hover:underline mt-auto">
                                        {card.action.label}
                                    </a>
                                )}
                                {card.action?.type === 'button' && (
                                    <Button asChild variant="outline" size="sm" className="mt-auto rounded-full border-primary/20 text-primary hover:bg-primary/5 font-bold">
                                        <Link href={card.action.href}>
                                            {card.action.label}
                                        </Link>
                                    </Button>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
