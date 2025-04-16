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

var _movementModel = _interopRequireDefault(require("../../movement/models/movement-model"));

var _transactionModel = _interopRequireDefault(require("../../transaction/models/transaction-model"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `WalletManager`.
 */
var WalletManager = /*#__PURE__*/function (_AbstractManager) {
  (0, _inherits2.default)(WalletManager, _AbstractManager);

  var _super = _createSuper(WalletManager);

  function WalletManager() {
    (0, _classCallCheck2.default)(this, WalletManager);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(WalletManager, [{
    key: "activity",
    value:
    /**
     * Activity.
     */
    function () {
      var _activity = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(id, options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolver.activity({
                  id
                }, options);

              case 2:
                result = _context.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (transaction) {
                  return new _transactionModel.default(transaction, {
                    connection: _this.connection
                  });
                });
                total = (0, _lodash.get)(result, 'total');
                return _context.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function activity(_x, _x2) {
        return _activity.apply(this, arguments);
      }

      return activity;
    }()
    /**
     * Balance.
     */

  }, {
    key: "balance",
    value: function () {
      var _balance = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id, options) {
        var _yield$this$resolver$, balance;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolver.balance({
                  id
                }, options);

              case 2:
                _yield$this$resolver$ = _context2.sent;
                balance = _yield$this$resolver$.data;
                return _context2.abrupt("return", balance);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function balance(_x3, _x4) {
        return _balance.apply(this, arguments);
      }

      return balance;
    }()
    /**
     * Create.
     */

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data) {
        var _yield$this$resolver$2, wallet;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.resolver.create(data);

              case 2:
                _yield$this$resolver$2 = _context3.sent;
                wallet = _yield$this$resolver$2.data;
                return _context3.abrupt("return", this.instantiate(wallet));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function create(_x5) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /**
     * Get.
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(id, options) {
        var _yield$this$resolver$3, wallet;

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
                wallet = _yield$this$resolver$3.data;
                return _context4.abrupt("return", this.instantiate(wallet));

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
     * Global activity.
     */

  }, {
    key: "globalActivity",
    value: function () {
      var _globalActivity = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(options) {
        var _this2 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.resolver.globalActivity({}, options);

              case 2:
                result = _context5.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (transaction) {
                  return new _transactionModel.default(transaction, {
                    connection: _this2.connection
                  });
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

      function globalActivity(_x8) {
        return _globalActivity.apply(this, arguments);
      }

      return globalActivity;
    }()
    /**
     * Global balance.
     */

  }, {
    key: "globalBalance",
    value: function () {
      var _globalBalance = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(options) {
        var _yield$this$resolver$4, balance;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.resolver.globalBalance({}, options);

              case 2:
                _yield$this$resolver$4 = _context6.sent;
                balance = _yield$this$resolver$4.data;
                return _context6.abrupt("return", balance);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function globalBalance(_x9) {
        return _globalBalance.apply(this, arguments);
      }

      return globalBalance;
    }()
    /**
     * List.
     */

  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(options) {
        var _this3 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.resolver.list({}, options);

              case 2:
                result = _context7.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (wallet) {
                  return _this3.instantiate(wallet);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context7.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function list(_x10) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * Movements.
     */

  }, {
    key: "movements",
    value: function () {
      var _movements = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(id, options) {
        var _this4 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.resolver.movements({
                  id
                }, options);

              case 2:
                result = _context8.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (movement) {
                  return new _movementModel.default(movement, {
                    connection: _this4.connection
                  });
                });
                total = (0, _lodash.get)(result, 'total');
                return _context8.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function movements(_x11, _x12) {
        return _movements.apply(this, arguments);
      }

      return movements;
    }()
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function () {
      var _patch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(id, data) {
        var _yield$this$resolver$5, wallet;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.resolver.patch((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$5 = _context9.sent;
                wallet = _yield$this$resolver$5.data;
                return _context9.abrupt("return", this.instantiate(wallet));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function patch(_x13, _x14) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
    /**
     * Stored balance.
     */

  }, {
    key: "storedBalance",
    value: function () {
      var _storedBalance = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(id, options) {
        var _yield$this$resolver$6, data, total;

        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.resolver.storedBalance({
                  id
                }, options);

              case 2:
                _yield$this$resolver$6 = _context10.sent;
                data = _yield$this$resolver$6.data;
                total = _yield$this$resolver$6.total;
                return _context10.abrupt("return", {
                  data,
                  total
                });

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function storedBalance(_x15, _x16) {
        return _storedBalance.apply(this, arguments);
      }

      return storedBalance;
    }()
    /**
     * Stored global balance.
     */

  }, {
    key: "storedGlobalBalance",
    value: function () {
      var _storedGlobalBalance = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(options) {
        var _yield$this$resolver$7, data, total;

        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.resolver.storedGlobalBalance({}, options);

              case 2:
                _yield$this$resolver$7 = _context11.sent;
                data = _yield$this$resolver$7.data;
                total = _yield$this$resolver$7.total;
                return _context11.abrupt("return", {
                  data,
                  total
                });

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function storedGlobalBalance(_x17) {
        return _storedGlobalBalance.apply(this, arguments);
      }

      return storedGlobalBalance;
    }()
    /**
     * Transactions.
     */

  }, {
    key: "transactions",
    value: function () {
      var _transactions = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(id, options) {
        var _this5 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.resolver.transactions({
                  id
                }, options);

              case 2:
                result = _context12.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (transaction) {
                  return new _transactionModel.default(transaction, {
                    connection: _this5.connection
                  });
                });
                total = (0, _lodash.get)(result, 'total');
                return _context12.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function transactions(_x18, _x19) {
        return _transactions.apply(this, arguments);
      }

      return transactions;
    }()
  }]);
  return WalletManager;
}(_abstractManager.default);

exports.default = WalletManager;
module.exports = exports.default;