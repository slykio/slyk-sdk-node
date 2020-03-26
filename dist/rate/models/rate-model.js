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
 * Export `RateModel`.
 */
var RateModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(RateModel, _AbstractModel);

  function RateModel() {
    (0, _classCallCheck2.default)(this, RateModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RateModel).apply(this, arguments));
  }

  (0, _createClass2.default)(RateModel, [{
    key: "getBaseAsset",

    /**
     * Get base asset.
     */
    value: function getBaseAsset(options) {
      return this._sdk.asset.get(this.baseAssetCode, options);
    }
    /**
     * Get quote asset.
     */

  }, {
    key: "getQuoteAsset",
    value: function getQuoteAsset(options) {
      return this._sdk.asset.get(this.quoteAssetCode, options);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.rate.patch(this.baseAssetCode, this.quoteAssetCode, data);
    }
  }]);
  return RateModel;
}(_abstractModel.default);

exports.default = RateModel;
module.exports = exports.default;