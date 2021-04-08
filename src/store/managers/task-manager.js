
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';
import TaskStepQuestionAnswerModel from 'store/models/task-step-question-answer-model';

/**
 * Export `TaskManager`.
 */

export default class TaskManager extends AbstractManager {

  /**
   * Complete.
   */

  async complete(id, data) {
    await this.resolver.complete(merge({}, data, { id }));

    return true;
  }

  /**
   * Complete survey.
   */

  async completeSurvey(id, data) {
    await this.resolver.completeSurvey(merge({}, data, { id }));

    return true;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: task } = await this.resolver.create(data);

    return this.instantiate(task);
  }

  /**
   * Delete.
   */

  async delete(id) {
    await this.resolver.delete({ id });

    return true;
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: task } = await this.resolver.get({ id }, options);

    return this.instantiate(task);
  }

  /**
   * Get statistics.
   */

  async getStatistics(userId, options) {
    const { data: { available, completed } } = await this.resolver.getStatistics({ id: userId }, options);
    const availableTasksData = map(get(available, 'data', []), task => this.instantiate(task));
    const completedTasksData = map(get(completed, 'data', []), task => this.instantiate(task));

    return {
      available: {
        ...available,
        data: availableTasksData
      },
      completed: {
        ...completed,
        data: completedTasksData
      }
    };
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), task => this.instantiate(task));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * List answers.
   */

  async listAnswers(id, options) {
    const result = await this.resolver.listAnswers({ id }, options);
    const results = map(get(result, 'data', []), taskAnswer => new TaskStepQuestionAnswerModel(taskAnswer, { connection: this.connection }));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: task } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(task);
  }

  /**
   * Reorder.
   */

  async reorder(id, data) {
    await this.resolver.reorder(merge({}, data, { id }));

    return true;
  }

}
