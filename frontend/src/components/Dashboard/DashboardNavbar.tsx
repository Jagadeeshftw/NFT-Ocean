import React, { useContext, useState } from "react";
import { SidebarContext } from "@/app/dashboard/context/SidebarContext";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSunny } from "react-icons/md";
import { FaMoon, FaBell } from "react-icons/fa";
import { Avatar, Input, WindmillContext } from "@windmill/react-ui";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { client } from "@/app/client";
import UserDetailsModal from "../Navbar/UserDetailsModal";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
const ethers = require("ethers");
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/app/dashboard/context/CartContext";
import Cart from "./Cart";

const customTheme = lightTheme({
  colors: {
    primaryButtonBg: "#9333EA",
  },
});

function DashboardNavbar() {
  const { toggleSidebar } = useContext(SidebarContext);
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <RxHamburgerMenu className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <CiSearch className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700 bg-slate-50 p-2 border-faded-100 rounded-sm"
              placeholder="Search for NFTs"
              aria-label="Search" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} css={undefined}            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
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
            </ul>
          </div>
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
            theme={customTheme}
            onConnect={handleConnect} // Inline function to avoid auto-calling on page load
          />
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </ul>
      </div>
      <UserDetailsModal
        isOpen={isModalOpen}
        address={address}
        onSubmit={handleModalSubmit}
      />
      {showCart && <Cart />}
    </header>
  );
}

export default DashboardNavbar;
