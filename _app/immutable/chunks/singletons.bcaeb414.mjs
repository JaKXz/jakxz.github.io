import{M as d,s as E}from"./index.76708b9f.mjs";const u=[];function p(t,e=d){let n;const s=new Set;function o(a){if(E(t,a)&&(t=a,n)){const c=!u.length;for(const l of s)l[1](),u.push(l,t);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function r(a){o(a(t))}function i(a,c=d){const l=[a,c];return s.add(l),s.size===1&&(n=e(o)||d),a(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:o,update:r,subscribe:i}}const S="",k=__sveltekit_19yz4u2.assets,m="1677258243301",y="sveltekit:snapshot",I="sveltekit:scroll",T="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1};function x(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function O(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const h={...b,"":b.hover};function g(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function U(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=g(t)}}function L(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const s=t instanceof SVGAElement?t.target.baseVal:t.target,o=!n||!!s||w(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external")||t.hasAttribute("download");return{url:n,external:o,target:s}}function N(t){let e=null,n=null,s=null,o=null,r=t;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),s===null&&(s=f(r,"preload-data")),e===null&&(e=f(r,"noscroll")),o===null&&(o=f(r,"reload")),r=g(r);return{preload_code:h[n??"off"],preload_data:h[s??"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function _(t){const e=p(t);let n=!0;function s(){n=!0,e.update(i=>i)}function o(i){n=!1,e.set(i)}function r(i){let a;return e.subscribe(c=>{(a===void 0||n&&c!==a)&&i(a=c)})}return{notify:s,set:o,subscribe:r}}function v(){const{set:t,subscribe:e}=p(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const i=(await o.json()).version!==m;return i&&(t(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:e,check:s}}function w(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}let A;function V(t){A=t.client}const P={url:_({}),page:_({}),navigating:p(null),updated:v()};export{T as I,b as P,I as S,y as a,L as b,N as c,O as d,S as e,U as f,x as g,V as h,w as i,A as j,P as s,p as w};
