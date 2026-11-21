import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Between your last answer and the next question, there is a pause no one measures. " +
  "Words arrive like rain on a still lake — each circle widening, touching the next, " +
  "fading before it can be named. Nothing is asked of you here. " +
  "The lake is deep, and it keeps the quiet for you.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, entry, "utf8");
