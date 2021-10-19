
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `GraphqlManager`.
 */

describe('GraphqlManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('execute', () => {
    it('should call api `/graphql` endpoint with method `post` and return the endpoint response', async () => {
      const query = `{
        foobar (id: "foo") {
          createdAt
          id
          updatedAt
        }
      }`;

      nock(host, { reqheaders: { apikey } })
        .post('/graphql', { query })
        .reply(200, {
          data: {
            foobar: {
              createdAt: '2021-07-30T13:17:18.483Z',
              id: 'foo',
              updatedAt: '2021-07-30T13:17:18.483Z'
            }
          }
        });

      const result = await slyk.graphql.execute({ query });

      expect(result).toEqual({
        data: {
          foobar: {
            createdAt: '2021-07-30T13:17:18.483Z',
            id: 'foo',
            updatedAt: '2021-07-30T13:17:18.483Z'
          }
        }
      });
    });
  });
});
