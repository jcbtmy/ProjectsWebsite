(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[84],{7084:function(e){e.exports=function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}var r=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}})),i=(r.defaults,r.getDefaults,r.changeDefaults,/[&<>"']/),s=/[&<>"']/g,l=/[<>"']|&(?!#?\w+;)/,a=/[<>"']|&(?!#?\w+;)/g,o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=function(e){return o[e]};var u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function p(e){return e.replace(u,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var h=/(^|[^\[])\^/g;var g=/[^\w:]/g,f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var d={},k=/^[^:]+:\/*[^/]*$/,b=/^([^:]+:)[\s\S]*$/,m=/^([^:]+:\/*[^/]*)[\s\S]*$/;function x(e,t){d[" "+e]||(k.test(e)?d[" "+e]=e+"/":d[" "+e]=v(e,"/",!0));var n=-1===(e=d[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(b,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(m,"$1")+t:e+t}function v(e,t,n){var r=e.length;if(0===r)return"";for(var i=0;i<r;){var s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}var w=function(e,t){if(t){if(i.test(e))return e.replace(s,c)}else if(l.test(e))return e.replace(a,c);return e},_=p,y=function(e,t){e=e.source||e,t=t||"";var n={replace:function(t,r){return r=(r=r.source||r).replace(h,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n},z=function(e,t,n){if(e){var r;try{r=decodeURIComponent(p(n)).replace(g,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!f.test(n)&&(n=x(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},S={exec:function(){}},$=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},A=function(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var r=!1,i=t;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"})).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},R=v,T=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,i=0;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&--r<0)return i;return-1},I=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},Z=function(e,t){if(t<1)return"";for(var n="";t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e},q=r.defaults,O=R,C=A,U=w,j=T;function E(e,t,n){var r=t.href,i=t.title?U(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:s}:{type:"image",raw:n,href:r,title:i,text:U(s)}}var P=function(){function e(e){this.options=e||q}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e,t){var n=this.rules.block.code.exec(e);if(n){var r=t[t.length-1];if(r&&"paragraph"===r.type)return{raw:n[0],text:n[0].trimRight()};var i=n[0].replace(/^ {4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:O(i,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],r=function(e,t){var n=e.match(/^(\s+)(?:```)/);if(null===n)return t;var r=n[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);return null===t?e:t[0].length>=r.length?e.slice(r.length):e})).join("\n")}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:r}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:"table",header:C(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(n.header.length===n.align.length){var r,i=n.align.length;for(r=0;r<i;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]="right":/^ *:-+: *$/.test(n.align[r])?n.align[r]="center":/^ *:-+ *$/.test(n.align[r])?n.align[r]="left":n.align[r]=null;for(i=n.cells.length,r=0;r<i;r++)n.cells[r]=C(n.cells[r],n.header.length);return n}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:n}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){for(var n,r,i,s,l,a,o,c=t[0],u=t[2],p=u.length>1,h=")"===u[u.length-1],g={type:"list",raw:c,ordered:p,start:p?+u.slice(0,-1):"",loose:!1,items:[]},f=t[0].match(this.rules.block.item),d=!1,k=f.length,b=0;b<k;b++)c=n=f[b],r=n.length,~(n=n.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(r-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,""):n.replace(new RegExp("^ {1,"+r+"}","gm"),"")),b!==k-1&&(i=this.rules.block.bullet.exec(f[b+1])[0],(p?1===i.length||!h&&")"===i[i.length-1]:i.length>1||this.options.smartLists&&i!==u)&&(s=f.slice(b+1).join("\n"),g.raw=g.raw.substring(0,g.raw.length-s.length),b=k-1)),l=d||/\n\n(?!\s*$)/.test(n),b!==k-1&&(d="\n"===n.charAt(n.length-1),l||(l=d)),l&&(g.loose=!0),o=void 0,(a=/^\[[ xX]\] /.test(n))&&(o=" "!==n[1],n=n.replace(/^\[[ xX]\] +/,"")),g.items.push({type:"list_item",raw:c,task:a,checked:o,loose:l,text:n});return g}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):U(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:C(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];var r,i=n.align.length;for(r=0;r<i;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]="right":/^ *:-+: *$/.test(n.align[r])?n.align[r]="center":/^ *:-+ *$/.test(n.align[r])?n.align[r]="left":n.align[r]=null;for(i=n.cells.length,r=0;r<i;r++)n.cells[r]=C(n.cells[r].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e,t){var n=this.rules.block.text.exec(e);if(n){var r=t[t.length-1];return r&&"text"===r.type?{raw:n[0],text:n[0]}:{type:"text",raw:n[0],text:n[0]}}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:U(t[1])}},t.tag=function(e,t,n){var r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):U(r[0]):r[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=j(t[2],"()");if(n>-1){var r=(0===t[0].indexOf("!")?5:4)+t[1].length+n;t[2]=t[2].substring(0,n),t[0]=t[0].substring(0,r).trim(),t[3]=""}var i=t[2],s="";if(this.options.pedantic){var l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);l?(i=l[1],s=l[3]):s=""}else s=t[3]?t[3].slice(1,-1):"";return E(t,{href:(i=i.trim().replace(/^<([\s\S]*)>$/,"$1"))?i.replace(this.rules.inline._escapes,"$1"):i,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0])}},t.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var r=(n[2]||n[1]).replace(/\s+/g," ");if(!(r=t[r.toLowerCase()])||!r.href){var i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return E(n,r,n[0])}},t.strong=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.strong.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="**"===r[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.strong.middle.exec(t.slice(0,r.index+3)))return{type:"strong",raw:e.slice(0,i[0].length),text:e.slice(2,i[0].length-2)}}},t.em=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.em.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="*"===r[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.em.middle.exec(t.slice(0,r.index+2)))return{type:"em",raw:e.slice(0,i[0].length),text:e.slice(1,i[0].length-1)}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),r=/[^ ]/.test(n),i=n.startsWith(" ")&&n.endsWith(" ");return r&&i&&(n=n.substring(1,n.length-1)),n=U(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}},t.autolink=function(e,t){var n,r,i=this.rules.inline.autolink.exec(e);if(i)return r="@"===i[2]?"mailto:"+(n=U(this.options.mangle?t(i[1]):i[1])):n=U(i[1]),{type:"link",raw:i[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}},t.url=function(e,t){var n;if(n=this.rules.inline.url.exec(e)){var r,i;if("@"===n[2])i="mailto:"+(r=U(this.options.mangle?t(n[0]):n[0]));else{var s;do{s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(s!==n[0]);r=U(n[0]),i="www."===n[1]?"http://"+r:r}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},t.inlineText=function(e,t,n){var r,i=this.rules.inline.text.exec(e);if(i)return r=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):U(i[0]):i[0]:U(this.options.smartypants?n(i[0]):i[0]),{type:"text",raw:i[0],text:r}},e}(),D=S,L=y,N=$,B={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:D,table:D,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};B.def=L(B.def).replace("label",B._label).replace("title",B._title).getRegex(),B.bullet=/(?:[*+-]|\d{1,9}[.)])/,B.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,B.item=L(B.item,"gm").replace(/bull/g,B.bullet).getRegex(),B.list=L(B.list).replace(/bull/g,B.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+B.def.source+")").getRegex(),B._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",B._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,B.html=L(B.html,"i").replace("comment",B._comment).replace("tag",B._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),B.paragraph=L(B._paragraph).replace("hr",B.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",B._tag).getRegex(),B.blockquote=L(B.blockquote).replace("paragraph",B.paragraph).getRegex(),B.normal=N({},B),B.gfm=N({},B.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),B.gfm.nptable=L(B.gfm.nptable).replace("hr",B.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",B._tag).getRegex(),B.gfm.table=L(B.gfm.table).replace("hr",B.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",B._tag).getRegex(),B.pedantic=N({},B.normal,{html:L("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",B._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:D,paragraph:L(B.normal._paragraph).replace("hr",B.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",B.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var F={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:D,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:D,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};F.punctuation=L(F.punctuation).replace(/punctuation/g,F._punctuation).getRegex(),F._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",F._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",F._comment=L(B._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),F.em.start=L(F.em.start).replace(/punctuation/g,F._punctuation).getRegex(),F.em.middle=L(F.em.middle).replace(/punctuation/g,F._punctuation).replace(/overlapSkip/g,F._overlapSkip).getRegex(),F.em.endAst=L(F.em.endAst,"g").replace(/punctuation/g,F._punctuation).getRegex(),F.em.endUnd=L(F.em.endUnd,"g").replace(/punctuation/g,F._punctuation).getRegex(),F.strong.start=L(F.strong.start).replace(/punctuation/g,F._punctuation).getRegex(),F.strong.middle=L(F.strong.middle).replace(/punctuation/g,F._punctuation).replace(/overlapSkip/g,F._overlapSkip).getRegex(),F.strong.endAst=L(F.strong.endAst,"g").replace(/punctuation/g,F._punctuation).getRegex(),F.strong.endUnd=L(F.strong.endUnd,"g").replace(/punctuation/g,F._punctuation).getRegex(),F.blockSkip=L(F._blockSkip,"g").getRegex(),F.overlapSkip=L(F._overlapSkip,"g").getRegex(),F._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,F._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,F._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,F.autolink=L(F.autolink).replace("scheme",F._scheme).replace("email",F._email).getRegex(),F._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,F.tag=L(F.tag).replace("comment",F._comment).replace("attribute",F._attribute).getRegex(),F._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,F._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,F._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,F.link=L(F.link).replace("label",F._label).replace("href",F._href).replace("title",F._title).getRegex(),F.reflink=L(F.reflink).replace("label",F._label).getRegex(),F.reflinkSearch=L(F.reflinkSearch,"g").replace("reflink",F.reflink).replace("nolink",F.nolink).getRegex(),F.normal=N({},F),F.pedantic=N({},F.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:L(/^!?\[(label)\]\((.*?)\)/).replace("label",F._label).getRegex(),reflink:L(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",F._label).getRegex()}),F.gfm=N({},F.normal,{escape:L(F.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),F.gfm.url=L(F.gfm.url,"i").replace("email",F.gfm._extended_email).getRegex(),F.breaks=N({},F.gfm,{br:L(F.br).replace("{2,}","*").getRegex(),text:L(F.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var M={block:B,inline:F},W=r.defaults,X=M.block,G=M.inline,V=Z;function H(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function J(e){var t,n,r="",i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}var K=function(){function t(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||W,this.options.tokenizer=this.options.tokenizer||new P,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:X.normal,inline:G.normal};this.options.pedantic?(t.block=X.pedantic,t.inline=G.pedantic):this.options.gfm&&(t.block=X.gfm,this.options.breaks?t.inline=G.breaks:t.inline=G.gfm),this.tokenizer.rules=t}t.lex=function(e,n){return new t(n).lex(e)},t.lexInline=function(e,n){return new t(n).inlineTokens(e)};var n,r,i,s=t.prototype;return s.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},s.blockTokens=function(e,t,n){var r,i,s,l;for(void 0===t&&(t=[]),void 0===n&&(n=!0),e=e.replace(/^ +$/gm,"");e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),s=r.items.length,i=0;i<s;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(e){var a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}throw new Error(a)}return t},s.inline=function(e){var t,n,r,i,s,l,a=e.length;for(t=0;t<a;t++)switch((l=e[t]).type){case"paragraph":case"text":case"heading":l.tokens=[],this.inlineTokens(l.text,l.tokens);break;case"table":for(l.tokens={header:[],cells:[]},i=l.header.length,n=0;n<i;n++)l.tokens.header[n]=[],this.inlineTokens(l.header[n],l.tokens.header[n]);for(i=l.cells.length,n=0;n<i;n++)for(s=l.cells[n],l.tokens.cells[n]=[],r=0;r<s.length;r++)l.tokens.cells[n][r]=[],this.inlineTokens(s[r],l.tokens.cells[n][r]);break;case"blockquote":this.inline(l.tokens);break;case"list":for(i=l.items.length,n=0;n<i;n++)this.inline(l.items[n].tokens)}return e},s.inlineTokens=function(e,t,n,r,i){var s;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===i&&(i="");var l,a=e;if(this.tokens.links){var o=Object.keys(this.tokens.links);if(o.length>0)for(;null!=(l=this.tokenizer.rules.inline.reflinkSearch.exec(a));)o.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,l.index)+"["+V("a",l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(l=this.tokenizer.rules.inline.blockSkip.exec(a));)a=a.slice(0,l.index)+"["+V("a",l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(s=this.tokenizer.escape(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.tag(e,n,r))e=e.substring(s.raw.length),n=s.inLink,r=s.inRawBlock,t.push(s);else if(s=this.tokenizer.link(e))e=e.substring(s.raw.length),"link"===s.type&&(s.tokens=this.inlineTokens(s.text,[],!0,r)),t.push(s);else if(s=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(s.raw.length),"link"===s.type&&(s.tokens=this.inlineTokens(s.text,[],!0,r)),t.push(s);else if(s=this.tokenizer.strong(e,a,i))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.em(e,a,i))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.codespan(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.br(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.del(e))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.autolink(e,J))e=e.substring(s.raw.length),t.push(s);else if(n||!(s=this.tokenizer.url(e,J))){if(s=this.tokenizer.inlineText(e,r,H))e=e.substring(s.raw.length),i=s.raw.slice(-1),t.push(s);else if(e){var c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}throw new Error(c)}}else e=e.substring(s.raw.length),t.push(s);return t},n=t,i=[{key:"rules",get:function(){return{block:X,inline:G}}}],(r=null)&&e(n.prototype,r),i&&e(n,i),t}(),Q=r.defaults,Y=z,ee=w,te=function(){function e(e){this.options=e||Q}var t=e.prototype;return t.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,r);null!=i&&i!==e&&(n=!0,e=i)}return r?'<pre><code class="'+this.options.langPrefix+ee(r,!0)+'">'+(n?e:ee(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:ee(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=Y(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+ee(e)+'"';return t&&(r+=' title="'+t+'"'),r+">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=Y(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+(this.options.xhtml?"/>":">")},t.text=function(e){return e},e}(),ne=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),re=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{n=e+"-"+ ++r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),ie=r.defaults,se=_,le=function(){function e(e){this.options=e||ie,this.options.renderer=this.options.renderer||new te,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ne,this.slugger=new re}e.parse=function(t,n){return new e(n).parse(t)},e.parseInline=function(t,n){return new e(n).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var n,r,i,s,l,a,o,c,u,p,h,g,f,d,k,b,m,x,v="",w=e.length;for(n=0;n<w;n++)switch((p=e[n]).type){case"space":continue;case"hr":v+=this.renderer.hr();continue;case"heading":v+=this.renderer.heading(this.parseInline(p.tokens),p.depth,se(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":v+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",o="",s=p.header.length,r=0;r<s;r++)o+=this.renderer.tablecell(this.parseInline(p.tokens.header[r]),{header:!0,align:p.align[r]});for(c+=this.renderer.tablerow(o),u="",s=p.cells.length,r=0;r<s;r++){for(o="",l=(a=p.tokens.cells[r]).length,i=0;i<l;i++)o+=this.renderer.tablecell(this.parseInline(a[i]),{header:!1,align:p.align[i]});u+=this.renderer.tablerow(o)}v+=this.renderer.table(c,u);continue;case"blockquote":u=this.parse(p.tokens),v+=this.renderer.blockquote(u);continue;case"list":for(h=p.ordered,g=p.start,f=p.loose,s=p.items.length,u="",r=0;r<s;r++)b=(k=p.items[r]).checked,m=k.task,d="",k.task&&(x=this.renderer.checkbox(b),f?k.tokens.length>0&&"text"===k.tokens[0].type?(k.tokens[0].text=x+" "+k.tokens[0].text,k.tokens[0].tokens&&k.tokens[0].tokens.length>0&&"text"===k.tokens[0].tokens[0].type&&(k.tokens[0].tokens[0].text=x+" "+k.tokens[0].tokens[0].text)):k.tokens.unshift({type:"text",text:x}):d+=x),d+=this.parse(k.tokens,f),u+=this.renderer.listitem(d,m,b);v+=this.renderer.list(u,h,g);continue;case"html":v+=this.renderer.html(p.text);continue;case"paragraph":v+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(u=p.tokens?this.parseInline(p.tokens):p.text;n+1<w&&"text"===e[n+1].type;)u+="\n"+((p=e[++n]).tokens?this.parseInline(p.tokens):p.text);v+=t?this.renderer.paragraph(u):u;continue;default:var _='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(_);throw new Error(_)}return v},t.parseInline=function(e,t){t=t||this.renderer;var n,r,i="",s=e.length;for(n=0;n<s;n++)switch((r=e[n]).type){case"escape":i+=t.text(r.text);break;case"html":i+=t.html(r.text);break;case"link":i+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":i+=t.image(r.href,r.title,r.text);break;case"strong":i+=t.strong(this.parseInline(r.tokens,t));break;case"em":i+=t.em(this.parseInline(r.tokens,t));break;case"codespan":i+=t.codespan(r.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(r.tokens,t));break;case"text":i+=t.text(r.text);break;default:var l='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}return i},e}(),ae=$,oe=I,ce=w,ue=r.getDefaults,pe=r.changeDefaults,he=r.defaults;function ge(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=ae({},ge.defaults,t||{}),oe(t),n){var r,i=t.highlight;try{r=K.lex(e,t)}catch(e){return n(e)}var s=function(e){var s;if(!e)try{s=le.parse(r,t)}catch(t){e=t}return t.highlight=i,e?n(e):n(null,s)};if(!i||i.length<3)return s();if(delete t.highlight,!r.length)return s();var l=0;return ge.walkTokens(r,(function(e){"code"===e.type&&(l++,setTimeout((function(){i(e.text,e.lang,(function(t,n){if(t)return s(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),0==--l&&s()}))}),0))})),void(0===l&&s())}try{var a=K.lex(e,t);return t.walkTokens&&ge.walkTokens(a,t.walkTokens),le.parse(a,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+ce(e.message+"",!0)+"</pre>";throw e}}return ge.options=ge.setOptions=function(e){return ae(ge.defaults,e),pe(ge.defaults),ge},ge.getDefaults=ue,ge.defaults=he,ge.use=function(e){var t=ae({},e);if(e.renderer&&function(){var n=ge.defaults.renderer||new te,r=function(t){var r=n[t];n[t]=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];var a=e.renderer[t].apply(n,s);return!1===a&&(a=r.apply(n,s)),a}};for(var i in e.renderer)r(i);t.renderer=n}(),e.tokenizer&&function(){var n=ge.defaults.tokenizer||new P,r=function(t){var r=n[t];n[t]=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];var a=e.tokenizer[t].apply(n,s);return!1===a&&(a=r.apply(n,s)),a}};for(var i in e.tokenizer)r(i);t.tokenizer=n}(),e.walkTokens){var n=ge.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t),n&&n(t)}}ge.setOptions(t)},ge.walkTokens=function(e,t){for(var r,i=n(e);!(r=i()).done;){var s=r.value;switch(t(s),s.type){case"table":for(var l,a=n(s.tokens.header);!(l=a()).done;){var o=l.value;ge.walkTokens(o,t)}for(var c,u=n(s.tokens.cells);!(c=u()).done;)for(var p,h=n(c.value);!(p=h()).done;){var g=p.value;ge.walkTokens(g,t)}break;case"list":ge.walkTokens(s.items,t);break;default:s.tokens&&ge.walkTokens(s.tokens,t)}}},ge.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=ae({},ge.defaults,t||{}),oe(t);try{var n=K.lexInline(e,t);return t.walkTokens&&ge.walkTokens(n,t.walkTokens),le.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+ce(e.message+"",!0)+"</pre>";throw e}},ge.Parser=le,ge.parser=le.parse,ge.Renderer=te,ge.TextRenderer=ne,ge.Lexer=K,ge.lexer=K.lex,ge.Tokenizer=P,ge.Slugger=re,ge.parse=ge,ge}()}}]);