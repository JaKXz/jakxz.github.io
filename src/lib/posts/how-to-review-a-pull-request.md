---
title: 'How to review a pull/merge request'
date: '2024-05-08'
updated: '2024-05-12'
categories:
    - 'coaching'
    - 'dev'
coverImage: '/images/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg'
excerpt: Why reviews matter, what to do, and some tips for etiquette
---

<script>
    import Callout from "$lib/components/Callout.svelte";
</script>

Good reviews are a gift to your future self and teammates who have to maintain and understand the code being merged to ship new code on top of it.
Since most developers spend more time reading code than writing it, practicing reading and reviewing code is has multiplicative benefits for you and eventually you'll find yourself reviewing code as written here right in your editor. 
This is one senior dev's take among several others on the internet based on my own experience, usually being the one who leads the team in quantity and quality of reviews:
**your mileage may vary so help yourself to a few grains of salt 🙂** especially because I'm trying not to be too generic here but it's inevitable.

<Callout>

**Note the synonyms:** PR == Pull Request == MR == Merge request

My understanding of the lore behind the different names is that "pull request" was a typo in the early days of GitHub but we all just rolled with it.
If I'm wrong let me know in the comments or make a PR to correct me ;)

</Callout>

There are three points along the spectrum of context you possess about the code in question that you might be at.

1. High context - you are actively working on this area of the codebase and you are familiar with the inner workings, tribal knowledge, and arcane hacks going on.
2. In-between - you touch this code occasionally, enough to be able to make changes with some confidence; but, are not an expert.
3. Low / outside your normal context - you may or may not be responsible for this area of the codebase, but you don't work on it very much. Most of what you'reading in this PR is new to you or vaguely familiar (product-wise) at best.

Here are some guidelines and questions you can ask yourself and the author(s) to provide a good review depending on how much context you have.
The points along the spectrum are just prompts to help you ask good questions; at each level these should guide you towards providing higher quality feedback.
You can mix and match as you see fit!

## High context

- Acting as QA for your teammate is the best way to "have each other's backs" - testing for and catching edge cases that the author may have missed is clutch. Good teammates will thank you.
- Product minded questions are crucial: _why_ do we need this change? Can the desired behaviour be achieved with simpler or no code? Remember, less (no) code is best code.
- Ideally, PRs are relatively small (`+200/-200` lines changed at most excluding tests/fixtures etc);
    - if not, can the PR be split up to introduce the change in steps? This might point out gaps in dependencies to the author.
    - For the inevitably large MR, try to review commit by commit, and ideally those commits are where most of the time bound context/documentation is.
    - Or, review file by file, _going in order_ from UI -> backend, or, backend out to UI. Can you trace the logic from your developer tools back to the server requests?

## In-between

e.g. This might be a component library that you use but don't modify often.

- This change should further educate you on this area of the codebase. 
    - If not, ask for clarification. Requesting documentation via tests is a good place to start.
    - Asking for comments might be a double edged sword (since they can go out of date) - the best approach is to ask for a comment explaining _why_ a complex section of code exists or is written the way it is, rather than _what_ that code is doing.
- Ideally, you spot / point out patterns that repeat or can be simplified to make the area of the codebase easier to understand.

## Low context

e.g. A dependency bump or security request somewhere you've been asked to provide eyes on.

- Does a smoke test pass? Are you able to pull, build, and test the code locally? Anything strange in CI?
- Ask about "general best practices" e.g. usually an X project does Y, does that apply here? Why or why not?
- Can you articulate the _Why_ *and* _What_ (rather than *How*) of this change succinctly back to the author?

## What about general etiquette?

First, assume positive intent: past you or your colleague are not deliberately trying to lower the quality of the codebase.

With that in mind, ask these questions from a posture of learning and curiousity.
Easily applicable one-line suggestions help get the PR shipped sooner so don't be shy about those!

Finally, pick your battles!
Remember where you are in your product cycle: first make it work, then make it fast, _then_ make it right.
Code review should support you and your teammates getting to this - you don't have to ask every question every time. 

---

What do you think? What did I miss?
