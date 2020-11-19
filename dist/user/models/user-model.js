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

var _lodash = require("lodash");

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

/**
 * Module dependencies.
 */

/**
 * Export `UserModel`.
 */
var UserModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(UserModel, _AbstractModel);

  function UserModel() {
    (0, _classCallCheck2.default)(this, UserModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserModel).apply(this, arguments));
  }

  (0, _createClass2.default)(UserModel, [{
    key: "approve",

    /**
     * Approve.
     */
    value: function approve() {
      return this._sdk.user.approve(this.id);
    }
    /**
     * Block.
     */

  }, {
    key: "block",
    value: function block() {
      return this._sdk.user.block(this.id);
    }
    /**
     * Change email.
     */

  }, {
    key: "changeEmail",
    value: function changeEmail(data) {
      return this._sdk.user.changeEmail(this.id, data);
    }
    /**
     * Change password.
     */

  }, {
    key: "changePassword",
    value: function changePassword(data) {
      return this._sdk.user.changePassword(this.id, data);
    }
    /**
     * Change phone.
     */

  }, {
    key: "changePhone",
    value: function changePhone(data) {
      return this._sdk.user.changePhone(this.id, data);
    }
    /**
     * Get invites.
     */

  }, {
    key: "getInvites",
    value: function getInvites(options) {
      return this._sdk.invite.list((0, _lodash.merge)({}, options, {
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
      return this._sdk.wallet.list((0, _lodash.merge)({}, options, {
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
      return this._sdk.wallet.get(this.primaryWalletId, options);
    }
    /**
     * Get referral user.
     */

  }, {
    key: "getReferralUser",
    value: function getReferralUser(options) {
      return this.referralUserId ? this._sdk.user.get(this.referralUserId, options) : undefined;
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.user.patch(this.id, data);
    }
    /**
     * Unblock.
     */

  }, {
    key: "unblock",
    value: function unblock() {
      return this._sdk.user.unblock(this.id);
    }
  }]);
  return UserModel;
}(_abstractModel.default);

exports.default = UserModel;
module.exports = exports.default;