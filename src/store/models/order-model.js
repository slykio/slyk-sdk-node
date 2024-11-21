
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `OrderModel`.
 */

export default class OrderModel extends AbstractModel {

  /**
   * Cancel.
   */

  cancel(data) {
    return OrderModel.sdk.order.cancel(this.id, data);
  }

  /**
   * Fulfill.
   */

  fulfill(data) {
    return OrderModel.sdk.order.fulfill(this.id, data);
  }

  /**
   * Fulfill order line.
   */

  fulfillOrderLine(orderLineId, data) {
    return OrderModel.sdk.orderLine.fulfill(orderLineId, this.id, data);
  }

  /**
   * Get order.
   */

  get(options) {
    return OrderModel.sdk.order.get(this.id, options);
  }

  /**
   * Get order line.
   */

  getOrderLine(orderLineId, options) {
    return OrderModel.sdk.orderLine.get(orderLineId, this.id, options);
  }

  /**
   * Get order lines.
   */

  getOrderLines(options) {
    return OrderModel.sdk.orderLine.list(this.id, options);
  }

  /**
   * Patch.
   */

  patch(data) {
    return OrderModel.sdk.order.patch(this.id, data);
  }

  /**
   * Pay.
   */

  pay(data) {
    return OrderModel.sdk.order.pay(this.id, data);
  }

  /**
   * Refund.
   */

  refund(data) {
    return OrderModel.sdk.order.refund(this.id, data);
  }

  /**
   * Unfulfill.
   */

  unfulfill() {
    return OrderModel.sdk.order.unfulfill(this.id);
  }

  /**
   * Unfulfill order line.
   */

  unfulfillOrderLine(orderLineId) {
    return OrderModel.sdk.orderLine.unfulfill(orderLineId, this.id);
  }

}
