import{S as Q,i as U,s as V,k as w,a as b,e as J,R as W,l as S,h as p,c as k,n as I,E as h,b as P,g as H,d as O,q as g,m as C,r as y,F as z,y as D,z as F,A as T,u as K,B as j}from"../chunks/index.f1db45d5.js";import{a as N,P as X}from"../chunks/PostsList.d5233b1b.js";import{p as G,c as Y}from"../chunks/config.1a866872.js";function Z(r){let a,n,c,l,i,m,s,$;return{c(){a=w("h1"),n=g("Oops!"),c=b(),l=w("p"),i=g("Sorry, no posts to show here."),m=b(),s=w("a"),$=g("Back to blog"),this.h()},l(e){a=S(e,"H1",{});var u=C(a);n=y(u,"Oops!"),u.forEach(p),c=k(e),l=S(e,"P",{});var o=C(l);i=y(o,"Sorry, no posts to show here."),o.forEach(p),m=k(e),s=S(e,"A",{href:!0});var _=C(s);$=y(_,"Back to blog"),_.forEach(p),this.h()},h(){I(s,"href","/learning")},m(e,u){P(e,a,u),h(a,n),P(e,c,u),P(e,l,u),h(l,i),P(e,m,u),P(e,s,u),h(s,$)},p:z,i:z,o:z,d(e){e&&p(a),e&&p(c),e&&p(l),e&&p(m),e&&p(s)}}}function x(r){let a,n,c,l,i,m,s,$,e,u,o,_,R,L,d,M,B,q,E,A;return d=new N({props:{currentPage:r[2],totalPosts:r[4],path:"/learning/category/"+r[3]+"/page"}}),B=new X({props:{posts:r[5]}}),E=new N({props:{currentPage:r[2],totalPosts:r[4],path:"/learning/category/"+r[3]+"/page"}}),{c(){a=w("h1"),n=g("Category: "),c=g(r[3]),l=b(),i=w("br"),m=b(),s=w("small"),$=g("Posts "),e=g(r[1]),u=g("–"),o=g(r[0]),_=g(" of "),R=g(r[4]),L=b(),D(d.$$.fragment),M=b(),D(B.$$.fragment),q=b(),D(E.$$.fragment)},l(t){a=S(t,"H1",{});var f=C(a);n=y(f,"Category: "),c=y(f,r[3]),l=k(f),i=S(f,"BR",{}),m=k(f),s=S(f,"SMALL",{});var v=C(s);$=y(v,"Posts "),e=y(v,r[1]),u=y(v,"–"),o=y(v,r[0]),_=y(v," of "),R=y(v,r[4]),v.forEach(p),f.forEach(p),L=k(t),F(d.$$.fragment,t),M=k(t),F(B.$$.fragment,t),q=k(t),F(E.$$.fragment,t)},m(t,f){P(t,a,f),h(a,n),h(a,c),h(a,l),h(a,i),h(a,m),h(a,s),h(s,$),h(s,e),h(s,u),h(s,o),h(s,_),h(s,R),P(t,L,f),T(d,t,f),P(t,M,f),T(B,t,f),P(t,q,f),T(E,t,f),A=!0},p(t,f){(!A||f&2)&&K(e,t[1]),(!A||f&1)&&K(o,t[0])},i(t){A||(H(d.$$.fragment,t),H(B.$$.fragment,t),H(E.$$.fragment,t),A=!0)},o(t){O(d.$$.fragment,t),O(B.$$.fragment,t),O(E.$$.fragment,t),A=!1},d(t){t&&p(a),t&&p(L),j(d,t),t&&p(M),j(B,t),t&&p(q),j(E,t)}}}function tt(r){let a,n,c,l,i,m,s;document.title=a="Blog category "+r[3]+" - page "+r[2];const $=[x,Z],e=[];function u(o,_){return o[5]&&o[5].length?0:1}return l=u(r),i=e[l]=$[l](r),{c(){n=w("meta"),c=b(),i.c(),m=J(),this.h()},l(o){const _=W("svelte-hdac8e",document.head);n=S(_,"META",{"data-key":!0,name:!0}),_.forEach(p),c=k(o),i.l(o),m=J(),this.h()},h(){I(n,"data-key","description"),I(n,"name",Y)},m(o,_){h(document.head,n),P(o,c,_),e[l].m(o,_),P(o,m,_),s=!0},p(o,[_]){(!s||_&12)&&a!==(a="Blog category "+o[3]+" - page "+o[2])&&(document.title=a),i.p(o,_)},i(o){s||(H(i),s=!0)},o(o){O(i),s=!1},d(o){p(n),o&&p(c),e[l].d(o),o&&p(m)}}}function et(r,a,n){let c,l,{data:i}=a;const{page:m,category:s,totalPosts:$,posts:e}=i;return r.$$set=u=>{"data"in u&&n(6,i=u.data)},n(1,c=m*G-(G-1)||1),n(0,l=Math.min(m*G,$)),[l,c,m,s,$,e,i]}class rt extends Q{constructor(a){super(),U(this,a,et,tt,V,{data:6})}}export{rt as component};
