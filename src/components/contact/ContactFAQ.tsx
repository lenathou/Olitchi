'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion, useReducedMotion } from 'framer-motion';
import { headerStagger, fadeUp, gridStagger, cardReveal, scrollRevealConfig } from '@/lib/animations/contact/contact-animations';

const faqs = [
    {
        question: 'Acceptez-vous les réservations ?',
        answer: 'Pour les événements privés, oui ! Pour le service quotidien, nous fonctionnons sans réservation, premier arrivé, premier servi.',
    },
    {
        question: 'Proposez-vous des options végétariennes ?',
        answer: 'Absolument ! Nous avons plusieurs options végétariennes dans notre menu, notamment nos bokits aux légumes et nos accompagnements traditionnels.',
    },
    {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer: 'Nous acceptons les espèces, cartes bancaires et paiements sans contact pour votre commodité.',
    },
    {
        question: 'Où puis-je vous trouver aujourd\'hui ?',
        answer: 'Consultez notre page localisation ou appelez-nous directement pour connaître notre emplacement du jour !',
    },
];

export function ContactFAQ() {
    const shouldReduceMotion = useReducedMotion();
    const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    className="text-center mb-12"
                    variants={shouldReduceMotion ? undefined : headerStagger}
                    {...revealProps}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
                        variants={shouldReduceMotion ? undefined : fadeUp}
                    >
                        Questions Fréquentes
                    </motion.h2>
                    <motion.div
                        className="h-1 w-16 bg-primary/30 mx-auto rounded-full"
                        variants={shouldReduceMotion ? undefined : fadeUp}
                    />
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={shouldReduceMotion ? undefined : gridStagger}
                    {...revealProps}
                >
                    {faqs.map((faq) => (
                        <motion.div key={faq.question} variants={shouldReduceMotion ? undefined : cardReveal}>
                            <Card variant="product" className="p-6 bg-card border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                                <h3 className="font-serif font-bold text-lg mb-3 text-foreground">{faq.question}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
