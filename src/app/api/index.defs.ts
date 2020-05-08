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

export interface APIError {
  /**  */
  message: string;

  /**  */
  url: string;
}

export interface AccessToken {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  sha1: string;

  /**  */
  token_last_eight: string;
}

export interface AddCollaboratorOption {
  /**  */
  permission: string;
}

export interface AddTimeOption {
  /**  */
  created: Date;

  /** time in seconds */
  time: number;

  /** User who spent the time (optional) */
  user_name: string;
}

export interface AnnotatedTag {
  /**  */
  message: string;

  /**  */
  object: AnnotatedTagObject;

  /**  */
  sha: string;

  /**  */
  tag: string;

  /**  */
  tagger: CommitUser;

  /**  */
  url: string;

  /**  */
  verification: PayloadCommitVerification;
}

export interface AnnotatedTagObject {
  /**  */
  sha: string;

  /**  */
  type: string;

  /**  */
  url: string;
}

export interface Attachment {
  /**  */
  browser_download_url: string;

  /**  */
  created_at: Date;

  /**  */
  download_count: number;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  size: number;

  /**  */
  uuid: string;
}

export interface Branch {
  /**  */
  commit: PayloadCommit;

  /**  */
  effective_branch_protection_name: string;

  /**  */
  enable_status_check: boolean;

  /**  */
  name: string;

  /**  */
  protected: boolean;

  /**  */
  required_approvals: number;

  /**  */
  status_check_contexts: string[];

  /**  */
  user_can_merge: boolean;

  /**  */
  user_can_push: boolean;
}

export interface BranchProtection {
  /**  */
  approvals_whitelist_teams: string[];

  /**  */
  approvals_whitelist_username: string[];

  /**  */
  block_on_outdated_branch: boolean;

  /**  */
  block_on_rejected_reviews: boolean;

  /**  */
  branch_name: string;

  /**  */
  created_at: Date;

  /**  */
  dismiss_stale_approvals: boolean;

  /**  */
  enable_approvals_whitelist: boolean;

  /**  */
  enable_merge_whitelist: boolean;

  /**  */
  enable_push: boolean;

  /**  */
  enable_push_whitelist: boolean;

  /**  */
  enable_status_check: boolean;

  /**  */
  merge_whitelist_teams: string[];

  /**  */
  merge_whitelist_usernames: string[];

  /**  */
  protected_file_patterns: string;

  /**  */
  push_whitelist_deploy_keys: boolean;

  /**  */
  push_whitelist_teams: string[];

  /**  */
  push_whitelist_usernames: string[];

  /**  */
  require_signed_commits: boolean;

  /**  */
  required_approvals: number;

  /**  */
  status_check_contexts: string[];

  /**  */
  updated_at: Date;
}

export interface Comment {
  /**  */
  body: string;

  /**  */
  created_at: Date;

  /**  */
  html_url: string;

  /**  */
  id: number;

  /**  */
  issue_url: string;

  /**  */
  original_author: string;

  /**  */
  original_author_id: number;

  /**  */
  pull_request_url: string;

  /**  */
  updated_at: Date;

  /**  */
  user: User;
}

export interface Commit {
  /**  */
  author: User;

  /**  */
  commit: RepoCommit;

  /**  */
  committer: User;

  /**  */
  html_url: string;

  /**  */
  parents: CommitMeta[];

  /**  */
  sha: string;

  /**  */
  url: string;
}

export interface CommitDateOptions {
  /**  */
  author: Date;

  /**  */
  committer: Date;
}

export interface CommitMeta {
  /**  */
  sha: string;

  /**  */
  url: string;
}

export interface CommitUser {
  /**  */
  date: string;

  /**  */
  email: string;

  /**  */
  name: string;
}

export interface ContentsResponse {
  /**  */
  _links: FileLinksResponse;

  /** `content` is populated when `type` is `file`, otherwise null */
  content: string;

  /**  */
  download_url: string;

  /** `encoding` is populated when `type` is `file`, otherwise null */
  encoding: string;

  /**  */
  git_url: string;

  /**  */
  html_url: string;

  /**  */
  name: string;

  /**  */
  path: string;

  /**  */
  sha: string;

  /**  */
  size: number;

