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
    endpoint: 'invites/:code/cancel',
    method: 'post'
  },
  create: {
    endpoint: 'invites',
    method: 'post'
  },
  get: {
    endpoint: 'invites/:code',
    method: 'get'
  },
  list: {
    endpoint: 'invites',
    method: 'get'
  },
  send: {
    endpoint: 'invites/send',
    method: 'post'
  },
  validate: {
    endpoint: 'invites/:code/validate',
    method: 'get'
  }
};
/**
 * Export `InviteResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;