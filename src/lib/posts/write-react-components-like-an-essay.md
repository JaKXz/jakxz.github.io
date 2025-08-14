---
title: 'Write React components like an essay'
date: '2023-02-09'
updated: '2025-05-08'
categories:
  - 'react'
  - 'web'
  - 'dev'
---

If you're a developer who writes React components, you may have found yourself wondering how to structure your code to make it more readable and maintainable.
One way to approach this is to think of your component code like an essay.

In a well-written essay, the main point (or thesis) is usually near the beginning of the piece, with supporting arguments and evidence following in order of relevance.
Similarly, in a React component, you can put the main export of your file as close to the top as possible, like the "thesis" of your code.
Then, put supporting "arguments" (helpers, subcomponents, etc.) immediately following in order of relevance and use.

Let's look at an example of a `<Profile />` component:

```tsx
// app/components/Profile.tsx (types omitted for brevity)
import React from 'react';
// N more imports

async function getProfile() {
	// ...
}

function utilThatDoesSomething() {}

const SubComponentThatTakesPartialProps = () => {};

const A_CONSTANT = 'CONSTANT_VALUE';

// named or default exports are interchangeable in this story.
// by this point, we might be at line 200+
export default function Profile({ name, ...rest }) {
	const inlineUtilBasedOnPropsButReturnsMarkup = () => {};
	return (
		<div>
			...
			<SubcomponentThatTakesPartialProps {...rest} />
		</div>
	);
}
```

Spotted the problem? 
The `<Profile />` component, the _main export of this file_ and most likely the reason you're opening the file called `Profile.tsx`, is buried under a lot of supporting code.
If you're trying to debug an issue in this component, you have to wade through a lot of code before you find the entry point; at best, it's supporting code, and at worst its just noise and red herrings taking away cognitive budget.
By reordering the code to put the main export first, you can make it easier for other developers (or your future self!) to quickly understand what the component is doing and find the relevant code.

Here's an example of what the same `<Profile />` component could look like if it followed the essay structure:

```tsx
// app/components/Profile.tsx (types omitted for brevity)
import React from 'react';
// N more imports, like the "introductory" sentences that bring in hooks, shared helper functions, and so on

const A_CONSTANT = 'global setup';
const QUERY_LIMIT = 10; // etc.

// now, the thesis, most of the reason why a dev would come to this file
// *most* of the time this will start at line 30 or less when arranged this way!
export function Profile({ name, ...rest }) {
	const [i18n] = usei18n();
	// and so on!
	return (
		<div>
			<Subcomponent>{helper(...rest)}</Subcomponent>
		</div>
	);
}

// supporting components (maybe broken out into their own "essays" as they become more complex)
function Subcomponent({ children }) {
	return <div>{children}</div>;
}

function helper(...args) {
	// Many complex lines
}
```

By structuring your React components like an essay, you can make your code more readable, easier to maintain, and quicker to understand.
Give it a try in your own projects and see how it works for you!

I also think this could be applicable to non React code;
you would just need to determine what the "thesis" is and see if it makes sense to use "supporting arguments" as described here.
