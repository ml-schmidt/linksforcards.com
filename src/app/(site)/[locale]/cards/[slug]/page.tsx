import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CardCopy, CardFaq, CardGameplay } from "@/components/site/card-body";
import { GuideNotes } from "@/components/site/guide-notes";
import { BinderChips, NeighborLinks, PrintingGrid } from "@/components/site/card-links";
import { CardPicture } from "@/components/site/card-picture";
import { DoodleCluster } from "@/components/site/doodles";
import { JsonLd } from "@/components/site/json-ld";
import { SiteLinks } from "@/components/site/site-links";
import {
  buildCardView,
  cardPageGraph,
  cardPageMetadata,
  cardStatus,
  formatHeldLanguages,
  resolveCardSlug,
  cardIsHeld,
} from "@/lib/card-page";
import { cardImageUrl } from "@/lib/card-images";
import { fill, formatInt } from "@/lib/format";
import { readLocale } from "@/lib/i18n";
import { localePath } from "@/lib/routing";
import { loadPublic, otherLanguagesHeld } from "@/lib/stats";

/**
 * About 20,000 cards in every locale. Rendering them on demand and caching the
 * response at the CDN avoids an ISR write per URL. Card facts come from the
 * catalog files. Whether a card is logged comes from the shipment table and
 * can lag by a day, which is the CDN lifetime.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, m } = await readLocale(params);
  const { slug } = await params;
  const resolved = resolveCardSlug(slug);
  if (!resolved) return {};
  const snapshot = await loadPublic();
  const status = cardStatus(snapshot.state, cardIsHeld(snapshot.held, resolved.set.id, resolved.card.n));
  return cardPageMetadata(locale, m, resolved, status);
}

export default async function CardPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, m } = await readLocale(params);
  const { slug } = await params;
  const resolved = resolveCardSlug(slug);
  if (!resolved) notFound();
  if (resolved.canonical !== slug) permanentRedirect(localePath(locale, `/cards/${resolved.canonical}`));
  const snapshot = await loadPublic();
  const status = cardStatus(snapshot.state, cardIsHeld(snapshot.held, resolved.set.id, resolved.card.n));
  const view = buildCardView(locale, m, resolved.set, resolved.card, status);
  const alsoHeld = otherLanguagesHeld(snapshot, resolved.set.id, resolved.card.n);
  const graph = cardPageGraph(locale, view);
  const alt = view.imageAlt;
  const high = cardImageUrl(resolved.set.id, resolved.card.n, "high");
  const low = cardImageUrl(resolved.set.id, resolved.card.n, "low");
  const neighbors = [view.prev, view.next].filter((link): link is NonNullable<typeof link> => Boolean(link));

  return (
    <>
      <JsonLd graph={graph} />
      <section className="page-head">
        <DoodleCluster />
        <Breadcrumbs label={m.nav.breadcrumbs} items={view.crumbs} />
        <p className="kicker">
          <a href={localePath(locale, `/collections/set/${resolved.set.id}`)}>{resolved.set.name}</a>
        </p>
        <h1>{view.title}</h1>
        {alsoHeld.length ? (
          <p className="muted">{fill(m.cardPage.alsoHeld, { languages: formatHeldLanguages(m, alsoHeld) })}</p>
        ) : null}
      </section>
      <div className="card-layout">
        <CardPicture src={high} fallbackSrc={low} alt={alt} quality="high" eager priority frame />
        <CardCopy paragraphs={view.paragraphs} />
      </div>
      <h2>{m.cardPage.facts}</h2>
      <dl className="facts">
        {view.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>
              {fact.links ? (
                fact.links.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 ? ", " : null}
                    <a href={link.href}>{link.name}</a>
                  </span>
                ))
              ) : fact.href ? (
                <a href={fact.href}>{fact.value}</a>
              ) : (
                fact.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <CardGameplay m={m} card={resolved.card} />
      <h2 id="card-binders">{m.cardPage.bindersHeading}</h2>
      <BinderChips labelledBy="card-binders" links={view.binders} />
      {view.others.length > 0 ? (
        <>
          <h2 id="card-printings">{m.cardPage.otherPrintings}</h2>
          <PrintingGrid
            labelledBy="card-printings"
            cards={view.others}
            more={
              view.morePrintings
                ? {
                    href: view.morePrintings.href,
                    label: fill(m.cardPage.seeAllPrintings, { count: formatInt(view.morePrintings.count, locale) }),
                  }
                : null
            }
          />
        </>
      ) : null}
      {neighbors.length > 0 ? (
        <>
          <h2 id="card-neighbors">{m.cardPage.neighbors}</h2>
          <NeighborLinks labelledBy="card-neighbors" links={neighbors} />
        </>
      ) : null}
      <CardFaq m={m} faqs={view.faqs} />
      <GuideNotes
        locale={locale}
        heading={m.guideNotes.heading}
        notes={[m.guideNotes.read, m.guideNotes.protect, m.guideNotes.fakes]}
      />
      <SiteLinks locale={locale} m={m} current={view.path} />
    </>
  );
}
