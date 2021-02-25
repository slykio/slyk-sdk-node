
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `WalletModel`.
 */

export default class WalletModel extends AbstractModel {

  /**
   * Get activity.
   */

  getActivity(options) {
    return WalletModel.sdk.wallet.activity(this.id, options);
  }

  /**
   * Get balance.
   */

  getBalance(options) {
    return WalletModel.sdk.wallet.balance(this.id, options);
  }

  /**
   * Get movements.
   */

  getMovements(options) {
    return WalletModel.sdk.wallet.movements(this.id, options);
  }

  /**
   * Get transactions.
   */

  getTransactions(options) {
    return WalletModel.sdk.wallet.transactions(this.id, options);
  }

  /**
   * Get Owner.
   */

  getOwner(options) {
    return this.ownerId ? WalletModel.sdk.user.get(this.ownerId, options) : undefined;
  }

  /**
   * Patch.
   */

  patch(data) {
    return WalletModel.sdk.wallet.patch(this.id, data);
  }

}
