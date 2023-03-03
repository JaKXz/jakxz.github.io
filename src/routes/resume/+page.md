<script>
   import { siteTitle, siteDescription } from '$lib/config.js';
</script>

<svelte:head>

  <title>{siteTitle} | Senior Dev Resume</title>
  <meta name="description" content="{siteTitle} - {siteDescription} Resume" />
</svelte:head>

## 🧰 Technical

~5-{new Date().getFullYear() - 2012} years of experience across all roles in:

- JavaScript in all flavours (e.g. Svelte, TS, Node, React)
- Figma, Balsamiq
- Ruby on Rails
- PostgreSQL, MongoDB
- Django, Flask
- GraphQL
- Git, Mercurial
- TDD, pairing, XP

## 🎒 Experience

[Paddle HR](https://www.paddlehr.com) (acq. LinkedIn) | _Senior UX + Fullstack Developer_<br>
May **2019** - Aug **2020**

- Designed and led the implementation of robust & extensible JAMstack architecture and design system for Paddle's main product offering. A lot of care went in to the tools chosen [and avoided], and it paid off: functionality that's easy to define, structure, and fix with tests; consistent visual language and principles, and fast adoption of new technologies.
- Drove the adoption of GraphQL to easily build useful UIs on top of our 440MM+ pt dataset on career history and skills trajectories and derive useful insights for 30K+ enterprise users.
- Introduced thorough automated testing practices and code consistency for our Python codebases, resulting in faster and more reliable delivery.
- Supervised a Junior Developer and mentored them through daily processes and ad hoc projects helping them become a quickly contributing member of the team.
- Facilitated team retrospectives & pruned meetings leading to immediate & continuous improvement in our process and effectiveness of experiments.
- Reviewed several applicants and conducted personal and technical interviews. Received positive feedback from all applicants for the interview process and mentorship provided.

<details class='no-print'>

[Nulogy](http://nulogy.com) | _Fullstack Developer_<br>
Aug **2016** - Aug **2018**

- Co-invented and implemented [storybook driven development](https://medium.com/nulogy/storybook-driven-development-a3c517276c07) - a methodology for rapidly prototyping/developing visual components - with senior team members.
- Built a data-intensive dashboard serving millions of rows of data with PostgreSQL, Ruby on Rails, React, and Redux to help planners derive insights from historical data.
- Developed consistent component / container pattern for data deserialization and visualizations and shared language with the design team, work that led to the full-fledged [design system](https://nulogy.design/).

[Rangle.io](http://rangle.io) | _Junior Developer_<br>
Oct **2015** - Apr **2016**

- Co-led [tooling & maintenance of OSS starter projects](https://github.com/rangle?utf8=%E2%9C%93&q=starter&type=&language=), making new projects start up 2-5x faster & enabling the aggressive staffing model Rangle uses.
- Consolidated 2 internal products using Koa and React + Redux, managing large datasets from multiple scheduling APIs to set up future employee and company success.

</details>

## ䷢ Open Source

1. [PrismJS](https://github.com/prismjs/prism), _approx. 8.1MM weekly downloads_<br>
   Collaborator helping with reviewing new features, fixes, infrastructure and language definition improvements.

1. [IstanbulJS](https://github.com/istanbuljs), _approx. 10MM weekly downloads_<br>
   Core team member of JS code-coverage tooling focusing on documentation, issue triaging, and community support.

1. [Redux Utilities](https://github.com/redux-utilities), [flux-standard-action](https://www.npmjs.com/package/flux-standard-action), _500K+ monthly downloads_<br>
   Became a core maintainer after reaching out to the original author on the React core team and taking care of repository issues. Contributed architectural decisions and insights to the larger Redux Utilities org.

1. [stylelint-plugin-webpack](https://github.com/webpack-contrib/stylelint-webpack-plugin)<br>
   Took over core maintenance to fix a bug for my own use. Tackled community reported bugs and eventually handed off ownership to the webpack-contrib org.

1. [20+ published npm packages](https://www.npmjs.com/~jakxz)<br>
   Sharing smaller modules as utilities and reusable functions as needed.

## 📚 Education

Approx. 3 years of [internships](https://linkedin.com/in/jgkurian) between **2011-2015**:

<div class="flex wrap justify-between captions">
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/boltmade.webp" alt="Boltmade logo" title="Fullstack Developer at Boltmade" /> Fullstack Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/ims.webp" alt="Intelligent Mechatronic Systems Inc. logo" title="Fullstack Developer at IMS" /> Fullstack Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/coreworx.webp" alt="Coreworx Inc. logo" title="Web Developer at Coreworx" /> Web Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/bluesun.webp" alt="BlueSun logo" title="Web Developer at BlueSun / Wealthserv" /> Web Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/polar.webp" title="Web Developer at Polar Geomatics Solutions LP" alt="Polar Geomatics Solutions logo" /> Web Dev</div>
  <div class="basis-1/3 inline-flex flex-col items-center"><img width="100" height="100" src="/images/morega.webp" alt="Morega systems logo" title="QA Analyst at Morega Systems Inc."/> QA Analyst</div>
</div>

**Bachelor of Knowledge Integration, Honours, inc. | 2016 - 2019**<br>
_Collaborative Design Specialization_<br>
University of Waterloo, Waterloo, ON

**Bachelor of Applied Science, Systems Design Engineering, inc. | 2010 - 2014**<br>
University of Waterloo, Waterloo, ON

<style lang="scss">
  h2:first-of-type {
    margin-top: 0;
  }
  .flex {
    display: flex;
    row-gap: 1rem;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .justify-between {
    justify-content: space-between;
  }
  .basis-1\/3 {
    flex-basis: calc(1/3 * 100%);
  }
  .inline-flex {
     display: inline-flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .captions {
    font-size: 0.8rem;

    @media print {
      display: none;
    }
  }
  img {
    width: 100px;
  }
</style>
