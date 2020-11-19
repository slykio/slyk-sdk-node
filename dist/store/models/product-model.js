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
 * Export `ProductModel`.
 */
var ProductModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(ProductModel, _AbstractModel);

  function ProductModel() {
    (0, _classCallCheck2.default)(this, ProductModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProductModel).apply(this, arguments));
  }

  (0, _createClass2.default)(ProductModel, [{
    key: "createQuestion",

    /**
     * Create question.
     */
    value: function createQuestion(data) {
      return this._sdk.product.createQuestion(this.id, data);
    }
    /**
     * Delete.
     */

  }, {
    key: "delete",
    value: function _delete() {
      return this._sdk.product.delete(this.id);
    }
    /**
     * Delete question.
     */

  }, {
    key: "deleteQuestion",
    value: function deleteQuestion(questionId) {
      return this._sdk.product.deleteQuestion(this.id, questionId);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.product.patch(this.id, data);
    }
    /**
     * Reorder.
     */

  }, {
    key: "reorder",
    value: function reorder(data) {
      return this._sdk.product.reorder(this.id, data);
    }
    /**
     * Reorder question.
     */

  }, {
    key: "reorderQuestion",
    value: function reorderQuestion(questionId, data) {
      return this._sdk.product.reorderQuestion(this.id, questionId, data);
    }
  }]);
  return ProductModel;
}(_abstractModel.default);

exports.default = ProductModel;
module.exports = exports.default;