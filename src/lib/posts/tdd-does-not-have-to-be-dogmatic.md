---
title: TDD doesn't have to be dogmatic
date: '2023-02-10'
updated: '2023-02-24'
categories:
  - 'TDD'
  - 'testing'
  - 'dev'
coverImage: '/images/markus-spiske-8CWoXxaqGrs-unsplash.jpg'
coverWidth: 16
coverHeight: 9
excerpt: That's right, I said it
---

Write your tests first!
Or don't!
It doesn't matter.

As long as you end up incrementally improving your understanding of the problem, and confidence in your solution (i.e. end up with reliable tests) it's successfully test-driven!

That's it.
That's the post.

If you're curious, what I usually do looks something like this (using React as pseudocode):

```tsx
// first, write out as many behaviours as I can think of in .skipped or .todo tests:
describe('component', () => {
	it.skip('renders this by default');
	it.skip('');
});

// then sketch out a solution
function MyComponent({ ...props }) {
	return (
		<div>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	);
}

// go back to the tests and fill them out one at at time-ish
it('renders this by default', () => {
	expect(wrapper).toContainText(...props);
});
it('does all the other things');

// delete the sketched solution (optional)
function MyComponent() {
	const [i18n] = usei18n();
	//...etc
	return ();
}

// write a good implementation
// get feedback in a pull / merge request
// add more tests I inevitably missed
// rinse and repeat
```

But that's not the right approach for every situation, and I change it up as necessary.

---

This post started as a conversation with a colleague about teaching TDD, and the obstacles that may come in the way;
especially the dogmatic mindset / "strict TDD is the only TDD".
