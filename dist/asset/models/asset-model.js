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
 * Export `AssetModel`.
 */
var AssetModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(AssetModel, _AbstractModel);

  function AssetModel() {
    (0, _classCallCheck2.default)(this, AssetModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AssetModel).apply(this, arguments));
  }

  (0, _createClass2.default)(AssetModel, [{
    key: "getConnection",

    /**
     * Get Connection.
     */
    value: function getConnection(options) {
      return this.connectionId ? this._sdk.connection.get(this.connectionId, options) : undefined;
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.asset.patch(this.code, data);
    }
  }]);
  return AssetModel;
}(_abstractModel.default);

exports.default = AssetModel;
module.exports = exports.default;