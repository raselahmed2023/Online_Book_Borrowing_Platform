import { betterAuth } from "better-auth";

// Force baseURL to be string
const forcedBaseURL = String("https://online-book-borrowing-platform-r0ygfmz6s.vercel.app");

export const auth = betterAuth({
  secret: String(process.env.BETTER_AUTH_SECRET || "fallback-secret-key-here-32chars"),
  baseURL: forcedBaseURL,
  emailAndPassword: {
    enabled: true,
  },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
        }
      }
});