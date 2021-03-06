
/**
 * Module dependencies.
 */

import { get, map } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `PaymentMethodManager`.
 */

export default class PaymentMethodManager extends AbstractManager {

  /**
   * Get.
   */

  async get(slug, options) {
    const { data: paymentMethod } = await this.resolver.get({ slug }, options);

    return this.instantiate(paymentMethod);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), paymentMethod => this.instantiate(paymentMethod));
    const total = get(result, 'total');

    return { results, total };
  }

}
