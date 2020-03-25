"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _abstractManager = _interopRequireDefault(require("../../core/managers/abstract-manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `TransactionManager`.
 */
class TransactionManager extends _abstractManager.default {
  /**
   * Approve.
   */
  async approve(id, data) {
    const {
      data: transaction
    } = await this._resolver.approve((0, _lodash.merge)({}, data, {
      id
    }));
    return this._instantiate(transaction);
  }
  /**
   * Confirm.
   */


  async confirm(id, data) {
    const {
      data: transaction
    } = await this._resolver.confirm((0, _lodash.merge)({}, data, {
      id
    }));
    return this._instantiate(transaction);
  }
  /**
   * Deposit.
   */


  async deposit(data) {
    const {
      data: transaction
    } = await this._resolver.deposit(data);
    return this._instantiate(transaction);
  }
  /**
   * Fail.
   */


  async fail(id, data) {
    const {
      data: transaction
    } = await this._resolver.fail((0, _lodash.merge)({}, data, {
      id
    }));
    return this._instantiate(transaction);
  }
  /**
  * Get.
  */


  async get(id, options) {
    const {
      data: transaction
    } = await this._resolver.get({
      id
    }, options);
    return this._instantiate(transaction);
  }
  /**
   * List.
   */


  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), transaction => this._instantiate(transaction));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }
  /**
   * Pay.
   */


  async pay(data) {
    const {
      data: transaction
    } = await this._resolver.pay(data);
    return this._instantiate(transaction);
  }
  /**
  * Reject.
  */


  async reject(id, data) {
    const {
      data: transaction
    } = await this._resolver.reject((0, _lodash.merge)({}, data, {
      id
    }));
    return this._instantiate(transaction);
  }
  /**
   * Transfer.
   */


  async transfer(data) {
    const {
      data: transaction
    } = await this._resolver.transfer(data);
    return this._instantiate(transaction);
  }
  /**
   * Withdrawal.
   */


  async withdrawal(data) {
    const {
      data: transaction
    } = await this._resolver.withdrawal(data);
    return this._instantiate(transaction);
  }

}

exports.default = TransactionManager;