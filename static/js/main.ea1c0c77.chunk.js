(this["webpackJsonpjson2dart-model"]=this["webpackJsonpjson2dart-model"]||[]).push([[0],{12:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var i=e(8),r=e(3),o=e(45),a=e.n(o),c=e(2),d=function(t){return Object(i.a)(Object(i.a)({},c.a.gridBreakpoints),a()(t.theme[c.b],"gridBreakpoints",{}))},u=Object.keys(c.a.gridBreakpoints).reduce((function(t,n){return t[n]=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];return Object(r.b)(["@media (min-width:","px){",";}"],(function(t){return d(t)[n]}),r.b.apply(void 0,[t].concat(i)))},t}),{});var s=function(t){var n=/(\d+)+(px)/gi;return t.map((function(t){return"string"===typeof t?t.replace(n,(function(t,n,e){var i=Number(n);return 0===i?"0":isNaN(i)?t:function(t){return"".concat(t/(arguments.length>1&&void 0!==arguments[1]?arguments[1]:320)*100,"vw")}(i)})):t}))};u.px2vw=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];return Object(r.b)(["@media (max-width:","px){",";}"],(function(t){return d(t).sm}),s(r.b.apply(void 0,[t].concat(e))))};var l=u},127:function(t,n,e){"use strict";e.r(n);var i=e(0),r=e.n(i),o=e(44),a=e.n(o),c=(e(67),e(8)),d=e(7),u=e(3),s=e(13),l={gridGutterWidth:5,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1410},gridGutterWidthMedia:{sm:5,md:5,lg:5,xl:10,xxl:15}},f=e(49);var h=function(){return console.log("info: ",JSON.stringify({nodeEnv:"production",siteEnv:window.siteEnv,siteCode:window.siteCode,version:f.a})),{gridConfig:l}},g=e(29);e(9),e(11),e(6);function p(t){return t.replace(/\b(\w)/g,(function(t){return t.toUpperCase()}))}var b=e(4),m=h(),j=function(t,n){if(console.log("typeof field",typeof n,t),null!==n)switch(typeof n){case"boolean":return{type:"bool",default:!1};case"number":return-1!=n.toString().indexOf(".")?{type:"double",default:0}:{type:"int",default:0};case"string":return{type:"String",default:void 0};case"object":return Array.isArray(n)?n.length>0?["string","number","boolean"].includes(typeof n[0])?{type:"List<String>",default:void 0}:{type:"List<".concat(p(t),">"),default:void 0,newObjName:p(t),newObj:n[0]}:{type:"List<dynamic>",default:void 0}:{type:p(t),default:void 0,newObjName:p(t),newObj:n}}return{type:"dynamic",default:void 0}},w=[],x=function t(n,e){var i=[];if("object"===typeof e){for(var r in e){var o=j(r,e[r]);i.push("  ".concat(o.type," ").concat(r,";")),void 0!==o.newObj&&void 0!==o.newObjName&&t(o.newObjName,o.newObj)}null!=n&&w.push({name:n,field:i})}return w},v=function(){var t=Object(g.b)(),n=t.control,e=t.watch,r=t.setValue,o=e(["modelName","jsonString","isUseCopyWith"]),a=Object(d.a)(o,3),u=(a[0],a[1]);a[2];Object(i.useEffect)((function(){r("jsonString",'\n{\n    "user": {\n        "name": "jack",\n        "sex": "m",\n        "profile": {\n             "phone": "0919123123",\n             "mobile": "0918456456",\n             "detail": {\n                 "address": "taiwan chipn"\n             }\n        }\n    }\n}\n'.trim())}),[]);var l=Object(i.useMemo)((function(){if(function(t){try{var n=JSON.parse(t);if(n&&"object"===typeof n&&null!==n)return!0}catch(e){return!1}return!1}(u))return JSON.parse(u)}),[u]),f=function(){w=[];var t=x(null,l).reverse();return"\n".concat(t.map((function(t){return"\ninterface ".concat(t.name," {\n").concat(t.field.join("\n")," \n}\n")})).join("\n").trim(),"\n\n    ")}();return Object(b.jsxs)(s.GridThemeProvider,{gridTheme:m.gridConfig,children:[Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("h1",{children:"Json To Typescript Class"})}),Object(b.jsx)(s.Container,{className:"pt-3",children:Object(b.jsxs)(s.Row,{children:[Object(b.jsx)(s.Col,{col:!0,children:Object(b.jsx)(s.Row,{children:Object(b.jsx)(s.Col,{col:24,children:Object(b.jsx)(g.a,{control:n,name:"jsonString",defaultValue:"",render:function(t){var n=t.field;return Object(b.jsx)("textarea",Object(c.a)({style:{width:"100%",height:"100vh"}},n))}})})})}),Object(b.jsx)(s.Col,{col:!0,children:Object(b.jsx)("textarea",{style:{width:"100%",height:"100vh"},value:f})})]})})]})};u.c.textarea.withConfig({componentId:"sc-1m8ydhe-0"})(["position:fixed;bottom:0;z-index:99;display:flex;font-size:10px;border:none;background:#1f1f1f;color:#ccb444;border-radius:0;width:100%;height:60px;"]),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,128)).then((function(n){var e=n.getCLS,i=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;e(t),i(t),r(t),o(t),a(t)}))},y=e(15),W=e(16),k=e(50),C=e.n(k);var G=function(){function t(n,e){Object(y.a)(this,t),this.openTargetId=void 0,this.isMultipleOpen=void 0,this.targetWindow=void 0,this.prefixName=void 0,this.prefixName=n,this.openTargetId=this.createOpenTargetId(),this.isMultipleOpen=e,this.targetWindow=null}return Object(W.a)(t,[{key:"createOpenTargetId",value:function(){return C()("".concat(this.prefixName,"_"))}},{key:"ready",value:function(){var t="".concat("","/static/plugins/loading-window/index.html"),n="".concat("","/static/plugins/loading-window/close.html");(function(){var t=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(t)})()&&this.targetWindow?(this.targetWindow.location.href=n,this.openTargetId=this.createOpenTargetId()):this.isMultipleOpen&&(this.openTargetId=this.createOpenTargetId()),this.targetWindow=window.open(t,this.openTargetId)}},{key:"open",value:function(t){!this.isMultipleOpen&&this.targetWindow?this.targetWindow.location.href=t:window.open(t,this.openTargetId)}},{key:"close",value:function(){try{this.targetWindow.close()}catch(t){console.log("open-window: window close error")}}}]),t}();window.openWindow=new G("startLobbyWindow",!1),Intl.PluralRules||(e(113),e(117),e(118)),Intl.RelativeTimeFormat||(e(119),e(123),e(124)),a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)})),O()},13:function(t,n,e){"use strict";e(12);var i=e(41);e.d(n,"Container",(function(){return i.a}));var r=e(42);e.d(n,"Row",(function(){return r.a}));var o=e(40);e.d(n,"Col",(function(){return o.a}));var a=e(43);e.d(n,"GridThemeProvider",(function(){return a.a}));e(35),e(36),e(37),e(38),e(39)},2:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return r}));var i="styledBsGrid",r={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1920},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1860},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},35:function(t,n){},36:function(t,n){},37:function(t,n){},38:function(t,n){},39:function(t,n){},40:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var i,r,o,a=e(8),c=e(22),d=e(10),u=e(3),s=(e(0),{col:function(t,n){var e=0;switch(t){case!0:return"\n          -ms-flex-preferred-size: 0;\n          -ms-flex-positive: 1;\n          flex-basis: 0;\n          flex-grow: 1;\n          max-width: 100%;\n        ";case"auto":return"\n          -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n          width: auto;\n          max-width: none;\n        ";default:return"\n            -ms-flex: 0 0 ".concat(e=100/n*t,"%;\n            flex: 0 0 ").concat(e,"%;\n            max-width: ").concat(e,"%;\n        ")}}}),l=e(12),f=e(2),h=e(4),g=function(t){return Object.keys(t.theme[f.b].gridBreakpoints).filter((function(t){return"xs"!==t})).map((function(n){return l.a[n](i||(i=Object(d.a)(["\n             padding-right: ","px;\n             padding-left: ","px;\n\n            ","\n    "])),t.theme[f.b].gridGutterWidthMedia[n],t.theme[f.b].gridGutterWidthMedia[n],!function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===t||null===t||!1===t||n&&0===t||!(t instanceof Date)&&"object"===typeof t&&0===Object.keys(t).length||"string"===typeof t&&0===t.trim().length}(t[n])&&Object(u.b)(r||(r=Object(d.a)(["\n                ",";\n            "])),s.col(t[n],t.theme[f.b].gridColumns)))}))},p=u.c.div.attrs((function(t){return{"data-grid":"col","data-debug":void 0}})).withConfig({componentId:"sc-1kyzck0-0"})(["position:relative;width:100%;min-height:1px;",""],(function(t){return Object(u.b)(o||(o=Object(d.a)(["\n     padding-right: ","px;\n     padding-left: ","px;\n\n     >[data-grid=row]{\n        flex: 0 1 100%;\n    }\n\n     min-width: 0; // \u89e3\u6c7a\u4e0b\u5c64\u6709\u4f7f\u7528 white-space: nowrap; \u7522\u751f\u885d\u7a81\u8dd1\u7248\n     ",";\n\n     ",";\n "])),t.theme[f.b].gridGutterWidth,t.theme[f.b].gridGutterWidth,t.col&&s.col(t.col,t.theme[f.b].gridColumns),g(t))})),b=function(t){var n=t.forwardRef,e=t.forwardAs,i=Object(c.a)(t,["forwardRef","forwardAs"]);return Object(h.jsx)(p,Object(a.a)({ref:n,as:e},i))}},41:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var i,r,o,a=e(8),c=e(10),d=e(3),u=(e(0),e(2)),s=e(12),l=e(4),f=d.c.div.attrs((function(t){return{"data-grid":"container","data-debug":void 0}})).withConfig({componentId:"sc-1tbz9ht-0"})(["width:100%;margin-right:auto;margin-left:auto;",""],(function(t){return Object(d.b)(r||(r=Object(c.a)(["\n     padding-right: ","px;\n     padding-left: ","px;\n\n     ","\n "])),t.theme[u.b].gridGutterWidth,t.theme[u.b].gridGutterWidth,!t.fluid&&Object(d.b)(o||(o=Object(c.a)(["\n        ",";\n    "])),function(t){return Object.keys(t.theme[u.b].gridBreakpoints).map((function(n){return t.theme[u.b].gridBreakpoints[n]>0&&s.a[n](i||(i=Object(c.a)(["\n                max-width: ","px;\n            "])),t.theme[u.b].containerMaxWidths[n])})).filter((function(t){return!1!==t}))}(t)))})),h=function(t){return Object(l.jsx)(f,Object(a.a)({},t))}},42:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var i,r,o,a,c=e(8),d=e(22),u=e(10),s=e(3),l=(e(0),e(2)),f=e(12),h=e(4),g=function(t){return t.noGutters?0:"-".concat(t.theme[l.b].gridGutterWidth,"px")},p=s.c.div.attrs((function(t){return{"data-grid":"row","data-debug":void 0}})).withConfig({componentId:"sc-14b14uq-0"})(["display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;",""],(function(t){return Object(s.b)(r||(r=Object(u.a)(["\n     margin-right: ",";\n     margin-left: ",";\n\n     // ps: \u8a2d\u5b9a\u6703 width 100% \u6703\u7522\u751f margin \u62b5\u92b7\u5931\u6557\n\n\n     ","\n\n     ","\n "])),g(t),g(t),!t.noGutters&&Object(s.b)(o||(o=Object(u.a)(["\n        ","\n     "])),function(t){return Object.keys(t.theme[l.b].gridBreakpoints).map((function(n){return t.theme[l.b].gridBreakpoints[n]>0&&f.a[n](i||(i=Object(u.a)(["\n                margin-left: -","px;\n                margin-right: -","px;\n            "])),t.theme[l.b].gridGutterWidthMedia[n],t.theme[l.b].gridGutterWidthMedia[n])})).filter((function(t){return!1!==t}))}(t)),t.noGutters&&Object(s.b)(a||(a=Object(u.a)(["\n        >[data-grid=col]{\n            padding-right: 0;\n            padding-left: 0;\n        }\n     "]))))})),b=function(t){var n=t.forwardAs,e=Object(d.a)(t,["forwardAs"]);return Object(h.jsx)(p,Object(c.a)({as:n},e))}},43:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e(3),r=(e(0),e(2)),o=e(4),a=function(t){var n=t.gridTheme,e=void 0===n?{}:n,a=t.children,c={styledBsGrid:Object.assign({},r.a,e)};return Object(o.jsx)(i.a,{theme:c,children:a})}},49:function(t){t.exports=JSON.parse('{"a":"1.1.14-beta.0"}')},67:function(t,n,e){}},[[127,1,2]]]);
//# sourceMappingURL=main.ea1c0c77.chunk.js.map