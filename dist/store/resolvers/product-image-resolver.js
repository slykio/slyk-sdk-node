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
    endpoint: 'products/:productId/images',
    method: 'post'
  },
  delete: {
    endpoint: 'products/:productId/images/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'products/:productId/images/:id',
    method: 'get'
  },
  list: {
    endpoint: 'products/:productId/images',
    method: 'get'
  },
  reorder: {
    endpoint: 'products/:productId/images/:id/reorder',
    method: 'post'
  }
};
/**
 * Export `ProductImageResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;