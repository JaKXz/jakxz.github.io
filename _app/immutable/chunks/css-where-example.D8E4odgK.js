import{a as u,t as d}from"./disclose-version.B0yNOEMG.js";import{s,f as g,i as t,r as n,n as m}from"./runtime.BDSRHlc4.js";import{h as o}from"./html.Bc-HG6yU.js";const v={title:"A practical example of the :where() pseudo-selector",date:"2023-05-07",updated:"2023-05-07",categories:["css","web","dev"],coverImage:"/images/kelly-sikkema-mdADGzyXCVE-unsplash.jpg",coverWidth:16,coverHeight:9,excerpt:"This is how it clicked for me"};var k=d(`<p>This is a practical example of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where" rel="nofollow"><code>:where()</code></a> pseudo-selector and how it clicked for me; the original docs are better than this, but I’m just writing this for me :)</p> <p>Say you have a <code>.container</code> element, and you want to specify that all headings within that container should not have a margin:</p> <pre class="language-scss"><!></pre> <p>In Sass, that’s easy enough.
In normal CSS we’d have to have multiple lines and it would be a bit of a chore to write, but still doable.
However, what if e.g. you only wanted the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type" rel="nofollow"><code>:first-of-type</code></a> pseudo-class not to have a margin?</p> <pre class="language-scss"><!></pre> <p>Sass does make it easier, but, we are getting deeply nested.
With the <code>:where()</code> pseudo-selector, we can simplify this to one line of CSS:</p> <pre class="language-css"><!></pre> <p>The <code>:where()</code> pseudo-selector is a way to group selectors together without creating a new specificity context.
That way we can apply the <code>:first-of-type</code> pseudo-class [or something else] to everything matched by the selectors provided, really easily!</p>`,1);function S(r){var p=k(),e=s(g(p),4),l=t(e);o(l,()=>`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
	<span class="token selector">h1,
	h2,
	h3,
	h4,
	h5,
	h6 </span><span class="token punctuation">&#123;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),n(e);var a=s(e,4),i=t(a);o(i,()=>`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
	<span class="token selector">h1,
	h2,
	h3,
	h4,
	h5,
	h6 </span><span class="token punctuation">&#123;</span>
		<span class="token selector"><span class="token parent important">&amp;</span>:first-of-type </span><span class="token punctuation">&#123;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),n(a);var c=s(a,4),h=t(c);o(h,()=>`<code class="language-css"><span class="token selector">.container :where(h1, h2, h3, h4, h5, h6):first-of-type</span> <span class="token punctuation">&#123;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),n(c),m(2),u(r,p)}export{S as default,v as metadata};
