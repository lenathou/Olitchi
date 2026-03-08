"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Loader2, AlertCircle } from "lucide-react";

import { useCartStore, selectCartTotalPrice } from "@/store/cartStore";
import { checkoutFormSchema, CheckoutFormValues } from "@/lib/validations/checkout";
import { createGuestOrder } from "@/lib/server/orders/createOrder";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CheckoutPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const items = useCartStore((state) => state.items);
    const clearCart = useCartStore((state) => state.clearCart);
    const totalPrice = useCartStore(selectCartTotalPrice);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            customerName: "",
            customerEmail: "",
            customerPhone: "",
            notes: "",
        },
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (items.length === 0 && !isSubmitting) {
        return (
            <div className="min-h-screen bg-background pb-24 pt-32 md:pt-40 px-4 md:px-8 max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Panier vide</h1>
                <p className="text-muted-foreground mb-8">Vous n'avez aucun article dans votre panier.</p>
                <Button asChild size="lg">
                    <Link href="/menu">Retour au menu</Link>
                </Button>
            </div>
        );
    }

    const onSubmit = async (data: CheckoutFormValues) => {
        setIsSubmitting(true);
        setServerError(null);

        const cartPayload = items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
        }));

        const result = await createGuestOrder(data, cartPayload);

        if (result.error) {
            setServerError(result.error);
            setIsSubmitting(false);
        } else if (result.success && result.orderId) {
            clearCart();
            router.push(`/checkout/pending`);
        }
    };

    return (
        <div className="min-h-screen bg-background pb-24 pt-32 md:pt-40 px-4 md:px-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/panier" className="p-2 -ml-2 bg-secondary/20 hover:bg-secondary/40 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6 text-foreground" />
                </Link>
                <h1 className="text-3xl font-serif font-bold text-foreground">Finaliser la commande</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
                {/* Colonne Formulaire */}
                <div className="bg-card rounded-[2rem] p-6 sm:p-8 border border-border/50 shadow-sm relative overflow-hidden">
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Vos informations</h2>

                    {serverError && (
                        <div className="mb-6 p-4 rounded-xl bg-destructive/10 text-destructive border border-destructive/20 flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <p className="text-sm font-medium">{serverError}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="customerName">Nom complet *</Label>
                            <Input
                                id="customerName"
                                placeholder="Ex : Jean Dupont"
                                {...register("customerName")}
                                className={errors.customerName ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.customerName && <p className="text-sm text-destructive font-medium">{errors.customerName.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="customerEmail">Adresse email *</Label>
                            <Input
                                id="customerEmail"
                                type="email"
                                placeholder="Ex : jean@exemple.fr"
                                {...register("customerEmail")}
                                className={errors.customerEmail ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.customerEmail && <p className="text-sm text-destructive font-medium">{errors.customerEmail.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="customerPhone">Numéro de téléphone *</Label>
                            <Input
                                id="customerPhone"
                                type="tel"
                                placeholder="Ex : 06 12 34 56 78"
                                {...register("customerPhone")}
                                className={errors.customerPhone ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.customerPhone && <p className="text-sm text-destructive font-medium">{errors.customerPhone.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes">Notes pour le restaurant (Optionnel)</Label>
                            <Textarea
                                id="notes"
                                placeholder="Précisez ici vos allergies ou demandes spéciales..."
                                className="resize-none h-24"
                                {...register("notes")}
                            />
                            {errors.notes && <p className="text-sm text-destructive font-medium">{errors.notes.message}</p>}
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full rounded-xl h-14 text-base font-bold shadow-lg shadow-primary/20"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Création en cours...
                                </>
                            ) : (
                                "Valider ma commande (" + totalPrice.toFixed(2) + "€)"
                            )}
                        </Button>
                    </form>
                </div>

                {/* Colonne Récapitulatif */}
                <div className="lg:sticky lg:top-32 h-fit">
                    <div className="bg-secondary/10 rounded-[2rem] p-6 lg:p-8 border border-secondary/20 shadow-sm relative overflow-hidden">
                        <h2 className="text-xl font-serif font-bold text-foreground mb-6">Récapitulatif serveur</h2>

                        <div className="space-y-4 mb-6">
                            {items.map((item) => (
                                <div key={item.productId} className="flex gap-4 justify-between items-center text-sm">
                                    <span className="text-foreground shrink">
                                        <span className="font-bold text-primary mr-2">{item.quantity}x</span>
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-border/50">
                            <div className="flex justify-between items-end">
                                <span className="block font-bold mt-1 text-lg text-foreground">Total estimé</span>
                                <span className="font-bold text-2xl text-primary leading-none">{totalPrice.toFixed(2)}€</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 font-medium">
                                Le montant exact sera vérifié et recalculé par nos serveurs lors de la validation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
