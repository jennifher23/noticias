(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function pa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.A=this.m=0;this.C=this.j=null}
function qa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
pa.prototype.B=function(a){this.i=a};
function ra(a,b){a.j={Xa:b,Za:!0};a.h=a.m||a.A}
pa.prototype.return=function(a){this.j={return:a};this.h=this.A};
function w(a,b,c){a.h=c;return{value:b}}
pa.prototype.o=function(a){this.h=a};
function sa(a,b,c){a.m=b;void 0!=c&&(a.A=c)}
function ta(a){a.m=0;var b=a.j.Xa;a.j=null;return b}
function ua(a){a.C=[a.j];a.m=0;a.A=0}
function va(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.Za?a.h=a.m||a.A:void 0!=b.o&&a.A<b.o?(a.h=b.o,a.j=null):a.h=a.A:a.h=0}
function wa(a){this.h=new pa;this.i=a}
function xa(a,b){qa(a.h);var c=a.h.l;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Aa(a)}
function ya(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,ra(a.h,g),Aa(a)}a.h.l=null;d.call(a.h,f);return Aa(a)}
function Aa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ra(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Za)throw b.Xa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){qa(a.h);a.h.l?b=ya(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=Aa(a));return b};
this.throw=function(b){qa(a.h);a.h.l?b=ya(a,a.h.l["throw"],b,a.h.B):(ra(a.h,b),b=Aa(a));return b};
this.return=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new Ba(new wa(b));oa&&a.prototype&&oa(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Ca(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ea(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
var Fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Fa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.A()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.A=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.A)}};
b.prototype.S=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.L(g):this.m(g)}};
b.prototype.L=function(g){var h=void 0;try{h=g.then}catch(k){this.A(k);return}"function"==typeof h?this.ga(h,g):this.m(g)};
b.prototype.A=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.T();this.C()};
b.prototype.T=function(){var g=this;e(function(){if(g.J()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.J=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.qa(h.resolve,h.reject)};
b.prototype.ga=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(y){try{l(r(y))}catch(B){n(B)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.qa(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.qa=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).qa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(y){return function(B){r[y]=B;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).qa(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ea(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push(b[d]);return c}});
var z=this||self;function A(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ha(){}
function Ia(a){a.Ia=void 0;a.getInstance=function(){return a.Ia?a.Ia:a.Ia=new a}}
function Ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ka(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa=Qa:Sa=Ra;return Sa.apply(null,arguments)}
function Ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ua(a,b){A(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Dm=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Va(a){return a}
;function Wa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Wa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.pb=b)}
D(Wa,Error);Wa.prototype.name="CustomError";function Xa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Ya(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$a=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ab=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},bb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function cb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function db(a,b){b=Za(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a){for(var b in a)return!1;return!0}
function kb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function lb(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ob(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ob(a[c]);return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){if(void 0===rb){var a=null,b=z.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Va,createScript:Va,createScriptURL:Va})}catch(c){z.console&&z.console.error(c.message)}rb=a}else rb=a}return rb}
;function tb(a,b){this.h=a===ub&&b||""}
tb.prototype.W=!0;tb.prototype.V=function(){return this.h};
function vb(a){return new tb(ub,a)}
var ub={};vb("");var wb={};function xb(a){this.h=wb===wb?a:"";this.W=!0}
xb.prototype.V=function(){return this.h.toString()};
xb.prototype.toString=function(){return this.h.toString()};function yb(a,b){this.h=b===zb?a:""}
m=yb.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.Ha=!0;m.Da=function(){return 1};
m.toString=function(){return this.h+""};
function Ab(a){if(a instanceof yb&&a.constructor===yb)return a.h;Ja(a);return"type_error:TrustedResourceUrl"}
var zb={};function Bb(a){var b=sb();a=b?b.createScriptURL(a):a;return new yb(a,zb)}
;var Cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Db=/&/g,Eb=/</g,Fb=/>/g,Gb=/"/g,Hb=/'/g,Ib=/\x00/g,Jb=/[\x00&<>"']/;function Kb(a,b){this.h=b===Lb?a:""}
m=Kb.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.Ha=!0;m.Da=function(){return 1};
m.toString=function(){return this.h.toString()};
function Nb(a){if(a instanceof Kb&&a.constructor===Kb)return a.h;Ja(a);return"type_error:SafeUrl"}
var Ob=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Pb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Lb={},Rb=new Kb("about:invalid#zClosurez",Lb);var Sb;a:{var Tb=z.navigator;if(Tb){var Ub=Tb.userAgent;if(Ub){Sb=Ub;break a}}Sb=""}function H(a){return-1!=Sb.indexOf(a)}
;function Vb(){return H("Firefox")||H("FxiOS")}
function Wb(){return(H("Chrome")||H("CriOS"))&&!H("Edge")}
;var Xb={};function Yb(a,b,c){this.h=c===Xb?a:"";this.i=b;this.W=this.Ha=!0}
Yb.prototype.Da=function(){return this.i};
Yb.prototype.V=function(){return this.h.toString()};
Yb.prototype.toString=function(){return this.h.toString()};
function Zb(a,b){var c=sb();a=c?c.createHTML(a):a;return new Yb(a,b,Xb)}
;function $b(a,b){b instanceof Kb||b instanceof Kb||(b="object"==typeof b&&b.W?b.V():String(b),Qb.test(b)||(b="about:invalid#zClosurez"),b=new Kb(b,Lb));a.href=Nb(b)}
function ac(a,b){a.rel="stylesheet";a.href=Ab(b).toString();(b=bc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function cc(){return bc("script[nonce]",void 0)}
var dc=/^[\w+/_-]+[=]{0,2}$/;function bc(a,b){b=(b||z).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&dc.test(a)?a:"":""}
;function ec(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gc(a){return a?decodeURI(a):a}
function hc(a){return gc(a.match(fc)[3]||null)}
function ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function jc(a){var b=[],c;for(c in a)ic(c,a[c],b);return b.join("&")}
function kc(a,b){b=jc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var lc=/#|$/;function I(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function mc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function nc(a){nc[" "](a);return a}
nc[" "]=Ha;var oc=H("Opera"),pc=H("Trident")||H("MSIE"),qc=H("Edge"),rc=H("Gecko")&&!(-1!=Sb.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),sc=-1!=Sb.toLowerCase().indexOf("webkit")&&!H("Edge"),tc=H("Android");function uc(){var a=z.document;return a?a.documentMode:void 0}
var vc;a:{var wc="",xc=function(){var a=Sb;if(rc)return/rv:([^\);]+)(\)|;)/.exec(a);if(qc)return/Edge\/([\d\.]+)/.exec(a);if(pc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(sc)return/WebKit\/(\S+)/.exec(a);if(oc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
xc&&(wc=xc?xc[1]:"");if(pc){var yc=uc();if(null!=yc&&yc>parseFloat(wc)){vc=String(yc);break a}}vc=wc}var zc=vc,Ac;if(z.document&&pc){var Bc=uc();Ac=Bc?Bc:parseInt(zc,10)||void 0}else Ac=void 0;var Cc=Ac;Vb();var Dc=mc()||H("iPod"),Ec=H("iPad");!H("Android")||Wb()||Vb();Wb();var Fc=H("Safari")&&!(Wb()||H("Coast")||H("Opera")||H("Edge")||H("Edg/")||H("OPR")||Vb()||H("Silk")||H("Android"))&&!(mc()||H("iPad")||H("iPod"));var Gc={},Hc=null;
function Ic(a){var b=3;Ka(a);void 0===b&&(b=0);if(!Hc){Hc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Gc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Hc[h]&&(Hc[h]=g)}}}b=Gc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Jc={Hm:{value:!0,configurable:!0}};var Kc=Object,Lc=Kc.freeze,Mc=[];Array.isArray(Mc)&&!Object.isFrozen(Mc)&&Object.defineProperties(Mc,Jc);Lc.call(Kc,Mc);var Nc=window;vb("csi.gstatic.com");vb("googleads.g.doubleclick.net");vb("pagead2.googlesyndication.com");vb("partner.googleadservices.com");vb("pubads.g.doubleclick.net");vb("securepubads.g.doubleclick.net");vb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Oc={};function Pc(){}
function Qc(a){this.h=a}
v(Qc,Pc);Qc.prototype.toString=function(){return this.h};
var Rc=new Qc("about:invalid#zTSz",Oc);function Sc(a){if(a instanceof Pc)if(a instanceof Qc)a=a.h;else throw Error("");else a=Nb(a);return a}
;function Tc(a,b){a.src=Ab(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Uc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Uc.prototype;m.clone=function(){return new Uc(this.x,this.y)};
m.equals=function(a){return a instanceof Uc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Vc(a,b){this.width=a;this.height=b}
m=Vc.prototype;m.clone=function(){return new Vc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Wc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Xc(a,b){gb(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Yc.hasOwnProperty(d)?a.setAttribute(Yc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Yc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Zc(a,b,c){var d=arguments,e=document,f=d[1],g=$c(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):Xc(g,f));2<d.length&&ad(e,g,d);return g}
function ad(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ka(f)||Ma(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ma(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?eb(f):f,d)}}}
function $c(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function bd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function cd(a){var b=dd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function ed(){var a=[];cd(function(b){a.push(b)});
return a}
var dd={ic:"allow-forms",jc:"allow-modals",kc:"allow-orientation-lock",lc:"allow-pointer-lock",mc:"allow-popups",nc:"allow-popups-to-escape-sandbox",oc:"allow-presentation",pc:"allow-same-origin",qc:"allow-scripts",sc:"allow-top-navigation",tc:"allow-top-navigation-by-user-activation"},fd=Ya(function(){return ed()});
function gd(){var a=$c(document,"IFRAME"),b={};E(fd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function hd(a){this.isValid=a}
function id(a){return new hd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var jd=[id("data"),id("http"),id("https"),id("mailto"),id("ftp"),new hd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function kd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ld=(new Date).getTime();function md(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function nd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],B=e[2],G=e[3],R=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var P=G^y&(B^G);var J=1518500249}else P=y^B^G,J=1859775393;else 60>q?(P=y&B|G&(y|B),J=2400959708):(P=y^B^G,J=3395469782);P=((p<<5|p>>>27)&4294967295)+P+R+J+r[q]&4294967295;R=G;G=B;B=(y<<30|y>>>2)&4294967295;y=p;p=P}e[0]=e[0]+p&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+B&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+R&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],y=0,B=p.length;y<B;++y)q.push(p.charCodeAt(y));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var y=24;0<=y;y-=8)p[r++]=e[q]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,rb:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function od(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,pd(md(d),a,c||null)].join(" "):null}
function pd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),qd(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=qd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function qd(a){var b=nd();b.update(a);return b.rb().toLowerCase()}
;var rd={};function sd(a){this.h=a||{cookie:""}}
m=sd.prototype;m.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ja:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Mm;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ja}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Cb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ja:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Cb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var td=new sd("undefined"==typeof document?null:document);function ud(a){return!!rd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function vd(a){a=void 0===a?!1:a;var b=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;ud(a)&&(b=b||z.__1PSAPISID);if(b)return!0;var c=new sd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");ud(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function wd(a,b,c,d){(a=z[a])||(a=(new sd(document)).get(b));return a?od(a,c,d):null}
function xd(a){var b=void 0===b?!1:b;var c=md(String(z.location.href)),d=[];if(vd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?z.__SAPISID:z.__APISID;e||(e=new sd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?od(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&ud(b)&&((b=wd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=wd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function yd(){this.data_=[];this.h=-1}
yd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
yd.prototype.get=function(a){return!!this.data_[a]};
function zd(a){-1==a.h&&(a.h=bb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ad(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ad.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Bd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Cd;
function Dd(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=$c(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ta;c.Ta=null;e()}};
return function(e){d.next={Ta:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function Ed(a){z.setTimeout(function(){throw a;},0)}
;function Fd(){this.i=this.h=null}
Fd.prototype.add=function(a,b){var c=Gd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Fd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Gd=new Ad(function(){return new Hd},function(a){return a.reset()});
function Hd(){this.next=this.scope=this.h=null}
Hd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Hd.prototype.reset=function(){this.next=this.scope=this.h=null};function Id(a,b){Jd||Kd();Ld||(Jd(),Ld=!0);Md.add(a,b)}
var Jd;function Kd(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);Jd=function(){a.then(Nd)}}else Jd=function(){var b=Nd;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!H("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(Cd||(Cd=Dd()),Cd(b)):z.setImmediate(b)}}
var Ld=!1,Md=new Fd;function Nd(){for(var a;a=Md.remove();){try{a.h.call(a.scope)}catch(b){Ed(b)}Bd(Gd,a)}Ld=!1}
;function Od(a,b){this.h=a[z.Symbol.iterator]();this.i=b;this.j=0}
Od.prototype[Symbol.iterator]=function(){return this};
Od.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Pd(a,b){return new Od(a,b)}
;function Qd(){this.blockSize=-1}
;function Rd(){this.blockSize=-1;this.blockSize=64;this.h=[];this.A=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
D(Rd,Qd);Rd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Sd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Rd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.A,f=this.i;d<b;){if(0==f)for(;d<=c;)Sd(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Sd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Sd(this,e);f=0;break}}this.i=f;this.l+=b}};
Rd.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.A[c]=b&255,b/=256;Sd(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Td(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ud(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Vd[c])c=Vd[c];else{c=String(c);if(!Vd[c]){var f=/function\s+([^\(]+)/m.exec(c);Vd[c]=f?f[1]:"[Anonymous]"}c=Vd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ud(a,b){b||(b={});b[Wd(a)]=!0;var c=a.stack||"";(a=a.pb)&&!b[Wd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ud(a,b));return c}
function Wd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Vd={};function Xd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Yd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ka(d)?Yd.apply(null,d):Xd(d)}}
;function K(){this.h=this.h;this.A=this.A}
K.prototype.h=!1;K.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function Zd(a,b){a.h?b():(a.A||(a.A=[]),a.A.push(b))}
K.prototype.D=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function $d(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ae(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function be(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:$d(a).match(/\S+/g)||[],b=0<=Za(a,b));return b}
function ce(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):be(a,"inverted-hdpi")&&ae(a,Array.prototype.filter.call(a.classList?a.classList:$d(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var de="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function ee(){}
ee.prototype.P=function(){throw de;};
ee.prototype.M=function(){return this};function fe(a){if(a instanceof ge||a instanceof he||a instanceof ie)return a;if("function"==typeof a.P)return new ge(function(){return je(a)});
if("function"==typeof a[Symbol.iterator])return new ge(function(){return a[Symbol.iterator]()});
if("function"==typeof a.M)return new ge(function(){return je(a.M())});
throw Error("Not an iterator or iterable.");}
function je(a){if(!(a instanceof ee))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.P();break}catch(d){if(d!==de)throw d;b=!0}return{value:c,done:b}}}}
function ge(a){this.i=a}
ge.prototype.M=function(){return new he(this.i())};
ge.prototype[Symbol.iterator]=function(){return new ie(this.i())};
ge.prototype.h=function(){return new ie(this.i())};
function he(a){this.i=a}
v(he,ee);he.prototype.P=function(){var a=this.i.next();if(a.done)throw de;return a.value};
he.prototype[Symbol.iterator]=function(){return new ie(this.i)};
he.prototype.h=function(){return new ie(this.i)};
function ie(a){ge.call(this,function(){return a});
this.j=a}
v(ie,ge);ie.prototype.next=function(){return this.j.next()};function ke(a,b){this.i={};this.h=[];this.ba=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ke)for(c=le(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function le(a){me(a);return a.h.concat()}
m=ke.prototype;m.has=function(a){return ne(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||oe;me(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function oe(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.ba=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return ne(this.i,a)?(delete this.i[a],--this.size,this.ba++,this.h.length>2*this.size&&me(this),!0):!1};
function me(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];ne(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],ne(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return ne(this.i,a)?this.i[a]:b};
m.set=function(a,b){ne(this.i,a)||(this.size+=1,this.h.push(a),this.ba++);this.i[a]=b};
m.forEach=function(a,b){for(var c=le(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new ke(this)};
m.keys=function(){return fe(this.M(!0)).h()};
m.values=function(){return fe(this.M(!1)).h()};
m.entries=function(){var a=this;return Pd(this.keys(),function(b){return[b,a.get(b)]})};
m.M=function(a){me(this);var b=0,c=this.ba,d=this,e=new ee;e.P=function(){if(c!=d.ba)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw de;var f=d.h[b++];return a?f:d.i[f]};
return e};
function ne(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function pe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
pe.prototype.stopPropagation=function(){this.j=!0};
pe.prototype.preventDefault=function(){this.defaultPrevented=!0};var qe=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",Ha,b),z.removeEventListener("test",Ha,b)}catch(c){}return a}();function re(a,b){pe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(re,pe);var se={2:"touch",3:"pen",4:"mouse"};
re.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(rc){a:{try{nc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:se[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&re.O.preventDefault.call(this)};
re.prototype.stopPropagation=function(){re.O.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
re.prototype.preventDefault=function(){re.O.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var te="closure_listenable_"+(1E6*Math.random()|0);var ue=0;function ve(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.va=e;this.key=++ue;this.ka=this.oa=!1}
function we(a){a.ka=!0;a.listener=null;a.proxy=null;a.src=null;a.va=null}
;function xe(a){this.src=a;this.listeners={};this.h=0}
xe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ye(a,b,d,e);-1<g?(b=a[g],c||(b.oa=!1)):(b=new ve(b,this.src,f,!!d,e),b.oa=c,a.push(b));return b};
xe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ye(e,b,c,d);return-1<b?(we(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ze(a,b){var c=b.type;c in a.listeners&&db(a.listeners[c],b)&&(we(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ye(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ka&&f.listener==b&&f.capture==!!c&&f.va==d)return e}return-1}
;var Ae="closure_lm_"+(1E6*Math.random()|0),Be={},Ce=0;function De(a,b,c,d,e){if(d&&d.once)Ee(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)De(a,b[f],c,d,e);else c=Fe(c),a&&a[te]?a.X(b,c,Ma(d)?!!d.capture:!!d,e):Ge(a,b,c,!1,d,e)}
function Ge(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=He(a);h||(a[Ae]=h=new xe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ie();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)qe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Je(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ce++}}
function Ie(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ke;return a}
function Ee(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ee(a,b[f],c,d,e);else c=Fe(c),a&&a[te]?a.i.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):Ge(a,b,c,!0,d,e)}
function Le(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Le(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=Fe(c),a&&a[te])?a.i.remove(String(b),c,d,e):a&&(a=He(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ye(b,c,d,e)),(c=-1<a?b[a]:null)&&Me(c))}
function Me(a){if("number"!==typeof a&&a&&!a.ka){var b=a.src;if(b&&b[te])ze(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Je(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ce--;(c=He(b))?(ze(c,a),0==c.h&&(c.src=null,b[Ae]=null)):we(a)}}}
function Je(a){return a in Be?Be[a]:Be[a]="on"+a}
function Ke(a,b){if(a.ka)a=!0;else{b=new re(b,this);var c=a.listener,d=a.va||a.src;a.oa&&Me(a);a=c.call(d,b)}return a}
function He(a){a=a[Ae];return a instanceof xe?a:null}
var Ne="__closure_events_fn_"+(1E9*Math.random()>>>0);function Fe(a){if("function"===typeof a)return a;a[Ne]||(a[Ne]=function(b){return a.handleEvent(b)});
return a[Ne]}
;function Oe(){K.call(this);this.i=new xe(this);this.L=this;this.u=null}
D(Oe,K);Oe.prototype[te]=!0;Oe.prototype.addEventListener=function(a,b,c,d){De(this,a,b,c,d)};
Oe.prototype.removeEventListener=function(a,b,c,d){Le(this,a,b,c,d)};
function Pe(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.L;c=b.type||b;"string"===typeof b?b=new pe(b,a):b instanceof pe?b.target=b.target||a:(e=b,b=new pe(c,a),qb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Qe(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Qe(g,c,!0,b)&&e,b.j||(e=Qe(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Qe(g,c,!1,b)&&e}
Oe.prototype.D=function(){Oe.O.D.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,we(d[e]);delete a.listeners[c];a.h--}}this.u=null};
Oe.prototype.X=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Qe(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ka&&g.capture==c){var h=g.listener,k=g.va||g.src;g.oa&&ze(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Re(a){Se();return Bb(a)}
var Se=Ha;function Te(a){var b=[];Ue(new Ve,a,b);return b.join("")}
function Ve(){}
function Ue(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ue(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),We(d,c),c.push(":"),Ue(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":We(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Xe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ye=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function We(a,b){b.push('"',a.replace(Ye,function(c){var d=Xe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Xe[c]=d);return d}),'"')}
;function Ze(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function $e(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.A=this.m=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){af(b,2,c)},function(c){af(b,3,c)})}catch(c){af(this,3,c)}}
function bf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
bf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var cf=new Ad(function(){return new bf},function(a){a.reset()});
function df(a,b,c){var d=cf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function ef(a){return new $e(function(b,c){c(a)})}
$e.prototype.then=function(a,b,c){return ff(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
$e.prototype.$goog_Thenable=!0;function gf(a,b){return ff(a,null,b,void 0)}
$e.prototype.cancel=function(a){if(0==this.h){var b=new hf(a);Id(function(){jf(this,b)},this)}};
function jf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?jf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):kf(c),lf(c,e,3,b)))}a.j=null}else af(a,3,b)}
function mf(a,b){a.i||2!=a.h&&3!=a.h||nf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ff(a,b,c,d){var e=df(null,null,null);e.h=new $e(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof hf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;mf(a,e);return e.h}
$e.prototype.C=function(a){this.h=0;af(this,2,a)};
$e.prototype.J=function(a){this.h=0;af(this,3,a)};
function af(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.J;if(d instanceof $e){mf(d,df(e||Ha,f||null,a));var g=!0}else if(Ze(d))d.then(e,f,a),g=!0;else{if(Ma(d))try{var h=d.then;if("function"===typeof h){of(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,nf(a),3!=b||c instanceof hf||pf(a,c))}}
function of(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function nf(a){a.m||(a.m=!0,Id(a.B,a))}
function kf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
$e.prototype.B=function(){for(var a;a=kf(this);)lf(this,a,this.h,this.u);this.m=!1};
function lf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.A;a=a.j)a.A=!1;if(b.h)b.h.j=null,qf(b,c,d);else try{b.j?b.i.call(b.context):qf(b,c,d)}catch(e){sf.call(null,e)}Bd(cf,b)}
function qf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function pf(a,b){a.A=!0;Id(function(){a.A&&sf.call(null,b)})}
var sf=Ed;function hf(a){Wa.call(this,a)}
D(hf,Wa);hf.prototype.name="cancel";function L(a){K.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
D(L,K);m=L.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function tf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ja(b)}}
m.ja=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ha):(c&&db(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.ca=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];uf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.ja(c)}}return 0!=e}return!1};
function uf(a,b,c){Id(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.ja,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){L.O.D.call(this);this.clear();this.l.length=0};function vf(a){this.h=a}
vf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Te(b))};
vf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
vf.prototype.remove=function(a){this.h.remove(a)};function wf(a){this.h=a}
D(wf,vf);function xf(a){this.data=a}
function yf(a){return void 0===a||a instanceof xf?a:new xf(a)}
wf.prototype.set=function(a,b){wf.O.set.call(this,a,yf(b))};
wf.prototype.i=function(a){a=wf.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
wf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function zf(a){this.h=a}
D(zf,wf);zf.prototype.set=function(a,b,c){if(b=yf(b)){if(c){if(c<Date.now()){zf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}zf.O.set.call(this,a,b)};
zf.prototype.i=function(a){var b=zf.O.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())zf.prototype.remove.call(this,a);else return b}};function Af(){}
;function Bf(){}
D(Bf,Af);Bf.prototype[Symbol.iterator]=function(){return fe(this.M(!0)).h()};
Bf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Cf(a){this.h=a}
D(Cf,Bf);m=Cf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.M=function(a){var b=0,c=this.h,d=new ee;d.P=function(){if(b>=c.length)throw de;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Df(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(Df,Cf);function Ef(a,b){this.i=a;this.h=null;var c;if(c=pc)c=!(9<=Number(Cc));if(c){Ff||(Ff=new ke);this.h=Ff.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Ff.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(Ef,Bf);var Gf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ff=null;function Hf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Gf[b]})}
m=Ef.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Hf(a),b);If(this)};
m.get=function(a){a=this.h.getAttribute(Hf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Hf(a));If(this)};
m.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new ee;d.P=function(){if(b>=c.length)throw de;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);If(this)};
function If(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Jf(a,b){this.i=a;this.h=b+"::"}
D(Jf,Bf);Jf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Jf.prototype.get=function(a){return this.i.get(this.h+a)};
Jf.prototype.remove=function(a){this.i.remove(this.h+a)};
Jf.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new ee;d.P=function(){for(var e=b.P();e.substr(0,c.h.length)!=c.h;)e=b.P();return a?e.substr(c.h.length):c.i.get(e)};
return d};function Kf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Lf,Mf,Nf=z.window,Of=(null===(Lf=null===Nf||void 0===Nf?void 0:Nf.yt)||void 0===Lf?void 0:Lf.config_)||(null===(Mf=null===Nf||void 0===Nf?void 0:Nf.ytcfg)||void 0===Mf?void 0:Mf.data_)||{};A("yt.config_",Of,void 0);function M(a){for(var b=0;b<arguments.length;++b);Kf(Of,arguments)}
function F(a,b){return a in Of?Of[a]:b}
;var Pf=[];function Qf(a){Pf.forEach(function(b){return b(a)})}
function Rf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Sf(b)}}:a}
function Sf(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=F("ERRORS",[]),e.push([a,"ERROR",b,c,d]),M("ERRORS",e));Qf(a)}
function Tf(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=F("ERRORS",[]),e.push([a,"WARNING",b,c,d]),M("ERRORS",e))}
;var Uf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Uf,void 0);function Vf(a){Kf(Uf,arguments)}
;function N(a){a=Wf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Xf(a,b){a=Wf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Wf(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
;var Yf=0,Zf=sc?"webkit":rc?"moz":pc?"ms":oc?"o":"";A("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Yf},void 0);var $f={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ag(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in $f||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function bg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ag.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ag.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ag.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=z.ytEventsEventsListeners||{};A("ytEventsEventsListeners",ib,void 0);var cg=z.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",cg,void 0);
function dg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var eg=Ya(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function fg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=dg(a,b,c,d);if(e)return e;e=++cg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ag(h);if(!bd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ag(h);
h.currentTarget=a;return c.call(a,h)};
g=Rf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),eg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d];return e}
function gg(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?eg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
;var hg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ig(a,b){"function"===typeof a&&(a=Rf(a));return window.setTimeout(a,b)}
function jg(a){window.clearTimeout(a)}
;function kg(a){this.C=a;this.i=null;this.m=0;this.B=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.L=fg(window,"mousemove",Sa(this.S,this));a=Sa(this.J,this);"function"===typeof a&&(a=Rf(a));this.T=window.setInterval(a,25)}
D(kg,K);kg.prototype.S=function(a){void 0===a.h&&bg(a);var b=a.h;void 0===a.i&&bg(a);this.i=new Uc(b,a.i)};
kg.prototype.J=function(){if(this.i){var a=hg();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.u=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
kg.prototype.D=function(){window.clearInterval(this.T);gg(this.L)};function lg(){}
function mg(a,b){return ng(a,0,b)}
function og(a,b){return ng(a,1,b)}
;function pg(){lg.apply(this,arguments)}
v(pg,lg);function qg(){pg.h||(pg.h=new pg);return pg.h}
function ng(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ig(a,c||0)}
function rg(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):jg(a)}}
pg.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
pg.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};qg();var sg={};
function tg(a){var b=void 0===a?{}:a;a=void 0===b.Ib?!1:b.Ib;b=void 0===b.tb?!0:b.tb;if(null==C("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&ug();fg(document,"keydown",ug);fg(document,"keyup",ug);fg(document,"mousedown",ug);fg(document,"mouseup",ug);a?fg(window,"touchmove",function(){vg("touchmove",200)},{passive:!0}):(fg(window,"resize",function(){vg("resize",200)}),b&&fg(window,"scroll",function(){vg("scroll",200)}));
new kg(function(){vg("mouse",100)});
fg(document,"touchstart",ug,{passive:!0});fg(document,"touchend",ug,{passive:!0})}}
function vg(a,b){sg[a]||(sg[a]=!0,og(function(){ug();sg[a]=!1},b))}
function ug(){null==C("_lact",window)&&tg();var a=Date.now();A("_lact",a,window);-1==C("_fact",window)&&A("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function wg(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function xg(){var a=yg;C("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function zg(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;var Ag=/^[\w.]*$/,Bg={q:!0,search_query:!0};function Cg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Dg(f[0]||""),h=Dg(f[1]||"");g in c?Array.isArray(c[g])?fb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Cg);k.args=[{key:l,value:f[1],query:a,method:Eg==n?"unchanged":n}];Bg.hasOwnProperty(l)||Tf(k)}}return c}
var Eg=String(Cg);function Fg(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Gg(a){"?"==a.charAt(0)&&(a=a.substr(1));return Cg(a,"&")}
function Hg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Gg(1<a.length?a[1]:a[0])):{}}
function Ig(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Gg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return kc(a,e)+d}
function Jg(a){if(!b)var b=window.location.href;var c=a.match(fc)[1]||null,d=hc(a);c&&d?(a=a.match(fc),b=b.match(fc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?hc(b)==d&&(Number(b.match(fc)[4]||null)||null)==(Number(a.match(fc)[4]||null)||null):!0;return a}
function Dg(a){return a&&a.match(Ag)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Kg(a){var b=Lg;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ld;e.flash="0";a:{try{var f=b.h.top.location.href}catch(La){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Nc:g;try{var h=g.history.length}catch(La){h=0}e.u_his=h;var k;e.u_h=null==(k=Nc.screen)?void 0:k.height;var l;e.u_w=null==(l=Nc.screen)?void 0:l.width;var n;e.u_ah=null==(n=Nc.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Nc.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=Nc.screen)?void 0:r.colorDepth}catch(La){}h=b.h;try{var q=h.screenX;var y=h.screenY}catch(La){}try{var B=h.outerWidth;var G=h.outerHeight}catch(La){}try{var R=h.innerWidth;var P=h.innerHeight}catch(La){}try{var J=h.screenLeft;var ea=h.screenTop}catch(La){}try{R=h.innerWidth,P=h.innerHeight}catch(La){}try{var rf=h.screen.availWidth;var Em=h.screen.availTop}catch(La){}q=[J,ea,q,y,rf,Em,B,G,R,P];y=b.h.top;try{var Mb=(y||window).document,za=
"CSS1Compat"==Mb.compatMode?Mb.documentElement:Mb.body;var Da=(new Vc(za.clientWidth,za.clientHeight)).round()}catch(La){Da=new Vc(-12245933,-12245933)}Mb=Da;Da={};za=new yd;z.SVGElement&&z.document.createElementNS&&za.set(0);y=gd();y["allow-top-navigation-by-user-activation"]&&za.set(1);y["allow-popups-to-escape-sandbox"]&&za.set(2);z.crypto&&z.crypto.subtle&&za.set(3);z.TextDecoder&&z.TextEncoder&&za.set(4);za=zd(za);Da.bc=za;Da.bih=Mb.height;Da.biw=Mb.width;Da.brdim=q.join();b=b.i;b=(Da.vis={visible:1,
hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Da.wgl=!!Nc.WebGLRenderingContext,Da);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Lg=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Fg(Kg(a))},void 0);Date.now();var Mg="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function Ng(){if(!Mg)return null;var a=Mg();return"open"in a?a:null}
function Og(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var Pg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Qg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),Rg=!1;
function Sg(a,b){b=void 0===b?{}:b;var c=Jg(a),d=N("web_ajax_ignore_global_headers_if_set"),e;for(e in Pg){var f=F(Pg[e]);!f||!c&&hc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!hc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!hc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!hc(a))b["X-YouTube-Ad-Signals"]=Fg(Kg(void 0));return b}
function Tg(a){var b=window.location.search,c=hc(a);N("debug_handle_relative_url_for_query_forward_killswitch")||c||!Jg(a)||(c=document.location.hostname);var d=gc(a.match(fc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Gg(b),f={};E(Qg,function(g){e[g]&&(f[g]=e[g])});
return Ig(a,f||{},!1)}
function Ug(a,b){var c=b.format||"JSON";a=Vg(a,b);var d=Wg(a,b),e=!1,f=Xg(a,function(k){if(!e){e=!0;h&&jg(h);var l=Og(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Yg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||z;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=ig(function(){e||(e=!0,f.abort(),jg(h),g.call(b.context||z,f))},b.timeout)}return f}
function Vg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Ig(a,b||{},!0);return a}
function Wg(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||hc(a)&&!b.withCredentials&&hc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Gg(e),qb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):jc(e));f=e||f&&!jb(f);!Rg&&f&&
"POST"!=b.method&&(Rg=!0,Sf(Error("AJAX request with postData should use POST")));return e}
function Yg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Tf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Zg(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=$g(g)})}d&&ah(e);
return e}
function ah(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;vb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Zb(a[b],null);a[c]=d}else ah(a[b])}}
function Zg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function $g(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Xg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Rf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ng();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;N("debug_forward_web_query_parameters")&&(a=Tg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Sg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var bh=Dc||Ec;function ch(a){var b=Sb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var dh={},eh=0;
function fh(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ch("cobalt")){if(a){a instanceof Kb||(a="object"==typeof a&&a.W?a.V():String(a),Qb.test(a)?a=new Kb(a,Lb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Pb))&&Ob.test(b[1])?new Kb(a,Lb):null));b=Nb(a||Rb);if("about:invalid#zClosurez"===b||b.startsWith("data"))a="";else{if(b instanceof Yb)a=b;else{var f="object"==typeof b;a=null;f&&b.Ha&&(a=b.Da());b=f&&b.W?b.V():String(b);Jb.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(Db,"&amp;")),-1!=b.indexOf("<")&&
(b=b.replace(Eb,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(Fb,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(Gb,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(Hb,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(Ib,"&#0;")));a=Zb(b,a)}a instanceof Yb&&a.constructor===Yb?a=a.h:(Ja(a),a="type_error:SafeHtml");a=encodeURIComponent(String(Te(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Zc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Xg(a,
b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Xg(a,b,"GET","",d);else{b:{try{var g=new Xa({url:a});if(g.j&&g.i||g.l){var h=gc(a.match(fc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(lc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var r=c;break d}}c+=3}r=-1}if(0>r)var q=null;else{var y=a.indexOf("&",r);if(0>y||y>l)y=l;r+=3;q=decodeURIComponent(a.substr(r,y-r).replace(/\+/g,
" "))}k="1"!==q}f=!k;break b}}catch(B){}f=!1}f?gh(a)?(b&&b(),f=!0):f=!1:f=!1;f||hh(a,b)}}
function ih(a,b,c){c=void 0===c?"":c;gh(a,c)?b&&b():fh(a,b,void 0,void 0,c)}
function gh(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function hh(a,b){var c=new Image,d=""+eh++;dh[d]=c;c.onload=c.onerror=function(){b&&dh[d]&&b();delete dh[d]};
c.src=a}
;var jh=z.ytPubsubPubsubInstance||new L,kh=z.ytPubsubPubsubSubscribedKeys||{},lh=z.ytPubsubPubsubTopicToKeys||{},mh=z.ytPubsubPubsubIsSynchronous||{};function nh(a,b){var c=oh();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){kh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{mh[a]?f():ig(f,0)}catch(g){Sf(g)}},void 0);
kh[d]=!0;lh[a]||(lh[a]=[]);lh[a].push(d);return d}return 0}
function ph(a){var b=oh();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete kh[c]}))}
function qh(a,b){var c=oh();c&&c.publish.apply(c,arguments)}
function rh(a){var b=oh();if(b)if(b.clear(a),a)sh(a);else for(var c in lh)sh(c)}
function oh(){return z.ytPubsubPubsubInstance}
function sh(a){lh[a]&&(a=lh[a],E(a,function(b){kh[b]&&delete kh[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ja;L.prototype.publish=L.prototype.ca;L.prototype.clear=L.prototype.clear;A("ytPubsubPubsubInstance",jh,void 0);A("ytPubsubPubsubTopicToKeys",lh,void 0);A("ytPubsubPubsubIsSynchronous",mh,void 0);A("ytPubsubPubsubSubscribedKeys",kh,void 0);var th=window,O=th.ytcsi&&th.ytcsi.now?th.ytcsi.now:th.performance&&th.performance.timing&&th.performance.now&&th.performance.timing.navigationStart?function(){return th.performance.timing.navigationStart+th.performance.now()}:function(){return(new Date).getTime()};var uh=Xf("initial_gel_batch_timeout",2E3),vh=Math.pow(2,16)-1,wh=void 0,xh=0,yh=0,zh=0,Ah=!0,Bh=z.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Bh,void 0);var Ch=z.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Ch,void 0);
function Dh(a,b){if("log_event"===a.endpoint){var c="";a.sa?c="visitorOnlyApprovedKey":a.cttAuthInfo&&(Ch[a.cttAuthInfo.token]=Eh(a.cttAuthInfo),c=a.cttAuthInfo.token);var d=Bh.get(c)||[];Bh.set(c,d);d.push(a.payload);b&&(wh=new b);a=Xf("tvhtml5_logging_max_batch")||Xf("web_logging_max_batch")||100;b=O();d.length>=a?Fh({writeThenSend:!0},N("flush_only_full_queue")?c:void 0):10<=b-zh&&(Gh(),zh=b)}}
function Hh(a,b){if("log_event"===a.endpoint){var c="";a.sa?c="visitorOnlyApprovedKey":a.cttAuthInfo&&(Ch[a.cttAuthInfo.token]=Eh(a.cttAuthInfo),c=a.cttAuthInfo.token);var d=new Map;d.set(c,[a.payload]);b&&(wh=new b);return new $e(function(e){wh&&wh.isReady()?Ih(d,e,{bypassNetworkless:!0},!0):e()})}}
function Fh(a,b){a=void 0===a?{}:a;new $e(function(c){jg(xh);jg(yh);yh=0;if(wh&&wh.isReady())if(void 0!==b){var d=new Map,e=Bh.get(b)||[];d.set(b,e);Ih(d,c,a);Bh.delete(b)}else Ih(Bh,c,a),Bh.clear();else Gh(),c()})}
function Gh(){N("web_gel_timeout_cap")&&!yh&&(yh=ig(function(){Fh({writeThenSend:!0})},6E4));
jg(xh);var a=F("LOGGING_BATCH_TIMEOUT",Xf("web_gel_debounce_ms",1E4));N("shorten_initial_gel_batch_timeout")&&Ah&&(a=uh);xh=ig(function(){Fh({writeThenSend:!0})},a)}
function Ih(a,b,c,d){var e=wh;c=void 0===c?{}:c;var f=Math.round(O()),g=a.size;a=u(a);for(var h=a.next();!h.done;h=a.next()){var k=u(h.value);h=k.next().value;var l=k=k.next().value;k=ob({context:Jh(e.config_||Kh())});k.events=l;(l=Ch[h])&&Lh(k,h,l);delete Ch[h];h="visitorOnlyApprovedKey"===h;Mh(k,f,h);N("always_send_and_write")&&(c.writeThenSend=!1);N("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&ih("/generate_204");Nh(e,"log_event",k,{retry:!0,onSuccess:function(){g--;
g||b()},
onError:function(){g--;g||b()},
eb:c,sa:h,Em:!!d});Ah=!1}}
function Mh(a,b,c){a.requestTimeMs=String(b);N("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&((c=F("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*vh/2)),c++,c>vh&&(c=1),M("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Lh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Eh(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Oh=z.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Oh,void 0);
function Ph(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||O());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=wg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};N("log_sequence_info_on_gel_web")&&d.aa&&(a=e.context,b=d.aa,Oh[b]=b in Oh?Oh[b]+1:0,a.sequence={index:Oh[b],groupKey:b},d.ub&&delete Oh[d.aa]);(d.Nm?Hh:Dh)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,sa:d.sa},c)}
;function Qh(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Rh(a,b,c,d,e){td.set(""+a,b,{Ja:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var Sh=C("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",Sh,void 0);function Th(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=td.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Sh[d]=c.toString())}}}
Th.prototype.get=function(a,b){Uh(a);Vh(a);a=void 0!==Sh[a]?Sh[a].toString():null;return null!=a?a:b?b:""};
Th.prototype.set=function(a,b){Uh(a);Vh(a);if(null==b)throw Error("ExpectedNotNull");Sh[a]=b.toString()};
Th.prototype.remove=function(a){Uh(a);Vh(a);delete Sh[a]};
Th.prototype.clear=function(){for(var a in Sh)delete Sh[a]};
function Vh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Uh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Wh(a){a=void 0!==Sh[a]?Sh[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ia(Th);var Xh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Yh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Zh(){var a=z.navigator;return a?a.connection:void 0}
;function $h(){return"INNERTUBE_API_KEY"in Of&&"INNERTUBE_API_VERSION"in Of}
function Kh(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),wb:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),xb:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),zb:F("INNERTUBE_CONTEXT_HL",void 0),yb:F("INNERTUBE_CONTEXT_GL",void 0),Ab:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Cb:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Bb:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Jh(a){var b={client:{hl:a.zb,gl:a.yb,clientName:a.xb,clientVersion:a.innertubeContextClientVersion,configInfo:a.wb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=F("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=F("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!N("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Qh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!N("music_web_display_mode_killswitch")){var h;b.client.cb=null!=(h=b.client.cb)?h:{};b.client.cb.webDisplayMode=Qh()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);F("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a:{if(h=Zh()){a=Xh[h.type||"unknown"]||"CONN_UNKNOWN";h=Xh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);N("web_log_effective_connection_type")&&
(a=Zh(),a=null!==a&&void 0!==a&&a.effectiveType?Yh.hasOwnProperty(a.effectiveType)?Yh[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(Gg(F("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function ai(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Cm||F("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Bm:b=xd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),N("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function bi(a){a=Object.assign({},a);delete a.Authorization;var b=xd();if(b){var c=new Rd;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ic(c.digest())}return a}
;function ci(a){var b=new Df;(b=b.isAvailable()?a?new Jf(b,a):b:null)||(a=new Ef(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new zf(a):null;this.i=document.domain||window.location.hostname}
ci.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Te(b))}catch(f){return}else e=escape(b);Rh(a,e,c,this.i)};
ci.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=td.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ci.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;td.remove(""+a,"/",void 0===b?"youtube.com":b)};var di;function ei(){di||(di=new ci("yt.innertube"));return di}
function fi(a,b,c,d){if(d)return null;d=ei().get("nextId",!0)||1;var e=ei().get("requests",!0)||{};e[d]={method:a,request:b,authState:bi(c),requestTime:Math.round(O())};ei().set("nextId",d+1,86400,!0);ei().set("requests",e,86400,!0);return d}
function gi(a){var b=ei().get("requests",!0)||{};delete b[a];ei().set("requests",b,86400,!0)}
function hi(a){var b=ei().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=bi(ai(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),Nh(a,d.method,e,{}));delete b[c]}}ei().set("requests",b,86400,!0)}}
;var ii=function(){var a;return function(){a||(a=new ci("ytidb"));return a}}();
function ji(){var a;return null===(a=ii())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function ki(a){var b=ji();this.result={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a};var c,d;null!==(c=ii())&&void 0!==c&&c.h&&(null===(d=ii())||void 0===d?void 0:d.set("LAST_RESULT_ENTRY_KEY",this.result,2592E3,!0))}
ki.prototype.isSupported=function(){return this.result.hasSucceededOnce};var li=[],mi=!1;function ni(a){mi||(li.push({type:"ERROR",payload:a}),10<li.length&&li.shift())}
function oi(a,b){mi||(li.push({type:"EVENT",eventType:a,payload:b}),10<li.length&&li.shift())}
;function pi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(ha(c))}
v(pi,Error);function qi(){try{return ri(),!0}catch(a){return!1}}
function ri(){if(void 0!==F("DATASYNC_ID",void 0))return F("DATASYNC_ID",void 0);throw new pi("Datasync ID not set","unknown");}
;function si(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function ti(a){return a.substr(0,a.indexOf(":"))||a}
;var ui={},vi=(ui.AUTH_INVALID="No user identifier specified.",ui.EXPLICIT_ABORT="Transaction was explicitly aborted.",ui.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ui.MISSING_INDEX="Index not created.",ui.MISSING_OBJECT_STORE="Object store not created.",ui.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",ui.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",ui.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",
ui.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ui.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ui.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ui),wi={},xi=(wi.AUTH_INVALID="ERROR",wi.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",wi.EXPLICIT_ABORT="IGNORED",wi.IDB_NOT_SUPPORTED="ERROR",wi.MISSING_INDEX="WARNING",wi.MISSING_OBJECT_STORE="ERROR",wi.DB_DELETED_BY_MISSING_OBJECT_STORE=
"WARNING",wi.QUOTA_EXCEEDED="WARNING",wi.QUOTA_MAYBE_EXCEEDED="WARNING",wi.UNKNOWN_ABORT="WARNING",wi.INCOMPATIBLE_DB_VERSION="WARNING",wi),yi={},zi=(yi.AUTH_INVALID=!1,yi.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,yi.EXPLICIT_ABORT=!1,yi.IDB_NOT_SUPPORTED=!1,yi.MISSING_INDEX=!1,yi.MISSING_OBJECT_STORE=!1,yi.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,yi.QUOTA_EXCEEDED=!1,yi.QUOTA_MAYBE_EXCEEDED=!0,yi.UNKNOWN_ABORT=!0,yi.INCOMPATIBLE_DB_VERSION=!1,yi);
function Q(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?vi[a]:c;d=void 0===d?xi[a]:d;e=void 0===e?zi[a]:e;pi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Q.prototype)}
v(Q,pi);function Ai(a){Q.call(this,"MISSING_OBJECT_STORE",{Eb:a},vi.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Ai.prototype)}
v(Ai,Q);function Bi(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Bi.prototype)}
v(Bi,Error);var Ci=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Di(a,b,c,d){b=ti(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Q)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Q("QUOTA_EXCEEDED",a);if(Fc&&"UnknownError"===e.name)return new Q("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Bi)return new Q("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ci.some(function(f){return e.message.includes(f)}))return new Q("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Q("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Jm:e.name})];e.level="WARNING";return e}
function Ei(a,b,c){return new Q("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c}})}
;function Fi(a){if(!a)throw Error();throw a;}
function Gi(a){return a}
function Hi(a){this.h=a}
function S(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
S.all=function(a){return new S(new Hi(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ea:0};f.ea<a.length;f={ea:f.ea},++f.ea)Ii(S.resolve(a[f.ea]).then(function(g){return function(h){d[g.ea]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
S.resolve=function(a){return new S(new Hi(function(b,c){a instanceof S?a.then(b,c):b(a)}))};
S.reject=function(a){return new S(new Hi(function(b,c){c(a)}))};
S.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Gi,e=null!==b&&void 0!==b?b:Fi;return new S(new Hi(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ji(c,c,d,f,g)}),c.onRejected.push(function(){Ki(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ji(c,c,d,f,g):"REJECTED"===c.state.status&&Ki(c,c,e,f,g)}))};
function Ii(a,b){a.then(void 0,b)}
function Ji(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof S?Li(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ki(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof S?Li(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Li(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof S?Li(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Mi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ni(a){return new Promise(function(b,c){Mi(a,b,c)})}
function T(a){return new S(new Hi(function(b,c){Mi(a,b,c)}))}
;function Oi(a,b){return new S(new Hi(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Pi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(O());this.i=!1}
m=Pi.prototype;m.add=function(a,b,c){return Qi(this,[a],{mode:"readwrite",K:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Qi(this,[a],{mode:"readwrite",K:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Qi(this,[a],{mode:"readonly",K:!0},function(c){return c.objectStore(a).count(b)})};
function Ri(a,b,c){a=a.h.createObjectStore(b,c);return new Si(a)}
m.delete=function(a,b){return Qi(this,[a],{mode:"readwrite",K:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Qi(this,[a],{mode:"readonly",K:!0},function(c){return c.objectStore(a).get(b)})};
function Ti(a,b){return Qi(a,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(c){c=c.objectStore("LogsRequestsStore");return T(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Qi(a,b,c,d){return I(a,function f(){var g=this,h,k,l,n,p,r,q,y,B,G,R,P;return x(f,function(J){switch(J.h){case 1:var ea={mode:"readonly",K:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?ea.mode=c:Object.assign(ea,c);h=ea;g.transactionCount++;k=h.K?3:1;l=0;case 2:if(n){J.o(3);break}l++;p=Math.round(O());sa(J,4);r=g.h.transaction(b,h.mode);ea=new Ui(r);ea=Vi(ea,d);return w(J,ea,6);case 6:return q=J.i,y=Math.round(O()),Wi(g,p,y,l,void 0,b.join(),h),J.return(q);case 4:B=ta(J);G=Math.round(O());
R=Di(B,g.h.name,b.join(),g.h.version);if((P=R instanceof Q&&!R.h)||l>=k)Wi(g,p,G,l,R,b.join(),h),n=R;J.o(2);break;case 3:return J.return(Promise.reject(n))}})})}
function Wi(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Q&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&oi("QUOTA_EXCEEDED",{dbName:ti(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Q&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),oi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Xi(a,!1,d,f,b,g.tag),ni(e)):Xi(a,!0,d,f,b,g.tag)}
function Xi(a,b,c,d,e,f){oi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Si(a){this.h=a}
m=Si.prototype;m.add=function(a,b){return T(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return T(this.h.clear()).then(function(){})};
m.count=function(a){return T(this.h.count(a))};
function Yi(a,b){return Zi(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Yi(this,a):T(this.h.delete(a))};
m.get=function(a){return T(this.h.get(a))};
m.index=function(a){try{return new $i(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Bi(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Zi(a,b,c){a=a.h.openCursor(b.query,b.direction);return aj(a).then(function(d){return Oi(d,c)})}
function Ui(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Q;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Vi(a,b){var c=new Promise(function(d,e){try{Ii(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Ui.prototype.abort=function(){this.h.abort();this.i=!0;throw new Q("EXPLICIT_ABORT");};
Ui.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Si(a),this.j.set(a,b));return b};
function $i(a){this.h=a}
m=$i.prototype;m.count=function(a){return T(this.h.count(a))};
m.delete=function(a){return bj(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return T(this.h.get(a))};
m.getKey=function(a){return T(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function bj(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return aj(a).then(function(d){return Oi(d,c)})}
function cj(a,b){this.request=a;this.cursor=b}
function aj(a){return T(a).then(function(b){return b?new cj(a,b):null})}
m=cj.prototype;m.advance=function(a){this.cursor.advance(a);return aj(this.request)};
m.continue=function(a){this.cursor.continue(a);return aj(this.request)};
m.delete=function(){return T(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return T(this.cursor.update(a))};function dj(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Pi(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Tb,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&oi("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:ti(a)});var y=f(),B=new Ui(g.transaction);
n&&n(y,function(G){return q.oldVersion<G&&q.newVersion>=G},B);
B.done.catch(function(G){e(G)})}catch(G){e(G)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){oi("IDB_UNEXPECTEDLY_CLOSED",{dbName:ti(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ej(a,b,c){c=void 0===c?{}:c;return dj(a,b,c)}
function fj(a,b){b=void 0===b?{}:b;return I(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,Ni(e),0)})})}
;function gj(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}
gj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return ej(a,b,c)};
gj.prototype.delete=function(a){a=void 0===a?{}:a;return fj(this.name,a)};
function hj(a,b){return new Q("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
gj.prototype.open=function(){function a(){return I(c,function g(){var h,k,l,n=this,p,r,q,y,B;return x(g,function(G){switch(G.h){case 1:return l=null!==(h=Error().stack)&&void 0!==h?h:"",sa(G,2),w(G,n.i(n.name,n.options.version,e),4);case 4:p=G.i;a:{var R=n.options;for(var P=u(Object.keys(R.wa)),J=P.next();!J.done;J=P.next()){J=J.value;var ea=R.wa[J],rf=void 0===ea.Kb?Number.MAX_VALUE:ea.Kb;if(p.h.version>=ea.Ca&&!(p.h.version>=rf)&&!p.h.objectStoreNames.contains(J)){R=J;break a}}R=void 0}r=R;if(void 0===
r){G.o(5);break}if(n.j){G.o(6);break}n.j=!0;return w(G,n.delete(),7);case 7:return ni(new Q("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:n.name,Eb:r})),G.return(a());case 6:throw new Ai(r);case 5:return G.return(p);case 2:q=ta(G);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){G.o(8);break}return w(G,
n.i(n.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),9);case 9:y=G.i;B=y.h.version;if(void 0!==n.options.version&&B>n.options.version+1)throw y.close(),n.l=!1,hj(n,B);return G.return(y);case 8:throw b(),q instanceof Error&&!N("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+l.substring(l.indexOf("\n")+1)),Di(q,n.name,"",null!==(k=n.options.version)&&void 0!==k?k:-1);}})})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw hj(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Tb:b,upgrade:this.options.upgrade};return this.h=d=a()};var ij=new gj("YtIdbMeta",{wa:{databases:{Ca:1}},upgrade:function(a,b){b(1)&&Ri(a,"databases",{keyPath:"actualName"})}});
function jj(a){return I(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,ij.open(),2);d=e.i;return e.return(Qi(d,["databases"],{K:!0,mode:"readwrite"},function(f){var g=f.objectStore("databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return T(g.h.put(a,void 0)).then(function(){})})}))})})}
function kj(a){return I(this,function c(){var d;return x(c,function(e){if(1==e.h)return a?w(e,ij.open(),2):e.return();d=e.i;return e.return(d.delete("databases",a))})})}
function lj(a){return I(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,ij.open(),2)):3!=f.h?(e=f.i,w(f,Qi(e,["databases"],{K:!0,mode:"readonly"},function(g){d.length=0;return Zi(g.objectStore("databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function mj(){return lj(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var nj,oj=new function(){}(new function(){});
function pj(){return I(this,function b(){var c,d,e;return x(b,function(f){switch(f.h){case 1:c=ji();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new ki(!0));var g;if(g=bh)g=/WebKit\/([0-9]+)/.exec(Sb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Sb),g=!(g&&602<=parseInt(g[1],10)));if(g||qc)return f.return(new ki(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new ki(!1))}catch(h){return f.return(new ki(!1))}if(!("IDBTransaction"in
self&&"objectStoreNames"in IDBTransaction.prototype))return f.return(new ki(!1));sa(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,jj(e),4);case 4:return w(f,kj("yt-idb-test-do-not-use"),5);case 5:return f.return(new ki(!0));case 2:return ta(f),f.return(new ki(!1))}})})}
function qj(){if(void 0!==nj)return nj;mi=!0;return nj=pj().then(function(a){mi=!1;return a.isSupported()})}
function rj(){return qj().then(function(a){return a?oj:void 0})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function sj(a){if(!qi())throw a=new Q("AUTH_INVALID",{dbName:a}),ni(a),a;var b=ri();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function tj(a,b,c,d){var e;return I(this,function g(){var h,k,l,n,p;return x(g,function(r){switch(r.h){case 1:return h=null!==(e=Error().stack)&&void 0!==e?e:"",w(r,rj(),2);case 2:k=r.i;if(!k)throw l=Ei("openDbImpl",a,b),N("ytidb_async_stack_killswitch")||(l.stack=l.stack+"\n"+h.substring(h.indexOf("\n")+1)),ni(l),l;si(a);n=c?{actualName:a,publicName:a,userIdentifier:void 0}:sj(a);sa(r,3);return w(r,jj(n),5);case 5:return w(r,ej(n.actualName,b,d),6);case 6:return r.return(r.i);case 3:return p=ta(r),
sa(r,7),w(r,kj(n.actualName),9);case 9:r.h=8;r.m=0;break;case 7:ta(r);case 8:throw p;}})})}
function uj(a,b,c){c=void 0===c?{}:c;return tj(a,b,!1,c)}
function vj(a,b,c){c=void 0===c?{}:c;return tj(a,b,!0,c)}
function wj(a,b){b=void 0===b?{}:b;return I(this,function d(){var e,f;return x(d,function(g){if(1==g.h)return w(g,rj(),2);if(3!=g.h){e=g.i;if(!e)return g.return();si(a);f=sj(a);return w(g,fj(f.actualName,b),3)}return w(g,kj(f.actualName),0)})})}
function xj(a,b){var c=this;a=a.map(function(d){return I(c,function f(){return x(f,function(g){return 1==g.h?w(g,fj(d.actualName,b),2):w(g,kj(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function yj(){var a=void 0===a?{}:a;return I(this,function c(){var d,e;return x(c,function(f){if(1==f.h)return w(f,rj(),2);if(3!=f.h){d=f.i;if(!d)return f.return();si("LogsDatabaseV2");return w(f,mj(),3)}e=f.i;return w(f,xj(e,a),0)})})}
function zj(a,b){b=void 0===b?{}:b;return I(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,rj(),2);if(3!=f.h){e=f.i;if(!e)return f.return();si(a);return w(f,fj(a,b),3)}return w(f,kj(a),0)})})}
;function Aj(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ia=function(){};
this.now=Date.now;this.lb=null!==(b=a.lb)&&void 0!==b?b:100;this.jb=null!==(c=a.jb)&&void 0!==c?c:1;this.hb=null!==(d=a.hb)&&void 0!==d?d:2592E6;this.fb=null!==(e=a.fb)&&void 0!==e?e:12E4;this.ib=null!==(f=a.ib)&&void 0!==f?f:5E3;this.databaseToken=null!==(g=a.databaseToken)&&void 0!==g?g:void 0;this.ta=!!a.ta;this.ra=null!==(h=a.ra)&&void 0!==h?h:.1;this.ya=null!==(k=a.ya)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.ia&&(this.ia=a.ia);this.F=a.F;this.ab=a.ab;this.G=a.G;this.I=
a.I;this.R=a.R;this.Ma=a.Ma;this.La=a.La;this.databaseToken&&(!this.F||this.F("networkless_logging"))&&Bj(this)}
function Bj(a){I(a,function c(){var d=this;return x(c,function(e){if(!d.databaseToken)return e.return();Cj(d);d.I.H()&&d.la();d.I.X(d.Ma,d.la.bind(d));d.I.X(d.La,d.Sa.bind(d));d.h=!0;return d.ta&&Math.random()<=d.ra?w(e,d.G.qb(d.databaseToken),0):e.o(0)})})}
m=Aj.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.G.set(d,this.databaseToken).then(function(e){d.id=e;c.I.H()&&Dj(c,d)}).catch(function(e){Dj(c,d);
Ej(c,e)})}else this.R(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F&&this.F("nwl_skip_retry")&&(e.skipRetry=c);if(this.I.H()){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return I(d,function l(){var n=this,p;return x(l,function(r){if(1==r.h)return p=n,w(r,n.G.set(e,n.databaseToken).catch(function(q){Ej(p,q)}),2);
f(g,h);r.h=0})})}}this.R(a,b,e.skipRetry)}else this.G.set(e,this.databaseToken).catch(function(g){d.R(a,b,e.skipRetry);
Ej(d,g)})}else this.R(a,b,this.F&&this.F("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.G.ha(d.id,c.databaseToken):e=!0;c.I.Z&&c.F&&c.F("vss_network_hint")&&c.I.Z(!0);f(g,h)};
this.R(d.url,d.options);this.G.set(d,this.databaseToken).then(function(g){d.id=g;e&&c.G.ha(d.id,c.databaseToken)}).catch(function(g){Ej(c,g)})}else this.R(a,b)};
m.la=function(){var a=this;if(!this.databaseToken)throw Ei("throttleSend");this.i||(this.i=og(function(){return I(a,function c(){var d=this,e;return x(c,function(f){if(1==f.h)return w(f,d.G.Ya("NEW",d.databaseToken),2);if(3!=f.h)return e=f.i,e?w(f,Dj(d,e),3):(d.Sa(),f.return());d.i&&(d.i=0,d.la());f.h=0})})},this.lb))};
m.Sa=function(){rg(this.i);this.i=0};
function Dj(a,b){return I(a,function d(){var e=this,f,g;return x(d,function(h){switch(h.h){case 1:if(!e.databaseToken)throw f=Ei("immediateSend"),f;if(void 0===b.id){h.o(2);break}return w(h,e.G.Db(b.id,e.databaseToken),3);case 3:(g=h.i)?b=g:e.ia(Error("The request cannot be found in the database."));case 2:if(Fj(e,b,e.hb)){h.o(4);break}e.ia(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){h.o(5);break}return w(h,e.G.ha(b.id,e.databaseToken),5);case 5:return h.return();
case 4:b.skipRetry||(b=Gj(e,b));if(!b){h.o(0);break}if(!b.skipRetry||void 0===b.id){h.o(8);break}return w(h,e.G.ha(b.id,e.databaseToken),8);case 8:e.R(b.url,b.options,!!b.skipRetry),h.h=0}})})}
function Gj(a,b){if(!a.databaseToken)throw Ei("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){return I(a,function h(){var k=this,l,n;return x(h,function(p){switch(p.h){case 1:l=k;n=Hj(f);if(!(k.F&&k.F("nwl_consider_error_code")&&n||k.F&&!k.F("nwl_consider_error_code")&&k.potentialEsfErrorCounter<=k.ya)){p.o(2);break}if(!k.I.N){p.o(3);break}return w(p,k.I.N(),3);case 3:if(k.I.H()){p.o(2);break}c(e,f);if(!k.F||!k.F("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){p.o(6);break}return w(p,k.G.Na(b.id,k.databaseToken,!1),6);case 6:return p.return();
case 2:if(k.F&&k.F("nwl_consider_error_code")&&!n&&k.potentialEsfErrorCounter>k.ya)return p.return();k.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){p.o(8);break}return b.sendCount<k.jb?w(p,k.G.Na(b.id,k.databaseToken),12):w(p,k.G.ha(b.id,k.databaseToken),8);case 12:og(function(){l.I.H()&&l.la()},k.ib);
case 8:c(e,f),p.h=0}})})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return I(a,function h(){var k=this;return x(h,function(l){if(1==l.h)return void 0===(null===b||void 0===b?void 0:b.id)?l.o(2):w(l,k.G.ha(b.id,k.databaseToken),2);k.I.Z&&k.F&&k.F("vss_network_hint")&&k.I.Z(!0);d(e,f);l.h=0})})};
return b}
function Fj(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Cj(a){if(!a.databaseToken)throw Ei("retryQueuedRequests");a.G.Ya("QUEUED",a.databaseToken).then(function(b){b&&!Fj(a,b,a.fb)?og(function(){return I(a,function d(){var e=this;return x(d,function(f){if(1==f.h)return void 0===b.id?f.o(2):w(f,e.G.Na(b.id,e.databaseToken),2);Cj(e);f.h=0})})}):a.I.H()&&a.la()})}
function Ej(a,b){a.mb&&!a.I.H()?a.mb(b):a.handleError(b)}
function Hj(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Ij(a,b){this.version=a;this.args=b}
;function Jj(a,b){this.topic=a;this.h=b}
Jj.prototype.toString=function(){return this.topic};var Kj=C("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ja;L.prototype.publish=L.prototype.ca;L.prototype.clear=L.prototype.clear;A("ytPubsub2Pubsub2Instance",Kj,void 0);var Lj=C("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",Lj,void 0);var Mj=C("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",Mj,void 0);var Nj=C("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Nj,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Oj(a,b){var c=Pj();c&&c.publish.call(c,a.toString(),a,b)}
function Qj(a){var b=Rj,c=Pj();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=C("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Lj[d])try{if(f&&b instanceof Jj&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ba){var l=new h;h.ba=l.version}var n=h.ba}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
eb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Sf(p)}},Nj[b.toString()]?C("yt.scheduler.instance")?ng(g,1,void 0):ig(g,0):g())});
Lj[d]=!0;Mj[b.toString()]||(Mj[b.toString()]=[]);Mj[b.toString()].push(d);return d}
function Sj(){var a=Tj,b=Qj(function(c){a.apply(void 0,arguments);Uj(b)});
return b}
function Uj(a){var b=Pj();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete Lj[c]}))}
function Pj(){return C("ytPubsub2Pubsub2Instance")}
;function Vj(a,b){gj.call(this,a,b);this.options=b;si(a)}
v(Vj,gj);function Wj(a,b){var c;return function(){c||(c=new Vj(a,b));return c}}
Vj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Oa?vj:uj)(a,b,Object.assign({},c))};
Vj.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Oa?zj:wj)(this.name,a)};
function Xj(a,b){return Wj(a,b)}
;var Yj;
function Zj(){if(Yj)return Yj();var a={};Yj=Xj("LogsDatabaseV2",{wa:(a.LogsRequestsStore={Ca:2},a),Oa:!1,upgrade:function(b,c,d){c(2)&&Ri(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Yj()}
;function ak(a){return I(this,function c(){var d,e,f,g;return x(c,function(h){if(1==h.h)return d={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(h,Zj().open(),2);if(3!=h.h)return e=h.i,f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(h,Ti(e,f),3);g=h.i;d.Ub=O();bk(d);return h.return(g)})})}
function ck(a){return I(this,function c(){var d,e,f,g,h,k,l;return x(c,function(n){if(1==n.h)return d={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(n,Zj().open(),2);if(3!=n.h)return e=n.i,f=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,f,0],h=[a,f,O()],k=IDBKeyRange.bound(g,h),l=void 0,w(n,Qi(e,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(p){return bj(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:k,direction:"prev"},function(r){r.getValue()&&(l=r.getValue(),
"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
d.Ub=O();bk(d);return n.return(l)})})}
function dk(a){return I(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Zj().open(),2);d=e.i;return e.return(Qi(d,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",T(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function ek(a,b,c){c=void 0===c?!0:c;return I(this,function e(){var f;return x(e,function(g){if(1==g.h)return w(g,Zj().open(),2);f=g.i;return g.return(Qi(f,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(h){var k=h.objectStore("LogsRequestsStore");return k.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),T(k.h.put(l,void 0)).then(function(){return l})):S.resolve(void 0)})}))})})}
function fk(a){return I(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Zj().open(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function gk(){return I(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Zj().open(),2);c=e.i;d=O()-2592E6;return w(e,Qi(c,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(f){return Zi(f.objectStore("LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function hk(){return I(this,function b(){return x(b,function(c){return w(c,yj(),0)})})}
function bk(a){N("nwl_csi_killswitch")||.01>=Math.random()&&Oj("nwl_transaction_latency_payload",a)}
;var ik={},jk=Xj("ServiceWorkerLogsDatabase",{wa:(ik.SWHealthLog={Ca:1},ik),Oa:!0,upgrade:function(a,b){b(1)&&Ri(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function kk(){return I(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return N("web_clean_sw_logs_store")?w(e,jk().open(),3):e.o(0);c=e.i;d=O()-2592E6;return w(e,Qi(c,["SWHealthLog"],{mode:"readwrite",K:!0},function(f){return Zi(f.objectStore("SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function lk(){return I(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,jk().open(),2);c=d.i;return w(d,c.clear("SWHealthLog"),0)})})}
;var mk;function nk(){mk||(mk=new ci("yt.offline"));return mk}
function ok(a){if(N("offline_error_handling")){var b=nk().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);nk().set("errors",b,2592E3,!0)}}
;var pk=Xf("network_polling_interval",3E4);function U(){Oe.call(this);this.C=0;this.J=this.l=!1;this.j=this.Ga();qk(this);rk(this)}
v(U,Oe);function sk(){if(!U.h){var a=C("yt.networkStatusManager.instance")||new U;A("yt.networkStatusManager.instance",a,void 0);U.h=a}return U.h}
m=U.prototype;m.H=function(){return this.j};
m.Z=function(a,b){a!==this.j&&((void 0===b?0:b)?this.N():this.j=a)};
m.Fb=function(a){this.l=!0;if(void 0===a?0:a)this.C||tk(this)};
m.Ga=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.sb=function(){this.J=!0};
m.X=function(a,b){return Oe.prototype.X.call(this,a,b)};
function rk(a){window.addEventListener("online",function(){return I(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return w(e,d.N(),2);if(d.J&&N("offline_error_handling")){var f=nk().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new pi(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;Sf(h)}nk().set("errors",{},2592E3,!0)}}e.h=0})})})}
function qk(a){window.addEventListener("offline",function(){return I(a,function c(){var d=this;return x(c,function(e){return w(e,d.N(),0)})})})}
function tk(a){a.C=mg(function(){return I(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.j?d.Ga()||!d.l?e.o(3):w(e,d.N(),3):w(e,d.N(),3);tk(d);e.h=0})})},pk)}
m.N=function(a){var b=this;return this.m?this.m:this.m=new Promise(function(c){return I(b,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,sa(l,2,3),f&&(k.B=og(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ua(l);k.m=void 0;k.B&&rg(k.B);h!==k.j&&(k.j=h,k.j&&k.l?Pe(k,"ytnetworkstatus-online"):k.l&&Pe(k,"ytnetworkstatus-offline"));c(h);va(l);break;case 2:ta(l),h=!1,l.o(3)}})})})};
U.prototype.sendNetworkCheckRequest=U.prototype.N;U.prototype.listen=U.prototype.X;U.prototype.enableErrorFlushing=U.prototype.sb;U.prototype.getWindowStatus=U.prototype.Ga;U.prototype.monitorNetworkStatusChange=U.prototype.Fb;U.prototype.networkStatusHint=U.prototype.Z;U.prototype.isNetworkAvailable=U.prototype.H;U.getInstance=sk;function uk(a){a=void 0===a?{}:a;Oe.call(this);var b=this;this.l=this.B=0;this.j=sk();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.Wa);a.bb&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.j))a.za?(this.za=a.za,c("ytnetworkstatus-online",function(){vk(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){vk(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){Pe(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Pe(b,"publicytnetworkstatus-offline")}))}
v(uk,Oe);uk.prototype.H=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
uk.prototype.Z=function(a,b){b=void 0===b?!1:b;var c=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);c&&c(a,b)};
uk.prototype.N=function(a){return I(this,function c(){var d=this,e;return x(c,function(f){return(e=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.j))?f.return(e(a)):f.return(!0)})})};
function vk(a,b){a.za?a.l?(rg(a.B),a.B=og(function(){a.m!==b&&(Pe(a,b),a.m=b,a.l=O())},a.za-(O()-a.l))):(Pe(a,b),a.m=b,a.l=O()):Pe(a,b)}
;var wk=!1,xk,yk=0,zk=0,Ak,Bk=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:wk,databaseToken:xk,potentialEsfErrorCounter:zk,isIdbSupported:!!xk};A("ytNetworklessLoggingInitializationOptions",Bk,void 0);
function Ck(){I(this,function b(){return x(b,function(c){switch(c.h){case 1:return w(c,rj(),2);case 2:xk=c.i;if(!xk||!qi()&&!N("nwl_init_require_datasync_id_killswitch")){c.o(0);break}wk=!0;Bk.isNwlInitialized=wk;Bk.databaseToken=xk;Bk.isIdbSupported=!!xk;return w(c,zj("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){c.o(5);break}return w(c,gk(xk),6);case 6:return w(c,kk(),5);case 5:Dk();Ek().H()&&Fk();Ek().X("publicytnetworkstatus-online",Fk);Ek().X("publicytnetworkstatus-offline",Gk);if(!N("networkless_immediately_drop_sw_health_store")){c.o(8);
break}return w(c,Hk(),8);case 8:if(N("networkless_immediately_drop_all_requests"))return w(c,hk(),0);c.o(0)}})})}
function Ik(a,b){function c(d){var e=Ek().H();if(!Jk()||!d||e&&N("vss_networkless_bypass_write"))Kk(a,b);else{var f={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0};ak(f,d).then(function(g){f.id=g;Ek().H()&&Lk(f)}).catch(function(g){Lk(f);
Ek().H()?Sf(g):ok(g)})}}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?rj().then(function(d){c(d)}):c(Mk())}
function Nk(a,b){function c(d){if(Jk()&&d){var e={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?fk(e.id,d):f=!0;N("vss_network_hint")&&Ek().Z(!0);g(h,k)};
Kk(e.url,e.options);ak(e,d).then(function(h){e.id=h;f&&fk(e.id,d)}).catch(function(h){Ek().H()?Sf(h):ok(h)})}else Kk(a,b)}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?rj().then(function(d){c(d)}):c(Mk())}
function Fk(){var a=this,b=Mk();if(!b)throw Ei("throttleSend");yk||(yk=og(function(){return I(a,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,ck("NEW",b),2);if(3!=f.h)return e=f.i,e?w(f,Lk(e),3):(Gk(),f.return());yk&&(yk=0,Fk());f.h=0})})},100))}
function Gk(){rg(yk);yk=0}
function Lk(a){return I(this,function c(){var d,e,f;return x(c,function(g){switch(g.h){case 1:d=Mk();if(!d)throw e=Ei("immediateSend"),e;if(void 0===a.id){g.o(2);break}return w(g,dk(a.id,d),3);case 3:(f=g.i)?a=f:Tf(Error("The request cannot be found in the database."));case 2:if(Ok(a,2592E6)){g.o(4);break}Tf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){g.o(5);break}return w(g,fk(a.id,d),5);case 5:return g.return();case 4:a.skipRetry||(a=Pk(a));var h=a,k,l;
if(null===(l=null===(k=null===h||void 0===h?void 0:h.options)||void 0===k?void 0:k.postParams)||void 0===l?0:l.requestTimeMs)h.options.postParams.requestTimeMs=Math.round(O());a=h;if(!a){g.o(0);break}if(!a.skipRetry||void 0===a.id){g.o(8);break}return w(g,fk(a.id,d),8);case 8:Kk(a.url,a.options,!!a.skipRetry),g.h=0}})})}
function Pk(a){var b=this,c=Mk();if(!c)throw Ei("updateRequestHandlers");var d=a.options.onError?a.options.onError:function(){};
a.options.onError=function(f,g){return I(b,function k(){var l;return x(k,function(n){switch(n.h){case 1:l=Hj(g);if(!(N("nwl_consider_error_code")&&l||!N("nwl_consider_error_code")&&Qk()<=Xf("potential_esf_error_limit",10))){n.o(2);break}return w(n,Ek().N(),3);case 3:if(Ek().H()){n.o(2);break}d(f,g);if(!N("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){n.o(5);break}return w(n,ek(a.id,c,!1),5);case 5:return n.return();case 2:if(N("nwl_consider_error_code")&&!l&&Qk()>Xf("potential_esf_error_limit",
10))return n.return();C("ytNetworklessLoggingInitializationOptions")&&Bk.potentialEsfErrorCounter++;zk++;if(void 0===(null===a||void 0===a?void 0:a.id)){n.o(7);break}return 1>a.sendCount?w(n,ek(a.id,c),11):w(n,fk(a.id,c),7);case 11:og(function(){Ek().H()&&Fk()},5E3);
case 7:d(f,g),n.h=0}})})};
var e=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(f,g){return I(b,function k(){return x(k,function(l){if(1==l.h)return void 0===(null===a||void 0===a?void 0:a.id)?l.o(2):w(l,fk(a.id,c),2);N("vss_network_hint")&&Ek().Z(!0);e(f,g);l.h=0})})};
return a}
function Ok(a,b){a=a.timestamp;return O()-a>=b?!1:!0}
function Dk(){var a=this,b=Mk();if(!b)throw Ei("retryQueuedRequests");ck("QUEUED",b).then(function(c){c&&!Ok(c,12E4)?og(function(){return I(a,function e(){return x(e,function(f){if(1==f.h)return void 0===c.id?f.o(2):w(f,ek(c.id,b),2);Dk();f.h=0})})}):Ek().H()&&Fk()})}
function Hk(){return I(this,function b(){var c,d;return x(b,function(e){c=Mk();if(!c)throw d=Ei("clearSWHealthLogsDb"),d;return e.return(lk().catch(function(f){Sf(f)}))})})}
function Ek(){Ak||(Ak=new uk({bb:!0,Wa:!0}));return Ak}
function Kk(a,b,c){if(N("networkless_with_beacon")){var d=["method","postBody"];if(Object.keys(b).length>d.length)c=!0;else{c=0;d=u(d);for(var e=d.next();!e.done;e=d.next())b.hasOwnProperty(e.value)&&c++;c=Object.keys(b).length!==c}c?Ug(a,b):ih(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?fh(a):Ug(a,b)}
function Jk(){return C("ytNetworklessLoggingInitializationOptions")?Bk.isNwlInitialized:wk}
function Mk(){return C("ytNetworklessLoggingInitializationOptions")?Bk.databaseToken:xk}
function Qk(){return C("ytNetworklessLoggingInitializationOptions")?Bk.potentialEsfErrorCounter:zk}
;function Rk(){Aj.call(this,{G:{qb:gk,ha:fk,Ya:ck,Db:dk,Na:ek,set:ak},I:new uk({bb:!0,Wa:!0}),handleError:Sf,ia:Tf,R:Sk,now:O,mb:ok,ab:qg(),Ma:"publicytnetworkstatus-online",La:"publicytnetworkstatus-offline",ta:!0,ra:.1,ya:Xf("potential_esf_error_limit",10),F:N});this.ta&&Math.random()<=this.ra&&this.databaseToken&&kk();N("networkless_immediately_drop_sw_health_store")&&Tk(this);N("networkless_immediately_drop_all_requests")&&hk();zj("LogsDatabaseV2")}
v(Rk,Aj);function Uk(){var a=C("yt.networklessRequestController.instance");a||(a=new Rk,A("yt.networklessRequestController.instance",a,void 0),N("networkless_logging")&&rj().then(function(b){a.databaseToken=b;Bj(a)}));
return a}
Rk.prototype.writeThenSend=function(a,b){b||(b={});qi()||(this.h=!1);Aj.prototype.writeThenSend.call(this,a,b)};
Rk.prototype.sendThenWrite=function(a,b,c){b||(b={});qi()||(this.h=!1);Aj.prototype.sendThenWrite.call(this,a,b,c)};
Rk.prototype.sendAndWrite=function(a,b){b||(b={});qi()||(this.h=!1);Aj.prototype.sendAndWrite.call(this,a,b)};
function Tk(a){I(a,function c(){var d=this,e,f;return x(c,function(g){e=d;if(!d.databaseToken)throw f=Ei("clearSWHealthLogsDb"),f;return g.return(lk().catch(function(h){e.handleError(h)}))})})}
function Sk(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(O());if(N("networkless_with_beacon")){c=b;var e=["method","postBody"];if(Object.keys(c).length>e.length)c=!0;else{d=0;e=u(e);for(var f=e.next();!f.done;f=e.next())c.hasOwnProperty(f.value)&&d++;c=Object.keys(c).length!==d}c?Ug(a,b):ih(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?fh(a):Ug(a,b)}
;function Vk(a){var b=this;this.config_=null;a?this.config_=a:$h()&&(this.config_=Kh());mg(function(){hi(b)},5E3)}
Vk.prototype.isReady=function(){!this.config_&&$h()&&(this.config_=Kh());return!!this.config_};
function Nh(a,b,c,d){function e(y){y=void 0===y?!1:y;var B;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||N("skip_ls_gel_retry")||(B=fi(b,c,l,k)),B)){var G=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(P,J){gi(B);G(P,J)};
c.onFetchSuccess=function(P,J){gi(B);R(P,J)}}try{y&&d.retry&&!d.eb.bypassNetworkless?(g.method="POST",d.eb.writeThenSend?N("use_new_nwl")?Uk().writeThenSend(q,g):Ik(q,g):N("use_new_nwl")?Uk().sendAndWrite(q,g):Nk(q,g)):(g.method="POST",g.postParams||(g.postParams={}),Ug(q,g))}catch(P){if("InvalidAccessError"==P.name)B&&(gi(B),B=0),Tf(Error("An extension is blocking network request."));
else throw P;}B&&mg(function(){hi(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Tf(new pi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new pi("innertube xhrclient not ready",b,c,d);Sf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,B){if(d.onSuccess)d.onSuccess(B)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,B){if(d.onError)d.onError(B)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.Ab)&&(h=f);var k=a.config_.Cb||!1,l=ai(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.Bb&&f;N("omit_innertube_api_key_for_Bearer_auth_header")&&(r=r&&f.startsWith("Bearer"));r||(p.key=a.config_.innertubeApiKey);var q=Ig(""+h+n,p||{},!0);N("use_new_nwl")||Jk()?qj().then(function(y){e(y)}):e(!1)}
;function V(a,b,c){c=void 0===c?{}:c;var d=Vk;F("ytLoggingEventsDefaultDisabled",!1)&&Vk==Vk&&(d=null);Ph(a,b,d,c)}
;var Wk=[{Ka:function(a){return"Cannot read property '"+a.key+"'"},
xa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ka:function(a){return"Cannot call '"+a.key+"'"},
xa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ka:function(a){return a.key+" is not defined"},
xa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Yk={Y:[],U:[{Ra:Xk,weight:500}]};function Xk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Zk(){this.U=[];this.Y=[]}
var $k;function al(){if(!$k){var a=$k=new Zk;a.Y.length=0;a.U.length=0;Yk.Y&&a.Y.push.apply(a.Y,Yk.Y);Yk.U&&a.U.push.apply(a.U,Yk.U)}return $k}
;var bl=new L;function cl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=dl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=dl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=dl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function dl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function el(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=fl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=cl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?fl(e+".ve",f,g,h):0;d+=g;d+=fl(e,a[e],b,c);if(500<d)break}}else c[b]=gl(a),d+=c[b].length;else c[b]=gl(a),d+=c[b].length;return d}
function fl(a,b,c,d){c+="."+a;a=gl(b);d[c]=a;return c.length+a.length}
function gl(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var hl=new Set,il=0,jl=0,kl=0,ll=[],ml=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function nl(a){ol(a,"WARNING")}
function ol(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),N("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=il))){var g=Td(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=el(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,r=gl(n[l]);c[p]=r;k+=p.length+r.length;if(500<k)break}}else c.params=gl(n)}if(ll.length)for(l=0;l<ll.length&&!(k=el(ll[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
al();c=u(a.Y);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Im)){a=d.weight;break a}a=u(a.U);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ra(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Wk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.xa[l.name])for(e=u(c.xa[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Ka(f);break}l.params||(l.params={});a=al();l.params["params.errorServiceSignature"]="msg="+a.Y.length+"&cb="+a.U.length;l.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));vb("sample").constructor!==tb&&(l.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!hl.has(l.message)){"ERROR"===b?(bl.ca("handleError",
l),N("record_app_crashed_web")&&0===kl&&1===l.sampleWeight&&(kl++,V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),jl++):"WARNING"===b&&bl.ca("handleWarning",l);if(N("kevlar_gel_error_routing")){a=b;b:{c=u(ml);for(d=c.next();!d.done;d=c.next())if(ch(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||
isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=
g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(V("clientError",c),("ERROR"===a||N("errors_flush_gel_always_killswitch"))&&Fh())}if(!N("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,
level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);
a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}Ug(F("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{hl.add(l.message)}catch(q){}il++}}}
function pl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,ha(c))}
;var ql={Ic:3611,Vb:27686,Wb:85013,Xb:23462,Zb:42016,ac:62407,cc:26926,Yb:43781,dc:51236,ec:79148,fc:50160,hc:77504,uc:87907,wc:18630,xc:54445,yc:80935,zc:105675,Ac:37521,Bc:47786,Cc:98349,Dc:123695,Ec:6827,Fc:29434,Gc:7282,Hc:124448,Lc:32276,Kc:76278,Mc:93911,Nc:106531,Oc:27259,Pc:27262,Qc:27263,Sc:21759,Tc:27107,Uc:62936,Vc:49568,Wc:38408,Xc:80637,Yc:68727,Zc:68728,bd:80353,cd:80356,dd:74610,ed:45707,fd:83962,gd:83970,hd:46713,jd:89711,kd:74612,ld:93265,md:74611,nd:131380,pd:128979,qd:128978,od:131391,
rd:105350,td:134800,sd:131392,vd:113533,wd:93252,xd:99357,zd:94521,Ad:114252,Bd:113532,Cd:94522,yd:94583,Dd:88E3,Ed:93253,Fd:93254,Gd:94387,Hd:94388,Id:93255,Jd:97424,ud:72502,Kd:110111,Ld:76019,Nd:117092,Od:117093,Md:89431,Pd:110466,Qd:77240,Rd:60508,Sd:137401,Td:137402,Ud:137046,Vd:73393,Wd:113534,Xd:92098,Yd:131381,Zd:84517,ae:83759,be:80357,ce:86113,de:72598,ee:72733,ge:107349,he:124275,ie:118203,je:133275,ke:133274,le:133272,me:133273,ne:133276,pe:117431,oe:133797,qe:128572,re:133405,se:117429,
te:117430,ue:117432,we:120080,xe:117259,ye:121692,ze:132972,Ae:133051,Be:133658,Ce:132971,De:97615,Ee:31402,Ge:133624,He:133623,Ie:133622,Fe:133621,Je:84774,Ke:95117,Le:98930,Me:98931,Ne:98932,Oe:43347,Pe:129889,Qe:45474,Re:100352,Se:84758,Te:98443,Ue:117985,Ve:74613,We:74614,Xe:64502,Ye:136032,Ze:74615,af:74616,bf:122224,cf:74617,df:77820,ef:74618,ff:93278,gf:93274,hf:93275,jf:93276,kf:22110,lf:29433,mf:133798,nf:132295,qf:120541,sf:82047,tf:113550,uf:75836,vf:75837,wf:42352,xf:84512,yf:76065,zf:75989,
Af:16623,Bf:32594,Cf:27240,Df:32633,Ef:74858,Gf:3945,Ff:16989,Hf:45520,If:25488,Jf:25492,Kf:25494,Lf:55760,Mf:14057,Nf:18451,Of:57204,Pf:57203,Qf:17897,Rf:57205,Sf:18198,Tf:17898,Uf:17909,Vf:43980,Wf:46220,Xf:11721,Yf:49954,Zf:96369,ag:3854,cg:56251,dg:25624,eg:16906,fg:99999,gg:68172,hg:27068,ig:47973,jg:72773,kg:26970,lg:26971,mg:96805,ng:17752,og:73233,pg:109512,qg:22256,rg:14115,sg:22696,tg:89278,ug:89277,vg:109513,wg:43278,xg:43459,yg:43464,zg:89279,Ag:43717,Bg:55764,Cg:22255,Dg:89281,Eg:40963,
Fg:43277,Gg:43442,Hg:91824,Ig:120137,Jg:96367,Kg:36850,Lg:72694,Mg:37414,Ng:36851,Pg:124863,Og:121343,Qg:73491,Rg:54473,Sg:43375,Tg:46674,Ug:32473,Vg:72901,Wg:72906,Xg:50947,Yg:50612,Zg:50613,ah:50942,bh:84938,dh:84943,eh:84939,fh:84941,gh:84944,hh:84940,ih:84942,jh:35585,kh:51926,lh:79983,mh:63238,nh:18921,oh:63241,ph:57893,qh:41182,rh:135732,sh:33424,th:22207,uh:42993,vh:36229,wh:22206,xh:22205,yh:18993,zh:19001,Ah:18990,Bh:18991,Ch:18997,Dh:18725,Eh:19003,Fh:36874,Gh:44763,Hh:33427,Ih:67793,Jh:22182,
Kh:37091,Lh:34650,Mh:50617,Nh:47261,Oh:22287,Ph:25144,Qh:97917,Rh:62397,Sh:125598,Th:137935,Uh:36961,Vh:108035,Wh:27426,Xh:27857,Yh:27846,Zh:27854,ai:69692,bi:61411,ci:39299,di:38696,fi:62520,gi:36382,hi:108701,ii:50663,ji:36387,ki:14908,li:37533,mi:105443,ni:61635,oi:62274,ri:133818,si:65702,ti:65703,vi:65701,wi:76256,xi:37671,yi:49953,Ai:36216,Bi:28237,Ci:39553,Di:29222,Ei:26107,Fi:38050,Gi:26108,Ii:120745,Hi:26109,Ji:26110,Ki:66881,Li:28236,Mi:14586,Ni:57929,Oi:74723,Pi:44098,Qi:44099,Ti:23528,
Ui:61699,Ri:134104,Si:134103,Vi:59149,Wi:101951,Xi:97346,Yi:118051,Zi:95102,aj:64882,bj:119505,cj:63595,dj:63349,ej:95101,fj:75240,gj:27039,hj:68823,ij:21537,jj:83464,kj:75707,lj:83113,mj:101952,nj:101953,pj:79610,qj:125755,rj:24402,sj:24400,tj:32925,uj:57173,vj:122502,wj:64423,xj:64424,yj:33986,zj:100828,Aj:129089,Bj:21409,Fj:135155,Gj:135156,Hj:135157,Ij:135158,Jj:135159,Kj:135160,Lj:135161,Mj:135162,Nj:135163,Oj:135164,Pj:135165,Qj:135166,Cj:11070,Dj:11074,Ej:17880,Rj:14001,Tj:30709,Uj:30707,Vj:30711,
Wj:30710,Xj:30708,Sj:26984,Yj:63648,Zj:63649,ak:51879,bk:111059,ck:5754,dk:20445,fk:130975,ek:130976,gk:110386,hk:113746,ik:66557,jk:17310,kk:28631,lk:21589,mk:68012,nk:60480,pk:31571,qk:76980,rk:41577,sk:45469,tk:38669,uk:13768,vk:13777,wk:62985,xk:4724,yk:59369,zk:43927,Ak:43928,Bk:12924,Ck:100355,Fk:56219,Gk:27669,Hk:10337,Ek:47896,Ik:122629,Jk:121258,Kk:107598,Lk:127991,Mk:96639,Nk:107536,Ok:130169,Pk:96661,Qk:96658,Rk:116646,Sk:121122,Tk:96660,Uk:127738,Vk:127083,Wk:104443,Xk:96659,Yk:106442,
Zk:134840,al:63667,bl:63668,dl:63669,fl:130686,il:78314,jl:55761,kl:127098,ll:134841,ml:96368,nl:67374,ol:48992,pl:49956,ql:31961,rl:26388,sl:23811,ul:5E4,vl:126250,wl:96370,xl:47355,yl:47356,zl:37935,Al:45521,Bl:21760,Cl:83769,Dl:49977,El:49974,Fl:93497,Gl:93498,Hl:34325,Il:115803,Jl:123707,Kl:100081,Ll:35309,Ml:68314,Nl:25602,Ol:100339,Pl:59018,Ql:18248,Rl:50625,Sl:9729,Tl:37168,Ul:37169,Vl:21667,Wl:16749,Xl:18635,Yl:39305,Zl:18046,am:53969,bm:8213,cm:93926,dm:102852,em:110099,fm:22678,gm:69076,
hm:137575,jm:100856,km:17736,lm:3832,mm:55759,nm:64031,om:93044,pm:93045,qm:34388,rm:17657,sm:17655,tm:39579,um:39578,vm:77448,wm:8196,xm:11357,ym:69877,zm:8197,Am:82039};function rl(){var a=nb(sl),b;return gf(new $e(function(c,d){a.onSuccess=function(e){Og(e)?c(new tl(e)):d(new ul("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ul("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ul("Request timed out","net.timeout",e))};
b=Ug("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof hf&&b.abort();
return ef(c)})}
function ul(a,b,c){Wa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(ul,Wa);function tl(a){this.xhr=a}
;function vl(){this.i=0;this.h=null}
vl.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Ze(a)?a:wl(a)):2===this.i&&b?(a=b.call(c,this.h),Ze(a)?a:xl(a)):this};
vl.prototype.getValue=function(){return this.h};
vl.prototype.$goog_Thenable=!0;function xl(a){var b=new vl;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function wl(a){var b=new vl;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function yl(){if(vd())return!0;var a=F("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||bh&&ch("applewebkit")&&!ch("version")&&(!ch("safari")||ch("gsa/"))||tc&&ch("version/")?!0:(a=td.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function zl(a){Wa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Al;this.isTimeout=a instanceof ul&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof hf}
v(zl,Wa);zl.prototype.name="BiscottiError";function Al(){Wa.call(this,"Biscotti ID is missing from server")}
v(Al,Wa);Al.prototype.name="BiscottiMissingError";var sl={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Bl=null;function yg(){if(N("disable_biscotti_fetch_entirely_for_all_web_clients"))return ef(Error("Biscotti id fetching has been disabled entirely."));if(!yl())return ef(Error("User has not consented - not fetching biscotti id."));if("1"==lb())return ef(Error("Biscotti ID is not available in private embed mode"));Bl||(Bl=gf(rl().then(Cl),function(a){return Dl(2,a)}));
return Bl}
function Cl(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Al;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Al;a=a.id;zg(a);Bl=wl(a);El(18E5,2);return a}
function Dl(a,b){b=new zl(b);zg("");Bl=xl(b);0<a&&El(12E4,a-1);throw b;}
function El(a,b){ig(function(){gf(rl().then(Cl,function(c){return Dl(b,c)}),Ha)},a)}
function Fl(){try{var a=C("yt.ads.biscotti.getId_");return a?a():yg()}catch(b){return ef(b)}}
;function Gl(a){if("1"!=lb()){a&&xg();try{Fl().then(function(){},function(){}),ig(Gl,18E5)}catch(b){Sf(b)}}}
;var Hl=Date.now().toString();
function Il(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Hl)for(a=1,b=0;b<Hl.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Hl.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Jl,Kl=z.ytLoggingDocDocumentNonce_;Kl||(Kl=Il(),Ua("ytLoggingDocDocumentNonce_",Kl));Jl=Kl;var Ll={pf:0,Jc:1,Rc:2,zi:3,rf:4,im:5,oj:6,Dk:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function Ml(a){this.h=a}
function Nl(a){return new Ml({trackingParams:a})}
Ml.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Ml.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Ml.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Ol(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Pl(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ql(a){return F(Pl(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",Ql,void 0);function Rl(a){return(a=Ql(void 0===a?0:a))?new Ml({veType:a,youtubeData:void 0}):null}
function Sl(){var a=F("csn-to-ctt-auth-info");a||(a={},M("csn-to-ctt-auth-info",a));return a}
function Tl(a){a=void 0===a?0:a;var b=F(Ol(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||!N("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
A("yt_logging_screen.getCurrentCsn",Tl,void 0);function Ul(a,b,c){var d=Sl();(c=Tl(c))&&delete d[c];b&&(d[a]=b)}
function Vl(a){return Sl()[a]}
A("yt_logging_screen.getCttAuthInfo",Vl,void 0);function Wl(a,b,c,d){c=void 0===c?0:c;if(a!==F(Ol(c))||b!==F(Pl(c)))Ul(a,d,c),M(Ol(c),a),M(Pl(c),b),b=function(){setTimeout(function(){a&&Ph("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Jl,clientScreenNonce:a},Vk)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",Wl,void 0);function Xl(a){Ij.call(this,1,arguments);this.csn=a}
v(Xl,Ij);var Rj=new Jj("screen-created",Xl),Yl=[],$l=Zl,am=0;function bm(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:ab(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(jb(e)||!e.trackingParams&&!e.veType)&&nl(Error("Child VE logged with no data"));d={cttAuthInfo:Vl(b),aa:b};"UNDEFINED_CSN"==b?cm("visualElementAttached",c,d):a?Ph("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function Zl(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Ic(b)}
function cm(a,b,c){Yl.push({payloadName:a,payload:b,options:c});am||(am=Sj())}
function Tj(a){if(Yl){for(var b=u(Yl),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ph(c.payloadName,c.payload,null,c.options));Yl.length=0}am=0}
;function dm(){this.i=new Set;this.h=new Set;this.j=new Map}
dm.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ia(dm);function em(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!fm(a)||c.some(function(e){return!fm(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())gm(a,d.value);return a}
function gm(a,b){for(var c in b)if(fm(b[c])){if(c in a&&!fm(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});gm(a[c],b[c])}else if(hm(b[c])){if(c in a&&!hm(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);im(a[c],b[c])}else a[c]=b[c];return a}
function im(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,fm(c)?a.push(gm({},c)):hm(c)?a.push(im([],c)):a.push(c);return a}
function fm(a){return"object"===typeof a&&!Array.isArray(a)}
function hm(a){return"object"===typeof a&&Array.isArray(a)}
;function jm(a,b){Ij.call(this,1,arguments)}
v(jm,Ij);function km(a,b){Ij.call(this,1,arguments)}
v(km,Ij);var lm=new Jj("aft-recorded",jm),mm=new Jj("timing-sent",km);var nm=window;function om(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=nm.performance||nm.mozPerformance||nm.msPerformance||nm.webkitPerformance||new om;var pm=!1,qm={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Sa(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ha,W);function rm(a){var b=sm(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function tm(){var a;if(N("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=um(e.requestStart),e.responseEnd=um(e.responseEnd),e.redirectStart=um(e.redirectStart),e.redirectEnd=um(e.redirectEnd),e.domainLookupEnd=um(e.domainLookupEnd),e.connectStart=um(e.connectStart),
e.connectEnd=um(e.connectEnd),e.responseStart=um(e.responseStart),e.secureConnectionStart=um(e.secureConnectionStart),e.domainLookupStart=um(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function vm(){return N("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function um(a){return Math.round(vm()+a)}
function wm(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ua("ytcsi."+(a||"")+"data_",b));return b}
function xm(a){a=wm(a);a.info||(a.info={});return a.info}
function sm(a){a=wm(a);a.tick||(a.tick={});return a.tick}
function ym(a){var b=wm(a).nonce;b||(b=Il(),wm(a).nonce=b);return b}
function zm(a){var b=sm(a||""),c=rm(a);c&&!pm&&(Oj(lm,new jm(Math.round(c-b._start),a)),pm=!0)}
;function Am(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=cb(a,function(b){return"first-paint"===b.name}))return um(a.startTime)}a=W.timing;
return a.Gb?Math.max(0,a.Gb):0}
;function Bm(){var a=C("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function Cm(a){a=a||"";var b=C("ytcsi.reference");b||(Bm(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=Bm(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Dm=z.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Dm,void 0);function Fm(){this.h=0}
function Gm(){Fm.h||(Fm.h=new Fm);return Fm.h}
Fm.prototype.tick=function(a,b,c,d){Hm(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Fm.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Hm(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,V("latencyActionInfo",a,{cttAuthInfo:c}))};
Fm.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Hm(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a,{cttAuthInfo:c}))};
function Hm(a,b){Dm[b]=Dm[b]||{count:0};var c=Dm[b];c.count++;c.time=O();a.h||(a.h=mg(function(){var d=O(),e;for(e in Dm)Dm[e]&&6E4<d-Dm[e].time&&delete Dm[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new pi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||nl(c)),!0):!1}
;var X={},Im=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard=
"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.playlists"]=
"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf=
"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard=
"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},Jm=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an=
"adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",
Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Km="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Lm={},Mm=(Lm.ccs="CANARY_STATE_",
Lm.mver="MEASUREMENT_VERSION_",Lm.pis="PLAYER_INITIALIZED_STATE_",Lm.yt_pt="LATENCY_PLAYER_",Lm.pa="LATENCY_ACTION_",Lm.ctop="TOP_ENTITY_TYPE_",Lm.yt_vst="VIDEO_STREAM_TYPE_",Lm),Nm="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Om(a){return!!F("FORCE_CSI_ON_GEL",!1)||N("csi_on_gel")||N("enable_csi_on_gel")||N("unplugged_tvhtml5_csi_on_gel")||!!wm(a).useGel}
function Pm(a,b,c){var d=Qm(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||O();if(Om(c)){Cm(c||"").tick[a]=b||O();d=ym(c);var e=wm(c).cttAuthInfo;"_start"===a?(a=Gm(),Hm(a,"baseline_"+d)||V("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):Gm().tick(a,d,b,e);zm(c);return!0}return!1}
function Rm(a,b,c){c=Qm(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Jm){c=Jm[a];0<=Za(Km,c)&&(b=!!b);a in Mm&&"string"===typeof b&&(b=Mm[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return em({},d)}0<=Za(Nm,a)||nl(new pi("Unknown label logged with GEL CSI",a))}
function Qm(a){a=wm(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Sm(a){a=Qm(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Tm(a,b,c){null!==b&&(xm(c)[a]=b,Om(c)?(a=Rm(a,b,c))&&Om(c)&&(b=Cm(c||""),em(b.info,a),em(Sm(c),a),b=ym(c),c=wm(c).cttAuthInfo,Gm().info(a,b,c)):Cm(c||"").info[a]=b)}
function Z(a,b,c){var d=sm(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||O();d[a]=e;Pm(a,b,c)||c||(Um(),Cm("").tick[a]=b||O());return d[a]}
function Vm(){var a=ym(void 0);requestAnimationFrame(function(){setTimeout(function(){a===ym(void 0)&&Z("ol",void 0,void 0)},0)})}
function Um(){if(!C("yt.timing.pingSent_")){var a=F("TIMING_ACTION",void 0),b=sm();if(a=!!C("ytglobal.timingready_")&&a)a="_start"in sm(void 0);if(a&&rm()){zm();a=!0;var c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in b)){a=!1;break}if(a&&!Om()){c=sm();d=xm();e=c._start;var f=F("CSI_SERVICE_NAME","youtube");a={v:2,s:f,action:F("TIMING_ACTION",void 0)};b=d.srt;void 0!==c.srt&&delete d.srt;c.aft=rm();var g=sm(void 0),h=g.pbr,k=g.vc;g=g.pbs;h&&k&&g&&h<k&&k<g&&xm(void 0).yt_pvis&&
"youtube"===f&&(Tm("yt_lt","hot_bg"),f=c.vc,h=c.pbs,delete c.aft,d.aft=Math.round(h-f));for(var l in d)"_"!==l.charAt(0)&&(a[l]=d[l]);c.ps=O();l={};f=[];for(var n in c)"_"!==n.charAt(0)&&(h=Math.round(c[n]-e),l[n]=h,f.push(n+"."+h));a.rt=f.join(",");n=!!d.ap;c="";for(var p in a)a.hasOwnProperty(p)&&(c+="&"+p+"="+a[p]);p="/csi_204?"+c.substring(1);window.navigator&&n?ih(p):fh(p);A("yt.timing.pingSent_",!0,void 0);Oj(mm,new km(l.aft+(Number(b)||0)))}}}}
function Wm(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Zf+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Xm(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);cc()&&a.setAttribute("nonce",cc());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=vm(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Ym(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=$a(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=bb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",um(b.startTime)),Z("wffe",um(b.responseEnd)))}
var Zm=window;Zm.ytcsi&&(Zm.ytcsi.info=Tm,Zm.ytcsi.tick=Z);function $m(){this.A=[];this.u=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.B=new Map}
function an(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Tl(c),h=Rl(c);g&&h&&((null===(e=d.response)||void 0===e?0:e.trackingParams)&&bm(a.client,g,h,[Nl(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&bm(a.client,g,h,[Nl(d.playerResponse.trackingParams)]))})}
function bn(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.A.push([b,c]);else{var e=Tl(d);c=c||Rl(d);e&&c&&bm(a.client,e,c,[b])}}
$m.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=Tl(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:Nl(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={cttAuthInfo:Vl(c),aa:c};"UNDEFINED_CSN"==c?cm("visualElementGestured",a,b):d?Ph("visualElementGestured",a,d,b):V("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function cn(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){dn(a,b,c);var f=Rl(c.layer);if(f){for(var g=u(a.A),h=g.next();!h.done;h=g.next())h=h.value,bn(a,h[0],h[1]||f,c.layer);f=u(a.u);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Tl(g);var l=k[0]||Rl(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={cttAuthInfo:Vl(h),aa:h},"UNDEFINED_CSN"==h?cm("visualElementStateChanged",k,l):g?Ph("visualElementStateChanged",k,g,l):V("visualElementStateChanged",
k,l))}}};
Tl(c.layer)||a.j();if(c.Va)for(var d=u(c.Va),e=d.next();!e.done;e=d.next())an(a,e.value,c.layer);else ol(Error("Delayed screen needs a data promise."))}
function dn(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Hb?c.Hb:c.layer;var e=Tl(d);d=Rl(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=F("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.Ua,n=c.cttAuthInfo,p=c.Gm,r=$l(),q={csn:r,pageVe:(new Ml({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?(q.implicitGesture=
{parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()},p&&(q.implicitGesture.gestureType=p)):h&&nl(new pi("newScreen() parent element does not have a VE - rootVe",b));l&&(q.cloneCsn=l);l={cttAuthInfo:n,aa:r};k?Ph("screenCreated",q,k,l):V("screenCreated",q,l);Oj(Rj,new Xl(r));var y=r}catch(B){pl(B,{Lm:b,rootVe:d,parentVisualElement:void 0,Fm:e,Km:f,Ua:c.Ua});ol(B);return}Wl(y,b,c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=N("screen_manager_skip_hide_killswitch"))){a:{b=
u(Object.values(Ll));for(f=b.next();!f.done;f=b.next())if(Tl(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={cttAuthInfo:Vl(e),aa:e,ub:f},"UNDEFINED_CSN"==e?cm("visualElementHidden",d,f):b?Ph("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=y||"");Tm("csn",y);dm.getInstance().clear();d=Rl(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(N("web_mark_root_visible")||
N("music_web_mark_root_visible"))&&(e=y,y={csn:e,ve:d.getAsJson(),eventType:1},b={cttAuthInfo:Vl(e),aa:e},"UNDEFINED_CSN"==e?cm("visualElementShown",y,b):V("visualElementShown",y,b));a.i.delete(c.layer||0);a.j=void 0;e=u(a.B);for(y=e.next();!y.done;y=e.next())b=u(y.value),y=b.next().value,b=b.next().value,b.has(c.layer)&&d&&bn(a,y,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(B){ol(B)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(B){ol(B)}}}
;function en(a){a&&(a.dataset?a.dataset[fn("loaded")]="true":a.setAttribute("data-loaded","true"))}
function gn(a,b){return a?a.dataset?a.dataset[fn(b)]:a.getAttribute("data-"+b):null}
var hn={};function fn(a){return hn[a]||(hn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var jn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,kn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ln(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(jn,""),c=c.replace(kn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else mn(a,b,c)}
function mn(a,b,c){c=void 0===c?null:c;var d=nn(a),e=document.getElementById(d),f=e&&gn(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=nh(d,b),b=""+Na(b),on[b]=f),g||(e=pn(a,d,function(){gn(e,"loaded")||(en(e),qh(d),ig(Ta(rh,d),0))},c)))}
function pn(a,b,c,d){d=void 0===d?null:d;var e=$c(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Tc(e,Re(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function qn(a){a=nn(a);var b=document.getElementById(a);b&&(rh(a),b.parentNode.removeChild(b))}
function rn(a,b){a&&b&&(a=""+Na(b),(a=on[a])&&ph(a))}
function nn(a){var b=document.createElement("a");$b(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ec(a)}
var on={};var sn=[],tn=!1;function un(){if(!N("disable_biscotti_fetch_for_ad_blocker_detection")&&!N("disable_biscotti_fetch_entirely_for_all_web_clients")&&yl()&&"1"!=lb()){var a=function(){tn=!0;"google_ad_status"in window?M("DCLKSTAT",1):M("DCLKSTAT",2)};
try{ln("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}sn.push(og(function(){if(!(tn||"google_ad_status"in window)){try{rn("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}tn=!0;M("DCLKSTAT",3)}},5E3))}}
function vn(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function wn(){this.i=!1;this.h=null}
wn.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;vb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=sb();g=k?k.createScript(g):g;g=(new xb(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,vb("From proto message. b/166824318"),h=Bb(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());xn(this,g,h,a.program,b,c,d)}else nl(Error("Cannot initialize botguard without program"))};
function xn(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,ln(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?yn(a,d,!!g,h,e):(qn(c),nl(new pi("Unable to load Botguard","from "+c)))},f)):b&&(f=$c(document,"SCRIPT"),f.textContent=b,f.nonce=cc(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?yn(a,d,!!g,b,e):nl(Error("Unable to load Botguard from JS")))}
function yn(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{zn(a,new d(b,e?function(){return e(b)}:Ha))}catch(h){h instanceof Error&&nl(h)}else{try{zn(a,new d(b))}catch(h){h instanceof Error&&nl(h)}e&&e(b)}else nl(Error("Failed to finish initializing VM"))}
wn.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
wn.prototype.dispose=function(){this.h=null};
function zn(a,b){a.h=b}
;var An=new wn;function Bn(){return!!An.h}
function Cn(a){a=void 0===a?{}:a;return An.invoke(a)}
;var Dn=window,En=/[A-Za-z]+\/[0-9.]+/g;function Fn(a,b){if(a.replace(En,"")!==b.replace(En,""))return!1;a=a.match(En);b=b.match(En);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function Gn(){var a=Dn.uaChPolyfill.state;if(0===a.type)V("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&Fn(a.syntheticUa,b),d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),ol(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);V("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),V("clientHintsPolyfillDiagnostics",
b))}}
var Hn=!1;function In(){var a;1===(null===(a=Dn.uaChPolyfill)||void 0===a?void 0:a.state.type)?Hn||(Dn.uaChPolyfill.onReady=In,Hn=!0):Dn.uaChPolyfill&&Gn()}
;function Jn(a,b,c){K.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.J=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.J&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=Za(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.B)}
v(Jn,K);Jn.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){Tf(d)}}};
Jn.prototype.D=function(){window.removeEventListener("message",this.B);K.prototype.D.call(this)};function Kn(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Jn(!!F("WIDGET_ID_ENFORCE")),b=this.Jb.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=F("WIDGET_ID"))this.h.sessionId=a}
m=Kn.prototype;m.Jb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Ln(this,a)),this.j[a]=!0)):this.Pa(a,b,c)};
m.Pa=function(){};
function Ln(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.vb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Fa());this.sendMessage("onReady");E(this.i,this.kb,this);this.i=[]};
m.Fa=function(){return null};
function Mn(a,b){a.sendMessage("infoDelivery",b)}
m.kb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.kb({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function Nn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function On(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Pn(a,b,c,d){if(Ma(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Qn(a){Kn.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Qb.bind(this));this.addEventListener("onVolumeChange",this.Rb.bind(this));this.addEventListener("onApiChange",this.Lb.bind(this));this.addEventListener("onPlaybackQualityChange",this.Nb.bind(this));this.addEventListener("onPlaybackRateChange",this.Ob.bind(this));this.addEventListener("onStateChange",this.Pb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Sb.bind(this))}
v(Qn,Kn);m=Qn.prototype;
m.Pa=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Nn(a)){var d=b;if(Ma(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=On(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=On(e);break;case "loadPlaylist":case "cuePlaylist":e=Pn(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Nn(a)&&Mn(this,this.Fa())}};
m.onReady=function(){var a=this.vb.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Fa=function(){if(!this.api)return null;var a=this.api.getApiInterface();db(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Pb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Mn(this,a)};
m.Nb=function(a){Mn(this,{playbackQuality:a})};
m.Ob=function(a){Mn(this,{playbackRate:a})};
m.Lb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Rb=function(){Mn(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Qb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Mn(this,a)};
m.Sb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Mn(this,a)};
m.dispose=function(){Kn.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Rn(a){K.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.gb,this)}
v(Rn,K);m=Rn.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.da("RECEIVING"))};
m.da=function(a,b){this.started&&!this.h&&this.connection.da(a,b)};
m.gb=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Sn(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Tn(a,c))&&this.da(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Mb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Mb=function(a,b){this.started&&!this.h&&this.connection.da(a,this.Ea(a,b))};
m.Ea=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||tf(a.i,"command",this.gb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);K.prototype.D.call(this)};function Un(a,b){Rn.call(this,b);this.api=a;this.start()}
v(Un,Rn);Un.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Un.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Sn(a,b){switch(a){case "loadVideoById":return a=On(b),[a];case "cueVideoById":return a=On(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Pn(b),[a];case "cuePlaylist":return a=Pn(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Tn(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Un.prototype.Ea=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Rn.prototype.Ea.call(this,a,b)};
Un.prototype.D=function(){Rn.prototype.D.call(this);delete this.api};function Vn(a){a=void 0===a?!1:a;K.call(this);this.i=new L(a);Zd(this,Ta(Xd,this.i))}
D(Vn,K);Vn.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Vn.prototype.l=function(a,b){this.h||this.i.ca.apply(this.i,arguments)};function Wn(a,b,c){Vn.call(this);this.j=a;this.destination=b;this.id=c}
v(Wn,Vn);Wn.prototype.da=function(a,b){this.h||this.j.da(this.destination,this.id,a,b)};
Wn.prototype.D=function(){this.destination=this.j=null;Vn.prototype.D.call(this)};function Xn(a,b,c){K.call(this);this.destination=a;this.origin=c;this.i=fg(window,"message",this.j.bind(this));this.connection=new Wn(this,a,b);Zd(this,Ta(Xd,this.connection))}
v(Xn,K);Xn.prototype.da=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Te(a),this.origin))};
Xn.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Xn.prototype.D=function(){gg(this.i);this.destination=null;K.prototype.D.call(this)};function Yn(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||nb(b);this.assets=a.assets||{};this.attrs=a.attrs||nb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Yn.prototype.clone=function(){var a=new Yn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ja(c)?a[b]=nb(c):a[b]=c}return a};var Zn=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function $n(a){a=a||"";if(window.spf){var b=a.match(Zn);spf.style.load(a,b?b[1]:"",void 0)}else ao(a)}
function ao(a){var b=bo(a),c=document.getElementById(b),d=c&&gn(c,"loaded");d||c&&!d||(c=co(a,b,function(){gn(c,"loaded")||(en(c),qh(b),ig(Ta(rh,b),0))}))}
function co(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Re(a);ac(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function bo(a){var b=$c(document,"A");vb("This URL is never added to the DOM");$b(b,new Kb(a,Lb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ec(a)}
;function eo(){K.call(this);this.i=[]}
v(eo,K);eo.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Ra,void 0)}K.prototype.D.call(this)};function fo(){eo.apply(this,arguments)}
v(fo,eo);function go(a,b,c,d){K.call(this);var e=this;this.J=b;this.webPlayerContextConfig=d;this.Aa=!1;this.api={};this.ga=this.m=null;this.L=new L;this.i={};this.T=this.ma=this.elementId=this.Ba=this.config=null;this.S=!1;this.l=this.B=null;this.na={};this.nb=["onReady"];this.lastError=null;this.Qa=NaN;this.C={};this.ob=new fo(this);this.fa=0;this.j=this.u=a;Zd(this,Ta(Xd,this.L));ho(this);io(this);Zd(this,Ta(Xd,this.ob));c?this.fa=ig(function(){e.loadNewVideoConfig(c)},0):d&&(jo(this),ko(this))}
v(go,K);m=go.prototype;m.getId=function(){return this.J};
m.loadNewVideoConfig=function(a){if(!this.h){this.fa&&(jg(this.fa),this.fa=0);var b=a||{};b instanceof Yn||(b=new Yn(b));this.config=b;this.setConfig(a);ko(this);this.isReady()&&lo(this)}};
function jo(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.J,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.J:a.config.attrs.id=a.J);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.Ba=a;this.config=mo(a);jo(this);this.ma||(this.ma=no(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=kd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=kd(Number(a)||a))};
function lo(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function oo(a){var b=!0,c=po(a);c&&a.config&&(a=qo(a),b=gn(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function ko(a){if(!a.h&&!a.S){var b=oo(a);if(b&&"html5"===(po(a)?"html5":null))a.T="html5",a.isReady()||ro(a);else if(so(a),a.T="html5",b&&a.l&&a.u)a.u.appendChild(a.l),ro(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=to(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.config?mo(a.config):void 0;d&&d(a.u,e,a.webPlayerContextConfig);ro(a)};
a.S=!0;b?a.B():(ln(qo(a),a.B),(b=uo(a))&&$n(b),vo(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function po(a){var b=Wc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function ro(a){var b;if(!a.h){var c=po(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.S=!1,!to(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||wo(a)):a.Qa=ig(function(){ro(a)},50)}}
function wo(a){ho(a);a.Aa=!0;var b=po(a);if(b){a.m=xo(a,b,"addEventListener");a.ga=xo(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=xo(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);lo(a);a.ma&&a.ma(a.api);a.L.ca("onReady",a.api)}
function xo(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,nl(h))}}}
function ho(a){a.Aa=!1;if(a.ga)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ga(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&jg(Number(c));a.C={};a.m=null;a.ga=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ba};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Aa};
function io(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){qh("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){qh("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){qh("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=no(this,b);d&&(0<=Za(this.nb,a)||this.i[a]||(b=yo(this,a),this.m&&this.m(a,b)),this.L.subscribe(a,d),"onReady"===a&&this.isReady()&&ig(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=no(this,b))&&tf(this.L,a,b)};
function no(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];if(f=C(b))try{f.apply(z,e)}catch(g){ol(g)}};
a.na[b]=c}return c?c:null}
function yo(a,b){var c="ytPlayer"+b+a.J;a.i[b]=c;z[c]=function(d){var e=ig(function(){if(!a.h){a.L.ca(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
kb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.T||(po(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function so(a){a.cancel();ho(a);a.T=null;a.config&&(a.config.loaded=!1);var b=po(a);b&&(oo(a)||!vo(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.u)for(a=a.u;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&rn(qo(this),this.B);jg(this.Qa);this.S=!1};
m.D=function(){so(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){ol(b)}this.na=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(z[this.i[a]]=null);this.Ba=this.config=this.api=null;delete this.u;delete this.j;K.prototype.D.call(this)};
function vo(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function qo(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function uo(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function to(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===Cg(d||"","&")[b]}
function mo(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?nb(e):e}return b}
;var zo={},Ao="player_uid_"+(1E9*Math.random()>>>0);function Bo(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Wc(d):d;var e=Ao+"_"+Na(d),f=zo[e];if(f&&c)return Co(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new go(d,e,a,b);zo[e]=f;qh("player-added",f.api);Zd(f,function(){delete zo[f.getId()]});
return f.api}
function Co(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Do=null,Eo=null,Fo=null;function Go(){var a=Do.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Ho(a,b,c){a="ST-"+ec(a).toString(36);b=b?jc(b):"";c=c||5;yl()&&Rh(a,b,c)}
;function Io(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=hc(window.location.href);g&&f.push(g);g=hc(d);if(0<=Za(f,g)||!g&&0==d.lastIndexOf("/",0))if(N("autoescape_tempdata_url")&&(f=document.createElement("a"),$b(f,d),d=f.href),d){g=d.match(fc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Tl()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&Ho(d,b,k)}else Ho(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=kc(a,l)+n;var r=void 0===r?jd:r;a:{r=void 0===r?jd:r;for(l=0;l<r.length;++l)if(n=r[l],n instanceof hd&&n.isValid(a)){r=new Qc(a,Oc);break a}r=void 0}c.href=Sc(r||Rc)}return!0}
;A("yt.setConfig",M,void 0);A("yt.config.set",M,void 0);A("yt.setMsg",Vf,void 0);A("yt.msgs.set",Vf,void 0);A("yt.logging.errors.log",ol,void 0);
A("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}Gl(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);N("embeds_js_api_set_1p_cookie")&&(c=Hg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));M("FORCE_CSI_ON_GEL",!0);
c=["ol"];Cm("").info.actionType="embed";c&&M("TIMING_AFT_KEYS",c);M("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Tm(d,c[d]);Tm("is_nav",1);(d=Tl())&&Tm("csn",d);(d=F("PREVIOUS_ACTION",void 0))&&!Om()&&Tm("pa",d);d=xm();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&Tm("p",c);e&&Tm("t",e);Tm("yt_vis",Wm());Tm("yt_lt","cold");c=tm();if(e=vm())Z("srt",c.responseStart),1!==d.prerender&&(Tm("yt_sts","n",void 0),Z("_start",e,void 0));d=Am();0<d&&Z("fpt",d);d=
tm();d.isPerformanceNavigationTiming&&Tm("pnt",1,void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=vm()&&0<d.connectEnd-
d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));W&&W.getEntriesByType&&Ym();d=[];if(document.querySelector&&W&&W.getEntriesByName)for(var f in qm)qm.hasOwnProperty(f)&&(c=qm[f],Xm(f,c)&&d.push(c));for(f=0;f<d.length;f++)Tm("rc",d[f]);if(Om(void 0)){f={actionType:Im[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Im[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(d=Tl())f.clientScreenNonce=d;d=ym(void 0);c=wm(void 0).cttAuthInfo;
Gm().info(f,d,c)}f=xm();c=sm();if("cold"===f.yt_lt&&(d=Qm(),e=d.gelTicks?d.gelTicks:d.gelTicks={},d=d.gelInfos?d.gelInfos:d.gelInfos={},Om())){for(var g in c)"tick_"+g in e||Pm(g,c[g]);g=Sm();c=ym();e=wm().cttAuthInfo;var h={},k=!1,l;for(l in f)if(!("info_"+l in d)){var n=Rm(l,f[l]);n&&(em(g,n),em(h,n),k=!0)}k&&Gm().info(h,c,e)}A("ytglobal.timingready_",!0,void 0);Um();(l=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in l?(l=l.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,
l.serializedForcedExperimentIds||(g=Hg(),g.forced_experiments&&(l.serializedForcedExperimentIds=g.forced_experiments)),Do=Bo(a,l,!1)):Do=Bo(a);Do.addEventListener("onVideoDataChange",Go);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?Fo=new Qn(Do):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Eo=new Xn(window.parent,a,b),Fo=new Un(Do,Eo.connection));un();N("networkless_logging_web_embedded")&&(N("embeds_web_enable_new_nwl")?Uk():Ck());N("embeds_enable_ua_ch_polyfill")&&In()},
void 0);
var Jo=Rf(function(){Vm();var a=Th.getInstance(),b=!!((Wh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&be(document.body,"exp-invert-logo"))if(c&&!be(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!be(d,"inverted-hdpi")){var e=$d(d);ae(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&be(document.body,"inverted-hdpi")&&ce();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Wh(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete Sh[b]:(c=d.toString(16),Sh[b]=c.toString());c=!0;N("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Sh)d.push(f+"="+encodeURIComponent(String(Sh[f])));Rh(b,d.join("&"),63072E3,a.i,c)}$m.h||($m.h=new $m);a=$m.h;f=16623;var g=void 0===g?{}:g;Object.values(ql).includes(f)||(nl(new pi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.A=[];a.u=[];g.Va?cn(a,f,g):dn(a,f,g)}),Ko=Rf(function(){Do&&
Do.sendAbandonmentPing&&Do.sendAbandonmentPing();
F("PL_ATT")&&An.dispose();for(var a=0,b=sn.length;a<b;a++)rg(sn[a]);sn.length=0;qn("//static.doubleclick.net/instream/ad_status.js");tn=!1;M("DCLKSTAT",0);Yd(Fo,Eo);Do&&(Do.removeEventListener("onVideoDataChange",Go),Do.destroy())});
window.addEventListener?(window.addEventListener("load",Jo),window.addEventListener("unload",Ko)):window.attachEvent&&(window.attachEvent("onload",Jo),window.attachEvent("onunload",Ko));Ua("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||Bn);Ua("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||Cn);Ua("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||vn);
Ua("yt.player.exports.navigate",C("yt.player.exports.navigate")||Io);Ua("yt.util.activity.init",C("yt.util.activity.init")||tg);Ua("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||wg);Ua("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||ug);}).call(this);
