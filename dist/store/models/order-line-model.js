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
 * Export `OrderLineModel`.
 */
var OrderLineModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(OrderLineModel, _AbstractModel);

  function OrderLineModel() {
    (0, _classCallCheck2.default)(this, OrderLineModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OrderLineModel).apply(this, arguments));
  }

  (0, _createClass2.default)(OrderLineModel, [{
    key: "fulfill",

    /**
     * Fulfill.
     */
    value: function fulfill(data) {
      return this._sdk.orderLine.fulfill(this.id, this.orderId, data);
    }
    /**
     * Unfulfill.
     */

  }, {
    key: "unfulfill",
    value: function unfulfill() {
      return this._sdk.orderLine.unfulfill(this.id, this.orderId);
    }
  }]);
  return OrderLineModel;
}(_abstractModel.default);

exports.default = OrderLineModel;
module.exports = exports.default;