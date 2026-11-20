import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CollectionPage } from "schema-dts";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Checklist } from "@/components/site/checklist";
import { DoodleCluster } from "@/components/site/doodles";
import { JsonLd } from "@/components/site/json-ld";
import { RelatedLinks } from "@/components/site/related-links";
import { SiteLinks } from "@/components/site/site-links";
import { themeCopy } from "@/content/theme-copy";
import { getArticle } from "@/lib/articles";
import { cardRowHref } from "@/lib/card-page";
import { numbersMatch } from "@/lib/cards";
import { cardImageSrc, getSet, speciesName, type CardKind } from "@/lib/catalog";
import { fill, formatDay, formatInt } from "@/lib/format";
import { formatDexNumber } from "@/lib/generations";
import { readLocale, type Messages } from "@/lib/i18n";
import { SPECIES_INDEX_LOCALES, speciesPageIndexed } from "@/lib/locales";
import { breadcrumbNode, itemListNode, ldGraph, pageNode } from "@/lib/jsonld";
import { localePath } from "@/lib/routing";
import { pageMetadata } from "@/lib/seo";
import { seriesSlug } from "@/lib/series";
import { kindSummary } from "@/lib/set-facts";
import { speciesByDex } from "@/lib/species-index";
import { absoluteUrl } from "@/lib/site";
import { loadPublic } from "@/lib/stats";
import { themesForDex } from "@/lib/themes";

/** One page per species. The CDN caches it for 30 days so the 1,025 × locale set is not an ISR write. */
export const dynamic = "force-dynamic";

function kindLabel(kind: CardKind, m: Messages): string {
  if (kind === "p") return m.checklist.supertypeP;
  if (kind === "t") return m.checklist.supertypeT;
  if (kind === "e") return m.checklist.supertypeE;
  return m.checklist.supertypeO;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; dex: string }>;
}): Promise<Metadata> {
  const { locale, m } = await readLocale(params);
  const dex = Number((await params).dex);
  const record = speciesByDex(dex);
  if (!record) return {};
  const name = speciesName(dex, locale);
  const region = m.regions[record.generation - 1] ?? "";
  return pageMetadata(
    locale,
    `/pokedex/${dex}`,
    fill(m.meta.speciesTitle, { name }),
    fill(m.meta.speciesDescription, {
      name,
      dex: formatDexNumber(dex),
      gen: record.generation,
      region,
      total: formatInt(record.printings.length, locale),
      sets: formatInt(record.setIds.length, locale),
    }),
    { locales: SPECIES_INDEX_LOCALES, index: speciesPageIndexed(locale) },
  );
}

