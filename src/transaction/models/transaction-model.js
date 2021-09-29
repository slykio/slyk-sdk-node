
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
    return TransactionModel.sdk.transaction.approve(this.id, data);
  }

  /**
   * Confirm.
   */

  confirm(data) {
    return TransactionModel.sdk.transaction.confirm(this.id, data);
  }

  /**
   * Confirm.
   */

  fail(data) {
    return TransactionModel.sdk.transaction.fail(this.id, data);
  }

  /**
   * Get asset.
   */

  getAsset(options) {
    return TransactionModel.sdk.asset.get(this.assetCode, options);
  }

  /**
   * Get destination address.
   */

  getDestinationAddress(options) {
    return this.destinationAddress ? TransactionModel.sdk.address.get(this.destinationAddress, options) : undefined;
  }

  /**
   * Get destination wallet.
   */

  getDestinationWallet(options) {
    return this.destinationWalletId ? TransactionModel.sdk.wallet.get(this.destinationWalletId, options) : undefined;
  }

  /**
   * Get origin address.
   */

  getOriginAddress(options) {
    return this.originAddress ? TransactionModel.sdk.address.get(this.originAddress, options) : undefined;
  }

  /**
   * Get origin wallet.
   */

  getOriginWallet(options) {
    return this.originWalletId ? TransactionModel.sdk.wallet.get(this.originWalletId, options) : undefined;
  }

  /**
   * Get movements.
   */

  getMovements(options) {
    return TransactionModel.sdk.movement.list(merge({}, options, { filter: { transactionId: this.id } }));
  }

  /**
   * Patch.
   */

  patch(data) {
    return TransactionModel.sdk.transaction.patch(this.id, data);
  }

  /**
   * Reject.
   */

  reject(data) {
    return TransactionModel.sdk.transaction.reject(this.id, data);
  }

}
