(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(t,r){var e; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)){if(e.length){var o=a.apply(null,e);o&&t.push(o)}}else if("object"===i){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var l in e)n.call(e,l)&&e[l]&&t.push(l)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0!==(e=(function(){return a}).apply(r,[]))&&(t.exports=e)}()},8312:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(400)}])},400:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return Z}});var n=e(6042);function a(t,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e.push.apply(e,n)}return e})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t}var i=e(5893),o=e(7294),l=e(5656),u=function(){var t=(0,o.useContext)(l.Global),r=t.gameState,e=t.setGameState,u=(0,o.useRef)(null);return(0,o.useEffect)(function(){r.start?(e(a((0,n.Z)({},r),{time:0})),u.current=setInterval(function(){e(function(t){return a((0,n.Z)({},t),{time:t.time+1})})},1e3)):clearInterval(u.current)},[r.start]),(0,i.jsxs)("div",{className:"timer",children:[(0,i.jsx)("span",{className:"digit digit-".concat(r.time>999?9:Math.floor(r.time/100))}),(0,i.jsx)("span",{className:"digit digit-".concat(r.time>999?9:Math.floor(r.time%100/10))}),(0,i.jsx)("span",{className:"digit digit-".concat(r.time>999?9:r.time%10)})]})},s=function(){var t=(0,o.useContext)(l.Global),r=t.gameState;t.setGameState;var e=(0,o.useState)(r.mine-r.flag),n=e[0],a=e[1];return(0,o.useEffect)(function(){a(r.mine-r.flag)},[r.flag,r.mine]),(0,i.jsxs)("div",{className:"flagCount",children:[(0,i.jsx)("span",{className:"digit digit-".concat(Math.floor(n/100))}),(0,i.jsx)("span",{className:"digit digit-".concat(Math.floor(n%100/10))}),(0,i.jsx)("span",{className:"digit digit-".concat(n%10)})]})},c=e(4924);function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function m(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function v(t,r){if(t){if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,r)}}function g(t){return function(t){if(Array.isArray(t))return f(t)}(t)||m(t)||v(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=e(4184),p=e.n(d),h=function(t,r,e,n){var a=t.r,i=t.c,o=t.x,l=t.y,u=g(e),s=function(t,e,a,i){if(0===r[t][e]){u[t][e]=!0;for(var o=[-1,-1,0,1,1,1,0,-1],l=[0,1,1,1,0,-1,-1,-1],c=0;c<9;c++){var f=t+o[c],m=e+l[c];f>=0&&m>=0&&f<a&&m<i&&!u[f][m]&&!n[f][m]&&(u[f][m]=!0,s(f,m,a,i))}}};return s(o,l,a,i),u},y=function(t){for(var r=0,e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++)!0===t[e][n]&&(r+=1);return r},b=function(t,r){for(var e=r.r,n=r.c,a=r.x,i=r.y,o=r.value,l=0,u=g(t.open),s=[],c=[-1,-1,0,1,1,1,0,-1],f=[0,1,1,1,0,-1,-1,-1],d=0;d<c.length;d++){var p=a+c[d],y=i+f[d];p>=0&&y>=0&&p<e&&y<n&&(t.flag[p][y]?l+=1:t.open[p][y]||s.push([p,y]))}return l===o&&s.forEach(function(r){var a,i,o=function(t){if(Array.isArray(t))return t}(r)||m(r,2)||v(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=o[0],s=o[1];0===t.game[l][s]?u=h({x:l,y:s,r:e,c:n},t.game,u,t.flag):u[l][s]=!0}),u},x=function(t,r){for(var e=[],n=0;n<r.length;n++)for(var a=0;a<r[n].length;a++)r[n][a]&&"mine"===t[n][a]&&e.push([n,a]);return!!e.length&&e},j=function(t){var r,e=t.game,u=function(t,r){if(!d.length)return!1;for(var e=0;e<d.length;e++)if(d[e][0]===t&&d[e][1]===r)return!0;return!1},s=(0,o.useContext)(l.Global),f=s.gameState,m=s.setGameState,v=(0,o.useState)([]),d=v[0],j=v[1],S=(0,o.useState)(0),N=S[0],w=S[1],A=(0,o.useState)(Array(f.r).fill(!1).map(function(){return Array(f.c).fill(!1)})),O=A[0],Z=A[1],C=(0,o.useState)(Array(f.r).fill(!1).map(function(){return Array(f.c).fill(!1)})),E=C[0],k=C[1],_=(0,o.useState)(null),T=_[0],G=_[1];(0,o.useEffect)(function(){if(e){var t=Array(f.r).fill(!1).map(function(){return Array(f.c).fill(!1)});Z(t);var r=Array(f.r).fill(!1).map(function(){return Array(f.c).fill(!1)});k(r),w(0),j([])}},[e,f.c]),(0,o.useEffect)(function(){f.r*f.c-f.mine===N&&(m(function(t){return a((0,n.Z)({},t),{result:"win",start:!1})}),F())},[N]);var P=function(t){if(e&&"default"===f.result){f.start||m(a((0,n.Z)({},f),{start:!0}));var r=Number(t.currentTarget.attributes[1].value),i=Number(t.currentTarget.attributes[0].value);if(!E[r][i]&&!O[r][i]){var o=g(O);if(0===e[r][i]){var l={x:r,y:i,r:f.r,c:f.c},u=h(l,e,o,E),s=y(u);Z(u),w(s)}else"mine"===e[r][i]?(o[r][i]=!0,Z(o),m(a((0,n.Z)({},f),{result:"lose",start:!1})),G([r,i]),D(),U()):(o[r][i]=!0,w(function(t){return t+1}),Z(o))}}},M=function(t){if(t.preventDefault(),"default"===f.result){f.start||m(a((0,n.Z)({},f),{start:!0}));var r=g(E),e=Number(t.currentTarget.attributes[1].value),i=Number(t.currentTarget.attributes[0].value);!O[e][i]&&(r[e][i]?m(a((0,n.Z)({},f),{flag:f.flag-1})):m(a((0,n.Z)({},f),{flag:f.flag+1})),r[e][i]=!r[e][i],k(r))}},F=function(){for(var t=g(E),r=0;r<f.r;r++)for(var e=0;e<f.c;e++)O[r][e]||(t[r][e]=!0);k(t),m(function(t){return a((0,n.Z)({},t),{flag:t.mine})})},I=function(t){if(e&&"default"===f.result){var r=Number(t.currentTarget.attributes[1].value),i=Number(t.currentTarget.attributes[0].value);if(O[r][i]){for(var o=t.currentTarget.classList,l=/^value/,u=0,s=0;s<o.length;s++)if(l.test(o[s])){u=Number(o[s].split("-")[1]);break}var c={value:u,r:f.r,c:f.c,x:r,y:i},v=b({game:e,open:O,flag:E},c),g=y(v),d=x(e,O);d&&(G(d[0]),m(a((0,n.Z)({},f),{start:!1,result:"lose"})),D(),U()),Z(v),w(g)}}},D=function(){for(var t=g(O),r=0;r<f.r;r++)for(var n=0;n<f.c;n++)e&&"mine"===e[r][n]&&!0==!E[r][n]&&(t[r][n]=!0);Z(t)},U=function(){for(var t=g(d),r=0;r<f.r;r++)for(var n=0;n<f.c;n++)e&&E[r][n]&&"mine"!==e[r][n]&&t.push([r,n]);j(t)};return e?(0,i.jsx)("ul",{className:"grid",children:e.map(function(t,r){var n,a;return console.log(r),(0,i.jsx)("li",{children:(0,i.jsx)("ul",{style:{display:"flex"},children:t.map(function(t,n){var a,o=p()("minebox",(a={},(0,c.Z)(a,"open value-".concat(e[r][n]),O[r][n]),(0,c.Z)(a,"close",!O[r][n]),(0,c.Z)(a,"flag",!O[r][n]&&E[r][n]),(0,c.Z)(a,"firework","win"===f.result&&E[r][n]),(0,c.Z)(a,"bomb",T&&T[0]===r&&T[1]===n),(0,c.Z)(a,"wrongFlag",u(r,n)),a));return(0,i.jsx)("li",{"data-y":n,"data-x":r,onClick:P,onContextMenu:M,onMouseUp:I,className:o},"row".concat(n))})})},r)})}):(0,i.jsx)(i.Fragment,{})},S=function(t){return Math.floor(Math.random()*t)},N=function(t,r,e){for(var n=[];n.length<e;){var a=S(t),i=S(r),o=[a,i];if(n.length){var l=!1,u=!0,s=!1,c=void 0;try{for(var f,m=n[Symbol.iterator]();!(u=(f=m.next()).done);u=!0){var v=f.value;if(v[0]===a&&v[1]===i){l=!0;break}}}catch(g){s=!0,c=g}finally{try{u||null==m.return||m.return()}finally{if(s)throw c}}l||n.push(o)}else n.push(o)}return n},w=function(t,r,e,n,a){for(var i=0,o=[-1,-1,0,1,1,1,0,-1],l=[0,1,1,1,0,-1,-1,-1],u=0;u<8;u++){var s=t+o[u],c=r+l[u];s>=0&&c>=0&&s<e&&c<n&&"mine"===a[s][c]&&(i+=1)}return i},A=function(t,r,e){var n=Array(t).fill(0).map(function(){return Array(r).fill(0)});console.log(n);var a=N(t,r,e),i=!0,o=!1,l=void 0;try{for(var u,s=a[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var c=u.value;n[c[0]][c[1]]="mine"}}catch(f){o=!0,l=f}finally{try{i||null==s.return||s.return()}finally{if(o)throw l}}for(var m=0;m<t;m++)for(var v=0;v<r;v++)"mine"!==n[m][v]&&(n[m][v]=w(m,v,t,r,n));return n},O=function(){var t=(0,o.useContext)(l.Global),r=t.gameState,e=t.setGameState,u=(0,o.useState)(1),s=u[0],c=u[1],f=function(t){return function(){c(t)}};return(0,o.useEffect)(function(){if(1===s){var t=a((0,n.Z)({},r),{start:!1,r:5,c:9,mine:10,flag:0,time:0,result:"default"});e(t)}else if(2===s){var i=a((0,n.Z)({},r),{start:!1,r:16,c:16,mine:40,flag:0,time:0,result:"default"});e(i)}else if(3===s){var o=a((0,n.Z)({},r),{start:!1,r:16,c:30,mine:99,flag:0,time:0,result:"default"});e(o)}},[s]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("input",{type:"radio",name:"level",id:"1",checked:1===s,onChange:f(1)}),(0,i.jsx)("label",{htmlFor:"1",children:"초급"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("input",{type:"radio",name:"level",id:"2",checked:2===s,onChange:f(2)}),(0,i.jsx)("label",{htmlFor:"2",children:"중급"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("input",{type:"radio",name:"level",id:"3",checked:3===s,onChange:f(3)}),(0,i.jsx)("label",{htmlFor:"3",children:"상급"})]})]})})},Z=function(){var t=(0,o.useContext)(l.Global),r=t.gameState,e=t.setGameState,c=(0,o.useState)(),f=c[0],m=c[1];(0,o.useEffect)(function(){m(A(r.r,r.c,r.mine))},[r.c]);var v=function(){r&&e&&(e(a((0,n.Z)({},r),{start:!1,result:"default",time:0,flag:0})),m(A(r.r,r.c,r.mine)))},g=p()("control",{lose:"lose"===r.result,win:"win"===r.result});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(O,{}),(0,i.jsxs)("div",{className:"container",style:{"--mine-columns":r.c},children:[(0,i.jsxs)("div",{className:"top",children:[(0,i.jsx)(s,{}),(0,i.jsx)("button",{className:g,onClick:v}),(0,i.jsx)(u,{})]}),(0,i.jsx)(j,{game:f})]})]})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);