import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useStateContext } from '@/app/dashboard/context/CartContext';
import { initProvider } from '@/lib';
import { ethers } from 'ethers';
import { useRouter } from 'next/navigation';

const Cart = () => {

  const router = useRouter(); // Initialize useRouter
  const { totalPrice, totalQuantities, cartItems, setCartItems, setTotalPrice, setTotalQuantities, setShowCart, onRemove } = useStateContext();

  const handlePayment = async () => {
    try {
      const { nftAddress, marketplace, allItemsCreated } = await initProvider();

      console.log("all items", allItemsCreated )
      console.log(cartItems);
      for (const item of cartItems) {
        const priceInBigNumber = ethers.parseUnits(item.price, 'ether'); // Convert to BigNumber
        console.log(item.price);
        console.log(priceInBigNumber);
        await marketplace.createMarketSale(
          nftAddress,
          item.tokenId,
          {
            value: priceInBigNumber,
          }
        );
      }
      toast.success("Payment successful and items purchased!");
      // Clear the cart after successful payment
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
      setShowCart(false);
      router.push("/dashboard/my-nfts");
  
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} className="mx-auto" />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item.tokenId}>
              <img src={item?.image} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5 className='font-bold'>{item.name}</h5>
                  <h4 className='font-bold mt-1'>{item.price} MATIC</h4>
                </div>
                <div className="flex bottom">
                  <button
                    className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                    onClick={() => onRemove(item)}
                  >
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3 className='font-bold'>Subtotal:</h3>
              <h3 className='font-bold'>{totalPrice} MATIC</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handlePayment}>
                Pay with MetaMask
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart;
