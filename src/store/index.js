
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import OrderLineManager from 'store/managers/order-line-manager';
import OrderLineModel from 'store/models/order-line-model';
import OrderLineResolver from 'store/resolvers/order-line-resolver';
import OrderManager from 'store/managers/order-manager';
import OrderModel from 'store/models/order-model';
import OrderResolver from 'store/resolvers/order-resolver';
import ProductCategoryManager from 'store/managers/product-category-manager';
import ProductCategoryModel from 'store/models/product-category-model';
import ProductCategoryResolver from 'store/resolvers/product-category-resolver';
import ProductImageManager from 'store/managers/product-image-manager';
import ProductImageModel from 'store/models/product-image-model';
import ProductImageResolver from 'store/resolvers/product-image-resolver';
import ProductManager from 'store/managers/product-manager';
import ProductModel from 'store/models/product-model';
import ProductResolver from 'store/resolvers/product-resolver';
import QuestionManager from 'store/managers/question-manager';
import QuestionModel from 'store/models/question-model';
import QuestionResolver from 'store/resolvers/question-resolver';
import QuestionTypeManager from 'store/managers/question-type-manager';
import QuestionTypeModel from 'store/models/question-type-model';
import QuestionTypeResolver from 'store/resolvers/question-type-resolver';
import TaskManager from 'store/managers/task-manager';
import TaskModel from 'store/models/task-model';
import TaskResolver from 'store/resolvers/task-resolver';
import TaxRateManager from 'store/managers/tax-rate-manager';
import TaxRateModel from 'store/models/tax-rate-model';
import TaxRateResolver from 'store/resolvers/tax-rate-resolver';

/**
 * Export `store`.
 */

module.exports = {
  order: {
    manager: OrderManager,
    model: OrderModel,
    resolver: OrderResolver
  },
  orderLine: {
    manager: OrderLineManager,
    model: OrderLineModel,
    resolver: OrderLineResolver
  },
  product: {
    manager: ProductManager,
    model: ProductModel,
    resolver: ProductResolver
  },
  productCategory: {
    manager: ProductCategoryManager,
    model: ProductCategoryModel,
    resolver: ProductCategoryResolver
  },
  productImage: {
    manager: ProductImageManager,
    model: ProductImageModel,
    resolver: ProductImageResolver
  },
  question: {
    manager: QuestionManager,
    model: QuestionModel,
    resolver: QuestionResolver
  },
  questionType: {
    manager: QuestionTypeManager,
    model: QuestionTypeModel,
    resolver: QuestionTypeResolver
  },
  task: {
    manager: TaskManager,
    model: TaskModel,
    resolver: TaskResolver
  },
  taxRate: {
    manager: TaxRateManager,
    model: TaxRateModel,
    resolver: TaxRateResolver
  }

};
