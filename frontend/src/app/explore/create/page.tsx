"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SignupFormDemo() {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-slate-50 w-full max-auto">
      <div className="pt-36 px-10">
        <div className="flex flex-start flex-col">
          <h2 className="font-bold text-5xl text-neutral-800 text-center dark:text-neutral-200">
            Create New NFT
          </h2>
          <p className="text-neutral-600 text-center text-xl mt-4 mb-6 dark:text-neutral-300">
            Start your journey in the NFT space by creating your unique digital
            asset.
          </p>
        </div>
        <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <form className="my-8" onSubmit={handleSubmit}>
            <label
              className="custum-file-upload mb-4 w-full mx-auto"
              htmlFor="file"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill=""
                      d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="text">
                <span>Click to upload image</span>
              </div>
              <input type="file" id="file" onChange={handleImageChange} />
            </label>

            {selectedImage && (
              <div className="mb-4">
                <img
                  src={selectedImage as string}
                  alt="Selected"
                  className="w-full h-auto"
                />
              </div>
            )}

            <LabelInputContainer className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Cartoon Network" type="name" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="desc">Description</Label>
              <Input id="desc" placeholder="projectmayhem@fc.com" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="price">Price</Label>
              <Input id="price" placeholder="0.001 ETH" type="price" />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Create Item &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
