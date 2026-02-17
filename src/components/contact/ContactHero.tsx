'use client';

import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { headerStagger, fadeUp } from '@/lib/animations/contact/contact-animations';

export function ContactHero() {
    const shouldReduceMotion = useReducedMotion();
    const motionProps = shouldReduceMotion
        ? {}
        : { initial: 'hidden' as const, animate: 'visible' as const };

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg-test.webp"
                    alt="Background Texture"
                    fill
                    className="object-cover opacity-10"
                    priority
                />
                <div className="absolute inset-0" />
            </div>

            <motion.div
                className="container relative z-10 mx-auto px-4 text-center"
                variants={shouldReduceMotion ? undefined : headerStagger}
                {...motionProps}
            >
                <motion.div
                    className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2.5 mb-6 shadow-sm border border-primary/20"
                    variants={shouldReduceMotion ? undefined : fadeUp}
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-bold text-sm">Nous Contacter</span>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 text-foreground"
                    variants={shouldReduceMotion ? undefined : fadeUp}
                >
                    Contactez <span className="text-primary italic">O'Litchi</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium"
                    variants={shouldReduceMotion ? undefined : fadeUp}
                >
                    Une question ? Une envie de nos spécialités ? N'hésitez pas à nous contacter !
                </motion.p>
            </motion.div>
        </section>
    );
}
