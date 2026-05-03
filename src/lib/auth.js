import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const getAuth = () => {
  const {
    MONGODB_URL,
    BETTER_AUTH_SECRET,
    BETTER_AUTH_URL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
  } = process.env;

  if (!MONGODB_URL || !BETTER_AUTH_SECRET || !BETTER_AUTH_URL || !GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    throw new Error("Missing required environment variables");
  }

  const client = new MongoClient(MONGODB_URL);
  const db = client.db();

  return betterAuth({
    secret: BETTER_AUTH_SECRET,
    baseURL: BETTER_AUTH_URL,
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
      enabled: true,
    },
    socialProviders: {
      google: {
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      },
    },
    trustedOrigins: [
      "http://localhost:3000",
      "https://online-book-borrowing-platform-mocha.vercel.app",
    ],
  });
};

export const auth = getAuth();