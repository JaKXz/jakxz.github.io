import{S as Te,i as $e,s as Me,x as ue,k as f,e as me,a as b,q as j,y as fe,Q as je,l as h,h as i,c as k,m as T,r as w,z as we,n as r,V as he,p as Ie,E as s,b as A,A as _e,d as pe,f as Pe,g as de,B as ve,N as Ce,M as F,v as Ue}from"../chunks/index.76708b9f.mjs";import{s as ge,a as ye}from"../chunks/config.5e0ed70e.mjs";function Ee(l,t,n){const o=l.slice();return o[11]=t[n],o}function Be(l){let t;return{c(){t=f("meta"),this.h()},l(n){t=h(n,"META",{name:!0,content:!0}),this.h()},h(){r(t,"name","twitter:card"),r(t,"content","summary")},m(n,o){A(n,t,o)},p:F,d(n){n&&i(t)}}}function Ge(l){let t,n,o,_,u,m,a,c,p;return{c(){t=f("meta"),n=b(),o=f("meta"),_=b(),u=f("meta"),m=b(),a=f("meta"),c=b(),p=f("meta"),this.h()},l(e){t=h(e,"META",{property:!0,content:!0}),n=k(e),o=h(e,"META",{property:!0,content:!0}),_=k(e),u=h(e,"META",{property:!0,content:!0}),m=k(e),a=h(e,"META",{name:!0,content:!0}),c=k(e),p=h(e,"META",{name:!0,content:!0}),this.h()},h(){r(t,"property","og:image:width"),r(t,"content",l[3]),r(o,"property","og:image:height"),r(o,"content",l[4]),r(u,"property","og:image"),r(u,"content",""+(ye+l[2])),r(a,"name","twitter:image"),r(a,"content",""+(ye+l[2])),r(p,"name","twitter:card"),r(p,"content","summary_large_image")},m(e,d){A(e,t,d),A(e,n,d),A(e,o,d),A(e,_,d),A(e,u,d),A(e,m,d),A(e,a,d),A(e,c,d),A(e,p,d)},p:F,d(e){e&&i(t),e&&i(n),e&&i(o),e&&i(_),e&&i(u),e&&i(m),e&&i(a),e&&i(c),e&&i(p)}}}function Le(l){let t,n;return{c(){t=f("figcaption"),n=j(l[8]),this.h()},l(o){t=h(o,"FIGCAPTION",{class:!0});var _=T(t);n=w(_,l[8]),_.forEach(i),this.h()},h(){r(t,"class","svelte-1xmj924")},m(o,_){A(o,t,_),s(t,n)},p:F,d(o){o&&i(t)}}}function Re(l){let t,n,o,_=l[1].author+"",u,m,a,c;return{c(){t=f("figcaption"),n=j(`Photo by
				`),o=f("a"),u=j(_),m=j(`
				on
				`),a=f("a"),c=j("Unsplash"),this.h()},l(p){t=h(p,"FIGCAPTION",{class:!0});var e=T(t);n=w(e,`Photo by
				`),o=h(e,"A",{target:!0,rel:!0,href:!0});var d=T(o);u=w(d,_),d.forEach(i),m=w(e,`
				on
				`),a=h(e,"A",{target:!0,rel:!0,href:!0});var y=T(a);c=w(y,"Unsplash"),y.forEach(i),e.forEach(i),this.h()},h(){r(o,"target","_blank"),r(o,"rel","noopener noreferrer nofollow"),r(o,"href",`${l[1].authorUrl}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`),r(a,"target","_blank"),r(a,"rel","noopener noreferrer nofollow"),r(a,"href","https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"),r(t,"class","svelte-1xmj924")},m(p,e){A(p,t,e),s(t,n),s(t,o),s(o,u),s(t,m),s(t,a),s(a,c)},p:F,d(p){p&&i(t)}}}function Se(l){let t,n,o,_,u,m=l[5],a=[];for(let c=0;c<m.length;c+=1)a[c]=be(Ee(l,m,c));return{c(){t=f("aside"),n=f("h2"),o=j("Posted in:"),_=b(),u=f("ul");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){t=h(c,"ASIDE",{class:!0});var p=T(t);n=h(p,"H2",{});var e=T(n);o=w(e,"Posted in:"),e.forEach(i),_=k(p),u=h(p,"UL",{class:!0});var d=T(u);for(let y=0;y<a.length;y+=1)a[y].l(d);d.forEach(i),p.forEach(i),this.h()},h(){r(u,"class","svelte-1xmj924"),r(t,"class","post-footer svelte-1xmj924")},m(c,p){A(c,t,p),s(t,n),s(n,o),s(t,_),s(t,u);for(let e=0;e<a.length;e+=1)a[e].m(u,null)},p(c,p){if(p&32){m=c[5];let e;for(e=0;e<m.length;e+=1){const d=Ee(c,m,e);a[e]?a[e].p(d,p):(a[e]=be(d),a[e].c(),a[e].m(u,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=m.length}},d(c){c&&i(t),Ce(a,c)}}}function be(l){let t,n,o=l[11]+"",_,u;return{c(){t=f("li"),n=f("a"),_=j(o),u=b(),this.h()},l(m){t=h(m,"LI",{class:!0});var a=T(t);n=h(a,"A",{href:!0,class:!0});var c=T(n);_=w(c,o),c.forEach(i),u=k(a),a.forEach(i),this.h()},h(){r(n,"href","/learning/category/"+l[11]+"/"),r(n,"class","svelte-1xmj924"),r(t,"class","svelte-1xmj924")},m(m,a){A(m,t,a),s(t,n),s(n,_),s(t,u)},p:F,d(m){m&&i(t)}}}function qe(l){let t,n,o,_,u,m,a,c,p,e,d,y,H,B,O,G,V,Q,M,R,W,J,K,X,Y,Z,S,x,ee,te,re,g,N,I,ae,le,q;document.title=t=l[9]+" | "+ge;function ke(v,E){return v[2]?Ge:Be}let z=ke(l)(l);function Ae(v,E){if(v[1])return Re;if(v[8])return Le}let ne=Ae(l),P=ne&&ne(l);var L=l[0].PostContent;function oe(v){return{}}L&&(g=ue(L,oe()));let U=l[5]&&Se(l);return{c(){n=f("meta"),o=f("meta"),_=f("meta"),u=f("meta"),m=f("meta"),a=f("meta"),z.c(),c=me(),p=b(),e=f("article"),d=f("figure"),y=f("img"),B=b(),P&&P.c(),O=b(),G=f("h1"),V=j(l[9]),Q=b(),M=f("div"),R=f("b"),W=j("Published:"),J=b(),K=j(l[6]),X=b(),Y=f("br"),Z=b(),S=f("b"),x=j("Updated:"),ee=b(),te=j(l[10]),re=b(),g&&fe(g.$$.fragment),N=b(),I=f("script"),le=b(),U&&U.c(),this.h()},l(v){const E=je("svelte-1iee9m6",document.head);n=h(E,"META",{"data-key":!0,name:!0,content:!0}),o=h(E,"META",{property:!0,content:!0}),_=h(E,"META",{property:!0,content:!0}),u=h(E,"META",{property:!0,content:!0}),m=h(E,"META",{name:!0,content:!0}),a=h(E,"META",{name:!0,content:!0}),z.l(E),c=me(),E.forEach(i),p=k(v),e=h(v,"ARTICLE",{class:!0});var $=T(e);d=h($,"FIGURE",{class:!0});var D=T(d);y=h(D,"IMG",{src:!0,alt:!0,style:!0,width:!0,height:!0}),B=k(D),P&&P.l(D),D.forEach(i),O=k($),G=h($,"H1",{class:!0});var se=T(G);V=w(se,l[9]),se.forEach(i),Q=k($),M=h($,"DIV",{class:!0});var C=T(M);R=h(C,"B",{});var ie=T(R);W=w(ie,"Published:"),ie.forEach(i),J=k(C),K=w(C,l[6]),X=k(C),Y=h(C,"BR",{}),Z=k(C),S=h(C,"B",{});var ce=T(S);x=w(ce,"Updated:"),ce.forEach(i),ee=k(C),te=w(C,l[10]),C.forEach(i),re=k($),g&&we(g.$$.fragment,$),N=k($),I=h($,"SCRIPT",{src:!0,repo:!0,"issue-term":!0,theme:!0,crossorigin:!0}),T(I).forEach(i),le=k($),U&&U.l($),$.forEach(i),this.h()},h(){r(n,"data-key","description"),r(n,"name","description"),r(n,"content",l[7]),r(o,"property","og:type"),r(o,"content","article"),r(_,"property","og:title"),r(_,"content",l[9]),r(u,"property","og:description"),r(u,"content",l[7]),r(m,"name","twitter:title"),r(m,"content",l[9]),r(a,"name","twitter:description"),r(a,"content",l[7]),he(y.src,H=l[2])||r(y,"src",H),r(y,"alt",l[8]||""),Ie(y,"aspect-ratio",l[3]+" / "+l[4]),r(y,"width",l[3]),r(y,"height",l[4]),r(d,"class","cover-image svelte-1xmj924"),r(G,"class","svelte-1xmj924"),r(M,"class","meta svelte-1xmj924"),he(I.src,ae="https://utteranc.es/client.js")||r(I,"src",ae),r(I,"repo","jakxz/jakxz.github.io"),r(I,"issue-term","og:title"),r(I,"theme","preferred-color-scheme"),r(I,"crossorigin","anonymous"),I.async=!0,r(e,"class","post svelte-1xmj924")},m(v,E){s(document.head,n),s(document.head,o),s(document.head,_),s(document.head,u),s(document.head,m),s(document.head,a),z.m(document.head,null),s(document.head,c),A(v,p,E),A(v,e,E),s(e,d),s(d,y),s(d,B),P&&P.m(d,null),s(e,O),s(e,G),s(G,V),s(e,Q),s(e,M),s(M,R),s(R,W),s(M,J),s(M,K),s(M,X),s(M,Y),s(M,Z),s(M,S),s(S,x),s(M,ee),s(M,te),s(e,re),g&&_e(g,e,null),s(e,N),s(e,I),s(e,le),U&&U.m(e,null),q=!0},p(v,[E]){if((!q||E&512)&&t!==(t=v[9]+" | "+ge)&&(document.title=t),z.p(v,E),P&&P.p(v,E),L!==(L=v[0].PostContent)){if(g){Ue();const $=g;pe($.$$.fragment,1,0,()=>{ve($,1)}),Pe()}L?(g=ue(L,oe()),fe(g.$$.fragment),de(g.$$.fragment,1),_e(g,e,N)):g=null}v[5]&&U.p(v,E)},i(v){q||(g&&de(g.$$.fragment,v),q=!0)},o(v){g&&pe(g.$$.fragment,v),q=!1},d(v){i(n),i(o),i(_),i(u),i(m),i(a),z.d(v),i(c),v&&i(p),v&&i(e),P&&P.d(),g&&ve(g),U&&U.d()}}}function ze(l,t,n){let{data:o}=t;const{coverCaption:_,coverImage:u,coverWidth:m,coverHeight:a,categories:c,date:p,excerpt:e,imageAlt:d,title:y,updated:H}=o.meta;return l.$$set=B=>{"data"in B&&n(0,o=B.data)},[o,_,u,m,a,c,p,e,d,y,H]}class De extends Te{constructor(t){super(),$e(this,t,ze,qe,Me,{data:0})}}export{De as default};
