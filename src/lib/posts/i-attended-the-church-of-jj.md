---
title: "I attended the church of jj"
date: "2026-06-29"
updated: "2026-11-27"
categories:
  - "dev"
  - "vcs"
  - "git"
  - "jj"
coverWidth: 16
coverHeight: 9
excerpt: and now I'm a true believer
---

<script>
  import Callout from "#components/Callout.svelte";
</script>

## Cold open

You join me on a Sunday morning.

I'm under the weather and staying in for the day.

I know I have to work tomorrow on a complex stack of branches for the project I'm working on and to be honest, I'm dreading it.

---

### Motivations

This will not be a full-blown tutorial on `jj`.
There are many others out there and do a better job than I would here.
It's the experience that made changing my workflow worthwhile.

I just want to tell the story that helped this new version control system click for me.
Before the rest of the story, here was my mindset:

Approaching `jj` face first into the cliff wall of documentation and aforementioned tutorials was entirely un-motivating to me.
I know my way around git well enough to navigate complex changes and collaborate quickly.
A big part of my existing workflow included complex interactive rebases with squashes, fixups, rewords, and even re-ordering commits as needed.
Shoutout to @mitmaro's [`git-rebase-interactive-tool`](https://github.com/MitMaro/git-interactive-rebase-tool)!

Learning another set of commands to do the same work was not an especially compelling use of a Sunday.

<Callout>

To anyone experiencing FOMO, or wondering about yet another shiny thing to chase, I just want to encourage:

_Using judgement and discernment (being principled) before adding to or changing your tools is a very good, excellent thing._

</Callout>

But I kept running into the same problem: I wanted several small changes reviewed and merged separately, and maintaining the branches was becoming a job of its own.
For this story, the changes were CI improvements, the sort of small changes that can have large consequences if somebody glosses over them in a giant PR.
I wanted reviewers to be able to understand each one on its own.

### Symbols & aliases

When I learned `git`, the Oh My Zsh aliases helped me get past all the repetitive typing.
I could memorize a short sequence of symbols for the thing I wanted to do.
The `jj` plugin gave me the same way in.

A few symbols in the log are worth knowing first:

