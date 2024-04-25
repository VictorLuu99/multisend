require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-web3");

const dotenv = require('dotenv');
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: 'zulu',
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
   
    sepolia: {
      url: "https://ethereum-holesky-rpc.publicnode.com",
      accounts: [PRIVATE_KEY],
    },
    cyprus1: {
      url: "https://rpc.cyprus1.colosseum.quaiscan.io",
      accounts: ["0xce79b5ea064b12aed2dfc7a2598a37e12a01f8be1cb165d10c2720aa7e2f3908"],
      chainId: Number(9000),
    },
    zulu: {
      url: "https://rpc-testnet.zulunetwork.io",
      accounts: [PRIVATE_KEY],
      chainId: Number(90104),
    },
    base: {
      accounts: [PRIVATE_KEY],
      chainId: 8453,
      url: "https://mainnet.base.org",
    },
    base_sepolia: {
      accounts: [PRIVATE_KEY],
      chainId: 84532,
      url: "https://sepolia.base.org",
    },
  },

};

