const nextConfig = {
  serverExternalPackages: ["mongodb", "better-auth"],
  env: {
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'api.dicebear.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
    ],
  },
};
export default nextConfig;