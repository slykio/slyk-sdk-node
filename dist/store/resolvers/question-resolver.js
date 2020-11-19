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
    endpoint: 'questions',
    method: 'post'
  },
  delete: {
    endpoint: 'questions/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'questions/:id',
    method: 'get'
  },
  list: {
    endpoint: 'questions',
    method: 'get'
  },
  patch: {
    endpoint: 'questions/:id',
    method: 'patch'
  }
};
/**
 * Export `QuestionResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;