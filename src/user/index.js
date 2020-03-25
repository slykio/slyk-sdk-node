
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import UserManager from 'user/managers/user-manager';
import UserModel from 'user/models/user-model';
import UserResolver from 'user/resolvers/user-resolver';

/**
 * Export `user`.
 */

export default {
  manager: UserManager,
  model: UserModel,
  resolver: UserResolver
};
