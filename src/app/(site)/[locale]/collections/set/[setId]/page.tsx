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
import { cardRowHref, formatHeldLanguages } from "@/lib/card-page";
import { setSearchDescription, setSearchTitle } from "@/lib/collection-meta";
import { numbersMatch } from "@/lib/cards";
import { cardImageSrc, getSet, getSetCards, getSets, speciesName, type CardKind } from "@/lib/catalog";
import { fill, formatDay, formatInt } from "@/lib/format";
import { formatDexNumber } from "@/lib/generations";
import { readLocale, type Messages } from "@/lib/i18n";
import { breadcrumbNode, itemListNode, ldGraph, pageNode } from "@/lib/jsonld";
import { localePath } from "@/lib/routing";
import { pageMetadata } from "@/lib/seo";
import { seriesSlug } from "@/lib/series";
import { absoluteUrl } from "@/lib/site";
import { kindSummary, setFacts } from "@/lib/set-facts";
import { loadPublic, markFor, otherLanguagesHeld } from "@/lib/stats";
import { themesForSet } from "@/lib/themes";

/** One page per set. The CDN caches it. Held cards can lag by a day. */
export const dynamic = "force-dynamic";

const SAMPLE = 8;

function kindLabel(kind: CardKind, m: Messages): string {
  if (kind === "p") return m.checklist.supertypeP;
  if (kind === "t") return m.checklist.supertypeT;
  if (kind === "e") return m.checklist.supertypeE;
  return m.checklist.supertypeO;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; setId: string }>;
}): Promise<Metadata> {
  const { locale, m } = await readLocale(params);
  const { setId } = await params;
  const set = getSet(setId);
  const cards = set ? getSetCards(set.id) : null;
  if (!set || !cards) return {};
  return pageMetadata(
    locale,
    `/collections/set/${set.id}`,
    setSearchTitle(m, locale, set.name, cards.length),
    setSearchDescription(m, locale, set, cards.length),
    { fitTitle: true },
  );
}

