import{j as t,J as a,e as o,b as r,bE as l,bF as n,bG as c,S as x}from"./index-5ce2f0ac.js";const u=e=>t.jsx("div",{children:e.children});function d(e){return a({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{stroke:"#000",strokeWidth:"2",d:"M1 22V9.76a2 2 0 01.851-1.636l9.575-6.72a1 1 0 011.149 0l9.574 6.72A2 2 0 0123 9.76V22a1 1 0 01-1 1h-5.333a1 1 0 01-1-1v-5.674a1 1 0 00-1-1H9.333a1 1 0 00-1 1V22a1 1 0 01-1 1H2a1 1 0 01-1-1z"}}]})(e)}const h=()=>{const{user:e}=o(i=>i.userDataSlice.Details),s=r();return t.jsx(u,{children:t.jsxs("div",{className:"w-[90%] right-0 left-0 fixed bottom-0 flex justify-around",children:[t.jsx(d,{onClick:()=>s("/"),className:"  cursor-pointer"}),t.jsx(l,{onClick:()=>s("/search"),className:" text-2xl cursor-pointer"}),t.jsx(n,{className:" text-2xl cursor-pointer",onClick:()=>s("/reels")}),t.jsx(c,{className:" text-2xl cursor-pointer",onClick:()=>s("/notification")}),t.jsx("div",{onClick:()=>s("/profile"),children:t.jsx(x,{uid:e==null?void 0:e.uid,Profil_Url:e==null?void 0:e.url,Size:"sm",storyview:!1})})]})})};export{h as F};
