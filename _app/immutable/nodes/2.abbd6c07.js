import{e as Se}from"../chunks/index.2defaa64.js";import{_ as B}from"../chunks/preload-helper.41c905a7.js";import{p as qe,b as De,c as Ie}from"../chunks/config.1a866872.js";import{S as Ce,i as Le,s as Je,a as x,k as d,q as v,R as Me,h as s,c as R,l as u,m as _,r as g,n,b as Q,E as t,W as xe,F as Pe,u as ce,X as Re}from"../chunks/index.f1db45d5.js";async function Ke({offset:f=0,limit:a=qe,category:r="",sort:e="date"}={}){const l=await Promise.all(Object.entries(Object.assign({"../../posts/atomically-pull-updates-from-upstream-template-repo.md":()=>B(()=>import("../chunks/atomically-pull-updates-from-upstream-template-repo.ca461b2f.js"),["../chunks/atomically-pull-updates-from-upstream-template-repo.ca461b2f.js","../chunks/index.f1db45d5.js"],import.meta.url),"../../posts/css-where-example.md":()=>B(()=>import("../chunks/css-where-example.c834fda2.js"),["../chunks/css-where-example.c834fda2.js","../chunks/index.f1db45d5.js"],import.meta.url),"../../posts/manage-node-versions-with-brew.md":()=>B(()=>import("../chunks/manage-node-versions-with-brew.27f55bae.js"),["../chunks/manage-node-versions-with-brew.27f55bae.js","../chunks/index.f1db45d5.js","../assets/manage-node-versions-with-brew.674e82b1.css"],import.meta.url),"../../posts/tdd-does-not-have-to-be-dogmatic.md":()=>B(()=>import("../chunks/tdd-does-not-have-to-be-dogmatic.356705a9.js"),["../chunks/tdd-does-not-have-to-be-dogmatic.356705a9.js","../chunks/index.f1db45d5.js"],import.meta.url),"../../posts/write-react-components-like-an-essay.md":()=>B(()=>import("../chunks/write-react-components-like-an-essay.391d3675.js"),["../chunks/write-react-components-like-an-essay.391d3675.js","../chunks/index.f1db45d5.js"],import.meta.url),"../../posts/yet-another-react-component-template.md":()=>B(()=>import("../chunks/yet-another-react-component-template.d63a3ee7.js"),["../chunks/yet-another-react-component-template.d63a3ee7.js","../chunks/index.f1db45d5.js"],import.meta.url)})).map(async([E,y])=>{const{metadata:k}=await y(),b=E.split("/").pop().slice(0,-3);return{...k,slug:b}}));let i=e instanceof Function?l.sort(e):l.sort((E,y)=>y[e]!=null&&y[e].localeCompare(E[e]));return r&&(i=i.filter(E=>E.categories.includes(r))),f&&(i=i.slice(f)),a&&a<i.length&&a!==-1&&(i=i.slice(0,a)),{posts:i}}async function ze(){try{const{posts:f}=await Ke({limit:4,sort:"updated"});return{posts:f}}catch(f){throw console.error(f.stack),Se(500,f.message)}}const Ue=Object.freeze(Object.defineProperty({__proto__:null,load:ze},Symbol.toStringTag,{value:"Module"}));function Oe(f,a,r){const e=f.slice();return e[1]=a[r],e}function Te(f,a,r){const e=f.slice();return e[4]=a[r],e}function Ve(f,a){let r,e,l,i=a[4]+"",E,y;return{key:f,first:null,c(){r=d("a"),e=d("code"),l=v("#"),E=v(i),this.h()},l(k){r=u(k,"A",{href:!0});var b=_(r);e=u(b,"CODE",{});var I=_(e);l=g(I,"#"),E=g(I,i),I.forEach(s),b.forEach(s),this.h()},h(){n(r,"href",y="/learning/category/"+a[4]),this.first=r},m(k,b){Q(k,r,b),t(r,e),t(e,l),t(e,E)},p(k,b){a=k,b&1&&i!==(i=a[4]+"")&&ce(E,i),b&1&&y!==(y="/learning/category/"+a[4])&&n(r,"href",y)},d(k){k&&s(r)}}}function je(f,a){let r,e,l,i,E=Ae(a[1].updated)+"",y,k,b,I,P=a[1].title+"",C,L,q,T,w=[],S=new Map,M,V=a[1].categories;const G=h=>h[4];for(let h=0;h<V.length;h+=1){let c=Te(a,V,h),m=G(c);S.set(m,w[h]=Ve(m,c))}return{key:f,first:null,c(){r=d("div"),e=d("a"),l=d("div"),i=v(`🔃
						`),y=v(E),k=x(),b=d("div"),I=d("strong"),C=v(P),q=x(),T=d("div");for(let h=0;h<w.length;h+=1)w[h].c();M=x(),this.h()},l(h){r=u(h,"DIV",{class:!0});var c=_(r);e=u(c,"A",{href:!0,class:!0});var m=_(e);l=u(m,"DIV",{class:!0});var K=_(l);i=g(K,`🔃
						`),y=g(K,E),K.forEach(s),k=R(m),b=u(m,"DIV",{class:!0});var H=_(b);I=u(H,"STRONG",{});var j=_(I);C=g(j,P),j.forEach(s),H.forEach(s),m.forEach(s),q=R(c),T=u(c,"DIV",{class:!0});var N=_(T);for(let z=0;z<w.length;z+=1)w[z].l(N);N.forEach(s),M=R(c),c.forEach(s),this.h()},h(){n(l,"class","subdued"),n(b,"class","my-1"),n(e,"href",L="/learning/"+a[1].slug),n(e,"class","link-decoration-none"),n(T,"class","mx-auto my-4 flex gap-4"),n(r,"class","card transform border-rounded-2 transition duration-500 focus-within:scale-110 hover:scale-110 svelte-jguqx0"),this.first=r},m(h,c){Q(h,r,c),t(r,e),t(e,l),t(l,i),t(l,y),t(e,k),t(e,b),t(b,I),t(I,C),t(r,q),t(r,T);for(let m=0;m<w.length;m+=1)w[m]&&w[m].m(T,null);t(r,M)},p(h,c){a=h,c&1&&E!==(E=Ae(a[1].updated)+"")&&ce(y,E),c&1&&P!==(P=a[1].title+"")&&ce(C,P),c&1&&L!==(L="/learning/"+a[1].slug)&&n(e,"href",L),c&1&&(V=a[1].categories,w=xe(w,c,G,1,a,V,S,T,Re,Ve,null,Te))},d(h){h&&s(r);for(let c=0;c<w.length;c+=1)w[c].d()}}}function Fe(f){let a,r,e,l,i,E,y,k,b,I,P,C,L,q,T,w,S,M,V,G,h,c,m,K,H,j,N,z,J,ae,re,Z,A,Y,se,le,F,O=[],de=new Map,oe,W,X,ne;document.title=a=De;let ee=f[0].posts;const ue=o=>o[1].slug;for(let o=0;o<ee.length;o+=1){let D=Oe(f,ee,o),p=ue(D);de.set(p,O[o]=je(p,D))}return{c(){r=x(),e=d("section"),l=d("div"),i=d("div"),E=v("Jason"),y=x(),k=d("div"),b=v("Kurian"),I=x(),P=d("code"),C=v(Ie),L=x(),q=d("p"),T=v("👋🏽 thanks for stopping by! My friends call me Jay, or JK."),w=x(),S=d("p"),M=v("I'm a combination "),V=d("a"),G=v("UX and Web Developer"),h=v(`, and sometimes touring or session
		keys player & music director.`),c=v(`
	Contact me on `),m=d("a"),K=v("GitHub"),H=v(`,
	`),j=d("a"),N=v("Twitter"),z=v(`, or
	`),J=d("a"),ae=v("LinkedIn"),re=v("."),Z=x(),A=d("section"),Y=d("h2"),se=v("Recent Posts"),le=x(),F=d("div");for(let o=0;o<O.length;o+=1)O[o].c();oe=x(),W=d("p"),X=d("a"),ne=v("See all entries"),this.h()},l(o){Me("svelte-cnbvpd",document.head).forEach(s),r=R(o),e=u(o,"SECTION",{class:!0});var p=_(e);l=u(p,"DIV",{class:!0});var U=_(l);i=u(U,"DIV",{class:!0});var _e=_(i);E=g(_e,"Jason"),_e.forEach(s),y=R(U),k=u(U,"DIV",{class:!0});var fe=_(k);b=g(fe,"Kurian"),fe.forEach(s),I=R(U),P=u(U,"CODE",{class:!0});var he=_(P);C=g(he,Ie),he.forEach(s),U.forEach(s),L=R(p),q=u(p,"P",{});var me=_(q);T=g(me,"👋🏽 thanks for stopping by! My friends call me Jay, or JK."),me.forEach(s),w=R(p),S=u(p,"P",{});var te=_(S);M=g(te,"I'm a combination "),V=u(te,"A",{href:!0});var pe=_(V);G=g(pe,"UX and Web Developer"),pe.forEach(s),h=g(te,`, and sometimes touring or session
		keys player & music director.`),te.forEach(s),c=g(p,`
	Contact me on `),m=u(p,"A",{target:!0,rel:!0,href:!0});var ve=_(m);K=g(ve,"GitHub"),ve.forEach(s),H=g(p,`,
	`),j=u(p,"A",{target:!0,rel:!0,href:!0});var ge=_(j);N=g(ge,"Twitter"),ge.forEach(s),z=g(p,`, or
	`),J=u(p,"A",{target:!0,rel:!0,href:!0});var Ee=_(J);ae=g(Ee,"LinkedIn"),Ee.forEach(s),re=g(p,"."),p.forEach(s),Z=R(o),A=u(o,"SECTION",{class:!0});var $=_(A);Y=u($,"H2",{});var ke=_(Y);se=g(ke,"Recent Posts"),ke.forEach(s),le=R($),F=u($,"DIV",{class:!0});var be=_(F);for(let ie=0;ie<O.length;ie+=1)O[ie].l(be);be.forEach(s),oe=R($),W=u($,"P",{class:!0});var ye=_(W);X=u(ye,"A",{href:!0});var we=_(X);ne=g(we,"See all entries"),we.forEach(s),ye.forEach(s),$.forEach(s),this.h()},h(){n(i,"class","name-heading first-name svelte-jguqx0"),n(k,"class","name-heading text-right svelte-jguqx0"),n(P,"class","mx-auto mt-5 block p-0 text-center text-xl font-300"),n(l,"class","my-12 leading-[1.1]"),n(V,"href","/resume"),n(m,"target","_blank"),n(m,"rel","nofollow noopener noreferrer"),n(m,"href","https://github.com/jakxz"),n(j,"target","_blank"),n(j,"rel","nofollow noopener noreferrer"),n(j,"href","https://twitter.com/jakxz92"),n(J,"target","_blank"),n(J,"rel","nofollow noopener noreferrer"),n(J,"href","https://www.linkedin.com/in/jgkurian/"),n(e,"class","m-auto max-w-21rem svelte-jguqx0"),n(F,"class","cards-grid svelte-jguqx0"),n(X,"href","/learning"),n(W,"class","text-center"),n(A,"class","svelte-jguqx0")},m(o,D){Q(o,r,D),Q(o,e,D),t(e,l),t(l,i),t(i,E),t(l,y),t(l,k),t(k,b),t(l,I),t(l,P),t(P,C),t(e,L),t(e,q),t(q,T),t(e,w),t(e,S),t(S,M),t(S,V),t(V,G),t(S,h),t(e,c),t(e,m),t(m,K),t(e,H),t(e,j),t(j,N),t(e,z),t(e,J),t(J,ae),t(e,re),Q(o,Z,D),Q(o,A,D),t(A,Y),t(Y,se),t(A,le),t(A,F);for(let p=0;p<O.length;p+=1)O[p]&&O[p].m(F,null);t(A,oe),t(A,W),t(W,X),t(X,ne)},p(o,[D]){D&0&&a!==(a=De)&&(document.title=a),D&1&&(ee=o[0].posts,O=xe(O,D,ue,1,o,ee,de,F,Re,je,null,Oe))},i:Pe,o:Pe,d(o){o&&s(r),o&&s(e),o&&s(Z),o&&s(A);for(let D=0;D<O.length;D+=1)O[D].d()}}}function Ae(f){return new Intl.DateTimeFormat(void 0,{dateStyle:"medium"}).format(new Date(`${f}T00:00:00`))}function Ge(f,a,r){let{data:e}=a;return f.$$set=l=>{"data"in l&&r(0,e=l.data)},[e]}class $e extends Ce{constructor(a){super(),Le(this,a,Ge,Fe,Je,{data:0})}}export{$e as component,Ue as universal};
