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
 * Export `MovementManager`.
 */
class MovementManager extends _abstractManager.default {
  /**
   * Info.
   */
  async get(id, options) {
    const {
      data: movement
    } = await this._resolver.get({
      id
    }, options);
    return this._instantiate(movement);
  }
  /**
   * List.
   */


  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), movement => this._instantiate(movement));
    const total = (0, _lodash.get)(result, 'total');
    return {
      results,
      total
    };
  }

}

exports.default = MovementManager;