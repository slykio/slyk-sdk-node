
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'tax-rates',
    method: 'post'
  },
  delete: {
    endpoint: 'tax-rates/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'tax-rates/:id',
    method: 'get'
  },
  list: {
    endpoint: 'tax-rates',
    method: 'get'
  },
  patch: {
    endpoint: 'tax-rates/:id',
    method: 'patch'
  }

};

/**
 * Export `TaxRateResolver`.
 */

export default connection => resolverFactory(connection, config);
