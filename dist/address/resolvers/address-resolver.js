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
    endpoint: 'addresses',
    method: 'post'
  },
  get: {
    endpoint: 'addresses/:address',
    method: 'get'
  },
  list: {
    endpoint: 'addresses',
    method: 'get'
  }
};
/**
 * Export `AddressResolver`.
 */

var _default = connection => (0, _resolverFactory.default)(connection, config);

exports.default = _default;