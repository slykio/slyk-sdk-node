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
    endpoint: 'identities/:identityId/documents',
    method: 'post'
  },
  delete: {
    endpoint: 'identities/:identityId/documents/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'identities/:identityId/documents/:id',
    method: 'get'
  },
  list: {
    endpoint: 'identities/:identityId/documents',
    method: 'get'
  }
};
/**
 * Export `IdentityDocumentResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;