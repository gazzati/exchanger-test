(this["webpackJsonptest-task-exchanger"]=this["webpackJsonptest-task-exchanger"]||[]).push([[0],{24:function(e,t,a){},36:function(e,t,a){e.exports=a(49)},41:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),s=(a(41),a(6)),o=(a(24),a(19),a(32)),u=a(52),i=a(21),m=a.n(i),E=a(33),d=a(25),p=a(54),v=a(51),f=a(53);var b=function(e){var t=e.values,a=e.rates,n=e.preRates;return c.a.createElement("tr",null,c.a.createElement("td",null,t),c.a.createElement("td",null,a.toFixed(3)),c.a.createElement("td",null,function(e,t){var a=e/t*100;return a<100?"-".concat((100-a).toFixed(3),"%"):a>100?"+".concat((a-100).toFixed(3),"%"):"Without changes"}(a,n)))};var h=function(e){var t=e.currency,a=Object(n.useState)({rates:{},date:null}),r=Object(s.a)(a,2),l=r[0],o=r[1],i=Object(n.useState)({rates:{}}),h=Object(s.a)(i,2),g=h[0],j=h[1],O=Object(n.useState)({rates:{}}),w=Object(s.a)(O,2),y=w[0],k=w[1],S=Object(n.useState)(!1),x=Object(s.a)(S,2),D=x[0],N=x[1],R=function(){N(!D)},B=function(e){return e<10?"0".concat(e):e},C=function(e){var t=new Date(e);return t.setDate(t.getDate()-1),"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())},U=function(e){var t=new Date(e);return"".concat(B(t.getDate()),"-").concat(B(t.getMonth()+1),"-").concat(t.getFullYear())};return Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(m.a.mark((function e(a){var n,c,r,l=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"latest",e.prev=1,e.next=4,fetch("https://api.exchangeratesapi.io/".concat(n,"?base=").concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,a(Object(E.a)({},r,{date:U(r.date)})),console.log(r.date),e.abrupt("return",r.date);case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();e(o).then((function(t){return e(j,C(t)).then((function(t){return e(k,C(t))}))}))}),[t]),c.a.createElement(p.a,{defaultActiveKey:"rates",id:"uncontrolled-tab-example"},c.a.createElement(v.a,{eventKey:"rates",title:"Exchange rates"},c.a.createElement("div",{className:"WrapperContent"},c.a.createElement("div",{className:"Description"},c.a.createElement("span",null,"Base currency: ",c.a.createElement("b",null,t)),c.a.createElement("span",{className:"margin-left"},"Request date: ",c.a.createElement("b",null,"".concat(U(new Date)))),c.a.createElement("span",{className:"margin-left"},"Request time: ",c.a.createElement("b",null,"".concat(B((new Date).getHours()),":").concat(B((new Date).getMinutes())))),D?c.a.createElement(u.a,{className:"margin-left",variant:"primary",onClick:R},l.date," rates"):c.a.createElement(u.a,{variant:"primary",className:"margin-left",onClick:R},g.date," rates")),c.a.createElement(f.a,{className:"MainTable",striped:!0,bordered:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Currency"),c.a.createElement("th",null,"Rates on ",D?g.date:l.date),c.a.createElement("th",null,"In comparison with ",D?y.date:g.date))),c.a.createElement("tbody",null,l&&Object.keys(l.rates).map((function(e){return e!=t&&c.a.createElement(b,{values:e,rates:D?g.rates[e]:l.rates[e],preRates:D?y.rates[e]:g.rates[e]})})))))))};var g=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),m=i[0],E=i[1],d=Object(n.useState)(null),p=Object(s.a)(d,2),v=p[0],f=p[1],b=Object(n.useState)(null),g=Object(s.a)(b,2),j=g[0],O=g[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"SelectValue"},c.a.createElement(o.a,{className:"Selector",variant:"pills",onSelect:function(e){f(e),r(!0)}},c.a.createElement(o.a.Item,null,c.a.createElement(o.a.Link,{eventKey:"USD"},"USD")),c.a.createElement(o.a.Item,null,c.a.createElement(o.a.Link,{eventKey:"EUR"},"EUR")),c.a.createElement(o.a.Item,null,c.a.createElement(o.a.Link,{eventKey:"RUB"},"RUB"))),a&&c.a.createElement(u.a,{className:"GetButton",onClick:function(){E(!0),O(v)}},"Get rates")),c.a.createElement("div",{className:"WrapperContent"},m&&c.a.createElement(h,{currency:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.43ddaf99.chunk.js.map