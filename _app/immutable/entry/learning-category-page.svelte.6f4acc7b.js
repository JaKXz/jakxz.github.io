import{S,i as j,s as B,a as C,k as v,r as g,Q as D,h as u,c as q,l as p,m as E,u as m,p as k,b as x,F as f,n as y,N as F}from"../chunks/index.dd84b89c.js";function I(c,l,a){const n=c.slice();return n[2]=l[a],n}function L(c){let l,a,n=c[2].title+"",h,i,d=c[2].count+"",r,s;return{c(){l=v("li"),a=v("a"),h=g(n),i=g(`
				(`),r=g(d),s=g(`)
			`),this.h()},l(t){l=p(t,"LI",{});var o=E(l);a=p(o,"A",{href:!0});var e=E(a);h=m(e,n),e.forEach(u),i=m(o,`
				(`),r=m(o,d),s=m(o,`)
			`),o.forEach(u),this.h()},h(){k(a,"href","/learning/category/"+c[2].title)},m(t,o){x(t,l,o),f(l,a),f(a,h),f(l,i),f(l,r),f(l,s)},p:y,d(t){t&&u(l)}}}function H(c){let l,a,n,h,i,d,r=c[0],s=[];for(let t=0;t<r.length;t+=1)s[t]=L(I(c,r,t));return{c(){l=C(),a=v("div"),n=v("h1"),h=g("All blog categories"),i=C(),d=v("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){D("svelte-si9hjk",document.head).forEach(u),l=q(t),a=p(t,"DIV",{class:!0});var e=E(a);n=p(e,"H1",{class:!0});var _=E(n);h=m(_,"All blog categories"),_.forEach(u),i=q(e),d=p(e,"UL",{});var A=E(d);for(let b=0;b<s.length;b+=1)s[b].l(A);A.forEach(u),e.forEach(u),this.h()},h(){document.title="Blog | Categories",k(n,"class","h2"),k(a,"class","compressed-content")},m(t,o){x(t,l,o),x(t,a,o),f(a,n),f(n,h),f(a,i),f(a,d);for(let e=0;e<s.length;e+=1)s[e].m(d,null)},p(t,[o]){if(o&1){r=t[0];let e;for(e=0;e<r.length;e+=1){const _=I(t,r,e);s[e]?s[e].p(_,o):(s[e]=L(_),s[e].c(),s[e].m(d,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=r.length}},i:y,o:y,d(t){t&&u(l),t&&u(a),F(s,t)}}}function N(c,l,a){let{data:n}=l;const{uniqueCategories:h}=n;return c.$$set=i=>{"data"in i&&a(1,n=i.data)},[h,n]}class Q extends S{constructor(l){super(),j(this,l,N,H,B,{data:1})}}export{Q as default};