export default async function SpeciesPage({ params }: { params: Promise<{ locale: string; dex: string }> }) {
  const { locale, m } = await readLocale(params);
  const dex = Number((await params).dex);
  const record = speciesByDex(dex);
  if (!record) notFound();
  const snapshot = await loadPublic();
  const name = speciesName(dex, locale);
  const region = m.regions[record.generation - 1] ?? "";
  const firstSet = getSet(record.first.setId);
  const latestSet = getSet(record.latest.setId);
  let collected = 0;
  const rows = record.printings.map((printing) => {
    const set = getSet(printing.setId);
    const have = (snapshot.held[printing.setId] ?? []).some((number) => numbersMatch(printing.number, number));
    if (have) collected += 1;
    return {
      key: `${printing.setId}-${printing.number}`,
      title: `${printing.number} ${printing.name}`,
      detail: [set?.name ?? printing.setId, set ? formatDay(set.releaseDate, locale) : "", kindLabel(printing.kind, m)]
        .filter(Boolean)
        .join(" · "),
      have,
      image: cardImageSrc(printing.setId, printing.number),
      alt: fill(m.checklist.cardAlt, { name: printing.name, set: set?.name ?? printing.setId, number: printing.number }),
      href: cardRowHref(
        locale,
        printing.setId,
        { n: printing.number, name: printing.name },
        localePath(locale, `/collections/set/${printing.setId}`),
      ),
    };
  });
  const path = `/pokedex/${dex}`;
  const title = fill(m.meta.speciesTitle, { name });
  const intro = fill(m.speciesPage.intro, {
    name,
    dex: formatDexNumber(dex),
    gen: record.generation,
    region,
    total: formatInt(record.printings.length, locale),
    sets: formatInt(record.setIds.length, locale),
    firstSet: firstSet?.name ?? record.first.setId,
    firstDate: firstSet ? formatDay(firstSet.releaseDate, locale) : "",
    latestSet: latestSet?.name ?? record.latest.setId,
    latestDate: latestSet ? formatDay(latestSet.releaseDate, locale) : "",
  });
  const crumbs = [
    { name: m.nav.home, href: localePath(locale, "/") },
    { name: m.nav.collections, href: localePath(locale, "/collections") },
    { name: fill(m.home.genLink, { gen: record.generation }), href: localePath(locale, `/collections/generation/${record.generation}`) },
    { name, href: localePath(locale, path) },
  ];
  const list = itemListNode(
    localePath(locale, path),
    title,
    rows.map((row) => ({ name: `${name} · ${row.title}`, url: absoluteUrl(row.href) })),
  );
  const page = pageNode({
    kind: "CollectionPage",
    locale,
    path,
    name: title,
    description: intro,
  }) as CollectionPage;
  Object.assign(page, { mainEntity: { "@id": String(list["@id"]) } });
  const graph = ldGraph([page, list, breadcrumbNode(crumbs)]);
  const kindLine = kindSummary(
    record.kinds,
    { p: m.checklist.supertypeP, t: m.checklist.supertypeT, e: m.checklist.supertypeE, o: m.checklist.supertypeO },
    locale,
  );
  const setLinks = record.setIds.map((id) => {
    const set = getSet(id);
    return { href: localePath(locale, `/collections/set/${id}`), name: set?.name ?? id, series: set?.series ?? "" };
  });

  return (
    <>
      <JsonLd graph={graph} />
      <section className="page-head">
        <DoodleCluster />
        <Breadcrumbs label={m.nav.breadcrumbs} items={crumbs} />
        <p className="kicker">{formatDexNumber(dex)}</p>
        <h1>{title}</h1>
        <p className="lede">{intro}</p>
      </section>
      <p>
        {collected > 0
          ? fill(m.speciesPage.have, { name, collected: formatInt(collected, locale) })
          : fill(m.speciesPage.none, { name })}
      </p>
      {kindLine ? <p>{fill(m.speciesPage.kinds, { list: kindLine })}</p> : null}
      <p>
        <a href={`${localePath(locale, `/collections/generation/${record.generation}`)}#line-${dex}`}>
          {fill(m.speciesPage.binder, { gen: record.generation, dex: formatDexNumber(dex), name })}
        </a>
      </p>
      <p>{m.bindersPage.anyLanguage}</p>
      {themesForDex(dex).length > 0 ? (
        <>
          <h2>{fill(m.speciesPage.themesHeading, { name })}</h2>
          <RelatedLinks
            label={m.nav.related}
            links={themesForDex(dex).flatMap((theme) => {
              const copy = themeCopy(locale, theme.slug);
              return copy ? [{ href: localePath(locale, `/collections/themes/${theme.slug}`), name: copy.h1 }] : [];
            })}
          />
        </>
      ) : null}
      <h2>{fill(m.speciesPage.setsHeading, { name })}</h2>
      <RelatedLinks label={m.nav.related} links={setLinks} />
      <Checklist rows={rows} labels={m.checklist} />
      <RelatedLinks
        label={m.nav.related}
        links={[
          { href: localePath(locale, `/collections/generation/${record.generation}`), name: fill(m.home.genLink, { gen: record.generation }) },
          ...[...new Set(setLinks.map((item) => item.series).filter(Boolean))].slice(0, 6).map((series) => ({
            href: localePath(locale, `/collections/series/${seriesSlug(series)}`),
            name: series,
          })),
          {
            href: localePath(locale, record.generation === 1 ? "/guides/gen-1-checklist" : "/guides/pokedex-binder"),
            name: getArticle(locale, record.generation === 1 ? "gen-1-checklist" : "pokedex-binder")?.h1 ?? m.nav.guides,
          },
        ]}
      />
      <SiteLinks locale={locale} m={m} current={path} />
    </>
  );
}
