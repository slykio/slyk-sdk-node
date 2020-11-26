
/**
 * Module dependencies.
 */

import { get, map } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `SettingManager`.
 */

export default class SettingManager extends AbstractManager {

  /**
   * Get.
   */

  async get(code, options) {
    const { data: setting } = await this._resolver.get({ code }, options);

    return this._instantiate(setting);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), setting => this._instantiate(setting));

    return { results };
  }

}
