
/**
 * Module dependencies.
 */

import { merge } from 'lodash';
import AbstractModel from 'core/models/abstract-model';

/**
 * Export `UserModel`.
 */

export default class UserModel extends AbstractModel {

  /**
   * Approve.
   */

  approve() {
    return UserModel.sdk.user.approve(this.id);
  }

  /**
   * Block.
   */

  block() {
    return UserModel.sdk.user.block(this.id);
  }

  /**
   * Change email.
   */

  changeEmail(data) {
    return UserModel.sdk.user.changeEmail(this.id, data);
  }

  /**
   * Change password.
   */

  changePassword(data) {
    return UserModel.sdk.user.changePassword(this.id, data);
  }

  /**
   * Change phone.
   */

  changePhone(data) {
    return UserModel.sdk.user.changePhone(this.id, data);
  }

  /**
   * Delete.
   */

  delete() {
    return UserModel.sdk.user.delete(this.id);
  }

  /**
   * Get invites.
   */

  getInvites(options) {
    return UserModel.sdk.invite.list(merge({}, options, { filter: { inviterUserId: this.id } }));
  }

  /**
   * Get wallets.
   */

  getWallets(options) {
    return UserModel.sdk.wallet.list(merge({}, options, { filter: { ownerId: this.id } }));
  }

  /**
   * Get primary wallet.
   */

  getPrimaryWallet(options) {
    return UserModel.sdk.wallet.get(this.primaryWalletId, options);
  }

  /**
   * Get referral program.
   */

  getReferralProgram(program, options) {
    return UserModel.sdk.user.getReferralProgram(this.id, program, options);
  }

  /**
   * Get referral user.
   */

  getReferralUser(options) {
    return this.referralUserId ? UserModel.sdk.user.get(this.referralUserId, options) : undefined;
  }

  /**
   * Patch.
   */

  patch(data) {
    return UserModel.sdk.user.patch(this.id, data);
  }

  /**
   * Unblock.
   */

  unblock() {
    return UserModel.sdk.user.unblock(this.id);
  }

}
