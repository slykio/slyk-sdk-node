"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

/**
 * Module dependencies.
 */

/**
 * Export `QuestionModel`.
 */
var QuestionModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(QuestionModel, _AbstractModel);

  function QuestionModel() {
    (0, _classCallCheck2.default)(this, QuestionModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QuestionModel).apply(this, arguments));
  }

  return QuestionModel;
}(_abstractModel.default);

exports.default = QuestionModel;
module.exports = exports.default;