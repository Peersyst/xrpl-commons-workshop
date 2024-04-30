import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    evmSidechain: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: ["PRIVATE_KEY"]
    }
  }
};

export default config;
