(function(e){function t(t){var n=t[0];var i=t[1];var s=t[2];var l,u,c=0,d=[];for(;c<n.length;c++){u=n[c];if(a[u]){d.push(a[u][0])}a[u]=0}for(l in i){if(Object.prototype.hasOwnProperty.call(i,l)){e[l]=i[l]}}if(v)v(t);while(d.length){d.shift()()}o.push.apply(o,s||[]);return r()}function r(){var e;for(var t=0;t<o.length;t++){var r=o[t];var n=true;for(var s=1;s<r.length;s++){var l=r[s];if(a[l]!==0)n=false}if(n){o.splice(t--,1);e=i(i.s=r[0])}}return e}var n={};var a={11:0};var o=[];function i(t){if(n[t]){return n[t].exports}var r=n[t]={i:t,l:false,exports:{}};e[t].call(r.exports,r,r.exports,i);r.l=true;return r.exports}i.m=e;i.c=n;i.d=function(e,t,r){if(!i.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:r})}};i.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=s.push.bind(s);s.push=t;s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var v=l;o.push([360,0]);return r()})({333:function(e,t,r){"use strict";r.r(t);var n=r(476);var a=r(2);var o=r(61);var i={LINE_STRING:"LineString",POINT:"Point",POLYGON:"Polygon"};var s=i;var l=r(102);var u=r(1);var v=r(16);var c=r(80);var d=r(9);var p=r(68);var f=r(301);var h=r(21);var g=r(46);var y=r(91);var _=r(108);var m=r(106);var S=r(31);var C=r(32);var w=r(75);var P=r(40);var L=r(42);var b=r(13);var F=r(122);var G=function e(t){f["a"].call(this);var r=t!==undefined?t:{};this.accuracy_=r.accuracy!==undefined?r.accuracy:e.ACCURACY_;this.encodeStyles_=r.encodeStyles!==undefined?r.encodeStyles:true;this.propertiesFunction_=r.properties!==undefined?r.properties:e.defaultPropertiesFunction_;this.setStyle_=r.setStyle!==undefined?r.setStyle:true;this.prevX_=0;this.prevY_=0;e.LegacyProperties_=r.propertiesType!==undefined&&r.propertiesType;this.defaultValues_=r.defaultValues!==undefined?r.defaultValues:{}};u["d"](G,f["a"]);G.StyleTypes_={LineString:s.LINE_STRING,Point:s.POINT,Polygon:s.POLYGON,MultiLineString:s.LINE_STRING,MultiPoint:s.POINT,MultiPolygon:s.POLYGON};G.LegacyProperties_={};G.prototype.readFeature;G.prototype.readFeatures;G.prototype.readGeometry;G.prototype.writeFeature;G.prototype.writeFeatures;G.prototype.writeGeometry;G.CHAR64_=".-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz";G.ACCURACY_=.1;G.defaultPropertiesFunction_=function(e){return e.getProperties()};G.encodeSignedNumber_=function(e){var t=e<<1;if(e<0){t=~t}return G.encodeNumber_(t)};G.encodeNumber_=function(e){var t="";while(e>=32){t+=G.CHAR64_.charAt(32|e&31);e>>=5}t+=G.CHAR64_.charAt(e);return t};G.encodeStyles_=function(e,t,r){var n=G.StyleTypes_[t];a["a"].assert(n!==undefined);for(var o=0;o<e.length;++o){var i=e[o];var l=i.getFill();var u=i.getImage();var v=i.getStroke();var c=i.getText();if(n==s.POLYGON){if(l!==null){G.encodeStylePolygon_(l,v,r)}}else if(n==s.LINE_STRING){if(v!==null){G.encodeStyleLine_(v,r)}}else if(n==s.POINT){if(u!==null){G.encodeStylePoint_(u,r)}}if(c!==null){G.encodeStyleText_(c,r)}}};G.encodeStyleLine_=function(e,t){G.encodeStyleStroke_(e,t)};G.encodeStylePoint_=function(e,t){if(e instanceof w["a"]){var r=e.getRadius();if(t.length>0){t.push("'")}t.push(encodeURIComponent("pointRadius*"+r));var n=e.getFill();if(n!==null){G.encodeStyleFill_(n,t)}var a=e.getStroke();if(a!==null){G.encodeStyleStroke_(a,t)}}};G.encodeStylePolygon_=function(e,t,r){G.encodeStyleFill_(e,r);if(t!==null){G.encodeStyleStroke_(t,r)}};G.encodeStyleFill_=function(e,t,r){var n=r!==undefined?r:"fillColor";var o=e.getColor();if(o!==null){a["a"].assert(Array.isArray(o),"only supporting fill colors");var i=c["a"](o);a["a"].assert(Array.isArray(i),"fill color must be an array");var s=l["a"].rgbArrayToHex(i);if(t.length>0){t.push("'")}t.push(encodeURIComponent(n+"*"+s))}};G.encodeStyleStroke_=function(e,t){var r=e.getColor();if(r!==null){a["a"].assert(Array.isArray(r));var n=c["a"](r);a["a"].assert(Array.isArray(n),"only supporting stroke colors");var o=l["a"].rgbArrayToHex(n);if(t.length>0){t.push("'")}t.push(encodeURIComponent("strokeColor*"+o))}var i=e.getWidth();if(i!==undefined){if(t.length>0){t.push("'")}t.push(encodeURIComponent("strokeWidth*"+i))}};G.encodeStyleText_=function(e,t){var r=e.getFont();if(r!==undefined){var n=r.split(" ");if(n.length>=3){if(t.length>0){t.push("'")}t.push(encodeURIComponent("fontSize*"+n[1]))}}var a=e.getFill();if(a!==null){G.encodeStyleFill_(a,t,"fontColor")}};G.readLineStringGeometry_=function(e){a["a"].assert(e.substring(0,2)==="l(");a["a"].assert(e[e.length-1]==")");e=e.substring(2,e.length-1);var t=this.decodeCoordinates_(e);var r=new g["a"](null);r.setFlatCoordinates(h["a"].XY,t);return r};G.readMultiLineStringGeometry_=function(e){a["a"].assert(e.substring(0,2)==="L(");a["a"].assert(e[e.length-1]==")");e=e.substring(2,e.length-1);var t=[];var r=[];var n=e.split("'");for(var o=0,i=n.length;o<i;++o){t=this.decodeCoordinates_(n[o],t);r[o]=t.length}var s=new y["a"](null);s.setFlatCoordinates(h["a"].XY,t,r);return s};G.readPointGeometry_=function(e){a["a"].assert(e.substring(0,2)==="p(");a["a"].assert(e[e.length-1]==")");e=e.substring(2,e.length-1);var t=this.decodeCoordinates_(e);a["a"].assert(t.length===2);var r=new S["a"](null);r.setFlatCoordinates(h["a"].XY,t);return r};G.readMultiPointGeometry_=function(e){a["a"].assert(e.substring(0,2)==="P(");a["a"].assert(e[e.length-1]==")");e=e.substring(2,e.length-1);var t=this.decodeCoordinates_(e);var r=new _["a"](null);r.setFlatCoordinates(h["a"].XY,t);return r};G.readPolygonGeometry_=function(e){a["a"].assert(e.substring(0,2)==="a(");a["a"].assert(e[e.length-1]==")");e=e.substring(2,e.length-1);var t=[];var r=[];var n=e.split("'");for(var o=0,i=n.length;o<i;++o){t=this.decodeCoordinates_(n[o],t);var s=t.length;if(o===0){t[s++]=t[0];t[s++]=t[1]}else{t[s++]=t[r[o-1]];t[s++]=t[r[o-1]+1]}r[o]=s}var l=new C["b"](null);l.setFlatCoordinates(h["a"].XY,t,r);return l};G.readMultiPolygonGeometry_=function(e){a["a"].assert(e.substring(0,2)==="A(");a["a"].assert(e[e.length-1]==")");e=e.substring(2,e.length-1);var t=[];var r=[];var n=e.split(")(");for(var o=0,i=n.length;o<i;++o){var s=n[o].split("'");var l=r[o]=[];for(var u=0,v=s.length;u<v;++u){t=this.decodeCoordinates_(s[u],t);var c=t.length;if(u===0){t[c++]=t[0];t[c++]=t[1]}else{t[c++]=t[l[u-1]];t[c++]=t[l[u-1]+1]}l[u]=c}}var d=new m["a"](null);d.setFlatCoordinates(h["a"].XY,t,r);return d};G.setStyleInFeature_=function(e,t){if(e==""){return}var r=G.getStyleProperties_(e,t);var n=r["fillColor"];var a=r["fontSize"];var o=r["fontColor"];var i=r["pointRadius"];var s=r["strokeColor"];var l=r["strokeWidth"];var u=null;if(n!==undefined){u=new P["a"]({color:n})}var v=null;if(s!==undefined&&l!==undefined){v=new L["a"]({color:s,width:l})}var c=null;if(i!==undefined){c=new w["a"]({radius:i,fill:u,stroke:v});u=v=null}var d=null;if(a!==undefined&&o!==undefined){d=new F["a"]({font:a+" sans-serif",fill:new P["a"]({color:o})})}var p=new b["c"]({fill:u,image:c,stroke:v,text:d});t.setStyle(p)};G.setStyleProperties_=function(e,t){var r=G.getStyleProperties_(e,t);var n=t.getGeometry();if(n instanceof S["a"]){if(r["isLabel"]||r[o["a"].IS_TEXT]){delete r["strokeColor"];delete r["fillColor"]}else{delete r["fontColor"];delete r["fontSize"]}}else{delete r["fontColor"];if(n instanceof g["a"]){delete r["fillColor"];delete r["fillOpacity"]}}if(r["fontSize"]){var a=parseFloat(r["fontSize"]);if(r["fontSize"].indexOf("px")!==-1){a=Math.round(a/1.333333)}r["fontSize"]=a}var i={};for(var s in r){var l=r[s];if(G.LegacyProperties_[s]){i[G.LegacyProperties_[s]]=l}else{i[s]=l}}t.setProperties(i)};G.castValue_=function(e,t){var r=[o["a"].ANGLE,o["a"].OPACITY,o["a"].SIZE,o["a"].STROKE,"pointRadius","strokeWidth"];var n=[o["a"].IS_CIRCLE,o["a"].IS_RECTANGLE,o["a"].IS_TEXT,o["a"].SHOW_MEASURE,o["a"].SHOW_LABEL,"isCircle","isRectangle","isLabel","showMeasure","showLabel"];if(d["f"](r,e)){return+t}else if(d["f"](n,e)){return t==="true"?true:false}else{return t}};G.getStyleProperties_=function(e,t){var r=e.split("'");var n={};for(var o=0;o<r.length;++o){var i=decodeURIComponent(r[o]);var s=i.split("*");a["a"].assert(s.length===2);var l=s[0];var u=s[1];n[l]=G.castValue_(l,u)}return n};G.writeLineStringGeometry_=function(e){a["a"].assertInstanceof(e,g["a"]);var t=e.getFlatCoordinates();var r=e.getStride();var n=t.length;return"l("+this.encodeCoordinates_(t,r,0,n)+")"};G.writeMultiLineStringGeometry_=function(e){a["a"].assertInstanceof(e,y["a"]);var t=e.getEnds();var r=t.length;var n=e.getFlatCoordinates();var o=e.getStride();var i=0;var s=["L("];for(var l=0;l<r;++l){var u=t[l];var v=this.encodeCoordinates_(n,o,i,u);if(l!==0){s.push("'")}s.push(v);i=u}s.push(")");return s.join("")};G.writePointGeometry_=function(e){a["a"].assertInstanceof(e,S["a"]);var t=e.getFlatCoordinates();var r=e.getStride();var n=t.length;return"p("+this.encodeCoordinates_(t,r,0,n)+")"};G.writeMultiPointGeometry_=function(e){a["a"].assertInstanceof(e,_["a"]);var t=e.getFlatCoordinates();var r=e.getStride();var n=t.length;return"P("+this.encodeCoordinates_(t,r,0,n)+")"};G.encodeRings_=function(e,t,r,n,a){var o=n.length;for(var i=0;i<o;++i){var s=n[i]-t;var l=this.encodeCoordinates_(e,t,r,s);if(i!==0){a.push("'")}a.push(l);r=n[i]}return r};G.writePolygonGeometry_=function(e){a["a"].assertInstanceof(e,C["b"]);var t=e.getFlatCoordinates();var r=e.getStride();var n=e.getEnds();var o=0;var i=["a("];G.encodeRings_.call(this,t,r,o,n,i);i.push(")");return i.join("")};G.writeMultiPolygonGeometry_=function(e){a["a"].assertInstanceof(e,m["a"]);var t=e.getFlatCoordinates();var r=e.getStride();var n=e.getEndss();var o=n.length;var i=0;var s=["A"];for(var l=0;l<o;++l){var u=n[l];s.push("(");i=G.encodeRings_.call(this,t,r,i,u,s);s.push(")")}return s.join("")};G.GEOMETRY_READERS_={P:G.readMultiPointGeometry_,L:G.readMultiLineStringGeometry_,A:G.readMultiPolygonGeometry_,l:G.readLineStringGeometry_,p:G.readPointGeometry_,a:G.readPolygonGeometry_};G.GEOMETRY_WRITERS_={MultiLineString:G.writeMultiLineStringGeometry_,MultiPoint:G.writeMultiPointGeometry_,MultiPolygon:G.writeMultiPolygonGeometry_,LineString:G.writeLineStringGeometry_,Point:G.writePointGeometry_,Polygon:G.writePolygonGeometry_};G.prototype.decodeCoordinates_=function(e,t){var r=e.length;var n=0;var a=t!==undefined?t:[];var o=a.length;while(n<r){var i=void 0;var s=0;var l=0;do{i=G.CHAR64_.indexOf(e.charAt(n++));l|=(i&31)<<s;s+=5}while(i>=32);var u=l&1?~(l>>1):l>>1;this.prevX_+=u;s=0;l=0;do{i=G.CHAR64_.indexOf(e.charAt(n++));l|=(i&31)<<s;s+=5}while(i>=32);var v=l&1?~(l>>1):l>>1;this.prevY_+=v;a[o++]=this.prevX_*this.accuracy_;a[o++]=this.prevY_*this.accuracy_}return a};G.prototype.encodeCoordinates_=function(e,t,r,n){var a="";for(var o=r;o<n;o+=t){var i=e[o];var s=e[o+1];i=Math.floor(i/this.accuracy_);s=Math.floor(s/this.accuracy_);var l=i-this.prevX_;var u=s-this.prevY_;this.prevX_=i;this.prevY_=s;a+=G.encodeSignedNumber_(l)+G.encodeSignedNumber_(u)}return a};G.prototype.readFeatureFromText=function(e,t){a["a"].assert(e.length>2);a["a"].assert(e[1]==="(");a["a"].assert(e[e.length-1]===")");var r=e.indexOf("~");var n=r>=0?e.substring(0,r)+")":e;var o=this.readGeometryFromText(n,t);var i=new v["a"](o);if(r>=0){var s=e.substring(r+1,e.length-1);r=s.indexOf("~");var l=r>=0?s.substring(0,r):s;if(l!=""){var u=l.split("'");for(var c=0;c<u.length;++c){var d=decodeURIComponent(u[c]);var p=d.split("*");a["a"].assert(p.length===2);var f=p[0];var h=p[1];if(!this.setStyle_&&G.LegacyProperties_[f]){f=G.LegacyProperties_[f]}i.set(f,G.castValue_(f,h))}}if(r>=0){var g=s.substring(r+1);if(this.setStyle_){G.setStyleInFeature_(g,i)}else{G.setStyleProperties_(g,i)}}}return i};G.prototype.readFeaturesFromText=function(e,t){var r=this;a["a"].assert(e[0]==="F");this.prevX_=0;this.prevY_=0;var n=[];e=e.substring(1);while(e.length>0){var o=e.indexOf(")");a["a"].assert(o>=0);var i=this.readFeatureFromText(e.substring(0,o+1),t);n.push(i);e=e.substring(o+1)}n.forEach(function(e){for(var t in r.defaultValues_){var n=G.LegacyProperties_[t];if(e.get(n)===undefined){e.set(n,r.defaultValues_[t].call(null,e))}}});return n};G.prototype.readGeometryFromText=function(e,t){var r=G.GEOMETRY_READERS_[e[0]];a["a"].assert(r!==undefined);return r.call(this,e)};G.prototype.writeFeatureText=function(e,t){var r=[];var n="";var o=e.getGeometry();if(o){n=this.writeGeometryText(o,t)}if(n.length>0){a["a"].assert(n[n.length-1]===")");n=n.substring(0,n.length-1);r.push(n)}var i=[];var s=this.propertiesFunction_(e);for(var l in s){var u=s[l];if(u!==undefined&&u!==null&&l!==e.getGeometryName()){if(i.length!==0){i.push("'")}var v=encodeURIComponent(l.replace(/[()'*]/g,"_")+"*"+u.toString().replace(/[()'*]/g,"_"));i.push(v)}}if(i.length>0){r.push("~");Array.prototype.push.apply(r,i)}if(this.encodeStyles_){var c=e.getStyleFunction();if(c!==undefined){var d=c.call(e,0);if(d!==null){var p=[];d=Array.isArray(d)?d:[d];G.encodeStyles_(d,o.getType(),p);if(p.length>0){r.push("~");Array.prototype.push.apply(r,p)}}}}r.push(")");return r.join("")};G.prototype.writeFeaturesText=function(e,t){this.prevX_=0;this.prevY_=0;var r=[];if(e.length>0){r.push("F");for(var n=0,a=e.length;n<a;++n){r.push(this.writeFeatureText(e[n],t))}}return r.join("")};G.prototype.writeGeometryText=function(e,t){var r=G.GEOMETRY_WRITERS_[e.getType()];a["a"].assert(r!==undefined);var n=p["b"](e,true,t);return r.call(this,n)};var M=G;var A=r(24);var R=r(141);var T=r(94);var I=r(263);var x=r(19);var E=r(72);var O=r(18);var N=r(41);var Y=r(37);var k=r(33);var D={};D.module=angular.module("app",["gettext",A["a"].name,R["a"].name,I["a"].name]);D.mapComponent={controller:"AppMapController as ctrl",bindings:{map:"=appMap"},template:"<div ngeo-map=ctrl.map></div>"};D.module.component("appMap",D.mapComponent);D.MapComponentController=function(e,t){this.map;this.ngeoLocation_=e;this.ngeoDebounce_=t};D.MapComponentController.$inject=["ngeoLocation","ngeoDebounce"];D.module.controller("AppMapController",D.MapComponentController);D.MapComponentController.prototype.$onInit=function(){var e=this;var t=this.map.getView();var r=this.ngeoLocation_.getParam("z");r=r!==undefined?+r:4;var n=this.ngeoLocation_.getParam("x");var a=this.ngeoLocation_.getParam("y");var o=n!==undefined&&a!==undefined?[+n,+a]:[0,0];t.setCenter(o);t.setZoom(r);this.ngeoLocation_.updateParams({z:r,x:Math.round(o[0]),y:Math.round(o[1])});t.on("propertychange",this.ngeoDebounce_(function(r){var n=t.getCenter();var a={z:t.getZoom(),x:Math.round(n[0]),y:Math.round(n[1])};e.ngeoLocation_.updateParams(a)},300,true))};D.drawComponent={controller:"AppDrawController as ctrl",bindings:{map:"=appDrawMap",layer:"=appDrawLayer"},template:"<label>Enable drawing:"+'<input type="checkbox" ng-model="ctrl.interaction.active" />'+"</label><br>"+'<button ng-click="ctrl.clearLayer()">Clear layer</button>'};D.module.component("appDraw",D.drawComponent);D.DrawComponentController=function(e,t){this.map;this.layer;this.ngeoLocation_=t;this.scope_=e;this.featureSeq_=0;this.interaction};D.DrawComponentController.$inject=["$scope","ngeoLocation"];D.DrawComponentController.prototype.$onInit=function(){var e=this;var t=this.layer.getSource();this.interaction=new E["a"]({type:"LineString",source:t});this.interaction.setActive(false);this.map.addInteraction(this.interaction);T["a"].interaction(this.interaction);this.interaction.on("drawend",function(e){e.feature.set("id",++this.featureSeq_)},this);var r=new M;t.on("addfeature",function(n){var a=n.feature;a.setStyle(new b["c"]({stroke:new L["a"]({color:[255,0,0,1],width:2})}));var o=t.getFeatures();var i=r.writeFeatures(o);e.scope_.$applyAsync(function(){e.ngeoLocation_.updateParams({features:i})})});var n=this.ngeoLocation_.getParam("features");if(n!==undefined){var a=r.readFeatures(n);this.featureSeq_=a.length;t.addFeatures(a)}};D.DrawComponentController.prototype.clearLayer=function(){this.layer.getSource().clear(true);this.featureSeq_=0;this.ngeoLocation_.deleteParam("features")};D.module.controller("AppDrawController",D.DrawComponentController);D.MainController=function(){this.map=new x["a"]({layers:[new O["a"]({source:new Y["b"]})]});var e=new k["b"];this.vectorLayer=new N["a"]({source:e});this.vectorLayer.setMap(this.map)};D.module.controller("MainController",D.MainController);var X=t["default"]=D},360:function(e,t,r){r(55);r(54);e.exports=r(333)},476:function(e,t){}});
//# sourceMappingURL=permalink.6f7199.js.map