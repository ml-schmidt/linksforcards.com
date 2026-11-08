# Technical SEO audit — linksforcards.com

**Date:** 27 October 2026
**Site:** https://linksforcards.com
**Code:** `main` at `bc9c1a0` (what is live) and open PR [#3](https://github.com/ml-schmidt/linksforcards.com/pull/3), branch `cursor/english-card-pages-26ae` at `660b548` (card pages, not deployed)
**Scope:** crawl and indexation, hreflang, sitemaps, internal links, duplicate and thin content, titles and descriptions, structured data, lab performance, crawl cost on Vercel, accessibility signals, mobile rendering

This file is the audit. It does not change the site.

## How this was measured

Live requests were made on 27 October 2026 between 00:55 and 01:02 UTC from a client that resolved to Vercel’s `iad1` region. The crawl covered:

- `robots.txt`, the sitemap index, and all 50 child sitemaps (downloaded and parsed)
- 31 HTML templates plus redirect probes (HTTP and HTTPS, `www`, trailing slashes, legacy `/us`, `/en`, and `/binders` paths, unknown URLs, admin, Open Graph images)
- The same homepage and Base set URL with a Googlebot user agent
- Mobile Lighthouse 12.8.2 (Headless Chrome 156) on seven templates. Form factor mobile, simulated throttling, viewport 412×823 at device scale 1.75. Run started 2026-10-27T00:59:44Z

Search Console figures are from SEO Gets for property `https://linksforcards.com/`, 1–25 October 2026. Index coverage is not available: SEO Gets only returns that report for super sites, and this property is not one. A `site:` web search on the same day returned no results. The page list below is what Search Console has stored, not a complete crawl log.

Card-page figures are from the PR branch, not from production. Production returns **404** for `/cards/base1-4-charizard`. Sitemap byte sizes were produced by running the branch’s slug and hreflang rules over the enriched catalog (20,628 cards). Paragraph word counts use the English `cardPage` templates, including the binder sentence. Theme names in that sentence are the theme slug with hyphens turned into spaces, so a themed card can be a few words longer than this count. Release dates in the sample sentences are the catalog ISO date; the page formats that date per locale.

Screaming Frog was not available for this run. The live crawl is a full sitemap inventory plus a template sample, not an inlink crawl of all 8,683 URLs.

## Current inventory

| | Live (`main`) | After PR #3, if merged as written |
| --- | ---: | ---: |
| Locales | 11 (`us` at `/`, plus `uk` `de` `fr` `it` `es` `nl` `sv` `no` `fi` `pl`) | same |
| Sitemap files | 50 | 61 |
| URLs in the sitemap | 8,683 | 235,591 |
| Sitemap bytes, uncompressed | 12,779,801 (12.2 MiB) | about 463 MiB |
| Largest sitemap file | 1,256,762 bytes (prefixed species file) | 44,162,541 bytes (42.12 MiB, UK card file) |
| Card URLs | none (404) | 20,628 × 11 = 226,908 |

Live sitemap composition, counted from the downloaded files:

| Kind | Per indexed locale | Locales | URLs |
| --- | ---: | ---: | ---: |
| Static pages (home, hubs, 9 generations, series) | 35 | 11 | 385 |
| Sets | 176 | 11 | 1,936 |
| Guides | 10 | 11 | 110 |
| Themes | 12, or 6 where the theme follows a species name | 11 | 102 |
| Species | 1,025 | 6 (`us` `uk` `de` `fr` `es` `it`) | 6,150 |
| **Total** | | | **8,683** |

`nl`, `sv`, `no`, `fi`, and `pl` have no species sitemap. That matches `SPECIES_INDEX_LOCALES` in `src/lib/locales.ts`.

Search Console, 1–25 October 2026:

- 24 October: 0 clicks, 0 impressions
- 25 October: 0 clicks, 10 impressions, CTR 0.00, average position 28.10
- The only query the report returned was `dunsparc`: 1 impression, position 83. That lines up with `https://linksforcards.com/es/pokedex/206` (Dunsparce), which itself had 1 impression at position 83
- The other 9 impressions are on queries the report did not return
- Nine URLs carried the 10 impressions. They are a Spanish guide, two Spanish Pokédex pages, a Dutch guide, `/privacy`, `/uk`, a UK set, a UK guide, and a UK Pokédex page
- Devices and countries for those 10 impressions: desktop in the US (2), Argentina, Brazil, Spain, Indonesia, Peru, and the UAE (1 each); mobile in the Netherlands (2)
- The stored page list has 60 paths and does not include `/`. With a property this new, that is a short discovery list, not proof the homepage is uncrawled

The site is a few days old. Average position 28 across 10 impressions is not a ranking conclusion.

## What is already solid

These were checked because they are the usual sources of indexation bugs. They are working on the live site.

**Host and protocol.** `http://linksforcards.com/` returns **308** to `https://linksforcards.com/`. `https://www.linksforcards.com/` returns **308** to the apex. HSTS is `max-age=63072000`. A `?utm_source=seo-audit` request is **200** and its canonical is `https://linksforcards.com` with the query removed.

**Trailing slash and legacy paths.** One **301**, no chain:

| Request | Status | Location |
| --- | ---: | --- |
| `/collections/` | 301 | `/collections` |
| `/pokedex/25/` | 301 | `/pokedex/25` |
| `/us` and `/us/` | 301 | `/` |
| `/en/collections` | 301 | `/collections` |
| `/binders/set/base1` | 301 | `/collections/set/base1` |
| `/de/binders` | 301 | `/de/collections` |
| `/sitemap/root.xml` | 301 | `/sitemap/us-pages.xml` |

`/pokedex/025`, `/pokedex/0`, `/pokedex/99999`, `/collections/set/notaset`, `/UK`, and `/Collections` are **404**. Unknown URLs are not soft 200s.

**Canonicals and hreflang on indexable pages.** Homepage, `/uk`, and `/de` each emit 19 alternate links. The three maps are identical, each page’s canonical appears in its own map, and `x-default` is `https://linksforcards.com`. The cluster is `en-US` and `en` → `/`, `en-GB` and `en-IE` → `/uk`, `de` / `de-AT` / `de-CH` → `/de`, `fr` / `fr-BE` → `/fr`, `nl` / `nl-BE` → `/nl`, `sv`, `nb` and `no` → `/no`, plus `fi`, `pl`, `it`, `es`. Species pages that are allowed to be indexed emit the smaller 12-link cluster and omit `nl`, `sv`, `no`, `fi`, and `pl`. Norwegian pages use `<html lang="nb">`.

**Robots.** `robots.txt` is 120 bytes, cache HIT, and contains:

```text
User-Agent: *
Allow: /
Disallow: /admin

Host: https://linksforcards.com
Sitemap: https://linksforcards.com/sitemap.xml
```

**Sitemaps, current size.** All 50 files returned **200**, `application/xml`, unique `<loc>` values, absolute `https` URLs, no trailing slash, and a single `<lastmod>` of `2026-10-24`. They are prerendered (`x-vercel-cache: PRERENDER`, `HIT`, or `STALE`) with `Cache-Control: public, max-age=3600`. The index is 4,095 bytes and lists every child.

**Status codes and admin.** `/admin` is **307** to `/admin/login`. Both responses send `X-Robots-Tag: noindex, nofollow` and `Cache-Control: private, no-store`. Unknown URLs return **404** with `<meta name="robots" content="noindex">`.

**Googlebot.** Homepage and `/collections/set/base1` returned the same status and the same body size as a normal client (92,505 and 96,879 bytes), both CDN HITs. Nothing in those two responses suggests a separate Googlebot render.

**Internal links for the current URL set.** The US collections HTML (439,076 bytes) contains 1,025 Pokédex links and 176 set links, matching the species and set counts. `/nl/collections` (445,368 bytes, indexable, canonical `https://linksforcards.com/nl/collections`) contains 1,025 links to `/nl/pokedex/{n}`. Generation 1 links all 151 species in that range. Guides, themes, privacy, imprint, partners, updates, and donations are in the header or footer. Current sitemap types are reachable from these hubs. This was not a link graph of every URL.

**Rendering.** `cardImageSrc()` returns null until there is a rights-cleared image source. Lighthouse recorded 0 image bytes on every template. There is no third-party script. Viewport is `width=device-width, initial-scale=1`. Each sampled page has one `<h1>`. The header includes a skip link. Lighthouse accessibility score was 100 on all seven mobile runs, including contrast, tap targets, and font size. The lede’s box sat inside the 412px viewport.

**Lab speed, cached pages.** Mobile Lighthouse 12.8.2, simulated throttling:

| Template | Perf | A11y | Best practices | SEO | LCP | CLS | TBT | Transfer | HTML transfer | DOM nodes |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 97 | 100 | 100 | 100 | 2.4 s | 0 | 80 ms | 304 KB | 11.1 KB | 515 |
| `/de` | 97 | 100 | 100 | 100 | 2.4 s | 0 | 80 ms | 304 KB | 11.4 KB | 516 |
| `/guides/collecting-binders` | 98 | 100 | 100 | 100 | 2.4 s | 0 | 30 ms | 305 KB | 12.5 KB | 235 |
| `/collections` | 97 | 100 | 100 | 100 | 2.6 s | 0 | 70 ms | 338 KB | 43.3 KB | 6,384 |
| `/collections/set/base1` | 97 | 100 | 100 | 100 | 2.6 s | 0 | 40 ms | 315 KB | 14.9 KB | 890 |
| `/pokedex/25` | 97 | 100 | 100 | 100 | 2.6 s | 0 | 50 ms | 322 KB | 21.8 KB | 1,845 |
| `/collections/themes/pikachu` | 97 | 100 | 100 | 100 | 2.6 s | 0 | 40 ms | 320 KB | 19.7 KB | 1,778 |

Uncompressed HTML was larger than the transfer: homepage 92,505 bytes, collections 439,076, Pikachu 219,924, Base set 96,879. CDN HIT TTFB from this client was 40–50 ms on the homepage and the Base set. Lighthouse’s server-response audit was about 0–20 ms on those cached documents. LCP is the lede paragraph, because the page has no hero image. JavaScript transfer is about 156 KB across 8 files on the homepage (10 files, about 163 KB, on set, Pokédex, and theme pages, which add the checklist bundle). Four `woff2` files transfer about 130 KB (26.8, 28.6, 35.7, and 39.4 KB) and are long-cached. CSS is about 6 KB. No Lighthouse SEO audit failed. That score does not judge title length or description quality.

Guides are real articles. The English pillar is 1,367 words in the rendered text. Those are the URLs already picking up impressions. Card pages are a different kind of document, which is the rest of this audit.

## Critical

### 1. PR #3 would mark 226,908 template pages as indexable

**Evidence.** The branch adds `/cards/{setId}-{number}-{name}` for every catalog card, in all 11 locales. `generateMetadata` calls `pageMetadata` with no `index: false`, so every locale is indexable, self-canonical, and in the full hreflang map, including `x-default`. `listCardPaths()` feeds `sitemapEntries`, and `sitemapIds()` adds one `{locale}-cards` file per locale. `robots.txt` already points at the sitemap index, so the new files are submitted as soon as the branch is deployed.

Catalog count on the branch: 20,628 cards (17,423 Pokémon, 2,811 Trainer, 394 Energy), 0 duplicate slugs. English paragraph length, binder sentence included: minimum 36 words, median 61, 90th percentile 68, maximum 86. 55 cards are under 40 words, 20,507 are 40–79, 66 are 80–119, none reach 120. The fact list repeats the same fields.

`messages/en-GB.json` `cardPage` is character-for-character the same object as `en-US`. Species names are translated only for `de`, `fr`, `es`, and `it`. Dutch, Swedish, Norwegian, Finnish, and Polish keep the English species name, which is the same rule the Pokédex already uses.

Reconstructed Base Charizard (`base1` #4), catalog date left as ISO, binder sentence omitted from this quote:

> Charizard is card 4/102 in the Base set, from the Base series, released 1999/01/09. The card is a Stage 2 Fire Pokémon with 120 HP. The listed rarity is Rare Holo. The illustrator is Mitsuhiro Arita. In the Pokédex this is Charizard (0006). I still need this card.

German changes the shell and the species (“Im Pokédex ist das Glurak”). Dutch keeps “Charizard” and translates the shell. Token overlap with English is 21 of 55 unique tokens for German and 23 of 52 for Dutch. Shared tokens are the card name, set, series, number, rarity, type, and illustrator. A Trainer card such as Clefairy Doll has no species line at all. Energy cards are the same shape.

The live site has 8,683 sitemap URLs and, on 25 October, 10 impressions. One of those impressions is already a species query (`dunsparc` → the Spanish Dunsparce page). The pages earning that attention are guides and species checklists, which have a unique name and a real list.

**Why it matters.** Hreflang tells Google which URL to show in which language. It does not make a 60-word template a distinct document. Google’s duplicate and scaled-content systems drop or fold pages like these, often as “Crawled — currently not indexed” or “Discovered — currently not indexed”. A new site that asks for 226,908 of them in one sitemap spends its early crawl on the templates and delays the guides and species pages that can rank. US and UK card pages would be the same English twice. The five locales that do not translate species names would be a translated frame around an English card.

**Fix.** Do this before enabling the card sitemaps.

1. Ship card pages for users in every locale. Index a subset.
2. Index `us`, `de`, `fr`, `es`, and `it`. `noindex, follow` the other six, and leave them out of hreflang and out of the sitemap. That is the rule species pages already use, and UK should follow it until `en-GB` card copy is actually different from `en-US`.
3. Prefer a first sitemap of the cards someone searches for (a few thousand), then add the long tail after those URLs are indexed. Twenty thousand English templates at once is still a lot for a site with 10 impressions.
4. Keep one self-canonical on each indexable card. On the noindex locales, omit `hreflang` entirely. A noindex page that points hreflang at the indexable cluster is the bug in finding 4, repeated 20,000 times.
5. Add something that is not the same sentence with the names swapped: a line that exists only for that card (attack text you have rights to, a note when the card is logged, a distinct printing difference). The ownership sentence is one clause and it changes, so it is not enough on its own.
6. The header still renders every locale. `LanguageSwitcher` grew an optional `locales` prop on this branch, and `SiteHeader` does not pass it. Pass the indexable locale list on card pages, the same way species pages should.

### 2. A full card crawl is a cold render against Neon, and a deploy throws the cache away

**Evidence.** Card routes set `revalidate = 86400`, `dynamicParams = true`, and `generateStaticParams()` returns `[]`. The US URL is rewritten to `/us/cards/:slug` in `beforeFiles` so the one-day cache is actually used. That part is sound. The cost is the miss.

Each render calls `loadPublic()`, which runs four queries (`shipment_cards`, shops, binders, updates). `getDatabase()` calls `applySchema` on every new connection, with `max: 1` connection per isolate. `loadPublic` memoizes for 15 seconds inside that isolate only. `buildCardView` calls `speciesIndex()`, and the first call in an isolate reads every set file (176 files, the whole catalog). `generateMetadata` and the page both call `loadPublic` and `buildCardView`; the 15-second memo collapses the database work for that one isolate, not across isolates.

Vercel’s ISR documentation (fetched 27 October 2026) says each deployment has its own ISR cache, durable cache entries expire after 31 days without access, and a CDN miss reads the durable cache or invokes the function. Concurrent requests for the **same** path are collapsed. Requests for **different** card URLs are not. CDN hits are free. Durable reads and writes are billed in 8 KB units. Published allowances on the pricing page the same day:

| | Hobby (hard cap, no overage) | Pro, iad1, on demand |
| --- | --- | --- |
| ISR writes | 200,000 units / month | from $4.00 / 1,000,000 units |
| ISR reads | 1,000,000 units / month | from $0.40 / 1,000,000 units |
| Function invocations | 1,000,000 / month | from $0.60 / 1,000,000 |
| Active CPU | 4 hours / month | from $0.128 / hour |
| Fast Origin Transfer | 10 GB / month | from $0.06 / GB |

This audit does not know which plan the project is on. The homepage and Base set were CDN HITs. Uncached routes were not: `/og/us` was a MISS at 1,540 ms (34,217 bytes), the German guide image was a MISS at 351 ms (35,217 bytes), and `/admin` was a MISS at 1,327 ms then 989 ms for the login page. Those are wall times, including database and image work, not Active CPU.

A compressed guide document transferred at 12,461 bytes. `ceil(12461 / 8192)` is 2 write units. If a card page stores a similar payload, one cold fill of 226,908 URLs is about **453,816 write units** and **226,908 invocations**. That is 2.3× the Hobby write allowance in a single pass. Indexing only the 20,628 US cards is about 41,000 write units, which fits. A second full pass after a deploy (new cache) doubles it. Bing and SEO crawlers fetch sitemap URLs more eagerly than Google. Google itself had only stored 60 paths by 26 October, so Googlebot alone will not request every card on day one. The sitemap is what invites every other bot to try.

`robots.txt` allows all crawlers everywhere except `/admin`. There is no separate control for the card namespace.

**Why it matters.** The first time a bot walks the card sitemap, every URL is a function invocation and a Neon session until that deployment’s cache is warm. Hobby pauses at the cap. Pro pays, and Neon still has to accept one new connection per cold isolate. The 15-second memo does not survive across those isolates. Shipping the sitemap and the pages in the same deploy is what triggers it.

**Fix.**

1. Keep card URLs out of the sitemap until the indexation decision in finding 1 is in place. A page can exist without being advertised.
2. Cache the public snapshot once per isolate for much longer than 15 seconds, in Vercel Runtime Cache or `unstable_cache`, keyed for the whole catalog rather than per card. Card HTML can be stale for a day already; the snapshot can be too.
3. Build `speciesIndex` at catalog-compile time and import the lookup. A card request should not read 176 JSON files to find eight other printings.
4. Skip `applySchema` on read-only public traffic. Run migrations from the deploy, not from a Googlebot request.
5. Expect the cache to be empty after every production deploy. Don’t deploy the full card sitemap for the first time in the same release as a large content change.
6. If the project is on Hobby, treat 200,000 write units as a ceiling. The US-only subset fits. All 11 locales do not.

## High

### 3. Each card sitemap is 42.12 MiB because every URL repeats 19 hreflang links

**Evidence.** The UK card file generated from the branch rules is **44,162,541 bytes** (42.12 MiB) for 20,628 URLs and 19 alternates (18 hreflang codes plus `x-default`). Gzip of that file is 1,654,237 bytes (1.58 MiB). The same URLs with only `<loc>` and `<lastmod>` are 2,227,826 bytes (2.12 MiB). Google’s sitemap limit is 50MB uncompressed (52,428,800 bytes) and 50,000 URLs. This file is under both, with 8,266,259 bytes (15.8%) of size headroom. The branch splits only when a locale exceeds 40,000 URLs, so 20,628 stays in one file. Eleven files the size of the UK file are about 463 MiB of XML in the build output. The US file is shorter by the missing locale prefix on `<loc>`, on the order of 60 KB.

The live species files show the same pattern at a smaller scale: a prefixed species sitemap is 1,256,762 bytes for 1,025 URLs and 12 alternates.

The route is `force-static`. A function response on Vercel is capped at 4.5 MB, which would reject this file. A prerendered static file is not subject to that cap. The live species sitemaps are served as `PRERENDER`, so the card files need to stay on that path. A 42 MiB static response is legal and still a poor file for Google to fetch 11 times.

**Why it matters.** Crossing 50 MiB, which a longer slug or one more alternate would do, makes Google drop the file and every URL in it. Until then, the index is advertising ~463 MiB of XML, almost all of it the same alternate list repeated 226,908 times. The HTML head already carries those alternates.

**Fix.** Keep hreflang in the HTML only, and emit card sitemaps as `<loc>` plus a real `<lastmod>`. That brings each file to about 2.1 MiB. If the xhtml links stay, split on bytes (about 10,000 URLs per file), not on the 40,000 URL counter. Either way, generate the files as static prerenders and confirm a production `GET` returns 200 with `Content-Type: application/xml` and a body under 50 MiB before submitting them.

### 4. Noindex species pages are linked from indexable pages and announce hreflang without themselves

**Evidence.** `/nl/pokedex/25` and `/fi/pokedex/25` are **200** with `<meta name="robots" content="noindex, follow">`, canonical pointing at themselves, and 12 hreflang links. `nl` is not one of those links. `selfInHreflang` is false. The same pattern is on `/nl/collections/themes/pikachu` (title length 67, `noindex, follow`, 12 hreflang links, self missing). `/nl/collections/themes/yuka-morii` is indexable and has the full 19.

`/nl/collections` is indexable and contains **1,025** links to `/nl/pokedex/{n}`. The language switcher on an indexable species page links all 11 locales, including the five noindex ones. Five locales × 1,025 species is **5,125** noindex URLs, plus 6 species-themes × 5 locales. They are correctly absent from the sitemap. They are not absent from the HTML of pages that are in the sitemap.

Indexed species pages do the cluster correctly: `/pokedex/25` and `/de/pokedex/25` include themselves and omit the noindex locales.

**Why it matters.** Google follows links on indexable pages. The Dutch collections page asks for a crawl of 1,025 URLs that answer with `noindex`. Those URLs then point hreflang at the English, German, French, Spanish, and Italian pages without listing themselves, which breaks the “every alternate lists the full set, including itself” rule. Crawlers spend time on URLs that cannot be indexed, on a site that has barely been crawled.

**Fix.**

1. On a noindex species or theme page, do not render the `alternates.languages` map. Keep the self canonical and `noindex, follow`.
2. Point the language switcher at indexable locales only. The `locales` prop added on the card branch is the right hook; pass `SPECIES_INDEX_LOCALES` from species and species-theme pages, and pass it from the header.
3. Keep these URLs out of the sitemap, which is already the case.
4. Leave the pages up for a visitor who switches language. `noindex` is enough once the indexable pages stop linking them in bulk. The collections Pokédex on `nl`, `sv`, `no`, `fi`, and `pl` should link to the English species URL, or the list should stay on the page without a crawlable `/nl/pokedex/` href.

### 5. The homepage title is the brand, in every language, and US and UK share one description

**Evidence.** Live `<title>` on `/`, `/uk`, and `/de` is `LinksForCards` (13 characters). The layout template `%s · LinksForCards` is not applied because the homepage sets `title: { absolute: m.meta.homeTitle }`. Message files use that same 13-character string for `homeTitle`. The visible H1 is specific: “I collect cards, complete binders, and give them away.”

The US and UK meta descriptions are the same string, 190 characters in the message file. In HTML the apostrophe is escaped, so the attribute is 195 characters:

> I'm Magnus Schmidt. I collect Pokémon cards from shops in Europe and the United States, complete set and generation binders, and give the binders to children. This page is the public record.

`en-GB` `meta` on the card branch is deep-equal to `en-US` `meta`. Rendered homepage text is 694 words on `/` and 696 words on `/uk`. German’s description is its own sentence and is also 195 characters in the HTML.

Other live titles and descriptions:

| URL | Title length | Description length |
| --- | ---: | ---: |
| `/collections` | 41 | 105 |
| `/collections/set/base1` | 44 | 97 |
| `/collections/set/sv8pt5` | 60 | 130 |
| `/collections/themes/pikachu` | 64 | 130 |
| `/collections/generation/1` | 59 | 87 |
| `/pokedex/25` | 34 | 85 |
| `/guides/collecting-binders` | 51 | 96 |
| `/imprint` | 35 | 65 |
| `/updates` | 21 | 71 |
| `/privacy` | 23 | 73 |
| `/partners` | 25 | 73 |
| `/donations` | 34 | 82 |

**Why it matters.** The title is the strongest on-page query signal and the SERP headline. A 13-character brand on all 11 homepages gives Google nothing to rewrite toward “Pokémon card binders” or the local language, and it treats the locales as the same result. The US/UK pair is the same description on top of near-identical body text, with hreflang as the only difference. Descriptions under about 70 characters (imprint, updates, privacy, partners) waste the snippet. The homepage description at 190 characters will be cut in the snippet around 150–160. Pikachu’s theme title at 64 characters will also be cut.

**Fix.**

1. Give each homepage a unique absolute title of roughly 45–60 characters that states the project in that language, and keep the brand at the end if it still fits. The H1 can stay as it is.
2. Write a UK description that is actually British English, or stop publishing a separate UK description and point `en-GB` at the US URL until the body diverges.
3. Pull the homepage description under 160 characters. Put the longer biography in the page.
4. Expand imprint, updates, privacy, partners, and donations descriptions into one concrete sentence each, around 120–160 characters. Shorten the Pikachu theme title so the set or theme name and the brand both survive the snippet.

### 6. Card titles and descriptions are unique and systematically the wrong length

**Evidence.** English title pattern is `{name} {fraction} · {set} card`, then the layout adds ` · LinksForCards`. Across 20,628 cards the titles are unique (0 duplicate groups). Lengths: minimum 37, median 54, 90th percentile 64, 99th percentile 76, maximum 95. **3,673** are over 60 characters and **730** are over 70. German and Dutch medians are 55, with 4,265 over 60.

`metaDescription()` keeps the whole paragraph up to 240 characters, then cuts at the last space after 140, or hard-cuts, and adds an ellipsis. Before the binder sentence, English description length is minimum 157, median 234, maximum 240, and **20,626 of 20,628** are over 160 characters. The first 160 characters are also unique (0 duplicate groups), because the card name and number are in the first sentence. The binder sentence makes the paragraph longer, so the 240-character cap is what Google would receive for essentially every card.

Example title: `Charizard 4/102 · Base card · LinksForCards` (45 characters, fine). A long card name plus a long set name is the 95-character case. The longest set name in the catalog is “30th Celebration: Classic Collection” (36 characters).

**Why it matters.** Uniqueness avoids the “duplicate title” filter. Length still decides whether the set name is visible. A 240-character description is truncated in the snippet and, because of the shared opening (“{name} is card {fraction} in the {set} set…”), the visible part is the template. Scaled pages with the same opening are easier for Google to classify as one pattern.

**Fix.** Use a title that stays under 60 characters for the long names: `{name} {fraction} · {set}`, and drop the extra word “card” and the brand suffix when the result would pass 60. Write the meta description as its own 140–160 character sentence. Do not slice the visible paragraph. Keep the name and the collector number in the first clause so the descriptions stay unique.

## Medium

### 7. Every sitemap URL shares one lastmod, and the index has none

**Evidence.** All 8,683 live sitemap URLs have `<lastmod>2026-10-24</lastmod>`, which is `getMeta().builtAt` for pages, sets, species, and themes, and `GUIDE_UPDATED` (`"2026-10-24"`) for every guide. The sitemap index (4,095 bytes, 50 `<sitemap>` entries) has no `<lastmod>`. The homepage `revalidate` is 60 seconds and the Base set is 3,600, so those documents change without the sitemap date changing. Several child sitemaps were served `STALE` with `Age` around 14,571 seconds while still advertising 24 October.

**Why it matters.** Google uses lastmod to decide what to recrawl, and it ignores the field when the dates look stamped. A single catalog date on the homepage, a guide from the same week, and a species page that has not changed teaches Google to ignore the field. After card pages, a catalog rebuild would touch 226,908 lastmod values at once and look like the whole site changed.

**Fix.** Emit lastmod only where it is the date the document changed. Guides should use their own date, not one constant. The homepage and set pages can use the date the public snapshot last changed. Card pages should use the catalog build date, and a status change should not rewrite all 20,628 dates. Add `<lastmod>` on the sitemap index entries when a child file actually changes. Leaving lastmod off is better than one repeated date.

### 8. Structured data parses, and a few nodes point at the wrong thing

**Evidence.** Every sampled page’s JSON-LD parsed. `@context` is `https://schema.org`. The graph always includes `Organization`, `Person`, `WebSite`, then the page node and a `BreadcrumbList`. The homepage adds `AboutPage` and `FAQPage`. The Base set adds `CollectionPage` and `ItemList`. The collecting-binders guide adds `BlogPosting` and `FAQPage`. There is no `Product`, `Offer`, or `AggregateRating`, which is the right call for a site that does not sell cards.

On `https://linksforcards.com/guides/collecting-binders` the `BlogPosting` `@id` is `https://linksforcards.com/guides/collecting-binders#article` and `mainEntityOfPage` is that same `#article` id. There is no `WebPage` node for the guide. `pageNode()` in `src/lib/jsonld.ts` sets both ids to `#article` for `Article` and `BlogPosting`.

The organization logo is `ImageObject` at `/icon.svg` with width and height `"32"`. Set `ItemList` entries are names only; the set page does not pass URLs. Species lists do pass a URL, and today that URL is the set page, not a card.

Person and Organization include the postal address that is also on the imprint. `WebSite.inLanguage` lists the languages the site actually publishes.

**Why it matters.** `mainEntityOfPage` is how Google ties the article to the URL. Pointing it at the article node is a self-reference, so the article is not anchored to a page. A 32px SVG will not qualify as a logo in rich-result features that want a larger mark. ItemList without URLs does not help Google discover the cards. FAQ markup on the homepage and guides is valid; Google currently shows FAQ rich results for a narrow set of sites, so this is unlikely to produce a snippet and it is not a penalty.

**Fix.** For articles, set `mainEntityOfPage` to the page URL (or a `WebPage` `@id` of `{url}#webpage`) and keep the article `@id` on `#article`. Add a `WebPage` node back into the graph. Publish a logo of at least 112×112, ideally a square PNG, and point `Organization.logo` at it. When card pages exist, put the card URL on each `ItemList` entry on the set, species, and theme pages. Leave prices and `Product` out.

### 9. A few templates are heavy in the DOM, and the font files dominate LCP

**Evidence.** From the Lighthouse table above. `/collections` is 6,384 DOM nodes and 439,076 bytes of HTML, with a DOM-size audit score of 0.5, while the performance category stayed 97. Pikachu the species page is 1,845 nodes and 219,924 bytes (the rendered lede says 213 printings). The Pikachu theme is 1,778 nodes. LCP is 2.6 s on those three and on the Base set, and 2.4 s on the homepage, German homepage, and the pillar guide. The LCP element is text. Four font files are 130 KB of the ~300 KB transfer. `src/lib/fonts.ts` loads Quicksand 600 and 700 and Nunito 400, 600, and 700, each with `latin` and `latin-ext`, `display: swap`.

The largest checklist in the catalog is SWSH Black Star Promos, 304 cards. PR #3 links every card from its set row, so that page’s HTML grows by 304 anchors. Pikachu’s 213 printings become 213 card links.

This is lab data on a cached CDN response. There is no CrUX and no analytics beacon, so there is no field LCP yet. A cold Open Graph render was 0.35–1.5 s before HTML even starts.

**Why it matters.** LCP of 2.5 s is the top of the “good” range. The heavy templates sit just over it in the lab, on text, with the font payload as the main lever. Google renders JavaScript, and 6,384 nodes on the collections page is a long HTML document to parse for a hub whose only job is to link onward. Mobile CLS was 0 and tap targets passed, so this is weight, not a broken layout.

**Fix.**

1. Don’t print all 1,025 species in the first HTML of `/collections`. A letter index can be 26 server-rendered sections that each link to a smaller list, or the initial HTML can include the letters and the first screen of names.
2. Drop unused font weights. The display face is used at 700; 600 is optional. Nunito 400 and 700 may be enough. Subsetting to the characters the UI uses saves more than another cache header. The files are already immutable and long-cached.
3. Keep card art off the page until there is a rights-cleared, sized source. The current null image path is why image transfer is 0. If images come later, serve them through `next/image` with explicit width and height so CLS stays 0.
4. On set pages, a checklist of 300 rows is acceptable. Measure SWSH Black Star Promos after card links land; if the document passes ~300 KB uncompressed, paginate the checklist in the HTML and keep one indexable URL for the set.

### 10. US and UK are the same English, held apart by hreflang

**Evidence.** Live homepage descriptions are identical. Rendered word counts are 694 and 696. On the card branch the entire `meta` object and the entire `cardPage` object match between `en-US` and `en-GB`. Hreflang for the pair is implemented correctly: `en` and `en-US` share `/`, `en-GB` and `en-IE` share `/uk`, and both pages list both URLs.

**Why it matters.** Hreflang is for pages whose content is actually aimed at that region. Two copies of the same English page split signals and double the URL count. For the current 8,683 URLs the cost is modest. For 20,628 card pages it is the entire UK half of finding 1.

**Fix.** Keep `/uk` for pages where the prose is edited for British English (guides are the place to start). For templates that interpolate the same strings, emit one English URL and let `en-GB` and `en-IE` point at it, the way `de-AT` already points at `/de`. Do that for card pages from the first deploy.

### 11. Opening the locale segment changes how unknown URLs 404

**Evidence.** On production, `dynamicParams = false` on the locale layout. `/this-page-does-not-exist` and `/de/this-page-does-not-exist` are both **404**, 5,418 bytes, `lang="en"`, `noindex`, no `<title>`, cache HIT with `Age: 138600`. Both bodies are the root not-found (“This page is not in the binder”), not the localized not-found in the locale layout. That localized component only runs when a matched route calls `notFound()`.

PR #3 removes `dynamicParams = false` from `src/app/(site)/[locale]/layout.tsx`. The comment says a `false` on any segment 404s card slugs that are not in `generateStaticParams`. Current Next.js docs describe `dynamicParams` per segment and do not promise that parent `false` traps child segments. The practical effect of the deletion is that an unknown first path segment becomes eligible for on-demand rendering. `readLocale` still calls `notFound()` for an unknown code, so the status should stay 404. This was not deployed, so it was not requested in production.

**Why it matters.** Bots request junk paths. Today those 404s are cached (the sampled 404 had been cached for about 38 hours). If an unknown prefix starts a function render, probe traffic shows up as invocations. A 200 with a “not found” message would be a soft 404. The current site does not do that.

**Fix.** After the card branch is deployed, request `/not-a-locale`, `/de/not-a-real-page`, and `/cards/not-a-card` and confirm **404**, `noindex`, and a CDN cache. In middleware, return 404 for a first segment that is not a locale and not a known US path, so the probe never enters the app renderer. Keep `dynamicParams = false` on set, species, guide, and theme pages, which the branch still sets on those pages. Give the root 404 a `<title>`.

## Low

### 12. `http://www` takes two redirects

**Evidence.** `http://www.linksforcards.com/` is **308** to `https://www.linksforcards.com/`, then **308** to `https://linksforcards.com/`. Each hop alone is correct.

**Why it matters.** A two-hop chain wastes one crawl request and a little equity. Google handles it. It is not how any internal link is built.

**Fix.** Redirect `http://www` straight to `https://linksforcards.com/` in the domain settings.

### 13. `Host` in robots.txt is a full URL

**Evidence.** The file contains `Host: https://linksforcards.com`. `src/app/robots.ts` sets `host: absoluteUrl("/")`. Google does not use `Host`. Yandex expects a bare hostname.

**Why it matters.** No effect on Google. Slightly wrong if Yandex is a goal.

**Fix.** Delete the `host` field, or set it to `linksforcards.com` with no scheme. Keep the sitemap line, which is correct.

### 14. Admin is disallowed and noindexed

**Evidence.** `Disallow: /admin` plus `X-Robots-Tag: noindex, nofollow` on `/admin` and `/admin/login`, with a private cache header. The login page is a **200** after the **307**.

**Why it matters.** A disallowed URL is not crawled, so Google never sees the `noindex`. For a URL that was never indexed, disallow is enough. The combination is what you want for a private admin.

**Fix.** None. Don’t add `/admin` to the sitemap. Don’t link it from the public layout.

### 15. Open Graph images are cold the first time and then immutable

**Evidence.** `/og/us` and `/og/de/guides/collecting-binders` returned **200** `image/png`, about 34–35 KB, `Cache-Control: public, immutable, max-age=31536000`, and `x-vercel-cache: MISS` on this first request (1,540 ms and 351 ms). They are not in the sitemap. Card pages use the generic `/og/{locale}` image, not a per-card image.

**Why it matters.** Social crawlers, not Googlebot, pay the cold render. A year-long cache is appropriate. Per-card OG images would be another 226,908 function renders. The branch avoids that.

**Fix.** Leave card pages on the locale image. If a guide image 404s for a new slug, the share card breaks; the guide route already 404s unknown slugs (`dynamicParams = false`).

### 16. Small catalog and hreflang edges

**Evidence.** The catalog records `duplicateNumbersCollapsed: 7`, so seven collector numbers are folded into the later card and have no URL. 1,611 of 20,628 cards have no illustrator (about 7.8%), including the whole Prismatic Evolutions set (`sv8pt5`) as the PR description notes. There are 400 illustrator names. The five largest are 5ban Graphics (1,630), Ken Sugimori (1,113), Mitsuhiro Arita (722), Kagemaru Himeno (657), and Kouki Saitou (653). One species has a single printing, 70 have 2–5, 677 have 6–20, 261 have 21–50, and 16 have 51 or more. None of the 1,025 species pages are empty of cards. `/pokedex/1025` is 42,804 bytes and 322 words.

`en-IE`, `de-AT`, `de-CH`, `fr-BE`, and `nl-BE` share a URL with the language’s main page. There is no `fr-CH` or `it-CH`. `nn` (Nynorsk) is not offered; Norwegian is `nb`.

**Why it matters.** These are consistent with the published locale set. They become a problem only if a new page type pretends to be region-specific without a distinct page. Empty species pages are not a current issue.

**Fix.** None required. When illustrator pages are added, link the illustrator name from the card fact (it is plain text today) and expect a page for 5ban Graphics to list 1,630 cards. Paginate that list in the HTML. Apply the same indexation rule as cards: index the locales where the surrounding copy is real, and don’t multiply 400 artists by 11 locales in the sitemap on day one.

## Planned work that is not in the repository

On 27 October 2026 the only open pull request is #3. There is no remote branch for illustrator pages, a card search database, printable checklists, or further guides. The notes below are constraints for those designs, based on the code that is live and on the card branch.

**Illustrator pages.** 400 names, distribution above. Link them from the card fact list or they will depend on the sitemap alone. A page that is a checklist of that artist’s cards is the same shape as a set page and is reasonable to index in the locales you index for cards. A page that is only the name plus the same template sentence is the card-page problem again. Split very large artists (5ban Graphics, 1,630 cards) into HTML pages of a few hundred rows with one canonical series, or one long page if you have measured it under the DOM size of `/collections`.

**Search.** The set, species, and theme checklists filter in the browser. The query never becomes a URL. Keep it that way. If a search database adds `/search?q=`, mark that route `noindex, follow`, canonical to the bare search page, and leave every query URL out of the sitemap and out of hreflang. A `WebSite` `SearchAction` can point at that noindex URL later. Do not generate a landing page per query.

**Printable checklists.** Print today is `window.print()` on the checklist URL. The print stylesheet hides the header, footer, and filters. A second URL such as `/print/...` needs a canonical back to the checklist, or `noindex`. Don’t add print URLs to the sitemap.

**New guides.** The ten current guides are in `GUIDE_SLUGS`, in the sitemap, and linked from the pillar and from each other (`ARTICLE_LINKS`). New guides should follow that: unique title and description, a real article (the pillar is 1,367 words), an entry in the guide index, and at least one link from an existing guide. Give each guide its own `dateModified`. Don’t update `GUIDE_UPDATED` for every guide when one guide ships. Guides are the pages Search Console has already shown impressions for. They should stay easier to find than the card catalog.

## Suggested order

1. Change PR #3’s indexation and sitemap before it merges. Index five locales at most, noindex the rest, and don’t publish the 42 MiB card files with hreflang inside them.
2. Cache the public snapshot and the species lookup so a card miss does not open Neon and reread the catalog.
3. Fix the homepage title, the shared US/UK description, and the noindex species links. Those are live now.
4. Correct `BlogPosting.mainEntityOfPage`, then trim fonts and the collections DOM if field data later shows LCP stuck above 2.5 s.
5. Build illustrator, search, and print URLs to the rules above so they don’t reopen the same indexation problem.

## Measurement notes

- Client: Vercel `iad1`. HTML sizes are uncompressed bytes after the client decoded the body. Lighthouse “transfer” is the compressed size on the wire.
- Sitemap child responses advertised `content-encoding` only some of the time; the byte counts in the inventory are the XML document sizes used for the 50 MB limit, which is defined on the uncompressed file.
- Card sitemap size is a local generation of the branch’s URL rules, not a response from production.
- Paragraph word counts include the binder sentence and approximate theme titles as the slug. They exclude the fact-list duplication.
- Lighthouse SEO 100 means the technical audits it runs (status, viewport, title present, description present, crawlable links, `hreflang` present) passed. It does not score title length, description length, or whether the hreflang target is a near-duplicate.
- No field Core Web Vitals. The site has no analytics beacon, and CrUX will not exist until Chrome has enough traffic.
- Index coverage by reason (“Crawled — currently not indexed” and the rest) was not available from Search Console through SEO Gets.
