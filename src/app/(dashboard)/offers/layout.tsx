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
      <body className="pt-5 pb-20 md:py-0">
        <header className="hidden md:block mb-24">
          <HeaderNavigation />
        </header>
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