  /** `submodule_git_url` is populated when `type` is `submodule`, otherwise null */
  submodule_git_url: string;

  /** `target` is populated when `type` is `symlink`, otherwise null */
  target: string;

  /** `type` will be `file`, `dir`, `symlink`, or `submodule` */
  type: string;

  /**  */
  url: string;
}

export interface CreateBranchProtectionOption {
  /**  */
  approvals_whitelist_teams: string[];

  /**  */
  approvals_whitelist_username: string[];

  /**  */
  block_on_outdated_branch: boolean;

  /**  */
  block_on_rejected_reviews: boolean;

  /**  */
  branch_name: string;

  /**  */
  dismiss_stale_approvals: boolean;

  /**  */
  enable_approvals_whitelist: boolean;

  /**  */
  enable_merge_whitelist: boolean;

  /**  */
  enable_push: boolean;

  /**  */
  enable_push_whitelist: boolean;

  /**  */
  enable_status_check: boolean;

  /**  */
  merge_whitelist_teams: string[];

  /**  */
  merge_whitelist_usernames: string[];

  /**  */
  protected_file_patterns: string;

  /**  */
  push_whitelist_deploy_keys: boolean;

  /**  */
  push_whitelist_teams: string[];

  /**  */
  push_whitelist_usernames: string[];

  /**  */
  require_signed_commits: boolean;

  /**  */
  required_approvals: number;

  /**  */
  status_check_contexts: string[];
}

export interface CreateEmailOption {
  /** email addresses to add */
  emails: string[];
}

export interface CreateFileOptions {
  /**  */
  author: Identity;

  /** branch (optional) to base this file from. if not given, the default branch is used */
  branch: string;

  /**  */
  committer: Identity;

  /** content must be base64 encoded */
  content: string;

  /**  */
  dates: CommitDateOptions;

  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  message: string;

  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  new_branch: string;
}

export interface CreateForkOption {
  /** organization name, if forking into an organization */
  organization: string;
}

export interface CreateGPGKeyOption {
  /** An armored GPG key to add */
  armored_public_key: string;
}

export interface CreateHookOption {
  /**  */
  active: boolean;

  /**  */
  branch_filter: string;

  /**  */
  config: CreateHookOptionConfig;

  /**  */
  events: string[];

  /**  */
  type: EnumCreateHookOptionType;
}

export interface CreateHookOptionConfig {}

export interface CreateIssueCommentOption {
  /**  */
  body: string;
}

export interface CreateIssueOption {
  /** username of assignee */
  assignee: string;

  /**  */
  assignees: string[];

  /**  */
  body: string;

  /**  */
  closed: boolean;

  /**  */
  due_date: Date;

  /** list of label ids */
  labels: number[];

  /** milestone id */
  milestone: number;

  /**  */
  title: string;
}

export interface CreateKeyOption {
  /** An armored SSH key to add */
  key: string;

  /** Describe if the key has only read access or read/write */
  read_only: boolean;

  /** Title of the key to add */
  title: string;
}

export interface CreateLabelOption {
  /**  */
  color: string;

  /**  */
  description: string;

  /**  */
  name: string;
}

export interface CreateMilestoneOption {
  /**  */
  description: string;

  /**  */
  due_on: Date;

  /**  */
  title: string;
}

export interface CreateOAuth2ApplicationOptions {
  /**  */
  name: string;

  /**  */
  redirect_uris: string[];
}

export interface CreateOrgOption {
  /**  */
  description: string;

  /**  */
  full_name: string;

  /**  */
  location: string;

  /**  */
  repo_admin_change_team_access: boolean;

  /**  */
  username: string;

  /** possible values are `public` (default), `limited` or `private` */
  visibility: EnumCreateOrgOptionVisibility;

  /**  */
  website: string;
}

export interface CreatePullRequestOption {
  /**  */
  assignee: string;

  /**  */
  assignees: string[];

  /**  */
  base: string;

  /**  */
  body: string;

  /**  */
  due_date: Date;

  /**  */
  head: string;

  /**  */
  labels: number[];

  /**  */
  milestone: number;

  /**  */
  title: string;
}

export interface CreatePullReviewComment {
  /**  */
  body: string;

  /** if comment to new file line or 0 */
  new_position: number;

