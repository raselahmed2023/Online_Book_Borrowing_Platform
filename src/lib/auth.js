import { betterAuth } from "better-auth";

export const auth = betterAuth({
  secret: "test-secret-32-characters-long!!",
  baseURL: "https://online-book-borrowing-platform-r0ygfmz6s.vercel.app",
  database: {
    provider: "mongodb",
    url: process.env.MONGODB_URL || "mongodb://localhost:27017/test",
  },
  emailAndPassword: {
    enabled: true,
  },
});