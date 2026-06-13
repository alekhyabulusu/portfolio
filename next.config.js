/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads.onecompiler.io',
      },
    ],
  },
};

module.exports = nextConfig;
