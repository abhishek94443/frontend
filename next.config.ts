import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    qualities: [85], // Allow quality 85 used in sample config
  },
  experimental: {
    // @ts-expect-error - allowedDevOrigins is valid but types might be outdated
    allowedDevOrigins: ["sunshine-dental.lvh.me:3000", "localhost:3000"],
  },
};

export default nextConfig;
