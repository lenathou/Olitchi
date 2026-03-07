import { getAdminCategories } from "@/lib/server/admin/categories";
import { Button } from "@/components/ui/button";
import { Plus, Edit } from "lucide-react";
import Link from "next/link";
import { DeleteCategoryButton } from "@/components/admin/DeleteCategoryButton";

export const metadata = {
    title: "Gestion des catégories | Admin O'Litchi",
};

export default async function AdminCategoriesPage() {
    const categories = await getAdminCategories();

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Catégories</h1>
                    <p className="text-muted-foreground mt-1">
                        Gérez les catégories de votre menu. (Ordre, Emojis, Noms)
                    </p>
                </div>
                <Button asChild>
                    <Link href="/admin/categories/nouveau">
                        <Plus className="mr-2 h-4 w-4" />
                        Nouvelle catégorie
                    </Link>
                </Button>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b">
                            <tr>
                                <th className="px-6 py-4 font-medium">Nom</th>
                                <th className="px-6 py-4 font-medium text-center">Ordre</th>
                                <th className="px-6 py-4 font-medium text-center">Produits liés</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {categories.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center">
                                        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                                            <p className="text-base font-medium">Aucune catégorie trouvée.</p>
                                            <p className="text-sm mb-2">Commencez par structurer votre carte avec une catégorie.</p>
                                            <Button asChild variant="outline" size="sm">
                                                <Link href="/admin/categories/nouveau">
                                                    Créer la première catégorie
                                                </Link>
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                categories.map((category: {
                                    id: string;
                                    name: string;
                                    emoji: string | null;
                                    sortOrder: number;
                                    _count: { products: number };
                                }) => (
                                    <tr key={category.id} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4 font-medium text-foreground flex items-center gap-2">
                                            {category.emoji && <span className="text-xl">{category.emoji}</span>}
                                            {category.name}
                                        </td>
                                        <td className="px-6 py-4 text-center text-muted-foreground">
                                            {category.sortOrder}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full ${category._count.products > 0
                                                ? "bg-primary/10 text-primary"
                                                : "bg-muted text-muted-foreground"
                                                }`}>
                                                {category._count.products}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                                                    <Link href={`/admin/categories/${category.id}/modifier`}>
                                                        <span className="sr-only">Modifier</span>
                                                        <Edit className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <DeleteCategoryButton
                                                    id={category.id}
                                                    name={category.name}
                                                    productCount={category._count.products}
                                                />
                                            </div>
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
