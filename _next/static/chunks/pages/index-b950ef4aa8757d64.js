(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(t,r){var e; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)){if(e.length){var o=a.apply(null,e);o&&t.push(o)}}else if("object"===i){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var u in e)n.call(e,u)&&e[u]&&t.push(u)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0!==(e=(function(){return a}).apply(r,[]))&&(t.exports=e)}()},8312:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(4461)}])},4461:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return S}});var n=e(6042);function a(t,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e.push.apply(e,n)}return e})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t}var i=e(5893),o=e(7294),u=e(5656),l=function(){var t=(0,o.useContext)(u.Global),r=t.gameState,e=t.setGameState,l=(0,o.useRef)(null);return(0,o.useEffect)(function(){r.start?(e(a((0,n.Z)({},r),{time:0})),l.current=setInterval(function(){e(function(t){return a((0,n.Z)({},t),{time:t.time+1})})},1e3)):clearInterval(l.current)},[r.start]),(0,i.jsxs)("div",{className:"timer",children:[(0,i.jsx)("span",{className:"digit digit-".concat(r.time>999?9:Math.floor(r.time/100))}),(0,i.jsx)("span",{className:"digit digit-".concat(r.time>999?9:Math.floor(r.time%100/10))}),(0,i.jsx)("span",{className:"digit digit-".concat(r.time>999?9:r.time%10)})]})},c=function(){var t=(0,o.useContext)(u.Global),r=t.gameState;t.setGameState;var e=(0,o.useState)(r.mine-r.flag),n=e[0],a=e[1];return(0,o.useEffect)(function(){a(r.mine-r.flag)},[r.flag]),(0,i.jsxs)("div",{className:"flagCount",children:[(0,i.jsx)("span",{className:"digit digit-".concat(Math.floor(n/100))}),(0,i.jsx)("span",{className:"digit digit-".concat(Math.floor(n%100/10))}),(0,i.jsx)("span",{className:"digit digit-".concat(n%10)})]})},s=e(4924);function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function m(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,r)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=e(4184),p=e.n(v),g=function(t,r,e,n,a){var i=m(n),o=function(t,r){if(0===e[t][r]){i[t][r]=!0;for(var n=[-1,-1,0,1,1,1,0,-1],u=[0,1,1,1,0,-1,-1,-1],l=0;l<9;l++){var c=t+n[l],s=r+u[l];c>=0&&s>=0&&c<9&&s<9&&!i[c][s]&&!a[c][s]&&(i[c][s]=!0,o(c,s))}}};return o(t,r),i},y=function(t){for(var r=0,e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++)!0===t[e][n]&&(r+=1);return r},d=function(t){var r,e=t.game,l=(0,o.useContext)(u.Global),c=l.gameState,f=l.setGameState,v=(0,o.useState)(0),d=v[0],b=v[1],h=(0,o.useState)(Array(c.r).fill(!1).map(function(){return Array(c.c).fill(!1)})),j=h[0],x=h[1],S=(0,o.useState)(Array(c.r).fill(!1).map(function(){return Array(c.c).fill(!1)})),w=S[0],N=S[1];(0,o.useEffect)(function(){if(e){var t=Array(c.r).fill(!1).map(function(){return Array(c.c).fill(!1)});x(t);var r=Array(c.r).fill(!1).map(function(){return Array(c.c).fill(!1)});N(r)}},[e]),(0,o.useEffect)(function(){c.r*c.c-c.mine===d&&(f(a((0,n.Z)({},c),{result:"win",start:!1})),Z())},[d]);var O=function(t){if(e&&"default"===c.result){c.start||f(a((0,n.Z)({},c),{start:!0}));var r=Number(t.currentTarget.attributes[1].value),i=Number(t.currentTarget.attributes[0].value);if(!w[r][i]){var o=m(j);if(0===e[r][i]){var u=g(r,i,e,o,w),l=y(u);b(l),x(u)}else"mine"===e[r][i]?(o[r][i]=!0,x(o),f(a((0,n.Z)({},c),{result:"lose",start:!1}))):(o[r][i]=!0,b(function(t){return t+1}),x(o))}}},A=function(t){if(t.preventDefault(),"default"===c.result){c.start||f(a((0,n.Z)({},c),{start:!0}));var r=m(w),e=Number(t.currentTarget.attributes[1].value),i=Number(t.currentTarget.attributes[0].value);!j[e][i]&&(r[e][i]?f(a((0,n.Z)({},c),{flag:c.flag-1})):f(a((0,n.Z)({},c),{flag:c.flag+1})),r[e][i]=!r[e][i],N(r))}},Z=function(){for(var t=m(w),r=0;r<c.r;r++)for(var e=0;e<c.c;e++)j[r][e]||(t[r][e]=!0);N(t)},E=function(){};return e?(0,i.jsx)("ul",{className:"grid",children:e.map(function(t,r){var n,a;return(0,i.jsx)("li",{children:(0,i.jsx)("ul",{children:t.map(function(t,n){var a,o=p()("minebox",(a={},(0,s.Z)(a,"open value-".concat(e[n][r]),j[n][r]),(0,s.Z)(a,"close",!j[n][r]),(0,s.Z)(a,"flag",!j[n][r]&&w[n][r]),(0,s.Z)(a,"firework","win"===c.result&&w[n][r]),a));return(0,i.jsx)("li",{"data-y":r,"data-x":n,onClick:O,onContextMenu:A,onMouseDown:E,className:o},"row".concat(n))})})},r)})}):(0,i.jsx)(i.Fragment,{})},b=function(t){return Math.floor(Math.random()*t)},h=function(t,r,e){for(var n=[];n.length<e;){var a=b(t),i=b(r),o=[a,i];if(n.length){var u=!1,l=!0,c=!1,s=void 0;try{for(var f,m=n[Symbol.iterator]();!(l=(f=m.next()).done);l=!0){var v=f.value;if(v[0]===a&&v[1]===i){u=!0;break}}}catch(p){c=!0,s=p}finally{try{l||null==m.return||m.return()}finally{if(c)throw s}}u||n.push(o)}else n.push(o)}return n},j=function(t,r,e,n,a){for(var i=0,o=[-1,-1,0,1,1,1,0,-1],u=[0,1,1,1,0,-1,-1,-1],l=0;l<8;l++){var c=t+o[l],s=r+u[l];c>=0&&s>=0&&c<e&&s<n&&"mine"===a[c][s]&&(i+=1)}return i},x=function(t,r,e){var n=Array(t).fill(0).map(function(){return Array(r).fill(0)}),a=h(t,r,e),i=!0,o=!1,u=void 0;try{for(var l,c=a[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var s=l.value;n[s[0]][s[1]]="mine"}}catch(f){o=!0,u=f}finally{try{i||null==c.return||c.return()}finally{if(o)throw u}}for(var m=0;m<t;m++)for(var v=0;v<r;v++)"mine"!==n[m][v]&&(n[m][v]=j(m,v,t,r,n));return n},S=function(){var t=(0,o.useContext)(u.Global),r=t.gameState,e=t.setGameState,s=(0,o.useState)(),f=s[0],m=s[1];(0,o.useEffect)(function(){m(x(r.r,r.c,r.mine))},[]);var v=function(){r&&e&&(e(a((0,n.Z)({},r),{start:!1,result:"default",time:0,flag:0})),m(x(r.r,r.c,r.mine)))},g=p()("control",{lose:"lose"===r.result,win:"win"===r.result});return(0,i.jsxs)("div",{className:"container",style:{"--mine-columns":r.c},children:[(0,i.jsxs)("div",{className:"top",children:[(0,i.jsx)(c,{}),(0,i.jsx)("button",{className:g,onClick:v}),(0,i.jsx)(l,{})]}),(0,i.jsx)(d,{game:f})]})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);