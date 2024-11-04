import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BottomNavigation from "@/components/core/BottomNavigation";
import HeaderNavigation from "@/components/core/HeaderNavigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gold Ways",
  description: "Powered by Tech Sand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="hidden md:block mb-24">
          <HeaderNavigation />
        </header>
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
