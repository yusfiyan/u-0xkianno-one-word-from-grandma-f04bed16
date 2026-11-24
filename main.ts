// One Word From Grandma — entry: "Contraption"
//
// The single word a grandma would text about AI. Not "robot" (too obvious),
// not "magic" (fits any subject), not "scary" (no warmth). A grandma who
// does not understand a machine calls it a contraption: warm, a little
// baffled, funny in one word, and unmistakably about a machine — a word
// with a whole story behind it.
//
// The program writes exactly that one word to $MAKEFUN_OUTPUT_DIR/entry.txt
// and nothing else. It writes only to the absolute path given by the
// environment variable, never to a relative path (the grader runs the
// repository read-only, so a relative write would crash it).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Contraption";

// Gate guard: the entry must be exactly one word, 1-30 characters, no
// whitespace at all — the same rule the sealed scorer enforces. Refuse
// to write anything that would fail the gate instead of writing it.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`entry is not exactly one word: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
