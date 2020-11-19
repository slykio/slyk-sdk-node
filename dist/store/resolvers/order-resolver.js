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
  cancel: {
    endpoint: 'orders/:id',
    method: 'post'
  },
  create: {
    endpoint: 'orders',
    method: 'post'
  },
  fulfill: {
    endpoint: 'orders/:id/fulfill',
    method: 'post'
  },
  get: {
    endpoint: 'orders/:id',
    method: 'get'
  },
  list: {
    endpoint: 'orders',
    method: 'get'
  },
  patch: {
    endpoint: 'orders/:id',
    method: 'patch'
  },
  pay: {
    endpoint: 'orders/:id/pay',
    method: 'post'
  },
  refund: {
    endpoint: 'orders/:id/refund',
    method: 'post'
  },
  unfulfill: {
    endpoint: 'orders/:id/unfulfill',
    method: 'post'
  }
};
/**
 * Export `OrderResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;