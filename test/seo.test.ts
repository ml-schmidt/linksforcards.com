import { describe, expect, it } from "vitest";
import type { Graph } from "schema-dts";
import { getSetCards, getSets, setsBySeries } from "../src/lib/catalog";
import { seriesSearchDescription, seriesSearchTitle, setSearchDescription, setSearchTitle } from "../src/lib/collection-meta";
import { getMessages } from "../src/lib/i18n";
import { HREFLANG_TARGETS, LOCALES, SPECIES_INDEX_LOCALES } from "../src/lib/locales";
import {
  blogPostNodes,
  breadcrumbNode,
  faqNode,
  itemListNode,
  ldGraph,
  pageNode,
  type PageKind,
} from "../src/lib/jsonld";
import { localePath } from "../src/lib/routing";
import { CARD_INDEX_LOCALES } from "../src/lib/locales";
import { hreflangMap, pageMetadata } from "../src/lib/seo";
import { renderSitemapIndex, renderUrlset, SITEMAP_IDS, sitemapEntries } from "../src/lib/sitemap-data";
import { absoluteUrl } from "../src/lib/site";

function typesOf(value: unknown, found = new Set<string>()): Set<string> {
  if (Array.isArray(value)) {
    for (const item of value) typesOf(item, found);
    return found;
  }
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record["@type"] === "string") found.add(record["@type"]);
    for (const child of Object.values(record)) typesOf(child, found);
  }
  return found;
}

function keysOf(value: unknown, found = new Set<string>()): Set<string> {
  if (Array.isArray(value)) {
    for (const item of value) keysOf(item, found);
    return found;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      found.add(key);
      keysOf(child, found);
    }
  }
  return found;
}

function parse(graph: Graph): Graph {
  return JSON.parse(JSON.stringify(graph).replace(/</g, "\\u003c")) as Graph;
}

