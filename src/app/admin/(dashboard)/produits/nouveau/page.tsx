import { Metadata } from "next";
import { getAdminCategories } from "@/lib/server/admin/categories";
import { ProductForm } from "@/components/admin/ProductForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Nouveau Produit",
};

export default async function AdminNewProductPage() {
    const categories = await getAdminCategories();

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/produits">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Retour</span>
                    </Link>
                </Button>
                <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">
                        Nouveau produit
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        Remplissez les informations ci-dessous pour ajouter un produit.
                    </p>
                </div>
            </div>

            <div className="rounded-xl border border-border/40 bg-white shadow-sm overflow-hidden p-6">
                {categories.length === 0 ? (
                    <div className="text-center py-12 px-4 max-w-md mx-auto">
                        <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl">⚠️</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Aucune catégorie existante</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            Vous devez d'abord créer au moins une catégorie avant de pouvoir ajouter un produit au catalogue.
                        </p>
                        <Button asChild>
                            <Link href="/admin/categories/nouveau">
                                Créer une catégorie
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <ProductForm categories={categories} />
                )}
            </div>
        </div>
    );
}
