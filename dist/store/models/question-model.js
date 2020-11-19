"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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

  (0, _createClass2.default)(QuestionModel, [{
    key: "delete",

    /**
     * Delete.
     */
    value: function _delete() {
      return this._sdk.question.delete(this.id);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.question.patch(this.id, data);
    }
  }]);
  return QuestionModel;
}(_abstractModel.default);

exports.default = QuestionModel;
module.exports = exports.default;