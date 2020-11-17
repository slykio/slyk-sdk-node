
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
    it('should return `true` after deleting the `productImage` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/products/foo/images/biz')
        .reply(200, {
          data: {
            customData: {},
            id: 'biz',
            imageUrl: 'corge',
            productId: 'foo'
          }
        });

      const productImage = await slyk.productImage.get('biz', 'foo');

      nock(host, { reqheaders: { apikey } })
        .delete('/products/foo/images/biz')
        .reply(204);

      const response = await productImage.delete();

      expect(response).toEqual(true);
    });
  });

  describe('reorder', () => {
    it('should return `true` after reordering the `productImage` instance', async () => {
      const data = {
        customData: {},
        id: 'biz',
        imageUrl: 'corge',
        productId: 'foo'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/products/foo/images/biz')
        .reply(200, { data });

      const productImage = await slyk.productImage.get('biz', 'foo');

      nock(host, { reqheaders: { apikey } })
        .post('/products/foo/images/biz/reorder', { subsequentId: 'bar' })
        .reply(204);

      const response = await productImage.reorder({ subsequentId: 'bar' });

      expect(response).toEqual(true);
    });
  });
});
