
/**
 * Module dependencies.
 */

import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `GraphqlManager`.
 */

export default class GraphqlManager extends AbstractManager {

  /**
   * Execute graphql request.
   */

  execute({ query }) {
    return this.resolver.execute({ query });
  }

}
