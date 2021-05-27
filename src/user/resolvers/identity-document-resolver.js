
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'identities/:identityId/documents',
    method: 'post'
  },
  delete: {
    endpoint: 'identities/:identityId/documents/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'identities/:identityId/documents/:id',
    method: 'get'
  },
  list: {
    endpoint: 'identities/:identityId/documents',
    method: 'get'
  }
};

/**
 * Export `IdentityDocumentResolver`.
 */

export default connection => resolverFactory(connection, config);
