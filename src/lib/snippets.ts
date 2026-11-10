/** First snippet that fits, otherwise the shortest candidate cut on a word boundary. */
export function chooseSnippet(max: number, candidates: string[]): string {
  const options = candidates.map((item) => item.replace(/\s+/g, " ").trim()).filter(Boolean);
  for (const option of options) {
    if (option.length <= max) return option;
  }
  const fallback = options.slice().sort((a, b) => a.length - b.length)[0] ?? "";
  return clipOnWord(fallback, max);
}

/** Cut on a word boundary. A dangling comma or colon is dropped; a full stop can stay. */
export function clipOnWord(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const room = clean.slice(0, max);
  const space = room.lastIndexOf(" ");
  const clipped = (space >= Math.min(40, Math.floor(max * 0.5)) ? room.slice(0, space) : room).trimEnd();
  return clipped.replace(/[,:;]+$/u, "").trimEnd();
}

/** The opening sentence, with closing punctuation when the source had none. */
export function firstSentence(text: string): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (!trimmed) return "";
  const match = trimmed.match(/^[^.!?]*[.!?]/);
  const sentence = (match?.[0] ?? trimmed).trim();
  return /[.!?]$/.test(sentence) ? sentence : `${sentence}.`;
}
