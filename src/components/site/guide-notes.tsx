import type { Locale } from "@/lib/locales";
import { RichText } from "@/components/site/rich-text";

/** A few sentences that point at a guide. Each sentence carries one link. */
export function GuideNotes({
  locale,
  heading,
  notes,
}: {
  locale: Locale;
  heading: string;
  notes: string[];
}) {
  if (notes.length === 0) return null;
  return (
    <section className="note">
      <h2>{heading}</h2>
      {notes.map((note) => (
        <p key={note}>
          <RichText text={note} locale={locale} />
        </p>
      ))}
    </section>
  );
}
