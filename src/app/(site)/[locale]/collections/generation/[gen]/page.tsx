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
import { cardImageSrc, getSet, speciesName, speciesNamesAreTranslated } from "@/lib/catalog";
import { fill, formatInt } from "@/lib/format";
import { formatDexNumber, GENERATIONS, generationById } from "@/lib/generations";
import { readLocale } from "@/lib/i18n";
import { breadcrumbNode, itemListNode, ldGraph, pageNode } from "@/lib/jsonld";
import { localePath } from "@/lib/routing";
import { pageMetadata } from "@/lib/seo";
import { speciesByDex } from "@/lib/species-index";
import { absoluteUrl } from "@/lib/site";
import { loadPublic, markFor, speciesInRange } from "@/lib/stats";

/** One page per generation. The CDN caches it. */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; gen: string }>;
}): Promise<Metadata> {
  const { locale, m } = await readLocale(params);
  const { gen } = await params;
  const generation = generationById(Number(gen));
  if (!generation) return {};
  const region = m.regions[generation.id - 1] ?? "";
  const total = generation.end - generation.start + 1;
  const snapshot = await loadPublic();
  const collected = speciesInRange(snapshot.species, generation.start, generation.end);
  return pageMetadata(
    locale,
    `/collections/generation/${generation.id}`,
    fill(m.meta.generationTitle, { gen: generation.id, region, total: formatInt(total, locale), collected: formatInt(collected, locale) }),
    fill(m.meta.generationDescription, { gen: generation.id, region, total: formatInt(total, locale), collected: formatInt(collected, locale) }),
  );
}

export default async function GenerationPage({ params }: { params: Promise<{ locale: string; gen: string }> }) {
  const { locale, m } = await readLocale(params);
  const { gen } = await params;
  const generation = generationById(Number(gen));
  if (!generation) notFound();
  const snapshot = await loadPublic();
  const region = m.regions[generation.id - 1] ?? "";
  const total = generation.end - generation.start + 1;
  const collected = speciesInRange(snapshot.species, generation.start, generation.end);
  const have = new Set(snapshot.species);
  const mark = markFor(snapshot, "generation", String(generation.id));
  const progressLabel = fill(m.checklist.progress, {
    collected: formatInt(collected, locale),
    total: formatInt(total, locale),
  });
  const title = fill(m.meta.generationTitle, {
    gen: generation.id,
    region,
    total: formatInt(total, locale),
    collected: formatInt(collected, locale),
  });
  const path = `/collections/generation/${generation.id}`;
  const rows = [];
  for (let dex = generation.start; dex <= generation.end; dex += 1) {
    const record = speciesByDex(dex);
    const first = record?.first;
    const firstSet = first ? getSet(first.setId) : null;
    const names = (record?.setIds ?? []).slice(0, 3).map((id) => getSet(id)?.name ?? id);
    const extra = (record?.setIds.length ?? 0) - names.length;
    const setLabel = extra > 0 ? `${names.join(", ")} ${fill(m.home.andMore, { count: formatInt(extra, locale) })}` : names.join(", ");
    const prints = fill(m.generationPage.prints, { count: formatInt(record?.printings.length ?? 0, locale) });
    rows.push({
      key: String(dex),
      title: `${formatDexNumber(dex)} ${speciesName(dex, locale)}`,
      detail: setLabel ? `${prints} · ${setLabel}` : prints,
      have: have.has(dex),
      href: localePath(locale, `/pokedex/${dex}`),
      image: first ? cardImageSrc(first.setId, first.number) : null,
      alt: first ? fill(m.checklist.cardAlt, { name: first.name, set: firstSet?.name ?? first.setId, number: first.number }) : "",
    });
  }
  const crumbs = [
    { name: m.nav.home, href: localePath(locale, "/") },
    { name: m.nav.collections, href: localePath(locale, "/collections") },
    { name: fill(m.home.genLink, { gen: generation.id }), href: localePath(locale, path) },
  ];
  const list = itemListNode(
    localePath(locale, path),
    title,
    rows.map((row) => ({
      name: row.title,
      url: absoluteUrl(row.href),
    })),
  );
  const page = pageNode({
    kind: "CollectionPage",
    locale,
    path,
    name: title,
    description: fill(m.meta.generationDescription, {
      gen: generation.id,
      region,
      collected: formatInt(collected, locale),
      total: formatInt(total, locale),
    }),
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
      </section>
      <p>
        {fill(m.meta.generationDescription, {
          gen: generation.id,
          region,
          collected: formatInt(collected, locale),
          total: formatInt(total, locale),
        })}
      </p>
      <p>
        {speciesNamesAreTranslated(locale)
          ? fill(m.bindersPage.speciesLocal, { language: m.langName })
          : m.bindersPage.speciesEnglish}
      </p>
      <p>{m.checklist.combo}</p>
      <p>{m.bindersPage.anyLanguage}</p>
      <ProgressBar value={collected} max={total} label={`${title}: ${progressLabel}`} />
      <p className="count">{progressLabel}</p>
      <p className="checklist-actions">
        <a className="button" href={localePath(locale, `/checklists/generation/${generation.id}`)}>
          {m.printChecklist.button}
        </a>
      </p>
      {collected === total ? <p className="banner">{m.checklist.checklistFull}</p> : null}
      {mark?.status === "given_away" ? <p className="banner">{m.checklist.markedGiven}</p> : null}
      {mark?.status === "completed" ? <p className="banner">{m.checklist.markedComplete}</p> : null}
      <Checklist rows={rows} labels={m.checklist} />
      <GuideNotes
        locale={locale}
        heading={m.guideNotes.heading}
        notes={
          generation.id === 1
            ? [m.guideNotes.pokedex, m.guideNotes.gen1, m.guideNotes.set151]
            : [m.guideNotes.pokedex]
        }
      />
      <h2>{m.generationPage.other}</h2>
      <RelatedLinks
        label={m.nav.related}
        links={GENERATIONS.filter((item) => item.id !== generation.id).map((item) => ({
          href: localePath(locale, `/collections/generation/${item.id}`),
          name: `${fill(m.home.genLink, { gen: item.id })} · ${m.regions[item.id - 1]}`,
        }))}
      />
      <SiteLinks locale={locale} m={m} current={path} />
    </>
  );
}
