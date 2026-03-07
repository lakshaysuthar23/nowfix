(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const x of p.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&c(x)}).observe(document,{childList:!0,subtree:!0});function d(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(h){if(h.ep)return;h.ep=!0;const p=d(h);fetch(h.href,p)}})();var Ac={exports:{}},Nn={};var Kd;function Pp(){if(Kd)return Nn;Kd=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function d(c,h,p){var x=null;if(p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),"key"in h){p={};for(var R in h)R!=="key"&&(p[R]=h[R])}else p=h;return h=p.ref,{$$typeof:r,type:c,key:x,ref:h!==void 0?h:null,props:p}}return Nn.Fragment=s,Nn.jsx=d,Nn.jsxs=d,Nn}var Jd;function ev(){return Jd||(Jd=1,Ac.exports=Pp()),Ac.exports}var f=ev(),Cc={exports:{}},F={};var $d;function tv(){if($d)return F;$d=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),x=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),U=Symbol.iterator;function Z(y){return y===null||typeof y!="object"?null:(y=U&&y[U]||y["@@iterator"],typeof y=="function"?y:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,H={};function K(y,w,L){this.props=y,this.context=w,this.refs=H,this.updater=L||Q}K.prototype.isReactComponent={},K.prototype.setState=function(y,w){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,w,"setState")},K.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function ee(){}ee.prototype=K.prototype;function J(y,w,L){this.props=y,this.context=w,this.refs=H,this.updater=L||Q}var ye=J.prototype=new ee;ye.constructor=J,q(ye,K.prototype),ye.isPureReactComponent=!0;var be=Array.isArray;function Te(){}var W={H:null,A:null,T:null,S:null},Me=Object.prototype.hasOwnProperty;function Ve(y,w,L){var G=L.ref;return{$$typeof:r,type:y,key:w,ref:G!==void 0?G:null,props:L}}function Nt(y,w){return Ve(y.type,w,y.props)}function mt(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function Ke(y){var w={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(L){return w[L]})}var Ot=/\/+/g;function pt(y,w){return typeof y=="object"&&y!==null&&y.key!=null?Ke(""+y.key):w.toString(36)}function De(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Te,Te):(y.status="pending",y.then(function(w){y.status==="pending"&&(y.status="fulfilled",y.value=w)},function(w){y.status==="pending"&&(y.status="rejected",y.reason=w)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function O(y,w,L,G,I){var le=typeof y;(le==="undefined"||le==="boolean")&&(y=null);var se=!1;if(y===null)se=!0;else switch(le){case"bigint":case"string":case"number":se=!0;break;case"object":switch(y.$$typeof){case r:case s:se=!0;break;case A:return se=y._init,O(se(y._payload),w,L,G,I)}}if(se)return I=I(y),se=G===""?"."+pt(y,0):G,be(I)?(L="",se!=null&&(L=se.replace(Ot,"$&/")+"/"),O(I,w,L,"",function(Ha){return Ha})):I!=null&&(mt(I)&&(I=Nt(I,L+(I.key==null||y&&y.key===I.key?"":(""+I.key).replace(Ot,"$&/")+"/")+se)),w.push(I)),1;se=0;var $e=G===""?".":G+":";if(be(y))for(var Ne=0;Ne<y.length;Ne++)G=y[Ne],le=$e+pt(G,Ne),se+=O(G,w,L,le,I);else if(Ne=Z(y),typeof Ne=="function")for(y=Ne.call(y),Ne=0;!(G=y.next()).done;)G=G.value,le=$e+pt(G,Ne++),se+=O(G,w,L,le,I);else if(le==="object"){if(typeof y.then=="function")return O(De(y),w,L,G,I);throw w=String(y),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return se}function B(y,w,L){if(y==null)return y;var G=[],I=0;return O(y,G,"","",function(le){return w.call(L,le,I++)}),G}function $(y){if(y._status===-1){var w=y._result;w=w(),w.then(function(L){(y._status===0||y._status===-1)&&(y._status=1,y._result=L)},function(L){(y._status===0||y._status===-1)&&(y._status=2,y._result=L)}),y._status===-1&&(y._status=0,y._result=w)}if(y._status===1)return y._result.default;throw y._result}var me=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},xe={map:B,forEach:function(y,w,L){B(y,function(){w.apply(this,arguments)},L)},count:function(y){var w=0;return B(y,function(){w++}),w},toArray:function(y){return B(y,function(w){return w})||[]},only:function(y){if(!mt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return F.Activity=E,F.Children=xe,F.Component=K,F.Fragment=d,F.Profiler=h,F.PureComponent=J,F.StrictMode=c,F.Suspense=S,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,F.__COMPILER_RUNTIME={__proto__:null,c:function(y){return W.H.useMemoCache(y)}},F.cache=function(y){return function(){return y.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(y,w,L){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var G=q({},y.props),I=y.key;if(w!=null)for(le in w.key!==void 0&&(I=""+w.key),w)!Me.call(w,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&w.ref===void 0||(G[le]=w[le]);var le=arguments.length-2;if(le===1)G.children=L;else if(1<le){for(var se=Array(le),$e=0;$e<le;$e++)se[$e]=arguments[$e+2];G.children=se}return Ve(y.type,I,G)},F.createContext=function(y){return y={$$typeof:x,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:p,_context:y},y},F.createElement=function(y,w,L){var G,I={},le=null;if(w!=null)for(G in w.key!==void 0&&(le=""+w.key),w)Me.call(w,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(I[G]=w[G]);var se=arguments.length-2;if(se===1)I.children=L;else if(1<se){for(var $e=Array(se),Ne=0;Ne<se;Ne++)$e[Ne]=arguments[Ne+2];I.children=$e}if(y&&y.defaultProps)for(G in se=y.defaultProps,se)I[G]===void 0&&(I[G]=se[G]);return Ve(y,le,I)},F.createRef=function(){return{current:null}},F.forwardRef=function(y){return{$$typeof:R,render:y}},F.isValidElement=mt,F.lazy=function(y){return{$$typeof:A,_payload:{_status:-1,_result:y},_init:$}},F.memo=function(y,w){return{$$typeof:g,type:y,compare:w===void 0?null:w}},F.startTransition=function(y){var w=W.T,L={};W.T=L;try{var G=y(),I=W.S;I!==null&&I(L,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Te,me)}catch(le){me(le)}finally{w!==null&&L.types!==null&&(w.types=L.types),W.T=w}},F.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},F.use=function(y){return W.H.use(y)},F.useActionState=function(y,w,L){return W.H.useActionState(y,w,L)},F.useCallback=function(y,w){return W.H.useCallback(y,w)},F.useContext=function(y){return W.H.useContext(y)},F.useDebugValue=function(){},F.useDeferredValue=function(y,w){return W.H.useDeferredValue(y,w)},F.useEffect=function(y,w){return W.H.useEffect(y,w)},F.useEffectEvent=function(y){return W.H.useEffectEvent(y)},F.useId=function(){return W.H.useId()},F.useImperativeHandle=function(y,w,L){return W.H.useImperativeHandle(y,w,L)},F.useInsertionEffect=function(y,w){return W.H.useInsertionEffect(y,w)},F.useLayoutEffect=function(y,w){return W.H.useLayoutEffect(y,w)},F.useMemo=function(y,w){return W.H.useMemo(y,w)},F.useOptimistic=function(y,w){return W.H.useOptimistic(y,w)},F.useReducer=function(y,w,L){return W.H.useReducer(y,w,L)},F.useRef=function(y){return W.H.useRef(y)},F.useState=function(y){return W.H.useState(y)},F.useSyncExternalStore=function(y,w,L){return W.H.useSyncExternalStore(y,w,L)},F.useTransition=function(){return W.H.useTransition()},F.version="19.2.4",F}var Wd;function Bc(){return Wd||(Wd=1,Cc.exports=tv()),Cc.exports}var M=Bc(),Rc={exports:{}},On={},Mc={exports:{}},Nc={};var Fd;function lv(){return Fd||(Fd=1,(function(r){function s(O,B){var $=O.length;O.push(B);e:for(;0<$;){var me=$-1>>>1,xe=O[me];if(0<h(xe,B))O[me]=B,O[$]=xe,$=me;else break e}}function d(O){return O.length===0?null:O[0]}function c(O){if(O.length===0)return null;var B=O[0],$=O.pop();if($!==B){O[0]=$;e:for(var me=0,xe=O.length,y=xe>>>1;me<y;){var w=2*(me+1)-1,L=O[w],G=w+1,I=O[G];if(0>h(L,$))G<xe&&0>h(I,L)?(O[me]=I,O[G]=$,me=G):(O[me]=L,O[w]=$,me=w);else if(G<xe&&0>h(I,$))O[me]=I,O[G]=$,me=G;else break e}}return B}function h(O,B){var $=O.sortIndex-B.sortIndex;return $!==0?$:O.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var x=Date,R=x.now();r.unstable_now=function(){return x.now()-R}}var S=[],g=[],A=1,E=null,U=3,Z=!1,Q=!1,q=!1,H=!1,K=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ye(O){for(var B=d(g);B!==null;){if(B.callback===null)c(g);else if(B.startTime<=O)c(g),B.sortIndex=B.expirationTime,s(S,B);else break;B=d(g)}}function be(O){if(q=!1,ye(O),!Q)if(d(S)!==null)Q=!0,Te||(Te=!0,Ke());else{var B=d(g);B!==null&&De(be,B.startTime-O)}}var Te=!1,W=-1,Me=5,Ve=-1;function Nt(){return H?!0:!(r.unstable_now()-Ve<Me)}function mt(){if(H=!1,Te){var O=r.unstable_now();Ve=O;var B=!0;try{e:{Q=!1,q&&(q=!1,ee(W),W=-1),Z=!0;var $=U;try{t:{for(ye(O),E=d(S);E!==null&&!(E.expirationTime>O&&Nt());){var me=E.callback;if(typeof me=="function"){E.callback=null,U=E.priorityLevel;var xe=me(E.expirationTime<=O);if(O=r.unstable_now(),typeof xe=="function"){E.callback=xe,ye(O),B=!0;break t}E===d(S)&&c(S),ye(O)}else c(S);E=d(S)}if(E!==null)B=!0;else{var y=d(g);y!==null&&De(be,y.startTime-O),B=!1}}break e}finally{E=null,U=$,Z=!1}B=void 0}}finally{B?Ke():Te=!1}}}var Ke;if(typeof J=="function")Ke=function(){J(mt)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,pt=Ot.port2;Ot.port1.onmessage=mt,Ke=function(){pt.postMessage(null)}}else Ke=function(){K(mt,0)};function De(O,B){W=K(function(){O(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return U},r.unstable_next=function(O){switch(U){case 1:case 2:case 3:var B=3;break;default:B=U}var $=U;U=B;try{return O()}finally{U=$}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=U;U=O;try{return B()}finally{U=$}},r.unstable_scheduleCallback=function(O,B,$){var me=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?me+$:me):$=me,O){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=$+xe,O={id:A++,callback:B,priorityLevel:O,startTime:$,expirationTime:xe,sortIndex:-1},$>me?(O.sortIndex=$,s(g,O),d(S)===null&&O===d(g)&&(q?(ee(W),W=-1):q=!0,De(be,$-me))):(O.sortIndex=xe,s(S,O),Q||Z||(Q=!0,Te||(Te=!0,Ke()))),O},r.unstable_shouldYield=Nt,r.unstable_wrapCallback=function(O){var B=U;return function(){var $=U;U=B;try{return O.apply(this,arguments)}finally{U=$}}}})(Nc)),Nc}var Id;function av(){return Id||(Id=1,Mc.exports=lv()),Mc.exports}var Oc={exports:{}},Je={};var Pd;function nv(){if(Pd)return Je;Pd=1;var r=Bc();function s(S){var g="https://react.dev/errors/"+S;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)g+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+S+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(s(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function p(S,g,A){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:E==null?null:""+E,children:S,containerInfo:g,implementation:A}}var x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(S,g){if(S==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Je.createPortal=function(S,g){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return p(S,g,null,A)},Je.flushSync=function(S){var g=x.T,A=c.p;try{if(x.T=null,c.p=2,S)return S()}finally{x.T=g,c.p=A,c.d.f()}},Je.preconnect=function(S,g){typeof S=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(S,g))},Je.prefetchDNS=function(S){typeof S=="string"&&c.d.D(S)},Je.preinit=function(S,g){if(typeof S=="string"&&g&&typeof g.as=="string"){var A=g.as,E=R(A,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,Z=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;A==="style"?c.d.S(S,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:U,fetchPriority:Z}):A==="script"&&c.d.X(S,{crossOrigin:E,integrity:U,fetchPriority:Z,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Je.preinitModule=function(S,g){if(typeof S=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var A=R(g.as,g.crossOrigin);c.d.M(S,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(S)},Je.preload=function(S,g){if(typeof S=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var A=g.as,E=R(A,g.crossOrigin);c.d.L(S,A,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Je.preloadModule=function(S,g){if(typeof S=="string")if(g){var A=R(g.as,g.crossOrigin);c.d.m(S,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(S)},Je.requestFormReset=function(S){c.d.r(S)},Je.unstable_batchedUpdates=function(S,g){return S(g)},Je.useFormState=function(S,g,A){return x.H.useFormState(S,g,A)},Je.useFormStatus=function(){return x.H.useHostTransitionStatus()},Je.version="19.2.4",Je}var eh;function iv(){if(eh)return Oc.exports;eh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Oc.exports=nv(),Oc.exports}var th;function uv(){if(th)return On;th=1;var r=av(),s=Bc(),d=iv();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(p(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return S(n),e;if(i===a)return S(n),t;i=i.sibling}throw Error(c(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,o=n.child;o;){if(o===l){u=!0,l=n,a=i;break}if(o===a){u=!0,a=n,l=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===l){u=!0,l=i,a=n;break}if(o===a){u=!0,a=i,l=n;break}o=o.sibling}if(!u)throw Error(c(189))}}if(l.alternate!==a)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?e:t}function A(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=A(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,U=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Ve=Symbol.for("react.activity"),Nt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var Ot=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Profiler";case H:return"StrictMode";case be:return"Suspense";case Te:return"SuspenseList";case Ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case J:return e.displayName||"Context";case ee:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:pt(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return pt(e(t))}catch{}}return null}var De=Array.isArray,O=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},me=[],xe=-1;function y(e){return{current:e}}function w(e){0>xe||(e.current=me[xe],me[xe]=null,xe--)}function L(e,t){xe++,me[xe]=e.current,e.current=t}var G=y(null),I=y(null),le=y(null),se=y(null);function $e(e,t){switch(L(le,t),L(I,e),L(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vd(t),e=gd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}w(G),L(G,e)}function Ne(){w(G),w(I),w(le)}function Ha(e){e.memoizedState!==null&&L(se,e);var t=G.current,l=gd(t,e.type);t!==l&&(L(I,e),L(G,l))}function Ln(e){I.current===e&&(w(G),w(I)),se.current===e&&(w(se),An._currentValue=$)}var cu,Qc;function Nl(e){if(cu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);cu=t&&t[1]||"",Qc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cu+e+Qc}var ou=!1;function fu(e,t){if(!e||ou)return"";ou=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(C){var T=C}Reflect.construct(e,[],D)}else{try{D.call()}catch(C){T=C}e.call(D.prototype)}}else{try{throw Error()}catch(C){T=C}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(C){if(C&&T&&typeof C.stack=="string")return[C.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var m=u.split(`
`),j=o.split(`
`);for(n=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;if(a===m.length||n===j.length)for(a=m.length-1,n=j.length-1;1<=a&&0<=n&&m[a]!==j[n];)n--;for(;1<=a&&0<=n;a--,n--)if(m[a]!==j[n]){if(a!==1||n!==1)do if(a--,n--,0>n||m[a]!==j[n]){var N=`
`+m[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=n);break}}}finally{ou=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Nl(l):""}function Nh(e,t){switch(e.tag){case 26:case 27:case 5:return Nl(e.type);case 16:return Nl("Lazy");case 13:return e.child!==t&&t!==null?Nl("Suspense Fallback"):Nl("Suspense");case 19:return Nl("SuspenseList");case 0:case 15:return fu(e.type,!1);case 11:return fu(e.type.render,!1);case 1:return fu(e.type,!0);case 31:return Nl("Activity");default:return""}}function Zc(e){try{var t="",l=null;do t+=Nh(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var su=Object.prototype.hasOwnProperty,du=r.unstable_scheduleCallback,hu=r.unstable_cancelCallback,Oh=r.unstable_shouldYield,_h=r.unstable_requestPaint,nt=r.unstable_now,Dh=r.unstable_getCurrentPriorityLevel,Vc=r.unstable_ImmediatePriority,Kc=r.unstable_UserBlockingPriority,Yn=r.unstable_NormalPriority,wh=r.unstable_LowPriority,Jc=r.unstable_IdlePriority,Uh=r.log,Hh=r.unstable_setDisableYieldValue,Ba=null,it=null;function nl(e){if(typeof Uh=="function"&&Hh(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Ba,e)}catch{}}var ut=Math.clz32?Math.clz32:Yh,Bh=Math.log,Lh=Math.LN2;function Yh(e){return e>>>=0,e===0?32:31-(Bh(e)/Lh|0)|0}var qn=256,Gn=262144,kn=4194304;function Ol(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~i,a!==0?n=Ol(a):(u&=o,u!==0?n=Ol(u):l||(l=o&~e,l!==0&&(n=Ol(l))))):(o=a&~i,o!==0?n=Ol(o):u!==0?n=Ol(u):l||(l=a&~e,l!==0&&(n=Ol(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function La(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $c(){var e=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),e}function mu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ya(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gh(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,m=e.expirationTimes,j=e.hiddenUpdates;for(l=u&~l;0<l;){var N=31-ut(l),D=1<<N;o[N]=0,m[N]=-1;var T=j[N];if(T!==null)for(j[N]=null,N=0;N<T.length;N++){var C=T[N];C!==null&&(C.lane&=-536870913)}l&=~D}a!==0&&Wc(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Wc(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ut(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Fc(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-ut(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Ic(e,t){var l=t&-t;return l=(l&42)!==0?1:pu(l),(l&(e.suspendedLanes|t))!==0?0:l}function pu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pc(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:qd(e.type))}function eo(e,t){var l=B.p;try{return B.p=e,t()}finally{B.p=l}}var il=Math.random().toString(36).slice(2),Ge="__reactFiber$"+il,Fe="__reactProps$"+il,$l="__reactContainer$"+il,gu="__reactEvents$"+il,kh="__reactListeners$"+il,Xh="__reactHandles$"+il,to="__reactResources$"+il,qa="__reactMarker$"+il;function yu(e){delete e[Ge],delete e[Fe],delete e[gu],delete e[kh],delete e[Xh]}function Wl(e){var t=e[Ge];if(t)return t;for(var l=e.parentNode;l;){if(t=l[$l]||l[Ge]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=jd(e);e!==null;){if(l=e[Ge])return l;e=jd(e)}return t}e=l,l=e.parentNode}return null}function Fl(e){if(e=e[Ge]||e[$l]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ga(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Il(e){var t=e[to];return t||(t=e[to]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[qa]=!0}var lo=new Set,ao={};function _l(e,t){Pl(e,t),Pl(e+"Capture",t)}function Pl(e,t){for(ao[e]=t,e=0;e<t.length;e++)lo.add(t[e])}var Qh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),no={},io={};function Zh(e){return su.call(io,e)?!0:su.call(no,e)?!1:Qh.test(e)?io[e]=!0:(no[e]=!0,!1)}function Qn(e,t,l){if(Zh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Zn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Yt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vh(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bu(e){if(!e._valueTracker){var t=uo(e)?"checked":"value";e._valueTracker=Vh(e,t,""+e[t])}}function ro(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=uo(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kh=/[\n"\\]/g;function gt(e){return e.replace(Kh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xu(e,t,l,a,n,i,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Su(e,u,vt(t)):l!=null?Su(e,u,vt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+vt(o):e.removeAttribute("name")}function co(e,t,l,a,n,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){bu(e);return}l=l!=null?""+vt(l):"",t=t!=null?""+vt(t):l,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),bu(e)}function Su(e,t,l){t==="number"&&Vn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ea(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+vt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function oo(e,t,l){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+vt(l):""}function fo(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(c(92));if(De(a)){if(1<a.length)throw Error(c(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=vt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),bu(e)}function ta(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Jh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function so(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Jh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function ho(e,t,l){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&so(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&so(e,i,t[i])}function Eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $h=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Wh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var zu=null;function ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,aa=null;function mo(e){var t=Fl(e);if(t&&(e=t.stateNode)){var l=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(xu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Fe]||null;if(!n)throw Error(c(90));xu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&ro(a)}break e;case"textarea":oo(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ea(e,!!l.multiple,t,!1)}}}var Tu=!1;function po(e,t,l){if(Tu)return e(t,l);Tu=!0;try{var a=e(t);return a}finally{if(Tu=!1,(la!==null||aa!==null)&&(wi(),la&&(t=la,e=aa,aa=la=null,mo(t),e)))for(t=0;t<e.length;t++)mo(e[t])}}function ka(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Fe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(c(231,t,typeof l));return l}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Gt)try{var Xa={};Object.defineProperty(Xa,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Xa,Xa),window.removeEventListener("test",Xa,Xa)}catch{Au=!1}var ul=null,Cu=null,Jn=null;function vo(){if(Jn)return Jn;var e,t=Cu,l=t.length,a,n="value"in ul?ul.value:ul.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return Jn=n.slice(e,1<a?1-a:void 0)}function $n(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function go(){return!1}function Ie(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:go,this.isPropagationStopped=go,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=Ie(Dl),Qa=E({},Dl,{view:0,detail:0}),Fh=Ie(Qa),Ru,Mu,Za,In=E({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Za&&(Za&&e.type==="mousemove"?(Ru=e.screenX-Za.screenX,Mu=e.screenY-Za.screenY):Mu=Ru=0,Za=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),yo=Ie(In),Ih=E({},In,{dataTransfer:0}),Ph=Ie(Ih),em=E({},Qa,{relatedTarget:0}),Nu=Ie(em),tm=E({},Dl,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Ie(tm),am=E({},Dl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nm=Ie(am),im=E({},Dl,{data:0}),bo=Ie(im),um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function om(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cm[e])?!!t[e]:!1}function Ou(){return om}var fm=E({},Qa,{key:function(e){if(e.key){var t=um[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sm=Ie(fm),dm=E({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=Ie(dm),hm=E({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),mm=Ie(hm),pm=E({},Dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),vm=Ie(pm),gm=E({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ym=Ie(gm),bm=E({},Dl,{newState:0,oldState:0}),xm=Ie(bm),Sm=[9,13,27,32],_u=Gt&&"CompositionEvent"in window,Va=null;Gt&&"documentMode"in document&&(Va=document.documentMode);var Em=Gt&&"TextEvent"in window&&!Va,So=Gt&&(!_u||Va&&8<Va&&11>=Va),Eo=" ",zo=!1;function jo(e,t){switch(e){case"keyup":return Sm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function To(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var na=!1;function zm(e,t){switch(e){case"compositionend":return To(t);case"keypress":return t.which!==32?null:(zo=!0,Eo);case"textInput":return e=t.data,e===Eo&&zo?null:e;default:return null}}function jm(e,t){if(na)return e==="compositionend"||!_u&&jo(e,t)?(e=vo(),Jn=Cu=ul=null,na=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return So&&t.locale!=="ko"?null:t.data;default:return null}}var Tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tm[e.type]:t==="textarea"}function Co(e,t,l,a){la?aa?aa.push(a):aa=[a]:la=a,t=Gi(t,"onChange"),0<t.length&&(l=new Fn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ka=null,Ja=null;function Am(e){fd(e,0)}function Pn(e){var t=Ga(e);if(ro(t))return e}function Ro(e,t){if(e==="change")return t}var Mo=!1;if(Gt){var Du;if(Gt){var wu="oninput"in document;if(!wu){var No=document.createElement("div");No.setAttribute("oninput","return;"),wu=typeof No.oninput=="function"}Du=wu}else Du=!1;Mo=Du&&(!document.documentMode||9<document.documentMode)}function Oo(){Ka&&(Ka.detachEvent("onpropertychange",_o),Ja=Ka=null)}function _o(e){if(e.propertyName==="value"&&Pn(Ja)){var t=[];Co(t,Ja,e,ju(e)),po(Am,t)}}function Cm(e,t,l){e==="focusin"?(Oo(),Ka=t,Ja=l,Ka.attachEvent("onpropertychange",_o)):e==="focusout"&&Oo()}function Rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(Ja)}function Mm(e,t){if(e==="click")return Pn(t)}function Nm(e,t){if(e==="input"||e==="change")return Pn(t)}function Om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Om;function $a(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!su.call(t,n)||!rt(e[n],t[n]))return!1}return!0}function Do(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wo(e,t){var l=Do(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Do(l)}}function Uo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ho(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Vn(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _m=Gt&&"documentMode"in document&&11>=document.documentMode,ia=null,Hu=null,Wa=null,Bu=!1;function Bo(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Bu||ia==null||ia!==Vn(a)||(a=ia,"selectionStart"in a&&Uu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wa&&$a(Wa,a)||(Wa=a,a=Gi(Hu,"onSelect"),0<a.length&&(t=new Fn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ia)))}function wl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ua={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionrun:wl("Transition","TransitionRun"),transitionstart:wl("Transition","TransitionStart"),transitioncancel:wl("Transition","TransitionCancel"),transitionend:wl("Transition","TransitionEnd")},Lu={},Lo={};Gt&&(Lo=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function Ul(e){if(Lu[e])return Lu[e];if(!ua[e])return e;var t=ua[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Lo)return Lu[e]=t[l];return e}var Yo=Ul("animationend"),qo=Ul("animationiteration"),Go=Ul("animationstart"),Dm=Ul("transitionrun"),wm=Ul("transitionstart"),Um=Ul("transitioncancel"),ko=Ul("transitionend"),Xo=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Ct(e,t){Xo.set(e,t),_l(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],ra=0,qu=0;function ti(){for(var e=ra,t=qu=ra=0;t<e;){var l=yt[t];yt[t++]=null;var a=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Qo(l,n,i)}}function li(e,t,l,a){yt[ra++]=e,yt[ra++]=t,yt[ra++]=l,yt[ra++]=a,qu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Gu(e,t,l,a){return li(e,t,l,a),ai(e)}function Hl(e,t){return li(e,null,null,t),ai(e)}function Qo(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ut(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function ai(e){if(50<bn)throw bn=0,Wr=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ca={};function Hm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,l,a){return new Hm(e,t,l,a)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kt(e,t){var l=e.alternate;return l===null?(l=ct(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Zo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")ku(e)&&(u=1);else if(typeof e=="string")u=Gp(e,l,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ve:return e=ct(31,l,t,n),e.elementType=Ve,e.lanes=i,e;case q:return Bl(l.children,n,i,t);case H:u=8,n|=24;break;case K:return e=ct(12,l,t,n|2),e.elementType=K,e.lanes=i,e;case be:return e=ct(13,l,t,n),e.elementType=be,e.lanes=i,e;case Te:return e=ct(19,l,t,n),e.elementType=Te,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:u=10;break e;case ee:u=9;break e;case ye:u=11;break e;case W:u=14;break e;case Me:u=16,a=null;break e}u=29,l=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=ct(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Bl(e,t,l,a){return e=ct(7,e,a,t),e.lanes=l,e}function Xu(e,t,l){return e=ct(6,e,null,t),e.lanes=l,e}function Vo(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function Qu(e,t,l){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ko=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var l=Ko.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Zc(t)},Ko.set(e,t),t)}return{value:e,source:t,stack:Zc(t)}}var oa=[],fa=0,ii=null,Fa=0,xt=[],St=0,rl=null,_t=1,Dt="";function Xt(e,t){oa[fa++]=Fa,oa[fa++]=ii,ii=e,Fa=t}function Jo(e,t,l){xt[St++]=_t,xt[St++]=Dt,xt[St++]=rl,rl=e;var a=_t;e=Dt;var n=32-ut(a)-1;a&=~(1<<n),l+=1;var i=32-ut(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,_t=1<<32-ut(t)+n|l<<n|a,Dt=i+e}else _t=1<<i|l<<n|a,Dt=e}function Zu(e){e.return!==null&&(Xt(e,1),Jo(e,1,0))}function Vu(e){for(;e===ii;)ii=oa[--fa],oa[fa]=null,Fa=oa[--fa],oa[fa]=null;for(;e===rl;)rl=xt[--St],xt[St]=null,Dt=xt[--St],xt[St]=null,_t=xt[--St],xt[St]=null}function $o(e,t){xt[St++]=_t,xt[St++]=Dt,xt[St++]=rl,_t=t.id,Dt=t.overflow,rl=e}var ke=null,Ee=null,re=!1,cl=null,Et=!1,Ku=Error(c(519));function ol(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ia(bt(t,e)),Ku}function Wo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ge]=e,t[Fe]=a,l){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(l=0;l<Sn.length;l++)ne(Sn[l],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),co(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),fo(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||md(t.textContent,l)?(a.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),a.onScroll!=null&&ne("scroll",t),a.onScrollEnd!=null&&ne("scrollend",t),a.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ol(e,!0)}function Fo(e){for(ke=e.return;ke;)switch(ke.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:ke=ke.return}}function sa(e){if(e!==ke)return!1;if(!re)return Fo(e),re=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||sc(e.type,e.memoizedProps)),l=!l),l&&Ee&&ol(e),Fo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=zd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=zd(e)}else t===27?(t=Ee,zl(e.type)?(e=vc,vc=null,Ee=e):Ee=t):Ee=ke?jt(e.stateNode.nextSibling):null;return!0}function Ll(){Ee=ke=null,re=!1}function Ju(){var e=cl;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),cl=null),e}function Ia(e){cl===null?cl=[e]:cl.push(e)}var $u=y(null),Yl=null,Qt=null;function fl(e,t,l){L($u,t._currentValue),t._currentValue=l}function Zt(e){e._currentValue=$u.current,w($u)}function Wu(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Fu(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var m=0;m<t.length;m++)if(o.context===t[m]){i.lanes|=l,o=i.alternate,o!==null&&(o.lanes|=l),Wu(i.return,l,e),a||(u=null);break e}i=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(c(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Wu(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function da(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var o=n.type;rt(n.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(n===se.current){if(u=n.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(An):e=[An])}n=n.return}e!==null&&Fu(t,e,l,a),t.flags|=262144}function ui(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ql(e){Yl=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return Io(Yl,e)}function ri(e,t){return Yl===null&&ql(e),Io(e,t)}function Io(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Qt===null){if(e===null)throw Error(c(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return l}var Bm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Lm=r.unstable_scheduleCallback,Ym=r.unstable_NormalPriority,we={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new Bm,data:new Map,refCount:0}}function Pa(e){e.refCount--,e.refCount===0&&Lm(Ym,function(){e.controller.abort()})}var en=null,Pu=0,ha=0,ma=null;function qm(e,t){if(en===null){var l=en=[];Pu=0,ha=lc(),ma={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Pu++,t.then(Po,Po),t}function Po(){if(--Pu===0&&en!==null){ma!==null&&(ma.status="fulfilled");var e=en;en=null,ha=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var ef=O.S;O.S=function(e,t){Ls=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qm(e,t),ef!==null&&ef(e,t)};var Gl=y(null);function er(){var e=Gl.current;return e!==null?e:Se.pooledCache}function ci(e,t){t===null?L(Gl,Gl.current):L(Gl,t.pool)}function tf(){var e=er();return e===null?null:{parent:we._currentValue,pool:e}}var pa=Error(c(460)),tr=Error(c(474)),oi=Error(c(542)),fi={then:function(){}};function lf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function af(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(qt,qt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uf(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uf(e),e}throw Xl=t,pa}}function kl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Xl=l,pa):l}}var Xl=null;function nf(){if(Xl===null)throw Error(c(459));var e=Xl;return Xl=null,e}function uf(e){if(e===pa||e===oi)throw Error(c(483))}var va=null,tn=0;function si(e){var t=tn;return tn+=1,va===null&&(va=[]),af(va,e,t)}function ln(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===U?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rf(e){function t(b,v){if(e){var z=b.deletions;z===null?(b.deletions=[v],b.flags|=16):z.push(v)}}function l(b,v){if(!e)return null;for(;v!==null;)t(b,v),v=v.sibling;return null}function a(b){for(var v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function n(b,v){return b=kt(b,v),b.index=0,b.sibling=null,b}function i(b,v,z){return b.index=z,e?(z=b.alternate,z!==null?(z=z.index,z<v?(b.flags|=67108866,v):z):(b.flags|=67108866,v)):(b.flags|=1048576,v)}function u(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function o(b,v,z,_){return v===null||v.tag!==6?(v=Xu(z,b.mode,_),v.return=b,v):(v=n(v,z),v.return=b,v)}function m(b,v,z,_){var X=z.type;return X===q?N(b,v,z.props.children,_,z.key):v!==null&&(v.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Me&&kl(X)===v.type)?(v=n(v,z.props),ln(v,z),v.return=b,v):(v=ni(z.type,z.key,z.props,null,b.mode,_),ln(v,z),v.return=b,v)}function j(b,v,z,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==z.containerInfo||v.stateNode.implementation!==z.implementation?(v=Qu(z,b.mode,_),v.return=b,v):(v=n(v,z.children||[]),v.return=b,v)}function N(b,v,z,_,X){return v===null||v.tag!==7?(v=Bl(z,b.mode,_,X),v.return=b,v):(v=n(v,z),v.return=b,v)}function D(b,v,z){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Xu(""+v,b.mode,z),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:return z=ni(v.type,v.key,v.props,null,b.mode,z),ln(z,v),z.return=b,z;case Q:return v=Qu(v,b.mode,z),v.return=b,v;case Me:return v=kl(v),D(b,v,z)}if(De(v)||Ke(v))return v=Bl(v,b.mode,z,null),v.return=b,v;if(typeof v.then=="function")return D(b,si(v),z);if(v.$$typeof===J)return D(b,ri(b,v),z);di(b,v)}return null}function T(b,v,z,_){var X=v!==null?v.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return X!==null?null:o(b,v,""+z,_);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:return z.key===X?m(b,v,z,_):null;case Q:return z.key===X?j(b,v,z,_):null;case Me:return z=kl(z),T(b,v,z,_)}if(De(z)||Ke(z))return X!==null?null:N(b,v,z,_,null);if(typeof z.then=="function")return T(b,v,si(z),_);if(z.$$typeof===J)return T(b,v,ri(b,z),_);di(b,z)}return null}function C(b,v,z,_,X){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return b=b.get(z)||null,o(v,b,""+_,X);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Z:return b=b.get(_.key===null?z:_.key)||null,m(v,b,_,X);case Q:return b=b.get(_.key===null?z:_.key)||null,j(v,b,_,X);case Me:return _=kl(_),C(b,v,z,_,X)}if(De(_)||Ke(_))return b=b.get(z)||null,N(v,b,_,X,null);if(typeof _.then=="function")return C(b,v,z,si(_),X);if(_.$$typeof===J)return C(b,v,z,ri(v,_),X);di(v,_)}return null}function Y(b,v,z,_){for(var X=null,ce=null,k=v,te=v=0,ue=null;k!==null&&te<z.length;te++){k.index>te?(ue=k,k=null):ue=k.sibling;var oe=T(b,k,z[te],_);if(oe===null){k===null&&(k=ue);break}e&&k&&oe.alternate===null&&t(b,k),v=i(oe,v,te),ce===null?X=oe:ce.sibling=oe,ce=oe,k=ue}if(te===z.length)return l(b,k),re&&Xt(b,te),X;if(k===null){for(;te<z.length;te++)k=D(b,z[te],_),k!==null&&(v=i(k,v,te),ce===null?X=k:ce.sibling=k,ce=k);return re&&Xt(b,te),X}for(k=a(k);te<z.length;te++)ue=C(k,b,te,z[te],_),ue!==null&&(e&&ue.alternate!==null&&k.delete(ue.key===null?te:ue.key),v=i(ue,v,te),ce===null?X=ue:ce.sibling=ue,ce=ue);return e&&k.forEach(function(Rl){return t(b,Rl)}),re&&Xt(b,te),X}function V(b,v,z,_){if(z==null)throw Error(c(151));for(var X=null,ce=null,k=v,te=v=0,ue=null,oe=z.next();k!==null&&!oe.done;te++,oe=z.next()){k.index>te?(ue=k,k=null):ue=k.sibling;var Rl=T(b,k,oe.value,_);if(Rl===null){k===null&&(k=ue);break}e&&k&&Rl.alternate===null&&t(b,k),v=i(Rl,v,te),ce===null?X=Rl:ce.sibling=Rl,ce=Rl,k=ue}if(oe.done)return l(b,k),re&&Xt(b,te),X;if(k===null){for(;!oe.done;te++,oe=z.next())oe=D(b,oe.value,_),oe!==null&&(v=i(oe,v,te),ce===null?X=oe:ce.sibling=oe,ce=oe);return re&&Xt(b,te),X}for(k=a(k);!oe.done;te++,oe=z.next())oe=C(k,b,te,oe.value,_),oe!==null&&(e&&oe.alternate!==null&&k.delete(oe.key===null?te:oe.key),v=i(oe,v,te),ce===null?X=oe:ce.sibling=oe,ce=oe);return e&&k.forEach(function(Ip){return t(b,Ip)}),re&&Xt(b,te),X}function ge(b,v,z,_){if(typeof z=="object"&&z!==null&&z.type===q&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:e:{for(var X=z.key;v!==null;){if(v.key===X){if(X=z.type,X===q){if(v.tag===7){l(b,v.sibling),_=n(v,z.props.children),_.return=b,b=_;break e}}else if(v.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Me&&kl(X)===v.type){l(b,v.sibling),_=n(v,z.props),ln(_,z),_.return=b,b=_;break e}l(b,v);break}else t(b,v);v=v.sibling}z.type===q?(_=Bl(z.props.children,b.mode,_,z.key),_.return=b,b=_):(_=ni(z.type,z.key,z.props,null,b.mode,_),ln(_,z),_.return=b,b=_)}return u(b);case Q:e:{for(X=z.key;v!==null;){if(v.key===X)if(v.tag===4&&v.stateNode.containerInfo===z.containerInfo&&v.stateNode.implementation===z.implementation){l(b,v.sibling),_=n(v,z.children||[]),_.return=b,b=_;break e}else{l(b,v);break}else t(b,v);v=v.sibling}_=Qu(z,b.mode,_),_.return=b,b=_}return u(b);case Me:return z=kl(z),ge(b,v,z,_)}if(De(z))return Y(b,v,z,_);if(Ke(z)){if(X=Ke(z),typeof X!="function")throw Error(c(150));return z=X.call(z),V(b,v,z,_)}if(typeof z.then=="function")return ge(b,v,si(z),_);if(z.$$typeof===J)return ge(b,v,ri(b,z),_);di(b,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,v!==null&&v.tag===6?(l(b,v.sibling),_=n(v,z),_.return=b,b=_):(l(b,v),_=Xu(z,b.mode,_),_.return=b,b=_),u(b)):l(b,v)}return function(b,v,z,_){try{tn=0;var X=ge(b,v,z,_);return va=null,X}catch(k){if(k===pa||k===oi)throw k;var ce=ct(29,k,null,b.mode);return ce.lanes=_,ce.return=b,ce}}}var Ql=rf(!0),cf=rf(!1),sl=!1;function lr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ar(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=ai(e),Qo(e,null,l),t}return li(e,a,t,l),ai(e)}function an(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Fc(e,l)}}function nr(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var ir=!1;function nn(){if(ir){var e=ma;if(e!==null)throw e}}function un(e,t,l,a){ir=!1;var n=e.updateQueue;sl=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var m=o,j=m.next;m.next=null,u===null?i=j:u.next=j,u=m;var N=e.alternate;N!==null&&(N=N.updateQueue,o=N.lastBaseUpdate,o!==u&&(o===null?N.firstBaseUpdate=j:o.next=j,N.lastBaseUpdate=m))}if(i!==null){var D=n.baseState;u=0,N=j=m=null,o=i;do{var T=o.lane&-536870913,C=T!==o.lane;if(C?(ie&T)===T:(a&T)===T){T!==0&&T===ha&&(ir=!0),N!==null&&(N=N.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var Y=e,V=o;T=t;var ge=l;switch(V.tag){case 1:if(Y=V.payload,typeof Y=="function"){D=Y.call(ge,D,T);break e}D=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=V.payload,T=typeof Y=="function"?Y.call(ge,D,T):Y,T==null)break e;D=E({},D,T);break e;case 2:sl=!0}}T=o.callback,T!==null&&(e.flags|=64,C&&(e.flags|=8192),C=n.callbacks,C===null?n.callbacks=[T]:C.push(T))}else C={lane:T,tag:o.tag,payload:o.payload,callback:o.callback,next:null},N===null?(j=N=C,m=D):N=N.next=C,u|=T;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;C=o,o=C.next,C.next=null,n.lastBaseUpdate=C,n.shared.pending=null}}while(!0);N===null&&(m=D),n.baseState=m,n.firstBaseUpdate=j,n.lastBaseUpdate=N,i===null&&(n.shared.lanes=0),yl|=u,e.lanes=u,e.memoizedState=D}}function of(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ff(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)of(l[e],t)}var ga=y(null),hi=y(0);function sf(e,t){e=el,L(hi,e),L(ga,t),el=e|t.baseLanes}function ur(){L(hi,el),L(ga,ga.current)}function rr(){el=hi.current,w(ga),w(hi)}var ot=y(null),zt=null;function ml(e){var t=e.alternate;L(Oe,Oe.current&1),L(ot,e),zt===null&&(t===null||ga.current!==null||t.memoizedState!==null)&&(zt=e)}function cr(e){L(Oe,Oe.current),L(ot,e),zt===null&&(zt=e)}function df(e){e.tag===22?(L(Oe,Oe.current),L(ot,e),zt===null&&(zt=e)):pl()}function pl(){L(Oe,Oe.current),L(ot,ot.current)}function ft(e){w(ot),zt===e&&(zt=null),w(Oe)}var Oe=y(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||mc(l)||pc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,P=null,pe=null,Ue=null,pi=!1,ya=!1,Zl=!1,vi=0,rn=0,ba=null,km=0;function Ce(){throw Error(c(321))}function or(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!rt(e[l],t[l]))return!1;return!0}function fr(e,t,l,a,n,i){return Vt=i,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?$f:Tr,Zl=!1,i=l(a,n),Zl=!1,ya&&(i=mf(t,l,a,n)),hf(e),i}function hf(e){O.H=fn;var t=pe!==null&&pe.next!==null;if(Vt=0,Ue=pe=P=null,pi=!1,rn=0,ba=null,t)throw Error(c(300));e===null||He||(e=e.dependencies,e!==null&&ui(e)&&(He=!0))}function mf(e,t,l,a){P=e;var n=0;do{if(ya&&(ba=null),rn=0,ya=!1,25<=n)throw Error(c(301));if(n+=1,Ue=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=Wf,i=t(l,a)}while(ya);return i}function Xm(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?cn(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(P.flags|=1024),t}function sr(){var e=vi!==0;return vi=0,e}function dr(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function hr(e){if(pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pi=!1}Vt=0,Ue=pe=P=null,ya=!1,rn=vi=0,ba=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?P.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function _e(){if(pe===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Ue===null?P.memoizedState:Ue.next;if(t!==null)Ue=t,pe=e;else{if(e===null)throw P.alternate===null?Error(c(467)):Error(c(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ue===null?P.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cn(e){var t=rn;return rn+=1,ba===null&&(ba=[]),e=af(ba,e,t),t=P,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?$f:Tr),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cn(e);if(e.$$typeof===J)return Xe(e)}throw Error(c(438,String(e)))}function mr(e){var t=null,l=P.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=P.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=gi(),P.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Nt;return t.index++,l}function Kt(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=_e();return pr(t,pe,e)}function pr(e,t,l){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=u=null,m=null,j=t,N=!1;do{var D=j.lane&-536870913;if(D!==j.lane?(ie&D)===D:(Vt&D)===D){var T=j.revertLane;if(T===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),D===ha&&(N=!0);else if((Vt&T)===T){j=j.next,T===ha&&(N=!0);continue}else D={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},m===null?(o=m=D,u=i):m=m.next=D,P.lanes|=T,yl|=T;D=j.action,Zl&&l(i,D),i=j.hasEagerState?j.eagerState:l(i,D)}else T={lane:D,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},m===null?(o=m=T,u=i):m=m.next=T,P.lanes|=D,yl|=D;j=j.next}while(j!==null&&j!==t);if(m===null?u=i:m.next=o,!rt(i,e.memoizedState)&&(He=!0,N&&(l=ma,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=m,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function vr(e){var t=_e(),l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);rt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function pf(e,t,l){var a=P,n=_e(),i=re;if(i){if(l===void 0)throw Error(c(407));l=l()}else l=t();var u=!rt((pe||n).memoizedState,l);if(u&&(n.memoizedState=l,He=!0),n=n.queue,br(yf.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Ue!==null&&Ue.memoizedState.tag&1){if(a.flags|=2048,xa(9,{destroy:void 0},gf.bind(null,a,n,l,t),null),Se===null)throw Error(c(349));i||(Vt&127)!==0||vf(a,t,l)}return l}function vf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=P.updateQueue,t===null?(t=gi(),P.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function gf(e,t,l,a){t.value=l,t.getSnapshot=a,bf(t)&&xf(e)}function yf(e,t,l){return l(function(){bf(t)&&xf(e)})}function bf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!rt(e,l)}catch{return!0}}function xf(e){var t=Hl(e,2);t!==null&&at(t,e,2)}function gr(e){var t=We();if(typeof e=="function"){var l=e;if(e=l(),Zl){nl(!0);try{l()}finally{nl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Sf(e,t,l,a){return e.baseState=l,pr(e,pe,typeof a=="function"?a:Kt)}function Qm(e,t,l,a,n){if(Ei(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};O.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Ef(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Ef(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=O.T,u={};O.T=u;try{var o=l(n,a),m=O.S;m!==null&&m(u,o),zf(e,t,o)}catch(j){yr(e,t,j)}finally{i!==null&&u.types!==null&&(i.types=u.types),O.T=i}}else try{i=l(n,a),zf(e,t,i)}catch(j){yr(e,t,j)}}function zf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){jf(e,t,a)},function(a){return yr(e,t,a)}):jf(e,t,l)}function jf(e,t,l){t.status="fulfilled",t.value=l,Tf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Ef(e,l)))}function yr(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Tf(t),t=t.next;while(t!==a)}e.action=null}function Tf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Af(e,t){return t}function Cf(e,t){if(re){var l=Se.formState;if(l!==null){e:{var a=P;if(re){if(Ee){t:{for(var n=Ee,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=jt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=jt(n.nextSibling),a=n.data==="F!";break e}}ol(a)}a=!1}a&&(t=l[0])}}return l=We(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Af,lastRenderedState:t},l.queue=a,l=Vf.bind(null,P,a),a.dispatch=l,a=gr(!1),i=jr.bind(null,P,!1,a.queue),a=We(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Qm.bind(null,P,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Rf(e){var t=_e();return Mf(t,pe,e)}function Mf(e,t,l){if(t=pr(e,t,Af)[0],e=bi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=cn(t)}catch(u){throw u===pa?oi:u}else a=t;t=_e();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(P.flags|=2048,xa(9,{destroy:void 0},Zm.bind(null,n,l),null)),[a,i,e]}function Zm(e,t){e.action=t}function Nf(e){var t=_e(),l=pe;if(l!==null)return Mf(t,l,e);_e(),t=t.memoizedState,l=_e();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function xa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=P.updateQueue,t===null&&(t=gi(),P.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Of(){return _e().memoizedState}function xi(e,t,l,a){var n=We();P.flags|=e,n.memoizedState=xa(1|t,{destroy:void 0},l,a===void 0?null:a)}function Si(e,t,l,a){var n=_e();a=a===void 0?null:a;var i=n.memoizedState.inst;pe!==null&&a!==null&&or(a,pe.memoizedState.deps)?n.memoizedState=xa(t,i,l,a):(P.flags|=e,n.memoizedState=xa(1|t,i,l,a))}function _f(e,t){xi(8390656,8,e,t)}function br(e,t){Si(2048,8,e,t)}function Vm(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=gi(),P.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Df(e){var t=_e().memoizedState;return Vm({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function wf(e,t){return Si(4,2,e,t)}function Uf(e,t){return Si(4,4,e,t)}function Hf(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bf(e,t,l){l=l!=null?l.concat([e]):null,Si(4,4,Hf.bind(null,t,e),l)}function xr(){}function Lf(e,t){var l=_e();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&or(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Yf(e,t){var l=_e();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&or(t,a[1]))return a[0];if(a=e(),Zl){nl(!0);try{e()}finally{nl(!1)}}return l.memoizedState=[a,t],a}function Sr(e,t,l){return l===void 0||(Vt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=qs(),P.lanes|=e,yl|=e,l)}function qf(e,t,l,a){return rt(l,t)?l:ga.current!==null?(e=Sr(e,l,a),rt(e,t)||(He=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(ie&261930)===0?(He=!0,e.memoizedState=l):(e=qs(),P.lanes|=e,yl|=e,t)}function Gf(e,t,l,a,n){var i=B.p;B.p=i!==0&&8>i?i:8;var u=O.T,o={};O.T=o,jr(e,!1,t,l);try{var m=n(),j=O.S;if(j!==null&&j(o,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var N=Gm(m,a);on(e,t,N,ht(e))}else on(e,t,a,ht(e))}catch(D){on(e,t,{then:function(){},status:"rejected",reason:D},ht())}finally{B.p=i,u!==null&&o.types!==null&&(u.types=o.types),O.T=u}}function Km(){}function Er(e,t,l,a){if(e.tag!==5)throw Error(c(476));var n=kf(e).queue;Gf(e,n,t,$,l===null?Km:function(){return Xf(e),l(a)})}function kf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:$},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xf(e){var t=kf(e);t.next===null&&(t=e.alternate.memoizedState),on(e,t.next.queue,{},ht())}function zr(){return Xe(An)}function Qf(){return _e().memoizedState}function Zf(){return _e().memoizedState}function Jm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ht();e=dl(l);var a=hl(t,e,l);a!==null&&(at(a,t,l),an(a,t,l)),t={cache:Iu()},e.payload=t;return}t=t.return}}function $m(e,t,l){var a=ht();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)?Kf(t,l):(l=Gu(e,t,l,a),l!==null&&(at(l,e,a),Jf(l,t,a)))}function Vf(e,t,l){var a=ht();on(e,t,l,a)}function on(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))Kf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,o=i(u,l);if(n.hasEagerState=!0,n.eagerState=o,rt(o,u))return li(e,t,n,0),Se===null&&ti(),!1}catch{}if(l=Gu(e,t,n,a),l!==null)return at(l,e,a),Jf(l,t,a),!0}return!1}function jr(e,t,l,a){if(a={lane:2,revertLane:lc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(c(479))}else t=Gu(e,l,a,2),t!==null&&at(t,e,2)}function Ei(e){var t=e.alternate;return e===P||t!==null&&t===P}function Kf(e,t){ya=pi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Jf(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Fc(e,l)}}var fn={readContext:Xe,use:yi,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};fn.useEffectEvent=Ce;var $f={readContext:Xe,use:yi,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:_f,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,xi(4194308,4,Hf.bind(null,t,e),l)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){xi(4,2,e,t)},useMemo:function(e,t){var l=We();t=t===void 0?null:t;var a=e();if(Zl){nl(!0);try{e()}finally{nl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=We();if(l!==void 0){var n=l(t);if(Zl){nl(!0);try{l(t)}finally{nl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=$m.bind(null,P,e),[a.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=gr(e);var t=e.queue,l=Vf.bind(null,P,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:xr,useDeferredValue:function(e,t){var l=We();return Sr(l,e,t)},useTransition:function(){var e=gr(!1);return e=Gf.bind(null,P,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=P,n=We();if(re){if(l===void 0)throw Error(c(407));l=l()}else{if(l=t(),Se===null)throw Error(c(349));(ie&127)!==0||vf(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,_f(yf.bind(null,a,i,e),[e]),a.flags|=2048,xa(9,{destroy:void 0},gf.bind(null,a,i,l,t),null),l},useId:function(){var e=We(),t=Se.identifierPrefix;if(re){var l=Dt,a=_t;l=(a&~(1<<32-ut(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=vi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=km++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zr,useFormState:Cf,useActionState:Cf,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=jr.bind(null,P,!0,l),l.dispatch=t,[e,t]},useMemoCache:mr,useCacheRefresh:function(){return We().memoizedState=Jm.bind(null,P)},useEffectEvent:function(e){var t=We(),l={impl:e};return t.memoizedState=l,function(){if((fe&2)!==0)throw Error(c(440));return l.impl.apply(void 0,arguments)}}},Tr={readContext:Xe,use:yi,useCallback:Lf,useContext:Xe,useEffect:br,useImperativeHandle:Bf,useInsertionEffect:wf,useLayoutEffect:Uf,useMemo:Yf,useReducer:bi,useRef:Of,useState:function(){return bi(Kt)},useDebugValue:xr,useDeferredValue:function(e,t){var l=_e();return qf(l,pe.memoizedState,e,t)},useTransition:function(){var e=bi(Kt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:cn(e),t]},useSyncExternalStore:pf,useId:Qf,useHostTransitionStatus:zr,useFormState:Rf,useActionState:Rf,useOptimistic:function(e,t){var l=_e();return Sf(l,pe,e,t)},useMemoCache:mr,useCacheRefresh:Zf};Tr.useEffectEvent=Df;var Wf={readContext:Xe,use:yi,useCallback:Lf,useContext:Xe,useEffect:br,useImperativeHandle:Bf,useInsertionEffect:wf,useLayoutEffect:Uf,useMemo:Yf,useReducer:vr,useRef:Of,useState:function(){return vr(Kt)},useDebugValue:xr,useDeferredValue:function(e,t){var l=_e();return pe===null?Sr(l,e,t):qf(l,pe.memoizedState,e,t)},useTransition:function(){var e=vr(Kt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:cn(e),t]},useSyncExternalStore:pf,useId:Qf,useHostTransitionStatus:zr,useFormState:Nf,useActionState:Nf,useOptimistic:function(e,t){var l=_e();return pe!==null?Sf(l,pe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:mr,useCacheRefresh:Zf};Wf.useEffectEvent=Df;function Ar(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:E({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Cr={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ht(),n=dl(a);n.payload=t,l!=null&&(n.callback=l),t=hl(e,n,a),t!==null&&(at(t,e,a),an(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ht(),n=dl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=hl(e,n,a),t!==null&&(at(t,e,a),an(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ht(),a=dl(l);a.tag=2,t!=null&&(a.callback=t),t=hl(e,a,l),t!==null&&(at(t,e,l),an(t,e,l))}};function Ff(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!$a(l,a)||!$a(n,i):!0}function If(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Cr.enqueueReplaceState(t,t.state,null)}function Vl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=E({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Pf(e){ei(e)}function es(e){console.error(e)}function ts(e){ei(e)}function zi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function ls(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Rr(e,t,l){return l=dl(l),l.tag=3,l.payload={element:null},l.callback=function(){zi(e,t)},l}function as(e){return e=dl(e),e.tag=3,e}function ns(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){ls(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){ls(t,l,a),typeof n!="function"&&(bl===null?bl=new Set([this]):bl.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function Wm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&da(t,l,n,!0),l=ot.current,l!==null){switch(l.tag){case 31:case 13:return zt===null?Ui():l.alternate===null&&Re===0&&(Re=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===fi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Pr(e,a,n)),!1;case 22:return l.flags|=65536,a===fi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Pr(e,a,n)),!1}throw Error(c(435,l.tag))}return Pr(e,a,n),Ui(),!1}if(re)return t=ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Ku&&(e=Error(c(422),{cause:a}),Ia(bt(e,l)))):(a!==Ku&&(t=Error(c(423),{cause:a}),Ia(bt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=bt(a,l),n=Rr(e.stateNode,a,n),nr(e,n),Re!==4&&(Re=2)),!1;var i=Error(c(520),{cause:a});if(i=bt(i,l),yn===null?yn=[i]:yn.push(i),Re!==4&&(Re=2),t===null)return!0;a=bt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Rr(l.stateNode,a,e),nr(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(bl===null||!bl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=as(n),ns(n,e,l,a),nr(l,n),!1}l=l.return}while(l!==null);return!1}var Mr=Error(c(461)),He=!1;function Qe(e,t,l,a){t.child=e===null?cf(t,null,l,a):Ql(t,e.child,l,a)}function is(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var o in a)o!=="ref"&&(u[o]=a[o])}else u=a;return ql(t),a=fr(e,t,l,u,i,n),o=sr(),e!==null&&!He?(dr(e,t,n),Jt(e,t,n)):(re&&o&&Zu(t),t.flags|=1,Qe(e,t,a,n),t.child)}function us(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!ku(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,rs(e,t,i,a,n)):(e=ni(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Br(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:$a,l(u,a)&&e.ref===t.ref)return Jt(e,t,n)}return t.flags|=1,e=kt(i,a),e.ref=t.ref,e.return=t,t.child=e}function rs(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if($a(i,a)&&e.ref===t.ref)if(He=!1,t.pendingProps=a=i,Br(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Jt(e,t,n)}return Nr(e,t,l,a,n)}function cs(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return os(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ci(t,i!==null?i.cachePool:null),i!==null?sf(t,i):ur(),df(t);else return a=t.lanes=536870912,os(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(ci(t,i.cachePool),sf(t,i),pl(),t.memoizedState=null):(e!==null&&ci(t,null),ur(),pl());return Qe(e,t,n,l),t.child}function sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function os(e,t,l,a,n){var i=er();return i=i===null?null:{parent:we._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&ci(t,null),ur(),df(t),e!==null&&da(e,t,a,!0),t.childLanes=n,null}function ji(e,t){return t=Ai({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fs(e,t,l){return Ql(t,e.child,null,l),e=ji(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function Fm(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(a.mode==="hidden")return e=ji(t,a),t.lanes=536870912,sn(null,e);if(cr(t),(e=Ee)?(e=Ed(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rl!==null?{id:_t,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},l=Vo(e),l.return=t,t.child=l,ke=t,Ee=null)):e=null,e===null)throw ol(t);return t.lanes=536870912,null}return ji(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(cr(t),n)if(t.flags&256)t.flags&=-257,t=fs(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(He||da(e,t,l,!1),n=(l&e.childLanes)!==0,He||n){if(a=Se,a!==null&&(u=Ic(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Hl(e,u),at(a,e,u),Mr;Ui(),t=fs(e,t,l)}else e=i.treeContext,Ee=jt(u.nextSibling),ke=t,re=!0,cl=null,Et=!1,e!==null&&$o(t,e),t=ji(t,a),t.flags|=4096;return t}return e=kt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ti(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Nr(e,t,l,a,n){return ql(t),l=fr(e,t,l,a,void 0,n),a=sr(),e!==null&&!He?(dr(e,t,n),Jt(e,t,n)):(re&&a&&Zu(t),t.flags|=1,Qe(e,t,l,n),t.child)}function ss(e,t,l,a,n,i){return ql(t),t.updateQueue=null,l=mf(t,a,l,n),hf(e),a=sr(),e!==null&&!He?(dr(e,t,i),Jt(e,t,i)):(re&&a&&Zu(t),t.flags|=1,Qe(e,t,l,i),t.child)}function ds(e,t,l,a,n){if(ql(t),t.stateNode===null){var i=ca,u=l.contextType;typeof u=="object"&&u!==null&&(i=Xe(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},lr(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Xe(u):ca,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Ar(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Cr.enqueueReplaceState(i,i.state,null),un(t,a,i,n),nn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,m=Vl(l,o);i.props=m;var j=i.context,N=l.contextType;u=ca,typeof N=="object"&&N!==null&&(u=Xe(N));var D=l.getDerivedStateFromProps;N=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||j!==u)&&If(t,i,a,u),sl=!1;var T=t.memoizedState;i.state=T,un(t,a,i,n),nn(),j=t.memoizedState,o||T!==j||sl?(typeof D=="function"&&(Ar(t,l,D,a),j=t.memoizedState),(m=sl||Ff(t,l,m,a,T,j,u))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=j),i.props=a,i.state=j,i.context=u,a=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,ar(e,t),u=t.memoizedProps,N=Vl(l,u),i.props=N,D=t.pendingProps,T=i.context,j=l.contextType,m=ca,typeof j=="object"&&j!==null&&(m=Xe(j)),o=l.getDerivedStateFromProps,(j=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==D||T!==m)&&If(t,i,a,m),sl=!1,T=t.memoizedState,i.state=T,un(t,a,i,n),nn();var C=t.memoizedState;u!==D||T!==C||sl||e!==null&&e.dependencies!==null&&ui(e.dependencies)?(typeof o=="function"&&(Ar(t,l,o,a),C=t.memoizedState),(N=sl||Ff(t,l,N,a,T,C,m)||e!==null&&e.dependencies!==null&&ui(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,C,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,C,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=C),i.props=a,i.state=C,i.context=m,a=N):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Ti(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Ql(t,e.child,null,n),t.child=Ql(t,null,l,n)):Qe(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Jt(e,t,n),e}function hs(e,t,l,a){return Ll(),t.flags|=256,Qe(e,t,l,a),t.child}var Or={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _r(e){return{baseLanes:e,cachePool:tf()}}function Dr(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=dt),e}function ms(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?ml(t):pl(),(e=Ee)?(e=Ed(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rl!==null?{id:_t,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},l=Vo(e),l.return=t,t.child=l,ke=t,Ee=null)):e=null,e===null)throw ol(t);return pc(e)?t.lanes=32:t.lanes=536870912,null}var o=a.children;return a=a.fallback,n?(pl(),n=t.mode,o=Ai({mode:"hidden",children:o},n),a=Bl(a,n,l,null),o.return=t,a.return=t,o.sibling=a,t.child=o,a=t.child,a.memoizedState=_r(l),a.childLanes=Dr(e,u,l),t.memoizedState=Or,sn(null,a)):(ml(t),wr(t,o))}var m=e.memoizedState;if(m!==null&&(o=m.dehydrated,o!==null)){if(i)t.flags&256?(ml(t),t.flags&=-257,t=Ur(e,t,l)):t.memoizedState!==null?(pl(),t.child=e.child,t.flags|=128,t=null):(pl(),o=a.fallback,n=t.mode,a=Ai({mode:"visible",children:a.children},n),o=Bl(o,n,l,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,Ql(t,e.child,null,l),a=t.child,a.memoizedState=_r(l),a.childLanes=Dr(e,u,l),t.memoizedState=Or,t=sn(null,a));else if(ml(t),pc(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var j=u.dgst;u=j,a=Error(c(419)),a.stack="",a.digest=u,Ia({value:a,source:null,stack:null}),t=Ur(e,t,l)}else if(He||da(e,t,l,!1),u=(l&e.childLanes)!==0,He||u){if(u=Se,u!==null&&(a=Ic(u,l),a!==0&&a!==m.retryLane))throw m.retryLane=a,Hl(e,a),at(u,e,a),Mr;mc(o)||Ui(),t=Ur(e,t,l)}else mc(o)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Ee=jt(o.nextSibling),ke=t,re=!0,cl=null,Et=!1,e!==null&&$o(t,e),t=wr(t,a.children),t.flags|=4096);return t}return n?(pl(),o=a.fallback,n=t.mode,m=e.child,j=m.sibling,a=kt(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,j!==null?o=kt(j,o):(o=Bl(o,n,l,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,sn(null,a),a=t.child,o=e.child.memoizedState,o===null?o=_r(l):(n=o.cachePool,n!==null?(m=we._currentValue,n=n.parent!==m?{parent:m,pool:m}:n):n=tf(),o={baseLanes:o.baseLanes|l,cachePool:n}),a.memoizedState=o,a.childLanes=Dr(e,u,l),t.memoizedState=Or,sn(e.child,a)):(ml(t),l=e.child,e=l.sibling,l=kt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function wr(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function Ur(e,t,l){return Ql(t,e.child,null,l),e=wr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ps(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Wu(e.return,t,l)}function Hr(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function vs(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Oe.current,o=(u&2)!==0;if(o?(u=u&1|2,t.flags|=128):u&=1,L(Oe,u),Qe(e,t,a,l),a=re?Fa:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ps(e,l,t);else if(e.tag===19)ps(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&mi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Hr(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&mi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Hr(t,!0,l,null,i,a);break;case"together":Hr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Jt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),yl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(da(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,l=kt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=kt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Br(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ui(e)))}function Im(e,t,l){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),fl(t,we,e.memoizedState.cache),Ll();break;case 27:case 5:Ha(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:fl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ml(t),t.flags|=128,null):(l&t.child.childLanes)!==0?ms(e,t,l):(ml(t),e=Jt(e,t,l),e!==null?e.sibling:null);ml(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(da(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return vs(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),L(Oe,Oe.current),a)break;return null;case 22:return t.lanes=0,cs(e,t,l,t.pendingProps);case 24:fl(t,we,e.memoizedState.cache)}return Jt(e,t,l)}function gs(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Br(e,l)&&(t.flags&128)===0)return He=!1,Im(e,t,l);He=(e.flags&131072)!==0}else He=!1,re&&(t.flags&1048576)!==0&&Jo(t,Fa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=kl(t.elementType),t.type=e,typeof e=="function")ku(e)?(a=Vl(e,a),t.tag=1,t=ds(null,t,e,a,l)):(t.tag=0,t=Nr(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===ye){t.tag=11,t=is(null,t,e,a,l);break e}else if(n===W){t.tag=14,t=us(null,t,e,a,l);break e}}throw t=pt(e)||e,Error(c(306,t,""))}}return t;case 0:return Nr(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Vl(a,t.pendingProps),ds(e,t,a,n,l);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,ar(e,t),un(t,a,null,l);var u=t.memoizedState;if(a=u.cache,fl(t,we,a),a!==i.cache&&Fu(t,[we],l,!0),nn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=hs(e,t,a,l);break e}else if(a!==n){n=bt(Error(c(424)),t),Ia(n),t=hs(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=jt(e.firstChild),ke=t,re=!0,cl=null,Et=!0,l=cf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ll(),a===n){t=Jt(e,t,l);break e}Qe(e,t,a,l)}t=t.child}return t;case 26:return Ti(e,t),e===null?(l=Rd(t.type,null,t.pendingProps,null))?t.memoizedState=l:re||(l=t.type,e=t.pendingProps,a=ki(le.current).createElement(l),a[Ge]=t,a[Fe]=e,Ze(a,l,e),Ye(a),t.stateNode=a):t.memoizedState=Rd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ha(t),e===null&&re&&(a=t.stateNode=Td(t.type,t.pendingProps,le.current),ke=t,Et=!0,n=Ee,zl(t.type)?(vc=n,Ee=jt(a.firstChild)):Ee=n),Qe(e,t,t.pendingProps.children,l),Ti(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=a=Ee)&&(a=Rp(a,t.type,t.pendingProps,Et),a!==null?(t.stateNode=a,ke=t,Ee=jt(a.firstChild),Et=!1,n=!0):n=!1),n||ol(t)),Ha(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,sc(n,i)?a=null:u!==null&&sc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=fr(e,t,Xm,null,null,l),An._currentValue=n),Ti(e,t),Qe(e,t,a,l),t.child;case 6:return e===null&&re&&((e=l=Ee)&&(l=Mp(l,t.pendingProps,Et),l!==null?(t.stateNode=l,ke=t,Ee=null,e=!0):e=!1),e||ol(t)),null;case 13:return ms(e,t,l);case 4:return $e(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ql(t,null,a,l):Qe(e,t,a,l),t.child;case 11:return is(e,t,t.type,t.pendingProps,l);case 7:return Qe(e,t,t.pendingProps,l),t.child;case 8:return Qe(e,t,t.pendingProps.children,l),t.child;case 12:return Qe(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,fl(t,t.type,a.value),Qe(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,ql(t),n=Xe(n),a=a(n),t.flags|=1,Qe(e,t,a,l),t.child;case 14:return us(e,t,t.type,t.pendingProps,l);case 15:return rs(e,t,t.type,t.pendingProps,l);case 19:return vs(e,t,l);case 31:return Fm(e,t,l);case 22:return cs(e,t,l,t.pendingProps);case 24:return ql(t),a=Xe(we),e===null?(n=er(),n===null&&(n=Se,i=Iu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},lr(t),fl(t,we,n)):((e.lanes&l)!==0&&(ar(e,t),un(t,null,null,l),nn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),fl(t,we,a)):(a=i.cache,fl(t,we,a),a!==n.cache&&Fu(t,[we],l,!0))),Qe(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function $t(e){e.flags|=4}function Lr(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Qs())e.flags|=8192;else throw Xl=fi,tr}else e.flags&=-16777217}function ys(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dd(t))if(Qs())e.flags|=8192;else throw Xl=fi,tr}function Ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$c():536870912,e.lanes|=t,ja|=t)}function dn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Pm(e,t,l){var a=t.pendingProps;switch(Vu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(we),Ne(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(sa(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ju())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?($t(t),i!==null?(ze(t),ys(t,i)):(ze(t),Lr(t,n,null,a,l))):i?i!==e.memoizedState?($t(t),ze(t),ys(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&$t(t),ze(t),Lr(t,n,e,a,l)),null;case 27:if(Ln(t),l=le.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&$t(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return ze(t),null}e=G.current,sa(t)?Wo(t):(e=Td(n,a,l),t.stateNode=e,$t(t))}return ze(t),null;case 5:if(Ln(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&$t(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return ze(t),null}if(i=G.current,sa(t))Wo(t);else{var u=ki(le.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Ge]=t,i[Fe]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ze(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&$t(t)}}return ze(t),Lr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&$t(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,sa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=ke,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||md(e.nodeValue,l)),e||ol(t,!0)}else e=ki(e).createTextNode(a),e[Ge]=t,t.stateNode=e}return ze(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=sa(t),l!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ge]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else l=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(c(558))}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=sa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Ge]=t}else Ll(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ci(t,t.updateQueue),ze(t),null);case 4:return Ne(),e===null&&uc(t.stateNode.containerInfo),ze(t),null;case 10:return Zt(t.type),ze(t),null;case 19:if(w(Oe),a=t.memoizedState,a===null)return ze(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)dn(a,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=mi(e),i!==null){for(t.flags|=128,dn(a,!1),e=i.updateQueue,t.updateQueue=e,Ci(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Zo(l,e),l=l.sibling;return L(Oe,Oe.current&1|2),re&&Xt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&nt()>_i&&(t.flags|=128,n=!0,dn(a,!1),t.lanes=4194304)}else{if(!n)if(e=mi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ci(t,e),dn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!re)return ze(t),null}else 2*nt()-a.renderingStartTime>_i&&l!==536870912&&(t.flags|=128,n=!0,dn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=nt(),e.sibling=null,l=Oe.current,L(Oe,n?l&1|2:l&1),re&&Xt(t,a.treeForkCount),e):(ze(t),null);case 22:case 23:return ft(t),rr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&Ci(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&w(Gl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(we),ze(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function ep(e,t){switch(Vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(we),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ln(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(c(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return w(Oe),null;case 4:return Ne(),null;case 10:return Zt(t.type),null;case 22:case 23:return ft(t),rr(),e!==null&&w(Gl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(we),null;case 25:return null;default:return null}}function bs(e,t){switch(Vu(t),t.tag){case 3:Zt(we),Ne();break;case 26:case 27:case 5:Ln(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:w(Oe);break;case 10:Zt(t.type);break;case 22:case 23:ft(t),rr(),e!==null&&w(Gl);break;case 24:Zt(we)}}function hn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(o){he(t,t.return,o)}}function vl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=t;var m=l,j=o;try{j()}catch(N){he(n,m,N)}}}a=a.next}while(a!==i)}}catch(N){he(t,t.return,N)}}function xs(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{ff(t,l)}catch(a){he(e,e.return,a)}}}function Ss(e,t,l){l.props=Vl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){he(e,t,a)}}function mn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){he(e,t,n)}}function wt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){he(e,t,n)}else l.current=null}function Es(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){he(e,e.return,n)}}function Yr(e,t,l){try{var a=e.stateNode;Ep(a,e.type,l,t),a[Fe]=t}catch(n){he(e,e.return,n)}}function zs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zl(e.type)||e.tag===4}function qr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gr(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=qt));else if(a!==4&&(a===27&&zl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Gr(e,t,l),e=e.sibling;e!==null;)Gr(e,t,l),e=e.sibling}function Ri(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&zl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ri(e,t,l),e=e.sibling;e!==null;)Ri(e,t,l),e=e.sibling}function js(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ze(t,a,l),t[Ge]=e,t[Fe]=l}catch(i){he(e,e.return,i)}}var Wt=!1,Be=!1,kr=!1,Ts=typeof WeakSet=="function"?WeakSet:Set,qe=null;function tp(e,t){if(e=e.containerInfo,oc=$i,e=Ho(e),Uu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,o=-1,m=-1,j=0,N=0,D=e,T=null;t:for(;;){for(var C;D!==l||n!==0&&D.nodeType!==3||(o=u+n),D!==i||a!==0&&D.nodeType!==3||(m=u+a),D.nodeType===3&&(u+=D.nodeValue.length),(C=D.firstChild)!==null;)T=D,D=C;for(;;){if(D===e)break t;if(T===l&&++j===n&&(o=u),T===i&&++N===a&&(m=u),(C=D.nextSibling)!==null)break;D=T,T=D.parentNode}D=C}l=o===-1||m===-1?null:{start:o,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(fc={focusedElem:e,selectionRange:l},$i=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var Y=Vl(l.type,n);e=a.getSnapshotBeforeUpdate(Y,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(V){he(l,l.return,V)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)hc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function As(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:It(e,l),a&4&&hn(5,l);break;case 1:if(It(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){he(l,l.return,u)}else{var n=Vl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){he(l,l.return,u)}}a&64&&xs(l),a&512&&mn(l,l.return);break;case 3:if(It(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{ff(e,t)}catch(u){he(l,l.return,u)}}break;case 27:t===null&&a&4&&js(l);case 26:case 5:It(e,l),t===null&&a&4&&Es(l),a&512&&mn(l,l.return);break;case 12:It(e,l);break;case 31:It(e,l),a&4&&Ms(e,l);break;case 13:It(e,l),a&4&&Ns(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=fp.bind(null,l),Np(e,l))));break;case 22:if(a=l.memoizedState!==null||Wt,!a){t=t!==null&&t.memoizedState!==null||Be,n=Wt;var i=Be;Wt=a,(Be=t)&&!i?Pt(e,l,(l.subtreeFlags&8772)!==0):It(e,l),Wt=n,Be=i}break;case 30:break;default:It(e,l)}}function Cs(e){var t=e.alternate;t!==null&&(e.alternate=null,Cs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Pe=!1;function Ft(e,t,l){for(l=l.child;l!==null;)Rs(e,t,l),l=l.sibling}function Rs(e,t,l){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Ba,l)}catch{}switch(l.tag){case 26:Be||wt(l,t),Ft(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Be||wt(l,t);var a=je,n=Pe;zl(l.type)&&(je=l.stateNode,Pe=!1),Ft(e,t,l),zn(l.stateNode),je=a,Pe=n;break;case 5:Be||wt(l,t);case 6:if(a=je,n=Pe,je=null,Ft(e,t,l),je=a,Pe=n,je!==null)if(Pe)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(l.stateNode)}catch(i){he(l,t,i)}else try{je.removeChild(l.stateNode)}catch(i){he(l,t,i)}break;case 18:je!==null&&(Pe?(e=je,xd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),_a(e)):xd(je,l.stateNode));break;case 4:a=je,n=Pe,je=l.stateNode.containerInfo,Pe=!0,Ft(e,t,l),je=a,Pe=n;break;case 0:case 11:case 14:case 15:vl(2,l,t),Be||vl(4,l,t),Ft(e,t,l);break;case 1:Be||(wt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Ss(l,t,a)),Ft(e,t,l);break;case 21:Ft(e,t,l);break;case 22:Be=(a=Be)||l.memoizedState!==null,Ft(e,t,l),Be=a;break;default:Ft(e,t,l)}}function Ms(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_a(e)}catch(l){he(t,t.return,l)}}}function Ns(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_a(e)}catch(l){he(t,t.return,l)}}function lp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ts),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ts),t;default:throw Error(c(435,e.tag))}}function Mi(e,t){var l=lp(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=sp.bind(null,e,a);a.then(n,n)}})}function et(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(zl(o.type)){je=o.stateNode,Pe=!1;break e}break;case 5:je=o.stateNode,Pe=!1;break e;case 3:case 4:je=o.stateNode.containerInfo,Pe=!0;break e}o=o.return}if(je===null)throw Error(c(160));Rs(i,u,n),je=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Os(t,e),t=t.sibling}var Rt=null;function Os(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),a&4&&(vl(3,e,e.return),hn(3,e),vl(5,e,e.return));break;case 1:et(t,e),tt(e),a&512&&(Be||l===null||wt(l,l.return)),a&64&&Wt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Rt;if(et(t,e),tt(e),a&512&&(Be||l===null||wt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[qa]||i[Ge]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,a,l),i[Ge]=e,Ye(i),a=i;break e;case"link":var u=Od("link","href",n).get(a+(l.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(o,1);break t}}i=n.createElement(a),Ze(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Od("meta","content",n).get(a+(l.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(o,1);break t}}i=n.createElement(a),Ze(i,a,l),n.head.appendChild(i);break;default:throw Error(c(468,a))}i[Ge]=e,Ye(i),a=i}e.stateNode=a}else _d(n,e.type,e.stateNode);else e.stateNode=Nd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?_d(n,e.type,e.stateNode):Nd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Yr(e,e.memoizedProps,l.memoizedProps)}break;case 27:et(t,e),tt(e),a&512&&(Be||l===null||wt(l,l.return)),l!==null&&a&4&&Yr(e,e.memoizedProps,l.memoizedProps);break;case 5:if(et(t,e),tt(e),a&512&&(Be||l===null||wt(l,l.return)),e.flags&32){n=e.stateNode;try{ta(n,"")}catch(Y){he(e,e.return,Y)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Yr(e,n,l!==null?l.memoizedProps:n)),a&1024&&(kr=!0);break;case 6:if(et(t,e),tt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(Y){he(e,e.return,Y)}}break;case 3:if(Zi=null,n=Rt,Rt=Xi(t.containerInfo),et(t,e),Rt=n,tt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{_a(t.containerInfo)}catch(Y){he(e,e.return,Y)}kr&&(kr=!1,_s(e));break;case 4:a=Rt,Rt=Xi(e.stateNode.containerInfo),et(t,e),tt(e),Rt=a;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Mi(e,a)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Oi=nt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Mi(e,a)));break;case 22:n=e.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,j=Wt,N=Be;if(Wt=j||n,Be=N||m,et(t,e),Be=N,Wt=j,tt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||m||Wt||Be||Kl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){m=l=t;try{if(i=m.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=m.stateNode;var D=m.memoizedProps.style,T=D!=null&&D.hasOwnProperty("display")?D.display:null;o.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Y){he(m,m.return,Y)}}}else if(t.tag===6){if(l===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(Y){he(m,m.return,Y)}}}else if(t.tag===18){if(l===null){m=t;try{var C=m.stateNode;n?Sd(C,!0):Sd(m.stateNode,!1)}catch(Y){he(m,m.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Mi(e,l))));break;case 19:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Mi(e,a)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(zs(a)){l=a;break}a=a.return}if(l==null)throw Error(c(160));switch(l.tag){case 27:var n=l.stateNode,i=qr(e);Ri(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(ta(u,""),l.flags&=-33);var o=qr(e);Ri(e,o,u);break;case 3:case 4:var m=l.stateNode.containerInfo,j=qr(e);Gr(e,j,m);break;default:throw Error(c(161))}}catch(N){he(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _s(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_s(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)As(e,t.alternate,t),t=t.sibling}function Kl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vl(4,t,t.return),Kl(t);break;case 1:wt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Ss(t,t.return,l),Kl(t);break;case 27:zn(t.stateNode);case 26:case 5:wt(t,t.return),Kl(t);break;case 22:t.memoizedState===null&&Kl(t);break;case 30:Kl(t);break;default:Kl(t)}e=e.sibling}}function Pt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(n,i,l),hn(4,i);break;case 1:if(Pt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){he(a,a.return,j)}if(a=i,n=a.updateQueue,n!==null){var o=a.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)of(m[n],o)}catch(j){he(a,a.return,j)}}l&&u&64&&xs(i),mn(i,i.return);break;case 27:js(i);case 26:case 5:Pt(n,i,l),l&&a===null&&u&4&&Es(i),mn(i,i.return);break;case 12:Pt(n,i,l);break;case 31:Pt(n,i,l),l&&u&4&&Ms(n,i);break;case 13:Pt(n,i,l),l&&u&4&&Ns(n,i);break;case 22:i.memoizedState===null&&Pt(n,i,l),mn(i,i.return);break;case 30:break;default:Pt(n,i,l)}t=t.sibling}}function Xr(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Pa(l))}function Qr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pa(e))}function Mt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ds(e,t,l,a),t=t.sibling}function Ds(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,l,a),n&2048&&hn(9,t);break;case 1:Mt(e,t,l,a);break;case 3:Mt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pa(e)));break;case 12:if(n&2048){Mt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){he(t,t.return,m)}}else Mt(e,t,l,a);break;case 31:Mt(e,t,l,a);break;case 13:Mt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,l,a):pn(e,t):i._visibility&2?Mt(e,t,l,a):(i._visibility|=2,Sa(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Xr(u,t);break;case 24:Mt(e,t,l,a),n&2048&&Qr(t.alternate,t);break;default:Mt(e,t,l,a)}}function Sa(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,o=l,m=a,j=u.flags;switch(u.tag){case 0:case 11:case 15:Sa(i,u,o,m,n),hn(8,u);break;case 23:break;case 22:var N=u.stateNode;u.memoizedState!==null?N._visibility&2?Sa(i,u,o,m,n):pn(i,u):(N._visibility|=2,Sa(i,u,o,m,n)),n&&j&2048&&Xr(u.alternate,u);break;case 24:Sa(i,u,o,m,n),n&&j&2048&&Qr(u.alternate,u);break;default:Sa(i,u,o,m,n)}t=t.sibling}}function pn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:pn(l,a),n&2048&&Xr(a.alternate,a);break;case 24:pn(l,a),n&2048&&Qr(a.alternate,a);break;default:pn(l,a)}t=t.sibling}}var vn=8192;function Ea(e,t,l){if(e.subtreeFlags&vn)for(e=e.child;e!==null;)ws(e,t,l),e=e.sibling}function ws(e,t,l){switch(e.tag){case 26:Ea(e,t,l),e.flags&vn&&e.memoizedState!==null&&kp(l,Rt,e.memoizedState,e.memoizedProps);break;case 5:Ea(e,t,l);break;case 3:case 4:var a=Rt;Rt=Xi(e.stateNode.containerInfo),Ea(e,t,l),Rt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=vn,vn=16777216,Ea(e,t,l),vn=a):Ea(e,t,l));break;default:Ea(e,t,l)}}function Us(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];qe=a,Bs(a,e)}Us(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hs(e),e=e.sibling}function Hs(e){switch(e.tag){case 0:case 11:case 15:gn(e),e.flags&2048&&vl(9,e,e.return);break;case 3:gn(e);break;case 12:gn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ni(e)):gn(e);break;default:gn(e)}}function Ni(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];qe=a,Bs(a,e)}Us(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vl(8,t,t.return),Ni(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Ni(t));break;default:Ni(t)}e=e.sibling}}function Bs(e,t){for(;qe!==null;){var l=qe;switch(l.tag){case 0:case 11:case 15:vl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Pa(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,qe=a;else e:for(l=e;qe!==null;){a=qe;var n=a.sibling,i=a.return;if(Cs(a),a===l){qe=null;break e}if(n!==null){n.return=i,qe=n;break e}qe=i}}}var ap={getCacheForType:function(e){var t=Xe(we),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Xe(we).controller.signal}},np=typeof WeakMap=="function"?WeakMap:Map,fe=0,Se=null,ae=null,ie=0,de=0,st=null,gl=!1,za=!1,Zr=!1,el=0,Re=0,yl=0,Jl=0,Vr=0,dt=0,ja=0,yn=null,lt=null,Kr=!1,Oi=0,Ls=0,_i=1/0,Di=null,bl=null,Le=0,xl=null,Ta=null,tl=0,Jr=0,$r=null,Ys=null,bn=0,Wr=null;function ht(){return(fe&2)!==0&&ie!==0?ie&-ie:O.T!==null?lc():Pc()}function qs(){if(dt===0)if((ie&536870912)===0||re){var e=Gn;Gn<<=1,(Gn&3932160)===0&&(Gn=262144),dt=e}else dt=536870912;return e=ot.current,e!==null&&(e.flags|=32),dt}function at(e,t,l){(e===Se&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Aa(e,0),Sl(e,ie,dt,!1)),Ya(e,l),((fe&2)===0||e!==Se)&&(e===Se&&((fe&2)===0&&(Jl|=l),Re===4&&Sl(e,ie,dt,!1)),Ut(e))}function Gs(e,t,l){if((fe&6)!==0)throw Error(c(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||La(e,t),n=a?rp(e,t):Ir(e,t,!0),i=a;do{if(n===0){za&&!a&&Sl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!ip(l)){n=Ir(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;n=yn;var m=o.current.memoizedState.isDehydrated;if(m&&(Aa(o,u).flags|=256),u=Ir(o,u,!1),u!==2){if(Zr&&!m){o.errorRecoveryDisabledLanes|=i,Jl|=i,n=4;break e}i=lt,lt=n,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Aa(e,0),Sl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Sl(a,t,dt,!gl);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Oi+300-nt(),10<n)){if(Sl(a,t,dt,!gl),Xn(a,0,!0)!==0)break e;tl=t,a.timeoutHandle=yd(ks.bind(null,a,l,lt,Di,Kr,t,dt,Jl,ja,gl,i,"Throttled",-0,0),n);break e}ks(a,l,lt,Di,Kr,t,dt,Jl,ja,gl,i,null,-0,0)}}break}while(!0);Ut(e)}function ks(e,t,l,a,n,i,u,o,m,j,N,D,T,C){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},ws(t,i,D);var Y=(i&62914560)===i?Oi-nt():(i&4194048)===i?Ls-nt():0;if(Y=Xp(D,Y),Y!==null){tl=i,e.cancelPendingCommit=Y(Ws.bind(null,e,t,i,l,a,n,u,o,m,N,D,null,T,C)),Sl(e,i,u,!j);return}}Ws(e,t,i,l,a,n,u,o,m)}function ip(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!rt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sl(e,t,l,a){t&=~Vr,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-ut(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Wc(e,l,t)}function wi(){return(fe&6)===0?(xn(0),!1):!0}function Fr(){if(ae!==null){if(de===0)var e=ae.return;else e=ae,Qt=Yl=null,hr(e),va=null,tn=0,e=ae;for(;e!==null;)bs(e.alternate,e),e=e.return;ae=null}}function Aa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Tp(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),tl=0,Fr(),Se=e,ae=l=kt(e.current,null),ie=t,de=0,st=null,gl=!1,za=La(e,t),Zr=!1,ja=dt=Vr=Jl=yl=Re=0,lt=yn=null,Kr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-ut(a),i=1<<n;t|=e[n],a&=~i}return el=t,ti(),l}function Xs(e,t){P=null,O.H=fn,t===pa||t===oi?(t=nf(),de=3):t===tr?(t=nf(),de=4):de=t===Mr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,ae===null&&(Re=1,zi(e,bt(t,e.current)))}function Qs(){var e=ot.current;return e===null?!0:(ie&4194048)===ie?zt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===zt:!1}function Zs(){var e=O.H;return O.H=fn,e===null?fn:e}function Vs(){var e=O.A;return O.A=ap,e}function Ui(){Re=4,gl||(ie&4194048)!==ie&&ot.current!==null||(za=!0),(yl&134217727)===0&&(Jl&134217727)===0||Se===null||Sl(Se,ie,dt,!1)}function Ir(e,t,l){var a=fe;fe|=2;var n=Zs(),i=Vs();(Se!==e||ie!==t)&&(Di=null,Aa(e,t)),t=!1;var u=Re;e:do try{if(de!==0&&ae!==null){var o=ae,m=st;switch(de){case 8:Fr(),u=6;break e;case 3:case 2:case 9:case 6:ot.current===null&&(t=!0);var j=de;if(de=0,st=null,Ca(e,o,m,j),l&&za){u=0;break e}break;default:j=de,de=0,st=null,Ca(e,o,m,j)}}up(),u=Re;break}catch(N){Xs(e,N)}while(!0);return t&&e.shellSuspendCounter++,Qt=Yl=null,fe=a,O.H=n,O.A=i,ae===null&&(Se=null,ie=0,ti()),u}function up(){for(;ae!==null;)Ks(ae)}function rp(e,t){var l=fe;fe|=2;var a=Zs(),n=Vs();Se!==e||ie!==t?(Di=null,_i=nt()+500,Aa(e,t)):za=La(e,t);e:do try{if(de!==0&&ae!==null){t=ae;var i=st;t:switch(de){case 1:de=0,st=null,Ca(e,t,i,1);break;case 2:case 9:if(lf(i)){de=0,st=null,Js(t);break}t=function(){de!==2&&de!==9||Se!==e||(de=7),Ut(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:lf(i)?(de=0,st=null,Js(t)):(de=0,st=null,Ca(e,t,i,7));break;case 5:var u=null;switch(ae.tag){case 26:u=ae.memoizedState;case 5:case 27:var o=ae;if(u?Dd(u):o.stateNode.complete){de=0,st=null;var m=o.sibling;if(m!==null)ae=m;else{var j=o.return;j!==null?(ae=j,Hi(j)):ae=null}break t}}de=0,st=null,Ca(e,t,i,5);break;case 6:de=0,st=null,Ca(e,t,i,6);break;case 8:Fr(),Re=6;break e;default:throw Error(c(462))}}cp();break}catch(N){Xs(e,N)}while(!0);return Qt=Yl=null,O.H=a,O.A=n,fe=l,ae!==null?0:(Se=null,ie=0,ti(),Re)}function cp(){for(;ae!==null&&!Oh();)Ks(ae)}function Ks(e){var t=gs(e.alternate,e,el);e.memoizedProps=e.pendingProps,t===null?Hi(e):ae=t}function Js(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=ss(l,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=ss(l,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:hr(t);default:bs(l,t),t=ae=Zo(t,el),t=gs(l,t,el)}e.memoizedProps=e.pendingProps,t===null?Hi(e):ae=t}function Ca(e,t,l,a){Qt=Yl=null,hr(t),va=null,tn=0;var n=t.return;try{if(Wm(e,n,t,l,ie)){Re=1,zi(e,bt(l,e.current)),ae=null;return}}catch(i){if(n!==null)throw ae=n,i;Re=1,zi(e,bt(l,e.current)),ae=null;return}t.flags&32768?(re||a===1?e=!0:za||(ie&536870912)!==0?e=!1:(gl=e=!0,(a===2||a===9||a===3||a===6)&&(a=ot.current,a!==null&&a.tag===13&&(a.flags|=16384))),$s(t,e)):Hi(t)}function Hi(e){var t=e;do{if((t.flags&32768)!==0){$s(t,gl);return}e=t.return;var l=Pm(t.alternate,t,el);if(l!==null){ae=l;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Re===0&&(Re=5)}function $s(e,t){do{var l=ep(e.alternate,e);if(l!==null){l.flags&=32767,ae=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=l}while(e!==null);Re=6,ae=null}function Ws(e,t,l,a,n,i,u,o,m){e.cancelPendingCommit=null;do Bi();while(Le!==0);if((fe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=qu,Gh(e,l,i,u,o,m),e===Se&&(ae=Se=null,ie=0),Ta=t,xl=e,tl=l,Jr=i,$r=n,Ys=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dp(Yn,function(){return td(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,n=B.p,B.p=2,u=fe,fe|=4;try{tp(e,t,l)}finally{fe=u,B.p=n,O.T=a}}Le=1,Fs(),Is(),Ps()}}function Fs(){if(Le===1){Le=0;var e=xl,t=Ta,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=O.T,O.T=null;var a=B.p;B.p=2;var n=fe;fe|=4;try{Os(t,e);var i=fc,u=Ho(e.containerInfo),o=i.focusedElem,m=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&Uo(o.ownerDocument.documentElement,o)){if(m!==null&&Uu(o)){var j=m.start,N=m.end;if(N===void 0&&(N=j),"selectionStart"in o)o.selectionStart=j,o.selectionEnd=Math.min(N,o.value.length);else{var D=o.ownerDocument||document,T=D&&D.defaultView||window;if(T.getSelection){var C=T.getSelection(),Y=o.textContent.length,V=Math.min(m.start,Y),ge=m.end===void 0?V:Math.min(m.end,Y);!C.extend&&V>ge&&(u=ge,ge=V,V=u);var b=wo(o,V),v=wo(o,ge);if(b&&v&&(C.rangeCount!==1||C.anchorNode!==b.node||C.anchorOffset!==b.offset||C.focusNode!==v.node||C.focusOffset!==v.offset)){var z=D.createRange();z.setStart(b.node,b.offset),C.removeAllRanges(),V>ge?(C.addRange(z),C.extend(v.node,v.offset)):(z.setEnd(v.node,v.offset),C.addRange(z))}}}}for(D=[],C=o;C=C.parentNode;)C.nodeType===1&&D.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<D.length;o++){var _=D[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}$i=!!oc,fc=oc=null}finally{fe=n,B.p=a,O.T=l}}e.current=t,Le=2}}function Is(){if(Le===2){Le=0;var e=xl,t=Ta,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=O.T,O.T=null;var a=B.p;B.p=2;var n=fe;fe|=4;try{As(e,t.alternate,t)}finally{fe=n,B.p=a,O.T=l}}Le=3}}function Ps(){if(Le===4||Le===3){Le=0,_h();var e=xl,t=Ta,l=tl,a=Ys;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,Ta=xl=null,ed(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(bl=null),vu(l),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Ba,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=O.T,n=B.p,B.p=2,O.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var o=a[u];i(o.value,{componentStack:o.stack})}}finally{O.T=t,B.p=n}}(tl&3)!==0&&Bi(),Ut(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Wr?bn++:(bn=0,Wr=e):bn=0,xn(0)}}function ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pa(t)))}function Bi(){return Fs(),Is(),Ps(),td()}function td(){if(Le!==5)return!1;var e=xl,t=Jr;Jr=0;var l=vu(tl),a=O.T,n=B.p;try{B.p=32>l?32:l,O.T=null,l=$r,$r=null;var i=xl,u=tl;if(Le=0,Ta=xl=null,tl=0,(fe&6)!==0)throw Error(c(331));var o=fe;if(fe|=4,Hs(i.current),Ds(i,i.current,u,l),fe=o,xn(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Ba,i)}catch{}return!0}finally{B.p=n,O.T=a,ed(e,t)}}function ld(e,t,l){t=bt(l,t),t=Rr(e.stateNode,t,2),e=hl(e,t,2),e!==null&&(Ya(e,2),Ut(e))}function he(e,t,l){if(e.tag===3)ld(e,e,l);else for(;t!==null;){if(t.tag===3){ld(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(bl===null||!bl.has(a))){e=bt(l,e),l=as(2),a=hl(t,l,2),a!==null&&(ns(l,a,t,e),Ya(a,2),Ut(a));break}}t=t.return}}function Pr(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new np;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Zr=!0,n.add(l),e=op.bind(null,e,t,l),t.then(e,e))}function op(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Se===e&&(ie&l)===l&&(Re===4||Re===3&&(ie&62914560)===ie&&300>nt()-Oi?(fe&2)===0&&Aa(e,0):Vr|=l,ja===ie&&(ja=0)),Ut(e)}function ad(e,t){t===0&&(t=$c()),e=Hl(e,t),e!==null&&(Ya(e,t),Ut(e))}function fp(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),ad(e,l)}function sp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),ad(e,l)}function dp(e,t){return du(e,t)}var Li=null,Ra=null,ec=!1,Yi=!1,tc=!1,El=0;function Ut(e){e!==Ra&&e.next===null&&(Ra===null?Li=Ra=e:Ra=Ra.next=e),Yi=!0,ec||(ec=!0,mp())}function xn(e,t){if(!tc&&Yi){tc=!0;do for(var l=!1,a=Li;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,o=a.pingedLanes;i=(1<<31-ut(42|e)+1)-1,i&=n&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,rd(a,i))}else i=ie,i=Xn(a,a===Se?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||La(a,i)||(l=!0,rd(a,i));a=a.next}while(l);tc=!1}}function hp(){nd()}function nd(){Yi=ec=!1;var e=0;El!==0&&jp()&&(e=El);for(var t=nt(),l=null,a=Li;a!==null;){var n=a.next,i=id(a,t);i===0?(a.next=null,l===null?Li=n:l.next=n,n===null&&(Ra=l)):(l=a,(e!==0||(i&3)!==0)&&(Yi=!0)),a=n}Le!==0&&Le!==5||xn(e),El!==0&&(El=0)}function id(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ut(i),o=1<<u,m=n[u];m===-1?((o&l)===0||(o&a)!==0)&&(n[u]=qh(o,t)):m<=t&&(e.expiredLanes|=o),i&=~o}if(t=Se,l=ie,l=Xn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&hu(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||La(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&hu(a),vu(l)){case 2:case 8:l=Kc;break;case 32:l=Yn;break;case 268435456:l=Jc;break;default:l=Yn}return a=ud.bind(null,e),l=du(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&hu(a),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Bi()&&e.callbackNode!==l)return null;var a=ie;return a=Xn(e,e===Se?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Gs(e,a,t),id(e,nt()),e.callbackNode!=null&&e.callbackNode===l?ud.bind(null,e):null)}function rd(e,t){if(Bi())return null;Gs(e,t,!0)}function mp(){Ap(function(){(fe&6)!==0?du(Vc,hp):nd()})}function lc(){if(El===0){var e=ha;e===0&&(e=qn,qn<<=1,(qn&261888)===0&&(qn=256)),El=e}return El}function cd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function od(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function pp(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=cd((n[Fe]||null).action),u=a.submitter;u&&(t=(t=u[Fe]||null)?cd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var o=new Fn("action","action",null,a,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(El!==0){var m=u?od(n,u):new FormData(n);Er(l,{pending:!0,data:m,method:n.method,action:i},null,m)}}else typeof i=="function"&&(o.preventDefault(),m=u?od(n,u):new FormData(n),Er(l,{pending:!0,data:m,method:n.method,action:i},i,m))},currentTarget:n}]})}}for(var ac=0;ac<Yu.length;ac++){var nc=Yu[ac],vp=nc.toLowerCase(),gp=nc[0].toUpperCase()+nc.slice(1);Ct(vp,"on"+gp)}Ct(Yo,"onAnimationEnd"),Ct(qo,"onAnimationIteration"),Ct(Go,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(Dm,"onTransitionRun"),Ct(wm,"onTransitionStart"),Ct(Um,"onTransitionCancel"),Ct(ko,"onTransitionEnd"),Pl("onMouseEnter",["mouseout","mouseover"]),Pl("onMouseLeave",["mouseout","mouseover"]),Pl("onPointerEnter",["pointerout","pointerover"]),Pl("onPointerLeave",["pointerout","pointerover"]),_l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_l("onBeforeInput",["compositionend","keypress","textInput","paste"]),_l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));function fd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var o=a[u],m=o.instance,j=o.currentTarget;if(o=o.listener,m!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=j;try{i(n)}catch(N){ei(N)}n.currentTarget=null,i=m}else for(u=0;u<a.length;u++){if(o=a[u],m=o.instance,j=o.currentTarget,o=o.listener,m!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=j;try{i(n)}catch(N){ei(N)}n.currentTarget=null,i=m}}}}function ne(e,t){var l=t[gu];l===void 0&&(l=t[gu]=new Set);var a=e+"__bubble";l.has(a)||(sd(t,e,2,!1),l.add(a))}function ic(e,t,l){var a=0;t&&(a|=4),sd(l,e,a,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function uc(e){if(!e[qi]){e[qi]=!0,lo.forEach(function(l){l!=="selectionchange"&&(yp.has(l)||ic(l,!1,e),ic(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,ic("selectionchange",!1,t))}}function sd(e,t,l,a){switch(qd(t)){case 2:var n=Vp;break;case 8:n=Kp;break;default:n=Sc}l=n.bind(null,t,l,e),n=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function rc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var o=a.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=a.return;u!==null;){var m=u.tag;if((m===3||m===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=Wl(o),u===null)return;if(m=u.tag,m===5||m===6||m===26||m===27){a=i=u;continue e}o=o.parentNode}}a=a.return}po(function(){var j=i,N=ju(l),D=[];e:{var T=Xo.get(e);if(T!==void 0){var C=Fn,Y=e;switch(e){case"keypress":if($n(l)===0)break e;case"keydown":case"keyup":C=sm;break;case"focusin":Y="focus",C=Nu;break;case"focusout":Y="blur",C=Nu;break;case"beforeblur":case"afterblur":C=Nu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=mm;break;case Yo:case qo:case Go:C=lm;break;case ko:C=vm;break;case"scroll":case"scrollend":C=Fh;break;case"wheel":C=ym;break;case"copy":case"cut":case"paste":C=nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=xo;break;case"toggle":case"beforetoggle":C=xm}var V=(t&4)!==0,ge=!V&&(e==="scroll"||e==="scrollend"),b=V?T!==null?T+"Capture":null:T;V=[];for(var v=j,z;v!==null;){var _=v;if(z=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||z===null||b===null||(_=ka(v,b),_!=null&&V.push(En(v,_,z))),ge)break;v=v.return}0<V.length&&(T=new C(T,Y,null,l,N),D.push({event:T,listeners:V}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",T&&l!==zu&&(Y=l.relatedTarget||l.fromElement)&&(Wl(Y)||Y[$l]))break e;if((C||T)&&(T=N.window===N?N:(T=N.ownerDocument)?T.defaultView||T.parentWindow:window,C?(Y=l.relatedTarget||l.toElement,C=j,Y=Y?Wl(Y):null,Y!==null&&(ge=p(Y),V=Y.tag,Y!==ge||V!==5&&V!==27&&V!==6)&&(Y=null)):(C=null,Y=j),C!==Y)){if(V=yo,_="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(V=xo,_="onPointerLeave",b="onPointerEnter",v="pointer"),ge=C==null?T:Ga(C),z=Y==null?T:Ga(Y),T=new V(_,v+"leave",C,l,N),T.target=ge,T.relatedTarget=z,_=null,Wl(N)===j&&(V=new V(b,v+"enter",Y,l,N),V.target=z,V.relatedTarget=ge,_=V),ge=_,C&&Y)t:{for(V=bp,b=C,v=Y,z=0,_=b;_;_=V(_))z++;_=0;for(var X=v;X;X=V(X))_++;for(;0<z-_;)b=V(b),z--;for(;0<_-z;)v=V(v),_--;for(;z--;){if(b===v||v!==null&&b===v.alternate){V=b;break t}b=V(b),v=V(v)}V=null}else V=null;C!==null&&dd(D,T,C,V,!1),Y!==null&&ge!==null&&dd(D,ge,Y,V,!0)}}e:{if(T=j?Ga(j):window,C=T.nodeName&&T.nodeName.toLowerCase(),C==="select"||C==="input"&&T.type==="file")var ce=Ro;else if(Ao(T))if(Mo)ce=Nm;else{ce=Rm;var k=Cm}else C=T.nodeName,!C||C.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?j&&Eu(j.elementType)&&(ce=Ro):ce=Mm;if(ce&&(ce=ce(e,j))){Co(D,ce,l,N);break e}k&&k(e,T,j),e==="focusout"&&j&&T.type==="number"&&j.memoizedProps.value!=null&&Su(T,"number",T.value)}switch(k=j?Ga(j):window,e){case"focusin":(Ao(k)||k.contentEditable==="true")&&(ia=k,Hu=j,Wa=null);break;case"focusout":Wa=Hu=ia=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Bo(D,l,N);break;case"selectionchange":if(_m)break;case"keydown":case"keyup":Bo(D,l,N)}var te;if(_u)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else na?jo(e,l)&&(ue="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ue="onCompositionStart");ue&&(So&&l.locale!=="ko"&&(na||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&na&&(te=vo()):(ul=N,Cu="value"in ul?ul.value:ul.textContent,na=!0)),k=Gi(j,ue),0<k.length&&(ue=new bo(ue,e,null,l,N),D.push({event:ue,listeners:k}),te?ue.data=te:(te=To(l),te!==null&&(ue.data=te)))),(te=Em?zm(e,l):jm(e,l))&&(ue=Gi(j,"onBeforeInput"),0<ue.length&&(k=new bo("onBeforeInput","beforeinput",null,l,N),D.push({event:k,listeners:ue}),k.data=te)),pp(D,e,j,l,N)}fd(D,t)})}function En(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Gi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=ka(e,l),n!=null&&a.unshift(En(e,n,i)),n=ka(e,t),n!=null&&a.push(En(e,n,i))),e.tag===3)return a;e=e.return}return[]}function bp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dd(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var o=l,m=o.alternate,j=o.stateNode;if(o=o.tag,m!==null&&m===a)break;o!==5&&o!==26&&o!==27||j===null||(m=j,n?(j=ka(l,i),j!=null&&u.unshift(En(l,j,m))):n||(j=ka(l,i),j!=null&&u.push(En(l,j,m)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var xp=/\r\n?/g,Sp=/\u0000|\uFFFD/g;function hd(e){return(typeof e=="string"?e:""+e).replace(xp,`
`).replace(Sp,"")}function md(e,t){return t=hd(t),hd(e)===t}function ve(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ta(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ta(e,""+a);break;case"className":Zn(e,"class",a);break;case"tabIndex":Zn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,l,a);break;case"style":ho(e,a,i);break;case"data":if(t!=="object"){Zn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Kn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&ve(e,t,"name",n.name,n,null),ve(e,t,"formEncType",n.formEncType,n,null),ve(e,t,"formMethod",n.formMethod,n,null),ve(e,t,"formTarget",n.formTarget,n,null)):(ve(e,t,"encType",n.encType,n,null),ve(e,t,"method",n.method,n,null),ve(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Kn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=qt);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Kn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Qn(e,"popover",a);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=$h.get(l)||l,Qn(e,l,a))}}function cc(e,t,l,a,n,i){switch(l){case"style":ho(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ta(e,a):(typeof a=="number"||typeof a=="bigint")&&ta(e,""+a);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"onClick":a!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ao.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[Fe]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Qn(e,l,a)}}}function Ze(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ve(e,t,i,u,l,null)}}n&&ve(e,t,"srcSet",l.srcSet,l,null),a&&ve(e,t,"src",l.src,l,null);return;case"input":ne("invalid",e);var o=i=u=n=null,m=null,j=null;for(a in l)if(l.hasOwnProperty(a)){var N=l[a];if(N!=null)switch(a){case"name":n=N;break;case"type":u=N;break;case"checked":m=N;break;case"defaultChecked":j=N;break;case"value":i=N;break;case"defaultValue":o=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:ve(e,t,a,N,l,null)}}co(e,i,o,m,j,u,n,!1);return;case"select":ne("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(o=l[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":a=o;default:ve(e,t,n,o,l,null)}t=i,l=u,e.multiple=!!a,t!=null?ea(e,!!a,t,!1):l!=null&&ea(e,!!a,l,!0);return;case"textarea":ne("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(o=l[u],o!=null))switch(u){case"value":a=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:ve(e,t,u,o,l,null)}fo(e,a,n,i);return;case"option":for(m in l)l.hasOwnProperty(m)&&(a=l[m],a!=null)&&(m==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ve(e,t,m,a,l,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(a=0;a<Sn.length;a++)ne(Sn[a],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in l)if(l.hasOwnProperty(j)&&(a=l[j],a!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ve(e,t,j,a,l,null)}return;default:if(Eu(t)){for(N in l)l.hasOwnProperty(N)&&(a=l[N],a!==void 0&&cc(e,t,N,a,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null&&ve(e,t,o,a,l,null))}function Ep(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,o=null,m=null,j=null,N=null;for(C in l){var D=l[C];if(l.hasOwnProperty(C)&&D!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":m=D;default:a.hasOwnProperty(C)||ve(e,t,C,null,a,D)}}for(var T in a){var C=a[T];if(D=l[T],a.hasOwnProperty(T)&&(C!=null||D!=null))switch(T){case"type":i=C;break;case"name":n=C;break;case"checked":j=C;break;case"defaultChecked":N=C;break;case"value":u=C;break;case"defaultValue":o=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:C!==D&&ve(e,t,T,C,a,D)}}xu(e,u,o,m,j,N,i,n);return;case"select":C=u=o=T=null;for(i in l)if(m=l[i],l.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":C=m;default:a.hasOwnProperty(i)||ve(e,t,i,null,a,m)}for(n in a)if(i=a[n],m=l[n],a.hasOwnProperty(n)&&(i!=null||m!=null))switch(n){case"value":T=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==m&&ve(e,t,n,i,a,m)}t=o,l=u,a=C,T!=null?ea(e,!!l,T,!1):!!a!=!!l&&(t!=null?ea(e,!!l,t,!0):ea(e,!!l,l?[]:"",!1));return;case"textarea":C=T=null;for(o in l)if(n=l[o],l.hasOwnProperty(o)&&n!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ve(e,t,o,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":T=n;break;case"defaultValue":C=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&ve(e,t,u,n,a,i)}oo(e,T,C);return;case"option":for(var Y in l)T=l[Y],l.hasOwnProperty(Y)&&T!=null&&!a.hasOwnProperty(Y)&&(Y==="selected"?e.selected=!1:ve(e,t,Y,null,a,T));for(m in a)T=a[m],C=l[m],a.hasOwnProperty(m)&&T!==C&&(T!=null||C!=null)&&(m==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":ve(e,t,m,T,a,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in l)T=l[V],l.hasOwnProperty(V)&&T!=null&&!a.hasOwnProperty(V)&&ve(e,t,V,null,a,T);for(j in a)if(T=a[j],C=l[j],a.hasOwnProperty(j)&&T!==C&&(T!=null||C!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:ve(e,t,j,T,a,C)}return;default:if(Eu(t)){for(var ge in l)T=l[ge],l.hasOwnProperty(ge)&&T!==void 0&&!a.hasOwnProperty(ge)&&cc(e,t,ge,void 0,a,T);for(N in a)T=a[N],C=l[N],!a.hasOwnProperty(N)||T===C||T===void 0&&C===void 0||cc(e,t,N,T,a,C);return}}for(var b in l)T=l[b],l.hasOwnProperty(b)&&T!=null&&!a.hasOwnProperty(b)&&ve(e,t,b,null,a,T);for(D in a)T=a[D],C=l[D],!a.hasOwnProperty(D)||T===C||T==null&&C==null||ve(e,t,D,T,a,C)}function pd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,o=n.duration;if(i&&o&&pd(u)){for(u=0,o=n.responseEnd,a+=1;a<l.length;a++){var m=l[a],j=m.startTime;if(j>o)break;var N=m.transferSize,D=m.initiatorType;N&&pd(D)&&(m=m.responseEnd,u+=N*(m<o?1:(o-j)/(m-j)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var oc=null,fc=null;function ki(e){return e.nodeType===9?e:e.ownerDocument}function vd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dc=null;function jp(){var e=window.event;return e&&e.type==="popstate"?e===dc?!1:(dc=e,!0):(dc=null,!1)}var yd=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,bd=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof bd<"u"?function(e){return bd.resolve(null).then(e).catch(Cp)}:yd;function Cp(e){setTimeout(function(){throw e})}function zl(e){return e==="head"}function xd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),_a(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")zn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,zn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,o=i.nodeName;i[qa]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&zn(e.ownerDocument.body);l=n}while(l);_a(t)}function Sd(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function hc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":hc(l),yu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Rp(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[qa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function Mp(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=jt(e.nextSibling),e===null))return null;return e}function Ed(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jt(e.nextSibling),e===null))return null;return e}function mc(e){return e.data==="$?"||e.data==="$~"}function pc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Np(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vc=null;function zd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return jt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Td(e,t,l){switch(t=ki(l),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function zn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yu(e)}var Tt=new Map,Ad=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ll=B.d;B.d={f:Op,r:_p,D:Dp,C:wp,L:Up,m:Hp,X:Lp,S:Bp,M:Yp};function Op(){var e=ll.f(),t=wi();return e||t}function _p(e){var t=Fl(e);t!==null&&t.tag===5&&t.type==="form"?Xf(t):ll.r(e)}var Ma=typeof document>"u"?null:document;function Cd(e,t,l){var a=Ma;if(a&&typeof t=="string"&&t){var n=gt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ad.has(n)||(Ad.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ze(t,"link",e),Ye(t),a.head.appendChild(t)))}}function Dp(e){ll.D(e),Cd("dns-prefetch",e,null)}function wp(e,t){ll.C(e,t),Cd("preconnect",e,t)}function Up(e,t,l){ll.L(e,t,l);var a=Ma;if(a&&e&&t){var n='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+gt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+gt(l.imageSizes)+'"]')):n+='[href="'+gt(e)+'"]';var i=n;switch(t){case"style":i=Na(e);break;case"script":i=Oa(e)}Tt.has(i)||(e=E({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Tt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(jn(i))||t==="script"&&a.querySelector(Tn(i))||(t=a.createElement("link"),Ze(t,"link",e),Ye(t),a.head.appendChild(t)))}}function Hp(e,t){ll.m(e,t);var l=Ma;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+gt(a)+'"][href="'+gt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Oa(e)}if(!Tt.has(i)&&(e=E({rel:"modulepreload",href:e},t),Tt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Tn(i)))return}a=l.createElement("link"),Ze(a,"link",e),Ye(a),l.head.appendChild(a)}}}function Bp(e,t,l){ll.S(e,t,l);var a=Ma;if(a&&e){var n=Il(a).hoistableStyles,i=Na(e);t=t||"default";var u=n.get(i);if(!u){var o={loading:0,preload:null};if(u=a.querySelector(jn(i)))o.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Tt.get(i))&&gc(e,l);var m=u=a.createElement("link");Ye(m),Ze(m,"link",e),m._p=new Promise(function(j,N){m.onload=j,m.onerror=N}),m.addEventListener("load",function(){o.loading|=1}),m.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Qi(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(i,u)}}}function Lp(e,t){ll.X(e,t);var l=Ma;if(l&&e){var a=Il(l).hoistableScripts,n=Oa(e),i=a.get(n);i||(i=l.querySelector(Tn(n)),i||(e=E({src:e,async:!0},t),(t=Tt.get(n))&&yc(e,t),i=l.createElement("script"),Ye(i),Ze(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Yp(e,t){ll.M(e,t);var l=Ma;if(l&&e){var a=Il(l).hoistableScripts,n=Oa(e),i=a.get(n);i||(i=l.querySelector(Tn(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&yc(e,t),i=l.createElement("script"),Ye(i),Ze(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Rd(e,t,l,a){var n=(n=le.current)?Xi(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Na(l.href),l=Il(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Na(l.href);var i=Il(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(jn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Tt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Tt.set(e,l),i||qp(n,e,l,u.state))),t&&a===null)throw Error(c(528,""));return u}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Oa(l),l=Il(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Na(e){return'href="'+gt(e)+'"'}function jn(e){return'link[rel="stylesheet"]['+e+"]"}function Md(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function qp(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ze(t,"link",l),Ye(t),e.head.appendChild(t))}function Oa(e){return'[src="'+gt(e)+'"]'}function Tn(e){return"script[async]"+e}function Nd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+gt(l.href)+'"]');if(a)return t.instance=a,Ye(a),a;var n=E({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ye(a),Ze(a,"style",n),Qi(a,l.precedence,e),t.instance=a;case"stylesheet":n=Na(l.href);var i=e.querySelector(jn(n));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;a=Md(l),(n=Tt.get(n))&&gc(a,n),i=(e.ownerDocument||e).createElement("link"),Ye(i);var u=i;return u._p=new Promise(function(o,m){u.onload=o,u.onerror=m}),Ze(i,"link",a),t.state.loading|=4,Qi(i,l.precedence,e),t.instance=i;case"script":return i=Oa(l.src),(n=e.querySelector(Tn(i)))?(t.instance=n,Ye(n),n):(a=l,(n=Tt.get(i))&&(a=E({},l),yc(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Ze(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Qi(a,l.precedence,e));return t.instance}function Qi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var o=a[u];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zi=null;function Od(e,t,l){if(Zi===null){var a=new Map,n=Zi=new Map;n.set(l,a)}else n=Zi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[qa]||i[Ge]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var o=a.get(u);o?o.push(i):a.set(u,[i])}}return a}function _d(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Gp(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kp(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Na(a.href),i=t.querySelector(jn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vi.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Ye(i);return}i=t.ownerDocument||t,a=Md(a),(n=Tt.get(n))&&gc(a,n),i=i.createElement("link"),Ye(i);var u=i;u._p=new Promise(function(o,m){u.onload=o,u.onerror=m}),Ze(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Vi.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var bc=0;function Xp(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&bc===0&&(bc=62500*zp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>bc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Vi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Qp,e),Ki=null,Vi.call(e))}function Qp(e,t){if(!(t.state.loading&4)){var l=Ki.get(e);if(l)var a=l.get(null);else{l=new Map,Ki.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Vi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var An={$$typeof:J,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Zp(e,t,l,a,n,i,u,o,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.hiddenUpdates=mu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function wd(e,t,l,a,n,i,u,o,m,j,N,D){return e=new Zp(e,t,l,u,m,j,N,D,o),t=1,i===!0&&(t|=24),i=ct(3,null,null,t),e.current=i,i.stateNode=e,t=Iu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},lr(i),e}function Ud(e){return e?(e=ca,e):ca}function Hd(e,t,l,a,n,i){n=Ud(n),a.context===null?a.context=n:a.pendingContext=n,a=dl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=hl(e,a,t),l!==null&&(at(l,e,t),an(l,e,t))}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function xc(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Ld(e){if(e.tag===13||e.tag===31){var t=Hl(e,67108864);t!==null&&at(t,e,67108864),xc(e,67108864)}}function Yd(e){if(e.tag===13||e.tag===31){var t=ht();t=pu(t);var l=Hl(e,t);l!==null&&at(l,e,t),xc(e,t)}}var $i=!0;function Vp(e,t,l,a){var n=O.T;O.T=null;var i=B.p;try{B.p=2,Sc(e,t,l,a)}finally{B.p=i,O.T=n}}function Kp(e,t,l,a){var n=O.T;O.T=null;var i=B.p;try{B.p=8,Sc(e,t,l,a)}finally{B.p=i,O.T=n}}function Sc(e,t,l,a){if($i){var n=Ec(a);if(n===null)rc(e,t,a,Wi,l),Gd(e,a);else if($p(n,e,t,l,a))a.stopPropagation();else if(Gd(e,a),t&4&&-1<Jp.indexOf(e)){for(;n!==null;){var i=Fl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ol(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var m=1<<31-ut(u);o.entanglements[1]|=m,u&=~m}Ut(i),(fe&6)===0&&(_i=nt()+500,xn(0))}}break;case 31:case 13:o=Hl(i,2),o!==null&&at(o,i,2),wi(),xc(i,2)}if(i=Ec(a),i===null&&rc(e,t,a,Wi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else rc(e,t,a,null,l)}}function Ec(e){return e=ju(e),zc(e)}var Wi=null;function zc(e){if(Wi=null,e=Wl(e),e!==null){var t=p(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=x(t),e!==null)return e;e=null}else if(l===31){if(e=R(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function qd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dh()){case Vc:return 2;case Kc:return 8;case Yn:case wh:return 32;case Jc:return 268435456;default:return 32}default:return 32}}var jc=!1,jl=null,Tl=null,Al=null,Cn=new Map,Rn=new Map,Cl=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":jl=null;break;case"dragenter":case"dragleave":Tl=null;break;case"mouseover":case"mouseout":Al=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function Mn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Fl(t),t!==null&&Ld(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function $p(e,t,l,a,n){switch(t){case"focusin":return jl=Mn(jl,e,t,l,a,n),!0;case"dragenter":return Tl=Mn(Tl,e,t,l,a,n),!0;case"mouseover":return Al=Mn(Al,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Cn.set(i,Mn(Cn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Rn.set(i,Mn(Rn.get(i)||null,e,t,l,a,n)),!0}return!1}function kd(e){var t=Wl(e.target);if(t!==null){var l=p(t);if(l!==null){if(t=l.tag,t===13){if(t=x(l),t!==null){e.blockedOn=t,eo(e.priority,function(){Yd(l)});return}}else if(t===31){if(t=R(l),t!==null){e.blockedOn=t,eo(e.priority,function(){Yd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ec(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);zu=a,l.target.dispatchEvent(a),zu=null}else return t=Fl(l),t!==null&&Ld(t),e.blockedOn=l,!1;t.shift()}return!0}function Xd(e,t,l){Fi(e)&&l.delete(t)}function Wp(){jc=!1,jl!==null&&Fi(jl)&&(jl=null),Tl!==null&&Fi(Tl)&&(Tl=null),Al!==null&&Fi(Al)&&(Al=null),Cn.forEach(Xd),Rn.forEach(Xd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,jc||(jc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Wp)))}var Pi=null;function Qd(e){Pi!==e&&(Pi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(zc(a||l)===null)continue;break}var i=Fl(l);i!==null&&(e.splice(t,3),t-=3,Er(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function _a(e){function t(m){return Ii(m,e)}jl!==null&&Ii(jl,e),Tl!==null&&Ii(Tl,e),Al!==null&&Ii(Al,e),Cn.forEach(t),Rn.forEach(t);for(var l=0;l<Cl.length;l++){var a=Cl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Cl.length&&(l=Cl[0],l.blockedOn===null);)kd(l),l.blockedOn===null&&Cl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Fe]||null;if(typeof i=="function")u||Qd(l);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Fe]||null)o=u.formAction;else if(zc(n)!==null)continue}else o=u.action;typeof o=="function"?l[a+1]=o:(l.splice(a,3),a-=3),Qd(l)}}}function Zd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Tc(e){this._internalRoot=e}eu.prototype.render=Tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var l=t.current,a=ht();Hd(l,a,e,t,null,null)},eu.prototype.unmount=Tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hd(e.current,2,null,e,null,null),wi(),t[$l]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Cl.length&&t!==0&&t<Cl[l].priority;l++);Cl.splice(l,0,e),l===0&&kd(e)}};var Vd=s.version;if(Vd!=="19.2.4")throw Error(c(527,Vd,"19.2.4"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var Fp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Ba=tu.inject(Fp),it=tu}catch{}}return On.createRoot=function(e,t){if(!h(e))throw Error(c(299));var l=!1,a="",n=Pf,i=es,u=ts;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=wd(e,1,!1,null,null,l,a,null,n,i,u,Zd),e[$l]=t.current,uc(e),new Tc(t)},On.hydrateRoot=function(e,t,l){if(!h(e))throw Error(c(299));var a=!1,n="",i=Pf,u=es,o=ts,m=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.formState!==void 0&&(m=l.formState)),t=wd(e,1,!0,t,l??null,a,n,m,i,u,o,Zd),t.context=Ud(null),l=t.current,a=ht(),a=pu(a),n=dl(a),n.callback=null,hl(l,n,a),l=a,t.current.lanes=l,Ya(t,l),Ut(t),e[$l]=t.current,uc(e),new eu(t)},On.version="19.2.4",On}var lh;function rv(){if(lh)return Rc.exports;lh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Rc.exports=uv(),Rc.exports}var cv=rv();var ah="popstate";function nh(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function ov(r={}){function s(c,h){let p=h.state?.masked,{pathname:x,search:R,hash:S}=p||c.location;return Uc("",{pathname:x,search:R,hash:S},h.state&&h.state.usr||null,h.state&&h.state.key||"default",p?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function d(c,h){return typeof h=="string"?h:wn(h)}return sv(s,d,null,r)}function Ae(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Bt(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function fv(){return Math.random().toString(36).substring(2,10)}function ih(r,s){return{usr:r.state,key:r.key,idx:s,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Uc(r,s,d=null,c,h){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?Da(s):s,state:d,key:s&&s.key||c||fv(),unstable_mask:h}}function wn({pathname:r="/",search:s="",hash:d=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Da(r){let s={};if(r){let d=r.indexOf("#");d>=0&&(s.hash=r.substring(d),r=r.substring(0,d));let c=r.indexOf("?");c>=0&&(s.search=r.substring(c),r=r.substring(0,c)),r&&(s.pathname=r)}return s}function sv(r,s,d,c={}){let{window:h=document.defaultView,v5Compat:p=!1}=c,x=h.history,R="POP",S=null,g=A();g==null&&(g=0,x.replaceState({...x.state,idx:g},""));function A(){return(x.state||{idx:null}).idx}function E(){R="POP";let H=A(),K=H==null?null:H-g;g=H,S&&S({action:R,location:q.location,delta:K})}function U(H,K){R="PUSH";let ee=nh(H)?H:Uc(q.location,H,K);g=A()+1;let J=ih(ee,g),ye=q.createHref(ee.unstable_mask||ee);try{x.pushState(J,"",ye)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;h.location.assign(ye)}p&&S&&S({action:R,location:q.location,delta:1})}function Z(H,K){R="REPLACE";let ee=nh(H)?H:Uc(q.location,H,K);g=A();let J=ih(ee,g),ye=q.createHref(ee.unstable_mask||ee);x.replaceState(J,"",ye),p&&S&&S({action:R,location:q.location,delta:0})}function Q(H){return dv(H)}let q={get action(){return R},get location(){return r(h,x)},listen(H){if(S)throw new Error("A history only accepts one active listener");return h.addEventListener(ah,E),S=H,()=>{h.removeEventListener(ah,E),S=null}},createHref(H){return s(h,H)},createURL:Q,encodeLocation(H){let K=Q(H);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:U,replace:Z,go(H){return x.go(H)}};return q}function dv(r,s=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ae(d,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:wn(r);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function sh(r,s,d="/"){return hv(r,s,d,!1)}function hv(r,s,d,c){let h=typeof s=="string"?Da(s):s,p=al(h.pathname||"/",d);if(p==null)return null;let x=dh(r);mv(x);let R=null;for(let S=0;R==null&&S<x.length;++S){let g=Tv(p);R=zv(x[S],g,c)}return R}function dh(r,s=[],d=[],c="",h=!1){let p=(x,R,S=h,g)=>{let A={relativePath:g===void 0?x.path||"":g,caseSensitive:x.caseSensitive===!0,childrenIndex:R,route:x};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(c)&&S)return;Ae(A.relativePath.startsWith(c),`Absolute route path "${A.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(c.length)}let E=Ht([c,A.relativePath]),U=d.concat(A);x.children&&x.children.length>0&&(Ae(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),dh(x.children,s,U,E,S)),!(x.path==null&&!x.index)&&s.push({path:E,score:Sv(E,x.index),routesMeta:U})};return r.forEach((x,R)=>{if(x.path===""||!x.path?.includes("?"))p(x,R);else for(let S of hh(x.path))p(x,R,!0,S)}),s}function hh(r){let s=r.split("/");if(s.length===0)return[];let[d,...c]=s,h=d.endsWith("?"),p=d.replace(/\?$/,"");if(c.length===0)return h?[p,""]:[p];let x=hh(c.join("/")),R=[];return R.push(...x.map(S=>S===""?p:[p,S].join("/"))),h&&R.push(...x),R.map(S=>r.startsWith("/")&&S===""?"/":S)}function mv(r){r.sort((s,d)=>s.score!==d.score?d.score-s.score:Ev(s.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var pv=/^:[\w-]+$/,vv=3,gv=2,yv=1,bv=10,xv=-2,uh=r=>r==="*";function Sv(r,s){let d=r.split("/"),c=d.length;return d.some(uh)&&(c+=xv),s&&(c+=gv),d.filter(h=>!uh(h)).reduce((h,p)=>h+(pv.test(p)?vv:p===""?yv:bv),c)}function Ev(r,s){return r.length===s.length&&r.slice(0,-1).every((c,h)=>c===s[h])?r[r.length-1]-s[s.length-1]:0}function zv(r,s,d=!1){let{routesMeta:c}=r,h={},p="/",x=[];for(let R=0;R<c.length;++R){let S=c[R],g=R===c.length-1,A=p==="/"?s:s.slice(p.length)||"/",E=iu({path:S.relativePath,caseSensitive:S.caseSensitive,end:g},A),U=S.route;if(!E&&g&&d&&!c[c.length-1].route.index&&(E=iu({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},A)),!E)return null;Object.assign(h,E.params),x.push({params:h,pathname:Ht([p,E.pathname]),pathnameBase:Mv(Ht([p,E.pathnameBase])),route:U}),E.pathnameBase!=="/"&&(p=Ht([p,E.pathnameBase]))}return x}function iu(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,c]=jv(r.path,r.caseSensitive,r.end),h=s.match(d);if(!h)return null;let p=h[0],x=p.replace(/(.)\/+$/,"$1"),R=h.slice(1);return{params:c.reduce((g,{paramName:A,isOptional:E},U)=>{if(A==="*"){let Q=R[U]||"";x=p.slice(0,p.length-Q.length).replace(/(.)\/+$/,"$1")}const Z=R[U];return E&&!Z?g[A]=void 0:g[A]=(Z||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:x,pattern:r}}function jv(r,s=!1,d=!0){Bt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],h="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,R,S,g,A)=>{if(c.push({paramName:R,isOptional:S!=null}),S){let E=A.charAt(g+x.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),h+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":r!==""&&r!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,s?void 0:"i"),c]}function Tv(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Bt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function al(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let d=s.endsWith("/")?s.length-1:s.length,c=r.charAt(d);return c&&c!=="/"?null:r.slice(d)||"/"}var Av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Cv(r,s="/"){let{pathname:d,search:c="",hash:h=""}=typeof r=="string"?Da(r):r,p;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?p=rh(d.substring(1),"/"):p=rh(d,s)):p=s,{pathname:p,search:Nv(c),hash:Ov(h)}}function rh(r,s){let d=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function _c(r,s,d,c){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rv(r){return r.filter((s,d)=>d===0||s.route.path&&s.route.path.length>0)}function mh(r){let s=Rv(r);return s.map((d,c)=>c===s.length-1?d.pathname:d.pathnameBase)}function Lc(r,s,d,c=!1){let h;typeof r=="string"?h=Da(r):(h={...r},Ae(!h.pathname||!h.pathname.includes("?"),_c("?","pathname","search",h)),Ae(!h.pathname||!h.pathname.includes("#"),_c("#","pathname","hash",h)),Ae(!h.search||!h.search.includes("#"),_c("#","search","hash",h)));let p=r===""||h.pathname==="",x=p?"/":h.pathname,R;if(x==null)R=d;else{let E=s.length-1;if(!c&&x.startsWith("..")){let U=x.split("/");for(;U[0]==="..";)U.shift(),E-=1;h.pathname=U.join("/")}R=E>=0?s[E]:"/"}let S=Cv(h,R),g=x&&x!=="/"&&x.endsWith("/"),A=(p||x===".")&&d.endsWith("/");return!S.pathname.endsWith("/")&&(g||A)&&(S.pathname+="/"),S}var Ht=r=>r.join("/").replace(/\/\/+/g,"/"),Mv=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Nv=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ov=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,_v=class{constructor(r,s,d,c=!1){this.status=r,this.statusText=s||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Dv(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function wv(r){return r.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ph=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function vh(r,s){let d=r;if(typeof d!="string"||!Av.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,h=!1;if(ph)try{let p=new URL(window.location.href),x=d.startsWith("//")?new URL(p.protocol+d):new URL(d),R=al(x.pathname,s);x.origin===p.origin&&R!=null?d=R+x.search+x.hash:h=!0}catch{Bt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:h,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var gh=["POST","PUT","PATCH","DELETE"];new Set(gh);var Uv=["GET",...gh];new Set(Uv);var wa=M.createContext(null);wa.displayName="DataRouter";var uu=M.createContext(null);uu.displayName="DataRouterState";var Hv=M.createContext(!1),yh=M.createContext({isTransitioning:!1});yh.displayName="ViewTransition";var Bv=M.createContext(new Map);Bv.displayName="Fetchers";var Lv=M.createContext(null);Lv.displayName="Await";var At=M.createContext(null);At.displayName="Navigation";var Un=M.createContext(null);Un.displayName="Location";var Lt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var Yc=M.createContext(null);Yc.displayName="RouteError";var bh="REACT_ROUTER_ERROR",Yv="REDIRECT",qv="ROUTE_ERROR_RESPONSE";function Gv(r){if(r.startsWith(`${bh}:${Yv}:{`))try{let s=JSON.parse(r.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function kv(r){if(r.startsWith(`${bh}:${qv}:{`))try{let s=JSON.parse(r.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new _v(s.status,s.statusText,s.data)}catch{}}function Xv(r,{relative:s}={}){Ae(Hn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=M.useContext(At),{hash:h,pathname:p,search:x}=Bn(r,{relative:s}),R=p;return d!=="/"&&(R=p==="/"?d:Ht([d,p])),c.createHref({pathname:R,search:x,hash:h})}function Hn(){return M.useContext(Un)!=null}function Ml(){return Ae(Hn(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Un).location}var xh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sh(r){M.useContext(At).static||M.useLayoutEffect(r)}function Ua(){let{isDataRoute:r}=M.useContext(Lt);return r?a0():Qv()}function Qv(){Ae(Hn(),"useNavigate() may be used only in the context of a <Router> component.");let r=M.useContext(wa),{basename:s,navigator:d}=M.useContext(At),{matches:c}=M.useContext(Lt),{pathname:h}=Ml(),p=JSON.stringify(mh(c)),x=M.useRef(!1);return Sh(()=>{x.current=!0}),M.useCallback((S,g={})=>{if(Bt(x.current,xh),!x.current)return;if(typeof S=="number"){d.go(S);return}let A=Lc(S,JSON.parse(p),h,g.relative==="path");r==null&&s!=="/"&&(A.pathname=A.pathname==="/"?s:Ht([s,A.pathname])),(g.replace?d.replace:d.push)(A,g.state,g)},[s,d,p,h,r])}M.createContext(null);function Zv(){let{matches:r}=M.useContext(Lt),s=r[r.length-1];return s?s.params:{}}function Bn(r,{relative:s}={}){let{matches:d}=M.useContext(Lt),{pathname:c}=Ml(),h=JSON.stringify(mh(d));return M.useMemo(()=>Lc(r,JSON.parse(h),c,s==="path"),[r,h,c,s])}function Vv(r,s){return Eh(r,s)}function Eh(r,s,d){Ae(Hn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=M.useContext(At),{matches:h}=M.useContext(Lt),p=h[h.length-1],x=p?p.params:{},R=p?p.pathname:"/",S=p?p.pathnameBase:"/",g=p&&p.route;{let H=g&&g.path||"";jh(R,!g||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${R}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let A=Ml(),E;if(s){let H=typeof s=="string"?Da(s):s;Ae(S==="/"||H.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${H.pathname}" was given in the \`location\` prop.`),E=H}else E=A;let U=E.pathname||"/",Z=U;if(S!=="/"){let H=S.replace(/^\//,"").split("/");Z="/"+U.replace(/^\//,"").split("/").slice(H.length).join("/")}let Q=sh(r,{pathname:Z});Bt(g||Q!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Bt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Fv(Q&&Q.map(H=>Object.assign({},H,{params:Object.assign({},x,H.params),pathname:Ht([S,c.encodeLocation?c.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?S:Ht([S,c.encodeLocation?c.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),h,d);return s&&q?M.createElement(Un.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},q):q}function Kv(){let r=l0(),s=Dv(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},x=null;return console.error("Error handled by React Router default ErrorBoundary:",r),x=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:p},"ErrorBoundary")," or"," ",M.createElement("code",{style:p},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},s),d?M.createElement("pre",{style:h},d):null,x)}var Jv=M.createElement(Kv,null),zh=class extends M.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){this.props.onError?this.props.onError(r,s):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=kv(r.digest);d&&(r=d)}let s=r!==void 0?M.createElement(Lt.Provider,{value:this.props.routeContext},M.createElement(Yc.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?M.createElement($v,{error:r},s):s}};zh.contextType=Hv;var Dc=new WeakMap;function $v({children:r,error:s}){let{basename:d}=M.useContext(At);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let c=Gv(s.digest);if(c){let h=Dc.get(s);if(h)throw h;let p=vh(c.location,d);if(ph&&!Dc.get(s))if(p.isExternal||c.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Dc.set(s,x),x}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return r}function Wv({routeContext:r,match:s,children:d}){let c=M.useContext(wa);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),M.createElement(Lt.Provider,{value:r},d)}function Fv(r,s=[],d){let c=d?.state;if(r==null){if(!c)return null;if(c.errors)r=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)r=c.matches;else return null}let h=r,p=c?.errors;if(p!=null){let A=h.findIndex(E=>E.route.id&&p?.[E.route.id]!==void 0);Ae(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,A+1))}let x=!1,R=-1;if(d&&c){x=c.renderFallback;for(let A=0;A<h.length;A++){let E=h[A];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(R=A),E.route.id){let{loaderData:U,errors:Z}=c,Q=E.route.loader&&!U.hasOwnProperty(E.route.id)&&(!Z||Z[E.route.id]===void 0);if(E.route.lazy||Q){d.isStatic&&(x=!0),R>=0?h=h.slice(0,R+1):h=[h[0]];break}}}}let S=d?.onError,g=c&&S?(A,E)=>{S(A,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:wv(c.matches),errorInfo:E})}:void 0;return h.reduceRight((A,E,U)=>{let Z,Q=!1,q=null,H=null;c&&(Z=p&&E.route.id?p[E.route.id]:void 0,q=E.route.errorElement||Jv,x&&(R<0&&U===0?(jh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,H=null):R===U&&(Q=!0,H=E.route.hydrateFallbackElement||null)));let K=s.concat(h.slice(0,U+1)),ee=()=>{let J;return Z?J=q:Q?J=H:E.route.Component?J=M.createElement(E.route.Component,null):E.route.element?J=E.route.element:J=A,M.createElement(Wv,{match:E,routeContext:{outlet:A,matches:K,isDataRoute:c!=null},children:J})};return c&&(E.route.ErrorBoundary||E.route.errorElement||U===0)?M.createElement(zh,{location:c.location,revalidation:c.revalidation,component:q,error:Z,children:ee(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:g}):ee()},null)}function qc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Iv(r){let s=M.useContext(wa);return Ae(s,qc(r)),s}function Pv(r){let s=M.useContext(uu);return Ae(s,qc(r)),s}function e0(r){let s=M.useContext(Lt);return Ae(s,qc(r)),s}function Gc(r){let s=e0(r),d=s.matches[s.matches.length-1];return Ae(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function t0(){return Gc("useRouteId")}function l0(){let r=M.useContext(Yc),s=Pv("useRouteError"),d=Gc("useRouteError");return r!==void 0?r:s.errors?.[d]}function a0(){let{router:r}=Iv("useNavigate"),s=Gc("useNavigate"),d=M.useRef(!1);return Sh(()=>{d.current=!0}),M.useCallback(async(h,p={})=>{Bt(d.current,xh),d.current&&(typeof h=="number"?await r.navigate(h):await r.navigate(h,{fromRouteId:s,...p}))},[r,s])}var ch={};function jh(r,s,d){!s&&!ch[r]&&(ch[r]=!0,Bt(!1,d))}M.memo(n0);function n0({routes:r,future:s,state:d,isStatic:c,onError:h}){return Eh(r,void 0,{state:d,isStatic:c,onError:h})}function Dn(r){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function i0({basename:r="/",children:s=null,location:d,navigationType:c="POP",navigator:h,static:p=!1,unstable_useTransitions:x}){Ae(!Hn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let R=r.replace(/^\/*/,"/"),S=M.useMemo(()=>({basename:R,navigator:h,static:p,unstable_useTransitions:x,future:{}}),[R,h,p,x]);typeof d=="string"&&(d=Da(d));let{pathname:g="/",search:A="",hash:E="",state:U=null,key:Z="default",unstable_mask:Q}=d,q=M.useMemo(()=>{let H=al(g,R);return H==null?null:{location:{pathname:H,search:A,hash:E,state:U,key:Z,unstable_mask:Q},navigationType:c}},[R,g,A,E,U,Z,c,Q]);return Bt(q!=null,`<Router basename="${R}"> is not able to match the URL "${g}${A}${E}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:M.createElement(At.Provider,{value:S},M.createElement(Un.Provider,{children:s,value:q}))}function u0({children:r,location:s}){return Vv(Hc(r),s)}function Hc(r,s=[]){let d=[];return M.Children.forEach(r,(c,h)=>{if(!M.isValidElement(c))return;let p=[...s,h];if(c.type===M.Fragment){d.push.apply(d,Hc(c.props.children,p));return}Ae(c.type===Dn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!c.props.index||!c.props.children,"An index route cannot have child routes.");let x={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(x.children=Hc(c.props.children,p)),d.push(x)}),d}var au="get",nu="application/x-www-form-urlencoded";function ru(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function r0(r){return ru(r)&&r.tagName.toLowerCase()==="button"}function c0(r){return ru(r)&&r.tagName.toLowerCase()==="form"}function o0(r){return ru(r)&&r.tagName.toLowerCase()==="input"}function f0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function s0(r,s){return r.button===0&&(!s||s==="_self")&&!f0(r)}var lu=null;function d0(){if(lu===null)try{new FormData(document.createElement("form"),0),lu=!1}catch{lu=!0}return lu}var h0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wc(r){return r!=null&&!h0.has(r)?(Bt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nu}"`),null):r}function m0(r,s){let d,c,h,p,x;if(c0(r)){let R=r.getAttribute("action");c=R?al(R,s):null,d=r.getAttribute("method")||au,h=wc(r.getAttribute("enctype"))||nu,p=new FormData(r)}else if(r0(r)||o0(r)&&(r.type==="submit"||r.type==="image")){let R=r.form;if(R==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=r.getAttribute("formaction")||R.getAttribute("action");if(c=S?al(S,s):null,d=r.getAttribute("formmethod")||R.getAttribute("method")||au,h=wc(r.getAttribute("formenctype"))||wc(R.getAttribute("enctype"))||nu,p=new FormData(R,r),!d0()){let{name:g,type:A,value:E}=r;if(A==="image"){let U=g?`${g}.`:"";p.append(`${U}x`,"0"),p.append(`${U}y`,"0")}else g&&p.append(g,E)}}else{if(ru(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=au,c=null,h=nu,x=r}return p&&h==="text/plain"&&(x=p,p=void 0),{action:c,method:d.toLowerCase(),encType:h,formData:p,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kc(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function p0(r,s,d,c){let h=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${c}`:h.pathname=`${h.pathname}.${c}`:h.pathname==="/"?h.pathname=`_root.${c}`:s&&al(h.pathname,s)==="/"?h.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${c}`,h}async function v0(r,s){if(r.id in s)return s[r.id];try{let d=await import(r.module);return s[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function g0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function y0(r,s,d){let c=await Promise.all(r.map(async h=>{let p=s.routes[h.route.id];if(p){let x=await v0(p,d);return x.links?x.links():[]}return[]}));return E0(c.flat(1).filter(g0).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function oh(r,s,d,c,h,p){let x=(S,g)=>d[g]?S.route.id!==d[g].route.id:!0,R=(S,g)=>d[g].pathname!==S.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==S.params["*"];return p==="assets"?s.filter((S,g)=>x(S,g)||R(S,g)):p==="data"?s.filter((S,g)=>{let A=c.routes[S.route.id];if(!A||!A.hasLoader)return!1;if(x(S,g)||R(S,g))return!0;if(S.route.shouldRevalidate){let E=S.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function b0(r,s,{includeHydrateFallback:d}={}){return x0(r.map(c=>{let h=s.routes[c.route.id];if(!h)return[];let p=[h.module];return h.clientActionModule&&(p=p.concat(h.clientActionModule)),h.clientLoaderModule&&(p=p.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(p=p.concat(h.hydrateFallbackModule)),h.imports&&(p=p.concat(h.imports)),p}).flat(1))}function x0(r){return[...new Set(r)]}function S0(r){let s={},d=Object.keys(r).sort();for(let c of d)s[c]=r[c];return s}function E0(r,s){let d=new Set;return new Set(s),r.reduce((c,h)=>{let p=JSON.stringify(S0(h));return d.has(p)||(d.add(p),c.push({key:p,link:h})),c},[])}function Th(){let r=M.useContext(wa);return kc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function z0(){let r=M.useContext(uu);return kc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Xc=M.createContext(void 0);Xc.displayName="FrameworkContext";function Ah(){let r=M.useContext(Xc);return kc(r,"You must render this element inside a <HydratedRouter> element"),r}function j0(r,s){let d=M.useContext(Xc),[c,h]=M.useState(!1),[p,x]=M.useState(!1),{onFocus:R,onBlur:S,onMouseEnter:g,onMouseLeave:A,onTouchStart:E}=s,U=M.useRef(null);M.useEffect(()=>{if(r==="render"&&x(!0),r==="viewport"){let q=K=>{K.forEach(ee=>{x(ee.isIntersecting)})},H=new IntersectionObserver(q,{threshold:.5});return U.current&&H.observe(U.current),()=>{H.disconnect()}}},[r]),M.useEffect(()=>{if(c){let q=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(q)}}},[c]);let Z=()=>{h(!0)},Q=()=>{h(!1),x(!1)};return d?r!=="intent"?[p,U,{}]:[p,U,{onFocus:_n(R,Z),onBlur:_n(S,Q),onMouseEnter:_n(g,Z),onMouseLeave:_n(A,Q),onTouchStart:_n(E,Z)}]:[!1,U,{}]}function _n(r,s){return d=>{r&&r(d),d.defaultPrevented||s(d)}}function T0({page:r,...s}){let{router:d}=Th(),c=M.useMemo(()=>sh(d.routes,r,d.basename),[d.routes,r,d.basename]);return c?M.createElement(C0,{page:r,matches:c,...s}):null}function A0(r){let{manifest:s,routeModules:d}=Ah(),[c,h]=M.useState([]);return M.useEffect(()=>{let p=!1;return y0(r,s,d).then(x=>{p||h(x)}),()=>{p=!0}},[r,s,d]),c}function C0({page:r,matches:s,...d}){let c=Ml(),{future:h,manifest:p,routeModules:x}=Ah(),{basename:R}=Th(),{loaderData:S,matches:g}=z0(),A=M.useMemo(()=>oh(r,s,g,p,c,"data"),[r,s,g,p,c]),E=M.useMemo(()=>oh(r,s,g,p,c,"assets"),[r,s,g,p,c]),U=M.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let q=new Set,H=!1;if(s.forEach(ee=>{let J=p.routes[ee.route.id];!J||!J.hasLoader||(!A.some(ye=>ye.route.id===ee.route.id)&&ee.route.id in S&&x[ee.route.id]?.shouldRevalidate||J.hasClientLoader?H=!0:q.add(ee.route.id))}),q.size===0)return[];let K=p0(r,R,h.unstable_trailingSlashAwareDataRequests,"data");return H&&q.size>0&&K.searchParams.set("_routes",s.filter(ee=>q.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[K.pathname+K.search]},[R,h.unstable_trailingSlashAwareDataRequests,S,c,p,A,s,r,x]),Z=M.useMemo(()=>b0(E,p),[E,p]),Q=A0(E);return M.createElement(M.Fragment,null,U.map(q=>M.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...d})),Z.map(q=>M.createElement("link",{key:q,rel:"modulepreload",href:q,...d})),Q.map(({key:q,link:H})=>M.createElement("link",{key:q,nonce:d.nonce,...H,crossOrigin:H.crossOrigin??d.crossOrigin})))}function R0(...r){return s=>{r.forEach(d=>{typeof d=="function"?d(s):d!=null&&(d.current=s)})}}var M0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{M0&&(window.__reactRouterVersion="7.13.1")}catch{}function N0({basename:r,children:s,unstable_useTransitions:d,window:c}){let h=M.useRef();h.current==null&&(h.current=ov({window:c,v5Compat:!0}));let p=h.current,[x,R]=M.useState({action:p.action,location:p.location}),S=M.useCallback(g=>{d===!1?R(g):M.startTransition(()=>R(g))},[d]);return M.useLayoutEffect(()=>p.listen(S),[p,S]),M.createElement(i0,{basename:r,children:s,location:x.location,navigationType:x.action,navigator:p,unstable_useTransitions:d})}var Ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rh=M.forwardRef(function({onClick:s,discover:d="render",prefetch:c="none",relative:h,reloadDocument:p,replace:x,unstable_mask:R,state:S,target:g,to:A,preventScrollReset:E,viewTransition:U,unstable_defaultShouldRevalidate:Z,...Q},q){let{basename:H,navigator:K,unstable_useTransitions:ee}=M.useContext(At),J=typeof A=="string"&&Ch.test(A),ye=vh(A,H);A=ye.to;let be=Xv(A,{relative:h}),Te=Ml(),W=null;if(R){let De=Lc(R,[],Te.unstable_mask?Te.unstable_mask.pathname:"/",!0);H!=="/"&&(De.pathname=De.pathname==="/"?H:Ht([H,De.pathname])),W=K.createHref(De)}let[Me,Ve,Nt]=j0(c,Q),mt=w0(A,{replace:x,unstable_mask:R,state:S,target:g,preventScrollReset:E,relative:h,viewTransition:U,unstable_defaultShouldRevalidate:Z,unstable_useTransitions:ee});function Ke(De){s&&s(De),De.defaultPrevented||mt(De)}let Ot=!(ye.isExternal||p),pt=M.createElement("a",{...Q,...Nt,href:(Ot?W:void 0)||ye.absoluteURL||be,onClick:Ot?Ke:s,ref:R0(q,Ve),target:g,"data-discover":!J&&d==="render"?"true":void 0});return Me&&!J?M.createElement(M.Fragment,null,pt,M.createElement(T0,{page:be})):pt});Rh.displayName="Link";var O0=M.forwardRef(function({"aria-current":s="page",caseSensitive:d=!1,className:c="",end:h=!1,style:p,to:x,viewTransition:R,children:S,...g},A){let E=Bn(x,{relative:g.relative}),U=Ml(),Z=M.useContext(uu),{navigator:Q,basename:q}=M.useContext(At),H=Z!=null&&Y0(E)&&R===!0,K=Q.encodeLocation?Q.encodeLocation(E).pathname:E.pathname,ee=U.pathname,J=Z&&Z.navigation&&Z.navigation.location?Z.navigation.location.pathname:null;d||(ee=ee.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&q&&(J=al(J,q)||J);const ye=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let be=ee===K||!h&&ee.startsWith(K)&&ee.charAt(ye)==="/",Te=J!=null&&(J===K||!h&&J.startsWith(K)&&J.charAt(K.length)==="/"),W={isActive:be,isPending:Te,isTransitioning:H},Me=be?s:void 0,Ve;typeof c=="function"?Ve=c(W):Ve=[c,be?"active":null,Te?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Nt=typeof p=="function"?p(W):p;return M.createElement(Rh,{...g,"aria-current":Me,className:Ve,ref:A,style:Nt,to:x,viewTransition:R},typeof S=="function"?S(W):S)});O0.displayName="NavLink";var _0=M.forwardRef(({discover:r="render",fetcherKey:s,navigate:d,reloadDocument:c,replace:h,state:p,method:x=au,action:R,onSubmit:S,relative:g,preventScrollReset:A,viewTransition:E,unstable_defaultShouldRevalidate:U,...Z},Q)=>{let{unstable_useTransitions:q}=M.useContext(At),H=B0(),K=L0(R,{relative:g}),ee=x.toLowerCase()==="get"?"get":"post",J=typeof R=="string"&&Ch.test(R),ye=be=>{if(S&&S(be),be.defaultPrevented)return;be.preventDefault();let Te=be.nativeEvent.submitter,W=Te?.getAttribute("formmethod")||x,Me=()=>H(Te||be.currentTarget,{fetcherKey:s,method:W,navigate:d,replace:h,state:p,relative:g,preventScrollReset:A,viewTransition:E,unstable_defaultShouldRevalidate:U});q&&d!==!1?M.startTransition(()=>Me()):Me()};return M.createElement("form",{ref:Q,method:ee,action:K,onSubmit:c?S:ye,...Z,"data-discover":!J&&r==="render"?"true":void 0})});_0.displayName="Form";function D0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mh(r){let s=M.useContext(wa);return Ae(s,D0(r)),s}function w0(r,{target:s,replace:d,unstable_mask:c,state:h,preventScrollReset:p,relative:x,viewTransition:R,unstable_defaultShouldRevalidate:S,unstable_useTransitions:g}={}){let A=Ua(),E=Ml(),U=Bn(r,{relative:x});return M.useCallback(Z=>{if(s0(Z,s)){Z.preventDefault();let Q=d!==void 0?d:wn(E)===wn(U),q=()=>A(r,{replace:Q,unstable_mask:c,state:h,preventScrollReset:p,relative:x,viewTransition:R,unstable_defaultShouldRevalidate:S});g?M.startTransition(()=>q()):q()}},[E,A,U,d,c,h,s,r,p,x,R,S,g])}var U0=0,H0=()=>`__${String(++U0)}__`;function B0(){let{router:r}=Mh("useSubmit"),{basename:s}=M.useContext(At),d=t0(),c=r.fetch,h=r.navigate;return M.useCallback(async(p,x={})=>{let{action:R,method:S,encType:g,formData:A,body:E}=m0(p,s);if(x.navigate===!1){let U=x.fetcherKey||H0();await c(U,d,x.action||R,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:A,body:E,formMethod:x.method||S,formEncType:x.encType||g,flushSync:x.flushSync})}else await h(x.action||R,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:A,body:E,formMethod:x.method||S,formEncType:x.encType||g,replace:x.replace,state:x.state,fromRouteId:d,flushSync:x.flushSync,viewTransition:x.viewTransition})},[c,h,s,d])}function L0(r,{relative:s}={}){let{basename:d}=M.useContext(At),c=M.useContext(Lt);Ae(c,"useFormAction must be used inside a RouteContext");let[h]=c.matches.slice(-1),p={...Bn(r||".",{relative:s})},x=Ml();if(r==null){p.search=x.search;let R=new URLSearchParams(p.search),S=R.getAll("index");if(S.some(A=>A==="")){R.delete("index"),S.filter(E=>E).forEach(E=>R.append("index",E));let A=R.toString();p.search=A?`?${A}`:""}}return(!r||r===".")&&h.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Ht([d,p.pathname])),wn(p)}function Y0(r,{relative:s}={}){let d=M.useContext(yh);Ae(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Mh("useViewTransitionState"),h=Bn(r,{relative:s});if(!d.isTransitioning)return!1;let p=al(d.currentLocation.pathname,c)||d.currentLocation.pathname,x=al(d.nextLocation.pathname,c)||d.nextLocation.pathname;return iu(h.pathname,x)!=null||iu(h.pathname,p)!=null}const q0=`
  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    height: var(--navbar-height);
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    padding: 0 2rem;
    transition: box-shadow var(--transition-slow);
    font-family: var(--font-body);
  }

  .nav.scrolled {
    box-shadow: var(--shadow-md);
  }

  .nav-inner {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
  }

  .nav-logo-mark {
    width: 32px;
    height: 32px;
    background: var(--primary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition);
  }

  .nav-logo:hover .nav-logo-mark {
    transform: rotate(-8deg) scale(1.08);
  }

  .nav-logo-mark svg {
    width: 17px;
    height: 17px;
    fill: white;
  }

  .nav-logo-text {
    font-family: var(--font-body);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text);
    white-space: nowrap;
  }

  .nav-logo-text span {
    color: var(--primary);
  }

  .nav-location {
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 5px 12px;
    cursor: pointer;
    transition: border-color var(--transition), background var(--transition);
    flex-shrink: 0;
  }

  .nav-location:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .nav-location svg {
    width: 13px;
    height: 13px;
    fill: var(--primary);
    flex-shrink: 0;
  }

  .nav-location span {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-2);
    letter-spacing: 0.01em;
  }

  .nav-location-arrow {
    fill: var(--muted) !important;
    width: 10px !important;
    height: 10px !important;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    flex: 1;
    justify-content: center;
    list-style: none;
  }

  .nav-links a {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--muted);
    padding: 0.45rem 0.85rem;
    border-radius: var(--radius-sm);
    transition: color var(--transition), background var(--transition);
    letter-spacing: 0.01em;
    text-decoration: none;
    display: block;
  }

  .nav-links a:hover {
    color: var(--text);
    background: var(--surface);
  }

  .nav-links a.active {
    color: var(--primary);
    background: var(--primary-light);
    font-weight: 600;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-shrink: 0;
  }

  .nav-worker-btn {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-2);
    padding: 0.48rem 1rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border-2);
    background: var(--bg);
    transition: all var(--transition);
    letter-spacing: 0.01em;
    white-space: nowrap;
    cursor: pointer;
    font-family: var(--font-body);
  }

  .nav-worker-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-light);
  }

  .nav-login-btn {
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    background: var(--primary);
    padding: 0.5rem 1.15rem;
    border-radius: var(--radius-md);
    border: none;
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
    box-shadow: var(--shadow-primary);
    letter-spacing: 0.01em;
    white-space: nowrap;
    cursor: pointer;
    font-family: var(--font-body);
  }

  .nav-login-btn:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 24px rgba(37,99,235,0.35);
  }

  .nav-login-btn:active {
    transform: translateY(0);
  }

  .nav-hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    padding: 4px;
    border-radius: var(--radius-sm);
    transition: background var(--transition);
    background: none;
    border: none;
    cursor: pointer;
  }

  .nav-hamburger:hover {
    background: var(--surface);
  }

  .nav-hamburger span {
    display: block;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }

  .nav-hamburger span:nth-child(1) { width: 22px; }
  .nav-hamburger span:nth-child(2) { width: 15px; }
  .nav-hamburger span:nth-child(3) { width: 22px; }

  .nav-hamburger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
    width: 22px;
  }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; }
  .nav-hamburger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
    width: 22px;
  }

  .nav-mobile {
    position: fixed;
    top: var(--navbar-height);
    left: 0; right: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 1rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    z-index: 99;
    box-shadow: var(--shadow-lg);
    transform: translateY(-6px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .nav-mobile.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .nav-mobile a {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-2);
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid var(--border);
    transition: color var(--transition);
    text-decoration: none;
    display: block;
  }

  .nav-mobile a:last-of-type { border-bottom: none; }
  .nav-mobile a:hover { color: var(--primary); }

  .nav-mobile-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border);
  }

  .nav-mobile-buttons button {
    padding: 0.75rem;
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 600;
    width: 100%;
    font-family: var(--font-body);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-right { display: none; }
    .nav-location { display: none; }
    .nav-hamburger { display: flex; }
  }

  @media (max-width: 480px) {
    .nav { padding: 0 1rem; }
  }
`,fh=["Services","How It Works","About"];function G0(){const[r,s]=M.useState(!1),[d,c]=M.useState(!1),[h,p]=M.useState("Home"),x=Ua();return M.useEffect(()=>{const R=()=>s(window.scrollY>10);return window.addEventListener("scroll",R),()=>window.removeEventListener("scroll",R)},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:q0}),f.jsx("nav",{className:`nav${r?" scrolled":""}`,children:f.jsxs("div",{className:"nav-inner",children:[f.jsxs("div",{className:"nav-logo",onClick:()=>x("/"),children:[f.jsx("div",{className:"nav-logo-mark",children:f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M13 2L4.5 13.5H11L10 22L20 10.5H13.5L13 2Z"})})}),f.jsxs("span",{className:"nav-logo-text",children:["Now",f.jsx("span",{children:"Fix"})]})]}),f.jsxs("div",{className:"nav-location",children:[f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})}),f.jsx("span",{children:"Bikaner, RJ"}),f.jsx("svg",{className:"nav-location-arrow",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M7 10l5 5 5-5z"})})]}),f.jsx("ul",{className:"nav-links",children:fh.map(R=>f.jsx("li",{children:f.jsx("a",{href:"#",className:h===R?"active":"",onClick:S=>{S.preventDefault(),p(R)},children:R})},R))}),f.jsxs("div",{className:"nav-right",children:[f.jsx("button",{className:"nav-worker-btn",onClick:()=>x("/join"),children:"Join as Worker"}),f.jsx("button",{className:"nav-login-btn",onClick:()=>x("/login"),children:"Login →"})]}),f.jsxs("button",{className:`nav-hamburger${d?" open":""}`,onClick:()=>c(R=>!R),"aria-label":"Toggle menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]})}),f.jsxs("div",{className:`nav-mobile${d?" open":""}`,children:[fh.map(R=>f.jsx("a",{href:"#",onClick:S=>{S.preventDefault(),p(R),c(!1)},children:R},R)),f.jsxs("div",{className:"nav-mobile-buttons",children:[f.jsx("button",{className:"nav-worker-btn",style:{border:"1px solid var(--border-2)",color:"var(--text-2)"},onClick:()=>{x("/join"),c(!1)},children:"Join as Worker"}),f.jsx("button",{className:"nav-login-btn",style:{background:"var(--primary)",color:"white"},onClick:()=>{x("/login"),c(!1)},children:"Login →"})]})]})]})}const k0=`
  .hero {
    padding-top: var(--navbar-height);
    background: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-inner {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 36px 1.5rem 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--primary-light);
    border: 1px solid rgba(37, 99, 235, 0.2);
    border-radius: 20px;
    padding: 4px 12px;
    margin-bottom: 20px;
  }

  .hero-badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--primary);
    animation: blink 2s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .hero-badge span {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--primary);
    letter-spacing: 0.02em;
  }

  .hero-headline {
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 5.5vw, 3.8rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.15;
    color: var(--text);
    margin-bottom: 14px;
    max-width: 640px;
    padding-bottom: 4px;
  }

  .hero-headline-gradient {
    background: linear-gradient(90deg, #2563eb 0%, #06b6d4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline;
  }

  .hero-sub {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.7;
    max-width: 380px;
    margin-bottom: 24px;
    font-weight: 400;
  }

  .hero-cta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 28px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-btn-primary {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    background: var(--primary);
    padding: 0.65rem 1.5rem;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-primary);
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
  }

  .hero-btn-primary:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(37,99,235,0.35);
  }

  .hero-btn-primary:active { transform: translateY(0); }

  .hero-btn-secondary {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-2);
    background: var(--bg);
    padding: 0.65rem 1.5rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border-2);
    cursor: pointer;
    transition: all var(--transition);
  }

  .hero-btn-secondary:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-light);
    transform: translateY(-2px);
  }

  .hero-btn-secondary:active { transform: translateY(0); }

  .hero-trust {
    display: flex;
    align-items: stretch;
    margin-bottom: 36px;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    width: 100%;
    max-width: 700px;
  }

  .hero-trust-item {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 14px 16px;
    background: var(--bg);
    transition: background var(--transition);
    position: relative;
  }

  .hero-trust-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 18%;
    height: 64%;
    width: 1px;
    background: var(--border);
  }

  .hero-trust-item:hover { background: var(--bg-2); }

  .hero-trust-icon-wrap {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .hero-trust-text { text-align: left; }

  .hero-trust-value {
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--text-2);
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .hero-trust-label {
    font-size: 0.67rem;
    color: var(--muted);
    font-weight: 500;
    line-height: 1.3;
    margin-top: 1px;
  }

  .hero-services-wrap { width: 100%; max-width: 900px; }

  .hero-services-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .hero-services-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.01em;
  }

  .hero-services-link {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--primary);
    cursor: pointer;
    border: none;
    background: none;
    font-family: var(--font-body);
    transition: opacity var(--transition);
  }

  .hero-services-link:hover { opacity: 0.7; }

  .hero-services-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
  }

  .hero-svc-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 6px 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-sm);
  }

  .hero-svc-card:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
    background: var(--primary-light);
  }

  .hero-svc-icon-wrap {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  .hero-svc-card:hover .hero-svc-icon-wrap { transform: scale(1.08); }

  .hero-svc-icon-wrap svg {
    width: 23px;
    height: 23px;
  }

  .hero-svc-name {
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--text-2);
    text-align: center;
    line-height: 1.3;
    transition: color 0.2s ease;
  }

  .hero-svc-card:hover .hero-svc-name { color: var(--primary); }

  @media (max-width: 768px) {
    .hero-services-grid { grid-template-columns: repeat(4, 1fr); gap: 8px; }
    .hero-trust-item.hidden-mobile { display: none; }
    .hero-trust { max-width: 100%; }
    .hero-trust-item { padding: 13px 12px; gap: 8px; }
  }

  @media (max-width: 520px) {
    .hero-btn-primary, .hero-btn-secondary { width: 100%; text-align: center; }
    .hero-cta { flex-direction: column; width: 100%; max-width: 300px; }
  }
`,X0=[{name:"Plumbing",color:"#eff6ff",iconColor:"#2563eb",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v4h4V6h4v2h4V4a2 2 0 0 0-2-2z"}),f.jsx("path",{d:"M4 8v10a2 2 0 0 0 2 2h3"}),f.jsx("path",{d:"M14 8v4"}),f.jsx("path",{d:"M18 12h-8"}),f.jsx("path",{d:"M18 12a4 4 0 0 1 0 8h-5"}),f.jsx("path",{d:"M11 16H9"}),f.jsx("path",{d:"M9 20v-4"})]})},{name:"Electrician",color:"#fefce8",iconColor:"#ca8a04",icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})},{name:"AC Repair",color:"#f0fdf4",iconColor:"#16a34a",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"2",y:"6",width:"20",height:"8",rx:"2"}),f.jsx("path",{d:"M7 14v4"}),f.jsx("path",{d:"M12 14v4"}),f.jsx("path",{d:"M17 14v4"}),f.jsx("path",{d:"M6 10h.01"}),f.jsx("path",{d:"M10 10h4"})]})},{name:"Cleaning",color:"#fdf4ff",iconColor:"#a21caf",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M3 22l4-1 12.5-12.5a2.12 2.12 0 0 0-3-3L4 18l-1 4z"}),f.jsx("path",{d:"M14.5 5.5l3 3"}),f.jsx("line",{x1:"8",y1:"22",x2:"8",y2:"18"}),f.jsx("line",{x1:"4",y1:"19",x2:"8",y2:"19"})]})},{name:"Carpentry",color:"#fff7ed",iconColor:"#c2410c",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M15 12l-8.5 8.5c-.83.83-2.17.83-3 0a2.12 2.12 0 0 1 0-3L12 9"}),f.jsx("path",{d:"M17.64 15L22 10.64"}),f.jsx("path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"})]})},{name:"Appliance Repair",color:"#eff6ff",iconColor:"#1d4ed8",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),f.jsx("path",{d:"M8 21h8"}),f.jsx("path",{d:"M12 17v4"}),f.jsx("path",{d:"M7 8h.01"}),f.jsx("path",{d:"M11 8h.01"})]})},{name:"Painting",color:"#fff1f2",iconColor:"#e11d48",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M18.37 2.63L14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3z"}),f.jsx("path",{d:"M9 8c-2 3-4 3.5-7 4l8 8c1-.5 3.5-2 4-7"}),f.jsx("path",{d:"M14.5 17.5L4.5 15"})]})},{name:"Pest Control",color:"#f0fdf4",iconColor:"#15803d",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M12 22c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8 4.03 8 9 8z"}),f.jsx("path",{d:"M15 9c0-1.66-1.34-3-3-3s-3 1.34-3 3"}),f.jsx("path",{d:"M9 14h6"}),f.jsx("path",{d:"M9 17h6"}),f.jsx("path",{d:"M5 9l-2-2"}),f.jsx("path",{d:"M19 9l2-2"}),f.jsx("path",{d:"M5 19l-2 2"}),f.jsx("path",{d:"M19 19l2 2"})]})}],Q0=[{value:"500+",label:"Happy Customers",bg:"#eff6ff",iconColor:"#2563eb",hideMobile:!1,icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"})})},{value:"100+",label:"Verified Workers",bg:"#f0fdf4",iconColor:"#16a34a",hideMobile:!1,icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"})})},{value:"4.8",label:"Average Rating",bg:"#fefce8",iconColor:"#ca8a04",hideMobile:!1,icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})})},{value:"Same Day",label:"Service Available",bg:"#fff7ed",iconColor:"#c2410c",hideMobile:!0,icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"})})}];function Z0(){const r=Ua();return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:k0}),f.jsx("section",{className:"hero",children:f.jsxs("div",{className:"hero-inner",children:[f.jsxs("div",{className:"hero-badge",children:[f.jsx("div",{className:"hero-badge-dot"}),f.jsx("span",{children:"Now live in Bikaner, Rajasthan"})]}),f.jsxs("h1",{className:"hero-headline",children:["Every fix,"," ",f.jsx("span",{className:"hero-headline-gradient",children:"right now."})]}),f.jsx("p",{className:"hero-sub",children:"Book trusted professionals for repairs, cleaning, electrical and more — fast and affordable."}),f.jsxs("div",{className:"hero-cta",children:[f.jsx("button",{className:"hero-btn-primary",onClick:()=>r("/login"),children:"Book a Service →"}),f.jsx("button",{className:"hero-btn-secondary",onClick:()=>r("/join"),children:"Join as Worker"})]}),f.jsx("div",{className:"hero-trust",children:Q0.map(s=>f.jsxs("div",{className:`hero-trust-item${s.hideMobile?" hidden-mobile":""}`,children:[f.jsx("div",{className:"hero-trust-icon-wrap",style:{background:s.bg},children:f.jsx("svg",{viewBox:"0 0 24 24",fill:s.iconColor,width:"17",height:"17",children:s.icon.props.children})}),f.jsxs("div",{className:"hero-trust-text",children:[f.jsx("div",{className:"hero-trust-value",children:s.value}),f.jsx("div",{className:"hero-trust-label",children:s.label})]})]},s.value))}),f.jsxs("div",{className:"hero-services-wrap",children:[f.jsxs("div",{className:"hero-services-header",children:[f.jsx("span",{className:"hero-services-title",children:"Our Services"}),f.jsx("button",{className:"hero-services-link",children:"View all →"})]}),f.jsx("div",{className:"hero-services-grid",children:X0.map(s=>f.jsxs("div",{className:"hero-svc-card",onClick:()=>r(`/service/${s.name.toLowerCase().replace(/ /g,"-")}`),children:[f.jsx("div",{className:"hero-svc-icon-wrap",style:{background:s.color,color:s.iconColor},children:s.icon}),f.jsx("span",{className:"hero-svc-name",children:s.name})]},s.name))})]})]})})]})}function V0(){return f.jsxs("div",{children:[f.jsx(G0,{}),f.jsx(Z0,{})]})}const K0=`
  .login-page {
    min-height: 100vh;
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    font-family: var(--font-body);
  }

  .login-card {
    width: 100%;
    max-width: 400px;
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-xl);
    padding: 40px 36px;
    box-shadow: var(--shadow-lg);
  }

  .login-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px;
    cursor: pointer;
  }

  .login-logo-mark {
    width: 30px;
    height: 30px;
    background: var(--primary);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-logo-mark svg {
    width: 15px;
    height: 15px;
    fill: white;
  }

  .login-logo-text {
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .login-logo-text span { color: var(--primary); }

  .login-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.03em;
    margin-bottom: 6px;
    line-height: 1.2;
  }

  .login-sub {
    font-size: 0.85rem;
    color: var(--muted);
    margin-bottom: 28px;
    line-height: 1.5;
  }

  .login-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-2);
    margin-bottom: 7px;
    letter-spacing: 0.01em;
  }

  .login-phone-wrap {
    display: flex;
    align-items: center;
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: border-color var(--transition);
    margin-bottom: 16px;
  }

  .login-phone-wrap:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-glow);
  }

  .login-phone-prefix {
    padding: 0 14px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-2);
    background: var(--bg-2);
    height: 46px;
    display: flex;
    align-items: center;
    border-right: 1.5px solid var(--border-2);
    flex-shrink: 0;
  }

  .login-phone-input {
    flex: 1;
    height: 46px;
    border: none;
    background: transparent;
    padding: 0 14px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text);
    font-family: var(--font-body);
    outline: none;
    letter-spacing: 0.03em;
  }

  .login-phone-input::placeholder { color: var(--muted-2); }

  .login-btn {
    width: 100%;
    height: 46px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
    box-shadow: var(--shadow-primary);
    letter-spacing: 0.01em;
    margin-bottom: 20px;
  }

  .login-btn:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(37,99,235,0.35);
  }

  .login-btn:active { transform: translateY(0); }

  .login-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  .login-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .login-divider-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .login-divider span {
    font-size: 0.75rem;
    color: var(--muted-2);
    font-weight: 500;
  }

  .login-worker-link {
    width: 100%;
    height: 44px;
    background: transparent;
    color: var(--text-2);
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: all var(--transition);
    letter-spacing: 0.01em;
  }

  .login-worker-link:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-light);
  }

  .login-terms {
    font-size: 0.72rem;
    color: var(--muted-2);
    text-align: center;
    line-height: 1.6;
    margin-top: 20px;
  }

  .login-terms span {
    color: var(--primary);
    cursor: pointer;
    font-weight: 500;
  }

  .login-back {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    margin-bottom: 24px;
    padding: 0;
    transition: color var(--transition);
  }

  .login-back:hover { color: var(--text); }

  /* OTP inputs */
  .otp-wrap {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
    justify-content: center;
  }

  .otp-input {
    width: 52px;
    height: 56px;
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text);
    font-family: var(--font-body);
    background: var(--bg);
    outline: none;
    transition: border-color var(--transition), box-shadow var(--transition);
    caret-color: var(--primary);
  }

  .otp-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-glow);
  }

  .otp-input.filled {
    border-color: var(--primary);
    background: var(--primary-light);
    color: var(--primary);
  }

  .otp-resend {
    text-align: center;
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 20px;
  }

  .otp-resend span {
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
  }

  .otp-phone-display {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 10px 16px;
    margin-bottom: 24px;
  }

  .otp-phone-display svg {
    width: 15px;
    height: 15px;
    fill: var(--primary);
    flex-shrink: 0;
  }

  .otp-phone-display span {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-2);
  }

  @media (max-width: 480px) {
    .login-card { padding: 32px 24px; }
    .otp-input { width: 44px; height: 50px; font-size: 1.1rem; }
  }
