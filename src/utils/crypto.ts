export const DEFAULT_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnYmTJKkxl/Yg3gA6SQ91foY5CB50LDXcYrq6Ukx8obTuSuH0RAcg/oSem+gT5G1aakdQqtCkYXSHS9wS8kLK3O4AXFCONED4I8tJ8GKRcxFvytxHTIMmqqa+gw+pbPpmV4Zr+KjLHZsLse0jFIJ+gZ2hR3CrAeJ8Au+3uKySNNZ0F2laJAPso9p/80d4nKhf6N/t3/AU2LirnvWyADQeoaXVRQAv3LVpe6IG+bgijg6Cu4rA1kOUxFSj7nD6n1+QZqS7Fu2WdwFd7DbAr1RQKzpxqwF2p7LTifDUUGLrGF45oslxytwbHyEc36eRx1g9mQIdipkIa1KXdjf51sE2jwIDAQAB
-----END PUBLIC KEY-----`;

let cachedChecksum: string | null = null;

export function generateChecksum(publicKey: string = DEFAULT_PUBLIC_KEY, values: string = 'web:optiflow_svc'): string {
  if (cachedChecksum && publicKey === DEFAULT_PUBLIC_KEY && values === 'web:optiflow_svc') {
    return cachedChecksum;
  }

  try {
    // Dynamic safely requiring Node's crypto to avoid bundling issues in Edge/Browser environments
    let nodeCrypto: typeof import('crypto') | null = null;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      nodeCrypto = require('crypto');
    } catch {
      nodeCrypto = null;
    }

    if (nodeCrypto && typeof nodeCrypto.publicEncrypt === 'function' && typeof nodeCrypto.createHash === 'function') {
      const md5Hash = nodeCrypto.createHash('md5').update(values).digest('hex');
      const padding = 'xxxxx';
      const rawPayload = padding + md5Hash + padding;

      const encryptedBuffer = nodeCrypto.publicEncrypt(
        {
          key: publicKey,
          padding: nodeCrypto.constants.RSA_PKCS1_PADDING,
        },
        Buffer.from(rawPayload)
      );

      const result = encryptedBuffer.toString('base64');
      if (publicKey === DEFAULT_PUBLIC_KEY && values === 'web:optiflow_svc') {
        cachedChecksum = result;
      }
      return result;
    }

    return '';
  } catch (error) {
    if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
      console.warn('[gRPC Client] Checksum generation fallback:', error);
    }
    return '';
  }
}
