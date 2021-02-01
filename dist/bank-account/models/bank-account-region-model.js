"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

/**
 * Module dependencies.
 */

/**
 * Export `BankAccountRegionModel`.
 */
var BankAccountRegionModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(BankAccountRegionModel, _AbstractModel);

  function BankAccountRegionModel() {
    (0, _classCallCheck2.default)(this, BankAccountRegionModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BankAccountRegionModel).apply(this, arguments));
  }

  (0, _createClass2.default)(BankAccountRegionModel, [{
    key: "getAssets",

    /**
     * Get assets.
     */
    value: function getAssets(options) {
      return this._sdk.asset.list((0, _objectSpread2.default)({}, options, {
        filter: {
          code: `in:${this.assets.join(',')}`
        }
      }));
    }
  }]);
  return BankAccountRegionModel;
}(_abstractModel.default);

exports.default = BankAccountRegionModel;
module.exports = exports.default;