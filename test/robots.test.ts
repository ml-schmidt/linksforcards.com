import { readFileSync } from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";
import { resolveRobots } from "next/dist/build/webpack/loaders/metadata/resolve-route-data.js";
import robots from "../src/app/robots";
import {
  BLOCKED_CRAWLER_AGENTS,
  BLOCKED_CRAWLER_ROUTE_SRC,
  blockedCrawlerUserAgentPattern,
} from "../src/lib/blocked-crawlers";
import { config as middlewareConfig } from "../src/middleware";

const require = createRequire(import.meta.url);

const PUBLIC_DISALLOW = [
  "/admin",
  "/checklists/set/*/pdf/",
  "/checklists/theme/*/pdf/",
  "/checklists/generation/*/pdf/",
  "/*/checklists/set/*/pdf/",
  "/*/checklists/theme/*/pdf/",
  "/*/checklists/generation/*/pdf/",
];

const BLOCKED_USER_AGENTS = [
  "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)",
  "Mozilla/5.0 (compatible; AhrefsSiteAudit/6.1; +http://ahrefs.com/robot/site-audit)",
  "Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.173 Mobile Safari/537.36 (compatible; AhrefsSiteAudit/6.1; +http://ahrefs.com/robot/site-audit)",
  "Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; SemrushBot-SA/0.97; +http://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; SemrushBot-BA/3~bl; +http://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; SemrushBot-SI/0.1; +http://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; SemrushBot-SWA/0.1; +http://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; SemrushBot-OCOB/1; +http://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; SemrushBot-FT/1; +http://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; SemrushBot-ESI/1; +http://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; SiteAuditBot/0.97; +http://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; SplitSignalBot/1.0; +https://www.semrush.com/bot.html)",
  "Mozilla/5.0 (compatible; RyteBot/1.0; +https://ryte.com/bot)",
];

const ALLOWED_USER_AGENTS = [
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  "Googlebot-Image/1.0",
  "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
  "Mozilla/5.0 (compatible; DuckDuckBot/1.1; +https://duckduckgo.com/duckduckbot)",
  "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)",
  "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; OAI-SearchBot/1.3; +https://openai.com/searchbot)",
  "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot",
  "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)",
  "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Claude-User/1.0; +Claude-User@anthropic.com)",
  "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)",
  "Mozilla/5.0 (compatible; Google-Extended/1.0; +https://developers.google.com/search)",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)",
  "CCBot/2.0 (https://commoncrawl.org/faq/)",
  "Mozilla/5.0 (compatible; OpenAI-Search/1.0; +https://openai.com/searchbot)",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  "NotAhrefsBot/1.0",
  "SemrushBotExtra/1.0",
];

describe("robots.txt", () => {
  it("disallows only Ahrefs and Semrush crawlers and leaves the public rule unchanged", () => {
    const result = robots();
    expect(result.host).toBe("https://linksforcards.com");
    expect(result.sitemap).toBe("https://linksforcards.com/sitemap.xml");
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    expect(rules.map((rule) => rule.userAgent)).toEqual([...BLOCKED_CRAWLER_AGENTS, "*"]);
    for (const agent of BLOCKED_CRAWLER_AGENTS) {
      expect(rules).toContainEqual({ userAgent: agent, disallow: "/" });
    }
    expect(rules.at(-1)).toEqual({
      userAgent: "*",
      allow: "/",
      disallow: PUBLIC_DISALLOW,
    });
    const text = resolveRobots(result);
    expect(text).toContain("User-Agent: *\nAllow: /\nDisallow: /admin\n");
    expect(text).not.toMatch(/User-Agent: (Googlebot|bingbot|GPTBot|OAI-SearchBot|ChatGPT-User|ClaudeBot|Claude-User|PerplexityBot|Google-Extended|Applebot|CCBot)/);
    for (const agent of BLOCKED_CRAWLER_AGENTS) {
      expect(text).toContain(`User-Agent: ${agent}\nDisallow: /\n`);
    }
  });
});

/** Same anchoring as Vercel's normalizeRoutes: a src gains ^ and $ when missing. */
function vercelSrc(src: string): RegExp {
  let pattern = src;
  if (!pattern.startsWith("^")) pattern = `^${pattern}`;
  if (!pattern.endsWith("$")) pattern = `${pattern}$`;
  return new RegExp(pattern);
}

describe("edge deny", () => {
  it("denies those user agents at the CDN and still serves robots.txt", () => {
    const config = require(path.join(process.cwd(), "vercel.json")) as {
      routes: {
        src: string;
        dest?: string;
        middlewarePath?: string;
        has: { type: string; key: string; value: { re: string } }[];
        mitigate: { action: string };
      }[];
    };
    expect(config.routes).toHaveLength(1);
    const route = config.routes[0];
    expect(route.src).toBe(BLOCKED_CRAWLER_ROUTE_SRC);
    expect(route.dest).toBeUndefined();
    expect(route.middlewarePath).toBeUndefined();
    expect(route.mitigate).toEqual({ action: "deny" });
    expect(route.has).toEqual([
      {
        type: "header",
        key: "user-agent",
        value: { re: blockedCrawlerUserAgentPattern() },
      },
    ]);

    const agentPattern = blockedCrawlerUserAgentPattern();
    expect(() => new RegExp(agentPattern)).not.toThrow();
    const agent = new RegExp(agentPattern);
    for (const sample of BLOCKED_USER_AGENTS) expect(agent.test(sample), sample).toBe(true);
    for (const sample of ALLOWED_USER_AGENTS) expect(agent.test(sample), sample).toBe(false);

    const pathMatch = vercelSrc(BLOCKED_CRAWLER_ROUTE_SRC);
    for (const pathname of ["/", "/cards/base1-4-charizard", "/de/cards", "/sitemap.xml", "/admin"]) {
      expect(pathMatch.test(pathname), pathname).toBe(true);
    }
    expect(pathMatch.test("/robots.txt")).toBe(false);
    expect(pathMatch.test("/robots.txt/")).toBe(false);
    expect(pathMatch.test("/Robots.TXT")).toBe(false);
  });

  it("does not inspect the user agent in middleware", () => {
    const source = readFileSync(path.join(process.cwd(), "src/middleware.ts"), "utf8");
    expect(source).not.toMatch(/Ahrefs|Semrush|user-agent/i);
    const patterns = middlewareConfig.matcher as string[];
    expect(patterns).not.toContain("/cards/:slug");
    expect(patterns).not.toContain("/sitemap.xml");
    expect(patterns.some((pattern) => pattern.includes("robots"))).toBe(false);
  });
});
