
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `IdentityManager`.
 */

describe('IdentityManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('approve', () => {
    it('should call api `/identities/bar/approve` endpoint with method `post` and return an instance of `Identity` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/identities/bar/approve')
        .reply(200, { data: { id: 'bar' } });

      const result = await slyk.identity.approve('bar');

      expect(result).toEqual({ id: 'bar' });
    });
  });

  describe('cancel', () => {
    it('should call api `/identities/bar/cancel` endpoint with method `post` and return an instance of `Identity` model', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/identities/bar/cancel', { reason: 'quux' })
        .reply(200, { data: { id: 'bar' } });

      const result = await slyk.identity.cancel('bar', { reason: 'quux' });

      expect(result).toEqual({ id: 'bar' });
    });
  });

  describe('create', () => {
    it('should call api `/identities` endpoint with method `post` and return an instance of `Identity` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/identities', {
          country: 'PT',
          documentNumber: '123',
          documentType: 'national_identity',
          userId: 'foo'
        })
        .reply(200, { data: { id: 'bar' } });

      const result = await slyk.identity.create({
        country: 'PT',
        documentNumber: '123',
        documentType: 'national_identity',
        userId: 'foo'
      });

      expect(result).toEqual({ id: 'bar' });
    });
  });

  describe('delete', () => {
    it('should call api `/identities/bar` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/identities/bar')
        .reply(204);

      const result = await slyk.identity.delete('bar');

      expect(result).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/identities/bar` endpoint with method `get` and return an instance of `Identity` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar')
        .reply(200, { data: { id: 'bar' } });

      const result = await slyk.identity.get('bar');

      expect(result).toEqual({ id: 'bar' });
    });
  });

  describe('list', () => {
    it('should call api `/identities` endpoint with method `get` and return an array of instances of `Identity` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities')
        .query({ filter: { name: 'foo' } })
        .reply(200, {
          data: [{ id: 'bar' }, { id: 'biz' }],
          total: 2
        });

      const { results, total } = await slyk.identity.list({ filter: { name: 'foo' } });

      expect(total).toEqual(2);
      expect(results).toEqual([{ id: 'bar' }, { id: 'biz' }]);
    });
  });

  describe('reject', () => {
    it('should call api `/identities/bar/reject` endpoint with method `post` and return an instance of `Identity` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/identities/bar/reject', { reason: 'waldo' })
        .reply(200, { data: { id: 'bar' } });

      const result = await slyk.identity.reject('bar', { reason: 'waldo' });

      expect(result).toEqual({ id: 'bar' });
    });
  });

  describe('submit', () => {
    it('should call api `/identities/bar/submit` endpoint with method `post` and return an instance of `Identity` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/identities/bar/submit')
        .reply(200, { data: { id: 'bar' } });

      const result = await slyk.identity.submit('bar');

      expect(result).toEqual({ id: 'bar' });
    });
  });
});
