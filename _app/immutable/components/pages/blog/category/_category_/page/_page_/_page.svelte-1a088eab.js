import{S as Q,i as U,s as V,k as E,a as P,e as J,T as W,l as S,h as p,c as k,n as I,D as $,b as g,f as D,t as H,q as y,m as q,r as b,A as T,v as R,w as j,x as z,u as K,y as F}from"../../../../../../../chunks/index-6f4c5a9f.js";import{a as N,P as X}from"../../../../../../../chunks/Pagination-e12be9e7.js";import{p as G,b as Y}from"../../../../../../../chunks/config-406b140a.js";function Z(l){let a,n,c,r,f,m,s,h;return{c(){a=E("h1"),n=y("Oops!"),c=P(),r=E("p"),f=y("Sorry, no posts to show here."),m=P(),s=E("a"),h=y("Back to blog"),this.h()},l(e){a=S(e,"H1",{});var u=q(a);n=b(u,"Oops!"),u.forEach(p),c=k(e),r=S(e,"P",{});var o=q(r);f=b(o,"Sorry, no posts to show here."),o.forEach(p),m=k(e),s=S(e,"A",{href:!0});var _=q(s);h=b(_,"Back to blog"),_.forEach(p),this.h()},h(){I(s,"href","/blog")},m(e,u){g(e,a,u),$(a,n),g(e,c,u),g(e,r,u),$(r,f),g(e,m,u),g(e,s,u),$(s,h)},p:T,i:T,o:T,d(e){e&&p(a),e&&p(c),e&&p(r),e&&p(m),e&&p(s)}}}function x(l){let a,n,c,r,f,m,s,h,e,u,o,_,O,C,d,L,v,M,w,A;return d=new N({props:{currentPage:l[2],totalPosts:l[4],path:"/blog/category/"+l[3]+"/page"}}),v=new X({props:{posts:l[5]}}),w=new N({props:{currentPage:l[2],totalPosts:l[4],path:"/blog/category/"+l[3]+"/page"}}),{c(){a=E("h1"),n=y("Category: "),c=y(l[3]),r=P(),f=E("br"),m=P(),s=E("small"),h=y("Posts "),e=y(l[1]),u=y("\u2013"),o=y(l[0]),_=y(" of "),O=y(l[4]),C=P(),R(d.$$.fragment),L=P(),R(v.$$.fragment),M=P(),R(w.$$.fragment)},l(t){a=S(t,"H1",{});var i=q(a);n=b(i,"Category: "),c=b(i,l[3]),r=k(i),f=S(i,"BR",{}),m=k(i),s=S(i,"SMALL",{});var B=q(s);h=b(B,"Posts "),e=b(B,l[1]),u=b(B,"\u2013"),o=b(B,l[0]),_=b(B," of "),O=b(B,l[4]),B.forEach(p),i.forEach(p),C=k(t),j(d.$$.fragment,t),L=k(t),j(v.$$.fragment,t),M=k(t),j(w.$$.fragment,t)},m(t,i){g(t,a,i),$(a,n),$(a,c),$(a,r),$(a,f),$(a,m),$(a,s),$(s,h),$(s,e),$(s,u),$(s,o),$(s,_),$(s,O),g(t,C,i),z(d,t,i),g(t,L,i),z(v,t,i),g(t,M,i),z(w,t,i),A=!0},p(t,i){(!A||i&2)&&K(e,t[1]),(!A||i&1)&&K(o,t[0])},i(t){A||(D(d.$$.fragment,t),D(v.$$.fragment,t),D(w.$$.fragment,t),A=!0)},o(t){H(d.$$.fragment,t),H(v.$$.fragment,t),H(w.$$.fragment,t),A=!1},d(t){t&&p(a),t&&p(C),F(d,t),t&&p(L),F(v,t),t&&p(M),F(w,t)}}}function tt(l){let a,n,c,r,f,m,s;document.title=a="Blog category "+l[3]+" - page "+l[2];const h=[x,Z],e=[];function u(o,_){return o[5]&&o[5].length?0:1}return r=u(l),f=e[r]=h[r](l),{c(){n=E("meta"),c=P(),f.c(),m=J(),this.h()},l(o){const _=W('[data-svelte="svelte-hdac8e"]',document.head);n=S(_,"META",{"data-key":!0,name:!0}),_.forEach(p),c=k(o),f.l(o),m=J(),this.h()},h(){I(n,"data-key","description"),I(n,"name",Y)},m(o,_){$(document.head,n),g(o,c,_),e[r].m(o,_),g(o,m,_),s=!0},p(o,[_]){(!s||_&12)&&a!==(a="Blog category "+o[3]+" - page "+o[2])&&(document.title=a),f.p(o,_)},i(o){s||(D(f),s=!0)},o(o){H(f),s=!1},d(o){p(n),o&&p(c),e[r].d(o),o&&p(m)}}}function et(l,a,n){let c,r,{data:f}=a;const{page:m,category:s,totalPosts:h,posts:e}=f;return l.$$set=u=>{"data"in u&&n(6,f=u.data)},n(1,c=m*G-(G-1)||1),n(0,r=Math.min(m*G,h)),[r,c,m,s,h,e,f]}class lt extends Q{constructor(a){super(),U(this,a,et,tt,V,{data:6})}}export{lt as default};
