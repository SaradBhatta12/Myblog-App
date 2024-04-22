import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login";
  let token = request.cookies.get("token")?.value || "";

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/postcreateion", request.url));
  }
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  //protected routes
  matcher: ["/postcreateion", "/profile"],
};
