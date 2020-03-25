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
 * Export `AddressManager`.
 */
class AddressManager extends _abstractManager.default {
  /**
   * Create.
   */
  async create(data) {
    const {
      data: address
    } = await this._resolver.create(data);
    return this._instantiate(address);
  }
  /**
   * Get.
   */


  async get(address, options) {
    const {
      data
    } = await this._resolver.get({
      address
    }, options);
    return this._instantiate(data);
  }
  /**
   * List.
   */


  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), address => this._instantiate(address));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }

}

exports.default = AddressManager;