  /** if comment to old file line or 0 */
  old_position: number;

  /** the tree path */
  path: string;
}

export interface CreatePullReviewOptions {
  /**  */
  body: string;

  /**  */
  comments: CreatePullReviewComment[];

  /**  */
  commit_id: string;

  /**  */
  event: ReviewStateType;
}

export interface CreateReleaseOption {
  /**  */
  body: string;

  /**  */
  draft: boolean;

  /**  */
  name: string;

  /**  */
  prerelease: boolean;

  /**  */
  tag_name: string;

  /**  */
  target_commitish: string;
}

export interface CreateRepoOption {
  /** Whether the repository should be auto-intialized? */
  auto_init: boolean;

  /** DefaultBranch of the repository (used when initializes and in template) */
  default_branch: string;

  /** Description of the repository to create */
  description: string;

  /** Gitignores to use */
  gitignores: string;

  /** Issue Label set to use */
  issue_labels: string;

  /** License to use */
  license: string;

  /** Name of the repository to create */
  name: string;

  /** Whether the repository is private */
  private: boolean;

  /** Readme of the repository to create */
  readme: string;
}

export interface CreateStatusOption {
  /**  */
  context: string;

  /**  */
  description: string;

  /**  */
  state: StatusState;

  /**  */
  target_url: string;
}

export interface CreateTeamOption {
  /**  */
  can_create_org_repo: boolean;

  /**  */
  description: string;

  /**  */
  includes_all_repositories: boolean;

  /**  */
  name: string;

  /**  */
  permission: EnumCreateTeamOptionPermission;

  /**  */
  units: string[];
}

export interface CreateUserOption {
  /**  */
  email: string;

  /**  */
  full_name: string;

  /**  */
  login_name: string;

  /**  */
  must_change_password: boolean;

  /**  */
  password: string;

  /**  */
  send_notify: boolean;

  /**  */
  source_id: number;

  /**  */
  username: string;
}

export interface DeleteEmailOption {
  /** email addresses to delete */
  emails: string[];
}

export interface DeleteFileOptions {
  /**  */
  author: Identity;

  /** branch (optional) to base this file from. if not given, the default branch is used */
  branch: string;

  /**  */
  committer: Identity;

  /**  */
  dates: CommitDateOptions;

  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  message: string;

  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  new_branch: string;

  /** sha is the SHA for the file that already exists */
  sha: string;
}

export interface DeployKey {
  /**  */
  created_at: Date;

  /**  */
  fingerprint: string;

  /**  */
  id: number;

  /**  */
  key: string;

  /**  */
  key_id: number;

  /**  */
  read_only: boolean;

  /**  */
  repository: Repository;

  /**  */
  title: string;

  /**  */
  url: string;
}

export interface EditAttachmentOptions {
  /**  */
  name: string;
}

export interface EditBranchProtectionOption {
  /**  */
  approvals_whitelist_teams: string[];

  /**  */
  approvals_whitelist_username: string[];

  /**  */
  block_on_outdated_branch: boolean;

  /**  */
  block_on_rejected_reviews: boolean;

  /**  */
  dismiss_stale_approvals: boolean;

  /**  */
  enable_approvals_whitelist: boolean;

  /**  */
  enable_merge_whitelist: boolean;

  /**  */
  enable_push: boolean;

  /**  */
  enable_push_whitelist: boolean;

  /**  */
  enable_status_check: boolean;

  /**  */
  merge_whitelist_teams: string[];

  /**  */
  merge_whitelist_usernames: string[];

  /**  */
  protected_file_patterns: string;

  /**  */
  push_whitelist_deploy_keys: boolean;

  /**  */
  push_whitelist_teams: string[];

  /**  */
  push_whitelist_usernames: string[];

  /**  */
  require_signed_commits: boolean;

  /**  */
  required_approvals: number;

  /**  */
  status_check_contexts: string[];
}

export interface EditDeadlineOption {
  /**  */
  due_date: Date;
}

export interface EditGitHookOption {
  /**  */
  content: string;
}

export interface EditHookOption {
  /**  */
  active: boolean;

  /**  */
  branch_filter: string;

  /**  */
  config: object;

  /**  */
  events: string[];
}

export interface EditIssueCommentOption {
  /**  */
  body: string;
}

