import{S as be,i as ke,s as Ae,x as ce,k as m,e as ue,a as T,q as j,y as fe,U as Te,l as h,h as u,c as $,m as b,r as w,z as $e,n as l,V as Me,p as je,E as a,b as B,A as me,d as he,f as we,g as _e,B as de,M as D,N as Ie,v as Pe}from"../chunks/index.769db22d.mjs";import{s as pe,c as ge}from"../chunks/config.33a9e0f1.mjs";function ve(t,e,o){const r=t.slice();return r[11]=e[o],r}function Ce(t){let e,o,r;return{c(){e=m("meta"),o=T(),r=m("meta"),this.h()},l(s){e=h(s,"META",{property:!0,content:!0}),o=$(s),r=h(s,"META",{name:!0,content:!0}),this.h()},h(){l(e,"property","og:image"),l(e,"content",""+(ge+t[2])),l(r,"name","twitter:image"),l(r,"content",""+(ge+t[2]))},m(s,f){B(s,e,f),B(s,o,f),B(s,r,f)},p:D,d(s){s&&u(e),s&&u(o),s&&u(r)}}}function Ue(t){let e,o;return{c(){e=m("figcaption"),o=j(t[8]),this.h()},l(r){e=h(r,"FIGCAPTION",{class:!0});var s=b(e);o=w(s,t[8]),s.forEach(u),this.h()},h(){l(e,"class","svelte-1xmj924")},m(r,s){B(r,e,s),a(e,o)},p:D,d(r){r&&u(e)}}}function qe(t){let e,o,r,s=t[1].author+"",f,_,n,i;return{c(){e=m("figcaption"),o=j(`Photo by
				`),r=m("a"),f=j(s),_=j(`
				on
				`),n=m("a"),i=j("Unsplash"),this.h()},l(g){e=h(g,"FIGCAPTION",{class:!0});var c=b(e);o=w(c,`Photo by
				`),r=h(c,"A",{target:!0,rel:!0,href:!0});var y=b(r);f=w(y,s),y.forEach(u),_=w(c,`
				on
				`),n=h(c,"A",{target:!0,rel:!0,href:!0});var d=b(n);i=w(d,"Unsplash"),d.forEach(u),c.forEach(u),this.h()},h(){l(r,"target","_blank"),l(r,"rel","noopener noreferrer nofollow"),l(r,"href",`${t[1].authorUrl}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`),l(n,"target","_blank"),l(n,"rel","noopener noreferrer nofollow"),l(n,"href","https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"),l(e,"class","svelte-1xmj924")},m(g,c){B(g,e,c),a(e,o),a(e,r),a(r,f),a(e,_),a(e,n),a(n,i)},p:D,d(g){g&&u(e)}}}function Be(t){let e,o,r,s,f,_=t[5],n=[];for(let i=0;i<_.length;i+=1)n[i]=Ee(ve(t,_,i));return{c(){e=m("aside"),o=m("h2"),r=j("Posted in:"),s=T(),f=m("ul");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=h(i,"ASIDE",{class:!0});var g=b(e);o=h(g,"H2",{});var c=b(o);r=w(c,"Posted in:"),c.forEach(u),s=$(g),f=h(g,"UL",{class:!0});var y=b(f);for(let d=0;d<n.length;d+=1)n[d].l(y);y.forEach(u),g.forEach(u),this.h()},h(){l(f,"class","svelte-1xmj924"),l(e,"class","post-footer svelte-1xmj924")},m(i,g){B(i,e,g),a(e,o),a(o,r),a(e,s),a(e,f);for(let c=0;c<n.length;c+=1)n[c].m(f,null)},p(i,g){if(g&32){_=i[5];let c;for(c=0;c<_.length;c+=1){const y=ve(i,_,c);n[c]?n[c].p(y,g):(n[c]=Ee(y),n[c].c(),n[c].m(f,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=_.length}},d(i){i&&u(e),Ie(n,i)}}}function Ee(t){let e,o,r=t[11]+"",s,f;return{c(){e=m("li"),o=m("a"),s=j(r),f=T(),this.h()},l(_){e=h(_,"LI",{class:!0});var n=b(e);o=h(n,"A",{href:!0,class:!0});var i=b(o);s=w(i,r),i.forEach(u),f=$(n),n.forEach(u),this.h()},h(){l(o,"href","/learning/category/"+t[11]+"/"),l(o,"class","svelte-1xmj924"),l(e,"class","svelte-1xmj924")},m(_,n){B(_,e,n),a(e,o),a(o,s),a(e,f)},p:D,d(_){_&&u(e)}}}function Ge(t){let e,o,r,s,f,_,n,i,g,c,y,d,I,M,re,O,V,G,z,W,k,F,J,K,Q,X,Y,Z,H,x,ee,te,ae,v,R,N;document.title=e=t[9]+" | "+pe;let U=t[2]&&Ce(t);function ye(p,E){if(p[1])return qe;if(p[8])return Ue}let le=ye(t),P=le&&le(t);var L=t[0].PostContent;function ne(p){return{}}L&&(v=ce(L,ne()));let q=t[5]&&Be(t);return{c(){o=m("meta"),r=m("meta"),s=m("meta"),f=m("meta"),_=m("meta"),n=m("meta"),i=m("meta"),g=m("meta"),U&&U.c(),c=ue(),y=T(),d=m("article"),I=m("figure"),M=m("img"),O=T(),P&&P.c(),V=T(),G=m("h1"),z=j(t[9]),W=T(),k=m("div"),F=m("b"),J=j("Published:"),K=T(),Q=j(t[6]),X=T(),Y=m("br"),Z=T(),H=m("b"),x=j("Updated:"),ee=T(),te=j(t[10]),ae=T(),v&&fe(v.$$.fragment),R=T(),q&&q.c(),this.h()},l(p){const E=Te("svelte-1l6bujq",document.head);o=h(E,"META",{"data-key":!0,name:!0,content:!0}),r=h(E,"META",{property:!0,content:!0}),s=h(E,"META",{property:!0,content:!0}),f=h(E,"META",{property:!0,content:!0}),_=h(E,"META",{property:!0,content:!0}),n=h(E,"META",{property:!0,content:!0}),i=h(E,"META",{name:!0,content:!0}),g=h(E,"META",{name:!0,content:!0}),U&&U.l(E),c=ue(),E.forEach(u),y=$(p),d=h(p,"ARTICLE",{class:!0});var A=b(d);I=h(A,"FIGURE",{class:!0});var S=b(I);M=h(S,"IMG",{src:!0,alt:!0,style:!0,width:!0,height:!0}),O=$(S),P&&P.l(S),S.forEach(u),V=$(A),G=h(A,"H1",{class:!0});var oe=b(G);z=w(oe,t[9]),oe.forEach(u),W=$(A),k=h(A,"DIV",{class:!0});var C=b(k);F=h(C,"B",{});var se=b(F);J=w(se,"Published:"),se.forEach(u),K=$(C),Q=w(C,t[6]),X=$(C),Y=h(C,"BR",{}),Z=$(C),H=h(C,"B",{});var ie=b(H);x=w(ie,"Updated:"),ie.forEach(u),ee=$(C),te=w(C,t[10]),C.forEach(u),ae=$(A),v&&$e(v.$$.fragment,A),R=$(A),q&&q.l(A),A.forEach(u),this.h()},h(){l(o,"data-key","description"),l(o,"name","description"),l(o,"content",t[7]),l(r,"property","og:type"),l(r,"content","article"),l(s,"property","og:title"),l(s,"content",t[9]),l(f,"property","og:description"),l(f,"content",t[7]),l(_,"property","og:image:width"),l(_,"content",t[3]),l(n,"property","og:image:height"),l(n,"content",t[4]),l(i,"name","twitter:title"),l(i,"content",t[9]),l(g,"name","twitter:description"),l(g,"content",t[7]),Me(M.src,re=t[2])||l(M,"src",re),l(M,"alt",t[8]||""),je(M,"aspect-ratio",t[3]+" / "+t[4]),l(M,"width",t[3]),l(M,"height",t[4]),l(I,"class","cover-image svelte-1xmj924"),l(G,"class","svelte-1xmj924"),l(k,"class","meta svelte-1xmj924"),l(d,"class","post svelte-1xmj924")},m(p,E){a(document.head,o),a(document.head,r),a(document.head,s),a(document.head,f),a(document.head,_),a(document.head,n),a(document.head,i),a(document.head,g),U&&U.m(document.head,null),a(document.head,c),B(p,y,E),B(p,d,E),a(d,I),a(I,M),a(I,O),P&&P.m(I,null),a(d,V),a(d,G),a(G,z),a(d,W),a(d,k),a(k,F),a(F,J),a(k,K),a(k,Q),a(k,X),a(k,Y),a(k,Z),a(k,H),a(H,x),a(k,ee),a(k,te),a(d,ae),v&&me(v,d,null),a(d,R),q&&q.m(d,null),N=!0},p(p,[E]){if((!N||E&512)&&e!==(e=p[9]+" | "+pe)&&(document.title=e),p[2]&&U.p(p,E),P&&P.p(p,E),L!==(L=p[0].PostContent)){if(v){Pe();const A=v;he(A.$$.fragment,1,0,()=>{de(A,1)}),we()}L?(v=ce(L,ne()),fe(v.$$.fragment),_e(v.$$.fragment,1),me(v,d,R)):v=null}p[5]&&q.p(p,E)},i(p){N||(v&&_e(v.$$.fragment,p),N=!0)},o(p){v&&he(v.$$.fragment,p),N=!1},d(p){u(o),u(r),u(s),u(f),u(_),u(n),u(i),u(g),U&&U.d(p),u(c),p&&u(y),p&&u(d),P&&P.d(),v&&de(v),q&&q.d()}}}function Le(t,e,o){let{data:r}=e;const{coverCaption:s,coverImage:f,coverWidth:_,coverHeight:n,categories:i,date:g,excerpt:c,imageAlt:y,title:d,updated:I}=r.meta;return t.$$set=M=>{"data"in M&&o(0,r=M.data)},[r,s,f,_,n,i,g,c,y,d,I]}class Ne extends be{constructor(e){super(),ke(this,e,Le,Ge,Ae,{data:0})}}export{Ne as default};
