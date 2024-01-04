import{r as p}from"./react-52c5f799.js";import{e as k,l as re,m as D,f as R,b as ee,d as Y,h as de,g as be,i as Oe,j as Ie,a as fe,k as Le,_ as ve,c as Q}from"./@babel-43e769cc.js";import{b as H,v as J,F as j,G as _,o as Ae,B as xe}from"./rc-util-49c06749.js";import{S as Ue}from"./async-validator-dee29e8b.js";var z="RC_FORM_INTERNAL_HOOKS",$=function(){H(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},q=p.createContext({getFieldValue:$,getFieldsValue:$,getFieldError:$,getFieldWarning:$,getFieldsError:$,isFieldsTouched:$,isFieldTouched:$,isFieldValidating:$,isFieldsValidating:$,resetFields:$,setFields:$,setFieldValue:$,setFieldsValue:$,validateFields:$,submit:$,getInternalHooks:function(){return $(),{dispatch:$,initEntityValue:$,registerField:$,useSubscribe:$,setInitialValues:$,destroyForm:$,setCallbacks:$,registerWatch:$,getFields:$,setValidateMessages:$,setPreserve:$,getInitialValue:$}}}),te=p.createContext(null);function ae(o){return o==null?[]:Array.isArray(o)?o:[o]}function We(o){return o&&!!o._init}var L="'${name}' is not a valid ${type}",ke={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:L,method:L,array:L,object:L,number:L,date:L,boolean:L,integer:L,float:L,regexp:L,email:L,url:L,hex:L},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},ye=Ue;function _e(o,l){return o.replace(/\$\{\w+\}/g,function(t){var r=t.slice(2,-1);return l[r]})}var Ve="CODE_LOGIC_ERROR";function se(o,l,t,r,e){return ue.apply(this,arguments)}function ue(){return ue=re(D().mark(function o(l,t,r,e,n){var a,c,s,u,i,d,f,V,F;return D().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return a=k({},r),delete a.ruleIndex,ye.warning=function(){},a.validator&&(c=a.validator,a.validator=function(){try{return c.apply(void 0,arguments)}catch(h){return console.error(h),Promise.reject(Ve)}}),s=null,a&&a.type==="array"&&a.defaultField&&(s=a.defaultField,delete a.defaultField),u=new ye(ee({},l,[a])),i=J(ke,e.validateMessages),u.messages(i),d=[],v.prev=10,v.next=13,Promise.resolve(u.validate(ee({},l,t),k({},e)));case 13:v.next=18;break;case 15:v.prev=15,v.t0=v.catch(10),v.t0.errors&&(d=v.t0.errors.map(function(h,m){var P=h.message,N=P===Ve?i.default:P;return p.isValidElement(N)?p.cloneElement(N,{key:"error_".concat(m)}):N}));case 18:if(!(!d.length&&s)){v.next=23;break}return v.next=21,Promise.all(t.map(function(h,m){return se("".concat(l,".").concat(m),h,s,e,n)}));case 21:return f=v.sent,v.abrupt("return",f.reduce(function(h,m){return[].concat(R(h),R(m))},[]));case 23:return V=k(k({},r),{},{name:l,enum:(r.enum||[]).join(", ")},n),F=d.map(function(h){return typeof h=="string"?_e(h,V):h}),v.abrupt("return",F);case 26:case"end":return v.stop()}},o,null,[[10,15]])})),ue.apply(this,arguments)}function je(o,l,t,r,e,n){var a=o.join("."),c=t.map(function(i,d){var f=i.validator,V=k(k({},i),{},{ruleIndex:d});return f&&(V.validator=function(F,g,v){var h=!1,m=function(){for(var w=arguments.length,y=new Array(w),C=0;C<w;C++)y[C]=arguments[C];Promise.resolve().then(function(){H(!h,"Your validator function has already return a promise. `callback` will be ignored."),h||v.apply(void 0,y)})},P=f(F,g,m);h=P&&typeof P.then=="function"&&typeof P.catch=="function",H(h,"`callback` is deprecated. Please return a promise instead."),h&&P.then(function(){v()}).catch(function(N){v(N||" ")})}),V}).sort(function(i,d){var f=i.warningOnly,V=i.ruleIndex,F=d.warningOnly,g=d.ruleIndex;return!!f==!!F?V-g:f?1:-1}),s;if(e===!0)s=new Promise(function(){var i=re(D().mark(function d(f,V){var F,g,v;return D().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:F=0;case 1:if(!(F<c.length)){m.next=12;break}return g=c[F],m.next=5,se(a,l,g,r,n);case 5:if(v=m.sent,!v.length){m.next=9;break}return V([{errors:v,rule:g}]),m.abrupt("return");case 9:F+=1,m.next=1;break;case 12:f([]);case 13:case"end":return m.stop()}},d)}));return function(d,f){return i.apply(this,arguments)}}());else{var u=c.map(function(i){return se(a,l,i,r,n).then(function(d){return{errors:d,rule:i}})});s=(e?De(u):He(u)).then(function(i){return Promise.reject(i)})}return s.catch(function(i){return i}),s}function He(o){return le.apply(this,arguments)}function le(){return le=re(D().mark(function o(l){return D().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.all(l).then(function(e){var n,a=(n=[]).concat.apply(n,R(e));return a}));case 1:case"end":return r.stop()}},o)})),le.apply(this,arguments)}function De(o){return oe.apply(this,arguments)}function oe(){return oe=re(D().mark(function o(l){var t;return D().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.abrupt("return",new Promise(function(n){l.forEach(function(a){a.then(function(c){c.errors.length&&n([c]),t+=1,t===l.length&&n([])})})}));case 2:case"end":return e.stop()}},o)})),oe.apply(this,arguments)}function S(o){return ae(o)}function Pe(o,l){var t={};return l.forEach(function(r){var e=j(o,r);t=_(t,r,e)}),t}function B(o,l){return o&&o.some(function(t){return Re(t,l)})}function Re(o,l){return!o||!l||o.length!==l.length?!1:o.every(function(t,r){return l[r]===t})}function Ke(o,l){if(o===l)return!0;if(!o&&l||o&&!l||!o||!l||Y(o)!=="object"||Y(l)!=="object")return!1;var t=Object.keys(o),r=Object.keys(l),e=new Set([].concat(t,r));return R(e).every(function(n){var a=o[n],c=l[n];return typeof a=="function"&&typeof c=="function"?!0:a===c})}function ze(o){var l=arguments.length<=1?void 0:arguments[1];return l&&l.target&&Y(l.target)==="object"&&o in l.target?l.target[o]:l}function Ce(o,l,t){var r=o.length;if(l<0||l>=r||t<0||t>=r)return o;var e=o[l],n=l-t;return n>0?[].concat(R(o.slice(0,t)),[e],R(o.slice(t,l)),R(o.slice(l+1,r))):n<0?[].concat(R(o.slice(0,l)),R(o.slice(l+1,t+1)),[e],R(o.slice(t+1,r))):o}var Ge=["name"],A=[];function Ee(o,l,t,r,e,n){return typeof o=="function"?o(l,t,"source"in n?{source:n.source}:{}):r!==e}var ge=function(o){Oe(t,o);var l=Ie(t);function t(r){var e;if(fe(this,t),e=l.call(this,r),e.state={resetCount:0},e.cancelRegisterFunc=null,e.mounted=!1,e.touched=!1,e.dirty=!1,e.validatePromise=void 0,e.prevValidating=void 0,e.errors=A,e.warnings=A,e.cancelRegister=function(){var s=e.props,u=s.preserve,i=s.isListField,d=s.name;e.cancelRegisterFunc&&e.cancelRegisterFunc(i,u,S(d)),e.cancelRegisterFunc=null},e.getNamePath=function(){var s=e.props,u=s.name,i=s.fieldContext,d=i.prefixName,f=d===void 0?[]:d;return u!==void 0?[].concat(R(f),R(u)):[]},e.getRules=function(){var s=e.props,u=s.rules,i=u===void 0?[]:u,d=s.fieldContext;return i.map(function(f){return typeof f=="function"?f(d):f})},e.refresh=function(){e.mounted&&e.setState(function(s){var u=s.resetCount;return{resetCount:u+1}})},e.metaCache=null,e.triggerMetaEvent=function(s){var u=e.props.onMetaChange;if(u){var i=k(k({},e.getMeta()),{},{destroy:s});Ae(e.metaCache,i)||u(i),e.metaCache=i}else e.metaCache=null},e.onStoreChange=function(s,u,i){var d=e.props,f=d.shouldUpdate,V=d.dependencies,F=V===void 0?[]:V,g=d.onReset,v=i.store,h=e.getNamePath(),m=e.getValue(s),P=e.getValue(v),N=u&&B(u,h);switch(i.type==="valueUpdate"&&i.source==="external"&&m!==P&&(e.touched=!0,e.dirty=!0,e.validatePromise=null,e.errors=A,e.warnings=A,e.triggerMetaEvent()),i.type){case"reset":if(!u||N){e.touched=!1,e.dirty=!1,e.validatePromise=void 0,e.errors=A,e.warnings=A,e.triggerMetaEvent(),g==null||g(),e.refresh();return}break;case"remove":{if(f){e.reRender();return}break}case"setField":{if(N){var w=i.data;"touched"in w&&(e.touched=w.touched),"validating"in w&&!("originRCField"in w)&&(e.validatePromise=w.validating?Promise.resolve([]):null),"errors"in w&&(e.errors=w.errors||A),"warnings"in w&&(e.warnings=w.warnings||A),e.dirty=!0,e.triggerMetaEvent(),e.reRender();return}if(f&&!h.length&&Ee(f,s,v,m,P,i)){e.reRender();return}break}case"dependenciesUpdate":{var y=F.map(S);if(y.some(function(C){return B(i.relatedFields,C)})){e.reRender();return}break}default:if(N||(!F.length||h.length||f)&&Ee(f,s,v,m,P,i)){e.reRender();return}break}f===!0&&e.reRender()},e.validateRules=function(s){var u=e.getNamePath(),i=e.getValue(),d=s||{},f=d.triggerName,V=d.validateOnly,F=V===void 0?!1:V,g=Promise.resolve().then(function(){if(!e.mounted)return[];var v=e.props,h=v.validateFirst,m=h===void 0?!1:h,P=v.messageVariables,N=e.getRules();f&&(N=N.filter(function(y){return y}).filter(function(y){var C=y.validateTrigger;if(!C)return!0;var O=ae(C);return O.includes(f)}));var w=je(u,i,N,s,m,P);return w.catch(function(y){return y}).then(function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:A;if(e.validatePromise===g){var C;e.validatePromise=null;var O=[],b=[];(C=y.forEach)===null||C===void 0||C.call(y,function(E){var T=E.rule.warningOnly,M=E.errors,I=M===void 0?A:M;T?b.push.apply(b,R(I)):O.push.apply(O,R(I))}),e.errors=O,e.warnings=b,e.triggerMetaEvent(),e.reRender()}}),w});return F||(e.validatePromise=g,e.dirty=!0,e.errors=A,e.warnings=A,e.triggerMetaEvent(),e.reRender()),g},e.isFieldValidating=function(){return!!e.validatePromise},e.isFieldTouched=function(){return e.touched},e.isFieldDirty=function(){if(e.dirty||e.props.initialValue!==void 0)return!0;var s=e.props.fieldContext,u=s.getInternalHooks(z),i=u.getInitialValue;return i(e.getNamePath())!==void 0},e.getErrors=function(){return e.errors},e.getWarnings=function(){return e.warnings},e.isListField=function(){return e.props.isListField},e.isList=function(){return e.props.isList},e.isPreserve=function(){return e.props.preserve},e.getMeta=function(){e.prevValidating=e.isFieldValidating();var s={touched:e.isFieldTouched(),validating:e.prevValidating,errors:e.errors,warnings:e.warnings,name:e.getNamePath(),validated:e.validatePromise===null};return s},e.getOnlyChild=function(s){if(typeof s=="function"){var u=e.getMeta();return k(k({},e.getOnlyChild(s(e.getControlled(),u,e.props.fieldContext))),{},{isFunction:!0})}var i=xe(s);return i.length!==1||!p.isValidElement(i[0])?{child:i,isFunction:!1}:{child:i[0],isFunction:!1}},e.getValue=function(s){var u=e.props.fieldContext.getFieldsValue,i=e.getNamePath();return j(s||u(!0),i)},e.getControlled=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=e.props,i=u.trigger,d=u.validateTrigger,f=u.getValueFromEvent,V=u.normalize,F=u.valuePropName,g=u.getValueProps,v=u.fieldContext,h=d!==void 0?d:v.validateTrigger,m=e.getNamePath(),P=v.getInternalHooks,N=v.getFieldsValue,w=P(z),y=w.dispatch,C=e.getValue(),O=g||function(M){return ee({},F,M)},b=s[i],E=k(k({},s),O(C));E[i]=function(){e.touched=!0,e.dirty=!0,e.triggerMetaEvent();for(var M,I=arguments.length,x=new Array(I),W=0;W<I;W++)x[W]=arguments[W];f?M=f.apply(void 0,x):M=ze.apply(void 0,[F].concat(x)),V&&(M=V(M,C,N(!0))),y({type:"updateValue",namePath:m,value:M}),b&&b.apply(void 0,x)};var T=ae(h||[]);return T.forEach(function(M){var I=E[M];E[M]=function(){I&&I.apply(void 0,arguments);var x=e.props.rules;x&&x.length&&y({type:"validateField",namePath:m,triggerName:M})}}),E},r.fieldContext){var n=r.fieldContext.getInternalHooks,a=n(z),c=a.initEntityValue;c(Le(e))}return e}return ve(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.shouldUpdate,a=e.fieldContext;if(this.mounted=!0,a){var c=a.getInternalHooks,s=c(z),u=s.registerField;this.cancelRegisterFunc=u(this)}n===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var e=this.state.resetCount,n=this.props.children,a=this.getOnlyChild(n),c=a.child,s=a.isFunction,u;return s?u=c:p.isValidElement(c)?u=p.cloneElement(c,this.getControlled(c.props)):(H(!c,"`children` of Field is not validate ReactElement."),u=c),p.createElement(p.Fragment,{key:e},u)}}]),t}(p.Component);ge.contextType=q;ge.defaultProps={trigger:"onChange",valuePropName:"value"};function Ne(o){var l=o.name,t=de(o,Ge),r=p.useContext(q),e=p.useContext(te),n=l!==void 0?S(l):void 0,a="keep";return t.isListField||(a="_".concat((n||[]).join("_"))),p.createElement(ge,be({key:a,name:n,isListField:!!e},t,{fieldContext:r}))}function qe(o){var l=o.name,t=o.initialValue,r=o.children,e=o.rules,n=o.validateTrigger,a=o.isListField,c=p.useContext(q),s=p.useContext(te),u=p.useRef({keys:[],id:0}),i=u.current,d=p.useMemo(function(){var g=S(c.prefixName)||[];return[].concat(R(g),R(S(l)))},[c.prefixName,l]),f=p.useMemo(function(){return k(k({},c),{},{prefixName:d})},[c,d]),V=p.useMemo(function(){return{getKey:function(v){var h=d.length,m=v[h];return[i.keys[m],v.slice(h+1)]}}},[d]);if(typeof r!="function")return H(!1,"Form.List only accepts function as children."),null;var F=function(v,h,m){var P=m.source;return P==="internal"?!1:v!==h};return p.createElement(te.Provider,{value:V},p.createElement(q.Provider,{value:f},p.createElement(Ne,{name:[],shouldUpdate:F,rules:e,validateTrigger:n,initialValue:t,isList:!0,isListField:a??!!s},function(g,v){var h=g.value,m=h===void 0?[]:h,P=g.onChange,N=c.getFieldValue,w=function(){var b=N(d||[]);return b||[]},y={add:function(b,E){var T=w();E>=0&&E<=T.length?(i.keys=[].concat(R(i.keys.slice(0,E)),[i.id],R(i.keys.slice(E))),P([].concat(R(T.slice(0,E)),[b],R(T.slice(E))))):(i.keys=[].concat(R(i.keys),[i.id]),P([].concat(R(T),[b]))),i.id+=1},remove:function(b){var E=w(),T=new Set(Array.isArray(b)?b:[b]);T.size<=0||(i.keys=i.keys.filter(function(M,I){return!T.has(I)}),P(E.filter(function(M,I){return!T.has(I)})))},move:function(b,E){if(b!==E){var T=w();b<0||b>=T.length||E<0||E>=T.length||(i.keys=Ce(i.keys,b,E),P(Ce(T,b,E)))}}},C=m||[];return Array.isArray(C)||(C=[]),r(C.map(function(O,b){var E=i.keys[b];return E===void 0&&(i.keys[b]=i.id,E=i.keys[b],i.id+=1),{name:b,key:E,isListField:!0}}),y,v)})))}function Je(o){var l=!1,t=o.length,r=[];return o.length?new Promise(function(e,n){o.forEach(function(a,c){a.catch(function(s){return l=!0,s}).then(function(s){t-=1,r[c]=s,!(t>0)&&(l&&n(r),e(r))})})}):Promise.resolve([])}var $e="__@field_split__";function ie(o){return o.map(function(l){return"".concat(Y(l),":").concat(l)}).join($e)}var G=function(){function o(){fe(this,o),this.kvs=new Map}return ve(o,[{key:"set",value:function(t,r){this.kvs.set(ie(t),r)}},{key:"get",value:function(t){return this.kvs.get(ie(t))}},{key:"update",value:function(t,r){var e=this.get(t),n=r(e);n?this.set(t,n):this.delete(t)}},{key:"delete",value:function(t){this.kvs.delete(ie(t))}},{key:"map",value:function(t){return R(this.kvs.entries()).map(function(r){var e=Q(r,2),n=e[0],a=e[1],c=n.split($e);return t({key:c.map(function(s){var u=s.match(/^([^:]*):(.*)$/),i=Q(u,3),d=i[1],f=i[2];return d==="number"?Number(f):f}),value:a})})}},{key:"toJSON",value:function(){var t={};return this.map(function(r){var e=r.key,n=r.value;return t[e.join(".")]=n,null}),t}}]),o}(),Be=["name"],Ye=ve(function o(l){var t=this;fe(this,o),this.formHooked=!1,this.forceRootUpdate=void 0,this.subscribable=!0,this.store={},this.fieldEntities=[],this.initialValues={},this.callbacks={},this.validateMessages=null,this.preserve=null,this.lastValidatePromise=null,this.getForm=function(){return{getFieldValue:t.getFieldValue,getFieldsValue:t.getFieldsValue,getFieldError:t.getFieldError,getFieldWarning:t.getFieldWarning,getFieldsError:t.getFieldsError,isFieldsTouched:t.isFieldsTouched,isFieldTouched:t.isFieldTouched,isFieldValidating:t.isFieldValidating,isFieldsValidating:t.isFieldsValidating,resetFields:t.resetFields,setFields:t.setFields,setFieldValue:t.setFieldValue,setFieldsValue:t.setFieldsValue,validateFields:t.validateFields,submit:t.submit,_init:!0,getInternalHooks:t.getInternalHooks}},this.getInternalHooks=function(r){return r===z?(t.formHooked=!0,{dispatch:t.dispatch,initEntityValue:t.initEntityValue,registerField:t.registerField,useSubscribe:t.useSubscribe,setInitialValues:t.setInitialValues,destroyForm:t.destroyForm,setCallbacks:t.setCallbacks,setValidateMessages:t.setValidateMessages,getFields:t.getFields,setPreserve:t.setPreserve,getInitialValue:t.getInitialValue,registerWatch:t.registerWatch}):(H(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)},this.useSubscribe=function(r){t.subscribable=r},this.prevWithoutPreserves=null,this.setInitialValues=function(r,e){if(t.initialValues=r||{},e){var n,a=J(r,t.store);(n=t.prevWithoutPreserves)===null||n===void 0||n.map(function(c){var s=c.key;a=_(a,s,j(r,s))}),t.prevWithoutPreserves=null,t.updateStore(a)}},this.destroyForm=function(){var r=new G;t.getFieldEntities(!0).forEach(function(e){t.isMergedPreserve(e.isPreserve())||r.set(e.getNamePath(),!0)}),t.prevWithoutPreserves=r},this.getInitialValue=function(r){var e=j(t.initialValues,r);return r.length?J(e):e},this.setCallbacks=function(r){t.callbacks=r},this.setValidateMessages=function(r){t.validateMessages=r},this.setPreserve=function(r){t.preserve=r},this.watchList=[],this.registerWatch=function(r){return t.watchList.push(r),function(){t.watchList=t.watchList.filter(function(e){return e!==r})}},this.notifyWatch=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(t.watchList.length){var e=t.getFieldsValue(),n=t.getFieldsValue(!0);t.watchList.forEach(function(a){a(e,n,r)})}},this.timeoutId=null,this.warningUnhooked=function(){},this.updateStore=function(r){t.store=r},this.getFieldEntities=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return r?t.fieldEntities.filter(function(e){return e.getNamePath().length}):t.fieldEntities},this.getFieldsMap=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=new G;return t.getFieldEntities(r).forEach(function(n){var a=n.getNamePath();e.set(a,n)}),e},this.getFieldEntitiesForNamePathList=function(r){if(!r)return t.getFieldEntities(!0);var e=t.getFieldsMap(!0);return r.map(function(n){var a=S(n);return e.get(a)||{INVALIDATE_NAME_PATH:S(n)}})},this.getFieldsValue=function(r,e){t.warningUnhooked();var n,a,c;if(r===!0||Array.isArray(r)?(n=r,a=e):r&&Y(r)==="object"&&(c=r.strict,a=r.filter),n===!0&&!a)return t.store;var s=t.getFieldEntitiesForNamePathList(Array.isArray(n)?n:null),u=[];return s.forEach(function(i){var d,f="INVALIDATE_NAME_PATH"in i?i.INVALIDATE_NAME_PATH:i.getNamePath();if(c){var V;if(!((V=i.isList)===null||V===void 0)&&V.call(i))return}else if(!n&&(!((d=i.isListField)===null||d===void 0)&&d.call(i)))return;if(!a)u.push(f);else{var F="getMeta"in i?i.getMeta():null;a(F)&&u.push(f)}}),Pe(t.store,u.map(S))},this.getFieldValue=function(r){t.warningUnhooked();var e=S(r);return j(t.store,e)},this.getFieldsError=function(r){t.warningUnhooked();var e=t.getFieldEntitiesForNamePathList(r);return e.map(function(n,a){return n&&!("INVALIDATE_NAME_PATH"in n)?{name:n.getNamePath(),errors:n.getErrors(),warnings:n.getWarnings()}:{name:S(r[a]),errors:[],warnings:[]}})},this.getFieldError=function(r){t.warningUnhooked();var e=S(r),n=t.getFieldsError([e])[0];return n.errors},this.getFieldWarning=function(r){t.warningUnhooked();var e=S(r),n=t.getFieldsError([e])[0];return n.warnings},this.isFieldsTouched=function(){t.warningUnhooked();for(var r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];var a=e[0],c=e[1],s,u=!1;e.length===0?s=null:e.length===1?Array.isArray(a)?(s=a.map(S),u=!1):(s=null,u=a):(s=a.map(S),u=c);var i=t.getFieldEntities(!0),d=function(v){return v.isFieldTouched()};if(!s)return u?i.every(d):i.some(d);var f=new G;s.forEach(function(g){f.set(g,[])}),i.forEach(function(g){var v=g.getNamePath();s.forEach(function(h){h.every(function(m,P){return v[P]===m})&&f.update(h,function(m){return[].concat(R(m),[g])})})});var V=function(v){return v.some(d)},F=f.map(function(g){var v=g.value;return v});return u?F.every(V):F.some(V)},this.isFieldTouched=function(r){return t.warningUnhooked(),t.isFieldsTouched([r])},this.isFieldsValidating=function(r){t.warningUnhooked();var e=t.getFieldEntities();if(!r)return e.some(function(a){return a.isFieldValidating()});var n=r.map(S);return e.some(function(a){var c=a.getNamePath();return B(n,c)&&a.isFieldValidating()})},this.isFieldValidating=function(r){return t.warningUnhooked(),t.isFieldsValidating([r])},this.resetWithFieldInitialValue=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=new G,n=t.getFieldEntities(!0);n.forEach(function(s){var u=s.props.initialValue,i=s.getNamePath();if(u!==void 0){var d=e.get(i)||new Set;d.add({entity:s,value:u}),e.set(i,d)}});var a=function(u){u.forEach(function(i){var d=i.props.initialValue;if(d!==void 0){var f=i.getNamePath(),V=t.getInitialValue(f);if(V!==void 0)H(!1,"Form already set 'initialValues' with path '".concat(f.join("."),"'. Field can not overwrite it."));else{var F=e.get(f);if(F&&F.size>1)H(!1,"Multiple Field with path '".concat(f.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(F){var g=t.getFieldValue(f);(!r.skipExist||g===void 0)&&t.updateStore(_(t.store,f,R(F)[0].value))}}}})},c;r.entities?c=r.entities:r.namePathList?(c=[],r.namePathList.forEach(function(s){var u=e.get(s);if(u){var i;(i=c).push.apply(i,R(R(u).map(function(d){return d.entity})))}})):c=n,a(c)},this.resetFields=function(r){t.warningUnhooked();var e=t.store;if(!r){t.updateStore(J(t.initialValues)),t.resetWithFieldInitialValue(),t.notifyObservers(e,null,{type:"reset"}),t.notifyWatch();return}var n=r.map(S);n.forEach(function(a){var c=t.getInitialValue(a);t.updateStore(_(t.store,a,c))}),t.resetWithFieldInitialValue({namePathList:n}),t.notifyObservers(e,n,{type:"reset"}),t.notifyWatch(n)},this.setFields=function(r){t.warningUnhooked();var e=t.store,n=[];r.forEach(function(a){var c=a.name,s=de(a,Be),u=S(c);n.push(u),"value"in s&&t.updateStore(_(t.store,u,s.value)),t.notifyObservers(e,[u],{type:"setField",data:a})}),t.notifyWatch(n)},this.getFields=function(){var r=t.getFieldEntities(!0),e=r.map(function(n){var a=n.getNamePath(),c=n.getMeta(),s=k(k({},c),{},{name:a,value:t.getFieldValue(a)});return Object.defineProperty(s,"originRCField",{value:!0}),s});return e},this.initEntityValue=function(r){var e=r.props.initialValue;if(e!==void 0){var n=r.getNamePath(),a=j(t.store,n);a===void 0&&t.updateStore(_(t.store,n,e))}},this.isMergedPreserve=function(r){var e=r!==void 0?r:t.preserve;return e??!0},this.registerField=function(r){t.fieldEntities.push(r);var e=r.getNamePath();if(t.notifyWatch([e]),r.props.initialValue!==void 0){var n=t.store;t.resetWithFieldInitialValue({entities:[r],skipExist:!0}),t.notifyObservers(n,[r.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(a,c){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(t.fieldEntities=t.fieldEntities.filter(function(d){return d!==r}),!t.isMergedPreserve(c)&&(!a||s.length>1)){var u=a?void 0:t.getInitialValue(e);if(e.length&&t.getFieldValue(e)!==u&&t.fieldEntities.every(function(d){return!Re(d.getNamePath(),e)})){var i=t.store;t.updateStore(_(i,e,u,!0)),t.notifyObservers(i,[e],{type:"remove"}),t.triggerDependenciesUpdate(i,e)}}t.notifyWatch([e])}},this.dispatch=function(r){switch(r.type){case"updateValue":{var e=r.namePath,n=r.value;t.updateValue(e,n);break}case"validateField":{var a=r.namePath,c=r.triggerName;t.validateFields([a],{triggerName:c});break}}},this.notifyObservers=function(r,e,n){if(t.subscribable){var a=k(k({},n),{},{store:t.getFieldsValue(!0)});t.getFieldEntities().forEach(function(c){var s=c.onStoreChange;s(r,e,a)})}else t.forceRootUpdate()},this.triggerDependenciesUpdate=function(r,e){var n=t.getDependencyChildrenFields(e);return n.length&&t.validateFields(n),t.notifyObservers(r,n,{type:"dependenciesUpdate",relatedFields:[e].concat(R(n))}),n},this.updateValue=function(r,e){var n=S(r),a=t.store;t.updateStore(_(t.store,n,e)),t.notifyObservers(a,[n],{type:"valueUpdate",source:"internal"}),t.notifyWatch([n]);var c=t.triggerDependenciesUpdate(a,n),s=t.callbacks.onValuesChange;if(s){var u=Pe(t.store,[n]);s(u,t.getFieldsValue())}t.triggerOnFieldsChange([n].concat(R(c)))},this.setFieldsValue=function(r){t.warningUnhooked();var e=t.store;if(r){var n=J(t.store,r);t.updateStore(n)}t.notifyObservers(e,null,{type:"valueUpdate",source:"external"}),t.notifyWatch()},this.setFieldValue=function(r,e){t.setFields([{name:r,value:e}])},this.getDependencyChildrenFields=function(r){var e=new Set,n=[],a=new G;t.getFieldEntities().forEach(function(s){var u=s.props.dependencies;(u||[]).forEach(function(i){var d=S(i);a.update(d,function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return f.add(s),f})})});var c=function s(u){var i=a.get(u)||new Set;i.forEach(function(d){if(!e.has(d)){e.add(d);var f=d.getNamePath();d.isFieldDirty()&&f.length&&(n.push(f),s(f))}})};return c(r),n},this.triggerOnFieldsChange=function(r,e){var n=t.callbacks.onFieldsChange;if(n){var a=t.getFields();if(e){var c=new G;e.forEach(function(u){var i=u.name,d=u.errors;c.set(i,d)}),a.forEach(function(u){u.errors=c.get(u.name)||u.errors})}var s=a.filter(function(u){var i=u.name;return B(r,i)});s.length&&n(s,a)}},this.validateFields=function(r,e){t.warningUnhooked();var n,a;Array.isArray(r)||typeof r=="string"||typeof e=="string"?(n=r,a=e):a=r;var c=!!n,s=c?n.map(S):[],u=[],i=String(Date.now()),d=new Set;t.getFieldEntities(!0).forEach(function(g){var v;if(c||s.push(g.getNamePath()),!((v=a)===null||v===void 0)&&v.recursive&&c){var h=g.getNamePath();h.every(function(N,w){return n[w]===N||n[w]===void 0})&&s.push(h)}if(!(!g.props.rules||!g.props.rules.length)){var m=g.getNamePath();if(d.add(m.join(i)),!c||B(s,m)){var P=g.validateRules(k({validateMessages:k(k({},ke),t.validateMessages)},a));u.push(P.then(function(){return{name:m,errors:[],warnings:[]}}).catch(function(N){var w,y=[],C=[];return(w=N.forEach)===null||w===void 0||w.call(N,function(O){var b=O.rule.warningOnly,E=O.errors;b?C.push.apply(C,R(E)):y.push.apply(y,R(E))}),y.length?Promise.reject({name:m,errors:y,warnings:C}):{name:m,errors:y,warnings:C}}))}}});var f=Je(u);t.lastValidatePromise=f,f.catch(function(g){return g}).then(function(g){var v=g.map(function(h){var m=h.name;return m});t.notifyObservers(t.store,v,{type:"validateFinish"}),t.triggerOnFieldsChange(v,g)});var V=f.then(function(){return t.lastValidatePromise===f?Promise.resolve(t.getFieldsValue(s)):Promise.reject([])}).catch(function(g){var v=g.filter(function(h){return h&&h.errors.length});return Promise.reject({values:t.getFieldsValue(s),errorFields:v,outOfDate:t.lastValidatePromise!==f})});V.catch(function(g){return g});var F=s.filter(function(g){return d.has(g.join(i))});return t.triggerOnFieldsChange(F),V},this.submit=function(){t.warningUnhooked(),t.validateFields().then(function(r){var e=t.callbacks.onFinish;if(e)try{e(r)}catch(n){console.error(n)}}).catch(function(r){var e=t.callbacks.onFinishFailed;e&&e(r)})},this.forceRootUpdate=l});function Me(o){var l=p.useRef(),t=p.useState({}),r=Q(t,2),e=r[1];if(!l.current)if(o)l.current=o;else{var n=function(){e({})},a=new Ye(n);l.current=a.getForm()}return[l.current]}var ce=p.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),Qe=function(l){var t=l.validateMessages,r=l.onFormChange,e=l.onFormFinish,n=l.children,a=p.useContext(ce),c=p.useRef({});return p.createElement(ce.Provider,{value:k(k({},a),{},{validateMessages:k(k({},a.validateMessages),t),triggerFormChange:function(u,i){r&&r(u,{changedFields:i,forms:c.current}),a.triggerFormChange(u,i)},triggerFormFinish:function(u,i){e&&e(u,{values:i,forms:c.current}),a.triggerFormFinish(u,i)},registerForm:function(u,i){u&&(c.current=k(k({},c.current),{},ee({},u,i))),a.registerForm(u,i)},unregisterForm:function(u){var i=k({},c.current);delete i[u],c.current=i,a.unregisterForm(u)}})},n)},Xe=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],Ze=function(l,t){var r=l.name,e=l.initialValues,n=l.fields,a=l.form,c=l.preserve,s=l.children,u=l.component,i=u===void 0?"form":u,d=l.validateMessages,f=l.validateTrigger,V=f===void 0?"onChange":f,F=l.onValuesChange,g=l.onFieldsChange,v=l.onFinish,h=l.onFinishFailed,m=de(l,Xe),P=p.useContext(ce),N=Me(a),w=Q(N,1),y=w[0],C=y.getInternalHooks(z),O=C.useSubscribe,b=C.setInitialValues,E=C.setCallbacks,T=C.setValidateMessages,M=C.setPreserve,I=C.destroyForm;p.useImperativeHandle(t,function(){return y}),p.useEffect(function(){return P.registerForm(r,y),function(){P.unregisterForm(r)}},[P,y,r]),T(k(k({},P.validateMessages),d)),E({onValuesChange:F,onFieldsChange:function(U){if(P.triggerFormChange(r,U),g){for(var K=arguments.length,Fe=new Array(K>1?K-1:0),Z=1;Z<K;Z++)Fe[Z-1]=arguments[Z];g.apply(void 0,[U].concat(Fe))}},onFinish:function(U){P.triggerFormFinish(r,U),v&&v(U)},onFinishFailed:h}),M(c);var x=p.useRef(null);b(e,!x.current),x.current||(x.current=!0),p.useEffect(function(){return I},[]);var W,he=typeof s=="function";if(he){var Se=y.getFieldsValue(!0);W=s(Se,y)}else W=s;O(!he);var me=p.useRef();p.useEffect(function(){Ke(me.current||[],n||[])||y.setFields(n||[]),me.current=n},[n,y]);var Te=p.useMemo(function(){return k(k({},y),{},{validateTrigger:V})},[y,V]),pe=p.createElement(te.Provider,{value:null},p.createElement(q.Provider,{value:Te},W));return i===!1?pe:p.createElement(i,be({},m,{onSubmit:function(U){U.preventDefault(),U.stopPropagation(),y.submit()},onReset:function(U){var K;U.preventDefault(),y.resetFields(),(K=m.onReset)===null||K===void 0||K.call(m,U)}}),pe)};function we(o){try{return JSON.stringify(o)}catch{return Math.random()}}function et(){for(var o=arguments.length,l=new Array(o),t=0;t<o;t++)l[t]=arguments[t];var r=l[0],e=r===void 0?[]:r,n=l[1],a=n===void 0?{}:n,c=We(a)?{form:a}:a,s=c.form,u=p.useState(),i=Q(u,2),d=i[0],f=i[1],V=p.useMemo(function(){return we(d)},[d]),F=p.useRef(V);F.current=V;var g=p.useContext(q),v=s||g,h=v&&v._init,m=S(e),P=p.useRef(m);return P.current=m,p.useEffect(function(){if(h){var N=v.getFieldsValue,w=v.getInternalHooks,y=w(z),C=y.registerWatch,O=C(function(E,T){var M=j(c.preserve?T:E,P.current),I=we(M);F.current!==I&&(F.current=I,f(M))}),b=j(c.preserve?N(!0):N(),P.current);return f(b),O}},[h]),d}var tt=p.forwardRef(Ze),X=tt;X.FormProvider=Qe;X.Field=Ne;X.List=qe;X.useForm=Me;X.useWatch=et;export{q as C,Qe as F,te as L,X as R,Ne as W,qe as a,et as b,Me as u};