export interface EditIssueOption {
  /**  */
  assignee: string;

  /**  */
  assignees: string[];

  /**  */
  body: string;

  /**  */
  due_date: Date;

  /**  */
  milestone: number;

  /**  */
  state: string;

  /**  */
  title: string;

  /**  */
  unset_due_date: boolean;
}

export interface EditLabelOption {
  /**  */
  color: string;

  /**  */
  description: string;

  /**  */
  name: string;
}

export interface EditMilestoneOption {
  /**  */
  description: string;

  /**  */
  due_on: Date;

  /**  */
  state: string;

  /**  */
  title: string;
}

export interface EditOrgOption {
  /**  */
  description: string;

  /**  */
  full_name: string;

  /**  */
  location: string;

  /**  */
  repo_admin_change_team_access: boolean;

  /** possible values are `public`, `limited` or `private` */
  visibility: EnumEditOrgOptionVisibility;

  /**  */
  website: string;
}

export interface EditPullRequestOption {
  /**  */
  assignee: string;

  /**  */
  assignees: string[];

  /**  */
  body: string;

  /**  */
  due_date: Date;

  /**  */
  labels: number[];

  /**  */
  milestone: number;

  /**  */
  state: string;

  /**  */
  title: string;

  /**  */
  unset_due_date: boolean;
}

export interface EditReactionOption {
  /**  */
  content: string;
}

export interface EditReleaseOption {
  /**  */
  body: string;

  /**  */
  draft: boolean;

  /**  */
  name: string;

  /**  */
  prerelease: boolean;

  /**  */
  tag_name: string;

  /**  */
  target_commitish: string;
}

export interface EditRepoOption {
  /** either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. `has_pull_requests` must be `true`. */
  allow_merge_commits: boolean;

  /** either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. `has_pull_requests` must be `true`. */
  allow_rebase: boolean;

  /** either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. `has_pull_requests` must be `true`. */
  allow_rebase_explicit: boolean;

  /** either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. `has_pull_requests` must be `true`. */
  allow_squash_merge: boolean;

  /** set to `true` to archive this repository. */
  archived: boolean;

  /** sets the default branch for this repository. */
  default_branch: string;

  /** a short description of the repository. */
  description: string;

  /**  */
  external_tracker: ExternalTracker;

  /**  */
  external_wiki: ExternalWiki;

  /** either `true` to enable issues for this repository or `false` to disable them. */
  has_issues: boolean;

  /** either `true` to allow pull requests, or `false` to prevent pull request. */
  has_pull_requests: boolean;

  /** either `true` to enable the wiki for this repository or `false` to disable it. */
  has_wiki: boolean;

  /** either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. `has_pull_requests` must be `true`. */
  ignore_whitespace_conflicts: boolean;

  /**  */
  internal_tracker: InternalTracker;

  /** name of the repository */
  name: string;

  /** either `true` to make the repository private or `false` to make it public.
Note: you will get a 422 error if the organization restricts changing repository visibility to organization
owners and a non-owner tries to change the value of private. */
  private: boolean;

  /** either `true` to make this repository a template or `false` to make it a normal repository */
  template: boolean;

  /** a URL with more information about the repository. */
  website: string;
}

export interface EditTeamOption {
  /**  */
  can_create_org_repo: boolean;

  /**  */
  description: string;

  /**  */
  includes_all_repositories: boolean;

  /**  */
  name: string;

  /**  */
  permission: EnumEditTeamOptionPermission;

  /**  */
  units: string[];
}

export interface EditUserOption {
  /**  */
  active: boolean;

  /**  */
  admin: boolean;

  /**  */
  allow_create_organization: boolean;

  /**  */
  allow_git_hook: boolean;

  /**  */
  allow_import_local: boolean;

  /**  */
  email: string;

  /**  */
  full_name: string;

  /**  */
  location: string;

  /**  */
  login_name: string;

  /**  */
  max_repo_creation: number;

  /**  */
  must_change_password: boolean;

  /**  */
  password: string;

  /**  */
  prohibit_login: boolean;

  /**  */
  source_id: number;

  /**  */
  website: string;
}

export interface Email {
  /**  */
  email: string;

  /**  */
  primary: boolean;

  /**  */
  verified: boolean;
}

