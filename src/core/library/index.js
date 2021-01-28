
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import { bankAccount, bankAccountRegion } from 'bank-account';
import {
  order,
  orderLine,
  product,
  productCategory,
  productImage,
  question,
  questionType,
  task,
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
import user from 'user';
import wallet from 'wallet';

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
  taxRate,
  transaction,
  user,
  wallet
};
