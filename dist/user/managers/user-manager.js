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
     * Change email.
     */

  }, {
    key: "changeEmail",
    value: function () {
      var _changeEmail = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(id, data) {
        var _ref, token;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._resolver.changeEmail((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref = _context3.sent;
                token = _ref.data;
                return _context3.abrupt("return", token);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function changeEmail(_x3, _x4) {
        return _changeEmail.apply(this, arguments);
      }

      return changeEmail;
    }()
    /**
     * Change password.
     */

  }, {
    key: "changePassword",
    value: function () {
      var _changePassword = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(id, data) {
        var _ref2, token;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._resolver.changePassword((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref2 = _context4.sent;
                token = _ref2.data;
                return _context4.abrupt("return", token);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function changePassword(_x5, _x6) {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }()
    /**
     * Change phone.
     */

  }, {
    key: "changePhone",
    value: function () {
      var _changePhone = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(id, data) {
        var _ref3, token;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._resolver.changePhone((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref3 = _context5.sent;
                token = _ref3.data;
                return _context5.abrupt("return", token);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function changePhone(_x7, _x8) {
        return _changePhone.apply(this, arguments);
      }

      return changePhone;
    }()
    /**
     * Confirm email.
     */

  }, {
    key: "confirmEmail",
    value: function () {
      var _confirmEmail = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(data) {
        var _ref4, accessTokens;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._resolver.confirmEmail(data);

              case 2:
                _ref4 = _context6.sent;
                accessTokens = _ref4.data;

                if (accessTokens) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", true);

              case 6:
                return _context6.abrupt("return", accessTokens);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function confirmEmail(_x9) {
        return _confirmEmail.apply(this, arguments);
      }

      return confirmEmail;
    }()
    /**
     * Confirm phone.
     */

  }, {
    key: "confirmPhone",
    value: function () {
      var _confirmPhone = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(data) {
        var _ref5, accessTokens;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._resolver.confirmPhone(data);

              case 2:
                _ref5 = _context7.sent;
                accessTokens = _ref5.data;

                if (accessTokens) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return", true);

              case 6:
                return _context7.abrupt("return", accessTokens);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function confirmPhone(_x10) {
        return _confirmPhone.apply(this, arguments);
      }

      return confirmPhone;
    }()
    /**
     * Create.
     */

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(data) {
        var _ref6, user;

        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._resolver.create(data);

              case 2:
                _ref6 = _context8.sent;
                user = _ref6.data;
                return _context8.abrupt("return", this._instantiate(user));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function create(_x11) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /**
     * Forgot password.
     */

  }, {
    key: "forgotPassword",
    value: function () {
      var _forgotPassword = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(data) {
        var _ref7, token;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._resolver.forgotPassword(data);

              case 2:
                _ref7 = _context9.sent;
                token = _ref7.data;
                return _context9.abrupt("return", token);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function forgotPassword(_x12) {
        return _forgotPassword.apply(this, arguments);
      }

      return forgotPassword;
    }()
    /**
     * Get.
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(id, options) {
        var _ref8, user;

        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._resolver.get({
                  id
                }, options);

              case 2:
                _ref8 = _context10.sent;
                user = _ref8.data;
                return _context10.abrupt("return", this._instantiate(user));

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function get(_x13, _x14) {
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
      _regenerator.default.mark(function _callee11(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this._resolver.list({}, options);

              case 2:
                result = _context11.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (user) {
                  return _this._instantiate(user);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context11.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function list(_x15) {
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
      _regenerator.default.mark(function _callee12(id, data) {
        var _ref9, user;

        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._resolver.patch((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref9 = _context12.sent;
                user = _ref9.data;
                return _context12.abrupt("return", this._instantiate(user));

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function patch(_x16, _x17) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
    /**
     * Resend confirmation.
     */

  }, {
    key: "resendConfirmation",
    value: function () {
      var _resendConfirmation = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(data) {
        var _ref10, token;

        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._resolver.resendConfirmation(data);

              case 2:
                _ref10 = _context13.sent;
                token = _ref10.data;
                return _context13.abrupt("return", token);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function resendConfirmation(_x18) {
        return _resendConfirmation.apply(this, arguments);
      }

      return resendConfirmation;
    }()
    /**
     * Reset password.
     */

  }, {
    key: "resetPassword",
    value: function () {
      var _resetPassword = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14(data) {
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this._resolver.resetPassword(data);

              case 2:
                return _context14.abrupt("return", true);

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function resetPassword(_x19) {
        return _resetPassword.apply(this, arguments);
      }

      return resetPassword;
    }()
    /**
     * Unblock.
     */

  }, {
    key: "unblock",
    value: function () {
      var _unblock = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15(id) {
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._resolver.unblock({
                  id
                });

              case 2:
                return _context15.abrupt("return", true);

              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function unblock(_x20) {
        return _unblock.apply(this, arguments);
      }

      return unblock;
    }()
  }]);
  return UserManager;
}(_abstractManager.default);

exports.default = UserManager;
module.exports = exports.default;