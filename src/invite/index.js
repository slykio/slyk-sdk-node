
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import InviteManager from 'invite/managers/invite-manager';
import InviteModel from 'invite/models/invite-model';
import InviteResolver from 'invite/resolvers/invite-resolver';

/**
 * Export `invite`.
 */

export default {
  manager: InviteManager,
  model: InviteModel,
  resolver: InviteResolver
};
