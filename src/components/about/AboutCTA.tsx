import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export function AboutCTA() {
    return (
        <section className="py-20 lg:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                    Prêt à découvrir nos saveurs ?
                </h2>
                <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                    Venez nous rendre visite et laissez-vous transporter par l'authenticité
                    de la cuisine afro-antillaise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <Link href="/menu">
                            Découvrir notre menu
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-2 border-primary/20 text-primary hover:bg-primary/5 bg-transparent rounded-full px-8 h-12 text-lg font-bold">
                        <Link href="/localisation-horaires">
                            <MapPin className="w-5 h-5 mr-2" />
                            Nous trouver
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
