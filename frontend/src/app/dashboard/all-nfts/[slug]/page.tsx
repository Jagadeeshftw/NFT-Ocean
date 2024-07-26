"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "../../context/CartContext";
import { initProvider } from "@/lib";

import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
type Item = {
  price: string;
  tokenId: string;
  seller: string;
  owner: string;
  sold: boolean;
  image: string;
  name: string;
  desc: string;
};


const Page = () => {

  const pathname = usePathname();

  // Function to extract the desired part from the URL path
  const extractNameFromPath = (path: string) => {
    const parts = path.split("/");
    return decodeURIComponent(parts[parts.length - 1]);
  };
  const handleBuyNow = async () => {

    const { signer } = await initProvider();
    const signerAddress = signer.address;

    // Check if the item.seller address is equal to the signer address

    if (mainItem && mainItem.seller === signerAddress) {
      toast.error("You can't buy items that you created.");
      return;
    }
    if(mainItem)
    {
      onAdd(mainItem);
    }
    
    setShowCart(true);
  }

  const itemName = extractNameFromPath(pathname);
  const [items, setItems] = useState<Item[]>([]);
  const [mainItem, setMainItem] = useState<Item>();
  const { onAdd, setShowCart } = useStateContext();
  useEffect(() => {
    initConfig();
  },[]);
  const initConfig = async () => {
    try {
      const { AllItemsCreated } = await initProvider();
      // Find the item that matches the itemName
      const value: Item | undefined = AllItemsCreated.find(item => item.name === itemName);
      if (value) {
        setMainItem(value);
      }
      setItems(AllItemsCreated);
      
    } catch (error) {
      console.error("Error initializing configuration:", error);

    }

    console.log(items);
  };
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={mainItem?.image}
              className="product-detail-image"
              alt=""
            />
          </div>

        </div>

        <div className="product-detail-desc">
          <h1 className="font-bold text-3xl">{mainItem?.name}</h1>
          <h4 className="font-semibold">Seller Account: </h4>
          <p>{mainItem?.seller}</p>

          <h4 className="font-semibold">Description: </h4>
          <p>{mainItem?.desc}</p>
          <p className="price">{mainItem?.price} MATIC</p>

          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => {if(mainItem){onAdd(mainItem)}}}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow} >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2 className="font-bold">You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {items?.map((product) => (
              <div key={product.tokenId}>
                <Link href={`/dashboard/all-nfts/${product.name}`}>
                  <div className="product-card">
                    <Image
                      src={product.image}
                      width={250}
                      height={250}
                      className="product-image"
                      alt="image"
                    />
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
