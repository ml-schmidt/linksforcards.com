"use client";

import { useState } from "react";
import type { ImageQuality } from "@/lib/card-images";

/**
 * Hotlinked card art. Plain img, so Vercel does not count an image transformation.
 * A failed load falls through to `fallbackSrc` and then a neutral frame.
 */
export function CardPicture({
  src,
  fallbackSrc = null,
  alt,
  quality,
  eager = false,
  priority = false,
  frame = false,
}: {
  src: string | null;
  fallbackSrc?: string | null;
  alt: string;
  quality: ImageQuality;
  /** Load immediately. Listing pages set this on the first row only. */
  eager?: boolean;
  /** Browser hint for the single image that is the largest on screen. */
  priority?: boolean;
  frame?: boolean;
}) {
  const [seen, setSeen] = useState(src);
  const [attempt, setAttempt] = useState(0);
  if (seen !== src) {
    setSeen(src);
    setAttempt(0);
  }
  const step = seen === src ? attempt : 0;
  const active = step === 0 ? src : step === 1 && fallbackSrc && fallbackSrc !== src ? fallbackSrc : null;
  const width = quality === "high" ? 600 : 245;
  const height = quality === "high" ? 825 : 337;
  const image = active ? (
    <img
      src={active}
      alt={alt}
      width={width}
      height={height}
      loading={eager || priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      onError={() => setAttempt((current) => current + 1)}
    />
  ) : (
    <span className="card-ph" aria-hidden="true" />
  );
  if (!frame) return image;
  return <div className="card-frame">{image}</div>;
}
