
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  approve: {
    endpoint: 'identities/:id/approve',
    method: 'post'
  },
  cancel: {
    endpoint: 'identities/:id/cancel',
    method: 'post'
  },
  create: {
    endpoint: 'identities',
    method: 'post'
  },
  delete: {
    endpoint: 'identities/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'identities/:id',
    method: 'get'
  },
  list: {
    endpoint: 'identities',
    method: 'get'
  },
  reject: {
    endpoint: 'identities/:id/reject',
    method: 'post'
  },
  submit: {
    endpoint: 'identities/:id/submit',
    method: 'post'
  }
};

/**
 * Export `IdentityResolver`.
 */

export default connection => resolverFactory(connection, config);
