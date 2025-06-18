/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/WebDevAssignment2_Group3' : '',
  assetPrefix: isProd ? '/WebDevAssignment2_Group3/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
