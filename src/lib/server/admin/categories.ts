"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/permissions";
import { revalidatePath } from "next/cache";

// Slugification logic identical to products
function slugify(text: string): string {
    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
}

async function generateUniqueSlug(baseSlug: string, excludeId?: string): Promise<string> {
    let slug = baseSlug;
    let counter = 1;
    let isUnique = false;

    while (!isUnique) {
        const existingCategory = await prisma.category.findUnique({
            where: { slug },
            select: { id: true },
        });

        if (!existingCategory || (excludeId && existingCategory.id === excludeId)) {
            isUnique = true;
        } else {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
    }

    return slug;
}

export async function getAdminCategories() {
    await requireAdmin();
    // Fetch categories with product count for the admin list
    return await prisma.category.findMany({
        orderBy: {
            sortOrder: "asc",
        },
        include: {
            _count: {
                select: { products: true }
            }
        }
    });
}

export async function getAdminCategoryById(id: string) {
    await requireAdmin();
    return await prisma.category.findUnique({
        where: { id },
    });
}

export async function createCategoryAction(data: {
    name: string;
    emoji: string;
    sortOrder: number;
}) {
    await requireAdmin();

    const baseSlug = slugify(data.name);
    const slug = await generateUniqueSlug(baseSlug);

    let finalSortOrder = data.sortOrder;

    if (finalSortOrder === 0) {
        const maxSortOrderCategory = await prisma.category.findFirst({
            orderBy: { sortOrder: "desc" },
            select: { sortOrder: true },
        });
        finalSortOrder = maxSortOrderCategory ? maxSortOrderCategory.sortOrder + 10 : 0;
    }

    await prisma.category.create({
        data: {
            ...data,
            slug,
            sortOrder: finalSortOrder,
        },
    });

    revalidatePath("/admin/categories");
    revalidatePath("/menu");
}

export async function updateCategoryAction(
    id: string,
    data: { name: string; emoji: string; sortOrder: number }
) {
    await requireAdmin();

    const existingCategory = await prisma.category.findUnique({
        where: { id },
    });

    if (!existingCategory) {
        throw new Error("Catégorie introuvable");
    }

    let slug = existingCategory.slug;
    if (existingCategory.name !== data.name) {
        const baseSlug = slugify(data.name);
        slug = await generateUniqueSlug(baseSlug, id);
    }

    await prisma.category.update({
        where: { id },
        data: {
            ...data,
            slug,
        },
    });

    revalidatePath("/admin/categories");
    revalidatePath("/menu");
}

export async function deleteCategoryAction(id: string) {
    await requireAdmin();

    // Secondary Application-level Guard
    const category = await prisma.category.findUnique({
        where: { id },
        include: {
            _count: {
                select: { products: true }
            }
        }
    });

    if (!category) {
        return { success: false, error: "Catégorie introuvable." };
    }

    if (category._count.products > 0) {
        return { success: false, error: `Impossible de supprimer. Cette catégorie contient encore ${category._count.products} produit(s).` };
    }

    try {
        await prisma.category.delete({
            where: { id },
        });
        revalidatePath("/admin/categories");
        revalidatePath("/menu");
        return { success: true };
    } catch (error) {
        console.error("Error deleting category:", error);
        return { success: false, error: "Erreur lors de la suppression de la catégorie." };
    }
}
