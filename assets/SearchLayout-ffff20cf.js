import{j as r,r as t}from"./index-47f15509.js";import{b as a}from"./index.esm-2db67e1b.js";import{a as o,I as n}from"./Input-c713f5e1.js";import{F as m}from"./Footer-76199b01.js";import{I as p}from"./ImagelistProfile-83e38f70.js";import{g as c}from"./getAxiosinstance-76dd99fb.js";import{C as x}from"./Container-26657016.js";import"./index.esm-dd73cf50.js";import"./Button-0c843534.js";import"./assertThisInitialized-081f9914.js";import"./index.esm-a69ee28a.js";import"./StoryProfile-1ddf9236.js";import"./styled-afa05573.js";import"./useDispatch-61b41f5c.js";import"./Layout-fd28972e.js";import"./isMuiElement-740f0dba.js";const l=()=>r.jsx("div",{children:r.jsxs(o,{inside:!0,children:[r.jsx(n,{}),r.jsx(o.Button,{children:r.jsx(a,{})})]})}),j=()=>r.jsx("div",{children:r.jsx(l,{})}),y=()=>{const[s,e]=t.useState();return console.log("p",s),t.useEffect(()=>{c.get("/instagram-user-profile-details").then(i=>{e(i.data)})},[]),r.jsxs(r.Fragment,{children:[r.jsx(x,{children:r.jsx("span",{className:"px-2",children:r.jsx(j,{})})}),r.jsx(p,{}),r.jsx(m,{})]})};export{y as default};