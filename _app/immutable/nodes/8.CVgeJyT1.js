import{c as y,a as D,b as r,t as p,s as L}from"../chunks/DtnTKNGW.js";import{c as l,$ as M,r as O,t as S,h as n,v as j,g as v,x as d,w as q}from"../chunks/DmxJf6DB.js";import{i as z}from"../chunks/Kfd6Y24W.js";import{s as A}from"../chunks/BcUIjG-W.js";import{a as h,P as C}from"../chunks/DblS6Lpe.js";import{a as E,p as i}from"../chunks/BGhx3d_X.js";var F=p('<meta data-key="description" name="description">'),G=p("<h1> </h1> <!> <!> <!>",1),H=p('<h1>Oops!</h1> <p>Sorry, no posts to show here.</p> <a href="/learning">Back to blog</a>',1);function T(_,P){const{page:e,totalPosts:o,posts:m}=P.data;let u=d(()=>e*i-(i-1)||1),b=d(()=>Math.min(e*i,o));var c=y();D(a=>{var t=F();M.title=`Blog - page ${e??""}`,A(t,"content",E),r(a,t)});var x=l(c);{var B=a=>{var t=G(),s=l(t),k=O(s);S(s);var f=n(s,2);h(f,{currentPage:e,totalPosts:o});var g=n(f,2);C(g,{posts:m});var w=n(g,2);h(w,{currentPage:e,totalPosts:o}),j(()=>L(k,`Posts ${v(u)??""}–${v(b)??""} of ${o??""}`)),r(a,t)},$=a=>{var t=H();q(4),r(a,t)};z(x,a=>{m.length?a(B):a($,!1)})}r(_,c)}export{T as component};
