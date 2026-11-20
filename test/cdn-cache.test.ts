import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { listCardPaths } from "../src/lib/card-page";
import {
  CDN_CACHE_CONTROL,
  CDN_CACHE_SECONDS,
  LIVE_ISR_PATHS,
  PDF_CACHE_CONTROL,
  cdnCacheControlFor,
  liveRevalidatePaths,
} from "../src/lib/cdn-cache";
import { getIllustrators } from "../src/lib/illustrators";
import { LOCALES } from "../src/lib/locales";

const DYNAMIC_ROUTES = [
  "src/app/(site)/[locale]/cards/[slug]/page.tsx",
  "src/app/(site)/[locale]/cards/page.tsx",
  "src/app/(site)/[locale]/illustrators/[slug]/page.tsx",
  "src/app/(site)/[locale]/checklists/[kind]/[id]/page.tsx",
  "src/app/(site)/[locale]/checklists/[kind]/[id]/pdf/[paper]/route.ts",
  "src/app/(site)/[locale]/pokedex/[dex]/page.tsx",
  "src/app/(site)/[locale]/collections/set/[setId]/page.tsx",
  "src/app/(site)/[locale]/collections/set/delta-reign/page.tsx",
  "src/app/(site)/[locale]/collections/themes/[slug]/page.tsx",
  "src/app/(site)/[locale]/collections/generation/[gen]/page.tsx",
  "src/app/(site)/[locale]/collections/series/[slug]/page.tsx",
  "src/app/api/card-index/route.ts",
];

const STATIC_ROUTES = [
  "src/app/(site)/[locale]/guides/page.tsx",
  "src/app/(site)/[locale]/guides/[slug]/page.tsx",
  "src/app/(site)/[locale]/privacy/page.tsx",
  "src/app/(site)/[locale]/imprint/page.tsx",
  "src/app/(site)/[locale]/illustrators/page.tsx",
  "src/app/(site)/[locale]/checklists/page.tsx",
  "src/app/sitemap/[id]/route.ts",
  "src/app/sitemap-index/route.ts",
];

const DAILY_ISR_ROUTES = [
  "src/app/(site)/[locale]/page.tsx",
  "src/app/(site)/[locale]/collections/page.tsx",
  "src/app/(site)/[locale]/collections/themes/page.tsx",
  "src/app/(site)/[locale]/donations/page.tsx",
  "src/app/(site)/[locale]/partners/page.tsx",
  "src/app/(site)/[locale]/updates/page.tsx",
];

