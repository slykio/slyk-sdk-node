
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
    await this._resolver.cancel(merge({}, data, { id }));

    return true;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: order } = await this._resolver.create(data);

    return this._instantiate(order);
  }

  /**
   * Fulfill.
   */

  async fulfill(id, data) {
    const { data: order } = await this._resolver.fulfill(merge({}, data, { id }));

    return this._instantiate(order);
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: order } = await this._resolver.get({ id }, options);

    return this._instantiate(order);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), order => this._instantiate(order));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: order } = await this._resolver.patch(merge({}, data, { id }));

    return this._instantiate(order);
  }

  /**
   * Pay.
   */

  async pay(id, data) {
    const { data: order } = await this._resolver.pay(merge({}, data, { id }));

    return this._instantiate(order);
  }

  /**
   * Refund.
   */

  async refund(id, data) {
    const { data: order } = await this._resolver.refund(merge({}, data, { id }));

    return this._instantiate(order);
  }

  /**
   * Unfulfill.
   */

  async unfulfill(id) {
    const { data: order } = await this._resolver.unfulfill({ id });

    return this._instantiate(order);
  }

}
