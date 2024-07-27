"use client";
import React from "react";
import routes from "./Routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarContent() {
  const path = usePathname();
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="#"
      >
        NFT Ocean
      </a>
      <ul className="mt-6">
        {routes.map((route) => (
          <li className="relative px-6 py-3" key={route.name}>
            <Link
              href={route.path}
              className={
                path === route.path
                  ? "text-gray-800 dark:text-gray-100 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  : "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              }
            >
              {path === route.path && (
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
              {route.icon}
              <span className="ml-4 align-top">{route.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="px-6 my-6">
        <Link
        href="/dashboard/create"
        className="px-6 py-2 bg-primary text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Create NFT
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarContent;
