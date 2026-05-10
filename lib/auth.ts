import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "fallback_secret_for_development_only_1234567890",
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "repo read:user user:email",
        },
      },
    }),
    Credentials({
      id: "pat",
      name: "Developer PAT",
      credentials: {
        token: { label: "GitHub PAT", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.token) return null;
        try {
          const res = await fetch("https://api.github.com/user", {
            headers: {
              Authorization: `Bearer ${credentials.token as string}`,
              Accept: "application/vnd.github.v3+json",
            },
          });
          if (res.ok) {
            const user = await res.json();
            return {
              id: user.id.toString(),
              name: user.name || user.login,
              email: user.email,
              image: user.avatar_url,
              accessToken: credentials.token,
            };
          }
        } catch (e) {
          console.error(e);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token or PAT to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      } else if (user && (user as any).accessToken) {
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
});
