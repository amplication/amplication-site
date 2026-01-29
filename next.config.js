const removeImports = require('next-remove-imports')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'res.cloudinary.com',
      'static-assets.amplication.com',
      'static-assets.amplication.com.s3.amazonaws.com',
      's3.amazonaws.com',
      'raw.githubusercontent.com',
      'amplication.com',
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Don't rewrite static files, images, or API routes
      ],
      afterFiles: [
        // After checking files, rewrite everything else to index
        {
          source: '/:path*',
          destination: '/',
        },
      ],
    };
  },
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = removeImports(nextConfig);
