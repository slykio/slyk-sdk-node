
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `AuthManager`.
 */

describe('AuthManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('login', () => {
    it('should call api `/auth/token` endpoint with method `post` and return an instance of `Auth` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/auth/token', { email: 'foo@bar.com', password: 'Foobar123' })
        .reply(200, {
          data: {
            refreshToken: '123',
            roles: ['user'],
            token: '456'
          }
        });

      const result = await slyk.auth.login({ email: 'foo@bar.com', password: 'Foobar123' });

      expect(result).toEqual({
        _sdk: expect.any(Object),
        refreshToken: '123',
        roles: ['user'],
        token: '456'
      });
    });
  });

  describe('logout', () => {
    it('should call api `/auth/token/revoke` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/auth/token/revoke', { refreshToken: '123' })
        .reply(204);

      const result = await slyk.auth.logout({ refreshToken: '123' });

      expect(result).toEqual(true);
    });
  });

  describe('refresh', () => {
    it('should call api `/auth/token/refresh` endpoint with method `post` return an instance of `Auth` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/auth/token/refresh', { refreshToken: '123' })
        .reply(200, {
          data: {
            refreshToken: '123',
            token: '456'
          }
        });

      const result = await slyk.auth.refresh({ refreshToken: '123' });

      expect(result).toEqual({
        _sdk: expect.any(Object),
        refreshToken: '123',
        token: '456'
      });
    });
  });

  describe('validate', () => {
    it('should call api `/auth/token/validate` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/auth/token/validate', { token: '123' })
        .reply(204);

      const result = await slyk.auth.validate({ token: '123' });

      expect(result).toEqual(true);
    });
  });
});
