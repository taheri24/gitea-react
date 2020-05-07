import {
  MarkdownOption,
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

export class MiscellaneousService {
  /**
   * Render a markdown document as HTML
   */
  static renderMarkdown(
    params: {
      /**  */
      body?: MarkdownOption;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/markdown';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Render raw markdown as HTML
   */
  static renderMarkdownRaw(
    params: {
      /** Request body to render */
      body: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/markdown/raw';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get default signing-key.gpg
   */
  static getSigningKey(options: IRequestOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = '/signing-key.gpg';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Returns the version of the Gitea application
   */
  static getVersion(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/version';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
