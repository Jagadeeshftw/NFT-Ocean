"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarContext } from "./context/SidebarContext";
import { Suspense, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import ThemedSuspense from "@/components/Dashboard/ThemedSuspense";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const pathname = usePathname();
  console.log("isSidebarOpen in layout", isSidebarOpen);
  useEffect(() => {
    closeSidebar();
  }, [pathname]);

  return (
    <html lang="en">
      <body className="">
        <div
          className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
            isSidebarOpen && "overflow-hidden"
          }`}
        >
          <Sidebar />
          <div className="flex flex-col flex-1 w-full">
            <DashboardNavbar />
            <main className="h-full overflow-y-auto">
              <div className="container grid px-6 mx-auto h-full w-full">
                <Suspense fallback={<ThemedSuspense />}>{children}</Suspense>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
