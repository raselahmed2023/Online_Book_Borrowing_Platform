import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db();

const baseURL = (
  process.env.BETTER_AUTH_URL ||
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
  "http://localhost:3000"
).trim();

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET || "test-secret-32-characters-long!!",
  baseURL: baseURL,
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  trustedOrigins: [
    "http://localhost:3000",
    "https://online-book-borrowing-platform-r0ygfmz6s.vercel.app",
    "https://online-book-borrowing-platform-mocha.vercel.app",
  ],
});