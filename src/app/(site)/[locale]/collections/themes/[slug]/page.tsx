import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CollectionPage } from "schema-dts";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Checklist } from "@/components/site/checklist";
import { DoodleCluster } from "@/components/site/doodles";
import { JsonLd } from "@/components/site/json-ld";
import { ProgressBar } from "@/components/site/progress-bar";
import { GuideNotes } from "@/components/site/guide-notes";
import { RelatedLinks } from "@/components/site/related-links";
import { SiteLinks } from "@/components/site/site-links";
import { themeCopy } from "@/content/theme-copy";
import { cardRowHref } from "@/lib/card-page";
import { numbersMatch } from "@/lib/cards";
import { cardImageSrc, getSet, speciesName, type CardKind } from "@/lib/catalog";
import { fill, formatDay, formatInt } from "@/lib/format";
import { formatDexNumber } from "@/lib/generations";
import { readLocale, type Messages } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";
import { breadcrumbNode, itemListNode, ldGraph, pageNode } from "@/lib/jsonld";
import { localePath } from "@/lib/routing";
import { pageMetadata } from "@/lib/seo";
import { clipOnWord } from "@/lib/snippets";
import { absoluteUrl } from "@/lib/site";
import { loadPublic, markFor } from "@/lib/stats";
import {
  anchorFor,
  bulkTone,
  getTheme,
  relatedThemes,
  resolveThemeCards,
  themeCollected,
  themeHreflangLocales,
  themeIndexed,
  topSets,
  type Theme,
} from "@/lib/themes";

/** One page per theme. The CDN caches it. */
export const dynamic = "force-dynamic";

function kindLabel(kind: CardKind, m: Messages): string {
  if (kind === "p") return m.checklist.supertypeP;
  if (kind === "t") return m.checklist.supertypeT;
  if (kind === "e") return m.checklist.supertypeE;
  return m.checklist.supertypeO;
}

function described(locale: Locale, theme: Theme, template: string): string {
  return fill(template, {
    total: formatInt(theme.total, locale),
    sets: formatInt(theme.setCount, locale),
    first: formatDay(theme.first, locale),
    last: formatDay(theme.last, locale),
  });
}

function themeSnippet(locale: Locale, theme: Theme, template: string): string {
  return clipOnWord(described(locale, theme, template), 160);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale } = await readLocale(params);
  const { slug } = await params;
  const theme = getTheme(slug);
  const copy = theme ? themeCopy(locale, theme.slug) : null;
  if (!theme || !copy) return {};
  return pageMetadata(locale, `/collections/themes/${theme.slug}`, copy.title, themeSnippet(locale, theme, copy.description), {
    locales: themeHreflangLocales(theme),
    index: themeIndexed(theme, locale),
    fitTitle: true,
  });
}

