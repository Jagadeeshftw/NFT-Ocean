"use client";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { client } from "@/app/client";
import { ConnectButton, lightTheme } from "thirdweb/react";
import UserDetailsModal from "./UserDetailsModal";
const ethers = require("ethers");

const customTheme = lightTheme({
  colors: {
    primaryButtonBg: "#9333EA",
  },
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isConnected, setIsConnected] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("isConnected") === "true"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [address, setAddress] = useState("");

  const handleModalSubmit = () => {
    setIsModalOpen(false);
  };

  const handleConnect = () => {
    const checkAddressInDatabase = async (userAddress: string) => {
      try {
        const response = await fetch(
          `/api/checkAddress?address=${userAddress}`
        );
        const result = await response.json();
        return result.exists; // Assuming the API returns { exists: boolean }
      } catch (error) {
        console.error("Error checking address in the database:", error);
        return false;
      }
    };

    const checkUserExistence = async (userAddress: string) => {
      // Check if the address exists in the database
      const addressExists = await checkAddressInDatabase(userAddress);
      console.log("addressExists:", addressExists);
      // Open the modal only if the address is not in the database
      if (!addressExists) {
        setIsModalOpen(true);
      }
    };

    const initProvider = async () => {
      let signer: any = null;

      let provider;
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);

        signer = await provider.getSigner();
        setAddress(signer.address);
        checkUserExistence(signer.address);
      }
    };
    initProvider();
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : "initial"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="flex flex-wrap items-center justify-between py-1 gap-6 md:py-1 md:gap-0 relative">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <Link
                href="/"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <span className="text-2xl font-bold text-primary dark:text-white">
                  NFT Ocean
                </span>
              </Link>

              <div className="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative p-6 -mr-6"
                >
                  <RxHamburgerMenu className="align-baseline h-8 w-8" />
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
            ></div>
            <div
              className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                          lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                          peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                          dark:shadow-none dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  <li>
                    <Link
                      href="/"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span className="flex gap-2">
                        <IoHomeOutline className="mt-1" />
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/explore"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span className="flex gap-2">
                        <MdOutlineExplore className="mt-1" />
                        Explore
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sellNFT"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Sell NFT</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/myNFT"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>My NFTs</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <ConnectButton
                  client={client}
                  appMetadata={{
                    name: "Example App",
                    url: "https://example.com",
                  }}
                  theme={customTheme}
                  onConnect={handleConnect} // Inline function to avoid auto-calling on page load
                />
              </div>
            </div>
            <UserDetailsModal
              isOpen={isModalOpen}
              address={address}
              onSubmit={handleModalSubmit}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
