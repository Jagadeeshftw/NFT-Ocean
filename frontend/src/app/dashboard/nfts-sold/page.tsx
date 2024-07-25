"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { initProvider } from "@/lib";

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
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    initConfig();
  }, []);

  const initConfig = async () => {
    try {
      const { ItemsCreatedByUser } = await initProvider();
      console.log(ItemsCreatedByUser);
      // Find the items that are sold
      const soldItems: Item[] = ItemsCreatedByUser.filter((item: Item) => item.sold === true);
      setItems(soldItems);

    } catch (error) {
      console.error("Error initializing configuration:", error);
    }
  };

  return (
    <div>
      {!items.length ? (
        <div className="products-heading">
          <h2>None of your NFTs sold so far</h2>
        </div>
      ) : (
        <>
          <div className="products-heading">
            <h2>Discover All Sold Digital Art</h2>
            <p>Explore and own exclusive NFTs created by talented artists from around the world.</p>
          </div>

          <div className="products-container">
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
                    <p className="product-price">{product.price} MATIC</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
