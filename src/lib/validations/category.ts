import * as z from "zod";

export const categorySchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    emoji: z.string().optional().default(""),
    sortOrder: z.coerce.number().int().default(0),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;
