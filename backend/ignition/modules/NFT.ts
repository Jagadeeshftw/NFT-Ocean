import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const NFTModule = buildModule("NFTModule", (m) => {


  const nft = m.contract("NFT",["0x0FCC61C8e67E8E6290E0B24e38f2ed3887e3e88B"]);

  return { nft };
});

export default NFTModule;