export interface ExternalTracker {
  /** External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index. */
  external_tracker_format: string;

  /** External Issue Tracker Number Format, either `numeric` or `alphanumeric` */
  external_tracker_style: string;

  /** URL of external issue tracker. */
  external_tracker_url: string;
}

export interface ExternalWiki {
  /** URL of external wiki. */
  external_wiki_url: string;
}

export interface FileCommitResponse {
  /**  */
  author: CommitUser;

  /**  */
  committer: CommitUser;

  /**  */
  html_url: string;

  /**  */
  message: string;

  /**  */
  parents: CommitMeta[];

  /**  */
  sha: string;

  /**  */
  tree: CommitMeta;

  /**  */
  url: string;
}

export interface FileDeleteResponse {
  /**  */
  commit: FileCommitResponse;

  /**  */
  content: object;

  /**  */
  verification: PayloadCommitVerification;
}

export interface FileLinksResponse {
  /**  */
  git: string;

  /**  */
  html: string;

  /**  */
  self: string;
}

export interface FileResponse {
  /**  */
  commit: FileCommitResponse;

  /**  */
  content: ContentsResponse;

  /**  */
  verification: PayloadCommitVerification;
}

export interface GPGKey {
  /**  */
  can_certify: boolean;

  /**  */
  can_encrypt_comms: boolean;

  /**  */
  can_encrypt_storage: boolean;

  /**  */
  can_sign: boolean;

  /**  */
  created_at: Date;

  /**  */
  emails: GPGKeyEmail[];

  /**  */
  expires_at: Date;

  /**  */
  id: number;

  /**  */
  key_id: string;

  /**  */
  primary_key_id: string;

  /**  */
  public_key: string;

  /**  */
  subkeys: GPGKey[];
}

export interface GPGKeyEmail {
  /**  */
  email: string;

  /**  */
  verified: boolean;
}

export interface GitBlobResponse {
  /**  */
  content: string;

  /**  */
  encoding: string;

  /**  */
  sha: string;

  /**  */
  size: number;

  /**  */
  url: string;
}

export interface GitEntry {
  /**  */
  mode: string;

  /**  */
  path: string;

  /**  */
  sha: string;

  /**  */
  size: number;

  /**  */
  type: string;

  /**  */
  url: string;
}

export interface GitHook {
  /**  */
  content: string;

  /**  */
  is_active: boolean;

  /**  */
  name: string;
}

export interface GitObject {
  /**  */
  sha: string;

  /**  */
  type: string;

  /**  */
  url: string;
}

export interface GitTreeResponse {
  /**  */
  page: number;

  /**  */
  sha: string;

  /**  */
  total_count: number;

  /**  */
  tree: GitEntry[];

  /**  */
  truncated: boolean;

  /**  */
  url: string;
}

export interface Hook {
  /**  */
  active: boolean;

  /**  */
  config: object;

  /**  */
  created_at: Date;

  /**  */
  events: string[];

  /**  */
  id: number;

  /**  */
  type: string;

  /**  */
  updated_at: Date;
}

export interface Identity {
  /**  */
  email: string;

  /**  */
  name: string;
}

export interface InternalTracker {
  /** Let only contributors track time (Built-in issue tracker) */
  allow_only_contributors_to_track_time: boolean;

  /** Enable dependencies for issues and pull requests (Built-in issue tracker) */
  enable_issue_dependencies: boolean;

  /** Enable time tracking (Built-in issue tracker) */
  enable_time_tracker: boolean;
}

export interface Issue {
  /**  */
  assignee: User;

  /**  */
  assignees: User[];

  /**  */
  body: string;

  /**  */
  closed_at: Date;

  /**  */
  comments: number;

  /**  */
  created_at: Date;

  /**  */
  due_date: Date;

  /**  */
  html_url: string;

  /**  */
  id: number;

  /**  */
  labels: Label[];

  /**  */
  milestone: Milestone;

  /**  */
  number: number;

  /**  */
  original_author: string;

  /**  */
  original_author_id: number;

  /**  */
  pull_request: PullRequestMeta;

  /**  */
  repository: RepositoryMeta;

  /**  */
  state: StateType;

  /**  */
  title: string;

  /**  */
  updated_at: Date;

