import{d as j,o as v,c as g,a as p,t as V,q as E,x as w,A as H,h as A,b as k,e as I,w as m,s as n,v as $,r as S,C as R,F as N,a5 as J,a6 as K,a7 as P,a4 as Q,p as B,f as G,y as M,a8 as X}from"./index-3Nt-g4Fk.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";function Ne(t){for(let o=t.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[t[o],t[s]]=[t[s],t[o]]}return t}function Y(t,o=1){return Array.from({length:o}).reduce(s=>{const u=Math.floor(Math.random()*t)+1;return s+u},0)}function O(t,o){const s=o.toString().length,u=t.toString();return u+Array.from({length:s-u.length}).map(f=>" ").join("")}function Z(t){const o={dice:Number(t.dice),times:Number(t.times),pick:Number(t.pick||t.times),plus:Number(t.plus??0),align:t.align},{dice:s,times:u,pick:f=u,plus:_=0,align:l=!0}=o,i=f?Math.min(Math.abs(f),u):u,b=Array.from({length:u}).map(()=>Math.floor(Math.random()*s)+1),y=u-i,d=[...b],C=[];for(let a=0;a<y;a++){const D=d.indexOf(Math[f>0?"min":"max"](...b));C.push(...d.splice(D,1))}const h=d.reduce((a,D)=>a+D,_),e=s*i+_,c=[`${l?O(h,e):h} =`,y?`(${b.map(a=>`${l?O(a,s):a}`).join(",")})`:"",d.join(" + "),_?`(+ ${_})`:""].filter(a=>a).join(" ");return{result:h,text:c,detail:b,detailUsed:d,detailRemoved:C}}function U(t="",o,s){const u={dice:Number(s.dice),times:Number(s.times),pick:Number(s.pick),plus:Number(s.plus??0)},{times:f,dice:_,pick:l,plus:i}=u;return[t?`${t}的`:"",`${o}次`,[`${f}d`,_,l?`p${l}`:"",i?` + ${i}`:""].join("")].filter(b=>b).join(" ")}function ee(t,o,s){const u=Array.from({length:t}).map(()=>Z(o)),{sort:f="desc"}=s||{};return f&&u.sort((l,i)=>f==="asc"?l.result-i.result:i.result-l.result),{text:u.map(l=>l.text).join(`
`),details:u}}const te={class:"action-card-title"},oe=j({__name:"ActionCard",props:{setRef:{},title:{}},setup(t){return(o,s)=>(v(),g("div",{class:"action-card",ref:o.setRef},[p("div",te,V(o.title),1),E(o.$slots,"default",{},void 0,!0)],512))}}),W=L(oe,[["__scopeId","data-v-c26a3ca7"]]),T=[2,3,4,6,8,10,12,20,100],le=t=>(B("data-v-5e6fd006"),t=t(),G(),t),ne={class:"card-row"},se={class:"card-row"},ie={class:"card-row"},ae={class:"footer"},ue={class:"footer-hint"},re=le(()=>p("div",null,"可横向滚动",-1)),de=j({__name:"DiyActionCard",props:{setRef:{},defaultGroupCount:{},defaultOptions:{}},emits:["roll","scroll"],setup(t,{emit:o}){const s=t,u=o,{defaultGroupCount:f=5,defaultOptions:_={dice:6,times:3}}=s,l=w(f),i=H(_),b=w(3);function y(h){b.value=(b.value+h+T.length)%T.length}function d(){const h=ee(l.value,i).text,e={title:U("",l.value,i),content:h,time:new Date().toLocaleTimeString(),timestamp:Date.now()};u("roll",e)}const C=A(()=>U("",l.value,i));return(h,e)=>{const c=k("el-input"),a=k("el-button"),D=k("el-button-group"),x=k("el-form-item"),F=k("el-radio-button"),q=k("el-radio-group"),z=k("el-form");return v(),I(W,{class:"diy-card-container",title:`自定义投掷（当前：${C.value}）`,setRef:h.setRef},{default:m(()=>[n(z,{"label-width":"auto",onSubmit:Q(d,["prevent"])},{default:m(()=>[n(x,{label:"几组"},{default:m(()=>[p("div",ne,[n(c,{class:"col-1",type:"number",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=r=>l.value=r),min:1},null,8,["modelValue"]),n(D,{modelValue:l.value,"onUpdate:modelValue":e[5]||(e[5]=r=>l.value=r)},{default:m(()=>[n(a,{onClick:e[1]||(e[1]=r=>l.value=1)},{default:m(()=>[$(" 1 ")]),_:1}),n(a,{onClick:e[2]||(e[2]=r=>l.value=5)},{default:m(()=>[$(" 5 ")]),_:1}),n(a,{onClick:e[3]||(e[3]=r=>l.value-=1)},{default:m(()=>[$(" -1 ")]),_:1}),n(a,{onClick:e[4]||(e[4]=r=>l.value+=1)},{default:m(()=>[$(" +1 ")]),_:1})]),_:1},8,["modelValue"])])]),_:1}),n(x,{label:"D"},{default:m(()=>[p("div",se,[n(a,{onClick:e[6]||(e[6]=r=>y(-3))},{default:m(()=>[$(" ← ")]),_:1}),n(q,{modelValue:i.dice,"onUpdate:modelValue":e[7]||(e[7]=r=>i.dice=r)},{default:m(()=>[(v(!0),g(N,null,S(R(T).slice(b.value,b.value+3),r=>(v(),I(F,{key:r,label:`D${r}`,value:r},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),n(a,{onClick:e[8]||(e[8]=r=>y(3))},{default:m(()=>[$(" → ")]),_:1})])]),_:1}),n(x,{label:"几颗"},{default:m(()=>[p("div",ie,[n(c,{type:"number",modelValue:i.times,"onUpdate:modelValue":e[10]||(e[10]=r=>i.times=r),min:1},{append:m(()=>[n(a,{icon:R(J),onClick:e[9]||(e[9]=r=>i.times=1)},null,8,["icon"])]),_:1},8,["modelValue"]),$(" 选 "),n(c,{type:"number",placeholder:"几颗最 +大/-小 的",modelValue:i.pick,"onUpdate:modelValue":e[11]||(e[11]=r=>i.pick=Number(r))},null,8,["modelValue"])])]),_:1}),n(x,{label:"加值"},{default:m(()=>[n(c,{type:"number",modelValue:i.plus,"onUpdate:modelValue":e[12]||(e[12]=r=>i.plus=r)},null,8,["modelValue"])]),_:1}),p("div",ae,[n(a,{type:"default",size:"large",nativeType:"submit"},{default:m(()=>[$(" 投掷 ")]),_:1}),p("div",ue,[n(a,{type:"default",onClick:e[13]||(e[13]=()=>u("scroll",-1)),icon:R(K),circle:""},null,8,["icon"]),re,n(a,{type:"default",onClick:e[14]||(e[14]=()=>u("scroll",1)),icon:R(P),circle:""},null,8,["icon"])])])]),_:1})]),_:1},8,["title","setRef"])}}}),ce=L(de,[["__scopeId","data-v-5e6fd006"]]),me=t=>(B("data-v-d48f76b6"),t=t(),G(),t),pe={class:"container"},fe={class:"result-section"},_e=me(()=>p("div",{class:"result-section-title"},"投掷结果：",-1)),ve={class:"result-cards"},be={key:0,class:"result-card"},he={class:"result-card-title"},ge={class:"result-card-content"},Ce={key:0,class:"result-section-title"},$e={class:"result-cards"},ke={class:"result-card-time"},ye={class:"result-card-title"},De={class:"result-card-content"},Ve={class:"simple-dice-container"},we=8,Re=j({__name:"RollTool",props:{hideDiy:{type:Boolean}},setup(t){const o=w([]),s=A(()=>o.value[0]);function u(d){const C=Y(d);o.value=[{title:`D${d} = ${C}`,time:new Date().toLocaleTimeString(),timestamp:Date.now()},...o.value]}const f=w([{}]),_=w(null),l=w([]),i=A(()=>{var d;return((d=l.value[0])==null?void 0:d.offsetWidth)||0});function b(d){o.value=[d,...o.value]}function y(d){_.value&&_.value.scrollTo({left:_.value.scrollLeft+d*(i.value+we),behavior:"smooth"})}return(d,C)=>{const h=k("el-button"),e=k("el-icon");return v(),g("div",pe,[p("div",fe,[_e,p("div",ve,[s.value?(v(),g("div",be,[p("div",he,V(s.value.title),1),p("div",ge,V(s.value.content),1)])):M("",!0)]),o.value.length>1?(v(),g("div",Ce," 历史投掷结果： ")):M("",!0),p("div",$e,[(v(!0),g(N,null,S(o.value.slice(1),c=>(v(),g("div",{class:"result-card",key:c.timestamp},[p("div",ke,V(c.time),1),p("div",ye,V(c.title),1),p("div",De,V(c.content),1)]))),128))])]),n(W,{title:"简单投掷（点击即骰）"},{default:m(()=>[p("div",Ve,[(v(!0),g(N,null,S(R(T),c=>(v(),g("div",{key:c},[n(h,{onClick:a=>u(c)},{default:m(()=>[$(" D"+V(c),1)]),_:2},1032,["onClick"])]))),128))])]),_:1}),d.hideDiy?M("",!0):(v(),g("div",{key:0,class:"diy-container",ref_key:"diyContainer",ref:_},[(v(!0),g(N,null,S(f.value,(c,a)=>(v(),I(ce,{key:a,setRef:D=>l.value.push(D),defaultGroupCount:c.groupCount,defaultOptions:c.options,onRoll:b,onScroll:y},null,8,["setRef","defaultGroupCount","defaultOptions"]))),128)),p("div",{class:"add-diy-button",onClick:C[0]||(C[0]=c=>f.value.push({}))},[n(e,null,{default:m(()=>[n(R(X))]),_:1})])],512))])}}}),Te=L(Re,[["__scopeId","data-v-d48f76b6"]]);export{Te as R,Ne as s};
