
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `OrderLineManager`.
 */

export default class OrderLineManager extends AbstractManager {

  /**
   * Fulfill.
   */

  async fulfill(id, orderId, data) {
    const { data: orderLine } = await this._resolver.fulfill(merge({}, data, { id, orderId }));

    return this._instantiate(orderLine);
  }

  /**
   * Get.
   */

  async get(id, orderId, options) {
    const { data: orderLine } = await this._resolver.get({ id, orderId }, options);

    return this._instantiate(orderLine);
  }

  /**
   * List.
   */

  async list(orderId, options) {
    const result = await this._resolver.list({ orderId }, options);
    const results = map(get(result, 'data', []), orderLine => this._instantiate(orderLine));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Unfulfill.
   */

  async unfulfill(id, orderId) {
    const { data: orderLine } = await this._resolver.unfulfill({ id, orderId });

    return this._instantiate(orderLine);
  }

}
