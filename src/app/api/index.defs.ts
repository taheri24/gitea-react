/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount: number;
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount!: number;
}

// customer definition
// empty

export class APIError {
  /**  */
  'message': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['message'] = data['message'];
    this['url'] = data['url'];
  }
}

export class AccessToken {
  /**  */
  'id': number;

  /**  */
  'name': string;

  /**  */
  'sha1': string;

  /**  */
  'token_last_eight': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['name'] = data['name'];
    this['sha1'] = data['sha1'];
    this['token_last_eight'] = data['token_last_eight'];
  }
}

export class AddCollaboratorOption {
  /**  */
  'permission': string;

  constructor(data: undefined | any = {}) {
    this['permission'] = data['permission'];
  }
}

export class AddTimeOption {
  /**  */
  'created': Date;

  /** time in seconds */
  'time': number;

  /** User who spent the time (optional) */
  'user_name': string;

  constructor(data: undefined | any = {}) {
    this['created'] = data['created'];
    this['time'] = data['time'];
    this['user_name'] = data['user_name'];
  }
}

export class AnnotatedTag {
  /**  */
  'message': string;

  /**  */
  'object': AnnotatedTagObject;

  /**  */
  'sha': string;

  /**  */
  'tag': string;

  /**  */
  'tagger': CommitUser;

  /**  */
  'url': string;

  /**  */
  'verification': PayloadCommitVerification;

  constructor(data: undefined | any = {}) {
    this['message'] = data['message'];
    this['object'] = data['object'];
    this['sha'] = data['sha'];
    this['tag'] = data['tag'];
    this['tagger'] = data['tagger'];
    this['url'] = data['url'];
    this['verification'] = data['verification'];
  }
}

export class AnnotatedTagObject {
  /**  */
  'sha': string;

  /**  */
  'type': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['sha'] = data['sha'];
    this['type'] = data['type'];
    this['url'] = data['url'];
  }
}

export class Attachment {
  /**  */
  'browser_download_url': string;

  /**  */
  'created_at': Date;

  /**  */
  'download_count': number;

  /**  */
  'id': number;

  /**  */
  'name': string;

  /**  */
  'size': number;

  /**  */
  'uuid': string;

  constructor(data: undefined | any = {}) {
    this['browser_download_url'] = data['browser_download_url'];
    this['created_at'] = data['created_at'];
    this['download_count'] = data['download_count'];
    this['id'] = data['id'];
    this['name'] = data['name'];
    this['size'] = data['size'];
    this['uuid'] = data['uuid'];
  }
}

export class Branch {
  /**  */
  'commit': PayloadCommit;

  /**  */
  'effective_branch_protection_name': string;

  /**  */
  'enable_status_check': boolean;

  /**  */
  'name': string;

  /**  */
  'protected': boolean;

  /**  */
  'required_approvals': number;

  /**  */
  'status_check_contexts': string[];

  /**  */
  'user_can_merge': boolean;

  /**  */
  'user_can_push': boolean;

  constructor(data: undefined | any = {}) {
    this['commit'] = data['commit'];
    this['effective_branch_protection_name'] = data['effective_branch_protection_name'];
    this['enable_status_check'] = data['enable_status_check'];
    this['name'] = data['name'];
    this['protected'] = data['protected'];
    this['required_approvals'] = data['required_approvals'];
    this['status_check_contexts'] = data['status_check_contexts'];
    this['user_can_merge'] = data['user_can_merge'];
    this['user_can_push'] = data['user_can_push'];
  }
}

export class BranchProtection {
  /**  */
  'approvals_whitelist_teams': string[];

  /**  */
  'approvals_whitelist_username': string[];

  /**  */
  'block_on_outdated_branch': boolean;

  /**  */
  'block_on_rejected_reviews': boolean;

  /**  */
  'branch_name': string;

  /**  */
  'created_at': Date;

  /**  */
  'dismiss_stale_approvals': boolean;

  /**  */
  'enable_approvals_whitelist': boolean;

  /**  */
  'enable_merge_whitelist': boolean;

  /**  */
  'enable_push': boolean;

  /**  */
  'enable_push_whitelist': boolean;

  /**  */
  'enable_status_check': boolean;

  /**  */
  'merge_whitelist_teams': string[];

  /**  */
  'merge_whitelist_usernames': string[];

  /**  */
  'protected_file_patterns': string;

  /**  */
  'push_whitelist_deploy_keys': boolean;

  /**  */
  'push_whitelist_teams': string[];

  /**  */
  'push_whitelist_usernames': string[];

  /**  */
  'require_signed_commits': boolean;

  /**  */
  'required_approvals': number;

  /**  */
  'status_check_contexts': string[];

  /**  */
  'updated_at': Date;

  constructor(data: undefined | any = {}) {
    this['approvals_whitelist_teams'] = data['approvals_whitelist_teams'];
    this['approvals_whitelist_username'] = data['approvals_whitelist_username'];
    this['block_on_outdated_branch'] = data['block_on_outdated_branch'];
    this['block_on_rejected_reviews'] = data['block_on_rejected_reviews'];
    this['branch_name'] = data['branch_name'];
    this['created_at'] = data['created_at'];
    this['dismiss_stale_approvals'] = data['dismiss_stale_approvals'];
    this['enable_approvals_whitelist'] = data['enable_approvals_whitelist'];
    this['enable_merge_whitelist'] = data['enable_merge_whitelist'];
    this['enable_push'] = data['enable_push'];
    this['enable_push_whitelist'] = data['enable_push_whitelist'];
    this['enable_status_check'] = data['enable_status_check'];
    this['merge_whitelist_teams'] = data['merge_whitelist_teams'];
    this['merge_whitelist_usernames'] = data['merge_whitelist_usernames'];
    this['protected_file_patterns'] = data['protected_file_patterns'];
    this['push_whitelist_deploy_keys'] = data['push_whitelist_deploy_keys'];
    this['push_whitelist_teams'] = data['push_whitelist_teams'];
    this['push_whitelist_usernames'] = data['push_whitelist_usernames'];
    this['require_signed_commits'] = data['require_signed_commits'];
    this['required_approvals'] = data['required_approvals'];
    this['status_check_contexts'] = data['status_check_contexts'];
    this['updated_at'] = data['updated_at'];
  }
}

export class Comment {
  /**  */
  'body': string;

  /**  */
  'created_at': Date;

  /**  */
  'html_url': string;

  /**  */
  'id': number;

  /**  */
  'issue_url': string;

  /**  */
  'original_author': string;

  /**  */
  'original_author_id': number;

  /**  */
  'pull_request_url': string;

  /**  */
  'updated_at': Date;

  /**  */
  'user': User;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
    this['created_at'] = data['created_at'];
    this['html_url'] = data['html_url'];
    this['id'] = data['id'];
    this['issue_url'] = data['issue_url'];
    this['original_author'] = data['original_author'];
    this['original_author_id'] = data['original_author_id'];
    this['pull_request_url'] = data['pull_request_url'];
    this['updated_at'] = data['updated_at'];
    this['user'] = data['user'];
  }
}

export class Commit {
  /**  */
  'author': User;

  /**  */
  'commit': RepoCommit;

  /**  */
  'committer': User;

  /**  */
  'html_url': string;

  /**  */
  'parents': CommitMeta[];

  /**  */
  'sha': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['author'] = data['author'];
    this['commit'] = data['commit'];
    this['committer'] = data['committer'];
    this['html_url'] = data['html_url'];
    this['parents'] = data['parents'];
    this['sha'] = data['sha'];
    this['url'] = data['url'];
  }
}

export class CommitDateOptions {
  /**  */
  'author': Date;

  /**  */
  'committer': Date;

  constructor(data: undefined | any = {}) {
    this['author'] = data['author'];
    this['committer'] = data['committer'];
  }
}

export class CommitMeta {
  /**  */
  'sha': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['sha'] = data['sha'];
    this['url'] = data['url'];
  }
}

export class CommitUser {
  /**  */
  'date': string;

  /**  */
  'email': string;

  /**  */
  'name': string;

  constructor(data: undefined | any = {}) {
    this['date'] = data['date'];
    this['email'] = data['email'];
    this['name'] = data['name'];
  }
}

export class ContentsResponse {
  /**  */
  '_links': FileLinksResponse;

  /** `content` is populated when `type` is `file`, otherwise null */
  'content': string;

  /**  */
  'download_url': string;

  /** `encoding` is populated when `type` is `file`, otherwise null */
  'encoding': string;

  /**  */
  'git_url': string;

  /**  */
  'html_url': string;

  /**  */
  'name': string;

  /**  */
  'path': string;

  /**  */
  'sha': string;

  /**  */
  'size': number;

  /** `submodule_git_url` is populated when `type` is `submodule`, otherwise null */
  'submodule_git_url': string;

  /** `target` is populated when `type` is `symlink`, otherwise null */
  'target': string;

