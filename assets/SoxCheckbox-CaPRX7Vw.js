import{d as k,z as p,j as i,b as m,o as s,c as f,x,w as b,e as n,G as l,a2 as C,A as d,a3 as v,a as B}from"./index-DG8vnTvV.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={class:"sox-checkbox"},w=["checked"],N=k({__name:"SoxCheckbox",props:{checked:{type:Boolean,default:!1},xOnFalse:{type:Boolean,default:!1}},emits:["check","change"],setup(h,{emit:r}){const a=h,t=r,e=p(a.checked);i(()=>a.checked,()=>{e.value=a.checked});function u(c){const o=c.target.checked;e.value=o,t("check",o,c),t("change",c)}return(c,o)=>{const _=m("el-icon");return s(),f("label",g,[x(_,{size:"0.9em"},{default:b(()=>[e.value?(s(),n(l(C),{key:0})):d("",!0),!e.value&&c.xOnFalse?(s(),n(l(v),{key:1})):d("",!0)]),_:1}),B("input",{type:"checkbox",class:"sox-checkbox-input",checked:e.value,onChange:u},null,40,w)])}}}),z=y(N,[["__scopeId","data-v-47166167"]]);export{z as S};
