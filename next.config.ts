import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir:"dist",
  // basePath: "/cicd",
  // assetPrefix:"/cicd/",
  images: {
    unoptimized:true
  }
};

export default nextConfig;