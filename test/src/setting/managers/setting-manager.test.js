
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `SettingManager`.
 */

describe('SettingManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('get', () => {
    it('should call api `/settings/bar` endpoint with method `get` and return an instance of `Setting` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/settings/bar')
        .reply(200, {
          data: {
            code: 'bar',
            description: 'corge',
            public: true,
            scope: ['qux'],
            type: 'string',
            value: 'grault'
          }
        });

      const result = await slyk.setting.get('bar');

      expect(result).toEqual({
        code: 'bar',
        description: 'corge',
        public: true,
        scope: ['qux'],
        type: 'string',
        value: 'grault'
      });
    });
  });

  describe('list', () => {
    it('should call api `/settings` endpoint with method `get` and return an array of instances of `Setting` model in the `results` attribute', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/settings')
        .query({
          filter: { code: 'in:foo,bar' },
          sort: 'createdAt'
        })
        .reply(200, {
          data: [{
            code: 'bar',
            description: 'corge',
            public: true,
            scope: ['qux'],
            type: 'string',
            value: 'grault'
          },
          {
            code: 'foo',
            description: 'corge',
            public: true,
            scope: ['qux'],
            type: 'string',
            value: 'grault'
          }]
        });

      const { results } = await slyk.setting.list({
        filter: { code: 'in:foo,bar' },
        sort: [{ name: 'createdAt' }]
      });

      expect(results).toEqual([{
        code: 'bar',
        description: 'corge',
        public: true,
        scope: ['qux'],
        type: 'string',
        value: 'grault'
      },
      {
        code: 'foo',
        description: 'corge',
        public: true,
        scope: ['qux'],
        type: 'string',
        value: 'grault'
      }]);
    });
  });
});
