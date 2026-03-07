import { redirect } from "next/navigation";
import { getCurrentUser } from "./session";

/**
 * Require the current user to be an authenticated ADMIN.
 * If not → redirects to /admin/login.
 * Returns the user if the check passes.
 */
export async function requireAdmin() {
    const user = await getCurrentUser();

    if (!user || user.role !== "ADMIN") {
        redirect("/admin/login");
    }

    return user;
}
