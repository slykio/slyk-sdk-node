"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inviteManager = _interopRequireDefault(require("./managers/invite-manager"));

var _inviteModel = _interopRequireDefault(require("./models/invite-model"));

var _inviteResolver = _interopRequireDefault(require("./resolvers/invite-resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `invite`.
 */
var _default = {
  manager: _inviteManager.default,
  model: _inviteModel.default,
  resolver: _inviteResolver.default
};
exports.default = _default;