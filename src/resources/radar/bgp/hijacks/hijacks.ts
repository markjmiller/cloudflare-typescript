// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as EventsAPI from './events';
import { EventListParams, EventListResponse, EventListResponsesV4PagePagination, Events } from './events';

export class Hijacks extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

Hijacks.Events = Events;
Hijacks.EventListResponsesV4PagePagination = EventListResponsesV4PagePagination;

export declare namespace Hijacks {
  export {
    Events as Events,
    type EventListResponse as EventListResponse,
    EventListResponsesV4PagePagination as EventListResponsesV4PagePagination,
    type EventListParams as EventListParams,
  };
}
