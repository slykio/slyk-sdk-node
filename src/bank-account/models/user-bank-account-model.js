
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `UserBankAccountModel`.
 */

export default class UserBankAccountModel extends AbstractModel {

  /**
   * Delete.
   */

  delete() {
    return UserBankAccountModel.sdk.userBankAccount.delete(this.id);
  }

  /**
   * Get asset.
   */

  getAsset(options) {
    return UserBankAccountModel.sdk.asset.get(this.asset, options);
  }

  /**
   * Patch.
   */

  patch(data) {
    return UserBankAccountModel.sdk.userBankAccount.patch(this.id, data);
  }

}
