import{S as k,i as w,s as b,k as q,a as u,v as _,T as x,l as D,h as l,c as $,w as d,n as p,D as E,b as g,x as h,f as P,t as y,y as v}from"../../../chunks/index-6f4c5a9f.js";import{P as S,a as T}from"../../../chunks/Pagination-e12be9e7.js";import{b as A}from"../../../chunks/config-406b140a.js";function B(r){let e,i,a,o,n,m;return a=new S({props:{posts:r[0].posts}}),n=new T({props:{currentPage:1,totalPosts:r[0].total}}),{c(){e=q("meta"),i=u(),_(a.$$.fragment),o=u(),_(n.$$.fragment),this.h()},l(t){const s=x('[data-svelte="svelte-1t9o4xr"]',document.head);e=D(s,"META",{"data-key":!0,name:!0,content:!0}),s.forEach(l),i=$(t),d(a.$$.fragment,t),o=$(t),d(n.$$.fragment,t),this.h()},h(){document.title="Blog",p(e,"data-key","description"),p(e,"name","description"),p(e,"content",A)},m(t,s){E(document.head,e),g(t,i,s),h(a,t,s),g(t,o,s),h(n,t,s),m=!0},p(t,[s]){const c={};s&1&&(c.posts=t[0].posts),a.$set(c);const f={};s&1&&(f.totalPosts=t[0].total),n.$set(f)},i(t){m||(P(a.$$.fragment,t),P(n.$$.fragment,t),m=!0)},o(t){y(a.$$.fragment,t),y(n.$$.fragment,t),m=!1},d(t){l(e),t&&l(i),v(a,t),t&&l(o),v(n,t)}}}function C(r,e,i){let{data:a}=e;return r.$$set=o=>{"data"in o&&i(0,a=o.data)},[a]}class z extends k{constructor(e){super(),w(this,e,C,B,b,{data:0})}}export{z as default};
