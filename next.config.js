/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  basePath: '/portfolio',
  images: {
    path: "/portfolio/_next/image",
  },
}
