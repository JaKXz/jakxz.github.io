import{S as b,i as q,s as w,k as A,a as d,z as _,Q as C,l as E,h as c,c as $,A as g,p,F as S,b as h,B as P,g as k,d as v,C as y}from"../chunks/index.dd84b89c.js";import{P as T,a as x}from"../chunks/PostsList.511366eb.js";import{s as L,c as z}from"../chunks/config.09960fbe.js";function B(r){let n,s,i,e,l,o,m;return document.title=n=L+" | Learning",e=new T({props:{posts:r[0].posts}}),o=new x({props:{currentPage:1,totalPosts:r[0].total}}),{c(){s=A("meta"),i=d(),_(e.$$.fragment),l=d(),_(o.$$.fragment),this.h()},l(t){const a=C("svelte-19lqxbo",document.head);s=E(a,"META",{"data-key":!0,name:!0,content:!0}),a.forEach(c),i=$(t),g(e.$$.fragment,t),l=$(t),g(o.$$.fragment,t),this.h()},h(){p(s,"data-key","description"),p(s,"name","description"),p(s,"content",z)},m(t,a){S(document.head,s),h(t,i,a),P(e,t,a),h(t,l,a),P(o,t,a),m=!0},p(t,[a]){(!m||a&0)&&n!==(n=L+" | Learning")&&(document.title=n);const f={};a&1&&(f.posts=t[0].posts),e.$set(f);const u={};a&1&&(u.totalPosts=t[0].total),o.$set(u)},i(t){m||(k(e.$$.fragment,t),k(o.$$.fragment,t),m=!0)},o(t){v(e.$$.fragment,t),v(o.$$.fragment,t),m=!1},d(t){c(s),t&&c(i),y(e,t),t&&c(l),y(o,t)}}}function D(r,n,s){let{data:i}=n;return r.$$set=e=>{"data"in e&&s(0,i=e.data)},[i]}class j extends b{constructor(n){super(),q(this,n,D,B,w,{data:0})}}export{j as default};