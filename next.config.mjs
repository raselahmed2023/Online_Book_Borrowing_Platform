const nextConfig = {
  serverExternalPackages: ["mongodb", "better-auth"],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'api.dicebear.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
    ],
  },
};
export default nextConfig;