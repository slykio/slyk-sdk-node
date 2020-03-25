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
 * Export `RateManager`.
 */
class RateManager extends _abstractManager.default {
  /**
   * Create.
   */
  async create(data) {
    const {
      data: rate
    } = await this._resolver.create(data);
    return this._instantiate(rate);
  }
  /**
   * Delete.
   */


  async delete(baseAssetCode, quoteAssetCode) {
    await this._resolver.delete({
      baseAssetCode,
      quoteAssetCode
    });
    return true;
  }
  /**
   * Get.
   */


  async get(baseAssetCode, quoteAssetCode, options) {
    const {
      data: rate
    } = await this._resolver.get({
      baseAssetCode,
      quoteAssetCode
    }, options);
    return this._instantiate(rate);
  }
  /**
   * List.
   */


  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), rate => this._instantiate(rate));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }
  /**
   * Patch.
   */


  async patch(baseAssetCode, quoteAssetCode, data) {
    const {
      data: rate
    } = await this._resolver.patch((0, _lodash.merge)({}, data, {
      baseAssetCode,
      quoteAssetCode
    }));
    return this._instantiate(rate);
  }

}

exports.default = RateManager;