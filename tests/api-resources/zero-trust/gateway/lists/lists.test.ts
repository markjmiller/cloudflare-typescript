// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lists', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.lists.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Admin Serial Numbers',
      type: 'SERIAL',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.lists.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Admin Serial Numbers',
      type: 'SERIAL',
      description: 'The serial numbers for administrators',
      items: [{ description: 'Austin office IP', value: '8GE8721REF' }],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.lists.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Admin Serial Numbers',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.lists.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'Admin Serial Numbers',
      description: 'The serial numbers for administrators',
      items: [{ description: 'Austin office IP', value: '8GE8721REF' }],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.lists.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.lists.list({
      account_id: '699d98642c564d2e855e9661899b7252',
      type: 'SERIAL',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.lists.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.gateway.lists.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.lists.edit('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.zeroTrust.gateway.lists.edit('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
      append: [{ description: 'Austin office IP', value: '8GE8721REF' }],
      remove: ['8GE8721REF'],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.gateway.lists.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.gateway.lists.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
