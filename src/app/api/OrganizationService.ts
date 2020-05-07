import {
  CreateRepoOption,
  CreateOrgOption,
  EnumCreateOrgOptionVisibility,
  EditOrgOption,
  EnumEditOrgOptionVisibility,
  CreateHookOption,
  CreateHookOptionConfig,
  EnumCreateHookOptionType,
  EditHookOption,
  CreateLabelOption,
  EditLabelOption,
  CreateTeamOption,
  EnumCreateTeamOptionPermission,
  EditTeamOption,
  EnumEditTeamOptionPermission,
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

export class OrganizationService {
  /**
   * Create a repository in an organization
   */
  static createOrgRepoDeprecated(
    params: {
      /** name of organization */
      org: string;
      /**  */
      body?: CreateRepoOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/org/{org}/repos';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get list of organizations
   */
  static orgGetAll(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an organization
   */
  static orgCreate(
    params: {
      /**  */
      organization: CreateOrgOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['organization'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get an organization
   */
  static orgGet(
    params: {
      /** name of the organization to get */
      org: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an organization
   */
  static orgDelete(
    params: {
      /** organization that is to be deleted */
      org: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit an organization
   */
  static orgEdit(
    params: {
      /** name of the organization to edit */
      org: string;
      /**  */
      body: EditOrgOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List an organization's webhooks
   */
  static orgListHooks(
    params: {
      /** name of the organization */
      org: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/hooks';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a hook
   */
  static orgCreateHook(
    params: {
      /** name of the organization */
      org: string;
      /**  */
      body: CreateHookOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/hooks/';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a hook
   */
  static orgGetHook(
    params: {
      /** name of the organization */
      org: string;
      /** id of the hook to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/hooks/{id}';
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a hook
   */
  static orgDeleteHook(
    params: {
      /** name of the organization */
      org: string;
      /** id of the hook to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/hooks/{id}';
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a hook
   */
  static orgEditHook(
    params: {
      /** name of the organization */
      org: string;
      /** id of the hook to update */
      id: number;
      /**  */
      body?: EditHookOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/hooks/{id}';
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List an organization's labels
   */
  static orgListLabels(
    params: {
      /** name of the organization */
      org: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/labels';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a label for an organization
   */
  static orgCreateLabel(
    params: {
      /** name of the organization */
      org: string;
      /**  */
      body?: CreateLabelOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/labels';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a single label
   */
  static orgGetLabel(
    params: {
      /** name of the organization */
      org: string;
      /** id of the label to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/labels/{id}';
      url = url.replace('{org}', params['org'] + '');
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
  static orgDeleteLabel(
    params: {
      /** name of the organization */
      org: string;
      /** id of the label to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/labels/{id}';
      url = url.replace('{org}', params['org'] + '');
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
  static orgEditLabel(
    params: {
      /** name of the organization */
      org: string;
      /** id of the label to edit */
      id: number;
      /**  */
      body?: EditLabelOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/labels/{id}';
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List an organization's members
   */
  static orgListMembers(
    params: {
      /** name of the organization */
      org: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/members';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Check if a user is a member of an organization
   */
  static orgIsMember(
    params: {
      /** name of the organization */
      org: string;
      /** username of the user */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/members/{username}';
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Remove a member from an organization
   */
  static orgDeleteMember(
    params: {
      /** name of the organization */
      org: string;
      /** username of the user */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/members/{username}';
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List an organization's public members
   */
  static orgListPublicMembers(
    params: {
      /** name of the organization */
      org: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/public_members';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Check if a user is a public member of an organization
   */
  static orgIsPublicMember(
    params: {
      /** name of the organization */
      org: string;
      /** username of the user */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/public_members/{username}';
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Publicize a user's membership
   */
  static orgPublicizeMember(
    params: {
      /** name of the organization */
      org: string;
      /** username of the user */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/public_members/{username}';
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Conceal a user's membership
   */
  static orgConcealMember(
    params: {
      /** name of the organization */
      org: string;
      /** username of the user */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/public_members/{username}';
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List an organization's repos
   */
  static orgListRepos(
    params: {
      /** name of the organization */
      org: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/repos';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a repository in an organization
   */
  static createOrgRepo(
    params: {
      /** name of organization */
      org: string;
      /**  */
      body?: CreateRepoOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/repos';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List an organization's teams
   */
  static orgListTeams(
    params: {
      /** name of the organization */
      org: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/teams';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a team
   */
  static orgCreateTeam(
    params: {
      /** name of the organization */
      org: string;
      /**  */
      body?: CreateTeamOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/teams';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Search for teams within an organization
   */
  static teamSearch(
    params: {
      /** name of the organization */
      org: string;
      /** keywords to search */
      q?: string;
      /** include search within team description (defaults to true) */
      includeDesc?: boolean;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/orgs/{org}/teams/search';
      url = url.replace('{org}', params['org'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        q: params['q'],
        include_desc: params['includeDesc'],
        page: params['page'],
        limit: params['limit']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a team
   */
  static orgGetTeam(
    params: {
      /** id of the team to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a team
   */
  static orgDeleteTeam(
    params: {
      /** id of the team to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit a team
   */
  static orgEditTeam(
    params: {
      /** id of the team to edit */
      id: number;
      /**  */
      body?: EditTeamOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a team's members
   */
  static orgListTeamMembers(
    params: {
      /** id of the team */
      id: number;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}/members';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a particular member of team
   */
  static orgListTeamMember(
    params: {
      /** id of the team */
      id: number;
      /** username of the member to list */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}/members/{username}';
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a team member
   */
  static orgAddTeamMember(
    params: {
      /** id of the team */
      id: number;
      /** username of the user to add */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}/members/{username}';
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Remove a team member
   */
  static orgRemoveTeamMember(
    params: {
      /** id of the team */
      id: number;
      /** username of the user to remove */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}/members/{username}';
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a team's repos
   */
  static orgListTeamRepos(
    params: {
      /** id of the team */
      id: number;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}/repos';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a repository to a team
   */
  static orgAddTeamRepository(
    params: {
      /** id of the team */
      id: number;
      /** organization that owns the repo to add */
      org: string;
      /** name of the repo to add */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}/repos/{org}/{repo}';
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Remove a repository from a team
   */
  static orgRemoveTeamRepository(
    params: {
      /** id of the team */
      id: number;
      /** organization that owns the repo to remove */
      org: string;
      /** name of the repo to remove */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/teams/{id}/repos/{org}/{repo}';
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{org}', params['org'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the current user's organizations
   */
  static orgListCurrentUserOrgs(
    params: {
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/orgs';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a user's organizations
   */
  static orgListUserOrgs(
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
      let url = '/users/{username}/orgs';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
