import { Metadata } from "next";
import { getAdminCategories } from "@/lib/server/admin/categories";
import { getAdminProductById } from "@/lib/server/admin/products";
import { ProductForm } from "@/components/admin/ProductForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Modifier un Produit",
};

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function AdminEditProductPage({ params }: PageProps) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const [categories, product] = await Promise.all([
        getAdminCategories(),
        getAdminProductById(id),
    ]);

    if (!product) {
        notFound();
    }

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
                        Modifier : {product.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        Mettez à jour les informations de ce produit.
                    </p>
                </div>
            </div>

            <div className="rounded-xl border border-border/40 bg-white shadow-sm overflow-hidden p-6">
                <ProductForm categories={categories} initialData={product} />
            </div>
        </div>
    );
}