  /** `type` will be `file`, `dir`, `symlink`, or `submodule` */
  'type': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['_links'] = data['_links'];
    this['content'] = data['content'];
    this['download_url'] = data['download_url'];
    this['encoding'] = data['encoding'];
    this['git_url'] = data['git_url'];
    this['html_url'] = data['html_url'];
    this['name'] = data['name'];
    this['path'] = data['path'];
    this['sha'] = data['sha'];
    this['size'] = data['size'];
    this['submodule_git_url'] = data['submodule_git_url'];
    this['target'] = data['target'];
    this['type'] = data['type'];
    this['url'] = data['url'];
  }
}

export class CreateBranchProtectionOption {
  /**  */
  'approvals_whitelist_teams': string[];

  /**  */
  'approvals_whitelist_username': string[];

  /**  */
  'block_on_outdated_branch': boolean;

  /**  */
  'block_on_rejected_reviews': boolean;

  /**  */
  'branch_name': string;

  /**  */
  'dismiss_stale_approvals': boolean;

  /**  */
  'enable_approvals_whitelist': boolean;

  /**  */
  'enable_merge_whitelist': boolean;

  /**  */
  'enable_push': boolean;

  /**  */
  'enable_push_whitelist': boolean;

  /**  */
  'enable_status_check': boolean;

  /**  */
  'merge_whitelist_teams': string[];

  /**  */
  'merge_whitelist_usernames': string[];

  /**  */
  'protected_file_patterns': string;

  /**  */
  'push_whitelist_deploy_keys': boolean;

  /**  */
  'push_whitelist_teams': string[];

  /**  */
  'push_whitelist_usernames': string[];

  /**  */
  'require_signed_commits': boolean;

  /**  */
  'required_approvals': number;

  /**  */
  'status_check_contexts': string[];

  constructor(data: undefined | any = {}) {
    this['approvals_whitelist_teams'] = data['approvals_whitelist_teams'];
    this['approvals_whitelist_username'] = data['approvals_whitelist_username'];
    this['block_on_outdated_branch'] = data['block_on_outdated_branch'];
    this['block_on_rejected_reviews'] = data['block_on_rejected_reviews'];
    this['branch_name'] = data['branch_name'];
    this['dismiss_stale_approvals'] = data['dismiss_stale_approvals'];
    this['enable_approvals_whitelist'] = data['enable_approvals_whitelist'];
    this['enable_merge_whitelist'] = data['enable_merge_whitelist'];
    this['enable_push'] = data['enable_push'];
    this['enable_push_whitelist'] = data['enable_push_whitelist'];
    this['enable_status_check'] = data['enable_status_check'];
    this['merge_whitelist_teams'] = data['merge_whitelist_teams'];
    this['merge_whitelist_usernames'] = data['merge_whitelist_usernames'];
    this['protected_file_patterns'] = data['protected_file_patterns'];
    this['push_whitelist_deploy_keys'] = data['push_whitelist_deploy_keys'];
    this['push_whitelist_teams'] = data['push_whitelist_teams'];
    this['push_whitelist_usernames'] = data['push_whitelist_usernames'];
    this['require_signed_commits'] = data['require_signed_commits'];
    this['required_approvals'] = data['required_approvals'];
    this['status_check_contexts'] = data['status_check_contexts'];
  }
}

export class CreateEmailOption {
  /** email addresses to add */
  'emails': string[];

  constructor(data: undefined | any = {}) {
    this['emails'] = data['emails'];
  }
}

export class CreateFileOptions {
  /**  */
  'author': Identity;

  /** branch (optional) to base this file from. if not given, the default branch is used */
  'branch': string;

  /**  */
  'committer': Identity;

  /** content must be base64 encoded */
  'content': string;

  /**  */
  'dates': CommitDateOptions;

  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  'message': string;

  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  'new_branch': string;

  constructor(data: undefined | any = {}) {
    this['author'] = data['author'];
    this['branch'] = data['branch'];
    this['committer'] = data['committer'];
    this['content'] = data['content'];
    this['dates'] = data['dates'];
    this['message'] = data['message'];
    this['new_branch'] = data['new_branch'];
  }
}

export class CreateForkOption {
  /** organization name, if forking into an organization */
  'organization': string;

  constructor(data: undefined | any = {}) {
    this['organization'] = data['organization'];
  }
}

export class CreateGPGKeyOption {
  /** An armored GPG key to add */
  'armored_public_key': string;

  constructor(data: undefined | any = {}) {
    this['armored_public_key'] = data['armored_public_key'];
  }
}

export class CreateHookOption {
  /**  */
  'active': boolean;

  /**  */
  'branch_filter': string;

  /**  */
  'config': CreateHookOptionConfig;

  /**  */
  'events': string[];

  /**  */
  'type': EnumCreateHookOptionType;

  constructor(data: undefined | any = {}) {
    this['active'] = data['active'];
    this['branch_filter'] = data['branch_filter'];
    this['config'] = data['config'];
    this['events'] = data['events'];
    this['type'] = data['type'];
  }
}

export class CreateHookOptionConfig {
  constructor(data: undefined | any = {}) {}
}

export class CreateIssueCommentOption {
  /**  */
  'body': string;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
  }
}

export class CreateIssueOption {
  /** username of assignee */
  'assignee': string;

  /**  */
  'assignees': string[];

  /**  */
  'body': string;

  /**  */
  'closed': boolean;

  /**  */
  'due_date': Date;

  /** list of label ids */
  'labels': number[];

  /** milestone id */
  'milestone': number;

  /**  */
  'title': string;

  constructor(data: undefined | any = {}) {
    this['assignee'] = data['assignee'];
    this['assignees'] = data['assignees'];
    this['body'] = data['body'];
    this['closed'] = data['closed'];
    this['due_date'] = data['due_date'];
    this['labels'] = data['labels'];
    this['milestone'] = data['milestone'];
    this['title'] = data['title'];
  }
}

export class CreateKeyOption {
  /** An armored SSH key to add */
  'key': string;

  /** Describe if the key has only read access or read/write */
  'read_only': boolean;

  /** Title of the key to add */
  'title': string;

  constructor(data: undefined | any = {}) {
    this['key'] = data['key'];
    this['read_only'] = data['read_only'];
    this['title'] = data['title'];
  }
}

export class CreateLabelOption {
  /**  */
  'color': string;

  /**  */
  'description': string;

  /**  */
  'name': string;

  constructor(data: undefined | any = {}) {
    this['color'] = data['color'];
    this['description'] = data['description'];
    this['name'] = data['name'];
  }
}

export class CreateMilestoneOption {
  /**  */
  'description': string;

  /**  */
  'due_on': Date;

  /**  */
  'title': string;

  constructor(data: undefined | any = {}) {
    this['description'] = data['description'];
    this['due_on'] = data['due_on'];
    this['title'] = data['title'];
  }
}

export class CreateOAuth2ApplicationOptions {
  /**  */
  'name': string;

  /**  */
  'redirect_uris': string[];

  constructor(data: undefined | any = {}) {
    this['name'] = data['name'];
    this['redirect_uris'] = data['redirect_uris'];
  }
}

export class CreateOrgOption {
  /**  */
  'description': string;

  /**  */
  'full_name': string;

  /**  */
  'location': string;

  /**  */
  'repo_admin_change_team_access': boolean;

  /**  */
  'username': string;

  /** possible values are `public` (default), `limited` or `private` */
  'visibility': EnumCreateOrgOptionVisibility;

  /**  */
  'website': string;

  constructor(data: undefined | any = {}) {
    this['description'] = data['description'];
    this['full_name'] = data['full_name'];
    this['location'] = data['location'];
    this['repo_admin_change_team_access'] = data['repo_admin_change_team_access'];
    this['username'] = data['username'];
    this['visibility'] = data['visibility'];
    this['website'] = data['website'];
  }
}

export class CreatePullRequestOption {
  /**  */
  'assignee': string;

  /**  */
  'assignees': string[];

  /**  */
  'base': string;

  /**  */
  'body': string;

  /**  */
  'due_date': Date;

  /**  */
  'head': string;

  /**  */
  'labels': number[];

  /**  */
  'milestone': number;

  /**  */
  'title': string;

  constructor(data: undefined | any = {}) {
    this['assignee'] = data['assignee'];
    this['assignees'] = data['assignees'];
    this['base'] = data['base'];
    this['body'] = data['body'];
    this['due_date'] = data['due_date'];
    this['head'] = data['head'];
    this['labels'] = data['labels'];
    this['milestone'] = data['milestone'];
    this['title'] = data['title'];
  }
}

export class CreatePullReviewComment {
  /**  */
  'body': string;

  /** if comment to new file line or 0 */
  'new_position': number;

  /** if comment to old file line or 0 */
  'old_position': number;

  /** the tree path */
  'path': string;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
    this['new_position'] = data['new_position'];
    this['old_position'] = data['old_position'];
    this['path'] = data['path'];
  }
}

