export type LogLevel = 'info' | 'warn' | 'error';

export interface GLogConfig {
  /**
   * Endpoint API tiếp nhận log (mặc định: '/api/web/ClientLog/Ingest')
   */
  apiLogUrl?: string;
  /**
   * Secret key đính kèm qua header X-OptiFlow-Secret (mặc định: 'optiflow_secret')
   */
  secretHeader?: string;
  /**
   * Cho phép in ra console (mặc định: true)
   */
  enableConsole?: boolean;
  /**
   * Cho phép gửi log lên remote server (mặc định: true)
   */
  enableRemote?: boolean;
  /**
   * Custom fetch function nếu muốn dùng custom fetcher
   */
  customFetch?: typeof fetch;
}

const defaultConfig: Required<Omit<GLogConfig, 'customFetch'>> & {
  customFetch?: typeof fetch;
} = {
  apiLogUrl: '/api/web/ClientLog/Ingest',
  secretHeader: 'optiflow_secret',
  enableConsole: true,
  enableRemote: true,
};

let currentConfig = { ...defaultConfig };

/**
 * Cấu hình tùy chỉnh cho module Google Cloud Logger
 */
export function configureGLog(options: Partial<GLogConfig>): void {
  currentConfig = {
    ...currentConfig,
    ...options,
  };
}

/**
 * Chuẩn hóa mọi input (object, error, string) thành đúng 1 dòng string duy nhất (xóa \r \n)
 */
export function formatSingleLine(message: unknown): string {
  if (message === null || message === undefined) {
    return String(message);
  }
  if (message instanceof Error) {
    const errorDetails = `${message.name}: ${message.message}`;
    return errorDetails.replace(/[\r\n]+/g, ' ').trim();
  }
  let rawText = '';
  if (typeof message === 'object') {
    try {
      rawText = JSON.stringify(message, (_key, value) =>
        typeof value === 'bigint' ? value.toString() : value
      );
    } catch {
      rawText = String(message);
    }
  } else {
    rawText = String(message);
  }
  return rawText.replace(/[\r\n]+/g, ' ').trim();
}

/**
 * Gửi log 1 dòng về Backend Ingest -> Google Cloud Logging
 */
export function sendLog(
  level: LogLevel,
  message: unknown,
  extra?: { url?: string; payload?: unknown }
): void {
  const singleLineMessage = formatSingleLine(message);

  // 1. In ra Console 1 dòng chuẩn trực quan
  if (currentConfig.enableConsole) {
    const consoleMethod =
      level === 'error'
        ? console.error
        : level === 'warn'
        ? console.warn
        : console.log;
    consoleMethod(`[GoogleLog-${level.toUpperCase()}]`, singleLineMessage);
  }

  // 2. Bắn âm thầm về Backend nếu được bật
  if (currentConfig.enableRemote && currentConfig.apiLogUrl) {
    const currentUrl =
      extra?.url ||
      (typeof window !== 'undefined' && window.location
        ? window.location.pathname
        : '');

    const payloadBody = JSON.stringify({
      level: level.toUpperCase(),
      message: singleLineMessage,
      url: currentUrl,
      timestamp: new Date().toISOString(),
    });

    const fetchFn =
      currentConfig.customFetch ||
      (typeof fetch !== 'undefined' ? fetch : null);

    if (fetchFn) {
      try {
        fetchFn(currentConfig.apiLogUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-OptiFlow-Secret': currentConfig.secretHeader,
          },
          body: payloadBody,
        }).catch(() => {}); // Silent fail, không làm crash app nếu mất mạng
      } catch {
        // Silent fail
      }
    }
  }
}

/**
 * Module Logger tiêu chuẩn Google Cloud cho Frontend & SDK
 */
export const glog = {
  info: (msg: unknown, extra?: { url?: string; payload?: unknown }) =>
    sendLog('info', msg, extra),
  warn: (msg: unknown, extra?: { url?: string; payload?: unknown }) =>
    sendLog('warn', msg, extra),
  error: (msg: unknown, extra?: { url?: string; payload?: unknown }) =>
    sendLog('error', msg, extra),
};

