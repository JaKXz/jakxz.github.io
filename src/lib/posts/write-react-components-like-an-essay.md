---
title: 'Write React components like an essay'
date: '2023-02-09'
updated: '2023-02-23'
categories:
  - 'react'
  - 'web'
  - 'dev'
---

## TL;DR

Put your file's main export as close to the top of the file as possible, like the "thesis" of an essay.
Put supporting "arguments" (helpers, subcomponents, etc) immediately following in order of relevance and use.

---

Let's take this `Profile.jsx` component as an (counter) example:

```tsx
// app/components/Profile.jsx
import ...
// N more imports

async function getProfile() {
  // ...
}

function utilThatDoesSomething() {

}

const SubComponentThatTakesPartialProps = () => {

}

const A_CONSTANT = 'CONSTANT_VALUE';

// named or default exports are interchangeable in this story.
// by this point, we're at line 200+
export default function Profile({name, ...rest}) {
  const inlineUtilBasedOnPropsButReturnsMarkup = () => {

  };
  return (
    <div>
      ...
      <SubcomponentThatTakesPartialProps {...rest} />
    </div>
  );
}
```

Imagine you've just made an excellent hire; they're super driven and pick things up quickly.
You ask them to go investigate an issue and they realize it's in the Profile.

Now look again at the code in the `Profile.jsx` file.
If you're lucky, you have a strong culture of code hygiene and a lint rule that limits files to a reasonable length.
Even so, they likely still have to wade through at least a couple hundred lines of code to get to an entrypoint so they can start to trace the path back to the issue they need to fix.
The supporting code along the way could be confusing or at worst distracting.

### Show me the code

In your formal education (assuming at least high school or equivalent) you may have heard that good writing puts its main point (the "lede" or thesis) near the start of the paper.
The supporting arguments follow in order of relevance.

So, let's rewrite `Profile.jsx` to follow this analogy:

```tsx
import ...
// N more imports, like the "introductory" sentences that bring in hooks,
// shared helper functions and so on

const A_CONSTANT = 'global setup';
const QUERY_LIMIT = 10; //etc

// now, the thesis, most of the reason why a dev would come to this file
// *most* of the time this will start at line 30 or less when arranged this way!
export function Profile({name, ...rest}) {
  const [i18n] = usei18n();
  // and so on!
  return <div> ... </div>;
}

//supporting components (maybe broken out into their own "essays" as they become more complex)
function Subcomponent({}) {

}

function helper(...args) {

}
```

This reduces distractions and allows developers to cmd+click ("Go To Definition") their way through the component to build an understanding much faster than having to hop back and forth across an unorganized file.
What do you think?
