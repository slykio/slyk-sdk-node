
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `OrderLineModel`.
 */

describe('OrderLineModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('fulfill', () => {
    it('should return the fulfilled `OrderLine` instance', async () => {
      const data = {
        assetCode: 'quux',
        fulfilledQuantity: 2,
        id: 'bar',
        orderId: 'foo',
        status: 'unfulfilled'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/orders/foo/lines/bar')
        .reply(200, { data });

      const orderLine = await slyk.orderLine.get('bar', 'foo');

      nock(host, { reqheaders: { apikey } })
        .post('/orders/foo/lines/bar/fulfill', { quantity: 2 })
        .reply(200, {
          data: { ...data, status: 'fulfilled' }
        });

      const response = await orderLine.fulfill({ quantity: 2 });

      expect(response).toEqual({
        _sdk: expect.any(Object),
        ...data,
        status: 'fulfilled'
      });
    });
  });

  describe('unfulfill', () => {
    it('should return the unfulfilled `OrderLine` instance', async () => {
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

      nock(host, { reqheaders: { apikey } })
        .post('/orders/foo/lines/bar/unfulfill')
        .reply(200, {
          data: { ...data, status: 'unfulfilled' }
        });

      const response = await orderLine.unfulfill();

      expect(response).toEqual({
        _sdk: expect.any(Object),
        ...data,
        status: 'unfulfilled'
      });
    });
  });
});
