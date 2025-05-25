import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arvam Solutions",
  description: "Arvam Solutions - Enterprise Asset Management",
  icons: [
    {
      rel: 'icon',
      url: '/img/logo.png',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/img/logo.png',
      type: 'image/png',
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
