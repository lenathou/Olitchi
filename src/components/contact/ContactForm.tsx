'use client';

import { Send, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, useReducedMotion } from 'framer-motion';
import { headerStagger, fadeUp, fadeLeft, fadeRight, scrollRevealConfig } from '@/lib/animations/contact/contact-animations';

export function ContactForm() {
    const shouldReduceMotion = useReducedMotion();
    const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16"
                    variants={shouldReduceMotion ? undefined : headerStagger}
                    {...revealProps}
                >
                    {/* Formulaire */}
                    <motion.div variants={shouldReduceMotion ? undefined : fadeLeft}>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                            Envoyez-nous un message
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Vous avez une question sur nos plats, vous souhaitez organiser un événement
                            privé ou simplement nous faire part de vos suggestions ? Nous serions ravis
                            de vous entendre !
                        </p>

                        <form className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="nom" className="block text-sm font-bold text-foreground mb-2">
                                        Nom *
                                    </label>
                                    <Input id="nom" type="text" required className="w-full rounded-xl" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                                        Email *
                                    </label>
                                    <Input id="email" type="email" required className="w-full rounded-xl" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="telephone" className="block text-sm font-bold text-foreground mb-2">
                                    Téléphone
                                </label>
                                <Input id="telephone" type="tel" className="w-full rounded-xl" />
                            </div>

                            <div>
                                <label htmlFor="sujet" className="block text-sm font-bold text-foreground mb-2">
                                    Sujet *
                                </label>
                                <Input id="sujet" type="text" required className="w-full rounded-xl" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                                    Message *
                                </label>
                                <Textarea
                                    id="message"
                                    required
                                    className="w-full min-h-[120px] rounded-xl"
                                    placeholder="Décrivez votre demande..."
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                                <Send className="w-5 h-5 mr-2" />
                                Envoyer le message
                            </Button>
                        </form>
                    </motion.div>

                    {/* Side panel */}
                    <motion.div variants={shouldReduceMotion ? undefined : fadeRight} className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                            Événements Privés
                        </h2>

                        <Card variant="product" className="border-none shadow-sm bg-card">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Organisez votre événement</h3>
                                <p className="text-muted-foreground mb-5 leading-relaxed">
                                    O'Litchi se déplace pour vos événements privés : anniversaires,
                                    mariages, événements d'entreprise, fêtes de quartier...
                                </p>
                                <ul className="text-muted-foreground space-y-2.5 mb-6 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        Menus personnalisés selon vos goûts
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        Service traiteur disponible
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        Déplacement dans l'Essonne et alentours
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        Devis gratuit sur demande
                                    </li>
                                </ul>
                                <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold">
                                    <a href="tel:+33123456789">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Appelez pour un devis
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card variant="product" className="border-none shadow-sm bg-card">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Suivez-nous</h3>
                                <p className="text-muted-foreground mb-5 leading-relaxed">
                                    Restez informés de nos emplacements et nouveautés !
                                </p>
                                <div className="space-y-3">
                                    <Button variant="outline" className="w-full justify-start rounded-xl border-primary/10 hover:bg-primary/5 font-medium">
                                        <span className="mr-3 text-lg">📱</span>
                                        Facebook - O'Litchi Food Truck
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start rounded-xl border-primary/10 hover:bg-primary/5 font-medium">
                                        <span className="mr-3 text-lg">📸</span>
                                        Instagram - @olitchi_foodtruck
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
