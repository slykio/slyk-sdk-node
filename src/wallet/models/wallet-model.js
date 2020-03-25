
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
    return this._sdk.wallet.activity(this.id, options);
  }

  /**
   * Get balance.
   */

  getBalance(options) {
    return this._sdk.wallet.balance(this.id, options);
  }

  /**
   * Get movements.
   */

  getMovements(options) {
    return this._sdk.wallet.movements(this.id, options);
  }

  /**
   * Get transactions.
   */

  getTransactions(options) {
    return this._sdk.wallet.transactions(this.id, options);
  }

  /**
   * Get Owner.
   */

  getOwner(options) {
    return this.ownerId ? this._sdk.user.get(this.ownerId, options) : undefined;
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.wallet.patch(this.id, data);
  }

}
