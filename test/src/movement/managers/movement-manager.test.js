
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `MovementManager`.
 */

describe('MovementManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('get', () => {
    it('should call api `/movements/bar` endpoint with method `get` and an instance of `Movement` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/movements/bar')
        .reply(200, { data: { amount: '1', id: 'bar' } });

      const result = await slyk.movement.get('bar');

      expect(result).toEqual({
        _sdk: expect.any(Object),
        amount: '1',
        id: 'bar'
      });
    });
  });

  describe('list', () => {
    it('should call api `/movements` endpoint with method `get` and return an array of instances of `Movement` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/movements')
        .query({ filter: { amount: 'gte:5' } })
        .reply(200, {
          data: [
            { amount: '5', id: 'bar' },
            { amount: '10', id: 'biz' }
          ],
          total: 2
        });

      const { results, total } = await slyk.movement.list({ filter: { amount: 'gte:5' } });

      expect(results).toEqual([
        {
          _sdk: expect.any(Object),
          amount: '5',
          id: 'bar'
        },
        {
          _sdk: expect.any(Object),
          amount: '10',
          id: 'biz'
        }
      ]);

      expect(total).toEqual(2);
    });
  });
});
