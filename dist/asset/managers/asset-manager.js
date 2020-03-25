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
 * Export `AssetManager`.
 */
class AssetManager extends _abstractManager.default {
  /**
   * Create.
   */
  async create(data) {
    const {
      data: asset
    } = await this._resolver.create(data);
    return this._instantiate(asset);
  }
  /**
   * Get.
   */


  async get(code, options) {
    const {
      data
    } = await this._resolver.get({
      code
    }, options);
    return this._instantiate(data);
  }
  /**
   * List.
   */


  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), asset => this._instantiate(asset));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }
  /**
   * Patch.
   */


  async patch(code, data) {
    const {
      data: asset
    } = await this._resolver.patch((0, _lodash.merge)({}, data, {
      code
    }));
    return this._instantiate(asset);
  }

}

exports.default = AssetManager;