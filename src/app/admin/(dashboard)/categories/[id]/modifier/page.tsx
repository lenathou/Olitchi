import { getAdminCategoryById } from "@/lib/server/admin/categories";
import { CategoryForm } from "@/components/admin/CategoryForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Modifier une catégorie | Admin O'Litchi",
};

export default async function EditCategoryPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const category = await getAdminCategoryById(id);

    if (!category) {
        notFound();
    }

    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/categories">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Retour</span>
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Modifier : {category.name}</h1>
                    <p className="text-muted-foreground mt-1">
                        Modifiez les informations de cette catégorie.
                    </p>
                </div>
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-sm">
                <CategoryForm initialData={category} />
            </div>
        </div>
    );
}
