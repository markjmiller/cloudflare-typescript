// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RoutesAPI from './routes';

export class Routes extends APIResource {
  /**
   * Creates a new Magic static route. Use `?validate_only=true` as an optional query
   * parameter to run validation only without persisting changes.
   */
  create(params: RouteCreateParams, options?: Core.RequestOptions): Core.APIPromise<RouteCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/routes`, { body, ...options }) as Core.APIPromise<{
        result: RouteCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Magic static route. Use `?validate_only=true` as an optional
   * query parameter to run validation only without persisting changes.
   */
  update(
    routeId: string,
    params: RouteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/routes/${routeId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RouteUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Magic static routes.
   */
  list(params: RouteListParams, options?: Core.RequestOptions): Core.APIPromise<RouteListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/routes`, options) as Core.APIPromise<{
        result: RouteListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable and remove a specific Magic static route.
   */
  delete(
    routeId: string,
    params: RouteDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/magic/routes/${routeId}`, options) as Core.APIPromise<{
        result: RouteDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update multiple Magic static routes. Use `?validate_only=true` as an optional
   * query parameter to run validation only without persisting changes. Only fields
   * for a route that need to be changed need be provided.
   */
  bulkUpdate(
    params: RouteBulkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteBulkUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/routes`, { body, ...options }) as Core.APIPromise<{
        result: RouteBulkUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete multiple Magic static routes.
   */
  empty(params: RouteEmptyParams, options?: Core.RequestOptions): Core.APIPromise<RouteEmptyResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/magic/routes`, options) as Core.APIPromise<{
        result: RouteEmptyResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Magic static route.
   */
  get(
    routeId: string,
    params: RouteGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/routes/${routeId}`, options) as Core.APIPromise<{
        result: RouteGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Used only for ECMP routes.
 */
export interface Scope {
  /**
   * List of colo names for the ECMP scope.
   */
  colo_names?: Array<string>;

  /**
   * List of colo regions for the ECMP scope.
   */
  colo_regions?: Array<string>;
}

/**
 * Used only for ECMP routes.
 */
export interface ScopeParam {
  /**
   * List of colo names for the ECMP scope.
   */
  colo_names?: Array<string>;

  /**
   * List of colo regions for the ECMP scope.
   */
  colo_regions?: Array<string>;
}

export interface RouteCreateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The next-hop IP Address for the static route.
   */
  nexthop: string;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  prefix: string;

  /**
   * Priority of the static route.
   */
  priority: number;

  /**
   * When the route was created.
   */
  created_on?: string;

  /**
   * An optional human provided description of the static route.
   */
  description?: string;

  /**
   * When the route was last modified.
   */
  modified_on?: string;

  /**
   * Used only for ECMP routes.
   */
  scope?: Scope;

  /**
   * Optional weight of the ECMP scope - if provided.
   */
  weight?: number;
}

export interface RouteUpdateResponse {
  modified?: boolean;

  modified_route?: RouteUpdateResponse.ModifiedRoute;
}

export namespace RouteUpdateResponse {
  export interface ModifiedRoute {
    /**
     * Identifier
     */
    id: string;

    /**
     * The next-hop IP Address for the static route.
     */
    nexthop: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix: string;

    /**
     * Priority of the static route.
     */
    priority: number;

    /**
     * When the route was created.
     */
    created_on?: string;

    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * When the route was last modified.
     */
    modified_on?: string;

    /**
     * Used only for ECMP routes.
     */
    scope?: RoutesAPI.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }
}

export interface RouteListResponse {
  routes?: Array<RouteListResponse.Route>;
}

export namespace RouteListResponse {
  export interface Route {
    /**
     * Identifier
     */
    id: string;

    /**
     * The next-hop IP Address for the static route.
     */
    nexthop: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix: string;

    /**
     * Priority of the static route.
     */
    priority: number;

    /**
     * When the route was created.
     */
    created_on?: string;

    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * When the route was last modified.
     */
    modified_on?: string;

    /**
     * Used only for ECMP routes.
     */
    scope?: RoutesAPI.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }
}

export interface RouteDeleteResponse {
  deleted?: boolean;

  deleted_route?: RouteDeleteResponse.DeletedRoute;
}

export namespace RouteDeleteResponse {
  export interface DeletedRoute {
    /**
     * Identifier
     */
    id: string;

    /**
     * The next-hop IP Address for the static route.
     */
    nexthop: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix: string;

    /**
     * Priority of the static route.
     */
    priority: number;

    /**
     * When the route was created.
     */
    created_on?: string;

    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * When the route was last modified.
     */
    modified_on?: string;

    /**
     * Used only for ECMP routes.
     */
    scope?: RoutesAPI.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }
}

export interface RouteBulkUpdateResponse {
  modified?: boolean;

  modified_routes?: Array<RouteBulkUpdateResponse.ModifiedRoute>;
}

export namespace RouteBulkUpdateResponse {
  export interface ModifiedRoute {
    /**
     * Identifier
     */
    id: string;

    /**
     * The next-hop IP Address for the static route.
     */
    nexthop: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix: string;

    /**
     * Priority of the static route.
     */
    priority: number;

    /**
     * When the route was created.
     */
    created_on?: string;

    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * When the route was last modified.
     */
    modified_on?: string;

    /**
     * Used only for ECMP routes.
     */
    scope?: RoutesAPI.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }
}

export interface RouteEmptyResponse {
  deleted?: boolean;

  deleted_routes?: Array<RouteEmptyResponse.DeletedRoute>;
}

export namespace RouteEmptyResponse {
  export interface DeletedRoute {
    /**
     * Identifier
     */
    id: string;

    /**
     * The next-hop IP Address for the static route.
     */
    nexthop: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix: string;

    /**
     * Priority of the static route.
     */
    priority: number;

    /**
     * When the route was created.
     */
    created_on?: string;

    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * When the route was last modified.
     */
    modified_on?: string;

    /**
     * Used only for ECMP routes.
     */
    scope?: RoutesAPI.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }
}

export interface RouteGetResponse {
  route?: RouteGetResponse.Route;
}

export namespace RouteGetResponse {
  export interface Route {
    /**
     * Identifier
     */
    id: string;

    /**
     * The next-hop IP Address for the static route.
     */
    nexthop: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix: string;

    /**
     * Priority of the static route.
     */
    priority: number;

    /**
     * When the route was created.
     */
    created_on?: string;

    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * When the route was last modified.
     */
    modified_on?: string;

    /**
     * Used only for ECMP routes.
     */
    scope?: RoutesAPI.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }
}

export interface RouteCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The next-hop IP Address for the static route.
   */
  nexthop: string;

  /**
   * Body param: IP Prefix in Classless Inter-Domain Routing format.
   */
  prefix: string;

  /**
   * Body param: Priority of the static route.
   */
  priority: number;

  /**
   * Body param: An optional human provided description of the static route.
   */
  description?: string;

  /**
   * Body param: Used only for ECMP routes.
   */
  scope?: ScopeParam;

  /**
   * Body param: Optional weight of the ECMP scope - if provided.
   */
  weight?: number;
}

