import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [],
  images: {
    qualities: [75, 90, 95]
  },
  // Configuration pour écouter sur toutes les interfaces
  async rewrites() {
    return [];
  },
};

export default nextConfig;
