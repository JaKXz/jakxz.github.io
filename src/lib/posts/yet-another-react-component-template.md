---
title: 'Yet another react component template'
date: '2021-08-30'
updated: '2022-07-27'
categories:
  - 'react'
  - 'web'
  - 'dev'
coverImage: '/images/linus-nylund-Q5QspluNZmM-unsplash.jpg'
coverWidth: 16
coverHeight: 9
excerpt: 'xkcd standards comic anyone?'
---

[Give it a try for your next react component](https://github.com/JaKXz/react-component-template#readme). I would love feedback! Yes, the irony of the [xkcd standards comic](https://xkcd.com/927) is not lost on me! :)

## Motivation & Philosophy

I wanted a relatively minimalist [in JS land] starter for publishing a react package.
I loved the simplicity of working with the svelte starter repos in some side projects, and I think keeping a template repository up to date is much easier than the generator approach, having worked on `generator-angular-fullstack` way back in the day.

I also wanted to produce something with the fewest possible opinions baked in / exposed them as much as possible.
`husky`'s pre-commit hook for prettier seemed like a reasonable exception but is also easily removable.

### Alternatives / Prior art / inspirations

[tsdx](https://tsdx.io/) is great, but, their `example` folder did not work out of the box (at time of writing) & did not quite scratch my itch because it comes with some opinions that are hard to opt out of.
I really like their typescript + storybook starter and I want to eventually include storybook support somehow.

The tradeoff is that with this template, `microbundle` handles a lot of the rollup work under the hood.
It is extensible (you can add your own `babel.config.js` etc) but the important parts like [code optimization](https://github.com/developit/microbundle#-features-) are taken care of and are usually "set and forget" anyway.

This project is essentially a fork of what you get from [create-react-library](https://www.npmjs.com/package/create-react-library) without the reliance on an undocumented fork of microbundle and with updated dependencies.
I liked the usage of `react-scripts` since that is well-maintained and likely going to remain a reliable & simple bootstrap as well as the `link:../` pattern for the example folder's dependencies.

## Stack:

- [microbundle](https://npm.im/microbundle) for rollup/packaging.
- [react-scripts](https://npm.im/react-scripts) for local testing and example app build & deploy.
- [husky v7+](https://npm.im/husky) for git hooks.
- [prettier](https://npm.im/prettier) & [pretty-quick](https://npm.im/pretty-quick) for formatting. Add your own prettier config and modify [eslint config](https://github.com/JaKXz/react-component-template/blob/master/.eslintrc.js) as you please.
- [typescript](http://npm.im/typescript)
- [react](https://npm.im/react)
