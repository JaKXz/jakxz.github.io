function g(){}const K=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function $(t){t.forEach(Q)}function O(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function Rt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Lt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function zt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function Bt(t,e,n,i,r,l){if(r){const s=U(e,n,i,l);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const W=typeof window<"u";let V=W?()=>window.performance.now():()=>Date.now(),B=W?t=>requestAnimationFrame(t):g;const x=new Set;function X(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&B(X)}function Y(t){let e;return x.size===0&&B(X),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let P=!1;function ht(){P=!0}function mt(){P=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:pt(1,r,_=>e[n[_]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(s[c],f)}}function gt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=et("style");return $t(Z(t),e),e.sheet}function $t(t,e){return gt(t.head||t,e),e.sheet}function bt(t,e){if(P){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){P&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function It(){return H(" ")}function Jt(){return H("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){Et(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Wt(t,e,n){return it(t,e,n,et)}function Vt(t,e,n){return it(t,e,n,wt)}function Nt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Xt(t){return Nt(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function te(t,e,n){t.classList[n?"add":"remove"](e)}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ee(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ne(t,e){return new t(e)}const D=new Map;let T=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:xt(e),rules:{}};return D.set(t,n),n}function rt(t,e,n,i,r,l,s,u=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const A=e+(n-e)*l(m);o+=m*100+`%{${s(A,1-A)}}
`}const f=o+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(f)}_${u}`,_=Z(t),{stylesheet:d,rules:h}=D.get(_)||St(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,T+=1,a}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),T-=r,T||Ct())}function Ct(){B(()=>{T||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),D.clear())})}let E;function v(t){E=t}function st(){if(!E)throw new Error("Function called outside component initialization");return E}function ie(t){st().$$.on_mount.push(t)}function re(t){st().$$.after_update.push(t)}const w=[],I=[],C=[],J=[],ct=Promise.resolve();let z=!1;function ot(){z||(z=!0,ct.then(lt))}function se(){return ot(),ct}function N(t){C.push(t)}const q=new Set;let S=0;function lt(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),jt(e.$$)}for(v(null),w.length=0,S=0;I.length;)I.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];q.has(n)||(q.add(n),n())}C.length=0}while(w.length);for(;J.length;)J.pop()();z=!1,q.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let b;function ut(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function M(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function ce(){y={r:0,c:[],p:y}}function oe(){y.r||$(y.c),y=y.p}function Dt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function le(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function ue(t,e,n){let i=e(t,n),r=!1,l,s,u=0;function c(){l&&L(t,l)}function o(){const{delay:a=0,duration:_=300,easing:d=K,tick:h=g,css:p}=i||at;p&&(l=rt(t,0,1,_,a,d,p,u++)),h(0,1);const m=V()+a,A=m+_;s&&s.abort(),r=!0,N(()=>M(t,!0,"start")),s=Y(R=>{if(r){if(R>=A)return h(1,0),M(t,!0,"end"),c(),r=!1;if(R>=m){const F=d((R-m)/_);h(F,1-F)}}return r})}let f=!1;return{start(){f||(f=!0,L(t),O(i)?(i=i(),ut().then(o)):o())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function ae(t,e,n){let i=e(t,n),r=!0,l;const s=y;s.r+=1;function u(){const{delay:c=0,duration:o=300,easing:f=K,tick:a=g,css:_}=i||at;_&&(l=rt(t,1,0,o,c,f,_));const d=V()+c,h=d+o;N(()=>M(t,!1,"start")),Y(p=>{if(r){if(p>=h)return a(0,1),M(t,!1,"end"),--s.r||$(s.c),!1;if(p>=d){const m=f((p-d)/o);a(1-m,m)}}return r})}return O(i)?ut().then(()=>{i=i(),u()}):u(),{end(c){c&&i.tick&&i.tick(1,0),r&&(l&&L(t,l),r=!1)}}}function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||N(()=>{const s=t.$$.on_mount.map(Q).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),l.forEach(N)}function Mt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,r,l,s,u=[-1]){const c=E;v(t);const o=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&r(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&Ot(t,a)),_}):[],o.update(),f=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){ht();const a=vt(e.target);o.fragment&&o.fragment.l(a),a.forEach(tt)}else o.fragment&&o.fragment.c();e.intro&&Dt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),mt(),lt()}v(c)}class he{$destroy(){Mt(this,1),this.$destroy=g}$on(e,n){if(!O(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{se as A,g as B,Lt as C,te as D,bt as E,Kt as F,Bt as G,Ht as H,zt as I,qt as J,wt as K,Vt as L,Gt as M,Qt as N,K as O,N as P,ue as Q,ae as R,he as S,ee as T,Rt as U,It as a,Ft as b,Xt as c,oe as d,Jt as e,Dt as f,ce as g,tt as h,de as i,re as j,et as k,Wt as l,vt as m,Ut as n,ie as o,Zt as p,H as q,Nt as r,Pt as s,le as t,Yt as u,ne as v,fe as w,_e as x,Tt as y,Mt as z};
