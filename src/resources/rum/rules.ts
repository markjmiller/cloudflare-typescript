// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Rules extends APIResource {
  /**
   * Creates a new rule in a Web Analytics ruleset.
   */
  create(
    rulesetId: string,
    params: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RUMRule> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/rum/v2/${rulesetId}/rule`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RUMRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a rule in a Web Analytics ruleset.
   */
  update(
    rulesetId: string,
    ruleId: string,
    params: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RUMRule> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/rum/v2/${rulesetId}/rule/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RUMRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all the rules in a Web Analytics ruleset.
   */
  list(
    rulesetId: string,
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/rum/v2/${rulesetId}/rules`, options) as Core.APIPromise<{
        result: RuleListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing rule from a Web Analytics ruleset.
   */
  delete(
    rulesetId: string,
    ruleId: string,
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/rum/v2/${rulesetId}/rule/${ruleId}`,
        options,
      ) as Core.APIPromise<{ result: RuleDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modifies one or more rules in a Web Analytics ruleset with a single request.
   */
  bulkCreate(
    rulesetId: string,
    params: RuleBulkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleBulkCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/rum/v2/${rulesetId}/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleBulkCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RUMRule {
  /**
   * The Web Analytics rule identifier.
   */
  id?: string;

  created?: string;

  /**
   * The hostname the rule will be applied to.
   */
  host?: string;

  /**
   * Whether the rule includes or excludes traffic from being measured.
   */
  inclusive?: boolean;

  /**
   * Whether the rule is paused or not.
   */
  is_paused?: boolean;

  /**
   * The paths the rule will be applied to.
   */
  paths?: Array<string>;

  priority?: number;
}

export interface RuleListResponse {
  /**
   * A list of rules.
   */
  rules?: Array<RUMRule>;

  ruleset?: RuleListResponse.Ruleset;
}

export namespace RuleListResponse {
  export interface Ruleset {
    /**
     * The Web Analytics ruleset identifier.
     */
    id?: string;

    /**
     * Whether the ruleset is enabled.
     */
    enabled?: boolean;

    zone_name?: string;

    /**
     * The zone identifier.
     */
    zone_tag?: string;
  }
}

export interface RuleDeleteResponse {
  /**
   * The Web Analytics rule identifier.
   */
  id?: string;
}

export interface RuleBulkCreateResponse {
  /**
   * A list of rules.
   */
  rules?: Array<RUMRule>;

  ruleset?: RuleBulkCreateResponse.Ruleset;
}

export namespace RuleBulkCreateResponse {
  export interface Ruleset {
    /**
     * The Web Analytics ruleset identifier.
     */
    id?: string;

    /**
     * Whether the ruleset is enabled.
     */
    enabled?: boolean;

    zone_name?: string;

    /**
     * The zone identifier.
     */
    zone_tag?: string;
  }
}

export interface RuleCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param:
   */
  host?: string;

  /**
   * Body param: Whether the rule includes or excludes traffic from being measured.
   */
  inclusive?: boolean;

  /**
   * Body param: Whether the rule is paused or not.
   */
  is_paused?: boolean;

  /**
   * Body param:
   */
  paths?: Array<string>;
}

export interface RuleUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param:
   */
  host?: string;

  /**
   * Body param: Whether the rule includes or excludes traffic from being measured.
   */
  inclusive?: boolean;

  /**
   * Body param: Whether the rule is paused or not.
   */
  is_paused?: boolean;

  /**
   * Body param:
   */
  paths?: Array<string>;
}

export interface RuleListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface RuleDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface RuleBulkCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: A list of rule identifiers to delete.
   */
  delete_rules?: Array<string>;

  /**
   * Body param: A list of rules to create or update.
   */
  rules?: Array<RuleBulkCreateParams.Rule>;
}

export namespace RuleBulkCreateParams {
  export interface Rule {
    /**
     * The Web Analytics rule identifier.
     */
    id?: string;

    host?: string;

    inclusive?: boolean;

    is_paused?: boolean;

    paths?: Array<string>;
  }
}

export declare namespace Rules {
  export {
    type RUMRule as RUMRule,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleBulkCreateResponse as RuleBulkCreateResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleBulkCreateParams as RuleBulkCreateParams,
  };
}
