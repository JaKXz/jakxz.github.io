import{T as O,av as C,am as E,j as N,aw as V,I as b}from"./DmxJf6DB.js";import{i as B,g as M,j as q,n as z,k as D}from"./DtnTKNGW.js";function G(s,r){if(r){const i=document.body;s.autofocus=!0,O(()=>{document.activeElement===i&&s.focus()})}}function $(s){var r,i,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var c=s.length;for(r=0;r<c;r++)s[r]&&(i=$(s[r]))&&(t&&(t+=" "),t+=i)}else for(i in s)s[i]&&(t&&(t+=" "),t+=i);return t}function K(){for(var s,r,i=0,t="",c=arguments.length;i<c;i++)(s=arguments[i])&&(r=$(s))&&(t&&(t+=" "),t+=r);return t}function P(s){return typeof s=="object"?K(s):s??""}function R(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function S(s,r,i,t){var c=s.__attributes??(s.__attributes={});N&&(c[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||c[r]!==(c[r]=i)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[C]=i),i==null?s.removeAttribute(r):typeof i!="string"&&w(s).includes(r)?s[r]=i:s.setAttribute(r,i))}function J(s,r,i,t,c=!1,_=!1,Y=!1){let d=N&&_;d&&b(!1);var l={},p=s.tagName==="OPTION";for(var y in r)y in i||(i[y]=null);i.class&&(i.class=P(i.class)),i.class=i.class?i.class+" "+t:t;var T=w(s),j=s.__attributes??(s.__attributes={});for(const f in i){let a=i[f];if(p&&f==="value"&&a==null){s.value=s.__value="",l[f]=a;continue}var g=l[f];if(a!==g){l[f]=a;var h=f[0]+f[1];if(h!=="$$"){if(h==="on"){const o={},n="$$"+f;let e=f.slice(2);var v=D(e);if(B(e)&&(e=e.slice(0,-7),o.capture=!0),!v&&g){if(a!=null)continue;s.removeEventListener(e,l[n],o),l[n]=null}if(a!=null)if(v)s[`__${e}`]=a,q([e]);else{let I=function(L){l[f].call(this,L)};l[n]=M(e,s,I,o)}else v&&(s[`__${e}`]=void 0)}else if(f==="style"&&a!=null)s.style.cssText=a+"";else if(f==="autofocus")G(s,!!a);else if(!_&&(f==="__value"||f==="value"&&a!=null))s.value=s.__value=a;else if(f==="selected"&&p)R(s,a);else{var u=f;c||(u=z(u));var A=u==="defaultValue"||u==="defaultChecked";if(a==null&&!_&&!A)if(j[f]=null,u==="value"||u==="checked"){let o=s;if(u==="value"){let n=o.defaultValue;o.removeAttribute(u),o.defaultValue=n,o.value=o.__value=null}else{let n=o.defaultChecked;o.removeAttribute(u),o.defaultChecked=n,o.checked=!1}}else s.removeAttribute(f);else A||T.includes(u)&&(_||typeof a!="string")?s[u]=a:typeof a!="function"&&S(s,u,a)}f==="style"&&"__styles"in s&&(s.__styles={})}}}return d&&b(!0),l}var k=new Map;function w(s){var r=k.get(s.nodeName);if(r)return r;k.set(s.nodeName,r=[]);for(var i,t=s,c=Element.prototype;c!==t;){i=V(t);for(var _ in i)i[_].set&&r.push(_);t=E(t)}return r}export{J as a,P as b,K as c,S as s};
