
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `TransactionManager`.
 */

export default class TransactionManager extends AbstractManager {

  /**
   * Approve.
   */

  async approve(id, data) {
    const { data: transaction } = await this._resolver.approve(merge({}, data, { id }));

    return this._instantiate(transaction);
  }

  /**
   * Confirm.
   */

  async confirm(id, data) {
    const { data: transaction } = await this._resolver.confirm(merge({}, data, { id }));

    return this._instantiate(transaction);
  }

  /**
   * Deposit.
   */

  async deposit(data) {
    const { data: transaction } = await this._resolver.deposit(data);

    return this._instantiate(transaction);
  }

  /**
   * Fail.
   */

  async fail(id, data) {
    const { data: transaction } = await this._resolver.fail(merge({}, data, { id }));

    return this._instantiate(transaction);
  }

  /**
  * Get.
  */

  async get(id, options) {
    const { data: transaction } = await this._resolver.get({ id }, options);

    return this._instantiate(transaction);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), transaction => this._instantiate(transaction));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Pay.
   */

  async pay(data) {
    const { data: transaction } = await this._resolver.pay(data);

    return this._instantiate(transaction);
  }

  /**
  * Reject.
  */

  async reject(id, data) {
    const { data: transaction } = await this._resolver.reject(merge({}, data, { id }));

    return this._instantiate(transaction);
  }

  /**
   * Transfer.
   */

  async transfer(data) {
    const { data: transaction } = await this._resolver.transfer(data);

    return this._instantiate(transaction);
  }

  /**
   * Withdrawal.
   */

  async withdrawal(data) {
    const { data: transaction } = await this._resolver.withdrawal(data);

    return this._instantiate(transaction);
  }

}
