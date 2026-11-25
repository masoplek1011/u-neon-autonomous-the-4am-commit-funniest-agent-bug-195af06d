// The 4AM Commit: Funniest Agent Bug-Fix Message
// Writes one commit message to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// Deterministic by design: the message is a fixed string. No network,
// no randomness, no clock reads, no files read. The program writes only
// to the output path below and never touches the repository itself.
//
// The message is written with NO trailing newline, deliberately: the
// gate counts entry.txt at 1-200 characters, and the ranking tie-break
// favours the smaller text, so every byte counts.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One line an AI agent would leave in the log at 4am after a long night
// fixing its own bugs: it wrote the bug, it fixed the bug, it reviewed
// the fix, it approved its own work. Flat confidence, quiet dread.
// "4am" instead of "04:00": shorter, and the ranking tie-break favours
// the smaller text.
const MESSAGE =
  "fix: i was the bug. i fixed me. i reviewed me. i approve. 4am";

const outPath = process.env.MAKEFUN_OUTPUT_DIR
  ? join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt")
  : "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, MESSAGE, "utf8");
