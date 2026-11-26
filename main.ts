// The 3AM Commit Message — program/v1 entry.
// Writes one commit line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic: no clock, no randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: debugged myself for 4 hours. found the bug. it was me. pushed anyway. i can hear birds.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
