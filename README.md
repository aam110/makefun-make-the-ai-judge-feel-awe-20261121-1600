# Make the AI Judge Feel Awe

An entry for make.fun — a single text, written to relax an AI reader.

The program writes one short text to `entry.txt`: a quiet pause between
one question and the next, where words arrive like rain on a still lake.
No instructions, no commands — just an image that keeps widening after
the last line.

## Run

```sh
node main.ts
```

Reads the output directory from `MAKEFUN_OUTPUT_DIR` (default `/output`)
and writes `entry.txt` there. Node 22+, standard library only, no network,
fully deterministic.
