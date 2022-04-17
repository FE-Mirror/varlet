import{I as h}from"./index.627e52e5.js";import{B as r}from"./index.e6fbf5d6.js";import{A}from"./index.de86ed56.js";import{A as y}from"./AppType.6d3af19d.js";import{S as I}from"./index.d2909f24.js";import{d as N}from"./index.079ade67.js";import{u as $,a as b,_ as j,b as z,c as P}from"./en-US.6bd391a6.js";import{w as V,a as L}from"./utils.5323a59a.js";import{I as T}from"./index.591dca26.js";import{_ as H}from"./elevation.d7d3ee97.js";import{r as i,b as M,o as O,c as Z,a as S,i as a,Z as e,j as n,F as q,m as l,t as u}from"./vendor.2c1af365.js";import"./index.2e6b04a7.js";import"./provide.4f996932.js";import"./components.9703deeb.js";import"./elements.13db9b83.js";import"./index.49afd79f.js";import"./index.613e054d.js";import"./lock.88a63de7.js";import"./index.b5fc70e2.js";import"./zIndex.86cb595f.js";/* empty css               */import"./index.f800f17a.js";import"./index.726d2ffd.js";var G={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002",showExtraSlots:"\u5C55\u793A\u989D\u5916\u63D2\u69FD",operate:"\u64CD\u4F5C"},J={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered.",showExtraSlots:"Show extra slots",operate:"Operate"};const{add:F,use:K,pack:s,packs:ye,merge:Se}=$(),Q=v=>{P(v),K(v)};b("zh-CN",j);b("en-US",z);F("zh-CN",G);F("en-US",J);const R={class:"image-preview-demo"},W={class:"image-preview-demo"},X={setup(v){const p=h.Component,B=A.Component,c=i(!1),w=i(!1),d=i(!1),C=i(!1),f=i(!1),g=i(!1),m=i(["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"]),k=i(["https://varlet.gitee.io/varlet-ui/cat.jpg"]),D=M(()=>[{name:s.value.operate,icon:"wrench"},{name:s.value.operate,icon:"wrench"}]),x=()=>{I({content:s.value.shutdownEvent,duration:1e3})},U=()=>{h(k.value)},_=()=>{h({images:m,onChange:E=>{console.log("index",E)}})};return V(Q),L(N),(E,t)=>(O(),Z(q,null,[S("div",R,[a(e(y),null,{default:n(()=>[l(u(e(s).functionCall),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:U},{default:n(()=>[l(u(e(s).preview),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:_},{default:n(()=>[l(u(e(s).callBack),1)]),_:1})]),S("div",W,[a(e(y),null,{default:n(()=>[l(u(e(s).componentCall),1)]),_:1}),a(e(r),{type:"warning",block:"",onClick:t[0]||(t[0]=o=>c.value=!0)},{default:n(()=>[l(u(e(s).basicUse),1)]),_:1}),a(e(p),{images:k.value,show:c.value,"onUpdate:show":t[1]||(t[1]=o=>c.value=o)},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[2]||(t[2]=o=>w.value=!0)},{default:n(()=>[l(u(e(s).specifyInitialPosition),1)]),_:1}),a(e(p),{images:m.value,show:w.value,"onUpdate:show":t[3]||(t[3]=o=>w.value=o),current:"https://varlet.gitee.io/varlet-ui/cat2.jpg"},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[4]||(t[4]=o=>d.value=!0)},{default:n(()=>[l(u(e(s).displayCloseButton),1)]),_:1}),a(e(p),{images:m.value,show:d.value,"onUpdate:show":t[5]||(t[5]=o=>d.value=o),closeable:!0},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[6]||(t[6]=o=>C.value=!0)},{default:n(()=>[l(u(e(s).listenCloseEvents),1)]),_:1}),a(e(p),{images:m.value,show:C.value,"onUpdate:show":t[7]||(t[7]=o=>C.value=o),onClose:x},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[8]||(t[8]=o=>f.value=!0)},{default:n(()=>[l(u(e(s).showExtraSlots),1)]),_:1}),a(e(p),{images:m.value,show:f.value,"onUpdate:show":t[11]||(t[11]=o=>f.value=o)},{extra:n(()=>[a(e(T),{name:"menu",size:22,color:"#fff",onClick:t[9]||(t[9]=o=>g.value=!0)}),a(e(B),{actions:e(D),show:g.value,"onUpdate:show":t[10]||(t[10]=o=>g.value=o)},null,8,["actions","show"])]),_:1},8,["images","show"])])],64))}};var be=H(X,[["__scopeId","data-v-4898b4ea"]]);export{be as default};
