"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _library = _interopRequireDefault(require("../library"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `sdkFactory`.
 */
var _default = connection => {
  return (0, _lodash.mapValues)(_library.default, ({
    manager: Manager,
    model,
    resolver
  }) => {
    return new Manager({
      connection,
      model,
      resolver
    });
  });
};

exports.default = _default;