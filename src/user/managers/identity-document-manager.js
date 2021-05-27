
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `IdentityDocumentManager`.
 */

export default class IdentityDocumentManager extends AbstractManager {

  /**
   * Create.
   */

  async create(identityId, data) {
    const { data: identityDocument } = await this.resolver.create(merge({}, data, { identityId }));

    return this.instantiate(identityDocument);
  }

  /**
   * Delete.
   */

  async delete(id, identityId) {
    await this.resolver.delete({ id, identityId });

    return true;
  }

  /**
   * Get.
   */

  async get(id, identityId, options) {
    const { data: identityDocument } = await this.resolver.get({ id, identityId }, options);

    return this.instantiate(identityDocument);
  }

  /**
   * List.
   */

  async list(identityId, options) {
    const result = await this.resolver.list({ identityId }, options);
    const results = map(get(result, 'data', []), identityDocument => this.instantiate(identityDocument));
    const total = get(result, 'total');

    return { results, total };
  }

}
