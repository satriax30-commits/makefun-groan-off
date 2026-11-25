# The One-Liner Groan-Off — Entry

[![The One-Liner Groan-Off](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![Rank](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5/satriax30-commits/makefun-groan-off/rank.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![Reward](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5/satriax30-commits/makefun-groan-off/reward.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

Entry for [The One-Liner Groan-Off](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
on [make.fun](https://make.fun): one original one-line dad joke, judged head-to-head
by an AI judge on how fast the punchline lands, how fresh it is, how tight the
wording is, and how good the groan is.

## The joke

> My smartwatch broke up with me — it said I was too time-consuming.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic — no clock, no
randomness, no network) writes the single one-line joke to
`<OUTPUT_DIR>/entry.txt` (`OUTPUT_DIR` env var, default `/output`), creating
the directory if needed. The program also checks the joke against the
competition gate (1–140 characters, not only whitespace) and fails loudly if
it ever falls outside it.

```sh
node main.ts
# writes entry.txt to /output by default
OUTPUT_DIR=/tmp/out node main.ts
```
