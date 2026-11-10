import type { Metadata } from "next";
import type { AboutPage } from "schema-dts";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CountryCup } from "@/components/site/country-cup";
import { DoodleCluster } from "@/components/site/doodles";
import { EmailText } from "@/components/site/email-text";
import { JsonLd } from "@/components/site/json-ld";
import { ProgressBar } from "@/components/site/progress-bar";
import { GuideNotes } from "@/components/site/guide-notes";
import { ShopLink } from "@/components/site/shop-link";
import { SiteLinks } from "@/components/site/site-links";
import { themeCopy } from "@/content/theme-copy";
import { getSet } from "@/lib/catalog";
import { fill, formatInt } from "@/lib/format";
import { GENERATIONS, SPECIES_TOTAL } from "@/lib/generations";
import { readLocale } from "@/lib/i18n";
import { LOCALES } from "@/lib/locales";
import { breadcrumbNode, faqNode, ldGraph, pageNode, type FaqPair } from "@/lib/jsonld";
import { localePath } from "@/lib/routing";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";
import { loadCountryCup, orderCountryCup } from "@/lib/country-cup";
import { shopsForLocale } from "@/lib/shop-locales";
import { loadPublic, speciesInRange, type PublicShop } from "@/lib/stats";
import { getThemes, themeCollected } from "@/lib/themes";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale, m } = await readLocale(params);
  return {
    ...pageMetadata(locale, "/", m.meta.homeTitle, m.meta.homeDescription),
    title: { absolute: m.meta.homeTitle },
  };
}

