import{r as o,am as x,j as u}from"./index-47f15509.js";import{g}from"./getAxiosinstance-76dd99fb.js";import{s as b,c as S,f as h,o as C,t as E,u as I,v as j,e as R,h as y,w as q}from"./StoryProfile-1ddf9236.js";import{C as N,c as P}from"./styled-afa05573.js";import{i as M}from"./isMuiElement-740f0dba.js";var f={exports:{}};(function(e){function r(t){return t&&t.__esModule?t:{default:t}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(f);var w=f.exports;function D(e,r=166){let t;function a(...n){const s=()=>{e.apply(this,n)};clearTimeout(t),t=setTimeout(s,r)}return a.clear=()=>{clearTimeout(t)},a}function F(e,r){return()=>null}function O(e,r){return()=>null}function T(e,r,t,a,n){return null}function V({controlled:e,default:r,name:t,state:a="value"}){const{current:n}=o.useRef(e!==void 0),[s,d]=o.useState(r),m=n?e:s,v=o.useCallback(_=>{n||d(_)},[]);return[m,v]}const z={configure:e=>{N.configure(e)}},L=Object.freeze(Object.defineProperty({__proto__:null,capitalize:P,createChainedFunction:b,createSvgIcon:S,debounce:D,deprecatedPropType:F,isMuiElement:M,ownerDocument:h,ownerWindow:C,requirePropFactory:O,setRef:E,unstable_ClassNameGenerator:z,unstable_useEnhancedEffect:I,unstable_useId:j,unsupportedProp:T,useControlled:V,useEventCallback:R,useForkRef:y,useIsFocusVisible:q},Symbol.toStringTag,{value:"Module"}));var i={},c={};const U=x(L);var l;function k(){return l||(l=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=U}(c)),c}var A=w;Object.defineProperty(i,"__esModule",{value:!0});var p=i.default=void 0,$=A(k()),G=u,W=(0,$.default)((0,G.jsx)("path",{d:"m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"}),"Verified");p=i.default=W;const B=()=>u.jsx("div",{children:u.jsx(p,{sx:{color:"#0c7ff9",width:18}})}),Y=({userNameIs:e,VerifiedIcon:r})=>{const[t,a]=o.useState();return o.useEffect(()=>{!e&&!t&&g.get("/get-my-username").then(n=>a(n==null?void 0:n.data))},[]),u.jsxs("span",{className:"flex",children:[e||t,r&&u.jsx(B,{})]})};export{Y as U,D as d,w as i,k as r};