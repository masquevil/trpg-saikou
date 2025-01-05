import{a4 as et,a5 as $,a3 as K,s as nt}from"./index-1iik5Zu-.js";function oe(t,e){return et(t,Object.assign({controls:!0,messages:{justNow:"就在刚刚",past:"{0}之前",future:"{0}之后",invalid:"",second:"{0}秒",minute:"{0}分钟",hour:"{0}小时",day:"{0}天",week:"{0}周",month:"{0}个月",year:"{0}年"}},e))}var J=(t=>(t.SoxFE="$sox-trpg",t))(J||{}),rt=(t=>(t.Home="$home",t.COCCard="$coc-card",t.ERPCard="$erp-card",t))(rt||{});function ie(t){const{namespace:e=J.SoxFE,app:n,versionChecker:r=(w,y)=>(y.value=null,-1),defaults:o={}}=t,c=window.localStorage,l=`${e}#${n}`,s=`${e}##versionChecker`,i=$(l,o,c,{mergeDefaults:!0}),u=$(s,{},c),h=u.value[l],f=r(h,i);u.value[n]=f;function d(){return i.value}function S(){return Object.keys(d()).length}function v(w){return i.value[w]}function R(w,y){i.value[w]=y}function b(w){delete i.value[w]}function _(){i.value=null}return{store:i,get namespace(){return e},get appName(){return n},get version(){return f},listItems:d,countItems:S,getItem:v,setItem:R,removeItem:b,clear:_}}var I={exports:{}};I.exports;(function(t){var e=function(){var n=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",c={};function l(i,u){if(!c[i]){c[i]={};for(var h=0;h<i.length;h++)c[i][i.charAt(h)]=h}return c[i][u]}var s={compressToBase64:function(i){if(i==null)return"";var u=s._compress(i,6,function(h){return r.charAt(h)});switch(u.length%4){default:case 0:return u;case 1:return u+"===";case 2:return u+"==";case 3:return u+"="}},decompressFromBase64:function(i){return i==null?"":i==""?null:s._decompress(i.length,32,function(u){return l(r,i.charAt(u))})},compressToUTF16:function(i){return i==null?"":s._compress(i,15,function(u){return n(u+32)})+" "},decompressFromUTF16:function(i){return i==null?"":i==""?null:s._decompress(i.length,16384,function(u){return i.charCodeAt(u)-32})},compressToUint8Array:function(i){for(var u=s.compress(i),h=new Uint8Array(u.length*2),f=0,d=u.length;f<d;f++){var S=u.charCodeAt(f);h[f*2]=S>>>8,h[f*2+1]=S%256}return h},decompressFromUint8Array:function(i){if(i==null)return s.decompress(i);for(var u=new Array(i.length/2),h=0,f=u.length;h<f;h++)u[h]=i[h*2]*256+i[h*2+1];var d=[];return u.forEach(function(S){d.push(n(S))}),s.decompress(d.join(""))},compressToEncodedURIComponent:function(i){return i==null?"":s._compress(i,6,function(u){return o.charAt(u)})},decompressFromEncodedURIComponent:function(i){return i==null?"":i==""?null:(i=i.replace(/ /g,"+"),s._decompress(i.length,32,function(u){return l(o,i.charAt(u))}))},compress:function(i){return s._compress(i,16,function(u){return n(u)})},_compress:function(i,u,h){if(i==null)return"";var f,d,S={},v={},R="",b="",_="",w=2,y=3,m=2,E=[],a=0,p=0,g;for(g=0;g<i.length;g+=1)if(R=i.charAt(g),Object.prototype.hasOwnProperty.call(S,R)||(S[R]=y++,v[R]=!0),b=_+R,Object.prototype.hasOwnProperty.call(S,b))_=b;else{if(Object.prototype.hasOwnProperty.call(v,_)){if(_.charCodeAt(0)<256){for(f=0;f<m;f++)a=a<<1,p==u-1?(p=0,E.push(h(a)),a=0):p++;for(d=_.charCodeAt(0),f=0;f<8;f++)a=a<<1|d&1,p==u-1?(p=0,E.push(h(a)),a=0):p++,d=d>>1}else{for(d=1,f=0;f<m;f++)a=a<<1|d,p==u-1?(p=0,E.push(h(a)),a=0):p++,d=0;for(d=_.charCodeAt(0),f=0;f<16;f++)a=a<<1|d&1,p==u-1?(p=0,E.push(h(a)),a=0):p++,d=d>>1}w--,w==0&&(w=Math.pow(2,m),m++),delete v[_]}else for(d=S[_],f=0;f<m;f++)a=a<<1|d&1,p==u-1?(p=0,E.push(h(a)),a=0):p++,d=d>>1;w--,w==0&&(w=Math.pow(2,m),m++),S[b]=y++,_=String(R)}if(_!==""){if(Object.prototype.hasOwnProperty.call(v,_)){if(_.charCodeAt(0)<256){for(f=0;f<m;f++)a=a<<1,p==u-1?(p=0,E.push(h(a)),a=0):p++;for(d=_.charCodeAt(0),f=0;f<8;f++)a=a<<1|d&1,p==u-1?(p=0,E.push(h(a)),a=0):p++,d=d>>1}else{for(d=1,f=0;f<m;f++)a=a<<1|d,p==u-1?(p=0,E.push(h(a)),a=0):p++,d=0;for(d=_.charCodeAt(0),f=0;f<16;f++)a=a<<1|d&1,p==u-1?(p=0,E.push(h(a)),a=0):p++,d=d>>1}w--,w==0&&(w=Math.pow(2,m),m++),delete v[_]}else for(d=S[_],f=0;f<m;f++)a=a<<1|d&1,p==u-1?(p=0,E.push(h(a)),a=0):p++,d=d>>1;w--,w==0&&(w=Math.pow(2,m),m++)}for(d=2,f=0;f<m;f++)a=a<<1|d&1,p==u-1?(p=0,E.push(h(a)),a=0):p++,d=d>>1;for(;;)if(a=a<<1,p==u-1){E.push(h(a));break}else p++;return E.join("")},decompress:function(i){return i==null?"":i==""?null:s._decompress(i.length,32768,function(u){return i.charCodeAt(u)})},_decompress:function(i,u,h){var f=[],d=4,S=4,v=3,R="",b=[],_,w,y,m,E,a,p,g={val:h(0),position:u,index:1};for(_=0;_<3;_+=1)f[_]=_;for(y=0,E=Math.pow(2,2),a=1;a!=E;)m=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=h(g.index++)),y|=(m>0?1:0)*a,a<<=1;switch(y){case 0:for(y=0,E=Math.pow(2,8),a=1;a!=E;)m=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=h(g.index++)),y|=(m>0?1:0)*a,a<<=1;p=n(y);break;case 1:for(y=0,E=Math.pow(2,16),a=1;a!=E;)m=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=h(g.index++)),y|=(m>0?1:0)*a,a<<=1;p=n(y);break;case 2:return""}for(f[3]=p,w=p,b.push(p);;){if(g.index>i)return"";for(y=0,E=Math.pow(2,v),a=1;a!=E;)m=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=h(g.index++)),y|=(m>0?1:0)*a,a<<=1;switch(p=y){case 0:for(y=0,E=Math.pow(2,8),a=1;a!=E;)m=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=h(g.index++)),y|=(m>0?1:0)*a,a<<=1;f[S++]=n(y),p=S-1,d--;break;case 1:for(y=0,E=Math.pow(2,16),a=1;a!=E;)m=g.val&g.position,g.position>>=1,g.position==0&&(g.position=u,g.val=h(g.index++)),y|=(m>0?1:0)*a,a<<=1;f[S++]=n(y),p=S-1,d--;break;case 2:return b.join("")}if(d==0&&(d=Math.pow(2,v),v++),f[p])R=f[p];else if(p===S)R=w+w.charAt(0);else return null;b.push(R),f[S++]=w+R.charAt(0),d--,w=R,d==0&&(d=Math.pow(2,v),v++)}}};return s}();t!=null?t.exports=e:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return e})})(I);var ot=I.exports;const ce=K(ot);var it=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(o){t.addRange(o)}),e&&e.focus()}},ct=it,B={"text/plain":"Text","text/html":"Url",default:"Text"},st="Copy to clipboard: #{key}, Enter";function at(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function lt(t,e){var n,r,o,c,l,s,i=!1;e||(e={}),n=e.debug||!1;try{o=ct(),c=document.createRange(),l=document.getSelection(),s=document.createElement("span"),s.textContent=t,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(h){if(h.stopPropagation(),e.format)if(h.preventDefault(),typeof h.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=B[e.format]||B.default;window.clipboardData.setData(f,t)}else h.clipboardData.clearData(),h.clipboardData.setData(e.format,t);e.onCopy&&(h.preventDefault(),e.onCopy(h.clipboardData))}),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");i=!0}catch(h){n&&console.error("unable to copy using execCommand: ",h),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),i=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),r=at("message"in e?e.message:st),window.prompt(r,t)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),o()}return i}var ut=lt;const se=K(ut);var ft=(t=>(t.FEATURE="feature",t))(ft||{}),ht=(t=>(t.F_POINT="F_POINT",t.F_SWITCH_PAPER="F_SWITCH_PAPER",t.F_SAVE="F_SAVE",t.F_MORE="F_MORE",t.TAB_MORE="TAB_MORE",t.TAB_JOB_LIST="TAB_JOB_LIST",t.TAB_WEAPON_LIST="TAB_WEAPON_LIST",t.TAB_GUIDE="TAB_GUIDE",t.PAPER_ROLL="PAPER_ROLL",t.PAPER_RAND_NAME="PAPER_RAND_NAME",t.PAPER_USE_JOB="PAPER_USE_JOB",t.PAPER_USE_WEAPON="PAPER_USE_WEAPON",t.PANE_USE_JOB="PANE_USE_JOB",t.PANE_USE_WEAPON="PANE_USE_WEAPON",t.MORE_AGE="MORE_AGE",t.MORE_RESET="MORE_RESET",t.MORE_INOUT="MORE_INOUT",t.MORE_DICE_MAID="MORE_DICE_MAID",t.MORE_EMPTY="MORE_EMPTY",t.MORE_TOTAL_MODE="MORE_TOTAL_MODE",t.MORE_REWARD="MORE_REWARD",t.MORE_SIMPLE_ROLL="MORE_SIMPLE_ROLL",t.MORE_NOTICE_BOARD="MORE_NOTICE_BOARD",t.CA_SAVE_DOWNLOAD="CA_SAVE_DOWNLOAD",t.CA_SAVE_REGEN="CA_SAVE_REGEN",t.CA_INOUT_IMPORT="CA_INOUT_IMPORT",t.CA_INOUT_EXPORT="CA_INOUT_EXPORT",t.CA_DICE_MAID_COPY="CA_DICE_MAID_COPY",t.PM_GEN_KAEDE="PM_GEN_KAEDE",t.PM_GEN_ROLL="PM_GEN_ROLL",t.PM_GEN_BUY="PM_GEN_BUY",t.PM_USE_KAEDE="PM_USE_KAEDE",t.PM_USE_ROLL="PM_USE_ROLL",t.PM_USE_BUY="PM_USE_BUY",t))(ht||{});const ae=window.LA;function dt(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),e&&(r.href=e),o.href=t,o.href}const gt=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function x(t){const e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function C(t,e){const r=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return r?parseFloat(r.replace("px","")):0}function pt(t){const e=C(t,"border-left-width"),n=C(t,"border-right-width");return t.clientWidth+e+n}function mt(t){const e=C(t,"border-top-width"),n=C(t,"border-bottom-width");return t.clientHeight+e+n}function Y(t,e={}){const n=e.width||pt(t),r=e.height||mt(t);return{width:n,height:r}}function Et(){let t,e;try{e=process}catch{}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const O=16384;function wt(t){(t.width>O||t.height>O)&&(t.width>O&&t.height>O?t.width>t.height?(t.height*=O/t.width,t.width=O):(t.width*=O/t.height,t.height=O):t.width>O?(t.height*=O/t.width,t.width=O):(t.width*=O/t.height,t.height=O))}function P(t){return new Promise((e,n)=>{const r=new Image;r.decode=()=>e(r),r.onload=()=>e(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t})}async function yt(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function _t(t,e,n){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),c=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${e}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${e} ${n}`),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("externalResourcesRequired","true"),o.appendChild(c),c.appendChild(t),yt(o)}const A=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return n===null?!1:n.constructor.name===e.name||A(n,e)};function St(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function Rt(t){return x(t).map(e=>{const n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return`${e}: ${n}${r?" !important":""};`}).join(" ")}function At(t,e,n){const r=`.${t}:${e}`,o=n.cssText?St(n):Rt(n);return document.createTextNode(`${r}{${o}}`)}function W(t,e,n){const r=window.getComputedStyle(t,n),o=r.getPropertyValue("content");if(o===""||o==="none")return;const c=gt();try{e.className=`${e.className} ${c}`}catch{return}const l=document.createElement("style");l.appendChild(At(c,n,r)),e.appendChild(l)}function vt(t,e){W(t,e,":before"),W(t,e,":after")}const j="application/font-woff",H="image/jpeg",Ot={woff:j,woff2:j,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:H,jpeg:H,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function bt(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function U(t){const e=bt(t).toLowerCase();return Ot[e]||""}function xt(t){return t.split(/,/)[1]}function D(t){return t.search(/^(data:)/)!==-1}function X(t,e){return`data:${e};base64,${t}`}async function Z(t,e,n){const r=await fetch(t,e);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const o=await r.blob();return new Promise((c,l)=>{const s=new FileReader;s.onerror=l,s.onloadend=()=>{try{c(n({res:r,result:s.result}))}catch(i){l(i)}},s.readAsDataURL(o)})}const L={};function Tt(t,e,n){let r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}async function k(t,e,n){const r=Tt(t,e,n.includeQueryParams);if(L[r]!=null)return L[r];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let o;try{const c=await Z(t,n.fetchRequestInit,({res:l,result:s})=>(e||(e=l.headers.get("Content-Type")||""),xt(s)));o=X(c,e)}catch(c){o=n.imagePlaceholder||"";let l=`Failed to fetch resource: ${t}`;c&&(l=typeof c=="string"?c:c.message),l&&console.warn(l)}return L[r]=o,o}async function Ct(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):P(e)}async function Pt(t,e){if(t.currentSrc){const c=document.createElement("canvas"),l=c.getContext("2d");c.width=t.clientWidth,c.height=t.clientHeight,l==null||l.drawImage(t,0,0,c.width,c.height);const s=c.toDataURL();return P(s)}const n=t.poster,r=U(n),o=await k(n,r,e);return P(o)}async function Mt(t){var e;try{if(!((e=t==null?void 0:t.contentDocument)===null||e===void 0)&&e.body)return await M(t.contentDocument.body,{},!0)}catch{}return t.cloneNode(!1)}async function Lt(t,e){return A(t,HTMLCanvasElement)?Ct(t):A(t,HTMLVideoElement)?Pt(t,e):A(t,HTMLIFrameElement)?Mt(t):t.cloneNode(!1)}const Dt=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT";async function It(t,e,n){var r,o;let c=[];return Dt(t)&&t.assignedNodes?c=x(t.assignedNodes()):A(t,HTMLIFrameElement)&&(!((r=t.contentDocument)===null||r===void 0)&&r.body)?c=x(t.contentDocument.body.childNodes):c=x(((o=t.shadowRoot)!==null&&o!==void 0?o:t).childNodes),c.length===0||A(t,HTMLVideoElement)||await c.reduce((l,s)=>l.then(()=>M(s,n)).then(i=>{i&&e.appendChild(i)}),Promise.resolve()),e}function Ut(t,e){const n=e.style;if(!n)return;const r=window.getComputedStyle(t);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):x(r).forEach(o=>{let c=r.getPropertyValue(o);o==="font-size"&&c.endsWith("px")&&(c=`${Math.floor(parseFloat(c.substring(0,c.length-2)))-.1}px`),A(t,HTMLIFrameElement)&&o==="display"&&c==="inline"&&(c="block"),o==="d"&&e.getAttribute("d")&&(c=`path(${e.getAttribute("d")})`),n.setProperty(o,c,r.getPropertyPriority(o))})}function kt(t,e){A(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),A(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function $t(t,e){if(A(t,HTMLSelectElement)){const n=e,r=Array.from(n.children).find(o=>t.value===o.getAttribute("value"));r&&r.setAttribute("selected","")}}function Bt(t,e){return A(e,Element)&&(Ut(t,e),vt(t,e),kt(t,e),$t(t,e)),e}async function Wt(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(n.length===0)return t;const r={};for(let c=0;c<n.length;c++){const s=n[c].getAttribute("xlink:href");if(s){const i=t.querySelector(s),u=document.querySelector(s);!i&&u&&!r[s]&&(r[s]=await M(u,e,!0))}}const o=Object.values(r);if(o.length){const c="http://www.w3.org/1999/xhtml",l=document.createElementNS(c,"svg");l.setAttribute("xmlns",c),l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.overflow="hidden",l.style.display="none";const s=document.createElementNS(c,"defs");l.appendChild(s);for(let i=0;i<o.length;i++)s.appendChild(o[i]);t.appendChild(l)}return t}async function M(t,e,n){return!n&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(r=>Lt(r,e)).then(r=>It(t,r,e)).then(r=>Bt(t,r)).then(r=>Wt(r,e))}const F=/url\((['"]?)([^'"]+?)\1\)/g,jt=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Ht=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Gt(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function Vt(t){const e=[];return t.replace(F,(n,r,o)=>(e.push(o),n)),e.filter(n=>!D(n))}async function qt(t,e,n,r,o){try{const c=n?dt(e,n):e,l=U(e);let s;if(o){const i=await o(c);s=X(i,l)}else s=await k(c,l,r);return t.replace(Gt(e),`$1${s}$3`)}catch{}return t}function zt(t,{preferredFontFormat:e}){return e?t.replace(Ht,n=>{for(;;){const[r,,o]=jt.exec(n)||[];if(!o)return"";if(o===e)return`src: ${r};`}}):t}function Q(t){return t.search(F)!==-1}async function N(t,e,n){if(!Q(t))return t;const r=zt(t,n);return Vt(r).reduce((c,l)=>c.then(s=>qt(s,l,e,n)),Promise.resolve(r))}async function T(t,e,n){var r;const o=(r=e.style)===null||r===void 0?void 0:r.getPropertyValue(t);if(o){const c=await N(o,null,n);return e.style.setProperty(t,c,e.style.getPropertyPriority(t)),!0}return!1}async function Kt(t,e){await T("background",t,e)||await T("background-image",t,e),await T("mask",t,e)||await T("mask-image",t,e)}async function Jt(t,e){const n=A(t,HTMLImageElement);if(!(n&&!D(t.src))&&!(A(t,SVGImageElement)&&!D(t.href.baseVal)))return;const r=n?t.src:t.href.baseVal,o=await k(r,U(r),e);await new Promise((c,l)=>{t.onload=c,t.onerror=l;const s=t;s.decode&&(s.decode=c),s.loading==="lazy"&&(s.loading="eager"),n?(t.srcset="",t.src=o):t.href.baseVal=o})}async function Yt(t,e){const r=x(t.childNodes).map(o=>tt(o,e));await Promise.all(r).then(()=>t)}async function tt(t,e){A(t,Element)&&(await Kt(t,e),await Jt(t,e),await Yt(t,e))}function Xt(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const r=e.style;return r!=null&&Object.keys(r).forEach(o=>{n[o]=r[o]}),t}const G={};async function V(t){let e=G[t];if(e!=null)return e;const r=await(await fetch(t)).text();return e={url:t,cssText:r},G[t]=e,e}async function q(t,e){let n=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,c=(n.match(/url\([^)]+\)/g)||[]).map(async l=>{let s=l.replace(r,"$1");return s.startsWith("https://")||(s=new URL(s,t.url).href),Z(s,e.fetchRequestInit,({result:i})=>(n=n.replace(l,`url(${i})`),[l,i]))});return Promise.all(c).then(()=>n)}function z(t){if(t==null)return[];const e=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=t.replace(n,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const i=o.exec(r);if(i===null)break;e.push(i[0])}r=r.replace(o,"");const c=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,l="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(l,"gi");for(;;){let i=c.exec(r);if(i===null){if(i=s.exec(r),i===null)break;c.lastIndex=s.lastIndex}else s.lastIndex=c.lastIndex;e.push(i[0])}return e}async function Zt(t,e){const n=[],r=[];return t.forEach(o=>{if("cssRules"in o)try{x(o.cssRules||[]).forEach((c,l)=>{if(c.type===CSSRule.IMPORT_RULE){let s=l+1;const i=c.href,u=V(i).then(h=>q(h,e)).then(h=>z(h).forEach(f=>{try{o.insertRule(f,f.startsWith("@import")?s+=1:o.cssRules.length)}catch(d){console.error("Error inserting rule from remote css",{rule:f,error:d})}})).catch(h=>{console.error("Error loading remote css",h.toString())});r.push(u)}})}catch(c){const l=t.find(s=>s.href==null)||document.styleSheets[0];o.href!=null&&r.push(V(o.href).then(s=>q(s,e)).then(s=>z(s).forEach(i=>{l.insertRule(i,o.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",c)}}),Promise.all(r).then(()=>(t.forEach(o=>{if("cssRules"in o)try{x(o.cssRules||[]).forEach(c=>{n.push(c)})}catch(c){console.error(`Error while reading CSS rules from ${o.href}`,c)}}),n))}function Ft(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>Q(e.style.getPropertyValue("src")))}async function Qt(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=x(t.ownerDocument.styleSheets),r=await Zt(n,e);return Ft(r)}async function Nt(t,e){const n=await Qt(t,e);return(await Promise.all(n.map(o=>{const c=o.parentStyleSheet?o.parentStyleSheet.href:null;return N(o.cssText,c,e)}))).join(`
`)}async function te(t,e){const n=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await Nt(t,e);if(n){const r=document.createElement("style"),o=document.createTextNode(n);r.appendChild(o),t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r)}}async function ee(t,e={}){const{width:n,height:r}=Y(t,e),o=await M(t,e,!0);return await te(o,e),await tt(o,e),Xt(o,e),await _t(o,n,r)}async function ne(t,e={}){const{width:n,height:r}=Y(t,e),o=await ee(t,e),c=await P(o),l=document.createElement("canvas"),s=l.getContext("2d"),i=e.pixelRatio||Et(),u=e.canvasWidth||n,h=e.canvasHeight||r;return l.width=u*i,l.height=h*i,e.skipAutoScale||wt(l),l.style.width=`${u}`,l.style.height=`${h}`,e.backgroundColor&&(s.fillStyle=e.backgroundColor,s.fillRect(0,0,l.width,l.height)),s.drawImage(c,0,0,l.width,l.height),l}async function le(t,e={}){return(await ne(t,e)).toDataURL("image/jpeg",e.quality||1)}const ue="/trpg-saikou/assets/qr-wechat-DiAmb7iW.jpg",fe="/trpg-saikou/assets/qr-alipay-BgFrBFLc.jpg",he={mounted(t,e){t._clickOutsideEvent=function(n){t===n.target||t.contains(n.target)||e.value(n,t)},document.addEventListener("click",t._clickOutsideEvent),document.addEventListener("focus",t._clickOutsideEvent,!0)},unmounted:function(e){document.removeEventListener("click",e._clickOutsideEvent),document.removeEventListener("focus",e._clickOutsideEvent,!0)}};function de(t=!1){const e=nt(t);return{value:e,setTrue(){e.value=!0},setFalse(){e.value=!1},setToggle(){e.value=!e.value}}}export{ht as F,rt as L,oe as a,ae as b,ft as c,se as d,fe as e,ce as f,de as g,ue as q,le as t,ie as u,he as v};
