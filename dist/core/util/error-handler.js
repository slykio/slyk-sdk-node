"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _httpErrorResolver = _interopRequireDefault(require("../resolvers/http-error-resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `errorHandler`.
 */
var _default = error => {
  const {
    statusCode
  } = error;
  const {
    code: message,
    errors
  } = (0, _lodash.get)(error, 'body', {});
  const HTTPError = (0, _httpErrorResolver.default)(statusCode);
  throw new HTTPError({
    errors,
    message
  });
};

exports.default = _default;