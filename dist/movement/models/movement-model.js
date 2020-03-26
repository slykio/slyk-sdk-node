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
 * Export `MovementModel`.
 */
var MovementModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(MovementModel, _AbstractModel);

  function MovementModel() {
    (0, _classCallCheck2.default)(this, MovementModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MovementModel).apply(this, arguments));
  }

  (0, _createClass2.default)(MovementModel, [{
    key: "getAsset",

    /**
     * Get asset.
     */
    value: function getAsset(options) {
      return this._sdk.asset.get(this.assetCode, options);
    }
    /**
     * Get wallet.
     */

  }, {
    key: "getWallet",
    value: function getWallet(options) {
      return this._sdk.wallet.get(this.walletId, options);
    }
    /**
     * Get transaction.
     */

  }, {
    key: "getTransaction",
    value: function getTransaction(options) {
      return this._sdk.transaction.get(this.transactionId, options);
    }
  }]);
  return MovementModel;
}(_abstractModel.default);

exports.default = MovementModel;
module.exports = exports.default;