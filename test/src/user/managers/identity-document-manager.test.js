
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `IdentityDocumentManager`.
 */

describe('IdentityDocumentManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/identities/bar/documents` endpoint with method `post` and return an instance of `IdentityDocument` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/identities/bar/documents', { file: 'http://document.url' })
        .reply(200, { data: { id: 'foo' } });

      const result = await slyk.identityDocument.create('bar', { file: 'http://document.url' });

      expect(result).toEqual({ id: 'foo' });
    });
  });

  describe('delete', () => {
    it('should call api `/identities/bar/documents/foo` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/identities/bar/documents/foo')
        .reply(204);

      const result = await slyk.identityDocument.delete('foo', 'bar');

      expect(result).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/identities/bar/documents/foo` endpoint with method `get` and return an instance of `IdentityDocument` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar/documents/foo')
        .reply(200, { data: { id: 'foo' } });

      const result = await slyk.identityDocument.get('foo', 'bar');

      expect(result).toEqual({ id: 'foo' });
    });
  });

  describe('list', () => {
    it('should call api `/identities/bar/documents` endpoint with method `get` and return an array of instances of `IdentityDocument` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar/documents')
        .query({ sort: '-createdAt' })
        .reply(200, {
          data: [{ id: 'waldo' }, { id: 'fred' }],
          total: 2
        });

      const { results, total } = await slyk.identityDocument.list('bar', { sort: '-createdAt' });

      expect(total).toEqual(2);
      expect(results).toEqual([{ id: 'waldo' }, { id: 'fred' }]);
    });
  });
});
