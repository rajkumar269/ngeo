/**
 * @module gmf.editing.EnumerateAttribute
 */
import angular from 'angular';

const exports = class {

  /**
   * The EnumerateAttribute is responsible of fetching all possible of a given
   * attribute of a given data source (gmf layer).
   *
   * @param {angular.IHttpService} $http Angular $http service.
   * @param {string} gmfLayersUrl Url to the GeoMapFish layers service.
   * @ngInject
   * @ngdoc service
   * @ngname gmfEnumerateAttribute
   */
  constructor($http, gmfLayersUrl) {

    // === Injected services ===

    /**
     * @type {angular.IHttpService}
     * @private
     */
    this.http_ = $http;

    /**
     * @type {string}
     * @private
     */
    this.baseUrl_ = gmfLayersUrl;

    /**
     * @type {Object.<string, !angular.IPromise>}
     * @private
     */
    this.promises_ = {};
  }

  /**
   * @param {gmf.datasource.OGC} dataSource Data source.
   * @param {string} attribute Attribute name.
   * @return {angular.IPromise} Promise.
   */
  getAttributeValues(dataSource, attribute) {
    const promiseId = `${dataSource.id}_${attribute}`;
    const name = dataSource.name;
    if (!this.promises_[promiseId]) {
      const url = `${this.baseUrl_}/${name}/values/${attribute}`;
      this.promises_[promiseId] = this.http_.get(url).then(
        this.handleGetAttributeValues_.bind(this));
    }
    return this.promises_[promiseId];
  }

  /**
   * @param {angular.IHttpResponse} resp Ajax response.
   * @return {Array.<gmfThemes.GmfLayerAttributeValue>} List of the attribute
   *     values.
   * @export
   */
  handleGetAttributeValues_(resp) {
    const data = /** @type {gmfThemes.GmfLayerAttributeValuesResponse} */ (
      resp.data);
    return data.items;
  }

};


/**
 * @type {!angular.IModule}
 */
exports.module = angular.module('gmfEnumerateAttribute', []);
exports.module.service('gmfEnumerateAttribute', exports);


export default exports;
