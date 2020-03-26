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
    endpoint: 'rates',
    method: 'post'
  },
  delete: {
    endpoint: 'rates/:baseAssetCode/:quoteAssetCode',
    method: 'delete'
  },
  get: {
    endpoint: 'rates/:baseAssetCode/:quoteAssetCode',
    method: 'get'
  },
  list: {
    endpoint: 'rates',
    method: 'get'
  },
  patch: {
    endpoint: 'rates/:baseAssetCode/:quoteAssetCode',
    method: 'patch'
  }
};
/**
 * Export `RateResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;