export class CreatePullReviewOptions {
  /**  */
  'body': string;

  /**  */
  'comments': CreatePullReviewComment[];

  /**  */
  'commit_id': string;

  /**  */
  'event': ReviewStateType;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
    this['comments'] = data['comments'];
    this['commit_id'] = data['commit_id'];
    this['event'] = data['event'];
  }
}

export class CreateReleaseOption {
  /**  */
  'body': string;

  /**  */
  'draft': boolean;

  /**  */
  'name': string;

  /**  */
  'prerelease': boolean;

  /**  */
  'tag_name': string;

  /**  */
  'target_commitish': string;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
    this['draft'] = data['draft'];
    this['name'] = data['name'];
    this['prerelease'] = data['prerelease'];
    this['tag_name'] = data['tag_name'];
    this['target_commitish'] = data['target_commitish'];
  }
}

export class CreateRepoOption {
  /** Whether the repository should be auto-intialized? */
  'auto_init': boolean;

  /** DefaultBranch of the repository (used when initializes and in template) */
  'default_branch': string;

  /** Description of the repository to create */
  'description': string;

  /** Gitignores to use */
  'gitignores': string;

  /** Issue Label set to use */
  'issue_labels': string;

  /** License to use */
  'license': string;

  /** Name of the repository to create */
  'name': string;

  /** Whether the repository is private */
  'private': boolean;

  /** Readme of the repository to create */
  'readme': string;

  constructor(data: undefined | any = {}) {
    this['auto_init'] = data['auto_init'];
    this['default_branch'] = data['default_branch'];
    this['description'] = data['description'];
    this['gitignores'] = data['gitignores'];
    this['issue_labels'] = data['issue_labels'];
    this['license'] = data['license'];
    this['name'] = data['name'];
    this['private'] = data['private'];
    this['readme'] = data['readme'];
  }
}

export class CreateStatusOption {
  /**  */
  'context': string;

  /**  */
  'description': string;

  /**  */
  'state': StatusState;

  /**  */
  'target_url': string;

  constructor(data: undefined | any = {}) {
    this['context'] = data['context'];
    this['description'] = data['description'];
    this['state'] = data['state'];
    this['target_url'] = data['target_url'];
  }
}

export class CreateTeamOption {
  /**  */
  'can_create_org_repo': boolean;

  /**  */
  'description': string;

  /**  */
  'includes_all_repositories': boolean;

  /**  */
  'name': string;

  /**  */
  'permission': EnumCreateTeamOptionPermission;

  /**  */
  'units': string[];

  constructor(data: undefined | any = {}) {
    this['can_create_org_repo'] = data['can_create_org_repo'];
    this['description'] = data['description'];
    this['includes_all_repositories'] = data['includes_all_repositories'];
    this['name'] = data['name'];
    this['permission'] = data['permission'];
    this['units'] = data['units'];
  }
}

export class CreateUserOption {
  /**  */
  'email': string;

  /**  */
  'full_name': string;

  /**  */
  'login_name': string;

  /**  */
  'must_change_password': boolean;

  /**  */
  'password': string;

  /**  */
  'send_notify': boolean;

  /**  */
  'source_id': number;

  /**  */
  'username': string;

  constructor(data: undefined | any = {}) {
    this['email'] = data['email'];
    this['full_name'] = data['full_name'];
    this['login_name'] = data['login_name'];
    this['must_change_password'] = data['must_change_password'];
    this['password'] = data['password'];
    this['send_notify'] = data['send_notify'];
    this['source_id'] = data['source_id'];
    this['username'] = data['username'];
  }
}

export class DeleteEmailOption {
  /** email addresses to delete */
  'emails': string[];

  constructor(data: undefined | any = {}) {
    this['emails'] = data['emails'];
  }
}

export class DeleteFileOptions {
  /**  */
  'author': Identity;

  /** branch (optional) to base this file from. if not given, the default branch is used */
  'branch': string;

  /**  */
  'committer': Identity;

  /**  */
  'dates': CommitDateOptions;

  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  'message': string;

  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  'new_branch': string;

  /** sha is the SHA for the file that already exists */
  'sha': string;

  constructor(data: undefined | any = {}) {
    this['author'] = data['author'];
    this['branch'] = data['branch'];
    this['committer'] = data['committer'];
    this['dates'] = data['dates'];
    this['message'] = data['message'];
    this['new_branch'] = data['new_branch'];
    this['sha'] = data['sha'];
  }
}

export class DeployKey {
  /**  */
  'created_at': Date;

  /**  */
  'fingerprint': string;

  /**  */
  'id': number;

  /**  */
  'key': string;

  /**  */
  'key_id': number;

  /**  */
  'read_only': boolean;

  /**  */
  'repository': Repository;

  /**  */
  'title': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['created_at'] = data['created_at'];
    this['fingerprint'] = data['fingerprint'];
    this['id'] = data['id'];
    this['key'] = data['key'];
    this['key_id'] = data['key_id'];
    this['read_only'] = data['read_only'];
    this['repository'] = data['repository'];
    this['title'] = data['title'];
    this['url'] = data['url'];
  }
}

export class EditAttachmentOptions {
  /**  */
  'name': string;

  constructor(data: undefined | any = {}) {
    this['name'] = data['name'];
  }
}

export class EditBranchProtectionOption {
  /**  */
  'approvals_whitelist_teams': string[];

  /**  */
  'approvals_whitelist_username': string[];

  /**  */
  'block_on_outdated_branch': boolean;

  /**  */
  'block_on_rejected_reviews': boolean;

  /**  */
  'dismiss_stale_approvals': boolean;

  /**  */
  'enable_approvals_whitelist': boolean;

  /**  */
  'enable_merge_whitelist': boolean;

  /**  */
  'enable_push': boolean;

  /**  */
  'enable_push_whitelist': boolean;

  /**  */
  'enable_status_check': boolean;

  /**  */
  'merge_whitelist_teams': string[];

  /**  */
  'merge_whitelist_usernames': string[];

  /**  */
  'protected_file_patterns': string;

  /**  */
  'push_whitelist_deploy_keys': boolean;

  /**  */
  'push_whitelist_teams': string[];

  /**  */
  'push_whitelist_usernames': string[];

  /**  */
  'require_signed_commits': boolean;

  /**  */
  'required_approvals': number;

  /**  */
  'status_check_contexts': string[];

  constructor(data: undefined | any = {}) {
    this['approvals_whitelist_teams'] = data['approvals_whitelist_teams'];
    this['approvals_whitelist_username'] = data['approvals_whitelist_username'];
    this['block_on_outdated_branch'] = data['block_on_outdated_branch'];
    this['block_on_rejected_reviews'] = data['block_on_rejected_reviews'];
    this['dismiss_stale_approvals'] = data['dismiss_stale_approvals'];
    this['enable_approvals_whitelist'] = data['enable_approvals_whitelist'];
    this['enable_merge_whitelist'] = data['enable_merge_whitelist'];
    this['enable_push'] = data['enable_push'];
    this['enable_push_whitelist'] = data['enable_push_whitelist'];
    this['enable_status_check'] = data['enable_status_check'];
    this['merge_whitelist_teams'] = data['merge_whitelist_teams'];
    this['merge_whitelist_usernames'] = data['merge_whitelist_usernames'];
    this['protected_file_patterns'] = data['protected_file_patterns'];
    this['push_whitelist_deploy_keys'] = data['push_whitelist_deploy_keys'];
    this['push_whitelist_teams'] = data['push_whitelist_teams'];
    this['push_whitelist_usernames'] = data['push_whitelist_usernames'];
    this['require_signed_commits'] = data['require_signed_commits'];
    this['required_approvals'] = data['required_approvals'];
    this['status_check_contexts'] = data['status_check_contexts'];
  }
}

export class EditDeadlineOption {
  /**  */
  'due_date': Date;

  constructor(data: undefined | any = {}) {
    this['due_date'] = data['due_date'];
  }
}

export class EditGitHookOption {
  /**  */
  'content': string;

  constructor(data: undefined | any = {}) {
    this['content'] = data['content'];
  }
}

export class EditHookOption {
  /**  */
  'active': boolean;

  /**  */
  'branch_filter': string;

  /**  */
  'config': object;

  /**  */
  'events': string[];

  constructor(data: undefined | any = {}) {
    this['active'] = data['active'];
    this['branch_filter'] = data['branch_filter'];
    this['config'] = data['config'];
    this['events'] = data['events'];
  }
}

export class EditIssueCommentOption {
  /**  */
  'body': string;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
  }
}

export class EditIssueOption {
  /**  */
  'assignee': string;

  /**  */
  'assignees': string[];

  /**  */
  'body': string;

  /**  */
  'due_date': Date;

  /**  */
  'milestone': number;

  /**  */
  'state': string;

  /**  */
  'title': string;

  /**  */
  'unset_due_date': boolean;

