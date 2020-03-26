"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _resolverFactory = _interopRequireDefault(require("../../core/util/resolver-factory"));

/**
 * Module dependencies.
 */

/**
 * Configuration.
 */
var config = {
  create: {
    endpoint: 'connections',
    method: 'post'
  },
  get: {
    endpoint: 'connections/:id',
    method: 'get'
  },
  list: {
    endpoint: 'connections',
    method: 'get'
  },
  patch: {
    endpoint: 'connections/:id',
    method: 'patch'
  }
};
/**
 * Export `AssetResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;