---
title: 'Write React components like an essay'
date: '2023-02-09'
updated: '2023-02-12'
categories:
  - 'react'
  - 'web'
  - 'dev'
---

## TL;DR

Put your file's main export as close to the top of the file as possible, like the "thesis" of an essay.
Put supporting "arguments" (functions, subcomponents, etc) immediately following in order of relevance and use.

---

Picture this:

You've got a codebase and everything is peachy: your files are reasonably named, and you've followed this practice without even thinking about it:

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
If you're lucky, you have a strong culture of code hygiene and an lint rule that limits files to a reasonable length.
Even so, they still have to wade through hundreds of lines of context to get to the "starting point" of what they were looking for so they can start to trace the path back to the issue they need to fix.

### A good essay

In my formal education, I was always told that good writing puts its main point (the "lede") near the start of the paper.
The supporting arguments always followed in order of relevance.

So, let's rewrite `Profile.jsx` to follow this analogy:

```tsx
import ...
// N more imports, like the "introductory" sentences

const A_CONSTANT = 'global setup';
const QUERY_LIMIT = 10; //etc

// now, the thesis, most of the reason why a dev would come to this file
export function Profile({...rest}) {
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

What do you think? [comments coming soon]
