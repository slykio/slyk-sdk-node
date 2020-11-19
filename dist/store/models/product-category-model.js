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
 * Export `ProductCategoryModel`.
 */
var ProductCategoryModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(ProductCategoryModel, _AbstractModel);

  function ProductCategoryModel() {
    (0, _classCallCheck2.default)(this, ProductCategoryModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProductCategoryModel).apply(this, arguments));
  }

  (0, _createClass2.default)(ProductCategoryModel, [{
    key: "delete",

    /**
     * Delete.
     */
    value: function _delete() {
      return this._sdk.productCategory.delete(this.id);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.productCategory.patch(this.id, data);
    }
    /**
     * Reorder.
     */

  }, {
    key: "reorder",
    value: function reorder(data) {
      return this._sdk.productCategory.reorder(this.id, data);
    }
  }]);
  return ProductCategoryModel;
}(_abstractModel.default);

exports.default = ProductCategoryModel;
module.exports = exports.default;