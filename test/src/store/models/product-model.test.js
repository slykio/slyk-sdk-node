
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `ProductModel`.
 */

describe('ProductModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('createQuestion', () => {
    it('should return the created `productQuestion` instance', async () => {
      const data = {
        assetCode: 'biz',
        available: false,
        categoryId: 'quux',
        featured: true,
        id: 'foo',
        name: 'foobar',
        price: '6.50000000',
        typeCode: 'digital'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/products/foo')
        .reply(200, { data });

      const product = await slyk.product.get('foo');

      nock(host, { reqheaders: { apikey } })
        .post('/products/foo/questions', { questionId: 'bar' })
        .reply(200, {
          data: {
            createdAt: '2019-03-20T14:30:37.483Z',
            productId: 'foo',
            questionId: 'bar',
            updatedAt: '2019-03-20T14:30:37.483Z'
          }
        });

      const response = await product.createQuestion({ questionId: 'bar' });

      expect(response).toEqual({
        createdAt: '2019-03-20T14:30:37.483Z',
        productId: 'foo',
        questionId: 'bar',
        updatedAt: '2019-03-20T14:30:37.483Z'
      });
    });
  });

  describe('delete', () => {
    it('should return `true` after deleting the `product` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/products/foo')
        .reply(200, {
          data: {
            assetCode: 'bar',
            available: true,
            categoryId: 'quux',
            featured: true,
            id: 'foo',
            name: 'foobiz',
            price: '6.50000000',
            typeCode: 'digital'
          }
        });

      const product = await slyk.product.get('foo');

      nock(host, { reqheaders: { apikey } })
        .delete('/products/foo')
        .reply(204);

      const response = await product.delete();

      expect(response).toEqual(true);
    });
  });

  describe('deleteQuestion', () => {
    it('should return `true` after deleting `productQuestion` instance', async () => {
      const data = {
        assetCode: 'biz',
        available: false,
        categoryId: 'quux',
        featured: true,
        id: 'foo',
        name: 'foobar',
        price: '6.50000000',
        typeCode: 'digital'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/products/foo')
        .reply(200, { data });

      const product = await slyk.product.get('foo');

      nock(host, { reqheaders: { apikey } })
        .delete('/products/foo/questions/bar')
        .reply(204);

      const response = await product.deleteQuestion('bar');

      expect(response).toEqual(true);
    });
  });

  describe('patch', () => {
    it('should return the patched `product` instance', async () => {
      const data = {
        assetCode: 'biz',
        available: false,
        categoryId: 'quux',
        featured: true,
        id: 'foo',
        name: 'foobar',
        price: '6.50000000',
        typeCode: 'digital'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/products/foo')
        .reply(200, { data });

      const product = await slyk.product.get('foo');

      nock(host, { reqheaders: { apikey } })
        .patch('/products/foo', {
          assetCode: 'bar',
          available: true,
          name: 'foobiz'
        })
        .reply(200, {
          data: {
            ...data,
            assetCode: 'bar',
            available: true,
            name: 'foobiz'
          }
        });

      const response = await product.patch({
        assetCode: 'bar',
        available: true,
        name: 'foobiz'
      });

      expect(response).toEqual({
        ...data,
        assetCode: 'bar',
        available: true,
        name: 'foobiz'
      });
    });
  });

  describe('reorder', () => {
    it('should return `true` after reordering the `product` instance', async () => {
      const data = {
        assetCode: 'biz',
        available: false,
        categoryId: 'quux',
        featured: true,
        id: 'foo',
        name: 'foobar',
        price: '6.50000000',
        typeCode: 'digital'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/products/foo')
        .reply(200, { data });

      const product = await slyk.product.get('foo');

      nock(host, { reqheaders: { apikey } })
        .post('/products/foo/reorder', { subsequentId: 'bar' })
        .reply(204);

      const response = await product.reorder({ subsequentId: 'bar' });

      expect(response).toEqual(true);
    });
  });

  describe('reorderQuestion', () => {
    it('should return `true` after reordering the `productQuestion` instance', async () => {
      const data = {
        assetCode: 'biz',
        available: false,
        categoryId: 'quux',
        featured: true,
        id: 'foo',
        name: 'foobar',
        price: '6.50000000',
        typeCode: 'digital'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/products/foo')
        .reply(200, { data });

      const product = await slyk.product.get('foo');

      nock(host, { reqheaders: { apikey } })
        .post('/products/foo/questions/bar/reorder', { subsequentId: 'biz' })
        .reply(204);

      const response = await product.reorderQuestion('bar', { subsequentId: 'biz' });

      expect(response).toEqual(true);
    });
  });
});
