/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
    assetPrefix: '/portfolio/',
  },
  basePath: '/portfolio',
}
