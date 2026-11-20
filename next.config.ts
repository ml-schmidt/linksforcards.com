import type { NextConfig } from "next";
import { cdnConfigHeaders } from "./src/lib/cdn-cache";
import { US_BEFORE_FILE_REWRITES } from "./src/lib/routing";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: { formats: ["image/avif", "image/webp"] },
  serverExternalPackages: ["@electric-sql/pglite", "pdfkit"],
  outputFileTracingExcludes: {
    "*": ["node_modules/@electric-sql/**"],
  },
  outputFileTracingIncludes: {
    "/:locale/checklists/:kind/:id/pdf/:paper": ["./src/assets/fonts/**/*"],
    "/checklists/:kind/:id/pdf/:paper": ["./src/assets/fonts/**/*"],
  },
  async redirects() {
    return [
      // One hop, including a trailing slash. These must not land on another redirect.
      { source: "/us", destination: "/", statusCode: 301 },
      { source: "/us/", destination: "/", statusCode: 301 },
      { source: "/en", destination: "/", statusCode: 301 },
      { source: "/en/", destination: "/", statusCode: 301 },
      { source: "/binders", destination: "/collections", statusCode: 301 },
      { source: "/binders/", destination: "/collections", statusCode: 301 },
      { source: "/binders/:path*", destination: "/collections/:path*", statusCode: 301 },
      { source: "/binders/:path*/", destination: "/collections/:path*", statusCode: 301 },
      {
        source: "/:locale(uk|de|fr|it|es|nl|sv|no|fi|pl)/binders",
        destination: "/:locale/collections",
        statusCode: 301,
      },
      {
        source: "/:locale(uk|de|fr|it|es|nl|sv|no|fi|pl)/binders/",
        destination: "/:locale/collections",
        statusCode: 301,
      },
      {
        source: "/:locale(uk|de|fr|it|es|nl|sv|no|fi|pl)/binders/:path*",
        destination: "/:locale/collections/:path*",
        statusCode: 301,
      },
      {
        source: "/:locale(uk|de|fr|it|es|nl|sv|no|fi|pl)/binders/:path*/",
        destination: "/:locale/collections/:path*",
        statusCode: 301,
      },
      // Other trailing slashes. /us and /en stay with middleware so /us/en/… collapses in one hop.
      {
        source: "/:path((?!us$|us/|en$|en/).+)/",
        destination: "/:path",
        statusCode: 301,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // US English has no public prefix. These rewrites run on the CDN, so the
        // public path stays the cache key and middleware does not run first.
        ...US_BEFORE_FILE_REWRITES,
      ],
      afterFiles: [
        { source: "/sitemap.xml", destination: "/sitemap-index" },
        { source: "/sitemap/:id.xml", destination: "/sitemap/:id" },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/icon.svg",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      ...cdnConfigHeaders(),
    ];
  },
};

export default nextConfig;
