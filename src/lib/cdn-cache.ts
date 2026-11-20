import { LOCALES } from "./locales";
import { localePath } from "./routing";

/**
 * Cache at Vercel's CDN only. These responses are not ISR: the page is
 * dynamic, so a render is not written to the durable ISR cache. `s-maxage`
 * is 30 days. A one-day lifetime made the next daily crawl treat the page as
 * stale, re-render it, and transfer the HTML again. Card facts rarely change,
 * so donation text on a card can lag by this window.
 */
export const CDN_CACHE_SECONDS = 60 * 60 * 24 * 30;
export const CDN_CACHE_CONTROL = `public, s-maxage=${CDN_CACHE_SECONDS}, stale-while-revalidate=${CDN_CACHE_SECONDS}`;

/** Checklist PDFs are catalog text. Same 30-day CDN lifetime as the HTML. */
export const PDF_CACHE_CONTROL = `public, max-age=86400, s-maxage=${CDN_CACHE_SECONDS}, stale-while-revalidate=${CDN_CACHE_SECONDS}`;

const PREFIX = `(?:/(?:${LOCALES.join("|")}))?`;

const PDF_PATH = new RegExp(`^${PREFIX}/checklists/(?:set|theme|generation)/[^/]+/pdf/(?:a4|letter)$`);

const HTML_PATH = new RegExp(
  `^${PREFIX}(?:${[
    "/cards/[^/]+",
    "/illustrators/[^/]+",
    "/checklists/(?:set|theme|generation)/[^/]+",
    "/pokedex/[1-9]\\d*",
    "/collections/set/[^/]+",
    "/collections/themes/[^/]+",
    "/collections/generation/[1-9]",
    "/collections/series/[^/]+",
  ].join("|")})$`,
);

/** The clean card index. Filtered query strings are a separate response and stay uncached. */
const CARD_INDEX = new RegExp(`^${PREFIX}/cards$`);

/**
 * Header for a public URL, or null when this request must not be stored.
 * A query string is excluded so tracking params and card-search filters do
 * not each become a cache entry.
 */
export function cdnCacheControlFor(pathname: string, search = ""): string | null {
  if (search) return null;
  if (PDF_PATH.test(pathname)) return PDF_CACHE_CONTROL;
  if (HTML_PATH.test(pathname) || CARD_INDEX.test(pathname)) return CDN_CACHE_CONTROL;
  return null;
}

export function applyCdnCacheHeaders(headers: { set: (name: string, value: string) => void }, value: string): void {
  headers.set("Cache-Control", value);
  headers.set("CDN-Cache-Control", value);
  headers.set("Vercel-CDN-Cache-Control", value);
}

const HTML_TAILS = [
  "/cards/:slug",
  "/illustrators/:slug",
  "/checklists/:kind/:id",
  "/pokedex/:dex",
  "/collections/set/:setId",
  "/collections/themes/:slug",
  "/collections/generation/:gen",
  "/collections/series/:slug",
] as const;

const PDF_TAILS = ["/checklists/:kind/:id/pdf/:paper"] as const;

function headerRows(value: string): { key: string; value: string }[] {
  return [
    { key: "Cache-Control", value },
    { key: "CDN-Cache-Control", value },
    { key: "Vercel-CDN-Cache-Control", value },
  ];
}

/**
 * Platform header backup for the same detail routes. The card index is not
 * here: a config header cannot see the query string, and filtered searches
 * must stay uncached. Middleware sets that header only when the query is empty.
 */
export function cdnConfigHeaders(): { source: string; headers: { key: string; value: string }[] }[] {
  const rows: { source: string; headers: { key: string; value: string }[] }[] = [];
  for (const tail of HTML_TAILS) {
    const headers = headerRows(CDN_CACHE_CONTROL);
    rows.push({ source: tail, headers }, { source: `/:locale${tail}`, headers });
  }
  for (const tail of PDF_TAILS) {
    const headers = headerRows(PDF_CACHE_CONTROL);
    rows.push({ source: tail, headers }, { source: `/:locale${tail}`, headers });
  }
  return rows;
}

/**
 * Low-cardinality pages that still use ISR. An admin save revalidates these
 * paths only, not the root layout, so a shipment does not invalidate every
 * card URL or the sitemaps.
 */
export const LIVE_ISR_PATHS = [
  "/",
  "/collections",
  "/collections/themes",
  "/donations",
  "/partners",
  "/updates",
] as const;

export function liveRevalidatePaths(): string[] {
  const paths = new Set<string>();
  for (const path of LIVE_ISR_PATHS) {
    paths.add(path);
    paths.add(path === "/" ? "/us" : `/us${path}`);
    for (const locale of LOCALES) {
      if (locale === "us") continue;
      paths.add(localePath(locale, path));
    }
  }
  return [...paths];
}
