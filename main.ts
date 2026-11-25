// The One-Liner Groan-Off — entry program.
// Writes one original one-line dad joke to <OUTPUT_DIR>/entry.txt.
// Deterministic: no clock, no randomness, no network. Node standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My smartwatch broke up with me — it said I was too time-consuming.";

// The gate requires 1–140 characters of UTF-8 text, not only whitespace.
// Fail loudly here instead of silently writing an invalid entry.
const length = [...JOKE].length;
if (length < 1 || length > 140 || JOKE.trim().length === 0) {
  throw new Error(`entry joke is ${length} characters, outside the 1–140 gate`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
