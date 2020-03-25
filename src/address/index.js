
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import AddressManager from 'address/managers/address-manager';
import AddressModel from 'address/models/address-model';
import AddressResolver from 'address/resolvers/address-resolver';

/**
 * Export `address`.
 */

export default {
  manager: AddressManager,
  model: AddressModel,
  resolver: AddressResolver
};
