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
    endpoint: 'webhooks',
    method: 'post'
  },
  delete: {
    endpoint: 'webhooks/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'webhooks/:id',
    method: 'get'
  },
  list: {
    endpoint: 'webhooks',
    method: 'get'
  },
  patch: {
    endpoint: 'webhooks/:id',
    method: 'patch'
  }
};
/**
 * Export `WebhookResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;