(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),s=n.n(c),a=n(5),i=n(1),b=(n(10),n(4)),l=n.n(b),o=n(0),r=function(t){var e=t.tabs,n=t.selectedTab,c=t.onTabSelected;return Object(o.jsxs)("div",{className:"tabs",children:[e.map((function(t){return Object(o.jsx)("button",{type:"button",className:l()("tabs__item",{"tabs__item--selected":n===t}),onClick:function(){return c(t)},children:Object(o.jsx)("h2",{className:"tabs__title",children:t.title})},t.id)})),Object(o.jsx)("div",{className:"tabs__content",children:n.content})]})},d=(n(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),j=function(){var t=Object(i.useState)({id:"",title:"",content:""}),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("h1",{children:["Selected tab is:",n.title]}),d.length>0&&Object(o.jsx)(r,{tabs:d,selectedTab:n,onTabSelected:function(t){c(t)}})]})};s.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e921e724.chunk.js.map