"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _abstractManager = _interopRequireDefault(require("../../core/managers/abstract-manager"));

var _movementModel = _interopRequireDefault(require("../../movement/models/movement-model"));

var _transactionModel = _interopRequireDefault(require("../../transaction/models/transaction-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `WalletManager`.
 */
class WalletManager extends _abstractManager.default {
  /**
   * Activity.
   */
  async activity(id, options) {
    const result = await this._resolver.activity({
      id
    }, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), transaction => new _transactionModel.default(transaction, {
      connection: this._connection
    }));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }
  /**
   * Balance.
   */


  async balance(id, options) {
    const {
      data: balance
    } = await this._resolver.balance({
      id
    }, options);
    return balance;
  }
  /**
   * Create.
   */


  async create(data) {
    const {
      data: wallet
    } = await this._resolver.create(data);
    return this._instantiate(wallet);
  }
  /**
   * Get.
   */


  async get(id, options) {
    const {
      data: wallet
    } = await this._resolver.get({
      id
    }, options);
    return this._instantiate(wallet);
  }
  /**
   * Global activity.
   */


  async globalActivity(options) {
    const result = await this._resolver.globalActivity({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), transaction => new _transactionModel.default(transaction, {
      connection: this._connection
    }));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }
  /**
   * Global balance.
   */


  async globalBalance(options) {
    const {
      data: balance
    } = await this._resolver.globalBalance({}, options);
    return balance;
  }
  /**
   * List.
   */


  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), wallet => this._instantiate(wallet));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }
  /**
   * Movements.
   */


  async movements(id, options) {
    const result = await this._resolver.movements({
      id
    }, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), movement => new _movementModel.default(movement, {
      connection: this._connection
    }));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }
  /**
   * Patch.
   */


  async patch(id, data) {
    const {
      data: wallet
    } = await this._resolver.patch((0, _lodash.merge)({}, data, {
      id
    }));
    return this._instantiate(wallet);
  }
  /**
   * Transactions.
   */


  async transactions(id, options) {
    const result = await this._resolver.transactions({
      id
    }, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), transaction => new _transactionModel.default(transaction, {
      connection: this._connection
    }));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }

}

exports.default = WalletManager;