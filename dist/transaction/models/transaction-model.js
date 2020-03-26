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

var _lodash = require("lodash");

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

/**
 * Module dependencies.
 */

/**
 * Export `TransactionModel`.
 */
var TransactionModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(TransactionModel, _AbstractModel);

  function TransactionModel() {
    (0, _classCallCheck2.default)(this, TransactionModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TransactionModel).apply(this, arguments));
  }

  (0, _createClass2.default)(TransactionModel, [{
    key: "approve",

    /**
     * Approve.
     */
    value: function approve(data) {
      return this._sdk.transaction.approve(this.id, data);
    }
    /**
     * Confirm.
     */

  }, {
    key: "confirm",
    value: function confirm(data) {
      return this._sdk.transaction.confirm(this.id, data);
    }
    /**
     * Confirm.
     */

  }, {
    key: "fail",
    value: function fail(data) {
      return this._sdk.transaction.fail(this.id, data);
    }
    /**
     * Get asset.
     */

  }, {
    key: "getAsset",
    value: function getAsset(options) {
      return this._sdk.asset.get(this.assetCode, options);
    }
    /**
     * Get destination address.
     */

  }, {
    key: "getDestinationAddress",
    value: function getDestinationAddress(options) {
      return this.destinationAddress ? this._sdk.address.get(this.destinationAddress, options) : undefined;
    }
    /**
     * Get destination wallet.
     */

  }, {
    key: "getDestinationWallet",
    value: function getDestinationWallet(options) {
      return this.destinationWalletId ? this._sdk.wallet.get(this.destinationWalletId, options) : undefined;
    }
    /**
     * Get origin address.
     */

  }, {
    key: "getOriginAddress",
    value: function getOriginAddress(options) {
      return this.originAddress ? this._sdk.address.get(this.originAddress, options) : undefined;
    }
    /**
     * Get origin wallet.
     */

  }, {
    key: "getOriginWallet",
    value: function getOriginWallet(options) {
      return this.originWalletId ? this._sdk.wallet.get(this.originWalletId, options) : undefined;
    }
    /**
     * Get movements.
     */

  }, {
    key: "getMovements",
    value: function getMovements(options) {
      return this._sdk.movement.list((0, _lodash.merge)({}, options, {
        filter: {
          transactionId: this.id
        }
      }));
    }
    /**
     * Reject.
     */

  }, {
    key: "reject",
    value: function reject(data) {
      return this._sdk.transaction.reject(this.id, data);
    }
  }]);
  return TransactionModel;
}(_abstractModel.default);

exports.default = TransactionModel;
module.exports = exports.default;