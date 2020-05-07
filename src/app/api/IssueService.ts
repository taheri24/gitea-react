import {
  CreateIssueOption,
  EditIssueCommentOption,
  EditReactionOption,
  EditIssueOption,
  CreateIssueCommentOption,
  EditDeadlineOption,
  IssueLabelsOption,
  AddTimeOption,
  CreateLabelOption,
  EditLabelOption,
  CreateMilestoneOption,
  EditMilestoneOption,
  IList,
  List,
  IListResult,
  ListResultDto,
  IPagedResult,
  PagedResultDto,
  Dictionary,
  IDictionary,
  IRequestOptions,
  IRequestConfig,
  getConfigs,
  axios
} from './index.defs';

export class IssueService {
  /**
   * Search for issues across the repositories that the user has access to
   */
  static issueSearchIssues(
    params: {
      /** whether issue is open or closed */
      state?: string;
      /** comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded */
      labels?: string;
      /** search string */
      q?: string;
      /** repository to prioritize in the results */
      priorityRepoId?: number;
      /** filter by type (issues / pulls) if set */
      type?: string;
      /** page number of requested issues */
      page?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/issues/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        state: params['state'],
        labels: params['labels'],
        q: params['q'],
        priority_repo_id: params['priorityRepoId'],
        type: params['type'],
        page: params['page']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repository's issues
   */
  static issueListIssues(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** whether issue is open or closed */
      state?: string;
      /** comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded */
      labels?: string;
      /** search string */
      q?: string;
      /** filter by type (issues / pulls) if set */
      type?: string;
      /** comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded */
      milestones?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        state: params['state'],
        labels: params['labels'],
        q: params['q'],
        type: params['type'],
        milestones: params['milestones'],
        page: params['page'],
        limit: params['limit']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
   */
  static issueCreateIssue(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /**  */
      body?: CreateIssueOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List all comments in a repository
   */
  static issueGetRepoComments(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** if provided, only comments updated since the provided time are returned. */
      since?: string;
      /** if provided, only comments updated before the provided time are returned. */
      before?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/comments';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        since: params['since'],
        before: params['before'],
        page: params['page'],
        limit: params['limit']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a comment
   */
  static issueGetComment(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the comment */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/comments/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a comment
   */
  static issueDeleteComment(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of comment to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/comments/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit a comment
   */
  static issueEditComment(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the comment to edit */
      id: number;
      /**  */
      body?: EditIssueCommentOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/comments/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a list of reactions from a comment of an issue
   */
  static issueGetCommentReactions(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the comment to edit */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/comments/{id}/reactions';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a reaction to a comment of an issue
   */
  static issuePostCommentReaction(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the comment to edit */
      id: number;
      /**  */
      content?: EditReactionOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/comments/{id}/reactions';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['content'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Remove a reaction from a comment of an issue
   */
  static issueDeleteCommentReaction(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the comment to edit */
      id: number;
      /**  */
      content?: EditReactionOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/comments/{id}/reactions';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params['content'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get an issue
   */
  static issueGetIssue(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue to get */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
   */
  static issueEditIssue(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue to edit */
      index: number;
      /**  */
      body?: EditIssueOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List all comments on an issue
   */
  static issueGetComments(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /** if provided, only comments updated since the specified time are returned. */
      since?: string;
      /** if provided, only comments updated before the provided time are returned. */
      before?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/comments';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { since: params['since'], before: params['before'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a comment to an issue
   */
  static issueCreateComment(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /**  */
      body?: CreateIssueCommentOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/comments';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a comment
   */
  static issueDeleteCommentDeprecated(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** this parameter is ignored */
      index: number;
      /** id of comment to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/comments/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit a comment
   */
  static issueEditCommentDeprecated(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** this parameter is ignored */
      index: number;
      /** id of the comment to edit */
      id: number;
      /**  */
      body?: EditIssueCommentOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/comments/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.
   */
  static issueEditIssueDeadline(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue to create or update a deadline on */
      index: number;
      /**  */
      body?: EditDeadlineOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/deadline';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get an issue's labels
   */
  static issueGetLabels(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/labels';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Replace an issue's labels
   */
  static issueReplaceLabels(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /**  */
      body?: IssueLabelsOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/labels';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a label to an issue
   */
  static issueAddLabel(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /**  */
      body?: IssueLabelsOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/labels';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Remove all labels from an issue
   */
  static issueClearLabels(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/labels';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Remove a label from an issue
   */
  static issueRemoveLabel(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /** id of the label to remove */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/labels/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a list reactions of an issue
   */
  static issueGetIssueReactions(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/reactions';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a reaction to an issue
   */
  static issuePostIssueReaction(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /**  */
      content?: EditReactionOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/reactions';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['content'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Remove a reaction from an issue
   */
  static issueDeleteIssueReaction(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /**  */
      content?: EditReactionOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/reactions';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params['content'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an issue's existing stopwatch.
   */
  static issueDeleteStopWatch(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue to stop the stopwatch on */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/stopwatch/delete';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Start stopwatch on an issue.
   */
  static issueStartStopWatch(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue to create the stopwatch on */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/stopwatch/start';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Stop an issue's existing stopwatch.
   */
  static issueStopStopWatch(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue to stop the stopwatch on */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/stopwatch/stop';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get users who subscribed on an issue.
   */
  static issueSubscriptions(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/subscriptions';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Check if user is subscribed to an issue
   */
  static issueCheckSubscription(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/subscriptions/check';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Subscribe user to issue
   */
  static issueAddSubscription(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /** user to subscribe */
      user: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/subscriptions/{user}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');
      url = url.replace('{user}', params['user'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Unsubscribe user from issue
   */
  static issueDeleteSubscription(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /** user witch unsubscribe */
      user: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/subscriptions/{user}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');
      url = url.replace('{user}', params['user'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List an issue's tracked times
   */
  static issueTrackedTimes(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /** Only show times updated after the given time. This is a timestamp in RFC 3339 format */
      since?: string;
      /** Only show times updated before the given time. This is a timestamp in RFC 3339 format */
      before?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/times';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        since: params['since'],
        before: params['before'],
        page: params['page'],
        limit: params['limit']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add tracked time to a issue
   */
  static issueAddTime(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /**  */
      body?: AddTimeOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/times';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Reset a tracked time of an issue
   */
  static issueResetTime(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue to add tracked time to */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/times';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete specific tracked time
   */
  static issueDeleteTime(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the issue */
      index: number;
      /** id of time to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/issues/{index}/times/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get all of a repository's labels
   */
  static issueListLabels(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/labels';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a label
   */
  static issueCreateLabel(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /**  */
      body?: CreateLabelOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/labels';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a single label
   */
  static issueGetLabel(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the label to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/labels/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a label
   */
  static issueDeleteLabel(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the label to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/labels/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a label
   */
  static issueEditLabel(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the label to edit */
      id: number;
      /**  */
      body?: EditLabelOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/labels/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get all of a repository's opened milestones
   */
  static issueGetMilestonesList(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** Milestone state, Recognised values are open, closed and all. Defaults to "open" */
      state?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/milestones';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { state: params['state'], page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a milestone
   */
  static issueCreateMilestone(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /**  */
      body?: CreateMilestoneOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/milestones';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a milestone
   */
  static issueGetMilestone(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the milestone */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/milestones/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a milestone
   */
  static issueDeleteMilestone(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the milestone to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/milestones/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a milestone
   */
  static issueEditMilestone(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the milestone */
      id: number;
      /**  */
      body?: EditMilestoneOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/milestones/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
