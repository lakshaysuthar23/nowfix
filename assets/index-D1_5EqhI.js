(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const S of p.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&c(S)}).observe(document,{childList:!0,subtree:!0});function d(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(h){if(h.ep)return;h.ep=!0;const p=d(h);fetch(h.href,p)}})();var Ao={exports:{}},Rn={};var Jd;function e0(){if(Jd)return Rn;Jd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,h,p){var S=null;if(p!==void 0&&(S=""+p),h.key!==void 0&&(S=""+h.key),"key"in h){p={};for(var A in h)A!=="key"&&(p[A]=h[A])}else p=h;return h=p.ref,{$$typeof:r,type:c,key:S,ref:h!==void 0?h:null,props:p}}return Rn.Fragment=f,Rn.jsx=d,Rn.jsxs=d,Rn}var Fd;function t0(){return Fd||(Fd=1,Ao.exports=e0()),Ao.exports}var o=t0(),Co={exports:{}},$={};var Wd;function a0(){if(Wd)return $;Wd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),S=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function U(y){return y===null||typeof y!="object"?null:(y=_&&y[_]||y["@@iterator"],typeof y=="function"?y:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,H={};function K(y,D,k){this.props=y,this.context=D,this.refs=H,this.updater=k||Z}K.prototype.isReactComponent={},K.prototype.setState=function(y,D){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,D,"setState")},K.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function I(){}I.prototype=K.prototype;function J(y,D,k){this.props=y,this.context=D,this.refs=H,this.updater=k||Z}var ye=J.prototype=new I;ye.constructor=J,q(ye,K.prototype),ye.isPureReactComponent=!0;var xe=Array.isArray;function we(){}var W={H:null,A:null,T:null,S:null},Ne=Object.prototype.hasOwnProperty;function Ve(y,D,k){var G=k.ref;return{$$typeof:r,type:y,key:D,ref:G!==void 0?G:null,props:k}}function Mt(y,D){return Ve(y.type,D,y.props)}function mt(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function Ke(y){var D={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(k){return D[k]})}var Ot=/\/+/g;function pt(y,D){return typeof y=="object"&&y!==null&&y.key!=null?Ke(""+y.key):D.toString(36)}function Be(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(we,we):(y.status="pending",y.then(function(D){y.status==="pending"&&(y.status="fulfilled",y.value=D)},function(D){y.status==="pending"&&(y.status="rejected",y.reason=D)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function R(y,D,k,G,P){var ae=typeof y;(ae==="undefined"||ae==="boolean")&&(y=null);var fe=!1;if(y===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(y.$$typeof){case r:case f:fe=!0;break;case M:return fe=y._init,R(fe(y._payload),D,k,G,P)}}if(fe)return P=P(y),fe=G===""?"."+pt(y,0):G,xe(P)?(k="",fe!=null&&(k=fe.replace(Ot,"$&/")+"/"),R(P,D,k,"",function(Ul){return Ul})):P!=null&&(mt(P)&&(P=Mt(P,k+(P.key==null||y&&y.key===P.key?"":(""+P.key).replace(Ot,"$&/")+"/")+fe)),D.push(P)),1;fe=0;var Fe=G===""?".":G+":";if(xe(y))for(var Re=0;Re<y.length;Re++)G=y[Re],ae=Fe+pt(G,Re),fe+=R(G,D,k,ae,P);else if(Re=U(y),typeof Re=="function")for(y=Re.call(y),Re=0;!(G=y.next()).done;)G=G.value,ae=Fe+pt(G,Re++),fe+=R(G,D,k,ae,P);else if(ae==="object"){if(typeof y.then=="function")return R(Be(y),D,k,G,P);throw D=String(y),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return fe}function L(y,D,k){if(y==null)return y;var G=[],P=0;return R(y,G,"","",function(ae){return D.call(k,ae,P++)}),G}function F(y){if(y._status===-1){var D=y._result;D=D(),D.then(function(k){(y._status===0||y._status===-1)&&(y._status=1,y._result=k)},function(k){(y._status===0||y._status===-1)&&(y._status=2,y._result=k)}),y._status===-1&&(y._status=0,y._result=D)}if(y._status===1)return y._result.default;throw y._result}var me=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},be={map:L,forEach:function(y,D,k){L(y,function(){D.apply(this,arguments)},k)},count:function(y){var D=0;return L(y,function(){D++}),D},toArray:function(y){return L(y,function(D){return D})||[]},only:function(y){if(!mt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return $.Activity=x,$.Children=be,$.Component=K,$.Fragment=d,$.Profiler=h,$.PureComponent=J,$.StrictMode=c,$.Suspense=E,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,$.__COMPILER_RUNTIME={__proto__:null,c:function(y){return W.H.useMemoCache(y)}},$.cache=function(y){return function(){return y.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(y,D,k){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var G=q({},y.props),P=y.key;if(D!=null)for(ae in D.key!==void 0&&(P=""+D.key),D)!Ne.call(D,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&D.ref===void 0||(G[ae]=D[ae]);var ae=arguments.length-2;if(ae===1)G.children=k;else if(1<ae){for(var fe=Array(ae),Fe=0;Fe<ae;Fe++)fe[Fe]=arguments[Fe+2];G.children=fe}return Ve(y.type,P,G)},$.createContext=function(y){return y={$$typeof:S,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:p,_context:y},y},$.createElement=function(y,D,k){var G,P={},ae=null;if(D!=null)for(G in D.key!==void 0&&(ae=""+D.key),D)Ne.call(D,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(P[G]=D[G]);var fe=arguments.length-2;if(fe===1)P.children=k;else if(1<fe){for(var Fe=Array(fe),Re=0;Re<fe;Re++)Fe[Re]=arguments[Re+2];P.children=Fe}if(y&&y.defaultProps)for(G in fe=y.defaultProps,fe)P[G]===void 0&&(P[G]=fe[G]);return Ve(y,ae,P)},$.createRef=function(){return{current:null}},$.forwardRef=function(y){return{$$typeof:A,render:y}},$.isValidElement=mt,$.lazy=function(y){return{$$typeof:M,_payload:{_status:-1,_result:y},_init:F}},$.memo=function(y,D){return{$$typeof:g,type:y,compare:D===void 0?null:D}},$.startTransition=function(y){var D=W.T,k={};W.T=k;try{var G=y(),P=W.S;P!==null&&P(k,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(we,me)}catch(ae){me(ae)}finally{D!==null&&k.types!==null&&(D.types=k.types),W.T=D}},$.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},$.use=function(y){return W.H.use(y)},$.useActionState=function(y,D,k){return W.H.useActionState(y,D,k)},$.useCallback=function(y,D){return W.H.useCallback(y,D)},$.useContext=function(y){return W.H.useContext(y)},$.useDebugValue=function(){},$.useDeferredValue=function(y,D){return W.H.useDeferredValue(y,D)},$.useEffect=function(y,D){return W.H.useEffect(y,D)},$.useEffectEvent=function(y){return W.H.useEffectEvent(y)},$.useId=function(){return W.H.useId()},$.useImperativeHandle=function(y,D,k){return W.H.useImperativeHandle(y,D,k)},$.useInsertionEffect=function(y,D){return W.H.useInsertionEffect(y,D)},$.useLayoutEffect=function(y,D){return W.H.useLayoutEffect(y,D)},$.useMemo=function(y,D){return W.H.useMemo(y,D)},$.useOptimistic=function(y,D){return W.H.useOptimistic(y,D)},$.useReducer=function(y,D,k){return W.H.useReducer(y,D,k)},$.useRef=function(y){return W.H.useRef(y)},$.useState=function(y){return W.H.useState(y)},$.useSyncExternalStore=function(y,D,k){return W.H.useSyncExternalStore(y,D,k)},$.useTransition=function(){return W.H.useTransition()},$.version="19.2.4",$}var $d;function Lo(){return $d||($d=1,Co.exports=a0()),Co.exports}var C=Lo(),No={exports:{}},Mn={},Ro={exports:{}},Mo={};var Id;function l0(){return Id||(Id=1,(function(r){function f(R,L){var F=R.length;R.push(L);e:for(;0<F;){var me=F-1>>>1,be=R[me];if(0<h(be,L))R[me]=L,R[F]=be,F=me;else break e}}function d(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var L=R[0],F=R.pop();if(F!==L){R[0]=F;e:for(var me=0,be=R.length,y=be>>>1;me<y;){var D=2*(me+1)-1,k=R[D],G=D+1,P=R[G];if(0>h(k,F))G<be&&0>h(P,k)?(R[me]=P,R[G]=F,me=G):(R[me]=k,R[D]=F,me=D);else if(G<be&&0>h(P,F))R[me]=P,R[G]=F,me=G;else break e}}return L}function h(R,L){var F=R.sortIndex-L.sortIndex;return F!==0?F:R.id-L.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var S=Date,A=S.now();r.unstable_now=function(){return S.now()-A}}var E=[],g=[],M=1,x=null,_=3,U=!1,Z=!1,q=!1,H=!1,K=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ye(R){for(var L=d(g);L!==null;){if(L.callback===null)c(g);else if(L.startTime<=R)c(g),L.sortIndex=L.expirationTime,f(E,L);else break;L=d(g)}}function xe(R){if(q=!1,ye(R),!Z)if(d(E)!==null)Z=!0,we||(we=!0,Ke());else{var L=d(g);L!==null&&Be(xe,L.startTime-R)}}var we=!1,W=-1,Ne=5,Ve=-1;function Mt(){return H?!0:!(r.unstable_now()-Ve<Ne)}function mt(){if(H=!1,we){var R=r.unstable_now();Ve=R;var L=!0;try{e:{Z=!1,q&&(q=!1,I(W),W=-1),U=!0;var F=_;try{t:{for(ye(R),x=d(E);x!==null&&!(x.expirationTime>R&&Mt());){var me=x.callback;if(typeof me=="function"){x.callback=null,_=x.priorityLevel;var be=me(x.expirationTime<=R);if(R=r.unstable_now(),typeof be=="function"){x.callback=be,ye(R),L=!0;break t}x===d(E)&&c(E),ye(R)}else c(E);x=d(E)}if(x!==null)L=!0;else{var y=d(g);y!==null&&Be(xe,y.startTime-R),L=!1}}break e}finally{x=null,_=F,U=!1}L=void 0}}finally{L?Ke():we=!1}}}var Ke;if(typeof J=="function")Ke=function(){J(mt)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,pt=Ot.port2;Ot.port1.onmessage=mt,Ke=function(){pt.postMessage(null)}}else Ke=function(){K(mt,0)};function Be(R,L){W=K(function(){R(r.unstable_now())},L)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(R){switch(_){case 1:case 2:case 3:var L=3;break;default:L=_}var F=_;_=L;try{return R()}finally{_=F}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=_;_=R;try{return L()}finally{_=F}},r.unstable_scheduleCallback=function(R,L,F){var me=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?me+F:me):F=me,R){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=F+be,R={id:M++,callback:L,priorityLevel:R,startTime:F,expirationTime:be,sortIndex:-1},F>me?(R.sortIndex=F,f(g,R),d(E)===null&&R===d(g)&&(q?(I(W),W=-1):q=!0,Be(xe,F-me))):(R.sortIndex=be,f(E,R),Z||U||(Z=!0,we||(we=!0,Ke()))),R},r.unstable_shouldYield=Mt,r.unstable_wrapCallback=function(R){var L=_;return function(){var F=_;_=L;try{return R.apply(this,arguments)}finally{_=F}}}})(Mo)),Mo}var Pd;function n0(){return Pd||(Pd=1,Ro.exports=l0()),Ro.exports}var Oo={exports:{}},Je={};var eh;function i0(){if(eh)return Je;eh=1;var r=Lo();function f(E){var g="https://react.dev/errors/"+E;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)g+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+E+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function p(E,g,M){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:x==null?null:""+x,children:E,containerInfo:g,implementation:M}}var S=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(E,g){if(E==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Je.createPortal=function(E,g){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(f(299));return p(E,g,null,M)},Je.flushSync=function(E){var g=S.T,M=c.p;try{if(S.T=null,c.p=2,E)return E()}finally{S.T=g,c.p=M,c.d.f()}},Je.preconnect=function(E,g){typeof E=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(E,g))},Je.prefetchDNS=function(E){typeof E=="string"&&c.d.D(E)},Je.preinit=function(E,g){if(typeof E=="string"&&g&&typeof g.as=="string"){var M=g.as,x=A(M,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;M==="style"?c.d.S(E,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:U}):M==="script"&&c.d.X(E,{crossOrigin:x,integrity:_,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Je.preinitModule=function(E,g){if(typeof E=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var M=A(g.as,g.crossOrigin);c.d.M(E,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(E)},Je.preload=function(E,g){if(typeof E=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var M=g.as,x=A(M,g.crossOrigin);c.d.L(E,M,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Je.preloadModule=function(E,g){if(typeof E=="string")if(g){var M=A(g.as,g.crossOrigin);c.d.m(E,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(E)},Je.requestFormReset=function(E){c.d.r(E)},Je.unstable_batchedUpdates=function(E,g){return E(g)},Je.useFormState=function(E,g,M){return S.H.useFormState(E,g,M)},Je.useFormStatus=function(){return S.H.useHostTransitionStatus()},Je.version="19.2.4",Je}var th;function u0(){if(th)return Oo.exports;th=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Oo.exports=i0(),Oo.exports}var ah;function r0(){if(ah)return Mn;ah=1;var r=n0(),f=Lo(),d=u0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return E(n),e;if(i===l)return E(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function M(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=M(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),Ve=Symbol.for("react.activity"),Mt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var Ot=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Profiler";case H:return"StrictMode";case xe:return"Suspense";case we:return"SuspenseList";case Ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case J:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:pt(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return pt(e(t))}catch{}}return null}var Be=Array.isArray,R=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},me=[],be=-1;function y(e){return{current:e}}function D(e){0>be||(e.current=me[be],me[be]=null,be--)}function k(e,t){be++,me[be]=e.current,e.current=t}var G=y(null),P=y(null),ae=y(null),fe=y(null);function Fe(e,t){switch(k(ae,t),k(P,e),k(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vd(t),e=yd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(G),k(G,e)}function Re(){D(G),D(P),D(ae)}function Ul(e){e.memoizedState!==null&&k(fe,e);var t=G.current,a=yd(t,e.type);t!==a&&(k(P,e),k(G,a))}function Ln(e){P.current===e&&(D(G),D(P)),fe.current===e&&(D(fe),Tn._currentValue=F)}var ou,Vo;function Ra(e){if(ou===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ou=t&&t[1]||"",Vo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ou+e+Vo}var cu=!1;function su(e,t){if(!e||cu)return"";cu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(T){var w=T}Reflect.construct(e,[],B)}else{try{B.call()}catch(T){w=T}e.call(B.prototype)}}else{try{throw Error()}catch(T){w=T}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(T){if(T&&w&&typeof T.stack=="string")return[T.stack,w.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var m=u.split(`
`),z=s.split(`
`);for(n=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(l===m.length||n===z.length)for(l=m.length-1,n=z.length-1;1<=l&&0<=n&&m[l]!==z[n];)n--;for(;1<=l&&0<=n;l--,n--)if(m[l]!==z[n]){if(l!==1||n!==1)do if(l--,n--,0>n||m[l]!==z[n]){var N=`
`+m[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=n);break}}}finally{cu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ra(a):""}function Mh(e,t){switch(e.tag){case 26:case 27:case 5:return Ra(e.type);case 16:return Ra("Lazy");case 13:return e.child!==t&&t!==null?Ra("Suspense Fallback"):Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 15:return su(e.type,!1);case 11:return su(e.type.render,!1);case 1:return su(e.type,!0);case 31:return Ra("Activity");default:return""}}function Ko(e){try{var t="",a=null;do t+=Mh(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fu=Object.prototype.hasOwnProperty,du=r.unstable_scheduleCallback,hu=r.unstable_cancelCallback,Oh=r.unstable_shouldYield,Bh=r.unstable_requestPaint,nt=r.unstable_now,_h=r.unstable_getCurrentPriorityLevel,Jo=r.unstable_ImmediatePriority,Fo=r.unstable_UserBlockingPriority,kn=r.unstable_NormalPriority,Dh=r.unstable_LowPriority,Wo=r.unstable_IdlePriority,Uh=r.log,Hh=r.unstable_setDisableYieldValue,Hl=null,it=null;function na(e){if(typeof Uh=="function"&&Hh(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Hl,e)}catch{}}var ut=Math.clz32?Math.clz32:Yh,Lh=Math.log,kh=Math.LN2;function Yh(e){return e>>>=0,e===0?32:31-(Lh(e)/kh|0)|0}var Yn=256,qn=262144,Gn=4194304;function Ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Ma(l):(u&=s,u!==0?n=Ma(u):a||(a=s&~e,a!==0&&(n=Ma(a))))):(s=l&~i,s!==0?n=Ma(s):u!==0?n=Ma(u):a||(a=l&~e,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Ll(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $o(){var e=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),e}function mu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function kl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gh(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,m=e.expirationTimes,z=e.hiddenUpdates;for(a=u&~a;0<a;){var N=31-ut(a),B=1<<N;s[N]=0,m[N]=-1;var w=z[N];if(w!==null)for(z[N]=null,N=0;N<w.length;N++){var T=w[N];T!==null&&(T.lane&=-536870913)}a&=~B}l!==0&&Io(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Io(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ut(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Po(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ut(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ec(e,t){var a=t&-t;return a=(a&42)!==0?1:pu(a),(a&(e.suspendedLanes|t))!==0?0:a}function pu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tc(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:qd(e.type))}function ac(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var ia=Math.random().toString(36).slice(2),qe="__reactFiber$"+ia,$e="__reactProps$"+ia,$a="__reactContainer$"+ia,vu="__reactEvents$"+ia,Xh="__reactListeners$"+ia,Qh="__reactHandles$"+ia,lc="__reactResources$"+ia,Yl="__reactMarker$"+ia;function yu(e){delete e[qe],delete e[$e],delete e[vu],delete e[Xh],delete e[Qh]}function Ia(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[$a]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=wd(e);e!==null;){if(a=e[qe])return a;e=wd(e)}return t}e=a,a=e.parentNode}return null}function Pa(e){if(e=e[qe]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function el(e){var t=e[lc];return t||(t=e[lc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[Yl]=!0}var nc=new Set,ic={};function Oa(e,t){tl(e,t),tl(e+"Capture",t)}function tl(e,t){for(ic[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var Zh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uc={},rc={};function Vh(e){return fu.call(rc,e)?!0:fu.call(uc,e)?!1:Zh.test(e)?rc[e]=!0:(uc[e]=!0,!1)}function Qn(e,t,a){if(Vh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function kt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xu(e){if(!e._valueTracker){var t=oc(e)?"checked":"value";e._valueTracker=Kh(e,t,""+e[t])}}function cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=oc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jh=/[\n"\\]/g;function vt(e){return e.replace(Jh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bu(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Su(e,u,gt(t)):a!=null?Su(e,u,gt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+gt(s):e.removeAttribute("name")}function sc(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){xu(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),xu(e)}function Su(e,t,a){t==="number"&&Vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function al(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function fc(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function dc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Be(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),xu(e)}function ll(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Fh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function mc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&hc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&hc(e,i,t[i])}function Eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$h=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return $h.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yt(){}var ju=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,il=null;function pc(e){var t=Pa(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(bu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[$e]||null;if(!n)throw Error(c(90));bu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&cc(l)}break e;case"textarea":fc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&al(e,!!a.multiple,t,!1)}}}var wu=!1;function gc(e,t,a){if(wu)return e(t,a);wu=!0;try{var l=e(t);return l}finally{if(wu=!1,(nl!==null||il!==null)&&(_i(),nl&&(t=nl,e=il,il=nl=null,pc(t),e)))for(t=0;t<e.length;t++)pc(e[t])}}function Gl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[$e]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(qt)try{var Xl={};Object.defineProperty(Xl,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{Tu=!1}var ua=null,Au=null,Jn=null;function vc(){if(Jn)return Jn;var e,t=Au,a=t.length,l,n="value"in ua?ua.value:ua.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function yc(){return!1}function Ie(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:yc,this.isPropagationStopped=yc,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Ie(Ba),Ql=x({},Ba,{view:0,detail:0}),Ih=Ie(Ql),Cu,Nu,Zl,In=x({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(Cu=e.screenX-Zl.screenX,Nu=e.screenY-Zl.screenY):Nu=Cu=0,Zl=e),Cu)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),xc=Ie(In),Ph=x({},In,{dataTransfer:0}),em=Ie(Ph),tm=x({},Ql,{relatedTarget:0}),Ru=Ie(tm),am=x({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Ie(am),nm=x({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),im=Ie(nm),um=x({},Ba,{data:0}),bc=Ie(um),rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cm[e])?!!t[e]:!1}function Mu(){return sm}var fm=x({},Ql,{key:function(e){if(e.key){var t=rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?om[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Ie(fm),hm=x({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=Ie(hm),mm=x({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),pm=Ie(mm),gm=x({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),vm=Ie(gm),ym=x({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xm=Ie(ym),bm=x({},Ba,{newState:0,oldState:0}),Sm=Ie(bm),Em=[9,13,27,32],Ou=qt&&"CompositionEvent"in window,Vl=null;qt&&"documentMode"in document&&(Vl=document.documentMode);var jm=qt&&"TextEvent"in window&&!Vl,Ec=qt&&(!Ou||Vl&&8<Vl&&11>=Vl),jc=" ",zc=!1;function wc(e,t){switch(e){case"keyup":return Em.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ul=!1;function zm(e,t){switch(e){case"compositionend":return Tc(t);case"keypress":return t.which!==32?null:(zc=!0,jc);case"textInput":return e=t.data,e===jc&&zc?null:e;default:return null}}function wm(e,t){if(ul)return e==="compositionend"||!Ou&&wc(e,t)?(e=vc(),Jn=Au=ua=null,ul=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var Tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tm[e.type]:t==="textarea"}function Cc(e,t,a,l){nl?il?il.push(l):il=[l]:nl=l,t=qi(t,"onChange"),0<t.length&&(a=new $n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Kl=null,Jl=null;function Am(e){fd(e,0)}function Pn(e){var t=ql(e);if(cc(t))return e}function Nc(e,t){if(e==="change")return t}var Rc=!1;if(qt){var Bu;if(qt){var _u="oninput"in document;if(!_u){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),_u=typeof Mc.oninput=="function"}Bu=_u}else Bu=!1;Rc=Bu&&(!document.documentMode||9<document.documentMode)}function Oc(){Kl&&(Kl.detachEvent("onpropertychange",Bc),Jl=Kl=null)}function Bc(e){if(e.propertyName==="value"&&Pn(Jl)){var t=[];Cc(t,Jl,e,zu(e)),gc(Am,t)}}function Cm(e,t,a){e==="focusin"?(Oc(),Kl=t,Jl=a,Kl.attachEvent("onpropertychange",Bc)):e==="focusout"&&Oc()}function Nm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(Jl)}function Rm(e,t){if(e==="click")return Pn(t)}function Mm(e,t){if(e==="input"||e==="change")return Pn(t)}function Om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Om;function Fl(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!fu.call(t,n)||!rt(e[n],t[n]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dc(e,t){var a=_c(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_c(a)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Vn(e.document)}return t}function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Bm=qt&&"documentMode"in document&&11>=document.documentMode,rl=null,Uu=null,Wl=null,Hu=!1;function Lc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hu||rl==null||rl!==Vn(l)||(l=rl,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wl&&Fl(Wl,l)||(Wl=l,l=qi(Uu,"onSelect"),0<l.length&&(t=new $n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=rl)))}function _a(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ol={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},Lu={},kc={};qt&&(kc=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Da(e){if(Lu[e])return Lu[e];if(!ol[e])return e;var t=ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in kc)return Lu[e]=t[a];return e}var Yc=Da("animationend"),qc=Da("animationiteration"),Gc=Da("animationstart"),_m=Da("transitionrun"),Dm=Da("transitionstart"),Um=Da("transitioncancel"),Xc=Da("transitionend"),Qc=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function At(e,t){Qc.set(e,t),Oa(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],cl=0,Yu=0;function ti(){for(var e=cl,t=Yu=cl=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Zc(a,n,i)}}function ai(e,t,a,l){yt[cl++]=e,yt[cl++]=t,yt[cl++]=a,yt[cl++]=l,Yu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function qu(e,t,a,l){return ai(e,t,a,l),li(e)}function Ua(e,t){return ai(e,null,null,t),li(e)}function Zc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ut(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function li(e){if(50<xn)throw xn=0,Wr=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={};function Hm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,l){return new Hm(e,t,a,l)}function Gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Gu(e)&&(u=1);else if(typeof e=="string")u=Gp(e,a,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ve:return e=ot(31,a,t,n),e.elementType=Ve,e.lanes=i,e;case q:return Ha(a.children,n,i,t);case H:u=8,n|=24;break;case K:return e=ot(12,a,t,n|2),e.elementType=K,e.lanes=i,e;case xe:return e=ot(13,a,t,n),e.elementType=xe,e.lanes=i,e;case we:return e=ot(19,a,t,n),e.elementType=we,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:u=10;break e;case I:u=9;break e;case ye:u=11;break e;case W:u=14;break e;case Ne:u=16,l=null;break e}u=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=ot(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ha(e,t,a,l){return e=ot(7,e,l,t),e.lanes=a,e}function Xu(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function Kc(e){var t=ot(18,null,null,0);return t.stateNode=e,t}function Qu(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jc=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=Jc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ko(t)},Jc.set(e,t),t)}return{value:e,source:t,stack:Ko(t)}}var fl=[],dl=0,ii=null,$l=0,bt=[],St=0,ra=null,Bt=1,_t="";function Xt(e,t){fl[dl++]=$l,fl[dl++]=ii,ii=e,$l=t}function Fc(e,t,a){bt[St++]=Bt,bt[St++]=_t,bt[St++]=ra,ra=e;var l=Bt;e=_t;var n=32-ut(l)-1;l&=~(1<<n),a+=1;var i=32-ut(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Bt=1<<32-ut(t)+n|a<<n|l,_t=i+e}else Bt=1<<i|a<<n|l,_t=e}function Zu(e){e.return!==null&&(Xt(e,1),Fc(e,1,0))}function Vu(e){for(;e===ii;)ii=fl[--dl],fl[dl]=null,$l=fl[--dl],fl[dl]=null;for(;e===ra;)ra=bt[--St],bt[St]=null,_t=bt[--St],bt[St]=null,Bt=bt[--St],bt[St]=null}function Wc(e,t){bt[St++]=Bt,bt[St++]=_t,bt[St++]=ra,Bt=t.id,_t=t.overflow,ra=e}var Ge=null,Ee=null,re=!1,oa=null,Et=!1,Ku=Error(c(519));function ca(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Il(xt(t,e)),Ku}function $c(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[qe]=e,t[$e]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<Sn.length;a++)ne(Sn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),sc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),dc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||pd(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Yt),t=!0):t=!1,t||ca(e,!0)}function Ic(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ge=Ge.return}}function hl(e){if(e!==Ge)return!1;if(!re)return Ic(e),re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fo(e.type,e.memoizedProps)),a=!a),a&&Ee&&ca(e),Ic(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=zd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=zd(e)}else t===27?(t=Ee,ja(e.type)?(e=vo,vo=null,Ee=e):Ee=t):Ee=Ge?zt(e.stateNode.nextSibling):null;return!0}function La(){Ee=Ge=null,re=!1}function Ju(){var e=oa;return e!==null&&(at===null?at=e:at.push.apply(at,e),oa=null),e}function Il(e){oa===null?oa=[e]:oa.push(e)}var Fu=y(null),ka=null,Qt=null;function sa(e,t,a){k(Fu,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=Fu.current,D(Fu)}function Wu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function $u(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var m=0;m<t.length;m++)if(s.context===t[m]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Wu(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(c(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Wu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ml(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var s=n.type;rt(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===fe.current){if(u=n.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Tn):e=[Tn])}n=n.return}e!==null&&$u(t,e,a,l),t.flags|=262144}function ui(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){ka=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return Pc(ka,e)}function ri(e,t){return ka===null&&Ya(e),Pc(e,t)}function Pc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Qt===null){if(e===null)throw Error(c(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return a}var Lm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},km=r.unstable_scheduleCallback,Ym=r.unstable_NormalPriority,_e={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new Lm,data:new Map,refCount:0}}function Pl(e){e.refCount--,e.refCount===0&&km(Ym,function(){e.controller.abort()})}var en=null,Pu=0,pl=0,gl=null;function qm(e,t){if(en===null){var a=en=[];Pu=0,pl=ao(),gl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Pu++,t.then(es,es),t}function es(){if(--Pu===0&&en!==null){gl!==null&&(gl.status="fulfilled");var e=en;en=null,pl=0,gl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var ts=R.S;R.S=function(e,t){kf=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qm(e,t),ts!==null&&ts(e,t)};var qa=y(null);function er(){var e=qa.current;return e!==null?e:Se.pooledCache}function oi(e,t){t===null?k(qa,qa.current):k(qa,t.pool)}function as(){var e=er();return e===null?null:{parent:_e._currentValue,pool:e}}var vl=Error(c(460)),tr=Error(c(474)),ci=Error(c(542)),si={then:function(){}};function ls(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ns(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Yt,Yt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,us(e),e;default:if(typeof t.status=="string")t.then(Yt,Yt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,us(e),e}throw Xa=t,vl}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Xa=a,vl):a}}var Xa=null;function is(){if(Xa===null)throw Error(c(459));var e=Xa;return Xa=null,e}function us(e){if(e===vl||e===ci)throw Error(c(483))}var yl=null,tn=0;function fi(e){var t=tn;return tn+=1,yl===null&&(yl=[]),ns(yl,e,t)}function an(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rs(e){function t(b,v){if(e){var j=b.deletions;j===null?(b.deletions=[v],b.flags|=16):j.push(v)}}function a(b,v){if(!e)return null;for(;v!==null;)t(b,v),v=v.sibling;return null}function l(b){for(var v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function n(b,v){return b=Gt(b,v),b.index=0,b.sibling=null,b}function i(b,v,j){return b.index=j,e?(j=b.alternate,j!==null?(j=j.index,j<v?(b.flags|=67108866,v):j):(b.flags|=67108866,v)):(b.flags|=1048576,v)}function u(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function s(b,v,j,O){return v===null||v.tag!==6?(v=Xu(j,b.mode,O),v.return=b,v):(v=n(v,j),v.return=b,v)}function m(b,v,j,O){var Q=j.type;return Q===q?N(b,v,j.props.children,O,j.key):v!==null&&(v.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ne&&Ga(Q)===v.type)?(v=n(v,j.props),an(v,j),v.return=b,v):(v=ni(j.type,j.key,j.props,null,b.mode,O),an(v,j),v.return=b,v)}function z(b,v,j,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==j.containerInfo||v.stateNode.implementation!==j.implementation?(v=Qu(j,b.mode,O),v.return=b,v):(v=n(v,j.children||[]),v.return=b,v)}function N(b,v,j,O,Q){return v===null||v.tag!==7?(v=Ha(j,b.mode,O,Q),v.return=b,v):(v=n(v,j),v.return=b,v)}function B(b,v,j){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Xu(""+v,b.mode,j),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case U:return j=ni(v.type,v.key,v.props,null,b.mode,j),an(j,v),j.return=b,j;case Z:return v=Qu(v,b.mode,j),v.return=b,v;case Ne:return v=Ga(v),B(b,v,j)}if(Be(v)||Ke(v))return v=Ha(v,b.mode,j,null),v.return=b,v;if(typeof v.then=="function")return B(b,fi(v),j);if(v.$$typeof===J)return B(b,ri(b,v),j);di(b,v)}return null}function w(b,v,j,O){var Q=v!==null?v.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Q!==null?null:s(b,v,""+j,O);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return j.key===Q?m(b,v,j,O):null;case Z:return j.key===Q?z(b,v,j,O):null;case Ne:return j=Ga(j),w(b,v,j,O)}if(Be(j)||Ke(j))return Q!==null?null:N(b,v,j,O,null);if(typeof j.then=="function")return w(b,v,fi(j),O);if(j.$$typeof===J)return w(b,v,ri(b,j),O);di(b,j)}return null}function T(b,v,j,O,Q){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return b=b.get(j)||null,s(v,b,""+O,Q);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case U:return b=b.get(O.key===null?j:O.key)||null,m(v,b,O,Q);case Z:return b=b.get(O.key===null?j:O.key)||null,z(v,b,O,Q);case Ne:return O=Ga(O),T(b,v,j,O,Q)}if(Be(O)||Ke(O))return b=b.get(j)||null,N(v,b,O,Q,null);if(typeof O.then=="function")return T(b,v,j,fi(O),Q);if(O.$$typeof===J)return T(b,v,j,ri(v,O),Q);di(v,O)}return null}function Y(b,v,j,O){for(var Q=null,oe=null,X=v,te=v=0,ue=null;X!==null&&te<j.length;te++){X.index>te?(ue=X,X=null):ue=X.sibling;var ce=w(b,X,j[te],O);if(ce===null){X===null&&(X=ue);break}e&&X&&ce.alternate===null&&t(b,X),v=i(ce,v,te),oe===null?Q=ce:oe.sibling=ce,oe=ce,X=ue}if(te===j.length)return a(b,X),re&&Xt(b,te),Q;if(X===null){for(;te<j.length;te++)X=B(b,j[te],O),X!==null&&(v=i(X,v,te),oe===null?Q=X:oe.sibling=X,oe=X);return re&&Xt(b,te),Q}for(X=l(X);te<j.length;te++)ue=T(X,b,te,j[te],O),ue!==null&&(e&&ue.alternate!==null&&X.delete(ue.key===null?te:ue.key),v=i(ue,v,te),oe===null?Q=ue:oe.sibling=ue,oe=ue);return e&&X.forEach(function(Ca){return t(b,Ca)}),re&&Xt(b,te),Q}function V(b,v,j,O){if(j==null)throw Error(c(151));for(var Q=null,oe=null,X=v,te=v=0,ue=null,ce=j.next();X!==null&&!ce.done;te++,ce=j.next()){X.index>te?(ue=X,X=null):ue=X.sibling;var Ca=w(b,X,ce.value,O);if(Ca===null){X===null&&(X=ue);break}e&&X&&Ca.alternate===null&&t(b,X),v=i(Ca,v,te),oe===null?Q=Ca:oe.sibling=Ca,oe=Ca,X=ue}if(ce.done)return a(b,X),re&&Xt(b,te),Q;if(X===null){for(;!ce.done;te++,ce=j.next())ce=B(b,ce.value,O),ce!==null&&(v=i(ce,v,te),oe===null?Q=ce:oe.sibling=ce,oe=ce);return re&&Xt(b,te),Q}for(X=l(X);!ce.done;te++,ce=j.next())ce=T(X,b,te,ce.value,O),ce!==null&&(e&&ce.alternate!==null&&X.delete(ce.key===null?te:ce.key),v=i(ce,v,te),oe===null?Q=ce:oe.sibling=ce,oe=ce);return e&&X.forEach(function(Pp){return t(b,Pp)}),re&&Xt(b,te),Q}function ve(b,v,j,O){if(typeof j=="object"&&j!==null&&j.type===q&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case U:e:{for(var Q=j.key;v!==null;){if(v.key===Q){if(Q=j.type,Q===q){if(v.tag===7){a(b,v.sibling),O=n(v,j.props.children),O.return=b,b=O;break e}}else if(v.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ne&&Ga(Q)===v.type){a(b,v.sibling),O=n(v,j.props),an(O,j),O.return=b,b=O;break e}a(b,v);break}else t(b,v);v=v.sibling}j.type===q?(O=Ha(j.props.children,b.mode,O,j.key),O.return=b,b=O):(O=ni(j.type,j.key,j.props,null,b.mode,O),an(O,j),O.return=b,b=O)}return u(b);case Z:e:{for(Q=j.key;v!==null;){if(v.key===Q)if(v.tag===4&&v.stateNode.containerInfo===j.containerInfo&&v.stateNode.implementation===j.implementation){a(b,v.sibling),O=n(v,j.children||[]),O.return=b,b=O;break e}else{a(b,v);break}else t(b,v);v=v.sibling}O=Qu(j,b.mode,O),O.return=b,b=O}return u(b);case Ne:return j=Ga(j),ve(b,v,j,O)}if(Be(j))return Y(b,v,j,O);if(Ke(j)){if(Q=Ke(j),typeof Q!="function")throw Error(c(150));return j=Q.call(j),V(b,v,j,O)}if(typeof j.then=="function")return ve(b,v,fi(j),O);if(j.$$typeof===J)return ve(b,v,ri(b,j),O);di(b,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,v!==null&&v.tag===6?(a(b,v.sibling),O=n(v,j),O.return=b,b=O):(a(b,v),O=Xu(j,b.mode,O),O.return=b,b=O),u(b)):a(b,v)}return function(b,v,j,O){try{tn=0;var Q=ve(b,v,j,O);return yl=null,Q}catch(X){if(X===vl||X===ci)throw X;var oe=ot(29,X,null,b.mode);return oe.lanes=O,oe.return=b,oe}}}var Qa=rs(!0),os=rs(!1),fa=!1;function ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(se&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=li(e),Zc(e,null,a),t}return ai(e,l,t,a),li(e)}function ln(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Po(e,a)}}function nr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ir=!1;function nn(){if(ir){var e=gl;if(e!==null)throw e}}function un(e,t,a,l){ir=!1;var n=e.updateQueue;fa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var m=s,z=m.next;m.next=null,u===null?i=z:u.next=z,u=m;var N=e.alternate;N!==null&&(N=N.updateQueue,s=N.lastBaseUpdate,s!==u&&(s===null?N.firstBaseUpdate=z:s.next=z,N.lastBaseUpdate=m))}if(i!==null){var B=n.baseState;u=0,N=z=m=null,s=i;do{var w=s.lane&-536870913,T=w!==s.lane;if(T?(ie&w)===w:(l&w)===w){w!==0&&w===pl&&(ir=!0),N!==null&&(N=N.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var Y=e,V=s;w=t;var ve=a;switch(V.tag){case 1:if(Y=V.payload,typeof Y=="function"){B=Y.call(ve,B,w);break e}B=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=V.payload,w=typeof Y=="function"?Y.call(ve,B,w):Y,w==null)break e;B=x({},B,w);break e;case 2:fa=!0}}w=s.callback,w!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[w]:T.push(w))}else T={lane:w,tag:s.tag,payload:s.payload,callback:s.callback,next:null},N===null?(z=N=T,m=B):N=N.next=T,u|=w;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;T=s,s=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);N===null&&(m=B),n.baseState=m,n.firstBaseUpdate=z,n.lastBaseUpdate=N,i===null&&(n.shared.lanes=0),ya|=u,e.lanes=u,e.memoizedState=B}}function cs(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ss(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cs(a[e],t)}var xl=y(null),hi=y(0);function fs(e,t){e=ea,k(hi,e),k(xl,t),ea=e|t.baseLanes}function ur(){k(hi,ea),k(xl,xl.current)}function rr(){ea=hi.current,D(xl),D(hi)}var ct=y(null),jt=null;function ma(e){var t=e.alternate;k(Me,Me.current&1),k(ct,e),jt===null&&(t===null||xl.current!==null||t.memoizedState!==null)&&(jt=e)}function or(e){k(Me,Me.current),k(ct,e),jt===null&&(jt=e)}function ds(e){e.tag===22?(k(Me,Me.current),k(ct,e),jt===null&&(jt=e)):pa()}function pa(){k(Me,Me.current),k(ct,ct.current)}function st(e){D(ct),jt===e&&(jt=null),D(Me)}var Me=y(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||po(a)||go(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,ee=null,pe=null,De=null,pi=!1,bl=!1,Za=!1,gi=0,rn=0,Sl=null,Xm=0;function Ae(){throw Error(c(321))}function cr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!rt(e[a],t[a]))return!1;return!0}function sr(e,t,a,l,n,i){return Vt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Fs:wr,Za=!1,i=a(l,n),Za=!1,bl&&(i=ms(t,a,l,n)),hs(e),i}function hs(e){R.H=sn;var t=pe!==null&&pe.next!==null;if(Vt=0,De=pe=ee=null,pi=!1,rn=0,Sl=null,t)throw Error(c(300));e===null||Ue||(e=e.dependencies,e!==null&&ui(e)&&(Ue=!0))}function ms(e,t,a,l){ee=e;var n=0;do{if(bl&&(Sl=null),rn=0,bl=!1,25<=n)throw Error(c(301));if(n+=1,De=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=Ws,i=t(a,l)}while(bl);return i}function Qm(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?on(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(ee.flags|=1024),t}function fr(){var e=gi!==0;return gi=0,e}function dr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function hr(e){if(pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pi=!1}Vt=0,De=pe=ee=null,bl=!1,rn=gi=0,Sl=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ee.memoizedState=De=e:De=De.next=e,De}function Oe(){if(pe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=De===null?ee.memoizedState:De.next;if(t!==null)De=t,pe=e;else{if(e===null)throw ee.alternate===null?Error(c(467)):Error(c(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},De===null?ee.memoizedState=De=e:De=De.next=e}return De}function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function on(e){var t=rn;return rn+=1,Sl===null&&(Sl=[]),e=ns(Sl,e,t),t=ee,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Fs:wr),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return on(e);if(e.$$typeof===J)return Xe(e)}throw Error(c(438,String(e)))}function mr(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=vi(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Mt;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=Oe();return pr(t,pe,e)}function pr(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,m=null,z=t,N=!1;do{var B=z.lane&-536870913;if(B!==z.lane?(ie&B)===B:(Vt&B)===B){var w=z.revertLane;if(w===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),B===pl&&(N=!0);else if((Vt&w)===w){z=z.next,w===pl&&(N=!0);continue}else B={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(s=m=B,u=i):m=m.next=B,ee.lanes|=w,ya|=w;B=z.action,Za&&a(i,B),i=z.hasEagerState?z.eagerState:a(i,B)}else w={lane:B,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},m===null?(s=m=w,u=i):m=m.next=w,ee.lanes|=B,ya|=B;z=z.next}while(z!==null&&z!==t);if(m===null?u=i:m.next=s,!rt(i,e.memoizedState)&&(Ue=!0,N&&(a=gl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=m,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function gr(e){var t=Oe(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);rt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ps(e,t,a){var l=ee,n=Oe(),i=re;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!rt((pe||n).memoizedState,a);if(u&&(n.memoizedState=a,Ue=!0),n=n.queue,xr(ys.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||De!==null&&De.memoizedState.tag&1){if(l.flags|=2048,El(9,{destroy:void 0},vs.bind(null,l,n,a,t),null),Se===null)throw Error(c(349));i||(Vt&127)!==0||gs(l,t,a)}return a}function gs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=vi(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function vs(e,t,a,l){t.value=a,t.getSnapshot=l,xs(t)&&bs(e)}function ys(e,t,a){return a(function(){xs(t)&&bs(e)})}function xs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!rt(e,a)}catch{return!0}}function bs(e){var t=Ua(e,2);t!==null&&lt(t,e,2)}function vr(e){var t=We();if(typeof e=="function"){var a=e;if(e=a(),Za){na(!0);try{a()}finally{na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Ss(e,t,a,l){return e.baseState=a,pr(e,pe,typeof l=="function"?l:Kt)}function Zm(e,t,a,l,n){if(Ei(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Es(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Es(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,u={};R.T=u;try{var s=a(n,l),m=R.S;m!==null&&m(u,s),js(e,t,s)}catch(z){yr(e,t,z)}finally{i!==null&&u.types!==null&&(i.types=u.types),R.T=i}}else try{i=a(n,l),js(e,t,i)}catch(z){yr(e,t,z)}}function js(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){zs(e,t,l)},function(l){return yr(e,t,l)}):zs(e,t,a)}function zs(e,t,a){t.status="fulfilled",t.value=a,ws(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Es(e,a)))}function yr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ws(t),t=t.next;while(t!==l)}e.action=null}function ws(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ts(e,t){return t}function As(e,t){if(re){var a=Se.formState;if(a!==null){e:{var l=ee;if(re){if(Ee){t:{for(var n=Ee,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=zt(n.nextSibling),l=n.data==="F!";break e}}ca(l)}l=!1}l&&(t=a[0])}}return a=We(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:t},a.queue=l,a=Vs.bind(null,ee,l),l.dispatch=a,l=vr(!1),i=zr.bind(null,ee,!1,l.queue),l=We(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Zm.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Cs(e){var t=Oe();return Ns(t,pe,e)}function Ns(e,t,a){if(t=pr(e,t,Ts)[0],e=xi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=on(t)}catch(u){throw u===vl?ci:u}else l=t;t=Oe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,El(9,{destroy:void 0},Vm.bind(null,n,a),null)),[l,i,e]}function Vm(e,t){e.action=t}function Rs(e){var t=Oe(),a=pe;if(a!==null)return Ns(t,a,e);Oe(),t=t.memoizedState,a=Oe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function El(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=vi(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ms(){return Oe().memoizedState}function bi(e,t,a,l){var n=We();ee.flags|=e,n.memoizedState=El(1|t,{destroy:void 0},a,l===void 0?null:l)}function Si(e,t,a,l){var n=Oe();l=l===void 0?null:l;var i=n.memoizedState.inst;pe!==null&&l!==null&&cr(l,pe.memoizedState.deps)?n.memoizedState=El(t,i,a,l):(ee.flags|=e,n.memoizedState=El(1|t,i,a,l))}function Os(e,t){bi(8390656,8,e,t)}function xr(e,t){Si(2048,8,e,t)}function Km(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=vi(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Bs(e){var t=Oe().memoizedState;return Km({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return Si(4,2,e,t)}function Ds(e,t){return Si(4,4,e,t)}function Us(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hs(e,t,a){a=a!=null?a.concat([e]):null,Si(4,4,Us.bind(null,t,e),a)}function br(){}function Ls(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&cr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ks(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&cr(t,l[1]))return l[0];if(l=e(),Za){na(!0);try{e()}finally{na(!1)}}return a.memoizedState=[l,t],l}function Sr(e,t,a){return a===void 0||(Vt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=qf(),ee.lanes|=e,ya|=e,a)}function Ys(e,t,a,l){return rt(a,t)?a:xl.current!==null?(e=Sr(e,a,l),rt(e,t)||(Ue=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(ie&261930)===0?(Ue=!0,e.memoizedState=a):(e=qf(),ee.lanes|=e,ya|=e,t)}function qs(e,t,a,l,n){var i=L.p;L.p=i!==0&&8>i?i:8;var u=R.T,s={};R.T=s,zr(e,!1,t,a);try{var m=n(),z=R.S;if(z!==null&&z(s,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var N=Gm(m,l);cn(e,t,N,ht(e))}else cn(e,t,l,ht(e))}catch(B){cn(e,t,{then:function(){},status:"rejected",reason:B},ht())}finally{L.p=i,u!==null&&s.types!==null&&(u.types=s.types),R.T=u}}function Jm(){}function Er(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Gs(e).queue;qs(e,n,t,F,a===null?Jm:function(){return Xs(e),a(l)})}function Gs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xs(e){var t=Gs(e);t.next===null&&(t=e.alternate.memoizedState),cn(e,t.next.queue,{},ht())}function jr(){return Xe(Tn)}function Qs(){return Oe().memoizedState}function Zs(){return Oe().memoizedState}function Fm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ht();e=da(a);var l=ha(t,e,a);l!==null&&(lt(l,t,a),ln(l,t,a)),t={cache:Iu()},e.payload=t;return}t=t.return}}function Wm(e,t,a){var l=ht();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ei(e)?Ks(t,a):(a=qu(e,t,a,l),a!==null&&(lt(a,e,l),Js(a,t,l)))}function Vs(e,t,a){var l=ht();cn(e,t,a,l)}function cn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))Ks(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,rt(s,u))return ai(e,t,n,0),Se===null&&ti(),!1}catch{}if(a=qu(e,t,n,l),a!==null)return lt(a,e,l),Js(a,t,l),!0}return!1}function zr(e,t,a,l){if(l={lane:2,revertLane:ao(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(c(479))}else t=qu(e,a,l,2),t!==null&&lt(t,e,2)}function Ei(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Ks(e,t){bl=pi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Js(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Po(e,a)}}var sn={readContext:Xe,use:yi,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};sn.useEffectEvent=Ae;var Fs={readContext:Xe,use:yi,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Os,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bi(4194308,4,Us.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){bi(4,2,e,t)},useMemo:function(e,t){var a=We();t=t===void 0?null:t;var l=e();if(Za){na(!0);try{e()}finally{na(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=We();if(a!==void 0){var n=a(t);if(Za){na(!0);try{a(t)}finally{na(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Wm.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=vr(e);var t=e.queue,a=Vs.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:br,useDeferredValue:function(e,t){var a=We();return Sr(a,e,t)},useTransition:function(){var e=vr(!1);return e=qs.bind(null,ee,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=We();if(re){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Se===null)throw Error(c(349));(ie&127)!==0||gs(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Os(ys.bind(null,l,i,e),[e]),l.flags|=2048,El(9,{destroy:void 0},vs.bind(null,l,i,a,t),null),a},useId:function(){var e=We(),t=Se.identifierPrefix;if(re){var a=_t,l=Bt;a=(l&~(1<<32-ut(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Xm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:jr,useFormState:As,useActionState:As,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=zr.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:mr,useCacheRefresh:function(){return We().memoizedState=Fm.bind(null,ee)},useEffectEvent:function(e){var t=We(),a={impl:e};return t.memoizedState=a,function(){if((se&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},wr={readContext:Xe,use:yi,useCallback:Ls,useContext:Xe,useEffect:xr,useImperativeHandle:Hs,useInsertionEffect:_s,useLayoutEffect:Ds,useMemo:ks,useReducer:xi,useRef:Ms,useState:function(){return xi(Kt)},useDebugValue:br,useDeferredValue:function(e,t){var a=Oe();return Ys(a,pe.memoizedState,e,t)},useTransition:function(){var e=xi(Kt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:on(e),t]},useSyncExternalStore:ps,useId:Qs,useHostTransitionStatus:jr,useFormState:Cs,useActionState:Cs,useOptimistic:function(e,t){var a=Oe();return Ss(a,pe,e,t)},useMemoCache:mr,useCacheRefresh:Zs};wr.useEffectEvent=Bs;var Ws={readContext:Xe,use:yi,useCallback:Ls,useContext:Xe,useEffect:xr,useImperativeHandle:Hs,useInsertionEffect:_s,useLayoutEffect:Ds,useMemo:ks,useReducer:gr,useRef:Ms,useState:function(){return gr(Kt)},useDebugValue:br,useDeferredValue:function(e,t){var a=Oe();return pe===null?Sr(a,e,t):Ys(a,pe.memoizedState,e,t)},useTransition:function(){var e=gr(Kt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:on(e),t]},useSyncExternalStore:ps,useId:Qs,useHostTransitionStatus:jr,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){var a=Oe();return pe!==null?Ss(a,pe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mr,useCacheRefresh:Zs};Ws.useEffectEvent=Bs;function Tr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ar={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ht(),n=da(l);n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),ln(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ht(),n=da(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),ln(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ht(),l=da(a);l.tag=2,t!=null&&(l.callback=t),t=ha(e,l,a),t!==null&&(lt(t,e,a),ln(t,e,a))}};function $s(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Fl(a,l)||!Fl(n,i):!0}function Is(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ar.enqueueReplaceState(t,t.state,null)}function Va(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Ps(e){ei(e)}function ef(e){console.error(e)}function tf(e){ei(e)}function ji(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function af(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Cr(e,t,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){ji(e,t)},a}function lf(e){return e=da(e),e.tag=3,e}function nf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){af(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){af(t,a,l),typeof n!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function $m(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&ml(t,a,n,!0),a=ct.current,a!==null){switch(a.tag){case 31:case 13:return jt===null?Di():a.alternate===null&&Ce===0&&(Ce=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Pr(e,l,n)),!1;case 22:return a.flags|=65536,l===si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Pr(e,l,n)),!1}throw Error(c(435,a.tag))}return Pr(e,l,n),Di(),!1}if(re)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ku&&(e=Error(c(422),{cause:l}),Il(xt(e,a)))):(l!==Ku&&(t=Error(c(423),{cause:l}),Il(xt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=xt(l,a),n=Cr(e.stateNode,l,n),nr(e,n),Ce!==4&&(Ce=2)),!1;var i=Error(c(520),{cause:l});if(i=xt(i,a),yn===null?yn=[i]:yn.push(i),Ce!==4&&(Ce=2),t===null)return!0;l=xt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Cr(a.stateNode,l,e),nr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(xa===null||!xa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=lf(n),nf(n,e,a,l),nr(a,n),!1}a=a.return}while(a!==null);return!1}var Nr=Error(c(461)),Ue=!1;function Qe(e,t,a,l){t.child=e===null?os(t,null,a,l):Qa(t,e.child,a,l)}function uf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return Ya(t),l=sr(e,t,a,u,i,n),s=fr(),e!==null&&!Ue?(dr(e,t,n),Jt(e,t,n)):(re&&s&&Zu(t),t.flags|=1,Qe(e,t,l,n),t.child)}function rf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Gu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,of(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Hr(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Fl,a(u,l)&&e.ref===t.ref)return Jt(e,t,n)}return t.flags|=1,e=Gt(i,l),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Fl(i,l)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=l=i,Hr(e,n))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Jt(e,t,n)}return Rr(e,t,a,l,n)}function cf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return sf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oi(t,i!==null?i.cachePool:null),i!==null?fs(t,i):ur(),ds(t);else return l=t.lanes=536870912,sf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(oi(t,i.cachePool),fs(t,i),pa(),t.memoizedState=null):(e!==null&&oi(t,null),ur(),pa());return Qe(e,t,n,a),t.child}function fn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sf(e,t,a,l,n){var i=er();return i=i===null?null:{parent:_e._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&oi(t,null),ur(),ds(t),e!==null&&ml(e,t,l,!0),t.childLanes=n,null}function zi(e,t){return t=Ti({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ff(e,t,a){return Qa(t,e.child,null,a),e=zi(t,t.pendingProps),e.flags|=2,st(t),t.memoizedState=null,e}function Im(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(l.mode==="hidden")return e=zi(t,l),t.lanes=536870912,fn(null,e);if(or(t),(e=Ee)?(e=jd(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Bt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},a=Kc(e),a.return=t,t.child=a,Ge=t,Ee=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return zi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(or(t),n)if(t.flags&256)t.flags&=-257,t=ff(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ue||ml(e,t,a,!1),n=(a&e.childLanes)!==0,Ue||n){if(l=Se,l!==null&&(u=ec(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ua(e,u),lt(l,e,u),Nr;Di(),t=ff(e,t,a)}else e=i.treeContext,Ee=zt(u.nextSibling),Ge=t,re=!0,oa=null,Et=!1,e!==null&&Wc(t,e),t=zi(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Rr(e,t,a,l,n){return Ya(t),a=sr(e,t,a,l,void 0,n),l=fr(),e!==null&&!Ue?(dr(e,t,n),Jt(e,t,n)):(re&&l&&Zu(t),t.flags|=1,Qe(e,t,a,n),t.child)}function df(e,t,a,l,n,i){return Ya(t),t.updateQueue=null,a=ms(t,l,a,n),hs(e),l=fr(),e!==null&&!Ue?(dr(e,t,i),Jt(e,t,i)):(re&&l&&Zu(t),t.flags|=1,Qe(e,t,a,i),t.child)}function hf(e,t,a,l,n){if(Ya(t),t.stateNode===null){var i=sl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Xe(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ar,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ar(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Xe(u):sl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Tr(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Ar.enqueueReplaceState(i,i.state,null),un(t,l,i,n),nn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,m=Va(a,s);i.props=m;var z=i.context,N=a.contextType;u=sl,typeof N=="object"&&N!==null&&(u=Xe(N));var B=a.getDerivedStateFromProps;N=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||z!==u)&&Is(t,i,l,u),fa=!1;var w=t.memoizedState;i.state=w,un(t,l,i,n),nn(),z=t.memoizedState,s||w!==z||fa?(typeof B=="function"&&(Tr(t,a,B,l),z=t.memoizedState),(m=fa||$s(t,a,m,l,w,z,u))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),i.props=l,i.state=z,i.context=u,l=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,lr(e,t),u=t.memoizedProps,N=Va(a,u),i.props=N,B=t.pendingProps,w=i.context,z=a.contextType,m=sl,typeof z=="object"&&z!==null&&(m=Xe(z)),s=a.getDerivedStateFromProps,(z=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==B||w!==m)&&Is(t,i,l,m),fa=!1,w=t.memoizedState,i.state=w,un(t,l,i,n),nn();var T=t.memoizedState;u!==B||w!==T||fa||e!==null&&e.dependencies!==null&&ui(e.dependencies)?(typeof s=="function"&&(Tr(t,a,s,l),T=t.memoizedState),(N=fa||$s(t,a,N,l,w,T,m)||e!==null&&e.dependencies!==null&&ui(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,T,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,T,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),i.props=l,i.state=T,i.context=m,l=N):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,wi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Qa(t,e.child,null,n),t.child=Qa(t,null,a,n)):Qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Jt(e,t,n),e}function mf(e,t,a,l){return La(),t.flags|=256,Qe(e,t,a,l),t.child}var Mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Or(e){return{baseLanes:e,cachePool:as()}}function Br(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=dt),e}function pf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?ma(t):pa(),(e=Ee)?(e=jd(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Bt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},a=Kc(e),a.return=t,t.child=a,Ge=t,Ee=null)):e=null,e===null)throw ca(t);return go(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(pa(),n=t.mode,s=Ti({mode:"hidden",children:s},n),l=Ha(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=Or(a),l.childLanes=Br(e,u,a),t.memoizedState=Mr,fn(null,l)):(ma(t),_r(t,s))}var m=e.memoizedState;if(m!==null&&(s=m.dehydrated,s!==null)){if(i)t.flags&256?(ma(t),t.flags&=-257,t=Dr(e,t,a)):t.memoizedState!==null?(pa(),t.child=e.child,t.flags|=128,t=null):(pa(),s=l.fallback,n=t.mode,l=Ti({mode:"visible",children:l.children},n),s=Ha(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Qa(t,e.child,null,a),l=t.child,l.memoizedState=Or(a),l.childLanes=Br(e,u,a),t.memoizedState=Mr,t=fn(null,l));else if(ma(t),go(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var z=u.dgst;u=z,l=Error(c(419)),l.stack="",l.digest=u,Il({value:l,source:null,stack:null}),t=Dr(e,t,a)}else if(Ue||ml(e,t,a,!1),u=(a&e.childLanes)!==0,Ue||u){if(u=Se,u!==null&&(l=ec(u,a),l!==0&&l!==m.retryLane))throw m.retryLane=l,Ua(e,l),lt(u,e,l),Nr;po(s)||Di(),t=Dr(e,t,a)}else po(s)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Ee=zt(s.nextSibling),Ge=t,re=!0,oa=null,Et=!1,e!==null&&Wc(t,e),t=_r(t,l.children),t.flags|=4096);return t}return n?(pa(),s=l.fallback,n=t.mode,m=e.child,z=m.sibling,l=Gt(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&65011712,z!==null?s=Gt(z,s):(s=Ha(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,fn(null,l),l=t.child,s=e.child.memoizedState,s===null?s=Or(a):(n=s.cachePool,n!==null?(m=_e._currentValue,n=n.parent!==m?{parent:m,pool:m}:n):n=as(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Br(e,u,a),t.memoizedState=Mr,fn(e.child,l)):(ma(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function _r(e,t){return t=Ti({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ti(e,t){return e=ot(22,e,null,t),e.lanes=0,e}function Dr(e,t,a){return Qa(t,e.child,null,a),e=_r(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Wu(e.return,t,a)}function Ur(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function vf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Me.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,k(Me,u),Qe(e,t,l,a),l=re?$l:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gf(e,a,t);else if(e.tag===19)gf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&mi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ur(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&mi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ur(t,!0,a,null,i,l);break;case"together":Ur(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ml(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Hr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ui(e)))}function Pm(e,t,a){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),sa(t,_e,e.memoizedState.cache),La();break;case 27:case 5:Ul(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,or(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?pf(e,t,a):(ma(t),e=Jt(e,t,a),e!==null?e.sibling:null);ma(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(ml(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return vf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),k(Me,Me.current),l)break;return null;case 22:return t.lanes=0,cf(e,t,a,t.pendingProps);case 24:sa(t,_e,e.memoizedState.cache)}return Jt(e,t,a)}function yf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Hr(e,a)&&(t.flags&128)===0)return Ue=!1,Pm(e,t,a);Ue=(e.flags&131072)!==0}else Ue=!1,re&&(t.flags&1048576)!==0&&Fc(t,$l,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e=="function")Gu(e)?(l=Va(e,l),t.tag=1,t=hf(null,t,e,l,a)):(t.tag=0,t=Rr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ye){t.tag=11,t=uf(null,t,e,l,a);break e}else if(n===W){t.tag=14,t=rf(null,t,e,l,a);break e}}throw t=pt(e)||e,Error(c(306,t,""))}}return t;case 0:return Rr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Va(l,t.pendingProps),hf(e,t,l,n,a);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,lr(e,t),un(t,l,null,a);var u=t.memoizedState;if(l=u.cache,sa(t,_e,l),l!==i.cache&&$u(t,[_e],a,!0),nn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=mf(e,t,l,a);break e}else if(l!==n){n=xt(Error(c(424)),t),Il(n),t=mf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=zt(e.firstChild),Ge=t,re=!0,oa=null,Et=!0,a=os(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(La(),l===n){t=Jt(e,t,a);break e}Qe(e,t,l,a)}t=t.child}return t;case 26:return wi(e,t),e===null?(a=Nd(t.type,null,t.pendingProps,null))?t.memoizedState=a:re||(a=t.type,e=t.pendingProps,l=Gi(ae.current).createElement(a),l[qe]=t,l[$e]=e,Ze(l,a,e),ke(l),t.stateNode=l):t.memoizedState=Nd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ul(t),e===null&&re&&(l=t.stateNode=Td(t.type,t.pendingProps,ae.current),Ge=t,Et=!0,n=Ee,ja(t.type)?(vo=n,Ee=zt(l.firstChild)):Ee=n),Qe(e,t,t.pendingProps.children,a),wi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=l=Ee)&&(l=Np(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ge=t,Ee=zt(l.firstChild),Et=!1,n=!0):n=!1),n||ca(t)),Ul(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,fo(n,i)?l=null:u!==null&&fo(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=sr(e,t,Qm,null,null,a),Tn._currentValue=n),wi(e,t),Qe(e,t,l,a),t.child;case 6:return e===null&&re&&((e=a=Ee)&&(a=Rp(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ge=t,Ee=null,e=!0):e=!1),e||ca(t)),null;case 13:return pf(e,t,a);case 4:return Fe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Qa(t,null,l,a):Qe(e,t,l,a),t.child;case 11:return uf(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,sa(t,t.type,l.value),Qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ya(t),n=Xe(n),l=l(n),t.flags|=1,Qe(e,t,l,a),t.child;case 14:return rf(e,t,t.type,t.pendingProps,a);case 15:return of(e,t,t.type,t.pendingProps,a);case 19:return vf(e,t,a);case 31:return Im(e,t,a);case 22:return cf(e,t,a,t.pendingProps);case 24:return Ya(t),l=Xe(_e),e===null?(n=er(),n===null&&(n=Se,i=Iu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ar(t),sa(t,_e,n)):((e.lanes&a)!==0&&(lr(e,t),un(t,null,null,a),nn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),sa(t,_e,l)):(l=i.cache,sa(t,_e,l),l!==n.cache&&$u(t,[_e],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Ft(e){e.flags|=4}function Lr(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Zf())e.flags|=8192;else throw Xa=si,tr}else e.flags&=-16777217}function xf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_d(t))if(Zf())e.flags|=8192;else throw Xa=si,tr}function Ai(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$o():536870912,e.lanes|=t,Tl|=t)}function dn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ep(e,t,a){var l=t.pendingProps;switch(Vu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(_e),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hl(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ju())),je(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Ft(t),i!==null?(je(t),xf(t,i)):(je(t),Lr(t,n,null,l,a))):i?i!==e.memoizedState?(Ft(t),je(t),xf(t,i)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ft(t),je(t),Lr(t,n,e,l,a)),null;case 27:if(Ln(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return je(t),null}e=G.current,hl(t)?$c(t):(e=Td(n,l,a),t.stateNode=e,Ft(t))}return je(t),null;case 5:if(Ln(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return je(t),null}if(i=G.current,hl(t))$c(t);else{var u=Gi(ae.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[qe]=t,i[$e]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ft(t)}}return je(t),Lr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,hl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ge,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||pd(e.nodeValue,a)),e||ca(t,!0)}else e=Gi(e).createTextNode(l),e[qe]=t,t.stateNode=e}return je(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=hl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[qe]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else a=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(st(t),t):(st(t),null);if((t.flags&128)!==0)throw Error(c(558))}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=hl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[qe]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(st(t),t):(st(t),null)}return st(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ai(t,t.updateQueue),je(t),null);case 4:return Re(),e===null&&uo(t.stateNode.containerInfo),je(t),null;case 10:return Zt(t.type),je(t),null;case 19:if(D(Me),l=t.memoizedState,l===null)return je(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)dn(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=mi(e),i!==null){for(t.flags|=128,dn(l,!1),e=i.updateQueue,t.updateQueue=e,Ai(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Vc(a,e),a=a.sibling;return k(Me,Me.current&1|2),re&&Xt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&nt()>Oi&&(t.flags|=128,n=!0,dn(l,!1),t.lanes=4194304)}else{if(!n)if(e=mi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ai(t,e),dn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return je(t),null}else 2*nt()-l.renderingStartTime>Oi&&a!==536870912&&(t.flags|=128,n=!0,dn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=nt(),e.sibling=null,a=Me.current,k(Me,n?a&1|2:a&1),re&&Xt(t,l.treeForkCount),e):(je(t),null);case 22:case 23:return st(t),rr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Ai(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&D(qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(_e),je(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function tp(e,t){switch(Vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(_e),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ln(t),null;case 31:if(t.memoizedState!==null){if(st(t),t.alternate===null)throw Error(c(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(st(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Me),null;case 4:return Re(),null;case 10:return Zt(t.type),null;case 22:case 23:return st(t),rr(),e!==null&&D(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(_e),null;case 25:return null;default:return null}}function bf(e,t){switch(Vu(t),t.tag){case 3:Zt(_e),Re();break;case 26:case 27:case 5:Ln(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&st(t);break;case 13:st(t);break;case 19:D(Me);break;case 10:Zt(t.type);break;case 22:case 23:st(t),rr(),e!==null&&D(qa);break;case 24:Zt(_e)}}function hn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){he(t,t.return,s)}}function ga(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var m=a,z=s;try{z()}catch(N){he(n,m,N)}}}l=l.next}while(l!==i)}}catch(N){he(t,t.return,N)}}function Sf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ss(t,a)}catch(l){he(e,e.return,l)}}}function Ef(e,t,a){a.props=Va(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function mn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){he(e,t,n)}}function Dt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){he(e,t,n)}else a.current=null}function jf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){he(e,e.return,n)}}function kr(e,t,a){try{var l=e.stateNode;jp(l,e.type,a,t),l[$e]=t}catch(n){he(e,e.return,n)}}function zf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function Yr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Yt));else if(l!==4&&(l===27&&ja(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(qr(e,t,a),e=e.sibling;e!==null;)qr(e,t,a),e=e.sibling}function Ci(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ci(e,t,a),e=e.sibling;e!==null;)Ci(e,t,a),e=e.sibling}function wf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ze(t,l,a),t[qe]=e,t[$e]=a}catch(i){he(e,e.return,i)}}var Wt=!1,He=!1,Gr=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ap(e,t){if(e=e.containerInfo,co=Fi,e=Hc(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,m=-1,z=0,N=0,B=e,w=null;t:for(;;){for(var T;B!==a||n!==0&&B.nodeType!==3||(s=u+n),B!==i||l!==0&&B.nodeType!==3||(m=u+l),B.nodeType===3&&(u+=B.nodeValue.length),(T=B.firstChild)!==null;)w=B,B=T;for(;;){if(B===e)break t;if(w===a&&++z===n&&(s=u),w===i&&++N===l&&(m=u),(T=B.nextSibling)!==null)break;B=w,w=B.parentNode}B=T}a=s===-1||m===-1?null:{start:s,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(so={focusedElem:e,selectionRange:a},Fi=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Y=Va(a.type,n);e=l.getSnapshotBeforeUpdate(Y,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(V){he(a,a.return,V)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)mo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Af(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:It(e,a),l&4&&hn(5,a);break;case 1:if(It(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){he(a,a.return,u)}else{var n=Va(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){he(a,a.return,u)}}l&64&&Sf(a),l&512&&mn(a,a.return);break;case 3:if(It(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ss(e,t)}catch(u){he(a,a.return,u)}}break;case 27:t===null&&l&4&&wf(a);case 26:case 5:It(e,a),t===null&&l&4&&jf(a),l&512&&mn(a,a.return);break;case 12:It(e,a);break;case 31:It(e,a),l&4&&Rf(e,a);break;case 13:It(e,a),l&4&&Mf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fp.bind(null,a),Mp(e,a))));break;case 22:if(l=a.memoizedState!==null||Wt,!l){t=t!==null&&t.memoizedState!==null||He,n=Wt;var i=He;Wt=l,(He=t)&&!i?Pt(e,a,(a.subtreeFlags&8772)!==0):It(e,a),Wt=n,He=i}break;case 30:break;default:It(e,a)}}function Cf(e){var t=e.alternate;t!==null&&(e.alternate=null,Cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,Pe=!1;function $t(e,t,a){for(a=a.child;a!==null;)Nf(e,t,a),a=a.sibling}function Nf(e,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Hl,a)}catch{}switch(a.tag){case 26:He||Dt(a,t),$t(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Dt(a,t);var l=ze,n=Pe;ja(a.type)&&(ze=a.stateNode,Pe=!1),$t(e,t,a),jn(a.stateNode),ze=l,Pe=n;break;case 5:He||Dt(a,t);case 6:if(l=ze,n=Pe,ze=null,$t(e,t,a),ze=l,Pe=n,ze!==null)if(Pe)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(i){he(a,t,i)}else try{ze.removeChild(a.stateNode)}catch(i){he(a,t,i)}break;case 18:ze!==null&&(Pe?(e=ze,Sd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_l(e)):Sd(ze,a.stateNode));break;case 4:l=ze,n=Pe,ze=a.stateNode.containerInfo,Pe=!0,$t(e,t,a),ze=l,Pe=n;break;case 0:case 11:case 14:case 15:ga(2,a,t),He||ga(4,a,t),$t(e,t,a);break;case 1:He||(Dt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ef(a,t,l)),$t(e,t,a);break;case 21:$t(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,$t(e,t,a),He=l;break;default:$t(e,t,a)}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_l(e)}catch(a){he(t,t.return,a)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(a){he(t,t.return,a)}}function lp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tf),t;default:throw Error(c(435,e.tag))}}function Ni(e,t){var a=lp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=dp.bind(null,e,l);l.then(n,n)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(ja(s.type)){ze=s.stateNode,Pe=!1;break e}break;case 5:ze=s.stateNode,Pe=!1;break e;case 3:case 4:ze=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(ze===null)throw Error(c(160));Nf(i,u,n),ze=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Of(t,e),t=t.sibling}var Ct=null;function Of(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),l&4&&(ga(3,e,e.return),hn(3,e),ga(5,e,e.return));break;case 1:et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),l&64&&Wt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ct;if(et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Yl]||i[qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,a),i[qe]=e,ke(i),l=i;break e;case"link":var u=Od("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Od("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[qe]=e,ke(i),l=i}e.stateNode=l}else Bd(n,e.type,e.stateNode);else e.stateNode=Md(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Bd(n,e.type,e.stateNode):Md(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&kr(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),a!==null&&l&4&&kr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),e.flags&32){n=e.stateNode;try{ll(n,"")}catch(Y){he(e,e.return,Y)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,kr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Gr=!0);break;case 6:if(et(t,e),tt(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Y){he(e,e.return,Y)}}break;case 3:if(Zi=null,n=Ct,Ct=Xi(t.containerInfo),et(t,e),Ct=n,tt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(t.containerInfo)}catch(Y){he(e,e.return,Y)}Gr&&(Gr=!1,Bf(e));break;case 4:l=Ct,Ct=Xi(e.stateNode.containerInfo),et(t,e),tt(e),Ct=l;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ni(e,l)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mi=nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ni(e,l)));break;case 22:n=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,z=Wt,N=He;if(Wt=z||n,He=N||m,et(t,e),He=N,Wt=z,tt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||m||Wt||He||Ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(i=m.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=m.stateNode;var B=m.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null;s.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(Y){he(m,m.return,Y)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(Y){he(m,m.return,Y)}}}else if(t.tag===18){if(a===null){m=t;try{var T=m.stateNode;n?Ed(T,!0):Ed(m.stateNode,!1)}catch(Y){he(m,m.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ni(e,a))));break;case 19:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ni(e,l)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(zf(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=Yr(e);Ci(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(ll(u,""),a.flags&=-33);var s=Yr(e);Ci(e,s,u);break;case 3:case 4:var m=a.stateNode.containerInfo,z=Yr(e);qr(e,z,m);break;default:throw Error(c(161))}}catch(N){he(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Af(e,t.alternate,t),t=t.sibling}function Ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Ka(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ef(t,t.return,a),Ka(t);break;case 27:jn(t.stateNode);case 26:case 5:Dt(t,t.return),Ka(t);break;case 22:t.memoizedState===null&&Ka(t);break;case 30:Ka(t);break;default:Ka(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(n,i,a),hn(4,i);break;case 1:if(Pt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){he(l,l.return,z)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)cs(m[n],s)}catch(z){he(l,l.return,z)}}a&&u&64&&Sf(i),mn(i,i.return);break;case 27:wf(i);case 26:case 5:Pt(n,i,a),a&&l===null&&u&4&&jf(i),mn(i,i.return);break;case 12:Pt(n,i,a);break;case 31:Pt(n,i,a),a&&u&4&&Rf(n,i);break;case 13:Pt(n,i,a),a&&u&4&&Mf(n,i);break;case 22:i.memoizedState===null&&Pt(n,i,a),mn(i,i.return);break;case 30:break;default:Pt(n,i,a)}t=t.sibling}}function Xr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Pl(a))}function Qr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pl(e))}function Nt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_f(e,t,a,l),t=t.sibling}function _f(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Nt(e,t,a,l),n&2048&&hn(9,t);break;case 1:Nt(e,t,a,l);break;case 3:Nt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pl(e)));break;case 12:if(n&2048){Nt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){he(t,t.return,m)}}else Nt(e,t,a,l);break;case 31:Nt(e,t,a,l);break;case 13:Nt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Nt(e,t,a,l):pn(e,t):i._visibility&2?Nt(e,t,a,l):(i._visibility|=2,jl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Xr(u,t);break;case 24:Nt(e,t,a,l),n&2048&&Qr(t.alternate,t);break;default:Nt(e,t,a,l)}}function jl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=a,m=l,z=u.flags;switch(u.tag){case 0:case 11:case 15:jl(i,u,s,m,n),hn(8,u);break;case 23:break;case 22:var N=u.stateNode;u.memoizedState!==null?N._visibility&2?jl(i,u,s,m,n):pn(i,u):(N._visibility|=2,jl(i,u,s,m,n)),n&&z&2048&&Xr(u.alternate,u);break;case 24:jl(i,u,s,m,n),n&&z&2048&&Qr(u.alternate,u);break;default:jl(i,u,s,m,n)}t=t.sibling}}function pn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:pn(a,l),n&2048&&Xr(l.alternate,l);break;case 24:pn(a,l),n&2048&&Qr(l.alternate,l);break;default:pn(a,l)}t=t.sibling}}var gn=8192;function zl(e,t,a){if(e.subtreeFlags&gn)for(e=e.child;e!==null;)Df(e,t,a),e=e.sibling}function Df(e,t,a){switch(e.tag){case 26:zl(e,t,a),e.flags&gn&&e.memoizedState!==null&&Xp(a,Ct,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,a);break;case 3:case 4:var l=Ct;Ct=Xi(e.stateNode.containerInfo),zl(e,t,a),Ct=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=gn,gn=16777216,zl(e,t,a),gn=l):zl(e,t,a));break;default:zl(e,t,a)}}function Uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function vn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Lf(l,e)}Uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hf(e),e=e.sibling}function Hf(e){switch(e.tag){case 0:case 11:case 15:vn(e),e.flags&2048&&ga(9,e,e.return);break;case 3:vn(e);break;case 12:vn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ri(e)):vn(e);break;default:vn(e)}}function Ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Lf(l,e)}Uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),Ri(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ri(t));break;default:Ri(t)}e=e.sibling}}function Lf(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Pl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ye=l;else e:for(a=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(Cf(l),l===a){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var np={getCacheForType:function(e){var t=Xe(_e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Xe(_e).controller.signal}},ip=typeof WeakMap=="function"?WeakMap:Map,se=0,Se=null,le=null,ie=0,de=0,ft=null,va=!1,wl=!1,Zr=!1,ea=0,Ce=0,ya=0,Ja=0,Vr=0,dt=0,Tl=0,yn=null,at=null,Kr=!1,Mi=0,kf=0,Oi=1/0,Bi=null,xa=null,Le=0,ba=null,Al=null,ta=0,Jr=0,Fr=null,Yf=null,xn=0,Wr=null;function ht(){return(se&2)!==0&&ie!==0?ie&-ie:R.T!==null?ao():tc()}function qf(){if(dt===0)if((ie&536870912)===0||re){var e=qn;qn<<=1,(qn&3932160)===0&&(qn=262144),dt=e}else dt=536870912;return e=ct.current,e!==null&&(e.flags|=32),dt}function lt(e,t,a){(e===Se&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Cl(e,0),Sa(e,ie,dt,!1)),kl(e,a),((se&2)===0||e!==Se)&&(e===Se&&((se&2)===0&&(Ja|=a),Ce===4&&Sa(e,ie,dt,!1)),Ut(e))}function Gf(e,t,a){if((se&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ll(e,t),n=l?op(e,t):Ir(e,t,!0),i=l;do{if(n===0){wl&&!l&&Sa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!up(a)){n=Ir(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=yn;var m=s.current.memoizedState.isDehydrated;if(m&&(Cl(s,u).flags|=256),u=Ir(s,u,!1),u!==2){if(Zr&&!m){s.errorRecoveryDisabledLanes|=i,Ja|=i,n=4;break e}i=at,at=n,i!==null&&(at===null?at=i:at.push.apply(at,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Cl(e,0),Sa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Sa(l,t,dt,!va);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Mi+300-nt(),10<n)){if(Sa(l,t,dt,!va),Xn(l,0,!0)!==0)break e;ta=t,l.timeoutHandle=xd(Xf.bind(null,l,a,at,Bi,Kr,t,dt,Ja,Tl,va,i,"Throttled",-0,0),n);break e}Xf(l,a,at,Bi,Kr,t,dt,Ja,Tl,va,i,null,-0,0)}}break}while(!0);Ut(e)}function Xf(e,t,a,l,n,i,u,s,m,z,N,B,w,T){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},Df(t,i,B);var Y=(i&62914560)===i?Mi-nt():(i&4194048)===i?kf-nt():0;if(Y=Qp(B,Y),Y!==null){ta=i,e.cancelPendingCommit=Y($f.bind(null,e,t,i,a,l,n,u,s,m,N,B,null,w,T)),Sa(e,i,u,!z);return}}$f(e,t,i,a,l,n,u,s,m)}function up(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!rt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sa(e,t,a,l){t&=~Vr,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ut(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Io(e,a,t)}function _i(){return(se&6)===0?(bn(0),!1):!0}function $r(){if(le!==null){if(de===0)var e=le.return;else e=le,Qt=ka=null,hr(e),yl=null,tn=0,e=le;for(;e!==null;)bf(e.alternate,e),e=e.return;le=null}}function Cl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Tp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,$r(),Se=e,le=a=Gt(e.current,null),ie=t,de=0,ft=null,va=!1,wl=Ll(e,t),Zr=!1,Tl=dt=Vr=Ja=ya=Ce=0,at=yn=null,Kr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ut(l),i=1<<n;t|=e[n],l&=~i}return ea=t,ti(),a}function Qf(e,t){ee=null,R.H=sn,t===vl||t===ci?(t=is(),de=3):t===tr?(t=is(),de=4):de=t===Nr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,le===null&&(Ce=1,ji(e,xt(t,e.current)))}function Zf(){var e=ct.current;return e===null?!0:(ie&4194048)===ie?jt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===jt:!1}function Vf(){var e=R.H;return R.H=sn,e===null?sn:e}function Kf(){var e=R.A;return R.A=np,e}function Di(){Ce=4,va||(ie&4194048)!==ie&&ct.current!==null||(wl=!0),(ya&134217727)===0&&(Ja&134217727)===0||Se===null||Sa(Se,ie,dt,!1)}function Ir(e,t,a){var l=se;se|=2;var n=Vf(),i=Kf();(Se!==e||ie!==t)&&(Bi=null,Cl(e,t)),t=!1;var u=Ce;e:do try{if(de!==0&&le!==null){var s=le,m=ft;switch(de){case 8:$r(),u=6;break e;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var z=de;if(de=0,ft=null,Nl(e,s,m,z),a&&wl){u=0;break e}break;default:z=de,de=0,ft=null,Nl(e,s,m,z)}}rp(),u=Ce;break}catch(N){Qf(e,N)}while(!0);return t&&e.shellSuspendCounter++,Qt=ka=null,se=l,R.H=n,R.A=i,le===null&&(Se=null,ie=0,ti()),u}function rp(){for(;le!==null;)Jf(le)}function op(e,t){var a=se;se|=2;var l=Vf(),n=Kf();Se!==e||ie!==t?(Bi=null,Oi=nt()+500,Cl(e,t)):wl=Ll(e,t);e:do try{if(de!==0&&le!==null){t=le;var i=ft;t:switch(de){case 1:de=0,ft=null,Nl(e,t,i,1);break;case 2:case 9:if(ls(i)){de=0,ft=null,Ff(t);break}t=function(){de!==2&&de!==9||Se!==e||(de=7),Ut(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:ls(i)?(de=0,ft=null,Ff(t)):(de=0,ft=null,Nl(e,t,i,7));break;case 5:var u=null;switch(le.tag){case 26:u=le.memoizedState;case 5:case 27:var s=le;if(u?_d(u):s.stateNode.complete){de=0,ft=null;var m=s.sibling;if(m!==null)le=m;else{var z=s.return;z!==null?(le=z,Ui(z)):le=null}break t}}de=0,ft=null,Nl(e,t,i,5);break;case 6:de=0,ft=null,Nl(e,t,i,6);break;case 8:$r(),Ce=6;break e;default:throw Error(c(462))}}cp();break}catch(N){Qf(e,N)}while(!0);return Qt=ka=null,R.H=l,R.A=n,se=a,le!==null?0:(Se=null,ie=0,ti(),Ce)}function cp(){for(;le!==null&&!Oh();)Jf(le)}function Jf(e){var t=yf(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?Ui(e):le=t}function Ff(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=df(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=df(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:hr(t);default:bf(a,t),t=le=Vc(t,ea),t=yf(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?Ui(e):le=t}function Nl(e,t,a,l){Qt=ka=null,hr(t),yl=null,tn=0;var n=t.return;try{if($m(e,n,t,a,ie)){Ce=1,ji(e,xt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Ce=1,ji(e,xt(a,e.current)),le=null;return}t.flags&32768?(re||l===1?e=!0:wl||(ie&536870912)!==0?e=!1:(va=e=!0,(l===2||l===9||l===3||l===6)&&(l=ct.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wf(t,e)):Ui(t)}function Ui(e){var t=e;do{if((t.flags&32768)!==0){Wf(t,va);return}e=t.return;var a=ep(t.alternate,t,ea);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Ce===0&&(Ce=5)}function Wf(e,t){do{var a=tp(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Ce=6,le=null}function $f(e,t,a,l,n,i,u,s,m){e.cancelPendingCommit=null;do Hi();while(Le!==0);if((se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Yu,Gh(e,a,i,u,s,m),e===Se&&(le=Se=null,ie=0),Al=t,ba=e,ta=a,Jr=i,Fr=n,Yf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hp(kn,function(){return ad(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=L.p,L.p=2,u=se,se|=4;try{ap(e,t,a)}finally{se=u,L.p=n,R.T=l}}Le=1,If(),Pf(),ed()}}function If(){if(Le===1){Le=0;var e=ba,t=Al,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=L.p;L.p=2;var n=se;se|=4;try{Of(t,e);var i=so,u=Hc(e.containerInfo),s=i.focusedElem,m=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&Uc(s.ownerDocument.documentElement,s)){if(m!==null&&Du(s)){var z=m.start,N=m.end;if(N===void 0&&(N=z),"selectionStart"in s)s.selectionStart=z,s.selectionEnd=Math.min(N,s.value.length);else{var B=s.ownerDocument||document,w=B&&B.defaultView||window;if(w.getSelection){var T=w.getSelection(),Y=s.textContent.length,V=Math.min(m.start,Y),ve=m.end===void 0?V:Math.min(m.end,Y);!T.extend&&V>ve&&(u=ve,ve=V,V=u);var b=Dc(s,V),v=Dc(s,ve);if(b&&v&&(T.rangeCount!==1||T.anchorNode!==b.node||T.anchorOffset!==b.offset||T.focusNode!==v.node||T.focusOffset!==v.offset)){var j=B.createRange();j.setStart(b.node,b.offset),T.removeAllRanges(),V>ve?(T.addRange(j),T.extend(v.node,v.offset)):(j.setEnd(v.node,v.offset),T.addRange(j))}}}}for(B=[],T=s;T=T.parentNode;)T.nodeType===1&&B.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<B.length;s++){var O=B[s];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Fi=!!co,so=co=null}finally{se=n,L.p=l,R.T=a}}e.current=t,Le=2}}function Pf(){if(Le===2){Le=0;var e=ba,t=Al,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=L.p;L.p=2;var n=se;se|=4;try{Af(e,t.alternate,t)}finally{se=n,L.p=l,R.T=a}}Le=3}}function ed(){if(Le===4||Le===3){Le=0,Bh();var e=ba,t=Al,a=ta,l=Yf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,Al=ba=null,td(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(xa=null),gu(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=L.p,L.p=2,R.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{R.T=t,L.p=n}}(ta&3)!==0&&Hi(),Ut(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Wr?xn++:(xn=0,Wr=e):xn=0,bn(0)}}function td(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pl(t)))}function Hi(){return If(),Pf(),ed(),ad()}function ad(){if(Le!==5)return!1;var e=ba,t=Jr;Jr=0;var a=gu(ta),l=R.T,n=L.p;try{L.p=32>a?32:a,R.T=null,a=Fr,Fr=null;var i=ba,u=ta;if(Le=0,Al=ba=null,ta=0,(se&6)!==0)throw Error(c(331));var s=se;if(se|=4,Hf(i.current),_f(i,i.current,u,a),se=s,bn(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Hl,i)}catch{}return!0}finally{L.p=n,R.T=l,td(e,t)}}function ld(e,t,a){t=xt(a,t),t=Cr(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(kl(e,2),Ut(e))}function he(e,t,a){if(e.tag===3)ld(e,e,a);else for(;t!==null;){if(t.tag===3){ld(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xa===null||!xa.has(l))){e=xt(a,e),a=lf(2),l=ha(t,a,2),l!==null&&(nf(a,l,t,e),kl(l,2),Ut(l));break}}t=t.return}}function Pr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ip;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Zr=!0,n.add(a),e=sp.bind(null,e,t,a),t.then(e,e))}function sp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(ie&a)===a&&(Ce===4||Ce===3&&(ie&62914560)===ie&&300>nt()-Mi?(se&2)===0&&Cl(e,0):Vr|=a,Tl===ie&&(Tl=0)),Ut(e)}function nd(e,t){t===0&&(t=$o()),e=Ua(e,t),e!==null&&(kl(e,t),Ut(e))}function fp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),nd(e,a)}function dp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),nd(e,a)}function hp(e,t){return du(e,t)}var Li=null,Rl=null,eo=!1,ki=!1,to=!1,Ea=0;function Ut(e){e!==Rl&&e.next===null&&(Rl===null?Li=Rl=e:Rl=Rl.next=e),ki=!0,eo||(eo=!0,pp())}function bn(e,t){if(!to&&ki){to=!0;do for(var a=!1,l=Li;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-ut(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,od(l,i))}else i=ie,i=Xn(l,l===Se?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ll(l,i)||(a=!0,od(l,i));l=l.next}while(a);to=!1}}function mp(){id()}function id(){ki=eo=!1;var e=0;Ea!==0&&wp()&&(e=Ea);for(var t=nt(),a=null,l=Li;l!==null;){var n=l.next,i=ud(l,t);i===0?(l.next=null,a===null?Li=n:a.next=n,n===null&&(Rl=a)):(a=l,(e!==0||(i&3)!==0)&&(ki=!0)),l=n}Le!==0&&Le!==5||bn(e),Ea!==0&&(Ea=0)}function ud(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ut(i),s=1<<u,m=n[u];m===-1?((s&a)===0||(s&l)!==0)&&(n[u]=qh(s,t)):m<=t&&(e.expiredLanes|=s),i&=~s}if(t=Se,a=ie,a=Xn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&hu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ll(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&hu(l),gu(a)){case 2:case 8:a=Fo;break;case 32:a=kn;break;case 268435456:a=Wo;break;default:a=kn}return l=rd.bind(null,e),a=du(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&hu(l),e.callbackPriority=2,e.callbackNode=null,2}function rd(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hi()&&e.callbackNode!==a)return null;var l=ie;return l=Xn(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Gf(e,l,t),ud(e,nt()),e.callbackNode!=null&&e.callbackNode===a?rd.bind(null,e):null)}function od(e,t){if(Hi())return null;Gf(e,t,!0)}function pp(){Ap(function(){(se&6)!==0?du(Jo,mp):id()})}function ao(){if(Ea===0){var e=pl;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),Ea=e}return Ea}function cd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function sd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function gp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=cd((n[$e]||null).action),u=l.submitter;u&&(t=(t=u[$e]||null)?cd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new $n("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ea!==0){var m=u?sd(n,u):new FormData(n);Er(a,{pending:!0,data:m,method:n.method,action:i},null,m)}}else typeof i=="function"&&(s.preventDefault(),m=u?sd(n,u):new FormData(n),Er(a,{pending:!0,data:m,method:n.method,action:i},i,m))},currentTarget:n}]})}}for(var lo=0;lo<ku.length;lo++){var no=ku[lo],vp=no.toLowerCase(),yp=no[0].toUpperCase()+no.slice(1);At(vp,"on"+yp)}At(Yc,"onAnimationEnd"),At(qc,"onAnimationIteration"),At(Gc,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(_m,"onTransitionRun"),At(Dm,"onTransitionStart"),At(Um,"onTransitionCancel"),At(Xc,"onTransitionEnd"),tl("onMouseEnter",["mouseout","mouseover"]),tl("onMouseLeave",["mouseout","mouseover"]),tl("onPointerEnter",["pointerout","pointerover"]),tl("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));function fd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],m=s.instance,z=s.currentTarget;if(s=s.listener,m!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(N){ei(N)}n.currentTarget=null,i=m}else for(u=0;u<l.length;u++){if(s=l[u],m=s.instance,z=s.currentTarget,s=s.listener,m!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(N){ei(N)}n.currentTarget=null,i=m}}}}function ne(e,t){var a=t[vu];a===void 0&&(a=t[vu]=new Set);var l=e+"__bubble";a.has(l)||(dd(t,e,2,!1),a.add(l))}function io(e,t,a){var l=0;t&&(l|=4),dd(a,e,l,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function uo(e){if(!e[Yi]){e[Yi]=!0,nc.forEach(function(a){a!=="selectionchange"&&(xp.has(a)||io(a,!1,e),io(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,io("selectionchange",!1,t))}}function dd(e,t,a,l){switch(qd(t)){case 2:var n=Kp;break;case 8:n=Jp;break;default:n=Eo}a=n.bind(null,t,a,e),n=void 0,!Tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ro(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var m=u.tag;if((m===3||m===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Ia(s),u===null)return;if(m=u.tag,m===5||m===6||m===26||m===27){l=i=u;continue e}s=s.parentNode}}l=l.return}gc(function(){var z=i,N=zu(a),B=[];e:{var w=Qc.get(e);if(w!==void 0){var T=$n,Y=e;switch(e){case"keypress":if(Fn(a)===0)break e;case"keydown":case"keyup":T=dm;break;case"focusin":Y="focus",T=Ru;break;case"focusout":Y="blur",T=Ru;break;case"beforeblur":case"afterblur":T=Ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=pm;break;case Yc:case qc:case Gc:T=lm;break;case Xc:T=vm;break;case"scroll":case"scrollend":T=Ih;break;case"wheel":T=xm;break;case"copy":case"cut":case"paste":T=im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Sc;break;case"toggle":case"beforetoggle":T=Sm}var V=(t&4)!==0,ve=!V&&(e==="scroll"||e==="scrollend"),b=V?w!==null?w+"Capture":null:w;V=[];for(var v=z,j;v!==null;){var O=v;if(j=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||j===null||b===null||(O=Gl(v,b),O!=null&&V.push(En(v,O,j))),ve)break;v=v.return}0<V.length&&(w=new T(w,Y,null,a,N),B.push({event:w,listeners:V}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",w&&a!==ju&&(Y=a.relatedTarget||a.fromElement)&&(Ia(Y)||Y[$a]))break e;if((T||w)&&(w=N.window===N?N:(w=N.ownerDocument)?w.defaultView||w.parentWindow:window,T?(Y=a.relatedTarget||a.toElement,T=z,Y=Y?Ia(Y):null,Y!==null&&(ve=p(Y),V=Y.tag,Y!==ve||V!==5&&V!==27&&V!==6)&&(Y=null)):(T=null,Y=z),T!==Y)){if(V=xc,O="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(V=Sc,O="onPointerLeave",b="onPointerEnter",v="pointer"),ve=T==null?w:ql(T),j=Y==null?w:ql(Y),w=new V(O,v+"leave",T,a,N),w.target=ve,w.relatedTarget=j,O=null,Ia(N)===z&&(V=new V(b,v+"enter",Y,a,N),V.target=j,V.relatedTarget=ve,O=V),ve=O,T&&Y)t:{for(V=bp,b=T,v=Y,j=0,O=b;O;O=V(O))j++;O=0;for(var Q=v;Q;Q=V(Q))O++;for(;0<j-O;)b=V(b),j--;for(;0<O-j;)v=V(v),O--;for(;j--;){if(b===v||v!==null&&b===v.alternate){V=b;break t}b=V(b),v=V(v)}V=null}else V=null;T!==null&&hd(B,w,T,V,!1),Y!==null&&ve!==null&&hd(B,ve,Y,V,!0)}}e:{if(w=z?ql(z):window,T=w.nodeName&&w.nodeName.toLowerCase(),T==="select"||T==="input"&&w.type==="file")var oe=Nc;else if(Ac(w))if(Rc)oe=Mm;else{oe=Nm;var X=Cm}else T=w.nodeName,!T||T.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?z&&Eu(z.elementType)&&(oe=Nc):oe=Rm;if(oe&&(oe=oe(e,z))){Cc(B,oe,a,N);break e}X&&X(e,w,z),e==="focusout"&&z&&w.type==="number"&&z.memoizedProps.value!=null&&Su(w,"number",w.value)}switch(X=z?ql(z):window,e){case"focusin":(Ac(X)||X.contentEditable==="true")&&(rl=X,Uu=z,Wl=null);break;case"focusout":Wl=Uu=rl=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,Lc(B,a,N);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":Lc(B,a,N)}var te;if(Ou)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else ul?wc(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Ec&&a.locale!=="ko"&&(ul||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ul&&(te=vc()):(ua=N,Au="value"in ua?ua.value:ua.textContent,ul=!0)),X=qi(z,ue),0<X.length&&(ue=new bc(ue,e,null,a,N),B.push({event:ue,listeners:X}),te?ue.data=te:(te=Tc(a),te!==null&&(ue.data=te)))),(te=jm?zm(e,a):wm(e,a))&&(ue=qi(z,"onBeforeInput"),0<ue.length&&(X=new bc("onBeforeInput","beforeinput",null,a,N),B.push({event:X,listeners:ue}),X.data=te)),gp(B,e,z,a,N)}fd(B,t)})}function En(e,t,a){return{instance:e,listener:t,currentTarget:a}}function qi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Gl(e,a),n!=null&&l.unshift(En(e,n,i)),n=Gl(e,t),n!=null&&l.push(En(e,n,i))),e.tag===3)return l;e=e.return}return[]}function bp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,m=s.alternate,z=s.stateNode;if(s=s.tag,m!==null&&m===l)break;s!==5&&s!==26&&s!==27||z===null||(m=z,n?(z=Gl(a,i),z!=null&&u.unshift(En(a,z,m))):n||(z=Gl(a,i),z!=null&&u.push(En(a,z,m)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Sp=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function md(e){return(typeof e=="string"?e:""+e).replace(Sp,`
`).replace(Ep,"")}function pd(e,t){return t=md(t),md(e)===t}function ge(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ll(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ll(e,""+l);break;case"className":Zn(e,"class",l);break;case"tabIndex":Zn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,l);break;case"style":mc(e,l,i);break;case"data":if(t!=="object"){Zn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ge(e,t,"name",n.name,n,null),ge(e,t,"formEncType",n.formEncType,n,null),ge(e,t,"formMethod",n.formMethod,n,null),ge(e,t,"formTarget",n.formTarget,n,null)):(ge(e,t,"encType",n.encType,n,null),ge(e,t,"method",n.method,n,null),ge(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Qn(e,"popover",l);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wh.get(a)||a,Qn(e,a,l))}}function oo(e,t,a,l,n,i){switch(a){case"style":mc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ll(e,l):(typeof l=="number"||typeof l=="bigint")&&ll(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ic.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[$e]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Qn(e,a,l)}}}function Ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ge(e,t,i,u,a,null)}}n&&ge(e,t,"srcSet",a.srcSet,a,null),l&&ge(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var s=i=u=n=null,m=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":n=N;break;case"type":u=N;break;case"checked":m=N;break;case"defaultChecked":z=N;break;case"value":i=N;break;case"defaultValue":s=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:ge(e,t,l,N,a,null)}}sc(e,i,s,m,z,u,n,!1);return;case"select":ne("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:ge(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?al(e,!!l,t,!1):a!=null&&al(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:ge(e,t,u,s,a,null)}dc(e,l,n,i);return;case"option":for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null)&&(m==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ge(e,t,m,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<Sn.length;l++)ne(Sn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ge(e,t,z,l,a,null)}return;default:if(Eu(t)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&oo(e,t,N,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&ge(e,t,s,l,a,null))}function jp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,m=null,z=null,N=null;for(T in a){var B=a[T];if(a.hasOwnProperty(T)&&B!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":m=B;default:l.hasOwnProperty(T)||ge(e,t,T,null,l,B)}}for(var w in l){var T=l[w];if(B=a[w],l.hasOwnProperty(w)&&(T!=null||B!=null))switch(w){case"type":i=T;break;case"name":n=T;break;case"checked":z=T;break;case"defaultChecked":N=T;break;case"value":u=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:T!==B&&ge(e,t,w,T,l,B)}}bu(e,u,s,m,z,N,i,n);return;case"select":T=u=s=w=null;for(i in a)if(m=a[i],a.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":T=m;default:l.hasOwnProperty(i)||ge(e,t,i,null,l,m)}for(n in l)if(i=l[n],m=a[n],l.hasOwnProperty(n)&&(i!=null||m!=null))switch(n){case"value":w=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==m&&ge(e,t,n,i,l,m)}t=s,a=u,l=T,w!=null?al(e,!!a,w,!1):!!l!=!!a&&(t!=null?al(e,!!a,t,!0):al(e,!!a,a?[]:"",!1));return;case"textarea":T=w=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ge(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":w=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&ge(e,t,u,n,l,i)}fc(e,w,T);return;case"option":for(var Y in a)w=a[Y],a.hasOwnProperty(Y)&&w!=null&&!l.hasOwnProperty(Y)&&(Y==="selected"?e.selected=!1:ge(e,t,Y,null,l,w));for(m in l)w=l[m],T=a[m],l.hasOwnProperty(m)&&w!==T&&(w!=null||T!=null)&&(m==="selected"?e.selected=w&&typeof w!="function"&&typeof w!="symbol":ge(e,t,m,w,l,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in a)w=a[V],a.hasOwnProperty(V)&&w!=null&&!l.hasOwnProperty(V)&&ge(e,t,V,null,l,w);for(z in l)if(w=l[z],T=a[z],l.hasOwnProperty(z)&&w!==T&&(w!=null||T!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:ge(e,t,z,w,l,T)}return;default:if(Eu(t)){for(var ve in a)w=a[ve],a.hasOwnProperty(ve)&&w!==void 0&&!l.hasOwnProperty(ve)&&oo(e,t,ve,void 0,l,w);for(N in l)w=l[N],T=a[N],!l.hasOwnProperty(N)||w===T||w===void 0&&T===void 0||oo(e,t,N,w,l,T);return}}for(var b in a)w=a[b],a.hasOwnProperty(b)&&w!=null&&!l.hasOwnProperty(b)&&ge(e,t,b,null,l,w);for(B in l)w=l[B],T=a[B],!l.hasOwnProperty(B)||w===T||w==null&&T==null||ge(e,t,B,w,l,T)}function gd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&gd(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var m=a[l],z=m.startTime;if(z>s)break;var N=m.transferSize,B=m.initiatorType;N&&gd(B)&&(m=m.responseEnd,u+=N*(m<s?1:(s-z)/(m-z)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var co=null,so=null;function Gi(e){return e.nodeType===9?e:e.ownerDocument}function vd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ho=null;function wp(){var e=window.event;return e&&e.type==="popstate"?e===ho?!1:(ho=e,!0):(ho=null,!1)}var xd=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,bd=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof bd<"u"?function(e){return bd.resolve(null).then(e).catch(Cp)}:xd;function Cp(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function Sd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),_l(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")jn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,jn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Yl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&jn(e.ownerDocument.body);a=n}while(a);_l(t)}function Ed(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function mo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mo(a),yu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Np(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Yl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Rp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function jd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function po(e){return e.data==="$?"||e.data==="$~"}function go(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vo=null;function zd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Td(e,t,a){switch(t=Gi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function jn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yu(e)}var wt=new Map,Ad=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=L.d;L.d={f:Op,r:Bp,D:_p,C:Dp,L:Up,m:Hp,X:kp,S:Lp,M:Yp};function Op(){var e=aa.f(),t=_i();return e||t}function Bp(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Xs(t):aa.r(e)}var Ml=typeof document>"u"?null:document;function Cd(e,t,a){var l=Ml;if(l&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Ad.has(n)||(Ad.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ze(t,"link",e),ke(t),l.head.appendChild(t)))}}function _p(e){aa.D(e),Cd("dns-prefetch",e,null)}function Dp(e,t){aa.C(e,t),Cd("preconnect",e,t)}function Up(e,t,a){aa.L(e,t,a);var l=Ml;if(l&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+vt(a.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var i=n;switch(t){case"style":i=Ol(e);break;case"script":i=Bl(e)}wt.has(i)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),wt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(zn(i))||t==="script"&&l.querySelector(wn(i))||(t=l.createElement("link"),Ze(t,"link",e),ke(t),l.head.appendChild(t)))}}function Hp(e,t){aa.m(e,t);var a=Ml;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(e)}if(!wt.has(i)&&(e=x({rel:"modulepreload",href:e},t),wt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wn(i)))return}l=a.createElement("link"),Ze(l,"link",e),ke(l),a.head.appendChild(l)}}}function Lp(e,t,a){aa.S(e,t,a);var l=Ml;if(l&&e){var n=el(l).hoistableStyles,i=Ol(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(zn(i)))s.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=wt.get(i))&&yo(e,a);var m=u=l.createElement("link");ke(m),Ze(m,"link",e),m._p=new Promise(function(z,N){m.onload=z,m.onerror=N}),m.addEventListener("load",function(){s.loading|=1}),m.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Qi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function kp(e,t){aa.X(e,t);var a=Ml;if(a&&e){var l=el(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(wn(n)),i||(e=x({src:e,async:!0},t),(t=wt.get(n))&&xo(e,t),i=a.createElement("script"),ke(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Yp(e,t){aa.M(e,t);var a=Ml;if(a&&e){var l=el(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(wn(n)),i||(e=x({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&xo(e,t),i=a.createElement("script"),ke(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Nd(e,t,a,l){var n=(n=ae.current)?Xi(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ol(a.href),a=el(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ol(a.href);var i=el(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(zn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),wt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wt.set(e,a),i||qp(n,e,a,u.state))),t&&l===null)throw Error(c(528,""));return u}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bl(a),a=el(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ol(e){return'href="'+vt(e)+'"'}function zn(e){return'link[rel="stylesheet"]['+e+"]"}function Rd(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function qp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ze(t,"link",a),ke(t),e.head.appendChild(t))}function Bl(e){return'[src="'+vt(e)+'"]'}function wn(e){return"script[async]"+e}function Md(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return t.instance=l,ke(l),l;var n=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ke(l),Ze(l,"style",n),Qi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ol(a.href);var i=e.querySelector(zn(n));if(i)return t.state.loading|=4,t.instance=i,ke(i),i;l=Rd(a),(n=wt.get(n))&&yo(l,n),i=(e.ownerDocument||e).createElement("link"),ke(i);var u=i;return u._p=new Promise(function(s,m){u.onload=s,u.onerror=m}),Ze(i,"link",l),t.state.loading|=4,Qi(i,a.precedence,e),t.instance=i;case"script":return i=Bl(a.src),(n=e.querySelector(wn(i)))?(t.instance=n,ke(n),n):(l=a,(n=wt.get(i))&&(l=x({},a),xo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),ke(n),Ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Qi(l,a.precedence,e));return t.instance}function Qi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zi=null;function Od(e,t,a){if(Zi===null){var l=new Map,n=Zi=new Map;n.set(a,l)}else n=Zi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Yl]||i[qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function Bd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Gp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _d(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ol(l.href),i=t.querySelector(zn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,ke(i);return}i=t.ownerDocument||t,l=Rd(l),(n=wt.get(n))&&yo(l,n),i=i.createElement("link"),ke(i);var u=i;u._p=new Promise(function(s,m){u.onload=s,u.onerror=m}),Ze(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var bo=0;function Qp(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&bo===0&&(bo=62500*zp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>bo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Vi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Zp,e),Ki=null,Vi.call(e))}function Zp(e,t){if(!(t.state.loading&4)){var a=Ki.get(e);if(a)var l=a.get(null);else{a=new Map,Ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Vi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Tn={$$typeof:J,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Vp(e,t,a,l,n,i,u,s,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.hiddenUpdates=mu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Dd(e,t,a,l,n,i,u,s,m,z,N,B){return e=new Vp(e,t,a,u,m,z,N,B,s),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),e.current=i,i.stateNode=e,t=Iu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ar(i),e}function Ud(e){return e?(e=sl,e):sl}function Hd(e,t,a,l,n,i){n=Ud(n),l.context===null?l.context=n:l.pendingContext=n,l=da(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ha(e,l,t),a!==null&&(lt(a,e,t),ln(a,e,t))}function Ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function So(e,t){Ld(e,t),(e=e.alternate)&&Ld(e,t)}function kd(e){if(e.tag===13||e.tag===31){var t=Ua(e,67108864);t!==null&&lt(t,e,67108864),So(e,67108864)}}function Yd(e){if(e.tag===13||e.tag===31){var t=ht();t=pu(t);var a=Ua(e,t);a!==null&&lt(a,e,t),So(e,t)}}var Fi=!0;function Kp(e,t,a,l){var n=R.T;R.T=null;var i=L.p;try{L.p=2,Eo(e,t,a,l)}finally{L.p=i,R.T=n}}function Jp(e,t,a,l){var n=R.T;R.T=null;var i=L.p;try{L.p=8,Eo(e,t,a,l)}finally{L.p=i,R.T=n}}function Eo(e,t,a,l){if(Fi){var n=jo(l);if(n===null)ro(e,t,l,Wi,a),Gd(e,l);else if(Wp(n,e,t,a,l))l.stopPropagation();else if(Gd(e,l),t&4&&-1<Fp.indexOf(e)){for(;n!==null;){var i=Pa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ma(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var m=1<<31-ut(u);s.entanglements[1]|=m,u&=~m}Ut(i),(se&6)===0&&(Oi=nt()+500,bn(0))}}break;case 31:case 13:s=Ua(i,2),s!==null&&lt(s,i,2),_i(),So(i,2)}if(i=jo(l),i===null&&ro(e,t,l,Wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ro(e,t,l,null,a)}}function jo(e){return e=zu(e),zo(e)}var Wi=null;function zo(e){if(Wi=null,e=Ia(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=S(t),e!==null)return e;e=null}else if(a===31){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function qd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_h()){case Jo:return 2;case Fo:return 8;case kn:case Dh:return 32;case Wo:return 268435456;default:return 32}default:return 32}}var wo=!1,za=null,wa=null,Ta=null,An=new Map,Cn=new Map,Aa=[],Fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function Nn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Pa(t),t!==null&&kd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Wp(e,t,a,l,n){switch(t){case"focusin":return za=Nn(za,e,t,a,l,n),!0;case"dragenter":return wa=Nn(wa,e,t,a,l,n),!0;case"mouseover":return Ta=Nn(Ta,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return An.set(i,Nn(An.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,Nn(Cn.get(i)||null,e,t,a,l,n)),!0}return!1}function Xd(e){var t=Ia(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=S(a),t!==null){e.blockedOn=t,ac(e.priority,function(){Yd(a)});return}}else if(t===31){if(t=A(a),t!==null){e.blockedOn=t,ac(e.priority,function(){Yd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=jo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ju=l,a.target.dispatchEvent(l),ju=null}else return t=Pa(a),t!==null&&kd(t),e.blockedOn=a,!1;t.shift()}return!0}function Qd(e,t,a){$i(e)&&a.delete(t)}function $p(){wo=!1,za!==null&&$i(za)&&(za=null),wa!==null&&$i(wa)&&(wa=null),Ta!==null&&$i(Ta)&&(Ta=null),An.forEach(Qd),Cn.forEach(Qd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,wo||(wo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$p)))}var Pi=null;function Zd(e){Pi!==e&&(Pi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(zo(l||a)===null)continue;break}var i=Pa(a);i!==null&&(e.splice(t,3),t-=3,Er(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function _l(e){function t(m){return Ii(m,e)}za!==null&&Ii(za,e),wa!==null&&Ii(wa,e),Ta!==null&&Ii(Ta,e),An.forEach(t),Cn.forEach(t);for(var a=0;a<Aa.length;a++){var l=Aa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Xd(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[$e]||null;if(typeof i=="function")u||Zd(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[$e]||null)s=u.formAction;else if(zo(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Zd(a)}}}function Vd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function To(e){this._internalRoot=e}eu.prototype.render=To.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=ht();Hd(a,l,e,t,null,null)},eu.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hd(e.current,2,null,e,null,null),_i(),t[$a]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var t=tc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Aa.length&&t!==0&&t<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&Xd(e)}};var Kd=f.version;if(Kd!=="19.2.4")throw Error(c(527,Kd,"19.2.4"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var Ip={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Hl=tu.inject(Ip),it=tu}catch{}}return Mn.createRoot=function(e,t){if(!h(e))throw Error(c(299));var a=!1,l="",n=Ps,i=ef,u=tf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Dd(e,1,!1,null,null,a,l,null,n,i,u,Vd),e[$a]=t.current,uo(e),new To(t)},Mn.hydrateRoot=function(e,t,a){if(!h(e))throw Error(c(299));var l=!1,n="",i=Ps,u=ef,s=tf,m=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(m=a.formState)),t=Dd(e,1,!0,t,a??null,l,n,m,i,u,s,Vd),t.context=Ud(null),a=t.current,l=ht(),l=pu(l),n=da(l),n.callback=null,ha(a,n,l),a=l,t.current.lanes=a,kl(t,a),Ut(t),e[$a]=t.current,uo(e),new eu(t)},Mn.version="19.2.4",Mn}var lh;function o0(){if(lh)return No.exports;lh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),No.exports=r0(),No.exports}var c0=o0();var nh="popstate";function ih(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function s0(r={}){function f(h,p){let{pathname:S="/",search:A="",hash:E=""}=Fa(h.location.hash.substring(1));return!S.startsWith("/")&&!S.startsWith(".")&&(S="/"+S),Uo("",{pathname:S,search:A,hash:E},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(h,p){let S=h.document.querySelector("base"),A="";if(S&&S.getAttribute("href")){let E=h.location.href,g=E.indexOf("#");A=g===-1?E:E.slice(0,g)}return A+"#"+(typeof p=="string"?p:_n(p))}function c(h,p){Rt(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return d0(f,d,c,r)}function Te(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function Rt(r,f){if(!r){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function f0(){return Math.random().toString(36).substring(2,10)}function uh(r,f){return{usr:r.state,key:r.key,idx:f,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Uo(r,f,d=null,c,h){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof f=="string"?Fa(f):f,state:d,key:f&&f.key||c||f0(),unstable_mask:h}}function _n({pathname:r="/",search:f="",hash:d=""}){return f&&f!=="?"&&(r+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Fa(r){let f={};if(r){let d=r.indexOf("#");d>=0&&(f.hash=r.substring(d),r=r.substring(0,d));let c=r.indexOf("?");c>=0&&(f.search=r.substring(c),r=r.substring(0,c)),r&&(f.pathname=r)}return f}function d0(r,f,d,c={}){let{window:h=document.defaultView,v5Compat:p=!1}=c,S=h.history,A="POP",E=null,g=M();g==null&&(g=0,S.replaceState({...S.state,idx:g},""));function M(){return(S.state||{idx:null}).idx}function x(){A="POP";let H=M(),K=H==null?null:H-g;g=H,E&&E({action:A,location:q.location,delta:K})}function _(H,K){A="PUSH";let I=ih(H)?H:Uo(q.location,H,K);d&&d(I,H),g=M()+1;let J=uh(I,g),ye=q.createHref(I.unstable_mask||I);try{S.pushState(J,"",ye)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;h.location.assign(ye)}p&&E&&E({action:A,location:q.location,delta:1})}function U(H,K){A="REPLACE";let I=ih(H)?H:Uo(q.location,H,K);d&&d(I,H),g=M();let J=uh(I,g),ye=q.createHref(I.unstable_mask||I);S.replaceState(J,"",ye),p&&E&&E({action:A,location:q.location,delta:0})}function Z(H){return h0(H)}let q={get action(){return A},get location(){return r(h,S)},listen(H){if(E)throw new Error("A history only accepts one active listener");return h.addEventListener(nh,x),E=H,()=>{h.removeEventListener(nh,x),E=null}},createHref(H){return f(h,H)},createURL:Z,encodeLocation(H){let K=Z(H);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:_,replace:U,go(H){return S.go(H)}};return q}function h0(r,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Te(d,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:_n(r);return c=c.replace(/ $/,"%20"),!f&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function dh(r,f,d="/"){return m0(r,f,d,!1)}function m0(r,f,d,c){let h=typeof f=="string"?Fa(f):f,p=la(h.pathname||"/",d);if(p==null)return null;let S=hh(r);p0(S);let A=null;for(let E=0;A==null&&E<S.length;++E){let g=T0(p);A=z0(S[E],g,c)}return A}function hh(r,f=[],d=[],c="",h=!1){let p=(S,A,E=h,g)=>{let M={relativePath:g===void 0?S.path||"":g,caseSensitive:S.caseSensitive===!0,childrenIndex:A,route:S};if(M.relativePath.startsWith("/")){if(!M.relativePath.startsWith(c)&&E)return;Te(M.relativePath.startsWith(c),`Absolute route path "${M.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),M.relativePath=M.relativePath.slice(c.length)}let x=Ht([c,M.relativePath]),_=d.concat(M);S.children&&S.children.length>0&&(Te(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),hh(S.children,f,_,x,E)),!(S.path==null&&!S.index)&&f.push({path:x,score:E0(x,S.index),routesMeta:_})};return r.forEach((S,A)=>{if(S.path===""||!S.path?.includes("?"))p(S,A);else for(let E of mh(S.path))p(S,A,!0,E)}),f}function mh(r){let f=r.split("/");if(f.length===0)return[];let[d,...c]=f,h=d.endsWith("?"),p=d.replace(/\?$/,"");if(c.length===0)return h?[p,""]:[p];let S=mh(c.join("/")),A=[];return A.push(...S.map(E=>E===""?p:[p,E].join("/"))),h&&A.push(...S),A.map(E=>r.startsWith("/")&&E===""?"/":E)}function p0(r){r.sort((f,d)=>f.score!==d.score?d.score-f.score:j0(f.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var g0=/^:[\w-]+$/,v0=3,y0=2,x0=1,b0=10,S0=-2,rh=r=>r==="*";function E0(r,f){let d=r.split("/"),c=d.length;return d.some(rh)&&(c+=S0),f&&(c+=y0),d.filter(h=>!rh(h)).reduce((h,p)=>h+(g0.test(p)?v0:p===""?x0:b0),c)}function j0(r,f){return r.length===f.length&&r.slice(0,-1).every((c,h)=>c===f[h])?r[r.length-1]-f[f.length-1]:0}function z0(r,f,d=!1){let{routesMeta:c}=r,h={},p="/",S=[];for(let A=0;A<c.length;++A){let E=c[A],g=A===c.length-1,M=p==="/"?f:f.slice(p.length)||"/",x=iu({path:E.relativePath,caseSensitive:E.caseSensitive,end:g},M),_=E.route;if(!x&&g&&d&&!c[c.length-1].route.index&&(x=iu({path:E.relativePath,caseSensitive:E.caseSensitive,end:!1},M)),!x)return null;Object.assign(h,x.params),S.push({params:h,pathname:Ht([p,x.pathname]),pathnameBase:R0(Ht([p,x.pathnameBase])),route:_}),x.pathnameBase!=="/"&&(p=Ht([p,x.pathnameBase]))}return S}function iu(r,f){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,c]=w0(r.path,r.caseSensitive,r.end),h=f.match(d);if(!h)return null;let p=h[0],S=p.replace(/(.)\/+$/,"$1"),A=h.slice(1);return{params:c.reduce((g,{paramName:M,isOptional:x},_)=>{if(M==="*"){let Z=A[_]||"";S=p.slice(0,p.length-Z.length).replace(/(.)\/+$/,"$1")}const U=A[_];return x&&!U?g[M]=void 0:g[M]=(U||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:S,pattern:r}}function w0(r,f=!1,d=!0){Rt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],h="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,A,E,g,M)=>{if(c.push({paramName:A,isOptional:E!=null}),E){let x=M.charAt(g+S.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),h+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":r!==""&&r!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,f?void 0:"i"),c]}function T0(r){try{return r.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Rt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),r}}function la(r,f){if(f==="/")return r;if(!r.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,c=r.charAt(d);return c&&c!=="/"?null:r.slice(d)||"/"}var A0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function C0(r,f="/"){let{pathname:d,search:c="",hash:h=""}=typeof r=="string"?Fa(r):r,p;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?p=oh(d.substring(1),"/"):p=oh(d,f)):p=f,{pathname:p,search:M0(c),hash:O0(h)}}function oh(r,f){let d=f.replace(/\/+$/,"").split("/");return r.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function Bo(r,f,d,c){return`Cannot include a '${r}' character in a manually specified \`to.${f}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function N0(r){return r.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function ph(r){let f=N0(r);return f.map((d,c)=>c===f.length-1?d.pathname:d.pathnameBase)}function ko(r,f,d,c=!1){let h;typeof r=="string"?h=Fa(r):(h={...r},Te(!h.pathname||!h.pathname.includes("?"),Bo("?","pathname","search",h)),Te(!h.pathname||!h.pathname.includes("#"),Bo("#","pathname","hash",h)),Te(!h.search||!h.search.includes("#"),Bo("#","search","hash",h)));let p=r===""||h.pathname==="",S=p?"/":h.pathname,A;if(S==null)A=d;else{let x=f.length-1;if(!c&&S.startsWith("..")){let _=S.split("/");for(;_[0]==="..";)_.shift(),x-=1;h.pathname=_.join("/")}A=x>=0?f[x]:"/"}let E=C0(h,A),g=S&&S!=="/"&&S.endsWith("/"),M=(p||S===".")&&d.endsWith("/");return!E.pathname.endsWith("/")&&(g||M)&&(E.pathname+="/"),E}var Ht=r=>r.join("/").replace(/\/\/+/g,"/"),R0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),M0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,O0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,B0=class{constructor(r,f,d,c=!1){this.status=r,this.statusText=f||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function _0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function D0(r){return r.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function vh(r,f){let d=r;if(typeof d!="string"||!A0.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,h=!1;if(gh)try{let p=new URL(window.location.href),S=d.startsWith("//")?new URL(p.protocol+d):new URL(d),A=la(S.pathname,f);S.origin===p.origin&&A!=null?d=A+S.search+S.hash:h=!0}catch{Rt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:h,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yh=["POST","PUT","PATCH","DELETE"];new Set(yh);var U0=["GET",...yh];new Set(U0);var Dl=C.createContext(null);Dl.displayName="DataRouter";var uu=C.createContext(null);uu.displayName="DataRouterState";var H0=C.createContext(!1),xh=C.createContext({isTransitioning:!1});xh.displayName="ViewTransition";var L0=C.createContext(new Map);L0.displayName="Fetchers";var k0=C.createContext(null);k0.displayName="Await";var Tt=C.createContext(null);Tt.displayName="Navigation";var Dn=C.createContext(null);Dn.displayName="Location";var Lt=C.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var Yo=C.createContext(null);Yo.displayName="RouteError";var bh="REACT_ROUTER_ERROR",Y0="REDIRECT",q0="ROUTE_ERROR_RESPONSE";function G0(r){if(r.startsWith(`${bh}:${Y0}:{`))try{let f=JSON.parse(r.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function X0(r){if(r.startsWith(`${bh}:${q0}:{`))try{let f=JSON.parse(r.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new B0(f.status,f.statusText,f.data)}catch{}}function Q0(r,{relative:f}={}){Te(Un(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=C.useContext(Tt),{hash:h,pathname:p,search:S}=Hn(r,{relative:f}),A=p;return d!=="/"&&(A=p==="/"?d:Ht([d,p])),c.createHref({pathname:A,search:S,hash:h})}function Un(){return C.useContext(Dn)!=null}function Na(){return Te(Un(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Dn).location}var Sh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Eh(r){C.useContext(Tt).static||C.useLayoutEffect(r)}function Wa(){let{isDataRoute:r}=C.useContext(Lt);return r?ng():Z0()}function Z0(){Te(Un(),"useNavigate() may be used only in the context of a <Router> component.");let r=C.useContext(Dl),{basename:f,navigator:d}=C.useContext(Tt),{matches:c}=C.useContext(Lt),{pathname:h}=Na(),p=JSON.stringify(ph(c)),S=C.useRef(!1);return Eh(()=>{S.current=!0}),C.useCallback((E,g={})=>{if(Rt(S.current,Sh),!S.current)return;if(typeof E=="number"){d.go(E);return}let M=ko(E,JSON.parse(p),h,g.relative==="path");r==null&&f!=="/"&&(M.pathname=M.pathname==="/"?f:Ht([f,M.pathname])),(g.replace?d.replace:d.push)(M,g.state,g)},[f,d,p,h,r])}C.createContext(null);function V0(){let{matches:r}=C.useContext(Lt),f=r[r.length-1];return f?f.params:{}}function Hn(r,{relative:f}={}){let{matches:d}=C.useContext(Lt),{pathname:c}=Na(),h=JSON.stringify(ph(d));return C.useMemo(()=>ko(r,JSON.parse(h),c,f==="path"),[r,h,c,f])}function K0(r,f){return jh(r,f)}function jh(r,f,d){Te(Un(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=C.useContext(Tt),{matches:h}=C.useContext(Lt),p=h[h.length-1],S=p?p.params:{},A=p?p.pathname:"/",E=p?p.pathnameBase:"/",g=p&&p.route;{let H=g&&g.path||"";wh(A,!g||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${A}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let M=Na(),x;if(f){let H=typeof f=="string"?Fa(f):f;Te(E==="/"||H.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${H.pathname}" was given in the \`location\` prop.`),x=H}else x=M;let _=x.pathname||"/",U=_;if(E!=="/"){let H=E.replace(/^\//,"").split("/");U="/"+_.replace(/^\//,"").split("/").slice(H.length).join("/")}let Z=dh(r,{pathname:U});Rt(g||Z!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Rt(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=I0(Z&&Z.map(H=>Object.assign({},H,{params:Object.assign({},S,H.params),pathname:Ht([E,c.encodeLocation?c.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?E:Ht([E,c.encodeLocation?c.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),h,d);return f&&q?C.createElement(Dn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...x},navigationType:"POP"}},q):q}function J0(){let r=lg(),f=_0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},S=null;return console.error("Error handled by React Router default ErrorBoundary:",r),S=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:p},"ErrorBoundary")," or"," ",C.createElement("code",{style:p},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},f),d?C.createElement("pre",{style:h},d):null,S)}var F0=C.createElement(J0,null),zh=class extends C.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,f){return f.location!==r.location||f.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:f.error,location:f.location,revalidation:r.revalidation||f.revalidation}}componentDidCatch(r,f){this.props.onError?this.props.onError(r,f):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=X0(r.digest);d&&(r=d)}let f=r!==void 0?C.createElement(Lt.Provider,{value:this.props.routeContext},C.createElement(Yo.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?C.createElement(W0,{error:r},f):f}};zh.contextType=H0;var _o=new WeakMap;function W0({children:r,error:f}){let{basename:d}=C.useContext(Tt);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let c=G0(f.digest);if(c){let h=_o.get(f);if(h)throw h;let p=vh(c.location,d);if(gh&&!_o.get(f))if(p.isExternal||c.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const S=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw _o.set(f,S),S}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return r}function $0({routeContext:r,match:f,children:d}){let c=C.useContext(Dl);return c&&c.static&&c.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=f.route.id),C.createElement(Lt.Provider,{value:r},d)}function I0(r,f=[],d){let c=d?.state;if(r==null){if(!c)return null;if(c.errors)r=c.matches;else if(f.length===0&&!c.initialized&&c.matches.length>0)r=c.matches;else return null}let h=r,p=c?.errors;if(p!=null){let M=h.findIndex(x=>x.route.id&&p?.[x.route.id]!==void 0);Te(M>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,M+1))}let S=!1,A=-1;if(d&&c){S=c.renderFallback;for(let M=0;M<h.length;M++){let x=h[M];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(A=M),x.route.id){let{loaderData:_,errors:U}=c,Z=x.route.loader&&!_.hasOwnProperty(x.route.id)&&(!U||U[x.route.id]===void 0);if(x.route.lazy||Z){d.isStatic&&(S=!0),A>=0?h=h.slice(0,A+1):h=[h[0]];break}}}}let E=d?.onError,g=c&&E?(M,x)=>{E(M,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:D0(c.matches),errorInfo:x})}:void 0;return h.reduceRight((M,x,_)=>{let U,Z=!1,q=null,H=null;c&&(U=p&&x.route.id?p[x.route.id]:void 0,q=x.route.errorElement||F0,S&&(A<0&&_===0?(wh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Z=!0,H=null):A===_&&(Z=!0,H=x.route.hydrateFallbackElement||null)));let K=f.concat(h.slice(0,_+1)),I=()=>{let J;return U?J=q:Z?J=H:x.route.Component?J=C.createElement(x.route.Component,null):x.route.element?J=x.route.element:J=M,C.createElement($0,{match:x,routeContext:{outlet:M,matches:K,isDataRoute:c!=null},children:J})};return c&&(x.route.ErrorBoundary||x.route.errorElement||_===0)?C.createElement(zh,{location:c.location,revalidation:c.revalidation,component:q,error:U,children:I(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:g}):I()},null)}function qo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P0(r){let f=C.useContext(Dl);return Te(f,qo(r)),f}function eg(r){let f=C.useContext(uu);return Te(f,qo(r)),f}function tg(r){let f=C.useContext(Lt);return Te(f,qo(r)),f}function Go(r){let f=tg(r),d=f.matches[f.matches.length-1];return Te(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function ag(){return Go("useRouteId")}function lg(){let r=C.useContext(Yo),f=eg("useRouteError"),d=Go("useRouteError");return r!==void 0?r:f.errors?.[d]}function ng(){let{router:r}=P0("useNavigate"),f=Go("useNavigate"),d=C.useRef(!1);return Eh(()=>{d.current=!0}),C.useCallback(async(h,p={})=>{Rt(d.current,Sh),d.current&&(typeof h=="number"?await r.navigate(h):await r.navigate(h,{fromRouteId:f,...p}))},[r,f])}var ch={};function wh(r,f,d){!f&&!ch[r]&&(ch[r]=!0,Rt(!1,d))}C.memo(ig);function ig({routes:r,future:f,state:d,isStatic:c,onError:h}){return jh(r,void 0,{state:d,isStatic:c,onError:h})}function Bn(r){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ug({basename:r="/",children:f=null,location:d,navigationType:c="POP",navigator:h,static:p=!1,unstable_useTransitions:S}){Te(!Un(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=r.replace(/^\/*/,"/"),E=C.useMemo(()=>({basename:A,navigator:h,static:p,unstable_useTransitions:S,future:{}}),[A,h,p,S]);typeof d=="string"&&(d=Fa(d));let{pathname:g="/",search:M="",hash:x="",state:_=null,key:U="default",unstable_mask:Z}=d,q=C.useMemo(()=>{let H=la(g,A);return H==null?null:{location:{pathname:H,search:M,hash:x,state:_,key:U,unstable_mask:Z},navigationType:c}},[A,g,M,x,_,U,c,Z]);return Rt(q!=null,`<Router basename="${A}"> is not able to match the URL "${g}${M}${x}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:C.createElement(Tt.Provider,{value:E},C.createElement(Dn.Provider,{children:f,value:q}))}function rg({children:r,location:f}){return K0(Ho(r),f)}function Ho(r,f=[]){let d=[];return C.Children.forEach(r,(c,h)=>{if(!C.isValidElement(c))return;let p=[...f,h];if(c.type===C.Fragment){d.push.apply(d,Ho(c.props.children,p));return}Te(c.type===Bn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!c.props.index||!c.props.children,"An index route cannot have child routes.");let S={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(S.children=Ho(c.props.children,p)),d.push(S)}),d}var lu="get",nu="application/x-www-form-urlencoded";function ru(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function og(r){return ru(r)&&r.tagName.toLowerCase()==="button"}function cg(r){return ru(r)&&r.tagName.toLowerCase()==="form"}function sg(r){return ru(r)&&r.tagName.toLowerCase()==="input"}function fg(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function dg(r,f){return r.button===0&&(!f||f==="_self")&&!fg(r)}var au=null;function hg(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var mg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Do(r){return r!=null&&!mg.has(r)?(Rt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nu}"`),null):r}function pg(r,f){let d,c,h,p,S;if(cg(r)){let A=r.getAttribute("action");c=A?la(A,f):null,d=r.getAttribute("method")||lu,h=Do(r.getAttribute("enctype"))||nu,p=new FormData(r)}else if(og(r)||sg(r)&&(r.type==="submit"||r.type==="image")){let A=r.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let E=r.getAttribute("formaction")||A.getAttribute("action");if(c=E?la(E,f):null,d=r.getAttribute("formmethod")||A.getAttribute("method")||lu,h=Do(r.getAttribute("formenctype"))||Do(A.getAttribute("enctype"))||nu,p=new FormData(A,r),!hg()){let{name:g,type:M,value:x}=r;if(M==="image"){let _=g?`${g}.`:"";p.append(`${_}x`,"0"),p.append(`${_}y`,"0")}else g&&p.append(g,x)}}else{if(ru(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=lu,c=null,h=nu,S=r}return p&&h==="text/plain"&&(S=p,p=void 0),{action:c,method:d.toLowerCase(),encType:h,formData:p,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xo(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function gg(r,f,d,c){let h=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${c}`:h.pathname=`${h.pathname}.${c}`:h.pathname==="/"?h.pathname=`_root.${c}`:f&&la(h.pathname,f)==="/"?h.pathname=`${f.replace(/\/$/,"")}/_root.${c}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${c}`,h}async function vg(r,f){if(r.id in f)return f[r.id];try{let d=await import(r.module);return f[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yg(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function xg(r,f,d){let c=await Promise.all(r.map(async h=>{let p=f.routes[h.route.id];if(p){let S=await vg(p,d);return S.links?S.links():[]}return[]}));return jg(c.flat(1).filter(yg).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function sh(r,f,d,c,h,p){let S=(E,g)=>d[g]?E.route.id!==d[g].route.id:!0,A=(E,g)=>d[g].pathname!==E.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==E.params["*"];return p==="assets"?f.filter((E,g)=>S(E,g)||A(E,g)):p==="data"?f.filter((E,g)=>{let M=c.routes[E.route.id];if(!M||!M.hasLoader)return!1;if(S(E,g)||A(E,g))return!0;if(E.route.shouldRevalidate){let x=E.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:E.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function bg(r,f,{includeHydrateFallback:d}={}){return Sg(r.map(c=>{let h=f.routes[c.route.id];if(!h)return[];let p=[h.module];return h.clientActionModule&&(p=p.concat(h.clientActionModule)),h.clientLoaderModule&&(p=p.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(p=p.concat(h.hydrateFallbackModule)),h.imports&&(p=p.concat(h.imports)),p}).flat(1))}function Sg(r){return[...new Set(r)]}function Eg(r){let f={},d=Object.keys(r).sort();for(let c of d)f[c]=r[c];return f}function jg(r,f){let d=new Set;return new Set(f),r.reduce((c,h)=>{let p=JSON.stringify(Eg(h));return d.has(p)||(d.add(p),c.push({key:p,link:h})),c},[])}function Th(){let r=C.useContext(Dl);return Xo(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function zg(){let r=C.useContext(uu);return Xo(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Qo=C.createContext(void 0);Qo.displayName="FrameworkContext";function Ah(){let r=C.useContext(Qo);return Xo(r,"You must render this element inside a <HydratedRouter> element"),r}function wg(r,f){let d=C.useContext(Qo),[c,h]=C.useState(!1),[p,S]=C.useState(!1),{onFocus:A,onBlur:E,onMouseEnter:g,onMouseLeave:M,onTouchStart:x}=f,_=C.useRef(null);C.useEffect(()=>{if(r==="render"&&S(!0),r==="viewport"){let q=K=>{K.forEach(I=>{S(I.isIntersecting)})},H=new IntersectionObserver(q,{threshold:.5});return _.current&&H.observe(_.current),()=>{H.disconnect()}}},[r]),C.useEffect(()=>{if(c){let q=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(q)}}},[c]);let U=()=>{h(!0)},Z=()=>{h(!1),S(!1)};return d?r!=="intent"?[p,_,{}]:[p,_,{onFocus:On(A,U),onBlur:On(E,Z),onMouseEnter:On(g,U),onMouseLeave:On(M,Z),onTouchStart:On(x,U)}]:[!1,_,{}]}function On(r,f){return d=>{r&&r(d),d.defaultPrevented||f(d)}}function Tg({page:r,...f}){let{router:d}=Th(),c=C.useMemo(()=>dh(d.routes,r,d.basename),[d.routes,r,d.basename]);return c?C.createElement(Cg,{page:r,matches:c,...f}):null}function Ag(r){let{manifest:f,routeModules:d}=Ah(),[c,h]=C.useState([]);return C.useEffect(()=>{let p=!1;return xg(r,f,d).then(S=>{p||h(S)}),()=>{p=!0}},[r,f,d]),c}function Cg({page:r,matches:f,...d}){let c=Na(),{future:h,manifest:p,routeModules:S}=Ah(),{basename:A}=Th(),{loaderData:E,matches:g}=zg(),M=C.useMemo(()=>sh(r,f,g,p,c,"data"),[r,f,g,p,c]),x=C.useMemo(()=>sh(r,f,g,p,c,"assets"),[r,f,g,p,c]),_=C.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let q=new Set,H=!1;if(f.forEach(I=>{let J=p.routes[I.route.id];!J||!J.hasLoader||(!M.some(ye=>ye.route.id===I.route.id)&&I.route.id in E&&S[I.route.id]?.shouldRevalidate||J.hasClientLoader?H=!0:q.add(I.route.id))}),q.size===0)return[];let K=gg(r,A,h.unstable_trailingSlashAwareDataRequests,"data");return H&&q.size>0&&K.searchParams.set("_routes",f.filter(I=>q.has(I.route.id)).map(I=>I.route.id).join(",")),[K.pathname+K.search]},[A,h.unstable_trailingSlashAwareDataRequests,E,c,p,M,f,r,S]),U=C.useMemo(()=>bg(x,p),[x,p]),Z=Ag(x);return C.createElement(C.Fragment,null,_.map(q=>C.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...d})),U.map(q=>C.createElement("link",{key:q,rel:"modulepreload",href:q,...d})),Z.map(({key:q,link:H})=>C.createElement("link",{key:q,nonce:d.nonce,...H,crossOrigin:H.crossOrigin??d.crossOrigin})))}function Ng(...r){return f=>{r.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var Rg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rg&&(window.__reactRouterVersion="7.13.1")}catch{}function Mg({basename:r,children:f,unstable_useTransitions:d,window:c}){let h=C.useRef();h.current==null&&(h.current=s0({window:c,v5Compat:!0}));let p=h.current,[S,A]=C.useState({action:p.action,location:p.location}),E=C.useCallback(g=>{d===!1?A(g):C.startTransition(()=>A(g))},[d]);return C.useLayoutEffect(()=>p.listen(E),[p,E]),C.createElement(ug,{basename:r,children:f,location:S.location,navigationType:S.action,navigator:p,unstable_useTransitions:d})}var Ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nh=C.forwardRef(function({onClick:f,discover:d="render",prefetch:c="none",relative:h,reloadDocument:p,replace:S,unstable_mask:A,state:E,target:g,to:M,preventScrollReset:x,viewTransition:_,unstable_defaultShouldRevalidate:U,...Z},q){let{basename:H,navigator:K,unstable_useTransitions:I}=C.useContext(Tt),J=typeof M=="string"&&Ch.test(M),ye=vh(M,H);M=ye.to;let xe=Q0(M,{relative:h}),we=Na(),W=null;if(A){let Be=ko(A,[],we.unstable_mask?we.unstable_mask.pathname:"/",!0);H!=="/"&&(Be.pathname=Be.pathname==="/"?H:Ht([H,Be.pathname])),W=K.createHref(Be)}let[Ne,Ve,Mt]=wg(c,Z),mt=Dg(M,{replace:S,unstable_mask:A,state:E,target:g,preventScrollReset:x,relative:h,viewTransition:_,unstable_defaultShouldRevalidate:U,unstable_useTransitions:I});function Ke(Be){f&&f(Be),Be.defaultPrevented||mt(Be)}let Ot=!(ye.isExternal||p),pt=C.createElement("a",{...Z,...Mt,href:(Ot?W:void 0)||ye.absoluteURL||xe,onClick:Ot?Ke:f,ref:Ng(q,Ve),target:g,"data-discover":!J&&d==="render"?"true":void 0});return Ne&&!J?C.createElement(C.Fragment,null,pt,C.createElement(Tg,{page:xe})):pt});Nh.displayName="Link";var Og=C.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:c="",end:h=!1,style:p,to:S,viewTransition:A,children:E,...g},M){let x=Hn(S,{relative:g.relative}),_=Na(),U=C.useContext(uu),{navigator:Z,basename:q}=C.useContext(Tt),H=U!=null&&Yg(x)&&A===!0,K=Z.encodeLocation?Z.encodeLocation(x).pathname:x.pathname,I=_.pathname,J=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;d||(I=I.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&q&&(J=la(J,q)||J);const ye=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let xe=I===K||!h&&I.startsWith(K)&&I.charAt(ye)==="/",we=J!=null&&(J===K||!h&&J.startsWith(K)&&J.charAt(K.length)==="/"),W={isActive:xe,isPending:we,isTransitioning:H},Ne=xe?f:void 0,Ve;typeof c=="function"?Ve=c(W):Ve=[c,xe?"active":null,we?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Mt=typeof p=="function"?p(W):p;return C.createElement(Nh,{...g,"aria-current":Ne,className:Ve,ref:M,style:Mt,to:S,viewTransition:A},typeof E=="function"?E(W):E)});Og.displayName="NavLink";var Bg=C.forwardRef(({discover:r="render",fetcherKey:f,navigate:d,reloadDocument:c,replace:h,state:p,method:S=lu,action:A,onSubmit:E,relative:g,preventScrollReset:M,viewTransition:x,unstable_defaultShouldRevalidate:_,...U},Z)=>{let{unstable_useTransitions:q}=C.useContext(Tt),H=Lg(),K=kg(A,{relative:g}),I=S.toLowerCase()==="get"?"get":"post",J=typeof A=="string"&&Ch.test(A),ye=xe=>{if(E&&E(xe),xe.defaultPrevented)return;xe.preventDefault();let we=xe.nativeEvent.submitter,W=we?.getAttribute("formmethod")||S,Ne=()=>H(we||xe.currentTarget,{fetcherKey:f,method:W,navigate:d,replace:h,state:p,relative:g,preventScrollReset:M,viewTransition:x,unstable_defaultShouldRevalidate:_});q&&d!==!1?C.startTransition(()=>Ne()):Ne()};return C.createElement("form",{ref:Z,method:I,action:K,onSubmit:c?E:ye,...U,"data-discover":!J&&r==="render"?"true":void 0})});Bg.displayName="Form";function _g(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rh(r){let f=C.useContext(Dl);return Te(f,_g(r)),f}function Dg(r,{target:f,replace:d,unstable_mask:c,state:h,preventScrollReset:p,relative:S,viewTransition:A,unstable_defaultShouldRevalidate:E,unstable_useTransitions:g}={}){let M=Wa(),x=Na(),_=Hn(r,{relative:S});return C.useCallback(U=>{if(dg(U,f)){U.preventDefault();let Z=d!==void 0?d:_n(x)===_n(_),q=()=>M(r,{replace:Z,unstable_mask:c,state:h,preventScrollReset:p,relative:S,viewTransition:A,unstable_defaultShouldRevalidate:E});g?C.startTransition(()=>q()):q()}},[x,M,_,d,c,h,f,r,p,S,A,E,g])}var Ug=0,Hg=()=>`__${String(++Ug)}__`;function Lg(){let{router:r}=Rh("useSubmit"),{basename:f}=C.useContext(Tt),d=ag(),c=r.fetch,h=r.navigate;return C.useCallback(async(p,S={})=>{let{action:A,method:E,encType:g,formData:M,body:x}=pg(p,f);if(S.navigate===!1){let _=S.fetcherKey||Hg();await c(_,d,S.action||A,{unstable_defaultShouldRevalidate:S.unstable_defaultShouldRevalidate,preventScrollReset:S.preventScrollReset,formData:M,body:x,formMethod:S.method||E,formEncType:S.encType||g,flushSync:S.flushSync})}else await h(S.action||A,{unstable_defaultShouldRevalidate:S.unstable_defaultShouldRevalidate,preventScrollReset:S.preventScrollReset,formData:M,body:x,formMethod:S.method||E,formEncType:S.encType||g,replace:S.replace,state:S.state,fromRouteId:d,flushSync:S.flushSync,viewTransition:S.viewTransition})},[c,h,f,d])}function kg(r,{relative:f}={}){let{basename:d}=C.useContext(Tt),c=C.useContext(Lt);Te(c,"useFormAction must be used inside a RouteContext");let[h]=c.matches.slice(-1),p={...Hn(r||".",{relative:f})},S=Na();if(r==null){p.search=S.search;let A=new URLSearchParams(p.search),E=A.getAll("index");if(E.some(M=>M==="")){A.delete("index"),E.filter(x=>x).forEach(x=>A.append("index",x));let M=A.toString();p.search=M?`?${M}`:""}}return(!r||r===".")&&h.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Ht([d,p.pathname])),_n(p)}function Yg(r,{relative:f}={}){let d=C.useContext(xh);Te(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Rh("useViewTransitionState"),h=Hn(r,{relative:f});if(!d.isTransitioning)return!1;let p=la(d.currentLocation.pathname,c)||d.currentLocation.pathname,S=la(d.nextLocation.pathname,c)||d.nextLocation.pathname;return iu(h.pathname,S)!=null||iu(h.pathname,p)!=null}const qg="/nowfix/assets/nowfix-logo1-tax9NvMG.png",Gg=`
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
`;function Zo(){const r=Wa();return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:Gg}),o.jsxs("div",{className:"brand-logo",onClick:()=>r("/"),children:[o.jsx("img",{src:qg,alt:"NowFix",className:"brand-logo-img"}),o.jsxs("span",{className:"brand-logo-text",children:[o.jsx("span",{className:"brand-logo-now",children:"NOW"}),o.jsx("span",{className:"brand-logo-fix",children:"FIX"})]})]})]})}const Xg=`
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
`,fh=[{label:"Services",href:"#services"},{label:"How It Works",href:"#how-it-works"},{label:"Reviews",href:"#reviews"}],Qg=["Jaipur","Jodhpur","Sri Ganganagar","Hanumangarh"];function Zg(){const[r,f]=C.useState(!1),[d,c]=C.useState(!1),[h,p]=C.useState(!1),[S,A]=C.useState(!1),[E,g]=C.useState(""),M=Wa();C.useEffect(()=>{const U=()=>f(window.scrollY>10);return window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)},[]);const x=()=>{p(!h),d&&c(!1)},_=()=>{c(!d),h&&p(!1)};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:Xg}),o.jsx("div",{className:`modal-overlay${S?" open":""}`,onClick:()=>A(!1),children:o.jsxs("div",{className:"modal-content",onClick:U=>U.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:"Select your city"}),o.jsx("button",{className:"modal-close",onClick:()=>A(!1),children:"×"})]}),o.jsxs("div",{className:"city-group",children:[o.jsx("div",{className:"city-group-title",children:"Available Now"}),o.jsxs("div",{className:"city-item active",onClick:()=>A(!1),children:[o.jsx("span",{className:"city-name",children:"Bikaner, Rajasthan"}),o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--primary)"},children:o.jsx("polyline",{points:"20 6 9 17 4 12"})})]})]}),o.jsxs("div",{className:"city-group",children:[o.jsx("div",{className:"city-group-title",children:"Coming Soon"}),Qg.map(U=>o.jsxs("div",{className:"city-item disabled",children:[o.jsxs("span",{className:"city-name",children:[U,", Rajasthan"]}),o.jsx("span",{className:"city-badge",children:"Soon"})]},U))]})]})}),o.jsx("nav",{className:`nav${r?" scrolled":""}`,children:o.jsxs("div",{className:"nav-inner",children:[o.jsx(Zo,{}),o.jsxs("div",{className:"nav-search-container",children:[o.jsxs("div",{className:"nav-location",onClick:()=>A(!0),children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan",o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"14px",height:"14px",color:"#9CA3AF",marginLeft:"4px"},children:o.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),o.jsxs("div",{className:"nav-search-box",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),o.jsx("input",{type:"text",placeholder:"Search for AC repair, plumbing...",value:E,onChange:U=>g(U.target.value)})]})]}),o.jsx("ul",{className:"nav-links",children:fh.map(U=>o.jsx("li",{children:o.jsx("a",{href:U.href,children:U.label})},U.label))}),o.jsx("div",{className:"nav-right",children:o.jsx("button",{className:"nav-login-btn",onClick:()=>M("/login"),children:"Login →"})}),o.jsxs("div",{className:"mobile-actions",children:[o.jsx("button",{className:"mobile-icon-btn",onClick:x,"aria-label":"Toggle search",children:o.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h?o.jsxs(o.Fragment,{children:[o.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):o.jsxs(o.Fragment,{children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})}),o.jsxs("button",{className:`nav-hamburger${d?" open":""}`,onClick:_,"aria-label":"Toggle menu",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]})]})}),o.jsx("div",{className:`mobile-search-dropdown${h?" open":""}`,children:o.jsxs("div",{className:"nav-search-container",style:{display:"flex",width:"100%",maxWidth:"100%",flexDirection:"column",border:"none",boxShadow:"none"},children:[o.jsxs("div",{className:"nav-location",style:{borderRight:"none",borderBottom:"1px solid var(--border)",width:"100%",borderRadius:"8px 8px 0 0",border:"1px solid var(--border)"},onClick:()=>{p(!1),A(!0)},children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan"]}),o.jsxs("div",{className:"nav-search-box",style:{width:"100%",border:"1px solid var(--border)",borderTop:"none",borderRadius:"0 0 8px 8px",background:"var(--bg-2)"},children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),o.jsx("input",{type:"text",placeholder:"Search for services...",value:E,onChange:U=>g(U.target.value),autoFocus:h})]})]})}),o.jsxs("div",{className:`nav-mobile${d?" open":""}`,children:[fh.map(U=>o.jsx("a",{href:U.href,onClick:()=>c(!1),children:U.label},U.label)),o.jsx("div",{className:"nav-mobile-buttons",children:o.jsx("button",{className:"nav-mobile-login",onClick:()=>{M("/login"),c(!1)},children:"Login →"})})]})]})}const Vg="/nowfix/assets/hero-bg-BE157-vU.jpeg",Kg=`
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
`,Jg=[{name:"Plumbing",color:"#eff6ff",iconColor:"#2563eb",icon:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v4h4V6h4v2h4V4a2 2 0 0 0-2-2z"}),o.jsx("path",{d:"M4 8v10a2 2 0 0 0 2 2h3"}),o.jsx("path",{d:"M18 12h-8"}),o.jsx("path",{d:"M18 12a4 4 0 0 1 0 8h-5"}),o.jsx("path",{d:"M9 20v-4"})]})},{name:"Electrician",color:"#fefce8",iconColor:"#ca8a04",icon:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})},{name:"AC Repair",color:"#f0fdf4",iconColor:"#16a34a",icon:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("rect",{x:"2",y:"6",width:"20",height:"8",rx:"2"}),o.jsx("path",{d:"M7 14v4"}),o.jsx("path",{d:"M12 14v4"}),o.jsx("path",{d:"M17 14v4"}),o.jsx("path",{d:"M6 10h.01"}),o.jsx("path",{d:"M10 10h4"})]})},{name:"Cleaning",color:"#fdf4ff",iconColor:"#a21caf",icon:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M3 22l4-1 12.5-12.5a2.12 2.12 0 0 0-3-3L4 18l-1 4z"}),o.jsx("path",{d:"M14.5 5.5l3 3"}),o.jsx("line",{x1:"8",y1:"22",x2:"8",y2:"18"}),o.jsx("line",{x1:"4",y1:"19",x2:"8",y2:"19"})]})},{name:"Carpentry",color:"#fff7ed",iconColor:"#c2410c",icon:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M15 12l-8.5 8.5c-.83.83-2.17.83-3 0a2.12 2.12 0 0 1 0-3L12 9"}),o.jsx("path",{d:"M17.64 15L22 10.64"}),o.jsx("path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"})]})},{name:"Appliance Repair",color:"#eff6ff",iconColor:"#1d4ed8",icon:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),o.jsx("path",{d:"M8 21h8"}),o.jsx("path",{d:"M12 17v4"}),o.jsx("path",{d:"M7 8h.01"}),o.jsx("path",{d:"M11 8h.01"})]})},{name:"Painting",color:"#fff1f2",iconColor:"#e11d48",icon:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M18.37 2.63L14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3z"}),o.jsx("path",{d:"M9 8c-2 3-4 3.5-7 4l8 8c1-.5 3.5-2 4-7"})]})},{name:"Pest Control",color:"#f0fdf4",iconColor:"#15803d",icon:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M12 22c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8 4.03 8 9 8z"}),o.jsx("path",{d:"M15 9c0-1.66-1.34-3-3-3s-3 1.34-3 3"}),o.jsx("path",{d:"M9 14h6"}),o.jsx("path",{d:"M9 17h6"}),o.jsx("path",{d:"M5 9l-2-2"}),o.jsx("path",{d:"M19 9l2-2"}),o.jsx("path",{d:"M5 19l-2 2"}),o.jsx("path",{d:"M19 19l2 2"})]})}],Fg=[{value:"500+",label:"Happy Customers"},{value:"100+",label:"Verified Workers"},{value:"4.8★",label:"Average Rating"},{value:"Same Day",label:"Service Available"}];function Wg(){const r=Wa();return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:Kg}),o.jsxs("section",{className:"hero",children:[o.jsxs("div",{className:"hero-main",children:[o.jsx("div",{className:"hero-bg"}),o.jsxs("div",{className:"hero-inner",children:[o.jsxs("div",{className:"hero-badge",children:[o.jsx("div",{className:"hero-badge-dot"}),o.jsx("span",{children:"Now live in Bikaner, Rajasthan"})]}),o.jsxs("h1",{className:"hero-headline",children:["Fix Any Problem"," ",o.jsx("span",{className:"hero-headline-orange",children:"Instantly"})," ","with"," ",o.jsx("span",{className:"hero-headline-blue",children:"NowFix"})]}),o.jsx("p",{className:"hero-sub",children:"Book trusted professionals for repairs, cleaning, electrical and more — fast, affordable, right at your doorstep."}),o.jsx("div",{className:"hero-cta",children:o.jsx("button",{className:"hero-btn-primary",onClick:()=>r("/login"),children:"Book a Service →"})}),o.jsx("div",{className:"hero-stats",children:Fg.map(f=>o.jsxs("div",{className:"hero-stat",children:[o.jsx("div",{className:"hero-stat-value",children:f.value}),o.jsx("div",{className:"hero-stat-label",children:f.label})]},f.value))})]})]}),o.jsx("div",{className:"hero-services",id:"services",children:o.jsxs("div",{className:"hero-services-inner",children:[o.jsxs("div",{className:"hero-services-header",children:[o.jsx("span",{className:"hero-services-title",children:"Our Services"}),o.jsx("button",{className:"hero-services-all",children:"View all →"})]}),o.jsx("div",{className:"hero-services-grid",children:Jg.map(f=>o.jsxs("div",{className:"hero-svc-card",onClick:()=>r(`/service/${f.name.toLowerCase().replace(/ /g,"-")}`),children:[o.jsx("div",{className:"hero-svc-icon",style:{background:f.color,color:f.iconColor},children:f.icon}),o.jsx("span",{className:"hero-svc-name",children:f.name})]},f.name))})]})})]})]})}const $g=`
  .how-section {
    padding: 5rem 2rem;
    background: var(--bg-2, #F9FAFB);
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .how-container {
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
    text-align: center;
  }

  .how-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 2.5rem;
    color: var(--text, #111827);
    margin-bottom: 3.5rem;
    letter-spacing: -0.02em;
  }

  .how-title span {
    color: var(--primary, #1F5BB5);
  }

  .how-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
    position: relative;
  }

  @media (min-width: 900px) {
    .how-grid::before {
      content: '';
      position: absolute;
      top: 45px; 
      left: 15%;
      right: 15%;
      height: 2px;
      background-image: linear-gradient(to right, var(--border, #E5E7EB) 50%, transparent 50%);
      background-size: 15px 100%;
      z-index: 1;
    }
  }

  .how-step {
    position: relative;
    z-index: 2;
    background: transparent;
    padding: 1rem;
  }

  .how-icon-wrapper {
    position: relative;
    width: 90px;
    height: 90px;
    margin: 0 auto 1.5rem;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
    border: 2px solid var(--primary-light, #E0E7FF);
    color: var(--primary, #1F5BB5);
    transition: transform 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  .how-step:hover .how-icon-wrapper {
    transform: translateY(-8px);
    border-color: var(--orange, #FF9F1C);
    color: var(--orange, #FF9F1C);
  }

  .how-step-num {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 32px;
    height: 32px;
    background: var(--orange, #FF9F1C);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1rem;
    border: 3px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .how-step-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.35rem;
    color: var(--text, #111827);
    margin-bottom: 0.75rem;
  }

  .how-step-desc {
    font-size: 0.95rem;
    color: var(--text-2, #4B5563);
    line-height: 1.6;
    max-width: 280px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .how-title {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }
    .how-section {
      padding: 4rem 1.5rem;
    }
  }
`,Ig=[{id:1,title:"Choose Service",desc:"Browse our wide range of home services and select what you need help with.",icon:o.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]})},{id:2,title:"Book Time",desc:"Pick a convenient date and time slot for our professional to visit your home.",icon:o.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),o.jsx("circle",{cx:"12",cy:"15",r:"2"})]})},{id:3,title:"Expert Arrives",desc:"A verified professional arrives at your doorstep to get the job done right.",icon:o.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.jsx("polyline",{points:"14 2 14 8 20 8"}),o.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),o.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),o.jsx("polyline",{points:"10 9 9 9 8 9"})]})}];function Pg(){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:$g}),o.jsx("section",{className:"how-section",id:"how-it-works",children:o.jsxs("div",{className:"how-container",children:[o.jsxs("h2",{className:"how-title",children:["How ",o.jsx("span",{children:"NowFix"})," Works"]}),o.jsx("div",{className:"how-grid",children:Ig.map(r=>o.jsxs("div",{className:"how-step",children:[o.jsxs("div",{className:"how-icon-wrapper",children:[r.icon,o.jsx("div",{className:"how-step-num",children:r.id})]}),o.jsx("h3",{className:"how-step-title",children:r.title}),o.jsx("p",{className:"how-step-desc",children:r.desc})]},r.id))})]})})]})}const ev=`
  .why-section {
    padding: 5rem 2rem;
    background: var(--bg, #FFFFFF);
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .why-container {
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
  }

  .why-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .why-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 2.5rem;
    color: var(--text, #111827);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .why-title span {
    color: var(--primary, #1F5BB5);
  }

  .why-sub {
    color: var(--text-3, #4B5563);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .why-card {
    padding: 2.5rem 2rem;
    background: #FFFFFF;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-xl, 16px);
    transition: all 0.3s ease;
    text-align: left;
  }

  .why-card:hover {
    border-color: var(--primary, #1F5BB5);
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  }

  .why-icon {
    width: 56px;
    height: 56px;
    background: var(--primary-light, #E0E7FF);
    color: var(--primary, #1F5BB5);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .why-card:hover .why-icon {
    background: var(--primary, #1F5BB5);
    color: white;
  }

  .why-card-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--text, #111827);
    margin-bottom: 0.75rem;
  }

  .why-card-desc {
    font-size: 0.95rem;
    color: var(--text-2, #374151);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .why-title { font-size: 2rem; }
    .why-section { padding: 4rem 1.5rem; }
    .why-card { text-align: center; }
    .why-icon { margin: 0 auto 1.5rem; }
  }
`,tv=[{title:"Verified Professionals",desc:"Every expert on our platform undergoes a strict background check and skill verification.",icon:o.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),o.jsx("path",{d:"m9 12 2 2 4-4"})]})},{title:"Transparent Pricing",desc:"No hidden costs. Get fixed, upfront pricing before you book any service.",icon:o.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),o.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]})},{title:"Fast Service",desc:"In a hurry? We provide same-day service within 60 minutes in Bikaner.",icon:o.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})},{title:"Service Warranty",desc:"Not satisfied? We provide a 30-day revisit warranty on all our services.",icon:o.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),o.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}];function av(){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:ev}),o.jsx("section",{className:"why-section",id:"why-nowfix",children:o.jsxs("div",{className:"why-container",children:[o.jsxs("div",{className:"why-header",children:[o.jsxs("h2",{className:"why-title",children:["Why choose ",o.jsx("span",{children:"NowFix"}),"?"]}),o.jsx("p",{className:"why-sub",children:"Safe, reliable, and affordable home services at your fingertips."})]}),o.jsx("div",{className:"why-grid",children:tv.map((r,f)=>o.jsxs("div",{className:"why-card",children:[o.jsx("div",{className:"why-icon",children:r.icon}),o.jsx("h3",{className:"why-card-title",children:r.title}),o.jsx("p",{className:"why-card-desc",children:r.desc})]},f))})]})})]})}function lv(){return o.jsxs("div",{className:"home-page",children:[o.jsx(Zg,{}),o.jsxs("main",{children:[o.jsx(Wg,{}),o.jsx(Pg,{}),o.jsx(av,{})]})]})}const nv=`
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
`;function iv(){const r=Wa(),[f,d]=C.useState(1),[c,h]=C.useState(""),[p,S]=C.useState(["","","",""]);function A(){c.length===10&&(console.log("Sending OTP to:",c),d(2))}function E(x,_){if(!/^\d*$/.test(x))return;const U=[...p];U[_]=x,S(U),x&&_<3&&document.getElementById(`otp-${_+1}`).focus()}function g(x,_){x.key==="Backspace"&&!p[_]&&_>0&&document.getElementById(`otp-${_-1}`).focus()}function M(){const x=p.join("");console.log("Verifying OTP:",x,"for phone:",c),r("/")}return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:nv}),o.jsx("div",{className:"login-page",children:o.jsxs("div",{className:"login-card",children:[o.jsx("div",{className:"login-header",children:o.jsx(Zo,{})}),f===1&&o.jsxs(o.Fragment,{children:[o.jsx("h1",{className:"login-title",children:"Welcome Back"}),o.jsx("p",{className:"login-sub",children:"Enter your mobile number to log in or sign up."}),o.jsx("label",{className:"login-label",children:"Mobile Number"}),o.jsxs("div",{className:"login-phone-wrap",children:[o.jsx("div",{className:"login-phone-prefix",children:o.jsx("span",{className:"flag-emoji",children:"🇮🇳"})}),o.jsx("input",{className:"login-phone-input",type:"tel",maxLength:10,placeholder:"98765 43210",value:c,onChange:x=>h(x.target.value.replace(/\D/g,"")),onKeyDown:x=>x.key==="Enter"&&A(),autoFocus:!0})]}),o.jsx("button",{className:"login-btn",onClick:A,disabled:c.length!==10,children:"Send OTP →"}),o.jsxs("p",{className:"login-terms",children:["By continuing, you agree to our"," ",o.jsx("span",{children:"Terms of Service"})," and"," ",o.jsx("span",{children:"Privacy Policy"})]})]}),f===2&&o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"login-back",onClick:()=>d(1),children:"← Change Number"}),o.jsx("h1",{className:"login-title",children:"Enter OTP"}),o.jsx("p",{className:"login-sub",children:"We sent a 4-digit code to"}),o.jsx("div",{className:"otp-phone-display",children:o.jsxs("span",{children:[o.jsx("span",{className:"flag-emoji",children:"🇮🇳"})," ",c]})}),o.jsx("div",{className:"otp-wrap",children:p.map((x,_)=>o.jsx("input",{id:`otp-${_}`,className:`otp-input${x?" filled":""}`,type:"tel",maxLength:1,value:x,onChange:U=>E(U.target.value,_),onKeyDown:U=>g(U,_),autoFocus:_===0},_))}),o.jsxs("p",{className:"otp-resend",children:["Didn't receive the code?"," ",o.jsx("span",{onClick:()=>{S(["","","",""]),console.log("Resending OTP...")},children:"Resend OTP"})]}),o.jsx("button",{className:"login-btn",onClick:M,disabled:p.some(x=>x===""),children:"Verify & Continue →"})]})]})})]})}const uv=`
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
    grid-template-columns: 1fr 1fr;
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
`,rv=["Plumbing","Electrician","AC Repair","Home Cleaning","Carpentry","Appliance Repair","Painting","Pest Control"];function ov(){const r=Wa(),[f,d]=C.useState(null),[c,h]=C.useState(!1),[p,S]=C.useState({name:"",phone:"",category:"",experience:"",city:"Bikaner",aadhar:""});function A(x){const _=x.target.files[0];_&&(d(URL.createObjectURL(_)),console.log("Photo selected for upload:",_.name))}function E(x){const _=x.target.files[0];_&&(h(!0),console.log("Aadhar selected for upload:",_.name))}function g(x,_){S(U=>({...U,[x]:_}))}function M(){console.log("Submitting worker application data:",p),alert("Application submitted successfully! We will contact you soon."),r("/")}return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:uv}),o.jsx("div",{className:"join-page",children:o.jsxs("div",{className:"join-card",children:[o.jsx("div",{className:"join-header",children:o.jsx(Zo,{})}),o.jsx("h1",{className:"join-title",children:"Join as a Worker"}),o.jsx("p",{className:"join-sub",children:"Fill in your details to start receiving jobs in Bikaner"}),o.jsxs("div",{className:"join-photo-wrap",children:[o.jsx("div",{className:"join-photo-circle",onClick:()=>document.getElementById("photo-input").click(),children:f?o.jsx("img",{src:f,alt:"Profile"}):o.jsxs(o.Fragment,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),o.jsx("span",{children:"Add Photo"})]})}),o.jsx("span",{className:"join-photo-label",onClick:()=>document.getElementById("photo-input").click(),children:f?"Change Photo":"Upload Profile Photo"}),o.jsx("input",{id:"photo-input",type:"file",accept:"image/*",style:{display:"none"},onChange:A})]}),o.jsx("p",{className:"join-section-label",children:"Personal Information"}),o.jsxs("div",{className:"join-row",children:[o.jsxs("div",{className:"join-field no-margin",children:[o.jsx("label",{children:"Full Name"}),o.jsx("input",{className:"join-input",type:"text",placeholder:"Ramesh Kumar",value:p.name,onChange:x=>g("name",x.target.value)})]}),o.jsxs("div",{className:"join-field no-margin",children:[o.jsx("label",{children:"Phone Number"}),o.jsxs("div",{className:"join-phone-wrap",children:[o.jsx("div",{className:"join-phone-prefix",children:"🇮🇳 +91"}),o.jsx("input",{className:"join-phone-input",type:"tel",placeholder:"98765 43210",maxLength:10,value:p.phone,onChange:x=>g("phone",x.target.value.replace(/\D/g,""))})]})]})]}),o.jsx("div",{className:"join-divider"}),o.jsx("p",{className:"join-section-label",children:"Work Information"}),o.jsxs("div",{className:"join-row",children:[o.jsxs("div",{className:"join-field no-margin",children:[o.jsx("label",{children:"Service Category"}),o.jsxs("select",{className:"join-select",value:p.category,onChange:x=>g("category",x.target.value),children:[o.jsx("option",{value:"",children:"Select category"}),rv.map(x=>o.jsx("option",{value:x,children:x},x))]})]}),o.jsxs("div",{className:"join-field no-margin",children:[o.jsx("label",{children:"Experience"}),o.jsxs("select",{className:"join-select",value:p.experience,onChange:x=>g("experience",x.target.value),children:[o.jsx("option",{value:"",children:"Select years"}),o.jsx("option",{value:"0-1",children:"Less than 1 year"}),o.jsx("option",{value:"1-3",children:"1 - 3 years"}),o.jsx("option",{value:"3-5",children:"3 - 5 years"}),o.jsx("option",{value:"5+",children:"5+ years"})]})]})]}),o.jsx("div",{className:"join-divider"}),o.jsx("p",{className:"join-section-label",children:"Identity Verification"}),o.jsxs("div",{className:"join-field",children:[o.jsx("label",{children:"Aadhar Card Number"}),o.jsx("input",{className:"join-input",type:"tel",placeholder:"1234 5678 9012",maxLength:14,value:p.aadhar,onChange:x=>g("aadhar",x.target.value)})]}),o.jsxs("div",{className:`join-upload-box${c?" uploaded":""}`,onClick:()=>document.getElementById("aadhar-input").click(),children:[c?o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),o.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.jsx("polyline",{points:"17 8 12 3 7 8"}),o.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),o.jsx("span",{className:"join-upload-title",children:c?"Aadhar Card Uploaded ✓":"Upload Aadhar Card"}),o.jsx("span",{className:"join-upload-sub",children:c?"Tap to change file":"JPG, PNG or PDF — max 5MB"}),o.jsx("input",{id:"aadhar-input",type:"file",accept:"image/*,.pdf",style:{display:"none"},onChange:E})]}),o.jsx("button",{className:"join-submit",onClick:M,children:"Submit Application →"})]})})]})}const cv=`
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
`,sv={plumbing:{color:"#eff6ff",iconColor:"#2563eb",desc:"Fast and reliable plumbing solutions",packages:[{id:1,name:"Tap / Faucet Repair",desc:"Fix leaky taps, replace washers, tighten fittings",price:199,duration:"30-45 mins",popular:!0},{id:2,name:"Pipe Leak Fix",desc:"Detect and seal pipe leaks, joint repairs",price:349,duration:"45-60 mins",popular:!1},{id:3,name:"Drain Cleaning",desc:"Unclog blocked drains, kitchen and bathroom",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Plumbing Check",desc:"Complete inspection of all plumbing points",price:499,duration:"60-90 mins",popular:!1}]},electrician:{color:"#fefce8",iconColor:"#ca8a04",desc:"Certified electrical work at your home",packages:[{id:1,name:"Switch / Socket Repair",desc:"Fix or replace faulty switches and sockets",price:149,duration:"20-30 mins",popular:!0},{id:2,name:"Fan Installation",desc:"Install ceiling or wall fan with wiring",price:249,duration:"30-45 mins",popular:!1},{id:3,name:"MCB / Fuse Repair",desc:"Fix tripping MCB, replace fuse box",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Wiring Check",desc:"Safety inspection of all electrical wiring",price:599,duration:"60-90 mins",popular:!1}]},"ac-repair":{color:"#f0fdf4",iconColor:"#16a34a",desc:"Expert AC service and maintenance",packages:[{id:1,name:"AC Service & Clean",desc:"Deep clean filters, coils and full service",price:499,duration:"60-90 mins",popular:!0},{id:2,name:"Gas Refilling",desc:"Recharge refrigerant gas to optimal level",price:1299,duration:"45-60 mins",popular:!1},{id:3,name:"AC Installation",desc:"Install new split or window AC unit",price:999,duration:"2-3 hours",popular:!1},{id:4,name:"AC Not Cooling Fix",desc:"Diagnose and fix cooling issues",price:399,duration:"45-60 mins",popular:!1}]},cleaning:{color:"#fdf4ff",iconColor:"#a21caf",desc:"Professional home cleaning services",packages:[{id:1,name:"Basic Home Clean",desc:"Sweep, mop, dust all rooms",price:399,duration:"2-3 hours",popular:!0},{id:2,name:"Deep Home Clean",desc:"Full sanitization including kitchen and bathrooms",price:799,duration:"4-5 hours",popular:!1},{id:3,name:"Kitchen Deep Clean",desc:"Degrease and clean entire kitchen",price:599,duration:"2-3 hours",popular:!1},{id:4,name:"Bathroom Cleaning",desc:"Scrub, sanitize and clean all bathrooms",price:299,duration:"1-2 hours",popular:!1}]},carpentry:{color:"#fff7ed",iconColor:"#c2410c",desc:"Skilled carpenters for all wood work",packages:[{id:1,name:"Furniture Assembly",desc:"Assemble flat-pack or new furniture",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Door Repair",desc:"Fix hinges, locks, alignment issues",price:249,duration:"30-60 mins",popular:!1},{id:3,name:"Wood Polish",desc:"Sand and polish wooden furniture",price:499,duration:"2-3 hours",popular:!1},{id:4,name:"Custom Fitting",desc:"Custom shelves, cabinets or woodwork",price:799,duration:"3-4 hours",popular:!1}]},"appliance-repair":{color:"#eff6ff",iconColor:"#1d4ed8",desc:"All home appliance repairs",packages:[{id:1,name:"Washing Machine Repair",desc:"Fix spin, drain or electrical issues",price:449,duration:"45-60 mins",popular:!0},{id:2,name:"Refrigerator Repair",desc:"Fix cooling, compressor or door seal",price:499,duration:"45-90 mins",popular:!1},{id:3,name:"Microwave Repair",desc:"Fix heating, door or electrical faults",price:349,duration:"30-45 mins",popular:!1},{id:4,name:"TV / LED Repair",desc:"Fix display, sound or power issues",price:399,duration:"45-60 mins",popular:!1}]},painting:{color:"#fff1f2",iconColor:"#e11d48",desc:"Professional home painting services",packages:[{id:1,name:"Single Room Paint",desc:"Full painting of one room walls and ceiling",price:1499,duration:"1 day",popular:!0},{id:2,name:"2-3 Room Paint",desc:"Full painting of 2-3 rooms",price:3499,duration:"2-3 days",popular:!1},{id:3,name:"Exterior Paint",desc:"Outside wall painting and waterproofing",price:4999,duration:"3-5 days",popular:!1},{id:4,name:"Texture / Design Work",desc:"Decorative texture or pattern wall finish",price:2499,duration:"2-3 days",popular:!1}]},"pest-control":{color:"#f0fdf4",iconColor:"#15803d",desc:"Safe and effective pest removal",packages:[{id:1,name:"Cockroach Control",desc:"Gel treatment for kitchen and bathrooms",price:499,duration:"45-60 mins",popular:!0},{id:2,name:"Termite Treatment",desc:"Full home anti-termite spray treatment",price:1499,duration:"2-3 hours",popular:!1},{id:3,name:"Rodent Control",desc:"Traps and repellent for rats and mice",price:799,duration:"1-2 hours",popular:!1},{id:4,name:"Full Home Pest Control",desc:"Complete treatment for all common pests",price:1999,duration:"3-4 hours",popular:!1}]}},fv={color:"#eff6ff",iconColor:"#2563eb",desc:"Professional home service",packages:[{id:1,name:"Basic Service",desc:"Standard service package",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Standard Service",desc:"Complete service package",price:499,duration:"2-3 hours",popular:!1}]};function dv(){const r=Wa(),{id:f}=V0(),[d,c]=C.useState(1),[h,p]=C.useState(null),[S,A]=C.useState(null),E=sv[f]||fv,g=E.packages.find(_=>_.id===h);function M(_){const U=_.target.files[0];U&&A(URL.createObjectURL(U))}const x=f?f.replace(/-/g," "):"Service";return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:cv}),o.jsxs("div",{className:"sd-page",children:[o.jsxs("div",{className:"sd-topbar",children:[o.jsxs("button",{className:"sd-back",onClick:()=>d===1?r("/"):c(1),children:[o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back"]}),o.jsx("span",{className:"sd-topbar-title",children:x}),o.jsx("div",{className:"sd-topbar-right"})]}),o.jsxs("div",{className:"sd-steps",children:[o.jsxs("div",{className:"sd-step",children:[o.jsx("div",{className:`sd-step-circle ${d===1?"active":"done"}`,children:d>1?"✓":"1"}),o.jsx("span",{className:`sd-step-label ${d===1?"active":"done"}`,children:"Choose Package"})]}),o.jsx("div",{className:`sd-step-line ${d>1?"done":""}`}),o.jsxs("div",{className:"sd-step",children:[o.jsx("div",{className:`sd-step-circle ${d===2?"active":""}`,children:"2"}),o.jsx("span",{className:`sd-step-label ${d===2?"active":""}`,children:"Add Photo"})]})]}),o.jsxs("div",{className:"sd-inner",children:[o.jsxs("div",{className:"sd-header-card",children:[o.jsx("div",{className:"sd-header-icon",style:{background:E.color,color:E.iconColor},children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}),o.jsxs("div",{className:"sd-header-info",children:[o.jsx("h2",{children:x}),o.jsx("p",{children:E.desc})]})]}),d===1&&o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"sd-section-title",children:"Choose a Package"}),o.jsx("div",{className:"sd-packages",children:E.packages.map(_=>o.jsxs("div",{className:`sd-pkg-card ${h===_.id?"selected":""}`,onClick:()=>p(_.id),children:[o.jsx("div",{className:"sd-pkg-radio",children:o.jsx("div",{className:"sd-pkg-radio-dot"})}),o.jsxs("div",{className:"sd-pkg-info",children:[o.jsxs("div",{className:"sd-pkg-name",children:[_.name,_.popular&&o.jsx("span",{className:"sd-pkg-badge",children:"Popular"})]}),o.jsx("div",{className:"sd-pkg-desc",children:_.desc})]}),o.jsxs("div",{className:"sd-pkg-right",children:[o.jsxs("div",{className:"sd-pkg-price",children:["₹",_.price]}),o.jsx("div",{className:"sd-pkg-duration",children:_.duration})]})]},_.id))})]}),d===2&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sd-summary",children:[o.jsxs("div",{className:"sd-summary-row",children:[o.jsx("span",{children:"Selected Package"}),o.jsx("strong",{children:g?.name})]}),o.jsx("div",{className:"sd-summary-divider"}),o.jsxs("div",{className:"sd-summary-total",children:[o.jsx("span",{children:"Total"}),o.jsxs("span",{children:["₹",g?.price]})]})]}),o.jsx("p",{className:"sd-section-title",children:"Upload a Photo (Optional)"}),S?o.jsxs("div",{className:"sd-upload-area has-image",onClick:()=>document.getElementById("gallery-input").click(),children:[o.jsx("img",{src:S,alt:"Issue",className:"sd-upload-preview"}),o.jsx("span",{className:"sd-upload-change",children:"Tap to change photo"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sd-upload-options",children:[o.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("camera-input").click(),children:[o.jsxs("svg",{viewBox:"0 0 24 24",children:[o.jsx("path",{d:"M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"}),o.jsx("path",{d:"M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})]}),o.jsx("span",{children:"Take Photo"})]}),o.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("gallery-input").click(),children:[o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),o.jsx("span",{children:"From Gallery"})]})]}),o.jsxs("div",{className:"sd-upload-area",onClick:()=>document.getElementById("gallery-input").click(),children:[o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"})}),o.jsx("span",{className:"sd-upload-title",children:"Upload issue photo"}),o.jsxs("span",{className:"sd-upload-sub",children:["Help the worker understand your issue better.",`
`,"Tap to upload from your device."]})]})]}),o.jsx("input",{id:"camera-input",type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:M}),o.jsx("input",{id:"gallery-input",type:"file",accept:"image/*",style:{display:"none"},onChange:M}),o.jsx("button",{className:"sd-skip-btn",onClick:()=>r("/login"),children:"Skip & Continue without photo →"})]})]}),o.jsxs("div",{className:"sd-cta",children:[o.jsx("div",{className:"sd-cta-info",children:g?o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"sd-cta-price",children:["₹",g.price]}),o.jsx("span",{className:"sd-cta-label",children:g.name})]}):o.jsx("span",{className:"sd-cta-label",children:"Select a package to continue"})}),o.jsx("button",{className:"sd-cta-btn",disabled:!h,onClick:()=>d===1?c(2):r("/login"),children:d===1?"Continue →":"Confirm Booking →"})]})]})]})}function hv(){return o.jsx(Mg,{children:o.jsxs(rg,{children:[o.jsx(Bn,{path:"/",element:o.jsx(lv,{})}),o.jsx(Bn,{path:"/login",element:o.jsx(iv,{})}),o.jsx(Bn,{path:"/join",element:o.jsx(ov,{})}),o.jsx(Bn,{path:"/service/:id",element:o.jsx(dv,{})})]})})}c0.createRoot(document.getElementById("root")).render(o.jsx(C.StrictMode,{children:o.jsx(hv,{})}));
