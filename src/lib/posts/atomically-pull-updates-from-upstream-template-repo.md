---
title: 'Atomically pull updates from an upstream template repo'
date: '2022-03-08'
updated: '2022-09-20'
categories:
  - 'github'
  - 'git'
  - 'dev'
---

Earlier this year I helped improve a template repo 3rd party Shopify developers use to build apps.
As we were working on the updates to the app app template in a separate branch from `main`, here's what I suggested to those who wanted to test out our changes early:

1. Add `.diff` to the end of a github PR url
2. Visit that link - copy the link you are redirected to
3. Apply the changes via `curl` & `git`, e.g. for https://github.com/Shopify/shopify-app-node/pull/726.diff:

```sh
curl https://patch-diff.githubusercontent.com/raw/Shopify/shopify-app-node/pull/<PR number>.diff | git apply
git checkout -b get-fix-or-feature-from-shopify
# and so on
```

Your mileage may vary with this especially if you re-arrange files differently than the original template repo, and of course it depends on the authors following "atomic PR" best practices.
Hopefully this is still useful to you to pull down upstream changes and to try to incorporate them in your local environment.
Good luck!

---

Originally shared here: https://github.com/Shopify/shopify-app-template-node/issues/725#issuecomment-1062308480
