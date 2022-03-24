/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'dev-to-uploads.s3.amazonaws.com', 'res.cloudinary.com', 'placehold.co', 'media.sproutsocial.com', 'static-assets.amplication.com']
  }
}

module.exports = nextConfig
