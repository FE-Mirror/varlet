import{P as r}from"./index.613e054d.js";import{B as n}from"./index.e6fbf5d6.js";import{S as b}from"./index.d2909f24.js";import{A as _}from"./AppType.6d3af19d.js";import{d as B}from"./index.079ade67.js";import{w as S,a as g}from"./utils.5323a59a.js";import{u as c,a as E,_ as h,b as D,c as U}from"./en-US.6bd391a6.js";import{_ as $}from"./elevation.d7d3ee97.js";import{q as N,a1 as O,o as z,c as L,i as u,Z as e,j as l,a5 as i,F as R,m as p,t as s,a as v}from"./vendor.2c1af365.js";import"./lock.88a63de7.js";import"./index.b5fc70e2.js";import"./zIndex.86cb595f.js";import"./components.9703deeb.js";/* empty css               */import"./index.f800f17a.js";import"./elements.13db9b83.js";import"./index.726d2ffd.js";import"./index.591dca26.js";var V={popupPosition:"\u5F39\u51FA\u4F4D\u7F6E",centerPopup:"\u5C45\u4E2D\u5F39\u51FA",belowPopup:"\u4E0B\u65B9\u5F39\u51FA",abovePopup:"\u4E0A\u65B9\u5F39\u51FA",leftPopup:"\u5DE6\u4FA7\u5F39\u51FA",rightPopup:"\u53F3\u4FA7\u5F39\u51FA",overlayStyle:"\u906E\u7F69\u5C42\u6837\u5F0F",overlayClass:"\u906E\u7F69\u5C42class",overlayStyles:"\u906E\u7F69\u5C42style",event:"\u6CE8\u518C\u4E8B\u4EF6",text:"\u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002"},H={popupPosition:"Popup Position",centerPopup:"Center Popup",belowPopup:"Below Popup",abovePopup:"Above Popup",leftPopup:"Left Popup",rightPopup:"Right Popup",overlayStyle:"Overlay Style",overlayClass:"Overlay Class",overlayStyles:"Overlay Styles",event:"Event",text:"As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains on the carpet."};const{add:x,use:I,pack:a,packs:Fe,merge:Ce}=c(),T=P=>{U(P),I(P)};E("zh-CN",h);E("en-US",D);x("zh-CN",V);x("en-US",H);const j={class:"block"},q={class:"block"},M={class:"block"},Z={class:"block"},G={class:"block"},J={class:"block"},K={class:"block"},Q={class:"block"},W={setup(P){const A=N({center:!1,top:!1,bottom:!1,left:!1,right:!1,overlayClass:!1,overlayStyle:!1,event:!1}),{center:d,top:m,bottom:y,left:f,right:w,overlayClass:F,overlayStyle:C,event:k}=O(A);return S(T),g(B),(X,o)=>(z(),L(R,null,[u(e(_),null,{default:l(()=>[p(s(e(a).popupPosition),1)]),_:1}),u(e(n),{class:"mt-10",type:"primary",block:"",onClick:o[0]||(o[0]=t=>d.value=!0)},{default:l(()=>[p(s(e(a).centerPopup),1)]),_:1}),u(e(n),{class:"mt-10",type:"primary",block:"",onClick:o[1]||(o[1]=t=>y.value=!0)},{default:l(()=>[p(s(e(a).belowPopup),1)]),_:1}),u(e(n),{class:"mt-10",type:"primary",block:"",onClick:o[2]||(o[2]=t=>m.value=!0)},{default:l(()=>[p(s(e(a).abovePopup),1)]),_:1}),u(e(n),{class:"mt-10",type:"primary",block:"",onClick:o[3]||(o[3]=t=>f.value=!0)},{default:l(()=>[p(s(e(a).leftPopup),1)]),_:1}),u(e(n),{class:"mt-10",type:"primary",block:"",onClick:o[4]||(o[4]=t=>w.value=!0)},{default:l(()=>[p(s(e(a).rightPopup),1)]),_:1}),u(e(r),{show:e(d),"onUpdate:show":o[5]||(o[5]=t=>i(d)?d.value=t:null)},{default:l(()=>[v("div",j,s(e(a).text),1)]),_:1},8,["show"]),u(e(r),{position:"bottom",show:e(y),"onUpdate:show":o[6]||(o[6]=t=>i(y)?y.value=t:null)},{default:l(()=>[v("div",q,s(e(a).text),1)]),_:1},8,["show"]),u(e(r),{position:"top",show:e(m),"onUpdate:show":o[7]||(o[7]=t=>i(m)?m.value=t:null)},{default:l(()=>[v("div",M,s(e(a).text),1)]),_:1},8,["show"]),u(e(r),{position:"left",show:e(f),"onUpdate:show":o[8]||(o[8]=t=>i(f)?f.value=t:null)},{default:l(()=>[v("div",Z,s(e(a).text),1)]),_:1},8,["show"]),u(e(r),{position:"right",show:e(w),"onUpdate:show":o[9]||(o[9]=t=>i(w)?w.value=t:null)},{default:l(()=>[v("div",G,s(e(a).text),1)]),_:1},8,["show"]),u(e(_),null,{default:l(()=>[p(s(e(a).overlayStyle),1)]),_:1}),u(e(n),{class:"mt-10",type:"primary",block:"",onClick:o[10]||(o[10]=t=>F.value=!0)},{default:l(()=>[p(s(e(a).overlayClass),1)]),_:1}),u(e(r),{"overlay-class":"custom-overlay",show:e(F),"onUpdate:show":o[11]||(o[11]=t=>i(F)?F.value=t:null)},{default:l(()=>[v("div",J,s(e(a).text),1)]),_:1},8,["show"]),u(e(n),{class:"mt-10",type:"primary",block:"",onClick:o[12]||(o[12]=t=>C.value=!0)},{default:l(()=>[p(s(e(a).overlayStyles),1)]),_:1}),u(e(r),{"overlay-style":{backgroundColor:"rgba(0, 0, 0, 0.3)"},show:e(C),"onUpdate:show":o[13]||(o[13]=t=>i(C)?C.value=t:null)},{default:l(()=>[v("div",K,s(e(a).text),1)]),_:1},8,["overlay-style","show"]),u(e(_),null,{default:l(()=>[p(s(e(a).event),1)]),_:1}),u(e(n),{class:"mt-10",type:"primary",block:"",onClick:o[14]||(o[14]=t=>k.value=!0)},{default:l(()=>[p(s(e(a).event),1)]),_:1}),u(e(r),{show:e(k),"onUpdate:show":o[15]||(o[15]=t=>i(k)?k.value=t:null),onOpen:o[16]||(o[16]=()=>e(b).info("open")),onOpened:o[17]||(o[17]=()=>e(b).success("opened")),onClose:o[18]||(o[18]=()=>e(b).warning("close")),onClosed:o[19]||(o[19]=()=>e(b).error("closed"))},{default:l(()=>[v("div",Q,s(e(a).text),1)]),_:1},8,["show"])],64))}};var ke=$(W,[["__scopeId","data-v-0590170d"]]);export{ke as default};
