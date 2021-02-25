
/**
 * Module dependencies.
 */

import { get, map } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `BankAccountManager`.
 */

export default class BankAccountManager extends AbstractManager {

  /**
   * Get.
   */

  async get(id, options) {
    const { data } = await this.resolver.get({ id }, options);

    return this.instantiate(data);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), bankAccount => this.instantiate(bankAccount));
    const total = get(result, 'total');

    return { results, total };
  }

}
