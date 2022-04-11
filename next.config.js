/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'dev-to-uploads.s3.amazonaws.com',
      'res.cloudinary.com',
      'placehold.co',
      'media.sproutsocial.com',
      'static-assets.amplication.com',
      'static-assets.amplication.com.s3.amazonaws.com.',
      'static-assets.amplication.com.s3.amazonaws.com',
      '*.s3.amazonaws.com',
      's3.amazonaws.com',
      'www.facebook.com'
    ]
  },
}

module.exports = nextConfig
