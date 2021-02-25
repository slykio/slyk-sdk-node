
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
    const { data: setting } = await this.resolver.get({ code }, options);

    return this.instantiate(setting);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), setting => this.instantiate(setting));

    return { results };
  }

}
