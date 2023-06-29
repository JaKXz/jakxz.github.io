var Y=Object.defineProperty;var Z=(t,e,n)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var R=(t,e,n)=>(Z(t,typeof e!="symbol"?e+"":e,n),n);import{n as x,r as w,j as D,f as b,i as O,k as P,l as tt,m as et,p as nt,q as it,v as M,w as rt,x as st,y as at}from"./scheduler.dd28e2fa.js";const q=typeof window<"u";let z=q?()=>window.performance.now():()=>Date.now(),B=q?t=>requestAnimationFrame(t):x;const g=new Set;function F(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&B(F)}function I(t){let e;return g.size===0&&B(F),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let j=!1;function lt(){j=!0}function ot(){j=!1}function ct(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&a.push(u)}e=a}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let a=0;a<e.length;a++){const l=e[a].claim_order,u=(r>0&&e[n[r]].claim_order<=l?r+1:ct(1,r,_=>e[n[_]].claim_order,l))-1;i[a]=n[u]+1;const f=u+1;n[f]=a,r=Math.max(f,r)}const o=[],s=[];let c=e.length-1;for(let a=n[r]+1;a!=0;a=i[a-1]){for(o.push(e[a-1]);c>=a;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((a,l)=>a.claim_order-l.claim_order);for(let a=0,l=0;a<s.length;a++){for(;l<o.length&&s[a].claim_order>=o[l].claim_order;)l++;const u=l<o.length?o[l]:null;t.insertBefore(s[a],u)}}function ut(t,e){t.appendChild(e)}function G(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t){const e=W("style");return e.textContent="/* empty */",dt(G(t),e),e.sheet}function dt(t,e){return ut(t.head||t,e),e.sheet}function mt(t,e){if(j){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){j&&!n?mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Rt(){return H(" ")}function Tt(){return H("")}function Bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ht(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Lt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t){return t.dataset.svelteH}function pt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function J(t,e,n,i,r=!1){$t(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const a=n(c);return a===void 0?t.splice(s,1):t[s]=a,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const a=n(c);return a===void 0?t.splice(s,1):t[s]=a,r?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function K(t,e,n,i){return J(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Mt(t,e,n){return K(t,e,n,W)}function Ot(t,e,n){return K(t,e,n,ht)}function yt(t,e){return J(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function qt(t){return yt(t," ")}function zt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ft(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function It(t,e,n){t.classList.toggle(e,!!n)}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Gt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Vt(t,e){return new t(e)}const A=new Map;let S=0;function xt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function vt(t,e){const n={stylesheet:_t(e),rules:{}};return A.set(t,n),n}function Q(t,e,n,i,r,o,s,c=0){const a=16.666/i;let l=`{
`;for(let $=0;$<=1;$+=a){const p=e+(n-e)*o($);l+=$*100+`%{${s(p,1-p)}}
`}const u=l+`100% {${s(n,1-n)}}
}`,f=`__svelte_${xt(u)}_${c}`,_=G(t),{stylesheet:d,rules:m}=A.get(_)||vt(_,t);m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${i}ms linear ${r}ms 1 both`,S+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),S-=r,S||wt())}function wt(){B(()=>{S||(A.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),A.clear())})}let v;function U(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function C(t,e,n){t.dispatchEvent(gt(`${e?"intro":"outro"}${n}`))}const E=new Set;let y;function Wt(){y={r:0,c:[],p:y}}function Jt(){y.r||w(y.c),y=y.p}function Nt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Kt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),y.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const X={duration:0};function Qt(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,c,a=0;function l(){s&&T(t,s)}function u(){const{delay:_=0,duration:d=300,easing:m=O,tick:h=x,css:$}=r||X;$&&(s=Q(t,0,1,d,_,m,$,a++)),h(0,1);const p=z()+_,N=p+d;c&&c.abort(),o=!0,b(()=>C(t,!0,"start")),c=I(k=>{if(o){if(k>=N)return h(1,0),C(t,!0,"end"),l(),o=!1;if(k>=p){const L=m((k-p)/d);h(L,1-L)}}return o})}let f=!1;return{start(){f||(f=!0,T(t),D(r)?(r=r(i),U().then(u)):u())},invalidate(){f=!1},end(){o&&(l(),o=!1)}}}function Ut(t,e,n){const i={direction:"out"};let r=e(t,n,i),o=!0,s;const c=y;c.r+=1;let a;function l(){const{delay:u=0,duration:f=300,easing:_=O,tick:d=x,css:m}=r||X;m&&(s=Q(t,1,0,f,u,_,m));const h=z()+u,$=h+f;b(()=>C(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),I(p=>{if(o){if(p>=$)return d(0,1),C(t,!1,"end"),--c.r||w(c.c),!1;if(p>=h){const N=_((p-h)/f);d(1-N,N)}}return o})}return D(r)?U().then(()=>{r=r(i),l()}):l(),{end(u){u&&"inert"in t&&(t.inert=a),u&&r.tick&&r.tick(1,0),o&&(s&&T(t,s),o=!1)}}}function Xt(t){t&&t.c()}function Yt(t,e){t&&t.l(e)}function Et(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),b(()=>{const o=t.$$.on_mount.map(rt).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...o):w(o),t.$$.on_mount=[]}),r.forEach(b)}function bt(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function At(t,e){t.$$.dirty[0]===-1&&(st.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Zt(t,e,n,i,r,o,s,c=[-1]){const a=it;M(t);const l=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:P(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};s&&s(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(f,_,...d)=>{const m=d.length?d[0]:_;return l.ctx&&r(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&At(t,f)),_}):[],l.update(),u=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){lt();const f=pt(e.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&Nt(t.$$.fragment),Et(t,e.target,e.anchor),ot(),tt()}M(a)}class te{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){bt(this,1),this.$destroy=x}$on(e,n){if(!D(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const St="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(St);export{Pt as A,Bt as B,It as C,kt as D,Ht as E,Qt as F,Ut as G,Gt as H,te as S,jt as a,Jt as b,qt as c,Nt as d,Tt as e,V as f,W as g,Mt as h,Zt as i,pt as j,Lt as k,Ft as l,H as m,yt as n,zt as o,Wt as p,Vt as q,Xt as r,Rt as s,Kt as t,Yt as u,Et as v,bt as w,ht as x,Ot as y,mt as z};
