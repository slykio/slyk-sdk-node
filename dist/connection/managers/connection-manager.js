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
 * `ConnectionManager`.
 */
class ConnectionManager extends _abstractManager.default {
  /**
   * Create.
   */
  async create(data) {
    const {
      data: connection
    } = await this._resolver.create(data);
    return this._instantiate(connection);
  }
  /**
   * Get.
   */


  async get(id, options) {
    const {
      data
    } = await this._resolver.get({
      id
    }, options);
    return this._instantiate(data);
  }
  /**
   * List.
   */


  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), connection => this._instantiate(connection));
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
      data: connection
    } = await this._resolver.patch((0, _lodash.merge)({}, data, {
      id
    }));
    return this._instantiate(connection);
  }

}

exports.default = ConnectionManager;