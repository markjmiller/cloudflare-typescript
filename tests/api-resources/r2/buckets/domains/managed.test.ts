// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource managed', () => {
  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.r2.buckets.domains.managed.update('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.r2.buckets.domains.managed.update('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      jurisdiction: 'default',
    });
  });

  // TODO: investigate broken test
  test.skip('list: only required params', async () => {
    const responsePromise = client.r2.buckets.domains.managed.list('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('list: required and optional params', async () => {
    const response = await client.r2.buckets.domains.managed.list('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      jurisdiction: 'default',
    });
  });
});
