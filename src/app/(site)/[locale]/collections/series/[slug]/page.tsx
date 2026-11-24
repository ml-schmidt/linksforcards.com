import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CollectionPage } from "schema-dts";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { DoodleCluster } from "@/components/site/doodles";
import { JsonLd } from "@/components/site/json-ld";
import { ProgressBar } from "@/components/site/progress-bar";
import { RelatedLinks } from "@/components/site/related-links";
import { SiteLinks } from "@/components/site/site-links";
import { getSetCards, setsBySeries } from "@/lib/catalog";
import { seriesSearchDescription, seriesSearchTitle } from "@/lib/collection-meta";
import { DELTA_REIGN_PATH, DELTA_REIGN_SERIES } from "@/lib/delta-reign";
import { fill, formatInt } from "@/lib/format";
import { readLocale } from "@/lib/i18n";
import { breadcrumbNode, itemListNode, ldGraph, pageNode } from "@/lib/jsonld";
import { localePath } from "@/lib/routing";
import { pageMetadata } from "@/lib/seo";
import { seriesSlug } from "@/lib/series";
import { absoluteUrl } from "@/lib/site";
import { loadPublic } from "@/lib/stats";

/** One page per series. The CDN caches it. */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, m } = await readLocale(params);
  const { slug } = await params;
  const group = setsBySeries().find((item) => seriesSlug(item.series) === slug);
  if (!group) return {};
  return pageMetadata(
    locale,
    `/collections/series/${slug}`,
    seriesSearchTitle(m, locale, group.series, group.sets.length),
    seriesSearchDescription(m, locale, group.series, group.sets.length),
    { fitTitle: true },
  );
}

export default async function SeriesPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, m } = await readLocale(params);
  const { slug } = await params;
  const groups = setsBySeries();
  const group = groups.find((item) => seriesSlug(item.series) === slug);
  if (!group) notFound();
  const snapshot = await loadPublic();
  const path = `/collections/series/${slug}`;
  const title = fill(m.meta.seriesTitle, { series: group.series });
  const crumbs = [
    { name: m.nav.home, href: localePath(locale, "/") },
    { name: m.nav.collections, href: localePath(locale, "/collections") },
    { name: group.series, href: localePath(locale, path) },
  ];
  const sets = group.sets.map((set) => ({
    ...set,
    total: getSetCards(set.id)?.length ?? set.count,
    collected: snapshot.setCounts[set.id] ?? 0,
  }));
  const list = itemListNode(
    localePath(locale, path),
    title,
    sets.map((set) => ({ name: set.name, url: absoluteUrl(localePath(locale, `/collections/set/${set.id}`)) })),
  );
  const page = pageNode({
    kind: "CollectionPage",
    locale,
    path,
    name: title,
    description: seriesSearchDescription(m, locale, group.series, group.sets.length),
  }) as CollectionPage;
  Object.assign(page, { mainEntity: { "@id": String(list["@id"]) } });
  const graph = ldGraph([page, list, breadcrumbNode(crumbs)]);

  return (
    <>
      <JsonLd graph={graph} />
      <section className="page-head">
        <DoodleCluster />
        <Breadcrumbs label={m.nav.breadcrumbs} items={crumbs} />
        <p className="kicker">
          <a href={localePath(locale, "/collections")}>{m.checklist.back}</a>
        </p>
        <h1>{title}</h1>
        <p className="lede">{fill(m.seriesPage.intro, { series: group.series, count: formatInt(group.sets.length, locale) })}</p>
        {group.series === DELTA_REIGN_SERIES ? (
          <p>
            {m.seriesPage.deltaPending} <a href={localePath(locale, DELTA_REIGN_PATH)}>{m.seriesPage.deltaLink}</a>
          </p>
        ) : null}
      </section>
      <ul className="set-list">
        {sets.map((set) => {
          const label = fill(m.checklist.progress, {
            collected: formatInt(set.collected, locale),
            total: formatInt(set.total, locale),
          });
          return (
            <li key={set.id}>
              <a href={localePath(locale, `/collections/set/${set.id}`)}>{set.name}</a>
              <ProgressBar value={set.collected} max={set.total} label={`${set.name}: ${label}`} />
              <span className="count">{label}</span>
            </li>
          );
        })}
      </ul>
      <h2>{m.seriesPage.other}</h2>
      <RelatedLinks
        label={m.nav.related}
        links={groups
          .filter((item) => item.series !== group.series)
          .map((item) => ({
            href: localePath(locale, `/collections/series/${seriesSlug(item.series)}`),
            name: item.series,
          }))}
      />
      <SiteLinks locale={locale} m={m} current={path} />
    </>
  );
}
