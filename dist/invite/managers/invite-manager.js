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
 * Export `InviteManager`.
 */
class UserManager extends _abstractManager.default {
  /**
   * Cancel.
   */
  async cancel(code, data) {
    await this._resolver.cancel((0, _lodash.merge)({}, data, {
      code
    }));
    return true;
  }
  /**
   * Create.
   */


  async create(data) {
    const {
      data: invite
    } = await this._resolver.create(data);
    return this._instantiate(invite);
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
   * Send.
   */


  async send(data) {
    await this._resolver.send(data);
    return true;
  }
  /**
   * Validate.
   */


  async validate(code) {
    const {
      data: result
    } = await this._resolver.validate({
      code
    });
    return result;
  }

}

exports.default = UserManager;