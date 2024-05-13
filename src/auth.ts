import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Si esta en false se autentifica pero restrinjo el acceso (denegado)
      // return false

      return true;
    },
    async jwt({ token }) {
      const user = await prisma.user.findUnique({
        where: { email: token.email ?? "no-email" },
        select: {
          id: true,
          email: true,
          image: true,
          name: true,
          rol: true,
          isActive: true,
        },
      });

      if (!user) {
        const newUser = await prisma.user.create({
          data: {
            email: token?.email,
            image: token?.picture,
            name: token?.name,
          },
        });
        return newUser;
      }

      return user;
    },
    async session({ session, token }) {

      session.user = token as any;
      return session;
    },
  },
});
