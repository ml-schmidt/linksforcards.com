import { themeCopy } from "@/content/theme-copy";
import { renderCardStory } from "@/content/card-story";
import type { CardStory, ComparedPrinting, FieldCompare, SpeciesFact } from "@/content/card-story-types";
import { artistCardCount, dexesForPrintedName, printingsForDex } from "./card-lookup";
import { getSet, getSetCards, speciesName, type CatalogCard, type CatalogSet } from "./catalog";
import { formatEnergyList, separateEnergyWords } from "./energy-text";
import { fill, formatDay, formatInt } from "./format";
import { formatDexNumber, generationOf, SPECIES_TOTAL } from "./generations";
import type { Messages } from "./i18n";
import type { Locale } from "./locales";
import { themesForCard } from "./themes";

export type CardFaq = { q: string; a: string };

function variantOf(setId: string, number: string): 0 | 1 {
  let hash = 2166136261;
  const key = `${setId}\0${number}`;
  for (let index = 0; index < key.length; index += 1) {
    hash ^= key.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) % 2 === 0 ? 0 : 1;
}

function compare(left: string | number | null, right: string | number | null): FieldCompare {
  if (left == null || right == null || left === "" || right === "") return "skip";
  return left === right ? "same" : "diff";
}

function yearOf(setId: string): string {
  const year = getSet(setId)?.releaseDate?.slice(0, 4) ?? "";
  return /^\d{4}$/.test(year) ? year : "";
}

function pairLine(pair: { t: string; v?: string }): string {
  return pair.v ? `${pair.t} ${pair.v}` : pair.t;
}

