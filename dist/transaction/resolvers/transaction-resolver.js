"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _resolverFactory = _interopRequireDefault(require("../../core/util/resolver-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Configuration.
 */
const config = {
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
  pay: {
    endpoint: 'transactions/pay',
    method: 'post'
  },
  reject: {
    endpoint: 'transactions/:id/reject',
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

var _default = connection => (0, _resolverFactory.default)(connection, config);

exports.default = _default;