
/**
 * Module dependencies.
 */

import { get, map } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `MovementManager`.
 */

export default class MovementManager extends AbstractManager {

  /**
   * Info.
   */

  async get(id, options) {
    const { data: movement } = await this._resolver.get({ id }, options);

    return this._instantiate(movement);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), movement => this._instantiate(movement));
    const total = get(result, 'total');

    return { results, total };
  }

}
