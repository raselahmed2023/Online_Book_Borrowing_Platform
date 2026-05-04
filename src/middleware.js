import { NextResponse } from "next/server";

export function middleware(request) {
  const session = request.cookies.get("better-auth.session_token");
  if (!session) {
    return NextResponse.redirect(new URL("/Signin", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/MyProfile"],
};