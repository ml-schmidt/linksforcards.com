"use client";

import { useEffect, useMemo, useState } from "react";
import { CardPicture } from "@/components/site/card-picture";

type Row = { key: string; title: string; detail: string; have: boolean; image?: string | null; alt?: string; href?: string };

const EAGER_IMAGES = 6;

export function Checklist({
  rows,
  labels,
}: {
  rows: Row[];
  labels: {
    filter: string;
    all: string;
    missing: string;
    have: string;
    search: string;
    empty: string;
    inBinder: string;
    stillMissing: string;
    print: string;
  };
}) {
  const [mode, setMode] = useState<"all" | "missing" | "have">("all");
  const [query, setQuery] = useState("");
  const [printing, setPrinting] = useState(false);
  const needle = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      rows.filter((row) => {
        if (mode === "missing" && row.have) return false;
        if (mode === "have" && !row.have) return false;
        if (!needle) return true;
        return `${row.title} ${row.detail}`.toLowerCase().includes(needle);
      }),
    [rows, mode, needle],
  );

  useEffect(() => {
    if (!printing) return;
    const done = () => setPrinting(false);
    window.addEventListener("afterprint", done);
    window.print();
    return () => window.removeEventListener("afterprint", done);
  }, [printing]);

  const listed = printing ? rows : visible;
  let imageSlot = 0;

  return (
    <div>
      <div className="filters">
        <label className="search">
          <span>{labels.search}</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <fieldset>
          <legend>{labels.filter}</legend>
          {(
            [
              ["all", labels.all],
              ["missing", labels.missing],
              ["have", labels.have],
            ] as const
          ).map(([value, label]) => (
            <label key={value}>
              <input type="radio" name="filter" checked={mode === value} onChange={() => setMode(value)} />
              {label}
            </label>
          ))}
        </fieldset>
        <button type="button" className="quiet" onClick={() => setPrinting(true)}>
          {labels.print}
        </button>
      </div>
      {visible.length === 0 ? <p>{labels.empty}</p> : null}
      <ol className="checklist">
        {listed.map((row) => {
          const slot = row.image ? imageSlot++ : -1;
          return (
            <li key={row.key} id={`line-${row.key}`} className={row.have ? "have" : "miss"}>
              <span className="card-shot thumb">
                <CardPicture
                  src={row.image ?? null}
                  alt={row.alt ?? ""}
                  quality="low"
                  eager={slot >= 0 && slot < EAGER_IMAGES}
                  priority={slot === 0}
                />
              </span>
              <span>
                <strong>{row.href ? <a href={row.href}>{row.title}</a> : row.title}</strong>
                {row.detail ? <small>{row.detail}</small> : null}
              </span>
              <span className="state">{row.have ? labels.inBinder : labels.stillMissing}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
