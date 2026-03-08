"use server";

import { prisma } from "@/lib/prisma";
import { checkoutFormSchema, checkoutCartSchema, CheckoutFormValues, CheckoutCartItem } from "@/lib/validations/checkout";

export async function createGuestOrder(formData: CheckoutFormValues, cartItems: CheckoutCartItem[]) {
    try {
        // 1. Validation structurelle avec Zod
        const parsedUser = checkoutFormSchema.safeParse(formData);
        const parsedCart = checkoutCartSchema.safeParse(cartItems);

        if (!parsedUser.success) {
            return { error: "informations client invalides" };
        }
        if (!parsedCart.success) {
            return { error: "panier invalide" };
        }

        const { customerName, customerEmail, customerPhone, notes } = parsedUser.data;
        const items = parsedCart.data;

        const productIds = items.map((item) => item.productId);

        // 2. Fetcher et valider les prix et la disponibilité depuis le serveur
        const dbProducts = await prisma.product.findMany({
            where: {
                id: { in: productIds }
            }
        });

        // 3. Validation métier
        let totalAmount = 0;
        const orderItemsToCreate = [];

        for (const item of items) {
            const product = dbProducts.find((p) => p.id === item.productId);

            if (!product) {
                return { error: "un produit n'est plus disponible" };
            }

            if (!product.isAvailable) {
                return { error: "un produit n'est plus disponible" };
            }

            const lineTotal = product.price * item.quantity;
            totalAmount += lineTotal;

            orderItemsToCreate.push({
                productId: product.id,
                productNameSnapshot: product.name,
                unitPriceSnapshot: product.price,
                quantity: item.quantity,
                lineTotal: lineTotal
            });
        }

        // 4. Créer la commande en Base de Données (Transaction implicite)
        const order = await prisma.order.create({
            data: {
                customerName,
                customerEmail,
                customerPhone,
                notes,
                totalAmount,
                status: "PENDING_PAYMENT",
                items: {
                    create: orderItemsToCreate
                }
            }
        });

        return {
            success: true,
            orderId: order.id,
            message: "Commande enregistrée en attente de paiement."
        };

    } catch (error) {
        // Logging générique pour éviter toute fuite de données personnelles ou payload en console
        console.error("Erreur serveur lors de la préparation de la commande.");
        return { error: "impossible de préparer la commande pour le moment" };
    }
}
