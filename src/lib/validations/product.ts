import * as z from "zod";

export const productSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    categoryId: z.string().min(1, "Veuillez sélectionner une catégorie"),
    price: z.preprocess(
        (val) => {
            if (typeof val === "string") {
                const parsed = parseFloat(val.replace(",", "."));
                return isNaN(parsed) ? 0 : parsed;
            }
            return Number(val) || 0;
        },
        z.number().min(0, "Le prix ne peut pas être négatif")
    ),
    description: z.string().optional().default(""),
    imagePath: z.string().optional().default(""),
    isAvailable: z.boolean().default(true),
    sortOrder: z.preprocess(
        (val) => {
            if (typeof val === "string") {
                const parsed = parseInt(val, 10);
                return isNaN(parsed) ? 0 : parsed;
            }
            return Number(val) || 0;
        },
        z.number().int()
    ).default(0),
});

export type ProductFormValues = z.infer<typeof productSchema>;