  constructor(data: undefined | any = {}) {
    this['assignee'] = data['assignee'];
    this['assignees'] = data['assignees'];
    this['body'] = data['body'];
    this['due_date'] = data['due_date'];
    this['milestone'] = data['milestone'];
    this['state'] = data['state'];
    this['title'] = data['title'];
    this['unset_due_date'] = data['unset_due_date'];
  }
}

export class EditLabelOption {
  /**  */
  'color': string;

  /**  */
  'description': string;

  /**  */
  'name': string;

  constructor(data: undefined | any = {}) {
    this['color'] = data['color'];
    this['description'] = data['description'];
    this['name'] = data['name'];
  }
}

export class EditMilestoneOption {
  /**  */
  'description': string;

  /**  */
  'due_on': Date;

  /**  */
  'state': string;

  /**  */
  'title': string;

  constructor(data: undefined | any = {}) {
    this['description'] = data['description'];
    this['due_on'] = data['due_on'];
    this['state'] = data['state'];
    this['title'] = data['title'];
  }
}

export class EditOrgOption {
  /**  */
  'description': string;

  /**  */
  'full_name': string;

  /**  */
  'location': string;

  /**  */
  'repo_admin_change_team_access': boolean;

  /** possible values are `public`, `limited` or `private` */
  'visibility': EnumEditOrgOptionVisibility;

  /**  */
  'website': string;

  constructor(data: undefined | any = {}) {
    this['description'] = data['description'];
    this['full_name'] = data['full_name'];
    this['location'] = data['location'];
    this['repo_admin_change_team_access'] = data['repo_admin_change_team_access'];
    this['visibility'] = data['visibility'];
    this['website'] = data['website'];
  }
}

export class EditPullRequestOption {
  /**  */
  'assignee': string;

  /**  */
  'assignees': string[];

  /**  */
  'body': string;

  /**  */
  'due_date': Date;

  /**  */
  'labels': number[];

  /**  */
  'milestone': number;

  /**  */
  'state': string;

  /**  */
  'title': string;

  /**  */
  'unset_due_date': boolean;

  constructor(data: undefined | any = {}) {
    this['assignee'] = data['assignee'];
    this['assignees'] = data['assignees'];
    this['body'] = data['body'];
    this['due_date'] = data['due_date'];
    this['labels'] = data['labels'];
    this['milestone'] = data['milestone'];
    this['state'] = data['state'];
    this['title'] = data['title'];
    this['unset_due_date'] = data['unset_due_date'];
  }
}

export class EditReactionOption {
  /**  */
  'content': string;

  constructor(data: undefined | any = {}) {
    this['content'] = data['content'];
  }
}

export class EditReleaseOption {
  /**  */
  'body': string;

  /**  */
  'draft': boolean;

  /**  */
  'name': string;

  /**  */
  'prerelease': boolean;

  /**  */
  'tag_name': string;

  /**  */
  'target_commitish': string;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
    this['draft'] = data['draft'];
    this['name'] = data['name'];
    this['prerelease'] = data['prerelease'];
    this['tag_name'] = data['tag_name'];
    this['target_commitish'] = data['target_commitish'];
  }
}

export class EditRepoOption {
  /** either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. `has_pull_requests` must be `true`. */
  'allow_merge_commits': boolean;

  /** either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. `has_pull_requests` must be `true`. */
  'allow_rebase': boolean;

  /** either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. `has_pull_requests` must be `true`. */
  'allow_rebase_explicit': boolean;

  /** either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. `has_pull_requests` must be `true`. */
  'allow_squash_merge': boolean;

  /** set to `true` to archive this repository. */
  'archived': boolean;

  /** sets the default branch for this repository. */
  'default_branch': string;

  /** a short description of the repository. */
  'description': string;

  /**  */
  'external_tracker': ExternalTracker;

  /**  */
  'external_wiki': ExternalWiki;

  /** either `true` to enable issues for this repository or `false` to disable them. */
  'has_issues': boolean;

  /** either `true` to allow pull requests, or `false` to prevent pull request. */
  'has_pull_requests': boolean;

  /** either `true` to enable the wiki for this repository or `false` to disable it. */
  'has_wiki': boolean;

  /** either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. `has_pull_requests` must be `true`. */
  'ignore_whitespace_conflicts': boolean;

  /**  */
  'internal_tracker': InternalTracker;

  /** name of the repository */
  'name': string;

  /** either `true` to make the repository private or `false` to make it public.
Note: you will get a 422 error if the organization restricts changing repository visibility to organization
owners and a non-owner tries to change the value of private. */
  'private': boolean;

  /** either `true` to make this repository a template or `false` to make it a normal repository */
  'template': boolean;

  /** a URL with more information about the repository. */
  'website': string;

  constructor(data: undefined | any = {}) {
    this['allow_merge_commits'] = data['allow_merge_commits'];
    this['allow_rebase'] = data['allow_rebase'];
    this['allow_rebase_explicit'] = data['allow_rebase_explicit'];
    this['allow_squash_merge'] = data['allow_squash_merge'];
    this['archived'] = data['archived'];
    this['default_branch'] = data['default_branch'];
    this['description'] = data['description'];
    this['external_tracker'] = data['external_tracker'];
    this['external_wiki'] = data['external_wiki'];
    this['has_issues'] = data['has_issues'];
    this['has_pull_requests'] = data['has_pull_requests'];
    this['has_wiki'] = data['has_wiki'];
    this['ignore_whitespace_conflicts'] = data['ignore_whitespace_conflicts'];
    this['internal_tracker'] = data['internal_tracker'];
    this['name'] = data['name'];
    this['private'] = data['private'];
    this['template'] = data['template'];
    this['website'] = data['website'];
  }
}

export class EditTeamOption {
  /**  */
  'can_create_org_repo': boolean;

  /**  */
  'description': string;

  /**  */
  'includes_all_repositories': boolean;

  /**  */
  'name': string;

  /**  */
  'permission': EnumEditTeamOptionPermission;

  /**  */
  'units': string[];

  constructor(data: undefined | any = {}) {
    this['can_create_org_repo'] = data['can_create_org_repo'];
    this['description'] = data['description'];
    this['includes_all_repositories'] = data['includes_all_repositories'];
    this['name'] = data['name'];
    this['permission'] = data['permission'];
    this['units'] = data['units'];
  }
}

export class EditUserOption {
  /**  */
  'active': boolean;

  /**  */
  'admin': boolean;

  /**  */
  'allow_create_organization': boolean;

  /**  */
  'allow_git_hook': boolean;

  /**  */
  'allow_import_local': boolean;

  /**  */
  'email': string;

  /**  */
  'full_name': string;

  /**  */
  'location': string;

  /**  */
  'login_name': string;

  /**  */
  'max_repo_creation': number;

  /**  */
  'must_change_password': boolean;

  /**  */
  'password': string;

  /**  */
  'prohibit_login': boolean;

  /**  */
  'source_id': number;

  /**  */
  'website': string;

  constructor(data: undefined | any = {}) {
    this['active'] = data['active'];
    this['admin'] = data['admin'];
    this['allow_create_organization'] = data['allow_create_organization'];
    this['allow_git_hook'] = data['allow_git_hook'];
    this['allow_import_local'] = data['allow_import_local'];
    this['email'] = data['email'];
    this['full_name'] = data['full_name'];
    this['location'] = data['location'];
    this['login_name'] = data['login_name'];
    this['max_repo_creation'] = data['max_repo_creation'];
    this['must_change_password'] = data['must_change_password'];
    this['password'] = data['password'];
    this['prohibit_login'] = data['prohibit_login'];
    this['source_id'] = data['source_id'];
    this['website'] = data['website'];
  }
}

export class Email {
  /**  */
  'email': string;

  /**  */
  'primary': boolean;

  /**  */
  'verified': boolean;

  constructor(data: undefined | any = {}) {
    this['email'] = data['email'];
    this['primary'] = data['primary'];
    this['verified'] = data['verified'];
  }
}

export class ExternalTracker {
  /** External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index. */
  'external_tracker_format': string;

  /** External Issue Tracker Number Format, either `numeric` or `alphanumeric` */
  'external_tracker_style': string;

  /** URL of external issue tracker. */
  'external_tracker_url': string;

  constructor(data: undefined | any = {}) {
    this['external_tracker_format'] = data['external_tracker_format'];
    this['external_tracker_style'] = data['external_tracker_style'];
    this['external_tracker_url'] = data['external_tracker_url'];
  }
}

export class ExternalWiki {
  /** URL of external wiki. */
  'external_wiki_url': string;

  constructor(data: undefined | any = {}) {
    this['external_wiki_url'] = data['external_wiki_url'];
  }
}

export class FileCommitResponse {
  /**  */
  'author': CommitUser;

  /**  */
  'committer': CommitUser;

  /**  */
  'html_url': string;

  /**  */
  'message': string;

  /**  */
  'parents': CommitMeta[];

  /**  */
  'sha': string;

