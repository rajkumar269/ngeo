goog.provide('ngeo.format.filter');

goog.require('ol');
goog.require('ol.format.filter.Comparison');


/**
 * @constructor
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!string} lowerBoundary The lower bound of the range.
 * @param {!string} upperBoundary The upper bound of the range.
 * @extends {ol.format.filter.Comparison}
 */
ngeo.format.filter.DateIsBetween = function(propertyName, lowerBoundary, upperBoundary) {
  ol.format.filter.Comparison.call(this, 'PropertyIsBetween', propertyName);

  /**
   * @public
   * @type {!string}
   */
  this.lowerBoundary = lowerBoundary;

  /**
   * @public
   * @type {!string}
   */
  this.upperBoundary = upperBoundary;
};
ol.inherits(ngeo.format.filter.DateIsBetween, ol.format.filter.Comparison);


/**
 * Creates a `<PropertyIsBetween>` comparison operator to test whether an expression
 * value lies within a range given by a lower and upper bound (inclusive).
 *
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!string} lowerBoundary The lower bound of the range.
 * @param {!string} upperBoundary The upper bound of the range.
 * @returns {!ngeo.format.filter.DateIsBetween} `<PropertyIsBetween>` operator.
 */
ngeo.format.filter.dateBetween = function(propertyName, lowerBoundary, upperBoundary) {
  return new ngeo.format.filter.DateIsBetween(propertyName, lowerBoundary, upperBoundary);
};
