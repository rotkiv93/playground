(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function xc(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function vc(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=St(n)?bm(n):vc(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(St(i))return i;if(ot(i))return i}}const vm=/;(?![^(]*\))/g,ym=/:([^]+)/,Mm=/\/\*.*?\*\//gs;function bm(i){const e={};return i.replace(Mm,"").split(vm).forEach(t=>{if(t){const n=t.split(ym);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function yc(i){let e="";if(St(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const n=yc(i[t]);n&&(e+=n+" ")}else if(ot(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Sm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wm=xc(Sm);function Nh(i){return!!i||i===""}const Qe={},Hr=[],Pn=()=>{},Tm=()=>!1,Em=/^on[^a-z]/,la=i=>Em.test(i),Mc=i=>i.startsWith("onUpdate:"),Rt=Object.assign,bc=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Cm=Object.prototype.hasOwnProperty,Ve=(i,e)=>Cm.call(i,e),Ie=Array.isArray,Is=i=>ca(i)==="[object Map]",Am=i=>ca(i)==="[object Set]",Ne=i=>typeof i=="function",St=i=>typeof i=="string",Sc=i=>typeof i=="symbol",ot=i=>i!==null&&typeof i=="object",zh=i=>ot(i)&&Ne(i.then)&&Ne(i.catch),Pm=Object.prototype.toString,ca=i=>Pm.call(i),Lm=i=>ca(i).slice(8,-1),Rm=i=>ca(i)==="[object Object]",wc=i=>St(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Uo=xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Dm=/-(\w)/g,Gn=ua(i=>i.replace(Dm,(e,t)=>t?t.toUpperCase():"")),Im=/\B([A-Z])/g,ps=ua(i=>i.replace(Im,"-$1").toLowerCase()),fa=ua(i=>i.charAt(0).toUpperCase()+i.slice(1)),Da=ua(i=>i?`on${fa(i)}`:""),Vs=(i,e)=>!Object.is(i,e),Ia=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Yo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Uh=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let du;const Fm=()=>du||(du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nn;class Om{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Nn,!e&&Nn&&(this.index=(Nn.scopes||(Nn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Nn;try{return Nn=this,e()}finally{Nn=t}}}on(){Nn=this}off(){Nn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Nm(i,e=Nn){e&&e.active&&e.effects.push(i)}const Tc=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Bh=i=>(i.w&Di)>0,kh=i=>(i.n&Di)>0,zm=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Di},Um=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Bh(r)&&!kh(r)?r.delete(i):e[t++]=r,r.w&=~Di,r.n&=~Di}e.length=t}},Rl=new WeakMap;let Cs=0,Di=1;const Dl=30;let wn;const sr=Symbol(""),Il=Symbol("");class Ec{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Nm(this,n)}run(){if(!this.active)return this.fn();let e=wn,t=Ci;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wn,wn=this,Ci=!0,Di=1<<++Cs,Cs<=Dl?zm(this):pu(this),this.fn()}finally{Cs<=Dl&&Um(this),Di=1<<--Cs,wn=this.parent,Ci=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wn===this?this.deferStop=!0:this.active&&(pu(this),this.onStop&&this.onStop(),this.active=!1)}}function pu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Ci=!0;const Vh=[];function ms(){Vh.push(Ci),Ci=!1}function gs(){const i=Vh.pop();Ci=i===void 0?!0:i}function Kt(i,e,t){if(Ci&&wn){let n=Rl.get(i);n||Rl.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Tc()),Gh(r)}}function Gh(i,e){let t=!1;Cs<=Dl?kh(i)||(i.n|=Di,t=!Bh(i)):t=!i.has(wn),t&&(i.add(wn),wn.deps.push(i))}function oi(i,e,t,n,r,s){const o=Rl.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i)){const l=Uh(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?wc(t)&&a.push(o.get("length")):(a.push(o.get(sr)),Is(i)&&a.push(o.get(Il)));break;case"delete":Ie(i)||(a.push(o.get(sr)),Is(i)&&a.push(o.get(Il)));break;case"set":Is(i)&&a.push(o.get(sr));break}if(a.length===1)a[0]&&Fl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Fl(Tc(l))}}function Fl(i,e){const t=Ie(i)?i:[...i];for(const n of t)n.computed&&mu(n);for(const n of t)n.computed||mu(n)}function mu(i,e){(i!==wn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Bm=xc("__proto__,__v_isRef,__isVue"),Hh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Sc)),km=Cc(),Vm=Cc(!1,!0),Gm=Cc(!0),gu=Hm();function Hm(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Ge(this);for(let s=0,o=this.length;s<o;s++)Kt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Ge)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){ms();const n=Ge(this)[e].apply(this,t);return gs(),n}}),i}function Cc(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?sg:Yh:e?jh:Xh).get(n))return n;const o=Ie(n);if(!i&&o&&Ve(gu,r))return Reflect.get(gu,r,s);const a=Reflect.get(n,r,s);return(Sc(r)?Hh.has(r):Bm(r))||(i||Kt(n,"get",r),e)?a:At(a)?o&&wc(r)?a:a.value:ot(a)?i?$h(a):to(a):a}}const Wm=Wh(),qm=Wh(!0);function Wh(i=!1){return function(t,n,r,s){let o=t[n];if(Jr(o)&&At(o)&&!At(r))return!1;if(!i&&(!$o(r)&&!Jr(r)&&(o=Ge(o),r=Ge(r)),!Ie(t)&&At(o)&&!At(r)))return o.value=r,!0;const a=Ie(t)&&wc(n)?Number(n)<t.length:Ve(t,n),l=Reflect.set(t,n,r,s);return t===Ge(s)&&(a?Vs(r,o)&&oi(t,"set",n,r):oi(t,"add",n,r)),l}}function Xm(i,e){const t=Ve(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&oi(i,"delete",e,void 0),n}function jm(i,e){const t=Reflect.has(i,e);return(!Sc(e)||!Hh.has(e))&&Kt(i,"has",e),t}function Ym(i){return Kt(i,"iterate",Ie(i)?"length":sr),Reflect.ownKeys(i)}const qh={get:km,set:Wm,deleteProperty:Xm,has:jm,ownKeys:Ym},$m={get:Gm,set(i,e){return!0},deleteProperty(i,e){return!0}},Km=Rt({},qh,{get:Vm,set:qm}),Ac=i=>i,ha=i=>Reflect.getPrototypeOf(i);function lo(i,e,t=!1,n=!1){i=i.__v_raw;const r=Ge(i),s=Ge(e);t||(e!==s&&Kt(r,"get",e),Kt(r,"get",s));const{has:o}=ha(r),a=n?Ac:t?Rc:Gs;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function co(i,e=!1){const t=this.__v_raw,n=Ge(t),r=Ge(i);return e||(i!==r&&Kt(n,"has",i),Kt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function uo(i,e=!1){return i=i.__v_raw,!e&&Kt(Ge(i),"iterate",sr),Reflect.get(i,"size",i)}function _u(i){i=Ge(i);const e=Ge(this);return ha(e).has.call(e,i)||(e.add(i),oi(e,"add",i,i)),this}function xu(i,e){e=Ge(e);const t=Ge(this),{has:n,get:r}=ha(t);let s=n.call(t,i);s||(i=Ge(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Vs(e,o)&&oi(t,"set",i,e):oi(t,"add",i,e),this}function vu(i){const e=Ge(this),{has:t,get:n}=ha(e);let r=t.call(e,i);r||(i=Ge(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&oi(e,"delete",i,void 0),s}function yu(){const i=Ge(this),e=i.size!==0,t=i.clear();return e&&oi(i,"clear",void 0,void 0),t}function fo(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Ge(o),l=e?Ac:i?Rc:Gs;return!i&&Kt(a,"iterate",sr),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function ho(i,e,t){return function(...n){const r=this.__v_raw,s=Ge(r),o=Is(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Ac:e?Rc:Gs;return!e&&Kt(s,"iterate",l?Il:sr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function hi(i){return function(...e){return i==="delete"?!1:this}}function Zm(){const i={get(s){return lo(this,s)},get size(){return uo(this)},has:co,add:_u,set:xu,delete:vu,clear:yu,forEach:fo(!1,!1)},e={get(s){return lo(this,s,!1,!0)},get size(){return uo(this)},has:co,add:_u,set:xu,delete:vu,clear:yu,forEach:fo(!1,!0)},t={get(s){return lo(this,s,!0)},get size(){return uo(this,!0)},has(s){return co.call(this,s,!0)},add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear"),forEach:fo(!0,!1)},n={get(s){return lo(this,s,!0,!0)},get size(){return uo(this,!0)},has(s){return co.call(this,s,!0)},add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear"),forEach:fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=ho(s,!1,!1),t[s]=ho(s,!0,!1),e[s]=ho(s,!1,!0),n[s]=ho(s,!0,!0)}),[i,t,e,n]}const[Jm,Qm,eg,tg]=Zm();function Pc(i,e){const t=e?i?tg:eg:i?Qm:Jm;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ve(t,r)&&r in n?t:n,r,s)}const ng={get:Pc(!1,!1)},ig={get:Pc(!1,!0)},rg={get:Pc(!0,!1)},Xh=new WeakMap,jh=new WeakMap,Yh=new WeakMap,sg=new WeakMap;function og(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ag(i){return i.__v_skip||!Object.isExtensible(i)?0:og(Lm(i))}function to(i){return Jr(i)?i:Lc(i,!1,qh,ng,Xh)}function lg(i){return Lc(i,!1,Km,ig,jh)}function $h(i){return Lc(i,!0,$m,rg,Yh)}function Lc(i,e,t,n,r){if(!ot(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=ag(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Wr(i){return Jr(i)?Wr(i.__v_raw):!!(i&&i.__v_isReactive)}function Jr(i){return!!(i&&i.__v_isReadonly)}function $o(i){return!!(i&&i.__v_isShallow)}function Kh(i){return Wr(i)||Jr(i)}function Ge(i){const e=i&&i.__v_raw;return e?Ge(e):i}function Zh(i){return Yo(i,"__v_skip",!0),i}const Gs=i=>ot(i)?to(i):i,Rc=i=>ot(i)?$h(i):i;function Jh(i){Ci&&wn&&(i=Ge(i),Gh(i.dep||(i.dep=Tc())))}function Qh(i,e){i=Ge(i),i.dep&&Fl(i.dep)}function At(i){return!!(i&&i.__v_isRef===!0)}function cg(i){return ed(i,!1)}function ug(i){return ed(i,!0)}function ed(i,e){return At(i)?i:new fg(i,e)}class fg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ge(e),this._value=t?e:Gs(e)}get value(){return Jh(this),this._value}set value(e){const t=this.__v_isShallow||$o(e)||Jr(e);e=t?e:Ge(e),Vs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Gs(e),Qh(this))}}function qr(i){return At(i)?i.value:i}const hg={get:(i,e,t)=>qr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return At(r)&&!At(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function td(i){return Wr(i)?i:new Proxy(i,hg)}var nd;class dg{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[nd]=!1,this._dirty=!0,this.effect=new Ec(e,()=>{this._dirty||(this._dirty=!0,Qh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Ge(this);return Jh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}nd="__v_isReadonly";function pg(i,e,t=!1){let n,r;const s=Ne(i);return s?(n=i,r=Pn):(n=i.get,r=i.set),new dg(n,r,s||!r,t)}function Ai(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){da(s,e,t)}return r}function mn(i,e,t,n){if(Ne(i)){const s=Ai(i,e,t,n);return s&&zh(s)&&s.catch(o=>{da(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(mn(i[s],e,t,n));return r}function da(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ai(l,null,10,[i,o,a]);return}}mg(i,t,r,n)}function mg(i,e,t,n=!0){console.error(i)}let Hs=!1,Ol=!1;const Et=[];let Bn=0;const Xr=[];let Zn=null,Zi=0;const id=Promise.resolve();let Dc=null;function rd(i){const e=Dc||id;return i?e.then(this?i.bind(this):i):e}function gg(i){let e=Bn+1,t=Et.length;for(;e<t;){const n=e+t>>>1;Ws(Et[n])<i?e=n+1:t=n}return e}function Ic(i){(!Et.length||!Et.includes(i,Hs&&i.allowRecurse?Bn+1:Bn))&&(i.id==null?Et.push(i):Et.splice(gg(i.id),0,i),sd())}function sd(){!Hs&&!Ol&&(Ol=!0,Dc=id.then(ad))}function _g(i){const e=Et.indexOf(i);e>Bn&&Et.splice(e,1)}function xg(i){Ie(i)?Xr.push(...i):(!Zn||!Zn.includes(i,i.allowRecurse?Zi+1:Zi))&&Xr.push(i),sd()}function Mu(i,e=Hs?Bn+1:0){for(;e<Et.length;e++){const t=Et[e];t&&t.pre&&(Et.splice(e,1),e--,t())}}function od(i){if(Xr.length){const e=[...new Set(Xr)];if(Xr.length=0,Zn){Zn.push(...e);return}for(Zn=e,Zn.sort((t,n)=>Ws(t)-Ws(n)),Zi=0;Zi<Zn.length;Zi++)Zn[Zi]();Zn=null,Zi=0}}const Ws=i=>i.id==null?1/0:i.id,vg=(i,e)=>{const t=Ws(i)-Ws(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function ad(i){Ol=!1,Hs=!0,Et.sort(vg);const e=Pn;try{for(Bn=0;Bn<Et.length;Bn++){const t=Et[Bn];t&&t.active!==!1&&Ai(t,null,14)}}finally{Bn=0,Et.length=0,od(),Hs=!1,Dc=null,(Et.length||Xr.length)&&ad()}}function yg(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||Qe;h&&(r=t.map(m=>St(m)?m.trim():m)),f&&(r=t.map(Uh))}let a,l=n[a=Da(e)]||n[a=Da(Gn(e))];!l&&s&&(l=n[a=Da(ps(e))]),l&&mn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,mn(c,i,6,r)}}function ld(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ne(i)){const l=c=>{const u=ld(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ot(i)&&n.set(i,null),null):(Ie(s)?s.forEach(l=>o[l]=null):Rt(o,s),ot(i)&&n.set(i,o),o)}function pa(i,e){return!i||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(i,e[0].toLowerCase()+e.slice(1))||Ve(i,ps(e))||Ve(i,e))}let cn=null,ma=null;function Ko(i){const e=cn;return cn=i,ma=i&&i.type.__scopeId||null,e}function Mg(i){ma=i}function bg(){ma=null}function Sg(i,e=cn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Ru(-1);const s=Ko(e);let o;try{o=i(...r)}finally{Ko(s),n._d&&Ru(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Fa(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:d}=i;let p,_;const b=Ko(i);try{if(t.shapeFlag&4){const y=r||n;p=zn(u.call(y,y,f,s,m,h,g)),_=l}else{const y=e;p=zn(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),_=e.props?l:wg(l)}}catch(y){Os.length=0,da(y,i,1),p=un(ri)}let v=p;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:M}=v;y.length&&M&7&&(o&&y.some(Mc)&&(_=Tg(_,o)),v=Ii(v,_))}return t.dirs&&(v=Ii(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),p=v,Ko(b),p}const wg=i=>{let e;for(const t in i)(t==="class"||t==="style"||la(t))&&((e||(e={}))[t]=i[t]);return e},Tg=(i,e)=>{const t={};for(const n in i)(!Mc(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Eg(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?bu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!pa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?bu(n,o,c):!0:!!o;return!1}function bu(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!pa(t,s))return!0}return!1}function Cg({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Ag=i=>i.__isSuspense;function Pg(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):xg(i)}function Bo(i,e){if(xt){let t=xt.provides;const n=xt.parent&&xt.parent.provides;n===t&&(t=xt.provides=Object.create(n)),t[i]=e}}function ii(i,e,t=!1){const n=xt||cn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Ne(e)?e.call(n.proxy):e}}const po={};function ko(i,e,t){return cd(i,e,t)}function cd(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=Qe){const a=xt;let l,c=!1,u=!1;if(At(i)?(l=()=>i.value,c=$o(i)):Wr(i)?(l=()=>i,n=!0):Ie(i)?(u=!0,c=i.some(v=>Wr(v)||$o(v)),l=()=>i.map(v=>{if(At(v))return v.value;if(Wr(v))return Br(v);if(Ne(v))return Ai(v,a,2)})):Ne(i)?e?l=()=>Ai(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),mn(i,a,3,[h])}:l=Pn,e&&n){const v=l;l=()=>Br(v())}let f,h=v=>{f=_.onStop=()=>{Ai(v,a,4)}},m;if(Xs)if(h=Pn,e?t&&mn(e,a,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const v=A_();m=v.__watcherHandles||(v.__watcherHandles=[])}else return Pn;let g=u?new Array(i.length).fill(po):po;const d=()=>{if(!!_.active)if(e){const v=_.run();(n||c||(u?v.some((y,M)=>Vs(y,g[M])):Vs(v,g)))&&(f&&f(),mn(e,a,3,[v,g===po?void 0:u&&g[0]===po?[]:g,h]),g=v)}else _.run()};d.allowRecurse=!!e;let p;r==="sync"?p=d:r==="post"?p=()=>Ot(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),p=()=>Ic(d));const _=new Ec(l,p);e?t?d():g=_.run():r==="post"?Ot(_.run.bind(_),a&&a.suspense):_.run();const b=()=>{_.stop(),a&&a.scope&&bc(a.scope.effects,_)};return m&&m.push(b),b}function Lg(i,e,t){const n=this.proxy,r=St(i)?i.includes(".")?ud(n,i):()=>n[i]:i.bind(n,n);let s;Ne(e)?s=e:(s=e.handler,t=e);const o=xt;Qr(this);const a=cd(r,s.bind(n),t);return o?Qr(o):or(),a}function ud(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Br(i,e){if(!ot(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),At(i))Br(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)Br(i[t],e);else if(Am(i)||Is(i))i.forEach(t=>{Br(t,e)});else if(Rm(i))for(const t in i)Br(i[t],e);return i}function Rg(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fc(()=>{i.isMounted=!0}),md(()=>{i.isUnmounting=!0}),i}const tn=[Function,Array],Dg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},setup(i,{slots:e}){const t=y_(),n=Rg();let r;return()=>{const s=e.default&&hd(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==ri){o=d;break}}const a=Ge(i),{mode:l}=a;if(n.isLeaving)return Oa(o);const c=Su(o);if(!c)return Oa(o);const u=Nl(c,a,n,t);zl(c,u);const f=t.subTree,h=f&&Su(f);let m=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();r===void 0?r=d:d!==r&&(r=d,m=!0)}if(h&&h.type!==ri&&(!Ji(c,h)||m)){const d=Nl(h,a,n,t);if(zl(h,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Oa(o);l==="in-out"&&c.type!==ri&&(d.delayLeave=(p,_,b)=>{const v=fd(n,h);v[String(h.key)]=h,p._leaveCb=()=>{_(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},Ig=Dg;function fd(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Nl(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:d,onAppear:p,onAfterAppear:_,onAppearCancelled:b}=e,v=String(i.key),y=fd(t,i),M=(x,w)=>{x&&mn(x,n,9,w)},C=(x,w)=>{const R=w[1];M(x,w),Ie(x)?x.every(G=>G.length<=1)&&R():x.length<=1&&R()},L={mode:s,persisted:o,beforeEnter(x){let w=a;if(!t.isMounted)if(r)w=d||a;else return;x._leaveCb&&x._leaveCb(!0);const R=y[v];R&&Ji(i,R)&&R.el._leaveCb&&R.el._leaveCb(),M(w,[x])},enter(x){let w=l,R=c,G=u;if(!t.isMounted)if(r)w=p||l,R=_||c,G=b||u;else return;let Z=!1;const N=x._enterCb=D=>{Z||(Z=!0,D?M(G,[x]):M(R,[x]),L.delayedLeave&&L.delayedLeave(),x._enterCb=void 0)};w?C(w,[x,N]):N()},leave(x,w){const R=String(i.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return w();M(f,[x]);let G=!1;const Z=x._leaveCb=N=>{G||(G=!0,w(),N?M(g,[x]):M(m,[x]),x._leaveCb=void 0,y[R]===i&&delete y[R])};y[R]=i,h?C(h,[x,Z]):Z()},clone(x){return Nl(x,e,t,n)}};return L}function Oa(i){if(ga(i))return i=Ii(i),i.children=null,i}function Su(i){return ga(i)?i.children?i.children[0]:void 0:i}function zl(i,e){i.shapeFlag&6&&i.component?zl(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function hd(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Sn?(o.patchFlag&128&&r++,n=n.concat(hd(o.children,e,a))):(e||o.type!==ri)&&n.push(a!=null?Ii(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function dd(i){return Ne(i)?{setup:i,name:i.name}:i}const Vo=i=>!!i.type.__asyncLoader,ga=i=>i.type.__isKeepAlive;function Fg(i,e){pd(i,"a",e)}function Og(i,e){pd(i,"da",e)}function pd(i,e,t=xt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(_a(e,n,t),t){let r=t.parent;for(;r&&r.parent;)ga(r.parent.vnode)&&Ng(n,e,t,r),r=r.parent}}function Ng(i,e,t,n){const r=_a(e,i,n,!0);gd(()=>{bc(n[e],r)},t)}function _a(i,e,t=xt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ms(),Qr(t);const a=mn(e,t,i,o);return or(),gs(),a});return n?r.unshift(s):r.push(s),s}}const ui=i=>(e,t=xt)=>(!Xs||i==="sp")&&_a(i,(...n)=>e(...n),t),zg=ui("bm"),Fc=ui("m"),Ug=ui("bu"),Bg=ui("u"),md=ui("bum"),gd=ui("um"),kg=ui("sp"),Vg=ui("rtg"),Gg=ui("rtc");function Hg(i,e=xt){_a("ec",i,e)}function ki(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(ms(),mn(l,t,8,[i.el,a,i,e]),gs())}}const _d="components";function Wg(i,e){return Xg(_d,i,!0,e)||i}const qg=Symbol();function Xg(i,e,t=!0,n=!1){const r=cn||xt;if(r){const s=r.type;if(i===_d){const a=T_(s,!1);if(a&&(a===e||a===Gn(e)||a===fa(Gn(e))))return s}const o=wu(r[i]||s[i],e)||wu(r.appContext[i],e);return!o&&n?s:o}}function wu(i,e){return i&&(i[e]||i[Gn(e)]||i[fa(Gn(e))])}const Ul=i=>i?Pd(i)?Uc(i)||i.proxy:Ul(i.parent):null,Fs=Rt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ul(i.parent),$root:i=>Ul(i.root),$emit:i=>i.emit,$options:i=>Oc(i),$forceUpdate:i=>i.f||(i.f=()=>Ic(i.update)),$nextTick:i=>i.n||(i.n=rd.bind(i.proxy)),$watch:i=>Lg.bind(i)}),Na=(i,e)=>i!==Qe&&!i.__isScriptSetup&&Ve(i,e),jg={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Na(n,e))return o[e]=1,n[e];if(r!==Qe&&Ve(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Ve(c,e))return o[e]=3,s[e];if(t!==Qe&&Ve(t,e))return o[e]=4,t[e];Bl&&(o[e]=0)}}const u=Fs[e];let f,h;if(u)return e==="$attrs"&&Kt(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Qe&&Ve(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ve(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Na(r,e)?(r[e]=t,!0):n!==Qe&&Ve(n,e)?(n[e]=t,!0):Ve(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Qe&&Ve(i,o)||Na(e,o)||(a=s[0])&&Ve(a,o)||Ve(n,o)||Ve(Fs,o)||Ve(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ve(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Bl=!0;function Yg(i){const e=Oc(i),t=i.proxy,n=i.ctx;Bl=!1,e.beforeCreate&&Tu(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:d,deactivated:p,beforeDestroy:_,beforeUnmount:b,destroyed:v,unmounted:y,render:M,renderTracked:C,renderTriggered:L,errorCaptured:x,serverPrefetch:w,expose:R,inheritAttrs:G,components:Z,directives:N,filters:D}=e;if(c&&$g(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const Y in o){const V=o[Y];Ne(V)&&(n[Y]=V.bind(t))}if(r){const Y=r.call(t,t);ot(Y)&&(i.data=to(Y))}if(Bl=!0,s)for(const Y in s){const V=s[Y],z=Ne(V)?V.bind(t,t):Ne(V.get)?V.get.bind(t,t):Pn,W=!Ne(V)&&Ne(V.set)?V.set.bind(t):Pn,le=ln({get:z,set:W});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>le.value,set:se=>le.value=se})}if(a)for(const Y in a)xd(a[Y],n,t,Y);if(l){const Y=Ne(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(V=>{Bo(V,Y[V])})}u&&Tu(u,i,"c");function j(Y,V){Ie(V)?V.forEach(z=>Y(z.bind(t))):V&&Y(V.bind(t))}if(j(zg,f),j(Fc,h),j(Ug,m),j(Bg,g),j(Fg,d),j(Og,p),j(Hg,x),j(Gg,C),j(Vg,L),j(md,b),j(gd,y),j(kg,w),Ie(R))if(R.length){const Y=i.exposed||(i.exposed={});R.forEach(V=>{Object.defineProperty(Y,V,{get:()=>t[V],set:z=>t[V]=z})})}else i.exposed||(i.exposed={});M&&i.render===Pn&&(i.render=M),G!=null&&(i.inheritAttrs=G),Z&&(i.components=Z),N&&(i.directives=N)}function $g(i,e,t=Pn,n=!1){Ie(i)&&(i=kl(i));for(const r in i){const s=i[r];let o;ot(s)?"default"in s?o=ii(s.from||r,s.default,!0):o=ii(s.from||r):o=ii(s),At(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Tu(i,e,t){mn(Ie(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function xd(i,e,t,n){const r=n.includes(".")?ud(t,n):()=>t[n];if(St(i)){const s=e[i];Ne(s)&&ko(r,s)}else if(Ne(i))ko(r,i.bind(t));else if(ot(i))if(Ie(i))i.forEach(s=>xd(s,e,t,n));else{const s=Ne(i.handler)?i.handler.bind(t):e[i.handler];Ne(s)&&ko(r,s,i)}}function Oc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Zo(l,c,o,!0)),Zo(l,e,o)),ot(e)&&s.set(e,l),l}function Zo(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Zo(i,s,t,!0),r&&r.forEach(o=>Zo(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Kg[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Kg={data:Eu,props:ji,emits:ji,methods:ji,computed:ji,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:ji,directives:ji,watch:Jg,provide:Eu,inject:Zg};function Eu(i,e){return e?i?function(){return Rt(Ne(i)?i.call(this,this):i,Ne(e)?e.call(this,this):e)}:e:i}function Zg(i,e){return ji(kl(i),kl(e))}function kl(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function It(i,e){return i?[...new Set([].concat(i,e))]:e}function ji(i,e){return i?Rt(Rt(Object.create(null),i),e):e}function Jg(i,e){if(!i)return e;if(!e)return i;const t=Rt(Object.create(null),i);for(const n in e)t[n]=It(i[n],e[n]);return t}function Qg(i,e,t,n=!1){const r={},s={};Yo(s,va,1),i.propsDefaults=Object.create(null),vd(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:lg(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function e_(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Ge(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(pa(i.emitsOptions,h))continue;const m=e[h];if(l)if(Ve(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=Gn(h);r[g]=Vl(l,a,g,m,i,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{vd(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ve(e,f)&&((u=ps(f))===f||!Ve(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Vl(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ve(e,f)&&!0)&&(delete s[f],c=!0)}c&&oi(i,"set","$attrs")}function vd(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Uo(l))continue;const c=e[l];let u;r&&Ve(r,u=Gn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:pa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Ge(t),c=a||Qe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Vl(r,l,f,c[f],i,!Ve(c,f))}}return o}function Vl(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Ve(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ne(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Qr(r),n=c[t]=l.call(null,e),or())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===ps(t))&&(n=!0))}return n}function yd(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ne(i)){const u=f=>{l=!0;const[h,m]=yd(f,e,!0);Rt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ot(i)&&n.set(i,Hr),Hr;if(Ie(s))for(let u=0;u<s.length;u++){const f=Gn(s[u]);Cu(f)&&(o[f]=Qe)}else if(s)for(const u in s){const f=Gn(u);if(Cu(f)){const h=s[u],m=o[f]=Ie(h)||Ne(h)?{type:h}:Object.assign({},h);if(m){const g=Lu(Boolean,m.type),d=Lu(String,m.type);m[0]=g>-1,m[1]=d<0||g<d,(g>-1||Ve(m,"default"))&&a.push(f)}}}const c=[o,a];return ot(i)&&n.set(i,c),c}function Cu(i){return i[0]!=="$"}function Au(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Pu(i,e){return Au(i)===Au(e)}function Lu(i,e){return Ie(e)?e.findIndex(t=>Pu(t,i)):Ne(e)&&Pu(e,i)?0:-1}const Md=i=>i[0]==="_"||i==="$stable",Nc=i=>Ie(i)?i.map(zn):[zn(i)],t_=(i,e,t)=>{if(e._n)return e;const n=Sg((...r)=>Nc(e(...r)),t);return n._c=!1,n},bd=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Md(r))continue;const s=i[r];if(Ne(s))e[r]=t_(r,s,n);else if(s!=null){const o=Nc(s);e[r]=()=>o}}},Sd=(i,e)=>{const t=Nc(e);i.slots.default=()=>t},n_=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Ge(e),Yo(e,"_",t)):bd(e,i.slots={})}else i.slots={},e&&Sd(i,e);Yo(i.slots,va,1)},i_=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Qe;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Rt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,bd(e,r)),o=e}else e&&(Sd(i,e),o={default:1});if(s)for(const a in r)!Md(a)&&!(a in o)&&delete r[a]};function wd(){return{app:null,config:{isNativeTag:Tm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let r_=0;function s_(i,e){return function(n,r=null){Ne(n)||(n=Object.assign({},n)),r!=null&&!ot(r)&&(r=null);const s=wd(),o=new Set;let a=!1;const l=s.app={_uid:r_++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:P_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=un(n,r);return h.appContext=s,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Uc(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Gl(i,e,t,n,r=!1){if(Ie(i)){i.forEach((h,m)=>Gl(h,e&&(Ie(e)?e[m]:e),t,n,r));return}if(Vo(n)&&!r)return;const s=n.shapeFlag&4?Uc(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Qe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(St(c)?(u[c]=null,Ve(f,c)&&(f[c]=null)):At(c)&&(c.value=null)),Ne(l))Ai(l,a,12,[o,u]);else{const h=St(l),m=At(l);if(h||m){const g=()=>{if(i.f){const d=h?Ve(f,l)?f[l]:u[l]:l.value;r?Ie(d)&&bc(d,s):Ie(d)?d.includes(s)||d.push(s):h?(u[l]=[s],Ve(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,Ve(f,l)&&(f[l]=o)):m&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Ot(g,t)):g()}}}const Ot=Pg;function o_(i){return a_(i)}function a_(i,e){const t=Fm();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Pn,insertStaticContent:g}=i,d=(E,P,q,K=null,te=null,he=null,pe=!1,re=null,ge=!!P.dynamicChildren)=>{if(E===P)return;E&&!Ji(E,P)&&(K=ae(E),se(E,te,he,!0),E=null),P.patchFlag===-2&&(ge=!1,P.dynamicChildren=null);const{type:oe,ref:T,shapeFlag:S}=P;switch(oe){case xa:p(E,P,q,K);break;case ri:_(E,P,q,K);break;case za:E==null&&b(P,q,K,pe);break;case Sn:Z(E,P,q,K,te,he,pe,re,ge);break;default:S&1?M(E,P,q,K,te,he,pe,re,ge):S&6?N(E,P,q,K,te,he,pe,re,ge):(S&64||S&128)&&oe.process(E,P,q,K,te,he,pe,re,ge,ve)}T!=null&&te&&Gl(T,E&&E.ref,he,P||E,!P)},p=(E,P,q,K)=>{if(E==null)n(P.el=a(P.children),q,K);else{const te=P.el=E.el;P.children!==E.children&&c(te,P.children)}},_=(E,P,q,K)=>{E==null?n(P.el=l(P.children||""),q,K):P.el=E.el},b=(E,P,q,K)=>{[E.el,E.anchor]=g(E.children,P,q,K,E.el,E.anchor)},v=({el:E,anchor:P},q,K)=>{let te;for(;E&&E!==P;)te=h(E),n(E,q,K),E=te;n(P,q,K)},y=({el:E,anchor:P})=>{let q;for(;E&&E!==P;)q=h(E),r(E),E=q;r(P)},M=(E,P,q,K,te,he,pe,re,ge)=>{pe=pe||P.type==="svg",E==null?C(P,q,K,te,he,pe,re,ge):w(E,P,te,he,pe,re,ge)},C=(E,P,q,K,te,he,pe,re)=>{let ge,oe;const{type:T,props:S,shapeFlag:O,transition:$,dirs:ne}=E;if(ge=E.el=o(E.type,he,S&&S.is,S),O&8?u(ge,E.children):O&16&&x(E.children,ge,null,K,te,he&&T!=="foreignObject",pe,re),ne&&ki(E,null,K,"created"),S){for(const Me in S)Me!=="value"&&!Uo(Me)&&s(ge,Me,null,S[Me],he,E.children,K,te,F);"value"in S&&s(ge,"value",null,S.value),(oe=S.onVnodeBeforeMount)&&On(oe,K,E)}L(ge,E,E.scopeId,pe,K),ne&&ki(E,null,K,"beforeMount");const fe=(!te||te&&!te.pendingBranch)&&$&&!$.persisted;fe&&$.beforeEnter(ge),n(ge,P,q),((oe=S&&S.onVnodeMounted)||fe||ne)&&Ot(()=>{oe&&On(oe,K,E),fe&&$.enter(ge),ne&&ki(E,null,K,"mounted")},te)},L=(E,P,q,K,te)=>{if(q&&m(E,q),K)for(let he=0;he<K.length;he++)m(E,K[he]);if(te){let he=te.subTree;if(P===he){const pe=te.vnode;L(E,pe,pe.scopeId,pe.slotScopeIds,te.parent)}}},x=(E,P,q,K,te,he,pe,re,ge=0)=>{for(let oe=ge;oe<E.length;oe++){const T=E[oe]=re?Mi(E[oe]):zn(E[oe]);d(null,T,P,q,K,te,he,pe,re)}},w=(E,P,q,K,te,he,pe)=>{const re=P.el=E.el;let{patchFlag:ge,dynamicChildren:oe,dirs:T}=P;ge|=E.patchFlag&16;const S=E.props||Qe,O=P.props||Qe;let $;q&&Vi(q,!1),($=O.onVnodeBeforeUpdate)&&On($,q,P,E),T&&ki(P,E,q,"beforeUpdate"),q&&Vi(q,!0);const ne=te&&P.type!=="foreignObject";if(oe?R(E.dynamicChildren,oe,re,q,K,ne,he):pe||V(E,P,re,null,q,K,ne,he,!1),ge>0){if(ge&16)G(re,P,S,O,q,K,te);else if(ge&2&&S.class!==O.class&&s(re,"class",null,O.class,te),ge&4&&s(re,"style",S.style,O.style,te),ge&8){const fe=P.dynamicProps;for(let Me=0;Me<fe.length;Me++){const me=fe[Me],J=S[me],Ee=O[me];(Ee!==J||me==="value")&&s(re,me,J,Ee,te,E.children,q,K,F)}}ge&1&&E.children!==P.children&&u(re,P.children)}else!pe&&oe==null&&G(re,P,S,O,q,K,te);(($=O.onVnodeUpdated)||T)&&Ot(()=>{$&&On($,q,P,E),T&&ki(P,E,q,"updated")},K)},R=(E,P,q,K,te,he,pe)=>{for(let re=0;re<P.length;re++){const ge=E[re],oe=P[re],T=ge.el&&(ge.type===Sn||!Ji(ge,oe)||ge.shapeFlag&70)?f(ge.el):q;d(ge,oe,T,null,K,te,he,pe,!0)}},G=(E,P,q,K,te,he,pe)=>{if(q!==K){if(q!==Qe)for(const re in q)!Uo(re)&&!(re in K)&&s(E,re,q[re],null,pe,P.children,te,he,F);for(const re in K){if(Uo(re))continue;const ge=K[re],oe=q[re];ge!==oe&&re!=="value"&&s(E,re,oe,ge,pe,P.children,te,he,F)}"value"in K&&s(E,"value",q.value,K.value)}},Z=(E,P,q,K,te,he,pe,re,ge)=>{const oe=P.el=E?E.el:a(""),T=P.anchor=E?E.anchor:a("");let{patchFlag:S,dynamicChildren:O,slotScopeIds:$}=P;$&&(re=re?re.concat($):$),E==null?(n(oe,q,K),n(T,q,K),x(P.children,q,T,te,he,pe,re,ge)):S>0&&S&64&&O&&E.dynamicChildren?(R(E.dynamicChildren,O,q,te,he,pe,re),(P.key!=null||te&&P===te.subTree)&&Td(E,P,!0)):V(E,P,q,T,te,he,pe,re,ge)},N=(E,P,q,K,te,he,pe,re,ge)=>{P.slotScopeIds=re,E==null?P.shapeFlag&512?te.ctx.activate(P,q,K,pe,ge):D(P,q,K,te,he,pe,ge):X(E,P,ge)},D=(E,P,q,K,te,he,pe)=>{const re=E.component=v_(E,K,te);if(ga(E)&&(re.ctx.renderer=ve),M_(re),re.asyncDep){if(te&&te.registerDep(re,j),!E.el){const ge=re.subTree=un(ri);_(null,ge,P,q)}return}j(re,E,P,q,te,he,pe)},X=(E,P,q)=>{const K=P.component=E.component;if(Eg(E,P,q))if(K.asyncDep&&!K.asyncResolved){Y(K,P,q);return}else K.next=P,_g(K.update),K.update();else P.el=E.el,K.vnode=P},j=(E,P,q,K,te,he,pe)=>{const re=()=>{if(E.isMounted){let{next:T,bu:S,u:O,parent:$,vnode:ne}=E,fe=T,Me;Vi(E,!1),T?(T.el=ne.el,Y(E,T,pe)):T=ne,S&&Ia(S),(Me=T.props&&T.props.onVnodeBeforeUpdate)&&On(Me,$,T,ne),Vi(E,!0);const me=Fa(E),J=E.subTree;E.subTree=me,d(J,me,f(J.el),ae(J),E,te,he),T.el=me.el,fe===null&&Cg(E,me.el),O&&Ot(O,te),(Me=T.props&&T.props.onVnodeUpdated)&&Ot(()=>On(Me,$,T,ne),te)}else{let T;const{el:S,props:O}=P,{bm:$,m:ne,parent:fe}=E,Me=Vo(P);if(Vi(E,!1),$&&Ia($),!Me&&(T=O&&O.onVnodeBeforeMount)&&On(T,fe,P),Vi(E,!0),S&&we){const me=()=>{E.subTree=Fa(E),we(S,E.subTree,E,te,null)};Me?P.type.__asyncLoader().then(()=>!E.isUnmounted&&me()):me()}else{const me=E.subTree=Fa(E);d(null,me,q,K,E,te,he),P.el=me.el}if(ne&&Ot(ne,te),!Me&&(T=O&&O.onVnodeMounted)){const me=P;Ot(()=>On(T,fe,me),te)}(P.shapeFlag&256||fe&&Vo(fe.vnode)&&fe.vnode.shapeFlag&256)&&E.a&&Ot(E.a,te),E.isMounted=!0,P=q=K=null}},ge=E.effect=new Ec(re,()=>Ic(oe),E.scope),oe=E.update=()=>ge.run();oe.id=E.uid,Vi(E,!0),oe()},Y=(E,P,q)=>{P.component=E;const K=E.vnode.props;E.vnode=P,E.next=null,e_(E,P.props,K,q),i_(E,P.children,q),ms(),Mu(),gs()},V=(E,P,q,K,te,he,pe,re,ge=!1)=>{const oe=E&&E.children,T=E?E.shapeFlag:0,S=P.children,{patchFlag:O,shapeFlag:$}=P;if(O>0){if(O&128){W(oe,S,q,K,te,he,pe,re,ge);return}else if(O&256){z(oe,S,q,K,te,he,pe,re,ge);return}}$&8?(T&16&&F(oe,te,he),S!==oe&&u(q,S)):T&16?$&16?W(oe,S,q,K,te,he,pe,re,ge):F(oe,te,he,!0):(T&8&&u(q,""),$&16&&x(S,q,K,te,he,pe,re,ge))},z=(E,P,q,K,te,he,pe,re,ge)=>{E=E||Hr,P=P||Hr;const oe=E.length,T=P.length,S=Math.min(oe,T);let O;for(O=0;O<S;O++){const $=P[O]=ge?Mi(P[O]):zn(P[O]);d(E[O],$,q,null,te,he,pe,re,ge)}oe>T?F(E,te,he,!0,!1,S):x(P,q,K,te,he,pe,re,ge,S)},W=(E,P,q,K,te,he,pe,re,ge)=>{let oe=0;const T=P.length;let S=E.length-1,O=T-1;for(;oe<=S&&oe<=O;){const $=E[oe],ne=P[oe]=ge?Mi(P[oe]):zn(P[oe]);if(Ji($,ne))d($,ne,q,null,te,he,pe,re,ge);else break;oe++}for(;oe<=S&&oe<=O;){const $=E[S],ne=P[O]=ge?Mi(P[O]):zn(P[O]);if(Ji($,ne))d($,ne,q,null,te,he,pe,re,ge);else break;S--,O--}if(oe>S){if(oe<=O){const $=O+1,ne=$<T?P[$].el:K;for(;oe<=O;)d(null,P[oe]=ge?Mi(P[oe]):zn(P[oe]),q,ne,te,he,pe,re,ge),oe++}}else if(oe>O)for(;oe<=S;)se(E[oe],te,he,!0),oe++;else{const $=oe,ne=oe,fe=new Map;for(oe=ne;oe<=O;oe++){const be=P[oe]=ge?Mi(P[oe]):zn(P[oe]);be.key!=null&&fe.set(be.key,oe)}let Me,me=0;const J=O-ne+1;let Ee=!1,Le=0;const Te=new Array(J);for(oe=0;oe<J;oe++)Te[oe]=0;for(oe=$;oe<=S;oe++){const be=E[oe];if(me>=J){se(be,te,he,!0);continue}let Re;if(be.key!=null)Re=fe.get(be.key);else for(Me=ne;Me<=O;Me++)if(Te[Me-ne]===0&&Ji(be,P[Me])){Re=Me;break}Re===void 0?se(be,te,he,!0):(Te[Re-ne]=oe+1,Re>=Le?Le=Re:Ee=!0,d(be,P[Re],q,null,te,he,pe,re,ge),me++)}const Ae=Ee?l_(Te):Hr;for(Me=Ae.length-1,oe=J-1;oe>=0;oe--){const be=ne+oe,Re=P[be],$e=be+1<T?P[be+1].el:K;Te[oe]===0?d(null,Re,q,$e,te,he,pe,re,ge):Ee&&(Me<0||oe!==Ae[Me]?le(Re,q,$e,2):Me--)}}},le=(E,P,q,K,te=null)=>{const{el:he,type:pe,transition:re,children:ge,shapeFlag:oe}=E;if(oe&6){le(E.component.subTree,P,q,K);return}if(oe&128){E.suspense.move(P,q,K);return}if(oe&64){pe.move(E,P,q,ve);return}if(pe===Sn){n(he,P,q);for(let S=0;S<ge.length;S++)le(ge[S],P,q,K);n(E.anchor,P,q);return}if(pe===za){v(E,P,q);return}if(K!==2&&oe&1&&re)if(K===0)re.beforeEnter(he),n(he,P,q),Ot(()=>re.enter(he),te);else{const{leave:S,delayLeave:O,afterLeave:$}=re,ne=()=>n(he,P,q),fe=()=>{S(he,()=>{ne(),$&&$()})};O?O(he,ne,fe):fe()}else n(he,P,q)},se=(E,P,q,K=!1,te=!1)=>{const{type:he,props:pe,ref:re,children:ge,dynamicChildren:oe,shapeFlag:T,patchFlag:S,dirs:O}=E;if(re!=null&&Gl(re,null,q,E,!0),T&256){P.ctx.deactivate(E);return}const $=T&1&&O,ne=!Vo(E);let fe;if(ne&&(fe=pe&&pe.onVnodeBeforeUnmount)&&On(fe,P,E),T&6)k(E.component,q,K);else{if(T&128){E.suspense.unmount(q,K);return}$&&ki(E,null,P,"beforeUnmount"),T&64?E.type.remove(E,P,q,te,ve,K):oe&&(he!==Sn||S>0&&S&64)?F(oe,P,q,!1,!0):(he===Sn&&S&384||!te&&T&16)&&F(ge,P,q),K&&ue(E)}(ne&&(fe=pe&&pe.onVnodeUnmounted)||$)&&Ot(()=>{fe&&On(fe,P,E),$&&ki(E,null,P,"unmounted")},q)},ue=E=>{const{type:P,el:q,anchor:K,transition:te}=E;if(P===Sn){ye(q,K);return}if(P===za){y(E);return}const he=()=>{r(q),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(E.shapeFlag&1&&te&&!te.persisted){const{leave:pe,delayLeave:re}=te,ge=()=>pe(q,he);re?re(E.el,he,ge):ge()}else he()},ye=(E,P)=>{let q;for(;E!==P;)q=h(E),r(E),E=q;r(P)},k=(E,P,q)=>{const{bum:K,scope:te,update:he,subTree:pe,um:re}=E;K&&Ia(K),te.stop(),he&&(he.active=!1,se(pe,E,P,q)),re&&Ot(re,P),Ot(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},F=(E,P,q,K=!1,te=!1,he=0)=>{for(let pe=he;pe<E.length;pe++)se(E[pe],P,q,K,te)},ae=E=>E.shapeFlag&6?ae(E.component.subTree):E.shapeFlag&128?E.suspense.next():h(E.anchor||E.el),ce=(E,P,q)=>{E==null?P._vnode&&se(P._vnode,null,null,!0):d(P._vnode||null,E,P,null,null,null,q),Mu(),od(),P._vnode=E},ve={p:d,um:se,m:le,r:ue,mt:D,mc:x,pc:V,pbc:R,n:ae,o:i};let _e,we;return e&&([_e,we]=e(ve)),{render:ce,hydrate:_e,createApp:s_(ce,_e)}}function Vi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Td(i,e,t=!1){const n=i.children,r=e.children;if(Ie(n)&&Ie(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Mi(r[s]),a.el=o.el),t||Td(o,a)),a.type===xa&&(a.el=o.el)}}function l_(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const c_=i=>i.__isTeleport,Sn=Symbol(void 0),xa=Symbol(void 0),ri=Symbol(void 0),za=Symbol(void 0),Os=[];let Cn=null;function Ed(i=!1){Os.push(Cn=i?null:[])}function u_(){Os.pop(),Cn=Os[Os.length-1]||null}let qs=1;function Ru(i){qs+=i}function Cd(i){return i.dynamicChildren=qs>0?Cn||Hr:null,u_(),qs>0&&Cn&&Cn.push(i),i}function f_(i,e,t,n,r,s){return Cd(ai(i,e,t,n,r,s,!0))}function h_(i,e,t,n,r){return Cd(un(i,e,t,n,r,!0))}function Hl(i){return i?i.__v_isVNode===!0:!1}function Ji(i,e){return i.type===e.type&&i.key===e.key}const va="__vInternal",Ad=({key:i})=>i!=null?i:null,Go=({ref:i,ref_key:e,ref_for:t})=>i!=null?St(i)||At(i)||Ne(i)?{i:cn,r:i,k:e,f:!!t}:i:null;function ai(i,e=null,t=null,n=0,r=null,s=i===Sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Ad(e),ref:e&&Go(e),scopeId:ma,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cn};return a?(zc(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),qs>0&&!o&&Cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Cn.push(l),l}const un=d_;function d_(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===qg)&&(i=ri),Hl(i)){const a=Ii(i,e,!0);return t&&zc(a,t),qs>0&&!s&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(i)]=a:Cn.push(a)),a.patchFlag|=-2,a}if(E_(i)&&(i=i.__vccOpts),e){e=p_(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=yc(a)),ot(l)&&(Kh(l)&&!Ie(l)&&(l=Rt({},l)),e.style=vc(l))}const o=St(i)?1:Ag(i)?128:c_(i)?64:ot(i)?4:Ne(i)?2:0;return ai(i,e,t,n,r,o,s,!0)}function p_(i){return i?Kh(i)||va in i?Rt({},i):i:null}function Ii(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?g_(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Ad(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(Go(e)):[r,Go(e)]:Go(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Sn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ii(i.ssContent),ssFallback:i.ssFallback&&Ii(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx}}function m_(i=" ",e=0){return un(xa,null,i,e)}function zn(i){return i==null||typeof i=="boolean"?un(ri):Ie(i)?un(Sn,null,i.slice()):typeof i=="object"?Mi(i):un(xa,null,String(i))}function Mi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ii(i)}function zc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),zc(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(va in e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),n&64?(t=16,e=[m_(e)]):t=8);i.children=e,i.shapeFlag|=t}function g_(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=yc([e.class,n.class]));else if(r==="style")e.style=vc([e.style,n.style]);else if(la(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function On(i,e,t,n=null){mn(i,e,7,[t,n])}const __=wd();let x_=0;function v_(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||__,s={uid:x_++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Om(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yd(n,r),emitsOptions:ld(n,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:n.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yg.bind(null,s),i.ce&&i.ce(s),s}let xt=null;const y_=()=>xt||cn,Qr=i=>{xt=i,i.scope.on()},or=()=>{xt&&xt.scope.off(),xt=null};function Pd(i){return i.vnode.shapeFlag&4}let Xs=!1;function M_(i,e=!1){Xs=e;const{props:t,children:n}=i.vnode,r=Pd(i);Qg(i,t,r,e),n_(i,n);const s=r?b_(i,e):void 0;return Xs=!1,s}function b_(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Zh(new Proxy(i.ctx,jg));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?w_(i):null;Qr(i),ms();const s=Ai(n,i,0,[i.props,r]);if(gs(),or(),zh(s)){if(s.then(or,or),e)return s.then(o=>{Du(i,o,e)}).catch(o=>{da(o,i,0)});i.asyncDep=s}else Du(i,s,e)}else Ld(i,e)}function Du(i,e,t){Ne(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ot(e)&&(i.setupState=td(e)),Ld(i,t)}let Iu;function Ld(i,e,t){const n=i.type;if(!i.render){if(!e&&Iu&&!n.render){const r=n.template||Oc(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Rt(Rt({isCustomElement:s,delimiters:a},o),l);n.render=Iu(r,c)}}i.render=n.render||Pn}Qr(i),ms(),Yg(i),gs(),or()}function S_(i){return new Proxy(i.attrs,{get(e,t){return Kt(i,"get","$attrs"),e[t]}})}function w_(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=S_(i))},slots:i.slots,emit:i.emit,expose:e}}function Uc(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(td(Zh(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fs)return Fs[t](i)},has(e,t){return t in e||t in Fs}}))}function T_(i,e=!0){return Ne(i)?i.displayName||i.name:i.name||e&&i.__name}function E_(i){return Ne(i)&&"__vccOpts"in i}const ln=(i,e)=>pg(i,e,Xs);function Rd(i,e,t){const n=arguments.length;return n===2?ot(e)&&!Ie(e)?Hl(e)?un(i,null,[e]):un(i,e):un(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Hl(t)&&(t=[t]),un(i,e,t))}const C_=Symbol(""),A_=()=>ii(C_),P_="3.2.45",L_="http://www.w3.org/2000/svg",Qi=typeof document<"u"?document:null,Fu=Qi&&Qi.createElement("template"),R_={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Qi.createElementNS(L_,i):Qi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Qi.createTextNode(i),createComment:i=>Qi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Qi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Fu.innerHTML=n?`<svg>${i}</svg>`:i;const a=Fu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function D_(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function I_(i,e,t){const n=i.style,r=St(t);if(t&&!r){for(const s in t)Wl(n,s,t[s]);if(e&&!St(e))for(const s in e)t[s]==null&&Wl(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Ou=/\s*!important$/;function Wl(i,e,t){if(Ie(t))t.forEach(n=>Wl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=F_(i,e);Ou.test(t)?i.setProperty(ps(n),t.replace(Ou,""),"important"):i[n]=t}}const Nu=["Webkit","Moz","ms"],Ua={};function F_(i,e){const t=Ua[e];if(t)return t;let n=Gn(e);if(n!=="filter"&&n in i)return Ua[e]=n;n=fa(n);for(let r=0;r<Nu.length;r++){const s=Nu[r]+n;if(s in i)return Ua[e]=s}return e}const zu="http://www.w3.org/1999/xlink";function O_(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(zu,e.slice(6,e.length)):i.setAttributeNS(zu,e,t);else{const s=wm(e);t==null||s&&!Nh(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function N_(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Nh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function z_(i,e,t,n){i.addEventListener(e,t,n)}function U_(i,e,t,n){i.removeEventListener(e,t,n)}function B_(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=k_(e);if(n){const c=s[e]=H_(n,r);z_(i,a,c,l)}else o&&(U_(i,a,o,l),s[e]=void 0)}}const Uu=/(?:Once|Passive|Capture)$/;function k_(i){let e;if(Uu.test(i)){e={};let n;for(;n=i.match(Uu);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ps(i.slice(2)),e]}let Ba=0;const V_=Promise.resolve(),G_=()=>Ba||(V_.then(()=>Ba=0),Ba=Date.now());function H_(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;mn(W_(n,t.value),e,5,[n])};return t.value=i,t.attached=G_(),t}function W_(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Bu=/^on[a-z]/,q_=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?D_(i,n,r):e==="style"?I_(i,t,n):la(e)?Mc(e)||B_(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):X_(i,e,n,r))?N_(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),O_(i,e,n,r))};function X_(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Bu.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Bu.test(e)&&St(t)?!1:e in i}const j_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ig.props;const Y_=Rt({patchProp:q_},R_);let ku;function $_(){return ku||(ku=o_(Y_))}const K_=(...i)=>{const e=$_().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Z_(n);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Z_(i){return St(i)?document.querySelector(i):i}const J_=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},Q_={__name:"App",setup(i){return(e,t)=>{const n=Wg("router-view");return Ed(),h_(n)}}};function Jn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Dd(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $t={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},es={duration:.5,overwrite:!1,delay:0},Bc,Ut,ct,fn=1e8,Ye=1/fn,ql=Math.PI*2,e0=ql/4,t0=0,Id=Math.sqrt,n0=Math.cos,i0=Math.sin,yt=function(e){return typeof e=="string"},rt=function(e){return typeof e=="function"},li=function(e){return typeof e=="number"},kc=function(e){return typeof e>"u"},Hn=function(e){return typeof e=="object"},Bt=function(e){return e!==!1},Fd=function(){return typeof window<"u"},mo=function(e){return rt(e)||yt(e)},Od=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pt=Array.isArray,Xl=/(?:-?\.?\d|\.)+/gi,Nd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,kr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ka=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zd=/[+-]=-?[.\d]+/,Ud=/[^,'"\[\]\s]+/gi,r0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,et,sn,jl,Vc,Zt={},Jo={},Bd,kd=function(e){return(Jo=hr(e,Zt))&&Jt},Gc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qo=function(e,t){return!t&&console.warn(e)},Vd=function(e,t){return e&&(Zt[e]=t)&&Jo&&(Jo[e]=t)||Zt},js=function(){return 0},s0={suppressEvents:!0,isStart:!0,kill:!1},Ho={suppressEvents:!0,kill:!1},o0={suppressEvents:!0},Hc={},Pi=[],Yl={},Gd,Xt={},Va={},Vu=30,Wo=[],Wc="",qc=function(e){var t=e[0],n,r;if(Hn(t)||rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Wo.length;r--&&!Wo[r].targetTest(t););n=Wo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new up(e[r],n)))||e.splice(r,1);return e},ar=function(e){return e._gsap||qc(hn(e))[0]._gsap},Hd=function(e,t,n){return(n=e[t])&&rt(n)?e[t]():kc(n)&&e.getAttribute&&e.getAttribute(t)||n},kt=function(e,t){return(e=e.split(",")).forEach(t)||e},st=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},jr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},a0=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ea=function(){var e=Pi.length,t=Pi.slice(0),n,r;for(Yl={},Pi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Wd=function(e,t,n,r){Pi.length&&ea(),e.render(t,n,r||Ut&&t<0&&(e._initted||e._startAt)),Pi.length&&ea()},qd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ud).length<2?t:yt(e)?e.trim():e},Xd=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},l0=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},hr=function(e,t){for(var n in t)e[n]=t[n];return e},Gu=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ta=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ns=function(e){var t=e.parent||et,n=e.keyframes?l0(Pt(e.keyframes)):_n;if(Bt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},c0=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},jd=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},ya=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Fi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},lr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},u0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$l=function(e,t,n,r){return e._startAt&&(Ut?e._startAt.revert(Ho):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},f0=function i(e){return!e||e._ts&&i(e.parent)},Hu=function(e){return e._repeat?ts(e._tTime,e=e.duration()+e._rDelay)*e:0},ts=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},na=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ma=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ye)||0))},ba=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ma(e),n._dirty||lr(n,e)),e},Yd=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=na(e.rawTime(),t),(!t._dur||no(0,t.totalDuration(),n)-t._tTime>Ye)&&t.render(n,!0)),lr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ye}},kn=function(e,t,n,r){return t.parent&&Fi(t),t._start=Mt((li(n)?n:n||e!==et?rn(e,n,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jd(e,t,"_first","_last",e._sort?"_start":0),Kl(t)||(e._recent=t),r||Yd(e,t),e._ts<0&&ba(e,e._tTime),e},$d=function(e,t){return(Zt.ScrollTrigger||Gc("scrollTrigger",t))&&Zt.ScrollTrigger.create(t,e)},Kd=function(e,t,n,r,s){if(jc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gd!==Yt.frame)return Pi.push(e),e._lazy=[s,r],1},h0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Kl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},d0=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&h0(e)&&!(!e._initted&&Kl(e))||(e._ts<0||e._dp._ts<0)&&!Kl(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=no(0,e._tDur,t),u=ts(l,a),e._yoyo&&u&1&&(o=1-o),u!==ts(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ut||r||e._zTime===Ye||!t&&e._zTime){if(!e._initted&&Kd(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ye:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&$l(e,t,n,!0),e._onUpdate&&!n&&dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fi(e,1),!n&&!Ut&&(dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},p0=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ns=function(e,t,n,r){var s=e._repeat,o=Mt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Mt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&ba(e,e._tTime=e._tDur*a),e.parent&&Ma(e),n||lr(e.parent,e),e},Wu=function(e){return e instanceof zt?lr(e):ns(e,e._dur)},m0={_start:0,endTime:js,totalDuration:js},rn=function i(e,t,n){var r=e.labels,s=e._recent||m0,o=e.duration()>=fn?s.endTime(!1):e._dur,a,l,c;return yt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Pt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},zs=function(e,t,n){var r=li(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Bt(l.vars.inherit)&&l.parent;o.immediateRender=Bt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ht(t[0],o,t[s+1])},Ni=function(e,t){return e||e===0?t(e):t},no=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!yt(e)||!(t=r0.exec(e))?"":t[1]},g0=function(e,t,n){return Ni(n,function(r){return no(e,t,r)})},Zl=[].slice,Zd=function(e,t){return e&&Hn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hn(e[0]))&&!e.nodeType&&e!==sn},_0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return yt(r)&&!t||Zd(r,1)?(s=n).push.apply(s,hn(r)):n.push(r)})||n},hn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):yt(e)&&!n&&(jl||!is())?Zl.call((t||Vc).querySelectorAll(e),0):Pt(e)?_0(e,n):Zd(e)?Zl.call(e,0):e?[e]:[]},Jl=function(e){return e=hn(e)[0]||Qo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hn(t,n.querySelectorAll?n:n===e?Qo("Invalid scope")||Vc.createElement("div"):e)}},Jd=function(e){return e.sort(function(){return .5-Math.random()})},Qd=function(e){if(rt(e))return e;var t=Hn(e)?e:{each:e},n=cr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return yt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,m,g){var d=(g||t).length,p=o[d],_,b,v,y,M,C,L,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,fn])[1],!w){for(L=-fn;L<(L=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=o[d]=[],_=l?Math.min(w,d)*u-.5:r%w,b=w===fn?0:l?d*f/w-.5:r/w|0,L=0,x=fn,C=0;C<d;C++)v=C%w-_,y=b-(C/w|0),p[C]=M=c?Math.abs(c==="y"?y:v):Id(v*v+y*y),M>L&&(L=M),M<x&&(x=M);r==="random"&&Jd(p),p.max=L-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(r==="edges"?-1:1),p.b=d<0?s-d:s,p.u=Ct(t.amount||t.each)||0,n=n&&d<0?ap(n):n}return d=(p[h]-p.min)/p.max||0,Mt(p.b+(n?n(d):d)*p.v)+p.u}},Ql=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Mt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(li(n)?0:Ct(n))}},ep=function(e,t){var n=Pt(e),r,s;return!n&&Hn(e)&&(r=n=e.radius||fn,e.values?(e=hn(e.values),(s=!li(e[0]))&&(r*=r)):e=Ql(e.increment)),Ni(t,n?rt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=fn,u=0,f=e.length,h,m;f--;)s?(h=e[f].x-a,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||li(o)?u:u+Ct(o)}:Ql(e))},tp=function(e,t,n,r){return Ni(Pt(e)?!t:n===!0?!!(n=0):!r,function(){return Pt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},x0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},v0=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},y0=function(e,t,n){return ip(e,t,0,1,n)},np=function(e,t,n){return Ni(n,function(r){return e[~~t(r)]})},M0=function i(e,t,n){var r=t-e;return Pt(e)?np(e,i(0,e.length),t):Ni(n,function(s){return(r+(s-e)%r)%r+e})},b0=function i(e,t,n){var r=t-e,s=r*2;return Pt(e)?np(e,i(0,e.length-1),t):Ni(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ys=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Ud:Xl),n+=e.substr(t,r-t)+tp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},ip=function(e,t,n,r,s){var o=t-e,a=r-n;return Ni(s,function(l){return n+((l-e)/o*a||0)})},S0=function i(e,t,n,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=yt(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Pt(e)&&!Pt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else r||(e=hr(Pt(e)?[]:{},e));if(!u){for(l in t)Xc.call(a,e,l,"get",t[l]);s=function(g){return Kc(g,a)||(o?e.p:e)}}}return Ni(n,s)},qu=function(e,t,n){var r=e.labels,s=fn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},dn=function(e,t,n){var r=e.vars,s=r[t],o=ct,a=e._ctx,l,c,u;if(!!s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Pi.length&&ea(),a&&(ct=a),u=l?s.apply(c,l):s.call(c),ct=o,u},As=function(e){return Fi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&dn(e,"onInterrupt"),e},Vr,w0=function(e){e=!e.name&&e.default||e;var t=e.name,n=rt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:js,render:Kc,add:Xc,kill:k0,modifier:B0,rawVars:0},o={targetTest:0,get:0,getSetter:$c,aliases:{},register:0};if(is(),e!==r){if(Xt[t])return;_n(r,_n(ta(e,s),o)),hr(r.prototype,hr(s,ta(e,o))),Xt[r.prop=t]=r,e.targetTest&&(Wo.push(r),Hc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vd(t,r),e.register&&e.register(Jt,r,Vt)},Ke=255,Ps={aqua:[0,Ke,Ke],lime:[0,Ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ke],navy:[0,0,128],white:[Ke,Ke,Ke],olive:[128,128,0],yellow:[Ke,Ke,0],orange:[Ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ke,0,0],pink:[Ke,192,203],cyan:[0,Ke,Ke],transparent:[Ke,Ke,Ke,0]},Ga=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ke+.5|0},rp=function(e,t,n){var r=e?li(e)?[e>>16,e>>8&Ke,e&Ke]:0:Ps.black,s,o,a,l,c,u,f,h,m,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ps[e])r=Ps[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ke,r&Ke,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ke,e&Ke]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Xl),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ga(l+1/3,s,o),r[1]=Ga(l,s,o),r[2]=Ga(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Nd),n&&r.length<4&&(r[3]=1),r}else r=e.match(Xl)||Ps.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Ke,o=r[1]/Ke,a=r[2]/Ke,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},sp=function(e){var t=[],n=[],r=-1;return e.split(Li).forEach(function(s){var o=s.match(kr)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Xu=function(e,t,n){var r="",s=(e+r).match(Li),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=rp(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=sp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Li,"1").split(kr),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Li),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Li=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ps)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),T0=/hsl[a]?\(/,op=function(e){var t=e.join(" "),n;if(Li.lastIndex=0,Li.test(t))return n=T0.test(t),e[1]=Xu(e[1],n),e[0]=Xu(e[0],n,sp(e[1])),!0},$s,Yt=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,m,g=function d(p){var _=i()-r,b=p===!0,v,y,M,C;if(_>e&&(n+=_-t),r+=_,M=r-n,v=M-o,(v>0||b)&&(C=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,o+=v+(v>=s?4:s-v),y=1),b||(l=c(d)),y)for(m=0;m<a.length;m++)a[m](M,h,C,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Bd&&(!jl&&Fd()&&(sn=jl=window,Vc=sn.document||{},Zt.gsap=Jt,(sn.gsapVersions||(sn.gsapVersions=[])).push(Jt.version),kd(Jo||sn.GreenSockGlobals||!sn.gsap&&sn||{}),u=sn.requestAnimationFrame),l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},$s=1,g(2))},sleep:function(){(u?sn.cancelAnimationFrame:clearTimeout)(l),$s=0,c=js},lagSmoothing:function(p,_){e=p||1/Ye,t=Math.min(_,e,0)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,_,b){var v=_?function(y,M,C,L){p(y,M,C,L),f.remove(v)}:p;return f.remove(p),a[b?"unshift":"push"](v),is(),v},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},f}(),is=function(){return!$s&&Yt.wake()},Be={},E0=/^[\d.\-M][\d.\-,\s]/,C0=/["']/g,A0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(C0,"").trim():+c,r=l.substr(a+1).trim();return t},P0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},L0=function(e){var t=(e+"").split("("),n=Be[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[A0(t[1])]:P0(e).split(",").map(qd)):Be._CE&&E0.test(e)?Be._CE("",e):n},ap=function(e){return function(t){return 1-e(1-t)}},lp=function i(e,t){for(var n=e._first,r;n;)n instanceof zt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},cr=function(e,t){return e&&(rt(e)?e:Be[e]||L0(e))||t},_r=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return kt(e,function(a){Be[a]=Zt[a]=s,Be[o=a.toLowerCase()]=n;for(var l in s)Be[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Be[a+"."+l]=s[l]}),s},cp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ha=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/ql*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*i0((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:cp(a);return s=ql/s,l.config=function(c,u){return i(e,c,u)},l},Wa=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:cp(n);return r.config=function(s){return i(e,s)},r};kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;_r(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Be.Linear.easeNone=Be.none=Be.Linear.easeIn;_r("Elastic",Ha("in"),Ha("out"),Ha());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};_r("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);_r("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});_r("Circ",function(i){return-(Id(1-i*i)-1)});_r("Sine",function(i){return i===1?1:-n0(i*e0)+1});_r("Back",Wa("in"),Wa("out"),Wa());Be.SteppedEase=Be.steps=Zt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ye;return function(a){return((r*no(0,o,a)|0)+s)*n}}};es.ease=Be["quad.out"];kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Wc+=i+","+i+"Params,"});var up=function(e,t){this.id=t0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Hd,this.set=t?t.getSetter:$c},rs=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ns(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),$s||Yt.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ba(this,n),!s._dp||s.parent||Yd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wd(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hu(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hu(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ts(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?na(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ye?0:this._rts,this.totalTime(no(-this._delay,this._tDur,r),!0),Ma(this),u0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&kn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Bt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?na(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=o0);var r=Ut;return Ut=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Wu(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(rn(this,n),Bt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Bt(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ye)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=rt(n)?n:Xd,a=function(){var c=r.then;r.then=null,rt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){As(this)},i}();_n(rs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var zt=function(i){Dd(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Bt(n.sortChildren),et&&kn(n.parent||et,Jn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&$d(Jn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return zs(0,arguments,this),this},t.from=function(r,s,o){return zs(1,arguments,this),this},t.fromTo=function(r,s,o,a){return zs(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ns(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ht(r,s,rn(this,o),1),this},t.call=function(r,s,o){return kn(this,ht.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ht(r,o,rn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Ns(o).immediateRender=Bt(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Ns(a).immediateRender=Bt(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Mt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,m,g,d,p,_,b,v,y,M,C,L;if(this!==et&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,y=this._start,v=this._ts,_=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=Mt(u%p),u===l?(d=this._repeat,h=c):(d=~~(u/p),d&&d===u/p&&(h=c,d--),h>c&&(h=c)),M=ts(this._tTime,p),!a&&this._tTime&&M!==d&&(M=d),C&&d&1&&(h=c-h,L=1),d!==M&&!this._lock){var x=C&&M&1,w=x===(C&&d&1);if(d<M&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(L?0:Mt(d*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;lp(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=p0(this,Mt(a),Mt(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&(dn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,o),h!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-Ye);break}}m=g}else{m=this._last;for(var R=r<0?r:h;m;){if(g=m._prev,(m._act||R<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(R-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(R-m._start)*m._ts,s,o||Ut&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=R?-Ye:Ye);break}}m=g}}if(b&&!s&&(this.pause(),b.render(h>=a?0:-Ye)._zTime=h>=a?1:-1,this._ts))return this._start=y,Ma(this),this.render(r,s,o);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(dn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(li(s)||(s=rn(this,s,r)),!(r instanceof rs)){if(Pt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(yt(r))return this.addLabel(r,s);if(rt(r))r=ht.delayedCall(0,r);else return this}return this!==r?kn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ht?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return yt(r)?this.removeLabel(r):rt(r)?this.killTweensOf(r):(ya(this,r),r===this._recent&&(this._recent=this._last),lr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(Yt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=rn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=ht.delayedCall(0,s||js,o);return a.data="isPause",this._hasPause=1,kn(this,a,rn(this,r))},t.removePause=function(r){var s=this._first;for(r=rn(this,r);s;)s._start===r&&s.data==="isPause"&&Fi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Si!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=hn(r),l=this._first,c=li(s),u;l;)l instanceof ht?a0(l._targets,a)&&(c?(!Si||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=rn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,g=ht.to(o,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ye,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&ns(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,_n({startAt:{time:rn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),qu(this,rn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),qu(this,rn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ye)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return lr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),lr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=fn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,kn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ns(o,o===et&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(et._ts&&(Wd(et,na(r,et)),Gd=Yt.frame),Yt.frame>=Vu){Vu+=$t.autoSleep||120;var s=et._first;if((!s||!s._ts)&&$t.autoSleep&&Yt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yt.sleep()}}},e}(rs);_n(zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var R0=function(e,t,n,r,s,o,a){var l=new Vt(this._pt,e,t,0,1,gp,null,s),c=0,u=0,f,h,m,g,d,p,_,b;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=Ys(r)),o&&(b=[n,r],o(b,e,t),n=b[0],r=b[1]),h=n.match(ka)||[];f=ka.exec(r);)g=f[0],d=r.substring(c,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?jr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=ka.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(zd.test(r)||_)&&(l.e=0),this._pt=l,l},Xc=function(e,t,n,r,s,o,a,l,c,u){rt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:rt(f)?c?e[t.indexOf("set")||!rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=rt(f)?c?N0:pp:Yc,g;if(yt(r)&&(~r.indexOf("random(")&&(r=Ys(r)),r.charAt(1)==="="&&(g=jr(h,r)+(Ct(h)||0),(g||g===0)&&(r=g))),!u||h!==r||ec)return!isNaN(h*r)&&r!==""?(g=new Vt(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?U0:mp,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Gc(t,r),R0.call(this,e,t,h,r,m,l||$t.stringFilter,c))},D0=function(e,t,n,r,s){if(rt(e)&&(e=Us(e,s,t,n,r)),!Hn(e)||e.style&&e.nodeType||Pt(e)||Od(e))return yt(e)?Us(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Us(e[a],s,t,n,r);return o},fp=function(e,t,n,r,s,o){var a,l,c,u;if(Xt[e]&&(a=new Xt[e]).init(s,a.rawVars?t[e]:D0(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Vt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Vr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Si,ec,jc=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,f=r.callbackScope,h=r.runBackwards,m=r.yoyoEase,g=r.keyframes,d=r.autoRevert,p=e._dur,_=e._startAt,b=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:b,M=e._overwrite==="auto"&&!Bc,C=e.timeline,L,x,w,R,G,Z,N,D,X,j,Y,V,z;if(C&&(!g||!s)&&(s="none"),e._ease=cr(s,es.ease),e._yEase=m?ap(cr(m===!0?s:m,es.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!C&&!!r.runBackwards,!C||g&&!r.stagger){if(D=b[0]?ar(b[0]).harness:0,V=D&&r[D.prop],L=ta(r,Hc),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?Ho:s0),_._lazy=0),o){if(Fi(e._startAt=ht.set(b,_n({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:Bt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,t<0&&(Ut||!a&&!d)&&e._startAt.revert(Ho),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(a=!1),w=_n({overwrite:!1,data:"isFromStart",lazy:a&&Bt(l),immediateRender:a,stagger:0,parent:v},L),V&&(w[D.prop]=V),Fi(e._startAt=ht.set(b,w)),e._startAt._dp=0,t<0&&(Ut?e._startAt.revert(Ho):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ye,Ye);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Bt(l)||l&&!p,x=0;x<b.length;x++){if(G=b[x],N=G._gsap||qc(b)[x]._gsap,e._ptLookup[x]=j={},Yl[N.id]&&Pi.length&&ea(),Y=y===b?x:y.indexOf(G),D&&(X=new D).init(G,V||L,e,Y,y)!==!1&&(e._pt=R=new Vt(e._pt,G,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(W){j[W]=R}),X.priority&&(Z=1)),!D||V)for(w in L)Xt[w]&&(X=fp(w,L,e,Y,G,y))?X.priority&&(Z=1):j[w]=R=Xc.call(e,G,w,"get",L[w],Y,y,0,r.stringFilter);e._op&&e._op[x]&&e.kill(G,e._op[x]),M&&e._pt&&(Si=e,et.killTweensOf(G,j,e.globalTime(t)),z=!e.parent,Si=0),e._pt&&l&&(Yl[N.id]=1)}Z&&_p(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,g&&t<=0&&C.render(fn,!0,!0)},I0=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ec=1,e.vars[t]="+=0",jc(e,a),ec=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=st(n)+Ct(u.e)),u.b&&(u.b=c.s+Ct(u.b))},F0=function(e,t){var n=e[0]?ar(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=hr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},O0=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Pt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Us=function(e,t,n,r,s){return rt(e)?e.call(t,n,r,s):yt(e)&&~e.indexOf("random(")?Ys(e):e},hp=Wc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dp={};kt(hp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return dp[i]=1});var ht=function(i){Dd(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Ns(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,b=r.parent||et,v=(Pt(n)||Od(n)?li(n[0]):"length"in r)?[n]:hn(n),y,M,C,L,x,w,R,G;if(a._targets=v.length?qc(v):Qo("GSAP target "+n+" not found. https://greensock.com",!$t.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||h||mo(c)||mo(u)){if(r=a.vars,y=a.timeline=new zt({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:v}),y.kill(),y.parent=y._dp=Jn(a),y._start=0,h||mo(c)||mo(u)){if(L=v.length,R=h&&Qd(h),Hn(h))for(x in h)~hp.indexOf(x)&&(G||(G={}),G[x]=h[x]);for(M=0;M<L;M++)C=ta(r,dp),C.stagger=0,_&&(C.yoyoEase=_),G&&hr(C,G),w=v[M],C.duration=+Us(c,Jn(a),M,w,v),C.delay=(+Us(u,Jn(a),M,w,v)||0)-a._delay,!h&&L===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),y.to(w,C,R?R(M,w,v):0),y._ease=Be.none;y.duration()?c=u=0:a.timeline=0}else if(g){Ns(_n(y.vars.defaults,{ease:"none"})),y._ease=cr(g.ease||r.ease||"none");var Z=0,N,D,X;if(Pt(g))g.forEach(function(j){return y.to(v,j,">")}),y.duration();else{C={};for(x in g)x==="ease"||x==="easeEach"||O0(x,g[x],C,g.easeEach);for(x in C)for(N=C[x].sort(function(j,Y){return j.t-Y.t}),Z=0,M=0;M<N.length;M++)D=N[M],X={ease:D.e,duration:(D.t-(M?N[M-1].t:0))/100*c},X[x]=D.v,y.to(v,X,Z),Z+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return m===!0&&!Bc&&(Si=Jn(a),et.killTweensOf(v),Si=0),kn(b,Jn(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Mt(b._time)&&Bt(f)&&f0(Jn(a))&&b.data!=="nested")&&(a._tTime=-Ye,a.render(Math.max(0,-u)||0)),p&&$d(Jn(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Ye&&!u?l:r<Ye?0:r,h,m,g,d,p,_,b,v,y;if(!c)d0(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+r,s,o);if(h=Mt(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,h=c-h),p=ts(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=f,this;g!==p&&(v&&this._yEase&&lp(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Mt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Kd(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(h/c),this._from&&(this.ratio=b=1-b),h&&!a&&!s&&(dn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;v&&v.render(r<0?r:!h&&_?-Ye:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&$l(this,r,s,o),dn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&$l(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Fi(this,1),!s&&!(u&&!a)&&(f||a||_)&&(dn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){$s||Yt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||jc(this,l),c=this._ease(l/this._dur),I0(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(ba(this,0),this.parent||jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?As(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Si&&Si.vars.overwrite!==!0)._first||As(this),this.parent&&o!==this.timeline.totalDuration()&&ns(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?hn(r):a,c=this._ptLookup,u=this._pt,f,h,m,g,d,p,_;if((!s||s==="all")&&c0(a,l))return s==="all"&&(this._pt=0),As(this);for(f=this._op=this._op||[],s!=="all"&&(yt(s)&&(d={},kt(s,function(b){return d[b]=1}),s=d),s=F0(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],s==="all"?(f[_]=s,g=h,m={}):(m=f[_]=f[_]||{},g=s);for(d in g)p=h&&h[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&ya(this,p,"_pt"),delete h[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&As(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return zs(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return zs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return et.killTweensOf(r,s,o)},e}(rs);_n(ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kt("staggerTo,staggerFrom,staggerFromTo",function(i){ht[i]=function(){var e=new zt,t=Zl.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Yc=function(e,t,n){return e[t]=n},pp=function(e,t,n){return e[t](n)},N0=function(e,t,n,r){return e[t](r.fp,n)},z0=function(e,t,n){return e.setAttribute(t,n)},$c=function(e,t){return rt(e[t])?pp:kc(e[t])&&e.setAttribute?z0:Yc},mp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},U0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Kc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},B0=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},k0=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ya(this,t,"_pt"):t.dep||(n=1),t=r;return!n},V0=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},_p=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Vt=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||mp,this.d=l||this,this.set=c||Yc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=V0,this.m=n,this.mt=s,this.tween=r},i}();kt(Wc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Hc[i]=1});Zt.TweenMax=Zt.TweenLite=ht;Zt.TimelineLite=Zt.TimelineMax=zt;et=new zt({sortChildren:!1,defaults:es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$t.stringFilter=op;var ss=[],qo={},G0=[],ju=0,qa=function(e){return(qo[e]||G0).map(function(t){return t()})},tc=function(){var e=Date.now(),t=[];e-ju>2&&(qa("matchMediaInit"),ss.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=sn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),qa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),ju=e,qa("matchMedia"))},xp=function(){function i(t,n){this.selector=n&&Jl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){rt(n)&&(s=r,r=n,n=rt);var o=this,a=function(){var c=ct,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Jl(s)),ct=o,f=r.apply(o,arguments),rt(f)&&o._r.push(f),ct=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===rt?a(o):n?o[n]=a:a},e.ignore=function(n){var r=ct;ct=null,n(this),ct=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof ht&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof rs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=ss.indexOf(this);~a&&ss.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),H0=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){Hn(n)||(n={matches:n});var o=new xp(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=sn.matchMedia(n[c]),l&&(ss.indexOf(o)<0&&ss.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(tc):l.addEventListener("change",tc)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ia={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return w0(r)})},timeline:function(e){return new zt(e)},getTweensOf:function(e,t){return et.getTweensOf(e,t)},getProperty:function(e,t,n,r){yt(e)&&(e=hn(e)[0]);var s=ar(e||{}).get,o=n?Xd:qd;return n==="native"&&(n=""),e&&(t?o((Xt[t]&&Xt[t].get||s)(e,t,n,r)):function(a,l,c){return o((Xt[a]&&Xt[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=hn(e),e.length>1){var r=e.map(function(u){return Jt.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=Xt[t],a=ar(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Vr._pt=0,f.init(e,n?u+n:u,Vr,0,[e]),f.render(1,f),Vr._pt&&Kc(1,Vr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Jt.to(e,hr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return et.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=cr(e.ease,es.ease)),Gu(es,e||{})},config:function(e){return Gu($t,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Xt[a]&&!Zt[a]&&Qo(t+" effect requires "+a+" plugin.")}),Va[t]=function(a,l,c){return n(hn(a),_n(l||{},s),c)},o&&(zt.prototype[t]=function(a,l,c){return this.add(Va[t](a,Hn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Be[e]=cr(t)},parseEase:function(e,t){return arguments.length?cr(e,t):Be},getById:function(e){return et.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new zt(e),r,s;for(n.smoothChildTiming=Bt(e.smoothChildTiming),et.remove(n),n._dp=0,n._time=n._tTime=et._time,r=et._first;r;)s=r._next,(t||!(!r._dur&&r instanceof ht&&r.vars.onComplete===r._targets[0]))&&kn(n,r,r._start-r._delay),r=s;return kn(et,n,0),n},context:function(e,t){return e?new xp(e,t):ct},matchMedia:function(e){return new H0(e)},matchMediaRefresh:function(){return ss.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||tc()},addEventListener:function(e,t){var n=qo[e]||(qo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=qo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:M0,wrapYoyo:b0,distribute:Qd,random:tp,snap:ep,normalize:y0,getUnit:Ct,clamp:g0,splitColor:rp,toArray:hn,selector:Jl,mapRange:ip,pipe:x0,unitize:v0,interpolate:S0,shuffle:Jd},install:kd,effects:Va,ticker:Yt,updateRoot:zt.updateRoot,plugins:Xt,globalTimeline:et,core:{PropTween:Vt,globals:Vd,Tween:ht,Timeline:zt,Animation:rs,getCache:ar,_removeLinkedListItem:ya,reverting:function(){return Ut},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return Bc=e}}};kt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ia[i]=ht[i]});Yt.add(zt.updateRoot);Vr=ia.to({},{duration:0});var W0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},q0=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=W0(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Xa=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(yt(s)&&(l={},kt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}q0(a,s)}}}},Jt=ia.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Xa("roundProps",Ql),Xa("modifiers"),Xa("snap",ep))||ia;ht.version=zt.version=Jt.version="3.11.3";Bd=1;Fd()&&is();Be.Power0;Be.Power1;Be.Power2;Be.Power3;Be.Power4;Be.Linear;Be.Quad;Be.Cubic;Be.Quart;Be.Quint;Be.Strong;Be.Elastic;Be.Back;Be.SteppedEase;Be.Bounce;Be.Sine;Be.Expo;Be.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yu,wi,Yr,Zc,tr,$u,Jc,X0=function(){return typeof window<"u"},ci={},Yi=180/Math.PI,$r=Math.PI/180,Mr=Math.atan2,Ku=1e8,Qc=/([A-Z])/g,j0=/(left|right|width|margin|padding|x)/i,Y0=/[\s,\(]\S/,ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},K0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Z0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},yp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},J0=function(e,t,n){return e.style[t]=n},Q0=function(e,t,n){return e.style.setProperty(t,n)},ex=function(e,t,n){return e._gsap[t]=n},tx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},nx=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ix=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},tt="transform",Ln=tt+"Origin",rx=function(e,t){var n=this,r=this.target,s=r.style;if(e in ci){if(this.tfm=this.tfm||{},e!=="transform"&&(e=ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ei(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:ei(r,e)),this.props.indexOf(tt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ln,t,"")),e=tt}(s||t)&&this.props.push(e,t,s[e])},Mp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sx=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(Qc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Jc(),s&&!s.isStart&&!n[tt]&&(Mp(n),r.uncache=1)}},bp=function(e,t){var n={target:e,props:[],revert:sx,save:rx};return t&&t.split(",").forEach(function(r){return n.save(r)}),n},Sp,ic=function(e,t){var n=wi.createElementNS?wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wi.createElement(e);return n.style?n:wi.createElement(e)},Vn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Qc,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,os(t)||t,1)||""},Zu="O,Moz,ms,Ms,Webkit".split(","),os=function(e,t,n){var r=t||tr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Zu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Zu[o]:"")+e},rc=function(){X0()&&window.document&&(Yu=window,wi=Yu.document,Yr=wi.documentElement,tr=ic("div")||{style:{}},ic("div"),tt=os(tt),Ln=tt+"Origin",tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sp=!!os("perspective"),Jc=Jt.core.reverting,Zc=1)},ja=function i(e){var t=ic("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Yr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Yr.removeChild(t),this.style.cssText=s,o},Ju=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},wp=function(e){var t;try{t=e.getBBox()}catch{t=ja.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ja||(t=ja.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ju(e,["x","cx","x1"])||0,y:+Ju(e,["y","cy","y1"])||0,width:0,height:0}:t},Tp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&wp(e))},Ks=function(e,t){if(t){var n=e.style;t in ci&&t!==Ln&&(t=tt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Qc,"-$1").toLowerCase())):n.removeAttribute(t)}},Ti=function(e,t,n,r,s,o){var a=new Vt(e._pt,t,n,0,1,o?yp:vp);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Qu={deg:1,rad:1,turn:1},ox={grid:1,flex:1},Oi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=tr.style,l=j0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",m=r==="%",g,d,p,_;return r===o||!s||Qu[r]||Qu[o]?s:(o!=="px"&&!h&&(s=i(e,t,n,"px")),_=e.getCTM&&Tp(e),(m||o==="%")&&(ci[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],st(m?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:r),d=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===wi||!d.appendChild)&&(d=wi.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Yt.time&&!p.uncache?st(s/p.width*f):((m||o==="%")&&!ox[Vn(d,"display")]&&(a.position=Vn(e,"position")),d===e&&(a.position="static"),d.appendChild(tr),g=tr[u],d.removeChild(tr),a.position="absolute",l&&m&&(p=ar(d),p.time=Yt.time,p.width=d[u]),st(h?g*s/f:g&&s?f/g*s:0))))},ei=function(e,t,n,r){var s;return Zc||rc(),t in ni&&t!=="transform"&&(t=ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),ci[t]&&t!=="transform"?(s=Js(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:sa(Vn(e,Ln))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ra[t]&&ra[t](e,t,n)||Vn(e,t)||Hd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Oi(e,t,s,n)+n:s},ax=function(e,t,n,r){if(!n||n==="none"){var s=os(t,e,1),o=s&&Vn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Vn(e,"borderTopColor"))}var a=new Vt(this._pt,e.style,t,0,1,gp),l=0,c=0,u,f,h,m,g,d,p,_,b,v,y,M;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=Vn(e,t)||r,e.style[t]=n),u=[n,r],op(u),n=u[0],r=u[1],h=n.match(kr)||[],M=r.match(kr)||[],M.length){for(;f=kr.exec(r);)p=f[0],b=r.substring(l,f.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(d=h[c++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=jr(m,p)+y),_=parseFloat(p),v=p.substr((_+"").length),l=kr.lastIndex-v.length,v||(v=v||$t.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(m=Oi(e,t,d,v)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?yp:vp;return zd.test(r)&&(a.e=0),this._pt=a,a},ef={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lx=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=ef[n]||n,t[1]=ef[r]||r,t.join(" ")},cx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ci[a]&&(l=1,a=a==="transformOrigin"?Ln:tt),Ks(n,a);l&&(Ks(n,tt),o&&(o.svg&&n.removeAttribute("transform"),Js(n,1),o.uncache=1,Mp(r)))}},ra={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Vt(e._pt,t,n,0,0,cx);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Zs=[1,0,0,1,0,0],Ep={},Cp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},tf=function(e){var t=Vn(e,tt);return Cp(t)?Zs:t.substr(7).match(Nd).map(st)},eu=function(e,t){var n=e._gsap||ar(e),r=e.style,s=tf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zs:s):(s===Zs&&!e.offsetParent&&e!==Yr&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Yr.appendChild(e)),s=tf(e),l?r.display=l:Ks(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Yr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sc=function(e,t,n,r,s,o){var a=e._gsap,l=s||eu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],b=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,C,L,x,w;n?l!==Zs&&(L=m*p-g*d)&&(x=y*(p/L)+M*(-d/L)+(d*b-p*_)/L,w=y*(-g/L)+M*(m/L)-(m*b-g*_)/L,y=x,M=w):(C=wp(e),y=C.x+(~v[0].indexOf("%")?y/100*C.width:y),M=C.y+(~(v[1]||v[0]).indexOf("%")?M/100*C.height:M)),r||r!==!1&&a.smooth?(_=y-c,b=M-u,a.xOffset=f+(_*m+b*d)-_,a.yOffset=h+(_*g+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Ln]="0px 0px",o&&(Ti(o,a,"xOrigin",c,y),Ti(o,a,"yOrigin",u,M),Ti(o,a,"xOffset",f,a.xOffset),Ti(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Js=function(e,t){var n=e._gsap||new up(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Vn(e,Ln)||"0",u,f,h,m,g,d,p,_,b,v,y,M,C,L,x,w,R,G,Z,N,D,X,j,Y,V,z,W,le,se,ue,ye,k;return u=f=h=d=p=_=b=v=y=0,m=g=1,n.svg=!!(e.getCTM&&Tp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[tt]!=="none"?l[tt]:"")),r.scale=r.rotate=r.translate="none"),L=eu(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),sc(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,L)),M=n.xOrigin||0,C=n.yOrigin||0,L!==Zs&&(G=L[0],Z=L[1],N=L[2],D=L[3],u=X=L[4],f=j=L[5],L.length===6?(m=Math.sqrt(G*G+Z*Z),g=Math.sqrt(D*D+N*N),d=G||Z?Mr(Z,G)*Yi:0,b=N||D?Mr(N,D)*Yi+d:0,b&&(g*=Math.abs(Math.cos(b*$r))),n.svg&&(u-=M-(M*G+C*N),f-=C-(M*Z+C*D))):(k=L[6],ue=L[7],W=L[8],le=L[9],se=L[10],ye=L[11],u=L[12],f=L[13],h=L[14],x=Mr(k,se),p=x*Yi,x&&(w=Math.cos(-x),R=Math.sin(-x),Y=X*w+W*R,V=j*w+le*R,z=k*w+se*R,W=X*-R+W*w,le=j*-R+le*w,se=k*-R+se*w,ye=ue*-R+ye*w,X=Y,j=V,k=z),x=Mr(-N,se),_=x*Yi,x&&(w=Math.cos(-x),R=Math.sin(-x),Y=G*w-W*R,V=Z*w-le*R,z=N*w-se*R,ye=D*R+ye*w,G=Y,Z=V,N=z),x=Mr(Z,G),d=x*Yi,x&&(w=Math.cos(x),R=Math.sin(x),Y=G*w+Z*R,V=X*w+j*R,Z=Z*w-G*R,j=j*w-X*R,G=Y,X=V),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=st(Math.sqrt(G*G+Z*Z+N*N)),g=st(Math.sqrt(j*j+k*k)),x=Mr(X,j),b=Math.abs(x)>2e-4?x*Yi:0,y=ye?1/(ye<0?-ye:ye):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Cp(Vn(e,tt)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(m*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=st(m),n.scaleY=st(g),n.rotation=st(d)+a,n.rotationX=st(p)+a,n.rotationY=st(_)+a,n.skewX=b+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Ln]=sa(c)),n.xOffset=n.yOffset=0,n.force3D=$t.force3D,n.renderTransform=n.svg?fx:Sp?Ap:ux,n.uncache=0,n},sa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ya=function(e,t,n){var r=Ct(t);return st(parseFloat(t)+parseFloat(Oi(e,"x",n+"px",r)))+r},ux=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ap(e,t)},Gi="0deg",Ms="0px",Hi=") ",Ap=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,b=n.target,v=n.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(v&&(f!==Gi||u!==Gi)){var C=parseFloat(u)*$r,L=Math.sin(C),x=Math.cos(C),w;C=parseFloat(f)*$r,w=Math.cos(C),o=Ya(b,o,L*w*-v),a=Ya(b,a,-Math.sin(C)*-v),l=Ya(b,l,x*w*-v+v)}p!==Ms&&(y+="perspective("+p+Hi),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(M||o!==Ms||a!==Ms||l!==Ms)&&(y+=l!==Ms||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Hi),c!==Gi&&(y+="rotate("+c+Hi),u!==Gi&&(y+="rotateY("+u+Hi),f!==Gi&&(y+="rotateX("+f+Hi),(h!==Gi||m!==Gi)&&(y+="skew("+h+", "+m+Hi),(g!==1||d!==1)&&(y+="scale("+g+", "+d+Hi),b.style[tt]=y||"translate(0, 0)"},fx=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,b=n.forceCSS,v=parseFloat(o),y=parseFloat(a),M,C,L,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$r,c*=$r,M=Math.cos(l)*f,C=Math.sin(l)*f,L=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=$r,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,C*=w)),M=st(M),C=st(C),L=st(L),x=st(x)):(M=f,x=h,C=L=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Oi(m,"x",o,"px"),y=Oi(m,"y",a,"px")),(g||d||p||_)&&(v=st(v+g-(g*M+d*L)+p),y=st(y+d-(g*C+d*x)+_)),(r||s)&&(w=m.getBBox(),v=st(v+r/100*w.width),y=st(y+s/100*w.height)),w="matrix("+M+","+C+","+L+","+x+","+v+","+y+")",m.setAttribute("transform",w),b&&(m.style[tt]=w)},hx=function(e,t,n,r,s){var o=360,a=yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Yi:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Ku)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Ku)%o-~~(c/o)*o)),e._pt=h=new Vt(e._pt,t,n,r,c,$0),h.e=u,h.u="deg",e._props.push(n),h},nf=function(e,t){for(var n in t)e[n]=t[n];return e},dx=function(e,t,n){var r=nf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,m,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[tt]=t,a=Js(n,1),Ks(n,tt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[tt],o[tt]=t,a=Js(n,1),o[tt]=c);for(l in ci)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=Ct(c),g=Ct(u),f=m!==g?Oi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Vt(e._pt,a,l,f,h-f,nc),e._pt.u=g||0,e._props.push(l));nf(a,r)};kt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});ra[e>1?"border"+i:i]=function(a,l,c,u,f){var h,m;if(arguments.length<4)return h=o.map(function(g){return ei(a,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},o.forEach(function(g,d){return m[g]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,m,f)}});var Pp={name:"css",register:rc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,m,g,d,p,_,b,v,y,M,C,L,x;Zc||rc(),this.styles=this.styles||bp(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Xt[d]&&fp(d,t,n,r,e,s)))){if(m=typeof u,g=ra[d],m==="function"&&(u=u.call(n,r,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ys(u)),g)g(this,e,d,u,n)&&(L=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Li.lastIndex=0,Li.test(c)||(p=Ct(c),_=Ct(u)),_?p!==_&&(c=Oi(e,d,c,_)+_):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,d),o.push(d),x.push(d,0,a[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,r,e,s):l[d],yt(c)&&~c.indexOf("random(")&&(c=Ys(c)),Ct(c+"")||(c+=$t.units[d]||Ct(ei(e,d))||""),(c+"").charAt(1)==="="&&(c=ei(e,d))):c=ei(e,d),h=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),d in ni&&(d==="autoAlpha"&&(h===1&&ei(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,a.visibility),Ti(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=ni[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in ci,v){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Js(e,t.parseTransform),C=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Vt(this._pt,a,tt,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new Vt(this._pt,M,"scaleY",h,(b?jr(h,b+f):f)-h||0,nc),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(Ln,0,a[Ln]),u=lx(u),M.svg?sc(e,u,0,C,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Ti(this,M,"zOrigin",M.zOrigin,_),Ti(this,a,d,sa(c),sa(u)));continue}else if(d==="svgOrigin"){sc(e,u,1,C,0,this);continue}else if(d in Ep){hx(this,M,d,h,b?jr(h,b+u):u);continue}else if(d==="smoothOrigin"){Ti(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){dx(this,u,e);continue}}else d in a||(d=os(d)||d);if(v||(f||f===0)&&(h||h===0)&&!Y0.test(u)&&d in a)p=(c+"").substr((h+"").length),f||(f=0),_=Ct(u)||(d in $t.units?$t.units[d]:p),p!==_&&(h=Oi(e,d,c,_)),this._pt=new Vt(this._pt,v?M:a,d,h,(b?jr(h,b+f):f)-h,!v&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?Z0:nc),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=K0);else if(d in a)ax.call(this,e,d,c,b?b+u:u);else if(d in e)this.add(e,d,c||e[d],b?b+u:u,r,s);else{Gc(d,u);continue}v||(d in a?x.push(d,0,a[d]):x.push(d,1,c||e[d])),o.push(d)}}L&&_p(this)},render:function(e,t){if(t.tween._time||!Jc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ei,aliases:ni,getSetter:function(e,t,n){var r=ni[t];return r&&r.indexOf(",")<0&&(t=r),t in ci&&t!==Ln&&(e._gsap.x||ei(e,"x"))?n&&$u===n?t==="scale"?tx:ex:($u=n||{})&&(t==="scale"?nx:ix):e.style&&!kc(e.style[t])?J0:~t.indexOf("-")?Q0:$c(e,t)},core:{_removeProperty:Ks,_getMatrix:eu}};Jt.utils.checkPrefix=os;Jt.core.getStyleSaver=bp;(function(i,e,t,n){var r=kt(i+","+e+","+t,function(s){ci[s]=1});kt(e,function(s){$t.units[s]="deg",Ep[s]=1}),ni[r[13]]=i+","+e,kt(n,function(s){var o=s.split(":");ni[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){$t.units[i]="px"});Jt.registerPlugin(Pp);var Lp=Jt.registerPlugin(Pp)||Jt;Lp.core.Tween;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="146",px=0,rf=1,mx=2,Rp=1,gx=2,Ls=3,as=0,gn=1,Ei=2,Ri=0,Kr=1,sf=2,of=3,af=4,_x=5,zr=100,xx=101,vx=102,lf=103,cf=104,yx=200,Mx=201,bx=202,Sx=203,Dp=204,Ip=205,wx=206,Tx=207,Ex=208,Cx=209,Ax=210,Px=0,Lx=1,Rx=2,oc=3,Dx=4,Ix=5,Fx=6,Ox=7,Fp=0,Nx=1,zx=2,si=0,Ux=1,Bx=2,kx=3,Vx=4,Gx=5,Op=300,ls=301,cs=302,ac=303,lc=304,Sa=306,cc=1e3,Tn=1001,uc=1002,Nt=1003,uf=1004,ff=1005,on=1006,Hx=1007,wa=1008,dr=1009,Wx=1010,qx=1011,Np=1012,Xx=1013,nr=1014,ir=1015,Qs=1016,jx=1017,Yx=1018,Zr=1020,$x=1021,Kx=1022,En=1023,Zx=1024,Jx=1025,ur=1026,us=1027,Qx=1028,ev=1029,tv=1030,nv=1031,iv=1033,$a=33776,Ka=33777,Za=33778,Ja=33779,hf=35840,df=35841,pf=35842,mf=35843,rv=36196,gf=37492,_f=37496,xf=37808,vf=37809,yf=37810,Mf=37811,bf=37812,Sf=37813,wf=37814,Tf=37815,Ef=37816,Cf=37817,Af=37818,Pf=37819,Lf=37820,Rf=37821,Df=36492,pr=3e3,it=3001,sv=3200,ov=3201,zp=0,av=1,Qn="srgb",rr="srgb-linear",Qa=7680,lv=519,If=35044,Ff="300 es",fc=1035;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=Math.PI/180,Of=180/Math.PI;function io(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function cv(i,e){return(i%e+e)%e}function tl(i,e,t){return(1-t)*i+t*e}function Nf(i){return(i&i-1)===0&&i!==0}function hc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function go(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pn{constructor(){pn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],d=r[0],p=r[3],_=r[6],b=r[1],v=r[4],y=r[7],M=r[2],C=r[5],L=r[8];return s[0]=o*d+a*b+l*M,s[3]=o*p+a*v+l*C,s[6]=o*_+a*y+l*L,s[1]=c*d+u*b+f*M,s[4]=c*p+u*v+f*C,s[7]=c*_+u*y+f*L,s[2]=h*d+m*b+g*M,s[5]=h*p+m*v+g*C,s[8]=h*_+m*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(r*c-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=h*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Up(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const nl={[Qn]:{[rr]:fr},[rr]:{[Qn]:Xo}},vn={legacyMode:!0,get workingColorSpace(){return rr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(nl[e]&&nl[e][t]!==void 0){const n=nl[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},yn={h:0,s:0,l:0},_o={h:0,s:0,l:0};function il(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function xo(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=rr){return this.r=e,this.g=t,this.b=n,vn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=rr){if(e=cv(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=il(o,s,e+1/3),this.g=il(o,s,e),this.b=il(o,s,e-1/3)}return vn.toWorkingColorSpace(this,r),this}setStyle(e,t=Qn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,vn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,vn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,vn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,vn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Qn){const n=Bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return vn.fromWorkingColorSpace(xo(this,ft),e),jt(ft.r*255,0,255)<<16^jt(ft.g*255,0,255)<<8^jt(ft.b*255,0,255)<<0}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rr){vn.fromWorkingColorSpace(xo(this,ft),t);const n=ft.r,r=ft.g,s=ft.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rr){return vn.fromWorkingColorSpace(xo(this,ft),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Qn){return vn.fromWorkingColorSpace(xo(this,ft),e),e!==Qn?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${ft.r*255|0},${ft.g*255|0},${ft.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(yn),yn.h+=e,yn.s+=t,yn.l+=n,this.setHSL(yn.h,yn.s,yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(_o);const n=tl(yn.h,_o.h,t),r=tl(yn.s,_o.s,t),s=tl(yn.l,_o.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ze.NAMES=Bp;let br;class kp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=oa("canvas")),br.width=e.width,br.height=e.height;const n=br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vp{constructor(e=null){this.isSource=!0,this.uuid=io(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rl(r[o].image)):s.push(rl(r[o]))}else s=rl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uv=0;class Dn extends _s{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=Tn,r=Tn,s=on,o=wa,a=En,l=dr,c=1,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=io(),this.name="",this.source=new Vp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cc:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cc:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Op;class vt{constructor(e=0,t=0,n=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(m+1)/2,M=(_+1)/2,C=(u+h)/4,L=(f+d)/4,x=(g+p)/4;return v>y&&v>M?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=C/n,s=L/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=C/r,s=x/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=L/s,r=x/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-d)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mr extends _s{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:on,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gp extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fv extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==g){let p=1-a;const _=l*h+c*m+u*g+f*d,b=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const M=Math.sqrt(v),C=Math.atan2(M,_*b);p=Math.sin(p*C)/M,a=Math.sin(a*C)/M}const y=a*b;if(l=l*p+h*y,c=c*p+m*y,u=u*p+g*y,f=f*p+d*y,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new U,zf=new ro;class so{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Wi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Wi)}else n.boundingBox===null&&n.computeBoundingBox(),ol.copy(n.boundingBox),ol.applyMatrix4(e.matrixWorld),this.union(ol);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),vo.subVectors(this.max,bs),Sr.subVectors(e.a,bs),wr.subVectors(e.b,bs),Tr.subVectors(e.c,bs),di.subVectors(wr,Sr),pi.subVectors(Tr,wr),qi.subVectors(Sr,Tr);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-qi.z,qi.y,di.z,0,-di.x,pi.z,0,-pi.x,qi.z,0,-qi.x,-di.y,di.x,0,-pi.y,pi.x,0,-qi.y,qi.x,0];return!al(t,Sr,wr,Tr,vo)||(t=[1,0,0,0,1,0,0,0,1],!al(t,Sr,wr,Tr,vo))?!1:(yo.crossVectors(di,pi),t=[yo.x,yo.y,yo.z],al(t,Sr,wr,Tr,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new U,new U,new U,new U,new U,new U,new U,new U],Wi=new U,ol=new so,Sr=new U,wr=new U,Tr=new U,di=new U,pi=new U,qi=new U,bs=new U,vo=new U,yo=new U,Xi=new U;function al(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xi.fromArray(i,s);const a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hv=new so,Ss=new U,ll=new U;class Ta{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ss,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(ll)),this.expandByPoint(Ss.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new U,cl=new U,Mo=new U,mi=new U,ul=new U,bo=new U,fl=new U;class Hp{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.direction).multiplyScalar(t).add(this.origin),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cl.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(cl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),a=mi.dot(this.direction),l=-mi.dot(Mo),c=mi.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Mo).multiplyScalar(h).add(cl),m}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,s){ul.subVectors(t,e),bo.subVectors(n,e),fl.crossVectors(ul,bo);let o=this.direction.dot(fl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(bo.crossVectors(mi,bo));if(l<0)return null;const c=a*this.direction.dot(ul.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(fl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,f,h,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dv,e,pv)}lookAt(e,t,n){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),gi.crossVectors(n,Wt),gi.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),gi.crossVectors(n,Wt)),gi.normalize(),So.crossVectors(Wt,gi),r[0]=gi.x,r[4]=So.x,r[8]=Wt.x,r[1]=gi.y,r[5]=So.y,r[9]=Wt.y,r[2]=gi.z,r[6]=So.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],b=n[3],v=n[7],y=n[11],M=n[15],C=r[0],L=r[4],x=r[8],w=r[12],R=r[1],G=r[5],Z=r[9],N=r[13],D=r[2],X=r[6],j=r[10],Y=r[14],V=r[3],z=r[7],W=r[11],le=r[15];return s[0]=o*C+a*R+l*D+c*V,s[4]=o*L+a*G+l*X+c*z,s[8]=o*x+a*Z+l*j+c*W,s[12]=o*w+a*N+l*Y+c*le,s[1]=u*C+f*R+h*D+m*V,s[5]=u*L+f*G+h*X+m*z,s[9]=u*x+f*Z+h*j+m*W,s[13]=u*w+f*N+h*Y+m*le,s[2]=g*C+d*R+p*D+_*V,s[6]=g*L+d*G+p*X+_*z,s[10]=g*x+d*Z+p*j+_*W,s[14]=g*w+d*N+p*Y+_*le,s[3]=b*C+v*R+y*D+M*V,s[7]=b*L+v*G+y*X+M*z,s[11]=b*x+v*Z+y*j+M*W,s[15]=b*w+v*N+y*Y+M*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*m-n*l*m)+d*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*u-n*c*u)+_*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],b=f*p*c-d*h*c+d*l*m-a*p*m-f*l*_+a*h*_,v=g*h*c-u*p*c-g*l*m+o*p*m+u*l*_-o*h*_,y=u*d*c-g*f*c+g*a*m-o*d*m-u*a*_+o*f*_,M=g*f*l-u*d*l-g*a*h+o*d*h+u*a*p-o*f*p,C=t*b+n*v+r*y+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=b*L,e[1]=(d*h*s-f*p*s-d*r*m+n*p*m+f*r*_-n*h*_)*L,e[2]=(a*p*s-d*l*s+d*r*c-n*p*c-a*r*_+n*l*_)*L,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*m-n*l*m)*L,e[4]=v*L,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*_+t*h*_)*L,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*_-t*l*_)*L,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*L,e[8]=y*L,e[9]=(g*f*s-u*d*s-g*n*m+t*d*m+u*n*_-t*f*_)*L,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*L,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*m-t*a*m)*L,e[12]=M*L,e[13]=(u*d*r-g*f*r+g*n*h-t*d*h-u*n*p+t*f*p)*L,e[14]=(g*a*r-o*d*r-g*n*l+t*d*l+o*n*p-t*a*p)*L,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,d=o*u,p=o*f,_=a*f,b=l*c,v=l*u,y=l*f,M=n.x,C=n.y,L=n.z;return r[0]=(1-(d+_))*M,r[1]=(m+y)*M,r[2]=(g-v)*M,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(h+_))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(g+v)*L,r[9]=(p-b)*L,r[10]=(1-(h+d))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/o,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),f=(t+e)*l,h=(n+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Er=new U,Mn=new ut,dv=new U(0,0,0),pv=new U(1,1,1),gi=new U,So=new U,Wt=new U,Uf=new ut,Bf=new ro;class oo{constructor(e=0,t=0,n=0,r=oo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}oo.DefaultOrder="XYZ";oo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mv=0;const kf=new U,Cr=new ro,jn=new ut,wo=new U,ws=new U,gv=new U,_v=new ro,Vf=new U(1,0,0),Gf=new U(0,1,0),Hf=new U(0,0,1),xv={type:"added"},Wf={type:"removed"};class bt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DefaultUp.clone();const e=new U,t=new oo,n=new ro,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new pn}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DefaultMatrixWorldAutoUpdate,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Vf,e)}rotateY(e){return this.rotateOnAxis(Gf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vf,e)}translateY(e){return this.translateOnAxis(Gf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ws,wo,this.up):jn.lookAt(wo,ws,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(jn),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Wf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,gv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,_v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DefaultUp=new U(0,1,0);bt.DefaultMatrixAutoUpdate=!0;bt.DefaultMatrixWorldAutoUpdate=!0;const bn=new U,Yn=new U,hl=new U,$n=new U,Ar=new U,Pr=new U,qf=new U,dl=new U,pl=new U,ml=new U;class ti{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),Yn.subVectors(n,t),hl.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Yn),l=bn.dot(hl),c=Yn.dot(Yn),u=Yn.dot(hl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n),$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,$n),l.set(0,0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),Yn.subVectors(e,t),bn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ti.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ar.subVectors(r,n),Pr.subVectors(s,n),dl.subVectors(e,n);const l=Ar.dot(dl),c=Pr.dot(dl);if(l<=0&&c<=0)return t.copy(n);pl.subVectors(e,r);const u=Ar.dot(pl),f=Pr.dot(pl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ar,o);ml.subVectors(e,s);const m=Ar.dot(ml),g=Pr.dot(ml);if(g>=0&&m<=g)return t.copy(s);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Pr,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return qf.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(qf,a);const _=1/(p+d+h);return o=d*_,a=h*_,t.copy(n).addScaledVector(Ar,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vv=0;class xs extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Kr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dp,this.blendDst=Ip,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(n.blending=this.blending),this.side!==as&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qp extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new U,To=new Xe;class Rn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=If,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==If&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Xp extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jp extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yv=0;const nn=new ut,gl=new bt,Lr=new U,qt=new so,Ts=new so,_t=new U;class xn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?jp:Xp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(qt.min,Ts.min),qt.expandByPoint(_t),_t.addVectors(qt.max,Ts.max),qt.expandByPoint(_t)):(qt.expandByPoint(Ts.min),qt.expandByPoint(Ts.max))}qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),_t.add(Lr)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new U,u[R]=new U;const f=new U,h=new U,m=new U,g=new Xe,d=new Xe,p=new Xe,_=new U,b=new U;function v(R,G,Z){f.fromArray(r,R*3),h.fromArray(r,G*3),m.fromArray(r,Z*3),g.fromArray(o,R*2),d.fromArray(o,G*2),p.fromArray(o,Z*2),h.sub(f),m.sub(f),d.sub(g),p.sub(g);const N=1/(d.x*p.y-p.x*d.y);!isFinite(N)||(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(N),b.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(N),c[R].add(_),c[G].add(_),c[Z].add(_),u[R].add(b),u[G].add(b),u[Z].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,G=y.length;R<G;++R){const Z=y[R],N=Z.start,D=Z.count;for(let X=N,j=N+D;X<j;X+=3)v(n[X+0],n[X+1],n[X+2])}const M=new U,C=new U,L=new U,x=new U;function w(R){L.fromArray(s,R*3),x.copy(L);const G=c[R];M.copy(G),M.sub(L.multiplyScalar(L.dot(G))).normalize(),C.crossVectors(x,G);const N=C.dot(u[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=N}for(let R=0,G=y.length;R<G;++R){const Z=y[R],N=Z.start,D=Z.count;for(let X=N,j=N+D;X<j;X+=3)w(n[X+0]),w(n[X+1]),w(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new Rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xf=new ut,Rr=new Hp,_l=new Ta,_i=new U,xi=new U,vi=new U,xl=new U,vl=new U,yl=new U,Eo=new U,Co=new U,Ao=new U,Po=new Xe,Lo=new Xe,Ro=new Xe,Ml=new U,Do=new U;class An extends bt{constructor(e=new xn,t=new qp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(s),e.ray.intersectsSphere(_l)===!1)||(Xf.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Xf),n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,p=m.length;d<p;d++){const _=m[d],b=r[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=v,C=y;M<C;M+=3){const L=a.getX(M),x=a.getX(M+1),w=a.getX(M+2);o=Io(this,b,e,Rr,l,c,u,f,h,L,x,w),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=d,b=p;_<b;_+=3){const v=a.getX(_),y=a.getX(_+1),M=a.getX(_+2);o=Io(this,r,e,Rr,l,c,u,f,h,v,y,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,p=m.length;d<p;d++){const _=m[d],b=r[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=v,C=y;M<C;M+=3){const L=M,x=M+1,w=M+2;o=Io(this,b,e,Rr,l,c,u,f,h,L,x,w),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,b=p;_<b;_+=3){const v=_,y=_+1,M=_+2;o=Io(this,r,e,Rr,l,c,u,f,h,v,y,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Mv(i,e,t,n,r,s,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==Ei,a),l===null)return null;Do.copy(a),Do.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:i}}function Io(i,e,t,n,r,s,o,a,l,c,u,f){_i.fromBufferAttribute(r,c),xi.fromBufferAttribute(r,u),vi.fromBufferAttribute(r,f);const h=i.morphTargetInfluences;if(s&&h){Eo.set(0,0,0),Co.set(0,0,0),Ao.set(0,0,0);for(let g=0,d=s.length;g<d;g++){const p=h[g],_=s[g];p!==0&&(xl.fromBufferAttribute(_,c),vl.fromBufferAttribute(_,u),yl.fromBufferAttribute(_,f),o?(Eo.addScaledVector(xl,p),Co.addScaledVector(vl,p),Ao.addScaledVector(yl,p)):(Eo.addScaledVector(xl.sub(_i),p),Co.addScaledVector(vl.sub(xi),p),Ao.addScaledVector(yl.sub(vi),p)))}_i.add(Eo),xi.add(Co),vi.add(Ao)}i.isSkinnedMesh&&(i.boneTransform(c,_i),i.boneTransform(u,xi),i.boneTransform(f,vi));const m=Mv(i,e,t,n,_i,xi,vi,Ml);if(m){a&&(Po.fromBufferAttribute(a,c),Lo.fromBufferAttribute(a,u),Ro.fromBufferAttribute(a,f),m.uv=ti.getUV(Ml,_i,xi,vi,Po,Lo,Ro,new Xe)),l&&(Po.fromBufferAttribute(l,c),Lo.fromBufferAttribute(l,u),Ro.fromBufferAttribute(l,f),m.uv2=ti.getUV(Ml,_i,xi,vi,Po,Lo,Ro,new Xe));const g={a:c,b:u,c:f,normal:new U,materialIndex:0};ti.getNormal(_i,xi,vi,g.normal),m.face=g}return m}class ao extends xn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function g(d,p,_,b,v,y,M,C,L,x,w){const R=y/L,G=M/x,Z=y/2,N=M/2,D=C/2,X=L+1,j=x+1;let Y=0,V=0;const z=new U;for(let W=0;W<j;W++){const le=W*G-N;for(let se=0;se<X;se++){const ue=se*R-Z;z[d]=ue*b,z[p]=le*v,z[_]=D,c.push(z.x,z.y,z.z),z[d]=0,z[p]=0,z[_]=C>0?1:-1,u.push(z.x,z.y,z.z),f.push(se/L),f.push(1-W/x),Y+=1}}for(let W=0;W<x;W++)for(let le=0;le<L;le++){const se=h+le+X*W,ue=h+le+X*(W+1),ye=h+(le+1)+X*(W+1),k=h+(le+1)+X*W;l.push(se,ue,k),l.push(ue,ye,k),V+=6}a.addGroup(m,V,w),m+=V,h+=Y}}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=fs(i[t]);for(const r in n)e[r]=n[r]}return e}function bv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const Sv={clone:fs,merge:Ft};var wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wv,this.fragmentShader=Tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=bv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yp extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends Yp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(el*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=90,Ir=1;class Ev extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new an(Dr,Ir,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(1,0,0)),this.add(r);const s=new an(Dr,Ir,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);const o=new an(Dr,Ir,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new U(0,1,0)),this.add(o);const a=new an(Dr,Ir,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new U(0,-1,0)),this.add(a);const l=new an(Dr,Ir,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const c=new an(Dr,Ir,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=si,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class $p extends Dn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cv extends mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $p(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ao(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ri});s.uniforms.tEquirect.value=t;const o=new An(r,s),a=t.minFilter;return t.minFilter===wa&&(t.minFilter=on),new Ev(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const bl=new U,Av=new U,Pv=new pn;class $i{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=bl.subVectors(n,t).cross(Av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(bl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pv.getNormalMatrix(e),r=this.coplanarPoint(bl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Ta,Fo=new U;class nu{constructor(e=new $i,t=new $i,n=new $i,r=new $i,s=new $i,o=new $i){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],b=n[14],v=n[15];return t[0].setComponents(a-r,f-l,d-h,v-p).normalize(),t[1].setComponents(a+r,f+l,d+h,v+p).normalize(),t[2].setComponents(a+s,f+c,d+m,v+_).normalize(),t[3].setComponents(a-s,f-c,d-m,v-_).normalize(),t[4].setComponents(a-o,f-u,d-g,v-b).normalize(),t[5].setComponents(a+o,f+u,d+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Lv(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;i.bindBuffer(f,c),m.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class iu extends xn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const b=_*h-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-b,0),d.push(0,0,1),p.push(v/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const v=b+c*_,y=b+c*(_+1),M=b+1+c*(_+1),C=b+1+c*_;m.push(v,y,C),m.push(y,M,C)}this.setIndex(m),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(p,2))}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zv="vec3 transformed = vec3( position );",Uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,kv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Zv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ry=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,py=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,my=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,vy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,My=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,by=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ty=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ly=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ky=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$y=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uM=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,fM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,MM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,bM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,SM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,TM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,EM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,CM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,AM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,OM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,VM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:Rv,alphamap_pars_fragment:Dv,alphatest_fragment:Iv,alphatest_pars_fragment:Fv,aomap_fragment:Ov,aomap_pars_fragment:Nv,begin_vertex:zv,beginnormal_vertex:Uv,bsdfs:Bv,iridescence_fragment:kv,bumpmap_pars_fragment:Vv,clipping_planes_fragment:Gv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Wv,clipping_planes_vertex:qv,color_fragment:Xv,color_pars_fragment:jv,color_pars_vertex:Yv,color_vertex:$v,common:Kv,cube_uv_reflection_fragment:Zv,defaultnormal_vertex:Jv,displacementmap_pars_vertex:Qv,displacementmap_vertex:ey,emissivemap_fragment:ty,emissivemap_pars_fragment:ny,encodings_fragment:iy,encodings_pars_fragment:ry,envmap_fragment:sy,envmap_common_pars_fragment:oy,envmap_pars_fragment:ay,envmap_pars_vertex:ly,envmap_physical_pars_fragment:yy,envmap_vertex:cy,fog_vertex:uy,fog_pars_vertex:fy,fog_fragment:hy,fog_pars_fragment:dy,gradientmap_pars_fragment:py,lightmap_fragment:my,lightmap_pars_fragment:gy,lights_lambert_fragment:_y,lights_lambert_pars_fragment:xy,lights_pars_begin:vy,lights_toon_fragment:My,lights_toon_pars_fragment:by,lights_phong_fragment:Sy,lights_phong_pars_fragment:wy,lights_physical_fragment:Ty,lights_physical_pars_fragment:Ey,lights_fragment_begin:Cy,lights_fragment_maps:Ay,lights_fragment_end:Py,logdepthbuf_fragment:Ly,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Iy,map_fragment:Fy,map_pars_fragment:Oy,map_particle_fragment:Ny,map_particle_pars_fragment:zy,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:By,morphcolor_vertex:ky,morphnormal_vertex:Vy,morphtarget_pars_vertex:Gy,morphtarget_vertex:Hy,normal_fragment_begin:Wy,normal_fragment_maps:qy,normal_pars_fragment:Xy,normal_pars_vertex:jy,normal_vertex:Yy,normalmap_pars_fragment:$y,clearcoat_normal_fragment_begin:Ky,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:Jy,iridescence_pars_fragment:Qy,output_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:sM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:cM,shadowmap_vertex:uM,shadowmask_pars_fragment:fM,skinbase_vertex:hM,skinning_pars_vertex:dM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:gM,specularmap_pars_fragment:_M,tonemapping_fragment:xM,tonemapping_pars_fragment:vM,transmission_fragment:yM,transmission_pars_fragment:MM,uv_pars_fragment:bM,uv_pars_vertex:SM,uv_vertex:wM,uv2_pars_fragment:TM,uv2_pars_vertex:EM,uv2_vertex:CM,worldpos_vertex:AM,background_vert:PM,background_frag:LM,backgroundCube_vert:RM,backgroundCube_frag:DM,cube_vert:IM,cube_frag:FM,depth_vert:OM,depth_frag:NM,distanceRGBA_vert:zM,distanceRGBA_frag:UM,equirect_vert:BM,equirect_frag:kM,linedashed_vert:VM,linedashed_frag:GM,meshbasic_vert:HM,meshbasic_frag:WM,meshlambert_vert:qM,meshlambert_frag:XM,meshmatcap_vert:jM,meshmatcap_frag:YM,meshnormal_vert:$M,meshnormal_frag:KM,meshphong_vert:ZM,meshphong_frag:JM,meshphysical_vert:QM,meshphysical_frag:eb,meshtoon_vert:tb,meshtoon_frag:nb,points_vert:ib,points_frag:rb,shadow_vert:sb,shadow_frag:ob,sprite_vert:ab,sprite_frag:lb},xe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pn},uv2Transform:{value:new pn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pn}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pn}}},Un={basic:{uniforms:Ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ft([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ft([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ft([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ft([xe.points,xe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ft([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ft([xe.common,xe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ft([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ft([xe.sprite,xe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new pn},t2D:{value:null}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ft([xe.common,xe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ft([xe.lights,xe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Un.physical={uniforms:Ft([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};function cb(i,e,t,n,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(p,_){let b=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=i.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?d(a,l):v&&v.isColor&&(d(v,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Sa)?(u===void 0&&(u=new An(new ao(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:fs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(f!==v||h!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new An(new iu(2,2),new gr({name:"BackgroundMaterial",uniforms:fs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,_){n.buffers.color.setClear(p.r,p.g,p.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:g}}function ub(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(D,X,j,Y,V){let z=!1;if(o){const W=d(Y,j,X);c!==W&&(c=W,m(c.object)),z=_(D,Y,j,V),z&&b(D,Y,j,V)}else{const W=X.wireframe===!0;(c.geometry!==Y.id||c.program!==j.id||c.wireframe!==W)&&(c.geometry=Y.id,c.program=j.id,c.wireframe=W,z=!0)}V!==null&&t.update(V,34963),(z||u)&&(u=!1,x(D,X,j,Y),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function d(D,X,j){const Y=j.wireframe===!0;let V=a[D.id];V===void 0&&(V={},a[D.id]=V);let z=V[X.id];z===void 0&&(z={},V[X.id]=z);let W=z[Y];return W===void 0&&(W=p(h()),z[Y]=W),W}function p(D){const X=[],j=[],Y=[];for(let V=0;V<r;V++)X[V]=0,j[V]=0,Y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:Y,object:D,attributes:{},index:null}}function _(D,X,j,Y){const V=c.attributes,z=X.attributes;let W=0;const le=j.getAttributes();for(const se in le)if(le[se].location>=0){const ye=V[se];let k=z[se];if(k===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(k=D.instanceColor)),ye===void 0||ye.attribute!==k||k&&ye.data!==k.data)return!0;W++}return c.attributesNum!==W||c.index!==Y}function b(D,X,j,Y){const V={},z=X.attributes;let W=0;const le=j.getAttributes();for(const se in le)if(le[se].location>=0){let ye=z[se];ye===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor));const k={};k.attribute=ye,ye&&ye.data&&(k.data=ye.data),V[se]=k,W++}c.attributes=V,c.attributesNum=W,c.index=Y}function v(){const D=c.newAttributes;for(let X=0,j=D.length;X<j;X++)D[X]=0}function y(D){M(D,0)}function M(D,X){const j=c.newAttributes,Y=c.enabledAttributes,V=c.attributeDivisors;j[D]=1,Y[D]===0&&(i.enableVertexAttribArray(D),Y[D]=1),V[D]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,X),V[D]=X)}function C(){const D=c.newAttributes,X=c.enabledAttributes;for(let j=0,Y=X.length;j<Y;j++)X[j]!==D[j]&&(i.disableVertexAttribArray(j),X[j]=0)}function L(D,X,j,Y,V,z){n.isWebGL2===!0&&(j===5124||j===5125)?i.vertexAttribIPointer(D,X,j,V,z):i.vertexAttribPointer(D,X,j,Y,V,z)}function x(D,X,j,Y){if(n.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=Y.attributes,z=j.getAttributes(),W=X.defaultAttributeValues;for(const le in z){const se=z[le];if(se.location>=0){let ue=V[le];if(ue===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ue!==void 0){const ye=ue.normalized,k=ue.itemSize,F=t.get(ue);if(F===void 0)continue;const ae=F.buffer,ce=F.type,ve=F.bytesPerElement;if(ue.isInterleavedBufferAttribute){const _e=ue.data,we=_e.stride,E=ue.offset;if(_e.isInstancedInterleavedBuffer){for(let P=0;P<se.locationSize;P++)M(se.location+P,_e.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let P=0;P<se.locationSize;P++)y(se.location+P);i.bindBuffer(34962,ae);for(let P=0;P<se.locationSize;P++)L(se.location+P,k/se.locationSize,ce,ye,we*ve,(E+k/se.locationSize*P)*ve)}else{if(ue.isInstancedBufferAttribute){for(let _e=0;_e<se.locationSize;_e++)M(se.location+_e,ue.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let _e=0;_e<se.locationSize;_e++)y(se.location+_e);i.bindBuffer(34962,ae);for(let _e=0;_e<se.locationSize;_e++)L(se.location+_e,k/se.locationSize,ce,ye,k*ve,k/se.locationSize*_e*ve)}}else if(W!==void 0){const ye=W[le];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(se.location,ye);break;case 3:i.vertexAttrib3fv(se.location,ye);break;case 4:i.vertexAttrib4fv(se.location,ye);break;default:i.vertexAttrib1fv(se.location,ye)}}}}C()}function w(){Z();for(const D in a){const X=a[D];for(const j in X){const Y=X[j];for(const V in Y)g(Y[V].object),delete Y[V];delete X[j]}delete a[D]}}function R(D){if(a[D.id]===void 0)return;const X=a[D.id];for(const j in X){const Y=X[j];for(const V in Y)g(Y[V].object),delete Y[V];delete X[j]}delete a[D.id]}function G(D){for(const X in a){const j=a[X];if(j[D.id]===void 0)continue;const Y=j[D.id];for(const V in Y)g(Y[V].object),delete Y[V];delete j[D.id]}}function Z(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:y,disableUnusedAttributes:C}}function fb(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function hb(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),p=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),v=h>0,y=o||e.has("OES_texture_float"),M=v&&y,C=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:C}}function db(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new $i,a=new pn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||n!==0||r;return r=h,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,_=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const b=s?0:n,v=b*4;let y=_.clippingState||null;l.value=y,y=u(g,h,v,m);for(let M=0;M!==v;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let v=0,y=m;v!==d;++v,y+=4)o.copy(f[v]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function pb(i){let e=new WeakMap;function t(o,a){return a===ac?o.mapping=ls:a===lc&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ac||a===lc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cv(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zp extends Yp{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,jf=[.125,.215,.35,.446,.526,.582],er=20,Sl=new Zp,Yf=new Ze;let wl=null;const Ki=(1+Math.sqrt(5))/2,Or=1/Ki,$f=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ki,Or),new U(0,Ki,-Or),new U(Or,0,Ki),new U(-Or,0,Ki),new U(Ki,Or,0),new U(-Ki,Or,0)];class Kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){wl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wl),e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Qs,format:En,encoding:pr,depthBuffer:!1},r=Zf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mb(s)),this._blurMaterial=gb(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,r){const a=new an(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Yf),u.toneMapping=si,u.autoClear=!1;const m=new qp({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new An(new ao,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Yf),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;Oo(r,b*v,_>2?v:0,v,v),u.setRenderTarget(r),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ls||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$f[(r-1)%$f.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*er-1),d=s/g,p=isFinite(s)?1+Math.floor(u*d):er;p>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${er}`);const _=[];let b=0;for(let L=0;L<er;++L){const x=L/d,w=Math.exp(-x*x/2);_.push(w),L===0?b+=w:L<p&&(b+=2*w)}for(let L=0;L<_.length;L++)_[L]=_[L]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const y=this._sizeLods[r],M=3*y*(r>v-Gr?r-v+Gr:0),C=4*(this._cubeSize-y);Oo(t,M,C,3*y,2*y),l.setRenderTarget(t),l.render(f,Sl)}}function mb(i){const e=[],t=[],n=[];let r=i;const s=i-Gr+1+jf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Gr?l=jf[o-i+Gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,d=3,p=2,_=1,b=new Float32Array(d*g*m),v=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let C=0;C<m;C++){const L=C%3*2/3-1,x=C>2?0:-1,w=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];b.set(w,d*g*C),v.set(h,p*g*C);const R=[C,C,C,C,C,C];y.set(R,_*g*C)}const M=new xn;M.setAttribute("position",new Rn(b,d)),M.setAttribute("uv",new Rn(v,p)),M.setAttribute("faceIndex",new Rn(y,_)),e.push(M),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zf(i,e,t){const n=new mr(i,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gb(i,e,t){const n=new Float32Array(er),r=new U(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Jf(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Qf(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _b(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ac||l===lc,u=l===ls||l===cs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Kf(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Kf(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function vb(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let d=0;if(m!==null){const b=m.array;d=m.version;for(let v=0,y=b.length;v<y;v+=3){const M=b[v+0],C=b[v+1],L=b[v+2];h.push(M,C,C,L,L,M)}}else{const b=g.array;d=g.version;for(let v=0,y=b.length/3-1;v<y;v+=3){const M=v+0,C=v+1,L=v+2;h.push(M,C,C,L,L,M)}}const p=new(Up(h)?jp:Xp)(h,1);p.version=d;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function yb(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){i.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let d,p;if(r)d=i,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,h*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Mb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function bb(i,e){return i[0]-e[0]}function Sb(i,e){return Math.abs(e[1])-Math.abs(i[1])}function wb(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let j=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",j)};var g=j;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let R=0;y===!0&&(R=1),M===!0&&(R=2),C===!0&&(R=3);let G=u.attributes.position.count*R,Z=1;G>e.maxTextureSize&&(Z=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const N=new Float32Array(G*Z*4*p),D=new Gp(N,G,Z,p);D.type=ir,D.needsUpdate=!0;const X=R*4;for(let Y=0;Y<p;Y++){const V=L[Y],z=x[Y],W=w[Y],le=G*Z*4*Y;for(let se=0;se<V.count;se++){const ue=se*X;y===!0&&(o.fromBufferAttribute(V,se),N[le+ue+0]=o.x,N[le+ue+1]=o.y,N[le+ue+2]=o.z,N[le+ue+3]=0),M===!0&&(o.fromBufferAttribute(z,se),N[le+ue+4]=o.x,N[le+ue+5]=o.y,N[le+ue+6]=o.z,N[le+ue+7]=0),C===!0&&(o.fromBufferAttribute(W,se),N[le+ue+8]=o.x,N[le+ue+9]=o.y,N[le+ue+10]=o.z,N[le+ue+11]=W.itemSize===4?o.w:1)}}_={count:p,texture:D,size:new Xe(G,Z)},s.set(u,_),u.addEventListener("dispose",j)}let b=0;for(let y=0;y<m.length;y++)b+=m[y];const v=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",m),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let M=0;M<d;M++)p[M]=[M,0];n[u.id]=p}for(let M=0;M<d;M++){const C=p[M];C[0]=M,C[1]=m[M]}p.sort(Sb);for(let M=0;M<8;M++)M<d&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(bb);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const C=a[M],L=C[0],x=C[1];L!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+M)!==_[L]&&u.setAttribute("morphTarget"+M,_[L]),b&&u.getAttribute("morphNormal"+M)!==b[L]&&u.setAttribute("morphNormal"+M,b[L]),r[M]=x,v+=x):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),b&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const y=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Tb(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Jp=new Dn,Qp=new Gp,em=new fv,tm=new $p,eh=[],th=[],nh=new Float32Array(16),ih=new Float32Array(9),rh=new Float32Array(4);function vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=eh[r];if(s===void 0&&(s=new Float32Array(r),eh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ea(i,e){let t=th[e];t===void 0&&(t=new Int32Array(e),th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Eb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Lb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),pt(t,n)}}function Rb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),pt(t,n)}}function Db(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),pt(t,n)}}function Ib(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function zb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ub(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function kb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Vb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Jp,r)}function Gb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||em,r)}function Hb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||tm,r)}function Wb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Qp,r)}function qb(i){switch(i){case 5126:return Eb;case 35664:return Cb;case 35665:return Ab;case 35666:return Pb;case 35674:return Lb;case 35675:return Rb;case 35676:return Db;case 5124:case 35670:return Ib;case 35667:case 35671:return Fb;case 35668:case 35672:return Ob;case 35669:case 35673:return Nb;case 5125:return zb;case 36294:return Ub;case 36295:return Bb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Wb}}function Xb(i,e){i.uniform1fv(this.addr,e)}function jb(i,e){const t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function Yb(i,e){const t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function $b(i,e){const t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function Kb(i,e){const t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zb(i,e){const t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jb(i,e){const t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qb(i,e){i.uniform1iv(this.addr,e)}function eS(i,e){i.uniform2iv(this.addr,e)}function tS(i,e){i.uniform3iv(this.addr,e)}function nS(i,e){i.uniform4iv(this.addr,e)}function iS(i,e){i.uniform1uiv(this.addr,e)}function rS(i,e){i.uniform2uiv(this.addr,e)}function sS(i,e){i.uniform3uiv(this.addr,e)}function oS(i,e){i.uniform4uiv(this.addr,e)}function aS(i,e,t){const n=this.cache,r=e.length,s=Ea(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jp,s[o])}function lS(i,e,t){const n=this.cache,r=e.length,s=Ea(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||em,s[o])}function cS(i,e,t){const n=this.cache,r=e.length,s=Ea(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tm,s[o])}function uS(i,e,t){const n=this.cache,r=e.length,s=Ea(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qp,s[o])}function fS(i){switch(i){case 5126:return Xb;case 35664:return jb;case 35665:return Yb;case 35666:return $b;case 35674:return Kb;case 35675:return Zb;case 35676:return Jb;case 5124:case 35670:return Qb;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return rS;case 36295:return sS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}class hS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=qb(t.type)}}class dS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=fS(t.type)}}class pS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function sh(i,e){i.seq.push(e),i.map[e.id]=e}function mS(i,e,t){const n=i.name,r=n.length;for(Tl.lastIndex=0;;){const s=Tl.exec(n),o=Tl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sh(t,c===void 0?new hS(a,i,e):new dS(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new pS(a),sh(t,f)),t=f}}}class jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mS(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function oh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let gS=0;function _S(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function xS(i){switch(i){case pr:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ah(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_S(i.getShaderSource(e),o)}else return r}function vS(i,e){const t=xS(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function yS(i,e){let t;switch(e){case Ux:t="Linear";break;case Bx:t="Reinhard";break;case kx:t="OptimizedCineon";break;case Vx:t="ACESFilmic";break;case Gx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function MS(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function bS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function SS(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Rs(i){return i!==""}function lh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(i){return i.replace(wS,TS)}function TS(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return dc(t)}const ES=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(ES,CS)}function CS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ls&&(e="SHADOWMAP_TYPE_VSM"),e}function PS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function RS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fp:e="ENVMAP_BLENDING_MULTIPLY";break;case Nx:e="ENVMAP_BLENDING_MIX";break;case zx:e="ENVMAP_BLENDING_ADD";break}return e}function DS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function IS(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=AS(t),c=PS(t),u=LS(t),f=RS(t),h=DS(t),m=t.isWebGL2?"":MS(t),g=bS(s),d=r.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Rs).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Rs).join(`
`),_.length>0&&(_+=`
`)):(p=[fh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),_=[m,fh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Oe.tonemapping_pars_fragment:"",t.toneMapping!==si?yS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,vS("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=dc(o),o=lh(o,t),o=ch(o,t),a=dc(a),a=lh(a,t),a=ch(a,t),o=uh(o),a=uh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=b+p+o,y=b+_+a,M=oh(r,35633,v),C=oh(r,35632,y);if(r.attachShader(d,M),r.attachShader(d,C),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const w=r.getProgramInfoLog(d).trim(),R=r.getShaderInfoLog(M).trim(),G=r.getShaderInfoLog(C).trim();let Z=!0,N=!0;if(r.getProgramParameter(d,35714)===!1){Z=!1;const D=ah(r,M,"vertex"),X=ah(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+D+`
`+X)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(R===""||G==="")&&(N=!1);N&&(this.diagnostics={runnable:Z,programLog:w,vertexShader:{log:R,prefix:p},fragmentShader:{log:G,prefix:_}})}r.deleteShader(M),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new jo(r,d)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=SS(r,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=gS++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=C,this}let FS=0;class OS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NS(e),t.set(e,n)),n}}class NS{constructor(e){this.id=FS++,this.code=e,this.usedTimes=0}}function zS(i,e,t,n,r,s,o){const a=new Wp,l=new OS,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,w,R,G,Z){const N=G.fog,D=Z.geometry,X=x.isMeshStandardMaterial?G.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),Y=!!j&&j.mapping===Sa?j.image.height:null,V=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,W=z!==void 0?z.length:0;let le=0;D.morphAttributes.position!==void 0&&(le=1),D.morphAttributes.normal!==void 0&&(le=2),D.morphAttributes.color!==void 0&&(le=3);let se,ue,ye,k;if(V){const we=Un[V];se=we.vertexShader,ue=we.fragmentShader}else se=x.vertexShader,ue=x.fragmentShader,l.update(x),ye=l.getVertexShaderID(x),k=l.getFragmentShaderID(x);const F=i.getRenderTarget(),ae=x.alphaTest>0,ce=x.clearcoat>0,ve=x.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:x.type,vertexShader:se,fragmentShader:ue,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:k,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:F===null?i.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:pr,map:!!x.map,matcap:!!x.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Y,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===av,tangentSpaceNormalMap:x.normalMapType===zp,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===it,clearcoat:ce,clearcoatMap:ce&&!!x.clearcoatMap,clearcoatRoughnessMap:ce&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!x.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!x.iridescenceMap,iridescenceThicknessMap:ve&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Kr,alphaMap:!!x.alphaMap,alphaTest:ae,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:le,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:si,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ei,flipSided:x.side===gn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(w,x),b(w,x),w.push(i.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),x.push(a.mask)}function v(x){const w=g[x.type];let R;if(w){const G=Un[w];R=Sv.clone(G.uniforms)}else R=x.uniforms;return R}function y(x,w){let R;for(let G=0,Z=c.length;G<Z;G++){const N=c[G];if(N.cacheKey===w){R=N,++R.usedTimes;break}}return R===void 0&&(R=new IS(i,w,x,s),c.push(R)),R}function M(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:L}}function US(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function BS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,m,g,d,p){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=p),e++,_}function a(f,h,m,g,d,p){const _=o(f,h,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,g,d,p){const _=o(f,h,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||BS),n.length>1&&n.sort(h||hh),r.length>1&&r.sort(h||hh)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function kS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new dh,i.set(n,[o])):r>=s.length?(o=new dh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function VS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ze};break;case"SpotLight":t={position:new U,direction:new U,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function GS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let HS=0;function WS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qS(i,e){const t=new VS,n=GS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,o=new ut,a=new ut;function l(u,f){let h=0,m=0,g=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let d=0,p=0,_=0,b=0,v=0,y=0,M=0,C=0,L=0,x=0;u.sort(WS);const w=f!==!0?Math.PI:1;for(let G=0,Z=u.length;G<Z;G++){const N=u[G],D=N.color,X=N.intensity,j=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=D.r*X*w,m+=D.g*X*w,g+=D.b*X*w;else if(N.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(N.sh.coefficients[V],X);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const z=N.shadow,W=n.get(N);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,r.directionalShadow[d]=W,r.directionalShadowMap[d]=Y,r.directionalShadowMatrix[d]=N.shadow.matrix,y++}r.directional[d]=V,d++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(D).multiplyScalar(X*w),V.distance=j,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,r.spot[_]=V;const z=N.shadow;if(N.map&&(r.spotLightMap[L]=N.map,L++,z.updateMatrices(N),N.castShadow&&x++),r.spotLightMatrix[_]=z.matrix,N.castShadow){const W=n.get(N);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,r.spotShadow[_]=W,r.spotShadowMap[_]=Y,C++}_++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(D).multiplyScalar(X),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=V,b++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*w),V.distance=N.distance,V.decay=N.decay,N.castShadow){const z=N.shadow,W=n.get(N);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,r.pointShadow[p]=W,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=N.shadow.matrix,M++}r.point[p]=V,p++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(X*w),V.groundColor.copy(N.groundColor).multiplyScalar(X*w),r.hemi[v]=V,v++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==b||R.hemiLength!==v||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==C||R.numSpotMaps!==L)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=b,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+L-x,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=x,R.directionalLength=d,R.pointLength=p,R.spotLength=_,R.rectAreaLength=b,R.hemiLength=v,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=C,R.numSpotMaps=L,r.version=HS++)}function c(u,f){let h=0,m=0,g=0,d=0,p=0;const _=f.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const y=u[b];if(y.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),h++}else if(y.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=r.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:r}}function ph(i,e){const t=new qS(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function XS(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ph(i,e),t.set(s,[l])):o>=a.length?(l=new ph(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class jS extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YS extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZS(i,e,t){let n=new nu;const r=new Xe,s=new Xe,o=new vt,a=new jS({depthPacking:ov}),l=new YS,c={},u=t.maxTextureSize,f={0:gn,1:as,2:Ei},h=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:$S,fragmentShader:KS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new An(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rp,this.render=function(y,M,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const L=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Ri),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let G=0,Z=y.length;G<Z;G++){const N=y[G],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null){const Y=this.type!==Ls?{minFilter:Nt,magFilter:Nt}:{};D.map=new mr(r.x,r.y,Y),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const j=D.getViewportCount();for(let Y=0;Y<j;Y++){const V=D.getViewport(Y);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),R.viewport(o),D.updateMatrices(N,Y),n=D.getFrustum(),v(M,C,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===Ls&&_(D,C),D.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(L,x,w)};function _(y,M){const C=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new mr(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(M,null,C,h,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(M,null,C,m,d,null)}function b(y,M,C,L,x,w){let R=null;const G=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(G!==void 0?R=G:R=C.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const Z=R.uuid,N=M.uuid;let D=c[Z];D===void 0&&(D={},c[Z]=D);let X=D[N];X===void 0&&(X=R.clone(),D[N]=X),R=X}return R.visible=M.visible,R.wireframe=M.wireframe,w===Ls?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:f[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=L,R.farDistance=x),R}function v(y,M,C,L,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Ls)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const G=e.update(y),Z=y.material;if(Array.isArray(Z)){const N=G.groups;for(let D=0,X=N.length;D<X;D++){const j=N[D],Y=Z[j.materialIndex];if(Y&&Y.visible){const V=b(y,Y,L,C.near,C.far,x);i.renderBufferDirect(C,null,G,V,y,j)}}}else if(Z.visible){const N=b(y,Z,L,C.near,C.far,x);i.renderBufferDirect(C,null,G,N,y,null)}}const R=y.children;for(let G=0,Z=R.length;G<Z;G++)v(R[G],M,C,L,x)}}function JS(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const ee=new vt;let de=null;const Se=new vt(0,0,0,0);return{setMask:function(Ce){de!==Ce&&!I&&(i.colorMask(Ce,Ce,Ce,Ce),de=Ce)},setLocked:function(Ce){I=Ce},setClear:function(Ce,He,gt,wt,zi){zi===!0&&(Ce*=wt,He*=wt,gt*=wt),ee.set(Ce,He,gt,wt),Se.equals(ee)===!1&&(i.clearColor(Ce,He,gt,wt),Se.copy(ee))},reset:function(){I=!1,de=null,Se.set(-1,0,0,0)}}}function s(){let I=!1,ee=null,de=null,Se=null;return{setTest:function(Ce){Ce?ae(2929):ce(2929)},setMask:function(Ce){ee!==Ce&&!I&&(i.depthMask(Ce),ee=Ce)},setFunc:function(Ce){if(de!==Ce){switch(Ce){case Px:i.depthFunc(512);break;case Lx:i.depthFunc(519);break;case Rx:i.depthFunc(513);break;case oc:i.depthFunc(515);break;case Dx:i.depthFunc(514);break;case Ix:i.depthFunc(518);break;case Fx:i.depthFunc(516);break;case Ox:i.depthFunc(517);break;default:i.depthFunc(515)}de=Ce}},setLocked:function(Ce){I=Ce},setClear:function(Ce){Se!==Ce&&(i.clearDepth(Ce),Se=Ce)},reset:function(){I=!1,ee=null,de=null,Se=null}}}function o(){let I=!1,ee=null,de=null,Se=null,Ce=null,He=null,gt=null,wt=null,zi=null;return{setTest:function(Je){I||(Je?ae(2960):ce(2960))},setMask:function(Je){ee!==Je&&!I&&(i.stencilMask(Je),ee=Je)},setFunc:function(Je,Wn,Qt){(de!==Je||Se!==Wn||Ce!==Qt)&&(i.stencilFunc(Je,Wn,Qt),de=Je,Se=Wn,Ce=Qt)},setOp:function(Je,Wn,Qt){(He!==Je||gt!==Wn||wt!==Qt)&&(i.stencilOp(Je,Wn,Qt),He=Je,gt=Wn,wt=Qt)},setLocked:function(Je){I=Je},setClear:function(Je){zi!==Je&&(i.clearStencil(Je),zi=Je)},reset:function(){I=!1,ee=null,de=null,Se=null,Ce=null,He=null,gt=null,wt=null,zi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,d=[],p=null,_=!1,b=null,v=null,y=null,M=null,C=null,L=null,x=null,w=!1,R=null,G=null,Z=null,N=null,D=null;const X=i.getParameter(35661);let j=!1,Y=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Y>=2);let z=null,W={};const le=i.getParameter(3088),se=i.getParameter(2978),ue=new vt().fromArray(le),ye=new vt().fromArray(se);function k(I,ee,de){const Se=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(I,Ce),i.texParameteri(I,10241,9728),i.texParameteri(I,10240,9728);for(let He=0;He<de;He++)i.texImage2D(ee+He,0,6408,1,1,0,6408,5121,Se);return Ce}const F={};F[3553]=k(3553,3553,1),F[34067]=k(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ae(2929),l.setFunc(oc),te(!1),he(rf),ae(2884),q(Ri);function ae(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function ce(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function ve(I,ee){return m[I]!==ee?(i.bindFramebuffer(I,ee),m[I]=ee,n&&(I===36009&&(m[36160]=ee),I===36160&&(m[36009]=ee)),!0):!1}function _e(I,ee){let de=d,Se=!1;if(I)if(de=g.get(ee),de===void 0&&(de=[],g.set(ee,de)),I.isWebGLMultipleRenderTargets){const Ce=I.texture;if(de.length!==Ce.length||de[0]!==36064){for(let He=0,gt=Ce.length;He<gt;He++)de[He]=36064+He;de.length=Ce.length,Se=!0}}else de[0]!==36064&&(de[0]=36064,Se=!0);else de[0]!==1029&&(de[0]=1029,Se=!0);Se&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function we(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const E={[zr]:32774,[xx]:32778,[vx]:32779};if(n)E[lf]=32775,E[cf]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(E[lf]=I.MIN_EXT,E[cf]=I.MAX_EXT)}const P={[yx]:0,[Mx]:1,[bx]:768,[Dp]:770,[Ax]:776,[Ex]:774,[wx]:772,[Sx]:769,[Ip]:771,[Cx]:775,[Tx]:773};function q(I,ee,de,Se,Ce,He,gt,wt){if(I===Ri){_===!0&&(ce(3042),_=!1);return}if(_===!1&&(ae(3042),_=!0),I!==_x){if(I!==b||wt!==w){if((v!==zr||C!==zr)&&(i.blendEquation(32774),v=zr,C=zr),wt)switch(I){case Kr:i.blendFuncSeparate(1,771,1,771);break;case sf:i.blendFunc(1,1);break;case of:i.blendFuncSeparate(0,769,0,1);break;case af:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Kr:i.blendFuncSeparate(770,771,1,771);break;case sf:i.blendFunc(770,1);break;case of:i.blendFuncSeparate(0,769,0,1);break;case af:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,M=null,L=null,x=null,b=I,w=wt}return}Ce=Ce||ee,He=He||de,gt=gt||Se,(ee!==v||Ce!==C)&&(i.blendEquationSeparate(E[ee],E[Ce]),v=ee,C=Ce),(de!==y||Se!==M||He!==L||gt!==x)&&(i.blendFuncSeparate(P[de],P[Se],P[He],P[gt]),y=de,M=Se,L=He,x=gt),b=I,w=null}function K(I,ee){I.side===Ei?ce(2884):ae(2884);let de=I.side===gn;ee&&(de=!de),te(de),I.blending===Kr&&I.transparent===!1?q(Ri):q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Se=I.stencilWrite;c.setTest(Se),Se&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(32926):ce(32926)}function te(I){R!==I&&(I?i.frontFace(2304):i.frontFace(2305),R=I)}function he(I){I!==px?(ae(2884),I!==G&&(I===rf?i.cullFace(1029):I===mx?i.cullFace(1028):i.cullFace(1032))):ce(2884),G=I}function pe(I){I!==Z&&(j&&i.lineWidth(I),Z=I)}function re(I,ee,de){I?(ae(32823),(N!==ee||D!==de)&&(i.polygonOffset(ee,de),N=ee,D=de)):ce(32823)}function ge(I){I?ae(3089):ce(3089)}function oe(I){I===void 0&&(I=33984+X-1),z!==I&&(i.activeTexture(I),z=I)}function T(I,ee,de){de===void 0&&(z===null?de=33984+X-1:de=z);let Se=W[de];Se===void 0&&(Se={type:void 0,texture:void 0},W[de]=Se),(Se.type!==I||Se.texture!==ee)&&(z!==de&&(i.activeTexture(de),z=de),i.bindTexture(I,ee||F[I]),Se.type=I,Se.texture=ee)}function S(){const I=W[z];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function O(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){ue.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function be(I){ye.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ye.copy(I))}function Re(I,ee){let de=f.get(ee);de===void 0&&(de=new WeakMap,f.set(ee,de));let Se=de.get(I);Se===void 0&&(Se=i.getUniformBlockIndex(ee,I.name),de.set(I,Se))}function $e(I,ee){const Se=f.get(ee).get(I);u.get(I)!==Se&&(i.uniformBlockBinding(ee,Se,I.__bindingPointIndex),u.set(I,Se))}function mt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},z=null,W={},m={},g=new WeakMap,d=[],p=null,_=!1,b=null,v=null,y=null,M=null,C=null,L=null,x=null,w=!1,R=null,G=null,Z=null,N=null,D=null,ue.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ae,disable:ce,bindFramebuffer:ve,drawBuffers:_e,useProgram:we,setBlending:q,setMaterial:K,setFlipSided:te,setCullFace:he,setLineWidth:pe,setPolygonOffset:re,setScissorTest:ge,activeTexture:oe,bindTexture:T,unbindTexture:S,compressedTexImage2D:O,compressedTexImage3D:$,texImage2D:Le,texImage3D:Te,updateUBOMapping:Re,uniformBlockBinding:$e,texStorage2D:J,texStorage3D:Ee,texSubImage2D:ne,texSubImage3D:fe,compressedTexSubImage2D:Me,compressedTexSubImage3D:me,scissor:Ae,viewport:be,reset:mt}}function QS(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,S){return _?new OffscreenCanvas(T,S):oa("canvas")}function v(T,S,O,$){let ne=1;if((T.width>$||T.height>$)&&(ne=$/Math.max(T.width,T.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const fe=S?hc:Math.floor,Me=fe(ne*T.width),me=fe(ne*T.height);d===void 0&&(d=b(Me,me));const J=O?b(Me,me):d;return J.width=Me,J.height=me,J.getContext("2d").drawImage(T,0,0,Me,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Me+"x"+me+")."),J}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Nf(T.width)&&Nf(T.height)}function M(T){return a?!1:T.wrapS!==Tn||T.wrapT!==Tn||T.minFilter!==Nt&&T.minFilter!==on}function C(T,S){return T.generateMipmaps&&S&&T.minFilter!==Nt&&T.minFilter!==on}function L(T){i.generateMipmap(T)}function x(T,S,O,$,ne=!1){if(a===!1)return S;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe=S;return S===6403&&(O===5126&&(fe=33326),O===5131&&(fe=33325),O===5121&&(fe=33321)),S===33319&&(O===5126&&(fe=33328),O===5131&&(fe=33327),O===5121&&(fe=33323)),S===6408&&(O===5126&&(fe=34836),O===5131&&(fe=34842),O===5121&&(fe=$===it&&ne===!1?35907:32856),O===32819&&(fe=32854),O===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function w(T,S,O){return C(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){return T===Nt||T===uf||T===ff?9728:9729}function G(T){const S=T.target;S.removeEventListener("dispose",G),N(S),S.isVideoTexture&&g.delete(S)}function Z(T){const S=T.target;S.removeEventListener("dispose",Z),X(S)}function N(T){const S=n.get(T);if(S.__webglInit===void 0)return;const O=T.source,$=p.get(O);if($){const ne=$[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(T),Object.keys($).length===0&&p.delete(O)}n.remove(T)}function D(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const O=T.source,$=p.get(O);delete $[S.__cacheKey],o.memory.textures--}function X(T){const S=T.texture,O=n.get(T),$=n.get(S);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(O.__webglFramebuffer[ne]),O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ne=0;ne<O.__webglColorRenderbuffer.length;ne++)O.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[ne]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,fe=S.length;ne<fe;ne++){const Me=n.get(S[ne]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(T)}let j=0;function Y(){j=0}function V(){const T=j;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),j+=1,T}function z(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function W(T,S){const O=n.get(T);if(T.isVideoTexture&&ge(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(O,T,S);return}}t.bindTexture(3553,O.__webglTexture,33984+S)}function le(T,S){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ce(O,T,S);return}t.bindTexture(35866,O.__webglTexture,33984+S)}function se(T,S){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ce(O,T,S);return}t.bindTexture(32879,O.__webglTexture,33984+S)}function ue(T,S){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ve(O,T,S);return}t.bindTexture(34067,O.__webglTexture,33984+S)}const ye={[cc]:10497,[Tn]:33071,[uc]:33648},k={[Nt]:9728,[uf]:9984,[ff]:9986,[on]:9729,[Hx]:9985,[wa]:9987};function F(T,S,O){if(O?(i.texParameteri(T,10242,ye[S.wrapS]),i.texParameteri(T,10243,ye[S.wrapT]),(T===32879||T===35866)&&i.texParameteri(T,32882,ye[S.wrapR]),i.texParameteri(T,10240,k[S.magFilter]),i.texParameteri(T,10241,k[S.minFilter])):(i.texParameteri(T,10242,33071),i.texParameteri(T,10243,33071),(T===32879||T===35866)&&i.texParameteri(T,32882,33071),(S.wrapS!==Tn||S.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,10240,R(S.magFilter)),i.texParameteri(T,10241,R(S.minFilter)),S.minFilter!==Nt&&S.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(S.type===ir&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Qs&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ae(T,S){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",G));const $=S.source;let ne=p.get($);ne===void 0&&(ne={},p.set($,ne));const fe=z(S);if(fe!==T.__cacheKey){ne[fe]===void 0&&(ne[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[fe].usedTimes++;const Me=ne[T.__cacheKey];Me!==void 0&&(ne[T.__cacheKey].usedTimes--,Me.usedTimes===0&&D(S)),T.__cacheKey=fe,T.__webglTexture=ne[fe].texture}return O}function ce(T,S,O){let $=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=35866),S.isData3DTexture&&($=32879);const ne=ae(T,S),fe=S.source;t.bindTexture($,T.__webglTexture,33984+O);const Me=n.get(fe);if(fe.version!==Me.__version||ne===!0){t.activeTexture(33984+O),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const me=M(S)&&y(S.image)===!1;let J=v(S.image,me,!1,u);J=oe(S,J);const Ee=y(J)||a,Le=s.convert(S.format,S.encoding);let Te=s.convert(S.type),Ae=x(S.internalFormat,Le,Te,S.encoding,S.isVideoTexture);F($,S,Ee);let be;const Re=S.mipmaps,$e=a&&S.isVideoTexture!==!0,mt=Me.__version===void 0||ne===!0,I=w(S,J,Ee);if(S.isDepthTexture)Ae=6402,a?S.type===ir?Ae=36012:S.type===nr?Ae=33190:S.type===Zr?Ae=35056:Ae=33189:S.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ur&&Ae===6402&&S.type!==Np&&S.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=nr,Te=s.convert(S.type)),S.format===us&&Ae===6402&&(Ae=34041,S.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Zr,Te=s.convert(S.type))),mt&&($e?t.texStorage2D(3553,1,Ae,J.width,J.height):t.texImage2D(3553,0,Ae,J.width,J.height,0,Le,Te,null));else if(S.isDataTexture)if(Re.length>0&&Ee){$e&&mt&&t.texStorage2D(3553,I,Ae,Re[0].width,Re[0].height);for(let ee=0,de=Re.length;ee<de;ee++)be=Re[ee],$e?t.texSubImage2D(3553,ee,0,0,be.width,be.height,Le,Te,be.data):t.texImage2D(3553,ee,Ae,be.width,be.height,0,Le,Te,be.data);S.generateMipmaps=!1}else $e?(mt&&t.texStorage2D(3553,I,Ae,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,Le,Te,J.data)):t.texImage2D(3553,0,Ae,J.width,J.height,0,Le,Te,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$e&&mt&&t.texStorage3D(35866,I,Ae,Re[0].width,Re[0].height,J.depth);for(let ee=0,de=Re.length;ee<de;ee++)be=Re[ee],S.format!==En?Le!==null?$e?t.compressedTexSubImage3D(35866,ee,0,0,0,be.width,be.height,J.depth,Le,be.data,0,0):t.compressedTexImage3D(35866,ee,Ae,be.width,be.height,J.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(35866,ee,0,0,0,be.width,be.height,J.depth,Le,Te,be.data):t.texImage3D(35866,ee,Ae,be.width,be.height,J.depth,0,Le,Te,be.data)}else{$e&&mt&&t.texStorage2D(3553,I,Ae,Re[0].width,Re[0].height);for(let ee=0,de=Re.length;ee<de;ee++)be=Re[ee],S.format!==En?Le!==null?$e?t.compressedTexSubImage2D(3553,ee,0,0,be.width,be.height,Le,be.data):t.compressedTexImage2D(3553,ee,Ae,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(3553,ee,0,0,be.width,be.height,Le,Te,be.data):t.texImage2D(3553,ee,Ae,be.width,be.height,0,Le,Te,be.data)}else if(S.isDataArrayTexture)$e?(mt&&t.texStorage3D(35866,I,Ae,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Le,Te,J.data)):t.texImage3D(35866,0,Ae,J.width,J.height,J.depth,0,Le,Te,J.data);else if(S.isData3DTexture)$e?(mt&&t.texStorage3D(32879,I,Ae,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Le,Te,J.data)):t.texImage3D(32879,0,Ae,J.width,J.height,J.depth,0,Le,Te,J.data);else if(S.isFramebufferTexture){if(mt)if($e)t.texStorage2D(3553,I,Ae,J.width,J.height);else{let ee=J.width,de=J.height;for(let Se=0;Se<I;Se++)t.texImage2D(3553,Se,Ae,ee,de,0,Le,Te,null),ee>>=1,de>>=1}}else if(Re.length>0&&Ee){$e&&mt&&t.texStorage2D(3553,I,Ae,Re[0].width,Re[0].height);for(let ee=0,de=Re.length;ee<de;ee++)be=Re[ee],$e?t.texSubImage2D(3553,ee,0,0,Le,Te,be):t.texImage2D(3553,ee,Ae,Le,Te,be);S.generateMipmaps=!1}else $e?(mt&&t.texStorage2D(3553,I,Ae,J.width,J.height),t.texSubImage2D(3553,0,0,0,Le,Te,J)):t.texImage2D(3553,0,Ae,Le,Te,J);C(S,Ee)&&L($),Me.__version=fe.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ve(T,S,O){if(S.image.length!==6)return;const $=ae(T,S),ne=S.source;t.bindTexture(34067,T.__webglTexture,33984+O);const fe=n.get(ne);if(ne.version!==fe.__version||$===!0){t.activeTexture(33984+O),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!Me&&!me?J[ee]=v(S.image[ee],!1,!0,c):J[ee]=me?S.image[ee].image:S.image[ee],J[ee]=oe(S,J[ee]);const Ee=J[0],Le=y(Ee)||a,Te=s.convert(S.format,S.encoding),Ae=s.convert(S.type),be=x(S.internalFormat,Te,Ae,S.encoding),Re=a&&S.isVideoTexture!==!0,$e=fe.__version===void 0||$===!0;let mt=w(S,Ee,Le);F(34067,S,Le);let I;if(Me){Re&&$e&&t.texStorage2D(34067,mt,be,Ee.width,Ee.height);for(let ee=0;ee<6;ee++){I=J[ee].mipmaps;for(let de=0;de<I.length;de++){const Se=I[de];S.format!==En?Te!==null?Re?t.compressedTexSubImage2D(34069+ee,de,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(34069+ee,de,be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+ee,de,0,0,Se.width,Se.height,Te,Ae,Se.data):t.texImage2D(34069+ee,de,be,Se.width,Se.height,0,Te,Ae,Se.data)}}}else{I=S.mipmaps,Re&&$e&&(I.length>0&&mt++,t.texStorage2D(34067,mt,be,J[0].width,J[0].height));for(let ee=0;ee<6;ee++)if(me){Re?t.texSubImage2D(34069+ee,0,0,0,J[ee].width,J[ee].height,Te,Ae,J[ee].data):t.texImage2D(34069+ee,0,be,J[ee].width,J[ee].height,0,Te,Ae,J[ee].data);for(let de=0;de<I.length;de++){const Ce=I[de].image[ee].image;Re?t.texSubImage2D(34069+ee,de+1,0,0,Ce.width,Ce.height,Te,Ae,Ce.data):t.texImage2D(34069+ee,de+1,be,Ce.width,Ce.height,0,Te,Ae,Ce.data)}}else{Re?t.texSubImage2D(34069+ee,0,0,0,Te,Ae,J[ee]):t.texImage2D(34069+ee,0,be,Te,Ae,J[ee]);for(let de=0;de<I.length;de++){const Se=I[de];Re?t.texSubImage2D(34069+ee,de+1,0,0,Te,Ae,Se.image[ee]):t.texImage2D(34069+ee,de+1,be,Te,Ae,Se.image[ee])}}}C(S,Le)&&L(34067),fe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function _e(T,S,O,$,ne){const fe=s.convert(O.format,O.encoding),Me=s.convert(O.type),me=x(O.internalFormat,fe,Me,O.encoding);n.get(S).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,me,S.width,S.height,S.depth,0,fe,Me,null):t.texImage2D(ne,0,me,S.width,S.height,0,fe,Me,null)),t.bindFramebuffer(36160,T),re(S)?h.framebufferTexture2DMultisampleEXT(36160,$,ne,n.get(O).__webglTexture,0,pe(S)):(ne===3553||ne>=34069&&ne<=34074)&&i.framebufferTexture2D(36160,$,ne,n.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(T,S,O){if(i.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let $=33189;if(O||re(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ir?$=36012:ne.type===nr&&($=33190));const fe=pe(S);re(S)?h.renderbufferStorageMultisampleEXT(36161,fe,$,S.width,S.height):i.renderbufferStorageMultisample(36161,fe,$,S.width,S.height)}else i.renderbufferStorage(36161,$,S.width,S.height);i.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const $=pe(S);O&&re(S)===!1?i.renderbufferStorageMultisample(36161,$,35056,S.width,S.height):re(S)?h.renderbufferStorageMultisampleEXT(36161,$,35056,S.width,S.height):i.renderbufferStorage(36161,34041,S.width,S.height),i.framebufferRenderbuffer(36160,33306,36161,T)}else{const $=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<$.length;ne++){const fe=$[ne],Me=s.convert(fe.format,fe.encoding),me=s.convert(fe.type),J=x(fe.internalFormat,Me,me,fe.encoding),Ee=pe(S);O&&re(S)===!1?i.renderbufferStorageMultisample(36161,Ee,J,S.width,S.height):re(S)?h.renderbufferStorageMultisampleEXT(36161,Ee,J,S.width,S.height):i.renderbufferStorage(36161,J,S.width,S.height)}}i.bindRenderbuffer(36161,null)}function E(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,ne=pe(S);if(S.depthTexture.format===ur)re(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,ne):i.framebufferTexture2D(36160,36096,3553,$,0);else if(S.depthTexture.format===us)re(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,ne):i.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function P(T){const S=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");E(S.__webglFramebuffer,T)}else if(O){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]=i.createRenderbuffer(),we(S.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),we(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function q(T,S,O){const $=n.get(T);S!==void 0&&_e($.__webglFramebuffer,T,T.texture,36064,3553),O!==void 0&&P(T)}function K(T){const S=T.texture,O=n.get(T),$=n.get(S);T.addEventListener("dispose",Z),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,fe=T.isWebGLMultipleRenderTargets===!0,Me=y(T)||a;if(ne){O.__webglFramebuffer=[];for(let me=0;me<6;me++)O.__webglFramebuffer[me]=i.createFramebuffer()}else{if(O.__webglFramebuffer=i.createFramebuffer(),fe)if(r.drawBuffers){const me=T.texture;for(let J=0,Ee=me.length;J<Ee;J++){const Le=n.get(me[J]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&re(T)===!1){const me=fe?S:[S];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let J=0;J<me.length;J++){const Ee=me[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(36161,O.__webglColorRenderbuffer[J]);const Le=s.convert(Ee.format,Ee.encoding),Te=s.convert(Ee.type),Ae=x(Ee.internalFormat,Le,Te,Ee.encoding,T.isXRRenderTarget===!0),be=pe(T);i.renderbufferStorageMultisample(36161,be,Ae,T.width,T.height),i.framebufferRenderbuffer(36160,36064+J,36161,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(36161,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),we(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,$.__webglTexture),F(34067,S,Me);for(let me=0;me<6;me++)_e(O.__webglFramebuffer[me],T,S,36064,34069+me);C(S,Me)&&L(34067),t.unbindTexture()}else if(fe){const me=T.texture;for(let J=0,Ee=me.length;J<Ee;J++){const Le=me[J],Te=n.get(Le);t.bindTexture(3553,Te.__webglTexture),F(3553,Le,Me),_e(O.__webglFramebuffer,T,Le,36064+J,3553),C(Le,Me)&&L(3553)}t.unbindTexture()}else{let me=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?me=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,$.__webglTexture),F(me,S,Me),_e(O.__webglFramebuffer,T,S,36064,me),C(S,Me)&&L(me),t.unbindTexture()}T.depthBuffer&&P(T)}function te(T){const S=y(T)||a,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,ne=O.length;$<ne;$++){const fe=O[$];if(C(fe,S)){const Me=T.isWebGLCubeRenderTarget?34067:3553,me=n.get(fe).__webglTexture;t.bindTexture(Me,me),L(Me),t.unbindTexture()}}}function he(T){if(a&&T.samples>0&&re(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,$=T.height;let ne=16384;const fe=[],Me=T.stencilBuffer?33306:36096,me=n.get(T),J=T.isWebGLMultipleRenderTargets===!0;if(J)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){fe.push(36064+Ee),T.depthBuffer&&fe.push(Me);const Le=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Le===!1&&(T.depthBuffer&&(ne|=256),T.stencilBuffer&&(ne|=1024)),J&&i.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Ee]),Le===!0&&(i.invalidateFramebuffer(36008,[Me]),i.invalidateFramebuffer(36009,[Me])),J){const Te=n.get(S[Ee]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Te,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,ne,9728),m&&i.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,me.__webglColorRenderbuffer[Ee]);const Le=n.get(S[Ee]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,Le,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function pe(T){return Math.min(f,T.samples)}function re(T){const S=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ge(T){const S=o.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function oe(T,S){const O=T.encoding,$=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===fc||O!==pr&&(O===it?a===!1?e.has("EXT_sRGB")===!0&&$===En?(T.format=fc,T.minFilter=on,T.generateMipmaps=!1):S=kp.sRGBToLinear(S):($!==En||ne!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),S}this.allocateTextureUnit=V,this.resetTextureUnits=Y,this.setTexture2D=W,this.setTexture2DArray=le,this.setTexture3D=se,this.setTextureCube=ue,this.rebindTextures=q,this.setupRenderTarget=K,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=re}function ew(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===dr)return 5121;if(s===jx)return 32819;if(s===Yx)return 32820;if(s===Wx)return 5120;if(s===qx)return 5122;if(s===Np)return 5123;if(s===Xx)return 5124;if(s===nr)return 5125;if(s===ir)return 5126;if(s===Qs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$x)return 6406;if(s===En)return 6408;if(s===Zx)return 6409;if(s===Jx)return 6410;if(s===ur)return 6402;if(s===us)return 34041;if(s===Qx)return 6403;if(s===Kx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===fc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ev)return 36244;if(s===tv)return 33319;if(s===nv)return 33320;if(s===iv)return 36249;if(s===$a||s===Ka||s===Za||s===Ja)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hf||s===df||s===pf||s===mf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===hf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===df)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===mf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gf||s===_f)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===gf)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===_f)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xf||s===vf||s===yf||s===Mf||s===bf||s===Sf||s===wf||s===Tf||s===Ef||s===Cf||s===Af||s===Pf||s===Lf||s===Rf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Tf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ef)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Af)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rf)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Df)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Df)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Zr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class tw extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ds extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nw={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const b=new Ds;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[d.jointName]=b,c.add(b)}const _=c.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class iw extends Dn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:ur,u!==ur&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ur&&(n=nr),n===void 0&&u===us&&(n=Zr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1}}class rw extends _s{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],b=[],v=new an;v.layers.enable(1),v.viewport=new vt;const y=new an;y.layers.enable(2),y.viewport=new vt;const M=[v,y],C=new tw;C.layers.enable(1),C.layers.enable(2);let L=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=_[z];return W===void 0&&(W=new El,_[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=_[z];return W===void 0&&(W=new El,_[z]=W),W.getGripSpace()},this.getHand=function(z){let W=_[z];return W===void 0&&(W=new El,_[z]=W),W.getHandSpace()};function w(z){const W=b.indexOf(z.inputSource);if(W===-1)return;const le=_[W];le!==void 0&&le.dispatchEvent({type:z.type,data:z.inputSource})}function R(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",G);for(let z=0;z<_.length;z++){const W=b[z];W!==null&&(b[z]=null,_[z].disconnect(W))}L=null,x=null,e.setRenderTarget(d),h=null,f=null,u=null,r=null,p=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",R),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:h}),p=new mr(h.framebufferWidth,h.framebufferHeight,{format:En,type:dr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,le=null,se=null;g.depth&&(se=g.stencil?35056:33190,W=g.stencil?us:ur,le=g.stencil?Zr:nr);const ue={colorFormat:32856,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),p=new mr(f.textureWidth,f.textureHeight,{format:En,type:dr,depthTexture:new iw(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ye=e.properties.get(p);ye.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(z){for(let W=0;W<z.removed.length;W++){const le=z.removed[W],se=b.indexOf(le);se>=0&&(b[se]=null,_[se].dispatchEvent({type:"disconnected",data:le}))}for(let W=0;W<z.added.length;W++){const le=z.added[W];let se=b.indexOf(le);if(se===-1){for(let ye=0;ye<_.length;ye++)if(ye>=b.length){b.push(le),se=ye;break}else if(b[ye]===null){b[ye]=le,se=ye;break}if(se===-1)break}const ue=_[se];ue&&ue.dispatchEvent({type:"connected",data:le})}}const Z=new U,N=new U;function D(z,W,le){Z.setFromMatrixPosition(W.matrixWorld),N.setFromMatrixPosition(le.matrixWorld);const se=Z.distanceTo(N),ue=W.projectionMatrix.elements,ye=le.projectionMatrix.elements,k=ue[14]/(ue[10]-1),F=ue[14]/(ue[10]+1),ae=(ue[9]+1)/ue[5],ce=(ue[9]-1)/ue[5],ve=(ue[8]-1)/ue[0],_e=(ye[8]+1)/ye[0],we=k*ve,E=k*_e,P=se/(-ve+_e),q=P*-ve;W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(q),z.translateZ(P),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const K=k+P,te=F+P,he=we-q,pe=E+(se-q),re=ae*F/te*K,ge=ce*F/te*K;z.projectionMatrix.makePerspective(he,pe,re,ge,K,te)}function X(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;C.near=y.near=v.near=z.near,C.far=y.far=v.far=z.far,(L!==C.near||x!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,x=C.far);const W=z.parent,le=C.cameras;X(C,W);for(let ue=0;ue<le.length;ue++)X(le[ue],W);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),z.matrix.copy(C.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const se=z.children;for(let ue=0,ye=se.length;ue<ye;ue++)se[ue].updateMatrixWorld(!0);le.length===2?D(C,v,y):C.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(z){f!==null&&(f.fixedFoveation=z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=z)};let j=null;function Y(z,W){if(c=W.getViewerPose(l||o),m=W,c!==null){const le=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let se=!1;le.length!==C.cameras.length&&(C.cameras.length=0,se=!0);for(let ue=0;ue<le.length;ue++){const ye=le[ue];let k=null;if(h!==null)k=h.getViewport(ye);else{const ae=u.getViewSubImage(f,ye);k=ae.viewport,ue===0&&(e.setRenderTargetTextures(p,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(p))}let F=M[ue];F===void 0&&(F=new an,F.layers.enable(ue),F.viewport=new vt,M[ue]=F),F.matrix.fromArray(ye.transform.matrix),F.projectionMatrix.fromArray(ye.projectionMatrix),F.viewport.set(k.x,k.y,k.width,k.height),ue===0&&C.matrix.copy(F.matrix),se===!0&&C.cameras.push(F)}}for(let le=0;le<_.length;le++){const se=b[le],ue=_[le];se!==null&&ue!==void 0&&ue.update(se,W,l||o)}j&&j(z,W),m=null}const V=new Kp;V.setAnimationLoop(Y),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function sw(i,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),c(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,v)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),g(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,_,b):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===gn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===gn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=i.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,_,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=b*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===gn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ow(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,v){const y=v.program;n.uniformBlockBinding(b,y)}function c(b,v){let y=r[b.id];y===void 0&&(g(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",p));const M=v.program;n.updateUBOMapping(b,M);const C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const v=f();b.__bindingPointIndex=v;const y=i.createBuffer(),M=b.__size,C=b.usage;return i.bindBuffer(35345,y),i.bufferData(35345,M,C),i.bindBuffer(35345,null),i.bindBufferBase(35345,v,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const v=r[b.id],y=b.uniforms,M=b.__cache;i.bindBuffer(35345,v);for(let C=0,L=y.length;C<L;C++){const x=y[C];if(m(x,C,M)===!0){const w=x.value,R=x.__offset;typeof w=="number"?(x.__data[0]=w,i.bufferSubData(35345,R,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):w.toArray(x.__data),i.bufferSubData(35345,R,x.__data))}}i.bindBuffer(35345,null)}function m(b,v,y){const M=b.value;if(y[v]===void 0)return typeof M=="number"?y[v]=M:y[v]=M.clone(),!0;if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const C=y[v];if(C.equals(M)===!1)return C.copy(M),!0}return!1}function g(b){const v=b.uniforms;let y=0;const M=16;let C=0;for(let L=0,x=v.length;L<x;L++){const w=v[L],R=d(w);if(w.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,L>0){C=y%M;const G=M-C;C!==0&&G-R.boundary<0&&(y+=M-C,w.__offset=y)}y+=R.storage}return C=y%M,C>0&&(y+=M-C),b.__size=y,b.__cache={},this}function d(b){const v=b.value,y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(b){const v=b.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function _(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function aw(){const i=oa("canvas");return i.style.display="block",i}function nm(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:aw(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pr,this.physicallyCorrectLights=!1,this.toneMapping=si,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,b=0,v=null,y=-1,M=null;const C=new vt,L=new vt;let x=null,w=e.width,R=e.height,G=1,Z=null,N=null;const D=new vt(0,0,w,R),X=new vt(0,0,w,R);let j=!1;const Y=new nu;let V=!1,z=!1,W=null;const le=new ut,se=new Xe,ue=new U,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return v===null?G:1}let F=t;function ae(A,H){for(let Q=0;Q<A.length;Q++){const B=A[Q],ie=e.getContext(B,H);if(ie!==null)return ie}return null}try{const A={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tu}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Re,!1),F===null){const H=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&H.shift(),F=ae(H,A),F===null)throw ae(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,ve,_e,we,E,P,q,K,te,he,pe,re,ge,oe,T,S,O,$,ne,fe,Me,me,J,Ee;function Le(){ce=new xb(F),ve=new hb(F,ce,i),ce.init(ve),me=new ew(F,ce,ve),_e=new JS(F,ce,ve),we=new Mb,E=new US,P=new QS(F,ce,_e,E,ve,me,we),q=new pb(d),K=new _b(d),te=new Lv(F,ve),J=new ub(F,ce,te,ve),he=new vb(F,te,we,J),pe=new Tb(F,he,te,we),ne=new wb(F,ve,P),S=new db(E),re=new zS(d,q,K,ce,ve,J,S),ge=new sw(d,E),oe=new kS,T=new XS(ce,ve),$=new cb(d,q,K,_e,pe,u,o),O=new ZS(d,pe,ve),Ee=new ow(F,we,ve,_e),fe=new fb(F,ce,we,ve),Me=new yb(F,ce,we,ve),we.programs=re.programs,d.capabilities=ve,d.extensions=ce,d.properties=E,d.renderLists=oe,d.shadowMap=O,d.state=_e,d.info=we}Le();const Te=new rw(d,F);this.xr=Te,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(w,R,!1))},this.getSize=function(A){return A.set(w,R)},this.setSize=function(A,H,Q){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=A,R=H,e.width=Math.floor(A*G),e.height=Math.floor(H*G),Q!==!1&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(w*G,R*G).floor()},this.setDrawingBufferSize=function(A,H,Q){w=A,R=H,G=Q,e.width=Math.floor(A*Q),e.height=Math.floor(H*Q),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,H,Q,B){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,H,Q,B),_e.viewport(C.copy(D).multiplyScalar(G).floor())},this.getScissor=function(A){return A.copy(X)},this.setScissor=function(A,H,Q,B){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,H,Q,B),_e.scissor(L.copy(X).multiplyScalar(G).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(A){_e.setScissorTest(j=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,H=!0,Q=!0){let B=0;A&&(B|=16384),H&&(B|=256),Q&&(B|=1024),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),oe.dispose(),T.dispose(),E.dispose(),q.dispose(),K.dispose(),pe.dispose(),J.dispose(),Ee.dispose(),re.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Se),Te.removeEventListener("sessionend",Ce),W&&(W.dispose(),W=null),He.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=we.autoReset,H=O.enabled,Q=O.autoUpdate,B=O.needsUpdate,ie=O.type;Le(),we.autoReset=A,O.enabled=H,O.autoUpdate=Q,O.needsUpdate=B,O.type=ie}function Re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $e(A){const H=A.target;H.removeEventListener("dispose",$e),mt(H)}function mt(A){I(A),E.remove(A)}function I(A){const H=E.get(A).programs;H!==void 0&&(H.forEach(function(Q){re.releaseProgram(Q)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Q,B,ie,Pe){H===null&&(H=ye);const De=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=mm(A,H,Q,B,ie);_e.setMaterial(B,De);let Fe=Q.index;const We=Q.attributes.position;if(Fe===null){if(We===void 0||We.count===0)return}else if(Fe.count===0)return;let Ue=1;B.wireframe===!0&&(Fe=he.getWireframeAttribute(Q),Ue=2),J.setup(ie,B,ze,Q,Fe);let ke,nt=fe;Fe!==null&&(ke=te.get(Fe),nt=Me,nt.setIndex(ke));const Ui=Fe!==null?Fe.count:We.count,xr=Q.drawRange.start*Ue,vr=Q.drawRange.count*Ue,Fn=Pe!==null?Pe.start*Ue:0,qe=Pe!==null?Pe.count*Ue:1/0,yr=Math.max(xr,Fn),at=Math.min(Ui,xr+vr,Fn+qe)-1,en=Math.max(0,at-yr+1);if(en!==0){if(ie.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*k()),nt.setMode(1)):nt.setMode(4);else if(ie.isLine){let fi=B.linewidth;fi===void 0&&(fi=1),_e.setLineWidth(fi*k()),ie.isLineSegments?nt.setMode(1):ie.isLineLoop?nt.setMode(2):nt.setMode(3)}else ie.isPoints?nt.setMode(0):ie.isSprite&&nt.setMode(4);if(ie.isInstancedMesh)nt.renderInstances(yr,en,ie.count);else if(Q.isInstancedBufferGeometry){const fi=Math.min(Q.instanceCount,Q._maxInstanceCount);nt.renderInstances(yr,en,fi)}else nt.render(yr,en)}},this.compile=function(A,H){function Q(B,ie,Pe){B.transparent===!0&&B.side===Ei?(B.side=gn,B.needsUpdate=!0,Qt(B,ie,Pe),B.side=as,B.needsUpdate=!0,Qt(B,ie,Pe),B.side=Ei):Qt(B,ie,Pe)}h=T.get(A),h.init(),g.push(h),A.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(d.physicallyCorrectLights),A.traverse(function(B){const ie=B.material;if(ie)if(Array.isArray(ie))for(let Pe=0;Pe<ie.length;Pe++){const De=ie[Pe];Q(De,A,B)}else Q(ie,A,B)}),g.pop(),h=null};let ee=null;function de(A){ee&&ee(A)}function Se(){He.stop()}function Ce(){He.start()}const He=new Kp;He.setAnimationLoop(de),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(A){ee=A,Te.setAnimationLoop(A),A===null?He.stop():He.start()},Te.addEventListener("sessionstart",Se),Te.addEventListener("sessionend",Ce),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(H),H=Te.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,H,v),h=T.get(A,g.length),h.init(),g.push(h),le.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(le),z=this.localClippingEnabled,V=S.init(this.clippingPlanes,z,H),f=oe.get(A,m.length),f.init(),m.push(f),gt(A,H,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(Z,N),V===!0&&S.beginShadows();const Q=h.state.shadowsArray;if(O.render(Q,A,H),V===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,A),h.setupLights(d.physicallyCorrectLights),H.isArrayCamera){const B=H.cameras;for(let ie=0,Pe=B.length;ie<Pe;ie++){const De=B[ie];wt(f,A,De,De.viewport)}}else wt(f,A,H);v!==null&&(P.updateMultisampleRenderTarget(v),P.updateRenderTargetMipmap(v)),A.isScene===!0&&A.onAfterRender(d,A,H),J.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function gt(A,H,Q,B){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){B&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const De=pe.update(A),ze=A.material;ze.visible&&f.push(A,De,ze,Q,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==we.render.frame&&(A.skeleton.update(),A.skeleton.frame=we.render.frame),!A.frustumCulled||Y.intersectsObject(A))){B&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const De=pe.update(A),ze=A.material;if(Array.isArray(ze)){const Fe=De.groups;for(let We=0,Ue=Fe.length;We<Ue;We++){const ke=Fe[We],nt=ze[ke.materialIndex];nt&&nt.visible&&f.push(A,De,nt,Q,ue.z,ke)}}else ze.visible&&f.push(A,De,ze,Q,ue.z,null)}}const Pe=A.children;for(let De=0,ze=Pe.length;De<ze;De++)gt(Pe[De],H,Q,B)}function wt(A,H,Q,B){const ie=A.opaque,Pe=A.transmissive,De=A.transparent;h.setupLightsView(Q),Pe.length>0&&zi(ie,H,Q),B&&_e.viewport(C.copy(B)),ie.length>0&&Je(ie,H,Q),Pe.length>0&&Je(Pe,H,Q),De.length>0&&Je(De,H,Q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function zi(A,H,Q){const B=ve.isWebGL2;W===null&&(W=new mr(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Qs:dr,minFilter:wa,samples:B&&s===!0?4:0})),d.getDrawingBufferSize(se),B?W.setSize(se.x,se.y):W.setSize(hc(se.x),hc(se.y));const ie=d.getRenderTarget();d.setRenderTarget(W),d.clear();const Pe=d.toneMapping;d.toneMapping=si,Je(A,H,Q),d.toneMapping=Pe,P.updateMultisampleRenderTarget(W),P.updateRenderTargetMipmap(W),d.setRenderTarget(ie)}function Je(A,H,Q){const B=H.isScene===!0?H.overrideMaterial:null;for(let ie=0,Pe=A.length;ie<Pe;ie++){const De=A[ie],ze=De.object,Fe=De.geometry,We=B===null?De.material:B,Ue=De.group;ze.layers.test(Q.layers)&&Wn(ze,H,Q,Fe,We,Ue)}}function Wn(A,H,Q,B,ie,Pe){A.onBeforeRender(d,H,Q,B,ie,Pe),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(d,H,Q,B,A,Pe),ie.transparent===!0&&ie.side===Ei?(ie.side=gn,ie.needsUpdate=!0,d.renderBufferDirect(Q,H,B,ie,A,Pe),ie.side=as,ie.needsUpdate=!0,d.renderBufferDirect(Q,H,B,ie,A,Pe),ie.side=Ei):d.renderBufferDirect(Q,H,B,ie,A,Pe),A.onAfterRender(d,H,Q,B,ie,Pe)}function Qt(A,H,Q){H.isScene!==!0&&(H=ye);const B=E.get(A),ie=h.state.lights,Pe=h.state.shadowsArray,De=ie.state.version,ze=re.getParameters(A,ie.state,Pe,H,Q),Fe=re.getProgramCacheKey(ze);let We=B.programs;B.environment=A.isMeshStandardMaterial?H.environment:null,B.fog=H.fog,B.envMap=(A.isMeshStandardMaterial?K:q).get(A.envMap||B.environment),We===void 0&&(A.addEventListener("dispose",$e),We=new Map,B.programs=We);let Ue=We.get(Fe);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===De)return fu(A,ze),Ue}else ze.uniforms=re.getUniforms(A),A.onBuild(Q,ze,d),A.onBeforeCompile(ze,d),Ue=re.acquireProgram(ze,Fe),We.set(Fe,Ue),B.uniforms=ze.uniforms;const ke=B.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=S.uniform),fu(A,ze),B.needsLights=_m(A),B.lightsStateVersion=De,B.needsLights&&(ke.ambientLightColor.value=ie.state.ambient,ke.lightProbe.value=ie.state.probe,ke.directionalLights.value=ie.state.directional,ke.directionalLightShadows.value=ie.state.directionalShadow,ke.spotLights.value=ie.state.spot,ke.spotLightShadows.value=ie.state.spotShadow,ke.rectAreaLights.value=ie.state.rectArea,ke.ltc_1.value=ie.state.rectAreaLTC1,ke.ltc_2.value=ie.state.rectAreaLTC2,ke.pointLights.value=ie.state.point,ke.pointLightShadows.value=ie.state.pointShadow,ke.hemisphereLights.value=ie.state.hemi,ke.directionalShadowMap.value=ie.state.directionalShadowMap,ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,ke.spotShadowMap.value=ie.state.spotShadowMap,ke.spotLightMatrix.value=ie.state.spotLightMatrix,ke.spotLightMap.value=ie.state.spotLightMap,ke.pointShadowMap.value=ie.state.pointShadowMap,ke.pointShadowMatrix.value=ie.state.pointShadowMatrix);const nt=Ue.getUniforms(),Ui=jo.seqWithValue(nt.seq,ke);return B.currentProgram=Ue,B.uniformsList=Ui,Ue}function fu(A,H){const Q=E.get(A);Q.outputEncoding=H.outputEncoding,Q.instancing=H.instancing,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function mm(A,H,Q,B,ie){H.isScene!==!0&&(H=ye),P.resetTextureUnits();const Pe=H.fog,De=B.isMeshStandardMaterial?H.environment:null,ze=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:pr,Fe=(B.isMeshStandardMaterial?K:q).get(B.envMap||De),We=B.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ue=!!B.normalMap&&!!Q.attributes.tangent,ke=!!Q.morphAttributes.position,nt=!!Q.morphAttributes.normal,Ui=!!Q.morphAttributes.color,xr=B.toneMapped?d.toneMapping:si,vr=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Fn=vr!==void 0?vr.length:0,qe=E.get(B),yr=h.state.lights;if(V===!0&&(z===!0||A!==M)){const Gt=A===M&&B.id===y;S.setState(B,A,Gt)}let at=!1;B.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==yr.state.version||qe.outputEncoding!==ze||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Fe||B.fog===!0&&qe.fog!==Pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==S.numPlanes||qe.numIntersection!==S.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==Ue||qe.morphTargets!==ke||qe.morphNormals!==nt||qe.morphColors!==Ui||qe.toneMapping!==xr||ve.isWebGL2===!0&&qe.morphTargetsCount!==Fn)&&(at=!0):(at=!0,qe.__version=B.version);let en=qe.currentProgram;at===!0&&(en=Qt(B,H,ie));let fi=!1,ys=!1,Pa=!1;const Dt=en.getUniforms(),Bi=qe.uniforms;if(_e.useProgram(en.program)&&(fi=!0,ys=!0,Pa=!0),B.id!==y&&(y=B.id,ys=!0),fi||M!==A){if(Dt.setValue(F,"projectionMatrix",A.projectionMatrix),ve.logarithmicDepthBuffer&&Dt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,ys=!0,Pa=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Gt=Dt.map.cameraPosition;Gt!==void 0&&Gt.setValue(F,ue.setFromMatrixPosition(A.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Dt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||ie.isSkinnedMesh)&&Dt.setValue(F,"viewMatrix",A.matrixWorldInverse)}if(ie.isSkinnedMesh){Dt.setOptional(F,ie,"bindMatrix"),Dt.setOptional(F,ie,"bindMatrixInverse");const Gt=ie.skeleton;Gt&&(ve.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Dt.setValue(F,"boneTexture",Gt.boneTexture,P),Dt.setValue(F,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const La=Q.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&ve.isWebGL2===!0)&&ne.update(ie,Q,B,en),(ys||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,Dt.setValue(F,"receiveShadow",ie.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Bi.envMap.value=Fe,Bi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ys&&(Dt.setValue(F,"toneMappingExposure",d.toneMappingExposure),qe.needsLights&&gm(Bi,Pa),Pe&&B.fog===!0&&ge.refreshFogUniforms(Bi,Pe),ge.refreshMaterialUniforms(Bi,B,G,R,W),jo.upload(F,qe.uniformsList,Bi,P)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(jo.upload(F,qe.uniformsList,Bi,P),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Dt.setValue(F,"center",ie.center),Dt.setValue(F,"modelViewMatrix",ie.modelViewMatrix),Dt.setValue(F,"normalMatrix",ie.normalMatrix),Dt.setValue(F,"modelMatrix",ie.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Gt=B.uniformsGroups;for(let Ra=0,xm=Gt.length;Ra<xm;Ra++)if(ve.isWebGL2){const hu=Gt[Ra];Ee.update(hu,en),Ee.bind(hu,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function gm(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function _m(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(A,H,Q){E.get(A.texture).__webglTexture=H,E.get(A.depthTexture).__webglTexture=Q;const B=E.get(A);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=Q===void 0,B.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,H){const Q=E.get(A);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Q=0){v=A,_=H,b=Q;let B=!0,ie=null,Pe=!1,De=!1;if(A){const Fe=E.get(A);Fe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),B=!1):Fe.__webglFramebuffer===void 0?P.setupRenderTarget(A):Fe.__hasExternalTextures&&P.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const Ue=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ie=Ue[H],Pe=!0):ve.isWebGL2&&A.samples>0&&P.useMultisampledRTT(A)===!1?ie=E.get(A).__webglMultisampledFramebuffer:ie=Ue,C.copy(A.viewport),L.copy(A.scissor),x=A.scissorTest}else C.copy(D).multiplyScalar(G).floor(),L.copy(X).multiplyScalar(G).floor(),x=j;if(_e.bindFramebuffer(36160,ie)&&ve.drawBuffers&&B&&_e.drawBuffers(A,ie),_e.viewport(C),_e.scissor(L),_e.setScissorTest(x),Pe){const Fe=E.get(A.texture);F.framebufferTexture2D(36160,36064,34069+H,Fe.__webglTexture,Q)}else if(De){const Fe=E.get(A.texture),We=H||0;F.framebufferTextureLayer(36160,36064,Fe.__webglTexture,Q||0,We)}y=-1},this.readRenderTargetPixels=function(A,H,Q,B,ie,Pe,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){_e.bindFramebuffer(36160,ze);try{const Fe=A.texture,We=Fe.format,Ue=Fe.type;if(We!==En&&me.convert(We)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ue===Qs&&(ce.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Ue!==dr&&me.convert(Ue)!==F.getParameter(35738)&&!(Ue===ir&&(ve.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-B&&Q>=0&&Q<=A.height-ie&&F.readPixels(H,Q,B,ie,me.convert(We),me.convert(Ue),Pe)}finally{const Fe=v!==null?E.get(v).__webglFramebuffer:null;_e.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(A,H,Q=0){const B=Math.pow(2,-Q),ie=Math.floor(H.image.width*B),Pe=Math.floor(H.image.height*B);P.setTexture2D(H,0),F.copyTexSubImage2D(3553,Q,0,0,A.x,A.y,ie,Pe),_e.unbindTexture()},this.copyTextureToTexture=function(A,H,Q,B=0){const ie=H.image.width,Pe=H.image.height,De=me.convert(Q.format),ze=me.convert(Q.type);P.setTexture2D(Q,0),F.pixelStorei(37440,Q.flipY),F.pixelStorei(37441,Q.premultiplyAlpha),F.pixelStorei(3317,Q.unpackAlignment),H.isDataTexture?F.texSubImage2D(3553,B,A.x,A.y,ie,Pe,De,ze,H.image.data):H.isCompressedTexture?F.compressedTexSubImage2D(3553,B,A.x,A.y,H.mipmaps[0].width,H.mipmaps[0].height,De,H.mipmaps[0].data):F.texSubImage2D(3553,B,A.x,A.y,De,ze,H.image),B===0&&Q.generateMipmaps&&F.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,H,Q,B,ie=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=A.max.x-A.min.x+1,De=A.max.y-A.min.y+1,ze=A.max.z-A.min.z+1,Fe=me.convert(B.format),We=me.convert(B.type);let Ue;if(B.isData3DTexture)P.setTexture3D(B,0),Ue=32879;else if(B.isDataArrayTexture)P.setTexture2DArray(B,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,B.flipY),F.pixelStorei(37441,B.premultiplyAlpha),F.pixelStorei(3317,B.unpackAlignment);const ke=F.getParameter(3314),nt=F.getParameter(32878),Ui=F.getParameter(3316),xr=F.getParameter(3315),vr=F.getParameter(32877),Fn=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;F.pixelStorei(3314,Fn.width),F.pixelStorei(32878,Fn.height),F.pixelStorei(3316,A.min.x),F.pixelStorei(3315,A.min.y),F.pixelStorei(32877,A.min.z),Q.isDataTexture||Q.isData3DTexture?F.texSubImage3D(Ue,ie,H.x,H.y,H.z,Pe,De,ze,Fe,We,Fn.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ue,ie,H.x,H.y,H.z,Pe,De,ze,Fe,Fn.data)):F.texSubImage3D(Ue,ie,H.x,H.y,H.z,Pe,De,ze,Fe,We,Fn),F.pixelStorei(3314,ke),F.pixelStorei(32878,nt),F.pixelStorei(3316,Ui),F.pixelStorei(3315,xr),F.pixelStorei(32877,vr),ie===0&&B.generateMipmaps&&F.generateMipmap(Ue),_e.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,_e.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class lw extends nm{}lw.prototype.isWebGL1Renderer=!0;class cw extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class im extends xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mh=new ut,pc=new Hp,No=new Ta,zo=new U;class uw extends bt{constructor(e=new xn,t=new im){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;mh.copy(r).invert(),pc.copy(e.ray).applyMatrix4(mh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,d=m;g<d;g++){const p=c.getX(g);zo.fromBufferAttribute(f,p),gh(zo,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,d=m;g<d;g++)zo.fromBufferAttribute(f,g),gh(zo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gh(i,e,t,n,r,s,o){const a=pc.distanceSqToPoint(i);if(a<t){const l=new U;pc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class su extends xn{constructor(e=1,t=1,n=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],m=[];let g=0;const d=[],p=n/2;let _=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(m,2));function b(){const y=new U,M=new U;let C=0;const L=(t-e)/n;for(let x=0;x<=s;x++){const w=[],R=x/s,G=R*(t-e)+e;for(let Z=0;Z<=r;Z++){const N=Z/r,D=N*l+a,X=Math.sin(D),j=Math.cos(D);M.x=G*X,M.y=-R*n+p,M.z=G*j,f.push(M.x,M.y,M.z),y.set(X,L,j).normalize(),h.push(y.x,y.y,y.z),m.push(N,1-R),w.push(g++)}d.push(w)}for(let x=0;x<r;x++)for(let w=0;w<s;w++){const R=d[w][x],G=d[w+1][x],Z=d[w+1][x+1],N=d[w][x+1];u.push(R,G,N),u.push(G,Z,N),C+=6}c.addGroup(_,C,0),_+=C}function v(y){const M=g,C=new Xe,L=new U;let x=0;const w=y===!0?e:t,R=y===!0?1:-1;for(let Z=1;Z<=r;Z++)f.push(0,p*R,0),h.push(0,R,0),m.push(.5,.5),g++;const G=g;for(let Z=0;Z<=r;Z++){const D=Z/r*l+a,X=Math.cos(D),j=Math.sin(D);L.x=w*j,L.y=p*R,L.z=w*X,f.push(L.x,L.y,L.z),h.push(0,R,0),C.x=X*.5+.5,C.y=j*.5*R+.5,m.push(C.x,C.y),g++}for(let Z=0;Z<r;Z++){const N=M+Z,D=G+Z;y===!0?u.push(D,D+1,N):u.push(D+1,D,N),x+=3}c.addGroup(_,x,y===!0?1:2),_+=x}}static fromJSON(e){return new su(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ou extends su{constructor(e=1,t=1,n=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ou(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class au extends xn{constructor(e=1,t=.4,n=8,r=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new U,f=new U,h=new U;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const d=g/r*s,p=m/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(d),f.y=(e+t*Math.cos(p))*Math.sin(d),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),u.x=e*Math.cos(d),u.y=e*Math.sin(d),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const d=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,_=(r+1)*(m-1)+g,b=(r+1)*m+g;o.push(d,p,b),o.push(p,_,b)}this.setIndex(o),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}static fromJSON(e){return new au(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lu extends xn{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);const a=[],l=[],c=[],u=[],f=new U,h=new U,m=new U,g=new U,d=new U,p=new U,_=new U;for(let v=0;v<=n;++v){const y=v/n*s*Math.PI*2;b(y,s,o,e,m),b(y+.01,s,o,e,g),p.subVectors(g,m),_.addVectors(g,m),d.crossVectors(p,_),_.crossVectors(d,p),d.normalize(),_.normalize();for(let M=0;M<=r;++M){const C=M/r*Math.PI*2,L=-t*Math.cos(C),x=t*Math.sin(C);f.x=m.x+(L*_.x+x*d.x),f.y=m.y+(L*_.y+x*d.y),f.z=m.z+(L*_.z+x*d.z),l.push(f.x,f.y,f.z),h.subVectors(f,m).normalize(),c.push(h.x,h.y,h.z),u.push(v/n),u.push(M/r)}}for(let v=1;v<=n;v++)for(let y=1;y<=r;y++){const M=(r+1)*(v-1)+(y-1),C=(r+1)*v+(y-1),L=(r+1)*v+y,x=(r+1)*(v-1)+y;a.push(M,C,x),a.push(C,L,x)}this.setIndex(a),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(u,2));function b(v,y,M,C,L){const x=Math.cos(v),w=Math.sin(v),R=M/y*v,G=Math.cos(R);L.x=C*(2+G)*.5*x,L.y=C*(2+G)*w*.5,L.z=C*Math.sin(R)*.5}}static fromJSON(e){return new lu(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class fw extends xs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zp,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class hw extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Cl=new ut,_h=new U,xh=new U;class dw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xh),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pw extends dw{constructor(){super(new Zp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mw extends hw{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DefaultUp),this.updateMatrix(),this.target=new bt,this.shadow=new pw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);const Ca=i=>(Mg("data-v-cae3949e"),i=i(),bg(),i),_w=Ca(()=>ai("canvas",{class:"webgl"},null,-1)),xw=Ca(()=>ai("section",{class:"section"},[ai("h1",null,"My Portfolio")],-1)),vw=Ca(()=>ai("section",{class:"section"},[ai("h2",null,"My projects")],-1)),yw=Ca(()=>ai("section",{class:"section"},[ai("h2",null,"Contact me")],-1)),Mw={__name:"ThreeJsScroll",setup(i){return Fc(()=>{const e=document.querySelector("canvas.webgl"),t=new cw,n=new fw({color:"#ffeded"}),r=new im({color:"#ffeded",sizeAttenuation:!0,size:.03}),s=new An(new au(1,.4,16,60),n),o=new An(new ou(1,2,32),n),a=new An(new lu(.8,.35,100,16),n);t.add(s,o,a);const l=4;s.position.y=-l*0,o.position.y=-l*1,a.position.y=-l*2,s.position.x=2,o.position.x=-2,a.position.x=2;const c=[s,o,a],u=200,f=new Float32Array(u*3);for(let w=0;w<u;w++)f[w*3+0]=(Math.random()-.5)*10,f[w*3+1]=l*.5-Math.random()*l*c.length,f[w*3+2]=(Math.random()-.5)*10;const h=new xn;h.setAttribute("position",new Rn(f,3));const m=new uw(h,r);t.add(m);const g=new mw("#ffffff",1);g.position.set(1,1,0),t.add(g);const d={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{d.width=window.innerWidth,d.height=window.innerHeight,y.aspect=d.width/d.height,y.updateProjectionMatrix(),M.setSize(d.width,d.height),M.setPixelRatio(Math.min(window.devicePixelRatio,2))});let p=window.scrollY,_=0;window.addEventListener("scroll",()=>{p=window.scrollY;const w=Math.round(p/d.height);w!=_&&(_=w,Lp.to(c[_].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3"}))});const b={x:0,y:0};window.addEventListener("mousemove",w=>{b.x=w.clientX/d.width-.5,b.y=w.clientY/d.height-.5});const v=new Ds;t.add(v);const y=new an(35,d.width/d.height,.1,100);y.position.z=6,v.add(y);const M=new nm({canvas:e});M.setSize(d.width,d.height),M.setPixelRatio(Math.min(window.devicePixelRatio,2));const C=new gw;let L=0;const x=()=>{const w=C.getElapsedTime(),R=w-L;L=w;for(const N of c)N.rotation.x+=R*.1,N.rotation.y+=R*.12;y.position.y=-p/d.height*l;const G=b.x*.5,Z=-b.y*.5;v.position.x+=(G-v.position.x)*5*R,v.position.y+=(Z-v.position.y)*5*R,M.render(t,y),window.requestAnimationFrame(x)};x()}),(e,t)=>(Ed(),f_(Sn,null,[_w,xw,vw,yw],64))}},bw=J_(Mw,[["__scopeId","data-v-cae3949e"]]),Sw=[{path:"/playground/",component:bw}];/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ur=typeof window<"u";function ww(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const je=Object.assign;function Al(i,e){const t={};for(const n in e){const r=e[n];t[n]=In(r)?r.map(i):i(r)}return t}const Bs=()=>{},In=Array.isArray,Tw=/\/$/,Ew=i=>i.replace(Tw,"");function Pl(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=Lw(n!=null?n:e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function Cw(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function yh(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function Aw(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&hs(e.matched[n],t.matched[r])&&rm(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function hs(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function rm(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!Pw(i[t],e[t]))return!1;return!0}function Pw(i,e){return In(i)?Mh(i,e):In(e)?Mh(e,i):i===e}function Mh(i,e){return In(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function Lw(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let r=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var eo;(function(i){i.pop="pop",i.push="push"})(eo||(eo={}));var ks;(function(i){i.back="back",i.forward="forward",i.unknown=""})(ks||(ks={}));function Rw(i){if(!i)if(Ur){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),Ew(i)}const Dw=/^[^#]+#/;function Iw(i,e){return i.replace(Dw,"#")+e}function Fw(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Aa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ow(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Fw(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bh(i,e){return(history.state?history.state.position-e:-1)+i}const mc=new Map;function Nw(i,e){mc.set(i,e)}function zw(i){const e=mc.get(i);return mc.delete(i),e}let Uw=()=>location.protocol+"//"+location.host;function sm(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),yh(l,"")}return yh(t,i)+n+r}function Bw(i,e,t,n){let r=[],s=[],o=null;const a=({state:h})=>{const m=sm(i,location),g=t.value,d=e.value;let p=0;if(h){if(t.value=m,e.value=h,o&&o===g){o=null;return}p=d?h.position-d.position:0}else n(m);r.forEach(_=>{_(t.value,g,{delta:p,type:eo.pop,direction:p?p>0?ks.forward:ks.back:ks.unknown})})};function l(){o=t.value}function c(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(je({},h.state,{scroll:Aa()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Sh(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?Aa():null}}function kw(i){const{history:e,location:t}=window,n={value:sm(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:Uw()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function o(l,c){const u=je({},e.state,Sh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=je({},r.value,e.state,{forward:l,scroll:Aa()});s(u.current,u,!0);const f=je({},Sh(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function Vw(i){i=Rw(i);const e=kw(i),t=Bw(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=je({location:"",base:i,go:n,createHref:Iw.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Gw(i){return typeof i=="string"||i&&typeof i=="object"}function om(i){return typeof i=="string"||typeof i=="symbol"}const yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},am=Symbol("");var wh;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(wh||(wh={}));function ds(i,e){return je(new Error,{type:i,[am]:!0},e)}function Kn(i,e){return i instanceof Error&&am in i&&(e==null||!!(i.type&e))}const Th="[^/]+?",Hw={sensitive:!1,strict:!1,start:!0,end:!0},Ww=/[.+*?^${}()[\]/\\]/g;function qw(i,e){const t=je({},Hw,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Ww,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:d,optional:p,regexp:_}=h;s.push({name:g,repeatable:d,optional:p});const b=_||Th;if(b!==Th){m+=10;try{new RegExp(`(${b})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+y.message)}}let v=d?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(v=p&&c.length<2?`(?:/${v})`:"/"+v),p&&(v+="?"),r+=v,m+=20,p&&(m+=-8),d&&(m+=-20),b===".*"&&(m+=-50)}u.push(m)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",g=s[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:d,optional:p}=m,_=g in c?c[g]:"";if(In(_)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=In(_)?_.join("/"):_;if(!b)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function Xw(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function jw(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=Xw(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(Eh(n))return 1;if(Eh(r))return-1}return r.length-n.length}function Eh(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const Yw={type:0,value:""},$w=/[a-zA-Z0-9_]/;function Kw(i){if(!i)return[[]];if(i==="/")return[[Yw]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:$w.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Zw(i,e,t){const n=qw(Kw(i.path),t),r=je(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Jw(i,e){const t=[],n=new Map;e=Ph({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,f,h){const m=!h,g=Qw(u);g.aliasOf=h&&h.record;const d=Ph(e,u),p=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of v)p.push(je({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let _,b;for(const v of p){const{path:y}=v;if(f&&y[0]!=="/"){const M=f.record.path,C=M[M.length-1]==="/"?"":"/";v.path=f.record.path+(y&&C+y)}if(_=Zw(v,f,d),h?h.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),m&&u.name&&!Ah(_)&&o(u.name)),g.children){const M=g.children;for(let C=0;C<M.length;C++)s(M[C],_,h&&h.children[C])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return b?()=>{o(b)}:Bs}function o(u){if(om(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&jw(u,t[f])>=0&&(u.record.path!==t[f].record.path||!lm(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Ah(u)&&n.set(u.record.name,u)}function c(u,f){let h,m={},g,d;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw ds(1,{location:u});d=h.record.name,m=je(Ch(f.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Ch(u.params,h.keys.map(b=>b.name))),g=h.stringify(m)}else if("path"in u)g=u.path,h=t.find(b=>b.re.test(g)),h&&(m=h.parse(g),d=h.record.name);else{if(h=f.name?n.get(f.name):t.find(b=>b.re.test(f.path)),!h)throw ds(1,{location:u,currentLocation:f});d=h.record.name,m=je({},f.params,u.params),g=h.stringify(m)}const p=[];let _=h;for(;_;)p.unshift(_.record),_=_.parent;return{name:d,path:g,params:m,matched:p,meta:t1(p)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ch(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function Qw(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:e1(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function e1(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Ah(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function t1(i){return i.reduce((e,t)=>je(e,t.meta),{})}function Ph(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function lm(i,e){return e.children.some(t=>t===i||lm(i,t))}const cm=/#/g,n1=/&/g,i1=/\//g,r1=/=/g,s1=/\?/g,um=/\+/g,o1=/%5B/g,a1=/%5D/g,fm=/%5E/g,l1=/%60/g,hm=/%7B/g,c1=/%7C/g,dm=/%7D/g,u1=/%20/g;function cu(i){return encodeURI(""+i).replace(c1,"|").replace(o1,"[").replace(a1,"]")}function f1(i){return cu(i).replace(hm,"{").replace(dm,"}").replace(fm,"^")}function gc(i){return cu(i).replace(um,"%2B").replace(u1,"+").replace(cm,"%23").replace(n1,"%26").replace(l1,"`").replace(hm,"{").replace(dm,"}").replace(fm,"^")}function h1(i){return gc(i).replace(r1,"%3D")}function d1(i){return cu(i).replace(cm,"%23").replace(s1,"%3F")}function p1(i){return i==null?"":d1(i).replace(i1,"%2F")}function aa(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function m1(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(um," "),o=s.indexOf("="),a=aa(o<0?s:s.slice(0,o)),l=o<0?null:aa(s.slice(o+1));if(a in e){let c=e[a];In(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Lh(i){let e="";for(let t in i){const n=i[t];if(t=h1(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(In(n)?n.map(s=>s&&gc(s)):[n&&gc(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function g1(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=In(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const _1=Symbol(""),Rh=Symbol(""),uu=Symbol(""),pm=Symbol(""),_c=Symbol("");function Es(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function bi(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(ds(4,{from:t,to:e})):f instanceof Error?a(f):Gw(f)?a(ds(2,{from:e,to:f})):(s&&n.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Ll(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(x1(a)){const c=(a.__vccOpts||a)[e];c&&r.push(bi(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=ww(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&bi(h,t,n,s,o)()}))}}return r}function x1(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Dh(i){const e=ii(uu),t=ii(pm),n=ln(()=>e.resolve(qr(i.to))),r=ln(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(hs.bind(null,u));if(h>-1)return h;const m=Ih(l[c-2]);return c>1&&Ih(u)===m&&f[f.length-1].path!==m?f.findIndex(hs.bind(null,l[c-2])):h}),s=ln(()=>r.value>-1&&b1(t.params,n.value.params)),o=ln(()=>r.value>-1&&r.value===t.matched.length-1&&rm(t.params,n.value.params));function a(l={}){return M1(l)?e[qr(i.replace)?"replace":"push"](qr(i.to)).catch(Bs):Promise.resolve()}return{route:n,href:ln(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const v1=dd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dh,setup(i,{slots:e}){const t=to(Dh(i)),{options:n}=ii(uu),r=ln(()=>({[Fh(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Fh(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:Rd("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),y1=v1;function M1(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function b1(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!In(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function Ih(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Fh=(i,e,t)=>i!=null?i:e!=null?e:t,S1=dd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=ii(_c),r=ln(()=>i.route||n.value),s=ii(Rh,0),o=ln(()=>{let c=qr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ln(()=>r.value.matched[o.value]);Bo(Rh,ln(()=>o.value+1)),Bo(_1,a),Bo(_c,r);const l=cg();return ko(()=>[l.value,a.value,i.name],([c,u,f],[h,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!hs(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return Oh(t.default,{Component:h,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,p=Rd(h,je({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Oh(t.default,{Component:p,route:c})||p}}});function Oh(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const w1=S1;function T1(i){const e=Jw(i.routes,i),t=i.parseQuery||m1,n=i.stringifyQuery||Lh,r=i.history,s=Es(),o=Es(),a=Es(),l=ug(yi);let c=yi;Ur&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Al.bind(null,k=>""+k),f=Al.bind(null,p1),h=Al.bind(null,aa);function m(k,F){let ae,ce;return om(k)?(ae=e.getRecordMatcher(k),ce=F):ce=k,e.addRoute(ce,ae)}function g(k){const F=e.getRecordMatcher(k);F&&e.removeRoute(F)}function d(){return e.getRoutes().map(k=>k.record)}function p(k){return!!e.getRecordMatcher(k)}function _(k,F){if(F=je({},F||l.value),typeof k=="string"){const E=Pl(t,k,F.path),P=e.resolve({path:E.path},F),q=r.createHref(E.fullPath);return je(E,P,{params:h(P.params),hash:aa(E.hash),redirectedFrom:void 0,href:q})}let ae;if("path"in k)ae=je({},k,{path:Pl(t,k.path,F.path).path});else{const E=je({},k.params);for(const P in E)E[P]==null&&delete E[P];ae=je({},k,{params:f(k.params)}),F.params=f(F.params)}const ce=e.resolve(ae,F),ve=k.hash||"";ce.params=u(h(ce.params));const _e=Cw(n,je({},k,{hash:f1(ve),path:ce.path})),we=r.createHref(_e);return je({fullPath:_e,hash:ve,query:n===Lh?g1(k.query):k.query||{}},ce,{redirectedFrom:void 0,href:we})}function b(k){return typeof k=="string"?Pl(t,k,l.value.path):je({},k)}function v(k,F){if(c!==k)return ds(8,{from:F,to:k})}function y(k){return L(k)}function M(k){return y(je(b(k),{replace:!0}))}function C(k){const F=k.matched[k.matched.length-1];if(F&&F.redirect){const{redirect:ae}=F;let ce=typeof ae=="function"?ae(k):ae;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=b(ce):{path:ce},ce.params={}),je({query:k.query,hash:k.hash,params:"path"in ce?{}:k.params},ce)}}function L(k,F){const ae=c=_(k),ce=l.value,ve=k.state,_e=k.force,we=k.replace===!0,E=C(ae);if(E)return L(je(b(E),{state:typeof E=="object"?je({},ve,E.state):ve,force:_e,replace:we}),F||ae);const P=ae;P.redirectedFrom=F;let q;return!_e&&Aw(n,ce,ae)&&(q=ds(16,{to:P,from:ce}),W(ce,ce,!0,!1)),(q?Promise.resolve(q):w(P,ce)).catch(K=>Kn(K)?Kn(K,2)?K:z(K):Y(K,P,ce)).then(K=>{if(K){if(Kn(K,2))return L(je({replace:we},b(K.to),{state:typeof K.to=="object"?je({},ve,K.to.state):ve,force:_e}),F||P)}else K=G(P,ce,!0,we,ve);return R(P,ce,K),K})}function x(k,F){const ae=v(k,F);return ae?Promise.reject(ae):Promise.resolve()}function w(k,F){let ae;const[ce,ve,_e]=E1(k,F);ae=Ll(ce.reverse(),"beforeRouteLeave",k,F);for(const E of ce)E.leaveGuards.forEach(P=>{ae.push(bi(P,k,F))});const we=x.bind(null,k,F);return ae.push(we),Nr(ae).then(()=>{ae=[];for(const E of s.list())ae.push(bi(E,k,F));return ae.push(we),Nr(ae)}).then(()=>{ae=Ll(ve,"beforeRouteUpdate",k,F);for(const E of ve)E.updateGuards.forEach(P=>{ae.push(bi(P,k,F))});return ae.push(we),Nr(ae)}).then(()=>{ae=[];for(const E of k.matched)if(E.beforeEnter&&!F.matched.includes(E))if(In(E.beforeEnter))for(const P of E.beforeEnter)ae.push(bi(P,k,F));else ae.push(bi(E.beforeEnter,k,F));return ae.push(we),Nr(ae)}).then(()=>(k.matched.forEach(E=>E.enterCallbacks={}),ae=Ll(_e,"beforeRouteEnter",k,F),ae.push(we),Nr(ae))).then(()=>{ae=[];for(const E of o.list())ae.push(bi(E,k,F));return ae.push(we),Nr(ae)}).catch(E=>Kn(E,8)?E:Promise.reject(E))}function R(k,F,ae){for(const ce of a.list())ce(k,F,ae)}function G(k,F,ae,ce,ve){const _e=v(k,F);if(_e)return _e;const we=F===yi,E=Ur?history.state:{};ae&&(ce||we?r.replace(k.fullPath,je({scroll:we&&E&&E.scroll},ve)):r.push(k.fullPath,ve)),l.value=k,W(k,F,ae,we),z()}let Z;function N(){Z||(Z=r.listen((k,F,ae)=>{if(!ye.listening)return;const ce=_(k),ve=C(ce);if(ve){L(je(ve,{replace:!0}),ce).catch(Bs);return}c=ce;const _e=l.value;Ur&&Nw(bh(_e.fullPath,ae.delta),Aa()),w(ce,_e).catch(we=>Kn(we,12)?we:Kn(we,2)?(L(we.to,ce).then(E=>{Kn(E,20)&&!ae.delta&&ae.type===eo.pop&&r.go(-1,!1)}).catch(Bs),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),Y(we,ce,_e))).then(we=>{we=we||G(ce,_e,!1),we&&(ae.delta&&!Kn(we,8)?r.go(-ae.delta,!1):ae.type===eo.pop&&Kn(we,20)&&r.go(-1,!1)),R(ce,_e,we)}).catch(Bs)}))}let D=Es(),X=Es(),j;function Y(k,F,ae){z(k);const ce=X.list();return ce.length?ce.forEach(ve=>ve(k,F,ae)):console.error(k),Promise.reject(k)}function V(){return j&&l.value!==yi?Promise.resolve():new Promise((k,F)=>{D.add([k,F])})}function z(k){return j||(j=!k,N(),D.list().forEach(([F,ae])=>k?ae(k):F()),D.reset()),k}function W(k,F,ae,ce){const{scrollBehavior:ve}=i;if(!Ur||!ve)return Promise.resolve();const _e=!ae&&zw(bh(k.fullPath,0))||(ce||!ae)&&history.state&&history.state.scroll||null;return rd().then(()=>ve(k,F,_e)).then(we=>we&&Ow(we)).catch(we=>Y(we,k,F))}const le=k=>r.go(k);let se;const ue=new Set,ye={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:p,getRoutes:d,resolve:_,options:i,push:y,replace:M,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:V,install(k){const F=this;k.component("RouterLink",y1),k.component("RouterView",w1),k.config.globalProperties.$router=F,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>qr(l)}),Ur&&!se&&l.value===yi&&(se=!0,y(r.location).catch(ve=>{}));const ae={};for(const ve in yi)ae[ve]=ln(()=>l.value[ve]);k.provide(uu,F),k.provide(pm,to(ae)),k.provide(_c,l);const ce=k.unmount;ue.add(k),k.unmount=function(){ue.delete(k),ue.size<1&&(c=yi,Z&&Z(),Z=null,l.value=yi,se=!1,j=!1),ce()}}};return ye}function Nr(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function E1(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>hs(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>hs(c,l))||r.push(l))}return[t,n,r]}const C1=T1({history:Vw(),routes:Sw});K_(Q_).use(C1).mount("#app");
