# Workshop notes

## Learner

- Jason is an experienced software engineer and an established technical
  blogger, not a beginning writer.
- Existing strengths include first-person authority, concise declarations,
  practical examples, rhetorical questions, parenthetical asides, and dry
  humor.
- The teaching target is argument shape: surface the claim, make the experience
  prove it, explain causality, and control scope.

## Teaching preferences

- Use short, interactive lessons with one tangible change to the real draft.
- Require retrieval and original writing before showing suggested language.
- Give focused feedback instead of replacing Jason’s prose.
- Treat Sean Goedecke as a source of structural techniques, not a voice to
  imitate.

## Current article decisions

- Core direction: persuade Git-comfortable engineers that jj fits real stacked
  work, not merely that its commands are shorter.
- Narrative payoff: Sunday learning leads to successful use on Monday.
- Depth: story only; do not add the full alias field guide from `src/todo.md`.
- Identifiers: anonymize consistently. Associate `zltuz` with
  `jakxz/skip-unrelated-checks`; remove the stray `CCICD-6` label.
- Closing: leave the current “Closing thoughts” unchanged for now and make the
  preceding essay earn it.
- Editing protocol: do not modify the post’s prose until Jason completes the
  relevant lesson exercise.

## Vale protocol

- Run `vale src/lib/posts/i-attended-the-church-of-jj.md` after a human pass.
- Treat `House.MetaOpening`, repeated words, and genuine spelling errors as
  high-signal prompts.
- Treat `write-good` as an intentionally opinionated second reader. In
  particular, E-Prime’s objections to forms of “to be” are not house rules.
- Preserve deliberate fragments, first person, rhetorical questions, humor,
  and conversational asides even when a generic rule objects.
- Review vague intensifiers and qualifiers for specificity; do not remove them
  mechanically.

The initial jj draft produces no errors, 11 warnings, and 29 suggestions. Its
most useful alert identifies “This post will…” as a meta-opening, which agrees
with lesson 1. “Under the weather” and the one-word answer “Very.” are examples
where keeping the existing voice may matter more than satisfying a generic
rule. See learning record 0002 for the full editorial classification.

Across all ten posts, 192 of 273 alerts come from E-Prime alone. The vocabulary
reduces the original 42 spelling alerts to one likely typo (`curiousity`) plus
two useful casing prompts (`github` and `url`). This baseline is why Vale stays
advisory and why alert counts are not a writing-quality score.

## Planned lesson sequence

1. Find the sentence you are willing to defend.
2. Make the story prove the claim.
3. Explain the mechanism, not every command.
4. Borrow structure while preserving voice.
5. Earn the existing ending.

Create only the next lesson after reviewing evidence from the current one.
