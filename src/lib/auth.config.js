export const authConfig = {
  pages: { signIn: "/login" },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.count = user.count;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.id = token.id;
        session.isAdmin = token.isAdmin;
        session.count = token.count;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;

      const isOnAdminPage = request.nextUrl?.pathname.startsWith("/admin");
      const isOnVotingPage =
        request.nextUrl?.pathname.startsWith("/dashboard/voting");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      if (isOnAdminPage && !auth?.isAdmin) {
        return false;
      }
      if (isOnVotingPage && !user) {
        return false;
      }
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      if (isOnVotingPage && auth?.count >= 1) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};