function shopLabels(shop: PublicShop, genLink: string): string[] {
  const labels = [...shop.generations]
    .sort((a, b) => a - b)
    .map((gen) => fill(genLink, { gen }));
  for (const setId of shop.setIds) labels.push(getSet(setId)?.name ?? setId);
  return labels;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, m } = await readLocale(params);
  const [snapshot, cup] = await Promise.all([loadPublic(), loadCountryCup()]);
  const standings = orderCountryCup(cup.rows, locale);
  const zero = snapshot.differentCards === 0 && snapshot.copies === 0;
  const progress =
    snapshot.state === "error" ? m.home.progressError : zero ? m.home.progressZero : m.home.progressLive;
  const completed = snapshot.marks.filter((mark) => mark.status === "completed" || mark.status === "given_away").length;
  const given = snapshot.marks.filter((mark) => mark.status === "given_away").length;
  const recent = shopsForLocale(snapshot.shops, locale).slice(0, 4);
  const faqs: FaqPair[] = [
    { q: m.home.faq1q, a: m.home.faq1a },
    { q: m.home.faq2q, a: m.home.faq2a },
    { q: m.home.faq3q, a: m.home.faq3a },
    { q: m.home.faq4q, a: m.home.faq4a },
  ];
  const crumbs = [{ name: m.nav.home, href: localePath(locale, "/") }];
  const about = pageNode({
    kind: "AboutPage",
    locale,
    path: "/",
    name: m.meta.homeTitle,
    description: m.meta.homeDescription,
  }) as AboutPage;
  const faq = faqNode(localePath(locale, "/"), faqs);
  about.mainEntity = { "@id": `${absoluteUrl(localePath(locale, "/"))}#faq` };
  const graph = ldGraph([about, faq, breadcrumbNode(crumbs)]);

  const stats = [
    { key: "cards", label: m.home.statCards, value: formatInt(snapshot.differentCards, locale) },
    { key: "copies", label: m.home.statCopies, value: formatInt(snapshot.copies, locale) },
    {
      key: "species",
      label: m.home.statSpecies,
      value: `${formatInt(snapshot.species.length, locale)} / ${formatInt(SPECIES_TOTAL, locale)}`,
    },
    { key: "completed", label: m.home.statCompleted, value: formatInt(completed, locale) },
    { key: "given", label: m.home.statGiven, value: formatInt(given, locale) },
  ];

  return (
    <>
      <JsonLd graph={graph} />
      <section className="hero">
        <DoodleCluster />
        <Breadcrumbs label={m.nav.breadcrumbs} items={crumbs} />
        <p className="kicker">{m.home.kicker}</p>
        <h1>{m.home.h1}</h1>
        <p className="lede">{m.home.p1}</p>
        <p>{m.home.p2}</p>
      </section>
      <div className="split">
        <section>
          <h2>{m.home.setTitle}</h2>
          <p>{m.home.setBody}</p>
        </section>
        <section>
          <h2>{m.home.genTitle}</h2>
          <p>{m.home.genBody}</p>
        </section>
      </div>
      <section className="note">
        <h2>{m.home.bulkTitle}</h2>
        <p>{m.home.bulkBody}</p>
      </section>
      <section className="note">
        <h2>{m.home.deltaTitle}</h2>
        <p>
          {m.home.deltaBody} <a href={localePath(locale, "/collections/set/delta-reign")}>{m.home.deltaLink}</a>
        </p>
      </section>
      <CountryCup
        locale={locale}
        failed={cup.state === "error"}
        rows={standings}
        copy={{
          title: m.home.cupTitle,
          rules: m.home.cupRules,
          empty: m.home.cupEmpty,
          error: m.home.cupError,
          points: m.home.cupPoints,
          cards: m.home.cupCards,
          binders: m.home.cupBinders,
        }}
      />
      <section>
        <h2>{m.home.progressTitle}</h2>
        <p>{progress}</p>
        <dl className="stats">
          {stats.map((stat) => (
            <div key={stat.key}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
        <h3>{m.home.genProgress}</h3>
        <ul className="gen-list">
          {GENERATIONS.map((generation) => {
            const collected = speciesInRange(snapshot.species, generation.start, generation.end);
            const total = generation.end - generation.start + 1;
            const label = `${fill(m.home.genLink, { gen: generation.id })} · ${m.regions[generation.id - 1]}`;
            const progressLabel = fill(m.checklist.progress, {
              collected: formatInt(collected, locale),
              total: formatInt(total, locale),
            });
            return (
              <li key={generation.id}>
                <a href={localePath(locale, `/collections/generation/${generation.id}`)}>{label}</a>
                <ProgressBar value={collected} max={total} label={`${label}: ${progressLabel}`} />
                <span className="count">{progressLabel}</span>
              </li>
            );
          })}
        </ul>
        <h3>{m.home.themeProgress}</h3>
        <ul className="gen-list">
          {getThemes().flatMap((theme) => {
            const copy = themeCopy(locale, theme.slug);
            if (!copy) return [];
            const collected = themeCollected(theme, snapshot.held);
            const progressLabel = fill(m.checklist.progress, {
              collected: formatInt(collected, locale),
              total: formatInt(theme.total, locale),
            });
            return [
              <li key={theme.slug}>
                <a href={localePath(locale, `/collections/themes/${theme.slug}`)}>{copy.h1}</a>
                <ProgressBar value={collected} max={theme.total} label={`${copy.h1}: ${progressLabel}`} />
                <span className="count">{progressLabel}</span>
              </li>,
            ];
          })}
        </ul>
        <p>
          <a href={localePath(locale, "/collections/themes")}>{m.home.themeHub}</a>
        </p>
      </section>
      <section>
        <h2>{m.home.thanksTitle}</h2>
        {recent.length === 0 ? (
          <p>{m.home.thanksEmpty}</p>
        ) : (
          <ul className="thanks">
            {recent.map((shop) => {
              const labels = shopLabels(shop, m.home.genLink);
              const shown = labels.slice(0, 6);
              const rest = labels.length - shown.length;
              return (
                <li key={shop.id}>
                  <ShopLink name={shop.name} website={shop.website} />
                  <span className="country">{shop.country}</span>
                  {shown.length ? (
                    <p>
                      <span className="muted">{m.home.helped} </span>
                      {shown.join(", ")}
                      {rest > 0 ? ` ${fill(m.home.andMore, { count: formatInt(rest, locale) })}` : ""}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
        <p>
          <a href={localePath(locale, "/partners")}>{m.home.thanksAll}</a>
        </p>
      </section>
      <section className="shops">
        <h2>{m.home.shopsTitle}</h2>
        <p>
          <EmailText text={m.home.shopsP1} />
        </p>
        <p>{m.home.shopsP2}</p>
        <p>{m.home.shopsP3}</p>
        <p>
          <a className="button" href={`mailto:${site.email}`}>
            {m.home.email}
          </a>
        </p>
      </section>
      <GuideNotes
        locale={locale}
        heading={m.guideNotes.heading}
        notes={[m.guideNotes.bulk, m.guideNotes.gen1, m.guideNotes.homeGive, m.guideNotes.read]}
      />
      <section className="faq">
        <h2>{m.home.faqTitle}</h2>
        {faqs.map((item) => (
          <div key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>
      <SiteLinks locale={locale} m={m} current="/" />
    </>
  );
}
