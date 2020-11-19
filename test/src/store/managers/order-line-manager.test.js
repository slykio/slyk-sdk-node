
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `OrderLineManager`.
 */

describe('OrderLineManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('fulfill', () => {
    it('should call api `/orders/bar/lines/foo/fulfill` endpoint with method `post` and return an instance of `OrderLine` model with the given `data`', async () => {
      const data = {
        assetCode: 'quux',
        fulfilledQuantity: 2,
        id: 'bar',
        orderId: 'foo',
        status: 'fulfilled'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar/lines/foo/fulfill', { quantity: 2 })
        .reply(200, { data });

      const orderLine = await slyk.orderLine.fulfill('foo', 'bar', { quantity: 2 });

      expect(orderLine).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('get', () => {
    it('should call api `/orders/foo/lines/bar` endpoint with method `get` and return an instance of `OrderLine` model with the given `data`', async () => {
      const data = {
        assetCode: 'quux',
        fulfilledQuantity: 2,
        id: 'bar',
        orderId: 'foo',
        status: 'fulfilled'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/orders/foo/lines/bar')
        .reply(200, { data });

      const orderLine = await slyk.orderLine.get('bar', 'foo');

      expect(orderLine).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('list', () => {
    it('should call api `/orders/foo/lines` endpoint with method `get` and return an array of instances of `OrderLine` model in the `results` attribute and the `total`', async () => {
      const data = [
        {
          assetCode: 'quux',
          fulfilledQuantity: 2,
          id: 'bar',
          orderId: 'foo',
          status: 'fulfilled'
        },
        {
          assetCode: 'waldo',
          fulfilledQuantity: 1,
          id: 'qux',
          orderId: 'foo',
          status: 'unfulfilled'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/orders/foo/lines')
        .query({
          page: { number: 1, size: 2 },
          sort: 'assetCode'
        })
        .reply(200, { data, total: 5 });

      const orderLine = await slyk.orderLine.list('foo', {
        page: { number: 1, size: 2 },
        sort: [{ direction: 'asc', name: 'assetCode' }]
      });

      expect(orderLine.total).toEqual(5);
      expect(orderLine.results).toEqual([
        { ...data[0], _sdk: expect.any(Object) },
        { ...data[1], _sdk: expect.any(Object) }
      ]);
    });
  });

  describe('unfulfill', () => {
    it('should call api `/orders/foo/lines/bar/unfulfill` endpoint with method `post` and return an instance of `OrderLine` model with the given `data`', async () => {
      const data = {
        assetCode: 'quux',
        fulfilledQuantity: 2,
        id: 'bar',
        orderId: 'foo',
        status: 'fulfilled'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/orders/foo/lines/bar/unfulfill')
        .reply(200, { data });

      const orderLine = await slyk.orderLine.unfulfill('bar', 'foo');

      expect(orderLine).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });
});
