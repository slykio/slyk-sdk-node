
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import AuthManager from 'auth/managers/auth-manager';
import AuthModel from 'auth/models/auth-model';
import AuthResolver from 'auth/resolvers/auth-resolver';

/**
 * Export `auth`.
 */

export default {
  manager: AuthManager,
  model: AuthModel,
  resolver: AuthResolver
};
