import{c as T,a as s,e as q,t as d,s as k}from"./disclose-version.D_6FvSZB.js";import{p as E,l as K,k as N,f as z,a as F,i as e,t as g,j as t,r as a,s as L,o as O,m as Q,_ as R}from"./runtime.BDXICSVk.js";import{i as M}from"./if.C_BHz1cq.js";import{k as U}from"./key.BE_h3KOC.js";import{e as H,i as V}from"./each.J2vYsMXB.js";import{s as S}from"./attributes.BAKXcXZ1.js";import{p as y}from"./props.D8Rz4j-E.js";import{p as B}from"./config.BGhx3d_X.js";import{i as W}from"./lifecycle.C_1WCF-J.js";var X=d('<li><a><span class="sr-only"><!></span> </a></li>'),Y=d('<nav aria-label="Pagination navigation" class="pagination"><ul></ul></nav>');function ca(A,i){E(i,!1);let h=y(i,"currentPage",8),n=y(i,"totalPosts",8),m=y(i,"path",8,"/learning/page"),r=O();const v=_=>_==h();K(()=>(R(n()),B),()=>{Q(r,Math.ceil(n()/B))}),N();var p=T(),f=z(p);U(f,h,_=>{var o=T(),x=z(o);M(x,()=>t(r)>1,C=>{var u=Y(),P=e(u);H(P,5,()=>Array.from({length:t(r)},(c,l)=>l+1),V,(c,l)=>{var D=X(),b=e(D);g(()=>S(b,"aria-current",v(t(l))));var j=e(b),I=e(j);M(I,()=>v(t(l)),w=>{var G=q("Current page:");s(w,G)},w=>{var G=q("Go to page");s(w,G)}),a(j);var J=L(j);a(b),a(D),g(()=>{S(b,"href",`${m()??""}/${t(l)??""}`),k(J,` ${t(l)??""}`)}),s(c,D)}),a(P),a(u),s(C,u)}),s(_,o)}),s(A,p),F()}var Z=d("<p> </p>"),$=d('<li class="mb-24"><article><div class="subdued"> </div> <a class="block"><h3 class="mt-1"> </h3></a> <!></article></li>'),aa=d('<ul class="mt-0 list-none p-0"></ul>');function ma(A,i){E(i,!1);let h=y(i,"posts",24,()=>[]);W();var n=aa();H(n,5,h,m=>m.slug,(m,r)=>{var v=$(),p=e(v),f=e(p),_=e(f);g(()=>k(_,`📝
					${new Date(`${t(r).date}T00:00:00`).toDateString()??""}`)),a(f);var o=L(f,2),x=e(o),C=e(x,!0);a(x),a(o);var u=L(o,2);M(u,()=>t(r).excerpt!=null,P=>{var c=Z(),l=e(c,!0);a(c),g(()=>k(l,t(r).excerpt)),s(P,c)}),a(p),a(v),g(()=>{S(o,"href",`/learning/${t(r).slug??""}`),k(C,t(r).title)}),s(m,v)}),a(n),s(A,n),F()}export{ma as P,ca as a};
