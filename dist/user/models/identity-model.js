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
 * Export `IdentityModel`.
 */
var IdentityModel = /*#__PURE__*/function (_AbstractModel) {
  (0, _inherits2.default)(IdentityModel, _AbstractModel);

  var _super = _createSuper(IdentityModel);

  function IdentityModel() {
    (0, _classCallCheck2.default)(this, IdentityModel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(IdentityModel, [{
    key: "approve",
    value:
    /**
     * Approve.
     */
    function approve() {
      return IdentityModel.sdk.identity.approve(this.id);
    }
    /**
     * Cancel.
     */

  }, {
    key: "cancel",
    value: function cancel(data) {
      return IdentityModel.sdk.identity.cancel(this.id, data);
    }
    /**
     * Delete.
     */

  }, {
    key: "delete",
    value: function _delete() {
      return IdentityModel.sdk.identity.delete(this.id);
    }
    /**
     * Get document.
     */

  }, {
    key: "getDocument",
    value: function getDocument(documentId, options) {
      return IdentityModel.sdk.identityDocument.get(documentId, this.id, options);
    }
    /**
     * List documents.
     */

  }, {
    key: "listDocuments",
    value: function listDocuments(options) {
      return IdentityModel.sdk.identityDocument.list(this.id, options);
    }
    /**
     * Reject.
     */

  }, {
    key: "reject",
    value: function reject(data) {
      return IdentityModel.sdk.identity.reject(this.id, data);
    }
    /**
     * Submit.
     */

  }, {
    key: "submit",
    value: function submit() {
      return IdentityModel.sdk.identity.submit(this.id);
    }
  }]);
  return IdentityModel;
}(_abstractModel.default);

exports.default = IdentityModel;
module.exports = exports.default;