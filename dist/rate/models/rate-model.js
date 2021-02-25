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
 * Export `RateModel`.
 */
var RateModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(RateModel, _AbstractModel);

  var _super = _createSuper(RateModel);

  function RateModel() {
    (0, _classCallCheck2.default)(this, RateModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(RateModel, [{
    key: "getBaseAsset",
    value:
    /**
     * Get base asset.
     */
    function getBaseAsset(options) {
      return RateModel.sdk.asset.get(this.baseAssetCode, options);
    }
    /**
     * Get quote asset.
     */

  }, {
    key: "getQuoteAsset",
    value: function getQuoteAsset(options) {
      return RateModel.sdk.asset.get(this.quoteAssetCode, options);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return RateModel.sdk.rate.patch(this.baseAssetCode, this.quoteAssetCode, data);
    }
  }]);
  return RateModel;
}(_abstractModel.default);

exports.default = RateModel;
module.exports = exports.default;