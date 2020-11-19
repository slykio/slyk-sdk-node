
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
    return this._sdk.order.cancel(this.id, data);
  }

  /**
   * Fulfill.
   */

  fulfill(data) {
    return this._sdk.order.fulfill(this.id, data);
  }

  /**
   * Fulfill order line.
   */

  fulfillOrderLine(orderLineId, data) {
    return this._sdk.orderLine.fulfill(orderLineId, this.id, data);
  }

  /**
   * Get order line.
   */

  getOrderLine(orderLineId, options) {
    return this._sdk.orderLine.get(orderLineId, this.id, options);
  }

  /**
   * Get order lines.
   */

  getOrderLines(options) {
    return this._sdk.orderLine.list(this.id, options);
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.order.patch(this.id, data);
  }

  /**
   * Pay.
   */

  pay(data) {
    return this._sdk.order.pay(this.id, data);
  }

  /**
   * Refund.
   */

  refund(data) {
    return this._sdk.order.refund(this.id, data);
  }

  /**
   * Unfulfill.
   */

  unfulfill() {
    return this._sdk.order.unfulfill(this.id);
  }

  /**
   * Unfulfill order line.
   */

  unfulfillOrderLine(orderLineId) {
    return this._sdk.orderLine.unfulfill(orderLineId, this.id);
  }

}
