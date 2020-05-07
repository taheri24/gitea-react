import {
  CreateUserOption,
  EditUserOption,
  CreateKeyOption,
  CreateOrgOption,
  EnumCreateOrgOptionVisibility,
  CreateRepoOption,
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

export class AdminService {
  /**
   * List all organizations
   */
  static adminGetAllOrgs(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/admin/orgs';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List all users
   */
  static adminGetAllUsers(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/admin/users';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a user
   */
  static adminCreateUser(
    params: {
      /**  */
      body?: CreateUserOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/admin/users';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a user
   */
  static adminDeleteUser(
    params: {
      /** username of user to delete */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/admin/users/{username}';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit an existing user
   */
  static adminEditUser(
    params: {
      /** username of user to edit */
      username: string;
      /**  */
      body?: EditUserOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/admin/users/{username}';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a public key on behalf of a user
   */
  static adminCreatePublicKey(
    params: {
      /** username of the user */
      username: string;
      /**  */
      key?: CreateKeyOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/admin/users/{username}/keys';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['key'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a user's public key
   */
  static adminDeleteUserPublicKey(
    params: {
      /** username of user */
      username: string;
      /** id of the key to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/admin/users/{username}/keys/{id}';
      url = url.replace('{username}', params['username'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an organization
   */
  static adminCreateOrg(
    params: {
      /** username of the user that will own the created organization */
      username: string;
      /**  */
      organization: CreateOrgOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/admin/users/{username}/orgs';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['organization'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a repository on behalf of a user
   */
  static adminCreateRepo(
    params: {
      /** username of the user. This user will own the created repository */
      username: string;
      /**  */
      repository: CreateRepoOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/admin/users/{username}/repos';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['repository'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
