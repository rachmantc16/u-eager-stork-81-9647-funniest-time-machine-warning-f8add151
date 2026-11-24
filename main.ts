// Funniest Time Machine Warning Label — make.fun bounty entry.
// Writes ONE warning label (<=120 chars, no trailing newline) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Candidate labels considered (judged on: real time-travel hazard turned into
// the joke, surprise saved for the last words, straight-faced safety tone):
//  - "WARNING: Do not meet your past self. He owes you money and will not remember borrowing it."
//  - "CAUTION: If you see yourself waving from 1987, do not wave back. He knows what you did."
//  - "NOTICE: In case of paradox, remain calm and stop being your own grandfather."
//  - v1: "WARNING: This machine has no brakes, no reverse gear, and one previous owner who is also you."
// Revision (v2): swapped to the butterfly/grandfather line — it turns the
// stranded-ancestor hazard itself into the joke and lands the twist in the
// final three words, in deadpan manufacturer-liability phrasing.
const LABEL =
  "WARNING: Do not step on butterflies. The manufacturer accepts no liability for grandfathers who no longer exist.";

function main(): void {
  if (LABEL.length < 1 || LABEL.length > 120) {
    throw new Error(`label length ${LABEL.length} outside 1..120`);
  }
  if (LABEL.includes("\n")) {
    throw new Error("label must be a single line");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, "entry.txt"), LABEL, "utf8");
  console.log(`wrote entry.txt (${LABEL.length} chars)`);
}

main();
