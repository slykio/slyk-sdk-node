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
    endpoint: 'user-bank-accounts',
    method: 'post'
  },
  delete: {
    endpoint: 'user-bank-accounts/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'user-bank-accounts/:id',
    method: 'get'
  },
  list: {
    endpoint: 'user-bank-accounts',
    method: 'get'
  },
  patch: {
    endpoint: 'user-bank-accounts/:id',
    method: 'patch'
  }
};
/**
 * Export `UserBankAccountResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;