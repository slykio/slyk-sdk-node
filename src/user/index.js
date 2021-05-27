
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import IdentityDocumentManager from 'user/managers/identity-document-manager';
import IdentityDocumentModel from 'user/models/identity-document-model';
import IdentityDocumentResolver from 'user/resolvers/identity-document-resolver';
import IdentityManager from 'user/managers/identity-manager';
import IdentityModel from 'user/models/identity-model';
import IdentityResolver from 'user/resolvers/identity-resolver';
import UserManager from 'user/managers/user-manager';
import UserModel from 'user/models/user-model';
import UserResolver from 'user/resolvers/user-resolver';

/**
 * Export `user`.
 */

export default {
  identity: {
    manager: IdentityManager,
    model: IdentityModel,
    resolver: IdentityResolver
  },
  identityDocument: {
    manager: IdentityDocumentManager,
    model: IdentityDocumentModel,
    resolver: IdentityDocumentResolver
  },
  user: {
    manager: UserManager,
    model: UserModel,
    resolver: UserResolver
  }
};
