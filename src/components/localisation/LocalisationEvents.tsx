import { PartyPopper, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export function LocalisationEvents() {
    return (
        <section className="px-4 pb-20">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center justify-center gap-3">
                    <PartyPopper className="w-8 h-8 text-primary" />
                    Vous organisez un événement ?
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <Card className="p-6 border-none shadow-sm bg-card/50 hover:bg-card transition-colors">
                        <h3 className="font-bold text-lg mb-2">Privé</h3>
                        <p className="text-muted-foreground text-sm">Mariages, Baptêmes, Anniversaires...</p>
                    </Card>
                    <Card className="p-6 border-none shadow-sm bg-card/50 hover:bg-card transition-colors">
                        <h3 className="font-bold text-lg mb-2">Professionnel</h3>
                        <p className="text-muted-foreground text-sm">Repas d'entreprise, Festivals, Marchés...</p>
                    </Card>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8">
                    <p className="text-xl font-serif font-bold text-foreground mb-6">
                        Privatisez le food truck O'Litchi !
                    </p>
                    <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold px-8">
                        <Link href="/contact">
                            Nous contacter / Devis
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
