import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const NFTModule = buildModule("NFTModule", (m) => {


  const nft = m.contract("NFT",["0x63F912e7e803f58b5C38D4Ca172e4CfF400Bf437"]);

  return { nft };
});

export default NFTModule;
