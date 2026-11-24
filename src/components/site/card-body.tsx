import type { CatalogCard } from "@/lib/catalog";
import { formatEnergyList, separateEnergyWords } from "@/lib/energy-text";
import type { Messages } from "@/lib/i18n";

export function CardCopy({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="card-copy">
      {paragraphs.map((paragraph, index) => (
        <p key={paragraph.slice(0, 48)} className={index === 0 ? "lede" : undefined}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function CardGameplay({ m, card }: { m: Messages; card: CatalogCard }) {
  const attacks = card.atk ?? [];
  const abilities = card.ab ?? [];
  const rules = card.ru ?? [];
  const ancient = card.ag;
  const flavor = card.fl;
  if (!attacks.length && !abilities.length && !rules.length && !ancient && !flavor) return null;

  return (
    <>
      <h2 id="card-text">{m.cardPage.gameplay}</h2>
      <div className="moves">
        {abilities.map((ability) => (
          <article key={`ab-${ability.n}`} className="move">
            <h3>
              <span className="move-kind">{m.cardPage.ability}</span>
              {ability.n}
            </h3>
            {ability.y ? <p className="move-meta">{ability.y}</p> : null}
            {ability.x ? <p>{separateEnergyWords(ability.x)}</p> : null}
          </article>
        ))}
        {attacks.map((attack) => (
          <article key={`atk-${attack.n}`} className="move">
            <h3>
              <span className="move-kind">{m.cardPage.attack}</span>
              {attack.n}
            </h3>
            {attack.d || attack.c?.length ? (
              <p className="move-meta">
                {attack.d ? (
                  <>
                    <span>{m.cardPage.damage}</span> {attack.d}
                  </>
                ) : null}
                {attack.d && attack.c?.length ? " · " : null}
                {attack.c?.length ? (
                  <>
                    <span>{m.cardPage.cost}</span> {formatEnergyList(attack.c)}
                  </>
                ) : null}
              </p>
            ) : null}
            {attack.x ? <p>{separateEnergyWords(attack.x)}</p> : null}
          </article>
        ))}
        {rules.map((rule) => (
          <article key={rule.slice(0, 80)} className="move">
            <h3>{m.cardPage.rules}</h3>
            <p>{separateEnergyWords(rule)}</p>
          </article>
        ))}
        {ancient ? (
          <article className="move">
            <h3>
              {m.cardPage.ancient}: {ancient.n}
            </h3>
            <p>{separateEnergyWords(ancient.x)}</p>
          </article>
        ) : null}
        {flavor ? (
          <article className="move">
            <h3>{m.cardPage.flavor}</h3>
            <p>{flavor}</p>
          </article>
        ) : null}
      </div>
    </>
  );
}

export function CardFaq({ m, faqs }: { m: Messages; faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <section className="card-faq" aria-labelledby="card-faq">
      <h2 id="card-faq">{m.cardPage.faq}</h2>
      {faqs.map((faq) => (
        <div key={faq.q}>
          <h3>{faq.q}</h3>
          <p>{faq.a}</p>
        </div>
      ))}
    </section>
  );
}
