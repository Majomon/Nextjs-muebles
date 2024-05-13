"use client";

import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children, ...rest }: Props) {
  return (
    <SessionProvider>
      <NextTopLoader />
      {children}
    </SessionProvider>
  );
}
