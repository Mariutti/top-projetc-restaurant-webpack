(()=>{"use strict";var e={960:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,".aboutH1 {\n  color : red\n}",""]);const c=a},896:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"",""]);const c=a},208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n}\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.5fr 7fr;\n}\n\nheader {\n  padding: 1em;\n  padding-inline: 4em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\nheader > h2 {\n\n}\n\nheader > nav {\n  height: 100%;\n  /* border: 1px solid green; */\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 3em;\n}\n\nheader > nav > button {\n  padding: .5em 1em;\n}\n\n.welcome-food-img {\n  transform: scaleX(-1);\n}\n\n.content {\n  height: 100%;\n}\n\nmain {\n  height: 100%;\n  background-image: url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTF8fHxlbnwwfHx8fHw%3D');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top right;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3em;\n  padding-inline: 2em;\n  padding-top: 3em;\n}\n\nsection.welcome  {\n  background-color: rgba(255, 255, 255, 0.356);\n  padding: 3em;\n  max-width: 80ch;\n  backdrop-filter: blur(5px);\n  border-radius: 15px;\n}\n\nh1 {\n  line-height: 1.3;\n  font-size: 2rem;\n}\nh2 {\n  line-height: 1.3;\n  font-size: 1.8rem;\n}\n\np {\n  line-height: 1.5;\n  margin-top: 0.8em;\n}\n\nmain > section {\n  margin-bottom: auto;\n}\n\nfooter {\n  background-color: #585858;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 2.5em;\n}\n\nfooter > p {\n  margin: 0;\n  font-size: 1rem;\n  display: flex;\n  gap: .5em;\n  justify-content: center;\n  align-items: center;\n}\n\n",""]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),d=t(540),l=t.n(d),u=t(113),p=t.n(u),m=t(208),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.A,h),m.A&&m.A.locals&&m.A.locals;var f=t(896),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(f.A,g),f.A&&f.A.locals&&f.A.locals;const v=e=>{const n=document.createElement("main");e.appendChild(n);const t=document.createElement("section");n.appendChild(t),t.classList.add("welcome");const r=document.createElement("h2");r.innerText="The Odin Project Restaurant",n.appendChild(r);const o=document.createElement("h1");o.innerText="Best restaurant of the Galaxy!",t.appendChild(o);const i=document.createElement("p");i.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum doloremque officia adipisci architecto omnis. Culpa repudiandae quas ipsum cumque. Dolor corrupti modi facilis similique architecto harum. Voluptate, totam corrupti.",t.appendChild(i)};var b=t(960),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),n()(b.A,y),b.A&&b.A.locals&&b.A.locals;console.log("Hello world");const x=document.querySelector(".content");v(x);const T=document.querySelector("header"),A=document.createElement("h2");T.prepend(A),A.innerHTML="TOP Restaurant",document.querySelectorAll("header > nav > button").forEach((e=>{e.addEventListener("click",(()=>(x.innerHTML="","home"===e.id?v(x):"menu"===e.id?(e=>{const n=document.createElement("main");e.appendChild(n);const t=document.createElement("section");n.appendChild(t),t.classList.add("welcome");const r=document.createElement("h2");r.innerText="The greatest varieties",t.appendChild(r);const o=document.createElement("h1");o.innerText="Menu: choose whatever you want!",t.appendChild(o);const i=document.createElement("p");i.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum doloremque officia adipisci architecto omnis. Culpa repudiandae quas ipsum cumque. Dolor corrupti modi facilis similique architecto harum. Voluptate, totam corrupti.",t.appendChild(i)})(x):"about"===e.id?(e=>{const n=document.createElement("main");e.appendChild(n);const t=document.createElement("section");n.appendChild(t),t.classList.add("welcome");const r=document.createElement("h2");r.innerText="Who we are.",t.appendChild(r);const o=document.createElement("h1");o.innerText="About us: you'll be enchanted!",o.classList.add("aboutH1"),t.appendChild(o);const i=document.createElement("p");i.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum doloremque officia adipisci architecto omnis. Culpa repudiandae quas ipsum cumque. Dolor corrupti modi facilis similique architecto harum. Voluptate, totam corrupti.",t.appendChild(i)})(x):void 0)))}))})()})();