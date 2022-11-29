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
      'static-assets.amplication.com.s3.amazonaws.com',
      'static-assets.amplication.com.s3.amazonaws.com.',
      '*.s3.amazonaws.com',
      's3.amazonaws.com',
      'www.facebook.com',
    ],
  },
  experimental: {images: {allowFutureImage: true}, optimizeCss: true},
  async redirects() {
    return [
      {
        source:
          '/blog/amplication--version-1.0-is-now-live-cl89x7w6u726501s6xg825v2x',
        destination: '/blog/amplication-version-10-is-now-live',
        permanent: true,
      },
      {
        source:
          '/blog/how-to-start-your-next-backend-project---boilerplates,-starters-&-frameworks-cl839jv0w1984801s68x3vchwq',
        destination:
          '/blog/how-to-start-your-next-backend-project-boilerplates-starters-and-frameworks',
        permanent: true,
      },
      {
        source:
          '/blog/release-0.15.0----support-for-microservices-architecture-cl7dk1vlf3048301s6v7ai22i8',
        destination:
          '/blog/release-0150-support-for-microservices-architecture',
        permanent: true,
      },
      {
        source:
          '/blog/an-introduction-to-microservices--cl791368g2447001s6505x8xn1',
        destination: '/blog/an-introduction-to-microservices',
        permanent: true,
      },
      {
        source:
          '/blog/introducing-the-community-champions-program-cl6exyi9q670901s61r3hq9x6',
        destination: '/blog/introducing-the-community-champions-program',
        permanent: true,
      },
      {
        source:
          '/blog/the-long-way-for-creating-a-new-backend-server-cl63wz7el1047801s6jf5k5sh0',
        destination: '/blog/the-long-way-for-creating-a-new-backend-server',
        permanent: true,
      },
      {
        source:
          '/blog/amplication-release-0.14.0---shifting-gears-towards-enterprise-ready-microservices-and-modular-code-cl59il0hn1741401s64lxhij2c',
        destination:
          '/blog/amplication-release-0140-shifting-gears-towards-enterprise-ready-microservices-and-modular-code',
        permanent: true,
      },
      {
        source:
          '/blog/why-you-should-choose-nestjs-as-your-backend-framework-cl56jih1t164901s6aowneplb',
        destination:
          '/blog/why-choose-nestjs-as-your-backend-framework-amplication',
        permanent: true,
      },
      {
        source:
          '/blog/why-choose-nestjs-as-your-backend-framework---amplication--cl56jih1t164901s6aowneplb',
        destination:
          '/blog/why-choose-nestjs-as-your-backend-framework-amplication',
        permanent: true,
      },
      {
        source:
          "/blog/eating-our-own-dog-food---building-amplication's-blog-with-amplication-cl4wnpayg963101s6f7svecil",
        destination:
          '/blog/eating-our-own-dog-food-building-amplications-blog-with-amplication',
        permanent: true,
      },
      {
        source:
          '/blog/amplication-release-0.12.7---good-code-and-public-endpoints-cl32wn61z360401s6xbxznyil',
        destination:
          '/blog/amplication-release-0127-good-code-and-public-endpoints',
        permanent: true,
      },
      {
        source:
          '/blog/jwt-authentication---what-is-it-and-how-do-you-use-it-with-amplication-cl13ovhku011801s6636zn2u3',
        destination:
          '/blog/jwt-authentication-what-is-it-and-how-do-you-use-it-with-amplication',
        permanent: true,
      },
      {
        source:
          '/blog/jwt-authentication---what-is-it-and-how-do-you-use-it-with-amplication%3F-cl13ovhku011801s6636zn2u3',
        destination:
          '/blog/jwt-authentication-what-is-it-and-how-do-you-use-it-with-amplication',
        permanent: true,
      },
      {
        source:
          '/blog/build-a-node.js-graphql-api-with-nestjs-and-prisma-ckza2vfrg006801s6me2i2syc',
        destination: '/blog/build-a-nodejs-graphql-api-with-nestjs-and-prisma',
        permanent: true,
      },
      {
        source:
          '/blog/7-key-differences-between-graphql-and-rest-apis-ckza1akvu042701s6jzrjovs5',
        destination: '/blog/7-key-differences-between-graphql-and-rest-apis',
        permanent: true,
      },
      {
        source:
          '/blog/the-open-source-development-platform(.)-introducing-amplication-ckza1a8p0029801s6ly4lbuh5',
        destination:
          '/blog/the-open-source-development-platform-introducing-amplication',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
