import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@shelfd/ui'],

  allowedDevOrigins: ['localhost:3000', '192.168.0.121:3000'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'robohash.org',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
