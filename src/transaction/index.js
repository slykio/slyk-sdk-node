
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import TransactionManager from 'transaction/managers/transaction-manager';
import TransactionModel from 'transaction/models/transaction-model';
import TransactionResolver from 'transaction/resolvers/transaction-resolver';

/**
 * Export `transaction`.
 */

export default {
  manager: TransactionManager,
  model: TransactionModel,
  resolver: TransactionResolver
};
