import { NextRequest, NextResponse } from "next/server";

// Gates /admin/* behind HTTP Basic Auth. Requires ADMIN_USER and
// ADMIN_PASSWORD env vars — access is denied if either is unset, so a
// missing config fails closed rather than leaving the route open.
export function middleware(request: NextRequest) {
  const adminUser = process.env.ADMIN_USER;
  const adminPassword = process.env.ADMIN_PASSWORD;

  const unauthorized = () =>
    new NextResponse("Authentication required.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
    });

  if (!adminUser || !adminPassword) return unauthorized();

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return unauthorized();

  const decoded = atob(authHeader.slice(6));
  const separatorIndex = decoded.indexOf(":");
  const user = decoded.slice(0, separatorIndex);
  const password = decoded.slice(separatorIndex + 1);

  if (user !== adminUser || password !== adminPassword) return unauthorized();

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
