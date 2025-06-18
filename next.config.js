/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export via build
  trailingSlash: true, // important for GitHub Pages
  basePath: '/WebDevAssignment2_Group3', // match repo name
  images: {
    unoptimized: true, // required if you're using images
  },
};

module.exports = nextConfig;
