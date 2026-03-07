import { Metadata } from "next";
import { getAdminProducts } from "@/lib/server/admin/products";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit } from "lucide-react";
import { DeleteProductButton } from "@/components/admin/DeleteProductButton";

export const metadata: Metadata = {
    title: "Produits",
};

export default async function AdminProductsPage() {
    const products = await getAdminProducts();

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">
                        Produits
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        Gérez les produits affichés sur votre menu public.
                    </p>
                </div>
                <Button asChild className="w-full sm:w-auto">
                    <Link href="/admin/produits/nouveau">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Ajouter un produit
                    </Link>
                </Button>
            </div>

            {/* Products Table */}
            <div className="rounded-xl border border-border/40 bg-white shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border/40">
                            <tr>
                                <th className="px-6 py-4">Nom du produit</th>
                                <th className="px-6 py-4">Catégorie</th>
                                <th className="px-6 py-4">Prix</th>
                                <th className="px-6 py-4">Ordre</th>
                                <th className="px-6 py-4 text-center">Statut</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40">
                            {products.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center">
                                        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                                            <p className="text-base font-medium">Aucun produit trouvé.</p>
                                            <p className="text-sm mb-2">Commencez par ajouter votre premier produit au catalogue.</p>
                                            <Button asChild variant="outline" size="sm">
                                                <Link href="/admin/produits/nouveau">
                                                    Créer le premier produit
                                                </Link>
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                products.map((product: any) => (
                                    <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4 font-medium text-foreground">
                                            {product.name}
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground">
                                            {product.category.emoji} {product.category.name}
                                        </td>
                                        <td className="px-6 py-4 text-foreground">
                                            {product.price.toFixed(2)} €
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground">
                                            {product.sortOrder}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span
                                                className={`inline-flex items-center px-2 py-1 space-x-1.5 rounded-full text-xs font-medium ${product.isAvailable
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-amber-100 text-amber-800"
                                                    }`}
                                            >
                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full ${product.isAvailable ? "bg-green-600" : "bg-amber-600"
                                                        }`}
                                                ></span>
                                                <span>{product.isAvailable ? "En ligne" : "Masqué"}</span>
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 flex items-center justify-end gap-2">
                                            <Link href={`/admin/produits/${product.id}/modifier`}>
                                                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteProductButton id={product.id} name={product.name} />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
