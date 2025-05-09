// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountMapping', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.email.accountMapping.create({
      account_id: 'account_id',
      auth_requirements: { allowed_microsoft_organizations: ['string'], type: 'Org' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.email.accountMapping.create({
      account_id: 'account_id',
      auth_requirements: { allowed_microsoft_organizations: ['string'], type: 'Org' },
    });
  });

  // TODO: investigate broken test
  test.skip('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.email.accountMapping.get({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.email.accountMapping.get({ account_id: 'account_id' });
  });
});
