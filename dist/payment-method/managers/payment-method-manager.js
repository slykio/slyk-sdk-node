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
 * Export `PaymentMethodManager`.
 */
class PaymentMethodManager extends _abstractManager.default {
  /**
   * Get.
   */
  async get(slug, options) {
    const {
      data: paymentMethod
    } = await this._resolver.get({
      slug
    }, options);
    return this._instantiate(paymentMethod);
  }
  /**
   * List.
   */


  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), paymentMethod => this._instantiate(paymentMethod));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }

}

exports.default = PaymentMethodManager;