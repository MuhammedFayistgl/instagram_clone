import{u as h,r as u,j as a,d as o}from"./index-47f15509.js";import{u as x,L as f}from"./Layout-fd28972e.js";import{s as j,a as _,b as w}from"./sweetalert.min-06566847.js";import{I as r}from"./Input-c713f5e1.js";import{B as b}from"./Button-0c843534.js";import"./assertThisInitialized-081f9914.js";const v=()=>{const m=x(),[c,d]=h(["cookie"]),[l,n]=u.useState({email:"",Password:""});console.log(c);const g=async()=>{const{Password:s,email:e}=l;!e||!s?o.Store.addNotification({type:"warning",title:"Oops !",message:"please fill email or password",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"]}):await j(w,e,s).then(i=>{const t=i.user.uid;d("cookie",t),_({icon:"success",text:"Login Succuss fully"}),m("/")}).catch(i=>{const t=i.code,p=i.message;o.Store.addNotification({type:"danger",title:t,message:p,insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"]})})};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"input-box",children:a.jsx(r,{onChange:s=>n(e=>({...e,email:s})),size:"md",name:"email",placeholder:"email"})}),a.jsx("div",{className:"input-box",children:a.jsx(r,{onChange:s=>n(e=>({...e,Password:s})),size:"md",name:"Password",placeholder:"Password"})}),a.jsx("span",{className:"button-box",children:a.jsx(b,{onClick:g,appearance:"primary",active:!0,block:!0,children:"Log in"})})]})},D=()=>a.jsx(a.Fragment,{children:a.jsxs("div",{className:"content",children:[a.jsxs("div",{className:"login-box",children:[a.jsx("div",{className:"header flex justify-center",children:a.jsx("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",alt:"Instagram"})}),a.jsx("div",{className:"form-wrap",children:a.jsxs("form",{className:"form",children:[a.jsx(v,{}),a.jsx("a",{className:"forgot",href:"",children:"Forgot password?"})]})})]}),a.jsx("div",{className:"login-box",children:a.jsxs("p",{className:"text",children:["Don't have an account?",a.jsx(f,{to:"/authentication/signUp",children:"Sign up"})]})}),a.jsxs("div",{className:"app flx flex-row",children:[a.jsx("p",{children:"Get the app."}),a.jsxs("div",{className:"app-img flex",children:[a.jsx("a",{href:"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8",children:a.jsx("img",{src:"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png"})}),a.jsx("a",{href:"https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge",children:a.jsx("img",{src:"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png"})})]})]})]})});export{D as default};