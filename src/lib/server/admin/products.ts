"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/permissions";
import { productSchema, ProductFormValues } from "@/lib/validations/product";
import { revalidatePath } from "next/cache";

// Helper for robust slug generation
function slugify(text: string): string {
    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-"); // Replace multiple - with single -
}

/**
 * Generate a unique slug for a product
 */
async function generateUniqueSlug(baseName: string, idToExclude?: string): Promise<string> {
    const baseSlug = slugify(baseName);
    let currentSlug = baseSlug;
    let counter = 1;

    while (true) {
        const existing = await prisma.product.findUnique({
            where: { slug: currentSlug },
            select: { id: true },
        });

        if (!existing || existing.id === idToExclude) {
            return currentSlug;
        }

        currentSlug = `${baseSlug}-${counter}`;
        counter++;
    }
}

/**
 * Fetch all products for the admin list
 */
export async function getAdminProducts() {
    await requireAdmin();

    return prisma.product.findMany({
        include: {
            category: {
                select: { name: true, emoji: true },
            },
        },
        orderBy: [
            { category: { sortOrder: "asc" } },
            { sortOrder: "asc" },
            { name: "asc" },
        ],
    });
}

/**
 * Fetch a single product by ID for editing
 */
export async function getAdminProductById(id: string) {
    await requireAdmin();

    return prisma.product.findUnique({
        where: { id },
    });
}

export type ActionResponse = {
    success: boolean;
    error?: string;
};

/**
 * Create a new product
 */
export async function createProductAction(
    data: ProductFormValues
): Promise<ActionResponse> {
    await requireAdmin();

    try {
        const validatedData = productSchema.parse(data);
        const slug = await generateUniqueSlug(validatedData.name);

        // If sortOrder is 0 (default), let's find the max in this category and put it at the end
        let finalSortOrder = validatedData.sortOrder;
        if (finalSortOrder === 0) {
            const maxOrderProduct = await prisma.product.findFirst({
                where: { categoryId: validatedData.categoryId },
                orderBy: { sortOrder: "desc" },
                select: { sortOrder: true },
            });
            finalSortOrder = maxOrderProduct ? maxOrderProduct.sortOrder + 1 : 1;
        }

        await prisma.product.create({
            data: {
                ...validatedData,
                slug,
                sortOrder: finalSortOrder,
            },
        });

        revalidatePath("/admin/produits");
        revalidatePath("/menu"); // Revalidate public menu
        revalidatePath("/"); // Revalidate homepage (popular items)

        return { success: true };
    } catch (error) {
        console.error("Failed to create product:", error);
        return { success: false, error: "Impossible de créer le produit." };
    }
}

/**
 * Update an existing product
 */
export async function updateProductAction(
    id: string,
    data: ProductFormValues
): Promise<ActionResponse> {
    await requireAdmin();

    try {
        const validatedData = productSchema.parse(data);

        // Check if name changed to regenerate slug
        const currentProduct = await prisma.product.findUnique({
            where: { id },
            select: { name: true, slug: true },
        });

        if (!currentProduct) {
            return { success: false, error: "Produit introuvable." };
        }

        let slug = currentProduct.slug;
        if (currentProduct.name !== validatedData.name) {
            slug = await generateUniqueSlug(validatedData.name, id);
        }

        let finalSortOrder = validatedData.sortOrder;

        if (finalSortOrder === 0) {
            const maxOrderProduct = await prisma.product.findFirst({
                where: { categoryId: validatedData.categoryId },
                orderBy: { sortOrder: "desc" },
                select: { sortOrder: true },
            });
            finalSortOrder = maxOrderProduct ? maxOrderProduct.sortOrder + 1 : 1;
        }

        await prisma.product.update({
            where: { id },
            data: {
                ...validatedData,
                slug,
                sortOrder: finalSortOrder,
            },
        });

        revalidatePath("/admin/produits");
        revalidatePath("/menu");
        revalidatePath("/");

        return { success: true };
    } catch (error) {
        console.error("Failed to update product:", error);
        return { success: false, error: "Impossible de mettre à jour le produit." };
    }
}

/**
 * Delete a product
 */
export async function deleteProductAction(id: string): Promise<ActionResponse> {
    await requireAdmin();

    try {
        await prisma.product.delete({
            where: { id },
        });

        revalidatePath("/admin/produits");
        revalidatePath("/menu");
        revalidatePath("/");

        return { success: true };
    } catch (error) {
        console.error("Failed to delete product:", error);
        // Return a clear user-facing error message
        return {
            success: false,
            error: "La suppression a échoué. Veuillez réessayer ou contacter le support."
        };
    }
}
