"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

/**
 * Module dependencies.
 */

/**
 * Export `sortMiddleware`.
 */
var _default = function _default(data) {
  var sort = (0, _lodash.get)(data, 'options.sort');

  if (!(0, _lodash.isArray)(sort) || !sort.length) {
    return (0, _lodash.omit)(data, 'options.sort');
  }

  var reducedSortArray = (0, _lodash.reduce)(sort, function (result, sortOption) {
    var direction = (0, _lodash.get)(sortOption, 'direction', 'ASC');
    var name = (0, _lodash.get)(sortOption, 'name');

    if (!(0, _lodash.isString)(direction) || !(0, _lodash.isString)(name)) {
      return result;
    }

    var sortString = direction.toUpperCase() === 'DESC' ? `-${name}` : name;
    result.push(sortString);
    return result;
  }, []);

  if (!reducedSortArray.length) {
    return (0, _lodash.omit)(data, 'options.sort');
  }

  var reducedSortString = reducedSortArray.toString();
  return (0, _lodash.set)(data, 'options.sort', reducedSortString);
};

exports.default = _default;
module.exports = exports.default;