(()=>{"use strict";var n={904:(n,e,t)=>{t.d(e,{c:()=>c});var r=t(500),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Nanum+Brush+Script:regular);"]),a.push([n.id,":root{\n    --text-color: #f8f4f3;\n    --bg-color: #120d0a;\n    --primary-color: #52453d;\n    --secondary-color: #617051;\n    --accent-color: #678b66;\n}\n\nbody{\n    background-color: var(--bg-color);\n    color: var(--text-color);\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n    font-family: 'Poppins',sans-serif;\n}\n\nheader{\n    width: 100vw;\n    height: 8rem;\n    background-color: var(--accent-color);\n}\n\nnav{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 100%;\n}\n\n.nav-button{\n    width: 9rem;\n    height: 3rem;\n    border-radius: 0.7rem;\n    outline: none;\n    border: none;\n    font-family: 'Poppins',sans-serif;\n    background-color: var(--secondary-color);\n    cursor: pointer;\n    transition: all 0.4s;\n    color: var(--text-color);\n}\n\n.nav-button:hover{\n    border-bottom: 1.5px solid black;\n    transform: scale(1.05);\n}\n\n#content #home{\n    padding: 1.5rem;\n    position: relative;\n    display: grid;\n    grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr);\n    grid-template-rows: minmax(500px, 1fr) minmax(500px,1fr);\n}\n\n#content #home img{\n    min-width: 15rem;\n    min-height: 15rem;\n    max-width: 90%;\n    max-height: 90%;\n    grid-row: 1/2;\n    grid-column: 2/3;\n    border-radius: 0.7rem;\n    border: 0.5rem solid var(--primary-color);\n}\n\n#content #home div{\n    grid-row:1/2;\n}\n\n#content #home div h1{\n    font-size: 4rem;\n    margin-left: 0.5rem;\n}\n\n#content #home div h1 span{\n    margin-left: 1.5rem;\n}\n\n#content #home #details{\n    grid-row: 2/3;\n    grid-column: 1/3;\n    display: grid;\n    grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr);\n    grid-template-rows: 0.3fr 1fr;\n    justify-items: center;\n}\n\n#content #home #details h2{\n    grid-row: 1/2;\n    grid-column: 1/4;\n    text-align: center;\n}\n\n#content #home #details div{\n    grid-row: 2/3;\n    background-color: var(--secondary-color);\n    height: 8rem;\n    width: auto;\n    text-align: center;\n    padding: 0 1rem;\n    border-radius: 0.7rem;\n}\n\n#content #menu{\n    display: flex;\n    flex-direction: column;\n    height: 92vh;\n    width: 100vw;\n}\n\n#content #menu h1{\n    text-align: center;\n}\n\n#content #menu #grid{\n    display: grid;\n    overflow-x: scroll;\n    padding-top: 1rem;\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    grid-template-rows: repeat(2, 1fr);\n    column-gap: 1rem;\n    row-gap: 3rem;\n    height: 82%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n\n#content #menu #grid .card{\n    position: relative;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-radius: 0.7rem;\n    border: 0.4rem solid var(--secondary-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.3s;\n}\n\n#content #menu #grid .card::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: inherit;\n    filter: blur(5px);\n    z-index: -1;\n}\n\n#content #menu #grid .card h3{\n    font-size: 2rem;\n    padding: 1rem;\n    opacity: 0;\n}\n\n#content #menu #grid .card:hover{\n    opacity: 0.7;\n}\n\n#content #menu #grid .card:hover h3{\n    opacity: 1 !important;\n}\n\n#content #about {\n    width: 100vw;\n    height: 92vh;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n\n#content #about #container{\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    width: 20rem;\n    background-color: var(--primary-color);\n    text-align: center;\n    height: 39rem;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 0.5rem;\n    border: 0.5rem solid var(--accent-color);\n    padding-bottom: 1.5rem;\n}\n\n#content #about #container h1{\n    font-family: 'Nanum Brush Script', 'Poppins';\n    font-size: 3rem;\n    text-shadow: 3px 3px 0 var(--secondary-color), \n    6px 6px 0 var(--secondary-color), \n    9px 9px 0 var(--secondary-color), \n    12px 12px 0 var(--secondary-color), \n    15px 15px 0 var(--secondary-color);\n}\n\n#content #contact {\n    width: 100vw;\n    height: 92vh;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n\n#content #contact div{\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    width: 22rem;\n    background-color: var(--primary-color);\n    text-align: center;\n    height: 20rem;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    border-radius: 0.5rem;\n    border: 0.5rem solid var(--accent-color);\n}\n\n#content #contact div ul{\n    height: 10rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    text-align: center;\n    padding-inline-start: 0px;\n}\n\n#content #contact div ul li{\n    padding-inline: 0px;    \n    text-align: center;\n    list-style: none;\n}\n",""]);const c=a},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],l=r.base?d[0]+r.base:d[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=r(n,o),l=0;l<i.length;l++){var s=t(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=d}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),o=t.n(r),i=t(176),a=t.n(i),c=t(120),d=t.n(c),l=t(808),s=t.n(l),p=t(936),m=t.n(p),u=t(904),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),e()(u.c,h),u.c&&u.c.locals&&u.c.locals;const g=t.p+"e7dffb2e444b577eff32.jpg",f=()=>{document.getElementById("content").innerHTML="";const n=document.createElement("div");n.id="home";const e=document.createElement("img");e.src=g,e.alt="Restaurant",n.appendChild(e);const t=document.createElement("div");t.id="name";const r=document.createElement("h1");r.innerHTML="Salvin Restaurant",t.appendChild(r);const o=document.createElement("p");o.innerHTML="Salvin is a restaurant with dishes from different cuisines. You can find salads, soups, sandwiches, burgers, pizzas, pastas, steaks, seafood, and more. We also have desserts and drinks. We use fresh ingredients and make our food with care. We offer friendly service and a cozy atmosphere. Come and try Salvin today!",t.appendChild(o),n.appendChild(t);const i=document.createElement("div");i.id="details";const a=document.createElement("h2");a.innerHTML="Details",i.appendChild(a);const c=document.createElement("div"),d=document.createElement("h3");d.innerHTML="Open Hours",c.appendChild(d);const l=document.createElement("p");l.innerHTML="7.00 a.m. - 10.00 p.m.",c.appendChild(l),i.appendChild(c);const s=document.createElement("div"),p=document.createElement("h3");p.innerHTML="Location",s.appendChild(p);const m=document.createElement("p");m.innerHTML="12/3, Ambalangoda, Sri Lanka",s.appendChild(m),i.appendChild(s);const u=document.createElement("div"),h=document.createElement("h3");h.innerHTML="Contact",u.appendChild(h);const f=document.createElement("p");f.innerHTML="+94 057-652-4545",u.appendChild(f),i.appendChild(u),n.appendChild(i),document.getElementById("content").appendChild(n)},v=function(n,e){const t=document.createElement("div");t.classList.add("card"),t.style.backgroundImage=`url(${n})`;const r=document.createElement("div"),o=document.createElement("h3");return o.innerHTML=e,r.appendChild(o),t.appendChild(r),t},y=t.p+"4e63477be33c144cf3be.jpg",b=t.p+"299880d4aa63e1b1c772.jpg",x=t.p+"151c344a8ce7c8345733.jpg",w=t.p+"cab26248af94d792e228.jpg",E=()=>{document.getElementById("content").innerHTML=""};f(),document.getElementById("home").addEventListener("click",(()=>{E(),f()})),document.getElementById("menu").addEventListener("click",(()=>{E(),(()=>{const n=document.createElement("div");n.id="menu";const e=document.createElement("h1");e.innerHTML="Our Menu",n.appendChild(e);const t=document.createElement("div");t.id="grid";const r=v(y,"Steak");t.appendChild(r);const o=v(b,"Egg");t.appendChild(o);const i=v(x,"Porkchops");t.appendChild(i);const a=v(w,"Burger");t.appendChild(a),n.appendChild(t),document.getElementById("content").appendChild(n)})()})),document.getElementById("about").addEventListener("click",(()=>{E(),(()=>{const n=document.createElement("div");n.style.backgroundImage=`linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%), url(${g})`,n.id="about";const e=document.createElement("div");e.id="container";const t=document.createElement("h1");t.innerHTML="About Us!",e.appendChild(t);const r=document.createElement("p");r.innerHTML="Salvin Restaurant is a delightful culinary destination located in Ambalangoda, Sri Lanka. Our menu items are inspired by local cuisine, meticulously crafted by our talented head chef. Whether you're craving fresh flown-in seafood from the northeast or handcrafted cocktails, wine, and beer, we've got you covered. Our intimate dining space invites you to experience an authentic meal with us. We look forward to serving you! Feel free to visit us at our cozy brasserie-style restaurant and enjoy everything you love about Sri Lankan cuisine without any attitude. From classic local dishes to fresh salads and juicy hamburgers made with fresh-ground beef, we've got something for everyone. And don't forget to save room for dessert! 🍰🍽️",e.appendChild(r),n.appendChild(e),document.getElementById("content").appendChild(n)})()})),document.getElementById("contact").addEventListener("click",(()=>{E(),(()=>{const n=document.createElement("div");n.id="contact";const e=document.createElement("div"),t=document.createElement("h1");t.innerHTML="Get in touch with us",e.appendChild(t);const r=document.createElement("ul"),o=document.createElement("li");o.innerHTML="+94 2335690",r.appendChild(o);const i=document.createElement("li");i.innerHTML="contact.me.nisulmunidasa@gmail.com",r.appendChild(i);const a=document.createElement("li");a.innerHTML="No.54/7, Angoda, Galle, Sri Lanka",r.appendChild(a),e.appendChild(r),n.appendChild(e),document.getElementById("content").appendChild(n)})()}))})()})();