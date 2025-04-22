#!/usr/bin/env -S npm run tsn -T

/*
 * Generate an API token: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/
 * (Not Global API Key!)
 *
 * Find your account id: https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/
 *
 * Set these environment variables:
 * - CLOUDFLARE_API_TOKEN
 * - CLOUDFLARE_ACCOUNT_ID
 * - ASSETS_DIRECTORY
 */

import Cloudflare from 'cloudflare';
import { toFile } from 'cloudflare/index';
import { UploadCreateParams } from 'cloudflare/resources/workers/scripts/assets';
import { readFile } from 'node:fs/promises';
import { FormData } from 'undici';
import fs from 'fs';
import crypto from 'crypto';
import { extname } from 'node:path';
import path from 'path';

const apiToken = process.env['CLOUDFLARE_API_TOKEN'] ?? '';
if (!apiToken) {
  throw new Error('Please set envar CLOUDFLARE_ACCOUNT_ID');
}

const accountID = process.env['CLOUDFLARE_ACCOUNT_ID'] ?? '';
if (!accountID) {
  throw new Error('Please set envar CLOUDFLARE_API_TOKEN');
}

const assetsDirectory = process.env['ASSETS_DIRECTORY'] ?? '';
if (!assetsDirectory) {
  throw new Error('Please set envar ASSETS_DIRECTORY');
}

const client = new Cloudflare({
  apiToken: apiToken,
});

function createManifest(directory: string): Record<string, UploadCreateParams.Manifest> {
  const manifest: Record<string, UploadCreateParams.Manifest> = {};
  (function processDirectory(directory: string, basePath = '') {
    fs.readdirSync(directory, { withFileTypes: true }).forEach((dirent) => {
      const fullPath = path.join(directory, dirent.name);
      const relativePath = path.join(basePath, dirent.name);

      if (dirent.isDirectory()) {
        processDirectory(fullPath, relativePath);
      } else {
        const fileContent = fs.readFileSync(fullPath);
        const extension = extname(relativePath).substring(1);

        // Generate SHA-256 hash and encode in Base64
        const hash = crypto
          .createHash('sha256')
          .update(fileContent.toString('base64') + extension)
          .digest('hex')
          .toString()
          .slice(0, 32);

        // Use forward slashes for paths in manifest
        const manifestPath = `/${relativePath.replace(/\\/g, '/')}`;
        manifest[manifestPath] = {
          hash: hash,
          size: fileContent.length,
        };
      }
    });
  })(directory);
  return manifest;
}

async function main() {
  const scriptName = 'my-script-with-assets';

  // For simplicity in this example, we'll just create the workers script
  // content directly instead of reading it from the Assets Directory (which
  // would be more typical for a full Workers and Frameworks build output).
  const scriptFileName = `${scriptName}.mjs`;
  const scriptContent = `
    export default {
      async fetch(request, env, ctx) {
        return env.ASSETS.fetch(request);
      }
    };
  `;

  const manifest = createManifest(assetsDirectory);

  try {
    const response = await client.workers.scripts.assets.upload.create(scriptName, {
      account_id: accountID,
      manifest: manifest,
    });
    const { buckets } = response;
    if (!response.jwt || !buckets) {
      throw new Error('There was a problem starting the Assets Upload Session');
    }

    var jwt: string = response.jwt;

    const payloads: FormData[] = [];
    for (const bucket of buckets) {
      const payload = new FormData();
      for (const hash of bucket) {
        const relativeAssetPath = Object.entries(manifest).find((record) => record[1].hash == hash)?.[0];
        if (!relativeAssetPath) {
          return;
        }
        const assetFileContents = (await readFile(path.join(assetsDirectory, relativeAssetPath))).toString(
          'base64',
        );
        payload.append(
          hash,
          await toFile(Buffer.from(assetFileContents), hash, {
            // TODO: get file type
            type: 'application/null',
          }),
          hash,
        );
      }
      payloads.push(payload);
    }

    // Uploads could be parallelized. For simplicity, we're just uploading one bucket at a time.
    for (const payload of payloads) {
      // This doesn't work and gets this from the API: 'An unknown error has occurred. Please contact support: https://cfl.re/3WgEyrH'
      const bucketUploadReponse = await client.workers.assets.upload.create(
        {
          account_id: accountID,
          base64: true,
          // There's a problem in the OAS we have to fix (IAC-111); this interface isn't generating correctly and we can't pass files in.
          // When that's fixed, expecting it to work like:
          // [assetFileName]: fooFile,
          //
          // As a workaround, we should be able to pass a FormData payload into the body directly.
        },
        {
          // Passing a FormData payload should work like in the 'fetch' below, but doesn't seem to work
          body: payload,
          // This API uses `Bearer: <assets_jwt>` instead of `Bearer: <api_token>`
          headers: { Authorization: `Bearer ${jwt}` },
        },
      );
      try {
        // We might or might not get a new jwt to use
        // See: https://developers.cloudflare.com/workers/static-assets/direct-upload
        jwt = bucketUploadReponse.jwt ?? jwt;
      } catch (e) {}

      // The following works...
      // const response = await fetch(
      //   `https://api.cloudflare.com/client/v4/accounts/${accountID}/workers/assets/upload?base64=true`,
      //   {
      //     method: 'POST',
      //     headers: {
      //       Authorization: `Bearer ${jwt}`,
      //     },
      //     body: payload,
      //   },
      // );
      // const data = await response.json();
      // try {
      //   //@ts-ignore
      //   jwt = data['result']['jwt'];
      // } catch (e) {}
    }

    // https://developers.cloudflare.com/api/resources/workers/subresources/scripts/methods/update/
    const script = await client.workers.scripts.update(scriptName, {
      account_id: accountID,
      // https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/
      metadata: {
        main_module: scriptFileName,
        assets: {
          config: {
            not_found_handling: 'single-page-application',
          },
          jwt: jwt,
        },
      },
      files: {
        // Add main_module file. Again, you'd probably actually read this file
        // from your Worker build output / assets directory.
        [scriptFileName]: await toFile(Buffer.from(scriptContent), scriptFileName, {
          type: 'application/javascript+module',
        }),
      },
    });
    console.log('Script and Assets uploaded successfully!');
    console.log(JSON.stringify(script, null, 2));
  } catch (error) {
    console.error(error);
  }
}

main();