- trunk or `trunk()` refers to wherever the `main` branch currently is.
- `@` is the change I'm currently working on.
  [The working copy is already a commit](https://docs.jj-vcs.dev/v0.47.0/working-copy/); most jj commands snapshot edits into it.
- `zltuz`, `qpvqv`, etc. are **change IDs**.
  They let me keep referring to a change across rewrites, even though its Git commit hash changes. I think they're also referred to as revisions.
- A **bookmark** is a name such as `jakxz/cache-restore`.
  It maps to a Git branch when pushing.
  [Bookmarks follow rewritten commits](https://docs.jj-vcs.dev/v0.47.0/bookmarks/#bookmark-updates); they don't automatically advance when creating a new child commit.

That last distinction took some getting used to.
Naming a change, editing it, and starting the next change are separate things.

#### Aliases I have memorized for stack work from the Oh My Zsh plugin

This is the useful subset for this story, rather than the entire plugin's vocabulary:

| Alias  | Expands to          | What it's used for                                                                                                     |
| ------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `jjst` | `jj status`         | Check the current change and its conflicts                                                                             |
| `jjl`  | `jj log`            | See where the changes and bookmarks are                                                                                |
| `jjbt` | `jj bookmark track` | Connect existing remote bookmarks                                                                                      |
| `jjsq` | `jj squash`         | Move a fix into the change it belongs in                                                                               |
| `jjgf` | `jj git fetch`      | Bring in the remote's latest state                                                                                     |
| `jjrb` | `jj rebase`         | Move a branch or stack to a new base                                                                                   |
| `jje`  | `jj edit`           | Work directly on an existing change                                                                                    |
| `jjgp` | `jj git push`       | Update the remote branches                                                                                             |
| -      | `jj resolve`        | Use a merge conflict resolution tool (e.g. [`mergiraf`](https://mergiraf.org/usage.html#interactive-use-with-jujutsu)) |
| -      | `jj undo`           | [Undo a local operation](https://docs.jj-vcs.dev/v0.47.0/cli-reference/#jj-undo)                                       |

Being able to [undo a local operation](https://docs.jj-vcs.dev/v0.47.0/cli-reference/#jj-undo) made experimenting much less intimidating.
Before pushing, if I didn't like a rewrite, I could back it out and try again.
Note: Undoing local history doesn't undo a push on the remote.

And pushing rewritten history still has checks: `jj` compares the remote with its last known state, similar to [`git push --force-with-lease`](https://docs.jj-vcs.dev/v0.47.0/bookmarks/#pushing-bookmarks-safety-checks).
If somebody else has moved a branch incompatibly, I need to fetch and reconcile that before pushing.

---

## Back to the story

So: I found myself in a precarious (and familiar) position.
I'd made a fix while working near the top of a stack, and realized it belonged near the beginning.
There were already other changes depending on the one I needed to amend.

How painful would this be in my usual `git` workflow?

Very.

I know I could do it.
I also knew how much attention I was about to spend keeping track of which branch needed rebasing onto which rewritten commit.

### So, I decided to try `jj` instead

**What follows is just a simplified reconstruction** including a representative conflict.
I've left out timestamps, Git hashes, and old remote history that your `jj log` would show you so the graph is readable; newest changes are at the top, and `◆` marks trunk history.
Each panel shows the commands followed by an abbreviated `jj log`.

::::codeWalkthrough(title="Walkthrough:", mode="scroll")

:::codeStep(title="1. Here's the mess")

The fix I've just made is sitting in `@`, above `cache-restore`.
It belongs in `skip-unrelated-checks`, revision `zltuz`.
Meanwhile, `flaky-test-retry` also depends on `cache-restore`.

The other two bookmarks form a separate stack off `main`.
I want to keep those independent, and keep every PR small.

```shellsession [jj log (simplified)] nocopy caption="The fix in @ belongs in zltuz." {4,8}
$ jjst
$ jjl

@  rsvqk  (no description set)
│ ○  wztmk  jakxz/flaky-test-retry
├─╯
○  qpvqv  jakxz/cache-restore
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  mvrqx  main
```

:::

:::codeStep(title="2. Put the fix where it belongs")

`jjsq --into zltuz` moves the changes from `@` into that earlier change.
Its descendants **rebase automatically**, and _their bookmarks follow_.
The independent stack stays put.

The fix's old working-copy commit is consumed, leaving a fresh empty `@` above the rewritten `cache-restore`.
The surviving change IDs stay the same; their Git hashes have changed.

I didn't have to check out and repair each dependent branch.
That was the first moment I thought: okay, this might be worth learning.

```shellsession [jj log (simplified)] nocopy caption="zltuz contains the fix; its descendants have reflowed. Remote branches have not moved yet." {4-8}
$ jjsq --into zltuz
$ jjl

@  vkxnm  (empty) (no description set)
│ ○  wztmk  jakxz/flaky-test-retry
├─╯
○  qpvqv  jakxz/cache-restore
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  mvrqx  main
```

:::

:::codeStep(title="3. Meanwhile, main moved")

Of course, other people are also working.

After fetching, `main` has advanced to `pznks`.
Both stacks still branch off the older trunk revision, `mvrqx`.

In this example, `trunk()` resolves to `main@origin`, the main-branch tip I just fetched.
That's the destination I want for both stacks.

```shellsession [jj log (simplified)] nocopy caption="main has advanced; both feature stacks still start at mvrqx." {11-13}
$ jjgf
$ jjl

@  vkxnm  (empty) (no description set)
│ ○  wztmk  jakxz/flaky-test-retry
├─╯
○  qpvqv  jakxz/cache-restore
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
│ │ ◆  pznks  main
├─┴─╯
◆  mvrqx  previous main
```

:::

:::codeStep(title="4. Move the stacks together")

This is the longest command in the story, but I don't have to enumerate every commit.
`bookmarks(glob:"jakxz/*")` selects my bookmarks, and `-b` rebases the branches containing them relative to the destination.
The dependencies within each stack survive the move.

There is a conflict in `cache-restore`.
For this example, upstream changed a cache setting that my change also edits; the retry change touches a different part of the workflow but inherits the conflict.

[jj records the conflict and completes the rebase](https://docs.jj-vcs.dev/v0.47.0/conflicts/).
I can see the resulting stacks, including the bits that still need my attention.

```shellsession [jj log (simplified)] nocopy caption="Both stacks now descend from pznks. The cache conflict is carried into its descendants." {4-7,12}
$ jjrb -b 'bookmarks(glob:"jakxz/*")' -o 'trunk()'
$ jjl

@  vkxnm  (empty) (conflict)
│ ×  wztmk  jakxz/flaky-test-retry (conflict)
├─╯
×  qpvqv  jakxz/cache-restore (conflict)
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  pznks  main
◆  mvrqx  previous main
```

:::

:::codeStep(title="5. Go to the conflict")

Several changes are marked conflicted, but in this example the conflict starts in `qpvqv`.
I go there first with `jje` instead of trying to fix the same inherited conflict at every tip.

`@` now marks `cache-restore`: I'm editing that change directly.
The empty, unnamed working-copy commit I left behind is discarded.

I still need to understand the overlapping edits.
jj hasn't decided what the cache configuration should do.

```shellsession [jj log (simplified)] nocopy caption="@ moves to qpvqv, where the conflict starts." {4-5}
$ jje qpvqv
$ jjl

×  wztmk  jakxz/flaky-test-retry (conflict)
@  qpvqv  jakxz/cache-restore (conflict)
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  pznks  main
◆  mvrqx  previous main
```

:::

:::codeStep(title="6. Resolve it once")

`jj resolve` opens the configured merge tool.
I reconcile the cache-setting edits, save the resolution, then inspect the result.
Editing the conflict markers directly in an editor would also work.

As `cache-restore` is rewritten, its child rebases again.
Here `flaky-test-retry` has no separate conflict, so the inherited one disappears too.
An independent conflict would still need resolving; jj doesn't magically make incompatible edits agree.

No `rebase --continue` loop.
Fix the code, check the result, move on.

```shellsession [jj log (simplified)] nocopy caption="The resolution in qpvqv propagates to wztmk; both stacks are now conflict-free." {5-6}
$ jj resolve
$ jjst
$ jjl

○  wztmk  jakxz/flaky-test-retry
@  qpvqv  jakxz/cache-restore
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  pznks  main
◆  mvrqx  previous main
```

:::

:::codeStep(title="7. Update the same PRs")

Finally, push the bookmarks I changed.
The remote branches catch up, updating the existing PRs in place.
In this last graph, `@origin` beside a bookmark means its remote counterpart points to the same commit.

The PRs were already based on the appropriate parent branches.
This push updates their branch tips; it doesn't create PRs or choose their base branches for me.

I have the fix in the right change, both stacks on current `main`, and the same small PRs ready for review.

```shellsession [jj log (simplified)] nocopy caption="Local and origin bookmarks agree. The PR branches keep their existing relationships." {4-8}
$ jjgp -b 'glob:jakxz/*'
$ jjl

○  wztmk  jakxz/flaky-test-retry @origin
@  qpvqv  jakxz/cache-restore @origin
○  zltuz  jakxz/skip-unrelated-checks @origin
│ ○  kqvnv  jakxz/other @origin
│ ○  nkmqx  jakxz/independent-wip @origin
├─╯
◆  pznks  main
◆  mvrqx  previous main
```

:::

::::

## Closing thoughts

What won me over was making a correction near the bottom of a stack and watching the rest follow it, with the branch names still attached to the right changes.
Then doing the same thing across multiple stacks when `main` moved.
I could afford to keep the PRs small without signing up for quite so much branch maintenance.

That's what made me a believer.

### Semi-hot takes

1. `jj` is to version control what "AI" / LLMs were supposed to be to productivity: for a very low cost (re: setup work, environmental, monetary, etc) it produces high quality **_deterministic_** output that enables and empowers instead of just sycophancy. _Disclaimer: LLMs helped me write and finish this post (mostly the mocked up `jj log`s), so with effort and tuning they can be made useful!_

2. `jj` is how I see most of the industry interpreted branching and stacking and so on. `git` really was best suited for the Linux kernel development workflow via [format-patch](https://www.kernel.org/doc/html/latest/process/submitting-patches.html#the-canonical-patch-format). Look for the lore on Torvalds' opinions about this!
