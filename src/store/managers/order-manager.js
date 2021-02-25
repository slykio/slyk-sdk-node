
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `OrderManager`.
 */

export default class OrderManager extends AbstractManager {

  /**
   * Cancel.
   */

  async cancel(id, data) {
    await this.resolver.cancel(merge({}, data, { id }));

    return true;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: order } = await this.resolver.create(data);

    return this.instantiate(order);
  }

  /**
   * Fulfill.
   */

  async fulfill(id, data) {
    const { data: order } = await this.resolver.fulfill(merge({}, data, { id }));

    return this.instantiate(order);
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: order } = await this.resolver.get({ id }, options);

    return this.instantiate(order);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), order => this.instantiate(order));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: order } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(order);
  }

  /**
   * Pay.
   */

  async pay(id, data) {
    const { data: order } = await this.resolver.pay(merge({}, data, { id }));

    return this.instantiate(order);
  }

  /**
   * Refund.
   */

  async refund(id, data) {
    const { data: order } = await this.resolver.refund(merge({}, data, { id }));

    return this.instantiate(order);
  }

  /**
   * Unfulfill.
   */

  async unfulfill(id) {
    const { data: order } = await this.resolver.unfulfill({ id });

    return this.instantiate(order);
  }

}
