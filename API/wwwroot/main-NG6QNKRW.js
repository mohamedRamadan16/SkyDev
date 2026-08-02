var NS=Object.defineProperty,OS=Object.defineProperties;var PS=Object.getOwnPropertyDescriptors;var jy=Object.getOwnPropertySymbols;var FS=Object.prototype.hasOwnProperty,LS=Object.prototype.propertyIsEnumerable;var By=(t,n,e)=>n in t?NS(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,w=(t,n)=>{for(var e in n||={})FS.call(n,e)&&By(t,e,n[e]);if(jy)for(var e of jy(n))LS.call(n,e)&&By(t,e,n[e]);return t},ce=(t,n)=>OS(t,PS(n));var on=null,ld=!1,mh=1,jS=null,It=Symbol("SIGNAL");function se(t){let n=on;return on=t,n}function cd(){return on}var Or={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Pr(t){if(ld)throw new Error("");if(on===null)return;on.consumerOnSignalRead(t);let n=on.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=on.recomputing;if(i&&(e=n!==void 0?n.nextProducer:on.producers,e!==void 0&&e.producer===t)){on.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===on&&(!i||VS(r,on)))return;let o=ks(on),s={producer:t,consumer:on,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};on.producersTail=s,n!==void 0?n.nextProducer=s:on.producers=s,o&&zy(t,s)}function Vy(){mh++}function Io(t){if(!(ks(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===mh)){if(!t.producerMustRecompute(t)&&!Ts(t)){Ms(t);return}t.producerRecomputeValue(t),Ms(t)}}function hh(t){if(t.consumers===void 0)return;let n=ld;ld=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||BS(i)}}finally{ld=n}}function ph(){return on?.consumerAllowSignalWrites!==!1}function BS(t){t.dirty=!0,hh(t),t.consumerMarkedDirty?.(t)}function Ms(t){t.dirty=!1,t.lastCleanEpoch=mh}function ir(t){return t&&Hy(t),se(t)}function Hy(t){t.producersTail=void 0,t.recomputing=!0}function Fr(t,n){se(n),t&&Uy(t)}function Uy(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(ks(t))do e=gh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Ts(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Io(e),i!==e.version))return!0}return!1}function Lr(t){if(ks(t)){let n=t.producers;for(;n!==void 0;)n=gh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function zy(t,n){let e=t.consumersTail,i=ks(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)zy(r.producer,r)}function gh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!ks(n)){let o=n.producers;for(;o!==void 0;)o=gh(o)}return e}function ks(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Qa(t){jS?.(t)}function VS(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Ka(t,n){return Object.is(t,n)}function Ja(t,n){let e=Object.create(HS);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Io(e),Pr(e),e.value===Oi)throw e.error;return e.value};return i[It]=e,Qa(e),i}var Eo=Symbol("UNSET"),xo=Symbol("COMPUTING"),Oi=Symbol("ERRORED"),HS=ce(w({},Or),{value:Eo,dirty:!0,error:null,equal:Ka,kind:"computed",producerMustRecompute(t){return t.value===Eo||t.value===xo},producerRecomputeValue(t){if(t.value===xo)throw new Error("");let n=t.value;t.value=xo;let e=ir(t),i,r=!1;try{i=t.computation(),se(null),r=n!==Eo&&n!==Oi&&i!==Oi&&t.equal(n,i)}catch(o){i=Oi,t.error=o}finally{Fr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function US(){throw new Error}var $y=US;function Gy(t){$y(t)}function vh(t){$y=t}var zS=null;function _h(t,n){let e=Object.create(el);e.value=t,n!==void 0&&(e.equal=n);let i=()=>Wy(e);return i[It]=e,Qa(e),[i,s=>So(e,s),s=>dd(e,s)]}function Wy(t){return Pr(t),t.value}function So(t,n){ph()||Gy(t),t.equal(t.value,n)||(t.value=n,$S(t))}function dd(t,n){ph()||Gy(t),So(t,n(t.value))}var el=ce(w({},Or),{equal:Ka,value:void 0,kind:"signal"});function $S(t){t.version++,Vy(),hh(t),zS?.(t)}var yh=ce(w({},Or),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function bh(t){if(t.dirty=!1,t.version>0&&!Ts(t))return;t.version++;let n=ir(t);try{t.cleanup(),t.fn()}finally{Fr(t,n)}}function De(t){return typeof t=="function"}function As(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var ud=As(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Mo(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var Se=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(De(i))try{i()}catch(o){n=o instanceof ud?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{qy(o)}catch(s){n=n??[],s instanceof ud?n=[...n,...s.errors]:n.push(s)}}if(n)throw new ud(n)}}add(n){var e;if(n&&n!==this)if(this.closed)qy(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Mo(e,n)}remove(n){let{_finalizers:e}=this;e&&Mo(e,n),n instanceof t&&n._removeParent(this)}};Se.EMPTY=(()=>{let t=new Se;return t.closed=!0,t})();var Ch=Se.EMPTY;function fd(t){return t instanceof Se||t&&"closed"in t&&De(t.remove)&&De(t.add)&&De(t.unsubscribe)}function qy(t){De(t)?t():t.unsubscribe()}var mi={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Rs={setTimeout(t,n,...e){let{delegate:i}=Rs;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Rs;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function md(t){Rs.setTimeout(()=>{let{onUnhandledError:n}=mi;if(n)n(t);else throw t})}function To(){}var Zy=wh("C",void 0,void 0);function Yy(t){return wh("E",void 0,t)}function Xy(t){return wh("N",t,void 0)}function wh(t,n,e){return{kind:t,value:n,error:e}}var ko=null;function Ns(t){if(mi.useDeprecatedSynchronousErrorHandling){let n=!ko;if(n&&(ko={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=ko;if(ko=null,e)throw i}}else t()}function Qy(t){mi.useDeprecatedSynchronousErrorHandling&&ko&&(ko.errorThrown=!0,ko.error=t)}var Ao=class extends Se{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,fd(n)&&n.add(this)):this.destination=qS}static create(n,e,i){return new rr(n,e,i)}next(n){this.isStopped?Eh(Xy(n),this):this._next(n)}error(n){this.isStopped?Eh(Yy(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Eh(Zy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},GS=Function.prototype.bind;function Dh(t,n){return GS.call(t,n)}var xh=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){hd(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){hd(i)}else hd(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){hd(e)}}},rr=class extends Ao{constructor(n,e,i){super();let r;if(De(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&mi.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Dh(n.next,o),error:n.error&&Dh(n.error,o),complete:n.complete&&Dh(n.complete,o)}):r=n}this.destination=new xh(r)}};function hd(t){mi.useDeprecatedSynchronousErrorHandling?Qy(t):md(t)}function WS(t){throw t}function Eh(t,n){let{onStoppedNotification:e}=mi;e&&Rs.setTimeout(()=>e(t,n))}var qS={closed:!0,next:To,error:WS,complete:To};var Os=typeof Symbol=="function"&&Symbol.observable||"@@observable";function sn(t){return t}function Ih(...t){return Sh(t)}function Sh(t){return t.length===0?sn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var be=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=YS(e)?e:new rr(e,i,r);return Ns(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Ky(i),new i((r,o)=>{let s=new rr({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Os](){return this}pipe(...e){return Sh(e)(this)}toPromise(e){return e=Ky(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function Ky(t){var n;return(n=t??mi.Promise)!==null&&n!==void 0?n:Promise}function ZS(t){return t&&De(t.next)&&De(t.error)&&De(t.complete)}function YS(t){return t&&t instanceof Ao||ZS(t)&&fd(t)}function XS(t){return De(t?.lift)}function Ce(t){return n=>{if(XS(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ee(t,n,e,i,r){return new Mh(t,n,e,i,r)}var Mh=class extends Ao{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Jy=As(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var T=(()=>{class t extends be{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new pd(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Jy}next(e){Ns(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Ns(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Ns(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Ch:(this.currentObservers=null,o.push(e),new Se(()=>{this.currentObservers=null,Mo(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new be;return e.source=this,e}}return t.create=(n,e)=>new pd(n,e),t})(),pd=class extends T{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Ch}};var Lt=class extends T{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var tl={now(){return(tl.delegate||Date).now()},delegate:void 0};var Pi=class extends T{constructor(n=1/0,e=1/0,i=tl){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let l=1;l<i.length&&i[l]<=s;l+=2)a=l;a&&i.splice(0,a+1)}}};var gd=class extends Se{constructor(n,e){super()}schedule(n,e=0){return this}};var nl={setInterval(t,n,...e){let{delegate:i}=nl;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=nl;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var vd=class extends gd{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return nl.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&nl.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Mo(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Ps=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Ps.now=tl.now;var _d=class extends Ps{constructor(n,e=Ps.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Ro=new _d(vd),eb=Ro;var St=new be(t=>t.complete());function yd(t){return t&&De(t.schedule)}function Th(t){return t[t.length-1]}function bd(t){return De(Th(t))?t.pop():void 0}function Fi(t){return yd(Th(t))?t.pop():void 0}function tb(t,n){return typeof Th(t)=="number"?t.pop():n}function ib(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(u){try{c(i.next(u))}catch(f){s(f)}}function l(u){try{c(i.throw(u))}catch(f){s(f)}}function c(u){u.done?o(u.value):r(u.value).then(a,l)}c((i=i.apply(t,n||[])).next())})}function nb(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function No(t){return this instanceof No?(this.v=t,this):new No(t)}function rb(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(v){return Promise.resolve(v).then(h,f)}}function a(h,v){i[h]&&(r[h]=function(S){return new Promise(function(R,P){o.push([h,S,R,P])>1||l(h,S)})},v&&(r[h]=v(r[h])))}function l(h,v){try{c(i[h](v))}catch(S){m(o[0][3],S)}}function c(h){h.value instanceof No?Promise.resolve(h.value.v).then(u,f):m(o[0][2],h)}function u(h){l("next",h)}function f(h){l("throw",h)}function m(h,v){h(v),o.shift(),o.length&&l(o[0][0],o[0][1])}}function ob(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof nb=="function"?nb(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),r(a,l,s.done,s.value)})}}function r(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Cd=t=>t&&typeof t.length=="number"&&typeof t!="function";function wd(t){return De(t?.then)}function Dd(t){return De(t[Os])}function Ed(t){return Symbol.asyncIterator&&De(t?.[Symbol.asyncIterator])}function xd(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function QS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Id=QS();function Sd(t){return De(t?.[Id])}function Md(t){return rb(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield No(e.read());if(r)return yield No(void 0);yield yield No(i)}}finally{e.releaseLock()}})}function Td(t){return De(t?.getReader)}function Je(t){if(t instanceof be)return t;if(t!=null){if(Dd(t))return KS(t);if(Cd(t))return JS(t);if(wd(t))return eM(t);if(Ed(t))return sb(t);if(Sd(t))return tM(t);if(Td(t))return nM(t)}throw xd(t)}function KS(t){return new be(n=>{let e=t[Os]();if(De(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function JS(t){return new be(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function eM(t){return new be(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,md)})}function tM(t){return new be(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function sb(t){return new be(n=>{iM(t,n).catch(e=>n.error(e))})}function nM(t){return sb(Md(t))}function iM(t,n){var e,i,r,o;return ib(this,void 0,void 0,function*(){try{for(e=ob(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function xn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function kd(t,n=0){return Ce((e,i)=>{e.subscribe(Ee(i,r=>xn(i,t,()=>i.next(r),n),()=>xn(i,t,()=>i.complete(),n),r=>xn(i,t,()=>i.error(r),n)))})}function Ad(t,n=0){return Ce((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function ab(t,n){return Je(t).pipe(Ad(n),kd(n))}function lb(t,n){return Je(t).pipe(Ad(n),kd(n))}function cb(t,n){return new be(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function db(t,n){return new be(e=>{let i;return xn(e,n,()=>{i=t[Id](),xn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>De(i?.return)&&i.return()})}function Rd(t,n){if(!t)throw new Error("Iterable cannot be null");return new be(e=>{xn(e,n,()=>{let i=t[Symbol.asyncIterator]();xn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function ub(t,n){return Rd(Md(t),n)}function fb(t,n){if(t!=null){if(Dd(t))return ab(t,n);if(Cd(t))return cb(t,n);if(wd(t))return lb(t,n);if(Ed(t))return Rd(t,n);if(Sd(t))return db(t,n);if(Td(t))return ub(t,n)}throw xd(t)}function mt(t,n){return n?fb(t,n):Je(t)}function W(...t){let n=Fi(t);return mt(t,n)}function Oo(t,n){let e=De(t)?t:()=>t,i=r=>r.error(e());return new be(n?r=>n.schedule(i,0,r):i)}function il(t){return!!t&&(t instanceof be||De(t.lift)&&De(t.subscribe))}var or=As(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function kh(t,n){let e=typeof n=="object";return new Promise((i,r)=>{let o=!1,s;t.subscribe({next:a=>{s=a,o=!0},error:r,complete:()=>{o?i(s):e?i(n.defaultValue):r(new or)}})})}function mb(t){return t instanceof Date&&!isNaN(t)}function ee(t,n){return Ce((e,i)=>{let r=0;e.subscribe(Ee(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:rM}=Array;function oM(t,n){return rM(n)?t(...n):t(n)}function Nd(t){return ee(n=>oM(t,n))}var{isArray:sM}=Array,{getPrototypeOf:aM,prototype:lM,keys:cM}=Object;function Od(t){if(t.length===1){let n=t[0];if(sM(n))return{args:n,keys:null};if(dM(n)){let e=cM(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function dM(t){return t&&typeof t=="object"&&aM(t)===lM}function Pd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function rl(...t){let n=Fi(t),e=bd(t),{args:i,keys:r}=Od(t);if(i.length===0)return mt([],n);let o=new be(uM(i,n,r?s=>Pd(r,s):sn));return e?o.pipe(Nd(e)):o}function uM(t,n,e=sn){return i=>{hb(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let l=0;l<r;l++)hb(n,()=>{let c=mt(t[l],n),u=!1;c.subscribe(Ee(i,f=>{o[l]=f,u||(u=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function hb(t,n,e){t?xn(e,t,n):n()}function pb(t,n,e,i,r,o,s,a){let l=[],c=0,u=0,f=!1,m=()=>{f&&!l.length&&!c&&n.complete()},h=S=>c<i?v(S):l.push(S),v=S=>{o&&n.next(S),c++;let R=!1;Je(e(S,u++)).subscribe(Ee(n,P=>{r?.(P),o?h(P):n.next(P)},()=>{R=!0},void 0,()=>{if(R)try{for(c--;l.length&&c<i;){let P=l.shift();s?xn(n,s,()=>v(P)):v(P)}m()}catch(P){n.error(P)}}))};return t.subscribe(Ee(n,h,()=>{f=!0,m()})),()=>{a?.()}}function Gt(t,n,e=1/0){return De(n)?Gt((i,r)=>ee((o,s)=>n(i,o,r,s))(Je(t(i,r))),e):(typeof n=="number"&&(e=n),Ce((i,r)=>pb(i,r,t,e)))}function jr(t=1/0){return Gt(sn,t)}function gb(){return jr(1)}function Li(...t){return gb()(mt(t,Fi(t)))}function hi(t){return new be(n=>{Je(t()).subscribe(n)})}function Po(...t){let n=bd(t),{args:e,keys:i}=Od(t),r=new be(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let u=0;u<s;u++){let f=!1;Je(e[u]).subscribe(Ee(o,m=>{f||(f=!0,c--),a[u]=m},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?Pd(i,a):a),o.complete())}))}});return n?r.pipe(Nd(n)):r}function Fd(t=0,n,e=eb){let i=-1;return n!=null&&(yd(n)?e=n:i=n),new be(r=>{let o=mb(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function fn(...t){let n=Fi(t),e=tb(t,1/0),i=t;return i.length?i.length===1?Je(i[0]):jr(e)(mt(i,n)):St}function je(t,n){return Ce((e,i)=>{let r=0;e.subscribe(Ee(i,o=>t.call(n,o,r++)&&i.next(o)))})}function vb(t){return Ce((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(Ee(e,c=>{i=!0,r=c,o||Je(t(c)).subscribe(o=Ee(e,a,l))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function Ld(t,n=Ro){return vb(()=>Fd(t,n))}function pi(t){return Ce((n,e)=>{let i=null,r=!1,o;i=n.subscribe(Ee(e,void 0,void 0,s=>{o=Je(t(s,pi(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Fo(t,n){return De(n)?Gt(t,n,1):Gt(t,1)}function Lo(t,n=Ro){return Ce((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=s+t,u=n.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}a()}e.subscribe(Ee(i,c=>{o=c,s=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function _b(t){return Ce((n,e)=>{let i=!1;n.subscribe(Ee(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function dt(t){return t<=0?()=>St:Ce((n,e)=>{let i=0;n.subscribe(Ee(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function yb(){return Ce((t,n)=>{t.subscribe(Ee(n,To))})}function bb(t){return ee(()=>t)}function Ah(t,n){return n?e=>Li(n.pipe(dt(1),yb()),e.pipe(Ah(t))):Gt((e,i)=>Je(t(e,i)).pipe(dt(1),bb(e)))}function Rh(t,n=Ro){let e=Fd(t,n);return Ah(()=>e)}function jd(t,n=sn){return t=t??fM,Ce((e,i)=>{let r,o=!0;e.subscribe(Ee(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function fM(t,n){return t===n}function Cb(t=mM){return Ce((n,e)=>{let i=!1;n.subscribe(Ee(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function mM(){return new or}function ji(t){return Ce((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function sr(t,n){let e=arguments.length>=2;return i=>i.pipe(t?je((r,o)=>t(r,o,i)):sn,dt(1),e?_b(n):Cb(()=>new or))}function Bd(t){return t<=0?()=>St:Ce((n,e)=>{let i=[];n.subscribe(Ee(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Vd(){return Ce((t,n)=>{let e,i=!1;t.subscribe(Ee(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function ol(t={}){let{connector:n=()=>new T,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,l,c=0,u=!1,f=!1,m=()=>{a?.unsubscribe(),a=void 0},h=()=>{m(),s=l=void 0,u=f=!1},v=()=>{let S=s;h(),S?.unsubscribe()};return Ce((S,R)=>{c++,!f&&!u&&m();let P=l=l??n();R.add(()=>{c--,c===0&&!f&&!u&&(a=Nh(v,r))}),P.subscribe(R),!s&&c>0&&(s=new rr({next:N=>P.next(N),error:N=>{f=!0,m(),a=Nh(h,e,N),P.error(N)},complete:()=>{u=!0,m(),a=Nh(h,i),P.complete()}}),Je(S).subscribe(s))})(o)}}function Nh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new rr({next:()=>{i.unsubscribe(),t()}});return Je(n(...e)).subscribe(i)}function Hd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,ol({connector:()=>new Pi(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function sl(t){return je((n,e)=>t<=e)}function jt(...t){let n=Fi(t);return Ce((e,i)=>{(n?Li(t,e,n):Li(t,e)).subscribe(i)})}function Rt(t,n){return Ce((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(Ee(i,l=>{r?.unsubscribe();let c=0,u=o++;Je(t(l,u)).subscribe(r=Ee(i,f=>i.next(n?n(l,f,u,c++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Be(t){return Ce((n,e)=>{Je(t).subscribe(Ee(e,()=>e.complete(),To)),!e.closed&&n.subscribe(e)})}function Oh(t,n=!1){return Ce((e,i)=>{let r=0;e.subscribe(Ee(i,o=>{let s=t(o,r++);(s||n)&&i.next(o),!s&&i.complete()}))})}function Wt(t,n,e){let i=De(t)||n||e?{next:t,error:n,complete:e}:t;return i?Ce((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(Ee(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):sn}var Ph;function Ud(){return Ph}function Bi(t){let n=Ph;return Ph=t,n}var wb=Symbol("NotFound");function Fs(t){return t===wb||t?.name==="\u0275NotFound"}function Fh(t,n,e){let i=Object.create(hM);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Io(i),Pr(i),i.value===Oi)throw i.error;return i.value};return o[It]=i,Qa(i),o}function Db(t,n){Io(t),So(t,n),Ms(t)}function Eb(t,n){if(Io(t),t.value===Oi)throw t.error;dd(t,n),Ms(t)}var hM=ce(w({},Or),{value:Eo,dirty:!0,error:null,equal:Ka,kind:"linkedSignal",producerMustRecompute(t){return t.value===Eo||t.value===xo},producerRecomputeValue(t){if(t.value===xo)throw new Error("");let n=t.value;t.value=xo;let e=ir(t),i,r=!1;try{let o=t.source(),s=n!==Eo&&n!==Oi,a=s?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,a),t.sourceValue=o,se(null),r=s&&i!==Oi&&t.equal(n,i)}catch(o){i=Oi,t.error=o}finally{Fr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function xb(t){let n=se(null);try{return t()}finally{se(n)}}var Yd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",L=class extends Error{code;constructor(n,e){super(lr(n,e)),this.code=n}};function pM(t){return`NG0${Math.abs(t)}`}function lr(t,n){return`${pM(t)}${n?": "+n:""}`}var qn=globalThis;function Ye(t){for(let n in t)if(t[n]===Ye)return n;throw Error("")}function kb(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function ml(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(ml).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Xd(t,n){return t?n?`${t} ${n}`:t:n||""}var gM=Ye({__forward_ref__:Ye});function ln(t){return t.__forward_ref__=ln,t}function Jt(t){return Yh(t)?t():t}function Yh(t){return typeof t=="function"&&t.hasOwnProperty(gM)&&t.__forward_ref__===ln}function x(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function We(t){return{providers:t.providers||[],imports:t.imports||[]}}function hl(t){return vM(t,Qd)}function Xh(t){return hl(t)!==null}function vM(t,n){return t.hasOwnProperty(n)&&t[n]||null}function _M(t){let n=t?.[Qd]??null;return n||null}function jh(t){return t&&t.hasOwnProperty($d)?t[$d]:null}var Qd=Ye({\u0275prov:Ye}),$d=Ye({\u0275inj:Ye}),b=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=x({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Qh(t){return t&&!!t.\u0275providers}var pl=Ye({\u0275cmp:Ye}),gl=Ye({\u0275dir:Ye}),Kh=Ye({\u0275pipe:Ye}),Jh=Ye({\u0275mod:Ye}),ll=Ye({\u0275fac:Ye}),Uo=Ye({__NG_ELEMENT_ID__:Ye}),Ib=Ye({__NG_ENV_ID__:Ye});function ep(t){return Kd(t,"@NgModule"),t[Jh]||null}function cr(t){return Kd(t,"@Component"),t[pl]||null}function tp(t){return Kd(t,"@Directive"),t[gl]||null}function Ab(t){return Kd(t,"@Pipe"),t[Kh]||null}function Kd(t,n){if(t==null)throw new L(-919,!1)}function vl(t){return typeof t=="string"?t:t==null?"":String(t)}var Rb=Ye({ngErrorCode:Ye}),yM=Ye({ngErrorMessage:Ye}),bM=Ye({ngTokenPath:Ye});function np(t,n){return Nb("",-200,n)}function Jd(t,n){throw new L(-201,!1)}function Nb(t,n,e){let i=new L(n,t);return i[Rb]=n,i[yM]=t,e&&(i[bM]=e),i}function CM(t){return t[Rb]}var Bh;function Ob(){return Bh}function mn(t){let n=Bh;return Bh=t,n}function ip(t,n,e){let i=hl(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Jd(t,"")}var wM={},jo=wM,DM="__NG_DI_FLAG__",Vh=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Bo(e)||0;try{return this.injector.get(n,i&8?null:jo,i)}catch(r){if(Fs(r))return r;throw r}}};function EM(t,n=0){let e=Ud();if(e===void 0)throw new L(-203,!1);if(e===null)return ip(t,void 0,n);{let i=xM(n),r=e.retrieve(t,i);if(Fs(r)){if(i.optional)return null;throw r}return r}}function te(t,n=0){return(Ob()||EM)(Jt(t),n)}function d(t,n){return te(t,Bo(n))}function Bo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function xM(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Hh(t){let n=[];for(let e=0;e<t.length;e++){let i=Jt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new L(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],l=IM(a);typeof l=="number"?l===-1?r=a.token:o|=l:r=a}n.push(te(r,o))}else n.push(te(i))}return n}function IM(t){return t[DM]}function Br(t,n){let e=t.hasOwnProperty(ll);return e?t[ll]:null}function Pb(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Fb(t){return t.flat(Number.POSITIVE_INFINITY)}function eu(t,n){t.forEach(e=>Array.isArray(e)?eu(e,n):n(e))}function rp(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function _l(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Lb(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function jb(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function tu(t,n,e){let i=js(t,n);return i>=0?t[i|1]=e:(i=~i,jb(t,i,n,e)),i}function nu(t,n){let e=js(t,n);if(e>=0)return t[e|1]}function js(t,n){return SM(t,n,1)}function SM(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Ur={},an=[],Vi=new b(""),op=new b("",-1),sp=new b(""),cl=class{get(n,e=jo){if(e===jo){let r=Nb("",-201);throw r.name="\u0275NotFound",r}return e}};function vi(t){return{\u0275providers:t}}function Bb(t){return vi([{provide:Vi,multi:!0,useValue:t}])}function Vb(...t){return{\u0275providers:ap(!0,t),\u0275fromNgModule:!0}}function ap(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return eu(n,s=>{let a=s;Gd(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Hb(r,o),e}function Hb(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];lp(r,o=>{n(o,i)})}}function Gd(t,n,e,i){if(t=Jt(t),!t)return!1;let r=null,o=jh(t),s=!o&&cr(t);if(!o&&!s){let l=t.ngModule;if(o=jh(l),o)r=l;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)Gd(c,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let c;eu(o.imports,u=>{Gd(u,n,e,i)&&(c||=[],c.push(u))}),c!==void 0&&Hb(c,n)}if(!a){let c=Br(r)||(()=>new r);n({provide:r,useFactory:c,deps:an},r),n({provide:sp,useValue:r,multi:!0},r),n({provide:Vi,useValue:()=>te(r),multi:!0},r)}let l=o.providers;if(l!=null&&!a){let c=t;lp(l,u=>{n(u,c)})}}else return!1;return r!==t&&t.providers!==void 0}function lp(t,n){for(let e of t)Qh(e)&&(e=e.\u0275providers),Array.isArray(e)?lp(e,n):n(e)}var MM=Ye({provide:String,useValue:Ye});function Ub(t){return t!==null&&typeof t=="object"&&MM in t}function TM(t){return!!(t&&t.useExisting)}function kM(t){return!!(t&&t.useFactory)}function Vo(t){return typeof t=="function"}function zb(t){return!!t.useClass}var yl=new b(""),zd={},Sb={},Lh;function Bs(){return Lh===void 0&&(Lh=new cl),Lh}var et=class{},Ho=class extends et{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,zh(n,s=>this.processProvider(s)),this.records.set(op,Ls(void 0,this)),r.has("environment")&&this.records.set(et,Ls(void 0,this));let o=this.records.get(yl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(sp,an,{self:!0}))}retrieve(n,e){let i=Bo(e)||0;try{return this.get(n,jo,i)}catch(r){if(Fs(r))return r;throw r}}destroy(){al(this),this._destroyed=!0;let n=se(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),se(n)}}onDestroy(n){return al(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){al(this);let e=Bi(this),i=mn(void 0),r;try{return n()}finally{Bi(e),mn(i)}}get(n,e=jo,i){if(al(this),n.hasOwnProperty(Ib))return n[Ib](this);let r=Bo(i),o,s=Bi(this),a=mn(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let u=PM(n)&&hl(n);u&&this.injectableDefInScope(u)?c=Ls(Uh(n),zd):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Bs():this.parent;return e=r&8&&e===jo?null:e,l.get(n,e)}catch(l){let c=CM(l);throw c===-200||c===-201?new L(c,null):l}finally{mn(a),Bi(s)}}resolveInjectorInitializers(){let n=se(null),e=Bi(this),i=mn(void 0),r;try{let o=this.get(Vi,an,{self:!0});for(let s of o)s()}finally{Bi(e),mn(i),se(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Jt(n);let e=Vo(n)?n:Jt(n&&n.provide),i=RM(n);if(!Vo(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Ls(void 0,zd,!0),r.factory=()=>Hh(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=se(null);try{if(e.value===Sb)throw np("");return e.value===zd&&(e.value=Sb,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&OM(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{se(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Jt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Uh(t){let n=hl(t),e=n!==null?n.factory:Br(t);if(e!==null)return e;if(t instanceof b)throw new L(-204,!1);if(t instanceof Function)return AM(t);throw new L(-204,!1)}function AM(t){if(t.length>0)throw new L(-204,!1);let e=_M(t);return e!==null?()=>e.factory(t):()=>new t}function RM(t){if(Ub(t))return Ls(void 0,t.useValue);{let n=cp(t);return Ls(n,zd)}}function cp(t,n,e){let i;if(Vo(t)){let r=Jt(t);return Br(r)||Uh(r)}else if(Ub(t))i=()=>Jt(t.useValue);else if(kM(t))i=()=>t.useFactory(...Hh(t.deps||[]));else if(TM(t))i=(r,o)=>te(Jt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Jt(t&&(t.useClass||t.provide));if(NM(t))i=()=>new r(...Hh(t.deps));else return Br(r)||Uh(r)}return i}function al(t){if(t.destroyed)throw new L(-205,!1)}function Ls(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function NM(t){return!!t.deps}function OM(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function PM(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function zh(t,n){for(let e of t)Array.isArray(e)?zh(e,n):e&&Qh(e)?zh(e.\u0275providers,n):n(e)}function qt(t,n){let e;t instanceof Ho?(al(t),e=t):e=new Vh(t);let i,r=Bi(e),o=mn(void 0);try{return n()}finally{Bi(r),mn(o)}}function $b(){return Ob()!==void 0||Ud()!=null}var _i=0,fe=1,pe=2,Bt=3,Zn=4,pn=5,zo=6,Vs=7,Mt=8,dr=9,yi=10,tt=11,Hs=12,dp=13,$o=14,gn=15,zr=16,Go=17,Hi=18,ur=19,up=20,ar=21,iu=22,Vr=23,An=24,Wo=25,$r=26,_t=27,Gb=1,fp=6,Gr=7,bl=8,qo=9,Ct=10;function fr(t){return Array.isArray(t)&&typeof t[Gb]=="object"}function bi(t){return Array.isArray(t)&&t[Gb]===!0}function mp(t){return(t.flags&4)!==0}function Ui(t){return t.componentOffset>-1}function Cl(t){return(t.flags&1)===1}function zi(t){return!!t.template}function Us(t){return(t[pe]&512)!==0}function Zo(t){return(t[pe]&256)===256}var hp="svg",Wb="math";function Yn(t){for(;Array.isArray(t);)t=t[_i];return t}function pp(t,n){return Yn(n[t])}function Xn(t,n){return Yn(n[t.index])}function ru(t,n){return t.data[n]}function gp(t,n){return t[n]}function vp(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function Qn(t,n){let e=n[t];return fr(e)?e:e[_i]}function qb(t){return(t[pe]&4)===4}function ou(t){return(t[pe]&128)===128}function Zb(t){return bi(t[Bt])}function Rn(t,n){return n==null?null:t[n]}function _p(t){t[Go]=0}function yp(t){t[pe]&1024||(t[pe]|=1024,ou(t)&&Yo(t))}function Yb(t,n){for(;t>0;)n=n[$o],t--;return n}function wl(t){return!!(t[pe]&9216||t[An]?.dirty)}function su(t){t[yi].changeDetectionScheduler?.notify(8),t[pe]&64&&(t[pe]|=1024),wl(t)&&Yo(t)}function Yo(t){t[yi].changeDetectionScheduler?.notify(0);let n=Hr(t);for(;n!==null&&!(n[pe]&8192||(n[pe]|=8192,!ou(n)));)n=Hr(n)}function bp(t,n){if(Zo(t))throw new L(911,!1);t[ar]===null&&(t[ar]=[]),t[ar].push(n)}function Xb(t,n){if(t[ar]===null)return;let e=t[ar].indexOf(n);e!==-1&&t[ar].splice(e,1)}function Hr(t){let n=t[Bt];return bi(n)?n[Bt]:n}function Cp(t){return t[Vs]??=[]}function wp(t){return t.cleanup??=[]}function Qb(t,n,e,i){let r=Cp(n);r.push(e),t.firstCreatePass&&wp(t).push(i,r.length-1)}var Me={lFrame:l0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var $h=!1;function Kb(){return Me.lFrame.elementDepthCount}function Jb(){Me.lFrame.elementDepthCount++}function Dp(){Me.lFrame.elementDepthCount--}function Ep(){return Me.bindingsEnabled}function xp(){return Me.skipHydrationRootTNode!==null}function Ip(t){return Me.skipHydrationRootTNode===t}function Sp(){Me.skipHydrationRootTNode=null}function me(){return Me.lFrame.lView}function ut(){return Me.lFrame.tView}function rt(t){return Me.lFrame.contextLView=t,t[Mt]}function ot(t){return Me.lFrame.contextLView=null,t}function Zt(){let t=Mp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Mp(){return Me.lFrame.currentTNode}function e0(){let t=Me.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function zs(t,n){let e=Me.lFrame;e.currentTNode=t,e.isParent=n}function Tp(){return Me.lFrame.isParent}function kp(){Me.lFrame.isParent=!1}function t0(){return Me.lFrame.contextLView}function Ap(){return $h}function dl(t){let n=$h;return $h=t,n}function Rp(){let t=Me.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function n0(t){return Me.lFrame.bindingIndex=t}function $i(){return Me.lFrame.bindingIndex++}function Np(t){let n=Me.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function i0(){return Me.lFrame.inI18n}function r0(t,n){let e=Me.lFrame;e.bindingIndex=e.bindingRootIndex=t,au(n)}function o0(){return Me.lFrame.currentDirectiveIndex}function au(t){Me.lFrame.currentDirectiveIndex=t}function s0(t){let n=Me.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function lu(){return Me.lFrame.currentQueryIndex}function Dl(t){Me.lFrame.currentQueryIndex=t}function FM(t){let n=t[fe];return n.type===2?n.declTNode:n.type===1?t[pn]:null}function Op(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=FM(o),r===null||(o=o[$o],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=Me.lFrame=a0();return i.currentTNode=n,i.lView=t,!0}function cu(t){let n=a0(),e=t[fe];Me.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function a0(){let t=Me.lFrame,n=t===null?null:t.child;return n===null?l0(t):n}function l0(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function c0(){let t=Me.lFrame;return Me.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Pp=c0;function du(){let t=c0();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function d0(t){return(Me.lFrame.contextLView=Yb(t,Me.lFrame.contextLView))[Mt]}function mr(){return Me.lFrame.selectedIndex}function Wr(t){Me.lFrame.selectedIndex=t}function $s(){let t=Me.lFrame;return ru(t.tView,t.selectedIndex)}function Nn(){Me.lFrame.currentNamespace=hp}function Gs(){LM()}function LM(){Me.lFrame.currentNamespace=null}function Fp(){return Me.lFrame.currentNamespace}var u0=!0;function uu(){return u0}function fu(t){u0=t}function Gh(t,n=null,e=null,i){let r=Lp(t,n,e,i);return r.resolveInjectorInitializers(),r}function Lp(t,n=null,e=null,i,r=new Set){let o=[e||an,Vb(t)],s;return new Ho(o,n||Bs(),s||null,r)}var K=class t{static THROW_IF_NOT_FOUND=jo;static NULL=new cl;static create(n,e){if(Array.isArray(n))return Gh({name:""},e,n,"");{let i=n.name??"";return Gh({name:i},n.parent,n.providers,i)}}static \u0275prov=x({token:t,providedIn:"any",factory:()=>te(op)});static __NG_ELEMENT_ID__=-1},Z=new b(""),vn=(()=>{class t{static __NG_ELEMENT_ID__=jM;static __NG_ENV_ID__=e=>e}return t})(),Wd=class extends vn{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Zo(this._lView)}onDestroy(n){let e=this._lView;return bp(e,n),()=>Xb(e,n)}};function jM(){return new Wd(me())}var jp=!1,f0=new b(""),Gi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Lt(!1);debugTaskTracker=d(f0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new be(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=x({token:t,providedIn:"root",factory:()=>new t})}return t})(),Wh=class extends T{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,$b()&&(this.destroyRef=d(vn,{optional:!0})??void 0,this.pendingTasks=d(Gi,{optional:!0})??void 0)}emit(n){let e=se(null);try{super.next(n)}finally{se(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof Se&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},q=Wh;function qd(...t){}function Bp(t){let n,e;function i(){t=qd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function m0(t){return queueMicrotask(()=>t()),()=>{t=qd}}var Vp="isAngularZone",ul=Vp+"_ID",BM=0,j=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new q(!1);onMicrotaskEmpty=new q(!1);onStable=new q(!1);onError=new q(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=jp}=n;if(typeof Zone>"u")throw new L(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,UM(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Vp)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new L(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new L(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,VM,qd,qd);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},VM={};function Hp(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function HM(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Bp(()=>{t.callbackScheduled=!1,qh(t),t.isCheckStableRunning=!0,Hp(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),qh(t)}function UM(t){let n=()=>{HM(t)},e=BM++;t._inner=t._inner.fork({name:"angular",properties:{[Vp]:!0,[ul]:e,[ul+e]:!0},onInvokeTask:(i,r,o,s,a,l)=>{if(zM(l))return i.invokeTask(o,s,a,l);try{return Mb(t),i.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Tb(t)}},onInvoke:(i,r,o,s,a,l,c)=>{try{return Mb(t),i.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!$M(l)&&n(),Tb(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,qh(t),Hp(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function qh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Mb(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Tb(t){t._nesting--,Hp(t)}var fl=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new q;onMicrotaskEmpty=new q;onStable=new q;onError=new q;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function zM(t){return h0(t,"__ignore_ng_zone__")}function $M(t){return h0(t,"__scheduler_tick__")}function h0(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var hn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},In=new b("",{factory:()=>{let t=d(j),n=d(et),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(hn),e.handleError(i))})}}}),p0={provide:Vi,useValue:()=>{let t=d(hn,{optional:!0})},multi:!0},GM=new b("",{factory:()=>{let t=d(Z).defaultView;if(!t)return;let n=d(In),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(vn).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Up(){return vi([Bb(()=>{d(GM)})])}function de(t,n){let[e,i,r]=_h(t,n?.equal),o=e,s=o[It];return o.set=i,o.update=r,o.asReadonly=mu.bind(o),o}function mu(){let t=this[It];if(t.readonlyFn===void 0){let n=()=>this();n[It]=t,t.readonlyFn=n}return t.readonlyFn}var Ws=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=WM}return t})();function WM(){return new Ws(me(),Zt())}var gi=class{},qs=new b("",{factory:()=>!0});var hu=new b(""),El=(()=>{class t{internalPendingTasks=d(Gi);scheduler=d(gi);errorHandler=d(In);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=x({token:t,providedIn:"root",factory:()=>new t})}return t})(),pu=(()=>{class t{static \u0275prov=x({token:t,providedIn:"root",factory:()=>new Zh})}return t})(),Zh=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Zd=class{[It];constructor(n){this[It]=n}destroy(){this[It].destroy()}};function hr(t,n){let e=n?.injector??d(K),i=n?.manualCleanup!==!0?e.get(vn):null,r,o=e.get(Ws,null,{optional:!0}),s=e.get(gi);return o!==null?(r=YM(o.view,s,t),i instanceof Wd&&i._lView===o.view&&(i=null)):r=XM(t,e.get(pu),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Zd(r)}var g0=ce(w({},yh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=dl(!1);try{bh(this)}finally{dl(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=se(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],se(t)}}}),qM=ce(w({},g0),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Lr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),ZM=ce(w({},g0),{consumerMarkedDirty(){this.view[pe]|=8192,Yo(this.view),this.notifier.notify(13)},destroy(){if(Lr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Vr]?.delete(this)}});function YM(t,n,e){let i=Object.create(ZM);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=v0(i,e),t[Vr]??=new Set,t[Vr].add(i),i.consumerMarkedDirty(i),i}function XM(t,n,e){let i=Object.create(qM);return i.fn=v0(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function v0(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Pl(t){return{toString:t}.toString()}function iT(t){return typeof t=="function"}function K0(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var xu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},ht=(()=>{let t=()=>J0;return t.ngInherit=!0,t})();function J0(t){return t.type.prototype.ngOnChanges&&(t.setInput=oT),rT}function rT(){let t=tC(this),n=t?.current;if(n){let e=t.previous;if(e===Ur)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function oT(t,n,e,i,r){let o=this.declaredInputs[i],s=tC(t)||sT(t,{previous:Ur,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new xu(c&&c.currentValue,e,l===Ur),K0(t,n,r,e)}var eC="__ngSimpleChanges__";function tC(t){return t[eC]||null}function sT(t,n){return t[eC]=n}var _0=[];var Xe=function(t,n=null,e){for(let i=0;i<_0.length;i++){let r=_0[i];r(t,n,e)}},ze=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ze||{});function aT(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=J0(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function nC(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function bu(t,n,e){iC(t,n,3,e)}function Cu(t,n,e,i){(t[pe]&3)===e&&iC(t,n,e,i)}function zp(t,n){let e=t[pe];(e&3)===n&&(e&=16383,e+=1,t[pe]=e)}function iC(t,n,e,i){let r=i!==void 0?t[Go]&65535:0,o=i??-1,s=n.length-1,a=0;for(let l=r;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],i!=null&&a>=i)break}else n[l]<0&&(t[Go]+=65536),(a<o||o==-1)&&(lT(t,e,n,l),t[Go]=(t[Go]&4294901760)+l+2),l++}function y0(t,n){Xe(ze.LifecycleHookStart,t,n);let e=se(null);try{n.call(t)}finally{se(e),Xe(ze.LifecycleHookEnd,t,n)}}function lT(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[pe]>>14<t[Go]>>16&&(t[pe]&3)===n&&(t[pe]+=16384,y0(a,o)):y0(a,o)}var Ys=-1,Qo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function cT(t){return(t.flags&8)!==0}function dT(t){return(t.flags&16)!==0}function uT(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];fT(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function rC(t){return t===3||t===4||t===6}function fT(t){return t.charCodeAt(0)===64}function Xs(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?b0(t,e,r,null,n[++i]):b0(t,e,r,null,null))}}return t}function b0(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function oC(t){return t!==Ys}function Iu(t){return t&32767}function mT(t){return t>>16}function Su(t,n){let e=mT(t),i=n;for(;e>0;)i=i[$o],e--;return i}var eg=!0;function Mu(t){let n=eg;return eg=t,n}var hT=256,sC=hT-1,aC=5,pT=0,Wi={};function gT(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Uo)&&(i=e[Uo]),i==null&&(i=e[Uo]=pT++);let r=i&sC,o=1<<r;n.data[t+(r>>aC)]|=o}function Tu(t,n){let e=lC(t,n);if(e!==-1)return e;let i=n[fe];i.firstCreatePass&&(t.injectorIndex=n.length,$p(i.data,t),$p(n,null),$p(i.blueprint,null));let r=Fg(t,n),o=t.injectorIndex;if(oC(r)){let s=Iu(r),a=Su(r,n),l=a[fe].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=r,o}function $p(t,n){t.push(0,0,0,0,0,0,0,0,n)}function lC(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Fg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=mC(r),i===null)return Ys;if(e++,r=r[$o],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Ys}function tg(t,n,e){gT(t,n,e)}function vT(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(rC(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function cC(t,n,e){if(e&8||t!==void 0)return t;Jd(n,"NodeInjector")}function dC(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[dr],o=mn(void 0);try{return r?r.get(n,i,e&8):ip(n,i,e&8)}finally{mn(o)}}return cC(i,n,e)}function uC(t,n,e,i=0,r){if(t!==null){if(n[pe]&2048&&!(i&2)){let s=CT(t,n,e,i,Wi);if(s!==Wi)return s}let o=fC(t,n,e,i,Wi);if(o!==Wi)return o}return dC(n,e,i,r)}function fC(t,n,e,i,r){let o=yT(e);if(typeof o=="function"){if(!Op(n,t,i))return i&1?cC(r,e,i):dC(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Jd(e);else return s}finally{Pp()}}else if(typeof o=="number"){let s=null,a=lC(t,n),l=Ys,c=i&1?n[gn][pn]:null;for((a===-1||i&4)&&(l=a===-1?Fg(t,n):n[a+8],l===Ys||!w0(i,!1)?a=-1:(s=n[fe],a=Iu(l),n=Su(l,n)));a!==-1;){let u=n[fe];if(C0(o,a,u.data)){let f=_T(a,n,e,s,i,c);if(f!==Wi)return f}l=n[a+8],l!==Ys&&w0(i,n[fe].data[a+8]===c)&&C0(o,a,n)?(s=u,a=Iu(l),n=Su(l,n)):a=-1}}return r}function _T(t,n,e,i,r,o){let s=n[fe],a=s.data[t+8],l=i==null?Ui(a)&&eg:i!=s&&(a.type&3)!==0,c=r&1&&o===a,u=wu(a,s,e,l,c);return u!==null?Tl(n,s,u,a,r):Wi}function wu(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,u=o>>20,f=i?a:a+u,m=r?a+u:c;for(let h=f;h<m;h++){let v=s[h];if(h<l&&e===v||h>=l&&v.type===e)return h}if(r){let h=s[l];if(h&&zi(h)&&h.type===e)return l}return null}function Tl(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Qo){let a=o;if(a.resolving)throw np("");let l=Mu(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],u,f=a.injectImpl?mn(a.injectImpl):null,m=Op(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&aT(e,s[e],n)}finally{f!==null&&mn(f),Mu(l),a.resolving=!1,Pp()}}return o}function yT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Uo)?t[Uo]:void 0;return typeof n=="number"?n>=0?n&sC:bT:n}function C0(t,n,e){let i=1<<t;return!!(e[n+(t>>aC)]&i)}function w0(t,n){return!(t&2)&&!(t&1&&n)}var Xo=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return uC(this._tNode,this._lView,n,Bo(i),e)}};function bT(){return new Xo(Zt(),me())}function Vt(t){return Pl(()=>{let n=t.prototype.constructor,e=n[ll]||ng(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[ll]||ng(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function ng(t){return Yh(t)?()=>{let n=ng(Jt(t));return n&&n()}:Br(t)}function CT(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[pe]&2048&&!Us(s);){let a=fC(o,s,e,i|2,Wi);if(a!==Wi)return a;let l=o.parent;if(!l){let c=s[up];if(c){let u=c.get(e,Wi,i&-5);if(u!==Wi)return u}l=mC(s),s=s[$o]}o=l}return r}function mC(t){let n=t[fe],e=n.type;return e===2?n.declTNode:e===1?t[pn]:null}function Fl(t){return vT(Zt(),t)}function wT(){return ta(Zt(),me())}function ta(t,n){return new $(Xn(t,n))}var $=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=wT}return t})();function hC(t){return t instanceof $?t.nativeElement:t}function DT(){return this._results[Symbol.iterator]()}var pr=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new T}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Fb(n);(this._changesDetected=!Pb(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=DT};function pC(t){return(t.flags&128)===128}var Lg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Lg||{}),gC=new Map,ET=0;function xT(){return ET++}function IT(t){gC.set(t[ur],t)}function ig(t){gC.delete(t[ur])}var D0="__ngContext__";function Qs(t,n){fr(n)?(t[D0]=n[ur],IT(n)):t[D0]=n}function vC(t){return yC(t[Hs])}function _C(t){return yC(t[Zn])}function yC(t){for(;t!==null&&!bi(t);)t=t[Zn];return t}var ST;function jg(t){ST=t}var Zr=new b("",{factory:()=>MT}),MT="ng";var Uu=new b(""),ts=new b("",{providedIn:"platform",factory:()=>"unknown"}),Ll=new b(""),ns=new b("",{factory:()=>d(Z).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var bC="r";var CC="di";var wC=!1,DC=new b("",{factory:()=>wC});var E0=new WeakMap;function TT(t,n){if(t==null||typeof t!="object")return;let e=E0.get(t);e||(e=new WeakSet,E0.set(t,e)),e.add(n)}var kT=(t,n,e,i)=>{};function AT(t,n,e,i){kT(t,n,e,i)}function zu(t){return(t.flags&32)===32}var RT=()=>null;function EC(t,n,e=!1){return RT(t,n,e)}function xC(t,n){let e=t.contentQueries;if(e!==null){let i=se(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];Dl(o),a.contentQueries(2,n[s],s)}}}finally{se(i)}}}function rg(t,n,e){Dl(0);let i=se(null);try{n(t,e)}finally{se(i)}}function IC(t,n,e){if(mp(n)){let i=se(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{se(i)}}}var Di=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Di||{});var gu;function NT(){if(gu===void 0&&(gu=null,qn.trustedTypes))try{gu=qn.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return gu}function $u(t){return NT()?.createHTML(t)||t}var vu;function OT(){if(vu===void 0&&(vu=null,qn.trustedTypes))try{vu=qn.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return vu}function x0(t){return OT()?.createScriptURL(t)||t}var gr=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Yd})`}},og=class extends gr{getTypeName(){return"HTML"}},sg=class extends gr{getTypeName(){return"Style"}},ag=class extends gr{getTypeName(){return"Script"}},lg=class extends gr{getTypeName(){return"URL"}},cg=class extends gr{getTypeName(){return"ResourceURL"}};function Ei(t){return t instanceof gr?t.changingThisBreaksApplicationSecurity:t}function vr(t,n){let e=SC(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Yd})`)}return e===n}function SC(t){return t instanceof gr&&t.getTypeName()||null}function Bg(t){return new og(t)}function Vg(t){return new sg(t)}function Hg(t){return new ag(t)}function Ug(t){return new lg(t)}function zg(t){return new cg(t)}function PT(t){let n=new ug(t);return FT()?new dg(n):n}var dg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString($u(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},ug=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=$u(n),e}};function FT(){try{return!!new window.DOMParser().parseFromString($u(""),"text/html")}catch{return!1}}var LT=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function jl(t){return t=String(t),t.match(LT)?t:"unsafe:"+t}function _r(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Bl(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var MC=_r("area,br,col,hr,img,wbr"),TC=_r("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),kC=_r("rp,rt"),jT=Bl(kC,TC),BT=Bl(TC,_r("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),VT=Bl(kC,_r("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),I0=Bl(MC,BT,VT,jT),AC=_r("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),HT=_r("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),UT=_r("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),zT=Bl(AC,HT,UT),$T=_r("script,style,template"),fg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=qT(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=WT(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=S0(n).toLowerCase();if(!I0.hasOwnProperty(e))return this.sanitizedSomething=!0,!$T.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!zT.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;AC[a]&&(l=jl(l)),this.buf.push(" ",s,'="',M0(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=S0(n).toLowerCase();I0.hasOwnProperty(e)&&!MC.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(M0(n))}};function GT(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function WT(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw RC(n);return n}function qT(t){let n=t.firstChild;if(n&&GT(t,n))throw RC(n);return n}function S0(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function RC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var ZT=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,YT=/([^\#-~ |!])/g;function M0(t){return t.replace(/&/g,"&amp;").replace(ZT,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(YT,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var _u;function $g(t,n){let e=null;try{_u=_u||PT(t);let i=n?String(n):"";e=_u.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=_u.getInertBodyElement(i)}while(i!==o);let a=new fg().sanitizeChildren(T0(e)||e);return $u(a)}finally{if(e){let i=T0(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function T0(t){return"content"in t&&XT(t)?t.content:null}function XT(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function QT(t,n){return t.createText(n)}function KT(t,n,e){t.setValue(n,e)}function NC(t,n,e){return t.createElement(n,e)}function ku(t,n,e,i,r){t.insertBefore(n,e,i,r)}function OC(t,n,e){t.appendChild(n,e)}function k0(t,n,e,i,r){i!==null?ku(t,n,e,i,r):OC(t,n,e)}function PC(t,n,e,i){t.removeChild(null,n,e,i)}function JT(t,n,e){t.setAttribute(n,"style",e)}function ek(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function FC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&uT(t,n,i),r!==null&&ek(t,n,r),o!==null&&JT(t,n,o)}var Ht=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Ht||{});function Yr(t){let n=jC();return n?n.sanitize(Ht.URL,t)||"":vr(t,"URL")?Ei(t):jl(vl(t))}function LC(t){let n=jC();if(n)return x0(n.sanitize(Ht.RESOURCE_URL,t)||"");if(vr(t,"ResourceURL"))return x0(Ei(t));throw new L(904,!1)}var tk={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function nk(t,n){return tk[t.toLowerCase()]?.[n.toLowerCase()]===!0?LC:Yr}function Gg(t,n,e){return nk(n,e)(t)}function jC(){let t=me();return t&&t[yi].sanitizer}function BC(t){return t instanceof Function?t():t}function ik(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var VC="ng-template";function rk(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&ik(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Wg(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Wg(t){return t.type===4&&t.value!==VC}function ok(t,n,e){let i=t.type===4&&!e?VC:t.value;return n===i}function sk(t,n,e){let i=4,r=t.attrs,o=r!==null?ck(r):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!Ci(i)&&!Ci(l))return!1;if(s&&Ci(l))continue;s=!1,i=l|i&1;continue}if(!s)if(i&4){if(i=2|i&1,l!==""&&!ok(t,l,e)||l===""&&n.length===1){if(Ci(i))return!1;s=!0}}else if(i&8){if(r===null||!rk(t,r,l,e)){if(Ci(i))return!1;s=!0}}else{let c=n[++a],u=ak(l,r,Wg(t),e);if(u===-1){if(Ci(i))return!1;s=!0;continue}if(c!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&c!==f){if(Ci(i))return!1;s=!0}}}}return Ci(i)||s}function Ci(t){return(t&1)===0}function ak(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return dk(n,t)}function HC(t,n,e=!1){for(let i=0;i<n.length;i++)if(sk(t,n[i],e))return!0;return!1}function lk(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function ck(t){for(let n=0;n<t.length;n++){let e=t[n];if(rC(e))return n}return t.length}function dk(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function uk(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function A0(t,n){return t?":not("+n.trim()+")":n}function fk(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!Ci(s)&&(n+=A0(o,r),r=""),i=s,o=o||!Ci(i);e++}return r!==""&&(n+=A0(o,r)),n}function mk(t){return t.map(fk).join(",")}function hk(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Ci(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Sn={};function qg(t,n,e,i,r,o,s,a,l,c,u){let f=_t+i,m=f+r,h=pk(f,m),v=typeof c=="function"?c():c;return h[fe]={type:t,blueprint:h,template:e,queries:null,viewQuery:a,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:v,incompleteFirstPass:!1,ssrId:u}}function pk(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Sn);return e}function gk(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=qg(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Zg(t,n,e,i,r,o,s,a,l,c,u){let f=n.blueprint.slice();return f[_i]=r,f[pe]=i|4|128|8|64|1024,(c!==null||t&&t[pe]&2048)&&(f[pe]|=2048),_p(f),f[Bt]=f[$o]=t,f[Mt]=e,f[yi]=s||t&&t[yi],f[tt]=a||t&&t[tt],f[dr]=l||t&&t[dr]||null,f[pn]=o,f[ur]=xT(),f[zo]=u,f[up]=c,f[gn]=n.type==2?t[gn]:f,f}function vk(t,n,e){let i=Xn(n,t),r=gk(e),o=t[yi].rendererFactory,s=Yg(t,Zg(t,r,null,UC(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function UC(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function zC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Yg(t,n){return t[Hs]?t[dp][Zn]=n:t[Hs]=n,t[dp]=n,n}function _(t=1){$C(ut(),me(),mr()+t,!1)}function $C(t,n,e,i){if(!i)if((n[pe]&3)===3){let o=t.preOrderCheckHooks;o!==null&&bu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Cu(n,o,0,e)}Wr(e)}var Gu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Gu||{});function mg(t,n,e,i){let r=se(null);try{let[o,s,a]=t.inputs[e],l=null;(s&Gu.SignalBased)!==0&&(l=n[o][It]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):K0(n,l,o,i)}finally{se(r)}}var qi=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(qi||{}),_k;function Xg(t,n){return _k(t,n)}var iG=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var hg=new WeakMap,Il=new WeakSet;function yk(t,n){let e=hg.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),Il.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function bk(t,n){let e=hg.get(t);e?e.includes(n)||e.push(n):hg.set(t,[n])}var Ko=new Set,Wu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Wu||{}),xi=new b(""),R0=new Set;function yr(t){R0.has(t)||(R0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var qu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=x({token:t,providedIn:"root",factory:()=>new t})}return t})(),Qg=[0,1,2,3],Kg=(()=>{class t{ngZone=d(j);scheduler=d(gi);errorHandler=d(hn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(xi,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Xe(ze.AfterRenderHooksStart),this.executing=!0;for(let i of Qg)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Xe(ze.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Wo]??=[]).push(e),Yo(i),i[pe]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Wu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=x({token:t,providedIn:"root",factory:()=>new t})}return t})(),kl=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Wo];n&&(this.view[Wo]=n.filter(e=>e!==this))}};function Ot(t,n){let e=n?.injector??d(K);return yr("NgAfterNextRender"),wk(t,e,n,!0)}function Ck(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function wk(t,n,e,i){let r=n.get(qu);r.impl??=n.get(Kg);let o=n.get(xi,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(vn):null,a=n.get(Ws,null,{optional:!0}),l=new kl(r.impl,Ck(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(l),l}var GC=new b("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(et)})});function WC(t,n,e){let i=t.get(GC);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function Dk(t,n){let e=t.get(GC);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function Ek(t,n){for(let[e,i]of n)WC(t,i.animateFns)}function N0(t,n,e,i){let r=t?.[$r]?.enter;n!==null&&r&&r.has(e.index)&&Ek(i,r)}function Zs(t,n,e,i,r,o,s,a){if(r!=null){let l,c=!1;bi(r)?l=r:fr(r)&&(c=!0,r=r[_i]);let u=Yn(r);t===0&&i!==null?(N0(a,i,o,e),s==null?OC(n,i,u):ku(n,i,u,s||null,!0)):t===1&&i!==null?(N0(a,i,o,e),ku(n,i,u,s||null,!0),yk(o,u)):t===2?(a?.[$r]?.leave?.has(o.index)&&bk(o,u),Il.delete(u),O0(a,o,e,f=>{if(Il.has(u)){Il.delete(u);return}PC(n,u,c,f)})):t===3&&(Il.delete(u),O0(a,o,e,()=>{n.destroyNode(u)})),l!=null&&Pk(n,t,e,l,o,i,s)}}function xk(t,n){qC(t,n),n[_i]=null,n[pn]=null}function Ik(t,n,e,i,r,o){i[_i]=r,i[pn]=n,Yu(t,i,e,1,r,o)}function qC(t,n){n[yi].changeDetectionScheduler?.notify(9),Yu(t,n,n[tt],2,null,null)}function Sk(t){let n=t[Hs];if(!n)return Gp(t[fe],t);for(;n;){let e=null;if(fr(n))e=n[Hs];else{let i=n[Ct];i&&(e=i)}if(!e){for(;n&&!n[Zn]&&n!==t;)fr(n)&&Gp(n[fe],n),n=n[Bt];n===null&&(n=t),fr(n)&&Gp(n[fe],n),e=n&&n[Zn]}n=e}}function Jg(t,n){let e=t[qo],i=e.indexOf(n);e.splice(i,1)}function Zu(t,n){if(Zo(n))return;let e=n[tt];e.destroyNode&&Yu(t,n,e,3,null,null),Sk(n)}function Gp(t,n){if(Zo(n))return;let e=se(null);try{n[pe]&=-129,n[pe]|=256,n[An]&&Lr(n[An]),kk(t,n),Tk(t,n),n[fe].type===1&&n[tt].destroy();let i=n[zr];if(i!==null&&bi(n[Bt])){i!==n[Bt]&&Jg(i,n);let r=n[Hi];r!==null&&r.detachView(t)}ig(n)}finally{se(e)}}function O0(t,n,e,i){let r=t?.[$r];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Ko.add(t[ur]),WC(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:u}=c();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),Mk(t,i)}else t&&Ko.delete(t[ur]),i(!1)},r)}function Mk(t,n){let e=t[$r]?.running;if(e){e.then(()=>{t[$r].running=void 0,Ko.delete(t[ur]),n(!0)});return}n(!1)}function Tk(t,n){let e=t.cleanup,i=n[Vs];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[Vs]=null);let r=n[ar];if(r!==null){n[ar]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[Vr];if(o!==null){n[Vr]=null;for(let s of o)s.destroy()}}function kk(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Qo)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],l=o[s+1];Xe(ze.LifecycleHookStart,a,l);try{l.call(a)}finally{Xe(ze.LifecycleHookEnd,a,l)}}else{Xe(ze.LifecycleHookStart,r,o);try{o.call(r)}finally{Xe(ze.LifecycleHookEnd,r,o)}}}}}function ZC(t,n,e){return Ak(t,n.parent,e)}function Ak(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[_i];if(Ui(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Di.None||r===Di.Emulated)return null}return Xn(i,e)}function YC(t,n,e){return Nk(t,n,e)}function Rk(t,n,e){return t.type&40?Xn(t,e):null}var Nk=Rk,P0;function ev(t,n,e,i){let r=ZC(t,i,n),o=n[tt],s=i.parent||n[pn],a=YC(s,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)k0(o,r,e[l],a,!1);else k0(o,r,e,a,!1);P0!==void 0&&P0(o,i,n,e,r)}function Sl(t,n){if(n!==null){let e=n.type;if(e&3)return Xn(n,t);if(e&4)return pg(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Sl(t,i);{let r=t[n.index];return bi(r)?pg(-1,r):Yn(r)}}else{if(e&128)return Sl(t,n.next);if(e&32)return Xg(n,t)()||Yn(t[n.index]);{let i=XC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Hr(t[gn]);return Sl(r,i)}else return Sl(t,n.next)}}}return null}function XC(t,n){if(n!==null){let i=t[gn][pn],r=n.projection;return i.projection[r]}return null}function pg(t,n){let e=Ct+t+1;if(e<n.length){let i=n[e],r=i[fe].firstChild;if(r!==null)return Sl(i,r)}return n[Gr]}function tv(t,n,e,i,r,o,s){for(;e!=null;){let a=i[dr];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(s&&n===0&&(l&&Qs(Yn(l),i),e.flags|=2),!zu(e))if(c&8)tv(t,n,e.child,i,r,o,!1),Zs(n,t,a,r,l,e,o,i);else if(c&32){let u=Xg(e,i),f;for(;f=u();)Zs(n,t,a,r,f,e,o,i);Zs(n,t,a,r,l,e,o,i)}else c&16?QC(t,n,i,e,r,o):Zs(n,t,a,r,l,e,o,i);e=s?e.projectionNext:e.next}}function Yu(t,n,e,i,r,o){tv(e,i,t.firstChild,n,r,o,!1)}function Ok(t,n,e){let i=n[tt],r=ZC(t,e,n),o=e.parent||n[pn],s=YC(o,e,n);QC(i,0,n,e,r,s)}function QC(t,n,e,i,r,o){let s=e[gn],l=s[pn].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];Zs(n,t,e[dr],r,u,i,o,e)}else{let c=l,u=s[Bt];pC(i)&&(c.flags|=128),tv(t,n,c,u,r,o,!0)}}function Pk(t,n,e,i,r,o,s){let a=i[Gr],l=Yn(i);a!==l&&Zs(n,t,e,o,a,r,s);for(let c=Ct;c<i.length;c++){let u=i[c];Yu(u[fe],u,t,n,o,a)}}function Fk(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:qi.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=qi.Important),t.setStyle(e,i,r,o))}}function KC(t,n,e,i,r){let o=mr(),s=i&2;try{Wr(-1),s&&n.length>_t&&$C(t,n,_t,!1);let a=s?ze.TemplateUpdateStart:ze.TemplateCreateStart;Xe(a,r,e),e(i,r)}finally{Wr(o);let a=s?ze.TemplateUpdateEnd:ze.TemplateCreateEnd;Xe(a,r,e)}}function nv(t,n,e){Hk(t,n,e),(e.flags&64)===64&&Uk(t,n,e)}function Xu(t,n,e=Xn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function Lk(t,n,e,i){let o=i.get(DC,wC)||e===Di.ShadowDom||e===Di.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return jk(s),s}function jk(t){Bk(t)}var Bk=()=>null;function Vk(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function JC(t,n,e,i,r,o){let s=n[fe];if(Qu(t,s,n,e,i)){Ui(t)&&tw(n,t.index);return}t.type&3&&(e=Vk(e)),ew(t,n,e,i,r,o)}function ew(t,n,e,i,r,o){if(t.type&3){let s=Xn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function tw(t,n){let e=Qn(n,t);e[pe]&16||(e[pe]|=64)}function Hk(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Ui(e)&&vk(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Tu(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],l=Tl(n,t,s,e);if(Qs(l,n),o!==null&&Gk(n,s-i,l,a,e,o),zi(a)){let c=Qn(e.index,n);c[Mt]=Tl(n,t,s,e)}}}function Uk(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=o0();try{Wr(o);for(let a=i;a<r;a++){let l=t.data[a],c=n[a];au(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&zk(l,c)}}finally{Wr(-1),au(s)}}function zk(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function nw(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];HC(n,o.selectors,!1)&&(i??=[],zi(o)?i.unshift(o):i.push(o))}return i}function $k(t,n,e,i,r,o){let s=Xn(t,n);iw(n[tt],s,o,t.value,e,i,r)}function iw(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?vl(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function Gk(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];mg(i,e,l,c)}}function rw(t,n,e,i,r){let o=_t+e,s=n[fe],a=r(s,n,t,i,e);n[o]=a,zs(t,!0);let l=t.type===2;return l?(FC(n[tt],a,t),(Kb()===0||Cl(t))&&Qs(a,n),Jb()):Qs(a,n),uu()&&(!l||!zu(t))&&ev(s,n,a,t),t}function ow(t){let n=t;return Tp()?kp():(n=n.parent,zs(n,!1)),n}function Wk(t,n){let e=t[dr];if(!e)return;let i;try{i=e.get(In,null)}catch{i=null}i?.(n)}function Qu(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],u=s[l+1],f=n.data[c];mg(f,e[c],u,r),a=!0}if(o)for(let l of o){let c=e[l],u=n.data[l];mg(u,c,i,r),a=!0}return a}function qk(t,n){let e=Qn(n,t),i=e[fe];Zk(i,e);let r=e[_i];r!==null&&e[zo]===null&&(e[zo]=EC(r,e[dr])),Xe(ze.ComponentStart);try{iv(i,e,e[Mt])}finally{Xe(ze.ComponentEnd,e[Mt])}}function Zk(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function iv(t,n,e){cu(n);try{let i=t.viewQuery;i!==null&&rg(1,i,e);let r=t.template;r!==null&&KC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Hi]?.finishViewCreation(t),t.staticContentQueries&&xC(t,n),t.staticViewQueries&&rg(2,t.viewQuery,e);let o=t.components;o!==null&&Yk(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[pe]&=-5,du()}}function Yk(t,n){for(let e=0;e<n.length;e++)qk(t,n[e])}function Vl(t,n,e,i){let r=se(null);try{let o=n.tView,a=t[pe]&4096?4096:16,l=Zg(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[zr]=c;let u=t[Hi];return u!==null&&(l[Hi]=u.createEmbeddedView(o)),iv(o,l,e),l}finally{se(r)}}function Ks(t,n){return!n||n.firstChild===null||pC(t)}function Al(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Yn(o)),bi(o)&&sw(o,i);let s=e.type;if(s&8)Al(t,n,e.child,i);else if(s&32){let a=Xg(e,n),l;for(;l=a();)i.push(l)}else if(s&16){let a=XC(n,e);if(Array.isArray(a))i.push(...a);else{let l=Hr(n[gn]);Al(l[fe],l,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function sw(t,n){for(let e=Ct;e<t.length;e++){let i=t[e],r=i[fe].firstChild;r!==null&&Al(i[fe],i,r,n)}t[Gr]!==t[_i]&&n.push(t[Gr])}function aw(t){if(t[Wo]!==null){for(let n of t[Wo])n.impl.addSequence(n);t[Wo].length=0}}var lw=[];function Xk(t){return t[An]??Qk(t)}function Qk(t){let n=lw.pop()??Object.create(Jk);return n.lView=t,n}function Kk(t){t.lView[An]!==t&&(t.lView=null,lw.push(t))}var Jk=ce(w({},Or),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Yo(t.lView)},consumerOnSignalRead(){this.lView[An]=this}});function eA(t){let n=t[An]??Object.create(tA);return n.lView=t,n}var tA=ce(w({},Or),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Hr(t.lView);for(;n&&!cw(n[fe]);)n=Hr(n);n&&yp(n)},consumerOnSignalRead(){this.lView[An]=this}});function cw(t){return t.type!==2}function dw(t){if(t[Vr]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Vr])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[pe]&8192)}}var nA=100;function uw(t,n=0){let i=t[yi].rendererFactory,r=!1;r||i.begin?.();try{iA(t,n)}finally{r||i.end?.()}}function iA(t,n){let e=Ap();try{dl(!0),gg(t,n);let i=0;for(;wl(t);){if(i===nA)throw new L(103,!1);i++,gg(t,1)}}finally{dl(e)}}function rA(t,n,e,i){if(Zo(n))return;let r=n[pe],o=!1,s=!1;cu(n);let a=!0,l=null,c=null;o||(cw(t)?(c=Xk(n),l=ir(c)):cd()===null?(a=!1,c=eA(n),l=ir(c)):n[An]&&(Lr(n[An]),n[An]=null));try{_p(n),n0(t.bindingStartIndex),e!==null&&KC(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let h=t.preOrderCheckHooks;h!==null&&bu(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Cu(n,h,0,null),zp(n,0)}if(s||oA(n),dw(n),fw(n,0),t.contentQueries!==null&&xC(t,n),!o)if(u){let h=t.contentCheckHooks;h!==null&&bu(n,h)}else{let h=t.contentHooks;h!==null&&Cu(n,h,1),zp(n,1)}aA(t,n);let f=t.components;f!==null&&hw(n,f,0);let m=t.viewQuery;if(m!==null&&rg(2,m,i),!o)if(u){let h=t.viewCheckHooks;h!==null&&bu(n,h)}else{let h=t.viewHooks;h!==null&&Cu(n,h,2),zp(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[iu]){for(let h of n[iu])h();n[iu]=null}o||(aw(n),n[pe]&=-73)}catch(u){throw o||Yo(n),u}finally{c!==null&&(Fr(c,l),a&&Kk(c)),du()}}function fw(t,n){for(let e=vC(t);e!==null;e=_C(e))for(let i=Ct;i<e.length;i++){let r=e[i];mw(r,n)}}function oA(t){for(let n=vC(t);n!==null;n=_C(n)){if(!(n[pe]&2))continue;let e=n[qo];for(let i=0;i<e.length;i++){let r=e[i];yp(r)}}}function sA(t,n,e){Xe(ze.ComponentStart);let i=Qn(n,t);try{mw(i,e)}finally{Xe(ze.ComponentEnd,i[Mt])}}function mw(t,n){ou(t)&&gg(t,n)}function gg(t,n){let i=t[fe],r=t[pe],o=t[An],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&Ts(o)),s||=!1,o&&(o.dirty=!1),t[pe]&=-9217,s)rA(i,t,i.template,t[Mt]);else if(r&8192){let a=se(null);try{dw(t),fw(t,1);let l=i.components;l!==null&&hw(t,l,1),aw(t)}finally{se(a)}}}function hw(t,n,e){for(let i=0;i<n.length;i++)sA(t,n[i],e)}function aA(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Wr(~r);else{let o=r,s=e[++i],a=e[++i];r0(s,o);let l=n[o];Xe(ze.HostBindingsUpdateStart,l);try{a(2,l)}finally{Xe(ze.HostBindingsUpdateEnd,l)}}}}finally{Wr(-1)}}function rv(t,n){let e=Ap()?64:1088;for(t[yi].changeDetectionScheduler?.notify(n);t;){t[pe]|=e;let i=Hr(t);if(Us(t)&&!i)return t;t=i}return null}function pw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function gw(t,n){let e=Ct+n;if(e<t.length)return t[e]}function Hl(t,n,e,i=!0){let r=n[fe];if(lA(r,n,t,e),i){let s=pg(e,t),a=n[tt],l=a.parentNode(t[Gr]);l!==null&&Ik(r,t[pn],a,n,l,s)}let o=n[zo];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function vw(t,n){let e=Rl(t,n);return e!==void 0&&Zu(e[fe],e),e}function Rl(t,n){if(t.length<=Ct)return;let e=Ct+n,i=t[e];if(i){let r=i[zr];r!==null&&r!==t&&Jg(r,i),n>0&&(t[e-1][Zn]=i[Zn]);let o=_l(t,Ct+n);xk(i[fe],i);let s=o[Hi];s!==null&&s.detachView(o[fe]),i[Bt]=null,i[Zn]=null,i[pe]&=-129}return i}function lA(t,n,e,i){let r=Ct+i,o=e.length;i>0&&(e[r-1][Zn]=n),i<o-Ct?(n[Zn]=e[r],rp(e,Ct+i,n)):(e.push(n),n[Zn]=null),n[Bt]=e;let s=n[zr];s!==null&&e!==s&&_w(s,n);let a=n[Hi];a!==null&&a.insertView(t),su(n),n[pe]|=128}function _w(t,n){let e=t[qo],i=n[Bt];if(fr(i))t[pe]|=2;else{let r=i[Bt][gn];n[gn]!==r&&(t[pe]|=2)}e===null?t[qo]=[n]:e.push(n)}var qr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[fe];return Al(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Mt]}set context(n){this._lView[Mt]=n}get destroyed(){return Zo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Bt];if(bi(n)){let e=n[bl],i=e?e.indexOf(this):-1;i>-1&&(Rl(n,i),_l(e,i))}this._attachedToViewContainer=!1}Zu(this._lView[fe],this._lView)}onDestroy(n){bp(this._lView,n)}markForCheck(){rv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[pe]&=-129}reattach(){su(this._lView),this._lView[pe]|=128}detectChanges(){this._lView[pe]|=1024,uw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new L(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Us(this._lView),e=this._lView[zr];e!==null&&!n&&Jg(e,this._lView),qC(this._lView[fe],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new L(902,!1);this._appRef=n;let e=Us(this._lView),i=this._lView[zr];i!==null&&!e&&_w(i,this._lView),su(this._lView)}};var cn=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=cA;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Vl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new qr(o)}}return t})();function cA(){return Ku(Zt(),me())}function Ku(t,n){return t.type&4?new cn(n,t,ta(t,n)):null}function na(t,n,e,i,r){let o=t.data[n];if(o===null)o=dA(t,n,e,i,r),i0()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=e0();o.injectorIndex=s===null?-1:s.injectorIndex}return zs(o,!0),o}function dA(t,n,e,i,r){let o=Mp(),s=Tp(),a=s?o:o&&o.parent,l=t.data[n]=fA(t,a,e,n,i,r);return uA(t,l,o,s),l}function uA(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function fA(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return xp()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:Fp(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function mA(t){let n=t[fp]??[],i=t[Bt][tt],r=[];for(let o of n)o.data[CC]!==void 0?r.push(o):hA(o,i);t[fp]=r}function hA(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[bC];for(;e<r;){let o=i.nextSibling;PC(n,i,!1),i=o,e++}}}var pA=()=>null,gA=()=>null;function Au(t,n){return pA(t,n)}function yw(t,n,e){return gA(t,n,e)}var bw=class{},Ju=class{},vg=class{resolveComponentFactory(n){throw new L(917,!1)}},Ul=class{static NULL=new vg},Nt=class{},$e=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>vA()}return t})();function vA(){let t=me(),n=Zt(),e=Qn(n.index,t);return(fr(e)?e:t)[tt]}var Cw=(()=>{class t{static \u0275prov=x({token:t,providedIn:"root",factory:()=>null})}return t})();var Du={},_g=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Du,i);return r!==Du||e===Du?r:this.parentInjector.get(n,e,i)}};function Ru(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=Xd(r,a);else if(o==2){let l=a,c=n[++s];i=Xd(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function ae(t,n=0){let e=me();if(e===null)return te(t,n);let i=Zt();return uC(i,e,Jt(t),n)}function ef(){let t="invalid";throw new Error(t)}function ww(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,l=null,c=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,l,c]=u.resolveHostDirectives(s);break}bA(t,n,e,a,o,l,c)}o!==null&&i!==null&&_A(e,i,o)}function _A(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new L(-301,!1);i.push(n[r],o)}}function yA(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function bA(t,n,e,i,r,o,s){let a=i.length,l=null;for(let m=0;m<a;m++){let h=i[m];l===null&&zi(h)&&(l=h,yA(t,e,m)),tg(Tu(e,n),t,h.type)}IA(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let m=0;m<a;m++){let h=i[m];h.providersResolver&&h.providersResolver(h)}let c=!1,u=!1,f=zC(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let m=0;m<a;m++){let h=i[m];if(e.mergedAttrs=Xs(e.mergedAttrs,h.hostAttrs),wA(t,e,n,f,h),xA(f,h,r),s!==null&&s.has(h)){let[S,R]=s.get(h);e.directiveToIndex.set(h.type,[f,S+e.directiveStart,R+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let v=h.type.prototype;!c&&(v.ngOnChanges||v.ngOnInit||v.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!u&&(v.ngOnChanges||v.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}CA(t,e,o)}function CA(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))F0(0,n,r,i),F0(1,n,r,i),j0(n,i,!1);else{let o=e.get(r);L0(0,n,o,i),L0(1,n,o,i),j0(n,i,!0)}}}function F0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),Dw(n,o)}}function L0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),Dw(n,s)}}function Dw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function j0(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Wg(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let l=i[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===n){s??=[],s.push(l,i[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let u=0;u<c.length;u+=2)if(c[u]===n){s??=[],s.push(c[u+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function wA(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Br(r.type,!0)),s=new Qo(o,zi(r),ae,null);t.blueprint[i]=s,e[i]=s,DA(t,n,i,zC(t,e,r.hostVars,Sn),r)}function DA(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;EA(s)!=a&&s.push(a),s.push(e,i,o)}}function EA(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function xA(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;zi(n)&&(e[""]=t)}}function IA(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Ew(t,n,e,i,r,o,s,a){let l=n[fe],c=l.consts,u=Rn(c,s),f=na(l,t,e,i,u);return o&&ww(l,n,f,Rn(c,a),r),f.mergedAttrs=Xs(f.mergedAttrs,f.attrs),f.attrs!==null&&Ru(f,f.attrs,!1),f.mergedAttrs!==null&&Ru(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function xw(t,n){nC(t,n),mp(n)&&t.queries.elementEnd(n)}function SA(t,n,e,i,r,o){let s=n.consts,a=Rn(s,r),l=na(n,t,e,i,a);if(l.mergedAttrs=Xs(l.mergedAttrs,l.attrs),o!=null){let c=Rn(s,o);l.localNames=[];for(let u=0;u<c.length;u+=2)l.localNames.push(c[u],-1)}return l.attrs!==null&&Ru(l,l.attrs,!1),l.mergedAttrs!==null&&Ru(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function Iw(t,n,e){return t[n]=e}function MA(t,n){return t[n]}function Kn(t,n,e){if(e===Sn)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Eu(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&TT(r,o);let s=Ui(t)?Qn(t.index,n):n;rv(s,5);let a=n[Mt],l=B0(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)l=B0(n,a,c,r)&&l,c=c.__ngNextListenerFn__;return l}}function B0(t,n,e,i){let r=se(null);try{return Xe(ze.OutputStart,n,e),e(i)!==!1}catch(o){return Wk(t,o),!1}finally{Xe(ze.OutputEnd,n,e),se(r)}}function Sw(t,n,e,i,r,o,s,a){let l=Cl(t),c=!1,u=null;if(!i&&l&&(u=kA(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,c=!0}else{let f=Xn(t,e),m=i?i(f):f;AT(e,m,o,a),i||(a.__ngNativeEl__=f);let h=r.listen(m,o,a);if(!TA(o)){let v=i?S=>i(Yn(S[t.index])):t.index;Mw(v,n,e,o,a,h,!1)}}return c}function TA(t){return t.startsWith("animation")||t.startsWith("transition")}function kA(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[Vs],l=r[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function Mw(t,n,e,i,r,o,s){let a=n.firstCreatePass?wp(n):null,l=Cp(e),c=l.length;l.push(r,o),a&&a.push(i,t,c,(c+1)*(s?-1:1))}function V0(t,n,e,i,r,o){let s=n[e],a=n[fe],c=a.data[e].outputs[i],f=s[c].subscribe(o);Mw(t.index,a,n,r,o,f,!0)}var yg=Symbol("BINDING");function Tw(t){return t.debugInfo?.className||t.type.name||null}var Nu=class extends Ul{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=cr(n);return new Jo(e,this.ngModule)}};function AA(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Gu.SignalBased)!==0};return r&&(o.transform=r),o})}function RA(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function NA(t,n,e){let i=n instanceof et?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new _g(e,i):e}function OA(t){let n=t.get(Nt,null);if(n===null)throw new L(407,!1);let e=t.get(Cw,null),i=t.get(gi,null),r=t.get(xi,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function PA(t,n){let e=kw(t);return NC(n,e,e==="svg"?hp:e==="math"?Wb:null)}function FA(t){if(t?.toLowerCase()==="script")throw new L(905,!1)}function kw(t){return(t.selectors[0][0]||"div").toLowerCase()}var Jo=class extends Ju{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=AA(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=RA(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=mk(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){Xe(ze.DynamicComponentStart);let a=se(null);try{let l=this.componentDef,c=NA(l,r||this.ngModule,n),u=OA(c),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(Tw(l),()=>this.createComponentRef(u,c,e,i,o,s)):this.createComponentRef(u,c,e,i,o,s)}finally{se(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,l=LA(r,a,s,o),c=n.rendererFactory.createRenderer(null,a),u=r?Lk(c,r,a.encapsulation,e):PA(a,c);FA(u?.tagName);let f=s?.some(H0)||o?.some(v=>typeof v!="function"&&v.bindings.some(H0)),m=Zg(null,l,null,512|UC(a),null,null,n,c,e,null,EC(u,e,!0));m[_t]=u,cu(m);let h=null;try{let v=Ew(_t,m,2,"#host",()=>l.directiveRegistry,!0,0);FC(c,u,v),Qs(u,m),nv(l,m,v),IC(l,v,m),xw(l,v),i!==void 0&&BA(v,this.ngContentSelectors,i),h=Qn(v.index,m),m[Mt]=h[Mt],iv(l,m,null)}catch(v){throw h!==null&&ig(h),ig(m),v}finally{Xe(ze.DynamicComponentEnd),du()}return new Ou(this.componentType,m,!!f)}};function LA(t,n,e,i){let r=t?["ng-version","21.2.18"]:hk(n.selectors[0]),o=null,s=null,a=0;if(e)for(let u of e)a+=u[yg].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let m of f.bindings){a+=m[yg].requiredVars;let h=u+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let l=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,m=tp(f);l.push(m)}return qg(0,null,jA(o,s),1,a,l,null,null,null,[r],null)}function jA(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function H0(t){let n=t[yg].kind;return n==="input"||n==="twoWay"}var Ou=class extends bw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=ru(e[fe],_t),this.location=ta(this._tNode,e),this.instance=Qn(this._tNode.index,e)[Mt],this.hostView=this.changeDetectorRef=new qr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Qu(i,r[fe],r,n,e);this.previousInputValues.set(n,e);let s=Qn(i.index,r);rv(s,1)}get injector(){return new Xo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function BA(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var en=(()=>{class t{static __NG_ELEMENT_ID__=VA}return t})();function VA(){let t=Zt();return Aw(t,me())}var bg=class t extends en{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return ta(this._hostTNode,this._hostLView)}get injector(){return new Xo(this._hostTNode,this._hostLView)}get parentInjector(){let n=Fg(this._hostTNode,this._hostLView);if(oC(n)){let e=Su(n,this._hostLView),i=Iu(n),r=e[fe].data[i+8];return new Xo(r,e)}else return new Xo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=U0(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Ct}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Au(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Ks(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let l=n&&!iT(n),c;if(l)c=e;else{let R=e||{};c=R.index,i=R.injector,r=R.projectableNodes,o=R.environmentInjector||R.ngModuleRef,s=R.directives,a=R.bindings}let u=l?n:new Jo(cr(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let P=(l?f:this.parentInjector).get(et,null);P&&(o=P)}let m=cr(u.componentType??{}),h=Au(this._lContainer,m?.id??null),v=h?.firstChild??null,S=u.create(f,r,v,o,s,a);return this.insertImpl(S.hostView,c,Ks(this._hostTNode,h)),S}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Zb(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=r[Bt],c=new t(l,l[pn],l[Bt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Hl(s,r,o,i),n.attachToViewContainerRef(),rp(Wp(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=U0(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Rl(this._lContainer,e);i&&(_l(Wp(this._lContainer),e),Zu(i[fe],i))}detach(n){let e=this._adjustIndex(n,-1),i=Rl(this._lContainer,e);return i&&_l(Wp(this._lContainer),e)!=null?new qr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function U0(t){return t[bl]}function Wp(t){return t[bl]||(t[bl]=[])}function Aw(t,n){let e,i=n[t.index];return bi(i)?e=i:(e=pw(i,n,null,t),n[t.index]=e,Yg(n,e)),UA(e,n,t,i),new bg(e,t,n)}function HA(t,n){let e=t[tt],i=e.createComment(""),r=Xn(n,t),o=e.parentNode(r);return ku(e,o,i,e.nextSibling(r),!1),i}var UA=GA,zA=()=>!1;function $A(t,n,e){return zA(t,n,e)}function GA(t,n,e,i){if(t[Gr])return;let r;e.type&8?r=Yn(i):r=HA(n,e),t[Gr]=r}var Cg=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},wg=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)sv(n,e).matches!==null&&this.queries[e].setDirty()}},Pu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=XA(n):this.predicate=n}},Dg=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Eg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,WA(e,o)),this.matchTNodeWithReadOption(n,e,wu(e,n,o,!1,!1))}else i===cn?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,wu(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===$||r===en||r===cn&&e.type&4)this.addMatch(e.index,-2);else{let o=wu(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function WA(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function qA(t,n){return t.type&11?ta(t,n):t.type&4?Ku(t,n):null}function ZA(t,n,e,i){return e===-1?qA(n,t):e===-2?YA(t,n,i):Tl(t,t[fe],e,n)}function YA(t,n,e){if(e===$)return ta(n,t);if(e===cn)return Ku(n,t);if(e===en)return Aw(n,t)}function Rw(t,n,e,i){let r=n[Hi].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let u=o[c];a.push(ZA(n,u,s[l+1],e.metadata.read))}}r.matches=a}return r.matches}function xg(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=Rw(t,n,r,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)i.push(s[a/2]);else{let c=o[a+1],u=n[-l];for(let f=Ct;f<u.length;f++){let m=u[f];m[zr]===m[Bt]&&xg(m[fe],m,c,i)}if(u[qo]!==null){let f=u[qo];for(let m=0;m<f.length;m++){let h=f[m];xg(h[fe],h,c,i)}}}}}return i}function ov(t,n){return t[Hi].queries[n].queryList}function Nw(t,n,e){let i=new pr((e&4)===4);return Qb(t,n,i,i.destroy),(n[Hi]??=new wg).queries.push(new Cg(i))-1}function Ow(t,n,e){let i=ut();return i.firstCreatePass&&(Fw(i,new Pu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),Nw(i,me(),n)}function Pw(t,n,e,i){let r=ut();if(r.firstCreatePass){let o=Zt();Fw(r,new Pu(n,e,i),o.index),QA(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Nw(r,me(),e)}function XA(t){return t.split(",").map(n=>n.trim())}function Fw(t,n,e){t.queries===null&&(t.queries=new Dg),t.queries.track(new Eg(n,e))}function QA(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function sv(t,n){return t.queries.getByIndex(n)}function Lw(t,n){let e=t[fe],i=sv(e,n);return i.crossesNgTemplate?xg(e,t,n,[]):Rw(e,t,i,n)}function jw(t,n,e){let i,r=Ja(()=>{i._dirtyCounter();let o=KA(i,t);if(n&&o===void 0)throw new L(-951,!1);return o});return i=r[It],i._dirtyCounter=de(0),i._flatValue=void 0,r}function av(t){return jw(!0,!1,t)}function lv(t){return jw(!0,!0,t)}function Bw(t,n){let e=t[It];e._lView=me(),e._queryIndex=n,e._queryList=ov(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function KA(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[pe]&4)return n?void 0:an;let r=ov(e,i),o=Lw(e,i);return r.reset(o,hC),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Zi=class{},tf=class{};var Fu=class extends Zi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Nu(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=ep(n);this._bootstrapComponents=BC(o.bootstrap),this._r3Injector=Lp(n,e,[{provide:Zi,useValue:this},{provide:Ul,useValue:this.componentFactoryResolver},...i],ml(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Lu=class extends tf{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Fu(this.moduleType,n,[])}};var Nl=class extends Zi{injector;componentFactoryResolver=new Nu(this);instance=null;constructor(n){super();let e=new Ho([...n.providers,{provide:Zi,useValue:this},{provide:Ul,useValue:this.componentFactoryResolver}],n.parent||Bs(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function zl(t,n,e=null){return new Nl({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var JA=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=ap(!1,e.type),r=i.length>0?zl([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=x({token:t,providedIn:"environment",factory:()=>new t(te(et))})}return t})();function k(t){return Pl(()=>{let n=Vw(t),e=ce(w({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Lg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(JA).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Di.Emulated,styles:t.styles||an,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&yr("NgStandalone"),Hw(e);let i=t.dependencies;return e.directiveDefs=z0(i,eR),e.pipeDefs=z0(i,Ab),e.id=iR(e),e})}function eR(t){return cr(t)||tp(t)}function Qe(t){return Pl(()=>({type:t.type,bootstrap:t.bootstrap||an,declarations:t.declarations||an,imports:t.imports||an,exports:t.exports||an,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function tR(t,n){if(t==null)return Ur;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,l;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,l=r[3]||null):(o=r,s=r,a=Gu.None,l=null),e[o]=[i,a,l],n[o]=s}return e}function nR(t){if(t==null)return Ur;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function H(t){return Pl(()=>{let n=Vw(t);return Hw(n),n})}function cv(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Vw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Ur,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||an,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:tR(t.inputs,n),outputs:nR(t.outputs),debugInfo:null}}function Hw(t){t.features?.forEach(n=>n(t))}function z0(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function iR(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function rR(t){return Object.getPrototypeOf(t.prototype).constructor}function Ve(t){let n=rR(t.type),e=!0,i=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let r,o=Object.hasOwn(n,pl)?n[pl]:void 0,s=Object.hasOwn(n,gl)?n[gl]:void 0;if(zi(t))r=o??s;else{if(o)throw new L(903,!1);r=s}if(r){if(e){i.push(r);let l=t;l.inputs=qp(t.inputs),l.declaredInputs=qp(t.declaredInputs),l.outputs=qp(t.outputs);let c=r.hostBindings;c&&cR(t,c);let u=r.viewQuery,f=r.contentQueries;if(u&&aR(t,u),f&&lR(t,f),oR(t,r),kb(t.outputs,r.outputs),zi(r)&&r.data.animation){let m=t.data;m.animation=(m.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let l=0;l<a.length;l++){let c=a[l];c&&c.ngInherit&&c(t),c===Ve&&(e=!1)}}n=Object.getPrototypeOf(n)}sR(i)}function oR(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function sR(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Xs(r.hostAttrs,e=Xs(e,r.hostAttrs))}}function qp(t){return t===Ur?{}:t===an?[]:t}function aR(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function lR(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function cR(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function Uw(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Xs(t.mergedAttrs,t.attrs);let u=t.tView=qg(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),zs(t,!1);let l=uR(e,n,t,i);uu()&&ev(e,n,l,t),Qs(l,n);let c=pw(l,n,l,t);n[i+_t]=c,Yg(n,c),$A(c,t,n)}function dR(t,n,e,i,r,o,s,a,l,c,u){let f=e+_t,m;return n.firstCreatePass?(m=na(n,f,4,s||null,a||null),Ep()&&ww(n,t,m,Rn(n.consts,c),nw),nC(n,m)):m=n.data[f],Uw(m,t,n,e,i,r,o,l),Cl(m)&&nv(n,t,m),c!=null&&Xu(t,m,u),m}function Js(t,n,e,i,r,o,s,a,l,c,u){let f=e+_t,m;if(n.firstCreatePass){if(m=na(n,f,4,s||null,a||null),c!=null){let h=Rn(n.consts,c);m.localNames=[];for(let v=0;v<h.length;v+=2)m.localNames.push(h[v],-1)}}else m=n.data[f];return Uw(m,t,n,e,i,r,o,l),c!=null&&Xu(t,m,u),m}function wt(t,n,e,i,r,o,s,a){let l=me(),c=ut(),u=Rn(c.consts,o);return dR(l,c,t,n,e,i,r,u,void 0,s,a),wt}function nf(t,n,e,i,r,o,s,a){let l=me(),c=ut(),u=Rn(c.consts,o);return Js(l,c,t,n,e,i,r,u,void 0,s,a),nf}var uR=fR;function fR(t,n,e,i){return fu(!0),n[tt].createComment("")}var rf=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Yi(t){return typeof t=="function"&&t[It]!==void 0}function dv(t){return Yi(t)&&typeof t.set=="function"}var uv=new b("");function Xr(t){return!!t&&typeof t.then=="function"}function fv(t){return!!t&&typeof t.subscribe=="function"}var mv=new b("");function of(t){return vi([{provide:mv,multi:!0,useValue:t}])}var hv=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(mv,{optional:!0})??[];injector=d(K);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=qt(this.injector,r);if(Xr(o))e.push(o);else if(fv(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sf=new b("");function zw(){vh(()=>{let t="";throw new L(600,t)})}function $w(t){return t.isBoundToModule}var mR=10;var _n=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(In);afterRenderManager=d(qu);zonelessEnabled=d(qs);rootEffectScheduler=d(pu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new T;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(Gi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ee(e=>!e))}constructor(){d(xi,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(et);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=K.NULL){return this._injector.get(j).run(()=>{Xe(ze.BootstrapComponentStart);let s=e instanceof Ju;if(!this._injector.get(hv).done){let v="";throw new L(405,v)}let l;s?l=e:l=this._injector.get(Ul).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=$w(l)?void 0:this._injector.get(Zi),u=i||l.selector,f=l.create(r,[],u,c),m=f.location.nativeElement,h=f.injector.get(uv,null);return h?.registerApplication(m),f.onDestroy(()=>{this.detachView(f.hostView),Ml(this.components,f),h?.unregisterApplication(m)}),this._loadComponent(f),Xe(ze.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Xe(ze.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Wu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Xe(ze.ChangeDetectionEnd),new L(101,!1);let e=se(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,se(e),this.afterTick.next(),Xe(ze.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Nt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<mR;){Xe(ze.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Xe(ze.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!wl(r))continue;let o=i&&!this.zonelessEnabled?0:1;uw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>wl(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ml(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(sf,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ml(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new L(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ml(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function af(t,n){let e=me(),i=$i();if(Kn(e,i,n)){let r=ut(),o=$s();if(Qu(o,r,e,t,n))Ui(o)&&tw(e,o.index);else{let a=Xn(o,e);iw(e[tt],a,null,o.value,t,n,null)}}return af}function ge(t,n,e,i){let r=me(),o=$i();if(Kn(r,o,n)){let s=ut(),a=$s();$k(a,r,t,n,e,i)}return ge}var Ig=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Zp(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function hR(t,n,e,i){let r,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){se(i);let c=n.length-1;for(se(null);s<=a&&s<=c;){let u=t.at(s),f=n[s],m=Zp(s,u,s,f,e);if(m!==0){m<0&&t.updateValue(s,f),s++;continue}let h=t.at(a),v=n[c],S=Zp(a,h,c,v,e);if(S!==0){S<0&&t.updateValue(a,v),a--,c--;continue}let R=e(s,u),P=e(a,h),N=e(s,f);if(Object.is(N,P)){let M=e(c,v);Object.is(M,R)?(t.swap(s,a),t.updateValue(a,v),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new ju,o??=G0(t,s,a,e),Sg(t,r,s,N))t.updateValue(s,f),s++,a++;else if(o.has(N))r.set(R,t.detach(s)),a--;else{let M=t.create(s,n[s]);t.attach(s,M),s++,a++}}for(;s<=c;)$0(t,r,e,s,n[s]),s++}else if(n!=null){se(i);let c=n[Symbol.iterator]();se(null);let u=c.next();for(;!u.done&&s<=a;){let f=t.at(s),m=u.value,h=Zp(s,f,s,m,e);if(h!==0)h<0&&t.updateValue(s,m),s++,u=c.next();else{r??=new ju,o??=G0(t,s,a,e);let v=e(s,m);if(Sg(t,r,s,v))t.updateValue(s,m),s++,a++,u=c.next();else if(!o.has(v))t.attach(s,t.create(s,m)),s++,a++,u=c.next();else{let S=e(s,f);r.set(S,t.detach(s)),a--}}}for(;!u.done;)$0(t,r,e,t.length,u.value),u=c.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(c=>{t.destroy(c)})}function Sg(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function $0(t,n,e,i,r){if(Sg(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function G0(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var ju=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function Y(t,n,e,i,r,o,s,a){yr("NgControlFlow");let l=me(),c=ut(),u=Rn(c.consts,o);return Js(l,c,t,n,e,i,r,u,256,s,a),pv}function pv(t,n,e,i,r,o,s,a){yr("NgControlFlow");let l=me(),c=ut(),u=Rn(c.consts,o);return Js(l,c,t,n,e,i,r,u,512,s,a),pv}function X(t,n){yr("NgControlFlow");let e=me(),i=$i(),r=e[i]!==Sn?e[i]:-1,o=r!==-1?Bu(e,_t+r):void 0,s=0;if(Kn(e,i,t)){let a=se(null);try{if(o!==void 0&&vw(o,s),t!==-1){let l=_t+t,c=Bu(e,l),u=Ag(e[fe],l),f=yw(c,u,e),m=Vl(e,u,n,{dehydratedView:f});Hl(c,m,s,Ks(u,f))}}finally{se(a)}}else if(o!==void 0){let a=gw(o,s);a!==void 0&&(a[Mt]=n)}}var Mg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Ct}};function Xi(t){return t}function gv(t,n){return n}var Tg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function yn(t,n,e,i,r,o,s,a,l,c,u,f,m){yr("NgControlFlow");let h=me(),v=ut(),S=l!==void 0,R=me(),P=a?s.bind(R[gn][Mt]):s,N=new Tg(S,P);R[_t+t]=N,Js(h,v,t+1,n,e,i,r,Rn(v.consts,o),256),S&&Js(h,v,t+2,l,c,u,f,Rn(v.consts,m),512)}var kg=class extends Ig{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Ct}at(n){return this.getLView(n)[Mt].$implicit}attach(n,e){let i=e[zo];this.needsIndexUpdate||=n!==this.length,Hl(this.lContainer,e,n,Ks(this.templateTNode,i)),pR(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,gR(this.lContainer,n),vR(this.lContainer,n)}create(n,e){let i=Au(this.lContainer,this.templateTNode.tView.ssrId);return Vl(this.hostLView,this.templateTNode,new Mg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Zu(n[fe],n)}updateValue(n,e){this.getLView(n)[Mt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Mt].$index=n}getLView(n){return _R(this.lContainer,n)}};function bn(t){let n=se(null),e=mr();try{let i=me(),r=i[fe],o=i[e],s=e+1,a=Bu(i,s);if(o.liveCollection===void 0){let c=Ag(r,s);o.liveCollection=new kg(a,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(hR(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=$i(),u=l.length===0;if(Kn(i,c,u)){let f=e+2,m=Bu(i,f);if(u){let h=Ag(r,f),v=yw(m,h,i),S=Vl(i,h,void 0,{dehydratedView:v});Hl(m,S,0,Ks(h,v))}else r.firstUpdatePass&&mA(m),vw(m,0)}}}finally{se(n)}}function Bu(t,n){return t[n]}function pR(t,n){if(t.length<=Ct)return;let e=Ct+n,i=t[e],r=i?i[$r]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[dr];Dk(o,r),Ko.delete(i[ur]),r.detachedLeaveAnimationFns=void 0}}function gR(t,n){if(t.length<=Ct)return;let e=Ct+n,i=t[e],r=i?i[$r]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function vR(t,n){return Rl(t,n)}function _R(t,n){return gw(t,n)}function Ag(t,n){return ru(t,n)}function z(t,n,e){let i=me(),r=$i();if(Kn(i,r,n)){let o=ut(),s=$s();JC(s,i,t,n,i[tt],e)}return z}function Rg(t,n,e,i,r){Qu(n,t,e,r?"class":"style",i)}function p(t,n,e,i){let r=me(),o=r[fe],s=t+_t,a=o.firstCreatePass?Ew(s,r,2,n,nw,Ep(),e,i):o.data[s];if(Ui(a)){let l=r[yi].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(Tw(c),()=>(W0(t,n,r,a,i),p))}}return W0(t,n,r,a,i),p}function W0(t,n,e,i,r){if(rw(i,e,t,n,Gw),Cl(i)){let o=e[fe];nv(o,e,i),IC(o,i,e)}r!=null&&Xu(e,i)}function g(){let t=ut(),n=Zt(),e=ow(n);return t.firstCreatePass&&xw(t,e),Ip(e)&&Sp(),Dp(),e.classesWithoutHost!=null&&cT(e)&&Rg(t,e,me(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&dT(e)&&Rg(t,e,me(),e.stylesWithoutHost,!1),g}function G(t,n,e,i){return p(t,n,e,i),g(),G}function gt(t,n,e,i){let r=me(),o=r[fe],s=t+_t,a=o.firstCreatePass?SA(s,o,2,n,e,i):o.data[s];return rw(a,r,t,n,Gw),i!=null&&Xu(r,a),gt}function Dt(){let t=Zt(),n=ow(t);return Ip(n)&&Sp(),Dp(),Dt}function tn(t,n,e,i){return gt(t,n,e,i),Dt(),tn}var Gw=(t,n,e,i,r)=>(fu(!0),NC(n[tt],i,Fp()));function nn(){return me()}function On(t,n,e){let i=me(),r=$i();if(Kn(i,r,n)){let o=ut(),s=$s();ew(s,i,t,n,i[tt],e)}return On}var xl=void 0;function yR(t){let n=Math.floor(Math.abs(t)),e=t.toString().replace(/^[^.]*\.?/,"").length;return n===1&&e===0?1:5}var bR=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],xl,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],xl,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm\u202Fa","h:mm:ss\u202Fa","h:mm:ss\u202Fa z","h:mm:ss\u202Fa zzzz"],["{1}, {0}",xl,xl,xl],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",yR],Yp=Object.create(null);function $l(t){let n=CR(t),e=q0(n);if(e)return e;let i=n.split("-")[0];if(e=q0(i),e)return e;if(i==="en")return bR;throw new L(701,!1)}function q0(t){if(!(t in Yp)){let n=qn.ng&&qn.ng.common&&qn.ng.common.locales&&qn.ng.common.locales[t];return n!==void 0&&(Yp[t]=n),n}return Yp[t]}var Qr=(function(t){return t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData",t})(Qr||{});function CR(t){return t.toLowerCase().replace(/_/g,"-")}var Gl="en-US",wR="USD";var DR=Gl;function Ww(t){typeof t=="string"&&(DR=t.toLowerCase().replace(/_/g,"-"))}function U(t,n,e){let i=me(),r=ut(),o=Zt();return qw(r,i,i[tt],o,t,n,e),U}function ia(t,n,e){let i=me(),r=ut(),o=Zt();return(o.type&3||e)&&Sw(o,r,i,e,i[tt],t,n,Eu(o,i,n)),ia}function qw(t,n,e,i,r,o,s){let a=!0,l=null;if((i.type&3||s)&&(l??=Eu(i,n,o),Sw(i,t,n,s,e,r,o,l)&&(a=!1)),a){let c=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let m=u[f],h=u[f+1];l??=Eu(i,n,o),V0(i,n,m,h,r,l)}if(c&&c.length)for(let f of c)l??=Eu(i,n,o),V0(i,n,f,r,r,l)}}function B(t=1){return d0(t)}function ER(t,n){let e=null,i=lk(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?HC(t,o,!0):uk(i,o))return r}return e}function yt(t){let n=me()[gn][pn];if(!n.projection){let e=t?t.length:1,i=n.projection=Lb(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?ER(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function Ae(t,n=0,e,i,r,o){let s=me(),a=ut(),l=i?t+1:null;l!==null&&Js(s,a,l,i,r,o,null,e);let c=na(a,_t+t,16,null,e||null);c.projection===null&&(c.projection=n),kp();let f=!s[zo]||xp();s[gn][pn].projection[c.projection]===null&&l!==null?xR(s,a,l):f&&!zu(c)&&Ok(a,s,c)}function xR(t,n,e){let i=_t+e,r=n.data[i],o=t[i],s=Au(o,r.tView.ssrId),a=Vl(t,r,void 0,{dehydratedView:s});Hl(o,a,0,Ks(r,s))}function Mn(t,n,e,i){return Pw(t,n,e,i),Mn}function Pt(t,n,e){return Ow(t,n,e),Pt}function ve(t){let n=me(),e=ut(),i=lu();Dl(i+1);let r=sv(e,i);if(t.dirty&&qb(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Lw(n,i);t.reset(o,hC),t.notifyOnChanges()}return!0}return!1}function _e(){return ov(me(),lu())}function lf(t,n,e,i,r){return Bw(n,Pw(t,e,i,r)),lf}function cf(t,n,e,i){return Bw(t,Ow(n,e,i)),cf}function df(t=1){Dl(lu()+t)}function Ut(t){let n=t0();return gp(n,_t+t)}function yu(t,n){return t<<17|n<<2}function es(t){return t>>17&32767}function IR(t){return(t&2)==2}function SR(t,n){return t&131071|n<<17}function Ng(t){return t|2}function ea(t){return(t&131068)>>2}function Xp(t,n){return t&-131069|n<<2}function MR(t){return(t&1)===1}function Og(t){return t|1}function TR(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=es(s),l=ea(s);t[i]=e;let c=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||js(f,u)>0)&&(c=!0)}else u=e;if(r)if(l!==0){let m=es(t[a+1]);t[i+1]=yu(m,a),m!==0&&(t[m+1]=Xp(t[m+1],i)),t[a+1]=SR(t[a+1],i)}else t[i+1]=yu(a,0),a!==0&&(t[a+1]=Xp(t[a+1],i)),a=i;else t[i+1]=yu(l,0),a===0?a=i:t[l+1]=Xp(t[l+1],i),l=i;c&&(t[i+1]=Ng(t[i+1])),Z0(t,u,i,!0),Z0(t,u,i,!1),kR(n,u,t,i,o),s=yu(a,l),o?n.classBindings=s:n.styleBindings=s}function kR(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&js(o,n)>=0&&(e[i+1]=Og(e[i+1]))}function Z0(t,n,e,i){let r=t[e+1],o=n===null,s=i?es(r):ea(r),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];AR(l,n)&&(a=!0,t[s+1]=i?Og(c):Ng(c)),s=i?es(c):ea(c)}a&&(t[e+1]=i?Ng(r):Og(r))}function AR(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?js(t,n)>=0:!1}var wi={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function RR(t){return t.substring(wi.key,wi.keyEnd)}function NR(t){return OR(t),Zw(t,Yw(t,0,wi.textEnd))}function Zw(t,n){let e=wi.textEnd;return e===n?-1:(n=wi.keyEnd=PR(t,wi.key=n,e),Yw(t,n,e))}function OR(t){wi.key=0,wi.keyEnd=0,wi.value=0,wi.valueEnd=0,wi.textEnd=t.length}function Yw(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function PR(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function ra(t,n,e){return Xw(t,n,e,!1),ra}function re(t,n){return Xw(t,n,null,!0),re}function Pn(t){LR(zR,FR,t,!0)}function FR(t,n){for(let e=NR(n);e>=0;e=Zw(n,e))tu(t,RR(n),!0)}function Xw(t,n,e,i){let r=me(),o=ut(),s=Np(2);if(o.firstUpdatePass&&Kw(o,t,s,i),n!==Sn&&Kn(r,s,n)){let a=o.data[mr()];Jw(o,a,r,r[tt],t,r[s+1]=GR(n,e),i,s)}}function LR(t,n,e,i){let r=ut(),o=Np(2);r.firstUpdatePass&&Kw(r,null,o,i);let s=me();if(e!==Sn&&Kn(s,o,e)){let a=r.data[mr()];if(eD(a,i)&&!Qw(r,o)){let l=i?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=Xd(l,e||"")),Rg(r,a,s,e,i)}else $R(r,a,s,s[tt],s[o+1],s[o+1]=UR(t,n,e),i,o)}}function Qw(t,n){return n>=t.expandoStartIndex}function Kw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[mr()],s=Qw(t,e);eD(o,i)&&n===null&&!s&&(n=!1),n=jR(r,o,n,i),TR(r,o,n,e,s,i)}}function jR(t,n,e,i){let r=s0(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Qp(null,t,n,e,i),e=Ol(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=Qp(r,t,n,e,i),o===null){let l=BR(t,n,i);l!==void 0&&Array.isArray(l)&&(l=Qp(null,t,n,l[1],i),l=Ol(l,n.attrs,i),VR(t,n,i,l))}else o=HR(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function BR(t,n,e){let i=e?n.classBindings:n.styleBindings;if(ea(i)!==0)return t[es(i)]}function VR(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[es(r)]=i}function HR(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=Ol(i,s,e)}return Ol(i,n.attrs,e)}function Qp(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=Ol(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function Ol(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),tu(t,s,e?!0:n[++o]))}return t===void 0?null:t}function UR(t,n,e){if(e==null||e==="")return an;let i=[],r=Ei(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function zR(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&tu(t,i,e)}function $R(t,n,e,i,r,o,s,a){r===Sn&&(r=an);let l=0,c=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let m=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,v=null,S;u===f?(l+=2,c+=2,m!==h&&(v=f,S=h)):f===null||u!==null&&u<f?(l+=2,v=u):(c+=2,v=f,S=h),v!==null&&Jw(t,n,e,i,v,S,s,a),u=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function Jw(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],u=MR(c)?Y0(l,n,e,r,ea(c),s):void 0;if(!Vu(u)){Vu(o)||IR(c)&&(o=Y0(l,null,e,r,a,s));let f=pp(mr(),e);Fk(i,s,f,r,o)}}function Y0(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let l=t[r],c=Array.isArray(l),u=c?l[1]:l,f=u===null,m=e[r+1];m===Sn&&(m=f?an:void 0);let h=f?nu(m,i):u===i?m:void 0;if(c&&!Vu(h)&&(h=nu(l,i)),Vu(h)&&(a=h,s))return a;let v=t[r+1];r=s?es(v):ea(v)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=nu(l,i))}return a}function Vu(t){return t!==void 0}function GR(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=ml(Ei(t)))),t}function eD(t,n){return(t.flags&(n?8:16))!==0}function I(t,n=""){let e=me(),i=ut(),r=t+_t,o=i.firstCreatePass?na(i,r,1,n,null):i.data[r],s=WR(i,e,o,n);e[r]=s,uu()&&ev(i,e,s,o),zs(o,!1)}var WR=(t,n,e,i)=>(fu(!0),QT(n[tt],i));function tD(t,n,e,i=""){return Kn(t,$i(),e)?n+vl(e)+i:Sn}function He(t){return st("",t),He}function st(t,n,e){let i=me(),r=tD(i,t,n,e);return r!==Sn&&qR(i,mr(),r),st}function qR(t,n,e){let i=pp(n,t);KT(t[tt],i,e)}function br(t,n,e){dv(n)&&(n=n());let i=me(),r=$i();if(Kn(i,r,n)){let o=ut(),s=$s();JC(s,i,t,n,i[tt],e)}return br}function Kr(t,n){let e=dv(t);return e&&t.set(n),e}function Cr(t,n){let e=me(),i=ut(),r=Zt();return qw(i,e,e[tt],r,t,n),Cr}function Ii(t){return Kn(me(),$i(),t)?vl(t):Sn}function is(t,n,e=""){return tD(me(),t,n,e)}function X0(t,n,e){let i=ut();i.firstCreatePass&&nD(n,i.data,i.blueprint,zi(t),e)}function nD(t,n,e,i,r){if(t=Jt(t),Array.isArray(t))for(let o=0;o<t.length;o++)nD(t[o],n,e,i,r);else{let o=ut(),s=me(),a=Zt(),l=Vo(t)?t:Jt(t.provide),c=cp(t),u=a.providerIndexes&1048575,f=a.directiveStart,m=a.providerIndexes>>20;if(Vo(t)||!t.multi){let h=new Qo(c,r,ae,null),v=Jp(l,n,r?u:u+m,f);v===-1?(tg(Tu(a,s),o,l),Kp(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(h),s.push(h)):(e[v]=h,s[v]=h)}else{let h=Jp(l,n,u+m,f),v=Jp(l,n,u,u+m),S=h>=0&&e[h],R=v>=0&&e[v];if(r&&!R||!r&&!S){tg(Tu(a,s),o,l);let P=XR(r?YR:ZR,e.length,r,i,c,t);!r&&R&&(e[v].providerFactory=P),Kp(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(P),s.push(P)}else{let P=iD(e[r?v:h],c,!r&&i);Kp(o,t,h>-1?h:v,P)}!r&&i&&R&&e[v].componentProviders++}}}function Kp(t,n,e,i){let r=Vo(n),o=zb(n);if(r||o){let l=(o?Jt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=c.indexOf(e);u===-1?c.push(e,[i,l]):c[u+1].push(i,l)}else c.push(e,l)}}}function iD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Jp(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function ZR(t,n,e,i,r){return Pg(this.multi,[])}function YR(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=Tl(i,i[fe],this.providerFactory.index,r);s=l.slice(0,a),Pg(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Pg(o,s);return s}function Pg(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function XR(t,n,e,i,r,o){let s=new Qo(t,e,ae,null);return s.multi=[],s.index=n,s.componentProviders=0,iD(s,r,i&&!e),s}function vt(t,n){return e=>{e.providersResolver=(i,r)=>X0(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>X0(i,r?r(n):n,!0))}}function vv(t,n){let e=Rp()+t,i=me();return i[e]===Sn?Iw(i,e,n()):MA(i,e)}function QR(t,n){let e=t[n];return e===Sn?void 0:e}function KR(t,n,e,i,r,o){let s=n+e;return Kn(t,s,r)?Iw(t,s+1,o?i.call(o,r):i(r)):QR(t,s+1)}function Jn(t,n){let e=ut(),i,r=t+_t;e.firstCreatePass?(i=JR(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Br(i.type,!0)),s,a=mn(ae);try{let l=Mu(!1),c=o();return Mu(l),vp(e,me(),r,c),c}finally{mn(a)}}function JR(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function ei(t,n,e){let i=t+_t,r=me(),o=gp(r,i);return eN(r,i)?KR(r,Rp(),n,o.transform,e,o):o.transform(e)}function eN(t,n){return t[fe].data[n].pure}function rs(t,n){return Ku(t,n)}var Hu=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},_v=(()=>{class t{compileModuleSync(e){return new Lu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=ep(e),o=BC(r.declarations).reduce((s,a)=>{let l=cr(a);return l&&s.push(new Jo(l)),s},[]);return new Hu(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rD=(()=>{class t{applicationErrorHandler=d(In);appRef=d(_n);taskService=d(Gi);ngZone=d(j);zonelessEnabled=d(qs);tracing=d(xi,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Se;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ul):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(hu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?m0:Bp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ul+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function oD(){return[{provide:gi,useExisting:rD},{provide:j,useClass:fl},{provide:qs,useValue:!0}]}function tN(){return typeof $localize<"u"&&$localize.locale||Gl}var Wl=new b("",{factory:()=>d(Wl,{optional:!0,skipSelf:!0})||tN()}),yv=new b("",{factory:()=>wR});function Ge(t){return xb(t)}function Yt(t,n){return Ja(t,n?.equal)}var nN=t=>t;function bv(t,n){if(typeof t=="function"){let e=Fh(t,nN,n?.equal);return sD(e,n?.debugName)}else{let e=Fh(t.source,t.computation,t.equal);return sD(e,t.debugName)}}function sD(t,n){let e=t[It],i=t;return i.set=r=>Db(e,r),i.update=r=>Eb(e,r),i.asReadonly=mu.bind(t),i}var fD=Symbol("InputSignalNode#UNSET"),pN=ce(w({},el),{transformFn:void 0,applyValueToInputSignal(t,n){So(t,n)}});function mD(t,n){let e=Object.create(pN);e.value=t,e.transformFn=n?.transform;function i(){if(Pr(e),e.value===fD){let r=null;throw new L(-950,r)}return e.value}return i[It]=e,i}var Jr=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Fl(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function aD(t,n){return mD(t,n)}function gN(t){return mD(fD,t)}var ff=(aD.required=gN,aD);function lD(t,n){return av(n)}function vN(t,n){return lv(n)}var Zl=(lD.required=vN,lD);function cD(t,n){return av(n)}function _N(t,n){return lv(n)}var hD=(cD.required=_N,cD);var yN=(()=>{class t{zone=d(j);changeDetectionScheduler=d(gi);applicationRef=d(_n);applicationErrorHandler=d(In);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(e){this.applicationErrorHandler(e)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bN=new b("",{factory:()=>!1});function CN({ngZoneFactory:t,scheduleInRootZone:n}){return t??=()=>new j(ce(w({},gD()),{scheduleInRootZone:n})),[{provide:qs,useValue:!1},{provide:j,useFactory:t},{provide:Vi,multi:!0,useFactory:()=>{let e=d(yN,{optional:!0});return()=>e.initialize()}},{provide:Vi,multi:!0,useFactory:()=>{let e=d(wN);return()=>{e.initialize()}}},{provide:hu,useValue:n??jp}]}function pD(t){let n=t?.scheduleInRootZone,e=CN({ngZoneFactory:()=>{let i=gD(t);return i.scheduleInRootZone=n,i.shouldCoalesceEventChangeDetection&&yr("NgZone_CoalesceEvent"),new j(i)},scheduleInRootZone:n});return vi([{provide:bN,useValue:!0},e])}function gD(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var wN=(()=>{class t{subscription=new Se;initialized=!1;zone=d(j);pendingTasks=d(Gi);initialize(){if(this.initialized)return;this.initialized=!0;let e=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(e=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{j.assertNotInAngularZone(),queueMicrotask(()=>{e!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(e),e=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{j.assertInAngularZone(),e??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wv=new b(""),DN=new b("");function ql(t){return!t.moduleRef}function EN(t){let n=ql(t)?t.r3Injector:t.moduleRef.injector,e=n.get(j);return e.run(()=>{ql(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(In),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),ql(t)){let o=()=>n.destroy(),s=t.platformInjector.get(wv);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(wv);s.add(o),t.moduleRef.onDestroy(()=>{Ml(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return IN(i,e,()=>{let o=n.get(Gi),s=o.add(),a=n.get(hv);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(Wl,Gl);if(Ww(l||Gl),!n.get(DN,!0))return ql(t)?n.get(_n):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(ql(t)){let u=n.get(_n);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return xN?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var xN;function IN(t,n,e){try{let i=e();return Xr(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var uf=null;function SN(t=[],n){return K.create({name:n,providers:[{provide:yl,useValue:"platform"},{provide:wv,useValue:new Set([()=>uf=null])},...t]})}function MN(t=[]){if(uf)return uf;let n=SN(t);return uf=n,zw(),TN(n),n}function TN(t){let n=t.get(Uu,null);qt(t,()=>{n?.forEach(e=>e())})}var kN=1e4;var J9=kN-1e3;var qe=(()=>{class t{static __NG_ELEMENT_ID__=AN}return t})();function AN(t){return RN(Zt(),me(),(t&16)===16)}function RN(t,n,e){if(Ui(t)&&!e){let i=Qn(t.index,n);return new qr(i,i)}else if(t.type&175){let i=n[gn];return new qr(i,n)}return null}function vD(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Xe(ze.BootstrapApplicationStart);try{let o=r?.injector??MN(i),s=[oD(),p0,...e||[]],a=new Nl({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return EN({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Xe(ze.BootstrapApplicationEnd)}}function ue(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Fn(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Cv=Symbol("NOT_SET"),_D=new Set,NN=ce(w({},el),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Cv,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Cv&&!Ts(this))return this.signal;try{for(let r of this.cleanup??_D)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=ir(this),i;try{i=this.userFn.apply(null,n)}finally{Fr(this,e)}return(this.value===Cv||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Dv=class extends kl{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(vn),s),this.scheduler=r;for(let a of Qg){let l=e[a];if(l===void 0)continue;let c=Object.create(NN);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Pr(c),c.value),c.signal[It]=c,c.registerCleanupFn=u=>(c.cleanup??=new Set).add(u),this.nodes[a]=c,this.hooks[a]=u=>c.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??_D)e()}finally{Lr(n)}}};function yD(t,n){let e=n?.injector??d(K),i=e.get(gi),r=e.get(qu),o=e.get(xi,null,{optional:!0});r.impl??=e.get(Kg);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Ws,null,{optional:!0}),l=new Dv(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function mf(t,n){let e=cr(t),i=n.elementInjector||Bs();return new Jo(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var bD=null;function ti(){return bD}function Ev(t){bD??=t}var Yl=class{},oa=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(CD),providedIn:"platform"})}return t})();var CD=(()=>{class t extends oa{_location;_history;_doc=d(Z);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ti().getBaseHref(this._doc)}onPopState(e){let i=ti().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=ti().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function ED(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function wD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function eo(t){return t&&t[0]!=="?"?`?${t}`:t}var sa=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(PN),providedIn:"root"})}return t})(),ON=new b(""),PN=(()=>{class t extends sa{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(Z).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ED(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+eo(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+eo(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+eo(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(te(oa),te(ON,8))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var to=(()=>{class t{_subject=new T;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=jN(wD(DD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+eo(i))}normalize(e){return t.stripTrailingSlash(LN(this._basePath,DD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+eo(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+eo(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=eo;static joinWithSlash=ED;static stripTrailingSlash=wD;static \u0275fac=function(i){return new(i||t)(te(sa))};static \u0275prov=x({token:t,factory:()=>FN(),providedIn:"root"})}return t})();function FN(){return new to(te(sa))}function LN(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function DD(t){return t.replace(/\/index\.html$/,"")}function jN(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var SD={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KGS:[void 0,"\u20C0"],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XCG:["Cg."],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},Sv=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(Sv||{});var Qi={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function aa(t,n){let e=$l(t),i=e[Qr.NumberSymbols][n];if(typeof i>"u"){if(n===Qi.CurrencyDecimal)return e[Qr.NumberSymbols][Qi.Decimal];if(n===Qi.CurrencyGroup)return e[Qr.NumberSymbols][Qi.Group]}return i}function MD(t,n){return $l(t)[Qr.NumberFormats][n]}function VN(t){return $l(t)[Qr.Currencies]}function TD(t,n,e="en"){let i=VN(e)[t]||SD[t]||[],r=i[1];return n==="narrow"&&typeof r=="string"?r:i[0]||t}var HN=2;function kD(t){let n,e=SD[t];return e&&(n=e[2]),typeof n=="number"?n:HN}var UN=/^(\d+)?\.((\d+)(-(\d+))?)?$/,xD=22,hf=".",Xl="0",zN=";",$N=",",xv="#",ID="\xA4";function GN(t,n,e,i,r,o,s=!1){let a="",l=!1;if(!isFinite(t))a=aa(e,Qi.Infinity);else{let c=ZN(t);s&&(c=qN(c));let u=n.minInt,f=n.minFrac,m=n.maxFrac;if(o){let N=o.match(UN);if(N===null)throw new L(2306,!1);let M=N[1],le=N[3],Oe=N[5];M!=null&&(u=Iv(M)),le!=null&&(f=Iv(le)),Oe!=null?m=Iv(Oe):le!=null&&f>m&&(m=f);let Pe=100;if(u>Pe||f>Pe||m>Pe)throw new L(2306,!1)}YN(c,f,m);let h=c.digits,v=c.integerLen,S=c.exponent,R=[];for(l=h.every(N=>!N);v<u;v++)h.unshift(0);for(;v<0;v++)h.unshift(0);v>0?R=h.splice(v,h.length):(R=h,h=[0]);let P=[];for(h.length>=n.lgSize&&P.unshift(h.splice(-n.lgSize,h.length).join(""));h.length>n.gSize;)P.unshift(h.splice(-n.gSize,h.length).join(""));h.length&&P.unshift(h.join("")),a=P.join(aa(e,i)),R.length&&(a+=aa(e,r)+R.join("")),S&&(a+=aa(e,Qi.Exponential)+"+"+S)}return t<0&&!l?a=n.negPre+a+n.negSuf:a=n.posPre+a+n.posSuf,a}function AD(t,n,e,i,r){let o=MD(n,Sv.Currency),s=WN(o,aa(n,Qi.MinusSign));return s.minFrac=kD(i),s.maxFrac=s.minFrac,GN(t,s,n,Qi.CurrencyGroup,Qi.CurrencyDecimal,r).replace(ID,e).replace(ID,"").trim()}function WN(t,n="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},i=t.split(zN),r=i[0],o=i[1],s=r.indexOf(hf)!==-1?r.split(hf):[r.substring(0,r.lastIndexOf(Xl)+1),r.substring(r.lastIndexOf(Xl)+1)],a=s[0],l=s[1]||"";e.posPre=a.substring(0,a.indexOf(xv));for(let u=0;u<l.length;u++){let f=l.charAt(u);f===Xl?e.minFrac=e.maxFrac=u+1:f===xv?e.maxFrac=u+1:e.posSuf+=f}let c=a.split($N);if(e.gSize=c[1]?c[1].length:0,e.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,o){let u=r.length-e.posPre.length-e.posSuf.length,f=o.indexOf(xv);e.negPre=o.substring(0,f).replace(/'/g,""),e.negSuf=o.slice(f+u).replace(/'/g,"")}else e.negPre=n+e.posPre,e.negSuf=e.posSuf;return e}function qN(t){if(t.digits[0]===0)return t;let n=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(n===0?t.digits.push(0,0):n===1&&t.digits.push(0),t.integerLen+=2),t}function ZN(t){let n=Math.abs(t)+"",e=0,i,r,o,s,a;for((r=n.indexOf(hf))>-1&&(n=n.replace(hf,"")),(o=n.search(/e/i))>0?(r<0&&(r=o),r+=+n.slice(o+1),n=n.substring(0,o)):r<0&&(r=n.length),o=0;n.charAt(o)===Xl;o++);if(o===(a=n.length))i=[0],r=1;else{for(a--;n.charAt(a)===Xl;)a--;for(r-=o,i=[],s=0;o<=a;o++,s++)i[s]=Number(n.charAt(o))}return r>xD&&(i=i.splice(0,xD-1),e=r-1,r=1),{digits:i,exponent:e,integerLen:r}}function YN(t,n,e){if(n>e)throw new L(2307,!1);let i=t.digits,r=i.length-t.integerLen,o=Math.min(Math.max(n,r),e),s=o+t.integerLen,a=i[s];if(s>0){i.splice(Math.max(t.integerLen,s));for(let f=s;f<i.length;f++)i[f]=0}else{r=Math.max(0,r),t.integerLen=1,i.length=Math.max(1,s=o+1),i[0]=0;for(let f=1;f<s;f++)i[f]=0}if(a>=5)if(s-1<0){for(let f=0;f>s;f--)i.unshift(0),t.integerLen++;i.unshift(1),t.integerLen++}else i[s-1]++;for(;r<Math.max(0,o);r++)i.push(0);let l=o!==0,c=n+t.integerLen,u=i.reduceRight(function(f,m,h,v){return m=m+f,v[h]=m<10?m:m-10,l&&(v[h]===0&&h>=c?v.pop():l=!1),m>=10?1:0},0);u&&(i.unshift(u),t.integerLen++)}function Iv(t){let n=parseInt(t);if(isNaN(n))throw new L(2305,!1);return n}var Ql=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(K);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(ae(en))};static \u0275dir=H({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ht]})}return t})();function XN(t,n){return new L(2100,!1)}var wr=(()=>{class t{_locale;_defaultCurrencyCode;constructor(e,i="USD"){this._locale=e,this._defaultCurrencyCode=i}transform(e,i=this._defaultCurrencyCode,r="symbol",o,s){if(!QN(e))return null;s||=this._locale,typeof r=="boolean"&&(r=r?"symbol":"code");let a=i||this._defaultCurrencyCode;r!=="code"&&(r==="symbol"||r==="symbol-narrow"?a=TD(a,r==="symbol"?"wide":"narrow",s):a=r);try{let l=KN(e);return AD(l,s,a,i,o)}catch(l){throw XN(t,l.message)}}static \u0275fac=function(i){return new(i||t)(ae(Wl,16),ae(yv,16))};static \u0275pipe=cv({name:"currency",type:t,pure:!0})}return t})();function QN(t){return!(t==null||t===""||t!==t)}function KN(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new L(2309,!1);return t}function Kl(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var os=class{};var Mv="browser";function RD(t){return t===Mv}var Jl=class{_doc;constructor(n){this._doc=n}manager},pf=(()=>{class t extends Jl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(te(Z))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),_f=new b(""),Rv=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof pf));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof pf);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new L(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(te(_f),te(j))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Tv="ng-app-id";function ND(t){for(let n of t)n.remove()}function OD(t,n){let e=n.createElement("style");return e.textContent=t,e}function nO(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Tv}="${n}"],link[${Tv}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Tv),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Av(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Nv=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,nO(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,OD);i?.forEach(r=>this.addUsage(r,this.external,Av))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(ND(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ND(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,OD(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Av(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(te(Z),te(Zr),te(ns,8),te(ts))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),kv={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ov=/%COMP%/g;var FD="%COMP%",iO=`_nghost-${FD}`,rO=`_ngcontent-${FD}`,oO=!0,sO=new b("",{factory:()=>oO});function aO(t){return rO.replace(Ov,t)}function lO(t){return iO.replace(Ov,t)}function LD(t,n){return n.map(e=>e.replace(Ov,t))}var Pv=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new ec(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof vf?r.applyToHost(e):r instanceof tc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Di.Emulated:o=new vf(l,c,i,this.appId,u,s,a,f);break;case Di.ShadowDom:return new gf(l,e,i,s,a,this.nonce,f,c);case Di.ExperimentalIsolatedShadowDom:return new gf(l,e,i,s,a,this.nonce,f);default:o=new tc(l,c,i,u,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(te(Rv),te(Nv),te(Zr),te(sO),te(Z),te(j),te(ns),te(xi,8))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),ec=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(kv[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(PD(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(PD(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new L(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=kv[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=kv[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(qi.DashCase|qi.Important)?n.style.setProperty(e,i,r&qi.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&qi.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=ti().getGlobalEventTarget(this.doc,n),!n))throw new L(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function PD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var gf=class extends ec{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,l){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=LD(i.id,c);for(let f of c){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=f,this.shadowRoot.appendChild(m)}let u=i.getExternalStyles?.();if(u)for(let f of u){let m=Av(f,r);s&&m.setAttribute("nonce",s),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},tc=class extends ec{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?LD(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ko.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},vf=class extends tc{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,l){let c=r+"-"+i.id;super(n,e,i,o,s,a,l,c),this.contentAttr=aO(c),this.hostAttr=lO(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var yf=class t extends Yl{supportsDOMEvents=!0;static makeCurrent(){Ev(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=cO();return e==null?null:dO(e)}resetBaseElement(){nc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Kl(document.cookie,n)}},nc=null;function cO(){return nc=nc||document.head.querySelector("base"),nc?nc.getAttribute("href"):null}function dO(t){return new URL(t,document.baseURI).pathname}var uO=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),jD=["alt","control","meta","shift"],fO={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},mO={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},BD=(()=>{class t extends Jl{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ti().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),jD.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),s+=c+".")}),s+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,i){let r=fO[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),jD.forEach(s=>{if(s!==r){let a=mO[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(te(Z))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})();async function Fv(t,n,e){let i=w({rootComponent:t},hO(n,e));return vD(i)}function hO(t,n){return{platformRef:n?.platformRef,appProviders:[...yO,...t?.providers??[]],platformProviders:_O}}function pO(){yf.makeCurrent()}function gO(){return new hn}function vO(){return jg(document),document}var _O=[{provide:ts,useValue:Mv},{provide:Uu,useValue:pO,multi:!0},{provide:Z,useFactory:vO}];var yO=[{provide:yl,useValue:"root"},{provide:hn,useFactory:gO},{provide:_f,useClass:pf,multi:!0},{provide:_f,useClass:BD,multi:!0},Pv,Nv,Rv,{provide:Nt,useExisting:Pv},{provide:os,useClass:uO},[]];var no=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Cf=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},wf=class{encodeKey(n){return VD(n)}encodeValue(n){return VD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function bO(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var CO=/%(\d[a-f0-9])/gi,wO={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function VD(t){return encodeURIComponent(t).replace(CO,(n,e)=>wO[e]??n)}function bf(t){return`${t}`}var Ln=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new wf,n.fromString){if(n.fromObject)throw new L(2805,!1);this.map=bO(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(bf):[bf(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(bf(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(bf(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function DO(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function HD(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function UD(t){return typeof Blob<"u"&&t instanceof Blob}function zD(t){return typeof FormData<"u"&&t instanceof FormData}function EO(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var $D="Content-Type",GD="Accept",WD="text/plain",qD="application/json",xO=`${qD}, ${WD}, */*`,la=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(DO(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new L(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new no,this.context??=new Cf,!this.params)this.params=new Ln,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||HD(this.body)||UD(this.body)||zD(this.body)||EO(this.body)?this.body:this.body instanceof Ln?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||zD(this.body)?null:UD(this.body)?this.body.type||null:HD(this.body)?null:typeof this.body=="string"?WD:this.body instanceof Ln?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?qD:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer??this.referrer,m=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,v=n.transferCache??this.transferCache,S=n.timeout??this.timeout,R=n.body!==void 0?n.body:this.body,P=n.withCredentials??this.withCredentials,N=n.reportProgress??this.reportProgress,M=n.headers||this.headers,le=n.params||this.params,Oe=n.context??this.context;return n.setHeaders!==void 0&&(M=Object.keys(n.setHeaders).reduce((Pe,Le)=>Pe.set(Le,n.setHeaders[Le]),M)),n.setParams&&(le=Object.keys(n.setParams).reduce((Pe,Le)=>Pe.set(Le,n.setParams[Le]),le)),new t(e,i,R,{params:le,headers:M,context:Oe,reportProgress:N,responseType:r,withCredentials:P,transferCache:v,keepalive:o,cache:a,priority:s,timeout:S,mode:l,redirect:c,credentials:u,referrer:f,integrity:m,referrerPolicy:h})}},ss=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(ss||{}),da=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new no,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Df=class t extends da{constructor(n={}){super(n)}type=ss.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ic=class t extends da{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=ss.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},ca=class extends da{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},IO=200,SO=204;var MO=new b("");var TO=/^\)\]\}',?\n/;var jv=(()=>{class t{xhrFactory;tracingService=d(xi,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new L(-2800,!1);let i=this.xhrFactory;return W(null).pipe(Rt(()=>new be(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((R,P)=>s.setRequestHeader(R,P.join(","))),e.headers.has(GD)||s.setRequestHeader(GD,xO),!e.headers.has($D)){let R=e.detectContentTypeHeader();R!==null&&s.setRequestHeader($D,R)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let R=e.responseType.toLowerCase();s.responseType=R!=="json"?R:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let R=s.statusText||"OK",P=new no(s.getAllResponseHeaders()),N=s.responseURL||e.url;return l=new Df({headers:P,status:s.status,statusText:R,url:N}),l},u=this.maybePropagateTrace(()=>{let{headers:R,status:P,statusText:N,url:M}=c(),le=null;P!==SO&&(le=typeof s.response>"u"?s.responseText:s.response),P===0&&(P=le?IO:0);let Oe=P>=200&&P<300;if(e.responseType==="json"&&typeof le=="string"){let Pe=le;le=le.replace(TO,"");try{le=le!==""?JSON.parse(le):null}catch(Le){le=Pe,Oe&&(Oe=!1,le={error:Le,text:le})}}Oe?(o.next(new ic({body:le,headers:R,status:P,statusText:N,url:M||void 0})),o.complete()):o.error(new ca({error:le,headers:R,status:P,statusText:N,url:M||void 0}))}),f=this.maybePropagateTrace(R=>{let{url:P}=c(),N=new ca({error:R,status:s.status||0,statusText:s.statusText||"Unknown Error",url:P||void 0});o.error(N)}),m=f;e.timeout&&(m=this.maybePropagateTrace(R=>{let{url:P}=c(),N=new ca({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:P||void 0});o.error(N)}));let h=!1,v=this.maybePropagateTrace(R=>{h||(o.next(c()),h=!0);let P={type:ss.DownloadProgress,loaded:R.loaded};R.lengthComputable&&(P.total=R.total),e.responseType==="text"&&s.responseText&&(P.partialText=s.responseText),o.next(P)}),S=this.maybePropagateTrace(R=>{let P={type:ss.UploadProgress,loaded:R.loaded};R.lengthComputable&&(P.total=R.total),o.next(P)});return s.addEventListener("load",u),s.addEventListener("error",f),s.addEventListener("timeout",m),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",v),a!==null&&s.upload&&s.upload.addEventListener("progress",S)),s.send(a),o.next({type:ss.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",u),s.removeEventListener("timeout",m),e.reportProgress&&(s.removeEventListener("progress",v),a!==null&&s.upload&&s.upload.removeEventListener("progress",S)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(te(os))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kO(t,n){return n(t)}function AO(t,n,e){return(i,r)=>qt(e,()=>n(i,o=>t(o,r)))}var Bv=new b("",{factory:()=>[]}),ZD=new b(""),YD=new b("",{factory:()=>!0});var Vv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=te(jv),r},providedIn:"root"})}return t})();var Ef=(()=>{class t{backend;injector;chain=null;pendingTasks=d(El);contributeToStability=d(YD);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(Bv),...this.injector.get(ZD,[])]));this.chain=i.reduceRight((r,o)=>AO(r,o,this.injector),kO)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(ji(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(te(Vv),te(et))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=te(Ef),r},providedIn:"root"})}return t})();function Lv(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var ni=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof la)o=e;else{let l;r.headers instanceof no?l=r.headers:l=new no(r.headers);let c;r.params&&(r.params instanceof Ln?c=r.params:c=new Ln({fromObject:r.params})),o=new la(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=W(o).pipe(Fo(l=>this.handler.handle(l)));if(e instanceof la||r.observe==="events")return s;let a=s.pipe(je(l=>l instanceof ic));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(ee(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new L(2806,!1);return l.body}));case"blob":return a.pipe(ee(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new L(2807,!1);return l.body}));case"text":return a.pipe(ee(l=>{if(l.body!==null&&typeof l.body!="string")throw new L(2808,!1);return l.body}));default:return a.pipe(ee(l=>l.body))}case"response":return a;default:throw new L(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Ln().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Lv(r,i))}post(e,i,r={}){return this.request("POST",e,Lv(r,i))}put(e,i,r={}){return this.request("PUT",e,Lv(r,i))}static \u0275fac=function(i){return new(i||t)(te(Hv))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var RO=new b("",{factory:()=>!0}),NO="XSRF-TOKEN",OO=new b("",{factory:()=>NO}),PO="X-XSRF-TOKEN",FO=new b("",{factory:()=>PO}),LO=(()=>{class t{cookieName=d(OO);doc=d(Z);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Kl(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),XD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=te(LO),r},providedIn:"root"})}return t})();function jO(t,n){if(!d(RO)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=d(oa).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch{return n(t)}let e=d(XD).getToken(),i=d(FO);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}var Uv=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(Uv||{});function BO(t,n){return{\u0275kind:t,\u0275providers:n}}function zv(...t){let n=[ni,Ef,{provide:Hv,useExisting:Ef},{provide:Vv,useFactory:()=>d(MO,{optional:!0})??d(jv)},{provide:Bv,useValue:jO,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return vi(n)}function $v(t){return BO(Uv.Interceptors,t.map(n=>({provide:Bv,useValue:n,multi:!0})))}var QD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(te(Z))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=te(HO),r},providedIn:"root"})}return t})(),HO=(()=>{class t extends rc{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Ht.NONE:return i;case Ht.HTML:return vr(i,"HTML")?Ei(i):$g(this._doc,String(i)).toString();case Ht.STYLE:return vr(i,"Style")?Ei(i):i;case Ht.SCRIPT:if(vr(i,"Script"))return Ei(i);throw new L(5200,!1);case Ht.URL:return vr(i,"URL")?Ei(i):jl(String(i));case Ht.RESOURCE_URL:if(vr(i,"ResourceURL"))return Ei(i);throw new L(5201,!1);default:throw new L(5202,!1)}}bypassSecurityTrustHtml(e){return Bg(e)}bypassSecurityTrustStyle(e){return Vg(e)}bypassSecurityTrustScript(e){return Hg(e)}bypassSecurityTrustUrl(e){return Ug(e)}bypassSecurityTrustResourceUrl(e){return zg(e)}static \u0275fac=function(i){return new(i||t)(te(Z))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var we="primary",yc=Symbol("RouteTitle"),Yv=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ls(t){return new Yv(t)}function Gv(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function oE(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return Gv(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Gv(o,t.slice(0,o.length),a)||!Gv(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function kf(t){return new Promise((n,e)=>{t.pipe(sr()).subscribe({next:i=>n(i),error:i=>e(i)})})}function UO(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Ki(t[e],n[e]))return!1;return!0}function Ki(t,n){let e=t?Xv(t):void 0,i=n?Xv(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!sE(t[r],n[r]))return!1;return!0}function Xv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function sE(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function zO(t){return t.length>0?t[t.length-1]:null}function us(t){return il(t)?t:Xr(t)?mt(Promise.resolve(t)):W(t)}function aE(t){return il(t)?kf(t):Promise.resolve(t)}var $O={exact:cE,subset:dE},lE={exact:GO,subset:WO,ignored:()=>!0},d_={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},dc={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function u_(t,n,e){let i=t instanceof Cn?t:n.parseUrl(t);return Yt(()=>Qv(n.lastSuccessfulNavigation()?.finalUrl??new Cn,i,w(w({},dc),e)))}function Qv(t,n,e){return $O[e.paths](t.root,n.root,e.matrixParams)&&lE[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function GO(t,n){return Ki(t,n)}function cE(t,n,e){if(!as(t.segments,n.segments)||!Sf(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!cE(t.children[i],n.children[i],e))return!1;return!0}function WO(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>sE(t[e],n[e]))}function dE(t,n,e){return uE(t,n,n.segments,e)}function uE(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!as(r,e)||n.hasChildren()||!Sf(r,e,i))}else if(t.segments.length===e.length){if(!as(t.segments,e)||!Sf(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!dE(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!as(t.segments,r)||!Sf(t.segments,r,i)||!t.children[we]?!1:uE(t.children[we],n,o,i)}}function Sf(t,n,e){return n.every((i,r)=>lE[e](t[r].parameters,i.parameters))}var Cn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ze([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ls(this.queryParams),this._queryParamMap}toString(){return YO.serialize(this)}},Ze=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Mf(this)}},io=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=ls(this.parameters),this._parameterMap}toString(){return mE(this)}};function qO(t,n){return as(t,n)&&t.every((e,i)=>Ki(e.parameters,n[i].parameters))}function as(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function ZO(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===we&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==we&&(e=e.concat(n(r,i)))}),e}var ya=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>new ro,providedIn:"root"})}return t})(),ro=class{parse(n){let e=new Jv(n);return new Cn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${oc(n.root,!0)}`,i=KO(n.queryParams),r=typeof n.fragment=="string"?`#${XO(n.fragment)}`:"";return`${e}${i}${r}`}},YO=new ro;function Mf(t){return t.segments.map(n=>mE(n)).join("/")}function oc(t,n){if(!t.hasChildren())return Mf(t);if(n){let e=t.children[we]?oc(t.children[we],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==we&&i.push(`${r}:${oc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=ZO(t,(i,r)=>r===we?[oc(t.children[we],!1)]:[`${r}:${oc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[we]!=null?`${Mf(t)}/${e[0]}`:`${Mf(t)}/(${e.join("//")})`}}function fE(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function xf(t){return fE(t).replace(/%3B/gi,";")}function XO(t){return encodeURI(t)}function Kv(t){return fE(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Tf(t){return decodeURIComponent(t)}function JD(t){return Tf(t.replace(/\+/g,"%20"))}function mE(t){return`${Kv(t.path)}${QO(t.parameters)}`}function QO(t){return Object.entries(t).map(([n,e])=>`;${Kv(n)}=${Kv(e)}`).join("")}function KO(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${xf(e)}=${xf(r)}`).join("&"):`${xf(e)}=${xf(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var JO=/^[^\/()?;#]+/;function Wv(t){let n=t.match(JO);return n?n[0]:""}var e1=/^[^\/()?;=#]+/;function t1(t){let n=t.match(e1);return n?n[0]:""}var n1=/^[^=?&#]+/;function i1(t){let n=t.match(n1);return n?n[0]:""}var r1=/^[^&#]+/;function o1(t){let n=t.match(r1);return n?n[0]:""}var Jv=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ze([],{}):new Ze([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new L(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[we]=new Ze(e,i)),r}parseSegment(){let n=Wv(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new L(4009,!1);return this.capture(n),new io(Tf(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=t1(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Wv(this.remaining);r&&(i=r,this.capture(i))}n[Tf(e)]=Tf(i)}parseQueryParam(n){let e=i1(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=o1(this.remaining);s&&(i=s,this.capture(i))}let r=JD(e),o=JD(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Wv(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new L(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=we);let a=this.parseChildren(e+1);i[s??we]=Object.keys(a).length===1&&a[we]?a[we]:new Ze([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new L(4011,!1)}};function hE(t){return t.segments.length>0?new Ze([],{[we]:t}):t}function pE(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=pE(r);if(i===we&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ze(t.segments,n);return s1(e)}function s1(t){if(t.numberOfChildren===1&&t.children[we]){let n=t.children[we];return new Ze(t.segments.concat(n.segments),n.children)}return t}function oo(t){return t instanceof Cn}function gE(t,n,e=null,i=null,r=new ro){let o=vE(t);return _E(o,n,e,i,r)}function vE(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new Ze(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=hE(i);return n??r}function _E(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return qv(o,o,o,e,i,r);let s=a1(n);if(s.toRoot())return qv(o,o,new Ze([],{}),e,i,r);let a=l1(s,o,t),l=a.processChildren?ac(a.segmentGroup,a.index,s.commands):bE(a.segmentGroup,a.index,s.commands);return qv(o,a.segmentGroup,l,e,i,r)}function Af(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function uc(t){return typeof t=="object"&&t!=null&&t.outlets}function eE(t,n,e){t||="\u0275";let i=new Cn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function qv(t,n,e,i,r,o){let s={};for(let[c,u]of Object.entries(i??{}))s[c]=Array.isArray(u)?u.map(f=>eE(c,f,o)):eE(c,u,o);let a;t===n?a=e:a=yE(t,n,e);let l=hE(pE(a));return new Cn(l,s,r)}function yE(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=yE(o,n,e)}),new Ze(t.segments,i)}var Rf=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Af(i[0]))throw new L(4003,!1);let r=i.find(uc);if(r&&r!==zO(i))throw new L(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function a1(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Rf(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Rf(e,n,i)}var fa=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function l1(t,n,e){if(t.isAbsolute)return new fa(n,!0,0);if(!e)return new fa(n,!1,NaN);if(e.parent===null)return new fa(e,!0,0);let i=Af(t.commands[0])?0:1,r=e.segments.length-1+i;return c1(e,r,t.numberOfDoubleDots)}function c1(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new L(4005,!1);r=i.segments.length}return new fa(i,!1,r-o)}function d1(t){return uc(t[0])?t[0].outlets:{[we]:t}}function bE(t,n,e){if(t??=new Ze([],{}),t.segments.length===0&&t.hasChildren())return ac(t,n,e);let i=u1(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ze(t.segments.slice(0,i.pathIndex),{});return o.children[we]=new Ze(t.segments.slice(i.pathIndex),t.children),ac(o,0,r)}else return i.match&&r.length===0?new Ze(t.segments,{}):i.match&&!t.hasChildren()?e_(t,n,e):i.match?ac(t,0,r):e_(t,n,e)}function ac(t,n,e){if(e.length===0)return new Ze(t.segments,{});{let i=d1(e),r={};if(Object.keys(i).some(o=>o!==we)&&t.children[we]&&t.numberOfChildren===1&&t.children[we].segments.length===0){let o=ac(t.children[we],n,e);return new Ze(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=bE(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new Ze(t.segments,r)}}function u1(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(uc(a))break;let l=`${a}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!nE(l,c,s))return o;i+=2}else{if(!nE(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function e_(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(uc(o)){let l=f1(o.outlets);return new Ze(i,l)}if(r===0&&Af(e[0])){let l=t.segments[n];i.push(new io(l.path,tE(e[0]))),r++;continue}let s=uc(o)?o.outlets[we]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Af(a)?(i.push(new io(s,tE(a))),r+=2):(i.push(new io(s,{})),r++)}return new Ze(i,{})}function f1(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=e_(new Ze([],{}),0,i))}),n}function tE(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function nE(t,n,e){return t==e.path&&Ki(n,e.parameters)}var lc="imperative",Qt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Qt||{}),Bn=class{id;url;constructor(n,e){this.id=n,this.url=e}},cs=class extends Bn{type=Qt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Mi=class extends Bn{urlAfterRedirects;type=Qt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},dn=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(dn||{}),fc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(fc||{}),ii=class extends Bn{reason;code;type=Qt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function CE(t){return t instanceof ii&&(t.code===dn.Redirect||t.code===dn.SupersededByNewNavigation)}var Er=class extends Bn{reason;code;type=Qt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},ds=class extends Bn{error;target;type=Qt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},mc=class extends Bn{urlAfterRedirects;state;type=Qt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Nf=class extends Bn{urlAfterRedirects;state;type=Qt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Of=class extends Bn{urlAfterRedirects;state;shouldActivate;type=Qt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Pf=class extends Bn{urlAfterRedirects;state;type=Qt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ff=class extends Bn{urlAfterRedirects;state;type=Qt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lf=class{route;type=Qt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},jf=class{route;type=Qt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Bf=class{snapshot;type=Qt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Vf=class{snapshot;type=Qt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Hf=class{snapshot;type=Qt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Uf=class{snapshot;type=Qt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ha=class{},hc=class{},pa=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function m1(t){return!(t instanceof ha)&&!(t instanceof pa)&&!(t instanceof hc)}var zf=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ba(this.rootInjector)}},ba=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new zf(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(te(et))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$f=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=t_(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=t_(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=n_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return n_(n,this._root).map(e=>e.value)}};function t_(t,n){if(t===n.value)return n;for(let e of n.children){let i=t_(t,e);if(i)return i}return null}function n_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=n_(t,e);if(i.length)return i.unshift(n),i}return[]}var jn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ua(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var pc=class extends $f{snapshot;constructor(n,e){super(n),this.snapshot=e,m_(this,n)}toString(){return this.snapshot.toString()}};function wE(t,n){let e=h1(t,n),i=new Lt([new io("",{})]),r=new Lt({}),o=new Lt({}),s=new Lt({}),a=new Lt(""),l=new Vn(i,r,s,a,o,we,t,e.root);return l.snapshot=e.root,new pc(new jn(l,[]),e)}function h1(t,n){let e={},i={},r={},s=new ga([],e,r,"",i,we,t,null,{},n);return new gc("",new jn(s,[]))}var Vn=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ee(c=>c[yc]))??W(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ee(n=>ls(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ee(n=>ls(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function f_(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:w(w({},n.params),t.params),data:w(w({},n.data),t.data),resolve:w(w(w(w({},t.data),n.data),r?.data),t._resolvedData)}:i={params:w({},t.params),data:w({},t.data),resolve:w(w({},t.data),t._resolvedData??{})},r&&EE(r)&&(i.resolve[yc]=r.title),i}var ga=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[yc]}constructor(n,e,i,r,o,s,a,l,c,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ls(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ls(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},gc=class extends $f{url;constructor(n,e){super(e),this.url=n,m_(this,e)}toString(){return DE(this._root)}};function m_(t,n){n.value._routerState=t,n.children.forEach(e=>m_(t,e))}function DE(t){let n=t.children.length>0?` { ${t.children.map(DE).join(", ")} } `:"";return`${t.value}${n}`}function Zv(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Ki(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Ki(n.params,e.params)||t.paramsSubject.next(e.params),UO(n.url,e.url)||t.urlSubject.next(e.url),Ki(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function i_(t,n){let e=Ki(t.params,n.params)&&qO(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||i_(t.parent,n.parent))}function EE(t){return typeof t.title=="string"||t.title===null}var xE=new b(""),bc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=we;activateEvents=new q;deactivateEvents=new q;attachEvents=new q;detachEvents=new q;routerOutletData=ff();parentContexts=d(ba);location=d(en);changeDetector=d(qe);inputBinder=d(Zf,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new L(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new L(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new L(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new L(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new r_(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ht]})}return t})(),r_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Vn?this.route:n===ba?this.childContexts:n===xE?this.outletData:this.parent.get(n,e)}},Zf=new b("");var h_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&G(0,"router-outlet")},dependencies:[bc],encapsulation:2})}return t})();function p_(t){let n=t.children&&t.children.map(p_),e=n?ce(w({},t),{children:n}):w({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==we&&(e.component=h_),e}function p1(t,n,e){let i=vc(t,n._root,e?e._root:void 0);return new pc(i,n)}function vc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=g1(t,n,e);return new jn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>vc(t,a)),s}}let i=v1(n.value),r=n.children.map(o=>vc(t,o));return new jn(i,r)}}function g1(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return vc(t,i,r);return vc(t,i)})}function v1(t){return new Vn(new Lt(t.url),new Lt(t.params),new Lt(t.queryParams),new Lt(t.fragment),new Lt(t.data),t.outlet,t.component,t)}var va=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},IE="ngNavigationCancelingError";function Gf(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=oo(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=SE(!1,dn.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function SE(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[IE]=!0,e.cancellationCode=n,e}function _1(t){return ME(t)&&oo(t.url)}function ME(t){return!!t&&t[IE]}var o_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Zv(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ua(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ua(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ua(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=ua(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Uf(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Vf(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Zv(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Zv(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},Wf=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ma=class{component;route;constructor(n,e){this.component=n,this.route=e}};function y1(t,n,e){let i=t._root,r=n?n._root:null;return sc(i,r,e,[i.value])}function b1(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ca(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Xh(t)?t:n.get(t):i}function sc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ua(n);return t.children.forEach(s=>{C1(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>cc(a,e.getContext(s),r)),r}function C1(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=w1(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Wf(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?sc(t,n,a?a.children:null,i,r):sc(t,n,e,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ma(a.outlet.component,s))}else s&&cc(n,a,r),r.canActivateChecks.push(new Wf(i)),o.component?sc(t,null,a?a.children:null,i,r):sc(t,null,e,i,r);return r}function w1(t,n,e){if(typeof e=="function")return qt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!as(t.url,n.url);case"pathParamsOrQueryParamsChange":return!as(t.url,n.url)||!Ki(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!i_(t,n)||!Ki(t.queryParams,n.queryParams);default:return!i_(t,n)}}function cc(t,n,e){let i=ua(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?n?cc(s,n.children.getContext(o),e):cc(s,null,e):cc(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ma(n.outlet.component,r)):e.canDeactivateChecks.push(new ma(null,r)):e.canDeactivateChecks.push(new ma(null,r))}function Cc(t){return typeof t=="function"}function D1(t){return typeof t=="boolean"}function E1(t){return t&&Cc(t.canLoad)}function x1(t){return t&&Cc(t.canActivate)}function I1(t){return t&&Cc(t.canActivateChild)}function S1(t){return t&&Cc(t.canDeactivate)}function M1(t){return t&&Cc(t.canMatch)}function TE(t){return t instanceof or||t?.name==="EmptyError"}var If=Symbol("INITIAL_VALUE");function _a(){return Rt(t=>rl(t.map(n=>n.pipe(dt(1),jt(If)))).pipe(ee(n=>{for(let e of n)if(e!==!0){if(e===If)return If;if(e===!1||T1(e))return e}return!0}),je(n=>n!==If),dt(1)))}function T1(t){return oo(t)||t instanceof va}function kE(t){return t.aborted?W(void 0).pipe(dt(1)):new be(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function AE(t){return Be(kE(t))}function k1(t){return Gt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?W(ce(w({},n),{guardsResult:!0})):A1(o,e,i).pipe(Gt(s=>s&&D1(s)?R1(e,r,t):W(s)),ee(s=>ce(w({},n),{guardsResult:s})))})}function A1(t,n,e){return mt(t).pipe(Gt(i=>L1(i.component,i.route,e,n)),sr(i=>i!==!0,!0))}function R1(t,n,e){return mt(n).pipe(Fo(i=>Li(O1(i.route.parent,e),N1(i.route,e),F1(t,i.path),P1(t,i.route))),sr(i=>i!==!0,!0))}function N1(t,n){return t!==null&&n&&n(new Hf(t)),W(!0)}function O1(t,n){return t!==null&&n&&n(new Bf(t)),W(!0)}function P1(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return W(!0);let i=e.map(r=>hi(()=>{let o=n._environmentInjector,s=Ca(r,o),a=x1(s)?s.canActivate(n,t):qt(o,()=>s(n,t));return us(a).pipe(sr())}));return W(i).pipe(_a())}function F1(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>b1(o)).filter(o=>o!==null).map(o=>hi(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=Ca(a,l),u=I1(c)?c.canActivateChild(e,t):qt(l,()=>c(e,t));return us(u).pipe(sr())});return W(s).pipe(_a())}));return W(r).pipe(_a())}function L1(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return W(!0);let o=r.map(s=>{let a=n._environmentInjector,l=Ca(s,a),c=S1(l)?l.canDeactivate(t,n,e,i):qt(a,()=>l(t,n,e,i));return us(c).pipe(sr())});return W(o).pipe(_a())}function j1(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return W(!0);let s=o.map(a=>{let l=Ca(a,t),c=E1(l)?l.canLoad(n,e):qt(t,()=>l(n,e)),u=us(c);return r?u.pipe(AE(r)):u});return W(s).pipe(_a(),RE(i))}function RE(t){return Ih(Wt(n=>{if(typeof n!="boolean")throw Gf(t,n)}),ee(n=>n===!0))}function B1(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return W(!0);let a=s.map(l=>{let c=Ca(l,t),u=M1(c)?c.canMatch(n,e,r):qt(t,()=>c(n,e,r));return us(u).pipe(AE(o))});return W(a).pipe(_a(),RE(i))}var Dr=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},_c=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function V1(t){throw new L(4e3,!1)}function H1(t){throw SE(!1,dn.GuardRejected)}var s_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[we])throw V1(`${n.redirectTo}`);r=r.children[we]}}async applyRedirectCommands(n,e,i,r,o){let s=await U1(e,r,o);if(s instanceof Cn)throw new _c(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new _c(a);return a}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Cn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,i,r)}),new Ze(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new L(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function U1(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return kf(us(qt(e,()=>i(n))))}function z1(t,n){return t.providers&&!t._injector&&(t._injector=zl(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Si(t){return t.outlet||we}function $1(t,n){let e=t.filter(i=>Si(i)===n);return e.push(...t.filter(i=>Si(i)!==n)),e}var a_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function NE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function G1(t,n,e,i,r,o,s){let a=OE(t,n,e);if(!a.matched)return W(a);let l=NE(o(a));return i=z1(n,i),B1(i,n,e,r,l,s).pipe(ee(c=>c===!0?a:w({},a_)))}function OE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?w({},a_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||oE)(e,t,n);if(!r)return w({},a_);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?w(w({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function iE(t,n,e,i,r){return e.length>0&&Z1(t,e,i,r)?{segmentGroup:new Ze(n,q1(i,new Ze(e,t.children))),slicedSegments:[]}:e.length===0&&Y1(t,e,i)?{segmentGroup:new Ze(t.segments,W1(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ze(t.segments,t.children),slicedSegments:e}}function W1(t,n,e,i){let r={};for(let o of e)if(Yf(t,n,o)&&!i[Si(o)]){let s=new Ze([],{});r[Si(o)]=s}return w(w({},i),r)}function q1(t,n){let e={};e[we]=n;for(let i of t)if(i.path===""&&Si(i)!==we){let r=new Ze([],{});e[Si(i)]=r}return e}function Z1(t,n,e,i){return e.some(r=>!Yf(t,n,r)||!(Si(r)!==we)?!1:!(i!==void 0&&Si(r)===i))}function Y1(t,n,e){return e.some(i=>Yf(t,n,i))}function Yf(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function X1(t,n,e){return n.length===0&&!t.children[e]}var l_=class{};async function Q1(t,n,e,i,r,o,s="emptyOnly",a){return new c_(t,n,e,i,r,s,o,a).recognize()}var K1=31,c_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new s_(this.urlSerializer,this.urlTree)}noMatchError(n){return new L(4002,`'${n.segmentGroup}'`)}async recognize(){let n=iE(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new jn(i,e),o=new gc("",r),s=gE(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new ga([],Object.freeze({}),Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),we,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,we,e),rootSnapshot:e}}catch(i){if(i instanceof _c)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Dr?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=await this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof jn?[s]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=i.children[l],u=$1(e,l),f=await this.processSegmentGroup(n,u,c,l,r);s.push(...f)}let a=PE(s);return J1(a),a}async processSegment(n,e,i,r,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,s,a)}catch(c){if(c instanceof Dr||TE(c))continue;throw c}if(X1(i,r,o))return new l_;throw new Dr(i)}async processSegmentAgainstRoute(n,e,i,r,o,s,a,l){if(Si(i)!==s&&(s===we||!Yf(r,o,i)))throw new Dr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,l);throw new Dr(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:f,remainingSegments:m}=OE(e,r,o);if(!l)throw new Dr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>K1&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let v=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,NE(h),n),S=await this.applyRedirects.lineralizeSegments(r,v);return this.processSegment(n,i,e,S.concat(m),s,!1,a)}createSnapshot(n,e,i,r,o){let s=new ga(i,r,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,tP(e),Si(e),e.component??e._loadedComponent??null,e,nP(e),n),a=f_(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=M=>this.createSnapshot(n,i,M.consumedSegments,M.parameters,s),l=await kf(G1(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new Dr(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:m,remainingSegments:h}=l,v=this.createSnapshot(n,i,m,f,s),{segmentGroup:S,slicedSegments:R}=iE(e,m,h,c,o);if(R.length===0&&S.hasChildren()){let M=await this.processChildren(u,c,S,v);return new jn(v,M)}if(c.length===0&&R.length===0)return new jn(v,[]);let P=Si(i)===o,N=await this.processSegment(u,c,S,R,P?we:o,!0,v);return new jn(v,N instanceof jn?[N]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await kf(j1(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw H1(e)}return{routes:[],injector:n}}};function J1(t){t.sort((n,e)=>n.value.outlet===we?-1:e.value.outlet===we?1:n.value.outlet.localeCompare(e.value.outlet))}function eP(t){let n=t.value.routeConfig;return n&&n.path===""}function PE(t){let n=[],e=new Set;for(let i of t){if(!eP(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=PE(i.children);n.push(new jn(i.value,r))}return n.filter(i=>!e.has(i))}function tP(t){return t.data||{}}function nP(t){return t.resolve||{}}function iP(t,n,e,i,r,o,s){return Gt(async a=>{let{state:l,tree:c}=await Q1(t,n,e,i,a.extractedUrl,r,o,s);return ce(w({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function rP(t){return Gt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return W(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of FE(a))o.add(l);let s=0;return mt(o).pipe(Fo(a=>r.has(a)?oP(a,e,t):(a.data=f_(a,a.parent,t).resolve,W(void 0))),Wt(()=>s++),Bd(1),Gt(a=>s===o.size?W(n):St))})}function FE(t){let n=t.children.map(e=>FE(e)).flat();return[t,...n]}function oP(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!EE(i)&&(r[yc]=i.title),hi(()=>(t.data=f_(t,t.parent,e).resolve,sP(r,t,n).pipe(ee(o=>(t._resolvedData=o,t.data=w(w({},t.data),o),null)))))}function sP(t,n,e){let i=Xv(t);if(i.length===0)return W({});let r={};return mt(i).pipe(Gt(o=>aP(t[o],n,e).pipe(sr(),Wt(s=>{if(s instanceof va)throw Gf(new ro,s);r[o]=s}))),Bd(1),ee(()=>r),pi(o=>TE(o)?St:Oo(o)))}function aP(t,n,e){let i=n._environmentInjector,r=Ca(t,i),o=r.resolve?r.resolve(n,e):qt(i,()=>r(n,e));return us(o)}function rE(t){return Rt(n=>{let e=t(n);return e?mt(e).pipe(ee(()=>n)):W(n)})}var g_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===we);return i}getResolvedTitleForRoute(e){return e.data[yc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(LE),providedIn:"root"})}return t})(),LE=(()=>{class t extends g_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(te(QD))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wa=new b("",{factory:()=>({})}),wc=new b(""),jE=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(_v);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await aE(qt(e,()=>i.loadComponent())),s=await HE(VE(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await BE(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function BE(t,n,e,i){let r=await aE(qt(e,()=>t.loadChildren())),o=await HE(VE(r)),s;o instanceof tf||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),i&&i(t);let a,l,c=!1,u;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,u=s,l=a.get(wc,[],{optional:!0,self:!0}).flat()),{routes:l.map(p_),injector:a,factory:u}}function lP(t){return t&&typeof t=="object"&&"default"in t}function VE(t){return lP(t)?t.default:t}async function HE(t){return t}var Xf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(cP),providedIn:"root"})}return t})(),cP=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),UE=new b("");var dP=()=>{},zE=new b(""),$E=(()=>{class t{currentNavigation=de(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=de(null);events=new T;transitionAbortWithErrorSubject=new T;configLoader=d(jE);environmentInjector=d(et);destroyRef=d(vn);urlSerializer=d(ya);rootContexts=d(ba);location=d(to);inputBindingEnabled=d(Zf,{optional:!0})!==null;titleStrategy=d(g_);options=d(wa,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(Xf);createViewTransition=d(UE,{optional:!0});navigationErrorHandler=d(zE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>W(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Lf(r)),i=r=>this.events.next(new jf(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Ge(()=>{this.transitions?.next(ce(w({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Lt(null),this.transitions.pipe(je(i=>i!==null),Rt(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return W(i).pipe(Rt(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",dn.SupersededByNewNavigation),St;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?ce(w({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new Er(a.id,this.urlSerializer.serialize(a.rawUrl),"",fc.IgnoredSameUrlNavigation)),a.resolve(!1),St;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return W(a).pipe(Rt(f=>(this.events.next(new cs(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?St:Promise.resolve(f))),iP(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Wt(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=f.urlAfterRedirects,m)),this.events.next(new hc)}),Rt(f=>mt(i.routesRecognizeHandler.deferredHandle??W(void 0)).pipe(ee(()=>f))),Wt(()=>{let f=new mc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:m,source:h,restoredState:v,extras:S}=a,R=new cs(f,this.urlSerializer.serialize(m),h,v);this.events.next(R);let P=wE(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=ce(w({},a),{targetSnapshot:P,urlAfterRedirects:m,extras:ce(w({},S),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(N=>(N.finalUrl=m,N)),W(i)}else return this.events.next(new Er(a.id,this.urlSerializer.serialize(a.extractedUrl),"",fc.IgnoredByUrlHandlingStrategy)),a.resolve(!1),St}),ee(a=>{let l=new Nf(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=i=ce(w({},a),{guards:y1(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),k1(a=>this.events.next(a)),Rt(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Gf(this.urlSerializer,a.guardsResult);let l=new Of(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return St;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",dn.GuardRejected),St;if(a.guards.canActivateChecks.length===0)return W(a);let c=new Pf(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return St;let u=!1;return W(a).pipe(rP(this.paramsInheritanceStrategy),Wt({next:()=>{u=!0;let f=new Ff(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(a,"",dn.NoDataFromResolver)}}))}),rE(a=>{let l=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let m=u._environmentInjector;f.push(this.configLoader.loadComponent(m,u.routeConfig).then(h=>{u.component=h}))}for(let m of u.children)f.push(...l(m));return f},c=l(a.targetSnapshot.root);return c.length===0?W(a):mt(Promise.all(c).then(()=>a))}),rE(()=>this.afterPreactivation()),Rt(()=>{let{currentSnapshot:a,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?mt(c).pipe(ee(()=>i)):W(i)}),dt(1),Rt(a=>{let l=p1(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=ce(w({},a),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new ha);let c=i.beforeActivateHandler.deferredHandle;return c?mt(c.then(()=>a)):W(a)}),Wt(a=>{new o_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=dP,l)),this.lastSuccessfulNavigation.set(Ge(this.currentNavigation)),this.events.next(new Mi(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),Be(kE(o.signal).pipe(je(()=>!r&&!i.targetRouterState),Wt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",dn.Aborted)}))),Wt({complete:()=>{r=!0}}),Be(this.transitionAbortWithErrorSubject.pipe(Wt(a=>{throw a}))),ji(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",dn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),pi(a=>{if(r=!0,this.destroyed)return i.resolve(!1),St;if(ME(a))this.events.next(new ii(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),_1(a)?this.events.next(new pa(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let l=new ds(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let c=qt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof va){let{message:u,cancellationCode:f}=Gf(this.urlSerializer,c);this.events.next(new ii(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new pa(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return St}))}))}cancelNavigationTransition(e,i,r){let o=new ii(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Ge(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uP(t){return t!==lc}var GE=new b("");var WE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(fP),providedIn:"root"})}return t})(),qf=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},fP=(()=>{class t extends qf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qf=(()=>{class t{urlSerializer=d(ya);options=d(wa,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(to);urlHandlingStrategy=d(Xf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Cn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof Cn?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=wE(null,d(et));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(mP),providedIn:"root"})}return t})(),mP=(()=>{class t extends Qf{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof cs?this.updateStateMemento():e instanceof Er?this.commitTransition(i):e instanceof mc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ha?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ii&&!CE(e)?this.restoreHistory(i):e instanceof ds?this.restoreHistory(i,!0):e instanceof Mi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let l=this.browserPageId,c=w(w({},a),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=w(w({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?w({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):w({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function v_(t,n){t.events.pipe(je(e=>e instanceof Mi||e instanceof ii||e instanceof ds||e instanceof Er),ee(e=>e instanceof Mi||e instanceof Er?0:(e instanceof ii?e.code===dn.Redirect||e.code===dn.SupersededByNewNavigation:!1)?2:1),je(e=>e!==2),dt(1)).subscribe(()=>{n()})}var Tt=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(rf);stateManager=d(Qf);options=d(wa,{optional:!0})||{};pendingTasks=d(Gi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d($E);urlSerializer=d(ya);location=d(to);urlHandlingStrategy=d(Xf);injector=d(et);_events=new T;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(WE);injectorCleanup=d(GE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(wc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Zf,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Se;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Ge(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof ii&&i.code!==dn.Redirect&&i.code!==dn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Mi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof pa){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=w({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||uP(r.source)},s);this.scheduleNavigation(a,lc,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}m1(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),lc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=ce(w({},o),{browserUrl:e})),r){let c=w({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(a);this.scheduleNavigation(l,i,s,o).catch(c=>{this.disposed||this.injector.get(In)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ge(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(p_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=w(w({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let m=r?r.snapshot:this.routerState.snapshot.root;f=vE(m)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return _E(f,e,u,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=oo(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,lc,null,i)}navigate(e,i={skipLocationChange:!1}){return hP(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(lr(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=w({},d_):i===!1?r=w({},dc):r=w(w({},dc),i),oo(e))return Qv(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Qv(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,m)=>{a=f,l=m});let u=this.pendingTasks.add();return v_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function hP(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new L(4008,!1)}var gP=(()=>{class t{router=d(Tt);stateManager=d(Qf);fragment=de("");queryParams=de({});path=de("");serializer=d(ya);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Mi&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Cn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),un=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new Jr("href"),{optional:!0});reactiveHref=bv(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Ge(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Ge(this._target)}_target=de(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Ge(this._queryParams)}_queryParams=de(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Ge(this._fragment)}_fragment=de(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Ge(this._queryParamsHandling)}_queryParamsHandling=de(void 0);set state(e){this._state.set(e)}get state(){return Ge(this._state)}_state=de(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Ge(this._info)}_info=de(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Ge(this._relativeTo)}_relativeTo=de(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Ge(this._preserveFragment)}_preserveFragment=de(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Ge(this._skipLocationChange)}_skipLocationChange=de(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Ge(this._replaceUrl)}_replaceUrl=de(!1);isAnchorElement;onChanges=new T;applicationErrorHandler=d(In);options=d(wa,{optional:!0});reactiveRouterState=d(gP);constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=de(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(oo(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=Yt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:oo(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Ge(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(ae(Tt),ae(Vn),Fl("tabindex"),ae($e),ae($),ae(sa))};static \u0275dir=H({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&U("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&ge("href",r.reactiveHref(),Gg)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ue],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ue],replaceUrl:[2,"replaceUrl","replaceUrl",ue],routerLink:"routerLink"},features:[ht]})}return t})(),__=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new q;link=d(un,{optional:!0});constructor(e,i,r,o){this.router=e,this.element=i,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(s=>{s instanceof Mi&&this.update()})}ngAfterContentInit(){W(this.links.changes,W(null)).pipe(jr()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=mt(e).pipe(jr()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){let i=Array.isArray(e)?e:e.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=vP(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?w({},d_):w({},dc);return r=>{let o=r.urlTree;return o?Ge(u_(o,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(i){return new(i||t)(ae(Tt),ae($),ae($e),ae(qe))};static \u0275dir=H({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,o){if(i&1&&Mn(o,un,5),i&2){let s;ve(s=_e())&&(r.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[ht]})}return t})();function vP(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var _P=new b("");function y_(t,...n){return vi([{provide:wc,multi:!0,useValue:t},[],{provide:Vn,useFactory:yP},{provide:sf,multi:!0,useFactory:bP},n.map(e=>e.\u0275providers)])}function yP(){return d(Tt).routerState.root}function bP(){let t=d(K);return n=>{let e=t.get(_n);if(n!==e.components[0])return;let i=t.get(Tt),r=t.get(CP);t.get(wP)===1&&i.initialNavigation(),t.get(DP,null,{optional:!0})?.setUpPreloading(),t.get(_P,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var CP=new b("",{factory:()=>new T}),wP=new b("",{factory:()=>1});var DP=new b("");var Kf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-home"]],decls:2,vars:0,template:function(e,i){e&1&&(gt(0,"p"),I(1,"home works!"),Dt())},encapsulation:2})};var Ji={production:!0,apiUrl:"api/"};var so=class t{http=d(ni);baseUrl=Ji.apiUrl;brands=[];types=[];getProducts(n){let e=new Ln;return e=e.append("pageSize",n.pageSize),e=e.append("pageNumber",n.pageNumber),n.brands&&n.brands.length>0&&(e=e.append("brands",n.brands.join(","))),n.types&&n.types.length>0&&(e=e.append("types",n?.types.join(","))),n.sort&&(e=e.append("sort",n?.sort)),n.search&&(e=e.append("search",n.search)),this.http.get(this.baseUrl+"products",{params:e})}getProduct(n){return this.http.get(this.baseUrl+"products/"+n)}getBrands(){this.http.get(this.baseUrl+"products/brands").subscribe({next:n=>this.brands=n,error:n=>console.log(n)})}getTypes(){this.http.get(this.baseUrl+"products/types").subscribe({next:n=>this.types=n,error:n=>console.log(n)})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var xP=new b("cdk-dir-doc",{providedIn:"root",factory:()=>d(Z)}),IP=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qE(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?IP.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var wn=(()=>{class t{get value(){return this.valueSignal()}valueSignal=de("ltr");change=new q;constructor(){let e=d(xP,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(qE(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var SP=["*"];var MP=new b("MAT_CARD_CONFIG"),ao=(()=>{class t{appearance;constructor(){let e=d(MP,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&re("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:SP,decls:1,vars:0,template:function(i,r){i&1&&(yt(),Ae(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})();var ZE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var YE=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&re("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})();function fs(t){return t.buttons===0||t.detail===0}function ms(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var b_;function XE(){if(b_==null){let t=typeof document<"u"?document.head:null;b_=!!(t&&(t.createShadowRoot||t.attachShadow))}return b_}function C_(t){if(XE()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function hs(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function rn(t){return t.composedPath?t.composedPath()[0]:t.target}var w_;try{w_=typeof Intl<"u"&&Intl.v8BreakIterator}catch{w_=!1}var Ue=(()=>{class t{_platformId=d(ts);isBrowser=this._platformId?RD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||w_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Dc;function QE(){if(Dc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Dc=!0}))}finally{Dc=Dc||!1}return Dc}function Da(t){return QE()?t:!!t.capture}function Hn(t,n=0){return KE(t)?Number(t):arguments.length===2?n:0}function KE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Dn(t){return t instanceof $?t.nativeElement:t}var JE=new b("cdk-input-modality-detector-options"),ex={ignoreKeys:[18,17,224,91,16]},tx=650,D_={passive:!0,capture:!0},nx=(()=>{class t{_platform=d(Ue);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Lt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=rn(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<tx||(this._modality.next(fs(e)?"keyboard":"mouse"),this._mostRecentTarget=rn(e))};_onTouchstart=e=>{if(ms(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=rn(e)};constructor(){let e=d(j),i=d(Z),r=d(JE,{optional:!0});if(this._options=w(w({},ex),r),this.modalityDetected=this._modality.pipe(sl(1)),this.modalityChanged=this.modalityDetected.pipe(jd()),this._platform.isBrowser){let o=d(Nt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,D_),o.listen(i,"mousedown",this._onMousedown,D_),o.listen(i,"touchstart",this._onTouchstart,D_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ec=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Ec||{}),ix=new b("cdk-focus-monitor-default-options"),Jf=Da({passive:!0,capture:!0}),er=(()=>{class t{_ngZone=d(j);_platform=d(Ue);_inputModalityDetector=d(nx);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(Z);_stopInputModalityDetector=new T;constructor(){let e=d(ix,{optional:!0});this._detectionMode=e?.detectionMode||Ec.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=rn(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Dn(e);if(!this._platform.isBrowser||r.nodeType!==1)return W();let o=C_(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new T,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Dn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Dn(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ec.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Ec.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?tx:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=rn(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Jf),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Jf)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Be(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Jf),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Jf),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var em=new WeakMap,Et=(()=>{class t{_appRef;_injector=d(K);_environmentInjector=d(et);load(e){let i=this._appRef=this._appRef||this._injector.get(_n),r=em.get(i);r||(r={loaders:new Set,refs:[]},em.set(i,r),i.onDestroy(()=>{em.get(i)?.refs.forEach(o=>o.destroy()),em.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(mf(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),tm;function TP(){if(tm===void 0&&(tm=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(tm=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return tm}function ps(t){return TP()?.createHTML(t)||t}function rx(t,n,e){let i=e.sanitize(Ht.HTML,n);t.innerHTML=ps(i||"")}function Ea(t){return Array.isArray(t)?t:[t]}var ox=new Set,gs,xa=(()=>{class t{_platform=d(Ue);_nonce=d(ns,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):AP}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&kP(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kP(t,n){if(!ox.has(t))try{gs||(gs=document.createElement("style"),n&&gs.setAttribute("nonce",n),gs.setAttribute("type","text/css"),document.head.appendChild(gs)),gs.sheet&&(gs.sheet.insertRule(`@media ${t} {body{ }}`,0),ox.add(t))}catch(e){console.error(e)}}function AP(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var E_=(()=>{class t{_mediaMatcher=d(xa);_zone=d(j);_queries=new Map;_destroySubject=new T;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return sx(Ea(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=sx(Ea(e)).map(s=>this._registerQuery(s).observable),o=rl(r);return o=Li(o.pipe(dt(1)),o.pipe(sl(1),Lo(0))),o.pipe(ee(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new be(s=>{let a=l=>this._zone.run(()=>s.next(l));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(jt(i),ee(({matches:s})=>({query:e,matches:s})),Be(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sx(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function RP(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var NP=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),OP=(()=>{class t{_mutationObserverFactory=d(NP);_observedElements=new Map;_ngZone=d(j);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Dn(e);return new be(r=>{let s=this._observeElement(i).pipe(ee(a=>a.filter(l=>!RP(l))),je(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new T,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ax=(()=>{class t{_contentObserver=d(OP);_elementRef=d($);event=new q;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Hn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Lo(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ue],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})();var Ia=(()=>{class t{_platform=d(Ue);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return FP(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=PP($P(e));if(i&&(lx(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=lx(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!UP(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return zP(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function PP(t){try{return t.frameElement}catch{return null}}function FP(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function LP(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function jP(t){return VP(t)&&t.type=="hidden"}function BP(t){return HP(t)&&t.hasAttribute("href")}function VP(t){return t.nodeName.toLowerCase()=="input"}function HP(t){return t.nodeName.toLowerCase()=="a"}function cx(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function lx(t){if(!cx(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function UP(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function zP(t){return jP(t)?!1:LP(t)||BP(t)||t.hasAttribute("contenteditable")||cx(t)}function $P(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var nm=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Ot(n,{injector:this._injector}):setTimeout(n)}},x_=(()=>{class t{_checker=d(Ia);_ngZone=d(j);_document=d(Z);_injector=d(K);constructor(){d(Et).load(lo)}create(e,i=!1){return new nm(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dx=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),ux=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),GP=0,xc=(()=>{class t{_ngZone=d(j);_defaultOptions=d(ux,{optional:!0});_liveElement;_document=d(Z);_sanitizer=d(rc);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(dx,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,s;return i.length===1&&typeof i[0]=="number"?s=i[0]:[o,s]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:rx(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${GP++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var WP=200,im=class{_letterKeyStream=new T;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new T;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:WP;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Wt(e=>this._pressedLetters.push(e)),Lo(n),je(()=>this._pressedLetters.length>0),ee(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ft(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Sa=class{_items;_activeItemIndex=de(-1);_activeItem=de(null);_wrap=!1;_typeaheadSubscription=Se.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof pr?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Yi(n)&&(this._effectRef=hr(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new T;change=new T;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new im(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Ft(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Yi(this._items)?this._items():this._items instanceof pr?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var kc=class extends Sa{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var vs=class extends Sa{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var I_={},at=class t{_appId=d(Zr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),I_.hasOwnProperty(n)||(I_[n]=0),`${n}${e?t._infix+"-":""}${I_[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var hx=" ";function T_(t,n,e){let i=sm(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(hx)))}function am(t,n,e){let i=sm(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(hx)):t.removeAttribute(n)}function sm(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var px="cdk-describedby-message",om="cdk-describedby-host",M_=0,lm=(()=>{class t{_platform=d(Ue);_document=d(Z);_messageRegistry=new Map;_messagesContainer=null;_id=`${M_++}`;constructor(){d(Et).load(lo),this._id=d(Zr)+"-"+M_++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=S_(i,r);typeof i!="string"?(fx(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=S_(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${om}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(om);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");fx(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(S_(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=sm(e,"aria-describedby").filter(r=>r.indexOf(px)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);T_(e,"aria-describedby",r.messageElement.id),e.setAttribute(om,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,am(e,"aria-describedby",r.messageElement.id),e.removeAttribute(om)}_isElementDescribedByMessage(e,i){let r=sm(e,"aria-describedby"),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function S_(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function fx(t,n){t.id||(t.id=`${px}-${n}-${M_++}`)}var _s;function gx(){if(_s==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return _s=!1,_s;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)_s=!0;else{let t=Element.prototype.scrollTo;t?_s=!/\{\s*\[native code\]\s*\}/.test(t.toString()):_s=!1}}return _s}function k_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ma,vx=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function A_(){if(Ma)return Ma;if(typeof document!="object"||!document)return Ma=new Set(vx),Ma;let t=document.createElement("input");return Ma=new Set(vx.filter(n=>(t.setAttribute("type",n),t.type===n))),Ma}var _x={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var qP=new b("MATERIAL_ANIMATIONS"),yx=null;function R_(){return d(qP,{optional:!0})?.animationsDisabled||d(Ll,{optional:!0})==="NoopAnimations"?"di-disabled":(yx??=d(xa).matchMedia("(prefers-reduced-motion)").matches,yx?"reduced-motion":"enabled")}function nt(){return R_()!=="enabled"}function kt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function At(t){return t!=null&&`${t}`!="false"}var ri=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(ri||{}),N_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ri.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},bx=Da({passive:!0,capture:!0}),O_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,bx)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,bx)))}_delegateEventHandler=n=>{let e=rn(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Ac={enterDuration:225,exitDuration:150},ZP=800,Cx=Da({passive:!0,capture:!0}),wx=["mousedown","touchstart"],Dx=["mouseup","mouseleave","touchend","touchcancel"],YP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),ys=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new O_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Dn(i)),o&&o.get(Et).load(YP)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=w(w({},Ac),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||XP(n,e,r),a=n-r.left,l=e-r.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${a-s}px`,u.style.top=`${l-s}px`,u.style.height=`${s*2}px`,u.style.width=`${s*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),m=f.transitionProperty,h=f.transitionDuration,v=m==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,S=new N_(this,u,i,v);u.style.transform="scale3d(1, 1, 1)",S.state=ri.FADING_IN,i.persistent||(this._mostRecentTransientRipple=S);let R=null;return!v&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let P=()=>{R&&(R.fallbackTimer=null),clearTimeout(M),this._finishRippleTransition(S)},N=()=>this._destroyRipple(S),M=setTimeout(N,c+100);u.addEventListener("transitionend",P),u.addEventListener("transitioncancel",N),R={onTransitionEnd:P,onTransitionCancel:N,fallbackTimer:M}}),this._activeRipples.set(S,R),(v||!c)&&this._finishRippleTransition(S),S}fadeOutRipple(n){if(n.state===ri.FADING_OUT||n.state===ri.HIDDEN)return;let e=n.element,i=w(w({},Ac),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=ri.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Dn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,wx.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Dx.forEach(e=>{this._triggerElement.addEventListener(e,this,Cx)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===ri.FADING_IN?this._startFadeOutTransition(n):n.state===ri.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=ri.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=ri.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=fs(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ZP;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ms(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===ri.VISIBLE||n.config.terminateOnPointerUp&&n.state===ri.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(wx.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Dx.forEach(e=>n.removeEventListener(e,this,Cx)),this._pointerUpEventsRegistered=!1))}};function XP(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Rc=new b("mat-ripple-global-options"),cm=(()=>{class t{_elementRef=d($);_animationsDisabled=nt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(j),i=d(Ue),r=d(Rc,{optional:!0}),o=d(K);this._globalOptions=r||{},this._rippleRenderer=new ys(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:w(w(w({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,w(w({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,w(w({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&re("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var QP={capture:!0},KP=["focus","mousedown","mouseenter","touchstart"],P_="mat-ripple-loader-uninitialized",F_="mat-ripple-loader-class-name",Ex="mat-ripple-loader-centered",dm="mat-ripple-loader-disabled",xx=(()=>{class t{_document=d(Z);_animationsDisabled=nt();_globalRippleOptions=d(Rc,{optional:!0});_platform=d(Ue);_ngZone=d(j);_injector=d(K);_eventCleanups;_hosts=new Map;constructor(){let e=d(Nt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>KP.map(i=>e.listen(this._document,i,this._onInteraction,QP)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(P_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(F_))&&e.setAttribute(F_,i.className||""),i.centered&&e.setAttribute(Ex,""),i.disabled&&e.setAttribute(dm,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(dm,""):e.removeAttribute(dm)}_onInteraction=e=>{let i=rn(e);if(i instanceof HTMLElement){let r=i.closest(`[${P_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(F_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ac.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Ac.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(dm),rippleConfig:{centered:e.hasAttribute(Ex),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new ys(a,this._ngZone,i,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(P_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var co=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var JP=["mat-icon-button",""],eF=["*"],tF=new b("MAT_BUTTON_CONFIG");function Ix(t){return t==null?void 0:Fn(t)}var L_=(()=>{class t{_elementRef=d($);_ngZone=d(j);_animationsDisabled=nt();_config=d(tF,{optional:!0});_focusMonitor=d(er);_cleanupClick;_renderer=d($e);_rippleLoader=d(xx);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(Et).load(co);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(ge("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Pn(r.color?"mat-"+r.color:""),re("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ue],disabled:[2,"disabled","disabled",ue],ariaDisabled:[2,"aria-disabled","ariaDisabled",ue],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ue],tabIndex:[2,"tabIndex","tabIndex",Ix],_tabindex:[2,"tabindex","_tabindex",Ix]}})}return t})(),bs=(()=>{class t extends L_{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ve],attrs:JP,ngContentSelectors:eF,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(yt(),tn(0,"span",0),Ae(1),tn(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var nF=["matButton",""],iF=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],rF=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Sx=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),pt=(()=>{class t extends L_{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=oF(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Sx.get(this._appearance):null,o=Sx.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ve],attrs:nF,ngContentSelectors:rF,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(yt(iF),tn(0,"span",0),Ae(1),gt(2,"span",1),Ae(3,1),Dt(),Ae(4,2),tn(5,"span",2)(6,"span",3)),i&2&&re("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function oF(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Mx=pt;function Tx(t){return Error(`Unable to find icon with the name "${t}"`)}function sF(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function kx(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function Ax(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var xr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},Nx=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new xr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(Ht.HTML,r);if(!s)throw Ax(r);let a=ps(s);return this._addSvgIconConfig(e,i,new xr("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new xr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Ht.HTML,i);if(!o)throw Ax(i);let s=ps(o);return this._addSvgIconSetConfig(e,new xr("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Ht.RESOURCE_URL,e);if(!i)throw kx(e);let r=this._cachedIconsByUrl.get(i);return r?W(um(r)):this._loadSvgIconFromConfig(new xr(e,null)).pipe(Wt(o=>this._cachedIconsByUrl.set(i,o)),ee(o=>um(o)))}getNamedSvgIcon(e,i=""){let r=Rx(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):Oo(Tx(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?W(um(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ee(i=>um(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return W(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(pi(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Ht.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),W(null)})));return Po(o).pipe(ee(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw Tx(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Wt(i=>e.svgText=i),ee(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?W(null):this._fetchIcon(e).pipe(Wt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(ps("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(ps("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw sF();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(Ht.RESOURCE_URL,i);if(!s)throw kx(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(ee(c=>ps(c)),ji(()=>this._inProgressUrlFetches.delete(s)),ol());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(Rx(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return aF(o)?new xr(o.url,null,o.options):new xr(o,null)}}static \u0275fac=function(i){return new(i||t)(te(ni,8),te(rc),te(Z,8),te(hn))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function um(t){return t.cloneNode(!0)}function Rx(t,n){return t+":"+n}function aF(t){return!!(t.url&&t.options)}var lF=["*"],cF=new b("MAT_ICON_DEFAULT_OPTIONS"),dF=new b("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(Z),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Ox=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],uF=Ox.map(t=>`[${t}]`).join(", "),fF=/^url\(['"]?#(.*?)['"]?\)$/,Tn=(()=>{class t{_elementRef=d($);_iconRegistry=d(Nx);_location=d(dF);_errorHandler=d(hn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Se.EMPTY;constructor(){let e=d(new Jr("aria-hidden"),{optional:!0}),i=d(cF,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(uF),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)Ox.forEach(s=>{let a=i[o],l=a.getAttribute(s),c=l?l.match(fF):null;if(c){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:s,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(dt(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(ge("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Pn(r.color?"mat-"+r.color:""),re("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ue],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:lF,decls:1,vars:0,template:function(i,r){i&1&&(yt(),Ae(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})();var Px="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var Fx=(t=21)=>{let n="",e=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)n+=Px[e[t]&63];return n};var fm=class{id=Fx();items=[]};var Kt=class t{baseUrl=Ji.apiUrl;http=d(ni);cart=de(null);itemCount=Yt(()=>{let n=this.cart();if(n)return n.items.reduce((e,i)=>e+i.quantity,0)});containsItems(){let n=this.cart();return n?n.items.reduce((e,i)=>e+i.quantity,0)>0:!1}totals=Yt(()=>{let n=this.cart();if(!n)return null;let e=n.items.reduce((o,s)=>o+s.price*s.quantity,0),i=0,r=0;return{subTotal:e,shipping:i,discount:r,total:e+i-r}});getCart(n){return this.http.get(this.baseUrl+"cart?id="+n).pipe(ee(e=>(this.cart.set(e),e)))}setCart(n){this.http.post(this.baseUrl+"cart",n).subscribe({next:e=>this.cart.set(e)})}addItemToCart(n,e=1){let i=this.cart()??this.createCart();this.isProduct(n)&&(n=this.mapProductToCartItem(n)),i.items=this.addOrUpdateItem(i.items,n,e),this.setCart(i)}removeItemFromCart(n,e=1){let i=this.cart();if(!i)return;let r=i.items.findIndex(o=>o.productId===n);r!==-1&&(i.items[r].quantity>e?i.items[r].quantity-=e:i.items.splice(r,1),i.items.length<=0?this.deleteCart():this.setCart(i))}deleteCart(){this.http.delete(this.baseUrl+"cart?id="+this.cart()?.id).subscribe({next:()=>{localStorage.removeItem("cart_id"),this.cart.set(null)}})}addOrUpdateItem(n,e,i){let r=n.findIndex(o=>o.productId===e.productId);return r===-1?(e.quantity=i,n.push(e)):n[r].quantity+=i,n}mapProductToCartItem(n){return{productId:n.id,productName:n.name,price:n.price,pictureUrl:n.pictureUrl,type:n.type,brand:n.brand,quantity:0}}isProduct(n){return n.id!==void 0}createCart(){let n=new fm;return localStorage.setItem("cart_id",n.id),n}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};function mF(t,n){if(t&1){let e=nn();p(0,"mat-card",0),G(1,"img",1),p(2,"mat-card-content",2)(3,"h2",3),I(4),g(),p(5,"p",4),I(6),Jn(7,"currency"),g()(),p(8,"mat-card-actions",5),U("click",function(r){return r.stopPropagation()}),p(9,"button",6),U("click",function(){rt(e);let r=B();return ot(r.cartService.addItemToCart(r.product))}),p(10,"mat-icon"),I(11,"add_shopping_cart"),g(),I(12," Add To Cart "),g()()()}if(t&2){let e=B();z("routerLink",is("/shop/",e.product.id)),_(),z("src",Ii(e.product.pictureUrl),Yr)("alt",is("Image for ",e.product.name)),_(3),He(e.product.name),_(2),He(ei(7,8,e.product.price))}}var mm=class t{product;cartService=d(Kt);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["appearance","raised",1,"product-card",3,"routerLink"],[1,"rounded-t-lg",3,"src","alt"],[1,"mt-2"],[1,"text-sm","font-semibold","uppercase"],[1,"font-light"],[3,"click"],["mat-stroked-button","",1,"w-full",3,"click"]],template:function(e,i){e&1&&Y(0,mF,13,10,"mat-card",0),e&2&&X(i.product?0:-1)},dependencies:[ao,ZE,YE,Mx,Tn,un,wr],styles:[".product-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 4px 8px #0003;cursor:pointer}"]})};var hF=20,Ta=(()=>{class t{_ngZone=d(j);_platform=d(Ue);_renderer=d(Nt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new T;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=hF){return this._platform.isBrowser?new be(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ld(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):W()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(je(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Dn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pF=20,uo=(()=>{class t{_platform=d(Ue);_listeners;_viewportSize=null;_change=new T;_document=d(Z);constructor(){let e=d(j),i=d(Nt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=pF){return e>0?this._change.pipe(Ld(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Nc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Ti=class extends Nc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},ki=class extends Nc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},j_=class extends Nc{element;constructor(n){super(),this.element=n instanceof $?n.nativeElement:n}},fo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Ti)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ki)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof j_)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Oc=class extends fo{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Zi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||K.NULL,o=r.get(et,i.injector);e=mf(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var mo=(()=>{class t extends fo{_moduleRef=d(Zi,{optional:!0});_document=d(Z);_viewContainerRef=d(en);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new q;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ve]})}return t})();var Lx=gx();function Pc(t){return new hm(t.get(uo),t.get(Z))}var hm=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=kt(-this._previousScrollPosition.left),n.style.top=kt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Lx&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Lx&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};var pm=class{enable(){}disable(){}attach(){}};function B_(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function jx(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function ho(t,n){return new gm(t.get(Ta),t.get(uo),t.get(j),n)}var gm=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();B_(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Ai=class{positionStrategy;scrollStrategy=new pm;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var vm=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var $x=(()=>{class t{_attachedOverlays=[];_document=d(Z);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gx=(()=>{class t extends $x{_ngZone=d(j);_renderer=d(Nt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wx=(()=>{class t extends $x{_platform=d(Ue);_ngZone=d(j);_renderer=d(Nt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=rn(e)};_clickListener=e=>{let i=rn(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(Bx(a.overlayElement,i)||Bx(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Bx(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var qx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),bm=(()=>{class t{_platform=d(Ue);_containerElement;_document=d(Z);_styleLoader=d(Et);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||k_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),k_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(qx)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),V_=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function U_(t){return t&&t.nodeType===1}var ka=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new T;_attachments=new T;_detachments=new T;_positionStrategy;_scrollStrategy;_locationChanges=Se.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new T;_outsidePointerEvents=new T;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,l,c,u=!1,f,m){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=f,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ot(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=w(w({},this._config),n),this._updateElementSize()}setDirection(n){this._config=ce(w({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=kt(this._config.width),n.height=kt(this._config.height),n.minWidth=kt(this._config.minWidth),n.minHeight=kt(this._config.minHeight),n.maxWidth=kt(this._config.maxWidth),n.maxHeight=kt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;U_(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new V_(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Ea(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ot(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Vx="cdk-overlay-connected-position-bounding-box",gF=/([A-Za-z%]+)$/;function Ra(t,n){return new _m(n,t.get(uo),t.get(Z),t.get(Ue),t.get(bm))}var _m=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new T;_resizeSubscription=Se.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Vx),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,r,a),c=this._getOverlayPoint(l,e,a),u=this._getOverlayFit(c,e,i,a);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(u,c,i)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<u.visibleArea)&&(s={overlayFit:u,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>l&&(l=u,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Cs(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Vx),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof $?this._origin.nativeElement:U_(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=Ux(e),{x:s,y:a}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(s+=l),c&&(a+=c);let u=0-s,f=s+o.width-i.width,m=0-a,h=a+o.height-i.height,v=this._subtractOverflows(o.width,u,f),S=this._subtractOverflows(o.height,m,h),R=v*S;return{visibleArea:R,isCompletelyWithinViewport:o.width*o.height===R,fitsInViewportVertically:S===o.height,fitsInViewportHorizontally:v==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=Hx(this._overlayRef.getConfig().minHeight),a=Hx(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Ux(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=c||-s:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!vF(this._lastScrollVisibility,i)){let r=new vm(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),v=this._lastBoundingBoxSize.height;o=h*2,s=n.y-h,o>v&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-v/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,m;if(c)m=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),v=this._lastBoundingBoxSize.width;u=h*2,f=n.x-h,u>v&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-v/2)}return{top:s,left:f,bottom:a,right:m,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=kt(i.width),r.height=kt(i.height),r.top=kt(i.top)||"auto",r.bottom=kt(i.bottom)||"auto",r.left=kt(i.left)||"auto",r.right=kt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=kt(o)),s&&(r.maxWidth=kt(s))}this._lastBoundingBoxSize=i,Cs(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Cs(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Cs(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Cs(i,this._getExactOverlayY(e,n,u)),Cs(i,this._getExactOverlayX(e,n,u))}else i.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=kt(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=kt(s.maxWidth):o&&(i.maxWidth="")),Cs(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=kt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=kt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:jx(n,i),isOriginOutsideView:B_(n,i),isOverlayClipped:jx(e,i),isOverlayOutsideView:B_(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Ea(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof $)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Cs(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function Hx(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(gF);return!e||e==="px"?parseFloat(n):null}return t||null}function Ux(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function vF(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var zx="cdk-global-overlay-wrapper";function ws(t){return new ym}var ym=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(zx),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),u=this._xPosition,f=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",h="",v="",S="";l?S="flex-start":u==="center"?(S="center",m?v=f:h=f):m?u==="left"||u==="end"?(S="flex-end",h=f):(u==="right"||u==="start")&&(S="flex-start",v=f):u==="left"||u==="start"?(S="flex-start",h=f):(u==="right"||u==="end")&&(S="flex-end",v=f),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":v,e.justifyContent=S,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(zx),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}};var Fc=new b("OVERLAY_DEFAULT_CONFIG");function tr(t,n){t.get(Et).load(qx);let e=t.get(bm),i=t.get(Z),r=t.get(at),o=t.get(_n),s=t.get(wn),a=t.get($e,null,{optional:!0})||t.get(Nt).createRenderer(null,null),l=new Ai(n),c=t.get(Fc,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return U_(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):e.getContainerElement().appendChild(f),new ka(new Oc(u,o,t),f,u,l,t.get(j),t.get(Gx),i,t.get(to),t.get(Wx),n?.disableAnimations??t.get(Ll,null,{optional:!0})==="NoopAnimations",t.get(et),a)}var _F=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],yF=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(K);return()=>ho(t)}}),Aa=(()=>{class t{elementRef=d($);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),Zx=new b("cdk-connected-overlay-default-config"),Cm=(()=>{class t{_dir=d(wn,{optional:!0});_injector=d(K);_overlayRef;_templatePortal;_backdropSubscription=Se.EMPTY;_attachSubscription=Se.EMPTY;_detachSubscription=Se.EMPTY;_positionSubscription=Se.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=d(yF);_ngZone=d(j);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new q;positionChange=new q;attach=new q;detach=new q;overlayKeydown=new q;overlayOutsideClick=new q;constructor(){let e=d(cn),i=d(en),r=d(Zx,{optional:!0}),o=d(Fc,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new ki(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=_F);let e=this._overlayRef=tr(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!Ft(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=rn(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new Ai({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Ra(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Aa?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Aa?this.origin.elementRef.nativeElement:this.origin instanceof $?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Oh(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",ue],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",ue],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",ue],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",ue],push:[2,"cdkConnectedOverlayPush","push",ue],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",ue],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",ue],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ht]})}return t})();function CF(t,n){}var po=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var $_=(()=>{class t extends fo{_elementRef=d($);_focusTrapFactory=d(x_);_config;_interactivityChecker=d(Ia);_ngZone=d(j);_focusMonitor=d(er);_renderer=d($e);_changeDetectorRef=d(qe);_injector=d(K);_platform=d(Ue);_document=d(Z);_portalOutlet;_focusTrapped=new T;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(po,{optional:!0})||new po,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||Ot(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=hs(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=hs();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=hs()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&Pt(mo,7),i&2){let o;ve(o=_e())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&ge("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[Ve],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&wt(0,CF,0,0,"ng-template",0)},dependencies:[mo],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),jc=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new T;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!Ft(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},wF=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=d(K);return()=>Pc(t)}}),DF=new b("DialogData"),EF=new b("DefaultDialogConfig");function xF(t){let n=de(t),e=new q;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var Yx=(()=>{class t{_injector=d(K);_defaultOptions=d(EF,{optional:!0});_parentDialog=d(t,{optional:!0,skipSelf:!0});_overlayContainer=d(bm);_idGenerator=d(at);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new T;_afterOpenedAtThisLevel=new T;_ariaHiddenElements=new Map;_scrollStrategy=d(wF);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=hi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(jt(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new po;i=w(w({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),s=tr(this._injector,o),a=new jc(s,i),l=this._attachContainer(s,a,i);if(a.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(dt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,a,l,i),this.openDialogs.push(a),a.closed.subscribe(()=>this._removeOpenDialog(a,!0)),this.afterOpened.next(a),a}closeAll(){z_(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){z_(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),z_(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new Ai({positionStrategy:e.positionStrategy||ws().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,s=[{provide:po,useValue:r},{provide:jc,useValue:i},{provide:ka,useValue:e}],a;r.container?typeof r.container=="function"?a=r.container:(a=r.container.type,s.push(...r.container.providers(r))):a=$_;let l=new Ti(a,r.viewContainerRef,K.create({parent:o||this._injector,providers:s}));return e.attach(l).instance}_attachDialogContent(e,i,r,o){if(e instanceof cn){let s=this._createInjector(o,i,r,void 0),a={$implicit:o.data,dialogRef:i};o.templateContext&&(a=w(w({},a),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new ki(e,null,a,s))}else{let s=this._createInjector(o,i,r,this._injector),a=r.attachComponentPortal(new Ti(e,o.viewContainerRef,s));i.componentRef=a,i.componentInstance=a.instance}}_createInjector(e,i,r,o){let s=e.injector||e.viewContainerRef?.injector,a=[{provide:DF,useValue:e.data},{provide:jc,useValue:i}];return e.providers&&(typeof e.providers=="function"?a.push(...e.providers(i,e,r)):a.push(...e.providers)),e.direction&&(!s||!s.get(wn,null,{optional:!0}))&&a.push({provide:wn,useValue:xF(e.direction)}),K.create({parent:s||o,providers:a})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute("aria-hidden",o):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function z_(t,n){let e=t.length;for(;e--;)n(t[e])}function IF(t,n){}var Dm=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},G_="mdc-dialog--open",Xx="mdc-dialog--opening",Qx="mdc-dialog--closing",SF=150,MF=75,TF=(()=>{class t extends $_{_animationStateChanged=new q;_animationsEnabled=!nt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Jx(this._config.enterAnimationDuration)??SF:0;_exitAnimationDuration=this._animationsEnabled?Jx(this._config.exitAnimationDuration)??MF:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Kx,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Xx,G_)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(G_),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(G_),this._animationsEnabled?(this._hostElement.style.setProperty(Kx,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Qx)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Xx,Qx)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(On("id",r._config.id),ge("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),re("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[Ve],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(p(0,"div",0)(1,"div",1),wt(2,IF,0,0,"ng-template",2),g()())},dependencies:[mo],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return t})(),Kx="--mat-dialog-transition-duration";function Jx(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?Hn(t.substring(0,t.length-2)):t.endsWith("s")?Hn(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var wm=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(wm||{}),Bc=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Pi(1);_beforeClosed=new Pi(1);_result;_closeFallbackTimeout;_state=wm.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(je(r=>r.state==="opened"),dt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(je(r=>r.state==="closed"),dt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),fn(this.backdropClick(),this.keydownEvents().pipe(je(r=>r.keyCode===27&&!this.disableClose&&!Ft(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),kF(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(je(i=>i.state==="closing"),dt(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=wm.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=wm.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function kF(t,n,e){return t._closeInteractionType=n,t.close(e)}var W_=new b("MatMdcDialogData"),AF=new b("mat-mdc-dialog-default-options"),RF=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(K);return()=>Pc(t)}}),eI=(()=>{class t{_defaultOptions=d(AF,{optional:!0});_scrollStrategy=d(RF);_parentDialog=d(t,{optional:!0,skipSelf:!0});_idGenerator=d(at);_injector=d(K);_dialog=d(Yx);_animationsDisabled=nt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new T;_afterOpenedAtThisLevel=new T;dialogConfigClass=Dm;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=hi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(jt(void 0)));constructor(){this._dialogRefConstructor=Bc,this._dialogContainerType=TF,this._dialogDataToken=W_}open(e,i){let r;i=w(w({},this._defaultOptions||new Dm),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,ce(w({},i),{positionStrategy:ws(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:po,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(s,a,l)=>(r=new this._dialogRefConstructor(s,i,l),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:a.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(r);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Na=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=At(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=At(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(ge("aria-orientation",r.vertical?"vertical":"horizontal"),re("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})();var go=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new T;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var lI=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(ae($e),ae($))};static \u0275dir=H({type:t})}return t})(),cI=(()=>{class t extends lI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275dir=H({type:t,features:[Ve]})}return t})(),Ds=new b("");var NF={provide:Ds,useExisting:ln(()=>nr),multi:!0};function OF(){let t=ti()?ti().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var PF=new b(""),nr=(()=>{class t extends lI{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!OF())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(ae($e),ae($),ae(PF,8))};static \u0275dir=H({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&U("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[vt([NF]),Ve]})}return t})();function X_(t){return t==null||Q_(t)===0}function Q_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var ja=new b(""),Zc=new b(""),FF=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,oi=class{static min(n){return dI(n)}static max(n){return LF(n)}static required(n){return jF(n)}static requiredTrue(n){return BF(n)}static email(n){return VF(n)}static minLength(n){return HF(n)}static maxLength(n){return UF(n)}static pattern(n){return zF(n)}static nullValidator(n){return xm()}static compose(n){return gI(n)}static composeAsync(n){return vI(n)}};function dI(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function LF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function jF(t){return X_(t.value)?{required:!0}:null}function BF(t){return t.value===!0?null:{required:!0}}function VF(t){return X_(t.value)||FF.test(t.value)?null:{email:!0}}function HF(t){return n=>{let e=n.value?.length??Q_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function UF(t){return n=>{let e=n.value?.length??Q_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function zF(t){if(!t)return xm;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(X_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function xm(t){return null}function uI(t){return t!=null}function fI(t){return Xr(t)?mt(t):t}function mI(t){let n={};return t.forEach(e=>{n=e!=null?w(w({},n),e):n}),Object.keys(n).length===0?null:n}function hI(t,n){return n.map(e=>e(t))}function $F(t){return!t.validate}function pI(t){return t.map(n=>$F(n)?n:e=>n.validate(e))}function gI(t){if(!t)return null;let n=t.filter(uI);return n.length==0?null:function(e){return mI(hI(e,n))}}function K_(t){return t!=null?gI(pI(t)):null}function vI(t){if(!t)return null;let n=t.filter(uI);return n.length==0?null:function(e){let i=hI(e,n).map(fI);return Po(i).pipe(ee(mI))}}function J_(t){return t!=null?vI(pI(t)):null}function tI(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function _I(t){return t._rawValidators}function yI(t){return t._rawAsyncValidators}function q_(t){return t?Array.isArray(t)?t:[t]:[]}function Im(t,n){return Array.isArray(t)?t.includes(n):t===n}function nI(t,n){let e=q_(n);return q_(t).forEach(r=>{Im(e,r)||e.push(r)}),e}function iI(t,n){return q_(n).filter(e=>!Im(t,e))}var Sm=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=K_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=J_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Sr=class extends Sm{name;get formDirective(){return null}get path(){return null}},En=class extends Sm{_parent=null;name=null;valueAccessor=null},Mm=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var si=(()=>{class t extends Mm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(ae(En,2))};static \u0275dir=H({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&re("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ve]})}return t})(),Ba=(()=>{class t extends Mm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(ae(Sr,10))};static \u0275dir=H({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&re("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ve]})}return t})();var Vc="VALID",Em="INVALID",Oa="PENDING",Hc="DISABLED",vo=class{},Tm=class extends vo{value;source;constructor(n,e){super(),this.value=n,this.source=e}},zc=class extends vo{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},$c=class extends vo{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Pa=class extends vo{status;source;constructor(n,e){super(),this.status=n,this.source=e}},km=class extends vo{source;constructor(n){super(),this.source=n}},Wc=class extends vo{source;constructor(n){super(),this.source=n}};function ey(t){return(Om(t)?t.validators:t)||null}function GF(t){return Array.isArray(t)?K_(t):t||null}function ty(t,n){return(Om(n)?n.asyncValidators:t)||null}function WF(t){return Array.isArray(t)?J_(t):t||null}function Om(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function bI(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new L(1e3,"");if(!i[e])throw new L(1001,"")}function CI(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new L(-1002,"")})}var Fa=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ge(this.statusReactive)}set status(n){Ge(()=>this.statusReactive.set(n))}_status=Yt(()=>this.statusReactive());statusReactive=de(void 0);get valid(){return this.status===Vc}get invalid(){return this.status===Em}get pending(){return this.status===Oa}get disabled(){return this.status===Hc}get enabled(){return this.status!==Hc}errors;get pristine(){return Ge(this.pristineReactive)}set pristine(n){Ge(()=>this.pristineReactive.set(n))}_pristine=Yt(()=>this.pristineReactive());pristineReactive=de(!0);get dirty(){return!this.pristine}get touched(){return Ge(this.touchedReactive)}set touched(n){Ge(()=>this.touchedReactive.set(n))}_touched=Yt(()=>this.touchedReactive());touchedReactive=de(!1);get untouched(){return!this.touched}_events=new T;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(nI(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(nI(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(iI(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(iI(n,this._rawAsyncValidators))}hasValidator(n){return Im(this._rawValidators,n)}hasAsyncValidator(n){return Im(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(ce(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new $c(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new $c(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(ce(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new zc(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new zc(!0,i))}markAsPending(n={}){this.status=Oa;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Pa(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(ce(w({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Hc,this.errors=null,this._forEachChild(r=>{r.disable(ce(w({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Tm(this.value,i)),this._events.next(new Pa(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ce(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Vc,this._forEachChild(i=>{i.enable(ce(w({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ce(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Vc||this.status===Oa)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Tm(this.value,e)),this._events.next(new Pa(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(ce(w({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Hc:Vc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Oa,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=fI(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Pa(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new q,this.statusChanges=new q}_calculateStatus(){return this._allControlsDisabled()?Hc:this.errors?Em:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Oa)?Oa:this._anyControlsHaveStatus(Em)?Em:Vc}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new zc(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new $c(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Om(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=GF(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=WF(this._rawAsyncValidators)}},La=class extends Fa{constructor(n,e,i){super(ey(e),ty(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){CI(this,!0,n),Object.keys(n).forEach(i=>{bI(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,ce(w({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Wc(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Z_=class extends La{};var Va=new b("",{factory:()=>Pm}),Pm="always";function wI(t,n){return[...n.path,t]}function qc(t,n,e=Pm){ny(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),ZF(t,n),XF(t,n),YF(t,n),qF(t,n)}function Am(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Nm(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Rm(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function qF(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function ny(t,n){let e=_I(t);n.validator!==null?t.setValidators(tI(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=yI(t);n.asyncValidator!==null?t.setAsyncValidators(tI(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Rm(n._rawValidators,r),Rm(n._rawAsyncValidators,r)}function Nm(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=_I(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=yI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Rm(n._rawValidators,i),Rm(n._rawAsyncValidators,i),e}function ZF(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&DI(t,n)})}function YF(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&DI(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function DI(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function XF(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function EI(t,n){t==null,ny(t,n)}function QF(t,n){return Nm(t,n)}function iy(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function KF(t){return Object.getPrototypeOf(t.constructor)===cI}function xI(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ry(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===nr?e=o:KF(o)?i=o:r=o}),r||i||e||null}function JF(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var eL={provide:Sr,useExisting:ln(()=>Es)},Uc=Promise.resolve(),Es=(()=>{class t extends Sr{callSetDisabledState;get submitted(){return Ge(this.submittedReactive)}_submitted=Yt(()=>this.submittedReactive());submittedReactive=de(!1);_directives=new Set;form;ngSubmit=new q;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new La({},K_(e),J_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Uc.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),qc(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Uc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Uc.then(()=>{let i=this._findContainer(e.path),r=new La({});EI(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Uc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Uc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),xI(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new km(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(ae(ja,10),ae(Zc,10),ae(Va,8))};static \u0275dir=H({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&U("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[vt([eL]),Ve]})}return t})();function rI(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function oI(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Gc=class extends Fa{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(ey(e),ty(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Om(e)&&(e.nonNullable||e.initialValueIsDefault)&&(oI(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Wc(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){rI(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){rI(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){oI(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var tL=t=>t instanceof Gc;var nL={provide:En,useExisting:ln(()=>xs)},sI=Promise.resolve(),xs=(()=>{class t extends En{_changeDetectorRef;callSetDisabledState;control=new Gc;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new q;constructor(e,i,r,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=ry(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),iy(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){qc(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){sI.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&ue(i);sI.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?wI(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(ae(Sr,9),ae(ja,10),ae(Zc,10),ae(Ds,10),ae(qe,8),ae(Va,8))};static \u0275dir=H({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[vt([nL]),Ve,ht]})}return t})();var Ha=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),iL={provide:Ds,useExisting:ln(()=>oy),multi:!0},oy=(()=>{class t extends cI{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275dir=H({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&U("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[vt([iL]),Ve]})}return t})();var Y_=class extends Fa{constructor(n,e,i){super(ey(e),ty(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){CI(this,!1,n),n.forEach((i,r)=>{bI(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,r)=>{i.reset(n[r],ce(w({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Wc(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var rL=(()=>{class t extends Sr{callSetDisabledState;get submitted(){return Ge(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Yt(()=>this._submittedReactive());_submittedReactive=de(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Nm(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return qc(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Am(e.control||null,e,!1),JF(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,xI(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new km(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Am(i||null,e),tL(r)&&(qc(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);EI(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&QF(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ny(this.form,this),this._oldForm&&Nm(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(ae(ja,10),ae(Zc,10),ae(Va,8))};static \u0275dir=H({type:t,features:[Ve,ht]})}return t})();var sy=new b(""),oL={provide:En,useExisting:ln(()=>ay)},ay=(()=>{class t extends En{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new q;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=ry(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&Am(i,this,!1),qc(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}iy(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Am(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(ae(ja,10),ae(Zc,10),ae(Ds,10),ae(sy,8),ae(Va,8))};static \u0275dir=H({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[vt([oL]),Ve,ht]})}return t})();var sL={provide:En,useExisting:ln(()=>Yc)},Yc=(()=>{class t extends En{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new q;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=ry(this,o)}ngOnChanges(e){this._added||this._setUpControl(),iy(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return wI(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(ae(Sr,13),ae(ja,10),ae(Zc,10),ae(Ds,10),ae(sy,8))};static \u0275dir=H({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[vt([sL]),Ve,ht]})}return t})();var aL={provide:Sr,useExisting:ln(()=>Mr)},Mr=(()=>{class t extends rL{form=null;ngSubmit=new q;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275dir=H({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&U("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[vt([aL]),Ve]})}return t})();function lL(t){return typeof t=="number"?t:parseFloat(t)}var cL=(()=>{class t{_validator=xm;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):xm,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,features:[ht]})}return t})();var dL={provide:ja,useExisting:ln(()=>ly),multi:!0},ly=(()=>{class t extends cL{min;inputName="min";normalizeInput=e=>lL(e);createValidator=e=>dI(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275dir=H({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ge("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[vt([dL]),Ve]})}return t})();var II=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Qe({type:t});static \u0275inj=We({})}return t})();function aI(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Fm=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return aI(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new La(r,o)}record(e,i=null){let r=this._reduceControls(e);return new Z_(r,i)}control(e,i,r){let o={};return this.useNonNullable?(aI(i)?o=i:(o.validators=i,o.asyncValidators=r),new Gc(e,ce(w({},o),{nonNullable:!0}))):new Gc(e,i,r)}array(e,i,r){let o=e.map(s=>this._createControl(s));return new Y_(o,i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof Gc)return e;if(e instanceof Fa)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ua=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Va,useValue:e.callSetDisabledState??Pm}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=Qe({type:t});static \u0275inj=We({imports:[II]})}return t})(),za=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:sy,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Va,useValue:e.callSetDisabledState??Pm}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=Qe({type:t});static \u0275inj=We({imports:[II]})}return t})();var SI=(()=>{class t{_animationsDisabled=nt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&re("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var uL=["*"],fL=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,mL=["unscopedContent"];var hL=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],pL=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function gL(t,n){t&1&&Ae(0,4)}function vL(t,n){if(t&1&&(p(0,"div",11),G(1,"input",12),p(2,"div",13),Nn(),p(3,"svg",14),G(4,"path",15),g(),Gs(),G(5,"div",16),g()()),t&2){let e=B();re("mdc-checkbox--disabled",e.disabled),_(),z("checked",e.selected)("disabled",e.disabled)}}function _L(t,n){if(t&1&&(p(0,"div",17),G(1,"input",18),p(2,"div",19),G(3,"div",20)(4,"div",21),g()()),t&2){let e=B();re("mdc-radio--disabled",e.disabled),_(),z("checked",e.selected)("disabled",e.disabled)}}function yL(t,n){}function bL(t,n){if(t&1&&(p(0,"span",4),wt(1,yL,0,0,"ng-template",6),g()),t&2){B();let e=Ut(3);_(),z("ngTemplateOutlet",e)}}function CL(t,n){}function wL(t,n){if(t&1&&(p(0,"span",5),wt(1,CL,0,0,"ng-template",6),g()),t&2){B();let e=Ut(5);_(),z("ngTemplateOutlet",e)}}function DL(t,n){}function EL(t,n){if(t&1&&wt(0,DL,0,0,"ng-template",6),t&2){B();let e=Ut(1);z("ngTemplateOutlet",e)}}function xL(t,n){}function IL(t,n){if(t&1&&(p(0,"span",9),wt(1,xL,0,0,"ng-template",6),g()),t&2){B();let e=Ut(3);_(),z("ngTemplateOutlet",e)}}function SL(t,n){}function ML(t,n){if(t&1&&(p(0,"span",9),wt(1,SL,0,0,"ng-template",6),g()),t&2){B();let e=Ut(5);_(),z("ngTemplateOutlet",e)}}function TL(t,n){}function kL(t,n){if(t&1&&wt(0,TL,0,0,"ng-template",6),t&2){B();let e=Ut(1);z("ngTemplateOutlet",e)}}var TI=new b("ListOption"),AL=(()=>{class t{_elementRef=d($);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),RL=(()=>{class t{_elementRef=d($);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})();var kI=(()=>{class t{_listOption=d(TI,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,hostVars:4,hostBindings:function(i,r){i&2&&re("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),NL=(()=>{class t extends kI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275dir=H({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Ve]})}return t})(),OL=(()=>{class t extends kI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275dir=H({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Ve]})}return t})(),PL=new b("MAT_LIST_CONFIG"),cy=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=At(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(At(e))}_disabled=de(!1);_defaultOptions=d(PL,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,hostVars:1,hostBindings:function(i,r){i&2&&ge("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),MI=(()=>{class t{_elementRef=d($);_ngZone=d(j);_listBase=d(cy,{optional:!0});_platform=d(Ue);_hostElement;_isButtonElement;_noopAnimations=nt();_avatars;_icons;set lines(e){this._explicitLines=Hn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=At(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(At(e))}_disabled=de(!1);_subscriptions=new Se;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(Et).load(co);let e=d(Rc,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ys(this,this._ngZone,this._hostElement,this._platform,d(K)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(fn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,contentQueries:function(i,r,o){if(i&1&&Mn(o,NL,4)(o,OL,4),i&2){let s;ve(s=_e())&&(r._avatars=s),ve(s=_e())&&(r._icons=s)}},hostVars:4,hostBindings:function(i,r){i&2&&(ge("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),re("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var AI=new b("SelectionList"),Xc=(()=>{class t extends MI{_selectionList=d(AI);_changeDetectorRef=d(qe);_lines;_titles;_unscopedContent;selectedChange=new q;togglePosition="after";get checkboxPosition(){return this.togglePosition}set checkboxPosition(e){this.togglePosition=e}get color(){return this._color||this._selectionList.color}set color(e){this._color=e}_color;get value(){return this._value}set value(e){this.selected&&e!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=e}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(e){let i=At(e);i!==this._selected&&(this._setSelected(i),(i||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let e=this._selectionList;e._value&&e._value.some(r=>e.compareWith(this._value,r))&&this._setSelected(!0);let i=this._selected;Promise.resolve().then(()=>{(this._selected||i)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||""}_hasCheckboxAt(e){return this._selectionList.multiple&&this._getTogglePosition()===e}_hasRadioAt(e){return!this._selectionList.multiple&&this._getTogglePosition()===e&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(e){return this._hasProjected("icons",e)||this._hasProjected("avatars",e)}_hasProjected(e,i){return this._getTogglePosition()!==i&&(e==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(e){return e===this._selected?!1:(this._selected=e,e?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(e),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(e){this._hostElement.setAttribute("tabindex",e+"")}_hasBothLeadingAndTrailing(){let e=this._hasProjected("avatars","before")||this._hasProjected("icons","before")||this._hasCheckboxAt("before")||this._hasRadioAt("before"),i=this._hasProjected("icons","after")||this._hasProjected("avatars","after")||this._hasCheckboxAt("after")||this._hasRadioAt("after");return e&&i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Vt(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-list-option"]],contentQueries:function(i,r,o){if(i&1&&Mn(o,RL,5)(o,AL,5),i&2){let s;ve(s=_e())&&(r._lines=s),ve(s=_e())&&(r._titles=s)}},viewQuery:function(i,r){if(i&1&&Pt(mL,5),i&2){let o;ve(o=_e())&&(r._unscopedContent=o.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:27,hostBindings:function(i,r){i&1&&U("blur",function(){return r._handleBlur()})("click",function(){return r._toggleOnInteraction()}),i&2&&(ge("aria-selected",r.selected),re("mdc-list-item--selected",r.selected&&!r._selectionList.multiple&&r._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",r._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",r._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",r._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",r._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",r._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",r._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",r._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",r._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("mat-accent",r.color!=="primary"&&r.color!=="warn")("mat-warn",r.color==="warn")("_mat-animation-noopable",r._noopAnimations))},inputs:{togglePosition:"togglePosition",checkboxPosition:"checkboxPosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],features:[vt([{provide:MI,useExisting:t},{provide:TI,useExisting:t}]),Ve],ngContentSelectors:pL,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"]],template:function(i,r){i&1&&(yt(hL),wt(0,gL,1,0,"ng-template",null,0,rs)(2,vL,6,4,"ng-template",null,1,rs)(4,_L,5,4,"ng-template",null,2,rs),Y(6,bL,2,1,"span",4)(7,wL,2,1,"span",5),Y(8,EL,1,1,null,6),p(9,"span",7),Ae(10),Ae(11,1),p(12,"span",8,3),U("cdkObserveContent",function(){return r._updateItemLines(!0)}),Ae(14,2),g()(),Y(15,IL,2,1,"span",9)(16,ML,2,1,"span",9),Y(17,kL,1,1,null,6),Ae(18,3),G(19,"div",10)),i&2&&(_(6),X(r._hasCheckboxAt("before")?6:r._hasRadioAt("before")?7:-1),_(2),X(r._hasIconsOrAvatarsAt("before")?8:-1),_(7),X(r._hasCheckboxAt("after")?15:r._hasRadioAt("after")?16:-1),_(2),X(r._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[Ql,ax],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}
@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var FL={provide:Ds,useExisting:ln(()=>Qc),multi:!0},dy=class{source;options;constructor(n,e){this.source=n,this.options=e}},Qc=(()=>{class t extends cy{_element=d($);_ngZone=d(j);_renderer=d($e);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new T;_isDestroyed=!1;_onChange=e=>{};_items;selectionChange=new q;color="accent";compareWith=(e,i)=>e===i;get multiple(){return this._multiple}set multiple(e){let i=At(e);i!==this._multiple&&(this._multiple=i,this.selectedOptions=new go(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=At(e)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new go(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=d(qe);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,"focusin",this._handleFocusin),this._renderer.listen(this._element.nativeElement,"focusout",this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(e){let i=e.disabled,r=e.disableRipple,o=e.hideSingleSelectionIndicator;(r&&!r.firstChange||i&&!i.firstChange||o&&!o.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(e){this._element.nativeElement.focus(e)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let e=this._getSelectedOptionValues();this._onChange(e),this._value=e}}_emitChangeEvent(e){this.selectionChange.emit(new dy(this,e))}writeValue(e){this._value=e,this.options&&this._setOptionsFromValues(e||[])}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(e){this._selectionListDisabled.set(At(e)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=de(!1);registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}_watchForSelectionChange(){this.selectedOptions.changed.pipe(Be(this._destroyed)).subscribe(e=>{for(let i of e.added)i.selected=!0;for(let i of e.removed)i.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(e){this.options.forEach(i=>i._setSelected(!1)),e.forEach(i=>{let r=this.options.find(o=>o.selected?!1:this.compareWith(o.value,i));r&&r._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(e=>e.selected).map(e=>e.value)}_markOptionsForCheck(){this.options&&this.options.forEach(e=>e._markForCheck())}_setAllOptionsSelected(e,i){let r=[];return this.options.forEach(o=>{(!i||!o.disabled)&&o._setSelected(e)&&r.push(o)}),r.length&&this._reportValueChange(),r}get options(){return this._items}_handleKeydown(e){let i=this._keyManager.activeItem;if((e.keyCode===13||e.keyCode===32)&&!this._keyManager.isTyping()&&i&&!i.disabled)e.preventDefault(),i._toggleOnInteraction();else if(e.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&Ft(e,"ctrlKey","metaKey")){let r=this.options.some(o=>!o.disabled&&!o.selected);e.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(r,!0))}else this._keyManager.onKeydown(e)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=e=>{if(this.disabled)return;let i=this._items.toArray().findIndex(r=>r._elementRef.nativeElement.contains(e.target));i>-1?this._setActiveOption(i):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new vs(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>this.disabled),this._resetActiveOption(),this._keyManager.change.subscribe(e=>this._setActiveOption(e)),this._items.changes.pipe(Be(this._destroyed)).subscribe(()=>{let e=this._keyManager.activeItem;(!e||this._items.toArray().indexOf(e)===-1)&&this._resetActiveOption()})}_setActiveOption(e){this._items.forEach((i,r)=>i._setTabindex(r===e?0:-1)),this._keyManager.updateActiveItem(e)}_resetActiveOption(){if(this.disabled){this._setActiveOption(-1);return}let e=this._items.find(i=>i.selected&&!i.disabled)||this._items.first;this._setActiveOption(e?this._items.toArray().indexOf(e):-1)}_containsFocus(){let e=hs();return e&&this._element.nativeElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-selection-list"]],contentQueries:function(i,r,o){if(i&1&&Mn(o,Xc,5),i&2){let s;ve(s=_e())&&(r._items=s)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(i,r){i&1&&U("keydown",function(s){return r._handleKeydown(s)}),i&2&&ge("aria-multiselectable",r.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],features:[vt([FL,{provide:cy,useExisting:t},{provide:AI,useExisting:t}]),Ve,ht],ngContentSelectors:uL,decls:1,vars:0,template:function(i,r){i&1&&(yt(),Ae(0))},styles:[fL],encapsulation:2,changeDetection:0})}return t})();function LL(t,n){if(t&1&&(p(0,"mat-list-option",5),I(1),g()),t&2){let e=n.$implicit;z("value",e),_(),He(e)}}function jL(t,n){if(t&1&&(p(0,"mat-list-option",5),I(1),g()),t&2){let e=n.$implicit;z("value",e),_(),He(e)}}var Lm=class t{shopServices=d(so);dialogRef=d(Bc);data=d(W_);selectedBrands=this.data.selectedBrands;selectedTypes=this.data.selectedTypes;applyFilters(){this.dialogRef.close({selectedBrands:this.selectedBrands,selectedTypes:this.selectedTypes})}clearFilters(){this.selectedBrands=[],this.selectedTypes=[]}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-filters-dialog"]],decls:22,vars:4,consts:[[1,"text-3xl","text-center","pt-6","mb-3"],[1,"flex","p-4"],[1,"w-1/2"],[1,"font-semibold","text-xl","text-primary"],[3,"ngModelChange","ngModel","multiple"],[3,"value"],[1,"flex","justify-end","p-4","gap-4"],["mat-flat-button","",3,"click"]],template:function(e,i){e&1&&(p(0,"div")(1,"h3",0),I(2,"Filters"),g(),G(3,"mat-divider"),p(4,"div",1)(5,"div",2)(6,"h4",3),I(7,"Brands"),g(),p(8,"mat-selection-list",4),Cr("ngModelChange",function(o){return Kr(i.selectedBrands,o)||(i.selectedBrands=o),o}),yn(9,LL,2,2,"mat-list-option",5,Xi),g()(),p(11,"div",2)(12,"h4",3),I(13,"Types"),g(),p(14,"mat-selection-list",4),Cr("ngModelChange",function(o){return Kr(i.selectedTypes,o)||(i.selectedTypes=o),o}),yn(15,jL,2,2,"mat-list-option",5,Xi),g()()(),p(17,"div",6)(18,"button",7),U("click",function(){return i.applyFilters()}),I(19,"Apply Filters"),g(),p(20,"button",7),U("click",function(){return i.clearFilters()}),I(21,"Clear"),g()()()),e&2&&(_(8),br("ngModel",i.selectedBrands),z("multiple",!0),_(),bn(i.shopServices.brands),_(5),br("ngModel",i.selectedTypes),z("multiple",!0),_(),bn(i.shopServices.types))},dependencies:[Na,Qc,Xc,pt,Ua,si,xs],encapsulation:2})};var VL=["mat-menu-item",""],HL=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],UL=["mat-icon, [matMenuItemIcon]","*"];function zL(t,n){t&1&&(Nn(),p(0,"svg",2),G(1,"polygon",3),g())}var $L=["*"];function GL(t,n){if(t&1){let e=nn();gt(0,"div",0),ia("click",function(){rt(e);let r=B();return ot(r.closed.emit("click"))})("animationstart",function(r){rt(e);let o=B();return ot(o._onAnimationStart(r.animationName))})("animationend",function(r){rt(e);let o=B();return ot(o._onAnimationDone(r.animationName))})("animationcancel",function(r){rt(e);let o=B();return ot(o._onAnimationDone(r.animationName))}),gt(1,"div",1),Ae(2),Dt()()}if(t&2){let e=B();Pn(e._classList),re("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),On("id",e.panelId),ge("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var fy=new b("MAT_MENU_PANEL"),Kc=(()=>{class t{_elementRef=d($);_document=d(Z);_focusMonitor=d(er);_parentMenu=d(fy,{optional:!0});_changeDetectorRef=d(qe);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new T;_focused=new T;_highlighted=!1;_triggersSubmenu=!1;constructor(){d(Et).load(co),this._parentMenu?.addItem?.(this)}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),i=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<i.length;r++)i[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(i,r){i&1&&U("click",function(s){return r._checkDisabled(s)})("mouseenter",function(){return r._handleMouseEnter()}),i&2&&(ge("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),re("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",ue],disableRipple:[2,"disableRipple","disableRipple",ue]},exportAs:["matMenuItem"],attrs:VL,ngContentSelectors:UL,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,r){i&1&&(yt(HL),Ae(0),p(1,"span",0),Ae(2,1),g(),G(3,"div",1),Y(4,zL,2,0,":svg:svg",2)),i&2&&(_(3),z("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),_(),X(r._triggersSubmenu?4:-1))},dependencies:[cm],encapsulation:2,changeDetection:0})}return t})();var WL=new b("MatMenuContent");var qL=new b("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),uy="_mat-menu-enter",jm="_mat-menu-exit",bo=(()=>{class t{_elementRef=d($);_changeDetectorRef=d(qe);_injector=d(K);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=nt();_allItems;_directDescendantItems=new pr;_classList={};_panelAnimationState="void";_animationDone=new T;_isAnimating=de(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let i=this._previousPanelClass,r=w({},this._classList);i&&i.length&&i.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new q;close=this.closed;panelId=d(at).getId("mat-menu-panel-");constructor(){let e=d(qL);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new vs(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(jt(this._directDescendantItems),Rt(e=>fn(...e.map(i=>i._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,i.activeItemIndex||0));r[o]&&!r[o].disabled?i.setActiveItem(o):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(jt(this._directDescendantItems),Rt(i=>fn(...i.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let i=e.keyCode,r=this._keyManager;switch(i){case 27:Ft(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ot(()=>{let i=this._resolvePanel();if(!i||!i.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&i&&i.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,i=this.yPosition){this._classList=ce(w({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let i=e===jm;(i||e===uy)&&(i&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(i?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===uy||e===jm)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let i=this._resolvePanel();i&&(i.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(jm),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?uy:jm)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(jt(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-menu"]],contentQueries:function(i,r,o){if(i&1&&Mn(o,WL,5)(o,Kc,5)(o,Kc,4),i&2){let s;ve(s=_e())&&(r.lazyContent=s.first),ve(s=_e())&&(r._allItems=s),ve(s=_e())&&(r.items=s)}},viewQuery:function(i,r){if(i&1&&Pt(cn,5),i&2){let o;ve(o=_e())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(i,r){i&2&&ge("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ue],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:ue(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[vt([{provide:fy,useExisting:t}])],ngContentSelectors:$L,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(i,r){i&1&&(yt(),nf(0,GL,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),ZL=new b("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(K);return()=>ho(t)}});var Ga=new WeakMap,YL=(()=>{class t{_canHaveBackdrop;_element=d($);_viewContainerRef=d(en);_menuItemInstance=d(Kc,{optional:!0,self:!0});_dir=d(wn,{optional:!0});_focusMonitor=d(er);_ngZone=d(j);_injector=d(K);_scrollStrategy=d(ZL);_changeDetectorRef=d(qe);_animationsDisabled=nt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Se.EMPTY;_menuCloseSubscription=Se.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let i=d(fy,{optional:!0});this._parentMaterialMenu=i instanceof bo?i:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Ga.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let i=this._menu;if(this._menuOpen||!i)return;this._pendingRemoval?.unsubscribe();let r=Ga.get(i);Ga.set(i,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(i),s=o.getConfig(),a=s.positionStrategy;this._setPosition(i,a),this._canHaveBackdrop?s.hasBackdrop=i.hasBackdrop==null?!this._triggersSubmenu():i.hasBackdrop:s.hasBackdrop=i.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(i)),i.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),i.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,i.direction=this.dir,e&&i.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),i instanceof bo&&(i._setIsOpen(!0),i._directDescendantItems.changes.pipe(Be(i.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}_destroyMenu(e){let i=this._overlayRef,r=this._menu;!i||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof bo&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(dt(1)).subscribe(()=>{i.detach(),Ga.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(i.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&Ga.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let i=this._getOverlayConfig(e);this._subscribeToPositions(e,i.positionStrategy),this._overlayRef=tr(this._injector,i),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof bo&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new Ai({positionStrategy:Ra(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,i){e.setPositionClasses&&i.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",s=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,i){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,a]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[s,a],[u,f]=[r,o],m=0;if(this._triggersSubmenu()){if(f=r=e.xPosition==="before"?"start":"end",o=u=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let h=this._parentMaterialMenu.items.first;this._parentInnerPadding=h?h._getHostElement().offsetTop:0}m=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=s==="top"?"bottom":"top",c=a==="top"?"bottom":"top");i.withPositions([{originX:r,originY:l,overlayX:u,overlayY:s,offsetY:m},{originX:o,originY:l,overlayX:f,overlayY:s,offsetY:m},{originX:r,originY:c,overlayX:u,overlayY:a,offsetY:-m},{originX:o,originY:c,overlayX:f,overlayY:a,offsetY:-m}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),i=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:W(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(je(s=>this._menuOpen&&s!==this._menuItemInstance)):W();return fn(e,r,o,i)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ki(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Ga.get(e)===this}_triggerIsAriaDisabled(){return ue(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(i){ef()};static \u0275dir=H({type:t})}return t})(),Bm=(()=>{class t extends YL{_cleanupTouchstart;_hoverSubscription=Se.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new q;onMenuOpen=this.menuOpened;menuClosed=new q;onMenuClose=this.menuClosed;constructor(){super(!0);let e=d($e);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",i=>{ms(i)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){fs(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let i=e.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,r){i&1&&U("click",function(s){return r._handleClick(s)})("mousedown",function(s){return r._handleMousedown(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&ge("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Ve]})}return t})();var Vm=class{brands=[];types=[];sort="name";pageSize=10;pageNumber=1;search=""};var my=class{_box;_destroyed=new T;_resizeSubject=new T;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new be(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(je(e=>e.some(i=>i.target===n)),Hd({bufferSize:1,refCount:!0}),Be(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},RI=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(j);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new my(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var XL=["notch"],QL=["matFormFieldNotchedOutline",""],KL=["*"],NI=["iconPrefixContainer"],OI=["textPrefixContainer"],PI=["iconSuffixContainer"],FI=["textSuffixContainer"],JL=["textField"],ej=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],tj=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function nj(t,n){t&1&&G(0,"span",21)}function ij(t,n){if(t&1&&(p(0,"label",20),Ae(1,1),Y(2,nj,1,0,"span",21),g()),t&2){let e=B(2);z("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ge("for",e._control.disableAutomaticLabeling?null:e._control.id),_(2),X(!e.hideRequiredMarker&&e._control.required?2:-1)}}function rj(t,n){if(t&1&&Y(0,ij,3,5,"label",20),t&2){let e=B();X(e._hasFloatingLabel()?0:-1)}}function oj(t,n){t&1&&G(0,"div",7)}function sj(t,n){}function aj(t,n){if(t&1&&wt(0,sj,0,0,"ng-template",13),t&2){B(2);let e=Ut(1);z("ngTemplateOutlet",e)}}function lj(t,n){if(t&1&&(p(0,"div",9),Y(1,aj,1,1,null,13),g()),t&2){let e=B();z("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),_(),X(e._forceDisplayInfixLabel()?-1:1)}}function cj(t,n){t&1&&(p(0,"div",10,2),Ae(2,2),g())}function dj(t,n){t&1&&(p(0,"div",11,3),Ae(2,3),g())}function uj(t,n){}function fj(t,n){if(t&1&&wt(0,uj,0,0,"ng-template",13),t&2){B();let e=Ut(1);z("ngTemplateOutlet",e)}}function mj(t,n){t&1&&(p(0,"div",14,4),Ae(2,4),g())}function hj(t,n){t&1&&(p(0,"div",15,5),Ae(2,5),g())}function pj(t,n){t&1&&G(0,"div",16)}function gj(t,n){t&1&&(p(0,"div",18),Ae(1,6),g())}function vj(t,n){if(t&1&&(p(0,"mat-hint",22),I(1),g()),t&2){let e=B(2);z("id",e._hintLabelId),_(),He(e.hintLabel)}}function _j(t,n){if(t&1&&(p(0,"div",19),Y(1,vj,2,2,"mat-hint",22),Ae(2,7),G(3,"div",23),Ae(4,8),g()),t&2){let e=B();_(),X(e.hintLabel?1:-1)}}var Un=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["mat-label"]]})}return t})(),zI=new b("MatError"),ed=(()=>{class t{id=d(at).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&On("id",r.id)},inputs:{id:"id"},features:[vt([{provide:zI,useExisting:t}])]})}return t})(),Jc=(()=>{class t{align="start";id=d(at).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(On("id",r.id),ge("align",null),re("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),yj=new b("MatPrefix");var bj=new b("MatSuffix");var $I=new b("FloatingLabelParent"),LI=(()=>{class t{_elementRef=d($);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(RI);_ngZone=d(j);_parent=d($I);_resizeSubscription=new Se;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Cj(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&re("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Cj(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var jI="mdc-line-ripple--active",Hm="mdc-line-ripple--deactivating",BI=(()=>{class t{_elementRef=d($);_cleanupTransitionEnd;constructor(){let e=d(j),i=d($e);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Hm),e.add(jI)}deactivate(){this._elementRef.nativeElement.classList.add(Hm)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Hm);e.propertyName==="opacity"&&r&&i.remove(jI,Hm)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),VI=(()=>{class t{_elementRef=d($);_ngZone=d(j);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Pt(XL,5),i&2){let o;ve(o=_e())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&re("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:QL,ngContentSelectors:KL,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(yt(),tn(0,"div",1),gt(1,"div",2,0),Ae(3),Dt(),tn(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),td=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t})}return t})();var nd=new b("MatFormField"),wj=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),HI="fill",Dj="auto",UI="fixed",Ej="translateY(-50%)",zn=(()=>{class t{_elementRef=d($);_changeDetectorRef=d(qe);_platform=d(Ue);_idGenerator=d(at);_ngZone=d(j);_defaults=d(wj,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Zl("iconPrefixContainer");_textPrefixContainerSignal=Zl("textPrefixContainer");_iconSuffixContainerSignal=Zl("iconSuffixContainer");_textSuffixContainerSignal=Zl("textSuffixContainer");_prefixSuffixContainers=Yt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=hD(Un);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=At(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Dj}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||HI;this._appearanceSignal.set(i)}_appearanceSignal=de(HI);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||UI}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||UI}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new T;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=nt();constructor(){let e=this._defaults,i=d(wn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),hr(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Yt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(jt([void 0,void 0]),ee(()=>[i.errorState,i.userAriaDescribedBy]),Vd(),je(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Be(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),fn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){yD({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Yt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,h=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,v=`var(--mat-mdc-form-field-label-transform, ${Ej} translateX(${h}))`,S=s+a+l+c;return[v,S]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(lf(o,r._labelChild,Un,5),Mn(o,td,5)(o,yj,5)(o,bj,5)(o,zI,5)(o,Jc,5)),i&2){df();let s;ve(s=_e())&&(r._formFieldControl=s.first),ve(s=_e())&&(r._prefixChildren=s),ve(s=_e())&&(r._suffixChildren=s),ve(s=_e())&&(r._errorChildren=s),ve(s=_e())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(cf(r._iconPrefixContainerSignal,NI,5)(r._textPrefixContainerSignal,OI,5)(r._iconSuffixContainerSignal,PI,5)(r._textSuffixContainerSignal,FI,5),Pt(JL,5)(NI,5)(OI,5)(PI,5)(FI,5)(LI,5)(VI,5)(BI,5)),i&2){df(4);let o;ve(o=_e())&&(r._textField=o.first),ve(o=_e())&&(r._iconPrefixContainer=o.first),ve(o=_e())&&(r._textPrefixContainer=o.first),ve(o=_e())&&(r._iconSuffixContainer=o.first),ve(o=_e())&&(r._textSuffixContainer=o.first),ve(o=_e())&&(r._floatingLabel=o.first),ve(o=_e())&&(r._notchedOutline=o.first),ve(o=_e())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&re("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[vt([{provide:nd,useExisting:t},{provide:$I,useExisting:t}])],ngContentSelectors:tj,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(yt(ej),wt(0,rj,1,1,"ng-template",null,0,rs),p(2,"div",6,1),U("click",function(s){return r._control.onContainerClick(s)}),Y(4,oj,1,0,"div",7),p(5,"div",8),Y(6,lj,2,2,"div",9),Y(7,cj,3,0,"div",10),Y(8,dj,3,0,"div",11),p(9,"div",12),Y(10,fj,1,1,null,13),Ae(11),g(),Y(12,mj,3,0,"div",14),Y(13,hj,3,0,"div",15),g(),Y(14,pj,1,0,"div",16),g(),p(15,"div",17),Y(16,gj,2,0,"div",18)(17,_j,5,1,"div",19),g()),i&2){let o;_(2),re("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),_(2),X(!r._hasOutline()&&!r._control.disabled?4:-1),_(2),X(r._hasOutline()?6:-1),_(),X(r._hasIconPrefix?7:-1),_(),X(r._hasTextPrefix?8:-1),_(2),X(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),_(2),X(r._hasTextSuffix?12:-1),_(),X(r._hasIconSuffix?13:-1),_(),X(r._hasOutline()?-1:14),_(),re("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();_(),X((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[LI,VI,Ql,BI,Jc],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var xj=["text"],Ij=[[["mat-icon"]],"*"],Sj=["mat-icon","*"];function Mj(t,n){if(t&1&&G(0,"mat-pseudo-checkbox",1),t&2){let e=B();z("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Tj(t,n){if(t&1&&G(0,"mat-pseudo-checkbox",3),t&2){let e=B();z("disabled",e.disabled)}}function kj(t,n){if(t&1&&(p(0,"span",4),I(1),g()),t&2){let e=B();_(),st("(",e.group.label,")")}}var py=new b("MAT_OPTION_PARENT_COMPONENT"),gy=new b("MatOptgroup");var hy=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Um=(()=>{class t{_element=d($);_changeDetectorRef=d(qe);_parent=d(py,{optional:!0});group=d(gy,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(at).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=de(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new q;_text;_stateChanges=new T;constructor(){let e=d(Et);e.load(co),e.load(lo),this._signalDisableRipple=!!this._parent&&Yi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ft(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new hy(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Pt(xj,7),i&2){let o;ve(o=_e())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&U("click",function(){return r._selectViaInteraction()})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(On("id",r.id),ge("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),re("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ue]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Sj,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(yt(Ij),Y(0,Mj,1,2,"mat-pseudo-checkbox",1),Ae(1),p(2,"span",2,0),Ae(4,1),g(),Y(5,Tj,1,1,"mat-pseudo-checkbox",3),Y(6,kj,2,1,"span",4),G(7,"div",5)),i&2&&(X(r.multiple?0:-1),_(5),X(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),_(),X(r.group&&r.group._inert?6:-1),_(),z("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[SI,cm],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function GI(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let s=0;s<t+1;s++)i[s].group&&i[s].group===r[o]&&o++;return o}return 0}function WI(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var zm=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wa=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Aj=["trigger"],Rj=["panel"],Nj=[[["mat-select-trigger"]],"*"],Oj=["mat-select-trigger","*"];function Pj(t,n){if(t&1&&(p(0,"span",4),I(1),g()),t&2){let e=B();_(),He(e.placeholder)}}function Fj(t,n){t&1&&Ae(0)}function Lj(t,n){if(t&1&&(p(0,"span",11),I(1),g()),t&2){let e=B(2);_(),He(e.triggerValue)}}function jj(t,n){if(t&1&&(p(0,"span",5),Y(1,Fj,1,0)(2,Lj,2,1,"span",11),g()),t&2){let e=B();_(),X(e.customTrigger?1:2)}}function Bj(t,n){if(t&1){let e=nn();p(0,"div",12,1),U("keydown",function(r){rt(e);let o=B();return ot(o._handleKeydown(r))}),Ae(2,1),g()}if(t&2){let e=B();Pn(e.panelClass),re("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),ge("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Vj=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(K);return()=>ho(t)}}),Hj=new b("MAT_SELECT_CONFIG"),Uj=new b("MatSelectTrigger"),vy=class{source;value;constructor(n,e){this.source=n,this.value=e}},YI=(()=>{class t{_viewportRuler=d(uo);_changeDetectorRef=d(qe);_elementRef=d($);_dir=d(wn,{optional:!0});_idGenerator=d(at);_renderer=d($e);_parentFormField=d(nd,{optional:!0});ngControl=d(En,{self:!0,optional:!0});_liveAnnouncer=d(xc);_defaultOptions=d(Hj,{optional:!0});_animationsDisabled=nt();_popoverLocation;_initialized=new T;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=GI(e,this.options,this.optionGroups),s=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=WI(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new vy(this,e)}_scrollStrategyFactory=d(Vj);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new T;_errorStateTracker;stateChanges=new T;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=de(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(oi.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=hi(()=>{let e=this.options;return e?e.changes.pipe(jt(e),Rt(()=>fn(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Rt(()=>this.optionSelectionChanges))});openedChange=new q;_openedStream=this.openedChange.pipe(je(e=>e),ee(()=>{}));_closedStream=this.openedChange.pipe(je(e=>!e),ee(()=>{}));selectionChange=new q;valueChange=new q;constructor(){let e=d(zm),i=d(Es,{optional:!0}),r=d(Mr,{optional:!0}),o=d(new Jr("tabindex"),{optional:!0}),s=d(Fc,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Wa(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new go(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Be(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Be(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(jt(null),Be(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(dt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&am(this._trackedModal,"aria-owns",i),T_(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;am(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,s=this._keyManager;if(!s.isTyping()&&o&&!Ft(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let l=this.selected;l&&a!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,s=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&i.activeItem&&!Ft(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(a?l.select():l.deselect())})}else{let a=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==a&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ft(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Aa?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new kc(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=fn(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Be(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),fn(...this.options.map(i=>i._stateChanges)).pipe(Be(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=rn(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&Mn(o,Uj,5)(o,Um,5)(o,gy,5),i&2){let s;ve(s=_e())&&(r.customTrigger=s.first),ve(s=_e())&&(r.options=s),ve(s=_e())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&Pt(Aj,5)(Rj,5)(Cm,5),i&2){let o;ve(o=_e())&&(r.trigger=o.first),ve(o=_e())&&(r.panel=o.first),ve(o=_e())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&U("keydown",function(s){return r._handleKeydown(s)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(ge("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),re("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",ue],disableRipple:[2,"disableRipple","disableRipple",ue],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Fn(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ue],placeholder:"placeholder",required:[2,"required","required",ue],multiple:[2,"multiple","multiple",ue],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",ue],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Fn],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",ue]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[vt([{provide:td,useExisting:t},{provide:py,useExisting:t}]),ht],ngContentSelectors:Oj,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(yt(Nj),p(0,"div",2,0),U("click",function(){return r.open()}),p(3,"div",3),Y(4,Pj,2,1,"span",4)(5,jj,3,1,"span",5),g(),p(6,"div",6)(7,"div",7),Nn(),p(8,"svg",8),G(9,"path",9),g()()()(),wt(10,Bj,3,16,"ng-template",10),U("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(s){return r._handleOverlayKeydown(s)})),i&2){let o=Ut(1);_(3),ge("id",r._valueId),_(),X(r.empty?4:5),_(6),z("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Aa,Cm],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return t})();var zj=["tooltip"],$j=20;var Gj=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(K);return()=>ho(t,{scrollThrottle:$j})}}),Wj=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var XI="tooltip-panel",qj={passive:!0},Zj=8,Yj=8,Xj=24,Qj=200,QI=(()=>{class t{_elementRef=d($);_ngZone=d(j);_platform=d(Ue);_ariaDescriber=d(lm);_focusMonitor=d(er);_dir=d(wn);_injector=d(K);_viewContainerRef=d(en);_mediaMatcher=d(xa);_document=d(Z);_renderer=d($e);_animationsDisabled=nt();_defaultOptions=d(Wj,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Kj;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=At(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=At(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Hn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Hn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new T;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Zj}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Be(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new Ti(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Be(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof $)return this._overlayRef;this._detach()}let i=this._injector.get(Ta).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${XI}`,o=Ra(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(Be(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=tr(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Gj)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Be(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Be(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Be(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Be(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(w(w({},r.main),o.main)),this._addOffset(w(w({},r.fallback),o.fallback))])}_addOffset(e){let i=Yj,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ot(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,s;if(i==="center"?this._dir&&this._dir.value==="rtl"?s=r==="end"?"left":"right":s=r==="start"?"left":"right":s=i==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let a=this._overlayRef;if(a){let l=`${this._cssClassPrefix}-${XI}-`;a.removePanelClass(l+this._currentPosition),a.addPanelClass(l+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,qj))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ot({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ft(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&re("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),Kj=(()=>{class t{_changeDetectorRef=d(qe);_elementRef=d($);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=nt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new T;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Xj&&e.width>=Qj}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(i);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Pt(zj,7),i&2){let o;ve(o=_e())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&U("mouseleave",function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(gt(0,"div",1,0),ia("animationend",function(s){return r._handleAnimationEnd(s)}),gt(2,"div",2),I(3),Dt()()),i&2&&(Pn(r.tooltipClass),re("mdc-tooltip--multiline",r._isMultiline),_(3),He(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();function Jj(t,n){if(t&1&&(p(0,"mat-option",17),I(1),g()),t&2){let e=n.$implicit;z("value",e),_(),st(" ",e," ")}}function eB(t,n){if(t&1){let e=nn();p(0,"mat-form-field",14)(1,"mat-select",16,0),U("selectionChange",function(r){rt(e);let o=B(2);return ot(o._changePageSize(r.value))}),yn(3,Jj,2,2,"mat-option",17,gv),g(),p(5,"div",18),U("click",function(){rt(e);let r=Ut(2);return ot(r.open())}),g()()}if(t&2){let e=B(2);z("appearance",e._formFieldAppearance)("color",e.color),_(),z("value",e.pageSize)("disabled",e.disabled),af("aria-labelledby",e._pageSizeLabelId),z("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),_(2),bn(e._displayedPageSizeOptions)}}function tB(t,n){if(t&1&&(p(0,"div",15),I(1),g()),t&2){let e=B(2);_(),He(e.pageSize)}}function nB(t,n){if(t&1&&(p(0,"div",3)(1,"div",13),I(2),g(),Y(3,eB,6,7,"mat-form-field",14),Y(4,tB,2,1,"div",15),g()),t&2){let e=B();_(),ge("id",e._pageSizeLabelId),_(),st(" ",e._intl.itemsPerPageLabel," "),_(),X(e._displayedPageSizeOptions.length>1?3:-1),_(),X(e._displayedPageSizeOptions.length<=1?4:-1)}}function iB(t,n){if(t&1){let e=nn();p(0,"button",19),U("click",function(){rt(e);let r=B();return ot(r._buttonClicked(0,r._previousButtonsDisabled()))}),Nn(),p(1,"svg",8),G(2,"path",20),g()()}if(t&2){let e=B();z("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),ge("aria-label",e._intl.firstPageLabel)}}function rB(t,n){if(t&1){let e=nn();p(0,"button",21),U("click",function(){rt(e);let r=B();return ot(r._buttonClicked(r.getNumberOfPages()-1,r._nextButtonsDisabled()))}),Nn(),p(1,"svg",8),G(2,"path",22),g()()}if(t&2){let e=B();z("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),ge("aria-label",e._intl.lastPageLabel)}}var oB=(()=>{class t{changes=new T;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,i,r)=>{if(r==0||i==0)return`0 of ${r}`;r=Math.max(r,0);let o=e*i,s=o<r?Math.min(o+i,r):o+i;return`${o+1} \u2013 ${s} of ${r}`};static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sB=50;var aB=new b("MAT_PAGINATOR_DEFAULT_OPTIONS"),KI=(()=>{class t{_intl=d(oB);_changeDetectorRef=d(qe);_formFieldAppearance;_pageSizeLabelId=d(at).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new Pi(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>Fn(i,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new q;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,i=d(aB,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:r,pageSizeOptions:o,hidePageSize:s,showFirstLastButtons:a}=i;r!=null&&(this._pageSize=r),o!=null&&(this._pageSizeOptions=o),s!=null&&(this.hidePageSize=s),a!=null&&(this.showFirstLastButtons=a)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let i=this.pageIndex*this.pageSize,r=this.pageIndex;this.pageIndex=Math.floor(i/e)||0,this.pageSize=e,this._emitPageEvent(r)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:sB),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let i=this.pageIndex;e!==i&&(this.pageIndex=e,this._emitPageEvent(i))}_buttonClicked(e,i){i||this._navigate(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",Fn],length:[2,"length","length",Fn],pageSize:[2,"pageSize","pageSize",Fn],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",ue],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",ue],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",ue]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(i,r){i&1&&(p(0,"div",1)(1,"div",2),Y(2,nB,5,4,"div",3),p(3,"div",4)(4,"div",5),I(5),g(),Y(6,iB,3,5,"button",6),p(7,"button",7),U("click",function(){return r._buttonClicked(r.pageIndex-1,r._previousButtonsDisabled())}),Nn(),p(8,"svg",8),G(9,"path",9),g()(),Gs(),p(10,"button",10),U("click",function(){return r._buttonClicked(r.pageIndex+1,r._nextButtonsDisabled())}),Nn(),p(11,"svg",8),G(12,"path",11),g()(),Y(13,rB,3,5,"button",12),g()()()),i&2&&(_(2),X(r.hidePageSize?-1:2),_(3),st(" ",r._intl.getRangeLabel(r.pageIndex,r.pageSize,r.length)," "),_(),X(r.showFirstLastButtons?6:-1),_(),z("matTooltip",r._intl.previousPageLabel)("matTooltipDisabled",r._previousButtonsDisabled())("disabled",r._previousButtonsDisabled())("tabindex",r._previousButtonsDisabled()?-1:null),ge("aria-label",r._intl.previousPageLabel),_(3),z("matTooltip",r._intl.nextPageLabel)("matTooltipDisabled",r._nextButtonsDisabled())("disabled",r._nextButtonsDisabled())("tabindex",r._nextButtonsDisabled()?-1:null),ge("aria-label",r._intl.nextPageLabel),_(3),X(r.showFirstLastButtons?13:-1))},dependencies:[zn,YI,Um,bs,QI],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return t})();var lB=(t,n)=>n.id;function cB(t,n){if(t&1&&G(0,"app-product-item",12),t&2){let e=n.$implicit;z("product",e)}}function dB(t,n){if(t&1&&(p(0,"mat-list-option",14),I(1),g()),t&2){let e=n.$implicit,i=B(2);z("value",e.value)("selected",e.value===i.shopParams.sort),_(),st(" ",e.name," ")}}function uB(t,n){if(t&1){let e=nn();p(0,"div",2)(1,"div",3)(2,"mat-paginator",4),U("page",function(r){rt(e);let o=B();return ot(o.handlePageEvent(r))}),g(),p(3,"form",5,0),U("ngSubmit",function(){rt(e);let r=B();return ot(r.onSearchChange())}),p(5,"input",6),Cr("ngModelChange",function(r){rt(e);let o=B();return Kr(o.shopParams.search,r)||(o.shopParams.search=r),ot(r)}),g(),p(6,"button",7)(7,"mat-icon"),I(8,"search"),g()()(),p(9,"div",8)(10,"button",9),U("click",function(){rt(e);let r=B();return ot(r.openFiltersDialog())}),p(11,"mat-icon"),I(12,"filter_list"),g(),I(13," Filters "),g(),p(14,"button",10)(15,"mat-icon"),I(16,"swap_vert"),g(),I(17," Sort "),g()()(),p(18,"div",11),yn(19,cB,1,1,"app-product-item",12,lB),g()(),p(21,"mat-menu",null,1)(23,"mat-selection-list",13),U("selectionChange",function(r){rt(e);let o=B();return ot(o.onSortChange(r))}),yn(24,dB,2,3,"mat-list-option",14,Xi),g()()}if(t&2){let e=Ut(22),i=B();_(2),z("length",i.products.count)("pageSize",i.shopParams.pageSize)("pageIndex",i.shopParams.pageNumber-1)("showFirstLastButtons",!0)("pageSizeOptions",i.pageSizeOptions),_(3),br("ngModel",i.shopParams.search),_(9),z("matMenuTriggerFor",e),_(5),bn(i.products.data),_(4),z("multiple",!1),_(),bn(i.sortOptions)}}var $m=class t{shopService=d(so);dialogService=d(eI);products;shopParams=new Vm;sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low-High",value:"priceAsc"},{name:"Price: High-Low",value:"priceDesc"}];pageSizeOptions=[5,10,15,20];ngOnInit(){this.initializeComponent()}initializeComponent(){this.shopService.getBrands(),this.shopService.getTypes(),this.getProducts()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe({next:n=>this.products=n,error:n=>console.log(n)})}handlePageEvent(n){this.shopParams.pageNumber=n.pageIndex+1,this.shopParams.pageSize=n.pageSize,this.getProducts()}onSortChange(n){let e=n.options[0];e&&(this.shopParams.sort=e.value,this.shopParams.pageNumber=1,this.getProducts())}onSearchChange(){this.shopParams.pageNumber=1,this.getProducts()}openFiltersDialog(){this.dialogService.open(Lm,{minWidth:"500px",data:{selectedBrands:this.shopParams.brands,selectedTypes:this.shopParams.types}}).afterClosed().subscribe({next:e=>{e&&(this.shopParams.brands=e.selectedBrands,this.shopParams.types=e.selectedTypes,this.shopParams.pageNumber=1,this.getProducts())}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-shop"]],decls:1,vars:1,consts:[["searchForm","ngForm"],["sortMenu","matMenu"],[1,"flex","flex-col","gap-3"],[1,"flex","justify-between"],["aria-label","Select Page",3,"page","length","pageSize","pageIndex","showFirstLastButtons","pageSizeOptions"],[1,"relative","flex","items-center","w-full","max-w-md","mx-4",3,"ngSubmit"],["type","search","placeholder","Search","name","search",1,"block","w-full","p-4","text-sm","text-gray-900","border-gray-300","rounded-lg",3,"ngModelChange","ngModel"],["mat-icon-button","","type","submit",1,"absolute","inset-y-0","right-10","flex","items-center","pl-3"],[1,"flex","gap-3"],["mat-stroked-button","",1,"match-input-height",3,"click"],["mat-stroked-button","",1,"match-input-height",3,"matMenuTriggerFor"],[1,"grid","grid-cols-5","gap-4"],[3,"product"],[3,"selectionChange","multiple"],[3,"value","selected"]],template:function(e,i){e&1&&Y(0,uB,26,8),e&2&&X(i.products?0:-1)},dependencies:[mm,pt,Tn,bo,Qc,Xc,Bm,KI,Ua,Ha,nr,si,Ba,xs,Es,bs],encapsulation:2})};var fB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),mB={passive:!0},JI=(()=>{class t{_platform=d(Ue);_ngZone=d(j);_renderer=d(Nt).createRenderer(null,null);_styleLoader=d(Et);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return St;this._styleLoader.load(fB);let i=Dn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new T,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,mB)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=Dn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var eS=new b("MAT_INPUT_VALUE_ACCESSOR");var hB=["button","checkbox","file","hidden","image","radio","range","reset","submit"],pB=new b("MAT_INPUT_CONFIG"),Co=(()=>{class t{_elementRef=d($);_platform=d(Ue);ngControl=d(En,{optional:!0,self:!0});_autofillMonitor=d(JI);_ngZone=d(j);_formField=d(nd,{optional:!0});_renderer=d($e);_uid=d(at).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(pB,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new T;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=At(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(oi.required)??!1}set required(e){this._required=At(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&A_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=At(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>A_().has(e));constructor(){let e=d(Es,{optional:!0}),i=d(Mr,{optional:!0}),r=d(zm),o=d(eS,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?Yi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Wa(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&hr(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){hB.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&U("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(On("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ge("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),re("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ue]},exportAs:["matInput"],features:[vt([{provide:td,useExisting:t}]),ht]})}return t})();function gB(t,n){if(t&1){let e=nn();p(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),G(4,"img",4),g(),p(5,"div")(6,"h1",5),I(7),g(),p(8,"div",6)(9,"p",7),I(10),Jn(11,"currency"),g()(),p(12,"div",8)(13,"button",9),U("click",function(){rt(e);let r=B();return ot(r.updateCart())}),p(14,"mat-icon"),I(15,"shopping_cart"),g(),I(16),g(),p(17,"mat-form-field",10)(18,"mat-label"),I(19,"Quantity"),g(),p(20,"input",11),Cr("ngModelChange",function(r){rt(e);let o=B();return Kr(o.quantity,r)||(o.quantity=r),ot(r)}),g()()(),G(21,"mat-divider"),p(22,"p",12),I(23),g()()()()()}if(t&2){let e=B();_(4),z("src",Ii(e.product.pictureUrl),Yr),_(3),He(e.product.name),_(3),st(" ",ei(11,8,e.product.price)," "),_(3),z("disabled",e.quantity===e.quantityInCart),_(3),st(" ",e.getButtonText()," "),_(4),br("ngModel",e.quantity),_(3),st(" ",e.product.description," ")}}var Gm=class t{shopService=d(so);activatedRoute=d(Vn);cartService=d(Kt);product;quantityInCart=0;quantity=1;ngOnInit(){this.loadProduct()}loadProduct(){let n=this.activatedRoute.snapshot.paramMap.get("id");n&&this.shopService.getProduct(+n).subscribe({next:e=>{this.product=e,this.updateQuantityInCart()},error:e=>console.log(e)})}updateQuantityInCart(){this.quantityInCart=this.cartService.cart()?.items.find(n=>n.productId===this.product?.id)?.quantity||0,this.quantity=this.quantityInCart||1}getButtonText(){return this.quantityInCart>0?"Update cart":"Add to cart"}updateCart(){if(this.product)if(this.quantity>this.quantityInCart){let n=this.quantity-this.quantityInCart;this.quantityInCart+=n,this.cartService.addItemToCart(this.product,n)}else{let n=this.quantityInCart-this.quantity;this.quantityInCart-=n,this.cartService.removeItemFromCart(this.product.id,n)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[1,"py-8"],[1,"max-w-screen-2xl","px-4","mx-auto"],[1,"grid","grid-cols-2","gap-8"],[1,"max-w-xl","mx-auto"],["alt","product image",1,"w-full",3,"src"],[1,"text-2xl","font-semibold","text-gray-900"],[1,"mt-4","items-center","gap-4","flex"],[1,"text-3xl","font-extrabold","text-gray-900"],[1,"flex","gap-4","mt-6"],["mat-flat-button","",1,"min-h-14",3,"click","disabled"],["appearance","outline",1,"flex"],["min","0","matInput","","type","number",3,"ngModelChange","ngModel"],[1,"mt-6","text-gray-500"]],template:function(e,i){e&1&&Y(0,gB,24,10,"section",0),e&2&&X(i.product?0:-1)},dependencies:[pt,Tn,zn,Co,Un,Na,Ua,nr,oy,si,ly,xs,wr],encapsulation:2})};function vB(t,n){if(t&1&&(p(0,"li",4),I(1),g()),t&2){let e=n.$implicit;_(),He(e)}}function _B(t,n){if(t&1&&(p(0,"div",2)(1,"ul",3),yn(2,vB,2,1,"li",4,Xi),g()()),t&2){let e=B();_(2),bn(e.validationErrors)}}var Wm=class t{baseUrl=Ji.apiUrl;http=d(ni);validationErrors;get500Error(){this.http.get(this.baseUrl+"buggy/internalerror").subscribe({next:n=>console.log(n),error:n=>console.log(n)})}get404Error(){this.http.get(this.baseUrl+"buggy/notfound").subscribe({next:n=>console.log(n),error:n=>console.log(n)})}get400Error(){this.http.get(this.baseUrl+"buggy/badrequest").subscribe({next:n=>console.log(n),error:n=>console.log(n)})}get401Error(){this.http.get(this.baseUrl+"buggy/unauthorized").subscribe({next:n=>console.log(n),error:n=>console.log(n)})}get400ValidationError(){this.http.post(this.baseUrl+"buggy/validationerror",{}).subscribe({next:n=>console.log(n),error:n=>this.validationErrors=n})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-test-errors"]],decls:12,vars:1,consts:[[1,"mt-5","flex","justify-center","gap-4"],["mat-stroked-button","",3,"click"],[1,"mx-auto","max-w-lg","mt-5","bg-red-100"],[1,"space-y-2","p-2"],[1,"text-red-800"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"button",1),U("click",function(){return i.get500Error()}),I(2,"Test 500 error"),g(),p(3,"button",1),U("click",function(){return i.get404Error()}),I(4,"Test 404 error"),g(),p(5,"button",1),U("click",function(){return i.get400Error()}),I(6,"Test 400 error"),g(),p(7,"button",1),U("click",function(){return i.get401Error()}),I(8,"Test 401 error"),g(),p(9,"button",1),U("click",function(){return i.get400ValidationError()}),I(10,"Test validation error"),g()(),Y(11,_B,4,0,"div",2)),e&2&&(_(11),X(i.validationErrors?11:-1))},dependencies:[pt],encapsulation:2})};var qm=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-not-found"]],decls:10,vars:0,consts:[[1,"flex","items-center","justify-center","min-h-96","bg-gray-100"],[1,"text-center"],[1,"text-purple-700!","icon-display"],[1,"text-4xl","font-bold","text-gray-800","mt-4"],[1,"text-lg","text-gray-600","mt-2"],["routerLink","/shop","mat-flat-button","",1,"mt-4"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"mat-icon",2),I(3,"error_outline"),g(),p(4,"h1",3),I(5,"404"),g(),p(6,"p",4),I(7,"Page not found"),g(),p(8,"button",5),I(9,"Back to shop"),g()()())},dependencies:[Tn,un,pt],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};function yB(t,n){if(t&1&&(p(0,"h5",2),I(1),g(),p(2,"p",3),I(3,"This error comes from the server, not Angular"),g(),p(4,"p",4),I(5,"What to do next?"),g(),p(6,"ol",5)(7,"li",6),I(8,"Check the network tab in chrome dev tools"),g(),p(9,"li",6),I(10,"Reproduce the error in postman. If same error, don't waste time troubleshooting angular code"),g()(),p(11,"h5",7),I(12,"Stack trace"),g(),p(13,"mat-card",8)(14,"code",9),I(15),g()()),t&2){let e=B();_(),st("Error: ",e.error.message),_(14),He(e.error.details)}}var Zm=class t{constructor(n){this.router=n;let e=this.router.currentNavigation();this.error=e?.extras.state?.error}router;error;static \u0275fac=function(e){return new(e||t)(ae(Tt))};static \u0275cmp=k({type:t,selectors:[["app-server-error"]],decls:4,vars:1,consts:[[1,"container","mt-5","p-4","bg-gray-100","rounded","shadow-lg"],[1,"text-2xl","font-semibold","mb-4"],[1,"text-red-600"],[1,"font-bold","mb-2"],[1,"mb-2"],[1,"list-decimal","ml-5","mb-4"],[1,"mb-1"],[1,"text-lg","font-semibold","mb-2"],[1,"p-4","bg-white"],[1,"block","whitespace-pre-wrap"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"h1",1),I(2,"Internal server error"),g(),Y(3,yB,16,2),g()),e&2&&(_(3),X(i.error?3:-1))},dependencies:[ao],encapsulation:2})};var Ym=class t{item=ff.required();cartService=d(Kt);incrementQuantity(){this.cartService.addItemToCart(this.item())}decrementQuantity(){this.cartService.removeItemFromCart(this.item().productId)}removeItemFromCart(){this.cartService.removeItemFromCart(this.item().productId,this.item().quantity)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-cart-item"]],inputs:{item:[1,"item"]},decls:27,vars:11,consts:[[1,"rounded-lg","border","border-gray-200","bg-white","p-4","shadow-sm","mb-4"],[1,"flex","items-center","justify-between","gap-6"],[1,"shrink","order-1",3,"routerLink"],["alt","product image",1,"h-20","w-20",3,"src"],[1,"flex","items-center","justify-between","order-3"],[1,"flex","items-center","align-middle","gap-3"],["mat-icon-button","",3,"click"],[1,"text-red-600!"],[1,"font-semibold","text-xl","mb-1"],[1,"text-green-600!"],[1,"text-end","order-4","w-32"],[1,"font-bold","text-xl","text-gray-900"],[1,"w-full","flex","flex-col","flex-1","space-y-4","order-2","max-w-md"],[1,"font-medium",3,"routerLink"],[1,"flex","items-center","gap-4"],["mat-button","",1,"text-red-700!","flex","items-center",3,"click"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"a",2),G(3,"img",3),g(),p(4,"div",4)(5,"div",5)(6,"button",6),U("click",function(){return i.decrementQuantity()}),p(7,"mat-icon",7),I(8,"remove"),g()(),p(9,"div",8),I(10),g(),p(11,"button",6),U("click",function(){return i.incrementQuantity()}),p(12,"mat-icon",9),I(13,"add"),g()()(),p(14,"div",10)(15,"p",11),I(16),Jn(17,"currency"),g()()(),p(18,"div",12)(19,"a",13),I(20),g(),p(21,"div",14)(22,"button",15),U("click",function(){return i.removeItemFromCart()}),p(23,"mat-icon"),I(24,"delete"),g(),p(25,"span"),I(26,"Delete"),g()()()()()()),e&2&&(_(2),z("routerLink",is("/shop/",i.item().productId)),_(),z("src",Ii(i.item().pictureUrl),Yr),_(7),st(" ",i.item().quantity),_(6),He(ei(17,9,i.item().price)),_(3),z("routerLink",is("/shop/",i.item().productId)),_(),st(" ",i.item().productName," "))},dependencies:[un,Tn,pt,bs,wr],encapsulation:2})};var Xm=class t{cartService=d(Kt);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-order-summary"]],decls:45,vars:12,consts:[[1,"mx-auto","max-w-4xl","flex-1","space-y-6","w-full"],[1,"space-y-4","rounded-lg","border","border-gray-200","p-4","bg-white","shadow-sm"],[1,"text-xl","font-semibold"],[1,"space-y-4"],[1,"space-y-2"],[1,"flex","items-center","justify-between","gap-4"],[1,"font-medium","text-gray-500"],[1,"font-medium","text-gray-900"],[1,"font-medium","text-green-500"],[1,"flex","items-center","justify-between","gap-4","border-t","border-gray-200","pt-2"],[1,"flex","flex-col","gap-2"],["routerLink","/checkout","mat-flat-button",""],["routerLink","/shop","mat-button",""],[1,"space-y-4","rounded-lg","border","border-gray-200","bg-white","shadow-sm"],[1,"space-y-2","flex","flex-col","p-2"],[1,"mb-2","block","text-sm","font-mediem"],["appearance","outline"],["type","text","matInput",""],["mat-flat-button",""]],template:function(e,i){if(e&1&&(p(0,"div",0)(1,"div",1)(2,"p",2),I(3,"Order summary"),g(),p(4,"div",3)(5,"div",4)(6,"dl",5)(7,"dt",6),I(8,"Subtotal"),g(),p(9,"dd",7),I(10),Jn(11,"currency"),g()(),p(12,"dl",5)(13,"dt",6),I(14,"Discount"),g(),p(15,"dd",8),I(16),Jn(17,"currency"),g()(),p(18,"dl",5)(19,"dt",6),I(20,"Delivery fee"),g(),p(21,"dd",7),I(22),Jn(23,"currency"),g()()(),p(24,"dl",9)(25,"dt",6),I(26,"Total"),g(),p(27,"dd",7),I(28),Jn(29,"currency"),g()()(),p(30,"div",10)(31,"button",11),I(32,"Checkout"),g(),p(33,"button",12),I(34,"Continue Shopping"),g()()(),p(35,"div",13)(36,"form",14)(37,"label",15),I(38," Do you have a voucher code? "),g(),p(39,"mat-form-field",16)(40,"mat-label"),I(41,"Voucher code"),g(),G(42,"input",17),g(),p(43,"button",18),I(44,"Apply code"),g()()()()),e&2){let r,o,s,a;_(10),He(ei(11,4,(r=i.cartService.totals())==null?null:r.subTotal)),_(6),st("-",ei(17,6,(o=i.cartService.totals())==null?null:o.discount)),_(6),He(ei(23,8,(s=i.cartService.totals())==null?null:s.shipping)),_(6),He(ei(29,10,(a=i.cartService.totals())==null?null:a.total))}},dependencies:[pt,un,Un,Co,zn,wr],encapsulation:2})};var Qm=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-empty-state"]],decls:8,vars:0,consts:[[1,"max-w-7xl","mx-auto","mt-32","px-10","py-4","bg-white","rounded-lg","shadow-md","w-full"],[1,"flex","flex-col","items-center","justify-center","py-12","w-full"],[1,"icon-display","mb-8"],[1,"text-gray-600","text-lg","font-semibold","mb-4"],["mat-flat-button","","routerLink","/shop"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"mat-icon",2),I(3,"shopping_cart"),g(),p(4,"p",3),I(5," Your shopping cart is empty "),g(),p(6,"button",4),I(7,"Go shopping!"),g()()())},dependencies:[Tn,pt,un],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};var bB=(t,n)=>n.productId;function CB(t,n){if(t&1&&G(0,"app-cart-item",2),t&2){let e=n.$implicit;z("item",e)}}function wB(t,n){if(t&1&&(p(0,"div",0)(1,"div",1),yn(2,CB,1,1,"app-cart-item",2,bB),g(),p(4,"div",3),G(5,"app-order-summary"),g()()),t&2){let e,i=B();_(2),bn((e=i.cartService.cart())==null?null:e.items)}}function DB(t,n){t&1&&G(0,"app-empty-state")}var Km=class t{cartService=d(Kt);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-cart"]],decls:2,vars:1,consts:[[1,"flex","w-full","items-start","gap-6","mt-32"],[1,"w-3/4"],[3,"item"],[1,"w-1/4"]],template:function(e,i){e&1&&Y(0,wB,6,0,"div",0)(1,DB,1,0,"app-empty-state"),e&2&&X(i.cartService.containsItems()?0:1)},dependencies:[Ym,Xm,Qm],encapsulation:2})};var Jm=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-checkout"]],decls:3,vars:0,consts:[[1,"mt-5"],[1,"text-3xl"]],template:function(e,i){e&1&&(gt(0,"div",0)(1,"h1",1),I(2,"Only Authorized Users And Not Empty Cards Have Access"),Dt()())},encapsulation:2})};var ai=class t{baseUrl=Ji.apiUrl;http=d(ni);currentUser=de(null);login(n){let e=new Ln;return e=e.append("useCookies",!0),this.http.post(this.baseUrl+"login",n,{params:e})}register(n){return this.http.post(this.baseUrl+"account/register",n)}getUserInfo(){return this.http.get(this.baseUrl+"account/user-info").pipe(ee(n=>(this.currentUser.set(n),n)))}logout(){return this.http.post(this.baseUrl+"account/logout",{})}updateAddress(n){return this.http.post(this.baseUrl+"account/address",{address:n})}getAuthState(){return this.http.get(this.baseUrl+"account/auth-status")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var eh=class t{fb=d(Fm);accountService=d(ai);router=d(Tt);activatedRoute=d(Vn);returnUrl="/shop";constructor(){let n=this.activatedRoute.snapshot.queryParams.returnUrl;n&&(this.returnUrl=n)}loginForm=this.fb.group({email:[""],password:[""]});onSubmit(){this.accountService.login(this.loginForm.value).subscribe({next:()=>{this.accountService.getUserInfo().subscribe(),this.router.navigateByUrl(this.returnUrl)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-login"]],decls:15,vars:1,consts:[[1,"max-w-lg","mx-auto","mt-32","p-8","bg-white"],[3,"ngSubmit","formGroup"],[1,"text-center","mb-6"],[1,"text-3xl","font-semibold","text-primary"],["appearance","outline",1,"w-full","mb-4"],["formControlName","email","type","email","placeholder","name@example.com","matInput",""],["formControlName","password","type","password","placeholder","Password","matInput",""],["mat-flat-button","","type","submit",1,"w-full","py-2"]],template:function(e,i){e&1&&(p(0,"mat-card",0)(1,"form",1),U("ngSubmit",function(){return i.onSubmit()}),p(2,"div",2)(3,"h1",3),I(4,"Login"),g()(),p(5,"mat-form-field",4)(6,"mat-label"),I(7,"Email Address"),g(),G(8,"input",5),g(),p(9,"mat-form-field",4)(10,"mat-label"),I(11,"Password"),g(),G(12,"input",6),g(),p(13,"button",7),I(14,"Sign In"),g()()()),e&2&&(_(),z("formGroup",i.loginForm))},dependencies:[za,Ha,nr,si,Ba,Mr,Yc,Co,pt,Un,zn,ao],encapsulation:2})};function EB(t,n){if(t&1){let e=nn();p(0,"div",1)(1,"button",2),U("click",function(){rt(e);let r=B();return ot(r.action())}),I(2),g()()}if(t&2){let e=B();_(2),st(" ",e.data.action," ")}}var xB=["label"];function IB(t,n){}var SB=Math.pow(2,31)-1,id=class{_overlayRef;instance;containerInstance;_afterDismissed=new T;_afterOpened=new T;_onAction=new T;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,SB))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},tS=new b("MatSnackBarData"),qa=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},MB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),TB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),kB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),AB=(()=>{class t{snackBarRef=d(id);data=d(tS);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(p(0,"div",0),I(1),g(),Y(2,EB,3,1,"div",1)),i&2&&(_(),st(" ",r.data.message,`
`),_(),X(r.hasAction?2:-1))},dependencies:[pt,MB,TB,kB],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),_y="_mat-snack-bar-enter",yy="_mat-snack-bar-exit",RB=(()=>{class t extends fo{_ngZone=d(j);_elementRef=d($);_changeDetectorRef=d(qe);_platform=d(Ue);_animationsDisabled=nt();snackBarConfig=d(qa);_document=d(Z);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(K);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new T;_onExit=new T;_onEnter=new T;_animationState="void";_live;_label;_role;_liveElementId=d(at).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===yy?this._completeExit():e===_y&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ot(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(_y)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(_y)},200)))}exit(){return this._destroyed?W(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ot(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(yy)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(yy),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(s=>e.classList.add(s)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Pt(mo,7)(xB,7),i&2){let o;ve(o=_e())&&(r._portalOutlet=o.first),ve(o=_e())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&U("animationend",function(s){return r.onAnimationEnd(s.animationName)})("animationcancel",function(s){return r.onAnimationEnd(s.animationName)}),i&2&&re("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Ve],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(p(0,"div",1)(1,"div",2,0)(3,"div",3),wt(4,IB,0,0,"ng-template",4),g(),G(5,"div"),g()()),i&2&&(_(5),ge("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[mo],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return t})(),NB=new b("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new qa}),nS=(()=>{class t{_live=d(xc);_injector=d(K);_breakpointObserver=d(E_);_parentSnackBar=d(t,{optional:!0,skipSelf:!0});_defaultConfig=d(NB);_animationsDisabled=nt();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=AB;snackBarContainerComponent=RB;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=w(w({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=K.create({parent:r||this._injector,providers:[{provide:qa,useValue:i}]}),s=new Ti(this.snackBarContainerComponent,i.viewContainerRef,o),a=e.attach(s);return a.instance.snackBarConfig=i,a.instance}_attach(e,i){let r=w(w(w({},new qa),this._defaultConfig),i),o=this._createOverlay(r),s=this._attachSnackBarContainer(o,r),a=new id(s,o);if(e instanceof cn){let l=new ki(e,null,{$implicit:r.data,snackBarRef:a});a.instance=s.attachTemplatePortal(l)}else{let l=this._createInjector(r,a),c=new Ti(e,void 0,l),u=s.attachComponentPortal(c);a.instance=u.instance}return this._breakpointObserver.observe(_x.HandsetPortrait).pipe(Be(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(a,r),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new Ai;i.direction=e.direction;let r=ws(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,a=!s&&e.horizontalPosition!=="center";return s?r.left("0"):a?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,tr(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return K.create({parent:r||this._injector,providers:[{provide:id,useValue:i},{provide:tS,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wo=class t{snackBar=d(nS);error(n){this.snackBar.open(n,"Close",{duration:5e3,panelClass:["snack-error"]})}success(n){this.snackBar.open(n,"Close",{duration:5e3,panelClass:["snack-success"]})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};function OB(t,n){if(t&1&&(p(0,"mat-error"),I(1),g()),t&2){let e=B();_(),st("",e.label," is required")}}function PB(t,n){t&1&&(p(0,"mat-error"),I(1,"Email is invalid"),g())}var th=class t{constructor(n){this.controlDir=n;this.controlDir.valueAccessor=this}controlDir;label="";type="text";writeValue(n){}registerOnChange(n){}registerOnTouched(n){}get control(){return this.controlDir.control}static \u0275fac=function(e){return new(e||t)(ae(En,2))};static \u0275cmp=k({type:t,selectors:[["app-text-input"]],inputs:{label:"label",type:"type"},decls:6,vars:7,consts:[["appearance","outline",1,"w-full","mb-3"],["matInput","",3,"formControl","type","placeholder"]],template:function(e,i){e&1&&(p(0,"mat-form-field",0)(1,"mat-label"),I(2),g(),G(3,"input",1),Y(4,OB,2,1,"mat-error"),Y(5,PB,2,0,"mat-error"),g()),e&2&&(_(2),He(i.label),_(),z("placeholder",Ii(i.label))("formControl",i.control)("type",i.type),_(),X(i.control.hasError("required")?4:-1),_(),X(i.control.hasError("email")?5:-1))},dependencies:[zn,Co,ed,Un,za,nr,si,ay],encapsulation:2})};function FB(t,n){if(t&1&&(p(0,"li"),I(1),g()),t&2){let e=n.$implicit;_(),He(e)}}function LB(t,n){if(t&1&&(p(0,"div",8)(1,"ul",10),yn(2,FB,2,1,"li",null,Xi),g()()),t&2){let e=B();_(2),bn(e.validationErrors)}}var nh=class t{accountService=d(ai);router=d(Tt);fb=d(Fm);snack=d(wo);validationErrors;registerForm=this.fb.group({firstName:["",oi.required],lastName:["",oi.required],email:["",[oi.required,oi.email]],password:["",oi.required]});onSubmit(){this.accountService.register(this.registerForm.value).subscribe({next:()=>{this.snack.success("Register Successfull"),this.router.navigateByUrl("account/login")},error:n=>this.validationErrors=n})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-register"]],decls:12,vars:3,consts:[[1,"max-w-lg","mx-auto","mt-32","p-8","bg-white"],[3,"ngSubmit","formGroup"],[1,"text-center","mb-6"],[1,"text-3xl","font-semibold","text-primary"],["label","First Name","formControlName","firstName"],["label","Last Name","formControlName","lastName"],["label","Email","formControlName","email"],["label","Password","formControlName","password","type","password"],[1,"mb-3","p-4","bg-red-100","text-red-600"],["mat-flat-button","","type","submit",1,"w-full","py-2",3,"disabled"],[1,"list-disc","px-3"]],template:function(e,i){e&1&&(p(0,"mat-card",0)(1,"form",1),U("ngSubmit",function(){return i.onSubmit()}),p(2,"div",2)(3,"h1",3),I(4,"Register"),g()(),G(5,"app-text-input",4)(6,"app-text-input",5)(7,"app-text-input",6)(8,"app-text-input",7),Y(9,LB,4,0,"div",8),p(10,"button",9),I(11,"Register"),g()()()),e&2&&(_(),z("formGroup",i.registerForm),_(8),X(i.validationErrors?9:-1),_(),z("disabled",i.registerForm.invalid))},dependencies:[za,Ha,si,Ba,Mr,Yc,pt,ao,th],encapsulation:2})};var iS=(t,n)=>{let e=d(ai),i=d(Tt);return e.currentUser()?W(!0):e.getAuthState().pipe(ee(r=>r.isAuthenticated?!0:(i.navigate(["/account/login"],{queryParams:{returnUrl:n.url}}),!1)))};var rS=(t,n)=>{let e=d(Kt),i=d(Tt),r=d(wo);return e.containsItems()?W(!0):(i.navigateByUrl("/shop"),r.error("Your cart is empty"),!1)};var oS=[{path:"",component:Kf},{path:"shop",component:$m},{path:"shop/:id",component:Gm},{path:"cart",component:Km},{path:"test-errors",component:Wm},{path:"checkout",component:Jm,canActivate:[iS,rS]},{path:"account/login",component:eh},{path:"account/register",component:nh},{path:"not-found",component:qm},{path:"server-error",component:Zm},{path:"**",redirectTo:"not-found",pathMatch:"full"}];var sS=(t,n)=>{let e=d(Tt),i=d(wo);return n(t).pipe(pi(r=>{if(r.status===400)if(r.error.errors){let o=[];for(let s in r.error.errors)r.error.errors[s]&&o.push(r.error.errors[s]);throw o.flat()}else i.error(r.error.title||r.error);if(r.status===401&&i.error(r.error.title||r.error),r.status===404&&e.navigateByUrl("/not-found"),r.status===500){let o={state:{error:r.error}};e.navigateByUrl("/server-error",o)}return Oo(()=>r)}))};var Za=class t{loading=!1;busyRequestCount=0;busy(){this.loading=!0,this.busyRequestCount++}idle(){this.busyRequestCount--,this.busyRequestCount<=0&&(this.busyRequestCount=0,this.loading=!1)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var aS=(t,n)=>{let e=d(Za);return e.busy(),n(t).pipe(Ji.production?sn:Rh(500),ji(()=>e.idle()))};var ih=class t{cartService=d(Kt);accountService=d(ai);init(){let n=localStorage.getItem("cart_id"),e=n?this.cartService.getCart(n):W(null);return Po({cart:e,user:this.accountService.getUserInfo()})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var lS=(t,n)=>{let e=t.clone({withCredentials:!0});return n(e)};var cS={providers:[Up(),y_(oS),pD(),zv($v([sS,aS,lS])),of(async()=>{let t=d(ih);return kh(t.init()).finally(()=>{let n=document.getElementById("initial-splash");n&&n.remove()})})]};var jB=Object.defineProperty,BB=Object.defineProperties,VB=Object.getOwnPropertyDescriptors,dS=Object.getOwnPropertySymbols,HB=Object.prototype.hasOwnProperty,UB=Object.prototype.propertyIsEnumerable,wy=(t,n,e)=>n in t?jB(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,uS=(t,n)=>{for(var e in n||(n={}))HB.call(n,e)&&wy(t,e,n[e]);if(dS)for(var e of dS(n))UB.call(n,e)&&wy(t,e,n[e]);return t},zB=(t,n)=>BB(t,VB(n)),xe=(t,n,e)=>(wy(t,typeof n!="symbol"?n+"":n,e),e),$n=globalThis;function Gn(t){return($n.__Zone_symbol_prefix||"__zone_symbol__")+t}function $B(){let t=$n.performance;function n(it){t&&t.mark&&t.mark(it)}function e(it,y){t&&t.measure&&t.measure(it,y)}n("Zone");let i=class Dy{constructor(y,C){xe(this,"_parent"),xe(this,"_name"),xe(this,"_properties"),xe(this,"_zoneDelegate"),this._parent=y,this._name=C?C.name||"unnamed":"<root>",this._properties=C&&C.properties||{},this._zoneDelegate=new s(this,this._parent&&this._parent._zoneDelegate,C)}static assertZonePatched(){if($n.Promise!==Fe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let y=Dy.current;for(;y.parent;)y=y.parent;return y}static get current(){return ft.zone}static get currentTask(){return kn}static __load_patch(y,C,E=!1){if(Fe.hasOwnProperty(y)){let ne=$n[Gn("forceDuplicateZoneCheck")]===!0;if(!E&&ne)throw Error("Already loaded patch: "+y)}else if(!$n["__Zone_disable_"+y]){let ne="Zone:"+y;n(ne),Fe[y]=C($n,Dy,Ie),e(ne,ne)}}get parent(){return this._parent}get name(){return this._name}get(y){let C=this.getZoneWith(y);if(C)return C._properties[y]}getZoneWith(y){let C=this;for(;C;){if(C._properties.hasOwnProperty(y))return C;C=C._parent}return null}fork(y){if(!y)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,y)}wrap(y,C){if(typeof y!="function")throw new Error("Expecting function got: "+y);let E=this._zoneDelegate.intercept(this,y,C),ne=this;return function(){return ne.runGuarded(E,this,arguments,C)}}run(y,C,E,ne){ft={parent:ft,zone:this};try{return this._zoneDelegate.invoke(this,y,C,E,ne)}finally{ft=ft.parent}}runGuarded(y,C=null,E,ne){ft={parent:ft,zone:this};try{try{return this._zoneDelegate.invoke(this,y,C,E,ne)}catch(oe){if(this._zoneDelegate.handleError(this,oe))throw oe}}finally{ft=ft.parent}}runTask(y,C,E){if(y.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(y.zone||N).name+"; Execution: "+this.name+")");let ne=y,{type:oe,data:{isPeriodic:Wn=!1,isRefreshable:ci=!1}={}}=y;if(y.state===M&&(oe===ye||oe===Te))return;let di=y.state!=Pe;di&&ne._transitionTo(Pe,Oe);let Is=kn;kn=ne,ft={parent:ft,zone:this};try{oe==Te&&y.data&&!Wn&&!ci&&(y.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,ne,C,E)}catch(O){if(this._zoneDelegate.handleError(this,O))throw O}}finally{let O=y.state;if(O!==M&&O!==J)if(oe==ye||Wn||ci&&O===le)di&&ne._transitionTo(Oe,Pe,le);else{let A=ne._zoneDelegates;this._updateTaskCount(ne,-1),di&&ne._transitionTo(M,Pe,M),ci&&(ne._zoneDelegates=A)}ft=ft.parent,kn=Is}}scheduleTask(y){if(y.zone&&y.zone!==this){let E=this;for(;E;){if(E===y.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${y.zone.name}`);E=E.parent}}y._transitionTo(le,M);let C=[];y._zoneDelegates=C,y._zone=this;try{y=this._zoneDelegate.scheduleTask(this,y)}catch(E){throw y._transitionTo(J,le,M),this._zoneDelegate.handleError(this,E),E}return y._zoneDelegates===C&&this._updateTaskCount(y,1),y.state==le&&y._transitionTo(Oe,le),y}scheduleMicroTask(y,C,E,ne){return this.scheduleTask(new a(bt,y,C,E,ne,void 0))}scheduleMacroTask(y,C,E,ne,oe){return this.scheduleTask(new a(Te,y,C,E,ne,oe))}scheduleEventTask(y,C,E,ne,oe){return this.scheduleTask(new a(ye,y,C,E,ne,oe))}cancelTask(y){if(y.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(y.zone||N).name+"; Execution: "+this.name+")");if(!(y.state!==Oe&&y.state!==Pe)){y._transitionTo(Le,Oe,Pe);try{this._zoneDelegate.cancelTask(this,y)}catch(C){throw y._transitionTo(J,Le),this._zoneDelegate.handleError(this,C),C}return this._updateTaskCount(y,-1),y._transitionTo(M,Le),y.runCount=-1,y}}_updateTaskCount(y,C){let E=y._zoneDelegates;C==-1&&(y._zoneDelegates=null);for(let ne=0;ne<E.length;ne++)E[ne]._updateTaskCount(y.type,C)}};xe(i,"__symbol__",Gn);let r=i,o={name:"",onHasTask:(it,y,C,E)=>it.hasTask(C,E),onScheduleTask:(it,y,C,E)=>it.scheduleTask(C,E),onInvokeTask:(it,y,C,E,ne,oe)=>it.invokeTask(C,E,ne,oe),onCancelTask:(it,y,C,E)=>it.cancelTask(C,E)};class s{constructor(y,C,E){xe(this,"_zone"),xe(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),xe(this,"_forkDlgt"),xe(this,"_forkZS"),xe(this,"_forkCurrZone"),xe(this,"_interceptDlgt"),xe(this,"_interceptZS"),xe(this,"_interceptCurrZone"),xe(this,"_invokeDlgt"),xe(this,"_invokeZS"),xe(this,"_invokeCurrZone"),xe(this,"_handleErrorDlgt"),xe(this,"_handleErrorZS"),xe(this,"_handleErrorCurrZone"),xe(this,"_scheduleTaskDlgt"),xe(this,"_scheduleTaskZS"),xe(this,"_scheduleTaskCurrZone"),xe(this,"_invokeTaskDlgt"),xe(this,"_invokeTaskZS"),xe(this,"_invokeTaskCurrZone"),xe(this,"_cancelTaskDlgt"),xe(this,"_cancelTaskZS"),xe(this,"_cancelTaskCurrZone"),xe(this,"_hasTaskDlgt"),xe(this,"_hasTaskDlgtOwner"),xe(this,"_hasTaskZS"),xe(this,"_hasTaskCurrZone"),this._zone=y,this._forkZS=E&&(E&&E.onFork?E:C._forkZS),this._forkDlgt=E&&(E.onFork?C:C._forkDlgt),this._forkCurrZone=E&&(E.onFork?this._zone:C._forkCurrZone),this._interceptZS=E&&(E.onIntercept?E:C._interceptZS),this._interceptDlgt=E&&(E.onIntercept?C:C._interceptDlgt),this._interceptCurrZone=E&&(E.onIntercept?this._zone:C._interceptCurrZone),this._invokeZS=E&&(E.onInvoke?E:C._invokeZS),this._invokeDlgt=E&&(E.onInvoke?C:C._invokeDlgt),this._invokeCurrZone=E&&(E.onInvoke?this._zone:C._invokeCurrZone),this._handleErrorZS=E&&(E.onHandleError?E:C._handleErrorZS),this._handleErrorDlgt=E&&(E.onHandleError?C:C._handleErrorDlgt),this._handleErrorCurrZone=E&&(E.onHandleError?this._zone:C._handleErrorCurrZone),this._scheduleTaskZS=E&&(E.onScheduleTask?E:C._scheduleTaskZS),this._scheduleTaskDlgt=E&&(E.onScheduleTask?C:C._scheduleTaskDlgt),this._scheduleTaskCurrZone=E&&(E.onScheduleTask?this._zone:C._scheduleTaskCurrZone),this._invokeTaskZS=E&&(E.onInvokeTask?E:C._invokeTaskZS),this._invokeTaskDlgt=E&&(E.onInvokeTask?C:C._invokeTaskDlgt),this._invokeTaskCurrZone=E&&(E.onInvokeTask?this._zone:C._invokeTaskCurrZone),this._cancelTaskZS=E&&(E.onCancelTask?E:C._cancelTaskZS),this._cancelTaskDlgt=E&&(E.onCancelTask?C:C._cancelTaskDlgt),this._cancelTaskCurrZone=E&&(E.onCancelTask?this._zone:C._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let ne=E&&E.onHasTask,oe=C&&C._hasTaskZS;(ne||oe)&&(this._hasTaskZS=ne?E:o,this._hasTaskDlgt=C,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,E.onScheduleTask||(this._scheduleTaskZS=o,this._scheduleTaskDlgt=C,this._scheduleTaskCurrZone=this._zone),E.onInvokeTask||(this._invokeTaskZS=o,this._invokeTaskDlgt=C,this._invokeTaskCurrZone=this._zone),E.onCancelTask||(this._cancelTaskZS=o,this._cancelTaskDlgt=C,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(y,C){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,y,C):new r(y,C)}intercept(y,C,E){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,y,C,E):C}invoke(y,C,E,ne,oe){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,y,C,E,ne,oe):C.apply(E,ne)}handleError(y,C){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,y,C):!0}scheduleTask(y,C){let E=C;if(this._scheduleTaskZS)this._hasTaskZS&&E._zoneDelegates.push(this._hasTaskDlgtOwner),E=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,y,C),E||(E=C);else if(C.scheduleFn)C.scheduleFn(C);else if(C.type==bt)R(C);else throw new Error("Task is missing scheduleFn.");return E}invokeTask(y,C,E,ne){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,y,C,E,ne):C.callback.apply(E,ne)}cancelTask(y,C){let E;if(this._cancelTaskZS)E=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,y,C);else{if(!C.cancelFn)throw Error("Task is not cancelable");E=C.cancelFn(C)}return E}hasTask(y,C){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,y,C)}catch(E){this.handleError(y,E)}}_updateTaskCount(y,C){let E=this._taskCounts,ne=E[y],oe=E[y]=ne+C;if(oe<0)throw new Error("More tasks executed then were scheduled.");if(ne==0||oe==0){let Wn={microTask:E.microTask>0,macroTask:E.macroTask>0,eventTask:E.eventTask>0,change:y};this.hasTask(this._zone,Wn)}}}class a{constructor(y,C,E,ne,oe,Wn){if(xe(this,"type"),xe(this,"source"),xe(this,"invoke"),xe(this,"callback"),xe(this,"data"),xe(this,"scheduleFn"),xe(this,"cancelFn"),xe(this,"_zone",null),xe(this,"runCount",0),xe(this,"_zoneDelegates",null),xe(this,"_state","notScheduled"),this.type=y,this.source=C,this.data=ne,this.scheduleFn=oe,this.cancelFn=Wn,!E)throw new Error("callback is not defined");this.callback=E;let ci=this;y===ye&&ne&&ne.useG?this.invoke=a.invokeTask:this.invoke=function(){return a.invokeTask.call($n,ci,this,arguments)}}static invokeTask(y,C,E){y||(y=this),$t++;try{return y.runCount++,y.zone.runTask(y,C,E)}finally{$t===1&&!$n[f]&&P(),$t--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(M,le)}_transitionTo(y,C,E){if(this._state===C||this._state===E)this._state=y,y==M&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${y}', expecting state '${C}'${E?" or '"+E+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let l=Gn("setTimeout"),c=Gn("Promise"),u=Gn("then"),f=Gn("enable_native_microtask_draining"),m=[],h=!1,v;function S(it){var y;!v&&$n[c]&&(v=$n[c].resolve(0)),v?((y=v[u])!=null?y:v.then).call(v,it):$n[l](it,0)}function R(it){let y=$n[f],C=y&&m.length===0&&!h,E=!y&&$t===0&&m.length===0;(C||E)&&S(P),it&&m.push(it)}function P(){if(!h){for(h=!0;m.length;){let it=m;m=[];for(let y of it)try{y.zone.runTask(y,null,null)}catch(C){Ie.onUnhandledError(C)}}$n[f]?(h=!1,Ie.microtaskDrainDone()):(Ie.microtaskDrainDone(),h=!1)}}let N={name:"NO ZONE"},M="notScheduled",le="scheduling",Oe="scheduled",Pe="running",Le="canceling",J="unknown",bt="microTask",Te="macroTask",ye="eventTask",Fe={},Ie={symbol:Gn,currentZoneFrame:()=>ft,onUnhandledError:xt,microtaskDrainDone:xt,scheduleMicroTask:R,showUncaughtError:()=>!r[Gn("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:xt,patchMethod:()=>xt,bindArguments:()=>[],patchThen:()=>xt,patchMacroTask:()=>xt,patchEventPrototype:()=>xt,getGlobalObjects:()=>{},ObjectDefineProperty:()=>xt,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>xt,wrapWithCurrentZone:()=>xt,filterProperties:()=>[],attachOriginToPatched:()=>xt,_redefineProperty:()=>xt,patchCallbacks:()=>xt,nativeScheduleMicroTask:S},ft={parent:null,zone:new r(null,null)},kn=null,$t=0;function xt(){}return e("Zone","Zone"),r}function GB(){var t;let n=globalThis,e=n[Gn("forceDuplicateZoneCheck")]===!0;if(n.Zone&&(e||typeof n.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(t=n.Zone)!=null||(n.Zone=$B()),n.Zone}var od=Object.getOwnPropertyDescriptor,xy=Object.defineProperty,Iy=Object.getPrototypeOf,WB=Object.create,qB=Array.prototype.slice,Sy="addEventListener",My="removeEventListener",by=Gn(Sy),Cy=Gn(My),Tr="true",kr="false",sd=Gn("");function Ty(t,n){return Zone.current.wrap(t,n)}function ky(t,n,e,i,r){return Zone.current.scheduleMacroTask(t,n,e,i,r)}var Ke=Gn,sh=typeof window<"u",ah=sh?window:void 0,zt=sh&&ah||globalThis,ZB="removeAttribute";function Ay(t,n){for(let e=t.length-1;e>=0;e--)typeof t[e]=="function"&&(t[e]=Ty(t[e],n+"_"+e));return t}function YB(t,n){let e=t.constructor.name;for(let i=0;i<n.length;i++){let r=n[i],o=t[r];if(o){let s=od(t,r);if(!vS(s))continue;t[r]=(a=>{let l=function(){return a.apply(this,Ay(arguments,e+"."+r))};return Rr(l,a),l})(o)}}}function vS(t){return t?t.writable===!1?!1:!(typeof t.get=="function"&&typeof t.set>"u"):!0}var _S=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,lh=!("nw"in zt)&&typeof zt.process<"u"&&zt.process.toString()==="[object process]",Ry=!lh&&!_S&&!!(sh&&ah.HTMLElement),yS=typeof zt.process<"u"&&zt.process.toString()==="[object process]"&&!_S&&!!(sh&&ah.HTMLElement),oh={},XB=Ke("enable_beforeunload"),fS=function(t){if(t=t||zt.event,!t)return;let n=oh[t.type];n||(n=oh[t.type]=Ke("ON_PROPERTY"+t.type));let e=this||t.target||zt,i=e[n],r;if(Ry&&e===ah&&t.type==="error"){let o=t;r=i&&i.call(this,o.message,o.filename,o.lineno,o.colno,o.error),r===!0&&t.preventDefault()}else r=i&&i.apply(this,arguments),t.type==="beforeunload"&&zt[XB]&&typeof r=="string"?t.returnValue=r:r!=null&&!r&&t.preventDefault();return r};function mS(t,n,e){let i=od(t,n);if(!i&&e&&od(e,n)&&(i={enumerable:!0,configurable:!0}),!i||!i.configurable)return;let r=Ke("on"+n+"patched");if(t.hasOwnProperty(r)&&t[r])return;delete i.writable,delete i.value;let o=i.get,s=i.set,a=n.slice(2),l=oh[a];l||(l=oh[a]=Ke("ON_PROPERTY"+a)),i.set=function(c){let u=this;if(!u&&t===zt&&(u=zt),!u)return;typeof u[l]=="function"&&u.removeEventListener(a,fS),s?.call(u,null),u[l]=c,typeof c=="function"&&u.addEventListener(a,fS,!1)},i.get=function(){let c=this;if(!c&&t===zt&&(c=zt),!c)return null;let u=c[l];if(u)return u;if(o){let f=o.call(this);if(f)return i.set.call(this,f),typeof c[ZB]=="function"&&c.removeAttribute(n),f}return null},xy(t,n,i),t[r]=!0}function bS(t,n,e){if(n)for(let i=0;i<n.length;i++)mS(t,"on"+n[i],e);else{let i=[];for(let r in t)r.slice(0,2)=="on"&&i.push(r);for(let r=0;r<i.length;r++)mS(t,i[r],e)}}var Ri=Ke("originalInstance");function rd(t){let n=zt[t];if(!n)return;zt[Ke(t)]=n,zt[t]=function(){let r=Ay(arguments,t);switch(r.length){case 0:this[Ri]=new n;break;case 1:this[Ri]=new n(r[0]);break;case 2:this[Ri]=new n(r[0],r[1]);break;case 3:this[Ri]=new n(r[0],r[1],r[2]);break;case 4:this[Ri]=new n(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}},Rr(zt[t],n);let e=new n(function(){}),i;for(i in e)t==="XMLHttpRequest"&&i==="responseBlob"||(function(r){typeof e[r]=="function"?zt[t].prototype[r]=function(){return this[Ri][r].apply(this[Ri],arguments)}:xy(zt[t].prototype,r,{set:function(o){typeof o=="function"?(this[Ri][r]=Ty(o,t+"."+r),Rr(this[Ri][r],o)):this[Ri][r]=o},get:function(){return this[Ri][r]}})})(i);for(i in n)i!=="prototype"&&n.hasOwnProperty(i)&&(zt[t][i]=n[i])}function QB(t,n){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(t).forEach(i=>{let r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,{get:function(){return t[i]},set:function(o){r&&(!r.writable||typeof r.set!="function")||(t[i]=o)},enumerable:r?r.enumerable:!0,configurable:r?r.configurable:!0})})}var KB=!1;function Ar(t,n,e){let i=t;for(;i&&!i.hasOwnProperty(n);)i=Iy(i);!i&&t[n]&&(i=t);let r=Ke(n),o=null;if(i&&(!(o=i[r])||!i.hasOwnProperty(r))){o=i[r]=i[n];let s=i&&od(i,n);if(vS(s)){let a=e(o,r,n);i[n]=function(){return a(this,arguments)},Rr(i[n],o),KB&&QB(o,i[n])}}return o}function JB(t,n,e){let i=null;function r(o){let s=o.data;return s.args[s.cbIdx]=function(){o.invoke.apply(this,arguments)},i.apply(s.target,s.args),o}i=Ar(t,n,o=>function(s,a){let l=e(s,a);return l.cbIdx>=0&&typeof a[l.cbIdx]=="function"?ky(l.name,a[l.cbIdx],l,r):o.apply(s,a)})}function Rr(t,n){t[Ke("OriginalDelegate")]=n}function hS(t){return typeof t=="function"}function pS(t){return typeof t=="number"}var eV={useG:!0},li={},CS={},wS=new RegExp("^"+sd+"(\\w+)(true|false)$"),DS=Ke("propagationStopped");function ES(t,n){let e=(n?n(t):t)+kr,i=(n?n(t):t)+Tr,r=sd+e,o=sd+i;li[t]={},li[t][kr]=r,li[t][Tr]=o}function tV(t,n,e,i){let r=i&&i.add||Sy,o=i&&i.rm||My,s=i&&i.listeners||"eventListeners",a=i&&i.rmAll||"removeAllListeners",l=Ke(r),c="."+r+":",u="prependListener",f="."+u+":",m=function(N,M,le){if(N.isRemoved)return;let Oe=N.callback;typeof Oe=="object"&&Oe.handleEvent&&(N.callback=J=>Oe.handleEvent(J),N.originalDelegate=Oe);let Pe;try{N.invoke(N,M,[le])}catch(J){Pe=J}let Le=N.options;if(Le&&typeof Le=="object"&&Le.once){let J=N.originalDelegate?N.originalDelegate:N.callback;M[o].call(M,le.type,J,Le)}return Pe};function h(N,M,le){if(M=M||t.event,!M)return;let Oe=N||M.target||t,Pe=Oe[li[M.type][le?Tr:kr]];if(Pe){let Le=[];if(Pe.length===1){let J=m(Pe[0],Oe,M);J&&Le.push(J)}else{let J=Pe.slice();for(let bt=0;bt<J.length&&!(M&&M[DS]===!0);bt++){let Te=m(J[bt],Oe,M);Te&&Le.push(Te)}}if(Le.length===1)throw Le[0];for(let J=0;J<Le.length;J++){let bt=Le[J];n.nativeScheduleMicroTask(()=>{throw bt})}}}let v=function(N){return h(this,N,!1)},S=function(N){return h(this,N,!0)};function R(N,M){if(!N)return!1;let le=!0;M&&M.useG!==void 0&&(le=M.useG);let Oe=M&&M.vh,Pe=!0;M&&M.chkDup!==void 0&&(Pe=M.chkDup);let Le=!1;M&&M.rt!==void 0&&(Le=M.rt);let J=N;for(;J&&!J.hasOwnProperty(r);)J=Iy(J);if(!J&&N[r]&&(J=N),!J||J[l])return!1;let bt=M&&M.eventNameToString,Te={},ye=J[l]=J[r],Fe=J[Ke(o)]=J[o],Ie=J[Ke(s)]=J[s],ft=J[Ke(a)]=J[a],kn;M&&M.prepend&&(kn=J[Ke(M.prepend)]=J[M.prepend]);function $t(D,F){return F?typeof D=="boolean"?{capture:D,passive:!0}:D?typeof D=="object"&&D.passive!==!1?zB(uS({},D),{passive:!0}):D:{passive:!0}:D}let xt=function(D){if(!Te.isExisting)return ye.call(Te.target,Te.eventName,Te.capture?S:v,Te.options)},it=function(D){if(!D.isRemoved){let F=li[D.eventName],ie;F&&(ie=F[D.capture?Tr:kr]);let he=ie&&D.target[ie];if(he){for(let Q=0;Q<he.length;Q++)if(he[Q]===D){he.splice(Q,1),D.isRemoved=!0,D.removeAbortListener&&(D.removeAbortListener(),D.removeAbortListener=null),he.length===0&&(D.allRemoved=!0,D.target[ie]=null);break}}}if(D.allRemoved)return Fe.call(D.target,D.eventName,D.capture?S:v,D.options)},y=function(D){return ye.call(Te.target,Te.eventName,D.invoke,Te.options)},C=function(D){return kn.call(Te.target,Te.eventName,D.invoke,Te.options)},E=function(D){return Fe.call(D.target,D.eventName,D.invoke,D.options)},ne=le?xt:y,oe=le?it:E,Wn=function(D,F){let ie=typeof F;return ie==="function"&&D.callback===F||ie==="object"&&D.originalDelegate===F},ci=M?.diff||Wn,di=Zone[Ke("UNPATCHED_EVENTS")],Is=t[Ke("PASSIVE_EVENTS")];function O(D){if(typeof D=="object"&&D!==null){let F=uS({},D);return D.signal&&(F.signal=D.signal),F}return D}let A=function(D,F,ie,he,Q=!1,ke=!1){return function(){let Re=this||t,Ne=arguments[0];M&&M.transferEventName&&(Ne=M.transferEventName(Ne));let lt=arguments[1];if(!lt)return D.apply(this,arguments);if(lh&&Ne==="uncaughtException")return D.apply(this,arguments);let ct=!1;if(typeof lt!="function"){if(!lt.handleEvent)return D.apply(this,arguments);ct=!0}if(Oe&&!Oe(D,lt,Re,arguments))return;let Nr=!!Is&&Is.indexOf(Ne)!==-1,ui=O($t(arguments[2],Nr)),Do=ui?.signal;if(Do?.aborted)return;if(di){for(let Ni=0;Ni<di.length;Ni++)if(Ne===di[Ni])return Nr?D.call(Re,Ne,lt,ui):D.apply(this,arguments)}let uh=ui?typeof ui=="boolean"?!0:ui.capture:!1,Ny=ui&&typeof ui=="object"?ui.once:!1,RS=Zone.current,fh=li[Ne];fh||(ES(Ne,bt),fh=li[Ne]);let Oy=fh[uh?Tr:kr],Ss=Re[Oy],Py=!1;if(Ss){if(Py=!0,Pe){for(let Ni=0;Ni<Ss.length;Ni++)if(ci(Ss[Ni],lt))return}}else Ss=Re[Oy]=[];let ad,Fy=Re.constructor.name,Ly=CS[Fy];Ly&&(ad=Ly[Ne]),ad||(ad=Fy+F+(bt?bt(Ne):Ne)),Te.options=ui,Ny&&(Te.options.once=!1),Te.target=Re,Te.capture=uh,Te.eventName=Ne,Te.isExisting=Py;let Xa=le?eV:void 0;Xa&&(Xa.taskData=Te),Do&&(Te.options.signal=void 0);let fi=RS.scheduleEventTask(ad,lt,Xa,ie,he);if(Do){Te.options.signal=Do;let Ni=()=>fi.zone.cancelTask(fi);D.call(Do,"abort",Ni,{once:!0}),fi.removeAbortListener=()=>Do.removeEventListener("abort",Ni)}if(Te.target=null,Xa&&(Xa.taskData=null),Ny&&(Te.options.once=!0),typeof fi.options!="boolean"&&(fi.options=ui),fi.target=Re,fi.capture=uh,fi.eventName=Ne,ct&&(fi.originalDelegate=lt),ke?Ss.unshift(fi):Ss.push(fi),Q)return Re}};return J[r]=A(ye,c,ne,oe,Le),kn&&(J[u]=A(kn,f,C,oe,Le,!0)),J[o]=function(){let D=this||t,F=arguments[0];M&&M.transferEventName&&(F=M.transferEventName(F));let ie=arguments[2],he=ie?typeof ie=="boolean"?!0:ie.capture:!1,Q=arguments[1];if(!Q)return Fe.apply(this,arguments);if(Oe&&!Oe(Fe,Q,D,arguments))return;let ke=li[F],Re;ke&&(Re=ke[he?Tr:kr]);let Ne=Re&&D[Re];if(Ne)for(let lt=0;lt<Ne.length;lt++){let ct=Ne[lt];if(ci(ct,Q)){if(Ne.splice(lt,1),ct.isRemoved=!0,Ne.length===0&&(ct.allRemoved=!0,D[Re]=null,!he&&typeof F=="string")){let Nr=sd+"ON_PROPERTY"+F;D[Nr]=null}return ct.zone.cancelTask(ct),Le?D:void 0}}return Fe.apply(this,arguments)},J[s]=function(){let D=this||t,F=arguments[0];M&&M.transferEventName&&(F=M.transferEventName(F));let ie=[],he=xS(D,bt?bt(F):F);for(let Q=0;Q<he.length;Q++){let ke=he[Q],Re=ke.originalDelegate?ke.originalDelegate:ke.callback;ie.push(Re)}return ie},J[a]=function(){let D=this||t,F=arguments[0];if(F){M&&M.transferEventName&&(F=M.transferEventName(F));let ie=li[F];if(ie){let he=ie[kr],Q=ie[Tr],ke=D[he],Re=D[Q];if(ke){let Ne=ke.slice();for(let lt=0;lt<Ne.length;lt++){let ct=Ne[lt],Nr=ct.originalDelegate?ct.originalDelegate:ct.callback;this[o].call(this,F,Nr,ct.options)}}if(Re){let Ne=Re.slice();for(let lt=0;lt<Ne.length;lt++){let ct=Ne[lt],Nr=ct.originalDelegate?ct.originalDelegate:ct.callback;this[o].call(this,F,Nr,ct.options)}}}}else{let ie=Object.keys(D);for(let he=0;he<ie.length;he++){let Q=ie[he],ke=wS.exec(Q),Re=ke&&ke[1];Re&&Re!=="removeListener"&&this[a].call(this,Re)}this[a].call(this,"removeListener")}if(Le)return this},Rr(J[r],ye),Rr(J[o],Fe),ft&&Rr(J[a],ft),Ie&&Rr(J[s],Ie),!0}let P=[];for(let N=0;N<e.length;N++)P[N]=R(e[N],i);return P}function xS(t,n){if(!n){let o=[];for(let s in t){let a=wS.exec(s),l=a&&a[1];if(l&&(!n||l===n)){let c=t[s];if(c)for(let u=0;u<c.length;u++)o.push(c[u])}}return o}let e=li[n];e||(ES(n),e=li[n]);let i=t[e[kr]],r=t[e[Tr]];return i?r?i.concat(r):i.slice():r?r.slice():[]}function nV(t,n){let e=t.Event;e&&e.prototype&&n.patchMethod(e.prototype,"stopImmediatePropagation",i=>function(r,o){r[DS]=!0,i&&i.apply(r,o)})}function iV(t,n){n.patchMethod(t,"queueMicrotask",e=>function(i,r){Zone.current.scheduleMicroTask("queueMicrotask",r[0])})}var rh=Ke("zoneTask");function Ya(t,n,e,i){let r=null,o=null;n+=i,e+=i;let s={};function a(c){let u=c.data;u.args[0]=function(){return c.invoke.apply(this,arguments)};let f=r.apply(t,u.args);return pS(f)?u.handleId=f:(u.handle=f,u.isRefreshable=hS(f.refresh)),c}function l(c){let{handle:u,handleId:f}=c.data;return o.call(t,u??f)}r=Ar(t,n,c=>function(u,f){var m;if(hS(f[0])){let h={isRefreshable:!1,isPeriodic:i==="Interval",delay:i==="Timeout"||i==="Interval"?f[1]||0:void 0,args:f},v=f[0];f[0]=function(){try{return v.apply(this,arguments)}finally{let{handle:Oe,handleId:Pe,isPeriodic:Le,isRefreshable:J}=h;!Le&&!J&&(Pe?delete s[Pe]:Oe&&(Oe[rh]=null))}};let S=ky(n,f[0],h,a,l);if(!S)return S;let{handleId:R,handle:P,isRefreshable:N,isPeriodic:M}=S.data;if(R)s[R]=S;else if(P&&(P[rh]=S,N&&!M)){let le=P.refresh;P.refresh=function(){let{zone:Oe,state:Pe}=S;return Pe==="notScheduled"?(S._state="scheduled",Oe._updateTaskCount(S,1)):Pe==="running"&&(S._state="scheduling"),le.call(this)}}return(m=P??R)!=null?m:S}else return c.apply(t,f)}),o=Ar(t,e,c=>function(u,f){let m=f[0],h;pS(m)?(h=s[m],delete s[m]):(h=m?.[rh],h?m[rh]=null:h=m),h?.type?h.cancelFn&&h.zone.cancelTask(h):c.apply(t,f)})}function rV(t,n){let{isBrowser:e,isMix:i}=n.getGlobalObjects();if(!e&&!i||!t.customElements||!("customElements"in t))return;let r=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];n.patchCallbacks(n,t.customElements,"customElements","define",r)}function oV(t,n){if(Zone[n.symbol("patchEventTarget")])return;let{eventNames:e,zoneSymbolEventNames:i,TRUE_STR:r,FALSE_STR:o,ZONE_SYMBOL_PREFIX:s}=n.getGlobalObjects();for(let l=0;l<e.length;l++){let c=e[l],u=c+o,f=c+r,m=s+u,h=s+f;i[c]={},i[c][o]=m,i[c][r]=h}let a=t.EventTarget;if(!(!a||!a.prototype))return n.patchEventTarget(t,n,[a&&a.prototype]),!0}function sV(t,n){n.patchEventPrototype(t,n)}function IS(t,n,e){if(!e||e.length===0)return n;let i=e.filter(o=>o.target===t);if(i.length===0)return n;let r=i[0].ignoreProperties;return n.filter(o=>r.indexOf(o)===-1)}function gS(t,n,e,i){if(!t)return;let r=IS(t,n,e);bS(t,r,i)}function Ey(t){return Object.getOwnPropertyNames(t).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}function aV(t,n){if(lh&&!yS||Zone[t.symbol("patchEvents")])return;let e=n.__Zone_ignore_on_properties,i=[];if(Ry){let r=window;i=i.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),gS(r,Ey(r),e,Iy(r))}i=i.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let r=0;r<i.length;r++){let o=n[i[r]];o?.prototype&&gS(o.prototype,Ey(o.prototype),e)}}function lV(t){t.__load_patch("timers",n=>{let i="clear";Ya(n,"set",i,"Timeout"),Ya(n,"set",i,"Interval"),Ya(n,"set",i,"Immediate")}),t.__load_patch("requestAnimationFrame",n=>{Ya(n,"request","cancel","AnimationFrame"),Ya(n,"mozRequest","mozCancel","AnimationFrame"),Ya(n,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(n,e)=>{let i=["alert","prompt","confirm"];for(let r=0;r<i.length;r++){let o=i[r];Ar(n,o,(s,a,l)=>function(c,u){return e.current.run(s,n,u,l)})}}),t.__load_patch("EventTarget",(n,e,i)=>{sV(n,i),oV(n,i);let r=n.XMLHttpRequestEventTarget;r&&r.prototype&&i.patchEventTarget(n,i,[r.prototype])}),t.__load_patch("MutationObserver",(n,e,i)=>{rd("MutationObserver"),rd("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(n,e,i)=>{rd("IntersectionObserver")}),t.__load_patch("FileReader",(n,e,i)=>{rd("FileReader")}),t.__load_patch("on_property",(n,e,i)=>{aV(i,n)}),t.__load_patch("customElements",(n,e,i)=>{rV(n,i)}),t.__load_patch("XHR",(n,e)=>{c(n);let i=Ke("xhrTask"),r=Ke("xhrSync"),o=Ke("xhrListener"),s=Ke("xhrScheduled"),a=Ke("xhrURL"),l=Ke("xhrErrorBeforeScheduled");function c(u){let f=u.XMLHttpRequest;if(!f)return;let m=f.prototype;function h(ye){return ye[i]}let v=m[by],S=m[Cy];if(!v){let ye=u.XMLHttpRequestEventTarget;if(ye){let Fe=ye.prototype;v=Fe[by],S=Fe[Cy]}}let R="readystatechange",P="scheduled";function N(ye){let Fe=ye.data,Ie=Fe.target;Ie[s]=!1,Ie[l]=!1;let ft=Ie[o];v||(v=Ie[by],S=Ie[Cy]),ft&&S.call(Ie,R,ft);let kn=Ie[o]=()=>{if(Ie.readyState===Ie.DONE)if(!Fe.aborted&&Ie[s]&&ye.state===P){let xt=Ie[e.__symbol__("loadfalse")];if(Ie.status!==0&&xt&&xt.length>0){let it=ye.invoke;ye.invoke=function(){let y=Ie[e.__symbol__("loadfalse")];for(let C=0;C<y.length;C++)y[C]===ye&&y.splice(C,1);!Fe.aborted&&ye.state===P&&it.call(ye)},xt.push(ye)}else ye.invoke()}else!Fe.aborted&&Ie[s]===!1&&(Ie[l]=!0)};return v.call(Ie,R,kn),Ie[i]||(Ie[i]=ye),bt.apply(Ie,Fe.args),Ie[s]=!0,ye}function M(){}function le(ye){let Fe=ye.data;return Fe.aborted=!0,Te.apply(Fe.target,Fe.args)}let Oe=Ar(m,"open",()=>function(ye,Fe){return ye[r]=Fe[2]==!1,ye[a]=Fe[1],Oe.apply(ye,Fe)}),Pe="XMLHttpRequest.send",Le=Ke("fetchTaskAborting"),J=Ke("fetchTaskScheduling"),bt=Ar(m,"send",()=>function(ye,Fe){if(e.current[J]===!0||ye[r])return bt.apply(ye,Fe);{let Ie={target:ye,url:ye[a],isPeriodic:!1,args:Fe,aborted:!1},ft=ky(Pe,M,Ie,N,le);ye&&ye[l]===!0&&!Ie.aborted&&ft.state===P&&ft.invoke()}}),Te=Ar(m,"abort",()=>function(ye,Fe){let Ie=h(ye);if(Ie&&typeof Ie.type=="string"){if(Ie.cancelFn==null||Ie.data&&Ie.data.aborted)return;Ie.zone.cancelTask(Ie)}else if(e.current[Le]===!0)return Te.apply(ye,Fe)})}}),t.__load_patch("geolocation",n=>{n.navigator&&n.navigator.geolocation&&YB(n.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(n,e)=>{function i(r){return function(o){xS(n,r).forEach(a=>{let l=n.PromiseRejectionEvent;if(l){let c=new l(r,{promise:o.promise,reason:o.rejection});a.invoke(c)}})}}n.PromiseRejectionEvent&&(e[Ke("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),e[Ke("rejectionHandledHandler")]=i("rejectionhandled"))}),t.__load_patch("queueMicrotask",(n,e,i)=>{iV(n,i)})}function cV(t){t.__load_patch("ZoneAwarePromise",(n,e,i)=>{let r=Object.getOwnPropertyDescriptor,o=Object.defineProperty;function s(O){if(O&&O.toString===Object.prototype.toString){let A=O.constructor&&O.constructor.name;return(A||"")+": "+JSON.stringify(O)}return O?O.toString():Object.prototype.toString.call(O)}let a=i.symbol,l=[],c=n[a("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,u=a("Promise"),f=a("then"),m="__creationTrace__";i.onUnhandledError=O=>{if(i.showUncaughtError()){let A=O&&O.rejection;A?console.error("Unhandled Promise rejection:",A instanceof Error?A.message:A,"; Zone:",O.zone.name,"; Task:",O.task&&O.task.source,"; Value:",A,A instanceof Error?A.stack:void 0):console.error(O)}},i.microtaskDrainDone=()=>{for(;l.length;){let O=l.shift();try{O.zone.runGuarded(()=>{throw O.throwOriginal?O.rejection:O})}catch(A){v(A)}}};let h=a("unhandledPromiseRejectionHandler");function v(O){i.onUnhandledError(O);try{let A=e[h];typeof A=="function"&&A.call(this,O)}catch{}}function S(O){return O&&typeof O.then=="function"}function R(O){return O}function P(O){return oe.reject(O)}let N=a("state"),M=a("value"),le=a("finally"),Oe=a("parentPromiseValue"),Pe=a("parentPromiseState"),Le="Promise.then",J=null,bt=!0,Te=!1,ye=0;function Fe(O,A){return D=>{try{$t(O,A,D)}catch(F){$t(O,!1,F)}}}let Ie=function(){let O=!1;return function(D){return function(){O||(O=!0,D.apply(null,arguments))}}},ft="Promise resolved with itself",kn=a("currentTaskTrace");function $t(O,A,D){let F=Ie();if(O===D)throw new TypeError(ft);if(O[N]===J){let ie=null;try{(typeof D=="object"||typeof D=="function")&&(ie=D&&D.then)}catch(he){return F(()=>{$t(O,!1,he)})(),O}if(A!==Te&&D instanceof oe&&D.hasOwnProperty(N)&&D.hasOwnProperty(M)&&D[N]!==J)it(D),$t(O,D[N],D[M]);else if(A!==Te&&typeof ie=="function")try{ie.call(D,F(Fe(O,A)),F(Fe(O,!1)))}catch(he){F(()=>{$t(O,!1,he)})()}else{O[N]=A;let he=O[M];if(O[M]=D,O[le]===le&&A===bt&&(O[N]=O[Pe],O[M]=O[Oe]),A===Te&&D instanceof Error){let Q=e.currentTask&&e.currentTask.data&&e.currentTask.data[m];Q&&o(D,kn,{configurable:!0,enumerable:!1,writable:!0,value:Q})}for(let Q=0;Q<he.length;)y(O,he[Q++],he[Q++],he[Q++],he[Q++]);if(he.length==0&&A==Te){O[N]=ye;let Q=D;try{throw new Error("Uncaught (in promise): "+s(D)+(D&&D.stack?`
`+D.stack:""))}catch(ke){Q=ke}c&&(Q.throwOriginal=!0),Q.rejection=D,Q.promise=O,Q.zone=e.current,Q.task=e.currentTask,l.push(Q),i.scheduleMicroTask()}}}return O}let xt=a("rejectionHandledHandler");function it(O){if(O[N]===ye){try{let A=e[xt];A&&typeof A=="function"&&A.call(this,{rejection:O[M],promise:O})}catch{}O[N]=Te;for(let A=0;A<l.length;A++)O===l[A].promise&&l.splice(A,1)}}function y(O,A,D,F,ie){it(O);let he=O[N],Q=he?typeof F=="function"?F:R:typeof ie=="function"?ie:P;A.scheduleMicroTask(Le,()=>{try{let ke=O[M],Re=!!D&&le===D[le];Re&&(D[Oe]=ke,D[Pe]=he);let Ne=A.run(Q,void 0,Re&&Q!==P&&Q!==R?[]:[ke]);$t(D,!0,Ne)}catch(ke){$t(D,!1,ke)}},D)}let C="function ZoneAwarePromise() { [native code] }",E=function(){},ne=n.AggregateError;class oe{static toString(){return C}static resolve(A){return A instanceof oe?A:$t(new this(null),bt,A)}static reject(A){return $t(new this(null),Te,A)}static withResolvers(){let A={};return A.promise=new oe((D,F)=>{A.resolve=D,A.reject=F}),A}static any(A){if(!A||typeof A[Symbol.iterator]!="function")return Promise.reject(new ne([],"All promises were rejected"));let D=[],F=0;try{for(let Q of A)F++,D.push(oe.resolve(Q))}catch{return Promise.reject(new ne([],"All promises were rejected"))}if(F===0)return Promise.reject(new ne([],"All promises were rejected"));let ie=!1,he=[];return new oe((Q,ke)=>{for(let Re=0;Re<D.length;Re++)D[Re].then(Ne=>{ie||(ie=!0,Q(Ne))},Ne=>{he.push(Ne),F--,F===0&&(ie=!0,ke(new ne(he,"All promises were rejected")))})})}static race(A){let D,F,ie=new this((ke,Re)=>{D=ke,F=Re});function he(ke){D(ke)}function Q(ke){F(ke)}for(let ke of A)S(ke)||(ke=this.resolve(ke)),ke.then(he,Q);return ie}static all(A){return oe.allWithCallback(A)}static allSettled(A){return(this&&this.prototype instanceof oe?this:oe).allWithCallback(A,{thenCallback:F=>({status:"fulfilled",value:F}),errorCallback:F=>({status:"rejected",reason:F})})}static allWithCallback(A,D){let F,ie,he=new this((Ne,lt)=>{F=Ne,ie=lt}),Q=2,ke=0,Re=[];for(let Ne of A){S(Ne)||(Ne=this.resolve(Ne));let lt=ke;try{Ne.then(ct=>{Re[lt]=D?D.thenCallback(ct):ct,Q--,Q===0&&F(Re)},ct=>{D?(Re[lt]=D.errorCallback(ct),Q--,Q===0&&F(Re)):ie(ct)})}catch(ct){ie(ct)}Q++,ke++}return Q-=2,Q===0&&F(Re),he}constructor(A){let D=this;if(!(D instanceof oe))throw new Error("Must be an instanceof Promise.");D[N]=J,D[M]=[];try{let F=Ie();A&&A(F(Fe(D,bt)),F(Fe(D,Te)))}catch(F){$t(D,!1,F)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return oe}then(A,D){var F;let ie=(F=this.constructor)==null?void 0:F[Symbol.species];(!ie||typeof ie!="function")&&(ie=this.constructor||oe);let he=new ie(E),Q=e.current;return this[N]==J?this[M].push(Q,he,A,D):y(this,Q,he,A,D),he}catch(A){return this.then(null,A)}finally(A){var D;let F=(D=this.constructor)==null?void 0:D[Symbol.species];(!F||typeof F!="function")&&(F=oe);let ie=new F(E);ie[le]=le;let he=e.current;return this[N]==J?this[M].push(he,ie,A,A):y(this,he,ie,A,A),ie}}oe.resolve=oe.resolve,oe.reject=oe.reject,oe.race=oe.race,oe.all=oe.all;let Wn=n[u]=n.Promise;n.Promise=oe;let ci=a("thenPatched");function di(O){let A=O.prototype,D=r(A,"then");if(D&&(D.writable===!1||!D.configurable))return;let F=A.then;A[f]=F,O.prototype.then=function(ie,he){return new oe((ke,Re)=>{F.call(this,ke,Re)}).then(ie,he)},O[ci]=!0}i.patchThen=di;function Is(O){return function(A,D){let F=O.apply(A,D);if(F instanceof oe)return F;let ie=F.constructor;return ie[ci]||di(ie),F}}if(Wn){di(Wn);let O=Wn.try;O&&typeof O=="function"&&(oe.try=O),Ar(n,"fetch",A=>Is(A))}return Promise[e.__symbol__("uncaughtPromiseErrors")]=l,oe})}function dV(t){t.__load_patch("toString",n=>{let e=Function.prototype.toString,i=Ke("OriginalDelegate"),r=Ke("Promise"),o=Ke("Error"),s=function(){if(typeof this=="function"){let u=this[i];if(u)return typeof u=="function"?e.call(u):Object.prototype.toString.call(u);if(this===Promise){let f=n[r];if(f)return e.call(f)}if(this===Error){let f=n[o];if(f)return e.call(f)}}return e.call(this)};s[i]=e,Function.prototype.toString=s;let a=Object.prototype.toString,l="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?l:a.call(this)}})}function uV(t,n,e,i,r){let o=Zone.__symbol__(i);if(n[o])return;let s=n[o]=n[i];n[i]=function(a,l,c){return l&&l.prototype&&r.forEach(function(u){let f=`${e}.${i}::`+u,m=l.prototype;try{if(m.hasOwnProperty(u)){let h=t.ObjectGetOwnPropertyDescriptor(m,u);h&&h.value?(h.value=t.wrapWithCurrentZone(h.value,f),t._redefineProperty(l.prototype,u,h)):m[u]&&(m[u]=t.wrapWithCurrentZone(m[u],f))}else m[u]&&(m[u]=t.wrapWithCurrentZone(m[u],f))}catch{}}),s.call(n,a,l,c)},t.attachOriginToPatched(n[i],s)}function fV(t){t.__load_patch("util",(n,e,i)=>{let r=Ey(n);i.patchOnProperties=bS,i.patchMethod=Ar,i.bindArguments=Ay,i.patchMacroTask=JB;let o=e.__symbol__("BLACK_LISTED_EVENTS"),s=e.__symbol__("UNPATCHED_EVENTS");n[s]&&(n[o]=n[s]),n[o]&&(e[o]=e[s]=n[o]),i.patchEventPrototype=nV,i.patchEventTarget=tV,i.ObjectDefineProperty=xy,i.ObjectGetOwnPropertyDescriptor=od,i.ObjectCreate=WB,i.ArraySlice=qB,i.patchClass=rd,i.wrapWithCurrentZone=Ty,i.filterProperties=IS,i.attachOriginToPatched=Rr,i._redefineProperty=Object.defineProperty,i.patchCallbacks=uV,i.getGlobalObjects=()=>({globalSources:CS,zoneSymbolEventNames:li,eventNames:r,isBrowser:Ry,isMix:yS,isNode:lh,TRUE_STR:Tr,FALSE_STR:kr,ZONE_SYMBOL_PREFIX:sd,ADD_EVENT_LISTENER_STR:Sy,REMOVE_EVENT_LISTENER_STR:My})})}function mV(t){cV(t),dV(t),fV(t)}var SS=GB();mV(SS);lV(SS);var MS="mat-badge-content",hV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return t})(),TS=(()=>{class t{_ngZone=d(j);_elementRef=d($);_ariaDescriber=d(lm);_renderer=d($e);_animationsDisabled=nt();_idGenerator=d(at);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=d(Ia);_document=d(Z);constructor(){let e=d(Et);e.load(hV),e.load(lo)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),i="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(MS),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(i)})}):e.classList.add(i),e}_updateRenderedContent(e){let i=`${e??""}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),e&&i.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${MS}`);for(let i of Array.from(e))i!==this._badgeElement&&i.remove()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=H({type:t,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(i,r){i&2&&re("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",ue],disabled:[2,"matBadgeDisabled","disabled",ue],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",ue]}})}return t})();function pV(t,n){t&1&&tn(0,"div",2)}var gV=new b("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var AS=(()=>{class t{_elementRef=d($);_ngZone=d(j);_changeDetectorRef=d(qe);_renderer=d($e);_cleanupTransitionEnd;constructor(){let e=R_(),i=d(gV,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=kS(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=kS(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new q;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,r){i&2&&(ge("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Pn("mat-"+r.color),re("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Fn],bufferValue:[2,"bufferValue","bufferValue",Fn],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,r){i&1&&(gt(0,"div",0),tn(1,"div",1),Y(2,pV,1,0,"div",2),Dt(),gt(3,"div",3),tn(4,"span",4),Dt(),gt(5,"div",5),tn(6,"span",4),Dt()),i&2&&(_(),ra("flex-basis",r._getBufferBarFlexBasis()),_(),X(r.mode==="buffer"?2:-1),_(),ra("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function kS(t,n=0,e=100){return Math.max(n,Math.min(e,t))}var vV=()=>({exact:!0});function _V(t,n){if(t&1&&(p(0,"button",10)(1,"mat-icon"),I(2,"arrow_drop_down"),g(),p(3,"span"),I(4),g()()),t&2){let e,i=B(),r=Ut(18);z("matMenuTriggerFor",r),_(4),He((e=i.accountService.currentUser())==null?null:e.email)}}function yV(t,n){t&1&&(p(0,"button",16),I(1,"Login"),g(),p(2,"button",17),I(3,"Register"),g())}function bV(t,n){t&1&&G(0,"mat-progress-bar",11)}var ch=class t{busyService=d(Za);cartService=d(Kt);accountService=d(ai);router=d(Tt);logout(){this.accountService.logout().subscribe({next:()=>{this.accountService.currentUser.set(null),this.router.navigateByUrl("")}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-header"]],decls:32,vars:6,consts:[["menu","matMenu"],[1,"shadow-md","p-3","w-full","max-h-20","fixed","top-0","z-50","bg-white"],[1,"flex","align-middle","items-center","justify-between","max-w-screen-2xl","mx-auto"],["routerLink","/","src","/images/logo.png","alt","app logo",1,"max-h-16"],[1,"flex","gap-3","my-2","uppercase","text-xl"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/shop","routerLinkActive","active"],["routerLink","/test-errors","routerLinkActive","active"],[1,"flex","gap-3","align-middle"],["routerLink","/cart","routerLinkActive","active","matBadgeSize","large",1,"custom-badge","mt-2","mr-2",3,"matBadge"],["mat-button","",3,"matMenuTriggerFor"],["mode","indeterminate",1,"fixed","z-50","top-20"],[1,"px-5"],["mat-menu-item","","routerLink","/cart",1,"px-3"],["mat-menu-item","","routerLink","/orders",1,"px-3"],["mat-menu-item","",1,"px-3",3,"click"],["routerLink","/account/login","mat-stroked-button",""],["routerLink","/account/register","mat-stroked-button",""]],template:function(e,i){e&1&&(p(0,"header",1)(1,"div",2),G(2,"img",3),p(3,"nav",4)(4,"a",5),I(5," Home"),g(),p(6,"a",6),I(7,"Shop"),g(),p(8,"a",7),I(9,"Errors"),g()(),p(10,"div",8)(11,"a",9)(12,"mat-icon"),I(13,"shopping_cart"),g()(),Y(14,_V,5,2,"button",10)(15,yV,4,0),g()()(),Y(16,bV,1,0,"mat-progress-bar",11),p(17,"mat-menu",12,0)(19,"button",13)(20,"mat-icon"),I(21,"shopping_cart"),g(),I(22," My cart "),g(),p(23,"button",14)(24,"mat-icon"),I(25,"history"),g(),I(26," My orders "),g(),G(27,"mat-divider"),p(28,"button",15),U("click",function(){return i.logout()}),p(29,"mat-icon"),I(30,"logout"),g(),I(31," Logout "),g()()),e&2&&(_(4),z("routerLinkActiveOptions",vv(5,vV)),_(7),z("matBadge",Ii(i.cartService.itemCount())),_(3),X(i.accountService.currentUser()?14:15),_(2),X(i.busyService.loading?16:-1))},dependencies:[Tn,pt,TS,un,__,AS,bo,Bm,Na,Kc],styles:[".custom-badge[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:24px;height:24px;font-size:14px;line-height:24px}.custom-badge[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}"]})};var dh=class t{title="SkyDev";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container","mt-24"]],template:function(e,i){e&1&&(G(0,"app-header"),p(1,"div",0),G(2,"router-outlet"),g())},dependencies:[ch,bc],encapsulation:2})};Fv(dh,cS).catch(t=>console.error(t));
