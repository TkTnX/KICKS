import { jwtDecode } from "jwt-decode"
import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
	const token = request.cookies.get("refreshToken")?.value

	if (!token && request.nextUrl.pathname.startsWith("/profile")) {
		return NextResponse.redirect(new URL("/login", request.url))
	}

	try {
		if (request.nextUrl.pathname.startsWith("/dashboard") && token) {
			const decoded = jwtDecode(token) as { role: string }

			if (decoded.role !== "ADMIN") {
				return NextResponse.redirect(new URL("/", request.url))
			}
		}
	} catch (error) {
		console.error("Invalid token", error)
		return NextResponse.redirect(new URL("/login", request.url))
	}

	if (
		token &&
		(request.nextUrl.pathname.startsWith("/login") ||
			request.nextUrl.pathname.startsWith("/register"))
	) {
		return NextResponse.redirect(new URL("/", request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		"/login",
		"/register",
		"/profile",
		"/dashboard/:path*",
		"/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
	]
}
