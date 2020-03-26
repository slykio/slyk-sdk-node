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

var _movementModel = _interopRequireDefault(require("../../movement/models/movement-model"));

var _transactionModel = _interopRequireDefault(require("../../transaction/models/transaction-model"));

/**
 * Module dependencies.
 */

/**
 * Export `WalletManager`.
 */
var WalletManager =
/*#__PURE__*/
function (_AbstractManager) {
  (0, _inherits2.default)(WalletManager, _AbstractManager);

  function WalletManager() {
    (0, _classCallCheck2.default)(this, WalletManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WalletManager).apply(this, arguments));
  }

  (0, _createClass2.default)(WalletManager, [{
    key: "activity",

    /**
     * Activity.
     */
    value: function () {
      var _activity = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(id, options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._resolver.activity({
                  id
                }, options);

              case 2:
                result = _context.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (transaction) {
                  return new _transactionModel.default(transaction, {
                    connection: _this._connection
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
      var _balance = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(id, options) {
        var _ref, balance;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._resolver.balance({
                  id
                }, options);

              case 2:
                _ref = _context2.sent;
                balance = _ref.data;
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
      var _create = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(data) {
        var _ref2, wallet;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._resolver.create(data);

              case 2:
                _ref2 = _context3.sent;
                wallet = _ref2.data;
                return _context3.abrupt("return", this._instantiate(wallet));

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
      var _get = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(id, options) {
        var _ref3, wallet;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._resolver.get({
                  id
                }, options);

              case 2:
                _ref3 = _context4.sent;
                wallet = _ref3.data;
                return _context4.abrupt("return", this._instantiate(wallet));

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
      var _globalActivity = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(options) {
        var _this2 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._resolver.globalActivity({}, options);

              case 2:
                result = _context5.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (transaction) {
                  return new _transactionModel.default(transaction, {
                    connection: _this2._connection
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
      var _globalBalance = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(options) {
        var _ref4, balance;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._resolver.globalBalance({}, options);

              case 2:
                _ref4 = _context6.sent;
                balance = _ref4.data;
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
      var _list = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(options) {
        var _this3 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._resolver.list({}, options);

              case 2:
                result = _context7.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (wallet) {
                  return _this3._instantiate(wallet);
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
      var _movements = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(id, options) {
        var _this4 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._resolver.movements({
                  id
                }, options);

              case 2:
                result = _context8.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (movement) {
                  return new _movementModel.default(movement, {
                    connection: _this4._connection
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
      var _patch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(id, data) {
        var _ref5, wallet;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._resolver.patch((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref5 = _context9.sent;
                wallet = _ref5.data;
                return _context9.abrupt("return", this._instantiate(wallet));

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
     * Transactions.
     */

  }, {
    key: "transactions",
    value: function () {
      var _transactions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(id, options) {
        var _this5 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._resolver.transactions({
                  id
                }, options);

              case 2:
                result = _context10.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (transaction) {
                  return new _transactionModel.default(transaction, {
                    connection: _this5._connection
                  });
                });
                total = (0, _lodash.get)(result, 'total');
                return _context10.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function transactions(_x15, _x16) {
        return _transactions.apply(this, arguments);
      }

      return transactions;
    }()
  }]);
  return WalletManager;
}(_abstractManager.default);

exports.default = WalletManager;
module.exports = exports.default;