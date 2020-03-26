"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _httpErrorResolver = _interopRequireDefault(require("../resolvers/http-error-resolver"));

/**
 * Module dependencies.
 */

/**
 * Export `errorHandler`.
 */
var _default = function _default(error) {
  var statusCode = error.statusCode;

  var _get = (0, _lodash.get)(error, 'response.body', {}),
      message = _get.code,
      errors = _get.errors;

  var HTTPError = (0, _httpErrorResolver.default)(statusCode);
  throw new HTTPError({
    errors,
    message
  });
};

exports.default = _default;
module.exports = exports.default;