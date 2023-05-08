import{S as ke,i as _e,s as Ee,k as l,q as o,a as _,l as p,m as c,r as n,h as t,c as E,n as g,b as r,E as s,F as ae}from"./index.f1db45d5.js";function ge(ue){let i,q,m,b,U,F,I,u,G,C,V,X,H,w,de=`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
	<span class="token selector">h1,
	h2,
	h3,
	h4,
	h5,
	h6 </span><span class="token punctuation">&#123;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,O,d,B,y,x,J,K,W,v,fe=`<code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,A,f,N,T,Q,Y,j,k,me=`<code class="language-css"><span class="token selector">.container :where(h1, h2, h3, h4, h5, h6):first-of-type</span> <span class="token punctuation">&#123;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,z,h,Z,P,$,ee,D,te,se;return{c(){i=l("p"),q=o("This is a practical example of the "),m=l("a"),b=l("code"),U=o(":where()"),F=o(" pseudo-selector and how it clicked for me; the original docs are better than this, but I’m just writing this for me :)"),I=_(),u=l("p"),G=o("Say you have a "),C=l("code"),V=o(".container"),X=o(" element, and you want to specify that all headings within that container should not have a margin:"),H=_(),w=l("pre"),O=_(),d=l("p"),B=o(`In Sass, that’s easy enough.
In normal CSS we’d have to have multiple lines and it would be a bit of a chore to write, but still doable.
However, what if e.g. you only wanted the `),y=l("a"),x=l("code"),J=o(":first-of-type"),K=o(" pseudo-class not to have a margin?"),W=_(),v=l("pre"),A=_(),f=l("p"),N=o(`Sass does make it easier, but, we are getting deeply nested.
With the `),T=l("code"),Q=o(":where()"),Y=o(" pseudo-selector, we can simplify this to one line of CSS:"),j=_(),k=l("pre"),z=_(),h=l("p"),Z=o("The "),P=l("code"),$=o(":where()"),ee=o(` pseudo-selector is a way to group selectors together without creating a new specificity context.
That way we can apply the `),D=l("code"),te=o(":first-of-type"),se=o(" pseudo-class [or something else] to everything matched by the selectors provided, really easily!"),this.h()},l(e){i=p(e,"P",{});var a=c(i);q=n(a,"This is a practical example of the "),m=p(a,"A",{href:!0,rel:!0});var oe=c(m);b=p(oe,"CODE",{});var ne=c(b);U=n(ne,":where()"),ne.forEach(t),oe.forEach(t),F=n(a," pseudo-selector and how it clicked for me; the original docs are better than this, but I’m just writing this for me :)"),a.forEach(t),I=E(e),u=p(e,"P",{});var L=c(u);G=n(L,"Say you have a "),C=p(L,"CODE",{});var le=c(C);V=n(le,".container"),le.forEach(t),X=n(L," element, and you want to specify that all headings within that container should not have a margin:"),L.forEach(t),H=E(e),w=p(e,"PRE",{class:!0});var we=c(w);we.forEach(t),O=E(e),d=p(e,"P",{});var M=c(d);B=n(M,`In Sass, that’s easy enough.
In normal CSS we’d have to have multiple lines and it would be a bit of a chore to write, but still doable.
However, what if e.g. you only wanted the `),y=p(M,"A",{href:!0,rel:!0});var pe=c(y);x=p(pe,"CODE",{});var ce=c(x);J=n(ce,":first-of-type"),ce.forEach(t),pe.forEach(t),K=n(M," pseudo-class not to have a margin?"),M.forEach(t),W=E(e),v=p(e,"PRE",{class:!0});var ye=c(v);ye.forEach(t),A=E(e),f=p(e,"P",{});var R=c(f);N=n(R,`Sass does make it easier, but, we are getting deeply nested.
With the `),T=p(R,"CODE",{});var re=c(T);Q=n(re,":where()"),re.forEach(t),Y=n(R," pseudo-selector, we can simplify this to one line of CSS:"),R.forEach(t),j=E(e),k=p(e,"PRE",{class:!0});var ve=c(k);ve.forEach(t),z=E(e),h=p(e,"P",{});var S=c(h);Z=n(S,"The "),P=p(S,"CODE",{});var ie=c(P);$=n(ie,":where()"),ie.forEach(t),ee=n(S,` pseudo-selector is a way to group selectors together without creating a new specificity context.
That way we can apply the `),D=p(S,"CODE",{});var he=c(D);te=n(he,":first-of-type"),he.forEach(t),se=n(S," pseudo-class [or something else] to everything matched by the selectors provided, really easily!"),S.forEach(t),this.h()},h(){g(m,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/:where"),g(m,"rel","nofollow"),g(w,"class","language-scss"),g(y,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type"),g(y,"rel","nofollow"),g(v,"class","language-scss"),g(k,"class","language-css")},m(e,a){r(e,i,a),s(i,q),s(i,m),s(m,b),s(b,U),s(i,F),r(e,I,a),r(e,u,a),s(u,G),s(u,C),s(C,V),s(u,X),r(e,H,a),r(e,w,a),w.innerHTML=de,r(e,O,a),r(e,d,a),s(d,B),s(d,y),s(y,x),s(x,J),s(d,K),r(e,W,a),r(e,v,a),v.innerHTML=fe,r(e,A,a),r(e,f,a),s(f,N),s(f,T),s(T,Q),s(f,Y),r(e,j,a),r(e,k,a),k.innerHTML=me,r(e,z,a),r(e,h,a),s(h,Z),s(h,P),s(P,$),s(h,ee),s(h,D),s(D,te),s(h,se)},p:ae,i:ae,o:ae,d(e){e&&t(i),e&&t(I),e&&t(u),e&&t(H),e&&t(w),e&&t(O),e&&t(d),e&&t(W),e&&t(v),e&&t(A),e&&t(f),e&&t(j),e&&t(k),e&&t(z),e&&t(h)}}}const be={title:"A practical example of the :where() pseudo-selector",date:"2023-05-07",updated:"2023-05-07",categories:["css","web","dev"],coverImage:"/images/kelly-sikkema-mdADGzyXCVE-unsplash.jpg",coverWidth:16,coverHeight:9,excerpt:"This is how it clicked for me"};class Ce extends ke{constructor(i){super(),_e(this,i,null,ge,Ee,{})}}export{Ce as default,be as metadata};
