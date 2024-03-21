import{h as W,i as k,c as l,f as v,a as R,b as $,g as G,s as S,u as y}from"./styled-afa05573.js";import{i as c,r as T,f as M,j as P}from"./index-47f15509.js";const j=W(),L=j,N=["className","component","disableGutters","fixed","maxWidth","classes"],U=k(),_=L("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),w=a=>v({props:a,name:"MuiContainer",defaultTheme:U}),z=(a,e)=>{const o=i=>G(e,i),{classes:u,fixed:p,disableGutters:x,maxWidth:t}=a,s={root:["root",t&&`maxWidth${l(String(t))}`,p&&"fixed",x&&"disableGutters"]};return $(s,o,u)};function E(a={}){const{createStyledComponent:e=_,useThemeProps:o=w,componentName:u="MuiContainer"}=a,p=e(({theme:t,ownerState:s})=>c({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((i,n)=>{const d=n,r=t.breakpoints.values[d];return r!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:s})=>c({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return T.forwardRef(function(s,i){const n=o(s),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:C="lg"}=n,g=M(n,N),m=c({},n,{component:r,disableGutters:b,fixed:f,maxWidth:C}),h=z(m,u);return P.jsx(p,c({as:r,ownerState:m,className:R(h.root,d),ref:i},g))})}const D=E({createStyledComponent:S("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),useThemeProps:a=>y({props:a,name:"MuiContainer"})}),A=D;export{A as C};
