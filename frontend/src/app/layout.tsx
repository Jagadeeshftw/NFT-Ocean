import type { Metadata } from "next";
import "ag-grid-community/styles/ag-grid.css";
// Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "./dashboard/context/SidebarContext";
import { StateContext } from "./dashboard/context/CartContext";

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
            <SidebarProvider>
            <StateContext>
              {children}
              </StateContext>
              </SidebarProvider>
          </ThirdwebProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
