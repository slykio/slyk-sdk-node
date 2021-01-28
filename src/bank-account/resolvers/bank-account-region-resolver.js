
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  list: {
    endpoint: 'bank-accounts-regions',
    method: 'get'
  }
};

/**
 * Export `BankAccountRegionResolver`.
 */

export default connection => resolverFactory(connection, config);
