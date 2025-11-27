import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Define allowed domains (including localhost and lvh.me for dev)
  const allowedDomains = ["localhost:3000", "lvh.me:3000", "kinesis.app"];
  
  // Check if the current hostname is a subdomain
  // logic: if hostname is NOT in allowedDomains, it might be a subdomain
  // But for lvh.me, vendorA.lvh.me is the subdomain.
  
  // Simple extraction for lvh.me and production domains
  // e.g. vendorA.lvh.me:3000 -> vendorA
  // e.g. vendorA.kinesis.app -> vendorA
  
  let subdomain = null;
  
  if (hostname.includes("lvh.me")) {
    const parts = hostname.split(".");
    // vendorA.lvh.me:3000 or vendorA.lvh.me
    if (parts.length > 2) {
       subdomain = parts[0];
    }
  } else if (!hostname.includes("localhost")) {
     // Production logic (simplified)
     const parts = hostname.split(".");
     if (parts.length > 2) {
        subdomain = parts[0];
     }
  }

  // If we have a subdomain, rewrite to /site/[subdomain]
  if (subdomain) {
    // Rewrite to the dynamic route
    return NextResponse.rewrite(new URL(`/site/${subdomain}${url.pathname}`, req.url));
  }

  return NextResponse.next();
}
