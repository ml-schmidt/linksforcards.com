/**
 * Energy names the public dataset glues together when two symbols sat next to
 * each other, as in "ColorlessColorless". Longer names come first so
 * "Darkness" is not read as a shorter word plus a leftover.
 */
const ENERGY_TYPES = [
  "Colorless",
  "Lightning",
  "Darkness",
  "Fighting",
  "Psychic",
  "Dragon",
  "Fairy",
  "Grass",
  "Water",
  "Metal",
  "Fire",
] as const;

const ENERGY_RUN = new RegExp(`(?:${ENERGY_TYPES.join("|")}){2,}`, "g");

function splitEnergyRun(chunk: string): string[] | null {
  const parts: string[] = [];
  let rest = chunk;
  while (rest.length > 0) {
    const type = ENERGY_TYPES.find((item) => rest.startsWith(item));
    if (!type) return null;
    parts.push(type);
    rest = rest.slice(type.length);
  }
  return parts;
}

/** "Colorless, Colorless" stays readable; "ColorlessColorless" becomes "2× Colorless". */
export function formatEnergyList(costs: readonly string[]): string {
  const groups: string[] = [];
  let index = 0;
  while (index < costs.length) {
    let next = index + 1;
    while (next < costs.length && costs[next] === costs[index]) next += 1;
    const count = next - index;
    const name = costs[index] ?? "";
    groups.push(count > 1 ? `${count}× ${name}` : name);
    index = next;
  }
  return groups.join(", ");
}

/** Separate energy names that the dataset concatenated inside ability and attack text. */
export function separateEnergyWords(text: string): string {
  return text.replace(ENERGY_RUN, (chunk) => {
    const parts = splitEnergyRun(chunk);
    if (!parts || parts.length < 2) return chunk;
    return formatEnergyList(parts);
  });
}
