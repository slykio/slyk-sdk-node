
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import WalletManager from 'wallet/managers/wallet-manager';
import WalletModel from 'wallet/models/wallet-model';
import WalletResolver from 'wallet/resolvers/wallet-resolver';

/**
 * Export `wallet`.
 */

export default {
  manager: WalletManager,
  model: WalletModel,
  resolver: WalletResolver
};
