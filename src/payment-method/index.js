
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import PaymentMethodManager from 'payment-method/managers/payment-method-manager';
import PaymentMethodModel from 'payment-method/models/payment-method-model';
import PaymentMethodResolver from 'payment-method/resolvers/payment-method-resolver';

/**
 * Export `paymentMethod`.
 */

export default {
  manager: PaymentMethodManager,
  model: PaymentMethodModel,
  resolver: PaymentMethodResolver
};
