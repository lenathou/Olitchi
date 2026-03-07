import { CategoryForm } from "@/components/admin/CategoryForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Nouvelle catégorie | Admin O'Litchi",
};

export default function NewCategoryPage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Nouvelle Catégorie</h1>
                    <p className="text-muted-foreground mt-1">
                        Créez une nouvelle catégorie pour organiser votre menu.
                    </p>
                </div>
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-sm">
                <CategoryForm />
            </div>
        </div>
    );
}
