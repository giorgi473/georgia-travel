import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn-icons-png.flaticon.com",
        protocol: "https",
      },
      {
        hostname: "storage.georgia.travel",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
