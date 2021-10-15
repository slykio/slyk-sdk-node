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
    endpoint: 'transactions/:id/approve',
    method: 'post'
  },
  confirm: {
    endpoint: 'transactions/:id/confirm',
    method: 'post'
  },
  deposit: {
    endpoint: 'transactions/deposit',
    method: 'post'
  },
  fail: {
    endpoint: 'transactions/:id/fail',
    method: 'post'
  },
  get: {
    endpoint: 'transactions/:id',
    method: 'get'
  },
  list: {
    endpoint: 'transactions',
    method: 'get'
  },
  patch: {
    endpoint: 'transactions/:id',
    method: 'patch'
  },
  patchMultiple: {
    endpoint: 'transactions',
    method: 'patch'
  },
  pay: {
    endpoint: 'transactions/pay',
    method: 'post'
  },
  reject: {
    endpoint: 'transactions/:id/reject',
    method: 'post'
  },
  request: {
    endpoint: 'transactions/request',
    method: 'post'
  },
  send: {
    endpoint: 'transactions/send',
    method: 'post'
  },
  transfer: {
    endpoint: 'transactions/transfer',
    method: 'post'
  },
  withdrawal: {
    endpoint: 'transactions/withdrawal',
    method: 'post'
  }
};
/**
 * Export `TransactionResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;