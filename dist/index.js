"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _easyHttpErrors = require("easy-http-errors");

var _sdkFactory = _interopRequireDefault(require("./core/util/sdk-factory"));

/**
 * Module dependencies.
 */

/**
 * Export `slykSDK`.
 */
var _default = function _default() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      apikey = _ref.apikey,
      _ref$host = _ref.host,
      host = _ref$host === void 0 ? 'api.slyk.io' : _ref$host;

  if (!apikey) {
    throw new _easyHttpErrors.InternalServerError('Missing API key');
  }

  return (0, _sdkFactory.default)({
    apikey,
    host
  });
};

exports.default = _default;
module.exports = exports.default;