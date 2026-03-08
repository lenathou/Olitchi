import { z } from "zod";

// --- Validation pour le formulaire de checkout invité ---
const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

export const checkoutFormSchema = z.object({
    customerName: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(50, "Le nom est trop long"),
    customerEmail: z.string().trim().email("L'adresse email est invalide").max(100, "L'adresse email est trop longue"),
    customerPhone: z.string().trim().regex(phoneRegex, "Le numéro de téléphone est invalide").max(20, "Le numéro de téléphone est trop long"),
    notes: z.string().trim().max(500, "Les notes ne peuvent pas dépasser 500 caractères").optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

// --- Validation pour les éléments du panier provenant du client ---
// Note: Le serveur ne fait confiance qu'à l'ID et à la quantité pour recalculer les prix
export const checkoutCartItemSchema = z.object({
    productId: z.string().min(1, "L'identifiant du produit est requis"),
    quantity: z.number().int().min(1, "La quantité doit être d'au moins 1"),
});

export const checkoutCartSchema = z.array(checkoutCartItemSchema).min(1, "Le panier ne peut pas être vide");

export type CheckoutCartItem = z.infer<typeof checkoutCartItemSchema>;
