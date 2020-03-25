"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _sdkFactory = _interopRequireDefault(require("../util/sdk-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `AbstractModel`.
 */
class AbstractModel {
  /**
   * Constructor.
   */
  constructor(data, {
    connection
  }) {
    Object.assign(this, data);
    this._sdk = (0, _sdkFactory.default)(connection); // eslint-disable-line
  }
  /**
   * Get data.
   */


  getData() {
    return (0, _lodash.omit)(this, '_sdk');
  }

}

exports.default = AbstractModel;