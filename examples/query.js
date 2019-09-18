import angular from 'angular';
import {MAPSERVER_PROXY, MAPSERVER_WFS_FEATURE_NS} from './url.js';
import './query.css';
import EPSG21781 from '@geoblocks/proj/src/EPSG_21781.js';

import ngeoDatasourceDataSources from 'ngeo/datasource/DataSources.js';
import ngeoDatasourceOGC from 'ngeo/datasource/OGC.js';
import ngeoMapModule from 'ngeo/map/module.js';

import ngeoMiscBtnComponent from 'ngeo/misc/btnComponent.js';

import ngeoMiscToolActivate from 'ngeo/misc/ToolActivate.js';
import ngeoMiscToolActivateMgr from 'ngeo/misc/ToolActivateMgr.js';
import ngeoQueryComponent from 'ngeo/query/component.js';
import ngeoQueryModule from 'ngeo/query/module.js';
import ngeoQueryModeSelector from 'ngeo/query/ModeSelector.js';

import olMap from 'ol/Map.js';
import olView from 'ol/View.js';
import olLayerImage from 'ol/layer/Image.js';
import olLayerTile from 'ol/layer/Tile.js';
import olSourceImageWMS from 'ol/source/ImageWMS.js';
import olSourceOSM from 'ol/source/OSM.js';


/** @type {angular.IModule} **/
const module = angular.module('app', [
  'gettext',
  ngeoDatasourceDataSources.name,
  ngeoMapModule.name,
  ngeoMiscBtnComponent.name,
  ngeoMiscToolActivateMgr.name,
  ngeoQueryComponent.name,
  ngeoQueryModule.name,
]);


module.run(
  /**
   * @ngInject
   * @param {angular.ITemplateCacheService} $templateCache
   */
  ($templateCache) => {
    // @ts-ignore: webpack
    $templateCache.put('partials/queryresult', require('./partials/queryresult.html'));
  });


module.value('ngeoQueryOptions', {
  'cursorHover': true,
  'limit': 20
});


/**
 * A sample component to display the result.
 *
 * @type {angular.IComponentOptions}
 */
const queryresultComponent = {
  controller: 'AppQueryresultController',
  templateUrl: 'partials/queryresult'
};

module.component('appQueryresult', queryresultComponent);


/**
 * @param {import('ngeo/query/MapQuerent.js').QueryResult} ngeoQueryResult The ngeo query service.
 * @constructor
 * @ngInject
 */
function QueryresultController(ngeoQueryResult) {

  /**
   * @type {import('ngeo/query/MapQuerent.js').QueryResult}
   */
  this.result = ngeoQueryResult;

}


module.controller('AppQueryresultController', QueryresultController);


/**
 * @param {angular.IScope} $scope Scope.
 * @param {import("ngeo/datasource/DataSources.js").DataSource} ngeoDataSources Ngeo data sources service.
 * @param {import("ngeo/misc/ToolActivateMgr.js").ToolActivateMgr} ngeoToolActivateMgr The ngeo ToolActivate
 *     manager.
 * @param {import("ngeo/query/ModeSelector.js").QueryModeSelector} ngeoQueryModeSelector The ngeo QueryModeSelector service

 * @constructor
 * @ngInject
 */
function MainController(
  $scope, ngeoDataSources, ngeoToolActivateMgr, ngeoQueryModeSelector
) {

  /**
   * @type {boolean}
   */
  this.dummyActive = false;

  /**
   * @type {boolean}
   */
  this.queryActive = true;

  /**
   * @type {boolean}
   */
  this.queryAutoClear = true;

  /**
   * @type {import("ngeo/query/ModeSelector.js").QueryModeSelector}
   */
  this.ngeoQueryModeSelector = ngeoQueryModeSelector;

  const source1 = new olSourceImageWMS({
    url: MAPSERVER_PROXY,
    projection: undefined, // should be removed in next OL version
    params: {'LAYERS': 'bus_stop'}
  });
  // @ts-ignore: OL issue
  const busStopLayer = new olLayerImage({
    source: source1
  });

  const source2 = new olSourceImageWMS({
    url: MAPSERVER_PROXY,
    projection: undefined, // should be removed in next OL version
    params: {'LAYERS': 'information'}
  });
  // @ts-ignore: OL issue
  const informationLayer = new olLayerImage({
    source: source2
  });

  /**
   * @type {import("ol/Map.js").default}
   */
  this.map = new olMap({
    layers: [
      new olLayerTile({
        source: new olSourceOSM()
      }),
      informationLayer,
      busStopLayer
    ],
    view: new olView({
      projection: EPSG21781,
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [537635, 152640],
      zoom: 4
    })
  });

  ngeoDataSources.map = this.map;

  ngeoDataSources.collection.push(new ngeoDatasourceOGC({
    id: 1,
    name: 'bus_stop',
    visible: true,
    wmsUrl: MAPSERVER_PROXY,
    wmsLayers: [{
      name: 'bus_stop',
      queryable: true
    }],
    wfsUrl: MAPSERVER_PROXY,
    wfsFeatureNS: MAPSERVER_WFS_FEATURE_NS,
    wfsLayers: [{
      name: 'bus_stop',
      queryable: true
    }]
  }));

  ngeoDataSources.collection.push(new ngeoDatasourceOGC({
    id: 2,
    name: 'information',
    visible: true,
    wmsUrl: MAPSERVER_PROXY,
    wmsLayers: [{
      name: 'information',
      queryable: true
    }],
    wfsFeatureNS: MAPSERVER_WFS_FEATURE_NS,
    wfsUrl: MAPSERVER_PROXY,
    wfsLayers: [{
      name: 'information',
      queryable: true
    }]
  }));

  const queryToolActivate = new ngeoMiscToolActivate(this, 'queryActive');
  ngeoToolActivateMgr.registerTool('mapTools', queryToolActivate, true);

  const dummyToolActivate = new ngeoMiscToolActivate(this, 'dummyActive');
  ngeoToolActivateMgr.registerTool('mapTools', dummyToolActivate);

}


/**
 * @param {boolean|undefined} val Value.
 * @return {boolean|undefined} Value.
 */
MainController.prototype.getSetDummyActive = function(val) {
  if (val !== undefined) {
    this.dummyActive = val;
  } else {
    return this.dummyActive;
  }
};


module.controller('MainController', MainController);


export default module;