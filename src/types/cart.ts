export interface CartItem {
    productId: string; // Utilisation unique de productId pour identifier l'article
    slug?: string;
    name: string;
    price: number;
    imagePath?: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    // Actions
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (productId: string) => void;
    updateItemQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}
