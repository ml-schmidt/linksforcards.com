import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { PrintableSheet } from "../src/components/site/printable-sheet";
import { renderChecklistPdf } from "../src/lib/checklist-pdf";
import { checklistSitemapPaths, checklistStaticParams, getChecklist, rarityOf } from "../src/lib/checklists";
import { getSetCards, getSets } from "../src/lib/catalog";
import { resolveLocaleRequest } from "../src/lib/routing";
import { renderUrlset, sitemapEntries } from "../src/lib/sitemap-data";
import { absoluteUrl } from "../src/lib/site";

describe("printable checklists", () => {
  it("reads rarity from the catalog card", () => {
    const base = getSetCards("base1");
    expect(base?.[3]?.r).toBe("Rare Holo");
    expect(rarityOf("base1", "4")).toBe("Rare Holo");
    expect(rarityOf("base1", "58")).toBe("Common");
    expect(rarityOf("base1", "97")).toBe("");
    for (const set of getSets()) {
      for (const card of getSetCards(set.id) ?? []) {
        expect(card.r ?? "", `${set.id} ${card.n}`).not.toMatch(/\$|tcgplayer|cardmarket/i);
      }
    }
  });

  it("builds a Base set list, a Pikachu list, and a modern set in English and German", () => {
    const base = getChecklist("us", "set", "base1");
    const pikachu = getChecklist("us", "theme", "pikachu");
    const modern = getChecklist("us", "set", "sv3pt5");
    const german = getChecklist("de", "set", "base1");
    const germanPikachu = getChecklist("de", "theme", "pikachu");
    const kanto = getChecklist("de", "generation", "1");
    expect(base?.blocks[0]?.lines).toHaveLength(102);
    expect(base?.blocks[0]?.lines[3]).toMatchObject({ number: "4", name: "Charizard", rarity: "Rare Holo" });
    expect(base?.title).toBe("Base checklist");
    expect(pikachu?.title).toBe("All Pikachu cards");
    expect(pikachu?.blocks[0]?.heading).toBe("Base");
    expect(pikachu?.blocks[0]?.lines.some((line) => line.number === "58" && line.name === "Pikachu")).toBe(true);
    expect(modern?.title).toBe("151 checklist");
    expect((modern?.blocks[0]?.lines.length ?? 0) > 100).toBe(true);
    expect(german?.labels.rarity).toBe("Seltenheit");
    expect(german?.blocks[0]?.lines[3]?.name).toBe("Charizard");
    expect(germanPikachu?.title).toBe("Alle Pikachu-Karten");
    expect(germanPikachu?.blocks[0]?.lines[0]?.name).toBe("Pikachu");
    expect(kanto?.blocks[0]?.lines).toHaveLength(151);
    expect(kanto?.blocks[0]?.lines[0]).toMatchObject({ number: "#001", name: "Bisasam" });
    expect(kanto?.blocks[0]?.lines[0]?.rarity).toBe("Egal");
    const params = checklistStaticParams();
    expect(params).toContainEqual({ kind: "set", id: "base1" });
    expect(params).toContainEqual({ kind: "set", id: "sv3pt5" });
    expect(params).toContainEqual({ kind: "theme", id: "pikachu" });
    expect(params).toContainEqual({ kind: "generation", id: "1" });
    expect(getChecklist("us", "set", "nope")).toBeNull();
    expect(getChecklist("us", "theme", "nope")).toBeNull();
  });

  it("prints the sheet in HTML and a PDF with the site footer", async () => {
    const model = getChecklist("de", "set", "base1");
    expect(model).toBeTruthy();
    if (!model) return;
    const html = renderToStaticMarkup(createElement(PrintableSheet, { locale: "de", model }));
    expect(html).toContain("Charizard");
    expect(html).toContain("Seltenheit");
    expect(html).toContain("Rare Holo");
    expect(html).toContain("LinksForCards");
    expect(html).toContain("https://linksforcards.com");
    expect(html).toContain('href="/de/checklists/set/base1/pdf/a4"');
    expect(html).toContain('href="/de/checklists/set/base1/pdf/letter"');
    expect(html).toContain("tick-box");
    expect(html).toContain("https://assets.tcgdex.net/en/base/base1/4/low.webp");
    expect(html).toContain('loading="lazy"');
    expect(html).toContain("Charizard, Base #4");
    expect(html).not.toMatch(/tcgplayer|cardmarket|\$\d/i);

    const pdf = await renderChecklistPdf(model, "a4", false);
    const letter = await renderChecklistPdf(getChecklist("us", "theme", "pikachu")!, "letter", false);
    const text = pdf.toString("latin1");
    expect(text.startsWith("%PDF")).toBe(true);
    expect(text).not.toContain("tcgdex");
    expect(text).not.toContain("pokemontcg.io");
    expect(text).toContain("595.28");
    expect(text).toContain("841.89");
    expect(letter.toString("latin1")).toContain("612");
    expect((text.match(/\/Type \/Page\b/g) ?? []).length).toBeGreaterThan(1);
    expect((text.match(/\/Type \/Page\b/g) ?? []).length).toBeLessThan(6);
  });

  it("lists checklist pages in a loc-only sitemap for the five indexed locales", () => {
    const pages = sitemapEntries("us-pages");
    expect(pages?.some((entry) => entry.url === absoluteUrl("/checklists"))).toBe(false);
    const lists = sitemapEntries("us-checklists");
    expect(lists?.some((entry) => entry.url === absoluteUrl("/checklists"))).toBe(true);
    expect(lists?.some((entry) => entry.url === absoluteUrl("/checklists/set/base1"))).toBe(true);
    expect(lists?.some((entry) => entry.url === absoluteUrl("/checklists/set/sv3pt5"))).toBe(true);
    expect(lists?.some((entry) => entry.url === absoluteUrl("/checklists/theme/pikachu"))).toBe(true);
    expect(lists?.some((entry) => entry.url === absoluteUrl("/checklists/generation/1"))).toBe(true);
    expect(lists?.some((entry) => entry.url.includes("/pdf/"))).toBe(false);
    expect(lists?.every((entry) => entry.languages == null && entry.lastModified == null)).toBe(true);
    const xml = renderUrlset(lists ?? []);
    expect(xml).not.toContain("hreflang");
    expect(xml).not.toContain("<lastmod>");
    expect(Buffer.byteLength(xml)).toBeLessThan(5 * 1024 * 1024);
    for (const locale of ["uk", "nl", "sv", "no", "fi", "pl"]) {
      expect(sitemapEntries(`${locale}-checklists`)).toBeNull();
    }
    expect(sitemapEntries("de-checklists")?.some((entry) => entry.url === absoluteUrl("/de/checklists/set/base1"))).toBe(true);
    expect(checklistSitemapPaths("us").some((path) => path.includes("/pdf/"))).toBe(false);
    expect(checklistSitemapPaths("nl")).toEqual([]);
    expect(getChecklist("uk", "set", "base1")?.indexed).toBe(false);
    expect(getChecklist("de", "generation", "1")?.indexed).toBe(true);
    expect(getChecklist("us", "theme", "pikachu")?.indexed).toBe(true);
  });

  it("leaves checklist URLs for the config rewrite and redirects the old /us prefix", () => {
    expect(resolveLocaleRequest("/checklists")).toEqual({ action: "next", noindex: false });
    expect(resolveLocaleRequest("/checklists/set/base1")).toEqual({ action: "next", noindex: false });
    expect(resolveLocaleRequest("/checklists/theme/pikachu/pdf/a4")).toEqual({ action: "next", noindex: false });
    expect(resolveLocaleRequest("/checklists/generation/1/pdf/letter")).toEqual({ action: "next", noindex: false });
    expect(resolveLocaleRequest("/de/checklists/set/sv3pt5")).toEqual({ action: "next", noindex: false });
    expect(resolveLocaleRequest("/us/checklists")).toEqual({ action: "redirect", pathname: "/checklists" });
    expect(resolveLocaleRequest("/us/checklists/set/base1")).toEqual({
      action: "redirect",
      pathname: "/checklists/set/base1",
    });
  });
});
