"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _easyHttpErrors = require("easy-http-errors");

var _lodash = require("lodash");

var _normalizeUrl = _interopRequireDefault(require("normalize-url"));

var _qs = _interopRequireDefault(require("qs"));

/**
 * Module dependencies.
 */

/**
 * Export `apiUrlResolver`.
 */
var _default = function _default(_ref) {
  var data = _ref.data,
      endpoint = _ref.endpoint,
      host = _ref.host,
      options = _ref.options;

  if (!host) {
    throw new _easyHttpErrors.InternalServerError('API host is not defined');
  }

  var path = (0, _lodash.reduce)(data, function (result, value, key) {
    if (!(0, _lodash.isString)(value)) {
      return result;
    }

    var cleanValue = value.replace(/[&\\/?\\[\]=\\:]/g, '');
    return (0, _lodash.replace)(result, `:${key}`, cleanValue);
  }, endpoint);
  var missingParams = (0, _lodash.map)(path.match(/:[a-zA-Z0-9]+/g), function (value) {
    return value.replace(':', '');
  });

  if (!(0, _lodash.isEmpty)(missingParams)) {
    throw new _easyHttpErrors.InternalServerError('Missing parameters', {
      missingParams
    });
  }

  var params = _qs.default.stringify(options);

  var baseUrl = host.replace(/^(?!(?:\w+:)?\/\/)/, 'https://');
  var url = baseUrl.concat(`/${path}`).concat(`?${params}`);
  return (0, _normalizeUrl.default)(url);
};

exports.default = _default;
module.exports = exports.default;