"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryFormValues, categorySchema } from "@/lib/validations/category";
import { createCategoryAction, updateCategoryAction } from "@/lib/server/admin/categories";
import { Button } from "@/components/ui/button";
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
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface CategoryFormProps {
    initialData?: {
        id: string;
        name: string;
        emoji?: string;
        sortOrder: number;
    } | null;
}

export function CategoryForm({ initialData }: CategoryFormProps) {
    const router = useRouter();
    const [isSubmitPending, setIsSubmitPending] = useState(false);

    const form = useForm<CategoryFormValues>({
        resolver: zodResolver(categorySchema) as any,
        defaultValues: initialData || {
            name: "",
            emoji: "",
            sortOrder: 0,
        },
    });

    const onSubmit = async (data: CategoryFormValues) => {
        setIsSubmitPending(true);
        try {
            let result;
            if (initialData) {
                result = await updateCategoryAction(initialData.id, {
                    name: data.name,
                    emoji: data.emoji || "",
                    sortOrder: data.sortOrder,
                });
            } else {
                result = await createCategoryAction({
                    name: data.name,
                    emoji: data.emoji || "",
                    sortOrder: data.sortOrder,
                });
            }

            if (result.success) {
                toast.success(initialData ? "Catégorie modifiée avec succès" : "Catégorie créée avec succès");
                router.push("/admin/categories");
            } else {
                toast.error(result.error || "Erreur lors de l'enregistrement");
            }

        } catch (error) {
            console.error(error);
            toast.error("Erreur inattendue");
        } finally {
            setIsSubmitPending(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
                <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="md:col-span-2">
                                <FormLabel>Nom de la catégorie</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ex: Burgers, Boissons..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="emoji"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Emoji (Optionnel)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ex: 🍔" {...field} />
                                </FormControl>
                                <FormDescription>Un emoji pour illustrer le menu.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="sortOrder"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ordre d'affichage</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormDescription>
                                    0 = placement auto à la fin.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.push("/admin/categories")}
                        disabled={isSubmitPending}
                    >
                        Annuler
                    </Button>
                    <Button type="submit" disabled={isSubmitPending}>
                        {isSubmitPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {initialData ? "Modifier la catégorie" : "Créer la catégorie"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
