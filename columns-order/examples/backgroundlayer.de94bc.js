!function(c){function e(e){for(var r,n,o=e[0],t=e[1],a=e[2],l=0,u=[];l<o.length;l++)n=o[l],p[n]&&u.push(p[n][0]),p[n]=0;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(c[r]=t[r]);for(g&&g(e);u.length;)u.shift()();return s.push.apply(s,a||[]),i()}function i(){for(var e,r=0;r<s.length;r++){for(var n=s[r],o=!0,t=1;t<n.length;t++){var a=n[t];0!==p[a]&&(o=!1)}o&&(s.splice(r--,1),e=l(l.s=n[0]))}return e}var n={},p={4:0},s=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return c[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=c,l.c=n,l.d=function(e,r,n){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(r,e){if(1&e&&(r=l(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)l.d(n,o,function(e){return r[e]}.bind(null,o));return n},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="";var r=window.webpackJsonp=window.webpackJsonp||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var t=0;t<r.length;t++)e(r[t]);var g=o;s.push([405,0]),i()}({405:function(e,r,n){n(52),n(53),e.exports=n(406)},406:function(e,r,n){"use strict";n.r(r);n(407);var o=n(182),t=n(90),a=n(18),l=n(26),u=n(78),c=n(17),i=n(74),p=n(19),s={};s.module=angular.module("app",["gettext",p.a.name]),s.backgroundlayerComponent={bindings:{map:"=appBackgroundlayerMap"},template:n(408),controller:"AppBackgroundlayerController"},s.module.component("appBackgroundlayer",s.backgroundlayerComponent),s.BackgroundlayerController=function(e,r){var n=this;this.map,this.bgLayers=void 0,this.bgLayer=null,e.get("data/backgroundlayers.json").then(function(e){n.bgLayers=e.data,n.bgLayer=n.bgLayers[0]}),this.backgroundLayerMgr_=r},s.BackgroundlayerController.$inject=["$http","ngeoBackgroundLayerMgr"],s.BackgroundlayerController.prototype.change=function(){var e=this.bgLayer,r=this.getLayer_(e.name);this.backgroundLayerMgr_.set(this.map,r)},s.BackgroundlayerController.prototype.getLayer_=function(e){if("blank"===e)return new c.a;var r=new o.a({layer:e});return new c.a({source:r})},s.module.controller("AppBackgroundlayerController",s.BackgroundlayerController),s.MainController=function(e){this.map=new a.a({view:new l.a({projection:t.a,resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});var r=new u.a({source:new i.a({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});this.map.addLayer(r)},s.MainController.$inject=["$scope"],s.module.controller("MainController",s.MainController),r.default=s},407:function(e,r){},408:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<select class="form-control"\n  ng-options="layer.name for layer in ::$ctrl.bgLayers"\n  ng-model="$ctrl.bgLayer" ng-change="$ctrl.change()">\n</select>\n';return __p}}});
//# sourceMappingURL=backgroundlayer.de94bc.js.map