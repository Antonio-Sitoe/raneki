/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
    images: {
    domains: ['ranekapi.origamid.dev'],
  },
}

module.exports = nextConfig
