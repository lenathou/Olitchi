import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Connexion Admin",
};

/**
 * Login layout: redirects already-authenticated admins to /admin.
 */
export default async function AdminLoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();

    if (user && user.role === "ADMIN") {
        redirect("/admin");
    }

    return <>{children}</>;
}
