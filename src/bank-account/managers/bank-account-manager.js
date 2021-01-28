
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
    const { data } = await this._resolver.get({ id }, options);

    return this._instantiate(data);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), bankAccount => this._instantiate(bankAccount));
    const total = get(result, 'total');

    return { results, total };
  }

}
