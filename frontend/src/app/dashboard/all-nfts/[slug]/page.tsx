import React from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: "https://chatgpt.com/api/content/file-BLi2fySuZdmEpaSgUKBqXrGg",
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

const Page = () => {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={products[0].image}
              className="product-detail-image"
              alt=""
            />
          </div>
          <div className="small-images-container">
            {products[0].image?.map((item, i) => (
              <Image
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{products[0].name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>hello this is the details of the project</p>
          <p className="price">${products[0].price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(products[0], qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
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
      </div>
    </div>
  );
};

export default Page;
