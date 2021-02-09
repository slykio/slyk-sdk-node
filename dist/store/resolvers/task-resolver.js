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
  complete: {
    endpoint: 'tasks/:id/complete',
    method: 'post'
  },
  create: {
    endpoint: 'tasks',
    method: 'post'
  },
  delete: {
    endpoint: 'tasks/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'tasks/:id',
    method: 'get'
  },
  getStatistics: {
    endpoint: 'users/:id/tasks/statistics',
    method: 'get'
  },
  list: {
    endpoint: 'tasks',
    method: 'get'
  },
  patch: {
    endpoint: 'tasks/:id',
    method: 'patch'
  },
  reorder: {
    endpoint: 'tasks/:id/reorder',
    method: 'post'
  }
};
/**
 * Export `TaskResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;