import { prisma } from "./prisma";

export interface ProductItem {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    imagePath: string;
    sortOrder: number;
    isAvailable: boolean;
}

export interface CategoryWithProducts {
    id: string;
    name: string;
    slug: string;
    emoji: string;
    sortOrder: number;
    products: ProductItem[];
}

/**
 * Retourne toutes les catégories avec leurs produits disponibles,
 * triées par sortOrder.
 */
export async function getAllCategoriesWithProducts(): Promise<CategoryWithProducts[]> {
    const categories = await prisma.category.findMany({
        orderBy: { sortOrder: "asc" },
        include: {
            products: {
                where: { isAvailable: true },
                orderBy: { sortOrder: "asc" },
            },
        },
    });

    return categories;
}

/**
 * Retourne les données du menu structurées par slug de catégorie,
 * compatible avec la structure attendue par ModernMenuSection.
 */
export async function getMenuData(): Promise<Record<string, ProductItem[]>> {
    const categories = await getAllCategoriesWithProducts();
    const menuData: Record<string, ProductItem[]> = {};

    for (const cat of categories) {
        menuData[cat.slug] = cat.products;
    }

    return menuData;
}

/**
 * Retourne les plats populaires pour la homepage.
 * Sélectionne des produits spécifiques par slug.
 */
export async function getPopularProducts(): Promise<ProductItem[]> {
    const popularSlugs = [
        "bokit-poulet",
        "bokit-complet",
        "grillade-cuisse",
        "atieke-poisson",
    ];

    const products = await prisma.product.findMany({
        where: {
            slug: { in: popularSlugs },
            isAvailable: true,
        },
        orderBy: { sortOrder: "asc" },
    });

    return products;
}

/**
 * Retourne les catégories (sans produits) pour les onglets du menu.
 */
export async function getCategories() {
    return prisma.category.findMany({
        orderBy: { sortOrder: "asc" },
        select: {
            id: true,
            slug: true,
            name: true,
            emoji: true,
            sortOrder: true,
        },
    });
}
