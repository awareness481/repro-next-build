/**
 * Next Config
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
    localeDetection: true
  }
};

module.exports = nextConfig;
