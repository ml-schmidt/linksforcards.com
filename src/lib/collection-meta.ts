import { fill, formatInt } from "./format";
import type { Messages } from "./i18n";
import type { Locale } from "./locales";
import { chooseSnippet } from "./snippets";

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 160;

/** Document title for a set page. The H1 keeps the older, shorter wording. */
export function setSearchTitle(m: Messages, locale: Locale, name: string, total: number): string {
  const vars = { name, total: formatInt(total, locale) };
  return chooseSnippet(TITLE_LIMIT, [
    fill(m.meta.setMetaTitle, vars),
    fill(m.meta.setMetaTitleShort, vars),
    fill(m.meta.setMetaTitleTiny, vars),
  ]);
}

/** Meta description for a set page. No collection count. */
export function setSearchDescription(
  m: Messages,
  locale: Locale,
  set: { name: string; series: string; releaseDate: string },
  total: number,
): string {
  const vars = {
    name: set.name,
    series: set.series,
    year: set.releaseDate.slice(0, 4),
    total: formatInt(total, locale),
  };
  return chooseSnippet(DESCRIPTION_LIMIT, [
    fill(m.meta.setMetaDescription, vars),
    fill(m.meta.setMetaDescriptionShort, vars),
    fill(m.meta.setMetaDescriptionTiny, vars),
  ]);
}

/** Document title for a series page. The H1 keeps the older wording. */
export function seriesSearchTitle(m: Messages, locale: Locale, series: string, count: number): string {
  const vars = { series, count: formatInt(count, locale) };
  const full = count === 1 ? fill(m.meta.seriesMetaTitleOne, vars) : fill(m.meta.seriesMetaTitle, vars);
  return chooseSnippet(TITLE_LIMIT, [full, fill(m.meta.seriesMetaTitleShort, vars)]);
}

/** Meta description for a series page. */
export function seriesSearchDescription(m: Messages, locale: Locale, series: string, count: number): string {
  const vars = { series, count: formatInt(count, locale) };
  const full = count === 1 ? fill(m.meta.seriesMetaDescriptionOne, vars) : fill(m.meta.seriesMetaDescription, vars);
  return chooseSnippet(DESCRIPTION_LIMIT, [full, fill(m.meta.seriesMetaDescriptionShort, vars)]);
}
