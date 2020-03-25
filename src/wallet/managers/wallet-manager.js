
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
    const result = await this._resolver.activity({ id }, options);
    const results = map(get(result, 'data', []), transaction => new Transaction(transaction, { connection: this._connection }));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Balance.
   */

  async balance(id, options) {
    const { data: balance } = await this._resolver.balance({ id }, options);

    return balance;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: wallet } = await this._resolver.create(data);

    return this._instantiate(wallet);
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: wallet } = await this._resolver.get({ id }, options);

    return this._instantiate(wallet);
  }

  /**
   * Global activity.
   */

  async globalActivity(options) {
    const result = await this._resolver.globalActivity({}, options);
    const results = map(get(result, 'data', []), transaction => new Transaction(transaction, { connection: this._connection }));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Global balance.
   */

  async globalBalance(options) {
    const { data: balance } = await this._resolver.globalBalance({}, options);

    return balance;
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), wallet => this._instantiate(wallet));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Movements.
   */

  async movements(id, options) {
    const result = await this._resolver.movements({ id }, options);
    const results = map(get(result, 'data', []), movement => new Movement(movement, { connection: this._connection }));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: wallet } = await this._resolver.patch(merge({}, data, { id }));

    return this._instantiate(wallet);
  }

  /**
   * Transactions.
   */

  async transactions(id, options) {
    const result = await this._resolver.transactions({ id }, options);
    const results = map(get(result, 'data', []), transaction => new Transaction(transaction, { connection: this._connection }));
    const total = get(result, 'total');

    return { results, total };
  }

}