export interface RouteUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The next-hop IP Address for the static route.
   */
  nexthop: string;

  /**
   * Body param: IP Prefix in Classless Inter-Domain Routing format.
   */
  prefix: string;

  /**
   * Body param: Priority of the static route.
   */
  priority: number;

  /**
   * Body param: An optional human provided description of the static route.
   */
  description?: string;

  /**
   * Body param: Used only for ECMP routes.
   */
  scope?: ScopeParam;

  /**
   * Body param: Optional weight of the ECMP scope - if provided.
   */
  weight?: number;
}

export interface RouteListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface RouteDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface RouteBulkUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  routes: Array<RouteBulkUpdateParams.Route>;
}

export namespace RouteBulkUpdateParams {
  export interface Route {
    /**
     * Identifier
     */
    id: string;

    /**
     * The next-hop IP Address for the static route.
     */
    nexthop: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix: string;

    /**
     * Priority of the static route.
     */
    priority: number;

    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * Used only for ECMP routes.
     */
    scope?: RoutesAPI.ScopeParam;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }
}

export interface RouteEmptyParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface RouteGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Routes {
  export {
    type Scope as Scope,
    type RouteCreateResponse as RouteCreateResponse,
    type RouteUpdateResponse as RouteUpdateResponse,
    type RouteListResponse as RouteListResponse,
    type RouteDeleteResponse as RouteDeleteResponse,
    type RouteBulkUpdateResponse as RouteBulkUpdateResponse,
    type RouteEmptyResponse as RouteEmptyResponse,
    type RouteGetResponse as RouteGetResponse,
    type RouteCreateParams as RouteCreateParams,
    type RouteUpdateParams as RouteUpdateParams,
    type RouteListParams as RouteListParams,
    type RouteDeleteParams as RouteDeleteParams,
    type RouteBulkUpdateParams as RouteBulkUpdateParams,
    type RouteEmptyParams as RouteEmptyParams,
    type RouteGetParams as RouteGetParams,
  };
}
