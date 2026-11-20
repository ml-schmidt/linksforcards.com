import { NextResponse, type NextRequest } from "next/server";
import { applyCdnCacheHeaders, cdnCacheControlFor } from "./lib/cdn-cache";
import { resolveLocaleRequest } from "./lib/routing";

function withCdnCache(response: NextResponse, pathname: string, search: string): NextResponse {
  const cacheControl = cdnCacheControlFor(pathname, search);
  if (cacheControl) applyCdnCacheHeaders(response.headers, cacheControl);
  return response;
}

/**
 * Only paths that still need a decision at request time. Catalog HTML is
 * rewritten and cached from `next.config.ts`, so a crawler hit must not start
 * this function. Vercel runs middleware before the CDN cache.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const decision = resolveLocaleRequest(pathname);
  if (decision.action === "redirect") {
    const url = new URL(decision.pathname, request.url);
    url.search = search;
    return NextResponse.redirect(url, 301);
  }
  const response = NextResponse.next();
  if (decision.noindex) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }
  return withCdnCache(response, pathname, search);
}

export const config = {
  matcher: [
    "/us",
    "/us/:path*",
    "/en",
    "/en/:path*",
    "/binders",
    "/binders/:path*",
    "/:locale(uk|de|fr|it|es|nl|sv|no|fi|pl)/binders",
    "/:locale(uk|de|fr|it|es|nl|sv|no|fi|pl)/binders/:path*",
    "/admin",
    "/admin/:path*",
    "/sitemap/root",
    "/sitemap/root.xml",
    // The card index is cached only when the query string is empty.
    "/cards",
    "/:locale(uk|de|fr|it|es|nl|sv|no|fi|pl)/cards",
  ],
};
