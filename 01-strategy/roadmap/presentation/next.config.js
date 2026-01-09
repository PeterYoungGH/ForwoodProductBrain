/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow reading files outside app directory for markdown parsing
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig


