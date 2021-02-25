"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `ProductModel`.
 */
var ProductModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(ProductModel, _AbstractModel);

  var _super = _createSuper(ProductModel);

  function ProductModel() {
    (0, _classCallCheck2.default)(this, ProductModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ProductModel, [{
    key: "createQuestion",
    value:
    /**
     * Create question.
     */
    function createQuestion(data) {
      return ProductModel.sdk.product.createQuestion(this.id, data);
    }
    /**
     * Delete.
     */

  }, {
    key: "delete",
    value: function _delete() {
      return ProductModel.sdk.product.delete(this.id);
    }
    /**
     * Delete question.
     */

  }, {
    key: "deleteQuestion",
    value: function deleteQuestion(questionId) {
      return ProductModel.sdk.product.deleteQuestion(this.id, questionId);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return ProductModel.sdk.product.patch(this.id, data);
    }
    /**
     * Reorder.
     */

  }, {
    key: "reorder",
    value: function reorder(data) {
      return ProductModel.sdk.product.reorder(this.id, data);
    }
    /**
     * Reorder question.
     */

  }, {
    key: "reorderQuestion",
    value: function reorderQuestion(questionId, data) {
      return ProductModel.sdk.product.reorderQuestion(this.id, questionId, data);
    }
  }]);
  return ProductModel;
}(_abstractModel.default);

exports.default = ProductModel;
module.exports = exports.default;