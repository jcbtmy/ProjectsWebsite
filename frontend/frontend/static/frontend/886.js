(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[886],{7228:e=>{e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},2858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},3884:e=>{e.exports=function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return t}}},521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3038:(e,n,t)=>{var r=t(2858),a=t(3884),o=t(379),i=t(521);e.exports=function(e,n){return r(e)||a(e,n)||o(e,n)||i()}},379:(e,n,t)=>{var r=t(7228);e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},6886:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>P});var r=t(7757),a=t.n(r),o=t(8926),i=t.n(o),s=t(4575),l=t.n(s),c=t(3913),u=t.n(c),d=t(2205),p=t.n(d),f=t(8585),m=t.n(f),h=t(9754),g=t.n(h),v=t(7294),x=t(3379),y=t.n(x),b=t(9729);y()(b.Z,{insert:"head",singleton:!1}),b.Z.locals;var E=t(2122),w=t(9756),C=t(1788),N=(t(5697),t(1132));function S(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var k=t(660),A=function(e,n){return e&&n&&n.split(" ").forEach((function(n){return r=n,void((t=e).classList?t.classList.remove(r):"string"==typeof t.className?t.className=S(t.className,r):t.setAttribute("class",S(t.className&&t.className.baseVal||"",r)));var t,r}))},D=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(e,t){var r=n.resolveArguments(e,t),a=r[0],o=r[1];n.removeClasses(a,"exit"),n.addClass(a,o?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(e,t)},n.onEntering=function(e,t){var r=n.resolveArguments(e,t),a=r[0],o=r[1]?"appear":"enter";n.addClass(a,o,"active"),n.props.onEntering&&n.props.onEntering(e,t)},n.onEntered=function(e,t){var r=n.resolveArguments(e,t),a=r[0],o=r[1]?"appear":"enter";n.removeClasses(a,o),n.addClass(a,o,"done"),n.props.onEntered&&n.props.onEntered(e,t)},n.onExit=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"appear"),n.removeClasses(t,"enter"),n.addClass(t,"exit","base"),n.props.onExit&&n.props.onExit(e)},n.onExiting=function(e){var t=n.resolveArguments(e)[0];n.addClass(t,"exit","active"),n.props.onExiting&&n.props.onExiting(e)},n.onExited=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"exit"),n.addClass(t,"exit","done"),n.props.onExited&&n.props.onExited(e)},n.resolveArguments=function(e,t){return n.props.nodeRef?[n.props.nodeRef.current,e]:[e,t]},n.getClassNames=function(e){var t=n.props.classNames,r="string"==typeof t,a=r?(r&&t?t+"-":"")+e:t[e];return{baseClassName:a,activeClassName:r?a+"-active":t[e+"Active"],doneClassName:r?a+"-done":t[e+"Done"]}},n}(0,C.Z)(n,e);var t=n.prototype;return t.addClass=function(e,n,t){var r=this.getClassNames(n)[t+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===n&&"done"===t&&a&&(r+=" "+a),"active"===t&&e&&e.scrollTop,r&&(this.appliedClasses[n][t]=r,function(e,n){e&&n&&n.split(" ").forEach((function(n){return r=n,void((t=e).classList?t.classList.add(r):(0,N.Z)(t,r)||("string"==typeof t.className?t.className=t.className+" "+r:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+r)));var t,r}))}(e,r))},t.removeClasses=function(e,n){var t=this.appliedClasses[n],r=t.base,a=t.active,o=t.done;this.appliedClasses[n]={},r&&A(e,r),a&&A(e,a),o&&A(e,o)},t.render=function(){var e=this.props,n=(e.classNames,(0,w.Z)(e,["classNames"]));return v.createElement(k.ZP,(0,E.Z)({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(v.Component);D.defaultProps={classNames:""},D.propTypes={};const j=D;var F=t(3038),R=t.n(F),Z=t(4967);y()(Z.Z,{insert:"head",singleton:!1}),Z.Z.locals;var I=function(e){var n=(0,v.useState)(""),t=R()(n,2),r=t[0],a=t[1];return v.createElement("div",{className:"add-container"},v.createElement("form",{onSubmit:function(n){e.handleSubmit(n,r),a("")}},v.createElement("input",{className:"add-button",type:"submit",value:"+",onClick:function(n){e.handleSubmit(n,r),a("")}}),v.createElement("input",{className:"add-input",type:"url",placeholder:"https://example.com/article",value:r,onChange:function(e){return a(e.target.value)}})),v.createElement("div",{className:"sort-choice"},v.createElement("select",{value:e.sort,onChange:function(n){return e.changeSort(n.target.value)}},v.createElement("option",{value:"category"},"Category"),v.createElement("option",{value:"site"},"Site"))))},T=t(9840);y()(T.Z,{insert:"head",singleton:!1}),T.Z.locals;var O=function(e){return v.createElement("div",{className:"message-wrap"},v.createElement("div",{className:"message"},v.createElement("span",{className:"close",onClick:e.disappear},"×"),e.children))};function L(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=g()(e);if(n){var a=g()(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return m()(this,t)}}var M=function(e){var n=[];for(var t in e.folders)n.push(v.createElement(U,{key:t,category:t,contents:e.folders[t]}));return v.createElement("div",{className:"box-container"},e.children,n)},z=function(e){var n=v.useRef(null);return v.createElement(j,{in:e.showContents,classNames:"slideDown",timeout:500,unmountOnExit:!0,appear:!0,nodeRef:n},v.createElement(_,{contents:e.contents,nodeRef:n}))},U=function(e){p()(t,e);var n=L(t);function t(e){var r;return l()(this,t),(r=n.call(this,e)).clickFolder=function(){var e=r.state.showContents;r.setState({showContents:!e})},r.state={showContents:!1},r}return u()(t,[{key:"render",value:function(){var e=this,n=this.state.showContents;return v.createElement("div",{className:"folder"},v.createElement("div",{className:"folder-head"+(n?" open":""),type:"button",onClick:function(){return e.clickFolder()}},v.createElement("img",{src:"/static/frontend/media/folder_img.png",alt:"C:/"}),v.createElement("div",{className:"folder-text"},this.props.category)),v.createElement(z,{showContents:n,contents:this.props.contents}))}}]),t}(v.Component),_=function(e){return v.createElement("div",{className:"folder-contents",ref:e.nodeRef},v.createElement("ul",null,e.contents.map((function(e){return v.createElement("li",{key:e.id},v.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},"(",e.site,") - ",e.title))}))))},P=function(e){p()(t,e);var n=L(t);function t(e){var r;return l()(this,t),(r=n.call(this,e)).createFolders=function(e){var n={},t=r.state.sort;e.map((function(e){return e[t]in n?n[e[t]].push(e):n[e[t]]=[e],e})),r.setState({folders:n,isLoaded:!0})},r.postData=i()(a().mark((function e(){var n,t,r,o=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:{},e.next=4,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(r=e.sent).ok){e.next=9;break}return e.abrupt("return",r.json());case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)}))),r.changeSort=function(e){var n={},t=r.state.folders;for(var a in t)t[a].map((function(t){return t[e]in n?n[t[e]].push(t):n[t[e]]=[t],t}));r.setState({sort:e,folders:n})},r.handleSubmit=function(e,n){e.preventDefault(),""!==n&&r.postData(r.articles_api,{url:n}).then((function(e){e?r.updateFolder(e):r.setState({message:v.createElement("h2",null,"Oops! Could not resolve: ",n)})})).catch((function(e){r.setState({message:v.createElement("h2",null,"Error! : + ",e.message)})}))},r.updateFolder=function(e){for(var n=r.state.folders,t=r.state.sort,a=v.createElement("div",null,v.createElement("h2",null,"Added:",v.createElement("br",null),e.title),v.createElement("p",null," Site: ",e.site,v.createElement("br",null),"Category: ",e.category)),o=0;o<n[e[t]].length;o++)if(n[e[t]][o].id===e.id)return void r.setState({message:a});n[e[t]].push(e),r.setState({folders:n,message:a})},r.UnmountError=function(){r.setState({message:null})},r.state={folders:null,isLoaded:!1,message:null,sort:"category"},r.articles_api="/articles-api/",r}return u()(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.articles_api).then((function(e){return e.json()})).then((function(n){return e.createFolders(n)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,n=e.folders,t=e.isLoaded,r=e.message;return v.createElement("div",{className:"App"},t&&v.createElement(M,{folders:n},v.createElement(I,{handleSubmit:this.handleSubmit,changeSort:this.changeSort}),r&&v.createElement(O,{disappear:this.UnmountError},r)))}}]),t}(v.Component)},9729:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(3645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".App {\n  display: flex;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  background-color: solid grey;\n  \n}\n\n.box-container{\n  position: relative;\n  display: flex;\n  align-items: left;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  margin: auto;\n  margin-top: 15px;\n  animation: fadeIn 0.5s ease-in;\n}\n.folder{\n  margin-left: 15px;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n  animation: fadeIn 0.5s ease-in;\n}\n\n.folder-head:hover,\n.folder-head.open{\n  background-color: #F0F0F0;\n  cursor: pointer;\n}\n\n\n.folder-head > img{\n  width: 30px;\n  height: 30px;\n  margin: 8px;\n}\n\n.folder-text{\n  line-height: 3;\n  font-weight: 450;\n}\n\n.folder-head{\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-right: 15px;\n  user-select: none;\n  border-radius: 2px;\n}\n\n\n.folder-contents > ul{\n  text-align: left;\n  list-style-type: none ;\n  margin-top: 0 ;\n  margin-bottom: 0;\n}\n\n.folder-contents > ul > li{\n  padding: 3px;\n  margin: 5px;\n  font-weight: 375 ;\n  transform-origin:left;\n  transition: all .1s linear;\n}\n\n.folder-contents > ul > li:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n\n}\n\n.folder-contents > ul > li > a{\n  position: relative;\n  text-decoration: none;\n  color: #002457;\n}\n.folder-contents{\n  position: relative;\n  overflow: visible;\n}\n\n.slideDown-enter{\n  max-height: 0;\n  opacity: 0;\n}\n\n.slideDown-enter-active{\n  max-height: 500px;\n  opacity: 1;\n  transition: all 250ms ease-in-out;\n}\n.slideDown-exit{\n  max-height: 500px;\n  opacity: 1;\n}\n\n.slideDown-exit-active{\n  max-height: 0;\n  opacity: 0;\n  transition: all 250ms ease-in-out;\n}\n\n@keyframes fadeOut{\n  from{opacity: 1;}\n  to{opacity: 0;}\n}\n\n@keyframes fadeIn{\n  from{opacity: 0;}\n  to{opacity: 1;}\n}\n\n@media(max-width: 1024px){\n  .add-container > form{\n    width: 100%;\n  }\n}",""]);const o=a},4967:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(3645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"\n.add-container{\n    display: flex;\n    flex-direction: row;\n    width: auto;\n    margin-left: 15px;\n    margin-right: 15px;\n    padding: 10px;\n    border-radius: 2px;\n    background-image: linear-gradient(to right top, #c86bd1, #d96abf, #e36dae, #e9729f, #ea7a92, #f37f88, #fa867e, #fe8e74, #ff9862, #ffa54c, #ffb631, #ffc800);\n  }\n  \n  .add-container > form{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    margin-right: 10px;\n  }\n  \n  .add-button{\n    display: flex;\n    position: relative;\n    margin-right: 7px;\n    border-radius: 20px;\n    font-size: 25px;\n    font-weight: 700;\n    background-color: #F0F0F0;\n    height: auto;\n  }\n  \n  \n  \n  .add-button:focus,\n  .add-button:hover{\n    outline: none;\n    background-color:\t#E0E0E0;\n  }\n  \n  .add-input{\n    background-color:white;\n    padding-left: 15px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border: 2px solid\tgrey;\n    font-size: 17px;\n    color:  #202020;\n    border-radius: 20px;\n    width: 100%;\n    position: relative;\n  \n  }\n  \n  .add-input:focus{\n    outline: none;\n  }\n  \n  .add-input::placeholder{\n    color: #D0D0D0;\n  }\n  \n  .sort-choice{\n    display: flex;\n    margin-right: 3%;\n    margin-left: auto;\n\n   \n  }\n  .sort-choice > select{\n      display: flex;\n      border-radius: 20px;\n      background-color: white;\n      font-size: 15px;\n      font-weight: 550;\n      text-align: center;\n      text-align-last: center;\n      -moz-text-align-last: center;\n      -webkit-appearance: none; \n      border: none;\n      padding-left: 7px;\n      padding-right: 7px;\n  }\n\n  .sort-choice > select:focus,\n  .sort-choice > select:after{\n    outline: none;\n    border: none;\n  }\n\n  .sort-choice > select > option{\n      border-radius: 20px;\n      border: none;\n      margin: 3px;\n      padding: 7px;\n      font-size: 15px;\n      font-weight: 600;\n  }\n  \n  ",""]);const o=a},9840:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(3645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".message-wrap{\n    width: 100%;\n    height: 100%;\n    display: block;\n    z-index: 2;\n    position: fixed;\n    background-color:rgba(0,0,0,0.4);\n    top: 0;\n    margin: auto;\n    left: 0;\n    animation: fadeIn .3s ease-in;\n  }\n\n  .message{\n      margin-top: 100px;\n      margin: auto;\n      text-align: center;\n      width: 25%;\n      height: auto;\n      padding: 50px;\n      background-color: white;\n      animation: fadeIn .5s ease-in;\n  }\n\n  .close{\n    float: right;\n    font-size: 30px;\n    font-weight: bold;\n  }\n\n  @keyframes fadeIn{\n      from{ opacity: 0;}\n      to{opacity: 1;}\n  }",""]);const o=a},3645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},3379:(e,n,t)=>{"use strict";var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function i(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],a=0;a<e.length;a++){var s=e[a],l=n.base?s[0]+n.base:s[0],c=t[l]||0,u="".concat(l," ").concat(c);t[l]=c+1;var d=i(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(p)):o.push({identifier:u,updater:h(p,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var c,u=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function d(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,n){var t,r,a;if(n.singleton){var o=m++;t=f||(f=l(n)),r=d.bind(null,t,o,!1),a=d.bind(null,t,o,!0)}else t=l(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=i(t[r]);o[a].references--}for(var l=s(e,n),c=0;c<t.length;c++){var u=i(t[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=l}}}}}]);