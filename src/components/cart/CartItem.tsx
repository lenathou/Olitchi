'use client';

import Image from 'next/image';
import { Minus, Plus, ChefHat, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { CartItem as CartItemType, CartState } from '@/types/cart';

interface CartItemProps {
    item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
    const updateItemQuantity = useCartStore((state: CartState) => state.updateItemQuantity);
    const removeItem = useCartStore((state: CartState) => state.removeItem);

    return (
        <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/50 shadow-sm relative pr-12 sm:pr-4">
            <div className="relative w-24 h-24 sm:w-20 sm:h-20 shrink-0 bg-secondary/20 rounded-xl flex items-center justify-center overflow-hidden">
                {item.imagePath ? (
                    <Image
                        src={item.imagePath}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                    />
                ) : (
                    <ChefHat className="w-8 h-8 text-primary/30" />
                )}
            </div>

            <div className="flex-1 min-w-0 h-full flex flex-col justify-between py-1">
                <div>
                    <h3 className="font-semibold text-foreground truncate text-lg sm:text-base">{item.name}</h3>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-primary font-bold">{item.price.toFixed(2)}€</p>

                    <div className="sm:hidden flex items-center gap-3 bg-secondary/20 rounded-full p-1 border border-border/50">
                        <button
                            onClick={() => updateItemQuantity(item.productId, item.quantity - 1)}
                            className="w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-sm hover:bg-secondary/50 transition-colors text-foreground"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold text-sm min-w-[1.5rem] text-center text-foreground">{item.quantity}</span>
                        <button
                            onClick={() => updateItemQuantity(item.productId, item.quantity + 1)}
                            className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-sm hover:bg-primary/90 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Controls */}
            <div className="hidden sm:flex flex-col items-end gap-3">
                <button
                    onClick={() => removeItem(item.productId)}
                    className="text-muted-foreground hover:text-destructive transition-colors p-1"
                    aria-label="Supprimer du panier"
                >
                    <Trash2 className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 bg-secondary/20 rounded-full p-1 border border-border/50">
                    <button
                        onClick={() => updateItemQuantity(item.productId, item.quantity - 1)}
                        className="w-7 h-7 bg-background rounded-full flex items-center justify-center shadow-sm hover:bg-secondary/50 transition-colors text-foreground"
                    >
                        <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-medium text-sm min-w-[1rem] text-center text-foreground">{item.quantity}</span>
                    <button
                        onClick={() => updateItemQuantity(item.productId, item.quantity + 1)}
                        className="w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-sm hover:bg-primary/90 transition-colors"
                    >
                        <Plus className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {/* Mobile Trash Button (Absolute Top Right) */}
            <button
                onClick={() => removeItem(item.productId)}
                className="sm:hidden absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors p-2 -mr-2 -mt-2"
                aria-label="Supprimer du panier"
            >
                <Trash2 className="w-5 h-5" />
            </button>
        </div>
    );
}
