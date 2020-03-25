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
  cancel: {
    endpoint: 'invites/:code/cancel',
    method: 'post'
  },
  create: {
    endpoint: 'invites',
    method: 'post'
  },
  get: {
    endpoint: 'invites/:code',
    method: 'get'
  },
  list: {
    endpoint: 'invites',
    method: 'get'
  },
  send: {
    endpoint: 'invites/send',
    method: 'post'
  },
  validate: {
    endpoint: 'invites/:code/validate',
    method: 'get'
  }
};
/**
 * Export `InviteResolver`.
 */

var _default = connection => (0, _resolverFactory.default)(connection, config);

exports.default = _default;