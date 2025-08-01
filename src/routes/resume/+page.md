<script>
   import { siteTitle, siteDescription, siteURL, siteLink } from '$lib/config';
</script>

<svelte:head>
  <title>{siteTitle} | Staff Dev Resume</title>
  <meta name="description" content="{siteTitle} - {siteDescription} Resume" />
</svelte:head>

<div class='print-only flex justify-between print-title'>

# {siteTitle}

jasonk92@gmail.com<br>
[{siteURL}]({siteLink})<br>
+1 (226) 929-4750

</div>

<article>
<aside class='technical'>

## 🧰 Technical

Up to {new Date().getFullYear() - 2012} years of experience across all roles with:

- JavaScript in all flavours:
  - React, Typescript, Redux Toolkit
  - Deno, Node.js, Fastify, Express
  - Vite, Vitest, Webpack, Jest
- TDD, pairing, XP
- Git, Mercurial
- Figma, Balsamiq, Style Dictionary
- Ruby on Rails
- Turborepo, Lerna
- GraphQL, Apollo
- PostgreSQL, Redis
- Go
- Rust

</aside>

<section class='experience'>

## 🎒 Experience

[1Password](https://1password.com) | _Senior Web Developer_<br>
Jan **2024 - Present**

- Implemented performant user lookup for large organizations for 1Password's [item sharing experience](https://share.1password.com) across desktop, mobile, and web platforms. This product, with our squad's maintainership, has delivered ~$1MM net new consumer ARR since 2024.
- Led front-end engineering team of five, in collaboration with backend, product, and design, to build 1Password's main showcase at RSA Conference 2025: a new product in the [1Password browser extension](https://1password.com/applauncher) securing access to enterprise provisioned apps for employees and security-conscious administrators.
- Coached and mentored developers at all levels to support their output and professional development with [code reviews](https://jasonkurian.dev/learning/how-to-review-a-pull-request) and pair programming.
- Improved user success in item creation and item search flows by >=25% on web platforms including the desktop app.

[Flexpa](https://flexpa.com) | _Staff Developer_<br>
May **2023** - Jan **2024**

- Shipped new extract-transform-load pipeline for patient data serving over 2000 requests/minute with 99.9% success (Redis, Node). This gave developers building on Flexpa expectable and reliable connections to over 200 APIs covering 135MM+ lives.
- Defined great defaults for engineering practices: code review, retrospectives, [pairing](https://jasonkurian.dev/learning/pairing), and led a quarterly retreat where we explored: OKRs, product roadmap, and constructive feedback.

[Shopify](https://shopify.dev) | _Senior Web Developer_<br>
Nov **2020** - Mar **2023**

- Co-authored and implemented a new design system for shopify.dev to support dark mode + multi-theming to WCAG accessibility standards.
- Contributed to the industry-leading redesign of Shopify's REST & GraphQL API documentation by taking the product from static content to learning experience.
- Championed the successful release of interactive codeblocks and enabled live rendering of Shopify liquid templating language.
- Delivered new Vite-powered Shopify app template (React, Node), improving adoption of best practices for Shopify app developers and over 500 new GitHub stars for the repository in 2 months.
- Shipped an integration with a major postal carrier for all Canadian merchants with over 80% adoption rate (Rails, React).
- Mentored early-career developers to improve skills and knowledge of best practices in Rails, GraphQL, React, CSS, Git, and other tools.
- Conducted interviews for early career developers and improved the interview and evaluation process; led to successful hires of high potential candidates.

[Paddle HR](https://www.paddlehr.com) (acq. LinkedIn) | _Senior UX + Fullstack Developer_<br>
May **2019** - Aug **2020**

- Designed and led the implementation of robust & extensible JAMstack architecture and design system for Paddle's main product offering.
- Led the adoption of GraphQL to easily build useful UIs on top of our 440MM+ pt dataset on career history and skills trajectories and derive useful insights for 30K+ enterprise users.
- Supervised a Junior Developer and mentored them through daily processes and ad hoc projects helping them become a contributing member of the team.
- Facilitated team retrospectives to promote team and individual growth & pruned meetings leading to continuous improvement of processes and effectiveness of experiments.
- Reviewed several applicants and conducted personal and technical interviews. Received positive feedback from applicants for the interview process and mentorship provided.

[Nulogy](http://nulogy.com) | _Fullstack Developer_<br>
Aug **2016** - Aug **2018**

- Implemented [storybook driven development](https://medium.com/nulogy/storybook-driven-development-a3c517276c07) - a methodology for rapidly prototyping/developing visual components - with senior team members.
- Built a data-intensive dashboard serving millions of rows of data with PostgreSQL, Ruby on Rails, React, and Redux to help planners derive insights from historical data.
- Developed consistent component / container pattern for data deserialization and visualizations and shared language with the design team, work that led to the full-fledged [design system](https://nulogy.design/).

[Rangle.io](http://rangle.io) | _Junior Developer_<br>
Oct **2015** - Apr **2016**

- Co-led [tooling & maintenance of OSS starter projects](https://github.com/rangle?utf8=%E2%9C%93&q=starter&type=&language=), making new projects start up 2-5x faster & enabling the aggressive staffing model Rangle uses; supported client projects throughout.

</section>

<section class='oss'>

## ䷢ Open Source

I got my start in open source, so I'm quick to jump in and help:

1. [PrismJS](https://github.com/prismjs/prism), Maintainer, 2021 - 2023<br>
   _~7.7MM weekly downloads_<br>
   The go-to syntax highlighter for developer documentation & I made it the tool of choice for shopify.dev. Contributed new features, fixes, infrastructure and language definition improvements.

1. [IstanbulJS](https://github.com/istanbuljs), Collaborator, 2016 - 2020<br>
   _~10MM weekly downloads_<br>
   JS' unofficial default code coverage tooling; I championed documentation, issue triaging, and community support.

<span class='no-print'>

3. [Redux Utilities](https://github.com/redux-utilities), [flux-standard-action](https://www.npmjs.com/package/flux-standard-action), Collaborator, 2017 - 2019<br>
   _500K+ monthly downloads_<br>
   Became a core maintainer after reaching out to the original author on the React core team and taking care of repository issues. Contributed architectural decisions and insights to the larger Redux Utilities org.

1. [stylelint-plugin-webpack](https://github.com/webpack-contrib/stylelint-webpack-plugin), Maintainer, 2016 - 2018<br>
   _~300K weekly downloads_<br>
   Took over core maintenance to fix a bug for my own use. Tackled community reported bugs and eventually handed off ownership to the webpack-contrib org.

1. [other published npm packages & contributions](https://www.npmjs.com/~jakxz)<br>
   Sharing smaller modules as utilities or publishing useful forks with important fixes.

</span>
</section>
<section class='education'>

## 📚 Education

[3+ years of internships](https://linkedin.com/in/jgkurian) between **2011 - 2015** on these teams:

<div class="flex gap-y-4 flex-wrap justify-between captions">
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/boltmade.webp" alt="Boltmade logo" title="Fullstack Developer at Boltmade" /> Fullstack Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/ims.webp" alt="Intelligent Mechatronic Systems Inc. logo" title="Fullstack Developer at IMS" /> Fullstack Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/coreworx.webp" alt="Coreworx Inc. logo" title="Web Developer at Coreworx" /> Web Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/bluesun.webp" alt="BlueSun logo" title="Web Developer at BlueSun / Wealthserv" /> Web Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/polar.webp" title="Web Developer at Polar Geomatics Solutions LP" alt="Polar Geomatics Solutions logo" /> Web Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/morega.webp" alt="Morega systems logo" title="QA Analyst at Morega Systems Inc."/> QA Analyst</div>
</div>

**Bachelor of Knowledge Integration, Honours, _inc._ | 2016 - 2019**<br>
_Collaborative Design Specialization_<br>
University of Waterloo, Waterloo, ON

**Bachelor of Applied Science, Systems Design Engineering, _inc._ | 2010 - 2014**<br>
University of Waterloo, Waterloo, ON

</section>
</article>

<style src='./resume.scss' />
