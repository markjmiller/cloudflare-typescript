// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource registrations', () => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.registrations.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.devices.registrations.list({
      account_id: 'account_id',
      id: ['string'],
      cursor: 'cursor',
      device: { id: 'id' },
      include: 'include',
      per_page: 0,
      search: 'search',
      seen_after: 'seen_after',
      seen_before: 'seen_before',
      sort_by: 'id',
      sort_order: 'asc',
      status: 'active',
      user: { id: ['string'] },
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.registrations.delete('registration_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.registrations.delete('registration_id', {
      account_id: 'account_id',
    });
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.registrations.bulkDelete({
      account_id: 'account_id',
      id: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDelete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.registrations.bulkDelete({
      account_id: 'account_id',
      id: ['string'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.registrations.get('registration_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.registrations.get('registration_id', {
      account_id: 'account_id',
    });
  });

  test('revoke: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.registrations.revoke({
      account_id: 'account_id',
      id: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('revoke: required and optional params', async () => {
    const response = await client.zeroTrust.devices.registrations.revoke({
      account_id: 'account_id',
      id: ['string'],
    });
  });

  test('unrevoke: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.registrations.unrevoke({
      account_id: 'account_id',
      id: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unrevoke: required and optional params', async () => {
    const response = await client.zeroTrust.devices.registrations.unrevoke({
      account_id: 'account_id',
      id: ['string'],
    });
  });
});
