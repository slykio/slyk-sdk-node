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
  fulfill: {
    endpoint: 'orders/:orderId/lines/:id/fulfill',
    method: 'post'
  },
  get: {
    endpoint: 'orders/:orderId/lines/:id',
    method: 'get'
  },
  list: {
    endpoint: 'orders/:orderId/lines',
    method: 'get'
  },
  unfulfill: {
    endpoint: 'orders/:orderId/lines/:id/unfulfill',
    method: 'post'
  }
};
/**
 * Export `OrderLineResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;