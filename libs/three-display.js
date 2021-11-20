/*!
@file @spearwolf/three-display - a display for your three.js app
@author Wolfger Schramm <wolfger@spearwolf.de>
@version 0.0.1+es2017.20211021

Copyright 2021 Wolfger Schramm

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
import{WebGLRenderer as t}from"three";import e from"@spearwolf/eventize";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function i(t,e,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(t):s?s.value:e.get(t)}function s(t,e,i,s,r){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?r.call(t,i):r?r.value=i:e.set(t,i),i}const r=Math.round(Math.random()*(1<<24)).toString(16),a=`three-display--${r}`;let n=null;class o{static getGlobalSheet(){if(null===n){const t=document.createElement("style");t.setAttribute("id",a),document.head.appendChild(t),n=t.sheet}return n}static installRule(t,e){const i=`${t}-${r}`,s=`.${i}`;return o.getGlobalSheet().addRule(s,e),i}static addRule(t,e,i){const s=o.installRule(e,i);return t.classList.add(s),s}}var h,l,d,m,c,f;class w{constructor(i,s){if(h.set(this,!1),l.set(this,!1),d.set(this,-1),m.set(this,-1),c.set(this,void 0),f.set(this,!1),this.width=0,this.height=0,this.now=0,this.lastNow=0,this.deltaTime=0,this.frameNo=0,this.resizeToElement=void 0,this.resizeToCallback=void 0,e(this),this.resizeToCallback=null==s?void 0:s.resizeTo,i instanceof t)this.renderer=i,this.resizeToElement=i.domElement;else if(i instanceof HTMLElement){let e;"CANVAS"===i.tagName?e=i:(e=document.createElement("canvas"),i.appendChild(e)),this.resizeToElement=i,this.renderer=new t(Object.assign({canvas:e,precision:"highp",preserveDrawingBuffer:!1,powerPreference:"high-performance",stencil:!1,alpha:!0,antialias:!0},s))}const{domElement:r}=this.renderer;o.addRule(r,"three-display__Display","touch-action: none;"),r.setAttribute("touch-action","none"),this.resize()}get pause(){return i(this,h,"f")}set pause(t){i(this,l,"f")?t&&!i(this,h,"f")?this.stop():!t&&i(this,h,"f")&&this.start():s(this,h,t,"f")}get pixelRatio(){var t;return null!==(t=window.devicePixelRatio)&&void 0!==t?t:0}resize(){var t;let e=320,r=200,a=this.resizeToElement;const n=this.renderer.domElement;let h=i(this,f,"f");if(n.hasAttribute("resize-to")){const l=n.getAttribute("resize-to").trim();if(l.match(/^:?(fullscreen|window)$/)){e=window.innerWidth,r=window.innerHeight,a=void 0;let t=i(this,c,"f");t||(t=o.installRule("three-display__fullscreen","\n              position: fixed;\n              top: 0;\n              left: 0;\n            "),s(this,c,t,"f")),h?h=!1:(n.classList.add(t),s(this,f,!0,"f"))}else l&&(a=null!==(t=document.querySelector(l))&&void 0!==t?t:n)}if(h&&(n.classList.remove(i(this,c,"f")),s(this,f,!1,"f")),this.resizeToCallback){const t=this.resizeToCallback(this);t&&(e=t[0],r=t[1])}else if(a){const{width:t,height:i}=a.getBoundingClientRect(),s=getComputedStyle(a,null),n=parseInt(s.getPropertyValue("border-top-width")||"0",10)+parseInt(s.getPropertyValue("border-bottom-width")||"0",10)+parseInt(s.getPropertyValue("padding-top")||"0",10)+parseInt(s.getPropertyValue("padding-bottom")||"0",10),o=parseInt(s.getPropertyValue("border-right-width")||"0",10)+parseInt(s.getPropertyValue("border-left-width")||"0",10)+parseInt(s.getPropertyValue("padding-left")||"0",10)+parseInt(s.getPropertyValue("padding-right")||"0",10);e=Math.floor(t-o),r=Math.floor(i-n)}const{pixelRatio:l}=this;l===i(this,m,"f")&&e===this.width&&r===this.height||(this.width=e,this.height=r,s(this,m,l,"f"),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(e,r),this.frameNo>0&&this.emit("resize",this.getEmitArgs()))}renderFrame(t=window.performance.now()){i(this,h,"f")||(0===this.frameNo||0===this.lastNow?(this.now=t/1e3,this.lastNow=this.now,this.deltaTime=0):this.frameNo>0&&(this.lastNow=this.now,this.now=t/1e3,this.deltaTime=this.now-this.lastNow),this.resize(),0===this.frameNo&&this.emit("resize",this.getEmitArgs()),this.emit("frame",this.getEmitArgs()),++this.frameNo)}async start(t){s(this,h,!1,"f"),i(this,l,"f")||(this.emit("init",this.getEmitArgs()),null===document||void 0===document||document.addEventListener("visibilitychange",(()=>{this.pause=document.hidden,this.lastNow=0,this.emit(this.pause?"hide":"show",this.getEmitArgs())}),!1),s(this,l,!0,"f")),"function"==typeof t&&await t(this.getEmitArgs()),this.emit("start",this.getEmitArgs());const e=t=>{i(this,h,"f")||this.renderFrame(t),s(this,d,window.requestAnimationFrame(e),"f")};return s(this,d,window.requestAnimationFrame(e),"f"),this}stop(){window.cancelAnimationFrame(i(this,d,"f")),s(this,h,!0,"f"),this.lastNow=0,this.deltaTime=0}getEmitArgs(){return{display:this,renderer:this.renderer,width:this.width,height:this.height,now:this.now,deltaTime:this.deltaTime,frameNo:this.frameNo}}}h=new WeakMap,l=new WeakMap,d=new WeakMap,m=new WeakMap,c=new WeakMap,f=new WeakMap;export{w as Display};
//# sourceMappingURL=three-display.js.map
