(function(e){function r(r){var t=r[0];var u=r[1];var l=r[2];var s,p,c=0,m=[];for(;c<t.length;c++){p=t[c];if(a[p]){m.push(a[p][0])}a[p]=0}for(s in u){if(Object.prototype.hasOwnProperty.call(u,s)){e[s]=u[s]}}if(i)i(r);while(m.length){m.shift()()}n.push.apply(n,l||[]);return o()}function o(){var e;for(var r=0;r<n.length;r++){var o=n[r];var t=true;for(var l=1;l<o.length;l++){var s=o[l];if(a[s]!==0)t=false}if(t){n.splice(r--,1);e=u(u.s=o[0])}}return e}var t={};var a={37:0};var n=[];function u(r){if(t[r]){return t[r].exports}var o=t[r]={i:r,l:false,exports:{}};e[r].call(o.exports,o,o.exports,u);o.l=true;return o.exports}u.m=e;u.c=t;u.d=function(e,r,o){if(!u.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:o})}};u.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};u.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};u.d(r,"a",r);return r};u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[];var s=l.push.bind(l);l.push=r;l=l.slice();for(var p=0;p<l.length;p++)r(l[p]);var i=s;n.push([419,0]);return o()})({418:function(e,r,o){"use strict";o.r(r);var t=o(503);var a=o.n(t);var n=o(89);var u=o(165);var l=o(170);var s=o(24);var p=o(119);var i=o(256);var c=o(19);var m=o(28);var v=o(78);var f=o(18);var h=o(74);var y=o(37);var w={};w.module=angular.module("app",["gettext",u["a"].module.name,s["a"].name,p["a"].name,i["a"].name]);w.module.value("ngeoQueryOptions",{limit:20});w.queryresultComponent={controller:"AppQueryresultController",template:o(308)};w.module.component("appQueryresult",w.queryresultComponent);w.QueryresultController=function(e){this.result=e};w.QueryresultController.$inject=["ngeoQueryResult"];w.module.controller("AppQueryresultController",w.QueryresultController);w.MainController=function(e,r){this.queryActive=true;var o=new v["a"]({source:new h["a"]({url:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",params:{LAYERS:"information"}})});var t=new v["a"]({source:new h["a"]({url:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",params:{LAYERS:"bus_stop"}})});this.map=new c["a"]({layers:[new f["a"]({source:new y["b"]}),o,t],view:new m["a"]({projection:n["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:0})});r.map=this.map;r.collection.push(new l["a"]({id:1,name:"bus_stop",visible:true,wfsUrl:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",ogcLayers:[{name:"bus_stop",queryable:true}]}));r.collection.push(new l["a"]({id:2,name:"information",visible:true,wfsUrl:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",ogcLayers:[{name:"information",queryable:true}]}))};w.MainController.$inject=["$scope","ngeoDataSources"];w.module.controller("MainController",w.MainController);r["default"]=w},419:function(e,r,o){o(55);o(54);e.exports=o(418)},503:function(e,r){}});
//# sourceMappingURL=bboxquery.234d03.js.map