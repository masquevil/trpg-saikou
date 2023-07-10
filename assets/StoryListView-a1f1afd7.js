import{i as E,g as L,s as C,r as T,o as r,c as l,a as t,b as S,w as M,d as D,y,H as k,F as f,j as v,u as F,t as _,k as O,m as V,p as R,e as j}from"./index-24814749.js";import{u as z,s as A,e as H,r as q,P,p as G}from"./record-b02366bf.js";import{S as J}from"./SoxCheckbox-bcd61be5.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";const u=w=>(R("data-v-4adc2d8b"),w=w(),j(),w),Q={class:"page"},X={class:"header"},Y=u(()=>t("h1",{class:"title"},"听枫馆打卡记录",-1)),Z={class:"filter-section"},ee=u(()=>t("option",{value:1},"显示玩过的",-1)),te=u(()=>t("option",{value:0},"隐藏玩过的",-1)),se=[ee,te],oe=u(()=>t("option",{value:1},"显示入门模组",-1)),ne=u(()=>t("option",{value:0},"隐藏入门模组",-1)),ae=[oe,ne],ie={class:"filter-multi-container filter-of-period"},re=u(()=>t("option",{value:"",disabled:"",selected:""}," 选择时长 ",-1)),le=u(()=>t("option",{value:"",hidden:""}," 重置 ",-1)),de=["value"],ce={class:"filter-multi-values"},ue=u(()=>t("option",{value:""},"全年代",-1)),pe=u(()=>t("option",{value:"20"},"2000+",-1)),_e=u(()=>t("option",{value:"19"},"1900+",-1)),me=[ue,pe,_e],fe=u(()=>t("option",{value:""},"全世界",-1)),ve=["value"],he={class:"list"},ye={class:"item-mark"},ke={class:"item-name"},we={key:0,class:"prefer-label"},be={key:1,class:"item-comments-container"},ge=u(()=>t("div",{class:"item-comments-icon"},"📝",-1)),Se={class:"item-comments-panel"},Ve={class:"item-decade"},xe={class:"item-areas"},Le={key:0},Ce={class:"area-info"},Pe=E({__name:"StoryListView",setup(w){z("dark");function I(){return n=>{const{name:o}=n,c=H.get(o),e=q.get(o);return{story:n,experience:c,record:e}}}const b=["short","medium","long","battle"];function N(n){const o=[(e,s)=>{var a,i;return Number(((a=s.record)==null?void 0:a.isPlayed)||!1)-Number(((i=e.record)==null?void 0:i.isPlayed)||!1)},(e,s)=>{var a,i;return(((a=s.record)==null?void 0:a.prefer)||0)-(((i=e.record)==null?void 0:i.prefer)||0)},(e,s)=>b.indexOf(e.story.period)-b.indexOf(s.story.period),(e,s)=>{const a=e.story.decade.decade,i=s.story.decade.decade;if(!i)return-1;if(!a)return 1;if(a!==i)return a>i?1:-1;const m=e.story.decade.decadeInt,p=s.story.decade.decadeInt;return p?m?m-p:1:-1},(e,s)=>{const a=e.story.area[0].country,i=s.story.area[0].country;return a!==i?a>i?-1:1:(e.story.area[0].city||"")>(s.story.area[0].city||"")?-1:1}],c=[...n].filter(e=>{var s;return!((s=e.story.options)!=null&&s.inactive)}).filter(e=>{var s;return!((s=e.story.options)!=null&&s.removed)});return o.reverse().forEach(e=>c.sort(e)),c}const x=N([...A.map(I())]),U=b.map(n=>[n,G[n]]),W=L(()=>{const n=new Map;return x.forEach(o=>{o.story.area.forEach(c=>{n.set(c.country,(n.get(c.country)||0)+1)})}),[...n.entries()].sort((o,c)=>c[1]-o[1])}),d=C({showPlayed:1,showWelcome:1,period:new Set,decade:"",country:""}),g=C("");function $(n){n&&!d.value.period.has(n)&&d.value.period.add(n),g.value=""}const B=L(()=>x.filter(({story:n,record:o})=>{var m,p;const{showPlayed:c,showWelcome:e,period:s,decade:a,country:i}=d.value;return!(!c&&(o!=null&&o.isPlayed)||!e&&((m=n.options)!=null&&m.welcome)||s.size>0&&!s.has(n.period)||a&&!((p=n.decade.decade)!=null&&p.startsWith(a))||i&&!n.area.some(h=>h.country===i))}));return(n,o)=>{const c=T("RouterLink");return r(),l("main",Q,[t("div",X,[Y,S(c,{class:"link",to:"/self"},{default:M(()=>[D(" 我的记录 ")]),_:1})]),t("div",Z,[y(t("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>d.value.showPlayed=e),class:"filter-control"},se,512),[[k,d.value.showPlayed]]),y(t("select",{"onUpdate:modelValue":o[1]||(o[1]=e=>d.value.showWelcome=e),class:"filter-control"},ae,512),[[k,d.value.showWelcome]]),t("div",ie,[y(t("select",{"onUpdate:modelValue":o[2]||(o[2]=e=>g.value=e),onChange:o[3]||(o[3]=e=>$(g.value)),class:"filter-control"},[re,le,(r(!0),l(f,null,v(F(U),e=>(r(),l("option",{key:e[0],value:e[0]},_(e[1]),9,de))),128))],544),[[k,g.value]]),t("div",ce,[(r(!0),l(f,null,v(b.filter(e=>d.value.period.has(e)),e=>(r(),O(P,{key:e,class:"period-label-filter-value",period:e,onClick:s=>d.value.period.delete(e)},null,8,["period","onClick"]))),128))])]),y(t("select",{"onUpdate:modelValue":o[4]||(o[4]=e=>d.value.decade=e),class:"filter-control"},me,512),[[k,d.value.decade]]),y(t("select",{"onUpdate:modelValue":o[5]||(o[5]=e=>d.value.country=e),class:"filter-control"},[fe,(r(!0),l(f,null,v(W.value,e=>(r(),l("option",{key:e[0],value:e[0]}," 仅"+_(e[0])+" ("+_(e[1])+") ",9,ve))),128))],512),[[k,d.value.country]])]),t("div",he,[(r(!0),l(f,null,v(B.value,({story:e,record:s,experience:a})=>{var i,m;return r(),l("div",{class:"item",key:e.name},[t("div",ye,[S(J,{checked:s==null?void 0:s.isPlayed},null,8,["checked"])]),t("div",ke,[S(P,{period:e.period,welcome:(i=e.options)==null?void 0:i.welcome},null,8,["period","welcome"]),t("span",null,_(e.name)+" "+_((m=e.options)!=null&&m.store?` (${e.options.store})`:""),1),s!=null&&s.prefer?(r(),l("span",we,[(r(!0),l(f,null,v(Array.from({length:s.prefer}),(p,h)=>(r(),l("span",{key:h},"♡"))),128))])):V("",!0),a?(r(),l("div",be,[ge,t("div",Se,[t("div",null,[t("span",null," 模组"+_(a.storyScore)+"分/体验"+_(a.experienceScore)+"分 ",1),t("span",null,_(a.comments),1)])])])):V("",!0)]),t("div",Ve,_(e.decade.decadeText),1),t("div",xe,[(r(!0),l(f,null,v(e.area,(p,h)=>(r(),l(f,{key:p.city},[h?(r(),l("span",Le," / ")):V("",!0),t("span",Ce,_(`${p.country}${p.city??""}`),1)],64))),128))])])}),128))])])}}});const $e=K(Pe,[["__scopeId","data-v-4adc2d8b"]]);export{$e as default};
