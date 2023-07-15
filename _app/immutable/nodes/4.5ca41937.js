import{_ as V}from"../chunks/preload-helper.cf010ec4.js";import{e as ot}from"../chunks/index.93323930.js";import{s as bt,h as gt,n as S}from"../chunks/scheduler.35f0b4e5.js";import{S as yt,i as Et,q as at,g as f,e as lt,s as y,m as L,r as st,H as kt,h,f as _,c as E,j as C,n as R,A as G,u as wt,k as s,z as c,a as k,v as it,t as ct,b as At,d as ut,w as mt,l as Ct,D as Tt,p as It}from"../chunks/index.f6189797.js";import{e as _t}from"../chunks/each.c0271183.js";import{b as pt,s as ft}from"../chunks/config.1a866872.js";const Pt=(o,t)=>{const e=o[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((l,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function $t({params:o,fetch:t}){try{const e=await Pt(Object.assign({"../../../lib/posts/atomically-pull-updates-from-upstream-template-repo.md":()=>V(()=>import("../chunks/atomically-pull-updates-from-upstream-template-repo.82f8e219.js"),["_app/immutable/chunks/atomically-pull-updates-from-upstream-template-repo.82f8e219.js","_app/immutable/chunks/scheduler.35f0b4e5.js","_app/immutable/chunks/index.f6189797.js"]),"../../../lib/posts/css-where-example.md":()=>V(()=>import("../chunks/css-where-example.0bcf3c88.js"),["_app/immutable/chunks/css-where-example.0bcf3c88.js","_app/immutable/chunks/scheduler.35f0b4e5.js","_app/immutable/chunks/index.f6189797.js"]),"../../../lib/posts/manage-node-versions-with-brew.md":()=>V(()=>import("../chunks/manage-node-versions-with-brew.25e701bb.js"),["_app/immutable/chunks/manage-node-versions-with-brew.25e701bb.js","_app/immutable/chunks/scheduler.35f0b4e5.js","_app/immutable/chunks/index.f6189797.js","_app/immutable/assets/manage-node-versions-with-brew.674e82b1.css"]),"../../../lib/posts/tdd-does-not-have-to-be-dogmatic.md":()=>V(()=>import("../chunks/tdd-does-not-have-to-be-dogmatic.374dffbb.js"),["_app/immutable/chunks/tdd-does-not-have-to-be-dogmatic.374dffbb.js","_app/immutable/chunks/scheduler.35f0b4e5.js","_app/immutable/chunks/index.f6189797.js"]),"../../../lib/posts/write-react-components-like-an-essay.md":()=>V(()=>import("../chunks/write-react-components-like-an-essay.731ca2bd.js"),["_app/immutable/chunks/write-react-components-like-an-essay.731ca2bd.js","_app/immutable/chunks/scheduler.35f0b4e5.js","_app/immutable/chunks/index.f6189797.js"]),"../../../lib/posts/yet-another-react-component-template.md":()=>V(()=>import("../chunks/yet-another-react-component-template.f3a1550c.js"),["_app/immutable/chunks/yet-another-react-component-template.f3a1550c.js","_app/immutable/chunks/scheduler.35f0b4e5.js","_app/immutable/chunks/index.f6189797.js"])}),`../../../lib/posts/${o.post}.md`);if(!e.metadata)throw new Error(`${o.post} is missing meta, check the frontmatter`);let l={};if(e.metadata.coverImage){const[,,m]=e.metadata.coverImage.split("-"),{alt_description:p,user:u,blur_hash:n,errors:a}=await t(`https://api.unsplash.com/photos/${m}`,{headers:{Authorization:"Client-ID 5Vuyp9Lt-Hv8zmhAIqJhkfEhwadbg0n0g2wJryJyRkA"}}).then(i=>i.json()).catch(i=>({}));if(!{}.CI&&a&&a.length)throw new Error(`Unsplash error(s): ${a.join(", ")}`);l={coverCaption:u?{...u,author:u.name,authorUrl:u.links.html}:null,imageAlt:p,imageBlurHash:n}}return{PostContent:e.default,meta:{...e.metadata,slug:o.post,...l}}}catch(e){throw console.error(e.stack),e.message.toLowerCase().includes("unknown variable")?ot(404,e.message):ot(500,e.message)}}const Jt=Object.freeze(Object.defineProperty({__proto__:null,load:$t},Symbol.toStringTag,{value:"Module"}));function ht(o,t,e){const l=o.slice();return l[11]=t[e],l}function Mt(o){let t;return{c(){t=f("meta"),this.h()},l(e){t=h(e,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","twitter:card"),s(t,"content","summary")},m(e,l){k(e,t,l)},p:S,d(e){e&&_(t)}}}function Lt(o){let t,e,l,m,p,u,n,a,i;return{c(){t=f("meta"),e=y(),l=f("meta"),m=y(),p=f("meta"),u=y(),n=f("meta"),a=y(),i=f("meta"),this.h()},l(r){t=h(r,"META",{property:!0,content:!0}),e=E(r),l=h(r,"META",{property:!0,content:!0}),m=E(r),p=h(r,"META",{property:!0,content:!0}),u=E(r),n=h(r,"META",{name:!0,content:!0}),a=E(r),i=h(r,"META",{name:!0,content:!0}),this.h()},h(){s(t,"property","og:image:width"),s(t,"content",o[3]),s(l,"property","og:image:height"),s(l,"content",o[4]),s(p,"property","og:image"),s(p,"content",""+(ft+o[2])),s(n,"name","twitter:image"),s(n,"content",""+(ft+o[2])),s(i,"name","twitter:card"),s(i,"content","summary_large_image")},m(r,d){k(r,t,d),k(r,e,d),k(r,l,d),k(r,m,d),k(r,p,d),k(r,u,d),k(r,n,d),k(r,a,d),k(r,i,d)},p:S,d(r){r&&(_(t),_(e),_(l),_(m),_(p),_(u),_(n),_(a),_(i))}}}function Rt(o){let t,e,l,m;function p(a,i){if(a[1])return Ot;if(a[8])return Dt}let u=p(o),n=u&&u(o);return{c(){t=f("figure"),e=f("img"),m=y(),n&&n.c(),this.h()},l(a){t=h(a,"FIGURE",{class:!0});var i=C(t);e=h(i,"IMG",{src:!0,alt:!0,style:!0,width:!0,height:!0}),m=E(i),n&&n.l(i),i.forEach(_),this.h()},h(){gt(e.src,l=o[2])||s(e,"src",l),s(e,"alt",o[8]||""),Ct(e,"aspect-ratio",o[3]+" / "+o[4]),s(e,"width",o[3]),s(e,"height",o[4]),s(t,"class","cover-image svelte-1is1pnb")},m(a,i){k(a,t,i),c(t,e),c(t,m),n&&n.m(t,null)},p(a,i){n&&n.p(a,i)},d(a){a&&_(t),n&&n.d()}}}function Dt(o){let t,e;return{c(){t=f("figcaption"),e=L(o[8])},l(l){t=h(l,"FIGCAPTION",{});var m=C(t);e=R(m,o[8]),m.forEach(_)},m(l,m){k(l,t,m),c(t,e)},p:S,d(l){l&&_(t)}}}function Ot(o){let t,e,l,m=o[1].author+"",p,u,n,a="Unsplash";return{c(){t=f("figcaption"),e=L(`Photo by
					`),l=f("a"),p=L(m),u=L(`
					on
					`),n=f("a"),n.textContent=a,this.h()},l(i){t=h(i,"FIGCAPTION",{});var r=C(t);e=R(r,`Photo by
					`),l=h(r,"A",{target:!0,rel:!0,href:!0});var d=C(l);p=R(d,m),d.forEach(_),u=R(r,`
					on
					`),n=h(r,"A",{target:!0,rel:!0,href:!0,"data-svelte-h":!0}),G(n)!=="svelte-9wljyf"&&(n.textContent=a),r.forEach(_),this.h()},h(){s(l,"target","_blank"),s(l,"rel","noopener noreferrer nofollow"),s(l,"href",`${o[1].authorUrl}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`),s(n,"target","_blank"),s(n,"rel","noopener noreferrer nofollow"),s(n,"href","https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")},m(i,r){k(i,t,r),c(t,e),c(t,l),c(l,p),c(t,u),c(t,n)},p:S,d(i){i&&_(t)}}}function jt(o){let t,e,l="Posted in:",m,p,u=_t(o[5]),n=[];for(let a=0;a<u.length;a+=1)n[a]=dt(ht(o,u,a));return{c(){t=f("aside"),e=f("h2"),e.textContent=l,m=y(),p=f("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){t=h(a,"ASIDE",{class:!0});var i=C(t);e=h(i,"H2",{"data-svelte-h":!0}),G(e)!=="svelte-18w0g4i"&&(e.textContent=l),m=E(i),p=h(i,"UL",{class:!0});var r=C(p);for(let d=0;d<n.length;d+=1)n[d].l(r);r.forEach(_),i.forEach(_),this.h()},h(){s(p,"class","svelte-1is1pnb"),s(t,"class","post-footer svelte-1is1pnb")},m(a,i){k(a,t,i),c(t,e),c(t,m),c(t,p);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(p,null)},p(a,i){if(i&32){u=_t(a[5]);let r;for(r=0;r<u.length;r+=1){const d=ht(a,u,r);n[r]?n[r].p(d,i):(n[r]=dt(d),n[r].c(),n[r].m(p,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=u.length}},d(a){a&&_(t),Tt(n,a)}}}function dt(o){let t,e,l=o[11]+"",m,p;return{c(){t=f("li"),e=f("a"),m=L(l),p=y(),this.h()},l(u){t=h(u,"LI",{class:!0});var n=C(t);e=h(n,"A",{href:!0,class:!0});var a=C(e);m=R(a,l),a.forEach(_),p=E(n),n.forEach(_),this.h()},h(){s(e,"href","/learning/category/"+o[11]+"/"),s(e,"class","svelte-1is1pnb"),s(t,"class","svelte-1is1pnb")},m(u,n){k(u,t,n),c(t,e),c(e,m),c(t,p)},p:S,d(u){u&&_(t)}}}function Ut(o){let t,e,l,m,p,u,n,a,i,r,d,M,H,D,A,O,x="Published:",F,J,N,W,K,j,tt="Updated:",Q,X,Y,v,B,T,et,Z,q;document.title=t=o[9]+" | "+pt;function vt(g,b){return g[2]?Lt:Mt}let z=vt(o)(o),P=!!o[2]&&Rt(o);var U=o[0].PostContent;function rt(g){return{}}U&&(v=at(U,rt()));let $=o[5]&&jt(o);return{c(){e=f("meta"),l=f("meta"),m=f("meta"),p=f("meta"),u=f("meta"),n=f("meta"),z.c(),a=lt(),i=y(),r=f("article"),P&&P.c(),d=y(),M=f("h1"),H=L(o[9]),D=y(),A=f("div"),O=f("b"),O.textContent=x,F=y(),J=L(o[6]),N=y(),W=f("br"),K=y(),j=f("b"),j.textContent=tt,Q=y(),X=L(o[10]),Y=y(),v&&st(v.$$.fragment),B=y(),T=f("script"),Z=y(),$&&$.c(),this.h()},l(g){const b=kt("svelte-1iee9m6",document.head);e=h(b,"META",{"data-key":!0,name:!0,content:!0}),l=h(b,"META",{property:!0,content:!0}),m=h(b,"META",{property:!0,content:!0}),p=h(b,"META",{property:!0,content:!0}),u=h(b,"META",{name:!0,content:!0}),n=h(b,"META",{name:!0,content:!0}),z.l(b),a=lt(),b.forEach(_),i=E(g),r=h(g,"ARTICLE",{class:!0});var w=C(r);P&&P.l(w),d=E(w),M=h(w,"H1",{class:!0});var nt=C(M);H=R(nt,o[9]),nt.forEach(_),D=E(w),A=h(w,"DIV",{class:!0});var I=C(A);O=h(I,"B",{"data-svelte-h":!0}),G(O)!=="svelte-ssrxh0"&&(O.textContent=x),F=E(I),J=R(I,o[6]),N=E(I),W=h(I,"BR",{}),K=E(I),j=h(I,"B",{"data-svelte-h":!0}),G(j)!=="svelte-1uwawh"&&(j.textContent=tt),Q=E(I),X=R(I,o[10]),I.forEach(_),Y=E(w),v&&wt(v.$$.fragment,w),B=E(w),T=h(w,"SCRIPT",{src:!0,repo:!0,"issue-term":!0,theme:!0,crossorigin:!0}),C(T).forEach(_),Z=E(w),$&&$.l(w),w.forEach(_),this.h()},h(){s(e,"data-key","description"),s(e,"name","description"),s(e,"content",o[7]),s(l,"property","og:type"),s(l,"content","article"),s(m,"property","og:title"),s(m,"content",o[9]),s(p,"property","og:description"),s(p,"content",o[7]),s(u,"name","twitter:title"),s(u,"content",o[9]),s(n,"name","twitter:description"),s(n,"content",o[7]),s(M,"class","svelte-1is1pnb"),s(A,"class","meta svelte-1is1pnb"),gt(T.src,et="https://utteranc.es/client.js")||s(T,"src",et),s(T,"repo","jakxz/jakxz.github.io"),s(T,"issue-term","og:title"),s(T,"theme","preferred-color-scheme"),s(T,"crossorigin","anonymous"),T.async=!0,s(r,"class","post svelte-1is1pnb")},m(g,b){c(document.head,e),c(document.head,l),c(document.head,m),c(document.head,p),c(document.head,u),c(document.head,n),z.m(document.head,null),c(document.head,a),k(g,i,b),k(g,r,b),P&&P.m(r,null),c(r,d),c(r,M),c(M,H),c(r,D),c(r,A),c(A,O),c(A,F),c(A,J),c(A,N),c(A,W),c(A,K),c(A,j),c(A,Q),c(A,X),c(r,Y),v&&it(v,r,null),c(r,B),c(r,T),c(r,Z),$&&$.m(r,null),q=!0},p(g,[b]){if((!q||b&512)&&t!==(t=g[9]+" | "+pt)&&(document.title=t),z.p(g,b),g[2]&&P.p(g,b),b&1&&U!==(U=g[0].PostContent)){if(v){It();const w=v;ct(w.$$.fragment,1,0,()=>{mt(w,1)}),At()}U?(v=at(U,rt()),st(v.$$.fragment),ut(v.$$.fragment,1),it(v,r,B)):v=null}g[5]&&$.p(g,b)},i(g){q||(v&&ut(v.$$.fragment,g),q=!0)},o(g){v&&ct(v.$$.fragment,g),q=!1},d(g){g&&(_(i),_(r)),_(e),_(l),_(m),_(p),_(u),_(n),z.d(g),_(a),P&&P.d(),v&&mt(v),$&&$.d()}}}function Vt(o,t,e){let{data:l}=t;const{coverCaption:m,coverImage:p,coverWidth:u,coverHeight:n,categories:a,date:i,excerpt:r,imageAlt:d,title:M,updated:H}=l.meta;return o.$$set=D=>{"data"in D&&e(0,l=D.data)},[l,m,p,u,n,a,i,r,d,M,H]}class Nt extends yt{constructor(t){super(),Et(this,t,Vt,Ut,bt,{data:0})}}export{Nt as component,Jt as universal};
