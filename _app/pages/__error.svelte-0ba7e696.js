import{S as U,i as w,s as z,e as _,t as d,k as q,c as m,a as h,h as S,d as t,m as x,b as O,g as c,H as f,j as R,E as T}from"../chunks/index-c8298046.js";function B(o){let s,i,n,r,l=o[1].message+"",b,H,u,E,L,M,k,p,y,v,P;return{c(){s=_("h2"),i=d(o[0]),n=q(),r=_("p"),b=d(l),H=q(),u=_("p"),E=_("strong"),L=d("Sorry!"),M=d(" Maybe try one of these links?"),k=q(),p=_("ul"),y=_("li"),v=_("a"),P=d("Home"),this.h()},l(e){s=m(e,"H2",{});var a=h(s);i=S(a,o[0]),a.forEach(t),n=x(e),r=m(e,"P",{class:!0});var A=h(r);b=S(A,l),A.forEach(t),H=x(e),u=m(e,"P",{});var j=h(u);E=m(j,"STRONG",{});var C=h(E);L=S(C,"Sorry!"),C.forEach(t),M=S(j," Maybe try one of these links?"),j.forEach(t),k=x(e),p=m(e,"UL",{});var G=h(p);y=m(G,"LI",{});var I=h(y);v=m(I,"A",{href:!0});var N=h(v);P=S(N,"Home"),N.forEach(t),I.forEach(t),G.forEach(t),this.h()},h(){O(r,"class","subhead"),O(v,"href","/")},m(e,a){c(e,s,a),f(s,i),c(e,n,a),c(e,r,a),f(r,b),c(e,H,a),c(e,u,a),f(u,E),f(E,L),f(u,M),c(e,k,a),c(e,p,a),f(p,y),f(y,v),f(v,P)},p(e,[a]){a&1&&R(i,e[0]),a&2&&l!==(l=e[1].message+"")&&R(b,l)},i:T,o:T,d(e){e&&t(s),e&&t(n),e&&t(r),e&&t(H),e&&t(u),e&&t(k),e&&t(p)}}}const J=({error:o,status:s})=>({props:{error:o,status:s}});function D(o,s,i){let{status:n}=s,{error:r}=s;return o.$$set=l=>{"status"in l&&i(0,n=l.status),"error"in l&&i(1,r=l.error)},[n,r]}class K extends U{constructor(s){super(),w(this,s,D,B,z,{status:0,error:1})}}export{K as default,J as load};
