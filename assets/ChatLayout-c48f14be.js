import{R as o,_ as A,u as D,a as y,P as r,r as S,j as s,U as _,B as k,M,b as I,c as V,A as H,d as O,e as R,S as L,f as B,I as T,g as z,h as F,i as G,k as K,s as W,l as q,C as J}from"./index-7d1cc491.js";var w=o.forwardRef(function(e,t){var i=e.as,a=i===void 0?"div":i,l=e.content,j=e.color,f=e.className,h=e.classPrefix,g=h===void 0?"badge":h,c=e.children,u=e.maxCount,d=u===void 0?99:u,x=A(e,["as","content","color","className","classPrefix","children","maxCount"]),m=D(g),v=m.withClassPrefix,N=m.prefix,C=m.merge,$=l==null,P=C(f,v(j,{independent:!c,wrapper:c,dot:$}));if(l===!1)return o.cloneElement(c,{ref:t});var U=typeof l=="number"&&l>d?d+"+":l;return c?o.createElement(a,y({},x,{ref:t,className:P}),c,o.createElement("div",{className:N("content")},U)):o.createElement(a,y({},x,{ref:t,className:P}),U)});w.displayName="Badge";w.propTypes={className:r.string,classPrefix:r.string,children:r.node,as:r.elementType,content:r.oneOfType([r.node,r.bool]),maxCount:r.number,color:r.oneOf(["red","orange","yellow","green","cyan","blue","violet"])};const Q=w;var X=o.createContext({}),b=o.forwardRef(function(e,t){var i=e.as,a=i===void 0?"section":i,l=e.classPrefix,j=l===void 0?"container":l,f=e.className,h=e.children,g=A(e,["as","classPrefix","className","children"]),c=S.useState(!1),u=c[0],d=c[1],x=D(j),m=x.withClassPrefix,v=x.merge,N=v(f,m({"has-sidebar":u})),C=S.useMemo(function(){return{setHasSidebar:d}},[d]);return o.createElement(X.Provider,{value:C},o.createElement(a,y({},g,{ref:t,className:N}),h))});b.displayName="Container";b.propTypes={className:r.string,children:r.node,classPrefix:r.string};const Y=b,Z=({Textonly:e})=>s.jsx(s.Fragment,{children:e?s.jsx("span",{className:"font-bold text-2xl",children:s.jsx(_,{})}):s.jsx(k,{style:{padding:5},endIcon:s.jsx(M,{}),children:s.jsx("span",{className:"font-bold text-2xl",children:s.jsx(_,{})})})}),ee=()=>{const e=I();return s.jsxs("div",{className:"flex flex-row justify-between  pt-3",children:[s.jsx("span",{className:"text-lg font-mono ",children:s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx(V,{className:" text-2xl cursor-pointer",onClick:()=>e(-1)}),s.jsx(Z,{})]})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"mr-3 text-2xl cursor-pointer",children:s.jsx(H,{})}),s.jsxs("span",{className:"text-2xl cursor-pointer",children:[" ",s.jsx(O,{})]})]})]})},se=()=>{const{user:e}=R(i=>i.userDataSlice.Details),t={dots:!1,infinite:!1,speed:500,slidesToScroll:1,initialSlide:0,arrows:!1,responsive:[{breakpoint:1024,settings:{dots:!1,infinite:!1,speed:500,slidesToShow:10,slidesToScroll:1,initialSlide:0}},{breakpoint:600,settings:{slidesToShow:8,slidesToScroll:1,initialSlide:1,dots:!1,rows:1}},{breakpoint:480,settings:{slidesToShow:6,slidesToScroll:1,dots:!1}},{breakpoint:300,settings:{slidesToShow:4,slidesToScroll:1,dots:!1}}]};return s.jsx("div",{className:"py-4",children:s.jsx(L,{...t,children:s.jsxs("div",{children:[s.jsx(B,{uid:e==null?void 0:e.uid,storyview:!0,Profil_Url:e==null?void 0:e.url}),s.jsxs("span",{className:"",children:[e==null?void 0:e.USER_NAME.slice(0,7),"..."]})]})})})},ae=()=>s.jsxs("div",{children:[s.jsxs(T,{inside:!0,children:[s.jsx(z,{}),s.jsx(T.Button,{children:s.jsx(F,{})})]}),s.jsx(se,{})]}),te=()=>s.jsxs("div",{children:[s.jsx(ee,{})," ",s.jsx(ae,{})]});let p;const ne=new Uint8Array(16);function ie(){if(!p&&(p=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!p))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(ne)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function le(e,t=0){return n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]}const re=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),E={randomUUID:re};function oe(e,t,i){if(E.randomUUID&&!t&&!e)return E.randomUUID();e=e||{};const a=e.random||(e.rng||ie)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){i=i||0;for(let l=0;l<16;++l)t[i+l]=a[l];return t}return le(a)}const ce=()=>{const{value:e}=R(a=>a.ChatSlice),t=I(),i=G();return S.useEffect(()=>{K.post("/get-users-chat").then(a=>i(W(a.data)))},[i]),s.jsx("div",{className:"flex justify-center ",children:s.jsx(Y,{children:e.filter(({user:a})=>(a==null?void 0:a.uid)==window.localStorage.getItem(a==null?void 0:a.uid)).map(({user:a})=>s.jsxs("div",{className:"flex justify-around pb-5",children:[s.jsxs("span",{className:"flex",children:[s.jsx("span",{className:"pr-3",children:s.jsx(B,{Profil_Url:a==null?void 0:a.url,uid:a==null?void 0:a.uid,storyview:!0,Size:"md",alt:"profileImg"})}),s.jsxs("span",{onClick:()=>t(`${oe()}`,{state:a}),children:[s.jsx("div",{children:a.USER_NAME}),s.jsxs("div",{children:[s.jsx("span",{children:"4+ new message "})," ",s.jsx("span",{className:"",children:"16 h"})]})]})]}),s.jsx(Q,{}),s.jsx("span",{className:"text-2xl",children:s.jsx(q,{})})]},a==null?void 0:a.uid))})})},xe=()=>s.jsxs(J,{children:[s.jsx(te,{}),s.jsx(ce,{})]});export{xe as default};
