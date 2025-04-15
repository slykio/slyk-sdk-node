
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';
import Movement from 'movement/models/movement-model';
import Transaction from 'transaction/models/transaction-model';

/**
 * Export `WalletManager`.
 */

export default class WalletManager extends AbstractManager {

  /**
   * Activity.
   */

  async activity(id, options) {
    const result = await this.resolver.activity({ id }, options);
    const results = map(get(result, 'data', []), transaction => new Transaction(transaction, { connection: this.connection }));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Balance.
   */

  async balance(id, options) {
    const { data: balance } = await this.resolver.balance({ id }, options);

    return balance;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: wallet } = await this.resolver.create(data);

    return this.instantiate(wallet);
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: wallet } = await this.resolver.get({ id }, options);

    return this.instantiate(wallet);
  }

  /**
   * Global activity.
   */

  async globalActivity(options) {
    const result = await this.resolver.globalActivity({}, options);
    const results = map(get(result, 'data', []), transaction => new Transaction(transaction, { connection: this.connection }));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Global balance.
   */

  async globalBalance(options) {
    const { data: balance } = await this.resolver.globalBalance({}, options);

    return balance;
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), wallet => this.instantiate(wallet));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Movements.
   */

  async movements(id, options) {
    const result = await this.resolver.movements({ id }, options);
    const results = map(get(result, 'data', []), movement => new Movement(movement, { connection: this.connection }));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: wallet } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(wallet);
  }

  /**
   * Stored balance.
   */

  async storedBalance(id, options) {
    const { data, total } = await this.resolver.storedBalance({ id }, options);

    return { data, total };
  }

  /**
   * Stored global balance.
   */

  async storedGlobalBalance(options) {
    const { data, total } = await this.resolver.storedGlobalBalance({}, options);

    return { data, total };
  }

  /**
   * Transactions.
   */

  async transactions(id, options) {
    const result = await this.resolver.transactions({ id }, options);
    const results = map(get(result, 'data', []), transaction => new Transaction(transaction, { connection: this.connection }));
    const total = get(result, 'total');

    return { results, total };
  }

}
