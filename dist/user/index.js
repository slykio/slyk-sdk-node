"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _identityDocumentManager = _interopRequireDefault(require("./managers/identity-document-manager"));

var _identityDocumentModel = _interopRequireDefault(require("./models/identity-document-model"));

var _identityDocumentResolver = _interopRequireDefault(require("./resolvers/identity-document-resolver"));

var _identityManager = _interopRequireDefault(require("./managers/identity-manager"));

var _identityModel = _interopRequireDefault(require("./models/identity-model"));

var _identityResolver = _interopRequireDefault(require("./resolvers/identity-resolver"));

var _userManager = _interopRequireDefault(require("./managers/user-manager"));

var _userModel = _interopRequireDefault(require("./models/user-model"));

var _userResolver = _interopRequireDefault(require("./resolvers/user-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `user`.
 */
var _default = {
  identity: {
    manager: _identityManager.default,
    model: _identityModel.default,
    resolver: _identityResolver.default
  },
  identityDocument: {
    manager: _identityDocumentManager.default,
    model: _identityDocumentModel.default,
    resolver: _identityDocumentResolver.default
  },
  user: {
    manager: _userManager.default,
    model: _userModel.default,
    resolver: _userResolver.default
  }
};
exports.default = _default;
module.exports = exports.default;