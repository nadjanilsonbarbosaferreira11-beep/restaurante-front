import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "assets.unileversolutions.com",
      },
      {
        protocol: "https",
        hostname: "www.magnific.com",
      },
    ],
  },
};

export default nextConfig;