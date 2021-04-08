
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `TaskStepManager`.
 */

describe('TaskStepManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('get', () => {
    it('should call api `/tasks/foo/steps/bar` endpoint with method `get` and return an instance of `TaskStep` model with the given `data`', async () => {
      const data = {
        customData: { foo: 'bar' },
        description: 'foobar',
        id: 'bar',
        taskId: 'foo',
        title: 'foobar'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo/steps/bar')
        .reply(200, { data });

      const taskStep = await slyk.taskStep.get('foo', 'bar');

      expect(taskStep).toEqual(data);
    });
  });

  describe('list', () => {
    it('should call api `/tasks/foo/steps` endpoint with method `get` and return an array of instances of `TaskStep` model in the `results` attribute and the `total`', async () => {
      const data = [
        {
          customData: { foo: 'bar' },
          description: 'foobar',
          id: 'bar',
          taskId: 'foo',
          title: 'foobar'
        },
        {
          customData: { qux: 'quux' },
          description: 'foobiz',
          id: 'biz',
          taskId: 'foo',
          title: 'foobiz'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo/steps')
        .query({
          page: { number: 1, size: 2 },
          sort: 'createdAt'
        })
        .reply(200, { data, total: 5 });

      const taskSteps = await slyk.taskStep.list('foo', {
        page: { number: 1, size: 2 },
        sort: [{ direction: 'asc', name: 'createdAt' }]
      });

      expect(taskSteps.total).toEqual(5);
      expect(taskSteps.results).toEqual(data);
    });
  });

  describe('patch', () => {
    it('should call api `/tasks/foo/steps/bar` endpoint with method `patch` and return an instance of `TaskStep` model with the given `data`', async () => {
      const data = {
        customData: { foo: 'bar' },
        description: 'foobiz',
        id: 'bar',
        taskId: 'foo',
        title: 'qux'
      };

      nock(host, { reqheaders: { apikey } })
        .patch('/tasks/foo/steps/bar', { description: 'foobiz', title: 'qux' })
        .reply(200, { data });

      const taskStep = await slyk.taskStep.patch('foo', 'bar', { description: 'foobiz', title: 'qux' });

      expect(taskStep).toEqual(data);
    });
  });
});
