import type { Metadata } from "next";
import { Bodoni_Moda,Old_Standard_TT, Unna } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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

// Import Bodoni Moda font
const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  weight: ["400", "700"],
});

const unna = Unna({
  subsets: ["latin"],
  variable: "--font-unna",
  weight: ["400", "700"],
});

const oldStandardTT = Old_Standard_TT({
  subsets: ["latin"],
  variable: "--font-old-standard-tt",
  weight: "700", 
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
        className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} ${unna.variable} ${oldStandardTT.variable} antialiased`}
        style={{ fontFamily: 'var(--font-geist-sans), var(--font-geist-mono), var(--font-bodoni-moda),var(--font-unna), var(--font-old-standard-tt)' }}
      >
        {children}
      </body>
    </html>
  );
}