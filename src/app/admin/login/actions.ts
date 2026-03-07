"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth/password";
import { createSession, deleteSession, getCurrentUser } from "@/lib/auth/session";

export type LoginState = {
    error?: string;
};

/**
 * Server Action: authenticate admin user.
 * Validates email/password, checks role ADMIN + isActive, creates session.
 */
export async function loginAction(
    _prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;

    // Input validation
    if (!email || !email.trim()) {
        return { error: "L'adresse email est requise." };
    }

    if (!password || !password.trim()) {
        return { error: "Le mot de passe est requis." };
    }

    // Find user by email
    const user = await prisma.user.findUnique({
        where: { email: email.trim().toLowerCase() },
    });

    // Generic error to avoid user enumeration
    if (!user) {
        return { error: "Email ou mot de passe incorrect." };
    }

    // Verify password
    const validPassword = await verifyPassword(password, user.passwordHash);
    if (!validPassword) {
        return { error: "Email ou mot de passe incorrect." };
    }

    // Check role
    if (user.role !== "ADMIN") {
        return { error: "Accès réservé aux administrateurs." };
    }

    // Check active
    if (!user.isActive) {
        return { error: "Ce compte a été désactivé." };
    }

    // Create session + cookie
    await createSession(user.id);

    redirect("/admin");
}

/**
 * Server Action: logout — destroy session and redirect to login.
 */
export async function logoutAction(): Promise<void> {
    await deleteSession();
    redirect("/admin/login");
}
