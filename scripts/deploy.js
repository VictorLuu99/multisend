const { getContractAddress } = require("ethers/lib/utils");
const { ethers } = require("hardhat");
const hre = require("hardhat");
require("@nomiclabs/hardhat-ethers");
const { saveContract, sleep } = require("./utils");

(async () => {
  try {
    const network = hre.network.name;
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const AutoContractFactory = await ethers.getContractFactory("Auto");
    const autoAddress = await AutoContractFactory.deploy();
    await saveContract(network, "auto", autoAddress.address);
    console.log(autoAddress.address);
  } catch (e) {
    console.log(e);
  }
})();