`;function J0(){const r=Ua(),[s,d]=M.useState(1),[c,h]=M.useState(""),[p,x]=M.useState(["","","",""]);function R(){c.length===10&&d(2)}function S(A,E){if(!/^\d*$/.test(A))return;const U=[...p];U[E]=A,x(U),A&&E<3&&document.getElementById(`otp-${E+1}`).focus()}function g(A,E){A.key==="Backspace"&&!p[E]&&E>0&&document.getElementById(`otp-${E-1}`).focus()}return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:K0}),f.jsx("div",{className:"login-page",children:f.jsxs("div",{className:"login-card",children:[f.jsxs("div",{className:"login-logo",onClick:()=>r("/"),children:[f.jsx("div",{className:"login-logo-mark",children:f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M13 2L4.5 13.5H11L10 22L20 10.5H13.5L13 2Z"})})}),f.jsxs("span",{className:"login-logo-text",children:["Now",f.jsx("span",{children:"Fix"})]})]}),s===1&&f.jsxs(f.Fragment,{children:[f.jsx("h1",{className:"login-title",children:"Login or Sign up"}),f.jsx("p",{className:"login-sub",children:"Enter your mobile number to continue"}),f.jsx("label",{className:"login-label",children:"Mobile Number"}),f.jsxs("div",{className:"login-phone-wrap",children:[f.jsx("div",{className:"login-phone-prefix",children:"🇮🇳 +91"}),f.jsx("input",{className:"login-phone-input",type:"tel",maxLength:10,placeholder:"98765 43210",value:c,onChange:A=>h(A.target.value.replace(/\D/g,"")),onKeyDown:A=>A.key==="Enter"&&R()})]}),f.jsx("button",{className:"login-btn",onClick:R,disabled:c.length!==10,children:"Send OTP →"}),f.jsxs("div",{className:"login-divider",children:[f.jsx("div",{className:"login-divider-line"}),f.jsx("span",{children:"are you a worker?"}),f.jsx("div",{className:"login-divider-line"})]}),f.jsx("button",{className:"login-worker-link",onClick:()=>r("/join"),children:"Join as a Service Worker"}),f.jsxs("p",{className:"login-terms",children:["By continuing, you agree to our"," ",f.jsx("span",{children:"Terms of Service"})," and"," ",f.jsx("span",{children:"Privacy Policy"})]})]}),s===2&&f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"login-back",onClick:()=>d(1),children:"← Back"}),f.jsx("h1",{className:"login-title",children:"Enter OTP"}),f.jsx("p",{className:"login-sub",children:"We sent a 4-digit code to"}),f.jsxs("div",{className:"otp-phone-display",children:[f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})}),f.jsxs("span",{children:["+91 ",c]})]}),f.jsx("div",{className:"otp-wrap",children:p.map((A,E)=>f.jsx("input",{id:`otp-${E}`,className:`otp-input${A?" filled":""}`,type:"tel",maxLength:1,value:A,onChange:U=>S(U.target.value,E),onKeyDown:U=>g(U,E)},E))}),f.jsxs("p",{className:"otp-resend",children:["Didn't receive the code?"," ",f.jsx("span",{onClick:()=>x(["","","",""]),children:"Resend OTP"})]}),f.jsx("button",{className:"login-btn",onClick:()=>r("/"),disabled:p.some(A=>A===""),children:"Verify & Continue →"}),f.jsx("p",{className:"login-terms",children:"OTP valid for 10 minutes only"})]})]})})]})}const $0=`
  .join-page {
    min-height: 100vh;
    background: var(--bg-2);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 1.5rem;
    font-family: var(--font-body);
  }

  .join-card {
    width: 100%;
    max-width: 520px;
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-xl);
    padding: 40px 36px;
    box-shadow: var(--shadow-lg);
  }

  .join-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
    cursor: pointer;
  }

  .join-logo-mark {
    width: 30px;
    height: 30px;
    background: var(--primary);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .join-logo-mark svg {
    width: 15px;
    height: 15px;
    fill: white;
  }

  .join-logo-text {
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .join-logo-text span { color: var(--primary); }

  .join-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.03em;
    margin-bottom: 6px;
  }

  .join-sub {
    font-size: 0.85rem;
    color: var(--muted);
    margin-bottom: 28px;
    line-height: 1.5;
  }

  /* Photo upload */
  .join-photo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }

  .join-photo-circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px dashed var(--border-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition);
    background: var(--bg-2);
    overflow: hidden;
    position: relative;
    margin-bottom: 8px;
  }

  .join-photo-circle:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .join-photo-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }

  .join-photo-circle svg {
    width: 22px;
    height: 22px;
    fill: var(--muted-2);
    margin-bottom: 4px;
  }

  .join-photo-circle span {
    font-size: 0.65rem;
    color: var(--muted-2);
    font-weight: 500;
  }

  .join-photo-label {
    font-size: 0.75rem;
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
  }

  /* Form grid */
  .join-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 14px;
  }

  .join-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 14px;
  }

  .join-field.no-margin { margin-bottom: 0; }

  .join-field label {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-2);
    letter-spacing: 0.01em;
  }

  .join-input {
    height: 44px;
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    padding: 0 14px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text);
    font-family: var(--font-body);
    background: var(--bg);
    outline: none;
    transition: border-color var(--transition), box-shadow var(--transition);
  }

  .join-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-glow);
  }

  .join-input::placeholder { color: var(--muted-2); }

  .join-select {
    height: 44px;
    border: 1.5px solid var(--border-2);
    border-radius: var(--radius-md);
    padding: 0 14px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text);
    font-family: var(--font-body);
    background: var(--bg);
    outline: none;
    cursor: pointer;
    transition: border-color var(--transition), box-shadow var(--transition);
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
  }

  .join-select:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-glow);
  }

  /* Aadhar upload */
  .join-upload-box {
    border: 1.5px dashed var(--border-2);
    border-radius: var(--radius-md);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all var(--transition);
    background: var(--bg);
    margin-bottom: 14px;
  }

  .join-upload-box:hover {
    border-color: var(--primary);
    background: var(--primary-light);
  }

  .join-upload-box.uploaded {
    border-color: var(--success);
    background: #f0fdf4;
  }

  .join-upload-box svg {
    width: 24px;
    height: 24px;
    fill: var(--muted-2);
  }

  .join-upload-box.uploaded svg { fill: var(--success); }

  .join-upload-title {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-2);
  }

  .join-upload-box.uploaded .join-upload-title { color: var(--success); }

  .join-upload-sub {
    font-size: 0.72rem;
    color: var(--muted-2);
  }

  /* Submit */
  .join-submit {
    width: 100%;
    height: 48px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
    box-shadow: var(--shadow-primary);
    letter-spacing: 0.01em;
    margin-top: 8px;
  }

  .join-submit:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(37,99,235,0.35);
  }

  .join-submit:active { transform: translateY(0); }

  .join-login-link {
    text-align: center;
    font-size: 0.8rem;
    color: var(--muted);
    margin-top: 16px;
  }

  .join-login-link span {
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
  }

  .join-section-label {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--muted-2);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 4px;
  }

  .join-divider {
    height: 1px;
    background: var(--border);
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    .join-card { padding: 28px 20px; }
    .join-row { grid-template-columns: 1fr; }
  }
