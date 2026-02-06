import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function AboutInfo() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Informations Pratiques
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Location Card */}
                    <Card variant="product" className="p-8 flex flex-col items-center text-center bg-card border-none shadow-md">
                        <div className="relative w-16 h-16 mb-4">
                            <Image src="/images/icons/local.webp" alt="Location" fill className="object-contain" />
                        </div>
                        <h3 className="font-serif font-bold text-2xl mb-4">Localisation</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                            Nous nous déplaçons principalement dans la région des Ulis
                            et de l'Essonne (91).
                        </p>
                        <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold">
                            <Link href="/localisation">
                                Voir nos emplacements
                            </Link>
                        </Button>
                    </Card>

                    {/* Hours Card */}
                    <Card variant="product" className="p-8 flex flex-col items-center text-center bg-card border-none shadow-md">
                        <div className="relative w-16 h-16 mb-4">
                            <Image src="/images/icons/calendar.webp" alt="Horaires" fill className="object-contain" />
                        </div>
                        <h3 className="font-serif font-bold text-2xl mb-4">Horaires</h3>
                        <div className="space-y-2 text-muted-foreground mb-6 text-sm flex-grow">
                            <p><strong className="text-foreground">Lundi - Vendredi:</strong> 11h30 - 22h00</p>
                            <p><strong className="text-foreground">Samedi:</strong> 12h00 - 23h00</p>
                            <p><strong className="text-foreground">Dimanche:</strong> Fermé</p>
                        </div>
                        <Button asChild variant="outline" className="w-full rounded-full border-2 border-primary/20 hover:bg-primary/5 text-primary font-bold">
                            <Link href="/contact">
                                Nous contacter
                            </Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
}
