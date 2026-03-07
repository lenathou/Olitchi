"use client";

import { useActionState } from "react";
import { loginAction, LoginState } from "./actions";

const initialState: LoginState = {};

export default function AdminLoginPage() {
    const [state, formAction, isPending] = useActionState(loginAction, initialState);

    return (
        <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-4">
            <div className="w-full max-w-sm space-y-6">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-2xl font-serif font-bold text-foreground">
                        O&apos;Litchi Admin
                    </h1>
                    <p className="text-sm text-muted-foreground mt-2">
                        Connectez-vous pour accéder à l&apos;espace d&apos;administration
                    </p>
                </div>

                {/* Login form */}
                <form
                    action={formAction}
                    className="rounded-xl border border-border/40 bg-white/60 p-6 space-y-4"
                >
                    {/* Error message */}
                    {state.error && (
                        <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
                            {state.error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label
                            htmlFor="admin-email"
                            className="text-sm font-medium text-foreground"
                        >
                            Email
                        </label>
                        <input
                            id="admin-email"
                            name="email"
                            type="email"
                            placeholder="admin@olitchi91.fr"
                            required
                            autoComplete="email"
                            className="w-full rounded-lg border border-border/50 bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="admin-password"
                            className="text-sm font-medium text-foreground"
                        >
                            Mot de passe
                        </label>
                        <input
                            id="admin-password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            autoComplete="current-password"
                            className="w-full rounded-lg border border-border/50 bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-medium transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? "Connexion en cours..." : "Se connecter"}
                    </button>
                </form>
            </div>
        </div>
    );
}
