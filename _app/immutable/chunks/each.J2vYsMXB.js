import{y as J,b as K,h as T,w as M,d as P,z as Q,A as B,H as U,v as D,x as b,g as I,I as C,u as V,c as Y,e as X,B as S,C as q,D as W,F as Z,G as $,J as L,K as m,L as j,M as ee,N as ae,O as re,P as ne,Q as le,R as fe,S as se}from"./runtime.BDXICSVk.js";let N=null;function _e(f){N=f}function ce(f,e){return e}function te(f,e,r,i){for(var c=[],v=e.length,u=0;u<v;u++)j(e[u].e,c,!0);var p=v>0&&c.length===0&&r!==null;if(p){var o=r.parentNode;ee(o),o.append(r),i.clear(),x(f,e[0].prev,e[v-1].next)}ae(c,()=>{for(var d=0;d<v;d++){var a=e[d];p||(i.delete(a.k),x(f,a.prev,a.next)),re(a.e,!p)}})}function de(f,e,r,i,c,v=null){var u=f,p={flags:e,items:new Map,first:null};{var o=f;u=T?M(ne(o)):o.appendChild(J())}T&&P();var d=null,a=!1;K(()=>{var _=r(),n=Q(_)?_:_==null?[]:B(_),t=n.length;if(a&&t===0)return;a=t===0;let l=!1;if(T){var A=u.data===U;A!==(t===0)&&(u=D(),M(u),b(!1),l=!0)}if(T){for(var g=null,s,h=0;h<t;h++){if(I.nodeType===8&&I.data===le){u=I,l=!0,b(!1);break}var w=n[h],y=i(w,h);s=z(I,p,g,null,w,y,h,c,e),p.items.set(y,s),g=s}t>0&&M(D())}if(!T){var E=fe;ue(n,p,u,c,e,(E.f&C)!==0,i)}v!==null&&(t===0?d?V(d):d=Y(()=>v(u)):d!==null&&X(d,()=>{d=null})),l&&b(!0),r()}),T&&(u=I)}function ue(f,e,r,i,c,v,u){var p=f.length,o=e.items,d=e.first,a=d,_,n=null,t=[],l=[],A,g,s,h;for(h=0;h<p;h+=1){if(A=f[h],g=u(A,h),s=o.get(g),s===void 0){var w=a?a.e.nodes_start:r;n=z(w,e,n,n===null?e.first:n.next,A,g,h,i,c),o.set(g,n),t=[],l=[],a=n.next;continue}if(ie(s,A,h),s.e.f&C&&V(s.e),s!==a){if(_!==void 0&&_.has(s)){if(t.length<l.length){var y=l[0],E;n=y.prev;var k=t[0],R=t[t.length-1];for(E=0;E<t.length;E+=1)O(t[E],y,r);for(E=0;E<l.length;E+=1)_.delete(l[E]);x(e,k.prev,R.next),x(e,n,k),x(e,R,y),a=y,n=R,h-=1,t=[],l=[]}else _.delete(s),O(s,a,r),x(e,s.prev,s.next),x(e,s,n===null?e.first:n.next),x(e,n,s),n=s;continue}for(t=[],l=[];a!==null&&a.k!==g;)(v||!(a.e.f&C))&&(_??(_=new Set)).add(a),l.push(a),a=a.next;if(a===null)continue;s=a}t.push(s),n=s,a=s.next}if(a!==null||_!==void 0){for(var H=_===void 0?[]:B(_);a!==null;)(v||!(a.e.f&C))&&H.push(a),a=a.next;var F=H.length;if(F>0){var G=p===0?r:null;te(e,H,G,o)}}S.first=e.first&&e.first.e,S.last=n&&n.e}function ie(f,e,r,i){q(f.v,e),f.i=r}function z(f,e,r,i,c,v,u,p,o){var d=N;try{var a=(o&W)!==0,_=(o&Z)===0,n=a?_?$(c):L(c):c,t=o&m?L(u):u,l={i:t,v:n,k:v,a:null,e:null,prev:r,next:i};return N=l,l.e=Y(()=>p(f,n,t),T),l.e.prev=r&&r.e,l.e.next=i&&i.e,r===null?e.first=l:(r.next=l,r.e.next=l.e),i!==null&&(i.prev=l,i.e.prev=l.e),l}finally{N=d}}function O(f,e,r){for(var i=f.next?f.next.e.nodes_start:r,c=e?e.e.nodes_start:r,v=f.e.nodes_start;v!==i;){var u=se(v);c.before(v),v=u}}function x(f,e,r){e===null?f.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{N as c,de as e,ce as i,_e as s};
