"use client";

import { useState } from "react";
import { deleteProductAction } from "@/lib/server/admin/products";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export function DeleteProductButton({ id, name }: { id: string; name: string }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);

    async function handleDelete() {
        setIsPending(true);
        try {
            const response = await deleteProductAction(id);

            if (response.success) {
                toast.success(`Produit "${name}" supprimé.`);
                setIsOpen(false);
                router.refresh();
            } else {
                toast.error(response.error || "La suppression a échoué.");
            }
        } catch (e) {
            toast.error("Une erreur inattendue est survenue.");
        } finally {
            setIsPending(false);
        }
    }

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
                    <DialogTitle>Supprimer le produit ?</DialogTitle>
                    <DialogDescription>
                        Êtes-vous sûr de vouloir supprimer le produit <strong>"{name}"</strong> ?
                        Cette action est irréversible et retirera le produit du menu public.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4">
                    <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isPending}>
                        Annuler
                    </Button>
                    <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
                        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Supprimer
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
