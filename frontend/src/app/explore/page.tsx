"use client";
import BackgroundContainer from "@/components/Background/BackgroundContainer";
import ExploreCard from "@/components/Cards/ExploreCard";
import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaSellsy } from "react-icons/fa";
import { BsListNested } from "react-icons/bs";

const page = () => {
  return (
    <>
      <BackgroundContainer>
        <div className="relative pt-16 sm:pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Discover, Create, and Trade
              <span className="text-primary dark:text-white"></span>
            </h1>
            <p className="mt-3 sm:mt-8 text-gray-700 dark:text-gray-300">
              Step into the future of digital art and ownership. Welcome to NFT
              Ocean, your premier destination for exploring, creating, and
              trading unique digital assets. Join our vibrant community of
              artists and collectors, where creativity meets blockchain
              technology. Buy, sell, and discover NFTs seamlessly and securely,
              and be part of the digital art revolution.
            </p>
          </div>
        </div>
      </BackgroundContainer>
      <div className="pt-6 min-h-screen sm:pt-16 flex flex-wrap justify-center align-center gap-y-4 gap-x-6 bg-slate-50">
        <ExploreCard
          title="Create an NFT"
          description="Unleash your creativity and mint your unique digital art on our platform. Start your journey as an NFT artist today!"
          icon={MdOutlineCreateNewFolder}
          href="explore/create"
        />
        <ExploreCard
          title="Sell Your NFT"
          description="Reach a global audience and sell your NFTs in our secure and intuitive marketplace. Turn your art into profit!"
          icon={FaSellsy}
          href=""
        />
        <ExploreCard
          title="Explore All NFTs"
          description="Browse through a vast collection of NFTs created by talented artists worldwide. Discover your next favorite piece of digital art!"
          icon={BsListNested}
          href=""
        />
      </div>
    </>
  );
};

export default page;
