/**
 * Ahrefs and Semrush product tokens, checked against their crawler docs.
 * Ahrefs (https://ahrefs.com/robot): AhrefsBot and AhrefsSiteAudit. Both obey
 * robots.txt. A verified site owner can tell AhrefsSiteAudit to ignore it.
 * Semrush (https://www.semrush.com/bot/): one token per tool. SemrushBot-SA is
 * the previous Site Audit token; SiteAuditBot replaced it on that page.
 * Search engines and AI crawlers are not listed here.
 *
 * `vercel.json` repeats the route and the user-agent pattern. The robots test
 * fails if the two copies drift.
 */
export const BLOCKED_CRAWLER_AGENTS = [
  "AhrefsBot",
  "AhrefsSiteAudit",
  "SemrushBot",
  "SiteAuditBot",
  "SemrushBot-SA",
  "SemrushBot-BA",
  "SemrushBot-SI",
  "SemrushBot-SWA",
  "SplitSignalBot",
  "SemrushBot-OCOB",
  "SemrushBot-FT",
  "RyteBot",
  "SemrushBot-ESI",
] as const;

/**
 * Every path except `/robots.txt`. Semrush treats a 4xx on that file as "no
 * robots.txt" and then crawls the site. The file itself stays a normal response
 * so the Disallow rules can be read. A trailing slash is the same file.
 *
 * Vercel anchors this pattern and checks it with JavaScript `RegExp`, so it
 * cannot use a PCRE-only flag. Letter classes keep `/Robots.TXT` open too.
 */
function letterClass(value: string): string {
  return value.replace(/[A-Za-z]/g, (letter) => {
    return `[${letter.toUpperCase()}${letter.toLowerCase()}]`;
  });
}

const ROBOTS_FILE = `${letterClass("robots")}\\.${letterClass("txt")}`;

export const BLOCKED_CRAWLER_ROUTE_SRC = `/(?!${ROBOTS_FILE}/?$).*`;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * User-agent match for the tokens above, not as part of a longer name.
 * The vendors send these tokens in this casing. Vercel also treats `re` as
 * case-insensitive. The pattern stays valid in JavaScript `RegExp`.
 */
export function blockedCrawlerUserAgentPattern(): string {
  const body = BLOCKED_CRAWLER_AGENTS.map(escapeRegExp).join("|");
  return `(?:^|[^A-Za-z0-9])(?:${body})(?:[^A-Za-z0-9]|$)`;
}
