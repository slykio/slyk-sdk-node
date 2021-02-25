"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _sdkFactory = _interopRequireDefault(require("../util/sdk-factory"));

/**
 * Module dependencies.
 */

/**
 * Export `AbstractModel`.
 */
var AbstractModel =
/**
 * Constructor.
 */
function AbstractModel(data, _ref) {
  var connection = _ref.connection;
  (0, _classCallCheck2.default)(this, AbstractModel);
  Object.assign(this, data);
  AbstractModel.sdk = (0, _sdkFactory.default)(connection); // eslint-disable-line
};

exports.default = AbstractModel;
module.exports = exports.default;