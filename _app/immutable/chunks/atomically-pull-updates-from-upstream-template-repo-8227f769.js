import{S as de,i as me,s as ye,k as p,q as a,a as g,l as r,m as i,r as l,h as o,c as w,n as O,b as h,E as t,B as oe}from"./index-1f03cf11.js";function _e(fe){let f,G,k,V,Y,R,u,d,B,S,M,T,j,A,z,F,n,J,P,K,N,I,Q,U,m,W,X,x,y,ue=`<code class="language-sh"><span class="token function">curl</span> https://patch-diff.githubusercontent.com/raw/Shopify/shopify-app-node/pull/<span class="token operator">&lt;</span>PR number<span class="token operator">></span>.diff <span class="token operator">|</span> <span class="token function">git</span> apply
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> get-fix-or-feature-from-shopify
<span class="token comment"># and so on</span></code>`,C,E,Z,L,D,H,_,$,v,ee;return{c(){f=p("p"),G=a(`Earlier this year I helped improve a template repo 3rd party Shopify developers use to build apps.
As we were working on the updates to the app app template in a separate branch from `),k=p("code"),V=a("main"),Y=a(", here\u2019s what I suggested to those who wanted to test out our changes early:"),R=g(),u=p("ol"),d=p("li"),B=a("Add "),S=p("code"),M=a(".diff"),T=a(" to the end of a github PR url"),j=g(),A=p("li"),z=a("Visit that link - copy the link you are redirected to"),F=g(),n=p("li"),J=a("Apply the changes via "),P=p("code"),K=a("curl"),N=a(" & "),I=p("code"),Q=a("git"),U=a(", e.g. for "),m=p("a"),W=a("https://github.com/Shopify/shopify-app-node/pull/726.diff"),X=a(":"),x=g(),y=p("pre"),C=g(),E=p("p"),Z=a(`Your mileage may vary with this especially if you re-arrange files differently than the original template repo, and of course it depends on the authors following \u201Catomic PR\u201D best practices.
Hopefully this is still useful to you to pull down upstream changes and to try to incorporate them in your local environment.
Good luck!`),L=g(),D=p("hr"),H=g(),_=p("p"),$=a("Originally shared here: "),v=p("a"),ee=a("https://github.com/Shopify/shopify-app-template-node/issues/725#issuecomment-1062308480"),this.h()},l(e){f=r(e,"P",{});var s=i(f);G=l(s,`Earlier this year I helped improve a template repo 3rd party Shopify developers use to build apps.
As we were working on the updates to the app app template in a separate branch from `),k=r(s,"CODE",{});var ae=i(k);V=l(ae,"main"),ae.forEach(o),Y=l(s,", here\u2019s what I suggested to those who wanted to test out our changes early:"),s.forEach(o),R=w(e),u=r(e,"OL",{});var b=i(u);d=r(b,"LI",{});var q=i(d);B=l(q,"Add "),S=r(q,"CODE",{});var le=i(S);M=l(le,".diff"),le.forEach(o),T=l(q," to the end of a github PR url"),q.forEach(o),j=w(b),A=r(b,"LI",{});var se=i(A);z=l(se,"Visit that link - copy the link you are redirected to"),se.forEach(o),F=w(b),n=r(b,"LI",{});var c=i(n);J=l(c,"Apply the changes via "),P=r(c,"CODE",{});var pe=i(P);K=l(pe,"curl"),pe.forEach(o),N=l(c," & "),I=r(c,"CODE",{});var re=i(I);Q=l(re,"git"),re.forEach(o),U=l(c,", e.g. for "),m=r(c,"A",{href:!0,rel:!0});var ie=i(m);W=l(ie,"https://github.com/Shopify/shopify-app-node/pull/726.diff"),ie.forEach(o),X=l(c,":"),c.forEach(o),b.forEach(o),x=w(e),y=r(e,"PRE",{class:!0});var ce=i(y);ce.forEach(o),C=w(e),E=r(e,"P",{});var ne=i(E);Z=l(ne,`Your mileage may vary with this especially if you re-arrange files differently than the original template repo, and of course it depends on the authors following \u201Catomic PR\u201D best practices.
Hopefully this is still useful to you to pull down upstream changes and to try to incorporate them in your local environment.
Good luck!`),ne.forEach(o),L=w(e),D=r(e,"HR",{}),H=w(e),_=r(e,"P",{});var te=i(_);$=l(te,"Originally shared here: "),v=r(te,"A",{href:!0,rel:!0});var he=i(v);ee=l(he,"https://github.com/Shopify/shopify-app-template-node/issues/725#issuecomment-1062308480"),he.forEach(o),te.forEach(o),this.h()},h(){O(m,"href","https://github.com/Shopify/shopify-app-node/pull/726.diff"),O(m,"rel","nofollow"),O(y,"class","language-sh"),O(v,"href","https://github.com/Shopify/shopify-app-template-node/issues/725#issuecomment-1062308480"),O(v,"rel","nofollow")},m(e,s){h(e,f,s),t(f,G),t(f,k),t(k,V),t(f,Y),h(e,R,s),h(e,u,s),t(u,d),t(d,B),t(d,S),t(S,M),t(d,T),t(u,j),t(u,A),t(A,z),t(u,F),t(u,n),t(n,J),t(n,P),t(P,K),t(n,N),t(n,I),t(I,Q),t(n,U),t(n,m),t(m,W),t(n,X),h(e,x,s),h(e,y,s),y.innerHTML=ue,h(e,C,s),h(e,E,s),t(E,Z),h(e,L,s),h(e,D,s),h(e,H,s),h(e,_,s),t(_,$),t(_,v),t(v,ee)},p:oe,i:oe,o:oe,d(e){e&&o(f),e&&o(R),e&&o(u),e&&o(x),e&&o(y),e&&o(C),e&&o(E),e&&o(L),e&&o(D),e&&o(H),e&&o(_)}}}const ge={title:"Atomically pull updates from an upstream template repo",date:"2022-03-08",updated:"2022-09-20",categories:["github","git","dev"]};class we extends de{constructor(f){super(),me(this,f,null,_e,ye,{})}}export{we as default,ge as metadata};
