import{_ as a}from"./preload-helper.41c905a7.js";import{e as n}from"./index.2defaa64.js";const l=(o,t)=>{const e=o[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((s,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function p({params:o}){try{const t=await l(Object.assign({"../../../lib/posts/atomically-pull-updates-from-upstream-template-repo.md":()=>a(()=>import("./atomically-pull-updates-from-upstream-template-repo.46a36d2e.js"),["./atomically-pull-updates-from-upstream-template-repo.46a36d2e.js","./index.dd84b89c.js"],import.meta.url),"../../../lib/posts/manage-node-versions-with-brew.md":()=>a(()=>import("./manage-node-versions-with-brew.44c62426.js"),["./manage-node-versions-with-brew.44c62426.js","./index.dd84b89c.js","../assets/manage-node-versions-with-brew.2fed2224.css"],import.meta.url),"../../../lib/posts/write-react-components-like-an-essay.md":()=>a(()=>import("./write-react-components-like-an-essay.b4a2530e.js"),["./write-react-components-like-an-essay.b4a2530e.js","./index.dd84b89c.js"],import.meta.url),"../../../lib/posts/yet-another-react-component-template.md":()=>a(()=>import("./yet-another-react-component-template.dfa0c9bf.js"),["./yet-another-react-component-template.dfa0c9bf.js","./index.dd84b89c.js"],import.meta.url)}),`../../../lib/posts/${o.post}.md`);if(!t.metadata)throw new Error(`${o.post} is missing meta, check the frontmatter`);let e={};if(t.metadata.coverImage){const[,,s]=t.metadata.coverImage.split("-"),{alt_description:i,user:r}=await fetch(`https://api.unsplash.com/photos/${s}`,{headers:{Authorization:"Client-ID 5Vuyp9Lt-Hv8zmhAIqJhkfEhwadbg0n0g2wJryJyRkA"}}).then(m=>m.json()).catch(()=>({}));e={coverCaption:r?{...r,author:r.name,authorUrl:r.links.html}:null,imageAlt:i}}return{PostContent:t.default,meta:{...t.metadata,slug:o.post,...e}}}catch(t){throw console.error(t.stack),t.message.toLowerCase().includes("unknown variable")?n(404,t.message):n(500,t.message)}}const _=Object.freeze(Object.defineProperty({__proto__:null,load:p},Symbol.toStringTag,{value:"Module"}));export{_,p as l};
