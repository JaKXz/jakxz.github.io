const __vite__fileDeps=["../chunks/atomically-pull-updates-from-upstream-template-repo.DloW5_6c.js","../chunks/scheduler.z2Rozvoi.js","../chunks/index.CXJW-Xr-.js","../chunks/css-where-example.DXMW7YLP.js","../chunks/manage-node-versions-with-brew.DSS2dayK.js","../chunks/Callout.D7rIVHXj.js","../assets/Callout.Bfm-SLVP.css","../chunks/pairing.DQ9FThC2.js","../chunks/steps-to-landing-a-dev-job.K12sCeMz.js","../chunks/tdd-does-not-have-to-be-dogmatic.4VythklJ.js","../chunks/write-react-components-like-an-essay.BW5EtOAz.js","../chunks/yet-another-react-component-template.DXXeXJCf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as pt}from"../chunks/index.CzR0xuCU.js";import{_ as S}from"../chunks/preload-helper.D6kgxu3v.js";import{p as vt,s as gt,a as nt}from"../chunks/config.BGhx3d_X.js";import{s as Et,n as it}from"../chunks/scheduler.z2Rozvoi.js";import{S as Ct,i as kt,s as T,e as h,r as V,h as xt,d as v,b as O,a as f,o as y,p as M,u as A,g as n,k as B,j as o,w as et}from"../chunks/index.CXJW-Xr-.js";import{e as X,u as ft,d as mt}from"../chunks/each.Bf2fYacG.js";async function wt({offset:i=0,limit:a=vt,category:t="",sort:e="date"}={}){const l=await Promise.all(Object.entries(Object.assign({"../../posts/atomically-pull-updates-from-upstream-template-repo.md":()=>S(()=>import("../chunks/atomically-pull-updates-from-upstream-template-repo.DloW5_6c.js"),__vite__mapDeps([0,1,2]),import.meta.url),"../../posts/css-where-example.md":()=>S(()=>import("../chunks/css-where-example.DXMW7YLP.js"),__vite__mapDeps([3,1,2]),import.meta.url),"../../posts/manage-node-versions-with-brew.md":()=>S(()=>import("../chunks/manage-node-versions-with-brew.DSS2dayK.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url),"../../posts/pairing.md":()=>S(()=>import("../chunks/pairing.DQ9FThC2.js"),__vite__mapDeps([7,1,2]),import.meta.url),"../../posts/steps-to-landing-a-dev-job.md":()=>S(()=>import("../chunks/steps-to-landing-a-dev-job.K12sCeMz.js"),__vite__mapDeps([8,1,2,5,6]),import.meta.url),"../../posts/tdd-does-not-have-to-be-dogmatic.md":()=>S(()=>import("../chunks/tdd-does-not-have-to-be-dogmatic.4VythklJ.js"),__vite__mapDeps([9,1,2]),import.meta.url),"../../posts/write-react-components-like-an-essay.md":()=>S(()=>import("../chunks/write-react-components-like-an-essay.BW5EtOAz.js"),__vite__mapDeps([10,1,2]),import.meta.url),"../../posts/yet-another-react-component-template.md":()=>S(()=>import("../chunks/yet-another-react-component-template.DXXeXJCf.js"),__vite__mapDeps([11,1,2]),import.meta.url)})).map(async([m,c])=>{const{metadata:E}=await c(),p=m.split("/").pop().slice(0,-3);return{...E,slug:p}}));let _=e instanceof Function?l.sort(e):l.sort((m,c)=>c[e]!=null&&c[e].localeCompare(m[e]));return t&&(_=_.filter(m=>m.categories.includes(t))),i&&(_=_.slice(i)),a&&a<_.length&&a!==-1&&(_=_.slice(0,a)),{posts:_}}async function bt(){try{const{posts:i}=await wt({limit:4,sort:"updated"});return{posts:i}}catch(i){throw console.error(i.stack),pt(500,i.message)}}const Lt=Object.freeze(Object.defineProperty({__proto__:null,load:bt},Symbol.toStringTag,{value:"Module"}));function ct(i,a,t){const e=i.slice();return e[1]=a[t],e}function dt(i,a,t){const e=i.slice();return e[4]=a[t],e}function ut(i,a){let t,e,l,_=a[4]+"",m,c;return{key:i,first:null,c(){t=h("a"),e=h("code"),l=V("#"),m=V(_),this.h()},l(E){t=f(E,"A",{href:!0});var p=y(t);e=f(p,"CODE",{});var C=y(e);l=A(C,"#"),m=A(C,_),C.forEach(v),p.forEach(v),this.h()},h(){n(t,"href",c="/learning/category/"+a[4]),this.first=t},m(E,p){B(E,t,p),o(t,e),o(e,l),o(e,m)},p(E,p){a=E,p&1&&_!==(_=a[4]+"")&&et(m,_),p&1&&c!==(c="/learning/category/"+a[4])&&n(t,"href",c)},d(E){E&&v(t)}}}function _t(i,a){let t,e,l,_,m=ht(a[1].updated)+"",c,E,p,C,L=a[1].title+"",R,D,F,I,d=[],Q=new Map,H,w=X(a[1].categories);const U=u=>u[4];for(let u=0;u<w.length;u+=1){let r=dt(a,w,u),k=U(r);Q.set(k,d[u]=ut(k,r))}return{key:i,first:null,c(){t=h("div"),e=h("a"),l=h("p"),_=V(`🔃
						`),c=V(m),E=T(),p=h("p"),C=h("strong"),R=V(L),F=T(),I=h("div");for(let u=0;u<d.length;u+=1)d[u].c();H=T(),this.h()},l(u){t=f(u,"DIV",{class:!0});var r=y(t);e=f(r,"A",{href:!0,class:!0});var k=y(e);l=f(k,"P",{class:!0});var z=y(l);_=A(z,`🔃
						`),c=A(z,m),z.forEach(v),E=O(k),p=f(k,"P",{class:!0});var J=y(p);C=f(J,"STRONG",{});var b=y(C);R=A(b,L),b.forEach(v),J.forEach(v),k.forEach(v),F=O(r),I=f(r,"DIV",{class:!0});var j=y(I);for(let G=0;G<d.length;G+=1)d[G].l(j);j.forEach(v),H=O(r),r.forEach(v),this.h()},h(){n(l,"class","subdued m-0"),n(p,"class","my-1"),n(e,"href",D="/learning/"+a[1].slug),n(e,"class","link-decoration-none"),n(I,"class","mx-auto my-4 flex gap-4"),n(t,"class","card transform border-rounded-2 transition duration-500 focus-within:scale-110 hover:scale-110 svelte-1ow1s2t"),this.first=t},m(u,r){B(u,t,r),o(t,e),o(e,l),o(l,_),o(l,c),o(e,E),o(e,p),o(p,C),o(C,R),o(t,F),o(t,I);for(let k=0;k<d.length;k+=1)d[k]&&d[k].m(I,null);o(t,H)},p(u,r){a=u,r&1&&m!==(m=ht(a[1].updated)+"")&&et(c,m),r&1&&L!==(L=a[1].title+"")&&et(R,L),r&1&&D!==(D="/learning/"+a[1].slug)&&n(e,"href",D),r&1&&(w=X(a[1].categories),d=ft(d,r,U,1,a,w,Q,I,mt,ut,null,dt))},d(u){u&&v(t);for(let r=0;r<d.length;r+=1)d[r].d()}}}function yt(i){let a,t,e,l,_="Jason",m,c,E="Kurian",p,C,L,R,D,F="👋🏽 thanks for stopping by! My friends call me Jay, or JK.",I,d,Q="GitHub",H,w,U="Twitter",u,r,k="LinkedIn",z,J,b,j,G="Recent Posts",Y,N,P=[],at=new Map,Z,q,ot='<a href="/learning">See all entries</a>';document.title=gt;let W=X(i[0].posts);const rt=s=>s[1].slug;for(let s=0;s<W.length;s+=1){let x=ct(i,W,s),g=rt(x);at.set(g,P[s]=_t(g,x))}return{c(){a=T(),t=h("section"),e=h("div"),l=h("div"),l.textContent=_,m=T(),c=h("div"),c.textContent=E,p=T(),C=h("code"),L=V(nt),R=T(),D=h("p"),D.textContent=F,I=V(`
	Contact me on `),d=h("a"),d.textContent=Q,H=V(`,
	`),w=h("a"),w.textContent=U,u=V(`, or
	`),r=h("a"),r.textContent=k,z=V("."),J=T(),b=h("section"),j=h("h2"),j.textContent=G,Y=T(),N=h("div");for(let s=0;s<P.length;s+=1)P[s].c();Z=T(),q=h("p"),q.innerHTML=ot,this.h()},l(s){xt("svelte-cnbvpd",document.head).forEach(v),a=O(s),t=f(s,"SECTION",{class:!0});var g=y(t);e=f(g,"DIV",{class:!0});var K=y(e);l=f(K,"DIV",{class:!0,"data-svelte-h":!0}),M(l)!=="svelte-111avia"&&(l.textContent=_),m=O(K),c=f(K,"DIV",{class:!0,"data-svelte-h":!0}),M(c)!=="svelte-ynybu7"&&(c.textContent=E),p=O(K),C=f(K,"CODE",{class:!0});var lt=y(C);L=A(lt,nt),lt.forEach(v),K.forEach(v),R=O(g),D=f(g,"P",{"data-svelte-h":!0}),M(D)!=="svelte-1ruapb0"&&(D.textContent=F),I=A(g,`
	Contact me on `),d=f(g,"A",{target:!0,rel:!0,href:!0,"data-svelte-h":!0}),M(d)!=="svelte-adrw18"&&(d.textContent=Q),H=A(g,`,
	`),w=f(g,"A",{target:!0,rel:!0,href:!0,"data-svelte-h":!0}),M(w)!=="svelte-1fg1vbo"&&(w.textContent=U),u=A(g,`, or
	`),r=f(g,"A",{target:!0,rel:!0,href:!0,"data-svelte-h":!0}),M(r)!=="svelte-vo3xj9"&&(r.textContent=k),z=A(g,"."),g.forEach(v),J=O(s),b=f(s,"SECTION",{});var $=y(b);j=f($,"H2",{"data-svelte-h":!0}),M(j)!=="svelte-9nln4i"&&(j.textContent=G),Y=O($),N=f($,"DIV",{class:!0});var st=y(N);for(let tt=0;tt<P.length;tt+=1)P[tt].l(st);st.forEach(v),Z=O($),q=f($,"P",{class:!0,"data-svelte-h":!0}),M(q)!=="svelte-u65qsg"&&(q.innerHTML=ot),$.forEach(v),this.h()},h(){n(l,"class","name-heading first-name svelte-1ow1s2t"),n(c,"class","name-heading text-right svelte-1ow1s2t"),n(C,"class","mx-auto mt-5 block p-0 text-center text-xl font-300"),n(e,"class","my-12 leading-[1.1]"),n(d,"target","_blank"),n(d,"rel","nofollow noopener noreferrer"),n(d,"href","https://github.com/jakxz"),n(w,"target","_blank"),n(w,"rel","nofollow noopener noreferrer"),n(w,"href","https://twitter.com/jakxz92"),n(r,"target","_blank"),n(r,"rel","nofollow noopener noreferrer"),n(r,"href","https://www.linkedin.com/in/jgkurian/"),n(t,"class","m-auto max-w-21rem"),n(N,"class","cards-grid svelte-1ow1s2t"),n(q,"class","text-center")},m(s,x){B(s,a,x),B(s,t,x),o(t,e),o(e,l),o(e,m),o(e,c),o(e,p),o(e,C),o(C,L),o(t,R),o(t,D),o(t,I),o(t,d),o(t,H),o(t,w),o(t,u),o(t,r),o(t,z),B(s,J,x),B(s,b,x),o(b,j),o(b,Y),o(b,N);for(let g=0;g<P.length;g+=1)P[g]&&P[g].m(N,null);o(b,Z),o(b,q)},p(s,[x]){x&1&&(W=X(s[0].posts),P=ft(P,x,rt,1,s,W,at,N,mt,_t,null,ct))},i:it,o:it,d(s){s&&(v(a),v(t),v(J),v(b));for(let x=0;x<P.length;x+=1)P[x].d()}}}function ht(i){return new Intl.DateTimeFormat(void 0,{dateStyle:"medium"}).format(new Date(`${i}T00:00:00`))}function Pt(i,a,t){let{data:e}=a;return i.$$set=l=>{"data"in l&&t(0,e=l.data)},[e]}class jt extends Ct{constructor(a){super(),kt(this,a,Pt,yt,Et,{data:0})}}export{jt as component,Lt as universal};
