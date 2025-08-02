/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverComponentsExternalPackages: ["styled-components"],
  },
};

module.exports = nextConfig;
