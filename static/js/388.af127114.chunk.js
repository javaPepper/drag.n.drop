"use strict";(self.webpackChunkdrag_n_drop=self.webpackChunkdrag_n_drop||[]).push([[388],{388:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var n=s(791),r=s(405),c=s(184);function d(t){let{userId:e,id:s,title:n,content:r}=t;return(0,c.jsx)("article",{children:(0,c.jsxs)("div",{className:"post-container",id:s.toString(),children:[(0,c.jsx)("span",{className:"visually-hidden",children:e}),(0,c.jsx)("div",{className:"id",children:s}),(0,c.jsx)("div",{className:"post title",children:n}),(0,c.jsx)("div",{className:"post content",children:r})]})})}var i=s(743);function a(t){let{id:e}=t;const s=(0,r.C)((t=>t.posts)),a=(0,r.T)();return(0,n.useEffect)((()=>{fetch("https://jsonplaceholder.typicode.com/posts").then((t=>{if(!t.ok)throw new Error("HTTP error: ".concat(t.status));return t.json()})).then((t=>{a((0,i.T6)(t))})).catch((t=>"Could not fetch data: ".concat(t)))}),[a]),(0,c.jsx)("div",{className:"post-list_container",children:s.length>0&&s.filter((t=>t.userId===e)).map((t=>(0,c.jsx)(d,{userId:t.userId,id:t.id,title:t.title,content:t.body},t.id)))})}}}]);
//# sourceMappingURL=388.af127114.chunk.js.map