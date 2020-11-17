
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `ProductCategoryModel`.
 */

describe('ProductCategoryModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('delete', () => {
    it('should return `true` after deleting the `productCategory` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/categories/foo')
        .reply(200, {
          data: {
            customData: {},
            description: 'waldo',
            id: 'foo',
            title: 'garply'
          }
        });

      const productCategory = await slyk.productCategory.get('foo');

      nock(host, { reqheaders: { apikey } })
        .delete('/categories/foo')
        .reply(204);

      const response = await productCategory.delete();

      expect(response).toEqual(true);
    });
  });

  describe('patch', () => {
    it('should return the patched `productCategory` instance', async () => {
      const data = {
        customData: {},
        description: 'waldo',
        id: 'foo',
        title: 'garply'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/categories/foo')
        .reply(200, { data });

      const productCategory = await slyk.productCategory.get('foo');

      nock(host, { reqheaders: { apikey } })
        .patch('/categories/foo', {
          customData: { foo: 'bar' },
          description: 'quux',
          title: 'foobiz'
        })
        .reply(200, {
          data: {
            customData: { foo: 'bar' },
            description: 'quux',
            id: 'foo',
            title: 'foobiz'
          }
        });

      const response = await productCategory.patch({
        customData: { foo: 'bar' },
        description: 'quux',
        title: 'foobiz'
      });

      expect(response).toEqual({
        _sdk: expect.any(Object),
        ...data,
        customData: { foo: 'bar' },
        description: 'quux',
        id: 'foo',
        title: 'foobiz'
      });
    });
  });

  describe('reorder', () => {
    it('should return `true` after reordering the `productCategory` instance', async () => {
      const data = {
        customData: {},
        description: 'waldo',
        id: 'foo',
        title: 'garply'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/categories/foo')
        .reply(200, { data });

      const productCategory = await slyk.productCategory.get('foo');

      nock(host, { reqheaders: { apikey } })
        .post('/categories/foo/reorder', { subsequentId: 'bar' })
        .reply(204);

      const response = await productCategory.reorder({ subsequentId: 'bar' });

      expect(response).toEqual(true);
    });
  });
});
