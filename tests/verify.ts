import { OptiFlowGrpcSDK, CommonQuery } from '../src/index';

console.log('Testing SDK initialization from tests/verify.ts...');

// Set process.env.NODE_ENV to 'development' so that the SDK logs requests/responses
process.env.NODE_ENV = 'development';

// 1. Initialize SDK with a dynamic token getter function
let mockToken = 'initial-token-xyz';

const sdk = new OptiFlowGrpcSDK({
  orgId: 'test-org-123',
  baseUrl: 'https://grpc.optiflow.vn',
  debug: true,
  token: () => {
    console.log('🔑 [Token Callback Called] Resolving token:', mockToken);
    return mockToken;
  }
});

console.log('SDK initialized successfully.');

const query: CommonQuery = {
  pageNumber: 1,
  pageSize: 1,
  criteria: [],
  operator: 'AND',
};

async function runTests() {
  console.log('\n--- Starting live API connection tests ---');
  
  try {
    console.log('\n1. Fetching Global SEO Config with callback token...');
    // This should trigger the token callback and attach "initial-token-xyz"
    await sdk.seo.getGlobalConfig({});
    console.log('✅ Global SEO Config fetched successfully!');
  } catch (error) {
    console.error('❌ Failed to fetch Global SEO Config:', error);
  }

  try {
    console.log('\n2. Updating token using setToken()...');
    
    const sdk2 = new OptiFlowGrpcSDK({
      orgId: 'test-org-123',
      baseUrl: 'https://grpc.optiflow.vn',
      debug: true,
    });
    
    console.log('Testing setToken on sdk2...');
    sdk2.setToken('my-secret-access-token');
    
    await sdk2.blog.getByQuery(query);
  } catch (error: any) {
    console.log('Expected failure because of invalid JWT format:', error.message);
  }

  try {
    console.log('\n3. Testing clearToken on sdk2...');
    const sdk2 = new OptiFlowGrpcSDK({
      orgId: 'test-org-123',
      baseUrl: 'https://grpc.optiflow.vn',
      debug: true,
    });
    sdk2.setToken('my-secret-access-token');
    sdk2.clearToken();
    
    console.log('Fetching after clearToken (should succeed since no token means public query, or fail with a different error if public query is allowed)...');
    const blogs = await sdk2.blog.getByQuery(query);
    console.log('✅ Blogs fetched successfully after clearToken! Results total:', blogs.meta?.total);
  } catch (error: any) {
    console.error('❌ Failed during clearToken test:', error.message);
  }
  
  console.log('\n--- Verification completed ---');
}

runTests();



