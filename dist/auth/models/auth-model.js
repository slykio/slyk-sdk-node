"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

/**
 * Module dependencies.
 */

/**
 * Export `AuthModel`.
 */
var AuthModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(AuthModel, _AbstractModel);

  function AuthModel() {
    (0, _classCallCheck2.default)(this, AuthModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthModel).apply(this, arguments));
  }

  (0, _createClass2.default)(AuthModel, [{
    key: "logout",

    /**
     * Logout.
     */
    value: function logout() {
      return this._sdk.auth.logout({
        refreshToken: this.refreshToken
      });
    }
    /**
     * Refresh.
     */

  }, {
    key: "refresh",
    value: function refresh() {
      return this._sdk.auth.refresh({
        refreshToken: this.refreshToken
      });
    }
  }]);
  return AuthModel;
}(_abstractModel.default);

exports.default = AuthModel;
module.exports = exports.default;