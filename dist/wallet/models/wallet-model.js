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
 * Export `WalletModel`.
 */
var WalletModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(WalletModel, _AbstractModel);

  var _super = _createSuper(WalletModel);

  function WalletModel() {
    (0, _classCallCheck2.default)(this, WalletModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(WalletModel, [{
    key: "getActivity",
    value:
    /**
     * Get activity.
     */
    function getActivity(options) {
      return WalletModel.sdk.wallet.activity(this.id, options);
    }
    /**
     * Get balance.
     */

  }, {
    key: "getBalance",
    value: function getBalance(options) {
      return WalletModel.sdk.wallet.balance(this.id, options);
    }
    /**
     * Get movements.
     */

  }, {
    key: "getMovements",
    value: function getMovements(options) {
      return WalletModel.sdk.wallet.movements(this.id, options);
    }
    /**
     * Get transactions.
     */

  }, {
    key: "getTransactions",
    value: function getTransactions(options) {
      return WalletModel.sdk.wallet.transactions(this.id, options);
    }
    /**
     * Get Owner.
     */

  }, {
    key: "getOwner",
    value: function getOwner(options) {
      return this.ownerId ? WalletModel.sdk.user.get(this.ownerId, options) : undefined;
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return WalletModel.sdk.wallet.patch(this.id, data);
    }
  }]);
  return WalletModel;
}(_abstractModel.default);

exports.default = WalletModel;
module.exports = exports.default;