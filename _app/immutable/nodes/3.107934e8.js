import{s as L}from"../chunks/scheduler.dd28e2fa.js";import{S as b,i as q,g as E,s as d,r as _,H as S,h as T,f as p,c as $,u as g,k as l,z as x,a as h,v as P,d as v,t as k,w}from"../chunks/index.1c1ead50.js";import{P as z,a as A}from"../chunks/PostsList.7bcae7ef.js";import{b as y,c as C}from"../chunks/config.1a866872.js";function D(r){let n,s,i,e,c,o,m;return document.title=n=y+" | Learning",e=new z({props:{posts:r[0].posts}}),o=new A({props:{currentPage:1,totalPosts:r[0].total}}),{c(){s=E("meta"),i=d(),_(e.$$.fragment),c=d(),_(o.$$.fragment),this.h()},l(t){const a=S("svelte-19lqxbo",document.head);s=T(a,"META",{"data-key":!0,name:!0,content:!0}),a.forEach(p),i=$(t),g(e.$$.fragment,t),c=$(t),g(o.$$.fragment,t),this.h()},h(){l(s,"data-key","description"),l(s,"name","description"),l(s,"content",C)},m(t,a){x(document.head,s),h(t,i,a),P(e,t,a),h(t,c,a),P(o,t,a),m=!0},p(t,[a]){(!m||a&0)&&n!==(n=y+" | Learning")&&(document.title=n);const f={};a&1&&(f.posts=t[0].posts),e.$set(f);const u={};a&1&&(u.totalPosts=t[0].total),o.$set(u)},i(t){m||(v(e.$$.fragment,t),v(o.$$.fragment,t),m=!0)},o(t){k(e.$$.fragment,t),k(o.$$.fragment,t),m=!1},d(t){t&&(p(i),p(c)),p(s),w(e,t),w(o,t)}}}function H(r,n,s){let{data:i}=n;return r.$$set=e=>{"data"in e&&s(0,i=e.data)},[i]}class G extends b{constructor(n){super(),q(this,n,H,D,L,{data:0})}}export{G as component};