export function buildCardStory(
  locale: Locale,
  m: Messages,
  set: CatalogSet,
  card: CatalogCard,
  statusLine: string,
): { paragraphs: string[]; faqs: CardFaq[] } {
  const cards = getSetCards(set.id) ?? [];
  const index = cards.findIndex((item) => item.n === card.n);
  const previous = index > 0 ? cards[index - 1] : null;
  const following = index >= 0 && index < cards.length - 1 ? cards[index + 1] : null;
  const numeric = /^(\d+)/.exec(card.n);
  const printed = set.printed && set.printed > 0 ? set.printed : null;
  const species: SpeciesFact[] = [];
  for (const dex of card.dex ?? []) {
    if (!Number.isInteger(dex) || dex < 1 || dex > SPECIES_TOTAL) continue;
    const generation = generationOf(dex);
    if (!generation) continue;
    const printings = printingsForDex(dex);
    const listed = printings.some((printing) => printing.s === set.id && printing.n === card.n);
    const total = printings.length;
    species.push({
      name: speciesName(dex, locale),
      dexLabel: formatDexNumber(dex),
      generation,
      region: m.regions[generation - 1] ?? "",
      total,
      others: listed ? Math.max(0, total - 1) : total,
      totalLabel: formatInt(total, locale),
      othersLabel: formatInt(listed ? Math.max(0, total - 1) : total, locale),
    });
  }

  const primaryDex = card.dex?.find((dex) => Number.isInteger(dex) && dex >= 1 && dex <= SPECIES_TOTAL) ?? null;
  const others = primaryDex
    ? printingsForDex(primaryDex).filter((printing) => !(printing.s === set.id && printing.n === card.n))
    : [];
  const years = others.map((printing) => yearOf(printing.s)).filter(Boolean).sort();
  let differentHp = 0;
  let hpComparable = 0;
  if (card.hp) {
    for (const printing of others) {
      if (!printing.hp) continue;
      hpComparable += 1;
      if (printing.hp !== card.hp) differentHp += 1;
    }
  }
  const first = others[0];
  let earliest: ComparedPrinting | null = null;
  let hp: FieldCompare = "skip";
  let rarity: FieldCompare = "skip";
  let artist: FieldCompare = "skip";
  let regulation: FieldCompare = "skip";
  let retreat: FieldCompare = "skip";
  if (first) {
    const otherSet = getSet(first.s);
    const otherPrinted = otherSet && otherSet.printed && otherSet.printed > 0 ? otherSet.printed : otherSet?.count;
    earliest = {
      name: first.m,
      setName: otherSet?.name ?? first.s,
      fraction: otherPrinted ? `${first.n}/${otherPrinted}` : first.n,
      year: yearOf(first.s),
      hp: first.hp ?? null,
      rarity: first.r ?? null,
      artist: first.a ?? null,
      regulation: first.rm ?? null,
      retreat: first.rc ?? null,
    };
    hp = compare(card.hp ?? null, earliest.hp);
    rarity = compare(card.r ?? null, earliest.rarity);
    artist = compare(card.a ?? null, earliest.artist);
    regulation = compare(card.rm ?? null, earliest.regulation);
    retreat = compare(card.rc ?? null, earliest.retreat);
  }

  const fromDex = card.ef ? dexesForPrintedName(card.ef) : [];
  const evolvesFromSpecies =
    card.ef && fromDex.length === 1
      ? { printed: card.ef, name: speciesName(fromDex[0] ?? 0, locale), dexLabel: formatDexNumber(fromDex[0] ?? 0) }
      : null;
  const evolvesTo = (card.et ?? []).map((printedName) => {
    const dexes = dexesForPrintedName(printedName);
    if (dexes.length !== 1) return { printed: printedName, name: null, dexLabel: null };
    const dex = dexes[0] ?? 0;
    return { printed: printedName, name: speciesName(dex, locale), dexLabel: formatDexNumber(dex) };
  });

  const artistTotalCount = card.a ? artistCardCount(card.a) : 0;
  const artistOthers = card.a ? Math.max(0, artistTotalCount - 1) : null;
  const themes = themesForCard(set.id, card.n)
    .map((theme) => themeCopy(locale, theme.slug)?.h1)
    .filter((name): name is string => Boolean(name));
  const genBinders: string[] = [];
  const seenGen = new Set<number>();
  for (const dex of card.dex ?? []) {
    const generation = generationOf(dex);
    if (!generation || seenGen.has(generation)) continue;
    seenGen.add(generation);
    genBinders.push(fill(m.cardPage.genBinder, { gen: generation, region: m.regions[generation - 1] ?? "" }));
  }

  const story: CardStory = {
    variant: variantOf(set.id, card.n),
    name: card.name,
    fraction: `${card.n}/${printed ?? set.count}`,
    setName: set.name,
    series: set.series,
    release: set.releaseDate ? formatDay(set.releaseDate, locale) : null,
    printed,
    count: set.count,
    countLabel: formatInt(set.count, locale),
    place: index >= 0 ? index + 1 : 1,
    placeLabel: formatInt(index >= 0 ? index + 1 : 1, locale),
    secret: Boolean(printed && numeric && Number(numeric[1]) > printed),
    prev: previous ? { number: previous.n, name: previous.name } : null,
    next: following ? { number: following.n, name: following.name } : null,
    kind: card.k,
    subtypes: card.st ?? [],
    types: card.ty ?? [],
    hp: card.hp ?? null,
    rarity: card.r ?? null,
    artist: card.a ?? null,
    artistOthers,
    artistOthersLabel: artistOthers == null ? null : formatInt(artistOthers, locale),
    level: card.lv ?? null,
    species,
    evolvesFrom: card.ef ?? null,
    evolvesFromSpecies,
    evolvesTo,
    attacks: (card.atk ?? []).map((attack) => ({
      name: attack.n,
      damage: attack.d ?? null,
      cost: attack.c?.length ? formatEnergyList(attack.c) : null,
      text: attack.x ? separateEnergyWords(attack.x) : null,
    })),
    abilities: (card.ab ?? []).map((ability) => ({
      name: ability.n,
      type: ability.y ?? null,
      text: ability.x ? separateEnergyWords(ability.x) : null,
    })),
    weaknesses: (card.w ?? []).map(pairLine),
    resistances: (card.rs ?? []).map(pairLine),
    retreat: card.rc ?? null,
    flavor: card.fl ?? null,
    regulation: card.rm ?? null,
    rules: (card.ru ?? []).map((rule) => separateEnergyWords(rule)),
    ancient: card.ag ? { name: card.ag.n, text: separateEnergyWords(card.ag.x) } : null,
    otherSets: new Set(others.map((printing) => printing.s)).size,
    yearFrom: years[0] ?? null,
    yearTo: years.at(-1) ?? null,
    differentHp: card.hp && hpComparable > 0 ? differentHp : null,
    differentHpLabel: card.hp && hpComparable > 0 ? formatInt(differentHp, locale) : null,
    earliest,
    hpCompare: hp,
    rarityCompare: rarity,
    artistCompare: artist,
    regulationCompare: regulation,
    retreatCompare: retreat,
    setBinder: fill(m.cardPage.setBinder, { name: set.name }),
    genBinders,
    themes,
    statusLine,
  };
  return renderCardStory(locale, story);
}
