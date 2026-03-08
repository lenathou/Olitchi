import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartState, CartItem } from '@/types/cart';

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [] as CartItem[],

            addItem: (newItem: Omit<CartItem, 'quantity'>) => set((state) => {
                const existingItem = state.items.find((item) => item.productId === newItem.productId);

                if (existingItem) {
                    return {
                        items: state.items.map((item) =>
                            item.productId === newItem.productId
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    };
                }

                return {
                    items: [...state.items, { ...newItem, quantity: 1 }],
                };
            }),

            removeItem: (productId: string) => set((state) => ({
                items: state.items.filter((item) => item.productId !== productId),
            })),

            updateItemQuantity: (productId: string, quantity: number) => set((state) => {
                if (quantity <= 0) {
                    // Si la quantité tombe à 0, la ligne est supprimée (règle 3)
                    return {
                        items: state.items.filter((item) => item.productId !== productId),
                    };
                }

                return {
                    items: state.items.map((item) =>
                        item.productId === productId
                            ? { ...item, quantity }
                            : item
                    ),
                };
            }),

            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'olitchi-guest-cart', // Nom de la clé localStorage
        }
    )
);

// Helpers / Selectors (règle 2 et 4)
export const selectCartTotalItems = (state: CartState) =>
    state.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotalPrice = (state: CartState) =>
    state.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectItemQuantity = (productId: string) => (state: CartState) =>
    state.items.find((item) => item.productId === productId)?.quantity || 0;
