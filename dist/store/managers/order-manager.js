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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = require("lodash");

var _abstractManager = _interopRequireDefault(require("../../core/managers/abstract-manager"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `OrderManager`.
 */
var OrderManager = /*#__PURE__*/function (_AbstractManager) {
  (0, _inherits2.default)(OrderManager, _AbstractManager);

  var _super = _createSuper(OrderManager);

  function OrderManager() {
    (0, _classCallCheck2.default)(this, OrderManager);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(OrderManager, [{
    key: "cancel",
    value:
    /**
     * Cancel.
     */
    function () {
      var _cancel = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(id, data) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolver.cancel((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                return _context.abrupt("return", true);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function cancel(_x, _x2) {
        return _cancel.apply(this, arguments);
      }

      return cancel;
    }()
    /**
     * Create.
     */

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(data) {
        var _yield$this$resolver$, order;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolver.create(data);

              case 2:
                _yield$this$resolver$ = _context2.sent;
                order = _yield$this$resolver$.data;
                return _context2.abrupt("return", this.instantiate(order));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x3) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /**
     * Fulfill.
     */

  }, {
    key: "fulfill",
    value: function () {
      var _fulfill = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(id, data) {
        var _yield$this$resolver$2, order;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.resolver.fulfill((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$2 = _context3.sent;
                order = _yield$this$resolver$2.data;
                return _context3.abrupt("return", this.instantiate(order));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fulfill(_x4, _x5) {
        return _fulfill.apply(this, arguments);
      }

      return fulfill;
    }()
    /**
     * Get.
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(id, options) {
        var _yield$this$resolver$3, order;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.resolver.get({
                  id
                }, options);

              case 2:
                _yield$this$resolver$3 = _context4.sent;
                order = _yield$this$resolver$3.data;
                return _context4.abrupt("return", this.instantiate(order));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function get(_x6, _x7) {
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
      var _list = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.resolver.list({}, options);

              case 2:
                result = _context5.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (order) {
                  return _this.instantiate(order);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context5.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function list(_x8) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function () {
      var _patch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(id, data) {
        var _yield$this$resolver$4, order;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.resolver.patch((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$4 = _context6.sent;
                order = _yield$this$resolver$4.data;
                return _context6.abrupt("return", this.instantiate(order));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function patch(_x9, _x10) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
    /**
     * Pay.
     */

  }, {
    key: "pay",
    value: function () {
      var _pay = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(id, data) {
        var _yield$this$resolver$5, order;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.resolver.pay((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$5 = _context7.sent;
                order = _yield$this$resolver$5.data;
                return _context7.abrupt("return", this.instantiate(order));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function pay(_x11, _x12) {
        return _pay.apply(this, arguments);
      }

      return pay;
    }()
    /**
     * Refund.
     */

  }, {
    key: "refund",
    value: function () {
      var _refund = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(id, data) {
        var _yield$this$resolver$6, order;

        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.resolver.refund((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$6 = _context8.sent;
                order = _yield$this$resolver$6.data;
                return _context8.abrupt("return", this.instantiate(order));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function refund(_x13, _x14) {
        return _refund.apply(this, arguments);
      }

      return refund;
    }()
    /**
     * Unfulfill.
     */

  }, {
    key: "unfulfill",
    value: function () {
      var _unfulfill = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(id) {
        var _yield$this$resolver$7, order;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.resolver.unfulfill({
                  id
                });

              case 2:
                _yield$this$resolver$7 = _context9.sent;
                order = _yield$this$resolver$7.data;
                return _context9.abrupt("return", this.instantiate(order));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function unfulfill(_x15) {
        return _unfulfill.apply(this, arguments);
      }

      return unfulfill;
    }()
  }]);
  return OrderManager;
}(_abstractManager.default);

exports.default = OrderManager;
module.exports = exports.default;