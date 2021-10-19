
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `BankAccountModel`.
 */

export default class BankAccountModel extends AbstractModel {

  /**
   * Delete.
   */

  delete() {
    return BankAccountModel.sdk.bankAccount.delete(this.id);
  }

  /**
   * Get asset.
   */

  getAsset(options) {
    return BankAccountModel.sdk.asset.get(this.asset, options);
  }

  /**
   * Patch.
   */

  patch(data) {
    return BankAccountModel.sdk.bankAccount.patch(this.id, data);
  }

}
