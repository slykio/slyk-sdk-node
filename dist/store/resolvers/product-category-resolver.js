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
    endpoint: 'categories',
    method: 'post'
  },
  delete: {
    endpoint: 'categories/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'categories/:id',
    method: 'get'
  },
  list: {
    endpoint: 'categories',
    method: 'get'
  },
  patch: {
    endpoint: 'categories/:id',
    method: 'patch'
  },
  reorder: {
    endpoint: 'categories/:id/reorder',
    method: 'post'
  }
};
/**
 * Export `ProductCategoryResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;