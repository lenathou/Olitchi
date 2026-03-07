import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Page header */}
            <div>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                    Dashboard
                </h2>
                <p className="text-muted-foreground mt-1">
                    Vue d&apos;ensemble de votre activité
                </p>
            </div>

            {/* Stats grid — placeholder */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: "Produits", value: "22", detail: "5 catégories" },
                    { label: "Catégories", value: "5", detail: "Actives" },
                    { label: "Visites (7j)", value: "—", detail: "Phase 3" },
                    { label: "Commandes", value: "—", detail: "Phase 3" },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className="rounded-xl border border-border/40 bg-white/60 p-5"
                    >
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-3xl font-bold font-serif text-foreground mt-1">
                            {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.detail}</p>
                    </div>
                ))}
            </div>

            {/* Quick actions — placeholder */}
            <div className="rounded-xl border border-border/40 bg-white/60 p-6">
                <h3 className="text-lg font-serif font-bold text-foreground mb-4">
                    Actions rapides
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex items-center gap-3 rounded-lg border border-dashed border-border/50 p-4 text-muted-foreground">
                        <span className="text-2xl">📦</span>
                        <div>
                            <p className="font-medium text-sm">Gérer les produits</p>
                            <p className="text-xs opacity-70">Disponible en Phase 2</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-dashed border-border/50 p-4 text-muted-foreground">
                        <span className="text-2xl">🏷️</span>
                        <div>
                            <p className="font-medium text-sm">Gérer les catégories</p>
                            <p className="text-xs opacity-70">Disponible en Phase 2</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-dashed border-border/50 p-4 text-muted-foreground">
                        <span className="text-2xl">📊</span>
                        <div>
                            <p className="font-medium text-sm">Voir les statistiques</p>
                            <p className="text-xs opacity-70">Disponible en Phase 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
