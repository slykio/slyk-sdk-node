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
  create: {
    endpoint: 'rates',
    method: 'post'
  },
  delete: {
    endpoint: 'rates/:baseAssetCode/:quoteAssetCode',
    method: 'delete'
  },
  get: {
    endpoint: 'rates/:baseAssetCode/:quoteAssetCode',
    method: 'get'
  },
  list: {
    endpoint: 'rates',
    method: 'get'
  },
  patch: {
    endpoint: 'rates/:baseAssetCode/:quoteAssetCode',
    method: 'patch'
  }
};
/**
 * Export `RateResolver`.
 */

var _default = connection => (0, _resolverFactory.default)(connection, config);

exports.default = _default;