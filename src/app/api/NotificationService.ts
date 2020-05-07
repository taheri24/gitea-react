import {
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

export class NotificationService {
  /**
   * List users's notification threads
   */
  static notifyGetList(
    params: {
      /** If true, show notifications marked as read. Default value is false */
      all?: string;
      /** Only show notifications updated after the given time. This is a timestamp in RFC 3339 format */
      since?: string;
      /** Only show notifications updated before the given time. This is a timestamp in RFC 3339 format */
      before?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/notifications';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        all: params['all'],
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
   * Mark notification threads as read
   */
  static notifyReadList(
    params: {
      /** Describes the last point that notifications were checked. Anything updated since this time will not be updated. */
      lastReadAt?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/notifications';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);
      configs.params = { last_read_at: params['lastReadAt'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Check if unread notifications exist
   */
  static notifyNewAvailable(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/notifications/new';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get notification thread by ID
   */
  static notifyGetThread(
    params: {
      /** id of notification thread */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/notifications/threads/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Mark notification thread as read by ID
   */
  static notifyReadThread(
    params: {
      /** id of notification thread */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/notifications/threads/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List users's notification threads on a specific repo
   */
  static notifyGetRepoList(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** If true, show notifications marked as read. Default value is false */
      all?: string;
      /** Only show notifications updated after the given time. This is a timestamp in RFC 3339 format */
      since?: string;
      /** Only show notifications updated before the given time. This is a timestamp in RFC 3339 format */
      before?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/notifications';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        all: params['all'],
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
   * Mark notification threads as read on a specific repo
   */
  static notifyReadRepoList(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** Describes the last point that notifications were checked. Anything updated since this time will not be updated. */
      lastReadAt?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/notifications';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);
      configs.params = { last_read_at: params['lastReadAt'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