export default async function ThemePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, m } = await readLocale(params);
  const { slug } = await params;
  const theme = getTheme(slug);
  const copy = theme ? themeCopy(locale, theme.slug) : null;
  if (!theme || !copy) notFound();
  const snapshot = await loadPublic();
  const collected = themeCollected(theme, snapshot.held);
  const mark = markFor(snapshot, "theme", theme.slug);
  const path = `/collections/themes/${theme.slug}`;
  const description = themeSnippet(locale, theme, copy.description);
  const groups: { series: string; anchor: string; count: number }[] = [];
  const rows = resolveThemeCards(theme).map((item) => {
    const dex = item.card.dex?.find((number) => number >= 1 && number <= 1025);
    const anchor = anchorFor(item);
    const last = groups.at(-1);
    if (!last || last.series !== item.set.series) groups.push({ series: item.set.series, anchor, count: 1 });
    else last.count += 1;
    return {
      key: anchor.slice("line-".length),
      title: `${item.number} ${item.card.name}`,
      detail: [
        item.set.name,
        item.set.series,
        kindLabel(item.card.k, m),
        ...(item.card.dex ?? []).map((number) => `${formatDexNumber(number)} ${speciesName(number, locale)}`),
      ].join(" · "),
      have: (snapshot.held[item.setId] ?? []).some((number) => numbersMatch(item.number, number)),
      image: cardImageSrc(item.setId, item.number),
      alt: fill(m.checklist.cardAlt, { name: item.card.name, set: item.set.name, number: item.number }),
      href: cardRowHref(locale, item.setId, item.card, dex ? localePath(locale, `/pokedex/${dex}`) : undefined),
    };
  });
  const progressLabel = fill(m.checklist.progress, {
    collected: formatInt(collected, locale),
    total: formatInt(theme.total, locale),
  });
  const tone = theme.bulk == null ? null : bulkTone(theme.bulk, theme.total);
  const bulk = tone === "mostly" ? m.themesPage.bulkMostly : tone === "rare" ? m.themesPage.bulkRare : tone === "mixed" ? m.themesPage.bulkMixed : null;
  const crumbs = [
    { name: m.nav.home, href: localePath(locale, "/") },
    { name: m.nav.collections, href: localePath(locale, "/collections") },
    { name: m.themesPage.crumb, href: localePath(locale, "/collections/themes") },
    { name: copy.h1, href: localePath(locale, path) },
  ];
  const list = itemListNode(
    localePath(locale, path),
    copy.title,
    rows.map((row) => ({ name: row.title, ...(row.href ? { url: absoluteUrl(row.href) } : {}) })),
  );
  const page = pageNode({
    kind: "CollectionPage",
    locale,
    path,
    name: copy.title,
    description,
  }) as CollectionPage;
  Object.assign(page, { mainEntity: { "@id": String(list["@id"]) } });
  const graph = ldGraph([page, list, breadcrumbNode(crumbs)]);
  const speciesLinks = theme.dex.map((dex) => ({
    href: localePath(locale, `/pokedex/${dex}`),
    name: speciesName(dex, locale),
  }));
  const setLinks = topSets(theme).flatMap((item) => {
    const set = getSet(item.id);
    return set ? [{ href: localePath(locale, `/collections/set/${set.id}`), name: set.name }] : [];
  });
  const themeLinks = relatedThemes(theme.slug).flatMap((item) => {
    const related = themeCopy(locale, item.slug);
    return related ? [{ href: localePath(locale, `/collections/themes/${item.slug}`), name: related.h1 }] : [];
  });

  return (
    <>
      <JsonLd graph={graph} />
      <section className="page-head">
        <DoodleCluster />
        <Breadcrumbs label={m.nav.breadcrumbs} items={crumbs} />
        <p className="kicker">
          <a href={localePath(locale, "/collections/themes")}>{m.themesPage.kicker}</a>
        </p>
        <h1>{copy.h1}</h1>
        <p className="lede">{copy.lede}</p>
      </section>
      <p>{described(locale, theme, m.themesPage.intro)}</p>
      <p>{fill(m.themesPage.have, { collected: formatInt(collected, locale) })}</p>
      {bulk ? <p>{bulk}</p> : null}
      <p>{m.themesPage.disclaimer}</p>
      <ProgressBar value={collected} max={theme.total} label={`${copy.h1}: ${progressLabel}`} />
      <p className="count">{progressLabel}</p>
      <p className="checklist-actions">
        <a className="button" href={localePath(locale, `/checklists/theme/${theme.slug}`)}>
          {m.printChecklist.button}
        </a>
      </p>
      {collected === theme.total && theme.total > 0 ? <p className="banner">{m.checklist.checklistFull}</p> : null}
      {mark?.status === "given_away" ? <p className="banner">{m.checklist.markedGiven}</p> : null}
      {mark?.status === "completed" ? <p className="banner">{m.checklist.markedComplete}</p> : null}
      {groups.length > 1 ? (
        <nav className="related" aria-label={m.themesPage.seriesJump}>
          <h2>{m.themesPage.seriesJump}</h2>
          <ul>
            {groups.map((group) => (
              <li key={group.anchor}>
                <a href={`#${group.anchor}`}>
                  {group.series}
                  {" · "}
                  {formatInt(group.count, locale)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <Checklist rows={rows} labels={m.checklist} />
      <GuideNotes
        locale={locale}
        heading={m.guideNotes.heading}
        notes={[m.guideNotes.collecting, m.guideNotes.organize]}
      />
      {themeLinks.length > 0 ? (
        <>
          <h2>{m.themesPage.relatedThemes}</h2>
          <RelatedLinks label={m.nav.related} links={themeLinks} />
        </>
      ) : null}
      {speciesLinks.length > 0 ? (
        <>
          <h2>{m.themesPage.relatedSpecies}</h2>
          <RelatedLinks label={m.nav.related} links={speciesLinks} />
        </>
      ) : null}
      {setLinks.length > 0 ? (
        <>
          <h2>{m.themesPage.relatedSets}</h2>
          <p>{fill(m.themesPage.moreSets, { count: formatInt(theme.setCount, locale) })}</p>
          <RelatedLinks label={m.nav.related} links={setLinks} />
        </>
      ) : null}
      <SiteLinks locale={locale} m={m} current={path} />
    </>
  );
}
