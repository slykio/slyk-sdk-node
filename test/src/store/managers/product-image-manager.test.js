
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `ProductImageManager`.
 */

describe('ProductImageManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/products/foo/images` endpoint with method `post` and return an instance of `ProductImage` model with the given `data`', async () => {
      const data = {
        customData: { foo: 'bar' },
        id: 'biz',
        imageUrl: 'corge',
        productId: 'foo'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/products/foo/images', {
          customData: { foo: 'bar' },
          image: 'corge'
        })
        .reply(200, { data });

      const productImage = await slyk.productImage.create('foo', {
        customData: { foo: 'bar' },
        image: 'corge'
      });

      expect(productImage).toEqual(data);
    });
  });

  describe('delete', () => {
    it('should call api `/products/foo/images/biz` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/products/foo/images/biz')
        .reply(204);

      const productImage = await slyk.productImage.delete('biz', 'foo');

      expect(productImage).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/products/foo/images/biz` endpoint with method `get` and return an instance of `ProductImage` model with the given `data`', async () => {
      const data = {
        customData: {},
        id: 'biz',
        imageUrl: 'corge',
        productId: 'foo'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/products/foo/images/biz')
        .query({ include: { product: true } })
        .reply(200, { data });

      const productImage = await slyk.productImage.get('biz', 'foo', {
        include: { product: true }
      });

      expect(productImage).toEqual(data);
    });
  });

  describe('list', () => {
    it('should call api `/products/foo/images` endpoint with method `get` and return an array of instances of `ProductImage` model in the `results` attribute and the `total`', async () => {
      const data = [{
        customData: {},
        id: 'biz',
        imageUrl: 'corge',
        productId: 'foo'
      }, {
        customData: {},
        id: 'garply',
        imageUrl: 'grault',
        productId: 'foo'
      }];

      nock(host, { reqheaders: { apikey } })
        .get('/products/foo/images')
        .query({
          page: { number: 1, size: 2 },
          sort: 'title'
        })
        .reply(200, { data, total: 5 });

      const productImage = await slyk.productImage.list('foo', {
        page: { number: 1, size: 2 },
        sort: [{ direction: 'asc', name: 'title' }]
      });

      expect(productImage.total).toEqual(5);
      expect(productImage.results).toEqual(data);
    });
  });

  describe('reorder', () => {
    it('should call api `/products/foo/images/biz/reorder` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/products/foo/images/biz/reorder', { subsequentId: 'bar' })
        .reply(204);

      const response = await slyk.productImage.reorder('biz', 'foo', { subsequentId: 'bar' });

      expect(response).toEqual(true);
    });
  });
});
