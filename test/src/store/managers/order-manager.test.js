
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `OrderManager`.
 */

describe('OrderManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('cancel', () => {
    it('should call api `/orders/bar` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar', { reason: 'foobar', refundAmount: '2.00000000' })
        .reply(204);

      const order = await slyk.order.cancel('bar', { reason: 'foobar', refundAmount: '2.00000000' });

      expect(order).toEqual(true);
    });
  });

  describe('create', () => {
    it('should call api `/orders` endpoint with method `post` and return an instance of `Order` model with the given `data`', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        bonus: '0.00000000',
        bonusAssetCode: 'foo',
        customData: {},
        id: 'bar',
        orderStatus: 'unfulfilled',
        paymentStatus: 'unpaid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/orders', {
          chosenPaymentMethod: 'wallet',
          customData: { qux: 'quux' },
          deliveryMethod: 'shipping',
          lines: [{ productId: 'quux', quantity: 2 }],
          shippingAddressId: '123',
          walletId: 'foobar'
        })
        .reply(200, { data });

      const order = await slyk.order.create({
        chosenPaymentMethod: 'wallet',
        customData: { qux: 'quux' },
        deliveryMethod: 'shipping',
        lines: [{ productId: 'quux', quantity: 2 }],
        shippingAddressId: '123',
        walletId: 'foobar'
      });

      expect(order).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('fulfill', () => {
    it('should call api `/orders/bar/fulfill` endpoint with method `post` and return an instance of `Order` model with the given `data`', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        bonus: '0.00000000',
        bonusAssetCode: 'foo',
        customData: {},
        id: 'bar',
        orderStatus: 'fulfilled',
        paymentStatus: 'unpaid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar/fulfill', { trackingId: '123' })
        .reply(200, { data });

      const order = await slyk.order.fulfill('bar', { trackingId: '123' });

      expect(order).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('get', () => {
    it('should call api `/orders/bar` endpoint with method `get` and return an instance of `Order` model with the given `data`', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        bonus: '0.00000000',
        bonusAssetCode: 'foo',
        customData: {},
        id: 'bar',
        orderStatus: 'fulfilled',
        paymentStatus: 'unpaid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/orders/bar')
        .reply(200, { data });

      const order = await slyk.order.get('bar');

      expect(order).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('list', () => {
    it('should call api `/orders` endpoint with method `get` and return an array of instances of `Order` model in the `results` attribute and the `total`', async () => {
      const data = [
        {
          amount: '5.00000000',
          assetCode: 'foo',
          bonus: '0.00000000',
          bonusAssetCode: 'foo',
          customData: {},
          id: 'bar',
          orderStatus: 'fulfilled',
          paymentStatus: 'unpaid',
          walletId: 'foobar'
        },
        {
          amount: '2.00000000',
          assetCode: 'bar',
          bonus: '0.00000000',
          bonusAssetCode: 'bar',
          customData: {},
          id: 'foo',
          orderStatus: 'fulfilled',
          paymentStatus: 'unpaid',
          walletId: 'foobar'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/orders')
        .query({
          page: { number: 1, size: 2 },
          sort: '-assetCode'
        })
        .reply(200, { data, total: 5 });

      const order = await slyk.order.list({
        page: { number: 1, size: 2 },
        sort: [{ direction: 'desc', name: 'assetCode' }]
      });

      expect(order.total).toEqual(5);
      expect(order.results).toEqual([
        { ...data[0], _sdk: expect.any(Object) },
        { ...data[1], _sdk: expect.any(Object) }
      ]);
    });
  });

  describe('patch', () => {
    it('should call api `/orders/bar` endpoint with method `patch` and return an instance of `Order` model with the given `data`', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        bonus: '0.00000000',
        bonusAssetCode: 'foo',
        customData: {},
        id: 'bar',
        orderStatus: 'fulfilled',
        paymentStatus: 'unpaid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .patch('/orders/bar', { trackingId: 'xyzzy' })
        .reply(200, { data });

      const order = await slyk.order.patch('bar', { trackingId: 'xyzzy' });

      expect(order).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('pay', () => {
    it('should call api `/orders/bar/pay` endpoint with method `post` and return an instance of `Order` model with the given `data`', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        bonus: '0.00000000',
        bonusAssetCode: 'foo',
        customData: {},
        id: 'bar',
        orderStatus: 'fulfilled',
        paidAmount: '2.00000000',
        paymentStatus: 'paid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar/pay', { amount: '2.00000000', walletId: 'foobar' })
        .reply(200, { data });

      const order = await slyk.order.pay('bar', { amount: '2.00000000', walletId: 'foobar' });

      expect(order).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('refund', () => {
    it('should call api `/orders/bar/refund` endpoint with method `post` and return an instance of `Order` model with the given `data`', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        bonus: '0.00000000',
        bonusAssetCode: 'foo',
        customData: {},
        id: 'bar',
        orderStatus: 'fulfilled',
        paidAmount: '2.00000000',
        paymentStatus: 'paid',
        refundAmount: '5.00000000',
        refundReason: 'fred',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar/refund', { amount: '5.00000000', reason: 'fred' })
        .reply(200, { data });

      const order = await slyk.order.refund('bar', { amount: '5.00000000', reason: 'fred' });

      expect(order).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('unfulfill', () => {
    it('should call api `/orders/bar/unfulfill` endpoint with method `post` and return an instance of `Order` model with the given `data`', async () => {
      const data = {
        amount: '5.00000000',
        assetCode: 'foo',
        bonus: '0.00000000',
        bonusAssetCode: 'foo',
        customData: {},
        id: 'bar',
        orderStatus: 'unfulfilled',
        paidAmount: '2.00000000',
        paymentStatus: 'unpaid',
        walletId: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/orders/bar/unfulfill')
        .reply(200, { data });

      const order = await slyk.order.unfulfill('bar');

      expect(order).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });
});
