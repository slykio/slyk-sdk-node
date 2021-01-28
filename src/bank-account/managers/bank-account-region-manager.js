
/**
 * Module dependencies.
 */

import { get, map } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `BankAccountRegionManager`.
 */

export default class BankAccountRegionManager extends AbstractManager {

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), bankAccountRegion => this._instantiate(bankAccountRegion));
    const total = get(result, 'total');

    return { results, total };
  }

}
