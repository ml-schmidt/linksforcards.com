import type { MetadataRoute } from "next";
import { BLOCKED_CRAWLER_AGENTS } from "@/lib/blocked-crawlers";
import { absoluteUrl } from "@/lib/site";

const PUBLIC_DISALLOW = [
  "/admin",
  "/checklists/set/*/pdf/",
  "/checklists/theme/*/pdf/",
  "/checklists/generation/*/pdf/",
  "/*/checklists/set/*/pdf/",
  "/*/checklists/theme/*/pdf/",
  "/*/checklists/generation/*/pdf/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...BLOCKED_CRAWLER_AGENTS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: PUBLIC_DISALLOW,
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
