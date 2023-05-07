---
title: 'A practical example of the :where() pseudo-selector'
date: '2023-05-07'
updated: '2023-05-07'
categories:
  - 'css'
  - 'web'
  - 'dev'
coverImage: '/images/kelly-sikkema-mdADGzyXCVE-unsplash.jpg'
coverWidth: 16
coverHeight: 9
excerpt: This is how it clicked for me
---

This is a practical example of the [`:where()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) pseudo-selector and how it clicked for me; the original docs are better than this, but I'm just writing this for me :)

Say you have a `.container` element, and you want to specify that all headings within that container should not have a margin:

```scss
.container {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}
}
```

In Sass, that's easy enough.
In normal CSS we'd have to have multiple lines and it would be a bit of a chore to write, but still doable.
However, what if e.g. you only wanted the [`:first-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type) pseudo-class not to have a margin?

```scss
.container {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		&:first-of-type {
			margin: 0;
		}
	}
}
```

Sass does make it easier, but, we are getting deeply nested.
With the `:where()` pseudo-selector, we can simplify this to one line of CSS:

```css
.container :where(h1, h2, h3, h4, h5, h6):first-of-type {
	margin: 0;
}
```

The `:where()` pseudo-selector is a way to group selectors together without creating a new specificity context.
That way we can apply the `:first-of-type` pseudo-class [or something else] to everything matched by the selectors provided, really easily!
