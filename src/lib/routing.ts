import { isLocale } from "./locales";

export function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) parts.shift();
  const bare = `/${parts.join("/")}`;
  return bare === "/" ? "/" : bare.replace(/\/$/, "");
}

/** Public path for a locale. US English has no prefix. */
export function localePath(locale: string, pathname: string): string {
  const bare = stripLocale(pathname.startsWith("/") ? pathname : `/${pathname}`);
  if (locale === "us") return bare;
  return bare === "/" ? `/${locale}` : `/${locale}${bare}`;
}

const PASS_THROUGH = new Set(["/robots.txt", "/sitemap.xml", "/icon.svg", "/favicon.ico"]);

export type LocaleDecision =
  | { action: "next"; noindex: boolean }
  | { action: "redirect"; pathname: string };

/**
 * Unprefixed US pages, rewritten in `beforeFiles` so the public path is the
 * CDN cache key. A middleware rewrite runs before that cache and skips it.
 * Card, illustrator, and checklist detail routes are included here too.
 */
export const US_BEFORE_FILE_REWRITES: { source: string; destination: string }[] = [
  { source: "/", destination: "/us" },
  { source: "/partners", destination: "/us/partners" },
  { source: "/updates", destination: "/us/updates" },
  { source: "/donations", destination: "/us/donations" },
  { source: "/privacy", destination: "/us/privacy" },
  { source: "/imprint", destination: "/us/imprint" },
  { source: "/collections", destination: "/us/collections" },
  { source: "/collections/themes", destination: "/us/collections/themes" },
  { source: "/collections/themes/:slug([a-z0-9-]+)", destination: "/us/collections/themes/:slug" },
  { source: "/collections/generation/:gen([1-9])", destination: "/us/collections/generation/:gen" },
  { source: "/collections/set/:setId([a-z0-9-]+)", destination: "/us/collections/set/:setId" },
  { source: "/collections/series/:slug([a-z0-9-]+)", destination: "/us/collections/series/:slug" },
  { source: "/guides", destination: "/us/guides" },
  { source: "/guides/:slug([a-z0-9-]+)", destination: "/us/guides/:slug" },
  { source: "/pokedex/:dex([1-9]\\d*)", destination: "/us/pokedex/:dex" },
  { source: "/cards", destination: "/us/cards" },
  { source: "/cards/:slug", destination: "/us/cards/:slug" },
  { source: "/illustrators", destination: "/us/illustrators" },
  { source: "/illustrators/:slug", destination: "/us/illustrators/:slug" },
  { source: "/checklists", destination: "/us/checklists" },
  { source: "/checklists/:kind/:id/pdf/:paper", destination: "/us/checklists/:kind/:id/pdf/:paper" },
  { source: "/checklists/:kind/:id", destination: "/us/checklists/:kind/:id" },
];

function collectionFromBinders(pathname: string): string | null {
  if (pathname === "/binders") return "/collections";
  const generation = pathname.match(/^\/binders\/generation\/([1-9])$/);
  if (generation) return `/collections/generation/${generation[1]}`;
  const set = pathname.match(/^\/binders\/set\/([a-z0-9]+)$/);
  if (set) return `/collections/set/${set[1]}`;
  return null;
}

function stripOne(pathname: string, prefix: "us" | "en"): string | null {
  if (pathname === `/${prefix}`) return "/";
  if (pathname.startsWith(`/${prefix}/`)) return pathname.slice(prefix.length + 1) || "/";
  return null;
}

/** Collapse /us and /en (in either order) and old /binders paths onto the public US path. */
function publicTarget(pathname: string): string {
  let path = pathname;
  for (let i = 0; i < 4; i += 1) {
    const next = stripOne(path, "us") ?? stripOne(path, "en");
    if (!next) break;
    path = next;
  }
  return collectionFromBinders(path) ?? path;
}

function resolveCore(pathname: string): LocaleDecision {
  if (pathname === "/sitemap/root.xml" || pathname === "/sitemap/root") {
    return { action: "redirect", pathname: "/sitemap/us-pages.xml" };
  }
  if (pathname.startsWith("/admin")) return { action: "next", noindex: true };
  if (
    pathname.startsWith("/og/") ||
    pathname.startsWith("/sitemap/") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PASS_THROUGH.has(pathname) ||
    pathname.includes(".")
  ) {
    return { action: "next", noindex: false };
  }
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0] ?? "";
  if (first === "us" || first === "en") return { action: "redirect", pathname: publicTarget(pathname) };
  if (isLocale(first)) {
    const rest = `/${parts.slice(1).join("/")}` || "/";
    const moved = collectionFromBinders(rest);
    if (moved) return { action: "redirect", pathname: `/${first}${moved}` };
    return { action: "next", noindex: false };
  }
  const moved = collectionFromBinders(pathname);
  if (moved) return { action: "redirect", pathname: moved };
  // Unprefixed US pages are rewritten in next.config.ts (US_BEFORE_FILE_REWRITES).
  return { action: "next", noindex: false };
}

export function resolveLocaleRequest(pathname: string): LocaleDecision {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const decision = resolveCore(trimmed);
  if (decision.action === "redirect") return decision;
  if (trimmed !== pathname) return { action: "redirect", pathname: trimmed };
  return decision;
}
