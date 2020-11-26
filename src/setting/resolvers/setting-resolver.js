
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  get: {
    endpoint: 'settings/:code',
    method: 'get'
  },
  list: {
    endpoint: 'settings',
    method: 'get'
  }
};

/**
 * Export `SettingResolver`.
 */

export default connection => resolverFactory(connection, config);
