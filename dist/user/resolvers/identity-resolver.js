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
    endpoint: 'identities/:id/approve',
    method: 'post'
  },
  cancel: {
    endpoint: 'identities/:id/cancel',
    method: 'post'
  },
  create: {
    endpoint: 'identities',
    method: 'post'
  },
  delete: {
    endpoint: 'identities/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'identities/:id',
    method: 'get'
  },
  list: {
    endpoint: 'identities',
    method: 'get'
  },
  reject: {
    endpoint: 'identities/:id/reject',
    method: 'post'
  },
  submit: {
    endpoint: 'identities/:id/submit',
    method: 'post'
  }
};
/**
 * Export `IdentityResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;