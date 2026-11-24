import type { Metadata } from "next";
import type { Graph } from "schema-dts";
import type { CardFaq } from "@/content/card-story-types";
import { themeCopy } from "@/content/theme-copy";
import { cardImageKind, cardImageUrl } from "./card-images";
import { numbersMatch } from "./cards";
import { printingsForDex, type LookupPrinting } from "./card-lookup";
import { buildCardStory } from "./card-story";
import { getSet, getSetCards, getSets, speciesName, type CatalogCard, type CatalogSet } from "./catalog";
import { fill, formatDay } from "./format";
import { formatDexNumber, generationOf, SPECIES_TOTAL } from "./generations";
import type { Messages } from "./i18n";
import { breadcrumbNode, ldGraph, pageNode, type Crumb } from "./jsonld";
import { CARD_INDEX_LOCALES, cardPageIndexed, type Locale } from "./locales";
import { pageMetadata } from "./seo";
import { illustratorForName, illustratorPath } from "./illustrators";
import { localePath } from "./routing";
import { seriesSlug } from "./series";
import { themesForCard } from "./themes";

export type CardLink = { href: string; name: string };
export type PrintingCard = {
  href: string;
  name: string;
  fraction: string;
  setName: string;
  year: string;
  image: string | null;
  alt: string;
};
export type CardStatus = "have" | "need" | "unknown";
export type CardFact = { label: string; value?: string; href?: string; links?: CardLink[] };

/** Other printings shown on the card page. The rest stay on the Pokédex page. */
export const PRINTING_CAP = 8;

export type ResolvedCard = {
  set: CatalogSet;
  card: CatalogCard;
  canonical: string;
};

export type CardView = {
  path: string;
  title: string;
  description: string;
  paragraph: string;
  paragraphs: string[];
  faqs: CardFaq[];
  fraction: string;
  /** Three-digit printed number, when the card prints one that differs from `fraction`. */
  printedFraction: string | null;
  imageAlt: string;
  status: CardStatus;
  crumbs: Crumb[];
  facts: CardFact[];
  binders: CardLink[];
  others: PrintingCard[];
  morePrintings: { href: string; count: number } | null;
  prev: CardLink | null;
  next: CardLink | null;
};

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)+$/;

let setsLongest: CatalogSet[] | null = null;
let pathCache: string[] | null = null;

/** Denominator printed on the card. Secret rares keep a number above this. */
export function setPrintedTotal(set: CatalogSet): number {
  return set.printed && set.printed > 0 ? set.printed : set.count;
}

export function cardFraction(set: CatalogSet, card: { n: string }): string {
  return `${card.n}/${setPrintedTotal(set)}`;
}

/** Sword & Shield onward print the collector number as three digits, such as 018/091. */
const PADDED_NUMBER_SERIES = new Set(["Sword & Shield", "Scarlet & Violet", "Mega Evolution"]);

/**
 * The number as a modern card prints it, when that differs from the catalog
 * number. Promo codes such as SWSH001 and TG01 are already printed forms.
 */
export function printedCardFraction(set: CatalogSet, card: { n: string }): string | null {
  if (!PADDED_NUMBER_SERIES.has(set.series)) return null;
  if (!/^\d{1,3}$/.test(card.n)) return null;
  const total = setPrintedTotal(set);
  if (!Number.isInteger(total) || total < 1 || total > 999) return null;
  const printed = `${card.n.padStart(3, "0")}/${String(total).padStart(3, "0")}`;
  return printed === cardFraction(set, card) ? null : printed;
}

/**
 * Stable URL piece. Symbols that are not letters are spelled out so two Unown
 * and two Nidoran cards do not collapse into one slug.
 */