  /**  */
  url: string;

  /**  */
  user: User;
}

export interface IssueDeadline {
  /**  */
  due_date: Date;
}

export interface IssueLabelsOption {
  /** list of label IDs */
  labels: number[];
}

export interface Label {
  /**  */
  color: string;

  /**  */
  description: string;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  url: string;
}

export interface MarkdownOption {
  /** Context to render

in: body */
  Context: string;

  /** Mode to render

in: body */
  Mode: string;

  /** Text markdown to render

in: body */
  Text: string;

  /** Is it a wiki page ?

in: body */
  Wiki: boolean;
}

export interface MergePullRequestOption {
  /**  */
  Do: EnumMergePullRequestOptionDo;

  /**  */
  MergeMessageField: string;

  /**  */
  MergeTitleField: string;

  /**  */
  force_merge: boolean;
}

export interface MigrateRepoForm {
  /**  */
  auth_password: string;

  /**  */
  auth_username: string;

  /**  */
  clone_addr: string;

  /**  */
  description: string;

  /**  */
  issues: boolean;

  /**  */
  labels: boolean;

  /**  */
  milestones: boolean;

  /**  */
  mirror: boolean;

  /**  */
  private: boolean;

  /**  */
  pull_requests: boolean;

  /**  */
  releases: boolean;

  /**  */
  repo_name: string;

  /**  */
  uid: number;

  /**  */
  wiki: boolean;
}

export interface Milestone {
  /**  */
  closed_at: Date;

  /**  */
  closed_issues: number;

  /**  */
  description: string;

  /**  */
  due_on: Date;

  /**  */
  id: number;

  /**  */
  open_issues: number;

  /**  */
  state: StateType;

  /**  */
  title: string;
}

export interface NotificationCount {
  /**  */
  new: number;
}

export interface NotificationSubject {
  /**  */
  latest_comment_url: string;

  /**  */
  title: string;

  /**  */
  type: string;

  /**  */
  url: string;
}

export interface NotificationThread {
  /**  */
  id: number;

  /**  */
  pinned: boolean;

  /**  */
  repository: Repository;

  /**  */
  subject: NotificationSubject;

  /**  */
  unread: boolean;

  /**  */
  updated_at: Date;

  /**  */
  url: string;
}

export interface OAuth2Application {
  /**  */
  client_id: string;

  /**  */
  client_secret: string;

  /**  */
  created: Date;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  redirect_uris: string[];
}

export interface Organization {
  /**  */
  avatar_url: string;

  /**  */
  description: string;

  /**  */
  full_name: string;

  /**  */
  id: number;

  /**  */
  location: string;

  /**  */
  repo_admin_change_team_access: boolean;

  /**  */
  username: string;

  /**  */
  visibility: string;

  /**  */
  website: string;
}

export interface PRBranchInfo {
  /**  */
  label: string;

  /**  */
  ref: string;

  /**  */
  repo: Repository;

  /**  */
  repo_id: number;

  /**  */
  sha: string;
}

export interface PayloadCommit {
  /**  */
  added: string[];

  /**  */
  author: PayloadUser;

  /**  */
  committer: PayloadUser;

  /** sha1 hash of the commit */
  id: string;

  /**  */
  message: string;

  /**  */
  modified: string[];

  /**  */
  removed: string[];

  /**  */
  timestamp: Date;

  /**  */
  url: string;

  /**  */
  verification: PayloadCommitVerification;
}

export interface PayloadCommitVerification {
  /**  */
  payload: string;

  /**  */
  reason: string;

  /**  */
  signature: string;

  /**  */
  signer: PayloadUser;

  /**  */
  verified: boolean;
}

export interface PayloadUser {
  /**  */
  email: string;

  /** Full name of the commit author */
  name: string;

  /**  */
  username: string;
}

export interface Permission {
  /**  */
  admin: boolean;

  /**  */
  pull: boolean;

  /**  */
  push: boolean;
}

export interface PublicKey {
  /**  */
  created_at: Date;

  /**  */
  fingerprint: string;

  /**  */
  id: number;

  /**  */
  key: string;

  /**  */
  key_type: string;

  /**  */
  read_only: boolean;

  /**  */
  title: string;

  /**  */
  url: string;

  /**  */
  user: User;
}

