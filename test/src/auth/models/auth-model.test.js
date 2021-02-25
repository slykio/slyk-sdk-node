
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `AuthModel`.
 */

describe('AuthModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('logout', () => {
    it('should return `true` after revoking the `auth` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/auth/token', { email: 'foo@bar.com', password: 'Foobar123' })
        .reply(200, {
          data: {
            refreshToken: '123',
            roles: ['user'],
            token: '456'
          }
        });

      const auth = await slyk.auth.login({ email: 'foo@bar.com', password: 'Foobar123' });

      nock(host, { reqheaders: { apikey } })
        .post('/auth/token/revoke', { refreshToken: '123' })
        .reply(204);

      const result = await auth.logout();

      expect(result).toEqual(true);
    });
  });

  describe('refresh', () => {
    it('should return the refreshed `auth``', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/auth/token', { email: 'foo@bar.com', password: 'Foobar123' })
        .reply(200, {
          data: {
            refreshToken: '123',
            roles: ['user'],
            token: '456'
          }
        });

      const auth = await slyk.auth.login({ email: 'foo@bar.com', password: 'Foobar123' });

      nock(host, { reqheaders: { apikey } })
        .post('/auth/token/refresh', { refreshToken: '123' })
        .reply(200, {
          data: {
            refreshToken: '789',
            token: '012'
          }
        });

      const result = await auth.refresh();

      expect(result).toEqual({ refreshToken: '789', token: '012' });
    });
  });
});
