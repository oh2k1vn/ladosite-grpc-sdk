import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { OptiFlowGrpcSDK } from '../src';

// Simple .env parser to avoid external dependencies
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    content.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const index = trimmed.indexOf('=');
      if (index > 0) {
        const key = trimmed.substring(0, index).trim();
        let val = trimmed.substring(index + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    });
  }
}

loadEnv();

const baseUrl = process.env.OPTIFLOW_GRPC_URL || 'https://grpc.optiflow.vn';
let orgId = process.env.OPTIFLOW_ORG_ID || '8581da5384b349e68575dfb8';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const payloadsDir = path.resolve(process.cwd(), 'playground', 'payloads');

// Scan folder for JSON files
const methods = fs.readdirSync(payloadsDir)
  .filter(file => file.endsWith('.json'))
  .map(file => file.slice(0, -5)) // remove '.json' extension
  .sort(); // keep it sorted alphabetically

function question(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function handleCall(method: string) {
  if (!orgId) {
    console.log('\n❌ Error: OPTIFLOW_ORG_ID is not set in environment or .env file!');
    return;
  }

  console.log(`\nSelected Method: \x1b[36m${method}\x1b[0m`);
  
  const filePath = path.join(payloadsDir, `${method}.json`);
  let payload: any = {};
  try {
    const rawContent = fs.readFileSync(filePath, 'utf8');
    payload = JSON.parse(rawContent);
  } catch (err: any) {
    console.log(`\n⚠️  Could not read payload file (${method}.json): ${err.message}`);
    console.log('Running with empty payload {}');
  }

  console.log('Current Payload:');
  console.log(JSON.stringify(payload, null, 2));

  console.log(`\n👉 Tip: You can edit 'playground/payloads/${method}.json' directly in your editor.`);
  const answer = await question('Press Enter to run this payload, or type any one-off JSON override: ');

  if (answer.trim()) {
    try {
      payload = JSON.parse(answer);
    } catch (e: any) {
      console.log(`\n❌ Invalid JSON input: ${e.message}. Using default instead.`);
    }
  }

  console.log('\n⏳ Connecting and making gRPC call...');
  const sdk = new OptiFlowGrpcSDK({
    baseUrl,
    orgId,
    debug: false // Turn off console groups to keep output neat
  });

  const parts = method.split('.');
  let target: any = sdk;
  for (const part of parts) {
    if (target && target[part]) {
      target = target[part];
    } else {
      target = null;
      break;
    }
  }

  if (typeof target !== 'function') {
    console.log(`\n❌ Error: Method ${method} is not a valid SDK function.`);
    return;
  }

  const startTime = Date.now();
  try {
    const result = await target.call(sdk, payload);
    const duration = Date.now() - startTime;
    console.log(`\n\x1b[32m✅ SUCCESS (${duration}ms)\x1b[0m`);
    console.log(JSON.stringify(result, (key, value) => typeof value === 'bigint' ? value.toString() : value, 2));
  } catch (error: any) {
    const duration = Date.now() - startTime;
    console.log(`\n\x1b[31m❌ ERROR (${duration}ms)\x1b[0m`);
    console.log(JSON.stringify({
      message: error.message || 'Unknown error occurred.',
      code: error.code || 'UNKNOWN',
      meta: error.meta || null
    }, null, 2));
  }
}

async function menu() {
  console.log('\n=======================================');
  console.log('      OptiFlow gRPC SDK CLI Tester');
  console.log('=======================================');
  console.log(`Endpoint: \x1b[33m${baseUrl}\x1b[0m`);
  console.log(`Org ID:   \x1b[33m${orgId || '(Not set. Please edit .env)'}\x1b[0m`);
  console.log('---------------------------------------');

  methods.forEach((m, idx) => {
    console.log(`${idx + 1}. ${m}`);
  });
  console.log('0. Exit');
  console.log('=======================================');

  const answer = await question(`Select option (0-${methods.length}): `);
  const num = parseInt(answer.trim());

  if (isNaN(num) || num < 0 || num > methods.length) {
    console.log('\n❌ Invalid option. Please select again.');
    await menu();
    return;
  }

  if (num === 0) {
    rl.close();
    console.log('\nGoodbye!');
    process.exit(0);
  }

  const selectedMethod = methods[num - 1];
  await handleCall(selectedMethod);

  await question('\nPress Enter to return to menu...');
  await menu();
}

async function main() {
  if (!orgId) {
    console.log('\n⚠️  WARNING: OPTIFLOW_ORG_ID is not configured in .env file.');
    const inputOrgId = await question('Please enter your Organization ID (x-org): ');

    if (inputOrgId.trim()) {
      orgId = inputOrgId.trim();
      try {
        fs.appendFileSync(path.resolve(process.cwd(), '.env'), `\nOPTIFLOW_ORG_ID="${orgId}"\nOPTIFLOW_GRPC_URL="${baseUrl}"\n`);
        console.log('✅ Configuration saved to .env file for future test runs.');
      } catch (err: any) {
        console.log(`⚠️  Could not write to .env file: ${err.message}`);
      }
    } else {
      console.log('❌ Error: Organization ID is required to run tests. Exiting...');
      rl.close();
      process.exit(1);
    }
  }

  await menu();
}

main();
