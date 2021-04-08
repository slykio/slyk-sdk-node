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
  get: {
    endpoint: 'tasks/:taskId/steps/:id',
    method: 'get'
  },
  list: {
    endpoint: 'tasks/:taskId/steps',
    method: 'get'
  },
  patch: {
    endpoint: 'tasks/:taskId/steps/:id',
    method: 'patch'
  }
};
/**
 * Export `TaskStepResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;