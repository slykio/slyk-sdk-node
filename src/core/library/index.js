
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import { bankAccount, bankAccountRegion } from 'bank-account';
import { identity, identityDocument, user } from 'user';
import {
  order,
  orderLine,
  product,
  productCategory,
  productImage,
  question,
  questionType,
  task,
  taskStep,
  taskStepQuestion,
  taskStepQuestionAnswer,
  taxRate
} from 'store';
import address from 'address';
import asset from 'asset';
import auth from 'auth';
import connection from 'connection';
import invite from 'invite';
import movement from 'movement';
import paymentMethod from 'payment-method';
import rate from 'rate';
import setting from 'setting';
import transaction from 'transaction';
import wallet from 'wallet';
import webhook from 'webhook';

/**
 * Export `library`.
 */

export default {
  address,
  asset,
  auth,
  bankAccount,
  bankAccountRegion,
  connection,
  identity,
  identityDocument,
  invite,
  movement,
  order,
  orderLine,
  paymentMethod,
  product,
  productCategory,
  productImage,
  question,
  questionType,
  rate,
  setting,
  task,
  taskStep,
  taskStepQuestion,
  taskStepQuestionAnswer,
  taxRate,
  transaction,
  user,
  wallet,
  webhook
};
