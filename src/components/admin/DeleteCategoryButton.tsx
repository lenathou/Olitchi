"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCategoryAction } from "@/lib/server/admin/categories";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface DeleteCategoryButtonProps {
    id: string;
    name: string;
    productCount: number;
}

export function DeleteCategoryButton({ id, name, productCount }: DeleteCategoryButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const isDeletable = productCount === 0;

    const handleDelete = async () => {
        setIsPending(true);
        try {
            const result = await deleteCategoryAction(id);
            if (result.success) {
                toast.success(`Catégorie "${name}" supprimée`);
                setIsOpen(false);
            } else {
                // Displays the application-level security rejection message
                toast.error(result.error || "Erreur lors de la suppression");
            }
        } catch (error) {
            console.error(error);
            toast.error("Erreur inattendue");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10">
                    <span className="sr-only">Supprimer</span>
                    <Trash2 className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Supprimer la catégorie ?</DialogTitle>
                    <DialogDescription>
                        Êtes-vous sûr de vouloir supprimer la catégorie <strong>"{name}"</strong> ?
                    </DialogDescription>
                </DialogHeader>

                {!isDeletable && (
                    <div className="bg-destructive/10 text-destructive p-3 rounded-md text-sm font-medium border border-destructive/20 mt-2">
                        Attention : Cette catégorie contient {productCount} produit(s). Vous devez déplacer ou supprimer ces produits avant de pouvoir supprimer cette catégorie.
                    </div>
                )}

                <DialogFooter className="mt-4">
                    <Button
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                        disabled={isPending}
                    >
                        Annuler
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={isPending || !isDeletable}
                    >
                        {isPending ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Trash2 className="mr-2 h-4 w-4" />
                        )}
                        Supprimer
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
