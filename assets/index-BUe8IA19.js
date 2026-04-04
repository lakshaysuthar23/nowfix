(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function f(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(m){if(m.ep)return;m.ep=!0;const h=f(m);fetch(m.href,h)}})();var ks={exports:{}},Dn={};var em;function d0(){if(em)return Dn;em=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(c,m,h){var v=null;if(h!==void 0&&(v=""+h),m.key!==void 0&&(v=""+m.key),"key"in m){h={};for(var A in m)A!=="key"&&(h[A]=m[A])}else h=m;return m=h.ref,{$$typeof:s,type:c,key:v,ref:m!==void 0?m:null,props:h}}return Dn.Fragment=d,Dn.jsx=f,Dn.jsxs=f,Dn}var tm;function f0(){return tm||(tm=1,ks.exports=d0()),ks.exports}var r=f0(),Rs={exports:{}},P={};var am;function m0(){if(am)return P;am=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),v=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),_=Symbol.iterator;function L(b){return b===null||typeof b!="object"?null:(b=_&&b[_]||b["@@iterator"],typeof b=="function"?b:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,D={};function Y(b,U,q){this.props=b,this.context=U,this.refs=D,this.updater=q||G}Y.prototype.isReactComponent={},Y.prototype.setState=function(b,U){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,U,"setState")},Y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function X(){}X.prototype=Y.prototype;function F(b,U,q){this.props=b,this.context=U,this.refs=D,this.updater=q||G}var Z=F.prototype=new X;Z.constructor=F,k(Z,Y.prototype),Z.isPureReactComponent=!0;var ue=Array.isArray;function Se(){}var I={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function Le(b,U,q){var K=q.ref;return{$$typeof:s,type:b,key:U,ref:K!==void 0?K:null,props:q}}function rt(b,U){return Le(b.type,U,b.props)}function Je(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function Me(b){var U={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(q){return U[q]})}var ot=/\/+/g;function Ie(b,U){return typeof b=="object"&&b!==null&&b.key!=null?Me(""+b.key):U.toString(36)}function Ae(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Se,Se):(b.status="pending",b.then(function(U){b.status==="pending"&&(b.status="fulfilled",b.value=U)},function(U){b.status==="pending"&&(b.status="rejected",b.reason=U)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function R(b,U,q,K,ee){var le=typeof b;(le==="undefined"||le==="boolean")&&(b=null);var he=!1;if(b===null)he=!0;else switch(le){case"bigint":case"string":case"number":he=!0;break;case"object":switch(b.$$typeof){case s:case d:he=!0;break;case w:return he=b._init,R(he(b._payload),U,q,K,ee)}}if(he)return ee=ee(b),he=K===""?"."+Ie(b,0):K,ue(ee)?(q="",he!=null&&(q=he.replace(ot,"$&/")+"/"),R(ee,U,q,"",function(Ll){return Ll})):ee!=null&&(Je(ee)&&(ee=rt(ee,q+(ee.key==null||b&&b.key===ee.key?"":(""+ee.key).replace(ot,"$&/")+"/")+he)),U.push(ee)),1;he=0;var $e=K===""?".":K+":";if(ue(b))for(var ke=0;ke<b.length;ke++)K=b[ke],le=$e+Ie(K,ke),he+=R(K,U,q,le,ee);else if(ke=L(b),typeof ke=="function")for(b=ke.call(b),ke=0;!(K=b.next()).done;)K=K.value,le=$e+Ie(K,ke++),he+=R(K,U,q,le,ee);else if(le==="object"){if(typeof b.then=="function")return R(Ae(b),U,q,K,ee);throw U=String(b),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return he}function H(b,U,q){if(b==null)return b;var K=[],ee=0;return R(b,K,"","",function(le){return U.call(q,le,ee++)}),K}function V(b){if(b._status===-1){var U=b._result;U=U(),U.then(function(q){(b._status===0||b._status===-1)&&(b._status=1,b._result=q)},function(q){(b._status===0||b._status===-1)&&(b._status=2,b._result=q)}),b._status===-1&&(b._status=0,b._result=U)}if(b._status===1)return b._result.default;throw b._result}var me=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},ce={map:H,forEach:function(b,U,q){H(b,function(){U.apply(this,arguments)},q)},count:function(b){var U=0;return H(b,function(){U++}),U},toArray:function(b){return H(b,function(U){return U})||[]},only:function(b){if(!Je(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return P.Activity=y,P.Children=ce,P.Component=Y,P.Fragment=f,P.Profiler=m,P.PureComponent=F,P.StrictMode=c,P.Suspense=j,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,P.__COMPILER_RUNTIME={__proto__:null,c:function(b){return I.H.useMemoCache(b)}},P.cache=function(b){return function(){return b.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(b,U,q){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var K=k({},b.props),ee=b.key;if(U!=null)for(le in U.key!==void 0&&(ee=""+U.key),U)!we.call(U,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&U.ref===void 0||(K[le]=U[le]);var le=arguments.length-2;if(le===1)K.children=q;else if(1<le){for(var he=Array(le),$e=0;$e<le;$e++)he[$e]=arguments[$e+2];K.children=he}return Le(b.type,ee,K)},P.createContext=function(b){return b={$$typeof:v,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},P.createElement=function(b,U,q){var K,ee={},le=null;if(U!=null)for(K in U.key!==void 0&&(le=""+U.key),U)we.call(U,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ee[K]=U[K]);var he=arguments.length-2;if(he===1)ee.children=q;else if(1<he){for(var $e=Array(he),ke=0;ke<he;ke++)$e[ke]=arguments[ke+2];ee.children=$e}if(b&&b.defaultProps)for(K in he=b.defaultProps,he)ee[K]===void 0&&(ee[K]=he[K]);return Le(b,le,ee)},P.createRef=function(){return{current:null}},P.forwardRef=function(b){return{$$typeof:A,render:b}},P.isValidElement=Je,P.lazy=function(b){return{$$typeof:w,_payload:{_status:-1,_result:b},_init:V}},P.memo=function(b,U){return{$$typeof:p,type:b,compare:U===void 0?null:U}},P.startTransition=function(b){var U=I.T,q={};I.T=q;try{var K=b(),ee=I.S;ee!==null&&ee(q,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(Se,me)}catch(le){me(le)}finally{U!==null&&q.types!==null&&(U.types=q.types),I.T=U}},P.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},P.use=function(b){return I.H.use(b)},P.useActionState=function(b,U,q){return I.H.useActionState(b,U,q)},P.useCallback=function(b,U){return I.H.useCallback(b,U)},P.useContext=function(b){return I.H.useContext(b)},P.useDebugValue=function(){},P.useDeferredValue=function(b,U){return I.H.useDeferredValue(b,U)},P.useEffect=function(b,U){return I.H.useEffect(b,U)},P.useEffectEvent=function(b){return I.H.useEffectEvent(b)},P.useId=function(){return I.H.useId()},P.useImperativeHandle=function(b,U,q){return I.H.useImperativeHandle(b,U,q)},P.useInsertionEffect=function(b,U){return I.H.useInsertionEffect(b,U)},P.useLayoutEffect=function(b,U){return I.H.useLayoutEffect(b,U)},P.useMemo=function(b,U){return I.H.useMemo(b,U)},P.useOptimistic=function(b,U){return I.H.useOptimistic(b,U)},P.useReducer=function(b,U,q){return I.H.useReducer(b,U,q)},P.useRef=function(b){return I.H.useRef(b)},P.useState=function(b){return I.H.useState(b)},P.useSyncExternalStore=function(b,U,q){return I.H.useSyncExternalStore(b,U,q)},P.useTransition=function(){return I.H.useTransition()},P.version="19.2.4",P}var lm;function Gs(){return lm||(lm=1,Rs.exports=m0()),Rs.exports}var E=Gs(),Ds={exports:{}},Mn={},Ms={exports:{}},_s={};var nm;function p0(){return nm||(nm=1,(function(s){function d(R,H){var V=R.length;R.push(H);e:for(;0<V;){var me=V-1>>>1,ce=R[me];if(0<m(ce,H))R[me]=H,R[V]=ce,V=me;else break e}}function f(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var H=R[0],V=R.pop();if(V!==H){R[0]=V;e:for(var me=0,ce=R.length,b=ce>>>1;me<b;){var U=2*(me+1)-1,q=R[U],K=U+1,ee=R[K];if(0>m(q,V))K<ce&&0>m(ee,q)?(R[me]=ee,R[K]=V,me=K):(R[me]=q,R[U]=V,me=U);else if(K<ce&&0>m(ee,V))R[me]=ee,R[K]=V,me=K;else break e}}return H}function m(R,H){var V=R.sortIndex-H.sortIndex;return V!==0?V:R.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var v=Date,A=v.now();s.unstable_now=function(){return v.now()-A}}var j=[],p=[],w=1,y=null,_=3,L=!1,G=!1,k=!1,D=!1,Y=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function Z(R){for(var H=f(p);H!==null;){if(H.callback===null)c(p);else if(H.startTime<=R)c(p),H.sortIndex=H.expirationTime,d(j,H);else break;H=f(p)}}function ue(R){if(k=!1,Z(R),!G)if(f(j)!==null)G=!0,Se||(Se=!0,Me());else{var H=f(p);H!==null&&Ae(ue,H.startTime-R)}}var Se=!1,I=-1,we=5,Le=-1;function rt(){return D?!0:!(s.unstable_now()-Le<we)}function Je(){if(D=!1,Se){var R=s.unstable_now();Le=R;var H=!0;try{e:{G=!1,k&&(k=!1,X(I),I=-1),L=!0;var V=_;try{t:{for(Z(R),y=f(j);y!==null&&!(y.expirationTime>R&&rt());){var me=y.callback;if(typeof me=="function"){y.callback=null,_=y.priorityLevel;var ce=me(y.expirationTime<=R);if(R=s.unstable_now(),typeof ce=="function"){y.callback=ce,Z(R),H=!0;break t}y===f(j)&&c(j),Z(R)}else c(j);y=f(j)}if(y!==null)H=!0;else{var b=f(p);b!==null&&Ae(ue,b.startTime-R),H=!1}}break e}finally{y=null,_=V,L=!1}H=void 0}}finally{H?Me():Se=!1}}}var Me;if(typeof F=="function")Me=function(){F(Je)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,Ie=ot.port2;ot.port1.onmessage=Je,Me=function(){Ie.postMessage(null)}}else Me=function(){Y(Je,0)};function Ae(R,H){I=Y(function(){R(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(R){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var V=_;_=H;try{return R()}finally{_=V}},s.unstable_requestPaint=function(){D=!0},s.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=_;_=R;try{return H()}finally{_=V}},s.unstable_scheduleCallback=function(R,H,V){var me=s.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?me+V:me):V=me,R){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=V+ce,R={id:w++,callback:H,priorityLevel:R,startTime:V,expirationTime:ce,sortIndex:-1},V>me?(R.sortIndex=V,d(p,R),f(j)===null&&R===f(p)&&(k?(X(I),I=-1):k=!0,Ae(ue,V-me))):(R.sortIndex=ce,d(j,R),G||L||(G=!0,Se||(Se=!0,Me()))),R},s.unstable_shouldYield=rt,s.unstable_wrapCallback=function(R){var H=_;return function(){var V=_;_=H;try{return R.apply(this,arguments)}finally{_=V}}}})(_s)),_s}var im;function h0(){return im||(im=1,Ms.exports=p0()),Ms.exports}var Os={exports:{}},Ke={};var rm;function g0(){if(rm)return Ke;rm=1;var s=Gs();function d(j){var p="https://react.dev/errors/"+j;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)p+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+j+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(j,p,w){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:y==null?null:""+y,children:j,containerInfo:p,implementation:w}}var v=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(j,p){if(j==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ke.createPortal=function(j,p){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(d(299));return h(j,p,null,w)},Ke.flushSync=function(j){var p=v.T,w=c.p;try{if(v.T=null,c.p=2,j)return j()}finally{v.T=p,c.p=w,c.d.f()}},Ke.preconnect=function(j,p){typeof j=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(j,p))},Ke.prefetchDNS=function(j){typeof j=="string"&&c.d.D(j)},Ke.preinit=function(j,p){if(typeof j=="string"&&p&&typeof p.as=="string"){var w=p.as,y=A(w,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;w==="style"?c.d.S(j,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:L}):w==="script"&&c.d.X(j,{crossOrigin:y,integrity:_,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ke.preinitModule=function(j,p){if(typeof j=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var w=A(p.as,p.crossOrigin);c.d.M(j,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(j)},Ke.preload=function(j,p){if(typeof j=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var w=p.as,y=A(w,p.crossOrigin);c.d.L(j,w,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ke.preloadModule=function(j,p){if(typeof j=="string")if(p){var w=A(p.as,p.crossOrigin);c.d.m(j,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(j)},Ke.requestFormReset=function(j){c.d.r(j)},Ke.unstable_batchedUpdates=function(j,p){return j(p)},Ke.useFormState=function(j,p,w){return v.H.useFormState(j,p,w)},Ke.useFormStatus=function(){return v.H.useHostTransitionStatus()},Ke.version="19.2.4",Ke}var om;function v0(){if(om)return Os.exports;om=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Os.exports=g0(),Os.exports}var sm;function x0(){if(sm)return Mn;sm=1;var s=h0(),d=Gs(),f=v0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(h(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return j(n),e;if(i===l)return j(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,u=n.child;u;){if(u===a){o=!0,a=n,l=i;break}if(u===l){o=!0,l=n,a=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===a){o=!0,a=i,l=n;break}if(u===l){o=!0,l=i,a=n;break}u=u.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,_=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),F=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Le=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),Je=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=Je&&e[Je]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function Ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case Y:return"Profiler";case D:return"StrictMode";case ue:return"Suspense";case Se:return"SuspenseList";case Le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case F:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:Ie(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Ie(e(t))}catch{}}return null}var Ae=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},me=[],ce=-1;function b(e){return{current:e}}function U(e){0>ce||(e.current=me[ce],me[ce]=null,ce--)}function q(e,t){ce++,me[ce]=e.current,e.current=t}var K=b(null),ee=b(null),le=b(null),he=b(null);function $e(e,t){switch(q(le,t),q(ee,e),q(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=wf(t),e=Ef(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(K),q(K,e)}function ke(){U(K),U(ee),U(le)}function Ll(e){e.memoizedState!==null&&q(he,e);var t=K.current,a=Ef(t,e.type);t!==a&&(q(ee,e),q(K,a))}function Yn(e){ee.current===e&&(U(K),U(ee)),he.current===e&&(U(he),Tn._currentValue=V)}var fr,Is;function Ra(e){if(fr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fr=t&&t[1]||"",Is=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fr+e+Is}var mr=!1;function pr(e,t){if(!e||mr)return"";mr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(T){var C=T}Reflect.construct(e,[],O)}else{try{O.call()}catch(T){C=T}e.call(O.prototype)}}else{try{throw Error()}catch(T){C=T}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(T){if(T&&C&&typeof T.stack=="string")return[T.stack,C.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var g=o.split(`
`),N=u.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===N.length)for(l=g.length-1,n=N.length-1;1<=l&&0<=n&&g[l]!==N[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==N[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==N[n]){var B=`
`+g[l].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=l&&0<=n);break}}}finally{mr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ra(a):""}function Fm(e,t){switch(e.tag){case 26:case 27:case 5:return Ra(e.type);case 16:return Ra("Lazy");case 13:return e.child!==t&&t!==null?Ra("Suspense Fallback"):Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 15:return pr(e.type,!1);case 11:return pr(e.type.render,!1);case 1:return pr(e.type,!0);case 31:return Ra("Activity");default:return""}}function Ps(e){try{var t="",a=null;do t+=Fm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var hr=Object.prototype.hasOwnProperty,gr=s.unstable_scheduleCallback,vr=s.unstable_cancelCallback,Gm=s.unstable_shouldYield,Xm=s.unstable_requestPaint,st=s.unstable_now,Qm=s.unstable_getCurrentPriorityLevel,ec=s.unstable_ImmediatePriority,tc=s.unstable_UserBlockingPriority,qn=s.unstable_NormalPriority,Zm=s.unstable_LowPriority,ac=s.unstable_IdlePriority,Vm=s.log,Km=s.unstable_setDisableYieldValue,Yl=null,ct=null;function ra(e){if(typeof Vm=="function"&&Km(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Yl,e)}catch{}}var ut=Math.clz32?Math.clz32:Wm,Jm=Math.log,$m=Math.LN2;function Wm(e){return e>>>=0,e===0?32:31-(Jm(e)/$m|0)|0}var Fn=256,Gn=262144,Xn=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=Da(l):(o&=u,o!==0?n=Da(o):a||(a=u&~e,a!==0&&(n=Da(a))))):(u=l&~i,u!==0?n=Da(u):o!==0?n=Da(o):a||(a=l&~e,a!==0&&(n=Da(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Im(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(){var e=Xn;return Xn<<=1,(Xn&62914560)===0&&(Xn=4194304),e}function xr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Fl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pm(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,g=e.expirationTimes,N=e.hiddenUpdates;for(a=o&~a;0<a;){var B=31-ut(a),O=1<<B;u[B]=0,g[B]=-1;var C=N[B];if(C!==null)for(N[B]=null,B=0;B<C.length;B++){var T=C[B];T!==null&&(T.lane&=-536870913)}a&=~O}l!==0&&nc(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function nc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ut(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ic(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ut(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function rc(e,t){var a=t&-t;return a=(a&42)!==0?1:br(a),(a&(e.suspendedLanes|t))!==0?0:a}function br(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oc(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Vf(e.type))}function sc(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var oa=Math.random().toString(36).slice(2),Ge="__reactFiber$"+oa,Pe="__reactProps$"+oa,Ia="__reactContainer$"+oa,jr="__reactEvents$"+oa,ep="__reactListeners$"+oa,tp="__reactHandles$"+oa,cc="__reactResources$"+oa,Gl="__reactMarker$"+oa;function Sr(e){delete e[Ge],delete e[Pe],delete e[jr],delete e[ep],delete e[tp]}function Pa(e){var t=e[Ge];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ia]||a[Ge]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=kf(e);e!==null;){if(a=e[Ge])return a;e=kf(e)}return t}e=a,a=e.parentNode}return null}function el(e){if(e=e[Ge]||e[Ia]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function tl(e){var t=e[cc];return t||(t=e[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Gl]=!0}var uc=new Set,dc={};function Ma(e,t){al(e,t),al(e+"Capture",t)}function al(e,t){for(dc[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var ap=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},mc={};function lp(e){return hr.call(mc,e)?!0:hr.call(fc,e)?!1:ap.test(e)?mc[e]=!0:(fc[e]=!0,!1)}function Zn(e,t,a){if(lp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function np(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){if(!e._valueTracker){var t=pc(e)?"checked":"value";e._valueTracker=np(e,t,""+e[t])}}function hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=pc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ip=/[\n"\\]/g;function bt(e){return e.replace(ip,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Er(e,t,a,l,n,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?zr(e,o,xt(t)):a!=null?zr(e,o,xt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+xt(u):e.removeAttribute("name")}function gc(e,t,a,l,n,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){wr(e);return}a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),wr(e)}function zr(e,t,a){t==="number"&&Kn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ll(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function vc(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function xc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Ae(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),wr(e)}function nl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||rp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&bc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&bc(e,i,t[i])}function Nr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jn(e){return sp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var Cr=null;function Ar(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,rl=null;function jc(e){var t=el(e);if(t&&(e=t.stateNode)){var a=e[Pe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Er(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Pe]||null;if(!n)throw Error(c(90));Er(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&hc(l)}break e;case"textarea":vc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ll(e,!!a.multiple,t,!1)}}}var Tr=!1;function Sc(e,t,a){if(Tr)return e(t,a);Tr=!0;try{var l=e(t);return l}finally{if(Tr=!1,(il!==null||rl!==null)&&(Oi(),il&&(t=il,e=rl,rl=il=null,jc(t),e)))for(t=0;t<e.length;t++)jc(e[t])}}function Ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Pe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Br=!1;if(Ft)try{var Zl={};Object.defineProperty(Zl,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Zl,Zl),window.removeEventListener("test",Zl,Zl)}catch{Br=!1}var sa=null,kr=null,$n=null;function wc(){if($n)return $n;var e,t=kr,a=t.length,l,n="value"in sa?sa.value:sa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return $n=n.slice(e,1<l?1-l:void 0)}function Wn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function Ec(){return!1}function et(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?In:Ec,this.isPropagationStopped=Ec,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=et(_a),Vl=y({},_a,{view:0,detail:0}),cp=et(Vl),Rr,Dr,Kl,ei=y({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_r,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kl&&(Kl&&e.type==="mousemove"?(Rr=e.screenX-Kl.screenX,Dr=e.screenY-Kl.screenY):Dr=Rr=0,Kl=e),Rr)},movementY:function(e){return"movementY"in e?e.movementY:Dr}}),zc=et(ei),up=y({},ei,{dataTransfer:0}),dp=et(up),fp=y({},Vl,{relatedTarget:0}),Mr=et(fp),mp=y({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=et(mp),hp=y({},_a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gp=et(hp),vp=y({},_a,{data:0}),Nc=et(vp),xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function _r(){return jp}var Sp=y({},Vl,{key:function(e){if(e.key){var t=xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_r,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wp=et(Sp),Ep=y({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=et(Ep),zp=y({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_r}),Np=et(zp),Cp=y({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=et(Cp),Tp=y({},ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=et(Tp),kp=y({},_a,{newState:0,oldState:0}),Rp=et(kp),Dp=[9,13,27,32],Or=Ft&&"CompositionEvent"in window,Jl=null;Ft&&"documentMode"in document&&(Jl=document.documentMode);var Mp=Ft&&"TextEvent"in window&&!Jl,Ac=Ft&&(!Or||Jl&&8<Jl&&11>=Jl),Tc=" ",Bc=!1;function kc(e,t){switch(e){case"keyup":return Dp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function _p(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(Bc=!0,Tc);case"textInput":return e=t.data,e===Tc&&Bc?null:e;default:return null}}function Op(e,t){if(ol)return e==="compositionend"||!Or&&kc(e,t)?(e=wc(),$n=kr=sa=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ac&&t.locale!=="ko"?null:t.data;default:return null}}var Up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Up[e.type]:t==="textarea"}function Mc(e,t,a,l){il?rl?rl.push(l):rl=[l]:il=l,t=Gi(t,"onChange"),0<t.length&&(a=new Pn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var $l=null,Wl=null;function Hp(e){vf(e,0)}function ti(e){var t=Xl(e);if(hc(t))return e}function _c(e,t){if(e==="change")return t}var Oc=!1;if(Ft){var Ur;if(Ft){var Hr="oninput"in document;if(!Hr){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),Hr=typeof Uc.oninput=="function"}Ur=Hr}else Ur=!1;Oc=Ur&&(!document.documentMode||9<document.documentMode)}function Hc(){$l&&($l.detachEvent("onpropertychange",Lc),Wl=$l=null)}function Lc(e){if(e.propertyName==="value"&&ti(Wl)){var t=[];Mc(t,Wl,e,Ar(e)),Sc(Hp,t)}}function Lp(e,t,a){e==="focusin"?(Hc(),$l=t,Wl=a,$l.attachEvent("onpropertychange",Lc)):e==="focusout"&&Hc()}function Yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(Wl)}function qp(e,t){if(e==="click")return ti(t)}function Fp(e,t){if(e==="input"||e==="change")return ti(t)}function Gp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Gp;function Il(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!hr.call(t,n)||!dt(e[n],t[n]))return!1}return!0}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qc(e,t){var a=Yc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yc(a)}}function Fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Kn(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Xp=Ft&&"documentMode"in document&&11>=document.documentMode,sl=null,Yr=null,Pl=null,qr=!1;function Xc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qr||sl==null||sl!==Kn(l)||(l=sl,"selectionStart"in l&&Lr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pl&&Il(Pl,l)||(Pl=l,l=Gi(Yr,"onSelect"),0<l.length&&(t=new Pn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=sl)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var cl={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},Fr={},Qc={};Ft&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function Ua(e){if(Fr[e])return Fr[e];if(!cl[e])return e;var t=cl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Qc)return Fr[e]=t[a];return e}var Zc=Ua("animationend"),Vc=Ua("animationiteration"),Kc=Ua("animationstart"),Qp=Ua("transitionrun"),Zp=Ua("transitionstart"),Vp=Ua("transitioncancel"),Jc=Ua("transitionend"),$c=new Map,Gr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gr.push("scrollEnd");function Bt(e,t){$c.set(e,t),Ma(t,[e])}var ai=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],ul=0,Xr=0;function li(){for(var e=ul,t=Xr=ul=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&Wc(a,n,i)}}function ni(e,t,a,l){yt[ul++]=e,yt[ul++]=t,yt[ul++]=a,yt[ul++]=l,Xr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Qr(e,t,a,l){return ni(e,t,a,l),ii(e)}function Ha(e,t){return ni(e,null,null,t),ii(e)}function Wc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ut(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ii(e){if(50<Sn)throw Sn=0,ts=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var dl={};function Kp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,a,l){return new Kp(e,t,a,l)}function Zr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=ft(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ic(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ri(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")Zr(e)&&(o=1);else if(typeof e=="string")o=Ph(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Le:return e=ft(31,a,t,n),e.elementType=Le,e.lanes=i,e;case k:return La(a.children,n,i,t);case D:o=8,n|=24;break;case Y:return e=ft(12,a,t,n|2),e.elementType=Y,e.lanes=i,e;case ue:return e=ft(13,a,t,n),e.elementType=ue,e.lanes=i,e;case Se:return e=ft(19,a,t,n),e.elementType=Se,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:o=10;break e;case X:o=9;break e;case Z:o=11;break e;case I:o=14;break e;case we:o=16,l=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=ft(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function La(e,t,a,l){return e=ft(7,e,l,t),e.lanes=a,e}function Vr(e,t,a){return e=ft(6,e,null,t),e.lanes=a,e}function Pc(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function Kr(e,t,a){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var eu=new WeakMap;function jt(e,t){if(typeof e=="object"&&e!==null){var a=eu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ps(t)},eu.set(e,t),t)}return{value:e,source:t,stack:Ps(t)}}var fl=[],ml=0,oi=null,en=0,St=[],wt=0,ca=null,Mt=1,_t="";function Xt(e,t){fl[ml++]=en,fl[ml++]=oi,oi=e,en=t}function tu(e,t,a){St[wt++]=Mt,St[wt++]=_t,St[wt++]=ca,ca=e;var l=Mt;e=_t;var n=32-ut(l)-1;l&=~(1<<n),a+=1;var i=32-ut(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Mt=1<<32-ut(t)+n|a<<n|l,_t=i+e}else Mt=1<<i|a<<n|l,_t=e}function Jr(e){e.return!==null&&(Xt(e,1),tu(e,1,0))}function $r(e){for(;e===oi;)oi=fl[--ml],fl[ml]=null,en=fl[--ml],fl[ml]=null;for(;e===ca;)ca=St[--wt],St[wt]=null,_t=St[--wt],St[wt]=null,Mt=St[--wt],St[wt]=null}function au(e,t){St[wt++]=Mt,St[wt++]=_t,St[wt++]=ca,Mt=t.id,_t=t.overflow,ca=e}var Xe=null,Ee=null,se=!1,ua=null,Et=!1,Wr=Error(c(519));function da(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tn(jt(t,e)),Wr}function lu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ge]=e,t[Pe]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<En.length;a++)ie(En[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),gc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),xc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||jf(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||da(e,!0)}function nu(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Xe=Xe.return}}function pl(e){if(e!==Xe)return!1;if(!se)return nu(e),se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gs(e.type,e.memoizedProps)),a=!a),a&&Ee&&da(e),nu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Bf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Bf(e)}else t===27?(t=Ee,za(e.type)?(e=js,js=null,Ee=e):Ee=t):Ee=Xe?Nt(e.stateNode.nextSibling):null;return!0}function Ya(){Ee=Xe=null,se=!1}function Ir(){var e=ua;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),ua=null),e}function tn(e){ua===null?ua=[e]:ua.push(e)}var Pr=b(null),qa=null,Qt=null;function fa(e,t,a){q(Pr,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=Pr.current,U(Pr)}function eo(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function to(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var g=0;g<t.length;g++)if(u.context===t[g]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),eo(i.return,a,e),l||(o=null);break e}i=u.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(c(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),eo(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function hl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=n.type;dt(n.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(n===he.current){if(o=n.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Tn):e=[Tn])}n=n.return}e!==null&&to(t,e,a,l),t.flags|=262144}function si(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fa(e){qa=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return iu(qa,e)}function ci(e,t){return qa===null&&Fa(e),iu(e,t)}function iu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Qt===null){if(e===null)throw Error(c(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return a}var Jp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},$p=s.unstable_scheduleCallback,Wp=s.unstable_NormalPriority,_e={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ao(){return{controller:new Jp,data:new Map,refCount:0}}function an(e){e.refCount--,e.refCount===0&&$p(Wp,function(){e.controller.abort()})}var ln=null,lo=0,gl=0,vl=null;function Ip(e,t){if(ln===null){var a=ln=[];lo=0,gl=os(),vl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return lo++,t.then(ru,ru),t}function ru(){if(--lo===0&&ln!==null){vl!==null&&(vl.status="fulfilled");var e=ln;ln=null,gl=0,vl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var ou=R.S;R.S=function(e,t){Xd=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ip(e,t),ou!==null&&ou(e,t)};var Ga=b(null);function no(){var e=Ga.current;return e!==null?e:je.pooledCache}function ui(e,t){t===null?q(Ga,Ga.current):q(Ga,t.pool)}function su(){var e=no();return e===null?null:{parent:_e._currentValue,pool:e}}var xl=Error(c(460)),io=Error(c(474)),di=Error(c(542)),fi={then:function(){}};function cu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function uu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fu(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fu(e),e}throw Qa=t,xl}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,xl):a}}var Qa=null;function du(){if(Qa===null)throw Error(c(459));var e=Qa;return Qa=null,e}function fu(e){if(e===xl||e===di)throw Error(c(483))}var bl=null,nn=0;function mi(e){var t=nn;return nn+=1,bl===null&&(bl=[]),uu(bl,e,t)}function rn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pi(e,t){throw t.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mu(e){function t(S,x){if(e){var z=S.deletions;z===null?(S.deletions=[x],S.flags|=16):z.push(x)}}function a(S,x){if(!e)return null;for(;x!==null;)t(S,x),x=x.sibling;return null}function l(S){for(var x=new Map;S!==null;)S.key!==null?x.set(S.key,S):x.set(S.index,S),S=S.sibling;return x}function n(S,x){return S=Gt(S,x),S.index=0,S.sibling=null,S}function i(S,x,z){return S.index=z,e?(z=S.alternate,z!==null?(z=z.index,z<x?(S.flags|=67108866,x):z):(S.flags|=67108866,x)):(S.flags|=1048576,x)}function o(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function u(S,x,z,M){return x===null||x.tag!==6?(x=Vr(z,S.mode,M),x.return=S,x):(x=n(x,z),x.return=S,x)}function g(S,x,z,M){var $=z.type;return $===k?B(S,x,z.props.children,M,z.key):x!==null&&(x.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Xa($)===x.type)?(x=n(x,z.props),rn(x,z),x.return=S,x):(x=ri(z.type,z.key,z.props,null,S.mode,M),rn(x,z),x.return=S,x)}function N(S,x,z,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==z.containerInfo||x.stateNode.implementation!==z.implementation?(x=Kr(z,S.mode,M),x.return=S,x):(x=n(x,z.children||[]),x.return=S,x)}function B(S,x,z,M,$){return x===null||x.tag!==7?(x=La(z,S.mode,M,$),x.return=S,x):(x=n(x,z),x.return=S,x)}function O(S,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Vr(""+x,S.mode,z),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case L:return z=ri(x.type,x.key,x.props,null,S.mode,z),rn(z,x),z.return=S,z;case G:return x=Kr(x,S.mode,z),x.return=S,x;case we:return x=Xa(x),O(S,x,z)}if(Ae(x)||Me(x))return x=La(x,S.mode,z,null),x.return=S,x;if(typeof x.then=="function")return O(S,mi(x),z);if(x.$$typeof===F)return O(S,ci(S,x),z);pi(S,x)}return null}function C(S,x,z,M){var $=x!==null?x.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return $!==null?null:u(S,x,""+z,M);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case L:return z.key===$?g(S,x,z,M):null;case G:return z.key===$?N(S,x,z,M):null;case we:return z=Xa(z),C(S,x,z,M)}if(Ae(z)||Me(z))return $!==null?null:B(S,x,z,M,null);if(typeof z.then=="function")return C(S,x,mi(z),M);if(z.$$typeof===F)return C(S,x,ci(S,z),M);pi(S,z)}return null}function T(S,x,z,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(z)||null,u(x,S,""+M,$);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case L:return S=S.get(M.key===null?z:M.key)||null,g(x,S,M,$);case G:return S=S.get(M.key===null?z:M.key)||null,N(x,S,M,$);case we:return M=Xa(M),T(S,x,z,M,$)}if(Ae(M)||Me(M))return S=S.get(z)||null,B(x,S,M,$,null);if(typeof M.then=="function")return T(S,x,z,mi(M),$);if(M.$$typeof===F)return T(S,x,z,ci(x,M),$);pi(x,M)}return null}function Q(S,x,z,M){for(var $=null,de=null,J=x,ae=x=0,oe=null;J!==null&&ae<z.length;ae++){J.index>ae?(oe=J,J=null):oe=J.sibling;var fe=C(S,J,z[ae],M);if(fe===null){J===null&&(J=oe);break}e&&J&&fe.alternate===null&&t(S,J),x=i(fe,x,ae),de===null?$=fe:de.sibling=fe,de=fe,J=oe}if(ae===z.length)return a(S,J),se&&Xt(S,ae),$;if(J===null){for(;ae<z.length;ae++)J=O(S,z[ae],M),J!==null&&(x=i(J,x,ae),de===null?$=J:de.sibling=J,de=J);return se&&Xt(S,ae),$}for(J=l(J);ae<z.length;ae++)oe=T(J,S,ae,z[ae],M),oe!==null&&(e&&oe.alternate!==null&&J.delete(oe.key===null?ae:oe.key),x=i(oe,x,ae),de===null?$=oe:de.sibling=oe,de=oe);return e&&J.forEach(function(Ba){return t(S,Ba)}),se&&Xt(S,ae),$}function W(S,x,z,M){if(z==null)throw Error(c(151));for(var $=null,de=null,J=x,ae=x=0,oe=null,fe=z.next();J!==null&&!fe.done;ae++,fe=z.next()){J.index>ae?(oe=J,J=null):oe=J.sibling;var Ba=C(S,J,fe.value,M);if(Ba===null){J===null&&(J=oe);break}e&&J&&Ba.alternate===null&&t(S,J),x=i(Ba,x,ae),de===null?$=Ba:de.sibling=Ba,de=Ba,J=oe}if(fe.done)return a(S,J),se&&Xt(S,ae),$;if(J===null){for(;!fe.done;ae++,fe=z.next())fe=O(S,fe.value,M),fe!==null&&(x=i(fe,x,ae),de===null?$=fe:de.sibling=fe,de=fe);return se&&Xt(S,ae),$}for(J=l(J);!fe.done;ae++,fe=z.next())fe=T(J,S,ae,fe.value,M),fe!==null&&(e&&fe.alternate!==null&&J.delete(fe.key===null?ae:fe.key),x=i(fe,x,ae),de===null?$=fe:de.sibling=fe,de=fe);return e&&J.forEach(function(u0){return t(S,u0)}),se&&Xt(S,ae),$}function ye(S,x,z,M){if(typeof z=="object"&&z!==null&&z.type===k&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case L:e:{for(var $=z.key;x!==null;){if(x.key===$){if($=z.type,$===k){if(x.tag===7){a(S,x.sibling),M=n(x,z.props.children),M.return=S,S=M;break e}}else if(x.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Xa($)===x.type){a(S,x.sibling),M=n(x,z.props),rn(M,z),M.return=S,S=M;break e}a(S,x);break}else t(S,x);x=x.sibling}z.type===k?(M=La(z.props.children,S.mode,M,z.key),M.return=S,S=M):(M=ri(z.type,z.key,z.props,null,S.mode,M),rn(M,z),M.return=S,S=M)}return o(S);case G:e:{for($=z.key;x!==null;){if(x.key===$)if(x.tag===4&&x.stateNode.containerInfo===z.containerInfo&&x.stateNode.implementation===z.implementation){a(S,x.sibling),M=n(x,z.children||[]),M.return=S,S=M;break e}else{a(S,x);break}else t(S,x);x=x.sibling}M=Kr(z,S.mode,M),M.return=S,S=M}return o(S);case we:return z=Xa(z),ye(S,x,z,M)}if(Ae(z))return Q(S,x,z,M);if(Me(z)){if($=Me(z),typeof $!="function")throw Error(c(150));return z=$.call(z),W(S,x,z,M)}if(typeof z.then=="function")return ye(S,x,mi(z),M);if(z.$$typeof===F)return ye(S,x,ci(S,z),M);pi(S,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,x!==null&&x.tag===6?(a(S,x.sibling),M=n(x,z),M.return=S,S=M):(a(S,x),M=Vr(z,S.mode,M),M.return=S,S=M),o(S)):a(S,x)}return function(S,x,z,M){try{nn=0;var $=ye(S,x,z,M);return bl=null,$}catch(J){if(J===xl||J===di)throw J;var de=ft(29,J,null,S.mode);return de.lanes=M,de.return=S,de}}}var Za=mu(!0),pu=mu(!1),ma=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(pe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ii(e),Wc(e,null,a),t}return ni(e,l,t,a),ii(e)}function on(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ic(e,a)}}function so(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var co=!1;function sn(){if(co){var e=vl;if(e!==null)throw e}}function cn(e,t,a,l){co=!1;var n=e.updateQueue;ma=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var g=u,N=g.next;g.next=null,o===null?i=N:o.next=N,o=g;var B=e.alternate;B!==null&&(B=B.updateQueue,u=B.lastBaseUpdate,u!==o&&(u===null?B.firstBaseUpdate=N:u.next=N,B.lastBaseUpdate=g))}if(i!==null){var O=n.baseState;o=0,B=N=g=null,u=i;do{var C=u.lane&-536870913,T=C!==u.lane;if(T?(re&C)===C:(l&C)===C){C!==0&&C===gl&&(co=!0),B!==null&&(B=B.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var Q=e,W=u;C=t;var ye=a;switch(W.tag){case 1:if(Q=W.payload,typeof Q=="function"){O=Q.call(ye,O,C);break e}O=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=W.payload,C=typeof Q=="function"?Q.call(ye,O,C):Q,C==null)break e;O=y({},O,C);break e;case 2:ma=!0}}C=u.callback,C!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[C]:T.push(C))}else T={lane:C,tag:u.tag,payload:u.payload,callback:u.callback,next:null},B===null?(N=B=T,g=O):B=B.next=T,o|=C;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;T=u,u=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);B===null&&(g=O),n.baseState=g,n.firstBaseUpdate=N,n.lastBaseUpdate=B,i===null&&(n.shared.lanes=0),ya|=o,e.lanes=o,e.memoizedState=O}}function hu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function gu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hu(a[e],t)}var yl=b(null),hi=b(0);function vu(e,t){e=ta,q(hi,e),q(yl,t),ta=e|t.baseLanes}function uo(){q(hi,ta),q(yl,yl.current)}function fo(){ta=hi.current,U(yl),U(hi)}var mt=b(null),zt=null;function ga(e){var t=e.alternate;q(Re,Re.current&1),q(mt,e),zt===null&&(t===null||yl.current!==null||t.memoizedState!==null)&&(zt=e)}function mo(e){q(Re,Re.current),q(mt,e),zt===null&&(zt=e)}function xu(e){e.tag===22?(q(Re,Re.current),q(mt,e),zt===null&&(zt=e)):va()}function va(){q(Re,Re.current),q(mt,mt.current)}function pt(e){U(mt),zt===e&&(zt=null),U(Re)}var Re=b(0);function gi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||bs(a)||ys(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,te=null,xe=null,Oe=null,vi=!1,jl=!1,Va=!1,xi=0,un=0,Sl=null,eh=0;function Te(){throw Error(c(321))}function po(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!dt(e[a],t[a]))return!1;return!0}function ho(e,t,a,l,n,i){return Vt=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?td:Bo,Va=!1,i=a(l,n),Va=!1,jl&&(i=yu(t,a,l,n)),bu(e),i}function bu(e){R.H=mn;var t=xe!==null&&xe.next!==null;if(Vt=0,Oe=xe=te=null,vi=!1,un=0,Sl=null,t)throw Error(c(300));e===null||Ue||(e=e.dependencies,e!==null&&si(e)&&(Ue=!0))}function yu(e,t,a,l){te=e;var n=0;do{if(jl&&(Sl=null),un=0,jl=!1,25<=n)throw Error(c(301));if(n+=1,Oe=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=ad,i=t(a,l)}while(jl);return i}function th(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?dn(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(te.flags|=1024),t}function go(){var e=xi!==0;return xi=0,e}function vo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function xo(e){if(vi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vi=!1}Vt=0,Oe=xe=te=null,jl=!1,un=xi=0,Sl=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?te.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function De(){if(xe===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Oe===null?te.memoizedState:Oe.next;if(t!==null)Oe=t,xe=e;else{if(e===null)throw te.alternate===null?Error(c(467)):Error(c(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Oe===null?te.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function bi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dn(e){var t=un;return un+=1,Sl===null&&(Sl=[]),e=uu(Sl,e,t),t=te,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?td:Bo),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dn(e);if(e.$$typeof===F)return Qe(e)}throw Error(c(438,String(e)))}function bo(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=bi(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=rt;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function ji(e){var t=De();return yo(t,xe,e)}function yo(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=o=null,g=null,N=t,B=!1;do{var O=N.lane&-536870913;if(O!==N.lane?(re&O)===O:(Vt&O)===O){var C=N.revertLane;if(C===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),O===gl&&(B=!0);else if((Vt&C)===C){N=N.next,C===gl&&(B=!0);continue}else O={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},g===null?(u=g=O,o=i):g=g.next=O,te.lanes|=C,ya|=C;O=N.action,Va&&a(i,O),i=N.hasEagerState?N.eagerState:a(i,O)}else C={lane:O,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},g===null?(u=g=C,o=i):g=g.next=C,te.lanes|=O,ya|=O;N=N.next}while(N!==null&&N!==t);if(g===null?o=i:g.next=u,!dt(i,e.memoizedState)&&(Ue=!0,B&&(a=vl,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=g,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function jo(e){var t=De(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);dt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ju(e,t,a){var l=te,n=De(),i=se;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!dt((xe||n).memoizedState,a);if(o&&(n.memoizedState=a,Ue=!0),n=n.queue,Eo(Eu.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||Oe!==null&&Oe.memoizedState.tag&1){if(l.flags|=2048,wl(9,{destroy:void 0},wu.bind(null,l,n,a,t),null),je===null)throw Error(c(349));i||(Vt&127)!==0||Su(l,t,a)}return a}function Su(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=bi(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function wu(e,t,a,l){t.value=a,t.getSnapshot=l,zu(t)&&Nu(e)}function Eu(e,t,a){return a(function(){zu(t)&&Nu(e)})}function zu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!dt(e,a)}catch{return!0}}function Nu(e){var t=Ha(e,2);t!==null&&it(t,e,2)}function So(e){var t=We();if(typeof e=="function"){var a=e;if(e=a(),Va){ra(!0);try{a()}finally{ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Cu(e,t,a,l){return e.baseState=a,yo(e,xe,typeof l=="function"?l:Kt)}function ah(e,t,a,l,n){if(Ei(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Au(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Au(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,o={};R.T=o;try{var u=a(n,l),g=R.S;g!==null&&g(o,u),Tu(e,t,u)}catch(N){wo(e,t,N)}finally{i!==null&&o.types!==null&&(i.types=o.types),R.T=i}}else try{i=a(n,l),Tu(e,t,i)}catch(N){wo(e,t,N)}}function Tu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Bu(e,t,l)},function(l){return wo(e,t,l)}):Bu(e,t,a)}function Bu(e,t,a){t.status="fulfilled",t.value=a,ku(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Au(e,a)))}function wo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ku(t),t=t.next;while(t!==l)}e.action=null}function ku(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ru(e,t){return t}function Du(e,t){if(se){var a=je.formState;if(a!==null){e:{var l=te;if(se){if(Ee){t:{for(var n=Ee,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=Nt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=Nt(n.nextSibling),l=n.data==="F!";break e}}da(l)}l=!1}l&&(t=a[0])}}return a=We(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ru,lastRenderedState:t},a.queue=l,a=Iu.bind(null,te,l),l.dispatch=a,l=So(!1),i=To.bind(null,te,!1,l.queue),l=We(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=ah.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Mu(e){var t=De();return _u(t,xe,e)}function _u(e,t,a){if(t=yo(e,t,Ru)[0],e=ji(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=dn(t)}catch(o){throw o===xl?di:o}else l=t;t=De();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,wl(9,{destroy:void 0},lh.bind(null,n,a),null)),[l,i,e]}function lh(e,t){e.action=t}function Ou(e){var t=De(),a=xe;if(a!==null)return _u(t,a,e);De(),t=t.memoizedState,a=De();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function wl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=bi(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Uu(){return De().memoizedState}function Si(e,t,a,l){var n=We();te.flags|=e,n.memoizedState=wl(1|t,{destroy:void 0},a,l===void 0?null:l)}function wi(e,t,a,l){var n=De();l=l===void 0?null:l;var i=n.memoizedState.inst;xe!==null&&l!==null&&po(l,xe.memoizedState.deps)?n.memoizedState=wl(t,i,a,l):(te.flags|=e,n.memoizedState=wl(1|t,i,a,l))}function Hu(e,t){Si(8390656,8,e,t)}function Eo(e,t){wi(2048,8,e,t)}function nh(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=bi(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Lu(e){var t=De().memoizedState;return nh({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Yu(e,t){return wi(4,2,e,t)}function qu(e,t){return wi(4,4,e,t)}function Fu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gu(e,t,a){a=a!=null?a.concat([e]):null,wi(4,4,Fu.bind(null,t,e),a)}function zo(){}function Xu(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&po(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Qu(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&po(t,l[1]))return l[0];if(l=e(),Va){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l}function No(e,t,a){return a===void 0||(Vt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Zd(),te.lanes|=e,ya|=e,a)}function Zu(e,t,a,l){return dt(a,t)?a:yl.current!==null?(e=No(e,a,l),dt(e,t)||(Ue=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(re&261930)===0?(Ue=!0,e.memoizedState=a):(e=Zd(),te.lanes|=e,ya|=e,t)}function Vu(e,t,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var o=R.T,u={};R.T=u,To(e,!1,t,a);try{var g=n(),N=R.S;if(N!==null&&N(u,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var B=Pp(g,l);fn(e,t,B,vt(e))}else fn(e,t,l,vt(e))}catch(O){fn(e,t,{then:function(){},status:"rejected",reason:O},vt())}finally{H.p=i,o!==null&&u.types!==null&&(o.types=u.types),R.T=o}}function ih(){}function Co(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Ku(e).queue;Vu(e,n,t,V,a===null?ih:function(){return Ju(e),a(l)})}function Ku(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ju(e){var t=Ku(e);t.next===null&&(t=e.alternate.memoizedState),fn(e,t.next.queue,{},vt())}function Ao(){return Qe(Tn)}function $u(){return De().memoizedState}function Wu(){return De().memoizedState}function rh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=pa(a);var l=ha(t,e,a);l!==null&&(it(l,t,a),on(l,t,a)),t={cache:ao()},e.payload=t;return}t=t.return}}function oh(e,t,a){var l=vt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ei(e)?Pu(t,a):(a=Qr(e,t,a,l),a!==null&&(it(a,e,l),ed(a,t,l)))}function Iu(e,t,a){var l=vt();fn(e,t,a,l)}function fn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ei(e))Pu(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,a);if(n.hasEagerState=!0,n.eagerState=u,dt(u,o))return ni(e,t,n,0),je===null&&li(),!1}catch{}if(a=Qr(e,t,n,l),a!==null)return it(a,e,l),ed(a,t,l),!0}return!1}function To(e,t,a,l){if(l={lane:2,revertLane:os(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ei(e)){if(t)throw Error(c(479))}else t=Qr(e,a,l,2),t!==null&&it(t,e,2)}function Ei(e){var t=e.alternate;return e===te||t!==null&&t===te}function Pu(e,t){jl=vi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ed(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ic(e,a)}}var mn={readContext:Qe,use:yi,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};mn.useEffectEvent=Te;var td={readContext:Qe,use:yi,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Hu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Si(4194308,4,Fu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){Si(4,2,e,t)},useMemo:function(e,t){var a=We();t=t===void 0?null:t;var l=e();if(Va){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=We();if(a!==void 0){var n=a(t);if(Va){ra(!0);try{a(t)}finally{ra(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=oh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=So(e);var t=e.queue,a=Iu.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:zo,useDeferredValue:function(e,t){var a=We();return No(a,e,t)},useTransition:function(){var e=So(!1);return e=Vu.bind(null,te,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=We();if(se){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),je===null)throw Error(c(349));(re&127)!==0||Su(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Hu(Eu.bind(null,l,i,e),[e]),l.flags|=2048,wl(9,{destroy:void 0},wu.bind(null,l,i,a,t),null),a},useId:function(){var e=We(),t=je.identifierPrefix;if(se){var a=_t,l=Mt;a=(l&~(1<<32-ut(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=xi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=eh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ao,useFormState:Du,useActionState:Du,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=To.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:bo,useCacheRefresh:function(){return We().memoizedState=rh.bind(null,te)},useEffectEvent:function(e){var t=We(),a={impl:e};return t.memoizedState=a,function(){if((pe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Bo={readContext:Qe,use:yi,useCallback:Xu,useContext:Qe,useEffect:Eo,useImperativeHandle:Gu,useInsertionEffect:Yu,useLayoutEffect:qu,useMemo:Qu,useReducer:ji,useRef:Uu,useState:function(){return ji(Kt)},useDebugValue:zo,useDeferredValue:function(e,t){var a=De();return Zu(a,xe.memoizedState,e,t)},useTransition:function(){var e=ji(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:ju,useId:$u,useHostTransitionStatus:Ao,useFormState:Mu,useActionState:Mu,useOptimistic:function(e,t){var a=De();return Cu(a,xe,e,t)},useMemoCache:bo,useCacheRefresh:Wu};Bo.useEffectEvent=Lu;var ad={readContext:Qe,use:yi,useCallback:Xu,useContext:Qe,useEffect:Eo,useImperativeHandle:Gu,useInsertionEffect:Yu,useLayoutEffect:qu,useMemo:Qu,useReducer:jo,useRef:Uu,useState:function(){return jo(Kt)},useDebugValue:zo,useDeferredValue:function(e,t){var a=De();return xe===null?No(a,e,t):Zu(a,xe.memoizedState,e,t)},useTransition:function(){var e=jo(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:ju,useId:$u,useHostTransitionStatus:Ao,useFormState:Ou,useActionState:Ou,useOptimistic:function(e,t){var a=De();return xe!==null?Cu(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bo,useCacheRefresh:Wu};ad.useEffectEvent=Lu;function ko(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ro={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=vt(),n=pa(l);n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(it(t,e,l),on(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=vt(),n=pa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(it(t,e,l),on(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=ha(e,l,a),t!==null&&(it(t,e,a),on(t,e,a))}};function ld(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!Il(a,l)||!Il(n,i):!0}function nd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function Ka(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function id(e){ai(e)}function rd(e){console.error(e)}function od(e){ai(e)}function zi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function sd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Do(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){zi(e,t)},a}function cd(e){return e=pa(e),e.tag=3,e}function ud(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){sd(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){sd(t,a,l),typeof n!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function sh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&hl(t,a,n,!0),a=mt.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Ui():a.alternate===null&&Be===0&&(Be=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===fi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ns(e,l,n)),!1;case 22:return a.flags|=65536,l===fi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ns(e,l,n)),!1}throw Error(c(435,a.tag))}return ns(e,l,n),Ui(),!1}if(se)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Wr&&(e=Error(c(422),{cause:l}),tn(jt(e,a)))):(l!==Wr&&(t=Error(c(423),{cause:l}),tn(jt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=jt(l,a),n=Do(e.stateNode,l,n),so(e,n),Be!==4&&(Be=2)),!1;var i=Error(c(520),{cause:l});if(i=jt(i,a),jn===null?jn=[i]:jn.push(i),Be!==4&&(Be=2),t===null)return!0;l=jt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Do(a.stateNode,l,e),so(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ja===null||!ja.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=cd(n),ud(n,e,a,l),so(a,n),!1}a=a.return}while(a!==null);return!1}var Mo=Error(c(461)),Ue=!1;function Ze(e,t,a,l){t.child=e===null?pu(t,null,a,l):Za(t,e.child,a,l)}function dd(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var u in l)u!=="ref"&&(o[u]=l[u])}else o=l;return Fa(t),l=ho(e,t,a,o,i,n),u=go(),e!==null&&!Ue?(vo(e,t,n),Jt(e,t,n)):(se&&u&&Jr(t),t.flags|=1,Ze(e,t,l,n),t.child)}function fd(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Zr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,md(e,t,i,l,n)):(e=ri(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Fo(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Il,a(o,l)&&e.ref===t.ref)return Jt(e,t,n)}return t.flags|=1,e=Gt(i,l),e.ref=t.ref,e.return=t,t.child=e}function md(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Il(i,l)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=l=i,Fo(e,n))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Jt(e,t,n)}return _o(e,t,a,l,n)}function pd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return hd(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,i!==null?i.cachePool:null),i!==null?vu(t,i):uo(),xu(t);else return l=t.lanes=536870912,hd(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ui(t,i.cachePool),vu(t,i),va(),t.memoizedState=null):(e!==null&&ui(t,null),uo(),va());return Ze(e,t,n,a),t.child}function pn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hd(e,t,a,l,n){var i=no();return i=i===null?null:{parent:_e._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ui(t,null),uo(),xu(t),e!==null&&hl(e,t,l,!0),t.childLanes=n,null}function Ni(e,t){return t=Ai({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gd(e,t,a){return Za(t,e.child,null,a),e=Ni(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function ch(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(l.mode==="hidden")return e=Ni(t,l),t.lanes=536870912,pn(null,e);if(mo(t),(e=Ee)?(e=Tf(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:Mt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},a=Pc(e),a.return=t,t.child=a,Xe=t,Ee=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return Ni(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(mo(t),n)if(t.flags&256)t.flags&=-257,t=gd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ue||hl(e,t,a,!1),n=(a&e.childLanes)!==0,Ue||n){if(l=je,l!==null&&(o=rc(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,Ha(e,o),it(l,e,o),Mo;Ui(),t=gd(e,t,a)}else e=i.treeContext,Ee=Nt(o.nextSibling),Xe=t,se=!0,ua=null,Et=!1,e!==null&&au(t,e),t=Ni(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ci(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function _o(e,t,a,l,n){return Fa(t),a=ho(e,t,a,l,void 0,n),l=go(),e!==null&&!Ue?(vo(e,t,n),Jt(e,t,n)):(se&&l&&Jr(t),t.flags|=1,Ze(e,t,a,n),t.child)}function vd(e,t,a,l,n,i){return Fa(t),t.updateQueue=null,a=yu(t,l,a,n),bu(e),l=go(),e!==null&&!Ue?(vo(e,t,i),Jt(e,t,i)):(se&&l&&Jr(t),t.flags|=1,Ze(e,t,a,i),t.child)}function xd(e,t,a,l,n){if(Fa(t),t.stateNode===null){var i=dl,o=a.contextType;typeof o=="object"&&o!==null&&(i=Qe(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ro,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ro(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Qe(o):dl,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(ko(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Ro.enqueueReplaceState(i,i.state,null),cn(t,l,i,n),sn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,g=Ka(a,u);i.props=g;var N=i.context,B=a.contextType;o=dl,typeof B=="object"&&B!==null&&(o=Qe(B));var O=a.getDerivedStateFromProps;B=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,B||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||N!==o)&&nd(t,i,l,o),ma=!1;var C=t.memoizedState;i.state=C,cn(t,l,i,n),sn(),N=t.memoizedState,u||C!==N||ma?(typeof O=="function"&&(ko(t,a,O,l),N=t.memoizedState),(g=ma||ld(t,a,g,l,C,N,o))?(B||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=o,l=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,oo(e,t),o=t.memoizedProps,B=Ka(a,o),i.props=B,O=t.pendingProps,C=i.context,N=a.contextType,g=dl,typeof N=="object"&&N!==null&&(g=Qe(N)),u=a.getDerivedStateFromProps,(N=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==O||C!==g)&&nd(t,i,l,g),ma=!1,C=t.memoizedState,i.state=C,cn(t,l,i,n),sn();var T=t.memoizedState;o!==O||C!==T||ma||e!==null&&e.dependencies!==null&&si(e.dependencies)?(typeof u=="function"&&(ko(t,a,u,l),T=t.memoizedState),(B=ma||ld(t,a,B,l,C,T,g)||e!==null&&e.dependencies!==null&&si(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,T,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,T,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),i.props=l,i.state=T,i.context=g,l=B):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ci(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Za(t,e.child,null,n),t.child=Za(t,null,a,n)):Ze(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Jt(e,t,n),e}function bd(e,t,a,l){return Ya(),t.flags|=256,Ze(e,t,a,l),t.child}var Oo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uo(e){return{baseLanes:e,cachePool:su()}}function Ho(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=gt),e}function yd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(n?ga(t):va(),(e=Ee)?(e=Tf(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:Mt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},a=Pc(e),a.return=t,t.child=a,Xe=t,Ee=null)):e=null,e===null)throw da(t);return ys(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(va(),n=t.mode,u=Ai({mode:"hidden",children:u},n),l=La(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=Uo(a),l.childLanes=Ho(e,o,a),t.memoizedState=Oo,pn(null,l)):(ga(t),Lo(t,u))}var g=e.memoizedState;if(g!==null&&(u=g.dehydrated,u!==null)){if(i)t.flags&256?(ga(t),t.flags&=-257,t=Yo(e,t,a)):t.memoizedState!==null?(va(),t.child=e.child,t.flags|=128,t=null):(va(),u=l.fallback,n=t.mode,l=Ai({mode:"visible",children:l.children},n),u=La(u,n,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Za(t,e.child,null,a),l=t.child,l.memoizedState=Uo(a),l.childLanes=Ho(e,o,a),t.memoizedState=Oo,t=pn(null,l));else if(ga(t),ys(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var N=o.dgst;o=N,l=Error(c(419)),l.stack="",l.digest=o,tn({value:l,source:null,stack:null}),t=Yo(e,t,a)}else if(Ue||hl(e,t,a,!1),o=(a&e.childLanes)!==0,Ue||o){if(o=je,o!==null&&(l=rc(o,a),l!==0&&l!==g.retryLane))throw g.retryLane=l,Ha(e,l),it(o,e,l),Mo;bs(u)||Ui(),t=Yo(e,t,a)}else bs(u)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ee=Nt(u.nextSibling),Xe=t,se=!0,ua=null,Et=!1,e!==null&&au(t,e),t=Lo(t,l.children),t.flags|=4096);return t}return n?(va(),u=l.fallback,n=t.mode,g=e.child,N=g.sibling,l=Gt(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,N!==null?u=Gt(N,u):(u=La(u,n,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,pn(null,l),l=t.child,u=e.child.memoizedState,u===null?u=Uo(a):(n=u.cachePool,n!==null?(g=_e._currentValue,n=n.parent!==g?{parent:g,pool:g}:n):n=su(),u={baseLanes:u.baseLanes|a,cachePool:n}),l.memoizedState=u,l.childLanes=Ho(e,o,a),t.memoizedState=Oo,pn(e.child,l)):(ga(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Lo(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function Yo(e,t,a){return Za(t,e.child,null,a),e=Lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),eo(e.return,t,a)}function qo(e,t,a,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function Sd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=Re.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,q(Re,o),Ze(e,t,l,a),l=se?en:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,a,t);else if(e.tag===19)jd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&gi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),qo(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&gi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}qo(t,!0,a,null,i,l);break;case"together":qo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(hl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Fo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&si(e)))}function uh(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),fa(t,_e,e.memoizedState.cache),Ya();break;case 27:case 5:Ll(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?yd(e,t,a):(ga(t),e=Jt(e,t,a),e!==null?e.sibling:null);ga(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(hl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Sd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(Re,Re.current),l)break;return null;case 22:return t.lanes=0,pd(e,t,a,t.pendingProps);case 24:fa(t,_e,e.memoizedState.cache)}return Jt(e,t,a)}function wd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Fo(e,a)&&(t.flags&128)===0)return Ue=!1,uh(e,t,a);Ue=(e.flags&131072)!==0}else Ue=!1,se&&(t.flags&1048576)!==0&&tu(t,en,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Zr(e)?(l=Ka(e,l),t.tag=1,t=xd(null,t,e,l,a)):(t.tag=0,t=_o(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Z){t.tag=11,t=dd(null,t,e,l,a);break e}else if(n===I){t.tag=14,t=fd(null,t,e,l,a);break e}}throw t=Ie(e)||e,Error(c(306,t,""))}}return t;case 0:return _o(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ka(l,t.pendingProps),xd(e,t,l,n,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,oo(e,t),cn(t,l,null,a);var o=t.memoizedState;if(l=o.cache,fa(t,_e,l),l!==i.cache&&to(t,[_e],a,!0),sn(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=bd(e,t,l,a);break e}else if(l!==n){n=jt(Error(c(424)),t),tn(n),t=bd(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=Nt(e.firstChild),Xe=t,se=!0,ua=null,Et=!0,a=pu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),l===n){t=Jt(e,t,a);break e}Ze(e,t,l,a)}t=t.child}return t;case 26:return Ci(e,t),e===null?(a=_f(t.type,null,t.pendingProps,null))?t.memoizedState=a:se||(a=t.type,e=t.pendingProps,l=Xi(le.current).createElement(a),l[Ge]=t,l[Pe]=e,Ve(l,a,e),qe(l),t.stateNode=l):t.memoizedState=_f(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ll(t),e===null&&se&&(l=t.stateNode=Rf(t.type,t.pendingProps,le.current),Xe=t,Et=!0,n=Ee,za(t.type)?(js=n,Ee=Nt(l.firstChild)):Ee=n),Ze(e,t,t.pendingProps.children,a),Ci(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((n=l=Ee)&&(l=Yh(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Xe=t,Ee=Nt(l.firstChild),Et=!1,n=!0):n=!1),n||da(t)),Ll(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,gs(n,i)?l=null:o!==null&&gs(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=ho(e,t,th,null,null,a),Tn._currentValue=n),Ci(e,t),Ze(e,t,l,a),t.child;case 6:return e===null&&se&&((e=a=Ee)&&(a=qh(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Xe=t,Ee=null,e=!0):e=!1),e||da(t)),null;case 13:return yd(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Za(t,null,l,a):Ze(e,t,l,a),t.child;case 11:return dd(e,t,t.type,t.pendingProps,a);case 7:return Ze(e,t,t.pendingProps,a),t.child;case 8:return Ze(e,t,t.pendingProps.children,a),t.child;case 12:return Ze(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,fa(t,t.type,l.value),Ze(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Fa(t),n=Qe(n),l=l(n),t.flags|=1,Ze(e,t,l,a),t.child;case 14:return fd(e,t,t.type,t.pendingProps,a);case 15:return md(e,t,t.type,t.pendingProps,a);case 19:return Sd(e,t,a);case 31:return ch(e,t,a);case 22:return pd(e,t,a,t.pendingProps);case 24:return Fa(t),l=Qe(_e),e===null?(n=no(),n===null&&(n=je,i=ao(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ro(t),fa(t,_e,n)):((e.lanes&a)!==0&&(oo(e,t),cn(t,null,null,a),sn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),fa(t,_e,l)):(l=i.cache,fa(t,_e,l),l!==n.cache&&to(t,[_e],a,!0))),Ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function $t(e){e.flags|=4}function Go(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if($d())e.flags|=8192;else throw Qa=fi,io}else e.flags&=-16777217}function Ed(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yf(t))if($d())e.flags|=8192;else throw Qa=fi,io}function Ti(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lc():536870912,e.lanes|=t,Cl|=t)}function hn(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function dh(e,t,a){var l=t.pendingProps;switch($r(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(_e),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pl(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ir())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?($t(t),i!==null?(ze(t),Ed(t,i)):(ze(t),Go(t,n,null,l,a))):i?i!==e.memoizedState?($t(t),ze(t),Ed(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&$t(t),ze(t),Go(t,n,e,l,a)),null;case 27:if(Yn(t),a=le.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return ze(t),null}e=K.current,pl(t)?lu(t):(e=Rf(n,l,a),t.stateNode=e,$t(t))}return ze(t),null;case 5:if(Yn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return ze(t),null}if(i=K.current,pl(t))lu(t);else{var o=Xi(le.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[Ge]=t,i[Pe]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Ve(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$t(t)}}return ze(t),Go(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,pl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||jf(e.nodeValue,a)),e||da(t,!0)}else e=Xi(e).createTextNode(l),e[Ge]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=pl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ge]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=Ir(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=pl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Ge]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Ir(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ti(t,t.updateQueue),ze(t),null);case 4:return ke(),e===null&&ds(t.stateNode.containerInfo),ze(t),null;case 10:return Zt(t.type),ze(t),null;case 19:if(U(Re),l=t.memoizedState,l===null)return ze(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)hn(l,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=gi(e),i!==null){for(t.flags|=128,hn(l,!1),e=i.updateQueue,t.updateQueue=e,Ti(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ic(a,e),a=a.sibling;return q(Re,Re.current&1|2),se&&Xt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&st()>Mi&&(t.flags|=128,n=!0,hn(l,!1),t.lanes=4194304)}else{if(!n)if(e=gi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ti(t,e),hn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!se)return ze(t),null}else 2*st()-l.renderingStartTime>Mi&&a!==536870912&&(t.flags|=128,n=!0,hn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=st(),e.sibling=null,a=Re.current,q(Re,n?a&1|2:a&1),se&&Xt(t,l.treeForkCount),e):(ze(t),null);case 22:case 23:return pt(t),fo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ti(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&U(Ga),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(_e),ze(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function fh(e,t){switch($r(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(_e),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Yn(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Re),null;case 4:return ke(),null;case 10:return Zt(t.type),null;case 22:case 23:return pt(t),fo(),e!==null&&U(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(_e),null;case 25:return null;default:return null}}function zd(e,t){switch($r(t),t.tag){case 3:Zt(_e),ke();break;case 26:case 27:case 5:Yn(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:U(Re);break;case 10:Zt(t.type);break;case 22:case 23:pt(t),fo(),e!==null&&U(Ga);break;case 24:Zt(_e)}}function gn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(u){ve(t,t.return,u)}}function xa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,n=t;var g=a,N=u;try{N()}catch(B){ve(n,g,B)}}}l=l.next}while(l!==i)}}catch(B){ve(t,t.return,B)}}function Nd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{gu(t,a)}catch(l){ve(e,e.return,l)}}}function Cd(e,t,a){a.props=Ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ve(e,t,l)}}function vn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ve(e,t,n)}}function Ot(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ve(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ve(e,t,n)}else a.current=null}function Ad(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ve(e,e.return,n)}}function Xo(e,t,a){try{var l=e.stateNode;Mh(l,e.type,a,t),l[Pe]=t}catch(n){ve(e,e.return,n)}}function Td(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Zo(e,t,a),e=e.sibling;e!==null;)Zo(e,t,a),e=e.sibling}function Bi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bi(e,t,a),e=e.sibling;e!==null;)Bi(e,t,a),e=e.sibling}function Bd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ve(t,l,a),t[Ge]=e,t[Pe]=a}catch(i){ve(e,e.return,i)}}var Wt=!1,He=!1,Vo=!1,kd=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function mh(e,t){if(e=e.containerInfo,ps=Wi,e=Gc(e),Lr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,u=-1,g=-1,N=0,B=0,O=e,C=null;t:for(;;){for(var T;O!==a||n!==0&&O.nodeType!==3||(u=o+n),O!==i||l!==0&&O.nodeType!==3||(g=o+l),O.nodeType===3&&(o+=O.nodeValue.length),(T=O.firstChild)!==null;)C=O,O=T;for(;;){if(O===e)break t;if(C===a&&++N===n&&(u=o),C===i&&++B===l&&(g=o),(T=O.nextSibling)!==null)break;O=C,C=O.parentNode}O=T}a=u===-1||g===-1?null:{start:u,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(hs={focusedElem:e,selectionRange:a},Wi=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Q=Ka(a.type,n);e=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){ve(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)xs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function Rd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Pt(e,a),l&4&&gn(5,a);break;case 1:if(Pt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ve(a,a.return,o)}else{var n=Ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ve(a,a.return,o)}}l&64&&Nd(a),l&512&&vn(a,a.return);break;case 3:if(Pt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{gu(e,t)}catch(o){ve(a,a.return,o)}}break;case 27:t===null&&l&4&&Bd(a);case 26:case 5:Pt(e,a),t===null&&l&4&&Ad(a),l&512&&vn(a,a.return);break;case 12:Pt(e,a);break;case 31:Pt(e,a),l&4&&_d(e,a);break;case 13:Pt(e,a),l&4&&Od(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Sh.bind(null,a),Fh(e,a))));break;case 22:if(l=a.memoizedState!==null||Wt,!l){t=t!==null&&t.memoizedState!==null||He,n=Wt;var i=He;Wt=l,(He=t)&&!i?ea(e,a,(a.subtreeFlags&8772)!==0):Pt(e,a),Wt=n,He=i}break;case 30:break;default:Pt(e,a)}}function Dd(e){var t=e.alternate;t!==null&&(e.alternate=null,Dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Sr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,tt=!1;function It(e,t,a){for(a=a.child;a!==null;)Md(e,t,a),a=a.sibling}function Md(e,t,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Yl,a)}catch{}switch(a.tag){case 26:He||Ot(a,t),It(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Ot(a,t);var l=Ne,n=tt;za(a.type)&&(Ne=a.stateNode,tt=!1),It(e,t,a),Nn(a.stateNode),Ne=l,tt=n;break;case 5:He||Ot(a,t);case 6:if(l=Ne,n=tt,Ne=null,It(e,t,a),Ne=l,tt=n,Ne!==null)if(tt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(a.stateNode)}catch(i){ve(a,t,i)}else try{Ne.removeChild(a.stateNode)}catch(i){ve(a,t,i)}break;case 18:Ne!==null&&(tt?(e=Ne,Cf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_l(e)):Cf(Ne,a.stateNode));break;case 4:l=Ne,n=tt,Ne=a.stateNode.containerInfo,tt=!0,It(e,t,a),Ne=l,tt=n;break;case 0:case 11:case 14:case 15:xa(2,a,t),He||xa(4,a,t),It(e,t,a);break;case 1:He||(Ot(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Cd(a,t,l)),It(e,t,a);break;case 21:It(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,It(e,t,a),He=l;break;default:It(e,t,a)}}function _d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_l(e)}catch(a){ve(t,t.return,a)}}}function Od(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(a){ve(t,t.return,a)}}function ph(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new kd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new kd),t;default:throw Error(c(435,e.tag))}}function ki(e,t){var a=ph(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=wh.bind(null,e,l);l.then(n,n)}})}function at(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(za(u.type)){Ne=u.stateNode,tt=!1;break e}break;case 5:Ne=u.stateNode,tt=!1;break e;case 3:case 4:Ne=u.stateNode.containerInfo,tt=!0;break e}u=u.return}if(Ne===null)throw Error(c(160));Md(i,o,n),Ne=null,tt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling}var kt=null;function Ud(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),lt(e),l&4&&(xa(3,e,e.return),gn(3,e),xa(5,e,e.return));break;case 1:at(t,e),lt(e),l&512&&(He||a===null||Ot(a,a.return)),l&64&&Wt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=kt;if(at(t,e),lt(e),l&512&&(He||a===null||Ot(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Gl]||i[Ge]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ve(i,l,a),i[Ge]=e,qe(i),l=i;break e;case"link":var o=Hf("link","href",n).get(l+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}i=n.createElement(l),Ve(i,l,a),n.head.appendChild(i);break;case"meta":if(o=Hf("meta","content",n).get(l+(a.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}i=n.createElement(l),Ve(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[Ge]=e,qe(i),l=i}e.stateNode=l}else Lf(n,e.type,e.stateNode);else e.stateNode=Uf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Lf(n,e.type,e.stateNode):Uf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Xo(e,e.memoizedProps,a.memoizedProps)}break;case 27:at(t,e),lt(e),l&512&&(He||a===null||Ot(a,a.return)),a!==null&&l&4&&Xo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(at(t,e),lt(e),l&512&&(He||a===null||Ot(a,a.return)),e.flags&32){n=e.stateNode;try{nl(n,"")}catch(Q){ve(e,e.return,Q)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Xo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Vo=!0);break;case 6:if(at(t,e),lt(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Q){ve(e,e.return,Q)}}break;case 3:if(Vi=null,n=kt,kt=Qi(t.containerInfo),at(t,e),kt=n,lt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(t.containerInfo)}catch(Q){ve(e,e.return,Q)}Vo&&(Vo=!1,Hd(e));break;case 4:l=kt,kt=Qi(e.stateNode.containerInfo),at(t,e),lt(e),kt=l;break;case 12:at(t,e),lt(e);break;case 31:at(t,e),lt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ki(e,l)));break;case 13:at(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Di=st()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ki(e,l)));break;case 22:n=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,N=Wt,B=He;if(Wt=N||n,He=B||g,at(t,e),He=B,Wt=N,lt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||g||Wt||He||Ja(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(i=g.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=g.stateNode;var O=g.memoizedProps.style,C=O!=null&&O.hasOwnProperty("display")?O.display:null;u.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(Q){ve(g,g.return,Q)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(Q){ve(g,g.return,Q)}}}else if(t.tag===18){if(a===null){g=t;try{var T=g.stateNode;n?Af(T,!0):Af(g.stateNode,!1)}catch(Q){ve(g,g.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ki(e,a))));break;case 19:at(t,e),lt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ki(e,l)));break;case 30:break;case 21:break;default:at(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Td(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=Qo(e);Bi(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(nl(o,""),a.flags&=-33);var u=Qo(e);Bi(e,u,o);break;case 3:case 4:var g=a.stateNode.containerInfo,N=Qo(e);Zo(e,N,g);break;default:throw Error(c(161))}}catch(B){ve(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rd(e,t.alternate,t),t=t.sibling}function Ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Ja(t);break;case 1:Ot(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Cd(t,t.return,a),Ja(t);break;case 27:Nn(t.stateNode);case 26:case 5:Ot(t,t.return),Ja(t);break;case 22:t.memoizedState===null&&Ja(t);break;case 30:Ja(t);break;default:Ja(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ea(n,i,a),gn(4,i);break;case 1:if(ea(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){ve(l,l.return,N)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)hu(g[n],u)}catch(N){ve(l,l.return,N)}}a&&o&64&&Nd(i),vn(i,i.return);break;case 27:Bd(i);case 26:case 5:ea(n,i,a),a&&l===null&&o&4&&Ad(i),vn(i,i.return);break;case 12:ea(n,i,a);break;case 31:ea(n,i,a),a&&o&4&&_d(n,i);break;case 13:ea(n,i,a),a&&o&4&&Od(n,i);break;case 22:i.memoizedState===null&&ea(n,i,a),vn(i,i.return);break;case 30:break;default:ea(n,i,a)}t=t.sibling}}function Ko(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&an(a))}function Jo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e))}function Rt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ld(e,t,a,l),t=t.sibling}function Ld(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Rt(e,t,a,l),n&2048&&gn(9,t);break;case 1:Rt(e,t,a,l);break;case 3:Rt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e)));break;case 12:if(n&2048){Rt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){ve(t,t.return,g)}}else Rt(e,t,a,l);break;case 31:Rt(e,t,a,l);break;case 13:Rt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Rt(e,t,a,l):xn(e,t):i._visibility&2?Rt(e,t,a,l):(i._visibility|=2,El(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ko(o,t);break;case 24:Rt(e,t,a,l),n&2048&&Jo(t.alternate,t);break;default:Rt(e,t,a,l)}}function El(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=a,g=l,N=o.flags;switch(o.tag){case 0:case 11:case 15:El(i,o,u,g,n),gn(8,o);break;case 23:break;case 22:var B=o.stateNode;o.memoizedState!==null?B._visibility&2?El(i,o,u,g,n):xn(i,o):(B._visibility|=2,El(i,o,u,g,n)),n&&N&2048&&Ko(o.alternate,o);break;case 24:El(i,o,u,g,n),n&&N&2048&&Jo(o.alternate,o);break;default:El(i,o,u,g,n)}t=t.sibling}}function xn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:xn(a,l),n&2048&&Ko(l.alternate,l);break;case 24:xn(a,l),n&2048&&Jo(l.alternate,l);break;default:xn(a,l)}t=t.sibling}}var bn=8192;function zl(e,t,a){if(e.subtreeFlags&bn)for(e=e.child;e!==null;)Yd(e,t,a),e=e.sibling}function Yd(e,t,a){switch(e.tag){case 26:zl(e,t,a),e.flags&bn&&e.memoizedState!==null&&e0(a,kt,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,a);break;case 3:case 4:var l=kt;kt=Qi(e.stateNode.containerInfo),zl(e,t,a),kt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=bn,bn=16777216,zl(e,t,a),bn=l):zl(e,t,a));break;default:zl(e,t,a)}}function qd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Fe=l,Gd(l,e)}qd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fd(e),e=e.sibling}function Fd(e){switch(e.tag){case 0:case 11:case 15:yn(e),e.flags&2048&&xa(9,e,e.return);break;case 3:yn(e);break;case 12:yn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ri(e)):yn(e);break;default:yn(e)}}function Ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Fe=l,Gd(l,e)}qd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Ri(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ri(t));break;default:Ri(t)}e=e.sibling}}function Gd(e,t){for(;Fe!==null;){var a=Fe;switch(a.tag){case 0:case 11:case 15:xa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:an(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Fe=l;else e:for(a=e;Fe!==null;){l=Fe;var n=l.sibling,i=l.return;if(Dd(l),l===a){Fe=null;break e}if(n!==null){n.return=i,Fe=n;break e}Fe=i}}}var hh={getCacheForType:function(e){var t=Qe(_e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Qe(_e).controller.signal}},gh=typeof WeakMap=="function"?WeakMap:Map,pe=0,je=null,ne=null,re=0,ge=0,ht=null,ba=!1,Nl=!1,$o=!1,ta=0,Be=0,ya=0,$a=0,Wo=0,gt=0,Cl=0,jn=null,nt=null,Io=!1,Di=0,Xd=0,Mi=1/0,_i=null,ja=null,Ye=0,Sa=null,Al=null,aa=0,Po=0,es=null,Qd=null,Sn=0,ts=null;function vt(){return(pe&2)!==0&&re!==0?re&-re:R.T!==null?os():oc()}function Zd(){if(gt===0)if((re&536870912)===0||se){var e=Gn;Gn<<=1,(Gn&3932160)===0&&(Gn=262144),gt=e}else gt=536870912;return e=mt.current,e!==null&&(e.flags|=32),gt}function it(e,t,a){(e===je&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Tl(e,0),wa(e,re,gt,!1)),Fl(e,a),((pe&2)===0||e!==je)&&(e===je&&((pe&2)===0&&($a|=a),Be===4&&wa(e,re,gt,!1)),Ut(e))}function Vd(e,t,a){if((pe&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ql(e,t),n=l?bh(e,t):ls(e,t,!0),i=l;do{if(n===0){Nl&&!l&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!vh(a)){n=ls(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;n=jn;var g=u.current.memoizedState.isDehydrated;if(g&&(Tl(u,o).flags|=256),o=ls(u,o,!1),o!==2){if($o&&!g){u.errorRecoveryDisabledLanes|=i,$a|=i,n=4;break e}i=nt,nt=n,i!==null&&(nt===null?nt=i:nt.push.apply(nt,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){Tl(e,0),wa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:wa(l,t,gt,!ba);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Di+300-st(),10<n)){if(wa(l,t,gt,!ba),Qn(l,0,!0)!==0)break e;aa=t,l.timeoutHandle=zf(Kd.bind(null,l,a,nt,_i,Io,t,gt,$a,Cl,ba,i,"Throttled",-0,0),n);break e}Kd(l,a,nt,_i,Io,t,gt,$a,Cl,ba,i,null,-0,0)}}break}while(!0);Ut(e)}function Kd(e,t,a,l,n,i,o,u,g,N,B,O,C,T){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Yd(t,i,O);var Q=(i&62914560)===i?Di-st():(i&4194048)===i?Xd-st():0;if(Q=t0(O,Q),Q!==null){aa=i,e.cancelPendingCommit=Q(af.bind(null,e,t,i,a,l,n,o,u,g,B,O,null,C,T)),wa(e,i,o,!N);return}}af(e,t,i,a,l,n,o,u,g)}function vh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!dt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,l){t&=~Wo,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ut(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&nc(e,a,t)}function Oi(){return(pe&6)===0?(wn(0),!1):!0}function as(){if(ne!==null){if(ge===0)var e=ne.return;else e=ne,Qt=qa=null,xo(e),bl=null,nn=0,e=ne;for(;e!==null;)zd(e.alternate,e),e=e.return;ne=null}}function Tl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Uh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,as(),je=e,ne=a=Gt(e.current,null),re=t,ge=0,ht=null,ba=!1,Nl=ql(e,t),$o=!1,Cl=gt=Wo=$a=ya=Be=0,nt=jn=null,Io=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ut(l),i=1<<n;t|=e[n],l&=~i}return ta=t,li(),a}function Jd(e,t){te=null,R.H=mn,t===xl||t===di?(t=du(),ge=3):t===io?(t=du(),ge=4):ge=t===Mo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,ne===null&&(Be=1,zi(e,jt(t,e.current)))}function $d(){var e=mt.current;return e===null?!0:(re&4194048)===re?zt===null:(re&62914560)===re||(re&536870912)!==0?e===zt:!1}function Wd(){var e=R.H;return R.H=mn,e===null?mn:e}function Id(){var e=R.A;return R.A=hh,e}function Ui(){Be=4,ba||(re&4194048)!==re&&mt.current!==null||(Nl=!0),(ya&134217727)===0&&($a&134217727)===0||je===null||wa(je,re,gt,!1)}function ls(e,t,a){var l=pe;pe|=2;var n=Wd(),i=Id();(je!==e||re!==t)&&(_i=null,Tl(e,t)),t=!1;var o=Be;e:do try{if(ge!==0&&ne!==null){var u=ne,g=ht;switch(ge){case 8:as(),o=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var N=ge;if(ge=0,ht=null,Bl(e,u,g,N),a&&Nl){o=0;break e}break;default:N=ge,ge=0,ht=null,Bl(e,u,g,N)}}xh(),o=Be;break}catch(B){Jd(e,B)}while(!0);return t&&e.shellSuspendCounter++,Qt=qa=null,pe=l,R.H=n,R.A=i,ne===null&&(je=null,re=0,li()),o}function xh(){for(;ne!==null;)Pd(ne)}function bh(e,t){var a=pe;pe|=2;var l=Wd(),n=Id();je!==e||re!==t?(_i=null,Mi=st()+500,Tl(e,t)):Nl=ql(e,t);e:do try{if(ge!==0&&ne!==null){t=ne;var i=ht;t:switch(ge){case 1:ge=0,ht=null,Bl(e,t,i,1);break;case 2:case 9:if(cu(i)){ge=0,ht=null,ef(t);break}t=function(){ge!==2&&ge!==9||je!==e||(ge=7),Ut(e)},i.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:cu(i)?(ge=0,ht=null,ef(t)):(ge=0,ht=null,Bl(e,t,i,7));break;case 5:var o=null;switch(ne.tag){case 26:o=ne.memoizedState;case 5:case 27:var u=ne;if(o?Yf(o):u.stateNode.complete){ge=0,ht=null;var g=u.sibling;if(g!==null)ne=g;else{var N=u.return;N!==null?(ne=N,Hi(N)):ne=null}break t}}ge=0,ht=null,Bl(e,t,i,5);break;case 6:ge=0,ht=null,Bl(e,t,i,6);break;case 8:as(),Be=6;break e;default:throw Error(c(462))}}yh();break}catch(B){Jd(e,B)}while(!0);return Qt=qa=null,R.H=l,R.A=n,pe=a,ne!==null?0:(je=null,re=0,li(),Be)}function yh(){for(;ne!==null&&!Gm();)Pd(ne)}function Pd(e){var t=wd(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Hi(e):ne=t}function ef(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=vd(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=vd(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:xo(t);default:zd(a,t),t=ne=Ic(t,ta),t=wd(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Hi(e):ne=t}function Bl(e,t,a,l){Qt=qa=null,xo(t),bl=null,nn=0;var n=t.return;try{if(sh(e,n,t,a,re)){Be=1,zi(e,jt(a,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Be=1,zi(e,jt(a,e.current)),ne=null;return}t.flags&32768?(se||l===1?e=!0:Nl||(re&536870912)!==0?e=!1:(ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),tf(t,e)):Hi(t)}function Hi(e){var t=e;do{if((t.flags&32768)!==0){tf(t,ba);return}e=t.return;var a=dh(t.alternate,t,ta);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Be===0&&(Be=5)}function tf(e,t){do{var a=fh(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Be=6,ne=null}function af(e,t,a,l,n,i,o,u,g){e.cancelPendingCommit=null;do Li();while(Ye!==0);if((pe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Xr,Pm(e,a,i,o,u,g),e===je&&(ne=je=null,re=0),Al=t,Sa=e,aa=a,Po=i,es=n,Qd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Eh(qn,function(){return sf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=H.p,H.p=2,o=pe,pe|=4;try{mh(e,t,a)}finally{pe=o,H.p=n,R.T=l}}Ye=1,lf(),nf(),rf()}}function lf(){if(Ye===1){Ye=0;var e=Sa,t=Al,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=pe;pe|=4;try{Ud(t,e);var i=hs,o=Gc(e.containerInfo),u=i.focusedElem,g=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&Fc(u.ownerDocument.documentElement,u)){if(g!==null&&Lr(u)){var N=g.start,B=g.end;if(B===void 0&&(B=N),"selectionStart"in u)u.selectionStart=N,u.selectionEnd=Math.min(B,u.value.length);else{var O=u.ownerDocument||document,C=O&&O.defaultView||window;if(C.getSelection){var T=C.getSelection(),Q=u.textContent.length,W=Math.min(g.start,Q),ye=g.end===void 0?W:Math.min(g.end,Q);!T.extend&&W>ye&&(o=ye,ye=W,W=o);var S=qc(u,W),x=qc(u,ye);if(S&&x&&(T.rangeCount!==1||T.anchorNode!==S.node||T.anchorOffset!==S.offset||T.focusNode!==x.node||T.focusOffset!==x.offset)){var z=O.createRange();z.setStart(S.node,S.offset),T.removeAllRanges(),W>ye?(T.addRange(z),T.extend(x.node,x.offset)):(z.setEnd(x.node,x.offset),T.addRange(z))}}}}for(O=[],T=u;T=T.parentNode;)T.nodeType===1&&O.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<O.length;u++){var M=O[u];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Wi=!!ps,hs=ps=null}finally{pe=n,H.p=l,R.T=a}}e.current=t,Ye=2}}function nf(){if(Ye===2){Ye=0;var e=Sa,t=Al,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=pe;pe|=4;try{Rd(e,t.alternate,t)}finally{pe=n,H.p=l,R.T=a}}Ye=3}}function rf(){if(Ye===4||Ye===3){Ye=0,Xm();var e=Sa,t=Al,a=aa,l=Qd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,Al=Sa=null,of(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ja=null),yr(a),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=H.p,H.p=2,R.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var u=l[o];i(u.value,{componentStack:u.stack})}}finally{R.T=t,H.p=n}}(aa&3)!==0&&Li(),Ut(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===ts?Sn++:(Sn=0,ts=e):Sn=0,wn(0)}}function of(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,an(t)))}function Li(){return lf(),nf(),rf(),sf()}function sf(){if(Ye!==5)return!1;var e=Sa,t=Po;Po=0;var a=yr(aa),l=R.T,n=H.p;try{H.p=32>a?32:a,R.T=null,a=es,es=null;var i=Sa,o=aa;if(Ye=0,Al=Sa=null,aa=0,(pe&6)!==0)throw Error(c(331));var u=pe;if(pe|=4,Fd(i.current),Ld(i,i.current,o,a),pe=u,wn(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Yl,i)}catch{}return!0}finally{H.p=n,R.T=l,of(e,t)}}function cf(e,t,a){t=jt(a,t),t=Do(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Fl(e,2),Ut(e))}function ve(e,t,a){if(e.tag===3)cf(e,e,a);else for(;t!==null;){if(t.tag===3){cf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ja===null||!ja.has(l))){e=jt(a,e),a=cd(2),l=ha(t,a,2),l!==null&&(ud(a,l,t,e),Fl(l,2),Ut(l));break}}t=t.return}}function ns(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new gh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||($o=!0,n.add(a),e=jh.bind(null,e,t,a),t.then(e,e))}function jh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(re&a)===a&&(Be===4||Be===3&&(re&62914560)===re&&300>st()-Di?(pe&2)===0&&Tl(e,0):Wo|=a,Cl===re&&(Cl=0)),Ut(e)}function uf(e,t){t===0&&(t=lc()),e=Ha(e,t),e!==null&&(Fl(e,t),Ut(e))}function Sh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),uf(e,a)}function wh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),uf(e,a)}function Eh(e,t){return gr(e,t)}var Yi=null,kl=null,is=!1,qi=!1,rs=!1,Ea=0;function Ut(e){e!==kl&&e.next===null&&(kl===null?Yi=kl=e:kl=kl.next=e),qi=!0,is||(is=!0,Nh())}function wn(e,t){if(!rs&&qi){rs=!0;do for(var a=!1,l=Yi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-ut(42|e)+1)-1,i&=n&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,pf(l,i))}else i=re,i=Qn(l,l===je?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||ql(l,i)||(a=!0,pf(l,i));l=l.next}while(a);rs=!1}}function zh(){df()}function df(){qi=is=!1;var e=0;Ea!==0&&Oh()&&(e=Ea);for(var t=st(),a=null,l=Yi;l!==null;){var n=l.next,i=ff(l,t);i===0?(l.next=null,a===null?Yi=n:a.next=n,n===null&&(kl=a)):(a=l,(e!==0||(i&3)!==0)&&(qi=!0)),l=n}Ye!==0&&Ye!==5||wn(e),Ea!==0&&(Ea=0)}function ff(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ut(i),u=1<<o,g=n[o];g===-1?((u&a)===0||(u&l)!==0)&&(n[o]=Im(u,t)):g<=t&&(e.expiredLanes|=u),i&=~u}if(t=je,a=re,a=Qn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&vr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ql(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&vr(l),yr(a)){case 2:case 8:a=tc;break;case 32:a=qn;break;case 268435456:a=ac;break;default:a=qn}return l=mf.bind(null,e),a=gr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&vr(l),e.callbackPriority=2,e.callbackNode=null,2}function mf(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Li()&&e.callbackNode!==a)return null;var l=re;return l=Qn(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vd(e,l,t),ff(e,st()),e.callbackNode!=null&&e.callbackNode===a?mf.bind(null,e):null)}function pf(e,t){if(Li())return null;Vd(e,t,!0)}function Nh(){Hh(function(){(pe&6)!==0?gr(ec,zh):df()})}function os(){if(Ea===0){var e=gl;e===0&&(e=Fn,Fn<<=1,(Fn&261888)===0&&(Fn=256)),Ea=e}return Ea}function hf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jn(""+e)}function gf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ch(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=hf((n[Pe]||null).action),o=l.submitter;o&&(t=(t=o[Pe]||null)?hf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new Pn("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ea!==0){var g=o?gf(n,o):new FormData(n);Co(a,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(u.preventDefault(),g=o?gf(n,o):new FormData(n),Co(a,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var ss=0;ss<Gr.length;ss++){var cs=Gr[ss],Ah=cs.toLowerCase(),Th=cs[0].toUpperCase()+cs.slice(1);Bt(Ah,"on"+Th)}Bt(Zc,"onAnimationEnd"),Bt(Vc,"onAnimationIteration"),Bt(Kc,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Qp,"onTransitionRun"),Bt(Zp,"onTransitionStart"),Bt(Vp,"onTransitionCancel"),Bt(Jc,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En));function vf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var u=l[o],g=u.instance,N=u.currentTarget;if(u=u.listener,g!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=N;try{i(n)}catch(B){ai(B)}n.currentTarget=null,i=g}else for(o=0;o<l.length;o++){if(u=l[o],g=u.instance,N=u.currentTarget,u=u.listener,g!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=N;try{i(n)}catch(B){ai(B)}n.currentTarget=null,i=g}}}}function ie(e,t){var a=t[jr];a===void 0&&(a=t[jr]=new Set);var l=e+"__bubble";a.has(l)||(xf(t,e,2,!1),a.add(l))}function us(e,t,a){var l=0;t&&(l|=4),xf(a,e,l,t)}var Fi="_reactListening"+Math.random().toString(36).slice(2);function ds(e){if(!e[Fi]){e[Fi]=!0,uc.forEach(function(a){a!=="selectionchange"&&(Bh.has(a)||us(a,!1,e),us(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fi]||(t[Fi]=!0,us("selectionchange",!1,t))}}function xf(e,t,a,l){switch(Vf(t)){case 2:var n=n0;break;case 8:n=i0;break;default:n=Ns}a=n.bind(null,t,a,e),n=void 0,!Br||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function fs(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var u=l.stateNode.containerInfo;if(u===n)break;if(o===4)for(o=l.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;u!==null;){if(o=Pa(u),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){l=i=o;continue e}u=u.parentNode}}l=l.return}Sc(function(){var N=i,B=Ar(a),O=[];e:{var C=$c.get(e);if(C!==void 0){var T=Pn,Q=e;switch(e){case"keypress":if(Wn(a)===0)break e;case"keydown":case"keyup":T=wp;break;case"focusin":Q="focus",T=Mr;break;case"focusout":Q="blur",T=Mr;break;case"beforeblur":case"afterblur":T=Mr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Np;break;case Zc:case Vc:case Kc:T=pp;break;case Jc:T=Ap;break;case"scroll":case"scrollend":T=cp;break;case"wheel":T=Bp;break;case"copy":case"cut":case"paste":T=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Cc;break;case"toggle":case"beforetoggle":T=Rp}var W=(t&4)!==0,ye=!W&&(e==="scroll"||e==="scrollend"),S=W?C!==null?C+"Capture":null:C;W=[];for(var x=N,z;x!==null;){var M=x;if(z=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||z===null||S===null||(M=Ql(x,S),M!=null&&W.push(zn(x,M,z))),ye)break;x=x.return}0<W.length&&(C=new T(C,Q,null,a,B),O.push({event:C,listeners:W}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",C&&a!==Cr&&(Q=a.relatedTarget||a.fromElement)&&(Pa(Q)||Q[Ia]))break e;if((T||C)&&(C=B.window===B?B:(C=B.ownerDocument)?C.defaultView||C.parentWindow:window,T?(Q=a.relatedTarget||a.toElement,T=N,Q=Q?Pa(Q):null,Q!==null&&(ye=h(Q),W=Q.tag,Q!==ye||W!==5&&W!==27&&W!==6)&&(Q=null)):(T=null,Q=N),T!==Q)){if(W=zc,M="onMouseLeave",S="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(W=Cc,M="onPointerLeave",S="onPointerEnter",x="pointer"),ye=T==null?C:Xl(T),z=Q==null?C:Xl(Q),C=new W(M,x+"leave",T,a,B),C.target=ye,C.relatedTarget=z,M=null,Pa(B)===N&&(W=new W(S,x+"enter",Q,a,B),W.target=z,W.relatedTarget=ye,M=W),ye=M,T&&Q)t:{for(W=kh,S=T,x=Q,z=0,M=S;M;M=W(M))z++;M=0;for(var $=x;$;$=W($))M++;for(;0<z-M;)S=W(S),z--;for(;0<M-z;)x=W(x),M--;for(;z--;){if(S===x||x!==null&&S===x.alternate){W=S;break t}S=W(S),x=W(x)}W=null}else W=null;T!==null&&bf(O,C,T,W,!1),Q!==null&&ye!==null&&bf(O,ye,Q,W,!0)}}e:{if(C=N?Xl(N):window,T=C.nodeName&&C.nodeName.toLowerCase(),T==="select"||T==="input"&&C.type==="file")var de=_c;else if(Dc(C))if(Oc)de=Fp;else{de=Yp;var J=Lp}else T=C.nodeName,!T||T.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?N&&Nr(N.elementType)&&(de=_c):de=qp;if(de&&(de=de(e,N))){Mc(O,de,a,B);break e}J&&J(e,C,N),e==="focusout"&&N&&C.type==="number"&&N.memoizedProps.value!=null&&zr(C,"number",C.value)}switch(J=N?Xl(N):window,e){case"focusin":(Dc(J)||J.contentEditable==="true")&&(sl=J,Yr=N,Pl=null);break;case"focusout":Pl=Yr=sl=null;break;case"mousedown":qr=!0;break;case"contextmenu":case"mouseup":case"dragend":qr=!1,Xc(O,a,B);break;case"selectionchange":if(Xp)break;case"keydown":case"keyup":Xc(O,a,B)}var ae;if(Or)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else ol?kc(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Ac&&a.locale!=="ko"&&(ol||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ol&&(ae=wc()):(sa=B,kr="value"in sa?sa.value:sa.textContent,ol=!0)),J=Gi(N,oe),0<J.length&&(oe=new Nc(oe,e,null,a,B),O.push({event:oe,listeners:J}),ae?oe.data=ae:(ae=Rc(a),ae!==null&&(oe.data=ae)))),(ae=Mp?_p(e,a):Op(e,a))&&(oe=Gi(N,"onBeforeInput"),0<oe.length&&(J=new Nc("onBeforeInput","beforeinput",null,a,B),O.push({event:J,listeners:oe}),J.data=ae)),Ch(O,e,N,a,B)}vf(O,t)})}function zn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Gi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ql(e,a),n!=null&&l.unshift(zn(e,n,i)),n=Ql(e,t),n!=null&&l.push(zn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function kh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bf(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var u=a,g=u.alternate,N=u.stateNode;if(u=u.tag,g!==null&&g===l)break;u!==5&&u!==26&&u!==27||N===null||(g=N,n?(N=Ql(a,i),N!=null&&o.unshift(zn(a,N,g))):n||(N=Ql(a,i),N!=null&&o.push(zn(a,N,g)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Rh=/\r\n?/g,Dh=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(Rh,`
`).replace(Dh,"")}function jf(e,t){return t=yf(t),yf(e)===t}function be(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||nl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&nl(e,""+l);break;case"className":Vn(e,"class",l);break;case"tabIndex":Vn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Vn(e,a,l);break;case"style":yc(e,l,i);break;case"data":if(t!=="object"){Vn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Jn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&be(e,t,"name",n.name,n,null),be(e,t,"formEncType",n.formEncType,n,null),be(e,t,"formMethod",n.formMethod,n,null),be(e,t,"formTarget",n.formTarget,n,null)):(be(e,t,"encType",n.encType,n,null),be(e,t,"method",n.method,n,null),be(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Jn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qt);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Jn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Zn(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Zn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=op.get(a)||a,Zn(e,a,l))}}function ms(e,t,a,l,n,i){switch(a){case"style":yc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?nl(e,l):(typeof l=="number"||typeof l=="bigint")&&nl(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Pe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Zn(e,a,l)}}}function Ve(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:be(e,t,i,o,a,null)}}n&&be(e,t,"srcSet",a.srcSet,a,null),l&&be(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var u=i=o=n=null,g=null,N=null;for(l in a)if(a.hasOwnProperty(l)){var B=a[l];if(B!=null)switch(l){case"name":n=B;break;case"type":o=B;break;case"checked":g=B;break;case"defaultChecked":N=B;break;case"value":i=B;break;case"defaultValue":u=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:be(e,t,l,B,a,null)}}gc(e,i,u,g,N,o,n,!1);return;case"select":ie("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":l=u;default:be(e,t,n,u,a,null)}t=i,a=o,e.multiple=!!l,t!=null?ll(e,!!l,t,!1):a!=null&&ll(e,!!l,a,!0);return;case"textarea":ie("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:be(e,t,o,u,a,null)}xc(e,l,n,i);return;case"option":for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null)&&(g==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":be(e,t,g,l,a,null));return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<En.length;l++)ie(En[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:be(e,t,N,l,a,null)}return;default:if(Nr(t)){for(B in a)a.hasOwnProperty(B)&&(l=a[B],l!==void 0&&ms(e,t,B,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&be(e,t,u,l,a,null))}function Mh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,u=null,g=null,N=null,B=null;for(T in a){var O=a[T];if(a.hasOwnProperty(T)&&O!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":g=O;default:l.hasOwnProperty(T)||be(e,t,T,null,l,O)}}for(var C in l){var T=l[C];if(O=a[C],l.hasOwnProperty(C)&&(T!=null||O!=null))switch(C){case"type":i=T;break;case"name":n=T;break;case"checked":N=T;break;case"defaultChecked":B=T;break;case"value":o=T;break;case"defaultValue":u=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:T!==O&&be(e,t,C,T,l,O)}}Er(e,o,u,g,N,B,i,n);return;case"select":T=o=u=C=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":T=g;default:l.hasOwnProperty(i)||be(e,t,i,null,l,g)}for(n in l)if(i=l[n],g=a[n],l.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":C=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==g&&be(e,t,n,i,l,g)}t=u,a=o,l=T,C!=null?ll(e,!!a,C,!1):!!l!=!!a&&(t!=null?ll(e,!!a,t,!0):ll(e,!!a,a?[]:"",!1));return;case"textarea":T=C=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:be(e,t,u,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":C=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&be(e,t,o,n,l,i)}vc(e,C,T);return;case"option":for(var Q in a)C=a[Q],a.hasOwnProperty(Q)&&C!=null&&!l.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:be(e,t,Q,null,l,C));for(g in l)C=l[g],T=a[g],l.hasOwnProperty(g)&&C!==T&&(C!=null||T!=null)&&(g==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":be(e,t,g,C,l,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)C=a[W],a.hasOwnProperty(W)&&C!=null&&!l.hasOwnProperty(W)&&be(e,t,W,null,l,C);for(N in l)if(C=l[N],T=a[N],l.hasOwnProperty(N)&&C!==T&&(C!=null||T!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:be(e,t,N,C,l,T)}return;default:if(Nr(t)){for(var ye in a)C=a[ye],a.hasOwnProperty(ye)&&C!==void 0&&!l.hasOwnProperty(ye)&&ms(e,t,ye,void 0,l,C);for(B in l)C=l[B],T=a[B],!l.hasOwnProperty(B)||C===T||C===void 0&&T===void 0||ms(e,t,B,C,l,T);return}}for(var S in a)C=a[S],a.hasOwnProperty(S)&&C!=null&&!l.hasOwnProperty(S)&&be(e,t,S,null,l,C);for(O in l)C=l[O],T=a[O],!l.hasOwnProperty(O)||C===T||C==null&&T==null||be(e,t,O,C,l,T)}function Sf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _h(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,u=n.duration;if(i&&u&&Sf(o)){for(o=0,u=n.responseEnd,l+=1;l<a.length;l++){var g=a[l],N=g.startTime;if(N>u)break;var B=g.transferSize,O=g.initiatorType;B&&Sf(O)&&(g=g.responseEnd,o+=B*(g<u?1:(u-N)/(g-N)))}if(--l,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ps=null,hs=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function wf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ef(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vs=null;function Oh(){var e=window.event;return e&&e.type==="popstate"?e===vs?!1:(vs=e,!0):(vs=null,!1)}var zf=typeof setTimeout=="function"?setTimeout:void 0,Uh=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,Hh=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(e){return Nf.resolve(null).then(e).catch(Lh)}:zf;function Lh(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Cf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),_l(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Nn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Nn(a);for(var i=a.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[Gl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&Nn(e.ownerDocument.body);a=n}while(a);_l(t)}function Af(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function xs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xs(a),Sr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Yh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Nt(e.nextSibling),e===null)break}return null}function qh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Nt(e.nextSibling),e===null))return null;return e}function Tf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Nt(e.nextSibling),e===null))return null;return e}function bs(e){return e.data==="$?"||e.data==="$~"}function ys(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var js=null;function Bf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Nt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function kf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Rf(e,t,a){switch(t=Xi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Nn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Sr(e)}var Ct=new Map,Df=new Set;function Qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=H.d;H.d={f:Gh,r:Xh,D:Qh,C:Zh,L:Vh,m:Kh,X:$h,S:Jh,M:Wh};function Gh(){var e=la.f(),t=Oi();return e||t}function Xh(e){var t=el(e);t!==null&&t.tag===5&&t.type==="form"?Ju(t):la.r(e)}var Rl=typeof document>"u"?null:document;function Mf(e,t,a){var l=Rl;if(l&&typeof t=="string"&&t){var n=bt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Df.has(n)||(Df.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ve(t,"link",e),qe(t),l.head.appendChild(t)))}}function Qh(e){la.D(e),Mf("dns-prefetch",e,null)}function Zh(e,t){la.C(e,t),Mf("preconnect",e,t)}function Vh(e,t,a){la.L(e,t,a);var l=Rl;if(l&&e&&t){var n='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+bt(a.imageSizes)+'"]')):n+='[href="'+bt(e)+'"]';var i=n;switch(t){case"style":i=Dl(e);break;case"script":i=Ml(e)}Ct.has(i)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Cn(i))||t==="script"&&l.querySelector(An(i))||(t=l.createElement("link"),Ve(t,"link",e),qe(t),l.head.appendChild(t)))}}function Kh(e,t){la.m(e,t);var a=Rl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ml(e)}if(!Ct.has(i)&&(e=y({rel:"modulepreload",href:e},t),Ct.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(An(i)))return}l=a.createElement("link"),Ve(l,"link",e),qe(l),a.head.appendChild(l)}}}function Jh(e,t,a){la.S(e,t,a);var l=Rl;if(l&&e){var n=tl(l).hoistableStyles,i=Dl(e);t=t||"default";var o=n.get(i);if(!o){var u={loading:0,preload:null};if(o=l.querySelector(Cn(i)))u.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(i))&&Ss(e,a);var g=o=l.createElement("link");qe(g),Ve(g,"link",e),g._p=new Promise(function(N,B){g.onload=N,g.onerror=B}),g.addEventListener("load",function(){u.loading|=1}),g.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Zi(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:u},n.set(i,o)}}}function $h(e,t){la.X(e,t);var a=Rl;if(a&&e){var l=tl(a).hoistableScripts,n=Ml(e),i=l.get(n);i||(i=a.querySelector(An(n)),i||(e=y({src:e,async:!0},t),(t=Ct.get(n))&&ws(e,t),i=a.createElement("script"),qe(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Wh(e,t){la.M(e,t);var a=Rl;if(a&&e){var l=tl(a).hoistableScripts,n=Ml(e),i=l.get(n);i||(i=a.querySelector(An(n)),i||(e=y({src:e,async:!0,type:"module"},t),(t=Ct.get(n))&&ws(e,t),i=a.createElement("script"),qe(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function _f(e,t,a,l){var n=(n=le.current)?Qi(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Dl(a.href),a=tl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Dl(a.href);var i=tl(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(Cn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),i||Ih(n,e,a,o.state))),t&&l===null)throw Error(c(528,""));return o}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ml(a),a=tl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Dl(e){return'href="'+bt(e)+'"'}function Cn(e){return'link[rel="stylesheet"]['+e+"]"}function Of(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Ih(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ve(t,"link",a),qe(t),e.head.appendChild(t))}function Ml(e){return'[src="'+bt(e)+'"]'}function An(e){return"script[async]"+e}function Uf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,qe(l),l;var n=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Ve(l,"style",n),Zi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Dl(a.href);var i=e.querySelector(Cn(n));if(i)return t.state.loading|=4,t.instance=i,qe(i),i;l=Of(a),(n=Ct.get(n))&&Ss(l,n),i=(e.ownerDocument||e).createElement("link"),qe(i);var o=i;return o._p=new Promise(function(u,g){o.onload=u,o.onerror=g}),Ve(i,"link",l),t.state.loading|=4,Zi(i,a.precedence,e),t.instance=i;case"script":return i=Ml(a.src),(n=e.querySelector(An(i)))?(t.instance=n,qe(n),n):(l=a,(n=Ct.get(i))&&(l=y({},a),ws(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),qe(n),Ve(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Zi(l,a.precedence,e));return t.instance}function Zi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var u=l[o];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ss(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vi=null;function Hf(e,t,a){if(Vi===null){var l=new Map,n=Vi=new Map;n.set(a,l)}else n=Vi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Gl]||i[Ge]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=l.get(o);u?u.push(i):l.set(o,[i])}}return l}function Lf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ph(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Yf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function e0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Dl(l.href),i=t.querySelector(Cn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ki.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,qe(i);return}i=t.ownerDocument||t,l=Of(l),(n=Ct.get(n))&&Ss(l,n),i=i.createElement("link"),qe(i);var o=i;o._p=new Promise(function(u,g){o.onload=u,o.onerror=g}),Ve(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ki.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Es=0;function t0(e,t){return e.stylesheets&&e.count===0&&$i(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Es===0&&(Es=62500*_h());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Es?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$i(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ji=null;function $i(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ji=new Map,t.forEach(a0,e),Ji=null,Ki.call(e))}function a0(e,t){if(!(t.state.loading&4)){var a=Ji.get(e);if(a)var l=a.get(null);else{a=new Map,Ji.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=Ki.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Tn={$$typeof:F,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function l0(e,t,a,l,n,i,o,u,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.hiddenUpdates=xr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function qf(e,t,a,l,n,i,o,u,g,N,B,O){return e=new l0(e,t,a,o,g,N,B,O,u),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),e.current=i,i.stateNode=e,t=ao(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ro(i),e}function Ff(e){return e?(e=dl,e):dl}function Gf(e,t,a,l,n,i){n=Ff(n),l.context===null?l.context=n:l.pendingContext=n,l=pa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ha(e,l,t),a!==null&&(it(a,e,t),on(a,e,t))}function Xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function zs(e,t){Xf(e,t),(e=e.alternate)&&Xf(e,t)}function Qf(e){if(e.tag===13||e.tag===31){var t=Ha(e,67108864);t!==null&&it(t,e,67108864),zs(e,67108864)}}function Zf(e){if(e.tag===13||e.tag===31){var t=vt();t=br(t);var a=Ha(e,t);a!==null&&it(a,e,t),zs(e,t)}}var Wi=!0;function n0(e,t,a,l){var n=R.T;R.T=null;var i=H.p;try{H.p=2,Ns(e,t,a,l)}finally{H.p=i,R.T=n}}function i0(e,t,a,l){var n=R.T;R.T=null;var i=H.p;try{H.p=8,Ns(e,t,a,l)}finally{H.p=i,R.T=n}}function Ns(e,t,a,l){if(Wi){var n=Cs(l);if(n===null)fs(e,t,l,Ii,a),Kf(e,l);else if(o0(n,e,t,a,l))l.stopPropagation();else if(Kf(e,l),t&4&&-1<r0.indexOf(e)){for(;n!==null;){var i=el(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Da(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var g=1<<31-ut(o);u.entanglements[1]|=g,o&=~g}Ut(i),(pe&6)===0&&(Mi=st()+500,wn(0))}}break;case 31:case 13:u=Ha(i,2),u!==null&&it(u,i,2),Oi(),zs(i,2)}if(i=Cs(l),i===null&&fs(e,t,l,Ii,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else fs(e,t,l,null,a)}}function Cs(e){return e=Ar(e),As(e)}var Ii=null;function As(e){if(Ii=null,e=Pa(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ii=e,null}function Vf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qm()){case ec:return 2;case tc:return 8;case qn:case Zm:return 32;case ac:return 268435456;default:return 32}default:return 32}}var Ts=!1,Na=null,Ca=null,Aa=null,Bn=new Map,kn=new Map,Ta=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kf(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kn.delete(t.pointerId)}}function Rn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=el(t),t!==null&&Qf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function o0(e,t,a,l,n){switch(t){case"focusin":return Na=Rn(Na,e,t,a,l,n),!0;case"dragenter":return Ca=Rn(Ca,e,t,a,l,n),!0;case"mouseover":return Aa=Rn(Aa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Bn.set(i,Rn(Bn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,kn.set(i,Rn(kn.get(i)||null,e,t,a,l,n)),!0}return!1}function Jf(e){var t=Pa(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,sc(e.priority,function(){Zf(a)});return}}else if(t===31){if(t=A(a),t!==null){e.blockedOn=t,sc(e.priority,function(){Zf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Cs(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Cr=l,a.target.dispatchEvent(l),Cr=null}else return t=el(a),t!==null&&Qf(t),e.blockedOn=a,!1;t.shift()}return!0}function $f(e,t,a){Pi(e)&&a.delete(t)}function s0(){Ts=!1,Na!==null&&Pi(Na)&&(Na=null),Ca!==null&&Pi(Ca)&&(Ca=null),Aa!==null&&Pi(Aa)&&(Aa=null),Bn.forEach($f),kn.forEach($f)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,Ts||(Ts=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,s0)))}var tr=null;function Wf(e){tr!==e&&(tr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){tr===e&&(tr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(As(l||a)===null)continue;break}var i=el(a);i!==null&&(e.splice(t,3),t-=3,Co(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function _l(e){function t(g){return er(g,e)}Na!==null&&er(Na,e),Ca!==null&&er(Ca,e),Aa!==null&&er(Aa,e),Bn.forEach(t),kn.forEach(t);for(var a=0;a<Ta.length;a++){var l=Ta[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Jf(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[Pe]||null;if(typeof i=="function")o||Wf(a);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Pe]||null)u=o.formAction;else if(As(n)!==null)continue}else u=o.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Wf(a)}}}function If(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Bs(e){this._internalRoot=e}ar.prototype.render=Bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=vt();Gf(a,l,e,t,null,null)},ar.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gf(e.current,2,null,e,null,null),Oi(),t[Ia]=null}};function ar(e){this._internalRoot=e}ar.prototype.unstable_scheduleHydration=function(e){if(e){var t=oc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ta.length&&t!==0&&t<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&Jf(e)}};var Pf=d.version;if(Pf!=="19.2.4")throw Error(c(527,Pf,"19.2.4"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var c0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lr.isDisabled&&lr.supportsFiber)try{Yl=lr.inject(c0),ct=lr}catch{}}return Mn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=id,i=rd,o=od;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qf(e,1,!1,null,null,a,l,null,n,i,o,If),e[Ia]=t.current,ds(e),new Bs(t)},Mn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",i=id,o=rd,u=od,g=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=qf(e,1,!0,t,a??null,l,n,g,i,o,u,If),t.context=Ff(null),a=t.current,l=vt(),l=br(l),n=pa(l),n.callback=null,ha(a,n,l),a=l,t.current.lanes=a,Fl(t,a),Ut(t),e[Ia]=t.current,ds(e),new ar(t)},Mn.version="19.2.4",Mn}var cm;function b0(){if(cm)return Ds.exports;cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Ds.exports=x0(),Ds.exports}var y0=b0();var um="popstate";function dm(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function j0(s={}){function d(m,h){let{pathname:v="/",search:A="",hash:j=""}=Wa(m.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),qs("",{pathname:v,search:A,hash:j},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function f(m,h){let v=m.document.querySelector("base"),A="";if(v&&v.getAttribute("href")){let j=m.location.href,p=j.indexOf("#");A=p===-1?j:j.slice(0,p)}return A+"#"+(typeof h=="string"?h:On(h))}function c(m,h){Dt(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return w0(d,f,c,s)}function Ce(s,d){if(s===!1||s===null||typeof s>"u")throw new Error(d)}function Dt(s,d){if(!s){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function S0(){return Math.random().toString(36).substring(2,10)}function fm(s,d){return{usr:s.state,key:s.key,idx:d,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function qs(s,d,f=null,c,m){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof d=="string"?Wa(d):d,state:f,key:d&&d.key||c||S0(),unstable_mask:m}}function On({pathname:s="/",search:d="",hash:f=""}){return d&&d!=="?"&&(s+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(s+=f.charAt(0)==="#"?f:"#"+f),s}function Wa(s){let d={};if(s){let f=s.indexOf("#");f>=0&&(d.hash=s.substring(f),s=s.substring(0,f));let c=s.indexOf("?");c>=0&&(d.search=s.substring(c),s=s.substring(0,c)),s&&(d.pathname=s)}return d}function w0(s,d,f,c={}){let{window:m=document.defaultView,v5Compat:h=!1}=c,v=m.history,A="POP",j=null,p=w();p==null&&(p=0,v.replaceState({...v.state,idx:p},""));function w(){return(v.state||{idx:null}).idx}function y(){A="POP";let D=w(),Y=D==null?null:D-p;p=D,j&&j({action:A,location:k.location,delta:Y})}function _(D,Y){A="PUSH";let X=dm(D)?D:qs(k.location,D,Y);f&&f(X,D),p=w()+1;let F=fm(X,p),Z=k.createHref(X.unstable_mask||X);try{v.pushState(F,"",Z)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;m.location.assign(Z)}h&&j&&j({action:A,location:k.location,delta:1})}function L(D,Y){A="REPLACE";let X=dm(D)?D:qs(k.location,D,Y);f&&f(X,D),p=w();let F=fm(X,p),Z=k.createHref(X.unstable_mask||X);v.replaceState(F,"",Z),h&&j&&j({action:A,location:k.location,delta:0})}function G(D){return E0(D)}let k={get action(){return A},get location(){return s(m,v)},listen(D){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(um,y),j=D,()=>{m.removeEventListener(um,y),j=null}},createHref(D){return d(m,D)},createURL:G,encodeLocation(D){let Y=G(D);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:_,replace:L,go(D){return v.go(D)}};return k}function E0(s,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(f,"No window.location.(origin|href) available to create URL");let c=typeof s=="string"?s:On(s);return c=c.replace(/ $/,"%20"),!d&&c.startsWith("//")&&(c=f+c),new URL(c,f)}function ym(s,d,f="/"){return z0(s,d,f,!1)}function z0(s,d,f,c){let m=typeof d=="string"?Wa(d):d,h=ia(m.pathname||"/",f);if(h==null)return null;let v=jm(s);N0(v);let A=null;for(let j=0;A==null&&j<v.length;++j){let p=U0(h);A=_0(v[j],p,c)}return A}function jm(s,d=[],f=[],c="",m=!1){let h=(v,A,j=m,p)=>{let w={relativePath:p===void 0?v.path||"":p,caseSensitive:v.caseSensitive===!0,childrenIndex:A,route:v};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(c)&&j)return;Ce(w.relativePath.startsWith(c),`Absolute route path "${w.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(c.length)}let y=Ht([c,w.relativePath]),_=f.concat(w);v.children&&v.children.length>0&&(Ce(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),jm(v.children,d,_,y,j)),!(v.path==null&&!v.index)&&d.push({path:y,score:D0(y,v.index),routesMeta:_})};return s.forEach((v,A)=>{if(v.path===""||!v.path?.includes("?"))h(v,A);else for(let j of Sm(v.path))h(v,A,!0,j)}),d}function Sm(s){let d=s.split("/");if(d.length===0)return[];let[f,...c]=d,m=f.endsWith("?"),h=f.replace(/\?$/,"");if(c.length===0)return m?[h,""]:[h];let v=Sm(c.join("/")),A=[];return A.push(...v.map(j=>j===""?h:[h,j].join("/"))),m&&A.push(...v),A.map(j=>s.startsWith("/")&&j===""?"/":j)}function N0(s){s.sort((d,f)=>d.score!==f.score?f.score-d.score:M0(d.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var C0=/^:[\w-]+$/,A0=3,T0=2,B0=1,k0=10,R0=-2,mm=s=>s==="*";function D0(s,d){let f=s.split("/"),c=f.length;return f.some(mm)&&(c+=R0),d&&(c+=T0),f.filter(m=>!mm(m)).reduce((m,h)=>m+(C0.test(h)?A0:h===""?B0:k0),c)}function M0(s,d){return s.length===d.length&&s.slice(0,-1).every((c,m)=>c===d[m])?s[s.length-1]-d[d.length-1]:0}function _0(s,d,f=!1){let{routesMeta:c}=s,m={},h="/",v=[];for(let A=0;A<c.length;++A){let j=c[A],p=A===c.length-1,w=h==="/"?d:d.slice(h.length)||"/",y=or({path:j.relativePath,caseSensitive:j.caseSensitive,end:p},w),_=j.route;if(!y&&p&&f&&!c[c.length-1].route.index&&(y=or({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},w)),!y)return null;Object.assign(m,y.params),v.push({params:m,pathname:Ht([h,y.pathname]),pathnameBase:q0(Ht([h,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(h=Ht([h,y.pathnameBase]))}return v}function or(s,d){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[f,c]=O0(s.path,s.caseSensitive,s.end),m=d.match(f);if(!m)return null;let h=m[0],v=h.replace(/(.)\/+$/,"$1"),A=m.slice(1);return{params:c.reduce((p,{paramName:w,isOptional:y},_)=>{if(w==="*"){let G=A[_]||"";v=h.slice(0,h.length-G.length).replace(/(.)\/+$/,"$1")}const L=A[_];return y&&!L?p[w]=void 0:p[w]=(L||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:v,pattern:s}}function O0(s,d=!1,f=!0){Dt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let c=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,A,j,p,w)=>{if(c.push({paramName:A,isOptional:j!=null}),j){let y=w.charAt(p+v.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(c.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),c]}function U0(s){try{return s.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Dt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),s}}function ia(s,d){if(d==="/")return s;if(!s.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,c=s.charAt(f);return c&&c!=="/"?null:s.slice(f)||"/"}var H0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function L0(s,d="/"){let{pathname:f,search:c="",hash:m=""}=typeof s=="string"?Wa(s):s,h;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?h=pm(f.substring(1),"/"):h=pm(f,d)):h=d,{pathname:h,search:F0(c),hash:G0(m)}}function pm(s,d){let f=d.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Us(s,d,f,c){return`Cannot include a '${s}' character in a manually specified \`to.${d}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Y0(s){return s.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function wm(s){let d=Y0(s);return d.map((f,c)=>c===d.length-1?f.pathname:f.pathnameBase)}function Xs(s,d,f,c=!1){let m;typeof s=="string"?m=Wa(s):(m={...s},Ce(!m.pathname||!m.pathname.includes("?"),Us("?","pathname","search",m)),Ce(!m.pathname||!m.pathname.includes("#"),Us("#","pathname","hash",m)),Ce(!m.search||!m.search.includes("#"),Us("#","search","hash",m)));let h=s===""||m.pathname==="",v=h?"/":m.pathname,A;if(v==null)A=f;else{let y=d.length-1;if(!c&&v.startsWith("..")){let _=v.split("/");for(;_[0]==="..";)_.shift(),y-=1;m.pathname=_.join("/")}A=y>=0?d[y]:"/"}let j=L0(m,A),p=v&&v!=="/"&&v.endsWith("/"),w=(h||v===".")&&f.endsWith("/");return!j.pathname.endsWith("/")&&(p||w)&&(j.pathname+="/"),j}var Ht=s=>s.join("/").replace(/\/\/+/g,"/"),q0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),F0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,G0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,X0=class{constructor(s,d,f,c=!1){this.status=s,this.statusText=d||"",this.internal=c,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Q0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Z0(s){return s.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Em=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function zm(s,d){let f=s;if(typeof f!="string"||!H0.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let c=f,m=!1;if(Em)try{let h=new URL(window.location.href),v=f.startsWith("//")?new URL(h.protocol+f):new URL(f),A=ia(v.pathname,d);v.origin===h.origin&&A!=null?f=A+v.search+v.hash:m=!0}catch{Dt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Nm=["POST","PUT","PATCH","DELETE"];new Set(Nm);var V0=["GET",...Nm];new Set(V0);var Ul=E.createContext(null);Ul.displayName="DataRouter";var sr=E.createContext(null);sr.displayName="DataRouterState";var K0=E.createContext(!1),Cm=E.createContext({isTransitioning:!1});Cm.displayName="ViewTransition";var J0=E.createContext(new Map);J0.displayName="Fetchers";var $0=E.createContext(null);$0.displayName="Await";var At=E.createContext(null);At.displayName="Navigation";var Un=E.createContext(null);Un.displayName="Location";var Lt=E.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var Qs=E.createContext(null);Qs.displayName="RouteError";var Am="REACT_ROUTER_ERROR",W0="REDIRECT",I0="ROUTE_ERROR_RESPONSE";function P0(s){if(s.startsWith(`${Am}:${W0}:{`))try{let d=JSON.parse(s.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function eg(s){if(s.startsWith(`${Am}:${I0}:{`))try{let d=JSON.parse(s.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new X0(d.status,d.statusText,d.data)}catch{}}function tg(s,{relative:d}={}){Ce(Hn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=E.useContext(At),{hash:m,pathname:h,search:v}=Ln(s,{relative:d}),A=h;return f!=="/"&&(A=h==="/"?f:Ht([f,h])),c.createHref({pathname:A,search:v,hash:m})}function Hn(){return E.useContext(Un)!=null}function ka(){return Ce(Hn(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Un).location}var Tm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bm(s){E.useContext(At).static||E.useLayoutEffect(s)}function Tt(){let{isDataRoute:s}=E.useContext(Lt);return s?hg():ag()}function ag(){Ce(Hn(),"useNavigate() may be used only in the context of a <Router> component.");let s=E.useContext(Ul),{basename:d,navigator:f}=E.useContext(At),{matches:c}=E.useContext(Lt),{pathname:m}=ka(),h=JSON.stringify(wm(c)),v=E.useRef(!1);return Bm(()=>{v.current=!0}),E.useCallback((j,p={})=>{if(Dt(v.current,Tm),!v.current)return;if(typeof j=="number"){f.go(j);return}let w=Xs(j,JSON.parse(h),m,p.relative==="path");s==null&&d!=="/"&&(w.pathname=w.pathname==="/"?d:Ht([d,w.pathname])),(p.replace?f.replace:f.push)(w,p.state,p)},[d,f,h,m,s])}E.createContext(null);function lg(){let{matches:s}=E.useContext(Lt),d=s[s.length-1];return d?d.params:{}}function Ln(s,{relative:d}={}){let{matches:f}=E.useContext(Lt),{pathname:c}=ka(),m=JSON.stringify(wm(f));return E.useMemo(()=>Xs(s,JSON.parse(m),c,d==="path"),[s,m,c,d])}function ng(s,d){return km(s,d)}function km(s,d,f){Ce(Hn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=E.useContext(At),{matches:m}=E.useContext(Lt),h=m[m.length-1],v=h?h.params:{},A=h?h.pathname:"/",j=h?h.pathnameBase:"/",p=h&&h.route;{let D=p&&p.path||"";Dm(A,!p||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${A}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let w=ka(),y;if(d){let D=typeof d=="string"?Wa(d):d;Ce(j==="/"||D.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${D.pathname}" was given in the \`location\` prop.`),y=D}else y=w;let _=y.pathname||"/",L=_;if(j!=="/"){let D=j.replace(/^\//,"").split("/");L="/"+_.replace(/^\//,"").split("/").slice(D.length).join("/")}let G=ym(s,{pathname:L});Dt(p||G!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Dt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=cg(G&&G.map(D=>Object.assign({},D,{params:Object.assign({},v,D.params),pathname:Ht([j,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?j:Ht([j,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),m,f);return d&&k?E.createElement(Un.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},k):k}function ig(){let s=pg(),d=Q0(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),f=s instanceof Error?s.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},v=null;return console.error("Error handled by React Router default ErrorBoundary:",s),v=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:h},"ErrorBoundary")," or"," ",E.createElement("code",{style:h},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},d),f?E.createElement("pre",{style:m},f):null,v)}var rg=E.createElement(ig,null),Rm=class extends E.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,d){return d.location!==s.location||d.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:d.error,location:d.location,revalidation:s.revalidation||d.revalidation}}componentDidCatch(s,d){this.props.onError?this.props.onError(s,d):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const f=eg(s.digest);f&&(s=f)}let d=s!==void 0?E.createElement(Lt.Provider,{value:this.props.routeContext},E.createElement(Qs.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?E.createElement(og,{error:s},d):d}};Rm.contextType=K0;var Hs=new WeakMap;function og({children:s,error:d}){let{basename:f}=E.useContext(At);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let c=P0(d.digest);if(c){let m=Hs.get(d);if(m)throw m;let h=zm(c.location,f);if(Em&&!Hs.get(d))if(h.isExternal||c.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:c.replace}));throw Hs.set(d,v),v}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return s}function sg({routeContext:s,match:d,children:f}){let c=E.useContext(Ul);return c&&c.static&&c.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=d.route.id),E.createElement(Lt.Provider,{value:s},f)}function cg(s,d=[],f){let c=f?.state;if(s==null){if(!c)return null;if(c.errors)s=c.matches;else if(d.length===0&&!c.initialized&&c.matches.length>0)s=c.matches;else return null}let m=s,h=c?.errors;if(h!=null){let w=m.findIndex(y=>y.route.id&&h?.[y.route.id]!==void 0);Ce(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),m=m.slice(0,Math.min(m.length,w+1))}let v=!1,A=-1;if(f&&c){v=c.renderFallback;for(let w=0;w<m.length;w++){let y=m[w];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(A=w),y.route.id){let{loaderData:_,errors:L}=c,G=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!L||L[y.route.id]===void 0);if(y.route.lazy||G){f.isStatic&&(v=!0),A>=0?m=m.slice(0,A+1):m=[m[0]];break}}}}let j=f?.onError,p=c&&j?(w,y)=>{j(w,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:Z0(c.matches),errorInfo:y})}:void 0;return m.reduceRight((w,y,_)=>{let L,G=!1,k=null,D=null;c&&(L=h&&y.route.id?h[y.route.id]:void 0,k=y.route.errorElement||rg,v&&(A<0&&_===0?(Dm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,D=null):A===_&&(G=!0,D=y.route.hydrateFallbackElement||null)));let Y=d.concat(m.slice(0,_+1)),X=()=>{let F;return L?F=k:G?F=D:y.route.Component?F=E.createElement(y.route.Component,null):y.route.element?F=y.route.element:F=w,E.createElement(sg,{match:y,routeContext:{outlet:w,matches:Y,isDataRoute:c!=null},children:F})};return c&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?E.createElement(Rm,{location:c.location,revalidation:c.revalidation,component:k,error:L,children:X(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:p}):X()},null)}function Zs(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ug(s){let d=E.useContext(Ul);return Ce(d,Zs(s)),d}function dg(s){let d=E.useContext(sr);return Ce(d,Zs(s)),d}function fg(s){let d=E.useContext(Lt);return Ce(d,Zs(s)),d}function Vs(s){let d=fg(s),f=d.matches[d.matches.length-1];return Ce(f.route.id,`${s} can only be used on routes that contain a unique "id"`),f.route.id}function mg(){return Vs("useRouteId")}function pg(){let s=E.useContext(Qs),d=dg("useRouteError"),f=Vs("useRouteError");return s!==void 0?s:d.errors?.[f]}function hg(){let{router:s}=ug("useNavigate"),d=Vs("useNavigate"),f=E.useRef(!1);return Bm(()=>{f.current=!0}),E.useCallback(async(m,h={})=>{Dt(f.current,Tm),f.current&&(typeof m=="number"?await s.navigate(m):await s.navigate(m,{fromRouteId:d,...h}))},[s,d])}var hm={};function Dm(s,d,f){!d&&!hm[s]&&(hm[s]=!0,Dt(!1,f))}E.memo(gg);function gg({routes:s,future:d,state:f,isStatic:c,onError:m}){return km(s,void 0,{state:f,isStatic:c,onError:m})}function na(s){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vg({basename:s="/",children:d=null,location:f,navigationType:c="POP",navigator:m,static:h=!1,unstable_useTransitions:v}){Ce(!Hn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=s.replace(/^\/*/,"/"),j=E.useMemo(()=>({basename:A,navigator:m,static:h,unstable_useTransitions:v,future:{}}),[A,m,h,v]);typeof f=="string"&&(f=Wa(f));let{pathname:p="/",search:w="",hash:y="",state:_=null,key:L="default",unstable_mask:G}=f,k=E.useMemo(()=>{let D=ia(p,A);return D==null?null:{location:{pathname:D,search:w,hash:y,state:_,key:L,unstable_mask:G},navigationType:c}},[A,p,w,y,_,L,c,G]);return Dt(k!=null,`<Router basename="${A}"> is not able to match the URL "${p}${w}${y}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:E.createElement(At.Provider,{value:j},E.createElement(Un.Provider,{children:d,value:k}))}function xg({children:s,location:d}){return ng(Fs(s),d)}function Fs(s,d=[]){let f=[];return E.Children.forEach(s,(c,m)=>{if(!E.isValidElement(c))return;let h=[...d,m];if(c.type===E.Fragment){f.push.apply(f,Fs(c.props.children,h));return}Ce(c.type===na,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!c.props.index||!c.props.children,"An index route cannot have child routes.");let v={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(v.children=Fs(c.props.children,h)),f.push(v)}),f}var ir="get",rr="application/x-www-form-urlencoded";function cr(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function bg(s){return cr(s)&&s.tagName.toLowerCase()==="button"}function yg(s){return cr(s)&&s.tagName.toLowerCase()==="form"}function jg(s){return cr(s)&&s.tagName.toLowerCase()==="input"}function Sg(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function wg(s,d){return s.button===0&&(!d||d==="_self")&&!Sg(s)}var nr=null;function Eg(){if(nr===null)try{new FormData(document.createElement("form"),0),nr=!1}catch{nr=!0}return nr}var zg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ls(s){return s!=null&&!zg.has(s)?(Dt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rr}"`),null):s}function Ng(s,d){let f,c,m,h,v;if(yg(s)){let A=s.getAttribute("action");c=A?ia(A,d):null,f=s.getAttribute("method")||ir,m=Ls(s.getAttribute("enctype"))||rr,h=new FormData(s)}else if(bg(s)||jg(s)&&(s.type==="submit"||s.type==="image")){let A=s.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=s.getAttribute("formaction")||A.getAttribute("action");if(c=j?ia(j,d):null,f=s.getAttribute("formmethod")||A.getAttribute("method")||ir,m=Ls(s.getAttribute("formenctype"))||Ls(A.getAttribute("enctype"))||rr,h=new FormData(A,s),!Eg()){let{name:p,type:w,value:y}=s;if(w==="image"){let _=p?`${p}.`:"";h.append(`${_}x`,"0"),h.append(`${_}y`,"0")}else p&&h.append(p,y)}}else{if(cr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=ir,c=null,m=rr,v=s}return h&&m==="text/plain"&&(v=h,h=void 0),{action:c,method:f.toLowerCase(),encType:m,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ks(s,d){if(s===!1||s===null||typeof s>"u")throw new Error(d)}function Cg(s,d,f,c){let m=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${c}`:m.pathname=`${m.pathname}.${c}`:m.pathname==="/"?m.pathname=`_root.${c}`:d&&ia(m.pathname,d)==="/"?m.pathname=`${d.replace(/\/$/,"")}/_root.${c}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${c}`,m}async function Ag(s,d){if(s.id in d)return d[s.id];try{let f=await import(s.module);return d[s.id]=f,f}catch(f){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Tg(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Bg(s,d,f){let c=await Promise.all(s.map(async m=>{let h=d.routes[m.route.id];if(h){let v=await Ag(h,f);return v.links?v.links():[]}return[]}));return Mg(c.flat(1).filter(Tg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function gm(s,d,f,c,m,h){let v=(j,p)=>f[p]?j.route.id!==f[p].route.id:!0,A=(j,p)=>f[p].pathname!==j.pathname||f[p].route.path?.endsWith("*")&&f[p].params["*"]!==j.params["*"];return h==="assets"?d.filter((j,p)=>v(j,p)||A(j,p)):h==="data"?d.filter((j,p)=>{let w=c.routes[j.route.id];if(!w||!w.hasLoader)return!1;if(v(j,p)||A(j,p))return!0;if(j.route.shouldRevalidate){let y=j.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function kg(s,d,{includeHydrateFallback:f}={}){return Rg(s.map(c=>{let m=d.routes[c.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function Rg(s){return[...new Set(s)]}function Dg(s){let d={},f=Object.keys(s).sort();for(let c of f)d[c]=s[c];return d}function Mg(s,d){let f=new Set;return new Set(d),s.reduce((c,m)=>{let h=JSON.stringify(Dg(m));return f.has(h)||(f.add(h),c.push({key:h,link:m})),c},[])}function Mm(){let s=E.useContext(Ul);return Ks(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function _g(){let s=E.useContext(sr);return Ks(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Js=E.createContext(void 0);Js.displayName="FrameworkContext";function _m(){let s=E.useContext(Js);return Ks(s,"You must render this element inside a <HydratedRouter> element"),s}function Og(s,d){let f=E.useContext(Js),[c,m]=E.useState(!1),[h,v]=E.useState(!1),{onFocus:A,onBlur:j,onMouseEnter:p,onMouseLeave:w,onTouchStart:y}=d,_=E.useRef(null);E.useEffect(()=>{if(s==="render"&&v(!0),s==="viewport"){let k=Y=>{Y.forEach(X=>{v(X.isIntersecting)})},D=new IntersectionObserver(k,{threshold:.5});return _.current&&D.observe(_.current),()=>{D.disconnect()}}},[s]),E.useEffect(()=>{if(c){let k=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(k)}}},[c]);let L=()=>{m(!0)},G=()=>{m(!1),v(!1)};return f?s!=="intent"?[h,_,{}]:[h,_,{onFocus:_n(A,L),onBlur:_n(j,G),onMouseEnter:_n(p,L),onMouseLeave:_n(w,G),onTouchStart:_n(y,L)}]:[!1,_,{}]}function _n(s,d){return f=>{s&&s(f),f.defaultPrevented||d(f)}}function Ug({page:s,...d}){let{router:f}=Mm(),c=E.useMemo(()=>ym(f.routes,s,f.basename),[f.routes,s,f.basename]);return c?E.createElement(Lg,{page:s,matches:c,...d}):null}function Hg(s){let{manifest:d,routeModules:f}=_m(),[c,m]=E.useState([]);return E.useEffect(()=>{let h=!1;return Bg(s,d,f).then(v=>{h||m(v)}),()=>{h=!0}},[s,d,f]),c}function Lg({page:s,matches:d,...f}){let c=ka(),{future:m,manifest:h,routeModules:v}=_m(),{basename:A}=Mm(),{loaderData:j,matches:p}=_g(),w=E.useMemo(()=>gm(s,d,p,h,c,"data"),[s,d,p,h,c]),y=E.useMemo(()=>gm(s,d,p,h,c,"assets"),[s,d,p,h,c]),_=E.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let k=new Set,D=!1;if(d.forEach(X=>{let F=h.routes[X.route.id];!F||!F.hasLoader||(!w.some(Z=>Z.route.id===X.route.id)&&X.route.id in j&&v[X.route.id]?.shouldRevalidate||F.hasClientLoader?D=!0:k.add(X.route.id))}),k.size===0)return[];let Y=Cg(s,A,m.unstable_trailingSlashAwareDataRequests,"data");return D&&k.size>0&&Y.searchParams.set("_routes",d.filter(X=>k.has(X.route.id)).map(X=>X.route.id).join(",")),[Y.pathname+Y.search]},[A,m.unstable_trailingSlashAwareDataRequests,j,c,h,w,d,s,v]),L=E.useMemo(()=>kg(y,h),[y,h]),G=Hg(y);return E.createElement(E.Fragment,null,_.map(k=>E.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...f})),L.map(k=>E.createElement("link",{key:k,rel:"modulepreload",href:k,...f})),G.map(({key:k,link:D})=>E.createElement("link",{key:k,nonce:f.nonce,...D,crossOrigin:D.crossOrigin??f.crossOrigin})))}function Yg(...s){return d=>{s.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var qg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qg&&(window.__reactRouterVersion="7.13.1")}catch{}function Fg({basename:s,children:d,unstable_useTransitions:f,window:c}){let m=E.useRef();m.current==null&&(m.current=j0({window:c,v5Compat:!0}));let h=m.current,[v,A]=E.useState({action:h.action,location:h.location}),j=E.useCallback(p=>{f===!1?A(p):E.startTransition(()=>A(p))},[f]);return E.useLayoutEffect(()=>h.listen(j),[h,j]),E.createElement(vg,{basename:s,children:d,location:v.location,navigationType:v.action,navigator:h,unstable_useTransitions:f})}var Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ol=E.forwardRef(function({onClick:d,discover:f="render",prefetch:c="none",relative:m,reloadDocument:h,replace:v,unstable_mask:A,state:j,target:p,to:w,preventScrollReset:y,viewTransition:_,unstable_defaultShouldRevalidate:L,...G},k){let{basename:D,navigator:Y,unstable_useTransitions:X}=E.useContext(At),F=typeof w=="string"&&Om.test(w),Z=zm(w,D);w=Z.to;let ue=tg(w,{relative:m}),Se=ka(),I=null;if(A){let Ae=Xs(A,[],Se.unstable_mask?Se.unstable_mask.pathname:"/",!0);D!=="/"&&(Ae.pathname=Ae.pathname==="/"?D:Ht([D,Ae.pathname])),I=Y.createHref(Ae)}let[we,Le,rt]=Og(c,G),Je=Zg(w,{replace:v,unstable_mask:A,state:j,target:p,preventScrollReset:y,relative:m,viewTransition:_,unstable_defaultShouldRevalidate:L,unstable_useTransitions:X});function Me(Ae){d&&d(Ae),Ae.defaultPrevented||Je(Ae)}let ot=!(Z.isExternal||h),Ie=E.createElement("a",{...G,...rt,href:(ot?I:void 0)||Z.absoluteURL||ue,onClick:ot?Me:d,ref:Yg(k,Le),target:p,"data-discover":!F&&f==="render"?"true":void 0});return we&&!F?E.createElement(E.Fragment,null,Ie,E.createElement(Ug,{page:ue})):Ie});Ol.displayName="Link";var Gg=E.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:c="",end:m=!1,style:h,to:v,viewTransition:A,children:j,...p},w){let y=Ln(v,{relative:p.relative}),_=ka(),L=E.useContext(sr),{navigator:G,basename:k}=E.useContext(At),D=L!=null&&Wg(y)&&A===!0,Y=G.encodeLocation?G.encodeLocation(y).pathname:y.pathname,X=_.pathname,F=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;f||(X=X.toLowerCase(),F=F?F.toLowerCase():null,Y=Y.toLowerCase()),F&&k&&(F=ia(F,k)||F);const Z=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ue=X===Y||!m&&X.startsWith(Y)&&X.charAt(Z)==="/",Se=F!=null&&(F===Y||!m&&F.startsWith(Y)&&F.charAt(Y.length)==="/"),I={isActive:ue,isPending:Se,isTransitioning:D},we=ue?d:void 0,Le;typeof c=="function"?Le=c(I):Le=[c,ue?"active":null,Se?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let rt=typeof h=="function"?h(I):h;return E.createElement(Ol,{...p,"aria-current":we,className:Le,ref:w,style:rt,to:v,viewTransition:A},typeof j=="function"?j(I):j)});Gg.displayName="NavLink";var Xg=E.forwardRef(({discover:s="render",fetcherKey:d,navigate:f,reloadDocument:c,replace:m,state:h,method:v=ir,action:A,onSubmit:j,relative:p,preventScrollReset:w,viewTransition:y,unstable_defaultShouldRevalidate:_,...L},G)=>{let{unstable_useTransitions:k}=E.useContext(At),D=Jg(),Y=$g(A,{relative:p}),X=v.toLowerCase()==="get"?"get":"post",F=typeof A=="string"&&Om.test(A),Z=ue=>{if(j&&j(ue),ue.defaultPrevented)return;ue.preventDefault();let Se=ue.nativeEvent.submitter,I=Se?.getAttribute("formmethod")||v,we=()=>D(Se||ue.currentTarget,{fetcherKey:d,method:I,navigate:f,replace:m,state:h,relative:p,preventScrollReset:w,viewTransition:y,unstable_defaultShouldRevalidate:_});k&&f!==!1?E.startTransition(()=>we()):we()};return E.createElement("form",{ref:G,method:X,action:Y,onSubmit:c?j:Z,...L,"data-discover":!F&&s==="render"?"true":void 0})});Xg.displayName="Form";function Qg(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Um(s){let d=E.useContext(Ul);return Ce(d,Qg(s)),d}function Zg(s,{target:d,replace:f,unstable_mask:c,state:m,preventScrollReset:h,relative:v,viewTransition:A,unstable_defaultShouldRevalidate:j,unstable_useTransitions:p}={}){let w=Tt(),y=ka(),_=Ln(s,{relative:v});return E.useCallback(L=>{if(wg(L,d)){L.preventDefault();let G=f!==void 0?f:On(y)===On(_),k=()=>w(s,{replace:G,unstable_mask:c,state:m,preventScrollReset:h,relative:v,viewTransition:A,unstable_defaultShouldRevalidate:j});p?E.startTransition(()=>k()):k()}},[y,w,_,f,c,m,d,s,h,v,A,j,p])}var Vg=0,Kg=()=>`__${String(++Vg)}__`;function Jg(){let{router:s}=Um("useSubmit"),{basename:d}=E.useContext(At),f=mg(),c=s.fetch,m=s.navigate;return E.useCallback(async(h,v={})=>{let{action:A,method:j,encType:p,formData:w,body:y}=Ng(h,d);if(v.navigate===!1){let _=v.fetcherKey||Kg();await c(_,f,v.action||A,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:w,body:y,formMethod:v.method||j,formEncType:v.encType||p,flushSync:v.flushSync})}else await m(v.action||A,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:w,body:y,formMethod:v.method||j,formEncType:v.encType||p,replace:v.replace,state:v.state,fromRouteId:f,flushSync:v.flushSync,viewTransition:v.viewTransition})},[c,m,d,f])}function $g(s,{relative:d}={}){let{basename:f}=E.useContext(At),c=E.useContext(Lt);Ce(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),h={...Ln(s||".",{relative:d})},v=ka();if(s==null){h.search=v.search;let A=new URLSearchParams(h.search),j=A.getAll("index");if(j.some(w=>w==="")){A.delete("index"),j.filter(y=>y).forEach(y=>A.append("index",y));let w=A.toString();h.search=w?`?${w}`:""}}return(!s||s===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:Ht([f,h.pathname])),On(h)}function Wg(s,{relative:d}={}){let f=E.useContext(Cm);Ce(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Um("useViewTransitionState"),m=Ln(s,{relative:d});if(!f.isTransitioning)return!1;let h=ia(f.currentLocation.pathname,c)||f.currentLocation.pathname,v=ia(f.nextLocation.pathname,c)||f.nextLocation.pathname;return or(m.pathname,v)!=null||or(m.pathname,h)!=null}const Hm=E.createContext();function Ig({children:s}){const[d,f]=E.useState({}),[c,m]=E.useState(!1),h=p=>{f(w=>{const y={...w};return y[p]?delete y[p]:y[p]={issuePhoto:null},Object.keys(y).length===0&&m(!1),y})},v=(p,w)=>{f(y=>({...y,[p]:{...y[p],issuePhoto:w}}))},A=()=>{f({}),m(!1)},j=()=>Object.keys(d).length;return r.jsx(Hm.Provider,{value:{cart:d,toggleCartItem:h,updateItemImage:v,clearCart:A,getCartCount:j,isCartConfirmed:c,setIsCartConfirmed:m},children:s})}const $s=()=>E.useContext(Hm),Pg="/nowfix/assets/nowfix-logo1-CSQtkBIU.png",ev=`
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
`;function ur(){const s=Tt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:ev}),r.jsxs("div",{className:"brand-logo",onClick:()=>s("/"),children:[r.jsx("img",{src:Pg,alt:"NowFix",className:"brand-logo-img"}),r.jsxs("span",{className:"brand-logo-text",children:[r.jsx("span",{className:"brand-logo-now",children:"NOW"}),r.jsx("span",{className:"brand-logo-fix",children:"FIX"})]})]})]})}const Lm=E.createContext();function Hl(){return E.useContext(Lm)}function tv({children:s}){const[d,f]=E.useState(null);E.useEffect(()=>{const h=localStorage.getItem("nowfix_user");h&&f(JSON.parse(h))},[]);const c=h=>{f(h),localStorage.setItem("nowfix_user",JSON.stringify(h))},m=()=>{f(null),localStorage.removeItem("nowfix_user")};return r.jsx(Lm.Provider,{value:{user:d,login:c,logout:m},children:s})}const av=`
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
  .nav-location svg { color: var(--orange, #FF9F1C); width: 16px; height: 16px; }

  .nav-search-box {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    flex: 1;
    min-width: 0;
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

  .nav-right { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; position: relative; }

  /* 2. Added Cart Button Styling */
  .nav-cart-btn {
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-2, #374151);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    transition: background 0.2s, color 0.2s;
  }
  .nav-cart-btn:hover { background: var(--bg-2); color: var(--primary); }
  .nav-cart-btn svg { width: 24px; height: 24px; }
  .nav-cart-badge {
    position: absolute;
    top: 0px;
    right: 0px;
    background: var(--orange, #FF9F1C);
    color: white;
    font-size: 0.65rem;
    font-weight: 800;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    line-height: 1;
  }

  .nav-login-btn {
    font-family: var(--font-body, 'Inter', sans-serif); font-size: 0.875rem; font-weight: 600;
    color: white; background: var(--primary, #1F5BB5); padding: 0.5rem 1.35rem;
    border-radius: var(--radius-md, 6px); border: none; cursor: pointer;
    transition: background var(--transition, 0.2s ease), transform var(--transition, 0.2s ease), box-shadow var(--transition, 0.2s ease);
    box-shadow: var(--shadow-primary, 0 4px 14px 0 rgba(31,91,181,0.39)); white-space: nowrap;
  }

  .nav-login-btn:hover { background: var(--primary-dark, #1A4B96); transform: translateY(-1px); box-shadow: 0 6px 24px rgba(31,91,181,0.35); }
  .nav-login-btn:active { transform: translateY(0); }

  .nav-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--primary, #1F5BB5); color: white;
    font-weight: 700; font-size: 1.1rem;
    border: 2px solid white; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    box-shadow: var(--shadow-sm); transition: transform 0.2s;
    overflow: hidden;
  }
  .nav-avatar:hover { transform: scale(1.05); }
  .nav-avatar img { width: 100%; height: 100%; object-fit: cover; }

  .profile-dropdown {
    position: absolute; top: 50px; right: 0;
    background: white; border: 1px solid var(--border);
    border-radius: var(--radius-md); padding: 8px 0;
    box-shadow: var(--shadow-md); min-width: 200px;
    display: flex; flex-direction: column; z-index: 200;
  }
  .pd-header {
    padding: 12px 16px; border-bottom: 1px solid var(--border);
    margin-bottom: 8px; display: flex; flex-direction: column;
  }
  .pd-header strong { font-size: 0.95rem; color: var(--text); }
  .pd-header span { font-size: 0.8rem; color: var(--muted); margin-top: 2px;}
  
  .profile-dropdown button {
    padding: 10px 16px; font-size: 0.875rem; color: var(--text-2);
    text-align: left; background: none; border: none; cursor: pointer;
    font-family: var(--font-body); width: 100%; transition: background 0.2s;
  }
  .profile-dropdown button:hover { background: var(--bg-2); color: var(--primary); }

  .mobile-actions { display: none; align-items: center; gap: 0.5rem; }

  .mobile-icon-btn {
    background: none; border: none; padding: 8px;
    color: var(--text, #111827); cursor: pointer;
    border-radius: var(--radius-sm, 4px); transition: background 0.2s ease;
    display: flex; align-items: center; justify-content: center;
    position: relative; /* Added for cart badge positioning */
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

  .mobile-search-dropdown {
    position: absolute; top: var(--navbar-height, 70px); left: 0; right: 0;
    background: white; padding: 1rem 1.5rem; border-bottom: 1px solid var(--border, #E5E7EB);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); z-index: 98;
    transform: translateY(-100%); opacity: 0; pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .mobile-search-dropdown.open { transform: translateY(0); opacity: 1; pointer-events: all; }

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
  .city-item.active { border-color: var(--primary, #1F5BB5); background: #EFF4FF; cursor: pointer; }
  .city-item.active .city-name { color: var(--primary, #1F5BB5); font-weight: 600; }
  .city-item.disabled { background: #F9FAFB; cursor: not-allowed; opacity: 0.6; }
  .city-item.disabled .city-name { color: #6B7280; font-weight: 500; }
  .city-badge {
    font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.5rem;
    border-radius: 12px; background: #E5E7EB; color: #4B5563;
  }

  @media (max-width: 1024px) {
    .nav-links { display: none; }
    .nav-search-container { max-width: 100%; }
    .nav-inner { gap: 1rem; }
  }

  @media (max-width: 900px) {
    .nav-location { padding: 8px 10px; font-size: 0.75rem; }
    .nav-location svg { width: 14px; height: 14px; }
    .nav-search-box { padding: 8px 10px; }
    .nav-search-box input { font-size: 0.8rem; }
    .nav-login-btn { padding: 0.45rem 1rem; font-size: 0.8rem; }
  }

  @media (max-width: 768px) {
    .nav-search-container { display: none; }
    .nav-right { display: none; }
    .mobile-actions { display: flex; }
    .nav { padding: 0 1.25rem; }
  }
`,vm=[{label:"Services",href:"#/services"},{label:"How It Works",href:"#how-it-works"},{label:"Reviews",href:"#reviews"}],lv=["Jaipur","Jodhpur","Sri Ganganagar","Hanumangarh"];function dr(){const[s,d]=E.useState(!1),[f,c]=E.useState(!1),[m,h]=E.useState(!1),[v,A]=E.useState(!1),[j,p]=E.useState(!1),[w,y]=E.useState(""),_=Tt(),{user:L,logout:G}=Hl(),{getCartCount:k}=$s(),D=k(),Y=E.useRef(null);E.useEffect(()=>{function Z(ue){Y.current&&!Y.current.contains(ue.target)&&p(!1)}return document.addEventListener("mousedown",Z),()=>document.removeEventListener("mousedown",Z)},[]),E.useEffect(()=>{const Z=()=>d(window.scrollY>10);return window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)},[]);const X=()=>{h(!m),f&&c(!1)},F=()=>{c(!f),m&&h(!1)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:av}),r.jsx("div",{className:`modal-overlay${v?" open":""}`,onClick:()=>A(!1),children:r.jsxs("div",{className:"modal-content",onClick:Z=>Z.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Select your city"}),r.jsx("button",{className:"modal-close",onClick:()=>A(!1),children:"×"})]}),r.jsxs("div",{className:"city-group",children:[r.jsx("div",{className:"city-group-title",children:"Available Now"}),r.jsxs("div",{className:"city-item active",onClick:()=>A(!1),children:[r.jsx("span",{className:"city-name",children:"Bikaner, Rajasthan"}),r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--primary)"},children:r.jsx("polyline",{points:"20 6 9 17 4 12"})})]})]}),r.jsxs("div",{className:"city-group",children:[r.jsx("div",{className:"city-group-title",children:"Coming Soon"}),lv.map(Z=>r.jsxs("div",{className:"city-item disabled",children:[r.jsxs("span",{className:"city-name",children:[Z,", Rajasthan"]}),r.jsx("span",{className:"city-badge",children:"Soon"})]},Z))]})]})}),r.jsx("nav",{className:`nav${s?" scrolled":""}`,children:r.jsxs("div",{className:"nav-inner",children:[r.jsx(ur,{}),r.jsxs("div",{className:"nav-search-container",children:[r.jsxs("div",{className:"nav-location",onClick:()=>A(!0),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan",r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"14px",height:"14px",color:"#9CA3AF",marginLeft:"4px"},children:r.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),r.jsxs("div",{className:"nav-search-box",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{type:"text",placeholder:"Search for AC repair, plumbing...",value:w,onChange:Z=>y(Z.target.value)})]})]}),r.jsx("ul",{className:"nav-links",children:vm.map(Z=>r.jsx("li",{children:r.jsx("a",{href:Z.href,children:Z.label})},Z.label))}),r.jsxs("div",{className:"nav-right",ref:Y,children:[r.jsxs("button",{className:"nav-cart-btn",onClick:()=>_("/checkout"),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"9",cy:"21",r:"1"}),r.jsx("circle",{cx:"20",cy:"21",r:"1"}),r.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),D>0&&r.jsx("span",{className:"nav-cart-badge",children:D})]}),L?r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"nav-avatar",onClick:()=>p(!j),children:L.photo?r.jsx("img",{src:L.photo,alt:"Profile"}):L.name.charAt(0)}),j&&r.jsxs("div",{className:"profile-dropdown",children:[r.jsxs("div",{className:"pd-header",children:[r.jsx("strong",{children:L.name}),r.jsxs("span",{children:["+91 ",L.phone]})]}),r.jsx("button",{onClick:()=>{p(!1),_("/profile")},children:"My Profile"}),r.jsx("button",{onClick:()=>{p(!1),_("/bookings")},children:"My Bookings"}),r.jsx("button",{onClick:()=>{G(),p(!1)},children:"Logout"})]})]}):r.jsx("button",{className:"nav-login-btn",onClick:()=>_("/login"),children:"Login →"})]}),r.jsxs("div",{className:"mobile-actions",children:[r.jsxs("button",{className:"mobile-icon-btn",onClick:()=>_("/checkout"),children:[r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"9",cy:"21",r:"1"}),r.jsx("circle",{cx:"20",cy:"21",r:"1"}),r.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),D>0&&r.jsx("span",{className:"nav-cart-badge",style:{top:"2px",right:"2px"},children:D})]}),r.jsx("button",{className:"mobile-icon-btn",onClick:X,children:r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:m?r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})}),L&&r.jsx("button",{className:"nav-avatar",style:{width:"32px",height:"32px",fontSize:"0.9rem"},onClick:F,children:L.photo?r.jsx("img",{src:L.photo,alt:"Profile"}):L.name.charAt(0)}),r.jsxs("button",{className:`nav-hamburger${f?" open":""}`,onClick:F,children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]})]})}),r.jsx("div",{className:`mobile-search-dropdown${m?" open":""}`,children:r.jsxs("div",{className:"nav-search-container",style:{display:"flex",width:"100%",maxWidth:"100%",flexDirection:"column",border:"none",boxShadow:"none"},children:[r.jsxs("div",{className:"nav-location",style:{borderRight:"none",borderBottom:"1px solid var(--border)",width:"100%",borderRadius:"8px 8px 0 0",border:"1px solid var(--border)"},onClick:()=>{h(!1),A(!0)},children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan"]}),r.jsxs("div",{className:"nav-search-box",style:{width:"100%",border:"1px solid var(--border)",borderTop:"none",borderRadius:"0 0 8px 8px",background:"var(--bg-2)"},children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{type:"text",placeholder:"Search for services...",value:w,onChange:Z=>y(Z.target.value),autoFocus:m})]})]})}),r.jsxs("div",{className:`nav-mobile${f?" open":""}`,children:[vm.map(Z=>r.jsx("a",{href:Z.href,onClick:()=>c(!1),children:Z.label},Z.label)),r.jsx("div",{className:"nav-mobile-buttons",children:L?r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"nav-mobile-login",style:{background:"var(--bg-2)",color:"var(--text)",border:"1px solid var(--border)"},onClick:()=>{c(!1),_("/profile")},children:"My Profile"}),r.jsx("button",{className:"nav-mobile-login",style:{background:"var(--bg-2)",color:"var(--text)",border:"1px solid var(--border)",marginTop:"8px"},onClick:()=>{c(!1),_("/bookings")},children:"My Bookings"}),r.jsx("button",{className:"nav-mobile-login",style:{marginTop:"8px"},onClick:()=>{G(),c(!1)},children:"Logout"})]}):r.jsx("button",{className:"nav-mobile-login",onClick:()=>{_("/login"),c(!1)},children:"Login →"})})]})]})}const nv="/nowfix/assets/hero-bg-BUzEpsbl.webp",iv=`
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
    background-image: url(${nv});
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

  @media (max-width: 480px) {
    .hero-main { padding: 40px 1rem 36px; }
    .hero-btn-primary { width: 100%; text-align: center; }
    .hero-cta { width: 100%; }
  }
`,rv=[{value:"500+",label:"Happy Customers"},{value:"100+",label:"Verified Workers"},{value:"4.8★",label:"Average Rating"},{value:"Same Day",label:"Service Available"}];function ov(){const s=Tt(),{user:d}=Hl(),f=()=>{s(d?"/services":"/login")};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:iv}),r.jsx("section",{className:"hero",children:r.jsxs("div",{className:"hero-main",children:[r.jsx("div",{className:"hero-bg"}),r.jsxs("div",{className:"hero-inner",children:[r.jsxs("div",{className:"hero-badge",children:[r.jsx("div",{className:"hero-badge-dot"}),r.jsx("span",{children:"Now live in Bikaner, Rajasthan"})]}),r.jsxs("h1",{className:"hero-headline",children:["Fix Any Problem"," ",r.jsx("span",{className:"hero-headline-orange",children:"Instantly"})," ","with"," ",r.jsx("span",{className:"hero-headline-blue",children:"NowFix"})]}),r.jsx("p",{className:"hero-sub",children:"Book trusted professionals for repairs, cleaning, electrical and more — fast, affordable, right at your doorstep."}),r.jsx("div",{className:"hero-cta",children:r.jsx("button",{className:"hero-btn-primary",onClick:f,children:"Book a Service →"})}),r.jsx("div",{className:"hero-stats",children:rv.map(c=>r.jsxs("div",{className:"hero-stat",children:[r.jsx("div",{className:"hero-stat-value",children:c.value}),r.jsx("div",{className:"hero-stat-label",children:c.label})]},c.value))})]})]})})]})}const sv="/nowfix/assets/plumbing-DobpV-5v.webp",cv="/nowfix/assets/electrician-DgHnnlp5.webp",uv="/nowfix/assets/ac-repair-Dol6uZ-p.webp",dv="/nowfix/assets/cleaning-DDh_5nqU.webp",fv=[{id:"plumbing",name:"Plumbing",tagline:"Leaks fixed, pipes secured",description:"Tap repairs, pipe leaks, drain cleaning and full plumbing checks by verified professionals.",startingPrice:199,color:"#eff6ff",iconColor:"#2563eb",image:sv},{id:"electrician",name:"Electrician",tagline:"Safe, certified electrical work",description:"Switch repairs, fan installation, wiring checks and MCB fixes by certified electricians.",startingPrice:149,color:"#fefce8",iconColor:"#ca8a04",image:cv},{id:"ac-repair",name:"AC Repair",tagline:"Stay cool, always",description:"AC servicing, gas refilling, installation and cooling fixes by expert technicians.",startingPrice:399,color:"#f0fdf4",iconColor:"#16a34a",image:uv},{id:"cleaning",name:"Home Cleaning",tagline:"Spotless home, happy life",description:"Deep cleaning, kitchen sanitization, bathroom scrubbing and full home cleaning services.",startingPrice:299,color:"#fdf4ff",iconColor:"#a21caf",image:dv}],mv=`
  .svc-section {
    padding: 20px 1.5rem 80px;
    background: var(--bg, #FFFFFF);
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .svc-container {
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
  }

  .svc-header {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .svc-title-wrap h2 {
    font-family: var(--font-heading, 'Montserrat', sans-serif);
    font-size: 2rem;
    font-weight: 800;
    color: var(--text, #111827);
    margin-bottom: 8px;
    letter-spacing: -0.03em;
  }

  .svc-title-wrap p {
    color: var(--text-3, #6B7280);
    font-size: 1.05rem;
    font-weight: 500;
  }

  .svc-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 items per row on desktop */
    gap: 24px;
  }

  .svc-card {
    position: relative;
    height: 300px;
    border-radius: var(--radius-lg, 16px);
    overflow: hidden;
    cursor: pointer;
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .svc-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1));
  }

  .svc-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .svc-card:hover .svc-image {
    transform: scale(1.08); /* Premium slow zoom on hover */
  }

  /* Dark gradient overlay so text is always readable */
  .svc-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top, 
      rgba(17, 24, 39, 0.95) 0%, 
      rgba(17, 24, 39, 0.4) 50%, 
      transparent 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
  }

  .svc-tagline {
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .svc-name {
    font-family: var(--font-heading, 'Montserrat', sans-serif);
    font-size: 1.35rem;
    font-weight: 800;
    color: white;
    margin-bottom: 16px;
    line-height: 1.2;
  }

  .svc-price-badge {
    display: inline-flex;
    align-items: center;
    background: white;
    color: var(--primary, #1F5BB5);
    padding: 6px 12px;
    border-radius: var(--radius-sm, 6px);
    font-size: 0.85rem;
    font-weight: 700;
    width: fit-content;
  }

  .svc-price-badge span {
    color: var(--orange, #FF9F1C);
    margin-left: 4px;
  }

  /* Mobile & Tablet Responsiveness */
  @media (max-width: 1024px) {
    .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .svc-card { height: 260px; }
  }

  @media (max-width: 600px) {
    .svc-section { padding: 20px 1rem 60px; }
    .svc-header { flex-direction: column; align-items: flex-start; margin-bottom: 24px; }
    .svc-title-wrap h2 { font-size: 1.5rem; }
    .svc-title-wrap p { font-size: 0.9rem; }
    
    /* Perfect 2-column grid for mobile thumb-scrolling */
    .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .svc-card { height: 200px; border-radius: var(--radius-md, 12px); }
    .svc-overlay { padding: 16px 12px; }
    .svc-name { font-size: 1.1rem; margin-bottom: 12px; }
    .svc-tagline { font-size: 0.65rem; margin-bottom: 4px; }
    .svc-price-badge { padding: 4px 8px; font-size: 0.75rem; }
  }
`;function pv(){const s=Tt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:mv}),r.jsx("section",{className:"svc-section",id:"services",children:r.jsxs("div",{className:"svc-container",children:[r.jsx("div",{className:"svc-header",children:r.jsxs("div",{className:"svc-title-wrap",children:[r.jsx("h2",{children:"Top Services"}),r.jsx("p",{children:"Expert local professionals in Bikaner, right at your doorstep."})]})}),r.jsx("div",{className:"svc-grid",children:fv.map(d=>r.jsxs("div",{className:"svc-card",onClick:()=>s(`/service/${d.id}`),children:[r.jsx("img",{src:d.image,alt:d.name,className:"svc-image",loading:"lazy"}),r.jsxs("div",{className:"svc-overlay",children:[r.jsx("span",{className:"svc-tagline",children:d.tagline}),r.jsx("h3",{className:"svc-name",children:d.name}),r.jsxs("div",{className:"svc-price-badge",children:["Starts at ",r.jsxs("span",{children:["₹",d.startingPrice]})]})]})]},d.id))})]})})]})}const hv=`
  .footer { 
    background: #0A192F; 
    color: white; 
    padding: 60px 1.5rem 20px; 
    font-family: var(--font-body); 
    margin-top: auto; 
    border-top: 4px solid var(--orange, #FF9F1C); 
  }
  .ftr-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; }
  
  .ftr-brand-logo-wrap { margin-bottom: 16px; }
  
  .ftr-brand p { color: #9CA3AF; font-size: 0.9rem; line-height: 1.6; }
  .ftr-links h4 { font-size: 1.1rem; margin-bottom: 16px; font-weight: 600; color: #F3F4F6; }
  .ftr-links ul { list-style: none; padding: 0; margin: 0; }
  .ftr-links li { margin-bottom: 12px; }
  .ftr-links a { color: #D1D5DB; text-decoration: none; font-size: 0.9rem; transition: color 0.2s; cursor: pointer; }
  .ftr-links a:hover { color: var(--orange, #FF9F1C); }
  .ftr-partner { background: rgba(255, 255, 255, 0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); }
  .ftr-partner-btn { display: inline-block; background: var(--orange, #FF9F1C); color: #0A192F; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 700; margin-top: 12px; font-size: 0.9rem; transition: transform 0.2s; }
  .ftr-partner-btn:hover { transform: translateY(-2px); }
  .ftr-bottom { max-width: 1200px; margin: 40px auto 0; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center; color: #6B7280; font-size: 0.8rem; }
  
  @media (max-width: 768px) { 
    .ftr-grid { grid-template-columns: 1fr; gap: 32px; } 
    .ftr-brand, .ftr-partner { text-align: center; }
    .ftr-brand-logo-wrap { display: flex; justify-content: center; } 
  }
`;function Ym(){const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:hv}),r.jsxs("footer",{className:"footer",children:[r.jsxs("div",{className:"ftr-grid",children:[r.jsxs("div",{className:"ftr-brand",children:[r.jsx("div",{className:"ftr-brand-logo-wrap",onClick:s,style:{cursor:"pointer"},children:r.jsx(ur,{})}),r.jsxs("p",{children:["Expert local professionals in Bikaner, Rajasthan.",r.jsx("br",{}),"Fix any problem instantly."]})]}),r.jsxs("div",{className:"ftr-links",children:[r.jsx("h4",{children:"Quick Links"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(Ol,{to:"/",onClick:s,children:"Home"})}),r.jsx("li",{children:r.jsx(Ol,{to:"/#services",children:"All Services"})}),r.jsx("li",{children:r.jsx(Ol,{to:"/login",children:"Customer Login"})})]})]}),r.jsxs("div",{className:"ftr-partner",children:[r.jsx("h4",{children:"Are you a Pro?"}),r.jsx("p",{style:{color:"#9CA3AF",fontSize:"0.85rem",marginTop:"8px"},children:"Earn money offering your skills in Bikaner."}),r.jsx(Ol,{to:"/join",onClick:s,className:"ftr-partner-btn",children:"Join as Partner"})]})]}),r.jsxs("div",{className:"ftr-bottom",children:["© ",new Date().getFullYear()," NowFix Bikaner. All rights reserved."]})]})]})}function gv(){return r.jsxs("div",{className:"home-page",style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[r.jsx(dr,{}),r.jsxs("main",{style:{flex:1},children:[r.jsx(ov,{}),r.jsx(pv,{})]}),r.jsx(Ym,{})]})}const vv=`
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
`;function xv({fullscreen:s=!0}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:vv}),r.jsx("div",{className:s?"loader-overlay":"",children:r.jsxs("div",{className:"loader-container",children:[r.jsx("svg",{className:"loader-spinner-bg",viewBox:"0 0 72 72",children:r.jsx("circle",{cx:"36",cy:"36",r:"34"})}),r.jsx("svg",{className:"loader-spinner",viewBox:"0 0 72 72",children:r.jsx("circle",{cx:"36",cy:"36",r:"34"})}),r.jsx("div",{className:"loader-icon loader-wrench",children:r.jsx("svg",{viewBox:"0 0 512 512",children:r.jsx("path",{d:"M459.957,203.4c42.547-38.609,49.656-82.484,40.141-119.469c-0.281-2.938-0.984-5.406-3.547-7.266l-8.563-7.016c-1.484-1.375-3.484-2.063-5.484-1.859c-2.016,0.188-3.844,1.234-5.031,2.859l-49.25,64.031c-1.375,1.891-3.594,2.969-5.922,2.891l-17.875,1.313c-1.531-0.047-3.016-0.594-4.219-1.563l-34.531-29.266c-1.406-1.141-2.328-2.766-2.563-4.563l-2.141-16.188c-0.25-1.781,0.203-3.594,1.266-5.047l46.109-62.641c2.094-2.891,1.688-6.875-0.906-9.297l-11.188-8.734c-2.188-2.047-4.672-1.75-8.063-1.109c-31.844,6.297-86.219,37.125-100.016,79.75c-12.156,37.516-7.922,63.969-7.922,63.969c0,21.141-6.953,41.516-15.5,50.078L24.504,424.916c-0.469,0.438-0.922,0.859-1.375,1.313c-19.844,19.844-19.813,52.063-0.641,71.219c19.172,19.172,51.859,19.688,71.703-0.172c0.922-0.922,1.813-1.875,2.641-2.859l231.672-250.438C357.004,218.619,413.426,245.65,459.957,203.4z"})})}),r.jsx("div",{className:"loader-icon loader-hammer",children:r.jsx("svg",{viewBox:"0 0 64 64",style:{transform:"scale(-1.25, 1.25)",transformOrigin:"center"},children:r.jsx("path",{d:"M30.651,23.538l25.24,24.346l-6.577,6.577l-23.969,-25.617l5.306,-5.306Zm-7.208,3.403l5.306,-5.305c0,0 -2.695,-2.056 -2.447,-3.34c0.248,-1.285 0.809,-3.1 4.711,-4.711c3.903,-1.611 7.543,-1.757 7.543,-1.757l0.131,-1.758c0,0 -8.969,-1.356 -13.707,0.327c-4.738,1.684 -10.097,8.02 -10.097,8.02c0,0 0.935,3.064 -0.667,4.666c-1.601,1.601 -3.754,-0.245 -3.754,-0.245l-2.456,3.118l6.197,6.197l3.112,-2.461c0,0 -1.472,-2.207 -0.017,-3.528c3.132,-2.842 6.145,0.777 6.145,0.777Z"})})})]})})]})}const qm=E.createContext({show:()=>{},hide:()=>{},isLoading:!1});function Ws(){return E.useContext(qm)}function bv({children:s}){const[d,f]=E.useState(!1),c=E.useRef(0),m=E.useCallback(()=>{c.current+=1,f(!0)},[]),h=E.useCallback(()=>{c.current=Math.max(0,c.current-1),c.current===0&&f(!1)},[]);return E.useEffect(()=>{if(!(typeof window>"u")&&!window.__loaderPatched){if(window.__loaderPatched=!0,window.fetch&&(window.__origFetchForLoader=window.fetch,window.fetch=async function(...v){c.current+=1,f(!0);try{return await window.__origFetchForLoader.apply(this,v)}finally{c.current-=1,c.current===0&&f(!1)}}),window.XMLHttpRequest&&window.XMLHttpRequest.prototype){const v=window.XMLHttpRequest.prototype;v.__origSendForLoader||(v.__origSendForLoader=v.send,v.send=function(...A){return c.current+=1,f(!0),this.addEventListener("loadend",()=>{c.current-=1,c.current===0&&f(!1)}),v.__origSendForLoader.apply(this,A)})}return()=>{if(window.__origFetchForLoader&&(window.fetch=window.__origFetchForLoader,delete window.__origFetchForLoader),window.XMLHttpRequest&&window.XMLHttpRequest.prototype){const v=window.XMLHttpRequest.prototype;v.__origSendForLoader&&(v.send=v.__origSendForLoader,delete v.__origSendForLoader)}delete window.__loaderPatched}}},[]),r.jsxs(qm.Provider,{value:{show:m,hide:h,isLoading:d},children:[s,d&&r.jsx(xv,{fullscreen:!0})]})}const yv=`
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
`;function jv(){const s=Tt(),{login:d}=Hl(),{show:f,hide:c}=Ws(),[m,h]=E.useState(1),[v,A]=E.useState(""),[j,p]=E.useState(["","","",""]),w=j.every(k=>k!=="");function y(){v.length===10&&h(2)}function _(k,D){if(!/^\d*$/.test(k))return;const Y=[...j];Y[D]=k.substring(k.length-1),p(Y),k&&D<3&&document.getElementById(`otp-${D+1}`).focus()}function L(k,D){k.key==="Backspace"&&!j[D]&&D>0&&document.getElementById(`otp-${D-1}`).focus(),k.key==="Enter"&&w&&G()}function G(){f(),setTimeout(()=>{d({name:"Aditya Demo",phone:v}),c(),s("/")},2e3)}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:yv}),r.jsx("div",{className:"login-page",children:r.jsxs("div",{className:"login-card",children:[r.jsx("div",{className:"login-header",children:r.jsx(ur,{})}),m===1&&r.jsxs(r.Fragment,{children:[r.jsx("h1",{className:"login-title",children:"Welcome Back"}),r.jsx("p",{className:"login-sub",children:"Enter your mobile number to log in or sign up."}),r.jsx("label",{className:"login-label",children:"Mobile Number"}),r.jsxs("div",{className:"login-phone-wrap",children:[r.jsx("div",{className:"login-phone-prefix",children:r.jsx("span",{className:"flag-emoji",children:"🇮🇳"})}),r.jsx("input",{className:"login-phone-input",type:"tel",maxLength:10,placeholder:"98765 43210",value:v,onChange:k=>A(k.target.value.replace(/\D/g,"")),onKeyDown:k=>k.key==="Enter"&&y(),autoFocus:!0})]}),r.jsx("button",{className:"login-btn",onClick:y,disabled:v.length!==10,children:"Send OTP →"}),r.jsxs("p",{className:"login-terms",children:["By continuing, you agree to our"," ",r.jsx("span",{children:"Terms of Service"})," and"," ",r.jsx("span",{children:"Privacy Policy"})]})]}),m===2&&r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"login-back",onClick:()=>h(1),children:"← Change Number"}),r.jsx("h1",{className:"login-title",children:"Enter OTP"}),r.jsx("p",{className:"login-sub",children:"We sent a 4-digit code to"}),r.jsx("div",{className:"otp-phone-display",children:r.jsxs("span",{children:[r.jsx("span",{className:"flag-emoji",children:"🇮🇳"})," ",v]})}),r.jsx("div",{className:"otp-wrap",children:j.map((k,D)=>r.jsx("input",{id:`otp-${D}`,className:`otp-input${k?" filled":""}`,type:"tel",maxLength:1,value:k,onChange:Y=>_(Y.target.value,D),onKeyDown:Y=>L(Y,D),autoFocus:D===0},D))}),r.jsxs("p",{className:"otp-resend",children:["Didn't receive the code?"," ",r.jsx("span",{onClick:()=>p(["","","",""]),children:"Resend OTP"})]}),r.jsx("button",{className:"login-btn",onClick:G,disabled:!w,children:"Verify & Continue →"})]})]})})]})}const Sv=`
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
`,wv=["Plumbing","Electrician","AC Repair","Home Cleaning","Carpentry","Appliance Repair","Painting","Pest Control"];function Ev(){const s=Tt(),[d,f]=E.useState(null),[c,m]=E.useState(!1),[h,v]=E.useState({name:"",phone:"",category:"",experience:"",city:"Bikaner",aadhar:""});function A(y){const _=y.target.files[0];_&&(f(URL.createObjectURL(_)),console.log("Photo selected for upload:",_.name))}function j(y){const _=y.target.files[0];_&&(m(!0),console.log("Aadhar selected for upload:",_.name))}function p(y,_){v(L=>({...L,[y]:_}))}function w(){console.log("Submitting worker application data:",h),alert("Application submitted successfully! We will contact you soon."),s("/")}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Sv}),r.jsx("div",{className:"join-page",children:r.jsxs("div",{className:"join-card",children:[r.jsx("div",{className:"join-header",children:r.jsx(ur,{})}),r.jsx("h1",{className:"join-title",children:"Join as a Worker"}),r.jsx("p",{className:"join-sub",children:"Fill in your details to start receiving jobs in Bikaner"}),r.jsxs("div",{className:"join-photo-wrap",children:[r.jsx("div",{className:"join-photo-circle",onClick:()=>document.getElementById("photo-input").click(),children:d?r.jsx("img",{src:d,alt:"Profile"}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),r.jsx("span",{children:"Add Photo"})]})}),r.jsx("span",{className:"join-photo-label",onClick:()=>document.getElementById("photo-input").click(),children:d?"Change Photo":"Upload Profile Photo"}),r.jsx("input",{id:"photo-input",type:"file",accept:"image/*",style:{display:"none"},onChange:A})]}),r.jsx("p",{className:"join-section-label",children:"Personal Information"}),r.jsxs("div",{className:"join-row",children:[r.jsxs("div",{className:"join-field no-margin",children:[r.jsx("label",{children:"Full Name"}),r.jsx("input",{className:"join-input",type:"text",placeholder:"Ramesh Kumar",value:h.name,onChange:y=>p("name",y.target.value)})]}),r.jsxs("div",{className:"join-field no-margin",children:[r.jsx("label",{children:"Phone Number"}),r.jsxs("div",{className:"join-phone-wrap",children:[r.jsx("div",{className:"join-phone-prefix",children:"🇮🇳 +91"}),r.jsx("input",{className:"join-phone-input",type:"tel",placeholder:"98765 43210",maxLength:10,value:h.phone,onChange:y=>p("phone",y.target.value.replace(/\D/g,""))})]})]})]}),r.jsx("div",{className:"join-divider"}),r.jsx("p",{className:"join-section-label",children:"Work Information"}),r.jsxs("div",{className:"join-row",children:[r.jsxs("div",{className:"join-field no-margin",children:[r.jsx("label",{children:"Service Category"}),r.jsxs("select",{className:"join-select",value:h.category,onChange:y=>p("category",y.target.value),children:[r.jsx("option",{value:"",children:"Select category"}),wv.map(y=>r.jsx("option",{value:y,children:y},y))]})]}),r.jsxs("div",{className:"join-field no-margin",children:[r.jsx("label",{children:"Experience"}),r.jsxs("select",{className:"join-select",value:h.experience,onChange:y=>p("experience",y.target.value),children:[r.jsx("option",{value:"",children:"Select years"}),r.jsx("option",{value:"0-1",children:"Less than 1 year"}),r.jsx("option",{value:"1-3",children:"1 - 3 years"}),r.jsx("option",{value:"3-5",children:"3 - 5 years"}),r.jsx("option",{value:"5+",children:"5+ years"})]})]})]}),r.jsx("div",{className:"join-divider"}),r.jsx("p",{className:"join-section-label",children:"Identity Verification"}),r.jsxs("div",{className:"join-field",children:[r.jsx("label",{children:"Aadhar Card Number"}),r.jsx("input",{className:"join-input",type:"tel",placeholder:"1234 5678 9012",maxLength:14,value:h.aadhar,onChange:y=>p("aadhar",y.target.value)})]}),r.jsxs("div",{className:`join-upload-box${c?" uploaded":""}`,onClick:()=>document.getElementById("aadhar-input").click(),children:[c?r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.jsx("polyline",{points:"17 8 12 3 7 8"}),r.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),r.jsx("span",{className:"join-upload-title",children:c?"Aadhar Card Uploaded ✓":"Upload Aadhar Card"}),r.jsx("span",{className:"join-upload-sub",children:c?"Tap to change file":"JPG, PNG or PDF — max 5MB"}),r.jsx("input",{id:"aadhar-input",type:"file",accept:"image/*,.pdf",style:{display:"none"},onChange:j})]}),r.jsx("button",{className:"join-submit",onClick:w,children:"Submit Application →"})]})})]})}const zv=`
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
`,Nv={plumbing:{color:"#eff6ff",iconColor:"#2563eb",desc:"Fast and reliable plumbing solutions",packages:[{id:1,name:"Tap / Faucet Repair",desc:"Fix leaky taps, replace washers, tighten fittings",price:199,duration:"30-45 mins",popular:!0},{id:2,name:"Pipe Leak Fix",desc:"Detect and seal pipe leaks, joint repairs",price:349,duration:"45-60 mins",popular:!1},{id:3,name:"Drain Cleaning",desc:"Unclog blocked drains, kitchen and bathroom",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Plumbing Check",desc:"Complete inspection of all plumbing points",price:499,duration:"60-90 mins",popular:!1}]},electrician:{color:"#fefce8",iconColor:"#ca8a04",desc:"Certified electrical work at your home",packages:[{id:1,name:"Switch / Socket Repair",desc:"Fix or replace faulty switches and sockets",price:149,duration:"20-30 mins",popular:!0},{id:2,name:"Fan Installation",desc:"Install ceiling or wall fan with wiring",price:249,duration:"30-45 mins",popular:!1},{id:3,name:"MCB / Fuse Repair",desc:"Fix tripping MCB, replace fuse box",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Wiring Check",desc:"Safety inspection of all electrical wiring",price:599,duration:"60-90 mins",popular:!1}]},"ac-repair":{color:"#f0fdf4",iconColor:"#16a34a",desc:"Expert AC service and maintenance",packages:[{id:1,name:"AC Service & Clean",desc:"Deep clean filters, coils and full service",price:499,duration:"60-90 mins",popular:!0},{id:2,name:"Gas Refilling",desc:"Recharge refrigerant gas to optimal level",price:1299,duration:"45-60 mins",popular:!1},{id:3,name:"AC Installation",desc:"Install new split or window AC unit",price:999,duration:"2-3 hours",popular:!1},{id:4,name:"AC Not Cooling Fix",desc:"Diagnose and fix cooling issues",price:399,duration:"45-60 mins",popular:!1}]},cleaning:{color:"#fdf4ff",iconColor:"#a21caf",desc:"Professional home cleaning services",packages:[{id:1,name:"Basic Home Clean",desc:"Sweep, mop, dust all rooms",price:399,duration:"2-3 hours",popular:!0},{id:2,name:"Deep Home Clean",desc:"Full sanitization including kitchen and bathrooms",price:799,duration:"4-5 hours",popular:!1},{id:3,name:"Kitchen Deep Clean",desc:"Degrease and clean entire kitchen",price:599,duration:"2-3 hours",popular:!1},{id:4,name:"Bathroom Cleaning",desc:"Scrub, sanitize and clean all bathrooms",price:299,duration:"1-2 hours",popular:!1}]},carpentry:{color:"#fff7ed",iconColor:"#c2410c",desc:"Skilled carpenters for all wood work",packages:[{id:1,name:"Furniture Assembly",desc:"Assemble flat-pack or new furniture",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Door Repair",desc:"Fix hinges, locks, alignment issues",price:249,duration:"30-60 mins",popular:!1},{id:3,name:"Wood Polish",desc:"Sand and polish wooden furniture",price:499,duration:"2-3 hours",popular:!1},{id:4,name:"Custom Fitting",desc:"Custom shelves, cabinets or woodwork",price:799,duration:"3-4 hours",popular:!1}]},"appliance-repair":{color:"#eff6ff",iconColor:"#1d4ed8",desc:"All home appliance repairs",packages:[{id:1,name:"Washing Machine Repair",desc:"Fix spin, drain or electrical issues",price:449,duration:"45-60 mins",popular:!0},{id:2,name:"Refrigerator Repair",desc:"Fix cooling, compressor or door seal",price:499,duration:"45-90 mins",popular:!1},{id:3,name:"Microwave Repair",desc:"Fix heating, door or electrical faults",price:349,duration:"30-45 mins",popular:!1},{id:4,name:"TV / LED Repair",desc:"Fix display, sound or power issues",price:399,duration:"45-60 mins",popular:!1}]},painting:{color:"#fff1f2",iconColor:"#e11d48",desc:"Professional home painting services",packages:[{id:1,name:"Single Room Paint",desc:"Full painting of one room walls and ceiling",price:1499,duration:"1 day",popular:!0},{id:2,name:"2-3 Room Paint",desc:"Full painting of 2-3 rooms",price:3499,duration:"2-3 days",popular:!1},{id:3,name:"Exterior Paint",desc:"Outside wall painting and waterproofing",price:4999,duration:"3-5 days",popular:!1},{id:4,name:"Texture / Design Work",desc:"Decorative texture or pattern wall finish",price:2499,duration:"2-3 days",popular:!1}]},"pest-control":{color:"#f0fdf4",iconColor:"#15803d",desc:"Safe and effective pest removal",packages:[{id:1,name:"Cockroach Control",desc:"Gel treatment for kitchen and bathrooms",price:499,duration:"45-60 mins",popular:!0},{id:2,name:"Termite Treatment",desc:"Full home anti-termite spray treatment",price:1499,duration:"2-3 hours",popular:!1},{id:3,name:"Rodent Control",desc:"Traps and repellent for rats and mice",price:799,duration:"1-2 hours",popular:!1},{id:4,name:"Full Home Pest Control",desc:"Complete treatment for all common pests",price:1999,duration:"3-4 hours",popular:!1}]}},Cv={color:"#eff6ff",iconColor:"#2563eb",desc:"Professional home service",packages:[{id:1,name:"Basic Service",desc:"Standard service package",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Standard Service",desc:"Complete service package",price:499,duration:"2-3 hours",popular:!1}]};function Av(){const s=Tt(),{id:d}=lg(),[f,c]=E.useState(1),[m,h]=E.useState(null),[v,A]=E.useState(null),j=Nv[d]||Cv,p=j.packages.find(_=>_.id===m);function w(_){const L=_.target.files[0];L&&A(URL.createObjectURL(L))}const y=d?d.replace(/-/g," "):"Service";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:zv}),r.jsxs("div",{className:"sd-page",children:[r.jsxs("div",{className:"sd-topbar",children:[r.jsxs("button",{className:"sd-back",onClick:()=>f===1?s("/"):c(1),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back"]}),r.jsx("span",{className:"sd-topbar-title",children:y}),r.jsx("div",{className:"sd-topbar-right"})]}),r.jsxs("div",{className:"sd-steps",children:[r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${f===1?"active":"done"}`,children:f>1?"✓":"1"}),r.jsx("span",{className:`sd-step-label ${f===1?"active":"done"}`,children:"Choose Package"})]}),r.jsx("div",{className:`sd-step-line ${f>1?"done":""}`}),r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${f===2?"active":""}`,children:"2"}),r.jsx("span",{className:`sd-step-label ${f===2?"active":""}`,children:"Add Photo"})]})]}),r.jsxs("div",{className:"sd-inner",children:[r.jsxs("div",{className:"sd-header-card",children:[r.jsx("div",{className:"sd-header-icon",style:{background:j.color,color:j.iconColor},children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}),r.jsxs("div",{className:"sd-header-info",children:[r.jsx("h2",{children:y}),r.jsx("p",{children:j.desc})]})]}),f===1&&r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"sd-section-title",children:"Choose a Package"}),r.jsx("div",{className:"sd-packages",children:j.packages.map(_=>r.jsxs("div",{className:`sd-pkg-card ${m===_.id?"selected":""}`,onClick:()=>h(_.id),children:[r.jsx("div",{className:"sd-pkg-radio",children:r.jsx("div",{className:"sd-pkg-radio-dot"})}),r.jsxs("div",{className:"sd-pkg-info",children:[r.jsxs("div",{className:"sd-pkg-name",children:[_.name,_.popular&&r.jsx("span",{className:"sd-pkg-badge",children:"Popular"})]}),r.jsx("div",{className:"sd-pkg-desc",children:_.desc})]}),r.jsxs("div",{className:"sd-pkg-right",children:[r.jsxs("div",{className:"sd-pkg-price",children:["₹",_.price]}),r.jsx("div",{className:"sd-pkg-duration",children:_.duration})]})]},_.id))})]}),f===2&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"sd-summary",children:[r.jsxs("div",{className:"sd-summary-row",children:[r.jsx("span",{children:"Selected Package"}),r.jsx("strong",{children:p?.name})]}),r.jsx("div",{className:"sd-summary-divider"}),r.jsxs("div",{className:"sd-summary-total",children:[r.jsx("span",{children:"Total"}),r.jsxs("span",{children:["₹",p?.price]})]})]}),r.jsx("p",{className:"sd-section-title",children:"Upload a Photo (Optional)"}),v?r.jsxs("div",{className:"sd-upload-area has-image",onClick:()=>document.getElementById("gallery-input").click(),children:[r.jsx("img",{src:v,alt:"Issue",className:"sd-upload-preview"}),r.jsx("span",{className:"sd-upload-change",children:"Tap to change photo"})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"sd-upload-options",children:[r.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("camera-input").click(),children:[r.jsxs("svg",{viewBox:"0 0 24 24",children:[r.jsx("path",{d:"M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"}),r.jsx("path",{d:"M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})]}),r.jsx("span",{children:"Take Photo"})]}),r.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("gallery-input").click(),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),r.jsx("span",{children:"From Gallery"})]})]}),r.jsxs("div",{className:"sd-upload-area",onClick:()=>document.getElementById("gallery-input").click(),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"})}),r.jsx("span",{className:"sd-upload-title",children:"Upload issue photo"}),r.jsxs("span",{className:"sd-upload-sub",children:["Help the worker understand your issue better.",`
`,"Tap to upload from your device."]})]})]}),r.jsx("input",{id:"camera-input",type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:w}),r.jsx("input",{id:"gallery-input",type:"file",accept:"image/*",style:{display:"none"},onChange:w}),r.jsx("button",{className:"sd-skip-btn",onClick:()=>s("/login"),children:"Skip & Continue without photo →"})]})]}),r.jsxs("div",{className:"sd-cta",children:[r.jsx("div",{className:"sd-cta-info",children:p?r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"sd-cta-price",children:["₹",p.price]}),r.jsx("span",{className:"sd-cta-label",children:p.name})]}):r.jsx("span",{className:"sd-cta-label",children:"Select a package to continue"})}),r.jsx("button",{className:"sd-cta-btn",disabled:!m,onClick:()=>f===1?c(2):s("/login"),children:f===1?"Continue →":"Confirm Booking →"})]})]})]})}const Tv=`
  .profile-page {
    padding-top: calc(var(--navbar-height, 70px) + 40px);
    background: var(--bg-2, #F9FAFB);
    min-height: 100vh;
    padding-bottom: 80px;
    font-family: var(--font-body, 'Inter', sans-serif);
  }

  .profile-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .profile-topbar {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  .profile-back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-2, #374151);
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .profile-back-btn:hover {
    color: var(--primary, #1F5BB5);
  }

  .profile-card {
    background: white;
    border: 1px solid var(--border, #E5E7EB);
    border-radius: var(--radius-lg, 12px);
    padding: 32px;
    box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.06));
    margin-bottom: 24px;
  }

  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
    text-align: center;
  }

  .profile-avatar-wrap {
    position: relative;
    margin-bottom: 16px;
  }

  .profile-big-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--primary, #1F5BB5);
    color: white;
    font-size: 2.5rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid white;
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
    overflow: hidden;
  }
  
  .profile-big-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .edit-avatar-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--orange, #FF9F1C);
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    cursor: pointer;
    box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.06));
    transition: transform 0.2s ease;
  }

  .edit-avatar-btn:hover {
    transform: scale(1.1);
  }

  .profile-name {
    font-family: var(--font-heading, 'Montserrat', sans-serif);
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text, #111827);
    margin-bottom: 4px;
  }

  .profile-member-since {
    color: var(--text-3, #6B7280);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .profile-section-title {
    font-family: var(--font-heading, 'Montserrat', sans-serif);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text, #111827);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-2, #374151);
    margin-bottom: 8px;
  }

  .form-input {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid var(--border, #E5E7EB);
    border-radius: var(--radius-md, 8px);
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.95rem;
    color: var(--text, #111827);
    transition: border-color 0.2s, box-shadow 0.2s;
    background: white;
    outline: none;
  }

  .form-input:focus {
    border-color: var(--primary, #1F5BB5);
    box-shadow: 0 0 0 3px rgba(31,91,181,0.1);
  }

  .form-input:disabled {
    background: var(--bg-2, #F9FAFB);
    cursor: not-allowed;
    color: var(--text-3, #6B7280);
    border-color: var(--border, #E5E7EB);
  }

  select.form-input {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }

  .address-box {
    position: relative;
    margin-bottom: 16px;
  }

  .address-badge {
    position: absolute;
    top: -10px;
    right: 12px;
    background: var(--primary-light, #e8f0fb);
    color: var(--primary, #1F5BB5);
    padding: 4px 10px;
    border-radius: var(--radius-sm, 4px);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1px solid var(--primary);
  }

  .remove-address-btn {
    position: absolute;
    bottom: -8px;
    right: 12px;
    background: white;
    color: var(--error, #dc2626);
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid var(--border);
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    cursor: pointer;
  }

  .add-address-btn {
    width: 100%;
    background: transparent;
    border: 1.5px dashed var(--primary, #1F5BB5);
    color: var(--primary, #1F5BB5);
    padding: 12px;
    border-radius: var(--radius-md, 8px);
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 16px;
    transition: all 0.2s;
  }

  .add-address-btn:hover {
    background: var(--primary-light, #e8f0fb);
  }

  .save-btn {
    width: 100%;
    background: var(--primary, #1F5BB5);
    color: white;
    border: none;
    padding: 14px;
    border-radius: var(--radius-md, 8px);
    font-family: var(--font-body, 'Inter', sans-serif);
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: var(--shadow-primary, 0 4px 14px 0 rgba(31,91,181,0.39));
    transition: all 0.2s ease;
    margin-top: 10px;
  }

  .save-btn:hover {
    background: var(--primary-dark, #174a96);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(31,91,181,0.35);
  }

  .save-btn:active {
    transform: translateY(0);
  }

  /* Modern Toast Notification */
  .toast-notification {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: #111827;
    color: white;
    padding: 14px 24px;
    border-radius: 50px;
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.95rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 1000;
  }

  .toast-notification.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 480px) {
    .profile-page { padding-top: calc(var(--navbar-height, 70px) + 20px); }
    .profile-card { padding: 24px 20px; border-radius: var(--radius-md, 8px); }
    .profile-big-avatar { width: 80px; height: 80px; font-size: 2rem; }
    .profile-name { font-size: 1.25rem; }
    .form-grid { grid-template-columns: 1fr; gap: 0; }
  }
`;function Bv(){const{user:s,login:d}=Hl(),{show:f,hide:c}=Ws(),m=Tt(),h=E.useRef(null);if(!s)return m("/login"),null;const[v,A]=E.useState({name:s.name||"",phone:s.phone||"",email:s.email||"aditya.demo@example.com",gender:s.gender||"",dob:s.dob||"",addresses:s.addresses&&s.addresses.length>0?s.addresses:["123, Gandhi Nagar, Bikaner, RJ"]}),[j,p]=E.useState(s.photo||null),[w,y]=E.useState(!1),_=()=>{f(),setTimeout(()=>{d({...s,name:v.name,email:v.email,gender:v.gender,dob:v.dob,addresses:v.addresses,photo:j}),c(),y(!0),setTimeout(()=>y(!1),3e3)},1500)},L=X=>{const F=X.target.files[0];if(F){const Z=new FileReader;Z.onloadend=()=>{p(Z.result)},Z.readAsDataURL(F)}},G=()=>{h.current.click()},k=(X,F)=>{const Z=[...v.addresses];Z[X]=F,A({...v,addresses:Z})},D=()=>{A({...v,addresses:[...v.addresses,""]})},Y=X=>{const F=v.addresses.filter((Z,ue)=>ue!==X);A({...v,addresses:F})};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Tv}),r.jsx(dr,{}),r.jsxs("div",{className:`toast-notification ${w?"show":""}`,children:[r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#4ade80",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Profile details saved successfully"]}),r.jsx("div",{className:"profile-page",children:r.jsxs("div",{className:"profile-container",children:[r.jsx("div",{className:"profile-topbar",children:r.jsxs("button",{className:"profile-back-btn",onClick:()=>m(-1),children:[r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),r.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Back"]})}),r.jsxs("div",{className:"profile-card",children:[r.jsxs("div",{className:"profile-header",children:[r.jsxs("div",{className:"profile-avatar-wrap",children:[r.jsx("div",{className:"profile-big-avatar",children:j?r.jsx("img",{src:j,alt:"Profile"}):v.name?v.name.charAt(0):"U"}),r.jsx("input",{type:"file",accept:"image/*",ref:h,style:{display:"none"},onChange:L}),r.jsx("div",{className:"edit-avatar-btn",onClick:G,children:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),r.jsx("circle",{cx:"12",cy:"13",r:"4"})]})})]}),r.jsx("h2",{className:"profile-name",children:v.name}),r.jsx("p",{className:"profile-member-since",children:"Member since March 2026"})]}),r.jsx("div",{className:"profile-section-title",children:"Personal Information"}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Full Name"}),r.jsx("input",{className:"form-input",type:"text",value:v.name,onChange:X=>A({...v,name:X.target.value})})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Phone Number"}),r.jsx("input",{className:"form-input",type:"text",value:v.phone,disabled:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email Address"}),r.jsx("input",{className:"form-input",type:"email",value:v.email,onChange:X=>A({...v,email:X.target.value})})]})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Gender"}),r.jsxs("select",{className:"form-input",value:v.gender,onChange:X=>A({...v,gender:X.target.value}),children:[r.jsx("option",{value:"",disabled:!0,children:"Select Gender"}),r.jsx("option",{value:"Male",children:"Male"}),r.jsx("option",{value:"Female",children:"Female"}),r.jsx("option",{value:"Other",children:"Other"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Date of Birth"}),r.jsx("input",{className:"form-input",type:"date",value:v.dob,onChange:X=>A({...v,dob:X.target.value})})]})]})]}),r.jsxs("div",{className:"profile-card",children:[r.jsx("div",{className:"profile-section-title",children:"Saved Addresses"}),v.addresses.map((X,F)=>r.jsxs("div",{className:"address-box",children:[F===0&&r.jsx("span",{className:"address-badge",children:"Primary"}),r.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Enter complete address...",value:X,onChange:Z=>k(F,Z.target.value),style:{resize:"vertical"}}),F!==0&&r.jsx("button",{className:"remove-address-btn",onClick:()=>Y(F),children:"Remove"})]},F)),r.jsx("button",{className:"add-address-btn",onClick:D,children:"+ Add Another Address"}),r.jsx("button",{className:"save-btn",onClick:_,children:"Save All Details"})]})]})})]})}const kv=[{id:"plumbing",name:"Plumbing"},{id:"electrical",name:"Electrical"},{id:"ac",name:"AC & Appliances"},{id:"cleaning",name:"Cleaning & Pest"}],xm=[{id:"s1",category:"plumbing",name:"Tap Leakage Repair",desc:"Fix dripping taps, pipes, and minor leaks. Spare parts extra.",price:149,isPackage:!1,time:"45 mins",image:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400"},{id:"s2",category:"plumbing",name:"Bathroom Deep Check & Fix",desc:"Complete plumbing inspection, blockages removed, and pressure testing.",price:599,isPackage:!0,time:"2 hrs",image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"},{id:"s3",category:"electrical",name:"Fan Installation/Repair",desc:"Ceiling or exhaust fan setup, wiring check, and speed fixing.",price:199,isPackage:!1,time:"30 mins",image:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400"},{id:"s4",category:"electrical",name:"Main Board Repair",desc:"MCB replacement, fuse fixing, or complex wiring issues.",price:299,isPackage:!1,time:"1 hr",image:"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=400"},{id:"s5",category:"ac",name:"AC Master Servicing",desc:"Deep jet clean of indoor/outdoor units + gas pressure check.",price:899,isPackage:!0,time:"1.5 hrs",image:"https://placehold.co/400x300/1F5BB5/FFF?text=AC+Master+Service"},{id:"s6",category:"cleaning",name:"Sofa Deep Cleaning",desc:"Foam wash, stain removal, and dry vacuuming for 5-seater.",price:749,isPackage:!1,time:"2 hrs",image:"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400"}],Rv=`
  .catalog-page { background: var(--bg-2, #F9FAFB); min-height: 100vh; display: flex; flex-direction: column; font-family: var(--font-body); padding-top: var(--navbar-height); }
  
  .marquee-wrap { background: #0A192F; color: white; padding: 12px 0; overflow: hidden; border-bottom: 3px solid var(--orange, #FF9F1C); display: flex; white-space: nowrap; }
  .marquee-content { display: flex; animation: scrollMarquee 25s linear infinite; gap: 40px; padding-left: 40px; }
  @keyframes scrollMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .marquee-item { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #E5E7EB; }
  .marquee-item svg { width: 18px; height: 18px; color: var(--orange, #FF9F1C); }
  
  .catalog-container { max-width: 1200px; margin: 0 auto; width: 100%; display: flex; flex: 1; padding: 32px 1.5rem 100px; gap: 40px; align-items: flex-start; }
  
  .sidebar-cats { width: 260px; background: white; border: 1px solid var(--border); border-radius: 12px; padding: 24px; position: sticky; top: calc(var(--navbar-height) + 32px); flex-shrink: 0; box-shadow: var(--shadow-sm); }
  .sidebar-title { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--text); margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
  
  .cat-label { display: flex; align-items: center; gap: 12px; cursor: pointer; font-size: 0.95rem; font-weight: 500; color: var(--text-2); margin-bottom: 16px; transition: color 0.2s; user-select: none; }
  .cat-label:hover { color: var(--primary); }
  .cat-checkbox { width: 18px; height: 18px; cursor: pointer; accent-color: var(--primary); border: 1.5px solid var(--border); border-radius: 4px; flex-shrink: 0; }
  
  .catalog-main { flex: 1; min-width: 0; }
  
  .search-wrap { margin-bottom: 24px; position: relative; }
  .search-input { width: 100%; padding: 16px 20px 16px 52px; border: 1px solid var(--border); border-radius: 12px; font-size: 1rem; box-shadow: var(--shadow-sm); outline: none; transition: border 0.2s, box-shadow 0.2s; font-family: var(--font-body); }
  .search-input:focus { border-color: var(--primary); box-shadow: 0 0 0 4px rgba(31,91,181,0.1); }
  .search-icon { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: #9CA3AF; display: flex; align-items: center; }
  
  .svc-list { display: flex; flex-direction: column; gap: 20px; }
  .svc-row { background: white; border: 1px solid var(--border); border-radius: 12px; padding: 20px; display: flex; gap: 24px; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s; }
  .svc-row:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: #D1D5DB; }
  
  .svc-img-wrap { width: 160px; height: 130px; border-radius: 8px; overflow: hidden; flex-shrink: 0; border: 1px solid var(--border); }
  .svc-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
  .svc-row:hover .svc-img { transform: scale(1.05); }

  .svc-content { flex: 1; display: flex; flex-direction: column; justify-content: space-between; min-width: 0; }
  
  .svc-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 8px; }
  .svc-name { font-size: 1.15rem; font-weight: 700; color: var(--text); line-height: 1.3; }
  .svc-price { font-size: 1.25rem; font-weight: 800; color: var(--primary); white-space: nowrap; }
  
  .svc-desc { font-size: 0.85rem; color: #6B7280; line-height: 1.5; margin-bottom: 12px; max-width: 90%; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  
  .svc-bottom { display: flex; justify-content: space-between; align-items: flex-end; }
  .svc-badges { display: flex; gap: 8px; flex-wrap: wrap; }
  .badge-pkg { background: #FFF7ED; font-size: 0.65rem; font-weight: 700; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; border: 1px solid #FFEDD5; }
  .badge-time { background: #F3F4F6; color: #4B5563; font-size: 0.7rem; font-weight: 600; padding: 4px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px; }
  
  .btn-add { background: white; border: 2px solid var(--primary); color: var(--primary); font-weight: 700; padding: 8px 28px; border-radius: 8px; cursor: pointer; transition: 0.2s; font-size: 0.95rem; font-family: var(--font-body); }
  .btn-add:hover { background: #EFF6FF; }

  .floating-cart { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); width: calc(100% - 32px); max-width: 600px; background: #0A192F; color: white; padding: 16px 24px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); z-index: 100; animation: slideUp 0.3s ease-out; border-top: 3px solid var(--orange); }
  @keyframes slideUp { from { bottom: -100px; opacity: 0; } to { bottom: 20px; opacity: 1; } }
  
  .cart-info h4 { font-size: 0.9rem; color: #9CA3AF; font-weight: 500; margin-bottom: 2px; }
  .cart-info p { font-size: 1.2rem; font-weight: 800; color: white; }
  .cart-btn { background: var(--orange, #FF9F1C); color: #0A192F; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 800; font-size: 1rem; cursor: pointer; transition: transform 0.2s; font-family: var(--font-body); }
  .cart-btn:hover { transform: translateY(-2px); }

  @media (max-width: 768px) {
    .catalog-container { flex-direction: column; padding: 24px 1rem 120px; gap: 24px; }
    .sidebar-cats { position: static; width: 100%; display: flex; flex-direction: column; padding: 16px; gap: 4px; }
    .sidebar-title { margin-bottom: 12px; padding-bottom: 8px; }
    .cat-label { margin-bottom: 10px; }
    .svc-row { padding: 16px; gap: 16px; flex-direction: column; }
    .svc-img-wrap { width: 100%; height: 160px; }
    .svc-header { flex-direction: column; gap: 8px; }
    .svc-desc { max-width: 100%; }
    .svc-bottom { margin-top: 12px; border-top: 1px solid var(--border); padding-top: 16px; flex-direction: row; align-items: center; }
  }
`;function Dv(){const s=Tt(),[d,f]=E.useState([]),[c,m]=E.useState(""),{cart:h,toggleCartItem:v,isCartConfirmed:A,setIsCartConfirmed:j}=$s();E.useEffect(()=>{window.scrollTo(0,0)},[]);const p=k=>{f(D=>D.includes(k)?D.filter(Y=>Y!==k):[...D,k])},w=E.useMemo(()=>xm.filter(k=>{const D=k.name.toLowerCase().includes(c.toLowerCase())||k.desc.toLowerCase().includes(c.toLowerCase()),Y=d.length===0||d.includes(k.category);return D&&Y}),[c,d]),y=()=>{let k=0,D=0;return Object.keys(h).forEach(Y=>{const X=xm.find(F=>F.id===Y);X&&(k+=1,D+=X.price)}),{totalItems:k,totalPrice:D}},{totalItems:_,totalPrice:L}=y(),G=[{text:"Verified Quality Professionals",icon:r.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})},{text:"Same Day Service Guaranteed",icon:r.jsxs("g",{children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polyline",{points:"12 6 12 12 16 14"})]})},{text:"Fixed Transparent Pricing",icon:r.jsxs("g",{children:[r.jsx("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}),r.jsx("line",{x1:"2",y1:"10",x2:"22",y2:"10"})]})},{text:"30-Day Service Warranty",icon:r.jsx("polyline",{points:"20 6 9 17 4 12"})}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Rv}),r.jsxs("div",{className:"catalog-page",children:[r.jsx(dr,{}),r.jsx("div",{className:"marquee-wrap",children:r.jsx("div",{className:"marquee-content",children:[...G,...G].map((k,D)=>r.jsxs("div",{className:"marquee-item",children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:k.icon}),k.text]},D))})}),r.jsxs("div",{className:"catalog-container",children:[r.jsxs("aside",{className:"sidebar-cats",children:[r.jsx("h3",{className:"sidebar-title",children:"Categories"}),kv.map(k=>r.jsxs("label",{className:"cat-label",children:[r.jsx("input",{type:"checkbox",className:"cat-checkbox",checked:d.includes(k.id),onChange:()=>p(k.id)}),k.name]},k.id))]}),r.jsxs("main",{className:"catalog-main",children:[r.jsxs("div",{className:"search-wrap",children:[r.jsx("div",{className:"search-icon",children:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),r.jsx("input",{type:"text",className:"search-input",placeholder:"Search for AC repair, plumbing...",value:c,onChange:k=>m(k.target.value)})]}),r.jsx("div",{className:"svc-list",children:w.length===0?r.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"#6B7280",background:"white",borderRadius:"12px",border:"1px dashed #D1D5DB"},children:[r.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",style:{marginBottom:"16px"},children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("p",{children:"No services match your filters. Try clearing the search or categories."})]}):w.map(k=>{const D=!!h[k.id];return r.jsxs("div",{className:"svc-row",children:[r.jsx("div",{className:"svc-img-wrap",children:r.jsx("img",{src:k.image,alt:k.name,className:"svc-img",loading:"lazy",onError:Y=>{Y.currentTarget.onerror=null,Y.currentTarget.src="https://via.placeholder.com/400x300?text=Image+Unavailable"}})}),r.jsxs("div",{className:"svc-content",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"svc-header",children:[r.jsx("h3",{className:"svc-name",children:k.name}),r.jsxs("div",{className:"svc-price",children:["₹",k.price]})]}),r.jsx("p",{className:"svc-desc",children:k.desc})]}),r.jsxs("div",{className:"svc-bottom",children:[r.jsxs("div",{className:"svc-badges",children:[k.isPackage&&r.jsxs("span",{className:"badge-pkg",children:[r.jsx("span",{style:{color:"var(--primary)"},children:"BEST"})," ",r.jsx("span",{style:{color:"var(--orange)"},children:"VALUE"})]}),r.jsxs("span",{className:"badge-time",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polyline",{points:"12 6 12 12 16 14"})]}),k.time]})]}),r.jsx("div",{className:"svc-action",children:D?r.jsx("button",{className:"btn-add",style:{background:"#FEE2E2",color:"#DC2626",borderColor:"#FECACA"},onClick:()=>{v(k.id),j(!1)},children:"Remove"}):r.jsx("button",{className:"btn-add",onClick:()=>{v(k.id),j(!1)},children:"Add"})})]})]})]},k.id)})})]})]}),_>0&&r.jsxs("div",{className:"floating-cart",children:[r.jsxs("div",{className:"cart-info",children:[r.jsxs("h4",{children:[_," item",_>1?"s":""," added"]}),r.jsxs("p",{children:["₹",L]})]}),r.jsx("button",{className:"cart-btn",onClick:()=>s("/checkout"),children:"View Cart →"})]}),r.jsx(Ym,{})]})]})}const Mv=[{id:"s1",category:"plumbing",name:"Tap Leakage Repair",price:149,image:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400"},{id:"s2",category:"plumbing",name:"Bathroom Deep Check & Fix",price:599,image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"},{id:"s3",category:"electrical",name:"Fan Installation/Repair",price:199,image:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400"},{id:"s4",category:"electrical",name:"Main Board Repair",price:299,image:"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=400"},{id:"s5",category:"ac",name:"AC Master Servicing",price:899,image:"https://placehold.co/400x300/1F5BB5/FFF?text=AC+Master+Service"},{id:"s6",category:"cleaning",name:"Sofa Deep Cleaning",price:749,image:"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400"}],bm=`
  .sd-page { min-height: 100vh; background: var(--bg-2, #F9FAFB); font-family: var(--font-body); padding-bottom: 80px; }
  
  .sd-topbar { background: var(--bg); border-bottom: 1px solid var(--border); padding: 0 1.5rem; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
  .sd-back { display: flex; align-items: center; gap: 6px; background: none; border: none; font-family: var(--font-body); font-size: 0.875rem; font-weight: 600; color: var(--text-2); cursor: pointer; padding: 0; transition: color 0.2s; }
  .sd-back:hover { color: var(--primary); }
  .sd-back svg { width: 18px; height: 18px; fill: currentColor; }
  .sd-topbar-title { font-size: 0.95rem; font-weight: 700; color: var(--text); letter-spacing: -0.01em; }
  .sd-topbar-right { width: 80px; }

  .sd-steps { display: flex; align-items: center; justify-content: center; gap: 0; padding: 20px 1.5rem 0; max-width: 600px; margin: 0 auto; }
  .sd-step { display: flex; align-items: center; gap: 8px; flex: 1; }
  .sd-step-circle { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; border: 2px solid var(--border); color: #9CA3AF; background: var(--bg); transition: all 0.2s; }
  .sd-step-circle.active { background: var(--primary); border-color: var(--primary); color: white; }
  .sd-step-circle.done { background: #10B981; border-color: #10B981; color: white; }
  .sd-step-label { font-size: 0.75rem; font-weight: 600; color: #9CA3AF; transition: color 0.2s; }
  .sd-step-label.active { color: var(--primary); }
  .sd-step-label.done { color: #10B981; }
  .sd-step-line { flex: 1; height: 2px; background: var(--border); margin: 0 8px; transition: background 0.2s; }
  .sd-step-line.done { background: #10B981; }

  .sd-inner { max-width: 600px; margin: 0 auto; padding: 24px 1.5rem 0; }
  .sd-section-title { font-size: 0.95rem; font-weight: 800; color: var(--text); margin-bottom: 16px; letter-spacing: -0.01em; }

  .sd-pkg-card { background: var(--bg); border: 1.5px solid var(--border); border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 14px; margin-bottom: 12px; box-shadow: var(--shadow-sm); }
  .sd-pkg-img { width: 60px; height: 60px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border); flex-shrink: 0; }
  .sd-pkg-info { flex: 1; }
  .sd-pkg-name { font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 4px; letter-spacing: -0.01em; line-height: 1.2; }
  .sd-pkg-price { font-size: 1.05rem; font-weight: 800; color: var(--primary); letter-spacing: -0.02em; }

  .sd-upload-card { background: var(--bg); border: 1.5px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); }
  .sd-upload-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 12px; }
  .sd-upload-header h3 { font-size: 0.9rem; font-weight: 700; color: var(--text); }
  
  .sd-upload-area { background: var(--bg); border: 2px dashed #D1D5DB; border-radius: 12px; padding: 24px 20px; display: flex; flex-direction: column; align-items: center; gap: 10px; cursor: pointer; transition: all 0.2s; text-align: center; }
  .sd-upload-area:hover { border-color: var(--primary); background: #EFF6FF; }
  .sd-upload-area.has-image { border-style: solid; border-color: var(--primary); padding: 8px; }
  .sd-upload-area svg { width: 28px; height: 28px; fill: #9CA3AF; }
  .sd-upload-title { font-size: 0.85rem; font-weight: 700; color: var(--text-2); }
  .sd-upload-sub { font-size: 0.75rem; color: #6B7280; line-height: 1.5; }
  .sd-upload-preview { width: 100%; border-radius: 8px; max-height: 200px; object-fit: cover; }
  .sd-upload-change { font-size: 0.78rem; color: var(--primary); font-weight: 600; margin-top: 4px; }

  .sd-time-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
  .sd-time-btn { padding: 12px; border: 1.5px solid var(--border); border-radius: 8px; background: white; font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: 0.2s; color: var(--text-2); }
  .sd-time-btn.selected { border-color: var(--primary); background: #EFF6FF; color: var(--primary); }

  .addr-card { background: white; border: 1.5px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 12px; display: flex; gap: 12px; cursor: pointer; transition: 0.2s; }
  .addr-card.selected { border-color: var(--primary); background: #EFF6FF; }
  .addr-radio { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #D1D5DB; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
  .addr-card.selected .addr-radio { border-color: var(--primary); }
  .addr-radio-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--primary); opacity: 0; }
  .addr-card.selected .addr-radio-dot { opacity: 1; }
  .addr-info h4 { font-size: 0.9rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }
  .addr-info p { font-size: 0.8rem; color: #6B7280; line-height: 1.4; }

  .addr-input { width: 100%; padding: 14px; border: 1.5px solid var(--border); border-radius: 8px; font-family: var(--font-body); font-size: 0.9rem; resize: vertical; outline: none; margin-bottom: 12px; }
  .addr-input:focus { border-color: var(--primary); }

  .btn-add-addr { width: 100%; padding: 14px; border: 1.5px dashed var(--primary); border-radius: 8px; background: transparent; color: var(--primary); font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: 0.2s; font-family: var(--font-body); margin-bottom: 24px; }
  .btn-add-addr:hover { background: #EFF6FF; }

  .sd-summary { background: var(--bg); border: 1.5px solid var(--border); border-radius: 12px; padding: 16px 18px; margin-bottom: 24px; box-shadow: var(--shadow-sm); }
  .sd-summary-row { display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem; color: #4B5563; margin-bottom: 10px; }
  .sd-summary-divider { height: 1px; background: var(--border); margin: 12px 0; }
  .sd-summary-total { display: flex; align-items: center; justify-content: space-between; font-size: 1.1rem; font-weight: 800; color: var(--text); }

  .sd-cta { position: fixed; bottom: 0; left: 0; right: 0; background: var(--bg); border-top: 1px solid var(--border); padding: 14px 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 16px; box-shadow: 0 -4px 20px rgba(0,0,0,0.06); z-index: 40; }
  .sd-cta-info { display: flex; flex-direction: column; }
  .sd-cta-price { font-size: 1.15rem; font-weight: 800; color: var(--text); letter-spacing: -0.02em; }
  .sd-cta-label { font-size: 0.75rem; color: #6B7280; font-weight: 600; }
  .sd-cta-btn { background: var(--primary); color: white; border: none; border-radius: 8px; padding: 0.8rem 1.8rem; font-size: 0.9rem; font-weight: 700; font-family: var(--font-body); cursor: pointer; transition: background 0.2s, transform 0.2s; box-shadow: var(--shadow-primary); white-space: nowrap; }
  .sd-cta-btn:hover { background: var(--primary-dark); transform: translateY(-1px); }
  .sd-cta-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }

  .empty-cart { text-align: center; padding: 60px 20px; }
  .empty-cart svg { width: 64px; height: 64px; color: #D1D5DB; margin-bottom: 16px; }
  .empty-cart h2 { font-size: 1.2rem; font-weight: 800; color: var(--text); margin-bottom: 8px; }
  .empty-cart p { color: #6B7280; font-size: 0.9rem; margin-bottom: 24px; }
  .btn-outline { background: white; border: 2px solid var(--primary); color: var(--primary); padding: 10px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; }

  .success-screen { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 20px; text-align: center; animation: fadeIn 0.5s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .success-icon-wrap { width: 80px; height: 80px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4); animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  @keyframes popIn { 0% { transform: scale(0); } 100% { transform: scale(1); } }
  .success-icon-wrap svg { width: 40px; height: 40px; color: white; }
  .success-title { font-size: 1.5rem; font-weight: 800; color: var(--text); margin-bottom: 12px; letter-spacing: -0.02em; }
  .success-sub { font-size: 0.95rem; color: #6B7280; line-height: 1.5; max-width: 320px; margin-bottom: 32px; }
  
  .success-actions { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 300px; }
  .btn-full { width: 100%; padding: 14px; border-radius: 8px; font-weight: 700; font-size: 1rem; cursor: pointer; font-family: var(--font-body); transition: 0.2s; }
  .btn-primary-full { background: var(--primary); color: white; border: none; box-shadow: var(--shadow-primary); }
  .btn-primary-full:hover { background: var(--primary-dark); transform: translateY(-2px); }
  .btn-outline-full { background: white; border: 1.5px solid var(--border); color: var(--text-2); }
  .btn-outline-full:hover { border-color: var(--primary); color: var(--primary); }
  .btn-text-full { background: none; border: none; color: #6B7280; text-decoration: underline; font-size: 0.9rem; }
  .btn-text-full:hover { color: var(--text); }

  @media (max-width: 480px) { .sd-inner { padding: 20px 1rem 0; } }
`;function _v(){const s=Tt(),{cart:d,toggleCartItem:f,updateItemImage:c,getCartCount:m,clearCart:h}=$s(),{user:v,login:A}=Hl(),{show:j,hide:p}=Ws(),[w,y]=E.useState(1),[_,L]=E.useState(null),G=E.useRef(null),k=v?.addresses||[],[D,Y]=E.useState(k.length>0?0:null),[X,F]=E.useState(k.length===0),[Z,ue]=E.useState(""),[Se,I]=E.useState("today"),we=Object.entries(d).map(([H,V])=>({...Mv.find(ce=>ce.id===H),...V})).filter(H=>H.name),Le=m(),rt=we.reduce((H,V)=>H+V.price,0),Je=49,Me=rt+Je;E.useEffect(()=>{window.scrollTo(0,0)},[w]);const ot=H=>{L(H),G.current?.click()},Ie=H=>{const V=H.target.files[0];V&&_&&(c(_,URL.createObjectURL(V)),L(null))},Ae=()=>{if(!v){s("/login");return}w<3?y(w+1):(j(),setTimeout(()=>{p();const H={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0},V={id:`BKN-${Math.floor(1e3+Math.random()*9e3)}`,status:"pending",date:new Date().toLocaleString("en-US",H),address:k[D]||Z,services:we.map(ce=>({name:ce.name,image:ce.image,price:ce.price,issuePhoto:ce.issuePhoto})),total:Me},me=v.bookings||[];A({...v,bookings:[V,...me]}),y(4),h()},2e3))},R=()=>X?Z.trim().length>10:D!==null;return Le===0&&w!==4?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:bm}),r.jsxs("div",{className:"sd-page",children:[r.jsxs("div",{className:"sd-topbar",children:[r.jsxs("button",{className:"sd-back",onClick:()=>s("/services"),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back"]}),r.jsx("span",{className:"sd-topbar-title",children:"Checkout"}),r.jsx("div",{className:"sd-topbar-right"})]}),r.jsxs("div",{className:"empty-cart",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"9",cy:"21",r:"1"}),r.jsx("circle",{cx:"20",cy:"21",r:"1"}),r.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),r.jsx("h2",{children:"Your cart is empty"}),r.jsx("p",{children:"Looks like you haven't added any services yet."}),r.jsx("button",{className:"btn-outline",onClick:()=>s("/services"),children:"Browse Services"})]})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("style",{children:bm}),r.jsxs("div",{className:"sd-page",children:[w<4&&r.jsxs("div",{className:"sd-topbar",children:[r.jsxs("button",{className:"sd-back",onClick:()=>w===1?s(-1):y(w-1),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})," Back"]}),r.jsx("span",{className:"sd-topbar-title",children:"Checkout"}),r.jsx("div",{className:"sd-topbar-right"})]}),w<4&&r.jsxs("div",{className:"sd-steps",children:[r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${w===1?"active":"done"}`,children:w>1?"✓":"1"}),r.jsx("span",{className:`sd-step-label ${w===1?"active":"done"}`,children:"Review"})]}),r.jsx("div",{className:`sd-step-line ${w>1?"done":""}`}),r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${w===2?"active":w>2?"done":""}`,children:w>2?"✓":"2"}),r.jsx("span",{className:`sd-step-label ${w===2?"active":w>2?"done":""}`,children:"Details"})]}),r.jsx("div",{className:`sd-step-line ${w>2?"done":""}`}),r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${w===3?"active":""}`,children:"3"}),r.jsx("span",{className:`sd-step-label ${w===3?"active":""}`,children:"Pay"})]})]}),r.jsxs("div",{className:"sd-inner",children:[w===1&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sd-section-title",children:"Review your services"}),we.map(H=>r.jsxs("div",{className:"sd-pkg-card",children:[r.jsx("img",{src:H.image,alt:H.name,className:"sd-pkg-img"}),r.jsxs("div",{className:"sd-pkg-info",children:[r.jsx("div",{className:"sd-pkg-name",children:H.name}),r.jsxs("div",{className:"sd-pkg-price",children:["₹",H.price]})]}),r.jsx("button",{style:{background:"none",border:"none",color:"#EF4444",cursor:"pointer",padding:"8px",display:"flex",alignItems:"center"},onClick:()=>f(H.id),children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"3 6 5 6 21 6"}),r.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]},H.id))]}),w===2&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sd-section-title",children:"Help the Pro understand the issue"}),r.jsx("p",{style:{fontSize:"0.8rem",color:"#6B7280",marginBottom:"20px"},children:"Upload photos of the problem area. This is optional but highly recommended."}),we.map(H=>r.jsxs("div",{className:"sd-upload-card",children:[r.jsx("div",{className:"sd-upload-header",children:r.jsx("h3",{children:H.name})}),H.issuePhoto?r.jsxs("div",{className:"sd-upload-area has-image",onClick:()=>ot(H.id),children:[r.jsx("img",{src:H.issuePhoto,alt:"Issue",className:"sd-upload-preview"}),r.jsx("span",{className:"sd-upload-change",children:"Tap to change photo"})]}):r.jsxs("div",{className:"sd-upload-area",onClick:()=>ot(H.id),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"})}),r.jsxs("span",{className:"sd-upload-title",children:["Add photo for ",H.name]}),r.jsx("span",{className:"sd-upload-sub",children:"Tap to browse files or use camera"})]})]},H.id)),r.jsx("input",{type:"file",ref:G,accept:"image/*",style:{display:"none"},onChange:Ie})]}),w===3&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sd-section-title",children:"When do you need the service?"}),r.jsxs("div",{className:"sd-time-grid",children:[r.jsx("button",{className:`sd-time-btn ${Se==="today"?"selected":""}`,onClick:()=>I("today"),children:"Today, in 60 mins"}),r.jsx("button",{className:`sd-time-btn ${Se==="tomorrow"?"selected":""}`,onClick:()=>I("tomorrow"),children:"Tomorrow Morning"})]}),r.jsx("h2",{className:"sd-section-title",children:"Service Address"}),k.length>0&&!X&&r.jsxs(r.Fragment,{children:[k.map((H,V)=>r.jsxs("div",{className:`addr-card ${D===V?"selected":""}`,onClick:()=>Y(V),children:[r.jsx("div",{className:"addr-radio",children:r.jsx("div",{className:"addr-radio-dot"})}),r.jsxs("div",{className:"addr-info",children:[r.jsx("h4",{children:V===0?"Primary Address":`Saved Address ${V+1}`}),r.jsx("p",{children:H})]})]},V)),r.jsx("button",{className:"btn-add-addr",onClick:()=>{F(!0),Y(null)},children:"+ Use a different address"})]}),X&&r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("textarea",{className:"addr-input",rows:"3",placeholder:"Enter House No, Building, Area/Locality in Bikaner...",value:Z,onChange:H=>ue(H.target.value),autoFocus:!0}),k.length>0&&r.jsx("button",{style:{background:"none",border:"none",color:"var(--primary)",fontWeight:"600",cursor:"pointer",fontSize:"0.85rem"},onClick:()=>{F(!1),Y(0)},children:"Cancel & use saved address"})]}),r.jsx("h2",{className:"sd-section-title",children:"Payment Summary"}),r.jsxs("div",{className:"sd-summary",children:[r.jsxs("div",{className:"sd-summary-row",children:[r.jsxs("span",{children:["Item Total (",Le," items)"]}),r.jsxs("span",{children:["₹",rt]})]}),r.jsxs("div",{className:"sd-summary-row",children:[r.jsx("span",{children:"Trust & Safety Fee"}),r.jsxs("span",{children:["₹",Je]})]}),r.jsx("div",{className:"sd-summary-divider"}),r.jsxs("div",{className:"sd-summary-total",children:[r.jsx("span",{children:"Grand Total"}),r.jsxs("span",{style:{color:"var(--primary)"},children:["₹",Me]})]})]})]}),w===4&&r.jsxs("div",{className:"success-screen",children:[r.jsx("div",{className:"success-icon-wrap",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})})}),r.jsx("h2",{className:"success-title",children:"Booking Confirmed!"}),r.jsx("p",{className:"success-sub",children:"Your request has been placed. A verified professional will be assigned shortly."}),r.jsxs("div",{className:"success-actions",children:[r.jsx("button",{className:"btn-full btn-primary-full",onClick:()=>s("/bookings"),children:"View My Bookings"}),r.jsx("button",{className:"btn-full btn-outline-full",onClick:()=>s("/services"),children:"Book More Services"}),r.jsx("button",{className:"btn-full btn-text-full",onClick:()=>s("/"),children:"Back to Home"})]})]})]}),w<4&&r.jsxs("div",{className:"sd-cta",children:[r.jsxs("div",{className:"sd-cta-info",children:[r.jsxs("span",{className:"sd-cta-price",children:["₹",Me]}),r.jsx("span",{className:"sd-cta-label",children:"Grand Total"})]}),r.jsx("button",{className:"sd-cta-btn",onClick:Ae,disabled:w===3&&!R(),children:w===1?"Next: Add Details →":w===2?"Next: Schedule →":"Pay & Place Order"})]})]})]})}const Ys={WORKER_TERM:"Pro",SUPPORT_EMAIL:"support@nowfix.in"},Ov=`
  .mb-page { padding-top: calc(var(--navbar-height, 70px) + 30px); background: var(--bg-2, #F9FAFB); min-height: 100vh; padding-bottom: 80px; font-family: var(--font-body); }
  .mb-container { max-width: 680px; margin: 0 auto; padding: 0 1.5rem; }
  
  .mb-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
  .mb-back-btn { background: none; border: none; padding: 0; cursor: pointer; color: var(--text-2); display: flex; align-items: center; transition: 0.2s; }
  .mb-back-btn:hover { color: var(--primary); }
  .mb-title { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: var(--text); letter-spacing: -0.02em; }

  /* Tabs */
  .mb-tabs { display: flex; gap: 12px; margin-bottom: 24px; border-bottom: 1px solid var(--border); padding-bottom: 16px; }
  .mb-tab { background: white; border: 1.5px solid var(--border); padding: 10px 24px; border-radius: 30px; font-size: 0.9rem; font-weight: 600; color: var(--text-2); cursor: pointer; transition: all 0.2s; }
  .mb-tab.active { background: var(--primary); color: white; border-color: var(--primary); box-shadow: var(--shadow-sm); }

  /* Booking Cards */
  .mb-card { background: white; border: 1.5px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s; }
  .mb-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: #D1D5DB; }
  
  .mb-card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 16px; }
  .mb-id { font-size: 0.8rem; color: #6B7280; font-weight: 600; margin-bottom: 4px; }
  .mb-date { font-size: 1rem; font-weight: 800; color: var(--text); }
  
  .mb-status { font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.05em; }
  .status-assigned { background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0; }
  .status-pending { background: #FFFBEB; color: #D97706; border: 1px solid #FDE68A; }
  .status-completed { background: #EFF6FF; color: var(--primary); border: 1px solid #BFDBFE; }
  .status-cancelled { background: #FEF2F2; color: #DC2626; border: 1px solid #FECACA; }

  /* Service Items with Images */
  .mb-services { margin-bottom: 16px; }
  .mb-service-item { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .mb-service-img { width: 44px; height: 44px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border); flex-shrink: 0; background: #F3F4F6; }
  .mb-service-info { flex: 1; }
  .mb-service-name { font-size: 0.95rem; font-weight: 600; color: var(--text); line-height: 1.2; }
  .mb-service-meta { font-size: 0.8rem; color: #6B7280; margin-top: 2px; }
  
  .mb-total { font-size: 1.05rem; font-weight: 800; color: var(--text); margin-top: 16px; padding-top: 16px; border-top: 1px dashed var(--border); display: flex; justify-content: space-between; }

  .mb-actions { display: flex; gap: 12px; margin-top: 16px; }
  .mb-btn { flex: 1; padding: 12px; text-align: center; border-radius: 8px; font-size: 0.9rem; font-weight: 700; cursor: pointer; transition: 0.2s; font-family: var(--font-body); }
  .mb-btn-outline { background: white; border: 1.5px solid var(--border); color: var(--text-2); }
  .mb-btn-outline:hover { border-color: var(--primary); color: var(--primary); }
  .mb-btn-primary { background: #EFF6FF; border: 1.5px solid var(--primary); color: var(--primary); }
  .mb-btn-primary:hover { background: var(--primary); color: white; }

  /* FULL SCREEN DETAILED VIEW MODAL */
  .detail-modal-overlay { position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6); backdrop-filter: blur(4px); z-index: 1000; display: flex; justify-content: flex-end; opacity: 0; pointer-events: none; transition: 0.3s ease; }
  .detail-modal-overlay.open { opacity: 1; pointer-events: all; }
  
  .detail-modal-content { background: var(--bg-2); width: 100%; max-width: 500px; height: 100%; transform: translateX(100%); transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; flex-direction: column; box-shadow: -10px 0 25px rgba(0,0,0,0.1); }
  .detail-modal-overlay.open .detail-modal-content { transform: translateX(0); }
  
  .detail-header { background: white; padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10; }
  .detail-header h2 { font-size: 1.2rem; font-weight: 800; color: var(--text); }
  .detail-close { background: #F3F4F6; border: none; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text-2); transition: 0.2s; }
  .detail-close:hover { background: #E5E7EB; color: var(--error); }

  .detail-body { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 16px; }
  
  /* Detail Sections */
  .detail-section { background: white; border: 1px solid var(--border); border-radius: 12px; padding: 16px; box-shadow: var(--shadow-sm); }
  .detail-section h3 { font-size: 0.9rem; font-weight: 800; color: var(--text); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border); padding-bottom: 8px; }
  
  .detail-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: #4B5563; margin-bottom: 8px; }
  .detail-row strong { color: var(--text); font-weight: 600; }
  .detail-row.grand-total { font-size: 1.1rem; font-weight: 800; color: var(--text); border-top: 1px dashed var(--border); margin-top: 8px; padding-top: 12px; }
  
  /* Legal & Warranty Box */
  .legal-box { background: #F3F4F6; border: 1px dashed #D1D5DB; border-radius: 8px; padding: 16px; font-size: 0.8rem; color: #6B7280; line-height: 1.6; }
  .legal-box p { margin-bottom: 8px; }
  .legal-box p:last-child { margin-bottom: 0; }
  .legal-box strong { color: var(--text-2); }

  /* Issue Photo Grid */
  .issue-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .issue-img-wrap { position: relative; border-radius: 8px; overflow: hidden; border: 1px solid var(--border); }
  .issue-img-wrap img { width: 100%; height: 100px; object-fit: cover; display: block; }
  .issue-img-label { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.6); color: white; font-size: 0.7rem; padding: 4px 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

    /* Empty state when there are no bookings */
    .empty-state {
        background: white;
        border: 1.5px dashed var(--border);
        border-radius: 12px;
        padding: 48px 24px;
        text-align: center;
        color: #6B7280;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        box-shadow: var(--shadow-sm);
    }
    .empty-state svg {
        width: 84px;
        height: 84px;
        color: var(--primary);
        flex-shrink: 0;
    }
    .empty-state h3 { font-size: 1.15rem; font-weight: 800; color: var(--text); margin: 0; }
    .empty-state p { margin: 0; color: #6B7280; max-width: 420px; }
    .empty-state .mb-btn { margin-top: 6px; }

    @media (max-width: 480px) {
    .detail-modal-content { transform: translateY(100%); border-radius: 20px 20px 0 0; height: 95vh; margin-top: auto; }
    .detail-modal-overlay.open .detail-modal-content { transform: translateY(0); }
  }
`;function Uv(){const s=Tt(),{user:d}=Hl(),[f,c]=E.useState("upcoming"),[m,h]=E.useState(null);if(E.useEffect(()=>{window.scrollTo(0,0),d||s("/login")},[d,s]),!d)return null;const A=(d?.bookings||[]).filter(p=>f==="upcoming"?p.status==="assigned"||p.status==="pending":p.status==="completed"||p.status==="cancelled"),j=p=>p.map((w,y)=>typeof w=="string"?r.jsxs("div",{className:"mb-service-item",children:[r.jsx("div",{className:"mb-service-img",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"🔧"}),r.jsx("div",{className:"mb-service-info",children:r.jsx("div",{className:"mb-service-name",children:w})})]},y):r.jsxs("div",{className:"mb-service-item",children:[r.jsx("img",{src:w.image,alt:w.name,className:"mb-service-img"}),r.jsxs("div",{className:"mb-service-info",children:[r.jsx("div",{className:"mb-service-name",children:w.name}),r.jsxs("div",{className:"mb-service-meta",children:["Qty: ",w.qty," • ₹",w.price]})]})]},y));return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Ov}),r.jsx(dr,{}),r.jsx("div",{className:"mb-page",children:r.jsxs("div",{className:"mb-container",children:[r.jsxs("div",{className:"mb-header",children:[r.jsx("button",{className:"mb-back-btn",onClick:()=>s(-1),children:r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),r.jsx("polyline",{points:"12 19 5 12 12 5"})]})}),r.jsx("h1",{className:"mb-title",children:"My Bookings"})]}),r.jsxs("div",{className:"mb-tabs",children:[r.jsx("button",{className:`mb-tab ${f==="upcoming"?"active":""}`,onClick:()=>c("upcoming"),children:"Upcoming"}),r.jsx("button",{className:`mb-tab ${f==="past"?"active":""}`,onClick:()=>c("past"),children:"Past Bookings"})]}),r.jsx("div",{className:"mb-list",children:A.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),r.jsxs("h3",{children:["No ",f," bookings"]}),r.jsxs("p",{children:["You don't have any ",f," service requests right now."]}),r.jsx("button",{className:"mb-btn mb-btn-primary",style:{width:"auto",padding:"10px 24px"},onClick:()=>s("/services"),children:"Book a Service"})]}):A.map(p=>r.jsxs("div",{className:"mb-card",children:[r.jsxs("div",{className:"mb-card-head",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"mb-id",children:["ID: ",p.id]}),r.jsx("div",{className:"mb-date",children:p.date})]}),r.jsx("div",{className:`mb-status status-${p.status}`,children:p.status})]}),r.jsxs("div",{className:"mb-services",children:[j(p.services),r.jsxs("div",{className:"mb-total",children:[r.jsx("span",{children:"Total Amount"}),r.jsxs("span",{children:["₹",p.total]})]})]}),p.status==="pending"&&r.jsxs("div",{style:{background:"#FFFBEB",color:"#D97706",padding:"12px",borderRadius:"8px",fontSize:"0.85rem",fontWeight:"600",textAlign:"center",border:"1px solid #FDE68A"},children:["⏳ Finding the best ",Ys.WORKER_TERM," near you..."]}),r.jsxs("div",{className:"mb-actions",children:[r.jsx("button",{className:"mb-btn mb-btn-outline",onClick:()=>alert("Redirecting to WhatsApp support..."),children:"Support"}),r.jsx("button",{className:"mb-btn mb-btn-primary",onClick:()=>h(p),children:"View Details"})]})]},p.id))})]})}),r.jsx("div",{className:`detail-modal-overlay ${m?"open":""}`,onClick:()=>h(null),children:r.jsxs("div",{className:"detail-modal-content",onClick:p=>p.stopPropagation(),children:[r.jsxs("div",{className:"detail-header",children:[r.jsx("h2",{children:"Booking Summary"}),r.jsx("button",{className:"detail-close",onClick:()=>h(null),children:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),m&&r.jsxs("div",{className:"detail-body",children:[r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Order Status"}),r.jsxs("div",{className:"detail-row",children:[r.jsx("strong",{children:"Booking ID:"})," ",r.jsx("span",{children:m.id})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("strong",{children:"Date & Time:"})," ",r.jsx("span",{children:m.date})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("strong",{children:"Service Address:"}),r.jsx("span",{style:{textAlign:"right",maxWidth:"60%"},children:m.address})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("strong",{children:"Current Status:"}),r.jsx("span",{className:`mb-status status-${m.status}`,style:{fontSize:"0.65rem"},children:m.status})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Services Booked"}),r.jsx("div",{className:"mb-services",style:{marginBottom:0},children:j(m.services)})]}),m.services.some(p=>p.issuePhoto)&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Issue Photos Provided"}),r.jsx("div",{className:"issue-grid",children:m.services.filter(p=>p.issuePhoto).map((p,w)=>r.jsxs("div",{className:"issue-img-wrap",children:[r.jsx("img",{src:p.issuePhoto,alt:"Issue"}),r.jsx("div",{className:"issue-img-label",children:p.name})]},w))})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Payment Details"}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{children:"Item Total"})," ",r.jsxs("span",{children:["₹",m.total-49]})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{children:"Trust & Safety Fee"})," ",r.jsx("span",{children:"₹49"})]}),r.jsxs("div",{className:"detail-row grand-total",children:[r.jsx("span",{children:"Amount Paid"})," ",r.jsxs("span",{style:{color:"var(--primary)"},children:["₹",m.total]})]}),r.jsxs("div",{className:"detail-row",style:{marginTop:"8px",fontSize:"0.8rem"},children:[r.jsx("span",{children:"Payment Mode"})," ",r.jsx("strong",{children:"Pay after service"})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Safety, Terms & Warranty"}),r.jsxs("div",{className:"legal-box",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"30-Day Warranty:"})," Covers rework for the same issue. Does not cover new parts or physical damage post-service."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Cancellation:"})," Free cancellation up to 2 hours before the scheduled time. A fee of ₹99 applies thereafter."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Safety Promise:"})," All our ",Ys.WORKER_TERM,"s undergo background checks. Please ask for their NowFix ID upon arrival."]}),r.jsxs("p",{style:{marginTop:"12px",borderTop:"1px solid #D1D5DB",paddingTop:"12px"},children:["Need help? Email us at ",r.jsx("strong",{style:{color:"var(--primary)"},children:Ys.SUPPORT_EMAIL})]})]})]})]})]})})]})}function Hv(){return r.jsx(Ig,{children:r.jsx(Fg,{children:r.jsxs(xg,{children:[r.jsx(na,{path:"/",element:r.jsx(gv,{})}),r.jsx(na,{path:"/services",element:r.jsx(Dv,{})}),r.jsx(na,{path:"/checkout",element:r.jsx(_v,{})}),r.jsx(na,{path:"/bookings",element:r.jsx(Uv,{})})," ",r.jsx(na,{path:"/login",element:r.jsx(jv,{})}),r.jsx(na,{path:"/join",element:r.jsx(Ev,{})}),r.jsx(na,{path:"/service/:id",element:r.jsx(Av,{})}),r.jsx(na,{path:"/profile",element:r.jsx(Bv,{})})]})})})}y0.createRoot(document.getElementById("root")).render(r.jsx(E.StrictMode,{children:r.jsx(bv,{children:r.jsx(tv,{children:r.jsx(Hv,{})})})}));
