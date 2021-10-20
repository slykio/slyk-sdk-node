
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import BankAccountManager from 'bank-account/managers/bank-account-manager';
import BankAccountModel from 'bank-account/models/bank-account-model';
import BankAccountRegionManager from 'bank-account/managers/bank-account-region-manager';
import BankAccountRegionModel from 'bank-account/models/bank-account-region-model';
import BankAccountRegionResolver from 'bank-account/resolvers/bank-account-region-resolver';
import BankAccountResolver from 'bank-account/resolvers/bank-account-resolver';
import UserBankAccountManager from 'bank-account/managers/user-bank-account-manager';
import UserBankAccountModel from 'bank-account/models/user-bank-account-model';
import UserBankAccountResolver from 'bank-account/resolvers/user-bank-account-resolver';

/**
 * Export `bankAccount`.
 */

module.exports = {
  bankAccount: {
    manager: BankAccountManager,
    model: BankAccountModel,
    resolver: BankAccountResolver
  },
  bankAccountRegion: {
    manager: BankAccountRegionManager,
    model: BankAccountRegionModel,
    resolver: BankAccountRegionResolver
  },
  userBankAccount: {
    manager: UserBankAccountManager,
    model: UserBankAccountModel,
    resolver: UserBankAccountResolver
  }
};
