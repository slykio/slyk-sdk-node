"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _easyHttpErrors = require("easy-http-errors");

var _sdkFactory = _interopRequireDefault(require("./core/util/sdk-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `slykSDK`.
 */
var _default = ({
  apikey,
  host = 'api.slyk.io'
} = {}) => {
  if (!apikey) {
    throw new _easyHttpErrors.InternalServerError('Missing API key');
  }

  return (0, _sdkFactory.default)({
    apikey,
    host
  });
};

exports.default = _default;