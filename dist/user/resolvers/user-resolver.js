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
  approve: {
    endpoint: 'users/:id/approve',
    method: 'post'
  },
  block: {
    endpoint: 'users/:id/block',
    method: 'post'
  },
  changePassword: {
    endpoint: 'users/:id/change-password',
    method: 'post'
  },
  create: {
    endpoint: 'users',
    method: 'post'
  },
  get: {
    endpoint: 'users/:id',
    method: 'get'
  },
  list: {
    endpoint: 'users',
    method: 'get'
  },
  patch: {
    endpoint: 'users/:id',
    method: 'patch'
  },
  unblock: {
    endpoint: 'users/:id/unblock',
    method: 'post'
  }
};
/**
 * Export `UserResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;