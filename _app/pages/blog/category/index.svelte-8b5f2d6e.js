import{S as H,i as I,s as L,e as p,t as g,c as v,a as C,h as m,d as f,b as q,g as E,H as _,j as k,k as w,W as S,m as A,E as O,P as x}from"../../../chunks/index-c8298046.js";function U(r,s,l){const a=r.slice();return a[1]=s[l],a}function y(r){let s,l,a=r[1].title+"",c,h,n,u=r[1].count+"",o,t;return{c(){s=p("li"),l=p("a"),c=g(a),n=g(`
        (`),o=g(u),t=g(`)
      `),this.h()},l(i){s=v(i,"LI",{});var e=C(s);l=v(e,"A",{href:!0});var d=C(l);c=m(d,a),d.forEach(f),n=m(e,`
        (`),o=m(e,u),t=m(e,`)
      `),e.forEach(f),this.h()},h(){q(l,"href",h="/blog/category/"+r[1].title)},m(i,e){E(i,s,e),_(s,l),_(l,c),_(s,n),_(s,o),_(s,t)},p(i,e){e&1&&a!==(a=i[1].title+"")&&k(c,a),e&1&&h!==(h="/blog/category/"+i[1].title)&&q(l,"href",h),e&1&&u!==(u=i[1].count+"")&&k(o,u)},d(i){i&&f(s)}}}function B(r){let s,l,a,c,h,n,u=r[0],o=[];for(let t=0;t<u.length;t+=1)o[t]=y(U(r,u,t));return{c(){s=w(),l=p("div"),a=p("h1"),c=g("All blog categories"),h=w(),n=p("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){S('[data-svelte="svelte-79f4o1"]',document.head).forEach(f),s=A(t),l=v(t,"DIV",{class:!0});var e=C(l);a=v(e,"H1",{class:!0});var d=C(a);c=m(d,"All blog categories"),d.forEach(f),h=A(e),n=v(e,"UL",{});var j=C(n);for(let b=0;b<o.length;b+=1)o[b].l(j);j.forEach(f),e.forEach(f),this.h()},h(){document.title="Blog | Categories",q(a,"class","h2"),q(l,"class","compressed-content")},m(t,i){E(t,s,i),E(t,l,i),_(l,a),_(a,c),_(l,h),_(l,n);for(let e=0;e<o.length;e+=1)o[e].m(n,null)},p(t,[i]){if(i&1){u=t[0];let e;for(e=0;e<u.length;e+=1){const d=U(t,u,e);o[e]?o[e].p(d,i):(o[e]=y(d),o[e].c(),o[e].m(n,null))}for(;e<o.length;e+=1)o[e].d(1);o.length=u.length}},i:O,o:O,d(t){t&&f(s),t&&f(l),x(o,t)}}}const V=async({fetch:r})=>{const s=await r("/api/posts.json");let{posts:l}=await s.json(),a={};return l.forEach(h=>{h.categories.forEach(n=>{Object.hasOwn(a,n)?a[n].count+=1:a[n]={title:n,count:1}})}),{props:{uniqueCategories:Object.values(a).sort((h,n)=>h.title>n.title)}}};function D(r,s,l){let{uniqueCategories:a}=s;return r.$$set=c=>{"uniqueCategories"in c&&l(0,a=c.uniqueCategories)},[a]}class W extends H{constructor(s){super(),I(this,s,D,B,L,{uniqueCategories:0})}}export{W as default,V as load};
