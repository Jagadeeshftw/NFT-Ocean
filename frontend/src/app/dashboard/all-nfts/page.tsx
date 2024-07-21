import Link from "next/link";
import React from "react";
import Image from "next/image";
const page = () => {
  const products = [
    {
      id: 1,
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
      name: "Speaker",
      price: "56",
    },
    {
      id: 2,
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
      name: "Speaker2",
      price: "56",
    },
    {
      id: 3,
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
      name: "Speaker3",
      price: "56",
    },
  ];

  return (
    <div>
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <div key={product.id}>
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
  );
};

export default page;
