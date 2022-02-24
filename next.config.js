/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY:"ZjhkMmJhMTktNDdkZC00NjE2LTgyYWQtOTcwYTUyYTFkYWZh"
  },
  images: {
     domains: [ 'cdn.weatherapi.com' ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  assetPrefix: isProd ? '/weather/' : '',
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
