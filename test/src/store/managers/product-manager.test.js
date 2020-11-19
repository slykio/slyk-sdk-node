
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `ProductManager`.
 */

describe('ProductManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/products` endpoint with method `post` and return an instance of `Product` model with the given `data`', async () => {
      const data = {
        assetCode: 'bar',
        available: true,
        categoryId: 'quux',
        featured: true,
        id: 'foo',
        name: 'foobiz',
        price: '6.50000000',
        typeCode: 'digital'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/products', {
          assetCode: 'bar',
          available: true,
          categoryId: 'quux',
          featured: true,
          name: 'foobiz',
          price: '6.5',
          typeCode: 'digital'
        })
        .reply(200, { data });

      const product = await slyk.product.create({
        assetCode: 'bar',
        available: true,
        categoryId: 'quux',
        featured: true,
        name: 'foobiz',
        price: '6.5',
        typeCode: 'digital'
      });

      expect(product).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('createQuestion', () => {
    it('should call api `/products/foo/questions` endpoint with method `post` and return an instance of `ProductQuestion` model with the given `data`', async () => {
      const data = {
        createdAt: '2019-03-20T14:30:37.483Z',
        productId: 'foo',
        questionId: 'bar',
        updatedAt: '2019-03-20T14:30:37.483Z'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/products/foo/questions', { questionId: 'bar' })
        .reply(200, { data });

      const productQuestion = await slyk.product.createQuestion('foo', { questionId: 'bar' });

      expect(productQuestion).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('delete', () => {
    it('should call api `/products/foo` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/products/foo')
        .reply(204);

      const product = await slyk.product.delete('foo');

      expect(product).toEqual(true);
    });
  });

  describe('deleteQuestion', () => {
    it('should call api `/products/foo/questions/bar` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/products/foo/questions/bar')
        .reply(204);

      const product = await slyk.product.deleteQuestion('foo', 'bar');

      expect(product).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/products/foo` endpoint with method `get` and return an instance of `Product` model with the given `data`', async () => {
      const data = {
        assetCode: 'bar',
        available: true,
        categoryId: 'quux',
        featured: true,
        id: 'foo',
        name: 'foobiz',
        price: '6.50000000',
        typeCode: 'digital'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/products/foo')
        .reply(200, { data });

      const product = await slyk.product.get('foo');

      expect(product).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('list', () => {
    it('should call api `/products` endpoint with method `get` and return an array of instances of `Product` model in the `results` attribute and the `total`', async () => {
      const data = [
        {
          assetCode: 'bar',
          available: true,
          categoryId: 'quux',
          featured: true,
          id: 'biz',
          name: 'foobiz',
          price: '6.50000000',
          typeCode: 'digital'
        },
        {
          assetCode: 'qux',
          available: true,
          categoryId: 'quux',
          featured: true,
          id: 'bar',
          name: 'foobar',
          price: '1.00000000',
          typeCode: 'digital'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/products')
        .query({
          page: { number: 1, size: 2 },
          sort: 'assetCode'
        })
        .reply(200, { data, total: 5 });

      const product = await slyk.product.list({
        page: { number: 1, size: 2 },
        sort: [{ direction: 'asc', name: 'assetCode' }]
      });

      expect(product.total).toEqual(5);
      expect(product.results).toEqual([
        { ...data[0], _sdk: expect.any(Object) },
        { ...data[1], _sdk: expect.any(Object) }
      ]);
    });
  });

  describe('patch', () => {
    it('should call api `/products/foo` endpoint with method `patch` and return an instance of `Product` model with the given `data`', async () => {
      const data = {
        assetCode: 'bar',
        available: true,
        categoryId: 'quux',
        featured: true,
        id: 'foo',
        name: 'foobiz',
        price: '6.50000000',
        typeCode: 'digital'
      };

      nock(host, { reqheaders: { apikey } })
        .patch('/products/foo', {
          assetCode: 'bar',
          available: true,
          name: 'foobiz'
        })
        .reply(200, { data });

      const product = await slyk.product.patch('foo', {
        assetCode: 'bar',
        available: true,
        name: 'foobiz'
      });

      expect(product).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('reorder', () => {
    it('should call api `/products/foo/reorder` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/products/foo/reorder', { subsequentId: 'bar' })
        .reply(204);

      const response = await slyk.product.reorder('foo', { subsequentId: 'bar' });

      expect(response).toEqual(true);
    });
  });

  describe('reorderQuestion', () => {
    it('should call api `/products/foo/questions/bar/reorder` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/products/foo/questions/bar/reorder', { subsequentId: 'bar' })
        .reply(204);

      const response = await slyk.product.reorderQuestion('foo', 'bar', { subsequentId: 'bar' });

      expect(response).toEqual(true);
    });
  });
});
