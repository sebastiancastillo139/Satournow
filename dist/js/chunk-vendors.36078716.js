(self["webpackChunkSa_Tour_Now_"]=self["webpackChunkSa_Tour_Now_"]||[]).push([[998],{1001:function(t,e,n){"use strict";function a(t,e,n,a,r,i,o,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,{Z:function(){return a}})},9662:function(t,e,n){var a=n(7854),r=n(614),i=n(6330),o=a.TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},6077:function(t,e,n){var a=n(7854),r=n(614),i=a.String,o=a.TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var a=n(5112),r=n(30),i=n(3070),o=a("unscopables"),s=Array.prototype;void 0==s[o]&&i.f(s,o,{configurable:!0,value:r(null)}),t.exports=function(t){s[o][t]=!0}},5787:function(t,e,n){var a=n(7854),r=n(7976),i=a.TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var a=n(7854),r=n(111),i=a.String,o=a.TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var a,r,i,o=n(4019),s=n(9781),l=n(7854),c=n(614),u=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),v=n(8052),m=n(3070).f,g=n(7976),b=n(9518),y=n(7674),z=n(5112),w=n(9711),M=l.Int8Array,A=M&&M.prototype,V=l.Uint8ClampedArray,C=V&&V.prototype,H=M&&b(M),O=A&&b(A),I=Object.prototype,S=l.TypeError,k=z("toStringTag"),B=w("TYPED_ARRAY_TAG"),L=w("TYPED_ARRAY_CONSTRUCTOR"),T=o&&!!y&&"Opera"!==d(l.opera),E=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},_={BigInt64Array:8,BigUint64Array:8},x=function(t){if(!u(t))return!1;var e=d(t);return"DataView"===e||h(P,e)||h(_,e)},F=function(t){if(!u(t))return!1;var e=d(t);return h(P,e)||h(_,e)},D=function(t){if(F(t))return t;throw S("Target is not a typed array")},j=function(t){if(c(t)&&(!y||g(H,t)))return t;throw S(f(t)+" is not a typed array constructor")},N=function(t,e,n,a){if(s){if(n)for(var r in P){var i=l[r];if(i&&h(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(c){}}}O[t]&&!n||v(O,t,n?e:T&&A[t]||e,a)}},R=function(t,e,n){var a,r;if(s){if(y){if(n)for(a in P)if(r=l[a],r&&h(r,t))try{delete r[t]}catch(i){}if(H[t]&&!n)return;try{return v(H,t,n?e:T&&H[t]||e)}catch(i){}}for(a in P)r=l[a],!r||r[t]&&!n||v(r,t,e)}};for(a in P)r=l[a],i=r&&r.prototype,i?p(i,L,r):T=!1;for(a in _)r=l[a],i=r&&r.prototype,i&&p(i,L,r);if((!T||!c(H)||H===Function.prototype)&&(H=function(){throw S("Incorrect invocation")},T))for(a in P)l[a]&&y(l[a],H);if((!T||!O||O===I)&&(O=H.prototype,T))for(a in P)l[a]&&y(l[a].prototype,O);if(T&&b(C)!==O&&y(C,O),s&&!h(O,k))for(a in E=!0,m(O,k,{get:function(){return u(this)?this[B]:void 0}}),P)l[a]&&p(l[a],B,a);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:T,TYPED_ARRAY_CONSTRUCTOR:L,TYPED_ARRAY_TAG:E&&B,aTypedArray:D,aTypedArrayConstructor:j,exportTypedArrayMethod:N,exportTypedArrayStaticMethod:R,isView:x,isTypedArray:F,TypedArray:H,TypedArrayPrototype:O}},1318:function(t,e,n){var a=n(5656),r=n(1400),i=n(6244),o=function(t){return function(e,n,o){var s,l=a(e),c=i(l),u=r(o,c);if(t&&n!=n){while(c>u)if(s=l[u++],s!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},206:function(t,e,n){var a=n(1702);t.exports=a([].slice)},4326:function(t,e,n){var a=n(1702),r=a({}.toString),i=a("".slice);t.exports=function(t){return i(r(t),8,-1)}},648:function(t,e,n){var a=n(7854),r=n(1694),i=n(614),o=n(4326),s=n(5112),l=s("toStringTag"),c=a.Object,u="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=c(t),l))?n:u?o(e):"Object"==(a=o(e))&&i(e.callee)?"Arguments":a}},7741:function(t,e,n){var a=n(1702),r=Error,i=a("".replace),o=function(t){return String(r(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,l=s.test(o);t.exports=function(t,e){if(l&&"string"==typeof t&&!r.prepareStackTrace)while(e--)t=i(t,s,"");return t}},9920:function(t,e,n){var a=n(2597),r=n(3887),i=n(1236),o=n(3070);t.exports=function(t,e,n){for(var s=r(e),l=o.f,c=i.f,u=0;u<s.length;u++){var h=s[u];a(t,h)||n&&a(n,h)||l(t,h,c(e,h))}}},8544:function(t,e,n){var a=n(7293);t.exports=!a((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var a=n(9781),r=n(3070),i=n(9114);t.exports=a?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var a=n(7854),r=n(614),i=n(8880),o=n(6339),s=n(3505);t.exports=function(t,e,n,l){var c=!!l&&!!l.unsafe,u=!!l&&!!l.enumerable,h=!!l&&!!l.noTargetGet,d=l&&void 0!==l.name?l.name:e;return r(n)&&o(n,d,l),t===a?(u?t[e]=n:s(e,n),t):(c?!h&&t[e]&&(u=!0):delete t[e],u?t[e]=n:i(t,e,n),t)}},9781:function(t,e,n){var a=n(7293);t.exports=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var a=n(7854),r=n(111),i=a.document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(t,e,n){var a=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(a)},5268:function(t,e,n){var a=n(4326),r=n(7854);t.exports="process"==a(r.process)},8113:function(t,e,n){var a=n(5005);t.exports=a("navigator","userAgent")||""},7392:function(t,e,n){var a,r,i=n(7854),o=n(8113),s=i.process,l=i.Deno,c=s&&s.versions||l&&l.version,u=c&&c.v8;u&&(a=u.split("."),r=a[0]>0&&a[0]<4?1:+(a[0]+a[1])),!r&&o&&(a=o.match(/Edge\/(\d+)/),(!a||a[1]>=74)&&(a=o.match(/Chrome\/(\d+)/),a&&(r=+a[1]))),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var a=n(7293),r=n(9114);t.exports=!a((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",r(1,7)),7!==t.stack)}))},2109:function(t,e,n){var a=n(7854),r=n(1236).f,i=n(8880),o=n(8052),s=n(3505),l=n(9920),c=n(4705);t.exports=function(t,e){var n,u,h,d,f,p,v=t.target,m=t.global,g=t.stat;if(u=m?a:g?a[v]||s(v,{}):(a[v]||{}).prototype,u)for(h in e){if(f=e[h],t.noTargetGet?(p=r(u,h),d=p&&p.value):d=u[h],n=c(m?h:v+(g?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(t.sham||d&&d.sham)&&i(f,"sham",!0),o(u,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var a=n(4374),r=Function.prototype,i=r.apply,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(a?o.bind(i):function(){return o.apply(i,arguments)})},9974:function(t,e,n){var a=n(1702),r=n(9662),i=n(4374),o=a(a.bind);t.exports=function(t,e){return r(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var a=n(7293);t.exports=!a((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var a=n(4374),r=Function.prototype.call;t.exports=a?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(t,e,n){var a=n(9781),r=n(2597),i=Function.prototype,o=a&&Object.getOwnPropertyDescriptor,s=r(i,"name"),l=s&&"something"===function(){}.name,c=s&&(!a||a&&o(i,"name").configurable);t.exports={EXISTS:s,PROPER:l,CONFIGURABLE:c}},1702:function(t,e,n){var a=n(4374),r=Function.prototype,i=r.bind,o=r.call,s=a&&i.bind(o,o);t.exports=a?function(t){return t&&s(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var a=n(7854),r=n(614),i=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(a[t]):a[t]&&a[t][e]}},8173:function(t,e,n){var a=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:a(n)}},7854:function(t,e,n){var a=function(t){return t&&t.Math==Math&&t};t.exports=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var a=n(1702),r=n(7908),i=a({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(r(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var a=n(5005);t.exports=a("document","documentElement")},4664:function(t,e,n){var a=n(9781),r=n(7293),i=n(317);t.exports=!a&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var a=n(7854),r=n(1702),i=n(7293),o=n(4326),s=a.Object,l=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?l(t,""):s(t)}:s},9587:function(t,e,n){var a=n(614),r=n(111),i=n(7674);t.exports=function(t,e,n){var o,s;return i&&a(o=e.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&i(t,s),t}},2788:function(t,e,n){var a=n(1702),r=n(614),i=n(5465),o=a(Function.toString);r(i.inspectSource)||(i.inspectSource=function(t){return o(t)}),t.exports=i.inspectSource},8340:function(t,e,n){var a=n(111),r=n(8880);t.exports=function(t,e){a(e)&&"cause"in e&&r(t,"cause",e.cause)}},9909:function(t,e,n){var a,r,i,o=n(8536),s=n(7854),l=n(1702),c=n(111),u=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),v="Object already initialized",m=s.TypeError,g=s.WeakMap,b=function(t){return i(t)?r(t):a(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var z=d.state||(d.state=new g),w=l(z.get),M=l(z.has),A=l(z.set);a=function(t,e){if(M(z,t))throw new m(v);return e.facade=t,A(z,t,e),e},r=function(t){return w(z,t)||{}},i=function(t){return M(z,t)}}else{var V=f("state");p[V]=!0,a=function(t,e){if(h(t,V))throw new m(v);return e.facade=t,u(t,V,e),e},r=function(t){return h(t,V)?t[V]:{}},i=function(t){return h(t,V)}}t.exports={set:a,get:r,has:i,enforce:b,getterFor:y}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var a=n(7293),r=n(614),i=/#|\.prototype\./,o=function(t,e){var n=l[s(t)];return n==u||n!=c&&(r(e)?a(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var a=n(614);t.exports=function(t){return"object"==typeof t?null!==t:a(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var a=n(7854),r=n(5005),i=n(614),o=n(7976),s=n(3307),l=a.Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,l(t))}},6244:function(t,e,n){var a=n(7466);t.exports=function(t){return a(t.length)}},6339:function(t,e,n){var a=n(7293),r=n(614),i=n(2597),o=n(3070).f,s=n(6530).CONFIGURABLE,l=n(2788),c=n(9909),u=c.enforce,h=c.get,d=!a((function(){return 8!==o((function(){}),"length",{value:8}).length})),f=String(String).split("String"),p=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||s&&t.name!==e)&&o(t,"name",{value:e,configurable:!0}),d&&n&&i(n,"arity")&&t.length!==n.arity&&o(t,"length",{value:n.arity});var a=u(t);return i(a,"source")||(a.source=f.join("string"==typeof e?e:"")),t};Function.prototype.toString=p((function(){return r(this)&&h(this).source||l(this)}),"toString")},133:function(t,e,n){var a=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&a&&a<41}))},8536:function(t,e,n){var a=n(7854),r=n(614),i=n(2788),o=a.WeakMap;t.exports=r(o)&&/native code/.test(i(o))},6277:function(t,e,n){var a=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:a(t)}},30:function(t,e,n){var a,r=n(9670),i=n(6048),o=n(748),s=n(3501),l=n(490),c=n(317),u=n(6200),h=">",d="<",f="prototype",p="script",v=u("IE_PROTO"),m=function(){},g=function(t){return d+p+h+t+d+"/"+p+h},b=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=c("iframe"),n="java"+p+":";return e.style.display="none",l.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(g("document.F=Object")),t.close(),t.F},z=function(){try{a=new ActiveXObject("htmlfile")}catch(e){}z="undefined"!=typeof document?document.domain&&a?b(a):y():b(a);var t=o.length;while(t--)delete z[f][o[t]];return z()};s[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=r(t),n=new m,m[f]=null,n[v]=t):n=z(),void 0===e?n:i.f(n,e)}},6048:function(t,e,n){var a=n(9781),r=n(3353),i=n(3070),o=n(9670),s=n(5656),l=n(1956);e.f=a&&!r?Object.defineProperties:function(t,e){o(t);var n,a=s(e),r=l(e),c=r.length,u=0;while(c>u)i.f(t,n=r[u++],a[n]);return t}},3070:function(t,e,n){var a=n(7854),r=n(9781),i=n(4664),o=n(3353),s=n(9670),l=n(4948),c=a.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";e.f=r?o?function(t,e,n){if(s(t),e=l(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var a=h(t,e);a&&a[p]&&(t[e]=n.value,n={configurable:f in n?n[f]:a[f],enumerable:d in n?n[d]:a[d],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=l(e),s(n),i)try{return u(t,e,n)}catch(a){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var a=n(9781),r=n(6916),i=n(5296),o=n(9114),s=n(5656),l=n(4948),c=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=a?h:function(t,e){if(t=s(t),e=l(e),u)try{return h(t,e)}catch(n){}if(c(t,e))return o(!r(i.f,t,e),t[e])}},8006:function(t,e,n){var a=n(6324),r=n(748),i=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var a=n(7854),r=n(2597),i=n(614),o=n(7908),s=n(6200),l=n(8544),c=s("IE_PROTO"),u=a.Object,h=u.prototype;t.exports=l?u.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?h:null}},7976:function(t,e,n){var a=n(1702);t.exports=a({}.isPrototypeOf)},6324:function(t,e,n){var a=n(1702),r=n(2597),i=n(5656),o=n(1318).indexOf,s=n(3501),l=a([].push);t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&l(u,n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||l(u,n));return u}},1956:function(t,e,n){var a=n(6324),r=n(748);t.exports=Object.keys||function(t){return a(t,r)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,r=a&&!n.call({1:2},1);e.f=r?function(t){var e=a(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var a=n(1702),r=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=a(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,a){return r(n),i(a),e?t(n,a):n.__proto__=a,n}}():void 0)},2140:function(t,e,n){var a=n(7854),r=n(6916),i=n(614),o=n(111),s=a.TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var a=n(5005),r=n(1702),i=n(8006),o=n(5181),s=n(9670),l=r([].concat);t.exports=a("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?l(e,n(t)):e}},2626:function(t,e,n){var a=n(3070).f;t.exports=function(t,e,n){n in t||a(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t,e,n){var a=n(7854),r=a.TypeError;t.exports=function(t){if(void 0==t)throw r("Can't call method on "+t);return t}},3505:function(t,e,n){var a=n(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(a,t,{value:e,configurable:!0,writable:!0})}catch(n){a[t]=e}return e}},6200:function(t,e,n){var a=n(2309),r=n(9711),i=a("keys");t.exports=function(t){return i[t]||(i[t]=r(t))}},5465:function(t,e,n){var a=n(7854),r=n(3505),i="__core-js_shared__",o=a[i]||r(i,{});t.exports=o},2309:function(t,e,n){var a=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.4",mode:a?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"})},261:function(t,e,n){var a,r,i,o,s=n(7854),l=n(2104),c=n(9974),u=n(614),h=n(2597),d=n(7293),f=n(490),p=n(206),v=n(317),m=n(8053),g=n(6833),b=n(5268),y=s.setImmediate,z=s.clearImmediate,w=s.process,M=s.Dispatch,A=s.Function,V=s.MessageChannel,C=s.String,H=0,O={},I="onreadystatechange";try{a=s.location}catch(T){}var S=function(t){if(h(O,t)){var e=O[t];delete O[t],e()}},k=function(t){return function(){S(t)}},B=function(t){S(t.data)},L=function(t){s.postMessage(C(t),a.protocol+"//"+a.host)};y&&z||(y=function(t){m(arguments.length,1);var e=u(t)?t:A(t),n=p(arguments,1);return O[++H]=function(){l(e,void 0,n)},r(H),H},z=function(t){delete O[t]},b?r=function(t){w.nextTick(k(t))}:M&&M.now?r=function(t){M.now(k(t))}:V&&!g?(i=new V,o=i.port2,i.port1.onmessage=B,r=c(o.postMessage,o)):s.addEventListener&&u(s.postMessage)&&!s.importScripts&&a&&"file:"!==a.protocol&&!d(L)?(r=L,s.addEventListener("message",B,!1)):r=I in v("script")?function(t){f.appendChild(v("script"))[I]=function(){f.removeChild(this),S(t)}}:function(t){setTimeout(k(t),0)}),t.exports={set:y,clear:z}},1400:function(t,e,n){var a=n(9303),r=Math.max,i=Math.min;t.exports=function(t,e){var n=a(t);return n<0?r(n+e,0):i(n,e)}},5656:function(t,e,n){var a=n(8361),r=n(4488);t.exports=function(t){return a(r(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var a=+t;return a!==a||0===a?0:(a>0?n:e)(a)}},7466:function(t,e,n){var a=n(9303),r=Math.min;t.exports=function(t){return t>0?r(a(t),9007199254740991):0}},7908:function(t,e,n){var a=n(7854),r=n(4488),i=a.Object;t.exports=function(t){return i(r(t))}},4590:function(t,e,n){var a=n(7854),r=n(3002),i=a.RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw i("Wrong offset");return n}},3002:function(t,e,n){var a=n(7854),r=n(9303),i=a.RangeError;t.exports=function(t){var e=r(t);if(e<0)throw i("The argument can't be less than 0");return e}},7593:function(t,e,n){var a=n(7854),r=n(6916),i=n(111),o=n(2190),s=n(8173),l=n(2140),c=n(5112),u=a.TypeError,h=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,a=s(t,h);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),l(t,e)}},4948:function(t,e,n){var a=n(7593),r=n(2190);t.exports=function(t){var e=a(t,"string");return r(e)?e:e+""}},1694:function(t,e,n){var a=n(5112),r=a("toStringTag"),i={};i[r]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var a=n(7854),r=n(648),i=a.String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,e,n){var a=n(7854),r=a.String;t.exports=function(t){try{return r(t)}catch(e){return"Object"}}},9711:function(t,e,n){var a=n(1702),r=0,i=Math.random(),o=a(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+i,36)}},3307:function(t,e,n){var a=n(133);t.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var a=n(9781),r=n(7293);t.exports=a&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t,e,n){var a=n(7854),r=a.TypeError;t.exports=function(t,e){if(t<e)throw r("Not enough arguments");return t}},5112:function(t,e,n){var a=n(7854),r=n(2309),i=n(2597),o=n(9711),s=n(133),l=n(3307),c=r("wks"),u=a.Symbol,h=u&&u["for"],d=l?u:u&&u.withoutSetter||o;t.exports=function(t){if(!i(c,t)||!s&&"string"!=typeof c[t]){var e="Symbol."+t;s&&i(u,t)?c[t]=u[t]:c[t]=l&&h?h(e):d(e)}return c[t]}},9191:function(t,e,n){"use strict";var a=n(5005),r=n(2597),i=n(8880),o=n(7976),s=n(7674),l=n(9920),c=n(2626),u=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),v=n(9781),m=n(1913);t.exports=function(t,e,n,g){var b="stackTraceLimit",y=g?2:1,z=t.split("."),w=z[z.length-1],M=a.apply(null,z);if(M){var A=M.prototype;if(!m&&r(A,"cause")&&delete A.cause,!n)return M;var V=a("Error"),C=e((function(t,e){var n=h(g?e:t,void 0),a=g?new M(t):new M;return void 0!==n&&i(a,"message",n),p&&i(a,"stack",f(a.stack,2)),this&&o(A,this)&&u(a,this,C),arguments.length>y&&d(a,arguments[y]),a}));if(C.prototype=A,"Error"!==w?s?s(C,V):l(C,V,{name:!0}):v&&b in M&&(c(C,M,b),c(C,M,"prepareStackTrace")),l(C,M),!m)try{A.name!==w&&i(A,"name",w),A.constructor=C}catch(H){}return C}}},2262:function(t,e,n){"use strict";var a=n(2109),r=n(7908),i=n(6244),o=n(9303),s=n(1223);a({target:"Array",proto:!0},{at:function(t){var e=r(this),n=i(e),a=o(t),s=a>=0?a:n+a;return s<0||s>=n?void 0:e[s]}}),s("at")},6699:function(t,e,n){"use strict";var a=n(2109),r=n(1318).includes,i=n(7293),o=n(1223),s=i((function(){return!Array(1).includes()}));a({target:"Array",proto:!0,forced:s},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(t,e,n){var a=n(2109),r=n(7854),i=n(2104),o=n(9191),s="WebAssembly",l=r[s],c=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=o(t,e,c),a({global:!0,arity:1,forced:c},n)},h=function(t,e){if(l&&l[t]){var n={};n[t]=o(s+"."+t,e,c),a({target:s,stat:!0,arity:1,forced:c},n)}};u("Error",(function(t){return function(e){return i(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),u("URIError",(function(t){return function(e){return i(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var a=n(2109),r=n(1702),i=n(4488),o=n(9303),s=n(1340),l=n(7293),c=r("".charAt),u=l((function(){return"\ud842"!=="𠮷".at(-2)}));a({target:"String",proto:!0,forced:u},{at:function(t){var e=s(i(this)),n=e.length,a=o(t),r=a>=0?a:n+a;return r<0||r>=n?void 0:c(e,r)}})},8675:function(t,e,n){"use strict";var a=n(260),r=n(6244),i=n(9303),o=a.aTypedArray,s=a.exportTypedArrayMethod;s("at",(function(t){var e=o(this),n=r(e),a=i(t),s=a>=0?a:n+a;return s<0||s>=n?void 0:e[s]}))},3462:function(t,e,n){"use strict";var a=n(7854),r=n(6916),i=n(260),o=n(6244),s=n(4590),l=n(7908),c=n(7293),u=a.RangeError,h=a.Int8Array,d=h&&h.prototype,f=d&&d.set,p=i.aTypedArray,v=i.exportTypedArrayMethod,m=!c((function(){var t=new Uint8ClampedArray(2);return r(f,t,{length:1,0:3},1),3!==t[1]})),g=m&&i.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));v("set",(function(t){p(this);var e=s(arguments.length>1?arguments[1]:void 0,1),n=l(t);if(m)return r(f,this,n,e);var a=this.length,i=o(n),c=0;if(i+e>a)throw u("Wrong length");while(c<i)this[e+c]=n[c++]}),!m||g)},1091:function(t,e,n){var a=n(2109),r=n(7854),i=n(261).clear;a({global:!0,bind:!0,enumerable:!0,forced:r.clearImmediate!==i},{clearImmediate:i})},2801:function(t,e,n){"use strict";var a=n(2109),r=n(5005),i=n(9114),o=n(3070).f,s=n(2597),l=n(5787),c=n(9587),u=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",v=r("Error"),m=r(p),g=function(){l(this,b);var t=arguments.length,e=u(t<1?void 0:arguments[0]),n=u(t<2?void 0:arguments[1],"Error"),a=new m(e,n),r=v(e);return r.name=p,o(a,"stack",i(1,d(r.stack,1))),c(a,this,g),a},b=g.prototype=m.prototype,y="stack"in v(p),z="stack"in new m(1,2),w=y&&!z;a({global:!0,forced:f||w},{DOMException:w?g:m});var M=r(p),A=M.prototype;if(A.constructor!==M)for(var V in f||o(A,"constructor",i(1,M)),h)if(s(h,V)){var C=h[V],H=C.s;s(M,H)||o(M,H,i(6,C.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var a=n(2109),r=n(7854),i=n(261).set;a({global:!0,bind:!0,enumerable:!0,forced:r.setImmediate!==i},{setImmediate:i})},44:function(){},3536:function(t,e,n){"use strict";n.d(e,{BH:function(){return c},L:function(){return s},LL:function(){return w},Mn:function(){return m},X3:function(){return j},ZR:function(){return z},b$:function(){return f},d:function(){return p},eu:function(){return b},hl:function(){return g},m9:function(){return E},ne:function(){return k},pd:function(){return S},ru:function(){return d},tV:function(){return l},uI:function(){return h},vZ:function(){return C},w1:function(){return v},xO:function(){return O},xb:function(){return V},z$:function(){return u},zd:function(){return I}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&a+1<t.length&&56320===(64512&t.charCodeAt(a+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++a)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,a=0;while(n<t.length){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[a++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[n++],o=t[n++],s=t[n++],l=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&s)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(1023&l))}else{const i=t[n++],o=t[n++];e[a++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,s=r+2<t.length,l=s?t[r+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;s||(d=64,i||(h=64)),a.push(n[c],n[u],n[h],n[d])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],i=r<t.length,o=i?n[t.charAt(r)]:0;++r;const s=r<t.length,l=s?n[t.charAt(r)]:64;++r;const c=r<t.length,u=c?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==l||null==u)throw Error();const h=e<<2|o>>4;if(a.push(h),64!==l){const t=o<<4&240|l>>2;if(a.push(t),64!==u){const t=l<<6&192|u;a.push(t)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=a(t);return i.encodeByteArray(e,!0)},s=function(t){return o(t).replace(/\./g,"")},l=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return u().indexOf("Electron/")>=0}function v(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return u().indexOf("MSAppHost/")>=0}function g(){return"object"===typeof indexedDB}function b(){return new Promise(((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y="FirebaseError";class z extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=y,Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},a=`${this.service}/${t}`,r=this.errors[t],i=r?M(r,n):"Error",o=`${this.serviceName}: ${i} (${a}).`,s=new z(a,o,n);return s}}function M(t,e){return t.replace(A,((t,n)=>{const a=e[n];return null!=a?String(a):`<${n}?>`}))}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function C(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const n=t[r],i=e[r];if(H(n)&&H(i)){if(!C(n,i))return!1}else if(n!==i)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function H(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function I(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,a]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(a)}})),e}function S(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){const n=new B(t,e);return n.subscribe.bind(n)}class B{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let a;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");a=L(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===a.next&&(a.next=T),void 0===a.error&&(a.error=T),void 0===a.complete&&(a.complete=T);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch(t){}})),this.observers.push(a),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function L(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function T(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){return new Promise(((n,a)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{var n;a(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)}}))}class _{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e="readonly"){return new x(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new F(this._db.createObjectStore(t,e))}close(){this._db.close()}}class x{constructor(t){this._transaction=t,this.complete=new Promise(((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}}))}objectStore(t){return new F(this._transaction.objectStore(t))}}class F{constructor(t){this._store=t}index(t){return new D(this._store.index(t))}createIndex(t,e,n){return new D(this._store.createIndex(t,e,n))}get(t){const e=this._store.get(t);return P(e,"Error reading from IndexedDB")}put(t,e){const n=this._store.put(t,e);return P(n,"Error writing to IndexedDB")}delete(t){const e=this._store.delete(t);return P(e,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return P(t,"Error clearing IndexedDB object store")}}class D{constructor(t){this._index=t}get(t){const e=this._index.get(t);return P(e,"Error reading from IndexedDB")}}function j(t,e,n){return new Promise(((a,r)=>{try{const i=indexedDB.open(t,e);i.onsuccess=t=>{a(new _(t.target.result))},i.onerror=t=>{var e;r(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)},i.onupgradeneeded=t=>{n(new _(i.result),t.oldVersion,t.newVersion,new x(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}}))}},81:function(t,e,n){"use strict";n.d(e,{Qc:function(){return Xn},fL:function(){return Zn},qv:function(){return Jn},vI:function(){return Yn},vc:function(){return Kn}});n(1703),n(6699);
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function l(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return f(t)||v(t,e)||m(t,e)||y()}function h(t){return d(t)||p(t)||m(t)||b()}function d(t){if(Array.isArray(t))return g(t)}function f(t){if(Array.isArray(t))return t}function p(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function v(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,r,i=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(a=n.next()).done);o=!0)if(i.push(a.value),e&&i.length===e)break}catch(l){s=!0,r=l}finally{try{o||null==n["return"]||n["return"]()}finally{if(s)throw r}}return i}}function m(t,e){if(t){if("string"===typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var z=function(){},w={},M={},A=null,V={mark:z,measure:z};try{"undefined"!==typeof window&&(w=window),"undefined"!==typeof document&&(M=document),"undefined"!==typeof MutationObserver&&(A=MutationObserver),"undefined"!==typeof performance&&(V=performance)}catch(Qn){}var C=w.navigator||{},H=C.userAgent,O=void 0===H?"":H,I=w,S=M,k=A,B=V,L=(I.document,!!S.documentElement&&!!S.head&&"function"===typeof S.addEventListener&&"function"===typeof S.createElement),T=~O.indexOf("MSIE")||~O.indexOf("Trident/"),E="___FONT_AWESOME___",P=16,_="fa",x="svg-inline--fa",F="data-fa-i2svg",D="data-fa-pseudo-element",j="data-fa-pseudo-element-pending",N="data-prefix",R="data-icon",$="fontawesome-i2svg",U="async",G=["HTML","HEAD","STYLE","SCRIPT"],q=function(){try{return!0}catch(Qn){return!1}}(),W={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},K={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Y={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},X={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},J=/fa[srltdbk\-\ ]/,Z="fa-layers-text",Q=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,tt={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},et=[1,2,3,4,5,6,7,8,9,10],nt=et.concat([11,12,13,14,15,16,17,18,19,20]),at=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},it=[].concat(h(Object.keys(K)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY]).concat(et.map((function(t){return"".concat(t,"x")}))).concat(nt.map((function(t){return"w-".concat(t)}))),ot=I.FontAwesomeConfig||{};function st(t){var e=S.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function lt(t){return""===t||"false"!==t&&("true"===t||t)}if(S&&"function"===typeof S.querySelector){var ct=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ct.forEach((function(t){var e=u(t,2),n=e[0],a=e[1],r=lt(st(n));void 0!==r&&null!==r&&(ot[a]=r)}))}var ut={familyPrefix:_,styleDefault:"solid",replacementClass:x,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ht=r(r({},ut),ot);ht.autoReplaceSvg||(ht.observeMutations=!1);var dt={};Object.keys(ht).forEach((function(t){Object.defineProperty(dt,t,{enumerable:!0,set:function(e){ht[t]=e,ft.forEach((function(t){return t(dt)}))},get:function(){return ht[t]}})})),I.FontAwesomeConfig=dt;var ft=[];function pt(t){return ft.push(t),function(){ft.splice(ft.indexOf(t),1)}}var vt=P,mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gt(t){if(t&&L){var e=S.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=S.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return S.head.insertBefore(e,a),t}}var bt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yt(){var t=12,e="";while(t-- >0)e+=bt[62*Math.random()|0];return e}function zt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function wt(t){return t.classList?zt(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function Mt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function At(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(Mt(t[n]),'" ')}),"").trim()}function Vt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")}),"")}function Ct(t){return t.size!==mt.size||t.x!==mt.x||t.y!==mt.y||t.rotate!==mt.rotate||t.flipX||t.flipY}function Ht(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Ot(t){var e=t.transform,n=t.width,a=void 0===n?P:n,r=t.height,i=void 0===r?P:r,o=t.startCentered,s=void 0!==o&&o,l="";return l+=s&&T?"translate(".concat(e.x/vt-a/2,"em, ").concat(e.y/vt-i/2,"em) "):s?"translate(calc(-50% + ".concat(e.x/vt,"em), calc(-50% + ").concat(e.y/vt,"em)) "):"translate(".concat(e.x/vt,"em, ").concat(e.y/vt,"em) "),l+="scale(".concat(e.size/vt*(e.flipX?-1:1),", ").concat(e.size/vt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var It=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function St(){var t=_,e=x,n=dt.familyPrefix,a=dt.replacementClass,r=It;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var kt=!1;function Bt(){dt.autoAddCss&&!kt&&(gt(St()),kt=!0)}var Lt={mixout:function(){return{dom:{css:St,insertCss:Bt}}},hooks:function(){return{beforeDOMElementCreation:function(){Bt()},beforeI2svg:function(){Bt()}}}},Tt=I||{};Tt[E]||(Tt[E]={}),Tt[E].styles||(Tt[E].styles={}),Tt[E].hooks||(Tt[E].hooks={}),Tt[E].shims||(Tt[E].shims=[]);var Et=Tt[E],Pt=[],_t=function t(){S.removeEventListener("DOMContentLoaded",t),xt=1,Pt.map((function(t){return t()}))},xt=!1;function Ft(t){L&&(xt?setTimeout(t,0):Pt.push(t))}function Dt(t){var e=t.tag,n=t.attributes,a=void 0===n?{}:n,r=t.children,i=void 0===r?[]:r;return"string"===typeof t?Mt(t):"<".concat(e," ").concat(At(a),">").concat(i.map(Dt).join(""),"</").concat(e,">")}function jt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}L&&(xt=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),xt||S.addEventListener("DOMContentLoaded",_t));var Nt=function(t,e){return function(n,a,r,i){return t.call(e,n,a,r,i)}},Rt=function(t,e,n,a){var r,i,o,s=Object.keys(t),l=s.length,c=void 0!==a?Nt(e,a):e;for(void 0===n?(r=1,o=t[s[0]]):(r=0,o=n);r<l;r++)i=s[r],o=c(o,t[i],i,t);return o};function $t(t){var e=[],n=0,a=t.length;while(n<a){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);56320==(64512&i)?e.push(((1023&r)<<10)+(1023&i)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ut(t){var e=$t(t);return 1===e.length?e[0].toString(16):null}function Gt(t,e){var n,a=t.length,r=t.charCodeAt(e);return r>=55296&&r<=56319&&a>e+1&&(n=t.charCodeAt(e+1),n>=56320&&n<=57343)?1024*(r-55296)+n-56320+65536:r}function qt(t){return Object.keys(t).reduce((function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e}),{})}function Wt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.skipHooks,i=void 0!==a&&a,o=qt(e);"function"!==typeof Et.hooks.addPack||i?Et.styles[t]=r(r({},Et.styles[t]||{}),o):Et.hooks.addPack(t,qt(e)),"fas"===t&&Wt("fa",e)}var Kt=Et.styles,Yt=Et.shims,Xt=Object.values(Y),Jt=null,Zt={},Qt={},te={},ee={},ne={},ae=Object.keys(W);function re(t){return~it.indexOf(t)}function ie(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a!==t||""===r||re(r)?null:r}var oe=function(){var t=function(t){return Rt(Kt,(function(e,n,a){return e[a]=Rt(n,t,{}),e}),{})};Zt=t((function(t,e,n){if(e[3]&&(t[e[3]]=n),e[2]){var a=e[2].filter((function(t){return"number"===typeof t}));a.forEach((function(e){t[e.toString(16)]=n}))}return t})),Qt=t((function(t,e,n){if(t[n]=n,e[2]){var a=e[2].filter((function(t){return"string"===typeof t}));a.forEach((function(e){t[e]=n}))}return t})),ne=t((function(t,e,n){var a=e[2];return t[n]=n,a.forEach((function(e){t[e]=n})),t}));var e="far"in Kt||dt.autoFetchSvg,n=Rt(Yt,(function(t,n){var a=n[0],r=n[1],i=n[2];return"far"!==r||e||(r="fas"),"string"===typeof a&&(t.names[a]={prefix:r,iconName:i}),"number"===typeof a&&(t.unicodes[a.toString(16)]={prefix:r,iconName:i}),t}),{names:{},unicodes:{}});te=n.names,ee=n.unicodes,Jt=pe(dt.styleDefault)};function se(t,e){return(Zt[t]||{})[e]}function le(t,e){return(Qt[t]||{})[e]}function ce(t,e){return(ne[t]||{})[e]}function ue(t){return te[t]||{prefix:null,iconName:null}}function he(t){var e=ee[t],n=se("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function de(){return Jt}pt((function(t){Jt=pe(t.styleDefault)})),oe();var fe=function(){return{prefix:null,iconName:null,rest:[]}};function pe(t){var e=W[t],n=K[t]||K[e],a=t in Et.styles?t:null;return n||a||null}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.skipLookups,a=void 0!==n&&n,r=null,i=t.reduce((function(t,e){var n=ie(dt.familyPrefix,e);if(Kt[e]?(e=Xt.includes(e)?X[e]:e,r=e,t.prefix=e):ae.indexOf(e)>-1?(r=e,t.prefix=pe(e)):n?t.iconName=n:e!==dt.replacementClass&&t.rest.push(e),!a&&t.prefix&&t.iconName){var i="fa"===r?ue(t.iconName):{},o=ce(t.prefix,t.iconName);i.prefix&&(r=null),t.iconName=i.iconName||o||t.iconName,t.prefix=i.prefix||t.prefix,"far"!==t.prefix||Kt["far"]||!Kt["fas"]||dt.autoFetchSvg||(t.prefix="fas")}return t}),fe());return"fa"!==i.prefix&&"fa"!==r||(i.prefix=de()||"fas"),i}var me=function(){function t(){o(this,t),this.definitions={}}return l(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(e){t.definitions[e]=r(r({},t.definitions[e]||{}),i[e]),Wt(e,i[e]);var n=Y[e];n&&Wt(n,i[e]),oe()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var a=n[e],r=a.prefix,i=a.iconName,o=a.icon,s=o[2];t[r]||(t[r]={}),s.length>0&&s.forEach((function(e){"string"===typeof e&&(t[r][e]=o)})),t[r][i]=o})),t}}]),t}(),ge=[],be={},ye={},ze=Object.keys(ye);function we(t,e){var n=e.mixoutsTo;return ge=t,be={},Object.keys(ye).forEach((function(t){-1===ze.indexOf(t)&&delete ye[t]})),ge.forEach((function(t){var e=t.mixout?t.mixout():{};if(Object.keys(e).forEach((function(t){"function"===typeof e[t]&&(n[t]=e[t]),"object"===i(e[t])&&Object.keys(e[t]).forEach((function(a){n[t]||(n[t]={}),n[t][a]=e[t][a]}))})),t.hooks){var a=t.hooks();Object.keys(a).forEach((function(t){be[t]||(be[t]=[]),be[t].push(a[t])}))}t.provides&&t.provides(ye)})),n}function Me(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=be[t]||[];return i.forEach((function(t){e=t.apply(null,[e].concat(a))})),e}function Ae(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=be[t]||[];r.forEach((function(t){t.apply(null,n)}))}function Ve(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ye[t]?ye[t].apply(null,e):void 0}function Ce(t){"fa"===t.prefix&&(t.prefix="fas");var e=t.iconName,n=t.prefix||de();if(e)return e=ce(n,e)||e,jt(He.definitions,n,e)||jt(Et.styles,n,e)}var He=new me,Oe=function(){dt.autoReplaceSvg=!1,dt.observeMutations=!1,Ae("noAuto")},Ie={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return L?(Ae("beforeI2svg",t),Ve("pseudoElements2svg",t),Ve("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot;!1===dt.autoReplaceSvg&&(dt.autoReplaceSvg=!0),dt.observeMutations=!0,Ft((function(){Be({autoReplaceSvgRoot:e}),Ae("watch",t)}))}},Se={icon:function(t){if(null===t)return null;if("object"===i(t)&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ce(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&2===t.length){var e=0===t[1].indexOf("fa-")?t[1].slice(3):t[1],n=pe(t[0]);return{prefix:n,iconName:ce(n,e)||e}}if("string"===typeof t&&(t.indexOf("".concat(dt.familyPrefix,"-"))>-1||t.match(J))){var a=ve(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||de(),iconName:ce(a.prefix,a.iconName)||a.iconName}}if("string"===typeof t){var r=de();return{prefix:r,iconName:ce(r,t)||t}}}},ke={noAuto:Oe,config:dt,dom:Ie,parse:Se,library:He,findIconDefinition:Ce,toHtml:Dt},Be=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=void 0===e?S:e;(Object.keys(Et.styles).length>0||dt.autoFetchSvg)&&L&&dt.autoReplaceSvg&&ke.dom.i2svg({node:n})};function Le(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Dt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(L){var e=S.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function Te(t){var e=t.children,n=t.main,a=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(Ct(s)&&n.found&&!a.found){var l=n.width,c=n.height,u={x:l/c/2,y:.5};i["style"]=Vt(r(r({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Ee(t){var e=t.prefix,n=t.iconName,a=t.children,i=t.attributes,o=t.symbol,s=!0===o?"".concat(e,"-").concat(dt.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:r(r({},i),{},{id:s}),children:a}]}]}function Pe(t){var e=t.icons,n=e.main,a=e.mask,i=t.prefix,o=t.iconName,s=t.transform,l=t.symbol,c=t.title,u=t.maskId,h=t.titleId,d=t.extra,f=t.watchable,p=void 0!==f&&f,v=a.found?a:n,m=v.width,g=v.height,b="fak"===i,y=[dt.replacementClass,o?"".concat(dt.familyPrefix,"-").concat(o):""].filter((function(t){return-1===d.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(d.classes).join(" "),z={children:[],attributes:r(r({},d.attributes),{},{"data-prefix":i,"data-icon":o,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},w=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};p&&(z.attributes[F]=""),c&&(z.children.push({tag:"title",attributes:{id:z.attributes["aria-labelledby"]||"title-".concat(h||yt())},children:[c]}),delete z.attributes.title);var M=r(r({},z),{},{prefix:i,iconName:o,main:n,mask:a,maskId:u,transform:s,symbol:l,styles:r(r({},w),d.styles)}),A=a.found&&n.found?Ve("generateAbstractMask",M)||{children:[],attributes:{}}:Ve("generateAbstractIcon",M)||{children:[],attributes:{}},V=A.children,C=A.attributes;return M.children=V,M.attributes=C,l?Ee(M):Te(M)}function _e(t){var e=t.content,n=t.width,a=t.height,i=t.transform,o=t.title,s=t.extra,l=t.watchable,c=void 0!==l&&l,u=r(r(r({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});c&&(u[F]="");var h=r({},s.styles);Ct(i)&&(h["transform"]=Ot({transform:i,startCentered:!0,width:n,height:a}),h["-webkit-transform"]=h["transform"]);var d=Vt(h);d.length>0&&(u["style"]=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function xe(t){var e=t.content,n=t.title,a=t.extra,i=r(r(r({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Vt(a.styles);o.length>0&&(i["style"]=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Fe=Et.styles;function De(t){var e=t[0],n=t[1],a=t.slice(4),r=u(a,1),i=r[0],o=null;return o=Array.isArray(i)?{tag:"g",attributes:{class:"".concat(dt.familyPrefix,"-").concat(rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(dt.familyPrefix,"-").concat(rt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(dt.familyPrefix,"-").concat(rt.PRIMARY),fill:"currentColor",d:i[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var je={found:!1,width:512,height:512};function Ne(t,e){q||dt.showMissingIcons||!t||console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Re(t,e){var n=e;return"fa"===e&&null!==dt.styleDefault&&(e=de()),new Promise((function(a,i){Ve("missingIconAbstract");if("fa"===n){var o=ue(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Fe[e]&&Fe[e][t]){var s=Fe[e][t];return a(De(s))}Ne(t,e),a(r(r({},je),{},{icon:dt.showMissingIcons&&t&&Ve("missingIconAbstract")||{}}))}))}var $e=function(){},Ue=dt.measurePerformance&&B&&B.mark&&B.measure?B:{mark:$e,measure:$e},Ge='FA "6.1.1"',qe=function(t){return Ue.mark("".concat(Ge," ").concat(t," begins")),function(){return We(t)}},We=function(t){Ue.mark("".concat(Ge," ").concat(t," ends")),Ue.measure("".concat(Ge," ").concat(t),"".concat(Ge," ").concat(t," begins"),"".concat(Ge," ").concat(t," ends"))},Ke={begin:qe,end:We},Ye=function(){};function Xe(t){var e=t.getAttribute?t.getAttribute(F):null;return"string"===typeof e}function Je(t){var e=t.getAttribute?t.getAttribute(N):null,n=t.getAttribute?t.getAttribute(R):null;return e&&n}function Ze(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(dt.replacementClass)}function Qe(){if(!0===dt.autoReplaceSvg)return rn.replace;var t=rn[dt.autoReplaceSvg];return t||rn.replace}function tn(t){return S.createElementNS("http://www.w3.org/2000/svg",t)}function en(t){return S.createElement(t)}function nn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.ceFn,a=void 0===n?"svg"===t.tag?tn:en:n;if("string"===typeof t)return S.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach((function(e){r.setAttribute(e,t.attributes[e])}));var i=t.children||[];return i.forEach((function(t){r.appendChild(nn(t,{ceFn:a}))})),r}function an(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var rn={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach((function(t){e.parentNode.insertBefore(nn(t),e)})),null===e.getAttribute(F)&&dt.keepOriginalSource){var n=S.createComment(an(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~wt(e).indexOf(dt.replacementClass))return rn.replace(t);var a=new RegExp("".concat(dt.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce((function(t,e){return e===dt.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),0===r.toNode.length?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}var i=n.map((function(t){return Dt(t)})).join("\n");e.setAttribute(F,""),e.innerHTML=i}};function on(t){t()}function sn(t,e){var n="function"===typeof e?e:Ye;if(0===t.length)n();else{var a=on;dt.mutateApproach===U&&(a=I.requestAnimationFrame||on),a((function(){var e=Qe(),a=Ke.begin("mutate");t.map(e),a(),n()}))}}var ln=!1;function cn(){ln=!0}function un(){ln=!1}var hn=null;function dn(t){if(k&&dt.observeMutations){var e=t.treeCallback,n=void 0===e?Ye:e,a=t.nodeCallback,r=void 0===a?Ye:a,i=t.pseudoElementsCallback,o=void 0===i?Ye:i,s=t.observeMutationsRoot,l=void 0===s?S:s;hn=new k((function(t){if(!ln){var e=de();zt(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!Xe(t.addedNodes[0])&&(dt.searchPseudoElements&&o(t.target),n(t.target)),"attributes"===t.type&&t.target.parentNode&&dt.searchPseudoElements&&o(t.target.parentNode),"attributes"===t.type&&Xe(t.target)&&~at.indexOf(t.attributeName))if("class"===t.attributeName&&Je(t.target)){var a=ve(wt(t.target)),i=a.prefix,s=a.iconName;t.target.setAttribute(N,i||e),s&&t.target.setAttribute(R,s)}else Ze(t.target)&&r(t.target)}))}})),L&&hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fn(){hn&&hn.disconnect()}function pn(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&r.length>0&&(t[a]=r.join(":").trim()),t}),{})),n}function vn(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=void 0!==t.innerText?t.innerText.trim():"",r=ve(wt(t));return r.prefix||(r.prefix=de()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=le(r.prefix,t.innerText)||se(r.prefix,Ut(t.innerText))),r}function mn(t){var e=zt(t.attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return dt.autoA11y&&(n?e["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(a||yt()):(e["aria-hidden"]="true",e["focusable"]="false")),e}function gn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=vn(t),a=n.iconName,i=n.prefix,o=n.rest,s=mn(t),l=Me("parseNodeAttributes",{},t),c=e.styleParser?pn(t):[];return r({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:s}},l)}var yn=Et.styles;function zn(t){var e="nest"===dt.autoReplaceSvg?bn(t,{styleParser:!1}):bn(t);return~e.extra.classes.indexOf(Z)?Ve("generateLayersText",t,e):Ve("generateSvgReplacementMutation",t,e)}function wn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!L)return Promise.resolve();var n=S.documentElement.classList,a=function(t){return n.add("".concat($,"-").concat(t))},r=function(t){return n.remove("".concat($,"-").concat(t))},i=dt.autoFetchSvg?Object.keys(W):Object.keys(yn),o=[".".concat(Z,":not([").concat(F,"])")].concat(i.map((function(t){return".".concat(t,":not([").concat(F,"])")}))).join(", ");if(0===o.length)return Promise.resolve();var s=[];try{s=zt(t.querySelectorAll(o))}catch(Qn){}if(!(s.length>0))return Promise.resolve();a("pending"),r("complete");var l=Ke.begin("onTree"),c=s.reduce((function(t,e){try{var n=zn(e);n&&t.push(n)}catch(Qn){q||"MissingIcon"===Qn.name&&console.error(Qn)}return t}),[]);return new Promise((function(t,n){Promise.all(c).then((function(n){sn(n,(function(){a("active"),a("complete"),r("pending"),"function"===typeof e&&e(),l(),t()}))})).catch((function(t){l(),n(t)}))}))}function Mn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;zn(t).then((function(t){t&&sn([t],e)}))}function An(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=(e||{}).icon?e:Ce(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ce(i||{})),t(a,r(r({},n),{},{mask:i}))}}var Vn=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?mt:n,i=e.symbol,o=void 0!==i&&i,s=e.mask,l=void 0===s?null:s,c=e.maskId,u=void 0===c?null:c,h=e.title,d=void 0===h?null:h,f=e.titleId,p=void 0===f?null:f,v=e.classes,m=void 0===v?[]:v,g=e.attributes,b=void 0===g?{}:g,y=e.styles,z=void 0===y?{}:y;if(t){var w=t.prefix,M=t.iconName,A=t.icon;return Le(r({type:"icon"},t),(function(){return Ae("beforeDOMElementCreation",{iconDefinition:t,params:e}),dt.autoA11y&&(d?b["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(p||yt()):(b["aria-hidden"]="true",b["focusable"]="false")),Pe({icons:{main:De(A),mask:l?De(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:M,transform:r(r({},mt),a),symbol:o,title:d,maskId:u,titleId:p,extra:{attributes:b,styles:z,classes:m}})}))}},Cn={mixout:function(){return{icon:An(Vn)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=wn,t.nodeCallback=Mn,t}}},provides:function(t){t.i2svg=function(t){var e=t.node,n=void 0===e?S:e,a=t.callback,r=void 0===a?function(){}:a;return wn(n,r)},t.generateSvgReplacementMutation=function(t,e){var n=e.iconName,a=e.title,r=e.titleId,i=e.prefix,o=e.transform,s=e.symbol,l=e.mask,c=e.maskId,h=e.extra;return new Promise((function(e,d){Promise.all([Re(n,i),l.iconName?Re(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(l){var d=u(l,2),f=d[0],p=d[1];e([t,Pe({icons:{main:f,mask:p},prefix:i,iconName:n,transform:o,symbol:s,maskId:c,title:a,titleId:r,extra:h,watchable:!0})])})).catch(d)}))},t.generateAbstractIcon=function(t){var e,n=t.children,a=t.attributes,r=t.main,i=t.transform,o=t.styles,s=Vt(o);return s.length>0&&(a["style"]=s),Ct(i)&&(e=Ve("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(e||r.icon),{children:n,attributes:a}}}},Hn={mixout:function(){return{layer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.classes,a=void 0===n?[]:n;return Le({type:"layer"},(function(){Ae("beforeDOMElementCreation",{assembler:t,params:e});var n=[];return t((function(t){Array.isArray(t)?t.map((function(t){n=n.concat(t.abstract)})):n=n.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(dt.familyPrefix,"-layers")].concat(h(a)).join(" ")},children:n}]}))}}}},On={mixout:function(){return{counter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,a=void 0===n?null:n,r=e.classes,i=void 0===r?[]:r,o=e.attributes,s=void 0===o?{}:o,l=e.styles,c=void 0===l?{}:l;return Le({type:"counter",content:t},(function(){return Ae("beforeDOMElementCreation",{content:t,params:e}),xe({content:t.toString(),title:a,extra:{attributes:s,styles:c,classes:["".concat(dt.familyPrefix,"-layers-counter")].concat(h(i))}})}))}}}},In={mixout:function(){return{text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?mt:n,i=e.title,o=void 0===i?null:i,s=e.classes,l=void 0===s?[]:s,c=e.attributes,u=void 0===c?{}:c,d=e.styles,f=void 0===d?{}:d;return Le({type:"text",content:t},(function(){return Ae("beforeDOMElementCreation",{content:t,params:e}),_e({content:t,transform:r(r({},mt),a),title:o,extra:{attributes:u,styles:f,classes:["".concat(dt.familyPrefix,"-layers-text")].concat(h(l))}})}))}}},provides:function(t){t.generateLayersText=function(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if(T){var s=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();i=l.width/s,o=l.height/s}return dt.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,_e({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}}},Sn=new RegExp('"',"ug"),kn=[1105920,1112319];function Bn(t){var e=t.replace(Sn,""),n=Gt(e,0),a=n>=kn[0]&&n<=kn[1],r=2===e.length&&e[0]===e[1];return{value:Ut(r?e[0]:e),isSecondary:a||r}}function Ln(t,e){var n="".concat(j).concat(e.replace(":","-"));return new Promise((function(a,i){if(null!==t.getAttribute(n))return a();var o=zt(t.children),s=o.filter((function(t){return t.getAttribute(D)===e}))[0],l=I.getComputedStyle(t,e),c=l.getPropertyValue("font-family").match(Q),u=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&"none"!==h&&""!==h){var d=l.getPropertyValue("content"),f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?K[c[2].toLowerCase()]:tt[u],p=Bn(d),v=p.value,m=p.isSecondary,g=c[0].startsWith("FontAwesome"),b=se(f,v),y=b;if(g){var z=he(v);z.iconName&&z.prefix&&(b=z.iconName,f=z.prefix)}if(!b||m||s&&s.getAttribute(N)===f&&s.getAttribute(R)===y)a();else{t.setAttribute(n,y),s&&t.removeChild(s);var w=gn(),M=w.extra;M.attributes[D]=e,Re(b,f).then((function(i){var o=Pe(r(r({},w),{},{icons:{main:i,mask:fe()},prefix:f,iconName:y,extra:M,watchable:!0})),s=S.createElement("svg");"::before"===e?t.insertBefore(s,t.firstChild):t.appendChild(s),s.outerHTML=o.map((function(t){return Dt(t)})).join("\n"),t.removeAttribute(n),a()})).catch(i)}}else a()}))}function Tn(t){return Promise.all([Ln(t,"::before"),Ln(t,"::after")])}function En(t){return t.parentNode!==document.head&&!~G.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(D)&&(!t.parentNode||"svg"!==t.parentNode.tagName)}function Pn(t){if(L)return new Promise((function(e,n){var a=zt(t.querySelectorAll("*")).filter(En).map(Tn),r=Ke.begin("searchPseudoElements");cn(),Promise.all(a).then((function(){r(),un(),e()})).catch((function(){r(),un(),n()}))}))}var _n={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Pn,t}}},provides:function(t){t.pseudoElements2svg=function(t){var e=t.node,n=void 0===e?S:e;dt.searchPseudoElements&&Pn(n)}}},xn=!1,Fn={mixout:function(){return{dom:{unwatch:function(){cn(),xn=!0}}}},hooks:function(){return{bootstrap:function(){dn(Me("mutationObserverCallbacks",{}))},noAuto:function(){fn()},watch:function(t){var e=t.observeMutationsRoot;xn?un():dn(Me("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Dn=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r;break}return t}),e)},jn={mixout:function(){return{parse:{transform:function(t){return Dn(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=Dn(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(t){var e=t.main,n=t.transform,a=t.containerWidth,i=t.iconWidth,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(32*n.x,", ").concat(32*n.y,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(c)},h={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:u,path:h};return{tag:"g",attributes:r({},d.outer),children:[{tag:"g",attributes:r({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:r(r({},e.icon.attributes),d.path)}]}]}}}},Nn={x:0,y:0,width:"100%",height:"100%"};function Rn(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $n(t){return"g"===t.tag?t.children:[t]}var Un={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),a=n?ve(n.split(" ").map((function(t){return t.trim()}))):fe();return a.prefix||(a.prefix=de()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(t){var e=t.children,n=t.attributes,a=t.main,i=t.mask,o=t.maskId,s=t.transform,l=a.width,c=a.icon,u=i.width,h=i.icon,d=Ht({transform:s,containerWidth:u,iconWidth:l}),f={tag:"rect",attributes:r(r({},Nn),{},{fill:"white"})},p=c.children?{children:c.children.map(Rn)}:{},v={tag:"g",attributes:r({},d.inner),children:[Rn(r({tag:c.tag,attributes:r(r({},c.attributes),d.path)},p))]},m={tag:"g",attributes:r({},d.outer),children:[v]},g="mask-".concat(o||yt()),b="clip-".concat(o||yt()),y={tag:"mask",attributes:r(r({},Nn),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,m]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:$n(h)},y]};return e.push(z,{tag:"rect",attributes:r({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},Nn)}),{children:e,attributes:n}}}},Gn={provides:function(t){var e=!1;I.matchMedia&&(e=I.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var t=[],n={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:r(r({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=r(r({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:r(r({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:r(r({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:r(r({},i),{},{values:"1;0;1;1;0;1;"})}),t.push(o),t.push({tag:"path",attributes:r(r({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:r(r({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:r(r({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:r(r({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},qn={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),a=null!==n&&(""===n||n);return t["symbol"]=a,t}}}},Wn=[Lt,Cn,Hn,On,In,_n,Fn,jn,Un,Gn,qn];we(Wn,{mixoutsTo:ke});ke.noAuto;var Kn=ke.config,Yn=ke.library,Xn=(ke.dom,ke.parse),Jn=(ke.findIconDefinition,ke.toHtml,ke.icon),Zn=(ke.layer,ke.text);ke.counter},6978:function(t,e,n){"use strict";n.d(e,{$aW:function(){return d},DSs:function(){return f},FDd:function(){return s},Mdf:function(){return l},O97:function(){return a},SJh:function(){return i},ccn:function(){return h},eFW:function(){return r},g82:function(){return p},gR:function(){return u},m6i:function(){return c},xVw:function(){return o}});
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a.KN)(r,i,"app")},3214:function(t,e,n){"use strict";n.d(e,{Xb:function(){return se},v0:function(){return sa},e5:function(){return le},w7:function(){return ce}});n(1703),n(6699);var a=n(3536),r=n(5659);function i(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n}Object.create;Object.create;var o=n(7366),s=n(7805);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new a.LL("auth","Firebase",l()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${r.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function v(t,e,n){const r=Object.assign(Object.assign({},c()),{[e]:n}),i=new a.LL("auth","Firebase",r);return i.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(n,...a)}return u.create(t,...e)}function g(t,e,...n){if(!t)throw m(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function y(t,e){t||b(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=new Map;function w(t){y(t instanceof Function,"Expected a class definition");let e=z.get(t);return e?(y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,z.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){const n=(0,r.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,a.vZ)(r,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const i=n.initialize({options:e});return i}function A(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],a=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function C(){return"http:"===H()||"https:"===H()}function H(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||(0,a.ru)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.shortDelay=t,this.longDelay=e,y(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,a.uI)()||(0,a.b$)()}get(){return O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){y(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},T=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,r,i={}){return _(t,i,(async()=>{let i={},o={};r&&("GET"===e?o=r:i={body:JSON.stringify(r)});const s=(0,a.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),B.fetch()(F(t,t.config.apiHost,n,s),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))}))}async function _(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},L),e);try{const e=new D(t),a=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw j(t,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const e=a.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw v(t,s,o);f(t,s)}}catch(i){if(i instanceof a.ZR)throw i;f(t,"network-request-failed")}}async function x(t,e,n,a,r={}){const i=await P(t,e,n,a,r);return"mfaPendingCredential"in i&&f(t,"multi-factor-auth-required",{_serverResponse:i}),i}function F(t,e,n,a){const r=`${e}${n}?${a}`;return t.config.emulator?k(t.config,r):`${t.config.apiScheme}://${r}`}class D{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),T.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const a={appName:t.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const r=p(t,e,a);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function R(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e=!1){const n=(0,a.m9)(t),r=await n.getIdToken(e),i=q(r);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,s=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:r,authTime:$(G(i.auth_time)),issuedAtTime:$(G(i.iat)),expirationTime:$(G(i.exp)),signInProvider:s||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(t){return 1e3*Number(t)}function q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,a.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",i),null}}function W(t){const e=q(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof a.ZR&&Y(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Y({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t){var e;const n=t.auth,a=await t.getIdToken(),r=await K(t,R(n,{idToken:a}));g(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?et(i.providerUserInfo):[],s=tt(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),u=!!l&&c,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new J(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Q(t){const e=(0,a.m9)(t);await Z(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=i(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await _(t,{},(async()=>{const n=(0,a.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=F(t,r,"/v1/token",`key=${i}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",B.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):W(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:a,expiresIn:r}=await nt(t,e);this.updateTokensAndExpiration(n,a,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:a,expirationTime:r}=e,i=new at;return n&&(g("string"===typeof n,"internal-error",{appName:t}),i.refreshToken=n),a&&(g("string"===typeof a,"internal-error",{appName:t}),i.accessToken=a),r&&(g("number"===typeof r,"internal-error",{appName:t}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class it{constructor(t){var{uid:e,auth:n,stsTokenManager:a}=t,r=i(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new J(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return U(this,t)}reload(){return Q(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new it(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,N(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,a,r,i,o,s,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(a=e.email)&&void 0!==a?a:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,v=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=e.createdAt)&&void 0!==l?l:void 0,b=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:z,isAnonymous:w,providerData:M,stsTokenManager:A}=e;g(y&&A,t,"internal-error");const V=at.fromJSON(this.name,A);g("string"===typeof y,t,"internal-error"),rt(u,t.name),rt(h,t.name),g("boolean"===typeof z,t,"internal-error"),g("boolean"===typeof w,t,"internal-error"),rt(d,t.name),rt(f,t.name),rt(p,t.name),rt(v,t.name),rt(m,t.name),rt(b,t.name);const C=new it({uid:y,auth:t,email:h,emailVerified:z,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:V,createdAt:m,lastLoginAt:b});return M&&Array.isArray(M)&&(C.providerData=M.map((t=>Object.assign({},t)))),v&&(C._redirectEventId=v),C}static async _fromIdTokenResponse(t,e,n=!1){const a=new at;a.updateFromServerResponse(e);const r=new it({uid:e.localId,auth:t,stsTokenManager:a,isAnonymous:n});return await Z(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const st=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:a,name:r}=this.auth;this.fullUserKey=lt(this.userKey,a.apiKey,r),this.fullPersistenceKey=lt("persistence",a.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?it._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(w(st),t,n);const a=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=a[0]||w(st);const i=lt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(i);if(e){const n=it._fromJSON(t,e);c!==r&&(o=n),r=c;break}}catch(l){}const s=a.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&s.length?(r=s[0],o&&await r._set(i,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(i)}catch(l){}}))),new ct(r,t,n)):new ct(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(gt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(vt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,a.z$)()){return/firefox\//i.test(t)}function dt(t=(0,a.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,a.z$)()){return/crios\//i.test(t)}function pt(t=(0,a.z$)()){return/iemobile/i.test(t)}function vt(t=(0,a.z$)()){return/android/i.test(t)}function mt(t=(0,a.z$)()){return/blackberry/i.test(t)}function gt(t=(0,a.z$)()){return/webos/i.test(t)}function bt(t=(0,a.z$)()){return/iphone|ipad|ipod/i.test(t)}function yt(t=(0,a.z$)()){var e;return bt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function zt(){return(0,a.w1)()&&10===document.documentMode}function wt(t=(0,a.z$)()){return bt(t)||vt(t)||gt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function Mt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e=[]){let n;switch(t){case"Browser":n=ut((0,a.z$)());break;case"Worker":n=`${ut((0,a.z$)())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ht(this),this.idTokenSubscription=new Ht(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue((async()=>{var n,a;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(a=this.currentUser)||void 0===a?void 0:a.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(t);a&&a!==r||!(null===i||void 0===i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Z(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,a.m9)(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new a.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,a){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return g(i,this,"internal-error"),i.then((()=>r(this.currentUser))),"function"===typeof e?t.addObserver(e,n,a):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=At(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Ct(t){return(0,a.m9)(t)}class Ht{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,a.ne)((t=>this.observer=t))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(t,e){return x(t,"POST","/v1/accounts:signInWithPassword",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kt(t,e){return x(t,"POST","/v1/accounts:signInWithEmailLink",E(t,e))}async function Bt(t,e){return x(t,"POST","/v1/accounts:signInWithEmailLink",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Ot{constructor(t,e,n,a=null){super("password",n),this._email=t,this._password=e,this._tenantId=a}static _fromEmailAndPassword(t,e){return new Lt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Lt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return St(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return It(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Bt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return x(t,"POST","/v1/accounts:signInWithIdp",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="http://localhost";class Pt extends Ot{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:a}=e,r=i(e,["providerId","signInMethod"]);if(!n||!a)return null;const o=new Pt(n,a);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Tt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Tt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Tt(t,e)}buildRequest(){const t={requestUri:Et,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,a.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",E(t,e))}async function xt(t,e){return x(t,"POST","/v1/accounts:signInWithPhoneNumber",E(t,e))}async function Ft(t,e){const n=await x(t,"POST","/v1/accounts:signInWithPhoneNumber",E(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const Dt={["USER_NOT_FOUND"]:"user-not-found"};async function jt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return x(t,"POST","/v1/accounts:signInWithPhoneNumber",E(t,n),Dt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Ot{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Nt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Nt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return xt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ft(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return jt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:a}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:a}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:r}=t;return n||e||a||r?new Nt({verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $t(t){const e=(0,a.zd)((0,a.pd)(t))["link"],n=e?(0,a.zd)((0,a.pd)(e))["deep_link_id"]:null,r=(0,a.zd)((0,a.pd)(t))["deep_link_id"],i=r?(0,a.zd)((0,a.pd)(r))["link"]:null;return i||r||n||e||t}class Ut{constructor(t){var e,n,r,i,o,s;const l=(0,a.zd)((0,a.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Rt(null!==(r=l["mode"])&&void 0!==r?r:null);g(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=$t(t);try{return new Ut(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(){this.providerId=Gt.PROVIDER_ID}static credential(t,e){return Lt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ut.parseLink(e);return g(n,"argument-error"),Lt._fromEmailAndCode(t,n.code,n.tenantId)}}Gt.PROVIDER_ID="password",Gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends qt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Wt{constructor(){super("facebook.com")}static credential(t){return Pt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Yt.credential(e,n)}catch(a){return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com",Yt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Wt{constructor(){super("github.com")}static credential(t){return Pt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com",Xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Wt{constructor(){super("twitter.com")}static credential(t,e){return Pt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jt.credential(e,n)}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zt(t,e){return x(t,"POST","/v1/accounts:signUp",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";class Qt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,a=!1){const r=await it._fromIdTokenResponse(t,n,a),i=te(n),o=new Qt({user:r,providerId:i,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const a=te(n);return new Qt({user:t,providerId:a,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends a.ZR{constructor(t,e,n,a){var r;super(e.code,e.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,a){return new ee(t,e,n,a)}}function ne(t,e,n,a){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ee._fromErrorAndOperation(t,n,e,a);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(t,e,n=!1){const a=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",a)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function re(t,e,n=!1){const{auth:a}=t,r="reauthenticate";try{const i=await K(t,ne(a,r,e,t),n);g(i.idToken,a,"internal-error");const o=q(i.idToken);g(o,a,"internal-error");const{sub:s}=o;return g(t.uid===s,a,"user-mismatch"),Qt._forOperation(t,r,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(a,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e,n=!1){const a="signIn",r=await ne(t,a,e),i=await Qt._fromIdTokenResponse(t,a,r);return n||await t._updateCurrentUser(i.user),i}async function oe(t,e){return ie(Ct(t),e)}async function se(t,e,n){const a=Ct(t),r=await Zt(a,{returnSecureToken:!0,email:e,password:n}),i=await Qt._fromIdTokenResponse(a,"signIn",r);return await a._updateCurrentUser(i.user),i}function le(t,e,n){return oe((0,a.m9)(t),Gt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return(0,a.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",E(t,e))}function he(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",E(t,e))}new WeakMap;const de="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(de,"1"),this.storage.removeItem(de),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){const t=(0,a.z$)();return dt(t)||bt(t)}const ve=1e3,me=10;class ge extends fe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pe()&&Mt(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),a=this.localCache[e];n!==a&&t(e,a,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(t.newValue!==a)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const a=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);zt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,me):a()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),ve)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ge.type="LOCAL";const be=ge;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends fe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ye.type="SESSION";const ze=ye;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Me(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:a,data:r}=e.data,i=this.handlersMap[a];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const o=Array.from(i).map((async t=>t(e.origin,r))),s=await we(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(t="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.receivers=[];class Ve{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const a="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let r,i;return new Promise(((o,s)=>{const l=Ae("",20);a.port1.start();const c=setTimeout((()=>{s(new Error("unsupported_event"))}),n);i={messageChannel:a,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),s(new Error("invalid_response"));break}}},this.handlers.add(i),a.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[a.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function He(t){Ce().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return"undefined"!==typeof Ce()["WorkerGlobalScope"]&&"function"===typeof Ce()["importScripts"]}async function Ie(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Se(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function ke(){return Oe()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="firebaseLocalStorageDb",Le=1,Te="firebaseLocalStorage",Ee="fbase_key";class Pe{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function _e(t,e){return t.transaction([Te],e?"readwrite":"readonly").objectStore(Te)}function xe(){const t=indexedDB.deleteDatabase(Be);return new Pe(t).toPromise()}function Fe(){const t=indexedDB.open(Be,Le);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Te,{keyPath:Ee})}catch(a){n(a)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Te)?e(n):(n.close(),await xe(),e(await Fe()))}))}))}async function De(t,e,n){const a=_e(t,!0).put({[Ee]:e,value:n});return new Pe(a).toPromise()}async function je(t,e){const n=_e(t,!1).get(e),a=await new Pe(n).toPromise();return void 0===a?null:a.value}function Ne(t,e){const n=_e(t,!0).delete(e);return new Pe(n).toPromise()}const Re=800,$e=3;class Ue{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Fe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>$e)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Me._getInstance(ke()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ie(),!this.activeServiceWorker)return;this.sender=new Ve(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Se()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fe();return await De(t,de,"1"),await Ne(t,de),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>De(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>je(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ne(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=_e(t,!1).getAll();return new Pe(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:a,value:r}of t)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(r)&&(this.notifyListeners(a,r),e.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),e.push(a));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Re)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ue.type="LOCAL";const Ge=Ue;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",E(t,e))}function We(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ye(t){return new Promise(((e,n)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},a.type="text/javascript",a.charset="UTF-8",Ke().appendChild(a)}))}function Xe(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xe("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="recaptcha";async function Ze(t,e,n){var a;const r=await n.verify();try{let i;if(g("string"===typeof r,t,"argument-error"),g(n.type===Je,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){g("enroll"===e.type,t,"internal-error");const n=await ue(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(a=i.multiFactorHint)||void 0===a?void 0:a.uid)||i.multiFactorUid;g(n,t,"missing-multi-factor-info");const o=await qe(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await _t(t,{phoneNumber:i.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(t){this.providerId=Qe.PROVIDER_ID,this.auth=Ct(t)}verifyPhoneNumber(t,e){return Ze(this.auth,t,(0,a.m9)(e))}static credential(t,e){return Nt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Qe.credentialFromTaggedObject(e)}static credentialFromError(t){return Qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Nt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(t,e){return e?w(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.PROVIDER_ID="phone",Qe.PHONE_SIGN_IN_METHOD="phone";class en extends Ot{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Tt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Tt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Tt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function nn(t){return ie(t.auth,new en(t),t.bypassAuthState)}function an(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),re(n,new en(t),t.bypassAuthState)}async function rn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ae(n,new en(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e,n,a,r=!1){this.auth=t,this.resolver=n,this.user=a,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:a,tenantId:r,error:i,type:o}=t;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return nn;case"linkViaPopup":case"linkViaRedirect":return rn;case"reauthViaPopup":case"reauthViaRedirect":return an;default:f(this.auth,"internal-error")}}resolve(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new S(2e3,1e4);class ln extends on{constructor(t,e,n,a,r){super(t,e,a,r),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const t=Ae();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,sn.get())};t()}}ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cn="pendingRedirect",un=new Map;class hn extends on{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=un.get(this.auth._key());if(!t){try{const e=await dn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}un.set(this.auth._key(),t)}return this.bypassAuthState||un.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function dn(t,e){const n=pn(e),a=fn(t);if(!await a._isAvailable())return!1;const r="true"===await a._get(n);return await a._remove(n),r}function fn(t){return w(t._redirectPersistence)}function pn(t){return lt(cn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t,e,n=!1){const a=Ct(t),r=tn(a,e),i=new hn(a,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await a._persistUserIfCurrent(o.user),await a._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn=6e5;class gn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!zn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!yn(t)){const a=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,a))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(t))}saveEventToCache(t){this.cachedEventUids.add(bn(t)),this.lastProcessedEventTime=Date.now()}}function bn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function yn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function zn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,An=/^https?/;async function Vn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wn(t);for(const a of e)try{if(Cn(a))return}catch(n){}f(t,"unauthorized-domain")}function Cn(t){const e=V(),{protocol:n,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===a?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===a}if(!An.test(n))return!1;if(Mn.test(t))return a===t;const r=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+r+"|"+r+")$","i");return i.test(a)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new S(3e4,6e4);function On(){const t=Ce().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function In(t){return new Promise(((e,n)=>{var a,r,i;function o(){On(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{On(),n(p(t,"network-request-failed"))},timeout:Hn.get()})}if(null===(r=null===(a=Ce().gapi)||void 0===a?void 0:a.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=Ce().gapi)||void 0===i?void 0:i.load)){const e=Xe("iframefcb");return Ce()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Ye(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Sn=null,t}))}let Sn=null;function kn(t){return Sn=Sn||In(t),Sn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new S(5e3,15e3),Ln="__/auth/iframe",Tn="emulator/auth/iframe",En={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _n(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,Tn):`https://${t.config.authDomain}/${Ln}`,i={apiKey:e.apiKey,appName:t.name,v:r.Jn},o=Pn.get(t.config.apiHost);o&&(i.eid=o);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${(0,a.xO)(i).slice(1)}`}async function xn(t){const e=await kn(t),n=Ce().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:_n(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:En,dontclear:!0},(e=>new Promise((async(n,a)=>{await e.restyle({setHideOnLeave:!1});const r=p(t,"network-request-failed"),i=Ce().setTimeout((()=>{a(r)}),Bn.get());function o(){Ce().clearTimeout(i),n(e)}e.ping(o).then(o,(()=>{a(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dn=500,jn=600,Nn="_blank",Rn="http://localhost";class $n{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Un(t,e,n,r=Dn,i=jn){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Fn),{width:r.toString(),height:i.toString(),top:o,left:s}),u=(0,a.z$)().toLowerCase();n&&(l=ft(u)?Nn:n),ht(u)&&(e=e||Rn,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(yt(u)&&"_self"!==l)return Gn(e||"",l),new $n(null);const d=window.open(e||"",l,h);g(d,t,"popup-blocked");try{d.focus()}catch(f){}return new $n(d)}function Gn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="__/auth/handler",Wn="emulator/auth/handler";function Kn(t,e,n,i,o,s){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:r.Jn,eventId:o};if(e instanceof qt){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,a.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))l[t]=e}if(e instanceof Wt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const a of Object.keys(c))void 0===c[a]&&delete c[a];return`${Yn(t)}?${(0,a.xO)(c).slice(1)}`}function Yn({config:t}){return t.emulator?k(t,Wn):`https://${t.authDomain}/${qn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="webStorageSupport";class Jn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ze,this._completeRedirectFn=vn}async _openPopup(t,e,n,a){var r;y(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const i=Kn(t,e,n,V(),a);return Un(t,i,Ae())}async _openRedirect(t,e,n,a){return await this._originValidation(t),He(Kn(t,e,n,V(),a)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await xn(t),n=new gn(t);return e.register("authEvent",(e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const a=n.onEvent(e.authEvent);return{status:a?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Xn,{type:Xn},(n=>{var a;const r=null===(a=null===n||void 0===n?void 0:n[0])||void 0===a?void 0:a[Xn];void 0!==r&&e(!!r),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Vn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||bt()}}const Zn=Jn;class Qn{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return b("unexpected MultiFactorSessionType")}}}class ta extends Qn{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ta(t)}_finalizeEnroll(t,e,n){return he(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return We(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ea{constructor(){}static assertion(t){return ta._fromCredential(t)}}ea.FACTOR_ID="phone";var na="@firebase/auth",aa="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ra{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oa(t){(0,r.Xd)(new s.wA("auth",((e,{options:n})=>{const a=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=a.options;return((e,a)=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:At(t)},s=new Vt(e,a,r);return A(s,n),s})(a,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const a=t.getProvider("auth-internal");a.initialize()}))),(0,r.Xd)(new s.wA("auth-internal",(t=>{const e=Ct(t.getProvider("auth").getImmediate());return(t=>new ra(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(na,aa,ia(t)),(0,r.KN)(na,aa,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t=(0,r.Mq)()){const e=(0,r.qX)(t,"auth");return e.isInitialized()?e.getImmediate():M(t,{popupRedirectResolver:Zn,persistence:[Ge,be,ze]})}oa("Browser")},6926:function(t,e,n){"use strict";n.d(e,{ET:function(){return vh},Ab:function(){return zh},vr:function(){return yh},hJ:function(){return yu},oe:function(){return ph},JU:function(){return zu},ad:function(){return Vu},cf:function(){return mh},IO:function(){return ch},r7:function(){return fh}});n(1703),n(8675),n(3462),n(2801),n(2262),n(4506),n(6699);var a,r=n(5659),i=n(7805),o=n(7366),s=n(3536),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},u=u||{},h=l||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function v(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function b(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function z(t,e,n){return z=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:y,z.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function M(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,a){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function A(){this.s=this.s,this.o=this.o}var V=0,C={};A.prototype.s=!1,A.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=V)){var t=v(this);delete C[t]}},A.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const H=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},O=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const a=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<a;i++)i in r&&e.call(n,r[i],i,t)};function I(t){t:{var e=qn;const n=t.length,a="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in a&&e.call(void 0,a[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function k(t){const e=t.length;if(0<e){const n=Array(e);for(let a=0;a<e;a++)n[a]=t[a];return n}return[]}function B(t){return/^[\s\xa0]*$/.test(t)}var L,T=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function E(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var _=h.navigator;if(_){var x=_.userAgent;if(x){L=x;break t}}L=""}function F(t,e,n){for(const a in t)e.call(n,t[a],a,t)}function D(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(t,e){let n,a;for(let r=1;r<arguments.length;r++){for(n in a=arguments[r],a)t[n]=a[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}}function R(t){return R[" "](t),t}function $(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}R[" "]=d;var U,G=E(L,"Opera"),q=E(L,"Trident")||E(L,"MSIE"),W=E(L,"Edge"),K=W||q,Y=E(L,"Gecko")&&!(E(L.toLowerCase(),"webkit")&&!E(L,"Edge"))&&!(E(L,"Trident")||E(L,"MSIE"))&&!E(L,"Edge"),X=E(L.toLowerCase(),"webkit")&&!E(L,"Edge");function J(){var t=h.document;return t?t.documentMode:void 0}t:{var Z="",Q=function(){var t=L;return Y?/rv:([^\);]+)(\)|;)/.exec(t):W?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):X?/WebKit\/(\S+)/.exec(t):G?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(Z=Q?Q[1]:""),q){var tt=J();if(null!=tt&&tt>parseFloat(Z)){U=String(tt);break t}}U=Z}var et,nt={};function at(){return $((function(){let t=0;const e=T(String(U)).split("."),n=T("9").split("."),a=Math.max(e.length,n.length);for(let o=0;0==t&&o<a;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=P(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||P(0==r[2].length,0==i[2].length)||P(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(h.document&&q){var rt=J();et=rt||(parseInt(U,10)||void 0)}else et=void 0;var it=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function lt(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Y){t:{try{R(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,a?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ct[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lt.Z.h.call(this)}}st.prototype.h=function(){this.defaultPrevented=!0},M(lt,st);var ct={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),ht=0;function dt(t,e,n,a,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!a,this.ia=r,this.key=++ht,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function vt(t,e){var n=e.type;if(n in t.g){var a,r=t.g[n],i=H(r,e);(a=0<=i)&&Array.prototype.splice.call(r,i,1),a&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,a){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==a)return r}return-1}pt.prototype.add=function(t,e,n,a,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=mt(t,e,a,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,i,!!a,r),e.fa=n,t.push(e)),e};var gt="closure_lm_"+(1e6*Math.random()|0),bt={};function yt(t,e,n,a,r){if(a&&a.once)return Mt(t,e,n,a,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)yt(t,e[i],n,a,r);return null}return n=St(n),t&&t[ut]?t.N(e,n,p(a)?!!a.capture:!!a,r):zt(t,e,n,!1,a,r)}function zt(t,e,n,a,r,i){if(!e)throw Error("Invalid event type");var o=p(r)?!!r.capture:!!r,s=Ot(t);if(s||(t[gt]=s=new pt(t)),n=s.add(e,n,a,o,i),n.proxy)return n;if(a=wt(),n.proxy=a,a.src=t,a.listener=n,t.addEventListener)ot||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),a,r);else if(t.attachEvent)t.attachEvent(Ct(e.toString()),a);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(a)}return n}function wt(){function t(n){return e.call(t.src,t.listener,n)}var e=Ht;return t}function Mt(t,e,n,a,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Mt(t,e[i],n,a,r);return null}return n=St(n),t&&t[ut]?t.O(e,n,p(a)?!!a.capture:!!a,r):zt(t,e,n,!0,a,r)}function At(t,e,n,a,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)At(t,e[i],n,a,r);else a=p(a)?!!a.capture:!!a,n=St(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=mt(i,n,a,r),-1<n&&(ft(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Ot(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,a,r)),(n=-1<t?e[t]:null)&&Vt(n))}function Vt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])vt(e.i,t);else{var n=t.type,a=t.proxy;e.removeEventListener?e.removeEventListener(n,a,t.capture):e.detachEvent?e.detachEvent(Ct(n),a):e.addListener&&e.removeListener&&e.removeListener(a),(n=Ot(e))?(vt(n,t),0==n.h&&(n.src=null,e[gt]=null)):ft(t)}}}function Ct(t){return t in bt?bt[t]:bt[t]="on"+t}function Ht(t,e){if(t.ca)t=!0;else{e=new lt(e,this);var n=t.listener,a=t.ia||t.src;t.fa&&Vt(t),t=n.call(a,e)}return t}function Ot(t){return t=t[gt],t instanceof pt?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function kt(){A.call(this),this.i=new pt(this),this.P=this,this.I=null}function Bt(t,e){var n,a=t.I;if(a)for(n=[];a;a=a.I)n.push(a);if(t=t.P,a=e.type||e,"string"===typeof e)e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var r=e;e=new st(a,t),N(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Lt(o,a,!0,e)&&r}if(o=e.g=t,r=Lt(o,a,!0,e)&&r,r=Lt(o,a,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Lt(o,a,!1,e)&&r}function Lt(t,e,n,a){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var s=o.listener,l=o.ia||o.src;o.fa&&vt(t.i,o),r=!1!==s.call(l,a)&&r}}return r&&!a.defaultPrevented}M(kt,A),kt.prototype[ut]=!0,kt.prototype.removeEventListener=function(t,e,n,a){At(this,t,e,n,a)},kt.prototype.M=function(){if(kt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],a=0;a<n.length;a++)ft(n[a]);delete e.g[t],e.h--}}this.I=null},kt.prototype.N=function(t,e,n,a){return this.i.add(String(t),e,!1,n,a)},kt.prototype.O=function(t,e,n,a){return this.i.add(String(t),e,!0,n,a)};var Tt=h.JSON.stringify;function Et(){var t=$t;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var _t,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ft),(t=>t.reset()));class Ft{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Dt(t){h.setTimeout((()=>{throw t}),0)}function jt(t,e){_t||Nt(),Rt||(_t(),Rt=!0),$t.add(t,e)}function Nt(){var t=h.Promise.resolve(void 0);_t=function(){t.then(Ut)}}var Rt=!1,$t=new Pt;function Ut(){for(var t;t=Et();){try{t.h.call(t.g)}catch(n){Dt(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rt=!1}function Gt(t,e){kt.call(this),this.h=t||1,this.g=e||h,this.j=z(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Wt(t,e,n){if("function"===typeof t)n&&(t=z(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=z(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Kt(t){t.g=Wt((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}M(Gt,kt),a=Gt.prototype,a.da=!1,a.S=null,a.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Bt(this,"tick"),this.da&&(qt(this),this.start()))}},a.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},a.M=function(){Gt.Z.M.call(this),qt(this),delete this.g};class Yt extends A{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(t){A.call(this),this.h=t,this.g={}}M(Xt,A);var Jt=[];function Zt(t,e,n,a){Array.isArray(n)||(n&&(Jt[0]=n.toString()),n=Jt);for(var r=0;r<n.length;r++){var i=yt(e,n[r],a||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qt(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Vt(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,a,r,i){t.info((function(){if(t.g)if(i)for(var o="",s=i.split("&"),l=0;l<s.length;l++){var c=s[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+a+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,a,r,i,o){t.info((function(){return"XMLHTTP RESP ("+a+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function ae(t,e,n,a){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ie(t,n)+(a?" "+a:"")}))}function re(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ie(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var a=n[t];if(!(2>a.length)){var r=a[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Tt(n)}catch(s){return e}}Xt.prototype.M=function(){Xt.Z.M.call(this),Qt(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},se=null;function le(){return se=se||new kt}function ce(t){st.call(this,oe.Ma,t)}function ue(t){const e=le();Bt(e,new ce(e,t))}function he(t,e){st.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=le();Bt(e,new he(e,t))}function fe(t,e){st.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",M(ce,st),oe.STAT_EVENT="statevent",M(he,st),oe.Na="timingevent",M(fe,st);var ve={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ge(){}function be(t){return t.h||(t.h=t.i())}function ye(){}ge.prototype.h=null;var ze,we={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Me(){st.call(this,"d")}function Ae(){st.call(this,"c")}function Ve(){}function Ce(t,e,n,a){this.l=t,this.j=e,this.m=n,this.X=a||1,this.V=new Xt(this),this.P=Oe,t=K?125:void 0,this.W=new Gt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new He}function He(){this.i=null,this.g="",this.h=!1}M(Me,st),M(Ae,st),M(Ve,ge),Ve.prototype.g=function(){return new XMLHttpRequest},Ve.prototype.i=function(){return{}},ze=new Ve;var Oe=45e3,Ie={},Se={};function ke(t,e,n){t.K=1,t.v=en(Ye(e)),t.s=n,t.U=!0,Be(t,null)}function Be(t,e){t.F=Date.now(),Pe(t),t.A=Ye(t.v);var n=t.A,a=t.X;Array.isArray(a)||(a=[String(a)]),gn(n.h,"t",a),t.C=0,n=t.l.H,t.h=new He,t.g=Aa(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Yt(z(t.Ia,t,t.g),t.O)),Zt(t.V,t.g,"readystatechange",t.gb),e=t.H?D(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Le(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Te(t,e,n){let a,r=!0;for(;!t.I&&t.C<n.length;){if(a=Ee(t,n),a==Se){4==e&&(t.o=4,de(14),r=!1),ae(t.j,t.m,null,"[Incomplete Response]");break}if(a==Ie){t.o=4,de(15),ae(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}ae(t.j,t.m,a,null),je(t,a)}Le(t)&&a!=Se&&a!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),va(e),e.L=!0,de(11))):(ae(t.j,t.m,n,"[Invalid Chunked Response]"),De(t),Fe(t))}function Ee(t,e){var n=t.C,a=e.indexOf("\n",n);return-1==a?Se:(n=Number(e.substring(n,a)),isNaN(n)?Ie:(a+=1,a+n>e.length?Se:(e=e.substr(a,n),t.C=a+n,e)))}function Pe(t){t.Y=Date.now()+t.P,_e(t,t.P)}function _e(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(z(t.eb,t),e)}function xe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||ba(t.l,t)}function De(t){xe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Cn(n.i,t)))if(n.I=t.N,!t.J&&Cn(n.i,t)&&3==n.G){try{var a=n.Ca.g.parse(e)}catch(c){a=null}if(Array.isArray(a)&&3==a.length){var r=a;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ga(n),ia(n)}pa(n),de(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(z(n.ab,n),6e3));if(1>=Vn(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else za(n,11)}else if((t.J||n.g==t)&&ga(n),!B(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=c[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(a=1.5*u,n.K=a,n.h.info("backChannelRequestTimeoutMs_="+a)),a=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=a.i;!i.g&&(E(t,"spdy")||E(t,"quic")||E(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Hn(i,i.h),i.h=null))}if(a.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(a.sa=t,tn(a.F,a.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),a=n;var o=t;if(a.oa=Ma(a,a.H?a.la:null,a.W),o.J){On(a.i,o);var s=o,l=a.K;l&&s.setTimeout(l),s.B&&(xe(s),Pe(s)),a.g=o}else fa(a);0<n.l.length&&la(n)}else"stop"!=c[0]&&"close"!=c[0]||za(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?za(n,7):ra(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}ue(4)}catch(c){}}function Ne(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,a=0;a<n;a++)e.push(t[a]);return e}for(a in e=[],n=0,t)e[n++]=t[a];return e}function Re(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)O(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var a=t.length,r=0;r<a;r++)n.push(r)}else for(r in n=[],a=0,t)n[a++]=r;a=Ne(t),r=a.length;for(var i=0;i<r;i++)e.call(void 0,a[i],n&&n[i],t)}}function $e(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var a=0;a<n;a+=2)this.set(arguments[a],arguments[a+1])}else if(t)if(t instanceof $e)for(n=t.T(),a=0;a<n.length;a++)this.set(n[a],t.get(n[a]));else for(a in t)this.set(a,t[a])}function Ue(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var a=t.g[e];Ge(t.h,a)&&(t.g[n++]=a),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)a=t.g[e],Ge(r,a)||(t.g[n++]=a,r[a]=1),e++;t.g.length=n}}function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}a=Ce.prototype,a.setTimeout=function(t){this.P=t},a.gb=function(t){t=t.target;const e=this.L;e&&3==Zn(t)?e.l():this.Ia(t)},a.Ia=function(t){try{if(t==this.g)t:{const u=Zn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||K||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=d?3:2),xe(this);var n=this.g.ba();this.N=n;e:if(Le(this)){var a=Qn(this.g);t="";var r=a.length,i=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){De(this),Fe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(a[e],{stream:i&&e==r-1});a.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(s)){var c=s;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,de(12),De(this),Fe(this);break t}ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(Te(this,u,o),K&&this.i&&3==u&&(Zt(this.V,this.W,"tick",this.fb),this.W.start())):(ae(this.j,this.m,o,null),je(this,o)),4==u&&De(this),this.i&&!this.I&&(4==u?ba(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),De(this),Fe(this)}}}catch(u){}},a.fb=function(){if(this.g){var t=Zn(this.g),e=this.g.ga();this.C<e.length&&(xe(this),Te(this,t,e),this.i&&4!=t&&Pe(this))}},a.cancel=function(){this.I=!0,De(this)},a.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(re(this.j,this.A),2!=this.K&&(ue(3),de(17)),De(this),this.o=2,Fe(this)):_e(this,this.Y-t)},a=$e.prototype,a.R=function(){Ue(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},a.T=function(){return Ue(this),this.g.concat()},a.get=function(t,e){return Ge(this.h,t)?this.h[t]:e},a.set=function(t,e){Ge(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},a.forEach=function(t,e){for(var n=this.T(),a=0;a<n.length;a++){var r=n[a],i=this.get(r);t.call(e,i,r,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function We(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var a=t[n].indexOf("="),r=null;if(0<=a){var i=t[n].substring(0,a);r=t[n].substring(a+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=void 0!==e?e:t.g,Xe(this,t.j),this.s=t.s,Je(this,t.i),Ze(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new $e(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,Xe(this,n[1]||"",!0),this.s=rn(n[2]||""),Je(this,n[3]||"",!0),Ze(this,n[4]),this.l=rn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function Ye(t){return new Ke(t)}function Xe(t,e,n){t.j=n?rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Je(t,e,n){t.i=n?rn(e,!0):e}function Ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof fn?(t.h=e,yn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new fn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Ke?Ye(t):new Ke(t,void 0)}function an(t,e,n,a){var r=new Ke(null,void 0);return t&&Xe(r,t),e&&Je(r,e),n&&Ze(r,n),a&&(r.l=a),r}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,sn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,ln,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:cn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var ln=/[#\/\?@]/g,cn=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new $e,t.h=0,t.i&&We(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function vn(t,e){pn(t),e=bn(t,e),Ge(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ge(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ue(t)))}function mn(t,e){return pn(t),e=bn(t,e),Ge(t.g.h,e)}function gn(t,e,n){vn(t,e),0<n.length&&(t.i=null,t.g.set(bn(t,e),k(n)),t.h+=n.length)}function bn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(vn(this,e),gn(this,n,t))}),t)),t.j=e}a=fn.prototype,a.add=function(t,e){pn(this),this.i=null,t=bn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},a.forEach=function(t,e){pn(this),this.g.forEach((function(n,a){O(n,(function(n){t.call(e,n,a,this)}),this)}),this)},a.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],a=0;a<e.length;a++)for(var r=t[a],i=0;i<r.length;i++)n.push(e[a]);return n},a.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=S(e,this.g.get(bn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},a.set=function(t,e){return pn(this),this.i=null,t=bn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},a.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},a.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var a=e[n],r=encodeURIComponent(String(a));a=this.R(a);for(var i=0;i<a.length;i++){var o=r;""!==a[i]&&(o+="="+encodeURIComponent(String(a[i]))),t.push(o)}}return this.i=t.join("&")};var zn=class{constructor(t,e){this.h=t,this.g=e}};function wn(t){this.l=t||Mn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mn=10;function An(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Vn(t){return t.h?1:t.g?t.g.size:0}function Cn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Hn(t,e){t.g?t.g.add(e):t.h=e}function On(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return k(t.i)}function Sn(){}function kn(){this.g=new Sn}function Bn(t,e,n){const a=n||"";try{Re(t,(function(t,n){let r=t;p(t)&&(r=Tt(t)),e.push(a+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(a+"type="+encodeURIComponent("_badmap")),r}}function Ln(t,e){const n=new te;if(h.Image){const a=new Image;a.onload=w(Tn,n,a,"TestLoadImage: loaded",!0,e),a.onerror=w(Tn,n,a,"TestLoadImage: error",!1,e),a.onabort=w(Tn,n,a,"TestLoadImage: abort",!1,e),a.ontimeout=w(Tn,n,a,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){a.ontimeout&&a.ontimeout()}),1e4),a.src=t}else e(!1)}function Tn(t,e,n,a,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(a)}catch(i){}}function En(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){kt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_n,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},M(En,ge),En.prototype.g=function(){return new Pn(this.l,this.j)},En.prototype.i=function(t){return function(){return t}}({}),M(Pn,kt);var _n=0;function xn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dn(t)}function Dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}a=Pn.prototype,a.open=function(t,e){if(this.readyState!=_n)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dn(this)},a.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=_n},a.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},a.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):Dn(this),3==this.readyState&&xn(this)}},a.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},a.Ta=function(t){this.g&&(this.response=t,Fn(this))},a.ha=function(){this.g&&Fn(this)},a.setRequestHeader=function(t,e){this.v.append(t,e)},a.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=h.JSON.parse;function Nn(t){kt.call(this),this.headers=new $e,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Rn,this.K=this.L=!1}M(Nn,kt);var Rn="",$n=/^https?$/i,Un=["POST","PUT"];function Gn(t){return q&&at()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function Wn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kn(t),Xn(t)}function Kn(t){t.D||(t.D=!0,Bt(t,"complete"),Bt(t,"error"))}function Yn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Zn(t)||2!=t.ba()))if(t.v&&4==Zn(t))Wt(t.Fa,0,t);else if(Bt(t,"readystatechange"),4==Zn(t)){t.h=!1;try{const l=t.ba();t:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var a;if(a=0===l){var r=String(t.H).match(qe)[1]||null;if(!r&&h.self&&h.self.location){var i=h.self.location.protocol;r=i.substr(0,i.length-1)}a=!$n.test(r?r.toLowerCase():"")}n=a}if(n)Bt(t,"complete"),Bt(t,"success");else{t.m=6;try{var o=2<Zn(t)?t.g.statusText:""}catch(s){o=""}t.j=o+" ["+t.ba()+"]",Kn(t)}}finally{Xn(t)}}}function Xn(t,e){if(t.g){Jn(t);const a=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||Bt(t,"ready");try{a.onreadystatechange=r}catch(n){}}}function Jn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Zn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Rn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ta(t){let e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ea(t,e,n){t:{for(a in n){var a=!1;break t}a=!0}a||(n=ta(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function na(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function aa(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=na("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=na("baseRetryDelayMs",5e3,t),this.$a=na("retryDelaySeedMs",1e4,t),this.Ya=na("forwardChannelMaxRetries",2,t),this.ra=na("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wn(t&&t.concurrentRequestLimit),this.Ca=new kn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ra(t){if(oa(t),3==t.G){var e=t.V++,n=Ye(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),ha(t,n),e=new Ce(t,t.h,e,void 0),e.K=2,e.v=en(Ye(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Aa(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}wa(t)}function ia(t){t.g&&(va(t),t.g.cancel(),t.g=null)}function oa(t){ia(t),t.u&&(h.clearTimeout(t.u),t.u=null),ga(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function sa(t,e){t.l.push(new zn(t.Za++,e)),3==t.G&&la(t)}function la(t){An(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function ca(t,e){return!(Vn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(z(t.Ha,t,e),ya(t,t.C)),t.C++,!0))}function ua(t,e){var n;n=e?e.m:t.V++;const a=Ye(t.F);tn(a,"SID",t.J),tn(a,"RID",n),tn(a,"AID",t.U),ha(t,a),t.o&&t.s&&ea(a,t.o,t.s),n=new Ce(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=da(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Hn(t.i,n),ke(n,a,e)}function ha(t,e){t.j&&Re({},(function(t,n){tn(e,n,t)}))}function da(t,e,n){n=Math.min(t.l.length,n);var a=t.j?z(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const s=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{Bn(s,t,"req"+n+"_")}catch(Ja){a&&a(s)}}if(i){a=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,a}function fa(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function pa(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(z(t.Ga,t),ya(t,t.A)),t.A++,!0)}function va(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ma(t){t.g=new Ce(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ye(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),ha(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&ea(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Ye(e)),n.s=null,n.U=!0,Be(n,t)}function ga(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ba(t,e){var n=null;if(t.g==e){ga(t),va(t),t.g=null;var a=2}else{if(!Cn(t.i,e))return;n=e.D,On(t.i,e),a=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==a){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;a=le(),Bt(a,new fe(a,n,e,r)),la(t)}else fa(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==a&&ca(t,e)||2==a&&pa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:za(t,5);break;case 4:za(t,10);break;case 3:za(t,6);break;default:za(t,2)}}function ya(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function za(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var a=z(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Xe(n,"https"),en(n)),Ln(n.toString(),a)}else de(2);t.G=0,t.j&&t.j.va(e),wa(t),oa(t)}function wa(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,k(t.l),t.l.length=0),t.j.ua())}function Ma(t,e,n){let a=nn(n);if(""!=a.i)e&&Je(a,e+"."+a.i),Ze(a,a.m);else{const t=h.location;a=an(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&F(t.aa,(function(t,e){tn(a,e,t)})),e=t.D,n=t.sa,e&&n&&tn(a,e,n),tn(a,"VER",t.ma),ha(t,a),a}function Aa(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Nn(new En({ib:!0})):new Nn(t.qa),e.L=t.H,e}function Va(){}function Ca(){if(q&&!(10<=Number(it)))throw Error("Environmental error: no available transport.")}function Ha(t,e){kt.call(this),this.g=new aa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!B(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!B(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sa(this)}function Oa(t){Me.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ia(){Ae.call(this),this.status=1}function Sa(t){this.g=t}a=Nn.prototype,a.ea=function(t,e,n,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ze.g(),this.C=this.u?be(this.u):be(ze),this.g.onreadystatechange=z(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Wn(this,i)}t=n||"";const r=new $e(this.headers);a&&Re(a,(function(t,e){r.set(e,t)})),a=I(r.T()),n=h.FormData&&t instanceof h.FormData,!(0<=H(Un,e))||a||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jn(this),0<this.B&&((this.K=Gn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=z(this.pa,this)):this.A=Wt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Wn(this,i)}},a.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Bt(this,"timeout"),this.abort(8))},a.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Bt(this,"complete"),Bt(this,"abort"),Xn(this))},a.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),Nn.Z.M.call(this)},a.Fa=function(){this.s||(this.F||this.v||this.l?Yn(this):this.cb())},a.cb=function(){Yn(this)},a.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(t){return-1}},a.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},a.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},a.Da=function(){return this.m},a.La=function(){return"string"===typeof this.j?this.j:String(this.j)},a=aa.prototype,a.ma=8,a.G=1,a.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},a.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ce(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=D(i),N(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var a=this.l[n];if(a="__data__"in a.g&&(a=a.g.__data__,"string"===typeof a)?a.length:void 0,void 0===a)break;if(e+=a,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=da(this,r,e),n=Ye(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),ha(this,n),this.o&&i&&ea(n,this.o,i),Hn(this.i,r),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),r.$=!0,ke(r,n,null)):ke(r,n,e),this.G=2}}else 3==this.G&&(t?ua(this,t):0==this.l.length||An(this.i)||ua(this))},a.Ga=function(){if(this.u=null,ma(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(z(this.bb,this),t)}},a.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),ia(this),ma(this))},a.ab=function(){null!=this.v&&(this.v=null,ia(this),pa(this),de(19))},a.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},a=Va.prototype,a.xa=function(){},a.wa=function(){},a.va=function(){},a.ua=function(){},a.Oa=function(){},Ca.prototype.g=function(t,e){return new Ha(t,e)},M(Ha,kt),Ha.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(z(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ma(t,null,t.W),la(t)},Ha.prototype.close=function(){ra(this.g)},Ha.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,sa(this.g,e)}else this.v?(e={},e.__data__=Tt(t),sa(this.g,e)):sa(this.g,t)},Ha.prototype.M=function(){this.g.j=null,delete this.j,ra(this.g),delete this.g,Ha.Z.M.call(this)},M(Oa,Me),M(Ia,Ae),M(Sa,Va),Sa.prototype.xa=function(){Bt(this.g,"a")},Sa.prototype.wa=function(t){Bt(this.g,new Oa(t))},Sa.prototype.va=function(t){Bt(this.g,new Ia(t))},Sa.prototype.ua=function(){Bt(this.g,"b")},Ca.prototype.createWebChannel=Ca.prototype.g,Ha.prototype.send=Ha.prototype.u,Ha.prototype.open=Ha.prototype.m,Ha.prototype.close=Ha.prototype.close,ve.NO_ERROR=0,ve.TIMEOUT=8,ve.HTTP_ERROR=6,me.COMPLETE="complete",ye.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",kt.prototype.listen=kt.prototype.N,Nn.prototype.listenOnce=Nn.prototype.O,Nn.prototype.getLastError=Nn.prototype.La,Nn.prototype.getLastErrorCode=Nn.prototype.Da,Nn.prototype.getStatus=Nn.prototype.ba,Nn.prototype.getResponseJson=Nn.prototype.Qa,Nn.prototype.getResponseText=Nn.prototype.ga,Nn.prototype.send=Nn.prototype.ea;var ka=c.createWebChannelTransport=function(){return new Ca},Ba=c.getStatEventTarget=function(){return le()},La=c.ErrorCode=ve,Ta=c.EventType=me,Ea=c.Event=oe,Pa=c.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_a=c.FetchXmlHttpFactory=En,xa=c.WebChannel=ye,Fa=c.XhrIo=Nn;const Da="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ja.UNAUTHENTICATED=new ja(null),ja.GOOGLE_CREDENTIALS=new ja("google-credentials-uid"),ja.FIRST_PARTY=new ja("first-party-uid"),ja.MOCK_USER=new ja("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Na="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new o.Yd("@firebase/firestore");function $a(){return Ra.logLevel}function Ua(t,...e){if(Ra.logLevel<=o["in"].DEBUG){const n=e.map(Wa);Ra.debug(`Firestore (${Na}): ${t}`,...n)}}function Ga(t,...e){if(Ra.logLevel<=o["in"].ERROR){const n=e.map(Wa);Ra.error(`Firestore (${Na}): ${t}`,...n)}}function qa(t,...e){if(Ra.logLevel<=o["in"].WARN){const n=e.map(Wa);Ra.warn(`Firestore (${Na}): ${t}`,...n)}}function Wa(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t="Unexpected state"){const e=`FIRESTORE (${Na}) INTERNAL ASSERTION FAILED: `+t;throw Ga(e),new Error(e)}function Ya(t,e){t||Ka()}function Xa(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Za extends s.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class er{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ja.UNAUTHENTICATED)))}shutdown(){}}class nr{constructor(t){this.t=t,this.currentUser=ja.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const a=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Qa;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Qa,t.enqueueRetryable((()=>a(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await a(this.currentUser)}))},o=t=>{Ua("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ua("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Qa)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ua("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ya("string"==typeof e.accessToken),new tr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ya(null===t||"string"==typeof t),new ja(t)}}class ar{constructor(t,e,n){this.type="FirstParty",this.user=ja.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const a=t.auth.getAuthHeaderValueForFirstParty([]);a&&this.headers.set("Authorization",a),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class rr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ar(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ja.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ir{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class or{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ua("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ua("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const a=t=>{Ua("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>a(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?a(t):Ua("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ya("string"==typeof t.token),this.p=t.token,new ir(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let a=0;a<t;a++)n[a]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr.A=-1;class cr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const a=lr(40);for(let r=0;r<a.length;++r)n.length<20&&a[r]<e&&(n+=t.charAt(a[r]%t.length))}return n}}function ur(t,e){return t<e?-1:t>e?1:0}function hr(t,e,n){return t.length===e.length&&t.every(((t,a)=>n(t,e[a])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Za(Ja.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Za(Ja.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Za(Ja.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Za(Ja.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dr.fromMillis(Date.now())}static fromDate(t){return dr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new dr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ur(this.nanoseconds,t.nanoseconds):ur(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new fr(t)}static min(){return new fr(new dr(0,0))}static max(){return new fr(new dr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ka(),void 0===n?n=t.length-e:n>t.length-e&&Ka(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===gr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let a=0;a<n;a++){const n=t.get(a),r=e.get(a);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class br extends gr{construct(t,e,n){return new br(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Za(Ja.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new br(e)}static emptyPath(){return new br([])}}const yr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zr extends gr{construct(t,e,n){return new zr(t,e,n)}static isValidIdentifier(t){return yr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new zr(["__name__"])}static fromServerFormat(t){const e=[];let n="",a=0;const r=()=>{if(0===n.length)throw new Za(Ja.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;a<t.length;){const e=t[a];if("\\"===e){if(a+1===t.length)throw new Za(Ja.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[a+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Za(Ja.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,a+=2}else"`"===e?(i=!i,a++):"."!==e||i?(n+=e,a++):(r(),a++)}if(r(),i)throw new Za(Ja.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new zr(e)}static emptyPath(){return new zr([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t){this.fields=t,t.sort(zr.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Mr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Mr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ur(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Mr.EMPTY_BYTE_STRING=new Mr("");const Ar=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(Ya(!!t),"string"==typeof t){let e=0;const n=Ar.exec(t);if(Ya(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const a=new Date(t);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:Cr(t.seconds),nanos:Cr(t.nanos)}}function Cr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Hr(t){return"string"==typeof t?Mr.fromBase64String(t):Mr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ir(t){const e=t.mapValue.fields.__previous_value__;return Or(e)?Ir(e):e}function Sr(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new dr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,n,a,r,i,o,s){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=a,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=s}}class Br{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Br("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Br&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){return null==t}function Tr(t){return 0===t&&1/t==-1/0}function Er(t){return"number"==typeof t&&Number.isInteger(t)&&!Tr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t){this.path=t}static fromPath(t){return new Pr(br.fromString(t))}static fromName(t){return new Pr(br.fromString(t).popFirst(5))}static empty(){return new Pr(br.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===br.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return br.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Pr(new br(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Or(t)?4:Yr(t)?9:10:Ka()}function xr(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sr(t).isEqual(Sr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Vr(t.timestampValue),a=Vr(e.timestampValue);return n.seconds===a.seconds&&n.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Hr(t.bytesValue).isEqual(Hr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Cr(t.geoPointValue.latitude)===Cr(e.geoPointValue.latitude)&&Cr(t.geoPointValue.longitude)===Cr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Cr(t.integerValue)===Cr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Cr(t.doubleValue),a=Cr(e.doubleValue);return n===a?Tr(n)===Tr(a):isNaN(n)&&isNaN(a)}return!1}(t,e);case 9:return hr(t.arrayValue.values||[],e.arrayValue.values||[],xr);case 10:return function(t,e){const n=t.mapValue.fields||{},a=e.mapValue.fields||{};if(pr(n)!==pr(a))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===a[r]||!xr(n[r],a[r])))return!1;return!0}(t,e);default:return Ka()}}function Fr(t,e){return void 0!==(t.values||[]).find((t=>xr(t,e)))}function Dr(t,e){if(t===e)return 0;const n=_r(t),a=_r(e);if(n!==a)return ur(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return ur(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Cr(t.integerValue||t.doubleValue),a=Cr(e.integerValue||e.doubleValue);return n<a?-1:n>a?1:n===a?0:isNaN(n)?isNaN(a)?0:-1:1}(t,e);case 3:return jr(t.timestampValue,e.timestampValue);case 4:return jr(Sr(t),Sr(e));case 5:return ur(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Hr(t),a=Hr(e);return n.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),a=e.split("/");for(let r=0;r<n.length&&r<a.length;r++){const t=ur(n[r],a[r]);if(0!==t)return t}return ur(n.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ur(Cr(t.latitude),Cr(e.latitude));return 0!==n?n:ur(Cr(t.longitude),Cr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],a=e.values||[];for(let r=0;r<n.length&&r<a.length;++r){const t=Dr(n[r],a[r]);if(t)return t}return ur(n.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},a=Object.keys(n),r=e.fields||{},i=Object.keys(r);a.sort(),i.sort();for(let o=0;o<a.length&&o<i.length;++o){const t=ur(a[o],i[o]);if(0!==t)return t;const e=Dr(n[a[o]],r[i[o]]);if(0!==e)return e}return ur(a.length,i.length)}(t.mapValue,e.mapValue);default:throw Ka()}}function jr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ur(t,e);const n=Vr(t),a=Vr(e),r=ur(n.seconds,a.seconds);return 0!==r?r:ur(n.nanos,a.nanos)}function Nr(t){return Rr(t)}function Rr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Vr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Hr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Pr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const a of t.values||[])n?n=!1:e+=",",e+=Rr(a);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",a=!0;for(const r of e)a?a=!1:n+=",",n+=`${r}:${Rr(t.fields[r])}`;return n+"}"}(t.mapValue):Ka();var e,n}function $r(t){return!!t&&"integerValue"in t}function Ur(t){return!!t&&"arrayValue"in t}function Gr(t){return!!t&&"nullValue"in t}function qr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wr(t){return!!t&&"mapValue"in t}function Kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Kr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(t){this.value=t}static empty(){return new Xr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Wr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Kr(e)}setAll(t){let e=zr.emptyPath(),n={},a=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,a),n={},a=[],e=r.popLast()}t?n[r.lastSegment()]=Kr(t):a.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,a)}delete(t){const e=this.field(t.popLast());Wr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return xr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let a=e.mapValue.fields[t.get(n)];Wr(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=a),e=a}return e.mapValue.fields}applyChanges(t,e,n){vr(e,((e,n)=>t[e]=n));for(const a of n)delete t[a]}clone(){return new Xr(Kr(this.value))}}function Jr(t){const e=[];return vr(t.fields,((t,n)=>{const a=new zr([t]);if(Wr(n)){const t=Jr(n.mapValue).fields;if(0===t.length)e.push(a);else for(const n of t)e.push(a.child(n))}else e.push(a)})),new wr(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zr{constructor(t,e,n,a,r,i){this.key=t,this.documentType=e,this.version=n,this.readTime=a,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Zr(t,0,fr.min(),fr.min(),Xr.empty(),0)}static newFoundDocument(t,e,n){return new Zr(t,1,e,fr.min(),n,0)}static newNoDocument(t,e){return new Zr(t,2,e,fr.min(),Xr.empty(),0)}static newUnknownDocument(t,e){return new Zr(t,3,e,fr.min(),Xr.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Xr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Xr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Zr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Zr(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Qr{constructor(t,e,n,a){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=a}}Qr.UNKNOWN_ID=-1;function ti(t,e){const n=t.toTimestamp().seconds,a=t.toTimestamp().nanoseconds+1,r=fr.fromTimestamp(1e9===a?new dr(n+1,0):new dr(n,a));return new ni(r,Pr.empty(),e)}function ei(t){return new ni(t.readTime,t.key,-1)}class ni{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ni(fr.min(),Pr.empty(),-1)}static max(){return new ni(fr.max(),Pr.empty(),-1)}}function ai(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Pr.comparator(t.documentKey,e.documentKey),0!==n?n:ur(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e=null,n=[],a=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=a,this.limit=r,this.startAt=i,this.endAt=o,this.P=null}}function ii(t,e=null,n=[],a=[],r=null,i=null,o=null){return new ri(t,e,n,a,r,i,o)}function oi(t){const e=Xa(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Nr(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Lr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Nr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Nr(t))).join(",")),e.P=t}return e.P}function si(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Nr(e.value)}`;var e})).join(", ")}]`),Lr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Nr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Nr(t))).join(",")),`Target(${e})`}function li(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!wi(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],a=e.filters[r],n.op!==a.op||!n.field.isEqual(a.field)||!xr(n.value,a.value))return!1;var n,a;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ai(t.startAt,e.startAt)&&Ai(t.endAt,e.endAt)}function ci(t){return Pr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ui extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new hi(t,e,n):"array-contains"===e?new vi(t,n):"in"===e?new mi(t,n):"not-in"===e?new gi(t,n):"array-contains-any"===e?new bi(t,n):new ui(t,e,n)}static V(t,e,n){return"in"===e?new di(t,n):new fi(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Dr(e,this.value)):null!==e&&_r(this.value)===_r(e)&&this.v(Dr(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ka()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hi extends ui{constructor(t,e,n){super(t,e,n),this.key=Pr.fromName(n.referenceValue)}matches(t){const e=Pr.comparator(t.key,this.key);return this.v(e)}}class di extends ui{constructor(t,e){super(t,"in",e),this.keys=pi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fi extends ui{constructor(t,e){super(t,"not-in",e),this.keys=pi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Pr.fromName(t.referenceValue)))}class vi extends ui{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ur(e)&&Fr(e.arrayValue,this.value)}}class mi extends ui{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Fr(this.value.arrayValue,e)}}class gi extends ui{constructor(t,e){super(t,"not-in",e)}matches(t){if(Fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Fr(this.value.arrayValue,e)}}class bi extends ui{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ur(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Fr(this.value.arrayValue,t)))}}class yi{constructor(t,e){this.position=t,this.inclusive=e}}class zi{constructor(t,e="asc"){this.field=t,this.dir=e}}function wi(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Mi(t,e,n){let a=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(a=i.field.isKeyField()?Pr.comparator(Pr.fromName(o.referenceValue),n.key):Dr(o,n.data.field(i.field)),"desc"===i.dir&&(a*=-1),0!==a)break}return a}function Ai(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e=null,n=[],a=[],r=null,i="F",o=null,s=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=a,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=s,this.D=null,this.C=null,this.startAt,this.endAt}}function Ci(t,e,n,a,r,i,o,s){return new Vi(t,e,n,a,r,i,o,s)}function Hi(t){return new Vi(t)}function Oi(t){return!Lr(t.limit)&&"F"===t.limitType}function Ii(t){return!Lr(t.limit)&&"L"===t.limitType}function Si(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ki(t){for(const e of t.filters)if(e.S())return e.field;return null}function Bi(t){return null!==t.collectionGroup}function Li(t){const e=Xa(t);if(null===e.D){e.D=[];const t=ki(e),n=Si(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new zi(t)),e.D.push(new zi(zr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new zi(zr.keyField(),t))}}}return e.D}function Ti(t){const e=Xa(t);if(!e.C)if("F"===e.limitType)e.C=ii(e.path,e.collectionGroup,Li(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Li(e)){const e="desc"===r.dir?"asc":"desc";t.push(new zi(r.field,e))}const n=e.endAt?new yi(e.endAt.position,!e.endAt.inclusive):null,a=e.startAt?new yi(e.startAt.position,!e.startAt.inclusive):null;e.C=ii(e.path,e.collectionGroup,t,e.filters,e.limit,n,a)}return e.C}function Ei(t,e,n){return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pi(t,e){return li(Ti(t),Ti(e))&&t.limitType===e.limitType}function _i(t){return`${oi(Ti(t))}|lt:${t.limitType}`}function xi(t){return`Query(target=${si(Ti(t))}; limitType=${t.limitType})`}function Fi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Pr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const a=Mi(t,e,n);return t.inclusive?a<=0:a<0}(t.startAt,Li(t),e))&&!(t.endAt&&!function(t,e,n){const a=Mi(t,e,n);return t.inclusive?a>=0:a>0}(t.endAt,Li(t),e))}(t,e)}function Di(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ji(t){return(e,n)=>{let a=!1;for(const r of Li(t)){const t=Ni(r,e,n);if(0!==t)return t;a=a||r.field.isKeyField()}return 0}}function Ni(t,e,n){const a=t.field.isKeyField()?Pr.comparator(e.key,n.key):function(t,e,n){const a=e.data.field(t),r=n.data.field(t);return null!==a&&null!==r?Dr(a,r):Ka()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return a;case"desc":return-1*a;default:return Ka()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(e)?"-0":e}}function $i(t){return{integerValue:""+t}}function Ui(t,e){return Er(e)?$i(e):Ri(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this._=void 0}}function qi(t,e,n){return t instanceof Yi?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Xi?Ji(t,e):t instanceof Zi?Qi(t,e):function(t,e){const n=Ki(t,e),a=eo(n)+eo(t.k);return $r(n)&&$r(t.k)?$i(a):Ri(t.M,a)}(t,e)}function Wi(t,e,n){return t instanceof Xi?Ji(t,e):t instanceof Zi?Qi(t,e):n}function Ki(t,e){return t instanceof to?$r(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Yi extends Gi{}class Xi extends Gi{constructor(t){super(),this.elements=t}}function Ji(t,e){const n=no(e);for(const a of t.elements)n.some((t=>xr(t,a)))||n.push(a);return{arrayValue:{values:n}}}class Zi extends Gi{constructor(t){super(),this.elements=t}}function Qi(t,e){let n=no(e);for(const a of t.elements)n=n.filter((t=>!xr(t,a)));return{arrayValue:{values:n}}}class to extends Gi{constructor(t,e){super(),this.M=t,this.k=e}}function eo(t){return Cr(t.integerValue||t.doubleValue)}function no(t){return Ur(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,e){this.field=t,this.transform=e}}function ro(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Xi&&e instanceof Xi||t instanceof Zi&&e instanceof Zi?hr(t.elements,e.elements,xr):t instanceof to&&e instanceof to?xr(t.k,e.k):t instanceof Yi&&e instanceof Yi}(t.transform,e.transform)}class io{constructor(t,e){this.version=t,this.transformResults=e}}class oo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new oo}static exists(t){return new oo(void 0,t)}static updateTime(t){return new oo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function so(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class lo{}function co(t,e,n){t instanceof vo?function(t,e,n){const a=t.value.clone(),r=bo(t.fieldTransforms,e,n.transformResults);a.setAll(r),e.convertToFoundDocument(n.version,a).setHasCommittedMutations()}(t,e,n):t instanceof mo?function(t,e,n){if(!so(t.precondition,e))return void e.convertToUnknownDocument(n.version);const a=bo(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(go(t)),r.setAll(a),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n){t instanceof vo?function(t,e,n){if(!so(t.precondition,e))return;const a=t.value.clone(),r=yo(t.fieldTransforms,n,e);a.setAll(r),e.convertToFoundDocument(po(e),a).setHasLocalMutations()}(t,e,n):t instanceof mo?function(t,e,n){if(!so(t.precondition,e))return;const a=yo(t.fieldTransforms,n,e),r=e.data;r.setAll(go(t)),r.setAll(a),e.convertToFoundDocument(po(e),r).setHasLocalMutations()}(t,e,n):function(t,e){so(t.precondition,e)&&e.convertToNoDocument(fr.min())}(t,e)}function ho(t,e){let n=null;for(const a of t.fieldTransforms){const t=e.data.field(a.field),r=Ki(a.transform,t||null);null!=r&&(null==n&&(n=Xr.empty()),n.set(a.field,r))}return n||null}function fo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&hr(t,e,((t,e)=>ro(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function po(t){return t.isFoundDocument()?t.version:fr.min()}class vo extends lo{constructor(t,e,n,a=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=a,this.type=0}}class mo extends lo{constructor(t,e,n,a,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=a,this.fieldTransforms=r,this.type=1}}function go(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const a=t.data.field(n);e.set(n,a)}})),e}function bo(t,e,n){const a=new Map;Ya(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,s=e.data.field(i.field);a.set(i.field,Wi(o,s,n[r]))}return a}function yo(t,e,n){const a=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);a.set(r.field,qi(t,i,e))}return a}class zo extends lo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class wo extends lo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ao,Vo;function Co(t){switch(t){default:return Ka();case Ja.CANCELLED:case Ja.UNKNOWN:case Ja.DEADLINE_EXCEEDED:case Ja.RESOURCE_EXHAUSTED:case Ja.INTERNAL:case Ja.UNAVAILABLE:case Ja.UNAUTHENTICATED:return!1;case Ja.INVALID_ARGUMENT:case Ja.NOT_FOUND:case Ja.ALREADY_EXISTS:case Ja.PERMISSION_DENIED:case Ja.FAILED_PRECONDITION:case Ja.ABORTED:case Ja.OUT_OF_RANGE:case Ja.UNIMPLEMENTED:case Ja.DATA_LOSS:return!0}}function Ho(t){if(void 0===t)return Ga("GRPC error has no .code"),Ja.UNKNOWN;switch(t){case Ao.OK:return Ja.OK;case Ao.CANCELLED:return Ja.CANCELLED;case Ao.UNKNOWN:return Ja.UNKNOWN;case Ao.DEADLINE_EXCEEDED:return Ja.DEADLINE_EXCEEDED;case Ao.RESOURCE_EXHAUSTED:return Ja.RESOURCE_EXHAUSTED;case Ao.INTERNAL:return Ja.INTERNAL;case Ao.UNAVAILABLE:return Ja.UNAVAILABLE;case Ao.UNAUTHENTICATED:return Ja.UNAUTHENTICATED;case Ao.INVALID_ARGUMENT:return Ja.INVALID_ARGUMENT;case Ao.NOT_FOUND:return Ja.NOT_FOUND;case Ao.ALREADY_EXISTS:return Ja.ALREADY_EXISTS;case Ao.PERMISSION_DENIED:return Ja.PERMISSION_DENIED;case Ao.FAILED_PRECONDITION:return Ja.FAILED_PRECONDITION;case Ao.ABORTED:return Ja.ABORTED;case Ao.OUT_OF_RANGE:return Ja.OUT_OF_RANGE;case Ao.UNIMPLEMENTED:return Ja.UNIMPLEMENTED;case Ao.DATA_LOSS:return Ja.DATA_LOSS;default:return Ka()}}(Vo=Ao||(Ao={}))[Vo.OK=0]="OK",Vo[Vo.CANCELLED=1]="CANCELLED",Vo[Vo.UNKNOWN=2]="UNKNOWN",Vo[Vo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vo[Vo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vo[Vo.NOT_FOUND=5]="NOT_FOUND",Vo[Vo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vo[Vo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vo[Vo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vo[Vo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vo[Vo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vo[Vo.ABORTED=10]="ABORTED",Vo[Vo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vo[Vo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vo[Vo.INTERNAL=13]="INTERNAL",Vo[Vo.UNAVAILABLE=14]="UNAVAILABLE",Vo[Vo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[a,r]of n)if(this.equalsFn(a,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),a=this.inner[n];if(void 0===a)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<a.length;r++)if(this.equalsFn(a[r][0],t))return void(a[r]=[t,e]);a.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],t))return 1===n.length?delete this.inner[e]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(t){vr(this.inner,((e,n)=>{for(const[a,r]of n)t(a,r)}))}isEmpty(){return mr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e){this.comparator=t,this.root=e||ko.EMPTY}insert(t,e){return new Io(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ko.BLACK,null,null))}remove(t){return new Io(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ko.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(t,n.key);if(0===a)return e+n.left.size;a<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new So(this.root,t,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new So(this.root,t,this.comparator,!0)}}class So{constructor(t,e,n,a){this.isReverse=a,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&a&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ko{constructor(t,e,n,a,r){this.key=t,this.value=e,this.color=null!=n?n:ko.RED,this.left=null!=a?a:ko.EMPTY,this.right=null!=r?r:ko.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,a,r){return new ko(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=a?a:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let a=this;const r=n(t,a.key);return a=r<0?a.copy(null,null,null,a.left.insert(t,e,n),null):0===r?a.copy(null,e,null,null,null):a.copy(null,null,null,null,a.right.insert(t,e,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return ko.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,a=this;if(e(t,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(t,e),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),0===e(t,a.key)){if(a.right.isEmpty())return ko.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(t,e))}return a.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ko.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ko.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ka();if(this.right.isRed())throw Ka();const t=this.left.check();if(t!==this.right.check())throw Ka();return t+(this.isRed()?0:1)}}ko.EMPTY=null,ko.RED=!0,ko.BLACK=!1,ko.EMPTY=new class{constructor(){this.size=0}get key(){throw Ka()}get value(){throw Ka()}get color(){throw Ka()}get left(){throw Ka()}get right(){throw Ka()}copy(t,e,n,a,r){return this}insert(t,e,n){return new ko(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(t){this.comparator=t,this.data=new Io(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,t[1])>=0)return;e(a.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Lo(this.data.getIterator())}getIteratorFrom(t){return new Lo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Bo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,a=n.getNext().key;if(0!==this.comparator(t,a))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Bo(this.comparator);return e.data=t,e}}class Lo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const To=new Io(Pr.comparator);function Eo(){return To}const Po=new Io(Pr.comparator);function _o(){return Po}function xo(){return new Oo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Fo=new Io(Pr.comparator),Do=new Bo(Pr.comparator);function jo(...t){let e=Do;for(const n of t)e=e.add(n);return e}const No=new Bo(ur);function Ro(){return No}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e,n,a,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Uo.createSynthesizedTargetChangeForCurrentChange(t,e)),new $o(fr.min(),n,Ro(),Eo(),jo())}}class Uo{constructor(t,e,n,a,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Uo(Mr.EMPTY_BYTE_STRING,e,jo(),jo(),jo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e,n,a){this.O=t,this.removedTargetIds=e,this.key=n,this.F=a}}class qo{constructor(t,e){this.targetId=t,this.$=e}}class Wo{constructor(t,e,n=Mr.EMPTY_BYTE_STRING,a=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=a}}class Ko{constructor(){this.B=0,this.L=Jo(),this.U=Mr.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=jo(),e=jo(),n=jo();return this.L.forEach(((a,r)=>{switch(r){case 0:t=t.add(a);break;case 2:e=e.add(a);break;case 1:n=n.add(a);break;default:Ka()}})),new Uo(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=Jo()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Yo{constructor(t){this.nt=t,this.st=new Map,this.it=Eo(),this.rt=Xo(),this.ot=new Bo(ur)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Ka()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,a=this.wt(e);if(a){const t=a.target;if(ci(t))if(0===n){const n=new Pr(t.path);this.ct(e,n,Zr.newNoDocument(n,fr.min()))}else Ya(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,a)=>{const r=this.wt(a);if(r){if(n.current&&ci(r.target)){const e=new Pr(r.target.path);null!==this.it.get(e)||this.It(a,e)||this.ct(a,e,Zr.newNoDocument(e,t))}n.j&&(e.set(a,n.H()),n.J())}}));let n=jo();this.rt.forEach(((t,e)=>{let a=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(a=!1,!1)})),a&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const a=new $o(t,e,this.ot,this.it,n);return this.it=Eo(),this.rt=Xo(),this.ot=new Bo(ur),a}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const a=this.lt(t);this.It(t,e)?a.Y(e,1):a.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new Ko,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Bo(ur),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Ua("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Ko),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function Xo(){return new Io(Pr.comparator)}function Jo(){return new Io(Pr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Qo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ts{constructor(t,e){this.databaseId=t,this.N=e}}function es(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ns(t,e){return t.N?e.toBase64():e.toUint8Array()}function as(t,e){return es(t,e.toTimestamp())}function rs(t){return Ya(!!t),fr.fromTimestamp(function(t){const e=Vr(t);return new dr(e.seconds,e.nanos)}(t))}function is(t,e){return function(t){return new br(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function os(t){const e=br.fromString(t);return Ya(Ss(e)),e}function ss(t,e){return is(t.databaseId,e.path)}function ls(t,e){const n=os(e);if(n.get(1)!==t.databaseId.projectId)throw new Za(Ja.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Za(Ja.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Pr(ds(n))}function cs(t,e){return is(t.databaseId,e)}function us(t){const e=os(t);return 4===e.length?br.emptyPath():ds(e)}function hs(t){return new br(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ds(t){return Ya(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function fs(t,e,n){return{name:ss(t,e),fields:n.value.mapValue.fields}}function ps(t,e){let n;if("targetChange"in e){e.targetChange;const a=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ka()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.N?(Ya(void 0===e||"string"==typeof e),Mr.fromBase64String(e||"")):(Ya(void 0===e||e instanceof Uint8Array),Mr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,s=o&&function(t){const e=void 0===t.code?Ja.UNKNOWN:Ho(t.code);return new Za(e,t.message||"")}(o);n=new Wo(a,r,i,s||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const r=ls(t,a.document.name),i=rs(a.document.updateTime),o=new Xr({mapValue:{fields:a.document.fields}}),s=Zr.newFoundDocument(r,i,o),l=a.targetIds||[],c=a.removedTargetIds||[];n=new Go(l,c,s.key,s)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const r=ls(t,a.document),i=a.readTime?rs(a.readTime):fr.min(),o=Zr.newNoDocument(r,i),s=a.removedTargetIds||[];n=new Go([],s,o.key,o)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const r=ls(t,a.document),i=a.removedTargetIds||[];n=new Go([],i,r,null)}else{if(!("filter"in e))return Ka();{e.filter;const t=e.filter;t.targetId;const a=t.count||0,r=new Mo(a),i=t.targetId;n=new qo(i,r)}}return n}function vs(t,e){let n;if(e instanceof vo)n={update:fs(t,e.key,e.value)};else if(e instanceof zo)n={delete:ss(t,e.key)};else if(e instanceof mo)n={update:fs(t,e.key,e.data),updateMask:Is(e.fieldMask)};else{if(!(e instanceof wo))return Ka();n={verify:ss(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Yi)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Xi)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zi)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof to)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Ka()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:as(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ka()}(t,e.precondition)),n}function ms(t,e){return t&&t.length>0?(Ya(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?rs(t.updateTime):rs(e);return n.isEqual(fr.min())&&(n=rs(e)),new io(n,t.transformResults||[])}(t,e)))):[]}function gs(t,e){return{documents:[cs(t,e.path)]}}function bs(t,e){const n={structuredQuery:{}},a=e.path;null!==e.collectionGroup?(n.parent=cs(t,a),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cs(t,a.popLast()),n.structuredQuery.from=[{collectionId:a.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(qr(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NAN"}};if(Gr(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(qr(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NOT_NAN"}};if(Gr(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vs(t.field),op:As(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Vs(t.field),direction:Ms(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.N||Lr(e)?e:{value:e}}(t,e.limit);var s;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(s=e.startAt).inclusive,values:s.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ys(t){let e=us(t.parent);const n=t.structuredQuery,a=n.from?n.from.length:0;let r=null;if(a>0){Ya(1===a);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=ws(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new zi(Cs(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let s=null;n.limit&&(s=function(t){let e;return e="object"==typeof t?t.value:t,Lr(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new yi(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new yi(n,e)}(n.endAt)),Ci(e,r,o,i,s,"F",l,c)}function zs(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ka()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ws(t){return t?void 0!==t.unaryFilter?[Os(t)]:void 0!==t.fieldFilter?[Hs(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ws(t))).reduce(((t,e)=>t.concat(e))):Ka():[]}function Ms(t){return Zo[t]}function As(t){return Qo[t]}function Vs(t){return{fieldPath:t.canonicalString()}}function Cs(t){return zr.fromServerFormat(t.fieldPath)}function Hs(t){return ui.create(Cs(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ka()}}(t.fieldFilter.op),t.fieldFilter.value)}function Os(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Cs(t.unaryFilter.field);return ui.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Cs(t.unaryFilter.field);return ui.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Cs(t.unaryFilter.field);return ui.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Cs(t.unaryFilter.field);return ui.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ka()}}function Is(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ss(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bs=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ls="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ka(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Es(((n,a)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,a)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,a)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Es?e:Es.resolve(e)}catch(t){return Es.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Es.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Es.reject(e)}static resolve(t){return new Es(((e,n)=>{e(t)}))}static reject(t){return new Es(((e,n)=>{n(t)}))}static waitFor(t){return new Es(((e,n)=>{let a=0,r=0,i=!1;t.forEach((t=>{++a,t.next((()=>{++r,i&&r===a&&e()}),(t=>n(t)))})),i=!0,r===a&&e()}))}static or(t){let e=Es.resolve(!1);for(const n of t)e=e.next((t=>t?Es.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,a)=>{n.push(e.call(this,t,a))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _s{constructor(t,e,n,a){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let a=0;a<this.mutations.length;a++){const e=this.mutations[a];e.key.isEqual(t.key)&&co(e,t,n[a])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&uo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&uo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),a=n;this.applyToLocalView(a),n.isValidDocument()||a.convertToNoDocument(fr.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),jo())}isEqual(t){return this.batchId===t.batchId&&hr(this.mutations,t.mutations,((t,e)=>fo(t,e)))&&hr(this.baseMutations,t.baseMutations,((t,e)=>fo(t,e)))}}class xs{constructor(t,e,n,a){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=a}static from(t,e,n){Ya(t.mutations.length===n.length);let a=Fo;const r=t.mutations;for(let i=0;i<r.length;i++)a=a.insert(r[i].key,n[i].version);return new xs(t,e,n,a)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,n,a,r=fr.min(),i=fr.min(),o=Mr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Ds(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this.Jt=t}}function Ns(t){const e=ys({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ei(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Cr(t.integerValue));else if("doubleValue"in t){const n=Cr(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Tr(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Hr(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?Yr(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Ka()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const a of Object.keys(n))this.re(a,e),this.te(n[a],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const a of n)this.te(a,e)}ae(t,e){this.ne(e,37),Pr.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}Rs.fe=new Rs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(){this.qe=new Us}addToCollectionParentIndex(t,e){return this.qe.add(e),Es.resolve()}getCollectionParents(t,e){return Es.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Es.resolve()}deleteFieldIndex(t,e){return Es.resolve()}getDocumentsMatchingTarget(t,e){return Es.resolve(null)}getFieldIndex(t,e){return Es.resolve(null)}getFieldIndexes(t,e){return Es.resolve([])}getNextCollectionGroupToUpdate(t){return Es.resolve(null)}updateCollectionGroup(t,e,n){return Es.resolve()}updateIndexEntries(t,e){return Es.resolve()}}class Us{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),a=this.index[e]||new Bo(br.comparator),r=!a.has(n);return this.index[e]=a.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),a=this.index[e];return a&&a.has(n)}getEntries(t){return(this.index[t]||new Bo(br.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Gs{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Gs(t,Gs.DEFAULT_COLLECTION_PERCENTILE,Gs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gs.DEFAULT_COLLECTION_PERCENTILE=10,Gs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gs.DEFAULT=new Gs(41943040,Gs.DEFAULT_COLLECTION_PERCENTILE,Gs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gs.DISABLED=new Gs(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new qs(0)}static yn(){return new qs(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ws(t){if(t.code!==Ja.FAILED_PRECONDITION||t.message!==Ls)throw t;Ua("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ks{constructor(){this.changes=new Oo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Zr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Es.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const a of e)a.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return Pr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):Bi(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new Pr(e)).next((t=>{let e=_o();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const a=e.collectionGroup;let r=_o();return this.indexManager.getCollectionParents(t,a).next((i=>Es.forEach(i,(i=>{const o=function(t,e){return new Vi(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(a));return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}zs(t,e,n){let a;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(a=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let r=a.get(n);null==r&&(r=Zr.newInvalidDocument(n),a=a.insert(n,r)),uo(t,r,e.localWriteTime),r.isFoundDocument()||(a=a.remove(n))}})).next((()=>(a.forEach(((t,n)=>{Fi(e,n)||(a=a.remove(t))})),a)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e,n,a){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=a}static Ys(t,e){let n=jo(),a=jo();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:a=a.add(r.doc.key)}return new Xs(t,e.fromCache,n,a)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{Xs(t){this.Zs=t}Qs(t,e,n,a){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(fr.min())?this.ti(t,e):this.Zs.Ks(t,a).next((r=>{const i=this.ei(e,r);return(Oi(e)||Ii(e))&&this.ni(e.limitType,i,a,n)?this.ti(t,e):($a()<=o["in"].DEBUG&&Ua("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),xi(e)),this.Zs.Qs(t,e,ti(n,-1)).next((t=>(i.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ei(t,e){let n=new Bo(ji(t));return e.forEach(((e,a)=>{Fi(t,a)&&(n=n.add(a))})),n}ni(t,e,n,a){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(a)>0)}ti(t,e){return $a()<=o["in"].DEBUG&&Ua("QueryEngine","Using full collection scan to execute query:",xi(e)),this.Zs.Qs(t,e,ni.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e,n,a){this.persistence=t,this.si=e,this.M=a,this.ii=new Io(ur),this.ri=new Oo((t=>oi(t)),li),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new Ys(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ii)))}}function Qs(t,e,n,a){return new Zs(t,e,n,a)}async function tl(t,e){const n=Xa(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let a;return n.Bs.getAllMutationBatches(t).next((r=>(a=r,n.ai(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=jo();for(const t of a){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ci.Ks(t,o).next((t=>({hi:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function el(t,e){const n=Xa(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const a=e.batch.keys(),r=n.ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,a){const r=n.batch,i=r.keys();let o=Es.resolve();return i.forEach((t=>{o=o.next((()=>a.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Ya(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),a.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,a)))}))}function nl(t){const e=Xa(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function al(t,e){const n=Xa(t),a=e.snapshotVersion;let r=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.ui.newChangeBuffer({trackRemovals:!0});r=n.ii;const o=[];e.targetChanges.forEach(((i,s)=>{const l=r.get(s);if(!l)return;o.push(n.fs.removeMatchingKeys(t,i.removedDocuments,s).next((()=>n.fs.addMatchingKeys(t,i.addedDocuments,s))));let c=l.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(s)?c=c.withResumeToken(Mr.EMPTY_BYTE_STRING,fr.min()).withLastLimboFreeSnapshotVersion(fr.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,a)),r=r.insert(s,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,i)&&o.push(n.fs.updateTargetData(t,c))}));let s=Eo();if(e.documentUpdates.forEach((a=>{e.resolvedLimboDocuments.has(a)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,a))})),o.push(rl(t,i,e.documentUpdates).next((t=>{s=t}))),!a.isEqual(fr.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,a)));o.push(e)}return Es.waitFor(o).next((()=>i.apply(t))).next((()=>n.ci.Gs(t,s))).next((()=>s))})).then((t=>(n.ii=r,t)))}function rl(t,e,n){let a=jo();return n.forEach((t=>a=a.add(t))),e.getEntries(t,a).next((t=>{let a=Eo();return n.forEach(((n,r)=>{const i=t.get(n);r.isNoDocument()&&r.version.isEqual(fr.min())?(e.removeEntry(n,r.readTime),a=a.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(e.addEntry(r),a=a.insert(n,r)):Ua("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)})),a}))}function il(t,e){const n=Xa(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function ol(t,e){const n=Xa(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let a;return n.fs.getTargetData(t,e).next((r=>r?(a=r,Es.resolve(a)):n.fs.allocateTargetId(t).next((r=>(a=new Ds(e,r,0,t.currentSequenceNumber),n.fs.addTargetData(t,a).next((()=>a)))))))})).then((t=>{const a=n.ii.get(t.targetId);return(null===a||t.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.ii=n.ii.insert(t.targetId,t),n.ri.set(e,t.targetId)),t}))}async function sl(t,e,n){const a=Xa(t),r=a.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await a.persistence.runTransaction("Release target",i,(t=>a.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Ps(t))throw t;Ua("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}a.ii=a.ii.remove(e),a.ri.delete(r.target)}function ll(t,e,n){const a=Xa(t);let r=fr.min(),i=jo();return a.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const a=Xa(t),r=a.ri.get(n);return void 0!==r?Es.resolve(a.ii.get(r)):a.fs.getTargetData(e,n)}(a,t,Ti(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,a.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>a.si.Qs(t,e,n?r:fr.min(),n?i:jo()))).next((t=>(cl(a,Di(e),t),{documents:t,li:i})))))}function cl(t,e,n){let a=fr.min();n.forEach(((t,e)=>{e.readTime.compareTo(a)>0&&(a=e.readTime)})),t.oi.set(e,a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,e){return Es.resolve(this.wi.get(e))}saveBundleMetadata(t,e){var n;return this.wi.set(e.id,{id:(n=e).id,version:n.version,createTime:rs(n.createTime)}),Es.resolve()}getNamedQuery(t,e){return Es.resolve(this.mi.get(e))}saveNamedQuery(t,e){return this.mi.set(e.name,function(t){return{name:t.name,query:Ns(t.bundledQuery),readTime:rs(t.readTime)}}(e)),Es.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.overlays=new Io(Pr.comparator),this.gi=new Map}getOverlay(t,e){return Es.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,a)=>{this.Xt(t,e,a)})),Es.resolve()}removeOverlaysForBatchId(t,e,n){const a=this.gi.get(n);return void 0!==a&&(a.forEach((t=>this.overlays=this.overlays.remove(t))),this.gi.delete(n)),Es.resolve()}getOverlaysForCollection(t,e,n){const a=xo(),r=e.length+1,i=new Pr(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&a.set(t.getKey(),t)}return Es.resolve(a)}getOverlaysForCollectionGroup(t,e,n,a){let r=new Io(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=xo(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=xo(),s=r.getIterator();for(;s.hasNext();)if(s.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=a)break;return Es.resolve(o)}Xt(t,e,n){if(null===n)return;const a=this.overlays.get(n.key);if(null!==a){const t=this.gi.get(a.largestBatchId).delete(n.key);this.gi.set(a.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Fs(e,n));let r=this.gi.get(e);void 0===r&&(r=jo(),this.gi.set(e,r)),this.gi.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.yi=new Bo(fl.pi),this.Ii=new Bo(fl.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,e){const n=new fl(t,e);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ai(new fl(t,e))}Ri(t,e){t.forEach((t=>this.removeReference(t,e)))}Pi(t){const e=new Pr(new br([])),n=new fl(e,t),a=new fl(e,t+1),r=[];return this.Ii.forEachInRange([n,a],(t=>{this.Ai(t),r.push(t.key)})),r}bi(){this.yi.forEach((t=>this.Ai(t)))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const e=new Pr(new br([])),n=new fl(e,t),a=new fl(e,t+1);let r=jo();return this.Ii.forEachInRange([n,a],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new fl(t,0),n=this.yi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class fl{constructor(t,e){this.key=t,this.vi=e}static pi(t,e){return Pr.comparator(t.key,e.key)||ur(t.vi,e.vi)}static Ti(t,e){return ur(t.vi,e.vi)||Pr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.Si=1,this.Di=new Bo(fl.pi)}checkEmpty(t){return Es.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,a){const r=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const i=new _s(r,e,n,a);this.Bs.push(i);for(const o of a)this.Di=this.Di.add(new fl(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Es.resolve(i)}lookupMutationBatch(t,e){return Es.resolve(this.Ci(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,a=this.xi(n),r=a<0?0:a;return Es.resolve(this.Bs.length>r?this.Bs[r]:null)}getHighestUnacknowledgedBatchId(){return Es.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return Es.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new fl(e,0),a=new fl(e,Number.POSITIVE_INFINITY),r=[];return this.Di.forEachInRange([n,a],(t=>{const e=this.Ci(t.vi);r.push(e)})),Es.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Bo(ur);return e.forEach((t=>{const e=new fl(t,0),a=new fl(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([e,a],(t=>{n=n.add(t.vi)}))})),Es.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,a=n.length+1;let r=n;Pr.isDocumentKey(r)||(r=r.child(""));const i=new fl(new Pr(r),0);let o=new Bo(ur);return this.Di.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===a&&(o=o.add(t.vi)),!0)}),i),Es.resolve(this.Ni(o))}Ni(t){const e=[];return t.forEach((t=>{const n=this.Ci(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ya(0===this.ki(e.batchId,"removed")),this.Bs.shift();let n=this.Di;return Es.forEach(e.mutations,(a=>{const r=new fl(a.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,a.key)})).next((()=>{this.Di=n}))}_n(t){}containsKey(t,e){const n=new fl(e,0),a=this.Di.firstAfterOrEqual(n);return Es.resolve(e.isEqual(a&&a.key))}performConsistencyCheck(t){return this.Bs.length,Es.resolve()}ki(t,e){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const e=this.xi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t){this.Mi=t,this.docs=new Io(Pr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,a=this.docs.get(n),r=a?a.size:0,i=this.Mi(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Es.resolve(n?n.document.mutableCopy():Zr.newInvalidDocument(e))}getEntries(t,e){let n=Eo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Zr.newInvalidDocument(t))})),Es.resolve(n)}getAllFromCollection(t,e,n){let a=Eo();const r=new Pr(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||ai(ei(r),n)<=0||(a=a.insert(r.key,r.mutableCopy()))}return Es.resolve(a)}getAllFromCollectionGroup(t,e,n,a){Ka()}Oi(t,e){return Es.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ml(this)}getSize(t){return Es.resolve(this.size)}}class ml extends Ks{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,a)=>{a.isValidDocument()?e.push(this.Kn.addEntry(t,a)):this.Kn.removeEntry(n)})),Es.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.persistence=t,this.Fi=new Oo((t=>oi(t)),li),this.lastRemoteSnapshotVersion=fr.min(),this.highestTargetId=0,this.$i=0,this.Bi=new dl,this.targetCount=0,this.Li=qs.gn()}forEachTarget(t,e){return this.Fi.forEach(((t,n)=>e(n))),Es.resolve()}getLastRemoteSnapshotVersion(t){return Es.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Es.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),Es.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),Es.resolve()}Tn(t){this.Fi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Li=new qs(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,Es.resolve()}updateTargetData(t,e){return this.Tn(e),Es.resolve()}removeTargetData(t,e){return this.Fi.delete(e.target),this.Bi.Pi(e.targetId),this.targetCount-=1,Es.resolve()}removeTargets(t,e,n){let a=0;const r=[];return this.Fi.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fi.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),a++)})),Es.waitFor(r).next((()=>a))}getTargetCount(t){return Es.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fi.get(e)||null;return Es.resolve(n)}addMatchingKeys(t,e,n){return this.Bi.Ei(e,n),Es.resolve()}removeMatchingKeys(t,e,n){this.Bi.Ri(e,n);const a=this.persistence.referenceDelegate,r=[];return a&&e.forEach((e=>{r.push(a.markPotentiallyOrphaned(t,e))})),Es.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Bi.Pi(e),Es.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Bi.Vi(e);return Es.resolve(n)}containsKey(t,e){return Es.resolve(this.Bi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,e){this.Ui={},this.overlays={},this.es=new sr(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new gl(this),this.indexManager=new $s,this.ds=function(t){return new vl(t)}((t=>this.referenceDelegate.qi(t))),this.M=new js(e),this._s=new ul(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new hl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ui[t.toKey()];return n||(n=new pl(e,this.referenceDelegate),this.Ui[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){Ua("MemoryPersistence","Starting transaction:",t);const a=new yl(this.es.next());return this.referenceDelegate.Ki(),n(a).next((t=>this.referenceDelegate.Gi(a).next((()=>t)))).toPromise().then((t=>(a.raiseOnCommittedEvent(),t)))}Qi(t,e){return Es.or(Object.values(this.Ui).map((n=>()=>n.containsKey(t,e))))}}class yl extends Ts{constructor(t){super(),this.currentSequenceNumber=t}}class zl{constructor(t){this.persistence=t,this.ji=new dl,this.Wi=null}static zi(t){return new zl(t)}get Hi(){if(this.Wi)return this.Wi;throw Ka()}addReference(t,e,n){return this.ji.addReference(n,e),this.Hi.delete(n.toString()),Es.resolve()}removeReference(t,e,n){return this.ji.removeReference(n,e),this.Hi.add(n.toString()),Es.resolve()}markPotentiallyOrphaned(t,e){return this.Hi.add(e.toString()),Es.resolve()}removeTarget(t,e){this.ji.Pi(e.targetId).forEach((t=>this.Hi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ki(){this.Wi=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Es.forEach(this.Hi,(n=>{const a=Pr.fromPath(n);return this.Ji(t,a).next((t=>{t||e.removeEntry(a,fr.min())}))})).next((()=>(this.Wi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ji(t,e).next((t=>{t?this.Hi.delete(e.toString()):this.Hi.add(e.toString())}))}qi(t){return 0}Ji(t,e){return Es.or([()=>Es.resolve(this.ji.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Qi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.activeTargetIds=Ro()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ml{constructor(){this.$r=new wl,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,e,n){this.Br[t]=e}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new wl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{Lr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){Ua("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){Ua("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.io=e+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,e,n,a,r){const i=this.uo(t,e);Ua("RestConnection","Sending: ",i,n);const o={};return this.ao(o,a,r),this.co(t,i,o,n).then((t=>(Ua("RestConnection","Received: ",t),t)),(e=>{throw qa("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ho(t,e,n,a,r){return this.oo(t,e,n,a,r)}ao(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Na,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}uo(t,e){const n=Cl[t];return`${this.io}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,a){return new Promise(((r,i)=>{const o=new Fa;o.listenOnce(Ta.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case La.NO_ERROR:const e=o.getResponseJson();Ua("Connection","XHR received:",JSON.stringify(e)),r(e);break;case La.TIMEOUT:Ua("Connection",'RPC "'+t+'" timed out'),i(new Za(Ja.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const n=o.getStatus();if(Ua("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ja).indexOf(e)>=0?e:Ja.UNKNOWN}(t.status);i(new Za(e,t.message))}else i(new Za(Ja.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Za(Ja.UNAVAILABLE,"Connection failed."));break;default:Ka()}}finally{Ua("Connection",'RPC "'+t+'" completed.')}}));const s=JSON.stringify(a);o.send(e,"POST",s,n,15)}))}lo(t,e,n){const a=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=ka(),i=Ba(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new _a({})),this.ao(o.initMessageHeaders,e,n),(0,s.uI)()||(0,s.b$)()||(0,s.d)()||(0,s.w1)()||(0,s.Mn)()||(0,s.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=a.join("");Ua("Connection","Creating WebChannel: "+l,o);const c=r.createWebChannel(l,o);let u=!1,h=!1;const d=new Hl({Wr:t=>{h?Ua("Connection","Not sending because WebChannel is closed:",t):(u||(Ua("Connection","Opening WebChannel transport."),c.open(),u=!0),Ua("Connection","WebChannel sending:",t),c.send(t))},zr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,xa.EventType.OPEN,(()=>{h||Ua("Connection","WebChannel transport opened.")})),f(c,xa.EventType.CLOSE,(()=>{h||(h=!0,Ua("Connection","WebChannel transport closed"),d.no())})),f(c,xa.EventType.ERROR,(t=>{h||(h=!0,qa("Connection","WebChannel transport errored:",t),d.no(new Za(Ja.UNAVAILABLE,"The operation could not be completed")))})),f(c,xa.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Ya(!!n);const a=n,r=a.error||(null===(e=a[0])||void 0===e?void 0:e.error);if(r){Ua("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Ao[t];if(void 0!==e)return Ho(e)}(t),n=r.message;void 0===e&&(e=Ja.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,d.no(new Za(e,n)),c.close()}else Ua("Connection","WebChannel received:",n),d.so(n)}})),f(i,Ea.STAT_EVENT,(t=>{t.stat===Pa.PROXY?Ua("Connection","Detected buffering proxy"):t.stat===Pa.NOPROXY&&Ua("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.eo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){return new ts(t,!0)}class kl{constructor(t,e,n=1e3,a=1.5,r=6e4){this.Yn=t,this.timerId=e,this.fo=n,this._o=a,this.wo=r,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const e=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),a=Math.max(0,e-n);a>0&&Ua("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.mo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,a,(()=>(this.po=Date.now(),t()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e,n,a,r,i,o,s){this.Yn=t,this.Ro=n,this.Po=a,this.bo=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new kl(t,e)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,e){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():e&&e.code===Ja.RESOURCE_EXHAUSTED?(Ga(e.toString()),Ga("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):e&&e.code===Ja.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(e)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.qo(t,n)}),(e=>{t((()=>{const t=new Za(Ja.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ko(t)}))}))}qo(t,e){const n=this.Uo(this.Vo);this.stream=this.Go(t,e),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((t=>{n((()=>this.Ko(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(t){return Ua("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Yn.enqueueAndForget((()=>this.Vo===t?e():(Ua("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ll extends Bl{constructor(t,e,n,a,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,a,i),this.M=r}Go(t,e){return this.bo.lo("Listen",t,e)}onMessage(t){this.Do.reset();const e=ps(this.M,t),n=function(t){if(!("targetChange"in t))return fr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?fr.min():e.readTime?rs(e.readTime):fr.min()}(t);return this.listener.Qo(e,n)}jo(t){const e={};e.database=hs(this.M),e.addTarget=function(t,e){let n;const a=e.target;return n=ci(a)?{documents:gs(t,a)}:{query:bs(t,a)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ns(t,e.resumeToken):e.snapshotVersion.compareTo(fr.min())>0&&(n.readTime=es(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=zs(this.M,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=hs(this.M),e.removeTarget=t,this.Fo(e)}}class Tl extends Bl{constructor(t,e,n,a,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,a,i),this.M=r,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,e){return this.bo.lo("Write",t,e)}onMessage(t){if(Ya(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const e=ms(t.writeResults,t.commitTime),n=rs(t.commitTime);return this.listener.Yo(n,e)}return Ya(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=hs(this.M),this.Fo(t)}Jo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>vs(this.M,t)))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends class{}{constructor(t,e,n,a){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=a,this.tu=!1}eu(){if(this.tu)throw new Za(Ja.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,r])=>this.bo.oo(t,e,n,a,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ja.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Za(Ja.UNKNOWN,t.toString())}))}ho(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,r])=>this.bo.ho(t,e,n,a,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ja.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Za(Ja.UNKNOWN,t.toString())}))}terminate(){this.tu=!0}}class Pl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Ga(e),this.iu=!1):Ua("OnlineStateTracker",e)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e,n,a,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=r,this._u.Lr((t=>{n.enqueueAndForget((async()=>{Gl(this)&&(Ua("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Xa(t);e.fu.add(4),await Fl(e),e.wu.set("Unknown"),e.fu.delete(4),await xl(e)}(this))}))})),this.wu=new Pl(n,a)}}async function xl(t){if(Gl(t))for(const e of t.du)await e(!0)}async function Fl(t){for(const e of t.du)await e(!1)}function Dl(t,e){const n=Xa(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Ul(n)?$l(n):cc(n).xo()&&Nl(n,e))}function jl(t,e){const n=Xa(t),a=cc(n);n.lu.delete(e),a.xo()&&Rl(n,e),0===n.lu.size&&(a.xo()?a.Mo():Gl(n)&&n.wu.set("Unknown"))}function Nl(t,e){t.mu.Z(e.targetId),cc(t).jo(e)}function Rl(t,e){t.mu.Z(e),cc(t).Wo(e)}function $l(t){t.mu=new Yo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),cc(t).start(),t.wu.ru()}function Ul(t){return Gl(t)&&!cc(t).Co()&&t.lu.size>0}function Gl(t){return 0===Xa(t).fu.size}function ql(t){t.mu=void 0}async function Wl(t){t.lu.forEach(((e,n)=>{Nl(t,e)}))}async function Kl(t,e){ql(t),Ul(t)?(t.wu.au(e),$l(t)):t.wu.set("Unknown")}async function Yl(t,e,n){if(t.wu.set("Online"),e instanceof Wo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const a of e.targetIds)t.lu.has(a)&&(await t.remoteSyncer.rejectListen(a,n),t.lu.delete(a),t.mu.removeTarget(a))}(t,e)}catch(n){Ua("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Xl(t,n)}else if(e instanceof Go?t.mu.ut(e):e instanceof qo?t.mu._t(e):t.mu.ht(e),!n.isEqual(fr.min()))try{const e=await nl(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.mu.yt(e);return n.targetChanges.forEach(((n,a)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.lu.get(a);r&&t.lu.set(a,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.lu.get(e);if(!n)return;t.lu.set(e,n.withResumeToken(Mr.EMPTY_BYTE_STRING,n.snapshotVersion)),Rl(t,e);const a=new Ds(n.target,e,1,n.sequenceNumber);Nl(t,a)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ua("RemoteStore","Failed to raise snapshot:",e),await Xl(t,e)}}async function Xl(t,e,n){if(!Ps(e))throw e;t.fu.add(1),await Fl(t),t.wu.set("Offline"),n||(n=()=>nl(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ua("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await xl(t)}))}function Jl(t,e){return e().catch((n=>Xl(t,n,e)))}async function Zl(t){const e=Xa(t),n=uc(e);let a=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;Ql(e);)try{const t=await il(e.localStore,a);if(null===t){0===e.hu.length&&n.Mo();break}a=t.batchId,tc(e,t)}catch(t){await Xl(e,t)}ec(e)&&nc(e)}function Ql(t){return Gl(t)&&t.hu.length<10}function tc(t,e){t.hu.push(e);const n=uc(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function ec(t){return Gl(t)&&!uc(t).Co()&&t.hu.length>0}function nc(t){uc(t).start()}async function ac(t){uc(t).Zo()}async function rc(t){const e=uc(t);for(const n of t.hu)e.Jo(n.mutations)}async function ic(t,e,n){const a=t.hu.shift(),r=xs.from(a,e,n);await Jl(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Zl(t)}async function oc(t,e){e&&uc(t).Ho&&await async function(t,e){if(n=e.code,Co(n)&&n!==Ja.ABORTED){const n=t.hu.shift();uc(t).ko(),await Jl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Zl(t)}var n}(t,e),ec(t)&&nc(t)}async function sc(t,e){const n=Xa(t);n.asyncQueue.verifyOperationInProgress(),Ua("RemoteStore","RemoteStore received new credentials");const a=Gl(n);n.fu.add(3),await Fl(n),a&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await xl(n)}async function lc(t,e){const n=Xa(t);e?(n.fu.delete(2),await xl(n)):e||(n.fu.add(2),await Fl(n),n.wu.set("Unknown"))}function cc(t){return t.gu||(t.gu=function(t,e,n){const a=Xa(t);return a.eu(),new Ll(e,a.bo,a.authCredentials,a.appCheckCredentials,a.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Hr:Wl.bind(null,t),Yr:Kl.bind(null,t),Qo:Yl.bind(null,t)}),t.du.push((async e=>{e?(t.gu.ko(),Ul(t)?$l(t):t.wu.set("Unknown")):(await t.gu.stop(),ql(t))}))),t.gu}function uc(t){return t.yu||(t.yu=function(t,e,n){const a=Xa(t);return a.eu(),new Tl(e,a.bo,a.authCredentials,a.appCheckCredentials,a.M,n)}(t.datastore,t.asyncQueue,{Hr:ac.bind(null,t),Yr:oc.bind(null,t),Xo:rc.bind(null,t),Yo:ic.bind(null,t)}),t.du.push((async e=>{e?(t.yu.ko(),await Zl(t)):(await t.yu.stop(),t.hu.length>0&&(Ua("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))}))),t.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hc{constructor(t,e,n,a,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=a,this.removalCallback=r,this.deferred=new Qa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,a,r){const i=Date.now()+n,o=new hc(t,e,i,a,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Za(Ja.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dc(t,e){if(Ga("AsyncQueue",`${e}: ${t}`),Ps(t))return new Za(Ja.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Pr.comparator(e.key,n.key):(t,e)=>Pr.comparator(t.key,e.key),this.keyedMap=_o(),this.sortedSet=new Io(this.comparator)}static emptySet(t){return new fc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,a=n.getNext().key;if(!t.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new fc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.pu=new Io(Pr.comparator)}track(t){const e=t.doc.key,n=this.pu.get(e);n?0!==t.type&&3===n.type?this.pu=this.pu.insert(e,t):3===t.type&&1!==n.type?this.pu=this.pu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pu=this.pu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pu=this.pu.remove(e):1===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):Ka():this.pu=this.pu.insert(e,t)}Iu(){const t=[];return this.pu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class vc{constructor(t,e,n,a,r,i,o,s){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=s}static fromInitialDocuments(t,e,n,a){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new vc(t,e,fc.emptySet(e),r,n,a,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let a=0;a<e.length;a++)if(e[a].type!==n[a].type||!e[a].doc.isEqual(n[a].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.Tu=void 0,this.listeners=[]}}class gc{constructor(){this.queries=new Oo((t=>_i(t)),Pi),this.onlineState="Unknown",this.Eu=new Set}}async function bc(t,e){const n=Xa(t),a=e.query;let r=!1,i=n.queries.get(a);if(i||(r=!0,i=new mc),r)try{i.Tu=await n.onListen(a)}catch(t){const n=dc(t,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(n)}n.queries.set(a,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&Mc(n)}async function yc(t,e){const n=Xa(t),a=e.query;let r=!1;const i=n.queries.get(a);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(a),n.onUnlisten(a)}function zc(t,e){const n=Xa(t);let a=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Ru(r)&&(a=!0);e.Tu=r}}a&&Mc(n)}function wc(t,e,n){const a=Xa(t),r=a.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);a.queries.delete(e)}function Mc(t){t.Eu.forEach((t=>{t.next()}))}class Ac{constructor(t,e,n){this.query=t,this.Pu=e,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new vc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),e=!0):this.Su(t,this.onlineState)&&(this.Du(t),e=!0),this.Vu=t,e}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let e=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),e=!0),e}Su(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Cu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Du(t){t=vc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(t){this.key=t}}class Cc{constructor(t){this.key=t}}class Hc{constructor(t,e){this.query=t,this.$u=e,this.Bu=null,this.current=!1,this.Lu=jo(),this.mutatedKeys=jo(),this.Uu=ji(t),this.qu=new fc(this.Uu)}get Ku(){return this.$u}Gu(t,e){const n=e?e.Qu:new pc,a=e?e.qu:this.qu;let r=e?e.mutatedKeys:this.mutatedKeys,i=a,o=!1;const s=Oi(this.query)&&a.size===this.query.limit?a.last():null,l=Ii(this.query)&&a.size===this.query.limit?a.first():null;if(t.inorderTraversal(((t,e)=>{const c=a.get(t),u=Fi(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.ju(c,u)||(n.track({type:2,doc:u}),f=!0,(s&&this.Uu(u,s)>0||l&&this.Uu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(s||l)&&(o=!0)),f&&(u?(i=i.add(u),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),Oi(this.query)||Ii(this.query))for(;i.size>this.query.limit;){const t=Oi(this.query)?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{qu:i,Qu:n,ni:o,mutatedKeys:r}}ju(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const a=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const r=t.Qu.Iu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ka()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Uu(t.doc,e.doc))),this.Wu(n);const i=e?this.zu():[],o=0===this.Lu.size&&this.current?1:0,s=o!==this.Bu;return this.Bu=o,0!==r.length||s?{snapshot:new vc(this.query,t.qu,a,r,t.mutatedKeys,0===o,s,!1),Hu:i}:{Hu:i}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new pc,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach((t=>this.$u=this.$u.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.$u=this.$u.delete(t))),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=jo(),this.qu.forEach((t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))}));const e=[];return t.forEach((t=>{this.Lu.has(t)||e.push(new Cc(t))})),this.Lu.forEach((n=>{t.has(n)||e.push(new Vc(n))})),e}Yu(t){this.$u=t.li,this.Lu=jo();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Xu(){return vc.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class Oc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ic{constructor(t){this.key=t,this.Zu=!1}}class Sc{constructor(t,e,n,a,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=a,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.ta={},this.ea=new Oo((t=>_i(t)),Pi),this.na=new Map,this.sa=new Set,this.ia=new Io(Pr.comparator),this.ra=new Map,this.oa=new dl,this.ua={},this.aa=new Map,this.ca=qs.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function kc(t,e){const n=Yc(t);let a,r;const i=n.ea.get(e);if(i)a=i.targetId,n.sharedClientState.addLocalQueryTarget(a),r=i.view.Xu();else{const t=await ol(n.localStore,Ti(e));n.isPrimaryClient&&Dl(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);a=t.targetId,r=await Bc(n,e,a,"current"===i)}return r}async function Bc(t,e,n,a){t.la=(e,n,a)=>async function(t,e,n,a){let r=e.view.Gu(n);r.ni&&(r=await ll(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,r))));const i=a&&a.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return $c(t,e.targetId,o.Hu),o.snapshot}(t,e,n,a);const r=await ll(t.localStore,e,!0),i=new Hc(e,r.li),o=i.Gu(r.documents),s=Uo.createSynthesizedTargetChangeForCurrentChange(n,a&&"Offline"!==t.onlineState),l=i.applyChanges(o,t.isPrimaryClient,s);$c(t,n,l.Hu);const c=new Oc(e,n,i);return t.ea.set(e,c),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function Lc(t,e){const n=Xa(t),a=n.ea.get(e),r=n.na.get(a.targetId);if(r.length>1)return n.na.set(a.targetId,r.filter((t=>!Pi(t,e)))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(a.targetId),n.sharedClientState.isActiveQueryTarget(a.targetId)||await sl(n.localStore,a.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(a.targetId),jl(n.remoteStore,a.targetId),Nc(n,a.targetId)})).catch(Ws)):(Nc(n,a.targetId),await sl(n.localStore,a.targetId,!0))}async function Tc(t,e,n){const a=Xc(t);try{const t=await function(t,e){const n=Xa(t),a=dr.now(),r=e.reduce(((t,e)=>t.add(e.key)),jo());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ci.Ks(t,r).next((r=>{i=r;const o=[];for(const t of e){const e=ho(t,i.get(t.key));null!=e&&o.push(new mo(t.key,e,Jr(e.value.mapValue),oo.exists(!0)))}return n.Bs.addMutationBatch(t,a,o,e)})))).then((t=>(t.applyToLocalDocumentSet(i),{batchId:t.batchId,changes:i})))}(a.localStore,e);a.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let a=t.ua[t.currentUser.toKey()];a||(a=new Io(ur)),a=a.insert(e,n),t.ua[t.currentUser.toKey()]=a}(a,t.batchId,n),await qc(a,t.changes),await Zl(a.remoteStore)}catch(t){const e=dc(t,"Failed to persist write");n.reject(e)}}async function Ec(t,e){const n=Xa(t);try{const t=await al(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const a=n.ra.get(e);a&&(Ya(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?a.Zu=!0:t.modifiedDocuments.size>0?Ya(a.Zu):t.removedDocuments.size>0&&(Ya(a.Zu),a.Zu=!1))})),await qc(n,t,e)}catch(t){await Ws(t)}}function Pc(t,e,n){const a=Xa(t);if(a.isPrimaryClient&&0===n||!a.isPrimaryClient&&1===n){const t=[];a.ea.forEach(((n,a)=>{const r=a.view.Au(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Xa(t);n.onlineState=e;let a=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.Au(e)&&(a=!0)})),a&&Mc(n)}(a.eventManager,e),t.length&&a.ta.Qo(t),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function _c(t,e,n){const a=Xa(t);a.sharedClientState.updateQueryState(e,"rejected",n);const r=a.ra.get(e),i=r&&r.key;if(i){let t=new Io(Pr.comparator);t=t.insert(i,Zr.newNoDocument(i,fr.min()));const n=jo().add(i),r=new $o(fr.min(),new Map,new Bo(ur),t,n);await Ec(a,r),a.ia=a.ia.remove(i),a.ra.delete(e),Gc(a)}else await sl(a.localStore,e,!1).then((()=>Nc(a,e,n))).catch(Ws)}async function xc(t,e){const n=Xa(t),a=e.batch.batchId;try{const t=await el(n.localStore,e);jc(n,a,null),Dc(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await qc(n,t)}catch(t){await Ws(t)}}async function Fc(t,e,n){const a=Xa(t);try{const t=await function(t,e){const n=Xa(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let a;return n.Bs.lookupMutationBatch(t,e).next((e=>(Ya(null!==e),a=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,a)))}))}(a.localStore,e);jc(a,e,n),Dc(a,e),a.sharedClientState.updateMutationState(e,"rejected",n),await qc(a,t)}catch(n){await Ws(n)}}function Dc(t,e){(t.aa.get(e)||[]).forEach((t=>{t.resolve()})),t.aa.delete(e)}function jc(t,e,n){const a=Xa(t);let r=a.ua[a.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),a.ua[a.currentUser.toKey()]=r}}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const a of t.na.get(e))t.ea.delete(a),n&&t.ta.fa(a,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach((e=>{t.oa.containsKey(e)||Rc(t,e)}))}function Rc(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);null!==n&&(jl(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),Gc(t))}function $c(t,e,n){for(const a of n)a instanceof Vc?(t.oa.addReference(a.key,e),Uc(t,a)):a instanceof Cc?(Ua("SyncEngine","Document no longer in limbo: "+a.key),t.oa.removeReference(a.key,e),t.oa.containsKey(a.key)||Rc(t,a.key)):Ka()}function Uc(t,e){const n=e.key,a=n.path.canonicalString();t.ia.get(n)||t.sa.has(a)||(Ua("SyncEngine","New document in limbo: "+n),t.sa.add(a),Gc(t))}function Gc(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new Pr(br.fromString(e)),a=t.ca.next();t.ra.set(a,new Ic(n)),t.ia=t.ia.insert(n,a),Dl(t.remoteStore,new Ds(Ti(Hi(n.path)),a,2,sr.A))}}async function qc(t,e,n){const a=Xa(t),r=[],i=[],o=[];a.ea.isEmpty()||(a.ea.forEach(((t,s)=>{o.push(a.la(s,e,n).then((t=>{if(t){a.isPrimaryClient&&a.sharedClientState.updateQueryState(s.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Xs.Ys(s.targetId,t);i.push(e)}})))})),await Promise.all(o),a.ta.Qo(r),await async function(t,e){const n=Xa(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Es.forEach(e,(e=>Es.forEach(e.Hs,(a=>n.persistence.referenceDelegate.addReference(t,e.targetId,a))).next((()=>Es.forEach(e.Js,(a=>n.persistence.referenceDelegate.removeReference(t,e.targetId,a)))))))))}catch(t){if(!Ps(t))throw t;Ua("LocalStore","Failed to update sequence numbers: "+t)}for(const a of e){const t=a.targetId;if(!a.fromCache){const e=n.ii.get(t),a=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(a);n.ii=n.ii.insert(t,r)}}}(a.localStore,i))}async function Wc(t,e){const n=Xa(t);if(!n.currentUser.isEqual(e)){Ua("SyncEngine","User change. New user:",e.toKey());const t=await tl(n.localStore,e);n.currentUser=e,function(t,e){t.aa.forEach((t=>{t.forEach((t=>{t.reject(new Za(Ja.CANCELLED,e))}))})),t.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await qc(n,t.hi)}}function Kc(t,e){const n=Xa(t),a=n.ra.get(e);if(a&&a.Zu)return jo().add(a.key);{let t=jo();const a=n.na.get(e);if(!a)return t;for(const e of a){const a=n.ea.get(e);t=t.unionWith(a.view.Ku)}return t}}function Yc(t){const e=Xa(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ec.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_c.bind(null,e),e.ta.Qo=zc.bind(null,e.eventManager),e.ta.fa=wc.bind(null,e.eventManager),e}function Xc(t){const e=Xa(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fc.bind(null,e),e}class Jc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Sl(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return Qs(this.persistence,new Js,t.initialUser,this.M)}wa(t){return new bl(zl.zi,this.M)}_a(t){return new Ml}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Pc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wc.bind(null,this.syncEngine),await lc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new gc}createDatastore(t){const e=Sl(t.databaseInfo.databaseId),n=(a=t.databaseInfo,new Ol(a));var a;return function(t,e,n,a){return new El(t,e,n,a)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,a=t.asyncQueue,r=t=>Pc(this.syncEngine,t,0),i=Vl.vt()?new Vl:new Al,new _l(e,n,a,r,i);var e,n,a,r,i}createSyncEngine(t,e){return function(t,e,n,a,r,i,o){const s=new Sc(t,e,n,a,r,i);return o&&(s.ha=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Xa(t);Ua("RemoteStore","RemoteStore shutting down."),e.fu.add(5),await Fl(e),e._u.shutdown(),e.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tu{constructor(t,e,n,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=a,this.user=ja.UNAUTHENTICATED,this.clientId=cr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ua("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ua("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Za(Ja.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=dc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function eu(t,e){t.asyncQueue.verifyOperationInProgress(),Ua("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let a=n.initialUser;t.setCredentialChangeListener((async t=>{a.isEqual(t)||(await tl(e.localStore,t),a=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function nu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await au(t);Ua("FirestoreClient","Initializing OnlineComponentProvider");const a=await t.getConfiguration();await e.initialize(n,a),t.setCredentialChangeListener((t=>sc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>sc(e.remoteStore,n))),t.onlineComponents=e}async function au(t){return t.offlineComponents||(Ua("FirestoreClient","Using default OfflineComponentProvider"),await eu(t,new Jc)),t.offlineComponents}async function ru(t){return t.onlineComponents||(Ua("FirestoreClient","Using default OnlineComponentProvider"),await nu(t,new Zc)),t.onlineComponents}function iu(t){return ru(t).then((t=>t.syncEngine))}async function ou(t){const e=await ru(t),n=e.eventManager;return n.onListen=kc.bind(null,e.syncEngine),n.onUnlisten=Lc.bind(null,e.syncEngine),n}const su=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e,n){if(!n)throw new Za(Ja.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cu(t,e,n,a){if(!0===e&&!0===a)throw new Za(Ja.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uu(t){if(!Pr.isDocumentKey(t))throw new Za(Ja.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hu(t){if(Pr.isDocumentKey(t))throw new Za(Ja.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function du(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ka()}function fu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Za(Ja.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=du(t);throw new Za(Ja.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Za(Ja.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Za(Ja.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,cu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pu({}),this._settingsFrozen=!1,t instanceof Br?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Za(Ja.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(t.options.projectId)}(t))}get app(){if(!this._app)throw new Za(Ja.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Za(Ja.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new er;switch(t.type){case"gapi":const e=t.client;return Ya(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new rr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Za(Ja.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=su.get(t);e&&(Ua("ComponentProvider","Removing Datastore"),su.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mu(this.firestore,t,this._key)}}class gu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new gu(this.firestore,t,this._query)}}class bu extends gu{constructor(t,e,n){super(t,e,Hi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mu(this.firestore,null,new Pr(t))}withConverter(t){return new bu(this.firestore,t,this._path)}}function yu(t,e,...n){if(t=(0,s.m9)(t),lu("collection","path",e),t instanceof vu){const a=br.fromString(e,...n);return hu(a),new bu(t,null,a)}{if(!(t instanceof mu||t instanceof bu))throw new Za(Ja.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(br.fromString(e,...n));return hu(a),new bu(t.firestore,null,a)}}function zu(t,e,...n){if(t=(0,s.m9)(t),1===arguments.length&&(e=cr.R()),lu("doc","path",e),t instanceof vu){const a=br.fromString(e,...n);return uu(a),new mu(t,null,new Pr(a))}{if(!(t instanceof mu||t instanceof bu))throw new Za(Ja.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(br.fromString(e,...n));return uu(a),new mu(t.firestore,t instanceof bu?t.converter:null,new Pr(a))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new kl(this,"async_queue_retry"),this.qa=()=>{const t=Il();t&&Ua("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()};const t=Il();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const e=Il();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise((()=>{}));const e=new Qa;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ma.push(t),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(M){if(!Ps(M))throw M;Ua("AsyncQueue","Operation failed with retryable error: "+M)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(t){const e=this.ka.then((()=>(this.Ba=!0,t().catch((t=>{this.$a=t,this.Ba=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Ga("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ba=!1,t))))));return this.ka=e,e}enqueueAfterDelay(t,e,n){this.Ka(),this.Ua.indexOf(t)>-1&&(e=0);const a=hc.createAndSchedule(this,t,e,n,(t=>this.ja(t)));return this.Fa.push(a),a}Ka(){this.$a&&Ka()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const e of this.Fa)if(e.timerId===t)return!0;return!1}Ha(t){return this.Wa().then((()=>{this.Fa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Fa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Wa()}))}Ja(t){this.Ua.push(t)}ja(t){const e=this.Fa.indexOf(t);this.Fa.splice(e,1)}}function Mu(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const a of e)if(a in n&&"function"==typeof n[a])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Au extends vu{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new wu,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Hu(this),this._firestoreClient.terminate()}}function Vu(t=(0,r.Mq)()){return(0,r.qX)(t,"firestore").getImmediate()}function Cu(t){return t._firestoreClient||Hu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Hu(t){var e;const n=t._freezeSettings(),a=function(t,e,n,a){return new kr(t,e,n,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new tu(t._authCredentials,t._appCheckCredentials,t._queue,a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Za(Ja.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Iu(Mr.fromBase64String(t))}catch(t){throw new Za(Ja.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Iu(Mr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Za(Ja.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Za(Ja.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ur(this._lat,t._lat)||ur(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=/^__.*__$/;class Lu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new mo(t,this.data,this.fieldMask,e,this.fieldTransforms):new vo(t,this.data,e,this.fieldTransforms)}}class Tu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new mo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Eu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ka()}}class Pu{constructor(t,e,n,a,r,i){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=a,void 0===r&&this.Ya(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new Pu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),a=this.Za({path:n,ec:!1});return a.nc(t),a}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),a=this.Za({path:n,ec:!1});return a.Ya(),a}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return Zu(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(Eu(this.Xa)&&Bu.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class _u{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Sl(t)}ac(t,e,n,a=!1){return new Pu({Xa:t,methodName:e,uc:n,path:zr.emptyPath(),ec:!1,oc:a},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function xu(t){const e=t._freezeSettings(),n=Sl(t._databaseId);return new _u(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fu(t,e,n,a,r,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,r);Ku("Data must be an object, but it was:",o,a);const s=qu(a,o);let l,c;if(i.merge)l=new wr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const a of i.mergeFields){const r=Yu(e,a,n);if(!o.contains(r))throw new Za(Ja.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Qu(t,r)||t.push(r)}l=new wr(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new Lu(new Xr(s),l,c)}class Du extends Su{_toFieldTransform(t){if(2!==t.Xa)throw 1===t.Xa?t.rc(`${this._methodName}() can only appear at the top level of your update data`):t.rc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Du}}function ju(t,e,n){return new Pu({Xa:3,uc:e.settings.uc,methodName:t._methodName,ec:n},e.databaseId,e.M,e.ignoreUndefinedProperties)}class Nu extends Su{constructor(t,e){super(t),this.cc=e}_toFieldTransform(t){const e=ju(this,t,!0),n=this.cc.map((t=>Gu(t,e))),a=new Xi(n);return new ao(t.path,a)}isEqual(t){return this===t}}class Ru extends Su{constructor(t,e){super(t),this.cc=e}_toFieldTransform(t){const e=ju(this,t,!0),n=this.cc.map((t=>Gu(t,e))),a=new Zi(n);return new ao(t.path,a)}isEqual(t){return this===t}}function $u(t,e,n,a){const r=t.ac(1,e,n);Ku("Data must be an object, but it was:",r,a);const i=[],o=Xr.empty();vr(a,((t,a)=>{const l=Ju(e,t,n);a=(0,s.m9)(a);const c=r.sc(l);if(a instanceof Du)i.push(l);else{const t=Gu(a,c);null!=t&&(i.push(l),o.set(l,t))}}));const l=new wr(i);return new Tu(o,l,r.fieldTransforms)}function Uu(t,e,n,a,r,i){const o=t.ac(1,e,n),l=[Yu(e,a,n)],c=[r];if(i.length%2!=0)throw new Za(Ja.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<i.length;s+=2)l.push(Yu(e,i[s])),c.push(i[s+1]);const u=[],h=Xr.empty();for(let f=l.length-1;f>=0;--f)if(!Qu(u,l[f])){const t=l[f];let e=c[f];e=(0,s.m9)(e);const n=o.sc(t);if(e instanceof Du)u.push(t);else{const a=Gu(e,n);null!=a&&(u.push(t),h.set(t,a))}}const d=new wr(u);return new Tu(h,d,o.fieldTransforms)}function Gu(t,e){if(Wu(t=(0,s.m9)(t)))return Ku("Unsupported field value:",e,t),qu(t,e);if(t instanceof Su)return function(t,e){if(!Eu(e.Xa))throw e.rc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.rc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&4!==e.Xa)throw e.rc("Nested arrays are not supported");return function(t,e){const n=[];let a=0;for(const r of t){let t=Gu(r,e.ic(a));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),a++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,s.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ui(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=dr.fromDate(t);return{timestampValue:es(e.M,n)}}if(t instanceof dr){const n=new dr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:es(e.M,n)}}if(t instanceof ku)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Iu)return{bytesValue:ns(e.M,t._byteString)};if(t instanceof mu){const n=e.databaseId,a=t.firestore._databaseId;if(!a.isEqual(n))throw e.rc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:is(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.rc(`Unsupported field value: ${du(t)}`)}(t,e)}function qu(t,e){const n={};return mr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,((t,a)=>{const r=Gu(a,e.tc(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Wu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof dr||t instanceof ku||t instanceof Iu||t instanceof mu||t instanceof Su)}function Ku(t,e,n){if(!Wu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const a=du(n);throw"an object"===a?e.rc(t+" a custom object"):e.rc(t+" "+a)}}function Yu(t,e,n){if((e=(0,s.m9)(e))instanceof Ou)return e._internalPath;if("string"==typeof e)return Ju(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Xu=new RegExp("[~\\*/\\[\\]]");function Ju(t,e,n){if(e.search(Xu)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch(a){throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,a,r){const i=a&&!a.isEmpty(),o=void 0!==r;let s=`Function ${e}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${a}`),o&&(l+=` in document ${r}`),l+=")"),new Za(Ja.INVALID_ARGUMENT,s+t+l)}function Qu(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,n,a,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=a,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new mu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new eh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(nh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class eh extends th{data(){return super.data()}}function nh(t,e){return"string"==typeof e?Ju(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class rh extends th{constructor(t,e,n,a,r,i){super(t,e,n,a,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(nh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ih extends rh{data(t={}){return super.data(t)}}class oh{constructor(t,e,n,a){this._firestore=t,this._userDataWriter=e,this._snapshot=a,this.metadata=new ah(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ih(this._firestore,this._userDataWriter,n.key,n,new ah(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Za(Ja.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new ih(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ah(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const a=new ih(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ah(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:sh(e.type),doc:a,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function sh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ka()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lh(t){if(Ii(t)&&0===t.explicitOrderBy.length)throw new Za(Ja.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function ch(t,...e){for(const n of e)t=n._apply(t);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{convertValue(t,e="none"){switch(_r(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Cr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Hr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ka()}}convertObject(t,e){const n={};return vr(t.fields,((t,a)=>{n[t]=this.convertValue(a,e)})),n}convertGeoPoint(t){return new ku(Cr(t.latitude),Cr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ir(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Sr(t));default:return null}}convertTimestamp(t){const e=Vr(t);return new dr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=br.fromString(t);Ya(Ss(n));const a=new Br(n.get(1),n.get(3)),r=new Pr(n.popFirst(5));return a.isEqual(e)||Ga(`Document ${r} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t,e,n){let a;return a=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,a}class dh extends uh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Iu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new mu(this.firestore,null,e)}}function fh(t,e,n,...a){t=fu(t,mu);const r=fu(t.firestore,Au),i=xu(r);let o;return o="string"==typeof(e=(0,s.m9)(e))||e instanceof Ou?Uu(i,"updateDoc",t._key,e,n,a):$u(i,"updateDoc",t._key,e),gh(r,[o.toMutation(t._key,oo.exists(!0))])}function ph(t){return gh(fu(t.firestore,Au),[new zo(t._key,oo.none())])}function vh(t,e){const n=fu(t.firestore,Au),a=zu(t),r=hh(t.converter,e);return gh(n,[Fu(xu(t.firestore),"addDoc",a._key,r,null!==t.converter,{}).toMutation(a._key,oo.exists(!1))]).then((()=>a))}function mh(t,...e){var n,a,r;t=(0,s.m9)(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Mu(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges};if(Mu(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(a=t.error)||void 0===a?void 0:a.bind(t),e[o+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let c,u,h;if(t instanceof mu)u=fu(t.firestore,Au),h=Hi(t._key.path),c={next:n=>{e[o]&&e[o](bh(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=fu(t,gu);u=fu(n.firestore,Au),h=n._query;const a=new dh(u);c={next:t=>{e[o]&&e[o](new oh(u,a,n,t))},error:e[o+1],complete:e[o+2]},lh(t._query)}return function(t,e,n,a){const r=new Qc(a),i=new Ac(e,r,n);return t.asyncQueue.enqueueAndForget((async()=>bc(await ou(t),i))),()=>{r.Ia(),t.asyncQueue.enqueueAndForget((async()=>yc(await ou(t),i)))}}(Cu(u),h,l,c)}function gh(t,e){return function(t,e){const n=new Qa;return t.asyncQueue.enqueueAndForget((async()=>Tc(await iu(t),e,n))),n.promise}(Cu(t),e)}function bh(t,e,n){const a=n.docs.get(e._key),r=new dh(t);return new rh(t,r,e._key,a,new ah(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(...t){return new Nu("arrayUnion",t)}function zh(...t){return new Ru("arrayRemove",t)}!function(t,e=!0){!function(t){Na=t}(r.Jn),(0,r.Xd)(new i.wA("firestore",((t,{options:n})=>{const a=t.getProvider("app").getImmediate(),r=new Au(a,new nr(t.getProvider("auth-internal")),new or(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),(0,r.KN)(Da,"3.4.8",t),(0,r.KN)(Da,"3.4.8","esm2017")}()},1496:function(t,e,n){"use strict";function a(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}
/*! 
 * portal-vue © Thorsten Lünborg, 2019 
 * 
 * Version: 2.1.7
 * 
 * LICENCE: MIT 
 * 
 * https://github.com/linusborg/portal-vue
 * 
*/
n(1703);var r=a(n(8935));function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t){return s(t)||l(t)||c()}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var u="undefined"!==typeof window;function h(t){return Array.isArray(t)||"object"===i(t)?Object.freeze(t):t}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce((function(t,n){var a=n.passengers[0],r="function"===typeof a?a(e):n.passengers;return t.concat(r)}),[])}function f(t,e){return t.map((function(t,e){return[e,t]})).sort((function(t,n){return e(t[1],n[1])||t[0]-n[0]})).map((function(t){return t[1]}))}function p(t,e){return e.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}var v={},m={},g={},b=r.extend({data:function(){return{transports:v,targets:m,sources:g,trackInstances:u}},methods:{open:function(t){if(u){var e=t.to,n=t.from,a=t.passengers,i=t.order,o=void 0===i?1/0:i;if(e&&n&&a){var s={to:e,from:n,passengers:h(a),order:o},l=Object.keys(this.transports);-1===l.indexOf(e)&&r.set(this.transports,e,[]);var c=this.$_getTransportIndex(s),d=this.transports[e].slice(0);-1===c?d.push(s):d[c]=s,this.transports[e]=f(d,(function(t,e){return t.order-e.order}))}}},close:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.to,a=t.from;if(n&&(a||!1!==e)&&this.transports[n])if(e)this.transports[n]=[];else{var r=this.$_getTransportIndex(t);if(r>=0){var i=this.transports[n].slice(0);i.splice(r,1),this.transports[n]=i}}},registerTarget:function(t,e,n){u&&(this.trackInstances&&!n&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([e])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,e,n){u&&(this.trackInstances&&!n&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([e])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!(!this.targets[t]||!this.targets[t][0])},hasSource:function(t){return!(!this.sources[t]||!this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var e=t.to,n=t.from;for(var a in this.transports[e])if(this.transports[e][a].from===n)return+a;return-1}}}),y=new b(v),z=1,w=r.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(z++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},created:function(){var t=this;this.$nextTick((function(){y.registerSource(t.name,t)}))},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){y.unregisterSource(this.name),this.clear()},watch:{to:function(t,e){e&&e!==t&&this.clear(e),this.sendUpdate()}},methods:{clear:function(t){var e={from:this.name,to:t||this.to};y.close(e)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return"function"===typeof t?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var e={from:this.name,to:this.to,passengers:o(t),order:this.order};y.open(e)}else this.clear()}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],n=this.tag;return e&&this.disabled?e.length<=1&&this.slim?this.normalizeOwnChildren(e)[0]:t(n,[this.normalizeOwnChildren(e)]):this.slim?t():t(n,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),M=r.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:y.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick((function(){y.registerTarget(t.name,t)}))},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,e){y.unregisterTarget(e),y.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick((function(){t.firstRender=!1}))},beforeDestroy:function(){y.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return d(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0!==this.passengers.length?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var e=this.noWrapper(),n=this.children(),a=this.transition||this.tag;return e?n[0]:this.slim&&!a?t():t(a,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},n)}}),A=0,V=["disabled","name","order","slim","slotProps","tag","to"],C=["multiple","transition"],H=r.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(A++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if("undefined"!==typeof document){var t=document.querySelector(this.mountTo);if(t){var e=this.$props;if(y.targets[e.name])e.bail?console.warn("[portal-vue]: Target ".concat(e.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=y.targets[e.name];else{var n=e.append;if(n){var a="string"===typeof n?n:"DIV",r=document.createElement(a);t.appendChild(r),t=r}var i=p(this.$props,C);i.slim=this.targetSlim,i.tag=this.targetTag,i.slotProps=this.targetSlotProps,i.name=this.to,this.portalTarget=new M({el:t,parent:this.$parent||this,propsData:i})}}else console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"))}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var e=t.$el;e.parentNode.removeChild(e)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var e=p(this.$props,V);return t(w,{props:e,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var n=this.$scopedSlots.manual({to:this.to});return Array.isArray(n)&&(n=n[0]),n||t()}});function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.portalName||"Portal",w),t.component(e.portalTargetName||"PortalTarget",M),t.component(e.MountingPortalName||"MountingPortal",H)}var I={install:O};e.h_=w,e.YC=M,e.Df=y},6790:function(t,e,n){"use strict";n.d(e,{b:function(){return s}});var a=function(){return(a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function i(t,e){return e?e.toUpperCase():""}function o(t){for(var e,n={},a=0,o=t.split(r.styleList);a<o.length;a++){var s=o[a].split(r.styleProp),l=s[0],c=s[1];(l=l.trim())&&("string"==typeof c&&(c=c.trim()),n[(e=l,e.replace(r.kebab,i))]=c)}return n}function s(){for(var t,e,n={},r=arguments.length;r--;)for(var i=0,s=Object.keys(arguments[r]);i<s.length;i++)switch(t=s[i]){case"class":case"style":case"directives":if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var l=void 0;l=Array.isArray(arguments[r].style)?arguments[r].style:[arguments[r].style];for(var c=0;c<l.length;c++){var u=l[c];"string"==typeof u&&(l[c]=o(u))}arguments[r].style=l}n[t]=n[t].concat(arguments[r][t]);break;case"staticClass":if(!arguments[r][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":n[t]||(n[t]={});for(var h=0,d=Object.keys(arguments[r][t]||{});h<d.length;h++)e=d[h],n[t][e]?n[t][e]=[].concat(n[t][e],arguments[r][t][e]):n[t][e]=arguments[r][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[t]||(n[t]={}),n[t]=a({},arguments[r][t],n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[r][t])}return n}},2809:function(t,e,n){"use strict";n(1703);function a(t,e){for(var n in e)t[n]=e[n];return t}var r=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,s=function(t){return encodeURIComponent(t).replace(r,i).replace(o,",")};function l(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var a,r=n||h;try{a=r(t||"")}catch(s){a={}}for(var i in e){var o=e[i];a[i]=Array.isArray(o)?o.map(u):u(o)}return a}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),a=l(n.shift()),r=n.length>0?l(n.join("=")):null;void 0===e[a]?e[a]=r:Array.isArray(e[a])?e[a].push(r):e[a]=[e[a],r]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return s(e);if(Array.isArray(n)){var a=[];return n.forEach((function(t){void 0!==t&&(null===t?a.push(s(e)):a.push(s(e)+"="+s(t)))})),a.join("&")}return s(e)+"="+s(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function p(t,e,n,a){var r=a&&a.options.stringifyQuery,i=e.query||{};try{i=v(i)}catch(s){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:b(e,r),matched:t?g(t):[]};return n&&(o.redirectedFrom=b(n,r)),Object.freeze(o)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=v(t[n]);return e}return t}var m=p(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function b(t,e){var n=t.path,a=t.query;void 0===a&&(a={});var r=t.hash;void 0===r&&(r="");var i=e||d;return(n||"/")+i(a)+r}function y(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&z(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&z(t.query,e.query)&&z(t.params,e.params))))}function z(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),a=Object.keys(e).sort();return n.length===a.length&&n.every((function(n,r){var i=t[n],o=a[r];if(o!==n)return!1;var s=e[n];return null==i||null==s?i===s:"object"===typeof i&&"object"===typeof s?z(i,s):String(i)===String(s)}))}function w(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&M(t.query,e.query)}function M(t,e){for(var n in e)if(!(n in t))return!1;return!0}function A(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var a in n.instances){var r=n.instances[a],i=n.enteredCbs[a];if(r&&i){delete n.enteredCbs[a];for(var o=0;o<i.length;o++)r._isBeingDestroyed||i[o](r)}}}}var V={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,i=e.parent,o=e.data;o.routerView=!0;var s=i.$createElement,l=n.name,c=i.$route,u=i._routerViewCache||(i._routerViewCache={}),h=0,d=!1;while(i&&i._routerRoot!==i){var f=i.$vnode?i.$vnode.data:{};f.routerView&&h++,f.keepAlive&&i._directInactive&&i._inactive&&(d=!0),i=i.$parent}if(o.routerViewDepth=h,d){var p=u[l],v=p&&p.component;return v?(p.configProps&&C(v,o,p.route,p.configProps),s(v,o,r)):s()}var m=c.matched[h],g=m&&m.components[l];if(!m||!g)return u[l]=null,s();u[l]={component:g},o.registerRouteInstance=function(t,e){var n=m.instances[l];(e&&n!==t||!e&&n===t)&&(m.instances[l]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){m.instances[l]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[l]&&(m.instances[l]=t.componentInstance),A(c)};var b=m.props&&m.props[l];return b&&(a(u[l],{route:c,configProps:b}),C(g,o,c,b)),s(g,o,r)}};function C(t,e,n,r){var i=e.props=H(n,r);if(i){i=e.props=a({},i);var o=e.attrs=e.attrs||{};for(var s in i)t.props&&s in t.props||(o[s]=i[s],delete i[s])}}function H(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function O(t,e,n){var a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var i=t.replace(/^\//,"").split("/"),o=0;o<i.length;o++){var s=i[o];".."===s?r.pop():"."!==s&&r.push(s)}return""!==r[0]&&r.unshift(""),r.join("/")}function I(t){var e="",n="",a=t.indexOf("#");a>=0&&(e=t.slice(a),t=t.slice(0,a));var r=t.indexOf("?");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{path:t,query:n,hash:e}}function S(t){return t.replace(/\/+/g,"/")}var k=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},B=X,L=x,T=F,E=N,P=Y,_=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function x(t,e){var n,a=[],r=0,i=0,o="",s=e&&e.delimiter||"/";while(null!=(n=_.exec(t))){var l=n[0],c=n[1],u=n.index;if(o+=t.slice(i,u),i=u+l.length,c)o+=c[1];else{var h=t[i],d=n[2],f=n[3],p=n[4],v=n[5],m=n[6],g=n[7];o&&(a.push(o),o="");var b=null!=d&&null!=h&&h!==d,y="+"===m||"*"===m,z="?"===m||"*"===m,w=n[2]||s,M=p||v;a.push({name:f||r++,prefix:d||"",delimiter:w,optional:z,repeat:y,partial:b,asterisk:!!g,pattern:M?$(M):g?".*":"[^"+R(w)+"]+?"})}}return i<t.length&&(o+=t.substr(i)),o&&a.push(o),a}function F(t,e){return N(x(t,e),e)}function D(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function j(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function N(t,e){for(var n=new Array(t.length),a=0;a<t.length;a++)"object"===typeof t[a]&&(n[a]=new RegExp("^(?:"+t[a].pattern+")$",G(e)));return function(e,a){for(var r="",i=e||{},o=a||{},s=o.pretty?D:encodeURIComponent,l=0;l<t.length;l++){var c=t[l];if("string"!==typeof c){var u,h=i[c.name];if(null==h){if(c.optional){c.partial&&(r+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(k(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=s(h[d]),!n[l].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===d?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?j(h):s(h),!n[l].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');r+=c.prefix+u}}else r+=c}return r}}function R(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function $(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){return t.keys=e,t}function G(t){return t&&t.sensitive?"":"i"}function q(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var a=0;a<n.length;a++)e.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return U(t,e)}function W(t,e,n){for(var a=[],r=0;r<t.length;r++)a.push(X(t[r],e,n).source);var i=new RegExp("(?:"+a.join("|")+")",G(n));return U(i,e)}function K(t,e,n){return Y(x(t,n),e,n)}function Y(t,e,n){k(e)||(n=e||n,e=[]),n=n||{};for(var a=n.strict,r=!1!==n.end,i="",o=0;o<t.length;o++){var s=t[o];if("string"===typeof s)i+=R(s);else{var l=R(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+l+c+")*"),c=s.optional?s.partial?l+"("+c+")?":"(?:"+l+"("+c+"))?":l+"("+c+")",i+=c}}var u=R(n.delimiter||"/"),h=i.slice(-u.length)===u;return a||(i=(h?i.slice(0,-u.length):i)+"(?:"+u+"(?=$))?"),i+=r?"$":a&&h?"":"(?="+u+"|$)",U(new RegExp("^"+i,G(n)),e)}function X(t,e,n){return k(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?q(t,e):k(t)?W(t,e,n):K(t,e,n)}B.parse=L,B.compile=T,B.tokensToFunction=E,B.tokensToRegExp=P;var J=Object.create(null);function Z(t,e,n){e=e||{};try{var a=J[t]||(J[t]=B.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),a(e,{pretty:!0})}catch(r){return""}finally{delete e[0]}}function Q(t,e,n,r){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=a({},t);var o=i.params;return o&&"object"===typeof o&&(i.params=a({},o)),i}if(!i.path&&i.params&&e){i=a({},i),i._normalized=!0;var s=a(a({},e.params),i.params);if(e.name)i.name=e.name,i.params=s;else if(e.matched.length){var l=e.matched[e.matched.length-1].path;i.path=Z(l,s,"path "+e.path)}else 0;return i}var u=I(i.path||""),h=e&&e.path||"/",d=u.path?O(u.path,h,n||i.append):h,f=c(u.query,i.query,r&&r.options.parseQuery),p=i.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var tt,et=[String,Object],nt=[String,Array],at=function(){},rt={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),o=i.location,s=i.route,l=i.href,c={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,f=null==h?"router-link-exact-active":h,v=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,g=s.redirectedFrom?p(null,Q(s.redirectedFrom),null,n):s;c[m]=y(r,g,this.exactPath),c[v]=this.exact||this.exactPath?c[m]:w(r,g);var b=c[m]?this.ariaCurrentValue:null,z=function(t){it(t)&&(e.replace?n.replace(o,at):n.push(o,at))},M={click:it};Array.isArray(this.event)?this.event.forEach((function(t){M[t]=z})):M[this.event]=z;var A={class:c},V=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:l,route:s,navigate:z,isActive:c[v],isExactActive:c[m]});if(V){if(1===V.length)return V[0];if(V.length>1||!V.length)return 0===V.length?t():t("span",{},V)}if("a"===this.tag)A.on=M,A.attrs={href:l,"aria-current":b};else{var C=ot(this.$slots.default);if(C){C.isStatic=!1;var H=C.data=a({},C.data);for(var O in H.on=H.on||{},H.on){var I=H.on[O];O in M&&(H.on[O]=Array.isArray(I)?I:[I])}for(var S in M)S in H.on?H.on[S].push(M[S]):H.on[S]=z;var k=C.data.attrs=a({},C.data.attrs);k.href=l,k["aria-current"]=b}else A.on=M}return t(this.tag,A,this.$slots.default)}};function it(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function st(t){if(!st.installed||tt!==t){st.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var a=t.$options._parentVnode;e(a)&&e(a=a.data)&&e(a=a.registerRouteInstance)&&a(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",V),t.component("RouterLink",rt);var a=t.config.optionMergeStrategies;a.beforeRouteEnter=a.beforeRouteLeave=a.beforeRouteUpdate=a.created}}var lt="undefined"!==typeof window;function ct(t,e,n,a,r){var i=e||[],o=n||Object.create(null),s=a||Object.create(null);t.forEach((function(t){ut(i,o,s,t,r)}));for(var l=0,c=i.length;l<c;l++)"*"===i[l]&&(i.push(i.splice(l,1)[0]),c--,l--);return{pathList:i,pathMap:o,nameMap:s}}function ut(t,e,n,a,r,i){var o=a.path,s=a.name;var l=a.pathToRegexpOptions||{},c=dt(o,r,l.strict);"boolean"===typeof a.caseSensitive&&(l.sensitive=a.caseSensitive);var u={path:c,regex:ht(c,l),components:a.components||{default:a.component},alias:a.alias?"string"===typeof a.alias?[a.alias]:a.alias:[],instances:{},enteredCbs:{},name:s,parent:r,matchAs:i,redirect:a.redirect,beforeEnter:a.beforeEnter,meta:a.meta||{},props:null==a.props?{}:a.components?a.props:{default:a.props}};if(a.children&&a.children.forEach((function(a){var r=i?S(i+"/"+a.path):void 0;ut(t,e,n,a,u,r)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==a.alias)for(var h=Array.isArray(a.alias)?a.alias:[a.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:a.children};ut(t,e,n,p,r,u.path||"/")}s&&(n[s]||(n[s]=u))}function ht(t,e){var n=B(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:S(e.path+"/"+t)}function ft(t,e){var n=ct(t),a=n.pathList,r=n.pathMap,i=n.nameMap;function o(t){ct(t,a,r,i)}function s(t,e){var n="object"!==typeof t?i[t]:void 0;ct([e||t],a,r,i,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),a,r,i,n)}function l(){return a.map((function(t){return r[t]}))}function c(t,n,o){var s=Q(t,n,!1,e),l=s.name;if(l){var c=i[l];if(!c)return d(null,s);var u=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof s.params&&(s.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in s.params)&&u.indexOf(h)>-1&&(s.params[h]=n.params[h]);return s.path=Z(c.path,s.params,'named route "'+l+'"'),d(c,s,o)}if(s.path){s.params={};for(var f=0;f<a.length;f++){var p=a[f],v=r[p];if(pt(v.regex,s.path,s.params))return d(v,s,o)}}return d(null,s)}function u(t,n){var a=t.redirect,r="function"===typeof a?a(p(t,n,null,e)):a;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,s=o.name,l=o.path,u=n.query,h=n.hash,f=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,s){i[s];return c({_normalized:!0,name:s,query:u,hash:h,params:f},void 0,n)}if(l){var v=vt(l,t),m=Z(v,f,'redirect route with path "'+v+'"');return c({_normalized:!0,path:m,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var a=Z(n,e.params,'aliased route with path "'+n+'"'),r=c({_normalized:!0,path:a});if(r){var i=r.matched,o=i[i.length-1];return e.params=r.params,d(o,e)}return d(null,e)}function d(t,n,a){return t&&t.redirect?u(t,a||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,a,e)}return{match:c,addRoute:s,getRoutes:l,addRoutes:o}}function pt(t,e,n){var a=e.match(t);if(!a)return!1;if(!n)return!0;for(var r=1,i=a.length;r<i;++r){var o=t.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof a[r]?l(a[r]):a[r])}return!0}function vt(t,e){return O(t,e.parent?e.parent.path:"/",!0)}var mt=lt&&window.performance&&window.performance.now?window.performance:Date;function gt(){return mt.now().toFixed(3)}var bt=gt();function yt(){return bt}function zt(t){return bt=t}var wt=Object.create(null);function Mt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=a({},window.history.state);return n.key=yt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",Ct),function(){window.removeEventListener("popstate",Ct)}}function At(t,e,n,a){if(t.app){var r=t.options.scrollBehavior;r&&t.app.$nextTick((function(){var i=Ht(),o=r.call(t,e,n,a?i:null);o&&("function"===typeof o.then?o.then((function(t){Tt(t,i)})).catch((function(t){0})):Tt(o,i))}))}}function Vt(){var t=yt();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ct(t){Vt(),t.state&&t.state.key&&zt(t.state.key)}function Ht(){var t=yt();if(t)return wt[t]}function Ot(t,e){var n=document.documentElement,a=n.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-a.left-e.x,y:r.top-a.top-e.y}}function It(t){return Bt(t.x)||Bt(t.y)}function St(t){return{x:Bt(t.x)?t.x:window.pageXOffset,y:Bt(t.y)?t.y:window.pageYOffset}}function kt(t){return{x:Bt(t.x)?t.x:0,y:Bt(t.y)?t.y:0}}function Bt(t){return"number"===typeof t}var Lt=/^#\d/;function Tt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var a=Lt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(a){var r=t.offset&&"object"===typeof t.offset?t.offset:{};r=kt(r),e=Ot(a,r)}else It(t)&&(e=St(t))}else n&&It(t)&&(e=St(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Et=lt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Pt(t,e){Vt();var n=window.history;try{if(e){var r=a({},n.state);r.key=yt(),n.replaceState(r,"",t)}else n.pushState({key:zt(gt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function _t(t){Pt(t,!0)}function xt(t,e,n){var a=function(r){r>=t.length?n():t[r]?e(t[r],(function(){a(r+1)})):a(r+1)};a(0)}var Ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function Dt(t,e){return $t(t,e,Ft.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Gt(e)+'" via a navigation guard.')}function jt(t,e){var n=$t(t,e,Ft.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Nt(t,e){return $t(t,e,Ft.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Rt(t,e){return $t(t,e,Ft.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function $t(t,e,n,a){var r=new Error(a);return r._isRouter=!0,r.from=t,r.to=e,r.type=n,r}var Ut=["params","query","hash"];function Gt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ut.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function qt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return qt(t)&&t._isRouter&&(null==e||t.type===e)}function Kt(t){return function(e,n,a){var r=!1,i=0,o=null;Yt(t,(function(t,e,n,s){if("function"===typeof t&&void 0===t.cid){r=!0,i++;var l,c=Qt((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[s]=e,i--,i<=0&&a()})),u=Qt((function(t){var e="Failed to resolve async component "+s+": "+t;o||(o=qt(t)?t:new Error(e),a(o))}));try{l=t(c,u)}catch(d){u(d)}if(l)if("function"===typeof l.then)l.then(c,u);else{var h=l.component;h&&"function"===typeof h.then&&h.then(c,u)}}})),r||a()}}function Yt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function Qt(t){var e=!1;return function(){var n=[],a=arguments.length;while(a--)n[a]=arguments[a];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(lt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,a=Math.max(t.length,e.length);for(n=0;n<a;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ae(t,e,n,a){var r=Yt(t,(function(t,a,r,i){var o=re(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,a,r,i)})):n(o,a,r,i)}));return Xt(a?r.reverse():r)}function re(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function ie(t){return ae(t,"beforeRouteLeave",se,!0)}function oe(t){return ae(t,"beforeRouteUpdate",se)}function se(t,e){if(e)return function(){return t.apply(e,arguments)}}function le(t){return ae(t,"beforeRouteEnter",(function(t,e,n,a){return ce(t,n,a)}))}function ce(t,e,n){return function(a,r,i){return t(a,r,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),i(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var a,r=this;try{a=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var i=this.current;this.confirmTransition(a,(function(){r.updateRoute(a),e&&e(a),r.ensureURL(),r.router.afterHooks.forEach((function(t){t&&t(a,i)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(a)})))}),(function(t){n&&n(t),t&&!r.ready&&(Wt(t,Ft.redirected)&&i===m||(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var a=this,r=this.current;this.pending=t;var i=function(t){!Wt(t)&&qt(t)&&(a.errorCbs.length?a.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,s=r.matched.length-1;if(y(t,r)&&o===s&&t.matched[o]===r.matched[s])return this.ensureURL(),t.hash&&At(this.router,r,t,!1),i(jt(r,t));var l=ne(this.current.matched,t.matched),c=l.updated,u=l.deactivated,h=l.activated,d=[].concat(ie(u),this.router.beforeHooks,oe(c),h.map((function(t){return t.beforeEnter})),Kt(h)),f=function(e,n){if(a.pending!==t)return i(Nt(r,t));try{e(t,r,(function(e){!1===e?(a.ensureURL(!0),i(Rt(r,t))):qt(e)?(a.ensureURL(!0),i(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(i(Dt(r,t)),"object"===typeof e&&e.replace?a.replace(e):a.push(e)):n(e)}))}catch(o){i(o)}};xt(d,f,(function(){var n=le(h),o=n.concat(a.router.resolveHooks);xt(o,f,(function(){if(a.pending!==t)return i(Nt(r,t));a.pending=null,e(t),a.router.app&&a.router.app.$nextTick((function(){A(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,a=Et&&n;a&&this.listeners.push(Mt());var r=function(){var n=t.current,r=he(t.base);t.current===m&&r===t._startLocation||t.transitionTo(r,(function(t){a&&At(e,t,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var a=this,r=this,i=r.current;this.transitionTo(t,(function(t){Pt(S(a.base+t.fullPath)),At(a.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var a=this,r=this,i=r.current;this.transitionTo(t,(function(t){_t(S(a.base+t.fullPath)),At(a.router,t,i,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=S(this.base+this.current.fullPath);t?Pt(e):_t(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),a=t.toLowerCase();return!t||n!==a&&0!==n.indexOf(S(a+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,a){t.call(this,e,n),a&&fe(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,a=Et&&n;a&&this.listeners.push(Mt());var r=function(){var e=t.current;pe()&&t.transitionTo(ve(),(function(n){a&&At(t.router,n,e,!0),Et||be(n.fullPath)}))},i=Et?"popstate":"hashchange";window.addEventListener(i,r),this.listeners.push((function(){window.removeEventListener(i,r)}))}},e.prototype.push=function(t,e,n){var a=this,r=this,i=r.current;this.transitionTo(t,(function(t){ge(t.fullPath),At(a.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var a=this,r=this,i=r.current;this.transitionTo(t,(function(t){be(t.fullPath),At(a.router,t,i,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ve()!==e&&(t?ge(e):be(e))},e.prototype.getCurrentLocation=function(){return ve()},e}(te);function fe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(S(t+"/#"+e)),!0}function pe(){var t=ve();return"/"===t.charAt(0)||(be("/"+t),!1)}function ve(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),a=n>=0?e.slice(0,n):e;return a+"#"+t}function ge(t){Et?Pt(me(t)):window.location.hash=t}function be(t){Et?_t(me(t)):window.location.replace(me(t))}var ye=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var a=this;this.transitionTo(t,(function(t){a.stack=a.stack.slice(0,a.index+1).concat(t),a.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var a=this;this.transitionTo(t,(function(t){a.stack=a.stack.slice(0,a.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var a=this.stack[n];this.confirmTransition(a,(function(){var t=e.current;e.index=n,e.updateRoute(a),e.router.afterHooks.forEach((function(e){e&&e(a,t)}))}),(function(t){Wt(t,Ft.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),ze=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Et&&!1!==t.fallback,this.fallback&&(e="hash"),lt||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new ye(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};function Me(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ae(t,e,n){var a="hash"===n?"#"+e:e;return t?S(t+"/"+a):a}ze.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},ze.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof de){var a=function(t){var a=n.current,r=e.options.scrollBehavior,i=Et&&r;i&&"fullPath"in t&&At(e,t,a,!1)},r=function(t){n.setupListeners(),a(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},ze.prototype.beforeEach=function(t){return Me(this.beforeHooks,t)},ze.prototype.beforeResolve=function(t){return Me(this.resolveHooks,t)},ze.prototype.afterEach=function(t){return Me(this.afterHooks,t)},ze.prototype.onReady=function(t,e){this.history.onReady(t,e)},ze.prototype.onError=function(t){this.history.onError(t)},ze.prototype.push=function(t,e,n){var a=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){a.history.push(t,e,n)}));this.history.push(t,e,n)},ze.prototype.replace=function(t,e,n){var a=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){a.history.replace(t,e,n)}));this.history.replace(t,e,n)},ze.prototype.go=function(t){this.history.go(t)},ze.prototype.back=function(){this.go(-1)},ze.prototype.forward=function(){this.go(1)},ze.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},ze.prototype.resolve=function(t,e,n){e=e||this.history.current;var a=Q(t,e,n,this),r=this.match(a,e),i=r.redirectedFrom||r.fullPath,o=this.history.base,s=Ae(o,i,this.mode);return{location:a,route:r,href:s,normalizedTo:a,resolved:r}},ze.prototype.getRoutes=function(){return this.matcher.getRoutes()},ze.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},ze.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(ze.prototype,we),ze.install=st,ze.version="3.5.3",ze.isNavigationFailure=Wt,ze.NavigationFailureType=Ft,ze.START_LOCATION=m,lt&&window.Vue&&window.Vue.use(ze),e["Z"]=ze},8935:function(t,e,n){"use strict";n.r(e);n(4633);var a=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function s(t){return!1===t}function l(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function h(t){return"[object Object]"===u.call(t)}function d(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),a=t.split(","),r=0;r<a.length;r++)n[a[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var b=g("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var z=Object.prototype.hasOwnProperty;function w(t,e){return z.call(t,e)}function M(t){var e=Object.create(null);return function(n){var a=e[n];return a||(e[n]=t(n))}}var A=/-(\w)/g,V=M((function(t){return t.replace(A,(function(t,e){return e?e.toUpperCase():""}))})),C=M((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),H=/\B([A-Z])/g,O=M((function(t){return t.replace(H,"-$1").toLowerCase()}));function I(t,e){function n(n){var a=arguments.length;return a?a>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function S(t,e){return t.bind(e)}var k=Function.prototype.bind?S:I;function B(t,e){e=e||0;var n=t.length-e,a=new Array(n);while(n--)a[n]=t[n+e];return a}function L(t,e){for(var n in e)t[n]=e[n];return t}function T(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function E(t,e,n){}var P=function(t,e,n){return!1},_=function(t){return t};function x(t,e){if(t===e)return!0;var n=c(t),a=c(e);if(!n||!a)return!n&&!a&&String(t)===String(e);try{var r=Array.isArray(t),i=Array.isArray(e);if(r&&i)return t.length===e.length&&t.every((function(t,n){return x(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||i)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every((function(n){return x(t[n],e[n])}))}catch(l){return!1}}function F(t,e){for(var n=0;n<t.length;n++)if(x(t[n],e))return n;return-1}function D(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var j="data-server-rendered",N=["component","directive","filter"],R=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],$={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:E,parsePlatformTagName:_,mustUseProp:P,async:!0,_lifecycleHooks:R},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function q(t,e,n,a){Object.defineProperty(t,e,{value:n,enumerable:!!a,writable:!0,configurable:!0})}var W=new RegExp("[^"+U.source+".$_\\d]");function K(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Y,X="__proto__"in{},J="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=Z&&WXEnvironment.platform.toLowerCase(),tt=J&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,at=tt&&tt.indexOf("edge/")>0,rt=(tt&&tt.indexOf("android"),tt&&/iphone|ipad|ipod|ios/.test(tt)||"ios"===Q),it=(tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt),tt&&tt.match(/firefox\/(\d+)/)),ot={}.watch,st=!1;if(J)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){st=!0}}),window.addEventListener("test-passive",null,lt)}catch(Co){}var ct=function(){return void 0===Y&&(Y=!J&&!Z&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),Y},ut=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,ft="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);dt="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pt=E,vt=0,mt=function(){this.id=vt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){y(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var gt=[];function bt(t){gt.push(t),mt.target=t}function yt(){gt.pop(),mt.target=gt[gt.length-1]}var zt=function(t,e,n,a,r,i,o,s){this.tag=t,this.data=e,this.children=n,this.text=a,this.elm=r,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(zt.prototype,wt);var Mt=function(t){void 0===t&&(t="");var e=new zt;return e.text=t,e.isComment=!0,e};function At(t){return new zt(void 0,void 0,void 0,String(t))}function Vt(t){var e=new zt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Ct=Array.prototype,Ht=Object.create(Ct),Ot=["push","pop","shift","unshift","splice","sort","reverse"];Ot.forEach((function(t){var e=Ct[t];q(Ht,t,(function(){var n=[],a=arguments.length;while(a--)n[a]=arguments[a];var r,i=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),i}))}));var It=Object.getOwnPropertyNames(Ht),St=!0;function kt(t){St=t}var Bt=function(t){this.value=t,this.dep=new mt,this.vmCount=0,q(t,"__ob__",this),Array.isArray(t)?(X?Lt(t,Ht):Tt(t,Ht,It),this.observeArray(t)):this.walk(t)};function Lt(t,e){t.__proto__=e}function Tt(t,e,n){for(var a=0,r=n.length;a<r;a++){var i=n[a];q(t,i,e[i])}}function Et(t,e){var n;if(c(t)&&!(t instanceof zt))return w(t,"__ob__")&&t.__ob__ instanceof Bt?n=t.__ob__:St&&!ct()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Bt(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,a,r){var i=new mt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!r&&Et(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return mt.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ft(e))),e},set:function(e){var a=s?s.call(t):n;e===a||e!==e&&a!==a||s&&!l||(l?l.call(t,e):n=e,c=!r&&Et(e),i.notify())}})}}function _t(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var a=t.__ob__;return t._isVue||a&&a.vmCount?n:a?(Pt(a.value,e,n),a.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ft(t){for(var e=void 0,n=0,a=t.length;n<a;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ft(e)}Bt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},Bt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Et(t[e])};var Dt=$.optionMergeStrategies;function jt(t,e){if(!e)return t;for(var n,a,r,i=ft?Reflect.ownKeys(e):Object.keys(e),o=0;o<i.length;o++)n=i[o],"__ob__"!==n&&(a=t[n],r=e[n],w(t,n)?a!==r&&h(a)&&h(r)&&jt(a,r):_t(t,n,r));return t}function Nt(t,e,n){return n?function(){var a="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return a?jt(a,r):r}:e?t?function(){return jt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?$t(n):n}function $t(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,a){var r=Object.create(t||null);return e?L(r,e):r}Dt.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},R.forEach((function(t){Dt[t]=Rt})),N.forEach((function(t){Dt[t+"s"]=Ut})),Dt.watch=function(t,e,n,a){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var i in L(r,t),e){var o=r[i],s=e[i];o&&!Array.isArray(o)&&(o=[o]),r[i]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},Dt.props=Dt.methods=Dt.inject=Dt.computed=function(t,e,n,a){if(!t)return e;var r=Object.create(null);return L(r,t),e&&L(r,e),r},Dt.provide=Nt;var Gt=function(t,e){return void 0===e?t:e};function qt(t,e){var n=t.props;if(n){var a,r,i,o={};if(Array.isArray(n)){a=n.length;while(a--)r=n[a],"string"===typeof r&&(i=V(r),o[i]={type:null})}else if(h(n))for(var s in n)r=n[s],i=V(s),o[i]=h(r)?r:{type:r};else 0;t.props=o}}function Wt(t,e){var n=t.inject;if(n){var a=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)a[n[r]]={from:n[r]};else if(h(n))for(var i in n){var o=n[i];a[i]=h(o)?L({from:i},o):{from:o}}else 0}}function Kt(t){var e=t.directives;if(e)for(var n in e){var a=e[n];"function"===typeof a&&(e[n]={bind:a,update:a})}}function Yt(t,e,n){if("function"===typeof e&&(e=e.options),qt(e,n),Wt(e,n),Kt(e),!e._base&&(e.extends&&(t=Yt(t,e.extends,n)),e.mixins))for(var a=0,r=e.mixins.length;a<r;a++)t=Yt(t,e.mixins[a],n);var i,o={};for(i in t)s(i);for(i in e)w(t,i)||s(i);function s(a){var r=Dt[a]||Gt;o[a]=r(t[a],e[a],n,a)}return o}function Xt(t,e,n,a){if("string"===typeof n){var r=t[e];if(w(r,n))return r[n];var i=V(n);if(w(r,i))return r[i];var o=C(i);if(w(r,o))return r[o];var s=r[n]||r[i]||r[o];return s}}function Jt(t,e,n,a){var r=e[t],i=!w(n,t),o=n[t],s=ne(Boolean,r.type);if(s>-1)if(i&&!w(r,"default"))o=!1;else if(""===o||o===O(t)){var l=ne(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=Zt(a,r,t);var c=St;kt(!0),Et(o),kt(c)}return o}function Zt(t,e,n){if(w(e,"default")){var a=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof a&&"Function"!==te(e.type)?a.call(t):a}}var Qt=/^\s*function (\w+)/;function te(t){var e=t&&t.toString().match(Qt);return e?e[1]:""}function ee(t,e){return te(t)===te(e)}function ne(t,e){if(!Array.isArray(e))return ee(e,t)?0:-1;for(var n=0,a=e.length;n<a;n++)if(ee(e[n],t))return n;return-1}function ae(t,e,n){bt();try{if(e){var a=e;while(a=a.$parent){var r=a.$options.errorCaptured;if(r)for(var i=0;i<r.length;i++)try{var o=!1===r[i].call(a,t,e,n);if(o)return}catch(Co){ie(Co,a,"errorCaptured hook")}}}ie(t,e,n)}finally{yt()}}function re(t,e,n,a,r){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&p(i)&&!i._handled&&(i.catch((function(t){return ae(t,a,r+" (Promise/async)")})),i._handled=!0)}catch(Co){ae(Co,a,r)}return i}function ie(t,e,n){if($.errorHandler)try{return $.errorHandler.call(null,t,e,n)}catch(Co){Co!==t&&oe(Co,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!J&&!Z||"undefined"===typeof console)throw t;console.error(t)}var se,le=!1,ce=[],ue=!1;function he(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var de=Promise.resolve();se=function(){de.then(he),rt&&setTimeout(E)},le=!0}else if(et||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())se="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var fe=1,pe=new MutationObserver(he),ve=document.createTextNode(String(fe));pe.observe(ve,{characterData:!0}),se=function(){fe=(fe+1)%2,ve.data=String(fe)},le=!0}function me(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Co){ae(Co,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,se()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ge=new dt;function be(t){ye(t,ge),ge.clear()}function ye(t,e){var n,a,r=Array.isArray(t);if(!(!r&&!c(t)||Object.isFrozen(t)||t instanceof zt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(r){n=t.length;while(n--)ye(t[n],e)}else{a=Object.keys(t),n=a.length;while(n--)ye(t[a[n]],e)}}}var ze=M((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var a="!"===t.charAt(0);return t=a?t.slice(1):t,{name:t,once:n,capture:a,passive:e}}));function we(t,e){function n(){var t=arguments,a=n.fns;if(!Array.isArray(a))return re(a,null,arguments,e,"v-on handler");for(var r=a.slice(),i=0;i<r.length;i++)re(r[i],null,t,e,"v-on handler")}return n.fns=t,n}function Me(t,e,n,a,i,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=ze(l),r(c)||(r(u)?(r(c.fns)&&(c=t[l]=we(c,s)),o(h.once)&&(c=t[l]=i(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)r(t[l])&&(h=ze(l),a(h.name,e[l],h.capture))}function Ae(t,e,n){var a;t instanceof zt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function l(){n.apply(this,arguments),y(a.fns,l)}r(s)?a=we([l]):i(s.fns)&&o(s.merged)?(a=s,a.fns.push(l)):a=we([s,l]),a.merged=!0,t[e]=a}function Ve(t,e,n){var a=e.options.props;if(!r(a)){var o={},s=t.attrs,l=t.props;if(i(s)||i(l))for(var c in a){var u=O(c);Ce(o,l,c,u,!0)||Ce(o,s,c,u,!1)}return o}}function Ce(t,e,n,a,r){if(i(e)){if(w(e,n))return t[n]=e[n],r||delete e[n],!0;if(w(e,a))return t[n]=e[a],r||delete e[a],!0}return!1}function He(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Oe(t){return l(t)?[At(t)]:Array.isArray(t)?Se(t):void 0}function Ie(t){return i(t)&&i(t.text)&&s(t.isComment)}function Se(t,e){var n,a,s,c,u=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(s=u.length-1,c=u[s],Array.isArray(a)?a.length>0&&(a=Se(a,(e||"")+"_"+n),Ie(a[0])&&Ie(c)&&(u[s]=At(c.text+a[0].text),a.shift()),u.push.apply(u,a)):l(a)?Ie(c)?u[s]=At(c.text+a):""!==a&&u.push(At(a)):Ie(a)&&Ie(c)?u[s]=At(c.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),u.push(a)));return u}function ke(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Be(t){var e=Le(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),kt(!0))}function Le(t,e){if(t){for(var n=Object.create(null),a=ft?Reflect.ownKeys(t):Object.keys(t),r=0;r<a.length;r++){var i=a[r];if("__ob__"!==i){var o=t[i].from,s=e;while(s){if(s._provided&&w(s._provided,o)){n[i]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[i]){var l=t[i].default;n[i]="function"===typeof l?l.call(e):l}else 0}}return n}}function Te(t,e){if(!t||!t.length)return{};for(var n={},a=0,r=t.length;a<r;a++){var i=t[a],o=i.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,i.context!==e&&i.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(i);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===i.tag?l.push.apply(l,i.children||[]):l.push(i)}}for(var c in n)n[c].every(Ee)&&delete n[c];return n}function Ee(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t){return t.isComment&&t.asyncFactory}function _e(t,e,n){var r,i=Object.keys(e).length>0,o=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&n&&n!==a&&s===n.$key&&!i&&!n.$hasNormal)return n;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=xe(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=Fe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),q(r,"$stable",o),q(r,"$key",s),q(r,"$hasNormal",i),r}function xe(t,e,n){var a=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Oe(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Pe(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:a,enumerable:!0,configurable:!0}),a}function Fe(t,e){return function(){return t[e]}}function De(t,e){var n,a,r,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),a=0,r=t.length;a<r;a++)n[a]=e(t[a],a);else if("number"===typeof t)for(n=new Array(t),a=0;a<t;a++)n[a]=e(a+1,a);else if(c(t))if(ft&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(o=Object.keys(t),n=new Array(o.length),a=0,r=o.length;a<r;a++)s=o[a],n[a]=e(t[s],s,a);return i(n)||(n=[]),n._isVList=!0,n}function je(t,e,n,a){var r,i=this.$scopedSlots[t];i?(n=n||{},a&&(n=L(L({},a),n)),r=i(n)||("function"===typeof e?e():e)):r=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Ne(t){return Xt(this.$options,"filters",t,!0)||_}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function $e(t,e,n,a,r){var i=$.keyCodes[e]||n;return r&&a&&!$.keyCodes[e]?Re(r,a):i?Re(i,t):a?O(a)!==e:void 0===t}function Ue(t,e,n,a,r){if(n)if(c(n)){var i;Array.isArray(n)&&(n=T(n));var o=function(o){if("class"===o||"style"===o||b(o))i=t;else{var s=t.attrs&&t.attrs.type;i=a||$.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=V(o),c=O(o);if(!(l in i)&&!(c in i)&&(i[o]=n[o],r)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Ge(t,e){var n=this._staticTrees||(this._staticTrees=[]),a=n[t];return a&&!e||(a=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),We(a,"__static__"+t,!1)),a}function qe(t,e,n){return We(t,"__once__"+e+(n?"_"+n:""),!0),t}function We(t,e,n){if(Array.isArray(t))for(var a=0;a<t.length;a++)t[a]&&"string"!==typeof t[a]&&Ke(t[a],e+"_"+a,n);else Ke(t,e,n)}function Ke(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ye(t,e){if(e)if(h(e)){var n=t.on=t.on?L({},t.on):{};for(var a in e){var r=n[a],i=e[a];n[a]=r?[].concat(r,i):i}}else;return t}function Xe(t,e,n,a){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var i=t[r];Array.isArray(i)?Xe(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return a&&(e.$key=a),e}function Je(t,e){for(var n=0;n<e.length;n+=2){var a=e[n];"string"===typeof a&&a&&(t[e[n]]=e[n+1])}return t}function Ze(t,e){return"string"===typeof t?e+t:t}function Qe(t){t._o=qe,t._n=m,t._s=v,t._l=De,t._t=je,t._q=x,t._i=F,t._m=Ge,t._f=Ne,t._k=$e,t._b=Ue,t._v=At,t._e=Mt,t._u=Xe,t._g=Ye,t._d=Je,t._p=Ze}function tn(t,e,n,r,i){var s,l=this,c=i.options;w(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=o(c._compiled),h=!u;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||a,this.injections=Le(c.inject,r),this.slots=function(){return l.$slots||_e(t.scopedSlots,l.$slots=Te(n,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return _e(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=_e(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,a){var i=pn(s,t,e,n,a,h);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=r),i}:this._c=function(t,e,n,a){return pn(s,t,e,n,a,h)}}function en(t,e,n,r,o){var s=t.options,l={},c=s.props;if(i(c))for(var u in c)l[u]=Jt(u,c,e||a);else i(n.attrs)&&an(l,n.attrs),i(n.props)&&an(l,n.props);var h=new tn(n,l,o,r,t),d=s.render.call(null,h._c,h);if(d instanceof zt)return nn(d,n,h.parent,s,h);if(Array.isArray(d)){for(var f=Oe(d)||[],p=new Array(f.length),v=0;v<f.length;v++)p[v]=nn(f[v],n,h.parent,s,h);return p}}function nn(t,e,n,a,r){var i=Vt(t);return i.fnContext=n,i.fnOptions=a,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function an(t,e){for(var n in e)t[V(n)]=e[n]}Qe(tn.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var a=t.componentInstance=ln(t,Ln);a.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,a=e.componentInstance=t.componentInstance;xn(a,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Nn(n,"mounted")),t.data.keepAlive&&(e._isMounted?ta(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?jn(e,!0):e.$destroy())}},on=Object.keys(rn);function sn(t,e,n,a,s){if(!r(t)){var l=n.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(r(t.cid)&&(u=t,t=Vn(u,l),void 0===t))return An(u,e,n,a,s);e=e||{},Aa(t),i(e.model)&&hn(t.options,e);var h=Ve(e,t,s);if(o(t.options.functional))return en(t,h,e,n,a);var d=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||s,v=new zt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:s,children:a},u);return v}}}function ln(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},a=t.data.inlineTemplate;return i(a)&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var a=on[n],r=e[a],i=rn[a];r===i||r&&r._merged||(e[a]=r?un(i,r):i)}}function un(t,e){var n=function(n,a){t(n,a),e(n,a)};return n._merged=!0,n}function hn(t,e){var n=t.model&&t.model.prop||"value",a=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var r=e.on||(e.on={}),o=r[a],s=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(r[a]=[s].concat(o)):r[a]=s}var dn=1,fn=2;function pn(t,e,n,a,r,i){return(Array.isArray(n)||l(n))&&(r=a,a=n,n=void 0),o(i)&&(r=fn),vn(t,e,n,a,r)}function vn(t,e,n,a,r){if(i(n)&&i(n.__ob__))return Mt();if(i(n)&&i(n.is)&&(e=n.is),!e)return Mt();var o,s,l;(Array.isArray(a)&&"function"===typeof a[0]&&(n=n||{},n.scopedSlots={default:a[0]},a.length=0),r===fn?a=Oe(a):r===dn&&(a=He(a)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||$.getTagNamespace(e),o=$.isReservedTag(e)?new zt($.parsePlatformTagName(e),n,a,void 0,void 0,t):n&&n.pre||!i(l=Xt(t.$options,"components",e))?new zt(e,n,a,void 0,void 0,t):sn(l,n,t,a,e)):o=sn(e,n,t,a);return Array.isArray(o)?o:i(o)?(i(s)&&mn(o,s),i(n)&&gn(n),o):Mt()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];i(l.tag)&&(r(l.ns)||o(n)&&"svg"!==l.tag)&&mn(l,e,n)}}function gn(t){c(t.style)&&be(t.style),c(t.class)&&be(t.class)}function bn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=Te(e._renderChildren,r),t.$scopedSlots=a,t._c=function(e,n,a,r){return pn(t,e,n,a,r,!1)},t.$createElement=function(e,n,a,r){return pn(t,e,n,a,r,!0)};var i=n&&n.data;Pt(t,"$attrs",i&&i.attrs||a,null,!0),Pt(t,"$listeners",e._parentListeners||a,null,!0)}var yn,zn=null;function wn(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,a=n.render,r=n._parentVnode;r&&(e.$scopedSlots=_e(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{zn=e,t=a.call(e._renderProxy,e.$createElement)}catch(Co){ae(Co,e,"render"),t=e._vnode}finally{zn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof zt||(t=Mt()),t.parent=r,t}}function Mn(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function An(t,e,n,a,r){var i=Mt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:a,tag:r},i}function Vn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=zn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,l=null,u=null;n.$on("hook:destroyed",(function(){return y(a,n)}));var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},d=D((function(n){t.resolved=Mn(n,e),s?a.length=0:h(!0)})),f=D((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),v=t(d,f);return c(v)&&(p(v)?r(t.resolved)&&v.then(d,f):p(v.component)&&(v.component.then(d,f),i(v.error)&&(t.errorComp=Mn(v.error,e)),i(v.loading)&&(t.loadingComp=Mn(v.loading,e),0===v.delay?t.loading=!0:l=setTimeout((function(){l=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),v.delay||200)),i(v.timeout)&&(u=setTimeout((function(){u=null,r(t.resolved)&&f(null)}),v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function Cn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||Pe(n)))return n}}function Hn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&kn(t,e)}function On(t,e){yn.$on(t,e)}function In(t,e){yn.$off(t,e)}function Sn(t,e){var n=yn;return function a(){var r=e.apply(null,arguments);null!==r&&n.$off(t,a)}}function kn(t,e,n){yn=t,Me(e,n||{},On,In,Sn,t),yn=void 0}function Bn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var a=this;if(Array.isArray(t))for(var r=0,i=t.length;r<i;r++)a.$on(t[r],n);else(a._events[t]||(a._events[t]=[])).push(n),e.test(t)&&(a._hasHookEvent=!0);return a},t.prototype.$once=function(t,e){var n=this;function a(){n.$off(t,a),e.apply(n,arguments)}return a.fn=e,n.$on(t,a),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var a=0,r=t.length;a<r;a++)n.$off(t[a],e);return n}var i,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(i=o[s],i===e||i.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?B(n):n;for(var a=B(arguments,1),r='event handler for "'+t+'"',i=0,o=n.length;i<o;i++)re(n[i],e,a,e,r)}return e}}var Ln=null;function Tn(t){var e=Ln;return Ln=t,function(){Ln=e}}function En(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,a=n.$el,r=n._vnode,i=Tn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),i(),a&&(a.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Nn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Nn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function _n(t,e,n){var a;return t.$el=e,t.$options.render||(t.$options.render=Mt),Nn(t,"beforeMount"),a=function(){t._update(t._render(),n)},new ra(t,a,E,{before:function(){t._isMounted&&!t._isDestroyed&&Nn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Nn(t,"mounted")),t}function xn(t,e,n,r,i){var o=r.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==a&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),c=!!(i||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data.attrs||a,t.$listeners=n||a,e&&t.$options.props){kt(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;u[f]=Jt(f,p,e,t)}kt(!0),t.$options.propsData=e}n=n||a;var v=t.$options._parentListeners;t.$options._parentListeners=n,kn(t,n,v),c&&(t.$slots=Te(i,r.context),t.$forceUpdate())}function Fn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,Fn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Nn(t,"activated")}}function jn(t,e){if((!e||(t._directInactive=!0,!Fn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);Nn(t,"deactivated")}}function Nn(t,e){bt();var n=t.$options[e],a=e+" hook";if(n)for(var r=0,i=n.length;r<i;r++)re(n[r],t,null,t,a);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var Rn=[],$n=[],Un={},Gn=!1,qn=!1,Wn=0;function Kn(){Wn=Rn.length=$n.length=0,Un={},Gn=qn=!1}var Yn=0,Xn=Date.now;if(J&&!et){var Jn=window.performance;Jn&&"function"===typeof Jn.now&&Xn()>document.createEvent("Event").timeStamp&&(Xn=function(){return Jn.now()})}function Zn(){var t,e;for(Yn=Xn(),qn=!0,Rn.sort((function(t,e){return t.id-e.id})),Wn=0;Wn<Rn.length;Wn++)t=Rn[Wn],t.before&&t.before(),e=t.id,Un[e]=null,t.run();var n=$n.slice(),a=Rn.slice();Kn(),ea(n),Qn(a),ut&&$.devtools&&ut.emit("flush")}function Qn(t){var e=t.length;while(e--){var n=t[e],a=n.vm;a._watcher===n&&a._isMounted&&!a._isDestroyed&&Nn(a,"updated")}}function ta(t){t._inactive=!1,$n.push(t)}function ea(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function na(t){var e=t.id;if(null==Un[e]){if(Un[e]=!0,qn){var n=Rn.length-1;while(n>Wn&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);Gn||(Gn=!0,me(Zn))}}var aa=0,ra=function(t,e,n,a,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),a?(this.deep=!!a.deep,this.user=!!a.user,this.lazy=!!a.lazy,this.sync=!!a.sync,this.before=a.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++aa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="","function"===typeof e?this.getter=e:(this.getter=K(e),this.getter||(this.getter=E)),this.value=this.lazy?void 0:this.get()};ra.prototype.get=function(){var t;bt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Co){if(!this.user)throw Co;ae(Co,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&be(t),yt(),this.cleanupDeps()}return t},ra.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ra.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ra.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():na(this)},ra.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ra.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ra.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ra.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ia={enumerable:!0,configurable:!0,get:E,set:E};function oa(t,e,n){ia.get=function(){return this[e][n]},ia.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ia)}function sa(t){t._watchers=[];var e=t.$options;e.props&&la(t,e.props),e.methods&&ma(t,e.methods),e.data?ca(t):Et(t._data={},!0),e.computed&&da(t,e.computed),e.watch&&e.watch!==ot&&ga(t,e.watch)}function la(t,e){var n=t.$options.propsData||{},a=t._props={},r=t.$options._propKeys=[],i=!t.$parent;i||kt(!1);var o=function(i){r.push(i);var o=Jt(i,e,n,t);Pt(a,i,o),i in t||oa(t,"_props",i)};for(var s in e)o(s);kt(!0)}function ca(t){var e=t.$options.data;e=t._data="function"===typeof e?ua(e,t):e||{},h(e)||(e={});var n=Object.keys(e),a=t.$options.props,r=(t.$options.methods,n.length);while(r--){var i=n[r];0,a&&w(a,i)||G(i)||oa(t,"_data",i)}Et(e,!0)}function ua(t,e){bt();try{return t.call(e,e)}catch(Co){return ae(Co,e,"data()"),{}}finally{yt()}}var ha={lazy:!0};function da(t,e){var n=t._computedWatchers=Object.create(null),a=ct();for(var r in e){var i=e[r],o="function"===typeof i?i:i.get;0,a||(n[r]=new ra(t,o||E,E,ha)),r in t||fa(t,r,i)}}function fa(t,e,n){var a=!ct();"function"===typeof n?(ia.get=a?pa(e):va(n),ia.set=E):(ia.get=n.get?a&&!1!==n.cache?pa(e):va(n.get):E,ia.set=n.set||E),Object.defineProperty(t,e,ia)}function pa(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function va(t){return function(){return t.call(this,this)}}function ma(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?E:k(e[n],t)}function ga(t,e){for(var n in e){var a=e[n];if(Array.isArray(a))for(var r=0;r<a.length;r++)ba(t,n,a[r]);else ba(t,n,a)}}function ba(t,e,n,a){return h(n)&&(a=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,a)}function ya(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=_t,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var a=this;if(h(e))return ba(a,t,e,n);n=n||{},n.user=!0;var r=new ra(a,t,e,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';bt(),re(e,a,[r.value],a,i),yt()}return function(){r.teardown()}}}var za=0;function wa(t){t.prototype._init=function(t){var e=this;e._uid=za++,e._isVue=!0,t&&t._isComponent?Ma(e,t):e.$options=Yt(Aa(e.constructor),t||{},e),e._renderProxy=e,e._self=e,En(e),Hn(e),bn(e),Nn(e,"beforeCreate"),Be(e),sa(e),ke(e),Nn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Ma(t,e){var n=t.$options=Object.create(t.constructor.options),a=e._parentVnode;n.parent=e.parent,n._parentVnode=a;var r=a.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Aa(t){var e=t.options;if(t.super){var n=Aa(t.super),a=t.superOptions;if(n!==a){t.superOptions=n;var r=Va(t);r&&L(t.extendOptions,r),e=t.options=Yt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Va(t){var e,n=t.options,a=t.sealedOptions;for(var r in n)n[r]!==a[r]&&(e||(e={}),e[r]=n[r]);return e}function Ca(t){this._init(t)}function Ha(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=B(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Oa(t){t.mixin=function(t){return this.options=Yt(this.options,t),this}}function Ia(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,a=n.cid,r=t._Ctor||(t._Ctor={});if(r[a])return r[a];var i=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Yt(n.options,t),o["super"]=n,o.options.props&&Sa(o),o.options.computed&&ka(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,N.forEach((function(t){o[t]=n[t]})),i&&(o.options.components[i]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=L({},o.options),r[a]=o,o}}function Sa(t){var e=t.options.props;for(var n in e)oa(t.prototype,"_props",n)}function ka(t){var e=t.options.computed;for(var n in e)fa(t.prototype,n,e[n])}function Ba(t){N.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function La(t){return t&&(t.Ctor.options.name||t.tag)}function Ta(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!d(t)&&t.test(e)}function Ea(t,e){var n=t.cache,a=t.keys,r=t._vnode;for(var i in n){var o=n[i];if(o){var s=o.name;s&&!e(s)&&Pa(n,i,a,r)}}}function Pa(t,e,n,a){var r=t[e];!r||a&&r.tag===a.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}wa(Ca),ya(Ca),Bn(Ca),Pn(Ca),wn(Ca);var _a=[String,RegExp,Array],xa={name:"keep-alive",abstract:!0,props:{include:_a,exclude:_a,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,a=t.vnodeToCache,r=t.keyToCache;if(a){var i=a.tag,o=a.componentInstance,s=a.componentOptions;e[r]={name:La(s),tag:i,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Pa(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Pa(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Ea(t,(function(t){return Ta(e,t)}))})),this.$watch("exclude",(function(e){Ea(t,(function(t){return!Ta(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Cn(t),n=e&&e.componentOptions;if(n){var a=La(n),r=this,i=r.include,o=r.exclude;if(i&&(!a||!Ta(i,a))||o&&a&&Ta(o,a))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,y(c,u),c.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},Fa={KeepAlive:xa};function Da(t){var e={get:function(){return $}};Object.defineProperty(t,"config",e),t.util={warn:pt,extend:L,mergeOptions:Yt,defineReactive:Pt},t.set=_t,t.delete=xt,t.nextTick=me,t.observable=function(t){return Et(t),t},t.options=Object.create(null),N.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,L(t.options.components,Fa),Ha(t),Oa(t),Ia(t),Ba(t)}Da(Ca),Object.defineProperty(Ca.prototype,"$isServer",{get:ct}),Object.defineProperty(Ca.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ca,"FunctionalRenderContext",{value:tn}),Ca.version="2.6.14";var ja=g("style,class"),Na=g("input,textarea,option,select,progress"),Ra=function(t,e,n){return"value"===n&&Na(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},$a=g("contenteditable,draggable,spellcheck"),Ua=g("events,caret,typing,plaintext-only"),Ga=function(t,e){return Xa(e)||"false"===e?"false":"contenteditable"===t&&Ua(e)?e:"true"},qa=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wa="http://www.w3.org/1999/xlink",Ka=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Ya=function(t){return Ka(t)?t.slice(6,t.length):""},Xa=function(t){return null==t||!1===t};function Ja(t){var e=t.data,n=t,a=t;while(i(a.componentInstance))a=a.componentInstance._vnode,a&&a.data&&(e=Za(a.data,e));while(i(n=n.parent))n&&n.data&&(e=Za(e,n.data));return Qa(e.staticClass,e.class)}function Za(t,e){return{staticClass:tr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Qa(t,e){return i(t)||i(e)?tr(t,er(e)):""}function tr(t,e){return t?e?t+" "+e:t:e||""}function er(t){return Array.isArray(t)?nr(t):c(t)?ar(t):"string"===typeof t?t:""}function nr(t){for(var e,n="",a=0,r=t.length;a<r;a++)i(e=er(t[a]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ar(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var rr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ir=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),or=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),sr=function(t){return ir(t)||or(t)};function lr(t){return or(t)?"svg":"math"===t?"math":void 0}var cr=Object.create(null);function ur(t){if(!J)return!0;if(sr(t))return!1;if(t=t.toLowerCase(),null!=cr[t])return cr[t];var e=document.createElement(t);return t.indexOf("-")>-1?cr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:cr[t]=/HTMLUnknownElement/.test(e.toString())}var hr=g("text,number,password,search,email,tel,url");function dr(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function fr(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pr(t,e){return document.createElementNS(rr[t],e)}function vr(t){return document.createTextNode(t)}function mr(t){return document.createComment(t)}function gr(t,e,n){t.insertBefore(e,n)}function br(t,e){t.removeChild(e)}function yr(t,e){t.appendChild(e)}function zr(t){return t.parentNode}function wr(t){return t.nextSibling}function Mr(t){return t.tagName}function Ar(t,e){t.textContent=e}function Vr(t,e){t.setAttribute(e,"")}var Cr=Object.freeze({createElement:fr,createElementNS:pr,createTextNode:vr,createComment:mr,insertBefore:gr,removeChild:br,appendChild:yr,parentNode:zr,nextSibling:wr,tagName:Mr,setTextContent:Ar,setStyleScope:Vr}),Hr={create:function(t,e){Or(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Or(t,!0),Or(e))},destroy:function(t){Or(t,!0)}};function Or(t,e){var n=t.data.ref;if(i(n)){var a=t.context,r=t.componentInstance||t.elm,o=a.$refs;e?Array.isArray(o[n])?y(o[n],r):o[n]===r&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(r)<0&&o[n].push(r):o[n]=[r]:o[n]=r}}var Ir=new zt("",{},[]),Sr=["create","activate","update","remove","destroy"];function kr(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Br(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Br(t,e){if("input"!==t.tag)return!0;var n,a=i(n=t.data)&&i(n=n.attrs)&&n.type,r=i(n=e.data)&&i(n=n.attrs)&&n.type;return a===r||hr(a)&&hr(r)}function Lr(t,e,n){var a,r,o={};for(a=e;a<=n;++a)r=t[a].key,i(r)&&(o[r]=a);return o}function Tr(t){var e,n,a={},s=t.modules,c=t.nodeOps;for(e=0;e<Sr.length;++e)for(a[Sr[e]]=[],n=0;n<s.length;++n)i(s[n][Sr[e]])&&a[Sr[e]].push(s[n][Sr[e]]);function u(t){return new zt(c.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=c.parentNode(t);i(e)&&c.removeChild(e,t)}function f(t,e,n,a,r,s,l){if(i(t.elm)&&i(s)&&(t=s[l]=Vt(t)),t.isRootInsert=!r,!p(t,e,n,a)){var u=t.data,h=t.children,d=t.tag;i(d)?(t.elm=t.ns?c.createElementNS(t.ns,d):c.createElement(d,t),M(t),y(t,h,e),i(u)&&w(t,e),b(n,t.elm,a)):o(t.isComment)?(t.elm=c.createComment(t.text),b(n,t.elm,a)):(t.elm=c.createTextNode(t.text),b(n,t.elm,a))}}function p(t,e,n,a){var r=t.data;if(i(r)){var s=i(t.componentInstance)&&r.keepAlive;if(i(r=r.hook)&&i(r=r.init)&&r(t,!1),i(t.componentInstance))return v(t,e),b(n,t.elm,a),o(s)&&m(t,e,n,a),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,z(t)?(w(t,e),M(t)):(Or(t),e.push(t))}function m(t,e,n,r){var o,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(o=s.data)&&i(o=o.transition)){for(o=0;o<a.activate.length;++o)a.activate[o](Ir,s);e.push(s);break}b(n,t.elm,r)}function b(t,e,n){i(t)&&(i(n)?c.parentNode(n)===t&&c.insertBefore(t,e,n):c.appendChild(t,e))}function y(t,e,n){if(Array.isArray(e)){0;for(var a=0;a<e.length;++a)f(e[a],n,t.elm,null,!0,e,a)}else l(t.text)&&c.appendChild(t.elm,c.createTextNode(String(t.text)))}function z(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function w(t,n){for(var r=0;r<a.create.length;++r)a.create[r](Ir,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(Ir,t),i(e.insert)&&n.push(t))}function M(t){var e;if(i(e=t.fnScopeId))c.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&c.setStyleScope(t.elm,e),n=n.parent}i(e=Ln)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&c.setStyleScope(t.elm,e)}function A(t,e,n,a,r,i){for(;a<=r;++a)f(n[a],i,t,e,!1,n,a)}function V(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)V(t.children[n])}function C(t,e,n){for(;e<=n;++e){var a=t[e];i(a)&&(i(a.tag)?(H(a),V(a)):d(a.elm))}}function H(t,e){if(i(e)||i(t.data)){var n,r=a.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&H(n,e),n=0;n<a.remove.length;++n)a.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else d(t.elm)}function O(t,e,n,a,o){var s,l,u,h,d=0,p=0,v=e.length-1,m=e[0],g=e[v],b=n.length-1,y=n[0],z=n[b],w=!o;while(d<=v&&p<=b)r(m)?m=e[++d]:r(g)?g=e[--v]:kr(m,y)?(S(m,y,a,n,p),m=e[++d],y=n[++p]):kr(g,z)?(S(g,z,a,n,b),g=e[--v],z=n[--b]):kr(m,z)?(S(m,z,a,n,b),w&&c.insertBefore(t,m.elm,c.nextSibling(g.elm)),m=e[++d],z=n[--b]):kr(g,y)?(S(g,y,a,n,p),w&&c.insertBefore(t,g.elm,m.elm),g=e[--v],y=n[++p]):(r(s)&&(s=Lr(e,d,v)),l=i(y.key)?s[y.key]:I(y,e,d,v),r(l)?f(y,a,t,m.elm,!1,n,p):(u=e[l],kr(u,y)?(S(u,y,a,n,p),e[l]=void 0,w&&c.insertBefore(t,u.elm,m.elm)):f(y,a,t,m.elm,!1,n,p)),y=n[++p]);d>v?(h=r(n[b+1])?null:n[b+1].elm,A(t,h,n,p,b,a)):p>b&&C(e,d,v)}function I(t,e,n,a){for(var r=n;r<a;r++){var o=e[r];if(i(o)&&kr(t,o))return r}}function S(t,e,n,s,l,u){if(t!==e){i(e.elm)&&i(s)&&(e=s[l]=Vt(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?L(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,v=e.children;if(i(f)&&z(e)){for(d=0;d<a.update.length;++d)a.update[d](t,e);i(d=f.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(v)?p!==v&&O(h,p,v,n,u):i(v)?(i(t.text)&&c.setTextContent(h,""),A(h,null,v,0,v.length-1,n)):i(p)?C(p,0,p.length-1):i(t.text)&&c.setTextContent(h,""):t.text!==e.text&&c.setTextContent(h,e.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(t,e)}}}function k(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var a=0;a<e.length;++a)e[a].data.hook.insert(e[a])}var B=g("attrs,class,staticClass,staticStyle,key");function L(t,e,n,a){var r,s=e.tag,l=e.data,c=e.children;if(a=a||l&&l.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(l)&&(i(r=l.hook)&&i(r=r.init)&&r(e,!0),i(r=e.componentInstance)))return v(e,n),!0;if(i(s)){if(i(c))if(t.hasChildNodes())if(i(r=l)&&i(r=r.domProps)&&i(r=r.innerHTML)){if(r!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<c.length;d++){if(!h||!L(h,c[d],n,a)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else y(e,c,n);if(i(l)){var f=!1;for(var p in l)if(!B(p)){f=!0,w(e,n);break}!f&&l["class"]&&be(l["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,s){if(!r(e)){var l=!1,h=[];if(r(t))l=!0,f(e,h);else{var d=i(t.nodeType);if(!d&&kr(t,e))S(t,e,h,null,null,s);else{if(d){if(1===t.nodeType&&t.hasAttribute(j)&&(t.removeAttribute(j),n=!0),o(n)&&L(t,e,h))return k(e,h,!0),t;t=u(t)}var p=t.elm,v=c.parentNode(p);if(f(e,h,p._leaveCb?null:v,c.nextSibling(p)),i(e.parent)){var m=e.parent,g=z(e);while(m){for(var b=0;b<a.destroy.length;++b)a.destroy[b](m);if(m.elm=e.elm,g){for(var y=0;y<a.create.length;++y)a.create[y](Ir,m);var w=m.data.hook.insert;if(w.merged)for(var M=1;M<w.fns.length;M++)w.fns[M]()}else Or(m);m=m.parent}}i(v)?C([t],0,0):i(t.tag)&&V(t)}}return k(e,h,l),e.elm}i(t)&&V(t)}}var Er={create:Pr,update:Pr,destroy:function(t){Pr(t,Ir)}};function Pr(t,e){(t.data.directives||e.data.directives)&&_r(t,e)}function _r(t,e){var n,a,r,i=t===Ir,o=e===Ir,s=Fr(t.data.directives,t.context),l=Fr(e.data.directives,e.context),c=[],u=[];for(n in l)a=s[n],r=l[n],a?(r.oldValue=a.value,r.oldArg=a.arg,jr(r,"update",e,t),r.def&&r.def.componentUpdated&&u.push(r)):(jr(r,"bind",e,t),r.def&&r.def.inserted&&c.push(r));if(c.length){var h=function(){for(var n=0;n<c.length;n++)jr(c[n],"inserted",e,t)};i?Ae(e,"insert",h):h()}if(u.length&&Ae(e,"postpatch",(function(){for(var n=0;n<u.length;n++)jr(u[n],"componentUpdated",e,t)})),!i)for(n in s)l[n]||jr(s[n],"unbind",t,t,o)}var xr=Object.create(null);function Fr(t,e){var n,a,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++)a=t[n],a.modifiers||(a.modifiers=xr),r[Dr(a)]=a,a.def=Xt(e.$options,"directives",a.name,!0);return r}function Dr(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function jr(t,e,n,a,r){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,a,r)}catch(Co){ae(Co,n.context,"directive "+t.name+" "+e+" hook")}}var Nr=[Hr,Er];function Rr(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var a,o,s,l=e.elm,c=t.data.attrs||{},u=e.data.attrs||{};for(a in i(u.__ob__)&&(u=e.data.attrs=L({},u)),u)o=u[a],s=c[a],s!==o&&$r(l,a,o,e.data.pre);for(a in(et||at)&&u.value!==c.value&&$r(l,"value",u.value),c)r(u[a])&&(Ka(a)?l.removeAttributeNS(Wa,Ya(a)):$a(a)||l.removeAttribute(a))}}function $r(t,e,n,a){a||t.tagName.indexOf("-")>-1?Ur(t,e,n):qa(e)?Xa(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):$a(e)?t.setAttribute(e,Ga(e,n)):Ka(e)?Xa(n)?t.removeAttributeNS(Wa,Ya(e)):t.setAttributeNS(Wa,e,n):Ur(t,e,n)}function Ur(t,e,n){if(Xa(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var a=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",a)};t.addEventListener("input",a),t.__ieph=!0}t.setAttribute(e,n)}}var Gr={create:Rr,update:Rr};function qr(t,e){var n=e.elm,a=e.data,o=t.data;if(!(r(a.staticClass)&&r(a.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var s=Ja(e),l=n._transitionClasses;i(l)&&(s=tr(s,er(l))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var Wr,Kr={create:qr,update:qr},Yr="__r",Xr="__c";function Jr(t){if(i(t[Yr])){var e=et?"change":"input";t[e]=[].concat(t[Yr],t[e]||[]),delete t[Yr]}i(t[Xr])&&(t.change=[].concat(t[Xr],t.change||[]),delete t[Xr])}function Zr(t,e,n){var a=Wr;return function r(){var i=e.apply(null,arguments);null!==i&&ei(t,r,n,a)}}var Qr=le&&!(it&&Number(it[1])<=53);function ti(t,e,n,a){if(Qr){var r=Yn,i=e;e=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)}}Wr.addEventListener(t,e,st?{capture:n,passive:a}:n)}function ei(t,e,n,a){(a||Wr).removeEventListener(t,e._wrapper||e,n)}function ni(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},a=t.data.on||{};Wr=e.elm,Jr(n),Me(n,a,ti,ei,Zr,e.context),Wr=void 0}}var ai,ri={create:ni,update:ni};function ii(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,a,o=e.elm,s=t.data.domProps||{},l=e.data.domProps||{};for(n in i(l.__ob__)&&(l=e.data.domProps=L({},l)),s)n in l||(o[n]="");for(n in l){if(a=l[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),a===s[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=a;var c=r(a)?"":String(a);oi(o,c)&&(o.value=c)}else if("innerHTML"===n&&or(o.tagName)&&r(o.innerHTML)){ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+a+"</svg>";var u=ai.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(a!==s[n])try{o[n]=a}catch(Co){}}}}function oi(t,e){return!t.composing&&("OPTION"===t.tagName||si(t,e)||li(t,e))}function si(t,e){var n=!0;try{n=document.activeElement!==t}catch(Co){}return n&&t.value!==e}function li(t,e){var n=t.value,a=t._vModifiers;if(i(a)){if(a.number)return m(n)!==m(e);if(a.trim)return n.trim()!==e.trim()}return n!==e}var ci={create:ii,update:ii},ui=M((function(t){var e={},n=/;(?![^(]*\))/g,a=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(a);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function hi(t){var e=di(t.style);return t.staticStyle?L(t.staticStyle,e):e}function di(t){return Array.isArray(t)?T(t):"string"===typeof t?ui(t):t}function fi(t,e){var n,a={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=hi(r.data))&&L(a,n)}(n=hi(t.data))&&L(a,n);var i=t;while(i=i.parent)i.data&&(n=hi(i.data))&&L(a,n);return a}var pi,vi=/^--/,mi=/\s*!important$/,gi=function(t,e,n){if(vi.test(e))t.style.setProperty(e,n);else if(mi.test(n))t.style.setProperty(O(e),n.replace(mi,""),"important");else{var a=yi(e);if(Array.isArray(n))for(var r=0,i=n.length;r<i;r++)t.style[a]=n[r];else t.style[a]=n}},bi=["Webkit","Moz","ms"],yi=M((function(t){if(pi=pi||document.createElement("div").style,t=V(t),"filter"!==t&&t in pi)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<bi.length;n++){var a=bi[n]+e;if(a in pi)return a}}));function zi(t,e){var n=e.data,a=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(a.staticStyle)&&r(a.style))){var o,s,l=e.elm,c=a.staticStyle,u=a.normalizedStyle||a.style||{},h=c||u,d=di(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?L({},d):d;var f=fi(e,!0);for(s in h)r(f[s])&&gi(l,s,"");for(s in f)o=f[s],o!==h[s]&&gi(l,s,null==o?"":o)}}var wi={create:zi,update:zi},Mi=/\s+/;function Ai(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Mi).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Vi(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Mi).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",a=" "+e+" ";while(n.indexOf(a)>=0)n=n.replace(a," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Ci(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&L(e,Hi(t.name||"v")),L(e,t),e}return"string"===typeof t?Hi(t):void 0}}var Hi=M((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Oi=J&&!nt,Ii="transition",Si="animation",ki="transition",Bi="transitionend",Li="animation",Ti="animationend";Oi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ki="WebkitTransition",Bi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Li="WebkitAnimation",Ti="webkitAnimationEnd"));var Ei=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Pi(t){Ei((function(){Ei(t)}))}function _i(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ai(t,e))}function xi(t,e){t._transitionClasses&&y(t._transitionClasses,e),Vi(t,e)}function Fi(t,e,n){var a=ji(t,e),r=a.type,i=a.timeout,o=a.propCount;if(!r)return n();var s=r===Ii?Bi:Ti,l=0,c=function(){t.removeEventListener(s,u),n()},u=function(e){e.target===t&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),i+1),t.addEventListener(s,u)}var Di=/\b(transform|all)(,|$)/;function ji(t,e){var n,a=window.getComputedStyle(t),r=(a[ki+"Delay"]||"").split(", "),i=(a[ki+"Duration"]||"").split(", "),o=Ni(r,i),s=(a[Li+"Delay"]||"").split(", "),l=(a[Li+"Duration"]||"").split(", "),c=Ni(s,l),u=0,h=0;e===Ii?o>0&&(n=Ii,u=o,h=i.length):e===Si?c>0&&(n=Si,u=c,h=l.length):(u=Math.max(o,c),n=u>0?o>c?Ii:Si:null,h=n?n===Ii?i.length:l.length:0);var d=n===Ii&&Di.test(a[ki+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Ni(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Ri(e)+Ri(t[n])})))}function Ri(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function $i(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var a=Ci(t.data.transition);if(!r(a)&&!i(n._enterCb)&&1===n.nodeType){var o=a.css,s=a.type,l=a.enterClass,u=a.enterToClass,h=a.enterActiveClass,d=a.appearClass,f=a.appearToClass,p=a.appearActiveClass,v=a.beforeEnter,g=a.enter,b=a.afterEnter,y=a.enterCancelled,z=a.beforeAppear,w=a.appear,M=a.afterAppear,A=a.appearCancelled,V=a.duration,C=Ln,H=Ln.$vnode;while(H&&H.parent)C=H.context,H=H.parent;var O=!C._isMounted||!t.isRootInsert;if(!O||w||""===w){var I=O&&d?d:l,S=O&&p?p:h,k=O&&f?f:u,B=O&&z||v,L=O&&"function"===typeof w?w:g,T=O&&M||b,E=O&&A||y,P=m(c(V)?V.enter:V);0;var _=!1!==o&&!nt,x=qi(L),F=n._enterCb=D((function(){_&&(xi(n,k),xi(n,S)),F.cancelled?(_&&xi(n,I),E&&E(n)):T&&T(n),n._enterCb=null}));t.data.show||Ae(t,"insert",(function(){var e=n.parentNode,a=e&&e._pending&&e._pending[t.key];a&&a.tag===t.tag&&a.elm._leaveCb&&a.elm._leaveCb(),L&&L(n,F)})),B&&B(n),_&&(_i(n,I),_i(n,S),Pi((function(){xi(n,I),F.cancelled||(_i(n,k),x||(Gi(P)?setTimeout(F,P):Fi(n,s,F)))}))),t.data.show&&(e&&e(),L&&L(n,F)),_||x||F()}}}function Ui(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var a=Ci(t.data.transition);if(r(a)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var o=a.css,s=a.type,l=a.leaveClass,u=a.leaveToClass,h=a.leaveActiveClass,d=a.beforeLeave,f=a.leave,p=a.afterLeave,v=a.leaveCancelled,g=a.delayLeave,b=a.duration,y=!1!==o&&!nt,z=qi(f),w=m(c(b)?b.leave:b);0;var M=n._leaveCb=D((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(xi(n,u),xi(n,h)),M.cancelled?(y&&xi(n,l),v&&v(n)):(e(),p&&p(n)),n._leaveCb=null}));g?g(A):A()}function A(){M.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&(_i(n,l),_i(n,h),Pi((function(){xi(n,l),M.cancelled||(_i(n,u),z||(Gi(w)?setTimeout(M,w):Fi(n,s,M)))}))),f&&f(n,M),y||z||M())}}function Gi(t){return"number"===typeof t&&!isNaN(t)}function qi(t){if(r(t))return!1;var e=t.fns;return i(e)?qi(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Wi(t,e){!0!==e.data.show&&$i(e)}var Ki=J?{create:Wi,activate:Wi,remove:function(t,e){!0!==t.data.show?Ui(t,e):e()}}:{},Yi=[Gr,Kr,ri,ci,wi,Ki],Xi=Yi.concat(Nr),Ji=Tr({nodeOps:Cr,modules:Xi});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&io(t,"input")}));var Zi={inserted:function(t,e,n,a){"select"===n.tag?(a.elm&&!a.elm._vOptions?Ae(n,"postpatch",(function(){Zi.componentUpdated(t,e,n)})):Qi(t,e,n.context),t._vOptions=[].map.call(t.options,no)):("textarea"===n.tag||hr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ao),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Qi(t,e,n.context);var a=t._vOptions,r=t._vOptions=[].map.call(t.options,no);if(r.some((function(t,e){return!x(t,a[e])}))){var i=t.multiple?e.value.some((function(t){return eo(t,r)})):e.value!==e.oldValue&&eo(e.value,r);i&&io(t,"change")}}}};function Qi(t,e,n){to(t,e,n),(et||at)&&setTimeout((function(){to(t,e,n)}),0)}function to(t,e,n){var a=e.value,r=t.multiple;if(!r||Array.isArray(a)){for(var i,o,s=0,l=t.options.length;s<l;s++)if(o=t.options[s],r)i=F(a,no(o))>-1,o.selected!==i&&(o.selected=i);else if(x(no(o),a))return void(t.selectedIndex!==s&&(t.selectedIndex=s));r||(t.selectedIndex=-1)}}function eo(t,e){return e.every((function(e){return!x(e,t)}))}function no(t){return"_value"in t?t._value:t.value}function ao(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,io(t.target,"input"))}function io(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function oo(t){return!t.componentInstance||t.data&&t.data.transition?t:oo(t.componentInstance._vnode)}var so={bind:function(t,e,n){var a=e.value;n=oo(n);var r=n.data&&n.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;a&&r?(n.data.show=!0,$i(n,(function(){t.style.display=i}))):t.style.display=a?i:"none"},update:function(t,e,n){var a=e.value,r=e.oldValue;if(!a!==!r){n=oo(n);var i=n.data&&n.data.transition;i?(n.data.show=!0,a?$i(n,(function(){t.style.display=t.__vOriginalDisplay})):Ui(n,(function(){t.style.display="none"}))):t.style.display=a?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,a,r){r||(t.style.display=t.__vOriginalDisplay)}},lo={model:Zi,show:so},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(Cn(e.children)):t}function ho(t){var e={},n=t.$options;for(var a in n.propsData)e[a]=t[a];var r=n._parentListeners;for(var i in r)e[V(i)]=r[i];return e}function fo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function po(t){while(t=t.parent)if(t.data.transition)return!0}function vo(t,e){return e.key===t.key&&e.tag===t.tag}var mo=function(t){return t.tag||Pe(t)},go=function(t){return"show"===t.name},bo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var a=this.mode;0;var r=n[0];if(po(this.$vnode))return r;var i=uo(r);if(!i)return r;if(this._leaving)return fo(t,r);var o="__transition-"+this._uid+"-";i.key=null==i.key?i.isComment?o+"comment":o+i.tag:l(i.key)?0===String(i.key).indexOf(o)?i.key:o+i.key:i.key;var s=(i.data||(i.data={})).transition=ho(this),c=this._vnode,u=uo(c);if(i.data.directives&&i.data.directives.some(go)&&(i.data.show=!0),u&&u.data&&!vo(i,u)&&!Pe(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=L({},s);if("out-in"===a)return this._leaving=!0,Ae(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),fo(t,r);if("in-out"===a){if(Pe(i))return c;var d,f=function(){d()};Ae(s,"afterEnter",f),Ae(s,"enterCancelled",f),Ae(h,"delayLeave",(function(t){d=t}))}}return r}}},yo=L({tag:String,moveClass:String},co);delete yo.mode;var zo={props:yo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,a){var r=Tn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,a)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),a=this.prevChildren=this.children,r=this.$slots.default||[],i=this.children=[],o=ho(this),s=0;s<r.length;s++){var l=r[s];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))i.push(l),n[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(a){for(var c=[],u=[],h=0;h<a.length;h++){var d=a[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?c.push(d):u.push(d)}this.kept=t(e,null,c),this.removed=u}return t(e,null,i)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wo),t.forEach(Mo),t.forEach(Ao),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,a=n.style;_i(n,e),a.transform=a.WebkitTransform=a.transitionDuration="",n.addEventListener(Bi,n._moveCb=function t(a){a&&a.target!==n||a&&!/transform$/.test(a.propertyName)||(n.removeEventListener(Bi,t),n._moveCb=null,xi(n,e))})}})))},methods:{hasMove:function(t,e){if(!Oi)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Vi(n,t)})),Ai(n,e),n.style.display="none",this.$el.appendChild(n);var a=ji(n);return this.$el.removeChild(n),this._hasMove=a.hasTransform}}};function wo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Mo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ao(t){var e=t.data.pos,n=t.data.newPos,a=e.left-n.left,r=e.top-n.top;if(a||r){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+a+"px,"+r+"px)",i.transitionDuration="0s"}}var Vo={Transition:bo,TransitionGroup:zo};Ca.config.mustUseProp=Ra,Ca.config.isReservedTag=sr,Ca.config.isReservedAttr=ja,Ca.config.getTagNamespace=lr,Ca.config.isUnknownElement=ur,L(Ca.options.directives,lo),L(Ca.options.components,Vo),Ca.prototype.__patch__=J?Ji:E,Ca.prototype.$mount=function(t,e){return t=t&&J?dr(t):void 0,_n(this,t,e)},J&&setTimeout((function(){$.devtools&&ut&&ut.emit("init",Ca)}),0),e["default"]=Ca},4665:function(t,e,n){"use strict";n.d(e,{Se:function(){return P},nv:function(){return _},rn:function(){return T}});n(1703);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function a(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:a});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[a].concat(t.init):a,n.call(this,t)}}function a(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var r="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},i=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){i.emit("vuex:action",t,e)}),{prepend:!0}))}function s(t,e){return t.filter(e)[0]}function l(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=s(e,(function(e){return e.original===t}));if(n)return n.copy;var a=Array.isArray(t)?[]:{};return e.push({original:t,copy:a}),Object.keys(t).forEach((function(n){a[n]=l(t[n],e)})),a}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var f=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(t,e){this._children[t]=e},f.prototype.removeChild=function(t){delete this._children[t]},f.prototype.getChild=function(t){return this._children[t]},f.prototype.hasChild=function(t){return t in this._children},f.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},f.prototype.forEachChild=function(t){c(this._children,t)},f.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},f.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},f.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(f.prototype,p);var v=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var a in n.modules){if(!e.getChild(a))return void 0;m(t.concat(a),e.getChild(a),n.modules[a])}}v.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},v.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},v.prototype.update=function(t){m([],this.root,t)},v.prototype.register=function(t,e,n){var a=this;void 0===n&&(n=!0);var r=new f(e,n);if(0===t.length)this.root=r;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],r)}e.modules&&c(e.modules,(function(e,r){a.register(t.concat(r),e,n)}))},v.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],a=e.getChild(n);a&&a.runtime&&e.removeChild(n)},v.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var g;var b=function(t){var e=this;void 0===t&&(t={}),!g&&"undefined"!==typeof window&&window.Vue&&L(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var a=t.strict;void 0===a&&(a=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var r=this,i=this,s=i.dispatch,l=i.commit;this.dispatch=function(t,e){return s.call(r,t,e)},this.commit=function(t,e,n){return l.call(r,t,e,n)},this.strict=a;var c=this._modules.root.state;A(this,c,[],this._modules.root),M(this,c),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:g.config.devtools;u&&o(this)},y={state:{configurable:!0}};function z(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;A(t,n,[],t._modules.root,!0),M(t,n,e)}function M(t,e,n){var a=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};c(r,(function(e,n){i[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=g.config.silent;g.config.silent=!0,t._vm=new g({data:{$$state:e},computed:i}),g.config.silent=o,t.strict&&S(t),a&&(n&&t._withCommit((function(){a._data.$$state=null})),g.nextTick((function(){return a.$destroy()})))}function A(t,e,n,a,r){var i=!n.length,o=t._modules.getNamespace(n);if(a.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=a),!i&&!r){var s=k(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit((function(){g.set(s,l,a.state)}))}var c=a.context=V(t,o,n);a.forEachMutation((function(e,n){var a=o+n;H(t,a,e,c)})),a.forEachAction((function(e,n){var a=e.root?n:o+n,r=e.handler||e;O(t,a,r,c)})),a.forEachGetter((function(e,n){var a=o+n;I(t,a,e,c)})),a.forEachChild((function(a,i){A(t,e,n.concat(i),a,r)}))}function V(t,e,n){var a=""===e,r={dispatch:a?t.dispatch:function(n,a,r){var i=B(n,a,r),o=i.payload,s=i.options,l=i.type;return s&&s.root||(l=e+l),t.dispatch(l,o)},commit:a?t.commit:function(n,a,r){var i=B(n,a,r),o=i.payload,s=i.options,l=i.type;s&&s.root||(l=e+l),t.commit(l,o,s)}};return Object.defineProperties(r,{getters:{get:a?function(){return t.getters}:function(){return C(t,e)}},state:{get:function(){return k(t.state,n)}}}),r}function C(t,e){if(!t._makeLocalGettersCache[e]){var n={},a=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,a)===e){var i=r.slice(a);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function H(t,e,n,a){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,a.state,e)}))}function O(t,e,n,a){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:a.dispatch,commit:a.commit,getters:a.getters,state:a.state,rootGetters:t.getters,rootState:t.state},e);return h(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function I(t,e,n,a){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(a.state,a.getters,t.state,t.getters)})}function S(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function k(t,e){return e.reduce((function(t,e){return t[e]}),t)}function B(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function L(t){g&&t===g||(g=t,a(g))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},b.prototype.commit=function(t,e,n){var a=this,r=B(t,e,n),i=r.type,o=r.payload,s=(r.options,{type:i,payload:o}),l=this._mutations[i];l&&(this._withCommit((function(){l.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(s,a.state)})))},b.prototype.dispatch=function(t,e){var n=this,a=B(t,e),r=a.type,i=a.payload,o={type:r,payload:i},s=this._actions[r];if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(c){0}var l=s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i);return new Promise((function(t,e){l.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(c){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(c){0}e(t)}))}))}},b.prototype.subscribe=function(t,e){return z(t,this._subscribers,e)},b.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return z(n,this._actionSubscribers,e)},b.prototype.watch=function(t,e,n){var a=this;return this._watcherVM.$watch((function(){return t(a.state,a.getters)}),e,n)},b.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},b.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),A(this,this.state,t,this._modules.get(t),n.preserveState),M(this,this.state)},b.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=k(e.state,t.slice(0,-1));g.delete(n,t[t.length-1])})),w(this)},b.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},b.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},b.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(b.prototype,y);var T=j((function(t,e){var n={};return F(e).forEach((function(e){var a=e.key,r=e.val;n[a]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var a=N(this.$store,"mapState",t);if(!a)return;e=a.context.state,n=a.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[a].vuex=!0})),n})),E=j((function(t,e){var n={};return F(e).forEach((function(e){var a=e.key,r=e.val;n[a]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var a=this.$store.commit;if(t){var i=N(this.$store,"mapMutations",t);if(!i)return;a=i.context.commit}return"function"===typeof r?r.apply(this,[a].concat(e)):a.apply(this.$store,[r].concat(e))}})),n})),P=j((function(t,e){var n={};return F(e).forEach((function(e){var a=e.key,r=e.val;r=t+r,n[a]=function(){if(!t||N(this.$store,"mapGetters",t))return this.$store.getters[r]},n[a].vuex=!0})),n})),_=j((function(t,e){var n={};return F(e).forEach((function(e){var a=e.key,r=e.val;n[a]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var a=this.$store.dispatch;if(t){var i=N(this.$store,"mapActions",t);if(!i)return;a=i.context.dispatch}return"function"===typeof r?r.apply(this,[a].concat(e)):a.apply(this.$store,[r].concat(e))}})),n})),x=function(t){return{mapState:T.bind(null,t),mapGetters:P.bind(null,t),mapMutations:E.bind(null,t),mapActions:_.bind(null,t)}};function F(t){return D(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function D(t){return Array.isArray(t)||u(t)}function j(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function N(t,e,n){var a=t._modulesNamespaceMap[n];return a}function R(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var a=t.transformer;void 0===a&&(a=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var i=t.actionFilter;void 0===i&&(i=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var s=t.logMutations;void 0===s&&(s=!0);var c=t.logActions;void 0===c&&(c=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var h=l(t.state);"undefined"!==typeof u&&(s&&t.subscribe((function(t,i){var o=l(i);if(n(t,h,o)){var s=G(),c=r(t),d="mutation "+t.type+s;$(u,d,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",a(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",c),u.log("%c next state","color: #4CAF50; font-weight: bold",a(o)),U(u)}h=o})),c&&t.subscribeAction((function(t,n){if(i(t,n)){var a=G(),r=o(t),s="action "+t.type+a;$(u,s,e),u.log("%c action","color: #03A9F4; font-weight: bold",r),U(u)}})))}}function $(t,e,n){var a=n?t.groupCollapsed:t.group;try{a.call(t,e)}catch(r){t.log(e)}}function U(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function G(){var t=new Date;return" @ "+W(t.getHours(),2)+":"+W(t.getMinutes(),2)+":"+W(t.getSeconds(),2)+"."+W(t.getMilliseconds(),3)}function q(t,e){return new Array(e+1).join(t)}function W(t,e){return q("0",e-t.toString().length)+t}var K={Store:b,install:L,version:"3.6.2",mapState:T,mapMutations:E,mapGetters:P,mapActions:_,createNamespacedHelpers:x,createLogger:R};e["ZP"]=K},5659:function(t,e,n){"use strict";n.d(e,{Jn:function(){return q},KN:function(){return Y},Mq:function(){return K},Xd:function(){return N},ZF:function(){return W},qX:function(){return R}});var a=n(7805),r=n(7366),i=n(3536);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(s(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function s(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const l="@firebase/app",c="0.7.22",u=new r.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",g="@firebase/auth-compat",b="@firebase/database",y="@firebase/database-compat",z="@firebase/functions",w="@firebase/functions-compat",M="@firebase/installations",A="@firebase/installations-compat",V="@firebase/messaging",C="@firebase/messaging-compat",H="@firebase/performance",O="@firebase/performance-compat",I="@firebase/remote-config",S="@firebase/remote-config-compat",k="@firebase/storage",B="@firebase/storage-compat",L="@firebase/firestore",T="@firebase/firestore-compat",E="firebase",P="9.7.0",_="[DEFAULT]",x={[l]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[g]:"fire-auth-compat",[b]:"fire-rtdb",[y]:"fire-rtdb-compat",[z]:"fire-fn",[w]:"fire-fn-compat",[M]:"fire-iid",[A]:"fire-iid-compat",[V]:"fire-fcm",[C]:"fire-fcm-compat",[H]:"fire-perf",[O]:"fire-perf-compat",[I]:"fire-rc",[S]:"fire-rc-compat",[k]:"fire-gcs",[B]:"fire-gcs-compat",[L]:"fire-fst",[T]:"fire-fst-compat","fire-js":"fire-js",[E]:"fire-js-all"},F=new Map,D=new Map;function j(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function N(t){const e=t.name;if(D.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;D.set(e,t);for(const n of F.values())j(n,t);return!0}function R(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},U=new i.LL("app","Firebase",$);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=P;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:_,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw U.create("bad-app-name",{appName:String(r)});const o=F.get(r);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(n,o.config))return o;throw U.create("duplicate-app",{appName:r})}const s=new a.H0(r);for(const a of D.values())s.addComponent(a);const l=new G(t,n,s);return F.set(r,l),l}function K(t=_){const e=F.get(t);if(!e)throw U.create("no-app",{appName:t});return e}function Y(t,e,n){var r;let i=null!==(r=x[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}N(new a.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X="firebase-heartbeat-database",J=1,Z="firebase-heartbeat-store";let Q=null;function tt(){return Q||(Q=(0,i.X3)(X,J,((t,e)=>{switch(e){case 0:t.createObjectStore(Z)}})).catch((t=>{throw U.create("storage-open",{originalErrorMessage:t.message})}))),Q}async function et(t){try{const e=await tt();return e.transaction(Z).objectStore(Z).get(at(t))}catch(e){throw U.create("storage-get",{originalErrorMessage:e.message})}}async function nt(t,e){try{const n=await tt(),a=n.transaction(Z,"readwrite"),r=a.objectStore(Z);return await r.put(e,at(t)),a.complete}catch(n){throw U.create("storage-set",{originalErrorMessage:n.message})}}function at(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=1024,it=2592e6;class ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ct(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=st();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=it})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=st(),{heartbeatsToSend:e,unsentEntries:n}=lt(this._heartbeatsCache.heartbeats),a=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function st(){const t=new Date;return t.toISOString().substring(0,10)}function lt(t,e=rt){const n=[];let a=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),ut(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ut(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class ct{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await et(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ut(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){N(new a.wA("platform-logger",(t=>new o(t)),"PRIVATE")),N(new a.wA("heartbeat",(t=>new ot(t)),"PRIVATE")),Y(l,c,t),Y(l,c,"esm2017"),Y("fire-js","")}ht("")},7805:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return r}});n(1703);var a=n(3536);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new a.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),a=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(a)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:a});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&i.resolve(a)}return a}onInit(t,e){var n;const a=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&t(i,a),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(a){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(a){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===i?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},7366:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return r}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,s={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const a=(new Date).toISOString(),r=s[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${a}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.36078716.js.map