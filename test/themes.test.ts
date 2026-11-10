import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { themeCopy, themeCopyLocales } from "../src/content/theme-copy";
import { getSetCards } from "../src/lib/catalog";
import { fill, formatDay, formatInt } from "../src/lib/format";
import { clipOnWord } from "../src/lib/snippets";
import { LOCALES, SPECIES_INDEX_LOCALES } from "../src/lib/locales";
import { bulkTone, getTheme, getThemes, themeFromCurated, themeIndexed, themeHreflangLocales } from "../src/lib/themes";
import { loadCatalogCards, themeRule } from "../scripts/build-themes.mjs";

const plural: Record<string, RegExp[]> = {
  en: [/\bwe\b/i, /\bour\b/i, /\bours\b/i],
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

describe("themed binders", () => {
  it("regenerates the first batch from the pinned dataset and leaves room for a curated list", () => {
    const raw = JSON.parse(readFileSync(path.join(process.cwd(), "data/catalog/themes.json"), "utf8")) as {
      sourceCommit: string;
      themes: { slug: string }[];
    };
    expect(raw.sourceCommit).toBe("39a26a144c8b6ef6c2fb17b2c29d0bb7121e3a11");
    expect(JSON.stringify(raw)).not.toMatch(/tcgplayer|cardmarket|prices|images/i);
    const themes = getThemes();
    expect(themes.map((theme) => theme.slug)).toEqual([
      "pikachu",
      "eeveelutions",
      "eevee",
      "gastly-line",
      "snorlax",
      "charizard",
      "yuka-morii",
      "mitsuhiro-arita",
      "trainers-pokemon",
      "team-rocket",
      "delta-species",
      "baby-pokemon",
      "paldea-starters",
      "halloween-ghosts",
      "pikachu-friends",
      "paradox-pokemon",
      "kanto-starters",
      "fossil-pokemon",
      "legendary-birds",
      "sweets-and-snacks",
      "dragons",
      "winter-ice",
      "legendary-beasts",
      "mew-mewtwo",
      "mythical-modern",
      "galarian-forms",
      "alolan-forms",
      "hisuian-paldean-forms",
      "mega-evolution",
      "johto-starters",
      "hoenn-starters",
      "sinnoh-starters",
      "unova-starters",
      "kalos-starters",
      "alola-starters",
      "galar-starters",
      "dratini-line",
      "magikarp-gyarados",
      "lucario-riolu",
      "gardevoir-line",
      "greninja-line",
      "jigglypuff-line",
      "psyduck",
      "unown",
      "mimikyu",
      "ditto",
      "winter-holiday",
      "bug-catcher",
      "pink-pokemon",
      "fire-basics-modern",
      "special-illustration-rares",
      "tera-pokemon",
      "trainer-gallery",
      "ultra-beasts",
      "tomokazu-komiya",
      "saya-tsuruta",
      "sowsow",
      "atsuko-nishida",
      "atsuko-nishida-later",
      "kanto-gym-leaders",
      "misty",
      "erika",
      "brock",
      "sabrina",
      "blaine",
      "lt-surge",
      "giovanni",
      "n-pokemon",
      "cynthia",
      "hop",
      "lillie",
      "iono",
      "ethan",
      "marnie",
      "steven",
      "team-aqua-magma",
      "team-plasma",
      "modern-villains",
      "stadiums",
      "poke-balls",
      "professors",
      "mcdonalds-promos",
      "pop-series",
      "card-number-one",
      "first-151",
      "living-dex-151",
      "living-dex-paldea",
      "box-legendaries",
      "pseudo-legendaries",
      "latias-latios",
      "weather-trio",
      "creation-trio",
      "swords-of-justice",
      "tapus",
      "lake-guardians",
      "dog-pokemon",
      "cat-pokemon",
      "bird-pokemon",
      "tiny-pokemon",
      "giant-pokemon",
      "nap-time",
      "night-pokemon",
      "beach-pokemon",
      "flower-pokemon",
      "berry-lovers",
      "vmax",
      "rapid-strike",
      "single-strike",
      "level-x",
      "prism-star",
      "break",
      "pokemon-legend",
      "meowth",
      "magnemite-line",
      "vulpix-line",
      "slowpoke-line",
      "clefairy-line",
      "dedenne-morpeko",
      "rayquaza",
      "togepi-line",
      "lapras",
      "rotom",
      "lugia",
    ]);
    expect(themes.map((theme) => theme.total)).toEqual([
      213, 386, 85, 119, 61, 107, 205, 722, 537, 273, 194, 177, 68, 190, 261, 130, 269, 214, 132, 199, 120, 180, 87, 146,
      238, 141, 134, 115, 119, 163, 196, 139, 125, 130, 105, 109, 109, 102, 92, 140, 69, 73, 62, 96, 34, 32, 83, 281, 229,
      206, 232, 146, 80, 87, 249, 124, 105, 296, 113, 293, 52, 47, 40, 36, 33, 30, 26, 41, 30, 24, 24, 22, 20, 17, 14, 108,
      122, 42, 265, 122, 86, 136, 153, 161, 151, 151, 120, 117, 110, 67, 125, 111, 75, 55, 27, 137, 81, 157, 147, 135, 171,
      110, 60, 201, 212, 210, 158, 147, 78, 56, 36, 20, 112, 119, 108, 93, 84, 65, 60, 55, 50, 50, 39,
    ]);
    const pikachu = getTheme("pikachu");
    const charizard = getTheme("charizard");
    expect(pikachu?.cards.some((card) => card.setId === "base1" && card.number === "58")).toBe(true);
    expect(charizard?.cards.some((card) => card.setId === "base1" && card.number === "4")).toBe(true);
    expect(charizard && charizard.bulk != null && bulkTone(charizard.bulk, charizard.total)).toBe("rare");
    expect(getTheme("yuka-morii") && bulkTone(getTheme("yuka-morii")!.bulk ?? 0, getTheme("yuka-morii")!.total)).toBe("mostly");
    const eeveeIds = new Set((getTheme("eevee")?.cards ?? []).map((card) => `${card.setId}:${card.number}`));
    expect((getTheme("eeveelutions")?.cards ?? []).filter((card) => eeveeIds.has(`${card.setId}:${card.number}`))).toHaveLength(eeveeIds.size);
    const delta = getTheme("delta-species");
    const deltaCard = delta?.cards
      .map((card) => getSetCards(card.setId)?.find((item) => item.n === card.number))
      .find((card) => card?.name.includes("δ"));
    expect(deltaCard?.name).toMatch(/δ/);
    expect(themes.some((theme) => /sleep|cameo/i.test(theme.slug))).toBe(false);
    const curated = themeFromCurated({ slug: "sleeping", cards: ["base1:58"] }, new Set(themes.map((theme) => theme.slug)));
    expect(curated).toMatchObject({ kind: "curated", total: 1, bulk: null, chase: null, setCount: 1 });
    expect(() => themeFromCurated({ slug: "pikachu", cards: ["base1:58"] }, new Set(["pikachu"]))).toThrow(/duplicates/);
    expect(() => themeFromCurated({ slug: "sleeping", cards: ["base1:missing"] }, new Set())).toThrow(/unknown card/);
  });

  it("indexes species themes only where the name is translated, and concept themes everywhere", () => {
    const pikachu = getTheme("pikachu");
    const yuka = getTheme("yuka-morii");
    expect(pikachu && themeHreflangLocales(pikachu)).toEqual(SPECIES_INDEX_LOCALES);
    expect(yuka && themeHreflangLocales(yuka)).toBeUndefined();
    for (const locale of LOCALES) {
      expect(pikachu && themeIndexed(pikachu, locale)).toBe(SPECIES_INDEX_LOCALES.includes(locale as (typeof SPECIES_INDEX_LOCALES)[number]));
      expect(yuka && themeIndexed(yuka, locale)).toBe(true);
    }
    for (const theme of getThemes()) {
      const species = theme.index === "species";
      expect(themeHreflangLocales(theme)).toEqual(species ? SPECIES_INDEX_LOCALES : undefined);
      for (const locale of LOCALES) {
        const indexed = species ? SPECIES_INDEX_LOCALES.includes(locale as (typeof SPECIES_INDEX_LOCALES)[number]) : true;
        expect(themeIndexed(theme, locale), `${theme.slug}/${locale}`).toBe(indexed);
      }
    }
  });

  it("selects the new binders by dex, printed type, subtype, rarity, and series", async () => {
    const cards = await loadCatalogCards();
    const rule = (slug: string) => {
      const theme = themeRule(slug);
      if (!theme) throw new Error(slug);
      return theme.test;
    };
    for (const theme of getThemes()) {
      const spec = themeRule(theme.slug);
      const chosen = spec?.select ? spec.select(cards) : cards.filter(spec?.test ?? (() => false));
      expect(chosen, theme.slug).toHaveLength(theme.total);
    }
    const living = themeRule("living-dex-151")?.select?.(cards) ?? [];
    expect(living.map((card) => card.dex[0]).sort((a, b) => a - b)).toEqual(Array.from({ length: 151 }, (_, index) => index + 1));
    expect(living.every((card) => card.series === "Scarlet & Violet" || card.series === "Mega Evolution")).toBe(true);
    expect(getTheme("nap-time")?.slug).toBe("nap-time");
    const sleepy = cards.find((card) => card.attacks.some((name) => /\bSleep\b/.test(name)));
    const resting = cards.find(
      (card) => card.attacks.some((name) => /\bRest\b/.test(name)) && !card.attacks.some((name) => /\b(?:Nap|Snore|Yawn|Sleep|Sleepy|Doze|Dozing|Slumber|Lullaby)\b/i.test(name)),
    );
    expect(sleepy && themeRule("nap-time")?.test(sleepy)).toBe(true);
    expect(resting && themeRule("nap-time")?.test(resting)).toBe(false);
    expect(cards.filter(themeRule("vmax")?.test ?? (() => false)).every((card) => card.subtypes.includes("VMAX"))).toBe(true);
    const knightOnly = cards.find((card) => card.flavor.includes("Corviknight") && !/\b(?:night|nights|moon|moons|moonlight|moonlit|nocturnal)\b/i.test(card.flavor));
    expect(knightOnly && themeRule("night-pokemon")?.test(knightOnly)).toBe(false);
    const crownZenithDragon = cards.find((card) => card.setId === "swsh12pt5" && card.types.includes("Dragon"));
    expect(crownZenithDragon?.series).toBe("Sword & Shield");
    expect(rule("dragons")(crownZenithDragon!)).toBe(false);
    expect(cards.some((card) => rule("dragons")(card) && card.series === "Scarlet & Violet")).toBe(true);
    const fireStage = cards.find(
      (card) => card.types.includes("Fire") && card.subtypes.includes("Stage 1") && card.series === "Scarlet & Violet",
    );
    expect(fireStage).toBeTruthy();
    expect(rule("fire-basics-modern")(fireStage!)).toBe(false);
    expect(cards.filter(rule("fire-basics-modern")).every((card) => card.types.includes("Fire") && card.subtypes.includes("Basic"))).toBe(true);
    expect(cards.filter(rule("tera-pokemon")).every((card) => card.subtypes.includes("Tera"))).toBe(true);
    const oldPumpkaboo = cards.find((card) => card.dex.includes(710) && card.series === "XY");
    expect(rule("halloween-ghosts")(oldPumpkaboo!)).toBe(true);
    const chaseGhost = cards.find(
      (card) =>
        card.series === "Scarlet & Violet" &&
        card.pokemon &&
        card.dex.some((number) => number === 94) &&
        !["Common", "Uncommon", "Rare"].includes(card.rarity),
    );
    expect(chaseGhost).toBeTruthy();
    expect(rule("halloween-ghosts")(chaseGhost!)).toBe(false);
    const megaSignal = cards.find((card) => card.name === "Mega Signal");
    const xyMega = cards.find((card) => card.series === "XY" && card.subtypes.includes("MEGA"));
    expect(rule("mega-evolution")(megaSignal!)).toBe(true);
    expect(rule("mega-evolution")(xyMega!)).toBe(false);
    const oldMew = cards.find(
      (card) => card.dex.includes(151) && !["Sword & Shield", "Scarlet & Violet", "Mega Evolution"].includes(card.series),
    );
    expect(oldMew).toBeTruthy();
    expect(rule("mythical-modern")(oldMew!)).toBe(false);
    expect(cards.some((card) => rule("mythical-modern")(card) && card.series === "Scarlet & Violet")).toBe(true);
    const nishida = cards.filter((card) => card.artist === "atsuko nishida");
    const early = nishida.filter(rule("atsuko-nishida"));
    const later = nishida.filter(rule("atsuko-nishida-later"));
    expect(early.length + later.length).toBe(nishida.length);
    expect(early.some((card) => later.includes(card))).toBe(false);
    expect(early.every((card) => card.series !== "Black & White" && card.series !== "Scarlet & Violet")).toBe(true);
    expect(later.some((card) => card.series === "Black & White")).toBe(true);
    expect(cards.filter(rule("galarian-forms")).every((card) => card.name.includes("Galarian"))).toBe(true);
    expect(cards.filter(rule("special-illustration-rares")).every((card) => card.rarity === "Special Illustration Rare")).toBe(true);
  });

  it("keeps the target phrases and the first-person voice in every language", () => {
    expect([...themeCopyLocales()].sort()).toEqual([...LOCALES].sort());
    expect(themeCopy("us", "pikachu")?.title).toMatch(/all pikachu cards/i);
    expect(themeCopy("us", "pikachu")?.title).toMatch(/master set list/i);
    expect(themeCopy("us", "pikachu")?.title).toMatch(/checklist/i);
    expect(themeCopy("de", "pikachu")?.title).toMatch(/alle pikachu karten liste/i);
    expect(themeCopy("de", "charizard")?.title).toMatch(/alle glurak karten übersicht/i);
    expect(themeCopy("de", "eevee")?.title).toMatch(/alle evoli karten liste/i);
    expect(themeCopy("de", "eeveelutions")?.title).toMatch(/alle evoli karten liste/i);
    expect(themeCopy("de", "team-rocket")?.title).toMatch(/team rocket kartenliste/i);
    expect(themeCopy("fr", "pikachu")?.title).toMatch(/toutes les cartes pikachu/i);
    expect(themeCopy("fr", "charizard")?.title).toMatch(/dracaufeu/i);
    expect(themeCopy("fr", "eevee")?.title).toMatch(/évoli/i);
    expect(themeCopy("es", "pikachu")?.title).toMatch(/todas las cartas de pikachu/i);
    expect(themeCopy("it", "pikachu")?.title).toMatch(/tutte le carte pikachu/i);
    for (const locale of LOCALES) {
      const voice = locale === "us" || locale === "uk" ? "en" : locale;
      for (const theme of getThemes()) {
        const copy = themeCopy(locale, theme.slug);
        expect(copy, `${locale}/${theme.slug}`).toBeTruthy();
        const text = `${copy?.title}\n${copy?.h1}\n${copy?.description}\n${copy?.lede}`;
        expect(text).toContain("{total}");
        expect(text).not.toMatch(/[$€£]/);
        for (const pattern of plural[voice] ?? []) expect(text, `${locale}/${theme.slug}`).not.toMatch(pattern);
      }
    }
  });

  it("does not repeat the title in the meta description, and stays within 160 characters", () => {
    const eevee = getTheme("eeveelutions");
    const copy = themeCopy("us", "eeveelutions");
    if (!eevee || !copy) throw new Error("missing eeveelutions");
    const filled = clipOnWord(
      fill(copy.description, {
        total: formatInt(eevee.total, "us"),
        sets: formatInt(eevee.setCount, "us"),
        first: formatDay(eevee.first, "us"),
        last: formatDay(eevee.last, "us"),
      }),
      160,
    );
    expect(filled.startsWith("Eevee and the eight evolutions share this binder.")).toBe(true);
    expect(filled).not.toContain(copy.title);
    expect(filled.length).toBeLessThanOrEqual(160);
    for (const locale of LOCALES) {
      for (const theme of getThemes()) {
        const item = themeCopy(locale, theme.slug);
        if (!item) throw new Error(`missing ${locale}/${theme.slug}`);
        const description = clipOnWord(
          fill(item.description, {
            total: formatInt(theme.total, locale),
            sets: formatInt(theme.setCount, locale),
            first: formatDay(theme.first, locale),
            last: formatDay(theme.last, locale),
          }),
          160,
        );
        const raw = fill(item.description, {
          total: formatInt(theme.total, locale),
          sets: formatInt(theme.setCount, locale),
          first: formatDay(theme.first, locale),
          last: formatDay(theme.last, locale),
        });
        expect(description.length, `${locale}/${theme.slug}`).toBeLessThanOrEqual(160);
        expect(description.includes(item.title), `${locale}/${theme.slug}`).toBe(false);
        expect(raw, `${locale}/${theme.slug}`).toMatch(/[.!?]/);
      }
    }
  });
});