  /**  */
  'tree': CommitMeta;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['author'] = data['author'];
    this['committer'] = data['committer'];
    this['html_url'] = data['html_url'];
    this['message'] = data['message'];
    this['parents'] = data['parents'];
    this['sha'] = data['sha'];
    this['tree'] = data['tree'];
    this['url'] = data['url'];
  }
}

export class FileDeleteResponse {
  /**  */
  'commit': FileCommitResponse;

  /**  */
  'content': object;

  /**  */
  'verification': PayloadCommitVerification;

  constructor(data: undefined | any = {}) {
    this['commit'] = data['commit'];
    this['content'] = data['content'];
    this['verification'] = data['verification'];
  }
}

export class FileLinksResponse {
  /**  */
  'git': string;

  /**  */
  'html': string;

  /**  */
  'self': string;

  constructor(data: undefined | any = {}) {
    this['git'] = data['git'];
    this['html'] = data['html'];
    this['self'] = data['self'];
  }
}

export class FileResponse {
  /**  */
  'commit': FileCommitResponse;

  /**  */
  'content': ContentsResponse;

  /**  */
  'verification': PayloadCommitVerification;

  constructor(data: undefined | any = {}) {
    this['commit'] = data['commit'];
    this['content'] = data['content'];
    this['verification'] = data['verification'];
  }
}

export class GPGKey {
  /**  */
  'can_certify': boolean;

  /**  */
  'can_encrypt_comms': boolean;

  /**  */
  'can_encrypt_storage': boolean;

  /**  */
  'can_sign': boolean;

  /**  */
  'created_at': Date;

  /**  */
  'emails': GPGKeyEmail[];

  /**  */
  'expires_at': Date;

  /**  */
  'id': number;

  /**  */
  'key_id': string;

  /**  */
  'primary_key_id': string;

  /**  */
  'public_key': string;

  /**  */
  'subkeys': GPGKey[];

  constructor(data: undefined | any = {}) {
    this['can_certify'] = data['can_certify'];
    this['can_encrypt_comms'] = data['can_encrypt_comms'];
    this['can_encrypt_storage'] = data['can_encrypt_storage'];
    this['can_sign'] = data['can_sign'];
    this['created_at'] = data['created_at'];
    this['emails'] = data['emails'];
    this['expires_at'] = data['expires_at'];
    this['id'] = data['id'];
    this['key_id'] = data['key_id'];
    this['primary_key_id'] = data['primary_key_id'];
    this['public_key'] = data['public_key'];
    this['subkeys'] = data['subkeys'];
  }
}

export class GPGKeyEmail {
  /**  */
  'email': string;

  /**  */
  'verified': boolean;

  constructor(data: undefined | any = {}) {
    this['email'] = data['email'];
    this['verified'] = data['verified'];
  }
}

export class GitBlobResponse {
  /**  */
  'content': string;

  /**  */
  'encoding': string;

  /**  */
  'sha': string;

  /**  */
  'size': number;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['content'] = data['content'];
    this['encoding'] = data['encoding'];
    this['sha'] = data['sha'];
    this['size'] = data['size'];
    this['url'] = data['url'];
  }
}

export class GitEntry {
  /**  */
  'mode': string;

  /**  */
  'path': string;

  /**  */
  'sha': string;

  /**  */
  'size': number;

  /**  */
  'type': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['mode'] = data['mode'];
    this['path'] = data['path'];
    this['sha'] = data['sha'];
    this['size'] = data['size'];
    this['type'] = data['type'];
    this['url'] = data['url'];
  }
}

export class GitHook {
  /**  */
  'content': string;

  /**  */
  'is_active': boolean;

  /**  */
  'name': string;

  constructor(data: undefined | any = {}) {
    this['content'] = data['content'];
    this['is_active'] = data['is_active'];
    this['name'] = data['name'];
  }
}

export class GitObject {
  /**  */
  'sha': string;

  /**  */
  'type': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['sha'] = data['sha'];
    this['type'] = data['type'];
    this['url'] = data['url'];
  }
}

export class GitTreeResponse {
  /**  */
  'page': number;

  /**  */
  'sha': string;

  /**  */
  'total_count': number;

  /**  */
  'tree': GitEntry[];

  /**  */
  'truncated': boolean;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['page'] = data['page'];
    this['sha'] = data['sha'];
    this['total_count'] = data['total_count'];
    this['tree'] = data['tree'];
    this['truncated'] = data['truncated'];
    this['url'] = data['url'];
  }
}

export class Hook {
  /**  */
  'active': boolean;

  /**  */
  'config': object;

  /**  */
  'created_at': Date;

  /**  */
  'events': string[];

  /**  */
  'id': number;

  /**  */
  'type': string;

  /**  */
  'updated_at': Date;

  constructor(data: undefined | any = {}) {
    this['active'] = data['active'];
    this['config'] = data['config'];
    this['created_at'] = data['created_at'];
    this['events'] = data['events'];
    this['id'] = data['id'];
    this['type'] = data['type'];
    this['updated_at'] = data['updated_at'];
  }
}

export class Identity {
  /**  */
  'email': string;

  /**  */
  'name': string;

  constructor(data: undefined | any = {}) {
    this['email'] = data['email'];
    this['name'] = data['name'];
  }
}

export class InternalTracker {
  /** Let only contributors track time (Built-in issue tracker) */
  'allow_only_contributors_to_track_time': boolean;

  /** Enable dependencies for issues and pull requests (Built-in issue tracker) */
  'enable_issue_dependencies': boolean;

  /** Enable time tracking (Built-in issue tracker) */
  'enable_time_tracker': boolean;

  constructor(data: undefined | any = {}) {
    this['allow_only_contributors_to_track_time'] = data['allow_only_contributors_to_track_time'];
    this['enable_issue_dependencies'] = data['enable_issue_dependencies'];
    this['enable_time_tracker'] = data['enable_time_tracker'];
  }
}

export class Issue {
  /**  */
  'assignee': User;

  /**  */
  'assignees': User[];

  /**  */
  'body': string;

  /**  */
  'closed_at': Date;

  /**  */
  'comments': number;

  /**  */
  'created_at': Date;

  /**  */
  'due_date': Date;

  /**  */
  'html_url': string;

  /**  */
  'id': number;

  /**  */
  'labels': Label[];

  /**  */
  'milestone': Milestone;

  /**  */
  'number': number;

  /**  */
  'original_author': string;

  /**  */
  'original_author_id': number;

  /**  */
  'pull_request': PullRequestMeta;

  /**  */
  'repository': RepositoryMeta;

  /**  */
  'state': StateType;

  /**  */
  'title': string;

  /**  */
  'updated_at': Date;

  /**  */
  'url': string;

  /**  */
  'user': User;

  constructor(data: undefined | any = {}) {
    this['assignee'] = data['assignee'];
    this['assignees'] = data['assignees'];
    this['body'] = data['body'];
    this['closed_at'] = data['closed_at'];
    this['comments'] = data['comments'];
    this['created_at'] = data['created_at'];
    this['due_date'] = data['due_date'];
    this['html_url'] = data['html_url'];
    this['id'] = data['id'];
    this['labels'] = data['labels'];
    this['milestone'] = data['milestone'];
    this['number'] = data['number'];
    this['original_author'] = data['original_author'];
    this['original_author_id'] = data['original_author_id'];
    this['pull_request'] = data['pull_request'];
    this['repository'] = data['repository'];
    this['state'] = data['state'];
    this['title'] = data['title'];
    this['updated_at'] = data['updated_at'];
    this['url'] = data['url'];
    this['user'] = data['user'];
  }
}

export class IssueDeadline {
  /**  */
  'due_date': Date;

  constructor(data: undefined | any = {}) {
    this['due_date'] = data['due_date'];
  }
}

export class IssueLabelsOption {
  /** list of label IDs */
  'labels': number[];

  constructor(data: undefined | any = {}) {
    this['labels'] = data['labels'];
  }
}

export class Label {
  /**  */
  'color': string;

  /**  */
  'description': string;

  /**  */
  'id': number;

  /**  */
  'name': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['color'] = data['color'];
    this['description'] = data['description'];
    this['id'] = data['id'];
    this['name'] = data['name'];
    this['url'] = data['url'];
  }
}

export class MarkdownOption {
  /** Context to render

in: body */
  'Context': string;

  /** Mode to render

in: body */
  'Mode': string;

  /** Text markdown to render

in: body */
  'Text': string;

  /** Is it a wiki page ?

in: body */
  'Wiki': boolean;

  constructor(data: undefined | any = {}) {
    this['Context'] = data['Context'];
    this['Mode'] = data['Mode'];
    this['Text'] = data['Text'];
    this['Wiki'] = data['Wiki'];
  }
}

export class MergePullRequestOption {
  /**  */
  'Do': EnumMergePullRequestOptionDo;

  /**  */
  'MergeMessageField': string;

  /**  */
  'MergeTitleField': string;

  /**  */
  'force_merge': boolean;

