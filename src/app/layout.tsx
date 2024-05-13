import { Navbar } from "@/components/Navbar/Navbar";
import { titleFont } from "@/config/fonts";
import AuthProvider from "@/context/AuthProvider";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Promotion } from "@/components/Promotion/Promotion";

export const metadata: Metadata = {
  title: "Ecommerce - Muebles",
  description: "Muebles - By->MauriDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${titleFont.className}`}>
        <AuthProvider>
          <Promotion />
          <Navbar />
          <NextTopLoader
            height={6}
            showSpinner={false}
            shadow="0 0 10px #8c00f8,0 0 5px #8c00f8"
            color="#A02EEF"
          />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
