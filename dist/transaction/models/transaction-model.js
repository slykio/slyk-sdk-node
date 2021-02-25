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

var _lodash = require("lodash");

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `TransactionModel`.
 */
var TransactionModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(TransactionModel, _AbstractModel);

  var _super = _createSuper(TransactionModel);

  function TransactionModel() {
    (0, _classCallCheck2.default)(this, TransactionModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TransactionModel, [{
    key: "approve",
    value:
    /**
     * Approve.
     */
    function approve(data) {
      return TransactionModel.sdk.transaction.approve(this.id, data);
    }
    /**
     * Confirm.
     */

  }, {
    key: "confirm",
    value: function confirm(data) {
      return TransactionModel.sdk.transaction.confirm(this.id, data);
    }
    /**
     * Confirm.
     */

  }, {
    key: "fail",
    value: function fail(data) {
      return TransactionModel.sdk.transaction.fail(this.id, data);
    }
    /**
     * Get asset.
     */

  }, {
    key: "getAsset",
    value: function getAsset(options) {
      return TransactionModel.sdk.asset.get(this.assetCode, options);
    }
    /**
     * Get destination address.
     */

  }, {
    key: "getDestinationAddress",
    value: function getDestinationAddress(options) {
      return this.destinationAddress ? TransactionModel.sdk.address.get(this.destinationAddress, options) : undefined;
    }
    /**
     * Get destination wallet.
     */

  }, {
    key: "getDestinationWallet",
    value: function getDestinationWallet(options) {
      return this.destinationWalletId ? TransactionModel.sdk.wallet.get(this.destinationWalletId, options) : undefined;
    }
    /**
     * Get origin address.
     */

  }, {
    key: "getOriginAddress",
    value: function getOriginAddress(options) {
      return this.originAddress ? TransactionModel.sdk.address.get(this.originAddress, options) : undefined;
    }
    /**
     * Get origin wallet.
     */

  }, {
    key: "getOriginWallet",
    value: function getOriginWallet(options) {
      return this.originWalletId ? TransactionModel.sdk.wallet.get(this.originWalletId, options) : undefined;
    }
    /**
     * Get movements.
     */

  }, {
    key: "getMovements",
    value: function getMovements(options) {
      return TransactionModel.sdk.movement.list((0, _lodash.merge)({}, options, {
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
      return TransactionModel.sdk.transaction.reject(this.id, data);
    }
  }]);
  return TransactionModel;
}(_abstractModel.default);

exports.default = TransactionModel;
module.exports = exports.default;