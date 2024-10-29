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
  approve: {
    endpoint: 'users/:id/approve',
    method: 'post'
  },
  block: {
    endpoint: 'users/:id/block',
    method: 'post'
  },
  changeEmail: {
    endpoint: 'users/:id/change-email',
    method: 'post'
  },
  changePassword: {
    endpoint: 'users/:id/change-password',
    method: 'post'
  },
  changePhone: {
    endpoint: 'users/:id/change-phone',
    method: 'post'
  },
  confirmEmail: {
    endpoint: 'users/confirm-email',
    method: 'post'
  },
  confirmPhone: {
    endpoint: 'users/confirm-phone',
    method: 'post'
  },
  create: {
    endpoint: 'users',
    method: 'post'
  },
  delete: {
    endpoint: 'users/:id',
    method: 'delete'
  },
  forgotPassword: {
    endpoint: 'users/forgot-password',
    method: 'post'
  },
  get: {
    endpoint: 'users/:id',
    method: 'get'
  },
  getReferralProgram: {
    endpoint: 'users/:id/referral-programs/:program',
    method: 'get'
  },
  list: {
    endpoint: 'users',
    method: 'get'
  },
  listViaPost: {
    endpoint: 'users/list',
    method: 'post'
  },
  patch: {
    endpoint: 'users/:id',
    method: 'patch'
  },
  resendConfirmation: {
    endpoint: 'users/resend-confirmation',
    method: 'post'
  },
  resetPassword: {
    endpoint: 'users/reset-password',
    method: 'post'
  },
  unblock: {
    endpoint: 'users/:id/unblock',
    method: 'post'
  }
};
/**
 * Export `UserResolver`.
 */

var _default = function _default(connection) {
  return (0, _resolverFactory.default)(connection, config);
};

exports.default = _default;
module.exports = exports.default;