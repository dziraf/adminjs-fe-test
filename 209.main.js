"use strict";(self.webpackChunkrst_frame_app=self.webpackChunkrst_frame_app||[]).push([[209],{58588:(t,e,n)=>{n.r(e),n.d(e,{default:()=>B});var r=n(35466),o=n(4050),i=n(55595),c=n(93379),u=n.n(c),a=n(7795),l=n.n(a),f=n(90569),s=n.n(f),p=n(3565),b=n.n(p),d=n(19216),y=n.n(d),m=n(44589),h=n.n(m),v=n(81869),g={};g.styleTagTransform=h(),g.setAttributes=b(),g.insert=s().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=y(),u()(v.Z,g);const k=v.Z&&v.Z.locals?v.Z.locals:void 0;function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return x(t)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(l,t);var e,n,c,u,a=(c=l,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(c);if(u){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function l(){var t;w(this,l);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return _(x(t=a.call.apply(a,[this].concat(n))),"logout",(function(){t.props.services.authentication.logout()})),t}return e=l,(n=[{key:"getMenuItems",value:function(){return this.props.services.config.getRoutesList().filter((function(t){return!!t.menuLabel}))}},{key:"goTo",value:function(t){this.props.routerHistory.push(t)}},{key:"render",value:function(){var t=this;return r.createElement("div",{className:k.wrapper},this.getMenuItems().map((function(e){var n=e.menuLabel,o=e.path;return r.createElement("div",{key:o,onClick:function(){return t.goTo(o)},className:k.item},r.createElement(i.Z,{variant:"subtitle1",component:"div",align:"left"},n))})),r.createElement("div",{className:k.logoutButtonWrapper},r.createElement(o.Z,{onClick:this.logout,variant:"contained",fullWidth:!0,disableElevation:!0},"Wyloguj")))}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(r.Component)},81869:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(6738),o=n.n(r),i=n(77705),c=n.n(i)()(o());c.push([t.id,".R5BamEBKOBHLdEdTj49I{display:block;width:100%;margin-top:20px}.WkIDNQz46EPYotkbP1KN{text-decoration:none;color:#3c704e;display:flex;padding:8px 15px;width:calc(100% - 30px);border-top:1px solid #dddddd;align-items:center;cursor:pointer}.WkIDNQz46EPYotkbP1KN>div{align-items:center;display:flex}.WkIDNQz46EPYotkbP1KN svg{margin-right:15px}.WkIDNQz46EPYotkbP1KN:hover{background:#ebebeb;color:#000}.i5dfFt3XzH3Mj4S3ObQ5{margin:50px 20px}\n",""]),c.locals={wrapper:"R5BamEBKOBHLdEdTj49I",item:"WkIDNQz46EPYotkbP1KN",logoutButtonWrapper:"i5dfFt3XzH3Mj4S3ObQ5"};const u=c}}]);