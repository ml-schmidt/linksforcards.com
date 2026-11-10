import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CardPicture } from "@/components/site/card-picture";
import { DoodleCluster } from "@/components/site/doodles";
import { JsonLd } from "@/components/site/json-ld";
import { SiteLinks } from "@/components/site/site-links";
import { numbersMatch } from "@/lib/cards";
import { readLocale } from "@/lib/i18n";
import { buildIllustratorView, illustratorPageGraph } from "@/lib/illustrator-page";
import { getIllustrator, type Illustrator } from "@/lib/illustrators";
import { CARD_INDEX_LOCALES } from "@/lib/locales";
import { localePath } from "@/lib/routing";
import { pageMetadata } from "@/lib/seo";
import { loadPublic, type PublicSnapshot } from "@/lib/stats";

/** One page per illustrator. The CDN caches it. The build does not prerender the catalog. */
export const dynamic = "force-dynamic";

function loggedCount(artist: Illustrator, snapshot: PublicSnapshot): number | null {
  if (snapshot.state === "error") return null;
  let count = 0;
  for (const group of artist.groups) {
    const held = snapshot.held[group.setId] ?? [];
    for (const card of group.cards) {
      if (held.some((value) => numbersMatch(card.number, value))) count += 1;
    }
  }
  return count;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, m } = await readLocale(params);
  const { slug } = await params;
  const artist = getIllustrator(slug);
  if (!artist) return {};
  const snapshot = await loadPublic();
  const view = buildIllustratorView(locale, m, artist, loggedCount(artist, snapshot));
  return pageMetadata(locale, view.path, view.title, view.description, {
    index: view.indexed,
    hreflang: view.indexed,
    locales: CARD_INDEX_LOCALES,
    fitTitle: true,
  });
}

export default async function IllustratorPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, m } = await readLocale(params);
  const { slug } = await params;
  const artist = getIllustrator(slug);
  if (!artist) notFound();
  const snapshot = await loadPublic();
  const view = buildIllustratorView(locale, m, artist, loggedCount(artist, snapshot));
  let imageSlot = 0;

  return (
    <>
      <JsonLd graph={illustratorPageGraph(locale, view)} />
      <section className="page-head">
        <DoodleCluster />
        <Breadcrumbs label={m.nav.breadcrumbs} items={view.crumbs} />
        <p className="kicker">
          <a href={localePath(locale, "/illustrators")}>{m.illustratorsPage.kicker}</a>
        </p>
        <h1>{view.title}</h1>
      </section>
      <p className="lede">{view.paragraph}</p>
      <h2>{m.illustratorsPage.setsHeading}</h2>
      <nav aria-label={m.illustratorsPage.setsHeading}>
        <ul className="dex-list">
          {view.sets.map((set) => (
            <li key={set.href}>
              <a href={set.href}>{set.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <h2>{m.illustratorsPage.cardsHeading}</h2>
      {view.groups.map((group) => (
        <section key={group.id} id={group.id}>
          <h3>
            <a href={group.href}>{group.heading}</a>
          </h3>
          <ul className="illust-cards">
            {group.cards.map((card) => {
              const slot = card.image ? imageSlot++ : -1;
              return (
                <li key={card.href}>
                  <a href={card.href}>
                    <span className="card-shot">
                      <CardPicture
                        src={card.image}
                        alt={card.alt}
                        quality="low"
                        eager={slot >= 0 && slot < 6}
                        priority={slot === 0}
                      />
                    </span>
                    <span>{card.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <SiteLinks locale={locale} m={m} current={view.path} />
    </>
  );
}
