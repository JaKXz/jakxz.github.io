---
title: "Manage node versions with brew"
date: "2019-10-24"
updated: "2022-04-04"
categories:
  - "macos"
  - "homebrew"
  - "nodejs"
coverImage: "/images/bean-bros-Jaa3KDv9xi4-unsplash.jpeg"
coverWidth: 16
coverHeight: 9
excerpt: Use homebrew to simply manage your local node installations
---

<script>
  import Callout from "$lib/components/Callout.svelte";
</script>

## TL;DR

```bash
brew install node node@14 node@16 # latest, and all LTS versions at time of writing

brew info node@14 # gets the $PATH variable you'll need to use node v14. You will only need the following line:

export PATH="/usr/local/opt/node@14/bin:$PATH" # Tada! In this shell session only, node v14 is the executable that will be used first!
```

---

If you're like me, you like to keep your system's package versions up to date with the latest features and security patches as vigilantly as possible.
So if you've had to work with multiple node versions on one development machine, you may have had a hard time keeping both these worlds in sync.
Today I learned/pieced together a way to keep myself sane after dealing with node/npm permission issues for the last time.
This also has only been possible relatively recently (at time of writing) since `node@X` versions have only been recently published as **keg-only** formulae on `brew` (keg-only is important).

I have worked with [`nvm`](https://github.com/creationix/nvm) and [`n`](https://npm.im/n) and I don't want to disparage either because they do work, and even work well at scale, but both have their flaws IMHO.
Since `brew` manages all my packages for me, why not keep using it?

## What is a `keg-only` formula?

From [brew.sh](https://docs.brew.sh/FAQ#what-does-keg-only-mean):

> It means the formula is installed only into the Cellar; it is not linked into <code>/usr/local</code>. This means most tools will not find it. We don’t do this for stupid reasons. You can still link in the formula if you need to with <code>brew link</code>.

Essentially this means that you can have as many versions of node installed on your computer without them conflicting with each other, and as a bonus, your `npm` installation!
Tangentially (from my experience), this is another problem that has been solved relatively recently, since `npm@latest` has become much more stable across versions of node.

<Callout>
Now, run the commands at the top of this article and you should be good to go!
Remember you will need to <code>export</code> your <code>$PATH</code> variable in every shell session you want to use a different version of node from the default version.
</Callout>

If you want to set a different version of node as your default system version:

```bash
brew info node@16 # for example

# put this export at the top of your bashrc, zshrc, or other terminal config to get the default version you want
echo 'export PATH="/usr/local/opt/node@16/bin:$PATH"' >> ~/.zshrc
```

---

Originally published here: https://jakxz.svbtle.com/manage-node-versions-with-brew
