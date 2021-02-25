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
 * Export `MovementModel`.
 */
var MovementModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(MovementModel, _AbstractModel);

  var _super = _createSuper(MovementModel);

  function MovementModel() {
    (0, _classCallCheck2.default)(this, MovementModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(MovementModel, [{
    key: "getAsset",
    value:
    /**
     * Get asset.
     */
    function getAsset(options) {
      return MovementModel.sdk.asset.get(this.assetCode, options);
    }
    /**
     * Get wallet.
     */

  }, {
    key: "getWallet",
    value: function getWallet(options) {
      return MovementModel.sdk.wallet.get(this.walletId, options);
    }
    /**
     * Get transaction.
     */

  }, {
    key: "getTransaction",
    value: function getTransaction(options) {
      return MovementModel.sdk.transaction.get(this.transactionId, options);
    }
  }]);
  return MovementModel;
}(_abstractModel.default);

exports.default = MovementModel;
module.exports = exports.default;