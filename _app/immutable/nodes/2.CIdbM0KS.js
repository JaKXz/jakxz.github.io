import{e as pt}from"../chunks/index.oiCz_B55.js";import{_ as S}from"../chunks/preload-helper.0HuHagjb.js";import{p as vt,s as gt,a as nt}from"../chunks/config.sb57TKbk.js";import{s as xt,n as it}from"../chunks/scheduler.EloVU2S9.js";import{S as Et,i as yt,s as T,e as h,r as j,h as Ct,d as v,b as O,a as f,o as w,p as M,u as V,g as s,k as B,j as r,w as et}from"../chunks/index.3e0jgRul.js";import{e as X,u as ft,d as mt}from"../chunks/each.g-_v2ujZ.js";async function kt({offset:i=0,limit:a=vt,category:t="",sort:e="date"}={}){const o=await Promise.all(Object.entries(Object.assign({"../../posts/atomically-pull-updates-from-upstream-template-repo.md":()=>S(()=>import("../chunks/atomically-pull-updates-from-upstream-template-repo.ObD2qUcV.js"),__vite__mapDeps([0,1,2]),import.meta.url),"../../posts/css-where-example.md":()=>S(()=>import("../chunks/css-where-example.TZD_AWQF.js"),__vite__mapDeps([3,1,2]),import.meta.url),"../../posts/manage-node-versions-with-brew.md":()=>S(()=>import("../chunks/manage-node-versions-with-brew.eyBkHTbD.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url),"../../posts/pairing.md":()=>S(()=>import("../chunks/pairing.eZIKGcgm.js"),__vite__mapDeps([7,1,2]),import.meta.url),"../../posts/steps-to-landing-a-dev-job.md":()=>S(()=>import("../chunks/steps-to-landing-a-dev-job.Kx1CiZsD.js"),__vite__mapDeps([8,1,2,5,6]),import.meta.url),"../../posts/tdd-does-not-have-to-be-dogmatic.md":()=>S(()=>import("../chunks/tdd-does-not-have-to-be-dogmatic.uGNVBuB0.js"),__vite__mapDeps([9,1,2]),import.meta.url),"../../posts/write-react-components-like-an-essay.md":()=>S(()=>import("../chunks/write-react-components-like-an-essay.jER_wt69.js"),__vite__mapDeps([10,1,2]),import.meta.url),"../../posts/yet-another-react-component-template.md":()=>S(()=>import("../chunks/yet-another-react-component-template.GfbK_qE9.js"),__vite__mapDeps([11,1,2]),import.meta.url)})).map(async([m,c])=>{const{metadata:x}=await c(),p=m.split("/").pop().slice(0,-3);return{...x,slug:p}}));let _=e instanceof Function?o.sort(e):o.sort((m,c)=>c[e]!=null&&c[e].localeCompare(m[e]));return t&&(_=_.filter(m=>m.categories.includes(t))),i&&(_=_.slice(i)),a&&a<_.length&&a!==-1&&(_=_.slice(0,a)),{posts:_}}async function bt(){try{const{posts:i}=await kt({limit:4,sort:"updated"});return{posts:i}}catch(i){throw console.error(i.stack),pt(500,i.message)}}const At=Object.freeze(Object.defineProperty({__proto__:null,load:bt},Symbol.toStringTag,{value:"Module"}));function ct(i,a,t){const e=i.slice();return e[1]=a[t],e}function dt(i,a,t){const e=i.slice();return e[4]=a[t],e}function ut(i,a){let t,e,o,_=a[4]+"",m,c;return{key:i,first:null,c(){t=h("a"),e=h("code"),o=j("#"),m=j(_),this.h()},l(x){t=f(x,"A",{href:!0});var p=w(t);e=f(p,"CODE",{});var E=w(e);o=V(E,"#"),m=V(E,_),E.forEach(v),p.forEach(v),this.h()},h(){s(t,"href",c="/learning/category/"+a[4]),this.first=t},m(x,p){B(x,t,p),r(t,e),r(e,o),r(e,m)},p(x,p){a=x,p&1&&_!==(_=a[4]+"")&&et(m,_),p&1&&c!==(c="/learning/category/"+a[4])&&s(t,"href",c)},d(x){x&&v(t)}}}function _t(i,a){let t,e,o,_,m=ht(a[1].updated)+"",c,x,p,E,A=a[1].title+"",R,D,F,I,d=[],Q=new Map,H,k=X(a[1].categories);const U=u=>u[4];for(let u=0;u<k.length;u+=1){let l=dt(a,k,u),y=U(l);Q.set(y,d[u]=ut(y,l))}return{key:i,first:null,c(){t=h("div"),e=h("a"),o=h("p"),_=j(`🔃
						`),c=j(m),x=T(),p=h("p"),E=h("strong"),R=j(A),F=T(),I=h("div");for(let u=0;u<d.length;u+=1)d[u].c();H=T(),this.h()},l(u){t=f(u,"DIV",{class:!0});var l=w(t);e=f(l,"A",{href:!0,class:!0});var y=w(e);o=f(y,"P",{class:!0});var z=w(o);_=V(z,`🔃
						`),c=V(z,m),z.forEach(v),x=O(y),p=f(y,"P",{class:!0});var J=w(p);E=f(J,"STRONG",{});var b=w(E);R=V(b,A),b.forEach(v),J.forEach(v),y.forEach(v),F=O(l),I=f(l,"DIV",{class:!0});var L=w(I);for(let G=0;G<d.length;G+=1)d[G].l(L);L.forEach(v),H=O(l),l.forEach(v),this.h()},h(){s(o,"class","subdued m-0"),s(p,"class","my-1"),s(e,"href",D="/learning/"+a[1].slug),s(e,"class","link-decoration-none"),s(I,"class","mx-auto my-4 flex gap-4"),s(t,"class","card transform border-rounded-2 transition duration-500 focus-within:scale-110 hover:scale-110 svelte-9jxyrg"),this.first=t},m(u,l){B(u,t,l),r(t,e),r(e,o),r(o,_),r(o,c),r(e,x),r(e,p),r(p,E),r(E,R),r(t,F),r(t,I);for(let y=0;y<d.length;y+=1)d[y]&&d[y].m(I,null);r(t,H)},p(u,l){a=u,l&1&&m!==(m=ht(a[1].updated)+"")&&et(c,m),l&1&&A!==(A=a[1].title+"")&&et(R,A),l&1&&D!==(D="/learning/"+a[1].slug)&&s(e,"href",D),l&1&&(k=X(a[1].categories),d=ft(d,l,U,1,a,k,Q,I,mt,ut,null,dt))},d(u){u&&v(t);for(let l=0;l<d.length;l+=1)d[l].d()}}}function wt(i){let a,t,e,o,_="Jason",m,c,x="Kurian",p,E,A,R,D,F="👋🏽 thanks for stopping by! My friends call me Jay, or JK.",I,d,Q="GitHub",H,k,U="Twitter",u,l,y="LinkedIn",z,J,b,L,G="Recent Posts",Y,N,P=[],at=new Map,Z,q,rt='<a href="/learning">See all entries</a>';document.title=gt;let W=X(i[0].posts);const lt=n=>n[1].slug;for(let n=0;n<W.length;n+=1){let C=ct(i,W,n),g=lt(C);at.set(g,P[n]=_t(g,C))}return{c(){a=T(),t=h("section"),e=h("div"),o=h("div"),o.textContent=_,m=T(),c=h("div"),c.textContent=x,p=T(),E=h("code"),A=j(nt),R=T(),D=h("p"),D.textContent=F,I=j(`
	Contact me on `),d=h("a"),d.textContent=Q,H=j(`,
	`),k=h("a"),k.textContent=U,u=j(`, or
	`),l=h("a"),l.textContent=y,z=j("."),J=T(),b=h("section"),L=h("h2"),L.textContent=G,Y=T(),N=h("div");for(let n=0;n<P.length;n+=1)P[n].c();Z=T(),q=h("p"),q.innerHTML=rt,this.h()},l(n){Ct("svelte-cnbvpd",document.head).forEach(v),a=O(n),t=f(n,"SECTION",{class:!0});var g=w(t);e=f(g,"DIV",{class:!0});var K=w(e);o=f(K,"DIV",{class:!0,"data-svelte-h":!0}),M(o)!=="svelte-111avia"&&(o.textContent=_),m=O(K),c=f(K,"DIV",{class:!0,"data-svelte-h":!0}),M(c)!=="svelte-ynybu7"&&(c.textContent=x),p=O(K),E=f(K,"CODE",{class:!0});var st=w(E);A=V(st,nt),st.forEach(v),K.forEach(v),R=O(g),D=f(g,"P",{"data-svelte-h":!0}),M(D)!=="svelte-1ruapb0"&&(D.textContent=F),I=V(g,`
	Contact me on `),d=f(g,"A",{target:!0,rel:!0,href:!0,"data-svelte-h":!0}),M(d)!=="svelte-adrw18"&&(d.textContent=Q),H=V(g,`,
	`),k=f(g,"A",{target:!0,rel:!0,href:!0,"data-svelte-h":!0}),M(k)!=="svelte-1fg1vbo"&&(k.textContent=U),u=V(g,`, or
	`),l=f(g,"A",{target:!0,rel:!0,href:!0,"data-svelte-h":!0}),M(l)!=="svelte-vo3xj9"&&(l.textContent=y),z=V(g,"."),g.forEach(v),J=O(n),b=f(n,"SECTION",{class:!0});var $=w(b);L=f($,"H2",{"data-svelte-h":!0}),M(L)!=="svelte-9nln4i"&&(L.textContent=G),Y=O($),N=f($,"DIV",{class:!0});var ot=w(N);for(let tt=0;tt<P.length;tt+=1)P[tt].l(ot);ot.forEach(v),Z=O($),q=f($,"P",{class:!0,"data-svelte-h":!0}),M(q)!=="svelte-u65qsg"&&(q.innerHTML=rt),$.forEach(v),this.h()},h(){s(o,"class","name-heading first-name svelte-9jxyrg"),s(c,"class","name-heading text-right svelte-9jxyrg"),s(E,"class","mx-auto mt-5 block p-0 text-center text-xl font-300"),s(e,"class","my-12 leading-[1.1]"),s(d,"target","_blank"),s(d,"rel","nofollow noopener noreferrer"),s(d,"href","https://github.com/jakxz"),s(k,"target","_blank"),s(k,"rel","nofollow noopener noreferrer"),s(k,"href","https://twitter.com/jakxz92"),s(l,"target","_blank"),s(l,"rel","nofollow noopener noreferrer"),s(l,"href","https://www.linkedin.com/in/jgkurian/"),s(t,"class","m-auto max-w-21rem svelte-9jxyrg"),s(N,"class","cards-grid svelte-9jxyrg"),s(q,"class","text-center"),s(b,"class","svelte-9jxyrg")},m(n,C){B(n,a,C),B(n,t,C),r(t,e),r(e,o),r(e,m),r(e,c),r(e,p),r(e,E),r(E,A),r(t,R),r(t,D),r(t,I),r(t,d),r(t,H),r(t,k),r(t,u),r(t,l),r(t,z),B(n,J,C),B(n,b,C),r(b,L),r(b,Y),r(b,N);for(let g=0;g<P.length;g+=1)P[g]&&P[g].m(N,null);r(b,Z),r(b,q)},p(n,[C]){C&1&&(W=X(n[0].posts),P=ft(P,C,lt,1,n,W,at,N,mt,_t,null,ct))},i:it,o:it,d(n){n&&(v(a),v(t),v(J),v(b));for(let C=0;C<P.length;C+=1)P[C].d()}}}function ht(i){return new Intl.DateTimeFormat(void 0,{dateStyle:"medium"}).format(new Date(`${i}T00:00:00`))}function Pt(i,a,t){let{data:e}=a;return i.$$set=o=>{"data"in o&&t(0,e=o.data)},[e]}class Lt extends Et{constructor(a){super(),yt(this,a,Pt,wt,xt,{data:0})}}export{Lt as component,At as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/atomically-pull-updates-from-upstream-template-repo.ObD2qUcV.js","../chunks/scheduler.EloVU2S9.js","../chunks/index.3e0jgRul.js","../chunks/css-where-example.TZD_AWQF.js","../chunks/manage-node-versions-with-brew.eyBkHTbD.js","../chunks/Callout.qg7oehLe.js","../assets/Callout.X5vki1T8.css","../chunks/pairing.eZIKGcgm.js","../chunks/steps-to-landing-a-dev-job.Kx1CiZsD.js","../chunks/tdd-does-not-have-to-be-dogmatic.uGNVBuB0.js","../chunks/write-react-components-like-an-essay.jER_wt69.js","../chunks/yet-another-react-component-template.GfbK_qE9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
