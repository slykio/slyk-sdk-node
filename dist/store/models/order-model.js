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
 * Export `OrderModel`.
 */
var OrderModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(OrderModel, _AbstractModel);

  var _super = _createSuper(OrderModel);

  function OrderModel() {
    (0, _classCallCheck2.default)(this, OrderModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(OrderModel, [{
    key: "cancel",
    value:
    /**
     * Cancel.
     */
    function cancel(data) {
      return OrderModel.sdk.order.cancel(this.id, data);
    }
    /**
     * Fulfill.
     */

  }, {
    key: "fulfill",
    value: function fulfill(data) {
      return OrderModel.sdk.order.fulfill(this.id, data);
    }
    /**
     * Fulfill order line.
     */

  }, {
    key: "fulfillOrderLine",
    value: function fulfillOrderLine(orderLineId, data) {
      return OrderModel.sdk.orderLine.fulfill(orderLineId, this.id, data);
    }
    /**
     * Get order.
     */

  }, {
    key: "get",
    value: function get(options) {
      return OrderModel.sdk.order.get(this.id, options);
    }
    /**
     * Get order line.
     */

  }, {
    key: "getOrderLine",
    value: function getOrderLine(orderLineId, options) {
      return OrderModel.sdk.orderLine.get(orderLineId, this.id, options);
    }
    /**
     * Get order lines.
     */

  }, {
    key: "getOrderLines",
    value: function getOrderLines(options) {
      return OrderModel.sdk.orderLine.list(this.id, options);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return OrderModel.sdk.order.patch(this.id, data);
    }
    /**
     * Pay.
     */

  }, {
    key: "pay",
    value: function pay(data) {
      return OrderModel.sdk.order.pay(this.id, data);
    }
    /**
     * Refund.
     */

  }, {
    key: "refund",
    value: function refund(data) {
      return OrderModel.sdk.order.refund(this.id, data);
    }
    /**
     * Unfulfill.
     */

  }, {
    key: "unfulfill",
    value: function unfulfill() {
      return OrderModel.sdk.order.unfulfill(this.id);
    }
    /**
     * Unfulfill order line.
     */

  }, {
    key: "unfulfillOrderLine",
    value: function unfulfillOrderLine(orderLineId) {
      return OrderModel.sdk.orderLine.unfulfill(orderLineId, this.id);
    }
  }]);
  return OrderModel;
}(_abstractModel.default);

exports.default = OrderModel;
module.exports = exports.default;