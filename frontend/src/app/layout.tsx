import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Ocean",
  description: "NFT MarketPlace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <NextThemesProvider attribute="class" defaultTheme="light">
          <ThirdwebProvider>
            <Navbar />
            {children}
          </ThirdwebProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
