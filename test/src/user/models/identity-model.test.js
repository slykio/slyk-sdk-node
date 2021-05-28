
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `IdentityModel`.
 */

describe('IdentityModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('approve', () => {
    it('should return `true` after approving the `identity` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar')
        .reply(200, { data: { id: 'bar' } });

      const identity = await slyk.identity.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/identities/bar/approve')
        .reply(200, { data: { id: 'bar', status: 'approved' } });

      const result = await identity.approve();

      expect(result).toEqual({ id: 'bar', status: 'approved' });
    });
  });

  describe('cancel', () => {
    it('should return `true` after canceling the `identity` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar')
        .reply(200, { data: { id: 'bar' } });

      const identity = await slyk.identity.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/identities/bar/cancel', { reason: 'quux' })
        .reply(200, { data: { id: 'bar', status: 'canceled' } });

      const result = await identity.cancel({ reason: 'quux' });

      expect(result).toEqual({ id: 'bar', status: 'canceled' });
    });
  });

  describe('delete', () => {
    it('should return `true` after deleting the `identity` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar')
        .reply(200, { data: { id: 'bar' } });

      const identity = await slyk.identity.get('bar');

      nock(host, { reqheaders: { apikey } })
        .delete('/identities/bar')
        .reply(204);

      const result = await identity.delete();

      expect(result).toEqual(true);
    });
  });

  describe('getDocument', () => {
    it('should return the `document` with given `id` related with the `identity` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar')
        .reply(200, { data: { id: 'bar' } });

      const identity = await slyk.identity.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar/documents/foo')
        .reply(200, { data: { id: 'foo' } });

      const result = await identity.getDocument('foo');

      expect(result).toEqual({ id: 'foo' });
    });
  });

  describe('listDocuments', () => {
    it('should return the list of `document` related with the `identity` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar')
        .reply(200, { data: { id: 'bar' } });

      const identity = await slyk.identity.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar/documents')
        .query({ sort: 'createdAt' })
        .reply(200, {
          data: [
            { id: 'waldo' },
            { id: 'fred' }
          ],
          total: 2
        });

      const { results, total } = await identity.listDocuments({ sort: [{ name: 'createdAt' }] });

      expect(total).toEqual(2);
      expect(results).toEqual([{ id: 'waldo' }, { id: 'fred' }]);
    });
  });

  describe('reject', () => {
    it('should return `true` after rejecting the `identity` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar')
        .reply(200, { data: { id: 'bar' } });

      const identity = await slyk.identity.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/identities/bar/reject', { reason: 'quux' })
        .reply(200, { data: { id: 'bar', status: 'rejected' } });

      const result = await identity.reject({ reason: 'quux' });

      expect(result).toEqual({ id: 'bar', status: 'rejected' });
    });
  });

  describe('submit', () => {
    it('should return `true` after submitting the `identity` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar')
        .reply(200, { data: { id: 'bar' } });

      const identity = await slyk.identity.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/identities/bar/submit')
        .reply(200, { data: { id: 'bar', status: 'processing' } });

      const result = await identity.submit();

      expect(result).toEqual({ id: 'bar', status: 'processing' });
    });
  });
});
