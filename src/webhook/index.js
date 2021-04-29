
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import WebhookManager from 'webhook/managers/webhook-manager';
import WebhookModel from 'webhook/models/webhook-model';
import WebhookResolver from 'webhook/resolvers/webhook-resolver';

/**
 * Export `webhook`.
 */

export default {
  manager: WebhookManager,
  model: WebhookModel,
  resolver: WebhookResolver
};
