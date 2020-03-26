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
 * Export `UserManager`.
 */
var UserManager =
/*#__PURE__*/
function (_AbstractManager) {
  (0, _inherits2.default)(UserManager, _AbstractManager);

  function UserManager() {
    (0, _classCallCheck2.default)(this, UserManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserManager).apply(this, arguments));
  }

  (0, _createClass2.default)(UserManager, [{
    key: "approve",

    /**
     * Approve.
     */
    value: function () {
      var _approve = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(id) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._resolver.approve({
                  id
                });

              case 2:
                return _context.abrupt("return", true);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function approve(_x) {
        return _approve.apply(this, arguments);
      }

      return approve;
    }()
    /**
     * Block.
     */

  }, {
    key: "block",
    value: function () {
      var _block = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._resolver.block({
                  id
                });

              case 2:
                return _context2.abrupt("return", true);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function block(_x2) {
        return _block.apply(this, arguments);
      }

      return block;
    }()
    /**
     * Change password.
     */

  }, {
    key: "changePassword",
    value: function () {
      var _changePassword = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(id, data) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._resolver.changePassword((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                return _context3.abrupt("return", true);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function changePassword(_x3, _x4) {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }()
    /**
     * Create.
     */

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(data) {
        var _ref, user;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._resolver.create(data);

              case 2:
                _ref = _context4.sent;
                user = _ref.data;
                return _context4.abrupt("return", this._instantiate(user));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
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
      _regenerator.default.mark(function _callee5(id, options) {
        var _ref2, user;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._resolver.get({
                  id
                }, options);

              case 2:
                _ref2 = _context5.sent;
                user = _ref2.data;
                return _context5.abrupt("return", this._instantiate(user));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
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
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (user) {
                  return _this._instantiate(user);
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
      var _patch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(id, data) {
        var _ref3, user;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._resolver.patch((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref3 = _context7.sent;
                user = _ref3.data;
                return _context7.abrupt("return", this._instantiate(user));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function patch(_x9, _x10) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
    /**
     * Unblock.
     */

  }, {
    key: "unblock",
    value: function () {
      var _unblock = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(id) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._resolver.unblock({
                  id
                });

              case 2:
                return _context8.abrupt("return", true);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function unblock(_x11) {
        return _unblock.apply(this, arguments);
      }

      return unblock;
    }()
  }]);
  return UserManager;
}(_abstractManager.default);

exports.default = UserManager;
module.exports = exports.default;