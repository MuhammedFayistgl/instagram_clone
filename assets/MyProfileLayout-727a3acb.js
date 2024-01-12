import{k as he,l as xe,s as A,m as Fe,a as b,r as d,n as me,_ as se,o as z,j as o,p as ve,q as Le,t as st,v as ke,w as $e,x as Ae,y as re,z as fe,D as nt,e as J,b as at,c as it,U as De,E as ct,f as Oe,B as dt,R as ut,C as He,F as ft,G as bt,H as pt}from"./index-f0af345c.js";import{B as _e,U as ht}from"./UplodeButton-fc751401.js";import{I as xt}from"./ImagelistProfile-720b698f.js";let X;function Ue(){if(X)return X;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),X="reverse",e.scrollLeft>0?X="default":(e.scrollLeft=1,e.scrollLeft===0&&(X="negative")),document.body.removeChild(e),X}function mt(e,t){const r=e.scrollLeft;if(t!=="rtl")return r;switch(Ue()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function vt(e){return xe("MuiTab",e)}const St=he("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),$=St,gt=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],yt=e=>{const{classes:t,textColor:r,fullWidth:i,wrapped:n,icon:u,label:x,selected:h,disabled:f}=e,v={root:["root",u&&x&&"labelIcon",`textColor${Fe(r)}`,i&&"fullWidth",n&&"wrapped",h&&"selected",f&&"disabled"],iconWrapper:["iconWrapper"]};return ve(v,vt,t)},wt=A(_e,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${Fe(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>b({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${$.iconWrapper}`]:b({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${$.selected}`]:{opacity:1},[`&.${$.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${$.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${$.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${$.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${$.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),Ct=d.forwardRef(function(t,r){const i=me({props:t,name:"MuiTab"}),{className:n,disabled:u=!1,disableFocusRipple:x=!1,fullWidth:h,icon:f,iconPosition:v="top",indicator:B,label:j,onChange:y,onClick:S,onFocus:D,selected:I,selectionFollowsFocus:g,textColor:O="inherit",value:w,wrapped:ne=!1}=i,H=se(i,gt),Y=b({},i,{disabled:u,disableFocusRipple:x,selected:I,icon:!!f,iconPosition:v,label:!!j,fullWidth:h,textColor:O,wrapped:ne}),_=yt(Y),W=f&&j&&d.isValidElement(f)?d.cloneElement(f,{className:z(_.iconWrapper,f.props.className)}):f,Q=E=>{!I&&y&&y(E,w),S&&S(E)},U=E=>{g&&!I&&y&&y(E,w),D&&D(E)};return o.jsxs(wt,b({focusRipple:!x,className:z(_.root,n),ref:r,role:"tab","aria-selected":I,disabled:u,onClick:Q,onFocus:U,ownerState:Y,tabIndex:I?0:-1},H,{children:[v==="top"||v==="start"?o.jsxs(d.Fragment,{children:[W,j]}):o.jsxs(d.Fragment,{children:[j,W]}),B]}))}),be=Ct,Bt=Le(o.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),jt=Le(o.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function It(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Tt(e,t,r,i={},n=()=>{}){const{ease:u=It,duration:x=300}=i;let h=null;const f=t[e];let v=!1;const B=()=>{v=!0},j=y=>{if(v){n(new Error("Animation cancelled"));return}h===null&&(h=y);const S=Math.min(1,(y-h)/x);if(t[e]=u(S)*(r-f)+f,S>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(j)};return f===r?(n(new Error("Element already at target position")),B):(requestAnimationFrame(j),B)}const Nt=["onChange"],Et={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Mt(e){const{onChange:t}=e,r=se(e,Nt),i=d.useRef(),n=d.useRef(null),u=()=>{i.current=n.current.offsetHeight-n.current.clientHeight};return st(()=>{const x=$e(()=>{const f=i.current;u(),f!==i.current&&t(i.current)}),h=ke(n.current);return h.addEventListener("resize",x),()=>{x.clear(),h.removeEventListener("resize",x)}},[t]),d.useEffect(()=>{u(),t(i.current)},[t]),o.jsx("div",b({style:Et,ref:n},r))}function Pt(e){return xe("MuiTabScrollButton",e)}const Rt=he("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),zt=Rt,Wt=["className","slots","slotProps","direction","orientation","disabled"],Ft=e=>{const{classes:t,orientation:r,disabled:i}=e;return ve({root:["root",r,i&&"disabled"]},Pt,t)},Lt=A(_e,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})(({ownerState:e})=>b({width:40,flexShrink:0,opacity:.8,[`&.${zt.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),kt=d.forwardRef(function(t,r){var i,n;const u=me({props:t,name:"MuiTabScrollButton"}),{className:x,slots:h={},slotProps:f={},direction:v}=u,B=se(u,Wt),y=Ae().direction==="rtl",S=b({isRtl:y},u),D=Ft(S),I=(i=h.StartScrollButtonIcon)!=null?i:Bt,g=(n=h.EndScrollButtonIcon)!=null?n:jt,O=re({elementType:I,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),w=re({elementType:g,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return o.jsx(Lt,b({component:"div",className:z(D.root,x),ref:r,role:null,ownerState:S,tabIndex:null},B,{children:v==="left"?o.jsx(I,b({},O)):o.jsx(g,b({},w))}))}),$t=kt;function At(e){return xe("MuiTabs",e)}const Dt=he("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),pe=Dt,Ot=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Pe=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Re=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,le=(e,t,r)=>{let i=!1,n=r(e,t);for(;n;){if(n===e.firstChild){if(i)return;i=!0}const u=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||u)n=r(e,n);else{n.focus();return}}},Ht=e=>{const{vertical:t,fixed:r,hideScrollbar:i,scrollableX:n,scrollableY:u,centered:x,scrollButtonsHideMobile:h,classes:f}=e;return ve({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",i&&"hideScrollbar",n&&"scrollableX",u&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",x&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",h&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},At,f)},_t=A("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${pe.scrollButtons}`]:t.scrollButtons},{[`& .${pe.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${pe.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),Ut=A("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})(({ownerState:e})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Xt=A("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})(({ownerState:e})=>b({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),Yt=A("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),Vt=A(Mt)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),ze={},Kt=d.forwardRef(function(t,r){const i=me({props:t,name:"MuiTabs"}),n=Ae(),u=n.direction==="rtl",{"aria-label":x,"aria-labelledby":h,action:f,centered:v=!1,children:B,className:j,component:y="div",allowScrollButtonsMobile:S=!1,indicatorColor:D="primary",onChange:I,orientation:g="horizontal",ScrollButtonComponent:O=$t,scrollButtons:w="auto",selectionFollowsFocus:ne,slots:H={},slotProps:Y={},TabIndicatorProps:_={},TabScrollButtonProps:W={},textColor:Q="primary",value:U,variant:E="standard",visibleScrollbar:ae=!1}=i,Xe=se(i,Ot),T=E==="scrollable",C=g==="vertical",V=C?"scrollTop":"scrollLeft",Z=C?"top":"left",ee=C?"bottom":"right",ie=C?"clientHeight":"clientWidth",K=C?"height":"width",F=b({},i,{component:y,allowScrollButtonsMobile:S,indicatorColor:D,orientation:g,vertical:C,scrollButtons:w,textColor:Q,variant:E,visibleScrollbar:ae,fixed:!T,hideScrollbar:T&&!ae,scrollableX:T&&!C,scrollableY:T&&C,centered:v&&!T,scrollButtonsHideMobile:!S}),P=Ht(F),Ye=re({elementType:H.StartScrollButtonIcon,externalSlotProps:Y.startScrollButtonIcon,ownerState:F}),Ve=re({elementType:H.EndScrollButtonIcon,externalSlotProps:Y.endScrollButtonIcon,ownerState:F}),[Se,Ke]=d.useState(!1),[L,ge]=d.useState(ze),[ye,qe]=d.useState(!1),[we,Ge]=d.useState(!1),[Ce,Je]=d.useState(!1),[Be,Qe]=d.useState({overflow:"hidden",scrollbarWidth:0}),je=new Map,M=d.useRef(null),k=d.useRef(null),Ie=()=>{const l=M.current;let s;if(l){const a=l.getBoundingClientRect();s={clientWidth:l.clientWidth,scrollLeft:l.scrollLeft,scrollTop:l.scrollTop,scrollLeftNormalized:mt(l,n.direction),scrollWidth:l.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let c;if(l&&U!==!1){const a=k.current.children;if(a.length>0){const p=a[je.get(U)];c=p?p.getBoundingClientRect():null}}return{tabsMeta:s,tabMeta:c}},q=fe(()=>{const{tabsMeta:l,tabMeta:s}=Ie();let c=0,a;if(C)a="top",s&&l&&(c=s.top-l.top+l.scrollTop);else if(a=u?"right":"left",s&&l){const m=u?l.scrollLeftNormalized+l.clientWidth-l.scrollWidth:l.scrollLeft;c=(u?-1:1)*(s[a]-l[a]+m)}const p={[a]:c,[K]:s?s[K]:0};if(isNaN(L[a])||isNaN(L[K]))ge(p);else{const m=Math.abs(L[a]-p[a]),N=Math.abs(L[K]-p[K]);(m>=1||N>=1)&&ge(p)}}),ce=(l,{animation:s=!0}={})=>{s?Tt(V,M.current,l,{duration:n.transitions.duration.standard}):M.current[V]=l},Te=l=>{let s=M.current[V];C?s+=l:(s+=l*(u?-1:1),s*=u&&Ue()==="reverse"?-1:1),ce(s)},Ne=()=>{const l=M.current[ie];let s=0;const c=Array.from(k.current.children);for(let a=0;a<c.length;a+=1){const p=c[a];if(s+p[ie]>l){a===0&&(s=l);break}s+=p[ie]}return s},Ze=()=>{Te(-1*Ne())},et=()=>{Te(Ne())},tt=d.useCallback(l=>{Qe({overflow:null,scrollbarWidth:l})},[]),ot=()=>{const l={};l.scrollbarSizeListener=T?o.jsx(Vt,{onChange:tt,className:z(P.scrollableX,P.hideScrollbar)}):null;const c=T&&(w==="auto"&&(ye||we)||w===!0);return l.scrollButtonStart=c?o.jsx(O,b({slots:{StartScrollButtonIcon:H.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Ye},orientation:g,direction:u?"right":"left",onClick:Ze,disabled:!ye},W,{className:z(P.scrollButtons,W.className)})):null,l.scrollButtonEnd=c?o.jsx(O,b({slots:{EndScrollButtonIcon:H.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Ve},orientation:g,direction:u?"left":"right",onClick:et,disabled:!we},W,{className:z(P.scrollButtons,W.className)})):null,l},Ee=fe(l=>{const{tabsMeta:s,tabMeta:c}=Ie();if(!(!c||!s)){if(c[Z]<s[Z]){const a=s[V]+(c[Z]-s[Z]);ce(a,{animation:l})}else if(c[ee]>s[ee]){const a=s[V]+(c[ee]-s[ee]);ce(a,{animation:l})}}}),te=fe(()=>{T&&w!==!1&&Je(!Ce)});d.useEffect(()=>{const l=$e(()=>{M.current&&q()});let s;const c=m=>{m.forEach(N=>{N.removedNodes.forEach(G=>{var R;(R=s)==null||R.unobserve(G)}),N.addedNodes.forEach(G=>{var R;(R=s)==null||R.observe(G)})}),l(),te()},a=ke(M.current);a.addEventListener("resize",l);let p;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(l),Array.from(k.current.children).forEach(m=>{s.observe(m)})),typeof MutationObserver<"u"&&(p=new MutationObserver(c),p.observe(k.current,{childList:!0})),()=>{var m,N;l.clear(),a.removeEventListener("resize",l),(m=p)==null||m.disconnect(),(N=s)==null||N.disconnect()}},[q,te]),d.useEffect(()=>{const l=Array.from(k.current.children),s=l.length;if(typeof IntersectionObserver<"u"&&s>0&&T&&w!==!1){const c=l[0],a=l[s-1],p={root:M.current,threshold:.99},m=ue=>{qe(!ue[0].isIntersecting)},N=new IntersectionObserver(m,p);N.observe(c);const G=ue=>{Ge(!ue[0].isIntersecting)},R=new IntersectionObserver(G,p);return R.observe(a),()=>{N.disconnect(),R.disconnect()}}},[T,w,Ce,B==null?void 0:B.length]),d.useEffect(()=>{Ke(!0)},[]),d.useEffect(()=>{q()}),d.useEffect(()=>{Ee(ze!==L)},[Ee,L]),d.useImperativeHandle(f,()=>({updateIndicator:q,updateScrollButtons:te}),[q,te]);const Me=o.jsx(Yt,b({},_,{className:z(P.indicator,_.className),ownerState:F,style:b({},L,_.style)}));let oe=0;const lt=d.Children.map(B,l=>{if(!d.isValidElement(l))return null;const s=l.props.value===void 0?oe:l.props.value;je.set(s,oe);const c=s===U;return oe+=1,d.cloneElement(l,b({fullWidth:E==="fullWidth",indicator:c&&!Se&&Me,selected:c,selectionFollowsFocus:ne,onChange:I,textColor:Q,value:s},oe===1&&U===!1&&!l.props.tabIndex?{tabIndex:0}:{}))}),rt=l=>{const s=k.current,c=nt(s).activeElement;if(c.getAttribute("role")!=="tab")return;let p=g==="horizontal"?"ArrowLeft":"ArrowUp",m=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&u&&(p="ArrowRight",m="ArrowLeft"),l.key){case p:l.preventDefault(),le(s,c,Re);break;case m:l.preventDefault(),le(s,c,Pe);break;case"Home":l.preventDefault(),le(s,null,Pe);break;case"End":l.preventDefault(),le(s,null,Re);break}},de=ot();return o.jsxs(_t,b({className:z(P.root,j),ownerState:F,ref:r,as:y},Xe,{children:[de.scrollButtonStart,de.scrollbarSizeListener,o.jsxs(Ut,{className:P.scroller,ownerState:F,style:{overflow:Be.overflow,[C?`margin${u?"Left":"Right"}`:"marginBottom"]:ae?void 0:-Be.scrollbarWidth},ref:M,children:[o.jsx(Xt,{"aria-label":x,"aria-labelledby":h,"aria-orientation":g==="vertical"?"vertical":null,className:P.flexContainer,ownerState:F,onKeyDown:rt,ref:k,role:"tablist",children:lt}),Se&&Me]}),de.scrollButtonEnd]}))}),qt=Kt,Gt=()=>{const{user:e}=J(r=>r.userDataSlice.Details),t=at();return o.jsx("div",{children:o.jsxs("div",{className:"flex flex-row justify-between  pt-3",children:[o.jsx("span",{className:"text-lg font-mono ",children:o.jsxs("span",{className:"flex items-center gap-2",children:[o.jsx(it,{className:" text-2xl cursor-pointer",onClick:()=>t("/")}),o.jsx(De,{userNameIs:e==null?void 0:e.USER_NAME})]})}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"mr-3 text-2xl cursor-pointer",children:o.jsx(ht,{})}),o.jsx("span",{className:"text-2xl cursor-pointer",children:o.jsx(ct,{})})]})]})})},Jt=()=>{const{user:e}=J(t=>t.userDataSlice.Details);return o.jsx(o.Fragment,{children:o.jsxs("div",{children:[o.jsx("div",{className:"pb-6 ",children:o.jsx(Oe,{storyview:!0,uid:e==null?void 0:e.uid,Size:"xl"})}),o.jsxs("div",{children:[o.jsx(De,{})," "]}),o.jsx("div",{children:e==null?void 0:e.description})]})})},We=({value:e,width:t})=>o.jsx(dt,{style:{width:t},children:e}),Qt=()=>{const{onFeeds:e}=J(r=>r.userDataSlice.Details),{user:t}=J(r=>r.userDataSlice.Details);return o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-7 ",children:[o.jsxs("span",{className:"text-center",children:[e.length,o.jsx("div",{children:"Post"})]}),o.jsxs("span",{className:"text-center",children:[t==null?void 0:t.Followers,o.jsx("div",{children:"Followers"})]}),o.jsxs("span",{className:"text-center",children:[t==null?void 0:t.Following,o.jsx("div",{children:"Following"})]})]})})},Zt=()=>{const[e,t]=ut.useState(0),r=(i,n)=>{t(n)};return o.jsx(o.Fragment,{children:o.jsx(He,{children:o.jsxs(qt,{variant:"fullWidth",textColor:"inherit",value:e,onChange:r,"aria-label":"icon tabs example",children:[o.jsx(be,{icon:o.jsx(ft,{className:" text-2xl cursor-pointer"}),"aria-label":"phone"}),o.jsx(be,{icon:o.jsx(bt,{className:" text-2xl cursor-pointer"}),"aria-label":"favorite"}),o.jsx(be,{icon:o.jsx(pt,{className:" text-2xl cursor-pointer"}),"aria-label":"person"})]})})})},lo=()=>{const{user:e}=J(t=>t.userDataSlice.Details);return o.jsxs(o.Fragment,{children:[o.jsxs(He,{children:[o.jsx(Gt,{}),o.jsxs("div",{className:"flex justify-between pt-8 items-center",children:[o.jsx(Jt,{}),o.jsx(Qt,{})]}),o.jsxs("div",{className:"flex  gap-3 mt-2 mb-2",children:[o.jsx(We,{width:"48%",value:"Edit Profile"}),o.jsx(We,{width:"48%",value:"Share Profile"})]}),o.jsx(Oe,{storyview:!0,Name:!0,uid:e==null?void 0:e.uid})]}),o.jsxs("div",{className:"mt-3",children:[o.jsx(Zt,{}),o.jsx(xt,{})]})]})};export{lo as default};