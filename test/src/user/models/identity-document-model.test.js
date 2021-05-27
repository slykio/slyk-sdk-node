
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `IdentityDocumentModel`.
 */

describe('IdentityDocumentModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('delete', () => {
    it('should return `true` after deleting the `identityDocument` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/identities/bar/documents/foo')
        .reply(200, {
          data: {
            id: 'foo',
            identityId: 'bar'
          }
        });

      const identityDocument = await slyk.identityDocument.get('foo', 'bar');

      nock(host, { reqheaders: { apikey } })
        .delete('/identities/bar/documents/foo')
        .reply(204);

      const result = await identityDocument.delete();

      expect(result).toEqual(true);
    });
  });
});
