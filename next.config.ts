const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "https://kelly6226.github.io/portfolio" : "",
};

export default nextConfig;
