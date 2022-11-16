import{S as Me,i as Xe,s as Ye,a as Qe,e as x,c as Ze,b as z,g as ce,t as B,d as fe,f as J,h as F,j as et,o as be,k as tt,l as nt,m as rt,n as we,p as C,q as at,r as st,u as ot,v as W,w as H,x as Se,y as M,z as X,A as xe}from"./chunks/index-51ea2bd7.js";import{g as Be,f as Je,s as K,a as ve,b as it,i as lt}from"./chunks/singletons-c995625f.js";const ct=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ft=function(n,e){return new URL(n,e).href},Fe={},ie=function(e,t,l){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=ft(o,l),o in Fe)return;Fe[o]=!0;const d=o.endsWith(".css"),a=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":ct,d||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),d)return new Promise((_,m)=>{f.addEventListener("load",_),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function ut(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function dt(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const pt=["href","pathname","search","searchParams","toString","toJSON"];function ht(n,e){const t=new URL(n);for(const l of pt){let o=t[l];Object.defineProperty(t,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,o,d)=>d(n,o),mt(t),t}function mt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function _t(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let l=t.length;for(;l;)e=e*33^t[--l]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Le=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const l=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;le.delete(l)}return Le(n,e)};const le=new Map;function gt(n,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(o+=`[data-hash="${_t(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:a,...f}=JSON.parse(d.textContent),_=d.getAttribute("data-ttl");return _&&le.set(e,{body:a,init:f,ttl:1e3*Number(_)}),Promise.resolve(new Response(a,f))}return Le(n,t)}function wt(n,e){const t=le.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);le.delete(n)}return Le(n,e)}const yt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function bt(n){const e=[],t=[];let l=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(vt).map((d,a,f)=>{const _=decodeURIComponent(d),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const y=a===f.length-1;return _&&"/"+_.split(/\[(.+?)\]/).map(($,R)=>{if(R%2){const T=yt.exec($);if(!T)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,q,N]=T;return e.push(q),t.push(N),D?"(.*?)":"([^/]+?)"}return y&&$.includes(".")&&(l=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function vt(n){return!/^\([^)]+\)$/.test(n)}function kt(n,e,t,l){const o={};for(let d=0;d<e.length;d+=1){const a=e[d],f=t[d],_=n[d+1]||"";if(f){const m=l[f];if(!m)throw new Error(`Missing "${f}" param matcher`);if(!m(_))return}o[a]=_}return o}function Et(n,e,t,l){const o=new Set(e);return Object.entries(t).map(([f,[_,m,y]])=>{const{pattern:$,names:R,types:T}=bt(f),D={id:f,exec:q=>{const N=$.exec(q);if(N)return kt(N,R,T,l)},errors:[1,...y||[]].map(q=>n[q]),layouts:[0,...m||[]].map(a),leaf:d(_)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function d(f){const _=f<0;return _&&(f=~f),[_,n[f]]}function a(f){return f===void 0?f:[o.has(f),n[f]]}}function Rt(n){let e,t,l;var o=n[0][0];function d(a){return{props:{data:a[2],form:a[1]}}}return o&&(e=W(o,d(n))),{c(){e&&H(e.$$.fragment),t=x()},l(a){e&&Se(e.$$.fragment,a),t=x()},m(a,f){e&&M(e,a,f),z(a,t,f),l=!0},p(a,f){const _={};if(f&4&&(_.data=a[2]),f&2&&(_.form=a[1]),o!==(o=a[0][0])){if(e){ce();const m=e;B(m.$$.fragment,1,0,()=>{X(m,1)}),fe()}o?(e=W(o,d(a)),H(e.$$.fragment),J(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(a){l||(e&&J(e.$$.fragment,a),l=!0)},o(a){e&&B(e.$$.fragment,a),l=!1},d(a){a&&F(t),e&&X(e,a)}}}function St(n){let e,t,l;var o=n[0][0];function d(a){return{props:{data:a[2],$$slots:{default:[Lt]},$$scope:{ctx:a}}}}return o&&(e=W(o,d(n))),{c(){e&&H(e.$$.fragment),t=x()},l(a){e&&Se(e.$$.fragment,a),t=x()},m(a,f){e&&M(e,a,f),z(a,t,f),l=!0},p(a,f){const _={};if(f&4&&(_.data=a[2]),f&523&&(_.$$scope={dirty:f,ctx:a}),o!==(o=a[0][0])){if(e){ce();const m=e;B(m.$$.fragment,1,0,()=>{X(m,1)}),fe()}o?(e=W(o,d(a)),H(e.$$.fragment),J(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(a){l||(e&&J(e.$$.fragment,a),l=!0)},o(a){e&&B(e.$$.fragment,a),l=!1},d(a){a&&F(t),e&&X(e,a)}}}function Lt(n){let e,t,l;var o=n[0][1];function d(a){return{props:{data:a[3],form:a[1]}}}return o&&(e=W(o,d(n))),{c(){e&&H(e.$$.fragment),t=x()},l(a){e&&Se(e.$$.fragment,a),t=x()},m(a,f){e&&M(e,a,f),z(a,t,f),l=!0},p(a,f){const _={};if(f&8&&(_.data=a[3]),f&2&&(_.form=a[1]),o!==(o=a[0][1])){if(e){ce();const m=e;B(m.$$.fragment,1,0,()=>{X(m,1)}),fe()}o?(e=W(o,d(a)),H(e.$$.fragment),J(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(a){l||(e&&J(e.$$.fragment,a),l=!0)},o(a){e&&B(e.$$.fragment,a),l=!1},d(a){a&&F(t),e&&X(e,a)}}}function Ke(n){let e,t=n[5]&&ze(n);return{c(){e=tt("div"),t&&t.c(),this.h()},l(l){e=nt(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=rt(e);t&&t.l(o),o.forEach(F),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(l,o){z(l,e,o),t&&t.m(e,null)},p(l,o){l[5]?t?t.p(l,o):(t=ze(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&F(e),t&&t.d()}}}function ze(n){let e;return{c(){e=at(n[6])},l(t){e=st(t,n[6])},m(t,l){z(t,e,l)},p(t,l){l&64&&ot(e,t[6])},d(t){t&&F(e)}}}function $t(n){let e,t,l,o,d;const a=[St,Rt],f=[];function _(y,$){return y[0][1]?0:1}e=_(n),t=f[e]=a[e](n);let m=n[4]&&Ke(n);return{c(){t.c(),l=Qe(),m&&m.c(),o=x()},l(y){t.l(y),l=Ze(y),m&&m.l(y),o=x()},m(y,$){f[e].m(y,$),z(y,l,$),m&&m.m(y,$),z(y,o,$),d=!0},p(y,[$]){let R=e;e=_(y),e===R?f[e].p(y,$):(ce(),B(f[R],1,1,()=>{f[R]=null}),fe(),t=f[e],t?t.p(y,$):(t=f[e]=a[e](y),t.c()),J(t,1),t.m(l.parentNode,l)),y[4]?m?m.p(y,$):(m=Ke(y),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(y){d||(J(t),d=!0)},o(y){B(t),d=!1},d(y){f[e].d(y),y&&F(l),m&&m.d(y),y&&F(o)}}}function Pt(n,e,t){let{stores:l}=e,{page:o}=e,{components:d}=e,{form:a}=e,{data_0:f=null}=e,{data_1:_=null}=e;et(l.page.notify);let m=!1,y=!1,$=null;return be(()=>{const R=l.page.subscribe(()=>{m&&(t(5,y=!0),t(6,$=document.title||"untitled page"))});return t(4,m=!0),R}),n.$$set=R=>{"stores"in R&&t(7,l=R.stores),"page"in R&&t(8,o=R.page),"components"in R&&t(0,d=R.components),"form"in R&&t(1,a=R.form),"data_0"in R&&t(2,f=R.data_0),"data_1"in R&&t(3,_=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&l.page.set(o)},[d,a,f,_,m,y,$,l,o]}class Ot extends Me{constructor(e){super(),Xe(this,e,Pt,$t,Ye,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ut={},ue=[()=>ie(()=>import("./chunks/0-76e4c4b7.js"),["chunks\\0-76e4c4b7.js","components\\pages\\_layout.svelte-e58d5521.js","assets\\_layout-f43e6d0d.css","chunks\\index-51ea2bd7.js"],import.meta.url),()=>ie(()=>import("./chunks/1-a811de14.js"),["chunks\\1-a811de14.js","components\\error.svelte-ca73b4f4.js","chunks\\index-51ea2bd7.js","chunks\\singletons-c995625f.js"],import.meta.url),()=>ie(()=>import("./chunks/2-b3ff41dd.js"),["chunks\\2-b3ff41dd.js","chunks\\_page-bac68b31.js","components\\pages\\_page.svelte-7e153a32.js","assets\\_page-821c733f.css","chunks\\index-51ea2bd7.js"],import.meta.url)],At=[],It={"":[2]},jt={handleError:({error:n})=>{console.error(n)}};class ke{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ge{constructor(e,t){this.status=e,this.location=t}}const Tt="/__data.js";async function Nt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([l,o])=>[l,await o])));return n}const He="sveltekit:scroll",V="sveltekit:index",ae=Et(ue,At,It,Ut),Ee=ue[0],Re=ue[1];Ee();Re();let ee={};try{ee=JSON.parse(sessionStorage[He])}catch{}function ye(n){ee[n]=ve()}function Dt({target:n,base:e,trailing_slash:t}){var qe;const l=[];let o=null;const d={before_navigate:[],after_navigate:[]};let a={branch:[],error:null,url:null},f=!1,_=!1,m=!0,y=!1,$=!1,R,T=(qe=history.state)==null?void 0:qe[V];T||(T=Date.now(),history.replaceState({...history.state,[V]:T},"",location.href));const D=ee[T];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let q=!1,N,$e,te;async function Pe(){te=te||Promise.resolve(),await te,te=null;const r=new URL(location.href),c=me(r,!0);o=null,await Ue(c,r,[])}async function de(r,{noscroll:c=!1,replaceState:u=!1,keepfocus:s=!1,state:i={}},p,h){return typeof r=="string"&&(r=new URL(r,Be(document))),_e({url:r,scroll:c?ve():null,keepfocus:s,redirect_chain:p,details:{state:i,replaceState:u},nav_token:h,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Oe(r){const c=me(r,!1);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o={id:c.id,promise:je(c)},o.promise}async function Ue(r,c,u,s,i={},p){var k,v;$e=i;let h=r&&await je(r);if(h||(h=await De(c,null,Z(new Error(`Not found: ${c.pathname}`),{url:c,params:{},routeId:null}),404)),c=(r==null?void 0:r.url)||c,$e!==i)return!1;if(h.type==="redirect")if(u.length>10||u.includes(c.pathname))h=await ne({status:500,error:Z(new Error("Redirect loop"),{url:c,params:{},routeId:null}),url:c,routeId:null});else return de(new URL(h.location,c).href,{},[...u,c.pathname],i),!1;else((v=(k=h.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await K.updated.check()&&await re(c);if(l.length=0,$=!1,y=!0,s&&s.details){const{details:w}=s,b=w.replaceState?0:1;w.state[V]=T+=b,history[w.replaceState?"replaceState":"pushState"](w.state,"",c)}if(o=null,_){a=h.state,h.props.page&&(h.props.page.url=c);const w=oe();R.$set(h.props),w()}else Ae(h);if(s){const{scroll:w,keepfocus:b}=s;if(!b){const S=document.body,P=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var O;(O=getSelection())==null||O.removeAllRanges()}),P!==null?S.setAttribute("tabindex",P):S.removeAttribute("tabindex")}if(await xe(),m){const S=c.hash&&document.getElementById(c.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await xe();m=!0,h.props.page&&(N=h.props.page),p&&p(),y=!1}function Ae(r){var i,p;a=r.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),N=r.props.page;const u=oe();R=new Ot({target:n,props:{...r.props,stores:K},hydrate:!0}),u();const s={from:null,to:se("to",{params:a.params,routeId:(p=(i=a.route)==null?void 0:i.id)!=null?p:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(h=>h(s)),_=!0}async function Y({url:r,params:c,branch:u,status:s,error:i,route:p,form:h}){var P;const k=u.filter(Boolean),v={type:"loaded",state:{url:r,params:c,branch:u,error:i,route:p},props:{components:k.map(O=>O.node.component)}};h!==void 0&&(v.props.form=h);let w={},b=!N;for(let O=0;O<k.length;O+=1){const I=k[O];w={...w,...I.data},(b||!a.branch.some(j=>j===I))&&(v.props[`data_${O}`]=w,b=b||Object.keys((P=I.data)!=null?P:{}).length>0)}if(b||(b=Object.keys(N.data).length!==Object.keys(w).length),!a.url||r.href!==a.url.href||a.error!==i||h!==void 0||b){v.props.page={error:i,params:c,routeId:p&&p.id,status:s,url:r,form:h,data:b?w:N.data};const O=(I,j)=>{Object.defineProperty(v.props.page,I,{get:()=>{throw new Error(`$page.${I} has been replaced by $page.url.${j}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return v}async function pe({loader:r,parent:c,url:u,params:s,routeId:i,server_data_node:p}){var w,b,S,P,O;let h=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},v=await r();if((w=v.shared)!=null&&w.load){let I=function(...L){for(const g of L){const{href:E}=new URL(g,u);k.dependencies.add(E)}};const j={routeId:i,params:new Proxy(s,{get:(L,g)=>(k.params.add(g),L[g])}),data:(b=p==null?void 0:p.data)!=null?b:null,url:ht(u,()=>{k.url=!0}),async fetch(L,g){let E;L instanceof Request?(E=L.url,g={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...g}):E=L;const A=new URL(E,u).href;return I(A),_?wt(A,g):gt(E,A,g)},setHeaders:()=>{},depends:I,parent(){return k.parent=!0,c()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(S=await v.shared.load.call(null,j))!=null?S:null,h=h?await Nt(h):null}return{node:v,loader:r,server:p,shared:(P=v.shared)!=null&&P.load?{type:"data",data:h,uses:k}:null,data:(O=h!=null?h:p==null?void 0:p.data)!=null?O:null}}function Ie(r,c,u,s){if($)return!0;if(!u)return!1;if(u.parent&&c||u.url&&r)return!0;for(const i of u.params)if(s[i]!==a.params[i])return!0;for(const i of u.dependencies)if(l.some(p=>p(new URL(i))))return!0;return!1}function he(r,c){var u,s;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((u=r.uses.dependencies)!=null?u:[]),params:new Set((s=r.uses.params)!=null?s:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&c!=null?c:null}async function je({id:r,invalidating:c,url:u,params:s,route:i}){var L;if((o==null?void 0:o.id)===r)return o.promise;const{errors:p,layouts:h,leaf:k}=i,v=[...h,k];p.forEach(g=>g==null?void 0:g().catch(()=>{})),v.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let w=null;const b=a.url?r!==a.url.pathname+a.url.search:!1,S=v.reduce((g,E,A)=>{var Q;const U=a.branch[A],G=!!(E!=null&&E[0])&&((U==null?void 0:U.loader)!==E[1]||Ie(b,g.some(Boolean),(Q=U.server)==null?void 0:Q.uses,s));return g.push(G),g},[]);if(S.some(Boolean)){try{w=await We(u,S)}catch(g){return ne({status:500,error:Z(g,{url:u,params:s,routeId:i.id}),url:u,routeId:i.id})}if(w.type==="redirect")return w}const P=w==null?void 0:w.nodes;let O=!1;const I=v.map(async(g,E)=>{var Q;if(!g)return;const A=a.branch[E],U=P==null?void 0:P[E];if((!U||U.type==="skip")&&g[1]===(A==null?void 0:A.loader)&&!Ie(b,O,(Q=A.shared)==null?void 0:Q.uses,s))return A;if(O=!0,(U==null?void 0:U.type)==="error")throw U;return pe({loader:g[1],url:u,params:s,routeId:i.id,parent:async()=>{var Ve;const Ce={};for(let ge=0;ge<E;ge+=1)Object.assign(Ce,(Ve=await I[ge])==null?void 0:Ve.data);return Ce},server_data_node:he(U===void 0&&g[0]?{type:"skip"}:U!=null?U:null,A==null?void 0:A.server)})});for(const g of I)g.catch(()=>{});const j=[];for(let g=0;g<v.length;g+=1)if(v[g])try{j.push(await I[g])}catch(E){if(E instanceof Ge)return{type:"redirect",location:E.location};let A=500,U;P!=null&&P.includes(E)?(A=(L=E.status)!=null?L:A,U=E.error):E instanceof ke?(A=E.status,U=E.body):U=Z(E,{params:s,url:u,routeId:i.id});const G=await Te(g,j,p);return G?await Y({url:u,params:s,branch:j.slice(0,G.idx).concat(G.node),status:A,error:U,route:i}):await De(u,i.id,U,A)}else j.push(void 0);return await Y({url:u,params:s,branch:j,status:200,error:null,route:i,form:c?void 0:null})}async function Te(r,c,u){for(;r--;)if(u[r]){let s=r;for(;!c[s];)s-=1;try{return{idx:s+1,node:{node:await u[r](),loader:u[r],data:{},server:null,shared:null}}}catch{continue}}}async function ne({status:r,error:c,url:u,routeId:s}){var w;const i={},p=await Ee();let h=null;if(p.server)try{const b=await We(u,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(w=b.nodes[0])!=null?w:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||f)&&await re(u)}const k=await pe({loader:Ee,url:u,params:i,routeId:s,parent:()=>Promise.resolve({}),server_data_node:he(h)}),v={node:await Re(),loader:Re,shared:null,server:null,data:null};return await Y({url:u,params:i,branch:[k,v],status:r,error:c,route:null})}function me(r,c){if(Ne(r))return;const u=decodeURI(r.pathname.slice(e.length)||"/");for(const s of ae){const i=s.exec(u);if(i){const p=new URL(r.origin+ut(r.pathname,t)+r.search+r.hash);return{id:p.pathname+p.search,invalidating:c,route:s,params:dt(i),url:p}}}}function Ne(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}async function _e({url:r,scroll:c,keepfocus:u,redirect_chain:s,details:i,type:p,delta:h,nav_token:k,accepted:v,blocked:w}){var I,j,L,g;let b=!1;const S=me(r,!1),P={from:se("from",{params:a.params,routeId:(j=(I=a.route)==null?void 0:I.id)!=null?j:null,url:a.url}),to:se("to",{params:(L=S==null?void 0:S.params)!=null?L:null,routeId:(g=S==null?void 0:S.route.id)!=null?g:null,url:r}),type:p};h!==void 0&&(P.delta=h);const O={...P,cancel:()=>{b=!0}};if(d.before_navigate.forEach(E=>E(O)),b){w();return}ye(T),v(),_&&K.navigating.set(P),await Ue(S,r,s,{scroll:c,keepfocus:u,details:i},k,()=>{d.after_navigate.forEach(E=>E(P)),K.navigating.set(null)})}async function De(r,c,u,s){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await ne({status:s,error:u,url:r,routeId:c}):await re(r)}function re(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{be(()=>(d.after_navigate.push(r),()=>{const c=d.after_navigate.indexOf(r);d.after_navigate.splice(c,1)}))},before_navigate:r=>{be(()=>(d.before_navigate.push(r),()=>{const c=d.before_navigate.indexOf(r);d.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(y||!_)&&(m=!1)},goto:(r,c={})=>de(r,c,[]),invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")l.push(r);else{const{href:c}=new URL(r,location.href);l.push(u=>u.href===c)}return Pe()},invalidateAll:()=>($=!0,Pe()),prefetch:async r=>{const c=new URL(r,Be(document));await Oe(c)},prefetch_routes:async r=>{const u=(r?ae.filter(s=>r.some(i=>s.exec(i))):ae).map(s=>Promise.all([...s.layouts,s.leaf].map(i=>i==null?void 0:i[1]())));await Promise.all(u)},apply_action:async r=>{if(r.type==="error"){const c=new URL(location.href),{branch:u,route:s}=a;if(!s)return;const i=await Te(a.branch.length,u,s.errors);if(i){const p=await Y({url:c,params:a.params,branch:u.slice(0,i.idx).concat(i.node),status:500,error:r.error,route:s});a=p.state;const h=oe();R.$set(p.props),h()}}else if(r.type==="redirect")de(r.location,{},[]);else{const c={form:r.data,page:{...N,form:r.data,status:r.status}},u=oe();R.$set(c),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,k;let i=!1;const p={from:se("from",{params:a.params,routeId:(k=(h=a.route)==null?void 0:h.id)!=null?k:null,url:a.url}),to:null,type:"unload",cancel:()=>i=!0};d.before_navigate.forEach(v=>v(p)),i?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(T);try{sessionStorage[He]=JSON.stringify(ee)}catch{}}});const r=s=>{const{url:i,options:p}=Je(s);if(i&&p.prefetch){if(Ne(i))return;Oe(i)}};let c;const u=s=>{clearTimeout(c),c=setTimeout(()=>{var i;(i=s.target)==null||i.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:i,url:p,options:h}=Je(s);if(!i||!p)return;const k=i instanceof SVGAElement;if(!k&&!(p.protocol==="https:"||p.protocol==="http:"))return;const v=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||v.includes("external")||h.reload||(k?i.target.baseVal:i.target))return;const[w,b]=p.href.split("#");if(b!==void 0&&w===location.href.split("#")[0]){q=!0,ye(T),a.url=p,K.page.set({...N,url:p}),K.page.notify();return}_e({url:p,scroll:h.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[V]===T)return;const i=s.state[V]-T;_e({url:new URL(location.href),scroll:ee[s.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=s.state[V]},blocked:()=>{history.go(-i)},type:"popstate",delta:i})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[V]:++T},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&K.navigating.set(null)})},_hydrate:async({status:r,error:c,node_ids:u,params:s,routeId:i,data:p,form:h})=>{var w;f=!0;const k=new URL(location.href);let v;try{const b=u.map(async(S,P)=>{const O=p[P];return pe({loader:ue[S],url:k,params:s,routeId:i,parent:async()=>{const I={};for(let j=0;j<P;j+=1)Object.assign(I,(await b[j]).data);return I},server_data_node:he(O)})});v=await Y({url:k,params:s,branch:await Promise.all(b),status:r,error:c,form:h,route:(w=ae.find(S=>S.id===i))!=null?w:null})}catch(b){if(b instanceof Ge){await re(new URL(b.location,location.href));return}v=await ne({status:b instanceof ke?b.status:500,error:Z(b,{url:k,params:s,routeId:i}),url:k,routeId:i})}Ae(v)}}}let qt=1;async function We(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Tt,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(qt++)),await ie(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}function Z(n,e){var t;return n instanceof ke?n.body:(t=jt.handleError({error:n,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Ct=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function se(n,e){for(const t of Ct)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return e}function oe(){return()=>{}}async function Bt({env:n,hydrate:e,paths:t,target:l,trailing_slash:o}){it(t);const d=Dt({target:l,base:t.base,trailing_slash:o});lt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Bt as start};
