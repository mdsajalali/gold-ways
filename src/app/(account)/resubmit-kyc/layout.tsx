import type { Metadata } from "next";
import BottomNavigation from "@/components/core/BottomNavigation";
import HeaderNavigation from "@/components/core/HeaderNavigation";

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
      <body className="pb-20 pt-5 md:py-0">
        <header className="mb-24 hidden md:block">
          <HeaderNavigation />
        </header>
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
