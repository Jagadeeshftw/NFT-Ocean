"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarContext } from "./context/SidebarContext";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const pathname = usePathname();
  console.log("is side", isSidebarOpen);
  useEffect(() => {
    closeSidebar();
  }, [pathname, closeSidebar]);

  return (
    <html lang="en">
      <body className="">
        <div
          className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
            isSidebarOpen && "overflow-hidden"
          }`}
        >
          <Sidebar />
          <div className="flex flex-col flex-1 w-full"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
