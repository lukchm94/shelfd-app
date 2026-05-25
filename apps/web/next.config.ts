import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@shelfd/ui'],
  allowedDevOrigins: ['localhost:3000', '192.168.0.121:3000'],
};

export default nextConfig;
