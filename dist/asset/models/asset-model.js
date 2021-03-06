"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `AssetModel`.
 */
var AssetModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(AssetModel, _AbstractModel);

  var _super = _createSuper(AssetModel);

  function AssetModel() {
    (0, _classCallCheck2.default)(this, AssetModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AssetModel, [{
    key: "getConnection",
    value:
    /**
     * Get Connection.
     */
    function getConnection(options) {
      return this.connectionId ? AssetModel.sdk.connection.get(this.connectionId, options) : undefined;
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return AssetModel.sdk.asset.patch(this.code, data);
    }
  }]);
  return AssetModel;
}(_abstractModel.default);

exports.default = AssetModel;
module.exports = exports.default;