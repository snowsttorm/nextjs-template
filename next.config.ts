import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const config = {
  port: Number(process.env.PORT) || 3000,
  hostname: process.env.HOSTNAME,
  isDev: process.env.NODE_ENV !== 'production',
  backendApiUrl: process.env.BACKEND_API_URL,
  backendWsUrl: process.env.BACKEND_WS_URL,
};

const cspHeader: string = `
  default-src 'self' ${String(config.backendApiUrl)} ${String(config.backendWsUrl)};
  script-src 'self' ${config.isDev ? "'unsafe-eval' 'unsafe-inline'" : "'self'"};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://avatars.steamstatic.com;
  font-src 'self';
  connect-src 'self' ${String(config.backendApiUrl)} ${String(config.backendWsUrl)};
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
  ${config.isDev ? '' : 'report-uri /api/csp-report;'}
`
  .replace(/\s+/g, ' ')
  .trim();

const nextConfig: NextConfig = {
  reactStrictMode: config.isDev,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), geolocation=(), microphone=(), interest-cohort=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.steamstatic.com',
      },
    ],
    minimumCacheTTL: 60,
  },

  compress: true,

  logging: {
    fetches: {
      fullUrl: config.isDev,
    },
  },

  compiler: {
    removeConsole: config.isDev ? false : { exclude: ['error'] },
  },

  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },

  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
