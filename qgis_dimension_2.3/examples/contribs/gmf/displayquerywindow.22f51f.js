!function(e){function r(r){for(var o,l,u=r[0],s=r[1],i=r[2],p=0,m=[];p<u.length;p++)l=u[p],n[l]&&m.push(n[l][0]),n[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(c&&c(r);m.length;)m.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],o=!0,u=1;u<t.length;u++){var s=t[u];0!==n[s]&&(o=!1)}o&&(a.splice(r--,1),e=l(l.s=t[0]))}return e}var o={},n={25:0},a=[];function l(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=o,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=r,u=u.slice();for(var i=0;i<u.length;i++)r(u[i]);var c=s;a.push([458,0]),t()}({457:function(e,r,t){"use strict";t.r(r);t(571);var o=t(162),n=t(90),a=t(43),l=t(277),u=t(19),s=t(105),i=t(45),c=t(157),p=t(158),m=t(59),f=t(73),h=t(54),d=t(83),g=t(101),v=t(47),y=t(38),w=t(15),b=t(104),C={};C.module=angular.module("gmfapp",["gettext",o.a.module.name,n.a.name,a.a.name,l.a.name,u.a.module.name,b.a.name,s.a.name,c.a.name,p.a.name]),C.module.value("ngeoQueryOptions",{limit:20}),C.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),C.module.constant("defaultTheme","Demo"),C.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),C.queryresultComponent={controller:"AppQueryresultController",template:t(358)},C.module.component("appQueryresult",C.queryresultComponent),C.QueryresultController=function(e){this.result=e},C.QueryresultController.$inject=["ngeoQueryResult"],C.module.controller("AppQueryresultController",C.QueryresultController),C.MainController=function(e,r,t){var o=this;e.loadThemes();var n=new v.a({color:[255,170,0,.6]}),a=new y.a({color:[255,170,0,1],width:2});this.featureStyle=new w.c({fill:n,image:new g.a({fill:n,radius:5,stroke:a}),stroke:a}),this.map=new m.a({layers:[new h.a({source:new d.a})],view:new f.a({projection:i.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),r.setDatasourceMap(this.map),this.themes=void 0,this.treeSource=void 0,this.queryActive=!0,e.getThemesObject().then(function(e){e&&(o.themes=e,o.treeSource=e[3])}),t.init(this.map)},C.MainController.$inject=["gmfThemes","gmfDataSourcesManager","ngeoFeatureOverlayMgr"],C.module.controller("MainController",C.MainController),r.default=C},458:function(e,r,t){t(61),t(60),e.exports=t(457)},571:function(e,r){}});
//# sourceMappingURL=displayquerywindow.22f51f.js.map