_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/a9y":function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("TqRt");t.__esModule=!0,t.default=void 0;var u=s(n("q1tI")),d=s(n("8Kt/")),h={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var p=function(e){a(n,e);var t=l(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||h[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:b.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e,": ",t)),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:b.h1},e):null,u.default.createElement("div",{style:b.desc},u.default.createElement("h2",{style:b.h2},t,"."))))}}]),n}(u.default.Component);t.default=p,p.displayName="ErrorPage",p.getInitialProps=f,p.origGetInitialProps=f;var b={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},KTQB:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return U}));var r=n("nKUr"),o=n("20a2"),a=n("eomm"),i=n.n(a),c=n("YFra"),l=n("wd/R"),s=n.n(l),u=function(e){var t=e.title,n=(e.subtitle,e.authorName),o=(e.authorImage,e.date),a=e.coverImage;return Object(r.jsx)("section",{className:"hero",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("nav",{className:"","aria-label":"breadcrumb",children:Object(r.jsxs)("ol",{className:"breadcrumb justify-content-center no-border mb-0",children:[Object(r.jsx)("li",{className:"breadcrumb-item",children:Object(r.jsx)("a",{className:"",href:"/",children:"Home"})}),Object(r.jsx)("li",{className:"active breadcrumb-item","aria-current":"page",children:Object(r.jsx)("span",{className:"",children:t})})]})}),Object(r.jsxs)("div",{className:"hero-content pb-5 text-center",children:[Object(r.jsx)("h2",{className:"post-title",children:t}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"mx-auto col-xl-8"})})]}),Object(r.jsxs)("div",{className:"header-post",children:[Object(r.jsx)("div",{className:"post-info",children:Object(r.jsxs)("div",{className:"post-info-content",children:[Object(r.jsx)("div",{className:"cat-post",children:Object(r.jsx)("a",{href:"https://zonex.famithemes.com/category/shoping/",rel:"category tag",children:"category"})}),Object(r.jsx)("h2",{className:"post-title",children:t}),Object(r.jsxs)("div",{className:"post-meta-content",children:[Object(r.jsx)("a",{className:"post-author",href:"https://zonex.famithemes.com/author/znadmin/",children:n}),Object(r.jsx)("a",{className:"post-date",href:"https://zonex.famithemes.com/roselle-ebarle-hat/",children:s()(o).format("MMMM Do YYYY")}),Object(r.jsx)("div",{className:"post-comment",children:"0 Comments"})]})]})}),Object(r.jsx)("img",{src:a,style:{height:"auto",width:"100%"}})]})]})})},d=n("IujW"),h=n.n(d),f=function(e){var t=e.content;return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(h.a,{source:t})})},p=n("YFqc"),b=n.n(p);function v(e){var t=e.title,n=(e.subtitle,e.authorName),o=e.authorImage,a=e.slug,i=e.date,c=e.coverImage;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:c,alt:t,className:"card-img-top"}),Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)("h5",{children:Object(r.jsx)(b.a,{className:"d-block",href:"/blog/".concat(a),children:t})})}),Object(r.jsxs)("div",{className:"card-header",children:[Object(r.jsx)(b.a,{className:"d-block",href:"/blog/".concat(a),children:Object(r.jsx)("span",{children:Object(r.jsx)("img",{className:"rounded-circle",src:o,alt:n})})}),Object(r.jsx)("span",{children:n}),Object(r.jsx)("span",{children:s()(i).format("MMMM Do YYYY")})]})]})}var m=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),j=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return m(t,e),t}(Error);function w(e,t){if(!e)throw new j(t)}function g(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var y=n("q1tI"),O=n.n(y),x=n("TSYQ"),N=n.n(x),k=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S=function(){return(S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},_=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},C=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},P=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},I=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},R=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function z(e,t,n){var r=t.height,o=t.width,a=E(t,["height","width"]),i=S({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3);return c}var M=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,a=void 0===o?400:o,i=n.windowPosition,c=void 0===i?"windowCenter":i,l=n.windowWidth,s=void 0===l?550:l;z(e,S({height:a,width:s},"windowCenter"===c?I(s,a):R(s,a)),r)},t.handleClick=function(e){return _(t,void 0,void 0,(function(){var t,n,r,o,a,i,c,l,s,u;return C(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(i,l),r?[2]:(e.preventDefault(),n?(u=n(),P(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return k(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,o=e.disabledStyle,a=e.forwardedRef,i=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),l=e.style,s=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,E(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=N()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),d=S(S(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),r&&o);return O.a.createElement("button",S({},s,{"aria-label":s["aria-label"]||i,className:u,onClick:this.handleClick,ref:a,style:d}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(y.Component),A=function(){return(A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var H=function(e,t,n,r){function o(o,a){var i=n(o),c=A({},o);return Object.keys(i).forEach((function(e){delete c[e]})),O.a.createElement(M,A({},r,c,{forwardedRef:a,networkName:e,networkLink:t,opts:n(o)}))}return o.displayName="ShareButton-"+e,Object(y.forwardRef)(o)};var W=H("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return w(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+g({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),D=function(){return(D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function Y(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,o=t.iconFillColor,a=t.round,i=t.size,c=T(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return O.a.createElement("svg",D({viewBox:"0 0 64 64",width:i,height:i},c),a?O.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):O.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),O.a.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var B=Y({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var L=H("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return w(e,"twitter.url"),w(Array.isArray(a),"twitter.hashtags is not an array"),w(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+g({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),F=Y({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var q=H("whatsapp",(function(e,t){var n=t.title,r=t.separator;return w(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+g({text:n?n+r+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),K=Y({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});var V=H("line",(function(e,t){var n=t.title;return w(e,"line.url"),"https://social-plugins.line.me/lineit/share"+g({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:500,windowHeight:500}),G=Y({color:"#00b800",networkName:"line",path:"M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"}),Q=function(e){var t=e.url;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W,{url:t,style:{outline:"none"},children:Object(r.jsx)(B,{size:"32px",round:!0})}),Object(r.jsx)(L,{url:t,style:{marginLeft:"15px",outline:"none"},children:Object(r.jsx)(F,{size:"32px",round:!0})}),Object(r.jsx)(q,{url:t,style:{marginLeft:"15px",outline:"none"},children:Object(r.jsx)(K,{size:"32px",round:!0})}),Object(r.jsx)(V,{url:t,style:{marginLeft:"15px",outline:"none"},children:Object(r.jsx)(G,{size:"32px",round:!0})})]})},U=!0;t.default=function(e){var t=e.post,n=e.morePosts;return Object(o.useRouter)().isFallback||t?Object(r.jsxs)(c.a,{title:null===t||void 0===t?void 0:t.fields.title,ogImage:null===t||void 0===t?void 0:t.fields.heroImage.fields.file.url,url:"https://blog-with-nextjs-and-contentful.vercel.app/blog/".concat(null===t||void 0===t?void 0:t.fields.slug),children:[Object(r.jsx)(u,{title:null===t||void 0===t?void 0:t.fields.title,slug:null===t||void 0===t?void 0:t.fields.slug,date:null===t||void 0===t?void 0:t.fields.date,coverImage:null===t||void 0===t?void 0:t.fields.heroImage.fields.file.url}),Object(r.jsx)(f,{content:null===t||void 0===t?void 0:t.fields.body}),Object(r.jsxs)("div",{className:"container-lg mt-4",children:[Object(r.jsxs)("div",{className:"social",children:[Object(r.jsx)("h3",{className:"mt-5 mb-5",children:"Share"}),Object(r.jsx)(Q,{url:"https://blog-with-nextjs-and-contentful.vercel.app/blog/".concat(null===t||void 0===t?void 0:t.fields.slug)})]}),Object(r.jsxs)("div",{className:"recent-entries",children:[Object(r.jsx)("h3",{className:"mt-5 mb-5",children:"Recent Entries"}),Object(r.jsx)("div",{className:"row",children:null===n||void 0===n?void 0:n.map((function(e){var t=e.fields;return Object(r.jsx)("div",{className:"col-4",children:Object(r.jsx)(v,{title:t.title,slug:t.slug,date:t.date,coverImage:t.heroImage.fields.file.url})},t.slug)}))})]})]})]}):Object(r.jsx)(i.a,{statusCode:404})}},MTnK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n("KTQB")}])},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},eomm:function(e,t,n){e.exports=n("/a9y")}},[["MTnK",0,2,4,1,3,5]]]);