`,W0=["Plumbing","Electrician","AC Repair","Home Cleaning","Carpentry","Appliance Repair","Painting","Pest Control"];function F0(){const r=Ua(),[s,d]=M.useState(null),[c,h]=M.useState(!1),[p,x]=M.useState({name:"",phone:"",category:"",experience:"",city:"Bikaner",aadhar:""});function R(A){const E=A.target.files[0];E&&d(URL.createObjectURL(E))}function S(A){A.target.files[0]&&h(!0)}function g(A,E){x(U=>({...U,[A]:E}))}return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:$0}),f.jsx("div",{className:"join-page",children:f.jsxs("div",{className:"join-card",children:[f.jsxs("div",{className:"join-logo",onClick:()=>r("/"),children:[f.jsx("div",{className:"join-logo-mark",children:f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M13 2L4.5 13.5H11L10 22L20 10.5H13.5L13 2Z"})})}),f.jsxs("span",{className:"join-logo-text",children:["Now",f.jsx("span",{children:"Fix"})]})]}),f.jsx("h1",{className:"join-title",children:"Join as a Worker"}),f.jsx("p",{className:"join-sub",children:"Fill in your details to start receiving jobs in Bikaner"}),f.jsxs("div",{className:"join-photo-wrap",children:[f.jsx("div",{className:"join-photo-circle",onClick:()=>document.getElementById("photo-input").click(),children:s?f.jsx("img",{src:s,alt:"Profile"}):f.jsxs(f.Fragment,{children:[f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"})}),f.jsx("span",{children:"Add Photo"})]})}),f.jsx("span",{className:"join-photo-label",onClick:()=>document.getElementById("photo-input").click(),children:s?"Change Photo":"Upload Profile Photo"}),f.jsx("input",{id:"photo-input",type:"file",accept:"image/*",style:{display:"none"},onChange:R})]}),f.jsx("p",{className:"join-section-label",children:"Personal Information"}),f.jsxs("div",{className:"join-row",children:[f.jsxs("div",{className:"join-field no-margin",children:[f.jsx("label",{children:"Full Name"}),f.jsx("input",{className:"join-input",type:"text",placeholder:"Ramesh Kumar",value:p.name,onChange:A=>g("name",A.target.value)})]}),f.jsxs("div",{className:"join-field no-margin",children:[f.jsx("label",{children:"Phone Number"}),f.jsx("input",{className:"join-input",type:"tel",placeholder:"98765 43210",maxLength:10,value:p.phone,onChange:A=>g("phone",A.target.value.replace(/\D/g,""))})]})]}),f.jsx("div",{className:"join-divider"}),f.jsx("p",{className:"join-section-label",children:"Work Information"}),f.jsxs("div",{className:"join-row",children:[f.jsxs("div",{className:"join-field no-margin",children:[f.jsx("label",{children:"Service Category"}),f.jsxs("select",{className:"join-select",value:p.category,onChange:A=>g("category",A.target.value),children:[f.jsx("option",{value:"",children:"Select category"}),W0.map(A=>f.jsx("option",{value:A,children:A},A))]})]}),f.jsxs("div",{className:"join-field no-margin",children:[f.jsx("label",{children:"Experience"}),f.jsxs("select",{className:"join-select",value:p.experience,onChange:A=>g("experience",A.target.value),children:[f.jsx("option",{value:"",children:"Select years"}),f.jsx("option",{value:"0-1",children:"Less than 1 year"}),f.jsx("option",{value:"1-3",children:"1 - 3 years"}),f.jsx("option",{value:"3-5",children:"3 - 5 years"}),f.jsx("option",{value:"5+",children:"5+ years"})]})]})]}),f.jsx("div",{className:"join-divider"}),f.jsx("p",{className:"join-section-label",children:"Identity Verification"}),f.jsxs("div",{className:"join-field",children:[f.jsx("label",{children:"Aadhar Card Number"}),f.jsx("input",{className:"join-input",type:"tel",placeholder:"1234 5678 9012",maxLength:14,value:p.aadhar,onChange:A=>g("aadhar",A.target.value)})]}),f.jsxs("div",{className:`join-upload-box${c?" uploaded":""}`,onClick:()=>document.getElementById("aadhar-input").click(),children:[c?f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}):f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM12 18l-4-4h2.5v-4h3v4H16l-4 4z"})}),f.jsx("span",{className:"join-upload-title",children:c?"Aadhar Card Uploaded ✓":"Upload Aadhar Card"}),f.jsx("span",{className:"join-upload-sub",children:c?"Tap to change":"JPG, PNG or PDF — max 5MB"}),f.jsx("input",{id:"aadhar-input",type:"file",accept:"image/*,.pdf",style:{display:"none"},onChange:S})]}),f.jsx("button",{className:"join-submit",onClick:()=>r("/"),children:"Submit Application →"}),f.jsxs("p",{className:"join-login-link",children:["Already registered?"," ",f.jsx("span",{onClick:()=>r("/login"),children:"Login here"})]})]})})]})}const I0=`
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
`,P0={plumbing:{color:"#eff6ff",iconColor:"#2563eb",desc:"Fast and reliable plumbing solutions",packages:[{id:1,name:"Tap / Faucet Repair",desc:"Fix leaky taps, replace washers, tighten fittings",price:199,duration:"30-45 mins",popular:!0},{id:2,name:"Pipe Leak Fix",desc:"Detect and seal pipe leaks, joint repairs",price:349,duration:"45-60 mins",popular:!1},{id:3,name:"Drain Cleaning",desc:"Unclog blocked drains, kitchen and bathroom",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Plumbing Check",desc:"Complete inspection of all plumbing points",price:499,duration:"60-90 mins",popular:!1}]},electrician:{color:"#fefce8",iconColor:"#ca8a04",desc:"Certified electrical work at your home",packages:[{id:1,name:"Switch / Socket Repair",desc:"Fix or replace faulty switches and sockets",price:149,duration:"20-30 mins",popular:!0},{id:2,name:"Fan Installation",desc:"Install ceiling or wall fan with wiring",price:249,duration:"30-45 mins",popular:!1},{id:3,name:"MCB / Fuse Repair",desc:"Fix tripping MCB, replace fuse box",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Wiring Check",desc:"Safety inspection of all electrical wiring",price:599,duration:"60-90 mins",popular:!1}]},"ac-repair":{color:"#f0fdf4",iconColor:"#16a34a",desc:"Expert AC service and maintenance",packages:[{id:1,name:"AC Service & Clean",desc:"Deep clean filters, coils and full service",price:499,duration:"60-90 mins",popular:!0},{id:2,name:"Gas Refilling",desc:"Recharge refrigerant gas to optimal level",price:1299,duration:"45-60 mins",popular:!1},{id:3,name:"AC Installation",desc:"Install new split or window AC unit",price:999,duration:"2-3 hours",popular:!1},{id:4,name:"AC Not Cooling Fix",desc:"Diagnose and fix cooling issues",price:399,duration:"45-60 mins",popular:!1}]},cleaning:{color:"#fdf4ff",iconColor:"#a21caf",desc:"Professional home cleaning services",packages:[{id:1,name:"Basic Home Clean",desc:"Sweep, mop, dust all rooms",price:399,duration:"2-3 hours",popular:!0},{id:2,name:"Deep Home Clean",desc:"Full sanitization including kitchen and bathrooms",price:799,duration:"4-5 hours",popular:!1},{id:3,name:"Kitchen Deep Clean",desc:"Degrease and clean entire kitchen",price:599,duration:"2-3 hours",popular:!1},{id:4,name:"Bathroom Cleaning",desc:"Scrub, sanitize and clean all bathrooms",price:299,duration:"1-2 hours",popular:!1}]},carpentry:{color:"#fff7ed",iconColor:"#c2410c",desc:"Skilled carpenters for all wood work",packages:[{id:1,name:"Furniture Assembly",desc:"Assemble flat-pack or new furniture",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Door Repair",desc:"Fix hinges, locks, alignment issues",price:249,duration:"30-60 mins",popular:!1},{id:3,name:"Wood Polish",desc:"Sand and polish wooden furniture",price:499,duration:"2-3 hours",popular:!1},{id:4,name:"Custom Fitting",desc:"Custom shelves, cabinets or woodwork",price:799,duration:"3-4 hours",popular:!1}]},"appliance-repair":{color:"#eff6ff",iconColor:"#1d4ed8",desc:"All home appliance repairs",packages:[{id:1,name:"Washing Machine Repair",desc:"Fix spin, drain or electrical issues",price:449,duration:"45-60 mins",popular:!0},{id:2,name:"Refrigerator Repair",desc:"Fix cooling, compressor or door seal",price:499,duration:"45-90 mins",popular:!1},{id:3,name:"Microwave Repair",desc:"Fix heating, door or electrical faults",price:349,duration:"30-45 mins",popular:!1},{id:4,name:"TV / LED Repair",desc:"Fix display, sound or power issues",price:399,duration:"45-60 mins",popular:!1}]},painting:{color:"#fff1f2",iconColor:"#e11d48",desc:"Professional home painting services",packages:[{id:1,name:"Single Room Paint",desc:"Full painting of one room walls and ceiling",price:1499,duration:"1 day",popular:!0},{id:2,name:"2-3 Room Paint",desc:"Full painting of 2-3 rooms",price:3499,duration:"2-3 days",popular:!1},{id:3,name:"Exterior Paint",desc:"Outside wall painting and waterproofing",price:4999,duration:"3-5 days",popular:!1},{id:4,name:"Texture / Design Work",desc:"Decorative texture or pattern wall finish",price:2499,duration:"2-3 days",popular:!1}]},"pest-control":{color:"#f0fdf4",iconColor:"#15803d",desc:"Safe and effective pest removal",packages:[{id:1,name:"Cockroach Control",desc:"Gel treatment for kitchen and bathrooms",price:499,duration:"45-60 mins",popular:!0},{id:2,name:"Termite Treatment",desc:"Full home anti-termite spray treatment",price:1499,duration:"2-3 hours",popular:!1},{id:3,name:"Rodent Control",desc:"Traps and repellent for rats and mice",price:799,duration:"1-2 hours",popular:!1},{id:4,name:"Full Home Pest Control",desc:"Complete treatment for all common pests",price:1999,duration:"3-4 hours",popular:!1}]}},eg={color:"#eff6ff",iconColor:"#2563eb",desc:"Professional home service",packages:[{id:1,name:"Basic Service",desc:"Standard service package",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Standard Service",desc:"Complete service package",price:499,duration:"2-3 hours",popular:!1}]};function tg(){const r=Ua(),{id:s}=Zv(),[d,c]=M.useState(1),[h,p]=M.useState(null),[x,R]=M.useState(null),S=P0[s]||eg,g=S.packages.find(U=>U.id===h);function A(U){const Z=U.target.files[0];Z&&R(URL.createObjectURL(Z))}const E=s?s.replace(/-/g," "):"Service";return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:I0}),f.jsxs("div",{className:"sd-page",children:[f.jsxs("div",{className:"sd-topbar",children:[f.jsxs("button",{className:"sd-back",onClick:()=>d===1?r("/"):c(1),children:[f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back"]}),f.jsx("span",{className:"sd-topbar-title",children:E}),f.jsx("div",{className:"sd-topbar-right"})]}),f.jsxs("div",{className:"sd-steps",children:[f.jsxs("div",{className:"sd-step",children:[f.jsx("div",{className:`sd-step-circle ${d===1?"active":"done"}`,children:d>1?"✓":"1"}),f.jsx("span",{className:`sd-step-label ${d===1?"active":"done"}`,children:"Choose Package"})]}),f.jsx("div",{className:`sd-step-line ${d>1?"done":""}`}),f.jsxs("div",{className:"sd-step",children:[f.jsx("div",{className:`sd-step-circle ${d===2?"active":""}`,children:"2"}),f.jsx("span",{className:`sd-step-label ${d===2?"active":""}`,children:"Add Photo"})]})]}),f.jsxs("div",{className:"sd-inner",children:[f.jsxs("div",{className:"sd-header-card",children:[f.jsx("div",{className:"sd-header-icon",style:{background:S.color,color:S.iconColor},children:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}),f.jsxs("div",{className:"sd-header-info",children:[f.jsx("h2",{children:E}),f.jsx("p",{children:S.desc})]})]}),d===1&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"sd-section-title",children:"Choose a Package"}),f.jsx("div",{className:"sd-packages",children:S.packages.map(U=>f.jsxs("div",{className:`sd-pkg-card ${h===U.id?"selected":""}`,onClick:()=>p(U.id),children:[f.jsx("div",{className:"sd-pkg-radio",children:f.jsx("div",{className:"sd-pkg-radio-dot"})}),f.jsxs("div",{className:"sd-pkg-info",children:[f.jsxs("div",{className:"sd-pkg-name",children:[U.name,U.popular&&f.jsx("span",{className:"sd-pkg-badge",children:"Popular"})]}),f.jsx("div",{className:"sd-pkg-desc",children:U.desc})]}),f.jsxs("div",{className:"sd-pkg-right",children:[f.jsxs("div",{className:"sd-pkg-price",children:["₹",U.price]}),f.jsx("div",{className:"sd-pkg-duration",children:U.duration})]})]},U.id))})]}),d===2&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"sd-summary",children:[f.jsxs("div",{className:"sd-summary-row",children:[f.jsx("span",{children:"Selected Package"}),f.jsx("strong",{children:g?.name})]}),f.jsx("div",{className:"sd-summary-divider"}),f.jsxs("div",{className:"sd-summary-total",children:[f.jsx("span",{children:"Total"}),f.jsxs("span",{children:["₹",g?.price]})]})]}),f.jsx("p",{className:"sd-section-title",children:"Upload a Photo (Optional)"}),x?f.jsxs("div",{className:"sd-upload-area has-image",onClick:()=>document.getElementById("gallery-input").click(),children:[f.jsx("img",{src:x,alt:"Issue",className:"sd-upload-preview"}),f.jsx("span",{className:"sd-upload-change",children:"Tap to change photo"})]}):f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"sd-upload-options",children:[f.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("camera-input").click(),children:[f.jsxs("svg",{viewBox:"0 0 24 24",children:[f.jsx("path",{d:"M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"}),f.jsx("path",{d:"M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})]}),f.jsx("span",{children:"Take Photo"})]}),f.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("gallery-input").click(),children:[f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),f.jsx("span",{children:"From Gallery"})]})]}),f.jsxs("div",{className:"sd-upload-area",onClick:()=>document.getElementById("gallery-input").click(),children:[f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"})}),f.jsx("span",{className:"sd-upload-title",children:"Upload issue photo"}),f.jsxs("span",{className:"sd-upload-sub",children:["Help the worker understand your issue better.",`
`,"Tap to upload from your device."]})]})]}),f.jsx("input",{id:"camera-input",type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:A}),f.jsx("input",{id:"gallery-input",type:"file",accept:"image/*",style:{display:"none"},onChange:A}),f.jsx("button",{className:"sd-skip-btn",onClick:()=>r("/login"),children:"Skip & Continue without photo →"})]})]}),f.jsxs("div",{className:"sd-cta",children:[f.jsx("div",{className:"sd-cta-info",children:g?f.jsxs(f.Fragment,{children:[f.jsxs("span",{className:"sd-cta-price",children:["₹",g.price]}),f.jsx("span",{className:"sd-cta-label",children:g.name})]}):f.jsx("span",{className:"sd-cta-label",children:"Select a package to continue"})}),f.jsx("button",{className:"sd-cta-btn",disabled:!h,onClick:()=>d===1?c(2):r("/login"),children:d===1?"Continue →":"Confirm Booking →"})]})]})]})}function lg(){return f.jsx(N0,{children:f.jsxs(u0,{children:[f.jsx(Dn,{path:"/",element:f.jsx(V0,{})}),f.jsx(Dn,{path:"/login",element:f.jsx(J0,{})}),f.jsx(Dn,{path:"/join",element:f.jsx(F0,{})}),f.jsx(Dn,{path:"/service/:id",element:f.jsx(tg,{})})]})})}cv.createRoot(document.getElementById("root")).render(f.jsx(M.StrictMode,{children:f.jsx(lg,{})}));
