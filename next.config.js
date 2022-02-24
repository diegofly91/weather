/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY:"ZjhkMmJhMTktNDdkZC00NjE2LTgyYWQtOTcwYTUyYTFkYWZh"
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  assetPrefix: isProd ? '/weather/' : '',
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'imgix',
    domains: [ 'cdn.weatherapi.com' ],
    path:  isProd ? 'https://diegofly91.github.io/weather/' : '',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig
