import {
  CreateOAuth2ApplicationOptions,
  CreateEmailOption,
  DeleteEmailOption,
  CreateGPGKeyOption,
  CreateKeyOption,
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

export class UserService {
  /**
   * Get the authenticated user
   */
  static userGetCurrent(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the authenticated user's oauth2 applications
   */
  static userGetOauth2Application(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/applications/oauth2';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * creates a new OAuth2 application
   */
  static userCreateOAuth2Application(
    params: {
      /**  */
      body: CreateOAuth2ApplicationOptions;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/applications/oauth2';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * get an OAuth2 Application
   */
  static userGetOAuth2Application(
    params: {
      /** Application ID to be found */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/applications/oauth2/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * delete an OAuth2 Application
   */
  static userDeleteOAuth2Application(
    params: {
      /** token to be deleted */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/applications/oauth2/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * update an OAuth2 Application, this includes regenerating the client secret
   */
  static userUpdateOAuth2Application(
    params: {
      /** application to be updated */
      id: number;
      /**  */
      body: CreateOAuth2ApplicationOptions;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/applications/oauth2/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the authenticated user's email addresses
   */
  static userListEmails(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/emails';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add email addresses
   */
  static userAddEmail(
    params: {
      /**  */
      body?: CreateEmailOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/emails';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete email addresses
   */
  static userDeleteEmail(
    params: {
      /**  */
      body?: DeleteEmailOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/emails';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the authenticated user's followers
   */
  static userCurrentListFollowers(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/followers';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the users that the authenticated user is following
   */
  static userCurrentListFollowing(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/following';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Check whether a user is followed by the authenticated user
   */
  static userCurrentCheckFollowing(
    params: {
      /** username of followed user */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/following/{username}';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Follow a user
   */
  static userCurrentPutFollow(
    params: {
      /** username of user to follow */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/following/{username}';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Unfollow a user
   */
  static userCurrentDeleteFollow(
    params: {
      /** username of user to unfollow */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/following/{username}';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the authenticated user's GPG keys
   */
  static userCurrentListGpgKeys(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/gpg_keys';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a GPG key
   */
  static userCurrentPostGpgKey(
    params: {
      /**  */
      form?: CreateGPGKeyOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/gpg_keys';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['form'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a GPG key
   */
  static userCurrentGetGpgKey(
    params: {
      /** id of key to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/gpg_keys/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Remove a GPG key
   */
  static userCurrentDeleteGpgKey(
    params: {
      /** id of key to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/gpg_keys/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the authenticated user's public keys
   */
  static userCurrentListKeys(
    params: {
      /** fingerprint of the key */
      fingerprint?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/keys';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fingerprint: params['fingerprint'], page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a public key
   */
  static userCurrentPostKey(
    params: {
      /**  */
      body?: CreateKeyOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/keys';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a public key
   */
  static userCurrentGetKey(
    params: {
      /** id of key to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/keys/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a public key
   */
  static userCurrentDeleteKey(
    params: {
      /** id of key to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/keys/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the repos that the authenticated user owns or has access to
   */
  static userCurrentListRepos(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/repos';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * The repos that the authenticated user has starred
   */
  static userCurrentListStarred(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/starred';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Whether the authenticated is starring the repo
   */
  static userCurrentCheckStarring(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/starred/{owner}/{repo}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Star the given repo
   */
  static userCurrentPutStar(
    params: {
      /** owner of the repo to star */
      owner: string;
      /** name of the repo to star */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/starred/{owner}/{repo}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Unstar the given repo
   */
  static userCurrentDeleteStar(
    params: {
      /** owner of the repo to unstar */
      owner: string;
      /** name of the repo to unstar */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/starred/{owner}/{repo}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get list of all existing stopwatches
   */
  static userGetStopWatches(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/stopwatches';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List repositories watched by the authenticated user
   */
  static userCurrentListSubscriptions(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/subscriptions';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List all the teams a user belongs to
   */
  static userListTeams(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/teams';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the current user's tracked times
   */
  static userCurrentTrackedTimes(
    params: {
      /** Only show times updated after the given time. This is a timestamp in RFC 3339 format */
      since?: string;
      /** Only show times updated before the given time. This is a timestamp in RFC 3339 format */
      before?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/times';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { since: params['since'], before: params['before'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Search for users
   */
  static userSearch(
    params: {
      /** keyword */
      q?: string;
      /** ID of the user to search for */
      uid?: number;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { q: params['q'], uid: params['uid'], page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Check if one user is following another user
   */
  static userCheckFollowing(
    params: {
      /** username of following user */
      follower: string;
      /** username of followed user */
      followee: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{follower}/following/{followee}';
      url = url.replace('{follower}', params['follower'] + '');
      url = url.replace('{followee}', params['followee'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a user
   */
  static userGet(
    params: {
      /** username of user to get */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the given user's followers
   */
  static userListFollowers(
    params: {
      /** username of user */
      username: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/followers';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the users that the given user is following
   */
  static userListFollowing(
    params: {
      /** username of user */
      username: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/following';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the given user's GPG keys
   */
  static userListGpgKeys(
    params: {
      /** username of user */
      username: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/gpg_keys';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a user's heatmap
   */
  static userGetHeatmapData(
    params: {
      /** username of user to get */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/heatmap';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the given user's public keys
   */
  static userListKeys(
    params: {
      /** username of user */
      username: string;
      /** fingerprint of the key */
      fingerprint?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/keys';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fingerprint: params['fingerprint'], page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the repos owned by the given user
   */
  static userListRepos(
    params: {
      /** username of user */
      username: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/repos';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * The repos that the given user has starred
   */
  static userListStarred(
    params: {
      /** username of user */
      username: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/starred';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the repositories watched by a user
   */
  static userListSubscriptions(
    params: {
      /** username of the user */
      username: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/subscriptions';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the authenticated user's access tokens
   */
  static userGetTokens(
    params: {
      /** username of user */
      username: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/tokens';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an access token
   */
  static userCreateToken(
    params: {
      /** username of user */
      username: string;
      /**  */
      accessToken?: object;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/tokens';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['accessToken'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * delete an access token
   */
  static userDeleteAccessToken(
    params: {
      /** username of user */
      username: string;
      /** token to be deleted */
      token: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/users/{username}/tokens/{token}';
      url = url.replace('{username}', params['username'] + '');
      url = url.replace('{token}', params['token'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
