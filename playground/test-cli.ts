import * as fs from 'node:fs';
import * as path from 'node:path';
import * as readline from 'node:readline';
import { OptiFlowGrpcSDK } from '../src/index';

// Load .env variables manually if not already present in process.env
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        let value = trimmed.slice(eqIdx + 1).trim();
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    }
  }
}

loadEnv();

const baseUrl = process.env.OPTIFLOW_GRPC_URL || 'https://grpc.optiflow.vn';
const orgId = process.env.OPTIFLOW_ORG_ID || '8581da5384b349e68575dfb8';

console.log('--------------------------------------------------');
console.log('🚀 OptiFlow gRPC SDK Playground CLI');
console.log(`🌐 Base URL: ${baseUrl}`);
console.log(`🏢 Org ID:   ${orgId}`);
console.log('--------------------------------------------------\n');

const sdk = new OptiFlowGrpcSDK({
  baseUrl,
  orgId,
  debug: true,
});

// Map services to their available methods
const SERVICES: Record<string, string[]> = {
  seoHelper: [
    'fetchSeoMetadata',
    'fetchSeoData',
    'fetchSitemapXml',
    'generateMetadata',
  ],
  auth: ['login'],
  blog: [
    'getBlogsByQuery',
    'getBlogDetail',
    'getBlogsByBlogGroupSlug',
    'getBlogGroupsByQuery',
    'getBlogGroupsBySlug',
    'getByQuery',
    'getBySlug',
  ],
  comment: ['createComment', 'getCommentsByRef'],
  order: [
    'placeOrder',
    'getMyOrders',
    'getOrderDetail',
    'cancelOrder',
    'getOrderTracking',
    'requestRefund',
    'submitReview',
  ],
  pageView: ['getPageView'],
  product: [
    'getProductsByQuery',
    'getProductDetail',
    'getProductsByProductGroupSlug',
    'getProductGroupsBySlug',
    'getProductGroupsByQuery',
    'getByQuery',
    'getBySlug',
  ],
  seo: ['getGlobalConfig', 'getMetaByUrl', 'getSitemapData'],
  tracking: ['ingestEvent'],
  userSubmit: ['submit'],
};

function getPayload(
  serviceName: string,
  methodName: string
): Record<string, unknown> {
  const payloadPath = path.resolve(
    process.cwd(),
    `playground/payloads/${serviceName}.${methodName}.json`
  );
  if (fs.existsSync(payloadPath)) {
    try {
      const content = fs.readFileSync(payloadPath, 'utf-8');
      return JSON.parse(content);
    } catch (_err) {
      console.warn(
        `⚠️ Failed to parse payload file at ${payloadPath}. Using empty object.`
      );
      return {};
    }
  }
  return {};
}

async function executeMethod(
  serviceName: string,
  methodName: string,
  customPayload?: Record<string, unknown>
) {
  const sdkServices = sdk as unknown as Record<
    string,
    Record<string, (p: unknown) => Promise<unknown>>
  >;
  const serviceObj = sdkServices[serviceName];
  if (!serviceObj) {
    console.error(`❌ Service '${serviceName}' not found on SDK instance.`);
    return;
  }

  if (typeof serviceObj[methodName] !== 'function') {
    console.error(
      `❌ Method '${methodName}' not found on service '${serviceName}'.`
    );
    return;
  }

  const payload = customPayload ?? getPayload(serviceName, methodName);

  console.log(`\n🔹 [CALLING API] ${serviceName}.${methodName}()`);
  console.log(
    `📄 Payload File: playground/payloads/${serviceName}.${methodName}.json`
  );
  console.log('📦 Sent Request Payload:');
  console.dir(payload, { depth: null, colors: true });
  console.log('\n⏳ Requesting server...\n');

  const startTime = Date.now();

  try {
    const result = await serviceObj[methodName](payload);
    const duration = Date.now() - startTime;
    console.log(`\n✅ [RESPONSE SUCCESS] (${duration}ms)`);
    console.log('📥 Response Data:');
    console.dir(result, { depth: null, colors: true });
  } catch (error: unknown) {
    const duration = Date.now() - startTime;
    console.log(`\n❌ [RESPONSE ERROR] (${duration}ms)`);
    const err = error as Record<string, unknown>;
    if (err?.code !== undefined) {
      console.error(`Error Code: ${err.code}`);
      console.error(`Error Message: ${err.message}`);
      if (err.meta) {
        console.error('Error Metadata:', err.meta);
      }
    } else {
      console.error(error);
    }
  }
  console.log('\n--------------------------------------------------\n');
}

async function startInteractiveCLI() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (query: string): Promise<string> =>
    new Promise((resolve) => rl.question(query, resolve));

  const serviceKeys = Object.keys(SERVICES);

  while (true) {
    console.log('📋 Select a Service to test:');
    serviceKeys.forEach((key, idx) => {
      console.log(`  ${idx + 1}. ${key}`);
    });
    console.log('  0. Exit');

    const answer = await ask('\nEnter choice (0-9): ');
    const choiceIdx = parseInt(answer.trim(), 10);

    if (choiceIdx === 0 || Number.isNaN(choiceIdx)) {
      console.log('👋 Exiting Playground.');
      rl.close();
      process.exit(0);
    }

    const selectedService = serviceKeys[choiceIdx - 1];
    if (!selectedService) {
      console.log('⚠️ Invalid selection. Try again.\n');
      continue;
    }

    const methods = SERVICES[selectedService];
    console.log(`\n📋 Select a Method for service '${selectedService}':`);
    methods.forEach((m, idx) => {
      console.log(`  ${idx + 1}. ${m}`);
    });
    console.log('  0. Back');

    const methodAnswer = await ask(`\nEnter choice (0-${methods.length}): `);
    const methodIdx = parseInt(methodAnswer.trim(), 10);

    if (methodIdx === 0 || Number.isNaN(methodIdx)) {
      console.log('\n');
      continue;
    }

    const selectedMethod = methods[methodIdx - 1];
    if (!selectedMethod) {
      console.log('⚠️ Invalid selection.\n');
      continue;
    }

    await executeMethod(selectedService, selectedMethod);
  }
}

// Parse command-line args if provided: npm run playground -- <service> <method>
const args = process.argv.slice(2);
if (args.length >= 2) {
  const [serviceArg, methodArg] = args;
  executeMethod(serviceArg, methodArg).then(() => process.exit(0));
} else {
  startInteractiveCLI();
}
