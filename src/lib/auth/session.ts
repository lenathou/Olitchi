import { cookies } from "next/headers";
import { randomBytes, createHash } from "crypto";
import { prisma } from "@/lib/prisma";
import { SESSION_COOKIE_NAME } from "./constants";

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Hash a raw session token using SHA-256.
 * Only the hash is stored in the database; the raw token lives in the cookie.
 */
function hashToken(token: string): string {
    return createHash("sha256").update(token).digest("hex");
}

/**
 * Create a new session for a user.
 * - Generates a cryptographically secure random token
 * - Stores the SHA-256 hash in database
 * - Sets an httpOnly, secure cookie with the raw token
 */
export async function createSession(userId: string): Promise<void> {
    const rawToken = randomBytes(32).toString("hex");
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

    await prisma.session.create({
        data: {
            tokenHash,
            userId,
            expiresAt,
        },
    });

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, rawToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        expires: expiresAt,
    });
}

/**
 * Get the current session from the cookie.
 * Returns the session with its user, or null if invalid/expired.
 */
export async function getCurrentSession() {
    const cookieStore = await cookies();
    const rawToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (!rawToken) return null;

    const tokenHash = hashToken(rawToken);

    const session = await prisma.session.findUnique({
        where: { tokenHash },
        include: {
            user: {
                select: {
                    id: true,
                    email: true,
                    role: true,
                    isActive: true,
                },
            },
        },
    });

    if (!session) return null;

    // Check expiration
    if (session.expiresAt < new Date()) {
        await prisma.session.delete({ where: { id: session.id } });
        return null;
    }

    // Check user is still active
    if (!session.user.isActive) {
        await prisma.session.delete({ where: { id: session.id } });
        return null;
    }

    return session;
}

/**
 * Get the current authenticated user, or null.
 */
export async function getCurrentUser() {
    const session = await getCurrentSession();
    return session?.user ?? null;
}

/**
 * Delete the current session (logout).
 * Removes the session from DB and clears the cookie.
 */
export async function deleteSession(): Promise<void> {
    const cookieStore = await cookies();
    const rawToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (rawToken) {
        const tokenHash = hashToken(rawToken);
        await prisma.session.deleteMany({ where: { tokenHash } });
    }

    cookieStore.delete(SESSION_COOKIE_NAME);
}
