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

var _userModel = _interopRequireDefault(require("../../user/models/user-model"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `AuthManager`.
 */
var AuthManager = /*#__PURE__*/function (_AbstractManager) {
  (0, _inherits2.default)(AuthManager, _AbstractManager);

  var _super = _createSuper(AuthManager);

  function AuthManager() {
    (0, _classCallCheck2.default)(this, AuthManager);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AuthManager, [{
    key: "confirmTwoFactorCode",
    value:
    /**
     * Confirm two factor code.
     */
    function () {
      var _confirmTwoFactorCode = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(twoFactorId, data) {
        var _yield$this$resolver$, token;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolver.confirmTwoFactorCode((0, _lodash.merge)({}, data, {
                  twoFactorId
                }));

              case 2:
                _yield$this$resolver$ = _context.sent;
                token = _yield$this$resolver$.data;
                return _context.abrupt("return", token);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function confirmTwoFactorCode(_x, _x2) {
        return _confirmTwoFactorCode.apply(this, arguments);
      }

      return confirmTwoFactorCode;
    }()
    /**
     * Disable two factor.
     */

  }, {
    key: "disableTwoFactor",
    value: function () {
      var _disableTwoFactor = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(userId, data) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolver.disableTwoFactor((0, _lodash.merge)({}, data, {
                  userId
                }));

              case 2:
                return _context2.abrupt("return", true);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function disableTwoFactor(_x3, _x4) {
        return _disableTwoFactor.apply(this, arguments);
      }

      return disableTwoFactor;
    }()
    /**
     * Enable two factor.
     */

  }, {
    key: "enableTwoFactor",
    value: function () {
      var _enableTwoFactor = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(userId, data) {
        var _yield$this$resolver$2, recoveryCodes;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.resolver.enableTwoFactor((0, _lodash.merge)({}, data, {
                  userId
                }));

              case 2:
                _yield$this$resolver$2 = _context3.sent;
                recoveryCodes = _yield$this$resolver$2.data;
                return _context3.abrupt("return", recoveryCodes);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function enableTwoFactor(_x5, _x6) {
        return _enableTwoFactor.apply(this, arguments);
      }

      return enableTwoFactor;
    }()
    /**
     * Generate two factor recovery codes.
     */

  }, {
    key: "generateTwoFactorRecoveryCodes",
    value: function () {
      var _generateTwoFactorRecoveryCodes = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(userId) {
        var _yield$this$resolver$3, recoveryCodes;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.resolver.generateTwoFactorRecoveryCodes({
                  userId
                });

              case 2:
                _yield$this$resolver$3 = _context4.sent;
                recoveryCodes = _yield$this$resolver$3.data;
                return _context4.abrupt("return", recoveryCodes);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function generateTwoFactorRecoveryCodes(_x7) {
        return _generateTwoFactorRecoveryCodes.apply(this, arguments);
      }

      return generateTwoFactorRecoveryCodes;
    }()
    /**
     * Get two factor recovery codes.
     */

  }, {
    key: "getTwoFactorRecoveryCodes",
    value: function () {
      var _getTwoFactorRecoveryCodes = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(userId) {
        var _yield$this$resolver$4, recoveryCodes;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.resolver.getTwoFactorRecoveryCodes({
                  userId
                });

              case 2:
                _yield$this$resolver$4 = _context5.sent;
                recoveryCodes = _yield$this$resolver$4.data;
                return _context5.abrupt("return", recoveryCodes);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getTwoFactorRecoveryCodes(_x8) {
        return _getTwoFactorRecoveryCodes.apply(this, arguments);
      }

      return getTwoFactorRecoveryCodes;
    }()
    /**
     * Get two factor secret.
     */

  }, {
    key: "getTwoFactorSecret",
    value: function () {
      var _getTwoFactorSecret = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var _yield$this$resolver$5, secret;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.resolver.getTwoFactorSecret();

              case 2:
                _yield$this$resolver$5 = _context6.sent;
                secret = _yield$this$resolver$5.data;
                return _context6.abrupt("return", secret);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTwoFactorSecret() {
        return _getTwoFactorSecret.apply(this, arguments);
      }

      return getTwoFactorSecret;
    }()
    /**
     * Login.
     */

  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(data) {
        var _yield$this$resolver$6, auth;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.resolver.login(data);

              case 2:
                _yield$this$resolver$6 = _context7.sent;
                auth = _yield$this$resolver$6.data;
                return _context7.abrupt("return", this.instantiate(auth));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function login(_x9) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /**
     * Logout.
     */

  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(data) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.resolver.logout(data);

              case 2:
                return _context8.abrupt("return", true);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function logout(_x10) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /**
     * Refresh.
     */

  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(data) {
        var _yield$this$resolver$7, auth;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.resolver.refresh(data);

              case 2:
                _yield$this$resolver$7 = _context9.sent;
                auth = _yield$this$resolver$7.data;
                return _context9.abrupt("return", this.instantiate(auth));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function refresh(_x11) {
        return _refresh.apply(this, arguments);
      }

      return refresh;
    }()
    /**
     * Start two factor flow.
     */

  }, {
    key: "startTwoFactorFlow",
    value: function () {
      var _startTwoFactorFlow = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(data) {
        var _yield$this$resolver$8, twoFactorId;

        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.resolver.startTwoFactorFlow(data);

              case 2:
                _yield$this$resolver$8 = _context10.sent;
                twoFactorId = _yield$this$resolver$8.data;
                return _context10.abrupt("return", twoFactorId);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function startTwoFactorFlow(_x12) {
        return _startTwoFactorFlow.apply(this, arguments);
      }

      return startTwoFactorFlow;
    }()
    /**
     * Validate.
     */

  }, {
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(data, options) {
        var _yield$this$resolver$9, user;

        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.resolver.validate(data, options);

              case 2:
                _yield$this$resolver$9 = _context11.sent;
                user = _yield$this$resolver$9.data.user;
                return _context11.abrupt("return", {
                  user: new _userModel.default(user, {
                    connection: this.connection
                  })
                });

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function validate(_x13, _x14) {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }]);
  return AuthManager;
}(_abstractManager.default);

exports.default = AuthManager;
module.exports = exports.default;