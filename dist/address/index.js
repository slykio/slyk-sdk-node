"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addressManager = _interopRequireDefault(require("./managers/address-manager"));

var _addressModel = _interopRequireDefault(require("./models/address-model"));

var _addressResolver = _interopRequireDefault(require("./resolvers/address-resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `address`.
 */
var _default = {
  manager: _addressManager.default,
  model: _addressModel.default,
  resolver: _addressResolver.default
};
exports.default = _default;