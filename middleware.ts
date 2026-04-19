
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({
        req,
        secret: process.env.AUTH_SECRET,
        secureCookie: process.env.NODE_ENV === "production"
    });

    const pathname = req.nextUrl.pathname;
    const isLoggedIn = !!token;

    const isAdminRoute = pathname.startsWith("/dhaka-staff-portal");
    if (isAdminRoute) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        if (token.role !== "admin" && token.role !== "moderator") {
            return NextResponse.redirect(new URL("/404-not-found", req.url));
        }
    }


    if (isLoggedIn) {
        if (pathname === "/login") {
            if (token.role === "admin" || token.role === "moderator") {
                return NextResponse.redirect(new URL("/dhaka-staff-portal", req.url));
            } else {
                return NextResponse.redirect(new URL("/", req.url));
            }
        }

        if (pathname === "/register") {
            if (token.role !== "admin") {
                return NextResponse.redirect(new URL("/", req.url));
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};