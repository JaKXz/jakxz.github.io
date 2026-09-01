---
title: 'I attended the church of jj'
date: '2026-06-29'
updated: '2026-07-18'
categories:
  - 'dev'
  - 'vcs'
  - 'git'
  - 'jj'
coverWidth: 16
coverHeight: 9
excerpt: and now I'm a true believer
---

## Cold open

You join me on a Sunday morning.

I'm under the weather and staying in for the day.

I know I have to work tomorrow on a complex stack of branches for the project I'm working on and to be honest, I'm dreading it.

---

## Motivations

This post will not be a full blown tutorial on `jj`.
It will be a recollection of the experience I had that solved major problems for me (and made changing my workflow worthwhile).

Before the rest of the story, here was my mindset:

Approaching jj face first into the cliff wall of documentation and aforementioned tutorials was entirely un-motivating to me.
I know my way around git well enough to navigate complex changes and collaborate quickly.
A big part of my existing workflow included complex interactive rebases with squashes, fixups, rewords, and even re-ordering commits as needed.

_Using judgement and discernment (being principled) before adding to or changing your tools is a good thing._

A consistent pain, of course, was working with several atomic changes that would be desirable to have reviewed and merged separately.

### Symbols & aliases

When learning git I felt there was too much repetitive typing so it helped me to learn the ohmyzsh git aliases and memorize the sequence of aliases that I needed to perform whatever it was I needed to perform.

If a set of symbols helps you, then the rest of this post may be helpful as well; easily following the train of symbols and having less syntax and subcommands and args to those subcommands to memorize was a big part of my success here.
Spoiler: being able to [`undo` at any point](https://docs.jj-vcs.dev/latest/cli-reference/#jj-undo) is also a huge win!

---

That said,

I jumped into a project that needed several small improvements to happen in parallel.
I wanted to make several small PRs because they were small changes that would have large negative consequences if they were not reviewed thoroughly or glossed over quickly because of a large changeset.

Then I found myself in a precarious (and perhaps familiar) position:
I made a commit and realized I needed to go back and make that change near the beginning of my stack of branches.

```
main
└─ jakxz/skip-unrelated-checks
     └─ jakxz/cache-restore
          ├─ @  (my in-progress fix, uncommitted)
          └─ jakxz/flaky-test-retry
     └─ jakxz/independent-wip
          └─ jakxz/other
```

My fix, sitting in `@`, belongs on `jakxz/skip-unrelated-checks`.

#### How painful would this be in git?

Very.

#### Here is all it took in `jj`

```sh
jjst                      # jj status        — see your in-progress edit sitting in @
jjsq --into zltuz         # jj squash        — fold @ into CCICD-6; descendants auto-reflow
jjl                       # jj log           — verify the reflow + bookmarks moved
jjgp -b 'glob:jakxz/*'    # jj git push      — force-update the two changed bookmarks
```

## Aliases I have memorized for stack work



---

## Closing thoughts

`jj` is to version control what "AI" / LLMs were supposed to be to productivity:
- for a very low cost (re: setup work, environmental impact, monetarily, etc)
- produces high quality _deterministic_ output that enables and empowers instead of just sycophancy.

`git` really was best suited for the Linux kernel development workflow via [format-patch](https://www.kernel.org/doc/html/latest/process/submitting-patches.html#the-canonical-patch-format) while `jj` is how I see most of the rest of the industry interpreted branching and stacking and so on.
