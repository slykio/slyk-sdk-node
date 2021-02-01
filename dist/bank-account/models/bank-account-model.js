"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
 * Export `BankAccountModel`.
 */
var BankAccountModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(BankAccountModel, _AbstractModel);

  function BankAccountModel() {
    (0, _classCallCheck2.default)(this, BankAccountModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BankAccountModel).apply(this, arguments));
  }

  (0, _createClass2.default)(BankAccountModel, [{
    key: "getAsset",

    /**
     * Get asset.
     */
    value: function getAsset(options) {
      return this._sdk.asset.get(this.asset, options);
    }
  }]);
  return BankAccountModel;
}(_abstractModel.default);

exports.default = BankAccountModel;
module.exports = exports.default;