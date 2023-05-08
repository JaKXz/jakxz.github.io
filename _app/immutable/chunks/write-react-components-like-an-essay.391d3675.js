import{S as J,i as K,s as X,k as e,q as u,a as d,l as o,m as p,r,h as s,c as f,n as W,b as t,E as c,F as L}from"./index.f1db45d5.js";function Z(F){let l,I,v,y,j,x,i,N,b,O,q,_,k,Q=`<code class="language-tsx"><span class="token comment">// app/components/Profile.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token comment">// N more imports</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// ...</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">utilThatDoesSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">SubComponentThatTakesPartialProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">A_CONSTANT</span> <span class="token operator">=</span> <span class="token string">'CONSTANT_VALUE'</span><span class="token punctuation">;</span>

<span class="token comment">// named or default exports are interchangeable in this story.</span>
<span class="token comment">// by this point, we might be at line 200+</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">inlineUtilBasedOnPropsButReturnsMarkup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
			...
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SubcomponentThatTakesPartialProps</span></span> <span class="token spread"><span class="token punctuation">&#123;</span><span class="token operator">...</span>rest<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,P,h,A,T,w,B,E,m,V=`<code class="language-tsx"><span class="token comment">// app/components/Profile.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token comment">// N more imports, like the "introductory" sentences that bring in hooks, shared helper functions, and so on</span>

<span class="token keyword">const</span> <span class="token constant">A_CONSTANT</span> <span class="token operator">=</span> <span class="token string">'global setup'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">QUERY_LIMIT</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// etc.</span>

<span class="token comment">// now, the thesis, most of the reason why a dev would come to this file</span>
<span class="token comment">// *most* of the time this will start at line 30 or less when arranged this way!</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">const</span> <span class="token punctuation">[</span>i18n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">usei18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// and so on!</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Subcomponent</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token function">helper</span><span class="token punctuation">(</span><span class="token operator">...</span>rest<span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Subcomponent</span></span><span class="token punctuation">></span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// supporting components (maybe broken out into their own "essays" as they become more complex)</span>
<span class="token keyword">function</span> <span class="token function">Subcomponent</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> children <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span>children<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">helper</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// Many complex lines</span>
<span class="token punctuation">&#125;</span></code>`,R,g,C;return{c(){l=e("p"),I=u(`If you’re a developer who writes React components, you may have found yourself wondering how to structure your code to make it more readable and maintainable.
One way to approach this is to think of your component code like an essay.`),v=d(),y=e("p"),j=u(`In a well-written essay, the main point (or thesis) is usually near the beginning of the piece, with supporting arguments and evidence following in order of relevance.
Similarly, in a React component, you can put the main export of your file as close to the top as possible, like the “thesis” of your code.
Then, put supporting “arguments” (helpers, subcomponents, etc.) immediately following in order of relevance and use.`),x=d(),i=e("p"),N=u("Let’s look at an example of a "),b=e("code"),O=u("Profile.jsx"),q=u(" component:"),_=d(),k=e("pre"),P=d(),h=e("p"),A=u(`In this example, the main export of the file, the Profile component, is buried under a lot of supporting code.
If you’re trying to debug an issue in this component, you may have to wade through a lot of unrelated code before you find the entry point.
By reordering the code to put the main export first, you can make it easier for other developers (or your future self!) to quickly understand what the component is doing and find the relevant code.`),T=d(),w=e("p"),B=u("Here’s an example of what the same Profile.jsx file could look like if it followed the essay structure:"),E=d(),m=e("pre"),R=d(),g=e("p"),C=u(`By structuring your React components like an essay, you can make your code more readable, easier to maintain, and quicker to understand.
Give it a try in your own projects and see how it works for you!
I also think this could be applicable to non React code;
you would just need to determine what the “thesis” is and see if it makes sense to use “supporting arguments” as described here.`),this.h()},l(n){l=o(n,"P",{});var a=p(l);I=r(a,`If you’re a developer who writes React components, you may have found yourself wondering how to structure your code to make it more readable and maintainable.
One way to approach this is to think of your component code like an essay.`),a.forEach(s),v=f(n),y=o(n,"P",{});var M=p(y);j=r(M,`In a well-written essay, the main point (or thesis) is usually near the beginning of the piece, with supporting arguments and evidence following in order of relevance.
Similarly, in a React component, you can put the main export of your file as close to the top as possible, like the “thesis” of your code.
Then, put supporting “arguments” (helpers, subcomponents, etc.) immediately following in order of relevance and use.`),M.forEach(s),x=f(n),i=o(n,"P",{});var S=p(i);N=r(S,"Let’s look at an example of a "),b=o(S,"CODE",{});var H=p(b);O=r(H,"Profile.jsx"),H.forEach(s),q=r(S," component:"),S.forEach(s),_=f(n),k=o(n,"PRE",{class:!0});var Y=p(k);Y.forEach(s),P=f(n),h=o(n,"P",{});var U=p(h);A=r(U,`In this example, the main export of the file, the Profile component, is buried under a lot of supporting code.
If you’re trying to debug an issue in this component, you may have to wade through a lot of unrelated code before you find the entry point.
By reordering the code to put the main export first, you can make it easier for other developers (or your future self!) to quickly understand what the component is doing and find the relevant code.`),U.forEach(s),T=f(n),w=o(n,"P",{});var D=p(w);B=r(D,"Here’s an example of what the same Profile.jsx file could look like if it followed the essay structure:"),D.forEach(s),E=f(n),m=o(n,"PRE",{class:!0});var z=p(m);z.forEach(s),R=f(n),g=o(n,"P",{});var G=p(g);C=r(G,`By structuring your React components like an essay, you can make your code more readable, easier to maintain, and quicker to understand.
Give it a try in your own projects and see how it works for you!
I also think this could be applicable to non React code;
you would just need to determine what the “thesis” is and see if it makes sense to use “supporting arguments” as described here.`),G.forEach(s),this.h()},h(){W(k,"class","language-tsx"),W(m,"class","language-tsx")},m(n,a){t(n,l,a),c(l,I),t(n,v,a),t(n,y,a),c(y,j),t(n,x,a),t(n,i,a),c(i,N),c(i,b),c(b,O),c(i,q),t(n,_,a),t(n,k,a),k.innerHTML=Q,t(n,P,a),t(n,h,a),c(h,A),t(n,T,a),t(n,w,a),c(w,B),t(n,E,a),t(n,m,a),m.innerHTML=V,t(n,R,a),t(n,g,a),c(g,C)},p:L,i:L,o:L,d(n){n&&s(l),n&&s(v),n&&s(y),n&&s(x),n&&s(i),n&&s(_),n&&s(k),n&&s(P),n&&s(h),n&&s(T),n&&s(w),n&&s(E),n&&s(m),n&&s(R),n&&s(g)}}}const nn={title:"Write React components like an essay",date:"2023-02-09",updated:"2023-05-08",categories:["react","web","dev"]};class sn extends J{constructor(l){super(),K(this,l,null,Z,X,{})}}export{sn as default,nn as metadata};
