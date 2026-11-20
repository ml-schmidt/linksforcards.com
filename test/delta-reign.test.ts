import { describe, expect, it } from "vitest";
import { deltaReignCopy } from "@/content/delta-reign";
import { DELTA_REIGN_SOURCES } from "@/content/delta-reign/types";
import { articleFaqSchema, getArticle } from "@/lib/articles";
import { matchDeltaReignSet, findDeltaReignSet, DELTA_REIGN_PATH } from "@/lib/delta-reign";
import { CARD_INDEX_LOCALES, LOCALES, cardPageIndexed } from "@/lib/locales";
import { resolveLocaleRequest } from "@/lib/routing";
import { sitemapEntries } from "@/lib/sitemap-data";
import { absoluteUrl } from "@/lib/site";

const banned: Record<string, RegExp[]> = {
  us: [/\bwe\b/i, /\bour\b/i, /\bours\b/i],
  uk: [/\bwe\b/i, /\bour\b/i, /\bours\b/i],
  de: [/\bwir\b/i, /\bunser\w*/i, /\buns\b/i],
  fr: [/\bnous\b/i, /\bnotre\b/i, /\bnos\b/i],
  es: [/\bnosotros\b/i, /\bnuestro\w*/i],
  it: [/\bnoi\b/i, /\bnostro\b/i, /\bnostra\b/i, /\bnostri\b/i, /\bnostre\b/i],
  nl: [/\bwij\b/i, /\bons\b/i, /\bonze\b/i],
  sv: [/\bvi\b/i, /\bvår\b/i, /\bvåra\b/i, /\bvårt\b/i],
  no: [/\bvi\b/i, /\bvår\b/i, /\bvåre\b/i, /\bvårt\b/i],
  fi: [/\bme\b/i, /\bmeidän\b/i],
  pl: [/\bmy\b/i, /\bnasz\w*/i],
};

const required = [
  "/collections/set/xy7",
  "/pokedex/284",
  "/pokedex/467",
  "/pokedex/905",
  "/pokedex/784",
  "/pokedex/382",
  "/collections/themes/delta-species",
  "/collections/set/me1",
  "/collections/series/mega-evolution",
  "/guides/bulk-cards",
  "/collections/generation/3",
  "/collections/generation/4",
  "/collections/generation/5",
  "/collections/generation/6",
  "/collections/generation/7",
  "/collections/generation/8",
  "/pokedex/384",
  "/pokedex/623",
  "/pokedex/687",
  "/pokedex/768",
  "/guides/collecting-binders",
  "/guides/collecting-with-a-child",
  "/guides/donating-cards",
  "/guides/sets-in-order",
];

function prose(locale: (typeof LOCALES)[number]): string {
  const copy = deltaReignCopy(locale);
  return [copy.lede, ...copy.sections.flatMap((section) => section.paragraphs)].join("\n");
}

function words(text: string): number {
  return text
    .replace(/\[\[([^\]|]+)\|[^\]]+\]\]/g, "$1")
    .replace(/\{[A-Za-z0-9]+\}/g, "0")
    .split(/\s+/)
    .filter(Boolean).length;
}

describe("delta reign", () => {
  it("waits for a real catalog row and ignores the older delta theme", () => {
    expect(matchDeltaReignSet([])).toBeNull();
    expect(matchDeltaReignSet([{ id: "ex11", name: "Delta Species" }])).toBeNull();
    expect(matchDeltaReignSet([{ id: "me6", name: "Something else" }])?.id).toBe("me6");
    expect(matchDeltaReignSet([{ id: "sv1", name: "Mega Evolution—Delta Reign" }])?.id).toBe("sv1");
    expect(findDeltaReignSet()).toBeNull();
  });

  it("leaves the unprefixed path for the config rewrite and a locale prefix alone", () => {
    expect(resolveLocaleRequest("/collections/set/delta-reign")).toEqual({ action: "next", noindex: false });
    expect(resolveLocaleRequest("/de/collections/set/delta-reign")).toEqual({ action: "next", noindex: false });
  });

  it("is in the indexed sitemaps only, with alternates for those locales", () => {
    const us = sitemapEntries("us-pages");
    const de = sitemapEntries("de-pages");
    const usEntry = us?.find((entry) => entry.url === absoluteUrl(DELTA_REIGN_PATH));
    const deEntry = de?.find((entry) => entry.url === absoluteUrl(`/de${DELTA_REIGN_PATH}`));
    expect(usEntry?.languages?.de).toBe(absoluteUrl(`/de${DELTA_REIGN_PATH}`));
    expect(usEntry?.languages?.["x-default"]).toBe(absoluteUrl(DELTA_REIGN_PATH));
    expect(usEntry?.languages?.["en-GB"]).toBeUndefined();
    expect(usEntry?.languages?.nl).toBeUndefined();
    expect(deEntry?.languages?.en).toBe(absoluteUrl(DELTA_REIGN_PATH));
    expect(usEntry?.lastModified).toBeUndefined();
    for (const locale of LOCALES) {
      const pages = sitemapEntries(`${locale}-pages`);
      const guides = sitemapEntries(`${locale}-guides`);
      const pageUrl = absoluteUrl(locale === "us" ? DELTA_REIGN_PATH : `/${locale}${DELTA_REIGN_PATH}`);
      const guideUrl = absoluteUrl(locale === "us" ? "/guides/spot-fakes" : `/${locale}/guides/spot-fakes`);
      expect(pages?.some((entry) => entry.url === pageUrl), locale).toBe(cardPageIndexed(locale));
      expect(guides?.some((entry) => entry.url === guideUrl), locale).toBe(cardPageIndexed(locale));
    }
    expect([...CARD_INDEX_LOCALES]).toEqual(["us", "de", "fr", "es", "it"]);
  });

  it("keeps sourced copy in every language and skips FAQ markup on the new guide", () => {
    for (const locale of LOCALES) {
      const copy = deltaReignCopy(locale);
      const body = prose(locale);
      expect(words(body), locale).toBeGreaterThanOrEqual(700);
      expect(copy.sections.map((section) => section.id)).toEqual([
        "dates",
        "cards",
        "products",
        "not-delta-species",
        "wishlist",
        "unknown",
      ]);
      for (const href of required) expect(body, `${locale} ${href}`).toContain(`|${href}]]`);
      for (const pattern of banned[locale] ?? []) expect(body, locale).not.toMatch(pattern);
      expect(body, locale).not.toMatch(/[$€£]/);
      expect(Object.keys(copy.sourceLabels)).toEqual(DELTA_REIGN_SOURCES.map((source) => source.key));
      expect(articleFaqSchema(getArticle(locale, "spot-fakes")!), locale).toBe(false);
    }
  });
});
