
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `PaymentMethodManager`.
 */

describe('PaymentMethodManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('get', () => {
    it('should call api `/payment-methods/waldo` endpoint with method `get` and return an instance of `PaymentMethod` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/payment-methods/waldo')
        .reply(200, {
          data: {
            metadata: { qux: 'quux' },
            slug: 'waldo'
          }
        });

      const result = await slyk.paymentMethod.get('waldo');

      expect(result).toEqual({
        _sdk: expect.any(Object),
        metadata: { qux: 'quux' },
        slug: 'waldo'
      });
    });
  });

  describe('list', () => {
    it('should call api `/payment-methods` endpoint with method `get` and return an array of instances of `PaymentMethod` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/payment-methods')
        .query({ filter: { enabled: true } })
        .reply(200, {
          data: [
            {
              enabled: true,
              metadata: { qux: 'quux' },
              slug: 'waldo'
            },
            {
              enabled: true,
              metadata: { bar: 'biz' },
              slug: 'fred'
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.paymentMethod.list({ filter: { enabled: true } });

      expect(results).toEqual([
        {
          _sdk: expect.any(Object),
          enabled: true,
          metadata: { qux: 'quux' },
          slug: 'waldo'
        },
        {
          _sdk: expect.any(Object),
          enabled: true,
          metadata: { bar: 'biz' },
          slug: 'fred'
        }
      ]);

      expect(total).toEqual(2);
    });
  });
});
