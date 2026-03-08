'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ShoppingBag } from 'lucide-react';
import { useCartStore, selectCartTotalPrice, selectCartTotalItems } from '@/store/cartStore';
import { CartItem } from '@/components/cart/CartItem';
import { Button } from '@/components/ui/button';
import { CartState } from '@/types/cart';

export default function CartPage() {
    const [mounted, setMounted] = useState(false);
    const items = useCartStore((state: CartState) => state.items);
    const clearCart = useCartStore((state: CartState) => state.clearCart);
    const totalPrice = useCartStore(selectCartTotalPrice);
    const totalItems = useCartStore(selectCartTotalItems);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Skeleton minimal pour éviter l'hydratation mismatch
        return (
            <div className="min-h-screen bg-background pb-24 pt-32 md:pt-40 px-4 md:px-8 max-w-4xl mx-auto flex justify-center items-center">
                <div className="animate-pulse flex items-center justify-center">
                    <ShoppingBag className="w-12 h-12 text-primary/20" />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-24 pt-32 md:pt-40 px-4 md:px-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/menu" className="p-2 -ml-2 bg-secondary/20 hover:bg-secondary/40 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6 text-foreground" />
                </Link>
                <h1 className="text-3xl font-serif font-bold text-foreground">Mon Panier</h1>
            </div>

            {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center bg-card rounded-3xl border border-border/50">
                    <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag className="w-12 h-12 text-primary/50" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Votre panier est vide</h2>
                    <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
                        Découvrez notre menu et laissez-vous tenter par nos spécialités.
                    </p>
                    <Button asChild size="lg" className="rounded-full px-8 text-base font-bold shadow-md">
                        <Link href="/menu">Parcourir le menu</Link>
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                            <span className="text-base font-bold text-foreground">
                                {totalItems} article{totalItems > 1 ? 's' : ''}
                            </span>
                            <button
                                onClick={clearCart}
                                className="text-sm text-muted-foreground hover:text-destructive transition-colors font-medium underline underline-offset-4"
                            >
                                Vider le panier
                            </button>
                        </div>

                        <div className="space-y-4">
                            {items.map((item: import('@/types/cart').CartItem) => (
                                <CartItem key={item.productId} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="bg-card rounded-[2rem] p-8 border border-border/50 shadow-sm relative overflow-hidden">
                            {/* Fond décoratif */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10" />

                            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Récapitulatif</h2>

                            <div className="space-y-4 text-sm mb-8">
                                <div className="flex justify-between text-muted-foreground font-medium">
                                    <span>Sous-total</span>
                                    <span className="text-foreground">{totalPrice.toFixed(2)}€</span>
                                </div>
                                {/* Espace pour d'éventuels frais futurs */}

                                <div className="pt-6 mt-6 border-t border-border/50 flex justify-between items-end">
                                    <div>
                                        <span className="block font-bold text-lg text-foreground mb-1">Total</span>
                                        <span className="text-xs text-muted-foreground">Taxes incluses</span>
                                    </div>
                                    <span className="font-bold text-3xl text-primary leading-none">{totalPrice.toFixed(2)}€</span>
                                </div>
                            </div>

                            <Button size="lg" className="w-full rounded-2xl h-14 text-base font-bold shadow-lg shadow-primary/20 relative overflow-hidden group">
                                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">Continuer vers la commande</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </Button>
                            <p className="text-xs text-center text-muted-foreground mt-4 font-medium">
                                La validation de commande sera disponible prochainement !
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
