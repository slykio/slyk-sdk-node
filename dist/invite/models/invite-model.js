"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `InviteModel`.
 */
var InviteModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(InviteModel, _AbstractModel);

  var _super = _createSuper(InviteModel);

  function InviteModel() {
    (0, _classCallCheck2.default)(this, InviteModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(InviteModel, [{
    key: "cancel",
    value:
    /**
     * Cancel.
     */
    function cancel(data) {
      return InviteModel.sdk.invite.cancel(this.code, data);
    }
    /**
     * Get invited user.
     */

  }, {
    key: "getInvitedUser",
    value: function getInvitedUser(options) {
      return this.invitedUserId ? InviteModel.sdk.user.get(this.invitedUserId, options) : undefined;
    }
    /**
     * Get inviter user.
     */

  }, {
    key: "getInviterUser",
    value: function getInviterUser(options) {
      return this.inviterUserId ? InviteModel.sdk.user.get(this.inviterUserId, options) : undefined;
    }
    /**
     * Validate.
     */

  }, {
    key: "validate",
    value: function validate() {
      return InviteModel.sdk.invite.validate(this.code);
    }
  }]);
  return InviteModel;
}(_abstractModel.default);

exports.default = InviteModel;
module.exports = exports.default;