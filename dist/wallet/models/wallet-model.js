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
 * Export `WalletModel`.
 */
var WalletModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(WalletModel, _AbstractModel);

  function WalletModel() {
    (0, _classCallCheck2.default)(this, WalletModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WalletModel).apply(this, arguments));
  }

  (0, _createClass2.default)(WalletModel, [{
    key: "getActivity",

    /**
     * Get activity.
     */
    value: function getActivity(options) {
      return this._sdk.wallet.activity(this.id, options);
    }
    /**
     * Get balance.
     */

  }, {
    key: "getBalance",
    value: function getBalance(options) {
      return this._sdk.wallet.balance(this.id, options);
    }
    /**
     * Get movements.
     */

  }, {
    key: "getMovements",
    value: function getMovements(options) {
      return this._sdk.wallet.movements(this.id, options);
    }
    /**
     * Get transactions.
     */

  }, {
    key: "getTransactions",
    value: function getTransactions(options) {
      return this._sdk.wallet.transactions(this.id, options);
    }
    /**
     * Get Owner.
     */

  }, {
    key: "getOwner",
    value: function getOwner(options) {
      return this.ownerId ? this._sdk.user.get(this.ownerId, options) : undefined;
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.wallet.patch(this.id, data);
    }
  }]);
  return WalletModel;
}(_abstractModel.default);

exports.default = WalletModel;
module.exports = exports.default;