  constructor(data: undefined | any = {}) {
    this['Do'] = data['Do'];
    this['MergeMessageField'] = data['MergeMessageField'];
    this['MergeTitleField'] = data['MergeTitleField'];
    this['force_merge'] = data['force_merge'];
  }
}

export class MigrateRepoForm {
  /**  */
  'auth_password': string;

  /**  */
  'auth_username': string;

  /**  */
  'clone_addr': string;

  /**  */
  'description': string;

  /**  */
  'issues': boolean;

  /**  */
  'labels': boolean;

  /**  */
  'milestones': boolean;

  /**  */
  'mirror': boolean;

  /**  */
  'private': boolean;

  /**  */
  'pull_requests': boolean;

  /**  */
  'releases': boolean;

  /**  */
  'repo_name': string;

  /**  */
  'uid': number;

  /**  */
  'wiki': boolean;

  constructor(data: undefined | any = {}) {
    this['auth_password'] = data['auth_password'];
    this['auth_username'] = data['auth_username'];
    this['clone_addr'] = data['clone_addr'];
    this['description'] = data['description'];
    this['issues'] = data['issues'];
    this['labels'] = data['labels'];
    this['milestones'] = data['milestones'];
    this['mirror'] = data['mirror'];
    this['private'] = data['private'];
    this['pull_requests'] = data['pull_requests'];
    this['releases'] = data['releases'];
    this['repo_name'] = data['repo_name'];
    this['uid'] = data['uid'];
    this['wiki'] = data['wiki'];
  }
}

export class Milestone {
  /**  */
  'closed_at': Date;

  /**  */
  'closed_issues': number;

  /**  */
  'description': string;

  /**  */
  'due_on': Date;

  /**  */
  'id': number;

  /**  */
  'open_issues': number;

  /**  */
  'state': StateType;

  /**  */
  'title': string;

  constructor(data: undefined | any = {}) {
    this['closed_at'] = data['closed_at'];
    this['closed_issues'] = data['closed_issues'];
    this['description'] = data['description'];
    this['due_on'] = data['due_on'];
    this['id'] = data['id'];
    this['open_issues'] = data['open_issues'];
    this['state'] = data['state'];
    this['title'] = data['title'];
  }
}

export class NotificationCount {
  /**  */
  'new': number;

  constructor(data: undefined | any = {}) {
    this['new'] = data['new'];
  }
}

export class NotificationSubject {
  /**  */
  'latest_comment_url': string;

  /**  */
  'title': string;

  /**  */
  'type': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['latest_comment_url'] = data['latest_comment_url'];
    this['title'] = data['title'];
    this['type'] = data['type'];
    this['url'] = data['url'];
  }
}

export class NotificationThread {
  /**  */
  'id': number;

  /**  */
  'pinned': boolean;

  /**  */
  'repository': Repository;

  /**  */
  'subject': NotificationSubject;

  /**  */
  'unread': boolean;

  /**  */
  'updated_at': Date;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['pinned'] = data['pinned'];
    this['repository'] = data['repository'];
    this['subject'] = data['subject'];
    this['unread'] = data['unread'];
    this['updated_at'] = data['updated_at'];
    this['url'] = data['url'];
  }
}

export class OAuth2Application {
  /**  */
  'client_id': string;

  /**  */
  'client_secret': string;

  /**  */
  'created': Date;

  /**  */
  'id': number;

  /**  */
  'name': string;

  /**  */
  'redirect_uris': string[];

  constructor(data: undefined | any = {}) {
    this['client_id'] = data['client_id'];
    this['client_secret'] = data['client_secret'];
    this['created'] = data['created'];
    this['id'] = data['id'];
    this['name'] = data['name'];
    this['redirect_uris'] = data['redirect_uris'];
  }
}

export class Organization {
  /**  */
  'avatar_url': string;

  /**  */
  'description': string;

  /**  */
  'full_name': string;

  /**  */
  'id': number;

  /**  */
  'location': string;

  /**  */
  'repo_admin_change_team_access': boolean;

  /**  */
  'username': string;

  /**  */
  'visibility': string;

  /**  */
  'website': string;

  constructor(data: undefined | any = {}) {
    this['avatar_url'] = data['avatar_url'];
    this['description'] = data['description'];
    this['full_name'] = data['full_name'];
    this['id'] = data['id'];
    this['location'] = data['location'];
    this['repo_admin_change_team_access'] = data['repo_admin_change_team_access'];
    this['username'] = data['username'];
    this['visibility'] = data['visibility'];
    this['website'] = data['website'];
  }
}

export class PRBranchInfo {
  /**  */
  'label': string;

  /**  */
  'ref': string;

  /**  */
  'repo': Repository;

  /**  */
  'repo_id': number;

  /**  */
  'sha': string;

  constructor(data: undefined | any = {}) {
    this['label'] = data['label'];
    this['ref'] = data['ref'];
    this['repo'] = data['repo'];
    this['repo_id'] = data['repo_id'];
    this['sha'] = data['sha'];
  }
}

export class PayloadCommit {
  /**  */
  'added': string[];

  /**  */
  'author': PayloadUser;

  /**  */
  'committer': PayloadUser;

  /** sha1 hash of the commit */
  'id': string;

  /**  */
  'message': string;

  /**  */
  'modified': string[];

  /**  */
  'removed': string[];

  /**  */
  'timestamp': Date;

  /**  */
  'url': string;

  /**  */
  'verification': PayloadCommitVerification;

  constructor(data: undefined | any = {}) {
    this['added'] = data['added'];
    this['author'] = data['author'];
    this['committer'] = data['committer'];
    this['id'] = data['id'];
    this['message'] = data['message'];
    this['modified'] = data['modified'];
    this['removed'] = data['removed'];
    this['timestamp'] = data['timestamp'];
    this['url'] = data['url'];
    this['verification'] = data['verification'];
  }
}

export class PayloadCommitVerification {
  /**  */
  'payload': string;

  /**  */
  'reason': string;

  /**  */
  'signature': string;

  /**  */
  'signer': PayloadUser;

  /**  */
  'verified': boolean;

  constructor(data: undefined | any = {}) {
    this['payload'] = data['payload'];
    this['reason'] = data['reason'];
    this['signature'] = data['signature'];
    this['signer'] = data['signer'];
    this['verified'] = data['verified'];
  }
}

export class PayloadUser {
  /**  */
  'email': string;

  /** Full name of the commit author */
  'name': string;

  /**  */
  'username': string;

  constructor(data: undefined | any = {}) {
    this['email'] = data['email'];
    this['name'] = data['name'];
    this['username'] = data['username'];
  }
}

export class Permission {
  /**  */
  'admin': boolean;

  /**  */
  'pull': boolean;

  /**  */
  'push': boolean;

  constructor(data: undefined | any = {}) {
    this['admin'] = data['admin'];
    this['pull'] = data['pull'];
    this['push'] = data['push'];
  }
}

export class PublicKey {
  /**  */
  'created_at': Date;

  /**  */
  'fingerprint': string;

  /**  */
  'id': number;

  /**  */
  'key': string;

  /**  */
  'key_type': string;

  /**  */
  'read_only': boolean;

  /**  */
  'title': string;

  /**  */
  'url': string;

  /**  */
  'user': User;

  constructor(data: undefined | any = {}) {
    this['created_at'] = data['created_at'];
    this['fingerprint'] = data['fingerprint'];
    this['id'] = data['id'];
    this['key'] = data['key'];
    this['key_type'] = data['key_type'];
    this['read_only'] = data['read_only'];
    this['title'] = data['title'];
    this['url'] = data['url'];
    this['user'] = data['user'];
  }
}

export class PullRequest {
  /**  */
  'assignee': User;

  /**  */
  'assignees': User[];

  /**  */
  'base': PRBranchInfo;

  /**  */
  'body': string;

  /**  */
  'closed_at': Date;

  /**  */
  'comments': number;

  /**  */
  'created_at': Date;

  /**  */
  'diff_url': string;

  /**  */
  'due_date': Date;

  /**  */
  'head': PRBranchInfo;

  /**  */
  'html_url': string;

  /**  */
  'id': number;

  /**  */
  'labels': Label[];

  /**  */
  'merge_base': string;

  /**  */
  'merge_commit_sha': string;

  /**  */
  'mergeable': boolean;

  /**  */
  'merged': boolean;

  /**  */
  'merged_at': Date;

  /**  */
  'merged_by': User;

  /**  */
  'milestone': Milestone;

  /**  */
  'number': number;

  /**  */
  'patch_url': string;

  /**  */
  'state': StateType;

  /**  */
  'title': string;

  /**  */
  'updated_at': Date;

  /**  */
  'url': string;

  /**  */
  'user': User;

