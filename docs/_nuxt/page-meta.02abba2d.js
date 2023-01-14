import{j as K,r as y,k as j,l as ue,m as J,n as R,p as f,q as se,g as P,s as re,v as Ae,_ as z,o as B,c as w,f as M,x as de,t as h,y as pe,z as fe,A as Se,B as _e,C as ge,a as l,b as I,w as N,d as E,F as ae,D as Ce,e as he,E as Qe,G as me,H as ye,I as Be,J as we,K as be,L as ve,M as De}from"./entry.754064a2.js";const Fe=()=>null;function Ie(...s){var S,b,v,D,p,g,m;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[r,e,t={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=(S=t.server)!=null?S:!0,t.default=(b=t.default)!=null?b:Fe,t.lazy=(v=t.lazy)!=null?v:!1,t.immediate=(D=t.immediate)!=null?D:!0;const a=K(),i=()=>a.isHydrating?a.payload.data[r]:a.static.data[r],c=()=>i()!==void 0;a._asyncData[r]||(a._asyncData[r]={data:y((m=(g=i())!=null?g:(p=t.default)==null?void 0:p.call(t))!=null?m:null),pending:y(!c()),error:y(a.payload._errors[r]?j(a.payload._errors[r]):null)});const o={...a._asyncData[r]};o.refresh=o.execute=(_={})=>{if(a._asyncDataPromises[r]){if(_.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if(_._initial&&c())return i();o.pending.value=!0;const C=new Promise((A,F)=>{try{A(e(a))}catch(H){F(H)}}).then(A=>{if(C.cancelled)return a._asyncDataPromises[r];t.transform&&(A=t.transform(A)),t.pick&&(A=ke(A,t.pick)),o.data.value=A,o.error.value=null}).catch(A=>{var F,H;if(C.cancelled)return a._asyncDataPromises[r];o.error.value=A,o.data.value=f((H=(F=t.default)==null?void 0:F.call(t))!=null?H:null)}).finally(()=>{C.cancelled||(o.pending.value=!1,a.payload.data[r]=o.data.value,o.error.value&&(a.payload._errors[r]=j(o.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=C,a._asyncDataPromises[r]};const u=()=>o.refresh({_initial:!0}),d=t.server!==!1&&a.payload.serverRendered;{const _=se();if(_&&!_._nuxtOnBeforeMountCbs){_._nuxtOnBeforeMountCbs=[];const A=_._nuxtOnBeforeMountCbs;_&&(ue(()=>{A.forEach(F=>{F()}),A.splice(0,A.length)}),J(()=>A.splice(0,A.length)))}d&&a.isHydrating&&c()?o.pending.value=!1:_&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?_._nuxtOnBeforeMountCbs.push(u):t.immediate&&u(),t.watch&&R(t.watch,()=>o.refresh());const C=a.hook("app:data:refresh",A=>{if(!A||A.includes(r))return o.refresh()});_&&J(C)}const Q=Promise.resolve(a._asyncDataPromises[r]).then(()=>o);return Object.assign(Q,o),Q}function ke(s,n){const r={};for(const e of n)r[e]=s[e];return r}function cn(s,n){return K()._useHead(s,n)}const Ee={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function Oe(s,n={}){n={...Ee,...n};const r=oe(n);return r.dispatch(s),r.toString()}function oe(s){const n=[];let r=[];const e=t=>{n.push(t)};return{toString(){return n.join("")},getContext(){return r},dispatch(t){return s.replacer&&(t=s.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){const a=/\[object (.*)]/i,i=Object.prototype.toString.call(t),c=a.exec(i),o=c?c[1].toLowerCase():"unknown:["+i.toLowerCase()+"]";let u=null;if((u=r.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(r.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")if(this["_"+o])this["_"+o](t);else{if(s.ignoreUnknown)return e("["+o+"]");throw new Error('Unknown object type "'+o+'"')}else{let d=Object.keys(t);s.unorderedObjects&&(d=d.sort()),s.respectType!==!1&&!W(t)&&d.splice(0,0,"prototype","__proto__","letructor"),s.excludeKeys&&(d=d.filter(function(Q){return!s.excludeKeys(Q)})),e("object:"+d.length+":");for(const Q of d)this.dispatch(Q),e(":"),s.excludeValues||this.dispatch(t[Q]),e(",")}},_array(t,a){if(a=typeof a<"u"?a:s.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1){for(const o of t)this.dispatch(o);return}const i=[],c=t.map(o=>{const u=oe(s);return u.dispatch(o),i.push(u.getContext()),u.toString()});return r=[...r,...i],c.sort(),this._array(c,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),W(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=[...t];return this._array(a,s.unorderedSets!==!1)},_set(t){e("set:");const a=[...t];return this._array(a,s.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function W(s){return typeof s!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}class O{constructor(n,r){n=this.words=n||[],this.sigBytes=r!==void 0?r:n.length*4}toString(n){return(n||xe).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new O([...this.words])}}const xe={stringify(s){const n=[];for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},Ue={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,a=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|a<<8|i;for(let o=0;o<4&&e*8+o*6<s.sigBytes*8;o++)r.push(n.charAt(c>>>6*(3-o)&63))}return r.join("")}},Pe={parse(s){const n=s.length,r=[];for(let e=0;e<n;e++)r[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new O(r,n)}},Me={parse(s){return Pe.parse(unescape(encodeURIComponent(s)))}};class Ge{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new O,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=Me.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);r=this._data.words.splice(0,t),this._data.sigBytes-=a}return new O(r,a)}}class He extends Ge{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const Ne=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ye=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],k=[];class Le extends He{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new O([...Ne])}_doProcessBlock(n,r){const e=this._hash.words;let t=e[0],a=e[1],i=e[2],c=e[3],o=e[4],u=e[5],d=e[6],Q=e[7];for(let S=0;S<64;S++){if(S<16)k[S]=n[r+S]|0;else{const _=k[S-15],C=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,A=k[S-2],F=(A<<15|A>>>17)^(A<<13|A>>>19)^A>>>10;k[S]=C+k[S-7]+F+k[S-16]}const b=o&u^~o&d,v=t&a^t&i^a&i,D=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),p=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),g=Q+p+b+Ye[S]+k[S],m=D+v;Q=d,d=u,u=o,o=c+g|0,c=i,i=a,a=t,t=g+m|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+i|0,e[3]=e[3]+c|0,e[4]=e[4]+o|0,e[5]=e[5]+u|0,e[6]=e[6]+d|0,e[7]=e[7]+Q|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function $e(s){return new Le().finalize(s).toString(Ue)}function Te(s,n={}){const r=typeof s=="string"?s:Oe(s,n);return $e(r).slice(0,10)}function Ke(s,n,r){const[e={},t]=typeof n=="string"?[{},n]:[n,r],a=e.key||Te([t,f(e.baseURL),typeof s=="string"?s:"",f(e.params)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const i=a===t?"$f"+a:a,c=P(()=>{let C=s;return typeof C=="function"&&(C=C()),f(C)}),{server:o,lazy:u,default:d,transform:Q,pick:S,watch:b,immediate:v,...D}=e,p=re({...D,cache:typeof e.cache=="boolean"?void 0:e.cache}),g={server:o,lazy:u,default:d,transform:Q,pick:S,immediate:v,watch:[p,c,...b||[]]};let m;return Ie(i,()=>{var C;return(C=m==null?void 0:m.abort)==null||C.call(m),m=typeof AbortController<"u"?new AbortController:{},$fetch(c.value,{signal:m.signal,...p})},g)}function G(){const s=K();return s._appConfig||(s._appConfig=re(Ae)),s._appConfig}const Re={},ze={class:"flag flag--ukraine"};function je(s,n){return B(),w("div",ze)}const Je=z(Re,[["render",je],["__scopeId","data-v-06d25804"]]),We={key:0,class:"badge badge-info"},Ve=M({__name:"github-issue-count",async setup(s){let n,r;const e=G(),{data:t,pending:a}=([n,r]=de(()=>Ke(e.library.gitHubStatsUrl,{server:!1,lazy:!0},"$zXgY1EVtZn")),n=await n,r(),n),i=P(()=>t.value?t.value.open_issues_count:0);return(c,o)=>f(a)?pe("",!0):(B(),w("span",We,h(f(i)),1))}}),ie=M({__name:"contact-me-button",props:{buttonClass:{type:String,default:null}},setup(s){return(n,r)=>(B(),w("a",{href:"#","data-toggle":"modal","data-target":"#contact-me-modal",class:Se(s.buttonClass)},[fe(n.$slots,"default")],2))}}),Ze="data:image/jpeg;base64,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SSSQAAAACSSQCSQAACSSSSQAAAACSSQCSQAACSSSQCQACSQACQACSQCQCQAACQACSQACQACSQCQCQACSSSSSQCSSQCSSSQCSSSSSSSSQCSSQCSSSQCSSSQACQCSSSSSQAAACSQACQACQCSSSSSQAAACSQAACSSSQCSSSQCSSSSQCQACSSSQCSSSQCSSSSQCQCSQCSSQCQCSSSSQCQCSSSQCSSQCQCSSSSQCQCSQACQACSSQCSQCSSQCSSQACQACSSQCSQCSSQCSSSSSSSSQCSSSQCQCQAAACSSSSSQCSSSQCQCQAAAAAAACSSSSSQCSSQCSSQAAAACSSSSSQCSSQCSSQACSSSQCSSSQCQCQCQACQCSSSQCSSSQCQCQCQACSQACSSQCSQCSQCSSSSSSQACSSQCSQCSQCSSSSSQCSQCQACSQCSQCSSSQCQCSQCQACSQCSQCSSSQCQCSSSQACSQCSQACQCQCQCSSSQACSQCSQACQCQCT//EABQRAQAAAAAAAAAAAAAAAAAAAKD/2gAIAQMBAT8QNJ//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAECAQE/EDSf/8QAFBABAAAAAAAAAAAAAAAAAAAAoP/aAAgBAQABPxA0n//Z",V=(s="")=>_e.website.url+s,Xe=()=>{const s=ge(),n=P(()=>V(s.fullPath));return{buildPageUrl:V,pageUrl:n}},ce=s=>(Qe("data-v-41cf331d"),s=s(),me(),s),qe={class:"navbar navbar-expand-lg navbar-light bg-light"},et=["href"],tt=["alt"],nt={class:"hidden-sm"},st=ce(()=>l("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-supported-content","aria-controls":"navbar-supported-content","aria-expanded":"false","aria-label":"Toggle navigation"},[l("span",{class:"navbar-toggler-icon"})],-1)),rt={class:"collapse navbar-collapse",id:"navbar-supported-content"},at={class:"navbar-nav mt-2 mt-lg-0 ml-auto",role:"menubar"},ot={class:"nav-item",role:"presentation"},it={class:"nav-item",role:"presentation"},ct={class:"nav-item",role:"presentation"},lt=["href"],ut={class:"nav-item dropdown",role:"presentation"},At={class:"nav-link dropdown-toggle",href:"#",id:"navbar-dropdown-links","data-toggle":"dropdown",role:"menuitem","aria-haspopup":"true","aria-expanded":"false"},dt={class:"dropdown-menu","aria-labelledby":"navbar-dropdown-links",role:"menu"},pt=["href"],ft=["href"],St=["href"],_t={class:"nav-item dropdown",role:"presentation"},gt={class:"nav-link dropdown-toggle",href:"#",id:"navbar-dropdown-feedback","data-toggle":"dropdown",role:"menuitem","aria-haspopup":"true","aria-expanded":"false"},Ct={class:"dropdown-menu","aria-labelledby":"navbar-dropdown-feedback",role:"menu"},ht=["href"],Qt={class:"nav-item dropdown",role:"presentation"},mt={class:"nav-link dropdown-toggle",href:"#",id:"navbar-dropdown-locale","data-toggle":"dropdown",role:"menuitem","aria-haspopup":"true","aria-expanded":"false"},yt=ce(()=>l("i",{class:"fa fa-globe","aria-hidden":"true"},null,-1)),Bt={class:"dropdown-menu","aria-labelledby":"navbar-dropdown-locale",role:"menu"},wt=["href"],bt=M({__name:"top-nav-bar",setup(s){const n=G(),{buildPageUrl:r}=Xe();return(e,t)=>{const a=he,i=Ve,c=ie;return B(),w("nav",qe,[l("a",{class:"navbar-brand",href:f(n).website.url},[l("img",{class:"navbar-brand__logo",src:Ze,alt:f(n).library.name},null,8,tt),l("span",nt,h(f(n).library.name),1)],8,et),st,l("div",rt,[l("ul",at,[l("li",ot,[I(a,{class:"nav-link",to:{hash:"#demo"},role:"menuitem"},{default:N(()=>[E(h(e.$t("demo")),1)]),_:1})]),l("li",it,[I(a,{class:"nav-link",to:{hash:"#documentation"},role:"menuitem"},{default:N(()=>[E(h(e.$t("documentation")),1)]),_:1})]),l("li",ct,[l("a",{class:"nav-link",href:f(n).library.licenseUrl,target:"_blank",role:"menuitem"},h(e.$t("license")),9,lt)]),l("li",ut,[l("a",At,h(e.$t("links")),1),l("div",dt,[l("a",{class:"dropdown-item",href:f(n).library.npmUrl,target:"_blank",role:"menuitem"}," NPM ",8,pt),l("a",{class:"dropdown-item",href:f(n).library.gitHubUrl,target:"_blank",role:"menuitem"}," GitHub ",8,ft),l("a",{class:"dropdown-item",href:f(n).library.runKitUrl,target:"_blank",role:"menuitem"}," RunKit ",8,St)])]),l("li",_t,[l("a",gt,h(e.$t("feedback")),1),l("div",Ct,[l("a",{class:"dropdown-item",href:f(n).library.issuesUrl,target:"_blank",role:"menuitem"},[E(h(e.$t("issueReport"))+" ",1),I(i)],8,ht),I(c,{"button-class":"dropdown-item",role:"menuitem"},{default:N(()=>[E(h(e.$t("action.contactMe")),1)]),_:1})])]),l("li",Qt,[l("a",mt,[yt,E(" "+h(e.$i18n.locale),1)]),l("div",Bt,[(B(!0),w(ae,null,Ce(e.$i18n.availableLocales,o=>(B(),w("a",{key:o,class:"dropdown-item",href:f(r)(o==="uk-UA"?"/":`/${o}`),role:"menuitem"},h(e.$t(`locale.${o}`))+" ("+h(o)+") ",9,wt))),128))])])])])])}}});const vt=z(bt,[["__scopeId","data-v-41cf331d"]]),Dt={};function Ft(s,n){const r=Je,e=vt;return B(),w(ae,null,[I(r),I(e)],64)}const ln=z(Dt,[["render",Ft]]);var Z;const x=typeof window<"u",It=s=>typeof s=="string",L=()=>{};x&&((Z=window==null?void 0:window.navigator)==null?void 0:Z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Y(s){return typeof s=="function"?s():f(s)}function kt(s){return s}function U(s){return Be()?(we(s),!0):!1}function un(s){let n=0,r,e;const t=()=>{n-=1,e&&n<=0&&(e.stop(),r=void 0,e=void 0)};return(...a)=>(n+=1,r||(e=ye(!0),r=e.run(()=>s(...a))),U(t),r)}function Et(s,n=!0){se()?ve(s):n?s():De(s)}function Ot(s,n=1e3,r={}){const{immediate:e=!0,immediateCallback:t=!1}=r;let a=null;const i=y(!1);function c(){a&&(clearInterval(a),a=null)}function o(){i.value=!1,c()}function u(){f(n)<=0||(i.value=!0,t&&s(),c(),a=setInterval(s,Y(n)))}if(e&&x&&u(),be(n)){const d=R(n,()=>{i.value&&x&&u()});U(d)}return U(o),{isActive:i,pause:o,resume:u}}function xt(s,n,r={}){const{immediate:e=!0}=r,t=y(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function c(){t.value=!1,i()}function o(...u){i(),t.value=!0,a=setTimeout(()=>{t.value=!1,a=null,s(...u)},Y(n))}return e&&(t.value=!0,x&&o()),U(c),{isPending:t,start:o,stop:c}}function Ut(s){var n;const r=Y(s);return(n=r==null?void 0:r.$el)!=null?n:r}const le=x?window:void 0,Pt=x?window.navigator:void 0;function Mt(...s){let n,r,e,t;if(It(s[0])?([r,e,t]=s,n=le):[n,r,e,t]=s,!n)return L;let a=L;const i=R(()=>Ut(n),o=>{a(),o&&(o.addEventListener(r,e,t),a=()=>{o.removeEventListener(r,e,t),a=L})},{immediate:!0,flush:"post"}),c=()=>{i(),a()};return U(c),c}function Gt(s,n=!1){const r=y(),e=()=>r.value=Boolean(s());return e(),Et(e,n),r}function An(s={}){const{navigator:n=Pt,read:r=!1,source:e,copiedDuring:t=1500,legacy:a=!1}=s,i=["copy","cut"],c=Gt(()=>n&&"clipboard"in n),o=P(()=>c.value||a),u=y(""),d=y(!1),Q=xt(()=>d.value=!1,t);function S(){c.value?n.clipboard.readText().then(p=>{u.value=p}):u.value=D()}if(o.value&&r)for(const p of i)Mt(p,S);async function b(p=Y(e)){o.value&&p!=null&&(c.value?await n.clipboard.writeText(p):v(p),u.value=p,d.value=!0,Q.start())}function v(p){const g=document.createElement("textarea");g.value=p!=null?p:"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function D(){var p,g,m;return(m=(g=(p=document==null?void 0:document.getSelection)==null?void 0:p.call(document))==null?void 0:g.toString())!=null?m:""}return{isSupported:o,text:u,copied:d,copy:b}}const $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";$[T]=$[T]||{};$[T];function Ht(s,n={}){const{immediate:r=!0,window:e=le}=n,t=y(!1);let a=null;function i(){!t.value||!e||(s(),a=e.requestAnimationFrame(i))}function c(){!t.value&&e&&(t.value=!0,i())}function o(){t.value=!1,a!=null&&e&&(e.cancelAnimationFrame(a),a=null)}return r&&c(),U(o),{isActive:t,pause:o,resume:c}}var Nt=Object.defineProperty,X=Object.getOwnPropertySymbols,Yt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable,q=(s,n,r)=>n in s?Nt(s,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[n]=r,$t=(s,n)=>{for(var r in n||(n={}))Yt.call(n,r)&&q(s,r,n[r]);if(X)for(var r of X(n))Lt.call(n,r)&&q(s,r,n[r]);return s};function Tt(s={}){const{controls:n=!1,interval:r="requestAnimationFrame"}=s,e=y(new Date),t=()=>e.value=new Date,a=r==="requestAnimationFrame"?Ht(t,{immediate:!0}):Ot(t,r,{immediate:!0});return n?$t({now:e},a):e}var ee;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(ee||(ee={}));var Kt=Object.defineProperty,te=Object.getOwnPropertySymbols,Rt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable,ne=(s,n,r)=>n in s?Kt(s,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[n]=r,jt=(s,n)=>{for(var r in n||(n={}))Rt.call(n,r)&&ne(s,r,n[r]);if(te)for(var r of te(n))zt.call(n,r)&&ne(s,r,n[r]);return s};const Jt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};jt({linear:kt},Jt);const Wt=M({__name:"page-copyright",setup(s){const n=G(),r=Tt(),e=P(()=>r.value.getFullYear());return(t,a)=>(B(),w("span",null," \xA9 "+h(f(n).library.releaseYear)+"-"+h(f(e))+" "+h(f(n).library.name),1))}}),Vt={class:"row"},Zt={class:"col-12"},Xt=l("hr",null,null,-1),qt={class:"list-unstyled",role:"menubar"},en={class:"d-inline mr-2 mb-0"},tn={class:"d-inline mr-2",role:"presentation"},nn=["href"],sn={class:"d-inline mr-2",role:"presentation"},rn=["href"],an={class:"d-inline mr-2",role:"presentation"},dn=M({__name:"page-footer",setup(s){const n=G();return(r,e)=>{const t=Wt,a=ie;return B(),w("div",Vt,[l("div",Zt,[Xt,l("nav",null,[l("ul",qt,[l("p",en,[I(t)]),l("li",tn,[l("a",{href:f(n).library.npmUrl,target:"_blank",role:"menuitem"},"NPM",8,nn)]),l("li",sn,[l("a",{href:f(n).library.gitHubUrl,target:"_blank",role:"menuitem"},"GitHub",8,rn)]),l("li",an,[I(a,{role:"menuitem"},{default:N(()=>[E(h(r.$t("action.contactMe")),1)]),_:1})])])])])])}}}),pn=()=>{const s=G();return{buildPageTitle:r=>s.library.name+" - "+r}};export{ln as _,cn as a,dn as b,Xe as c,Ot as d,G as e,An as f,un as g,ie as h,Wt as i,V as j,pn as u};
