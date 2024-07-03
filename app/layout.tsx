import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {AppProvider } from "./Context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue.bird",
  description: "social media app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
        {children}
        </AppProvider>
        </body>
    </html>
  );
}
