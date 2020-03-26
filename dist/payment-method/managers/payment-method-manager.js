"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _lodash = require("lodash");

var _abstractManager = _interopRequireDefault(require("../../core/managers/abstract-manager"));

/**
 * Module dependencies.
 */

/**
 * Export `PaymentMethodManager`.
 */
var PaymentMethodManager =
/*#__PURE__*/
function (_AbstractManager) {
  (0, _inherits2.default)(PaymentMethodManager, _AbstractManager);

  function PaymentMethodManager() {
    (0, _classCallCheck2.default)(this, PaymentMethodManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PaymentMethodManager).apply(this, arguments));
  }

  (0, _createClass2.default)(PaymentMethodManager, [{
    key: "get",

    /**
     * Get.
     */
    value: function () {
      var _get = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(slug, options) {
        var _ref, paymentMethod;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._resolver.get({
                  slug
                }, options);

              case 2:
                _ref = _context.sent;
                paymentMethod = _ref.data;
                return _context.abrupt("return", this._instantiate(paymentMethod));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * List.
     */

  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._resolver.list({}, options);

              case 2:
                result = _context2.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (paymentMethod) {
                  return _this._instantiate(paymentMethod);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context2.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function list(_x3) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }]);
  return PaymentMethodManager;
}(_abstractManager.default);

exports.default = PaymentMethodManager;
module.exports = exports.default;