"use strict";(self.webpackChunkrst_frame_app=self.webpackChunkrst_frame_app||[]).push([[765],{13999:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var n=r(35466),a=r(25838),l=r(4050),i=r(55595),o=r(69080),s=r(93379),u=r.n(s),c=r(7795),d=r.n(c),p=r(90569),m=r.n(p),f=r(3565),y=r.n(f),h=r(19216),v=r.n(h),g=r(44589),b=r.n(g),w=r(5842),E={};E.styleTagTransform=b(),E.setAttributes=y(),E.insert=m().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=v(),u()(w.Z,E);const S=w.Z&&w.Z.locals?w.Z.locals:void 0;function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const x=function(e){var t=e.services.authentication,r=e.routerHistory,s=A((0,n.useState)(""),2),u=s[0],c=s[1],d=A((0,n.useState)(""),2),p=d[0],m=d[1],f=A((0,n.useState)(""),2),y=f[0],h=f[1],v=A((0,n.useState)(!1),2),g=v[0],b=v[1],w=(0,n.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),b(!0),t.login({login:u,password:p}).then((function(){r.push("/")})).catch((function(e){h(e.message),b(!1)}))}),[t,u,p]);return n.createElement("div",{className:S.wrapper},n.createElement(i.Z,{variant:"h4",gutterBottom:!0,component:"div"},"Login"),n.createElement("form",{onSubmit:w},n.createElement("div",{className:S.fieldWrapper},n.createElement(a.Z,{disabled:g,name:"login",label:"Login",onChange:function(e){return c(e.target.value)}})),n.createElement("div",{className:S.fieldWrapper},n.createElement(a.Z,{disabled:g,name:"password",label:"Password",type:"password",onChange:function(e){return m(e.target.value)}})),!!y&&n.createElement("div",{className:S.alertWrapper},n.createElement(o.Z,{severity:"error"},y)),n.createElement("div",{className:S.buttonWrapper},n.createElement(l.Z,{disabled:g,variant:"contained",type:"submit"},"Login"))))}},5842:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(6738),a=r.n(n),l=r(77705),i=r.n(l)()(a());i.push([e.id,".eqayHbsBuSEU0r0yZHxw{width:100%;text-align:center}.D1ny_y1YLc_n3huFdNj6{padding:10px}.WWx64hqBQvaAjSHlAmG1{padding:10px}.dXO0mRTUmP73VEkt37dD{display:flex;align-items:center;justify-content:center;width:350px;max-width:100vw;margin-left:auto;margin-right:auto}\n",""]),i.locals={wrapper:"eqayHbsBuSEU0r0yZHxw",fieldWrapper:"D1ny_y1YLc_n3huFdNj6",buttonWrapper:"WWx64hqBQvaAjSHlAmG1",alertWrapper:"dXO0mRTUmP73VEkt37dD"};const o=i}}]);