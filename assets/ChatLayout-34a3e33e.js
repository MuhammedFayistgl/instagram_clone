import{R as o,_ as I,u as R,a as C,P as l,r as U,j as s,U as _,B as k,M,b as A,c as V,A as H,d as O,e as B,S as L,f as $,I as T,g as z,h as F,i as G,C as K}from"./index-9448b8f8.js";var S=o.forwardRef(function(e,n){var a=e.as,r=a===void 0?"div":a,i=e.content,j=e.color,f=e.className,h=e.classPrefix,v=h===void 0?"badge":h,c=e.children,u=e.maxCount,d=u===void 0?99:u,x=I(e,["as","content","color","className","classPrefix","children","maxCount"]),m=R(v),g=m.withClassPrefix,N=m.prefix,y=m.merge,D=i==null,b=y(f,g(j,{independent:!c,wrapper:c,dot:D}));if(i===!1)return o.cloneElement(c,{ref:n});var P=typeof i=="number"&&i>d?d+"+":i;return c?o.createElement(r,C({},x,{ref:n,className:b}),c,o.createElement("div",{className:N("content")},P)):o.createElement(r,C({},x,{ref:n,className:b}),P)});S.displayName="Badge";S.propTypes={className:l.string,classPrefix:l.string,children:l.node,as:l.elementType,content:l.oneOfType([l.node,l.bool]),maxCount:l.number,color:l.oneOf(["red","orange","yellow","green","cyan","blue","violet"])};const W=S;var q=o.createContext({}),w=o.forwardRef(function(e,n){var a=e.as,r=a===void 0?"section":a,i=e.classPrefix,j=i===void 0?"container":i,f=e.className,h=e.children,v=I(e,["as","classPrefix","className","children"]),c=U.useState(!1),u=c[0],d=c[1],x=R(j),m=x.withClassPrefix,g=x.merge,N=g(f,m({"has-sidebar":u})),y=U.useMemo(function(){return{setHasSidebar:d}},[d]);return o.createElement(q.Provider,{value:y},o.createElement(r,C({},v,{ref:n,className:N}),h))});w.displayName="Container";w.propTypes={className:l.string,children:l.node,classPrefix:l.string};const J=w,Q=({Textonly:e})=>s.jsx(s.Fragment,{children:e?s.jsx("span",{className:"font-bold text-2xl",children:s.jsx(_,{})}):s.jsx(k,{style:{padding:5},endIcon:s.jsx(M,{}),children:s.jsx("span",{className:"font-bold text-2xl",children:s.jsx(_,{})})})}),X=()=>{const e=A();return s.jsxs("div",{className:"flex flex-row justify-between  pt-3",children:[s.jsx("span",{className:"text-lg font-mono ",children:s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx(V,{className:" text-2xl cursor-pointer",onClick:()=>e(-1)}),s.jsx(Q,{})]})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"mr-3 text-2xl cursor-pointer",children:s.jsx(H,{})}),s.jsxs("span",{className:"text-2xl cursor-pointer",children:[" ",s.jsx(O,{})]})]})]})},Y=()=>{const{user:e}=B(a=>a.userDataSlice.Details),n={dots:!1,infinite:!1,speed:500,slidesToScroll:1,initialSlide:0,arrows:!1,responsive:[{breakpoint:1024,settings:{dots:!1,infinite:!1,speed:500,slidesToShow:10,slidesToScroll:1,initialSlide:0}},{breakpoint:600,settings:{slidesToShow:8,slidesToScroll:1,initialSlide:1,dots:!1,rows:1}},{breakpoint:480,settings:{slidesToShow:6,slidesToScroll:1,dots:!1}},{breakpoint:300,settings:{slidesToShow:4,slidesToScroll:1,dots:!1}}]};return s.jsx("div",{className:"py-4",children:s.jsx(L,{...n,children:s.jsxs("div",{children:[s.jsx($,{uid:e==null?void 0:e.uid,storyview:!0,Profil_Url:e==null?void 0:e.url}),s.jsxs("span",{className:"",children:[e==null?void 0:e.USER_NAME.slice(0,7),"..."]})]})})})},Z=()=>s.jsxs("div",{children:[s.jsxs(T,{inside:!0,children:[s.jsx(z,{}),s.jsx(T.Button,{children:s.jsx(F,{})})]}),s.jsx(Y,{})]}),ee=()=>s.jsxs("div",{children:[s.jsx(X,{})," ",s.jsx(Z,{})]});let p;const se=new Uint8Array(16);function ae(){if(!p&&(p=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!p))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(se)}const t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function ne(e,n=0){return t[e[n+0]]+t[e[n+1]]+t[e[n+2]]+t[e[n+3]]+"-"+t[e[n+4]]+t[e[n+5]]+"-"+t[e[n+6]]+t[e[n+7]]+"-"+t[e[n+8]]+t[e[n+9]]+"-"+t[e[n+10]]+t[e[n+11]]+t[e[n+12]]+t[e[n+13]]+t[e[n+14]]+t[e[n+15]]}const te=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),E={randomUUID:te};function ie(e,n,a){if(E.randomUUID&&!n&&!e)return E.randomUUID();e=e||{};const r=e.random||(e.rng||ae)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,n){a=a||0;for(let i=0;i<16;++i)n[a+i]=r[i];return n}return ne(r)}const le=()=>{const{value:e}=B(a=>a.ChatSlice),n=A();return s.jsx("div",{className:"flex justify-center ",children:s.jsx(J,{children:e.filter(({user:a})=>(a==null?void 0:a.uid)==window.localStorage.getItem(a==null?void 0:a.uid)).map(({user:a})=>s.jsxs("div",{className:"flex justify-around pb-5",children:[s.jsxs("span",{className:"flex",children:[s.jsx("span",{className:"pr-3",children:s.jsx($,{Profil_Url:a==null?void 0:a.url,uid:a==null?void 0:a.uid,storyview:!0,Size:"md",alt:"profileImg"})}),s.jsxs("span",{onClick:()=>n(`${ie()}`,{state:a}),children:[s.jsx("div",{children:a.USER_NAME}),s.jsxs("div",{children:[s.jsx("span",{children:"4+ new message "})," ",s.jsx("span",{className:"",children:"16 h"})]})]})]}),s.jsx(W,{}),s.jsx("span",{className:"text-2xl",children:s.jsx(G,{})})]},a==null?void 0:a.uid))})})},oe=()=>s.jsxs(K,{children:[s.jsx(ee,{}),s.jsx(le,{})]});export{oe as default};
