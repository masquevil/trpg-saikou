import{d as k,y as g,c as l,a,F as p,r as m,D as u,K as b,a3 as V,x as I,o as n,e as h,t as c,z as L,p as N,f as B}from"./index-CaaFcEAL.js";import{s as C,r as D,e as P,P as f}from"./record-CEeLmd2c.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";const v=d=>(N("data-v-9de1a24b"),d=d(),B(),d),F={class:"page"},M={class:"layout"},j={class:"section section-wanted"},z=v(()=>a("div",{class:"section-header"},[a("h1",{class:"section-title"},"我想玩的")],-1)),E={key:0,class:"prefer-label"},K={class:"section section-played"},T={class:"section-header"},U=v(()=>a("h1",{class:"section-title"},"我玩过的",-1)),q={class:"played-card-header"},G={class:"played-card-name"},H={key:0},J={class:"experience-comments"},O=k({__name:"SelfView",setup(d){const i=g(!1),_=C.map(o=>({story:o,record:D.get(o.name),experience:P.get(o.name)})),w=_.filter(o=>{var t;return(t=o.record)==null?void 0:t.prefer}).sort((o,t)=>{var s,e;return(((s=t.record)==null?void 0:s.prefer)||0)-(((e=o.record)==null?void 0:e.prefer)||0)}),y=_.filter(o=>{var t;return((t=o.record)==null?void 0:t.isPlayed)||o.experience}).sort((o,t)=>{var s,e;return(((s=t.experience)==null?void 0:s.experienceScore)||0)-(((e=o.experience)==null?void 0:e.experienceScore)||0)}).sort((o,t)=>{var s,e;return(((s=t.experience)==null?void 0:s.storyScore)||0)-(((e=o.experience)==null?void 0:e.storyScore)||0)});return(o,t)=>(n(),l("main",F,[a("div",M,[a("div",j,[z,a("div",null,[(n(!0),l(p,null,m(u(w),({story:s,record:e})=>{var r;return n(),l("div",{key:s.name,class:"wanted-card"},[h(f,{period:s.period,welcome:(r=s.options)==null?void 0:r.welcome},null,8,["period","welcome"]),a("span",null,c(s.name),1),e!=null&&e.prefer?(n(),l("span",E,[(n(!0),l(p,null,m(Array.from({length:e.prefer}),(Q,S)=>(n(),l("span",{key:S},"♡"))),128))])):L("",!0)])}),128))])]),a("div",K,[a("div",T,[U,a("label",null,[b(a("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=s=>i.value=s)},null,512),[[V,i.value]]),I(" 隐藏主观评价 ")])]),a("div",null,[(n(!0),l(p,null,m(u(y),({story:s,experience:e})=>{var r;return n(),l("div",{key:s.name,class:"played-card"},[a("div",q,[h(f,{period:s.period,welcome:(r=s.options)==null?void 0:r.welcome},null,8,["period","welcome"]),a("span",G,c(s.name),1),e?(n(),l(p,{key:1},[a("span",null," 体验评分: "+c(i.value?"*":e==null?void 0:e.experienceScore),1),a("span",null,"模组评分: "+c(e==null?void 0:e.storyScore),1)],64)):(n(),l("span",H,"暂无评价"))]),a("div",J,c(i.value?Array.from({length:(e==null?void 0:e.comments.length)||0}).map(()=>"*").join(""):e==null?void 0:e.comments),1)])}),128))])])])]))}}),Y=A(O,[["__scopeId","data-v-9de1a24b"]]);export{Y as default};
