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
  activity: {
    endpoint: 'wallets/:id/activity',
    method: 'get'
  },
  balance: {
    endpoint: 'wallets/:id/balance',
    method: 'get'
  },
  create: {
    endpoint: 'wallets',
    method: 'post'
  },
  get: {
    endpoint: 'wallets/:id',
    method: 'get'
  },
  globalActivity: {
    endpoint: 'wallets/activity',
    method: 'get'
  },
  globalBalance: {
    endpoint: 'wallets/balance',
    method: 'get'
  },
  list: {
    endpoint: 'wallets',
    method: 'get'
  },
  movements: {
    endpoint: 'wallets/:id/movements',
    method: 'get'
  },
  patch: {
    endpoint: 'wallets/:id',
    method: 'patch'
  },
  transactions: {
    endpoint: 'wallets/:id/transactions',
    method: 'get'
  }
};
/**
 * Export `WalletResolver`.
 */

var _default = connection => (0, _resolverFactory.default)(connection, config);

exports.default = _default;