
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `TaskModel`.
 */

describe('TaskModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('complete', () => {
    it('should return `true` after completing the `task` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo')
        .reply(200, {
          data: {
            amount: '2.00000000',
            available: false,
            deletedAt: null,
            description: 'biz',
            enabled: true,
            featured: true,
            id: 'foo',
            name: 'foobar',
            surveyUrl: 'http://qux.com',
            type: 'manual'
          }
        });

      const task = await slyk.task.get('foo');

      nock(host, { reqheaders: { apikey } })
        .post('/tasks/foo/complete', { userId: 'bar' })
        .reply(204);

      const response = await task.complete({ userId: 'bar' });

      expect(response).toEqual(true);
    });
  });

  describe('completeSurvey', () => {
    it('should return `true` after completing the `task` instance of `type: survey`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo')
        .reply(200, {
          data: {
            amount: '2.00000000',
            available: false,
            deletedAt: null,
            description: 'biz',
            enabled: true,
            featured: true,
            id: 'foo',
            name: 'foobar',
            surveyUrl: 'http://qux.com',
            type: 'manual'
          }
        });

      const task = await slyk.task.get('foo');

      nock(host, { reqheaders: { apikey } })
        .post('/tasks/foo/answers', {
          answers: [
            {
              answer: { description: 'foobar' },
              questionId: 'waldo',
              stepId: 'fred'
            }
          ],
          userId: 'thud'
        })
        .reply(204);

      const response = await task.completeSurvey({
        answers: [
          {
            answer: { description: 'foobar' },
            questionId: 'waldo',
            stepId: 'fred'
          }
        ],
        userId: 'thud'
      });

      expect(response).toEqual(true);
    });
  });

  describe('delete', () => {
    it('should return `true` after deleting the `task` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo')
        .reply(200, {
          data: {
            amount: '2.00000000',
            available: false,
            deletedAt: null,
            description: 'biz',
            enabled: true,
            featured: true,
            id: 'foo',
            name: 'foobar',
            surveyUrl: 'http://qux.com',
            type: 'manual'
          }
        });

      const task = await slyk.task.get('foo');

      nock(host, { reqheaders: { apikey } })
        .delete('/tasks/foo')
        .reply(204);

      const response = await task.delete();

      expect(response).toEqual(true);
    });
  });

  describe('listAnswers', () => {
    it('should return a list of `taskStepQuestionAnswer` instance', async () => {
      const data = {
        amount: '2.00000000',
        available: false,
        deletedAt: null,
        description: 'biz',
        enabled: true,
        featured: true,
        id: 'foo',
        name: 'foobar',
        surveyUrl: 'http://qux.com',
        type: 'manual'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo')
        .reply(200, { data });

      const task = await slyk.task.get('foo');
      const taskAnsers = [
        {
          answer: {
            answerDescription: 'waldo',
            questionDescription: 'waldo'
          },
          description: 'qux',
          id: 'bar',
          questionId: 'qux',
          userId: 'garply'
        },
        {
          answer: {
            answerDescription: 'qux',
            questionDescription: 'qux'
          },
          description: 'foo',
          id: 'biz',
          questionId: 'quux',
          userId: 'garply'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo/answers')
        .query({
          filter: { userId: 'garply' },
          page: { number: 1, size: 2 },
          sort: 'createdAt'
        })
        .reply(200, { data: taskAnsers, total: 4 });

      const response = await task.listAnswers({
        filter: { userId: 'garply' },
        page: { number: 1, size: 2 },
        sort: 'createdAt'
      });

      expect(response.total).toEqual(4);
      expect(response.results).toEqual(taskAnsers);
    });
  });

  describe('listSteps', () => {
    it('should return a list of `taskStep` instance', async () => {
      const data = {
        amount: '2.00000000',
        available: false,
        deletedAt: null,
        description: 'biz',
        enabled: true,
        featured: true,
        id: 'foo',
        name: 'foobar',
        surveyUrl: 'http://qux.com',
        type: 'manual'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo')
        .reply(200, { data });

      const task = await slyk.task.get('foo');
      const taskSteps = [
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
        .reply(200, { data: taskSteps, total: 4 });

      const response = await task.listSteps({
        page: { number: 1, size: 2 },
        sort: 'createdAt'
      });

      expect(response.total).toEqual(4);
      expect(response.results).toEqual(taskSteps);
    });
  });

  describe('patch', () => {
    it('should return the patched `task` instance', async () => {
      const data = {
        amount: '2.00000000',
        available: false,
        deletedAt: null,
        description: 'biz',
        enabled: true,
        featured: true,
        id: 'foo',
        name: 'foobar',
        surveyUrl: 'http://qux.com',
        type: 'manual'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo')
        .reply(200, { data });

      const task = await slyk.task.get('foo');

      nock(host, { reqheaders: { apikey } })
        .patch('/tasks/foo', {
          amount: '3.00000000',
          enabled: false,
          name: 'foobiz'
        })
        .reply(200, {
          data: {
            ...data,
            amount: '3.00000000',
            enabled: false,
            name: 'foobiz'
          }
        });

      const response = await task.patch({
        amount: '3.00000000',
        enabled: false,
        name: 'foobiz'
      });

      expect(response).toEqual({
        ...data,
        amount: '3.00000000',
        enabled: false,
        name: 'foobiz'
      });
    });
  });

  describe('reorder', () => {
    it('should return `true` after reordering the `task` instance', async () => {
      const data = {
        assetCode: 'biz',
        available: false,
        categoryId: 'quux',
        featured: true,
        id: 'foo',
        name: 'foobar',
        price: '6.50000000',
        typeCode: 'digital'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo')
        .reply(200, { data });

      const task = await slyk.task.get('foo');

      nock(host, { reqheaders: { apikey } })
        .post('/tasks/foo/reorder', { subsequentId: 'bar' })
        .reply(204);

      const response = await task.reorder({ subsequentId: 'bar' });

      expect(response).toEqual(true);
    });
  });
});
