import { OptiFlowGrpcSDK, CommonQuery } from '../src/index';

console.log('Testing E-Commerce SDK & Next.js Helpers from tests/verify.ts...');

process.env.NODE_ENV = 'development';

const sdk = new OptiFlowGrpcSDK({
  orgId: 'test-org-123',
  baseUrl: 'https://grpc.optiflow.vn',
  debug: false,
});

async function runTests() {
  console.log('\n--- Starting E-Commerce SDK Verification Tests ---');

  // Test 1: getPageMeta 1-line helper
  try {
    console.log('\n1. Testing sdk.getPageMeta("/")...');
    const { metadata } = await sdk.getPageMeta({ url: '/' });
    console.log('✅ Page Meta result:', metadata);
  } catch (error: any) {
    console.error('❌ Failed getPageMeta:', error.message);
  }

  // Test 2: getProductPageData 1-line helper
  try {
    console.log('\n2. Testing sdk.getProductPageData({ slug: "test-product" })...');
    const { product, metadata, jsonLdScript, error } = await sdk.getProductPageData({
      slug: 'test-product',
      baseUrl: 'https://myshop.com',
    });
    console.log('✅ Product Page Data Result:');
    console.log('   Product Found:', Boolean(product));
    console.log('   Metadata title:', metadata?.title || 'Fallback Title');
    console.log('   JSON-LD Count:', jsonLdScript?.length || 0);
    if (error) console.log('   Handled Error:', error.message);
  } catch (error: any) {
    console.error('❌ Failed getProductPageData:', error.message);
  }

  // Test 3: getCategoryPageData 1-line helper
  try {
    console.log('\n3. Testing sdk.getCategoryPageData({ slug: "ao-thun" })...');
    const { productGroup, products, metadata, jsonLdScript } = await sdk.getCategoryPageData({
      slug: 'ao-thun',
      baseUrl: 'https://myshop.com',
    });
    console.log('✅ Category Page Data Result:');
    console.log('   Category Found:', Boolean(productGroup));
    console.log('   Products Count:', products?.length || 0);
    console.log('   Metadata:', metadata?.title);
    console.log('   JSON-LD Count:', jsonLdScript?.length || 0);
  } catch (error: any) {
    console.error('❌ Failed getCategoryPageData:', error.message);
  }

  // Test 4: getSitemap 1-line helper
  try {
    console.log('\n4. Testing sdk.getSitemap({ url: "https://myshop.com" })...');
    const sitemapItems = await sdk.getSitemap({ url: 'https://myshop.com' });
    console.log('✅ Sitemap items parsed:', sitemapItems.length);
  } catch (error: any) {
    console.error('❌ Failed getSitemap:', error.message);
  }

  console.log('\n--- Verification Completed Successfully! ---');
}

runTests();
