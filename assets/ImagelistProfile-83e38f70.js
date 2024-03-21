import{r as l,i as n,f as D,j as m,a as W}from"./index-47f15509.js";import{g as q,s as z,u as H,a as F,b as T}from"./styled-afa05573.js";import{g as V}from"./StoryProfile-1ddf9236.js";import{i as A}from"./isMuiElement-740f0dba.js";var t={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U=Symbol.for("react.element"),N=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),w=Symbol.for("react.context"),B=Symbol.for("react.server_context"),C=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),G;G=Symbol.for("react.module.reference");function r(e){if(typeof e=="object"&&e!==null){var s=e.$$typeof;switch(s){case U:switch(e=e.type,e){case S:case b:case x:case E:case M:return e;default:switch(e=e&&e.$$typeof,e){case B:case w:case C:case j:case R:case $:return e;default:return s}}case N:return s}}}t.ContextConsumer=w;t.ContextProvider=$;t.Element=U;t.ForwardRef=C;t.Fragment=S;t.Lazy=j;t.Memo=R;t.Portal=N;t.Profiler=b;t.StrictMode=x;t.Suspense=E;t.SuspenseList=M;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return r(e)===w};t.isContextProvider=function(e){return r(e)===$};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===U};t.isForwardRef=function(e){return r(e)===C};t.isFragment=function(e){return r(e)===S};t.isLazy=function(e){return r(e)===j};t.isMemo=function(e){return r(e)===R};t.isPortal=function(e){return r(e)===N};t.isProfiler=function(e){return r(e)===b};t.isStrictMode=function(e){return r(e)===x};t.isSuspense=function(e){return r(e)===E};t.isSuspenseList=function(e){return r(e)===M};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===S||e===b||e===x||e===E||e===M||e===Y||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===R||e.$$typeof===$||e.$$typeof===w||e.$$typeof===C||e.$$typeof===G||e.getModuleId!==void 0)};t.typeOf=r;function J(e){return q("MuiImageList",e)}V("MuiImageList",["root","masonry","quilted","standard","woven"]);const K=l.createContext({}),O=K,Q=["children","className","cols","component","rowHeight","gap","style","variant"],X=e=>{const{classes:s,variant:o}=e;return T({root:["root",o]},J,s)},Z=z("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[s.root,s[o.variant]]}})(({ownerState:e})=>n({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},e.variant==="masonry"&&{display:"block"})),ee=l.forwardRef(function(s,o){const a=H({props:s,name:"MuiImageList"}),{children:_,className:P,cols:g=2,component:y="ul",rowHeight:u="auto",gap:f=4,style:L,variant:i="standard"}=a,v=D(a,Q),c=l.useMemo(()=>({rowHeight:u,gap:f,variant:i}),[u,f,i]);l.useEffect(()=>{},[]);const I=i==="masonry"?n({columnCount:g,columnGap:f},L):n({gridTemplateColumns:`repeat(${g}, 1fr)`,gap:f},L),h=n({},a,{component:y,gap:f,rowHeight:u,variant:i}),d=X(h);return m.jsx(Z,n({as:y,className:F(d.root,d[i],P),ref:o,style:I,ownerState:h},v,{children:m.jsx(O.Provider,{value:c,children:_})}))}),te=ee;function oe(e){return q("MuiImageListItem",e)}const se=V("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),k=se,re=["children","className","cols","component","rows","style"],ne=e=>{const{classes:s,variant:o}=e;return T({root:["root",o],img:["img"]},oe,s)},ae=z("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[{[`& .${k.img}`]:s.img},s.root,s[o.variant]]}})(({ownerState:e})=>n({display:"block",position:"relative"},e.variant==="standard"&&{display:"flex",flexDirection:"column"},e.variant==="woven"&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${k.img}`]:n({objectFit:"cover",width:"100%",height:"100%",display:"block"},e.variant==="standard"&&{height:"auto",flexGrow:1})})),ie=l.forwardRef(function(s,o){const a=H({props:s,name:"MuiImageListItem"}),{children:_,className:P,cols:g=1,component:y="li",rows:u=1,style:f}=a,L=D(a,re),{rowHeight:i="auto",gap:v,variant:c}=l.useContext(O);let I="auto";c==="woven"?I=void 0:i!=="auto"&&(I=i*u+v*(u-1));const h=n({},a,{cols:g,component:y,gap:v,rowHeight:i,rows:u,variant:c}),d=ne(h);return m.jsx(ae,n({as:y,className:F(d.root,d[c],P),ref:o,style:n({height:I,gridColumnEnd:c!=="masonry"?`span ${g}`:void 0,gridRowEnd:c!=="masonry"?`span ${u}`:void 0,marginBottom:c==="masonry"?v:void 0,breakInside:c==="masonry"?"avoid":void 0},f),ownerState:h},L,{children:l.Children.map(_,p=>l.isValidElement(p)?p.type==="img"||A(p,["Image"])?l.cloneElement(p,{className:F(d.img,p.props.className)}):p:null)}))}),ce=ie,de=()=>{var s;const{feed:e}=W(o=>o.userDataSlice.Details);return m.jsx(m.Fragment,{children:m.jsx(te,{variant:"quilted",sx:{"&::-webkit-scrollbar":{display:"none"}},cols:3,rowHeight:164,children:(s=e==null?void 0:e.feed)==null?void 0:s.map(o=>m.jsx(ce,{children:m.jsx("img",{srcSet:o==null?void 0:o.FEED_URL,src:o==null?void 0:o.FEED_URL,alt:o==null?void 0:o.FEED_URL,loading:"lazy"})},o==null?void 0:o.FEED_URL))})})};export{de as I};
