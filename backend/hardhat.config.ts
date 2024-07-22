import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("hardhat-tracer");
const { vars } = require("hardhat/config");

const INFURA_API_KEY = vars.get("INFURA_API_KEY");


const AMOY_PRIVATE_KEY = vars.get("AMOY_PRIVATE_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: `https://polygon-amoy.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [AMOY_PRIVATE_KEY],
    },
  },

};

export default config;