export function slugPart(value: string): string {
  const replaced = value
    .replace(/♂/g, "-m")
    .replace(/♀/g, "-f")
    .replace(/[δ∆Δ]/g, "-delta")
    .replace(/α/g, "-alpha")
    .replace(/β/g, "-beta")
    .replace(/γ/g, "-gamma")
    .replace(/★/g, "-star")
    .replace(/◇/g, "-prism")
    .replace(/!/g, "-excl")
    .replace(/\?/g, "-qmark")
    .replace(/['’]/g, "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  return replaced.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function cardSlug(setId: string, card: { n: string; name: string }): string {
  const number = slugPart(card.n);
  const name = slugPart(card.name);
  if (!number) return name ? `${setId}-card-${name}` : `${setId}-card`;
  return name ? `${setId}-${number}-${name}` : `${setId}-${number}`;
}

export function cardPath(setId: string, card: { n: string; name: string }): string {
  return `/cards/${cardSlug(setId, card)}`;
}

export function cardRowHref(locale: string, setId: string, card: { n: string; name: string }, _fallback?: string): string {
  return localePath(locale, cardPath(setId, card));
}

function setsLongestFirst(): CatalogSet[] {
  if (!setsLongest) {
    setsLongest = getSets()
      .slice()
      .sort((a, b) => b.id.length - a.id.length || a.id.localeCompare(b.id));
  }
  return setsLongest;
}

/** Every English card path, in set order. Cached after the first pass. */
export function listCardPaths(): string[] {
  if (pathCache) return pathCache;
  const paths: string[] = [];
  for (const set of getSets()) {
    const cards = getSetCards(set.id);
    if (!cards) continue;
    for (const card of cards) paths.push(cardPath(set.id, card));
  }
  pathCache = paths;
  return paths;
}

export function resolveCardSlug(slug: string): ResolvedCard | null {
  if (!SLUG.test(slug) || slug.length > 180) return null;
  for (const set of setsLongestFirst()) {
    if (!slug.startsWith(`${set.id}-`)) continue;
    const cards = getSetCards(set.id);
    if (!cards) return null;
    const rest = slug.slice(set.id.length + 1);
    let match: CatalogCard | null = null;
    let matchLen = -1;
    for (const card of cards) {
      const number = slugPart(card.n);
      if (!number) continue;
      if (rest === number || rest.startsWith(`${number}-`)) {
        if (number.length > matchLen) {
          match = card;
          matchLen = number.length;
        }
      }
    }
    if (!match) return null;
    return { set, card: match, canonical: cardSlug(set.id, match) };
  }
  return null;
}

export function cardIsHeld(held: Record<string, readonly string[]>, setId: string, number: string): boolean {
  return (held[setId] ?? []).some((value) => numbersMatch(number, value));
}

/** Joins translated printing-language names: German, or French and German. */
export function formatHeldLanguages(m: Messages, codes: readonly string[]): string {
  const names = codes
    .map((code) => m.printLanguages[code as keyof Messages["printLanguages"]] ?? code)
    .filter((name) => name.length > 0)
    .sort((a, b) => a.localeCompare(b));
  if (names.length <= 1) return names[0] ?? "";
  if (names.length === 2) return fill(m.cardPage.listTwo, { a: names[0] ?? "", b: names[1] ?? "" });
  const last = names.at(-1) ?? "";
  return fill(m.cardPage.listLast, { list: names.slice(0, -1).join(", "), last });
}

export function cardStatus(state: "ok" | "unconfigured" | "error", held: boolean): CardStatus {
  if (state === "error") return "unknown";
  return held ? "have" : "need";
}

function pairLine(pair: { t: string; v?: string }): string {
  return pair.v ? `${pair.t} ${pair.v}` : pair.t;
}

function speciesLinks(locale: Locale, card: CatalogCard): CardLink[] {
  const links: CardLink[] = [];
  for (const dex of card.dex ?? []) {
    if (!Number.isInteger(dex) || dex < 1 || dex > SPECIES_TOTAL) continue;
    links.push({
      href: localePath(locale, `/pokedex/${dex}`),
      name: `${speciesName(dex, locale)} (${formatDexNumber(dex)})`,
    });
  }
  return links;
}

function binderLinks(locale: Locale, m: Messages, set: CatalogSet, card: CatalogCard): CardLink[] {
  const links: CardLink[] = [
    {
      href: localePath(locale, `/collections/set/${set.id}`),
      name: fill(m.cardPage.setBinder, { name: set.name }),
    },
  ];
  const generations: number[] = [];
  for (const dex of card.dex ?? []) {
    if (!Number.isInteger(dex) || dex < 1 || dex > SPECIES_TOTAL) continue;
    const generation = generationOf(dex);
    if (generation && !generations.includes(generation)) generations.push(generation);
  }
  generations.sort((a, b) => a - b);
  for (const generation of generations) {
    links.push({
      href: localePath(locale, `/collections/generation/${generation}`),
      name: fill(m.cardPage.genBinder, { gen: generation, region: m.regions[generation - 1] ?? "" }),
    });
  }
  for (const theme of themesForCard(set.id, card.n)) {
    const copy = themeCopy(locale, theme.slug);
    if (!copy) continue;
    links.push({ href: localePath(locale, `/collections/themes/${theme.slug}`), name: copy.h1 });
  }
  return links;
}

function otherPrintings(setId: string, card: CatalogCard): LookupPrinting[] {
  const seen = new Set<string>();
  const current = `${setId}:${card.n}`;
  const out: LookupPrinting[] = [];
  for (const dex of card.dex ?? []) {
    for (const printing of printingsForDex(dex)) {
      const key = `${printing.s}:${printing.n}`;
      if (key === current || seen.has(key)) continue;
      seen.add(key);
      out.push(printing);
    }
  }
  return out;
}

function releaseYear(value: string | undefined): string {
  const year = value?.slice(0, 4) ?? "";
  return /^\d{4}$/.test(year) ? year : "";
}

function fullestDex(card: CatalogCard): { dex: number; count: number } | null {
  let best: { dex: number; count: number } | null = null;
  for (const dex of card.dex ?? []) {
    if (!Number.isInteger(dex) || dex < 1 || dex > SPECIES_TOTAL) continue;
    const count = printingsForDex(dex).length;
    if (!best || count > best.count) best = { dex, count };
  }
  return best;
}

function neighbor(locale: Locale, set: CatalogSet, card: CatalogCard | null, label: string): CardLink | null {
  if (!card) return null;
  return { href: localePath(locale, cardPath(set.id, card)), name: `${label}: ${card.n} ${card.name}` };
}

export function buildCardView(
  locale: Locale,
  m: Messages,
  set: CatalogSet,
  card: CatalogCard,
  status: CardStatus,
): CardView {
  const fraction = cardFraction(set, card);
  const printedFraction = printedCardFraction(set, card);
  const path = cardPath(set.id, card);
  const fullTitle = fill(m.cardPage.title, { name: card.name, fraction, set: set.name });
  const title = fullTitle.length <= 60 ? fullTitle : fill(m.cardPage.titleShort, { name: card.name, fraction });
  const description = cardMetaDescription(m, set, card, fraction);
  const imageAlt = fill(m.cardPage.imageAlt, {
    name: card.name,
    fraction: printedFraction ?? fraction,
    set: set.name,
  });
  const binders = binderLinks(locale, m, set, card);
  const species = speciesLinks(locale, card);
  const statusLine =
    status === "have" ? m.cardPage.statusHave : status === "need" ? m.cardPage.statusNeed : m.cardPage.statusUnknown;
  const story = buildCardStory(locale, m, set, card, statusLine);

  const facts: CardFact[] = [
    { label: m.cardPage.number, value: fraction },
    ...(printedFraction ? [{ label: m.cardPage.printedAs, value: printedFraction }] : []),
    { label: m.cardPage.set, value: set.name, href: localePath(locale, `/collections/set/${set.id}`) },
    { label: m.cardPage.series, value: set.series, href: localePath(locale, `/collections/series/${seriesSlug(set.series)}`) },
  ];
  if (set.releaseDate) facts.push({ label: m.cardPage.released, value: formatDay(set.releaseDate, locale) });
  if (card.r) facts.push({ label: m.cardPage.rarity, value: card.r });
  facts.push({ label: m.cardPage.supertype, value: supertypeLabel(m, card) });
  if (card.st?.length) facts.push({ label: m.cardPage.subtypes, value: card.st.join(", ") });
  if (card.hp) facts.push({ label: m.cardPage.hp, value: card.hp });
  if (card.ty?.length) facts.push({ label: m.cardPage.types, value: card.ty.join(", ") });
  if (card.a) {
    const illustrator = illustratorForName(card.a);
    facts.push({
      label: m.cardPage.illustrator,
      value: card.a,
      ...(illustrator ? { href: localePath(locale, illustratorPath(illustrator.slug)) } : {}),
    });
  }
  if (species.length) facts.push({ label: m.cardPage.pokedex, links: species });
  if (card.lv) facts.push({ label: m.cardPage.level, value: card.lv });
  if (card.ef) facts.push({ label: m.cardPage.evolvesFrom, value: card.ef });
  if (card.et?.length) facts.push({ label: m.cardPage.evolvesTo, value: card.et.join(", ") });
  if (card.w?.length) facts.push({ label: m.cardPage.weakness, value: card.w.map(pairLine).join(", ") });
  if (card.rs?.length) facts.push({ label: m.cardPage.resistance, value: card.rs.map(pairLine).join(", ") });
  if (card.rc != null) facts.push({ label: m.cardPage.retreat, value: String(card.rc) });
  if (card.rm) facts.push({ label: m.cardPage.regulation, value: card.rm });

  const cards = getSetCards(set.id) ?? [];
  const index = cards.findIndex((item) => item.n === card.n);
  const allOthers = otherPrintings(set.id, card);
  const fullest = fullestDex(card);
  const others = allOthers.slice(0, PRINTING_CAP).flatMap((printing) => {
    const printingSet = getSet(printing.s);
    if (!printingSet) return [];
    const named = { n: printing.n, name: printing.m };
    return [
      {
        href: localePath(locale, cardPath(printing.s, named)),
        name: named.name,
        fraction: cardFraction(printingSet, named),
        setName: printingSet.name,
        year: releaseYear(printingSet.releaseDate),
        image: cardImageUrl(printing.s, printing.n, "low"),
        alt: fill(m.cardPage.imageAlt, {
          name: named.name,
          fraction: printedCardFraction(printingSet, named) ?? cardFraction(printingSet, named),
          set: printingSet.name,
        }),
      },
    ];
  });
  const morePrintings =
    fullest && allOthers.length > PRINTING_CAP
      ? { href: localePath(locale, `/pokedex/${fullest.dex}`), count: fullest.count }
      : null;

  return {
    path,
    title,
    description,
    paragraph: story.paragraphs.join(" "),
    paragraphs: story.paragraphs,
    faqs: story.faqs,
    fraction,
    printedFraction,
    imageAlt,
    status,
    crumbs: [
      { name: m.nav.home, href: localePath(locale, "/") },
      { name: m.nav.collections, href: localePath(locale, "/collections") },
      { name: set.series, href: localePath(locale, `/collections/series/${seriesSlug(set.series)}`) },
      { name: set.name, href: localePath(locale, `/collections/set/${set.id}`) },
      { name: `${card.name} ${fraction}`, href: localePath(locale, path) },
    ],
    facts,
    binders,
    others,
    morePrintings,
    prev: neighbor(locale, set, index > 0 ? (cards[index - 1] ?? null) : null, m.cardPage.previous),
    next: neighbor(locale, set, index >= 0 ? (cards[index + 1] ?? null) : null, m.cardPage.next),
  };
}

function supertypeLabel(m: Messages, card: CatalogCard): string {
  if (card.k === "p") return m.checklist.supertypeP;
  if (card.k === "t") return m.checklist.supertypeT;
  if (card.k === "e") return m.checklist.supertypeE;
  return m.checklist.supertypeO;
}

export function metaDescription(paragraph: string): string {
  if (paragraph.length <= 240) return paragraph;
  const cut = paragraph.slice(0, 237);
  const space = cut.lastIndexOf(" ");
  return `${(space > 140 ? cut.slice(0, space) : cut).trimEnd()}…`;
}

const DESCRIPTION_LIMIT = 160;

function cardKindWord(m: Messages, card: CatalogCard): string {
  if (card.k === "p") return m.cardPage.metaPokemon;
  if (card.k === "t") return m.cardPage.metaTrainer;
  if (card.k === "e") return m.cardPage.metaEnergy;
  return m.cardPage.metaOther;
}

function cardKindPhrase(m: Messages, card: CatalogCard): string {
  const type = card.ty?.length ? card.ty.join(" & ") : "";
  const rarity = card.r ?? "";
  if (type && rarity) return fill(m.cardPage.metaRarityType, { rarity, type });
  if (type) return fill(m.cardPage.metaTypeOnly, { type });
  if (rarity) return fill(m.cardPage.metaRarityKind, { rarity, kind: cardKindWord(m, card) });
  return fill(m.cardPage.metaPlain, { kind: cardKindWord(m, card) });
}

/**
 * Snippet for a card page. Year, type, and illustrator are included when the
 * catalog has them and the sentence still fits. The title and the URL stay
 * on the unpadded collector number.
 */
export function cardMetaDescription(m: Messages, set: CatalogSet, card: CatalogCard, fraction: string): string {
  const shown = printedCardFraction(set, card) ?? fraction;
  const year = releaseYear(set.releaseDate);
  const lead = (withYear: boolean) =>
    fill(m.cardPage.metaLead, {
      name: card.name,
      fraction: shown,
      set: set.name,
      year: withYear && year ? fill(m.cardPage.metaYear, { year }) : "",
    });
  const withKind = (withYear: boolean) => fill(m.cardPage.metaKind, { lead: lead(withYear), kind: cardKindPhrase(m, card) });
  const withArtist = (base: string) =>
    card.a ? fill(m.cardPage.metaIllustrated, { base, illustrator: card.a }) : base;
  const withTail = (base: string) => fill(m.cardPage.metaTail, { base });
  const full = withTail(withArtist(withKind(true)));
  if (full.length <= DESCRIPTION_LIMIT) return full;
  const artist = withArtist(withKind(true));
  if (artist.length <= DESCRIPTION_LIMIT) return artist;
  const kind = withKind(true);
  if (kind.length <= DESCRIPTION_LIMIT) return kind;
  const undated = withArtist(withKind(false));
  if (undated.length <= DESCRIPTION_LIMIT) return undated;
  const short = withKind(false);
  if (short.length <= DESCRIPTION_LIMIT) return short;
  const bare = lead(false);
  if (bare.length <= DESCRIPTION_LIMIT) return bare;
  return `${bare.slice(0, DESCRIPTION_LIMIT - 1).trimEnd()}…`;
}

/** Title, description, canonical, robots, and hreflang for one card URL. */
export function cardPageMetadata(locale: Locale, m: Messages, resolved: ResolvedCard, status: CardStatus): Metadata {
  const view = buildCardView(locale, m, resolved.set, resolved.card, status);
  const indexed = cardPageIndexed(locale);
  const photo =
    cardImageKind(resolved.set.id, resolved.card.n) === "tcgdex"
      ? cardImageUrl(resolved.set.id, resolved.card.n, "high")
      : null;
  return pageMetadata(locale, view.path, view.title, view.description, {
    index: indexed,
    hreflang: indexed,
    locales: CARD_INDEX_LOCALES,
    fitTitle: true,
    ...(photo
      ? {
          image: photo,
          imageAlt: view.imageAlt,
          imageWidth: 600,
          imageHeight: 825,
        }
      : {}),
  });
}

export function cardPageGraph(locale: Locale, view: CardView): Graph {
  const page = pageNode({
    kind: "WebPage",
    locale,
    path: view.path,
    name: view.title,
    description: view.description,
  });
  const slug = view.path.startsWith("/cards/") ? view.path.slice("/cards/".length) : "";
  const resolved = resolveCardSlug(slug);
  const photo =
    resolved && cardImageKind(resolved.set.id, resolved.card.n) === "tcgdex"
      ? cardImageUrl(resolved.set.id, resolved.card.n, "high")
      : null;
  if (photo) {
    const image = {
      "@type": "ImageObject" as const,
      contentUrl: photo,
      url: photo,
      caption: view.imageAlt,
      creditText: "Image: TCGdex",
      copyrightNotice: "© Nintendo / Creatures / GAME FREAK",
    };
    Object.assign(page, { image, primaryImageOfPage: image });
  }
  return ldGraph([page, breadcrumbNode(view.crumbs)]);
}
