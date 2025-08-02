import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  serverExternalPackages: ["styled-components"],
};

export default nextConfig;
