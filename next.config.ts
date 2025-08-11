import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [],
  // Configuration pour écouter sur toutes les interfaces
  async rewrites() {
    return [];
  },
};

export default nextConfig;
