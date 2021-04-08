
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `TaskStepModel`.
 */

describe('TaskStepModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('listQuestions', () => {
    it('should return an array of `TaskStepQuestion` instances', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo/steps/bar')
        .reply(200, {
          data: {
            customData: { foo: 'bar' },
            description: 'foobar',
            id: 'bar',
            taskId: 'foo',
            title: 'foobar'
          }
        });

      const taskStep = await slyk.taskStep.get('foo', 'bar');

      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo/steps/bar/questions')
        .query({
          page: { number: 1, size: 2 },
          sort: 'createdAt'
        })
        .reply(200, {
          data: [
            {
              customData: { foo: 'bar' },
              description: 'foobar',
              id: 'bar',
              optional: false,
              options: null,
              stepId: 'bar',
              type: 'open_text'
            },
            {
              customData: {},
              description: 'foobiz',
              id: 'biz',
              optional: true,
              options: null,
              stepId: 'bar',
              type: 'open_text'
            }
          ],
          total: 5
        });

      const taskStepQuestions = await taskStep.listQuestions({
        page: { number: 1, size: 2 },
        sort: [{ direction: 'asc', name: 'createdAt' }]
      });

      expect(taskStepQuestions.total).toEqual(5);
      expect(taskStepQuestions.results).toEqual([
        {
          customData: { foo: 'bar' },
          description: 'foobar',
          id: 'bar',
          optional: false,
          options: null,
          stepId: 'bar',
          type: 'open_text'
        },
        {
          customData: {},
          description: 'foobiz',
          id: 'biz',
          optional: true,
          options: null,
          stepId: 'bar',
          type: 'open_text'
        }
      ]);
    });
  });

  describe('patch', () => {
    it('should return the patched `taskStep` instance', async () => {
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

      nock(host, { reqheaders: { apikey } })
        .patch('/tasks/foo/steps/bar', { description: 'foobiz', title: 'foobiz' })
        .reply(200, {
          data: {
            ...data,
            description: 'foobiz',
            title: 'foobiz'
          }
        });

      const response = await taskStep.patch({ description: 'foobiz', title: 'foobiz' });

      expect(response).toEqual({
        ...data,
        description: 'foobiz',
        title: 'foobiz'
      });
    });
  });
});