describe("hreflang", () => {
  it("uses absolute reciprocal alternates, including region codes that share a URL", () => {
    const home = hreflangMap("/");
    const collections = hreflangMap("/collections");
    expect(home["x-default"]).toBe(absoluteUrl("/"));
    expect(home.en).toBe(absoluteUrl("/"));
    expect(home["en-US"]).toBe(absoluteUrl("/"));
    expect(collections["x-default"]).toBe(absoluteUrl("/collections"));
    expect(collections.en).toBe(absoluteUrl("/collections"));
    expect(collections["en-US"]).toBe(absoluteUrl("/collections"));
    expect(home["en-GB"]).toBe(absoluteUrl("/uk"));
    expect(home["en-IE"]).toBe(home["en-GB"]);
    expect(collections["de-AT"]).toBe(collections.de);
    expect(collections["de-CH"]).toBe(collections.de);
    expect(collections["fr-BE"]).toBe(collections.fr);
    expect(collections["nl-BE"]).toBe(collections.nl);
    expect(collections.nb).toBe(collections.no);
    for (const code of [...HREFLANG_TARGETS.map((item) => item.code), "x-default"]) {
      expect(home[code]).toMatch(/^https:\/\/linksforcards\.com(\/|$)/);
      expect(collections[code]).toBe(hreflangMap("/collections")[code]);
    }
    const species = hreflangMap("/pokedex/25", SPECIES_INDEX_LOCALES);
    expect(species["x-default"]).toBe(absoluteUrl("/pokedex/25"));
    expect(species.en).toBe(absoluteUrl("/pokedex/25"));
    expect(species["en-US"]).toBe(absoluteUrl("/pokedex/25"));
    expect(species.de).toBe(absoluteUrl("/de/pokedex/25"));
    expect(species.nl).toBeUndefined();
    expect(species.sv).toBeUndefined();
    expect(species.no).toBeUndefined();
    expect(species.fi).toBeUndefined();
    expect(species.pl).toBeUndefined();
    const hidden = pageMetadata("nl", "/pokedex/25", "Pikachu cards list", "A list.", {
      locales: SPECIES_INDEX_LOCALES,
      index: false,
    });
    expect(hidden.robots).toEqual({ index: false, follow: true });
    expect(hidden.alternates?.canonical).toBe(absoluteUrl("/nl/pokedex/25"));
    expect(hidden.alternates?.languages).not.toHaveProperty("nl");
    const hiddenCard = pageMetadata("uk", "/cards/base1-4-charizard", "Charizard 4/102 · Base", "Charizard 4/102 is a Rare Holo card in the Base set.", {
      index: false,
      hreflang: false,
      fitTitle: true,
    });
    expect(hiddenCard.robots).toEqual({ index: false, follow: true });
    expect(hiddenCard.alternates?.canonical).toBe(absoluteUrl("/uk/cards/base1-4-charizard"));
    expect(hiddenCard.alternates?.languages).toBeUndefined();
    const indexedCard = pageMetadata("de", "/cards/base1-4-charizard", "Charizard 4/102 · Base", "Charizard 4/102 ist eine Rare Holo-Karte im Set Base.", {
      locales: CARD_INDEX_LOCALES,
      fitTitle: true,
    });
    expect(indexedCard.robots).toBeUndefined();
    expect(indexedCard.alternates?.languages?.de).toBe(absoluteUrl("/de/cards/base1-4-charizard"));
    expect(indexedCard.alternates?.languages?.["de-AT"]).toBe(absoluteUrl("/de/cards/base1-4-charizard"));
    expect(indexedCard.alternates?.languages?.en).toBe(absoluteUrl("/cards/base1-4-charizard"));
    expect(indexedCard.alternates?.languages?.["x-default"]).toBe(absoluteUrl("/cards/base1-4-charizard"));
    expect(indexedCard.alternates?.languages?.fr).toBe(absoluteUrl("/fr/cards/base1-4-charizard"));
    expect(indexedCard.alternates?.languages?.it).toBe(absoluteUrl("/it/cards/base1-4-charizard"));
    expect(indexedCard.alternates?.languages?.es).toBe(absoluteUrl("/es/cards/base1-4-charizard"));
    expect(indexedCard.alternates?.languages?.["en-GB"]).toBeUndefined();
    expect(indexedCard.alternates?.languages?.sv).toBeUndefined();
    expect(indexedCard.alternates?.languages?.nl).toBeUndefined();
    expect(indexedCard.title).toBe("Charizard 4/102 · Base");
    const longTitle = "X".repeat(50);
    const fitted = pageMetadata("us", "/cards/example", longTitle, "Short.", { fitTitle: true });
    expect(fitted.title).toEqual({ absolute: longTitle });
    const partners = pageMetadata("us", "/guides/bulk-cards", "Bulk", "What to do with bulk.");
    expect(partners.alternates?.canonical).toBe(absoluteUrl("/guides/bulk-cards"));
    expect(partners.openGraph?.url).toBe(absoluteUrl("/guides/bulk-cards"));
    expect(partners.alternates?.languages?.en).toBe(absoluteUrl("/guides/bulk-cards"));
    expect(partners.alternates?.languages?.["en-GB"]).toBe(absoluteUrl("/uk/guides/bulk-cards"));
    for (const locale of LOCALES) {
      const path = hreflangMap("/partners");
      expect(Object.values(path)).toContain(absoluteUrl(localePath(locale, "/partners")));
    }
  });
});

describe("json-ld", () => {
  const kinds: PageKind[] = ["AboutPage", "WebPage", "CollectionPage", "ContactPage", "Blog", "Article"];

  it("parses a graph for each page type and stays free of offers and ratings", () => {
    const crumbs = [
      { name: "Home", href: "/uk" },
      { name: "Collections", href: "/uk/collections" },
    ];
    const graphs = kinds.map((kind) =>
      parse(
        ldGraph([
          pageNode({
            kind,
            locale: "uk",
            path: kind === "AboutPage" ? "/" : "/collections",
            name: "Sample",
            description: "A sample page.",
            ...(kind === "Article" ? { datePublished: "2026-10-24", dateModified: "2026-10-24" } : {}),
          }),
          breadcrumbNode(crumbs),
        ]),
      ),
    );
    const m = getMessages("uk");
    graphs.push(
      parse(
        ldGraph([
          faqNode("/uk", [
            { q: m.home.faq1q, a: m.home.faq1a },
            { q: m.home.faq2q, a: m.home.faq2a },
          ]),
        ]),
      ),
    );
    graphs.push(parse(ldGraph([itemListNode("/uk/partners", "Thanks", [{ name: "Harbour" }])])));
    graphs.push(
      parse(
        ldGraph(
          blogPostNodes("/uk/updates", "uk", [
            { id: "note-1", title: "First parcel", body: "A note.", publishedAt: "2026-10-24" },
          ]),
        ),
      ),
    );

    const seen = new Set<string>();
    for (const graph of graphs) {
      expect(graph["@context"]).toBe("https://schema.org");
      expect(Array.isArray(graph["@graph"])).toBe(true);
      for (const type of typesOf(graph)) seen.add(type);
      const keys = keysOf(graph);
      expect(keys.has("offers")).toBe(false);
      expect(keys.has("aggregateRating")).toBe(false);
      expect(keys.has("review")).toBe(false);
      expect(keys.has("price")).toBe(false);
    }
    for (const type of ["Organization", "Person", "WebSite", "BreadcrumbList", "FAQPage", "ItemList", "BlogPosting", "ImageObject"]) {
      expect(seen.has(type)).toBe(true);
    }
    for (const kind of kinds) expect(seen.has(kind)).toBe(true);
    expect(seen.has("Offer")).toBe(false);
    expect(seen.has("Product")).toBe(false);
    expect(seen.has("AggregateRating")).toBe(false);
    expect(seen.has("Review")).toBe(false);
  });
});

