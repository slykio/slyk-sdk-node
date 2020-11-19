
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `TaxRateModel`.
 */

describe('TaxRateModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('delete', () => {
    it('should return `true` after deleting the `taxRate` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/tax-rates/foo')
        .reply(200, {
          data: {
            id: 'foo',
            name: 'bar',
            rate: '5.00000000'
          }
        });

      const taxRate = await slyk.taxRate.get('foo');

      nock(host, { reqheaders: { apikey } })
        .delete('/tax-rates/foo')
        .reply(204);

      const response = await taxRate.delete();

      expect(response).toEqual(true);
    });
  });

  describe('patch', () => {
    it('should return the patched `taxRate` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/tax-rates/foo')
        .reply(200, {
          data: {
            id: 'foo',
            name: 'bar',
            rate: '5.00000000'
          }
        });

      const taxRate = await slyk.taxRate.get('foo');

      nock(host, { reqheaders: { apikey } })
        .patch('/tax-rates/foo', { name: 'biz', rate: '1.00000000' })
        .reply(200, {
          data: {
            id: 'foo',
            name: 'biz',
            rate: '1.00000000'
          }
        });

      const response = await taxRate.patch({ name: 'biz', rate: '1.00000000' });

      expect(response).toEqual({
        _sdk: expect.any(Object),
        id: 'foo',
        name: 'biz',
        rate: '1.00000000'
      });
    });
  });
});
