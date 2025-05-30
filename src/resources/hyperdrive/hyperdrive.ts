// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigsAPI from './configs';
import {
  ConfigCreateParams,
  ConfigDeleteParams,
  ConfigDeleteResponse,
  ConfigEditParams,
  ConfigGetParams,
  ConfigListParams,
  ConfigUpdateParams,
  Configs,
} from './configs';
import { SinglePage } from '../../pagination';

export class HyperdriveResource extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

export class HyperdrivesSinglePage extends SinglePage<Hyperdrive> {}

export type Configuration = Configuration.HyperdriveInternetOrigin | Configuration.HyperdriveOverAccessOrigin;

export namespace Configuration {
  export interface HyperdriveInternetOrigin {
    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The port (default: 5432 for Postgres) of your origin database.
     */
    port: number;

    /**
     * The name of your origin database.
     */
    database?: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme?: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The user of your origin database.
     */
    user?: string;
  }

  export interface HyperdriveOverAccessOrigin {
    /**
     * The Client ID of the Access token to use when connecting to the origin database.
     */
    access_client_id: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The name of your origin database.
     */
    database?: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme?: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The user of your origin database.
     */
    user?: string;
  }
}

export interface Hyperdrive {
  /**
   * Identifier
   */
  id: string;

  name: string;

  origin: Hyperdrive.PublicDatabase | Hyperdrive.AccessProtectedDatabaseBehindCloudflareTunnel;

  caching?: Hyperdrive.HyperdriveHyperdriveCachingCommon | Hyperdrive.HyperdriveHyperdriveCachingEnabled;

  /**
   * When the Hyperdrive configuration was created.
   */
  created_on?: string;

  /**
   * When the Hyperdrive configuration was last modified.
   */
  modified_on?: string;

  mtls?: Hyperdrive.MTLS;
}

export namespace Hyperdrive {
  export interface PublicDatabase {
    /**
     * The name of your origin database.
     */
    database: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The port (default: 5432 for Postgres) of your origin database.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * The Client ID of the Access token to use when connecting to the origin database.
     */
    access_client_id: string;

    /**
     * The name of your origin database.
     */
    database: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The user of your origin database.
     */
    user: string;
  }

  export interface HyperdriveHyperdriveCachingCommon {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;
  }

  export interface HyperdriveHyperdriveCachingEnabled {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;

    /**
     * When present, specifies max duration for which items should persist in the
     * cache. Not returned if set to default. (Default: 60)
     */
    max_age?: number;

    /**
     * When present, indicates the number of seconds cache may serve the response after
     * it becomes stale. Not returned if set to default. (Default: 15)
     */
    stale_while_revalidate?: number;
  }

  export interface MTLS {
    /**
     * CA certificate ID
     */
    ca_certificate_id?: string;

    /**
     * mTLS certificate ID
     */
    mtls_certificate_id?: string;

    /**
     * SSL mode used for CA verification. Must be 'require', 'verify-ca', or
     * 'verify-full'
     */
    sslmode?: string;
  }
}

HyperdriveResource.Configs = Configs;

export declare namespace HyperdriveResource {
  export { type Configuration as Configuration, type Hyperdrive as Hyperdrive };

  export {
    Configs as Configs,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
