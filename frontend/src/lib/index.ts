
"use client"

import { Contract } from "ethers";
import NFT from "../lib/abi/NFT.json";
import Marketplace from "../lib/abi/Marketplace.json";
import axios from 'axios'
const ethers = require("ethers");
export const initProvider = async () => {
  let signer: any = null;
  let provider;

  if (window.ethereum == null) {
    console.log("MetaMask not installed; using read-only defaults");
    provider = ethers.getDefaultProvider();
  } else {
    provider = new ethers.BrowserProvider(window.ethereum as any);
    signer = await provider.getSigner();
  }

  const marketplaceAddress = "0x0FCC61C8e67E8E6290E0B24e38f2ed3887e3e88B";
  const nftAddress = "0xaD7d3B9dFd2Ef425F16a2f595d2dB9F7C641FeBd";


  const nft = new Contract(nftAddress, NFT.abi, signer);
  const marketplace = new Contract(marketplaceAddress, Marketplace.abi, signer);

  const userItems = await marketplace.fetchItemsCreated()

  const ItemsCreatedByUser = await Promise.all(userItems.map(async i => {
      

      const tokenURI = await nft.tokenURI(i[2]);
      const meta = await axios.get(tokenURI);
      let price = ethers.formatUnits(i[5].toString(), 'ether')
      let item = {
        price,
        tokenId: i[2],
        seller: i[3],
        owner: i[4],
        sold: i[6],
        image: meta.data.image,
        name: meta.data.name,
        desc: meta.data.desc,
      }
      return item;
  }))

  const allItems = await marketplace.fetchMarketItems()

  const AllItemsCreated = await Promise.all(allItems.map(async i => {
      

      const tokenURI = await nft.tokenURI(i[2]);
      const meta = await axios.get(tokenURI);
      let price = ethers.formatUnits(i[5].toString(), 'ether')
      let item = {
        price,
        tokenId: i[2],
        seller: i[3],
        owner: i[4],
        sold: i[6],
        image: meta.data.image,
        name: meta.data.name,
        desc: meta.data.desc,
      }
      return item;
  }))

  const myNFTs = await marketplace.fetchMyNFTs()

  const OwnedNFTs = await Promise.all(myNFTs.map(async i => {
      

      const tokenURI = await nft.tokenURI(i[2]);
      const meta = await axios.get(tokenURI);
      let price = ethers.formatUnits(i[5].toString(), 'ether')
      let item = {
        price,
        tokenId: i[2],
        seller: i[3],
        owner: i[4],
        sold: i[6],
        image: meta.data.image,
        name: meta.data.name,
        desc: meta.data.desc,
      }
      return item;
  }))

  return { nftAddress, nft, marketplace, signer, provider, ItemsCreatedByUser, AllItemsCreated, OwnedNFTs };


};