  constructor(data: undefined | any = {}) {
    this['assignee'] = data['assignee'];
    this['assignees'] = data['assignees'];
    this['base'] = data['base'];
    this['body'] = data['body'];
    this['closed_at'] = data['closed_at'];
    this['comments'] = data['comments'];
    this['created_at'] = data['created_at'];
    this['diff_url'] = data['diff_url'];
    this['due_date'] = data['due_date'];
    this['head'] = data['head'];
    this['html_url'] = data['html_url'];
    this['id'] = data['id'];
    this['labels'] = data['labels'];
    this['merge_base'] = data['merge_base'];
    this['merge_commit_sha'] = data['merge_commit_sha'];
    this['mergeable'] = data['mergeable'];
    this['merged'] = data['merged'];
    this['merged_at'] = data['merged_at'];
    this['merged_by'] = data['merged_by'];
    this['milestone'] = data['milestone'];
    this['number'] = data['number'];
    this['patch_url'] = data['patch_url'];
    this['state'] = data['state'];
    this['title'] = data['title'];
    this['updated_at'] = data['updated_at'];
    this['url'] = data['url'];
    this['user'] = data['user'];
  }
}

export class PullRequestMeta {
  /**  */
  'merged': boolean;

  /**  */
  'merged_at': Date;

  constructor(data: undefined | any = {}) {
    this['merged'] = data['merged'];
    this['merged_at'] = data['merged_at'];
  }
}

export class PullReview {
  /**  */
  'body': string;

  /**  */
  'comments_count': number;

  /**  */
  'commit_id': string;

  /**  */
  'html_url': string;

  /**  */
  'id': number;

  /**  */
  'official': boolean;

  /**  */
  'pull_request_url': string;

  /**  */
  'stale': boolean;

  /**  */
  'state': ReviewStateType;

  /**  */
  'submitted_at': Date;

  /**  */
  'user': User;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
    this['comments_count'] = data['comments_count'];
    this['commit_id'] = data['commit_id'];
    this['html_url'] = data['html_url'];
    this['id'] = data['id'];
    this['official'] = data['official'];
    this['pull_request_url'] = data['pull_request_url'];
    this['stale'] = data['stale'];
    this['state'] = data['state'];
    this['submitted_at'] = data['submitted_at'];
    this['user'] = data['user'];
  }
}

export class PullReviewComment {
  /**  */
  'body': string;

  /**  */
  'commit_id': string;

  /**  */
  'created_at': Date;

  /**  */
  'diff_hunk': string;

  /**  */
  'html_url': string;

  /**  */
  'id': number;

  /**  */
  'original_commit_id': string;

  /**  */
  'original_position': number;

  /**  */
  'path': string;

  /**  */
  'position': number;

  /**  */
  'pull_request_review_id': number;

  /**  */
  'pull_request_url': string;

  /**  */
  'updated_at': Date;

  /**  */
  'user': User;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
    this['commit_id'] = data['commit_id'];
    this['created_at'] = data['created_at'];
    this['diff_hunk'] = data['diff_hunk'];
    this['html_url'] = data['html_url'];
    this['id'] = data['id'];
    this['original_commit_id'] = data['original_commit_id'];
    this['original_position'] = data['original_position'];
    this['path'] = data['path'];
    this['position'] = data['position'];
    this['pull_request_review_id'] = data['pull_request_review_id'];
    this['pull_request_url'] = data['pull_request_url'];
    this['updated_at'] = data['updated_at'];
    this['user'] = data['user'];
  }
}

export class Reaction {
  /**  */
  'content': string;

  /**  */
  'created_at': Date;

  /**  */
  'user': User;

  constructor(data: undefined | any = {}) {
    this['content'] = data['content'];
    this['created_at'] = data['created_at'];
    this['user'] = data['user'];
  }
}

export class Reference {
  /**  */
  'object': GitObject;

  /**  */
  'ref': string;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['object'] = data['object'];
    this['ref'] = data['ref'];
    this['url'] = data['url'];
  }
}

export class Release {
  /**  */
  'assets': Attachment[];

  /**  */
  'author': User;

  /**  */
  'body': string;

  /**  */
  'created_at': Date;

  /**  */
  'draft': boolean;

  /**  */
  'html_url': string;

  /**  */
  'id': number;

  /**  */
  'name': string;

  /**  */
  'prerelease': boolean;

  /**  */
  'published_at': Date;

  /**  */
  'tag_name': string;

  /**  */
  'tarball_url': string;

  /**  */
  'target_commitish': string;

  /**  */
  'url': string;

  /**  */
  'zipball_url': string;

  constructor(data: undefined | any = {}) {
    this['assets'] = data['assets'];
    this['author'] = data['author'];
    this['body'] = data['body'];
    this['created_at'] = data['created_at'];
    this['draft'] = data['draft'];
    this['html_url'] = data['html_url'];
    this['id'] = data['id'];
    this['name'] = data['name'];
    this['prerelease'] = data['prerelease'];
    this['published_at'] = data['published_at'];
    this['tag_name'] = data['tag_name'];
    this['tarball_url'] = data['tarball_url'];
    this['target_commitish'] = data['target_commitish'];
    this['url'] = data['url'];
    this['zipball_url'] = data['zipball_url'];
  }
}

export class RepoCommit {
  /**  */
  'author': CommitUser;

  /**  */
  'committer': CommitUser;

  /**  */
  'message': string;

  /**  */
  'tree': CommitMeta;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['author'] = data['author'];
    this['committer'] = data['committer'];
    this['message'] = data['message'];
    this['tree'] = data['tree'];
    this['url'] = data['url'];
  }
}

export class RepoTopicOptions {
  /** list of topic names */
  'topics': string[];

  constructor(data: undefined | any = {}) {
    this['topics'] = data['topics'];
  }
}

export class Repository {
  /**  */
  'allow_merge_commits': boolean;

  /**  */
  'allow_rebase': boolean;

  /**  */
  'allow_rebase_explicit': boolean;

  /**  */
  'allow_squash_merge': boolean;

  /**  */
  'archived': boolean;

  /**  */
  'avatar_url': string;

  /**  */
  'clone_url': string;

  /**  */
  'created_at': Date;

  /**  */
  'default_branch': string;

  /**  */
  'description': string;

  /**  */
  'empty': boolean;

  /**  */
  'external_tracker': ExternalTracker;

  /**  */
  'external_wiki': ExternalWiki;

  /**  */
  'fork': boolean;

  /**  */
  'forks_count': number;

  /**  */
  'full_name': string;

  /**  */
  'has_issues': boolean;

  /**  */
  'has_pull_requests': boolean;

  /**  */
  'has_wiki': boolean;

  /**  */
  'html_url': string;

  /**  */
  'id': number;

  /**  */
  'ignore_whitespace_conflicts': boolean;

  /**  */
  'internal_tracker': InternalTracker;

  /**  */
  'mirror': boolean;

  /**  */
  'name': string;

  /**  */
  'open_issues_count': number;

  /**  */
  'open_pr_counter': number;

  /**  */
  'original_url': string;

  /**  */
  'owner': User;

  /**  */
  'parent': Repository;

  /**  */
  'permissions': Permission;

  /**  */
  'private': boolean;

  /**  */
  'release_counter': number;

  /**  */
  'size': number;

  /**  */
  'ssh_url': string;

  /**  */
  'stars_count': number;

  /**  */
  'template': boolean;

  /**  */
  'updated_at': Date;

  /**  */
  'watchers_count': number;

  /**  */
  'website': string;

  constructor(data: undefined | any = {}) {
    this['allow_merge_commits'] = data['allow_merge_commits'];
    this['allow_rebase'] = data['allow_rebase'];
    this['allow_rebase_explicit'] = data['allow_rebase_explicit'];
    this['allow_squash_merge'] = data['allow_squash_merge'];
    this['archived'] = data['archived'];
    this['avatar_url'] = data['avatar_url'];
    this['clone_url'] = data['clone_url'];
    this['created_at'] = data['created_at'];
    this['default_branch'] = data['default_branch'];
    this['description'] = data['description'];
    this['empty'] = data['empty'];
    this['external_tracker'] = data['external_tracker'];
    this['external_wiki'] = data['external_wiki'];
    this['fork'] = data['fork'];
    this['forks_count'] = data['forks_count'];
    this['full_name'] = data['full_name'];
    this['has_issues'] = data['has_issues'];
    this['has_pull_requests'] = data['has_pull_requests'];
    this['has_wiki'] = data['has_wiki'];
    this['html_url'] = data['html_url'];
    this['id'] = data['id'];
    this['ignore_whitespace_conflicts'] = data['ignore_whitespace_conflicts'];
    this['internal_tracker'] = data['internal_tracker'];
    this['mirror'] = data['mirror'];
    this['name'] = data['name'];
    this['open_issues_count'] = data['open_issues_count'];
    this['open_pr_counter'] = data['open_pr_counter'];
    this['original_url'] = data['original_url'];
    this['owner'] = data['owner'];
    this['parent'] = data['parent'];
    this['permissions'] = data['permissions'];
    this['private'] = data['private'];
    this['release_counter'] = data['release_counter'];
    this['size'] = data['size'];
    this['ssh_url'] = data['ssh_url'];
    this['stars_count'] = data['stars_count'];
    this['template'] = data['template'];
    this['updated_at'] = data['updated_at'];
    this['watchers_count'] = data['watchers_count'];
    this['website'] = data['website'];
  }
}

