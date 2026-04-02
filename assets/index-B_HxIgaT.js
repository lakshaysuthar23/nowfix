(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function d(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(h){if(h.ep)return;h.ep=!0;const p=d(h);fetch(h.href,p)}})();var Co={exports:{}},Rn={};var Jd;function e0(){if(Jd)return Rn;Jd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(o,h,p){var b=null;if(p!==void 0&&(b=""+p),h.key!==void 0&&(b=""+h.key),"key"in h){p={};for(var w in h)w!=="key"&&(p[w]=h[w])}else p=h;return h=p.ref,{$$typeof:r,type:o,key:b,ref:h!==void 0?h:null,props:p}}return Rn.Fragment=f,Rn.jsx=d,Rn.jsxs=d,Rn}var Fd;function t0(){return Fd||(Fd=1,Co.exports=e0()),Co.exports}var c=t0(),wo={exports:{}},$={};var Wd;function a0(){if(Wd)return $;Wd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),B=Symbol.iterator;function U(y){return y===null||typeof y!="object"?null:(y=B&&y[B]||y["@@iterator"],typeof y=="function"?y:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,H={};function K(y,D,Y){this.props=y,this.context=D,this.refs=H,this.updater=Y||Z}K.prototype.isReactComponent={},K.prototype.setState=function(y,D){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,D,"setState")},K.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function I(){}I.prototype=K.prototype;function J(y,D,Y){this.props=y,this.context=D,this.refs=H,this.updater=Y||Z}var ye=J.prototype=new I;ye.constructor=J,k(ye,K.prototype),ye.isPureReactComponent=!0;var be=Array.isArray;function Te(){}var W={H:null,A:null,T:null,S:null},Ne=Object.prototype.hasOwnProperty;function Ve(y,D,Y){var G=Y.ref;return{$$typeof:r,type:y,key:D,ref:G!==void 0?G:null,props:Y}}function Mt(y,D){return Ve(y.type,D,y.props)}function mt(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function Ke(y){var D={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Y){return D[Y]})}var _t=/\/+/g;function pt(y,D){return typeof y=="object"&&y!==null&&y.key!=null?Ke(""+y.key):D.toString(36)}function Oe(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Te,Te):(y.status="pending",y.then(function(D){y.status==="pending"&&(y.status="fulfilled",y.value=D)},function(D){y.status==="pending"&&(y.status="rejected",y.reason=D)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function R(y,D,Y,G,P){var ae=typeof y;(ae==="undefined"||ae==="boolean")&&(y=null);var fe=!1;if(y===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(y.$$typeof){case r:case f:fe=!0;break;case M:return fe=y._init,R(fe(y._payload),D,Y,G,P)}}if(fe)return P=P(y),fe=G===""?"."+pt(y,0):G,be(P)?(Y="",fe!=null&&(Y=fe.replace(_t,"$&/")+"/"),R(P,D,Y,"",function(Ul){return Ul})):P!=null&&(mt(P)&&(P=Mt(P,Y+(P.key==null||y&&y.key===P.key?"":(""+P.key).replace(_t,"$&/")+"/")+fe)),D.push(P)),1;fe=0;var Fe=G===""?".":G+":";if(be(y))for(var Re=0;Re<y.length;Re++)G=y[Re],ae=Fe+pt(G,Re),fe+=R(G,D,Y,ae,P);else if(Re=U(y),typeof Re=="function")for(y=Re.call(y),Re=0;!(G=y.next()).done;)G=G.value,ae=Fe+pt(G,Re++),fe+=R(G,D,Y,ae,P);else if(ae==="object"){if(typeof y.then=="function")return R(Oe(y),D,Y,G,P);throw D=String(y),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return fe}function L(y,D,Y){if(y==null)return y;var G=[],P=0;return R(y,G,"","",function(ae){return D.call(Y,ae,P++)}),G}function F(y){if(y._status===-1){var D=y._result;D=D(),D.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y)},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y)}),y._status===-1&&(y._status=0,y._result=D)}if(y._status===1)return y._result.default;throw y._result}var me=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},xe={map:L,forEach:function(y,D,Y){L(y,function(){D.apply(this,arguments)},Y)},count:function(y){var D=0;return L(y,function(){D++}),D},toArray:function(y){return L(y,function(D){return D})||[]},only:function(y){if(!mt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return $.Activity=x,$.Children=xe,$.Component=K,$.Fragment=d,$.Profiler=h,$.PureComponent=J,$.StrictMode=o,$.Suspense=E,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,$.__COMPILER_RUNTIME={__proto__:null,c:function(y){return W.H.useMemoCache(y)}},$.cache=function(y){return function(){return y.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(y,D,Y){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var G=k({},y.props),P=y.key;if(D!=null)for(ae in D.key!==void 0&&(P=""+D.key),D)!Ne.call(D,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&D.ref===void 0||(G[ae]=D[ae]);var ae=arguments.length-2;if(ae===1)G.children=Y;else if(1<ae){for(var fe=Array(ae),Fe=0;Fe<ae;Fe++)fe[Fe]=arguments[Fe+2];G.children=fe}return Ve(y.type,P,G)},$.createContext=function(y){return y={$$typeof:b,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:p,_context:y},y},$.createElement=function(y,D,Y){var G,P={},ae=null;if(D!=null)for(G in D.key!==void 0&&(ae=""+D.key),D)Ne.call(D,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(P[G]=D[G]);var fe=arguments.length-2;if(fe===1)P.children=Y;else if(1<fe){for(var Fe=Array(fe),Re=0;Re<fe;Re++)Fe[Re]=arguments[Re+2];P.children=Fe}if(y&&y.defaultProps)for(G in fe=y.defaultProps,fe)P[G]===void 0&&(P[G]=fe[G]);return Ve(y,ae,P)},$.createRef=function(){return{current:null}},$.forwardRef=function(y){return{$$typeof:w,render:y}},$.isValidElement=mt,$.lazy=function(y){return{$$typeof:M,_payload:{_status:-1,_result:y},_init:F}},$.memo=function(y,D){return{$$typeof:g,type:y,compare:D===void 0?null:D}},$.startTransition=function(y){var D=W.T,Y={};W.T=Y;try{var G=y(),P=W.S;P!==null&&P(Y,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Te,me)}catch(ae){me(ae)}finally{D!==null&&Y.types!==null&&(D.types=Y.types),W.T=D}},$.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},$.use=function(y){return W.H.use(y)},$.useActionState=function(y,D,Y){return W.H.useActionState(y,D,Y)},$.useCallback=function(y,D){return W.H.useCallback(y,D)},$.useContext=function(y){return W.H.useContext(y)},$.useDebugValue=function(){},$.useDeferredValue=function(y,D){return W.H.useDeferredValue(y,D)},$.useEffect=function(y,D){return W.H.useEffect(y,D)},$.useEffectEvent=function(y){return W.H.useEffectEvent(y)},$.useId=function(){return W.H.useId()},$.useImperativeHandle=function(y,D,Y){return W.H.useImperativeHandle(y,D,Y)},$.useInsertionEffect=function(y,D){return W.H.useInsertionEffect(y,D)},$.useLayoutEffect=function(y,D){return W.H.useLayoutEffect(y,D)},$.useMemo=function(y,D){return W.H.useMemo(y,D)},$.useOptimistic=function(y,D){return W.H.useOptimistic(y,D)},$.useReducer=function(y,D,Y){return W.H.useReducer(y,D,Y)},$.useRef=function(y){return W.H.useRef(y)},$.useState=function(y){return W.H.useState(y)},$.useSyncExternalStore=function(y,D,Y){return W.H.useSyncExternalStore(y,D,Y)},$.useTransition=function(){return W.H.useTransition()},$.version="19.2.4",$}var $d;function Lo(){return $d||($d=1,wo.exports=a0()),wo.exports}var C=Lo(),No={exports:{}},Mn={},Ro={exports:{}},Mo={};var Id;function l0(){return Id||(Id=1,(function(r){function f(R,L){var F=R.length;R.push(L);e:for(;0<F;){var me=F-1>>>1,xe=R[me];if(0<h(xe,L))R[me]=L,R[F]=xe,F=me;else break e}}function d(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var L=R[0],F=R.pop();if(F!==L){R[0]=F;e:for(var me=0,xe=R.length,y=xe>>>1;me<y;){var D=2*(me+1)-1,Y=R[D],G=D+1,P=R[G];if(0>h(Y,F))G<xe&&0>h(P,Y)?(R[me]=P,R[G]=F,me=G):(R[me]=Y,R[D]=F,me=D);else if(G<xe&&0>h(P,F))R[me]=P,R[G]=F,me=G;else break e}}return L}function h(R,L){var F=R.sortIndex-L.sortIndex;return F!==0?F:R.id-L.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var b=Date,w=b.now();r.unstable_now=function(){return b.now()-w}}var E=[],g=[],M=1,x=null,B=3,U=!1,Z=!1,k=!1,H=!1,K=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ye(R){for(var L=d(g);L!==null;){if(L.callback===null)o(g);else if(L.startTime<=R)o(g),L.sortIndex=L.expirationTime,f(E,L);else break;L=d(g)}}function be(R){if(k=!1,ye(R),!Z)if(d(E)!==null)Z=!0,Te||(Te=!0,Ke());else{var L=d(g);L!==null&&Oe(be,L.startTime-R)}}var Te=!1,W=-1,Ne=5,Ve=-1;function Mt(){return H?!0:!(r.unstable_now()-Ve<Ne)}function mt(){if(H=!1,Te){var R=r.unstable_now();Ve=R;var L=!0;try{e:{Z=!1,k&&(k=!1,I(W),W=-1),U=!0;var F=B;try{t:{for(ye(R),x=d(E);x!==null&&!(x.expirationTime>R&&Mt());){var me=x.callback;if(typeof me=="function"){x.callback=null,B=x.priorityLevel;var xe=me(x.expirationTime<=R);if(R=r.unstable_now(),typeof xe=="function"){x.callback=xe,ye(R),L=!0;break t}x===d(E)&&o(E),ye(R)}else o(E);x=d(E)}if(x!==null)L=!0;else{var y=d(g);y!==null&&Oe(be,y.startTime-R),L=!1}}break e}finally{x=null,B=F,U=!1}L=void 0}}finally{L?Ke():Te=!1}}}var Ke;if(typeof J=="function")Ke=function(){J(mt)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,pt=_t.port2;_t.port1.onmessage=mt,Ke=function(){pt.postMessage(null)}}else Ke=function(){K(mt,0)};function Oe(R,L){W=K(function(){R(r.unstable_now())},L)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return B},r.unstable_next=function(R){switch(B){case 1:case 2:case 3:var L=3;break;default:L=B}var F=B;B=L;try{return R()}finally{B=F}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=B;B=R;try{return L()}finally{B=F}},r.unstable_scheduleCallback=function(R,L,F){var me=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?me+F:me):F=me,R){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=F+xe,R={id:M++,callback:L,priorityLevel:R,startTime:F,expirationTime:xe,sortIndex:-1},F>me?(R.sortIndex=F,f(g,R),d(E)===null&&R===d(g)&&(k?(I(W),W=-1):k=!0,Oe(be,F-me))):(R.sortIndex=xe,f(E,R),Z||U||(Z=!0,Te||(Te=!0,Ke()))),R},r.unstable_shouldYield=Mt,r.unstable_wrapCallback=function(R){var L=B;return function(){var F=B;B=L;try{return R.apply(this,arguments)}finally{B=F}}}})(Mo)),Mo}var Pd;function n0(){return Pd||(Pd=1,Ro.exports=l0()),Ro.exports}var _o={exports:{}},Je={};var eh;function i0(){if(eh)return Je;eh=1;var r=Lo();function f(E){var g="https://react.dev/errors/"+E;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)g+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+E+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function p(E,g,M){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:x==null?null:""+x,children:E,containerInfo:g,implementation:M}}var b=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(E,g){if(E==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Je.createPortal=function(E,g){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(f(299));return p(E,g,null,M)},Je.flushSync=function(E){var g=b.T,M=o.p;try{if(b.T=null,o.p=2,E)return E()}finally{b.T=g,o.p=M,o.d.f()}},Je.preconnect=function(E,g){typeof E=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(E,g))},Je.prefetchDNS=function(E){typeof E=="string"&&o.d.D(E)},Je.preinit=function(E,g){if(typeof E=="string"&&g&&typeof g.as=="string"){var M=g.as,x=w(M,g.crossOrigin),B=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;M==="style"?o.d.S(E,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:B,fetchPriority:U}):M==="script"&&o.d.X(E,{crossOrigin:x,integrity:B,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Je.preinitModule=function(E,g){if(typeof E=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var M=w(g.as,g.crossOrigin);o.d.M(E,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(E)},Je.preload=function(E,g){if(typeof E=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var M=g.as,x=w(M,g.crossOrigin);o.d.L(E,M,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Je.preloadModule=function(E,g){if(typeof E=="string")if(g){var M=w(g.as,g.crossOrigin);o.d.m(E,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(E)},Je.requestFormReset=function(E){o.d.r(E)},Je.unstable_batchedUpdates=function(E,g){return E(g)},Je.useFormState=function(E,g,M){return b.H.useFormState(E,g,M)},Je.useFormStatus=function(){return b.H.useHostTransitionStatus()},Je.version="19.2.4",Je}var th;function u0(){if(th)return _o.exports;th=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),_o.exports=i0(),_o.exports}var ah;function r0(){if(ah)return Mn;ah=1;var r=n0(),f=Lo(),d=u0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return E(n),e;if(i===l)return E(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function M(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=M(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,B=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),Ve=Symbol.for("react.activity"),Mt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case K:return"Profiler";case H:return"StrictMode";case be:return"Suspense";case Te:return"SuspenseList";case Ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case J:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:pt(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return pt(e(t))}catch{}}return null}var Oe=Array.isArray,R=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},me=[],xe=-1;function y(e){return{current:e}}function D(e){0>xe||(e.current=me[xe],me[xe]=null,xe--)}function Y(e,t){xe++,me[xe]=e.current,e.current=t}var G=y(null),P=y(null),ae=y(null),fe=y(null);function Fe(e,t){switch(Y(ae,t),Y(P,e),Y(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vd(t),e=yd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(G),Y(G,e)}function Re(){D(G),D(P),D(ae)}function Ul(e){e.memoizedState!==null&&Y(fe,e);var t=G.current,a=yd(t,e.type);t!==a&&(Y(P,e),Y(G,a))}function Ln(e){P.current===e&&(D(G),D(P)),fe.current===e&&(D(fe),An._currentValue=F)}var ou,Vo;function Ra(e){if(ou===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ou=t&&t[1]||"",Vo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ou+e+Vo}var cu=!1;function su(e,t){if(!e||cu)return"";cu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var T=A}Reflect.construct(e,[],O)}else{try{O.call()}catch(A){T=A}e.call(O.prototype)}}else{try{throw Error()}catch(A){T=A}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var m=u.split(`
`),z=s.split(`
`);for(n=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(l===m.length||n===z.length)for(l=m.length-1,n=z.length-1;1<=l&&0<=n&&m[l]!==z[n];)n--;for(;1<=l&&0<=n;l--,n--)if(m[l]!==z[n]){if(l!==1||n!==1)do if(l--,n--,0>n||m[l]!==z[n]){var N=`
`+m[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=n);break}}}finally{cu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ra(a):""}function Mh(e,t){switch(e.tag){case 26:case 27:case 5:return Ra(e.type);case 16:return Ra("Lazy");case 13:return e.child!==t&&t!==null?Ra("Suspense Fallback"):Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 15:return su(e.type,!1);case 11:return su(e.type.render,!1);case 1:return su(e.type,!0);case 31:return Ra("Activity");default:return""}}function Ko(e){try{var t="",a=null;do t+=Mh(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fu=Object.prototype.hasOwnProperty,du=r.unstable_scheduleCallback,hu=r.unstable_cancelCallback,_h=r.unstable_shouldYield,Oh=r.unstable_requestPaint,nt=r.unstable_now,Bh=r.unstable_getCurrentPriorityLevel,Jo=r.unstable_ImmediatePriority,Fo=r.unstable_UserBlockingPriority,Yn=r.unstable_NormalPriority,Dh=r.unstable_LowPriority,Wo=r.unstable_IdlePriority,Uh=r.log,Hh=r.unstable_setDisableYieldValue,Hl=null,it=null;function na(e){if(typeof Uh=="function"&&Hh(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Hl,e)}catch{}}var ut=Math.clz32?Math.clz32:qh,Lh=Math.log,Yh=Math.LN2;function qh(e){return e>>>=0,e===0?32:31-(Lh(e)/Yh|0)|0}var qn=256,kn=262144,Gn=4194304;function Ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Ma(l):(u&=s,u!==0?n=Ma(u):a||(a=s&~e,a!==0&&(n=Ma(a))))):(s=l&~i,s!==0?n=Ma(s):u!==0?n=Ma(u):a||(a=l&~e,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Ll(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function kh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $o(){var e=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),e}function mu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gh(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,m=e.expirationTimes,z=e.hiddenUpdates;for(a=u&~a;0<a;){var N=31-ut(a),O=1<<N;s[N]=0,m[N]=-1;var T=z[N];if(T!==null)for(z[N]=null,N=0;N<T.length;N++){var A=T[N];A!==null&&(A.lane&=-536870913)}a&=~O}l!==0&&Io(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Io(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ut(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Po(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ut(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ec(e,t){var a=t&-t;return a=(a&42)!==0?1:pu(a),(a&(e.suspendedLanes|t))!==0?0:a}function pu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tc(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:kd(e.type))}function ac(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var ia=Math.random().toString(36).slice(2),ke="__reactFiber$"+ia,$e="__reactProps$"+ia,$a="__reactContainer$"+ia,vu="__reactEvents$"+ia,Xh="__reactListeners$"+ia,Qh="__reactHandles$"+ia,lc="__reactResources$"+ia,ql="__reactMarker$"+ia;function yu(e){delete e[ke],delete e[$e],delete e[vu],delete e[Xh],delete e[Qh]}function Ia(e){var t=e[ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[$a]||a[ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Td(e);e!==null;){if(a=e[ke])return a;e=Td(e)}return t}e=a,a=e.parentNode}return null}function Pa(e){if(e=e[ke]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function kl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function el(e){var t=e[lc];return t||(t=e[lc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[ql]=!0}var nc=new Set,ic={};function _a(e,t){tl(e,t),tl(e+"Capture",t)}function tl(e,t){for(ic[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var Zh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uc={},rc={};function Vh(e){return fu.call(rc,e)?!0:fu.call(uc,e)?!1:Zh.test(e)?rc[e]=!0:(uc[e]=!0,!1)}function Qn(e,t,a){if(Vh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bu(e){if(!e._valueTracker){var t=oc(e)?"checked":"value";e._valueTracker=Kh(e,t,""+e[t])}}function cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=oc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jh=/[\n"\\]/g;function vt(e){return e.replace(Jh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xu(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Su(e,u,gt(t)):a!=null?Su(e,u,gt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+gt(s):e.removeAttribute("name")}function sc(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){bu(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),bu(e)}function Su(e,t,a){t==="number"&&Vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function al(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function fc(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function dc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Oe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),bu(e)}function ll(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Fh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function mc(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&hc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&hc(e,i,t[i])}function Eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$h=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return $h.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var ju=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,il=null;function pc(e){var t=Pa(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(xu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[$e]||null;if(!n)throw Error(o(90));xu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&cc(l)}break e;case"textarea":fc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&al(e,!!a.multiple,t,!1)}}}var Tu=!1;function gc(e,t,a){if(Tu)return e(t,a);Tu=!0;try{var l=e(t);return l}finally{if(Tu=!1,(nl!==null||il!==null)&&(Bi(),nl&&(t=nl,e=il,il=nl=null,pc(t),e)))for(t=0;t<e.length;t++)pc(e[t])}}function Gl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[$e]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(kt)try{var Xl={};Object.defineProperty(Xl,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{Au=!1}var ua=null,Cu=null,Jn=null;function vc(){if(Jn)return Jn;var e,t=Cu,a=t.length,l,n="value"in ua?ua.value:ua.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function yc(){return!1}function Ie(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:yc,this.isPropagationStopped=yc,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Ie(Oa),Ql=x({},Oa,{view:0,detail:0}),Ih=Ie(Ql),wu,Nu,Zl,In=x({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(wu=e.screenX-Zl.screenX,Nu=e.screenY-Zl.screenY):Nu=wu=0,Zl=e),wu)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),bc=Ie(In),Ph=x({},In,{dataTransfer:0}),em=Ie(Ph),tm=x({},Ql,{relatedTarget:0}),Ru=Ie(tm),am=x({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Ie(am),nm=x({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),im=Ie(nm),um=x({},Oa,{data:0}),xc=Ie(um),rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cm[e])?!!t[e]:!1}function Mu(){return sm}var fm=x({},Ql,{key:function(e){if(e.key){var t=rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?om[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Ie(fm),hm=x({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=Ie(hm),mm=x({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),pm=Ie(mm),gm=x({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),vm=Ie(gm),ym=x({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Ie(ym),xm=x({},Oa,{newState:0,oldState:0}),Sm=Ie(xm),Em=[9,13,27,32],_u=kt&&"CompositionEvent"in window,Vl=null;kt&&"documentMode"in document&&(Vl=document.documentMode);var jm=kt&&"TextEvent"in window&&!Vl,Ec=kt&&(!_u||Vl&&8<Vl&&11>=Vl),jc=" ",zc=!1;function Tc(e,t){switch(e){case"keyup":return Em.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ul=!1;function zm(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:(zc=!0,jc);case"textInput":return e=t.data,e===jc&&zc?null:e;default:return null}}function Tm(e,t){if(ul)return e==="compositionend"||!_u&&Tc(e,t)?(e=vc(),Jn=Cu=ua=null,ul=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Am[e.type]:t==="textarea"}function wc(e,t,a,l){nl?il?il.push(l):il=[l]:nl=l,t=ki(t,"onChange"),0<t.length&&(a=new $n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Kl=null,Jl=null;function Cm(e){fd(e,0)}function Pn(e){var t=kl(e);if(cc(t))return e}function Nc(e,t){if(e==="change")return t}var Rc=!1;if(kt){var Ou;if(kt){var Bu="oninput"in document;if(!Bu){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Bu=typeof Mc.oninput=="function"}Ou=Bu}else Ou=!1;Rc=Ou&&(!document.documentMode||9<document.documentMode)}function _c(){Kl&&(Kl.detachEvent("onpropertychange",Oc),Jl=Kl=null)}function Oc(e){if(e.propertyName==="value"&&Pn(Jl)){var t=[];wc(t,Jl,e,zu(e)),gc(Cm,t)}}function wm(e,t,a){e==="focusin"?(_c(),Kl=t,Jl=a,Kl.attachEvent("onpropertychange",Oc)):e==="focusout"&&_c()}function Nm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(Jl)}function Rm(e,t){if(e==="click")return Pn(t)}function Mm(e,t){if(e==="input"||e==="change")return Pn(t)}function _m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:_m;function Fl(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!fu.call(t,n)||!rt(e[n],t[n]))return!1}return!0}function Bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dc(e,t){var a=Bc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bc(a)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Vn(e.document)}return t}function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Om=kt&&"documentMode"in document&&11>=document.documentMode,rl=null,Uu=null,Wl=null,Hu=!1;function Lc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hu||rl==null||rl!==Vn(l)||(l=rl,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wl&&Fl(Wl,l)||(Wl=l,l=ki(Uu,"onSelect"),0<l.length&&(t=new $n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=rl)))}function Ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ol={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Lu={},Yc={};kt&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Da(e){if(Lu[e])return Lu[e];if(!ol[e])return e;var t=ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yc)return Lu[e]=t[a];return e}var qc=Da("animationend"),kc=Da("animationiteration"),Gc=Da("animationstart"),Bm=Da("transitionrun"),Dm=Da("transitionstart"),Um=Da("transitioncancel"),Xc=Da("transitionend"),Qc=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Ct(e,t){Qc.set(e,t),_a(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],cl=0,qu=0;function ti(){for(var e=cl,t=qu=cl=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Zc(a,n,i)}}function ai(e,t,a,l){yt[cl++]=e,yt[cl++]=t,yt[cl++]=a,yt[cl++]=l,qu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ku(e,t,a,l){return ai(e,t,a,l),li(e)}function Ua(e,t){return ai(e,null,null,t),li(e)}function Zc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ut(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function li(e){if(50<bn)throw bn=0,Wr=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={};function Hm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,l){return new Hm(e,t,a,l)}function Gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Gu(e)&&(u=1);else if(typeof e=="string")u=Gp(e,a,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ve:return e=ot(31,a,t,n),e.elementType=Ve,e.lanes=i,e;case k:return Ha(a.children,n,i,t);case H:u=8,n|=24;break;case K:return e=ot(12,a,t,n|2),e.elementType=K,e.lanes=i,e;case be:return e=ot(13,a,t,n),e.elementType=be,e.lanes=i,e;case Te:return e=ot(19,a,t,n),e.elementType=Te,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:u=10;break e;case I:u=9;break e;case ye:u=11;break e;case W:u=14;break e;case Ne:u=16,l=null;break e}u=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=ot(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ha(e,t,a,l){return e=ot(7,e,l,t),e.lanes=a,e}function Xu(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function Kc(e){var t=ot(18,null,null,0);return t.stateNode=e,t}function Qu(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jc=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=Jc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ko(t)},Jc.set(e,t),t)}return{value:e,source:t,stack:Ko(t)}}var fl=[],dl=0,ii=null,$l=0,xt=[],St=0,ra=null,Ot=1,Bt="";function Xt(e,t){fl[dl++]=$l,fl[dl++]=ii,ii=e,$l=t}function Fc(e,t,a){xt[St++]=Ot,xt[St++]=Bt,xt[St++]=ra,ra=e;var l=Ot;e=Bt;var n=32-ut(l)-1;l&=~(1<<n),a+=1;var i=32-ut(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Ot=1<<32-ut(t)+n|a<<n|l,Bt=i+e}else Ot=1<<i|a<<n|l,Bt=e}function Zu(e){e.return!==null&&(Xt(e,1),Fc(e,1,0))}function Vu(e){for(;e===ii;)ii=fl[--dl],fl[dl]=null,$l=fl[--dl],fl[dl]=null;for(;e===ra;)ra=xt[--St],xt[St]=null,Bt=xt[--St],xt[St]=null,Ot=xt[--St],xt[St]=null}function Wc(e,t){xt[St++]=Ot,xt[St++]=Bt,xt[St++]=ra,Ot=t.id,Bt=t.overflow,ra=e}var Ge=null,Ee=null,re=!1,oa=null,Et=!1,Ku=Error(o(519));function ca(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Il(bt(t,e)),Ku}function $c(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ke]=e,t[$e]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<Sn.length;a++)ne(Sn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),sc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),dc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||pd(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ca(e,!0)}function Ic(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ge=Ge.return}}function hl(e){if(e!==Ge)return!1;if(!re)return Ic(e),re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fo(e.type,e.memoizedProps)),a=!a),a&&Ee&&ca(e),Ic(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ee=zd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ee=zd(e)}else t===27?(t=Ee,ja(e.type)?(e=vo,vo=null,Ee=e):Ee=t):Ee=Ge?zt(e.stateNode.nextSibling):null;return!0}function La(){Ee=Ge=null,re=!1}function Ju(){var e=oa;return e!==null&&(at===null?at=e:at.push.apply(at,e),oa=null),e}function Il(e){oa===null?oa=[e]:oa.push(e)}var Fu=y(null),Ya=null,Qt=null;function sa(e,t,a){Y(Fu,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=Fu.current,D(Fu)}function Wu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function $u(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var m=0;m<t.length;m++)if(s.context===t[m]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Wu(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(o(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Wu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ml(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var s=n.type;rt(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===fe.current){if(u=n.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(An):e=[An])}n=n.return}e!==null&&$u(t,e,a,l),t.flags|=262144}function ui(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Ya=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return Pc(Ya,e)}function ri(e,t){return Ya===null&&qa(e),Pc(e,t)}function Pc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Qt===null){if(e===null)throw Error(o(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return a}var Lm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ym=r.unstable_scheduleCallback,qm=r.unstable_NormalPriority,Be={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new Lm,data:new Map,refCount:0}}function Pl(e){e.refCount--,e.refCount===0&&Ym(qm,function(){e.controller.abort()})}var en=null,Pu=0,pl=0,gl=null;function km(e,t){if(en===null){var a=en=[];Pu=0,pl=ao(),gl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Pu++,t.then(es,es),t}function es(){if(--Pu===0&&en!==null){gl!==null&&(gl.status="fulfilled");var e=en;en=null,pl=0,gl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var ts=R.S;R.S=function(e,t){Yf=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&km(e,t),ts!==null&&ts(e,t)};var ka=y(null);function er(){var e=ka.current;return e!==null?e:Se.pooledCache}function oi(e,t){t===null?Y(ka,ka.current):Y(ka,t.pool)}function as(){var e=er();return e===null?null:{parent:Be._currentValue,pool:e}}var vl=Error(o(460)),tr=Error(o(474)),ci=Error(o(542)),si={then:function(){}};function ls(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ns(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,us(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,us(e),e}throw Xa=t,vl}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Xa=a,vl):a}}var Xa=null;function is(){if(Xa===null)throw Error(o(459));var e=Xa;return Xa=null,e}function us(e){if(e===vl||e===ci)throw Error(o(483))}var yl=null,tn=0;function fi(e){var t=tn;return tn+=1,yl===null&&(yl=[]),ns(yl,e,t)}function an(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===B?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rs(e){function t(S,v){if(e){var j=S.deletions;j===null?(S.deletions=[v],S.flags|=16):j.push(v)}}function a(S,v){if(!e)return null;for(;v!==null;)t(S,v),v=v.sibling;return null}function l(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function n(S,v){return S=Gt(S,v),S.index=0,S.sibling=null,S}function i(S,v,j){return S.index=j,e?(j=S.alternate,j!==null?(j=j.index,j<v?(S.flags|=67108866,v):j):(S.flags|=67108866,v)):(S.flags|=1048576,v)}function u(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function s(S,v,j,_){return v===null||v.tag!==6?(v=Xu(j,S.mode,_),v.return=S,v):(v=n(v,j),v.return=S,v)}function m(S,v,j,_){var Q=j.type;return Q===k?N(S,v,j.props.children,_,j.key):v!==null&&(v.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ne&&Ga(Q)===v.type)?(v=n(v,j.props),an(v,j),v.return=S,v):(v=ni(j.type,j.key,j.props,null,S.mode,_),an(v,j),v.return=S,v)}function z(S,v,j,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==j.containerInfo||v.stateNode.implementation!==j.implementation?(v=Qu(j,S.mode,_),v.return=S,v):(v=n(v,j.children||[]),v.return=S,v)}function N(S,v,j,_,Q){return v===null||v.tag!==7?(v=Ha(j,S.mode,_,Q),v.return=S,v):(v=n(v,j),v.return=S,v)}function O(S,v,j){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Xu(""+v,S.mode,j),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case U:return j=ni(v.type,v.key,v.props,null,S.mode,j),an(j,v),j.return=S,j;case Z:return v=Qu(v,S.mode,j),v.return=S,v;case Ne:return v=Ga(v),O(S,v,j)}if(Oe(v)||Ke(v))return v=Ha(v,S.mode,j,null),v.return=S,v;if(typeof v.then=="function")return O(S,fi(v),j);if(v.$$typeof===J)return O(S,ri(S,v),j);di(S,v)}return null}function T(S,v,j,_){var Q=v!==null?v.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Q!==null?null:s(S,v,""+j,_);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return j.key===Q?m(S,v,j,_):null;case Z:return j.key===Q?z(S,v,j,_):null;case Ne:return j=Ga(j),T(S,v,j,_)}if(Oe(j)||Ke(j))return Q!==null?null:N(S,v,j,_,null);if(typeof j.then=="function")return T(S,v,fi(j),_);if(j.$$typeof===J)return T(S,v,ri(S,j),_);di(S,j)}return null}function A(S,v,j,_,Q){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return S=S.get(j)||null,s(v,S,""+_,Q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case U:return S=S.get(_.key===null?j:_.key)||null,m(v,S,_,Q);case Z:return S=S.get(_.key===null?j:_.key)||null,z(v,S,_,Q);case Ne:return _=Ga(_),A(S,v,j,_,Q)}if(Oe(_)||Ke(_))return S=S.get(j)||null,N(v,S,_,Q,null);if(typeof _.then=="function")return A(S,v,j,fi(_),Q);if(_.$$typeof===J)return A(S,v,j,ri(v,_),Q);di(v,_)}return null}function q(S,v,j,_){for(var Q=null,oe=null,X=v,te=v=0,ue=null;X!==null&&te<j.length;te++){X.index>te?(ue=X,X=null):ue=X.sibling;var ce=T(S,X,j[te],_);if(ce===null){X===null&&(X=ue);break}e&&X&&ce.alternate===null&&t(S,X),v=i(ce,v,te),oe===null?Q=ce:oe.sibling=ce,oe=ce,X=ue}if(te===j.length)return a(S,X),re&&Xt(S,te),Q;if(X===null){for(;te<j.length;te++)X=O(S,j[te],_),X!==null&&(v=i(X,v,te),oe===null?Q=X:oe.sibling=X,oe=X);return re&&Xt(S,te),Q}for(X=l(X);te<j.length;te++)ue=A(X,S,te,j[te],_),ue!==null&&(e&&ue.alternate!==null&&X.delete(ue.key===null?te:ue.key),v=i(ue,v,te),oe===null?Q=ue:oe.sibling=ue,oe=ue);return e&&X.forEach(function(wa){return t(S,wa)}),re&&Xt(S,te),Q}function V(S,v,j,_){if(j==null)throw Error(o(151));for(var Q=null,oe=null,X=v,te=v=0,ue=null,ce=j.next();X!==null&&!ce.done;te++,ce=j.next()){X.index>te?(ue=X,X=null):ue=X.sibling;var wa=T(S,X,ce.value,_);if(wa===null){X===null&&(X=ue);break}e&&X&&wa.alternate===null&&t(S,X),v=i(wa,v,te),oe===null?Q=wa:oe.sibling=wa,oe=wa,X=ue}if(ce.done)return a(S,X),re&&Xt(S,te),Q;if(X===null){for(;!ce.done;te++,ce=j.next())ce=O(S,ce.value,_),ce!==null&&(v=i(ce,v,te),oe===null?Q=ce:oe.sibling=ce,oe=ce);return re&&Xt(S,te),Q}for(X=l(X);!ce.done;te++,ce=j.next())ce=A(X,S,te,ce.value,_),ce!==null&&(e&&ce.alternate!==null&&X.delete(ce.key===null?te:ce.key),v=i(ce,v,te),oe===null?Q=ce:oe.sibling=ce,oe=ce);return e&&X.forEach(function(Pp){return t(S,Pp)}),re&&Xt(S,te),Q}function ve(S,v,j,_){if(typeof j=="object"&&j!==null&&j.type===k&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case U:e:{for(var Q=j.key;v!==null;){if(v.key===Q){if(Q=j.type,Q===k){if(v.tag===7){a(S,v.sibling),_=n(v,j.props.children),_.return=S,S=_;break e}}else if(v.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ne&&Ga(Q)===v.type){a(S,v.sibling),_=n(v,j.props),an(_,j),_.return=S,S=_;break e}a(S,v);break}else t(S,v);v=v.sibling}j.type===k?(_=Ha(j.props.children,S.mode,_,j.key),_.return=S,S=_):(_=ni(j.type,j.key,j.props,null,S.mode,_),an(_,j),_.return=S,S=_)}return u(S);case Z:e:{for(Q=j.key;v!==null;){if(v.key===Q)if(v.tag===4&&v.stateNode.containerInfo===j.containerInfo&&v.stateNode.implementation===j.implementation){a(S,v.sibling),_=n(v,j.children||[]),_.return=S,S=_;break e}else{a(S,v);break}else t(S,v);v=v.sibling}_=Qu(j,S.mode,_),_.return=S,S=_}return u(S);case Ne:return j=Ga(j),ve(S,v,j,_)}if(Oe(j))return q(S,v,j,_);if(Ke(j)){if(Q=Ke(j),typeof Q!="function")throw Error(o(150));return j=Q.call(j),V(S,v,j,_)}if(typeof j.then=="function")return ve(S,v,fi(j),_);if(j.$$typeof===J)return ve(S,v,ri(S,j),_);di(S,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,v!==null&&v.tag===6?(a(S,v.sibling),_=n(v,j),_.return=S,S=_):(a(S,v),_=Xu(j,S.mode,_),_.return=S,S=_),u(S)):a(S,v)}return function(S,v,j,_){try{tn=0;var Q=ve(S,v,j,_);return yl=null,Q}catch(X){if(X===vl||X===ci)throw X;var oe=ot(29,X,null,S.mode);return oe.lanes=_,oe.return=S,oe}}}var Qa=rs(!0),os=rs(!1),fa=!1;function ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(se&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=li(e),Zc(e,null,a),t}return ai(e,l,t,a),li(e)}function ln(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Po(e,a)}}function nr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ir=!1;function nn(){if(ir){var e=gl;if(e!==null)throw e}}function un(e,t,a,l){ir=!1;var n=e.updateQueue;fa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var m=s,z=m.next;m.next=null,u===null?i=z:u.next=z,u=m;var N=e.alternate;N!==null&&(N=N.updateQueue,s=N.lastBaseUpdate,s!==u&&(s===null?N.firstBaseUpdate=z:s.next=z,N.lastBaseUpdate=m))}if(i!==null){var O=n.baseState;u=0,N=z=m=null,s=i;do{var T=s.lane&-536870913,A=T!==s.lane;if(A?(ie&T)===T:(l&T)===T){T!==0&&T===pl&&(ir=!0),N!==null&&(N=N.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var q=e,V=s;T=t;var ve=a;switch(V.tag){case 1:if(q=V.payload,typeof q=="function"){O=q.call(ve,O,T);break e}O=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=V.payload,T=typeof q=="function"?q.call(ve,O,T):q,T==null)break e;O=x({},O,T);break e;case 2:fa=!0}}T=s.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[T]:A.push(T))}else A={lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},N===null?(z=N=A,m=O):N=N.next=A,u|=T;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;A=s,s=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);N===null&&(m=O),n.baseState=m,n.firstBaseUpdate=z,n.lastBaseUpdate=N,i===null&&(n.shared.lanes=0),ya|=u,e.lanes=u,e.memoizedState=O}}function cs(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function ss(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cs(a[e],t)}var bl=y(null),hi=y(0);function fs(e,t){e=ea,Y(hi,e),Y(bl,t),ea=e|t.baseLanes}function ur(){Y(hi,ea),Y(bl,bl.current)}function rr(){ea=hi.current,D(bl),D(hi)}var ct=y(null),jt=null;function ma(e){var t=e.alternate;Y(Me,Me.current&1),Y(ct,e),jt===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(jt=e)}function or(e){Y(Me,Me.current),Y(ct,e),jt===null&&(jt=e)}function ds(e){e.tag===22?(Y(Me,Me.current),Y(ct,e),jt===null&&(jt=e)):pa()}function pa(){Y(Me,Me.current),Y(ct,ct.current)}function st(e){D(ct),jt===e&&(jt=null),D(Me)}var Me=y(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||po(a)||go(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,ee=null,pe=null,De=null,pi=!1,xl=!1,Za=!1,gi=0,rn=0,Sl=null,Xm=0;function Ce(){throw Error(o(321))}function cr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!rt(e[a],t[a]))return!1;return!0}function sr(e,t,a,l,n,i){return Vt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Fs:Tr,Za=!1,i=a(l,n),Za=!1,xl&&(i=ms(t,a,l,n)),hs(e),i}function hs(e){R.H=sn;var t=pe!==null&&pe.next!==null;if(Vt=0,De=pe=ee=null,pi=!1,rn=0,Sl=null,t)throw Error(o(300));e===null||Ue||(e=e.dependencies,e!==null&&ui(e)&&(Ue=!0))}function ms(e,t,a,l){ee=e;var n=0;do{if(xl&&(Sl=null),rn=0,xl=!1,25<=n)throw Error(o(301));if(n+=1,De=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=Ws,i=t(a,l)}while(xl);return i}function Qm(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?on(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(ee.flags|=1024),t}function fr(){var e=gi!==0;return gi=0,e}function dr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function hr(e){if(pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pi=!1}Vt=0,De=pe=ee=null,xl=!1,rn=gi=0,Sl=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ee.memoizedState=De=e:De=De.next=e,De}function _e(){if(pe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=De===null?ee.memoizedState:De.next;if(t!==null)De=t,pe=e;else{if(e===null)throw ee.alternate===null?Error(o(467)):Error(o(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},De===null?ee.memoizedState=De=e:De=De.next=e}return De}function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function on(e){var t=rn;return rn+=1,Sl===null&&(Sl=[]),e=ns(Sl,e,t),t=ee,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Fs:Tr),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return on(e);if(e.$$typeof===J)return Xe(e)}throw Error(o(438,String(e)))}function mr(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=vi(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Mt;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=_e();return pr(t,pe,e)}function pr(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,m=null,z=t,N=!1;do{var O=z.lane&-536870913;if(O!==z.lane?(ie&O)===O:(Vt&O)===O){var T=z.revertLane;if(T===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),O===pl&&(N=!0);else if((Vt&T)===T){z=z.next,T===pl&&(N=!0);continue}else O={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(s=m=O,u=i):m=m.next=O,ee.lanes|=T,ya|=T;O=z.action,Za&&a(i,O),i=z.hasEagerState?z.eagerState:a(i,O)}else T={lane:O,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(s=m=T,u=i):m=m.next=T,ee.lanes|=O,ya|=O;z=z.next}while(z!==null&&z!==t);if(m===null?u=i:m.next=s,!rt(i,e.memoizedState)&&(Ue=!0,N&&(a=gl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=m,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function gr(e){var t=_e(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);rt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ps(e,t,a){var l=ee,n=_e(),i=re;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var u=!rt((pe||n).memoizedState,a);if(u&&(n.memoizedState=a,Ue=!0),n=n.queue,br(ys.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||De!==null&&De.memoizedState.tag&1){if(l.flags|=2048,El(9,{destroy:void 0},vs.bind(null,l,n,a,t),null),Se===null)throw Error(o(349));i||(Vt&127)!==0||gs(l,t,a)}return a}function gs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=vi(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function vs(e,t,a,l){t.value=a,t.getSnapshot=l,bs(t)&&xs(e)}function ys(e,t,a){return a(function(){bs(t)&&xs(e)})}function bs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!rt(e,a)}catch{return!0}}function xs(e){var t=Ua(e,2);t!==null&&lt(t,e,2)}function vr(e){var t=We();if(typeof e=="function"){var a=e;if(e=a(),Za){na(!0);try{a()}finally{na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Ss(e,t,a,l){return e.baseState=a,pr(e,pe,typeof l=="function"?l:Kt)}function Zm(e,t,a,l,n){if(Ei(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Es(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Es(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,u={};R.T=u;try{var s=a(n,l),m=R.S;m!==null&&m(u,s),js(e,t,s)}catch(z){yr(e,t,z)}finally{i!==null&&u.types!==null&&(i.types=u.types),R.T=i}}else try{i=a(n,l),js(e,t,i)}catch(z){yr(e,t,z)}}function js(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){zs(e,t,l)},function(l){return yr(e,t,l)}):zs(e,t,a)}function zs(e,t,a){t.status="fulfilled",t.value=a,Ts(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Es(e,a)))}function yr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ts(t),t=t.next;while(t!==l)}e.action=null}function Ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function As(e,t){return t}function Cs(e,t){if(re){var a=Se.formState;if(a!==null){e:{var l=ee;if(re){if(Ee){t:{for(var n=Ee,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=zt(n.nextSibling),l=n.data==="F!";break e}}ca(l)}l=!1}l&&(t=a[0])}}return a=We(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},a.queue=l,a=Vs.bind(null,ee,l),l.dispatch=a,l=vr(!1),i=zr.bind(null,ee,!1,l.queue),l=We(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Zm.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ws(e){var t=_e();return Ns(t,pe,e)}function Ns(e,t,a){if(t=pr(e,t,As)[0],e=bi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=on(t)}catch(u){throw u===vl?ci:u}else l=t;t=_e();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,El(9,{destroy:void 0},Vm.bind(null,n,a),null)),[l,i,e]}function Vm(e,t){e.action=t}function Rs(e){var t=_e(),a=pe;if(a!==null)return Ns(t,a,e);_e(),t=t.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function El(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=vi(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ms(){return _e().memoizedState}function xi(e,t,a,l){var n=We();ee.flags|=e,n.memoizedState=El(1|t,{destroy:void 0},a,l===void 0?null:l)}function Si(e,t,a,l){var n=_e();l=l===void 0?null:l;var i=n.memoizedState.inst;pe!==null&&l!==null&&cr(l,pe.memoizedState.deps)?n.memoizedState=El(t,i,a,l):(ee.flags|=e,n.memoizedState=El(1|t,i,a,l))}function _s(e,t){xi(8390656,8,e,t)}function br(e,t){Si(2048,8,e,t)}function Km(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=vi(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Os(e){var t=_e().memoizedState;return Km({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Bs(e,t){return Si(4,2,e,t)}function Ds(e,t){return Si(4,4,e,t)}function Us(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hs(e,t,a){a=a!=null?a.concat([e]):null,Si(4,4,Us.bind(null,t,e),a)}function xr(){}function Ls(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&cr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Ys(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&cr(t,l[1]))return l[0];if(l=e(),Za){na(!0);try{e()}finally{na(!1)}}return a.memoizedState=[l,t],l}function Sr(e,t,a){return a===void 0||(Vt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=kf(),ee.lanes|=e,ya|=e,a)}function qs(e,t,a,l){return rt(a,t)?a:bl.current!==null?(e=Sr(e,a,l),rt(e,t)||(Ue=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(ie&261930)===0?(Ue=!0,e.memoizedState=a):(e=kf(),ee.lanes|=e,ya|=e,t)}function ks(e,t,a,l,n){var i=L.p;L.p=i!==0&&8>i?i:8;var u=R.T,s={};R.T=s,zr(e,!1,t,a);try{var m=n(),z=R.S;if(z!==null&&z(s,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var N=Gm(m,l);cn(e,t,N,ht(e))}else cn(e,t,l,ht(e))}catch(O){cn(e,t,{then:function(){},status:"rejected",reason:O},ht())}finally{L.p=i,u!==null&&s.types!==null&&(u.types=s.types),R.T=u}}function Jm(){}function Er(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=Gs(e).queue;ks(e,n,t,F,a===null?Jm:function(){return Xs(e),a(l)})}function Gs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xs(e){var t=Gs(e);t.next===null&&(t=e.alternate.memoizedState),cn(e,t.next.queue,{},ht())}function jr(){return Xe(An)}function Qs(){return _e().memoizedState}function Zs(){return _e().memoizedState}function Fm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ht();e=da(a);var l=ha(t,e,a);l!==null&&(lt(l,t,a),ln(l,t,a)),t={cache:Iu()},e.payload=t;return}t=t.return}}function Wm(e,t,a){var l=ht();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ei(e)?Ks(t,a):(a=ku(e,t,a,l),a!==null&&(lt(a,e,l),Js(a,t,l)))}function Vs(e,t,a){var l=ht();cn(e,t,a,l)}function cn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))Ks(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,rt(s,u))return ai(e,t,n,0),Se===null&&ti(),!1}catch{}if(a=ku(e,t,n,l),a!==null)return lt(a,e,l),Js(a,t,l),!0}return!1}function zr(e,t,a,l){if(l={lane:2,revertLane:ao(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(o(479))}else t=ku(e,a,l,2),t!==null&&lt(t,e,2)}function Ei(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Ks(e,t){xl=pi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Js(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Po(e,a)}}var sn={readContext:Xe,use:yi,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};sn.useEffectEvent=Ce;var Fs={readContext:Xe,use:yi,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:_s,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,xi(4194308,4,Us.bind(null,t,e),a)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){xi(4,2,e,t)},useMemo:function(e,t){var a=We();t=t===void 0?null:t;var l=e();if(Za){na(!0);try{e()}finally{na(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=We();if(a!==void 0){var n=a(t);if(Za){na(!0);try{a(t)}finally{na(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Wm.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=vr(e);var t=e.queue,a=Vs.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:xr,useDeferredValue:function(e,t){var a=We();return Sr(a,e,t)},useTransition:function(){var e=vr(!1);return e=ks.bind(null,ee,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=We();if(re){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Se===null)throw Error(o(349));(ie&127)!==0||gs(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,_s(ys.bind(null,l,i,e),[e]),l.flags|=2048,El(9,{destroy:void 0},vs.bind(null,l,i,a,t),null),a},useId:function(){var e=We(),t=Se.identifierPrefix;if(re){var a=Bt,l=Ot;a=(l&~(1<<32-ut(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Xm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:jr,useFormState:Cs,useActionState:Cs,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=zr.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:mr,useCacheRefresh:function(){return We().memoizedState=Fm.bind(null,ee)},useEffectEvent:function(e){var t=We(),a={impl:e};return t.memoizedState=a,function(){if((se&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Tr={readContext:Xe,use:yi,useCallback:Ls,useContext:Xe,useEffect:br,useImperativeHandle:Hs,useInsertionEffect:Bs,useLayoutEffect:Ds,useMemo:Ys,useReducer:bi,useRef:Ms,useState:function(){return bi(Kt)},useDebugValue:xr,useDeferredValue:function(e,t){var a=_e();return qs(a,pe.memoizedState,e,t)},useTransition:function(){var e=bi(Kt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:on(e),t]},useSyncExternalStore:ps,useId:Qs,useHostTransitionStatus:jr,useFormState:ws,useActionState:ws,useOptimistic:function(e,t){var a=_e();return Ss(a,pe,e,t)},useMemoCache:mr,useCacheRefresh:Zs};Tr.useEffectEvent=Os;var Ws={readContext:Xe,use:yi,useCallback:Ls,useContext:Xe,useEffect:br,useImperativeHandle:Hs,useInsertionEffect:Bs,useLayoutEffect:Ds,useMemo:Ys,useReducer:gr,useRef:Ms,useState:function(){return gr(Kt)},useDebugValue:xr,useDeferredValue:function(e,t){var a=_e();return pe===null?Sr(a,e,t):qs(a,pe.memoizedState,e,t)},useTransition:function(){var e=gr(Kt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:on(e),t]},useSyncExternalStore:ps,useId:Qs,useHostTransitionStatus:jr,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){var a=_e();return pe!==null?Ss(a,pe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mr,useCacheRefresh:Zs};Ws.useEffectEvent=Os;function Ar(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ht(),n=da(l);n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),ln(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ht(),n=da(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),ln(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ht(),l=da(a);l.tag=2,t!=null&&(l.callback=t),t=ha(e,l,a),t!==null&&(lt(t,e,a),ln(t,e,a))}};function $s(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Fl(a,l)||!Fl(n,i):!0}function Is(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Cr.enqueueReplaceState(t,t.state,null)}function Va(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Ps(e){ei(e)}function ef(e){console.error(e)}function tf(e){ei(e)}function ji(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function af(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function wr(e,t,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){ji(e,t)},a}function lf(e){return e=da(e),e.tag=3,e}function nf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){af(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){af(t,a,l),typeof n!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function $m(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&ml(t,a,n,!0),a=ct.current,a!==null){switch(a.tag){case 31:case 13:return jt===null?Di():a.alternate===null&&we===0&&(we=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Pr(e,l,n)),!1;case 22:return a.flags|=65536,l===si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Pr(e,l,n)),!1}throw Error(o(435,a.tag))}return Pr(e,l,n),Di(),!1}if(re)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ku&&(e=Error(o(422),{cause:l}),Il(bt(e,a)))):(l!==Ku&&(t=Error(o(423),{cause:l}),Il(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=wr(e.stateNode,l,n),nr(e,n),we!==4&&(we=2)),!1;var i=Error(o(520),{cause:l});if(i=bt(i,a),yn===null?yn=[i]:yn.push(i),we!==4&&(we=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=wr(a.stateNode,l,e),nr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ba===null||!ba.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=lf(n),nf(n,e,a,l),nr(a,n),!1}a=a.return}while(a!==null);return!1}var Nr=Error(o(461)),Ue=!1;function Qe(e,t,a,l){t.child=e===null?os(t,null,a,l):Qa(t,e.child,a,l)}function uf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return qa(t),l=sr(e,t,a,u,i,n),s=fr(),e!==null&&!Ue?(dr(e,t,n),Jt(e,t,n)):(re&&s&&Zu(t),t.flags|=1,Qe(e,t,l,n),t.child)}function rf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Gu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,of(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Hr(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Fl,a(u,l)&&e.ref===t.ref)return Jt(e,t,n)}return t.flags|=1,e=Gt(i,l),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Fl(i,l)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=l=i,Hr(e,n))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Jt(e,t,n)}return Rr(e,t,a,l,n)}function cf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return sf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oi(t,i!==null?i.cachePool:null),i!==null?fs(t,i):ur(),ds(t);else return l=t.lanes=536870912,sf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(oi(t,i.cachePool),fs(t,i),pa(),t.memoizedState=null):(e!==null&&oi(t,null),ur(),pa());return Qe(e,t,n,a),t.child}function fn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sf(e,t,a,l,n){var i=er();return i=i===null?null:{parent:Be._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&oi(t,null),ur(),ds(t),e!==null&&ml(e,t,l,!0),t.childLanes=n,null}function zi(e,t){return t=Ai({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ff(e,t,a){return Qa(t,e.child,null,a),e=zi(t,t.pendingProps),e.flags|=2,st(t),t.memoizedState=null,e}function Im(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(l.mode==="hidden")return e=zi(t,l),t.lanes=536870912,fn(null,e);if(or(t),(e=Ee)?(e=jd(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Ot,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},a=Kc(e),a.return=t,t.child=a,Ge=t,Ee=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return zi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(or(t),n)if(t.flags&256)t.flags&=-257,t=ff(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ue||ml(e,t,a,!1),n=(a&e.childLanes)!==0,Ue||n){if(l=Se,l!==null&&(u=ec(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ua(e,u),lt(l,e,u),Nr;Di(),t=ff(e,t,a)}else e=i.treeContext,Ee=zt(u.nextSibling),Ge=t,re=!0,oa=null,Et=!1,e!==null&&Wc(t,e),t=zi(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ti(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Rr(e,t,a,l,n){return qa(t),a=sr(e,t,a,l,void 0,n),l=fr(),e!==null&&!Ue?(dr(e,t,n),Jt(e,t,n)):(re&&l&&Zu(t),t.flags|=1,Qe(e,t,a,n),t.child)}function df(e,t,a,l,n,i){return qa(t),t.updateQueue=null,a=ms(t,l,a,n),hs(e),l=fr(),e!==null&&!Ue?(dr(e,t,i),Jt(e,t,i)):(re&&l&&Zu(t),t.flags|=1,Qe(e,t,a,i),t.child)}function hf(e,t,a,l,n){if(qa(t),t.stateNode===null){var i=sl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Xe(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ar(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Xe(u):sl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Ar(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Cr.enqueueReplaceState(i,i.state,null),un(t,l,i,n),nn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,m=Va(a,s);i.props=m;var z=i.context,N=a.contextType;u=sl,typeof N=="object"&&N!==null&&(u=Xe(N));var O=a.getDerivedStateFromProps;N=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||z!==u)&&Is(t,i,l,u),fa=!1;var T=t.memoizedState;i.state=T,un(t,l,i,n),nn(),z=t.memoizedState,s||T!==z||fa?(typeof O=="function"&&(Ar(t,a,O,l),z=t.memoizedState),(m=fa||$s(t,a,m,l,T,z,u))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),i.props=l,i.state=z,i.context=u,l=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,lr(e,t),u=t.memoizedProps,N=Va(a,u),i.props=N,O=t.pendingProps,T=i.context,z=a.contextType,m=sl,typeof z=="object"&&z!==null&&(m=Xe(z)),s=a.getDerivedStateFromProps,(z=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==O||T!==m)&&Is(t,i,l,m),fa=!1,T=t.memoizedState,i.state=T,un(t,l,i,n),nn();var A=t.memoizedState;u!==O||T!==A||fa||e!==null&&e.dependencies!==null&&ui(e.dependencies)?(typeof s=="function"&&(Ar(t,a,s,l),A=t.memoizedState),(N=fa||$s(t,a,N,l,T,A,m)||e!==null&&e.dependencies!==null&&ui(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=m,l=N):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ti(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Qa(t,e.child,null,n),t.child=Qa(t,null,a,n)):Qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Jt(e,t,n),e}function mf(e,t,a,l){return La(),t.flags|=256,Qe(e,t,a,l),t.child}var Mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _r(e){return{baseLanes:e,cachePool:as()}}function Or(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=dt),e}function pf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?ma(t):pa(),(e=Ee)?(e=jd(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Ot,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},a=Kc(e),a.return=t,t.child=a,Ge=t,Ee=null)):e=null,e===null)throw ca(t);return go(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(pa(),n=t.mode,s=Ai({mode:"hidden",children:s},n),l=Ha(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=_r(a),l.childLanes=Or(e,u,a),t.memoizedState=Mr,fn(null,l)):(ma(t),Br(t,s))}var m=e.memoizedState;if(m!==null&&(s=m.dehydrated,s!==null)){if(i)t.flags&256?(ma(t),t.flags&=-257,t=Dr(e,t,a)):t.memoizedState!==null?(pa(),t.child=e.child,t.flags|=128,t=null):(pa(),s=l.fallback,n=t.mode,l=Ai({mode:"visible",children:l.children},n),s=Ha(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Qa(t,e.child,null,a),l=t.child,l.memoizedState=_r(a),l.childLanes=Or(e,u,a),t.memoizedState=Mr,t=fn(null,l));else if(ma(t),go(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var z=u.dgst;u=z,l=Error(o(419)),l.stack="",l.digest=u,Il({value:l,source:null,stack:null}),t=Dr(e,t,a)}else if(Ue||ml(e,t,a,!1),u=(a&e.childLanes)!==0,Ue||u){if(u=Se,u!==null&&(l=ec(u,a),l!==0&&l!==m.retryLane))throw m.retryLane=l,Ua(e,l),lt(u,e,l),Nr;po(s)||Di(),t=Dr(e,t,a)}else po(s)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Ee=zt(s.nextSibling),Ge=t,re=!0,oa=null,Et=!1,e!==null&&Wc(t,e),t=Br(t,l.children),t.flags|=4096);return t}return n?(pa(),s=l.fallback,n=t.mode,m=e.child,z=m.sibling,l=Gt(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&65011712,z!==null?s=Gt(z,s):(s=Ha(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,fn(null,l),l=t.child,s=e.child.memoizedState,s===null?s=_r(a):(n=s.cachePool,n!==null?(m=Be._currentValue,n=n.parent!==m?{parent:m,pool:m}:n):n=as(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Or(e,u,a),t.memoizedState=Mr,fn(e.child,l)):(ma(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Br(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=ot(22,e,null,t),e.lanes=0,e}function Dr(e,t,a){return Qa(t,e.child,null,a),e=Br(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Wu(e.return,t,a)}function Ur(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function vf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Me.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,Y(Me,u),Qe(e,t,l,a),l=re?$l:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gf(e,a,t);else if(e.tag===19)gf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&mi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ur(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&mi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ur(t,!0,a,null,i,l);break;case"together":Ur(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ml(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Hr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ui(e)))}function Pm(e,t,a){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),sa(t,Be,e.memoizedState.cache),La();break;case 27:case 5:Ul(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,or(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?pf(e,t,a):(ma(t),e=Jt(e,t,a),e!==null?e.sibling:null);ma(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(ml(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return vf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(Me,Me.current),l)break;return null;case 22:return t.lanes=0,cf(e,t,a,t.pendingProps);case 24:sa(t,Be,e.memoizedState.cache)}return Jt(e,t,a)}function yf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Hr(e,a)&&(t.flags&128)===0)return Ue=!1,Pm(e,t,a);Ue=(e.flags&131072)!==0}else Ue=!1,re&&(t.flags&1048576)!==0&&Fc(t,$l,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e=="function")Gu(e)?(l=Va(e,l),t.tag=1,t=hf(null,t,e,l,a)):(t.tag=0,t=Rr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ye){t.tag=11,t=uf(null,t,e,l,a);break e}else if(n===W){t.tag=14,t=rf(null,t,e,l,a);break e}}throw t=pt(e)||e,Error(o(306,t,""))}}return t;case 0:return Rr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Va(l,t.pendingProps),hf(e,t,l,n,a);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,lr(e,t),un(t,l,null,a);var u=t.memoizedState;if(l=u.cache,sa(t,Be,l),l!==i.cache&&$u(t,[Be],a,!0),nn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=mf(e,t,l,a);break e}else if(l!==n){n=bt(Error(o(424)),t),Il(n),t=mf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=zt(e.firstChild),Ge=t,re=!0,oa=null,Et=!0,a=os(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(La(),l===n){t=Jt(e,t,a);break e}Qe(e,t,l,a)}t=t.child}return t;case 26:return Ti(e,t),e===null?(a=Nd(t.type,null,t.pendingProps,null))?t.memoizedState=a:re||(a=t.type,e=t.pendingProps,l=Gi(ae.current).createElement(a),l[ke]=t,l[$e]=e,Ze(l,a,e),Ye(l),t.stateNode=l):t.memoizedState=Nd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ul(t),e===null&&re&&(l=t.stateNode=Ad(t.type,t.pendingProps,ae.current),Ge=t,Et=!0,n=Ee,ja(t.type)?(vo=n,Ee=zt(l.firstChild)):Ee=n),Qe(e,t,t.pendingProps.children,a),Ti(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=l=Ee)&&(l=Np(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ge=t,Ee=zt(l.firstChild),Et=!1,n=!0):n=!1),n||ca(t)),Ul(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,fo(n,i)?l=null:u!==null&&fo(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=sr(e,t,Qm,null,null,a),An._currentValue=n),Ti(e,t),Qe(e,t,l,a),t.child;case 6:return e===null&&re&&((e=a=Ee)&&(a=Rp(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ge=t,Ee=null,e=!0):e=!1),e||ca(t)),null;case 13:return pf(e,t,a);case 4:return Fe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Qa(t,null,l,a):Qe(e,t,l,a),t.child;case 11:return uf(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,sa(t,t.type,l.value),Qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,qa(t),n=Xe(n),l=l(n),t.flags|=1,Qe(e,t,l,a),t.child;case 14:return rf(e,t,t.type,t.pendingProps,a);case 15:return of(e,t,t.type,t.pendingProps,a);case 19:return vf(e,t,a);case 31:return Im(e,t,a);case 22:return cf(e,t,a,t.pendingProps);case 24:return qa(t),l=Xe(Be),e===null?(n=er(),n===null&&(n=Se,i=Iu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ar(t),sa(t,Be,n)):((e.lanes&a)!==0&&(lr(e,t),un(t,null,null,a),nn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),sa(t,Be,l)):(l=i.cache,sa(t,Be,l),l!==n.cache&&$u(t,[Be],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Ft(e){e.flags|=4}function Lr(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Zf())e.flags|=8192;else throw Xa=si,tr}else e.flags&=-16777217}function bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bd(t))if(Zf())e.flags|=8192;else throw Xa=si,tr}function Ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$o():536870912,e.lanes|=t,Al|=t)}function dn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ep(e,t,a){var l=t.pendingProps;switch(Vu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(Be),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hl(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ju())),je(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Ft(t),i!==null?(je(t),bf(t,i)):(je(t),Lr(t,n,null,l,a))):i?i!==e.memoizedState?(Ft(t),je(t),bf(t,i)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ft(t),je(t),Lr(t,n,e,l,a)),null;case 27:if(Ln(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return je(t),null}e=G.current,hl(t)?$c(t):(e=Ad(n,l,a),t.stateNode=e,Ft(t))}return je(t),null;case 5:if(Ln(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return je(t),null}if(i=G.current,hl(t))$c(t);else{var u=Gi(ae.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[ke]=t,i[$e]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ft(t)}}return je(t),Lr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ae.current,hl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ge,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ke]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||pd(e.nodeValue,a)),e||ca(t,!0)}else e=Gi(e).createTextNode(l),e[ke]=t,t.stateNode=e}return je(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=hl(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ke]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else a=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(st(t),t):(st(t),null);if((t.flags&128)!==0)throw Error(o(558))}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=hl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[ke]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(st(t),t):(st(t),null)}return st(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ci(t,t.updateQueue),je(t),null);case 4:return Re(),e===null&&uo(t.stateNode.containerInfo),je(t),null;case 10:return Zt(t.type),je(t),null;case 19:if(D(Me),l=t.memoizedState,l===null)return je(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)dn(l,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=mi(e),i!==null){for(t.flags|=128,dn(l,!1),e=i.updateQueue,t.updateQueue=e,Ci(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Vc(a,e),a=a.sibling;return Y(Me,Me.current&1|2),re&&Xt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&nt()>_i&&(t.flags|=128,n=!0,dn(l,!1),t.lanes=4194304)}else{if(!n)if(e=mi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ci(t,e),dn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return je(t),null}else 2*nt()-l.renderingStartTime>_i&&a!==536870912&&(t.flags|=128,n=!0,dn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=nt(),e.sibling=null,a=Me.current,Y(Me,n?a&1|2:a&1),re&&Xt(t,l.treeForkCount),e):(je(t),null);case 22:case 23:return st(t),rr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Ci(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&D(ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(Be),je(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function tp(e,t){switch(Vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(Be),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ln(t),null;case 31:if(t.memoizedState!==null){if(st(t),t.alternate===null)throw Error(o(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(st(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Me),null;case 4:return Re(),null;case 10:return Zt(t.type),null;case 22:case 23:return st(t),rr(),e!==null&&D(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(Be),null;case 25:return null;default:return null}}function xf(e,t){switch(Vu(t),t.tag){case 3:Zt(Be),Re();break;case 26:case 27:case 5:Ln(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&st(t);break;case 13:st(t);break;case 19:D(Me);break;case 10:Zt(t.type);break;case 22:case 23:st(t),rr(),e!==null&&D(ka);break;case 24:Zt(Be)}}function hn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){he(t,t.return,s)}}function ga(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var m=a,z=s;try{z()}catch(N){he(n,m,N)}}}l=l.next}while(l!==i)}}catch(N){he(t,t.return,N)}}function Sf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ss(t,a)}catch(l){he(e,e.return,l)}}}function Ef(e,t,a){a.props=Va(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function mn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){he(e,t,n)}}function Dt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){he(e,t,n)}else a.current=null}function jf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){he(e,e.return,n)}}function Yr(e,t,a){try{var l=e.stateNode;jp(l,e.type,a,t),l[$e]=t}catch(n){he(e,e.return,n)}}function zf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function qr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(l!==4&&(l===27&&ja(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(kr(e,t,a),e=e.sibling;e!==null;)kr(e,t,a),e=e.sibling}function wi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wi(e,t,a),e=e.sibling;e!==null;)wi(e,t,a),e=e.sibling}function Tf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ze(t,l,a),t[ke]=e,t[$e]=a}catch(i){he(e,e.return,i)}}var Wt=!1,He=!1,Gr=!1,Af=typeof WeakSet=="function"?WeakSet:Set,qe=null;function ap(e,t){if(e=e.containerInfo,co=Fi,e=Hc(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,m=-1,z=0,N=0,O=e,T=null;t:for(;;){for(var A;O!==a||n!==0&&O.nodeType!==3||(s=u+n),O!==i||l!==0&&O.nodeType!==3||(m=u+l),O.nodeType===3&&(u+=O.nodeValue.length),(A=O.firstChild)!==null;)T=O,O=A;for(;;){if(O===e)break t;if(T===a&&++z===n&&(s=u),T===i&&++N===l&&(m=u),(A=O.nextSibling)!==null)break;O=T,T=O.parentNode}O=A}a=s===-1||m===-1?null:{start:s,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(so={focusedElem:e,selectionRange:a},Fi=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var q=Va(a.type,n);e=l.getSnapshotBeforeUpdate(q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(V){he(a,a.return,V)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)mo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function Cf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:It(e,a),l&4&&hn(5,a);break;case 1:if(It(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){he(a,a.return,u)}else{var n=Va(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){he(a,a.return,u)}}l&64&&Sf(a),l&512&&mn(a,a.return);break;case 3:if(It(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ss(e,t)}catch(u){he(a,a.return,u)}}break;case 27:t===null&&l&4&&Tf(a);case 26:case 5:It(e,a),t===null&&l&4&&jf(a),l&512&&mn(a,a.return);break;case 12:It(e,a);break;case 31:It(e,a),l&4&&Rf(e,a);break;case 13:It(e,a),l&4&&Mf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fp.bind(null,a),Mp(e,a))));break;case 22:if(l=a.memoizedState!==null||Wt,!l){t=t!==null&&t.memoizedState!==null||He,n=Wt;var i=He;Wt=l,(He=t)&&!i?Pt(e,a,(a.subtreeFlags&8772)!==0):It(e,a),Wt=n,He=i}break;case 30:break;default:It(e,a)}}function wf(e){var t=e.alternate;t!==null&&(e.alternate=null,wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,Pe=!1;function $t(e,t,a){for(a=a.child;a!==null;)Nf(e,t,a),a=a.sibling}function Nf(e,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Hl,a)}catch{}switch(a.tag){case 26:He||Dt(a,t),$t(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Dt(a,t);var l=ze,n=Pe;ja(a.type)&&(ze=a.stateNode,Pe=!1),$t(e,t,a),jn(a.stateNode),ze=l,Pe=n;break;case 5:He||Dt(a,t);case 6:if(l=ze,n=Pe,ze=null,$t(e,t,a),ze=l,Pe=n,ze!==null)if(Pe)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(i){he(a,t,i)}else try{ze.removeChild(a.stateNode)}catch(i){he(a,t,i)}break;case 18:ze!==null&&(Pe?(e=ze,Sd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bl(e)):Sd(ze,a.stateNode));break;case 4:l=ze,n=Pe,ze=a.stateNode.containerInfo,Pe=!0,$t(e,t,a),ze=l,Pe=n;break;case 0:case 11:case 14:case 15:ga(2,a,t),He||ga(4,a,t),$t(e,t,a);break;case 1:He||(Dt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ef(a,t,l)),$t(e,t,a);break;case 21:$t(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,$t(e,t,a),He=l;break;default:$t(e,t,a)}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bl(e)}catch(a){he(t,t.return,a)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bl(e)}catch(a){he(t,t.return,a)}}function lp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Af),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Af),t;default:throw Error(o(435,e.tag))}}function Ni(e,t){var a=lp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=dp.bind(null,e,l);l.then(n,n)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(ja(s.type)){ze=s.stateNode,Pe=!1;break e}break;case 5:ze=s.stateNode,Pe=!1;break e;case 3:case 4:ze=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(ze===null)throw Error(o(160));Nf(i,u,n),ze=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}var wt=null;function _f(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),l&4&&(ga(3,e,e.return),hn(3,e),ga(5,e,e.return));break;case 1:et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),l&64&&Wt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=wt;if(et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[ql]||i[ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,a),i[ke]=e,Ye(i),l=i;break e;case"link":var u=_d("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;case"meta":if(u=_d("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[ke]=e,Ye(i),l=i}e.stateNode=l}else Od(n,e.type,e.stateNode);else e.stateNode=Md(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Od(n,e.type,e.stateNode):Md(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yr(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),a!==null&&l&4&&Yr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),e.flags&32){n=e.stateNode;try{ll(n,"")}catch(q){he(e,e.return,q)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Yr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Gr=!0);break;case 6:if(et(t,e),tt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(q){he(e,e.return,q)}}break;case 3:if(Zi=null,n=wt,wt=Xi(t.containerInfo),et(t,e),wt=n,tt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Bl(t.containerInfo)}catch(q){he(e,e.return,q)}Gr&&(Gr=!1,Of(e));break;case 4:l=wt,wt=Xi(e.stateNode.containerInfo),et(t,e),tt(e),wt=l;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ni(e,l)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mi=nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ni(e,l)));break;case 22:n=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,z=Wt,N=He;if(Wt=z||n,He=N||m,et(t,e),He=N,Wt=z,tt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||m||Wt||He||Ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(i=m.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=m.stateNode;var O=m.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null;s.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(q){he(m,m.return,q)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(q){he(m,m.return,q)}}}else if(t.tag===18){if(a===null){m=t;try{var A=m.stateNode;n?Ed(A,!0):Ed(m.stateNode,!1)}catch(q){he(m,m.return,q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ni(e,a))));break;case 19:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ni(e,l)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(zf(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=qr(e);wi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(ll(u,""),a.flags&=-33);var s=qr(e);wi(e,s,u);break;case 3:case 4:var m=a.stateNode.containerInfo,z=qr(e);kr(e,z,m);break;default:throw Error(o(161))}}catch(N){he(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Cf(e,t.alternate,t),t=t.sibling}function Ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Ka(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ef(t,t.return,a),Ka(t);break;case 27:jn(t.stateNode);case 26:case 5:Dt(t,t.return),Ka(t);break;case 22:t.memoizedState===null&&Ka(t);break;case 30:Ka(t);break;default:Ka(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(n,i,a),hn(4,i);break;case 1:if(Pt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){he(l,l.return,z)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)cs(m[n],s)}catch(z){he(l,l.return,z)}}a&&u&64&&Sf(i),mn(i,i.return);break;case 27:Tf(i);case 26:case 5:Pt(n,i,a),a&&l===null&&u&4&&jf(i),mn(i,i.return);break;case 12:Pt(n,i,a);break;case 31:Pt(n,i,a),a&&u&4&&Rf(n,i);break;case 13:Pt(n,i,a),a&&u&4&&Mf(n,i);break;case 22:i.memoizedState===null&&Pt(n,i,a),mn(i,i.return);break;case 30:break;default:Pt(n,i,a)}t=t.sibling}}function Xr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Pl(a))}function Qr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pl(e))}function Nt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bf(e,t,a,l),t=t.sibling}function Bf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Nt(e,t,a,l),n&2048&&hn(9,t);break;case 1:Nt(e,t,a,l);break;case 3:Nt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pl(e)));break;case 12:if(n&2048){Nt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){he(t,t.return,m)}}else Nt(e,t,a,l);break;case 31:Nt(e,t,a,l);break;case 13:Nt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Nt(e,t,a,l):pn(e,t):i._visibility&2?Nt(e,t,a,l):(i._visibility|=2,jl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Xr(u,t);break;case 24:Nt(e,t,a,l),n&2048&&Qr(t.alternate,t);break;default:Nt(e,t,a,l)}}function jl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=a,m=l,z=u.flags;switch(u.tag){case 0:case 11:case 15:jl(i,u,s,m,n),hn(8,u);break;case 23:break;case 22:var N=u.stateNode;u.memoizedState!==null?N._visibility&2?jl(i,u,s,m,n):pn(i,u):(N._visibility|=2,jl(i,u,s,m,n)),n&&z&2048&&Xr(u.alternate,u);break;case 24:jl(i,u,s,m,n),n&&z&2048&&Qr(u.alternate,u);break;default:jl(i,u,s,m,n)}t=t.sibling}}function pn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:pn(a,l),n&2048&&Xr(l.alternate,l);break;case 24:pn(a,l),n&2048&&Qr(l.alternate,l);break;default:pn(a,l)}t=t.sibling}}var gn=8192;function zl(e,t,a){if(e.subtreeFlags&gn)for(e=e.child;e!==null;)Df(e,t,a),e=e.sibling}function Df(e,t,a){switch(e.tag){case 26:zl(e,t,a),e.flags&gn&&e.memoizedState!==null&&Xp(a,wt,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,a);break;case 3:case 4:var l=wt;wt=Xi(e.stateNode.containerInfo),zl(e,t,a),wt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=gn,gn=16777216,zl(e,t,a),gn=l):zl(e,t,a));break;default:zl(e,t,a)}}function Uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function vn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Lf(l,e)}Uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hf(e),e=e.sibling}function Hf(e){switch(e.tag){case 0:case 11:case 15:vn(e),e.flags&2048&&ga(9,e,e.return);break;case 3:vn(e);break;case 12:vn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ri(e)):vn(e);break;default:vn(e)}}function Ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Lf(l,e)}Uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),Ri(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ri(t));break;default:Ri(t)}e=e.sibling}}function Lf(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Pl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qe=l;else e:for(a=e;qe!==null;){l=qe;var n=l.sibling,i=l.return;if(wf(l),l===a){qe=null;break e}if(n!==null){n.return=i,qe=n;break e}qe=i}}}var np={getCacheForType:function(e){var t=Xe(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Xe(Be).controller.signal}},ip=typeof WeakMap=="function"?WeakMap:Map,se=0,Se=null,le=null,ie=0,de=0,ft=null,va=!1,Tl=!1,Zr=!1,ea=0,we=0,ya=0,Ja=0,Vr=0,dt=0,Al=0,yn=null,at=null,Kr=!1,Mi=0,Yf=0,_i=1/0,Oi=null,ba=null,Le=0,xa=null,Cl=null,ta=0,Jr=0,Fr=null,qf=null,bn=0,Wr=null;function ht(){return(se&2)!==0&&ie!==0?ie&-ie:R.T!==null?ao():tc()}function kf(){if(dt===0)if((ie&536870912)===0||re){var e=kn;kn<<=1,(kn&3932160)===0&&(kn=262144),dt=e}else dt=536870912;return e=ct.current,e!==null&&(e.flags|=32),dt}function lt(e,t,a){(e===Se&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(wl(e,0),Sa(e,ie,dt,!1)),Yl(e,a),((se&2)===0||e!==Se)&&(e===Se&&((se&2)===0&&(Ja|=a),we===4&&Sa(e,ie,dt,!1)),Ut(e))}function Gf(e,t,a){if((se&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ll(e,t),n=l?op(e,t):Ir(e,t,!0),i=l;do{if(n===0){Tl&&!l&&Sa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!up(a)){n=Ir(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=yn;var m=s.current.memoizedState.isDehydrated;if(m&&(wl(s,u).flags|=256),u=Ir(s,u,!1),u!==2){if(Zr&&!m){s.errorRecoveryDisabledLanes|=i,Ja|=i,n=4;break e}i=at,at=n,i!==null&&(at===null?at=i:at.push.apply(at,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){wl(e,0),Sa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Sa(l,t,dt,!va);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Mi+300-nt(),10<n)){if(Sa(l,t,dt,!va),Xn(l,0,!0)!==0)break e;ta=t,l.timeoutHandle=bd(Xf.bind(null,l,a,at,Oi,Kr,t,dt,Ja,Al,va,i,"Throttled",-0,0),n);break e}Xf(l,a,at,Oi,Kr,t,dt,Ja,Al,va,i,null,-0,0)}}break}while(!0);Ut(e)}function Xf(e,t,a,l,n,i,u,s,m,z,N,O,T,A){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Df(t,i,O);var q=(i&62914560)===i?Mi-nt():(i&4194048)===i?Yf-nt():0;if(q=Qp(O,q),q!==null){ta=i,e.cancelPendingCommit=q($f.bind(null,e,t,i,a,l,n,u,s,m,N,O,null,T,A)),Sa(e,i,u,!z);return}}$f(e,t,i,a,l,n,u,s,m)}function up(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!rt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sa(e,t,a,l){t&=~Vr,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ut(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Io(e,a,t)}function Bi(){return(se&6)===0?(xn(0),!1):!0}function $r(){if(le!==null){if(de===0)var e=le.return;else e=le,Qt=Ya=null,hr(e),yl=null,tn=0,e=le;for(;e!==null;)xf(e.alternate,e),e=e.return;le=null}}function wl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ap(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,$r(),Se=e,le=a=Gt(e.current,null),ie=t,de=0,ft=null,va=!1,Tl=Ll(e,t),Zr=!1,Al=dt=Vr=Ja=ya=we=0,at=yn=null,Kr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ut(l),i=1<<n;t|=e[n],l&=~i}return ea=t,ti(),a}function Qf(e,t){ee=null,R.H=sn,t===vl||t===ci?(t=is(),de=3):t===tr?(t=is(),de=4):de=t===Nr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,le===null&&(we=1,ji(e,bt(t,e.current)))}function Zf(){var e=ct.current;return e===null?!0:(ie&4194048)===ie?jt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===jt:!1}function Vf(){var e=R.H;return R.H=sn,e===null?sn:e}function Kf(){var e=R.A;return R.A=np,e}function Di(){we=4,va||(ie&4194048)!==ie&&ct.current!==null||(Tl=!0),(ya&134217727)===0&&(Ja&134217727)===0||Se===null||Sa(Se,ie,dt,!1)}function Ir(e,t,a){var l=se;se|=2;var n=Vf(),i=Kf();(Se!==e||ie!==t)&&(Oi=null,wl(e,t)),t=!1;var u=we;e:do try{if(de!==0&&le!==null){var s=le,m=ft;switch(de){case 8:$r(),u=6;break e;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var z=de;if(de=0,ft=null,Nl(e,s,m,z),a&&Tl){u=0;break e}break;default:z=de,de=0,ft=null,Nl(e,s,m,z)}}rp(),u=we;break}catch(N){Qf(e,N)}while(!0);return t&&e.shellSuspendCounter++,Qt=Ya=null,se=l,R.H=n,R.A=i,le===null&&(Se=null,ie=0,ti()),u}function rp(){for(;le!==null;)Jf(le)}function op(e,t){var a=se;se|=2;var l=Vf(),n=Kf();Se!==e||ie!==t?(Oi=null,_i=nt()+500,wl(e,t)):Tl=Ll(e,t);e:do try{if(de!==0&&le!==null){t=le;var i=ft;t:switch(de){case 1:de=0,ft=null,Nl(e,t,i,1);break;case 2:case 9:if(ls(i)){de=0,ft=null,Ff(t);break}t=function(){de!==2&&de!==9||Se!==e||(de=7),Ut(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:ls(i)?(de=0,ft=null,Ff(t)):(de=0,ft=null,Nl(e,t,i,7));break;case 5:var u=null;switch(le.tag){case 26:u=le.memoizedState;case 5:case 27:var s=le;if(u?Bd(u):s.stateNode.complete){de=0,ft=null;var m=s.sibling;if(m!==null)le=m;else{var z=s.return;z!==null?(le=z,Ui(z)):le=null}break t}}de=0,ft=null,Nl(e,t,i,5);break;case 6:de=0,ft=null,Nl(e,t,i,6);break;case 8:$r(),we=6;break e;default:throw Error(o(462))}}cp();break}catch(N){Qf(e,N)}while(!0);return Qt=Ya=null,R.H=l,R.A=n,se=a,le!==null?0:(Se=null,ie=0,ti(),we)}function cp(){for(;le!==null&&!_h();)Jf(le)}function Jf(e){var t=yf(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?Ui(e):le=t}function Ff(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=df(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=df(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:hr(t);default:xf(a,t),t=le=Vc(t,ea),t=yf(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?Ui(e):le=t}function Nl(e,t,a,l){Qt=Ya=null,hr(t),yl=null,tn=0;var n=t.return;try{if($m(e,n,t,a,ie)){we=1,ji(e,bt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;we=1,ji(e,bt(a,e.current)),le=null;return}t.flags&32768?(re||l===1?e=!0:Tl||(ie&536870912)!==0?e=!1:(va=e=!0,(l===2||l===9||l===3||l===6)&&(l=ct.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wf(t,e)):Ui(t)}function Ui(e){var t=e;do{if((t.flags&32768)!==0){Wf(t,va);return}e=t.return;var a=ep(t.alternate,t,ea);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);we===0&&(we=5)}function Wf(e,t){do{var a=tp(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);we=6,le=null}function $f(e,t,a,l,n,i,u,s,m){e.cancelPendingCommit=null;do Hi();while(Le!==0);if((se&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=qu,Gh(e,a,i,u,s,m),e===Se&&(le=Se=null,ie=0),Cl=t,xa=e,ta=a,Jr=i,Fr=n,qf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hp(Yn,function(){return ad(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=L.p,L.p=2,u=se,se|=4;try{ap(e,t,a)}finally{se=u,L.p=n,R.T=l}}Le=1,If(),Pf(),ed()}}function If(){if(Le===1){Le=0;var e=xa,t=Cl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=L.p;L.p=2;var n=se;se|=4;try{_f(t,e);var i=so,u=Hc(e.containerInfo),s=i.focusedElem,m=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&Uc(s.ownerDocument.documentElement,s)){if(m!==null&&Du(s)){var z=m.start,N=m.end;if(N===void 0&&(N=z),"selectionStart"in s)s.selectionStart=z,s.selectionEnd=Math.min(N,s.value.length);else{var O=s.ownerDocument||document,T=O&&O.defaultView||window;if(T.getSelection){var A=T.getSelection(),q=s.textContent.length,V=Math.min(m.start,q),ve=m.end===void 0?V:Math.min(m.end,q);!A.extend&&V>ve&&(u=ve,ve=V,V=u);var S=Dc(s,V),v=Dc(s,ve);if(S&&v&&(A.rangeCount!==1||A.anchorNode!==S.node||A.anchorOffset!==S.offset||A.focusNode!==v.node||A.focusOffset!==v.offset)){var j=O.createRange();j.setStart(S.node,S.offset),A.removeAllRanges(),V>ve?(A.addRange(j),A.extend(v.node,v.offset)):(j.setEnd(v.node,v.offset),A.addRange(j))}}}}for(O=[],A=s;A=A.parentNode;)A.nodeType===1&&O.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<O.length;s++){var _=O[s];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Fi=!!co,so=co=null}finally{se=n,L.p=l,R.T=a}}e.current=t,Le=2}}function Pf(){if(Le===2){Le=0;var e=xa,t=Cl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=L.p;L.p=2;var n=se;se|=4;try{Cf(e,t.alternate,t)}finally{se=n,L.p=l,R.T=a}}Le=3}}function ed(){if(Le===4||Le===3){Le=0,Oh();var e=xa,t=Cl,a=ta,l=qf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,Cl=xa=null,td(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ba=null),gu(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=L.p,L.p=2,R.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{R.T=t,L.p=n}}(ta&3)!==0&&Hi(),Ut(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Wr?bn++:(bn=0,Wr=e):bn=0,xn(0)}}function td(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pl(t)))}function Hi(){return If(),Pf(),ed(),ad()}function ad(){if(Le!==5)return!1;var e=xa,t=Jr;Jr=0;var a=gu(ta),l=R.T,n=L.p;try{L.p=32>a?32:a,R.T=null,a=Fr,Fr=null;var i=xa,u=ta;if(Le=0,Cl=xa=null,ta=0,(se&6)!==0)throw Error(o(331));var s=se;if(se|=4,Hf(i.current),Bf(i,i.current,u,a),se=s,xn(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Hl,i)}catch{}return!0}finally{L.p=n,R.T=l,td(e,t)}}function ld(e,t,a){t=bt(a,t),t=wr(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Yl(e,2),Ut(e))}function he(e,t,a){if(e.tag===3)ld(e,e,a);else for(;t!==null;){if(t.tag===3){ld(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ba===null||!ba.has(l))){e=bt(a,e),a=lf(2),l=ha(t,a,2),l!==null&&(nf(a,l,t,e),Yl(l,2),Ut(l));break}}t=t.return}}function Pr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ip;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Zr=!0,n.add(a),e=sp.bind(null,e,t,a),t.then(e,e))}function sp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(ie&a)===a&&(we===4||we===3&&(ie&62914560)===ie&&300>nt()-Mi?(se&2)===0&&wl(e,0):Vr|=a,Al===ie&&(Al=0)),Ut(e)}function nd(e,t){t===0&&(t=$o()),e=Ua(e,t),e!==null&&(Yl(e,t),Ut(e))}function fp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),nd(e,a)}function dp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),nd(e,a)}function hp(e,t){return du(e,t)}var Li=null,Rl=null,eo=!1,Yi=!1,to=!1,Ea=0;function Ut(e){e!==Rl&&e.next===null&&(Rl===null?Li=Rl=e:Rl=Rl.next=e),Yi=!0,eo||(eo=!0,pp())}function xn(e,t){if(!to&&Yi){to=!0;do for(var a=!1,l=Li;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-ut(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,od(l,i))}else i=ie,i=Xn(l,l===Se?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ll(l,i)||(a=!0,od(l,i));l=l.next}while(a);to=!1}}function mp(){id()}function id(){Yi=eo=!1;var e=0;Ea!==0&&Tp()&&(e=Ea);for(var t=nt(),a=null,l=Li;l!==null;){var n=l.next,i=ud(l,t);i===0?(l.next=null,a===null?Li=n:a.next=n,n===null&&(Rl=a)):(a=l,(e!==0||(i&3)!==0)&&(Yi=!0)),l=n}Le!==0&&Le!==5||xn(e),Ea!==0&&(Ea=0)}function ud(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ut(i),s=1<<u,m=n[u];m===-1?((s&a)===0||(s&l)!==0)&&(n[u]=kh(s,t)):m<=t&&(e.expiredLanes|=s),i&=~s}if(t=Se,a=ie,a=Xn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&hu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ll(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&hu(l),gu(a)){case 2:case 8:a=Fo;break;case 32:a=Yn;break;case 268435456:a=Wo;break;default:a=Yn}return l=rd.bind(null,e),a=du(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&hu(l),e.callbackPriority=2,e.callbackNode=null,2}function rd(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hi()&&e.callbackNode!==a)return null;var l=ie;return l=Xn(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Gf(e,l,t),ud(e,nt()),e.callbackNode!=null&&e.callbackNode===a?rd.bind(null,e):null)}function od(e,t){if(Hi())return null;Gf(e,t,!0)}function pp(){Cp(function(){(se&6)!==0?du(Jo,mp):id()})}function ao(){if(Ea===0){var e=pl;e===0&&(e=qn,qn<<=1,(qn&261888)===0&&(qn=256)),Ea=e}return Ea}function cd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function sd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function gp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=cd((n[$e]||null).action),u=l.submitter;u&&(t=(t=u[$e]||null)?cd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new $n("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ea!==0){var m=u?sd(n,u):new FormData(n);Er(a,{pending:!0,data:m,method:n.method,action:i},null,m)}}else typeof i=="function"&&(s.preventDefault(),m=u?sd(n,u):new FormData(n),Er(a,{pending:!0,data:m,method:n.method,action:i},i,m))},currentTarget:n}]})}}for(var lo=0;lo<Yu.length;lo++){var no=Yu[lo],vp=no.toLowerCase(),yp=no[0].toUpperCase()+no.slice(1);Ct(vp,"on"+yp)}Ct(qc,"onAnimationEnd"),Ct(kc,"onAnimationIteration"),Ct(Gc,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(Bm,"onTransitionRun"),Ct(Dm,"onTransitionStart"),Ct(Um,"onTransitionCancel"),Ct(Xc,"onTransitionEnd"),tl("onMouseEnter",["mouseout","mouseover"]),tl("onMouseLeave",["mouseout","mouseover"]),tl("onPointerEnter",["pointerout","pointerover"]),tl("onPointerLeave",["pointerout","pointerover"]),_a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_a("onBeforeInput",["compositionend","keypress","textInput","paste"]),_a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));function fd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],m=s.instance,z=s.currentTarget;if(s=s.listener,m!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(N){ei(N)}n.currentTarget=null,i=m}else for(u=0;u<l.length;u++){if(s=l[u],m=s.instance,z=s.currentTarget,s=s.listener,m!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(N){ei(N)}n.currentTarget=null,i=m}}}}function ne(e,t){var a=t[vu];a===void 0&&(a=t[vu]=new Set);var l=e+"__bubble";a.has(l)||(dd(t,e,2,!1),a.add(l))}function io(e,t,a){var l=0;t&&(l|=4),dd(a,e,l,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function uo(e){if(!e[qi]){e[qi]=!0,nc.forEach(function(a){a!=="selectionchange"&&(bp.has(a)||io(a,!1,e),io(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,io("selectionchange",!1,t))}}function dd(e,t,a,l){switch(kd(t)){case 2:var n=Kp;break;case 8:n=Jp;break;default:n=Eo}a=n.bind(null,t,a,e),n=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ro(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var m=u.tag;if((m===3||m===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Ia(s),u===null)return;if(m=u.tag,m===5||m===6||m===26||m===27){l=i=u;continue e}s=s.parentNode}}l=l.return}gc(function(){var z=i,N=zu(a),O=[];e:{var T=Qc.get(e);if(T!==void 0){var A=$n,q=e;switch(e){case"keypress":if(Fn(a)===0)break e;case"keydown":case"keyup":A=dm;break;case"focusin":q="focus",A=Ru;break;case"focusout":q="blur",A=Ru;break;case"beforeblur":case"afterblur":A=Ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=pm;break;case qc:case kc:case Gc:A=lm;break;case Xc:A=vm;break;case"scroll":case"scrollend":A=Ih;break;case"wheel":A=bm;break;case"copy":case"cut":case"paste":A=im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Sc;break;case"toggle":case"beforetoggle":A=Sm}var V=(t&4)!==0,ve=!V&&(e==="scroll"||e==="scrollend"),S=V?T!==null?T+"Capture":null:T;V=[];for(var v=z,j;v!==null;){var _=v;if(j=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||j===null||S===null||(_=Gl(v,S),_!=null&&V.push(En(v,_,j))),ve)break;v=v.return}0<V.length&&(T=new A(T,q,null,a,N),O.push({event:T,listeners:V}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&a!==ju&&(q=a.relatedTarget||a.fromElement)&&(Ia(q)||q[$a]))break e;if((A||T)&&(T=N.window===N?N:(T=N.ownerDocument)?T.defaultView||T.parentWindow:window,A?(q=a.relatedTarget||a.toElement,A=z,q=q?Ia(q):null,q!==null&&(ve=p(q),V=q.tag,q!==ve||V!==5&&V!==27&&V!==6)&&(q=null)):(A=null,q=z),A!==q)){if(V=bc,_="onMouseLeave",S="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(V=Sc,_="onPointerLeave",S="onPointerEnter",v="pointer"),ve=A==null?T:kl(A),j=q==null?T:kl(q),T=new V(_,v+"leave",A,a,N),T.target=ve,T.relatedTarget=j,_=null,Ia(N)===z&&(V=new V(S,v+"enter",q,a,N),V.target=j,V.relatedTarget=ve,_=V),ve=_,A&&q)t:{for(V=xp,S=A,v=q,j=0,_=S;_;_=V(_))j++;_=0;for(var Q=v;Q;Q=V(Q))_++;for(;0<j-_;)S=V(S),j--;for(;0<_-j;)v=V(v),_--;for(;j--;){if(S===v||v!==null&&S===v.alternate){V=S;break t}S=V(S),v=V(v)}V=null}else V=null;A!==null&&hd(O,T,A,V,!1),q!==null&&ve!==null&&hd(O,ve,q,V,!0)}}e:{if(T=z?kl(z):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var oe=Nc;else if(Cc(T))if(Rc)oe=Mm;else{oe=Nm;var X=wm}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?z&&Eu(z.elementType)&&(oe=Nc):oe=Rm;if(oe&&(oe=oe(e,z))){wc(O,oe,a,N);break e}X&&X(e,T,z),e==="focusout"&&z&&T.type==="number"&&z.memoizedProps.value!=null&&Su(T,"number",T.value)}switch(X=z?kl(z):window,e){case"focusin":(Cc(X)||X.contentEditable==="true")&&(rl=X,Uu=z,Wl=null);break;case"focusout":Wl=Uu=rl=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,Lc(O,a,N);break;case"selectionchange":if(Om)break;case"keydown":case"keyup":Lc(O,a,N)}var te;if(_u)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else ul?Tc(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Ec&&a.locale!=="ko"&&(ul||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ul&&(te=vc()):(ua=N,Cu="value"in ua?ua.value:ua.textContent,ul=!0)),X=ki(z,ue),0<X.length&&(ue=new xc(ue,e,null,a,N),O.push({event:ue,listeners:X}),te?ue.data=te:(te=Ac(a),te!==null&&(ue.data=te)))),(te=jm?zm(e,a):Tm(e,a))&&(ue=ki(z,"onBeforeInput"),0<ue.length&&(X=new xc("onBeforeInput","beforeinput",null,a,N),O.push({event:X,listeners:ue}),X.data=te)),gp(O,e,z,a,N)}fd(O,t)})}function En(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ki(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Gl(e,a),n!=null&&l.unshift(En(e,n,i)),n=Gl(e,t),n!=null&&l.push(En(e,n,i))),e.tag===3)return l;e=e.return}return[]}function xp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,m=s.alternate,z=s.stateNode;if(s=s.tag,m!==null&&m===l)break;s!==5&&s!==26&&s!==27||z===null||(m=z,n?(z=Gl(a,i),z!=null&&u.unshift(En(a,z,m))):n||(z=Gl(a,i),z!=null&&u.push(En(a,z,m)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Sp=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function md(e){return(typeof e=="string"?e:""+e).replace(Sp,`
`).replace(Ep,"")}function pd(e,t){return t=md(t),md(e)===t}function ge(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ll(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ll(e,""+l);break;case"className":Zn(e,"class",l);break;case"tabIndex":Zn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,l);break;case"style":mc(e,l,i);break;case"data":if(t!=="object"){Zn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ge(e,t,"name",n.name,n,null),ge(e,t,"formEncType",n.formEncType,n,null),ge(e,t,"formMethod",n.formMethod,n,null),ge(e,t,"formTarget",n.formTarget,n,null)):(ge(e,t,"encType",n.encType,n,null),ge(e,t,"method",n.method,n,null),ge(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Qn(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wh.get(a)||a,Qn(e,a,l))}}function oo(e,t,a,l,n,i){switch(a){case"style":mc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ll(e,l):(typeof l=="number"||typeof l=="bigint")&&ll(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ic.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[$e]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Qn(e,a,l)}}}function Ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ge(e,t,i,u,a,null)}}n&&ge(e,t,"srcSet",a.srcSet,a,null),l&&ge(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var s=i=u=n=null,m=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":n=N;break;case"type":u=N;break;case"checked":m=N;break;case"defaultChecked":z=N;break;case"value":i=N;break;case"defaultValue":s=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:ge(e,t,l,N,a,null)}}sc(e,i,s,m,z,u,n,!1);return;case"select":ne("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:ge(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?al(e,!!l,t,!1):a!=null&&al(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:ge(e,t,u,s,a,null)}dc(e,l,n,i);return;case"option":for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null)&&(m==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ge(e,t,m,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<Sn.length;l++)ne(Sn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ge(e,t,z,l,a,null)}return;default:if(Eu(t)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&oo(e,t,N,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&ge(e,t,s,l,a,null))}function jp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,m=null,z=null,N=null;for(A in a){var O=a[A];if(a.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":m=O;default:l.hasOwnProperty(A)||ge(e,t,A,null,l,O)}}for(var T in l){var A=l[T];if(O=a[T],l.hasOwnProperty(T)&&(A!=null||O!=null))switch(T){case"type":i=A;break;case"name":n=A;break;case"checked":z=A;break;case"defaultChecked":N=A;break;case"value":u=A;break;case"defaultValue":s=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:A!==O&&ge(e,t,T,A,l,O)}}xu(e,u,s,m,z,N,i,n);return;case"select":A=u=s=T=null;for(i in a)if(m=a[i],a.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":A=m;default:l.hasOwnProperty(i)||ge(e,t,i,null,l,m)}for(n in l)if(i=l[n],m=a[n],l.hasOwnProperty(n)&&(i!=null||m!=null))switch(n){case"value":T=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==m&&ge(e,t,n,i,l,m)}t=s,a=u,l=A,T!=null?al(e,!!a,T,!1):!!l!=!!a&&(t!=null?al(e,!!a,t,!0):al(e,!!a,a?[]:"",!1));return;case"textarea":A=T=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ge(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":T=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&ge(e,t,u,n,l,i)}fc(e,T,A);return;case"option":for(var q in a)T=a[q],a.hasOwnProperty(q)&&T!=null&&!l.hasOwnProperty(q)&&(q==="selected"?e.selected=!1:ge(e,t,q,null,l,T));for(m in l)T=l[m],A=a[m],l.hasOwnProperty(m)&&T!==A&&(T!=null||A!=null)&&(m==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":ge(e,t,m,T,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in a)T=a[V],a.hasOwnProperty(V)&&T!=null&&!l.hasOwnProperty(V)&&ge(e,t,V,null,l,T);for(z in l)if(T=l[z],A=a[z],l.hasOwnProperty(z)&&T!==A&&(T!=null||A!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:ge(e,t,z,T,l,A)}return;default:if(Eu(t)){for(var ve in a)T=a[ve],a.hasOwnProperty(ve)&&T!==void 0&&!l.hasOwnProperty(ve)&&oo(e,t,ve,void 0,l,T);for(N in l)T=l[N],A=a[N],!l.hasOwnProperty(N)||T===A||T===void 0&&A===void 0||oo(e,t,N,T,l,A);return}}for(var S in a)T=a[S],a.hasOwnProperty(S)&&T!=null&&!l.hasOwnProperty(S)&&ge(e,t,S,null,l,T);for(O in l)T=l[O],A=a[O],!l.hasOwnProperty(O)||T===A||T==null&&A==null||ge(e,t,O,T,l,A)}function gd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&gd(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var m=a[l],z=m.startTime;if(z>s)break;var N=m.transferSize,O=m.initiatorType;N&&gd(O)&&(m=m.responseEnd,u+=N*(m<s?1:(s-z)/(m-z)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var co=null,so=null;function Gi(e){return e.nodeType===9?e:e.ownerDocument}function vd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ho=null;function Tp(){var e=window.event;return e&&e.type==="popstate"?e===ho?!1:(ho=e,!0):(ho=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,xd=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof xd<"u"?function(e){return xd.resolve(null).then(e).catch(wp)}:bd;function wp(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function Sd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Bl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")jn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,jn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[ql]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&jn(e.ownerDocument.body);a=n}while(a);Bl(t)}function Ed(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function mo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mo(a),yu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Np(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ql])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Rp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function jd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function po(e){return e.data==="$?"||e.data==="$~"}function go(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vo=null;function zd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ad(e,t,a){switch(t=Gi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function jn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yu(e)}var Tt=new Map,Cd=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=L.d;L.d={f:_p,r:Op,D:Bp,C:Dp,L:Up,m:Hp,X:Yp,S:Lp,M:qp};function _p(){var e=aa.f(),t=Bi();return e||t}function Op(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Xs(t):aa.r(e)}var Ml=typeof document>"u"?null:document;function wd(e,t,a){var l=Ml;if(l&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Cd.has(n)||(Cd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ze(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Bp(e){aa.D(e),wd("dns-prefetch",e,null)}function Dp(e,t){aa.C(e,t),wd("preconnect",e,t)}function Up(e,t,a){aa.L(e,t,a);var l=Ml;if(l&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+vt(a.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var i=n;switch(t){case"style":i=_l(e);break;case"script":i=Ol(e)}Tt.has(i)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(zn(i))||t==="script"&&l.querySelector(Tn(i))||(t=l.createElement("link"),Ze(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Hp(e,t){aa.m(e,t);var a=Ml;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ol(e)}if(!Tt.has(i)&&(e=x({rel:"modulepreload",href:e},t),Tt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tn(i)))return}l=a.createElement("link"),Ze(l,"link",e),Ye(l),a.head.appendChild(l)}}}function Lp(e,t,a){aa.S(e,t,a);var l=Ml;if(l&&e){var n=el(l).hoistableStyles,i=_l(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(zn(i)))s.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(i))&&yo(e,a);var m=u=l.createElement("link");Ye(m),Ze(m,"link",e),m._p=new Promise(function(z,N){m.onload=z,m.onerror=N}),m.addEventListener("load",function(){s.loading|=1}),m.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Qi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function Yp(e,t){aa.X(e,t);var a=Ml;if(a&&e){var l=el(a).hoistableScripts,n=Ol(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=x({src:e,async:!0},t),(t=Tt.get(n))&&bo(e,t),i=a.createElement("script"),Ye(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function qp(e,t){aa.M(e,t);var a=Ml;if(a&&e){var l=el(a).hoistableScripts,n=Ol(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=x({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&bo(e,t),i=a.createElement("script"),Ye(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Nd(e,t,a,l){var n=(n=ae.current)?Xi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=_l(a.href),a=el(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_l(a.href);var i=el(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(zn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),i||kp(n,e,a,u.state))),t&&l===null)throw Error(o(528,""));return u}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ol(a),a=el(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function _l(e){return'href="'+vt(e)+'"'}function zn(e){return'link[rel="stylesheet"]['+e+"]"}function Rd(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function kp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ze(t,"link",a),Ye(t),e.head.appendChild(t))}function Ol(e){return'[src="'+vt(e)+'"]'}function Tn(e){return"script[async]"+e}function Md(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return t.instance=l,Ye(l),l;var n=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Ze(l,"style",n),Qi(l,a.precedence,e),t.instance=l;case"stylesheet":n=_l(a.href);var i=e.querySelector(zn(n));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;l=Rd(a),(n=Tt.get(n))&&yo(l,n),i=(e.ownerDocument||e).createElement("link"),Ye(i);var u=i;return u._p=new Promise(function(s,m){u.onload=s,u.onerror=m}),Ze(i,"link",l),t.state.loading|=4,Qi(i,a.precedence,e),t.instance=i;case"script":return i=Ol(a.src),(n=e.querySelector(Tn(i)))?(t.instance=n,Ye(n),n):(l=a,(n=Tt.get(i))&&(l=x({},a),bo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Qi(l,a.precedence,e));return t.instance}function Qi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zi=null;function _d(e,t,a){if(Zi===null){var l=new Map,n=Zi=new Map;n.set(a,l)}else n=Zi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[ql]||i[ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function Od(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Gp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_l(l.href),i=t.querySelector(zn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ye(i);return}i=t.ownerDocument||t,l=Rd(l),(n=Tt.get(n))&&yo(l,n),i=i.createElement("link"),Ye(i);var u=i;u._p=new Promise(function(s,m){u.onload=s,u.onerror=m}),Ze(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var xo=0;function Qp(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&xo===0&&(xo=62500*zp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>xo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Vi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Zp,e),Ki=null,Vi.call(e))}function Zp(e,t){if(!(t.state.loading&4)){var a=Ki.get(e);if(a)var l=a.get(null);else{a=new Map,Ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Vi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var An={$$typeof:J,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Vp(e,t,a,l,n,i,u,s,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.hiddenUpdates=mu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Dd(e,t,a,l,n,i,u,s,m,z,N,O){return e=new Vp(e,t,a,u,m,z,N,O,s),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),e.current=i,i.stateNode=e,t=Iu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ar(i),e}function Ud(e){return e?(e=sl,e):sl}function Hd(e,t,a,l,n,i){n=Ud(n),l.context===null?l.context=n:l.pendingContext=n,l=da(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ha(e,l,t),a!==null&&(lt(a,e,t),ln(a,e,t))}function Ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function So(e,t){Ld(e,t),(e=e.alternate)&&Ld(e,t)}function Yd(e){if(e.tag===13||e.tag===31){var t=Ua(e,67108864);t!==null&&lt(t,e,67108864),So(e,67108864)}}function qd(e){if(e.tag===13||e.tag===31){var t=ht();t=pu(t);var a=Ua(e,t);a!==null&&lt(a,e,t),So(e,t)}}var Fi=!0;function Kp(e,t,a,l){var n=R.T;R.T=null;var i=L.p;try{L.p=2,Eo(e,t,a,l)}finally{L.p=i,R.T=n}}function Jp(e,t,a,l){var n=R.T;R.T=null;var i=L.p;try{L.p=8,Eo(e,t,a,l)}finally{L.p=i,R.T=n}}function Eo(e,t,a,l){if(Fi){var n=jo(l);if(n===null)ro(e,t,l,Wi,a),Gd(e,l);else if(Wp(n,e,t,a,l))l.stopPropagation();else if(Gd(e,l),t&4&&-1<Fp.indexOf(e)){for(;n!==null;){var i=Pa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ma(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var m=1<<31-ut(u);s.entanglements[1]|=m,u&=~m}Ut(i),(se&6)===0&&(_i=nt()+500,xn(0))}}break;case 31:case 13:s=Ua(i,2),s!==null&&lt(s,i,2),Bi(),So(i,2)}if(i=jo(l),i===null&&ro(e,t,l,Wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ro(e,t,l,null,a)}}function jo(e){return e=zu(e),zo(e)}var Wi=null;function zo(e){if(Wi=null,e=Ia(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function kd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bh()){case Jo:return 2;case Fo:return 8;case Yn:case Dh:return 32;case Wo:return 268435456;default:return 32}default:return 32}}var To=!1,za=null,Ta=null,Aa=null,Cn=new Map,wn=new Map,Ca=[],Fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function Nn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Pa(t),t!==null&&Yd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Wp(e,t,a,l,n){switch(t){case"focusin":return za=Nn(za,e,t,a,l,n),!0;case"dragenter":return Ta=Nn(Ta,e,t,a,l,n),!0;case"mouseover":return Aa=Nn(Aa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Cn.set(i,Nn(Cn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,wn.set(i,Nn(wn.get(i)||null,e,t,a,l,n)),!0}return!1}function Xd(e){var t=Ia(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,ac(e.priority,function(){qd(a)});return}}else if(t===31){if(t=w(a),t!==null){e.blockedOn=t,ac(e.priority,function(){qd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=jo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ju=l,a.target.dispatchEvent(l),ju=null}else return t=Pa(a),t!==null&&Yd(t),e.blockedOn=a,!1;t.shift()}return!0}function Qd(e,t,a){$i(e)&&a.delete(t)}function $p(){To=!1,za!==null&&$i(za)&&(za=null),Ta!==null&&$i(Ta)&&(Ta=null),Aa!==null&&$i(Aa)&&(Aa=null),Cn.forEach(Qd),wn.forEach(Qd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,To||(To=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$p)))}var Pi=null;function Zd(e){Pi!==e&&(Pi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(zo(l||a)===null)continue;break}var i=Pa(a);i!==null&&(e.splice(t,3),t-=3,Er(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Bl(e){function t(m){return Ii(m,e)}za!==null&&Ii(za,e),Ta!==null&&Ii(Ta,e),Aa!==null&&Ii(Aa,e),Cn.forEach(t),wn.forEach(t);for(var a=0;a<Ca.length;a++){var l=Ca[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Xd(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[$e]||null;if(typeof i=="function")u||Zd(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[$e]||null)s=u.formAction;else if(zo(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Zd(a)}}}function Vd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ao(e){this._internalRoot=e}eu.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=ht();Hd(a,l,e,t,null,null)},eu.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hd(e.current,2,null,e,null,null),Bi(),t[$a]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var t=tc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ca.length&&t!==0&&t<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&Xd(e)}};var Kd=f.version;if(Kd!=="19.2.4")throw Error(o(527,Kd,"19.2.4"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var Ip={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Hl=tu.inject(Ip),it=tu}catch{}}return Mn.createRoot=function(e,t){if(!h(e))throw Error(o(299));var a=!1,l="",n=Ps,i=ef,u=tf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Dd(e,1,!1,null,null,a,l,null,n,i,u,Vd),e[$a]=t.current,uo(e),new Ao(t)},Mn.hydrateRoot=function(e,t,a){if(!h(e))throw Error(o(299));var l=!1,n="",i=Ps,u=ef,s=tf,m=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(m=a.formState)),t=Dd(e,1,!0,t,a??null,l,n,m,i,u,s,Vd),t.context=Ud(null),a=t.current,l=ht(),l=pu(l),n=da(l),n.callback=null,ha(a,n,l),a=l,t.current.lanes=a,Yl(t,a),Ut(t),e[$a]=t.current,uo(e),new eu(t)},Mn.version="19.2.4",Mn}var lh;function o0(){if(lh)return No.exports;lh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),No.exports=r0(),No.exports}var c0=o0();var nh="popstate";function ih(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function s0(r={}){function f(h,p){let{pathname:b="/",search:w="",hash:E=""}=Fa(h.location.hash.substring(1));return!b.startsWith("/")&&!b.startsWith(".")&&(b="/"+b),Uo("",{pathname:b,search:w,hash:E},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(h,p){let b=h.document.querySelector("base"),w="";if(b&&b.getAttribute("href")){let E=h.location.href,g=E.indexOf("#");w=g===-1?E:E.slice(0,g)}return w+"#"+(typeof p=="string"?p:Bn(p))}function o(h,p){Rt(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return d0(f,d,o,r)}function Ae(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function Rt(r,f){if(!r){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function f0(){return Math.random().toString(36).substring(2,10)}function uh(r,f){return{usr:r.state,key:r.key,idx:f,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Uo(r,f,d=null,o,h){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof f=="string"?Fa(f):f,state:d,key:f&&f.key||o||f0(),unstable_mask:h}}function Bn({pathname:r="/",search:f="",hash:d=""}){return f&&f!=="?"&&(r+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Fa(r){let f={};if(r){let d=r.indexOf("#");d>=0&&(f.hash=r.substring(d),r=r.substring(0,d));let o=r.indexOf("?");o>=0&&(f.search=r.substring(o),r=r.substring(0,o)),r&&(f.pathname=r)}return f}function d0(r,f,d,o={}){let{window:h=document.defaultView,v5Compat:p=!1}=o,b=h.history,w="POP",E=null,g=M();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function M(){return(b.state||{idx:null}).idx}function x(){w="POP";let H=M(),K=H==null?null:H-g;g=H,E&&E({action:w,location:k.location,delta:K})}function B(H,K){w="PUSH";let I=ih(H)?H:Uo(k.location,H,K);d&&d(I,H),g=M()+1;let J=uh(I,g),ye=k.createHref(I.unstable_mask||I);try{b.pushState(J,"",ye)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;h.location.assign(ye)}p&&E&&E({action:w,location:k.location,delta:1})}function U(H,K){w="REPLACE";let I=ih(H)?H:Uo(k.location,H,K);d&&d(I,H),g=M();let J=uh(I,g),ye=k.createHref(I.unstable_mask||I);b.replaceState(J,"",ye),p&&E&&E({action:w,location:k.location,delta:0})}function Z(H){return h0(H)}let k={get action(){return w},get location(){return r(h,b)},listen(H){if(E)throw new Error("A history only accepts one active listener");return h.addEventListener(nh,x),E=H,()=>{h.removeEventListener(nh,x),E=null}},createHref(H){return f(h,H)},createURL:Z,encodeLocation(H){let K=Z(H);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:B,replace:U,go(H){return b.go(H)}};return k}function h0(r,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ae(d,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:Bn(r);return o=o.replace(/ $/,"%20"),!f&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function dh(r,f,d="/"){return m0(r,f,d,!1)}function m0(r,f,d,o){let h=typeof f=="string"?Fa(f):f,p=la(h.pathname||"/",d);if(p==null)return null;let b=hh(r);p0(b);let w=null;for(let E=0;w==null&&E<b.length;++E){let g=A0(p);w=z0(b[E],g,o)}return w}function hh(r,f=[],d=[],o="",h=!1){let p=(b,w,E=h,g)=>{let M={relativePath:g===void 0?b.path||"":g,caseSensitive:b.caseSensitive===!0,childrenIndex:w,route:b};if(M.relativePath.startsWith("/")){if(!M.relativePath.startsWith(o)&&E)return;Ae(M.relativePath.startsWith(o),`Absolute route path "${M.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),M.relativePath=M.relativePath.slice(o.length)}let x=Ht([o,M.relativePath]),B=d.concat(M);b.children&&b.children.length>0&&(Ae(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),hh(b.children,f,B,x,E)),!(b.path==null&&!b.index)&&f.push({path:x,score:E0(x,b.index),routesMeta:B})};return r.forEach((b,w)=>{if(b.path===""||!b.path?.includes("?"))p(b,w);else for(let E of mh(b.path))p(b,w,!0,E)}),f}function mh(r){let f=r.split("/");if(f.length===0)return[];let[d,...o]=f,h=d.endsWith("?"),p=d.replace(/\?$/,"");if(o.length===0)return h?[p,""]:[p];let b=mh(o.join("/")),w=[];return w.push(...b.map(E=>E===""?p:[p,E].join("/"))),h&&w.push(...b),w.map(E=>r.startsWith("/")&&E===""?"/":E)}function p0(r){r.sort((f,d)=>f.score!==d.score?d.score-f.score:j0(f.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var g0=/^:[\w-]+$/,v0=3,y0=2,b0=1,x0=10,S0=-2,rh=r=>r==="*";function E0(r,f){let d=r.split("/"),o=d.length;return d.some(rh)&&(o+=S0),f&&(o+=y0),d.filter(h=>!rh(h)).reduce((h,p)=>h+(g0.test(p)?v0:p===""?b0:x0),o)}function j0(r,f){return r.length===f.length&&r.slice(0,-1).every((o,h)=>o===f[h])?r[r.length-1]-f[f.length-1]:0}function z0(r,f,d=!1){let{routesMeta:o}=r,h={},p="/",b=[];for(let w=0;w<o.length;++w){let E=o[w],g=w===o.length-1,M=p==="/"?f:f.slice(p.length)||"/",x=iu({path:E.relativePath,caseSensitive:E.caseSensitive,end:g},M),B=E.route;if(!x&&g&&d&&!o[o.length-1].route.index&&(x=iu({path:E.relativePath,caseSensitive:E.caseSensitive,end:!1},M)),!x)return null;Object.assign(h,x.params),b.push({params:h,pathname:Ht([p,x.pathname]),pathnameBase:R0(Ht([p,x.pathnameBase])),route:B}),x.pathnameBase!=="/"&&(p=Ht([p,x.pathnameBase]))}return b}function iu(r,f){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,o]=T0(r.path,r.caseSensitive,r.end),h=f.match(d);if(!h)return null;let p=h[0],b=p.replace(/(.)\/+$/,"$1"),w=h.slice(1);return{params:o.reduce((g,{paramName:M,isOptional:x},B)=>{if(M==="*"){let Z=w[B]||"";b=p.slice(0,p.length-Z.length).replace(/(.)\/+$/,"$1")}const U=w[B];return x&&!U?g[M]=void 0:g[M]=(U||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:b,pattern:r}}function T0(r,f=!1,d=!0){Rt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],h="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,w,E,g,M)=>{if(o.push({paramName:w,isOptional:E!=null}),E){let x=M.charAt(g+b.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),h+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":r!==""&&r!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,f?void 0:"i"),o]}function A0(r){try{return r.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Rt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),r}}function la(r,f){if(f==="/")return r;if(!r.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,o=r.charAt(d);return o&&o!=="/"?null:r.slice(d)||"/"}var C0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function w0(r,f="/"){let{pathname:d,search:o="",hash:h=""}=typeof r=="string"?Fa(r):r,p;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?p=oh(d.substring(1),"/"):p=oh(d,f)):p=f,{pathname:p,search:M0(o),hash:_0(h)}}function oh(r,f){let d=f.replace(/\/+$/,"").split("/");return r.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function Oo(r,f,d,o){return`Cannot include a '${r}' character in a manually specified \`to.${f}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function N0(r){return r.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function ph(r){let f=N0(r);return f.map((d,o)=>o===f.length-1?d.pathname:d.pathnameBase)}function Yo(r,f,d,o=!1){let h;typeof r=="string"?h=Fa(r):(h={...r},Ae(!h.pathname||!h.pathname.includes("?"),Oo("?","pathname","search",h)),Ae(!h.pathname||!h.pathname.includes("#"),Oo("#","pathname","hash",h)),Ae(!h.search||!h.search.includes("#"),Oo("#","search","hash",h)));let p=r===""||h.pathname==="",b=p?"/":h.pathname,w;if(b==null)w=d;else{let x=f.length-1;if(!o&&b.startsWith("..")){let B=b.split("/");for(;B[0]==="..";)B.shift(),x-=1;h.pathname=B.join("/")}w=x>=0?f[x]:"/"}let E=w0(h,w),g=b&&b!=="/"&&b.endsWith("/"),M=(p||b===".")&&d.endsWith("/");return!E.pathname.endsWith("/")&&(g||M)&&(E.pathname+="/"),E}var Ht=r=>r.join("/").replace(/\/\/+/g,"/"),R0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),M0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,_0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,O0=class{constructor(r,f,d,o=!1){this.status=r,this.statusText=f||"",this.internal=o,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function B0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function D0(r){return r.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function vh(r,f){let d=r;if(typeof d!="string"||!C0.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let o=d,h=!1;if(gh)try{let p=new URL(window.location.href),b=d.startsWith("//")?new URL(p.protocol+d):new URL(d),w=la(b.pathname,f);b.origin===p.origin&&w!=null?d=w+b.search+b.hash:h=!0}catch{Rt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:h,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yh=["POST","PUT","PATCH","DELETE"];new Set(yh);var U0=["GET",...yh];new Set(U0);var Dl=C.createContext(null);Dl.displayName="DataRouter";var uu=C.createContext(null);uu.displayName="DataRouterState";var H0=C.createContext(!1),bh=C.createContext({isTransitioning:!1});bh.displayName="ViewTransition";var L0=C.createContext(new Map);L0.displayName="Fetchers";var Y0=C.createContext(null);Y0.displayName="Await";var At=C.createContext(null);At.displayName="Navigation";var Dn=C.createContext(null);Dn.displayName="Location";var Lt=C.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var qo=C.createContext(null);qo.displayName="RouteError";var xh="REACT_ROUTER_ERROR",q0="REDIRECT",k0="ROUTE_ERROR_RESPONSE";function G0(r){if(r.startsWith(`${xh}:${q0}:{`))try{let f=JSON.parse(r.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function X0(r){if(r.startsWith(`${xh}:${k0}:{`))try{let f=JSON.parse(r.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new O0(f.status,f.statusText,f.data)}catch{}}function Q0(r,{relative:f}={}){Ae(Un(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=C.useContext(At),{hash:h,pathname:p,search:b}=Hn(r,{relative:f}),w=p;return d!=="/"&&(w=p==="/"?d:Ht([d,p])),o.createHref({pathname:w,search:b,hash:h})}function Un(){return C.useContext(Dn)!=null}function Na(){return Ae(Un(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Dn).location}var Sh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Eh(r){C.useContext(At).static||C.useLayoutEffect(r)}function Wa(){let{isDataRoute:r}=C.useContext(Lt);return r?ng():Z0()}function Z0(){Ae(Un(),"useNavigate() may be used only in the context of a <Router> component.");let r=C.useContext(Dl),{basename:f,navigator:d}=C.useContext(At),{matches:o}=C.useContext(Lt),{pathname:h}=Na(),p=JSON.stringify(ph(o)),b=C.useRef(!1);return Eh(()=>{b.current=!0}),C.useCallback((E,g={})=>{if(Rt(b.current,Sh),!b.current)return;if(typeof E=="number"){d.go(E);return}let M=Yo(E,JSON.parse(p),h,g.relative==="path");r==null&&f!=="/"&&(M.pathname=M.pathname==="/"?f:Ht([f,M.pathname])),(g.replace?d.replace:d.push)(M,g.state,g)},[f,d,p,h,r])}C.createContext(null);function V0(){let{matches:r}=C.useContext(Lt),f=r[r.length-1];return f?f.params:{}}function Hn(r,{relative:f}={}){let{matches:d}=C.useContext(Lt),{pathname:o}=Na(),h=JSON.stringify(ph(d));return C.useMemo(()=>Yo(r,JSON.parse(h),o,f==="path"),[r,h,o,f])}function K0(r,f){return jh(r,f)}function jh(r,f,d){Ae(Un(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=C.useContext(At),{matches:h}=C.useContext(Lt),p=h[h.length-1],b=p?p.params:{},w=p?p.pathname:"/",E=p?p.pathnameBase:"/",g=p&&p.route;{let H=g&&g.path||"";Th(w,!g||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let M=Na(),x;if(f){let H=typeof f=="string"?Fa(f):f;Ae(E==="/"||H.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${H.pathname}" was given in the \`location\` prop.`),x=H}else x=M;let B=x.pathname||"/",U=B;if(E!=="/"){let H=E.replace(/^\//,"").split("/");U="/"+B.replace(/^\//,"").split("/").slice(H.length).join("/")}let Z=dh(r,{pathname:U});Rt(g||Z!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Rt(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=I0(Z&&Z.map(H=>Object.assign({},H,{params:Object.assign({},b,H.params),pathname:Ht([E,o.encodeLocation?o.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?E:Ht([E,o.encodeLocation?o.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),h,d);return f&&k?C.createElement(Dn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...x},navigationType:"POP"}},k):k}function J0(){let r=lg(),f=B0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:o},p={padding:"2px 4px",backgroundColor:o},b=null;return console.error("Error handled by React Router default ErrorBoundary:",r),b=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:p},"ErrorBoundary")," or"," ",C.createElement("code",{style:p},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},f),d?C.createElement("pre",{style:h},d):null,b)}var F0=C.createElement(J0,null),zh=class extends C.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,f){return f.location!==r.location||f.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:f.error,location:f.location,revalidation:r.revalidation||f.revalidation}}componentDidCatch(r,f){this.props.onError?this.props.onError(r,f):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=X0(r.digest);d&&(r=d)}let f=r!==void 0?C.createElement(Lt.Provider,{value:this.props.routeContext},C.createElement(qo.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?C.createElement(W0,{error:r},f):f}};zh.contextType=H0;var Bo=new WeakMap;function W0({children:r,error:f}){let{basename:d}=C.useContext(At);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let o=G0(f.digest);if(o){let h=Bo.get(f);if(h)throw h;let p=vh(o.location,d);if(gh&&!Bo.get(f))if(p.isExternal||o.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const b=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:o.replace}));throw Bo.set(f,b),b}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return r}function $0({routeContext:r,match:f,children:d}){let o=C.useContext(Dl);return o&&o.static&&o.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=f.route.id),C.createElement(Lt.Provider,{value:r},d)}function I0(r,f=[],d){let o=d?.state;if(r==null){if(!o)return null;if(o.errors)r=o.matches;else if(f.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let h=r,p=o?.errors;if(p!=null){let M=h.findIndex(x=>x.route.id&&p?.[x.route.id]!==void 0);Ae(M>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,M+1))}let b=!1,w=-1;if(d&&o){b=o.renderFallback;for(let M=0;M<h.length;M++){let x=h[M];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(w=M),x.route.id){let{loaderData:B,errors:U}=o,Z=x.route.loader&&!B.hasOwnProperty(x.route.id)&&(!U||U[x.route.id]===void 0);if(x.route.lazy||Z){d.isStatic&&(b=!0),w>=0?h=h.slice(0,w+1):h=[h[0]];break}}}}let E=d?.onError,g=o&&E?(M,x)=>{E(M,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:D0(o.matches),errorInfo:x})}:void 0;return h.reduceRight((M,x,B)=>{let U,Z=!1,k=null,H=null;o&&(U=p&&x.route.id?p[x.route.id]:void 0,k=x.route.errorElement||F0,b&&(w<0&&B===0?(Th("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Z=!0,H=null):w===B&&(Z=!0,H=x.route.hydrateFallbackElement||null)));let K=f.concat(h.slice(0,B+1)),I=()=>{let J;return U?J=k:Z?J=H:x.route.Component?J=C.createElement(x.route.Component,null):x.route.element?J=x.route.element:J=M,C.createElement($0,{match:x,routeContext:{outlet:M,matches:K,isDataRoute:o!=null},children:J})};return o&&(x.route.ErrorBoundary||x.route.errorElement||B===0)?C.createElement(zh,{location:o.location,revalidation:o.revalidation,component:k,error:U,children:I(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:g}):I()},null)}function ko(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P0(r){let f=C.useContext(Dl);return Ae(f,ko(r)),f}function eg(r){let f=C.useContext(uu);return Ae(f,ko(r)),f}function tg(r){let f=C.useContext(Lt);return Ae(f,ko(r)),f}function Go(r){let f=tg(r),d=f.matches[f.matches.length-1];return Ae(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function ag(){return Go("useRouteId")}function lg(){let r=C.useContext(qo),f=eg("useRouteError"),d=Go("useRouteError");return r!==void 0?r:f.errors?.[d]}function ng(){let{router:r}=P0("useNavigate"),f=Go("useNavigate"),d=C.useRef(!1);return Eh(()=>{d.current=!0}),C.useCallback(async(h,p={})=>{Rt(d.current,Sh),d.current&&(typeof h=="number"?await r.navigate(h):await r.navigate(h,{fromRouteId:f,...p}))},[r,f])}var ch={};function Th(r,f,d){!f&&!ch[r]&&(ch[r]=!0,Rt(!1,d))}C.memo(ig);function ig({routes:r,future:f,state:d,isStatic:o,onError:h}){return jh(r,void 0,{state:d,isStatic:o,onError:h})}function On(r){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ug({basename:r="/",children:f=null,location:d,navigationType:o="POP",navigator:h,static:p=!1,unstable_useTransitions:b}){Ae(!Un(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=r.replace(/^\/*/,"/"),E=C.useMemo(()=>({basename:w,navigator:h,static:p,unstable_useTransitions:b,future:{}}),[w,h,p,b]);typeof d=="string"&&(d=Fa(d));let{pathname:g="/",search:M="",hash:x="",state:B=null,key:U="default",unstable_mask:Z}=d,k=C.useMemo(()=>{let H=la(g,w);return H==null?null:{location:{pathname:H,search:M,hash:x,state:B,key:U,unstable_mask:Z},navigationType:o}},[w,g,M,x,B,U,o,Z]);return Rt(k!=null,`<Router basename="${w}"> is not able to match the URL "${g}${M}${x}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:C.createElement(At.Provider,{value:E},C.createElement(Dn.Provider,{children:f,value:k}))}function rg({children:r,location:f}){return K0(Ho(r),f)}function Ho(r,f=[]){let d=[];return C.Children.forEach(r,(o,h)=>{if(!C.isValidElement(o))return;let p=[...f,h];if(o.type===C.Fragment){d.push.apply(d,Ho(o.props.children,p));return}Ae(o.type===On,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!o.props.index||!o.props.children,"An index route cannot have child routes.");let b={id:o.props.id||p.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(b.children=Ho(o.props.children,p)),d.push(b)}),d}var lu="get",nu="application/x-www-form-urlencoded";function ru(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function og(r){return ru(r)&&r.tagName.toLowerCase()==="button"}function cg(r){return ru(r)&&r.tagName.toLowerCase()==="form"}function sg(r){return ru(r)&&r.tagName.toLowerCase()==="input"}function fg(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function dg(r,f){return r.button===0&&(!f||f==="_self")&&!fg(r)}var au=null;function hg(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var mg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Do(r){return r!=null&&!mg.has(r)?(Rt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nu}"`),null):r}function pg(r,f){let d,o,h,p,b;if(cg(r)){let w=r.getAttribute("action");o=w?la(w,f):null,d=r.getAttribute("method")||lu,h=Do(r.getAttribute("enctype"))||nu,p=new FormData(r)}else if(og(r)||sg(r)&&(r.type==="submit"||r.type==="image")){let w=r.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let E=r.getAttribute("formaction")||w.getAttribute("action");if(o=E?la(E,f):null,d=r.getAttribute("formmethod")||w.getAttribute("method")||lu,h=Do(r.getAttribute("formenctype"))||Do(w.getAttribute("enctype"))||nu,p=new FormData(w,r),!hg()){let{name:g,type:M,value:x}=r;if(M==="image"){let B=g?`${g}.`:"";p.append(`${B}x`,"0"),p.append(`${B}y`,"0")}else g&&p.append(g,x)}}else{if(ru(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=lu,o=null,h=nu,b=r}return p&&h==="text/plain"&&(b=p,p=void 0),{action:o,method:d.toLowerCase(),encType:h,formData:p,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xo(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function gg(r,f,d,o){let h=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${o}`:h.pathname=`${h.pathname}.${o}`:h.pathname==="/"?h.pathname=`_root.${o}`:f&&la(h.pathname,f)==="/"?h.pathname=`${f.replace(/\/$/,"")}/_root.${o}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${o}`,h}async function vg(r,f){if(r.id in f)return f[r.id];try{let d=await import(r.module);return f[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yg(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function bg(r,f,d){let o=await Promise.all(r.map(async h=>{let p=f.routes[h.route.id];if(p){let b=await vg(p,d);return b.links?b.links():[]}return[]}));return jg(o.flat(1).filter(yg).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function sh(r,f,d,o,h,p){let b=(E,g)=>d[g]?E.route.id!==d[g].route.id:!0,w=(E,g)=>d[g].pathname!==E.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==E.params["*"];return p==="assets"?f.filter((E,g)=>b(E,g)||w(E,g)):p==="data"?f.filter((E,g)=>{let M=o.routes[E.route.id];if(!M||!M.hasLoader)return!1;if(b(E,g)||w(E,g))return!0;if(E.route.shouldRevalidate){let x=E.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:E.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function xg(r,f,{includeHydrateFallback:d}={}){return Sg(r.map(o=>{let h=f.routes[o.route.id];if(!h)return[];let p=[h.module];return h.clientActionModule&&(p=p.concat(h.clientActionModule)),h.clientLoaderModule&&(p=p.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(p=p.concat(h.hydrateFallbackModule)),h.imports&&(p=p.concat(h.imports)),p}).flat(1))}function Sg(r){return[...new Set(r)]}function Eg(r){let f={},d=Object.keys(r).sort();for(let o of d)f[o]=r[o];return f}function jg(r,f){let d=new Set;return new Set(f),r.reduce((o,h)=>{let p=JSON.stringify(Eg(h));return d.has(p)||(d.add(p),o.push({key:p,link:h})),o},[])}function Ah(){let r=C.useContext(Dl);return Xo(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function zg(){let r=C.useContext(uu);return Xo(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Qo=C.createContext(void 0);Qo.displayName="FrameworkContext";function Ch(){let r=C.useContext(Qo);return Xo(r,"You must render this element inside a <HydratedRouter> element"),r}function Tg(r,f){let d=C.useContext(Qo),[o,h]=C.useState(!1),[p,b]=C.useState(!1),{onFocus:w,onBlur:E,onMouseEnter:g,onMouseLeave:M,onTouchStart:x}=f,B=C.useRef(null);C.useEffect(()=>{if(r==="render"&&b(!0),r==="viewport"){let k=K=>{K.forEach(I=>{b(I.isIntersecting)})},H=new IntersectionObserver(k,{threshold:.5});return B.current&&H.observe(B.current),()=>{H.disconnect()}}},[r]),C.useEffect(()=>{if(o){let k=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(k)}}},[o]);let U=()=>{h(!0)},Z=()=>{h(!1),b(!1)};return d?r!=="intent"?[p,B,{}]:[p,B,{onFocus:_n(w,U),onBlur:_n(E,Z),onMouseEnter:_n(g,U),onMouseLeave:_n(M,Z),onTouchStart:_n(x,U)}]:[!1,B,{}]}function _n(r,f){return d=>{r&&r(d),d.defaultPrevented||f(d)}}function Ag({page:r,...f}){let{router:d}=Ah(),o=C.useMemo(()=>dh(d.routes,r,d.basename),[d.routes,r,d.basename]);return o?C.createElement(wg,{page:r,matches:o,...f}):null}function Cg(r){let{manifest:f,routeModules:d}=Ch(),[o,h]=C.useState([]);return C.useEffect(()=>{let p=!1;return bg(r,f,d).then(b=>{p||h(b)}),()=>{p=!0}},[r,f,d]),o}function wg({page:r,matches:f,...d}){let o=Na(),{future:h,manifest:p,routeModules:b}=Ch(),{basename:w}=Ah(),{loaderData:E,matches:g}=zg(),M=C.useMemo(()=>sh(r,f,g,p,o,"data"),[r,f,g,p,o]),x=C.useMemo(()=>sh(r,f,g,p,o,"assets"),[r,f,g,p,o]),B=C.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let k=new Set,H=!1;if(f.forEach(I=>{let J=p.routes[I.route.id];!J||!J.hasLoader||(!M.some(ye=>ye.route.id===I.route.id)&&I.route.id in E&&b[I.route.id]?.shouldRevalidate||J.hasClientLoader?H=!0:k.add(I.route.id))}),k.size===0)return[];let K=gg(r,w,h.unstable_trailingSlashAwareDataRequests,"data");return H&&k.size>0&&K.searchParams.set("_routes",f.filter(I=>k.has(I.route.id)).map(I=>I.route.id).join(",")),[K.pathname+K.search]},[w,h.unstable_trailingSlashAwareDataRequests,E,o,p,M,f,r,b]),U=C.useMemo(()=>xg(x,p),[x,p]),Z=Cg(x);return C.createElement(C.Fragment,null,B.map(k=>C.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...d})),U.map(k=>C.createElement("link",{key:k,rel:"modulepreload",href:k,...d})),Z.map(({key:k,link:H})=>C.createElement("link",{key:k,nonce:d.nonce,...H,crossOrigin:H.crossOrigin??d.crossOrigin})))}function Ng(...r){return f=>{r.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var Rg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rg&&(window.__reactRouterVersion="7.13.1")}catch{}function Mg({basename:r,children:f,unstable_useTransitions:d,window:o}){let h=C.useRef();h.current==null&&(h.current=s0({window:o,v5Compat:!0}));let p=h.current,[b,w]=C.useState({action:p.action,location:p.location}),E=C.useCallback(g=>{d===!1?w(g):C.startTransition(()=>w(g))},[d]);return C.useLayoutEffect(()=>p.listen(E),[p,E]),C.createElement(ug,{basename:r,children:f,location:b.location,navigationType:b.action,navigator:p,unstable_useTransitions:d})}var wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nh=C.forwardRef(function({onClick:f,discover:d="render",prefetch:o="none",relative:h,reloadDocument:p,replace:b,unstable_mask:w,state:E,target:g,to:M,preventScrollReset:x,viewTransition:B,unstable_defaultShouldRevalidate:U,...Z},k){let{basename:H,navigator:K,unstable_useTransitions:I}=C.useContext(At),J=typeof M=="string"&&wh.test(M),ye=vh(M,H);M=ye.to;let be=Q0(M,{relative:h}),Te=Na(),W=null;if(w){let Oe=Yo(w,[],Te.unstable_mask?Te.unstable_mask.pathname:"/",!0);H!=="/"&&(Oe.pathname=Oe.pathname==="/"?H:Ht([H,Oe.pathname])),W=K.createHref(Oe)}let[Ne,Ve,Mt]=Tg(o,Z),mt=Dg(M,{replace:b,unstable_mask:w,state:E,target:g,preventScrollReset:x,relative:h,viewTransition:B,unstable_defaultShouldRevalidate:U,unstable_useTransitions:I});function Ke(Oe){f&&f(Oe),Oe.defaultPrevented||mt(Oe)}let _t=!(ye.isExternal||p),pt=C.createElement("a",{...Z,...Mt,href:(_t?W:void 0)||ye.absoluteURL||be,onClick:_t?Ke:f,ref:Ng(k,Ve),target:g,"data-discover":!J&&d==="render"?"true":void 0});return Ne&&!J?C.createElement(C.Fragment,null,pt,C.createElement(Ag,{page:be})):pt});Nh.displayName="Link";var _g=C.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:o="",end:h=!1,style:p,to:b,viewTransition:w,children:E,...g},M){let x=Hn(b,{relative:g.relative}),B=Na(),U=C.useContext(uu),{navigator:Z,basename:k}=C.useContext(At),H=U!=null&&qg(x)&&w===!0,K=Z.encodeLocation?Z.encodeLocation(x).pathname:x.pathname,I=B.pathname,J=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;d||(I=I.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&k&&(J=la(J,k)||J);const ye=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let be=I===K||!h&&I.startsWith(K)&&I.charAt(ye)==="/",Te=J!=null&&(J===K||!h&&J.startsWith(K)&&J.charAt(K.length)==="/"),W={isActive:be,isPending:Te,isTransitioning:H},Ne=be?f:void 0,Ve;typeof o=="function"?Ve=o(W):Ve=[o,be?"active":null,Te?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Mt=typeof p=="function"?p(W):p;return C.createElement(Nh,{...g,"aria-current":Ne,className:Ve,ref:M,style:Mt,to:b,viewTransition:w},typeof E=="function"?E(W):E)});_g.displayName="NavLink";var Og=C.forwardRef(({discover:r="render",fetcherKey:f,navigate:d,reloadDocument:o,replace:h,state:p,method:b=lu,action:w,onSubmit:E,relative:g,preventScrollReset:M,viewTransition:x,unstable_defaultShouldRevalidate:B,...U},Z)=>{let{unstable_useTransitions:k}=C.useContext(At),H=Lg(),K=Yg(w,{relative:g}),I=b.toLowerCase()==="get"?"get":"post",J=typeof w=="string"&&wh.test(w),ye=be=>{if(E&&E(be),be.defaultPrevented)return;be.preventDefault();let Te=be.nativeEvent.submitter,W=Te?.getAttribute("formmethod")||b,Ne=()=>H(Te||be.currentTarget,{fetcherKey:f,method:W,navigate:d,replace:h,state:p,relative:g,preventScrollReset:M,viewTransition:x,unstable_defaultShouldRevalidate:B});k&&d!==!1?C.startTransition(()=>Ne()):Ne()};return C.createElement("form",{ref:Z,method:I,action:K,onSubmit:o?E:ye,...U,"data-discover":!J&&r==="render"?"true":void 0})});Og.displayName="Form";function Bg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rh(r){let f=C.useContext(Dl);return Ae(f,Bg(r)),f}function Dg(r,{target:f,replace:d,unstable_mask:o,state:h,preventScrollReset:p,relative:b,viewTransition:w,unstable_defaultShouldRevalidate:E,unstable_useTransitions:g}={}){let M=Wa(),x=Na(),B=Hn(r,{relative:b});return C.useCallback(U=>{if(dg(U,f)){U.preventDefault();let Z=d!==void 0?d:Bn(x)===Bn(B),k=()=>M(r,{replace:Z,unstable_mask:o,state:h,preventScrollReset:p,relative:b,viewTransition:w,unstable_defaultShouldRevalidate:E});g?C.startTransition(()=>k()):k()}},[x,M,B,d,o,h,f,r,p,b,w,E,g])}var Ug=0,Hg=()=>`__${String(++Ug)}__`;function Lg(){let{router:r}=Rh("useSubmit"),{basename:f}=C.useContext(At),d=ag(),o=r.fetch,h=r.navigate;return C.useCallback(async(p,b={})=>{let{action:w,method:E,encType:g,formData:M,body:x}=pg(p,f);if(b.navigate===!1){let B=b.fetcherKey||Hg();await o(B,d,b.action||w,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:M,body:x,formMethod:b.method||E,formEncType:b.encType||g,flushSync:b.flushSync})}else await h(b.action||w,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:M,body:x,formMethod:b.method||E,formEncType:b.encType||g,replace:b.replace,state:b.state,fromRouteId:d,flushSync:b.flushSync,viewTransition:b.viewTransition})},[o,h,f,d])}function Yg(r,{relative:f}={}){let{basename:d}=C.useContext(At),o=C.useContext(Lt);Ae(o,"useFormAction must be used inside a RouteContext");let[h]=o.matches.slice(-1),p={...Hn(r||".",{relative:f})},b=Na();if(r==null){p.search=b.search;let w=new URLSearchParams(p.search),E=w.getAll("index");if(E.some(M=>M==="")){w.delete("index"),E.filter(x=>x).forEach(x=>w.append("index",x));let M=w.toString();p.search=M?`?${M}`:""}}return(!r||r===".")&&h.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Ht([d,p.pathname])),Bn(p)}function qg(r,{relative:f}={}){let d=C.useContext(bh);Ae(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Rh("useViewTransitionState"),h=Hn(r,{relative:f});if(!d.isTransitioning)return!1;let p=la(d.currentLocation.pathname,o)||d.currentLocation.pathname,b=la(d.nextLocation.pathname,o)||d.nextLocation.pathname;return iu(h.pathname,b)!=null||iu(h.pathname,p)!=null}const kg="/nowfix/assets/nowfix-logo1-tax9NvMG.png",Gg=`
  .brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
    text-decoration: none;
  }

  .brand-logo-img {
    height: 36px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  .brand-logo-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    line-height: 1;
    white-space: nowrap;
  }

  .brand-logo-now { color: var(--primary, #1F5BB5); }
  .brand-logo-fix { color: var(--orange, #FF9F1C); }
`;function Zo(){const r=Wa();return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:Gg}),c.jsxs("div",{className:"brand-logo",onClick:()=>r("/"),children:[c.jsx("img",{src:kg,alt:"NowFix",className:"brand-logo-img"}),c.jsxs("span",{className:"brand-logo-text",children:[c.jsx("span",{className:"brand-logo-now",children:"NOW"}),c.jsx("span",{className:"brand-logo-fix",children:"FIX"})]})]})]})}const Xg=`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap');

  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    height: var(--navbar-height, 70px);
    background: var(--bg, #FFFFFF);
    border-bottom: 1px solid var(--border, #E5E7EB);
    display: flex;
    align-items: center;
    padding: 0 2rem;
    transition: box-shadow var(--transition-slow, 0.3s ease);
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .nav.scrolled {
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
  }

  .nav-inner {
    width: 100%;
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    transition: gap 0.3s ease;
  }

  /* Desktop Search & Location */
  .nav-search-container {
    display: flex;
    flex: 1;
    max-width: 500px;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    overflow: hidden;
    transition: border-color 0.2s, box-shadow 0.2s, max-width 0.3s ease;
  }

  .nav-search-container:focus-within {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  .nav-location {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    background: var(--bg-2, #F9FAFB);
    border-right: 1px solid var(--border, #E5E7EB);
    cursor: pointer;
    color: var(--text-2, #374151);
    font-size: 0.85rem;
    font-weight: 600;
    white-space: nowrap;
    transition: background 0.2s, padding 0.3s ease, font-size 0.3s ease;
  }

  .nav-location:hover { background: #F3F4F6; }
  .nav-location svg { color: var(--orange, #FF9F1C); width: 16px; height: 16px; transition: width 0.3s, height 0.3s; }

  .nav-search-box {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    flex: 1;
    min-width: 0; /* Allows input to shrink gracefully */
    transition: padding 0.3s ease;
  }

  .nav-search-box svg { color: #9CA3AF; width: 16px; height: 16px; flex-shrink: 0; }
  .nav-search-box input {
    border: none; outline: none; width: 100%;
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.85rem; color: var(--text, #111827); background: transparent;
    text-overflow: ellipsis;
    transition: font-size 0.3s ease;
  }

  .nav-links {
    display: flex; align-items: center; gap: 0.25rem; list-style: none;
  }

  .nav-links a {
    font-size: 0.875rem; font-weight: 500; color: var(--text-3, #4B5563);
    padding: 0.45rem 0.9rem; border-radius: var(--radius-sm, 4px);
    transition: color var(--transition, 0.2s ease), background var(--transition, 0.2s ease);
    text-decoration: none; display: block; white-space: nowrap;
  }

  .nav-links a:hover { color: var(--text, #111827); background: var(--bg-2, #F3F4F6); }

  .nav-right { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }

  .nav-login-btn {
    font-family: var(--font-body, 'Inter', sans-serif); font-size: 0.875rem; font-weight: 600;
    color: white; background: var(--primary, #1F5BB5); padding: 0.5rem 1.35rem;
    border-radius: var(--radius-md, 6px); border: none; cursor: pointer;
    transition: background var(--transition, 0.2s ease), transform var(--transition, 0.2s ease), box-shadow var(--transition, 0.2s ease), padding 0.3s ease, font-size 0.3s ease;
    box-shadow: var(--shadow-primary, 0 4px 14px 0 rgba(31,91,181,0.39)); white-space: nowrap;
  }

  .nav-login-btn:hover { background: var(--primary-dark, #1A4B96); transform: translateY(-1px); box-shadow: 0 6px 24px rgba(31,91,181,0.35); }
  .nav-login-btn:active { transform: translateY(0); }

  /* Mobile Actions (Search Icon + Hamburger) */
  .mobile-actions {
    display: none;
    align-items: center;
    gap: 0.5rem;
  }

  .mobile-icon-btn {
    background: none; border: none; padding: 8px;
    color: var(--text, #111827); cursor: pointer;
    border-radius: var(--radius-sm, 4px); transition: background 0.2s ease;
    display: flex; align-items: center; justify-content: center;
  }
  
  .mobile-icon-btn:hover { background: var(--bg-2, #F3F4F6); }

  .nav-hamburger {
    display: flex; flex-direction: column; justify-content: center; gap: 5px;
    width: 38px; height: 38px; padding: 6px;
    border-radius: var(--radius-sm, 4px); transition: background var(--transition, 0.2s ease);
    background: none; border: none; cursor: pointer; flex-shrink: 0;
  }

  .nav-hamburger:hover { background: var(--bg-2, #F3F4F6); }

  .nav-hamburger span {
    display: block; height: 2px; background: var(--text, #111827); border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease; transform-origin: center;
  }

  .nav-hamburger span:nth-child(1) { width: 22px; }
  .nav-hamburger span:nth-child(2) { width: 15px; }
  .nav-hamburger span:nth-child(3) { width: 22px; }

  .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); width: 22px; }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; }
  .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 22px; }

  /* Mobile Search Dropdown Bar */
  .mobile-search-dropdown {
    position: absolute; top: var(--navbar-height, 70px); left: 0; right: 0;
    background: white; padding: 1rem 1.5rem; border-bottom: 1px solid var(--border, #E5E7EB);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 98;
    transform: translateY(-100%); opacity: 0; pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .mobile-search-dropdown.open { transform: translateY(0); opacity: 1; pointer-events: all; }

  /* Mobile Navigation Menu */
  .nav-mobile {
    position: fixed; top: var(--navbar-height, 70px); left: 0; right: 0;
    background: var(--bg, #FFFFFF); border-bottom: 1px solid var(--border, #E5E7EB);
    padding: 1rem 1.5rem 1.5rem; display: flex; flex-direction: column; gap: 0.15rem;
    z-index: 99; box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
    transform: translateY(-8px); opacity: 0; pointer-events: none; transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .nav-mobile.open { opacity: 1; transform: translateY(0); pointer-events: all; }

  .nav-mobile a {
    font-size: 0.95rem; font-weight: 500; color: var(--text-2, #374151);
    padding: 0.8rem 0.5rem; border-bottom: 1px solid var(--border, #E5E7EB);
    transition: color var(--transition, 0.2s ease); text-decoration: none; display: block;
  }

  .nav-mobile a:last-of-type { border-bottom: none; }
  .nav-mobile a:hover { color: var(--primary, #1F5BB5); }

  .nav-mobile-buttons {
    display: flex; flex-direction: column; gap: 0.6rem; margin-top: 1rem;
    padding-top: 1rem; border-top: 1px solid var(--border, #E5E7EB);
  }

  .nav-mobile-login {
    padding: 0.8rem; border-radius: var(--radius-md, 6px); font-size: 0.9rem;
    font-weight: 600; width: 100%; font-family: var(--font-body, 'Inter', sans-serif);
    cursor: pointer; background: var(--primary, #1F5BB5); color: white; border: none;
    transition: background var(--transition, 0.2s ease);
  }

  .nav-mobile-login:hover { background: var(--primary-dark, #1A4B96); }

  /* Professional Location Modal */
  .modal-overlay {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(17, 24, 39, 0.6); backdrop-filter: blur(4px);
    z-index: 1000; display: flex; justify-content: center; align-items: center;
    opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
  }

  .modal-overlay.open { opacity: 1; pointer-events: all; }

  .modal-content {
    background: white; border-radius: var(--radius-lg, 12px);
    width: 90%; max-width: 420px; padding: 1.5rem;
    transform: translateY(20px); transition: transform 0.3s ease;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .modal-overlay.open .modal-content { transform: translateY(0); }

  .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
  .modal-header h3 { font-size: 1.25rem; font-weight: 700; color: var(--text, #111827); margin: 0; }
  
  .modal-close {
    background: none; border: none; font-size: 1.5rem; line-height: 1;
    cursor: pointer; color: #6B7280; transition: color 0.2s; padding: 0;
  }
  .modal-close:hover { color: #111827; }

  .city-group { margin-bottom: 1.25rem; }
  .city-group-title {
    font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;
    color: #6B7280; margin-bottom: 0.75rem; font-weight: 600;
  }

  .city-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0.875rem 1rem; border: 1px solid var(--border, #E5E7EB);
    border-radius: 8px; margin-bottom: 0.5rem; transition: all 0.2s;
  }

  .city-item.active {
    border-color: var(--primary, #1F5BB5); background: #EFF4FF; cursor: pointer;
  }
  .city-item.active .city-name { color: var(--primary, #1F5BB5); font-weight: 600; }
  
  .city-item.disabled {
    background: #F9FAFB; cursor: not-allowed; opacity: 0.6;
  }
  .city-item.disabled .city-name { color: #6B7280; font-weight: 500; }

  .city-badge {
    font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.5rem;
    border-radius: 12px; background: #E5E7EB; color: #4B5563;
  }

  /* --- RESPONSIVE BREAKPOINTS --- */

  /* Tablet (Landscape) - Hide page links, let Search flex fully */
  @media (max-width: 1024px) {
    .nav-links { display: none; }
    .nav-search-container { max-width: 100%; } /* Let it fill the space between logo and login */
    .nav-inner { gap: 1rem; }
  }

  /* Tablet (Portrait) - Gracefully shrink the search and location elements */
  @media (max-width: 900px) {
    .nav-location { padding: 8px 10px; font-size: 0.75rem; }
    .nav-location svg { width: 14px; height: 14px; }
    .nav-search-box { padding: 8px 10px; }
    .nav-search-box input { font-size: 0.8rem; }
    .nav-login-btn { padding: 0.45rem 1rem; font-size: 0.8rem; }
  }

  /* Mobile - Hide desktop search & login, show mobile icons */
  @media (max-width: 768px) {
    .nav-search-container { display: none; }
    .nav-right { display: none; }
    .mobile-actions { display: flex; }
    .nav { padding: 0 1.25rem; }
  }
`,fh=[{label:"Services",href:"#services"},{label:"How It Works",href:"#how-it-works"},{label:"Reviews",href:"#reviews"}],Qg=["Jaipur","Jodhpur","Sri Ganganagar","Hanumangarh"];function Zg(){const[r,f]=C.useState(!1),[d,o]=C.useState(!1),[h,p]=C.useState(!1),[b,w]=C.useState(!1),[E,g]=C.useState(""),M=Wa();C.useEffect(()=>{const U=()=>f(window.scrollY>10);return window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)},[]);const x=()=>{p(!h),d&&o(!1)},B=()=>{o(!d),h&&p(!1)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:Xg}),c.jsx("div",{className:`modal-overlay${b?" open":""}`,onClick:()=>w(!1),children:c.jsxs("div",{className:"modal-content",onClick:U=>U.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{children:"Select your city"}),c.jsx("button",{className:"modal-close",onClick:()=>w(!1),children:"×"})]}),c.jsxs("div",{className:"city-group",children:[c.jsx("div",{className:"city-group-title",children:"Available Now"}),c.jsxs("div",{className:"city-item active",onClick:()=>w(!1),children:[c.jsx("span",{className:"city-name",children:"Bikaner, Rajasthan"}),c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--primary)"},children:c.jsx("polyline",{points:"20 6 9 17 4 12"})})]})]}),c.jsxs("div",{className:"city-group",children:[c.jsx("div",{className:"city-group-title",children:"Coming Soon"}),Qg.map(U=>c.jsxs("div",{className:"city-item disabled",children:[c.jsxs("span",{className:"city-name",children:[U,", Rajasthan"]}),c.jsx("span",{className:"city-badge",children:"Soon"})]},U))]})]})}),c.jsx("nav",{className:`nav${r?" scrolled":""}`,children:c.jsxs("div",{className:"nav-inner",children:[c.jsx(Zo,{}),c.jsxs("div",{className:"nav-search-container",children:[c.jsxs("div",{className:"nav-location",onClick:()=>w(!0),children:[c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan",c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"14px",height:"14px",color:"#9CA3AF",marginLeft:"4px"},children:c.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),c.jsxs("div",{className:"nav-search-box",children:[c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),c.jsx("input",{type:"text",placeholder:"Search for AC repair, plumbing...",value:E,onChange:U=>g(U.target.value)})]})]}),c.jsx("ul",{className:"nav-links",children:fh.map(U=>c.jsx("li",{children:c.jsx("a",{href:U.href,children:U.label})},U.label))}),c.jsx("div",{className:"nav-right",children:c.jsx("button",{className:"nav-login-btn",onClick:()=>M("/login"),children:"Login →"})}),c.jsxs("div",{className:"mobile-actions",children:[c.jsx("button",{className:"mobile-icon-btn",onClick:x,"aria-label":"Toggle search",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h?c.jsxs(c.Fragment,{children:[c.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),c.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})}),c.jsxs("button",{className:`nav-hamburger${d?" open":""}`,onClick:B,"aria-label":"Toggle menu",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]})]})}),c.jsx("div",{className:`mobile-search-dropdown${h?" open":""}`,children:c.jsxs("div",{className:"nav-search-container",style:{display:"flex",width:"100%",maxWidth:"100%",flexDirection:"column",border:"none",boxShadow:"none"},children:[c.jsxs("div",{className:"nav-location",style:{borderRight:"none",borderBottom:"1px solid var(--border)",width:"100%",borderRadius:"8px 8px 0 0",border:"1px solid var(--border)"},onClick:()=>{p(!1),w(!0)},children:[c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan"]}),c.jsxs("div",{className:"nav-search-box",style:{width:"100%",border:"1px solid var(--border)",borderTop:"none",borderRadius:"0 0 8px 8px",background:"var(--bg-2)"},children:[c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),c.jsx("input",{type:"text",placeholder:"Search for services...",value:E,onChange:U=>g(U.target.value),autoFocus:h})]})]})}),c.jsxs("div",{className:`nav-mobile${d?" open":""}`,children:[fh.map(U=>c.jsx("a",{href:U.href,onClick:()=>o(!1),children:U.label},U.label)),c.jsx("div",{className:"nav-mobile-buttons",children:c.jsx("button",{className:"nav-mobile-login",onClick:()=>{M("/login"),o(!1)},children:"Login →"})})]})]})}const Vg="/nowfix/assets/hero-bg-BUzEpsbl.webp",Kg=`
  .hero {
    padding-top: var(--navbar-height);
    background: var(--bg);
    font-family: var(--font-body);
    overflow-x: hidden;
  }

  .hero-main {
  position: relative;
  padding: 56px 1.25rem 48px;
  text-align: center;
  overflow: hidden;
}
  .hero-bg {
  position: absolute;
  inset: 0;
  background-image: url(${Vg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
  180deg,
  rgba(0,0,0,0.1) 0%,
  rgba(0,0,0,0.4) 50%,
  rgba(0,0,0,0.1) 100%
);
}

  .hero-inner {
  position: relative;
  z-index: 2;

  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: white;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-full);
    padding: 5px 14px;
    margin-bottom: 20px;
    box-shadow: var(--shadow-sm);
  }

  .hero-badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--orange);
    animation: heroBlink 2s infinite;
    flex-shrink: 0;
  }

  @keyframes heroBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .hero-badge span {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--text-2);
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .hero-headline {
    font-family: var(--font-heading);
    font-size: clamp(1.75rem, 5vw, 3.4rem);
    font-weight: 800;
    color: white;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin-bottom: 14px;
    max-width: 700px;
    padding: 0 0.5rem;
  }

  .hero-headline-blue { color: var(--orange); }
  .hero-headline-orange { color: var(--orange); }

  .hero-sub {
    font-size: 0.92rem;
    color: rgba(255, 255, 255, 0.91);
    line-height: 1.7;
    max-width: 440px;
    margin-bottom: 28px;
    font-weight: 400;
    padding: 0 0.5rem;
  }

  .hero-cta {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 40px;
  }

  .hero-btn-primary {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 600;
    color: white;
    background: var(--primary);
    padding: 0.75rem 2rem;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-primary);
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
    white-space: nowrap;
  }

  .hero-btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(31,91,181,0.35);
  }

  .hero-btn-primary:active { transform: translateY(0); }

  /* Stats row */
  .hero-stats {
    display: flex;
    align-items: center;
    background: white;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    width: 100%;
    max-width: 640px;
  }

  .hero-stat {
    flex: 1;
    padding: 14px 8px;
    text-align: center;
    position: relative;
    transition: background var(--transition);
    min-width: 0;
  }

  .hero-stat:hover { background: var(--bg-2); }

  .hero-stat:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: var(--border);
  }

  .hero-stat-value {
    font-family: var(--font-heading);
    font-size: clamp(0.85rem, 2.5vw, 1.1rem);
    font-weight: 800;
    color: var(--primary);
    letter-spacing: -0.02em;
    line-height: 1.2;
    white-space: nowrap;
  }

  .hero-stat-label {
    font-size: clamp(0.58rem, 1.5vw, 0.68rem);
    color: var(--text-3);
    font-weight: 500;
    margin-top: 2px;
    line-height: 1.3;
  }

  /* Services section */
  .hero-services {
    background: var(--bg);
    padding: 40px 1.25rem 56px;
    border-top: 1px solid var(--border);
  }

  .hero-services-inner {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .hero-services-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .hero-services-title {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .hero-services-all {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--primary);
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-body);
    transition: opacity var(--transition);
  }

  .hero-services-all:hover { opacity: 0.7; }

  .hero-services-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
  }

  .hero-svc-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 6px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-sm);
    min-width: 0;
  }

  .hero-svc-card:hover {
    border-color: var(--primary);
    background: var(--primary-light);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }

  .hero-svc-icon {
    width: 48px;
    height: 48px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  .hero-svc-card:hover .hero-svc-icon { transform: scale(1.1); }

  .hero-svc-icon svg { width: 24px; height: 24px; }

  .hero-svc-name {
    font-size: clamp(0.58rem, 1.2vw, 0.7rem);
    font-weight: 600;
    color: var(--text-2);
    text-align: center;
    line-height: 1.3;
    transition: color 0.2s ease;
    word-break: break-word;
  }

  .hero-svc-card:hover .hero-svc-name { color: var(--primary); }

  @media (max-width: 900px) {
    .hero-services-grid { grid-template-columns: repeat(4, 1fr); gap: 10px; }
  }

  @media (max-width: 480px) {
    .hero-main { padding: 40px 1rem 36px; }
    .hero-services { padding: 32px 1rem 48px; }
    .hero-btn-primary { width: 100%; text-align: center; }
    .hero-cta { width: 100%; }
    .hero-services-grid { grid-template-columns: repeat(4, 1fr); gap: 8px; }
    .hero-svc-icon { width: 42px; height: 42px; }
  }
`,Jg=[{name:"Plumbing",color:"#eff6ff",iconColor:"#2563eb",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v4h4V6h4v2h4V4a2 2 0 0 0-2-2z"}),c.jsx("path",{d:"M4 8v10a2 2 0 0 0 2 2h3"}),c.jsx("path",{d:"M18 12h-8"}),c.jsx("path",{d:"M18 12a4 4 0 0 1 0 8h-5"}),c.jsx("path",{d:"M9 20v-4"})]})},{name:"Electrician",color:"#fefce8",iconColor:"#ca8a04",icon:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})},{name:"AC Repair",color:"#f0fdf4",iconColor:"#16a34a",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"6",width:"20",height:"8",rx:"2"}),c.jsx("path",{d:"M7 14v4"}),c.jsx("path",{d:"M12 14v4"}),c.jsx("path",{d:"M17 14v4"}),c.jsx("path",{d:"M6 10h.01"}),c.jsx("path",{d:"M10 10h4"})]})},{name:"Cleaning",color:"#fdf4ff",iconColor:"#a21caf",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M3 22l4-1 12.5-12.5a2.12 2.12 0 0 0-3-3L4 18l-1 4z"}),c.jsx("path",{d:"M14.5 5.5l3 3"}),c.jsx("line",{x1:"8",y1:"22",x2:"8",y2:"18"}),c.jsx("line",{x1:"4",y1:"19",x2:"8",y2:"19"})]})},{name:"Carpentry",color:"#fff7ed",iconColor:"#c2410c",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M15 12l-8.5 8.5c-.83.83-2.17.83-3 0a2.12 2.12 0 0 1 0-3L12 9"}),c.jsx("path",{d:"M17.64 15L22 10.64"}),c.jsx("path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"})]})},{name:"Appliance Repair",color:"#eff6ff",iconColor:"#1d4ed8",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),c.jsx("path",{d:"M8 21h8"}),c.jsx("path",{d:"M12 17v4"}),c.jsx("path",{d:"M7 8h.01"}),c.jsx("path",{d:"M11 8h.01"})]})},{name:"Painting",color:"#fff1f2",iconColor:"#e11d48",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M18.37 2.63L14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3z"}),c.jsx("path",{d:"M9 8c-2 3-4 3.5-7 4l8 8c1-.5 3.5-2 4-7"})]})},{name:"Pest Control",color:"#f0fdf4",iconColor:"#15803d",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 22c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8 4.03 8 9 8z"}),c.jsx("path",{d:"M15 9c0-1.66-1.34-3-3-3s-3 1.34-3 3"}),c.jsx("path",{d:"M9 14h6"}),c.jsx("path",{d:"M9 17h6"}),c.jsx("path",{d:"M5 9l-2-2"}),c.jsx("path",{d:"M19 9l2-2"}),c.jsx("path",{d:"M5 19l-2 2"}),c.jsx("path",{d:"M19 19l2 2"})]})}],Fg=[{value:"500+",label:"Happy Customers"},{value:"100+",label:"Verified Workers"},{value:"4.8★",label:"Average Rating"},{value:"Same Day",label:"Service Available"}];function Wg(){const r=Wa();return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:Kg}),c.jsxs("section",{className:"hero",children:[c.jsxs("div",{className:"hero-main",children:[c.jsx("div",{className:"hero-bg"}),c.jsxs("div",{className:"hero-inner",children:[c.jsxs("div",{className:"hero-badge",children:[c.jsx("div",{className:"hero-badge-dot"}),c.jsx("span",{children:"Now live in Bikaner, Rajasthan"})]}),c.jsxs("h1",{className:"hero-headline",children:["Fix Any Problem"," ",c.jsx("span",{className:"hero-headline-orange",children:"Instantly"})," ","with"," ",c.jsx("span",{className:"hero-headline-blue",children:"NowFix"})]}),c.jsx("p",{className:"hero-sub",children:"Book trusted professionals for repairs, cleaning, electrical and more — fast, affordable, right at your doorstep."}),c.jsx("div",{className:"hero-cta",children:c.jsx("button",{className:"hero-btn-primary",onClick:()=>r("/login"),children:"Book a Service →"})}),c.jsx("div",{className:"hero-stats",children:Fg.map(f=>c.jsxs("div",{className:"hero-stat",children:[c.jsx("div",{className:"hero-stat-value",children:f.value}),c.jsx("div",{className:"hero-stat-label",children:f.label})]},f.value))})]})]}),c.jsx("div",{className:"hero-services",id:"services",children:c.jsxs("div",{className:"hero-services-inner",children:[c.jsxs("div",{className:"hero-services-header",children:[c.jsx("span",{className:"hero-services-title",children:"Our Services"}),c.jsx("button",{className:"hero-services-all",children:"View all →"})]}),c.jsx("div",{className:"hero-services-grid",children:Jg.map(f=>c.jsxs("div",{className:"hero-svc-card",onClick:()=>r(`/service/${f.name.toLowerCase().replace(/ /g,"-")}`),children:[c.jsx("div",{className:"hero-svc-icon",style:{background:f.color,color:f.iconColor},children:f.icon}),c.jsx("span",{className:"hero-svc-name",children:f.name})]},f.name))})]})})]})]})}function $g(){return c.jsxs("div",{className:"home-page",children:[c.jsx(Zg,{}),c.jsx("main",{children:c.jsx(Wg,{})})]})}const Ig=`
  .login-page {
    min-height: 100vh;
    background: var(--bg-2, #F9FAFB);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .login-card {
    width: 100%;
    max-width: 420px;
    background: var(--bg, #FFFFFF);
    border: 1px solid var(--border, #E5E7EB);
    border-radius: var(--radius-xl, 16px);
    padding: 40px 36px;
    box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  }

  .login-header {
    margin-bottom: 32px;
    display: flex;
    justify-content: flex-start;
  }

  .login-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text, #111827);
    letter-spacing: -0.03em;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  .login-sub {
    font-size: 0.9rem;
    color: var(--text-3, #4B5563);
    margin-bottom: 28px;
    line-height: 1.5;
  }

  .login-label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-2, #374151);
    margin-bottom: 8px;
  }

  .login-phone-wrap {
    display: flex;
    align-items: center;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    overflow: visible;
    transition: border-color var(--transition, 0.2s);
    margin-bottom: 24px;
    background: white;
    height: 48px;
  }

  .login-phone-wrap:focus-within {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  .login-phone-prefix {
    padding: 0 12px;
    font-size: 1rem;
    background: var(--bg-2, #F9FAFB);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1.5px solid var(--border, #E5E7EB);
    flex-shrink: 0;
    color: var(--text, #111827);
    font-weight: 500;
    min-width: 62px;
    white-space: nowrap;
    border-radius: var(--radius-md, 8px) 0 0 var(--radius-md, 8px);
  }

  .login-phone-prefix .flag-emoji {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    line-height: 1;
    width: 28px;
    height: 28px;
    text-align: center;
    flex-shrink: 0;
  }

  .login-phone-input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    background: transparent;
    padding: 0 12px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text, #111827);
    font-family: var(--font-body, 'Inter', sans-serif);
    outline: none;
    letter-spacing: 0.05em;
    border-radius: 0 var(--radius-md, 8px) var(--radius-md, 8px) 0;
  }

  .login-phone-input::placeholder { color: #9CA3AF; font-weight: 400; }

  .login-btn {
    width: 100%;
    height: 48px;
    background: var(--primary, #1F5BB5);
    color: white;
    border: none;
    border-radius: var(--radius-md, 8px);
    font-size: 0.95rem;
    font-weight: 600;
    font-family: var(--font-body, 'Inter', sans-serif);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-primary, 0 4px 14px 0 rgba(31,91,181,0.39));
    margin-bottom: 20px;
  }

  .login-btn:hover:not(:disabled) {
    background: var(--primary-dark, #1A4B96);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(31,91,181,0.35);
  }

  .login-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }

  .login-terms {
    font-size: 0.75rem;
    color: var(--text-3, #4B5563);
    text-align: center;
    line-height: 1.6;
    margin-top: 24px;
  }

  .login-terms span {
    color: var(--primary, #1F5BB5);
    cursor: pointer;
    font-weight: 600;
  }

  .login-back {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-3, #4B5563);
    cursor: pointer;
    margin-bottom: 24px;
    padding: 0;
    transition: color 0.2s ease;
  }

  .login-back:hover { color: var(--text, #111827); }

  .otp-wrap {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    justify-content: center;
  }

  .otp-input {
    width: 56px;
    height: 60px;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text, #111827);
    font-family: var(--font-body, 'Inter', sans-serif);
    background: white;
    outline: none;
    transition: all 0.2s ease;
    caret-color: var(--primary, #1F5BB5);
  }

  .otp-input:focus {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  .otp-input.filled {
    border-color: var(--primary, #1F5BB5);
    background: var(--primary-light, #E0E7FF);
    color: var(--primary, #1F5BB5);
  }

  .otp-resend {
    text-align: center;
    font-size: 0.85rem;
    color: var(--text-3, #4B5563);
    margin-bottom: 24px;
  }

  .otp-resend span {
    color: var(--orange, #FF9F1C);
    font-weight: 600;
    cursor: pointer;
  }

  .otp-phone-display {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: var(--bg-2, #F9FAFB);
    border: 1px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    padding: 12px 16px;
    margin-bottom: 24px;
  }

  .otp-phone-display span {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-2, #374151);
    letter-spacing: 0.05em;
  }

  @media (max-width: 480px) {
    .login-card { padding: 32px 20px; border: none; box-shadow: none; border-radius: 0; background: transparent; }
    .login-page { background: white; align-items: flex-start; padding-top: 40px; }
    .otp-input { width: 48px; height: 54px; font-size: 1.25rem; }

    .login-phone-prefix {
      min-width: 64px;
      padding: 0 10px;
      font-size: 0.95rem;
    }

    .login-phone-prefix .flag-emoji {
      width: 26px;
      height: 26px;
      font-size: 1.15rem;
    }

    .login-phone-input {
      padding: 0 10px;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
    }

    .login-phone-wrap {
      height: 46px;
    }
  }
`;function Pg(){const r=Wa(),[f,d]=C.useState(1),[o,h]=C.useState(""),[p,b]=C.useState(["","","",""]);function w(){o.length===10&&(console.log("Sending OTP to:",o),d(2))}function E(x,B){if(!/^\d*$/.test(x))return;const U=[...p];U[B]=x,b(U),x&&B<3&&document.getElementById(`otp-${B+1}`).focus()}function g(x,B){x.key==="Backspace"&&!p[B]&&B>0&&document.getElementById(`otp-${B-1}`).focus()}function M(){const x=p.join("");console.log("Verifying OTP:",x,"for phone:",o),r("/")}return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:Ig}),c.jsx("div",{className:"login-page",children:c.jsxs("div",{className:"login-card",children:[c.jsx("div",{className:"login-header",children:c.jsx(Zo,{})}),f===1&&c.jsxs(c.Fragment,{children:[c.jsx("h1",{className:"login-title",children:"Welcome Back"}),c.jsx("p",{className:"login-sub",children:"Enter your mobile number to log in or sign up."}),c.jsx("label",{className:"login-label",children:"Mobile Number"}),c.jsxs("div",{className:"login-phone-wrap",children:[c.jsx("div",{className:"login-phone-prefix",children:c.jsx("span",{className:"flag-emoji",children:"🇮🇳"})}),c.jsx("input",{className:"login-phone-input",type:"tel",maxLength:10,placeholder:"98765 43210",value:o,onChange:x=>h(x.target.value.replace(/\D/g,"")),onKeyDown:x=>x.key==="Enter"&&w(),autoFocus:!0})]}),c.jsx("button",{className:"login-btn",onClick:w,disabled:o.length!==10,children:"Send OTP →"}),c.jsxs("p",{className:"login-terms",children:["By continuing, you agree to our"," ",c.jsx("span",{children:"Terms of Service"})," and"," ",c.jsx("span",{children:"Privacy Policy"})]})]}),f===2&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"login-back",onClick:()=>d(1),children:"← Change Number"}),c.jsx("h1",{className:"login-title",children:"Enter OTP"}),c.jsx("p",{className:"login-sub",children:"We sent a 4-digit code to"}),c.jsx("div",{className:"otp-phone-display",children:c.jsxs("span",{children:[c.jsx("span",{className:"flag-emoji",children:"🇮🇳"})," ",o]})}),c.jsx("div",{className:"otp-wrap",children:p.map((x,B)=>c.jsx("input",{id:`otp-${B}`,className:`otp-input${x?" filled":""}`,type:"tel",maxLength:1,value:x,onChange:U=>E(U.target.value,B),onKeyDown:U=>g(U,B),autoFocus:B===0},B))}),c.jsxs("p",{className:"otp-resend",children:["Didn't receive the code?"," ",c.jsx("span",{onClick:()=>{b(["","","",""]),console.log("Resending OTP...")},children:"Resend OTP"})]}),c.jsx("button",{className:"login-btn",onClick:M,disabled:p.some(x=>x===""),children:"Verify & Continue →"})]})]})})]})}const ev=`
  .join-page {
    min-height: 100vh;
    background: var(--bg-2, #F9FAFB);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 1.5rem;
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .join-card {
    width: 100%;
    max-width: 520px;
    background: var(--bg, #FFFFFF);
    border: 1px solid var(--border, #E5E7EB);
    border-radius: var(--radius-xl, 16px);
    padding: 40px 36px;
    box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  }

  .join-header {
    margin-bottom: 28px;
    display: flex;
    justify-content: flex-start;
  }

  .join-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text, #111827);
    letter-spacing: -0.03em;
    margin-bottom: 8px;
  }

  .join-sub {
    font-size: 0.9rem;
    color: var(--text-3, #4B5563);
    margin-bottom: 28px;
    line-height: 1.5;
  }

  /* Photo upload */
  .join-photo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 28px;
  }

  .join-photo-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px dashed var(--border, #E5E7EB);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition, 0.2s);
    background: var(--bg-2, #F9FAFB);
    overflow: hidden;
    position: relative;
    margin-bottom: 12px;
  }

  .join-photo-circle:hover {
    border-color: var(--primary, #1F5BB5);
    background: var(--primary-light, #E0E7FF);
  }

  .join-photo-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }

  .join-photo-circle svg {
    width: 24px;
    height: 24px;
    color: #9CA3AF;
    margin-bottom: 4px;
  }

  .join-photo-circle span {
    font-size: 0.7rem;
    color: #6B7280;
    font-weight: 500;
  }

  .join-photo-label {
    font-size: 0.85rem;
    color: var(--primary, #1F5BB5);
    font-weight: 600;
    cursor: pointer;
  }

  /* Form grid */
  .join-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 16px;
    margin-bottom: 16px;
  }

  .join-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
  }

  .join-field.no-margin { margin-bottom: 0; }

  .join-field label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-2, #374151);
  }

  .join-input {
    height: 48px;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    padding: 0 14px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text, #111827);
    font-family: var(--font-body, 'Inter', sans-serif);
    background: white;
    outline: none;
    transition: all 0.2s ease;
  }

  .join-input:focus {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  .join-input::placeholder { color: #9CA3AF; }

  /* Custom Phone Wrap matching Login */
    .join-phone-wrap {
    display: flex;
    align-items: center;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    overflow: hidden;
    transition: all 0.2s ease;
    background: white;
    height: 48px;
    width: 100%;
    min-width: 0;
    max-width: 100%;
  }

  .join-phone-wrap:focus-within {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  .join-phone-prefix {
    padding: 0 14px;
    font-size: 1.1rem;
    background: var(--bg-2, #F9FAFB);
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1.5px solid var(--border, #E5E7EB);
    flex-shrink: 0;
    color: var(--text, #111827);
    font-weight: 500;
  }

  .join-phone-input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    background: transparent;
    padding: 0 14px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text, #111827);
    font-family: var(--font-body, 'Inter', sans-serif);
    outline: none;
    letter-spacing: 0.05em;
  }

  .join-phone-input::placeholder { color: #9CA3AF; font-weight: 400; }

  .join-select {
    height: 48px;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    padding: 0 14px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text, #111827);
    font-family: var(--font-body, 'Inter', sans-serif);
    background: white;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
  }

  .join-select:focus {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  /* Aadhar upload */
  .join-upload-box {
    border: 1.5px dashed var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: white;
    margin-bottom: 24px;
  }

  .join-upload-box:hover {
    border-color: var(--primary, #1F5BB5);
    background: var(--primary-light, #E0E7FF);
  }

  .join-upload-box.uploaded {
    border-color: #10B981; /* Success Green */
    background: #ECFDF5;
  }

  .join-upload-box svg {
    width: 28px;
    height: 28px;
    color: #9CA3AF;
  }

  .join-upload-box.uploaded svg { color: #10B981; }

  .join-upload-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-2, #374151);
  }

  .join-upload-box.uploaded .join-upload-title { color: #10B981; }

  .join-upload-sub {
    font-size: 0.75rem;
    color: #6B7280;
  }

  /* Submit */
  .join-submit {
    width: 100%;
    height: 50px;
    background: var(--primary, #1F5BB5);
    color: white;
    border: none;
    border-radius: var(--radius-md, 8px);
    font-size: 0.95rem;
    font-weight: 600;
    font-family: var(--font-body, 'Inter', sans-serif);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-primary, 0 4px 14px 0 rgba(31,91,181,0.39));
  }

  .join-submit:hover {
    background: var(--primary-dark, #1A4B96);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(31,91,181,0.35);
  }

  .join-submit:active { transform: translateY(0); }

  .join-section-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: #9CA3AF;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 8px;
  }

  .join-divider {
    height: 1px;
    background: var(--border, #E5E7EB);
    margin: 24px 0;
  }

  @media (max-width: 480px) {
    .join-card { padding: 32px 24px; border: none; box-shadow: none; border-radius: 0; background: transparent; }
    .join-page { background: white; padding-top: 20px; }
    .join-row { grid-template-columns: 1fr; gap: 16px; }
  }
`,tv=["Plumbing","Electrician","AC Repair","Home Cleaning","Carpentry","Appliance Repair","Painting","Pest Control"];function av(){const r=Wa(),[f,d]=C.useState(null),[o,h]=C.useState(!1),[p,b]=C.useState({name:"",phone:"",category:"",experience:"",city:"Bikaner",aadhar:""});function w(x){const B=x.target.files[0];B&&(d(URL.createObjectURL(B)),console.log("Photo selected for upload:",B.name))}function E(x){const B=x.target.files[0];B&&(h(!0),console.log("Aadhar selected for upload:",B.name))}function g(x,B){b(U=>({...U,[x]:B}))}function M(){console.log("Submitting worker application data:",p),alert("Application submitted successfully! We will contact you soon."),r("/")}return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:ev}),c.jsx("div",{className:"join-page",children:c.jsxs("div",{className:"join-card",children:[c.jsx("div",{className:"join-header",children:c.jsx(Zo,{})}),c.jsx("h1",{className:"join-title",children:"Join as a Worker"}),c.jsx("p",{className:"join-sub",children:"Fill in your details to start receiving jobs in Bikaner"}),c.jsxs("div",{className:"join-photo-wrap",children:[c.jsx("div",{className:"join-photo-circle",onClick:()=>document.getElementById("photo-input").click(),children:f?c.jsx("img",{src:f,alt:"Profile"}):c.jsxs(c.Fragment,{children:[c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),c.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),c.jsx("span",{children:"Add Photo"})]})}),c.jsx("span",{className:"join-photo-label",onClick:()=>document.getElementById("photo-input").click(),children:f?"Change Photo":"Upload Profile Photo"}),c.jsx("input",{id:"photo-input",type:"file",accept:"image/*",style:{display:"none"},onChange:w})]}),c.jsx("p",{className:"join-section-label",children:"Personal Information"}),c.jsxs("div",{className:"join-row",children:[c.jsxs("div",{className:"join-field no-margin",children:[c.jsx("label",{children:"Full Name"}),c.jsx("input",{className:"join-input",type:"text",placeholder:"Ramesh Kumar",value:p.name,onChange:x=>g("name",x.target.value)})]}),c.jsxs("div",{className:"join-field no-margin",children:[c.jsx("label",{children:"Phone Number"}),c.jsxs("div",{className:"join-phone-wrap",children:[c.jsx("div",{className:"join-phone-prefix",children:"🇮🇳 +91"}),c.jsx("input",{className:"join-phone-input",type:"tel",placeholder:"98765 43210",maxLength:10,value:p.phone,onChange:x=>g("phone",x.target.value.replace(/\D/g,""))})]})]})]}),c.jsx("div",{className:"join-divider"}),c.jsx("p",{className:"join-section-label",children:"Work Information"}),c.jsxs("div",{className:"join-row",children:[c.jsxs("div",{className:"join-field no-margin",children:[c.jsx("label",{children:"Service Category"}),c.jsxs("select",{className:"join-select",value:p.category,onChange:x=>g("category",x.target.value),children:[c.jsx("option",{value:"",children:"Select category"}),tv.map(x=>c.jsx("option",{value:x,children:x},x))]})]}),c.jsxs("div",{className:"join-field no-margin",children:[c.jsx("label",{children:"Experience"}),c.jsxs("select",{className:"join-select",value:p.experience,onChange:x=>g("experience",x.target.value),children:[c.jsx("option",{value:"",children:"Select years"}),c.jsx("option",{value:"0-1",children:"Less than 1 year"}),c.jsx("option",{value:"1-3",children:"1 - 3 years"}),c.jsx("option",{value:"3-5",children:"3 - 5 years"}),c.jsx("option",{value:"5+",children:"5+ years"})]})]})]}),c.jsx("div",{className:"join-divider"}),c.jsx("p",{className:"join-section-label",children:"Identity Verification"}),c.jsxs("div",{className:"join-field",children:[c.jsx("label",{children:"Aadhar Card Number"}),c.jsx("input",{className:"join-input",type:"tel",placeholder:"1234 5678 9012",maxLength:14,value:p.aadhar,onChange:x=>g("aadhar",x.target.value)})]}),c.jsxs("div",{className:`join-upload-box${o?" uploaded":""}`,onClick:()=>document.getElementById("aadhar-input").click(),children:[o?c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),c.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),c.jsx("polyline",{points:"17 8 12 3 7 8"}),c.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),c.jsx("span",{className:"join-upload-title",children:o?"Aadhar Card Uploaded ✓":"Upload Aadhar Card"}),c.jsx("span",{className:"join-upload-sub",children:o?"Tap to change file":"JPG, PNG or PDF — max 5MB"}),c.jsx("input",{id:"aadhar-input",type:"file",accept:"image/*,.pdf",style:{display:"none"},onChange:E})]}),c.jsx("button",{className:"join-submit",onClick:M,children:"Submit Application →"})]})})]})}const lv=`
  .sd-page {
    min-height: 100vh;
    background: var(--bg-2);
    font-family: var(--font-body);
    padding-bottom: 60px;
  }

  /* Top Bar */
  .sd-topbar {
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 0 1.5rem;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .sd-back {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-2);
    cursor: pointer;
    padding: 0;
    transition: color var(--transition);
  }

  .sd-back:hover { color: var(--primary); }

  .sd-back svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  .sd-topbar-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.01em;
    text-transform: capitalize;
  }

  .sd-topbar-right { width: 80px; }

  /* Steps indicator */
  .sd-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    padding: 20px 1.5rem 0;
    max-width: 600px;
    margin: 0 auto;
  }

  .sd-step {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
  }

  .sd-step-circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    flex-shrink: 0;
    border: 2px solid var(--border-2);
    color: var(--muted);
    background: var(--bg);
    transition: all var(--transition);
  }

  .sd-step-circle.active {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
  }

  .sd-step-circle.done {
    background: var(--success);
    border-color: var(--success);
    color: white;
  }

  .sd-step-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--muted-2);
    transition: color var(--transition);
  }

  .sd-step-label.active { color: var(--primary); }
  .sd-step-label.done { color: var(--success); }

  .sd-step-line {
    flex: 1;
    height: 2px;
    background: var(--border-2);
    margin: 0 8px;
    transition: background var(--transition);
  }

  .sd-step-line.done { background: var(--success); }

  /* Inner wrap */
  .sd-inner {
    max-width: 600px;
    margin: 0 auto;
    padding: 24px 1.5rem 0;
  }

  /* Service header card */
  .sd-header-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    box-shadow: var(--shadow-sm);
  }

  .sd-header-icon {
    width: 54px;
    height: 54px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sd-header-icon svg {
    width: 26px;
    height: 26px;
  }

  .sd-header-info h2 {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  .sd-header-info p {
    font-size: 0.78rem;
    color: var(--muted);
    line-height: 1.4;
  }

  /* Section title */
  .sd-section-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }

  /* Package cards */
  .sd-packages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
  }

  .sd-pkg-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 18px;
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-sm);
  }

  .sd-pkg-card:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-md);
  }

  .sd-pkg-card.selected {
    border-color: var(--primary);
    background: var(--primary-light);
    box-shadow: var(--shadow-md);
  }

  .sd-pkg-radio {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--border-2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all var(--transition);
  }

  .sd-pkg-card.selected .sd-pkg-radio {
    border-color: var(--primary);
    background: var(--primary);
  }

  .sd-pkg-radio-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    opacity: 0;
    transition: opacity var(--transition);
  }

  .sd-pkg-card.selected .sd-pkg-radio-dot { opacity: 1; }

  .sd-pkg-info { flex: 1; }

  .sd-pkg-name {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 3px;
    letter-spacing: -0.01em;
  }

  .sd-pkg-card.selected .sd-pkg-name { color: var(--primary); }

  .sd-pkg-desc {
    font-size: 0.75rem;
    color: var(--muted);
    line-height: 1.4;
  }

  .sd-pkg-right {
    text-align: right;
    flex-shrink: 0;
  }

  .sd-pkg-price {
    font-size: 1rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .sd-pkg-card.selected .sd-pkg-price { color: var(--primary); }

  .sd-pkg-duration {
    font-size: 0.7rem;
    color: var(--muted-2);
    margin-top: 2px;
  }

  .sd-pkg-badge {
    display: inline-block;
    background: #fef9c3;
    color: #854d0e;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 20px;
    margin-left: 6px;
    letter-spacing: 0.02em;
  }

  /* Step 1 CTA */
  .sd-cta {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--bg);
    border-top: 1px solid var(--border);
    padding: 14px 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.06);
    z-index: 40;
  }

  .sd-cta-info {
    display: flex;
    flex-direction: column;
  }

  .sd-cta-price {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.03em;
  }

  .sd-cta-label {
    font-size: 0.72rem;
    color: var(--muted);
    font-weight: 500;
  }

  .sd-cta-btn {
    background: var(--primary);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    padding: 0.7rem 1.6rem;
    font-size: 0.875rem;
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: background var(--transition), transform var(--transition);
    box-shadow: var(--shadow-primary);
    white-space: nowrap;
  }

  .sd-cta-btn:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
  }

  .sd-cta-btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
  }

  /* Step 2 - Image Upload */
  .sd-upload-area {
    background: var(--bg);
    border: 2px dashed var(--border-2);
    border-radius: var(--radius-lg);
    padding: 36px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all var(--transition);
    margin-bottom: 16px;
    text-align: center;
  }

  .sd-upload-area:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .sd-upload-area.has-image {
    border-style: solid;
    border-color: var(--primary);
    padding: 12px;
  }

  .sd-upload-area svg {
    width: 32px;
    height: 32px;
    fill: var(--muted-2);
  }

  .sd-upload-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text-2);
  }

  .sd-upload-sub {
    font-size: 0.75rem;
    color: var(--muted-2);
    line-height: 1.5;
  }

  .sd-upload-preview {
    width: 100%;
    border-radius: var(--radius-md);
    max-height: 240px;
    object-fit: cover;
  }

  .sd-upload-change {
    font-size: 0.78rem;
    color: var(--primary);
    font-weight: 600;
    margin-top: 4px;
  }

  .sd-upload-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
  }

  .sd-upload-option {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-md);
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all var(--transition);
  }

  .sd-upload-option:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .sd-upload-option svg {
    width: 22px;
    height: 22px;
    fill: var(--primary);
  }

  .sd-upload-option span {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-2);
  }

  .sd-skip-btn {
    width: 100%;
    background: none;
    border: none;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    padding: 8px;
    transition: color var(--transition);
    margin-bottom: 80px;
  }

  .sd-skip-btn:hover { color: var(--text); }

  /* Summary card */
  .sd-summary {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 18px;
    margin-bottom: 16px;
    box-shadow: var(--shadow-sm);
  }

  .sd-summary-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.82rem;
    color: var(--muted);
    margin-bottom: 8px;
  }

  .sd-summary-row:last-child { margin-bottom: 0; }

  .sd-summary-row strong {
    color: var(--text);
    font-weight: 600;
  }

  .sd-summary-divider {
    height: 1px;
    background: var(--border);
    margin: 10px 0;
  }

  .sd-summary-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  @media (max-width: 480px) {
    .sd-inner { padding: 16px 1rem 0; }
  }
`,nv={plumbing:{color:"#eff6ff",iconColor:"#2563eb",desc:"Fast and reliable plumbing solutions",packages:[{id:1,name:"Tap / Faucet Repair",desc:"Fix leaky taps, replace washers, tighten fittings",price:199,duration:"30-45 mins",popular:!0},{id:2,name:"Pipe Leak Fix",desc:"Detect and seal pipe leaks, joint repairs",price:349,duration:"45-60 mins",popular:!1},{id:3,name:"Drain Cleaning",desc:"Unclog blocked drains, kitchen and bathroom",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Plumbing Check",desc:"Complete inspection of all plumbing points",price:499,duration:"60-90 mins",popular:!1}]},electrician:{color:"#fefce8",iconColor:"#ca8a04",desc:"Certified electrical work at your home",packages:[{id:1,name:"Switch / Socket Repair",desc:"Fix or replace faulty switches and sockets",price:149,duration:"20-30 mins",popular:!0},{id:2,name:"Fan Installation",desc:"Install ceiling or wall fan with wiring",price:249,duration:"30-45 mins",popular:!1},{id:3,name:"MCB / Fuse Repair",desc:"Fix tripping MCB, replace fuse box",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Wiring Check",desc:"Safety inspection of all electrical wiring",price:599,duration:"60-90 mins",popular:!1}]},"ac-repair":{color:"#f0fdf4",iconColor:"#16a34a",desc:"Expert AC service and maintenance",packages:[{id:1,name:"AC Service & Clean",desc:"Deep clean filters, coils and full service",price:499,duration:"60-90 mins",popular:!0},{id:2,name:"Gas Refilling",desc:"Recharge refrigerant gas to optimal level",price:1299,duration:"45-60 mins",popular:!1},{id:3,name:"AC Installation",desc:"Install new split or window AC unit",price:999,duration:"2-3 hours",popular:!1},{id:4,name:"AC Not Cooling Fix",desc:"Diagnose and fix cooling issues",price:399,duration:"45-60 mins",popular:!1}]},cleaning:{color:"#fdf4ff",iconColor:"#a21caf",desc:"Professional home cleaning services",packages:[{id:1,name:"Basic Home Clean",desc:"Sweep, mop, dust all rooms",price:399,duration:"2-3 hours",popular:!0},{id:2,name:"Deep Home Clean",desc:"Full sanitization including kitchen and bathrooms",price:799,duration:"4-5 hours",popular:!1},{id:3,name:"Kitchen Deep Clean",desc:"Degrease and clean entire kitchen",price:599,duration:"2-3 hours",popular:!1},{id:4,name:"Bathroom Cleaning",desc:"Scrub, sanitize and clean all bathrooms",price:299,duration:"1-2 hours",popular:!1}]},carpentry:{color:"#fff7ed",iconColor:"#c2410c",desc:"Skilled carpenters for all wood work",packages:[{id:1,name:"Furniture Assembly",desc:"Assemble flat-pack or new furniture",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Door Repair",desc:"Fix hinges, locks, alignment issues",price:249,duration:"30-60 mins",popular:!1},{id:3,name:"Wood Polish",desc:"Sand and polish wooden furniture",price:499,duration:"2-3 hours",popular:!1},{id:4,name:"Custom Fitting",desc:"Custom shelves, cabinets or woodwork",price:799,duration:"3-4 hours",popular:!1}]},"appliance-repair":{color:"#eff6ff",iconColor:"#1d4ed8",desc:"All home appliance repairs",packages:[{id:1,name:"Washing Machine Repair",desc:"Fix spin, drain or electrical issues",price:449,duration:"45-60 mins",popular:!0},{id:2,name:"Refrigerator Repair",desc:"Fix cooling, compressor or door seal",price:499,duration:"45-90 mins",popular:!1},{id:3,name:"Microwave Repair",desc:"Fix heating, door or electrical faults",price:349,duration:"30-45 mins",popular:!1},{id:4,name:"TV / LED Repair",desc:"Fix display, sound or power issues",price:399,duration:"45-60 mins",popular:!1}]},painting:{color:"#fff1f2",iconColor:"#e11d48",desc:"Professional home painting services",packages:[{id:1,name:"Single Room Paint",desc:"Full painting of one room walls and ceiling",price:1499,duration:"1 day",popular:!0},{id:2,name:"2-3 Room Paint",desc:"Full painting of 2-3 rooms",price:3499,duration:"2-3 days",popular:!1},{id:3,name:"Exterior Paint",desc:"Outside wall painting and waterproofing",price:4999,duration:"3-5 days",popular:!1},{id:4,name:"Texture / Design Work",desc:"Decorative texture or pattern wall finish",price:2499,duration:"2-3 days",popular:!1}]},"pest-control":{color:"#f0fdf4",iconColor:"#15803d",desc:"Safe and effective pest removal",packages:[{id:1,name:"Cockroach Control",desc:"Gel treatment for kitchen and bathrooms",price:499,duration:"45-60 mins",popular:!0},{id:2,name:"Termite Treatment",desc:"Full home anti-termite spray treatment",price:1499,duration:"2-3 hours",popular:!1},{id:3,name:"Rodent Control",desc:"Traps and repellent for rats and mice",price:799,duration:"1-2 hours",popular:!1},{id:4,name:"Full Home Pest Control",desc:"Complete treatment for all common pests",price:1999,duration:"3-4 hours",popular:!1}]}},iv={color:"#eff6ff",iconColor:"#2563eb",desc:"Professional home service",packages:[{id:1,name:"Basic Service",desc:"Standard service package",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Standard Service",desc:"Complete service package",price:499,duration:"2-3 hours",popular:!1}]};function uv(){const r=Wa(),{id:f}=V0(),[d,o]=C.useState(1),[h,p]=C.useState(null),[b,w]=C.useState(null),E=nv[f]||iv,g=E.packages.find(B=>B.id===h);function M(B){const U=B.target.files[0];U&&w(URL.createObjectURL(U))}const x=f?f.replace(/-/g," "):"Service";return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:lv}),c.jsxs("div",{className:"sd-page",children:[c.jsxs("div",{className:"sd-topbar",children:[c.jsxs("button",{className:"sd-back",onClick:()=>d===1?r("/"):o(1),children:[c.jsx("svg",{viewBox:"0 0 24 24",children:c.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back"]}),c.jsx("span",{className:"sd-topbar-title",children:x}),c.jsx("div",{className:"sd-topbar-right"})]}),c.jsxs("div",{className:"sd-steps",children:[c.jsxs("div",{className:"sd-step",children:[c.jsx("div",{className:`sd-step-circle ${d===1?"active":"done"}`,children:d>1?"✓":"1"}),c.jsx("span",{className:`sd-step-label ${d===1?"active":"done"}`,children:"Choose Package"})]}),c.jsx("div",{className:`sd-step-line ${d>1?"done":""}`}),c.jsxs("div",{className:"sd-step",children:[c.jsx("div",{className:`sd-step-circle ${d===2?"active":""}`,children:"2"}),c.jsx("span",{className:`sd-step-label ${d===2?"active":""}`,children:"Add Photo"})]})]}),c.jsxs("div",{className:"sd-inner",children:[c.jsxs("div",{className:"sd-header-card",children:[c.jsx("div",{className:"sd-header-icon",style:{background:E.color,color:E.iconColor},children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}),c.jsxs("div",{className:"sd-header-info",children:[c.jsx("h2",{children:x}),c.jsx("p",{children:E.desc})]})]}),d===1&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"sd-section-title",children:"Choose a Package"}),c.jsx("div",{className:"sd-packages",children:E.packages.map(B=>c.jsxs("div",{className:`sd-pkg-card ${h===B.id?"selected":""}`,onClick:()=>p(B.id),children:[c.jsx("div",{className:"sd-pkg-radio",children:c.jsx("div",{className:"sd-pkg-radio-dot"})}),c.jsxs("div",{className:"sd-pkg-info",children:[c.jsxs("div",{className:"sd-pkg-name",children:[B.name,B.popular&&c.jsx("span",{className:"sd-pkg-badge",children:"Popular"})]}),c.jsx("div",{className:"sd-pkg-desc",children:B.desc})]}),c.jsxs("div",{className:"sd-pkg-right",children:[c.jsxs("div",{className:"sd-pkg-price",children:["₹",B.price]}),c.jsx("div",{className:"sd-pkg-duration",children:B.duration})]})]},B.id))})]}),d===2&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"sd-summary",children:[c.jsxs("div",{className:"sd-summary-row",children:[c.jsx("span",{children:"Selected Package"}),c.jsx("strong",{children:g?.name})]}),c.jsx("div",{className:"sd-summary-divider"}),c.jsxs("div",{className:"sd-summary-total",children:[c.jsx("span",{children:"Total"}),c.jsxs("span",{children:["₹",g?.price]})]})]}),c.jsx("p",{className:"sd-section-title",children:"Upload a Photo (Optional)"}),b?c.jsxs("div",{className:"sd-upload-area has-image",onClick:()=>document.getElementById("gallery-input").click(),children:[c.jsx("img",{src:b,alt:"Issue",className:"sd-upload-preview"}),c.jsx("span",{className:"sd-upload-change",children:"Tap to change photo"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"sd-upload-options",children:[c.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("camera-input").click(),children:[c.jsxs("svg",{viewBox:"0 0 24 24",children:[c.jsx("path",{d:"M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"}),c.jsx("path",{d:"M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})]}),c.jsx("span",{children:"Take Photo"})]}),c.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("gallery-input").click(),children:[c.jsx("svg",{viewBox:"0 0 24 24",children:c.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),c.jsx("span",{children:"From Gallery"})]})]}),c.jsxs("div",{className:"sd-upload-area",onClick:()=>document.getElementById("gallery-input").click(),children:[c.jsx("svg",{viewBox:"0 0 24 24",children:c.jsx("path",{d:"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"})}),c.jsx("span",{className:"sd-upload-title",children:"Upload issue photo"}),c.jsxs("span",{className:"sd-upload-sub",children:["Help the worker understand your issue better.",`
`,"Tap to upload from your device."]})]})]}),c.jsx("input",{id:"camera-input",type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:M}),c.jsx("input",{id:"gallery-input",type:"file",accept:"image/*",style:{display:"none"},onChange:M}),c.jsx("button",{className:"sd-skip-btn",onClick:()=>r("/login"),children:"Skip & Continue without photo →"})]})]}),c.jsxs("div",{className:"sd-cta",children:[c.jsx("div",{className:"sd-cta-info",children:g?c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:"sd-cta-price",children:["₹",g.price]}),c.jsx("span",{className:"sd-cta-label",children:g.name})]}):c.jsx("span",{className:"sd-cta-label",children:"Select a package to continue"})}),c.jsx("button",{className:"sd-cta-btn",disabled:!h,onClick:()=>d===1?o(2):r("/login"),children:d===1?"Continue →":"Confirm Booking →"})]})]})]})}function rv(){return c.jsx(Mg,{children:c.jsxs(rg,{children:[c.jsx(On,{path:"/",element:c.jsx($g,{})}),c.jsx(On,{path:"/login",element:c.jsx(Pg,{})}),c.jsx(On,{path:"/join",element:c.jsx(av,{})}),c.jsx(On,{path:"/service/:id",element:c.jsx(uv,{})})]})})}const ov=`
  .loader-overlay {
    position: fixed;
    inset: 0;
    background: rgba(255, 255, 255, 0.72);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader-container {
    position: relative;
    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 400px;
  }

  .loader-spinner-bg,
  .loader-spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
  }

  .loader-spinner-bg circle {
    stroke: #e2e8f0;
    stroke-width: 4;
    fill: none;
  }

  .loader-spinner {
    animation: loaderRotate 1s linear infinite;
  }

  .loader-spinner circle {
    stroke: #FF9F1C;
    stroke-width: 4;
    fill: none;
    stroke-linecap: round;
    animation: loaderDash 1.5s ease-in-out infinite;
  }

  @keyframes loaderRotate {
    100% { transform: rotate(360deg); }
  }

  @keyframes loaderDash {
    0%   { stroke-dasharray: 1, 214;   stroke-dashoffset: 0;     }
    50%  { stroke-dasharray: 120, 214; stroke-dashoffset: -40px; }
    100% { stroke-dasharray: 120, 214; stroke-dashoffset: -214px;}
  }

  .loader-icon {
    position: absolute;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
  }

  .loader-icon svg {
    width: 100%;
    height: 100%;
    fill: #1F5BB5;
  }

  .loader-wrench {
    transform-origin: 100% 0%;
    animation: loaderWrenchCycle 1.8s infinite linear;
  }

  .loader-hammer {
    transform-origin: 15% 85%;
    animation: loaderHammerCycle 1.8s infinite linear;
  }

  @keyframes loaderWrenchCycle {
    0%     { opacity: 1; transform: rotateY(-90deg) rotateZ(0deg);  }
    3.33%  { opacity: 1; transform: rotateY(0deg)   rotateZ(0deg);  }
    15%    {             transform: rotateY(0deg)   rotateZ(20deg); }
    25%    {             transform: rotateY(0deg)   rotateZ(-10deg);}
    35%    {             transform: rotateY(0deg)   rotateZ(15deg); }
    46.66% { opacity: 1; transform: rotateY(0deg)   rotateZ(0deg);  }
    50%    { opacity: 1; transform: rotateY(90deg)  rotateZ(0deg);  }
    50.01% { opacity: 0; transform: rotateY(90deg)  rotateZ(0deg);  }
    100%   { opacity: 0; transform: rotateY(90deg)  rotateZ(0deg);  }
  }

  @keyframes loaderHammerCycle {
    0%,49.99% { opacity: 0; transform: rotateY(-90deg) rotateZ(0deg);  }
    50%        { opacity: 1; transform: rotateY(-90deg) rotateZ(0deg);  }
    53.33%     { opacity: 1; transform: rotateY(0deg)   rotateZ(0deg);  }
    65%        {             transform: rotateY(0deg)   rotateZ(-25deg);}
    75%        {             transform: rotateY(0deg)   rotateZ(35deg); }
    85%        {             transform: rotateY(0deg)   rotateZ(-5deg); }
    96.66%     { opacity: 1; transform: rotateY(0deg)   rotateZ(0deg);  }
    100%       { opacity: 1; transform: rotateY(90deg)  rotateZ(0deg);  }
  }
`;function cv({fullscreen:r=!0}){return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:ov}),c.jsx("div",{className:r?"loader-overlay":"",children:c.jsxs("div",{className:"loader-container",children:[c.jsx("svg",{className:"loader-spinner-bg",viewBox:"0 0 72 72",children:c.jsx("circle",{cx:"36",cy:"36",r:"34"})}),c.jsx("svg",{className:"loader-spinner",viewBox:"0 0 72 72",children:c.jsx("circle",{cx:"36",cy:"36",r:"34"})}),c.jsx("div",{className:"loader-icon loader-wrench",children:c.jsx("svg",{viewBox:"0 0 512 512",children:c.jsx("path",{d:"M459.957,203.4c42.547-38.609,49.656-82.484,40.141-119.469c-0.281-2.938-0.984-5.406-3.547-7.266l-8.563-7.016c-1.484-1.375-3.484-2.063-5.484-1.859c-2.016,0.188-3.844,1.234-5.031,2.859l-49.25,64.031c-1.375,1.891-3.594,2.969-5.922,2.891l-17.875,1.313c-1.531-0.047-3.016-0.594-4.219-1.563l-34.531-29.266c-1.406-1.141-2.328-2.766-2.563-4.563l-2.141-16.188c-0.25-1.781,0.203-3.594,1.266-5.047l46.109-62.641c2.094-2.891,1.688-6.875-0.906-9.297l-11.188-8.734c-2.188-2.047-4.672-1.75-8.063-1.109c-31.844,6.297-86.219,37.125-100.016,79.75c-12.156,37.516-7.922,63.969-7.922,63.969c0,21.141-6.953,41.516-15.5,50.078L24.504,424.916c-0.469,0.438-0.922,0.859-1.375,1.313c-19.844,19.844-19.813,52.063-0.641,71.219c19.172,19.172,51.859,19.688,71.703-0.172c0.922-0.922,1.813-1.875,2.641-2.859l231.672-250.438C357.004,218.619,413.426,245.65,459.957,203.4z"})})}),c.jsx("div",{className:"loader-icon loader-hammer",children:c.jsx("svg",{viewBox:"0 0 64 64",style:{transform:"scale(-1.25, 1.25)",transformOrigin:"center"},children:c.jsx("path",{d:"M30.651,23.538l25.24,24.346l-6.577,6.577l-23.969,-25.617l5.306,-5.306Zm-7.208,3.403l5.306,-5.305c0,0 -2.695,-2.056 -2.447,-3.34c0.248,-1.285 0.809,-3.1 4.711,-4.711c3.903,-1.611 7.543,-1.757 7.543,-1.757l0.131,-1.758c0,0 -8.969,-1.356 -13.707,0.327c-4.738,1.684 -10.097,8.02 -10.097,8.02c0,0 0.935,3.064 -0.667,4.666c-1.601,1.601 -3.754,-0.245 -3.754,-0.245l-2.456,3.118l6.197,6.197l3.112,-2.461c0,0 -1.472,-2.207 -0.017,-3.528c3.132,-2.842 6.145,0.777 6.145,0.777Z"})})})]})})]})}const sv=C.createContext({show:()=>{},hide:()=>{},isLoading:!1});function fv({children:r}){const[f,d]=C.useState(!1),o=C.useRef(0),h=C.useCallback(()=>{o.current+=1,d(!0)},[]),p=C.useCallback(()=>{o.current=Math.max(0,o.current-1),o.current===0&&d(!1)},[]);return C.useEffect(()=>{if(!(typeof window>"u")&&!window.__loaderPatched){if(window.__loaderPatched=!0,window.fetch&&(window.__origFetchForLoader=window.fetch,window.fetch=async function(...b){o.current+=1,d(!0);try{return await window.__origFetchForLoader.apply(this,b)}finally{o.current-=1,o.current===0&&d(!1)}}),window.XMLHttpRequest&&window.XMLHttpRequest.prototype){const b=window.XMLHttpRequest.prototype;b.__origSendForLoader||(b.__origSendForLoader=b.send,b.send=function(...w){return o.current+=1,d(!0),this.addEventListener("loadend",()=>{o.current-=1,o.current===0&&d(!1)}),b.__origSendForLoader.apply(this,w)})}return()=>{if(window.__origFetchForLoader&&(window.fetch=window.__origFetchForLoader,delete window.__origFetchForLoader),window.XMLHttpRequest&&window.XMLHttpRequest.prototype){const b=window.XMLHttpRequest.prototype;b.__origSendForLoader&&(b.send=b.__origSendForLoader,delete b.__origSendForLoader)}delete window.__loaderPatched}}},[]),c.jsxs(sv.Provider,{value:{show:h,hide:p,isLoading:f},children:[r,f&&c.jsx(cv,{fullscreen:!0})]})}c0.createRoot(document.getElementById("root")).render(c.jsx(C.StrictMode,{children:c.jsx(fv,{children:c.jsx(rv,{})})}));
