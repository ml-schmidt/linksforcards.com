"use client";

import { useEffect, useMemo, useState, type FormEvent, type MouseEvent } from "react";
import { CardPicture } from "@/components/site/card-picture";
import {
  cardQueryString,
  emptyCardQuery,
  prepareIndex,
  searchCards,
  type CardIndexPayload,
  type CardQuery,
  type SearchHit,
} from "@/lib/card-query";
import { fill, formatInt } from "@/lib/format";
import type { Locale } from "@/lib/locales";
import { localePath } from "@/lib/routing";

type Option = { value: string; label: string };
type SetGroup = { series: string; options: Option[] };

type Labels = {
  search: string;
  placeholder: string;
  set: string;
  series: string;
  year: string;
  rarity: string;
  type: string;
  supertype: string;
  illustrator: string;
  any: string;
  need: string;
  needUnavailable: string;
  submit: string;
  countOne: string;
  countMany: string;
  empty: string;
  page: string;
  previous: string;
  next: string;
  results: string;
  filters: string;
  fallback: string;
  cardAlt: string;
  supertypes: Record<string, string>;
};

function countLine(labels: Labels, total: number, locale: Locale): string {
  return fill(total === 1 ? labels.countOne : labels.countMany, { count: formatInt(total, locale) });
}

