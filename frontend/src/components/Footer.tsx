import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <p className="mb-4">
            <strong className="font-medium text-primary">NFT Ocean </strong>
            is a cutting-edge marketplace enabling users to buy, sell, and trade
            unique digital assets seamlessly. Dive into a vibrant ecosystem
            where creativity meets blockchain technology
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaLinkedin className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaGithub className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - NFT Ocean
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-primary mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              About{" "}
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              Help center{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-primary mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              Contribute{" "}
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              Report Bug{" "}
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              FAQs
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-primary mb-4 font-medium text-lg">Contact</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              <a href="">Discord </a>
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              LinkedIn{" "}
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              Twitter{" "}
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              Github{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
