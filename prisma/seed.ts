import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

// ─── Admin seed configuration ────────────────────
// Change these values or use environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@olitchi91.fr";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123!";

const categories = [
    { slug: "bokits", name: "Bokits", emoji: "🥪", sortOrder: 1 },
    { slug: "grillades", name: "Grillades", emoji: "🔥", sortOrder: 2 },
    { slug: "autres", name: "Autres", emoji: "🍽️", sortOrder: 3 },
    { slug: "petites-faims", name: "Petites Faims", emoji: "🍟", sortOrder: 4 },
    { slug: "boissons", name: "Boissons", emoji: "🥤", sortOrder: 5 },
];

const products: Record<string, Array<{
    slug: string;
    name: string;
    description: string;
    price: number;
    imagePath: string;
    sortOrder: number;
}>> = {
    bokits: [
        { slug: "bokit-jf", name: "Bokit Jambon-Fromage", description: "", price: 8, imagePath: "/images/produits/bokit-jambon-fromage1.webp", sortOrder: 1 },
        { slug: "bokit-poulet", name: "Bokit Poulet Boukané", description: "Sauce Chien", price: 8, imagePath: "/images/produits/bokit-poulet1.webp", sortOrder: 2 },
        { slug: "bokit-morue", name: "Bokit Morue", description: "Sauce Chien", price: 9, imagePath: "/images/produits/bokit-morue1.webp", sortOrder: 3 },
        { slug: "bokit-complet", name: "Bokit Complet", description: "Jambon ou Poulet, œuf, emmental, sauce chien", price: 9.5, imagePath: "/images/bokit-hero1.webp", sortOrder: 4 },
    ],
    grillades: [
        { slug: "grillade-cuisse", name: "Cuisse de poulet", description: "Crudités Choux, Carottes", price: 5, imagePath: "/images/produits/cuisse-poulet.webp", sortOrder: 1 },
        { slug: "grillade-ailes", name: "Ailes de poulet", description: "Crudités Choux, Carottes", price: 5, imagePath: "/images/produits/cuisse-poulet.webp", sortOrder: 2 },
        { slug: "brochette-poulet", name: "Brochette de Poulet", description: "", price: 2, imagePath: "/images/produits/brochette-poulet.webp", sortOrder: 3 },
        { slug: "brochette-boeuf", name: "Brochette de Bœuf", description: "", price: 3, imagePath: "/images/produits/brochette-boeuf.webp", sortOrder: 4 },
    ],
    autres: [
        { slug: "atieke-poisson", name: "Atiéké-Poisson", description: "Semoule de Manioc", price: 8, imagePath: "/images/produits/atieke.webp", sortOrder: 1 },
    ],
    "petites-faims": [
        { slug: "alloco", name: "Alloco", description: "Bananes-Plantins frits", price: 3, imagePath: "/images/produits/petites-faims/barquette-alloco-test.webp", sortOrder: 1 },
        { slug: "barquette-riz", name: "Barquette de Riz", description: "", price: 6, imagePath: "/images/produits/petites-faims/barquette-riz-test.webp", sortOrder: 2 },
        { slug: "igname-frites", name: "Frites d'Ignames", description: "", price: 3, imagePath: "/images/produits/petites-faims/frites-ignames-test.webp", sortOrder: 3 },
        { slug: "chips-bananes", name: "Chips de Bananes", description: "", price: 1.5, imagePath: "/images/produits/petites-faims/chips-bananes.jpg", sortOrder: 4 },
        { slug: "beignets-5", name: "5 Beignets", description: "", price: 2, imagePath: "/images/produits/petites-faims/beignets-5.jpg", sortOrder: 5 },
        { slug: "accras-5", name: "Accras de Morue (5)", description: "", price: 3, imagePath: "/images/produits/petites-faims/accras-morue-test.webp", sortOrder: 6 },
        { slug: "pastel-thon", name: "Pastel de Thon", description: "", price: 5, imagePath: "/images/produits/petites-faims/pastel-thon-test.webp", sortOrder: 7 },
        { slug: "pastel-poulet", name: "Pastel de Poulet", description: "", price: 5, imagePath: "/images/produits/petites-faims/pastel-poulet-test.webp", sortOrder: 8 },
    ],
    boissons: [
        { slug: "jus-citron", name: "Jus de Citron", description: "", price: 2, imagePath: "/images/produits/boissons/jus-citron-test.webp", sortOrder: 1 },
        { slug: "jus-bissap", name: "Jus Bissap", description: "", price: 2, imagePath: "/images/produits/boissons/bissap-test.webp", sortOrder: 2 },
        { slug: "jus-gingembre", name: "Jus de Gingembre", description: "", price: 2, imagePath: "/images/produits/boissons/jus-gingembre-test.webp", sortOrder: 3 },
        { slug: "canettes", name: "Canettes", description: "", price: 1.5, imagePath: "/images/produits/boissons/canettes.webp", sortOrder: 4 },
        { slug: "eau-bouteille", name: "Bouteille d'eau", description: "", price: 1, imagePath: "/images/produits/boissons/cristaline.webp", sortOrder: 5 },
    ],
};

async function main() {
    console.log("🌱 Seeding database...\n");

    // ─── Categories & Products ───────────────────────
    for (const cat of categories) {
        const category = await prisma.category.upsert({
            where: { slug: cat.slug },
            update: { name: cat.name, emoji: cat.emoji, sortOrder: cat.sortOrder },
            create: cat,
        });

        const categoryProducts = products[cat.slug] || [];
        for (const product of categoryProducts) {
            await prisma.product.upsert({
                where: { slug: product.slug },
                update: {
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    imagePath: product.imagePath,
                    sortOrder: product.sortOrder,
                    categoryId: category.id,
                },
                create: {
                    ...product,
                    categoryId: category.id,
                },
            });
        }

        console.log(`  ✅ ${cat.name}: ${categoryProducts.length} produits`);
    }

    // ─── Admin User ──────────────────────────────────
    const passwordHash = await hash(ADMIN_PASSWORD, 12);

    await prisma.user.upsert({
        where: { email: ADMIN_EMAIL },
        update: {
            passwordHash,
            role: "ADMIN",
            isActive: true,
        },
        create: {
            email: ADMIN_EMAIL,
            passwordHash,
            role: "ADMIN",
            isActive: true,
        },
    });

    console.log(`\n  👤 Admin créé: ${ADMIN_EMAIL}`);
    console.log(`  🔑 Mot de passe: ${ADMIN_PASSWORD}`);
    console.log(`     ⚠️  Changez ce mot de passe en production !\n`);

    console.log("🎉 Seed terminé !");
}

main()
    .catch((e) => {
        console.error("❌ Erreur seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
