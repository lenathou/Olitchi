import { requireAdmin } from "@/lib/auth/permissions";
import { logoutAction } from "../login/actions";
import Link from "next/link";

export default async function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await requireAdmin();

    return (
        <div className="min-h-screen bg-[#faf8f5]">
            {/* Sidebar — desktop */}
            <aside className="fixed top-0 left-0 h-full w-64 border-r border-border/40 bg-white/80 backdrop-blur-sm hidden lg:flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-border/30">
                    <h1 className="text-xl font-serif font-bold text-foreground tracking-tight">
                        O&apos;Litchi
                    </h1>
                    <p className="text-xs text-muted-foreground mt-1">Administration</p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-1">
                        <li>
                            <span className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                Dashboard
                            </span>
                        </li>
                        <li>
                            <Link href="/admin/produits">
                                <span className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    <span className="w-2 h-2 rounded-full border border-current" />
                                    Produits
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/categories">
                                <span className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    <span className="w-2 h-2 rounded-full border border-current" />
                                    Catégories
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Footer sidebar — user info + logout */}
                <div className="p-4 border-t border-border/30 space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                            {user.email.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{user.email}</p>
                            <p className="text-[10px] text-muted-foreground">Admin</p>
                        </div>
                    </div>
                    <form action={logoutAction}>
                        <button
                            type="submit"
                            className="w-full text-left px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                            Se déconnecter
                        </button>
                    </form>
                </div>
            </aside>

            {/* Mobile header */}
            <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-border/40 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
                <div>
                    <h1 className="text-lg font-serif font-bold text-foreground">O&apos;Litchi</h1>
                    <p className="text-[10px] text-muted-foreground -mt-0.5">Admin</p>
                </div>
                <form action={logoutAction}>
                    <button
                        type="submit"
                        className="text-sm text-muted-foreground hover:text-red-600 transition-colors"
                    >
                        Déconnexion
                    </button>
                </form>
            </div>

            {/* Main content */}
            <main className="lg:ml-64 min-h-screen">
                <div className="p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
