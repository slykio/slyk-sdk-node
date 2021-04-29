
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `WebhookManager`.
 */

describe('WebhookManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/webhooks` endpoint with method `post` and return an instance of `Webhook` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/webhooks')
        .reply(200, { data: { description: 'bar', enabled: true } });

      const result = await slyk.webhook.create();

      expect(result).toEqual({ description: 'bar', enabled: true });
    });
  });

  describe('delete', () => {
    it('should call api `/webhooks/bar` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/webhooks/bar')
        .reply(204);

      const result = await slyk.webhook.delete('bar');

      expect(result).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/webhooks/bar` endpoint with method `get` and return an instance of `Webhook` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/webhooks/bar')
        .query({ include: 'webhookEvents' })
        .reply(200, {
          data: {
            description: 'bar',
            enabled: true,
            webhookEvents: [{ id: 'foo', status: 'completed' }]
          }
        });

      const result = await slyk.webhook.get('bar', { include: 'webhookEvents' });

      expect(result).toEqual({
        description: 'bar',
        enabled: true,
        webhookEvents: [{ id: 'foo', status: 'completed' }]
      });
    });
  });

  describe('list', () => {
    it('should call api `/webhooks` endpoint with method `get` and return an array of instances of `Webhook` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/webhooks')
        .query({ page: { number: 3, size: 2 } })
        .reply(200, {
          data: [
            { description: 'bar', enabled: true },
            { description: 'foo', enabled: true }
          ],
          total: 2
        });

      const { results, total } = await slyk.webhook.list({ page: { number: 3, size: 2 } });

      expect(results).toEqual([
        { description: 'bar', enabled: true },
        { description: 'foo', enabled: true }
      ]);

      expect(total).toEqual(2);
    });
  });

  describe('patch', () => {
    it('should call api `/webhooks/bar` endpoint with method `patch` and return an instance of `Webhook` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .patch('/webhooks/bar', { enabled: false })
        .reply(200, { data: { description: 'bar', enabled: false } });

      const result = await slyk.webhook.patch('bar', { enabled: false });

      expect(result).toEqual({ description: 'bar', enabled: false });
    });
  });
});
