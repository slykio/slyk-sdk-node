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
    endpoint: 'products',
    method: 'post'
  },
  createQuestion: {
    endpoint: 'products/:id/questions',
    method: 'post'
  },
  delete: {
    endpoint: 'products/:id',
    method: 'delete'
  },
  deleteQuestion: {
    endpoint: 'products/:productId/questions/:questionId',
    method: 'delete'
  },
  get: {
    endpoint: 'products/:id',
    method: 'get'
  },
  list: {
    endpoint: 'products',
    method: 'get'
  },
  patch: {
    endpoint: 'products/:id',
    method: 'patch'
  },
  reorder: {
    endpoint: 'products/:id/reorder',
    method: 'post'
  },
  reorderQuestion: {
    endpoint: 'products/:productId/questions/:questionId/reorder',
    method: 'post'
  }
};
/**
 * Export `ProductResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;