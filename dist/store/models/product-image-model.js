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
 * Export `ProductImageModel`.
 */
var ProductImageModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(ProductImageModel, _AbstractModel);

  var _super = _createSuper(ProductImageModel);

  function ProductImageModel() {
    (0, _classCallCheck2.default)(this, ProductImageModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ProductImageModel, [{
    key: "delete",
    value:
    /**
     * Delete.
     */
    function _delete() {
      return ProductImageModel.sdk.productImage.delete(this.id, this.productId);
    }
    /**
     * Reorder.
     */

  }, {
    key: "reorder",
    value: function reorder(data) {
      return ProductImageModel.sdk.productImage.reorder(this.id, this.productId, data);
    }
  }]);
  return ProductImageModel;
}(_abstractModel.default);

exports.default = ProductImageModel;
module.exports = exports.default;