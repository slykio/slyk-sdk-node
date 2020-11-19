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

var _abstractManager = _interopRequireDefault(require("../../core/managers/abstract-manager"));

/**
 * Module dependencies.
 */

/**
 * Export `AuthManager`.
 */
var AuthManager =
/*#__PURE__*/
function (_AbstractManager) {
  (0, _inherits2.default)(AuthManager, _AbstractManager);

  function AuthManager() {
    (0, _classCallCheck2.default)(this, AuthManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthManager).apply(this, arguments));
  }

  (0, _createClass2.default)(AuthManager, [{
    key: "login",

    /**
     * Login.
     */
    value: function () {
      var _login = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(data) {
        var _ref, auth;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._resolver.login(data);

              case 2:
                _ref = _context.sent;
                auth = _ref.data;
                return _context.abrupt("return", this._instantiate(auth));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x) {
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
      var _logout = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(data) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._resolver.logout(data);

              case 2:
                return _context2.abrupt("return", true);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logout(_x2) {
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
      var _refresh = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(data) {
        var _ref2, auth;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._resolver.refresh(data);

              case 2:
                _ref2 = _context3.sent;
                auth = _ref2.data;
                return _context3.abrupt("return", this._instantiate(auth));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function refresh(_x3) {
        return _refresh.apply(this, arguments);
      }

      return refresh;
    }()
    /**
     * Validate.
     */

  }, {
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(data) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._resolver.validate(data);

              case 2:
                return _context4.abrupt("return", true);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function validate(_x4) {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }]);
  return AuthManager;
}(_abstractManager.default);

exports.default = AuthManager;
module.exports = exports.default;