
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `ConnectionManager`.
 */

describe('ConnectionManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/connections` endpoint with method `post` and return an instance of `Connection` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/connections', {
          driver: 'bar',
          name: 'foo',
          uri: 'fred'
        })
        .reply(200, {
          data: {
            driver: 'bar',
            id: 'qux',
            name: 'foo',
            uri: 'fred'
          }
        });

      const result = await slyk.connection.create({
        driver: 'bar',
        name: 'foo',
        uri: 'fred'
      });

      expect(result).toEqual({
        driver: 'bar',
        id: 'qux',
        name: 'foo',
        uri: 'fred'
      });
    });
  });

  describe('get', () => {
    it('should call api `/connections/waldo` endpoint with method `get` and return an instance of `Connection` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/connections/fred')
        .reply(200, { data: { id: 'fred', name: 'waldo' } });

      const result = await slyk.connection.get('fred');

      expect(result).toEqual({ id: 'fred', name: 'waldo' });
    });
  });

  describe('list', () => {
    it('should call api `/connections` endpoint with method `get` and return an array of instances of `Connections` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/connections')
        .query({ filter: { name: 'foo' } })
        .reply(200, {
          data: [
            { id: 'qux', name: 'foobar' },
            { id: 'quux', name: 'foobiz' }
          ],
          total: 2
        });

      const { results, total } = await slyk.connection.list({ filter: { name: 'foo' } });

      expect(results).toEqual([
        {
          id: 'qux',
          name: 'foobar'
        },
        {
          id: 'quux',
          name: 'foobiz'
        }
      ]);

      expect(total).toEqual(2);
    });
  });

  describe('patch', () => {
    it('should call api `/connections/waldo` endpoint with method `patch` and return an instance of `Connection` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .patch('/connections/waldo', { uri: 'fred' })
        .reply(200, { data: { id: 'waldo', uri: 'fred' } });

      const result = await slyk.connection.patch('waldo', { uri: 'fred' });

      expect(result).toEqual({ id: 'waldo', uri: 'fred' });
    });
  });
});
