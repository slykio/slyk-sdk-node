
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  execute: {
    endpoint: 'graphql',
    method: 'post'
  }
};

/**
 * Export `GraphqlResolver`.
 */

export default connection => resolverFactory(connection, config);
