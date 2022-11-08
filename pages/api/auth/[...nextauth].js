import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.Github_ID,
      clientSecret: process.env.Github_secret,
    }),
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_Secret,
    }),
  ],
});
