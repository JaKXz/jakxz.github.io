---
title: TDD doesn't have to be dogmatic
date: '2023-02-10'
updated: '2023-02-13'
categories:
  - 'TDD'
  - 'dev'
  - 'xxx'
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

If you're curious, what I usually do looks something like this:

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

// go back to the tests and fill them out one at at time ish
it('renders this by default', () => {
	expect(wrapper).toContainText(...props);
});
it('does all the toher things');

//delete the sketched solution (optional)
function MyComponent() {
	const [i18n] = usei18n();
	//....etc
	return ();
}
```

But that's not the right approach for every situation, and I change it up however is necessary.
