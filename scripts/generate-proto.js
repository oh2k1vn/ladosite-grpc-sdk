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

  // 4. Generate/Update src/index.ts to automatically export all generated files and their client types
  const indexFilePath = path.join(rootDir, 'src', 'index.ts');
  let indexContent = `// Export core SDK client and configuration
export { OptiFlowGrpcSDK, GrpcSDKConfig, grpcSDK, WrappedClient } from './client';

// Re-export only the message types (Request/Response interfaces) from Protos.
// We DO NOT export raw ServiceClient classes from *.client files to maximize security
// and ensure consumers always route their requests through the secure SDK class wrapper.
`;

  const protoNames = files.map(file => path.basename(file, '.proto')).sort();

  protoNames.forEach(name => {
    indexContent += `export * from './generated/Protos/${name}';\n`;
  });

  indexContent += `\n// Re-export type-only ServiceClient classes to allow type annotations without exposing raw classes at runtime.\n`;
  protoNames.forEach(name => {
    const clientPath = path.join(outDir, 'Protos', `${name}.client.ts`);
    if (fs.existsSync(clientPath)) {
      indexContent += `export type * from './generated/Protos/${name}.client';\n`;
    }
  });

  fs.writeFileSync(indexFilePath, indexContent, 'utf-8');
  console.log('✅ Generated src/index.ts with exports');
} catch (error) {
  console.error('❌ Failed to generate gRPC client code:', error);
  process.exit(1);
}
