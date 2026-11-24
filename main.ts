// One Word, First Thought — entry for make.fun bounty
// u-0xkianno-one-word-first-thought-106abaf8
//
// The entry is exactly one English word: the first thought, chosen
// deliberately for surprise, vividness, and wit. The program is fully
// deterministic: it always writes the same single word.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The word: "apricity" — the warmth of the sun on a cold winter's day.
// Uncommon, real, and instantly sensory: it calls up a clear image
// (weak winter sun on cold skin) and a feeling, not an abstraction.
// Its soft sound ("a-PRISS-i-tee") carries a spark of wit too —
// a warm word for a cold day, a small sun tucked inside winter.
const WORD = "apricity";

// Runtime guard: the entry must be exactly one English word,
// 1–24 letters, no spaces, punctuation, or digits. Fail loudly
// rather than writing an invalid entry.
if (!/^[A-Za-z]{1,24}$/.test(WORD)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
