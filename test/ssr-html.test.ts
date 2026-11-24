import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Checklist } from "../src/components/site/checklist";
import { LanguageSwitcher } from "../src/components/site/language-switcher";
import { PokedexBrowser } from "../src/components/site/pokedex-browser";
import { getMessages } from "../src/lib/i18n";
import { LOCALES } from "../src/lib/locales";
import { localePath } from "../src/lib/routing";

describe("public HTML without JavaScript", () => {
  it("puts every language on a real link inside the menu", () => {
    const html = renderToStaticMarkup(
      createElement(LanguageSwitcher, { locale: "uk", label: "Language", bare: "/collections/set/base1" }),
    );
    expect(html).toContain("<details");
    expect(html).toContain("<summary>");
    expect(html).not.toMatch(/<ul[^>]*\shidden/);
    expect(html).toContain(">English (US)</a>");
    for (const locale of LOCALES) {
      expect(html).toContain(`href="${localePath(locale, "/collections/set/base1")}"`);
    }
    expect(html).toContain('href="/collections/set/base1"');
    expect(html).not.toContain('href="/us/');
    const cards = renderToStaticMarkup(
      createElement(LanguageSwitcher, {
        locale: "uk",
        label: "Language",
        bare: "/cards/base1-4-charizard",
      }),
    );
    expect(cards).toContain('href="/cards/base1-4-charizard"');
    expect(cards).toContain('href="/uk/cards/base1-4-charizard"');
    expect(cards).toContain('href="/de/cards/base1-4-charizard"');
    expect(cards).toContain('href="/fr/cards/base1-4-charizard"');
    expect(cards).toContain('href="/sv/cards/base1-4-charizard"');
  });

  it("renders every checklist row in the first markup, including rows past the old page size", () => {
    const rows = Array.from({ length: 60 }, (_, index) => ({
      key: String(index + 1),
      title: `Card ${index + 1}`,
      detail: "Base",
      have: false,
    }));
    const html = renderToStaticMarkup(createElement(Checklist, { rows, labels: getMessages("uk").checklist }));
    expect(html).toContain("Card 1");
    expect(html).toContain("Card 48");
    expect(html).toContain("Card 60");
    expect(html).toContain('id="line-60"');
    expect(html.match(/<li /g)?.length).toBe(60);
  });

  it("loads the first row of card images immediately and leaves the rest lazy", () => {
    const rows = Array.from({ length: 8 }, (_, index) => ({
      key: String(index + 1),
      title: `Card ${index + 1}`,
      detail: "Base",
      have: false,
      image: `https://assets.tcgdex.net/en/base/base1/${index + 1}/low.webp`,
      alt: `Card ${index + 1}`,
    }));
    const html = renderToStaticMarkup(createElement(Checklist, { rows, labels: getMessages("us").checklist }));
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
    expect(images).toHaveLength(8);
    expect(images.filter((tag) => tag.includes('loading="eager"'))).toHaveLength(6);
    expect(images.filter((tag) => tag.includes('loading="lazy"'))).toHaveLength(2);
    expect(images.filter((tag) => /fetchpriority="high"/i.test(tag))).toHaveLength(1);
    expect(html).not.toContain("/_next/image");
  });

  it("lists every species link on the Pokédex index", () => {
    const html = renderToStaticMarkup(
      createElement(PokedexBrowser, {
        locale: "de",
        entries: [
          { dex: 1, name: "Bisasam" },
          { dex: 25, name: "Pikachu" },
          { dex: 151, name: "Mew" },
        ],
        labels: { search: "Suche", placeholder: "Name", empty: "Nichts", letters: "Buchstaben" },
      }),
    );
    expect(html).toContain('href="/de/pokedex/1"');
    expect(html).toContain('href="/de/pokedex/25"');
    expect(html).toContain('href="/de/pokedex/151"');
    expect(html).toContain('href="#dex-letter-B"');
    expect(html).toContain('id="dex-letter-P"');
  });
});
