!function(i){function e(e){for(var n,r,t=e[0],o=e[1],a=e[2],l=0,u=[];l<t.length;l++)r=t[l],f[r]&&u.push(f[r][0]),f[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(i[n]=o[n]);for(s&&s(e);u.length;)u.shift()();return p.push.apply(p,a||[]),c()}function c(){for(var e,n=0;n<p.length;n++){for(var r=p[n],t=!0,o=1;o<r.length;o++){var a=r[o];0!==f[a]&&(t=!1)}t&&(p.splice(n--,1),e=l(l.s=r[0]))}return e}var r={},f={2:0},p=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=i,l.c=r,l.d=function(e,n,r){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)l.d(r,t,function(e){return n[e]}.bind(null,t));return r},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var n=window.webpackJsonp=window.webpackJsonp||[],t=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var s=t;p.push([519,0]),c()}({519:function(e,n,r){r(71),r(72),e.exports=r(520)},520:function(e,n,r){"use strict";r.r(n);r(521);var t=r(371),o=r(54),a=r(24),l=r(55),u=r(34),i=r(42),c={};c.module=angular.module("gmfapp",["gettext",t.a.name,o.a.name,a.a.module.name]),c.module.value("gmfTreeUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/themes?version=2&background=background"),c.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),c.MainController=function(e){e.loadThemes(),this.map=new u.a({layers:[],view:new i.a({center:[632464,185457],projection:l.a,minZoom:3,zoom:3})})},c.MainController.$inject=["gmfThemes"],c.module.controller("MainController",c.MainController),n.default=c},521:function(e,n){}});
//# sourceMappingURL=backgroundlayerselector.779713.js.map