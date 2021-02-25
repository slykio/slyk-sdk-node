
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `TaskManager`.
 */

describe('TaskManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('complete', () => {
    it('should call api `/tasks/complete` endpoint with method `post` and return `true`', async () => {
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
        .post('/tasks/foo/complete', { userId: 'bar' })
        .reply(200, { data });

      const task = await slyk.task.complete('foo', { userId: 'bar' });

      expect(task).toEqual(true);
    });
  });

  describe('create', () => {
    it('should call api `/tasks` endpoint with method `post` and return an instance of `Task` model with the given `data`', async () => {
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
        .post('/tasks', {
          amount: '2.00000000',
          description: 'biz',
          enabled: true,
          featured: true,
          name: 'foobar',
          surveyUrl: 'http://qux.com',
          type: 'manual'
        })
        .reply(200, { data });

      const task = await slyk.task.create({
        amount: '2.00000000',
        description: 'biz',
        enabled: true,
        featured: true,
        name: 'foobar',
        surveyUrl: 'http://qux.com',
        type: 'manual'
      });

      expect(task).toEqual(data);
    });
  });

  describe('delete', () => {
    it('should call api `/tasks/foo` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/tasks/foo')
        .reply(204);

      const task = await slyk.task.delete('foo');

      expect(task).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/tasks/foo` endpoint with method `get` and return an instance of `Task` model with the given `data`', async () => {
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

      expect(task).toEqual(data);
    });
  });

  describe('getStatistics', () => {
    it('should call api `/users/foo/tasks/statistics` endpoint with method `get` and return the `tasks` statistics for the `user` of the given `id`', async () => {
      const availableTasks = {
        data: [
          {
            amount: '2.00000000',
            deletedAt: null,
            description: 'biz',
            enabled: true,
            featured: true,
            id: 'foo',
            name: 'foobar',
            surveyUrl: 'http://qux.com',
            type: 'manual'
          }
        ],
        gauge: '2.00000000',
        total: 1
      };

      const completedTasks = {
        data: [
          {
            amount: '1.00000000',
            deletedAt: null,
            description: 'biz',
            enabled: true,
            featured: true,
            id: 'bar',
            name: 'quux',
            surveyUrl: 'http://qux.com',
            type: 'manual'
          },
          {
            amount: '3.00000000',
            deletedAt: null,
            description: null,
            enabled: true,
            featured: true,
            id: 'biz',
            name: 'waldo',
            surveyUrl: null,
            type: 'manual'
          }
        ],
        gauge: '4.00000000',
        total: 2
      };

      nock(host, { reqheaders: { apikey } })
        .get('/users/foo/tasks/statistics')
        .query({ sort: 'name' })
        .reply(200, {
          data: {
            available: availableTasks,
            completed: completedTasks
          }
        });

      const task = await slyk.task.getStatistics('foo', { sort: 'name' });

      expect(task.available).toEqual(availableTasks);
      expect(task.completed).toEqual(completedTasks);
    });
  });

  describe('list', () => {
    it('should call api `/tasks` endpoint with method `get` and return an array of instances of `Task` model in the `results` attribute and the `total`', async () => {
      const data = [
        {
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
        },
        {
          amount: '5.20000000',
          available: false,
          deletedAt: null,
          description: null,
          enabled: true,
          featured: true,
          id: 'bar',
          name: 'quux',
          surveyUrl: 'http://bar.com',
          type: 'manual'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/tasks')
        .query({
          page: { number: 1, size: 2 },
          sort: 'amount'
        })
        .reply(200, { data, total: 5 });

      const task = await slyk.task.list({
        page: { number: 1, size: 2 },
        sort: [{ direction: 'asc', name: 'amount' }]
      });

      expect(task.total).toEqual(5);
      expect(task.results).toEqual(data);
    });
  });

  describe('patch', () => {
    it('should call api `/tasks/foo` endpoint with method `patch` and return an instance of `Task` model with the given `data`', async () => {
      const data = {
        amount: '3.00000000',
        available: false,
        deletedAt: null,
        description: 'biz',
        enabled: false,
        featured: true,
        id: 'foo',
        name: 'foobiz',
        surveyUrl: 'http://qux.com',
        type: 'manual'
      };

      nock(host, { reqheaders: { apikey } })
        .patch('/tasks/foo', {
          amount: '3.00000000',
          enabled: false,
          name: 'foobiz'
        })
        .reply(200, { data });

      const task = await slyk.task.patch('foo', {
        amount: '3.00000000',
        enabled: false,
        name: 'foobiz'
      });

      expect(task).toEqual(data);
    });
  });

  describe('reorder', () => {
    it('should call api `/tasks/foo/reorder` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/tasks/foo/reorder', { subsequentId: 'bar' })
        .reply(204);

      const response = await slyk.task.reorder('foo', { subsequentId: 'bar' });

      expect(response).toEqual(true);
    });
  });
});
