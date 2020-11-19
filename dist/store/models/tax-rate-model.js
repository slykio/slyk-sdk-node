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
 * Export `TaxRateModel`.
 */
var TaxRateModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(TaxRateModel, _AbstractModel);

  function TaxRateModel() {
    (0, _classCallCheck2.default)(this, TaxRateModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TaxRateModel).apply(this, arguments));
  }

  (0, _createClass2.default)(TaxRateModel, [{
    key: "delete",

    /**
     * Delete.
     */
    value: function _delete() {
      return this._sdk.taxRate.delete(this.id);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.taxRate.patch(this.id, data);
    }
  }]);
  return TaxRateModel;
}(_abstractModel.default);

exports.default = TaxRateModel;
module.exports = exports.default;