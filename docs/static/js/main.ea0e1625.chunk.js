(this.webpackJsonppopupblock=this.webpackJsonppopupblock||[]).push([[0],{11:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),o=t(6),s=t.n(o),i=(t(11),t(2)),r=t.n(i),l=t(4),u=t(3),d=(t(13),t(0)),j="\u51e6\u7406\u958b\u59cb",f="\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u307e\u3057\u305f\u3002",b="\u51e6\u7406\u7d42\u4e86",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5500;return new Promise((function(n){setTimeout((function(){n()}),e)}))};var m=function(){var e=a.a.useState(""),n=Object(u.a)(e,2),t=n[0],c=n[1],o=a.a.useState(""),s=Object(u.a)(o,2),i=s[0],m=s[1],h=a.a.useState(""),p=Object(u.a)(h,2),w=p[0],O=p[1],x=a.a.useState(""),N=Object(u.a)(x,2),g=N[0],k=N[1],y=a.a.useState("show"),C=Object(u.a)(y,2),E=C[0],T=C[1],L=a.a.useState(!1),S=Object(u.a)(L,2),D=S[0],M=S[1],V=a.a.useRef(null);a.a.useEffect((function(){}),[V]),a.a.useEffect((function(){window.navigator.onLine?O("\u30aa\u30f3\u30e9\u30a4\u30f3"):O("\u30aa\u30d5\u30e9\u30a4\u30f3");var e=function(e){O("\u30aa\u30f3\u30e9\u30a4\u30f3")},n=function(e){O("\u30aa\u30d5\u30e9\u30a4\u30f3")};return window.addEventListener("offline",n),window.addEventListener("online",e),function(){window.removeEventListener("offline",n),window.removeEventListener("online",e)}}),[]),a.a.useEffect((function(){k("\u30aa\u30f3\u30e9\u30a4\u30f3"===w?"online":"offline")}),[w]),a.a.useEffect((function(){M(t===j)}),[t]);var B=a.a.useMemo((function(){return"button ".concat(D?"disabled":"")}),[D]),F=function(){var e=Object(l.a)(r.a.mark((function e(){var n,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(j),null===(n=window.open(i))||void 0===n||n.close(),n?(null===(t=window.open(i))||void 0===t||t.close(),c(t?b:"".concat(f,"(2)"))):c("".concat(f,"(1)"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(j),null===(n=window.open(i))||void 0===n||n.close(),n?setTimeout((function(){var e=window.open(i);null===e||void 0===e||e.close(),c(e?b:"".concat(f,"(2)"))}),1e3):c("".concat(f,"(1)"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e){e.ctrlKey||e.metaKey||1!==e.key.length||e.key.match(/^[0-9]$/)||e.preventDefault()},P=function(e){1!==e.data.length||e.data.match(/^[0-9]$/)||e.preventDefault()};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col border",children:[Object(d.jsx)("p",{className:"label",children:"\u30aa\u30f3\u30e9\u30a4\u30f3\u30fb\u30aa\u30d5\u30e9\u30a4\u30f3\u5224\u5b9a"}),Object(d.jsx)("div",{className:g,children:w}),Object(d.jsx)("a",{className:"label",href:"http://www.yahoo.co.jp",children:"Yahoo!"})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col border",children:[Object(d.jsx)("p",{className:"label",children:"\u534a\u89d2\u6570\u5b57\u5165\u529b \u5bfe\u7b56\u3042\u308a number"}),Object(d.jsx)("input",{ref:V,type:"number",inputMode:"numeric",className:"number",defaultValue:"0",pattern:"[0-9]",onChange:function(e){console.log(e.target.value)},onKeyDown:K,onBeforeInput:P})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col border",children:[Object(d.jsx)("p",{className:"label",children:"\u534a\u89d2\u6570\u5b57\u5165\u529b \u5bfe\u7b56\u3042\u308a tel"}),Object(d.jsx)("input",{type:"tel",inputMode:"numeric",className:"number",defaultValue:"0",pattern:"[0-9]",onChange:function(e){console.log(e.target.value)},onKeyDown:K,onBeforeInput:P})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col border",children:[Object(d.jsx)("p",{className:"label",children:"\u534a\u89d2\u6570\u5b57\u5165\u529b \u5bfe\u7b56\u306a\u3057 number"}),Object(d.jsx)("input",{type:"number",inputMode:"numeric",pattern:"[0-9]",className:"number",defaultValue:"0",onChange:function(e){console.log(e.target.value)}})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("input",{className:"input",type:"text",onChange:function(e){return m(e.target.value)},value:i,placeholder:"\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u30da\u30fc\u30b8\u306eURL\u3092\u5165\u529b"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:B,onClick:function(){window.open(i),T("show")},children:"\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3092\u958b\u304f"})}),Object(d.jsxs)("div",{className:E,children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:B,onClick:function(){c(j);var e=window.open(i);e?(e.close(),c(b)):c("".concat(f,"(1)"))},children:"\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3092\u958b\u3044\u3066\u9589\u3058\u308b"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:B,onClick:function(){c(j),setTimeout((function(){var e=window.open(i);e?(e.close(),c(b)):c("".concat(f,"(1)"))}),1500)},children:"1.5\u79d2\u5f85\u3061\u958b\u3044\u3066\u9589\u3058\u308b"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:B,onClick:function(){c(j),setTimeout((function(){var e=window.open(i);e?(e.close(),c(b)):c("".concat(f,"(1)"))}),5500)},children:"5.5\u79d2\u5f85\u3061\u958b\u3044\u3066\u9589\u3058\u308b"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:B,onClick:F,children:"2\u56de\u958b\u3044\u3066\u9589\u3058\u308b"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:B,onClick:function(){c(j),setTimeout((function(){var e=window.open(i);null===e||void 0===e||e.close(),e?setTimeout((function(){var e=window.open(i);null===e||void 0===e||e.close(),c(e?b:"".concat(f,"(2)"))}),5500):c("".concat(f,"(1)"))}),5500)},children:"2\u56de\u958b\u3044\u3066\u9589\u3058\u308b(5\u79d2\u5f85\u3061)"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:B,onClick:I,children:"\u958b\u3044\u3066\u9589\u3058\u308b(2\u56de\u76ee\u3060\u30511\u79d2\u5f85\u3061)"})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:B,onClick:function(){c(j),T("hidden"),setTimeout((function(){c("\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3092\u958b\u3044\u3066\u304f\u3060\u3055\u3044\u3002")}),5500)},children:"5.5\u79d2\u5f85\u3061\u554f\u3044\u5408\u308f\u305b\u3067\u958b\u304f"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:B,onClick:function(){console.log("click"),function(){var e=Object(l.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="hello",e.next=3,v();case 3:return e.abrupt("return",(function(){return n}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then(function(){var e=Object(l.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:console.log(n());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},children:"\u30a6\u30a4\u30f3\u30c9\u30a6\u3092\u958b\u304f"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"message",children:t})})]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),o(e),s(e)}))};window.onbeforeunload=function(e){return e.preventDefault(),e.returnValue="\u30da\u30fc\u30b8\u3092\u96e2\u308c\u3088\u3046\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f",e.returnValue},s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.ea0e1625.chunk.js.map