!function(l){function e(e){for(var t,r,n=e[0],o=e[1],i=e[2],a=0,u=[];a<n.length;a++)r=n[a],c[r]&&u.push(c[r][0]),c[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(f&&f(e);u.length;)u.shift()();return p.push.apply(p,i||[]),s()}function s(){for(var e,t=0;t<p.length;t++){for(var r=p[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==c[i]&&(n=!1)}n&&(p.splice(t--,1),e=a(a.s=r[0]))}return e}var r={},c={4:0},p=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=l,a.c=r,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var f=n;p.push([494,0]),s()}({494:function(e,t,r){"use strict";r.r(t);var n=r(209),o=(r(495),r(152)),i=r(130),a=r(114),u=r(21),l=r(153),s=r.n(l),c=r(154),p=r.n(c);window.requestAnimationFrame||(alert("Your browser is not supported, please update it or use another one. You will be redirected.\n\nVotre navigateur n'est pas supporté, veuillez le mettre à jour ou en utiliser un autre. Vous allez être redirigé.\n\nIhr Browser wird nicht unterstützt, bitte aktualisieren Sie ihn oder verwenden Sie einen anderen. Sie werden weitergeleitet."),window.location="http://geomapfish.org/");var f=function(e,t){if(n.a.call(this,{autorotate:!1,srid:21781,mapViewConfig:{center:[632464,185457],zoom:3,resolutions:[250,100,50,20,10,5,2,1,.5,.25,.1,.05]}},e,t),this.elevationLayersConfig=[{name:"aster",unit:"m"},{name:"srtm",unit:"m"}],this.searchCoordinatesProjections=[a.a,i.a,"EPSG:4326"],t.has("sentryUrl")){var r=t.has("sentryOptions")?t.get("sentryOptions"):void 0;(new s.a).config(t.get("sentryUrl"),r).addPlugin(p.a).install()}};f.$inject=["$scope","$injector"],f.$inject=["$scope","$injector"],u.c(f,n.a),(f.module=angular.module("Appmobile",[o.a.module.name,n.a.module.name])).controller("MobileController",f),t.default=f},495:function(e,t){}});
//# sourceMappingURL=mobile.b55bd3.js.map