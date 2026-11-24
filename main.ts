import { mkdirSync, writeFileSync } from "node:fs";

// One word for the boss: the boss whose "quick question" is never quick.
// The gate allows exactly one word, 1-30 characters: refuse anything else
// rather than writing an entry the scorer would reject.
const WORD = "QuickQuestion";

if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`entry must be a single word of 1-30 characters, got: ${WORD}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
