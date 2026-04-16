(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function f(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(p){if(p.ep)return;p.ep=!0;const m=f(p);fetch(p.href,m)}})();var Ls={exports:{}},Gl={};var sp;function y0(){if(sp)return Gl;sp=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function f(c,p,m){var g=null;if(m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),"key"in p){m={};for(var N in p)N!=="key"&&(m[N]=p[N])}else m=p;return p=m.ref,{$$typeof:o,type:c,key:g,ref:p!==void 0?p:null,props:m}}return Gl.Fragment=u,Gl.jsx=f,Gl.jsxs=f,Gl}var cp;function j0(){return cp||(cp=1,Ls.exports=y0()),Ls.exports}var r=j0(),Ys={exports:{}},ae={};var up;function w0(){if(up)return ae;up=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),_=Symbol.iterator;function L(j){return j===null||typeof j!="object"?null:(j=_&&j[_]||j["@@iterator"],typeof j=="function"?j:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,M={};function Y(j,O,q){this.props=j,this.context=O,this.refs=M,this.updater=q||G}Y.prototype.isReactComponent={},Y.prototype.setState=function(j,O){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,O,"setState")},Y.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function F(){}F.prototype=Y.prototype;function X(j,O,q){this.props=j,this.context=O,this.refs=M,this.updater=q||G}var Q=X.prototype=new F;Q.constructor=X,B(Q,Y.prototype),Q.isPureReactComponent=!0;var fe=Array.isArray;function ve(){}var P={H:null,A:null,T:null,S:null},be=Object.prototype.hasOwnProperty;function Me(j,O,q){var V=q.ref;return{$$typeof:o,type:j,key:O,ref:V!==void 0?V:null,props:q}}function nt(j,O){return Me(j.type,O,j.props)}function Ue(j){return typeof j=="object"&&j!==null&&j.$$typeof===o}function De(j){var O={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(q){return O[q]})}var $e=/\/+/g;function Ve(j,O){return typeof j=="object"&&j!==null&&j.key!=null?De(""+j.key):O.toString(36)}function Ne(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(ve,ve):(j.status="pending",j.then(function(O){j.status==="pending"&&(j.status="fulfilled",j.value=O)},function(O){j.status==="pending"&&(j.status="rejected",j.reason=O)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function k(j,O,q,V,ee){var re=typeof j;(re==="undefined"||re==="boolean")&&(j=null);var $=!1;if(j===null)$=!0;else switch(re){case"bigint":case"string":case"number":$=!0;break;case"object":switch(j.$$typeof){case o:case u:$=!0;break;case E:return $=j._init,k($(j._payload),O,q,V,ee)}}if($)return ee=ee(j),$=V===""?"."+Ve(j,0):V,fe(ee)?(q="",$!=null&&(q=$.replace($e,"$&/")+"/"),k(ee,O,q,"",function(ke){return ke})):ee!=null&&(Ue(ee)&&(ee=nt(ee,q+(ee.key==null||j&&j.key===ee.key?"":(""+ee.key).replace($e,"$&/")+"/")+$)),O.push(ee)),1;$=0;var te=V===""?".":V+":";if(fe(j))for(var ne=0;ne<j.length;ne++)V=j[ne],re=te+Ve(V,ne),$+=k(V,O,q,re,ee);else if(ne=L(j),typeof ne=="function")for(j=ne.call(j),ne=0;!(V=j.next()).done;)V=V.value,re=te+Ve(V,ne++),$+=k(V,O,q,re,ee);else if(re==="object"){if(typeof j.then=="function")return k(Ne(j),O,q,V,ee);throw O=String(j),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return $}function H(j,O,q){if(j==null)return j;var V=[],ee=0;return k(j,V,"","",function(re){return O.call(q,re,ee++)}),V}function Z(j){if(j._status===-1){var O=j._result;O=O(),O.then(function(q){(j._status===0||j._status===-1)&&(j._status=1,j._result=q)},function(q){(j._status===0||j._status===-1)&&(j._status=2,j._result=q)}),j._status===-1&&(j._status=0,j._result=O)}if(j._status===1)return j._result.default;throw j._result}var me=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},oe={map:H,forEach:function(j,O,q){H(j,function(){O.apply(this,arguments)},q)},count:function(j){var O=0;return H(j,function(){O++}),O},toArray:function(j){return H(j,function(O){return O})||[]},only:function(j){if(!Ue(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ae.Activity=y,ae.Children=oe,ae.Component=Y,ae.Fragment=f,ae.Profiler=p,ae.PureComponent=X,ae.StrictMode=c,ae.Suspense=b,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ae.__COMPILER_RUNTIME={__proto__:null,c:function(j){return P.H.useMemoCache(j)}},ae.cache=function(j){return function(){return j.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(j,O,q){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var V=B({},j.props),ee=j.key;if(O!=null)for(re in O.key!==void 0&&(ee=""+O.key),O)!be.call(O,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&O.ref===void 0||(V[re]=O[re]);var re=arguments.length-2;if(re===1)V.children=q;else if(1<re){for(var $=Array(re),te=0;te<re;te++)$[te]=arguments[te+2];V.children=$}return Me(j.type,ee,V)},ae.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},ae.createElement=function(j,O,q){var V,ee={},re=null;if(O!=null)for(V in O.key!==void 0&&(re=""+O.key),O)be.call(O,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=O[V]);var $=arguments.length-2;if($===1)ee.children=q;else if(1<$){for(var te=Array($),ne=0;ne<$;ne++)te[ne]=arguments[ne+2];ee.children=te}if(j&&j.defaultProps)for(V in $=j.defaultProps,$)ee[V]===void 0&&(ee[V]=$[V]);return Me(j,re,ee)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(j){return{$$typeof:N,render:j}},ae.isValidElement=Ue,ae.lazy=function(j){return{$$typeof:E,_payload:{_status:-1,_result:j},_init:Z}},ae.memo=function(j,O){return{$$typeof:h,type:j,compare:O===void 0?null:O}},ae.startTransition=function(j){var O=P.T,q={};P.T=q;try{var V=j(),ee=P.S;ee!==null&&ee(q,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ve,me)}catch(re){me(re)}finally{O!==null&&q.types!==null&&(O.types=q.types),P.T=O}},ae.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ae.use=function(j){return P.H.use(j)},ae.useActionState=function(j,O,q){return P.H.useActionState(j,O,q)},ae.useCallback=function(j,O){return P.H.useCallback(j,O)},ae.useContext=function(j){return P.H.useContext(j)},ae.useDebugValue=function(){},ae.useDeferredValue=function(j,O){return P.H.useDeferredValue(j,O)},ae.useEffect=function(j,O){return P.H.useEffect(j,O)},ae.useEffectEvent=function(j){return P.H.useEffectEvent(j)},ae.useId=function(){return P.H.useId()},ae.useImperativeHandle=function(j,O,q){return P.H.useImperativeHandle(j,O,q)},ae.useInsertionEffect=function(j,O){return P.H.useInsertionEffect(j,O)},ae.useLayoutEffect=function(j,O){return P.H.useLayoutEffect(j,O)},ae.useMemo=function(j,O){return P.H.useMemo(j,O)},ae.useOptimistic=function(j,O){return P.H.useOptimistic(j,O)},ae.useReducer=function(j,O,q){return P.H.useReducer(j,O,q)},ae.useRef=function(j){return P.H.useRef(j)},ae.useState=function(j){return P.H.useState(j)},ae.useSyncExternalStore=function(j,O,q){return P.H.useSyncExternalStore(j,O,q)},ae.useTransition=function(){return P.H.useTransition()},ae.version="19.2.4",ae}var dp;function Ps(){return dp||(dp=1,Ys.exports=w0()),Ys.exports}var w=Ps(),qs={exports:{}},Xl={},Fs={exports:{}},Gs={};var fp;function S0(){return fp||(fp=1,(function(o){function u(k,H){var Z=k.length;k.push(H);e:for(;0<Z;){var me=Z-1>>>1,oe=k[me];if(0<p(oe,H))k[me]=H,k[Z]=oe,Z=me;else break e}}function f(k){return k.length===0?null:k[0]}function c(k){if(k.length===0)return null;var H=k[0],Z=k.pop();if(Z!==H){k[0]=Z;e:for(var me=0,oe=k.length,j=oe>>>1;me<j;){var O=2*(me+1)-1,q=k[O],V=O+1,ee=k[V];if(0>p(q,Z))V<oe&&0>p(ee,q)?(k[me]=ee,k[V]=Z,me=V):(k[me]=q,k[O]=Z,me=O);else if(V<oe&&0>p(ee,Z))k[me]=ee,k[V]=Z,me=V;else break e}}return H}function p(k,H){var Z=k.sortIndex-H.sortIndex;return Z!==0?Z:k.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var g=Date,N=g.now();o.unstable_now=function(){return g.now()-N}}var b=[],h=[],E=1,y=null,_=3,L=!1,G=!1,B=!1,M=!1,Y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function Q(k){for(var H=f(h);H!==null;){if(H.callback===null)c(h);else if(H.startTime<=k)c(h),H.sortIndex=H.expirationTime,u(b,H);else break;H=f(h)}}function fe(k){if(B=!1,Q(k),!G)if(f(b)!==null)G=!0,ve||(ve=!0,De());else{var H=f(h);H!==null&&Ne(fe,H.startTime-k)}}var ve=!1,P=-1,be=5,Me=-1;function nt(){return M?!0:!(o.unstable_now()-Me<be)}function Ue(){if(M=!1,ve){var k=o.unstable_now();Me=k;var H=!0;try{e:{G=!1,B&&(B=!1,F(P),P=-1),L=!0;var Z=_;try{t:{for(Q(k),y=f(b);y!==null&&!(y.expirationTime>k&&nt());){var me=y.callback;if(typeof me=="function"){y.callback=null,_=y.priorityLevel;var oe=me(y.expirationTime<=k);if(k=o.unstable_now(),typeof oe=="function"){y.callback=oe,Q(k),H=!0;break t}y===f(b)&&c(b),Q(k)}else c(b);y=f(b)}if(y!==null)H=!0;else{var j=f(h);j!==null&&Ne(fe,j.startTime-k),H=!1}}break e}finally{y=null,_=Z,L=!1}H=void 0}}finally{H?De():ve=!1}}}var De;if(typeof X=="function")De=function(){X(Ue)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ve=$e.port2;$e.port1.onmessage=Ue,De=function(){Ve.postMessage(null)}}else De=function(){Y(Ue,0)};function Ne(k,H){P=Y(function(){k(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(k){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var Z=_;_=H;try{return k()}finally{_=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,H){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Z=_;_=k;try{return H()}finally{_=Z}},o.unstable_scheduleCallback=function(k,H,Z){var me=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,k){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Z+oe,k={id:E++,callback:H,priorityLevel:k,startTime:Z,expirationTime:oe,sortIndex:-1},Z>me?(k.sortIndex=Z,u(h,k),f(b)===null&&k===f(h)&&(B?(F(P),P=-1):B=!0,Ne(fe,Z-me))):(k.sortIndex=oe,u(b,k),G||L||(G=!0,ve||(ve=!0,De()))),k},o.unstable_shouldYield=nt,o.unstable_wrapCallback=function(k){var H=_;return function(){var Z=_;_=H;try{return k.apply(this,arguments)}finally{_=Z}}}})(Gs)),Gs}var pp;function E0(){return pp||(pp=1,Fs.exports=S0()),Fs.exports}var Xs={exports:{}},lt={};var mp;function N0(){if(mp)return lt;mp=1;var o=Ps();function u(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)h+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(u(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},p=Symbol.for("react.portal");function m(b,h,E){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:y==null?null:""+y,children:b,containerInfo:h,implementation:E}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,lt.createPortal=function(b,h){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(u(299));return m(b,h,null,E)},lt.flushSync=function(b){var h=g.T,E=c.p;try{if(g.T=null,c.p=2,b)return b()}finally{g.T=h,c.p=E,c.d.f()}},lt.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(b,h))},lt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},lt.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var E=h.as,y=N(E,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,L=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;E==="style"?c.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:L}):E==="script"&&c.d.X(b,{crossOrigin:y,integrity:_,fetchPriority:L,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},lt.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var E=N(h.as,h.crossOrigin);c.d.M(b,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(b)},lt.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var E=h.as,y=N(E,h.crossOrigin);c.d.L(b,E,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},lt.preloadModule=function(b,h){if(typeof b=="string")if(h){var E=N(h.as,h.crossOrigin);c.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(b)},lt.requestFormReset=function(b){c.d.r(b)},lt.unstable_batchedUpdates=function(b,h){return b(h)},lt.useFormState=function(b,h,E){return g.H.useFormState(b,h,E)},lt.useFormStatus=function(){return g.H.useHostTransitionStatus()},lt.version="19.2.4",lt}var hp;function z0(){if(hp)return Xs.exports;hp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Xs.exports=N0(),Xs.exports}var gp;function C0(){if(gp)return Xl;gp=1;var o=E0(),u=Ps(),f=z0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return b(l),e;if(i===n)return b(l),t;i=i.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=i;else{for(var s=!1,d=l.child;d;){if(d===a){s=!0,a=l,n=i;break}if(d===n){s=!0,n=l,a=i;break}d=d.sibling}if(!s){for(d=i.child;d;){if(d===a){s=!0,a=i,n=l;break}if(d===n){s=!0,n=i,a=l;break}d=d.sibling}if(!s)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,_=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),X=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),Me=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),Ue=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=Ue&&e[Ue]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Symbol.for("react.client.reference");function Ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case Y:return"Profiler";case M:return"StrictMode";case fe:return"Suspense";case ve:return"SuspenseList";case Me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case X:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:Ve(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return Ve(e(t))}catch{}}return null}var Ne=Array.isArray,k=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},me=[],oe=-1;function j(e){return{current:e}}function O(e){0>oe||(e.current=me[oe],me[oe]=null,oe--)}function q(e,t){oe++,me[oe]=e.current,e.current=t}var V=j(null),ee=j(null),re=j(null),$=j(null);function te(e,t){switch(q(re,t),q(ee,e),q(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Bf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Bf(t),e=Rf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(V),q(V,e)}function ne(){O(V),O(ee),O(re)}function ke(e){e.memoizedState!==null&&q($,e);var t=V.current,a=Rf(t,e.type);t!==a&&(q(ee,e),q(V,a))}function We(e){ee.current===e&&(O(V),O(ee)),$.current===e&&(O($),Ll._currentValue=Z)}var Xe,Kt;function rt(e){if(Xe===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Xe=t&&t[1]||"",Kt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xe+e+Kt}var Qe=!1;function ma(e,t){if(!e||Qe)return"";Qe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(A){var T=A}Reflect.construct(e,[],U)}else{try{U.call()}catch(A){T=A}e.call(U.prototype)}}else{try{throw Error()}catch(A){T=A}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),s=i[0],d=i[1];if(s&&d){var x=s.split(`
`),C=d.split(`
`);for(l=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(n===x.length||l===C.length)for(n=x.length-1,l=C.length-1;1<=n&&0<=l&&x[n]!==C[l];)l--;for(;1<=n&&0<=l;n--,l--)if(x[n]!==C[l]){if(n!==1||l!==1)do if(n--,l--,0>l||x[n]!==C[l]){var R=`
`+x[n].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=n&&0<=l);break}}}finally{Qe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?rt(a):""}function Jn(e,t){switch(e.tag){case 26:case 27:case 5:return rt(e.type);case 16:return rt("Lazy");case 13:return e.child!==t&&t!==null?rt("Suspense Fallback"):rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return ma(e.type,!1);case 11:return ma(e.type.render,!1);case 1:return ma(e.type,!0);case 31:return rt("Activity");default:return""}}function Il(e){try{var t="",a=null;do t+=Jn(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Yt=Object.prototype.hasOwnProperty,ha=o.unstable_scheduleCallback,$n=o.unstable_cancelCallback,Ip=o.unstable_shouldYield,Pp=o.unstable_requestPaint,ht=o.unstable_now,em=o.unstable_getCurrentPriorityLevel,sc=o.unstable_ImmediatePriority,cc=o.unstable_UserBlockingPriority,Pl=o.unstable_NormalPriority,tm=o.unstable_LowPriority,uc=o.unstable_IdlePriority,am=o.log,nm=o.unstable_setDisableYieldValue,Wn=null,gt=null;function ga(e){if(typeof am=="function"&&nm(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Wn,e)}catch{}}var xt=Math.clz32?Math.clz32:rm,lm=Math.log,im=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(lm(e)/im|0)|0}var ei=256,ti=262144,ai=4194304;function Fa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ni(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var d=n&134217727;return d!==0?(n=d&~i,n!==0?l=Fa(n):(s&=d,s!==0?l=Fa(s):a||(a=d&~e,a!==0&&(l=Fa(a))))):(d=n&~i,d!==0?l=Fa(d):s!==0?l=Fa(s):a||(a=n&~e,a!==0&&(l=Fa(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function In(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function om(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dc(){var e=ai;return ai<<=1,(ai&62914560)===0&&(ai=4194304),e}function zr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Pn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sm(e,t,a,n,l,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,x=e.expirationTimes,C=e.hiddenUpdates;for(a=s&~a;0<a;){var R=31-xt(a),U=1<<R;d[R]=0,x[R]=-1;var T=C[R];if(T!==null)for(C[R]=null,R=0;R<T.length;R++){var A=T[R];A!==null&&(A.lane&=-536870913)}a&=~U}n!==0&&fc(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function fc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-xt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function pc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-xt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function mc(e,t){var a=t&-t;return a=(a&42)!==0?1:Cr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Cr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hc(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:tp(e.type))}function gc(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var xa=Math.random().toString(36).slice(2),Ie="__reactFiber$"+xa,ot="__reactProps$"+xa,sn="__reactContainer$"+xa,Ar="__reactEvents$"+xa,cm="__reactListeners$"+xa,um="__reactHandles$"+xa,xc="__reactResources$"+xa,el="__reactMarker$"+xa;function kr(e){delete e[Ie],delete e[ot],delete e[Ar],delete e[cm],delete e[um]}function cn(e){var t=e[Ie];if(t)return t;for(var a=e.parentNode;a;){if(t=a[sn]||a[Ie]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Lf(e);e!==null;){if(a=e[Ie])return a;e=Lf(e)}return t}e=a,a=e.parentNode}return null}function un(e){if(e=e[Ie]||e[sn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function tl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function dn(e){var t=e[xc];return t||(t=e[xc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[el]=!0}var vc=new Set,bc={};function Ga(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(bc[e]=t,e=0;e<t.length;e++)vc.add(t[e])}var dm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yc={},jc={};function fm(e){return Yt.call(jc,e)?!0:Yt.call(yc,e)?!1:dm.test(e)?jc[e]=!0:(yc[e]=!0,!1)}function li(e,t,a){if(fm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ii(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Jt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){if(!e._valueTracker){var t=wc(e)?"checked":"value";e._valueTracker=pm(e,t,""+e[t])}}function Sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=wc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mm=/[\n"\\]/g;function zt(e){return e.replace(mm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Rr(e,t,a,n,l,i,s,d){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Mr(e,s,Nt(t)):a!=null?Mr(e,s,Nt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Nt(d):e.removeAttribute("name")}function Ec(e,t,a,n,l,i,s,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Br(e);return}a=a!=null?""+Nt(a):"",t=t!=null?""+Nt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=d?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Br(e)}function Mr(e,t,a){t==="number"&&ri(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Nt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Nc(e,t,a){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Nt(a):""}function zc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Ne(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Nt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Br(e)}function mn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var hm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||hm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Tc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Cc(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&Cc(e,i,t[i])}function Dr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(e){return xm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var _r=null;function Or(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hn=null,gn=null;function Ac(e){var t=un(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Rr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[ot]||null;if(!l)throw Error(c(90));Rr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Sc(n)}break e;case"textarea":Nc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&pn(e,!!a.multiple,t,!1)}}}var Ur=!1;function kc(e,t,a){if(Ur)return e(t,a);Ur=!0;try{var n=e(t);return n}finally{if(Ur=!1,(hn!==null||gn!==null)&&(Ki(),hn&&(t=hn,e=gn,gn=hn=null,Ac(t),e)))for(t=0;t<e.length;t++)Ac(e[t])}}function al(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ot]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=!1;if(Wt)try{var nl={};Object.defineProperty(nl,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch{Hr=!1}var va=null,Lr=null,si=null;function Bc(){if(si)return si;var e,t=Lr,a=t.length,n,l="value"in va?va.value:va.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[i-n];n++);return si=l.slice(e,1<n?1-n:void 0)}function ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Rc(){return!1}function st(e){function t(a,n,l,i,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ui:Rc,this.isPropagationStopped=Rc,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},di=st(Xa),ll=y({},Xa,{view:0,detail:0}),vm=st(ll),Yr,qr,il,fi=y({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(Yr=e.screenX-il.screenX,qr=e.screenY-il.screenY):qr=Yr=0,il=e),Yr)},movementY:function(e){return"movementY"in e?e.movementY:qr}}),Mc=st(fi),bm=y({},fi,{dataTransfer:0}),ym=st(bm),jm=y({},ll,{relatedTarget:0}),Fr=st(jm),wm=y({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Sm=st(wm),Em=y({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nm=st(Em),zm=y({},Xa,{data:0}),Dc=st(zm),Cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Am[e])?!!t[e]:!1}function Gr(){return km}var Bm=y({},ll,{key:function(e){if(e.key){var t=Cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gr,charCode:function(e){return e.type==="keypress"?ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rm=st(Bm),Mm=y({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_c=st(Mm),Dm=y({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gr}),_m=st(Dm),Om=y({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Um=st(Om),Hm=y({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lm=st(Hm),Ym=y({},Xa,{newState:0,oldState:0}),qm=st(Ym),Fm=[9,13,27,32],Xr=Wt&&"CompositionEvent"in window,rl=null;Wt&&"documentMode"in document&&(rl=document.documentMode);var Gm=Wt&&"TextEvent"in window&&!rl,Oc=Wt&&(!Xr||rl&&8<rl&&11>=rl),Uc=" ",Hc=!1;function Lc(e,t){switch(e){case"keyup":return Fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Xm(e,t){switch(e){case"compositionend":return Yc(t);case"keypress":return t.which!==32?null:(Hc=!0,Uc);case"textInput":return e=t.data,e===Uc&&Hc?null:e;default:return null}}function Qm(e,t){if(xn)return e==="compositionend"||!Xr&&Lc(e,t)?(e=Bc(),si=Lr=va=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oc&&t.locale!=="ko"?null:t.data;default:return null}}var Zm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zm[e.type]:t==="textarea"}function Fc(e,t,a,n){hn?gn?gn.push(n):gn=[n]:hn=n,t=tr(t,"onChange"),0<t.length&&(a=new di("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var ol=null,sl=null;function Vm(e){Nf(e,0)}function pi(e){var t=tl(e);if(Sc(t))return e}function Gc(e,t){if(e==="change")return t}var Xc=!1;if(Wt){var Qr;if(Wt){var Zr="oninput"in document;if(!Zr){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Zr=typeof Qc.oninput=="function"}Qr=Zr}else Qr=!1;Xc=Qr&&(!document.documentMode||9<document.documentMode)}function Zc(){ol&&(ol.detachEvent("onpropertychange",Vc),sl=ol=null)}function Vc(e){if(e.propertyName==="value"&&pi(sl)){var t=[];Fc(t,sl,e,Or(e)),kc(Vm,t)}}function Km(e,t,a){e==="focusin"?(Zc(),ol=t,sl=a,ol.attachEvent("onpropertychange",Vc)):e==="focusout"&&Zc()}function Jm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(sl)}function $m(e,t){if(e==="click")return pi(t)}function Wm(e,t){if(e==="input"||e==="change")return pi(t)}function Im(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Im;function cl(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Yt.call(t,l)||!vt(e[l],t[l]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jc(e,t){var a=Kc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kc(a)}}function $c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ri(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ri(e.document)}return t}function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Pm=Wt&&"documentMode"in document&&11>=document.documentMode,vn=null,Kr=null,ul=null,Jr=!1;function Ic(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jr||vn==null||vn!==ri(n)||(n=vn,"selectionStart"in n&&Vr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ul&&cl(ul,n)||(ul=n,n=tr(Kr,"onSelect"),0<n.length&&(t=new di("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=vn)))}function Qa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var bn={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},$r={},Pc={};Wt&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Za(e){if($r[e])return $r[e];if(!bn[e])return e;var t=bn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Pc)return $r[e]=t[a];return e}var eu=Za("animationend"),tu=Za("animationiteration"),au=Za("animationstart"),eh=Za("transitionrun"),th=Za("transitionstart"),ah=Za("transitioncancel"),nu=Za("transitionend"),lu=new Map,Wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wr.push("scrollEnd");function Ot(e,t){lu.set(e,t),Ga(t,[e])}var mi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],yn=0,Ir=0;function hi(){for(var e=yn,t=Ir=yn=0;t<e;){var a=Ct[t];Ct[t++]=null;var n=Ct[t];Ct[t++]=null;var l=Ct[t];Ct[t++]=null;var i=Ct[t];if(Ct[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}i!==0&&iu(a,l,i)}}function gi(e,t,a,n){Ct[yn++]=e,Ct[yn++]=t,Ct[yn++]=a,Ct[yn++]=n,Ir|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Pr(e,t,a,n){return gi(e,t,a,n),xi(e)}function Va(e,t){return gi(e,null,null,t),xi(e)}function iu(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-xt(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function xi(e){if(50<Rl)throw Rl=0,cs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var jn={};function nh(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,n){return new nh(e,t,a,n)}function eo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function It(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ru(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,a,n,l,i){var s=0;if(n=e,typeof e=="function")eo(e)&&(s=1);else if(typeof e=="string")s=s0(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Me:return e=bt(31,a,t,l),e.elementType=Me,e.lanes=i,e;case B:return Ka(a.children,l,i,t);case M:s=8,l|=24;break;case Y:return e=bt(12,a,t,l|2),e.elementType=Y,e.lanes=i,e;case fe:return e=bt(13,a,t,l),e.elementType=fe,e.lanes=i,e;case ve:return e=bt(19,a,t,l),e.elementType=ve,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:s=10;break e;case F:s=9;break e;case Q:s=11;break e;case P:s=14;break e;case be:s=16,n=null;break e}s=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=bt(s,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Ka(e,t,a,n){return e=bt(7,e,n,t),e.lanes=a,e}function to(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function ou(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function ao(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var su=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var a=su.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Il(t)},su.set(e,t),t)}return{value:e,source:t,stack:Il(t)}}var wn=[],Sn=0,bi=null,dl=0,At=[],kt=0,ba=null,qt=1,Ft="";function Pt(e,t){wn[Sn++]=dl,wn[Sn++]=bi,bi=e,dl=t}function cu(e,t,a){At[kt++]=qt,At[kt++]=Ft,At[kt++]=ba,ba=e;var n=qt;e=Ft;var l=32-xt(n)-1;n&=~(1<<l),a+=1;var i=32-xt(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,qt=1<<32-xt(t)+l|a<<l|n,Ft=i+e}else qt=1<<i|a<<l|n,Ft=e}function no(e){e.return!==null&&(Pt(e,1),cu(e,1,0))}function lo(e){for(;e===bi;)bi=wn[--Sn],wn[Sn]=null,dl=wn[--Sn],wn[Sn]=null;for(;e===ba;)ba=At[--kt],At[kt]=null,Ft=At[--kt],At[kt]=null,qt=At[--kt],At[kt]=null}function uu(e,t){At[kt++]=qt,At[kt++]=Ft,At[kt++]=ba,qt=t.id,Ft=t.overflow,ba=e}var Pe=null,Ce=null,pe=!1,ya=null,Bt=!1,io=Error(c(519));function ja(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fl(Tt(t,e)),io}function du(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ie]=e,t[ot]=n,a){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(a=0;a<Dl.length;a++)ce(Dl[a],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),Ec(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),zc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Af(t.textContent,a)?(n.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),n.onScroll!=null&&ce("scroll",t),n.onScrollEnd!=null&&ce("scrollend",t),n.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||ja(e,!0)}function fu(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:Pe=Pe.return}}function En(e){if(e!==Pe)return!1;if(!pe)return fu(e),pe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Es(e.type,e.memoizedProps)),a=!a),a&&Ce&&ja(e),fu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ce=Hf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ce=Hf(e)}else t===27?(t=Ce,_a(e.type)?(e=As,As=null,Ce=e):Ce=t):Ce=Pe?Mt(e.stateNode.nextSibling):null;return!0}function Ja(){Ce=Pe=null,pe=!1}function ro(){var e=ya;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),ya=null),e}function fl(e){ya===null?ya=[e]:ya.push(e)}var oo=j(null),$a=null,ea=null;function wa(e,t,a){q(oo,t._currentValue),t._currentValue=a}function ta(e){e._currentValue=oo.current,O(oo)}function so(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function co(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=l;for(var x=0;x<t.length;x++)if(d.context===t[x]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),so(i.return,a,e),n||(s=null);break e}i=d.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(c(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),so(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Nn(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var d=l.type;vt(l.pendingProps.value,s.value)||(e!==null?e.push(d):e=[d])}}else if(l===$.current){if(s=l.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ll):e=[Ll])}l=l.return}e!==null&&co(t,e,a,n),t.flags|=262144}function yi(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wa(e){$a=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return pu($a,e)}function ji(e,t){return $a===null&&Wa(e),pu(e,t)}function pu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(c(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return a}var lh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ih=o.unstable_scheduleCallback,rh=o.unstable_NormalPriority,Ye={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uo(){return{controller:new lh,data:new Map,refCount:0}}function pl(e){e.refCount--,e.refCount===0&&ih(rh,function(){e.controller.abort()})}var ml=null,fo=0,zn=0,Cn=null;function oh(e,t){if(ml===null){var a=ml=[];fo=0,zn=hs(),Cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return fo++,t.then(mu,mu),t}function mu(){if(--fo===0&&ml!==null){Cn!==null&&(Cn.status="fulfilled");var e=ml;ml=null,zn=0,Cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var hu=k.S;k.S=function(e,t){Id=ht(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&oh(e,t),hu!==null&&hu(e,t)};var Ia=j(null);function po(){var e=Ia.current;return e!==null?e:ze.pooledCache}function wi(e,t){t===null?q(Ia,Ia.current):q(Ia,t.pool)}function gu(){var e=po();return e===null?null:{parent:Ye._currentValue,pool:e}}var Tn=Error(c(460)),mo=Error(c(474)),Si=Error(c(542)),Ei={then:function(){}};function xu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($t,$t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yu(e),e;default:if(typeof t.status=="string")t.then($t,$t);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yu(e),e}throw en=t,Tn}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(en=a,Tn):a}}var en=null;function bu(){if(en===null)throw Error(c(459));var e=en;return en=null,e}function yu(e){if(e===Tn||e===Si)throw Error(c(483))}var An=null,hl=0;function Ni(e){var t=hl;return hl+=1,An===null&&(An=[]),vu(An,e,t)}function gl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zi(e,t){throw t.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ju(e){function t(S,v){if(e){var z=S.deletions;z===null?(S.deletions=[v],S.flags|=16):z.push(v)}}function a(S,v){if(!e)return null;for(;v!==null;)t(S,v),v=v.sibling;return null}function n(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function l(S,v){return S=It(S,v),S.index=0,S.sibling=null,S}function i(S,v,z){return S.index=z,e?(z=S.alternate,z!==null?(z=z.index,z<v?(S.flags|=67108866,v):z):(S.flags|=67108866,v)):(S.flags|=1048576,v)}function s(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function d(S,v,z,D){return v===null||v.tag!==6?(v=to(z,S.mode,D),v.return=S,v):(v=l(v,z),v.return=S,v)}function x(S,v,z,D){var W=z.type;return W===B?R(S,v,z.props.children,D,z.key):v!==null&&(v.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===be&&Pa(W)===v.type)?(v=l(v,z.props),gl(v,z),v.return=S,v):(v=vi(z.type,z.key,z.props,null,S.mode,D),gl(v,z),v.return=S,v)}function C(S,v,z,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==z.containerInfo||v.stateNode.implementation!==z.implementation?(v=ao(z,S.mode,D),v.return=S,v):(v=l(v,z.children||[]),v.return=S,v)}function R(S,v,z,D,W){return v===null||v.tag!==7?(v=Ka(z,S.mode,D,W),v.return=S,v):(v=l(v,z),v.return=S,v)}function U(S,v,z){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=to(""+v,S.mode,z),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case L:return z=vi(v.type,v.key,v.props,null,S.mode,z),gl(z,v),z.return=S,z;case G:return v=ao(v,S.mode,z),v.return=S,v;case be:return v=Pa(v),U(S,v,z)}if(Ne(v)||De(v))return v=Ka(v,S.mode,z,null),v.return=S,v;if(typeof v.then=="function")return U(S,Ni(v),z);if(v.$$typeof===X)return U(S,ji(S,v),z);zi(S,v)}return null}function T(S,v,z,D){var W=v!==null?v.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return W!==null?null:d(S,v,""+z,D);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case L:return z.key===W?x(S,v,z,D):null;case G:return z.key===W?C(S,v,z,D):null;case be:return z=Pa(z),T(S,v,z,D)}if(Ne(z)||De(z))return W!==null?null:R(S,v,z,D,null);if(typeof z.then=="function")return T(S,v,Ni(z),D);if(z.$$typeof===X)return T(S,v,ji(S,z),D);zi(S,z)}return null}function A(S,v,z,D,W){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return S=S.get(z)||null,d(v,S,""+D,W);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case L:return S=S.get(D.key===null?z:D.key)||null,x(v,S,D,W);case G:return S=S.get(D.key===null?z:D.key)||null,C(v,S,D,W);case be:return D=Pa(D),A(S,v,z,D,W)}if(Ne(D)||De(D))return S=S.get(z)||null,R(v,S,D,W,null);if(typeof D.then=="function")return A(S,v,z,Ni(D),W);if(D.$$typeof===X)return A(S,v,z,ji(v,D),W);zi(v,D)}return null}function K(S,v,z,D){for(var W=null,he=null,J=v,ie=v=0,de=null;J!==null&&ie<z.length;ie++){J.index>ie?(de=J,J=null):de=J.sibling;var ge=T(S,J,z[ie],D);if(ge===null){J===null&&(J=de);break}e&&J&&ge.alternate===null&&t(S,J),v=i(ge,v,ie),he===null?W=ge:he.sibling=ge,he=ge,J=de}if(ie===z.length)return a(S,J),pe&&Pt(S,ie),W;if(J===null){for(;ie<z.length;ie++)J=U(S,z[ie],D),J!==null&&(v=i(J,v,ie),he===null?W=J:he.sibling=J,he=J);return pe&&Pt(S,ie),W}for(J=n(J);ie<z.length;ie++)de=A(J,S,ie,z[ie],D),de!==null&&(e&&de.alternate!==null&&J.delete(de.key===null?ie:de.key),v=i(de,v,ie),he===null?W=de:he.sibling=de,he=de);return e&&J.forEach(function(Ya){return t(S,Ya)}),pe&&Pt(S,ie),W}function I(S,v,z,D){if(z==null)throw Error(c(151));for(var W=null,he=null,J=v,ie=v=0,de=null,ge=z.next();J!==null&&!ge.done;ie++,ge=z.next()){J.index>ie?(de=J,J=null):de=J.sibling;var Ya=T(S,J,ge.value,D);if(Ya===null){J===null&&(J=de);break}e&&J&&Ya.alternate===null&&t(S,J),v=i(Ya,v,ie),he===null?W=Ya:he.sibling=Ya,he=Ya,J=de}if(ge.done)return a(S,J),pe&&Pt(S,ie),W;if(J===null){for(;!ge.done;ie++,ge=z.next())ge=U(S,ge.value,D),ge!==null&&(v=i(ge,v,ie),he===null?W=ge:he.sibling=ge,he=ge);return pe&&Pt(S,ie),W}for(J=n(J);!ge.done;ie++,ge=z.next())ge=A(J,S,ie,ge.value,D),ge!==null&&(e&&ge.alternate!==null&&J.delete(ge.key===null?ie:ge.key),v=i(ge,v,ie),he===null?W=ge:he.sibling=ge,he=ge);return e&&J.forEach(function(b0){return t(S,b0)}),pe&&Pt(S,ie),W}function Ee(S,v,z,D){if(typeof z=="object"&&z!==null&&z.type===B&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case L:e:{for(var W=z.key;v!==null;){if(v.key===W){if(W=z.type,W===B){if(v.tag===7){a(S,v.sibling),D=l(v,z.props.children),D.return=S,S=D;break e}}else if(v.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===be&&Pa(W)===v.type){a(S,v.sibling),D=l(v,z.props),gl(D,z),D.return=S,S=D;break e}a(S,v);break}else t(S,v);v=v.sibling}z.type===B?(D=Ka(z.props.children,S.mode,D,z.key),D.return=S,S=D):(D=vi(z.type,z.key,z.props,null,S.mode,D),gl(D,z),D.return=S,S=D)}return s(S);case G:e:{for(W=z.key;v!==null;){if(v.key===W)if(v.tag===4&&v.stateNode.containerInfo===z.containerInfo&&v.stateNode.implementation===z.implementation){a(S,v.sibling),D=l(v,z.children||[]),D.return=S,S=D;break e}else{a(S,v);break}else t(S,v);v=v.sibling}D=ao(z,S.mode,D),D.return=S,S=D}return s(S);case be:return z=Pa(z),Ee(S,v,z,D)}if(Ne(z))return K(S,v,z,D);if(De(z)){if(W=De(z),typeof W!="function")throw Error(c(150));return z=W.call(z),I(S,v,z,D)}if(typeof z.then=="function")return Ee(S,v,Ni(z),D);if(z.$$typeof===X)return Ee(S,v,ji(S,z),D);zi(S,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,v!==null&&v.tag===6?(a(S,v.sibling),D=l(v,z),D.return=S,S=D):(a(S,v),D=to(z,S.mode,D),D.return=S,S=D),s(S)):a(S,v)}return function(S,v,z,D){try{hl=0;var W=Ee(S,v,z,D);return An=null,W}catch(J){if(J===Tn||J===Si)throw J;var he=bt(29,J,null,S.mode);return he.lanes=D,he.return=S,he}}}var tn=ju(!0),wu=ju(!1),Sa=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function go(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(xe&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=xi(e),iu(e,null,a),t}return gi(e,n,t,a),xi(e)}function xl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,pc(e,a)}}function xo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var vo=!1;function vl(){if(vo){var e=Cn;if(e!==null)throw e}}function bl(e,t,a,n){vo=!1;var l=e.updateQueue;Sa=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var x=d,C=x.next;x.next=null,s===null?i=C:s.next=C,s=x;var R=e.alternate;R!==null&&(R=R.updateQueue,d=R.lastBaseUpdate,d!==s&&(d===null?R.firstBaseUpdate=C:d.next=C,R.lastBaseUpdate=x))}if(i!==null){var U=l.baseState;s=0,R=C=x=null,d=i;do{var T=d.lane&-536870913,A=T!==d.lane;if(A?(ue&T)===T:(n&T)===T){T!==0&&T===zn&&(vo=!0),R!==null&&(R=R.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var K=e,I=d;T=t;var Ee=a;switch(I.tag){case 1:if(K=I.payload,typeof K=="function"){U=K.call(Ee,U,T);break e}U=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=I.payload,T=typeof K=="function"?K.call(Ee,U,T):K,T==null)break e;U=y({},U,T);break e;case 2:Sa=!0}}T=d.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=l.callbacks,A===null?l.callbacks=[T]:A.push(T))}else A={lane:T,tag:d.tag,payload:d.payload,callback:d.callback,next:null},R===null?(C=R=A,x=U):R=R.next=A,s|=T;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;A=d,d=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);R===null&&(x=U),l.baseState=x,l.firstBaseUpdate=C,l.lastBaseUpdate=R,i===null&&(l.shared.lanes=0),ka|=s,e.lanes=s,e.memoizedState=U}}function Su(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Eu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Su(a[e],t)}var kn=j(null),Ci=j(0);function Nu(e,t){e=ua,q(Ci,e),q(kn,t),ua=e|t.baseLanes}function bo(){q(Ci,ua),q(kn,kn.current)}function yo(){ua=Ci.current,O(kn),O(Ci)}var yt=j(null),Rt=null;function za(e){var t=e.alternate;q(He,He.current&1),q(yt,e),Rt===null&&(t===null||kn.current!==null||t.memoizedState!==null)&&(Rt=e)}function jo(e){q(He,He.current),q(yt,e),Rt===null&&(Rt=e)}function zu(e){e.tag===22?(q(He,He.current),q(yt,e),Rt===null&&(Rt=e)):Ca()}function Ca(){q(He,He.current),q(yt,yt.current)}function jt(e){O(yt),Rt===e&&(Rt=null),O(He)}var He=j(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cs(a)||Ts(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=0,le=null,we=null,qe=null,Ai=!1,Bn=!1,an=!1,ki=0,yl=0,Rn=null,ch=0;function _e(){throw Error(c(321))}function wo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!vt(e[a],t[a]))return!1;return!0}function So(e,t,a,n,l,i){return aa=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?cd:Ho,an=!1,i=a(n,l),an=!1,Bn&&(i=Tu(t,a,n,l)),Cu(e),i}function Cu(e){k.H=Sl;var t=we!==null&&we.next!==null;if(aa=0,qe=we=le=null,Ai=!1,yl=0,Rn=null,t)throw Error(c(300));e===null||Fe||(e=e.dependencies,e!==null&&yi(e)&&(Fe=!0))}function Tu(e,t,a,n){le=e;var l=0;do{if(Bn&&(Rn=null),yl=0,Bn=!1,25<=l)throw Error(c(301));if(l+=1,qe=we=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}k.H=ud,i=t(a,n)}while(Bn);return i}function uh(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?jl(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(le.flags|=1024),t}function Eo(){var e=ki!==0;return ki=0,e}function No(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function zo(e){if(Ai){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ai=!1}aa=0,qe=we=le=null,Bn=!1,yl=ki=0,Rn=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?le.memoizedState=qe=e:qe=qe.next=e,qe}function Le(){if(we===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=qe===null?le.memoizedState:qe.next;if(t!==null)qe=t,we=e;else{if(e===null)throw le.alternate===null?Error(c(467)):Error(c(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},qe===null?le.memoizedState=qe=e:qe=qe.next=e}return qe}function Bi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jl(e){var t=yl;return yl+=1,Rn===null&&(Rn=[]),e=vu(Rn,e,t),t=le,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?cd:Ho),e}function Ri(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jl(e);if(e.$$typeof===X)return et(e)}throw Error(c(438,String(e)))}function Co(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=le.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Bi(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=nt;return t.index++,a}function na(e,t){return typeof t=="function"?t(e):t}function Mi(e){var t=Le();return To(t,we,e)}function To(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var d=s=null,x=null,C=t,R=!1;do{var U=C.lane&-536870913;if(U!==C.lane?(ue&U)===U:(aa&U)===U){var T=C.revertLane;if(T===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),U===zn&&(R=!0);else if((aa&T)===T){C=C.next,T===zn&&(R=!0);continue}else U={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(d=x=U,s=i):x=x.next=U,le.lanes|=T,ka|=T;U=C.action,an&&a(i,U),i=C.hasEagerState?C.eagerState:a(i,U)}else T={lane:U,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(d=x=T,s=i):x=x.next=T,le.lanes|=U,ka|=U;C=C.next}while(C!==null&&C!==t);if(x===null?s=i:x.next=d,!vt(i,e.memoizedState)&&(Fe=!0,R&&(a=Cn,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=x,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ao(e){var t=Le(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);vt(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Au(e,t,a){var n=le,l=Le(),i=pe;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var s=!vt((we||l).memoizedState,a);if(s&&(l.memoizedState=a,Fe=!0),l=l.queue,Ro(Ru.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Mn(9,{destroy:void 0},Bu.bind(null,n,l,a,t),null),ze===null)throw Error(c(349));i||(aa&127)!==0||ku(n,t,a)}return a}function ku(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=Bi(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Bu(e,t,a,n){t.value=a,t.getSnapshot=n,Mu(t)&&Du(e)}function Ru(e,t,a){return a(function(){Mu(t)&&Du(e)})}function Mu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!vt(e,a)}catch{return!0}}function Du(e){var t=Va(e,2);t!==null&&pt(t,e,2)}function ko(e){var t=it();if(typeof e=="function"){var a=e;if(e=a(),an){ga(!0);try{a()}finally{ga(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function _u(e,t,a,n){return e.baseState=a,To(e,we,typeof n=="function"?n:na)}function dh(e,t,a,n,l){if(Oi(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};k.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Ou(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ou(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=k.T,s={};k.T=s;try{var d=a(l,n),x=k.S;x!==null&&x(s,d),Uu(e,t,d)}catch(C){Bo(e,t,C)}finally{i!==null&&s.types!==null&&(i.types=s.types),k.T=i}}else try{i=a(l,n),Uu(e,t,i)}catch(C){Bo(e,t,C)}}function Uu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Hu(e,t,n)},function(n){return Bo(e,t,n)}):Hu(e,t,a)}function Hu(e,t,a){t.status="fulfilled",t.value=a,Lu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ou(e,a)))}function Bo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Lu(t),t=t.next;while(t!==n)}e.action=null}function Lu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yu(e,t){return t}function qu(e,t){if(pe){var a=ze.formState;if(a!==null){e:{var n=le;if(pe){if(Ce){t:{for(var l=Ce,i=Bt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Mt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Ce=Mt(l.nextSibling),n=l.data==="F!";break e}}ja(n)}n=!1}n&&(t=a[0])}}return a=it(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yu,lastRenderedState:t},a.queue=n,a=rd.bind(null,le,n),n.dispatch=a,n=ko(!1),i=Uo.bind(null,le,!1,n.queue),n=it(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=dh.bind(null,le,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Fu(e){var t=Le();return Gu(t,we,e)}function Gu(e,t,a){if(t=To(e,t,Yu)[0],e=Mi(na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=jl(t)}catch(s){throw s===Tn?Si:s}else n=t;t=Le();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(le.flags|=2048,Mn(9,{destroy:void 0},fh.bind(null,l,a),null)),[n,i,e]}function fh(e,t){e.action=t}function Xu(e){var t=Le(),a=we;if(a!==null)return Gu(t,a,e);Le(),t=t.memoizedState,a=Le();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=le.updateQueue,t===null&&(t=Bi(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Qu(){return Le().memoizedState}function Di(e,t,a,n){var l=it();le.flags|=e,l.memoizedState=Mn(1|t,{destroy:void 0},a,n===void 0?null:n)}function _i(e,t,a,n){var l=Le();n=n===void 0?null:n;var i=l.memoizedState.inst;we!==null&&n!==null&&wo(n,we.memoizedState.deps)?l.memoizedState=Mn(t,i,a,n):(le.flags|=e,l.memoizedState=Mn(1|t,i,a,n))}function Zu(e,t){Di(8390656,8,e,t)}function Ro(e,t){_i(2048,8,e,t)}function ph(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=Bi(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Vu(e){var t=Le().memoizedState;return ph({ref:t,nextImpl:e}),function(){if((xe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Ku(e,t){return _i(4,2,e,t)}function Ju(e,t){return _i(4,4,e,t)}function $u(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wu(e,t,a){a=a!=null?a.concat([e]):null,_i(4,4,$u.bind(null,t,e),a)}function Mo(){}function Iu(e,t){var a=Le();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&wo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Pu(e,t){var a=Le();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&wo(t,n[1]))return n[0];if(n=e(),an){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[n,t],n}function Do(e,t,a){return a===void 0||(aa&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ef(),le.lanes|=e,ka|=e,a)}function ed(e,t,a,n){return vt(a,t)?a:kn.current!==null?(e=Do(e,a,n),vt(e,t)||(Fe=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(ue&261930)===0?(Fe=!0,e.memoizedState=a):(e=ef(),le.lanes|=e,ka|=e,t)}function td(e,t,a,n,l){var i=H.p;H.p=i!==0&&8>i?i:8;var s=k.T,d={};k.T=d,Uo(e,!1,t,a);try{var x=l(),C=k.S;if(C!==null&&C(d,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var R=sh(x,n);wl(e,t,R,Et(e))}else wl(e,t,n,Et(e))}catch(U){wl(e,t,{then:function(){},status:"rejected",reason:U},Et())}finally{H.p=i,s!==null&&d.types!==null&&(s.types=d.types),k.T=s}}function mh(){}function _o(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=ad(e).queue;td(e,l,t,Z,a===null?mh:function(){return nd(e),a(n)})}function ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nd(e){var t=ad(e);t.next===null&&(t=e.alternate.memoizedState),wl(e,t.next.queue,{},Et())}function Oo(){return et(Ll)}function ld(){return Le().memoizedState}function id(){return Le().memoizedState}function hh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Et();e=Ea(a);var n=Na(t,e,a);n!==null&&(pt(n,t,a),xl(n,t,a)),t={cache:uo()},e.payload=t;return}t=t.return}}function gh(e,t,a){var n=Et();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Oi(e)?od(t,a):(a=Pr(e,t,a,n),a!==null&&(pt(a,e,n),sd(a,t,n)))}function rd(e,t,a){var n=Et();wl(e,t,a,n)}function wl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Oi(e))od(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,d=i(s,a);if(l.hasEagerState=!0,l.eagerState=d,vt(d,s))return gi(e,t,l,0),ze===null&&hi(),!1}catch{}if(a=Pr(e,t,l,n),a!==null)return pt(a,e,n),sd(a,t,n),!0}return!1}function Uo(e,t,a,n){if(n={lane:2,revertLane:hs(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Oi(e)){if(t)throw Error(c(479))}else t=Pr(e,a,n,2),t!==null&&pt(t,e,2)}function Oi(e){var t=e.alternate;return e===le||t!==null&&t===le}function od(e,t){Bn=Ai=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function sd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,pc(e,a)}}var Sl={readContext:et,use:Ri,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useLayoutEffect:_e,useInsertionEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useSyncExternalStore:_e,useId:_e,useHostTransitionStatus:_e,useFormState:_e,useActionState:_e,useOptimistic:_e,useMemoCache:_e,useCacheRefresh:_e};Sl.useEffectEvent=_e;var cd={readContext:et,use:Ri,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Zu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Di(4194308,4,$u.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Di(4194308,4,e,t)},useInsertionEffect:function(e,t){Di(4,2,e,t)},useMemo:function(e,t){var a=it();t=t===void 0?null:t;var n=e();if(an){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=it();if(a!==void 0){var l=a(t);if(an){ga(!0);try{a(t)}finally{ga(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=gh.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=ko(e);var t=e.queue,a=rd.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Mo,useDeferredValue:function(e,t){var a=it();return Do(a,e,t)},useTransition:function(){var e=ko(!1);return e=td.bind(null,le,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=le,l=it();if(pe){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),ze===null)throw Error(c(349));(ue&127)!==0||ku(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,Zu(Ru.bind(null,n,i,e),[e]),n.flags|=2048,Mn(9,{destroy:void 0},Bu.bind(null,n,i,a,t),null),a},useId:function(){var e=it(),t=ze.identifierPrefix;if(pe){var a=Ft,n=qt;a=(n&~(1<<32-xt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ki++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=ch++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oo,useFormState:qu,useActionState:qu,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Uo.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Co,useCacheRefresh:function(){return it().memoizedState=hh.bind(null,le)},useEffectEvent:function(e){var t=it(),a={impl:e};return t.memoizedState=a,function(){if((xe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Ho={readContext:et,use:Ri,useCallback:Iu,useContext:et,useEffect:Ro,useImperativeHandle:Wu,useInsertionEffect:Ku,useLayoutEffect:Ju,useMemo:Pu,useReducer:Mi,useRef:Qu,useState:function(){return Mi(na)},useDebugValue:Mo,useDeferredValue:function(e,t){var a=Le();return ed(a,we.memoizedState,e,t)},useTransition:function(){var e=Mi(na)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Au,useId:ld,useHostTransitionStatus:Oo,useFormState:Fu,useActionState:Fu,useOptimistic:function(e,t){var a=Le();return _u(a,we,e,t)},useMemoCache:Co,useCacheRefresh:id};Ho.useEffectEvent=Vu;var ud={readContext:et,use:Ri,useCallback:Iu,useContext:et,useEffect:Ro,useImperativeHandle:Wu,useInsertionEffect:Ku,useLayoutEffect:Ju,useMemo:Pu,useReducer:Ao,useRef:Qu,useState:function(){return Ao(na)},useDebugValue:Mo,useDeferredValue:function(e,t){var a=Le();return we===null?Do(a,e,t):ed(a,we.memoizedState,e,t)},useTransition:function(){var e=Ao(na)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Au,useId:ld,useHostTransitionStatus:Oo,useFormState:Xu,useActionState:Xu,useOptimistic:function(e,t){var a=Le();return we!==null?_u(a,we,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Co,useCacheRefresh:id};ud.useEffectEvent=Vu;function Lo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Et(),l=Ea(n);l.payload=t,a!=null&&(l.callback=a),t=Na(e,l,n),t!==null&&(pt(t,e,n),xl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Et(),l=Ea(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Na(e,l,n),t!==null&&(pt(t,e,n),xl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Et(),n=Ea(a);n.tag=2,t!=null&&(n.callback=t),t=Na(e,n,a),t!==null&&(pt(t,e,a),xl(t,e,a))}};function dd(e,t,a,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!cl(a,n)||!cl(l,i):!0}function fd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function nn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function pd(e){mi(e)}function md(e){console.error(e)}function hd(e){mi(e)}function Ui(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function gd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function qo(e,t,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Ui(e,t)},a}function xd(e){return e=Ea(e),e.tag=3,e}function vd(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){gd(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){gd(t,a,n),typeof l!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function xh(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Nn(t,a,l,!0),a=yt.current,a!==null){switch(a.tag){case 31:case 13:return Rt===null?Ji():a.alternate===null&&Oe===0&&(Oe=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Ei?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),fs(e,n,l)),!1;case 22:return a.flags|=65536,n===Ei?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),fs(e,n,l)),!1}throw Error(c(435,a.tag))}return fs(e,n,l),Ji(),!1}if(pe)return t=yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==io&&(e=Error(c(422),{cause:n}),fl(Tt(e,a)))):(n!==io&&(t=Error(c(423),{cause:n}),fl(Tt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Tt(n,a),l=qo(e.stateNode,n,l),xo(e,l),Oe!==4&&(Oe=2)),!1;var i=Error(c(520),{cause:n});if(i=Tt(i,a),Bl===null?Bl=[i]:Bl.push(i),Oe!==4&&(Oe=2),t===null)return!0;n=Tt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=qo(a.stateNode,n,e),xo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ba===null||!Ba.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=xd(l),vd(l,e,a,n),xo(a,l),!1}a=a.return}while(a!==null);return!1}var Fo=Error(c(461)),Fe=!1;function tt(e,t,a,n){t.child=e===null?wu(t,null,a,n):tn(t,e.child,a,n)}function bd(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var s={};for(var d in n)d!=="ref"&&(s[d]=n[d])}else s=n;return Wa(t),n=So(e,t,a,s,i,l),d=Eo(),e!==null&&!Fe?(No(e,t,l),la(e,t,l)):(pe&&d&&no(t),t.flags|=1,tt(e,t,n,l),t.child)}function yd(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!eo(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,jd(e,t,i,n,l)):(e=vi(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!$o(e,l)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:cl,a(s,n)&&e.ref===t.ref)return la(e,t,l)}return t.flags|=1,e=It(i,n),e.ref=t.ref,e.return=t,t.child=e}function jd(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(cl(i,n)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=n=i,$o(e,l))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,la(e,t,l)}return Go(e,t,a,n,l)}function wd(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return Sd(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wi(t,i!==null?i.cachePool:null),i!==null?Nu(t,i):bo(),zu(t);else return n=t.lanes=536870912,Sd(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(wi(t,i.cachePool),Nu(t,i),Ca(),t.memoizedState=null):(e!==null&&wi(t,null),bo(),Ca());return tt(e,t,l,a),t.child}function El(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Sd(e,t,a,n,l){var i=po();return i=i===null?null:{parent:Ye._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&wi(t,null),bo(),zu(t),e!==null&&Nn(e,t,n,!0),t.childLanes=l,null}function Hi(e,t){return t=Yi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ed(e,t,a){return tn(t,e.child,null,a),e=Hi(t,t.pendingProps),e.flags|=2,jt(t),t.memoizedState=null,e}function vh(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(n.mode==="hidden")return e=Hi(t,n),t.lanes=536870912,El(null,e);if(jo(t),(e=Ce)?(e=Uf(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:qt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},a=ou(e),a.return=t,t.child=a,Pe=t,Ce=null)):e=null,e===null)throw ja(t);return t.lanes=536870912,null}return Hi(t,n)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(jo(t),l)if(t.flags&256)t.flags&=-257,t=Ed(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Fe||Nn(e,t,a,!1),l=(a&e.childLanes)!==0,Fe||l){if(n=ze,n!==null&&(s=mc(n,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,Va(e,s),pt(n,e,s),Fo;Ji(),t=Ed(e,t,a)}else e=i.treeContext,Ce=Mt(s.nextSibling),Pe=t,pe=!0,ya=null,Bt=!1,e!==null&&uu(t,e),t=Hi(t,n),t.flags|=4096;return t}return e=It(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Li(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Go(e,t,a,n,l){return Wa(t),a=So(e,t,a,n,void 0,l),n=Eo(),e!==null&&!Fe?(No(e,t,l),la(e,t,l)):(pe&&n&&no(t),t.flags|=1,tt(e,t,a,l),t.child)}function Nd(e,t,a,n,l,i){return Wa(t),t.updateQueue=null,a=Tu(t,n,a,l),Cu(e),n=Eo(),e!==null&&!Fe?(No(e,t,i),la(e,t,i)):(pe&&n&&no(t),t.flags|=1,tt(e,t,a,i),t.child)}function zd(e,t,a,n,l){if(Wa(t),t.stateNode===null){var i=jn,s=a.contextType;typeof s=="object"&&s!==null&&(i=et(s)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Yo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},ho(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?et(s):jn,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Lo(t,a,s,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Yo.enqueueReplaceState(i,i.state,null),bl(t,n,i,l),vl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,x=nn(a,d);i.props=x;var C=i.context,R=a.contextType;s=jn,typeof R=="object"&&R!==null&&(s=et(R));var U=a.getDerivedStateFromProps;R=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||C!==s)&&fd(t,i,n,s),Sa=!1;var T=t.memoizedState;i.state=T,bl(t,n,i,l),vl(),C=t.memoizedState,d||T!==C||Sa?(typeof U=="function"&&(Lo(t,a,U,n),C=t.memoizedState),(x=Sa||dd(t,a,x,n,T,C,s))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),i.props=n,i.state=C,i.context=s,n=x):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,go(e,t),s=t.memoizedProps,R=nn(a,s),i.props=R,U=t.pendingProps,T=i.context,C=a.contextType,x=jn,typeof C=="object"&&C!==null&&(x=et(C)),d=a.getDerivedStateFromProps,(C=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==U||T!==x)&&fd(t,i,n,x),Sa=!1,T=t.memoizedState,i.state=T,bl(t,n,i,l),vl();var A=t.memoizedState;s!==U||T!==A||Sa||e!==null&&e.dependencies!==null&&yi(e.dependencies)?(typeof d=="function"&&(Lo(t,a,d,n),A=t.memoizedState),(R=Sa||dd(t,a,R,n,T,A,x)||e!==null&&e.dependencies!==null&&yi(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,A,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,A,x)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=A),i.props=n,i.state=A,i.context=x,n=R):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Li(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=tn(t,e.child,null,l),t.child=tn(t,null,a,l)):tt(e,t,a,l),t.memoizedState=i.state,e=t.child):e=la(e,t,l),e}function Cd(e,t,a,n){return Ja(),t.flags|=256,tt(e,t,a,n),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qo(e){return{baseLanes:e,cachePool:gu()}}function Zo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=St),e}function Td(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(l?za(t):Ca(),(e=Ce)?(e=Uf(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:qt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},a=ou(e),a.return=t,t.child=a,Pe=t,Ce=null)):e=null,e===null)throw ja(t);return Ts(e)?t.lanes=32:t.lanes=536870912,null}var d=n.children;return n=n.fallback,l?(Ca(),l=t.mode,d=Yi({mode:"hidden",children:d},l),n=Ka(n,l,a,null),d.return=t,n.return=t,d.sibling=n,t.child=d,n=t.child,n.memoizedState=Qo(a),n.childLanes=Zo(e,s,a),t.memoizedState=Xo,El(null,n)):(za(t),Vo(t,d))}var x=e.memoizedState;if(x!==null&&(d=x.dehydrated,d!==null)){if(i)t.flags&256?(za(t),t.flags&=-257,t=Ko(e,t,a)):t.memoizedState!==null?(Ca(),t.child=e.child,t.flags|=128,t=null):(Ca(),d=n.fallback,l=t.mode,n=Yi({mode:"visible",children:n.children},l),d=Ka(d,l,a,null),d.flags|=2,n.return=t,d.return=t,n.sibling=d,t.child=n,tn(t,e.child,null,a),n=t.child,n.memoizedState=Qo(a),n.childLanes=Zo(e,s,a),t.memoizedState=Xo,t=El(null,n));else if(za(t),Ts(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var C=s.dgst;s=C,n=Error(c(419)),n.stack="",n.digest=s,fl({value:n,source:null,stack:null}),t=Ko(e,t,a)}else if(Fe||Nn(e,t,a,!1),s=(a&e.childLanes)!==0,Fe||s){if(s=ze,s!==null&&(n=mc(s,a),n!==0&&n!==x.retryLane))throw x.retryLane=n,Va(e,n),pt(s,e,n),Fo;Cs(d)||Ji(),t=Ko(e,t,a)}else Cs(d)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ce=Mt(d.nextSibling),Pe=t,pe=!0,ya=null,Bt=!1,e!==null&&uu(t,e),t=Vo(t,n.children),t.flags|=4096);return t}return l?(Ca(),d=n.fallback,l=t.mode,x=e.child,C=x.sibling,n=It(x,{mode:"hidden",children:n.children}),n.subtreeFlags=x.subtreeFlags&65011712,C!==null?d=It(C,d):(d=Ka(d,l,a,null),d.flags|=2),d.return=t,n.return=t,n.sibling=d,t.child=n,El(null,n),n=t.child,d=e.child.memoizedState,d===null?d=Qo(a):(l=d.cachePool,l!==null?(x=Ye._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=gu(),d={baseLanes:d.baseLanes|a,cachePool:l}),n.memoizedState=d,n.childLanes=Zo(e,s,a),t.memoizedState=Xo,El(e.child,n)):(za(t),a=e.child,e=a.sibling,a=It(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Vo(e,t){return t=Yi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yi(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function Ko(e,t,a){return tn(t,e.child,null,a),e=Vo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ad(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),so(e.return,t,a)}function Jo(e,t,a,n,l,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=i)}function kd(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var s=He.current,d=(s&2)!==0;if(d?(s=s&1|2,t.flags|=128):s&=1,q(He,s),tt(e,t,n,a),n=pe?dl:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ad(e,a,t);else if(e.tag===19)Ad(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Ti(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Jo(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ti(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Jo(t,!0,a,null,i,n);break;case"together":Jo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function la(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Nn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=It(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=It(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function $o(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yi(e)))}function bh(e,t,a){switch(t.tag){case 3:te(t,t.stateNode.containerInfo),wa(t,Ye,e.memoizedState.cache),Ja();break;case 27:case 5:ke(t);break;case 4:te(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,jo(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(za(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Td(e,t,a):(za(t),e=la(e,t,a),e!==null?e.sibling:null);za(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Nn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return kd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(He,He.current),n)break;return null;case 22:return t.lanes=0,wd(e,t,a,t.pendingProps);case 24:wa(t,Ye,e.memoizedState.cache)}return la(e,t,a)}function Bd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!$o(e,a)&&(t.flags&128)===0)return Fe=!1,bh(e,t,a);Fe=(e.flags&131072)!==0}else Fe=!1,pe&&(t.flags&1048576)!==0&&cu(t,dl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e=="function")eo(e)?(n=nn(e,n),t.tag=1,t=zd(null,t,e,n,a)):(t.tag=0,t=Go(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===Q){t.tag=11,t=bd(null,t,e,n,a);break e}else if(l===P){t.tag=14,t=yd(null,t,e,n,a);break e}}throw t=Ve(e)||e,Error(c(306,t,""))}}return t;case 0:return Go(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=nn(n,t.pendingProps),zd(e,t,n,l,a);case 3:e:{if(te(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,go(e,t),bl(t,n,null,a);var s=t.memoizedState;if(n=s.cache,wa(t,Ye,n),n!==i.cache&&co(t,[Ye],a,!0),vl(),n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Cd(e,t,n,a);break e}else if(n!==l){l=Tt(Error(c(424)),t),fl(l),t=Cd(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=Mt(e.firstChild),Pe=t,pe=!0,ya=null,Bt=!0,a=wu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ja(),n===l){t=la(e,t,a);break e}tt(e,t,n,a)}t=t.child}return t;case 26:return Li(e,t),e===null?(a=Gf(t.type,null,t.pendingProps,null))?t.memoizedState=a:pe||(a=t.type,e=t.pendingProps,n=ar(re.current).createElement(a),n[Ie]=t,n[ot]=e,at(n,a,e),Ke(n),t.stateNode=n):t.memoizedState=Gf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ke(t),e===null&&pe&&(n=t.stateNode=Yf(t.type,t.pendingProps,re.current),Pe=t,Bt=!0,l=Ce,_a(t.type)?(As=l,Ce=Mt(n.firstChild)):Ce=l),tt(e,t,t.pendingProps.children,a),Li(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((l=n=Ce)&&(n=Jh(n,t.type,t.pendingProps,Bt),n!==null?(t.stateNode=n,Pe=t,Ce=Mt(n.firstChild),Bt=!1,l=!0):l=!1),l||ja(t)),ke(t),l=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,n=i.children,Es(l,i)?n=null:s!==null&&Es(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=So(e,t,uh,null,null,a),Ll._currentValue=l),Li(e,t),tt(e,t,n,a),t.child;case 6:return e===null&&pe&&((e=a=Ce)&&(a=$h(a,t.pendingProps,Bt),a!==null?(t.stateNode=a,Pe=t,Ce=null,e=!0):e=!1),e||ja(t)),null;case 13:return Td(e,t,a);case 4:return te(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=tn(t,null,n,a):tt(e,t,n,a),t.child;case 11:return bd(e,t,t.type,t.pendingProps,a);case 7:return tt(e,t,t.pendingProps,a),t.child;case 8:return tt(e,t,t.pendingProps.children,a),t.child;case 12:return tt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,wa(t,t.type,n.value),tt(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Wa(t),l=et(l),n=n(l),t.flags|=1,tt(e,t,n,a),t.child;case 14:return yd(e,t,t.type,t.pendingProps,a);case 15:return jd(e,t,t.type,t.pendingProps,a);case 19:return kd(e,t,a);case 31:return vh(e,t,a);case 22:return wd(e,t,a,t.pendingProps);case 24:return Wa(t),n=et(Ye),e===null?(l=po(),l===null&&(l=ze,i=uo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},ho(t),wa(t,Ye,l)):((e.lanes&a)!==0&&(go(e,t),bl(t,null,null,a),vl()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),wa(t,Ye,n)):(n=i.cache,wa(t,Ye,n),n!==l.cache&&co(t,[Ye],a,!0))),tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ia(e){e.flags|=4}function Wo(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(lf())e.flags|=8192;else throw en=Ei,mo}else e.flags&=-16777217}function Rd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kf(t))if(lf())e.flags|=8192;else throw en=Ei,mo}function qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?dc():536870912,e.lanes|=t,Un|=t)}function Nl(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function yh(e,t,a){var n=t.pendingProps;switch(lo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(Ye),ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(En(t)?ia(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ro())),Te(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(ia(t),i!==null?(Te(t),Rd(t,i)):(Te(t),Wo(t,l,null,n,a))):i?i!==e.memoizedState?(ia(t),Te(t),Rd(t,i)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ia(t),Te(t),Wo(t,l,e,n,a)),null;case 27:if(We(t),a=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ia(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Te(t),null}e=V.current,En(t)?du(t):(e=Yf(l,n,a),t.stateNode=e,ia(t))}return Te(t),null;case 5:if(We(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ia(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Te(t),null}if(i=V.current,En(t))du(t);else{var s=ar(re.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}i[Ie]=t,i[ot]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(at(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ia(t)}}return Te(t),Wo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ia(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=re.current,En(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Pe,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Af(e.nodeValue,a)),e||ja(t,!0)}else e=ar(e).createTextNode(n),e[Ie]=t,t.stateNode=e}return Te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=En(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ie]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else a=ro(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(jt(t),t):(jt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Te(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=En(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ie]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),l=!1}else l=ro(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(jt(t),t):(jt(t),null)}return jt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),qi(t,t.updateQueue),Te(t),null);case 4:return ne(),e===null&&bs(t.stateNode.containerInfo),Te(t),null;case 10:return ta(t.type),Te(t),null;case 19:if(O(He),n=t.memoizedState,n===null)return Te(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)Nl(n,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ti(e),i!==null){for(t.flags|=128,Nl(n,!1),e=i.updateQueue,t.updateQueue=e,qi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ru(a,e),a=a.sibling;return q(He,He.current&1|2),pe&&Pt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ht()>Zi&&(t.flags|=128,l=!0,Nl(n,!1),t.lanes=4194304)}else{if(!l)if(e=Ti(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,qi(t,e),Nl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!pe)return Te(t),null}else 2*ht()-n.renderingStartTime>Zi&&a!==536870912&&(t.flags|=128,l=!0,Nl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ht(),e.sibling=null,a=He.current,q(He,l?a&1|2:a&1),pe&&Pt(t,n.treeForkCount),e):(Te(t),null);case 22:case 23:return jt(t),yo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),a=t.updateQueue,a!==null&&qi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&O(Ia),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ta(Ye),Te(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function jh(e,t){switch(lo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(Ye),ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return We(t),null;case 31:if(t.memoizedState!==null){if(jt(t),t.alternate===null)throw Error(c(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(He),null;case 4:return ne(),null;case 10:return ta(t.type),null;case 22:case 23:return jt(t),yo(),e!==null&&O(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(Ye),null;case 25:return null;default:return null}}function Md(e,t){switch(lo(t),t.tag){case 3:ta(Ye),ne();break;case 26:case 27:case 5:We(t);break;case 4:ne();break;case 31:t.memoizedState!==null&&jt(t);break;case 13:jt(t);break;case 19:O(He);break;case 10:ta(t.type);break;case 22:case 23:jt(t),yo(),e!==null&&O(Ia);break;case 24:ta(Ye)}}function zl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,s=a.inst;n=i(),s.destroy=n}a=a.next}while(a!==l)}}catch(d){je(t,t.return,d)}}function Ta(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var s=n.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,l=t;var x=a,C=d;try{C()}catch(R){je(l,x,R)}}}n=n.next}while(n!==i)}}catch(R){je(t,t.return,R)}}function Dd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Eu(t,a)}catch(n){je(e,e.return,n)}}}function _d(e,t,a){a.props=nn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){je(e,t,n)}}function Cl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){je(e,t,l)}}function Gt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){je(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){je(e,t,l)}else a.current=null}function Od(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){je(e,e.return,l)}}function Io(e,t,a){try{var n=e.stateNode;Gh(n,e.type,a,t),n[ot]=t}catch(l){je(e,e.return,l)}}function Ud(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function Po(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function es(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=$t));else if(n!==4&&(n===27&&_a(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(es(e,t,a),e=e.sibling;e!==null;)es(e,t,a),e=e.sibling}function Fi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&_a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fi(e,t,a),e=e.sibling;e!==null;)Fi(e,t,a),e=e.sibling}function Hd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);at(t,n,a),t[Ie]=e,t[ot]=a}catch(i){je(e,e.return,i)}}var ra=!1,Ge=!1,ts=!1,Ld=typeof WeakSet=="function"?WeakSet:Set,Je=null;function wh(e,t){if(e=e.containerInfo,ws=cr,e=Wc(e),Vr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,d=-1,x=-1,C=0,R=0,U=e,T=null;t:for(;;){for(var A;U!==a||l!==0&&U.nodeType!==3||(d=s+l),U!==i||n!==0&&U.nodeType!==3||(x=s+n),U.nodeType===3&&(s+=U.nodeValue.length),(A=U.firstChild)!==null;)T=U,U=A;for(;;){if(U===e)break t;if(T===a&&++C===l&&(d=s),T===i&&++R===n&&(x=s),(A=U.nextSibling)!==null)break;U=T,T=U.parentNode}U=A}a=d===-1||x===-1?null:{start:d,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ss={focusedElem:e,selectionRange:a},cr=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var K=nn(a.type,l);e=n.getSnapshotBeforeUpdate(K,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(I){je(a,a.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)zs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Yd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),n&4&&zl(5,a);break;case 1:if(sa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){je(a,a.return,s)}else{var l=nn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){je(a,a.return,s)}}n&64&&Dd(a),n&512&&Cl(a,a.return);break;case 3:if(sa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Eu(e,t)}catch(s){je(a,a.return,s)}}break;case 27:t===null&&n&4&&Hd(a);case 26:case 5:sa(e,a),t===null&&n&4&&Od(a),n&512&&Cl(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),n&4&&Gd(e,a);break;case 13:sa(e,a),n&4&&Xd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bh.bind(null,a),Wh(e,a))));break;case 22:if(n=a.memoizedState!==null||ra,!n){t=t!==null&&t.memoizedState!==null||Ge,l=ra;var i=Ge;ra=n,(Ge=t)&&!i?ca(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ra=l,Ge=i}break;case 30:break;default:sa(e,a)}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&kr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,ct=!1;function oa(e,t,a){for(a=a.child;a!==null;)Fd(e,t,a),a=a.sibling}function Fd(e,t,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Wn,a)}catch{}switch(a.tag){case 26:Ge||Gt(a,t),oa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Gt(a,t);var n=Ae,l=ct;_a(a.type)&&(Ae=a.stateNode,ct=!1),oa(e,t,a),Ol(a.stateNode),Ae=n,ct=l;break;case 5:Ge||Gt(a,t);case 6:if(n=Ae,l=ct,Ae=null,oa(e,t,a),Ae=n,ct=l,Ae!==null)if(ct)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(i){je(a,t,i)}else try{Ae.removeChild(a.stateNode)}catch(i){je(a,t,i)}break;case 18:Ae!==null&&(ct?(e=Ae,_f(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qn(e)):_f(Ae,a.stateNode));break;case 4:n=Ae,l=ct,Ae=a.stateNode.containerInfo,ct=!0,oa(e,t,a),Ae=n,ct=l;break;case 0:case 11:case 14:case 15:Ta(2,a,t),Ge||Ta(4,a,t),oa(e,t,a);break;case 1:Ge||(Gt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&_d(a,t,n)),oa(e,t,a);break;case 21:oa(e,t,a);break;case 22:Ge=(n=Ge)||a.memoizedState!==null,oa(e,t,a),Ge=n;break;default:oa(e,t,a)}}function Gd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qn(e)}catch(a){je(t,t.return,a)}}}function Xd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qn(e)}catch(a){je(t,t.return,a)}}function Sh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ld),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ld),t;default:throw Error(c(435,e.tag))}}function Gi(e,t){var a=Sh(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Rh.bind(null,e,n);n.then(l,l)}})}function ut(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 27:if(_a(d.type)){Ae=d.stateNode,ct=!1;break e}break;case 5:Ae=d.stateNode,ct=!1;break e;case 3:case 4:Ae=d.stateNode.containerInfo,ct=!0;break e}d=d.return}if(Ae===null)throw Error(c(160));Fd(i,s,l),Ae=null,ct=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qd(t,e),t=t.sibling}var Ut=null;function Qd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),dt(e),n&4&&(Ta(3,e,e.return),zl(3,e),Ta(5,e,e.return));break;case 1:ut(t,e),dt(e),n&512&&(Ge||a===null||Gt(a,a.return)),n&64&&ra&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Ut;if(ut(t,e),dt(e),n&512&&(Ge||a===null||Gt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[el]||i[Ie]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),at(i,n,a),i[Ie]=e,Ke(i),n=i;break e;case"link":var s=Zf("link","href",l).get(n+(a.href||""));if(s){for(var d=0;d<s.length;d++)if(i=s[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(d,1);break t}}i=l.createElement(n),at(i,n,a),l.head.appendChild(i);break;case"meta":if(s=Zf("meta","content",l).get(n+(a.content||""))){for(d=0;d<s.length;d++)if(i=s[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(d,1);break t}}i=l.createElement(n),at(i,n,a),l.head.appendChild(i);break;default:throw Error(c(468,n))}i[Ie]=e,Ke(i),n=i}e.stateNode=n}else Vf(l,e.type,e.stateNode);else e.stateNode=Qf(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Vf(l,e.type,e.stateNode):Qf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Io(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),dt(e),n&512&&(Ge||a===null||Gt(a,a.return)),a!==null&&n&4&&Io(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),dt(e),n&512&&(Ge||a===null||Gt(a,a.return)),e.flags&32){l=e.stateNode;try{mn(l,"")}catch(K){je(e,e.return,K)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Io(e,l,a!==null?a.memoizedProps:l)),n&1024&&(ts=!0);break;case 6:if(ut(t,e),dt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(K){je(e,e.return,K)}}break;case 3:if(ir=null,l=Ut,Ut=nr(t.containerInfo),ut(t,e),Ut=l,dt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(K){je(e,e.return,K)}ts&&(ts=!1,Zd(e));break;case 4:n=Ut,Ut=nr(e.stateNode.containerInfo),ut(t,e),dt(e),Ut=n;break;case 12:ut(t,e),dt(e);break;case 31:ut(t,e),dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Gi(e,n)));break;case 13:ut(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qi=ht()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Gi(e,n)));break;case 22:l=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,C=ra,R=Ge;if(ra=C||l,Ge=R||x,ut(t,e),Ge=R,ra=C,dt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||x||ra||Ge||ln(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(i=x.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=x.stateNode;var U=x.memoizedProps.style,T=U!=null&&U.hasOwnProperty("display")?U.display:null;d.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(K){je(x,x.return,K)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(K){je(x,x.return,K)}}}else if(t.tag===18){if(a===null){x=t;try{var A=x.stateNode;l?Of(A,!0):Of(x.stateNode,!1)}catch(K){je(x,x.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Gi(e,a))));break;case 19:ut(t,e),dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Gi(e,n)));break;case 30:break;case 21:break;default:ut(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Ud(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,i=Po(e);Fi(e,i,l);break;case 5:var s=a.stateNode;a.flags&32&&(mn(s,""),a.flags&=-33);var d=Po(e);Fi(e,d,s);break;case 3:case 4:var x=a.stateNode.containerInfo,C=Po(e);es(e,C,x);break;default:throw Error(c(161))}}catch(R){je(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yd(e,t.alternate,t),t=t.sibling}function ln(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ta(4,t,t.return),ln(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&_d(t,t.return,a),ln(t);break;case 27:Ol(t.stateNode);case 26:case 5:Gt(t,t.return),ln(t);break;case 22:t.memoizedState===null&&ln(t);break;case 30:ln(t);break;default:ln(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:ca(l,i,a),zl(4,i);break;case 1:if(ca(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){je(n,n.return,C)}if(n=i,l=n.updateQueue,l!==null){var d=n.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Su(x[l],d)}catch(C){je(n,n.return,C)}}a&&s&64&&Dd(i),Cl(i,i.return);break;case 27:Hd(i);case 26:case 5:ca(l,i,a),a&&n===null&&s&4&&Od(i),Cl(i,i.return);break;case 12:ca(l,i,a);break;case 31:ca(l,i,a),a&&s&4&&Gd(l,i);break;case 13:ca(l,i,a),a&&s&4&&Xd(l,i);break;case 22:i.memoizedState===null&&ca(l,i,a),Cl(i,i.return);break;case 30:break;default:ca(l,i,a)}t=t.sibling}}function as(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&pl(a))}function ns(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e))}function Ht(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vd(e,t,a,n),t=t.sibling}function Vd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,a,n),l&2048&&zl(9,t);break;case 1:Ht(e,t,a,n);break;case 3:Ht(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e)));break;case 12:if(l&2048){Ht(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,d=i.onPostCommit;typeof d=="function"&&d(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){je(t,t.return,x)}}else Ht(e,t,a,n);break;case 31:Ht(e,t,a,n);break;case 13:Ht(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Ht(e,t,a,n):Tl(e,t):i._visibility&2?Ht(e,t,a,n):(i._visibility|=2,Dn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&as(s,t);break;case 24:Ht(e,t,a,n),l&2048&&ns(t.alternate,t);break;default:Ht(e,t,a,n)}}function Dn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,d=a,x=n,C=s.flags;switch(s.tag){case 0:case 11:case 15:Dn(i,s,d,x,l),zl(8,s);break;case 23:break;case 22:var R=s.stateNode;s.memoizedState!==null?R._visibility&2?Dn(i,s,d,x,l):Tl(i,s):(R._visibility|=2,Dn(i,s,d,x,l)),l&&C&2048&&as(s.alternate,s);break;case 24:Dn(i,s,d,x,l),l&&C&2048&&ns(s.alternate,s);break;default:Dn(i,s,d,x,l)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Tl(a,n),l&2048&&as(n.alternate,n);break;case 24:Tl(a,n),l&2048&&ns(n.alternate,n);break;default:Tl(a,n)}t=t.sibling}}var Al=8192;function _n(e,t,a){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Kd(e,t,a),e=e.sibling}function Kd(e,t,a){switch(e.tag){case 26:_n(e,t,a),e.flags&Al&&e.memoizedState!==null&&c0(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:_n(e,t,a);break;case 3:case 4:var n=Ut;Ut=nr(e.stateNode.containerInfo),_n(e,t,a),Ut=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Al,Al=16777216,_n(e,t,a),Al=n):_n(e,t,a));break;default:_n(e,t,a)}}function Jd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Wd(n,e)}Jd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$d(e),e=e.sibling}function $d(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xi(e)):kl(e);break;default:kl(e)}}function Xi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Je=n,Wd(n,e)}Jd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ta(8,t,t.return),Xi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Xi(t));break;default:Xi(t)}e=e.sibling}}function Wd(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:Ta(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:pl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Je=n;else e:for(a=e;Je!==null;){n=Je;var l=n.sibling,i=n.return;if(qd(n),n===a){Je=null;break e}if(l!==null){l.return=i,Je=l;break e}Je=i}}}var Eh={getCacheForType:function(e){var t=et(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return et(Ye).controller.signal}},Nh=typeof WeakMap=="function"?WeakMap:Map,xe=0,ze=null,se=null,ue=0,ye=0,wt=null,Aa=!1,On=!1,ls=!1,ua=0,Oe=0,ka=0,rn=0,is=0,St=0,Un=0,Bl=null,ft=null,rs=!1,Qi=0,Id=0,Zi=1/0,Vi=null,Ba=null,Ze=0,Ra=null,Hn=null,da=0,os=0,ss=null,Pd=null,Rl=0,cs=null;function Et(){return(xe&2)!==0&&ue!==0?ue&-ue:k.T!==null?hs():hc()}function ef(){if(St===0)if((ue&536870912)===0||pe){var e=ti;ti<<=1,(ti&3932160)===0&&(ti=262144),St=e}else St=536870912;return e=yt.current,e!==null&&(e.flags|=32),St}function pt(e,t,a){(e===ze&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Ln(e,0),Ma(e,ue,St,!1)),Pn(e,a),((xe&2)===0||e!==ze)&&(e===ze&&((xe&2)===0&&(rn|=a),Oe===4&&Ma(e,ue,St,!1)),Xt(e))}function tf(e,t,a){if((xe&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||In(e,t),l=n?Th(e,t):ds(e,t,!0),i=n;do{if(l===0){On&&!n&&Ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!zh(a)){l=ds(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var d=e;l=Bl;var x=d.current.memoizedState.isDehydrated;if(x&&(Ln(d,s).flags|=256),s=ds(d,s,!1),s!==2){if(ls&&!x){d.errorRecoveryDisabledLanes|=i,rn|=i,l=4;break e}i=ft,ft=l,i!==null&&(ft===null?ft=i:ft.push.apply(ft,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){Ln(e,0),Ma(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ma(n,t,St,!Aa);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Qi+300-ht(),10<l)){if(Ma(n,t,St,!Aa),ni(n,0,!0)!==0)break e;da=t,n.timeoutHandle=Mf(af.bind(null,n,a,ft,Vi,rs,t,St,rn,Un,Aa,i,"Throttled",-0,0),l);break e}af(n,a,ft,Vi,rs,t,St,rn,Un,Aa,i,null,-0,0)}}break}while(!0);Xt(e)}function af(e,t,a,n,l,i,s,d,x,C,R,U,T,A){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Kd(t,i,U);var K=(i&62914560)===i?Qi-ht():(i&4194048)===i?Id-ht():0;if(K=u0(U,K),K!==null){da=i,e.cancelPendingCommit=K(df.bind(null,e,t,i,a,n,l,s,d,x,R,U,null,T,A)),Ma(e,i,s,!C);return}}df(e,t,i,a,n,l,s,d,x)}function zh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!vt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ma(e,t,a,n){t&=~is,t&=~rn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-xt(l),s=1<<i;n[i]=-1,l&=~s}a!==0&&fc(e,a,t)}function Ki(){return(xe&6)===0?(Ml(0),!1):!0}function us(){if(se!==null){if(ye===0)var e=se.return;else e=se,ea=$a=null,zo(e),An=null,hl=0,e=se;for(;e!==null;)Md(e.alternate,e),e=e.return;se=null}}function Ln(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,us(),ze=e,se=a=It(e.current,null),ue=t,ye=0,wt=null,Aa=!1,On=In(e,t),ls=!1,Un=St=is=rn=ka=Oe=0,ft=Bl=null,rs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-xt(n),i=1<<l;t|=e[l],n&=~i}return ua=t,hi(),a}function nf(e,t){le=null,k.H=Sl,t===Tn||t===Si?(t=bu(),ye=3):t===mo?(t=bu(),ye=4):ye=t===Fo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,se===null&&(Oe=1,Ui(e,Tt(t,e.current)))}function lf(){var e=yt.current;return e===null?!0:(ue&4194048)===ue?Rt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Rt:!1}function rf(){var e=k.H;return k.H=Sl,e===null?Sl:e}function of(){var e=k.A;return k.A=Eh,e}function Ji(){Oe=4,Aa||(ue&4194048)!==ue&&yt.current!==null||(On=!0),(ka&134217727)===0&&(rn&134217727)===0||ze===null||Ma(ze,ue,St,!1)}function ds(e,t,a){var n=xe;xe|=2;var l=rf(),i=of();(ze!==e||ue!==t)&&(Vi=null,Ln(e,t)),t=!1;var s=Oe;e:do try{if(ye!==0&&se!==null){var d=se,x=wt;switch(ye){case 8:us(),s=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var C=ye;if(ye=0,wt=null,Yn(e,d,x,C),a&&On){s=0;break e}break;default:C=ye,ye=0,wt=null,Yn(e,d,x,C)}}Ch(),s=Oe;break}catch(R){nf(e,R)}while(!0);return t&&e.shellSuspendCounter++,ea=$a=null,xe=n,k.H=l,k.A=i,se===null&&(ze=null,ue=0,hi()),s}function Ch(){for(;se!==null;)sf(se)}function Th(e,t){var a=xe;xe|=2;var n=rf(),l=of();ze!==e||ue!==t?(Vi=null,Zi=ht()+500,Ln(e,t)):On=In(e,t);e:do try{if(ye!==0&&se!==null){t=se;var i=wt;t:switch(ye){case 1:ye=0,wt=null,Yn(e,t,i,1);break;case 2:case 9:if(xu(i)){ye=0,wt=null,cf(t);break}t=function(){ye!==2&&ye!==9||ze!==e||(ye=7),Xt(e)},i.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:xu(i)?(ye=0,wt=null,cf(t)):(ye=0,wt=null,Yn(e,t,i,7));break;case 5:var s=null;switch(se.tag){case 26:s=se.memoizedState;case 5:case 27:var d=se;if(s?Kf(s):d.stateNode.complete){ye=0,wt=null;var x=d.sibling;if(x!==null)se=x;else{var C=d.return;C!==null?(se=C,$i(C)):se=null}break t}}ye=0,wt=null,Yn(e,t,i,5);break;case 6:ye=0,wt=null,Yn(e,t,i,6);break;case 8:us(),Oe=6;break e;default:throw Error(c(462))}}Ah();break}catch(R){nf(e,R)}while(!0);return ea=$a=null,k.H=n,k.A=l,xe=a,se!==null?0:(ze=null,ue=0,hi(),Oe)}function Ah(){for(;se!==null&&!Ip();)sf(se)}function sf(e){var t=Bd(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?$i(e):se=t}function cf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Nd(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=Nd(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:zo(t);default:Md(a,t),t=se=ru(t,ua),t=Bd(a,t,ua)}e.memoizedProps=e.pendingProps,t===null?$i(e):se=t}function Yn(e,t,a,n){ea=$a=null,zo(t),An=null,hl=0;var l=t.return;try{if(xh(e,l,t,a,ue)){Oe=1,Ui(e,Tt(a,e.current)),se=null;return}}catch(i){if(l!==null)throw se=l,i;Oe=1,Ui(e,Tt(a,e.current)),se=null;return}t.flags&32768?(pe||n===1?e=!0:On||(ue&536870912)!==0?e=!1:(Aa=e=!0,(n===2||n===9||n===3||n===6)&&(n=yt.current,n!==null&&n.tag===13&&(n.flags|=16384))),uf(t,e)):$i(t)}function $i(e){var t=e;do{if((t.flags&32768)!==0){uf(t,Aa);return}e=t.return;var a=yh(t.alternate,t,ua);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Oe===0&&(Oe=5)}function uf(e,t){do{var a=jh(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Oe=6,se=null}function df(e,t,a,n,l,i,s,d,x){e.cancelPendingCommit=null;do Wi();while(Ze!==0);if((xe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Ir,sm(e,a,i,s,d,x),e===ze&&(se=ze=null,ue=0),Hn=t,Ra=e,da=a,os=i,ss=l,Pd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mh(Pl,function(){return gf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null,l=H.p,H.p=2,s=xe,xe|=4;try{wh(e,t,a)}finally{xe=s,H.p=l,k.T=n}}Ze=1,ff(),pf(),mf()}}function ff(){if(Ze===1){Ze=0;var e=Ra,t=Hn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=k.T,k.T=null;var n=H.p;H.p=2;var l=xe;xe|=4;try{Qd(t,e);var i=Ss,s=Wc(e.containerInfo),d=i.focusedElem,x=i.selectionRange;if(s!==d&&d&&d.ownerDocument&&$c(d.ownerDocument.documentElement,d)){if(x!==null&&Vr(d)){var C=x.start,R=x.end;if(R===void 0&&(R=C),"selectionStart"in d)d.selectionStart=C,d.selectionEnd=Math.min(R,d.value.length);else{var U=d.ownerDocument||document,T=U&&U.defaultView||window;if(T.getSelection){var A=T.getSelection(),K=d.textContent.length,I=Math.min(x.start,K),Ee=x.end===void 0?I:Math.min(x.end,K);!A.extend&&I>Ee&&(s=Ee,Ee=I,I=s);var S=Jc(d,I),v=Jc(d,Ee);if(S&&v&&(A.rangeCount!==1||A.anchorNode!==S.node||A.anchorOffset!==S.offset||A.focusNode!==v.node||A.focusOffset!==v.offset)){var z=U.createRange();z.setStart(S.node,S.offset),A.removeAllRanges(),I>Ee?(A.addRange(z),A.extend(v.node,v.offset)):(z.setEnd(v.node,v.offset),A.addRange(z))}}}}for(U=[],A=d;A=A.parentNode;)A.nodeType===1&&U.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<U.length;d++){var D=U[d];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}cr=!!ws,Ss=ws=null}finally{xe=l,H.p=n,k.T=a}}e.current=t,Ze=2}}function pf(){if(Ze===2){Ze=0;var e=Ra,t=Hn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=k.T,k.T=null;var n=H.p;H.p=2;var l=xe;xe|=4;try{Yd(e,t.alternate,t)}finally{xe=l,H.p=n,k.T=a}}Ze=3}}function mf(){if(Ze===4||Ze===3){Ze=0,Pp();var e=Ra,t=Hn,a=da,n=Pd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Hn=Ra=null,hf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ba=null),Tr(a),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Wn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=k.T,l=H.p,H.p=2,k.T=null;try{for(var i=e.onRecoverableError,s=0;s<n.length;s++){var d=n[s];i(d.value,{componentStack:d.stack})}}finally{k.T=t,H.p=l}}(da&3)!==0&&Wi(),Xt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===cs?Rl++:(Rl=0,cs=e):Rl=0,Ml(0)}}function hf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pl(t)))}function Wi(){return ff(),pf(),mf(),gf()}function gf(){if(Ze!==5)return!1;var e=Ra,t=os;os=0;var a=Tr(da),n=k.T,l=H.p;try{H.p=32>a?32:a,k.T=null,a=ss,ss=null;var i=Ra,s=da;if(Ze=0,Hn=Ra=null,da=0,(xe&6)!==0)throw Error(c(331));var d=xe;if(xe|=4,$d(i.current),Vd(i,i.current,s,a),xe=d,Ml(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Wn,i)}catch{}return!0}finally{H.p=l,k.T=n,hf(e,t)}}function xf(e,t,a){t=Tt(a,t),t=qo(e.stateNode,t,2),e=Na(e,t,2),e!==null&&(Pn(e,2),Xt(e))}function je(e,t,a){if(e.tag===3)xf(e,e,a);else for(;t!==null;){if(t.tag===3){xf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ba===null||!Ba.has(n))){e=Tt(a,e),a=xd(2),n=Na(t,a,2),n!==null&&(vd(a,n,t,e),Pn(n,2),Xt(n));break}}t=t.return}}function fs(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Nh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(ls=!0,l.add(a),e=kh.bind(null,e,t,a),t.then(e,e))}function kh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(ue&a)===a&&(Oe===4||Oe===3&&(ue&62914560)===ue&&300>ht()-Qi?(xe&2)===0&&Ln(e,0):is|=a,Un===ue&&(Un=0)),Xt(e)}function vf(e,t){t===0&&(t=dc()),e=Va(e,t),e!==null&&(Pn(e,t),Xt(e))}function Bh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),vf(e,a)}function Rh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),vf(e,a)}function Mh(e,t){return ha(e,t)}var Ii=null,qn=null,ps=!1,Pi=!1,ms=!1,Da=0;function Xt(e){e!==qn&&e.next===null&&(qn===null?Ii=qn=e:qn=qn.next=e),Pi=!0,ps||(ps=!0,_h())}function Ml(e,t){if(!ms&&Pi){ms=!0;do for(var a=!1,n=Ii;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var s=n.suspendedLanes,d=n.pingedLanes;i=(1<<31-xt(42|e)+1)-1,i&=l&~(s&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,wf(n,i))}else i=ue,i=ni(n,n===ze?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||In(n,i)||(a=!0,wf(n,i));n=n.next}while(a);ms=!1}}function Dh(){bf()}function bf(){Pi=ps=!1;var e=0;Da!==0&&Qh()&&(e=Da);for(var t=ht(),a=null,n=Ii;n!==null;){var l=n.next,i=yf(n,t);i===0?(n.next=null,a===null?Ii=l:a.next=l,l===null&&(qn=a)):(a=n,(e!==0||(i&3)!==0)&&(Pi=!0)),n=l}Ze!==0&&Ze!==5||Ml(e),Da!==0&&(Da=0)}function yf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-xt(i),d=1<<s,x=l[s];x===-1?((d&a)===0||(d&n)!==0)&&(l[s]=om(d,t)):x<=t&&(e.expiredLanes|=d),i&=~d}if(t=ze,a=ue,a=ni(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&$n(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||In(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&$n(n),Tr(a)){case 2:case 8:a=cc;break;case 32:a=Pl;break;case 268435456:a=uc;break;default:a=Pl}return n=jf.bind(null,e),a=ha(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&$n(n),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wi()&&e.callbackNode!==a)return null;var n=ue;return n=ni(e,e===ze?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(tf(e,n,t),yf(e,ht()),e.callbackNode!=null&&e.callbackNode===a?jf.bind(null,e):null)}function wf(e,t){if(Wi())return null;tf(e,t,!0)}function _h(){Vh(function(){(xe&6)!==0?ha(sc,Dh):bf()})}function hs(){if(Da===0){var e=zn;e===0&&(e=ei,ei<<=1,(ei&261888)===0&&(ei=256)),Da=e}return Da}function Sf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oi(""+e)}function Ef(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Oh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Sf((l[ot]||null).action),s=n.submitter;s&&(t=(t=s[ot]||null)?Sf(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var d=new di("action","action",null,n,l);e.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Da!==0){var x=s?Ef(l,s):new FormData(l);_o(a,{pending:!0,data:x,method:l.method,action:i},null,x)}}else typeof i=="function"&&(d.preventDefault(),x=s?Ef(l,s):new FormData(l),_o(a,{pending:!0,data:x,method:l.method,action:i},i,x))},currentTarget:l}]})}}for(var gs=0;gs<Wr.length;gs++){var xs=Wr[gs],Uh=xs.toLowerCase(),Hh=xs[0].toUpperCase()+xs.slice(1);Ot(Uh,"on"+Hh)}Ot(eu,"onAnimationEnd"),Ot(tu,"onAnimationIteration"),Ot(au,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(eh,"onTransitionRun"),Ot(th,"onTransitionStart"),Ot(ah,"onTransitionCancel"),Ot(nu,"onTransitionEnd"),fn("onMouseEnter",["mouseout","mouseover"]),fn("onMouseLeave",["mouseout","mouseover"]),fn("onPointerEnter",["pointerout","pointerover"]),fn("onPointerLeave",["pointerout","pointerover"]),Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));function Nf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var d=n[s],x=d.instance,C=d.currentTarget;if(d=d.listener,x!==i&&l.isPropagationStopped())break e;i=d,l.currentTarget=C;try{i(l)}catch(R){mi(R)}l.currentTarget=null,i=x}else for(s=0;s<n.length;s++){if(d=n[s],x=d.instance,C=d.currentTarget,d=d.listener,x!==i&&l.isPropagationStopped())break e;i=d,l.currentTarget=C;try{i(l)}catch(R){mi(R)}l.currentTarget=null,i=x}}}}function ce(e,t){var a=t[Ar];a===void 0&&(a=t[Ar]=new Set);var n=e+"__bubble";a.has(n)||(zf(t,e,2,!1),a.add(n))}function vs(e,t,a){var n=0;t&&(n|=4),zf(a,e,n,t)}var er="_reactListening"+Math.random().toString(36).slice(2);function bs(e){if(!e[er]){e[er]=!0,vc.forEach(function(a){a!=="selectionchange"&&(Lh.has(a)||vs(a,!1,e),vs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[er]||(t[er]=!0,vs("selectionchange",!1,t))}}function zf(e,t,a,n){switch(tp(t)){case 2:var l=p0;break;case 8:l=m0;break;default:l=Ds}a=l.bind(null,t,a,e),l=void 0,!Hr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function ys(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var d=n.stateNode.containerInfo;if(d===l)break;if(s===4)for(s=n.return;s!==null;){var x=s.tag;if((x===3||x===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;d!==null;){if(s=cn(d),s===null)return;if(x=s.tag,x===5||x===6||x===26||x===27){n=i=s;continue e}d=d.parentNode}}n=n.return}kc(function(){var C=i,R=Or(a),U=[];e:{var T=lu.get(e);if(T!==void 0){var A=di,K=e;switch(e){case"keypress":if(ci(a)===0)break e;case"keydown":case"keyup":A=Rm;break;case"focusin":K="focus",A=Fr;break;case"focusout":K="blur",A=Fr;break;case"beforeblur":case"afterblur":A=Fr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=_m;break;case eu:case tu:case au:A=Sm;break;case nu:A=Um;break;case"scroll":case"scrollend":A=vm;break;case"wheel":A=Lm;break;case"copy":case"cut":case"paste":A=Nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=_c;break;case"toggle":case"beforetoggle":A=qm}var I=(t&4)!==0,Ee=!I&&(e==="scroll"||e==="scrollend"),S=I?T!==null?T+"Capture":null:T;I=[];for(var v=C,z;v!==null;){var D=v;if(z=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||z===null||S===null||(D=al(v,S),D!=null&&I.push(_l(v,D,z))),Ee)break;v=v.return}0<I.length&&(T=new A(T,K,null,a,R),U.push({event:T,listeners:I}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&a!==_r&&(K=a.relatedTarget||a.fromElement)&&(cn(K)||K[sn]))break e;if((A||T)&&(T=R.window===R?R:(T=R.ownerDocument)?T.defaultView||T.parentWindow:window,A?(K=a.relatedTarget||a.toElement,A=C,K=K?cn(K):null,K!==null&&(Ee=m(K),I=K.tag,K!==Ee||I!==5&&I!==27&&I!==6)&&(K=null)):(A=null,K=C),A!==K)){if(I=Mc,D="onMouseLeave",S="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(I=_c,D="onPointerLeave",S="onPointerEnter",v="pointer"),Ee=A==null?T:tl(A),z=K==null?T:tl(K),T=new I(D,v+"leave",A,a,R),T.target=Ee,T.relatedTarget=z,D=null,cn(R)===C&&(I=new I(S,v+"enter",K,a,R),I.target=z,I.relatedTarget=Ee,D=I),Ee=D,A&&K)t:{for(I=Yh,S=A,v=K,z=0,D=S;D;D=I(D))z++;D=0;for(var W=v;W;W=I(W))D++;for(;0<z-D;)S=I(S),z--;for(;0<D-z;)v=I(v),D--;for(;z--;){if(S===v||v!==null&&S===v.alternate){I=S;break t}S=I(S),v=I(v)}I=null}else I=null;A!==null&&Cf(U,T,A,I,!1),K!==null&&Ee!==null&&Cf(U,Ee,K,I,!0)}}e:{if(T=C?tl(C):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var he=Gc;else if(qc(T))if(Xc)he=Wm;else{he=Jm;var J=Km}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?C&&Dr(C.elementType)&&(he=Gc):he=$m;if(he&&(he=he(e,C))){Fc(U,he,a,R);break e}J&&J(e,T,C),e==="focusout"&&C&&T.type==="number"&&C.memoizedProps.value!=null&&Mr(T,"number",T.value)}switch(J=C?tl(C):window,e){case"focusin":(qc(J)||J.contentEditable==="true")&&(vn=J,Kr=C,ul=null);break;case"focusout":ul=Kr=vn=null;break;case"mousedown":Jr=!0;break;case"contextmenu":case"mouseup":case"dragend":Jr=!1,Ic(U,a,R);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":Ic(U,a,R)}var ie;if(Xr)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else xn?Lc(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Oc&&a.locale!=="ko"&&(xn||de!=="onCompositionStart"?de==="onCompositionEnd"&&xn&&(ie=Bc()):(va=R,Lr="value"in va?va.value:va.textContent,xn=!0)),J=tr(C,de),0<J.length&&(de=new Dc(de,e,null,a,R),U.push({event:de,listeners:J}),ie?de.data=ie:(ie=Yc(a),ie!==null&&(de.data=ie)))),(ie=Gm?Xm(e,a):Qm(e,a))&&(de=tr(C,"onBeforeInput"),0<de.length&&(J=new Dc("onBeforeInput","beforeinput",null,a,R),U.push({event:J,listeners:de}),J.data=ie)),Oh(U,e,C,a,R)}Nf(U,t)})}function _l(e,t,a){return{instance:e,listener:t,currentTarget:a}}function tr(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=al(e,a),l!=null&&n.unshift(_l(e,l,i)),l=al(e,t),l!=null&&n.push(_l(e,l,i))),e.tag===3)return n;e=e.return}return[]}function Yh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cf(e,t,a,n,l){for(var i=t._reactName,s=[];a!==null&&a!==n;){var d=a,x=d.alternate,C=d.stateNode;if(d=d.tag,x!==null&&x===n)break;d!==5&&d!==26&&d!==27||C===null||(x=C,l?(C=al(a,i),C!=null&&s.unshift(_l(a,C,x))):l||(C=al(a,i),C!=null&&s.push(_l(a,C,x)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var qh=/\r\n?/g,Fh=/\u0000|\uFFFD/g;function Tf(e){return(typeof e=="string"?e:""+e).replace(qh,`
`).replace(Fh,"")}function Af(e,t){return t=Tf(t),Tf(e)===t}function Se(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||mn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&mn(e,""+n);break;case"className":ii(e,"class",n);break;case"tabIndex":ii(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(e,a,n);break;case"style":Tc(e,n,i);break;case"data":if(t!=="object"){ii(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=oi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Se(e,t,"name",l.name,l,null),Se(e,t,"formEncType",l.formEncType,l,null),Se(e,t,"formMethod",l.formMethod,l,null),Se(e,t,"formTarget",l.formTarget,l,null)):(Se(e,t,"encType",l.encType,l,null),Se(e,t,"method",l.method,l,null),Se(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=oi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=$t);break;case"onScroll":n!=null&&ce("scroll",e);break;case"onScrollEnd":n!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=oi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ce("beforetoggle",e),ce("toggle",e),li(e,"popover",n);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":li(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gm.get(a)||a,li(e,a,n))}}function js(e,t,a,n,l,i){switch(a){case"style":Tc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?mn(e,n):(typeof n=="number"||typeof n=="bigint")&&mn(e,""+n);break;case"onScroll":n!=null&&ce("scroll",e);break;case"onScrollEnd":n!=null&&ce("scrollend",e);break;case"onClick":n!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[ot]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):li(e,a,n)}}}function at(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,i,s,a,null)}}l&&Se(e,t,"srcSet",a.srcSet,a,null),n&&Se(e,t,"src",a.src,a,null);return;case"input":ce("invalid",e);var d=i=s=l=null,x=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var R=a[n];if(R!=null)switch(n){case"name":l=R;break;case"type":s=R;break;case"checked":x=R;break;case"defaultChecked":C=R;break;case"value":i=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Se(e,t,n,R,a,null)}}Ec(e,i,d,x,C,s,l,!1);return;case"select":ce("invalid",e),n=s=i=null;for(l in a)if(a.hasOwnProperty(l)&&(d=a[l],d!=null))switch(l){case"value":i=d;break;case"defaultValue":s=d;break;case"multiple":n=d;default:Se(e,t,l,d,a,null)}t=i,a=s,e.multiple=!!n,t!=null?pn(e,!!n,t,!1):a!=null&&pn(e,!!n,a,!0);return;case"textarea":ce("invalid",e),i=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":n=d;break;case"defaultValue":l=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Se(e,t,s,d,a,null)}zc(e,n,l,i);return;case"option":for(x in a)a.hasOwnProperty(x)&&(n=a[x],n!=null)&&(x==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Se(e,t,x,n,a,null));return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(n=0;n<Dl.length;n++)ce(Dl[n],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,C,n,a,null)}return;default:if(Dr(t)){for(R in a)a.hasOwnProperty(R)&&(n=a[R],n!==void 0&&js(e,t,R,n,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null&&Se(e,t,d,n,a,null))}function Gh(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,d=null,x=null,C=null,R=null;for(A in a){var U=a[A];if(a.hasOwnProperty(A)&&U!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":x=U;default:n.hasOwnProperty(A)||Se(e,t,A,null,n,U)}}for(var T in n){var A=n[T];if(U=a[T],n.hasOwnProperty(T)&&(A!=null||U!=null))switch(T){case"type":i=A;break;case"name":l=A;break;case"checked":C=A;break;case"defaultChecked":R=A;break;case"value":s=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:A!==U&&Se(e,t,T,A,n,U)}}Rr(e,s,d,x,C,R,i,l);return;case"select":A=s=d=T=null;for(i in a)if(x=a[i],a.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":A=x;default:n.hasOwnProperty(i)||Se(e,t,i,null,n,x)}for(l in n)if(i=n[l],x=a[l],n.hasOwnProperty(l)&&(i!=null||x!=null))switch(l){case"value":T=i;break;case"defaultValue":d=i;break;case"multiple":s=i;default:i!==x&&Se(e,t,l,i,n,x)}t=d,a=s,n=A,T!=null?pn(e,!!a,T,!1):!!n!=!!a&&(t!=null?pn(e,!!a,t,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":A=T=null;for(d in a)if(l=a[d],a.hasOwnProperty(d)&&l!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Se(e,t,d,null,n,l)}for(s in n)if(l=n[s],i=a[s],n.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":T=l;break;case"defaultValue":A=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&Se(e,t,s,l,n,i)}Nc(e,T,A);return;case"option":for(var K in a)T=a[K],a.hasOwnProperty(K)&&T!=null&&!n.hasOwnProperty(K)&&(K==="selected"?e.selected=!1:Se(e,t,K,null,n,T));for(x in n)T=n[x],A=a[x],n.hasOwnProperty(x)&&T!==A&&(T!=null||A!=null)&&(x==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":Se(e,t,x,T,n,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in a)T=a[I],a.hasOwnProperty(I)&&T!=null&&!n.hasOwnProperty(I)&&Se(e,t,I,null,n,T);for(C in n)if(T=n[C],A=a[C],n.hasOwnProperty(C)&&T!==A&&(T!=null||A!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:Se(e,t,C,T,n,A)}return;default:if(Dr(t)){for(var Ee in a)T=a[Ee],a.hasOwnProperty(Ee)&&T!==void 0&&!n.hasOwnProperty(Ee)&&js(e,t,Ee,void 0,n,T);for(R in n)T=n[R],A=a[R],!n.hasOwnProperty(R)||T===A||T===void 0&&A===void 0||js(e,t,R,T,n,A);return}}for(var S in a)T=a[S],a.hasOwnProperty(S)&&T!=null&&!n.hasOwnProperty(S)&&Se(e,t,S,null,n,T);for(U in n)T=n[U],A=a[U],!n.hasOwnProperty(U)||T===A||T==null&&A==null||Se(e,t,U,T,n,A)}function kf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,s=l.initiatorType,d=l.duration;if(i&&d&&kf(s)){for(s=0,d=l.responseEnd,n+=1;n<a.length;n++){var x=a[n],C=x.startTime;if(C>d)break;var R=x.transferSize,U=x.initiatorType;R&&kf(U)&&(x=x.responseEnd,s+=R*(x<d?1:(d-C)/(x-C)))}if(--n,t+=8*(i+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ws=null,Ss=null;function ar(e){return e.nodeType===9?e:e.ownerDocument}function Bf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ns=null;function Qh(){var e=window.event;return e&&e.type==="popstate"?e===Ns?!1:(Ns=e,!0):(Ns=null,!1)}var Mf=typeof setTimeout=="function"?setTimeout:void 0,Zh=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,Vh=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(e){return Df.resolve(null).then(e).catch(Kh)}:Mf;function Kh(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function _f(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Qn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Ol(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ol(a);for(var i=a.firstChild;i;){var s=i.nextSibling,d=i.nodeName;i[el]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&Ol(e.ownerDocument.body);a=l}while(a);Qn(t)}function Of(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function zs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zs(a),kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jh(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[el])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function $h(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mt(e.nextSibling),e===null))return null;return e}function Uf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function Cs(e){return e.data==="$?"||e.data==="$~"}function Ts(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var As=null;function Hf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Mt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Lf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Yf(e,t,a){switch(t=ar(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ol(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);kr(e)}var Dt=new Map,qf=new Set;function nr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=H.d;H.d={f:Ih,r:Ph,D:e0,C:t0,L:a0,m:n0,X:i0,S:l0,M:r0};function Ih(){var e=fa.f(),t=Ki();return e||t}function Ph(e){var t=un(e);t!==null&&t.tag===5&&t.type==="form"?nd(t):fa.r(e)}var Fn=typeof document>"u"?null:document;function Ff(e,t,a){var n=Fn;if(n&&typeof t=="string"&&t){var l=zt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),qf.has(l)||(qf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),at(t,"link",e),Ke(t),n.head.appendChild(t)))}}function e0(e){fa.D(e),Ff("dns-prefetch",e,null)}function t0(e,t){fa.C(e,t),Ff("preconnect",e,t)}function a0(e,t,a){fa.L(e,t,a);var n=Fn;if(n&&e&&t){var l='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+zt(a.imageSizes)+'"]')):l+='[href="'+zt(e)+'"]';var i=l;switch(t){case"style":i=Gn(e);break;case"script":i=Xn(e)}Dt.has(i)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Dt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Ul(i))||t==="script"&&n.querySelector(Hl(i))||(t=n.createElement("link"),at(t,"link",e),Ke(t),n.head.appendChild(t)))}}function n0(e,t){fa.m(e,t);var a=Fn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+zt(n)+'"][href="'+zt(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Xn(e)}if(!Dt.has(i)&&(e=y({rel:"modulepreload",href:e},t),Dt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Hl(i)))return}n=a.createElement("link"),at(n,"link",e),Ke(n),a.head.appendChild(n)}}}function l0(e,t,a){fa.S(e,t,a);var n=Fn;if(n&&e){var l=dn(n).hoistableStyles,i=Gn(e);t=t||"default";var s=l.get(i);if(!s){var d={loading:0,preload:null};if(s=n.querySelector(Ul(i)))d.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Dt.get(i))&&ks(e,a);var x=s=n.createElement("link");Ke(x),at(x,"link",e),x._p=new Promise(function(C,R){x.onload=C,x.onerror=R}),x.addEventListener("load",function(){d.loading|=1}),x.addEventListener("error",function(){d.loading|=2}),d.loading|=4,lr(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:d},l.set(i,s)}}}function i0(e,t){fa.X(e,t);var a=Fn;if(a&&e){var n=dn(a).hoistableScripts,l=Xn(e),i=n.get(l);i||(i=a.querySelector(Hl(l)),i||(e=y({src:e,async:!0},t),(t=Dt.get(l))&&Bs(e,t),i=a.createElement("script"),Ke(i),at(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function r0(e,t){fa.M(e,t);var a=Fn;if(a&&e){var n=dn(a).hoistableScripts,l=Xn(e),i=n.get(l);i||(i=a.querySelector(Hl(l)),i||(e=y({src:e,async:!0,type:"module"},t),(t=Dt.get(l))&&Bs(e,t),i=a.createElement("script"),Ke(i),at(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Gf(e,t,a,n){var l=(l=re.current)?nr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Gn(a.href),a=dn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gn(a.href);var i=dn(l).hoistableStyles,s=i.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=l.querySelector(Ul(e)))&&!i._p&&(s.instance=i,s.state.loading=5),Dt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dt.set(e,a),i||o0(l,e,a,s.state))),t&&n===null)throw Error(c(528,""));return s}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xn(a),a=dn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Gn(e){return'href="'+zt(e)+'"'}function Ul(e){return'link[rel="stylesheet"]['+e+"]"}function Xf(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function o0(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),at(t,"link",a),Ke(t),e.head.appendChild(t))}function Xn(e){return'[src="'+zt(e)+'"]'}function Hl(e){return"script[async]"+e}function Qf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+zt(a.href)+'"]');if(n)return t.instance=n,Ke(n),n;var l=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ke(n),at(n,"style",l),lr(n,a.precedence,e),t.instance=n;case"stylesheet":l=Gn(a.href);var i=e.querySelector(Ul(l));if(i)return t.state.loading|=4,t.instance=i,Ke(i),i;n=Xf(a),(l=Dt.get(l))&&ks(n,l),i=(e.ownerDocument||e).createElement("link"),Ke(i);var s=i;return s._p=new Promise(function(d,x){s.onload=d,s.onerror=x}),at(i,"link",n),t.state.loading|=4,lr(i,a.precedence,e),t.instance=i;case"script":return i=Xn(a.src),(l=e.querySelector(Hl(i)))?(t.instance=l,Ke(l),l):(n=a,(l=Dt.get(i))&&(n=y({},a),Bs(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ke(l),at(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,lr(n,a.precedence,e));return t.instance}function lr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,s=0;s<n.length;s++){var d=n[s];if(d.dataset.precedence===t)i=d;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ir=null;function Zf(e,t,a){if(ir===null){var n=new Map,l=ir=new Map;l.set(a,n)}else l=ir,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[el]||i[Ie]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var d=n.get(s);d?d.push(i):n.set(s,[i])}}return n}function Vf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function s0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Kf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function c0(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Gn(n.href),i=t.querySelector(Ul(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=rr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ke(i);return}i=t.ownerDocument||t,n=Xf(n),(l=Dt.get(l))&&ks(n,l),i=i.createElement("link"),Ke(i);var s=i;s._p=new Promise(function(d,x){s.onload=d,s.onerror=x}),at(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=rr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Rs=0;function u0(e,t){return e.stylesheets&&e.count===0&&sr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&sr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Rs===0&&(Rs=62500*Xh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Rs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function rr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var or=null;function sr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,or=new Map,t.forEach(d0,e),or=null,rr.call(e))}function d0(e,t){if(!(t.state.loading&4)){var a=or.get(e);if(a)var n=a.get(null);else{a=new Map,or.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),i=a.get(s)||n,i===n&&a.set(null,l),a.set(s,l),this.count++,n=rr.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ll={$$typeof:X,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function f0(e,t,a,n,l,i,s,d,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zr(0),this.hiddenUpdates=zr(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Jf(e,t,a,n,l,i,s,d,x,C,R,U){return e=new f0(e,t,a,s,x,C,R,U,d),t=1,i===!0&&(t|=24),i=bt(3,null,null,t),e.current=i,i.stateNode=e,t=uo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},ho(i),e}function $f(e){return e?(e=jn,e):jn}function Wf(e,t,a,n,l,i){l=$f(l),n.context===null?n.context=l:n.pendingContext=l,n=Ea(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=Na(e,n,t),a!==null&&(pt(a,e,t),xl(a,e,t))}function If(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ms(e,t){If(e,t),(e=e.alternate)&&If(e,t)}function Pf(e){if(e.tag===13||e.tag===31){var t=Va(e,67108864);t!==null&&pt(t,e,67108864),Ms(e,67108864)}}function ep(e){if(e.tag===13||e.tag===31){var t=Et();t=Cr(t);var a=Va(e,t);a!==null&&pt(a,e,t),Ms(e,t)}}var cr=!0;function p0(e,t,a,n){var l=k.T;k.T=null;var i=H.p;try{H.p=2,Ds(e,t,a,n)}finally{H.p=i,k.T=l}}function m0(e,t,a,n){var l=k.T;k.T=null;var i=H.p;try{H.p=8,Ds(e,t,a,n)}finally{H.p=i,k.T=l}}function Ds(e,t,a,n){if(cr){var l=_s(n);if(l===null)ys(e,t,n,ur,a),ap(e,n);else if(g0(l,e,t,a,n))n.stopPropagation();else if(ap(e,n),t&4&&-1<h0.indexOf(e)){for(;l!==null;){var i=un(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Fa(i.pendingLanes);if(s!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var x=1<<31-xt(s);d.entanglements[1]|=x,s&=~x}Xt(i),(xe&6)===0&&(Zi=ht()+500,Ml(0))}}break;case 31:case 13:d=Va(i,2),d!==null&&pt(d,i,2),Ki(),Ms(i,2)}if(i=_s(n),i===null&&ys(e,t,n,ur,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else ys(e,t,n,null,a)}}function _s(e){return e=Or(e),Os(e)}var ur=null;function Os(e){if(ur=null,e=cn(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=N(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ur=e,null}function tp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(em()){case sc:return 2;case cc:return 8;case Pl:case tm:return 32;case uc:return 268435456;default:return 32}default:return 32}}var Us=!1,Oa=null,Ua=null,Ha=null,Yl=new Map,ql=new Map,La=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ap(e,t){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Yl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(t.pointerId)}}function Fl(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=un(t),t!==null&&Pf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function g0(e,t,a,n,l){switch(t){case"focusin":return Oa=Fl(Oa,e,t,a,n,l),!0;case"dragenter":return Ua=Fl(Ua,e,t,a,n,l),!0;case"mouseover":return Ha=Fl(Ha,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return Yl.set(i,Fl(Yl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,ql.set(i,Fl(ql.get(i)||null,e,t,a,n,l)),!0}return!1}function np(e){var t=cn(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,gc(e.priority,function(){ep(a)});return}}else if(t===31){if(t=N(a),t!==null){e.blockedOn=t,gc(e.priority,function(){ep(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=_s(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);_r=n,a.target.dispatchEvent(n),_r=null}else return t=un(a),t!==null&&Pf(t),e.blockedOn=a,!1;t.shift()}return!0}function lp(e,t,a){dr(e)&&a.delete(t)}function x0(){Us=!1,Oa!==null&&dr(Oa)&&(Oa=null),Ua!==null&&dr(Ua)&&(Ua=null),Ha!==null&&dr(Ha)&&(Ha=null),Yl.forEach(lp),ql.forEach(lp)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,x0)))}var pr=null;function ip(e){pr!==e&&(pr=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pr===e&&(pr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Os(n||a)===null)continue;break}var i=un(a);i!==null&&(e.splice(t,3),t-=3,_o(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Qn(e){function t(x){return fr(x,e)}Oa!==null&&fr(Oa,e),Ua!==null&&fr(Ua,e),Ha!==null&&fr(Ha,e),Yl.forEach(t),ql.forEach(t);for(var a=0;a<La.length;a++){var n=La[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)np(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],s=l[ot]||null;if(typeof i=="function")s||ip(a);else if(s){var d=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[ot]||null)d=s.formAction;else if(Os(l)!==null)continue}else d=s.action;typeof d=="function"?a[n+1]=d:(a.splice(n,3),n-=3),ip(a)}}}function rp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Hs(e){this._internalRoot=e}mr.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=Et();Wf(a,n,e,t,null,null)},mr.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wf(e.current,2,null,e,null,null),Ki(),t[sn]=null}};function mr(e){this._internalRoot=e}mr.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&np(e)}};var op=u.version;if(op!=="19.2.4")throw Error(c(527,op,"19.2.4"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var v0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hr.isDisabled&&hr.supportsFiber)try{Wn=hr.inject(v0),gt=hr}catch{}}return Xl.createRoot=function(e,t){if(!p(e))throw Error(c(299));var a=!1,n="",l=pd,i=md,s=hd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Jf(e,1,!1,null,null,a,n,null,l,i,s,rp),e[sn]=t.current,bs(e),new Hs(t)},Xl.hydrateRoot=function(e,t,a){if(!p(e))throw Error(c(299));var n=!1,l="",i=pd,s=md,d=hd,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=Jf(e,1,!0,t,a??null,n,l,x,i,s,d,rp),t.context=$f(null),a=t.current,n=Et(),n=Cr(n),l=Ea(n),l.callback=null,Na(a,l,n),a=n,t.current.lanes=a,Pn(t,a),Xt(t),e[sn]=t.current,bs(e),new mr(t)},Xl.version="19.2.4",Xl}var xp;function T0(){if(xp)return qs.exports;xp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),qs.exports=C0(),qs.exports}var A0=T0();var vp="popstate";function bp(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function k0(o={}){function u(p,m){let{pathname:g="/",search:N="",hash:b=""}=on(p.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Ws("",{pathname:g,search:N,hash:b},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(p,m){let g=p.document.querySelector("base"),N="";if(g&&g.getAttribute("href")){let b=p.location.href,h=b.indexOf("#");N=h===-1?b:b.slice(0,h)}return N+"#"+(typeof m=="string"?m:Kl(m))}function c(p,m){Lt(p.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return R0(u,f,c,o)}function Re(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Lt(o,u){if(!o){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function B0(){return Math.random().toString(36).substring(2,10)}function yp(o,u){return{usr:o.state,key:o.key,idx:u,masked:o.unstable_mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function Ws(o,u,f=null,c,p){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof u=="string"?on(u):u,state:f,key:u&&u.key||c||B0(),unstable_mask:p}}function Kl({pathname:o="/",search:u="",hash:f=""}){return u&&u!=="?"&&(o+=u.charAt(0)==="?"?u:"?"+u),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function on(o){let u={};if(o){let f=o.indexOf("#");f>=0&&(u.hash=o.substring(f),o=o.substring(0,f));let c=o.indexOf("?");c>=0&&(u.search=o.substring(c),o=o.substring(0,c)),o&&(u.pathname=o)}return u}function R0(o,u,f,c={}){let{window:p=document.defaultView,v5Compat:m=!1}=c,g=p.history,N="POP",b=null,h=E();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function E(){return(g.state||{idx:null}).idx}function y(){N="POP";let M=E(),Y=M==null?null:M-h;h=M,b&&b({action:N,location:B.location,delta:Y})}function _(M,Y){N="PUSH";let F=bp(M)?M:Ws(B.location,M,Y);f&&f(F,M),h=E()+1;let X=yp(F,h),Q=B.createHref(F.unstable_mask||F);try{g.pushState(X,"",Q)}catch(fe){if(fe instanceof DOMException&&fe.name==="DataCloneError")throw fe;p.location.assign(Q)}m&&b&&b({action:N,location:B.location,delta:1})}function L(M,Y){N="REPLACE";let F=bp(M)?M:Ws(B.location,M,Y);f&&f(F,M),h=E();let X=yp(F,h),Q=B.createHref(F.unstable_mask||F);g.replaceState(X,"",Q),m&&b&&b({action:N,location:B.location,delta:0})}function G(M){return M0(M)}let B={get action(){return N},get location(){return o(p,g)},listen(M){if(b)throw new Error("A history only accepts one active listener");return p.addEventListener(vp,y),b=M,()=>{p.removeEventListener(vp,y),b=null}},createHref(M){return u(p,M)},createURL:G,encodeLocation(M){let Y=G(M);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:_,replace:L,go(M){return g.go(M)}};return B}function M0(o,u=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Re(f,"No window.location.(origin|href) available to create URL");let c=typeof o=="string"?o:Kl(o);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=f+c),new URL(c,f)}function Ap(o,u,f="/"){return D0(o,u,f,!1)}function D0(o,u,f,c){let p=typeof u=="string"?on(u):u,m=pa(p.pathname||"/",f);if(m==null)return null;let g=kp(o);_0(g);let N=null;for(let b=0;N==null&&b<g.length;++b){let h=Z0(m);N=X0(g[b],h,c)}return N}function kp(o,u=[],f=[],c="",p=!1){let m=(g,N,b=p,h)=>{let E={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:N,route:g};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(c)&&b)return;Re(E.relativePath.startsWith(c),`Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(c.length)}let y=Zt([c,E.relativePath]),_=f.concat(E);g.children&&g.children.length>0&&(Re(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),kp(g.children,u,_,y,b)),!(g.path==null&&!g.index)&&u.push({path:y,score:F0(y,g.index),routesMeta:_})};return o.forEach((g,N)=>{if(g.path===""||!g.path?.includes("?"))m(g,N);else for(let b of Bp(g.path))m(g,N,!0,b)}),u}function Bp(o){let u=o.split("/");if(u.length===0)return[];let[f,...c]=u,p=f.endsWith("?"),m=f.replace(/\?$/,"");if(c.length===0)return p?[m,""]:[m];let g=Bp(c.join("/")),N=[];return N.push(...g.map(b=>b===""?m:[m,b].join("/"))),p&&N.push(...g),N.map(b=>o.startsWith("/")&&b===""?"/":b)}function _0(o){o.sort((u,f)=>u.score!==f.score?f.score-u.score:G0(u.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var O0=/^:[\w-]+$/,U0=3,H0=2,L0=1,Y0=10,q0=-2,jp=o=>o==="*";function F0(o,u){let f=o.split("/"),c=f.length;return f.some(jp)&&(c+=q0),u&&(c+=H0),f.filter(p=>!jp(p)).reduce((p,m)=>p+(O0.test(m)?U0:m===""?L0:Y0),c)}function G0(o,u){return o.length===u.length&&o.slice(0,-1).every((c,p)=>c===u[p])?o[o.length-1]-u[u.length-1]:0}function X0(o,u,f=!1){let{routesMeta:c}=o,p={},m="/",g=[];for(let N=0;N<c.length;++N){let b=c[N],h=N===c.length-1,E=m==="/"?u:u.slice(m.length)||"/",y=yr({path:b.relativePath,caseSensitive:b.caseSensitive,end:h},E),_=b.route;if(!y&&h&&f&&!c[c.length-1].route.index&&(y=yr({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},E)),!y)return null;Object.assign(p,y.params),g.push({params:p,pathname:Zt([m,y.pathname]),pathnameBase:$0(Zt([m,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(m=Zt([m,y.pathnameBase]))}return g}function yr(o,u){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,c]=Q0(o.path,o.caseSensitive,o.end),p=u.match(f);if(!p)return null;let m=p[0],g=m.replace(/(.)\/+$/,"$1"),N=p.slice(1);return{params:c.reduce((h,{paramName:E,isOptional:y},_)=>{if(E==="*"){let G=N[_]||"";g=m.slice(0,m.length-G.length).replace(/(.)\/+$/,"$1")}const L=N[_];return y&&!L?h[E]=void 0:h[E]=(L||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:g,pattern:o}}function Q0(o,u=!1,f=!0){Lt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let c=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,N,b,h,E)=>{if(c.push({paramName:N,isOptional:b!=null}),b){let y=E.charAt(h+g.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(c.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),c]}function Z0(o){try{return o.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Lt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),o}}function pa(o,u){if(u==="/")return o;if(!o.toLowerCase().startsWith(u.toLowerCase()))return null;let f=u.endsWith("/")?u.length-1:u.length,c=o.charAt(f);return c&&c!=="/"?null:o.slice(f)||"/"}var V0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function K0(o,u="/"){let{pathname:f,search:c="",hash:p=""}=typeof o=="string"?on(o):o,m;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?m=wp(f.substring(1),"/"):m=wp(f,u)):m=u,{pathname:m,search:W0(c),hash:I0(p)}}function wp(o,u){let f=u.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?f.length>1&&f.pop():p!=="."&&f.push(p)}),f.length>1?f.join("/"):"/"}function Qs(o,u,f,c){return`Cannot include a '${o}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function J0(o){return o.filter((u,f)=>f===0||u.route.path&&u.route.path.length>0)}function Rp(o){let u=J0(o);return u.map((f,c)=>c===u.length-1?f.pathname:f.pathnameBase)}function ec(o,u,f,c=!1){let p;typeof o=="string"?p=on(o):(p={...o},Re(!p.pathname||!p.pathname.includes("?"),Qs("?","pathname","search",p)),Re(!p.pathname||!p.pathname.includes("#"),Qs("#","pathname","hash",p)),Re(!p.search||!p.search.includes("#"),Qs("#","search","hash",p)));let m=o===""||p.pathname==="",g=m?"/":p.pathname,N;if(g==null)N=f;else{let y=u.length-1;if(!c&&g.startsWith("..")){let _=g.split("/");for(;_[0]==="..";)_.shift(),y-=1;p.pathname=_.join("/")}N=y>=0?u[y]:"/"}let b=K0(p,N),h=g&&g!=="/"&&g.endsWith("/"),E=(m||g===".")&&f.endsWith("/");return!b.pathname.endsWith("/")&&(h||E)&&(b.pathname+="/"),b}var Zt=o=>o.join("/").replace(/\/\/+/g,"/"),$0=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),W0=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,I0=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,P0=class{constructor(o,u,f,c=!1){this.status=o,this.statusText=u||"",this.internal=c,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function eg(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function tg(o){return o.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Mp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dp(o,u){let f=o;if(typeof f!="string"||!V0.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let c=f,p=!1;if(Mp)try{let m=new URL(window.location.href),g=f.startsWith("//")?new URL(m.protocol+f):new URL(f),N=pa(g.pathname,u);g.origin===m.origin&&N!=null?f=N+g.search+g.hash:p=!0}catch{Lt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:p,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _p=["POST","PUT","PATCH","DELETE"];new Set(_p);var ag=["GET",..._p];new Set(ag);var Vn=w.createContext(null);Vn.displayName="DataRouter";var wr=w.createContext(null);wr.displayName="DataRouterState";var ng=w.createContext(!1),Op=w.createContext({isTransitioning:!1});Op.displayName="ViewTransition";var lg=w.createContext(new Map);lg.displayName="Fetchers";var ig=w.createContext(null);ig.displayName="Await";var _t=w.createContext(null);_t.displayName="Navigation";var Jl=w.createContext(null);Jl.displayName="Location";var Vt=w.createContext({outlet:null,matches:[],isDataRoute:!1});Vt.displayName="Route";var tc=w.createContext(null);tc.displayName="RouteError";var Up="REACT_ROUTER_ERROR",rg="REDIRECT",og="ROUTE_ERROR_RESPONSE";function sg(o){if(o.startsWith(`${Up}:${rg}:{`))try{let u=JSON.parse(o.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function cg(o){if(o.startsWith(`${Up}:${og}:{`))try{let u=JSON.parse(o.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new P0(u.status,u.statusText,u.data)}catch{}}function ug(o,{relative:u}={}){Re($l(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=w.useContext(_t),{hash:p,pathname:m,search:g}=Wl(o,{relative:u}),N=m;return f!=="/"&&(N=m==="/"?f:Zt([f,m])),c.createHref({pathname:N,search:g,hash:p})}function $l(){return w.useContext(Jl)!=null}function qa(){return Re($l(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Jl).location}var Hp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lp(o){w.useContext(_t).static||w.useLayoutEffect(o)}function mt(){let{isDataRoute:o}=w.useContext(Vt);return o?Eg():dg()}function dg(){Re($l(),"useNavigate() may be used only in the context of a <Router> component.");let o=w.useContext(Vn),{basename:u,navigator:f}=w.useContext(_t),{matches:c}=w.useContext(Vt),{pathname:p}=qa(),m=JSON.stringify(Rp(c)),g=w.useRef(!1);return Lp(()=>{g.current=!0}),w.useCallback((b,h={})=>{if(Lt(g.current,Hp),!g.current)return;if(typeof b=="number"){f.go(b);return}let E=ec(b,JSON.parse(m),p,h.relative==="path");o==null&&u!=="/"&&(E.pathname=E.pathname==="/"?u:Zt([u,E.pathname])),(h.replace?f.replace:f.push)(E,h.state,h)},[u,f,m,p,o])}w.createContext(null);function fg(){let{matches:o}=w.useContext(Vt),u=o[o.length-1];return u?u.params:{}}function Wl(o,{relative:u}={}){let{matches:f}=w.useContext(Vt),{pathname:c}=qa(),p=JSON.stringify(Rp(f));return w.useMemo(()=>ec(o,JSON.parse(p),c,u==="path"),[o,p,c,u])}function pg(o,u){return Yp(o,u)}function Yp(o,u,f){Re($l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=w.useContext(_t),{matches:p}=w.useContext(Vt),m=p[p.length-1],g=m?m.params:{},N=m?m.pathname:"/",b=m?m.pathnameBase:"/",h=m&&m.route;{let M=h&&h.path||"";Fp(N,!h||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${N}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let E=qa(),y;if(u){let M=typeof u=="string"?on(u):u;Re(b==="/"||M.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${M.pathname}" was given in the \`location\` prop.`),y=M}else y=E;let _=y.pathname||"/",L=_;if(b!=="/"){let M=b.replace(/^\//,"").split("/");L="/"+_.replace(/^\//,"").split("/").slice(M.length).join("/")}let G=Ap(o,{pathname:L});Lt(h||G!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Lt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=vg(G&&G.map(M=>Object.assign({},M,{params:Object.assign({},g,M.params),pathname:Zt([b,c.encodeLocation?c.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?b:Zt([b,c.encodeLocation?c.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),p,f);return u&&B?w.createElement(Jl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},B):B}function mg(){let o=Sg(),u=eg(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,c="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",o),g=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:m},"ErrorBoundary")," or"," ",w.createElement("code",{style:m},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},u),f?w.createElement("pre",{style:p},f):null,g)}var hg=w.createElement(mg,null),qp=class extends w.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,u){return u.location!==o.location||u.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:u.error,location:u.location,revalidation:o.revalidation||u.revalidation}}componentDidCatch(o,u){this.props.onError?this.props.onError(o,u):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const f=cg(o.digest);f&&(o=f)}let u=o!==void 0?w.createElement(Vt.Provider,{value:this.props.routeContext},w.createElement(tc.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?w.createElement(gg,{error:o},u):u}};qp.contextType=ng;var Zs=new WeakMap;function gg({children:o,error:u}){let{basename:f}=w.useContext(_t);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let c=sg(u.digest);if(c){let p=Zs.get(u);if(p)throw p;let m=Dp(c.location,f);if(Mp&&!Zs.get(u))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Zs.set(u,g),g}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return o}function xg({routeContext:o,match:u,children:f}){let c=w.useContext(Vn);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),w.createElement(Vt.Provider,{value:o},f)}function vg(o,u=[],f){let c=f?.state;if(o==null){if(!c)return null;if(c.errors)o=c.matches;else if(u.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let p=o,m=c?.errors;if(m!=null){let E=p.findIndex(y=>y.route.id&&m?.[y.route.id]!==void 0);Re(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,E+1))}let g=!1,N=-1;if(f&&c){g=c.renderFallback;for(let E=0;E<p.length;E++){let y=p[E];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(N=E),y.route.id){let{loaderData:_,errors:L}=c,G=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!L||L[y.route.id]===void 0);if(y.route.lazy||G){f.isStatic&&(g=!0),N>=0?p=p.slice(0,N+1):p=[p[0]];break}}}}let b=f?.onError,h=c&&b?(E,y)=>{b(E,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:tg(c.matches),errorInfo:y})}:void 0;return p.reduceRight((E,y,_)=>{let L,G=!1,B=null,M=null;c&&(L=m&&y.route.id?m[y.route.id]:void 0,B=y.route.errorElement||hg,g&&(N<0&&_===0?(Fp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,M=null):N===_&&(G=!0,M=y.route.hydrateFallbackElement||null)));let Y=u.concat(p.slice(0,_+1)),F=()=>{let X;return L?X=B:G?X=M:y.route.Component?X=w.createElement(y.route.Component,null):y.route.element?X=y.route.element:X=E,w.createElement(xg,{match:y,routeContext:{outlet:E,matches:Y,isDataRoute:c!=null},children:X})};return c&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?w.createElement(qp,{location:c.location,revalidation:c.revalidation,component:B,error:L,children:F(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:h}):F()},null)}function ac(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bg(o){let u=w.useContext(Vn);return Re(u,ac(o)),u}function yg(o){let u=w.useContext(wr);return Re(u,ac(o)),u}function jg(o){let u=w.useContext(Vt);return Re(u,ac(o)),u}function nc(o){let u=jg(o),f=u.matches[u.matches.length-1];return Re(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function wg(){return nc("useRouteId")}function Sg(){let o=w.useContext(tc),u=yg("useRouteError"),f=nc("useRouteError");return o!==void 0?o:u.errors?.[f]}function Eg(){let{router:o}=bg("useNavigate"),u=nc("useNavigate"),f=w.useRef(!1);return Lp(()=>{f.current=!0}),w.useCallback(async(p,m={})=>{Lt(f.current,Hp),f.current&&(typeof p=="number"?await o.navigate(p):await o.navigate(p,{fromRouteId:u,...m}))},[o,u])}var Sp={};function Fp(o,u,f){!u&&!Sp[o]&&(Sp[o]=!0,Lt(!1,f))}w.memo(Ng);function Ng({routes:o,future:u,state:f,isStatic:c,onError:p}){return Yp(o,void 0,{state:f,isStatic:c,onError:p})}function Qt(o){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zg({basename:o="/",children:u=null,location:f,navigationType:c="POP",navigator:p,static:m=!1,unstable_useTransitions:g}){Re(!$l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let N=o.replace(/^\/*/,"/"),b=w.useMemo(()=>({basename:N,navigator:p,static:m,unstable_useTransitions:g,future:{}}),[N,p,m,g]);typeof f=="string"&&(f=on(f));let{pathname:h="/",search:E="",hash:y="",state:_=null,key:L="default",unstable_mask:G}=f,B=w.useMemo(()=>{let M=pa(h,N);return M==null?null:{location:{pathname:M,search:E,hash:y,state:_,key:L,unstable_mask:G},navigationType:c}},[N,h,E,y,_,L,c,G]);return Lt(B!=null,`<Router basename="${N}"> is not able to match the URL "${h}${E}${y}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:w.createElement(_t.Provider,{value:b},w.createElement(Jl.Provider,{children:u,value:B}))}function Cg({children:o,location:u}){return pg(Is(o),u)}function Is(o,u=[]){let f=[];return w.Children.forEach(o,(c,p)=>{if(!w.isValidElement(c))return;let m=[...u,p];if(c.type===w.Fragment){f.push.apply(f,Is(c.props.children,m));return}Re(c.type===Qt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=Is(c.props.children,m)),f.push(g)}),f}var vr="get",br="application/x-www-form-urlencoded";function Sr(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Tg(o){return Sr(o)&&o.tagName.toLowerCase()==="button"}function Ag(o){return Sr(o)&&o.tagName.toLowerCase()==="form"}function kg(o){return Sr(o)&&o.tagName.toLowerCase()==="input"}function Bg(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Rg(o,u){return o.button===0&&(!u||u==="_self")&&!Bg(o)}var gr=null;function Mg(){if(gr===null)try{new FormData(document.createElement("form"),0),gr=!1}catch{gr=!0}return gr}var Dg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vs(o){return o!=null&&!Dg.has(o)?(Lt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${br}"`),null):o}function _g(o,u){let f,c,p,m,g;if(Ag(o)){let N=o.getAttribute("action");c=N?pa(N,u):null,f=o.getAttribute("method")||vr,p=Vs(o.getAttribute("enctype"))||br,m=new FormData(o)}else if(Tg(o)||kg(o)&&(o.type==="submit"||o.type==="image")){let N=o.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=o.getAttribute("formaction")||N.getAttribute("action");if(c=b?pa(b,u):null,f=o.getAttribute("formmethod")||N.getAttribute("method")||vr,p=Vs(o.getAttribute("formenctype"))||Vs(N.getAttribute("enctype"))||br,m=new FormData(N,o),!Mg()){let{name:h,type:E,value:y}=o;if(E==="image"){let _=h?`${h}.`:"";m.append(`${_}x`,"0"),m.append(`${_}y`,"0")}else h&&m.append(h,y)}}else{if(Sr(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=vr,c=null,p=br,g=o}return m&&p==="text/plain"&&(g=m,m=void 0),{action:c,method:f.toLowerCase(),encType:p,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lc(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Og(o,u,f,c){let p=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return f?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${c}`:p.pathname=`${p.pathname}.${c}`:p.pathname==="/"?p.pathname=`_root.${c}`:u&&pa(p.pathname,u)==="/"?p.pathname=`${u.replace(/\/$/,"")}/_root.${c}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${c}`,p}async function Ug(o,u){if(o.id in u)return u[o.id];try{let f=await import(o.module);return u[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Hg(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Lg(o,u,f){let c=await Promise.all(o.map(async p=>{let m=u.routes[p.route.id];if(m){let g=await Ug(m,f);return g.links?g.links():[]}return[]}));return Gg(c.flat(1).filter(Hg).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Ep(o,u,f,c,p,m){let g=(b,h)=>f[h]?b.route.id!==f[h].route.id:!0,N=(b,h)=>f[h].pathname!==b.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==b.params["*"];return m==="assets"?u.filter((b,h)=>g(b,h)||N(b,h)):m==="data"?u.filter((b,h)=>{let E=c.routes[b.route.id];if(!E||!E.hasLoader)return!1;if(g(b,h)||N(b,h))return!0;if(b.route.shouldRevalidate){let y=b.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Yg(o,u,{includeHydrateFallback:f}={}){return qg(o.map(c=>{let p=u.routes[c.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),f&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function qg(o){return[...new Set(o)]}function Fg(o){let u={},f=Object.keys(o).sort();for(let c of f)u[c]=o[c];return u}function Gg(o,u){let f=new Set;return new Set(u),o.reduce((c,p)=>{let m=JSON.stringify(Fg(p));return f.has(m)||(f.add(m),c.push({key:m,link:p})),c},[])}function Gp(){let o=w.useContext(Vn);return lc(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Xg(){let o=w.useContext(wr);return lc(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var ic=w.createContext(void 0);ic.displayName="FrameworkContext";function Xp(){let o=w.useContext(ic);return lc(o,"You must render this element inside a <HydratedRouter> element"),o}function Qg(o,u){let f=w.useContext(ic),[c,p]=w.useState(!1),[m,g]=w.useState(!1),{onFocus:N,onBlur:b,onMouseEnter:h,onMouseLeave:E,onTouchStart:y}=u,_=w.useRef(null);w.useEffect(()=>{if(o==="render"&&g(!0),o==="viewport"){let B=Y=>{Y.forEach(F=>{g(F.isIntersecting)})},M=new IntersectionObserver(B,{threshold:.5});return _.current&&M.observe(_.current),()=>{M.disconnect()}}},[o]),w.useEffect(()=>{if(c){let B=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(B)}}},[c]);let L=()=>{p(!0)},G=()=>{p(!1),g(!1)};return f?o!=="intent"?[m,_,{}]:[m,_,{onFocus:Ql(N,L),onBlur:Ql(b,G),onMouseEnter:Ql(h,L),onMouseLeave:Ql(E,G),onTouchStart:Ql(y,L)}]:[!1,_,{}]}function Ql(o,u){return f=>{o&&o(f),f.defaultPrevented||u(f)}}function Zg({page:o,...u}){let{router:f}=Gp(),c=w.useMemo(()=>Ap(f.routes,o,f.basename),[f.routes,o,f.basename]);return c?w.createElement(Kg,{page:o,matches:c,...u}):null}function Vg(o){let{manifest:u,routeModules:f}=Xp(),[c,p]=w.useState([]);return w.useEffect(()=>{let m=!1;return Lg(o,u,f).then(g=>{m||p(g)}),()=>{m=!0}},[o,u,f]),c}function Kg({page:o,matches:u,...f}){let c=qa(),{future:p,manifest:m,routeModules:g}=Xp(),{basename:N}=Gp(),{loaderData:b,matches:h}=Xg(),E=w.useMemo(()=>Ep(o,u,h,m,c,"data"),[o,u,h,m,c]),y=w.useMemo(()=>Ep(o,u,h,m,c,"assets"),[o,u,h,m,c]),_=w.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let B=new Set,M=!1;if(u.forEach(F=>{let X=m.routes[F.route.id];!X||!X.hasLoader||(!E.some(Q=>Q.route.id===F.route.id)&&F.route.id in b&&g[F.route.id]?.shouldRevalidate||X.hasClientLoader?M=!0:B.add(F.route.id))}),B.size===0)return[];let Y=Og(o,N,p.unstable_trailingSlashAwareDataRequests,"data");return M&&B.size>0&&Y.searchParams.set("_routes",u.filter(F=>B.has(F.route.id)).map(F=>F.route.id).join(",")),[Y.pathname+Y.search]},[N,p.unstable_trailingSlashAwareDataRequests,b,c,m,E,u,o,g]),L=w.useMemo(()=>Yg(y,m),[y,m]),G=Vg(y);return w.createElement(w.Fragment,null,_.map(B=>w.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...f})),L.map(B=>w.createElement("link",{key:B,rel:"modulepreload",href:B,...f})),G.map(({key:B,link:M})=>w.createElement("link",{key:B,nonce:f.nonce,...M,crossOrigin:M.crossOrigin??f.crossOrigin})))}function Jg(...o){return u=>{o.forEach(f=>{typeof f=="function"?f(u):f!=null&&(f.current=u)})}}var $g=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$g&&(window.__reactRouterVersion="7.13.1")}catch{}function Wg({basename:o,children:u,unstable_useTransitions:f,window:c}){let p=w.useRef();p.current==null&&(p.current=k0({window:c,v5Compat:!0}));let m=p.current,[g,N]=w.useState({action:m.action,location:m.location}),b=w.useCallback(h=>{f===!1?N(h):w.startTransition(()=>N(h))},[f]);return w.useLayoutEffect(()=>m.listen(b),[m,b]),w.createElement(zg,{basename:o,children:u,location:g.location,navigationType:g.action,navigator:m,unstable_useTransitions:f})}var Qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zn=w.forwardRef(function({onClick:u,discover:f="render",prefetch:c="none",relative:p,reloadDocument:m,replace:g,unstable_mask:N,state:b,target:h,to:E,preventScrollReset:y,viewTransition:_,unstable_defaultShouldRevalidate:L,...G},B){let{basename:M,navigator:Y,unstable_useTransitions:F}=w.useContext(_t),X=typeof E=="string"&&Qp.test(E),Q=Dp(E,M);E=Q.to;let fe=ug(E,{relative:p}),ve=qa(),P=null;if(N){let Ne=ec(N,[],ve.unstable_mask?ve.unstable_mask.pathname:"/",!0);M!=="/"&&(Ne.pathname=Ne.pathname==="/"?M:Zt([M,Ne.pathname])),P=Y.createHref(Ne)}let[be,Me,nt]=Qg(c,G),Ue=tx(E,{replace:g,unstable_mask:N,state:b,target:h,preventScrollReset:y,relative:p,viewTransition:_,unstable_defaultShouldRevalidate:L,unstable_useTransitions:F});function De(Ne){u&&u(Ne),Ne.defaultPrevented||Ue(Ne)}let $e=!(Q.isExternal||m),Ve=w.createElement("a",{...G,...nt,href:($e?P:void 0)||Q.absoluteURL||fe,onClick:$e?De:u,ref:Jg(B,Me),target:h,"data-discover":!X&&f==="render"?"true":void 0});return be&&!X?w.createElement(w.Fragment,null,Ve,w.createElement(Zg,{page:fe})):Ve});Zn.displayName="Link";var Ig=w.forwardRef(function({"aria-current":u="page",caseSensitive:f=!1,className:c="",end:p=!1,style:m,to:g,viewTransition:N,children:b,...h},E){let y=Wl(g,{relative:h.relative}),_=qa(),L=w.useContext(wr),{navigator:G,basename:B}=w.useContext(_t),M=L!=null&&rx(y)&&N===!0,Y=G.encodeLocation?G.encodeLocation(y).pathname:y.pathname,F=_.pathname,X=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;f||(F=F.toLowerCase(),X=X?X.toLowerCase():null,Y=Y.toLowerCase()),X&&B&&(X=pa(X,B)||X);const Q=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let fe=F===Y||!p&&F.startsWith(Y)&&F.charAt(Q)==="/",ve=X!=null&&(X===Y||!p&&X.startsWith(Y)&&X.charAt(Y.length)==="/"),P={isActive:fe,isPending:ve,isTransitioning:M},be=fe?u:void 0,Me;typeof c=="function"?Me=c(P):Me=[c,fe?"active":null,ve?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let nt=typeof m=="function"?m(P):m;return w.createElement(Zn,{...h,"aria-current":be,className:Me,ref:E,style:nt,to:g,viewTransition:N},typeof b=="function"?b(P):b)});Ig.displayName="NavLink";var Pg=w.forwardRef(({discover:o="render",fetcherKey:u,navigate:f,reloadDocument:c,replace:p,state:m,method:g=vr,action:N,onSubmit:b,relative:h,preventScrollReset:E,viewTransition:y,unstable_defaultShouldRevalidate:_,...L},G)=>{let{unstable_useTransitions:B}=w.useContext(_t),M=lx(),Y=ix(N,{relative:h}),F=g.toLowerCase()==="get"?"get":"post",X=typeof N=="string"&&Qp.test(N),Q=fe=>{if(b&&b(fe),fe.defaultPrevented)return;fe.preventDefault();let ve=fe.nativeEvent.submitter,P=ve?.getAttribute("formmethod")||g,be=()=>M(ve||fe.currentTarget,{fetcherKey:u,method:P,navigate:f,replace:p,state:m,relative:h,preventScrollReset:E,viewTransition:y,unstable_defaultShouldRevalidate:_});B&&f!==!1?w.startTransition(()=>be()):be()};return w.createElement("form",{ref:G,method:F,action:Y,onSubmit:c?b:Q,...L,"data-discover":!X&&o==="render"?"true":void 0})});Pg.displayName="Form";function ex(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zp(o){let u=w.useContext(Vn);return Re(u,ex(o)),u}function tx(o,{target:u,replace:f,unstable_mask:c,state:p,preventScrollReset:m,relative:g,viewTransition:N,unstable_defaultShouldRevalidate:b,unstable_useTransitions:h}={}){let E=mt(),y=qa(),_=Wl(o,{relative:g});return w.useCallback(L=>{if(Rg(L,u)){L.preventDefault();let G=f!==void 0?f:Kl(y)===Kl(_),B=()=>E(o,{replace:G,unstable_mask:c,state:p,preventScrollReset:m,relative:g,viewTransition:N,unstable_defaultShouldRevalidate:b});h?w.startTransition(()=>B()):B()}},[y,E,_,f,c,p,u,o,m,g,N,b,h])}var ax=0,nx=()=>`__${String(++ax)}__`;function lx(){let{router:o}=Zp("useSubmit"),{basename:u}=w.useContext(_t),f=wg(),c=o.fetch,p=o.navigate;return w.useCallback(async(m,g={})=>{let{action:N,method:b,encType:h,formData:E,body:y}=_g(m,u);if(g.navigate===!1){let _=g.fetcherKey||nx();await c(_,f,g.action||N,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:E,body:y,formMethod:g.method||b,formEncType:g.encType||h,flushSync:g.flushSync})}else await p(g.action||N,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:E,body:y,formMethod:g.method||b,formEncType:g.encType||h,replace:g.replace,state:g.state,fromRouteId:f,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,p,u,f])}function ix(o,{relative:u}={}){let{basename:f}=w.useContext(_t),c=w.useContext(Vt);Re(c,"useFormAction must be used inside a RouteContext");let[p]=c.matches.slice(-1),m={...Wl(o||".",{relative:u})},g=qa();if(o==null){m.search=g.search;let N=new URLSearchParams(m.search),b=N.getAll("index");if(b.some(E=>E==="")){N.delete("index"),b.filter(y=>y).forEach(y=>N.append("index",y));let E=N.toString();m.search=E?`?${E}`:""}}return(!o||o===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(m.pathname=m.pathname==="/"?f:Zt([f,m.pathname])),Kl(m)}function rx(o,{relative:u}={}){let f=w.useContext(Op);Re(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Zp("useViewTransitionState"),p=Wl(o,{relative:u});if(!f.isTransitioning)return!1;let m=pa(f.currentLocation.pathname,c)||f.currentLocation.pathname,g=pa(f.nextLocation.pathname,c)||f.nextLocation.pathname;return yr(p.pathname,g)!=null||yr(p.pathname,m)!=null}const Vp=w.createContext();function ox({children:o}){const[u,f]=w.useState({}),[c,p]=w.useState(!1),m=h=>{f(E=>{const y={...E};return y[h]?delete y[h]:y[h]={issuePhoto:null},Object.keys(y).length===0&&p(!1),y})},g=(h,E)=>{f(y=>({...y,[h]:{...y[h],issuePhoto:E}}))},N=()=>{f({}),p(!1)},b=()=>Object.keys(u).length;return r.jsx(Vp.Provider,{value:{cart:u,toggleCartItem:m,updateItemImage:g,clearCart:N,getCartCount:b,isCartConfirmed:c,setIsCartConfirmed:p},children:o})}const rc=()=>w.useContext(Vp),sx="/nowfix/assets/nowfix-logo1-CSQtkBIU.png",cx=`
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
`;function Er(){const o=mt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:cx}),r.jsxs("div",{className:"brand-logo",onClick:()=>o("/"),children:[r.jsx("img",{src:sx,alt:"NowFix",className:"brand-logo-img"}),r.jsxs("span",{className:"brand-logo-text",children:[r.jsx("span",{className:"brand-logo-now",children:"NOW"}),r.jsx("span",{className:"brand-logo-fix",children:"FIX"})]})]})]})}const Kp=w.createContext();function Kn(){return w.useContext(Kp)}function ux({children:o}){const[u,f]=w.useState(null);w.useEffect(()=>{const m=localStorage.getItem("nowfix_user");m&&f(JSON.parse(m))},[]);const c=m=>{f(m),localStorage.setItem("nowfix_user",JSON.stringify(m))},p=()=>{f(null),localStorage.removeItem("nowfix_user")};return r.jsx(Kp.Provider,{value:{user:u,login:c,logout:p},children:o})}const dx=`
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
`,Np=[{label:"Services",href:"#/services"},{label:"How It Works",href:"#how-it-works"},{label:"Reviews",href:"#reviews"}],fx=["Jaipur","Jodhpur","Sri Ganganagar","Hanumangarh"];function Nr(){const[o,u]=w.useState(!1),[f,c]=w.useState(!1),[p,m]=w.useState(!1),[g,N]=w.useState(!1),[b,h]=w.useState(!1),[E,y]=w.useState(""),_=mt(),{user:L,logout:G}=Kn(),{getCartCount:B}=rc(),M=B(),Y=w.useRef(null);w.useEffect(()=>{function Q(fe){Y.current&&!Y.current.contains(fe.target)&&h(!1)}return document.addEventListener("mousedown",Q),()=>document.removeEventListener("mousedown",Q)},[]),w.useEffect(()=>{const Q=()=>u(window.scrollY>10);return window.addEventListener("scroll",Q),()=>window.removeEventListener("scroll",Q)},[]);const F=()=>{m(!p),f&&c(!1)},X=()=>{c(!f),p&&m(!1)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:dx}),r.jsx("div",{className:`modal-overlay${g?" open":""}`,onClick:()=>N(!1),children:r.jsxs("div",{className:"modal-content",onClick:Q=>Q.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Select your city"}),r.jsx("button",{className:"modal-close",onClick:()=>N(!1),children:"×"})]}),r.jsxs("div",{className:"city-group",children:[r.jsx("div",{className:"city-group-title",children:"Available Now"}),r.jsxs("div",{className:"city-item active",onClick:()=>N(!1),children:[r.jsx("span",{className:"city-name",children:"Bikaner, Rajasthan"}),r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--primary)"},children:r.jsx("polyline",{points:"20 6 9 17 4 12"})})]})]}),r.jsxs("div",{className:"city-group",children:[r.jsx("div",{className:"city-group-title",children:"Coming Soon"}),fx.map(Q=>r.jsxs("div",{className:"city-item disabled",children:[r.jsxs("span",{className:"city-name",children:[Q,", Rajasthan"]}),r.jsx("span",{className:"city-badge",children:"Soon"})]},Q))]})]})}),r.jsx("nav",{className:`nav${o?" scrolled":""}`,children:r.jsxs("div",{className:"nav-inner",children:[r.jsx(Er,{}),r.jsxs("div",{className:"nav-search-container",children:[r.jsxs("div",{className:"nav-location",onClick:()=>N(!0),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan",r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"14px",height:"14px",color:"#9CA3AF",marginLeft:"4px"},children:r.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),r.jsxs("div",{className:"nav-search-box",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{type:"text",placeholder:"Search for AC repair, plumbing...",value:E,onChange:Q=>y(Q.target.value)})]})]}),r.jsx("ul",{className:"nav-links",children:Np.map(Q=>r.jsx("li",{children:r.jsx("a",{href:Q.href,children:Q.label})},Q.label))}),r.jsxs("div",{className:"nav-right",ref:Y,children:[r.jsxs("button",{className:"nav-cart-btn",onClick:()=>_("/checkout"),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"9",cy:"21",r:"1"}),r.jsx("circle",{cx:"20",cy:"21",r:"1"}),r.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),M>0&&r.jsx("span",{className:"nav-cart-badge",children:M})]}),L?r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"nav-avatar",onClick:()=>h(!b),children:L.photo?r.jsx("img",{src:L.photo,alt:"Profile"}):L.name.charAt(0)}),b&&r.jsxs("div",{className:"profile-dropdown",children:[r.jsxs("div",{className:"pd-header",children:[r.jsx("strong",{children:L.name}),r.jsxs("span",{children:["+91 ",L.phone]})]}),r.jsx("button",{onClick:()=>{h(!1),_("/profile")},children:"My Profile"}),r.jsx("button",{onClick:()=>{h(!1),_("/bookings")},children:"My Bookings"}),r.jsx("button",{onClick:()=>{G(),h(!1)},children:"Logout"})]})]}):r.jsx("button",{className:"nav-login-btn",onClick:()=>_("/login"),children:"Login →"})]}),r.jsxs("div",{className:"mobile-actions",children:[r.jsxs("button",{className:"mobile-icon-btn",onClick:()=>_("/checkout"),children:[r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"9",cy:"21",r:"1"}),r.jsx("circle",{cx:"20",cy:"21",r:"1"}),r.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),M>0&&r.jsx("span",{className:"nav-cart-badge",style:{top:"2px",right:"2px"},children:M})]}),r.jsx("button",{className:"mobile-icon-btn",onClick:F,children:r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p?r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})}),L&&r.jsx("button",{className:"nav-avatar",style:{width:"32px",height:"32px",fontSize:"0.9rem"},onClick:X,children:L.photo?r.jsx("img",{src:L.photo,alt:"Profile"}):L.name.charAt(0)}),r.jsxs("button",{className:`nav-hamburger${f?" open":""}`,onClick:X,children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]})]})}),r.jsx("div",{className:`mobile-search-dropdown${p?" open":""}`,children:r.jsxs("div",{className:"nav-search-container",style:{display:"flex",width:"100%",maxWidth:"100%",flexDirection:"column",border:"none",boxShadow:"none"},children:[r.jsxs("div",{className:"nav-location",style:{borderRight:"none",borderBottom:"1px solid var(--border)",width:"100%",borderRadius:"8px 8px 0 0",border:"1px solid var(--border)"},onClick:()=>{m(!1),N(!0)},children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan"]}),r.jsxs("div",{className:"nav-search-box",style:{width:"100%",border:"1px solid var(--border)",borderTop:"none",borderRadius:"0 0 8px 8px",background:"var(--bg-2)"},children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{type:"text",placeholder:"Search for services...",value:E,onChange:Q=>y(Q.target.value),autoFocus:p})]})]})}),r.jsxs("div",{className:`nav-mobile${f?" open":""}`,children:[Np.map(Q=>r.jsx("a",{href:Q.href,onClick:()=>c(!1),children:Q.label},Q.label)),r.jsx("div",{className:"nav-mobile-buttons",children:L?r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"nav-mobile-login",style:{background:"var(--bg-2)",color:"var(--text)",border:"1px solid var(--border)"},onClick:()=>{c(!1),_("/profile")},children:"My Profile"}),r.jsx("button",{className:"nav-mobile-login",style:{background:"var(--bg-2)",color:"var(--text)",border:"1px solid var(--border)",marginTop:"8px"},onClick:()=>{c(!1),_("/bookings")},children:"My Bookings"}),r.jsx("button",{className:"nav-mobile-login",style:{marginTop:"8px"},onClick:()=>{G(),c(!1)},children:"Logout"})]}):r.jsx("button",{className:"nav-mobile-login",onClick:()=>{_("/login"),c(!1)},children:"Login →"})})]})]})}const px="/nowfix/assets/hero-bg-BUzEpsbl.webp",mx=`
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
    background-image: url(${px});
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
`,hx=[{value:"500+",label:"Happy Customers"},{value:"100+",label:"Verified Workers"},{value:"4.8★",label:"Average Rating"},{value:"Same Day",label:"Service Available"}];function gx(){const o=mt(),{user:u}=Kn(),f=()=>{o(u?"/services":"/login")};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:mx}),r.jsx("section",{className:"hero",children:r.jsxs("div",{className:"hero-main",children:[r.jsx("div",{className:"hero-bg"}),r.jsxs("div",{className:"hero-inner",children:[r.jsxs("div",{className:"hero-badge",children:[r.jsx("div",{className:"hero-badge-dot"}),r.jsx("span",{children:"Now live in Bikaner, Rajasthan"})]}),r.jsxs("h1",{className:"hero-headline",children:["Fix Any Problem"," ",r.jsx("span",{className:"hero-headline-orange",children:"Instantly"})," ","with"," ",r.jsx("span",{className:"hero-headline-blue",children:"NowFix"})]}),r.jsx("p",{className:"hero-sub",children:"Book trusted professionals for repairs, cleaning, electrical and more — fast, affordable, right at your doorstep."}),r.jsx("div",{className:"hero-cta",children:r.jsx("button",{className:"hero-btn-primary",onClick:f,children:"Book a Service →"})}),r.jsx("div",{className:"hero-stats",children:hx.map(c=>r.jsxs("div",{className:"hero-stat",children:[r.jsx("div",{className:"hero-stat-value",children:c.value}),r.jsx("div",{className:"hero-stat-label",children:c.label})]},c.value))})]})]})})]})}const xx="/nowfix/assets/plumbing-DobpV-5v.webp",vx="/nowfix/assets/electrician-DgHnnlp5.webp",bx="/nowfix/assets/ac-repair-Dol6uZ-p.webp",yx="/nowfix/assets/cleaning-DDh_5nqU.webp",jx=[{id:"plumbing",name:"Plumbing",tagline:"Leaks fixed, pipes secured",description:"Tap repairs, pipe leaks, drain cleaning and full plumbing checks by verified professionals.",startingPrice:199,color:"#eff6ff",iconColor:"#2563eb",image:xx},{id:"electrician",name:"Electrician",tagline:"Safe, certified electrical work",description:"Switch repairs, fan installation, wiring checks and MCB fixes by certified electricians.",startingPrice:149,color:"#fefce8",iconColor:"#ca8a04",image:vx},{id:"ac-repair",name:"AC Repair",tagline:"Stay cool, always",description:"AC servicing, gas refilling, installation and cooling fixes by expert technicians.",startingPrice:399,color:"#f0fdf4",iconColor:"#16a34a",image:bx},{id:"cleaning",name:"Home Cleaning",tagline:"Spotless home, happy life",description:"Deep cleaning, kitchen sanitization, bathroom scrubbing and full home cleaning services.",startingPrice:299,color:"#fdf4ff",iconColor:"#a21caf",image:yx}],wx=`
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
`;function Sx(){const o=mt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:wx}),r.jsx("section",{className:"svc-section",id:"services",children:r.jsxs("div",{className:"svc-container",children:[r.jsx("div",{className:"svc-header",children:r.jsxs("div",{className:"svc-title-wrap",children:[r.jsx("h2",{children:"Top Services"}),r.jsx("p",{children:"Expert local professionals in Bikaner, right at your doorstep."})]})}),r.jsx("div",{className:"svc-grid",children:jx.map(u=>r.jsxs("div",{className:"svc-card",onClick:()=>o(`/service/${u.id}`),children:[r.jsx("img",{src:u.image,alt:u.name,className:"svc-image",loading:"lazy"}),r.jsxs("div",{className:"svc-overlay",children:[r.jsx("span",{className:"svc-tagline",children:u.tagline}),r.jsx("h3",{className:"svc-name",children:u.name}),r.jsxs("div",{className:"svc-price-badge",children:["Starts at ",r.jsxs("span",{children:["₹",u.startingPrice]})]})]})]},u.id))})]})})]})}const Ex=`
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
`;function Jp(){const o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Ex}),r.jsxs("footer",{className:"footer",children:[r.jsxs("div",{className:"ftr-grid",children:[r.jsxs("div",{className:"ftr-brand",children:[r.jsx("div",{className:"ftr-brand-logo-wrap",onClick:o,style:{cursor:"pointer"},children:r.jsx(Er,{})}),r.jsxs("p",{children:["Expert local professionals in Bikaner, Rajasthan.",r.jsx("br",{}),"Fix any problem instantly."]})]}),r.jsxs("div",{className:"ftr-links",children:[r.jsx("h4",{children:"Quick Links"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(Zn,{to:"/",onClick:o,children:"Home"})}),r.jsx("li",{children:r.jsx(Zn,{to:"/#services",children:"All Services"})}),r.jsx("li",{children:r.jsx(Zn,{to:"/login",children:"Customer Login"})})]})]}),r.jsxs("div",{className:"ftr-partner",children:[r.jsx("h4",{children:"Are you a Pro?"}),r.jsx("p",{style:{color:"#9CA3AF",fontSize:"0.85rem",marginTop:"8px"},children:"Earn money offering your skills in Bikaner."}),r.jsx(Zn,{to:"/join",onClick:o,className:"ftr-partner-btn",children:"Join as Partner"})]})]}),r.jsxs("div",{className:"ftr-bottom",children:["© ",new Date().getFullYear()," NowFix Bikaner. All rights reserved."]})]})]})}const Nx=`
  /* ======== FLOATING GAME FAB ======== */
  .gfab {
    position: fixed;
    bottom: 24px;
    right: 20px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  /* Tooltip that floats above the button */
  .gfab-tooltip {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: #fff;
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.68rem;
    font-weight: 700;
    padding: 6px 14px;
    border-radius: 20px;
    white-space: nowrap;
    letter-spacing: 0.04em;
    margin-bottom: 10px;
    position: relative;
    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
    animation: tooltipFloat 2.5s ease-in-out infinite;
    user-select: none;
    pointer-events: none;
  }

  .gfab-tooltip::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 5px 0;
    border-style: solid;
    border-color: #0f172a transparent transparent transparent;
  }

  @keyframes tooltipFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-5px); }
  }

  /* Outer glow container */
  .gfab-glow {
    position: relative;
    width: 62px;
    height: 62px;
  }

  /* Soft animated glow behind the button */
    gap: 8px;
  }

  /* Ripple rings behind the button */
  .gfab-ring {
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(255, 159, 28, 0.35);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: fabRipple 2s ease-out infinite;
    pointer-events: none;
  }

  .gfab-ring:nth-child(2) {
    animation-delay: 0.5s;
    background: rgba(255, 159, 28, 0.2);
  }

  .gfab-ring:nth-child(3) {
    animation-delay: 1s;
    background: rgba(255, 159, 28, 0.1);
  }

  @keyframes fabRipple {
    0%   { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
  }

  /* Main circle button */
  .gfab-btn {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #FF9F1C, #e07900);
    box-shadow: 0 6px 24px rgba(255, 159, 28, 0.55);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    position: relative;
    z-index: 2;
    animation: fabBounce 1.6s ease-in-out infinite;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .gfab-btn:hover {
    transform: scale(1.12);
    box-shadow: 0 10px 32px rgba(255, 159, 28, 0.7);
    animation-play-state: paused;
  }

  .gfab-btn:active {
    transform: scale(0.95);
  }

  @keyframes fabBounce {
    0%, 100% { transform: translateY(0); }
    40%       { transform: translateY(-12px); }
    60%       { transform: translateY(-6px); }
  }

  /* Tooltip label that wiggles */
  .gfab-label {
    background: #111827;
    color: white;
    font-family: var(--font-body, 'Inter', sans-serif);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 20px;
    white-space: nowrap;
    letter-spacing: 0.03em;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    animation: labelWiggle 3s ease-in-out infinite;
    position: relative;
    user-select: none;
    pointer-events: none;
  }

  /* Small arrow pointing up to the button */
  .gfab-label::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 5px 5px;
    border-style: solid;
    border-color: transparent transparent #111827 transparent;
  }

  @keyframes labelWiggle {
    0%, 100% { transform: rotate(-2deg); }
    50%       { transform: rotate(2deg); }
  }

  /* Mobile adjustments */
  @media (max-width: 480px) {
    .gfab {
      bottom: 18px;
      right: 14px;
    }

    .gfab-glow {
      width: 56px;
      height: 56px;
    }

    .gfab-btn {
      width: 56px;
      height: 56px;
    }

    .gfab-icon {
      width: 26px;
      height: 26px;
    }

    .gfab-tooltip {
      font-size: 0.62rem;
      padding: 5px 12px;
    }
  }
`;function zx(){const o=mt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Nx}),r.jsxs("div",{className:"gfab",children:[r.jsx("div",{className:"gfab-tooltip",children:"⚡ Stay Busy!"}),r.jsxs("div",{className:"gfab-glow",children:[r.jsx("div",{className:"gfab-orbit"}),r.jsxs("button",{className:"gfab-btn",onClick:()=>o("/game"),"aria-label":"Play Fix-It Fast game",children:[r.jsx("div",{className:"gfab-dot"}),r.jsx("svg",{className:"gfab-icon",viewBox:"0 0 24 24",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M21.58 16.09l-1.09-7.66A3.996 3.996 0 0016.53 5H7.47a3.996 3.996 0 00-3.96 3.43l-1.09 7.66C2.05 18.53 4 21 6.5 21c1.58 0 2.9-1.07 3.29-2.52l.4-1.48h3.62l.4 1.48A3.428 3.428 0 0017.5 21c2.5 0 4.45-2.47 4.08-4.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4 2a1 1 0 110-2 1 1 0 010 2zm2-3a1 1 0 110-2 1 1 0 010 2z"})})]})]})]})]})}function Cx(){return r.jsxs("div",{className:"home-page",style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[r.jsx(Nr,{}),r.jsxs("main",{style:{flex:1},children:[r.jsx(gx,{}),r.jsx(Sx,{})]}),r.jsx(Jp,{}),r.jsx(zx,{})]})}const Tx=`
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
`;function Ax({fullscreen:o=!0}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Tx}),r.jsx("div",{className:o?"loader-overlay":"",children:r.jsxs("div",{className:"loader-container",children:[r.jsx("svg",{className:"loader-spinner-bg",viewBox:"0 0 72 72",children:r.jsx("circle",{cx:"36",cy:"36",r:"34"})}),r.jsx("svg",{className:"loader-spinner",viewBox:"0 0 72 72",children:r.jsx("circle",{cx:"36",cy:"36",r:"34"})}),r.jsx("div",{className:"loader-icon loader-wrench",children:r.jsx("svg",{viewBox:"0 0 512 512",children:r.jsx("path",{d:"M459.957,203.4c42.547-38.609,49.656-82.484,40.141-119.469c-0.281-2.938-0.984-5.406-3.547-7.266l-8.563-7.016c-1.484-1.375-3.484-2.063-5.484-1.859c-2.016,0.188-3.844,1.234-5.031,2.859l-49.25,64.031c-1.375,1.891-3.594,2.969-5.922,2.891l-17.875,1.313c-1.531-0.047-3.016-0.594-4.219-1.563l-34.531-29.266c-1.406-1.141-2.328-2.766-2.563-4.563l-2.141-16.188c-0.25-1.781,0.203-3.594,1.266-5.047l46.109-62.641c2.094-2.891,1.688-6.875-0.906-9.297l-11.188-8.734c-2.188-2.047-4.672-1.75-8.063-1.109c-31.844,6.297-86.219,37.125-100.016,79.75c-12.156,37.516-7.922,63.969-7.922,63.969c0,21.141-6.953,41.516-15.5,50.078L24.504,424.916c-0.469,0.438-0.922,0.859-1.375,1.313c-19.844,19.844-19.813,52.063-0.641,71.219c19.172,19.172,51.859,19.688,71.703-0.172c0.922-0.922,1.813-1.875,2.641-2.859l231.672-250.438C357.004,218.619,413.426,245.65,459.957,203.4z"})})}),r.jsx("div",{className:"loader-icon loader-hammer",children:r.jsx("svg",{viewBox:"0 0 64 64",style:{transform:"scale(-1.25, 1.25)",transformOrigin:"center"},children:r.jsx("path",{d:"M30.651,23.538l25.24,24.346l-6.577,6.577l-23.969,-25.617l5.306,-5.306Zm-7.208,3.403l5.306,-5.305c0,0 -2.695,-2.056 -2.447,-3.34c0.248,-1.285 0.809,-3.1 4.711,-4.711c3.903,-1.611 7.543,-1.757 7.543,-1.757l0.131,-1.758c0,0 -8.969,-1.356 -13.707,0.327c-4.738,1.684 -10.097,8.02 -10.097,8.02c0,0 0.935,3.064 -0.667,4.666c-1.601,1.601 -3.754,-0.245 -3.754,-0.245l-2.456,3.118l6.197,6.197l3.112,-2.461c0,0 -1.472,-2.207 -0.017,-3.528c3.132,-2.842 6.145,0.777 6.145,0.777Z"})})})]})})]})}const $p=w.createContext({show:()=>{},hide:()=>{},isLoading:!1});function oc(){return w.useContext($p)}function kx({children:o}){const[u,f]=w.useState(!1),c=w.useRef(0),p=w.useCallback(()=>{c.current+=1,f(!0)},[]),m=w.useCallback(()=>{c.current=Math.max(0,c.current-1),c.current===0&&f(!1)},[]);return w.useEffect(()=>{if(!(typeof window>"u")&&!window.__loaderPatched){if(window.__loaderPatched=!0,window.fetch&&(window.__origFetchForLoader=window.fetch,window.fetch=async function(...g){c.current+=1,f(!0);try{return await window.__origFetchForLoader.apply(this,g)}finally{c.current-=1,c.current===0&&f(!1)}}),window.XMLHttpRequest&&window.XMLHttpRequest.prototype){const g=window.XMLHttpRequest.prototype;g.__origSendForLoader||(g.__origSendForLoader=g.send,g.send=function(...N){return c.current+=1,f(!0),this.addEventListener("loadend",()=>{c.current-=1,c.current===0&&f(!1)}),g.__origSendForLoader.apply(this,N)})}return()=>{if(window.__origFetchForLoader&&(window.fetch=window.__origFetchForLoader,delete window.__origFetchForLoader),window.XMLHttpRequest&&window.XMLHttpRequest.prototype){const g=window.XMLHttpRequest.prototype;g.__origSendForLoader&&(g.send=g.__origSendForLoader,delete g.__origSendForLoader)}delete window.__loaderPatched}}},[]),r.jsxs($p.Provider,{value:{show:p,hide:m,isLoading:u},children:[o,u&&r.jsx(Ax,{fullscreen:!0})]})}const Bx=`
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
`;function Rx(){const o=mt(),{login:u}=Kn(),{show:f,hide:c}=oc(),[p,m]=w.useState(1),[g,N]=w.useState(""),[b,h]=w.useState(["","","",""]),E=b.every(B=>B!=="");function y(){g.length===10&&m(2)}function _(B,M){if(!/^\d*$/.test(B))return;const Y=[...b];Y[M]=B.substring(B.length-1),h(Y),B&&M<3&&document.getElementById(`otp-${M+1}`).focus()}function L(B,M){B.key==="Backspace"&&!b[M]&&M>0&&document.getElementById(`otp-${M-1}`).focus(),B.key==="Enter"&&E&&G()}function G(){f(),setTimeout(()=>{u({name:"Aditya Demo",phone:g}),c(),o("/")},2e3)}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Bx}),r.jsx("div",{className:"login-page",children:r.jsxs("div",{className:"login-card",children:[r.jsx("div",{className:"login-header",children:r.jsx(Er,{})}),p===1&&r.jsxs(r.Fragment,{children:[r.jsx("h1",{className:"login-title",children:"Welcome Back"}),r.jsx("p",{className:"login-sub",children:"Enter your mobile number to log in or sign up."}),r.jsx("label",{className:"login-label",children:"Mobile Number"}),r.jsxs("div",{className:"login-phone-wrap",children:[r.jsx("div",{className:"login-phone-prefix",children:r.jsx("span",{className:"flag-emoji",children:"🇮🇳"})}),r.jsx("input",{className:"login-phone-input",type:"tel",maxLength:10,placeholder:"98765 43210",value:g,onChange:B=>N(B.target.value.replace(/\D/g,"")),onKeyDown:B=>B.key==="Enter"&&y(),autoFocus:!0})]}),r.jsx("button",{className:"login-btn",onClick:y,disabled:g.length!==10,children:"Send OTP →"}),r.jsxs("p",{className:"login-terms",children:["By continuing, you agree to our"," ",r.jsx("span",{children:"Terms of Service"})," and"," ",r.jsx("span",{children:"Privacy Policy"})]})]}),p===2&&r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"login-back",onClick:()=>m(1),children:"← Change Number"}),r.jsx("h1",{className:"login-title",children:"Enter OTP"}),r.jsx("p",{className:"login-sub",children:"We sent a 4-digit code to"}),r.jsx("div",{className:"otp-phone-display",children:r.jsxs("span",{children:[r.jsx("span",{className:"flag-emoji",children:"🇮🇳"})," ",g]})}),r.jsx("div",{className:"otp-wrap",children:b.map((B,M)=>r.jsx("input",{id:`otp-${M}`,className:`otp-input${B?" filled":""}`,type:"tel",maxLength:1,value:B,onChange:Y=>_(Y.target.value,M),onKeyDown:Y=>L(Y,M),autoFocus:M===0},M))}),r.jsxs("p",{className:"otp-resend",children:["Didn't receive the code?"," ",r.jsx("span",{onClick:()=>h(["","","",""]),children:"Resend OTP"})]}),r.jsx("button",{className:"login-btn",onClick:G,disabled:!E,children:"Verify & Continue →"})]})]})})]})}const Mx=`
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
`,Dx=["Plumbing","Electrician","AC Repair","Home Cleaning","Carpentry","Appliance Repair","Painting","Pest Control"];function _x(){const o=mt(),[u,f]=w.useState(null),[c,p]=w.useState(!1),[m,g]=w.useState({name:"",phone:"",category:"",experience:"",city:"Bikaner",aadhar:""});function N(y){const _=y.target.files[0];_&&(f(URL.createObjectURL(_)),console.log("Photo selected for upload:",_.name))}function b(y){const _=y.target.files[0];_&&(p(!0),console.log("Aadhar selected for upload:",_.name))}function h(y,_){g(L=>({...L,[y]:_}))}function E(){console.log("Submitting worker application data:",m),alert("Application submitted successfully! We will contact you soon."),o("/")}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Mx}),r.jsx("div",{className:"join-page",children:r.jsxs("div",{className:"join-card",children:[r.jsx("div",{className:"join-header",children:r.jsx(Er,{})}),r.jsx("h1",{className:"join-title",children:"Join as a Worker"}),r.jsx("p",{className:"join-sub",children:"Fill in your details to start receiving jobs in Bikaner"}),r.jsxs("div",{className:"join-photo-wrap",children:[r.jsx("div",{className:"join-photo-circle",onClick:()=>document.getElementById("photo-input").click(),children:u?r.jsx("img",{src:u,alt:"Profile"}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),r.jsx("span",{children:"Add Photo"})]})}),r.jsx("span",{className:"join-photo-label",onClick:()=>document.getElementById("photo-input").click(),children:u?"Change Photo":"Upload Profile Photo"}),r.jsx("input",{id:"photo-input",type:"file",accept:"image/*",style:{display:"none"},onChange:N})]}),r.jsx("p",{className:"join-section-label",children:"Personal Information"}),r.jsxs("div",{className:"join-row",children:[r.jsxs("div",{className:"join-field no-margin",children:[r.jsx("label",{children:"Full Name"}),r.jsx("input",{className:"join-input",type:"text",placeholder:"Ramesh Kumar",value:m.name,onChange:y=>h("name",y.target.value)})]}),r.jsxs("div",{className:"join-field no-margin",children:[r.jsx("label",{children:"Phone Number"}),r.jsxs("div",{className:"join-phone-wrap",children:[r.jsx("div",{className:"join-phone-prefix",children:"🇮🇳 +91"}),r.jsx("input",{className:"join-phone-input",type:"tel",placeholder:"98765 43210",maxLength:10,value:m.phone,onChange:y=>h("phone",y.target.value.replace(/\D/g,""))})]})]})]}),r.jsx("div",{className:"join-divider"}),r.jsx("p",{className:"join-section-label",children:"Work Information"}),r.jsxs("div",{className:"join-row",children:[r.jsxs("div",{className:"join-field no-margin",children:[r.jsx("label",{children:"Service Category"}),r.jsxs("select",{className:"join-select",value:m.category,onChange:y=>h("category",y.target.value),children:[r.jsx("option",{value:"",children:"Select category"}),Dx.map(y=>r.jsx("option",{value:y,children:y},y))]})]}),r.jsxs("div",{className:"join-field no-margin",children:[r.jsx("label",{children:"Experience"}),r.jsxs("select",{className:"join-select",value:m.experience,onChange:y=>h("experience",y.target.value),children:[r.jsx("option",{value:"",children:"Select years"}),r.jsx("option",{value:"0-1",children:"Less than 1 year"}),r.jsx("option",{value:"1-3",children:"1 - 3 years"}),r.jsx("option",{value:"3-5",children:"3 - 5 years"}),r.jsx("option",{value:"5+",children:"5+ years"})]})]})]}),r.jsx("div",{className:"join-divider"}),r.jsx("p",{className:"join-section-label",children:"Identity Verification"}),r.jsxs("div",{className:"join-field",children:[r.jsx("label",{children:"Aadhar Card Number"}),r.jsx("input",{className:"join-input",type:"tel",placeholder:"1234 5678 9012",maxLength:14,value:m.aadhar,onChange:y=>h("aadhar",y.target.value)})]}),r.jsxs("div",{className:`join-upload-box${c?" uploaded":""}`,onClick:()=>document.getElementById("aadhar-input").click(),children:[c?r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.jsx("polyline",{points:"17 8 12 3 7 8"}),r.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),r.jsx("span",{className:"join-upload-title",children:c?"Aadhar Card Uploaded ✓":"Upload Aadhar Card"}),r.jsx("span",{className:"join-upload-sub",children:c?"Tap to change file":"JPG, PNG or PDF — max 5MB"}),r.jsx("input",{id:"aadhar-input",type:"file",accept:"image/*,.pdf",style:{display:"none"},onChange:b})]}),r.jsx("button",{className:"join-submit",onClick:E,children:"Submit Application →"})]})})]})}const Ox=`
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
`,Ux={plumbing:{color:"#eff6ff",iconColor:"#2563eb",desc:"Fast and reliable plumbing solutions",packages:[{id:1,name:"Tap / Faucet Repair",desc:"Fix leaky taps, replace washers, tighten fittings",price:199,duration:"30-45 mins",popular:!0},{id:2,name:"Pipe Leak Fix",desc:"Detect and seal pipe leaks, joint repairs",price:349,duration:"45-60 mins",popular:!1},{id:3,name:"Drain Cleaning",desc:"Unclog blocked drains, kitchen and bathroom",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Plumbing Check",desc:"Complete inspection of all plumbing points",price:499,duration:"60-90 mins",popular:!1}]},electrician:{color:"#fefce8",iconColor:"#ca8a04",desc:"Certified electrical work at your home",packages:[{id:1,name:"Switch / Socket Repair",desc:"Fix or replace faulty switches and sockets",price:149,duration:"20-30 mins",popular:!0},{id:2,name:"Fan Installation",desc:"Install ceiling or wall fan with wiring",price:249,duration:"30-45 mins",popular:!1},{id:3,name:"MCB / Fuse Repair",desc:"Fix tripping MCB, replace fuse box",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Wiring Check",desc:"Safety inspection of all electrical wiring",price:599,duration:"60-90 mins",popular:!1}]},"ac-repair":{color:"#f0fdf4",iconColor:"#16a34a",desc:"Expert AC service and maintenance",packages:[{id:1,name:"AC Service & Clean",desc:"Deep clean filters, coils and full service",price:499,duration:"60-90 mins",popular:!0},{id:2,name:"Gas Refilling",desc:"Recharge refrigerant gas to optimal level",price:1299,duration:"45-60 mins",popular:!1},{id:3,name:"AC Installation",desc:"Install new split or window AC unit",price:999,duration:"2-3 hours",popular:!1},{id:4,name:"AC Not Cooling Fix",desc:"Diagnose and fix cooling issues",price:399,duration:"45-60 mins",popular:!1}]},cleaning:{color:"#fdf4ff",iconColor:"#a21caf",desc:"Professional home cleaning services",packages:[{id:1,name:"Basic Home Clean",desc:"Sweep, mop, dust all rooms",price:399,duration:"2-3 hours",popular:!0},{id:2,name:"Deep Home Clean",desc:"Full sanitization including kitchen and bathrooms",price:799,duration:"4-5 hours",popular:!1},{id:3,name:"Kitchen Deep Clean",desc:"Degrease and clean entire kitchen",price:599,duration:"2-3 hours",popular:!1},{id:4,name:"Bathroom Cleaning",desc:"Scrub, sanitize and clean all bathrooms",price:299,duration:"1-2 hours",popular:!1}]},carpentry:{color:"#fff7ed",iconColor:"#c2410c",desc:"Skilled carpenters for all wood work",packages:[{id:1,name:"Furniture Assembly",desc:"Assemble flat-pack or new furniture",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Door Repair",desc:"Fix hinges, locks, alignment issues",price:249,duration:"30-60 mins",popular:!1},{id:3,name:"Wood Polish",desc:"Sand and polish wooden furniture",price:499,duration:"2-3 hours",popular:!1},{id:4,name:"Custom Fitting",desc:"Custom shelves, cabinets or woodwork",price:799,duration:"3-4 hours",popular:!1}]},"appliance-repair":{color:"#eff6ff",iconColor:"#1d4ed8",desc:"All home appliance repairs",packages:[{id:1,name:"Washing Machine Repair",desc:"Fix spin, drain or electrical issues",price:449,duration:"45-60 mins",popular:!0},{id:2,name:"Refrigerator Repair",desc:"Fix cooling, compressor or door seal",price:499,duration:"45-90 mins",popular:!1},{id:3,name:"Microwave Repair",desc:"Fix heating, door or electrical faults",price:349,duration:"30-45 mins",popular:!1},{id:4,name:"TV / LED Repair",desc:"Fix display, sound or power issues",price:399,duration:"45-60 mins",popular:!1}]},painting:{color:"#fff1f2",iconColor:"#e11d48",desc:"Professional home painting services",packages:[{id:1,name:"Single Room Paint",desc:"Full painting of one room walls and ceiling",price:1499,duration:"1 day",popular:!0},{id:2,name:"2-3 Room Paint",desc:"Full painting of 2-3 rooms",price:3499,duration:"2-3 days",popular:!1},{id:3,name:"Exterior Paint",desc:"Outside wall painting and waterproofing",price:4999,duration:"3-5 days",popular:!1},{id:4,name:"Texture / Design Work",desc:"Decorative texture or pattern wall finish",price:2499,duration:"2-3 days",popular:!1}]},"pest-control":{color:"#f0fdf4",iconColor:"#15803d",desc:"Safe and effective pest removal",packages:[{id:1,name:"Cockroach Control",desc:"Gel treatment for kitchen and bathrooms",price:499,duration:"45-60 mins",popular:!0},{id:2,name:"Termite Treatment",desc:"Full home anti-termite spray treatment",price:1499,duration:"2-3 hours",popular:!1},{id:3,name:"Rodent Control",desc:"Traps and repellent for rats and mice",price:799,duration:"1-2 hours",popular:!1},{id:4,name:"Full Home Pest Control",desc:"Complete treatment for all common pests",price:1999,duration:"3-4 hours",popular:!1}]}},Hx={color:"#eff6ff",iconColor:"#2563eb",desc:"Professional home service",packages:[{id:1,name:"Basic Service",desc:"Standard service package",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Standard Service",desc:"Complete service package",price:499,duration:"2-3 hours",popular:!1}]};function Lx(){const o=mt(),{id:u}=fg(),[f,c]=w.useState(1),[p,m]=w.useState(null),[g,N]=w.useState(null),b=Ux[u]||Hx,h=b.packages.find(_=>_.id===p);function E(_){const L=_.target.files[0];L&&N(URL.createObjectURL(L))}const y=u?u.replace(/-/g," "):"Service";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Ox}),r.jsxs("div",{className:"sd-page",children:[r.jsxs("div",{className:"sd-topbar",children:[r.jsxs("button",{className:"sd-back",onClick:()=>f===1?o("/"):c(1),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back"]}),r.jsx("span",{className:"sd-topbar-title",children:y}),r.jsx("div",{className:"sd-topbar-right"})]}),r.jsxs("div",{className:"sd-steps",children:[r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${f===1?"active":"done"}`,children:f>1?"✓":"1"}),r.jsx("span",{className:`sd-step-label ${f===1?"active":"done"}`,children:"Choose Package"})]}),r.jsx("div",{className:`sd-step-line ${f>1?"done":""}`}),r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${f===2?"active":""}`,children:"2"}),r.jsx("span",{className:`sd-step-label ${f===2?"active":""}`,children:"Add Photo"})]})]}),r.jsxs("div",{className:"sd-inner",children:[r.jsxs("div",{className:"sd-header-card",children:[r.jsx("div",{className:"sd-header-icon",style:{background:b.color,color:b.iconColor},children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}),r.jsxs("div",{className:"sd-header-info",children:[r.jsx("h2",{children:y}),r.jsx("p",{children:b.desc})]})]}),f===1&&r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"sd-section-title",children:"Choose a Package"}),r.jsx("div",{className:"sd-packages",children:b.packages.map(_=>r.jsxs("div",{className:`sd-pkg-card ${p===_.id?"selected":""}`,onClick:()=>m(_.id),children:[r.jsx("div",{className:"sd-pkg-radio",children:r.jsx("div",{className:"sd-pkg-radio-dot"})}),r.jsxs("div",{className:"sd-pkg-info",children:[r.jsxs("div",{className:"sd-pkg-name",children:[_.name,_.popular&&r.jsx("span",{className:"sd-pkg-badge",children:"Popular"})]}),r.jsx("div",{className:"sd-pkg-desc",children:_.desc})]}),r.jsxs("div",{className:"sd-pkg-right",children:[r.jsxs("div",{className:"sd-pkg-price",children:["₹",_.price]}),r.jsx("div",{className:"sd-pkg-duration",children:_.duration})]})]},_.id))})]}),f===2&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"sd-summary",children:[r.jsxs("div",{className:"sd-summary-row",children:[r.jsx("span",{children:"Selected Package"}),r.jsx("strong",{children:h?.name})]}),r.jsx("div",{className:"sd-summary-divider"}),r.jsxs("div",{className:"sd-summary-total",children:[r.jsx("span",{children:"Total"}),r.jsxs("span",{children:["₹",h?.price]})]})]}),r.jsx("p",{className:"sd-section-title",children:"Upload a Photo (Optional)"}),g?r.jsxs("div",{className:"sd-upload-area has-image",onClick:()=>document.getElementById("gallery-input").click(),children:[r.jsx("img",{src:g,alt:"Issue",className:"sd-upload-preview"}),r.jsx("span",{className:"sd-upload-change",children:"Tap to change photo"})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"sd-upload-options",children:[r.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("camera-input").click(),children:[r.jsxs("svg",{viewBox:"0 0 24 24",children:[r.jsx("path",{d:"M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"}),r.jsx("path",{d:"M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})]}),r.jsx("span",{children:"Take Photo"})]}),r.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("gallery-input").click(),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),r.jsx("span",{children:"From Gallery"})]})]}),r.jsxs("div",{className:"sd-upload-area",onClick:()=>document.getElementById("gallery-input").click(),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"})}),r.jsx("span",{className:"sd-upload-title",children:"Upload issue photo"}),r.jsxs("span",{className:"sd-upload-sub",children:["Help the worker understand your issue better.",`
`,"Tap to upload from your device."]})]})]}),r.jsx("input",{id:"camera-input",type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:E}),r.jsx("input",{id:"gallery-input",type:"file",accept:"image/*",style:{display:"none"},onChange:E}),r.jsx("button",{className:"sd-skip-btn",onClick:()=>o("/login"),children:"Skip & Continue without photo →"})]})]}),r.jsxs("div",{className:"sd-cta",children:[r.jsx("div",{className:"sd-cta-info",children:h?r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"sd-cta-price",children:["₹",h.price]}),r.jsx("span",{className:"sd-cta-label",children:h.name})]}):r.jsx("span",{className:"sd-cta-label",children:"Select a package to continue"})}),r.jsx("button",{className:"sd-cta-btn",disabled:!p,onClick:()=>f===1?c(2):o("/login"),children:f===1?"Continue →":"Confirm Booking →"})]})]})]})}const Yx=`
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
`;function qx(){const{user:o,login:u}=Kn(),{show:f,hide:c}=oc(),p=mt(),m=w.useRef(null);if(!o)return p("/login"),null;const[g,N]=w.useState({name:o.name||"",phone:o.phone||"",email:o.email||"aditya.demo@example.com",gender:o.gender||"",dob:o.dob||"",addresses:o.addresses&&o.addresses.length>0?o.addresses:["123, Gandhi Nagar, Bikaner, RJ"]}),[b,h]=w.useState(o.photo||null),[E,y]=w.useState(!1),_=()=>{f(),setTimeout(()=>{u({...o,name:g.name,email:g.email,gender:g.gender,dob:g.dob,addresses:g.addresses,photo:b}),c(),y(!0),setTimeout(()=>y(!1),3e3)},1500)},L=F=>{const X=F.target.files[0];if(X){const Q=new FileReader;Q.onloadend=()=>{h(Q.result)},Q.readAsDataURL(X)}},G=()=>{m.current.click()},B=(F,X)=>{const Q=[...g.addresses];Q[F]=X,N({...g,addresses:Q})},M=()=>{N({...g,addresses:[...g.addresses,""]})},Y=F=>{const X=g.addresses.filter((Q,fe)=>fe!==F);N({...g,addresses:X})};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Yx}),r.jsx(Nr,{}),r.jsxs("div",{className:`toast-notification ${E?"show":""}`,children:[r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#4ade80",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Profile details saved successfully"]}),r.jsx("div",{className:"profile-page",children:r.jsxs("div",{className:"profile-container",children:[r.jsx("div",{className:"profile-topbar",children:r.jsxs("button",{className:"profile-back-btn",onClick:()=>p(-1),children:[r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),r.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Back"]})}),r.jsxs("div",{className:"profile-card",children:[r.jsxs("div",{className:"profile-header",children:[r.jsxs("div",{className:"profile-avatar-wrap",children:[r.jsx("div",{className:"profile-big-avatar",children:b?r.jsx("img",{src:b,alt:"Profile"}):g.name?g.name.charAt(0):"U"}),r.jsx("input",{type:"file",accept:"image/*",ref:m,style:{display:"none"},onChange:L}),r.jsx("div",{className:"edit-avatar-btn",onClick:G,children:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),r.jsx("circle",{cx:"12",cy:"13",r:"4"})]})})]}),r.jsx("h2",{className:"profile-name",children:g.name}),r.jsx("p",{className:"profile-member-since",children:"Member since March 2026"})]}),r.jsx("div",{className:"profile-section-title",children:"Personal Information"}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Full Name"}),r.jsx("input",{className:"form-input",type:"text",value:g.name,onChange:F=>N({...g,name:F.target.value})})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Phone Number"}),r.jsx("input",{className:"form-input",type:"text",value:g.phone,disabled:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email Address"}),r.jsx("input",{className:"form-input",type:"email",value:g.email,onChange:F=>N({...g,email:F.target.value})})]})]}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Gender"}),r.jsxs("select",{className:"form-input",value:g.gender,onChange:F=>N({...g,gender:F.target.value}),children:[r.jsx("option",{value:"",disabled:!0,children:"Select Gender"}),r.jsx("option",{value:"Male",children:"Male"}),r.jsx("option",{value:"Female",children:"Female"}),r.jsx("option",{value:"Other",children:"Other"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Date of Birth"}),r.jsx("input",{className:"form-input",type:"date",value:g.dob,onChange:F=>N({...g,dob:F.target.value})})]})]})]}),r.jsxs("div",{className:"profile-card",children:[r.jsx("div",{className:"profile-section-title",children:"Saved Addresses"}),g.addresses.map((F,X)=>r.jsxs("div",{className:"address-box",children:[X===0&&r.jsx("span",{className:"address-badge",children:"Primary"}),r.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Enter complete address...",value:F,onChange:Q=>B(X,Q.target.value),style:{resize:"vertical"}}),X!==0&&r.jsx("button",{className:"remove-address-btn",onClick:()=>Y(X),children:"Remove"})]},X)),r.jsx("button",{className:"add-address-btn",onClick:M,children:"+ Add Another Address"}),r.jsx("button",{className:"save-btn",onClick:_,children:"Save All Details"})]})]})})]})}const Fx=[{id:"plumbing",name:"Plumbing"},{id:"electrical",name:"Electrical"},{id:"ac",name:"AC & Appliances"},{id:"cleaning",name:"Cleaning & Pest"}],zp=[{id:"s1",category:"plumbing",name:"Tap Leakage Repair",desc:"Fix dripping taps, pipes, and minor leaks. Spare parts extra.",price:149,isPackage:!1,time:"45 mins",image:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400"},{id:"s2",category:"plumbing",name:"Bathroom Deep Check & Fix",desc:"Complete plumbing inspection, blockages removed, and pressure testing.",price:599,isPackage:!0,time:"2 hrs",image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"},{id:"s3",category:"electrical",name:"Fan Installation/Repair",desc:"Ceiling or exhaust fan setup, wiring check, and speed fixing.",price:199,isPackage:!1,time:"30 mins",image:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400"},{id:"s4",category:"electrical",name:"Main Board Repair",desc:"MCB replacement, fuse fixing, or complex wiring issues.",price:299,isPackage:!1,time:"1 hr",image:"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=400"},{id:"s5",category:"ac",name:"AC Master Servicing",desc:"Deep jet clean of indoor/outdoor units + gas pressure check.",price:899,isPackage:!0,time:"1.5 hrs",image:"https://placehold.co/400x300/1F5BB5/FFF?text=AC+Master+Service"},{id:"s6",category:"cleaning",name:"Sofa Deep Cleaning",desc:"Foam wash, stain removal, and dry vacuuming for 5-seater.",price:749,isPackage:!1,time:"2 hrs",image:"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400"}],Gx=`
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
`;function Xx(){const o=mt(),[u,f]=w.useState([]),[c,p]=w.useState(""),{cart:m,toggleCartItem:g,isCartConfirmed:N,setIsCartConfirmed:b}=rc();w.useEffect(()=>{window.scrollTo(0,0)},[]);const h=B=>{f(M=>M.includes(B)?M.filter(Y=>Y!==B):[...M,B])},E=w.useMemo(()=>zp.filter(B=>{const M=B.name.toLowerCase().includes(c.toLowerCase())||B.desc.toLowerCase().includes(c.toLowerCase()),Y=u.length===0||u.includes(B.category);return M&&Y}),[c,u]),y=()=>{let B=0,M=0;return Object.keys(m).forEach(Y=>{const F=zp.find(X=>X.id===Y);F&&(B+=1,M+=F.price)}),{totalItems:B,totalPrice:M}},{totalItems:_,totalPrice:L}=y(),G=[{text:"Verified Quality Professionals",icon:r.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})},{text:"Same Day Service Guaranteed",icon:r.jsxs("g",{children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polyline",{points:"12 6 12 12 16 14"})]})},{text:"Fixed Transparent Pricing",icon:r.jsxs("g",{children:[r.jsx("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}),r.jsx("line",{x1:"2",y1:"10",x2:"22",y2:"10"})]})},{text:"30-Day Service Warranty",icon:r.jsx("polyline",{points:"20 6 9 17 4 12"})}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Gx}),r.jsxs("div",{className:"catalog-page",children:[r.jsx(Nr,{}),r.jsx("div",{className:"marquee-wrap",children:r.jsx("div",{className:"marquee-content",children:[...G,...G].map((B,M)=>r.jsxs("div",{className:"marquee-item",children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:B.icon}),B.text]},M))})}),r.jsxs("div",{className:"catalog-container",children:[r.jsxs("aside",{className:"sidebar-cats",children:[r.jsx("h3",{className:"sidebar-title",children:"Categories"}),Fx.map(B=>r.jsxs("label",{className:"cat-label",children:[r.jsx("input",{type:"checkbox",className:"cat-checkbox",checked:u.includes(B.id),onChange:()=>h(B.id)}),B.name]},B.id))]}),r.jsxs("main",{className:"catalog-main",children:[r.jsxs("div",{className:"search-wrap",children:[r.jsx("div",{className:"search-icon",children:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),r.jsx("input",{type:"text",className:"search-input",placeholder:"Search for AC repair, plumbing...",value:c,onChange:B=>p(B.target.value)})]}),r.jsx("div",{className:"svc-list",children:E.length===0?r.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"#6B7280",background:"white",borderRadius:"12px",border:"1px dashed #D1D5DB"},children:[r.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",style:{marginBottom:"16px"},children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("p",{children:"No services match your filters. Try clearing the search or categories."})]}):E.map(B=>{const M=!!m[B.id];return r.jsxs("div",{className:"svc-row",children:[r.jsx("div",{className:"svc-img-wrap",children:r.jsx("img",{src:B.image,alt:B.name,className:"svc-img",loading:"lazy",onError:Y=>{Y.currentTarget.onerror=null,Y.currentTarget.src="https://via.placeholder.com/400x300?text=Image+Unavailable"}})}),r.jsxs("div",{className:"svc-content",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"svc-header",children:[r.jsx("h3",{className:"svc-name",children:B.name}),r.jsxs("div",{className:"svc-price",children:["₹",B.price]})]}),r.jsx("p",{className:"svc-desc",children:B.desc})]}),r.jsxs("div",{className:"svc-bottom",children:[r.jsxs("div",{className:"svc-badges",children:[B.isPackage&&r.jsxs("span",{className:"badge-pkg",children:[r.jsx("span",{style:{color:"var(--primary)"},children:"BEST"})," ",r.jsx("span",{style:{color:"var(--orange)"},children:"VALUE"})]}),r.jsxs("span",{className:"badge-time",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polyline",{points:"12 6 12 12 16 14"})]}),B.time]})]}),r.jsx("div",{className:"svc-action",children:M?r.jsx("button",{className:"btn-add",style:{background:"#FEE2E2",color:"#DC2626",borderColor:"#FECACA"},onClick:()=>{g(B.id),b(!1)},children:"Remove"}):r.jsx("button",{className:"btn-add",onClick:()=>{g(B.id),b(!1)},children:"Add"})})]})]})]},B.id)})})]})]}),_>0&&r.jsxs("div",{className:"floating-cart",children:[r.jsxs("div",{className:"cart-info",children:[r.jsxs("h4",{children:[_," item",_>1?"s":""," added"]}),r.jsxs("p",{children:["₹",L]})]}),r.jsx("button",{className:"cart-btn",onClick:()=>o("/checkout"),children:"View Cart →"})]}),r.jsx(Jp,{})]})]})}const Qx=[{id:"s1",category:"plumbing",name:"Tap Leakage Repair",price:149,image:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400"},{id:"s2",category:"plumbing",name:"Bathroom Deep Check & Fix",price:599,image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"},{id:"s3",category:"electrical",name:"Fan Installation/Repair",price:199,image:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400"},{id:"s4",category:"electrical",name:"Main Board Repair",price:299,image:"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=400"},{id:"s5",category:"ac",name:"AC Master Servicing",price:899,image:"https://placehold.co/400x300/1F5BB5/FFF?text=AC+Master+Service"},{id:"s6",category:"cleaning",name:"Sofa Deep Cleaning",price:749,image:"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400"}],Cp=`
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
`;function Zx(){const o=mt(),{cart:u,toggleCartItem:f,updateItemImage:c,getCartCount:p,clearCart:m}=rc(),{user:g,login:N}=Kn(),{show:b,hide:h}=oc(),[E,y]=w.useState(1),[_,L]=w.useState(null),G=w.useRef(null),B=g?.addresses||[],[M,Y]=w.useState(B.length>0?0:null),[F,X]=w.useState(B.length===0),[Q,fe]=w.useState(""),[ve,P]=w.useState("today"),be=Object.entries(u).map(([H,Z])=>({...Qx.find(oe=>oe.id===H),...Z})).filter(H=>H.name),Me=p(),nt=be.reduce((H,Z)=>H+Z.price,0),Ue=49,De=nt+Ue;w.useEffect(()=>{window.scrollTo(0,0)},[E]);const $e=H=>{L(H),G.current?.click()},Ve=H=>{const Z=H.target.files[0];Z&&_&&(c(_,URL.createObjectURL(Z)),L(null))},Ne=()=>{if(!g){o("/login");return}E<3?y(E+1):(b(),setTimeout(()=>{h();const H={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0},Z={id:`BKN-${Math.floor(1e3+Math.random()*9e3)}`,status:"pending",date:new Date().toLocaleString("en-US",H),address:B[M]||Q,services:be.map(oe=>({name:oe.name,image:oe.image,price:oe.price,issuePhoto:oe.issuePhoto})),total:De},me=g.bookings||[];N({...g,bookings:[Z,...me]}),y(4),m()},2e3))},k=()=>F?Q.trim().length>10:M!==null;return Me===0&&E!==4?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Cp}),r.jsxs("div",{className:"sd-page",children:[r.jsxs("div",{className:"sd-topbar",children:[r.jsxs("button",{className:"sd-back",onClick:()=>o("/services"),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back"]}),r.jsx("span",{className:"sd-topbar-title",children:"Checkout"}),r.jsx("div",{className:"sd-topbar-right"})]}),r.jsxs("div",{className:"empty-cart",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"9",cy:"21",r:"1"}),r.jsx("circle",{cx:"20",cy:"21",r:"1"}),r.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),r.jsx("h2",{children:"Your cart is empty"}),r.jsx("p",{children:"Looks like you haven't added any services yet."}),r.jsx("button",{className:"btn-outline",onClick:()=>o("/services"),children:"Browse Services"})]})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Cp}),r.jsxs("div",{className:"sd-page",children:[E<4&&r.jsxs("div",{className:"sd-topbar",children:[r.jsxs("button",{className:"sd-back",onClick:()=>E===1?o(-1):y(E-1),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})," Back"]}),r.jsx("span",{className:"sd-topbar-title",children:"Checkout"}),r.jsx("div",{className:"sd-topbar-right"})]}),E<4&&r.jsxs("div",{className:"sd-steps",children:[r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${E===1?"active":"done"}`,children:E>1?"✓":"1"}),r.jsx("span",{className:`sd-step-label ${E===1?"active":"done"}`,children:"Review"})]}),r.jsx("div",{className:`sd-step-line ${E>1?"done":""}`}),r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${E===2?"active":E>2?"done":""}`,children:E>2?"✓":"2"}),r.jsx("span",{className:`sd-step-label ${E===2?"active":E>2?"done":""}`,children:"Details"})]}),r.jsx("div",{className:`sd-step-line ${E>2?"done":""}`}),r.jsxs("div",{className:"sd-step",children:[r.jsx("div",{className:`sd-step-circle ${E===3?"active":""}`,children:"3"}),r.jsx("span",{className:`sd-step-label ${E===3?"active":""}`,children:"Pay"})]})]}),r.jsxs("div",{className:"sd-inner",children:[E===1&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sd-section-title",children:"Review your services"}),be.map(H=>r.jsxs("div",{className:"sd-pkg-card",children:[r.jsx("img",{src:H.image,alt:H.name,className:"sd-pkg-img"}),r.jsxs("div",{className:"sd-pkg-info",children:[r.jsx("div",{className:"sd-pkg-name",children:H.name}),r.jsxs("div",{className:"sd-pkg-price",children:["₹",H.price]})]}),r.jsx("button",{style:{background:"none",border:"none",color:"#EF4444",cursor:"pointer",padding:"8px",display:"flex",alignItems:"center"},onClick:()=>f(H.id),children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"3 6 5 6 21 6"}),r.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]},H.id))]}),E===2&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sd-section-title",children:"Help the Pro understand the issue"}),r.jsx("p",{style:{fontSize:"0.8rem",color:"#6B7280",marginBottom:"20px"},children:"Upload photos of the problem area. This is optional but highly recommended."}),be.map(H=>r.jsxs("div",{className:"sd-upload-card",children:[r.jsx("div",{className:"sd-upload-header",children:r.jsx("h3",{children:H.name})}),H.issuePhoto?r.jsxs("div",{className:"sd-upload-area has-image",onClick:()=>$e(H.id),children:[r.jsx("img",{src:H.issuePhoto,alt:"Issue",className:"sd-upload-preview"}),r.jsx("span",{className:"sd-upload-change",children:"Tap to change photo"})]}):r.jsxs("div",{className:"sd-upload-area",onClick:()=>$e(H.id),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"})}),r.jsxs("span",{className:"sd-upload-title",children:["Add photo for ",H.name]}),r.jsx("span",{className:"sd-upload-sub",children:"Tap to browse files or use camera"})]})]},H.id)),r.jsx("input",{type:"file",ref:G,accept:"image/*",style:{display:"none"},onChange:Ve})]}),E===3&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sd-section-title",children:"When do you need the service?"}),r.jsxs("div",{className:"sd-time-grid",children:[r.jsx("button",{className:`sd-time-btn ${ve==="today"?"selected":""}`,onClick:()=>P("today"),children:"Today, in 60 mins"}),r.jsx("button",{className:`sd-time-btn ${ve==="tomorrow"?"selected":""}`,onClick:()=>P("tomorrow"),children:"Tomorrow Morning"})]}),r.jsx("h2",{className:"sd-section-title",children:"Service Address"}),B.length>0&&!F&&r.jsxs(r.Fragment,{children:[B.map((H,Z)=>r.jsxs("div",{className:`addr-card ${M===Z?"selected":""}`,onClick:()=>Y(Z),children:[r.jsx("div",{className:"addr-radio",children:r.jsx("div",{className:"addr-radio-dot"})}),r.jsxs("div",{className:"addr-info",children:[r.jsx("h4",{children:Z===0?"Primary Address":`Saved Address ${Z+1}`}),r.jsx("p",{children:H})]})]},Z)),r.jsx("button",{className:"btn-add-addr",onClick:()=>{X(!0),Y(null)},children:"+ Use a different address"})]}),F&&r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("textarea",{className:"addr-input",rows:"3",placeholder:"Enter House No, Building, Area/Locality in Bikaner...",value:Q,onChange:H=>fe(H.target.value),autoFocus:!0}),B.length>0&&r.jsx("button",{style:{background:"none",border:"none",color:"var(--primary)",fontWeight:"600",cursor:"pointer",fontSize:"0.85rem"},onClick:()=>{X(!1),Y(0)},children:"Cancel & use saved address"})]}),r.jsx("h2",{className:"sd-section-title",children:"Payment Summary"}),r.jsxs("div",{className:"sd-summary",children:[r.jsxs("div",{className:"sd-summary-row",children:[r.jsxs("span",{children:["Item Total (",Me," items)"]}),r.jsxs("span",{children:["₹",nt]})]}),r.jsxs("div",{className:"sd-summary-row",children:[r.jsx("span",{children:"Trust & Safety Fee"}),r.jsxs("span",{children:["₹",Ue]})]}),r.jsx("div",{className:"sd-summary-divider"}),r.jsxs("div",{className:"sd-summary-total",children:[r.jsx("span",{children:"Grand Total"}),r.jsxs("span",{style:{color:"var(--primary)"},children:["₹",De]})]})]})]}),E===4&&r.jsxs("div",{className:"success-screen",children:[r.jsx("div",{className:"success-icon-wrap",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})})}),r.jsx("h2",{className:"success-title",children:"Booking Confirmed!"}),r.jsx("p",{className:"success-sub",children:"Your request has been placed. A verified professional will be assigned shortly."}),r.jsxs("div",{className:"success-actions",children:[r.jsx("button",{className:"btn-full btn-primary-full",onClick:()=>o("/bookings"),children:"View My Bookings"}),r.jsx("button",{className:"btn-full btn-outline-full",onClick:()=>o("/services"),children:"Book More Services"}),r.jsx("button",{className:"btn-full btn-text-full",onClick:()=>o("/"),children:"Back to Home"})]})]})]}),E<4&&r.jsxs("div",{className:"sd-cta",children:[r.jsxs("div",{className:"sd-cta-info",children:[r.jsxs("span",{className:"sd-cta-price",children:["₹",De]}),r.jsx("span",{className:"sd-cta-label",children:"Grand Total"})]}),r.jsx("button",{className:"sd-cta-btn",onClick:Ne,disabled:E===3&&!k(),children:E===1?"Next: Add Details →":E===2?"Next: Schedule →":"Pay & Place Order"})]})]})]})}const Ks={WORKER_TERM:"Pro",SUPPORT_EMAIL:"support@nowfix.in"},Vx=`
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
`;function Kx(){const o=mt(),{user:u}=Kn(),[f,c]=w.useState("upcoming"),[p,m]=w.useState(null);if(w.useEffect(()=>{window.scrollTo(0,0),u||o("/login")},[u,o]),!u)return null;const N=(u?.bookings||[]).filter(h=>f==="upcoming"?h.status==="assigned"||h.status==="pending":h.status==="completed"||h.status==="cancelled"),b=h=>h.map((E,y)=>typeof E=="string"?r.jsxs("div",{className:"mb-service-item",children:[r.jsx("div",{className:"mb-service-img",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"🔧"}),r.jsx("div",{className:"mb-service-info",children:r.jsx("div",{className:"mb-service-name",children:E})})]},y):r.jsxs("div",{className:"mb-service-item",children:[r.jsx("img",{src:E.image,alt:E.name,className:"mb-service-img"}),r.jsxs("div",{className:"mb-service-info",children:[r.jsx("div",{className:"mb-service-name",children:E.name}),r.jsxs("div",{className:"mb-service-meta",children:["Qty: ",E.qty," • ₹",E.price]})]})]},y));return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Vx}),r.jsx(Nr,{}),r.jsx("div",{className:"mb-page",children:r.jsxs("div",{className:"mb-container",children:[r.jsxs("div",{className:"mb-header",children:[r.jsx("button",{className:"mb-back-btn",onClick:()=>o(-1),children:r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),r.jsx("polyline",{points:"12 19 5 12 12 5"})]})}),r.jsx("h1",{className:"mb-title",children:"My Bookings"})]}),r.jsxs("div",{className:"mb-tabs",children:[r.jsx("button",{className:`mb-tab ${f==="upcoming"?"active":""}`,onClick:()=>c("upcoming"),children:"Upcoming"}),r.jsx("button",{className:`mb-tab ${f==="past"?"active":""}`,onClick:()=>c("past"),children:"Past Bookings"})]}),r.jsx("div",{className:"mb-list",children:N.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),r.jsxs("h3",{children:["No ",f," bookings"]}),r.jsxs("p",{children:["You don't have any ",f," service requests right now."]}),r.jsx("button",{className:"mb-btn mb-btn-primary",style:{width:"auto",padding:"10px 24px"},onClick:()=>o("/services"),children:"Book a Service"})]}):N.map(h=>r.jsxs("div",{className:"mb-card",children:[r.jsxs("div",{className:"mb-card-head",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"mb-id",children:["ID: ",h.id]}),r.jsx("div",{className:"mb-date",children:h.date})]}),r.jsx("div",{className:`mb-status status-${h.status}`,children:h.status})]}),r.jsxs("div",{className:"mb-services",children:[b(h.services),r.jsxs("div",{className:"mb-total",children:[r.jsx("span",{children:"Total Amount"}),r.jsxs("span",{children:["₹",h.total]})]})]}),h.status==="pending"&&r.jsxs("div",{style:{background:"#FFFBEB",color:"#D97706",padding:"12px",borderRadius:"8px",fontSize:"0.85rem",fontWeight:"600",textAlign:"center",border:"1px solid #FDE68A"},children:["⏳ Finding the best ",Ks.WORKER_TERM," near you..."]}),r.jsxs("div",{className:"mb-actions",children:[r.jsx("button",{className:"mb-btn mb-btn-outline",onClick:()=>alert("Redirecting to WhatsApp support..."),children:"Support"}),r.jsx("button",{className:"mb-btn mb-btn-primary",onClick:()=>m(h),children:"View Details"})]})]},h.id))})]})}),r.jsx("div",{className:`detail-modal-overlay ${p?"open":""}`,onClick:()=>m(null),children:r.jsxs("div",{className:"detail-modal-content",onClick:h=>h.stopPropagation(),children:[r.jsxs("div",{className:"detail-header",children:[r.jsx("h2",{children:"Booking Summary"}),r.jsx("button",{className:"detail-close",onClick:()=>m(null),children:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),p&&r.jsxs("div",{className:"detail-body",children:[r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Order Status"}),r.jsxs("div",{className:"detail-row",children:[r.jsx("strong",{children:"Booking ID:"})," ",r.jsx("span",{children:p.id})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("strong",{children:"Date & Time:"})," ",r.jsx("span",{children:p.date})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("strong",{children:"Service Address:"}),r.jsx("span",{style:{textAlign:"right",maxWidth:"60%"},children:p.address})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("strong",{children:"Current Status:"}),r.jsx("span",{className:`mb-status status-${p.status}`,style:{fontSize:"0.65rem"},children:p.status})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Services Booked"}),r.jsx("div",{className:"mb-services",style:{marginBottom:0},children:b(p.services)})]}),p.services.some(h=>h.issuePhoto)&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Issue Photos Provided"}),r.jsx("div",{className:"issue-grid",children:p.services.filter(h=>h.issuePhoto).map((h,E)=>r.jsxs("div",{className:"issue-img-wrap",children:[r.jsx("img",{src:h.issuePhoto,alt:"Issue"}),r.jsx("div",{className:"issue-img-label",children:h.name})]},E))})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Payment Details"}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{children:"Item Total"})," ",r.jsxs("span",{children:["₹",p.total-49]})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{children:"Trust & Safety Fee"})," ",r.jsx("span",{children:"₹49"})]}),r.jsxs("div",{className:"detail-row grand-total",children:[r.jsx("span",{children:"Amount Paid"})," ",r.jsxs("span",{style:{color:"var(--primary)"},children:["₹",p.total]})]}),r.jsxs("div",{className:"detail-row",style:{marginTop:"8px",fontSize:"0.8rem"},children:[r.jsx("span",{children:"Payment Mode"})," ",r.jsx("strong",{children:"Pay after service"})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Safety, Terms & Warranty"}),r.jsxs("div",{className:"legal-box",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"30-Day Warranty:"})," Covers rework for the same issue. Does not cover new parts or physical damage post-service."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Cancellation:"})," Free cancellation up to 2 hours before the scheduled time. A fee of ₹99 applies thereafter."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Safety Promise:"})," All our ",Ks.WORKER_TERM,"s undergo background checks. Please ask for their NowFix ID upon arrival."]}),r.jsxs("p",{style:{marginTop:"12px",borderTop:"1px solid #D1D5DB",paddingTop:"12px"},children:["Need help? Email us at ",r.jsx("strong",{style:{color:"var(--primary)"},children:Ks.SUPPORT_EMAIL})]})]})]})]})]})})]})}let Zl=null;function Wp(){return Zl||(Zl=new(window.AudioContext||window.webkitAudioContext)),Zl.state==="suspended"&&Zl.resume(),Zl}function Be(o,u,f,c=.3,p=!0){try{const m=Wp(),g=m.createOscillator(),N=m.createGain();g.type=u,g.frequency.setValueAtTime(o,m.currentTime),N.gain.setValueAtTime(c,m.currentTime),p&&N.gain.exponentialRampToValueAtTime(.001,m.currentTime+f),g.connect(N),N.connect(m.destination),g.start(m.currentTime),g.stop(m.currentTime+f)}catch{}}function Jx(o,u=.15){try{const f=Wp(),c=f.sampleRate*o,p=f.createBuffer(1,c,f.sampleRate),m=p.getChannelData(0);for(let b=0;b<c;b++)m[b]=(Math.random()*2-1)*Math.max(0,1-b/c);const g=f.createBufferSource(),N=f.createGain();g.buffer=p,N.gain.setValueAtTime(u,f.currentTime),N.gain.exponentialRampToValueAtTime(.001,f.currentTime+o),g.connect(N),N.connect(f.destination),g.start()}catch{}}function $x(){Be(880,"sine",.1,.25),setTimeout(()=>Be(1320,"sine",.08,.15),30)}function Wx(o){const u=800+o*150;Be(u,"sine",.1,.2),setTimeout(()=>Be(u*1.5,"triangle",.12,.18),40),o>=3&&setTimeout(()=>Be(u*2,"sine",.08,.12),80)}function Ix(){Be(1200,"sine",.08,.2),setTimeout(()=>Be(1500,"sine",.08,.18),60),setTimeout(()=>Be(1800,"triangle",.15,.15),120)}function Px(){Be(120,"sawtooth",.3,.35),Be(80,"square",.2,.15),Jx(.25,.2)}function e1(){Be(523,"sine",.1,.2),setTimeout(()=>Be(659,"sine",.1,.2),80),setTimeout(()=>Be(784,"sine",.15,.2),160)}function t1(){[523,659,784,1047].forEach((u,f)=>{setTimeout(()=>Be(u,"triangle",.15,.2),f*100)})}function a1(){Be(440,"square",.08,.15),setTimeout(()=>Be(554,"square",.08,.15),100),setTimeout(()=>Be(659,"square",.08,.15),200),setTimeout(()=>Be(880,"triangle",.2,.2),300)}function n1(){Be(440,"triangle",.2,.25),setTimeout(()=>Be(370,"triangle",.2,.25),200),setTimeout(()=>Be(330,"triangle",.2,.25),400),setTimeout(()=>Be(262,"sine",.4,.2),600)}function l1(){Be(1e3,"square",.03,.12)}const Tp=12,Js=3,$s=45,i1=2e3,xr={wrench:{emoji:"🔧",label:"Repair",points:10,color:"#3b82f6",duration:1200},spark:{emoji:"⚡",label:"Urgent!",points:25,color:"#f59e0b",duration:800},diamond:{emoji:"💎",label:"Bonus!",points:50,color:"#8b5cf6",duration:600},bomb:{emoji:"💣",label:"Danger!",points:-1,color:"#ef4444",duration:1400},heart:{emoji:"❤️‍🩹",label:"+1 Life!",points:0,color:"#ec4899",duration:700}},jr=[{name:"Trainee",threshold:0,spawnMin:900,spawnMax:1400,maxActive:2},{name:"Handyman",threshold:100,spawnMin:700,spawnMax:1100,maxActive:3},{name:"Technician",threshold:250,spawnMin:550,spawnMax:900,maxActive:3},{name:"Expert",threshold:500,spawnMin:400,spawnMax:750,maxActive:4},{name:"Master Pro",threshold:800,spawnMin:300,spawnMax:600,maxActive:5}];function Vl(o){let u=jr[0];for(const f of jr)o>=f.threshold&&(u=f);return u}function r1(o){const u=Math.random();return o>400&&u<.04?"heart":u<.12?"bomb":u<.22?"diamond":u<.42?"spark":"wrench"}const o1=`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&display=swap');

  .gp {
    min-height: 100vh;
    background: linear-gradient(170deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
    font-family: 'Outfit', var(--font-body, sans-serif);
    display: flex;
    flex-direction: column;
    color: #e2e8f0;
    overflow-x: hidden;
    position: relative;
  }

  /* ── Top Bar ── */
  .gp-topbar {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    padding: 0 1.25rem;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .gp-back {
    display: flex; align-items: center; gap: 6px;
    background: none; border: none;
    font-size: 0.85rem; font-weight: 600;
    color: #94a3b8; cursor: pointer;
    font-family: inherit;
    transition: color 0.2s;
  }
  .gp-back:hover { color: #f1f5f9; }
  .gp-back svg { width: 18px; height: 18px; fill: currentColor; }

  .gp-topbar-title {
    font-size: 1rem; font-weight: 800;
    background: linear-gradient(135deg, #FF9F1C, #f97316);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
  }

  /* ── Container ── */
  .gp-wrap {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; padding: 1rem 1rem 2rem;
    max-width: 520px; margin: 0 auto; width: 100%;
  }

  /* ── HUD ── */
  .gp-hud {
    width: 100%; display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center; gap: 8px;
    margin-bottom: 16px;
    padding: 12px 16px;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    backdrop-filter: blur(8px);
  }

  .gp-hud-left { display: flex; flex-direction: column; gap: 4px; }
  .gp-hud-center { display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .gp-hud-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }

  .gp-score-val {
    font-size: 1.6rem; font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f97316);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    line-height: 1;
  }

  .gp-label {
    font-size: 0.6rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    color: #64748b;
  }

  .gp-level-badge {
    font-size: 0.65rem; font-weight: 800;
    padding: 3px 10px; border-radius: 20px;
    background: rgba(99, 102, 241, 0.2);
    color: #a5b4fc; border: 1px solid rgba(99, 102, 241, 0.3);
    letter-spacing: 0.03em;
  }

  .gp-lives { display: flex; gap: 4px; }
  .gp-heart { font-size: 1.1rem; transition: all 0.3s; }
  .gp-heart.lost { opacity: 0.15; transform: scale(0.8); filter: grayscale(1); }

  .gp-combo {
    font-size: 0.9rem; font-weight: 900;
    color: #fbbf24; line-height: 1; min-height: 1.1em;
    transition: all 0.2s;
  }
  .gp-combo.big { color: #f97316; transform: scale(1.2); }
  .gp-combo.huge { color: #ef4444; transform: scale(1.4); animation: comboShake 0.3s ease; }

  @keyframes comboShake {
    0%, 100% { transform: scale(1.4) rotate(0); }
    25% { transform: scale(1.5) rotate(-5deg); }
    75% { transform: scale(1.5) rotate(5deg); }
  }

  /* Time bar */
  .gp-time-wrap {
    width: 100%; height: 8px;
    background: rgba(255,255,255,0.06);
    border-radius: 10px; overflow: hidden;
    margin-bottom: 16px;
    position: relative;
  }

  .gp-time-bar {
    height: 100%; border-radius: 10px;
    background: linear-gradient(90deg, #22c55e, #16a34a);
    transition: width 1s linear, background 0.5s;
  }
  .gp-time-bar.warn { background: linear-gradient(90deg, #f59e0b, #d97706); }
  .gp-time-bar.crit { background: linear-gradient(90deg, #ef4444, #dc2626); animation: timePulse 0.5s infinite; }

  @keyframes timePulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  /* ── Game Grid ── */
  .gp-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
    min-height: 480px;
    padding: 14px;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
  }

  /* Subtle grid pattern background */
  .gp-grid::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
  }

  .gp-cell {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255,255,255,0.04);
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    font-size: 2rem;
    user-select: none;
    position: relative;
    transition: background 0.15s, border-color 0.15s, transform 0.1s;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
  }

  .gp-cell:active { transform: scale(0.92); }

  .gp-cell.flash-green {
    background: rgba(34, 197, 94, 0.2) !important;
    border-color: rgba(34, 197, 94, 0.4) !important;
  }
  .gp-cell.flash-red {
    background: rgba(239, 68, 68, 0.25) !important;
    border-color: rgba(239, 68, 68, 0.5) !important;
  }

  /* Item inside cell */
  .gp-item {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 2.2rem;
    animation: itemPop 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    pointer-events: none;
  }

  @keyframes itemPop {
    0% { transform: scale(0) rotate(-15deg); opacity: 0; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
  }

  /* Countdown ring around item */
  .gp-item-ring {
    position: absolute; inset: 4px;
    border-radius: 12px;
    border: 2.5px solid transparent;
    pointer-events: none;
    animation: ringShrink var(--ring-duration, 1s) linear forwards;
  }

  @keyframes ringShrink {
    0% { border-color: rgba(255,255,255,0.25); opacity: 1; }
    70% { border-color: rgba(255,255,255,0.15); opacity: 0.7; }
    100% { border-color: transparent; opacity: 0; }
  }

  /* Points splash */
  .gp-splash {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem; font-weight: 900;
    pointer-events: none;
    z-index: 5;
    animation: splashUp 0.6s ease-out forwards;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }
  .gp-splash.green { color: #4ade80; }
  .gp-splash.gold { color: #fbbf24; }
  .gp-splash.purple { color: #c084fc; }
  .gp-splash.red { color: #f87171; }
  .gp-splash.pink { color: #f472b6; }

  @keyframes splashUp {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
    100% { transform: translate(-50%, -120%) scale(1.3); opacity: 0; }
  }

  /* Screen shake */
  .gp-grid.shake {
    animation: screenShake 0.4s ease;
  }

  @keyframes fabBounce {
    0%, 100% { transform: translateY(0); }
    40%       { transform: translateY(-25px); }
    60%       { transform: translateY(-15px); }
  }

  @keyframes screenShake {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-4px, 2px); }
    40% { transform: translate(4px, -2px); }
    60% { transform: translate(-3px, 3px); }
    80% { transform: translate(3px, -1px); }
  }

  /* ── Overlays ── */
  .gp-overlay {
    position: absolute; inset: 0;
    background: rgba(15, 23, 42, 0.92);
    backdrop-filter: blur(10px);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    z-index: 20; text-align: center;
    padding: 2rem; border-radius: 20px;
    animation: overlayIn 0.4s ease;
  }

  @keyframes overlayIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  .gp-overlay-icon {
    font-size: 3.5rem;
    margin-bottom: 12px;
    animation: iconBounce 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes iconBounce {
    0% { transform: scale(0); }
    60% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .gp-overlay h1 {
    font-size: 1.8rem; font-weight: 900;
    margin-bottom: 6px;
    background: linear-gradient(135deg, #fbbf24, #f97316);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }

  .gp-overlay p {
    color: #94a3b8; font-size: 0.9rem;
    line-height: 1.6; margin-bottom: 8px;
    max-width: 300px;
  }

  .gp-overlay-btn {
    background: linear-gradient(135deg, #FF9F1C, #f97316);
    color: white; border: none;
    padding: 14px 36px; font-size: 1.05rem;
    font-weight: 800; font-family: inherit;
    border-radius: 14px; cursor: pointer;
    box-shadow: 0 8px 24px rgba(249, 115, 22, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    letter-spacing: 0.02em;
    margin-top: 8px;
  }
  .gp-overlay-btn:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 12px 32px rgba(249, 115, 22, 0.5);
  }
  .gp-overlay-btn:active { transform: scale(0.97); }

  /* ── Stats Card (Game Over) ── */
  .gp-stats {
    width: 100%; max-width: 280px;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 16px; margin: 12px 0 16px;
    display: flex; flex-direction: column; gap: 8px;
  }

  .gp-stat-row {
    display: flex; justify-content: space-between;
    align-items: center;
    font-size: 0.82rem;
  }
  .gp-stat-row span:first-child { color: #64748b; font-weight: 600; }
  .gp-stat-row span:last-child { color: #e2e8f0; font-weight: 800; }

  .gp-stat-divider {
    height: 1px;
    background: rgba(255,255,255,0.06);
    margin: 2px 0;
  }

  .gp-overlay-tagline {
    font-size: 0.85rem;
    font-weight: 600;
    background: linear-gradient(135deg, #fbbf24, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 6px;
    text-align: center;
  }

  .gp-highscore {
    font-size: 0.72rem; font-weight: 700;
    color: #fbbf24;
    padding: 6px 14px; border-radius: 20px;
    background: rgba(251, 191, 36, 0.1);
    border: 1px solid rgba(251, 191, 36, 0.2);
    margin-bottom: 6px;
    animation: hsGlow 1.5s ease-in-out infinite alternate;
  }

  @keyframes hsGlow {
    from { box-shadow: 0 0 8px rgba(251, 191, 36, 0.1); }
    to { box-shadow: 0 0 16px rgba(251, 191, 36, 0.25); }
  }

  /* ── Instructions ── */
  .gp-instructions {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 8px; width: 100%; max-width: 300px;
    margin: 12px 0 20px;
  }

  .gp-instr-item {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 10px;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 10px;
    font-size: 0.72rem; font-weight: 600;
    color: #94a3b8;
  }
  .gp-instr-item span:first-child { font-size: 1.1rem; }

  /* Level up toast */
  .gp-levelup {
    position: fixed; top: 80px;
    left: 50%; transform: translateX(-50%);
    z-index: 100;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white; font-weight: 800;
    font-size: 0.85rem;
    padding: 10px 24px; border-radius: 30px;
    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
    animation: toastSlide 2s ease forwards;
    pointer-events: none;
  }

  @keyframes toastSlide {
    0% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
    15% { transform: translateX(-50%) translateY(0); opacity: 1; }
    75% { transform: translateX(-50%) translateY(0); opacity: 1; }
    100% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
  }

  /* Responsive */
  @media (max-width: 480px) {
    .gp-topbar { padding: 0 1rem; height: 50px; }
    .gp-wrap { padding: 0.5rem 0.5rem 1rem; }
    .gp-grid { 
      grid-template-columns: repeat(3, 1fr); 
      grid-template-rows: repeat(4, 1fr); 
      aspect-ratio: 3/4;
      gap: 6px; padding: 8px; border-radius: 12px; 
    }
    .gp-cell { border-radius: 8px; }
    .gp-item { font-size: 1.8rem; }
    .gp-hud { padding: 8px 10px; gap: 4px; border-radius: 12px; margin-bottom: 12px; }
    .gp-score-val { font-size: 1.2rem; }
    .gp-label { font-size: 0.55rem; }
    .gp-overlay { padding: 1.5rem 1rem; border-radius: 12px; overflow-y: auto; }
    .gp-overlay h1 { font-size: 1.3rem; margin-bottom: 2px; }
    .gp-overlay p { font-size: 0.75rem; max-width: 100%; margin-bottom: 12px; }
    .gp-overlay-icon { font-size: 2.2rem; margin-bottom: 6px; }
    .gp-instructions { max-width: 100%; gap: 6px; margin: 4px 0 12px; }
    .gp-instr-item { padding: 4px 6px; font-size: 0.65rem; }
    .gp-instr-item span:first-child { font-size: 0.85rem; }
    .gp-stats { max-width: 100%; padding: 10px 14px; margin: 6px 0; }
    .gp-highscore { padding: 4px 10px; font-size: 0.65rem; }
    .gp-overlay-btn { padding: 10px 24px; font-size: 0.95rem; margin-top: 4px; }
    .gp-splash { font-size: 0.85rem; }
  }
`;function s1(){const o=mt(),[u,f]=w.useState("start"),[c,p]=w.useState(0),[m,g]=w.useState($s),[N,b]=w.useState(Js),[h,E]=w.useState(0),[y,_]=w.useState(0),[L,G]=w.useState(0),[B,M]=w.useState(0),[Y,F]=w.useState({}),[X,Q]=w.useState([]),[fe,ve]=w.useState({}),[P,be]=w.useState(!1),[Me,nt]=w.useState(null),[Ue,De]=w.useState(()=>{try{return parseInt(localStorage.getItem("nowfix_game_hs")||"0")}catch{return 0}}),$e=w.useRef(jr[0].name),Ve=w.useRef(null),Ne=w.useRef(null),k=w.useRef({});w.useEffect(()=>{if(u!=="playing")return;if(m<=0){H();return}m<=5&&l1();const $=setInterval(()=>g(te=>te-1),1e3);return()=>clearInterval($)},[u,m]),w.useEffect(()=>{u==="playing"&&N<=0&&H()},[N,u]),w.useEffect(()=>{if(u!=="playing")return;const $=Vl(c);$.name!==$e.current&&($e.current=$.name,nt($.name),t1(),setTimeout(()=>nt(null),2200))},[c,u]),w.useEffect(()=>{if(u!=="playing")return;const $=()=>{F(ne=>{const ke=Vl(c);if(Object.keys(ne).length>=ke.maxActive)return te(),ne;const Xe=new Set(Object.keys(ne).map(Number)),Kt=[];for(let Yt=0;Yt<Tp;Yt++)Xe.has(Yt)||Kt.push(Yt);if(Kt.length===0)return te(),ne;const rt=Kt[Math.floor(Math.random()*Kt.length)],Qe=r1(c),ma=xr[Qe],Jn=Date.now()+Math.random(),Il=setTimeout(()=>{F(Yt=>{const ha={...Yt};return ha[rt]&&ha[rt].id===Jn&&(Qe!=="bomb"&&(M($n=>$n+1),E(0)),delete ha[rt]),ha})},ma.duration);return k.current[Jn]=Il,te(),{...ne,[rt]:{type:Qe,id:Jn}}})},te=()=>{const ne=Vl(c),ke=Math.random()*(ne.spawnMax-ne.spawnMin)+ne.spawnMin;Ne.current=setTimeout($,ke)};return $(),()=>{clearTimeout(Ne.current)}},[u]),w.useEffect(()=>()=>{Object.values(k.current).forEach(clearTimeout),clearTimeout(Ne.current),clearTimeout(Ve.current)},[]);const H=w.useCallback(()=>{f("over"),F({}),clearTimeout(Ne.current),Object.values(k.current).forEach(clearTimeout),k.current={},n1(),p($=>{if($>Ue){De($);try{localStorage.setItem("nowfix_game_hs",String($))}catch{}}return $})},[Ue]),Z=()=>{p(0),g($s),b(Js),E(0),_(0),G(0),M(0),F({}),Q([]),ve({}),be(!1),$e.current=jr[0].name,f("playing"),a1()},me=$=>{if(u!=="playing")return;const te=Y[$];if(!te)return;const ne=xr[te.type];if(k.current[te.id]&&(clearTimeout(k.current[te.id]),delete k.current[te.id]),F(Qe=>{const ma={...Qe};return delete ma[$],ma}),te.type==="bomb"){b(Qe=>Qe-1),E(0),M(Qe=>Qe+1),oe($,"red"),j(),O($,"💥","red"),Px();return}if(te.type==="heart"){b(Qe=>Math.min(Qe+1,5)),oe($,"green"),O($,"+1 ❤️","pink"),e1();return}const ke=h+1;E(ke),ke>y&&_(ke),G(Qe=>Qe+1);const We=Math.min(Math.floor(ke/3)+1,5),Xe=ne.points*We;p(Qe=>Qe+Xe),oe($,"green");const Kt=te.type==="diamond"?"purple":te.type==="spark"?"gold":"green",rt=We>1?"+"+Xe+" x"+We:"+"+Xe;O($,rt,Kt),te.type==="diamond"?Ix():We>=2?Wx(We):$x(),clearTimeout(Ve.current),Ve.current=setTimeout(()=>E(0),i1)},oe=($,te)=>{ve(ne=>({...ne,[$]:te})),setTimeout(()=>ve(ne=>{const ke={...ne};return delete ke[$],ke}),200)},j=()=>{be(!0),setTimeout(()=>be(!1),400)},O=($,te,ne)=>{const ke=Date.now()+Math.random();Q(We=>[...We,{cellIndex:$,text:te,color:ne,id:ke}]),setTimeout(()=>Q(We=>We.filter(Xe=>Xe.id!==ke)),600)},q=Vl(c),V=m/$s*100,ee=Math.min(Math.floor(h/3)+1,5),re="gp-time-bar"+(V<=15?" crit":V<=35?" warn":"");return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:o1}),r.jsxs("div",{className:"gp",children:[r.jsxs("div",{className:"gp-topbar",children:[r.jsxs("button",{className:"gp-back",onClick:()=>o("/"),children:[r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Home"]}),r.jsx("div",{className:"gp-topbar-title",children:"Fix-It Fast!"}),r.jsx("div",{style:{width:60}})]}),r.jsxs("div",{className:"gp-wrap",children:[u==="playing"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"gp-hud",children:[r.jsxs("div",{className:"gp-hud-left",children:[r.jsx("span",{className:"gp-label",children:"Score"}),r.jsx("span",{className:"gp-score-val",children:c})]}),r.jsxs("div",{className:"gp-hud-center",children:[r.jsx("span",{className:"gp-level-badge",children:q.name}),r.jsx("div",{className:"gp-combo"+(ee>=4?" huge":ee>=2?" big":""),children:h>0?"x"+ee+" Combo":""})]}),r.jsxs("div",{className:"gp-hud-right",children:[r.jsx("span",{className:"gp-label",children:"Lives"}),r.jsx("div",{className:"gp-lives",children:Array.from({length:Js}).map(($,te)=>r.jsx("span",{className:"gp-heart"+(te>=N?" lost":""),children:"❤️"},te))})]})]}),r.jsx("div",{className:"gp-time-wrap",children:r.jsx("div",{className:re,style:{width:V+"%"}})})]}),r.jsxs("div",{className:"gp-grid"+(P?" shake":""),children:[Array.from({length:Tp}).map(($,te)=>{const ne=Y[te],ke=fe[te],We=X.filter(Xe=>Xe.cellIndex===te);return r.jsxs("div",{className:"gp-cell"+(ke==="green"?" flash-green":ke==="red"?" flash-red":""),onMouseDown:()=>me(te),onTouchStart:Xe=>{Xe.preventDefault(),me(te)},children:[ne&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"gp-item",children:xr[ne.type].emoji}),r.jsx("div",{className:"gp-item-ring",style:{"--ring-duration":xr[ne.type].duration+"ms"}})]}),We.map(Xe=>r.jsx("div",{className:"gp-splash "+Xe.color,children:Xe.text},Xe.id))]},te)}),u==="start"&&r.jsxs("div",{className:"gp-overlay",children:[r.jsx("div",{className:"gp-overlay-icon",children:"🛠️"}),r.jsx("h1",{children:"Fix-It Fast!"}),r.jsx("p",{className:"gp-overlay-tagline",children:"Stay Busy"}),r.jsxs("p",{children:["Broken items are popping up all over!",r.jsx("br",{}),"Tap to fix them — but ",r.jsx("strong",{children:"avoid the bombs"})," 💣"]}),r.jsxs("div",{className:"gp-instructions",children:[r.jsxs("div",{className:"gp-instr-item",children:[r.jsx("span",{children:"🔧"})," +10 pts"]}),r.jsxs("div",{className:"gp-instr-item",children:[r.jsx("span",{children:"⚡"})," +25 pts"]}),r.jsxs("div",{className:"gp-instr-item",children:[r.jsx("span",{children:"💎"})," +50 pts"]}),r.jsxs("div",{className:"gp-instr-item",children:[r.jsx("span",{children:"💣"})," -1 Life"]})]}),Ue>0&&r.jsxs("div",{className:"gp-highscore",children:["🏆 Best Score: ",Ue]}),r.jsx("button",{className:"gp-overlay-btn",onClick:Z,children:"Start Fixing!"})]}),u==="over"&&r.jsxs("div",{className:"gp-overlay",children:[r.jsx("div",{className:"gp-overlay-icon",children:N<=0?"💔":"⏱️"}),r.jsx("h1",{children:N<=0?"No Lives Left!":"Time's Up!"}),r.jsxs("div",{className:"gp-stats",children:[r.jsxs("div",{className:"gp-stat-row",children:[r.jsx("span",{children:"Final Score"}),r.jsx("span",{style:{color:"#fbbf24"},children:c})]}),r.jsx("div",{className:"gp-stat-divider"}),r.jsxs("div",{className:"gp-stat-row",children:[r.jsx("span",{children:"Rank"}),r.jsx("span",{children:Vl(c).name})]}),r.jsxs("div",{className:"gp-stat-row",children:[r.jsx("span",{children:"Items Fixed"}),r.jsx("span",{children:L})]}),r.jsxs("div",{className:"gp-stat-row",children:[r.jsx("span",{children:"Missed"}),r.jsx("span",{children:B})]}),r.jsxs("div",{className:"gp-stat-row",children:[r.jsx("span",{children:"Best Combo"}),r.jsxs("span",{children:["x",Math.min(Math.floor(y/3)+1,5)," (",y," hits)"]})]})]}),c>=Ue&&c>0&&r.jsx("div",{className:"gp-highscore",children:"🎉 New High Score!"}),r.jsx("button",{className:"gp-overlay-btn",onClick:Z,children:"Play Again"})]})]})]}),Me&&r.jsxs("div",{className:"gp-levelup",children:["🎖️ Level Up: ",Me,"!"]})]})]})}function c1(){return r.jsx(ox,{children:r.jsx(Wg,{children:r.jsxs(Cg,{children:[r.jsx(Qt,{path:"/",element:r.jsx(Cx,{})}),r.jsx(Qt,{path:"/services",element:r.jsx(Xx,{})}),r.jsx(Qt,{path:"/checkout",element:r.jsx(Zx,{})}),r.jsx(Qt,{path:"/bookings",element:r.jsx(Kx,{})})," ",r.jsx(Qt,{path:"/login",element:r.jsx(Rx,{})}),r.jsx(Qt,{path:"/join",element:r.jsx(_x,{})}),r.jsx(Qt,{path:"/service/:id",element:r.jsx(Lx,{})}),r.jsx(Qt,{path:"/profile",element:r.jsx(qx,{})}),r.jsx(Qt,{path:"/game",element:r.jsx(s1,{})})]})})})}A0.createRoot(document.getElementById("root")).render(r.jsx(w.StrictMode,{children:r.jsx(kx,{children:r.jsx(ux,{children:r.jsx(c1,{})})})}));
