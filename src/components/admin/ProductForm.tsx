"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { productSchema, ProductFormValues } from "@/lib/validations/product";
import { createProductAction, updateProductAction } from "@/lib/server/admin/products";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

interface Category {
    id: string;
    name: string;
}

interface ProductFormProps {
    categories: Category[];
    initialData?: ProductFormValues & { id?: string };
}

export function ProductForm({ categories, initialData: product }: ProductFormProps) {
    const router = useRouter();
    const [isSubmitPending, setIsSubmitPending] = useState(false);

    const form = useForm<z.input<typeof productSchema>, any, z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: product?.name || "",
            categoryId: product?.categoryId || "",
            price: product?.price || 0,
            description: product?.description || "",
            imagePath: product?.imagePath || "",
            isAvailable: product ? product.isAvailable : true,
            sortOrder: product?.sortOrder || 0,
        },
    });

    async function onSubmit(data: ProductFormValues) {
        setIsSubmitPending(true);

        try {
            const response = product?.id
                ? await updateProductAction(product.id, data)
                : await createProductAction(data);

            if (response.success) {
                toast.success(
                    product?.id
                        ? "Produit mis à jour avec succès"
                        : "Produit créé avec succès"
                );
                router.push("/admin/produits");
                router.refresh(); // Ensure the list reflects new changes
            } else {
                toast.error(response.error || "Une erreur est survenue");
            }
        } catch (error) {
            toast.error("Une erreur inattendue est survenue");
        } finally {
            setIsSubmitPending(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
                <div className="grid gap-6 md:grid-cols-2">
                    {/* NOM */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="col-span-2 md:col-span-1">
                                <FormLabel>Nom du produit</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ex: Bokit Poulet" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* CATEGORIE */}
                    <FormField
                        control={form.control}
                        name="categoryId"
                        render={({ field }) => (
                            <FormItem className="col-span-2 md:col-span-1">
                                <FormLabel>Catégorie</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    value={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Sélectionnez une catégorie" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {categories.map((cat) => (
                                            <SelectItem key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* PRIX */}
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem className="col-span-2 md:col-span-1">
                                <FormLabel>Prix (€)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        placeholder="0.00"
                                        {...field}
                                        value={field.value as number}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* ORDRE D'AFFICHAGE */}
                    <FormField
                        control={form.control}
                        name="sortOrder"
                        render={({ field }) => (
                            <FormItem className="col-span-2 md:col-span-1">
                                <FormLabel>Ordre d&apos;affichage</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        step="1"
                                        placeholder="0"
                                        {...field}
                                        value={field.value as number}
                                        onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormDescription>
                                    0 = placement auto à la fin de la catégorie.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* DESCRIPTION */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel>Description (optionnelle)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Ex: Sauce chien, emmental..."
                                        className="resize-y"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* IMAGE PATH */}
                    <FormField
                        control={form.control}
                        name="imagePath"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel>Chemin de l&apos;image (optionnel)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ex: /images/produits/bokit-poulet.webp"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Chemin absolu depuis le dossier public à ce stade.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* DISPONIBILITE */}
                    <FormField
                        control={form.control}
                        name="isAvailable"
                        render={({ field }) => (
                            <FormItem className="col-span-2 flex flex-row items-center justify-between rounded-lg border border-border/40 p-4 bg-white/40">
                                <div className="space-y-0.5">
                                    <FormLabel className="text-base text-foreground">
                                        Produit disponible
                                    </FormLabel>
                                    <FormDescription>
                                        S&apos;il est décoché, le produit n&apos;apparaîtra pas sur le menu public.
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitPending}>
                        Annuler
                    </Button>
                    <Button type="submit" disabled={isSubmitPending}>
                        {isSubmitPending ? "Enregistrement..." : product?.id ? "Mettre à jour" : "Créer le produit"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
