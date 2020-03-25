
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `UserManager`.
 */

describe('UserManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('accept', () => {
    it('should call api `/user/bar/approve` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/approve')
        .reply(204);

      const result = await slyk.user.approve('bar');

      expect(result).toEqual(true);
    });
  });

  describe('block', () => {
    it('should call api `/users/bar/block` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/block')
        .reply(204);

      const result = await slyk.user.block('bar');

      expect(result).toEqual(true);
    });
  });

  describe('changePassword', () => {
    it('should call api `/users/bar/change-password` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/change-password', { password: 'corge' })
        .reply(204);

      const result = await slyk.user.changePassword('bar', { password: 'corge' });

      expect(result).toEqual(true);
    });
  });

  describe('create', () => {
    it('should call api `/users` endpoint with method `post` and return an instance of `User` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users', { email: 'foo@bar.com', password: 'corge' })
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const result = await slyk.user.create({ email: 'foo@bar.com', password: 'corge' });

      expect(result).toEqual({
        _sdk: expect.any(Object),
        email: 'foo@bar.com',
        id: 'bar',
        metadata: {}
      });
    });
  });

  describe('get', () => {
    it('should call api `/users/bar` endpoint with method `get` and return an instance of `User` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const result = await slyk.user.get('bar');

      expect(result).toEqual({
        _sdk: expect.any(Object),
        email: 'foo@bar.com',
        id: 'bar',
        metadata: {}
      });
    });
  });

  describe('list', () => {
    it('should call api `/users` endpoint with method `get` and return an array of instances of `User` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users')
        .query({ filter: { name: 'foo' } })
        .reply(200, {
          data: [
            {
              email: 'foo@bar.com',
              id: 'bar',
              metadata: {},
              name: 'foobar'
            },
            {
              email: 'foo@biz.com',
              id: 'biz',
              metadata: {},
              name: 'foobiz'
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.user.list({ filter: { name: 'foo' } });

      expect(results).toEqual([
        {
          _sdk: expect.any(Object),
          email: 'foo@bar.com',
          id: 'bar',
          metadata: {},
          name: 'foobar'
        },
        {
          _sdk: expect.any(Object),
          email: 'foo@biz.com',
          id: 'biz',
          metadata: {},
          name: 'foobiz'
        }
      ]);

      expect(total).toEqual(2);
    });
  });

  describe('patch', () => {
    it('should call api `/users/bar` endpoint with method `patch` and return an instance of `User` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .patch('/users/bar', { name: 'foobar' })
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {},
            name: 'foobar'
          }
        });

      const result = await slyk.user.patch('bar', { name: 'foobar' });

      expect(result).toEqual({
        _sdk: expect.any(Object),
        email: 'foo@bar.com',
        id: 'bar',
        metadata: {},
        name: 'foobar'
      });
    });
  });

  describe('unblock', () => {
    it('should call api `/users/bar/unblock` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/unblock')
        .reply(204);

      const result = await slyk.user.unblock('bar');

      expect(result).toEqual(true);
    });
  });
});
