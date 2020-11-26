(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[41],{7228:e=>{e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},3646:(e,n,t)=>{var r=t(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},6860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:(e,n,t)=>{var r=t(3646),a=t(6860),i=t(379),o=t(8206);e.exports=function(e){return r(e)||a(e)||i(e)||o()}},379:(e,n,t)=>{var r=t(7228);e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},8041:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});var r=t(7757),a=t.n(r),i=t(8926),o=t.n(i),l=t(4575),c=t.n(l),u=t(3913),s=t.n(u),d=t(2205),f=t.n(d),p=t(8585),m=t.n(p),h=t(9754),v=t.n(h),g=t(7294),b=t(319),y=t.n(b);function x(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[0,3,6],[1,4,7],[2,5,8]],t=0;t<n.length;t++){var r=n[t];if(null!==e[r[0]]&&e[r[0]]===e[r[1]]&&e[r[0]]===e[r[2]])return{gameOver:!0,winner:e[r[0]]}}for(var a=0,i=0;i<e.length;i++)null===e[i]&&a++;return 0===a?{gameOver:!0,winner:null}:{gameOver:!1,winner:null}}var w=function(){function e(){c()(this,e)}return s()(e,[{key:"make_move",value:function(e,n,t){return"Easy"===t?this.randomChoice(e):this.Alpha_Beta_Search(e,n)}},{key:"randomChoice",value:function(e){var n=this.moves_available(e);return n[Math.floor(Math.random()*n.length)]}},{key:"Alpha_Beta_Search",value:function(e,n){for(var t,r=null,a=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,o=this.moves_available(e),l={board:y()(e),moves_next:n},c=0;c<o.length;c++)(t=this.min_value(this.new_state(l,o[c]),a,i))>a&&(r=o[c],a=t);return r}},{key:"moves_available",value:function(e){for(var n=[],t=0;t<e.length;t++)null===e[t]&&n.push(t);return n}},{key:"min_value",value:function(e,n,t){var r=x(e.board);if(r.gameOver)return this.compute_utility(r);for(var a=Number.POSITIVE_INFINITY,i=this.moves_available(e.board),o=0;o<i.length;o++){if((a=Math.min(a,this.max_value(this.new_state(e,i[o]),n,t)))<=n)return a;t=Math.min(t,a)}return a}},{key:"max_value",value:function(e,n,t){var r=x(e.board);if(r.gameOver)return this.compute_utility(r);for(var a=this.moves_available(e.board),i=Number.NEGATIVE_INFINITY,o=0;o<a.length;o++){if((i=Math.max(i,this.min_value(this.new_state(e,a[o]),n,t)))>=t)return i;n=Math.max(n,i)}return i}},{key:"new_state",value:function(e,n){var t={board:y()(e.board)};return t.board[n]=e.moves_next,t.moves_next="X"===e.moves_next?"O":"X",t}},{key:"compute_utility",value:function(e){return"X"===e.winner?1:"O"===e.winner?-1:0}}]),e}(),k=t(3379),_=t.n(k),E=t(7357);_()(E.Z,{insert:"head",singleton:!1}),E.Z.locals;var N=function(e){return g.createElement("div",{className:"btn-group"},e.children)},I=function(e){var n=null;return e.text===e.level&&(n="active"),g.createElement("button",{className:n,onClick:function(){return e.click(e.text)}},g.createElement("strong",null,e.text))},T=function(){return g.createElement("svg",{height:100,width:100},g.createElement("circle",{cx:"50",cy:"50",r:"45",stroke:"white",strokeWidth:"6",fill:"none"}))},O=function(){return g.createElement("svg",{height:100,width:100},g.createElement("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"white",strokeWidth:"6"}),g.createElement("line",{x1:"0",y1:"100",x2:"100",y2:"0",stroke:"white",strokeWidth:"6"}))},S=function(e){return g.createElement("div",{className:"winner-wrap"},g.createElement("div",{className:"winner-message"},g.createElement("span",{className:"close",onClick:e.close},"×"),g.createElement("h2",null,e.message)))},C=function(e){var n,t=!1;return"X"===e.player?(t=!0,n=g.createElement(O,null)):"O"===e.player&&(t=!0,n=g.createElement(T,null)),g.createElement("div",{className:"square"},g.createElement("button",{type:"button",disabled:t,onClick:function(){return e.click(e.id)}},n))};const A=function(e){f()(i,e);var n,t,r=(n=i,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=v()(n);if(t){var a=v()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return m()(this,e)});function i(e){var n;return c()(this,i),(n=r.call(this,e)).handleClick=function(e){var t=n.state,r=t.squares,a=t.playerTurn,i=t.gameOver;null===r[e]&&!i&&a&&(r[e]="O",n.setState({squares:r,playerTurn:!a}),!1===n.game_over_update(r)&&n.AI_turn(r))},n.AI_turn=function(){var e=o()(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.AI.make_move(t,"X",n.state.level),t[r]="X",n.setState({squares:t,playerTurn:!0}),n.game_over_update(t),e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.game_over_update=function(e){var t,r=x(e);return!!r.gameOver&&(t=r.winner?r.winner+" won!":"Tie!",n.setState({gameOver:r.gameOver,winner_display:g.createElement(S,{message:t,close:n.closeWinnerDisplay})}),!0)},n.closeWinnerDisplay=function(){n.setState({winner_display:null,playerTurn:!0,squares:Array(9).fill(null),gameOver:!1})},n.changeLevel=function(e){n.setState({level:e})},n.state={squares:Array(9).fill(null),playerTurn:!0,gameOver:!1,winner_display:null,level:"Hard"},n.AI=new w,n}return s()(i,[{key:"render",value:function(){var e=this,n=this.state,t=n.squares,r=n.gameOver,a=n.winner_display,i=n.level;return g.createElement("div",{className:"TicTacToe"},r&&a,g.createElement("div",{className:"board-controller"},g.createElement(N,null,g.createElement(I,{text:"Easy",level:i,click:this.changeLevel}),g.createElement(I,{text:"Hard",level:i,click:this.changeLevel}),g.createElement("button",{className:"reset",onClick:this.closeWinnerDisplay},g.createElement("strong",null,"Reset")))),g.createElement("div",{className:"board"},t.map((function(n,t){return g.createElement(C,{key:t,id:t,player:n,click:e.handleClick})}))))}}]),i}(g.Component)},7357:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(3645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"\n.TicTacToe {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  width: 400px;\n}\n\n.btn-group{\n  display: flex;\n  width: 100%;\n}\n\n.btn-group button{\n  padding: 5px;\n  border: 1px solid grey;\n  font-size: 20px;\n  cursor: pointer;\n  border-radius: 2px;\n  margin: 8px;\n  outline: none;\n  border: none;\n}\n.btn-group .reset{\n  margin-left: auto\n}\n\n.btn-group > button:hover, \n.btn-group .active{\n  background-color: #696969;\n}\n\n.board-controller{\n  width: auto;\n  height: 50px;\n  max-width: 500px;\n  background-color: lightgrey;\n  border-radius: 5px 5px 0px 0px;\n}\n\n.winner-message{\n  background-color: #f2fafd ;\n  padding: 15px;\n  margin: auto;\n  margin-top: 50px;\n  width: 300px;\n  border-radius:5px;\n}\n\n.winner-wrap{\n  width: 100%;\n  height: 100%;\n  display: block;\n  z-index: 2;\n  position: fixed;\n  background-color:rgba(0,0,0,0.4);\n  top: 0;\n  left: 0;\n}\n\n.close{\n  float: right;\n  font-size: 30px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus{\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.board{\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(3, 1fr);\n  background-color: #0b3948;\n  padding: 15px;\n  gap: 15px;\n  width: 400px;\n  height: 400px;\n  max-height: 500px;\n  max-width: 500px;\n  border-radius: 0px 0px 5px 5px;\n}\n\n.square{\n  text-align: center;\n  background-color: #416165;\n  color: white;\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 2px;\n}\nbutton{\n  outline: none;\n  border: none;\n}\n.square button{\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n}\n@media( max-width: 515px){\n  .container{\n    flex-direction: column;\n  }\n}",""]);const i=a},3645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},3379:(e,n,t)=>{"use strict";var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function o(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],a=0;a<e.length;a++){var l=e[a],c=n.base?l[0]+n.base:l[0],u=t[c]||0,s="".concat(c," ").concat(u);t[c]=u+1;var d=o(s),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:s,updater:h(f,n),references:1}),r.push(s)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var u,s=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,a);else{var i=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,a;if(n.singleton){var i=m++;t=p||(p=c(n)),r=d.bind(null,t,i,!1),a=d.bind(null,t,i,!0)}else t=c(n),r=f.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=o(t[r]);i[a].references--}for(var c=l(e,n),u=0;u<t.length;u++){var s=o(t[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=c}}}}}]);