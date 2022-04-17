import{I as R}from"./index.591dca26.js";import{c as $,f as L}from"./elements.13db9b83.js";import{c as M,t as S}from"./components.9703deeb.js";import{_ as V}from"./elevation.d7d3ee97.js";import{d as P,r as u,b as p,y as A,x as k,e as F,o as y,c as E,a as O,i as U,p as b,n as Y,G as z,Y as j,l as C,j as N,Z as w,k as G,m as X,t as Z,F as q}from"./vendor.2c1af365.js";import{C as H}from"./index.87108d4b.js";import{d as J}from"./index.079ade67.js";import{a as K}from"./utils.5323a59a.js";const Q={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},onRefresh:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:W,classes:x}=M("pull-refresh"),m=100,v=-50;let D;const ee=P({name:"VarPullRefresh",components:{VarIcon:R},props:Q,setup(e){const o=u(null),c=u(0),t=u(v),n=u("arrow-down"),s=u("default"),l=u(!1),a=p(()=>s.value!=="loading"&&s.value!=="success"&&!e.disabled),f=p(()=>({transform:`translate3d(0px, ${t.value}px, 0px) translate(-50%, 0)`,transition:l.value?`transform ${e.animationDuration}ms`:void 0,background:e.successBgColor||e.bgColor,color:e.successColor||e.color})),i=p(()=>s.value==="success"),h=r=>{!a.value||(s.value="pulling",c.value=r.touches[0].clientY)},I=r=>{const d=L(D);if(d>0||!a.value)return;d===0&&t.value>v&&r.cancelable&&r.preventDefault();const T=(r.touches[0].clientY-c.value)/2+v;t.value=T>=m?m:T,n.value=t.value>=m*.2?"refresh":"arrow-down"},_=()=>{var r,d;!a.value||(l.value=!0,t.value>=m*.2?(s.value="loading",t.value=m*.3,(r=e["onUpdate:modelValue"])==null||r.call(e,!0),(d=e.onRefresh)==null||d.call(e)):(s.value="loosing",n.value="arrow-down",t.value=v,setTimeout(()=>{l.value=!1},S(e.animationDuration))))},B=()=>{setTimeout(()=>{s.value="default",n.value="arrow-down",l.value=!1},S(e.animationDuration))};return A(()=>e.modelValue,r=>{r===!1&&(l.value=!0,s.value="success",n.value="checkbox-marked-circle",setTimeout(()=>{t.value=v,B()},S(e.successDuration)))}),k(()=>{D=$(o.value)}),{n:W,classes:x,refreshStatus:s,freshNode:o,touchStart:h,touchMove:I,touchEnd:_,iconName:n,controlStyle:f,isSuccess:i}}});function oe(e,o,c,t,n,s){const l=F("var-icon");return y(),E("div",{ref:"freshNode",class:b(e.n()),onTouchstart:o[0]||(o[0]=(...a)=>e.touchStart&&e.touchStart(...a)),onTouchmove:o[1]||(o[1]=(...a)=>e.touchMove&&e.touchMove(...a)),onTouchend:o[2]||(o[2]=(...a)=>e.touchEnd&&e.touchEnd(...a)),onTouchcancel:o[3]||(o[3]=(...a)=>e.touchEnd&&e.touchEnd(...a))},[O("div",{class:b(e.classes(e.n("control"),"var-elevation--2",[e.isSuccess,e.n("control-success")])),style:Y(e.controlStyle)},[U(l,{name:e.iconName,transition:200,class:b(e.classes(e.n("icon"),[e.refreshStatus==="loading",e.n("animation")])),"var-pull-refresh-cover":""},null,8,["name","class"])],6),z(e.$slots,"default")],34)}var g=V(ee,[["render",oe]]);g.install=function(e){e.component(g.name,g)};const ae={setup(e){const o=Array(10).fill("List Item"),c=Array(10).fill("This is new List Item"),t=u(!1),n=u(o),s=()=>{setTimeout(()=>{n.value=n.value[0]==="List Item"?c:o,t.value=!1},2e3)},l=a=>{a.preventDefault()};return k(()=>{document.body.addEventListener("touchmove",l,{passive:!1})}),j(()=>{document.body.removeEventListener("touchmove",l)}),K(J),(a,f)=>(y(),C(w(g),{onRefresh:s,modelValue:t.value,"onUpdate:modelValue":f[0]||(f[0]=i=>t.value=i),"success-duration":"2000"},{default:N(()=>[(y(!0),E(q,null,G(n.value,(i,h)=>(y(),C(w(H),{key:h,border:""},{default:N(()=>[X(Z(i+" "+(h+1)),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}};var de=V(ae,[["__scopeId","data-v-3162bf9d"]]);export{de as default};
