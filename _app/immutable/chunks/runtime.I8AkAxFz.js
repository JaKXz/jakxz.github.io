var Nn=Array.isArray,$t=Array.prototype.indexOf,Cn=Array.from,bn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Pn=Object.prototype,Fn=Array.prototype,zt=Object.getPrototypeOf;const qn=()=>{};function Ln(t){return t()}function Jt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Et=4,H=8,at=16,m=32,J=64,nt=128,O=256,G=512,d=1024,S=2048,j=4096,b=8192,P=16384,Wt=32768,wt=65536,Mn=1<<17,Xt=1<<19,yt=1<<20,vt=Symbol("$state"),Yn=Symbol("legacy props"),Hn=Symbol("");function Tt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function jn(t,n){return t!==n}function mt(t){return!Qt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function en(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Bn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Un(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Vn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Kn(){W=!0}const $n=1,Zn=2,zn=4,Jn=8,Wn=16,Xn=1,Qn=2,tr=4,nr=8,rr=16,er=1,lr=2,an="[",un="[!",on="]",At={},sr=Symbol(),ar="http://www.w3.org/2000/svg";function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function ur(t){return fn(ut(t))}function or(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function fn(t){return o!==null&&o.f&w&&(T===null?gn([t]):T.push(t)),t}function ir(t,n){return o!==null&&ft()&&o.f&(w|at)&&(T===null||!T.includes(t))&&sn(),_n(t,n)}function _n(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=jt(),gt(t,S),ft()&&u!==null&&u.f&d&&!(u.f&m)&&(h!==null&&h.includes(t)?(A(u,S),tt(u)):g===null?Sn([t]):g.push(t))),n}function gt(t,n){var r=t.reactions;if(r!==null)for(var e=ft(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&S||!e&&a===u||(A(a,n),i&(d|O)&&(i&w?gt(a,j):tt(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function fr(t){console.warn("https://svelte.dev/e/legacy_recursive_reactive_block")}let I=!1;function _r(t){I=t}let y;function q(t){if(t===null)throw St(),At;return y=t}function cr(){return q(k(y))}function vr(t){if(I){if(k(y)!==null)throw St(),At;y=t}}function pr(t=1){if(I){for(var n=t,r=y;n--;)r=k(r);y=r}}function hr(){for(var t=0,n=y;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===an||r===un)&&(t+=1)}var e=k(n);n.remove(),n=e}}var pt,cn,Dt,Rt;function dr(){if(pt===void 0){pt=window,cn=document;var t=Element.prototype,n=Node.prototype;Dt=ct(n,"firstChild").get,Rt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function k(t){return Rt.call(t)}function Er(t,n){if(!I)return et(t);var r=et(y);if(r===null)r=y.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),q(e),e}return q(r),r}function wr(t,n){if(!I){var r=et(t);return r instanceof Comment&&r.data===""?k(r):r}return y}function yr(t,n=1,r=!1){let e=I?y:t;for(var l;n--;)l=e,e=k(e);if(!I)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=rt();return e===null?l==null||l.after(a):e.before(a),q(a),a}return q(e),e}function Tr(t){t.textContent=""}function vn(t){var n=w|S;u===null?n|=O:u.f|=yt;var r=o!==null&&o.f&w?o:null;const e={children:null,ctx:f,deps:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function mr(t){const n=vn(t);return n.equals=mt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?ot(e):x(e)}}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function xt(t){var n,r=u;Z(pn(t));try{It(t),n=Bt(t)}finally{Z(r)}return n}function Ot(t){var n=xt(t),r=(R||t.f&O)&&t.deps!==null?j:d;A(t,r),t.equals(n)||(t.v=n,t.wv=jt())}function ot(t){It(t),Y(t,0),A(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function kt(t){u===null&&o===null&&rn(),o!==null&&o.f&O&&nn(),it&&tn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=(t&J)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=N;try{ht(!0),Q(a),a.f|=Wt}catch(c){throw x(a),c}finally{ht(i)}}else n!==null&&tt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!_&&!l&&e&&(s!==null&&hn(a,s),o!==null&&o.f&w)){var p=o;(p.children??(p.children=[])).push(a)}return a}function Ar(t){const n=F(H,null,!1);return A(n,d),n.teardown=t,n}function gr(t){kt();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Nt(t);return e}}function Sr(t){return kt(),dn(t)}function Dr(t){const n=F(J,t,!0);return(r={})=>new Promise(e=>{r.outro?yn(n,()=>{x(n),e(void 0)}):(x(n),e(void 0))})}function Nt(t){return F(Et,t,!1)}function dn(t){return F(H,t,!0)}function Rr(t){return En(t)}function En(t,n=0){return F(H|at|n,t,!0)}function Ir(t,n=!0){return F(H|m,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=it,e=o;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;x(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||x(n),n=r}}function x(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:k(e);e.remove(),e=s}r=!0}Pt(t,n&&!r),bt(t),Y(t,0),A(t,P);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ct(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yn(t,n){var r=[];qt(t,r,!0),Tn(r,()=>{x(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&wt)!==0||(e.f&m)!==0;qt(e,n,s?r:!1),e=l}}}function xr(t){Lt(t,!0)}function Lt(t,n){if(t.f&b){B(t)&&Q(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&wt)!==0||(r.f&m)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let K=!1,lt=[];function Mt(){K=!1;const t=lt.slice();lt=[],Jt(t)}function Or(t){K||(K=!0,queueMicrotask(Mt)),lt.push(t)}function mn(){K&&Mt()}const Yt=0,An=1;let U=!1,V=Yt,L=!1,M=null,N=!1,it=!1;function ht(t){N=t}function dt(t){it=t}let D=[],C=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let T=null;function gn(t){T=t}let h=null,E=0,g=null;function Sn(t){g=t}let Ht=1,z=0,R=!1,f=null;function jt(){return++Ht}function ft(){return!W||f!==null&&f.l===null}function B(t){var p;var n=t.f;if(n&S)return!0;if(n&j){var r=t.deps,e=(n&O)!==0;if(r!==null){var l,s,a=(n&G)!==0,i=e&&u!==null&&!R,_=r.length;if(a||i){for(l=0;l<_;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=G)}for(l=0;l<_;l++)if(s=r[l],B(s)&&Ot(s),s.wv>t.wv)return!0}(!e||u!==null&&!R)&&A(t,d)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw U=!1,t}function Rn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&nt)===0)}function X(t,n,r,e){if(U){if(r===null&&(U=!1),Rn(n))throw t;return}r!==null&&(U=!0);{Dn(t,n);return}}function Bt(t){var _t;var n=h,r=E,e=g,l=o,s=R,a=T,i=f,_=t.f;h=null,E=0,g=null,o=_&(m|J)?null:t,R=!N&&(_&O)!==0,T=null,f=t.ctx,z++;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(Y(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!R)for(v=E;v<c.length;v++)((_t=c[v]).reactions??(_t.reactions=[])).push(t)}else c!==null&&E<c.length&&(Y(t,E),c.length=E);return l!==null&&z++,p}finally{h=n,E=r,g=e,o=l,R=s,T=a,f=i}}function In(t,n){let r=n.reactions;if(r!==null){var e=$t.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(h===null||!h.includes(n))&&(A(n,j),n.f&(O|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function Q(t){var n=t.f;if(!(n&P)){A(t,d);var r=u,e=f;u=t;try{n&at?wn(t):Pt(t),bt(t),Ct(t);var l=Bt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ht;var s=t.deps,a}catch(i){X(i,t,r,e||t.ctx)}finally{u=r}}}function Ut(){if(C>1e3){C=0;try{en()}catch(t){if(M!==null)X(t,M,null);else throw t}}C++}function Vt(t){var n=t.length;if(n!==0){Ut();var r=N;N=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&d||(l.f^=d);var s=[];Gt(l,s),xn(s)}}finally{N=r}}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|b)))try{B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function On(){if(L=!1,C>1001)return;const t=D;D=[],Vt(t),L||(C=0,M=null)}function tt(t){V===Yt&&(L||(L=!0,queueMicrotask(On))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(J|m)){if(!(r&d))return;n.f^=d}}D.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&m)!==0,a=s&&(l&d)!==0,i=r.next;if(!a&&!(l&b))if(l&H){if(s)r.f^=d;else try{B(r)&&Q(r)}catch(v){X(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&Et&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Gt(_,n)}function Kt(t){var n=V,r=D;try{Ut();const l=[];V=An,D=l,L=!1,Vt(r);var e=t==null?void 0:t();return mn(),(D.length>0||l.length>0)&&Kt(),C=0,M=null,e}finally{V=n,D=r}}async function kr(){await Promise.resolve(),Kt()}function Nr(t){var c;var n=t.f,r=(n&w)!==0;if(r&&n&P){var e=xt(t);return ot(t),e}if(o!==null){T!==null&&T.includes(t)&&ln();var l=o.deps;t.rv<z&&(t.rv=z,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&d&&!(u.f&m)&&g.includes(t)&&(A(u,S),tt(u)))}else if(r&&t.deps===null)for(var s=t,a=s.parent,i=s;a!==null;)if(a.f&w){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(s=t,B(s)&&Ot(s)),t.v}function Cr(t){const n=o;try{return o=null,t()}finally{o=n}}const kn=~(S|j|d);function A(t,n){t.f=t.f&kn|n}function br(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function Pr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Z(s.effect),$(s.reaction),Nt(s.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Fr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{cn as $,Qt as A,hr as B,q as C,S as D,wt as E,_r as F,xr as G,un as H,rt as I,zn as J,Nn as K,Yn as L,j as M,Cn as N,b as O,Or as P,$n as Q,_n as R,Zn as S,qt as T,sr as U,Tr as V,Tn as W,x as X,et as Y,on as Z,o as _,A as a,Jn as a0,ut as a1,Wn as a2,k as a3,gr as a4,f as a5,Cr as a6,Ln as a7,Jt as a8,Fr as a9,Zt as aA,Nt as aB,dn as aC,kr as aD,ur as aE,ar as aF,$ as aG,Xt as aH,an as aI,er as aJ,lr as aK,dr as aL,Bn as aM,Dr as aN,qn as aa,St as ab,At as ac,Kn as ad,W as ae,vt as af,Pn as ag,Fn as ah,Vn as ai,ct as aj,Gn as ak,zt as al,Un as am,Mn as an,tr as ao,mt as ap,m as aq,J as ar,Z as as,Xn as at,Qn as au,nr as av,mr as aw,rr as ax,Ar as ay,Hn as az,u as b,wr as c,bn as d,Pr as e,Kt as f,Nr as g,yr as h,En as i,Ir as j,I as k,fr as l,or as m,cr as n,yn as o,br as p,y as q,Er as r,ir as s,vr as t,Sr as u,Rr as v,pr as w,vn as x,ft as y,jn as z};
