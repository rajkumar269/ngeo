!function(p){function o(o){for(var r,e,n=o[0],t=o[1],l=o[2],c=0,i=[];c<n.length;c++)e=n[c],a[e]&&i.push(a[e][0]),a[e]=0;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(p[r]=t[r]);for(s&&s(o);i.length;)i.shift()();return f.push.apply(f,l||[]),u()}function u(){for(var o,r=0;r<f.length;r++){for(var e=f[r],n=!0,t=1;t<e.length;t++){var l=e[t];0!==a[l]&&(n=!1)}n&&(f.splice(r--,1),o=c(c.s=e[0]))}return o}var e={},a={7:0},f=[];function c(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return p[o].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=p,c.c=e,c.d=function(o,r,e){c.o(o,r)||Object.defineProperty(o,r,{enumerable:!0,get:e})},c.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.t=function(r,o){if(1&o&&(r=c(r)),8&o)return r;if(4&o&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&o&&"string"!=typeof r)for(var n in r)c.d(e,n,function(o){return r[o]}.bind(null,n));return e},c.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return c.d(r,"a",r),r},c.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},c.p="";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=o,r=r.slice();for(var t=0;t<r.length;t++)o(r[t]);var s=n;f.push([416,0]),u()}({416:function(o,r,e){e(52),e(53),o.exports=e(539)},417:function(o,r){},418:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<table class="ngeo-colorpicker-palette">\n  <tr ng-repeat="colors in ::ctrl.colors">\n    <td\n      ng-repeat="color in ::colors"\n      ng-click="ctrl.setColor(color)"\n      ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}">\n      <div ng-style="::{\'background-color\': color}"></div>\n    </td>\n  </tr>\n</table>\n';return __p}},539:function(o,r,e){"use strict";e.r(r);e(417);var n=angular.module("ngeoColorpicker",[]);n.value("ngeoColorpickerTemplateUrl",function(o,r){var e=r.ngeoColorpickerTemplateurl;return void 0!==e?e:"ngeo/misc/colorpickerComponent"}),n.run(["$templateCache",function(o){o.put("ngeo/misc/colorpickerComponent",e(418))}]),n.component_=function(o){return{restrict:"A",scope:{colors:"<?ngeoColorpicker",color:"=?ngeoColorpickerColor"},controller:"NgeoColorpickerController as ctrl",bindToController:!0,templateUrl:o}},n.component_.$inject=["ngeoColorpickerTemplateUrl"],n.directive("ngeoColorpicker",n.component_),n.DEFAULT_COLORS=[["#F4EB37","#CDDC39","#62AF44","#009D57","#0BA9CC","#4186F0","#3F5BA9","#7C3592","#A61B4A","#DB4436","#F8971B","#F4B400","#795046"],["#F9F7A6","#E6EEA3","#B7DBAB","#7CCFA9","#93D7E8","#9FC3FF","#A7B5D7","#C6A4CF","#D698AD","#EE9C96","#FAD199","#FFDD5E","#B29189"],["#ffffff","#CCCCCC","#777","#000000"]],n.Controller_=function(o,r,e){this.colors=this.colors||n.DEFAULT_COLORS,this.color},n.Controller_.$inject=["$scope","$element","$attrs"],n.Controller_.prototype.setColor=function(o){this.color=o},n.controller("NgeoColorpickerController",n.Controller_);var t=n,l={};l.module=angular.module("app",["gettext",t.name]),l.colorpickerComponent={template:'<div ngeo-colorpicker="$ctrl.colors" ngeo-colorpicker-color="mainCtrl.color"></div>',controller:"AppColorpickerController"},l.module.component("appColorpicker",l.colorpickerComponent),l.ColorPickerController=function(){this.colors=[["red","yellow","green","lightgreen","lightblue","orange","purple"],["#ffffff","#f7f7f7","#c3c3c3","#000000"]]},l.module.controller("AppColorpickerController",l.ColorPickerController),l.MainController=function(o){this.color="red"},l.MainController.$inject=["$scope"],l.module.controller("MainController",l.MainController);r.default=l}});
//# sourceMappingURL=colorpicker.325078.js.map