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

var _lodash = require("lodash");

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `UserModel`.
 */
var UserModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(UserModel, _AbstractModel);

  var _super = _createSuper(UserModel);

  function UserModel() {
    (0, _classCallCheck2.default)(this, UserModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(UserModel, [{
    key: "approve",
    value:
    /**
     * Approve.
     */
    function approve() {
      return UserModel.sdk.user.approve(this.id);
    }
    /**
     * Block.
     */

  }, {
    key: "block",
    value: function block() {
      return UserModel.sdk.user.block(this.id);
    }
    /**
     * Change email.
     */

  }, {
    key: "changeEmail",
    value: function changeEmail(data) {
      return UserModel.sdk.user.changeEmail(this.id, data);
    }
    /**
     * Change password.
     */

  }, {
    key: "changePassword",
    value: function changePassword(data) {
      return UserModel.sdk.user.changePassword(this.id, data);
    }
    /**
     * Change phone.
     */

  }, {
    key: "changePhone",
    value: function changePhone(data) {
      return UserModel.sdk.user.changePhone(this.id, data);
    }
    /**
     * Delete.
     */

  }, {
    key: "delete",
    value: function _delete() {
      return UserModel.sdk.user.delete(this.id);
    }
    /**
     * Get invites.
     */

  }, {
    key: "getInvites",
    value: function getInvites(options) {
      return UserModel.sdk.invite.list((0, _lodash.merge)({}, options, {
        filter: {
          inviterUserId: this.id
        }
      }));
    }
    /**
     * Get wallets.
     */

  }, {
    key: "getWallets",
    value: function getWallets(options) {
      return UserModel.sdk.wallet.list((0, _lodash.merge)({}, options, {
        filter: {
          ownerId: this.id
        }
      }));
    }
    /**
     * Get primary wallet.
     */

  }, {
    key: "getPrimaryWallet",
    value: function getPrimaryWallet(options) {
      return UserModel.sdk.wallet.get(this.primaryWalletId, options);
    }
    /**
     * Get referral program.
     */

  }, {
    key: "getReferralProgram",
    value: function getReferralProgram(program, options) {
      return UserModel.sdk.user.getReferralProgram(this.id, program, options);
    }
    /**
     * Get referral user.
     */

  }, {
    key: "getReferralUser",
    value: function getReferralUser(options) {
      return this.referralUserId ? UserModel.sdk.user.get(this.referralUserId, options) : undefined;
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return UserModel.sdk.user.patch(this.id, data);
    }
    /**
     * Unblock.
     */

  }, {
    key: "unblock",
    value: function unblock() {
      return UserModel.sdk.user.unblock(this.id);
    }
  }]);
  return UserModel;
}(_abstractModel.default);

exports.default = UserModel;
module.exports = exports.default;