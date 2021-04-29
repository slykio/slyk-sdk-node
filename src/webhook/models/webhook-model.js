
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `WebhookModel`.
 */

export default class WebhookModel extends AbstractModel {

  /**
   * Delete.
   */

  delete() {
    return WebhookModel.sdk.webhook.delete(this.id);
  }

  /**
   * Patch.
   */

  patch(data) {
    return WebhookModel.sdk.webhook.patch(this.id, data);
  }

}
