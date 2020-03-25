"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `RateModel`.
 */
class RateModel extends _abstractModel.default {
  /**
   * Get base asset.
   */
  getBaseAsset(options) {
    return this._sdk.asset.get(this.baseAssetCode, options);
  }
  /**
   * Get quote asset.
   */


  getQuoteAsset(options) {
    return this._sdk.asset.get(this.quoteAssetCode, options);
  }
  /**
   * Patch.
   */


  patch(data) {
    return this._sdk.rate.patch(this.baseAssetCode, this.quoteAssetCode, data);
  }

}

exports.default = RateModel;