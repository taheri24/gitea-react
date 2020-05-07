import {
  MigrateRepoForm,
  EditRepoOption,
  ExternalTracker,
  ExternalWiki,
  InternalTracker,
  CreateBranchProtectionOption,
  EditBranchProtectionOption,
  AddCollaboratorOption,
  UpdateFileOptions,
  Identity,
  CommitDateOptions,
  CreateFileOptions,
  DeleteFileOptions,
  CreateForkOption,
  CreateHookOption,
  CreateHookOptionConfig,
  EnumCreateHookOptionType,
  EditGitHookOption,
  EditHookOption,
  CreateKeyOption,
  CreatePullRequestOption,
  EditPullRequestOption,
  MergePullRequestOption,
  EnumMergePullRequestOptionDo,
  CreatePullReviewOptions,
  CreatePullReviewComment,
  ReviewStateType,
  SubmitPullReviewOptions,
  CreateReleaseOption,
  EditReleaseOption,
  EditAttachmentOptions,
  CreateStatusOption,
  StatusState,
  RepoTopicOptions,
  TransferRepoOption,
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

export class RepositoryService {
  /**
   * Migrate a remote git repository
   */
  static repoMigrate(
    params: {
      /**  */
      body?: MigrateRepoForm;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/migrate';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Search for repositories
   */
  static repoSearch(
    params: {
      /** keyword */
      q?: string;
      /** Limit search to repositories with keyword as topic */
      topic?: boolean;
      /** include search of keyword within repository description */
      includeDesc?: boolean;
      /** search only for repos that the user with the given id owns or contributes to */
      uid?: number;
      /** repo owner to prioritize in the results */
      priorityOwnerId?: number;
      /** search only for repos that the user with the given id has starred */
      starredBy?: number;
      /** include private repositories this user has access to (defaults to true) */
      private?: boolean;
      /** include template repositories this user has access to (defaults to true) */
      template?: boolean;
      /** type of repository to search for. Supported values are "fork", "source", "mirror" and "collaborative" */
      mode?: string;
      /** if `uid` is given, search only for repos that the user owns */
      exclusive?: boolean;
      /** sort repos by attribute. Supported values are "alpha", "created", "updated", "size", and "id". Default is "alpha" */
      sort?: string;
      /** sort order, either "asc" (ascending) or "desc" (descending). Default is "asc", ignored if "sort" is not specified. */
      order?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        q: params['q'],
        topic: params['topic'],
        includeDesc: params['includeDesc'],
        uid: params['uid'],
        priority_owner_id: params['priorityOwnerId'],
        starredBy: params['starredBy'],
        private: params['private'],
        template: params['template'],
        mode: params['mode'],
        exclusive: params['exclusive'],
        sort: params['sort'],
        order: params['order'],
        page: params['page'],
        limit: params['limit']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a repository
   */
  static repoGet(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a repository
   */
  static repoDelete(
    params: {
      /** owner of the repo to delete */
      owner: string;
      /** name of the repo to delete */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit a repository's properties. Only fields that are set will be changed.
   */
  static repoEdit(
    params: {
      /** owner of the repo to edit */
      owner: string;
      /** name of the repo to edit */
      repo: string;
      /** Properties of a repo that you can edit */
      body?: EditRepoOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get an archive of a repository
   */
  static repoGetArchive(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** archive to download, consisting of a git reference and archive */
      archive: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/archive/{archive}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{archive}', params['archive'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List branch protections for a repository
   */
  static repoListBranchProtection(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/branch_protections';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a branch protections for a repository
   */
  static repoCreateBranchProtection(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /**  */
      body?: CreateBranchProtectionOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/branch_protections';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a specific branch protection for the repository
   */
  static repoGetBranchProtection(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** name of protected branch */
      name: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/branch_protections/{name}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{name}', params['name'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a specific branch protection for the repository
   */
  static repoDeleteBranchProtection(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** name of protected branch */
      name: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/branch_protections/{name}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{name}', params['name'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit a branch protections for a repository. Only fields that are set will be changed
   */
  static repoEditBranchProtection(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** name of protected branch */
      name: string;
      /**  */
      body?: EditBranchProtectionOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/branch_protections/{name}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{name}', params['name'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repository's branches
   */
  static repoListBranches(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/branches';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Retrieve a specific branch from a repository, including its effective branch protection
   */
  static repoGetBranch(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** branch to get */
      branch: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/branches/{branch}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{branch}', params['branch'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a specific branch from a repository
   */
  static repoDeleteBranch(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** branch to delete */
      branch: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/branches/{branch}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{branch}', params['branch'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repository's collaborators
   */
  static repoListCollaborators(
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
      let url = '/repos/{owner}/{repo}/collaborators';
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
   * Check if a user is a collaborator of a repository
   */
  static repoCheckCollaborator(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** username of the collaborator */
      collaborator: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/collaborators/{collaborator}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{collaborator}', params['collaborator'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a collaborator to a repository
   */
  static repoAddCollaborator(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** username of the collaborator to add */
      collaborator: string;
      /**  */
      body?: AddCollaboratorOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/collaborators/{collaborator}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{collaborator}', params['collaborator'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a collaborator from a repository
   */
  static repoDeleteCollaborator(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** username of the collaborator to delete */
      collaborator: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/collaborators/{collaborator}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{collaborator}', params['collaborator'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a list of all commits from a repository
   */
  static repoGetAllCommits(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** SHA or branch to start listing commits from (usually 'master') */
      sha?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/commits';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { sha: params['sha'], page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a single commit from a repository
   */
  static repoGetSingleCommitByRef(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** a git ref */
      ref: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/commits/{ref}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{ref}', params['ref'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a commit's combined status, by branch/tag/commit reference
   */
  static repoGetCombinedStatusByRef(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** name of branch/tag/commit */
      ref: string;
      /** page number of results */
      page?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/commits/{ref}/statuses';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{ref}', params['ref'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Gets the metadata of all the entries of the root dir
   */
  static repoGetContentsList(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
      ref?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/contents';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { ref: params['ref'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
   */
  static repoGetContents(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** path of the dir, file, symlink or submodule in the repo */
      filepath: string;
      /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
      ref?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/contents/{filepath}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{filepath}', params['filepath'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { ref: params['ref'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a file in a repository
   */
  static repoUpdateFile(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** path of the file to update */
      filepath: string;
      /**  */
      body: UpdateFileOptions;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/contents/{filepath}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{filepath}', params['filepath'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a file in a repository
   */
  static repoCreateFile(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** path of the file to create */
      filepath: string;
      /**  */
      body: CreateFileOptions;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/contents/{filepath}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{filepath}', params['filepath'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a file in a repository
   */
  static repoDeleteFile(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** path of the file to delete */
      filepath: string;
      /**  */
      body: DeleteFileOptions;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/contents/{filepath}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{filepath}', params['filepath'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get the EditorConfig definitions of a file in a repository
   */
  static repoGetEditorConfig(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** filepath of file to get */
      filepath: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/editorconfig/{filepath}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{filepath}', params['filepath'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repository's forks
   */
  static listForks(
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
      let url = '/repos/{owner}/{repo}/forks';
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
   * Fork a repository
   */
  static createFork(
    params: {
      /** owner of the repo to fork */
      owner: string;
      /** name of the repo to fork */
      repo: string;
      /**  */
      body?: CreateForkOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/forks';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Gets the blob of a repository.
   */
  static getBlob(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** sha of the commit */
      sha: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/git/blobs/{sha}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{sha}', params['sha'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a single commit from a repository
   */
  static repoGetSingleCommitBySha(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** the commit hash */
      sha: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/git/commits/{sha}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{sha}', params['sha'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get specified ref or filtered repository's refs
   */
  static repoListAllGitRefs(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/git/refs';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get specified ref or filtered repository's refs
   */
  static repoListGitRefs(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** part or full name of the ref */
      ref: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/git/refs/{ref}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{ref}', params['ref'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Gets the tag object of an annotated tag (not lightweight tags)
   */
  static getTag(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags. */
      sha: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/git/tags/{sha}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{sha}', params['sha'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Gets the tree of a repository.
   */
  static getTree(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** sha of the commit */
      sha: string;
      /** show all directories and files */
      recursive?: boolean;
      /** page number; the 'truncated' field in the response will be true if there are still more items after this page, false if the last page */
      page?: number;
      /** number of items per page; default is 1000 or what is set in app.ini as DEFAULT_GIT_TREES_PER_PAGE */
      perPage?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/git/trees/{sha}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{sha}', params['sha'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { recursive: params['recursive'], page: params['page'], per_page: params['perPage'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the hooks in a repository
   */
  static repoListHooks(
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
      let url = '/repos/{owner}/{repo}/hooks';
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
   * Create a hook
   */
  static repoCreateHook(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /**  */
      body?: CreateHookOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/hooks';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List the Git hooks in a repository
   */
  static repoListGitHooks(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/hooks/git';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a Git hook
   */
  static repoGetGitHook(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the hook to get */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/hooks/git/{id}';
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
   * Delete a Git hook in a repository
   */
  static repoDeleteGitHook(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the hook to get */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/hooks/git/{id}';
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
   * Edit a Git hook in a repository
   */
  static repoEditGitHook(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the hook to get */
      id: string;
      /**  */
      body?: EditGitHookOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/hooks/git/{id}';
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
   * Get a hook
   */
  static repoGetHook(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the hook to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/hooks/{id}';
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
   * Delete a hook in a repository
   */
  static repoDeleteHook(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the hook to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/hooks/{id}';
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
   * Edit a hook in a repository
   */
  static repoEditHook(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the hook */
      id: number;
      /**  */
      body?: EditHookOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/hooks/{id}';
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
   * Test a push webhook
   */
  static repoTestHook(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the hook to test */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/hooks/{id}/tests';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repository's keys
   */
  static repoListKeys(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** the key_id to search for */
      keyId?: number;
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
      let url = '/repos/{owner}/{repo}/keys';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        key_id: params['keyId'],
        fingerprint: params['fingerprint'],
        page: params['page'],
        limit: params['limit']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a key to a repository
   */
  static repoCreateKey(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /**  */
      body?: CreateKeyOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/keys';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a repository's key by id
   */
  static repoGetKey(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the key to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/keys/{id}';
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
   * Delete a key from a repository
   */
  static repoDeleteKey(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the key to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/keys/{id}';
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
   * Sync a mirrored repository
   */
  static repoMirrorSync(
    params: {
      /** owner of the repo to sync */
      owner: string;
      /** name of the repo to sync */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/mirror-sync';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repo's pull requests
   */
  static repoListPullRequests(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** State of pull request: open or closed (optional) */
      state?: string;
      /** Type of sort */
      sort?: string;
      /** ID of the milestone */
      milestone?: number;
      /** Label IDs */
      labels?: number[];
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        state: params['state'],
        sort: params['sort'],
        milestone: params['milestone'],
        labels: params['labels'],
        page: params['page'],
        limit: params['limit']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a pull request
   */
  static repoCreatePullRequest(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /**  */
      body?: CreatePullRequestOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a pull request
   */
  static repoGetPullRequest(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request to get */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}';
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
   * Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
   */
  static repoEditPullRequest(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request to edit */
      index: number;
      /**  */
      body?: EditPullRequestOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}';
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
   * Check if a pull request has been merged
   */
  static repoPullRequestIsMerged(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request */
      index: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}/merge';
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
   * Merge a pull request
   */
  static repoMergePullRequest(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request to merge */
      index: number;
      /**  */
      body?: MergePullRequestOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}/merge';
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
   * List all reviews for a pull request
   */
  static repoListPullReviews(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request */
      index: number;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}/reviews';
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
   * Create a review to an pull request
   */
  static repoCreatePullReview(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request */
      index: number;
      /**  */
      body: CreatePullReviewOptions;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}/reviews';
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
   * Get a specific review for a pull request
   */
  static repoGetPullReview(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request */
      index: number;
      /** id of the review */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Submit a pending review to an pull request
   */
  static repoSubmitPullReview(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request */
      index: number;
      /** id of the review */
      id: number;
      /**  */
      body: SubmitPullReviewOptions;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a specific review from a pull request
   */
  static repoDeletePullReview(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request */
      index: number;
      /** id of the review */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}';
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
   * Get a specific review for a pull request
   */
  static repoGetPullReviewComments(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** index of the pull request */
      index: number;
      /** id of the review */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{index}', params['index'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a file from a repository
   */
  static repoGetRawFile(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** filepath of the file to get */
      filepath: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/raw/{filepath}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{filepath}', params['filepath'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repo's releases
   */
  static repoListReleases(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** items count every page wants to load */
      perPage?: number;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { per_page: params['perPage'], page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a release
   */
  static repoCreateRelease(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /**  */
      body?: CreateReleaseOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a release
   */
  static repoGetRelease(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the release to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases/{id}';
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
   * Delete a release
   */
  static repoDeleteRelease(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the release to delete */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases/{id}';
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
   * Update a release
   */
  static repoEditRelease(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the release to edit */
      id: number;
      /**  */
      body?: EditReleaseOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases/{id}';
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
   * List release's attachments
   */
  static repoListReleaseAttachments(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the release */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases/{id}/assets';
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
   * Create a release attachment
   */
  static repoCreateReleaseAttachment(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the release */
      id: number;
      /** name of the attachment */
      name?: string;
      /** attachment to upload */
      attachment: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases/{id}/assets';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);
      configs.params = { name: params['name'] };
      let data = null;
      data = new FormData();
      if (params['attachment']) {
        data.append('attachment', params['attachment'] as any);
      }

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a release attachment
   */
  static repoGetReleaseAttachment(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the release */
      id: number;
      /** id of the attachment to get */
      attachmentId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{attachment_id}', params['attachmentId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a release attachment
   */
  static repoDeleteReleaseAttachment(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the release */
      id: number;
      /** id of the attachment to delete */
      attachmentId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{attachment_id}', params['attachmentId'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit a release attachment
   */
  static repoEditReleaseAttachment(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** id of the release */
      id: number;
      /** id of the attachment to edit */
      attachmentId: number;
      /**  */
      body?: EditAttachmentOptions;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{id}', params['id'] + '');
      url = url.replace('{attachment_id}', params['attachmentId'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get signing-key.gpg for given repository
   */
  static repoSigningKey(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/signing-key.gpg';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repo's stargazers
   */
  static repoListStargazers(
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
      let url = '/repos/{owner}/{repo}/stargazers';
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
   * Get a commit's statuses
   */
  static repoListStatuses(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** sha of the commit */
      sha: string;
      /** type of sort */
      sort?: string;
      /** type of state */
      state?: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/statuses/{sha}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{sha}', params['sha'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { sort: params['sort'], state: params['state'], page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a commit status
   */
  static repoCreateStatus(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** sha of the commit */
      sha: string;
      /**  */
      body?: CreateStatusOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/statuses/{sha}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{sha}', params['sha'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repo's watchers
   */
  static repoListSubscribers(
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
      let url = '/repos/{owner}/{repo}/subscribers';
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
   * Check if the current user is watching a repo
   */
  static userCurrentCheckSubscription(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/subscription';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Watch a repo
   */
  static userCurrentPutSubscription(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/subscription';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Unwatch a repo
   */
  static userCurrentDeleteSubscription(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/subscription';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * List a repository's tags
   */
  static repoListTags(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, default maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/tags';
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
   * List a repo's tracked times
   */
  static repoTrackedTimes(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** optional filter by user */
      user?: string;
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
      let url = '/repos/{owner}/{repo}/times';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        user: params['user'],
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
   * List a user's tracked times in a repo
   */
  static userTrackedTimes(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** username of user */
      user: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/times/{user}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{user}', params['user'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get list of topics that a repository has
   */
  static repoListTopics(
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
      let url = '/repos/{owner}/{repo}/topics';
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
   * Replace list of topics for a repository
   */
  static repoUpdateTopics(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /**  */
      body?: RepoTopicOptions;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/topics';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a topic to a repository
   */
  static repoAddTopíc(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** name of the topic to add */
      topic: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/topics/{topic}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{topic}', params['topic'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a topic from a repository
   */
  static repoDeleteTopic(
    params: {
      /** owner of the repo */
      owner: string;
      /** name of the repo */
      repo: string;
      /** name of the topic to delete */
      topic: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/topics/{topic}';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');
      url = url.replace('{topic}', params['topic'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Transfer a repo ownership
   */
  static repoTransfer(
    params: {
      /** owner of the repo to transfer */
      owner: string;
      /** name of the repo to transfer */
      repo: string;
      /** Transfer Options */
      body: TransferRepoOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repos/{owner}/{repo}/transfer';
      url = url.replace('{owner}', params['owner'] + '');
      url = url.replace('{repo}', params['repo'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a repository by id
   */
  static repoGetById(
    params: {
      /** id of the repo to get */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/repositories/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * search topics via keyword
   */
  static topicSearch(
    params: {
      /** keywords to search */
      q: string;
      /** page number of results to return (1-based) */
      page?: number;
      /** page size of results, maximum page size is 50 */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/topics/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { q: params['q'], page: params['page'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a repository
   */
  static createCurrentUserRepo(
    params: {
      /**  */
      body?: CreateRepoOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/repos';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
