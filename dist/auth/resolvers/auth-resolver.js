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
  login: {
    endpoint: 'auth/token',
    method: 'post'
  },
  logout: {
    endpoint: 'auth/token/revoke',
    method: 'post'
  },
  refresh: {
    endpoint: 'auth/token/refresh',
    method: 'post'
  },
  validate: {
    endpoint: 'auth/token/validate',
    method: 'post'
  }
};
/**
 * Export `AuthResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;