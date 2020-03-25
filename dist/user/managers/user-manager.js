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
 * Export `UserManager`.
 */
class UserManager extends _abstractManager.default {
  /**
   * Approve.
   */
  async approve(id) {
    await this._resolver.approve({
      id
    });
    return true;
  }
  /**
   * Block.
   */


  async block(id) {
    await this._resolver.block({
      id
    });
    return true;
  }
  /**
   * Change password.
   */


  async changePassword(id, data) {
    await this._resolver.changePassword((0, _lodash.merge)({}, data, {
      id
    }));
    return true;
  }
  /**
   * Create.
   */


  async create(data) {
    const {
      data: user
    } = await this._resolver.create(data);
    return this._instantiate(user);
  }
  /**
   * Get.
   */


  async get(id, options) {
    const {
      data: user
    } = await this._resolver.get({
      id
    }, options);
    return this._instantiate(user);
  }
  /**
   * List.
   */


  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), user => this._instantiate(user));
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
      data: user
    } = await this._resolver.patch((0, _lodash.merge)({}, data, {
      id
    }));
    return this._instantiate(user);
  }
  /**
   * Unblock.
   */


  async unblock(id) {
    await this._resolver.unblock({
      id
    });
    return true;
  }

}

exports.default = UserManager;