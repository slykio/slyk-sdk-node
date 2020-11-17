
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `OrderLineModel`.
 */

export default class OrderLineModel extends AbstractModel {

  /**
   * Fulfill.
   */

  fulfill(data) {
    return this._sdk.orderLine.fulfill(this.id, this.orderId, data);
  }

  /**
   * Unfulfill.
   */

  unfulfill() {
    return this._sdk.orderLine.unfulfill(this.id, this.orderId);
  }

}
