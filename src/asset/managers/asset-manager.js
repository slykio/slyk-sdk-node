
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `AssetManager`.
 */

export default class AssetManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: asset } = await this._resolver.create(data);

    return this._instantiate(asset);
  }

  /**
   * Get.
   */

  async get(code, options) {
    const { data } = await this._resolver.get({ code }, options);

    return this._instantiate(data);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), asset => this._instantiate(asset));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(code, data) {
    const { data: asset } = await this._resolver.patch(merge({}, data, { code }));

    return this._instantiate(asset);
  }

}