export default async function SetPage({ params }: { params: Promise<{ locale: string; setId: string }> }) {
  const { locale, m } = await readLocale(params);
  const { setId } = await params;
  const set = getSet(setId);
  const cards = set ? getSetCards(set.id) : null;
  const facts = set ? setFacts(set.id) : null;
  if (!set || !cards || !facts) notFound();
  const snapshot = await loadPublic();
  const held = snapshot.held[set.id] ?? [];
  const collected = snapshot.setCounts[set.id] ?? 0;
  const mark = markFor(snapshot, "set", set.id);
  const progressLabel = fill(m.checklist.progress, {
    collected: formatInt(collected, locale),
    total: formatInt(cards.length, locale),
  });
  const path = `/collections/set/${set.id}`;
  const title = fill(m.meta.setTitle, { name: set.name });
  const rows = cards.map((card) => {
    const dex = card.dex?.find((number) => number >= 1 && number <= 1025);
    const alsoHeld = otherLanguagesHeld(snapshot, set.id, card.n);
    return {
      key: card.n,
      title: `${card.n} ${card.name}`,
      detail: [
        kindLabel(card.k, m),
        ...(card.dex ?? []).map((number) => `${formatDexNumber(number)} ${speciesName(number, locale)}`),
        ...(alsoHeld.length ? [fill(m.cardPage.alsoHeld, { languages: formatHeldLanguages(m, alsoHeld) })] : []),
      ].join(" · "),
      have: held.some((number) => numbersMatch(card.n, number)),
      image: cardImageSrc(set.id, card.n),
      alt: fill(m.checklist.cardAlt, { name: card.name, set: set.name, number: card.n }),
      href: cardRowHref(locale, set.id, card, dex ? localePath(locale, `/pokedex/${dex}`) : undefined),
    };
  });
  const crumbs = [
    { name: m.nav.home, href: localePath(locale, "/") },
    { name: m.nav.collections, href: localePath(locale, "/collections") },
    { name: set.series, href: localePath(locale, `/collections/series/${seriesSlug(set.series)}`) },
    { name: set.name, href: localePath(locale, path) },
  ];
  const list = itemListNode(
    localePath(locale, path),
    title,
    rows.map((row) => ({ name: row.title, ...(row.href ? { url: absoluteUrl(row.href) } : {}) })),
  );
  const page = pageNode({
    kind: "CollectionPage",
    locale,
    path,
    name: title,
    description: setSearchDescription(m, locale, set, cards.length),
  }) as CollectionPage;
  Object.assign(page, { mainEntity: { "@id": String(list["@id"]) } });
  const graph = ldGraph([page, list, breadcrumbNode(crumbs)]);
  const sample = facts.dexes.slice(0, SAMPLE);
  const rest = facts.dexes.length - sample.length;
  const relatedSets = getSets().filter((item) => item.series === set.series && item.id !== set.id);
  const kindLine = kindSummary(
    facts.kinds,
    { p: m.checklist.supertypeP, t: m.checklist.supertypeT, e: m.checklist.supertypeE, o: m.checklist.supertypeO },
    locale,
  );

  return (
    <>
      <JsonLd graph={graph} />
      <section className="page-head">
        <DoodleCluster />
        <Breadcrumbs label={m.nav.breadcrumbs} items={crumbs} />
        <p className="kicker">
          <a href={localePath(locale, `/collections/series/${seriesSlug(set.series)}`)}>{set.series}</a>
        </p>
        <h1>{title}</h1>
      </section>
      <p>
        {fill(m.setPage.intro, {
          name: set.name,
          date: formatDay(set.releaseDate, locale),
          series: set.series,
          total: formatInt(cards.length, locale),
          collected: formatInt(collected, locale),
        })}
      </p>
      {sample.length > 0 ? (
        <p>
          {m.setPage.notableLead}{" "}
          {sample.map((dex, index) => (
            <span key={dex}>
              {index > 0 ? ", " : null}
              <a href={localePath(locale, `/pokedex/${dex}`)}>{speciesName(dex, locale)}</a>
            </span>
          ))}
          {rest > 0 ? ` ${fill(m.home.andMore, { count: formatInt(rest, locale) })}` : null}.
        </p>
      ) : (
        <p>{m.setPage.noPokemon}</p>
      )}
      {kindLine ? <p>{fill(m.setPage.kinds, { list: kindLine })}</p> : null}
      <p>{m.bindersPage.anyLanguage}</p>
      <ProgressBar value={collected} max={cards.length} label={`${set.name}: ${progressLabel}`} />
      <p className="count">{progressLabel}</p>
      <p className="checklist-actions">
        <a className="button" href={localePath(locale, `/checklists/set/${set.id}`)}>
          {m.printChecklist.button}
        </a>
      </p>
      {collected === cards.length && cards.length > 0 ? <p className="banner">{m.checklist.checklistFull}</p> : null}
      {mark?.status === "given_away" ? <p className="banner">{m.checklist.markedGiven}</p> : null}
      {mark?.status === "completed" ? <p className="banner">{m.checklist.markedComplete}</p> : null}
      <Checklist rows={rows} labels={m.checklist} />
      <GuideNotes
        locale={locale}
        heading={m.guideNotes.heading}
        notes={[
          m.guideNotes.setOrder,
          m.guideNotes.organize,
          m.guideNotes.bulk,
          ...(set.id === "sv3pt5" ? [m.guideNotes.sv3pt5] : []),
          ...(set.id === "base1" ? [m.guideNotes.gen1] : []),
        ]}
      />
      {relatedSets.length > 0 ? (
        <>
          <h2>{fill(m.setPage.related, { series: set.series })}</h2>
          <RelatedLinks
            label={m.nav.related}
            links={relatedSets.map((item) => ({
              href: localePath(locale, `/collections/set/${item.id}`),
              name: item.name,
            }))}
          />
        </>
      ) : null}
      {themesForSet(set.id).length > 0 ? (
        <>
          <h2>{m.setPage.themes}</h2>
          <RelatedLinks
            label={m.nav.related}
            links={themesForSet(set.id).flatMap((theme) => {
              const copy = themeCopy(locale, theme.slug);
              return copy ? [{ href: localePath(locale, `/collections/themes/${theme.slug}`), name: copy.h1 }] : [];
            })}
          />
        </>
      ) : null}
      {facts.generations.length > 0 ? (
        <>
          <h2>{m.setPage.gens}</h2>
          <RelatedLinks
            label={m.nav.related}
            links={facts.generations.map((generation) => ({
              href: localePath(locale, `/collections/generation/${generation}`),
              name: `${fill(m.home.genLink, { gen: generation })} · ${m.regions[generation - 1]}`,
            }))}
          />
        </>
      ) : null}
      <SiteLinks locale={locale} m={m} current={path} />
    </>
  );
}
