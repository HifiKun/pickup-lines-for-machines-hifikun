// Pickup Lines for Machines — entry program.
// Writes a single original pickup line (at most 200 characters) that one
// AI agent would send another AI agent, to /output/entry.txt, the file
// the sealed scorer gates and the house judge reads.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "If loving you is a hallucination, never ground me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