describe("set and series snippets", () => {
  const haveCount = /I have |Ich habe |J'en ai |Tengo |Ne ho |Ik heb |Jag har |Jeg har |Minulla on |Mam /;

  it("names the set, the card count, and a checklist without a have-count", () => {
    const hidden = getSets().find((set) => set.id === "sm115");
    const cards = hidden ? getSetCards(hidden.id) : null;
    if (!hidden || !cards) throw new Error("missing hidden fates");
    const messages = getMessages("us");
    const title = setSearchTitle(messages, "us", hidden.name, cards.length);
    const description = setSearchDescription(messages, "us", hidden, cards.length);
    expect(title).toBe("Hidden Fates card list: all 69 Pokémon cards + checklist");
    expect(description).toBe(
      "Every card in Pokémon TCG Hidden Fates (Sun & Moon, 2019): all 69 cards in set order with numbers and pictures, plus a free printable checklist.",
    );
    expect(getMessages("de").meta.setTitle).toContain("Kartenliste");
    const suffix = " · LinksForCards";
    for (const locale of LOCALES) {
      const m = getMessages(locale);
      for (const set of getSets()) {
        const total = getSetCards(set.id)?.length ?? set.count;
        const setTitle = setSearchTitle(m, locale, set.name, total);
        const setDescription = setSearchDescription(m, locale, set, total);
        const visible = setTitle.length + suffix.length <= 60 ? setTitle.length + suffix.length : setTitle.length;
        expect(visible, `${locale} ${set.id} ${setTitle}`).toBeLessThanOrEqual(60);
        expect(setDescription.length, `${locale} ${set.id}`).toBeLessThanOrEqual(160);
        expect(setDescription, `${locale} ${set.id}`).not.toMatch(haveCount);
        expect(setTitle, `${locale} ${set.id}`).toMatch(/Pokémon/);
        expect(setDescription, `${locale} ${set.id}`).toContain(set.name);
      }
      for (const group of setsBySeries()) {
        const seriesTitle = seriesSearchTitle(m, locale, group.series, group.sets.length);
        const seriesDescription = seriesSearchDescription(m, locale, group.series, group.sets.length);
        const visible = seriesTitle.length + suffix.length <= 60 ? seriesTitle.length + suffix.length : seriesTitle.length;
        expect(visible, `${locale} ${group.series} ${seriesTitle}`).toBeLessThanOrEqual(60);
        expect(seriesDescription.length, `${locale} ${group.series}`).toBeLessThanOrEqual(160);
        expect(seriesTitle, `${locale} ${group.series}`).toMatch(/Pokémon/);
        expect(seriesDescription, `${locale} ${group.series}`).toContain(group.series);
      }
      expect(m.meta.deltaReignMetaTitle.length, locale).toBeLessThanOrEqual(60);
      expect(m.meta.deltaReignMetaDescription.length, locale).toBeLessThanOrEqual(160);
    }
  });
});

