import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const NFTModule = buildModule("NFTModule", (m) => {


  const nft = m.contract("NFT",["0x972C9B2292A41c511016Ec7e589ecca3b199BdF6"]);

  return { nft };
});

export default NFTModule;
