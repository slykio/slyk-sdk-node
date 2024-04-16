
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

  describe('confirmTwoFactorCode', () => {
    it('should call api `/users/auth/2fa/foo/confirm` endpoint with method `post` and return a `trust token`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/auth/2fa/foo/confirm', { code: '123' })
        .reply(200, { data: { trustToken: '123' } });

      const result = await slyk.auth.confirmTwoFactorCode('foo', { code: '123' });

      expect(result).toEqual({ trustToken: '123' });
    });
  });

  describe('disableTwoFactor', () => {
    it('should call api `/users/:userId/auth/2fa` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/users/foo/auth/2fa', { code: '123', methodId: 'bar' })
        .reply(204);

      const result = await slyk.auth.disableTwoFactor('foo', { code: '123', methodId: 'bar' });

      expect(result).toEqual(true);
    });
  });

  describe('enableTwoFactor', () => {
    it('should call api `/users/:userId/auth/2fa` endpoint with method `post` and return a list of `recoveryCodes`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/foo/auth/2fa', { code: '123', secret: 'bar' })
        .reply(200, { data: { recoveryCodes: ['123', '456'] } });

      const result = await slyk.auth.enableTwoFactor('foo', { code: '123', secret: 'bar' });

      expect(result).toEqual({ recoveryCodes: ['123', '456'] });
    });
  });

  describe('generateTwoFactorRecoveryCodes', () => {
    it('should call api `/users/:userId/auth/2fa/recovery-codes` endpoint with method `post` and return a list of `recoveryCodes`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/foo/auth/2fa/recovery-codes')
        .reply(200, { data: { recoveryCodes: ['123', '456'] } });

      const result = await slyk.auth.generateTwoFactorRecoveryCodes('foo');

      expect(result).toEqual({ recoveryCodes: ['123', '456'] });
    });
  });

  describe('getTwoFactorRecoveryCodes', () => {
    it('should call api `/users/:userId/auth/2fa/recovery-codes` endpoint with method `get` and return a list of `recoveryCodes`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/foo/auth/2fa/recovery-codes')
        .reply(200, { data: { recoveryCodes: ['123', '456'] } });

      const result = await slyk.auth.getTwoFactorRecoveryCodes('foo');

      expect(result).toEqual({ recoveryCodes: ['123', '456'] });
    });
  });

  describe('getTwoFactorSecret', () => {
    it('should call api `/users/auth/2fa/secret` endpoint with method `get` and return a two factor `secret`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/auth/2fa/secret')
        .reply(200, { data: { secret: '123', secretBase32Encoded: '456' } });

      const result = await slyk.auth.getTwoFactorSecret();

      expect(result).toEqual({ secret: '123', secretBase32Encoded: '456' });
    });
  });

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
        refreshToken: '123',
        roles: ['user'],
        token: '456'
      });
    });

    it('should call api `/auth/token` endpoint with method `post` and return an instance of `Auth` model with the given `data` if two factor is enabled', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/auth/token', { email: 'foo@bar.com', password: 'Foobar123' })
        .reply(242, {
          data: {
            twoFactorId: 'foo'
          }
        });

      const result = await slyk.auth.login({ email: 'foo@bar.com', password: 'Foobar123' });

      expect(result).toEqual({
        twoFactorId: 'foo'
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

      expect(result).toEqual({ refreshToken: '123', token: '456' });
    });
  });

  describe('startTwoFactorFlow', () => {
    it('should call api `/users/auth/2fa/start` endpoint with method `post` and return a `twoFactorId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/auth/2fa/start', { email: 'foo@bar.com', password: 'Foobar123' })
        .reply(200, { data: { twoFactorId: 'foo' } });

      const result = await slyk.auth.startTwoFactorFlow({ email: 'foo@bar.com', password: 'Foobar123' });

      expect(result).toEqual({ twoFactorId: 'foo' });
    });
  });

  describe('validate', () => {
    it('should call api `/auth/token/validate` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/auth/token/validate', { token: '123' })
        .reply(200, {
          data: {
            user: {
              email: 'foo@bar.com',
              id: 'bar',
              name: 'foobar'
            }
          }
        });

      const result = await slyk.auth.validate({ token: '123' });

      expect(result).toEqual({
        user: {
          email: 'foo@bar.com',
          id: 'bar',
          name: 'foobar'
        }
      });
    });
  });
});
