(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},27:function(e,t,n){},33:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),i=(n(27),n(48)),l=n(50),s=n(49),u=n(17),m=n.n(u),p=n(6),h=n(7),d=n(9),f=n(8),b=n(10),E=(n(33),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"title"},"Welcome to awesome packages landing"))}}]),t}(a.Component)),O=n(18),v=n(19),j=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t[0]&&"string"===typeof t[0]?t.join(" "):function(e){return Object.keys(e).filter(function(t){return!!e[t]}).reduce(function(e,t){return e?"".concat(e).concat(t?" ".concat(t):""):"".concat(t)},"")}(t[0])},w=(n(37),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:j("base-layout-wrapper",this.props.className)},c.a.createElement("div",{className:"content-wrapper"},this.props.children))}}]),t}(c.a.Component)),y=(n(39),function(e){var t=e.onClick,n=e.title,a=e.wide,r=e.position,o=void 0===r?"left":r,i=function(){return c.a.createElement("button",{className:"custom-button",onClick:t},n)};return a?c.a.createElement("div",{className:j("button-wrapper",o)},c.a.createElement(i,null)):c.a.createElement(i,null)}),k=n(5),N=(n(41),{h1:function(e){var t=e.title,n=Object(k.a)(e,["title"]);return c.a.createElement("h1",n,t)},h2:function(e){var t=e.title,n=Object(k.a)(e,["title"]);return c.a.createElement("h2",n,t)},h3:function(e){var t=e.title,n=Object(k.a)(e,["title"]);return c.a.createElement("h3",n,t)},h4:function(e){var t=e.title,n=Object(k.a)(e,["title"]);return c.a.createElement("h4",n,t)},h5:function(e){var t=e.title,n=Object(k.a)(e,["title"]);return c.a.createElement("h5",n,t)},h6:function(e){var t=e.title,n=Object(k.a)(e,["title"]);return c.a.createElement("h6",n,t)}}),g=function(e){var t=e.title,n=e.size,a=N[void 0===n?"h1":n];return c.a.createElement(a,{title:t,className:"custom-header-text"})},C=(n(43),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).openModal=function(){return n.setState({isModalOpen:!0})},n.closeModal=function(){return n.setState({isModalOpen:!1})},n.state={isModalOpen:!1},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement(w,{className:"example-hyper-modal-wrapper"},c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"title"},"react hyper modal")),c.a.createElement("div",{className:"content"},c.a.createElement(O.a,{isOpen:this.state.isModalOpen,requestClose:this.closeModal,classes:{contentClassName:"modal-content"}}),c.a.createElement(g,{title:"Simple modal"}),c.a.createElement(v.a,{id:"965ebd30f423f14ac342ba6be07fe54b"}),c.a.createElement(y,{onClick:this.openModal,title:"open simple modal",position:"center",wide:!0})))}}]),t}(c.a.Component)),M=m()({basename:"/packages"}),x=function(){return c.a.createElement(i.a,{history:M},c.a.createElement(l.a,null,c.a.createElement(s.a,{exact:!0,path:"/",component:E}),c.a.createElement(s.a,{path:"/hyper-modal",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.a242dcde.chunk.js.map