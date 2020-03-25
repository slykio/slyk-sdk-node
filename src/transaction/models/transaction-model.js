
/**
 * Module dependencies.
 */

import { merge } from 'lodash';
import AbstractModel from 'core/models/abstract-model';

/**
 * Export `TransactionModel`.
 */

export default class TransactionModel extends AbstractModel {

  /**
   * Approve.
   */

  approve(data) {
    return this._sdk.transaction.approve(this.id, data);
  }

  /**
   * Confirm.
   */

  confirm(data) {
    return this._sdk.transaction.confirm(this.id, data);
  }

  /**
   * Confirm.
   */

  fail(data) {
    return this._sdk.transaction.fail(this.id, data);
  }

  /**
   * Get asset.
   */

  getAsset(options) {
    return this._sdk.asset.get(this.assetCode, options);
  }

  /**
   * Get destination address.
   */

  getDestinationAddress(options) {
    return this.destinationAddress ? this._sdk.address.get(this.destinationAddress, options) : undefined;
  }

  /**
   * Get destination wallet.
   */

  getDestinationWallet(options) {
    return this.destinationWalletId ? this._sdk.wallet.get(this.destinationWalletId, options) : undefined;
  }

  /**
   * Get origin address.
   */

  getOriginAddress(options) {
    return this.originAddress ? this._sdk.address.get(this.originAddress, options) : undefined;
  }

  /**
   * Get origin wallet.
   */

  getOriginWallet(options) {
    return this.originWalletId ? this._sdk.wallet.get(this.originWalletId, options) : undefined;
  }

  /**
   * Get movements.
   */

  getMovements(options) {
    return this._sdk.movement.list(merge({}, options, { filter: { transactionId: this.id } }));
  }

  /**
   * Reject.
   */

  reject(data) {
    return this._sdk.transaction.reject(this.id, data);
  }

}
