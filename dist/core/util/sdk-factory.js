"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _library = _interopRequireDefault(require("../library"));

/**
 * Module dependencies.
 */

/**
 * Export `sdkFactory`.
 */
var _default = function _default(connection) {
  return (0, _lodash.mapValues)(_library.default, function (_ref) {
    var Manager = _ref.manager,
        model = _ref.model,
        resolver = _ref.resolver;
    return new Manager({
      connection,
      model,
      resolver
    });
  });
};

exports.default = _default;
module.exports = exports.default;