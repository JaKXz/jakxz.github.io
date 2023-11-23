import{o as me,t as we}from"../chunks/scheduler.35f0b4e5.js";import{S as Ge,a as Ke,I as V,g as De,f as Ce,b as _e,c as le,s as te,i as ye,d as H,o as Me,e as G,P as Ve,h as Ze}from"../chunks/singletons.10e00991.js";import{R as qe,H as ne}from"../chunks/control.f5b05b5f.js";function Qe(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function et(t){return t.split("%25").map(decodeURI).join("%25")}function tt(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const nt=["href","pathname","search","searchParams","toString","toJSON"];function at(t,o){const d=new URL(t);for(const i of nt)Object.defineProperty(d,i,{get(){return o(),t[i]},enumerable:!0,configurable:!0});return rt(d),d}function rt(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ot="/__data.json";function it(t){return t.replace(/\/$/,"")+ot}function st(...t){let o=5381;for(const d of t)if(typeof d=="string"){let i=d.length;for(;i;)o=o*33^d.charCodeAt(--i)}else if(ArrayBuffer.isView(d)){const i=new Uint8Array(d.buffer,d.byteOffset,d.byteLength);let h=i.length;for(;h;)o=o*33^i[--h]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const ze=window.fetch;window.fetch=(t,o)=>((t instanceof Request?t.method:(o==null?void 0:o.method)||"GET")!=="GET"&&ae.delete(ke(t)),ze(t,o));const ae=new Map;function ct(t,o){const d=ke(t,o),i=document.querySelector(d);if(i!=null&&i.textContent){const{body:h,...f}=JSON.parse(i.textContent),E=i.getAttribute("data-ttl");return E&&ae.set(d,{body:h,init:f,ttl:1e3*Number(E)}),Promise.resolve(new Response(h,f))}return window.fetch(t,o)}function lt(t,o,d){if(ae.size>0){const i=ke(t,d),h=ae.get(i);if(h){if(performance.now()<h.ttl&&["default","force-cache","only-if-cached",void 0].includes(d==null?void 0:d.cache))return new Response(h.body,h.init);ae.delete(i)}}return window.fetch(o,d)}function ke(t,o){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const h=[];o.headers&&h.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&h.push(o.body),i+=`[data-hash="${st(...h)}"]`}return i}const ft=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ut(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${pt(t).map(i=>{const h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(h)return o.push({name:h[1],matcher:h[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const E=i.split(/\[(.+?)\](?!\])/);return"/"+E.map((g,m)=>{if(m%2){if(g.startsWith("x+"))return ve(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return ve(String.fromCharCode(...g.slice(2).split("-").map(U=>parseInt(U,16))));const u=ft.exec(g);if(!u)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,$,R,C]=u;return o.push({name:R,matcher:C,optional:!!j,rest:!!$,chained:$?m===1&&E[0]==="":!1}),$?"(.*?)":j?"([^/]*)?":"([^/]+?)"}return ve(g)}).join("")}).join("")}/?$`),params:o}}function dt(t){return!/^\([^)]+\)$/.test(t)}function pt(t){return t.slice(1).split("/").filter(dt)}function ht(t,o,d){const i={},h=t.slice(1),f=h.filter(l=>l!==void 0);let E=0;for(let l=0;l<o.length;l+=1){const g=o[l];let m=h[l-E];if(g.chained&&g.rest&&E&&(m=h.slice(l-E,l+1).filter(u=>u).join("/"),E=0),m===void 0){g.rest&&(i[g.name]="");continue}if(!g.matcher||d[g.matcher](m)){i[g.name]=m;const u=o[l+1],j=h[l+1];u&&!u.rest&&u.optional&&j&&g.chained&&(E=0),!u&&!j&&Object.keys(i).length===f.length&&(E=0);continue}if(g.optional&&g.chained){E++;continue}return}if(!E)return i}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function gt({nodes:t,server_loads:o,dictionary:d,matchers:i}){const h=new Set(o);return Object.entries(d).map(([l,[g,m,u]])=>{const{pattern:j,params:$}=ut(l),R={id:l,exec:C=>{const U=j.exec(C);if(U)return ht(U,$,i)},errors:[1,...u||[]].map(C=>t[C]),layouts:[0,...m||[]].map(E),leaf:f(g)};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R});function f(l){const g=l<0;return g&&(l=~l),[g,t[l]]}function E(l){return l===void 0?l:[h.has(l),t[l]]}}function Je(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Fe(t,o){const d=JSON.stringify(o);try{sessionStorage[t]=d}catch{}}const mt=-1,wt=-2,_t=-3,yt=-4,vt=-5,bt=-6;function Et(t,o){if(typeof t=="number")return h(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const d=t,i=Array(d.length);function h(f,E=!1){if(f===mt)return;if(f===_t)return NaN;if(f===yt)return 1/0;if(f===vt)return-1/0;if(f===bt)return-0;if(E)throw new Error("Invalid input");if(f in i)return i[f];const l=d[f];if(!l||typeof l!="object")i[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const g=l[0],m=o==null?void 0:o[g];if(m)return i[f]=m(h(l[1]));switch(g){case"Date":i[f]=new Date(l[1]);break;case"Set":const u=new Set;i[f]=u;for(let R=1;R<l.length;R+=1)u.add(h(l[R]));break;case"Map":const j=new Map;i[f]=j;for(let R=1;R<l.length;R+=2)j.set(h(l[R]),h(l[R+1]));break;case"RegExp":i[f]=new RegExp(l[1],l[2]);break;case"Object":i[f]=Object(l[1]);break;case"BigInt":i[f]=BigInt(l[1]);break;case"null":const $=Object.create(null);i[f]=$;for(let R=1;R<l.length;R+=2)$[l[R]]=h(l[R+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(l.length);i[f]=g;for(let m=0;m<l.length;m+=1){const u=l[m];u!==wt&&(g[m]=h(u))}}else{const g={};i[f]=g;for(const m in l){const u=l[m];g[m]=h(u)}}return i[f]}return h(0)}function kt(t){return t.filter(o=>o!=null)}const We=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...We];const St=new Set([...We]);[...St];async function Rt(t){var o;for(const d in t)if(typeof((o=t[d])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([i,h])=>[i,await h])));return t}const At="x-sveltekit-invalidated",It="x-sveltekit-trailing-slash",K=Je(Ge)??{},ee=Je(Ke)??{};function be(t){K[t]=te()}function z(t){return location.href=t.href,new Promise(()=>{})}function Lt(t,o){var Ne;const d=gt(t),i=t.nodes[0],h=t.nodes[1];i(),h();const f=document.documentElement,E=[],l=[];let g=null;const m={before_navigate:[],on_navigate:[],after_navigate:[]};let u={branch:[],error:null,url:null},j=!1,$=!1,R=!0,C=!1,U=!1,D=!1,J=!1,q,x=(Ne=history.state)==null?void 0:Ne[V];x||(x=Date.now(),history.replaceState({...history.state,[V]:x},"",location.href));const fe=K[x];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let F,W,Y;async function Se(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const e=new URL(location.href),s=Z(e,!0);g=null;const n=W={},r=s&&await pe(s);if(n===W&&r){if(r.type==="redirect")return re(new URL(r.location,e).href,{},1,n);r.props.page!==void 0&&(F=r.props.page),q.$set(r.props)}}function Re(e){l.some(s=>s==null?void 0:s.snapshot)&&(ee[e]=l.map(s=>{var n;return(n=s==null?void 0:s.snapshot)==null?void 0:n.capture()}))}function Ae(e){var s;(s=ee[e])==null||s.forEach((n,r)=>{var a,c;(c=(a=l[r])==null?void 0:a.snapshot)==null||c.restore(n)})}function Ie(){be(x),Fe(Ge,K),Re(x),Fe(Ke,ee)}async function re(e,{noScroll:s=!1,replaceState:n=!1,keepFocus:r=!1,state:a={},invalidateAll:c=!1},p,v){return typeof e=="string"&&(e=new URL(e,De(document))),ce({url:e,scroll:s?te():null,keepfocus:r,redirect_count:p,details:{state:a,replaceState:n},nav_token:v,accepted:()=>{c&&(J=!0)},blocked:()=>{},type:"goto"})}async function Le(e){return g={id:e.id,promise:pe(e).then(s=>(s.type==="loaded"&&s.state.error&&(g=null),s))},g.promise}async function oe(...e){const n=d.filter(r=>e.some(a=>r.exec(a))).map(r=>Promise.all([...r.layouts,r.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(n)}function Pe(e){var r;u=e.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),F=e.props.page,q=new t.root({target:o,props:{...e.props,stores:H,components:l},hydrate:!0}),Ae(x);const n={from:null,to:{params:u.params,route:{id:((r=u.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};m.after_navigate.forEach(a=>a(n)),$=!0}async function X({url:e,params:s,branch:n,status:r,error:a,route:c,form:p}){let v="never";for(const _ of n)(_==null?void 0:_.slash)!==void 0&&(v=_.slash);e.pathname=Qe(e.pathname,v),e.search=e.search;const b={type:"loaded",state:{url:e,params:s,branch:n,error:a,route:c},props:{constructors:kt(n).map(_=>_.node.component)}};p!==void 0&&(b.props.form=p);let y={},L=!F,A=0;for(let _=0;_<Math.max(n.length,u.branch.length);_+=1){const w=n[_],O=u.branch[_];(w==null?void 0:w.data)!==(O==null?void 0:O.data)&&(L=!0),w&&(y={...y,...w.data},L&&(b.props[`data_${A}`]=y),A+=1)}return(!u.url||e.href!==u.url.href||u.error!==a||p!==void 0&&p!==F.form||L)&&(b.props.page={error:a,params:s,route:{id:(c==null?void 0:c.id)??null},status:r,url:new URL(e),form:p??null,data:L?y:F.data}),b}async function ue({loader:e,parent:s,url:n,params:r,route:a,server_data_node:c}){var y,L,A;let p=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((y=b.universal)!=null&&y.load){let P=function(...w){for(const O of w){const{href:N}=new URL(O,n);v.dependencies.add(N)}};const _={route:new Proxy(a,{get:(w,O)=>(v.route=!0,w[O])}),params:new Proxy(r,{get:(w,O)=>(v.params.add(O),w[O])}),data:(c==null?void 0:c.data)??null,url:at(n,()=>{v.url=!0}),async fetch(w,O){let N;w instanceof Request?(N=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O}):N=w;const M=new URL(N,n);return P(M.href),M.origin===n.origin&&(N=M.href.slice(n.origin.length)),$?lt(N,M.href,O):ct(N,O)},setHeaders:()=>{},depends:P,parent(){return v.parent=!0,s()}};p=await b.universal.load.call(null,_)??null,p=p?await Rt(p):null}return{node:b,loader:e,server:c,universal:(L=b.universal)!=null&&L.load?{type:"data",data:p,uses:v}:null,data:p??(c==null?void 0:c.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Oe(e,s,n,r,a){if(J)return!0;if(!r)return!1;if(r.parent&&e||r.route&&s||r.url&&n)return!0;for(const c of r.params)if(a[c]!==u.params[c])return!0;for(const c of r.dependencies)if(E.some(p=>p(new URL(c))))return!0;return!1}function de(e,s){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?s??null:null}async function pe({id:e,invalidating:s,url:n,params:r,route:a}){if((g==null?void 0:g.id)===e)return g.promise;const{errors:c,layouts:p,leaf:v}=a,b=[...p,v];c.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const L=u.url?e!==u.url.pathname+u.url.search:!1,A=u.route?a.id!==u.route.id:!1;let P=!1;const _=b.map((k,I)=>{var B;const S=u.branch[I],T=!!(k!=null&&k[0])&&((S==null?void 0:S.loader)!==k[1]||Oe(P,A,L,(B=S.server)==null?void 0:B.uses,r));return T&&(P=!0),T});if(_.some(Boolean)){try{y=await He(n,_)}catch(k){return ie({status:k instanceof ne?k.status:500,error:await Q(k,{url:n,params:r,route:{id:a.id}}),url:n,route:a})}if(y.type==="redirect")return y}const w=y==null?void 0:y.nodes;let O=!1;const N=b.map(async(k,I)=>{var he;if(!k)return;const S=u.branch[I],T=w==null?void 0:w[I];if((!T||T.type==="skip")&&k[1]===(S==null?void 0:S.loader)&&!Oe(O,A,L,(he=S.universal)==null?void 0:he.uses,r))return S;if(O=!0,(T==null?void 0:T.type)==="error")throw T;return ue({loader:k[1],url:n,params:r,route:a,parent:async()=>{var $e;const Te={};for(let ge=0;ge<I;ge+=1)Object.assign(Te,($e=await N[ge])==null?void 0:$e.data);return Te},server_data_node:de(T===void 0&&k[0]?{type:"skip"}:T??null,k[0]?S==null?void 0:S.server:void 0)})});for(const k of N)k.catch(()=>{});const M=[];for(let k=0;k<b.length;k+=1)if(b[k])try{M.push(await N[k])}catch(I){if(I instanceof qe)return{type:"redirect",location:I.location};let S=500,T;if(w!=null&&w.includes(I))S=I.status??S,T=I.error;else if(I instanceof ne)S=I.status,T=I.body;else{if(await H.updated.check())return await z(n);T=await Q(I,{params:r,url:n,route:{id:a.id}})}const B=await xe(k,M,c);return B?await X({url:n,params:r,branch:M.slice(0,B.idx).concat(B.node),status:S,error:T,route:a}):await je(n,{id:a.id},T,S)}else M.push(void 0);return await X({url:n,params:r,branch:M,status:200,error:null,route:a,form:s?void 0:null})}async function xe(e,s,n){for(;e--;)if(n[e]){let r=e;for(;!s[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:s,url:n,route:r}){const a={};let c=null;if(t.server_loads[0]===0)try{const y=await He(n,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;c=y.nodes[0]??null}catch{(n.origin!==Me||n.pathname!==location.pathname||j)&&await z(n)}const v=await ue({loader:i,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:de(c)}),b={node:await h(),loader:h,universal:null,server:null,data:null};return await X({url:n,params:a,branch:[v,b],status:e,error:s,route:null})}function Z(e,s){if(ye(e,G))return;const n=se(e);for(const r of d){const a=r.exec(n);if(a)return{id:e.pathname+e.search,invalidating:s,route:r,params:tt(a),url:e}}}function se(e){return et(e.pathname.slice(G.length)||"/")}function Ue({url:e,type:s,intent:n,delta:r}){let a=!1;const c=Be(u,n,e,s);r!==void 0&&(c.navigation.delta=r);const p={...c.navigation,cancel:()=>{a=!0,c.reject(new Error("navigation was cancelled"))}};return U||m.before_navigate.forEach(v=>v(p)),a?null:c}async function ce({url:e,scroll:s,keepfocus:n,redirect_count:r,details:a,type:c,delta:p,nav_token:v={},accepted:b,blocked:y}){var N,M,k;const L=Z(e,!1),A=Ue({url:e,type:c,delta:p,intent:L});if(!A){y();return}const P=x;b(),U=!0,$&&H.navigating.set(A.navigation),W=v;let _=L&&await pe(L);if(!_){if(ye(e,G))return await z(e);_=await je(e,{id:null},await Q(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(L==null?void 0:L.url)||e,W!==v)return A.reject(new Error("navigation was aborted")),!1;if(_.type==="redirect")if(r>=20)_=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(_.location,e).href,{},r+1,v),!1;else((N=_.props.page)==null?void 0:N.status)>=400&&await H.updated.check()&&await z(e);if(E.length=0,J=!1,C=!0,be(P),Re(P),(M=_.props.page)!=null&&M.url&&_.props.page.url.pathname!==e.pathname&&(e.pathname=(k=_.props.page)==null?void 0:k.url.pathname),a){const I=a.replaceState?0:1;if(a.state[V]=x+=I,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let S=x+1;for(;ee[S]||K[S];)delete ee[S],delete K[S],S+=1}}if(g=null,$){u=_.state,_.props.page&&(_.props.page.url=e);const I=(await Promise.all(m.on_navigate.map(S=>S(A.navigation)))).filter(S=>typeof S=="function");if(I.length>0){let S=function(){m.after_navigate=m.after_navigate.filter(T=>!I.includes(T))};I.push(S),m.after_navigate.push(...I)}q.$set(_.props)}else Pe(_);const{activeElement:w}=document;if(await we(),R){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));s?scrollTo(s.x,s.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==w&&document.activeElement!==document.body;!n&&!O&&Ee(),R=!0,_.props.page&&(F=_.props.page),U=!1,c==="popstate"&&Ae(x),A.fulfil(void 0),m.after_navigate.forEach(I=>I(A.navigation)),H.navigating.set(null),C=!1}async function je(e,s,n,r){return e.origin===Me&&e.pathname===location.pathname&&!j?await ie({status:r,error:n,url:e,route:s}):await z(e)}function Xe(){let e;f.addEventListener("mousemove",c=>{const p=c.target;clearTimeout(e),e=setTimeout(()=>{r(p,2)},20)});function s(c){r(c.composedPath()[0],1)}f.addEventListener("mousedown",s),f.addEventListener("touchstart",s,{passive:!0});const n=new IntersectionObserver(c=>{for(const p of c)p.isIntersecting&&(oe(se(new URL(p.target.href))),n.unobserve(p.target))},{threshold:0});function r(c,p){const v=Ce(c,f);if(!v)return;const{url:b,external:y,download:L}=_e(v,G);if(y||L)return;const A=le(v);if(!A.reload)if(p<=A.preload_data){const P=Z(b,!1);P&&Le(P)}else p<=A.preload_code&&oe(se(b))}function a(){n.disconnect();for(const c of f.querySelectorAll("a")){const{url:p,external:v,download:b}=_e(c,G);if(v||b)continue;const y=le(c);y.reload||(y.preload_code===Ve.viewport&&n.observe(c),y.preload_code===Ve.eager&&oe(se(p)))}}m.after_navigate.push(a),a()}function Q(e,s){return e instanceof ne?e.body:t.hooks.handleError({error:e,event:s})??{message:s.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{me(()=>(m.after_navigate.push(e),()=>{const s=m.after_navigate.indexOf(e);m.after_navigate.splice(s,1)}))},before_navigate:e=>{me(()=>(m.before_navigate.push(e),()=>{const s=m.before_navigate.indexOf(e);m.before_navigate.splice(s,1)}))},on_navigate:e=>{me(()=>(m.on_navigate.push(e),()=>{const s=m.on_navigate.indexOf(e);m.on_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(C||!$)&&(R=!1)},goto:(e,s={})=>re(e,s,0),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:s}=new URL(e,location.href);E.push(n=>n.href===s)}return Se()},invalidate_all:()=>(J=!0,Se()),preload_data:async e=>{const s=new URL(e,De(document)),n=Z(s,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);await Le(n)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const s=new URL(location.href),{branch:n,route:r}=u;if(!r)return;const a=await xe(u.branch.length,n,r.errors);if(a){const c=await X({url:s,params:u.params,branch:n.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});u=c.state,q.$set(c.props),we().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},0):(q.$set({form:null,page:{...F,form:e.data,status:e.status}}),await we(),q.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(Ie(),!U){const a=Be(u,void 0,null,"leave"),c={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation was cancelled"))}};m.before_navigate.forEach(p=>p(c))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(s=navigator.connection)!=null&&s.saveData||Xe(),f.addEventListener("click",n=>{var P;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Ce(n.composedPath()[0],f);if(!r)return;const{url:a,external:c,target:p,download:v}=_e(r,G);if(!a)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const b=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||v)return;if(c||b.reload){Ue({url:a,type:"link"})?U=!0:n.preventDefault();return}const[L,A]=a.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(u.url.hash===a.hash){n.preventDefault(),(P=r.ownerDocument.getElementById(A))==null||P.scrollIntoView();return}if(D=!0,be(x),e(a),!b.replace_state)return;D=!1,n.preventDefault()}ce({url:a,scroll:b.noscroll?te():null,keepfocus:b.keep_focus??!1,redirect_count:0,details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),f.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const p=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ye(p,G))return;const v=n.target,{keep_focus:b,noscroll:y,reload:L,replace_state:A}=le(v);if(L)return;n.preventDefault(),n.stopPropagation();const P=new FormData(v),_=a==null?void 0:a.getAttribute("name");_&&P.append(_,(a==null?void 0:a.getAttribute("value"))??""),p.search=new URLSearchParams(P).toString(),ce({url:p,scroll:y?te():null,keepfocus:b??!1,redirect_count:0,details:{state:{},replaceState:A??p.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if(W={},(r=n.state)!=null&&r[V]){if(n.state[V]===x)return;const a=K[n.state[V]],c=new URL(location.href);if(u.url.href.split("#")[0]===location.href.split("#")[0]){e(c),K[x]=te(),x=n.state[V],scrollTo(a.x,a.y);return}const p=n.state[V]-x;await ce({url:c,scroll:a,keepfocus:!1,redirect_count:0,details:null,accepted:()=>{x=n.state[V]},blocked:()=>{history.go(-p)},type:"popstate",delta:p,nav_token:W})}else if(!D){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{D&&(D=!1,history.replaceState({...history.state,[V]:++x},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&H.navigating.set(null)});function e(n){u.url=n,H.page.set({...F,url:n}),H.page.notify()}},_hydrate:async({status:e=200,error:s,node_ids:n,params:r,route:a,data:c,form:p})=>{j=!0;const v=new URL(location.href);({params:r={},route:a={id:null}}=Z(v,!1)||{});let b;try{const y=n.map(async(P,_)=>{const w=c[_];return w!=null&&w.uses&&(w.uses=Ye(w.uses)),ue({loader:t.nodes[P],url:v,params:r,route:a,parent:async()=>{const O={};for(let N=0;N<_;N+=1)Object.assign(O,(await y[N]).data);return O},server_data_node:de(w)})}),L=await Promise.all(y),A=d.find(({id:P})=>P===a.id);if(A){const P=A.layouts;for(let _=0;_<P.length;_++)P[_]||L.splice(_,0,void 0)}b=await X({url:v,params:r,branch:L,status:e,error:s,form:p,route:A??null})}catch(y){if(y instanceof qe){await z(new URL(y.location,location.href));return}b=await ie({status:y instanceof ne?y.status:500,error:await Q(y,{url:v,params:r,route:a}),url:v,route:a})}Pe(b)}}}async function He(t,o){var h;const d=new URL(t);d.pathname=it(t.pathname),t.pathname.endsWith("/")&&d.searchParams.append(It,"1"),d.searchParams.append(At,o.map(f=>f?"1":"0").join(""));const i=await ze(d.href);if((h=i.headers.get("content-type"))!=null&&h.includes("text/html")&&await z(t),!i.ok)throw new ne(i.status,await i.json());return new Promise(async f=>{var j;const E=new Map,l=i.body.getReader(),g=new TextDecoder;function m($){return Et($,{Promise:R=>new Promise((C,U)=>{E.set(R,{fulfil:C,reject:U})})})}let u="";for(;;){const{done:$,value:R}=await l.read();if($&&!u)break;for(u+=!R&&u?`
`:g.decode(R);;){const C=u.indexOf(`
`);if(C===-1)break;const U=JSON.parse(u.slice(0,C));if(u=u.slice(C+1),U.type==="redirect")return f(U);if(U.type==="data")(j=U.nodes)==null||j.forEach(D=>{(D==null?void 0:D.type)==="data"&&(D.uses=Ye(D.uses),D.data=m(D.data))}),f(U);else if(U.type==="chunk"){const{id:D,data:J,error:q}=U,x=E.get(D);E.delete(D),q?x.reject(m(q)):x.fulfil(m(J))}}}})}function Ye(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,d=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),d!==null?o.setAttribute("tabindex",d):o.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const h=[];for(let f=0;f<i.rangeCount;f+=1)h.push(i.getRangeAt(f));setTimeout(()=>{if(i.rangeCount===h.length){for(let f=0;f<i.rangeCount;f+=1){const E=h[f],l=i.getRangeAt(f);if(E.commonAncestorContainer!==l.commonAncestorContainer||E.startContainer!==l.startContainer||E.endContainer!==l.endContainer||E.startOffset!==l.startOffset||E.endOffset!==l.endOffset)return}i.removeAllRanges()}})}}}function Be(t,o,d,i){var g,m;let h,f;const E=new Promise((u,j)=>{h=u,f=j});return E.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((g=t.route)==null?void 0:g.id)??null},url:t.url},to:d&&{params:(o==null?void 0:o.params)??null,route:{id:((m=o==null?void 0:o.route)==null?void 0:m.id)??null},url:d},willUnload:!o,type:i,complete:E},fulfil:h,reject:f}}async function Ut(t,o,d){const i=Lt(t,o);Ze({client:i}),d?await i._hydrate(d):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Ut as start};
