import{a6 as q}from"./index-1iik5Zu-.js";function A(p,b){const m=document.createElement("a");m.href=p,m.download=b,m.click()}function H(p){return new Promise(b=>{const m=document.createElement("img");m.onload=()=>{m.remove(),b({width:m.width,height:m.height})},m.src=p})}function K(p,b="image"){A(p,b)}var L={exports:{}};(function(p,b){(function(m,h){p.exports=h()})(q,function(){return function(m){var h={};function u(a){if(h[a])return h[a].exports;var l=h[a]={i:a,l:!1,exports:{}};return m[a].call(l.exports,l,l.exports,u),l.l=!0,l.exports}return u.m=m,u.c=h,u.d=function(a,l,y){u.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:y})},u.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},u.t=function(a,l){if(1&l&&(a=u(a)),8&l||4&l&&typeof a=="object"&&a&&a.__esModule)return a;var y=Object.create(null);if(u.r(y),Object.defineProperty(y,"default",{enumerable:!0,value:a}),2&l&&typeof a!="string")for(var v in a)u.d(y,v,(function(j){return a[j]}).bind(null,v));return y},u.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return u.d(l,"a",l),l},u.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},u.p="",u(u.s=0)}([function(m,h,u){var a;function l(o){return["image/png","image/jpeg","image/gif"].some(e=>e===o)}u.r(h),u.d(h,"canvastoDataURL",function(){return v}),u.d(h,"canvastoFile",function(){return j}),u.d(h,"dataURLtoFile",function(){return x}),u.d(h,"dataURLtoImage",function(){return E}),u.d(h,"downloadFile",function(){return F}),u.d(h,"filetoDataURL",function(){return M}),u.d(h,"imagetoCanvas",function(){return O}),u.d(h,"urltoBlob",function(){return B}),u.d(h,"urltoImage",function(){return S}),u.d(h,"compress",function(){return C}),u.d(h,"compressAccurately",function(){return J}),u.d(h,"EImageType",function(){return a}),function(o){o.PNG="image/png",o.JPEG="image/jpeg",o.GIF="image/gif"}(a||(a={}));var y=function(o,e,n,t){return new(n||(n=Promise))(function(i,s){function f(c){try{g(t.next(c))}catch(r){s(r)}}function d(c){try{g(t.throw(c))}catch(r){s(r)}}function g(c){var r;c.done?i(c.value):(r=c.value,r instanceof n?r:new n(function(w){w(r)})).then(f,d)}g((t=t.apply(o,e||[])).next())})};function v(o,e=.92,n=a.JPEG){return y(this,void 0,void 0,function*(){return l(n)||(n=a.JPEG),o.toDataURL(n,e)})}function j(o,e=.92,n=a.JPEG){return new Promise(t=>o.toBlob(i=>t(i),n,e))}var N=function(o,e,n,t){return new(n||(n=Promise))(function(i,s){function f(c){try{g(t.next(c))}catch(r){s(r)}}function d(c){try{g(t.throw(c))}catch(r){s(r)}}function g(c){var r;c.done?i(c.value):(r=c.value,r instanceof n?r:new n(function(w){w(r)})).then(f,d)}g((t=t.apply(o,e||[])).next())})};function x(o,e){return N(this,void 0,void 0,function*(){const n=o.split(",");let t=n[0].match(/:(.*?);/)[1];const i=atob(n[1]);let s=i.length;const f=new Uint8Array(s);for(;s--;)f[s]=i.charCodeAt(s);return l(e)&&(t=e),new Blob([f],{type:t})})}function E(o){return new Promise((e,n)=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>n(new Error("dataURLtoImage(): dataURL is illegal")),t.src=o})}function F(o,e){const n=document.createElement("a");n.href=window.URL.createObjectURL(o),n.download=e||Date.now().toString(36),document.body.appendChild(n);const t=document.createEvent("MouseEvents");t.initEvent("click",!1,!1),n.dispatchEvent(t),document.body.removeChild(n)}function M(o){return new Promise(e=>{const n=new FileReader;n.onloadend=t=>e(t.target.result),n.readAsDataURL(o)})}var G=function(o,e,n,t){return new(n||(n=Promise))(function(i,s){function f(c){try{g(t.next(c))}catch(r){s(r)}}function d(c){try{g(t.throw(c))}catch(r){s(r)}}function g(c){var r;c.done?i(c.value):(r=c.value,r instanceof n?r:new n(function(w){w(r)})).then(f,d)}g((t=t.apply(o,e||[])).next())})};function O(o,e={}){return G(this,void 0,void 0,function*(){const n=Object.assign({},e),t=document.createElement("canvas"),i=t.getContext("2d");let s,f;for(const d in n)Object.prototype.hasOwnProperty.call(n,d)&&(n[d]=Number(n[d]));if(n.scale){const d=n.scale>0&&n.scale<10?n.scale:1;f=o.width*d,s=o.height*d}else f=n.width||n.height*o.width/o.height||o.width,s=n.height||n.width*o.height/o.width||o.height;switch([5,6,7,8].some(d=>d===n.orientation)?(t.height=f,t.width=s):(t.height=s,t.width=f),n.orientation){case 3:i.rotate(180*Math.PI/180),i.drawImage(o,-t.width,-t.height,t.width,t.height);break;case 6:i.rotate(90*Math.PI/180),i.drawImage(o,0,-t.width,t.height,t.width);break;case 8:i.rotate(270*Math.PI/180),i.drawImage(o,-t.height,0,t.height,t.width);break;case 2:i.translate(t.width,0),i.scale(-1,1),i.drawImage(o,0,0,t.width,t.height);break;case 4:i.translate(t.width,0),i.scale(-1,1),i.rotate(180*Math.PI/180),i.drawImage(o,-t.width,-t.height,t.width,t.height);break;case 5:i.translate(t.width,0),i.scale(-1,1),i.rotate(90*Math.PI/180),i.drawImage(o,0,-t.width,t.height,t.width);break;case 7:i.translate(t.width,0),i.scale(-1,1),i.rotate(270*Math.PI/180),i.drawImage(o,-t.height,0,t.height,t.width);break;default:i.drawImage(o,0,0,t.width,t.height)}return t})}function B(o){return fetch(o).then(e=>e.blob())}function S(o){return new Promise((e,n)=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>n(new Error("urltoImage(): Image failed to load, please check the image URL")),t.src=o})}var R=function(o,e,n,t){return new(n||(n=Promise))(function(i,s){function f(c){try{g(t.next(c))}catch(r){s(r)}}function d(c){try{g(t.throw(c))}catch(r){s(r)}}function g(c){var r;c.done?i(c.value):(r=c.value,r instanceof n?r:new n(function(w){w(r)})).then(f,d)}g((t=t.apply(o,e||[])).next())})};function C(o,e={}){return R(this,void 0,void 0,function*(){if(!(o instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if(typeof e!="object"&&(e=Object.assign({quality:e})),e.quality=Number(e.quality),Number.isNaN(e.quality))return o;const n=yield M(o);let t=n.split(",")[0].match(/:(.*?);/)[1],i=a.JPEG;l(e.type)&&(i=e.type,t=e.type);const s=yield E(n),f=yield O(s,Object.assign({},e)),d=yield v(f,e.quality,i),g=yield x(d,t);return g.size>o.size?o:g})}function J(o,e={}){return R(this,void 0,void 0,function*(){if(!(o instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if(typeof e!="object"&&(e=Object.assign({size:e})),e.size=Number(e.size),Number.isNaN(e.size)||1024*e.size>o.size)return o;e.accuracy=Number(e.accuracy),(!e.accuracy||e.accuracy<.8||e.accuracy>.99)&&(e.accuracy=.95);const n=e.size*(2-e.accuracy)*1024,t=1024*e.size,i=e.size*e.accuracy*1024,s=yield M(o);let f=s.split(",")[0].match(/:(.*?);/)[1],d=a.JPEG;l(e.type)&&(d=e.type,f=e.type);const g=yield E(s),c=yield O(g,Object.assign({},e));let r,w=.5;const z=[null,null];for(let P=1;P<=7;P++){r=yield v(c,w,d);const I=.75*r.length;if(P===7){(n<I||i>I)&&(r=[r,...z].filter(k=>k).sort((k,_)=>Math.abs(.75*k.length-t)-Math.abs(.75*_.length-t))[0]);break}if(n<I)z[1]=r,w-=Math.pow(.5,P+1);else{if(!(i>I))break;z[0]=r,w+=Math.pow(.5,P+1)}}const U=yield x(r,f);return U.size>o.size?o:U})}}])})})(L);var D=L.exports,Q=D;export{A as a,K as d,H as g,Q as i};
