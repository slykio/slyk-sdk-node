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
    endpoint: 'tax-rates',
    method: 'post'
  },
  delete: {
    endpoint: 'tax-rates/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'tax-rates/:id',
    method: 'get'
  },
  list: {
    endpoint: 'tax-rates',
    method: 'get'
  },
  patch: {
    endpoint: 'tax-rates/:id',
    method: 'patch'
  }
};
/**
 * Export `TaxRateResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;