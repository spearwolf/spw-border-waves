/*!
@file @spearwolf/vertex-objects - vertex-objects
@author Wolfger Schramm <wolfger@spearwolf.de>
@version 0.0.1+es2017.20220426

Copyright 2022 Wolfger Schramm

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
import{DataTexture as t,RGBAFormat as e,FloatType as s,StaticDrawUsage as i,StreamDrawUsage as r,DynamicDrawUsage as n,BufferAttribute as a,InterleavedBuffer as o,InterleavedBufferAttribute as u,InstancedInterleavedBuffer as h,InstancedBufferAttribute as f,InstancedBufferGeometry as c,BufferGeometry as l,ImageLoader as d,TextureLoader as p,Texture as m,NearestFilter as b,LinearFilter as g,FileLoader as y,Mesh as v}from"three";const w=Symbol("voBuffer"),A=Symbol("voIndex"),C=t=>{let e=1;for(;t>e;)e<<=1;return e};
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
***************************************************************************** */
function x(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)}function I(t,e,s,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,s):r?r.value=s:e.set(t,s),s}var N,z;const F=t=>Math.random()*t|0;class ${constructor(){N.set(this,[]),z.set(this,new Map)}add(...t){const e=x(this,N,"f").length;return(t=>"string"==typeof t[0]||"symbol"==typeof t[0])(t)?(x(this,z,"f").set(t[0],e),x(this,N,"f").push({coords:t[1],data:t[2]})):x(this,N,"f").push({coords:t[0],data:t[1]}),e}get size(){return x(this,N,"f").length}get(t){return x(this,N,"f")[t]}frameId(t){return x(this,z,"f").get(t)}frame(t){return x(this,N,"f")[x(this,z,"f").get(t)]}frameNames(t){const e=Array.from(x(this,z,"f").keys());if(null!=t){const s="string"==typeof t?new RegExp(t):t;return e.filter((t=>"string"==typeof t&&s.test(t)))}return e}randomFrameId(){return F(x(this,N,"f").length)}randomFrame(){return x(this,N,"f")[this.randomFrameId()]}randomFrameName(){const t=F(x(this,z,"f").size);let e=0;for(const s of x(this,z,"f").keys()){if(e===t)return s;++e}}randomFrameIds(t){const e=[];for(let s=0;s<t;s++)e.push(this.randomFrameId());return e}randomFrames(t){const e=[];for(let s=0;s<t;s++)e.push(this.randomFrame());return e}randomFrameNames(t){const e=[];for(let s=0;s<t;s++)e.push(this.randomFrameName());return e}}N=new WeakMap,z=new WeakMap;const L=(t,e,s)=>{let i=t,r=0;for(;null!=i.parent;)r+=i[e],i=i.parent;return r/i[s]},P=(t,e,s)=>{let i=t,r=t[s];for(;null!=i.parent;)r+=i[e],i=i.parent;return r/i[s]};class T{constructor(...t){var e,s,i,r,n,a,o,u;this.x=0,this.y=0,this.width=0,this.height=0,this.flip=0,t[0]instanceof T?(this.parent=t[0],this.x=null!==(e=t[1])&&void 0!==e?e:0,this.y=null!==(s=t[2])&&void 0!==s?s:0,this.width=null!==(i=t[3])&&void 0!==i?i:0,this.height=null!==(r=t[4])&&void 0!==r?r:0):(null==t?void 0:t.length)&&(this.x=null!==(n=t[0])&&void 0!==n?n:0,this.y=null!==(a=t[1])&&void 0!==a?a:0,this.width=null!==(o=t[2])&&void 0!==o?o:0,this.height=null!==(u=t[3])&&void 0!==u?u:0)}clone(){const t=new T;return t.parent=this.parent,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t.flip=this.flip,t}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get flipH(){return(this.flip&T.FLIP_HORIZONTAL)>0}set flipH(t){this.flip=(t?T.FLIP_HORIZONTAL:0)|this.flip&(T.FLIP_VERTICAL|T.FLIP_DIAGONAL)}get flipV(){return(this.flip&T.FLIP_VERTICAL)>0}set flipV(t){this.flip=(t?T.FLIP_VERTICAL:0)|this.flip&(T.FLIP_HORIZONTAL|T.FLIP_DIAGONAL)}get flipD(){return(this.flip&T.FLIP_DIAGONAL)>0}set flipD(t){this.flip=(t?T.FLIP_DIAGONAL:0)|this.flip&(T.FLIP_VERTICAL|T.FLIP_HORIZONTAL)}flipHorizontal(){return this.flipH=!this.flipH,this}flipVertical(){return this.flipV=!this.flipV,this}flipDiagonal(){return this.flipD=!this.flipD,this}get s(){const{flipD:t}=this;return this.flipH?P(this,t?"y":"x",t?"height":"width"):L(this,t?"y":"x",t?"height":"width")}get t(){const{flipD:t}=this;return this.flipV?P(this,t?"x":"y",t?"width":"height"):L(this,t?"x":"y",t?"width":"height")}get s1(){const{flipD:t}=this;return this.flipH?L(this,t?"y":"x",t?"height":"width"):P(this,t?"y":"x",t?"height":"width")}get t1(){const{flipD:t}=this;return this.flipV?L(this,t?"x":"y",t?"width":"height"):P(this,t?"x":"y",t?"width":"height")}get u(){return this.s1-this.s}get v(){return this.t1-this.t}}var O;T.FLIP_HORIZONTAL=1,T.FLIP_VERTICAL=2,T.FLIP_DIAGONAL=4;const M=t=>Math.random()*t|0;class E{constructor(...t){if(this.tileCount=0,this.firstFrameId=-1,O.set(this,(()=>{const{width:t,height:e}=this.baseCoords,{padding:s,margin:i,spacing:r,tileCountLimit:n}=this,a=this.tileWidth+(s<<1),o=this.tileHeight+(s<<1);let u=i,h=i,f=0;for(;;){const c=new T(this.baseCoords,u+s,h+s,this.tileWidth,this.tileHeight),l=this.atlas.add(c);if(-1===this.firstFrameId&&(this.firstFrameId=l),++f,n!==1/0&&f===n)break;const d=a+r;if(u+d+a+i<=t)u+=d;else if(u=i,h+=o+r,h+o+i>e)break}this.tileCount=f})),t[0]instanceof $){const[e,s,i]=t;this.atlas=e,this.baseCoords=s,this.options=i}else{this.atlas=new $;const[e,s]=t;this.baseCoords=e,this.options=s}x(this,O,"f").call(this)}get tileWidth(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.tileWidth)&&void 0!==e?e:this.baseCoords.width}get tileHeight(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.tileHeight)&&void 0!==e?e:this.baseCoords.height}get firstId(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.firstId)&&void 0!==e?e:1}get lastId(){return this.firstId+this.tileCount-1}get lastFrameId(){return this.firstFrameId+this.tileCount-1}get tileCountLimit(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.tileCount)&&void 0!==e?e:1/0}get margin(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.margin)&&void 0!==e?e:0}get padding(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.padding)&&void 0!==e?e:0}get spacing(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.spacing)&&void 0!==e?e:0}frameId(t){return((t-this.firstId)%this.tileCount+this.tileCount)%this.tileCount+this.firstFrameId}randomTileId(){return this.firstId+M(this.tileCount)}randomFrameId(){return this.firstFrameId+M(this.tileCount)}frame(t){return this.atlas.get(this.frameId(t))}randomFrame(){return this.atlas.get(this.randomFrameId())}}var S,D;O=new WeakMap;class j{constructor(){S.set(this,new Map),D.set(this,[])}add(...t){var e,s;let i,[r]=t;if(r){if(x(this,S,"f").has(r))throw new Error(`name='${r.toString()}' must be unique!`)}else r=Symbol("n/a");if(Array.isArray(t[2]))i=t[2];else if(t[2]instanceof $){const e=t[2];i=e.frameNames(t[3]).sort().map((t=>e.frame(t).coords))}else if(t[2]instanceof E){const r=t[2];if(Array.isArray(t[3])){i=t[3].map((t=>r.frame(t).coords))}else{const n=null!==(e=t[3])&&void 0!==e?e:r.firstId,a=null!==(s=t[4])&&void 0!==s?s:r.tileCount;i=[];for(let t=n;t<n+a;t++)i.push(r.frame(t).coords)}}const n=x(this,D,"f").length,[,a]=t;return x(this,D,"f").push(r),x(this,S,"f").set(r,{id:n,name:r,frames:i,duration:a}),n}animId(t){return x(this,S,"f").get(t).id}bakeDataTexture(i){const r=Boolean(null==i?void 0:i.includeTextureSize),n=((t,e=1,s=16384)=>{const i=Array.from(t.values()),r=i.reduce(((t,e)=>t+e.frames.length),0),n=i.length+r*e,a=C(n);if(a>s)throw new Error("TODO too many animation frames - we need better way here to calculate a corresponding buffer size!");return a})(x(this,S,"f"),r?2:1,j.MaxTextureSize),a=((t,e,s,i)=>{let r=e.length;return t.set(e.flatMap((t=>{const{frames:e,duration:n}=s.get(t),a=r;return r+=e.length*(i?2:1),[e.length,n,a,0]}))),t.set(i?e.flatMap((t=>s.get(t).frames.flatMap((({s:t,t:e,u:s,v:i,width:r,height:n})=>[t,e,s,i,r,n,0,0])))):e.flatMap((t=>s.get(t).frames.flatMap((({s:t,t:e,u:s,v:i})=>[t,e,s,i])))),4*e.length),t})(new Float32Array(4*n),x(this,D,"f"),x(this,S,"f"),r),o=new t(a,n,1,e,s);return o.needsUpdate=!0,o}}function k(t){return t[w].descriptor}function W(t,e){switch(t){case"float64":return new Float64Array(e);case"float32":return new Float32Array(e);case"float16":return new Uint16Array(e);case"uint32":return new Uint32Array(e);case"int32":return new Int32Array(e);case"uint16":return new Uint16Array(e);case"int16":return new Int16Array(e);case"uint8":return new Uint8Array(e);case"uint8clamped":return new Uint8ClampedArray(e);case"int8":return new Int8Array(e);default:throw new Error(`unknown typed-array data-type: '${t}'`)}}S=new WeakMap,D=new WeakMap,j.MaxTextureSize=16384;const U=(t,e,s)=>function(){const i=this[A]*e+s;return this[w].buffers.get(t).typedArray[i]},B=(t,e,s)=>function(i){const r=this[A]*e+s;this[w].buffers.get(t).typedArray[r]=i},V=(t,e,s,i,r)=>function(){const n=this[A]*s*e+i,a=this[w].buffers.get(t),o=a.typedArray,u=W(a.dataType,s*r);for(let t=0;t<s;t++)1===r?u[t]=o[n+t*e]:u.set(o.subarray(n+t*e,n+t*e+r),t*r);return u},_=(t,e,s,i,r)=>function(...n){const a=1===n.length&&Array.isArray(n[0])?n[0]:n,o=this[A]*s*e+i,u=this[w].buffers.get(t).typedArray;for(let t=0;t<s;t++)1===r?u[o+t*e]=a[t]:u.set(Array.prototype.slice.call(a,t*r,t*r+r),o+t*e)};class H{constructor(t,e){var s;let i;if("number"==typeof e?this.capacity=e:(i=e,this.capacity=i.capacity),t instanceof H){this.descriptor=t.descriptor,this.attributeNames=t.attributeNames,this.bufferAttributes=t.bufferAttributes,this.bufferNameAttributes=t.bufferNameAttributes,this.buffers=new Map;for(const[e,s]of t.buffers)this.buffers.set(e,{bufferName:e,itemSize:s.itemSize,dataType:s.dataType,usageType:s.usageType,typedArray:W(s.dataType,this.capacity*this.descriptor.vertexCount*s.itemSize)})}else{this.descriptor=t,this.buffers=new Map,this.bufferAttributes=new Map,this.attributeNames=Object.freeze(Array.from(this.descriptor.attributeNames).sort());for(const t of this.attributeNames){const e=this.descriptor.getAttribute(t),{bufferName:s}=e;let i=0;if(this.buffers.has(s)){const t=this.buffers.get(s);i=t.itemSize,t.itemSize+=e.size}else this.buffers.set(s,{bufferName:s,itemSize:e.size,dataType:e.dataType,usageType:e.usageType,typedArray:void 0});this.bufferAttributes.set(t,{bufferName:s,attributeName:t,offset:i})}for(const t of this.buffers.values())t.typedArray=null!==(s=null==i?void 0:i.buffers[t.bufferName])&&void 0!==s?s:W(t.dataType,this.capacity*this.descriptor.vertexCount*t.itemSize);this.bufferNameAttributes=new Map;for(const t of this.bufferAttributes.values()){const{bufferName:e}=t;this.bufferNameAttributes.has(e)?this.bufferNameAttributes.get(e).push(t):this.bufferNameAttributes.set(e,[t])}}this.descriptor.voPrototype||(this.descriptor.voPrototype=function(t,e){const{descriptor:s}=t,i=Object.fromEntries(s.attributeNames.flatMap((e=>{const i=s.getAttribute(e),r=t.bufferAttributes.get(e),n=t.buffers.get(r.bufferName),a=e.replace(/(^|_)([a-z])/g,((t,e,s)=>s.toUpperCase())),o=[];return 1===s.vertexCount&&1===i.size?o.push([e,{enumerable:!0,get:U(r.bufferName,n.itemSize,r.offset),set:B(r.bufferName,n.itemSize,r.offset)}]):o.push([`get${a}`,{enumerable:!0,value:V(r.bufferName,n.itemSize,s.vertexCount,r.offset,i.size)}],[`set${a}`,{enumerable:!0,value:_(r.bufferName,n.itemSize,s.vertexCount,r.offset,i.size)}]),i.hasComponents&&i.components.forEach(((t,e)=>{for(let a=0;a<s.vertexCount;a++){const u=s.vertexCount*n.itemSize,h=a*n.itemSize+r.offset+e;(s.vertexCount>1||t!==i.name)&&o.push([`${t}${1===s.vertexCount?"":a}`,{enumerable:!0,get:U(r.bufferName,u,h),set:B(r.bufferName,u,h)}])}})),o})));return Object.create(void 0!==e?e:Object.prototype,i)}(this,this.descriptor.basePrototype))}copy(t,e=0){const{vertexCount:s}=this.descriptor;for(const{bufferName:i,typedArray:r,itemSize:n}of this.buffers.values())r.set(t.buffers.get(i).typedArray,e*s*n)}clone(){const t=new H(this,this.capacity);return t.copy(this),t}copyWithin(t,e,s=this.capacity){const{vertexCount:i}=this.descriptor;for(const{typedArray:r,itemSize:n}of this.buffers.values())r.copyWithin(t*i*n,e*i*n,s*i*n)}copyAttributes(t,e=0){let s=0;for(const[i,r]of Object.entries(t)){const t=this.bufferAttributes.get(i);if(t){let n=0;const a=this.buffers.get(t.bufferName),{vertexCount:o}=this.descriptor,u=this.descriptor.getAttribute(i).size;let h=0,f=e*o*a.itemSize;for(;h<r.length&&n+e<this.capacity;){for(let e=0;e<o;e++)a.typedArray.set(Array.prototype.slice.call(r,h,h+u),f+t.offset),h+=u,f+=a.itemSize;++n}n>s&&(s=n)}}return s}toAttributeArrays(t,e=0,s=this.capacity){return Object.fromEntries(t.map((t=>{const i=this.bufferAttributes.get(t);if(i){const r=this.buffers.get(i.bufferName),{vertexCount:n}=this.descriptor,a=this.descriptor.getAttribute(t).size,o=W(r.dataType,(s-e)*n*a);let u=0,h=e*n*r.itemSize+i.offset;for(let t=e;t<s;t++)for(let e=0;e<n;e++)o.set(r.typedArray.subarray(h,h+a),u),u+=a,h+=r.itemSize;return[t,o]}return[t]})))}}class R{constructor(t,e){this.name=t,this.description=e}get dataType(){var t;return null!==(t=this.description.type)&&void 0!==t?t:"float32"}get normalizedData(){return Boolean(this.description.normalized)}get usageType(){var t;return null!==(t=this.description.usage)&&void 0!==t?t:"static"}get autoTouch(){var t;return null!==(t=this.description.autoTouch)&&void 0!==t?t:"static"!==this.usageType}get size(){var t,e,s;return null!==(s=null!==(t=this.description.size)&&void 0!==t?t:null===(e=this.description.components)||void 0===e?void 0:e.length)&&void 0!==s?s:1}get hasComponents(){var t;return(null===(t=this.description.components)||void 0===t?void 0:t.length)>0}get components(){var t;return null!==(t=this.description.components)&&void 0!==t?t:[]}get bufferName(){return`${this.usageType}_${this.dataType}${this.normalizedData?"N":""}`}}class G{constructor(t){this.description=t,this.attributes=new Map,this.bufferNames=new Set,Object.entries(this.description.attributes).forEach((([t,e])=>{const s=new R(t,e);this.attributes.set(t,s),this.bufferNames.add(s.bufferName)})),this.basePrototype=t.basePrototype}get vertexCount(){var t;return null!==(t=this.description.vertexCount)&&void 0!==t?t:1}get meshCount(){var t;return null!==(t=this.description.meshCount)&&void 0!==t?t:1}getInstanceCount(t){var e;const s=null!==(e=this.description.meshCount)&&void 0!==e?e:1;return s>1?Math.ceil(t/s):t}get hasIndices(){var t;return(null===(t=this.description.indices)||void 0===t?void 0:t.length)>0}get indices(){var t;return null!==(t=this.description.indices)&&void 0!==t?t:[]}get attributeNames(){return Array.from(this.attributes.keys())}getAttribute(t){return this.attributes.get(t)}}var Z,Y;const q=(t,e,s)=>Object.create(t.voPrototype,{[w]:{value:e,writable:!0},[A]:{value:s,writable:!0}});class J{constructor(t,e){if(Z.set(this,void 0),Y.set(this,0),this.descriptor=t instanceof G?t:new G(t),"number"==typeof e){const t=e;this.capacity=t,this.buffer=new H(this.descriptor,t)}else{const t=e;this.capacity=t.capacity,I(this,Y,t.usedCount,"f"),this.buffer=new H(this.descriptor,t)}I(this,Z,new Array(this.capacity),"f")}static setVoIndex(t,e){return t[A]=e,t}get usedCount(){return x(this,Y,"f")}set usedCount(t){t<x(this,Y,"f")&&x(this,Z,"f").fill(void 0,t,x(this,Y,"f")),I(this,Y,t<this.capacity?t:this.capacity,"f")}get availableCount(){return this.capacity-x(this,Y,"f")}clear(){this.usedCount=0}createVO(){if(x(this,Y,"f")<this.capacity){const t=this.usedCount++,e=q(this.descriptor,this.buffer,t);return x(this,Z,"f")[t]=e,e}}createFromAttributes(t){const e=x(this,Y,"f"),s=this.buffer.copyAttributes(t,e);return I(this,Y,x(this,Y,"f")+s,"f"),[s,e]}freeVO(t){if(t[w]===this.buffer){const e=t[A],s=x(this,Y,"f")-1;if(e===s)x(this,Z,"f")[e]=void 0;else{this.buffer.copyWithin(e,s,s+1);const t=x(this,Z,"f")[s];t[A]=e,x(this,Z,"f")[e]=t}this.usedCount--,t[w]=void 0}}getVO(t){let e=x(this,Z,"f")[t];return null==e&&t<x(this,Y,"f")&&(e=q(this.descriptor,this.buffer,t),x(this,Z,"f")[t]=e),e}toBuffersData(){return{capacity:this.capacity,usedCount:this.usedCount,buffers:Object.fromEntries(Array.from(this.buffer.buffers.values()).map((t=>[t.bufferName,t.typedArray])))}}}function K(t){switch(t){case"dynamic":return n;case"stream":return r;default:return i}}function Q(t,e,s){const{descriptor:i,capacity:r}=e;if(i.hasIndices){const{indices:e}=i,s=new a(function(t,e){const s=t.length,i=new Uint32Array(e*s),r=Math.max(...t)+1;for(let n=0;n<e;n++)for(let e=0;e<s;e++)i[n*s+e]=t[e]+n*r;return i}(e,r),3);s.count=r*e.length,t.setIndex(s)}for(const n of e.buffer.buffers.values()){const r=e.buffer.bufferNameAttributes.get(n.bufferName);if(r.length>1){const e=new o(n.typedArray,n.itemSize);e.setUsage(K(n.usageType)),s.set(n.bufferName,e);for(const s of r){const r=i.attributes.get(s.attributeName),n=new u(e,r.size,s.offset,r.normalizedData);n.name=s.attributeName,t.setAttribute(r.name,n)}}else{const e=r[0],o=i.attributes.get(e.attributeName),u=new a(n.typedArray,n.itemSize,o.normalizedData);u.setUsage(K(n.usageType)),u.name=e.attributeName,s.set(n.bufferName,u),t.setAttribute(o.name,u)}}}function X(t,e,s){const i=new Set;for(const r of s){const e=t.buffer.bufferAttributes.get(r);e&&i.add(e.bufferName)}return Array.from(i.values()).map((t=>e.get(t)))}function tt(t,e){const s=[];for(const[i,r]of Object.entries(e))if(!0===r){const e=K(i);s.push(...Array.from(t.values()).filter((t=>t.usage===e)))}return s}var et,st,it,rt;Z=new WeakMap,Y=new WeakMap;class nt extends c{constructor(...t){var e;super(),this.instancedBuffers=new Map,et.set(this,(()=>{this.basePool?this.setDrawRange(0,this.basePool.descriptor.hasIndices?this.basePool.usedCount*this.basePool.descriptor.indices.length:this.basePool.usedCount*this.basePool.descriptor.vertexCount):this.setDrawRange(0,1/0)})),st.set(this,(()=>{const t=x(this,rt,"f").call(this);t.length&&this.touchAttributes(...t)})),it.set(this,void 0),rt.set(this,(()=>{if(!x(this,it,"f")){const t=[...Array.from(this.instancedPool.descriptor.attributes.values())];this.basePool&&t.push(...Array.from(this.basePool.descriptor.attributes.values())),I(this,it,t.filter((t=>t.autoTouch)).map((t=>t.name)),"f")}return x(this,it,"f")}));const[s,i]=t;if(this.instancedPool=s instanceof J?s:new J(s,i),this.name="InstancedVertexObjectGeometry",t[2]instanceof l)this.copy(t[2]);else{const s=t[2],i=null!==(e=t[3])&&void 0!==e?e:1;this.basePool=s instanceof J?s:new J(s,i),this.baseBuffers=new Map,Q(this,this.basePool,this.baseBuffers)}!function(t,e,s){const{descriptor:i}=e,r=i.meshCount;for(const n of e.buffer.buffers.values()){const a=e.buffer.bufferNameAttributes.get(n.bufferName);if(a.length>1){const e=new h(n.typedArray,n.itemSize,r);e.setUsage(K(n.usageType)),s.set(n.bufferName,e);for(const s of a){const r=i.attributes.get(s.attributeName),n=new u(e,r.size,s.offset,r.normalizedData);n.name=s.attributeName,t.setAttribute(r.name,n)}}else{const e=a[0],o=i.attributes.get(e.attributeName),u=new f(n.typedArray,n.itemSize,o.normalizedData,r);u.setUsage(K(n.usageType)),u.name=e.attributeName,s.set(n.bufferName,u),t.setAttribute(o.name,u)}}}(this,this.instancedPool,this.instancedBuffers)}dispose(){var t;null===(t=this.basePool)||void 0===t||t.clear(),this.instancedPool.clear(),super.dispose()}touchAttributes(...t){this.basePool&&X(this.basePool,this.baseBuffers,t).forEach((t=>{t.needsUpdate=!0})),X(this.instancedPool,this.instancedBuffers,t).forEach((t=>{t.needsUpdate=!0}))}touchBuffers(t){"base"in t||"instanced"in t?(t.base&&this.baseBuffers&&tt(this.baseBuffers,t.base).forEach((t=>{t.needsUpdate=!0})),t.instanced&&tt(this.instancedBuffers,t.instanced).forEach((t=>{t.needsUpdate=!0}))):tt(this.instancedBuffers,t).forEach((t=>{t.needsUpdate=!0}))}touch(...t){const e=[];let s;t.forEach((t=>{"string"==typeof t?e.push(t):s=Object.assign(Object.assign({},s),t)})),e.length&&this.touchAttributes(...e),s&&this.touchBuffers(s)}update(){x(this,st,"f").call(this),x(this,et,"f").call(this),this.instanceCount=this.instancedPool.usedCount}}et=new WeakMap,st=new WeakMap,it=new WeakMap,rt=new WeakMap;const at=t=>0!==t&&0==(t&t-1);var ot;class ut{constructor(){ot.set(this,void 0)}get imageLoader(){return x(this,ot,"f")||I(this,ot,new d,"f"),x(this,ot,"f")}set imageLoader(t){I(this,ot,t,"f")}load(t,e,s){this.imageLoader.load(t,(t=>{if(at(t.width)&&at(t.height))e({imgEl:t,texCoords:new T(0,0,t.width,t.height)});else{const s=C(t.width),i=C(t.height),r=document.createElement("canvas");r.width=s,r.height=i,r.getContext("2d").drawImage(t,0,0);const n=new T(0,0,s,i),a=new T(n,0,0,t.width,t.height);e({imgEl:r,texCoords:a})}}),void 0,s)}loadAsync(t){return new Promise(((e,s)=>{this.load(t,e,s)}))}}ot=new WeakMap;const ht=t=>"number"==typeof t;function ft(t,e){if(ht(t)&&ht(e))return t+e;if(ht(t))switch(t){case 0:return e;default:return`${t} + ${e}`}else{if(!ht(e))return`${t} + ${e}`;switch(e){case 0:return t;default:return`${t} + ${e}`}}}function ct(t,e){if(ht(t)&&ht(e))return t-e;if(ht(t))switch(t){case 0:return`-${e}`;default:return`${t} - ${e}`}else{if(!ht(e))return`${t} - ${e}`;switch(e){case 0:return t;default:return`${t} - ${e}`}}}function lt(t,e){if(ht(e)&&ht(t))return t*e;if(ht(t))switch(t){case 0:return 0;case 1:return e;default:return`${t} * ${e}`}else{if(!ht(e))return`${t} * ${e}`;switch(e){case 0:return 0;case 1:return t;default:return`${t} * ${e}`}}}function dt(t){const e=`${t}`.trim();return e.match(/^[0-9]+$/)?`${e}.0`:e}const pt=t=>`return ${t};`;function mt(t=0,e=0,s=0,i=0,r=0,n=0,a=0,o=0,u=0,h=0,f=0,c=0,l=0,d=0,p=0,m=1,b=dt){const g=b||(t=>`${t}`);return`mat4(${g(t)}, ${g(e)}, ${g(s)}, ${g(i)}, ${g(r)}, ${g(n)}, ${g(a)}, ${g(o)}, ${g(u)}, ${g(h)}, ${g(f)}, ${g(c)}, ${g(l)}, ${g(d)}, ${g(p)}, ${g(m)})`}const bt=(t="rotate",e=0,s=0,i=1)=>`\nmat4 ${t}(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1.0 - c;\n  ${pt(mt(ft(lt("oc",e*e),"c"),ct(lt("oc",e*s),lt(i,"s")),ft(lt("oc",i*e),lt(s,"s")),0,ft(lt("oc",e*s),lt(i,"s")),ft(lt("oc",s*s),"c"),ct(lt("oc",s*i),lt(e,"s")),0,ct(lt("oc",i*e),lt(s,"s")),ft(lt("oc",s*i),lt(e,"s")),ft(lt("oc",i*i),"c")))}\n}`,gt={add:ft,asFloat:dt,mat4:mt,mul:lt,ret:pt,rotate:bt,rotateZ:(t="rotateZ")=>bt(t,0,0,1),sub:ct};var yt,vt;const wt={anisotrophy:{anisotrophy:1/0},"anisotrophy-2":{anisotrophy:2},"anisotrophy-4":{anisotrophy:4},"no-anisotrophy":{anisotrophy:0},nearest:{magFilter:b,minFilter:b},"mag-nearest":{magFilter:b},"min-nearest":{minFilter:b},linear:{magFilter:g,minFilter:g},"mag-linear":{magFilter:g},"min-linear":{minFilter:g},flipy:{flipY:!0},"no-flipy":{flipY:!1}},At={"no-anisotrophy":1e3,"anisotrophy-2":500,"anisotrophy-4":250,anisotrophy:0,nearest:1e3,"mag-nearest":500,"min-nearest":500,linear:1e3,"mag-linear":500,"min-linear":500,flipy:10,"no-flipy":0};class Ct{constructor(t=0,e=["nearest"],s){yt.set(this,0),vt.set(this,void 0),I(this,yt,"number"==typeof t?t:t.capabilities.getMaxAnisotropy(),"f"),I(this,vt,null!=s?s:{anisotrophy:0,flipY:!1},"f"),I(this,vt,this.getOptions(e),"f"),this.textureLoader=new p}getOptions(t){const e=Object.assign({},x(this,vt,"f"),...t.map((t=>[At[t],wt[t]])).sort((([t],[e])=>e-t)).map((([,t])=>t)));return e.anisotrophy=Math.min(e.anisotrophy,x(this,yt,"f")),e}create(t,...e){const s=new m(t);return this.update(s,...e)}update(t,...e){return Object.assign(t,this.getOptions(e)),t.needsUpdate=!0,t}load(t,...e){return this.textureLoader.load(t,(t=>{this.update(t,...e)}))}}yt=new WeakMap,vt=new WeakMap;class xt{constructor(t=new Ct,e=new ut){this.textureFactory=t,this.imageLoader=e}load(t,e,s,i){this.imageLoader.load(t,(t=>{const i=new m(t.imgEl);this.textureFactory.update(i,...null!=e?e:[]),s({texture:i,imgEl:t.imgEl,texCoords:t.texCoords})}),i)}loadAsync(t,e){return new Promise(((s,i)=>{this.load(t,e,s,i)}))}}class It{static parse(t,e,s){null!=s||(s=new $),null!=e||(e=new T(0,0,t.meta.size.w,t.meta.size.h));for(const[i,{frame:r}]of Object.entries(t.frames))s.add(i,new T(e,r.x,r.y,r.w,r.h));return[s,t.meta]}}class Nt{constructor(t){var e,s;this.fileLoader=null!==(e=null==t?void 0:t.fileLoader)&&void 0!==e?e:(()=>{const t=new y;return t.setResponseType("json"),t})(),this.textureImageLoader=null!==(s=null==t?void 0:t.textureImageLoader)&&void 0!==s?s:new xt}load(t,e,s,i,r){this.fileLoader.load(t,(t=>{var n;const a=null!==(n=null==s?void 0:s.overrideImageUrl)&&void 0!==n?n:t.meta.image;this.textureImageLoader.load(a,e,(({texture:e,imgEl:s,texCoords:r})=>{const[n,a]=It.parse(t,r);i({atlas:n,meta:a,texture:e,imgEl:s,texCoords:r})}),r)}),(t=>{}),r)}loadAsync(t,e,s){return new Promise(((i,r)=>{this.load(t,e,s,i,r)}))}}class zt{constructor(t=new Ct,e=new ut){this.textureFactory=t,this.imageLoader=e}load(t,e,s,i){this.imageLoader.load(t,(i=>{const r=new m(i.imgEl);r.name=t,this.textureFactory.update(r);const n=new E(i.texCoords,e);s({texture:r,tileSet:n,imgEl:i.imgEl,texCoords:i.texCoords})}),i)}loadAsync(t,e){return new Promise(((s,i)=>{this.load(t,e,s,i)}))}}const Ft=(t,...e)=>t?Object.fromEntries(Object.entries(t).filter((([t])=>!e.includes(t)))):void 0;var $t,Lt,Pt,Tt;class Ot extends l{constructor(t,e){super(),this.buffers=new Map,$t.set(this,(()=>{this.setDrawRange(0,this.pool.descriptor.hasIndices?this.pool.usedCount*this.pool.descriptor.indices.length:this.pool.usedCount*this.pool.descriptor.vertexCount)})),Lt.set(this,(()=>{const t=x(this,Tt,"f").call(this);t.length&&this.touchAttributes(...t)})),Pt.set(this,void 0),Tt.set(this,(()=>(x(this,Pt,"f")||I(this,Pt,Array.from(this.pool.descriptor.attributes.values()).filter((t=>t.autoTouch)).map((t=>t.name)),"f"),x(this,Pt,"f")))),this.pool=t instanceof J?t:new J(t,e),this.name="VertexObjectGeometry",Q(this,this.pool,this.buffers)}dispose(){this.pool.clear(),super.dispose()}touchAttributes(...t){X(this.pool,this.buffers,t).forEach((t=>{t.needsUpdate=!0}))}touchBuffers(t){tt(this.buffers,t).forEach((t=>{t.needsUpdate=!0}))}touch(...t){const e=[];let s;t.forEach((t=>{"string"==typeof t?e.push(t):s=Object.assign(Object.assign({},s),t)})),e.length&&this.touchAttributes(...e),s&&this.touchBuffers(s)}update(){x(this,Lt,"f").call(this),x(this,$t,"f").call(this)}}$t=new WeakMap,Lt=new WeakMap,Pt=new WeakMap,Tt=new WeakMap;class Mt extends v{constructor(t,e){super(t,e),this.onBeforeRender=()=>{var t;null===(t=this.geometry)||void 0===t||t.update()},this.name="VertexObjects"}}export{j as FrameBasedAnimations,nt as InstancedVertexObjectGeometry,ut as PowerOf2ImageLoader,gt as ShaderTool,$ as TextureAtlas,Nt as TextureAtlasLoader,T as TextureCoords,Ct as TextureFactory,xt as TextureImageLoader,It as TexturePackerJson,E as TileSet,zt as TileSetLoader,R as VertexAttributeDescriptor,H as VertexObjectBuffer,G as VertexObjectDescriptor,Ot as VertexObjectGeometry,J as VertexObjectPool,Mt as VertexObjects,C as findNextPowerOf2,k as getDescriptorOf,Ft as unpick,w as voBuffer,A as voIndex};
//# sourceMappingURL=vertex-objects.js.map
