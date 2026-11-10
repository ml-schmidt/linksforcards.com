import type { Metadata } from "next";
import { Fragment } from "react";
import type { Article, Thing } from "schema-dts";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Checklist } from "@/components/site/checklist";
import { DoodleCluster } from "@/components/site/doodles";
import { JsonLd } from "@/components/site/json-ld";
import { ProgressBar } from "@/components/site/progress-bar";
import { RelatedLinks } from "@/components/site/related-links";
import { RichText } from "@/components/site/rich-text";
import { SiteLinks } from "@/components/site/site-links";
import { getArticle } from "@/lib/articles";
import { deltaReignCopy } from "@/content/delta-reign";
import { DELTA_REIGN_SOURCES } from "@/content/delta-reign/types";
import { numbersMatch } from "@/lib/cards";
import { cardImageSrc, speciesName, type CardKind } from "@/lib/catalog";
import { DELTA_REIGN_DATES, DELTA_REIGN_PATH, DELTA_REIGN_SERIES, deltaReignCardList } from "@/lib/delta-reign";
import { fill, formatDay, formatInt } from "@/lib/format";
import { formatDexNumber } from "@/lib/generations";
import { readLocale, type Messages } from "@/lib/i18n";
import { CARD_INDEX_LOCALES, cardPageIndexed } from "@/lib/locales";
import { breadcrumbNode, itemListNode, ldGraph, pageNode } from "@/lib/jsonld";
import { localePath } from "@/lib/routing";
import { pageMetadata } from "@/lib/seo";
import { seriesSlug } from "@/lib/series";
import { kindSummary, setFacts } from "@/lib/set-facts";
import { loadPublic } from "@/lib/stats";

/** Same CDN lifetime as the other set pages. Held cards can lag by a day. */
export const dynamic = "force-dynamic";

function kindLabel(kind: CardKind, m: Messages): string {
  if (kind === "p") return m.checklist.supertypeP;
  if (kind === "t") return m.checklist.supertypeT;
  if (kind === "e") return m.checklist.supertypeE;
  return m.checklist.supertypeO;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale, m } = await readLocale(params);
  const copy = deltaReignCopy(locale);
  const indexed = cardPageIndexed(locale);
  return pageMetadata(locale, DELTA_REIGN_PATH, m.meta.deltaReignMetaTitle, m.meta.deltaReignMetaDescription, {
    imageAlt: copy.h1,
    index: indexed,
    hreflang: indexed,
    locales: CARD_INDEX_LOCALES,
    fitTitle: true,
  });
}

