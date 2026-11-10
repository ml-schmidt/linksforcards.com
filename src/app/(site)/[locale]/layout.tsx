import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { display, sans } from "@/lib/fonts";
import { readLocale } from "@/lib/i18n";
import { htmlLang, LOCALES } from "@/lib/locales";
import { site } from "@/lib/site";
import "@/styles/globals.css";

// Leave this segment open. `dynamicParams` is false for a whole route when any
// segment sets it, so a false here would 404 card pages that are rendered on
// demand. Routes that must stay closed set the flag on their own page.

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  applicationName: site.name,
  authors: [{ name: site.sender }],
  icons: { icon: "/icon.svg" },
  other: { "p:domain_verify": "655c1d4935eb8936b435330420c2d586" },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await readLocale(params);
  return (
    <html lang={htmlLang(locale)} className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://assets.tcgdex.net" />
      </head>
      <body>
        <SiteHeader locale={locale} />
        <main id="content" className="wrap">
          {children}
        </main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
