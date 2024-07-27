import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const NFTModule = buildModule("NFTModule", (m) => {


  const nft = m.contract("NFT",["0xbF9A3A851262cb030a9919C53cD8be03AB0E805C"]);

  return { nft };
});

export default NFTModule;
