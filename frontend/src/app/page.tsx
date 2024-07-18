"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import GridBox from "@/components/GridBox";

export default function Home() {
  return (
    <>
      <AuroraBackground className="min-h-screen">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="relative  pt-16 sm:pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Transforming the world with{" "}
                <span className="text-primary dark:text-white">
                  digital creativity.
                </span>
              </h1>
              <p className="mt-3 sm:mt-8 text-gray-700 dark:text-gray-300">
                Welcome to the future of art and ownership! Dive into our
                cutting-edge NFT marketplace where creativity meets blockchain.
                Discover, buy, and sell unique digital assets securely and
                seamlessly. Join a community of visionary artists and
                collectors, and be a part of the digital art revolution.
              </p>
              <div className="mt-6 sm:mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <a
                  href="#"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    Get started
                  </span>
                </a>
                <a
                  href="#"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary dark:text-white">
                    Learn more
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      <div className="min-h-screen bg-slate-50 py-10">
        <GridBox />
      </div>
      <Footer />
    </>
  );
}
