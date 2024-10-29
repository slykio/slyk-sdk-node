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
 * Export `UserManager`.
 */
var UserManager = /*#__PURE__*/function (_AbstractManager) {
  (0, _inherits2.default)(UserManager, _AbstractManager);

  var _super = _createSuper(UserManager);

  function UserManager() {
    (0, _classCallCheck2.default)(this, UserManager);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(UserManager, [{
    key: "approve",
    value:
    /**
     * Approve.
     */
    function () {
      var _approve = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(id) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolver.approve({
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
      var _block = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolver.block({
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
      var _changeEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(id, data) {
        var _yield$this$resolver$, token;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.resolver.changeEmail((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$ = _context3.sent;
                token = _yield$this$resolver$.data;
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
      var _changePassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(id, data) {
        var _yield$this$resolver$2, token;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.resolver.changePassword((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$2 = _context4.sent;
                token = _yield$this$resolver$2.data;
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
      var _changePhone = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(id, data) {
        var _yield$this$resolver$3, token;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.resolver.changePhone((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$3 = _context5.sent;
                token = _yield$this$resolver$3.data;
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
      var _confirmEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(data) {
        var _yield$this$resolver$4, accessTokens;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.resolver.confirmEmail(data);

              case 2:
                _yield$this$resolver$4 = _context6.sent;
                accessTokens = _yield$this$resolver$4.data;

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
      var _confirmPhone = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(data) {
        var _yield$this$resolver$5, accessTokens;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.resolver.confirmPhone(data);

              case 2:
                _yield$this$resolver$5 = _context7.sent;
                accessTokens = _yield$this$resolver$5.data;

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
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(data) {
        var _yield$this$resolver$6, user;

        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.resolver.create(data);

              case 2:
                _yield$this$resolver$6 = _context8.sent;
                user = _yield$this$resolver$6.data;
                return _context8.abrupt("return", this.instantiate(user));

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
      var _forgotPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(data) {
        var _yield$this$resolver$7, token;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.resolver.forgotPassword(data);

              case 2:
                _yield$this$resolver$7 = _context9.sent;
                token = _yield$this$resolver$7.data;
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
      var _get = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(id, options) {
        var _yield$this$resolver$8, user;

        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.resolver.get({
                  id
                }, options);

              case 2:
                _yield$this$resolver$8 = _context10.sent;
                user = _yield$this$resolver$8.data;
                return _context10.abrupt("return", this.instantiate(user));

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
     * Get referral program.
     */

  }, {
    key: "getReferralProgram",
    value: function getReferralProgram(id, program, options) {
      return this.resolver.getReferralProgram({
        id,
        program
      }, options);
    }
    /**
     * Delete.
     */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(id) {
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.resolver.delete({
                  id
                });

              case 2:
                return _context11.abrupt("return", true);

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function _delete(_x15) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
    /**
     * List.
     */

  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.resolver.list({}, options);

              case 2:
                result = _context12.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (user) {
                  return _this.instantiate(user);
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

      function list(_x16) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * List via post.
     */

  }, {
    key: "listViaPost",
    value: function () {
      var _listViaPost = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(data) {
        var _this2 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.resolver.listViaPost(data);

              case 2:
                result = _context13.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (user) {
                  return _this2.instantiate(user);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context13.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function listViaPost(_x17) {
        return _listViaPost.apply(this, arguments);
      }

      return listViaPost;
    }()
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function () {
      var _patch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(id, data) {
        var _yield$this$resolver$9, user;

        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.resolver.patch((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$9 = _context14.sent;
                user = _yield$this$resolver$9.data;
                return _context14.abrupt("return", this.instantiate(user));

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function patch(_x18, _x19) {
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
      var _resendConfirmation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(data) {
        var _yield$this$resolver$10, token;

        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.resolver.resendConfirmation(data);

              case 2:
                _yield$this$resolver$10 = _context15.sent;
                token = _yield$this$resolver$10.data;
                return _context15.abrupt("return", token);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function resendConfirmation(_x20) {
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
      var _resetPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16(data) {
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.resolver.resetPassword(data);

              case 2:
                return _context16.abrupt("return", true);

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function resetPassword(_x21) {
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
      var _unblock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(id) {
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.resolver.unblock({
                  id
                });

              case 2:
                return _context17.abrupt("return", true);

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function unblock(_x22) {
        return _unblock.apply(this, arguments);
      }

      return unblock;
    }()
  }]);
  return UserManager;
}(_abstractManager.default);

exports.default = UserManager;
module.exports = exports.default;