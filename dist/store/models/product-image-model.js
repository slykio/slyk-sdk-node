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
 * Export `ProductImageModel`.
 */
var ProductImageModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(ProductImageModel, _AbstractModel);

  function ProductImageModel() {
    (0, _classCallCheck2.default)(this, ProductImageModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProductImageModel).apply(this, arguments));
  }

  (0, _createClass2.default)(ProductImageModel, [{
    key: "delete",

    /**
     * Delete.
     */
    value: function _delete() {
      return this._sdk.productImage.delete(this.id, this.productId);
    }
    /**
     * Reorder.
     */

  }, {
    key: "reorder",
    value: function reorder(data) {
      return this._sdk.productImage.reorder(this.id, this.productId, data);
    }
  }]);
  return ProductImageModel;
}(_abstractModel.default);

exports.default = ProductImageModel;
module.exports = exports.default;