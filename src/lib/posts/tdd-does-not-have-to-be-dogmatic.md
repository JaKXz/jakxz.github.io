---
title: TDD doesn't have to be dogmatic
date: '2023-03-06'
updated: '2023-03-06'
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

**As long as you end up incrementally improving your understanding of the problem, and confidence in your solution (i.e. end up with reliable tests) it's successfully test-driven!**

That's it.
That's the post.

If you're curious, what I usually do looks something like this (using React as pseudocode):

1. write out as many behaviours as I can think of in `.skip`ped or `.todo`'d tests:

```tsx
describe('component', () => {
	it.skip('renders this by default');
	it.skip('');
});
```

2. then sketch out a solution

```tsx
function MyComponent({ ...props }) {
	return (
		<div>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	);
}
```

3. go back to the tests and fill them out one at at time ...ish:

```tsx
it('renders this by default', () => {
	expect(wrapper).toContainText(...props);
});
it('does all the other things');
```

4. delete the sketched solution (optional)
5. write a good implementation

```tsx
function MyComponent() {
    const [i18n] = usei18n();
    //...etc
    return ();
}
```

6. get feedback in a pull / merge request
7. add more tests I inevitably missed
8. rinse and repeat

But that's not the right approach for every situation, and I change it up as necessary.

---

This post started as a conversation with a colleague about teaching TDD, and the obstacles that may come in the way;
especially the dogmatic mindset / "strict TDD is the only TDD".
