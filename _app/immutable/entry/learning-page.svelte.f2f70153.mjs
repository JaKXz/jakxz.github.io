import{S as E,i as L,s as q,k as w,a as d,y as _,U as A,l as S,h as c,c as $,z as g,n as p,E as T,b as h,A as P,g as y,d as b,B as k}from"../chunks/index.769db22d.mjs";import{P as x,a as z}from"../chunks/PostsList.e2d1bf18.mjs";import{s as v,b as B}from"../chunks/config.33a9e0f1.mjs";function C(r){let n,s,i,e,l,o,m;return document.title=n=v+" | Learning",e=new x({props:{posts:r[0].posts}}),o=new z({props:{currentPage:1,totalPosts:r[0].total}}),{c(){s=w("meta"),i=d(),_(e.$$.fragment),l=d(),_(o.$$.fragment),this.h()},l(t){const a=A("svelte-19lqxbo",document.head);s=S(a,"META",{"data-key":!0,name:!0,content:!0}),a.forEach(c),i=$(t),g(e.$$.fragment,t),l=$(t),g(o.$$.fragment,t),this.h()},h(){p(s,"data-key","description"),p(s,"name","description"),p(s,"content",B)},m(t,a){T(document.head,s),h(t,i,a),P(e,t,a),h(t,l,a),P(o,t,a),m=!0},p(t,[a]){(!m||a&0)&&n!==(n=v+" | Learning")&&(document.title=n);const f={};a&1&&(f.posts=t[0].posts),e.$set(f);const u={};a&1&&(u.totalPosts=t[0].total),o.$set(u)},i(t){m||(y(e.$$.fragment,t),y(o.$$.fragment,t),m=!0)},o(t){b(e.$$.fragment,t),b(o.$$.fragment,t),m=!1},d(t){c(s),t&&c(i),k(e,t),t&&c(l),k(o,t)}}}function D(r,n,s){let{data:i}=n;return r.$$set=e=>{"data"in e&&s(0,i=e.data)},[i]}class F extends E{constructor(n){super(),L(this,n,D,C,q,{data:0})}}export{F as default};
