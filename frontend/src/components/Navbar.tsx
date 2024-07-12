import React, { useState, useEffect } from "react";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { client } from "../app/client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const customTheme = lightTheme({
    colors: {
      primaryButtonBg: "#9333EA",
    },
  });

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
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/buyNFT"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Buy NFT</span>
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
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: background-color 0.3s ease;
        }
        .navbar.initial {
          background-color: transparent;
        }
        .navbar.scrolled {
          background-color: white;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
