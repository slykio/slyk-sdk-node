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
 * Export `InviteModel`.
 */
var InviteModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(InviteModel, _AbstractModel);

  function InviteModel() {
    (0, _classCallCheck2.default)(this, InviteModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InviteModel).apply(this, arguments));
  }

  (0, _createClass2.default)(InviteModel, [{
    key: "cancel",

    /**
     * Cancel.
     */
    value: function cancel(data) {
      return this._sdk.invite.cancel(this.code, data);
    }
    /**
     * Get invited user.
     */

  }, {
    key: "getInvitedUser",
    value: function getInvitedUser(options) {
      return this.invitedUserId ? this._sdk.user.get(this.invitedUserId, options) : undefined;
    }
    /**
     * Get inviter user.
     */

  }, {
    key: "getInviterUser",
    value: function getInviterUser(options) {
      return this.inviterUserId ? this._sdk.user.get(this.inviterUserId, options) : undefined;
    }
    /**
     * Validate.
     */

  }, {
    key: "validate",
    value: function validate() {
      return this._sdk.invite.validate(this.code);
    }
  }]);
  return InviteModel;
}(_abstractModel.default);

exports.default = InviteModel;
module.exports = exports.default;