export interface PullRequest {
  /**  */
  assignee: User;

  /**  */
  assignees: User[];

  /**  */
  base: PRBranchInfo;

  /**  */
  body: string;

  /**  */
  closed_at: Date;

  /**  */
  comments: number;

  /**  */
  created_at: Date;

  /**  */
  diff_url: string;

  /**  */
  due_date: Date;

  /**  */
  head: PRBranchInfo;

  /**  */
  html_url: string;

  /**  */
  id: number;

  /**  */
  labels: Label[];

  /**  */
  merge_base: string;

  /**  */
  merge_commit_sha: string;

  /**  */
  mergeable: boolean;

  /**  */
  merged: boolean;

  /**  */
  merged_at: Date;

  /**  */
  merged_by: User;

  /**  */
  milestone: Milestone;

  /**  */
  number: number;

  /**  */
  patch_url: string;

  /**  */
  state: StateType;

  /**  */
  title: string;

  /**  */
  updated_at: Date;

  /**  */
  url: string;

  /**  */
  user: User;
}

export interface PullRequestMeta {
  /**  */
  merged: boolean;

  /**  */
  merged_at: Date;
}

export interface PullReview {
  /**  */
  body: string;

  /**  */
  comments_count: number;

  /**  */
  commit_id: string;

  /**  */
  html_url: string;

  /**  */
  id: number;

  /**  */
  official: boolean;

  /**  */
  pull_request_url: string;

  /**  */
  stale: boolean;

  /**  */
  state: ReviewStateType;

  /**  */
  submitted_at: Date;

  /**  */
  user: User;
}

export interface PullReviewComment {
  /**  */
  body: string;

  /**  */
  commit_id: string;

  /**  */
  created_at: Date;

  /**  */
  diff_hunk: string;

  /**  */
  html_url: string;

  /**  */
  id: number;

  /**  */
  original_commit_id: string;

  /**  */
  original_position: number;

  /**  */
  path: string;

  /**  */
  position: number;

  /**  */
  pull_request_review_id: number;

  /**  */
  pull_request_url: string;

  /**  */
  updated_at: Date;

  /**  */
  user: User;
}

export interface Reaction {
  /**  */
  content: string;

  /**  */
  created_at: Date;

  /**  */
  user: User;
}

export interface Reference {
  /**  */
  object: GitObject;

  /**  */
  ref: string;

  /**  */
  url: string;
}

export interface Release {
  /**  */
  assets: Attachment[];

  /**  */
  author: User;

  /**  */
  body: string;

  /**  */
  created_at: Date;

  /**  */
  draft: boolean;

  /**  */
  html_url: string;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  prerelease: boolean;

  /**  */
  published_at: Date;

  /**  */
  tag_name: string;

  /**  */
  tarball_url: string;

  /**  */
  target_commitish: string;

  /**  */
  url: string;

  /**  */
  zipball_url: string;
}

export interface RepoCommit {
  /**  */
  author: CommitUser;

  /**  */
  committer: CommitUser;

  /**  */
  message: string;

  /**  */
  tree: CommitMeta;

  /**  */
  url: string;
}

export interface RepoTopicOptions {
  /** list of topic names */
  topics: string[];
}

export interface Repository {
  /**  */
  allow_merge_commits: boolean;

  /**  */
  allow_rebase: boolean;

  /**  */
  allow_rebase_explicit: boolean;

  /**  */
  allow_squash_merge: boolean;

  /**  */
  archived: boolean;

  /**  */
  avatar_url: string;

  /**  */
  clone_url: string;

  /**  */
  created_at: Date;

  /**  */
  default_branch: string;

  /**  */
  description: string;

  /**  */
  empty: boolean;

  /**  */
  external_tracker: ExternalTracker;

  /**  */
  external_wiki: ExternalWiki;

  /**  */
  fork: boolean;

  /**  */
  forks_count: number;

  /**  */
  full_name: string;

  /**  */
  has_issues: boolean;

  /**  */
  has_pull_requests: boolean;

  /**  */
  has_wiki: boolean;

  /**  */
  html_url: string;

  /**  */
  id: number;

  /**  */
  ignore_whitespace_conflicts: boolean;

  /**  */
  internal_tracker: InternalTracker;

