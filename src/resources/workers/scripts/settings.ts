// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ScriptsAPI from './scripts';
import * as TailAPI from './tail';

export class Settings extends APIResource {
  /**
   * Patch script-level settings when using
   * [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions).
   * Including but not limited to Logpush and Tail Consumers.
   */
  edit(
    scriptName: string,
    params: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptsAPI.ScriptSetting> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/workers/scripts/${scriptName}/script-settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ScriptsAPI.ScriptSetting }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get script-level settings when using
   * [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions).
   * Includes Logpush and Tail Consumers.
   */
  get(
    scriptName: string,
    params: SettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptsAPI.ScriptSetting> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/script-settings`,
        options,
      ) as Core.APIPromise<{ result: ScriptsAPI.ScriptSetting }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Body param: Observability settings for the Worker.
   */
  observability?: SettingEditParams.Observability;

  /**
   * Body param: List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScriptParam>;
}

export namespace SettingEditParams {
  /**
   * Observability settings for the Worker.
   */
  export interface Observability {
    /**
     * Whether observability is enabled for the Worker.
     */
    enabled: boolean;

    /**
     * The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%).
     * Default is 1.
     */
    head_sampling_rate?: number | null;
  }
}

export interface SettingGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Settings {
  export { type SettingEditParams as SettingEditParams, type SettingGetParams as SettingGetParams };
}