/**
 * Helper xử lý tập trung tất cả status code của gRPC chuẩn
 */
export function handleGrpcError(
  methodName: string,
  err: unknown,
  extraMeta: Record<string, unknown> = {}
): void {
  const errorObj = (err || {}) as {
    code?: string | number;
    statusCode?: string | number;
    message?: string;
    meta?: Record<string, unknown>;
  };

  const code = errorObj.code || errorObj.statusCode || 'UNKNOWN';
  const rawMsg = errorObj.message || 'Unknown gRPC Error';
  const cleanMessage = formatSingleLine(rawMsg);
  const metaKeys = Object.keys(extraMeta);
  const metaStr = metaKeys.length
    ? ` | Meta: ${formatSingleLine(extraMeta)}`
    : '';

  switch (code) {
    case 16:
    case 'UNAUTHENTICATED':
      glog.error(
        `Grpc Auth Failed | Method: ${methodName} | Code: UNAUTHENTICATED | Detail: ${cleanMessage}${metaStr}`
      );
      break;

    case 7:
    case 'PERMISSION_DENIED':
      glog.error(
        `Grpc Permission Denied | Method: ${methodName} | Code: PERMISSION_DENIED | Detail: ${cleanMessage}${metaStr}`
      );
      break;

    case 4:
    case 'DEADLINE_EXCEEDED':
      glog.error(
        `Grpc Timeout | Method: ${methodName} | Code: DEADLINE_EXCEEDED | Detail: Quá thời gian chờ phản hồi${metaStr}`
      );
      break;

    case 5:
    case 'NOT_FOUND':
      glog.warn(
        `Grpc Not Found | Method: ${methodName} | Code: NOT_FOUND | Detail: ${cleanMessage}${metaStr}`
      );
      break;

    case 14:
    case 'UNAVAILABLE':
      glog.error(
        `Grpc Service Unavailable | Method: ${methodName} | Code: UNAVAILABLE | Detail: Server mất kết nối${metaStr}`
      );
      break;

    default:
      glog.error(
        `Grpc Error | Method: ${methodName} | Code: ${code} | Detail: ${cleanMessage}${metaStr}`
      );
      break;
  }
}

/**
 * Tiện ích tự động log mọi cuộc gọi gRPC: đo latency, phát hiện response null/empty, log success & error
 */
export async function withGrpcLogging<T>(
  methodName: string,
  apiCallPromise: Promise<T>,
  payload: Record<string, unknown> = {}
): Promise<T> {
  const startTime = Date.now();
  try {
    const response = await apiCallPromise;
    const latency = Date.now() - startTime;

    const resObj = response as { items?: unknown[]; success?: boolean; [key: string]: unknown } | null | undefined;

    // Tự động phát hiện response null hoặc rỗng
    if (
      !resObj ||
      (Array.isArray(resObj.items) && resObj.items.length === 0) ||
      resObj.success === false
    ) {
      if (resObj && resObj.success === false) {
        const reason = resObj.errorMessage || resObj.message || 'Unknown';
        glog.error(
          `${methodName} Grpc Business Error | Method: ${methodName} | Reason: ${reason} | Latency: ${latency}ms | Payload: ${formatSingleLine(payload)}`
        );
      } else {
        glog.warn(
          `${methodName} Grpc Data: null | Method: ${methodName} | Latency: ${latency}ms | Payload: ${formatSingleLine(payload)}`
        );
      }
    } else {
      const count = Array.isArray(resObj.items)
        ? ` | Total: ${resObj.items.length}`
        : '';
      glog.info(
        `${methodName} Grpc Success | Method: ${methodName} | Latency: ${latency}ms${count}`
      );
    }

    return response;
  } catch (err) {
    handleGrpcError(methodName, err, payload);
    throw err;
  }
}