export class RepositoryMeta {
  /**  */
  'full_name': string;

  /**  */
  'id': number;

  /**  */
  'name': string;

  /**  */
  'owner': string;

  constructor(data: undefined | any = {}) {
    this['full_name'] = data['full_name'];
    this['id'] = data['id'];
    this['name'] = data['name'];
    this['owner'] = data['owner'];
  }
}

export class ReviewStateType {
  constructor(data: undefined | any = {}) {}
}

export class SearchResults {
  /**  */
  'data': Repository[];

  /**  */
  'ok': boolean;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['ok'] = data['ok'];
  }
}

export class ServerVersion {
  /**  */
  'version': string;

  constructor(data: undefined | any = {}) {
    this['version'] = data['version'];
  }
}

export class StateType {
  constructor(data: undefined | any = {}) {}
}

export class Status {
  /**  */
  'context': string;

  /**  */
  'created_at': Date;

  /**  */
  'creator': User;

  /**  */
  'description': string;

  /**  */
  'id': number;

  /**  */
  'status': StatusState;

  /**  */
  'target_url': string;

  /**  */
  'updated_at': Date;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['context'] = data['context'];
    this['created_at'] = data['created_at'];
    this['creator'] = data['creator'];
    this['description'] = data['description'];
    this['id'] = data['id'];
    this['status'] = data['status'];
    this['target_url'] = data['target_url'];
    this['updated_at'] = data['updated_at'];
    this['url'] = data['url'];
  }
}

export class StatusState {
  constructor(data: undefined | any = {}) {}
}

export class StopWatch {
  /**  */
  'created': Date;

  /**  */
  'issue_index': number;

  constructor(data: undefined | any = {}) {
    this['created'] = data['created'];
    this['issue_index'] = data['issue_index'];
  }
}

export class SubmitPullReviewOptions {
  /**  */
  'body': string;

  /**  */
  'event': ReviewStateType;

  constructor(data: undefined | any = {}) {
    this['body'] = data['body'];
    this['event'] = data['event'];
  }
}

export class Tag {
  /**  */
  'commit': CommitMeta;

  /**  */
  'id': string;

  /**  */
  'name': string;

  /**  */
  'tarball_url': string;

  /**  */
  'zipball_url': string;

  constructor(data: undefined | any = {}) {
    this['commit'] = data['commit'];
    this['id'] = data['id'];
    this['name'] = data['name'];
    this['tarball_url'] = data['tarball_url'];
    this['zipball_url'] = data['zipball_url'];
  }
}

export class Team {
  /**  */
  'can_create_org_repo': boolean;

  /**  */
  'description': string;

  /**  */
  'id': number;

  /**  */
  'includes_all_repositories': boolean;

  /**  */
  'name': string;

  /**  */
  'organization': Organization;

  /**  */
  'permission': EnumTeamPermission;

  /**  */
  'units': string[];

  constructor(data: undefined | any = {}) {
    this['can_create_org_repo'] = data['can_create_org_repo'];
    this['description'] = data['description'];
    this['id'] = data['id'];
    this['includes_all_repositories'] = data['includes_all_repositories'];
    this['name'] = data['name'];
    this['organization'] = data['organization'];
    this['permission'] = data['permission'];
    this['units'] = data['units'];
  }
}

export class TimeStamp {
  constructor(data: undefined | any = {}) {}
}

export class TopicName {
  /**  */
  'topics': string[];

  constructor(data: undefined | any = {}) {
    this['topics'] = data['topics'];
  }
}

export class TopicResponse {
  /**  */
  'created': Date;

  /**  */
  'id': number;

  /**  */
  'repo_count': number;

  /**  */
  'topic_name': string;

  /**  */
  'updated': Date;

  constructor(data: undefined | any = {}) {
    this['created'] = data['created'];
    this['id'] = data['id'];
    this['repo_count'] = data['repo_count'];
    this['topic_name'] = data['topic_name'];
    this['updated'] = data['updated'];
  }
}

export class TrackedTime {
  /**  */
  'created': Date;

  /**  */
  'id': number;

  /**  */
  'issue': Issue;

  /** deprecated (only for backwards compatibility) */
  'issue_id': number;

  /** Time in seconds */
  'time': number;

  /** deprecated (only for backwards compatibility) */
  'user_id': number;

  /**  */
  'user_name': string;

  constructor(data: undefined | any = {}) {
    this['created'] = data['created'];
    this['id'] = data['id'];
    this['issue'] = data['issue'];
    this['issue_id'] = data['issue_id'];
    this['time'] = data['time'];
    this['user_id'] = data['user_id'];
    this['user_name'] = data['user_name'];
  }
}

export class TransferRepoOption {
  /**  */
  'new_owner': string;

  /** ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories. */
  'team_ids': number[];

  constructor(data: undefined | any = {}) {
    this['new_owner'] = data['new_owner'];
    this['team_ids'] = data['team_ids'];
  }
}

export class UpdateFileOptions {
  /**  */
  'author': Identity;

  /** branch (optional) to base this file from. if not given, the default branch is used */
  'branch': string;

  /**  */
  'committer': Identity;

  /** content must be base64 encoded */
  'content': string;

  /**  */
  'dates': CommitDateOptions;

  /** from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL */
  'from_path': string;

  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  'message': string;

  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  'new_branch': string;

  /** sha is the SHA for the file that already exists */
  'sha': string;

  constructor(data: undefined | any = {}) {
    this['author'] = data['author'];
    this['branch'] = data['branch'];
    this['committer'] = data['committer'];
    this['content'] = data['content'];
    this['dates'] = data['dates'];
    this['from_path'] = data['from_path'];
    this['message'] = data['message'];
    this['new_branch'] = data['new_branch'];
    this['sha'] = data['sha'];
  }
}

export class User {
  /** URL to the user's avatar */
  'avatar_url': string;

  /**  */
  'created': Date;

  /**  */
  'email': string;

  /** the user's full name */
  'full_name': string;

  /** the user's id */
  'id': number;

  /** Is the user an administrator */
  'is_admin': boolean;

  /** User locale */
  'language': string;

  /**  */
  'last_login': Date;

  /** the user's username */
  'login': string;

  constructor(data: undefined | any = {}) {
    this['avatar_url'] = data['avatar_url'];
    this['created'] = data['created'];
    this['email'] = data['email'];
    this['full_name'] = data['full_name'];
    this['id'] = data['id'];
    this['is_admin'] = data['is_admin'];
    this['language'] = data['language'];
    this['last_login'] = data['last_login'];
    this['login'] = data['login'];
  }
}

export class UserHeatmapData {
  /**  */
  'contributions': number;

  /**  */
  'timestamp': TimeStamp;

  constructor(data: undefined | any = {}) {
    this['contributions'] = data['contributions'];
    this['timestamp'] = data['timestamp'];
  }
}

export class WatchInfo {
  /**  */
  'created_at': Date;

  /**  */
  'ignored': boolean;

  /**  */
  'reason': object;

  /**  */
  'repository_url': string;

  /**  */
  'subscribed': boolean;

  /**  */
  'url': string;

  constructor(data: undefined | any = {}) {
    this['created_at'] = data['created_at'];
    this['ignored'] = data['ignored'];
    this['reason'] = data['reason'];
    this['repository_url'] = data['repository_url'];
    this['subscribed'] = data['subscribed'];
    this['url'] = data['url'];
  }
}
export enum EnumCreateHookOptionType {
  'dingtalk' = 'dingtalk',
  'discord' = 'discord',
  'gitea' = 'gitea',
  'gogs' = 'gogs',
  'msteams' = 'msteams',
  'slack' = 'slack',
  'telegram' = 'telegram',
  'feishu' = 'feishu'
}
export enum EnumCreateOrgOptionVisibility {
  'public' = 'public',
  'limited' = 'limited',
  'private' = 'private'
}
export enum EnumCreateTeamOptionPermission {
  'read' = 'read',
  'write' = 'write',
  'admin' = 'admin'
}
export enum EnumEditOrgOptionVisibility {
  'public' = 'public',
  'limited' = 'limited',
  'private' = 'private'
}
export enum EnumEditTeamOptionPermission {
  'read' = 'read',
  'write' = 'write',
  'admin' = 'admin'
}
export enum EnumMergePullRequestOptionDo {
  'merge' = 'merge',
  'rebase' = 'rebase',
  'rebase-merge' = 'rebase-merge',
  'squash' = 'squash'
}
export enum EnumTeamPermission {
  'none' = 'none',
  'read' = 'read',
  'write' = 'write',
  'admin' = 'admin',
  'owner' = 'owner'
}
