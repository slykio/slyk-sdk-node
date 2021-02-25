
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `OrderModel`.
 */

describe('OrderModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('cancel', () => {
    it('should return `true` after canceling the `order` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/orders/bar')
        .reply(200, {
          data: {
            amount: '5.00000000',
            assetCode: 'foo',
            id: 'bar',
            orderStatus: 'unfulfilled',
            paymentStatus: 'unpaid',
            walletId: 'foobar'
          }
        });

      const order = await slyk.order.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar', { reason: 'foobar', refundAmount: '2.00000000' })
        .reply(204);

      const response = await order.cancel({ reason: 'foobar', refundAmount: '2.00000000' });

      expect(response).toEqual(true);
    });
  });

  describe('fulfill', () => {
    it('should return the fulfilled `order` instance', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        id: 'bar',
        orderStatus: 'fulfilled',
        paymentStatus: 'unpaid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/orders/bar')
        .reply(200, { data });

      const order = await slyk.order.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar/fulfill', { trackingId: '123' })
        .reply(200, { data });

      const response = await order.fulfill({ trackingId: '123' });

      expect(response).toEqual(data);
    });
  });

  describe('fulfillOrderLine', () => {
    it('should return the fullfilled `OrderLine` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/orders/foo')
        .reply(200, {
          data: {
            amount: '5.00000000',
            assetCode: 'foo',
            bonus: '0.00000000',
            bonusAssetCode: 'foo',
            customData: {},
            id: 'foo',
            orderStatus: 'fulfilled',
            paymentStatus: 'unpaid',
            walletId: 'foobar'
          }
        });

      const order = await slyk.order.get('foo');

      nock(host, { reqheaders: { apikey } })
        .post('/orders/foo/lines/bar/fulfill', { quantity: 2 })
        .reply(200, {
          data: {
            assetCode: 'quux',
            fulfilledQuantity: 2,
            id: 'bar',
            orderId: 'foo',
            status: 'fulfilled'
          }
        });

      const orderLine = await order.fulfillOrderLine('bar', { quantity: 2 });

      expect(orderLine).toEqual({
        assetCode: 'quux',
        fulfilledQuantity: 2,
        id: 'bar',
        orderId: 'foo',
        status: 'fulfilled'
      });
    });
  });

  describe('getOrderLine', () => {
    it('should return the requested `OrderLine` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/orders/foo')
        .reply(200, {
          data: {
            amount: '5.00000000',
            assetCode: 'foo',
            bonus: '0.00000000',
            bonusAssetCode: 'foo',
            customData: {},
            id: 'foo',
            orderStatus: 'fulfilled',
            paymentStatus: 'unpaid',
            walletId: 'foobar'
          }
        });

      const order = await slyk.order.get('foo');

      nock(host, { reqheaders: { apikey } })
        .get('/orders/foo/lines/bar')
        .reply(200, {
          data: {
            assetCode: 'quux',
            fulfilledQuantity: 2,
            id: 'bar',
            orderId: 'foo',
            status: 'fulfilled'
          }
        });

      const orderLine = await order.getOrderLine('bar');

      expect(orderLine).toEqual({
        assetCode: 'quux',
        fulfilledQuantity: 2,
        id: 'bar',
        orderId: 'foo',
        status: 'fulfilled'
      });
    });
  });

  describe('getOrderLines', () => {
    it('should return an array of `OrderLine` instances', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/orders/foo')
        .reply(200, {
          data: {
            amount: '5.00000000',
            assetCode: 'foo',
            bonus: '0.00000000',
            bonusAssetCode: 'foo',
            customData: {},
            id: 'foo',
            orderStatus: 'fulfilled',
            paymentStatus: 'unpaid',
            walletId: 'foobar'
          }
        });

      const order = await slyk.order.get('foo');

      nock(host, { reqheaders: { apikey } })
        .get('/orders/foo/lines')
        .query({
          page: { number: 1, size: 2 },
          sort: 'assetCode'
        })
        .reply(200, {
          data: [{
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
          }],
          total: 5
        });

      const orderLine = await order.getOrderLines({
        page: { number: 1, size: 2 },
        sort: [{ direction: 'asc', name: 'assetCode' }]
      });

      expect(orderLine.total).toEqual(5);
      expect(orderLine.results).toEqual([{
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
      }]);
    });
  });

  describe('patch', () => {
    it('should return the patched `order` instance', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        id: 'bar',
        orderStatus: 'fulfilled',
        paymentStatus: 'unpaid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/orders/bar')
        .reply(200, { data });

      const order = await slyk.order.get('bar');

      nock(host, { reqheaders: { apikey } })
        .patch('/orders/bar', { trackingId: '123' })
        .reply(200, { data });

      const response = await order.patch({ trackingId: '123' });

      expect(response).toEqual(data);
    });
  });

  describe('pay', () => {
    it('should return the payed `order` instance', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        id: 'bar',
        orderStatus: 'fulfilled',
        paymentStatus: 'paid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/orders/bar')
        .reply(200, { data });

      const order = await slyk.order.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar/pay', { amount: '2.00000000', walletId: 'foobar' })
        .reply(200, { data });

      const response = await order.pay({ amount: '2.00000000', walletId: 'foobar' });

      expect(response).toEqual(data);
    });
  });

  describe('refund', () => {
    it('should return the refunded `order` instance', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        id: 'bar',
        orderStatus: 'fulfilled',
        paymentStatus: 'paid',
        refundAmount: '2.00000000',
        refundReason: 'fred',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/orders/bar')
        .reply(200, { data });

      const order = await slyk.order.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar/refund', { amount: '2.00000000', reason: 'fred' })
        .reply(200, { data });

      const response = await order.refund({ amount: '2.00000000', reason: 'fred' });

      expect(response).toEqual(data);
    });
  });

  describe('unfulfill', () => {
    it('should return the unfulfilled `order` instance', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        id: 'bar',
        orderStatus: 'unfulfilled',
        paymentStatus: 'unpaid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/orders/bar')
        .reply(200, { data });

      const order = await slyk.order.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar/unfulfill')
        .reply(200, { data });

      const response = await order.unfulfill();

      expect(response).toEqual(data);
    });
  });

  describe('unfulfillOrderLine', () => {
    it('should return the unfullfilled `OrderLine` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/orders/foo')
        .reply(200, {
          data: {
            amount: '5.00000000',
            assetCode: 'foo',
            bonus: '0.00000000',
            bonusAssetCode: 'foo',
            customData: {},
            id: 'foo',
            orderStatus: 'fulfilled',
            paymentStatus: 'unpaid',
            walletId: 'foobar'
          }
        });

      const order = await slyk.order.get('foo');

      nock(host, { reqheaders: { apikey } })
        .post('/orders/foo/lines/bar/unfulfill')
        .reply(200, {
          data: {
            assetCode: 'quux',
            fulfilledQuantity: 2,
            id: 'bar',
            orderId: 'foo',
            status: 'unfulfilled'
          }
        });

      const orderLine = await order.unfulfillOrderLine('bar');

      expect(orderLine).toEqual({
        assetCode: 'quux',
        fulfilledQuantity: 2,
        id: 'bar',
        orderId: 'foo',
        status: 'unfulfilled'
      });
    });
  });
});
