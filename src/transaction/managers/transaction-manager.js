
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
    const { data: transaction } = await this.resolver.approve(merge({}, data, { id }));

    return this.instantiate(transaction);
  }

  /**
   * Confirm.
   */

  async confirm(id, data) {
    const { data: transaction } = await this.resolver.confirm(merge({}, data, { id }));

    return this.instantiate(transaction);
  }

  /**
   * Deposit.
   */

  async deposit(data) {
    const { data: transaction } = await this.resolver.deposit(data);

    return this.instantiate(transaction);
  }

  /**
   * Exchange.
   */

  async exchange(data) {
    const { data: transaction } = await this.resolver.exchange(data);

    return this.instantiate(transaction);
  }

  /**
   * Fail.
   */

  async fail(id, data) {
    const { data: transaction } = await this.resolver.fail(merge({}, data, { id }));

    return this.instantiate(transaction);
  }

  /**
  * Get.
  */

  async get(id, options) {
    const { data: transaction } = await this.resolver.get({ id }, options);

    return this.instantiate(transaction);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), transaction => this.instantiate(transaction));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * List via post.
   */

  async listViaPost(data) {
    const result = await this.resolver.listViaPost(data);
    const results = map(get(result, 'data', []), transaction => this.instantiate(transaction));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: transaction } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(transaction);
  }

  /**
   * Patch multiple.
   */

  async patchMultiple(data) {
    const result = await this.resolver.patchMultiple(data);

    return map(get(result, 'data', []), transaction => this.instantiate(transaction));
  }

  /**
   * Pay.
   */

  async pay(data) {
    const { data: transaction } = await this.resolver.pay(data);

    return this.instantiate(transaction);
  }

  /**
  * Reject.
  */

  async reject(id, data) {
    const { data: transaction } = await this.resolver.reject(merge({}, data, { id }));

    return this.instantiate(transaction);
  }

  /**
   * Request.
   */

  async request(data) {
    const { data: transaction } = await this.resolver.request(data);

    return this.instantiate(transaction);
  }

  /**
   * Send.
   */

  async send(data) {
    const { data: transaction } = await this.resolver.send(data);

    return this.instantiate(transaction);
  }

  /**
   * Transfer.
   */

  async transfer(data) {
    const { data: transaction } = await this.resolver.transfer(data);

    return this.instantiate(transaction);
  }

  /**
   * Withdrawal.
   */

  async withdrawal(data) {
    const { data: transaction } = await this.resolver.withdrawal(data);

    return this.instantiate(transaction);
  }

}
