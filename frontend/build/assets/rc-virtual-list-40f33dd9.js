import{e as I,g as pe,b as W,i as ze,j as We,a as me,_ as Re,c as D,d as Se,h as je}from"./@babel-43e769cc.js";import{r as i}from"./react-52c5f799.js";import{c as Z}from"./classnames-5da7e38f.js";import{R as Ke}from"./rc-resize-observer-c25fc38f.js";import{j as H,q as Ve,a as oe}from"./rc-util-49c06749.js";var Me=i.forwardRef(function(t,v){var l=t.height,e=t.offset,u=t.children,o=t.prefixCls,s=t.onInnerResize,r=t.innerProps,n={},a={display:"flex",flexDirection:"column"};return e!==void 0&&(n={height:l,position:"relative",overflow:"hidden"},a=I(I({},a),{},{transform:"translateY(".concat(e,"px)"),position:"absolute",left:0,right:0,top:0})),i.createElement("div",{style:n},i.createElement(Ke,{onResize:function(c){var d=c.offsetHeight;d&&s&&s()}},i.createElement("div",pe({style:a,className:Z(W({},"".concat(o,"-holder-inner"),o)),ref:v},r),u)))});Me.displayName="Filler";var Ae=20;function ge(t){return"touches"in t?t.touches[0].pageY:t.pageY}var qe=function(t){ze(l,t);var v=We(l);function l(){var e;me(this,l);for(var u=arguments.length,o=new Array(u),s=0;s<u;s++)o[s]=arguments[s];return e=v.call.apply(v,[this].concat(o)),e.moveRaf=null,e.scrollbarRef=i.createRef(),e.thumbRef=i.createRef(),e.visibleTimeout=null,e.state={dragging:!1,pageY:null,startTop:null,visible:!1},e.delayHidden=function(){clearTimeout(e.visibleTimeout),e.setState({visible:!0}),e.visibleTimeout=setTimeout(function(){e.setState({visible:!1})},2e3)},e.onScrollbarTouchStart=function(r){r.preventDefault()},e.onContainerMouseDown=function(r){r.stopPropagation(),r.preventDefault()},e.patchEvents=function(){window.addEventListener("mousemove",e.onMouseMove),window.addEventListener("mouseup",e.onMouseUp),e.thumbRef.current.addEventListener("touchmove",e.onMouseMove),e.thumbRef.current.addEventListener("touchend",e.onMouseUp)},e.removeEvents=function(){window.removeEventListener("mousemove",e.onMouseMove),window.removeEventListener("mouseup",e.onMouseUp),e.thumbRef.current&&(e.thumbRef.current.removeEventListener("touchmove",e.onMouseMove),e.thumbRef.current.removeEventListener("touchend",e.onMouseUp)),H.cancel(e.moveRaf)},e.onMouseDown=function(r){var n=e.props.onStartMove;e.setState({dragging:!0,pageY:ge(r),startTop:e.getTop()}),n(),e.patchEvents(),r.stopPropagation(),r.preventDefault()},e.onMouseMove=function(r){var n=e.state,a=n.dragging,f=n.pageY,c=n.startTop,d=e.props.onScroll;if(H.cancel(e.moveRaf),a){var g=ge(r)-f,p=c+g,R=e.getEnableScrollRange(),b=e.getEnableHeightRange(),w=b?p/b:0,_=Math.ceil(w*R);e.moveRaf=H(function(){d(_)})}},e.onMouseUp=function(){var r=e.props.onStopMove;e.setState({dragging:!1}),r(),e.removeEvents()},e.getSpinHeight=function(){var r=e.props,n=r.height,a=r.count,f=n/a*10;return f=Math.max(f,Ae),f=Math.min(f,n/2),Math.floor(f)},e.getEnableScrollRange=function(){var r=e.props,n=r.scrollHeight,a=r.height;return n-a||0},e.getEnableHeightRange=function(){var r=e.props.height,n=e.getSpinHeight();return r-n||0},e.getTop=function(){var r=e.props.scrollTop,n=e.getEnableScrollRange(),a=e.getEnableHeightRange();if(r===0||n===0)return 0;var f=r/n;return f*a},e.showScroll=function(){var r=e.props,n=r.height,a=r.scrollHeight;return a>n},e}return Re(l,[{key:"componentDidMount",value:function(){this.scrollbarRef.current.addEventListener("touchstart",this.onScrollbarTouchStart),this.thumbRef.current.addEventListener("touchstart",this.onMouseDown)}},{key:"componentDidUpdate",value:function(u){u.scrollTop!==this.props.scrollTop&&this.delayHidden()}},{key:"componentWillUnmount",value:function(){var u,o;this.removeEvents(),(u=this.scrollbarRef.current)===null||u===void 0||u.removeEventListener("touchstart",this.onScrollbarTouchStart),(o=this.thumbRef.current)===null||o===void 0||o.removeEventListener("touchstart",this.onMouseDown),clearTimeout(this.visibleTimeout)}},{key:"render",value:function(){var u=this.state,o=u.dragging,s=u.visible,r=this.props,n=r.prefixCls,a=r.direction,f=this.getSpinHeight(),c=this.getTop(),d=this.showScroll(),g=d&&s,p=a==="rtl"?{left:0}:{right:0};return i.createElement("div",{ref:this.scrollbarRef,className:Z("".concat(n,"-scrollbar"),W({},"".concat(n,"-scrollbar-show"),d)),style:I(I({width:8,top:0,bottom:0},p),{},{position:"absolute",display:g?null:"none"}),onMouseDown:this.onContainerMouseDown,onMouseMove:this.delayHidden},i.createElement("div",{ref:this.thumbRef,className:Z("".concat(n,"-scrollbar-thumb"),W({},"".concat(n,"-scrollbar-thumb-moving"),o)),style:{width:"100%",height:f,top:c,left:0,position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"},onMouseDown:this.onMouseDown}))}}]),l}(i.Component);function Be(t){var v=t.children,l=t.setRef,e=i.useCallback(function(u){l(u)},[]);return i.cloneElement(v,{ref:e})}function Ge(t,v,l,e,u,o){var s=o.getKey;return t.slice(v,l+1).map(function(r,n){var a=v+n,f=u(r,a,{}),c=s(r);return i.createElement(Be,{key:c,setRef:function(g){return e(r,g)}},f)})}var Ze=function(){function t(){me(this,t),this.maps=void 0,this.maps=Object.create(null)}return Re(t,[{key:"set",value:function(l,e){this.maps[l]=e}},{key:"get",value:function(l){return this.maps[l]}}]),t}();function Je(t,v,l){var e=i.useState(0),u=D(e,2),o=u[0],s=u[1],r=i.useRef(new Map),n=i.useRef(new Ze),a=i.useRef();function f(){H.cancel(a.current)}function c(){f(),a.current=H(function(){r.current.forEach(function(g,p){if(g&&g.offsetParent){var R=Ve(g),b=R.offsetHeight;n.current.get(p)!==b&&n.current.set(p,R.offsetHeight)}}),s(function(g){return g+1})})}function d(g,p){var R=t(g),b=r.current.get(R);p?(r.current.set(R,p),c()):r.current.delete(R),!b!=!p&&(p?v==null||v(g):l==null||l(g))}return i.useEffect(function(){return f},[]),[d,c,n.current,o]}function Qe(t,v,l,e,u,o,s,r){var n=i.useRef();return function(a){if(a==null){r();return}if(H.cancel(n.current),typeof a=="number")s(a);else if(a&&Se(a)==="object"){var f,c=a.align;"index"in a?f=a.index:f=v.findIndex(function(R){return u(R)===a.key});var d=a.offset,g=d===void 0?0:d,p=function R(b,w){if(!(b<0||!t.current)){var _=t.current.clientHeight,j=!1,F=w;if(_){for(var E=w||c,U=0,P=0,L=0,y=Math.min(v.length,f),k=0;k<=y;k+=1){var J=u(v[k]);P=U;var $=l.get(J);L=P+($===void 0?e:$),U=L,k===f&&$===void 0&&(j=!0)}var C=null;switch(E){case"top":C=P-g;break;case"bottom":C=L-_+g;break;default:{var Y=t.current.scrollTop,Q=Y+_;P<Y?F="top":L>Q&&(F="bottom")}}C!==null&&C!==t.current.scrollTop&&s(C)}n.current=H(function(){j&&o(),R(b-1,F)},2)}};p(3)}}}function Xe(t,v,l){var e=t.length,u=v.length,o,s;if(e===0&&u===0)return null;e<u?(o=t,s=v):(o=v,s=t);var r={__EMPTY_ITEM__:!0};function n(p){return p!==void 0?l(p):r}for(var a=null,f=Math.abs(e-u)!==1,c=0;c<s.length;c+=1){var d=n(o[c]),g=n(s[c]);if(d!==g){a=c,f=f||d!==n(s[c+1]);break}}return a===null?null:{index:a,multiple:f}}function et(t,v,l){var e=i.useState(t),u=D(e,2),o=u[0],s=u[1],r=i.useState(null),n=D(r,2),a=n[0],f=n[1];return i.useEffect(function(){var c=Xe(o||[],t||[],v);(c==null?void 0:c.index)!==void 0&&(l==null||l(c.index),f(t[c.index])),s(t)},[t]),[a]}var tt=(typeof navigator>"u"?"undefined":Se(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const be=function(t,v){var l=i.useRef(!1),e=i.useRef(null);function u(){clearTimeout(e.current),l.current=!0,e.current=setTimeout(function(){l.current=!1},50)}var o=i.useRef({top:t,bottom:v});return o.current.top=t,o.current.bottom=v,function(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=s<0&&o.current.top||s>0&&o.current.bottom;return r&&n?(clearTimeout(e.current),l.current=!1):(!n||l.current)&&u(),!l.current&&n}};function rt(t,v,l,e){var u=i.useRef(0),o=i.useRef(null),s=i.useRef(null),r=i.useRef(!1),n=be(v,l);function a(c){if(t){H.cancel(o.current);var d=c.deltaY;u.current+=d,s.current=d,!n(d)&&(tt||c.preventDefault(),o.current=H(function(){var g=r.current?10:1;e(u.current*g),u.current=0}))}}function f(c){t&&(r.current=c.detail===s.current)}return[a,f]}var nt=14/15;function ot(t,v,l){var e=i.useRef(!1),u=i.useRef(0),o=i.useRef(null),s=i.useRef(null),r,n=function(d){if(e.current){var g=Math.ceil(d.touches[0].pageY),p=u.current-g;u.current=g,l(p)&&d.preventDefault(),clearInterval(s.current),s.current=setInterval(function(){p*=nt,(!l(p,!0)||Math.abs(p)<=.1)&&clearInterval(s.current)},16)}},a=function(){e.current=!1,r()},f=function(d){r(),d.touches.length===1&&!e.current&&(e.current=!0,u.current=Math.ceil(d.touches[0].pageY),o.current=d.target,o.current.addEventListener("touchmove",n),o.current.addEventListener("touchend",a))};r=function(){o.current&&(o.current.removeEventListener("touchmove",n),o.current.removeEventListener("touchend",a))},oe(function(){return t&&v.current.addEventListener("touchstart",f),function(){var c;(c=v.current)===null||c===void 0||c.removeEventListener("touchstart",f),r(),clearInterval(s.current)}},[t])}var it=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","component","onScroll","onVisibleChange","innerProps"],at=[],ut={overflowY:"auto",overflowAnchor:"none"};function lt(t,v){var l=t.prefixCls,e=l===void 0?"rc-virtual-list":l,u=t.className,o=t.height,s=t.itemHeight,r=t.fullHeight,n=r===void 0?!0:r,a=t.style,f=t.data,c=t.children,d=t.itemKey,g=t.virtual,p=t.direction,R=t.component,b=R===void 0?"div":R,w=t.onScroll,_=t.onVisibleChange,j=t.innerProps,F=je(t,it),E=!!(g!==!1&&o&&s),U=E&&f&&s*f.length>o,P=i.useState(0),L=D(P,2),y=L[0],k=L[1],J=i.useState(!1),$=D(J,2),C=$[0],Y=$[1],Q=Z(e,W({},"".concat(e,"-rtl"),p==="rtl"),u),S=f||at,T=i.useRef(),ie=i.useRef(),ae=i.useRef(),O=i.useCallback(function(h){return typeof d=="function"?d(h):h==null?void 0:h[d]},[d]),Ee={getKey:O};function K(h){k(function(m){var M;typeof h=="function"?M=h(m):M=h;var N=Ce(M);return T.current.scrollTop=N,N})}var ue=i.useRef({start:0,end:S.length}),Te=i.useRef(),ye=et(S,O),He=D(ye,1),we=He[0];Te.current=we;var _e=Je(O,null,null),V=D(_e,4),xe=V[0],le=V[1],se=V[2],De=V[3],A=i.useMemo(function(){if(!E)return{scrollHeight:void 0,start:0,end:S.length-1,offset:void 0};if(!U){var h;return{scrollHeight:((h=ie.current)===null||h===void 0?void 0:h.offsetHeight)||0,start:0,end:S.length-1,offset:void 0}}for(var m=0,M,N,x,Ue=S.length,z=0;z<Ue;z+=1){var Ye=S[z],Oe=O(Ye),de=se.get(Oe),ne=m+(de===void 0?s:de);ne>=y&&M===void 0&&(M=z,N=m),ne>y+o&&x===void 0&&(x=z),m=ne}return M===void 0&&(M=0,N=0,x=Math.ceil(o/s)),x===void 0&&(x=S.length-1),x=Math.min(x+1,S.length),{scrollHeight:m,start:M,end:x,offset:N}},[U,E,y,S,De,o]),X=A.scrollHeight,q=A.start,B=A.end,Le=A.offset;ue.current.start=q,ue.current.end=B;var ee=X-o,te=i.useRef(ee);te.current=ee;function Ce(h){var m=h;return Number.isNaN(te.current)||(m=Math.min(m,te.current)),m=Math.max(m,0),m}var ce=y<=0,fe=y>=ee,Ie=be(ce,fe);function Pe(h){var m=h;K(m)}function ke(h){var m=h.currentTarget.scrollTop;m!==y&&K(m),w==null||w(h)}var $e=rt(E,ce,fe,function(h){K(function(m){var M=m+h;return M})}),ve=D($e,2),re=ve[0],he=ve[1];ot(E,T,function(h,m){return Ie(h,m)?!1:(re({preventDefault:function(){},deltaY:h}),!0)}),oe(function(){function h(m){E&&m.preventDefault()}return T.current.addEventListener("wheel",re),T.current.addEventListener("DOMMouseScroll",he),T.current.addEventListener("MozMousePixelScroll",h),function(){T.current&&(T.current.removeEventListener("wheel",re),T.current.removeEventListener("DOMMouseScroll",he),T.current.removeEventListener("MozMousePixelScroll",h))}},[E]);var Ne=Qe(T,S,se,s,O,le,K,function(){var h;(h=ae.current)===null||h===void 0||h.delayHidden()});i.useImperativeHandle(v,function(){return{scrollTo:Ne}}),oe(function(){if(_){var h=S.slice(q,B+1);_(h,S)}},[q,B,S]);var Fe=Ge(S,q,B,xe,c,Ee),G=null;return o&&(G=I(W({},n?"height":"maxHeight",o),ut),E&&(G.overflowY="hidden",C&&(G.pointerEvents="none"))),i.createElement("div",pe({style:I(I({},a),{},{position:"relative"}),className:Q},F),i.createElement(b,{className:"".concat(e,"-holder"),style:G,ref:T,onScroll:ke},i.createElement(Me,{prefixCls:e,height:X,offset:Le,onInnerResize:le,ref:ie,innerProps:j},Fe)),E&&i.createElement(qe,{ref:ae,prefixCls:e,scrollTop:y,height:o,scrollHeight:X,count:S.length,direction:p,onScroll:Pe,onStartMove:function(){Y(!0)},onStopMove:function(){Y(!1)}}))}var st=i.forwardRef(lt);st.displayName="List";export{st as L};
