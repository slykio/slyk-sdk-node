
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `TaxRateManager`.
 */

describe('TaxRateManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/tax-rates` endpoint with method `post` and return an instance of `TaxRate` model with the given `data`', async () => {
      const data = {
        id: 'foo',
        name: 'bar',
        rate: '5.00000000'
      };

      nock(host, { reqheaders: { apikey } })
        .post('/tax-rates', { name: 'foo', rate: '5.00000000' })
        .reply(200, { data });

      const taxRate = await slyk.taxRate.create({ name: 'foo', rate: '5.00000000' });

      expect(taxRate).toEqual(data);
    });
  });

  describe('delete', () => {
    it('should call api `/tax-rates/foo` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/tax-rates/foo')
        .reply(204);

      const taxRate = await slyk.taxRate.delete('foo');

      expect(taxRate).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/tax-rates/foo` endpoint with method `get` and return an instance of `TaxRate` model with the given `data`', async () => {
      const data = {
        id: 'foo',
        name: 'bar',
        rate: '5.00000000'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/tax-rates/foo')
        .reply(200, { data });

      const taxRate = await slyk.taxRate.get('foo');

      expect(taxRate).toEqual(data);
    });
  });

  describe('list', () => {
    it('should call api `/tax-rates` endpoint with method `get` and return an array of instances of `TaxRate` model in the `results` attribute and the `total`', async () => {
      const data = [
        {
          id: 'foo',
          name: 'bar',
          rate: '5.00000000'
        },
        {
          id: 'qux',
          name: 'quux',
          rate: '1.00000000'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/tax-rates')
        .query({
          page: { number: 1, size: 2 }
        })
        .reply(200, { data, total: 5 });

      const taxRate = await slyk.taxRate.list({
        page: { number: 1, size: 2 }
      });

      expect(taxRate.total).toEqual(5);
      expect(taxRate.results).toEqual(data);
    });
  });

  describe('patch', () => {
    it('should call api `/tax-rates/foo` endpoint with method `patch` and return an instance of `TaxRate` model with the given `data`', async () => {
      const data = {
        id: 'foo',
        name: 'bar',
        rate: '5.00000000'
      };

      nock(host, { reqheaders: { apikey } })
        .patch('/tax-rates/foo', { name: 'bar', rate: '5.00000000' })
        .reply(200, { data });

      const taxRate = await slyk.taxRate.patch('foo', { name: 'bar', rate: '5.00000000' });

      expect(taxRate).toEqual(data);
    });
  });
});