export default async function DeltaReignPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, m } = await readLocale(params);
  const copy = deltaReignCopy(locale);
  const catalog = deltaReignCardList();
  const snapshot = catalog ? await loadPublic() : null;
  const facts = catalog ? setFacts(catalog.set.id) : null;
  const collected = catalog && snapshot ? (snapshot.setCounts[catalog.set.id] ?? 0) : 0;
  const held = catalog && snapshot ? (snapshot.held[catalog.set.id] ?? []) : [];
  const vars = {
    announced: formatDay(DELTA_REIGN_DATES.announced, locale),
    prereleaseNote: formatDay(DELTA_REIGN_DATES.prereleaseNote, locale),
    showcase: formatDay(DELTA_REIGN_DATES.showcase, locale),
    prerelease: formatDay(DELTA_REIGN_DATES.prerelease, locale),
    live: formatDay(DELTA_REIGN_DATES.live, locale),
    retail: formatDay(DELTA_REIGN_DATES.retail, locale),
    total: formatInt(catalog?.cards.length ?? 0, locale),
    collected: formatInt(collected, locale),
    name: catalog?.set.name ?? copy.h1,
  };
  const text = (value: string) => fill(value, vars);
  const crumbs = [
    { name: m.nav.home, href: localePath(locale, "/") },
    { name: m.nav.collections, href: localePath(locale, "/collections") },
    { name: DELTA_REIGN_SERIES, href: localePath(locale, `/collections/series/${seriesSlug(DELTA_REIGN_SERIES)}`) },
    { name: copy.h1, href: localePath(locale, DELTA_REIGN_PATH) },
  ];
  const article = pageNode({
    kind: "Article",
    locale,
    path: DELTA_REIGN_PATH,
    name: copy.h1,
    description: copy.description,
    datePublished: "2026-10-27",
    dateModified: "2026-10-27",
  }) as Article;
  const nodes: Thing[] = [article, breadcrumbNode(crumbs)];
  const rows =
    catalog && facts
      ? catalog.cards.map((card) => {
          const dex = card.dex?.find((number) => number >= 1 && number <= 1025);
          return {
            key: card.n,
            title: `${card.n} ${card.name}`,
            detail: [
              kindLabel(card.k, m),
              ...(card.dex ?? []).map((number) => `${formatDexNumber(number)} ${speciesName(number, locale)}`),
            ].join(" · "),
            have: held.some((number) => numbersMatch(card.n, number)),
            image: cardImageSrc(catalog.set.id, card.n),
            alt: fill(m.checklist.cardAlt, { name: card.name, set: catalog.set.name, number: card.n }),
            href: dex ? localePath(locale, `/pokedex/${dex}`) : undefined,
          };
        })
      : null;
  if (rows) {
    nodes.push(
      itemListNode(
        localePath(locale, DELTA_REIGN_PATH),
        copy.checklistHeading,
        rows.map((row) => ({ name: row.title })),
      ),
    );
  }
  const kindLine =
    facts && catalog
      ? kindSummary(
          facts.kinds,
          { p: m.checklist.supertypeP, t: m.checklist.supertypeT, e: m.checklist.supertypeE, o: m.checklist.supertypeO },
          locale,
        )
      : "";
  const progressLabel = catalog
    ? fill(m.checklist.progress, { collected: vars.collected, total: vars.total })
    : "";

  return (
    <>
      <JsonLd graph={ldGraph(nodes)} />
      <article className="article">
        <section className="page-head">
          <DoodleCluster />
          <Breadcrumbs label={m.nav.breadcrumbs} items={crumbs} />
          <p className="kicker">
            <a href={localePath(locale, `/collections/series/${seriesSlug(DELTA_REIGN_SERIES)}`)}>{DELTA_REIGN_SERIES}</a>
          </p>
          <h1>{copy.h1}</h1>
          <p className="lede">
            <RichText text={text(copy.lede)} locale={locale} />
          </p>
        </section>
        <p>{fill(m.guides.updated, { date: formatDay("2026-10-27", locale) })}</p>
        <nav className="toc" aria-label={m.guides.toc}>
          <p>{m.guides.toc}</p>
          <ol>
            {copy.sections.flatMap((section) => {
              const item = (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.heading}</a>
                </li>
              );
              if (section.id !== "products") return [item];
              return [
                item,
                <li key="checklist">
                  <a href="#checklist">{copy.checklistHeading}</a>
                </li>,
              ];
            })}
            <li>
              <a href="#sources">{copy.sourcesHeading}</a>
            </li>
          </ol>
        </nav>
        {copy.sections.map((section) => (
          <Fragment key={section.id}>
            <section id={section.id}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 64)}>
                  <RichText text={text(paragraph)} locale={locale} />
                </p>
              ))}
            </section>
            {section.id === "products" ? (
              <section id="checklist">
                <h2>{copy.checklistHeading}</h2>
                {rows && catalog ? (
                  <>
                    <p>{text(copy.checklistReady)}</p>
                    {kindLine ? <p>{fill(m.setPage.kinds, { list: kindLine })}</p> : null}
                    <p>{m.bindersPage.anyLanguage}</p>
                    <ProgressBar value={collected} max={catalog.cards.length} label={`${catalog.set.name}: ${progressLabel}`} />
                    <p className="count">{progressLabel}</p>
                    <Checklist rows={rows} labels={m.checklist} />
                    {catalog.set.id !== "delta-reign" ? (
                      <p>
                        <a href={localePath(locale, `/collections/set/${catalog.set.id}`)}>{copy.catalogLink}</a>
                      </p>
                    ) : null}
                  </>
                ) : (
                  <p className="banner">{text(copy.checklistWaiting)}</p>
                )}
              </section>
            ) : null}
          </Fragment>
        ))}
        <section id="sources">
          <h2>{copy.sourcesHeading}</h2>
          <ul>
            {DELTA_REIGN_SOURCES.map((source) => (
              <li key={source.href}>
                <a href={source.href} rel="noreferrer">
                  {copy.sourceLabels[source.key]}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <RelatedLinks
        label={m.nav.related}
        links={[
          { href: localePath(locale, "/collections/set/me1"), name: "Mega Evolution" },
          { href: localePath(locale, "/guides/bulk-cards"), name: getArticle(locale, "bulk-cards")?.h1 ?? m.nav.guides },
          { href: localePath(locale, "/collections"), name: m.nav.collections },
        ]}
      />
      <SiteLinks locale={locale} m={m} current={DELTA_REIGN_PATH} />
    </>
  );
}
