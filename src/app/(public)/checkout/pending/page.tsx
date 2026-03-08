import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PendingPaymentPage() {
    return (
        <div className="min-h-screen bg-background pb-24 pt-32 md:pt-40 px-4 md:px-8 max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-[2rem] p-8 md:p-12 border border-border/50 shadow-sm relative overflow-hidden flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>

                <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
                    Commande enregistrée
                </h1>

                <p className="text-muted-foreground mb-8 text-lg">
                    Votre commande a bien été prise en compte et est actuellement en attente de paiement (<span className="font-bold text-foreground">PENDING_PAYMENT</span>).
                </p>

                <div className="bg-secondary/20 border border-secondary/30 rounded-xl p-4 flex items-start text-left gap-4 w-full mb-8">
                    <Info className="w-6 h-6 text-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80">
                        <strong className="block mb-1 text-foreground">Information importante</strong>
                        La validation métier finale de cette commande n'interviendra qu'une fois le module de paiement intégré et le paiement confirmé (Phase suivante).
                    </p>
                </div>

                <Button asChild size="lg" className="w-full sm:w-auto rounded-xl h-12 px-8 font-bold shadow-md">
                    <Link href="/menu">Retour au Menu</Link>
                </Button>
            </div>
        </div>
    );
}
