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
 * Export `OrderModel`.
 */
var OrderModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(OrderModel, _AbstractModel);

  function OrderModel() {
    (0, _classCallCheck2.default)(this, OrderModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OrderModel).apply(this, arguments));
  }

  (0, _createClass2.default)(OrderModel, [{
    key: "cancel",

    /**
     * Cancel.
     */
    value: function cancel(data) {
      return this._sdk.order.cancel(this.id, data);
    }
    /**
     * Fulfill.
     */

  }, {
    key: "fulfill",
    value: function fulfill(data) {
      return this._sdk.order.fulfill(this.id, data);
    }
    /**
     * Fulfill order line.
     */

  }, {
    key: "fulfillOrderLine",
    value: function fulfillOrderLine(orderLineId, data) {
      return this._sdk.orderLine.fulfill(orderLineId, this.id, data);
    }
    /**
     * Get order line.
     */

  }, {
    key: "getOrderLine",
    value: function getOrderLine(orderLineId, options) {
      return this._sdk.orderLine.get(orderLineId, this.id, options);
    }
    /**
     * Get order lines.
     */

  }, {
    key: "getOrderLines",
    value: function getOrderLines(options) {
      return this._sdk.orderLine.list(this.id, options);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.order.patch(this.id, data);
    }
    /**
     * Pay.
     */

  }, {
    key: "pay",
    value: function pay(data) {
      return this._sdk.order.pay(this.id, data);
    }
    /**
     * Refund.
     */

  }, {
    key: "refund",
    value: function refund(data) {
      return this._sdk.order.refund(this.id, data);
    }
    /**
     * Unfulfill.
     */

  }, {
    key: "unfulfill",
    value: function unfulfill() {
      return this._sdk.order.unfulfill(this.id);
    }
    /**
     * Unfulfill order line.
     */

  }, {
    key: "unfulfillOrderLine",
    value: function unfulfillOrderLine(orderLineId) {
      return this._sdk.orderLine.unfulfill(orderLineId, this.id);
    }
  }]);
  return OrderModel;
}(_abstractModel.default);

exports.default = OrderModel;
module.exports = exports.default;