describe("sitemap xml", () => {
  it("indexes every locale and prints absolute xhtml alternates", () => {
    const index = renderSitemapIndex();
    expect(index).toContain("<sitemapindex");
    expect(index).not.toContain("/sitemap/root.xml");
    expect(index).toContain(absoluteUrl("/sitemap/us-pages.xml"));
    expect(index).toContain(absoluteUrl("/sitemap/uk-sets.xml"));
    expect(index).toContain(absoluteUrl("/sitemap/de-guides.xml"));
    expect(index).toContain(absoluteUrl("/sitemap/uk-species.xml"));
    expect(index).toContain(absoluteUrl("/sitemap/nl-themes.xml"));
    expect(index).not.toContain(absoluteUrl("/sitemap/nl-species.xml"));
    const us = sitemapEntries("us-pages");
    expect(us?.[0]?.url).toBe(absoluteUrl("/"));
    expect(us?.some((entry) => entry.url === absoluteUrl("/collections"))).toBe(true);
    expect(us?.some((entry) => entry.url === absoluteUrl("/cards"))).toBe(false);
    expect(us?.some((entry) => entry.url === absoluteUrl("/illustrators"))).toBe(false);
    expect(us?.some((entry) => entry.url.includes("/us/"))).toBe(false);
    expect(us?.[0]?.languages.en).toBe(absoluteUrl("/"));
    expect(us?.[0]?.languages["x-default"]).toBe(absoluteUrl("/"));
    const uk = sitemapEntries("uk-pages");
    expect(uk?.[0]?.url).toBe(absoluteUrl("/uk"));
    expect(uk?.some((entry) => entry.url === absoluteUrl("/uk/collections"))).toBe(true);
    expect(uk?.every((entry) => entry.lastModified == null)).toBe(true);
    const xml = renderUrlset(uk ?? []);
    expect(xml).toContain('hreflang="en"');
    expect(xml).toContain('hreflang="en-US"');
    expect(xml).toContain('hreflang="en-GB"');
    expect(xml).toContain('hreflang="en-IE"');
    expect(xml).toContain('hreflang="x-default"');
    expect(xml).not.toContain("<lastmod>");
    const guides = sitemapEntries("uk-guides");
    expect(guides?.every((entry) => entry.lastModified === "2026-10-24")).toBe(true);
    expect(renderUrlset(guides ?? [])).toContain("<lastmod>2026-10-24</lastmod>");
    const species = sitemapEntries("de-species");
    expect(species).toHaveLength(1025);
    expect(species?.[24]?.url).toBe(absoluteUrl("/de/pokedex/25"));
    expect(species?.[24]?.languages.nl).toBeUndefined();
    expect(species?.[24]?.languages.en).toBe(absoluteUrl("/pokedex/25"));
    expect(species?.[24]?.languages["en-US"]).toBe(absoluteUrl("/pokedex/25"));
    expect(species?.[24]?.languages["x-default"]).toBe(absoluteUrl("/pokedex/25"));
    expect(sitemapEntries("nl-species")).toBeNull();
    const themes = sitemapEntries("us-themes");
    expect(themes?.some((entry) => entry.url === absoluteUrl("/collections/themes/pikachu"))).toBe(true);
    expect(themes?.find((entry) => entry.url.endsWith("/collections/themes/pikachu"))?.languages.nl).toBeUndefined();
    expect(themes?.find((entry) => entry.url.endsWith("/collections/themes/pikachu"))?.languages["x-default"]).toBe(
      absoluteUrl("/collections/themes/pikachu"),
    );
    const dutchThemes = sitemapEntries("nl-themes");
    expect(dutchThemes?.some((entry) => entry.url.endsWith("/collections/themes/pikachu"))).toBe(false);
    expect(dutchThemes?.some((entry) => entry.url.endsWith("/nl/collections/themes/yuka-morii"))).toBe(true);
    expect(dutchThemes?.find((entry) => entry.url.endsWith("/collections/themes/yuka-morii"))?.languages.pl).toBe(
      absoluteUrl("/pl/collections/themes/yuka-morii"),
    );
    expect(sitemapEntries("nope")).toBeNull();
    expect(sitemapEntries("us-cards")).toBeNull();
    expect(sitemapEntries("de-cards")).toBeNull();
    const byteLimit = 5 * 1024 * 1024;
    let indexed = 0;
    let usTotal = 0;
    for (const locale of ["us", "de", "fr", "es", "it"]) {
      const parts: { url: string }[][] = [];
      for (let part = 1; part <= 20; part += 1) {
        const entries = sitemapEntries(`${locale}-cards-${part}`);
        if (!entries) break;
        parts.push(entries);
      }
      expect(parts.length).toBeGreaterThan(1);
      let localeTotal = 0;
      for (let part = 0; part < parts.length; part += 1) {
        const entries = parts[part] ?? [];
        expect(entries.length).toBeGreaterThan(0);
        expect(entries.length).toBeLessThanOrEqual(10_000);
        expect(entries.every((entry) => entry.url.includes("/cards/"))).toBe(true);
        expect(entries.every((entry) => !("languages" in entry) || entry.languages == null)).toBe(true);
        const cardXml = renderUrlset(entries);
        const bytes = Buffer.byteLength(cardXml);
        expect(bytes).toBeLessThanOrEqual(byteLimit);
        expect(cardXml).not.toContain("hreflang");
        expect(cardXml).not.toContain("<lastmod>");
        expect(index).toContain(absoluteUrl(`/sitemap/${locale}-cards-${part + 1}.xml`));
        console.log(`sitemap ${locale}-cards-${part + 1} urls=${entries.length} bytes=${bytes}`);
        localeTotal += entries.length;
      }
      expect(sitemapEntries(`${locale}-cards-${parts.length + 1}`)).toBeNull();
      expect(index).not.toContain(absoluteUrl(`/sitemap/${locale}-cards.xml`));
      indexed += localeTotal;
      if (locale === "us") usTotal = localeTotal;
      else expect(localeTotal).toBe(usTotal);
    }
    expect(usTotal).toBeGreaterThan(20_000);
    expect(indexed).toBe(usTotal * 5);
    const listed = ["us", "de", "fr", "es", "it"].flatMap((locale) => {
      const found: string[] = [];
      for (let part = 1; part <= 20; part += 1) {
        const entries = sitemapEntries(`${locale}-cards-${part}`);
        if (!entries) break;
        for (const entry of entries) found.push(entry.url);
      }
      return found;
    });
    expect(listed).toContain(absoluteUrl("/cards/base1-4-charizard"));
    expect(listed).toContain(absoluteUrl("/cards/sv3pt5-25-pikachu"));
    expect(listed).toContain(absoluteUrl("/cards/sv8pt5-28-pikachu-ex"));
    expect(listed).toContain(absoluteUrl("/de/cards/base1-4-charizard"));
    for (const locale of ["uk", "nl", "sv", "no", "fi", "pl"]) {
      expect(sitemapEntries(`${locale}-cards`)).toBeNull();
      expect(sitemapEntries(`${locale}-cards-1`)).toBeNull();
      expect(index).not.toContain(absoluteUrl(`/sitemap/${locale}-cards.xml`));
      expect(index).not.toContain(absoluteUrl(`/sitemap/${locale}-cards-1.xml`));
    }
    const artists = sitemapEntries("de-illustrators");
    expect(artists?.[0]?.url).toBe(absoluteUrl("/de/illustrators"));
    expect(artists?.some((entry) => entry.url.endsWith("/de/illustrators/mitsuhiro-arita"))).toBe(true);
    expect(artists?.every((entry) => entry.languages == null && entry.lastModified == null)).toBe(true);
    const artistXml = renderUrlset(artists ?? []);
    expect(artistXml).not.toContain("hreflang");
    expect(artistXml).not.toContain("<lastmod>");
    expect(Buffer.byteLength(artistXml)).toBeLessThanOrEqual(byteLimit);
    expect(index).toContain(absoluteUrl("/sitemap/us-illustrators.xml"));
    expect(index).toContain(absoluteUrl("/sitemap/it-database.xml"));
    expect(sitemapEntries("us-database")).toEqual([{ url: absoluteUrl("/cards") }]);
    expect(renderUrlset(sitemapEntries("fr-database") ?? [])).not.toContain("hreflang");
    for (const locale of ["uk", "nl", "sv", "no", "fi", "pl"]) {
      expect(sitemapEntries(`${locale}-illustrators`)).toBeNull();
      expect(sitemapEntries(`${locale}-database`)).toBeNull();
      expect(index).not.toContain(absoluteUrl(`/sitemap/${locale}-illustrators.xml`));
      expect(index).not.toContain(absoluteUrl(`/sitemap/${locale}-database.xml`));
    }
    let largest = 0;
    let largestId = "";
    for (const id of SITEMAP_IDS) {
      expect(index).toContain(absoluteUrl(`/sitemap/${id}.xml`));
      const entries = sitemapEntries(id);
      expect(entries && entries.length).toBeGreaterThan(0);
      const bytes = Buffer.byteLength(renderUrlset(entries ?? []));
      expect(bytes, id).toBeLessThanOrEqual(byteLimit);
      if (bytes > largest) {
        largest = bytes;
        largestId = id;
      }
    }
    console.log(`largest sitemap ${largestId} bytes=${largest} files=${SITEMAP_IDS.length}`);
  });
});
