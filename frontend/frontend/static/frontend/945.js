(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[945],{7218:(t,e,n)=>{"use strict";n.d(e,{Z:()=>m});var a=n(4575),r=n.n(a),o=n(3913),s=n.n(o),i=n(2205),c=n.n(i),l=n(8585),u=n.n(l),p=n(9754),f=n.n(p),h=n(7294);var m=function(t){c()(o,t);var e,n,a=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=f()(e);if(n){var r=f()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return u()(this,t)});function o(){return r()(this,o),a.apply(this,arguments)}return s()(o,[{key:"render",value:function(){return h.createElement("div",{className:"spinner-border",role:"status"},h.createElement("span",{className:"sr-only"},"Loading..."))}}]),o}(h.Component)},4945:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>R});var a=n(7757),r=n.n(a),o=n(8926),s=n.n(o),i=n(319),c=n.n(i),l=n(4575),u=n.n(l),p=n(3913),f=n.n(p),h=n(2205),m=n.n(h),v=n(8585),d=n.n(v),y=n(9754),k=n.n(y),S=n(7294),g=n(3822),b=n(7912),x=n(2388),M=n(25),E=n(9795),T=n(8836),D=n(7218);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=k()(t);if(e){var r=k()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}function W(t){var e=parseFloat(t);return Math.floor(9*e/5+32).toString()}function P(t){var e=3.28084*parseFloat(t);return e.toFixed(2)}var w=function(t){m()(n,t);var e=A(n);function n(){var t,a;u()(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return d()(a,(t=a=e.call.apply(e,[this].concat(o)),a.markerClick=function(t){console.log(t.key);for(var e=t.latlng,n=JSON.stringify([e.lat,e.lng]),r=a.props.stations,o=0;o<r.length;o++)n===JSON.stringify(r[o].coordinates)&&a.props.clickEvent(r[o])},t))}return f()(n,[{key:"displayMarkers",value:function(){var t=this;return this.props.stations.map((function(e){return S.createElement(x.Z,{key:e.value,position:e.coordinates,onMouseOver:function(t){t.target.openPopup()},onMouseOut:function(t){t.target.closePopup()},onClick:t.markerClick},S.createElement(M.Z,null,e.label))}))}},{key:"render",value:function(){return S.createElement("div",{className:"Map"},S.createElement(E.Z,{center:this.props.currentStation.coordinates,zoom:11},S.createElement(T.Z,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),this.displayMarkers()))}}]),n}(S.Component);function C(t){var e=t.temps,n=[];return e?("MM"!==e.WTMP&&n.push(S.createElement("p",{key:"WTMP"},"Water Temperature: ",W(e.WTMP),"℉")),"MM"!==e.ATMP&&n.push(S.createElement("p",{key:"ATMP"},"Air Temperature: ",W(e.ATMP),"℉")),n):null}function N(t){var e=t.stationWaves.map((function(t){return{x:t.time,y:parseFloat(P(t.WVHT))}})),n=e.map((function(t){return t.y})),a=Math.max.apply(Math,c()(n)),r=Math.min.apply(Math,c()(n)),o=.1*Math.abs(a-r),s={axisY:{title:"Wave Height",maximum:a+o,minimum:r-o},axisX:{interval:4,intervalType:"hour",xValueFormatString:"DD-hh"},height:160,data:[{type:"splineArea",name:"Wave Height ft",xValueType:"dateTime",xValueFormatString:"D MMM hh:mm TT",connectNullData:!0,dataPoints:e}]};return S.createElement("div",{className:"Chart"},S.createElement(b.x,{options:s}))}function L(t){var e=t.stationWaves,n=void 0===e||0==e.length?null:e[e.length-1].WVHT;return S.createElement("div",{className:"SurfText"},S.createElement("h2",null,S.createElement("b",null,t.stationName)),S.createElement("h2",null,n&&S.createElement("b",null,"Wave Height: ",P(n).toString()," ft"),!n&&S.createElement("b",{style:{color:"red"}},"Oh No! This station is currently down")),S.createElement(C,{temps:t.stationTemps}),S.createElement(N,{stationWaves:e}))}var R=function(t){m()(i,t);var e,n,a,o=A(i);function i(t){var e;return u()(this,i),(e=o.call(this,t)).handleSelectStation=function(t){e.setState({isLoaded:!1,notAvailable:!1,selectedStation:null}),e.checkforSpecData(t.value).then((function(n){n?e.setState({selectedStation:t,specData:e.parseSpectralData(n),isLoaded:!0}):e.setState({notAvailable:!0})})).catch((function(t){e.setState({error:t,isLoaded:!0,notAvailable:!0})})),e.getWeatherData(t.value).then((function(t){e.setState({tempData:e.parseWeatherData(t)})})).catch((function(t){e.setState({error:t,isLoaded:!0,notAvailable:!0})}))},e.state={error:null,isLoaded:!1,selectedStation:null,tempData:null,specData:null,stations:null,notAvailable:!1},e.damnStation="LJAC1",e.ndbc_cors="https://cors-anywhere.herokuapp.com/https://www.ndbc.noaa.gov/",e}return f()(i,[{key:"componentDidMount",value:function(){var t=this;this.getActiveStations().then((function(e){t.setState({isLoaded:!0,stations:e})}))}},{key:"checkforSpecData",value:(a=s()(r().mark((function t(e){var n,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.ndbc_cors.concat("data/realtime2/",e,".spec"),t.next=3,fetch(n);case 3:if(!(a=t.sent).ok){t.next=10;break}return t.next=7,a.text();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=!1;case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"getWeatherData",value:(n=s()(r().mark((function t(e){var n,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="LJPC1"!==e?e:"LJAC1",n=this.ndbc_cors.concat("data/realtime2/",e,".txt"),t.next=4,fetch(n);case 4:if(!(a=t.sent).ok){t.next=11;break}return t.next=8,a.text();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=!1;case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"getActiveStations",value:(e=s()(r().mark((function t(){var e,n,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={"Content-Type":"application/json"},t.next=3,fetch("/station-api/stations/",{headers:e});case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,t.abrupt("return",this.parseActiveStations(a));case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"parseActiveStations",value:function(t){for(var e=t.length,n=[],a=0;a<e;a++)n.push({value:t[a].station_id,label:t[a].name,coordinates:[t[a].lat,t[a].lon]});return n}},{key:"parseSpectralData",value:function(t){var e,n=new Date,a=t.split("\n"),r=[];e=a.length,n.setTime(n.getTime()-864e5);for(var o=2;o<e-1;o++){var s=a[o].match(/\S+/g),i=parseInt(s[0]),c=parseInt(s[1])-1,l=parseInt(s[2]),u=parseInt(s[3]),p=parseInt(s[4]),f=new Date(Date.UTC(i,c,l,u,p));if(f<n)break;r.unshift({time:f,WVHT:s[5],steepness:s[12]})}return r}},{key:"parseWeatherData",value:function(t){var e=t.split("\n")[2].match(/\S+/g);return{ATMP:e[13],WTMP:e[14]}}},{key:"notAvailable",value:function(){return S.createElement("h1",null,"Station data not available")}},{key:"render",value:function(){var t=this.state,e=t.error,n=t.isLoaded,a=t.selectedStation,r=t.stations,o=t.tempData,s=t.specData,i=t.notAvailable;return S.createElement("div",{className:"SurfApp"},e&&e.message,!n&&S.createElement(D.Z,null),n&&S.createElement(g.ZP,{value:a,onChange:this.handleSelectStation,options:r,menuPortalTarget:document.body,menuPosition:"fixed"}),a&&!i&&S.createElement(w,{currentStation:a,stations:r,clickEvent:this.handleSelectStation}),a&&!i&&S.createElement(L,{stationName:a.label,stationWaves:s,stationTemps:o}))}}]),i}(S.Component)}}]);