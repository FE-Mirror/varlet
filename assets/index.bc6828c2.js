import{d as L,r as o,b as O,y as c,x as E,C as F,i,I as M,T as N,w as I,v as U,J as $,z as j}from"./vendor.2c1af365.js";import{g,a as A,t as h}from"./elements.13db9b83.js";import{u as V}from"./zIndex.86cb595f.js";import{u as X,e as Y,a,c as _}from"./components.9703deeb.js";/* empty css               */function B(e){return["top","bottom"].includes(e)}const D={show:{type:Boolean,default:!1},alignment:{type:String,default:"top",validator:B},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:String,default:"body"},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},"onUpdate:show":{type:Function}};function H(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!$(e)}const{n:r,classes:J}=_("menu");var d=L({name:"VarMenu",props:D,setup(e,{slots:f}){const l=o(null),m=o(null),s=o(),v=o(0),p=o(0),{zIndex:b}=V(()=>e.show,1),{disabled:C}=X();let u=!1;const S=t=>t==="top"?g(l.value):g(l.value)-m.value.offsetHeight,x=()=>{u=!0},y=()=>{if(u){u=!1;return}!e.show||a(e["onUpdate:show"],!1)},n=()=>{v.value=S(e.alignment),p.value=A(l.value)},T=O(()=>({top:`calc(${v.value}px + ${h(e.offsetY)})`,left:`calc(${p.value}px + ${h(e.offsetX)})`,zIndex:b.value})),w=()=>i(N,{name:r(),onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:()=>[I(i("div",{class:J(r("menu"),"var-elevation--3"),ref:m,style:T.value,onClick:t=>{t.stopPropagation()}},[a(f.menu)]),[[U,e.show]])]});return c(()=>e.alignment,n),c(()=>e.show,async t=>{const{onOpen:k,onClose:z}=e;t&&(await j(),n()),t?a(k):a(z)}),c(()=>e.teleport,t=>{s.value=t}),E(()=>{s.value=e.teleport,n(),document.addEventListener("click",y),window.addEventListener("resize",n)}),F(()=>{document.removeEventListener("click",y),window.removeEventListener("resize",n)}),Y({resize:n}),()=>{let t;return i("div",{class:r(),ref:l,onClick:x},[a(f.default),s.value?i(M,{to:s.value,disabled:C.value},H(t=w())?t:{default:()=>[t]}):w()])}}});d.install=function(e){e.component(d.name,d)};export{d as M};
