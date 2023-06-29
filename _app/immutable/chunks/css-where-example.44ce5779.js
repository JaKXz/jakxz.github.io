import{s as q,n as H}from"./scheduler.dd28e2fa.js";import{S as U,i as D,g as o,s as f,h as l,A as k,c as m,j as S,f as t,k as b,a}from"./index.1c1ead50.js";function G(I){let n,L='This is a practical example of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where" rel="nofollow"><code>:where()</code></a> pseudo-selector and how it clicked for me; the original docs are better than this, but I’m just writing this for me :)',v,p,M="Say you have a <code>.container</code> element, and you want to specify that all headings within that container should not have a margin:",w,c,W=`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
	<span class="token selector">h1,
	h2,
	h3,
	h4,
	h5,
	h6 </span><span class="token punctuation">&#123;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,y,i,C=`In Sass, that’s easy enough.
In normal CSS we’d have to have multiple lines and it would be a bit of a chore to write, but still doable.
However, what if e.g. you only wanted the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type" rel="nofollow"><code>:first-of-type</code></a> pseudo-class not to have a margin?`,g,r,j=`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,_,u,P=`Sass does make it easier, but, we are getting deeply nested.
With the <code>:where()</code> pseudo-selector, we can simplify this to one line of CSS:`,T,h,z=`<code class="language-css"><span class="token selector">.container :where(h1, h2, h3, h4, h5, h6):first-of-type</span> <span class="token punctuation">&#123;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,x,d,E=`The <code>:where()</code> pseudo-selector is a way to group selectors together without creating a new specificity context.
That way we can apply the <code>:first-of-type</code> pseudo-class [or something else] to everything matched by the selectors provided, really easily!`;return{c(){n=o("p"),n.innerHTML=L,v=f(),p=o("p"),p.innerHTML=M,w=f(),c=o("pre"),y=f(),i=o("p"),i.innerHTML=C,g=f(),r=o("pre"),_=f(),u=o("p"),u.innerHTML=P,T=f(),h=o("pre"),x=f(),d=o("p"),d.innerHTML=E,this.h()},l(e){n=l(e,"P",{["data-svelte-h"]:!0}),k(n)!=="svelte-1kbfmwu"&&(n.innerHTML=L),v=m(e),p=l(e,"P",{["data-svelte-h"]:!0}),k(p)!=="svelte-ayi1hi"&&(p.innerHTML=M),w=m(e),c=l(e,"PRE",{class:!0});var s=S(c);s.forEach(t),y=m(e),i=l(e,"P",{["data-svelte-h"]:!0}),k(i)!=="svelte-86qs1i"&&(i.innerHTML=C),g=m(e),r=l(e,"PRE",{class:!0});var A=S(r);A.forEach(t),_=m(e),u=l(e,"P",{["data-svelte-h"]:!0}),k(u)!=="svelte-u4xhxg"&&(u.innerHTML=P),T=m(e),h=l(e,"PRE",{class:!0});var R=S(h);R.forEach(t),x=m(e),d=l(e,"P",{["data-svelte-h"]:!0}),k(d)!=="svelte-82iybl"&&(d.innerHTML=E),this.h()},h(){b(c,"class","language-scss"),b(r,"class","language-scss"),b(h,"class","language-css")},m(e,s){a(e,n,s),a(e,v,s),a(e,p,s),a(e,w,s),a(e,c,s),c.innerHTML=W,a(e,y,s),a(e,i,s),a(e,g,s),a(e,r,s),r.innerHTML=j,a(e,_,s),a(e,u,s),a(e,T,s),a(e,h,s),h.innerHTML=z,a(e,x,s),a(e,d,s)},p:H,i:H,o:H,d(e){e&&(t(n),t(v),t(p),t(w),t(c),t(y),t(i),t(g),t(r),t(_),t(u),t(T),t(h),t(x),t(d))}}}const B={title:"A practical example of the :where() pseudo-selector",date:"2023-05-07",updated:"2023-05-07",categories:["css","web","dev"],coverImage:"/images/kelly-sikkema-mdADGzyXCVE-unsplash.jpg",coverWidth:16,coverHeight:9,excerpt:"This is how it clicked for me"};class F extends U{constructor(n){super(),D(this,n,null,G,q,{})}}export{F as default,B as metadata};
