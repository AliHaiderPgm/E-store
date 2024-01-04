import{c as L,e as _,b as J,h as Re,g as de,f as oo,d as Ve}from"./@babel-43e769cc.js";import{c as ue}from"./classnames-5da7e38f.js";import{H as He,o as to,j as ao,K as Ye,I as _e,p as Xe,J as no}from"./rc-util-49c06749.js";import{r as o,a as ve}from"./react-52c5f799.js";import{D as ro}from"./rc-dialog-2692ed19.js";import{P as io}from"./@rc-component-d028c13d.js";import{C as so}from"./rc-motion-6c938c71.js";var $e=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"],ye=o.createContext(null),ze=0;function lo(m,e){var n=o.useState(function(){return ze+=1,String(ze)}),c=L(n,1),f=c[0],t=o.useContext(ye),u={data:e,canPreview:m};return o.useEffect(function(){if(t)return t.register(f,u)},[]),o.useEffect(function(){t&&t.register(f,u)},[m,e]),f}function co(m){return new Promise(function(e){var n=document.createElement("img");n.onerror=function(){return e(!1)},n.onload=function(){return e(!0)},n.src=m})}function je(m){var e=m.src,n=m.isCustomPlaceholder,c=m.fallback,f=o.useState(n?"loading":"normal"),t=L(f,2),u=t[0],a=t[1],l=o.useRef(!1),i=u==="error";o.useEffect(function(){co(e).then(function(C){C||a("error")})},[e]),o.useEffect(function(){n&&!l.current?a("loading"):i&&a("normal")},[e]);var b=function(){a("normal")},s=function(d){l.current=!1,u==="loading"&&d!=null&&d.complete&&(d.naturalWidth||d.naturalHeight)&&(l.current=!0,b())},y=i&&c?{src:c}:{onLoad:b,src:e};return[s,y,u]}function We(m,e,n,c){var f=e+n,t=(n-c)/2;if(n>c){if(e>0)return J({},m,t);if(e<0&&f<c)return J({},m,-t)}else if(e<0||f>c)return J({},m,e<0?t:-t);return{}}function uo(m,e,n,c){var f=He(),t=f.width,u=f.height,a=null;return m<=t&&e<=u?a={x:0,y:0}:(m>t||e>u)&&(a=_(_({},We("x",n,m,t)),We("y",c,e,u))),a}var Ne={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function fo(m,e,n,c){var f=o.useRef(null),t=o.useRef([]),u=o.useState(Ne),a=L(u,2),l=a[0],i=a[1],b=function(d){i(Ne),c&&!to(Ne,l)&&c({transform:Ne,action:d})},s=function(d,T){f.current===null&&(t.current=[],f.current=ao(function(){i(function(h){var w=h;return t.current.forEach(function(p){w=_(_({},w),p)}),f.current=null,c==null||c({transform:w,action:T}),w})})),t.current.push(_(_({},l),d))},y=function(d,T,h,w){var p=m.current,te=p.width,W=p.height,k=p.offsetWidth,V=p.offsetHeight,H=p.offsetLeft,g=p.offsetTop,N=d,R=l.scale*d;R>n?(N=n/l.scale,R=n):R<e&&(N=e/l.scale,R=e);var A=h??innerWidth/2,O=w??innerHeight/2,Y=N-1,j=Y*te*.5,Q=Y*W*.5,z=Y*(A-l.x-H),K=Y*(O-l.y-g),E=l.x-(z-j),G=l.y-(K-Q);if(d<1&&R===1){var D=k*R,F=V*R,U=He(),ee=U.width,P=U.height;D<=ee&&F<=P&&(E=0,G=0)}s({x:E,y:G,scale:R},T)};return{transform:l,resetTransform:b,updateTransform:s,dispatchZoomChange:y}}var mo=function(e){var n=e.visible,c=e.maskTransitionName,f=e.getContainer,t=e.prefixCls,u=e.rootClassName,a=e.icons,l=e.countRender,i=e.showSwitch,b=e.showProgress,s=e.current,y=e.transform,C=e.count,d=e.scale,T=e.minScale,h=e.maxScale,w=e.closeIcon,p=e.onSwitchLeft,te=e.onSwitchRight,W=e.onClose,k=e.onZoomIn,V=e.onZoomOut,H=e.onRotateRight,g=e.onRotateLeft,N=e.onFlipX,R=e.onFlipY,A=e.toolbarRender,O=o.useContext(ye),Y=a.rotateLeft,j=a.rotateRight,Q=a.zoomIn,z=a.zoomOut,K=a.close,E=a.left,G=a.right,D=a.flipX,F=a.flipY,U="".concat(t,"-operations-operation");o.useEffect(function(){var S=function(Z){Z.keyCode===Ye.ESC&&W()};return n&&window.addEventListener("keydown",S),function(){window.removeEventListener("keydown",S)}},[n]);var ee=[{icon:F,onClick:R,type:"flipY"},{icon:D,onClick:N,type:"flipX"},{icon:Y,onClick:g,type:"rotateLeft"},{icon:j,onClick:H,type:"rotateRight"},{icon:z,onClick:V,type:"zoomOut",disabled:d===T},{icon:Q,onClick:k,type:"zoomIn",disabled:d===h}],P=ee.map(function(S){var I,Z=S.icon,q=S.onClick,v=S.type,ne=S.disabled;return o.createElement("div",{className:ue(U,(I={},J(I,"".concat(t,"-operations-operation-").concat(v),!0),J(I,"".concat(t,"-operations-operation-disabled"),!!ne),I)),onClick:q,key:v},Z)}),ae=o.createElement("div",{className:"".concat(t,"-operations")},P);return o.createElement(so,{visible:n,motionName:c},function(S){var I=S.className,Z=S.style;return o.createElement(io,{open:!0,getContainer:f??document.body},o.createElement("div",{className:ue("".concat(t,"-operations-wrapper"),I,u),style:Z},w===null?null:o.createElement("button",{className:"".concat(t,"-close"),onClick:W},w||K),i&&o.createElement(o.Fragment,null,o.createElement("div",{className:ue("".concat(t,"-switch-left"),J({},"".concat(t,"-switch-left-disabled"),s===0)),onClick:p},E),o.createElement("div",{className:ue("".concat(t,"-switch-right"),J({},"".concat(t,"-switch-right-disabled"),s===C-1)),onClick:te},G)),o.createElement("div",{className:"".concat(t,"-footer")},b&&o.createElement("div",{className:"".concat(t,"-progress")},l?l(s+1,C):"".concat(s+1," / ").concat(C)),A?A(ae,_({icons:{flipYIcon:P[0],flipXIcon:P[1],rotateLeftIcon:P[2],rotateRightIcon:P[3],zoomOutIcon:P[4],zoomInIcon:P[5]},actions:{onFlipY:R,onFlipX:N,onRotateLeft:g,onRotateRight:H,onZoomOut:V,onZoomIn:k},transform:y},O?{current:s,total:C}:{})):ae)))})},pe=1,vo=1,go=["fallback","src","imgRef"],Co=["prefixCls","src","alt","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],ho=function(e){var n=e.fallback,c=e.src,f=e.imgRef,t=Re(e,go),u=je({src:c,fallback:n}),a=L(u,2),l=a[0],i=a[1];return ve.createElement("img",de({ref:function(s){f.current=s,l(s)}},t,i))},Ke=function(e){var n=e.prefixCls,c=e.src,f=e.alt,t=e.fallback,u=e.movable,a=u===void 0?!0:u,l=e.onClose,i=e.visible,b=e.icons,s=b===void 0?{}:b,y=e.rootClassName,C=e.closeIcon,d=e.getContainer,T=e.current,h=T===void 0?0:T,w=e.count,p=w===void 0?1:w,te=e.countRender,W=e.scaleStep,k=W===void 0?.5:W,V=e.minScale,H=V===void 0?1:V,g=e.maxScale,N=g===void 0?50:g,R=e.transitionName,A=R===void 0?"zoom":R,O=e.maskTransitionName,Y=O===void 0?"fade":O,j=e.imageRender,Q=e.imgCommonProps,z=e.toolbarRender,K=e.onTransform,E=e.onChange,G=Re(e,Co),D=o.useRef(),F=o.useRef({deltaX:0,deltaY:0,transformX:0,transformY:0}),U=o.useState(!1),ee=L(U,2),P=ee[0],ae=ee[1],S=o.useContext(ye),I=S&&p>1,Z=S&&p>=1,q=fo(D,H,N,K),v=q.transform,ne=q.resetTransform,X=q.updateTransform,re=q.dispatchZoomChange,xe=o.useState(!0),fe=L(xe,2),me=fe[0],B=fe[1],$=v.rotate,M=v.scale,ie=v.x,se=v.y,Ee=ue(J({},"".concat(n,"-moving"),P));o.useEffect(function(){me||B(!0)},[me]);var Me=function(){ne("close")},ge=function(){re(pe+k,"zoomIn")},Le=function(){re(pe/(pe+k),"zoomOut")},Te=function(){X({rotate:$+90},"rotateRight")},Oe=function(){X({rotate:$-90},"rotateLeft")},le=function(){X({flipX:!v.flipX},"flipX")},ce=function(){X({flipY:!v.flipY},"flipY")},Pe=function(r){r==null||r.preventDefault(),r==null||r.stopPropagation(),h>0&&(B(!1),ne("prev"),E==null||E(h-1,h))},Ie=function(r){r==null||r.preventDefault(),r==null||r.stopPropagation(),h<p-1&&(B(!1),ne("next"),E==null||E(h+1,h))},ke=function(){if(i&&P){ae(!1);var r=F.current,Ce=r.transformX,he=r.transformY,oe=ie!==Ce&&se!==he;if(!oe)return;var we=D.current.offsetWidth*M,Se=D.current.offsetHeight*M,be=D.current.getBoundingClientRect(),Qe=be.left,eo=be.top,Ze=$%180!==0,Ae=uo(Ze?Se:we,Ze?we:Se,Qe,eo);Ae&&X(_({},Ae),"dragRebound")}},Ue=function(r){!a||r.button!==0||(r.preventDefault(),r.stopPropagation(),F.current={deltaX:r.pageX-v.x,deltaY:r.pageY-v.y,transformX:v.x,transformY:v.y},ae(!0))},De=function(r){i&&P&&X({x:r.pageX-F.current.deltaX,y:r.pageY-F.current.deltaY},"move")},qe=function(r){if(!(!i||r.deltaY==0)){var Ce=Math.abs(r.deltaY/100),he=Math.min(Ce,vo),oe=pe+he*k;r.deltaY>0&&(oe=pe/oe),re(oe,"wheel",r.clientX,r.clientY)}},Be=function(r){!i||!I||(r.keyCode===Ye.LEFT?Pe():r.keyCode===Ye.RIGHT&&Ie())},Je=function(r){i&&(M!==1?X({x:0,y:0,scale:1},"doubleClick"):re(pe+k,"doubleClick",r.clientX,r.clientY))};o.useEffect(function(){var x,r,Ce,he;if(a){Ce=_e(window,"mouseup",ke,!1),he=_e(window,"mousemove",De,!1);try{window.top!==window.self&&(x=_e(window.top,"mouseup",ke,!1),r=_e(window.top,"mousemove",De,!1))}catch{}}return function(){var oe,we,Se,be;(oe=Ce)===null||oe===void 0||oe.remove(),(we=he)===null||we===void 0||we.remove(),(Se=x)===null||Se===void 0||Se.remove(),(be=r)===null||be===void 0||be.remove()}},[i,P,ie,se,$,a]),o.useEffect(function(){var x=_e(window,"keydown",Be,!1);return function(){x.remove()}},[i,I,h]);var Fe=ve.createElement(ho,de({},Q,{width:e.width,height:e.height,imgRef:D,className:"".concat(n,"-img"),alt:f,style:{transform:"translate3d(".concat(v.x,"px, ").concat(v.y,"px, 0) scale3d(").concat(v.flipX?"-":"").concat(M,", ").concat(v.flipY?"-":"").concat(M,", 1) rotate(").concat($,"deg)"),transitionDuration:!me&&"0s"},fallback:t,src:c,onWheel:qe,onMouseDown:Ue,onDoubleClick:Je}));return ve.createElement(ve.Fragment,null,ve.createElement(ro,de({transitionName:A,maskTransitionName:Y,closable:!1,keyboard:!0,prefixCls:n,onClose:l,visible:i,wrapClassName:Ee,rootClassName:y,getContainer:d},G,{afterClose:Me}),ve.createElement("div",{className:"".concat(n,"-img-wrapper")},j?j(Fe,_({transform:v},S?{current:h}:{})):Fe)),ve.createElement(mo,{visible:i,transform:v,maskTransitionName:Y,closeIcon:C,getContainer:d,prefixCls:n,rootClassName:y,icons:s,countRender:te,showSwitch:I,showProgress:Z,current:h,count:p,scale:M,minScale:H,maxScale:N,toolbarRender:z,onSwitchLeft:Pe,onSwitchRight:Ie,onZoomIn:ge,onZoomOut:Le,onRotateRight:Te,onRotateLeft:Oe,onFlipX:le,onFlipY:ce,onClose:l}))};function wo(m){var e=o.useState({}),n=L(e,2),c=n[0],f=n[1],t=o.useCallback(function(a,l){return f(function(i){return _(_({},i),{},J({},a,l))}),function(){f(function(i){var b=_({},i);return delete b[a],b})}},[]),u=o.useMemo(function(){return m?m.map(function(a){if(typeof a=="string")return{data:{src:a}};var l={};return Object.keys(a).forEach(function(i){["src"].concat(oo($e)).includes(i)&&(l[i]=a[i])}),{data:l}}):Object.keys(c).reduce(function(a,l){var i=c[l],b=i.canPreview,s=i.data;return b&&a.push({data:s,id:l}),a},[])},[m,c]);return[u,t]}var So=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],bo=["src"],po=function(e){var n,c=e.previewPrefixCls,f=c===void 0?"rc-image-preview":c,t=e.children,u=e.icons,a=u===void 0?{}:u,l=e.items,i=e.preview,b=e.fallback,s=Ve(i)==="object"?i:{},y=s.visible,C=s.onVisibleChange,d=s.getContainer,T=s.current,h=s.movable,w=s.minScale,p=s.maxScale,te=s.countRender,W=s.closeIcon,k=s.onChange,V=s.onTransform,H=s.toolbarRender,g=s.imageRender,N=Re(s,So),R=wo(l),A=L(R,2),O=A[0],Y=A[1],j=Xe(0,{value:T}),Q=L(j,2),z=Q[0],K=Q[1],E=o.useState(!1),G=L(E,2),D=G[0],F=G[1],U=((n=O[z])===null||n===void 0?void 0:n.data)||{},ee=U.src,P=Re(U,bo),ae=Xe(!!y,{value:y,onChange:function($,M){C==null||C($,M,z)}}),S=L(ae,2),I=S[0],Z=S[1],q=o.useState(null),v=L(q,2),ne=v[0],X=v[1],re=o.useCallback(function(B,$,M){var ie=O.findIndex(function(se){return se.id===B});Z(!0),X({x:$,y:M}),K(ie<0?0:ie),F(!0)},[O]);o.useEffect(function(){I?D||K(0):F(!1)},[I]);var xe=function($,M){K($),k==null||k($,M)},fe=function(){Z(!1),X(null)},me=o.useMemo(function(){return{register:Y,onPreview:re}},[Y,re]);return o.createElement(ye.Provider,{value:me},t,o.createElement(Ke,de({"aria-hidden":!I,movable:h,visible:I,prefixCls:f,closeIcon:W,onClose:fe,mousePosition:ne,imgCommonProps:P,src:ee,fallback:b,icons:a,minScale:w,maxScale:p,getContainer:d,current:z,count:O.length,countRender:te,onTransform:V,toolbarRender:H,imageRender:g,onChange:xe},N)))},Ro=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],xo=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],Ge=function(e){var n=e.src,c=e.alt,f=e.onPreviewClose,t=e.prefixCls,u=t===void 0?"rc-image":t,a=e.previewPrefixCls,l=a===void 0?"".concat(u,"-preview"):a,i=e.placeholder,b=e.fallback,s=e.width,y=e.height,C=e.style,d=e.preview,T=d===void 0?!0:d,h=e.className,w=e.onClick,p=e.onError,te=e.wrapperClassName,W=e.wrapperStyle,k=e.rootClassName,V=Re(e,Ro),H=i&&i!==!0,g=Ve(T)==="object"?T:{},N=g.src,R=g.visible,A=R===void 0?void 0:R,O=g.onVisibleChange,Y=O===void 0?f:O,j=g.getContainer,Q=j===void 0?void 0:j,z=g.mask,K=g.maskClassName,E=g.movable,G=g.icons,D=g.scaleStep,F=g.minScale,U=g.maxScale,ee=g.imageRender,P=g.toolbarRender,ae=Re(g,xo),S=N??n,I=Xe(!!A,{value:A,onChange:Y}),Z=L(I,2),q=Z[0],v=Z[1],ne=je({src:n,isCustomPlaceholder:H,fallback:b}),X=L(ne,3),re=X[0],xe=X[1],fe=X[2],me=o.useState(null),B=L(me,2),$=B[0],M=B[1],ie=o.useContext(ye),se=!!T,Ee=function(){v(!1),M(null)},Me=ue(u,te,k,J({},"".concat(u,"-error"),fe==="error")),ge=o.useMemo(function(){var le={};return $e.forEach(function(ce){e[ce]!==void 0&&(le[ce]=e[ce])}),le},$e.map(function(le){return e[le]})),Le=o.useMemo(function(){return _(_({},ge),{},{src:S})},[S,ge]),Te=lo(se,Le),Oe=function(ce){var Pe=no(ce.target),Ie=Pe.left,ke=Pe.top;ie?ie.onPreview(Te,Ie,ke):(M({x:Ie,y:ke}),v(!0)),w==null||w(ce)};return o.createElement(o.Fragment,null,o.createElement("div",de({},V,{className:Me,onClick:se?Oe:w,style:_({width:s,height:y},W)}),o.createElement("img",de({},ge,{className:ue("".concat(u,"-img"),J({},"".concat(u,"-img-placeholder"),i===!0),h),style:_({height:y},C),ref:re},xe,{width:s,height:y,onError:p})),fe==="loading"&&o.createElement("div",{"aria-hidden":"true",className:"".concat(u,"-placeholder")},i),z&&se&&o.createElement("div",{className:ue("".concat(u,"-mask"),K),style:{display:(C==null?void 0:C.display)==="none"?"none":void 0}},z)),!ie&&se&&o.createElement(Ke,de({"aria-hidden":!q,visible:q,prefixCls:l,onClose:Ee,mousePosition:$,src:S,alt:c,fallback:b,getContainer:Q,icons:G,movable:E,scaleStep:D,minScale:F,maxScale:U,rootClassName:k,imageRender:ee,imgCommonProps:ge,toolbarRender:P},ae)))};Ge.PreviewGroup=po;Ge.displayName="Image";export{Ge as I};