export function CardSearch({
  locale,
  labels,
  initialQuery,
  initialHits,
  initialTotal,
  initialPages,
  species,
  held,
  needEnabled,
  sets,
  series,
  years,
  rarities,
  types,
  illustrators,
}: {
  locale: Locale;
  labels: Labels;
  initialQuery: CardQuery;
  initialHits: SearchHit[];
  initialTotal: number;
  initialPages: number;
  species: string[];
  held: string;
  needEnabled: boolean;
  sets: SetGroup[];
  series: Option[];
  years: string[];
  rarities: Option[];
  types: string[];
  illustrators: Option[];
}) {
  const [query, setQuery] = useState(initialQuery);
  const [payload, setPayload] = useState<CardIndexPayload | null>(null);
  const [failed, setFailed] = useState(false);
  const action = localePath(locale, "/cards");

  useEffect(() => {
    let cancel = false;
    fetch("/api/card-index")
      .then((response) => {
        if (!response.ok) throw new Error("index");
        return response.json() as Promise<CardIndexPayload>;
      })
      .then((data) => {
        if (!cancel) setPayload(data);
      })
      .catch(() => {
        if (!cancel) setFailed(true);
      });
    return () => {
      cancel = true;
    };
  }, []);

  const live = useMemo(() => {
    if (!payload) return null;
    const bits = held ? decode(held) : null;
    return searchCards(prepareIndex(payload, species), query, { locale, held: bits, needEnabled });
  }, [payload, held, species, query, locale, needEnabled]);

  const hits = live?.hits ?? initialHits;
  const total = live?.total ?? initialTotal;
  const pages = live?.pages ?? initialPages;

  useEffect(() => {
    if (!payload) return;
    const next = `${action}${cardQueryString(query)}`;
    if (`${window.location.pathname}${window.location.search}` !== next) {
      window.history.replaceState(null, "", next);
    }
  }, [payload, query, action]);

  function update(patch: Partial<CardQuery>, resetPage = true) {
    setQuery((current) => ({ ...current, ...patch, page: resetPage ? 1 : (patch.page ?? current.page) }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (!payload) return;
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = (key: string) => String(data.get(key) ?? "").trim();
    setQuery({
      ...emptyCardQuery(),
      q: text("q").slice(0, 60),
      set: text("set"),
      series: text("series"),
      year: text("year"),
      rarity: text("rarity"),
      type: text("type"),
      supertype: text("supertype"),
      illustrator: text("illustrator"),
      need: data.get("need") === "1" && needEnabled,
      page: 1,
    });
  }

  const pageHref = (page: number) => `${action}${cardQueryString({ ...query, page })}`;

  return (
    <div>
      <form className="card-filters" action={action} method="get" onSubmit={onSubmit}>
        <label className="search">
          <span>{labels.search}</span>
          <input
            name="q"
            value={query.q}
            placeholder={labels.placeholder}
            onChange={(event) => update({ q: event.target.value.slice(0, 60) })}
          />
        </label>
        <fieldset>
          <legend>{labels.filters}</legend>
          <div className="filter-grid">
            <Select label={labels.set} name="set" value={query.set} any={labels.any} groups={sets} onChange={(set) => update({ set })} />
            <Select label={labels.series} name="series" value={query.series} any={labels.any} options={series} onChange={(seriesId) => update({ series: seriesId })} />
            <Select
              label={labels.year}
              name="year"
              value={query.year}
              any={labels.any}
              options={years.map((year) => ({ value: year, label: year }))}
              onChange={(year) => update({ year })}
            />
            <Select label={labels.rarity} name="rarity" value={query.rarity} any={labels.any} options={rarities} onChange={(rarity) => update({ rarity })} />
            <Select
              label={labels.type}
              name="type"
              value={query.type}
              any={labels.any}
              options={types.map((type) => ({ value: type, label: type }))}
              onChange={(type) => update({ type })}
            />
            <Select
              label={labels.supertype}
              name="supertype"
              value={query.supertype}
              any={labels.any}
              options={["p", "t", "e", "o"].map((value) => ({ value, label: labels.supertypes[value] ?? value }))}
              onChange={(supertype) => update({ supertype })}
            />
            <Select
              label={labels.illustrator}
              name="illustrator"
              value={query.illustrator}
              any={labels.any}
              options={illustrators}
              onChange={(illustrator) => update({ illustrator })}
            />
          </div>
        </fieldset>
        <label className="need-toggle">
          <input
            type="checkbox"
            name="need"
            value="1"
            checked={query.need && needEnabled}
            disabled={!needEnabled}
            onChange={(event) => update({ need: event.target.checked })}
          />
          <span>{labels.need}</span>
        </label>
        {needEnabled ? null : <p className="muted">{labels.needUnavailable}</p>}
        <button type="submit" className="quiet">
          {labels.submit}
        </button>
      </form>
      <h2 id="card-results">{labels.results}</h2>
      <p>{countLine(labels, total, locale)}</p>
      {failed && !payload ? <p className="muted">{labels.fallback}</p> : null}
      {hits.length === 0 ? <p>{labels.empty}</p> : null}
      <ul className="card-results" aria-labelledby="card-results">
        {hits.map((hit, index) => (
          <li key={hit.href}>
            <a href={hit.href}>
              <span className="card-shot">
                <CardPicture
                  src={hit.image}
                  alt={fill(labels.cardAlt, { name: hit.name, set: hit.setName, number: hit.number })}
                  quality="low"
                  eager={Boolean(hit.image) && index < 6}
                  priority={Boolean(hit.image) && index === 0}
                />
              </span>
              <span className="printing-name">{hit.name}</span>
              <span className="printing-meta">
                {hit.fraction} · {hit.setName}
                {hit.year ? ` · ${hit.year}` : ""}
                {hit.illustrator ? ` · ${hit.illustrator}` : ""}
              </span>
            </a>
          </li>
        ))}
      </ul>
      {pages > 1 ? (
        <nav className="pager" aria-label={labels.page}>
          {query.page > 1 ? (
            <a className="button quiet" href={pageHref(query.page - 1)} onClick={(event) => goto(event, query.page - 1)}>
              {labels.previous}
            </a>
          ) : (
            <span className="button quiet" aria-disabled="true">
              {labels.previous}
            </span>
          )}
          <span>{fill(labels.page, { page: formatInt(query.page, locale), pages: formatInt(pages, locale) })}</span>
          {query.page < pages ? (
            <a className="button quiet" href={pageHref(query.page + 1)} onClick={(event) => goto(event, query.page + 1)}>
              {labels.next}
            </a>
          ) : (
            <span className="button quiet" aria-disabled="true">
              {labels.next}
            </span>
          )}
        </nav>
      ) : null}
    </div>
  );

  function goto(event: MouseEvent<HTMLAnchorElement>, page: number) {
    if (!payload) return;
    event.preventDefault();
    update({ page }, false);
  }
}

function decode(value: string): Uint8Array {
  const bin = atob(value);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) out[i] = bin.charCodeAt(i);
  return out;
}

function Select({
  label,
  name,
  value,
  any,
  options,
  groups,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  any: string;
  options?: Option[];
  groups?: SetGroup[];
  onChange: (value: string) => void;
}) {
  const known = new Set<string>();
  for (const option of options ?? []) known.add(option.value);
  for (const group of groups ?? []) for (const option of group.options) known.add(option.value);
  return (
    <label>
      <span>{label}</span>
      <select name={name} value={known.has(value) ? value : ""} onChange={(event) => onChange(event.target.value)}>
        <option value="">{any}</option>
        {groups
          ? groups.map((group) => (
              <optgroup key={group.series} label={group.series}>
                {group.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))
          : options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
      </select>
    </label>
  );
}
