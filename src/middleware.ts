import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE_NAME = "admin_session";

/**
 * Lightweight middleware: checks for presence of session cookie on /admin routes.
 * Only filters /admin/* (excluding /admin/login).
 * The real auth verification happens server-side in the dashboard layout via requireAdmin().
 */
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only apply to /admin routes, excluding /admin/login
    if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
        const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME);

        if (!sessionCookie?.value) {
            const loginUrl = new URL("/admin/login", request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
