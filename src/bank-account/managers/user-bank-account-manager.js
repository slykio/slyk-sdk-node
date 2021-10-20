
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `UserBankAccountManager`.
 */

export default class UserBankAccountManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: userBankAccount } = await this.resolver.create(data);

    return this.instantiate(userBankAccount);
  }

  /**
   * Delete.
   */

  async delete(id) {
    await this.resolver.delete({ id });

    return true;
  }

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
    const results = map(get(result, 'data', []), userBankAccount => this.instantiate(userBankAccount));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: userBankAccount } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(userBankAccount);
  }

}
