
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `ProductCategoryManager`.
 */

describe('ProductCategoryManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/categories` endpoint with method `post` and return an instance of `ProductCategory` model with the given `data`', async () => {
      const data = {
        customData: {},
        description: 'waldo',
        id: 'foo',
        title: 'garply'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/categories', {
          customData: { foo: 'bar' },
          description: 'waldo',
          id: 'foo',
          title: 'garply'
        })
        .reply(200, { data });

      const productCategory = await slyk.productCategory.create({
        customData: { foo: 'bar' },
        description: 'waldo',
        id: 'foo',
        title: 'garply'
      });

      expect(productCategory).toEqual(data);
    });
  });

  describe('delete', () => {
    it('should call api `/categories/foo` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/categories/foo')
        .reply(204);

      const productCategory = await slyk.productCategory.delete('foo');

      expect(productCategory).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/categories/foo` endpoint with method `get` and return an instance of `ProductCategory` model with the given `data`', async () => {
      const data = {
        customData: {},
        description: 'waldo',
        id: 'foo',
        title: 'garply'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/categories/foo')
        .query({ include: { products: true } })
        .reply(200, { data });

      const productCategory = await slyk.productCategory.get('foo', { include: { products: true } });

      expect(productCategory).toEqual(data);
    });
  });

  describe('list', () => {
    it('should call api `/categories` endpoint with method `get` and return an array of instances of `ProductCategory` model in the `results` attribute and the `total`', async () => {
      const data = [
        {
          customData: {},
          description: 'waldo',
          id: 'foo',
          title: 'garply'
        },
        {
          customData: {},
          description: 'quux',
          id: 'bar',
          title: 'qux'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/categories')
        .query({
          page: { number: 1, size: 2 },
          sort: 'title'
        })
        .reply(200, { data, total: 5 });

      const productCategory = await slyk.productCategory.list({
        page: { number: 1, size: 2 },
        sort: [{ direction: 'asc', name: 'title' }]
      });

      expect(productCategory.total).toEqual(5);
      expect(productCategory.results).toEqual(data);
    });
  });

  describe('patch', () => {
    it('should call api `/categories/foo` endpoint with method `patch` and return an instance of `ProductCategory` model with the given `data`', async () => {
      const data = {
        customData: { foo: 'bar' },
        description: 'quux',
        id: 'foo',
        title: 'foobiz'
      };

      nock(host, { reqheaders: { apikey } })
        .patch('/categories/foo', {
          customData: { foo: 'bar' },
          description: 'quux',
          title: 'foobiz'
        })
        .reply(200, { data });

      const productCategory = await slyk.productCategory.patch('foo', {
        customData: { foo: 'bar' },
        description: 'quux',
        title: 'foobiz'
      });

      expect(productCategory).toEqual(data);
    });
  });

  describe('reorder', () => {
    it('should call api `/categories/foo/reorder` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/categories/foo/reorder', { subsequentId: 'bar' })
        .reply(204);

      const response = await slyk.productCategory.reorder('foo', { subsequentId: 'bar' });

      expect(response).toEqual(true);
    });
  });
});
