
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `WebhookModel`.
 */

describe('WebhookModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('delete', () => {
    it('should return `true` after deleting the `webhook` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/webhooks/bar')
        .reply(200, { data: { enabled: true, id: 'bar' } });

      const webhook = await slyk.webhook.get('bar');

      nock(host, { reqheaders: { apikey } })
        .delete('/webhooks/bar')
        .reply(204);

      const response = await webhook.delete();

      expect(response).toEqual(true);
    });
  });

  describe('patch', () => {
    it('should return the patched `webhook`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/webhooks/bar')
        .reply(200, { data: { enabled: true, id: 'bar' } });

      const webhook = await slyk.webhook.get('bar');

      nock(host, { reqheaders: { apikey } })
        .patch('/webhooks/bar', { enabled: false })
        .reply(200, { data: { enabled: false, id: 'bar' } });

      const patchedWebhook = await webhook.patch({ enabled: false });

      expect(patchedWebhook).toEqual({ enabled: false, id: 'bar' });
    });
  });
});
