import{j as o,a as i}from"./index-47f15509.js";import{G as s,d as a,e as l}from"./index.esm-dd73cf50.js";import{b as n}from"./index.esm-a69ee28a.js";import{S as c}from"./StoryProfile-1ddf9236.js";import{u as x}from"./Layout-fd28972e.js";const u=t=>o.jsx("div",{children:t.children});function m(t){return s({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{stroke:"#000",strokeWidth:"2",d:"M1 22V9.76a2 2 0 01.851-1.636l9.575-6.72a1 1 0 011.149 0l9.574 6.72A2 2 0 0123 9.76V22a1 1 0 01-1 1h-5.333a1 1 0 01-1-1v-5.674a1 1 0 00-1-1H9.333a1 1 0 00-1 1V22a1 1 0 01-1 1H2a1 1 0 01-1-1z"}}]})(t)}const v=()=>{const{user:t}=i(e=>e.userDataSlice.Details),r=x();return o.jsx(u,{children:o.jsxs("div",{className:"w-[90%] right-0 left-0 fixed bottom-0 flex justify-around",children:[o.jsx(m,{onClick:()=>r("/"),className:"  cursor-pointer"}),o.jsx(a,{onClick:()=>r("/search"),className:" text-2xl cursor-pointer"}),o.jsx(l,{className:" text-2xl cursor-pointer",onClick:()=>r("/reels")}),o.jsx(n,{className:" text-2xl cursor-pointer",onClick:()=>r("/notification")}),o.jsx("div",{onClick:()=>r("/profile"),children:o.jsx(c,{uid:t==null?void 0:t.uid,Profil_Url:t==null?void 0:t.url,Size:"sm",storyview:!1})})]})})};export{v as F};