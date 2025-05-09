// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class OverrideCodes extends APIResource {
  /**
   * Fetches a one-time use admin override code for a registration. This relies on
   * the **Admin Override** setting being enabled in your device configuration.
   *
   * **Deprecated:** please use GET
   * /accounts/{account_id}/devices/registrations/{registration_id}/override_codes
   * instead.
   */
  list(
    deviceId: string,
    params: OverrideCodeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideCodeListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/${deviceId}/override_codes`,
        options,
      ) as Core.APIPromise<{ result: OverrideCodeListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches one-time use admin override codes for a registration. This relies on the
   * **Admin Override** setting being enabled in your device configuration.
   */
  get(
    registrationId: string,
    params: OverrideCodeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideCodeGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/registrations/${registrationId}/override_codes`,
        options,
      ) as Core.APIPromise<{ result: OverrideCodeGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OverrideCodeListResponse {
  disable_for_time?: OverrideCodeListResponse.DisableForTime;
}

export namespace OverrideCodeListResponse {
  export interface DisableForTime {
    /**
     * Override code that is valid for 1 hour.
     */
    '1'?: string;

    /**
     * Override code that is valid for 12 hour2.
     */
    '12'?: string;

    /**
     * Override code that is valid for 24 hour.2.
     */
    '24'?: string;

    /**
     * Override code that is valid for 3 hours.
     */
    '3'?: string;

    /**
     * Override code that is valid for 6 hours.
     */
    '6'?: string;
  }
}

export interface OverrideCodeGetResponse {
  disable_for_time?: Record<string, string>;
}

export interface OverrideCodeListParams {
  account_id: string;
}

export interface OverrideCodeGetParams {
  account_id: string;
}

export declare namespace OverrideCodes {
  export {
    type OverrideCodeListResponse as OverrideCodeListResponse,
    type OverrideCodeGetResponse as OverrideCodeGetResponse,
    type OverrideCodeListParams as OverrideCodeListParams,
    type OverrideCodeGetParams as OverrideCodeGetParams,
  };
}
