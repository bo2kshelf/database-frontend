module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    GRAPHQL_API_ENDPOINT: process.env.GRAPHQL_API_ENDPOINT,
  },
  images: {
    domains: ['cover.openbd.jp'],
  },
};
