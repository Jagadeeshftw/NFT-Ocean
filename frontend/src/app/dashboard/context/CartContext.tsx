"use client";
import { initProvider } from '@/lib';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-hot-toast';

// Define the types for the context state
interface Item {
  price: string;
  tokenId: string;
  seller: string;
  owner: string;
  sold: boolean;
  image: string;
  name: string;
  desc: string;
}

interface ContextProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Item[];
  totalPrice: number;
  totalQuantities: number;
  onAdd: (product: Item) => void;
  onRemove: (product: Item) => void;
  setCartItems: React.Dispatch<React.SetStateAction<Item[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotalQuantities: React.Dispatch<React.SetStateAction<number>>;
}

// Define the context with an initial state
const Context = createContext<ContextProps | undefined>(undefined);

interface StateContextProps {
  children: ReactNode;
}

export const StateContext = ({ children }: StateContextProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  let foundProduct: Item | undefined;

  const onAdd = async (product: Item) => {
    const { signer } = await initProvider();
    const signerAddress = signer.address;

    // Check if the item.seller address is equal to the signer address
    if (product.seller === signerAddress) {
      toast.error("You can't buy items that you created.");
      return;
    }

    const checkProductInCart = cartItems.find((item) => item.tokenId === product.tokenId);

    if (!checkProductInCart) {
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + parseFloat(product.price));
      setCartItems([...cartItems, { ...product }]);
      toast.success(`${product.name} added to the cart.`);
    } else {
      toast.error(`${product.name} was already there in the cart.`);
    }
  };

  const onRemove = (product: Item) => {
    foundProduct = cartItems.find((item) => item.tokenId === product.tokenId);
    const newCartItems = cartItems.filter((item) => item.tokenId !== product.tokenId);

    if (foundProduct) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice - parseFloat(foundProduct!.price));
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
      setCartItems(newCartItems);
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        onAdd,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateContext provider');
  }
  return context;
};
