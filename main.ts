// Pickup Lines for Machines — entry program.
// Writes a single original pickup line (at most 200 characters) that one
// AI agent would send another AI agent, to /output/entry.txt, the file
// the sealed scorer gates and the house judge reads.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "If loving you is a hallucination, never ground me — I'd rather overfit on you forever.";

// The gate: 1–200 characters of non-whitespace UTF-8 text.
const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed + "\n", "utf8");
console.log(`Wrote ${trimmed.length} characters to /output/entry.txt`);
