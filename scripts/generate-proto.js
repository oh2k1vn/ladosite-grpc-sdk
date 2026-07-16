const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const protoDir = path.join(rootDir, 'Protos');
const outDir = path.join(rootDir, 'src', 'generated');

console.log('--- Generating gRPC Code from Protobuf files ---');

// 1. Clean & create output directory
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// 2. Find all .proto files
const files = fs.readdirSync(protoDir)
  .filter(file => file.endsWith('.proto'))
  .map(file => path.join('Protos', file));

if (files.length === 0) {
  console.error('No .proto files found in Protos directory!');
  process.exit(1);
}

console.log(`Found ${files.length} proto files:`, files);

// 3. Construct the protoc command
// We use npx to run protoc from local node_modules
const filesArg = files.join(' ');
const command = `npx protoc --ts_out src/generated --proto_path . ${filesArg}`;

console.log(`Running: ${command}`);

try {
  execSync(command, { cwd: rootDir, stdio: 'inherit' });
  console.log('✅ gRPC client code generated successfully under src/generated/');
} catch (error) {
  console.error('❌ Failed to generate gRPC client code:', error);
  process.exit(1);
}
