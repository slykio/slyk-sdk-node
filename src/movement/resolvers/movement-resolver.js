
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  get: {
    endpoint: 'movements/:id',
    method: 'get'
  },
  list: {
    endpoint: 'movements',
    method: 'get'
  }
};

/**
 * Export `MovementResolver`.
 */

export default connection => resolverFactory(connection, config);
