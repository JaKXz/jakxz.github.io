import{A as e,C as t,M as n,Q as r,dt as i,et as a,ut as o}from"./Cm0wjLCO.js";import"./xihTtKlq.js";import"./RzYtUz3T.js";var s={title:`A practical example of the :where() pseudo-selector`,seoDescription:`See a practical CSS :where() example that groups heading selectors without raising specificity and targets the first heading in a container.`,date:`2023-05-07`,updated:`2023-05-07`,categories:[`css`,`web`,`dev`],coverImage:`/images/kelly-sikkema-mdADGzyXCVE-unsplash.jpg`,coverWidth:16,coverHeight:9,excerpt:`This is how it clicked for me`},{title:c,seoDescription:l,date:u,updated:d,categories:f,coverImage:p,coverWidth:m,coverHeight:h,excerpt:g}=s,_=n(`<p>This is a practical example of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where" rel="nofollow"><code>:where()</code></a> pseudo-selector and how it clicked for me; the original docs are better than this, but I’m just writing this for me :)</p> <p>Say you have a <code>.container</code> element, and you want to specify that all headings within that container should not have a margin:</p> <pre class="language-scss"></pre> <p>In Sass, that’s easy enough.
In normal CSS we’d have to have multiple lines and it would be a bit of a chore to write, but still doable.
However, what if e.g. you only wanted the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type" rel="nofollow"><code>:first-of-type</code></a> pseudo-class not to have a margin?</p> <pre class="language-scss"></pre> <p>Sass does make it easier, but, we are getting deeply nested.
With the <code>:where()</code> pseudo-selector, we can simplify this to one line of CSS:</p> <pre class="language-css"></pre> <p>The <code>:where()</code> pseudo-selector is a way to group selectors together without creating a new specificity context.
That way we can apply the <code>:first-of-type</code> pseudo-class [or something else] to everything matched by the selectors provided, really easily!</p>`,1);function v(n){var s=_(),c=a(r(s),4);t(c,()=>`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
  <span class="token selector">h1,
  h2,
  h3,
  h4,
  h5,
  h6 </span><span class="token punctuation">&#123;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,!0),i(c);var l=a(c,4);t(l,()=>`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,!0),i(l);var u=a(l,4);t(u,()=>`<code class="language-css"><span class="token selector">.container :where(h1, h2, h3, h4, h5, h6):first-of-type</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,!0),i(u),o(2),e(n,s)}export{v as default,s as metadata};