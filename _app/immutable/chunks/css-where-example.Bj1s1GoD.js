import{s as X,n as C}from"./scheduler.z2Rozvoi.js";import{S as B,i as F,e as l,s as m,H as L,a as o,p as k,b as f,o as M,z as P,d as s,g as E,k as a}from"./index.DHW7RiJG.js";function J(U){let n,z='This is a practical example of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where" rel="nofollow"><code>:where()</code></a> pseudo-selector and how it clicked for me; the original docs are better than this, but I’m just writing this for me :)',w,p,I="Say you have a <code>.container</code> element, and you want to specify that all headings within that container should not have a margin:",v,c,g,D=`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
	<span class="token selector">h1,
	h2,
	h3,
	h4,
	h5,
	h6 </span><span class="token punctuation">&#123;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,y,i,W=`In Sass, that’s easy enough.
In normal CSS we’d have to have multiple lines and it would be a bit of a chore to write, but still doable.
However, what if e.g. you only wanted the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type" rel="nofollow"><code>:first-of-type</code></a> pseudo-class not to have a margin?`,_,r,x,G=`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,H,u,R=`Sass does make it easier, but, we are getting deeply nested.
With the <code>:where()</code> pseudo-selector, we can simplify this to one line of CSS:`,S,h,T,V=`<code class="language-css"><span class="token selector">.container :where(h1, h2, h3, h4, h5, h6):first-of-type</span> <span class="token punctuation">&#123;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,b,d,j=`The <code>:where()</code> pseudo-selector is a way to group selectors together without creating a new specificity context.
That way we can apply the <code>:first-of-type</code> pseudo-class [or something else] to everything matched by the selectors provided, really easily!`;return{c(){n=l("p"),n.innerHTML=z,w=m(),p=l("p"),p.innerHTML=I,v=m(),c=l("pre"),g=new L(!1),y=m(),i=l("p"),i.innerHTML=W,_=m(),r=l("pre"),x=new L(!1),H=m(),u=l("p"),u.innerHTML=R,S=m(),h=l("pre"),T=new L(!1),b=m(),d=l("p"),d.innerHTML=j,this.h()},l(e){n=o(e,"P",{"data-svelte-h":!0}),k(n)!=="svelte-1kbfmwu"&&(n.innerHTML=z),w=f(e),p=o(e,"P",{"data-svelte-h":!0}),k(p)!=="svelte-ayi1hi"&&(p.innerHTML=I),v=f(e),c=o(e,"PRE",{class:!0});var t=M(c);g=P(t,!1),t.forEach(s),y=f(e),i=o(e,"P",{"data-svelte-h":!0}),k(i)!=="svelte-86qs1i"&&(i.innerHTML=W),_=f(e),r=o(e,"PRE",{class:!0});var q=M(r);x=P(q,!1),q.forEach(s),H=f(e),u=o(e,"P",{"data-svelte-h":!0}),k(u)!=="svelte-u4xhxg"&&(u.innerHTML=R),S=f(e),h=o(e,"PRE",{class:!0});var A=M(h);T=P(A,!1),A.forEach(s),b=f(e),d=o(e,"P",{"data-svelte-h":!0}),k(d)!=="svelte-82iybl"&&(d.innerHTML=j),this.h()},h(){g.a=null,E(c,"class","language-scss"),x.a=null,E(r,"class","language-scss"),T.a=null,E(h,"class","language-css")},m(e,t){a(e,n,t),a(e,w,t),a(e,p,t),a(e,v,t),a(e,c,t),g.m(D,c),a(e,y,t),a(e,i,t),a(e,_,t),a(e,r,t),x.m(G,r),a(e,H,t),a(e,u,t),a(e,S,t),a(e,h,t),T.m(V,h),a(e,b,t),a(e,d,t)},p:C,i:C,o:C,d(e){e&&(s(n),s(w),s(p),s(v),s(c),s(y),s(i),s(_),s(r),s(H),s(u),s(S),s(h),s(b),s(d))}}}const O={title:"A practical example of the :where() pseudo-selector",date:"2023-05-07",updated:"2023-05-07",categories:["css","web","dev"],coverImage:"/images/kelly-sikkema-mdADGzyXCVE-unsplash.jpg",coverWidth:16,coverHeight:9,excerpt:"This is how it clicked for me"};class Q extends B{constructor(n){super(),F(this,n,null,J,X,{})}}export{Q as default,O as metadata};
