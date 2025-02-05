<script>
   import { siteTitle, siteDescription, siteURL, siteLink } from '$lib/config.js';
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

5-{new Date().getFullYear() - 2012} years of experience across all roles in:

- JavaScript in all flavours
  - Svelte, Typescript, Node, React
  - Vite, Webpack, Storybook
  - Jest, Vitest
- Figma, Balsamiq, Sass, Style Dictionary
- Turborepo, Lerna
- GraphQL
- Ruby on Rails
- PostgreSQL, Redis

</aside>

<section class='experience'>

## 🎒 Experience

[Flexpa](https://flexpa.com) | _Staff Developer_<br>
May **2023** – Jan **2024**

- Shipping new extract-transform-load pipeline for patient data serving over 2000 requests/minute with 99.9% success (Redis, Node). This new architecture allows us to provide expectable and reliable connections to over 200 APIs covering 135MM+ lives.
- Leading a small agile team through scoping, shaping, and shipping projects from the ground up for our customer facing applications in the monorepo (UX, a11y, Next.js, Turborepo).
- Providing high quality coaching and mentoring in code reviews, pairing, and 1:1s to help the team grow and improve.
- Defining great defaults for practices like retrospectives, [pairing](/learning/pairing), and internal documentation to improve the team's effectiveness; e.g. running our quarterly retreat where we dig deep into OKRs, Product roadmap & understanding, and constructive personal and team feedback.

[Shopify](https://shopify.dev) | _Senior Web Developer_<br>
Nov **2020** – Mar **2023**

- Championed the successful release of interactive codeblocks and enabled live rendering of Shopify liquid templating language. This improved satisfaction by >=25%.
- Delivered new Vite-powered Shopify app template (React, Node), improving adoption of best practices for Shopify app developers and over 500 new GitHub stars for the repository in 2 months.
- Shipped an integration with a major postal carrier for all Canadian merchants with over 80% adoption rate (Rails, React).
- Co-authored and implemented a new design system for Shopify.dev to support dark mode + multi-theming to WCAG accessibility standards.
- Contributed to the industry-leading redesign of Shopify's REST & GraphQL API documentation.
- Mentored early-career developers to improve skills and knowledge of best practices in Rails, GraphQL, React, CSS, Git, and other tools.
- Conducted interviews for early career developers and improved the interview and evaluation process; led to successful hires of high potential candidates.

[Paddle HR](https://www.paddlehr.com) (acq. LinkedIn) &nbsp; | &nbsp; _Senior UX + Fullstack Developer_ &nbsp; | &nbsp; **May 2019 – Aug 2020**

[Nulogy](http://nulogy.com) &nbsp; | &nbsp; _Fullstack Developer_ &nbsp; | &nbsp; **Aug 2016 – Aug 2018**

[Rangle.io](http://rangle.io) &nbsp; | &nbsp; _Junior Developer_ &nbsp; | &nbsp; **Oct 2015 – Apr 2016**

</section>

<section class='oss'>

## ䷢ Open Source

I got my start in open source, so I'm quick to jump in and help:

1. [PrismJS](https://github.com/prismjs/prism), Maintainer, 2021 - Present<br>
   _~7.7MM weekly downloads_<br>
   I work with a small global team to review new features, fixes, infrastructure and language definition improvements.

1. [IstanbulJS](https://github.com/istanbuljs), Collaborator, 2016 - 2020<br>
   _~10MM weekly downloads_<br>
   Core team member of code-coverage tooling focusing on documentation, issue triaging, and community support.

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

[Internships 3+ years cumulatively](https://linkedin.com/in/jgkurian) between **2011-2015** on these teams:

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
