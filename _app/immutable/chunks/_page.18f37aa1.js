import{e as _}from"./index.2defaa64.js";import{_ as s}from"./preload-helper.41c905a7.js";import{p as c}from"./config.1a866872.js";async function d({offset:e=0,limit:a=c,category:p="",sort:o="date"}={}){const m=await Promise.all(Object.entries(Object.assign({"../../posts/atomically-pull-updates-from-upstream-template-repo.md":()=>s(()=>import("./atomically-pull-updates-from-upstream-template-repo.ad3c101d.js"),["./atomically-pull-updates-from-upstream-template-repo.ad3c101d.js","./index.8be6cb34.js"],import.meta.url),"../../posts/manage-node-versions-with-brew.md":()=>s(()=>import("./manage-node-versions-with-brew.17b655fa.js"),["./manage-node-versions-with-brew.17b655fa.js","./index.8be6cb34.js","../assets/manage-node-versions-with-brew.674e82b1.css"],import.meta.url),"../../posts/tdd-does-not-have-to-be-dogmatic.md":()=>s(()=>import("./tdd-does-not-have-to-be-dogmatic.3798625e.js"),["./tdd-does-not-have-to-be-dogmatic.3798625e.js","./index.8be6cb34.js"],import.meta.url),"../../posts/write-react-components-like-an-essay.md":()=>s(()=>import("./write-react-components-like-an-essay.70d7261a.js"),["./write-react-components-like-an-essay.70d7261a.js","./index.8be6cb34.js"],import.meta.url),"../../posts/yet-another-react-component-template.md":()=>s(()=>import("./yet-another-react-component-template.2a22cd84.js"),["./yet-another-react-component-template.2a22cd84.js","./index.8be6cb34.js"],import.meta.url)})).map(async([r,i])=>{const{metadata:n}=await i(),l=r.split("/").pop().slice(0,-3);return{...n,slug:l}}));let t=o instanceof Function?m.sort(o):m.sort((r,i)=>i[o]!=null&&i[o].localeCompare(r[o]));return p&&(t=t.filter(r=>r.categories.includes(p))),e&&(t=t.slice(e)),a&&a<t.length&&a!==-1&&(t=t.slice(0,a)),{posts:t}}async function u(){try{const{posts:e}=await d({limit:4,sort:"updated"});return{posts:e}}catch(e){throw console.error(e.stack),_(500,e.message)}}const E=Object.freeze(Object.defineProperty({__proto__:null,load:u},Symbol.toStringTag,{value:"Module"}));export{E as _,u as l};
