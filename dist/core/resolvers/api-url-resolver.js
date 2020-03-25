"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _easyHttpErrors = require("easy-http-errors");

var _lodash = require("lodash");

var _normalizeUrl = _interopRequireDefault(require("normalize-url"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `apiUrlResolver`.
 */
var _default = ({
  data,
  endpoint,
  host,
  options
}) => {
  if (!host) {
    throw new _easyHttpErrors.InternalServerError('API host is not defined');
  }

  const path = (0, _lodash.reduce)(data, (result, value, key) => {
    if (!(0, _lodash.isString)(value)) {
      return result;
    }

    const cleanValue = value.replace(/[&\\/?\\[\]=\\:]/g, '');
    return (0, _lodash.replace)(result, `:${key}`, cleanValue);
  }, endpoint);
  const missingParams = (0, _lodash.map)(path.match(/:[a-zA-Z0-9]+/g), value => value.replace(':', ''));

  if (!(0, _lodash.isEmpty)(missingParams)) {
    throw new _easyHttpErrors.InternalServerError('Missing parameters', {
      missingParams
    });
  }

  const params = _qs.default.stringify(options);

  const baseUrl = host.replace(/^(?!(?:\w+:)?\/\/)/, 'https://');
  const url = baseUrl.concat(`/${path}`).concat(`?${params}`);
  return (0, _normalizeUrl.default)(url);
};

exports.default = _default;