// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';
import { type BlobLike } from '../../../uploads';

export class ToMarkdown extends APIResource {
  /**
   * Convert Files into Markdown
   */
  create(
    params: ToMarkdownCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToMarkdownCreateResponsesSinglePage, ToMarkdownCreateResponse> {
    const { account_id, body } = params ?? {};
    return this._client.getAPIList(
      `/accounts/${account_id}/ai/tomarkdown`,
      ToMarkdownCreateResponsesSinglePage,
      {
        body: body,
        method: 'post',
        ...options,
        headers: {
          'Content-Type': 'application/octet-stream',
          Accept: 'applications/json',
          ...options?.headers,
        },
        __binaryRequest: true,
      },
    );
  }
}

export class ToMarkdownCreateResponsesSinglePage extends SinglePage<ToMarkdownCreateResponse> {}

export interface ToMarkdownCreateResponse {
  data: string;

  format: string;

  mimeType: string;

  name: string;

  tokens: string;
}

export interface ToMarkdownCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body?: string | ArrayBufferView | ArrayBuffer | BlobLike;
}

ToMarkdown.ToMarkdownCreateResponsesSinglePage = ToMarkdownCreateResponsesSinglePage;

export declare namespace ToMarkdown {
  export {
    type ToMarkdownCreateResponse as ToMarkdownCreateResponse,
    ToMarkdownCreateResponsesSinglePage as ToMarkdownCreateResponsesSinglePage,
    type ToMarkdownCreateParams as ToMarkdownCreateParams,
  };
}