describe("CDN cache paths", () => {
  it("keeps catalog HTML fresh for 30 days so a daily crawl does not re-render", () => {
    expect(CDN_CACHE_SECONDS).toBe(2_592_000);
    expect(CDN_CACHE_CONTROL).toBe("public, s-maxage=2592000, stale-while-revalidate=2592000");
    expect(PDF_CACHE_CONTROL).toContain("s-maxage=2592000");
  });

  it("caches card, illustrator, checklist, pokedex, and collection detail URLs", () => {
    const samples = [
      "/cards/base1-4-charizard",
      "/de/cards/base1-4-charizard",
      "/nl/cards/base1-4-charizard",
      "/uk/cards/base1-4-charizard",
      "/illustrators/mitsuhiro-arita",
      "/fr/illustrators/mitsuhiro-arita",
      "/checklists/set/base1",
      "/es/checklists/theme/pikachu",
      "/it/checklists/generation/1",
      "/pokedex/6",
      "/de/pokedex/25",
      "/nl/pokedex/1025",
      "/collections/set/base1",
      "/collections/set/delta-reign",
      "/sv/collections/set/sv3pt5",
      "/collections/themes/pikachu",
      "/collections/generation/1",
      "/pl/collections/series/sword-shield",
      "/cards",
      "/de/cards",
    ];
    for (const path of samples) expect(cdnCacheControlFor(path)).toBe(CDN_CACHE_CONTROL);
    expect(cdnCacheControlFor("/checklists/set/base1/pdf/a4")).toBe(PDF_CACHE_CONTROL);
    expect(cdnCacheControlFor("/de/checklists/generation/1/pdf/letter")).toBe(PDF_CACHE_CONTROL);
  });

  it("does not cache queries, hubs, admin, or sitemaps", () => {
    expect(cdnCacheControlFor("/cards/base1-4-charizard", "?utm=1")).toBeNull();
    expect(cdnCacheControlFor("/cards", "?q=charizard")).toBeNull();
    expect(cdnCacheControlFor("/de/cards", "?need=1")).toBeNull();
    for (const path of ["/", "/de", "/collections", "/collections/themes", "/guides/spot-fakes", "/privacy", "/admin", "/admin/login", "/sitemap.xml", "/api/card-index", "/illustrators", "/checklists", "/pokedex/0"]) {
      expect(cdnCacheControlFor(path)).toBeNull();
    }
  });

  it("covers every catalog card path in every locale", () => {
    const paths = listCardPaths();
    expect(paths.length).toBeGreaterThan(20_000);
    for (const path of paths) {
      expect(cdnCacheControlFor(path)).toBe(CDN_CACHE_CONTROL);
      for (const locale of LOCALES) {
        if (locale === "us") continue;
        expect(cdnCacheControlFor(`/${locale}${path}`)).toBe(CDN_CACHE_CONTROL);
      }
    }
  });

  it("covers illustrator detail pages and leaves the index alone", () => {
    const people = getIllustrators();
    expect(people.length).toBeGreaterThan(100);
    for (const person of people) {
      expect(cdnCacheControlFor(`/illustrators/${person.slug}`)).toBe(CDN_CACHE_CONTROL);
    }
    expect(cdnCacheControlFor("/illustrators")).toBeNull();
  });

  it("keeps admin saves off the high-cardinality routes", () => {
    const paths = liveRevalidatePaths();
    expect(LIVE_ISR_PATHS).toHaveLength(6);
    expect(paths.length).toBeLessThan(100);
    for (const path of paths) expect(cdnCacheControlFor(path)).toBeNull();
    expect(paths).toContain("/");
    expect(paths).toContain("/us");
    expect(paths).toContain("/de");
    expect(paths).toContain("/de/collections");
    expect(paths).not.toContain("/cards/base1-4-charizard");
    expect(paths).not.toContain("/sitemap.xml");
  });
});

describe("route cache mode", () => {
  it("renders high-cardinality routes dynamically, with no ISR revalidate", () => {
    for (const file of DYNAMIC_ROUTES) {
      const source = readFileSync(file, "utf8");
      expect(source, file).toContain('export const dynamic = "force-dynamic"');
      expect(source, file).not.toMatch(/export const revalidate\s*=/);
    }
  });

  it("leaves guides, legal pages, and sitemaps static", () => {
    for (const file of STATIC_ROUTES) {
      const source = readFileSync(file, "utf8");
      expect(source, file).not.toMatch(/export const revalidate\s*=/);
      expect(source, file).not.toContain('export const dynamic = "force-dynamic"');
    }
  });

  it("refreshes the small live pages once a day", () => {
    for (const file of DAILY_ISR_ROUTES) {
      const source = readFileSync(file, "utf8");
      expect(source, file).toContain("export const revalidate = 86400;");
    }
  });

  it("keeps the donation snapshot on one shared cache key and PDFs out of the data cache", () => {
    const stats = readFileSync("src/lib/stats.ts", "utf8");
    expect(stats).toContain('["public-snapshot-v2"]');
    expect(stats).not.toMatch(/unstable_cache\([\s\S]{0,400}slug/);
    const pdf = readFileSync("src/lib/checklist-pdf.ts", "utf8");
    expect(pdf).not.toContain("unstable_cache");
    const cardPage = readFileSync("src/app/(site)/[locale]/cards/[slug]/page.tsx", "utf8");
    expect(cardPage).toContain("CardPicture");
    expect(cardPage).not.toContain("next/image");
    expect(cardPage).toContain("permanentRedirect");
    expect(cardPage).toContain("notFound()");
  });
});
