import * as z from "zod";

export const categorySchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    emoji: z.string().optional().default(""),
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

export type CategoryFormValues = z.infer<typeof categorySchema>;
