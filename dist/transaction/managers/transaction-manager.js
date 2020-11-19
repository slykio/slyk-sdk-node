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
 * Export `TransactionManager`.
 */
var TransactionManager =
/*#__PURE__*/
function (_AbstractManager) {
  (0, _inherits2.default)(TransactionManager, _AbstractManager);

  function TransactionManager() {
    (0, _classCallCheck2.default)(this, TransactionManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TransactionManager).apply(this, arguments));
  }

  (0, _createClass2.default)(TransactionManager, [{
    key: "approve",

    /**
     * Approve.
     */
    value: function () {
      var _approve = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(id, data) {
        var _ref, transaction;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._resolver.approve((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref = _context.sent;
                transaction = _ref.data;
                return _context.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function approve(_x, _x2) {
        return _approve.apply(this, arguments);
      }

      return approve;
    }()
    /**
     * Confirm.
     */

  }, {
    key: "confirm",
    value: function () {
      var _confirm = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(id, data) {
        var _ref2, transaction;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._resolver.confirm((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref2 = _context2.sent;
                transaction = _ref2.data;
                return _context2.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function confirm(_x3, _x4) {
        return _confirm.apply(this, arguments);
      }

      return confirm;
    }()
    /**
     * Deposit.
     */

  }, {
    key: "deposit",
    value: function () {
      var _deposit = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(data) {
        var _ref3, transaction;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._resolver.deposit(data);

              case 2:
                _ref3 = _context3.sent;
                transaction = _ref3.data;
                return _context3.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deposit(_x5) {
        return _deposit.apply(this, arguments);
      }

      return deposit;
    }()
    /**
     * Fail.
     */

  }, {
    key: "fail",
    value: function () {
      var _fail = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(id, data) {
        var _ref4, transaction;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._resolver.fail((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref4 = _context4.sent;
                transaction = _ref4.data;
                return _context4.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fail(_x6, _x7) {
        return _fail.apply(this, arguments);
      }

      return fail;
    }()
    /**
    * Get.
    */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(id, options) {
        var _ref5, transaction;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._resolver.get({
                  id
                }, options);

              case 2:
                _ref5 = _context5.sent;
                transaction = _ref5.data;
                return _context5.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function get(_x8, _x9) {
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
      _regenerator.default.mark(function _callee6(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._resolver.list({}, options);

              case 2:
                result = _context6.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (transaction) {
                  return _this._instantiate(transaction);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context6.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function list(_x10) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * Pay.
     */

  }, {
    key: "pay",
    value: function () {
      var _pay = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(data) {
        var _ref6, transaction;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._resolver.pay(data);

              case 2:
                _ref6 = _context7.sent;
                transaction = _ref6.data;
                return _context7.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function pay(_x11) {
        return _pay.apply(this, arguments);
      }

      return pay;
    }()
    /**
    * Reject.
    */

  }, {
    key: "reject",
    value: function () {
      var _reject = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(id, data) {
        var _ref7, transaction;

        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._resolver.reject((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref7 = _context8.sent;
                transaction = _ref7.data;
                return _context8.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function reject(_x12, _x13) {
        return _reject.apply(this, arguments);
      }

      return reject;
    }()
    /**
     * Request.
     */

  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(data) {
        var _ref8, transaction;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._resolver.request(data);

              case 2:
                _ref8 = _context9.sent;
                transaction = _ref8.data;
                return _context9.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function request(_x14) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /**
     * Send.
     */

  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(data) {
        var _ref9, transaction;

        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._resolver.send(data);

              case 2:
                _ref9 = _context10.sent;
                transaction = _ref9.data;
                return _context10.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function send(_x15) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
    /**
     * Transfer.
     */

  }, {
    key: "transfer",
    value: function () {
      var _transfer = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(data) {
        var _ref10, transaction;

        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this._resolver.transfer(data);

              case 2:
                _ref10 = _context11.sent;
                transaction = _ref10.data;
                return _context11.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function transfer(_x16) {
        return _transfer.apply(this, arguments);
      }

      return transfer;
    }()
    /**
     * Withdrawal.
     */

  }, {
    key: "withdrawal",
    value: function () {
      var _withdrawal = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(data) {
        var _ref11, transaction;

        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._resolver.withdrawal(data);

              case 2:
                _ref11 = _context12.sent;
                transaction = _ref11.data;
                return _context12.abrupt("return", this._instantiate(transaction));

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function withdrawal(_x17) {
        return _withdrawal.apply(this, arguments);
      }

      return withdrawal;
    }()
  }]);
  return TransactionManager;
}(_abstractManager.default);

exports.default = TransactionManager;
module.exports = exports.default;