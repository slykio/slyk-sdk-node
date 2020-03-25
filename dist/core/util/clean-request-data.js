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
 * Export `cleanRequestData`.
 */
var _default = (data, endpoint) => {
  return (0, _lodash.reduce)(data, (result, value, key) => {
    if (endpoint.includes(`:${key}`)) {
      return result;
    }

    return (0, _lodash.set)(result, key, value);
  }, {});
};

exports.default = _default;