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
    endpoint: 'assets',
    method: 'post'
  },
  get: {
    endpoint: 'assets/:code',
    method: 'get'
  },
  list: {
    endpoint: 'assets',
    method: 'get'
  },
  patch: {
    endpoint: 'assets/:code',
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