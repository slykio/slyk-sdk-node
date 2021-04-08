"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _orderLineManager = _interopRequireDefault(require("./managers/order-line-manager"));

var _orderLineModel = _interopRequireDefault(require("./models/order-line-model"));

var _orderLineResolver = _interopRequireDefault(require("./resolvers/order-line-resolver"));

var _orderManager = _interopRequireDefault(require("./managers/order-manager"));

var _orderModel = _interopRequireDefault(require("./models/order-model"));

var _orderResolver = _interopRequireDefault(require("./resolvers/order-resolver"));

var _productCategoryManager = _interopRequireDefault(require("./managers/product-category-manager"));

var _productCategoryModel = _interopRequireDefault(require("./models/product-category-model"));

var _productCategoryResolver = _interopRequireDefault(require("./resolvers/product-category-resolver"));

var _productImageManager = _interopRequireDefault(require("./managers/product-image-manager"));

var _productImageModel = _interopRequireDefault(require("./models/product-image-model"));

var _productImageResolver = _interopRequireDefault(require("./resolvers/product-image-resolver"));

var _productManager = _interopRequireDefault(require("./managers/product-manager"));

var _productModel = _interopRequireDefault(require("./models/product-model"));

var _productResolver = _interopRequireDefault(require("./resolvers/product-resolver"));

var _questionManager = _interopRequireDefault(require("./managers/question-manager"));

var _questionModel = _interopRequireDefault(require("./models/question-model"));

var _questionResolver = _interopRequireDefault(require("./resolvers/question-resolver"));

var _questionTypeManager = _interopRequireDefault(require("./managers/question-type-manager"));

var _questionTypeModel = _interopRequireDefault(require("./models/question-type-model"));

var _questionTypeResolver = _interopRequireDefault(require("./resolvers/question-type-resolver"));

var _taskManager = _interopRequireDefault(require("./managers/task-manager"));

var _taskModel = _interopRequireDefault(require("./models/task-model"));

var _taskResolver = _interopRequireDefault(require("./resolvers/task-resolver"));

var _taskStepManager = _interopRequireDefault(require("./managers/task-step-manager"));

var _taskStepModel = _interopRequireDefault(require("./models/task-step-model"));

var _taskStepQuestionAnswerManager = _interopRequireDefault(require("./managers/task-step-question-answer-manager"));

var _taskStepQuestionAnswerModel = _interopRequireDefault(require("./models/task-step-question-answer-model"));

var _taskStepQuestionAnswerResolver = _interopRequireDefault(require("./resolvers/task-step-question-answer-resolver"));

var _taskStepQuestionManager = _interopRequireDefault(require("./managers/task-step-question-manager"));

var _taskStepQuestionModel = _interopRequireDefault(require("./models/task-step-question-model"));

var _taskStepQuestionResolver = _interopRequireDefault(require("./resolvers/task-step-question-resolver"));

var _taskStepResolver = _interopRequireDefault(require("./resolvers/task-step-resolver"));

var _taxRateManager = _interopRequireDefault(require("./managers/tax-rate-manager"));

var _taxRateModel = _interopRequireDefault(require("./models/tax-rate-model"));

var _taxRateResolver = _interopRequireDefault(require("./resolvers/tax-rate-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `store`.
 */
module.exports = {
  order: {
    manager: _orderManager.default,
    model: _orderModel.default,
    resolver: _orderResolver.default
  },
  orderLine: {
    manager: _orderLineManager.default,
    model: _orderLineModel.default,
    resolver: _orderLineResolver.default
  },
  product: {
    manager: _productManager.default,
    model: _productModel.default,
    resolver: _productResolver.default
  },
  productCategory: {
    manager: _productCategoryManager.default,
    model: _productCategoryModel.default,
    resolver: _productCategoryResolver.default
  },
  productImage: {
    manager: _productImageManager.default,
    model: _productImageModel.default,
    resolver: _productImageResolver.default
  },
  question: {
    manager: _questionManager.default,
    model: _questionModel.default,
    resolver: _questionResolver.default
  },
  questionType: {
    manager: _questionTypeManager.default,
    model: _questionTypeModel.default,
    resolver: _questionTypeResolver.default
  },
  task: {
    manager: _taskManager.default,
    model: _taskModel.default,
    resolver: _taskResolver.default
  },
  taskStep: {
    manager: _taskStepManager.default,
    model: _taskStepModel.default,
    resolver: _taskStepResolver.default
  },
  taskStepQuestion: {
    manager: _taskStepQuestionManager.default,
    model: _taskStepQuestionModel.default,
    resolver: _taskStepQuestionResolver.default
  },
  taskStepQuestionAnswer: {
    manager: _taskStepQuestionAnswerManager.default,
    model: _taskStepQuestionAnswerModel.default,
    resolver: _taskStepQuestionAnswerResolver.default
  },
  taxRate: {
    manager: _taxRateManager.default,
    model: _taxRateModel.default,
    resolver: _taxRateResolver.default
  }
};