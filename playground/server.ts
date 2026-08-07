import * as fs from 'node:fs';
import * as http from 'node:http';
import * as path from 'node:path';
import {
  fetchSeoData,
  fetchSeoMetadata,
  fetchSitemapXml,
  generateMetadata,
  OptiFlowGrpcSDK,
} from '../src/index';

// Load .env variables manually
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

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(process.cwd(), 'playground/public');

const server = http.createServer((req, res) => {
  const urlParts = (req.url || '/').split('?')[0];

  // Helper to safely respond JSON (handling BigInt & headersSent)
  const respondJson = (statusCode: number, data: unknown) => {
    if (res.headersSent) return;
    try {
      const jsonStr = JSON.stringify(data, (_key, value) =>
        typeof value === 'bigint' ? value.toString() : value
      );
      res.writeHead(statusCode, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      res.end(jsonStr);
    } catch (err) {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: String(err) }));
      }
    }
  };

  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  // GET / -> Serve index.html
  if (
    req.method === 'GET' &&
    (urlParts === '/' || urlParts === '/index.html')
  ) {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(indexPath));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Web Playground UI not found');
    }
    return;
  }

  // GET /api/payloads/:service/:method
  if (req.method === 'GET' && urlParts.startsWith('/api/payloads/')) {
    const parts = urlParts.replace('/api/payloads/', '').split('/');
    const serviceName = parts[0];
    const methodName = parts[1];

    const payloadPath = path.resolve(
      process.cwd(),
      `playground/payloads/${serviceName}.${methodName}.json`
    );

    if (fs.existsSync(payloadPath)) {
      try {
        const content = fs.readFileSync(payloadPath, 'utf-8');
        respondJson(200, JSON.parse(content));
        return;
      } catch (_e) {
        respondJson(200, {});
        return;
      }
    }
    respondJson(200, {});
    return;
  }

  // POST /api/execute
  if (req.method === 'POST' && urlParts === '/api/execute') {
    let bodyStr = '';
    req.on('data', (chunk) => {
      bodyStr += chunk;
    });

    req.on('end', async () => {
      try {
        const body = JSON.parse(bodyStr);
        const { service, method, payload, config } = body;

        const baseUrl =
          config?.baseUrl ||
          process.env.OPTIFLOW_GRPC_URL ||
          'https://grpc.optiflow.vn';
        const orgId =
          config?.orgId ||
          process.env.OPTIFLOW_ORG_ID ||
          '8581da5384b349e68575dfb8';
        const token = config?.token || undefined;

        const sdk = new OptiFlowGrpcSDK({
          baseUrl,
          orgId,
          token,
          debug: false,
        });

        // Special handling for SEO Helper functions
        if (service === 'seoHelper') {
          const startTime = Date.now();
          try {
            let result: unknown;
            if (method === 'fetchSeoMetadata') {
              result = await fetchSeoMetadata({
                sdk,
                url: payload?.url,
                fallbackTitle: payload?.fallbackTitle,
              });
            } else if (method === 'fetchSeoData') {
              result = await fetchSeoData({
                sdk,
                url: payload?.url,
                fallbackTitle: payload?.fallbackTitle,
              });
            } else if (method === 'fetchSitemapXml') {
              result = await fetchSitemapXml({
                sdk,
                url: payload?.url,
              });
            } else if (method === 'generateMetadata') {
              result = generateMetadata(payload || {});
            } else {
              respondJson(400, {
                success: false,
                duration: 0,
                error: {
                  code: 'NOT_FOUND',
                  message: `Method '${method}' not found in seoHelper.`,
                },
              });
              return;
            }
            const duration = Date.now() - startTime;
            respondJson(200, { success: true, duration, result });
          } catch (err: unknown) {
            const duration = Date.now() - startTime;
            respondJson(200, {
              success: false,
              duration,
              error: { code: 'SEO_HELPER_ERROR', message: String(err) },
            });
          }
          return;
        }

        const sdkServices = sdk as unknown as Record<
          string,
          Record<string, (p: unknown) => Promise<unknown>>
        >;

        const serviceObj = sdkServices[service];
        if (!serviceObj || typeof serviceObj[method] !== 'function') {
          respondJson(400, {
            success: false,
            duration: 0,
            error: {
              code: 'NOT_FOUND',
              message: `Service '${service}' or Method '${method}' not found.`,
            },
          });
          return;
        }

        const startTime = Date.now();
        try {
          const sanitizedPayload = { ...(payload || {}) };
          if (!Array.isArray(sanitizedPayload.criteria)) {
            sanitizedPayload.criteria = [];
          }
          const result = await serviceObj[method](sanitizedPayload);
          const duration = Date.now() - startTime;
          respondJson(200, {
            success: true,
            duration,
            result,
          });
        } catch (err: unknown) {
          const duration = Date.now() - startTime;
          const e = err as Record<string, unknown>;
          respondJson(200, {
            success: false,
            duration,
            error: {
              code: e?.code ?? 'UNKNOWN_ERROR',
              message: e?.message ?? String(err),
              meta: e?.meta ?? null,
            },
          });
        }
      } catch (parseErr: unknown) {
        respondJson(400, {
          success: false,
          duration: 0,
          error: {
            code: 'INVALID_REQUEST',
            message: String(parseErr),
          },
        });
      }
    });
    return;
  }

  respondJson(404, { error: 'Endpoint Not Found' });
});

function startServer(portToTry: number) {
  server.listen(portToTry, () => {
    console.log('--------------------------------------------------');
    console.log('⚡ OptiFlow gRPC SDK Web Playground UI is running!');
    console.log(`🌐 Open browser at: http://localhost:${portToTry}`);
    console.log('--------------------------------------------------');
  });
}

server.on('error', (err: { code?: string }) => {
  if (err.code === 'EADDRINUSE') {
    const nextPort = Number(PORT) + 1;
    console.warn(`⚠️ Port ${PORT} is in use. Trying port ${nextPort}...`);
    startServer(nextPort);
  } else {
    console.error('Server error:', err);
  }
});

startServer(Number(PORT));
