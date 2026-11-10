import type { Locale } from "./locales";
import { articlesFor } from "@/content/articles";

export const ARTICLE_SLUGS = [
  "collecting-binders",
  "organize-binder",
  "bulk-cards",
  "pokedex-binder",
  "gen-1-checklist",
  "read-a-card",
  "protect-cards",
  "donating-cards",
  "sets-in-order",
  "collecting-with-a-child",
  "spot-fakes",
] as const;

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number];

export const PILLAR_SLUG: ArticleSlug = "collecting-binders";

export const GUIDE_SLUGS = ARTICLE_SLUGS;
export const GUIDE_UPDATED = "2026-10-24";

export type ArticleSection = { id: string; heading: string; paragraphs: string[] };

export type ArticleCopy = {
  slug: ArticleSlug;
  title: string;
  description: string;
  h1: string;
  lede: string;
  diagram?: { kind: "binders" | "pockets" | "card"; title: string; description: string; caption: string };
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
  /**
   * When false, the questions stay visible but FAQPage JSON-LD is omitted.
   * Google removed FAQ rich results on 7 May 2026 and the feature docs on 12 June 2026,
   * so new guides do not add that markup.
   */
  faqSchema?: boolean;
};

/** Contextual links that every locale of an article must include in the prose. */
export const ARTICLE_LINKS: Record<ArticleSlug, readonly string[]> = {
  "collecting-binders": [
    "/guides/organize-binder",
    "/guides/bulk-cards",
    "/guides/pokedex-binder",
    "/guides/gen-1-checklist",
    "/guides/read-a-card",
    "/guides/protect-cards",
    "/guides/donating-cards",
    "/guides/sets-in-order",
    "/guides/collecting-with-a-child",
    "/",
    "/collections",
    "/collections/generation/1",
    "/collections/set/base1",
    "/pokedex/25",
    "/collections/themes",
    "/collections/themes/pikachu",
  ],
  "organize-binder": [
    "/guides/collecting-binders",
    "/guides/protect-cards",
    "/guides/pokedex-binder",
    "/guides/gen-1-checklist",
    "/guides/sets-in-order",
    "/guides/read-a-card",
    "/collections",
    "/collections/set/sv4pt5",
    "/collections/generation/1",
    "https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database",
  ],
  "bulk-cards": [
    "/guides/collecting-binders",
    "/guides/read-a-card",
    "/guides/donating-cards",
    "/guides/pokedex-binder",
    "/guides/collecting-with-a-child",
    "/guides/spot-fakes",
    "/collections",
    "/pokedex/129",
    "/collections/themes",
    "/collections/themes/yuka-morii",
  ],
  "pokedex-binder": [
    "/guides/collecting-binders",
    "/guides/gen-1-checklist",
    "/guides/bulk-cards",
    "/guides/organize-binder",
    "/collections",
    "/collections/generation/1",
    "/pokedex/1",
    "/collections/themes",
    "/collections/themes/pikachu",
  ],
  "gen-1-checklist": [
    "/guides/collecting-binders",
    "/guides/pokedex-binder",
    "/guides/sets-in-order",
    "/collections/generation/1",
    "/collections/set/base1",
    "/collections/set/sv3pt5",
    "/collections/series/base",
    "/pokedex/6",
    "/pokedex/25",
  ],
  "read-a-card": [
    "/guides/collecting-binders",
    "/guides/bulk-cards",
    "/guides/sets-in-order",
    "/guides/spot-fakes",
    "/collections/set/base1",
    "/pokedex/25",
    "https://play.pokemon.com/en-us/resources/rules/",
    "https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database",
  ],
  "protect-cards": [
    "/guides/collecting-binders",
    "/guides/organize-binder",
    "/guides/collecting-with-a-child",
    "/guides/donating-cards",
    "/collections",
  ],
  "donating-cards": [
    "/guides/collecting-binders",
    "/guides/bulk-cards",
    "/guides/collecting-with-a-child",
    "/guides/protect-cards",
    "/donations",
    "/collections",
  ],
  "sets-in-order": [
    "/guides/collecting-binders",
    "/guides/gen-1-checklist",
    "/guides/organize-binder",
    "/collections",
    "/collections/series/base",
    "/collections/set/base1",
    "/collections/set/me1",
    "/collections/set/delta-reign",
  ],
  "collecting-with-a-child": [
    "/guides/collecting-binders",
    "/guides/protect-cards",
    "/guides/bulk-cards",
    "/guides/donating-cards",
    "/guides/gen-1-checklist",
    "/guides/spot-fakes",
    "/collections/generation/1",
    "/collections",
  ],
  "spot-fakes": [
    "/guides/read-a-card",
    "/guides/bulk-cards",
    "/guides/protect-cards",
    "/guides/collecting-with-a-child",
    "/guides/collecting-binders",
    "/collections",
    "/collections/set/base1",
    "/pokedex/25",
    "/collections/themes/pikachu",
    "https://support.pokemon.com/hc/en-us/articles/360002068953-Did-I-purchase-fake-or-counterfeit-cards",
    "https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database",
  ],
};

export function isArticleSlug(value: string): value is ArticleSlug {
  return (ARTICLE_SLUGS as readonly string[]).includes(value);
}

export function isGuideSlug(value: string): value is ArticleSlug {
  return isArticleSlug(value);
}

/** Visible questions are fine. FAQPage JSON-LD is only emitted where it was already shipped. */
export function articleFaqSchema(article: ArticleCopy): boolean {
  return article.faqSchema !== false && article.faqs.length > 0;
}

export function getArticle(locale: Locale, slug: string): ArticleCopy | null {
  if (!isArticleSlug(slug)) return null;
  return articlesFor(locale).find((article) => article.slug === slug) ?? null;
}

export function getArticles(locale: Locale): ArticleCopy[] {
  const bySlug = new Map(articlesFor(locale).map((article) => [article.slug, article]));
  return ARTICLE_SLUGS.map((slug) => {
    const article = bySlug.get(slug);
    if (!article) throw new Error(`Missing article ${locale}/${slug}`);
    return article;
  });
}
