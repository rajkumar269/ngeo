(function(r){function e(e){var t=e[0];var u=e[1];var l=e[2];var i,f,p=0,s=[];for(;p<t.length;p++){f=t[p];if(a[f]){s.push(a[f][0])}a[f]=0}for(i in u){if(Object.prototype.hasOwnProperty.call(u,i)){r[i]=u[i]}}if(c)c(e);while(s.length){s.shift()()}o.push.apply(o,l||[]);return n()}function n(){var r;for(var e=0;e<o.length;e++){var n=o[e];var t=true;for(var l=1;l<n.length;l++){var i=n[l];if(a[i]!==0)t=false}if(t){o.splice(e--,1);r=u(u.s=n[0])}}return r}var t={};var a={3:0};var o=[];function u(e){if(t[e]){return t[e].exports}var n=t[e]={i:e,l:false,exports:{}};r[e].call(n.exports,n,n.exports,u);n.l=true;return n.exports}u.m=r;u.c=t;u.d=function(r,e,n){if(!u.o(r,e)){Object.defineProperty(r,e,{configurable:false,enumerable:true,get:n})}};u.r=function(r){Object.defineProperty(r,"__esModule",{value:true})};u.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};u.d(e,"a",e);return e};u.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)};u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[];var i=l.push.bind(l);l.push=e;l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var c=i;o.push([341,0]);return n()})({340:function(r,e,n){"use strict";n.r(e);var t=n(466);var a=n.n(t);var o=n(19);var u=n(28);var l=n(18);var i=n(37);var f=n(24);var c={};c.module=angular.module("app",["gettext",f["a"].name]);c.MainController=function(){this.map=new o["a"]({layers:[new l["a"]({source:new i["b"]})],view:new u["a"]({center:[0,0],zoom:4})})};c.module.controller("MainController",c.MainController);e["default"]=c},341:function(r,e,n){n(55);n(54);r.exports=n(340)},466:function(r,e){}});
//# sourceMappingURL=simple.305b63.js.map