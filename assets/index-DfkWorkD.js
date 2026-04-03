(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function d(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(m){if(m.ep)return;m.ep=!0;const h=d(m);fetch(m.href,h)}})();var Ro={exports:{}},Mn={};var $d;function i0(){if($d)return Mn;$d=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,m,h){var g=null;if(h!==void 0&&(g=""+h),m.key!==void 0&&(g=""+m.key),"key"in m){h={};for(var N in m)N!=="key"&&(h[N]=m[N])}else h=m;return m=h.ref,{$$typeof:r,type:c,key:g,ref:m!==void 0?m:null,props:h}}return Mn.Fragment=f,Mn.jsx=d,Mn.jsxs=d,Mn}var Wd;function u0(){return Wd||(Wd=1,Ro.exports=i0()),Ro.exports}var o=u0(),_o={exports:{}},I={};var Id;function r0(){if(Id)return I;Id=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),g=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),D=Symbol.iterator;function G(b){return b===null||typeof b!="object"?null:(b=D&&b[D]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,U={};function F(b,O,q){this.props=b,this.context=O,this.refs=U,this.updater=q||L}F.prototype.isReactComponent={},F.prototype.setState=function(b,O){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,O,"setState")},F.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function k(){}k.prototype=F.prototype;function Q(b,O,q){this.props=b,this.context=O,this.refs=U,this.updater=q||L}var ae=Q.prototype=new k;ae.constructor=Q,H(ae,F.prototype),ae.isPureReactComponent=!0;var me=Array.isArray;function we(){}var W={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function Ve(b,O,q){var Z=q.ref;return{$$typeof:r,type:b,key:O,ref:Z!==void 0?Z:null,props:q}}function _t(b,O){return Ve(b.type,O,b.props)}function ht(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function Ke(b){var O={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(q){return O[q]})}var Mt=/\/+/g;function pt(b,O){return typeof b=="object"&&b!==null&&b.key!=null?Ke(""+b.key):O.toString(36)}function Be(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(we,we):(b.status="pending",b.then(function(O){b.status==="pending"&&(b.status="fulfilled",b.value=O)},function(O){b.status==="pending"&&(b.status="rejected",b.reason=O)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function _(b,O,q,Z,P){var le=typeof b;(le==="undefined"||le==="boolean")&&(b=null);var de=!1;if(b===null)de=!0;else switch(le){case"bigint":case"string":case"number":de=!0;break;case"object":switch(b.$$typeof){case r:case f:de=!0;break;case R:return de=b._init,_(de(b._payload),O,q,Z,P)}}if(de)return P=P(b),de=Z===""?"."+pt(b,0):Z,me(P)?(q="",de!=null&&(q=de.replace(Mt,"$&/")+"/"),_(P,O,q,"",function(kl){return kl})):P!=null&&(ht(P)&&(P=_t(P,q+(P.key==null||b&&b.key===P.key?"":(""+P.key).replace(Mt,"$&/")+"/")+de)),O.push(P)),1;de=0;var Je=Z===""?".":Z+":";if(me(b))for(var Re=0;Re<b.length;Re++)Z=b[Re],le=Je+pt(Z,Re),de+=_(Z,O,q,le,P);else if(Re=G(b),typeof Re=="function")for(b=Re.call(b),Re=0;!(Z=b.next()).done;)Z=Z.value,le=Je+pt(Z,Re++),de+=_(Z,O,q,le,P);else if(le==="object"){if(typeof b.then=="function")return _(Be(b),O,q,Z,P);throw O=String(b),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return de}function Y(b,O,q){if(b==null)return b;var Z=[],P=0;return _(b,Z,"","",function(le){return O.call(q,le,P++)}),Z}function $(b){if(b._status===-1){var O=b._result;O=O(),O.then(function(q){(b._status===0||b._status===-1)&&(b._status=1,b._result=q)},function(q){(b._status===0||b._status===-1)&&(b._status=2,b._result=q)}),b._status===-1&&(b._status=0,b._result=O)}if(b._status===1)return b._result.default;throw b._result}var ge=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},xe={map:Y,forEach:function(b,O,q){Y(b,function(){O.apply(this,arguments)},q)},count:function(b){var O=0;return Y(b,function(){O++}),O},toArray:function(b){return Y(b,function(O){return O})||[]},only:function(b){if(!ht(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return I.Activity=E,I.Children=xe,I.Component=F,I.Fragment=d,I.Profiler=m,I.PureComponent=Q,I.StrictMode=c,I.Suspense=x,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,I.__COMPILER_RUNTIME={__proto__:null,c:function(b){return W.H.useMemoCache(b)}},I.cache=function(b){return function(){return b.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(b,O,q){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Z=H({},b.props),P=b.key;if(O!=null)for(le in O.key!==void 0&&(P=""+O.key),O)!Te.call(O,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&O.ref===void 0||(Z[le]=O[le]);var le=arguments.length-2;if(le===1)Z.children=q;else if(1<le){for(var de=Array(le),Je=0;Je<le;Je++)de[Je]=arguments[Je+2];Z.children=de}return Ve(b.type,P,Z)},I.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},I.createElement=function(b,O,q){var Z,P={},le=null;if(O!=null)for(Z in O.key!==void 0&&(le=""+O.key),O)Te.call(O,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(P[Z]=O[Z]);var de=arguments.length-2;if(de===1)P.children=q;else if(1<de){for(var Je=Array(de),Re=0;Re<de;Re++)Je[Re]=arguments[Re+2];P.children=Je}if(b&&b.defaultProps)for(Z in de=b.defaultProps,de)P[Z]===void 0&&(P[Z]=de[Z]);return Ve(b,le,P)},I.createRef=function(){return{current:null}},I.forwardRef=function(b){return{$$typeof:N,render:b}},I.isValidElement=ht,I.lazy=function(b){return{$$typeof:R,_payload:{_status:-1,_result:b},_init:$}},I.memo=function(b,O){return{$$typeof:v,type:b,compare:O===void 0?null:O}},I.startTransition=function(b){var O=W.T,q={};W.T=q;try{var Z=b(),P=W.S;P!==null&&P(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(we,ge)}catch(le){ge(le)}finally{O!==null&&q.types!==null&&(O.types=q.types),W.T=O}},I.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},I.use=function(b){return W.H.use(b)},I.useActionState=function(b,O,q){return W.H.useActionState(b,O,q)},I.useCallback=function(b,O){return W.H.useCallback(b,O)},I.useContext=function(b){return W.H.useContext(b)},I.useDebugValue=function(){},I.useDeferredValue=function(b,O){return W.H.useDeferredValue(b,O)},I.useEffect=function(b,O){return W.H.useEffect(b,O)},I.useEffectEvent=function(b){return W.H.useEffectEvent(b)},I.useId=function(){return W.H.useId()},I.useImperativeHandle=function(b,O,q){return W.H.useImperativeHandle(b,O,q)},I.useInsertionEffect=function(b,O){return W.H.useInsertionEffect(b,O)},I.useLayoutEffect=function(b,O){return W.H.useLayoutEffect(b,O)},I.useMemo=function(b,O){return W.H.useMemo(b,O)},I.useOptimistic=function(b,O){return W.H.useOptimistic(b,O)},I.useReducer=function(b,O,q){return W.H.useReducer(b,O,q)},I.useRef=function(b){return W.H.useRef(b)},I.useState=function(b){return W.H.useState(b)},I.useSyncExternalStore=function(b,O,q){return W.H.useSyncExternalStore(b,O,q)},I.useTransition=function(){return W.H.useTransition()},I.version="19.2.4",I}var Pd;function qo(){return Pd||(Pd=1,_o.exports=r0()),_o.exports}var A=qo(),Mo={exports:{}},Bn={},Bo={exports:{}},Oo={};var em;function o0(){return em||(em=1,(function(r){function f(_,Y){var $=_.length;_.push(Y);e:for(;0<$;){var ge=$-1>>>1,xe=_[ge];if(0<m(xe,Y))_[ge]=Y,_[$]=xe,$=ge;else break e}}function d(_){return _.length===0?null:_[0]}function c(_){if(_.length===0)return null;var Y=_[0],$=_.pop();if($!==Y){_[0]=$;e:for(var ge=0,xe=_.length,b=xe>>>1;ge<b;){var O=2*(ge+1)-1,q=_[O],Z=O+1,P=_[Z];if(0>m(q,$))Z<xe&&0>m(P,q)?(_[ge]=P,_[Z]=$,ge=Z):(_[ge]=q,_[O]=$,ge=O);else if(Z<xe&&0>m(P,$))_[ge]=P,_[Z]=$,ge=Z;else break e}}return Y}function m(_,Y){var $=_.sortIndex-Y.sortIndex;return $!==0?$:_.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var g=Date,N=g.now();r.unstable_now=function(){return g.now()-N}}var x=[],v=[],R=1,E=null,D=3,G=!1,L=!1,H=!1,U=!1,F=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function ae(_){for(var Y=d(v);Y!==null;){if(Y.callback===null)c(v);else if(Y.startTime<=_)c(v),Y.sortIndex=Y.expirationTime,f(x,Y);else break;Y=d(v)}}function me(_){if(H=!1,ae(_),!L)if(d(x)!==null)L=!0,we||(we=!0,Ke());else{var Y=d(v);Y!==null&&Be(me,Y.startTime-_)}}var we=!1,W=-1,Te=5,Ve=-1;function _t(){return U?!0:!(r.unstable_now()-Ve<Te)}function ht(){if(U=!1,we){var _=r.unstable_now();Ve=_;var Y=!0;try{e:{L=!1,H&&(H=!1,k(W),W=-1),G=!0;var $=D;try{t:{for(ae(_),E=d(x);E!==null&&!(E.expirationTime>_&&_t());){var ge=E.callback;if(typeof ge=="function"){E.callback=null,D=E.priorityLevel;var xe=ge(E.expirationTime<=_);if(_=r.unstable_now(),typeof xe=="function"){E.callback=xe,ae(_),Y=!0;break t}E===d(x)&&c(x),ae(_)}else c(x);E=d(x)}if(E!==null)Y=!0;else{var b=d(v);b!==null&&Be(me,b.startTime-_),Y=!1}}break e}finally{E=null,D=$,G=!1}Y=void 0}}finally{Y?Ke():we=!1}}}var Ke;if(typeof Q=="function")Ke=function(){Q(ht)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,pt=Mt.port2;Mt.port1.onmessage=ht,Ke=function(){pt.postMessage(null)}}else Ke=function(){F(ht,0)};function Be(_,Y){W=F(function(){_(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(_){_.callback=null},r.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<_?Math.floor(1e3/_):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(_){switch(D){case 1:case 2:case 3:var Y=3;break;default:Y=D}var $=D;D=Y;try{return _()}finally{D=$}},r.unstable_requestPaint=function(){U=!0},r.unstable_runWithPriority=function(_,Y){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var $=D;D=_;try{return Y()}finally{D=$}},r.unstable_scheduleCallback=function(_,Y,$){var ge=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,_){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=$+xe,_={id:R++,callback:Y,priorityLevel:_,startTime:$,expirationTime:xe,sortIndex:-1},$>ge?(_.sortIndex=$,f(v,_),d(x)===null&&_===d(v)&&(H?(k(W),W=-1):H=!0,Be(me,$-ge))):(_.sortIndex=xe,f(x,_),L||G||(L=!0,we||(we=!0,Ke()))),_},r.unstable_shouldYield=_t,r.unstable_wrapCallback=function(_){var Y=D;return function(){var $=D;D=Y;try{return _.apply(this,arguments)}finally{D=$}}}})(Oo)),Oo}var tm;function c0(){return tm||(tm=1,Bo.exports=o0()),Bo.exports}var Do={exports:{}},Fe={};var am;function s0(){if(am)return Fe;am=1;var r=qo();function f(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)v+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(x,v,R){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:E==null?null:""+E,children:x,containerInfo:v,implementation:R}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Fe.createPortal=function(x,v){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(f(299));return h(x,v,null,R)},Fe.flushSync=function(x){var v=g.T,R=c.p;try{if(g.T=null,c.p=2,x)return x()}finally{g.T=v,c.p=R,c.d.f()}},Fe.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(x,v))},Fe.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},Fe.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var R=v.as,E=N(R,v.crossOrigin),D=typeof v.integrity=="string"?v.integrity:void 0,G=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;R==="style"?c.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:D,fetchPriority:G}):R==="script"&&c.d.X(x,{crossOrigin:E,integrity:D,fetchPriority:G,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Fe.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var R=N(v.as,v.crossOrigin);c.d.M(x,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(x)},Fe.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var R=v.as,E=N(R,v.crossOrigin);c.d.L(x,R,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Fe.preloadModule=function(x,v){if(typeof x=="string")if(v){var R=N(v.as,v.crossOrigin);c.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(x)},Fe.requestFormReset=function(x){c.d.r(x)},Fe.unstable_batchedUpdates=function(x,v){return x(v)},Fe.useFormState=function(x,v,R){return g.H.useFormState(x,v,R)},Fe.useFormStatus=function(){return g.H.useHostTransitionStatus()},Fe.version="19.2.4",Fe}var lm;function f0(){if(lm)return Do.exports;lm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Do.exports=s0(),Do.exports}var nm;function d0(){if(nm)return Bn;nm=1;var r=c0(),f=qo(),d=f0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(h(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return x(n),e;if(i===l)return x(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,D=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Ve=Symbol.for("react.activity"),_t=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=ht&&e[ht]||e["@@iterator"],typeof e=="function"?e:null)}var Mt=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case F:return"Profiler";case U:return"StrictMode";case me:return"Suspense";case we:return"SuspenseList";case Ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case Q:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:pt(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return pt(e(t))}catch{}}return null}var Be=Array.isArray,_=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],xe=-1;function b(e){return{current:e}}function O(e){0>xe||(e.current=ge[xe],ge[xe]=null,xe--)}function q(e,t){xe++,ge[xe]=e.current,e.current=t}var Z=b(null),P=b(null),le=b(null),de=b(null);function Je(e,t){switch(q(le,t),q(P,e),q(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bd(t),e=xd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Z),q(Z,e)}function Re(){O(Z),O(P),O(le)}function kl(e){e.memoizedState!==null&&q(de,e);var t=Z.current,a=xd(t,e.type);t!==a&&(q(P,e),q(Z,a))}function Ln(e){P.current===e&&(O(Z),O(P)),de.current===e&&(O(de),Cn._currentValue=$)}var fu,Fo;function _a(e){if(fu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fu=t&&t[1]||"",Fo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fu+e+Fo}var du=!1;function mu(e,t){if(!e||du)return"";du=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(C){var w=C}Reflect.construct(e,[],B)}else{try{B.call()}catch(C){w=C}e.call(B.prototype)}}else{try{throw Error()}catch(C){w=C}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(C){if(C&&w&&typeof C.stack=="string")return[C.stack,w.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var p=u.split(`
`),z=s.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===z.length)for(l=p.length-1,n=z.length-1;1<=l&&0<=n&&p[l]!==z[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==z[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==z[n]){var T=`
`+p[l].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=l&&0<=n);break}}}finally{du=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_a(a):""}function Um(e,t){switch(e.tag){case 26:case 27:case 5:return _a(e.type);case 16:return _a("Lazy");case 13:return e.child!==t&&t!==null?_a("Suspense Fallback"):_a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return mu(e.type,!1);case 11:return mu(e.type.render,!1);case 1:return mu(e.type,!0);case 31:return _a("Activity");default:return""}}function Jo(e){try{var t="",a=null;do t+=Um(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var hu=Object.prototype.hasOwnProperty,pu=r.unstable_scheduleCallback,gu=r.unstable_cancelCallback,Hm=r.unstable_shouldYield,km=r.unstable_requestPaint,nt=r.unstable_now,Lm=r.unstable_getCurrentPriorityLevel,$o=r.unstable_ImmediatePriority,Wo=r.unstable_UserBlockingPriority,Yn=r.unstable_NormalPriority,Ym=r.unstable_LowPriority,Io=r.unstable_IdlePriority,qm=r.log,Gm=r.unstable_setDisableYieldValue,Ll=null,it=null;function ia(e){if(typeof qm=="function"&&Gm(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Ll,e)}catch{}}var ut=Math.clz32?Math.clz32:Zm,Xm=Math.log,Qm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Xm(e)/Qm|0)|0}var qn=256,Gn=262144,Xn=4194304;function Ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Ma(l):(u&=s,u!==0?n=Ma(u):a||(a=s&~e,a!==0&&(n=Ma(a))))):(s=l&~i,s!==0?n=Ma(s):u!==0?n=Ma(u):a||(a=l&~e,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Po(){var e=Xn;return Xn<<=1,(Xn&62914560)===0&&(Xn=4194304),e}function vu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ql(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Km(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,p=e.expirationTimes,z=e.hiddenUpdates;for(a=u&~a;0<a;){var T=31-ut(a),B=1<<T;s[T]=0,p[T]=-1;var w=z[T];if(w!==null)for(z[T]=null,T=0;T<w.length;T++){var C=w[T];C!==null&&(C.lane&=-536870913)}a&=~B}l!==0&&ec(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function ec(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ut(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function tc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ut(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ac(e,t){var a=t&-t;return a=(a&42)!==0?1:yu(a),(a&(e.suspendedLanes|t))!==0?0:a}function yu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lc(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Xd(e.type))}function nc(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var ua=Math.random().toString(36).slice(2),qe="__reactFiber$"+ua,We="__reactProps$"+ua,Wa="__reactContainer$"+ua,xu="__reactEvents$"+ua,Fm="__reactListeners$"+ua,Jm="__reactHandles$"+ua,ic="__reactResources$"+ua,Gl="__reactMarker$"+ua;function Su(e){delete e[qe],delete e[We],delete e[xu],delete e[Fm],delete e[Jm]}function Ia(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Wa]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Nd(e);e!==null;){if(a=e[qe])return a;e=Nd(e)}return t}e=a,a=e.parentNode}return null}function Pa(e){if(e=e[qe]||e[Wa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function el(e){var t=e[ic];return t||(t=e[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Gl]=!0}var uc=new Set,rc={};function Ba(e,t){tl(e,t),tl(e+"Capture",t)}function tl(e,t){for(rc[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var $m=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},cc={};function Wm(e){return hu.call(cc,e)?!0:hu.call(oc,e)?!1:$m.test(e)?cc[e]=!0:(oc[e]=!0,!1)}function Zn(e,t,a){if(Wm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Lt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Im(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eu(e){if(!e._valueTracker){var t=sc(e)?"checked":"value";e._valueTracker=Im(e,t,""+e[t])}}function fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=sc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pm=/[\n"\\]/g;function vt(e){return e.replace(Pm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ju(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?zu(e,u,gt(t)):a!=null?zu(e,u,gt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+gt(s):e.removeAttribute("name")}function dc(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Eu(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Eu(e)}function zu(e,t,a){t==="number"&&Kn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function al(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function mc(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function hc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Be(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Eu(e)}function ll(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var eh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||eh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function gc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&pc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&pc(e,i,t[i])}function wu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ah=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fn(e){return ah.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yt(){}var Au=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,il=null;function vc(e){var t=Pa(e);if(t&&(e=t.stateNode)){var a=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(ju(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[We]||null;if(!n)throw Error(c(90));ju(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&fc(l)}break e;case"textarea":mc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&al(e,!!a.multiple,t,!1)}}}var Cu=!1;function yc(e,t,a){if(Cu)return e(t,a);Cu=!0;try{var l=e(t);return l}finally{if(Cu=!1,(nl!==null||il!==null)&&(Di(),nl&&(t=nl,e=il,il=nl=null,vc(t),e)))for(t=0;t<e.length;t++)vc(e[t])}}function Ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[We]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(qt)try{var Zl={};Object.defineProperty(Zl,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Zl,Zl),window.removeEventListener("test",Zl,Zl)}catch{Tu=!1}var ra=null,Ru=null,Jn=null;function bc(){if(Jn)return Jn;var e,t=Ru,a=t.length,l,n="value"in ra?ra.value:ra.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function $n(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function xc(){return!1}function Ie(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:xc,this.isPropagationStopped=xc,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},In=Ie(Oa),Vl=E({},Oa,{view:0,detail:0}),lh=Ie(Vl),_u,Mu,Kl,Pn=E({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kl&&(Kl&&e.type==="mousemove"?(_u=e.screenX-Kl.screenX,Mu=e.screenY-Kl.screenY):Mu=_u=0,Kl=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Sc=Ie(Pn),nh=E({},Pn,{dataTransfer:0}),ih=Ie(nh),uh=E({},Vl,{relatedTarget:0}),Bu=Ie(uh),rh=E({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),oh=Ie(rh),ch=E({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sh=Ie(ch),fh=E({},Oa,{data:0}),Ec=Ie(fh),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ph(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hh[e])?!!t[e]:!1}function Ou(){return ph}var gh=E({},Vl,{key:function(e){if(e.key){var t=dh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vh=Ie(gh),yh=E({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=Ie(yh),bh=E({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),xh=Ie(bh),Sh=E({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eh=Ie(Sh),jh=E({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zh=Ie(jh),wh=E({},Oa,{newState:0,oldState:0}),Ah=Ie(wh),Nh=[9,13,27,32],Du=qt&&"CompositionEvent"in window,Fl=null;qt&&"documentMode"in document&&(Fl=document.documentMode);var Ch=qt&&"TextEvent"in window&&!Fl,zc=qt&&(!Du||Fl&&8<Fl&&11>=Fl),wc=" ",Ac=!1;function Nc(e,t){switch(e){case"keyup":return Nh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ul=!1;function Th(e,t){switch(e){case"compositionend":return Cc(t);case"keypress":return t.which!==32?null:(Ac=!0,wc);case"textInput":return e=t.data,e===wc&&Ac?null:e;default:return null}}function Rh(e,t){if(ul)return e==="compositionend"||!Du&&Nc(e,t)?(e=bc(),Jn=Ru=ra=null,ul=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var _h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_h[e.type]:t==="textarea"}function Rc(e,t,a,l){nl?il?il.push(l):il=[l]:nl=l,t=Gi(t,"onChange"),0<t.length&&(a=new In("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Jl=null,$l=null;function Mh(e){md(e,0)}function ei(e){var t=Xl(e);if(fc(t))return e}function _c(e,t){if(e==="change")return t}var Mc=!1;if(qt){var Uu;if(qt){var Hu="oninput"in document;if(!Hu){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Hu=typeof Bc.oninput=="function"}Uu=Hu}else Uu=!1;Mc=Uu&&(!document.documentMode||9<document.documentMode)}function Oc(){Jl&&(Jl.detachEvent("onpropertychange",Dc),$l=Jl=null)}function Dc(e){if(e.propertyName==="value"&&ei($l)){var t=[];Rc(t,$l,e,Nu(e)),yc(Mh,t)}}function Bh(e,t,a){e==="focusin"?(Oc(),Jl=t,$l=a,Jl.attachEvent("onpropertychange",Dc)):e==="focusout"&&Oc()}function Oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ei($l)}function Dh(e,t){if(e==="click")return ei(t)}function Uh(e,t){if(e==="input"||e==="change")return ei(t)}function Hh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Hh;function Wl(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!hu.call(t,n)||!rt(e[n],t[n]))return!1}return!0}function Uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var a=Uc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uc(a)}}function kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Kn(e.document)}return t}function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kh=qt&&"documentMode"in document&&11>=document.documentMode,rl=null,Lu=null,Il=null,Yu=!1;function Yc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yu||rl==null||rl!==Kn(l)||(l=rl,"selectionStart"in l&&ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&Wl(Il,l)||(Il=l,l=Gi(Lu,"onSelect"),0<l.length&&(t=new In("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=rl)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ol={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},qu={},qc={};qt&&(qc=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Ua(e){if(qu[e])return qu[e];if(!ol[e])return e;var t=ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in qc)return qu[e]=t[a];return e}var Gc=Ua("animationend"),Xc=Ua("animationiteration"),Qc=Ua("animationstart"),Lh=Ua("transitionrun"),Yh=Ua("transitionstart"),qh=Ua("transitioncancel"),Zc=Ua("transitionend"),Vc=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function Nt(e,t){Vc.set(e,t),Ba(t,[e])}var ti=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],cl=0,Xu=0;function ai(){for(var e=cl,t=Xu=cl=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Kc(a,n,i)}}function li(e,t,a,l){yt[cl++]=e,yt[cl++]=t,yt[cl++]=a,yt[cl++]=l,Xu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Qu(e,t,a,l){return li(e,t,a,l),ni(e)}function Ha(e,t){return li(e,null,null,t),ni(e)}function Kc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ut(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ni(e){if(50<Sn)throw Sn=0,Pr=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={};function Gh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,l){return new Gh(e,t,a,l)}function Zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Zu(e)&&(u=1);else if(typeof e=="string")u=Kp(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ve:return e=ot(31,a,t,n),e.elementType=Ve,e.lanes=i,e;case H:return ka(a.children,n,i,t);case U:u=8,n|=24;break;case F:return e=ot(12,a,t,n|2),e.elementType=F,e.lanes=i,e;case me:return e=ot(13,a,t,n),e.elementType=me,e.lanes=i,e;case we:return e=ot(19,a,t,n),e.elementType=we,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:u=10;break e;case k:u=9;break e;case ae:u=11;break e;case W:u=14;break e;case Te:u=16,l=null;break e}u=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=ot(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function ka(e,t,a,l){return e=ot(7,e,l,t),e.lanes=a,e}function Vu(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function Jc(e){var t=ot(18,null,null,0);return t.stateNode=e,t}function Ku(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $c=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=$c.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Jo(t)},$c.set(e,t),t)}return{value:e,source:t,stack:Jo(t)}}var fl=[],dl=0,ui=null,Pl=0,xt=[],St=0,oa=null,Bt=1,Ot="";function Xt(e,t){fl[dl++]=Pl,fl[dl++]=ui,ui=e,Pl=t}function Wc(e,t,a){xt[St++]=Bt,xt[St++]=Ot,xt[St++]=oa,oa=e;var l=Bt;e=Ot;var n=32-ut(l)-1;l&=~(1<<n),a+=1;var i=32-ut(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Bt=1<<32-ut(t)+n|a<<n|l,Ot=i+e}else Bt=1<<i|a<<n|l,Ot=e}function Fu(e){e.return!==null&&(Xt(e,1),Wc(e,1,0))}function Ju(e){for(;e===ui;)ui=fl[--dl],fl[dl]=null,Pl=fl[--dl],fl[dl]=null;for(;e===oa;)oa=xt[--St],xt[St]=null,Ot=xt[--St],xt[St]=null,Bt=xt[--St],xt[St]=null}function Ic(e,t){xt[St++]=Bt,xt[St++]=Ot,xt[St++]=oa,Bt=t.id,Ot=t.overflow,oa=e}var Ge=null,Ee=null,oe=!1,ca=null,Et=!1,$u=Error(c(519));function sa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw en(bt(t,e)),$u}function Pc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[qe]=e,t[We]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<jn.length;a++)ie(jn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),dc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),hc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||vd(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=Yt),t=!0):t=!1,t||sa(e,!0)}function es(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ge=Ge.return}}function ml(e){if(e!==Ge)return!1;if(!oe)return es(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||po(e.type,e.memoizedProps)),a=!a),a&&Ee&&sa(e),es(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Ad(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Ad(e)}else t===27?(t=Ee,za(e.type)?(e=xo,xo=null,Ee=e):Ee=t):Ee=Ge?zt(e.stateNode.nextSibling):null;return!0}function La(){Ee=Ge=null,oe=!1}function Wu(){var e=ca;return e!==null&&(at===null?at=e:at.push.apply(at,e),ca=null),e}function en(e){ca===null?ca=[e]:ca.push(e)}var Iu=b(null),Ya=null,Qt=null;function fa(e,t,a){q(Iu,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=Iu.current,O(Iu)}function Pu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function er(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var p=0;p<t.length;p++)if(s.context===t[p]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Pu(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(c(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Pu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function hl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var s=n.type;rt(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===de.current){if(u=n.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Cn):e=[Cn])}n=n.return}e!==null&&er(t,e,a,l),t.flags|=262144}function ri(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Ya=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return ts(Ya,e)}function oi(e,t){return Ya===null&&qa(e),ts(e,t)}function ts(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Qt===null){if(e===null)throw Error(c(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return a}var Xh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Qh=r.unstable_scheduleCallback,Zh=r.unstable_NormalPriority,Oe={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tr(){return{controller:new Xh,data:new Map,refCount:0}}function tn(e){e.refCount--,e.refCount===0&&Qh(Zh,function(){e.controller.abort()})}var an=null,ar=0,pl=0,gl=null;function Vh(e,t){if(an===null){var a=an=[];ar=0,pl=io(),gl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ar++,t.then(as,as),t}function as(){if(--ar===0&&an!==null){gl!==null&&(gl.status="fulfilled");var e=an;an=null,pl=0,gl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Kh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var ls=_.S;_.S=function(e,t){qf=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vh(e,t),ls!==null&&ls(e,t)};var Ga=b(null);function lr(){var e=Ga.current;return e!==null?e:Se.pooledCache}function ci(e,t){t===null?q(Ga,Ga.current):q(Ga,t.pool)}function ns(){var e=lr();return e===null?null:{parent:Oe._currentValue,pool:e}}var vl=Error(c(460)),nr=Error(c(474)),si=Error(c(542)),fi={then:function(){}};function is(e){return e=e.status,e==="fulfilled"||e==="rejected"}function us(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Yt,Yt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,os(e),e;default:if(typeof t.status=="string")t.then(Yt,Yt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,os(e),e}throw Qa=t,vl}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,vl):a}}var Qa=null;function rs(){if(Qa===null)throw Error(c(459));var e=Qa;return Qa=null,e}function os(e){if(e===vl||e===si)throw Error(c(483))}var yl=null,ln=0;function di(e){var t=ln;return ln+=1,yl===null&&(yl=[]),us(yl,e,t)}function nn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mi(e,t){throw t.$$typeof===D?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cs(e){function t(S,y){if(e){var j=S.deletions;j===null?(S.deletions=[y],S.flags|=16):j.push(y)}}function a(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function l(S){for(var y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function n(S,y){return S=Gt(S,y),S.index=0,S.sibling=null,S}function i(S,y,j){return S.index=j,e?(j=S.alternate,j!==null?(j=j.index,j<y?(S.flags|=67108866,y):j):(S.flags|=67108866,y)):(S.flags|=1048576,y)}function u(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function s(S,y,j,M){return y===null||y.tag!==6?(y=Vu(j,S.mode,M),y.return=S,y):(y=n(y,j),y.return=S,y)}function p(S,y,j,M){var K=j.type;return K===H?T(S,y,j.props.children,M,j.key):y!==null&&(y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Xa(K)===y.type)?(y=n(y,j.props),nn(y,j),y.return=S,y):(y=ii(j.type,j.key,j.props,null,S.mode,M),nn(y,j),y.return=S,y)}function z(S,y,j,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==j.containerInfo||y.stateNode.implementation!==j.implementation?(y=Ku(j,S.mode,M),y.return=S,y):(y=n(y,j.children||[]),y.return=S,y)}function T(S,y,j,M,K){return y===null||y.tag!==7?(y=ka(j,S.mode,M,K),y.return=S,y):(y=n(y,j),y.return=S,y)}function B(S,y,j){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Vu(""+y,S.mode,j),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case G:return j=ii(y.type,y.key,y.props,null,S.mode,j),nn(j,y),j.return=S,j;case L:return y=Ku(y,S.mode,j),y.return=S,y;case Te:return y=Xa(y),B(S,y,j)}if(Be(y)||Ke(y))return y=ka(y,S.mode,j,null),y.return=S,y;if(typeof y.then=="function")return B(S,di(y),j);if(y.$$typeof===Q)return B(S,oi(S,y),j);mi(S,y)}return null}function w(S,y,j,M){var K=y!==null?y.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return K!==null?null:s(S,y,""+j,M);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case G:return j.key===K?p(S,y,j,M):null;case L:return j.key===K?z(S,y,j,M):null;case Te:return j=Xa(j),w(S,y,j,M)}if(Be(j)||Ke(j))return K!==null?null:T(S,y,j,M,null);if(typeof j.then=="function")return w(S,y,di(j),M);if(j.$$typeof===Q)return w(S,y,oi(S,j),M);mi(S,j)}return null}function C(S,y,j,M,K){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(j)||null,s(y,S,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case G:return S=S.get(M.key===null?j:M.key)||null,p(y,S,M,K);case L:return S=S.get(M.key===null?j:M.key)||null,z(y,S,M,K);case Te:return M=Xa(M),C(S,y,j,M,K)}if(Be(M)||Ke(M))return S=S.get(j)||null,T(y,S,M,K,null);if(typeof M.then=="function")return C(S,y,j,di(M),K);if(M.$$typeof===Q)return C(S,y,j,oi(y,M),K);mi(y,M)}return null}function X(S,y,j,M){for(var K=null,ce=null,V=y,te=y=0,re=null;V!==null&&te<j.length;te++){V.index>te?(re=V,V=null):re=V.sibling;var se=w(S,V,j[te],M);if(se===null){V===null&&(V=re);break}e&&V&&se.alternate===null&&t(S,V),y=i(se,y,te),ce===null?K=se:ce.sibling=se,ce=se,V=re}if(te===j.length)return a(S,V),oe&&Xt(S,te),K;if(V===null){for(;te<j.length;te++)V=B(S,j[te],M),V!==null&&(y=i(V,y,te),ce===null?K=V:ce.sibling=V,ce=V);return oe&&Xt(S,te),K}for(V=l(V);te<j.length;te++)re=C(V,S,te,j[te],M),re!==null&&(e&&re.alternate!==null&&V.delete(re.key===null?te:re.key),y=i(re,y,te),ce===null?K=re:ce.sibling=re,ce=re);return e&&V.forEach(function(Ta){return t(S,Ta)}),oe&&Xt(S,te),K}function J(S,y,j,M){if(j==null)throw Error(c(151));for(var K=null,ce=null,V=y,te=y=0,re=null,se=j.next();V!==null&&!se.done;te++,se=j.next()){V.index>te?(re=V,V=null):re=V.sibling;var Ta=w(S,V,se.value,M);if(Ta===null){V===null&&(V=re);break}e&&V&&Ta.alternate===null&&t(S,V),y=i(Ta,y,te),ce===null?K=Ta:ce.sibling=Ta,ce=Ta,V=re}if(se.done)return a(S,V),oe&&Xt(S,te),K;if(V===null){for(;!se.done;te++,se=j.next())se=B(S,se.value,M),se!==null&&(y=i(se,y,te),ce===null?K=se:ce.sibling=se,ce=se);return oe&&Xt(S,te),K}for(V=l(V);!se.done;te++,se=j.next())se=C(V,S,te,se.value,M),se!==null&&(e&&se.alternate!==null&&V.delete(se.key===null?te:se.key),y=i(se,y,te),ce===null?K=se:ce.sibling=se,ce=se);return e&&V.forEach(function(n0){return t(S,n0)}),oe&&Xt(S,te),K}function be(S,y,j,M){if(typeof j=="object"&&j!==null&&j.type===H&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case G:e:{for(var K=j.key;y!==null;){if(y.key===K){if(K=j.type,K===H){if(y.tag===7){a(S,y.sibling),M=n(y,j.props.children),M.return=S,S=M;break e}}else if(y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Xa(K)===y.type){a(S,y.sibling),M=n(y,j.props),nn(M,j),M.return=S,S=M;break e}a(S,y);break}else t(S,y);y=y.sibling}j.type===H?(M=ka(j.props.children,S.mode,M,j.key),M.return=S,S=M):(M=ii(j.type,j.key,j.props,null,S.mode,M),nn(M,j),M.return=S,S=M)}return u(S);case L:e:{for(K=j.key;y!==null;){if(y.key===K)if(y.tag===4&&y.stateNode.containerInfo===j.containerInfo&&y.stateNode.implementation===j.implementation){a(S,y.sibling),M=n(y,j.children||[]),M.return=S,S=M;break e}else{a(S,y);break}else t(S,y);y=y.sibling}M=Ku(j,S.mode,M),M.return=S,S=M}return u(S);case Te:return j=Xa(j),be(S,y,j,M)}if(Be(j))return X(S,y,j,M);if(Ke(j)){if(K=Ke(j),typeof K!="function")throw Error(c(150));return j=K.call(j),J(S,y,j,M)}if(typeof j.then=="function")return be(S,y,di(j),M);if(j.$$typeof===Q)return be(S,y,oi(S,j),M);mi(S,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,y!==null&&y.tag===6?(a(S,y.sibling),M=n(y,j),M.return=S,S=M):(a(S,y),M=Vu(j,S.mode,M),M.return=S,S=M),u(S)):a(S,y)}return function(S,y,j,M){try{ln=0;var K=be(S,y,j,M);return yl=null,K}catch(V){if(V===vl||V===si)throw V;var ce=ot(29,V,null,S.mode);return ce.lanes=M,ce.return=S,ce}}}var Za=cs(!0),ss=cs(!1),da=!1;function ir(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ur(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ni(e),Kc(e,null,a),t}return li(e,l,t,a),ni(e)}function un(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,tc(e,a)}}function rr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var or=!1;function rn(){if(or){var e=gl;if(e!==null)throw e}}function on(e,t,a,l){or=!1;var n=e.updateQueue;da=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var p=s,z=p.next;p.next=null,u===null?i=z:u.next=z,u=p;var T=e.alternate;T!==null&&(T=T.updateQueue,s=T.lastBaseUpdate,s!==u&&(s===null?T.firstBaseUpdate=z:s.next=z,T.lastBaseUpdate=p))}if(i!==null){var B=n.baseState;u=0,T=z=p=null,s=i;do{var w=s.lane&-536870913,C=w!==s.lane;if(C?(ue&w)===w:(l&w)===w){w!==0&&w===pl&&(or=!0),T!==null&&(T=T.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var X=e,J=s;w=t;var be=a;switch(J.tag){case 1:if(X=J.payload,typeof X=="function"){B=X.call(be,B,w);break e}B=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=J.payload,w=typeof X=="function"?X.call(be,B,w):X,w==null)break e;B=E({},B,w);break e;case 2:da=!0}}w=s.callback,w!==null&&(e.flags|=64,C&&(e.flags|=8192),C=n.callbacks,C===null?n.callbacks=[w]:C.push(w))}else C={lane:w,tag:s.tag,payload:s.payload,callback:s.callback,next:null},T===null?(z=T=C,p=B):T=T.next=C,u|=w;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;C=s,s=C.next,C.next=null,n.lastBaseUpdate=C,n.shared.pending=null}}while(!0);T===null&&(p=B),n.baseState=p,n.firstBaseUpdate=z,n.lastBaseUpdate=T,i===null&&(n.shared.lanes=0),ba|=u,e.lanes=u,e.memoizedState=B}}function fs(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ds(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fs(a[e],t)}var bl=b(null),hi=b(0);function ms(e,t){e=ea,q(hi,e),q(bl,t),ea=e|t.baseLanes}function cr(){q(hi,ea),q(bl,bl.current)}function sr(){ea=hi.current,O(bl),O(hi)}var ct=b(null),jt=null;function pa(e){var t=e.alternate;q(_e,_e.current&1),q(ct,e),jt===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(jt=e)}function fr(e){q(_e,_e.current),q(ct,e),jt===null&&(jt=e)}function hs(e){e.tag===22?(q(_e,_e.current),q(ct,e),jt===null&&(jt=e)):ga()}function ga(){q(_e,_e.current),q(ct,ct.current)}function st(e){O(ct),jt===e&&(jt=null),O(_e)}var _e=b(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yo(a)||bo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,ee=null,ve=null,De=null,gi=!1,xl=!1,Va=!1,vi=0,cn=0,Sl=null,Fh=0;function Ne(){throw Error(c(321))}function dr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!rt(e[a],t[a]))return!1;return!0}function mr(e,t,a,l,n,i){return Vt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Ws:Cr,Va=!1,i=a(l,n),Va=!1,xl&&(i=gs(t,a,l,n)),ps(e),i}function ps(e){_.H=dn;var t=ve!==null&&ve.next!==null;if(Vt=0,De=ve=ee=null,gi=!1,cn=0,Sl=null,t)throw Error(c(300));e===null||Ue||(e=e.dependencies,e!==null&&ri(e)&&(Ue=!0))}function gs(e,t,a,l){ee=e;var n=0;do{if(xl&&(Sl=null),cn=0,xl=!1,25<=n)throw Error(c(301));if(n+=1,De=ve=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=Is,i=t(a,l)}while(xl);return i}function Jh(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?sn(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(ee.flags|=1024),t}function hr(){var e=vi!==0;return vi=0,e}function pr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function gr(e){if(gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gi=!1}Vt=0,De=ve=ee=null,xl=!1,cn=vi=0,Sl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ee.memoizedState=De=e:De=De.next=e,De}function Me(){if(ve===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=De===null?ee.memoizedState:De.next;if(t!==null)De=t,ve=e;else{if(e===null)throw ee.alternate===null?Error(c(467)):Error(c(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},De===null?ee.memoizedState=De=e:De=De.next=e}return De}function yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sn(e){var t=cn;return cn+=1,Sl===null&&(Sl=[]),e=us(Sl,e,t),t=ee,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Ws:Cr),e}function bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sn(e);if(e.$$typeof===Q)return Xe(e)}throw Error(c(438,String(e)))}function vr(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=yi(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=_t;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=Me();return yr(t,ve,e)}function yr(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,p=null,z=t,T=!1;do{var B=z.lane&-536870913;if(B!==z.lane?(ue&B)===B:(Vt&B)===B){var w=z.revertLane;if(w===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),B===pl&&(T=!0);else if((Vt&w)===w){z=z.next,w===pl&&(T=!0);continue}else B={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},p===null?(s=p=B,u=i):p=p.next=B,ee.lanes|=w,ba|=w;B=z.action,Va&&a(i,B),i=z.hasEagerState?z.eagerState:a(i,B)}else w={lane:B,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},p===null?(s=p=w,u=i):p=p.next=w,ee.lanes|=B,ba|=B;z=z.next}while(z!==null&&z!==t);if(p===null?u=i:p.next=s,!rt(i,e.memoizedState)&&(Ue=!0,T&&(a=gl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function br(e){var t=Me(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);rt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function vs(e,t,a){var l=ee,n=Me(),i=oe;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!rt((ve||n).memoizedState,a);if(u&&(n.memoizedState=a,Ue=!0),n=n.queue,Er(xs.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||De!==null&&De.memoizedState.tag&1){if(l.flags|=2048,El(9,{destroy:void 0},bs.bind(null,l,n,a,t),null),Se===null)throw Error(c(349));i||(Vt&127)!==0||ys(l,t,a)}return a}function ys(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=yi(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function bs(e,t,a,l){t.value=a,t.getSnapshot=l,Ss(t)&&Es(e)}function xs(e,t,a){return a(function(){Ss(t)&&Es(e)})}function Ss(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!rt(e,a)}catch{return!0}}function Es(e){var t=Ha(e,2);t!==null&&lt(t,e,2)}function xr(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Va){ia(!0);try{a()}finally{ia(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function js(e,t,a,l){return e.baseState=a,yr(e,ve,typeof l=="function"?l:Kt)}function $h(e,t,a,l,n){if(ji(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};_.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,zs(t,i)):(i.next=a.next,t.pending=a.next=i)}}function zs(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=_.T,u={};_.T=u;try{var s=a(n,l),p=_.S;p!==null&&p(u,s),ws(e,t,s)}catch(z){Sr(e,t,z)}finally{i!==null&&u.types!==null&&(i.types=u.types),_.T=i}}else try{i=a(n,l),ws(e,t,i)}catch(z){Sr(e,t,z)}}function ws(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){As(e,t,l)},function(l){return Sr(e,t,l)}):As(e,t,a)}function As(e,t,a){t.status="fulfilled",t.value=a,Ns(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,zs(e,a)))}function Sr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ns(t),t=t.next;while(t!==l)}e.action=null}function Ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cs(e,t){return t}function Ts(e,t){if(oe){var a=Se.formState;if(a!==null){e:{var l=ee;if(oe){if(Ee){t:{for(var n=Ee,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=zt(n.nextSibling),l=n.data==="F!";break e}}sa(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:t},a.queue=l,a=Fs.bind(null,ee,l),l.dispatch=a,l=xr(!1),i=Nr.bind(null,ee,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=$h.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Rs(e){var t=Me();return _s(t,ve,e)}function _s(e,t,a){if(t=yr(e,t,Cs)[0],e=xi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=sn(t)}catch(u){throw u===vl?si:u}else l=t;t=Me();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,El(9,{destroy:void 0},Wh.bind(null,n,a),null)),[l,i,e]}function Wh(e,t){e.action=t}function Ms(e){var t=Me(),a=ve;if(a!==null)return _s(t,a,e);Me(),t=t.memoizedState,a=Me();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function El(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=yi(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Bs(){return Me().memoizedState}function Si(e,t,a,l){var n=$e();ee.flags|=e,n.memoizedState=El(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ei(e,t,a,l){var n=Me();l=l===void 0?null:l;var i=n.memoizedState.inst;ve!==null&&l!==null&&dr(l,ve.memoizedState.deps)?n.memoizedState=El(t,i,a,l):(ee.flags|=e,n.memoizedState=El(1|t,i,a,l))}function Os(e,t){Si(8390656,8,e,t)}function Er(e,t){Ei(2048,8,e,t)}function Ih(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=yi(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ds(e){var t=Me().memoizedState;return Ih({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return Ei(4,2,e,t)}function Hs(e,t){return Ei(4,4,e,t)}function ks(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ls(e,t,a){a=a!=null?a.concat([e]):null,Ei(4,4,ks.bind(null,t,e),a)}function jr(){}function Ys(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&dr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function qs(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&dr(t,l[1]))return l[0];if(l=e(),Va){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[l,t],l}function zr(e,t,a){return a===void 0||(Vt&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Xf(),ee.lanes|=e,ba|=e,a)}function Gs(e,t,a,l){return rt(a,t)?a:bl.current!==null?(e=zr(e,a,l),rt(e,t)||(Ue=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(ue&261930)===0?(Ue=!0,e.memoizedState=a):(e=Xf(),ee.lanes|=e,ba|=e,t)}function Xs(e,t,a,l,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var u=_.T,s={};_.T=s,Nr(e,!1,t,a);try{var p=n(),z=_.S;if(z!==null&&z(s,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var T=Kh(p,l);fn(e,t,T,mt(e))}else fn(e,t,l,mt(e))}catch(B){fn(e,t,{then:function(){},status:"rejected",reason:B},mt())}finally{Y.p=i,u!==null&&s.types!==null&&(u.types=s.types),_.T=u}}function Ph(){}function wr(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Qs(e).queue;Xs(e,n,t,$,a===null?Ph:function(){return Zs(e),a(l)})}function Qs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zs(e){var t=Qs(e);t.next===null&&(t=e.alternate.memoizedState),fn(e,t.next.queue,{},mt())}function Ar(){return Xe(Cn)}function Vs(){return Me().memoizedState}function Ks(){return Me().memoizedState}function ep(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=mt();e=ma(a);var l=ha(t,e,a);l!==null&&(lt(l,t,a),un(l,t,a)),t={cache:tr()},e.payload=t;return}t=t.return}}function tp(e,t,a){var l=mt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ji(e)?Js(t,a):(a=Qu(e,t,a,l),a!==null&&(lt(a,e,l),$s(a,t,l)))}function Fs(e,t,a){var l=mt();fn(e,t,a,l)}function fn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ji(e))Js(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,rt(s,u))return li(e,t,n,0),Se===null&&ai(),!1}catch{}if(a=Qu(e,t,n,l),a!==null)return lt(a,e,l),$s(a,t,l),!0}return!1}function Nr(e,t,a,l){if(l={lane:2,revertLane:io(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ji(e)){if(t)throw Error(c(479))}else t=Qu(e,a,l,2),t!==null&&lt(t,e,2)}function ji(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Js(e,t){xl=gi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function $s(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,tc(e,a)}}var dn={readContext:Xe,use:bi,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};dn.useEffectEvent=Ne;var Ws={readContext:Xe,use:bi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Os,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Si(4194308,4,ks.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){Si(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Va){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Va){ia(!0);try{a(t)}finally{ia(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=tp.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=xr(e);var t=e.queue,a=Fs.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:jr,useDeferredValue:function(e,t){var a=$e();return zr(a,e,t)},useTransition:function(){var e=xr(!1);return e=Xs.bind(null,ee,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=$e();if(oe){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Se===null)throw Error(c(349));(ue&127)!==0||ys(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Os(xs.bind(null,l,i,e),[e]),l.flags|=2048,El(9,{destroy:void 0},bs.bind(null,l,i,a,t),null),a},useId:function(){var e=$e(),t=Se.identifierPrefix;if(oe){var a=Ot,l=Bt;a=(l&~(1<<32-ut(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=vi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Fh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ar,useFormState:Ts,useActionState:Ts,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Nr.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:vr,useCacheRefresh:function(){return $e().memoizedState=ep.bind(null,ee)},useEffectEvent:function(e){var t=$e(),a={impl:e};return t.memoizedState=a,function(){if((fe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Cr={readContext:Xe,use:bi,useCallback:Ys,useContext:Xe,useEffect:Er,useImperativeHandle:Ls,useInsertionEffect:Us,useLayoutEffect:Hs,useMemo:qs,useReducer:xi,useRef:Bs,useState:function(){return xi(Kt)},useDebugValue:jr,useDeferredValue:function(e,t){var a=Me();return Gs(a,ve.memoizedState,e,t)},useTransition:function(){var e=xi(Kt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:sn(e),t]},useSyncExternalStore:vs,useId:Vs,useHostTransitionStatus:Ar,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){var a=Me();return js(a,ve,e,t)},useMemoCache:vr,useCacheRefresh:Ks};Cr.useEffectEvent=Ds;var Is={readContext:Xe,use:bi,useCallback:Ys,useContext:Xe,useEffect:Er,useImperativeHandle:Ls,useInsertionEffect:Us,useLayoutEffect:Hs,useMemo:qs,useReducer:br,useRef:Bs,useState:function(){return br(Kt)},useDebugValue:jr,useDeferredValue:function(e,t){var a=Me();return ve===null?zr(a,e,t):Gs(a,ve.memoizedState,e,t)},useTransition:function(){var e=br(Kt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:sn(e),t]},useSyncExternalStore:vs,useId:Vs,useHostTransitionStatus:Ar,useFormState:Ms,useActionState:Ms,useOptimistic:function(e,t){var a=Me();return ve!==null?js(a,ve,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vr,useCacheRefresh:Ks};Is.useEffectEvent=Ds;function Tr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=mt(),n=ma(l);n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),un(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=mt(),n=ma(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),un(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=mt(),l=ma(a);l.tag=2,t!=null&&(l.callback=t),t=ha(e,l,a),t!==null&&(lt(t,e,a),un(t,e,a))}};function Ps(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Wl(a,l)||!Wl(n,i):!0}function ef(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Rr.enqueueReplaceState(t,t.state,null)}function Ka(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function tf(e){ti(e)}function af(e){console.error(e)}function lf(e){ti(e)}function zi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function nf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function _r(e,t,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){zi(e,t)},a}function uf(e){return e=ma(e),e.tag=3,e}function rf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){nf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){nf(t,a,l),typeof n!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function ap(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&hl(t,a,n,!0),a=ct.current,a!==null){switch(a.tag){case 31:case 13:return jt===null?Ui():a.alternate===null&&Ce===0&&(Ce=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===fi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ao(e,l,n)),!1;case 22:return a.flags|=65536,l===fi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ao(e,l,n)),!1}throw Error(c(435,a.tag))}return ao(e,l,n),Ui(),!1}if(oe)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==$u&&(e=Error(c(422),{cause:l}),en(bt(e,a)))):(l!==$u&&(t=Error(c(423),{cause:l}),en(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=_r(e.stateNode,l,n),rr(e,n),Ce!==4&&(Ce=2)),!1;var i=Error(c(520),{cause:l});if(i=bt(i,a),xn===null?xn=[i]:xn.push(i),Ce!==4&&(Ce=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=_r(a.stateNode,l,e),rr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(xa===null||!xa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=uf(n),rf(n,e,a,l),rr(a,n),!1}a=a.return}while(a!==null);return!1}var Mr=Error(c(461)),Ue=!1;function Qe(e,t,a,l){t.child=e===null?ss(t,null,a,l):Za(t,e.child,a,l)}function of(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return qa(t),l=mr(e,t,a,u,i,n),s=hr(),e!==null&&!Ue?(pr(e,t,n),Ft(e,t,n)):(oe&&s&&Fu(t),t.flags|=1,Qe(e,t,l,n),t.child)}function cf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Zu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,sf(e,t,i,l,n)):(e=ii(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Yr(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wl,a(u,l)&&e.ref===t.ref)return Ft(e,t,n)}return t.flags|=1,e=Gt(i,l),e.ref=t.ref,e.return=t,t.child=e}function sf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Wl(i,l)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=l=i,Yr(e,n))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Ft(e,t,n)}return Br(e,t,a,l,n)}function ff(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return df(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ci(t,i!==null?i.cachePool:null),i!==null?ms(t,i):cr(),hs(t);else return l=t.lanes=536870912,df(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ci(t,i.cachePool),ms(t,i),ga(),t.memoizedState=null):(e!==null&&ci(t,null),cr(),ga());return Qe(e,t,n,a),t.child}function mn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function df(e,t,a,l,n){var i=lr();return i=i===null?null:{parent:Oe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ci(t,null),cr(),hs(t),e!==null&&hl(e,t,l,!0),t.childLanes=n,null}function wi(e,t){return t=Ni({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mf(e,t,a){return Za(t,e.child,null,a),e=wi(t,t.pendingProps),e.flags|=2,st(t),t.memoizedState=null,e}function lp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(l.mode==="hidden")return e=wi(t,l),t.lanes=536870912,mn(null,e);if(fr(t),(e=Ee)?(e=wd(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Bt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=Jc(e),a.return=t,t.child=a,Ge=t,Ee=null)):e=null,e===null)throw sa(t);return t.lanes=536870912,null}return wi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(fr(t),n)if(t.flags&256)t.flags&=-257,t=mf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ue||hl(e,t,a,!1),n=(a&e.childLanes)!==0,Ue||n){if(l=Se,l!==null&&(u=ac(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ha(e,u),lt(l,e,u),Mr;Ui(),t=mf(e,t,a)}else e=i.treeContext,Ee=zt(u.nextSibling),Ge=t,oe=!0,ca=null,Et=!1,e!==null&&Ic(t,e),t=wi(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ai(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Br(e,t,a,l,n){return qa(t),a=mr(e,t,a,l,void 0,n),l=hr(),e!==null&&!Ue?(pr(e,t,n),Ft(e,t,n)):(oe&&l&&Fu(t),t.flags|=1,Qe(e,t,a,n),t.child)}function hf(e,t,a,l,n,i){return qa(t),t.updateQueue=null,a=gs(t,l,a,n),ps(e),l=hr(),e!==null&&!Ue?(pr(e,t,i),Ft(e,t,i)):(oe&&l&&Fu(t),t.flags|=1,Qe(e,t,a,i),t.child)}function pf(e,t,a,l,n){if(qa(t),t.stateNode===null){var i=sl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Xe(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Rr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ir(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Xe(u):sl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Tr(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Rr.enqueueReplaceState(i,i.state,null),on(t,l,i,n),rn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,p=Ka(a,s);i.props=p;var z=i.context,T=a.contextType;u=sl,typeof T=="object"&&T!==null&&(u=Xe(T));var B=a.getDerivedStateFromProps;T=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,T||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||z!==u)&&ef(t,i,l,u),da=!1;var w=t.memoizedState;i.state=w,on(t,l,i,n),rn(),z=t.memoizedState,s||w!==z||da?(typeof B=="function"&&(Tr(t,a,B,l),z=t.memoizedState),(p=da||Ps(t,a,p,l,w,z,u))?(T||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),i.props=l,i.state=z,i.context=u,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,ur(e,t),u=t.memoizedProps,T=Ka(a,u),i.props=T,B=t.pendingProps,w=i.context,z=a.contextType,p=sl,typeof z=="object"&&z!==null&&(p=Xe(z)),s=a.getDerivedStateFromProps,(z=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==B||w!==p)&&ef(t,i,l,p),da=!1,w=t.memoizedState,i.state=w,on(t,l,i,n),rn();var C=t.memoizedState;u!==B||w!==C||da||e!==null&&e.dependencies!==null&&ri(e.dependencies)?(typeof s=="function"&&(Tr(t,a,s,l),C=t.memoizedState),(T=da||Ps(t,a,T,l,w,C,p)||e!==null&&e.dependencies!==null&&ri(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,C,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,C,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=p,l=T):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ai(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Za(t,e.child,null,n),t.child=Za(t,null,a,n)):Qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Ft(e,t,n),e}function gf(e,t,a,l){return La(),t.flags|=256,Qe(e,t,a,l),t.child}var Or={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dr(e){return{baseLanes:e,cachePool:ns()}}function Ur(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=dt),e}function vf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?pa(t):ga(),(e=Ee)?(e=wd(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Bt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=Jc(e),a.return=t,t.child=a,Ge=t,Ee=null)):e=null,e===null)throw sa(t);return bo(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(ga(),n=t.mode,s=Ni({mode:"hidden",children:s},n),l=ka(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=Dr(a),l.childLanes=Ur(e,u,a),t.memoizedState=Or,mn(null,l)):(pa(t),Hr(t,s))}var p=e.memoizedState;if(p!==null&&(s=p.dehydrated,s!==null)){if(i)t.flags&256?(pa(t),t.flags&=-257,t=kr(e,t,a)):t.memoizedState!==null?(ga(),t.child=e.child,t.flags|=128,t=null):(ga(),s=l.fallback,n=t.mode,l=Ni({mode:"visible",children:l.children},n),s=ka(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Za(t,e.child,null,a),l=t.child,l.memoizedState=Dr(a),l.childLanes=Ur(e,u,a),t.memoizedState=Or,t=mn(null,l));else if(pa(t),bo(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var z=u.dgst;u=z,l=Error(c(419)),l.stack="",l.digest=u,en({value:l,source:null,stack:null}),t=kr(e,t,a)}else if(Ue||hl(e,t,a,!1),u=(a&e.childLanes)!==0,Ue||u){if(u=Se,u!==null&&(l=ac(u,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,Ha(e,l),lt(u,e,l),Mr;yo(s)||Ui(),t=kr(e,t,a)}else yo(s)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Ee=zt(s.nextSibling),Ge=t,oe=!0,ca=null,Et=!1,e!==null&&Ic(t,e),t=Hr(t,l.children),t.flags|=4096);return t}return n?(ga(),s=l.fallback,n=t.mode,p=e.child,z=p.sibling,l=Gt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,z!==null?s=Gt(z,s):(s=ka(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,mn(null,l),l=t.child,s=e.child.memoizedState,s===null?s=Dr(a):(n=s.cachePool,n!==null?(p=Oe._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=ns(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Ur(e,u,a),t.memoizedState=Or,mn(e.child,l)):(pa(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Hr(e,t){return t=Ni({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ni(e,t){return e=ot(22,e,null,t),e.lanes=0,e}function kr(e,t,a){return Za(t,e.child,null,a),e=Hr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Pu(e.return,t,a)}function Lr(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function bf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=_e.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,q(_e,u),Qe(e,t,l,a),l=oe?Pl:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yf(e,a,t);else if(e.tag===19)yf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&pi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Lr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&pi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Lr(t,!0,a,null,i,l);break;case"together":Lr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Ft(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(hl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Yr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ri(e)))}function np(e,t,a){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),fa(t,Oe,e.memoizedState.cache),La();break;case 27:case 5:kl(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(pa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?vf(e,t,a):(pa(t),e=Ft(e,t,a),e!==null?e.sibling:null);pa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(hl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return bf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(_e,_e.current),l)break;return null;case 22:return t.lanes=0,ff(e,t,a,t.pendingProps);case 24:fa(t,Oe,e.memoizedState.cache)}return Ft(e,t,a)}function xf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Yr(e,a)&&(t.flags&128)===0)return Ue=!1,np(e,t,a);Ue=(e.flags&131072)!==0}else Ue=!1,oe&&(t.flags&1048576)!==0&&Wc(t,Pl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Zu(e)?(l=Ka(e,l),t.tag=1,t=pf(null,t,e,l,a)):(t.tag=0,t=Br(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ae){t.tag=11,t=of(null,t,e,l,a);break e}else if(n===W){t.tag=14,t=cf(null,t,e,l,a);break e}}throw t=pt(e)||e,Error(c(306,t,""))}}return t;case 0:return Br(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ka(l,t.pendingProps),pf(e,t,l,n,a);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,ur(e,t),on(t,l,null,a);var u=t.memoizedState;if(l=u.cache,fa(t,Oe,l),l!==i.cache&&er(t,[Oe],a,!0),rn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=gf(e,t,l,a);break e}else if(l!==n){n=bt(Error(c(424)),t),en(n),t=gf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=zt(e.firstChild),Ge=t,oe=!0,ca=null,Et=!0,a=ss(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(La(),l===n){t=Ft(e,t,a);break e}Qe(e,t,l,a)}t=t.child}return t;case 26:return Ai(e,t),e===null?(a=_d(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Xi(le.current).createElement(a),l[qe]=t,l[We]=e,Ze(l,a,e),Le(l),t.stateNode=l):t.memoizedState=_d(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kl(t),e===null&&oe&&(l=t.stateNode=Cd(t.type,t.pendingProps,le.current),Ge=t,Et=!0,n=Ee,za(t.type)?(xo=n,Ee=zt(l.firstChild)):Ee=n),Qe(e,t,t.pendingProps.children,a),Ai(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=Ee)&&(l=Op(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ge=t,Ee=zt(l.firstChild),Et=!1,n=!0):n=!1),n||sa(t)),kl(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,po(n,i)?l=null:u!==null&&po(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=mr(e,t,Jh,null,null,a),Cn._currentValue=n),Ai(e,t),Qe(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=Ee)&&(a=Dp(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ge=t,Ee=null,e=!0):e=!1),e||sa(t)),null;case 13:return vf(e,t,a);case 4:return Je(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Za(t,null,l,a):Qe(e,t,l,a),t.child;case 11:return of(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,fa(t,t.type,l.value),Qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,qa(t),n=Xe(n),l=l(n),t.flags|=1,Qe(e,t,l,a),t.child;case 14:return cf(e,t,t.type,t.pendingProps,a);case 15:return sf(e,t,t.type,t.pendingProps,a);case 19:return bf(e,t,a);case 31:return lp(e,t,a);case 22:return ff(e,t,a,t.pendingProps);case 24:return qa(t),l=Xe(Oe),e===null?(n=lr(),n===null&&(n=Se,i=tr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ir(t),fa(t,Oe,n)):((e.lanes&a)!==0&&(ur(e,t),on(t,null,null,a),rn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),fa(t,Oe,l)):(l=i.cache,fa(t,Oe,l),l!==n.cache&&er(t,[Oe],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Jt(e){e.flags|=4}function qr(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Kf())e.flags|=8192;else throw Qa=fi,nr}else e.flags&=-16777217}function Sf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ud(t))if(Kf())e.flags|=8192;else throw Qa=fi,nr}function Ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Po():536870912,e.lanes|=t,Al|=t)}function hn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ip(e,t,a){var l=t.pendingProps;switch(Ju(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(Oe),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ml(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wu())),je(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Jt(t),i!==null?(je(t),Sf(t,i)):(je(t),qr(t,n,null,l,a))):i?i!==e.memoizedState?(Jt(t),je(t),Sf(t,i)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Jt(t),je(t),qr(t,n,e,l,a)),null;case 27:if(Ln(t),a=le.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return je(t),null}e=Z.current,ml(t)?Pc(t):(e=Cd(n,l,a),t.stateNode=e,Jt(t))}return je(t),null;case 5:if(Ln(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return je(t),null}if(i=Z.current,ml(t))Pc(t);else{var u=Xi(le.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[qe]=t,i[We]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Jt(t)}}return je(t),qr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,ml(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ge,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||vd(e.nodeValue,a)),e||sa(t,!0)}else e=Xi(e).createTextNode(l),e[qe]=t,t.stateNode=e}return je(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ml(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[qe]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else a=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(st(t),t):(st(t),null);if((t.flags&128)!==0)throw Error(c(558))}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ml(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[qe]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(st(t),t):(st(t),null)}return st(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ci(t,t.updateQueue),je(t),null);case 4:return Re(),e===null&&co(t.stateNode.containerInfo),je(t),null;case 10:return Zt(t.type),je(t),null;case 19:if(O(_e),l=t.memoizedState,l===null)return je(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)hn(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=pi(e),i!==null){for(t.flags|=128,hn(l,!1),e=i.updateQueue,t.updateQueue=e,Ci(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Fc(a,e),a=a.sibling;return q(_e,_e.current&1|2),oe&&Xt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&nt()>Bi&&(t.flags|=128,n=!0,hn(l,!1),t.lanes=4194304)}else{if(!n)if(e=pi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ci(t,e),hn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!oe)return je(t),null}else 2*nt()-l.renderingStartTime>Bi&&a!==536870912&&(t.flags|=128,n=!0,hn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=nt(),e.sibling=null,a=_e.current,q(_e,n?a&1|2:a&1),oe&&Xt(t,l.treeForkCount),e):(je(t),null);case 22:case 23:return st(t),sr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Ci(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(Ga),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(Oe),je(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function up(e,t){switch(Ju(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(Oe),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ln(t),null;case 31:if(t.memoizedState!==null){if(st(t),t.alternate===null)throw Error(c(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(st(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(_e),null;case 4:return Re(),null;case 10:return Zt(t.type),null;case 22:case 23:return st(t),sr(),e!==null&&O(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(Oe),null;case 25:return null;default:return null}}function Ef(e,t){switch(Ju(t),t.tag){case 3:Zt(Oe),Re();break;case 26:case 27:case 5:Ln(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&st(t);break;case 13:st(t);break;case 19:O(_e);break;case 10:Zt(t.type);break;case 22:case 23:st(t),sr(),e!==null&&O(Ga);break;case 24:Zt(Oe)}}function pn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){pe(t,t.return,s)}}function va(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var p=a,z=s;try{z()}catch(T){pe(n,p,T)}}}l=l.next}while(l!==i)}}catch(T){pe(t,t.return,T)}}function jf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ds(t,a)}catch(l){pe(e,e.return,l)}}}function zf(e,t,a){a.props=Ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){pe(e,t,l)}}function gn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){pe(e,t,n)}}function Dt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){pe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){pe(e,t,n)}else a.current=null}function wf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){pe(e,e.return,n)}}function Gr(e,t,a){try{var l=e.stateNode;Cp(l,e.type,a,t),l[We]=t}catch(n){pe(e,e.return,n)}}function Af(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Xr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Yt));else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Qr(e,t,a),e=e.sibling;e!==null;)Qr(e,t,a),e=e.sibling}function Ti(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ti(e,t,a),e=e.sibling;e!==null;)Ti(e,t,a),e=e.sibling}function Nf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ze(t,l,a),t[qe]=e,t[We]=a}catch(i){pe(e,e.return,i)}}var $t=!1,He=!1,Zr=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function rp(e,t){if(e=e.containerInfo,mo=$i,e=Lc(e),ku(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,p=-1,z=0,T=0,B=e,w=null;t:for(;;){for(var C;B!==a||n!==0&&B.nodeType!==3||(s=u+n),B!==i||l!==0&&B.nodeType!==3||(p=u+l),B.nodeType===3&&(u+=B.nodeValue.length),(C=B.firstChild)!==null;)w=B,B=C;for(;;){if(B===e)break t;if(w===a&&++z===n&&(s=u),w===i&&++T===l&&(p=u),(C=B.nextSibling)!==null)break;B=w,w=B.parentNode}B=C}a=s===-1||p===-1?null:{start:s,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(ho={focusedElem:e,selectionRange:a},$i=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var X=Ka(a.type,n);e=l.getSnapshotBeforeUpdate(X,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(J){pe(a,a.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)vo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Tf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:It(e,a),l&4&&pn(5,a);break;case 1:if(It(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){pe(a,a.return,u)}else{var n=Ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){pe(a,a.return,u)}}l&64&&jf(a),l&512&&gn(a,a.return);break;case 3:if(It(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ds(e,t)}catch(u){pe(a,a.return,u)}}break;case 27:t===null&&l&4&&Nf(a);case 26:case 5:It(e,a),t===null&&l&4&&wf(a),l&512&&gn(a,a.return);break;case 12:It(e,a);break;case 31:It(e,a),l&4&&Mf(e,a);break;case 13:It(e,a),l&4&&Bf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gp.bind(null,a),Up(e,a))));break;case 22:if(l=a.memoizedState!==null||$t,!l){t=t!==null&&t.memoizedState!==null||He,n=$t;var i=He;$t=l,(He=t)&&!i?Pt(e,a,(a.subtreeFlags&8772)!==0):It(e,a),$t=n,He=i}break;case 30:break;default:It(e,a)}}function Rf(e){var t=e.alternate;t!==null&&(e.alternate=null,Rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Su(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,Pe=!1;function Wt(e,t,a){for(a=a.child;a!==null;)_f(e,t,a),a=a.sibling}function _f(e,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Ll,a)}catch{}switch(a.tag){case 26:He||Dt(a,t),Wt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Dt(a,t);var l=ze,n=Pe;za(a.type)&&(ze=a.stateNode,Pe=!1),Wt(e,t,a),wn(a.stateNode),ze=l,Pe=n;break;case 5:He||Dt(a,t);case 6:if(l=ze,n=Pe,ze=null,Wt(e,t,a),ze=l,Pe=n,ze!==null)if(Pe)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(i){pe(a,t,i)}else try{ze.removeChild(a.stateNode)}catch(i){pe(a,t,i)}break;case 18:ze!==null&&(Pe?(e=ze,jd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ol(e)):jd(ze,a.stateNode));break;case 4:l=ze,n=Pe,ze=a.stateNode.containerInfo,Pe=!0,Wt(e,t,a),ze=l,Pe=n;break;case 0:case 11:case 14:case 15:va(2,a,t),He||va(4,a,t),Wt(e,t,a);break;case 1:He||(Dt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&zf(a,t,l)),Wt(e,t,a);break;case 21:Wt(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,Wt(e,t,a),He=l;break;default:Wt(e,t,a)}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ol(e)}catch(a){pe(t,t.return,a)}}}function Bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ol(e)}catch(a){pe(t,t.return,a)}}function op(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cf),t;default:throw Error(c(435,e.tag))}}function Ri(e,t){var a=op(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=vp.bind(null,e,l);l.then(n,n)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(za(s.type)){ze=s.stateNode,Pe=!1;break e}break;case 5:ze=s.stateNode,Pe=!1;break e;case 3:case 4:ze=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(ze===null)throw Error(c(160));_f(i,u,n),ze=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Of(t,e),t=t.sibling}var Ct=null;function Of(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),l&4&&(va(3,e,e.return),pn(3,e),va(5,e,e.return));break;case 1:et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),l&64&&$t&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ct;if(et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Gl]||i[qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,a),i[qe]=e,Le(i),l=i;break e;case"link":var u=Od("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Od("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[qe]=e,Le(i),l=i}e.stateNode=l}else Dd(n,e.type,e.stateNode);else e.stateNode=Bd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Dd(n,e.type,e.stateNode):Bd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Gr(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),a!==null&&l&4&&Gr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),l&512&&(He||a===null||Dt(a,a.return)),e.flags&32){n=e.stateNode;try{ll(n,"")}catch(X){pe(e,e.return,X)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Gr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Zr=!0);break;case 6:if(et(t,e),tt(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(X){pe(e,e.return,X)}}break;case 3:if(Vi=null,n=Ct,Ct=Qi(t.containerInfo),et(t,e),Ct=n,tt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ol(t.containerInfo)}catch(X){pe(e,e.return,X)}Zr&&(Zr=!1,Df(e));break;case 4:l=Ct,Ct=Qi(e.stateNode.containerInfo),et(t,e),tt(e),Ct=l;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mi=nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,z=$t,T=He;if($t=z||n,He=T||p,et(t,e),He=T,$t=z,tt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||$t||He||Fa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=p.stateNode;var B=p.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null;s.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(X){pe(p,p.return,X)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(X){pe(p,p.return,X)}}}else if(t.tag===18){if(a===null){p=t;try{var C=p.stateNode;n?zd(C,!0):zd(p.stateNode,!1)}catch(X){pe(p,p.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ri(e,a))));break;case 19:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Af(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=Xr(e);Ti(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(ll(u,""),a.flags&=-33);var s=Xr(e);Ti(e,s,u);break;case 3:case 4:var p=a.stateNode.containerInfo,z=Xr(e);Qr(e,z,p);break;default:throw Error(c(161))}}catch(T){pe(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Df(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Df(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Tf(e,t.alternate,t),t=t.sibling}function Fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),Fa(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&zf(t,t.return,a),Fa(t);break;case 27:wn(t.stateNode);case 26:case 5:Dt(t,t.return),Fa(t);break;case 22:t.memoizedState===null&&Fa(t);break;case 30:Fa(t);break;default:Fa(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(n,i,a),pn(4,i);break;case 1:if(Pt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){pe(l,l.return,z)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)fs(p[n],s)}catch(z){pe(l,l.return,z)}}a&&u&64&&jf(i),gn(i,i.return);break;case 27:Nf(i);case 26:case 5:Pt(n,i,a),a&&l===null&&u&4&&wf(i),gn(i,i.return);break;case 12:Pt(n,i,a);break;case 31:Pt(n,i,a),a&&u&4&&Mf(n,i);break;case 13:Pt(n,i,a),a&&u&4&&Bf(n,i);break;case 22:i.memoizedState===null&&Pt(n,i,a),gn(i,i.return);break;case 30:break;default:Pt(n,i,a)}t=t.sibling}}function Vr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&tn(a))}function Kr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tn(e))}function Tt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uf(e,t,a,l),t=t.sibling}function Uf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Tt(e,t,a,l),n&2048&&pn(9,t);break;case 1:Tt(e,t,a,l);break;case 3:Tt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tn(e)));break;case 12:if(n&2048){Tt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){pe(t,t.return,p)}}else Tt(e,t,a,l);break;case 31:Tt(e,t,a,l);break;case 13:Tt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Tt(e,t,a,l):vn(e,t):i._visibility&2?Tt(e,t,a,l):(i._visibility|=2,jl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Vr(u,t);break;case 24:Tt(e,t,a,l),n&2048&&Kr(t.alternate,t);break;default:Tt(e,t,a,l)}}function jl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=a,p=l,z=u.flags;switch(u.tag){case 0:case 11:case 15:jl(i,u,s,p,n),pn(8,u);break;case 23:break;case 22:var T=u.stateNode;u.memoizedState!==null?T._visibility&2?jl(i,u,s,p,n):vn(i,u):(T._visibility|=2,jl(i,u,s,p,n)),n&&z&2048&&Vr(u.alternate,u);break;case 24:jl(i,u,s,p,n),n&&z&2048&&Kr(u.alternate,u);break;default:jl(i,u,s,p,n)}t=t.sibling}}function vn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:vn(a,l),n&2048&&Vr(l.alternate,l);break;case 24:vn(a,l),n&2048&&Kr(l.alternate,l);break;default:vn(a,l)}t=t.sibling}}var yn=8192;function zl(e,t,a){if(e.subtreeFlags&yn)for(e=e.child;e!==null;)Hf(e,t,a),e=e.sibling}function Hf(e,t,a){switch(e.tag){case 26:zl(e,t,a),e.flags&yn&&e.memoizedState!==null&&Fp(a,Ct,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,a);break;case 3:case 4:var l=Ct;Ct=Qi(e.stateNode.containerInfo),zl(e,t,a),Ct=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yn,yn=16777216,zl(e,t,a),yn=l):zl(e,t,a));break;default:zl(e,t,a)}}function kf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Yf(l,e)}kf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lf(e),e=e.sibling}function Lf(e){switch(e.tag){case 0:case 11:case 15:bn(e),e.flags&2048&&va(9,e,e.return);break;case 3:bn(e);break;case 12:bn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_i(e)):bn(e);break;default:bn(e)}}function _i(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Yf(l,e)}kf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),_i(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,_i(t));break;default:_i(t)}e=e.sibling}}function Yf(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ye=l;else e:for(a=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(Rf(l),l===a){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var cp={getCacheForType:function(e){var t=Xe(Oe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Xe(Oe).controller.signal}},sp=typeof WeakMap=="function"?WeakMap:Map,fe=0,Se=null,ne=null,ue=0,he=0,ft=null,ya=!1,wl=!1,Fr=!1,ea=0,Ce=0,ba=0,Ja=0,Jr=0,dt=0,Al=0,xn=null,at=null,$r=!1,Mi=0,qf=0,Bi=1/0,Oi=null,xa=null,ke=0,Sa=null,Nl=null,ta=0,Wr=0,Ir=null,Gf=null,Sn=0,Pr=null;function mt(){return(fe&2)!==0&&ue!==0?ue&-ue:_.T!==null?io():lc()}function Xf(){if(dt===0)if((ue&536870912)===0||oe){var e=Gn;Gn<<=1,(Gn&3932160)===0&&(Gn=262144),dt=e}else dt=536870912;return e=ct.current,e!==null&&(e.flags|=32),dt}function lt(e,t,a){(e===Se&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(Cl(e,0),Ea(e,ue,dt,!1)),ql(e,a),((fe&2)===0||e!==Se)&&(e===Se&&((fe&2)===0&&(Ja|=a),Ce===4&&Ea(e,ue,dt,!1)),Ut(e))}function Qf(e,t,a){if((fe&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Yl(e,t),n=l?mp(e,t):to(e,t,!0),i=l;do{if(n===0){wl&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!fp(a)){n=to(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=xn;var p=s.current.memoizedState.isDehydrated;if(p&&(Cl(s,u).flags|=256),u=to(s,u,!1),u!==2){if(Fr&&!p){s.errorRecoveryDisabledLanes|=i,Ja|=i,n=4;break e}i=at,at=n,i!==null&&(at===null?at=i:at.push.apply(at,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Cl(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,dt,!ya);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Mi+300-nt(),10<n)){if(Ea(l,t,dt,!ya),Qn(l,0,!0)!==0)break e;ta=t,l.timeoutHandle=Sd(Zf.bind(null,l,a,at,Oi,$r,t,dt,Ja,Al,ya,i,"Throttled",-0,0),n);break e}Zf(l,a,at,Oi,$r,t,dt,Ja,Al,ya,i,null,-0,0)}}break}while(!0);Ut(e)}function Zf(e,t,a,l,n,i,u,s,p,z,T,B,w,C){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},Hf(t,i,B);var X=(i&62914560)===i?Mi-nt():(i&4194048)===i?qf-nt():0;if(X=Jp(B,X),X!==null){ta=i,e.cancelPendingCommit=X(Pf.bind(null,e,t,i,a,l,n,u,s,p,T,B,null,w,C)),Ea(e,i,u,!z);return}}Pf(e,t,i,a,l,n,u,s,p)}function fp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!rt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~Jr,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ut(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&ec(e,a,t)}function Di(){return(fe&6)===0?(En(0),!1):!0}function eo(){if(ne!==null){if(he===0)var e=ne.return;else e=ne,Qt=Ya=null,gr(e),yl=null,ln=0,e=ne;for(;e!==null;)Ef(e.alternate,e),e=e.return;ne=null}}function Cl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_p(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,eo(),Se=e,ne=a=Gt(e.current,null),ue=t,he=0,ft=null,ya=!1,wl=Yl(e,t),Fr=!1,Al=dt=Jr=Ja=ba=Ce=0,at=xn=null,$r=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ut(l),i=1<<n;t|=e[n],l&=~i}return ea=t,ai(),a}function Vf(e,t){ee=null,_.H=dn,t===vl||t===si?(t=rs(),he=3):t===nr?(t=rs(),he=4):he=t===Mr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,ne===null&&(Ce=1,zi(e,bt(t,e.current)))}function Kf(){var e=ct.current;return e===null?!0:(ue&4194048)===ue?jt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===jt:!1}function Ff(){var e=_.H;return _.H=dn,e===null?dn:e}function Jf(){var e=_.A;return _.A=cp,e}function Ui(){Ce=4,ya||(ue&4194048)!==ue&&ct.current!==null||(wl=!0),(ba&134217727)===0&&(Ja&134217727)===0||Se===null||Ea(Se,ue,dt,!1)}function to(e,t,a){var l=fe;fe|=2;var n=Ff(),i=Jf();(Se!==e||ue!==t)&&(Oi=null,Cl(e,t)),t=!1;var u=Ce;e:do try{if(he!==0&&ne!==null){var s=ne,p=ft;switch(he){case 8:eo(),u=6;break e;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var z=he;if(he=0,ft=null,Tl(e,s,p,z),a&&wl){u=0;break e}break;default:z=he,he=0,ft=null,Tl(e,s,p,z)}}dp(),u=Ce;break}catch(T){Vf(e,T)}while(!0);return t&&e.shellSuspendCounter++,Qt=Ya=null,fe=l,_.H=n,_.A=i,ne===null&&(Se=null,ue=0,ai()),u}function dp(){for(;ne!==null;)$f(ne)}function mp(e,t){var a=fe;fe|=2;var l=Ff(),n=Jf();Se!==e||ue!==t?(Oi=null,Bi=nt()+500,Cl(e,t)):wl=Yl(e,t);e:do try{if(he!==0&&ne!==null){t=ne;var i=ft;t:switch(he){case 1:he=0,ft=null,Tl(e,t,i,1);break;case 2:case 9:if(is(i)){he=0,ft=null,Wf(t);break}t=function(){he!==2&&he!==9||Se!==e||(he=7),Ut(e)},i.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:is(i)?(he=0,ft=null,Wf(t)):(he=0,ft=null,Tl(e,t,i,7));break;case 5:var u=null;switch(ne.tag){case 26:u=ne.memoizedState;case 5:case 27:var s=ne;if(u?Ud(u):s.stateNode.complete){he=0,ft=null;var p=s.sibling;if(p!==null)ne=p;else{var z=s.return;z!==null?(ne=z,Hi(z)):ne=null}break t}}he=0,ft=null,Tl(e,t,i,5);break;case 6:he=0,ft=null,Tl(e,t,i,6);break;case 8:eo(),Ce=6;break e;default:throw Error(c(462))}}hp();break}catch(T){Vf(e,T)}while(!0);return Qt=Ya=null,_.H=l,_.A=n,fe=a,ne!==null?0:(Se=null,ue=0,ai(),Ce)}function hp(){for(;ne!==null&&!Hm();)$f(ne)}function $f(e){var t=xf(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?Hi(e):ne=t}function Wf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=hf(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=hf(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:gr(t);default:Ef(a,t),t=ne=Fc(t,ea),t=xf(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?Hi(e):ne=t}function Tl(e,t,a,l){Qt=Ya=null,gr(t),yl=null,ln=0;var n=t.return;try{if(ap(e,n,t,a,ue)){Ce=1,zi(e,bt(a,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Ce=1,zi(e,bt(a,e.current)),ne=null;return}t.flags&32768?(oe||l===1?e=!0:wl||(ue&536870912)!==0?e=!1:(ya=e=!0,(l===2||l===9||l===3||l===6)&&(l=ct.current,l!==null&&l.tag===13&&(l.flags|=16384))),If(t,e)):Hi(t)}function Hi(e){var t=e;do{if((t.flags&32768)!==0){If(t,ya);return}e=t.return;var a=ip(t.alternate,t,ea);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ce===0&&(Ce=5)}function If(e,t){do{var a=up(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Ce=6,ne=null}function Pf(e,t,a,l,n,i,u,s,p){e.cancelPendingCommit=null;do ki();while(ke!==0);if((fe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Xu,Km(e,a,i,u,s,p),e===Se&&(ne=Se=null,ue=0),Nl=t,Sa=e,ta=a,Wr=i,Ir=n,Gf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yp(Yn,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,n=Y.p,Y.p=2,u=fe,fe|=4;try{rp(e,t,a)}finally{fe=u,Y.p=n,_.T=l}}ke=1,ed(),td(),ad()}}function ed(){if(ke===1){ke=0;var e=Sa,t=Nl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var l=Y.p;Y.p=2;var n=fe;fe|=4;try{Of(t,e);var i=ho,u=Lc(e.containerInfo),s=i.focusedElem,p=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&kc(s.ownerDocument.documentElement,s)){if(p!==null&&ku(s)){var z=p.start,T=p.end;if(T===void 0&&(T=z),"selectionStart"in s)s.selectionStart=z,s.selectionEnd=Math.min(T,s.value.length);else{var B=s.ownerDocument||document,w=B&&B.defaultView||window;if(w.getSelection){var C=w.getSelection(),X=s.textContent.length,J=Math.min(p.start,X),be=p.end===void 0?J:Math.min(p.end,X);!C.extend&&J>be&&(u=be,be=J,J=u);var S=Hc(s,J),y=Hc(s,be);if(S&&y&&(C.rangeCount!==1||C.anchorNode!==S.node||C.anchorOffset!==S.offset||C.focusNode!==y.node||C.focusOffset!==y.offset)){var j=B.createRange();j.setStart(S.node,S.offset),C.removeAllRanges(),J>be?(C.addRange(j),C.extend(y.node,y.offset)):(j.setEnd(y.node,y.offset),C.addRange(j))}}}}for(B=[],C=s;C=C.parentNode;)C.nodeType===1&&B.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<B.length;s++){var M=B[s];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}$i=!!mo,ho=mo=null}finally{fe=n,Y.p=l,_.T=a}}e.current=t,ke=2}}function td(){if(ke===2){ke=0;var e=Sa,t=Nl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var l=Y.p;Y.p=2;var n=fe;fe|=4;try{Tf(e,t.alternate,t)}finally{fe=n,Y.p=l,_.T=a}}ke=3}}function ad(){if(ke===4||ke===3){ke=0,km();var e=Sa,t=Nl,a=ta,l=Gf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,Nl=Sa=null,ld(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(xa=null),bu(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,n=Y.p,Y.p=2,_.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{_.T=t,Y.p=n}}(ta&3)!==0&&ki(),Ut(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Pr?Sn++:(Sn=0,Pr=e):Sn=0,En(0)}}function ld(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,tn(t)))}function ki(){return ed(),td(),ad(),nd()}function nd(){if(ke!==5)return!1;var e=Sa,t=Wr;Wr=0;var a=bu(ta),l=_.T,n=Y.p;try{Y.p=32>a?32:a,_.T=null,a=Ir,Ir=null;var i=Sa,u=ta;if(ke=0,Nl=Sa=null,ta=0,(fe&6)!==0)throw Error(c(331));var s=fe;if(fe|=4,Lf(i.current),Uf(i,i.current,u,a),fe=s,En(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Ll,i)}catch{}return!0}finally{Y.p=n,_.T=l,ld(e,t)}}function id(e,t,a){t=bt(a,t),t=_r(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(ql(e,2),Ut(e))}function pe(e,t,a){if(e.tag===3)id(e,e,a);else for(;t!==null;){if(t.tag===3){id(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xa===null||!xa.has(l))){e=bt(a,e),a=uf(2),l=ha(t,a,2),l!==null&&(rf(a,l,t,e),ql(l,2),Ut(l));break}}t=t.return}}function ao(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new sp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Fr=!0,n.add(a),e=pp.bind(null,e,t,a),t.then(e,e))}function pp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(ue&a)===a&&(Ce===4||Ce===3&&(ue&62914560)===ue&&300>nt()-Mi?(fe&2)===0&&Cl(e,0):Jr|=a,Al===ue&&(Al=0)),Ut(e)}function ud(e,t){t===0&&(t=Po()),e=Ha(e,t),e!==null&&(ql(e,t),Ut(e))}function gp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ud(e,a)}function vp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),ud(e,a)}function yp(e,t){return pu(e,t)}var Li=null,Rl=null,lo=!1,Yi=!1,no=!1,ja=0;function Ut(e){e!==Rl&&e.next===null&&(Rl===null?Li=Rl=e:Rl=Rl.next=e),Yi=!0,lo||(lo=!0,xp())}function En(e,t){if(!no&&Yi){no=!0;do for(var a=!1,l=Li;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-ut(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,sd(l,i))}else i=ue,i=Qn(l,l===Se?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Yl(l,i)||(a=!0,sd(l,i));l=l.next}while(a);no=!1}}function bp(){rd()}function rd(){Yi=lo=!1;var e=0;ja!==0&&Rp()&&(e=ja);for(var t=nt(),a=null,l=Li;l!==null;){var n=l.next,i=od(l,t);i===0?(l.next=null,a===null?Li=n:a.next=n,n===null&&(Rl=a)):(a=l,(e!==0||(i&3)!==0)&&(Yi=!0)),l=n}ke!==0&&ke!==5||En(e),ja!==0&&(ja=0)}function od(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ut(i),s=1<<u,p=n[u];p===-1?((s&a)===0||(s&l)!==0)&&(n[u]=Vm(s,t)):p<=t&&(e.expiredLanes|=s),i&=~s}if(t=Se,a=ue,a=Qn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&gu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&gu(l),bu(a)){case 2:case 8:a=Wo;break;case 32:a=Yn;break;case 268435456:a=Io;break;default:a=Yn}return l=cd.bind(null,e),a=pu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&gu(l),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ki()&&e.callbackNode!==a)return null;var l=ue;return l=Qn(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Qf(e,l,t),od(e,nt()),e.callbackNode!=null&&e.callbackNode===a?cd.bind(null,e):null)}function sd(e,t){if(ki())return null;Qf(e,t,!0)}function xp(){Mp(function(){(fe&6)!==0?pu($o,bp):rd()})}function io(){if(ja===0){var e=pl;e===0&&(e=qn,qn<<=1,(qn&261888)===0&&(qn=256)),ja=e}return ja}function fd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fn(""+e)}function dd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Sp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=fd((n[We]||null).action),u=l.submitter;u&&(t=(t=u[We]||null)?fd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new In("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ja!==0){var p=u?dd(n,u):new FormData(n);wr(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(s.preventDefault(),p=u?dd(n,u):new FormData(n),wr(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var uo=0;uo<Gu.length;uo++){var ro=Gu[uo],Ep=ro.toLowerCase(),jp=ro[0].toUpperCase()+ro.slice(1);Nt(Ep,"on"+jp)}Nt(Gc,"onAnimationEnd"),Nt(Xc,"onAnimationIteration"),Nt(Qc,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(Lh,"onTransitionRun"),Nt(Yh,"onTransitionStart"),Nt(qh,"onTransitionCancel"),Nt(Zc,"onTransitionEnd"),tl("onMouseEnter",["mouseout","mouseover"]),tl("onMouseLeave",["mouseout","mouseover"]),tl("onPointerEnter",["pointerout","pointerover"]),tl("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn));function md(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],p=s.instance,z=s.currentTarget;if(s=s.listener,p!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(T){ti(T)}n.currentTarget=null,i=p}else for(u=0;u<l.length;u++){if(s=l[u],p=s.instance,z=s.currentTarget,s=s.listener,p!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=z;try{i(n)}catch(T){ti(T)}n.currentTarget=null,i=p}}}}function ie(e,t){var a=t[xu];a===void 0&&(a=t[xu]=new Set);var l=e+"__bubble";a.has(l)||(hd(t,e,2,!1),a.add(l))}function oo(e,t,a){var l=0;t&&(l|=4),hd(a,e,l,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[qi]){e[qi]=!0,uc.forEach(function(a){a!=="selectionchange"&&(zp.has(a)||oo(a,!1,e),oo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,oo("selectionchange",!1,t))}}function hd(e,t,a,l){switch(Xd(t)){case 2:var n=Ip;break;case 8:n=Pp;break;default:n=wo}a=n.bind(null,t,a,e),n=void 0,!Tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function so(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var p=u.tag;if((p===3||p===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Ia(s),u===null)return;if(p=u.tag,p===5||p===6||p===26||p===27){l=i=u;continue e}s=s.parentNode}}l=l.return}yc(function(){var z=i,T=Nu(a),B=[];e:{var w=Vc.get(e);if(w!==void 0){var C=In,X=e;switch(e){case"keypress":if($n(a)===0)break e;case"keydown":case"keyup":C=vh;break;case"focusin":X="focus",C=Bu;break;case"focusout":X="blur",C=Bu;break;case"beforeblur":case"afterblur":C=Bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=xh;break;case Gc:case Xc:case Qc:C=oh;break;case Zc:C=Eh;break;case"scroll":case"scrollend":C=lh;break;case"wheel":C=zh;break;case"copy":case"cut":case"paste":C=sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=jc;break;case"toggle":case"beforetoggle":C=Ah}var J=(t&4)!==0,be=!J&&(e==="scroll"||e==="scrollend"),S=J?w!==null?w+"Capture":null:w;J=[];for(var y=z,j;y!==null;){var M=y;if(j=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||j===null||S===null||(M=Ql(y,S),M!=null&&J.push(zn(y,M,j))),be)break;y=y.return}0<J.length&&(w=new C(w,X,null,a,T),B.push({event:w,listeners:J}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",w&&a!==Au&&(X=a.relatedTarget||a.fromElement)&&(Ia(X)||X[Wa]))break e;if((C||w)&&(w=T.window===T?T:(w=T.ownerDocument)?w.defaultView||w.parentWindow:window,C?(X=a.relatedTarget||a.toElement,C=z,X=X?Ia(X):null,X!==null&&(be=h(X),J=X.tag,X!==be||J!==5&&J!==27&&J!==6)&&(X=null)):(C=null,X=z),C!==X)){if(J=Sc,M="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(J=jc,M="onPointerLeave",S="onPointerEnter",y="pointer"),be=C==null?w:Xl(C),j=X==null?w:Xl(X),w=new J(M,y+"leave",C,a,T),w.target=be,w.relatedTarget=j,M=null,Ia(T)===z&&(J=new J(S,y+"enter",X,a,T),J.target=j,J.relatedTarget=be,M=J),be=M,C&&X)t:{for(J=wp,S=C,y=X,j=0,M=S;M;M=J(M))j++;M=0;for(var K=y;K;K=J(K))M++;for(;0<j-M;)S=J(S),j--;for(;0<M-j;)y=J(y),M--;for(;j--;){if(S===y||y!==null&&S===y.alternate){J=S;break t}S=J(S),y=J(y)}J=null}else J=null;C!==null&&pd(B,w,C,J,!1),X!==null&&be!==null&&pd(B,be,X,J,!0)}}e:{if(w=z?Xl(z):window,C=w.nodeName&&w.nodeName.toLowerCase(),C==="select"||C==="input"&&w.type==="file")var ce=_c;else if(Tc(w))if(Mc)ce=Uh;else{ce=Oh;var V=Bh}else C=w.nodeName,!C||C.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?z&&wu(z.elementType)&&(ce=_c):ce=Dh;if(ce&&(ce=ce(e,z))){Rc(B,ce,a,T);break e}V&&V(e,w,z),e==="focusout"&&z&&w.type==="number"&&z.memoizedProps.value!=null&&zu(w,"number",w.value)}switch(V=z?Xl(z):window,e){case"focusin":(Tc(V)||V.contentEditable==="true")&&(rl=V,Lu=z,Il=null);break;case"focusout":Il=Lu=rl=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,Yc(B,a,T);break;case"selectionchange":if(kh)break;case"keydown":case"keyup":Yc(B,a,T)}var te;if(Du)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else ul?Nc(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(zc&&a.locale!=="ko"&&(ul||re!=="onCompositionStart"?re==="onCompositionEnd"&&ul&&(te=bc()):(ra=T,Ru="value"in ra?ra.value:ra.textContent,ul=!0)),V=Gi(z,re),0<V.length&&(re=new Ec(re,e,null,a,T),B.push({event:re,listeners:V}),te?re.data=te:(te=Cc(a),te!==null&&(re.data=te)))),(te=Ch?Th(e,a):Rh(e,a))&&(re=Gi(z,"onBeforeInput"),0<re.length&&(V=new Ec("onBeforeInput","beforeinput",null,a,T),B.push({event:V,listeners:re}),V.data=te)),Sp(B,e,z,a,T)}md(B,t)})}function zn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Gi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ql(e,a),n!=null&&l.unshift(zn(e,n,i)),n=Ql(e,t),n!=null&&l.push(zn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function wp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,p=s.alternate,z=s.stateNode;if(s=s.tag,p!==null&&p===l)break;s!==5&&s!==26&&s!==27||z===null||(p=z,n?(z=Ql(a,i),z!=null&&u.unshift(zn(a,z,p))):n||(z=Ql(a,i),z!=null&&u.push(zn(a,z,p)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Ap=/\r\n?/g,Np=/\u0000|\uFFFD/g;function gd(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace(Np,"")}function vd(e,t){return t=gd(t),gd(e)===t}function ye(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ll(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ll(e,""+l);break;case"className":Vn(e,"class",l);break;case"tabIndex":Vn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Vn(e,a,l);break;case"style":gc(e,l,i);break;case"data":if(t!=="object"){Vn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",n.name,n,null),ye(e,t,"formEncType",n.formEncType,n,null),ye(e,t,"formMethod",n.formMethod,n,null),ye(e,t,"formTarget",n.formTarget,n,null)):(ye(e,t,"encType",n.encType,n,null),ye(e,t,"method",n.method,n,null),ye(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Fn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Zn(e,"popover",l);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Zn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=th.get(a)||a,Zn(e,a,l))}}function fo(e,t,a,l,n,i){switch(a){case"style":gc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ll(e,l):(typeof l=="number"||typeof l=="bigint")&&ll(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[We]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Zn(e,a,l)}}}function Ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,i,u,a,null)}}n&&ye(e,t,"srcSet",a.srcSet,a,null),l&&ye(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var s=i=u=n=null,p=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var T=a[l];if(T!=null)switch(l){case"name":n=T;break;case"type":u=T;break;case"checked":p=T;break;case"defaultChecked":z=T;break;case"value":i=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:ye(e,t,l,T,a,null)}}dc(e,i,s,p,z,u,n,!1);return;case"select":ie("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:ye(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?al(e,!!l,t,!1):a!=null&&al(e,!!l,a,!0);return;case"textarea":ie("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:ye(e,t,u,s,a,null)}hc(e,l,n,i);return;case"option":for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null)&&(p==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ye(e,t,p,l,a,null));return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<jn.length;l++)ie(jn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,z,l,a,null)}return;default:if(wu(t)){for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!==void 0&&fo(e,t,T,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&ye(e,t,s,l,a,null))}function Cp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,p=null,z=null,T=null;for(C in a){var B=a[C];if(a.hasOwnProperty(C)&&B!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":p=B;default:l.hasOwnProperty(C)||ye(e,t,C,null,l,B)}}for(var w in l){var C=l[w];if(B=a[w],l.hasOwnProperty(w)&&(C!=null||B!=null))switch(w){case"type":i=C;break;case"name":n=C;break;case"checked":z=C;break;case"defaultChecked":T=C;break;case"value":u=C;break;case"defaultValue":s=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:C!==B&&ye(e,t,w,C,l,B)}}ju(e,u,s,p,z,T,i,n);return;case"select":C=u=s=w=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":C=p;default:l.hasOwnProperty(i)||ye(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":w=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==p&&ye(e,t,n,i,l,p)}t=s,a=u,l=C,w!=null?al(e,!!a,w,!1):!!l!=!!a&&(t!=null?al(e,!!a,t,!0):al(e,!!a,a?[]:"",!1));return;case"textarea":C=w=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ye(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":w=n;break;case"defaultValue":C=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&ye(e,t,u,n,l,i)}mc(e,w,C);return;case"option":for(var X in a)w=a[X],a.hasOwnProperty(X)&&w!=null&&!l.hasOwnProperty(X)&&(X==="selected"?e.selected=!1:ye(e,t,X,null,l,w));for(p in l)w=l[p],C=a[p],l.hasOwnProperty(p)&&w!==C&&(w!=null||C!=null)&&(p==="selected"?e.selected=w&&typeof w!="function"&&typeof w!="symbol":ye(e,t,p,w,l,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)w=a[J],a.hasOwnProperty(J)&&w!=null&&!l.hasOwnProperty(J)&&ye(e,t,J,null,l,w);for(z in l)if(w=l[z],C=a[z],l.hasOwnProperty(z)&&w!==C&&(w!=null||C!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:ye(e,t,z,w,l,C)}return;default:if(wu(t)){for(var be in a)w=a[be],a.hasOwnProperty(be)&&w!==void 0&&!l.hasOwnProperty(be)&&fo(e,t,be,void 0,l,w);for(T in l)w=l[T],C=a[T],!l.hasOwnProperty(T)||w===C||w===void 0&&C===void 0||fo(e,t,T,w,l,C);return}}for(var S in a)w=a[S],a.hasOwnProperty(S)&&w!=null&&!l.hasOwnProperty(S)&&ye(e,t,S,null,l,w);for(B in l)w=l[B],C=a[B],!l.hasOwnProperty(B)||w===C||w==null&&C==null||ye(e,t,B,w,l,C)}function yd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Tp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&yd(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var p=a[l],z=p.startTime;if(z>s)break;var T=p.transferSize,B=p.initiatorType;T&&yd(B)&&(p=p.responseEnd,u+=T*(p<s?1:(s-z)/(p-z)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mo=null,ho=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function bd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var go=null;function Rp(){var e=window.event;return e&&e.type==="popstate"?e===go?!1:(go=e,!0):(go=null,!1)}var Sd=typeof setTimeout=="function"?setTimeout:void 0,_p=typeof clearTimeout=="function"?clearTimeout:void 0,Ed=typeof Promise=="function"?Promise:void 0,Mp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ed<"u"?function(e){return Ed.resolve(null).then(e).catch(Bp)}:Sd;function Bp(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function jd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ol(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")wn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,wn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Gl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&wn(e.ownerDocument.body);a=n}while(a);Ol(t)}function zd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function vo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vo(a),Su(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Op(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Dp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function wd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function yo(e){return e.data==="$?"||e.data==="$~"}function bo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Up(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xo=null;function Ad(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Cd(e,t,a){switch(t=Xi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function wn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Su(e)}var wt=new Map,Td=new Set;function Qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=Y.d;Y.d={f:Hp,r:kp,D:Lp,C:Yp,L:qp,m:Gp,X:Qp,S:Xp,M:Zp};function Hp(){var e=aa.f(),t=Di();return e||t}function kp(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Zs(t):aa.r(e)}var _l=typeof document>"u"?null:document;function Rd(e,t,a){var l=_l;if(l&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Td.has(n)||(Td.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ze(t,"link",e),Le(t),l.head.appendChild(t)))}}function Lp(e){aa.D(e),Rd("dns-prefetch",e,null)}function Yp(e,t){aa.C(e,t),Rd("preconnect",e,t)}function qp(e,t,a){aa.L(e,t,a);var l=_l;if(l&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+vt(a.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var i=n;switch(t){case"style":i=Ml(e);break;case"script":i=Bl(e)}wt.has(i)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),wt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(An(i))||t==="script"&&l.querySelector(Nn(i))||(t=l.createElement("link"),Ze(t,"link",e),Le(t),l.head.appendChild(t)))}}function Gp(e,t){aa.m(e,t);var a=_l;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(e)}if(!wt.has(i)&&(e=E({rel:"modulepreload",href:e},t),wt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nn(i)))return}l=a.createElement("link"),Ze(l,"link",e),Le(l),a.head.appendChild(l)}}}function Xp(e,t,a){aa.S(e,t,a);var l=_l;if(l&&e){var n=el(l).hoistableStyles,i=Ml(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(An(i)))s.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=wt.get(i))&&So(e,a);var p=u=l.createElement("link");Le(p),Ze(p,"link",e),p._p=new Promise(function(z,T){p.onload=z,p.onerror=T}),p.addEventListener("load",function(){s.loading|=1}),p.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Zi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function Qp(e,t){aa.X(e,t);var a=_l;if(a&&e){var l=el(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(Nn(n)),i||(e=E({src:e,async:!0},t),(t=wt.get(n))&&Eo(e,t),i=a.createElement("script"),Le(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Zp(e,t){aa.M(e,t);var a=_l;if(a&&e){var l=el(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(Nn(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&Eo(e,t),i=a.createElement("script"),Le(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function _d(e,t,a,l){var n=(n=le.current)?Qi(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ml(a.href),a=el(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ml(a.href);var i=el(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(An(e)))&&!i._p&&(u.instance=i,u.state.loading=5),wt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wt.set(e,a),i||Vp(n,e,a,u.state))),t&&l===null)throw Error(c(528,""));return u}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bl(a),a=el(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ml(e){return'href="'+vt(e)+'"'}function An(e){return'link[rel="stylesheet"]['+e+"]"}function Md(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Vp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ze(t,"link",a),Le(t),e.head.appendChild(t))}function Bl(e){return'[src="'+vt(e)+'"]'}function Nn(e){return"script[async]"+e}function Bd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return t.instance=l,Le(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Le(l),Ze(l,"style",n),Zi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ml(a.href);var i=e.querySelector(An(n));if(i)return t.state.loading|=4,t.instance=i,Le(i),i;l=Md(a),(n=wt.get(n))&&So(l,n),i=(e.ownerDocument||e).createElement("link"),Le(i);var u=i;return u._p=new Promise(function(s,p){u.onload=s,u.onerror=p}),Ze(i,"link",l),t.state.loading|=4,Zi(i,a.precedence,e),t.instance=i;case"script":return i=Bl(a.src),(n=e.querySelector(Nn(i)))?(t.instance=n,Le(n),n):(l=a,(n=wt.get(i))&&(l=E({},a),Eo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Le(n),Ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Zi(l,a.precedence,e));return t.instance}function Zi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function So(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Eo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vi=null;function Od(e,t,a){if(Vi===null){var l=new Map,n=Vi=new Map;n.set(a,l)}else n=Vi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Gl]||i[qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function Dd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Kp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ud(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Fp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ml(l.href),i=t.querySelector(An(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ki.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Le(i);return}i=t.ownerDocument||t,l=Md(l),(n=wt.get(n))&&So(l,n),i=i.createElement("link"),Le(i);var u=i;u._p=new Promise(function(s,p){u.onload=s,u.onerror=p}),Ze(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ki.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var jo=0;function Jp(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&jo===0&&(jo=62500*Tp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>jo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fi=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fi=new Map,t.forEach($p,e),Fi=null,Ki.call(e))}function $p(e,t){if(!(t.state.loading&4)){var a=Fi.get(e);if(a)var l=a.get(null);else{a=new Map,Fi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Ki.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Cn={$$typeof:Q,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Wp(e,t,a,l,n,i,u,s,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Hd(e,t,a,l,n,i,u,s,p,z,T,B){return e=new Wp(e,t,a,u,p,z,T,B,s),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),e.current=i,i.stateNode=e,t=tr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ir(i),e}function kd(e){return e?(e=sl,e):sl}function Ld(e,t,a,l,n,i){n=kd(n),l.context===null?l.context=n:l.pendingContext=n,l=ma(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ha(e,l,t),a!==null&&(lt(a,e,t),un(a,e,t))}function Yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function zo(e,t){Yd(e,t),(e=e.alternate)&&Yd(e,t)}function qd(e){if(e.tag===13||e.tag===31){var t=Ha(e,67108864);t!==null&&lt(t,e,67108864),zo(e,67108864)}}function Gd(e){if(e.tag===13||e.tag===31){var t=mt();t=yu(t);var a=Ha(e,t);a!==null&&lt(a,e,t),zo(e,t)}}var $i=!0;function Ip(e,t,a,l){var n=_.T;_.T=null;var i=Y.p;try{Y.p=2,wo(e,t,a,l)}finally{Y.p=i,_.T=n}}function Pp(e,t,a,l){var n=_.T;_.T=null;var i=Y.p;try{Y.p=8,wo(e,t,a,l)}finally{Y.p=i,_.T=n}}function wo(e,t,a,l){if($i){var n=Ao(l);if(n===null)so(e,t,l,Wi,a),Qd(e,l);else if(t0(n,e,t,a,l))l.stopPropagation();else if(Qd(e,l),t&4&&-1<e0.indexOf(e)){for(;n!==null;){var i=Pa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ma(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var p=1<<31-ut(u);s.entanglements[1]|=p,u&=~p}Ut(i),(fe&6)===0&&(Bi=nt()+500,En(0))}}break;case 31:case 13:s=Ha(i,2),s!==null&&lt(s,i,2),Di(),zo(i,2)}if(i=Ao(l),i===null&&so(e,t,l,Wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else so(e,t,l,null,a)}}function Ao(e){return e=Nu(e),No(e)}var Wi=null;function No(e){if(Wi=null,e=Ia(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=N(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function Xd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lm()){case $o:return 2;case Wo:return 8;case Yn:case Ym:return 32;case Io:return 268435456;default:return 32}default:return 32}}var Co=!1,wa=null,Aa=null,Na=null,Tn=new Map,Rn=new Map,Ca=[],e0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qd(e,t){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Tn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function _n(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Pa(t),t!==null&&qd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function t0(e,t,a,l,n){switch(t){case"focusin":return wa=_n(wa,e,t,a,l,n),!0;case"dragenter":return Aa=_n(Aa,e,t,a,l,n),!0;case"mouseover":return Na=_n(Na,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Tn.set(i,_n(Tn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Rn.set(i,_n(Rn.get(i)||null,e,t,a,l,n)),!0}return!1}function Zd(e){var t=Ia(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,nc(e.priority,function(){Gd(a)});return}}else if(t===31){if(t=N(a),t!==null){e.blockedOn=t,nc(e.priority,function(){Gd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ao(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Au=l,a.target.dispatchEvent(l),Au=null}else return t=Pa(a),t!==null&&qd(t),e.blockedOn=a,!1;t.shift()}return!0}function Vd(e,t,a){Ii(e)&&a.delete(t)}function a0(){Co=!1,wa!==null&&Ii(wa)&&(wa=null),Aa!==null&&Ii(Aa)&&(Aa=null),Na!==null&&Ii(Na)&&(Na=null),Tn.forEach(Vd),Rn.forEach(Vd)}function Pi(e,t){e.blockedOn===t&&(e.blockedOn=null,Co||(Co=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,a0)))}var eu=null;function Kd(e){eu!==e&&(eu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){eu===e&&(eu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(No(l||a)===null)continue;break}var i=Pa(a);i!==null&&(e.splice(t,3),t-=3,wr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ol(e){function t(p){return Pi(p,e)}wa!==null&&Pi(wa,e),Aa!==null&&Pi(Aa,e),Na!==null&&Pi(Na,e),Tn.forEach(t),Rn.forEach(t);for(var a=0;a<Ca.length;a++){var l=Ca[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Zd(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[We]||null;if(typeof i=="function")u||Kd(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[We]||null)s=u.formAction;else if(No(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Kd(a)}}}function Fd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function To(e){this._internalRoot=e}tu.prototype.render=To.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=mt();Ld(a,l,e,t,null,null)},tu.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ld(e.current,2,null,e,null,null),Di(),t[Wa]=null}};function tu(e){this._internalRoot=e}tu.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ca.length&&t!==0&&t<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&Zd(e)}};var Jd=f.version;if(Jd!=="19.2.4")throw Error(c(527,Jd,"19.2.4"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var l0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{Ll=au.inject(l0),it=au}catch{}}return Bn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=tf,i=af,u=lf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Hd(e,1,!1,null,null,a,l,null,n,i,u,Fd),e[Wa]=t.current,co(e),new To(t)},Bn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",i=tf,u=af,s=lf,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Hd(e,1,!0,t,a??null,l,n,p,i,u,s,Fd),t.context=kd(null),a=t.current,l=mt(),l=yu(l),n=ma(l),n.callback=null,ha(a,n,l),a=l,t.current.lanes=a,ql(t,a),Ut(t),e[Wa]=t.current,co(e),new tu(t)},Bn.version="19.2.4",Bn}var im;function m0(){if(im)return Mo.exports;im=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Mo.exports=d0(),Mo.exports}var h0=m0();var um="popstate";function rm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function p0(r={}){function f(m,h){let{pathname:g="/",search:N="",hash:x=""}=$a(m.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Lo("",{pathname:g,search:N,hash:x},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function d(m,h){let g=m.document.querySelector("base"),N="";if(g&&g.getAttribute("href")){let x=m.location.href,v=x.indexOf("#");N=v===-1?x:x.slice(0,v)}return N+"#"+(typeof h=="string"?h:Dn(h))}function c(m,h){Rt(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return v0(f,d,c,r)}function Ae(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function Rt(r,f){if(!r){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function g0(){return Math.random().toString(36).substring(2,10)}function om(r,f){return{usr:r.state,key:r.key,idx:f,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Lo(r,f,d=null,c,m){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof f=="string"?$a(f):f,state:d,key:f&&f.key||c||g0(),unstable_mask:m}}function Dn({pathname:r="/",search:f="",hash:d=""}){return f&&f!=="?"&&(r+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function $a(r){let f={};if(r){let d=r.indexOf("#");d>=0&&(f.hash=r.substring(d),r=r.substring(0,d));let c=r.indexOf("?");c>=0&&(f.search=r.substring(c),r=r.substring(0,c)),r&&(f.pathname=r)}return f}function v0(r,f,d,c={}){let{window:m=document.defaultView,v5Compat:h=!1}=c,g=m.history,N="POP",x=null,v=R();v==null&&(v=0,g.replaceState({...g.state,idx:v},""));function R(){return(g.state||{idx:null}).idx}function E(){N="POP";let U=R(),F=U==null?null:U-v;v=U,x&&x({action:N,location:H.location,delta:F})}function D(U,F){N="PUSH";let k=rm(U)?U:Lo(H.location,U,F);d&&d(k,U),v=R()+1;let Q=om(k,v),ae=H.createHref(k.unstable_mask||k);try{g.pushState(Q,"",ae)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;m.location.assign(ae)}h&&x&&x({action:N,location:H.location,delta:1})}function G(U,F){N="REPLACE";let k=rm(U)?U:Lo(H.location,U,F);d&&d(k,U),v=R();let Q=om(k,v),ae=H.createHref(k.unstable_mask||k);g.replaceState(Q,"",ae),h&&x&&x({action:N,location:H.location,delta:0})}function L(U){return y0(U)}let H={get action(){return N},get location(){return r(m,g)},listen(U){if(x)throw new Error("A history only accepts one active listener");return m.addEventListener(um,E),x=U,()=>{m.removeEventListener(um,E),x=null}},createHref(U){return f(m,U)},createURL:L,encodeLocation(U){let F=L(U);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:D,replace:G,go(U){return g.go(U)}};return H}function y0(r,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ae(d,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:Dn(r);return c=c.replace(/ $/,"%20"),!f&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function hm(r,f,d="/"){return b0(r,f,d,!1)}function b0(r,f,d,c){let m=typeof f=="string"?$a(f):f,h=la(m.pathname||"/",d);if(h==null)return null;let g=pm(r);x0(g);let N=null;for(let x=0;N==null&&x<g.length;++x){let v=_0(h);N=T0(g[x],v,c)}return N}function pm(r,f=[],d=[],c="",m=!1){let h=(g,N,x=m,v)=>{let R={relativePath:v===void 0?g.path||"":v,caseSensitive:g.caseSensitive===!0,childrenIndex:N,route:g};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(c)&&x)return;Ae(R.relativePath.startsWith(c),`Absolute route path "${R.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(c.length)}let E=Ht([c,R.relativePath]),D=d.concat(R);g.children&&g.children.length>0&&(Ae(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),pm(g.children,f,D,E,x)),!(g.path==null&&!g.index)&&f.push({path:E,score:N0(E,g.index),routesMeta:D})};return r.forEach((g,N)=>{if(g.path===""||!g.path?.includes("?"))h(g,N);else for(let x of gm(g.path))h(g,N,!0,x)}),f}function gm(r){let f=r.split("/");if(f.length===0)return[];let[d,...c]=f,m=d.endsWith("?"),h=d.replace(/\?$/,"");if(c.length===0)return m?[h,""]:[h];let g=gm(c.join("/")),N=[];return N.push(...g.map(x=>x===""?h:[h,x].join("/"))),m&&N.push(...g),N.map(x=>r.startsWith("/")&&x===""?"/":x)}function x0(r){r.sort((f,d)=>f.score!==d.score?d.score-f.score:C0(f.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var S0=/^:[\w-]+$/,E0=3,j0=2,z0=1,w0=10,A0=-2,cm=r=>r==="*";function N0(r,f){let d=r.split("/"),c=d.length;return d.some(cm)&&(c+=A0),f&&(c+=j0),d.filter(m=>!cm(m)).reduce((m,h)=>m+(S0.test(h)?E0:h===""?z0:w0),c)}function C0(r,f){return r.length===f.length&&r.slice(0,-1).every((c,m)=>c===f[m])?r[r.length-1]-f[f.length-1]:0}function T0(r,f,d=!1){let{routesMeta:c}=r,m={},h="/",g=[];for(let N=0;N<c.length;++N){let x=c[N],v=N===c.length-1,R=h==="/"?f:f.slice(h.length)||"/",E=uu({path:x.relativePath,caseSensitive:x.caseSensitive,end:v},R),D=x.route;if(!E&&v&&d&&!c[c.length-1].route.index&&(E=uu({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},R)),!E)return null;Object.assign(m,E.params),g.push({params:m,pathname:Ht([h,E.pathname]),pathnameBase:D0(Ht([h,E.pathnameBase])),route:D}),E.pathnameBase!=="/"&&(h=Ht([h,E.pathnameBase]))}return g}function uu(r,f){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,c]=R0(r.path,r.caseSensitive,r.end),m=f.match(d);if(!m)return null;let h=m[0],g=h.replace(/(.)\/+$/,"$1"),N=m.slice(1);return{params:c.reduce((v,{paramName:R,isOptional:E},D)=>{if(R==="*"){let L=N[D]||"";g=h.slice(0,h.length-L.length).replace(/(.)\/+$/,"$1")}const G=N[D];return E&&!G?v[R]=void 0:v[R]=(G||"").replace(/%2F/g,"/"),v},{}),pathname:h,pathnameBase:g,pattern:r}}function R0(r,f=!1,d=!0){Rt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,N,x,v,R)=>{if(c.push({paramName:N,isOptional:x!=null}),x){let E=R.charAt(v+g.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),c]}function _0(r){try{return r.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Rt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),r}}function la(r,f){if(f==="/")return r;if(!r.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,c=r.charAt(d);return c&&c!=="/"?null:r.slice(d)||"/"}var M0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function B0(r,f="/"){let{pathname:d,search:c="",hash:m=""}=typeof r=="string"?$a(r):r,h;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?h=sm(d.substring(1),"/"):h=sm(d,f)):h=f,{pathname:h,search:U0(c),hash:H0(m)}}function sm(r,f){let d=f.replace(/\/+$/,"").split("/");return r.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Uo(r,f,d,c){return`Cannot include a '${r}' character in a manually specified \`to.${f}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function O0(r){return r.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function vm(r){let f=O0(r);return f.map((d,c)=>c===f.length-1?d.pathname:d.pathnameBase)}function Go(r,f,d,c=!1){let m;typeof r=="string"?m=$a(r):(m={...r},Ae(!m.pathname||!m.pathname.includes("?"),Uo("?","pathname","search",m)),Ae(!m.pathname||!m.pathname.includes("#"),Uo("#","pathname","hash",m)),Ae(!m.search||!m.search.includes("#"),Uo("#","search","hash",m)));let h=r===""||m.pathname==="",g=h?"/":m.pathname,N;if(g==null)N=d;else{let E=f.length-1;if(!c&&g.startsWith("..")){let D=g.split("/");for(;D[0]==="..";)D.shift(),E-=1;m.pathname=D.join("/")}N=E>=0?f[E]:"/"}let x=B0(m,N),v=g&&g!=="/"&&g.endsWith("/"),R=(h||g===".")&&d.endsWith("/");return!x.pathname.endsWith("/")&&(v||R)&&(x.pathname+="/"),x}var Ht=r=>r.join("/").replace(/\/\/+/g,"/"),D0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),U0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,H0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,k0=class{constructor(r,f,d,c=!1){this.status=r,this.statusText=f||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function L0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Y0(r){return r.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bm(r,f){let d=r;if(typeof d!="string"||!M0.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,m=!1;if(ym)try{let h=new URL(window.location.href),g=d.startsWith("//")?new URL(h.protocol+d):new URL(d),N=la(g.pathname,f);g.origin===h.origin&&N!=null?d=N+g.search+g.hash:m=!0}catch{Rt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:m,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var xm=["POST","PUT","PATCH","DELETE"];new Set(xm);var q0=["GET",...xm];new Set(q0);var Hl=A.createContext(null);Hl.displayName="DataRouter";var ru=A.createContext(null);ru.displayName="DataRouterState";var G0=A.createContext(!1),Sm=A.createContext({isTransitioning:!1});Sm.displayName="ViewTransition";var X0=A.createContext(new Map);X0.displayName="Fetchers";var Q0=A.createContext(null);Q0.displayName="Await";var At=A.createContext(null);At.displayName="Navigation";var Un=A.createContext(null);Un.displayName="Location";var kt=A.createContext({outlet:null,matches:[],isDataRoute:!1});kt.displayName="Route";var Xo=A.createContext(null);Xo.displayName="RouteError";var Em="REACT_ROUTER_ERROR",Z0="REDIRECT",V0="ROUTE_ERROR_RESPONSE";function K0(r){if(r.startsWith(`${Em}:${Z0}:{`))try{let f=JSON.parse(r.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function F0(r){if(r.startsWith(`${Em}:${V0}:{`))try{let f=JSON.parse(r.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new k0(f.status,f.statusText,f.data)}catch{}}function J0(r,{relative:f}={}){Ae(Hn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=A.useContext(At),{hash:m,pathname:h,search:g}=kn(r,{relative:f}),N=h;return d!=="/"&&(N=h==="/"?d:Ht([d,h])),c.createHref({pathname:N,search:g,hash:m})}function Hn(){return A.useContext(Un)!=null}function Ra(){return Ae(Hn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Un).location}var jm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zm(r){A.useContext(At).static||A.useLayoutEffect(r)}function na(){let{isDataRoute:r}=A.useContext(kt);return r?cg():$0()}function $0(){Ae(Hn(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(Hl),{basename:f,navigator:d}=A.useContext(At),{matches:c}=A.useContext(kt),{pathname:m}=Ra(),h=JSON.stringify(vm(c)),g=A.useRef(!1);return zm(()=>{g.current=!0}),A.useCallback((x,v={})=>{if(Rt(g.current,jm),!g.current)return;if(typeof x=="number"){d.go(x);return}let R=Go(x,JSON.parse(h),m,v.relative==="path");r==null&&f!=="/"&&(R.pathname=R.pathname==="/"?f:Ht([f,R.pathname])),(v.replace?d.replace:d.push)(R,v.state,v)},[f,d,h,m,r])}A.createContext(null);function W0(){let{matches:r}=A.useContext(kt),f=r[r.length-1];return f?f.params:{}}function kn(r,{relative:f}={}){let{matches:d}=A.useContext(kt),{pathname:c}=Ra(),m=JSON.stringify(vm(d));return A.useMemo(()=>Go(r,JSON.parse(m),c,f==="path"),[r,m,c,f])}function I0(r,f){return wm(r,f)}function wm(r,f,d){Ae(Hn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=A.useContext(At),{matches:m}=A.useContext(kt),h=m[m.length-1],g=h?h.params:{},N=h?h.pathname:"/",x=h?h.pathnameBase:"/",v=h&&h.route;{let U=v&&v.path||"";Nm(N,!v||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${N}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let R=Ra(),E;if(f){let U=typeof f=="string"?$a(f):f;Ae(x==="/"||U.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),E=U}else E=R;let D=E.pathname||"/",G=D;if(x!=="/"){let U=x.replace(/^\//,"").split("/");G="/"+D.replace(/^\//,"").split("/").slice(U.length).join("/")}let L=hm(r,{pathname:G});Rt(v||L!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Rt(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=lg(L&&L.map(U=>Object.assign({},U,{params:Object.assign({},g,U.params),pathname:Ht([x,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:Ht([x,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),m,d);return f&&H?A.createElement(Un.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},H):H}function P0(){let r=og(),f=L0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},f),d?A.createElement("pre",{style:m},d):null,g)}var eg=A.createElement(P0,null),Am=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,f){return f.location!==r.location||f.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:f.error,location:f.location,revalidation:r.revalidation||f.revalidation}}componentDidCatch(r,f){this.props.onError?this.props.onError(r,f):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=F0(r.digest);d&&(r=d)}let f=r!==void 0?A.createElement(kt.Provider,{value:this.props.routeContext},A.createElement(Xo.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?A.createElement(tg,{error:r},f):f}};Am.contextType=G0;var Ho=new WeakMap;function tg({children:r,error:f}){let{basename:d}=A.useContext(At);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let c=K0(f.digest);if(c){let m=Ho.get(f);if(m)throw m;let h=bm(c.location,d);if(ym&&!Ho.get(f))if(h.isExternal||c.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:c.replace}));throw Ho.set(f,g),g}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return r}function ag({routeContext:r,match:f,children:d}){let c=A.useContext(Hl);return c&&c.static&&c.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=f.route.id),A.createElement(kt.Provider,{value:r},d)}function lg(r,f=[],d){let c=d?.state;if(r==null){if(!c)return null;if(c.errors)r=c.matches;else if(f.length===0&&!c.initialized&&c.matches.length>0)r=c.matches;else return null}let m=r,h=c?.errors;if(h!=null){let R=m.findIndex(E=>E.route.id&&h?.[E.route.id]!==void 0);Ae(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),m=m.slice(0,Math.min(m.length,R+1))}let g=!1,N=-1;if(d&&c){g=c.renderFallback;for(let R=0;R<m.length;R++){let E=m[R];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(N=R),E.route.id){let{loaderData:D,errors:G}=c,L=E.route.loader&&!D.hasOwnProperty(E.route.id)&&(!G||G[E.route.id]===void 0);if(E.route.lazy||L){d.isStatic&&(g=!0),N>=0?m=m.slice(0,N+1):m=[m[0]];break}}}}let x=d?.onError,v=c&&x?(R,E)=>{x(R,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:Y0(c.matches),errorInfo:E})}:void 0;return m.reduceRight((R,E,D)=>{let G,L=!1,H=null,U=null;c&&(G=h&&E.route.id?h[E.route.id]:void 0,H=E.route.errorElement||eg,g&&(N<0&&D===0?(Nm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,U=null):N===D&&(L=!0,U=E.route.hydrateFallbackElement||null)));let F=f.concat(m.slice(0,D+1)),k=()=>{let Q;return G?Q=H:L?Q=U:E.route.Component?Q=A.createElement(E.route.Component,null):E.route.element?Q=E.route.element:Q=R,A.createElement(ag,{match:E,routeContext:{outlet:R,matches:F,isDataRoute:c!=null},children:Q})};return c&&(E.route.ErrorBoundary||E.route.errorElement||D===0)?A.createElement(Am,{location:c.location,revalidation:c.revalidation,component:H,error:G,children:k(),routeContext:{outlet:null,matches:F,isDataRoute:!0},onError:v}):k()},null)}function Qo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ng(r){let f=A.useContext(Hl);return Ae(f,Qo(r)),f}function ig(r){let f=A.useContext(ru);return Ae(f,Qo(r)),f}function ug(r){let f=A.useContext(kt);return Ae(f,Qo(r)),f}function Zo(r){let f=ug(r),d=f.matches[f.matches.length-1];return Ae(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function rg(){return Zo("useRouteId")}function og(){let r=A.useContext(Xo),f=ig("useRouteError"),d=Zo("useRouteError");return r!==void 0?r:f.errors?.[d]}function cg(){let{router:r}=ng("useNavigate"),f=Zo("useNavigate"),d=A.useRef(!1);return zm(()=>{d.current=!0}),A.useCallback(async(m,h={})=>{Rt(d.current,jm),d.current&&(typeof m=="number"?await r.navigate(m):await r.navigate(m,{fromRouteId:f,...h}))},[r,f])}var fm={};function Nm(r,f,d){!f&&!fm[r]&&(fm[r]=!0,Rt(!1,d))}A.memo(sg);function sg({routes:r,future:f,state:d,isStatic:c,onError:m}){return wm(r,void 0,{state:d,isStatic:c,onError:m})}function Dl(r){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fg({basename:r="/",children:f=null,location:d,navigationType:c="POP",navigator:m,static:h=!1,unstable_useTransitions:g}){Ae(!Hn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let N=r.replace(/^\/*/,"/"),x=A.useMemo(()=>({basename:N,navigator:m,static:h,unstable_useTransitions:g,future:{}}),[N,m,h,g]);typeof d=="string"&&(d=$a(d));let{pathname:v="/",search:R="",hash:E="",state:D=null,key:G="default",unstable_mask:L}=d,H=A.useMemo(()=>{let U=la(v,N);return U==null?null:{location:{pathname:U,search:R,hash:E,state:D,key:G,unstable_mask:L},navigationType:c}},[N,v,R,E,D,G,c,L]);return Rt(H!=null,`<Router basename="${N}"> is not able to match the URL "${v}${R}${E}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:A.createElement(At.Provider,{value:x},A.createElement(Un.Provider,{children:f,value:H}))}function dg({children:r,location:f}){return I0(Yo(r),f)}function Yo(r,f=[]){let d=[];return A.Children.forEach(r,(c,m)=>{if(!A.isValidElement(c))return;let h=[...f,m];if(c.type===A.Fragment){d.push.apply(d,Yo(c.props.children,h));return}Ae(c.type===Dl,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=Yo(c.props.children,h)),d.push(g)}),d}var nu="get",iu="application/x-www-form-urlencoded";function ou(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function mg(r){return ou(r)&&r.tagName.toLowerCase()==="button"}function hg(r){return ou(r)&&r.tagName.toLowerCase()==="form"}function pg(r){return ou(r)&&r.tagName.toLowerCase()==="input"}function gg(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function vg(r,f){return r.button===0&&(!f||f==="_self")&&!gg(r)}var lu=null;function yg(){if(lu===null)try{new FormData(document.createElement("form"),0),lu=!1}catch{lu=!0}return lu}var bg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ko(r){return r!=null&&!bg.has(r)?(Rt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):r}function xg(r,f){let d,c,m,h,g;if(hg(r)){let N=r.getAttribute("action");c=N?la(N,f):null,d=r.getAttribute("method")||nu,m=ko(r.getAttribute("enctype"))||iu,h=new FormData(r)}else if(mg(r)||pg(r)&&(r.type==="submit"||r.type==="image")){let N=r.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||N.getAttribute("action");if(c=x?la(x,f):null,d=r.getAttribute("formmethod")||N.getAttribute("method")||nu,m=ko(r.getAttribute("formenctype"))||ko(N.getAttribute("enctype"))||iu,h=new FormData(N,r),!yg()){let{name:v,type:R,value:E}=r;if(R==="image"){let D=v?`${v}.`:"";h.append(`${D}x`,"0"),h.append(`${D}y`,"0")}else v&&h.append(v,E)}}else{if(ou(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=nu,c=null,m=iu,g=r}return h&&m==="text/plain"&&(g=h,h=void 0),{action:c,method:d.toLowerCase(),encType:m,formData:h,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vo(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function Sg(r,f,d,c){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${c}`:m.pathname=`${m.pathname}.${c}`:m.pathname==="/"?m.pathname=`_root.${c}`:f&&la(m.pathname,f)==="/"?m.pathname=`${f.replace(/\/$/,"")}/_root.${c}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${c}`,m}async function Eg(r,f){if(r.id in f)return f[r.id];try{let d=await import(r.module);return f[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jg(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function zg(r,f,d){let c=await Promise.all(r.map(async m=>{let h=f.routes[m.route.id];if(h){let g=await Eg(h,d);return g.links?g.links():[]}return[]}));return Cg(c.flat(1).filter(jg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function dm(r,f,d,c,m,h){let g=(x,v)=>d[v]?x.route.id!==d[v].route.id:!0,N=(x,v)=>d[v].pathname!==x.pathname||d[v].route.path?.endsWith("*")&&d[v].params["*"]!==x.params["*"];return h==="assets"?f.filter((x,v)=>g(x,v)||N(x,v)):h==="data"?f.filter((x,v)=>{let R=c.routes[x.route.id];if(!R||!R.hasLoader)return!1;if(g(x,v)||N(x,v))return!0;if(x.route.shouldRevalidate){let E=x.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function wg(r,f,{includeHydrateFallback:d}={}){return Ag(r.map(c=>{let m=f.routes[c.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function Ag(r){return[...new Set(r)]}function Ng(r){let f={},d=Object.keys(r).sort();for(let c of d)f[c]=r[c];return f}function Cg(r,f){let d=new Set;return new Set(f),r.reduce((c,m)=>{let h=JSON.stringify(Ng(m));return d.has(h)||(d.add(h),c.push({key:h,link:m})),c},[])}function Cm(){let r=A.useContext(Hl);return Vo(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Tg(){let r=A.useContext(ru);return Vo(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ko=A.createContext(void 0);Ko.displayName="FrameworkContext";function Tm(){let r=A.useContext(Ko);return Vo(r,"You must render this element inside a <HydratedRouter> element"),r}function Rg(r,f){let d=A.useContext(Ko),[c,m]=A.useState(!1),[h,g]=A.useState(!1),{onFocus:N,onBlur:x,onMouseEnter:v,onMouseLeave:R,onTouchStart:E}=f,D=A.useRef(null);A.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let H=F=>{F.forEach(k=>{g(k.isIntersecting)})},U=new IntersectionObserver(H,{threshold:.5});return D.current&&U.observe(D.current),()=>{U.disconnect()}}},[r]),A.useEffect(()=>{if(c){let H=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(H)}}},[c]);let G=()=>{m(!0)},L=()=>{m(!1),g(!1)};return d?r!=="intent"?[h,D,{}]:[h,D,{onFocus:On(N,G),onBlur:On(x,L),onMouseEnter:On(v,G),onMouseLeave:On(R,L),onTouchStart:On(E,G)}]:[!1,D,{}]}function On(r,f){return d=>{r&&r(d),d.defaultPrevented||f(d)}}function _g({page:r,...f}){let{router:d}=Cm(),c=A.useMemo(()=>hm(d.routes,r,d.basename),[d.routes,r,d.basename]);return c?A.createElement(Bg,{page:r,matches:c,...f}):null}function Mg(r){let{manifest:f,routeModules:d}=Tm(),[c,m]=A.useState([]);return A.useEffect(()=>{let h=!1;return zg(r,f,d).then(g=>{h||m(g)}),()=>{h=!0}},[r,f,d]),c}function Bg({page:r,matches:f,...d}){let c=Ra(),{future:m,manifest:h,routeModules:g}=Tm(),{basename:N}=Cm(),{loaderData:x,matches:v}=Tg(),R=A.useMemo(()=>dm(r,f,v,h,c,"data"),[r,f,v,h,c]),E=A.useMemo(()=>dm(r,f,v,h,c,"assets"),[r,f,v,h,c]),D=A.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let H=new Set,U=!1;if(f.forEach(k=>{let Q=h.routes[k.route.id];!Q||!Q.hasLoader||(!R.some(ae=>ae.route.id===k.route.id)&&k.route.id in x&&g[k.route.id]?.shouldRevalidate||Q.hasClientLoader?U=!0:H.add(k.route.id))}),H.size===0)return[];let F=Sg(r,N,m.unstable_trailingSlashAwareDataRequests,"data");return U&&H.size>0&&F.searchParams.set("_routes",f.filter(k=>H.has(k.route.id)).map(k=>k.route.id).join(",")),[F.pathname+F.search]},[N,m.unstable_trailingSlashAwareDataRequests,x,c,h,R,f,r,g]),G=A.useMemo(()=>wg(E,h),[E,h]),L=Mg(E);return A.createElement(A.Fragment,null,D.map(H=>A.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...d})),G.map(H=>A.createElement("link",{key:H,rel:"modulepreload",href:H,...d})),L.map(({key:H,link:U})=>A.createElement("link",{key:H,nonce:d.nonce,...U,crossOrigin:U.crossOrigin??d.crossOrigin})))}function Og(...r){return f=>{r.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var Dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dg&&(window.__reactRouterVersion="7.13.1")}catch{}function Ug({basename:r,children:f,unstable_useTransitions:d,window:c}){let m=A.useRef();m.current==null&&(m.current=p0({window:c,v5Compat:!0}));let h=m.current,[g,N]=A.useState({action:h.action,location:h.location}),x=A.useCallback(v=>{d===!1?N(v):A.startTransition(()=>N(v))},[d]);return A.useLayoutEffect(()=>h.listen(x),[h,x]),A.createElement(fg,{basename:r,children:f,location:g.location,navigationType:g.action,navigator:h,unstable_useTransitions:d})}var Rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ul=A.forwardRef(function({onClick:f,discover:d="render",prefetch:c="none",relative:m,reloadDocument:h,replace:g,unstable_mask:N,state:x,target:v,to:R,preventScrollReset:E,viewTransition:D,unstable_defaultShouldRevalidate:G,...L},H){let{basename:U,navigator:F,unstable_useTransitions:k}=A.useContext(At),Q=typeof R=="string"&&Rm.test(R),ae=bm(R,U);R=ae.to;let me=J0(R,{relative:m}),we=Ra(),W=null;if(N){let Be=Go(N,[],we.unstable_mask?we.unstable_mask.pathname:"/",!0);U!=="/"&&(Be.pathname=Be.pathname==="/"?U:Ht([U,Be.pathname])),W=F.createHref(Be)}let[Te,Ve,_t]=Rg(c,L),ht=Yg(R,{replace:g,unstable_mask:N,state:x,target:v,preventScrollReset:E,relative:m,viewTransition:D,unstable_defaultShouldRevalidate:G,unstable_useTransitions:k});function Ke(Be){f&&f(Be),Be.defaultPrevented||ht(Be)}let Mt=!(ae.isExternal||h),pt=A.createElement("a",{...L,..._t,href:(Mt?W:void 0)||ae.absoluteURL||me,onClick:Mt?Ke:f,ref:Og(H,Ve),target:v,"data-discover":!Q&&d==="render"?"true":void 0});return Te&&!Q?A.createElement(A.Fragment,null,pt,A.createElement(_g,{page:me})):pt});Ul.displayName="Link";var Hg=A.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:c="",end:m=!1,style:h,to:g,viewTransition:N,children:x,...v},R){let E=kn(g,{relative:v.relative}),D=Ra(),G=A.useContext(ru),{navigator:L,basename:H}=A.useContext(At),U=G!=null&&Zg(E)&&N===!0,F=L.encodeLocation?L.encodeLocation(E).pathname:E.pathname,k=D.pathname,Q=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;d||(k=k.toLowerCase(),Q=Q?Q.toLowerCase():null,F=F.toLowerCase()),Q&&H&&(Q=la(Q,H)||Q);const ae=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let me=k===F||!m&&k.startsWith(F)&&k.charAt(ae)==="/",we=Q!=null&&(Q===F||!m&&Q.startsWith(F)&&Q.charAt(F.length)==="/"),W={isActive:me,isPending:we,isTransitioning:U},Te=me?f:void 0,Ve;typeof c=="function"?Ve=c(W):Ve=[c,me?"active":null,we?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let _t=typeof h=="function"?h(W):h;return A.createElement(Ul,{...v,"aria-current":Te,className:Ve,ref:R,style:_t,to:g,viewTransition:N},typeof x=="function"?x(W):x)});Hg.displayName="NavLink";var kg=A.forwardRef(({discover:r="render",fetcherKey:f,navigate:d,reloadDocument:c,replace:m,state:h,method:g=nu,action:N,onSubmit:x,relative:v,preventScrollReset:R,viewTransition:E,unstable_defaultShouldRevalidate:D,...G},L)=>{let{unstable_useTransitions:H}=A.useContext(At),U=Xg(),F=Qg(N,{relative:v}),k=g.toLowerCase()==="get"?"get":"post",Q=typeof N=="string"&&Rm.test(N),ae=me=>{if(x&&x(me),me.defaultPrevented)return;me.preventDefault();let we=me.nativeEvent.submitter,W=we?.getAttribute("formmethod")||g,Te=()=>U(we||me.currentTarget,{fetcherKey:f,method:W,navigate:d,replace:m,state:h,relative:v,preventScrollReset:R,viewTransition:E,unstable_defaultShouldRevalidate:D});H&&d!==!1?A.startTransition(()=>Te()):Te()};return A.createElement("form",{ref:L,method:k,action:F,onSubmit:c?x:ae,...G,"data-discover":!Q&&r==="render"?"true":void 0})});kg.displayName="Form";function Lg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _m(r){let f=A.useContext(Hl);return Ae(f,Lg(r)),f}function Yg(r,{target:f,replace:d,unstable_mask:c,state:m,preventScrollReset:h,relative:g,viewTransition:N,unstable_defaultShouldRevalidate:x,unstable_useTransitions:v}={}){let R=na(),E=Ra(),D=kn(r,{relative:g});return A.useCallback(G=>{if(vg(G,f)){G.preventDefault();let L=d!==void 0?d:Dn(E)===Dn(D),H=()=>R(r,{replace:L,unstable_mask:c,state:m,preventScrollReset:h,relative:g,viewTransition:N,unstable_defaultShouldRevalidate:x});v?A.startTransition(()=>H()):H()}},[E,R,D,d,c,m,f,r,h,g,N,x,v])}var qg=0,Gg=()=>`__${String(++qg)}__`;function Xg(){let{router:r}=_m("useSubmit"),{basename:f}=A.useContext(At),d=rg(),c=r.fetch,m=r.navigate;return A.useCallback(async(h,g={})=>{let{action:N,method:x,encType:v,formData:R,body:E}=xg(h,f);if(g.navigate===!1){let D=g.fetcherKey||Gg();await c(D,d,g.action||N,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:R,body:E,formMethod:g.method||x,formEncType:g.encType||v,flushSync:g.flushSync})}else await m(g.action||N,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:R,body:E,formMethod:g.method||x,formEncType:g.encType||v,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,m,f,d])}function Qg(r,{relative:f}={}){let{basename:d}=A.useContext(At),c=A.useContext(kt);Ae(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),h={...kn(r||".",{relative:f})},g=Ra();if(r==null){h.search=g.search;let N=new URLSearchParams(h.search),x=N.getAll("index");if(x.some(R=>R==="")){N.delete("index"),x.filter(E=>E).forEach(E=>N.append("index",E));let R=N.toString();h.search=R?`?${R}`:""}}return(!r||r===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:Ht([d,h.pathname])),Dn(h)}function Zg(r,{relative:f}={}){let d=A.useContext(Sm);Ae(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=_m("useViewTransitionState"),m=kn(r,{relative:f});if(!d.isTransitioning)return!1;let h=la(d.currentLocation.pathname,c)||d.currentLocation.pathname,g=la(d.nextLocation.pathname,c)||d.nextLocation.pathname;return uu(m.pathname,g)!=null||uu(m.pathname,h)!=null}const Vg="/nowfix/assets/nowfix-logo1-CSQtkBIU.png",Kg=`
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
`;function cu(){const r=na();return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:Kg}),o.jsxs("div",{className:"brand-logo",onClick:()=>r("/"),children:[o.jsx("img",{src:Vg,alt:"NowFix",className:"brand-logo-img"}),o.jsxs("span",{className:"brand-logo-text",children:[o.jsx("span",{className:"brand-logo-now",children:"NOW"}),o.jsx("span",{className:"brand-logo-fix",children:"FIX"})]})]})]})}const Mm=A.createContext();function su(){return A.useContext(Mm)}function Fg({children:r}){const[f,d]=A.useState(null);A.useEffect(()=>{const h=localStorage.getItem("nowfix_user");h&&d(JSON.parse(h))},[]);const c=h=>{d(h),localStorage.setItem("nowfix_user",JSON.stringify(h))},m=()=>{d(null),localStorage.removeItem("nowfix_user")};return o.jsx(Mm.Provider,{value:{user:f,login:c,logout:m},children:r})}const Jg=`
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
`,mm=[{label:"Services",href:"#services"},{label:"How It Works",href:"#how-it-works"},{label:"Reviews",href:"#reviews"}],$g=["Jaipur","Jodhpur","Sri Ganganagar","Hanumangarh"];function Bm(){const[r,f]=A.useState(!1),[d,c]=A.useState(!1),[m,h]=A.useState(!1),[g,N]=A.useState(!1),[x,v]=A.useState(!1),[R,E]=A.useState(""),D=na(),{user:G,logout:L}=su(),H=A.useRef(null);A.useEffect(()=>{function k(Q){H.current&&!H.current.contains(Q.target)&&v(!1)}return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[]),A.useEffect(()=>{const k=()=>f(window.scrollY>10);return window.addEventListener("scroll",k),()=>window.removeEventListener("scroll",k)},[]);const U=()=>{h(!m),d&&c(!1)},F=()=>{c(!d),m&&h(!1)};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:Jg}),o.jsx("div",{className:`modal-overlay${g?" open":""}`,onClick:()=>N(!1),children:o.jsxs("div",{className:"modal-content",onClick:k=>k.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:"Select your city"}),o.jsx("button",{className:"modal-close",onClick:()=>N(!1),children:"×"})]}),o.jsxs("div",{className:"city-group",children:[o.jsx("div",{className:"city-group-title",children:"Available Now"}),o.jsxs("div",{className:"city-item active",onClick:()=>N(!1),children:[o.jsx("span",{className:"city-name",children:"Bikaner, Rajasthan"}),o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--primary)"},children:o.jsx("polyline",{points:"20 6 9 17 4 12"})})]})]}),o.jsxs("div",{className:"city-group",children:[o.jsx("div",{className:"city-group-title",children:"Coming Soon"}),$g.map(k=>o.jsxs("div",{className:"city-item disabled",children:[o.jsxs("span",{className:"city-name",children:[k,", Rajasthan"]}),o.jsx("span",{className:"city-badge",children:"Soon"})]},k))]})]})}),o.jsx("nav",{className:`nav${r?" scrolled":""}`,children:o.jsxs("div",{className:"nav-inner",children:[o.jsx(cu,{}),o.jsxs("div",{className:"nav-search-container",children:[o.jsxs("div",{className:"nav-location",onClick:()=>N(!0),children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan",o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{width:"14px",height:"14px",color:"#9CA3AF",marginLeft:"4px"},children:o.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),o.jsxs("div",{className:"nav-search-box",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),o.jsx("input",{type:"text",placeholder:"Search for AC repair, plumbing...",value:R,onChange:k=>E(k.target.value)})]})]}),o.jsx("ul",{className:"nav-links",children:mm.map(k=>o.jsx("li",{children:o.jsx("a",{href:k.href,children:k.label})},k.label))}),o.jsx("div",{className:"nav-right",ref:H,children:G?o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"nav-avatar",onClick:()=>v(!x),children:G.photo?o.jsx("img",{src:G.photo,alt:"Profile"}):G.name.charAt(0)}),x&&o.jsxs("div",{className:"profile-dropdown",children:[o.jsxs("div",{className:"pd-header",children:[o.jsx("strong",{children:G.name}),o.jsxs("span",{children:["+91 ",G.phone]})]}),o.jsx("button",{onClick:()=>{v(!1),D("/profile")},children:"My Profile"}),o.jsx("button",{onClick:()=>{v(!1)},children:"My Bookings"}),o.jsx("button",{onClick:()=>{L(),v(!1)},children:"Logout"})]})]}):o.jsx("button",{className:"nav-login-btn",onClick:()=>D("/login"),children:"Login →"})}),o.jsxs("div",{className:"mobile-actions",children:[o.jsx("button",{className:"mobile-icon-btn",onClick:U,children:o.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:m?o.jsxs(o.Fragment,{children:[o.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):o.jsxs(o.Fragment,{children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})}),G&&o.jsx("button",{className:"nav-avatar",style:{width:"32px",height:"32px",fontSize:"0.9rem"},onClick:F,children:G.photo?o.jsx("img",{src:G.photo,alt:"Profile"}):G.name.charAt(0)}),o.jsxs("button",{className:`nav-hamburger${d?" open":""}`,onClick:F,children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]})]})}),o.jsx("div",{className:`mobile-search-dropdown${m?" open":""}`,children:o.jsxs("div",{className:"nav-search-container",style:{display:"flex",width:"100%",maxWidth:"100%",flexDirection:"column",border:"none",boxShadow:"none"},children:[o.jsxs("div",{className:"nav-location",style:{borderRight:"none",borderBottom:"1px solid var(--border)",width:"100%",borderRadius:"8px 8px 0 0",border:"1px solid var(--border)"},onClick:()=>{h(!1),N(!0)},children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Bikaner, Rajasthan"]}),o.jsxs("div",{className:"nav-search-box",style:{width:"100%",border:"1px solid var(--border)",borderTop:"none",borderRadius:"0 0 8px 8px",background:"var(--bg-2)"},children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),o.jsx("input",{type:"text",placeholder:"Search for services...",value:R,onChange:k=>E(k.target.value),autoFocus:m})]})]})}),o.jsxs("div",{className:`nav-mobile${d?" open":""}`,children:[mm.map(k=>o.jsx("a",{href:k.href,onClick:()=>c(!1),children:k.label},k.label)),o.jsx("div",{className:"nav-mobile-buttons",children:G?o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"nav-mobile-login",style:{background:"var(--bg-2)",color:"var(--text)",border:"1px solid var(--border)"},onClick:()=>{c(!1),D("/profile")},children:"My Profile"}),o.jsx("button",{className:"nav-mobile-login",style:{background:"var(--bg-2)",color:"var(--text)",border:"1px solid var(--border)",marginTop:"8px"},onClick:()=>{c(!1)},children:"My Bookings"}),o.jsx("button",{className:"nav-mobile-login",style:{marginTop:"8px"},onClick:()=>{L(),c(!1)},children:"Logout"})]}):o.jsx("button",{className:"nav-mobile-login",onClick:()=>{D("/login"),c(!1)},children:"Login →"})})]})]})}const Wg="/nowfix/assets/hero-bg-BUzEpsbl.webp",Ig=`
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
    background-image: url(${Wg});
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
`,Pg=[{value:"500+",label:"Happy Customers"},{value:"100+",label:"Verified Workers"},{value:"4.8★",label:"Average Rating"},{value:"Same Day",label:"Service Available"}];function ev(){const r=na(),{user:f}=su(),d=()=>{f?document.getElementById("services")?.scrollIntoView({behavior:"smooth"}):r("/login")};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:Ig}),o.jsx("section",{className:"hero",children:o.jsxs("div",{className:"hero-main",children:[o.jsx("div",{className:"hero-bg"}),o.jsxs("div",{className:"hero-inner",children:[o.jsxs("div",{className:"hero-badge",children:[o.jsx("div",{className:"hero-badge-dot"}),o.jsx("span",{children:"Now live in Bikaner, Rajasthan"})]}),o.jsxs("h1",{className:"hero-headline",children:["Fix Any Problem"," ",o.jsx("span",{className:"hero-headline-orange",children:"Instantly"})," ","with"," ",o.jsx("span",{className:"hero-headline-blue",children:"NowFix"})]}),o.jsx("p",{className:"hero-sub",children:"Book trusted professionals for repairs, cleaning, electrical and more — fast, affordable, right at your doorstep."}),o.jsx("div",{className:"hero-cta",children:o.jsx("button",{className:"hero-btn-primary",onClick:d,children:"Book a Service →"})}),o.jsx("div",{className:"hero-stats",children:Pg.map(c=>o.jsxs("div",{className:"hero-stat",children:[o.jsx("div",{className:"hero-stat-value",children:c.value}),o.jsx("div",{className:"hero-stat-label",children:c.label})]},c.value))})]})]})})]})}const tv="/nowfix/assets/plumbing-DobpV-5v.webp",av="/nowfix/assets/electrician-DgHnnlp5.webp",lv="/nowfix/assets/ac-repair-Dol6uZ-p.webp",nv="/nowfix/assets/cleaning-DDh_5nqU.webp",iv=[{id:"plumbing",name:"Plumbing",tagline:"Leaks fixed, pipes secured",description:"Tap repairs, pipe leaks, drain cleaning and full plumbing checks by verified professionals.",startingPrice:199,color:"#eff6ff",iconColor:"#2563eb",image:tv},{id:"electrician",name:"Electrician",tagline:"Safe, certified electrical work",description:"Switch repairs, fan installation, wiring checks and MCB fixes by certified electricians.",startingPrice:149,color:"#fefce8",iconColor:"#ca8a04",image:av},{id:"ac-repair",name:"AC Repair",tagline:"Stay cool, always",description:"AC servicing, gas refilling, installation and cooling fixes by expert technicians.",startingPrice:399,color:"#f0fdf4",iconColor:"#16a34a",image:lv},{id:"cleaning",name:"Home Cleaning",tagline:"Spotless home, happy life",description:"Deep cleaning, kitchen sanitization, bathroom scrubbing and full home cleaning services.",startingPrice:299,color:"#fdf4ff",iconColor:"#a21caf",image:nv}],uv=`
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
`;function rv(){const r=na();return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:uv}),o.jsx("section",{className:"svc-section",id:"services",children:o.jsxs("div",{className:"svc-container",children:[o.jsx("div",{className:"svc-header",children:o.jsxs("div",{className:"svc-title-wrap",children:[o.jsx("h2",{children:"Top Services"}),o.jsx("p",{children:"Expert local professionals in Bikaner, right at your doorstep."})]})}),o.jsx("div",{className:"svc-grid",children:iv.map(f=>o.jsxs("div",{className:"svc-card",onClick:()=>r(`/service/${f.id}`),children:[o.jsx("img",{src:f.image,alt:f.name,className:"svc-image",loading:"lazy"}),o.jsxs("div",{className:"svc-overlay",children:[o.jsx("span",{className:"svc-tagline",children:f.tagline}),o.jsx("h3",{className:"svc-name",children:f.name}),o.jsxs("div",{className:"svc-price-badge",children:["Starts at ",o.jsxs("span",{children:["₹",f.startingPrice]})]})]})]},f.id))})]})})]})}const ov=`
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
`;function cv(){const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:ov}),o.jsxs("footer",{className:"footer",children:[o.jsxs("div",{className:"ftr-grid",children:[o.jsxs("div",{className:"ftr-brand",children:[o.jsx("div",{className:"ftr-brand-logo-wrap",onClick:r,style:{cursor:"pointer"},children:o.jsx(cu,{})}),o.jsxs("p",{children:["Expert local professionals in Bikaner, Rajasthan.",o.jsx("br",{}),"Fix any problem instantly."]})]}),o.jsxs("div",{className:"ftr-links",children:[o.jsx("h4",{children:"Quick Links"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(Ul,{to:"/",onClick:r,children:"Home"})}),o.jsx("li",{children:o.jsx(Ul,{to:"/#services",children:"All Services"})}),o.jsx("li",{children:o.jsx(Ul,{to:"/login",children:"Customer Login"})})]})]}),o.jsxs("div",{className:"ftr-partner",children:[o.jsx("h4",{children:"Are you a Pro?"}),o.jsx("p",{style:{color:"#9CA3AF",fontSize:"0.85rem",marginTop:"8px"},children:"Earn money offering your skills in Bikaner."}),o.jsx(Ul,{to:"/join",onClick:r,className:"ftr-partner-btn",children:"Join as Partner"})]})]}),o.jsxs("div",{className:"ftr-bottom",children:["© ",new Date().getFullYear()," NowFix Bikaner. All rights reserved."]})]})]})}function sv(){return o.jsxs("div",{className:"home-page",style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[o.jsx(Bm,{}),o.jsxs("main",{style:{flex:1},children:[o.jsx(ev,{}),o.jsx(rv,{})]}),o.jsx(cv,{})]})}const fv=`
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
`;function dv({fullscreen:r=!0}){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:fv}),o.jsx("div",{className:r?"loader-overlay":"",children:o.jsxs("div",{className:"loader-container",children:[o.jsx("svg",{className:"loader-spinner-bg",viewBox:"0 0 72 72",children:o.jsx("circle",{cx:"36",cy:"36",r:"34"})}),o.jsx("svg",{className:"loader-spinner",viewBox:"0 0 72 72",children:o.jsx("circle",{cx:"36",cy:"36",r:"34"})}),o.jsx("div",{className:"loader-icon loader-wrench",children:o.jsx("svg",{viewBox:"0 0 512 512",children:o.jsx("path",{d:"M459.957,203.4c42.547-38.609,49.656-82.484,40.141-119.469c-0.281-2.938-0.984-5.406-3.547-7.266l-8.563-7.016c-1.484-1.375-3.484-2.063-5.484-1.859c-2.016,0.188-3.844,1.234-5.031,2.859l-49.25,64.031c-1.375,1.891-3.594,2.969-5.922,2.891l-17.875,1.313c-1.531-0.047-3.016-0.594-4.219-1.563l-34.531-29.266c-1.406-1.141-2.328-2.766-2.563-4.563l-2.141-16.188c-0.25-1.781,0.203-3.594,1.266-5.047l46.109-62.641c2.094-2.891,1.688-6.875-0.906-9.297l-11.188-8.734c-2.188-2.047-4.672-1.75-8.063-1.109c-31.844,6.297-86.219,37.125-100.016,79.75c-12.156,37.516-7.922,63.969-7.922,63.969c0,21.141-6.953,41.516-15.5,50.078L24.504,424.916c-0.469,0.438-0.922,0.859-1.375,1.313c-19.844,19.844-19.813,52.063-0.641,71.219c19.172,19.172,51.859,19.688,71.703-0.172c0.922-0.922,1.813-1.875,2.641-2.859l231.672-250.438C357.004,218.619,413.426,245.65,459.957,203.4z"})})}),o.jsx("div",{className:"loader-icon loader-hammer",children:o.jsx("svg",{viewBox:"0 0 64 64",style:{transform:"scale(-1.25, 1.25)",transformOrigin:"center"},children:o.jsx("path",{d:"M30.651,23.538l25.24,24.346l-6.577,6.577l-23.969,-25.617l5.306,-5.306Zm-7.208,3.403l5.306,-5.305c0,0 -2.695,-2.056 -2.447,-3.34c0.248,-1.285 0.809,-3.1 4.711,-4.711c3.903,-1.611 7.543,-1.757 7.543,-1.757l0.131,-1.758c0,0 -8.969,-1.356 -13.707,0.327c-4.738,1.684 -10.097,8.02 -10.097,8.02c0,0 0.935,3.064 -0.667,4.666c-1.601,1.601 -3.754,-0.245 -3.754,-0.245l-2.456,3.118l6.197,6.197l3.112,-2.461c0,0 -1.472,-2.207 -0.017,-3.528c3.132,-2.842 6.145,0.777 6.145,0.777Z"})})})]})})]})}const Om=A.createContext({show:()=>{},hide:()=>{},isLoading:!1});function Dm(){return A.useContext(Om)}function mv({children:r}){const[f,d]=A.useState(!1),c=A.useRef(0),m=A.useCallback(()=>{c.current+=1,d(!0)},[]),h=A.useCallback(()=>{c.current=Math.max(0,c.current-1),c.current===0&&d(!1)},[]);return A.useEffect(()=>{if(!(typeof window>"u")&&!window.__loaderPatched){if(window.__loaderPatched=!0,window.fetch&&(window.__origFetchForLoader=window.fetch,window.fetch=async function(...g){c.current+=1,d(!0);try{return await window.__origFetchForLoader.apply(this,g)}finally{c.current-=1,c.current===0&&d(!1)}}),window.XMLHttpRequest&&window.XMLHttpRequest.prototype){const g=window.XMLHttpRequest.prototype;g.__origSendForLoader||(g.__origSendForLoader=g.send,g.send=function(...N){return c.current+=1,d(!0),this.addEventListener("loadend",()=>{c.current-=1,c.current===0&&d(!1)}),g.__origSendForLoader.apply(this,N)})}return()=>{if(window.__origFetchForLoader&&(window.fetch=window.__origFetchForLoader,delete window.__origFetchForLoader),window.XMLHttpRequest&&window.XMLHttpRequest.prototype){const g=window.XMLHttpRequest.prototype;g.__origSendForLoader&&(g.send=g.__origSendForLoader,delete g.__origSendForLoader)}delete window.__loaderPatched}}},[]),o.jsxs(Om.Provider,{value:{show:m,hide:h,isLoading:f},children:[r,f&&o.jsx(dv,{fullscreen:!0})]})}const hv=`
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
`;function pv(){const r=na(),{login:f}=su(),{show:d,hide:c}=Dm(),[m,h]=A.useState(1),[g,N]=A.useState(""),[x,v]=A.useState(["","","",""]);function R(){g.length===10&&h(2)}function E(L,H){if(!/^\d*$/.test(L))return;const U=[...x];U[H]=L,v(U),L&&H<3&&document.getElementById(`otp-${H+1}`).focus()}function D(L,H){L.key==="Backspace"&&!x[H]&&H>0&&document.getElementById(`otp-${H-1}`).focus()}function G(){d(),setTimeout(()=>{f({name:"Aditya Demo",phone:g}),c(),r("/")},2e3)}return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:hv}),o.jsx("div",{className:"login-page",children:o.jsxs("div",{className:"login-card",children:[o.jsx("div",{className:"login-header",children:o.jsx(cu,{})}),m===1&&o.jsxs(o.Fragment,{children:[o.jsx("h1",{className:"login-title",children:"Welcome Back"}),o.jsx("p",{className:"login-sub",children:"Enter your mobile number to log in or sign up."}),o.jsx("label",{className:"login-label",children:"Mobile Number"}),o.jsxs("div",{className:"login-phone-wrap",children:[o.jsx("div",{className:"login-phone-prefix",children:o.jsx("span",{className:"flag-emoji",children:"🇮🇳"})}),o.jsx("input",{className:"login-phone-input",type:"tel",maxLength:10,placeholder:"98765 43210",value:g,onChange:L=>N(L.target.value.replace(/\D/g,"")),onKeyDown:L=>L.key==="Enter"&&R(),autoFocus:!0})]}),o.jsx("button",{className:"login-btn",onClick:R,disabled:g.length!==10,children:"Send OTP →"}),o.jsxs("p",{className:"login-terms",children:["By continuing, you agree to our"," ",o.jsx("span",{children:"Terms of Service"})," and"," ",o.jsx("span",{children:"Privacy Policy"})]})]}),m===2&&o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"login-back",onClick:()=>h(1),children:"← Change Number"}),o.jsx("h1",{className:"login-title",children:"Enter OTP"}),o.jsx("p",{className:"login-sub",children:"We sent a 4-digit code to"}),o.jsx("div",{className:"otp-phone-display",children:o.jsxs("span",{children:[o.jsx("span",{className:"flag-emoji",children:"🇮🇳"})," ",g]})}),o.jsx("div",{className:"otp-wrap",children:x.map((L,H)=>o.jsx("input",{id:`otp-${H}`,className:`otp-input${L?" filled":""}`,type:"tel",maxLength:1,value:L,onChange:U=>E(U.target.value,H),onKeyDown:U=>D(U,H),autoFocus:H===0},H))}),o.jsxs("p",{className:"otp-resend",children:["Didn't receive the code?"," ",o.jsx("span",{onClick:()=>v(["","","",""]),children:"Resend OTP"})]}),o.jsx("button",{className:"login-btn",onClick:G,disabled:x.some(L=>L===""),children:"Verify & Continue →"})]})]})})]})}const gv=`
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
`,vv=["Plumbing","Electrician","AC Repair","Home Cleaning","Carpentry","Appliance Repair","Painting","Pest Control"];function yv(){const r=na(),[f,d]=A.useState(null),[c,m]=A.useState(!1),[h,g]=A.useState({name:"",phone:"",category:"",experience:"",city:"Bikaner",aadhar:""});function N(E){const D=E.target.files[0];D&&(d(URL.createObjectURL(D)),console.log("Photo selected for upload:",D.name))}function x(E){const D=E.target.files[0];D&&(m(!0),console.log("Aadhar selected for upload:",D.name))}function v(E,D){g(G=>({...G,[E]:D}))}function R(){console.log("Submitting worker application data:",h),alert("Application submitted successfully! We will contact you soon."),r("/")}return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:gv}),o.jsx("div",{className:"join-page",children:o.jsxs("div",{className:"join-card",children:[o.jsx("div",{className:"join-header",children:o.jsx(cu,{})}),o.jsx("h1",{className:"join-title",children:"Join as a Worker"}),o.jsx("p",{className:"join-sub",children:"Fill in your details to start receiving jobs in Bikaner"}),o.jsxs("div",{className:"join-photo-wrap",children:[o.jsx("div",{className:"join-photo-circle",onClick:()=>document.getElementById("photo-input").click(),children:f?o.jsx("img",{src:f,alt:"Profile"}):o.jsxs(o.Fragment,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),o.jsx("span",{children:"Add Photo"})]})}),o.jsx("span",{className:"join-photo-label",onClick:()=>document.getElementById("photo-input").click(),children:f?"Change Photo":"Upload Profile Photo"}),o.jsx("input",{id:"photo-input",type:"file",accept:"image/*",style:{display:"none"},onChange:N})]}),o.jsx("p",{className:"join-section-label",children:"Personal Information"}),o.jsxs("div",{className:"join-row",children:[o.jsxs("div",{className:"join-field no-margin",children:[o.jsx("label",{children:"Full Name"}),o.jsx("input",{className:"join-input",type:"text",placeholder:"Ramesh Kumar",value:h.name,onChange:E=>v("name",E.target.value)})]}),o.jsxs("div",{className:"join-field no-margin",children:[o.jsx("label",{children:"Phone Number"}),o.jsxs("div",{className:"join-phone-wrap",children:[o.jsx("div",{className:"join-phone-prefix",children:"🇮🇳 +91"}),o.jsx("input",{className:"join-phone-input",type:"tel",placeholder:"98765 43210",maxLength:10,value:h.phone,onChange:E=>v("phone",E.target.value.replace(/\D/g,""))})]})]})]}),o.jsx("div",{className:"join-divider"}),o.jsx("p",{className:"join-section-label",children:"Work Information"}),o.jsxs("div",{className:"join-row",children:[o.jsxs("div",{className:"join-field no-margin",children:[o.jsx("label",{children:"Service Category"}),o.jsxs("select",{className:"join-select",value:h.category,onChange:E=>v("category",E.target.value),children:[o.jsx("option",{value:"",children:"Select category"}),vv.map(E=>o.jsx("option",{value:E,children:E},E))]})]}),o.jsxs("div",{className:"join-field no-margin",children:[o.jsx("label",{children:"Experience"}),o.jsxs("select",{className:"join-select",value:h.experience,onChange:E=>v("experience",E.target.value),children:[o.jsx("option",{value:"",children:"Select years"}),o.jsx("option",{value:"0-1",children:"Less than 1 year"}),o.jsx("option",{value:"1-3",children:"1 - 3 years"}),o.jsx("option",{value:"3-5",children:"3 - 5 years"}),o.jsx("option",{value:"5+",children:"5+ years"})]})]})]}),o.jsx("div",{className:"join-divider"}),o.jsx("p",{className:"join-section-label",children:"Identity Verification"}),o.jsxs("div",{className:"join-field",children:[o.jsx("label",{children:"Aadhar Card Number"}),o.jsx("input",{className:"join-input",type:"tel",placeholder:"1234 5678 9012",maxLength:14,value:h.aadhar,onChange:E=>v("aadhar",E.target.value)})]}),o.jsxs("div",{className:`join-upload-box${c?" uploaded":""}`,onClick:()=>document.getElementById("aadhar-input").click(),children:[c?o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),o.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.jsx("polyline",{points:"17 8 12 3 7 8"}),o.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),o.jsx("span",{className:"join-upload-title",children:c?"Aadhar Card Uploaded ✓":"Upload Aadhar Card"}),o.jsx("span",{className:"join-upload-sub",children:c?"Tap to change file":"JPG, PNG or PDF — max 5MB"}),o.jsx("input",{id:"aadhar-input",type:"file",accept:"image/*,.pdf",style:{display:"none"},onChange:x})]}),o.jsx("button",{className:"join-submit",onClick:R,children:"Submit Application →"})]})})]})}const bv=`
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
`,xv={plumbing:{color:"#eff6ff",iconColor:"#2563eb",desc:"Fast and reliable plumbing solutions",packages:[{id:1,name:"Tap / Faucet Repair",desc:"Fix leaky taps, replace washers, tighten fittings",price:199,duration:"30-45 mins",popular:!0},{id:2,name:"Pipe Leak Fix",desc:"Detect and seal pipe leaks, joint repairs",price:349,duration:"45-60 mins",popular:!1},{id:3,name:"Drain Cleaning",desc:"Unclog blocked drains, kitchen and bathroom",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Plumbing Check",desc:"Complete inspection of all plumbing points",price:499,duration:"60-90 mins",popular:!1}]},electrician:{color:"#fefce8",iconColor:"#ca8a04",desc:"Certified electrical work at your home",packages:[{id:1,name:"Switch / Socket Repair",desc:"Fix or replace faulty switches and sockets",price:149,duration:"20-30 mins",popular:!0},{id:2,name:"Fan Installation",desc:"Install ceiling or wall fan with wiring",price:249,duration:"30-45 mins",popular:!1},{id:3,name:"MCB / Fuse Repair",desc:"Fix tripping MCB, replace fuse box",price:299,duration:"30-45 mins",popular:!1},{id:4,name:"Full Wiring Check",desc:"Safety inspection of all electrical wiring",price:599,duration:"60-90 mins",popular:!1}]},"ac-repair":{color:"#f0fdf4",iconColor:"#16a34a",desc:"Expert AC service and maintenance",packages:[{id:1,name:"AC Service & Clean",desc:"Deep clean filters, coils and full service",price:499,duration:"60-90 mins",popular:!0},{id:2,name:"Gas Refilling",desc:"Recharge refrigerant gas to optimal level",price:1299,duration:"45-60 mins",popular:!1},{id:3,name:"AC Installation",desc:"Install new split or window AC unit",price:999,duration:"2-3 hours",popular:!1},{id:4,name:"AC Not Cooling Fix",desc:"Diagnose and fix cooling issues",price:399,duration:"45-60 mins",popular:!1}]},cleaning:{color:"#fdf4ff",iconColor:"#a21caf",desc:"Professional home cleaning services",packages:[{id:1,name:"Basic Home Clean",desc:"Sweep, mop, dust all rooms",price:399,duration:"2-3 hours",popular:!0},{id:2,name:"Deep Home Clean",desc:"Full sanitization including kitchen and bathrooms",price:799,duration:"4-5 hours",popular:!1},{id:3,name:"Kitchen Deep Clean",desc:"Degrease and clean entire kitchen",price:599,duration:"2-3 hours",popular:!1},{id:4,name:"Bathroom Cleaning",desc:"Scrub, sanitize and clean all bathrooms",price:299,duration:"1-2 hours",popular:!1}]},carpentry:{color:"#fff7ed",iconColor:"#c2410c",desc:"Skilled carpenters for all wood work",packages:[{id:1,name:"Furniture Assembly",desc:"Assemble flat-pack or new furniture",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Door Repair",desc:"Fix hinges, locks, alignment issues",price:249,duration:"30-60 mins",popular:!1},{id:3,name:"Wood Polish",desc:"Sand and polish wooden furniture",price:499,duration:"2-3 hours",popular:!1},{id:4,name:"Custom Fitting",desc:"Custom shelves, cabinets or woodwork",price:799,duration:"3-4 hours",popular:!1}]},"appliance-repair":{color:"#eff6ff",iconColor:"#1d4ed8",desc:"All home appliance repairs",packages:[{id:1,name:"Washing Machine Repair",desc:"Fix spin, drain or electrical issues",price:449,duration:"45-60 mins",popular:!0},{id:2,name:"Refrigerator Repair",desc:"Fix cooling, compressor or door seal",price:499,duration:"45-90 mins",popular:!1},{id:3,name:"Microwave Repair",desc:"Fix heating, door or electrical faults",price:349,duration:"30-45 mins",popular:!1},{id:4,name:"TV / LED Repair",desc:"Fix display, sound or power issues",price:399,duration:"45-60 mins",popular:!1}]},painting:{color:"#fff1f2",iconColor:"#e11d48",desc:"Professional home painting services",packages:[{id:1,name:"Single Room Paint",desc:"Full painting of one room walls and ceiling",price:1499,duration:"1 day",popular:!0},{id:2,name:"2-3 Room Paint",desc:"Full painting of 2-3 rooms",price:3499,duration:"2-3 days",popular:!1},{id:3,name:"Exterior Paint",desc:"Outside wall painting and waterproofing",price:4999,duration:"3-5 days",popular:!1},{id:4,name:"Texture / Design Work",desc:"Decorative texture or pattern wall finish",price:2499,duration:"2-3 days",popular:!1}]},"pest-control":{color:"#f0fdf4",iconColor:"#15803d",desc:"Safe and effective pest removal",packages:[{id:1,name:"Cockroach Control",desc:"Gel treatment for kitchen and bathrooms",price:499,duration:"45-60 mins",popular:!0},{id:2,name:"Termite Treatment",desc:"Full home anti-termite spray treatment",price:1499,duration:"2-3 hours",popular:!1},{id:3,name:"Rodent Control",desc:"Traps and repellent for rats and mice",price:799,duration:"1-2 hours",popular:!1},{id:4,name:"Full Home Pest Control",desc:"Complete treatment for all common pests",price:1999,duration:"3-4 hours",popular:!1}]}},Sv={color:"#eff6ff",iconColor:"#2563eb",desc:"Professional home service",packages:[{id:1,name:"Basic Service",desc:"Standard service package",price:299,duration:"1-2 hours",popular:!0},{id:2,name:"Standard Service",desc:"Complete service package",price:499,duration:"2-3 hours",popular:!1}]};function Ev(){const r=na(),{id:f}=W0(),[d,c]=A.useState(1),[m,h]=A.useState(null),[g,N]=A.useState(null),x=xv[f]||Sv,v=x.packages.find(D=>D.id===m);function R(D){const G=D.target.files[0];G&&N(URL.createObjectURL(G))}const E=f?f.replace(/-/g," "):"Service";return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:bv}),o.jsxs("div",{className:"sd-page",children:[o.jsxs("div",{className:"sd-topbar",children:[o.jsxs("button",{className:"sd-back",onClick:()=>d===1?r("/"):c(1),children:[o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back"]}),o.jsx("span",{className:"sd-topbar-title",children:E}),o.jsx("div",{className:"sd-topbar-right"})]}),o.jsxs("div",{className:"sd-steps",children:[o.jsxs("div",{className:"sd-step",children:[o.jsx("div",{className:`sd-step-circle ${d===1?"active":"done"}`,children:d>1?"✓":"1"}),o.jsx("span",{className:`sd-step-label ${d===1?"active":"done"}`,children:"Choose Package"})]}),o.jsx("div",{className:`sd-step-line ${d>1?"done":""}`}),o.jsxs("div",{className:"sd-step",children:[o.jsx("div",{className:`sd-step-circle ${d===2?"active":""}`,children:"2"}),o.jsx("span",{className:`sd-step-label ${d===2?"active":""}`,children:"Add Photo"})]})]}),o.jsxs("div",{className:"sd-inner",children:[o.jsxs("div",{className:"sd-header-card",children:[o.jsx("div",{className:"sd-header-icon",style:{background:x.color,color:x.iconColor},children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}),o.jsxs("div",{className:"sd-header-info",children:[o.jsx("h2",{children:E}),o.jsx("p",{children:x.desc})]})]}),d===1&&o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"sd-section-title",children:"Choose a Package"}),o.jsx("div",{className:"sd-packages",children:x.packages.map(D=>o.jsxs("div",{className:`sd-pkg-card ${m===D.id?"selected":""}`,onClick:()=>h(D.id),children:[o.jsx("div",{className:"sd-pkg-radio",children:o.jsx("div",{className:"sd-pkg-radio-dot"})}),o.jsxs("div",{className:"sd-pkg-info",children:[o.jsxs("div",{className:"sd-pkg-name",children:[D.name,D.popular&&o.jsx("span",{className:"sd-pkg-badge",children:"Popular"})]}),o.jsx("div",{className:"sd-pkg-desc",children:D.desc})]}),o.jsxs("div",{className:"sd-pkg-right",children:[o.jsxs("div",{className:"sd-pkg-price",children:["₹",D.price]}),o.jsx("div",{className:"sd-pkg-duration",children:D.duration})]})]},D.id))})]}),d===2&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sd-summary",children:[o.jsxs("div",{className:"sd-summary-row",children:[o.jsx("span",{children:"Selected Package"}),o.jsx("strong",{children:v?.name})]}),o.jsx("div",{className:"sd-summary-divider"}),o.jsxs("div",{className:"sd-summary-total",children:[o.jsx("span",{children:"Total"}),o.jsxs("span",{children:["₹",v?.price]})]})]}),o.jsx("p",{className:"sd-section-title",children:"Upload a Photo (Optional)"}),g?o.jsxs("div",{className:"sd-upload-area has-image",onClick:()=>document.getElementById("gallery-input").click(),children:[o.jsx("img",{src:g,alt:"Issue",className:"sd-upload-preview"}),o.jsx("span",{className:"sd-upload-change",children:"Tap to change photo"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sd-upload-options",children:[o.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("camera-input").click(),children:[o.jsxs("svg",{viewBox:"0 0 24 24",children:[o.jsx("path",{d:"M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"}),o.jsx("path",{d:"M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})]}),o.jsx("span",{children:"Take Photo"})]}),o.jsxs("div",{className:"sd-upload-option",onClick:()=>document.getElementById("gallery-input").click(),children:[o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),o.jsx("span",{children:"From Gallery"})]})]}),o.jsxs("div",{className:"sd-upload-area",onClick:()=>document.getElementById("gallery-input").click(),children:[o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"})}),o.jsx("span",{className:"sd-upload-title",children:"Upload issue photo"}),o.jsxs("span",{className:"sd-upload-sub",children:["Help the worker understand your issue better.",`
`,"Tap to upload from your device."]})]})]}),o.jsx("input",{id:"camera-input",type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:R}),o.jsx("input",{id:"gallery-input",type:"file",accept:"image/*",style:{display:"none"},onChange:R}),o.jsx("button",{className:"sd-skip-btn",onClick:()=>r("/login"),children:"Skip & Continue without photo →"})]})]}),o.jsxs("div",{className:"sd-cta",children:[o.jsx("div",{className:"sd-cta-info",children:v?o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"sd-cta-price",children:["₹",v.price]}),o.jsx("span",{className:"sd-cta-label",children:v.name})]}):o.jsx("span",{className:"sd-cta-label",children:"Select a package to continue"})}),o.jsx("button",{className:"sd-cta-btn",disabled:!m,onClick:()=>d===1?c(2):r("/login"),children:d===1?"Continue →":"Confirm Booking →"})]})]})]})}const jv=`
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
`;function zv(){const{user:r,login:f}=su(),{show:d,hide:c}=Dm(),m=na(),h=A.useRef(null);if(!r)return m("/login"),null;const[g,N]=A.useState({name:r.name||"",phone:r.phone||"",email:r.email||"aditya.demo@example.com",gender:r.gender||"",dob:r.dob||"",addresses:r.addresses&&r.addresses.length>0?r.addresses:["123, Gandhi Nagar, Bikaner, RJ"]}),[x,v]=A.useState(r.photo||null),[R,E]=A.useState(!1),D=()=>{d(),setTimeout(()=>{f({...r,name:g.name,email:g.email,gender:g.gender,dob:g.dob,addresses:g.addresses,photo:x}),c(),E(!0),setTimeout(()=>E(!1),3e3)},1500)},G=k=>{const Q=k.target.files[0];if(Q){const ae=new FileReader;ae.onloadend=()=>{v(ae.result)},ae.readAsDataURL(Q)}},L=()=>{h.current.click()},H=(k,Q)=>{const ae=[...g.addresses];ae[k]=Q,N({...g,addresses:ae})},U=()=>{N({...g,addresses:[...g.addresses,""]})},F=k=>{const Q=g.addresses.filter((ae,me)=>me!==k);N({...g,addresses:Q})};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:jv}),o.jsx(Bm,{}),o.jsxs("div",{className:`toast-notification ${R?"show":""}`,children:[o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#4ade80",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Profile details saved successfully"]}),o.jsx("div",{className:"profile-page",children:o.jsxs("div",{className:"profile-container",children:[o.jsx("div",{className:"profile-topbar",children:o.jsxs("button",{className:"profile-back-btn",onClick:()=>m(-1),children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),o.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Back"]})}),o.jsxs("div",{className:"profile-card",children:[o.jsxs("div",{className:"profile-header",children:[o.jsxs("div",{className:"profile-avatar-wrap",children:[o.jsx("div",{className:"profile-big-avatar",children:x?o.jsx("img",{src:x,alt:"Profile"}):g.name?g.name.charAt(0):"U"}),o.jsx("input",{type:"file",accept:"image/*",ref:h,style:{display:"none"},onChange:G}),o.jsx("div",{className:"edit-avatar-btn",onClick:L,children:o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),o.jsx("circle",{cx:"12",cy:"13",r:"4"})]})})]}),o.jsx("h2",{className:"profile-name",children:g.name}),o.jsx("p",{className:"profile-member-since",children:"Member since March 2026"})]}),o.jsx("div",{className:"profile-section-title",children:"Personal Information"}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Full Name"}),o.jsx("input",{className:"form-input",type:"text",value:g.name,onChange:k=>N({...g,name:k.target.value})})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Phone Number"}),o.jsx("input",{className:"form-input",type:"text",value:g.phone,disabled:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Email Address"}),o.jsx("input",{className:"form-input",type:"email",value:g.email,onChange:k=>N({...g,email:k.target.value})})]})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Gender"}),o.jsxs("select",{className:"form-input",value:g.gender,onChange:k=>N({...g,gender:k.target.value}),children:[o.jsx("option",{value:"",disabled:!0,children:"Select Gender"}),o.jsx("option",{value:"Male",children:"Male"}),o.jsx("option",{value:"Female",children:"Female"}),o.jsx("option",{value:"Other",children:"Other"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Date of Birth"}),o.jsx("input",{className:"form-input",type:"date",value:g.dob,onChange:k=>N({...g,dob:k.target.value})})]})]})]}),o.jsxs("div",{className:"profile-card",children:[o.jsx("div",{className:"profile-section-title",children:"Saved Addresses"}),g.addresses.map((k,Q)=>o.jsxs("div",{className:"address-box",children:[Q===0&&o.jsx("span",{className:"address-badge",children:"Primary"}),o.jsx("textarea",{className:"form-input",rows:"3",placeholder:"Enter complete address...",value:k,onChange:ae=>H(Q,ae.target.value),style:{resize:"vertical"}}),Q!==0&&o.jsx("button",{className:"remove-address-btn",onClick:()=>F(Q),children:"Remove"})]},Q)),o.jsx("button",{className:"add-address-btn",onClick:U,children:"+ Add Another Address"}),o.jsx("button",{className:"save-btn",onClick:D,children:"Save All Details"})]})]})})]})}function wv(){return o.jsx(Ug,{children:o.jsxs(dg,{children:[o.jsx(Dl,{path:"/",element:o.jsx(sv,{})}),o.jsx(Dl,{path:"/login",element:o.jsx(pv,{})}),o.jsx(Dl,{path:"/join",element:o.jsx(yv,{})}),o.jsx(Dl,{path:"/service/:id",element:o.jsx(Ev,{})}),o.jsx(Dl,{path:"/profile",element:o.jsx(zv,{})})," "]})})}h0.createRoot(document.getElementById("root")).render(o.jsx(A.StrictMode,{children:o.jsx(mv,{children:o.jsx(Fg,{children:o.jsx(wv,{})})})}));
