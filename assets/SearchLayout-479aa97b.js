import{j as s,I as e,g as o,h as i,r as t,X as c,C as x}from"./index-f0af345c.js";import{F as l}from"./Footer-79da29f2.js";import{I as j}from"./ImagelistProfile-720b698f.js";const p=()=>s.jsx("div",{children:s.jsxs(e,{inside:!0,children:[s.jsx(o,{}),s.jsx(e.Button,{children:s.jsx(i,{})})]})}),u=()=>s.jsx("div",{children:s.jsx(p,{})}),f=()=>{const[r,a]=t.useState();return console.log("p",r),t.useEffect(()=>{c.get("/instagram-user-profile-details").then(n=>{a(n.data)})},[]),s.jsxs(s.Fragment,{children:[s.jsx(x,{children:s.jsx("span",{className:"px-2",children:s.jsx(u,{})})}),s.jsx(j,{}),s.jsx(l,{})]})};export{f as default};