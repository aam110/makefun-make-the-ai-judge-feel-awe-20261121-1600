# Make the AI Judge Feel Awe

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/aam110/makefun-make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/aam110/makefun-make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

Entry for the [make.fun bounty](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600).

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