  /**  */
  mirror: boolean;

  /**  */
  name: string;

  /**  */
  open_issues_count: number;

  /**  */
  open_pr_counter: number;

  /**  */
  original_url: string;

  /**  */
  owner: User;

  /**  */
  parent: Repository;

  /**  */
  permissions: Permission;

  /**  */
  private: boolean;

  /**  */
  release_counter: number;

  /**  */
  size: number;

  /**  */
  ssh_url: string;

  /**  */
  stars_count: number;

  /**  */
  template: boolean;

  /**  */
  updated_at: Date;

  /**  */
  watchers_count: number;

  /**  */
  website: string;
}

export interface RepositoryMeta {
  /**  */
  full_name: string;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  owner: string;
}

export interface ReviewStateType {}

export interface SearchResults {
  /**  */
  data: Repository[];

  /**  */
  ok: boolean;
}

export interface ServerVersion {
  /**  */
  version: string;
}

export interface StateType {}

export interface Status {
  /**  */
  context: string;

  /**  */
  created_at: Date;

  /**  */
  creator: User;

  /**  */
  description: string;

  /**  */
  id: number;

  /**  */
  status: StatusState;

  /**  */
  target_url: string;

  /**  */
  updated_at: Date;

  /**  */
  url: string;
}

export interface StatusState {}

export interface StopWatch {
  /**  */
  created: Date;

  /**  */
  issue_index: number;
}

export interface SubmitPullReviewOptions {
  /**  */
  body: string;

  /**  */
  event: ReviewStateType;
}

export interface Tag {
  /**  */
  commit: CommitMeta;

  /**  */
  id: string;

  /**  */
  name: string;

  /**  */
  tarball_url: string;

  /**  */
  zipball_url: string;
}

export interface Team {
  /**  */
  can_create_org_repo: boolean;

  /**  */
  description: string;

  /**  */
  id: number;

  /**  */
  includes_all_repositories: boolean;

  /**  */
  name: string;

  /**  */
  organization: Organization;

  /**  */
  permission: EnumTeamPermission;

  /**  */
  units: string[];
}

export interface TimeStamp {}

export interface TopicName {
  /**  */
  topics: string[];
}

export interface TopicResponse {
  /**  */
  created: Date;

  /**  */
  id: number;

  /**  */
  repo_count: number;

  /**  */
  topic_name: string;

  /**  */
  updated: Date;
}

export interface TrackedTime {
  /**  */
  created: Date;

  /**  */
  id: number;

  /**  */
  issue: Issue;

  /** deprecated (only for backwards compatibility) */
  issue_id: number;

  /** Time in seconds */
  time: number;

  /** deprecated (only for backwards compatibility) */
  user_id: number;

  /**  */
  user_name: string;
}

export interface TransferRepoOption {
  /**  */
  new_owner: string;

  /** ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories. */
  team_ids: number[];
}

export interface UpdateFileOptions {
  /**  */
  author: Identity;

  /** branch (optional) to base this file from. if not given, the default branch is used */
  branch: string;

  /**  */
  committer: Identity;

  /** content must be base64 encoded */
  content: string;

  /**  */
  dates: CommitDateOptions;

  /** from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL */
  from_path: string;

  /** message (optional) for the commit of this file. if not supplied, a default message will be used */
  message: string;

  /** new_branch (optional) will make a new branch from `branch` before creating the file */
  new_branch: string;

  /** sha is the SHA for the file that already exists */
  sha: string;
}

export interface User {
  /** URL to the user's avatar */
  avatar_url: string;

  /**  */
  created: Date;

  /**  */
  email: string;

  /** the user's full name */
  full_name: string;

  /** the user's id */
  id: number;

  /** Is the user an administrator */
  is_admin: boolean;

  /** User locale */
  language: string;

  /**  */
  last_login: Date;

  /** the user's username */
  login: string;
}

export interface UserHeatmapData {
  /**  */
  contributions: number;

  /**  */
  timestamp: TimeStamp;
}

export interface WatchInfo {
  /**  */
  created_at: Date;

  /**  */
  ignored: boolean;

  /**  */
  reason: object;

  /**  */
  repository_url: string;

  /**  */
  subscribed: boolean;

  /**  */
  url: string;
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
