const { getContractAddress } = require("ethers/lib/utils");
const { ethers } = require("hardhat");
const hre = require("hardhat");
require("@nomiclabs/hardhat-ethers");


(async () => {
  try {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const AutoContractFactory = await ethers.getContractFactory("Auto");
    const autoAddress = await AutoContractFactory.deploy();
    console.log(autoAddress.address);
  } catch (e) {
    console.log(e);
  }
})();


